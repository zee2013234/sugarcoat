{
  const $___stub_e71ee3f8b21bfa35 = {};
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
  })($___stub_e71ee3f8b21bfa35);
  const $___stub_cdc5a54489618108 = {};
  (exports => {
    'use strict';
    const cookieJar = {};
    exports.cookie = {
      enumerable: true,
      configurable: true,
      get () {
        return Object.entries(cookieJar)
          .map(([key, value]) => (value == null ? key : `${key}=${value}`))
          .join('; ');
      },
      set (value) {
        const pair = value.split(';')[0];
        const parts = pair.split('=');
        const cookieKey = parts.shift().trim();
        const cookieValue = parts.length > 0 ? parts.join('=').trim() : null;
        cookieJar[cookieKey] = cookieValue;
      },
    };
  })($___stub_cdc5a54489618108);
  const $___stub_addd751f0eb655f8 = {};
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
  })($___stub_addd751f0eb655f8);
  const $___stub_aa3322bf228cccca = {};
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
  })($___stub_aa3322bf228cccca);
  (function () {
    if (
      typeof window.JSON === 'object' &&
      typeof window.JSON.stringify === 'function' &&
      typeof window.JSON.parse === 'function'
    ) {
      JSON_PIWIK = window.JSON;
    } else {
      (function () {
        var a = {};
        (function () {
          var c = typeof define === 'function' && define.amd;
          var e = { function: true, object: true };
          var h = e[typeof a] && a && !a.nodeType && a;
          var i = (e[typeof window] && window) || this,
            b =
              h &&
              e[typeof module] &&
              module &&
              !module.nodeType &&
              typeof global == 'object' &&
              global;
          if (b && (b.global === b || b.window === b || b.self === b)) {
            i = b;
          }
          function j (ab, V) {
            ab || (ab = i.Object());
            V || (V = i.Object());
            var K = ab.Number || i.Number,
              R = ab.String || i.String,
              x = ab.Object || i.Object,
              S = ab.Date || i.Date,
              T = ab.SyntaxError || i.SyntaxError,
              aa = ab.TypeError || i.TypeError,
              J = ab.Math || i.Math,
              Y = ab.JSON || i.JSON;
            if (typeof Y == 'object' && Y) {
              V.stringify = Y.stringify;
              V.parse = Y.parse;
            }
            var n = x.prototype,
              u = n.toString,
              r,
              m,
              L;
            var B = new S(-3509827334573292);
            try {
              B =
                B.getUTCFullYear() == -109252 &&
                B.getUTCMonth() === 0 &&
                B.getUTCDate() === 1 &&
                B.getUTCHours() == 10 &&
                B.getUTCMinutes() == 37 &&
                B.getUTCSeconds() == 6 &&
                B.getUTCMilliseconds() == 708;
            } catch (v) {}
            function o (ac) {
              if (o[ac] !== L) {
                return o[ac];
              }
              var ad;
              if (ac == 'bug-string-char-index') {
                ad = 'a'[0] != 'a';
              } else {
                if (ac == 'json') {
                  ad = o('json-stringify') && o('json-parse');
                } else {
                  var ak,
                    ah = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                  if (ac == 'json-stringify') {
                    var ai = V.stringify,
                      aj = typeof ai == 'function' && B;
                    if (aj) {
                      (ak = function () {
                        return 1;
                      }).toJSON = ak;
                      try {
                        aj =
                          ai(0) === '0' &&
                          ai(new K()) === '0' &&
                          ai(new R()) == '""' &&
                          ai(u) === L &&
                          ai(L) === L &&
                          ai() === L &&
                          ai(ak) === '1' &&
                          ai([ak]) == '[1]' &&
                          ai([L]) == '[null]' &&
                          ai(null) == 'null' &&
                          ai([L, u, null]) == '[null,null,null]' &&
                          ai({ a: [ak, true, false, null, '\0\b\n\f\r\t'] }) == ah &&
                          ai(null, ak) === '1' &&
                          ai([1, 2], null, 1) == '[\n 1,\n 2\n]' &&
                          ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' &&
                          ai(new S(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' &&
                          ai(new S(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' &&
                          ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"';
                      } catch (ae) {
                        aj = false;
                      }
                    }
                    ad = aj;
                  }
                  if (ac == 'json-parse') {
                    var ag = V.parse;
                    if (typeof ag == 'function') {
                      try {
                        if (ag('0') === 0 && !ag(false)) {
                          ak = ag(ah);
                          var af = ak.a.length == 5 && ak.a[0] === 1;
                          if (af) {
                            try {
                              af = !ag('"\t"');
                            } catch (ae) {}
                            if (af) {
                              try {
                                af = ag('01') !== 1;
                              } catch (ae) {}
                            }
                            if (af) {
                              try {
                                af = ag('1.') !== 1;
                              } catch (ae) {}
                            }
                          }
                        }
                      } catch (ae) {
                        af = false;
                      }
                    }
                    ad = af;
                  }
                }
              }
              return (o[ac] = !!ad);
            }
            if (!o('json')) {
              var U = '[object Function]',
                Q = '[object Date]',
                N = '[object Number]',
                O = '[object String]',
                E = '[object Array]',
                A = '[object Boolean]';
              var F = o('bug-string-char-index');
              if (!B) {
                var s = J.floor;
                var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                var D = function (ac, ad) {
                  return (
                    Z[ad] +
                    365 * (ac - 1970) +
                    s((ac - 1969 + (ad = +(ad > 1))) / 4) -
                    s((ac - 1901 + ad) / 100) +
                    s((ac - 1601 + ad) / 400)
                  );
                };
              }
              if (!(r = n.hasOwnProperty)) {
                r = function (ae) {
                  var ac = {},
                    ad;
                  if (
                    ((ac.__proto__ = null), (ac.__proto__ = { toString: 1 }), ac).toString != u
                  ) {
                    r = function (ah) {
                      var ag = this.__proto__,
                        af = ah in ((this.__proto__ = null), this);
                      this.__proto__ = ag;
                      return af;
                    };
                  } else {
                    ad = ac.constructor;
                    r = function (ag) {
                      var af = (this.constructor || ad).prototype;
                      return ag in this && !(ag in af && this[ag] === af[ag]);
                    };
                  }
                  ac = null;
                  return r.call(this, ae);
                };
              }
              m = function (ae, ah) {
                var af = 0,
                  ac,
                  ad,
                  ag;
                (ac = function () {
                  this.valueOf = 0;
                }).prototype.valueOf = 0;
                ad = new ac();
                for (ag in ad) {
                  if (r.call(ad, ag)) {
                    af++;
                  }
                }
                ac = ad = null;
                if (!af) {
                  ad = [
                    'valueOf',
                    'toString',
                    'toLocaleString',
                    'propertyIsEnumerable',
                    'isPrototypeOf',
                    'hasOwnProperty',
                    'constructor',
                  ];
                  m = function (aj, an) {
                    var am = u.call(aj) == U,
                      al,
                      ak;
                    var ai =
                      (!am &&
                        typeof aj.constructor != 'function' &&
                        e[typeof aj.hasOwnProperty] &&
                        aj.hasOwnProperty) ||
                      r;
                    for (al in aj) {
                      if (!(am && al == 'prototype') && ai.call(aj, al)) {
                        an(al);
                      }
                    }
                    for (ak = ad.length; (al = ad[--ak]); ai.call(aj, al) && an(al)) {}
                  };
                } else {
                  if (af == 2) {
                    m = function (aj, am) {
                      var ai = {},
                        al = u.call(aj) == U,
                        ak;
                      for (ak in aj) {
                        if (
                          !(al && ak == 'prototype') &&
                          !r.call(ai, ak) &&
                          (ai[ak] = 1) &&
                          r.call(aj, ak)
                        ) {
                          am(ak);
                        }
                      }
                    };
                  } else {
                    m = function (aj, am) {
                      var al = u.call(aj) == U,
                        ak,
                        ai;
                      for (ak in aj) {
                        if (
                          !(al && ak == 'prototype') &&
                          r.call(aj, ak) &&
                          !(ai = ak === 'constructor')
                        ) {
                          am(ak);
                        }
                      }
                      if (ai || r.call(aj, (ak = 'constructor'))) {
                        am(ak);
                      }
                    };
                  }
                }
                return m(ae, ah);
              };
              if (!o('json-stringify')) {
                var q = {
                  92: '\\\\',
                  34: '\\"',
                  8: '\\b',
                  12: '\\f',
                  10: '\\n',
                  13: '\\r',
                  9: '\\t',
                };
                var I = '000000';
                var t = function (ac, ad) {
                  return (I + (ad || 0)).slice(-ac);
                };
                var z = '\\u00';
                var C = function (ai) {
                  var ad = '"',
                    ag = 0,
                    ah = ai.length,
                    ac = !F || ah > 10;
                  var af = ac && (F ? ai.split('') : ai);
                  for (; ag < ah; ag++) {
                    var ae = ai.charCodeAt(ag);
                    switch (ae) {
                      case 8:
                      case 9:
                      case 10:
                      case 12:
                      case 13:
                      case 34:
                      case 92:
                        ad += q[ae];
                        break;
                      default:
                        if (ae < 32) {
                          ad += z + t(2, ae.toString(16));
                          break;
                        }
                        ad += ac ? af[ag] : ai.charAt(ag);
                    }
                  }
                  return ad + '"';
                };
                var p = function (ai, aA, ag, al, ax, ac, aj) {
                  var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
                  try {
                    at = aA[ai];
                  } catch (am) {}
                  if (typeof at == 'object' && at) {
                    ae = u.call(at);
                    if (ae == Q && !r.call(at, 'toJSON')) {
                      if (at > -1 / 0 && at < 1 / 0) {
                        if (D) {
                          ay = s(at / 86400000);
                          for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) {}
                          for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) {}
                          ay = 1 + ay - D(ap, az);
                          ak = ((at % 86400000) + 86400000) % 86400000;
                          aw = s(ak / 3600000) % 24;
                          au = s(ak / 60000) % 60;
                          aq = s(ak / 1000) % 60;
                          an = ak % 1000;
                        } else {
                          ap = at.getUTCFullYear();
                          az = at.getUTCMonth();
                          ay = at.getUTCDate();
                          aw = at.getUTCHours();
                          au = at.getUTCMinutes();
                          aq = at.getUTCSeconds();
                          an = at.getUTCMilliseconds();
                        }
                        at =
                          (ap <= 0 || ap >= 10000
                            ? (ap < 0 ? '-' : '+') + t(6, ap < 0 ? -ap : ap)
                            : t(4, ap)) +
                          '-' +
                          t(2, az + 1) +
                          '-' +
                          t(2, ay) +
                          'T' +
                          t(2, aw) +
                          ':' +
                          t(2, au) +
                          ':' +
                          t(2, aq) +
                          '.' +
                          t(3, an) +
                          'Z';
                      } else {
                        at = null;
                      }
                    } else {
                      if (
                        typeof at.toJSON == 'function' &&
                        ((ae != N && ae != O && ae != E) || r.call(at, 'toJSON'))
                      ) {
                        at = at.toJSON(ai);
                      }
                    }
                  }
                  if (ag) {
                    at = ag.call(aA, ai, at);
                  }
                  if (at === null) {
                    return 'null';
                  }
                  ae = u.call(at);
                  if (ae == A) {
                    return '' + at;
                  } else {
                    if (ae == N) {
                      return at > -1 / 0 && at < 1 / 0 ? '' + at : 'null';
                    } else {
                      if (ae == O) {
                        return C('' + at);
                      }
                    }
                  }
                  if (typeof at == 'object') {
                    for (af = aj.length; af--; ) {
                      if (aj[af] === at) {
                        throw aa();
                      }
                    }
                    aj.push(at);
                    ar = [];
                    av = ac;
                    ac += ax;
                    if (ae == E) {
                      for (ah = 0, af = at.length; ah < af; ah++) {
                        ad = p(ah, at, ag, al, ax, ac, aj);
                        ar.push(ad === L ? 'null' : ad);
                      }
                      ao = ar.length
                        ? ax
                          ? '[\n' + ac + ar.join(',\n' + ac) + '\n' + av + ']'
                          : '[' + ar.join(',') + ']'
                        : '[]';
                    } else {
                      m(al || at, function (aC) {
                        var aB = p(aC, at, ag, al, ax, ac, aj);
                        if (aB !== L) {
                          ar.push(C(aC) + ':' + (ax ? ' ' : '') + aB);
                        }
                      });
                      ao = ar.length
                        ? ax
                          ? '{\n' + ac + ar.join(',\n' + ac) + '\n' + av + '}'
                          : '{' + ar.join(',') + '}'
                        : '{}';
                    }
                    aj.pop();
                    return ao;
                  }
                };
                V.stringify = function (ac, ae, af) {
                  var ad, al, aj, ai;
                  if (e[typeof ae] && ae) {
                    if ((ai = u.call(ae)) == U) {
                      al = ae;
                    } else {
                      if (ai == E) {
                        aj = {};
                        for (
                          var ah = 0, ag = ae.length, ak;
                          ah < ag;
                          ak = ae[ah++], ((ai = u.call(ak)), ai == O || ai == N) && (aj[ak] = 1)
                        ) {}
                      }
                    }
                  }
                  if (af) {
                    if ((ai = u.call(af)) == N) {
                      if ((af -= af % 1) > 0) {
                        for (ad = '', af > 10 && (af = 10); ad.length < af; ad += ' ') {}
                      }
                    } else {
                      if (ai == O) {
                        ad = af.length <= 10 ? af : af.slice(0, 10);
                      }
                    }
                  }
                  return p('', ((ak = {}), (ak[''] = ac), ak), al, aj, ad, '', []);
                };
              }
              if (!o('json-parse')) {
                var M = R.fromCharCode;
                var l = {
                  92: '\\',
                  34: '"',
                  47: '/',
                  98: '\b',
                  116: '\t',
                  110: '\n',
                  102: '\f',
                  114: '\r',
                };
                var G, X;
                var H = function () {
                  G = X = null;
                  throw T();
                };
                var y = function () {
                  var ah = X,
                    af = ah.length,
                    ag,
                    ae,
                    ac,
                    ai,
                    ad;
                  while (G < af) {
                    ad = ah.charCodeAt(G);
                    switch (ad) {
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        G++;
                        break;
                      case 123:
                      case 125:
                      case 91:
                      case 93:
                      case 58:
                      case 44:
                        ag = F ? ah.charAt(G) : ah[G];
                        G++;
                        return ag;
                      case 34:
                        for (ag = '@', G++; G < af; ) {
                          ad = ah.charCodeAt(G);
                          if (ad < 32) {
                            H();
                          } else {
                            if (ad == 92) {
                              ad = ah.charCodeAt(++G);
                              switch (ad) {
                                case 92:
                                case 34:
                                case 47:
                                case 98:
                                case 116:
                                case 110:
                                case 102:
                                case 114:
                                  ag += l[ad];
                                  G++;
                                  break;
                                case 117:
                                  ae = ++G;
                                  for (ac = G + 4; G < ac; G++) {
                                    ad = ah.charCodeAt(G);
                                    if (
                                      !(
                                        (ad >= 48 && ad <= 57) ||
                                        (ad >= 97 && ad <= 102) ||
                                        (ad >= 65 && ad <= 70)
                                      )
                                    ) {
                                      H();
                                    }
                                  }
                                  ag += M('0x' + ah.slice(ae, G));
                                  break;
                                default:
                                  H();
                              }
                            } else {
                              if (ad == 34) {
                                break;
                              }
                              ad = ah.charCodeAt(G);
                              ae = G;
                              while (ad >= 32 && ad != 92 && ad != 34) {
                                ad = ah.charCodeAt(++G);
                              }
                              ag += ah.slice(ae, G);
                            }
                          }
                        }
                        if (ah.charCodeAt(G) == 34) {
                          G++;
                          return ag;
                        }
                        H();
                      default:
                        ae = G;
                        if (ad == 45) {
                          ai = true;
                          ad = ah.charCodeAt(++G);
                        }
                        if (ad >= 48 && ad <= 57) {
                          if (ad == 48 && ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)) {
                            H();
                          }
                          ai = false;
                          for (; G < af && ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57); G++) {}
                          if (ah.charCodeAt(G) == 46) {
                            ac = ++G;
                            for (
                              ;
                              ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57);
                              ac++
                            ) {}
                            if (ac == G) {
                              H();
                            }
                            G = ac;
                          }
                          ad = ah.charCodeAt(G);
                          if (ad == 101 || ad == 69) {
                            ad = ah.charCodeAt(++G);
                            if (ad == 43 || ad == 45) {
                              G++;
                            }
                            for (
                              ac = G;
                              ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57);
                              ac++
                            ) {}
                            if (ac == G) {
                              H();
                            }
                            G = ac;
                          }
                          return +ah.slice(ae, G);
                        }
                        if (ai) {
                          H();
                        }
                        if (ah.slice(G, G + 4) == 'true') {
                          G += 4;
                          return true;
                        } else {
                          if (ah.slice(G, G + 5) == 'false') {
                            G += 5;
                            return false;
                          } else {
                            if (ah.slice(G, G + 4) == 'null') {
                              G += 4;
                              return null;
                            }
                          }
                        }
                        H();
                    }
                  }
                  return '$';
                };
                var W = function (ad) {
                  var ac, ae;
                  if (ad == '$') {
                    H();
                  }
                  if (typeof ad == 'string') {
                    if ((F ? ad.charAt(0) : ad[0]) == '@') {
                      return ad.slice(1);
                    }
                    if (ad == '[') {
                      ac = [];
                      for (; ; ae || (ae = true)) {
                        ad = y();
                        if (ad == ']') {
                          break;
                        }
                        if (ae) {
                          if (ad == ',') {
                            ad = y();
                            if (ad == ']') {
                              H();
                            }
                          } else {
                            H();
                          }
                        }
                        if (ad == ',') {
                          H();
                        }
                        ac.push(W(ad));
                      }
                      return ac;
                    } else {
                      if (ad == '{') {
                        ac = {};
                        for (; ; ae || (ae = true)) {
                          ad = y();
                          if (ad == '}') {
                            break;
                          }
                          if (ae) {
                            if (ad == ',') {
                              ad = y();
                              if (ad == '}') {
                                H();
                              }
                            } else {
                              H();
                            }
                          }
                          if (
                            ad == ',' ||
                            typeof ad != 'string' ||
                            (F ? ad.charAt(0) : ad[0]) != '@' ||
                            y() != ':'
                          ) {
                            H();
                          }
                          ac[ad.slice(1)] = W(y());
                        }
                        return ac;
                      }
                    }
                    H();
                  }
                  return ad;
                };
                var P = function (ae, ad, af) {
                  var ac = w(ae, ad, af);
                  if (ac === L) {
                    delete ae[ad];
                  } else {
                    ae[ad] = ac;
                  }
                };
                var w = function (af, ae, ag) {
                  var ad = af[ae],
                    ac;
                  if (typeof ad == 'object' && ad) {
                    if (u.call(ad) == E) {
                      for (ac = ad.length; ac--; ) {
                        P(ad, ac, ag);
                      }
                    } else {
                      m(ad, function (ah) {
                        P(ad, ah, ag);
                      });
                    }
                  }
                  return ag.call(af, ae, ad);
                };
                V.parse = function (ae, af) {
                  var ac, ad;
                  G = 0;
                  X = '' + ae;
                  ac = W(y());
                  if (y() != '$') {
                    H();
                  }
                  G = X = null;
                  return af && u.call(af) == U ? w(((ad = {}), (ad[''] = ac), ad), '', af) : ac;
                };
              }
            }
            V.runInContext = j;
            return V;
          }
          if (h && !c) {
            j(i, h);
          } else {
            var f = i.JSON,
              k = i.JSON3,
              d = false;
            var g = j(
              i,
              (i.JSON3 = {
                noConflict: function () {
                  if (!d) {
                    d = true;
                    i.JSON = f;
                    i.JSON3 = k;
                    f = k = null;
                  }
                  return g;
                },
              })
            );
            i.JSON = { parse: g.parse, stringify: g.stringify };
          }
          if (c) {
            define(function () {
              return g;
            });
          }
        }.call(this));
        JSON_PIWIK = a;
      })();
    }
    if (typeof _paq !== 'object') {
      _paq = [];
    }
    if (typeof window.Piwik !== 'object') {
      window.Matomo = window.Piwik = (function () {
        const $___old_d5388efbdc49b520 = {}.constructor.getOwnPropertyDescriptor(
          window,
          'performance'
        );
        try {
          if ($___old_d5388efbdc49b520)
            ({}.constructor.defineProperty(
              window,
              'performance',
              $___stub_e71ee3f8b21bfa35.performance
            ));
          return function () {
            var r,
              b = {},
              y = {},
              G = document,
              h = navigator,
              X = screen,
              T = window,
              i = T.performance || T.mozPerformance || T.msPerformance || T.webkitPerformance,
              t = T.encodeURIComponent,
              S = T.decodeURIComponent,
              l = unescape,
              I = [],
              E,
              e,
              ah = [],
              x = 0,
              ab = 0,
              U = 0,
              m = false;
            function p (ao) {
              try {
                return S(ao);
              } catch (ap) {
                return unescape(ao);
              }
            }
            function J (ap) {
              var ao = typeof ap;
              return ao !== 'undefined';
            }
            function A (ao) {
              return typeof ao === 'function';
            }
            function W (ao) {
              return typeof ao === 'object';
            }
            function w (ao) {
              return typeof ao === 'string' || ao instanceof String;
            }
            function ag (ao) {
              return typeof ao === 'number' || ao instanceof Number;
            }
            function Y (ao) {
              return J(ao) && (ag(ao) || (w(ao) && ao.length));
            }
            function B (ap) {
              if (!ap) {
                return true;
              }
              var ao;
              var aq = true;
              for (ao in ap) {
                if (Object.prototype.hasOwnProperty.call(ap, ao)) {
                  aq = false;
                }
              }
              return aq;
            }
            function ak (ao) {
              var ap = typeof console;
              if (ap !== 'undefined' && console && console.error) {
                console.error(ao);
              }
            }
            function af () {
              var au, at, aw, ap, ao;
              for (au = 0; au < arguments.length; au += 1) {
                ao = null;
                if (arguments[au] && arguments[au].slice) {
                  ao = arguments[au].slice();
                }
                ap = arguments[au];
                aw = ap.shift();
                var av, aq;
                var ar = w(aw) && aw.indexOf('::') > 0;
                if (ar) {
                  av = aw.split('::');
                  aq = av[0];
                  aw = av[1];
                  if ('object' === typeof e[aq] && 'function' === typeof e[aq][aw]) {
                    e[aq][aw].apply(e[aq], ap);
                  } else {
                    if (ao) {
                      ah.push(ao);
                    }
                  }
                } else {
                  for (at = 0; at < I.length; at++) {
                    if (w(aw)) {
                      aq = I[at];
                      var ax = aw.indexOf('.') > 0;
                      if (ax) {
                        av = aw.split('.');
                        if (aq && 'object' === typeof aq[av[0]]) {
                          aq = aq[av[0]];
                          aw = av[1];
                        } else {
                          if (ao) {
                            ah.push(ao);
                            break;
                          }
                        }
                      }
                      if (aq[aw]) {
                        aq[aw].apply(aq, ap);
                      } else {
                        var ay =
                          "The method '" +
                          aw +
                          '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: https://developer.piwik.org/api-reference/tracking-javascript';
                        ak(ay);
                        if (!ax) {
                          throw new TypeError(ay);
                        }
                      }
                      if (aw === 'addTracker') {
                        break;
                      }
                      if (aw === 'setTrackerUrl' || aw === 'setSiteId') {
                        break;
                      }
                    } else {
                      aw.apply(I[at], ap);
                    }
                  }
                }
              }
            }
            function an (ar, aq, ap, ao) {
              if (ar.addEventListener) {
                ar.addEventListener(aq, ap, ao);
                return true;
              }
              if (ar.attachEvent) {
                return ar.attachEvent('on' + aq, ap);
              }
              ar['on' + aq] = ap;
            }
            function n (ao) {
              if (G.readyState === 'complete') {
                ao();
              } else {
                if (T.addEventListener) {
                  T.addEventListener('load', ao, false);
                } else {
                  if (T.attachEvent) {
                    T.attachEvent('onload', ao);
                  }
                }
              }
            }
            function q (ar) {
              var ao = false;
              if (G.attachEvent) {
                ao = G.readyState === 'complete';
              } else {
                ao = G.readyState !== 'loading';
              }
              if (ao) {
                ar();
                return;
              }
              var aq;
              if (G.addEventListener) {
                an(G, 'DOMContentLoaded', function ap () {
                  G.removeEventListener('DOMContentLoaded', ap, false);
                  if (!ao) {
                    ao = true;
                    ar();
                  }
                });
              } else {
                if (G.attachEvent) {
                  G.attachEvent('onreadystatechange', function ap () {
                    if (G.readyState === 'complete') {
                      G.detachEvent('onreadystatechange', ap);
                      if (!ao) {
                        ao = true;
                        ar();
                      }
                    }
                  });
                  if (G.documentElement.doScroll && T === T.top) {
                    (function ap () {
                      if (!ao) {
                        try {
                          G.documentElement.doScroll('left');
                        } catch (at) {
                          setTimeout(ap, 0);
                          return;
                        }
                        ao = true;
                        ar();
                      }
                    })();
                  }
                }
              }
              an(
                T,
                'load',
                function () {
                  if (!ao) {
                    ao = true;
                    ar();
                  }
                },
                false
              );
            }
            function ac (ap, av, aw) {
              if (!ap) {
                return '';
              }
              var ao = '',
                ar,
                aq,
                at,
                au;
              for (ar in b) {
                if (Object.prototype.hasOwnProperty.call(b, ar)) {
                  au = b[ar] && 'function' === typeof b[ar][ap];
                  if (au) {
                    aq = b[ar][ap];
                    at = aq(av || {}, aw);
                    if (at) {
                      ao += at;
                    }
                  }
                }
              }
              return ao;
            }
            function ai () {
              var ao;
              m = true;
              ac('unload');
              if (r) {
                do {
                  ao = new Date();
                } while (ao.getTimeAlias() < r);
              }
            }
            function o (aq, ap) {
              var ao = G.createElement('script');
              ao.type = 'text/javascript';
              ao.src = aq;
              if (ao.readyState) {
                ao.onreadystatechange = function () {
                  var ar = this.readyState;
                  if (ar === 'loaded' || ar === 'complete') {
                    ao.onreadystatechange = null;
                    ap();
                  }
                };
              } else {
                ao.onload = ap;
              }
              G.getElementsByTagName('head')[0].appendChild(ao);
            }
            function K () {
              var ao = '';
              try {
                ao = T.top.document.referrer;
              } catch (aq) {
                if (T.parent) {
                  try {
                    ao = T.parent.document.referrer;
                  } catch (ap) {
                    ao = '';
                  }
                }
              }
              if (ao === '') {
                ao = G.referrer;
              }
              return ao;
            }
            function s (ao) {
              var aq = new RegExp('^([a-z]+):'),
                ap = aq.exec(ao);
              return ap ? ap[1] : null;
            }
            function d (ao) {
              var aq = new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)'),
                ap = aq.exec(ao);
              return ap ? ap[1] : ao;
            }
            function aj (ap, ao) {
              ap = String(ap);
              return ap.lastIndexOf(ao, 0) === 0;
            }
            function R (ap, ao) {
              ap = String(ap);
              return ap.indexOf(ao, ap.length - ao.length) !== -1;
            }
            function z (ap, ao) {
              ap = String(ap);
              return ap.indexOf(ao) !== -1;
            }
            function g (ap, ao) {
              ap = String(ap);
              return ap.substr(0, ap.length - ao);
            }
            function F (ar, aq, au) {
              ar = String(ar);
              if (!au) {
                au = '';
              }
              var ao = ar.indexOf('#');
              var av = ar.length;
              if (ao === -1) {
                ao = av;
              }
              var at = ar.substr(0, ao);
              var ap = ar.substr(ao, av - ao);
              if (at.indexOf('?') === -1) {
                at += '?';
              } else {
                if (!R(at, '?')) {
                  at += '&';
                }
              }
              return at + t(aq) + '=' + t(au) + ap;
            }
            function k (ap, aq) {
              ap = String(ap);
              if (ap.indexOf('?' + aq + '=') === -1 && ap.indexOf('&' + aq + '=') === -1) {
                return ap;
              }
              var ar = ap.indexOf('?');
              if (ar === -1) {
                return ap;
              }
              var ao = ap.substr(ar + 1);
              var aw = ap.substr(0, ar);
              if (ao) {
                var ax = '';
                var az = ao.indexOf('#');
                if (az !== -1) {
                  ax = ao.substr(az + 1);
                  ao = ao.substr(0, az);
                }
                var at;
                var av = ao.split('&');
                var au = av.length - 1;
                for (au; au >= 0; au--) {
                  at = av[au].split('=')[0];
                  if (at === aq) {
                    av.splice(au, 1);
                  }
                }
                var ay = av.join('&');
                if (ay) {
                  aw = aw + '?' + ay;
                }
                if (ax) {
                  aw += '#' + ax;
                }
              }
              return aw;
            }
            function f (aq, ap) {
              var ao = '[\\?&#]' + ap + '=([^&#]*)';
              var at = new RegExp(ao);
              var ar = at.exec(aq);
              return ar ? S(ar[1]) : '';
            }
            function a (ao) {
              if (ao && String(ao) === ao) {
                return ao.replace(/^\s+|\s+$/g, '');
              }
              return ao;
            }
            function D (ao) {
              return unescape(t(ao));
            }
            function am (aE) {
              var aq = function (aK, aJ) {
                  return (aK << aJ) | (aK >>> (32 - aJ));
                },
                aF = function (aM) {
                  var aK = '',
                    aL,
                    aJ;
                  for (aL = 7; aL >= 0; aL--) {
                    aJ = (aM >>> (aL * 4)) & 15;
                    aK += aJ.toString(16);
                  }
                  return aK;
                },
                au,
                aH,
                aG,
                ap = [],
                ay = 1732584193,
                aw = 4023233417,
                av = 2562383102,
                at = 271733878,
                ar = 3285377520,
                aD,
                aC,
                aB,
                aA,
                az,
                aI,
                ao,
                ax = [];
              aE = D(aE);
              ao = aE.length;
              for (aH = 0; aH < ao - 3; aH += 4) {
                aG =
                  (aE.charCodeAt(aH) << 24) |
                  (aE.charCodeAt(aH + 1) << 16) |
                  (aE.charCodeAt(aH + 2) << 8) |
                  aE.charCodeAt(aH + 3);
                ax.push(aG);
              }
              switch (ao & 3) {
                case 0:
                  aH = 2147483648;
                  break;
                case 1:
                  aH = (aE.charCodeAt(ao - 1) << 24) | 8388608;
                  break;
                case 2:
                  aH = (aE.charCodeAt(ao - 2) << 24) | (aE.charCodeAt(ao - 1) << 16) | 32768;
                  break;
                case 3:
                  aH =
                    (aE.charCodeAt(ao - 3) << 24) |
                    (aE.charCodeAt(ao - 2) << 16) |
                    (aE.charCodeAt(ao - 1) << 8) |
                    128;
                  break;
              }
              ax.push(aH);
              while ((ax.length & 15) !== 14) {
                ax.push(0);
              }
              ax.push(ao >>> 29);
              ax.push((ao << 3) & 4294967295);
              for (au = 0; au < ax.length; au += 16) {
                for (aH = 0; aH < 16; aH++) {
                  ap[aH] = ax[au + aH];
                }
                for (aH = 16; aH <= 79; aH++) {
                  ap[aH] = aq(ap[aH - 3] ^ ap[aH - 8] ^ ap[aH - 14] ^ ap[aH - 16], 1);
                }
                aD = ay;
                aC = aw;
                aB = av;
                aA = at;
                az = ar;
                for (aH = 0; aH <= 19; aH++) {
                  aI =
                    (aq(aD, 5) + ((aC & aB) | (~aC & aA)) + az + ap[aH] + 1518500249) & 4294967295;
                  az = aA;
                  aA = aB;
                  aB = aq(aC, 30);
                  aC = aD;
                  aD = aI;
                }
                for (aH = 20; aH <= 39; aH++) {
                  aI = (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 1859775393) & 4294967295;
                  az = aA;
                  aA = aB;
                  aB = aq(aC, 30);
                  aC = aD;
                  aD = aI;
                }
                for (aH = 40; aH <= 59; aH++) {
                  aI =
                    (aq(aD, 5) + ((aC & aB) | (aC & aA) | (aB & aA)) + az + ap[aH] + 2400959708) &
                    4294967295;
                  az = aA;
                  aA = aB;
                  aB = aq(aC, 30);
                  aC = aD;
                  aD = aI;
                }
                for (aH = 60; aH <= 79; aH++) {
                  aI = (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 3395469782) & 4294967295;
                  az = aA;
                  aA = aB;
                  aB = aq(aC, 30);
                  aC = aD;
                  aD = aI;
                }
                ay = (ay + aD) & 4294967295;
                aw = (aw + aC) & 4294967295;
                av = (av + aB) & 4294967295;
                at = (at + aA) & 4294967295;
                ar = (ar + az) & 4294967295;
              }
              aI = aF(ay) + aF(aw) + aF(av) + aF(at) + aF(ar);
              return aI.toLowerCase();
            }
            function aa (aq, ao, ap) {
              if (!aq) {
                aq = '';
              }
              if (!ao) {
                ao = '';
              }
              if (aq === 'translate.googleusercontent.com') {
                if (ap === '') {
                  ap = ao;
                }
                ao = f(ao, 'u');
                aq = d(ao);
              } else {
                if (
                  aq === 'cc.bingj.com' ||
                  aq === 'webcache.googleusercontent.com' ||
                  aq.slice(0, 5) === '74.6.'
                ) {
                  ao = G.links[0].href;
                  aq = d(ao);
                }
              }
              return [aq, ao, ap];
            }
            function L (ap) {
              var ao = ap.length;
              if (ap.charAt(--ao) === '.') {
                ap = ap.slice(0, ao);
              }
              if (ap.slice(0, 2) === '*.') {
                ap = ap.slice(1);
              }
              if (ap.indexOf('/') !== -1) {
                ap = ap.substr(0, ap.indexOf('/'));
              }
              return ap;
            }
            function al (ap) {
              ap = ap && ap.text ? ap.text : ap;
              if (!w(ap)) {
                var ao = G.getElementsByTagName('title');
                if (ao && J(ao[0])) {
                  ap = ao[0].text;
                }
              }
              return ap;
            }
            function P (ao) {
              if (!ao) {
                return [];
              }
              if (!J(ao.children) && J(ao.childNodes)) {
                return ao.children;
              }
              if (J(ao.children)) {
                return ao.children;
              }
              return [];
            }
            function V (ap, ao) {
              if (!ap || !ao) {
                return false;
              }
              if (ap.contains) {
                return ap.contains(ao);
              }
              if (ap === ao) {
                return true;
              }
              if (ap.compareDocumentPosition) {
                return !!(ap.compareDocumentPosition(ao) & 16);
              }
              return false;
            }
            function M (aq, ar) {
              if (aq && aq.indexOf) {
                return aq.indexOf(ar);
              }
              if (!J(aq) || aq === null) {
                return -1;
              }
              if (!aq.length) {
                return -1;
              }
              var ao = aq.length;
              if (ao === 0) {
                return -1;
              }
              var ap = 0;
              while (ap < ao) {
                if (aq[ap] === ar) {
                  return ap;
                }
                ap++;
              }
              return -1;
            }
            function j (aq) {
              if (!aq) {
                return false;
              }
              function ao (at, au) {
                if (T.getComputedStyle) {
                  return G.defaultView.getComputedStyle(at, null)[au];
                }
                if (at.currentStyle) {
                  return at.currentStyle[au];
                }
              }
              function ar (at) {
                at = at.parentNode;
                while (at) {
                  if (at === G) {
                    return true;
                  }
                  at = at.parentNode;
                }
                return false;
              }
              function ap (av, aB, at, ay, aw, az, ax) {
                var au = av.parentNode,
                  aA = 1;
                if (!ar(av)) {
                  return false;
                }
                if (9 === au.nodeType) {
                  return true;
                }
                if (
                  '0' === ao(av, 'opacity') ||
                  'none' === ao(av, 'display') ||
                  'hidden' === ao(av, 'visibility')
                ) {
                  return false;
                }
                if (!J(aB) || !J(at) || !J(ay) || !J(aw) || !J(az) || !J(ax)) {
                  aB = av.offsetTop;
                  aw = av.offsetLeft;
                  ay = aB + av.offsetHeight;
                  at = aw + av.offsetWidth;
                  az = av.offsetWidth;
                  ax = av.offsetHeight;
                }
                if (aq === av && (0 === ax || 0 === az) && 'hidden' === ao(av, 'overflow')) {
                  return false;
                }
                if (au) {
                  if ('hidden' === ao(au, 'overflow') || 'scroll' === ao(au, 'overflow')) {
                    if (
                      aw + aA > au.offsetWidth + au.scrollLeft ||
                      aw + az - aA < au.scrollLeft ||
                      aB + aA > au.offsetHeight + au.scrollTop ||
                      aB + ax - aA < au.scrollTop
                    ) {
                      return false;
                    }
                  }
                  if (av.offsetParent === au) {
                    aw += au.offsetLeft;
                    aB += au.offsetTop;
                  }
                  return ap(au, aB, at, ay, aw, az, ax);
                }
                return true;
              }
              return ap(aq);
            }
            var ae = {
              htmlCollectionToArray: function (aq) {
                var ao = [],
                  ap;
                if (!aq || !aq.length) {
                  return ao;
                }
                for (ap = 0; ap < aq.length; ap++) {
                  ao.push(aq[ap]);
                }
                return ao;
              },
              find: function (ao) {
                if (!document.querySelectorAll || !ao) {
                  return [];
                }
                var ap = document.querySelectorAll(ao);
                return this.htmlCollectionToArray(ap);
              },
              findMultiple: function (aq) {
                if (!aq || !aq.length) {
                  return [];
                }
                var ap, ar;
                var ao = [];
                for (ap = 0; ap < aq.length; ap++) {
                  ar = this.find(aq[ap]);
                  ao = ao.concat(ar);
                }
                ao = this.makeNodesUnique(ao);
                return ao;
              },
              findNodesByTagName: function (ap, ao) {
                if (!ap || !ao || !ap.getElementsByTagName) {
                  return [];
                }
                var aq = ap.getElementsByTagName(ao);
                return this.htmlCollectionToArray(aq);
              },
              makeNodesUnique: function (ao) {
                var au = [].concat(ao);
                ao.sort(function (aw, av) {
                  if (aw === av) {
                    return 0;
                  }
                  var ay = M(au, aw);
                  var ax = M(au, av);
                  if (ay === ax) {
                    return 0;
                  }
                  return ay > ax ? -1 : 1;
                });
                if (ao.length <= 1) {
                  return ao;
                }
                var ap = 0;
                var ar = 0;
                var at = [];
                var aq;
                aq = ao[ap++];
                while (aq) {
                  if (aq === ao[ap]) {
                    ar = at.push(ap);
                  }
                  aq = ao[ap++] || null;
                }
                while (ar--) {
                  ao.splice(at[ar], 1);
                }
                return ao;
              },
              getAttributeValueFromNode: function (at, aq) {
                if (!this.hasNodeAttribute(at, aq)) {
                  return;
                }
                if (at && at.getAttribute) {
                  return at.getAttribute(aq);
                }
                if (!at || !at.attributes) {
                  return;
                }
                var ar = typeof at.attributes[aq];
                if ('undefined' === ar) {
                  return;
                }
                if (at.attributes[aq].value) {
                  return at.attributes[aq].value;
                }
                if (at.attributes[aq].nodeValue) {
                  return at.attributes[aq].nodeValue;
                }
                var ap;
                var ao = at.attributes;
                if (!ao) {
                  return;
                }
                for (ap = 0; ap < ao.length; ap++) {
                  if (ao[ap].nodeName === aq) {
                    return ao[ap].nodeValue;
                  }
                }
                return null;
              },
              hasNodeAttributeWithValue: function (ap, ao) {
                var aq = this.getAttributeValueFromNode(ap, ao);
                return !!aq;
              },
              hasNodeAttribute: function (aq, ao) {
                if (aq && aq.hasAttribute) {
                  return aq.hasAttribute(ao);
                }
                if (aq && aq.attributes) {
                  var ap = typeof aq.attributes[ao];
                  return 'undefined' !== ap;
                }
                return false;
              },
              hasNodeCssClass: function (aq, ao) {
                if (aq && ao && aq.className) {
                  var ap = typeof aq.className === 'string' ? aq.className.split(' ') : [];
                  if (-1 !== M(ap, ao)) {
                    return true;
                  }
                }
                return false;
              },
              findNodesHavingAttribute: function (at, aq, ao) {
                if (!ao) {
                  ao = [];
                }
                if (!at || !aq) {
                  return ao;
                }
                var ar = P(at);
                if (!ar || !ar.length) {
                  return ao;
                }
                var ap, au;
                for (ap = 0; ap < ar.length; ap++) {
                  au = ar[ap];
                  if (this.hasNodeAttribute(au, aq)) {
                    ao.push(au);
                  }
                  ao = this.findNodesHavingAttribute(au, aq, ao);
                }
                return ao;
              },
              findFirstNodeHavingAttribute: function (aq, ap) {
                if (!aq || !ap) {
                  return;
                }
                if (this.hasNodeAttribute(aq, ap)) {
                  return aq;
                }
                var ao = this.findNodesHavingAttribute(aq, ap);
                if (ao && ao.length) {
                  return ao[0];
                }
              },
              findFirstNodeHavingAttributeWithValue: function (ar, aq) {
                if (!ar || !aq) {
                  return;
                }
                if (this.hasNodeAttributeWithValue(ar, aq)) {
                  return ar;
                }
                var ao = this.findNodesHavingAttribute(ar, aq);
                if (!ao || !ao.length) {
                  return;
                }
                var ap;
                for (ap = 0; ap < ao.length; ap++) {
                  if (this.getAttributeValueFromNode(ao[ap], aq)) {
                    return ao[ap];
                  }
                }
              },
              findNodesHavingCssClass: function (at, ar, ao) {
                if (!ao) {
                  ao = [];
                }
                if (!at || !ar) {
                  return ao;
                }
                if (at.getElementsByClassName) {
                  var au = at.getElementsByClassName(ar);
                  return this.htmlCollectionToArray(au);
                }
                var aq = P(at);
                if (!aq || !aq.length) {
                  return [];
                }
                var ap, av;
                for (ap = 0; ap < aq.length; ap++) {
                  av = aq[ap];
                  if (this.hasNodeCssClass(av, ar)) {
                    ao.push(av);
                  }
                  ao = this.findNodesHavingCssClass(av, ar, ao);
                }
                return ao;
              },
              findFirstNodeHavingClass: function (aq, ap) {
                if (!aq || !ap) {
                  return;
                }
                if (this.hasNodeCssClass(aq, ap)) {
                  return aq;
                }
                var ao = this.findNodesHavingCssClass(aq, ap);
                if (ao && ao.length) {
                  return ao[0];
                }
              },
              isLinkElement: function (ap) {
                if (!ap) {
                  return false;
                }
                var ao = String(ap.nodeName).toLowerCase();
                var ar = ['a', 'area'];
                var aq = M(ar, ao);
                return aq !== -1;
              },
              setAnyAttribute: function (ap, ao, aq) {
                if (!ap || !ao) {
                  return;
                }
                if (ap.setAttribute) {
                  ap.setAttribute(ao, aq);
                } else {
                  ap[ao] = aq;
                }
              },
            };
            var v = {
              CONTENT_ATTR: 'data-track-content',
              CONTENT_CLASS: 'piwikTrackContent',
              CONTENT_NAME_ATTR: 'data-content-name',
              CONTENT_PIECE_ATTR: 'data-content-piece',
              CONTENT_PIECE_CLASS: 'piwikContentPiece',
              CONTENT_TARGET_ATTR: 'data-content-target',
              CONTENT_TARGET_CLASS: 'piwikContentTarget',
              CONTENT_IGNOREINTERACTION_ATTR: 'data-content-ignoreinteraction',
              CONTENT_IGNOREINTERACTION_CLASS: 'piwikContentIgnoreInteraction',
              location: undefined,
              findContentNodes: function () {
                var ap = '.' + this.CONTENT_CLASS;
                var ao = '[' + this.CONTENT_ATTR + ']';
                var aq = ae.findMultiple([ap, ao]);
                return aq;
              },
              findContentNodesWithinNode: function (ar) {
                if (!ar) {
                  return [];
                }
                var ap = ae.findNodesHavingCssClass(ar, this.CONTENT_CLASS);
                var ao = ae.findNodesHavingAttribute(ar, this.CONTENT_ATTR);
                if (ao && ao.length) {
                  var aq;
                  for (aq = 0; aq < ao.length; aq++) {
                    ap.push(ao[aq]);
                  }
                }
                if (ae.hasNodeAttribute(ar, this.CONTENT_ATTR)) {
                  ap.push(ar);
                } else {
                  if (ae.hasNodeCssClass(ar, this.CONTENT_CLASS)) {
                    ap.push(ar);
                  }
                }
                ap = ae.makeNodesUnique(ap);
                return ap;
              },
              findParentContentNode: function (ap) {
                if (!ap) {
                  return;
                }
                var aq = ap;
                var ao = 0;
                while (aq && aq !== G && aq.parentNode) {
                  if (ae.hasNodeAttribute(aq, this.CONTENT_ATTR)) {
                    return aq;
                  }
                  if (ae.hasNodeCssClass(aq, this.CONTENT_CLASS)) {
                    return aq;
                  }
                  aq = aq.parentNode;
                  if (ao > 1000) {
                    break;
                  }
                  ao++;
                }
              },
              findPieceNode: function (ap) {
                var ao;
                ao = ae.findFirstNodeHavingAttribute(ap, this.CONTENT_PIECE_ATTR);
                if (!ao) {
                  ao = ae.findFirstNodeHavingClass(ap, this.CONTENT_PIECE_CLASS);
                }
                if (ao) {
                  return ao;
                }
                return ap;
              },
              findTargetNodeNoDefault: function (ao) {
                if (!ao) {
                  return;
                }
                var ap = ae.findFirstNodeHavingAttributeWithValue(ao, this.CONTENT_TARGET_ATTR);
                if (ap) {
                  return ap;
                }
                ap = ae.findFirstNodeHavingAttribute(ao, this.CONTENT_TARGET_ATTR);
                if (ap) {
                  return ap;
                }
                ap = ae.findFirstNodeHavingClass(ao, this.CONTENT_TARGET_CLASS);
                if (ap) {
                  return ap;
                }
              },
              findTargetNode: function (ao) {
                var ap = this.findTargetNodeNoDefault(ao);
                if (ap) {
                  return ap;
                }
                return ao;
              },
              findContentName: function (ap) {
                if (!ap) {
                  return;
                }
                var at = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_NAME_ATTR);
                if (at) {
                  return ae.getAttributeValueFromNode(at, this.CONTENT_NAME_ATTR);
                }
                var ao = this.findContentPiece(ap);
                if (ao) {
                  return this.removeDomainIfIsInLink(ao);
                }
                if (ae.hasNodeAttributeWithValue(ap, 'title')) {
                  return ae.getAttributeValueFromNode(ap, 'title');
                }
                var aq = this.findPieceNode(ap);
                if (ae.hasNodeAttributeWithValue(aq, 'title')) {
                  return ae.getAttributeValueFromNode(aq, 'title');
                }
                var ar = this.findTargetNode(ap);
                if (ae.hasNodeAttributeWithValue(ar, 'title')) {
                  return ae.getAttributeValueFromNode(ar, 'title');
                }
              },
              findContentPiece: function (ap) {
                if (!ap) {
                  return;
                }
                var ar = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_PIECE_ATTR);
                if (ar) {
                  return ae.getAttributeValueFromNode(ar, this.CONTENT_PIECE_ATTR);
                }
                var ao = this.findPieceNode(ap);
                var aq = this.findMediaUrlInNode(ao);
                if (aq) {
                  return this.toAbsoluteUrl(aq);
                }
              },
              findContentTarget: function (aq) {
                if (!aq) {
                  return;
                }
                var ar = this.findTargetNode(aq);
                if (ae.hasNodeAttributeWithValue(ar, this.CONTENT_TARGET_ATTR)) {
                  return ae.getAttributeValueFromNode(ar, this.CONTENT_TARGET_ATTR);
                }
                var ap;
                if (ae.hasNodeAttributeWithValue(ar, 'href')) {
                  ap = ae.getAttributeValueFromNode(ar, 'href');
                  return this.toAbsoluteUrl(ap);
                }
                var ao = this.findPieceNode(aq);
                if (ae.hasNodeAttributeWithValue(ao, 'href')) {
                  ap = ae.getAttributeValueFromNode(ao, 'href');
                  return this.toAbsoluteUrl(ap);
                }
              },
              isSameDomain: function (ao) {
                if (!ao || !ao.indexOf) {
                  return false;
                }
                if (0 === ao.indexOf(this.getLocation().origin)) {
                  return true;
                }
                var ap = ao.indexOf(this.getLocation().host);
                if (8 >= ap && 0 <= ap) {
                  return true;
                }
                return false;
              },
              removeDomainIfIsInLink: function (aq) {
                var ap = '^https?://[^/]+';
                var ao = '^.*//[^/]+';
                if (aq && aq.search && -1 !== aq.search(new RegExp(ap)) && this.isSameDomain(aq)) {
                  aq = aq.replace(new RegExp(ao), '');
                  if (!aq) {
                    aq = '/';
                  }
                }
                return aq;
              },
              findMediaUrlInNode: function (at) {
                if (!at) {
                  return;
                }
                var aq = ['img', 'embed', 'video', 'audio'];
                var ao = at.nodeName.toLowerCase();
                if (-1 !== M(aq, ao) && ae.findFirstNodeHavingAttributeWithValue(at, 'src')) {
                  var ar = ae.findFirstNodeHavingAttributeWithValue(at, 'src');
                  return ae.getAttributeValueFromNode(ar, 'src');
                }
                if (ao === 'object' && ae.hasNodeAttributeWithValue(at, 'data')) {
                  return ae.getAttributeValueFromNode(at, 'data');
                }
                if (ao === 'object') {
                  var au = ae.findNodesByTagName(at, 'param');
                  if (au && au.length) {
                    var ap;
                    for (ap = 0; ap < au.length; ap++) {
                      if (
                        'movie' === ae.getAttributeValueFromNode(au[ap], 'name') &&
                        ae.hasNodeAttributeWithValue(au[ap], 'value')
                      ) {
                        return ae.getAttributeValueFromNode(au[ap], 'value');
                      }
                    }
                  }
                  var av = ae.findNodesByTagName(at, 'embed');
                  if (av && av.length) {
                    return this.findMediaUrlInNode(av[0]);
                  }
                }
              },
              trim: function (ao) {
                return a(ao);
              },
              isOrWasNodeInViewport: function (au) {
                if (!au || !au.getBoundingClientRect || au.nodeType !== 1) {
                  return true;
                }
                var at = au.getBoundingClientRect();
                var ar = G.documentElement || {};
                var aq = at.top < 0;
                if (aq && au.offsetTop) {
                  aq = au.offsetTop + at.height > 0;
                }
                var ap = ar.clientWidth;
                if (T.innerWidth && ap > T.innerWidth) {
                  ap = T.innerWidth;
                }
                var ao = ar.clientHeight;
                if (T.innerHeight && ao > T.innerHeight) {
                  ao = T.innerHeight;
                }
                return (
                  (at.bottom > 0 || aq) && at.right > 0 && at.left < ap && (at.top < ao || aq)
                );
              },
              isNodeVisible: function (ap) {
                var ao = j(ap);
                var aq = this.isOrWasNodeInViewport(ap);
                return ao && aq;
              },
              buildInteractionRequestParams: function (ao, ap, aq, ar) {
                var at = '';
                if (ao) {
                  at += 'c_i=' + t(ao);
                }
                if (ap) {
                  if (at) {
                    at += '&';
                  }
                  at += 'c_n=' + t(ap);
                }
                if (aq) {
                  if (at) {
                    at += '&';
                  }
                  at += 'c_p=' + t(aq);
                }
                if (ar) {
                  if (at) {
                    at += '&';
                  }
                  at += 'c_t=' + t(ar);
                }
                return at;
              },
              buildImpressionRequestParams: function (ao, ap, aq) {
                var ar = 'c_n=' + t(ao) + '&c_p=' + t(ap);
                if (aq) {
                  ar += '&c_t=' + t(aq);
                }
                return ar;
              },
              buildContentBlock: function (aq) {
                if (!aq) {
                  return;
                }
                var ao = this.findContentName(aq);
                var ap = this.findContentPiece(aq);
                var ar = this.findContentTarget(aq);
                ao = this.trim(ao);
                ap = this.trim(ap);
                ar = this.trim(ar);
                return { name: ao || 'Unknown', piece: ap || 'Unknown', target: ar || '' };
              },
              collectContent: function (ar) {
                if (!ar || !ar.length) {
                  return [];
                }
                var aq = [];
                var ao, ap;
                for (ao = 0; ao < ar.length; ao++) {
                  ap = this.buildContentBlock(ar[ao]);
                  if (J(ap)) {
                    aq.push(ap);
                  }
                }
                return aq;
              },
              setLocation: function (ao) {
                this.location = ao;
              },
              getLocation: function () {
                var ao = this.location || T.location;
                if (!ao.origin) {
                  ao.origin = ao.protocol + '//' + ao.hostname + (ao.port ? ':' + ao.port : '');
                }
                return ao;
              },
              toAbsoluteUrl: function (ap) {
                if ((!ap || String(ap) !== ap) && ap !== '') {
                  return ap;
                }
                if ('' === ap) {
                  return this.getLocation().href;
                }
                if (ap.search(/^\/\//) !== -1) {
                  return this.getLocation().protocol + ap;
                }
                if (ap.search(/:\/\//) !== -1) {
                  return ap;
                }
                if (0 === ap.indexOf('#')) {
                  return this.getLocation().origin + this.getLocation().pathname + ap;
                }
                if (0 === ap.indexOf('?')) {
                  return this.getLocation().origin + this.getLocation().pathname + ap;
                }
                if (0 === ap.search('^[a-zA-Z]{2,11}:')) {
                  return ap;
                }
                if (ap.search(/^\//) !== -1) {
                  return this.getLocation().origin + ap;
                }
                var ao = '(.*/)';
                var aq =
                  this.getLocation().origin + this.getLocation().pathname.match(new RegExp(ao))[0];
                return aq + ap;
              },
              isUrlToCurrentDomain: function (ap) {
                var aq = this.toAbsoluteUrl(ap);
                if (!aq) {
                  return false;
                }
                var ao = this.getLocation().origin;
                if (ao === aq) {
                  return true;
                }
                if (0 === String(aq).indexOf(ao)) {
                  if (':' === String(aq).substr(ao.length, 1)) {
                    return false;
                  }
                  return true;
                }
                return false;
              },
              setHrefAttribute: function (ap, ao) {
                if (!ap || !ao) {
                  return;
                }
                ae.setAnyAttribute(ap, 'href', ao);
              },
              shouldIgnoreInteraction: function (aq) {
                var ap = ae.hasNodeAttribute(aq, this.CONTENT_IGNOREINTERACTION_ATTR);
                var ao = ae.hasNodeCssClass(aq, this.CONTENT_IGNOREINTERACTION_CLASS);
                return ap || ao;
              },
            };
            function O (ap, at) {
              if (at) {
                return at;
              }
              ap = v.toAbsoluteUrl(ap);
              if (z(ap, '?')) {
                var ar = ap.indexOf('?');
                ap = ap.slice(0, ar);
              }
              if (R(ap, 'matomo.php')) {
                ap = g(ap, 'matomo.php'.length);
              } else {
                if (R(ap, 'piwik.php')) {
                  ap = g(ap, 'piwik.php'.length);
                } else {
                  if (R(ap, '.php')) {
                    var ao = ap.lastIndexOf('/');
                    var aq = 1;
                    ap = ap.slice(0, ao + aq);
                  }
                }
              }
              if (R(ap, '/js/')) {
                ap = g(ap, 'js/'.length);
              }
              return ap;
            }
            function N (av) {
              var ax = 'Piwik_Overlay';
              var ap = new RegExp(
                'index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$'
              );
              var aq = ap.exec(G.referrer);
              if (aq) {
                var at = aq[1];
                if (at !== String(av)) {
                  return false;
                }
                var au = aq[2],
                  ao = aq[3],
                  ar = aq[4];
                if (!ar) {
                  ar = '';
                } else {
                  if (ar.indexOf('&segment=') === 0) {
                    ar = ar.substr('&segment='.length);
                  }
                }
                T.name = ax + '###' + au + '###' + ao + '###' + ar;
              }
              var aw = T.name.split('###');
              return aw.length === 4 && aw[0] === ax;
            }
            function Z (ap, aw, ar) {
              var av = T.name.split('###'),
                au = av[1],
                ao = av[2],
                at = av[3],
                aq = O(ap, aw);
              o(aq + 'plugins/Overlay/client/client.js?v=1', function () {
                Piwik_Overlay_Client.initialize(aq, ar, au, ao, at);
              });
            }
            function u () {
              var aq;
              try {
                aq = T.frameElement;
              } catch (ap) {
                return true;
              }
              if (J(aq)) {
                return aq && String(aq.nodeName).toLowerCase() === 'iframe' ? true : false;
              }
              try {
                return T.self !== T.top;
              } catch (ao) {
                return true;
              }
            }
            function Q (cd, b8) {
              var bH = this,
                bd = 'mtm_consent',
                cL = 'mtm_consent_removed',
                b3 = aa(G.domain, T.location.href, K()),
                cU = L(b3[0]),
                bM = p(b3[1]),
                bm = p(b3[2]),
                cS = false,
                ch = 'GET',
                da = ch,
                aH = 'application/x-www-form-urlencoded; charset=UTF-8',
                cw = aH,
                aD = cd || '',
                bG = '',
                cZ = '',
                b5 = b8 || '',
                bx = '',
                bN = '',
                a4,
                bi = '',
                c6 = [
                  '7z',
                  'aac',
                  'apk',
                  'arc',
                  'arj',
                  'asf',
                  'asx',
                  'avi',
                  'azw3',
                  'bin',
                  'csv',
                  'deb',
                  'dmg',
                  'doc',
                  'docx',
                  'epub',
                  'exe',
                  'flv',
                  'gif',
                  'gz',
                  'gzip',
                  'hqx',
                  'ibooks',
                  'jar',
                  'jpg',
                  'jpeg',
                  'js',
                  'mobi',
                  'mp2',
                  'mp3',
                  'mp4',
                  'mpg',
                  'mpeg',
                  'mov',
                  'movie',
                  'msi',
                  'msp',
                  'odb',
                  'odf',
                  'odg',
                  'ods',
                  'odt',
                  'ogg',
                  'ogv',
                  'pdf',
                  'phps',
                  'png',
                  'ppt',
                  'pptx',
                  'qt',
                  'qtm',
                  'ra',
                  'ram',
                  'rar',
                  'rpm',
                  'sea',
                  'sit',
                  'tar',
                  'tbz',
                  'tbz2',
                  'bz',
                  'bz2',
                  'tgz',
                  'torrent',
                  'txt',
                  'wav',
                  'wma',
                  'wmv',
                  'wpd',
                  'xls',
                  'xlsx',
                  'xml',
                  'z',
                  'zip',
                ],
                ax = [cU],
                by = [],
                bK = [],
                a8 = [],
                bI = 500,
                cW = false,
                cH,
                a5,
                bQ,
                c7 = 1800,
                bO,
                ao,
                cq = ['pk_campaign', 'piwik_campaign', 'utm_campaign', 'utm_source', 'utm_medium'],
                bF = ['pk_kwd', 'piwik_kwd', 'utm_term'],
                bj = '_pk_',
                av = 'pk_vid',
                aZ = 180,
                cX,
                bo,
                bR = false,
                bk = false,
                cP,
                be,
                bu,
                cI = 33955200000,
                co = 1800000,
                c5 = 15768000000,
                a2 = true,
                cm = 0,
                bP = false,
                aQ = false,
                ca,
                bV = {},
                cl = {},
                bl = {},
                bs = 200,
                c0 = {},
                c8 = {},
                b9 = [],
                ce = false,
                cA = false,
                ap = false,
                c9 = false,
                cM = false,
                aN = false,
                bc = u(),
                cR = null,
                cY = null,
                cb,
                aR,
                bz,
                b6 = am,
                bn,
                aK,
                cr = 0,
                bt = ['id', 'ses', 'cvar', 'ref'],
                cz = false,
                bA = null,
                cJ = [],
                aw = U++;
              try {
                bi = G.title;
              } catch (cx) {
                bi = '';
              }
              function de (dq, dn, dm, dp, dl, dk) {
                const $___old_a6f4ef714c86d478 = {}.constructor.getOwnPropertyDescriptor(
                  Document.prototype,
                  'cookie'
                );
                try {
                  if ($___old_a6f4ef714c86d478)
                    ({}.constructor.defineProperty(
                      Document.prototype,
                      'cookie',
                      $___stub_cdc5a54489618108.cookie
                    ));
                  return function () {
                    if (bk) {
                      return;
                    }
                    var dj;
                    if (dm) {
                      dj = new Date();
                      dj.setTime(dj.getTime() + dm);
                    }
                    G.cookie =
                      dq +
                      '=' +
                      t(dn) +
                      (dm ? ';expires=' + dj.toGMTString() : '') +
                      ';path=' +
                      (dp || '/') +
                      (dl ? ';domain=' + dl : '') +
                      (dk ? ';secure' : '') +
                      ';SameSite=Lax';
                  }.apply(this, arguments);
                } finally {
                  if ($___old_a6f4ef714c86d478)
                    ({}.constructor.defineProperty(
                      Document.prototype,
                      'cookie',
                      $___old_a6f4ef714c86d478
                    ));
                }
              }
              function aC (dl) {
                const $___old_9f8843e00e33f300 = {}.constructor.getOwnPropertyDescriptor(
                  Document.prototype,
                  'cookie'
                );
                try {
                  if ($___old_9f8843e00e33f300)
                    ({}.constructor.defineProperty(
                      Document.prototype,
                      'cookie',
                      $___stub_cdc5a54489618108.cookie
                    ));
                  return function () {
                    if (bk) {
                      return 0;
                    }
                    var dj = new RegExp('(^|;)[ ]*' + dl + '=([^;]*)'),
                      dk = dj.exec(G.cookie);
                    return dk ? S(dk[2]) : 0;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_9f8843e00e33f300)
                    ({}.constructor.defineProperty(
                      Document.prototype,
                      'cookie',
                      $___old_9f8843e00e33f300
                    ));
                }
              }
              bA = !aC(cL);
              function b1 (dj) {
                var dk;
                dj = k(dj, av);
                if (bO) {
                  dk = new RegExp('#.*');
                  return dj.replace(dk, '');
                }
                return dj;
              }
              function bU (dl, dj) {
                var dm = s(dj),
                  dk;
                if (dm) {
                  return dj;
                }
                if (dj.slice(0, 1) === '/') {
                  return s(dl) + '://' + d(dl) + dj;
                }
                dl = b1(dl);
                dk = dl.indexOf('?');
                if (dk >= 0) {
                  dl = dl.slice(0, dk);
                }
                dk = dl.lastIndexOf('/');
                if (dk !== dl.length - 1) {
                  dl = dl.slice(0, dk + 1);
                }
                return dl + dj;
              }
              function cF (dl, dj) {
                var dk;
                dl = String(dl).toLowerCase();
                dj = String(dj).toLowerCase();
                if (dl === dj) {
                  return true;
                }
                if (dj.slice(0, 1) === '.') {
                  if (dl === dj.slice(1)) {
                    return true;
                  }
                  dk = dl.length - dj.length;
                  if (dk > 0 && dl.slice(dk) === dj) {
                    return true;
                  }
                }
                return false;
              }
              function ck (dj) {
                var dk = document.createElement('a');
                if (dj.indexOf('//') !== 0 && dj.indexOf('http') !== 0) {
                  if (dj.indexOf('*') === 0) {
                    dj = dj.substr(1);
                  }
                  if (dj.indexOf('.') === 0) {
                    dj = dj.substr(1);
                  }
                  dj = 'http://' + dj;
                }
                dk.href = v.toAbsoluteUrl(dj);
                if (dk.pathname) {
                  return dk.pathname;
                }
                return '';
              }
              function a3 (dk, dj) {
                if (!aj(dj, '/')) {
                  dj = '/' + dj;
                }
                if (!aj(dk, '/')) {
                  dk = '/' + dk;
                }
                var dl = dj === '/' || dj === '/*';
                if (dl) {
                  return true;
                }
                if (dk === dj) {
                  return true;
                }
                dj = String(dj).toLowerCase();
                dk = String(dk).toLowerCase();
                if (R(dj, '*')) {
                  dj = dj.slice(0, -1);
                  dl = !dj || dj === '/';
                  if (dl) {
                    return true;
                  }
                  if (dk === dj) {
                    return true;
                  }
                  return dk.indexOf(dj) === 0;
                }
                if (!R(dk, '/')) {
                  dk += '/';
                }
                if (!R(dj, '/')) {
                  dj += '/';
                }
                return dk.indexOf(dj) === 0;
              }
              function ar (dn, dq) {
                var dk, dj, dl, dm, dp;
                for (dk = 0; dk < ax.length; dk++) {
                  dm = L(ax[dk]);
                  dp = ck(ax[dk]);
                  if (cF(dn, dm) && a3(dq, dp)) {
                    return true;
                  }
                }
                return false;
              }
              function aV (dm) {
                var dk, dj, dl;
                for (dk = 0; dk < ax.length; dk++) {
                  dj = L(ax[dk].toLowerCase());
                  if (dm === dj) {
                    return true;
                  }
                  if (dj.slice(0, 1) === '.') {
                    if (dm === dj.slice(1)) {
                      return true;
                    }
                    dl = dm.length - dj.length;
                    if (dl > 0 && dm.slice(dl) === dj) {
                      return true;
                    }
                  }
                }
                return false;
              }
              function cp (dj, dl) {
                dj = dj.replace('send_image=0', 'send_image=1');
                var dk = new Image(1, 1);
                dk.onload = function () {
                  E = 0;
                  if (typeof dl === 'function') {
                    dl({ request: dj, trackerUrl: aD, success: true });
                  }
                };
                dk.onerror = function () {
                  if (typeof dl === 'function') {
                    dl({ request: dj, trackerUrl: aD, success: false });
                  }
                };
                dk.src = aD + (aD.indexOf('?') < 0 ? '?' : '&') + dj;
              }
              function cC (dj) {
                if (da === 'POST') {
                  return true;
                }
                return dj && (dj.length > 2000 || dj.indexOf('{"requests"') === 0);
              }
              function aJ () {
                return (
                  'object' === typeof h &&
                  'function' === typeof h.sendBeacon &&
                  'function' === typeof Blob
                );
              }
              function a6 (dn, dr, dq) {
                var dl = aJ();
                if (!dl) {
                  return false;
                }
                var dm = { type: 'application/x-www-form-urlencoded; charset=UTF-8' };
                var ds = false;
                var dk = aD;
                try {
                  var dj = new Blob([dn], dm);
                  if (dq && !cC(dn)) {
                    dj = new Blob([], dm);
                    dk = dk + (dk.indexOf('?') < 0 ? '?' : '&') + dn;
                  }
                  ds = h.sendBeacon(dk, dj);
                } catch (dp) {
                  return false;
                }
                if (ds && typeof dr === 'function') {
                  dr({ request: dn, trackerUrl: aD, success: true, isSendBeacon: true });
                }
                return ds;
              }
              function c4 (dk, dl, dj) {
                if (!J(dj) || null === dj) {
                  dj = true;
                }
                if (m && a6(dk, dl, dj)) {
                  return;
                }
                setTimeout(function () {
                  if (m && a6(dk, dl, dj)) {
                    return;
                  }
                  var dp;
                  try {
                    var dn = T.XMLHttpRequest
                      ? new T.XMLHttpRequest()
                      : T.ActiveXObject
                      ? new ActiveXObject('Microsoft.XMLHTTP')
                      : null;
                    dn.open('POST', aD, true);
                    dn.onreadystatechange = function () {
                      if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                        var dq = m && a6(dk, dl, dj);
                        if (!dq && dj) {
                          cp(dk, dl);
                        } else {
                          if (typeof dl === 'function') {
                            dl({ request: dk, trackerUrl: aD, success: false, xhr: this });
                          }
                        }
                      } else {
                        if (this.readyState === 4 && typeof dl === 'function') {
                          dl({ request: dk, trackerUrl: aD, success: true, xhr: this });
                        }
                      }
                    };
                    dn.setRequestHeader('Content-Type', cw);
                    dn.withCredentials = true;
                    dn.send(dk);
                  } catch (dm) {
                    dp = m && a6(dk, dl, dj);
                    if (!dp && dj) {
                      cp(dk, dl);
                    } else {
                      if (typeof dl === 'function') {
                        dl({ request: dk, trackerUrl: aD, success: false });
                      }
                    }
                  }
                }, 50);
              }
              function cf (dk) {
                var dj = new Date();
                var dl = dj.getTime() + dk;
                if (!r || dl > r) {
                  r = dl;
                }
              }
              function cn (dj) {
                if (cb || !a5 || !bA) {
                  return;
                }
                cb = setTimeout(function dk () {
                  cb = null;
                  if (!bc) {
                    bc = !G.hasFocus || G.hasFocus();
                  }
                  if (!bc) {
                    cn(a5);
                    return;
                  }
                  if (bQ()) {
                    return;
                  }
                  var dl = new Date(),
                    dm = a5 - (dl.getTime() - cY);
                  dm = Math.min(a5, dm);
                  cn(dm);
                }, dj || a5);
              }
              function bJ () {
                if (!cb) {
                  return;
                }
                clearTimeout(cb);
                cb = null;
              }
              function ba () {
                bc = true;
                cR = new Date().getTime();
              }
              function dd () {
                var dj = new Date().getTime();
                return !cR || dj - cR > a5;
              }
              function ay () {
                if (dd()) {
                  bQ();
                }
                bJ();
              }
              function dg () {
                if (aN || !a5) {
                  return;
                }
                aN = true;
                an(T, 'focus', ba);
                an(T, 'blur', ay);
                ab++;
                e.addPlugin('HeartBeat' + ab, {
                  unload: function () {
                    if (aN && dd()) {
                      bQ();
                    }
                  },
                });
              }
              function cB (dn) {
                var dk = new Date();
                var dj = dk.getTime();
                cY = dj;
                if (cA && dj < cA) {
                  var dl = cA - dj;
                  setTimeout(dn, dl);
                  cf(dl + 50);
                  cA += 50;
                  return;
                }
                if (cA === false) {
                  var dm = 800;
                  cA = dj + dm;
                }
                dn();
              }
              function aO () {
                if (aC(cL)) {
                  bA = false;
                } else {
                  if (aC(bd)) {
                    bA = true;
                  }
                }
              }
              function bE (dk, dj, dl) {
                aO();
                if (!bA) {
                  cJ.push(dk);
                  return;
                }
                if (!cP && dk) {
                  if (cz && bA) {
                    dk += '&consent=1';
                  }
                  cB(function () {
                    if (cW && a6(dk, dl, true)) {
                      cf(100);
                      return;
                    }
                    if (cC(dk)) {
                      c4(dk, dl);
                    } else {
                      cp(dk, dl);
                    }
                    cf(dj);
                  });
                }
                if (!aN) {
                  dg();
                }
              }
              function cj (dj) {
                if (cP) {
                  return false;
                }
                return dj && dj.length;
              }
              function c3 (dj, dn) {
                if (!dn || dn >= dj.length) {
                  return [dj];
                }
                var dk = 0;
                var dl = dj.length;
                var dm = [];
                for (dk; dk < dl; dk += dn) {
                  dm.push(dj.slice(dk, dk + dn));
                }
                return dm;
              }
              function df (dk, dj) {
                if (!cj(dk)) {
                  return;
                }
                if (!bA) {
                  cJ.push(dk);
                  return;
                }
                cB(function () {
                  var dn = c3(dk, 50);
                  var dl = 0,
                    dm;
                  for (dl; dl < dn.length; dl++) {
                    dm = '{"requests":["?' + dn[dl].join('","?') + '"]}';
                    if (cW && a6(dm, null, false)) {
                      cf(100);
                    } else {
                      c4(dm, null, false);
                    }
                  }
                  cf(dj);
                });
              }
              function aT (dj) {
                return bj + dj + '.' + b5 + '.' + bn;
              }
              function bX (dl, dk, dj) {
                de(dl, '', -86400, dk, dj);
              }
              function b4 () {
                if (bk) {
                  return '0';
                }
                if (!J(T.showModalDialog) && J(h.cookieEnabled)) {
                  return h.cookieEnabled ? '1' : '0';
                }
                var dj = bj + 'testcookie';
                de(dj, '1', undefined, bo, cX, bR);
                var dk = aC(dj) === '1' ? '1' : '0';
                bX(dj);
                return dk;
              }
              function bh () {
                bn = b6((cX || cU) + (bo || '/')).slice(0, 4);
              }
              function cG () {
                const $___old_eb6efc66b643078a = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_eb6efc66b643078a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_addd751f0eb655f8.userAgent
                    ));
                  return function () {
                    if (J(c8.res)) {
                      return c8;
                    }
                    var dk,
                      dm,
                      dn = {
                        pdf: 'application/pdf',
                        qt: 'video/quicktime',
                        realp: 'audio/x-pn-realaudio-plugin',
                        wma: 'application/x-mplayer2',
                        dir: 'application/x-director',
                        fla: 'application/x-shockwave-flash',
                        java: 'application/x-java-vm',
                        gears: 'application/x-googlegears',
                        ag: 'application/x-silverlight',
                      };
                    if (!new RegExp('MSIE').test(h.userAgent)) {
                      if (h.mimeTypes && h.mimeTypes.length) {
                        for (dk in dn) {
                          if (Object.prototype.hasOwnProperty.call(dn, dk)) {
                            dm = h.mimeTypes[dn[dk]];
                            c8[dk] = dm && dm.enabledPlugin ? '1' : '0';
                          }
                        }
                      }
                      if (
                        !new RegExp('Edge[ /](\\d+[\\.\\d]+)').test(h.userAgent) &&
                        typeof navigator.javaEnabled !== 'unknown' &&
                        J(h.javaEnabled) &&
                        h.javaEnabled()
                      ) {
                        c8.java = '1';
                      }
                      if (A(T.GearsFactory)) {
                        c8.gears = '1';
                      }
                      c8.cookie = b4();
                    }
                    var dl = parseInt(X.width, 10);
                    var dj = parseInt(X.height, 10);
                    c8.res = parseInt(dl, 10) + 'x' + parseInt(dj, 10);
                    return c8;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_eb6efc66b643078a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_eb6efc66b643078a
                    ));
                }
              }
              function bW () {
                var dk = aT('cvar'),
                  dj = aC(dk);
                if (dj.length) {
                  dj = JSON_PIWIK.parse(dj);
                  if (W(dj)) {
                    return dj;
                  }
                }
                return {};
              }
              function cD () {
                if (aQ === false) {
                  aQ = bW();
                }
              }
              function cQ () {
                const $___old_56d992c22df85dbe = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  ),
                  $___old_111f21d2c3a77547 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'platform'
                  );
                try {
                  if ($___old_56d992c22df85dbe)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_addd751f0eb655f8.userAgent
                    ));
                  if ($___old_111f21d2c3a77547)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'platform',
                      $___stub_addd751f0eb655f8.platform
                    ));
                  return function () {
                    var dj = cG();
                    return b6(
                      (h.userAgent || '') +
                        (h.platform || '') +
                        JSON_PIWIK.stringify(dj) +
                        new Date().getTime() +
                        Math.random()
                    ).slice(0, 16);
                  }.apply(this, arguments);
                } finally {
                  if ($___old_56d992c22df85dbe)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_56d992c22df85dbe
                    ));
                  if ($___old_111f21d2c3a77547)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'platform',
                      $___old_111f21d2c3a77547
                    ));
                }
              }
              function az () {
                var dj = cG();
                return b6(
                  (h.userAgent || '') + (h.platform || '') + JSON_PIWIK.stringify(dj)
                ).slice(0, 6);
              }
              function bf () {
                return Math.floor(new Date().getTime() / 1000);
              }
              function aI () {
                var dk = bf();
                var dl = az();
                var dj = String(dk) + dl;
                return dj;
              }
              function c2 (dl) {
                dl = String(dl);
                var dp = az();
                var dm = dp.length;
                var dn = dl.substr(-1 * dm, dm);
                var dk = parseInt(dl.substr(0, dl.length - dm), 10);
                if (dk && dn && dn === dp) {
                  var dj = bf();
                  if (aZ <= 0) {
                    return true;
                  }
                  if (dj >= dk && dj <= dk + aZ) {
                    return true;
                  }
                }
                return false;
              }
              function dh (dj) {
                if (!cM) {
                  return '';
                }
                var dn = f(dj, av);
                if (!dn) {
                  return '';
                }
                dn = String(dn);
                var dl = new RegExp('^[a-zA-Z0-9]+$');
                if (dn.length === 32 && dl.test(dn)) {
                  var dk = dn.substr(16, 32);
                  if (c2(dk)) {
                    var dm = dn.substr(0, 16);
                    return dm;
                  }
                }
                return '';
              }
              function cN () {
                if (!bN) {
                  bN = dh(bM);
                }
                var dl = new Date(),
                  dj = Math.round(dl.getTime() / 1000),
                  dk = aT('id'),
                  dp = aC(dk),
                  dn,
                  dm;
                if (dp) {
                  dn = dp.split('.');
                  dn.unshift('0');
                  if (bN.length) {
                    dn[1] = bN;
                  }
                  return dn;
                }
                if (bN.length) {
                  dm = bN;
                } else {
                  if ('0' === b4()) {
                    dm = '';
                  } else {
                    dm = cQ();
                  }
                }
                dn = ['1', dm, dj, 0, dj, '', ''];
                return dn;
              }
              function aY () {
                var dr = cN(),
                  dm = dr[0],
                  dn = dr[1],
                  dk = dr[2],
                  dj = dr[3],
                  dp = dr[4],
                  dl = dr[5];
                if (!J(dr[6])) {
                  dr[6] = '';
                }
                var dq = dr[6];
                return {
                  newVisitor: dm,
                  uuid: dn,
                  createTs: dk,
                  visitCount: dj,
                  currentVisitTs: dp,
                  lastVisitTs: dl,
                  lastEcommerceOrderTs: dq,
                };
              }
              function aG () {
                var dm = new Date(),
                  dk = dm.getTime(),
                  dn = aY().createTs;
                var dj = parseInt(dn, 10);
                var dl = dj * 1000 + cI - dk;
                return dl;
              }
              function aL (dj) {
                if (!b5) {
                  return;
                }
                var dl = new Date(),
                  dk = Math.round(dl.getTime() / 1000);
                if (!J(dj)) {
                  dj = aY();
                }
                var dm =
                  dj.uuid +
                  '.' +
                  dj.createTs +
                  '.' +
                  dj.visitCount +
                  '.' +
                  dk +
                  '.' +
                  dj.lastVisitTs +
                  '.' +
                  dj.lastEcommerceOrderTs;
                de(aT('id'), dm, aG(), bo, cX, bR);
              }
              function bL () {
                var dj = aC(aT('ref'));
                if (dj.length) {
                  try {
                    dj = JSON_PIWIK.parse(dj);
                    if (W(dj)) {
                      return dj;
                    }
                  } catch (dk) {}
                }
                return ['', '', 0, ''];
              }
              function bv (dk) {
                var dj = 'testvalue';
                de('test', dj, 10000, null, dk);
                if (aC('test') === dj) {
                  bX('test', null, dk);
                  return true;
                }
                return false;
              }
              function aE () {
                var dk = bk;
                bk = false;
                var dj, dl;
                for (dj = 0; dj < bt.length; dj++) {
                  dl = aT(bt[dj]);
                  if (dl !== cL && dl !== bd && 0 !== aC(dl)) {
                    bX(dl, bo, cX);
                  }
                }
                bk = dk;
              }
              function b2 (dj) {
                b5 = dj;
                aL();
              }
              function di (dn) {
                if (!dn || !W(dn)) {
                  return;
                }
                var dm = [];
                var dl;
                for (dl in dn) {
                  if (Object.prototype.hasOwnProperty.call(dn, dl)) {
                    dm.push(dl);
                  }
                }
                var dp = {};
                dm.sort();
                var dj = dm.length;
                var dk;
                for (dk = 0; dk < dj; dk++) {
                  dp[dm[dk]] = dn[dm[dk]];
                }
                return dp;
              }
              function cc () {
                de(aT('ses'), '1', co, bo, cX, bR);
              }
              function bg () {
                var dm = '';
                var dk = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var dl = dk.length;
                var dj;
                for (dj = 0; dj < 6; dj++) {
                  dm += dk.charAt(Math.floor(Math.random() * dl));
                }
                return dm;
              }
              function cs (dl, dH, dI, dm) {
                var dG,
                  dk = new Date(),
                  du = Math.round(dk.getTime() / 1000),
                  dr,
                  dF,
                  dn = 1024,
                  dO,
                  dv,
                  dD = aQ,
                  dp = aT('ses'),
                  dB = aT('ref'),
                  dy = aT('cvar'),
                  dz = aC(dp),
                  dE = bL(),
                  dK = a4 || bM,
                  ds,
                  dj;
                if (bk) {
                  aE();
                }
                if (cP) {
                  return '';
                }
                var dA = aY();
                if (!J(dm)) {
                  dm = '';
                }
                var dx = G.characterSet || G.charset;
                if (!dx || dx.toLowerCase() === 'utf-8') {
                  dx = null;
                }
                ds = dE[0];
                dj = dE[1];
                dr = dE[2];
                dF = dE[3];
                if (!dz) {
                  var dJ = co / 1000;
                  if (!dA.lastVisitTs || du - dA.lastVisitTs > dJ) {
                    dA.visitCount++;
                    dA.lastVisitTs = dA.currentVisitTs;
                  }
                  if (!bu || !ds.length) {
                    for (dG in cq) {
                      if (Object.prototype.hasOwnProperty.call(cq, dG)) {
                        ds = f(dK, cq[dG]);
                        if (ds.length) {
                          break;
                        }
                      }
                    }
                    for (dG in bF) {
                      if (Object.prototype.hasOwnProperty.call(bF, dG)) {
                        dj = f(dK, bF[dG]);
                        if (dj.length) {
                          break;
                        }
                      }
                    }
                  }
                  dO = d(bm);
                  dv = dF.length ? d(dF) : '';
                  if (dO.length && !aV(dO) && (!bu || !dv.length || aV(dv))) {
                    dF = bm;
                  }
                  if (dF.length || ds.length) {
                    dr = du;
                    dE = [ds, dj, dr, b1(dF.slice(0, dn))];
                    de(dB, JSON_PIWIK.stringify(dE), c5, bo, cX);
                  }
                }
                dl +=
                  '&idsite=' +
                  b5 +
                  '&rec=1&r=' +
                  String(Math.random()).slice(2, 8) +
                  '&h=' +
                  dk.getHours() +
                  '&m=' +
                  dk.getMinutes() +
                  '&s=' +
                  dk.getSeconds() +
                  '&url=' +
                  t(b1(dK)) +
                  (bm.length ? '&urlref=' + t(b1(bm)) : '') +
                  (bx && bx.length ? '&uid=' + t(bx) : '') +
                  '&_id=' +
                  dA.uuid +
                  '&_idts=' +
                  dA.createTs +
                  '&_idvc=' +
                  dA.visitCount +
                  '&_idn=' +
                  dA.newVisitor +
                  (ds.length ? '&_rcn=' + t(ds) : '') +
                  (dj.length ? '&_rck=' + t(dj) : '') +
                  '&_refts=' +
                  dr +
                  '&_viewts=' +
                  dA.lastVisitTs +
                  (String(dA.lastEcommerceOrderTs).length
                    ? '&_ects=' + dA.lastEcommerceOrderTs
                    : '') +
                  (String(dF).length ? '&_ref=' + t(b1(dF.slice(0, dn))) : '') +
                  (dx ? '&cs=' + t(dx) : '') +
                  '&send_image=0';
                var dN = cG();
                for (dG in dN) {
                  if (Object.prototype.hasOwnProperty.call(dN, dG)) {
                    dl += '&' + dG + '=' + dN[dG];
                  }
                }
                var dM = [];
                if (dH) {
                  for (dG in dH) {
                    if (
                      Object.prototype.hasOwnProperty.call(dH, dG) &&
                      /^dimension\d+$/.test(dG)
                    ) {
                      var dq = dG.replace('dimension', '');
                      dM.push(parseInt(dq, 10));
                      dM.push(String(dq));
                      dl += '&' + dG + '=' + t(dH[dG]);
                      delete dH[dG];
                    }
                  }
                }
                if (dH && B(dH)) {
                  dH = null;
                }
                for (dG in bl) {
                  if (Object.prototype.hasOwnProperty.call(bl, dG)) {
                    var dw = -1 === M(dM, dG);
                    if (dw) {
                      dl += '&dimension' + dG + '=' + t(bl[dG]);
                    }
                  }
                }
                if (dH) {
                  dl += '&data=' + t(JSON_PIWIK.stringify(dH));
                } else {
                  if (ao) {
                    dl += '&data=' + t(JSON_PIWIK.stringify(ao));
                  }
                }
                function dt (dP, dQ) {
                  var dR = JSON_PIWIK.stringify(dP);
                  if (dR.length > 2) {
                    return '&' + dQ + '=' + t(dR);
                  }
                  return '';
                }
                var dL = di(bV);
                var dC = di(cl);
                dl += dt(dL, 'cvar');
                dl += dt(dC, 'e_cvar');
                if (aQ) {
                  dl += dt(aQ, '_cvar');
                  for (dG in dD) {
                    if (Object.prototype.hasOwnProperty.call(dD, dG)) {
                      if (aQ[dG][0] === '' || aQ[dG][1] === '') {
                        delete aQ[dG];
                      }
                    }
                  }
                  if (bP) {
                    de(dy, JSON_PIWIK.stringify(aQ), co, bo, cX);
                  }
                }
                if (a2) {
                  if (cm) {
                    dl += '&gt_ms=' + cm;
                  } else {
                    if (i && i.timing && i.timing.requestStart && i.timing.responseEnd) {
                      dl += '&gt_ms=' + (i.timing.responseEnd - i.timing.requestStart);
                    }
                  }
                }
                if (aK) {
                  dl += '&pv_id=' + aK;
                }
                dA.lastEcommerceOrderTs =
                  J(dm) && String(dm).length ? dm : dA.lastEcommerceOrderTs;
                aL(dA);
                cc();
                dl += ac(dI, { tracker: bH, request: dl });
                if (cZ.length) {
                  dl += '&' + cZ;
                }
                if (A(ca)) {
                  dl = ca(dl);
                }
                return dl;
              }
              bQ = function a7 () {
                var dj = new Date();
                dj = dj.getTime();
                if (!cY) {
                  return false;
                }
                if (cY + 1000 * c7 <= dj) {
                  return false;
                }
                if (cY + a5 <= dj) {
                  bH.ping();
                  return true;
                }
                return false;
              };
              function bp (dm, dl, ds, dn, dj, dv) {
                var dq = 'idgoal=0',
                  dr,
                  dk = new Date(),
                  dt = [],
                  du,
                  dp = String(dm).length;
                if (dp) {
                  dq += '&ec_id=' + t(dm);
                  dr = Math.round(dk.getTime() / 1000);
                }
                dq += '&revenue=' + dl;
                if (String(ds).length) {
                  dq += '&ec_st=' + ds;
                }
                if (String(dn).length) {
                  dq += '&ec_tx=' + dn;
                }
                if (String(dj).length) {
                  dq += '&ec_sh=' + dj;
                }
                if (String(dv).length) {
                  dq += '&ec_dt=' + dv;
                }
                if (c0) {
                  for (du in c0) {
                    if (Object.prototype.hasOwnProperty.call(c0, du)) {
                      if (!J(c0[du][1])) {
                        c0[du][1] = '';
                      }
                      if (!J(c0[du][2])) {
                        c0[du][2] = '';
                      }
                      if (!J(c0[du][3]) || String(c0[du][3]).length === 0) {
                        c0[du][3] = 0;
                      }
                      if (!J(c0[du][4]) || String(c0[du][4]).length === 0) {
                        c0[du][4] = 1;
                      }
                      dt.push(c0[du]);
                    }
                  }
                  dq += '&ec_items=' + t(JSON_PIWIK.stringify(dt));
                }
                dq = cs(dq, ao, 'ecommerce', dr);
                bE(dq, bI);
                if (dp) {
                  c0 = {};
                }
              }
              function bY (dj, dn, dm, dl, dk, dp) {
                if (String(dj).length && J(dn)) {
                  bp(dj, dn, dm, dl, dk, dp);
                }
              }
              function br (dj) {
                if (J(dj)) {
                  bp('', dj, '', '', '', '');
                }
              }
              function bZ (dk, dm, dl) {
                aK = bg();
                var dj = cs('action_name=' + t(al(dk || bi)), dm, 'log');
                bE(dj, bI, dl);
              }
              function a0 (dl, dk) {
                var dm,
                  dj = '(^| )(piwik[_-]' + dk;
                if (dl) {
                  for (dm = 0; dm < dl.length; dm++) {
                    dj += '|' + dl[dm];
                  }
                }
                dj += ')( |$)';
                return new RegExp(dj);
              }
              function aU (dj) {
                return aD && dj && 0 === String(dj).indexOf(aD);
              }
              function cu (dn, dj, dp, dk) {
                if (aU(dj)) {
                  return 0;
                }
                var dm = a0(bK, 'download'),
                  dl = a0(a8, 'link'),
                  dq = new RegExp('\\.(' + c6.join('|') + ')([?&#]|$)', 'i');
                if (dl.test(dn)) {
                  return 'link';
                }
                if (dk || dm.test(dn) || dq.test(dj)) {
                  return 'download';
                }
                if (dp) {
                  return 0;
                }
                return 'link';
              }
              function au (dk) {
                var dj;
                dj = dk.parentNode;
                while (dj !== null && J(dj)) {
                  if (ae.isLinkElement(dk)) {
                    break;
                  }
                  dk = dj;
                  dj = dk.parentNode;
                }
                return dk;
              }
              function dc (dp) {
                dp = au(dp);
                if (!ae.hasNodeAttribute(dp, 'href')) {
                  return;
                }
                if (!J(dp.href)) {
                  return;
                }
                var dn = ae.getAttributeValueFromNode(dp, 'href');
                if (aU(dn)) {
                  return;
                }
                var dk = dp.pathname || ck(dp.href);
                var dq = dp.hostname || d(dp.href);
                var dr = dq.toLowerCase();
                var dl = dp.href.replace(dq, dr);
                var dm = new RegExp(
                  '^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):',
                  'i'
                );
                if (!dm.test(dl)) {
                  var dj = cu(dp.className, dl, ar(dr, dk), ae.hasNodeAttribute(dp, 'download'));
                  if (dj) {
                    return { type: dj, href: dl };
                  }
                }
              }
              function aP (dj, dk, dl, dm) {
                var dn = v.buildInteractionRequestParams(dj, dk, dl, dm);
                if (!dn) {
                  return;
                }
                return cs(dn, null, 'contentInteraction');
              }
              function cK (dl, dm, dr, dj, dk) {
                if (!J(dl)) {
                  return;
                }
                if (aU(dl)) {
                  return dl;
                }
                var dp = v.toAbsoluteUrl(dl);
                var dn = 'redirecturl=' + t(dp) + '&';
                dn += aP(dm, dr, dj, dk || dl);
                var dq = '&';
                if (aD.indexOf('?') < 0) {
                  dq = '?';
                }
                return aD + dq + dn;
              }
              function bb (dj, dk) {
                if (!dj || !dk) {
                  return false;
                }
                var dl = v.findTargetNode(dj);
                if (v.shouldIgnoreInteraction(dl)) {
                  return false;
                }
                dl = v.findTargetNodeNoDefault(dj);
                if (dl && !V(dl, dk)) {
                  return false;
                }
                return true;
              }
              function ct (dl, dk, dn) {
                if (!dl) {
                  return;
                }
                var dj = v.findParentContentNode(dl);
                if (!dj) {
                  return;
                }
                if (!bb(dj, dl)) {
                  return;
                }
                var dm = v.buildContentBlock(dj);
                if (!dm) {
                  return;
                }
                if (!dm.target && dn) {
                  dm.target = dn;
                }
                return v.buildInteractionRequestParams(dk, dm.name, dm.piece, dm.target);
              }
              function aW (dk) {
                if (!b9 || !b9.length) {
                  return false;
                }
                var dj, dl;
                for (dj = 0; dj < b9.length; dj++) {
                  dl = b9[dj];
                  if (
                    dl &&
                    dl.name === dk.name &&
                    dl.piece === dk.piece &&
                    dl.target === dk.target
                  ) {
                    return true;
                  }
                }
                return false;
              }
              function bD (dm) {
                if (!dm) {
                  return false;
                }
                var dq = v.findTargetNode(dm);
                if (!dq || v.shouldIgnoreInteraction(dq)) {
                  return false;
                }
                var dr = dc(dq);
                if (c9 && dr && dr.type) {
                  return false;
                }
                if (ae.isLinkElement(dq) && ae.hasNodeAttributeWithValue(dq, 'href')) {
                  var dj = String(ae.getAttributeValueFromNode(dq, 'href'));
                  if (0 === dj.indexOf('#')) {
                    return false;
                  }
                  if (aU(dj)) {
                    return true;
                  }
                  if (!v.isUrlToCurrentDomain(dj)) {
                    return false;
                  }
                  var dn = v.buildContentBlock(dm);
                  if (!dn) {
                    return;
                  }
                  var dl = dn.name;
                  var ds = dn.piece;
                  var dp = dn.target;
                  if (
                    !ae.hasNodeAttributeWithValue(dq, v.CONTENT_TARGET_ATTR) ||
                    dq.wasContentTargetAttrReplaced
                  ) {
                    dq.wasContentTargetAttrReplaced = true;
                    dp = v.toAbsoluteUrl(dj);
                    ae.setAnyAttribute(dq, v.CONTENT_TARGET_ATTR, dp);
                  }
                  var dk = cK(dj, 'click', dl, ds, dp);
                  v.setHrefAttribute(dq, dk);
                  return true;
                }
                return false;
              }
              function aM (dk) {
                if (!dk || !dk.length) {
                  return;
                }
                var dj;
                for (dj = 0; dj < dk.length; dj++) {
                  bD(dk[dj]);
                }
              }
              function aX (dj) {
                return function (dk) {
                  if (!dj) {
                    return;
                  }
                  var dn = v.findParentContentNode(dj);
                  var dp;
                  if (dk) {
                    dp = dk.target || dk.srcElement;
                  }
                  if (!dp) {
                    dp = dj;
                  }
                  if (!bb(dn, dp)) {
                    return;
                  }
                  cf(bI);
                  if (
                    ae.isLinkElement(dj) &&
                    ae.hasNodeAttributeWithValue(dj, 'href') &&
                    ae.hasNodeAttributeWithValue(dj, v.CONTENT_TARGET_ATTR)
                  ) {
                    var dl = ae.getAttributeValueFromNode(dj, 'href');
                    if (!aU(dl) && dj.wasContentTargetAttrReplaced) {
                      ae.setAnyAttribute(dj, v.CONTENT_TARGET_ATTR, '');
                    }
                  }
                  var dt = dc(dj);
                  if (ap && dt && dt.type) {
                    return dt.type;
                  }
                  if (bD(dn)) {
                    return 'href';
                  }
                  var dq = v.buildContentBlock(dn);
                  if (!dq) {
                    return;
                  }
                  var dm = dq.name;
                  var du = dq.piece;
                  var ds = dq.target;
                  var dr = aP('click', dm, du, ds);
                  if (dr) {
                    bE(dr, bI);
                  }
                  return dr;
                };
              }
              function b0 (dl) {
                if (!dl || !dl.length) {
                  return;
                }
                var dj, dk;
                for (dj = 0; dj < dl.length; dj++) {
                  dk = v.findTargetNode(dl[dj]);
                  if (dk && !dk.contentInteractionTrackingSetupDone) {
                    dk.contentInteractionTrackingSetupDone = true;
                    an(dk, 'click', aX(dk));
                  }
                }
              }
              function bw (dl, dm) {
                if (!dl || !dl.length) {
                  return [];
                }
                var dj, dk;
                for (dj = 0; dj < dl.length; dj++) {
                  if (aW(dl[dj])) {
                    dl.splice(dj, 1);
                    dj--;
                  } else {
                    b9.push(dl[dj]);
                  }
                }
                if (!dl || !dl.length) {
                  return [];
                }
                aM(dm);
                b0(dm);
                var dn = [];
                for (dj = 0; dj < dl.length; dj++) {
                  dk = cs(
                    v.buildImpressionRequestParams(dl[dj].name, dl[dj].piece, dl[dj].target),
                    undefined,
                    'contentImpressions'
                  );
                  if (dk) {
                    dn.push(dk);
                  }
                }
                return dn;
              }
              function cy (dk) {
                var dj = v.collectContent(dk);
                return bw(dj, dk);
              }
              function a9 (dk) {
                if (!dk || !dk.length) {
                  return [];
                }
                var dj;
                for (dj = 0; dj < dk.length; dj++) {
                  if (!v.isNodeVisible(dk[dj])) {
                    dk.splice(dj, 1);
                    dj--;
                  }
                }
                if (!dk || !dk.length) {
                  return [];
                }
                return cy(dk);
              }
              function aF (dl, dj, dk) {
                var dm = v.buildImpressionRequestParams(dl, dj, dk);
                return cs(dm, null, 'contentImpression');
              }
              function db (dm, dk) {
                if (!dm) {
                  return;
                }
                var dj = v.findParentContentNode(dm);
                var dl = v.buildContentBlock(dj);
                if (!dl) {
                  return;
                }
                if (!dk) {
                  dk = 'Unknown';
                }
                return aP(dk, dl.name, dl.piece, dl.target);
              }
              function cO (dk, dm, dj, dl) {
                return (
                  'e_c=' +
                  t(dk) +
                  '&e_a=' +
                  t(dm) +
                  (J(dj) ? '&e_n=' + t(dj) : '') +
                  (J(dl) ? '&e_v=' + t(dl) : '')
                );
              }
              function at (dl, dn, dj, dm, dq, dp) {
                if (a(String(dl)).length === 0 || a(String(dn)).length === 0) {
                  ak(
                    'Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces'
                  );
                  return false;
                }
                var dk = cs(cO(dl, dn, dj, dm), dq, 'event');
                bE(dk, bI, dp);
              }
              function b7 (dj, dm, dk, dn) {
                var dl = cs(
                  'search=' +
                    t(dj) +
                    (dm ? '&search_cat=' + t(dm) : '') +
                    (J(dk) ? '&search_count=' + dk : ''),
                  dn,
                  'sitesearch'
                );
                bE(dl, bI);
              }
              function cT (dj, dn, dm, dl) {
                var dk = cs('idgoal=' + dj + (dn ? '&revenue=' + dn : ''), dm, 'goal');
                bE(dk, bI, dl);
              }
              function c1 (dm, dj, dr, dq, dl) {
                var dp = dj + '=' + t(b1(dm));
                var dk = ct(dl, 'click', dm);
                if (dk) {
                  dp += '&' + dk;
                }
                var dn = cs(dp, dr, 'link');
                bE(dn, bI, dq);
              }
              function bT (dk, dj) {
                if (dk !== '') {
                  return dk + dj.charAt(0).toUpperCase() + dj.slice(1);
                }
                return dj;
              }
              function cg (dp) {
                var dn,
                  dj,
                  dm = ['', 'webkit', 'ms', 'moz'],
                  dl;
                if (!be) {
                  for (dj = 0; dj < dm.length; dj++) {
                    dl = dm[dj];
                    if (Object.prototype.hasOwnProperty.call(G, bT(dl, 'hidden'))) {
                      if (G[bT(dl, 'visibilityState')] === 'prerender') {
                        dn = true;
                      }
                      break;
                    }
                  }
                }
                if (dn) {
                  an(G, dl + 'visibilitychange', function dk () {
                    G.removeEventListener(dl + 'visibilitychange', dk, false);
                    dp();
                  });
                  return;
                }
                dp();
              }
              function bq () {
                var dk = aY().uuid;
                var dj = aI();
                return dk + dj;
              }
              function ci (dj) {
                if (!dj) {
                  return;
                }
                if (!ae.hasNodeAttribute(dj, 'href')) {
                  return;
                }
                var dk = ae.getAttributeValueFromNode(dj, 'href');
                if (!dk || aU(dk)) {
                  return;
                }
                dk = k(dk, av);
                var dl = bq();
                dk = F(dk, av, dl);
                ae.setAnyAttribute(dj, 'href', dk);
              }
              function aA (dm) {
                var dn = ae.getAttributeValueFromNode(dm, 'href');
                if (!dn) {
                  return false;
                }
                dn = String(dn);
                var dk =
                  dn.indexOf('//') === 0 ||
                  dn.indexOf('http://') === 0 ||
                  dn.indexOf('https://') === 0;
                if (!dk) {
                  return false;
                }
                var dj = dm.pathname || ck(dm.href);
                var dl = (dm.hostname || d(dm.href)).toLowerCase();
                if (ar(dl, dj)) {
                  if (!cF(cU, L(dl))) {
                    return true;
                  }
                  return false;
                }
                return false;
              }
              function cE (dj) {
                var dk = dc(dj);
                if (dk && dk.type) {
                  dk.href = p(dk.href);
                  c1(dk.href, dk.type, undefined, null, dj);
                  return;
                }
                if (cM) {
                  dj = au(dj);
                  if (aA(dj)) {
                    ci(dj);
                  }
                }
              }
              function cv () {
                return G.all && !G.addEventListener;
              }
              function cV (dj) {
                var dl = dj.which;
                var dk = typeof dj.button;
                if (!dl && dk !== 'undefined') {
                  if (cv()) {
                    if (dj.button & 1) {
                      dl = 1;
                    } else {
                      if (dj.button & 2) {
                        dl = 3;
                      } else {
                        if (dj.button & 4) {
                          dl = 2;
                        }
                      }
                    }
                  } else {
                    if (dj.button === 0 || dj.button === '0') {
                      dl = 1;
                    } else {
                      if (dj.button & 1) {
                        dl = 2;
                      } else {
                        if (dj.button & 2) {
                          dl = 3;
                        }
                      }
                    }
                  }
                }
                return dl;
              }
              function bS (dj) {
                switch (cV(dj)) {
                  case 1:
                    return 'left';
                  case 2:
                    return 'middle';
                  case 3:
                    return 'right';
                }
              }
              function a1 (dj) {
                return dj.target || dj.srcElement;
              }
              function aB (dj) {
                return function (dm) {
                  dm = dm || T.event;
                  var dl = bS(dm);
                  var dn = a1(dm);
                  if (dm.type === 'click') {
                    var dk = false;
                    if (dj && dl === 'middle') {
                      dk = true;
                    }
                    if (dn && !dk) {
                      cE(dn);
                    }
                  } else {
                    if (dm.type === 'mousedown') {
                      if (dl === 'middle' && dn) {
                        aR = dl;
                        bz = dn;
                      } else {
                        aR = bz = null;
                      }
                    } else {
                      if (dm.type === 'mouseup') {
                        if (dl === aR && dn === bz) {
                          cE(dn);
                        }
                        aR = bz = null;
                      } else {
                        if (dm.type === 'contextmenu') {
                          cE(dn);
                        }
                      }
                    }
                  }
                };
              }
              function aq (dl, dk) {
                var dj = typeof dk;
                if (dj === 'undefined') {
                  dk = true;
                }
                an(dl, 'click', aB(dk), false);
                if (dk) {
                  an(dl, 'mouseup', aB(dk), false);
                  an(dl, 'mousedown', aB(dk), false);
                  an(dl, 'contextmenu', aB(dk), false);
                }
              }
              function bC (dl, dn) {
                ap = true;
                var dm,
                  dk = a0(by, 'ignore'),
                  dp = G.links,
                  dj = null,
                  dq = null;
                if (dp) {
                  for (dm = 0; dm < dp.length; dm++) {
                    dj = dp[dm];
                    if (!dk.test(dj.className)) {
                      dq = typeof dj.piwikTrackers;
                      if ('undefined' === dq) {
                        dj.piwikTrackers = [];
                      }
                      if (-1 === M(dj.piwikTrackers, dn)) {
                        dj.piwikTrackers.push(dn);
                        aq(dj, dl);
                      }
                    }
                  }
                }
              }
              function aS (dk, dn, dp) {
                if (ce) {
                  return true;
                }
                ce = true;
                var dq = false;
                var dm, dl;
                function dj () {
                  dq = true;
                }
                n(function () {
                  function dr (dt) {
                    setTimeout(function () {
                      if (!ce) {
                        return;
                      }
                      dq = false;
                      dp.trackVisibleContentImpressions();
                      dr(dt);
                    }, dt);
                  }
                  function ds (dt) {
                    setTimeout(function () {
                      if (!ce) {
                        return;
                      }
                      if (dq) {
                        dq = false;
                        dp.trackVisibleContentImpressions();
                      }
                      ds(dt);
                    }, dt);
                  }
                  if (dk) {
                    dm = ['scroll', 'resize'];
                    for (dl = 0; dl < dm.length; dl++) {
                      if (G.addEventListener) {
                        G.addEventListener(dm[dl], dj, false);
                      } else {
                        T.attachEvent('on' + dm[dl], dj);
                      }
                    }
                    ds(100);
                  }
                  if (dn && dn > 0) {
                    dn = parseInt(dn, 10);
                    dr(dn);
                  }
                });
              }
              var bB = {
                enabled: true,
                requests: [],
                timeout: null,
                interval: 2500,
                sendRequests: function () {
                  var dj = this.requests;
                  this.requests = [];
                  if (dj.length === 1) {
                    bE(dj[0], bI);
                  } else {
                    df(dj, bI);
                  }
                },
                push: function (dj) {
                  if (!dj) {
                    return;
                  }
                  if (m || !this.enabled) {
                    bE(dj, bI);
                    return;
                  }
                  bB.requests.push(dj);
                  if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = null;
                  }
                  this.timeout = setTimeout(function () {
                    bB.timeout = null;
                    bB.sendRequests();
                  }, bB.interval);
                  var dk = 'RequestQueue' + aw;
                  if (!Object.prototype.hasOwnProperty.call(b, dk)) {
                    b[dk] = {
                      unload: function () {
                        if (bB.timeout) {
                          clearTimeout(bB.timeout);
                        }
                        bB.sendRequests();
                      },
                    };
                  }
                },
              };
              bh();
              aL();
              this.hasConsent = function () {
                return bA;
              };
              this.getVisitorId = function () {
                return aY().uuid;
              };
              this.getVisitorInfo = function () {
                return cN();
              };
              this.getAttributionInfo = function () {
                return bL();
              };
              this.getAttributionCampaignName = function () {
                return bL()[0];
              };
              this.getAttributionCampaignKeyword = function () {
                return bL()[1];
              };
              this.getAttributionReferrerTimestamp = function () {
                return bL()[2];
              };
              this.getAttributionReferrerUrl = function () {
                return bL()[3];
              };
              this.setTrackerUrl = function (dj) {
                aD = dj;
              };
              this.getTrackerUrl = function () {
                return aD;
              };
              this.getPiwikUrl = function () {
                return O(this.getTrackerUrl(), bG);
              };
              this.addTracker = function (dj, dl) {
                if (!J(dj) || null === dj) {
                  dj = this.getTrackerUrl();
                }
                var dk = new Q(dj, dl);
                I.push(dk);
                e.trigger('TrackerAdded', [this]);
                return dk;
              };
              this.getSiteId = function () {
                return b5;
              };
              this.setSiteId = function (dj) {
                b2(dj);
              };
              this.resetUserId = function () {
                bx = '';
              };
              this.setUserId = function (dj) {
                if (Y(dj)) {
                  bx = dj;
                }
              };
              this.getUserId = function () {
                return bx;
              };
              this.setCustomData = function (dj, dk) {
                if (W(dj)) {
                  ao = dj;
                } else {
                  if (!ao) {
                    ao = {};
                  }
                  ao[dj] = dk;
                }
              };
              this.getCustomData = function () {
                return ao;
              };
              this.setCustomRequestProcessing = function (dj) {
                ca = dj;
              };
              this.appendToTrackingUrl = function (dj) {
                cZ = dj;
              };
              this.getRequest = function (dj) {
                return cs(dj);
              };
              this.addPlugin = function (dj, dk) {
                b[dj] = dk;
              };
              this.setCustomDimension = function (dj, dk) {
                dj = parseInt(dj, 10);
                if (dj > 0) {
                  if (!J(dk)) {
                    dk = '';
                  }
                  if (!w(dk)) {
                    dk = String(dk);
                  }
                  bl[dj] = dk;
                }
              };
              this.getCustomDimension = function (dj) {
                dj = parseInt(dj, 10);
                if (dj > 0 && Object.prototype.hasOwnProperty.call(bl, dj)) {
                  return bl[dj];
                }
              };
              this.deleteCustomDimension = function (dj) {
                dj = parseInt(dj, 10);
                if (dj > 0) {
                  delete bl[dj];
                }
              };
              this.setCustomVariable = function (dk, dj, dn, dl) {
                var dm;
                if (!J(dl)) {
                  dl = 'visit';
                }
                if (!J(dj)) {
                  return;
                }
                if (!J(dn)) {
                  dn = '';
                }
                if (dk > 0) {
                  dj = !w(dj) ? String(dj) : dj;
                  dn = !w(dn) ? String(dn) : dn;
                  dm = [dj.slice(0, bs), dn.slice(0, bs)];
                  if (dl === 'visit' || dl === 2) {
                    cD();
                    aQ[dk] = dm;
                  } else {
                    if (dl === 'page' || dl === 3) {
                      bV[dk] = dm;
                    } else {
                      if (dl === 'event') {
                        cl[dk] = dm;
                      }
                    }
                  }
                }
              };
              this.getCustomVariable = function (dk, dl) {
                var dj;
                if (!J(dl)) {
                  dl = 'visit';
                }
                if (dl === 'page' || dl === 3) {
                  dj = bV[dk];
                } else {
                  if (dl === 'event') {
                    dj = cl[dk];
                  } else {
                    if (dl === 'visit' || dl === 2) {
                      cD();
                      dj = aQ[dk];
                    }
                  }
                }
                if (!J(dj) || (dj && dj[0] === '')) {
                  return false;
                }
                return dj;
              };
              this.deleteCustomVariable = function (dj, dk) {
                if (this.getCustomVariable(dj, dk)) {
                  this.setCustomVariable(dj, '', '', dk);
                }
              };
              this.deleteCustomVariables = function (dj) {
                if (dj === 'page' || dj === 3) {
                  bV = {};
                } else {
                  if (dj === 'event') {
                    cl = {};
                  } else {
                    if (dj === 'visit' || dj === 2) {
                      aQ = {};
                    }
                  }
                }
              };
              this.storeCustomVariablesInCookie = function () {
                bP = true;
              };
              this.setLinkTrackingTimer = function (dj) {
                bI = dj;
              };
              this.getLinkTrackingTimer = function () {
                return bI;
              };
              this.setDownloadExtensions = function (dj) {
                if (w(dj)) {
                  dj = dj.split('|');
                }
                c6 = dj;
              };
              this.addDownloadExtensions = function (dk) {
                var dj;
                if (w(dk)) {
                  dk = dk.split('|');
                }
                for (dj = 0; dj < dk.length; dj++) {
                  c6.push(dk[dj]);
                }
              };
              this.removeDownloadExtensions = function (dl) {
                var dk,
                  dj = [];
                if (w(dl)) {
                  dl = dl.split('|');
                }
                for (dk = 0; dk < c6.length; dk++) {
                  if (M(dl, c6[dk]) === -1) {
                    dj.push(c6[dk]);
                  }
                }
                c6 = dj;
              };
              this.setDomains = function (dj) {
                ax = w(dj) ? [dj] : dj;
                var dn = false,
                  dl = 0,
                  dk;
                for (dl; dl < ax.length; dl++) {
                  dk = String(ax[dl]);
                  if (cF(cU, L(dk))) {
                    dn = true;
                    break;
                  }
                  var dm = ck(dk);
                  if (dm && dm !== '/' && dm !== '/*') {
                    dn = true;
                    break;
                  }
                }
                if (!dn) {
                  ax.push(cU);
                }
              };
              this.enableCrossDomainLinking = function () {
                cM = true;
              };
              this.disableCrossDomainLinking = function () {
                cM = false;
              };
              this.isCrossDomainLinkingEnabled = function () {
                return cM;
              };
              this.setCrossDomainLinkingTimeout = function (dj) {
                aZ = dj;
              };
              this.getCrossDomainLinkingUrlParameter = function () {
                return t(av) + '=' + t(bq());
              };
              this.setIgnoreClasses = function (dj) {
                by = w(dj) ? [dj] : dj;
              };
              this.setRequestMethod = function (dj) {
                da = dj || ch;
              };
              this.setRequestContentType = function (dj) {
                cw = dj || aH;
              };
              this.setReferrerUrl = function (dj) {
                bm = dj;
              };
              this.setCustomUrl = function (dj) {
                a4 = bU(bM, dj);
              };
              this.getCurrentUrl = function () {
                return a4 || bM;
              };
              this.setDocumentTitle = function (dj) {
                bi = dj;
              };
              this.setAPIUrl = function (dj) {
                bG = dj;
              };
              this.setDownloadClasses = function (dj) {
                bK = w(dj) ? [dj] : dj;
              };
              this.setLinkClasses = function (dj) {
                a8 = w(dj) ? [dj] : dj;
              };
              this.setCampaignNameKey = function (dj) {
                cq = w(dj) ? [dj] : dj;
              };
              this.setCampaignKeywordKey = function (dj) {
                bF = w(dj) ? [dj] : dj;
              };
              this.discardHashTag = function (dj) {
                bO = dj;
              };
              this.setCookieNamePrefix = function (dj) {
                bj = dj;
                aQ = bW();
              };
              this.setCookieDomain = function (dj) {
                var dk = L(dj);
                if (bv(dk)) {
                  cX = dk;
                  bh();
                }
              };
              this.getCookieDomain = function () {
                return cX;
              };
              this.hasCookies = function () {
                return '1' === b4();
              };
              this.setSessionCookie = function (dl, dk, dj) {
                if (!dl) {
                  throw new Error('Missing cookie name');
                }
                if (!J(dj)) {
                  dj = co;
                }
                bt.push(dl);
                de(aT(dl), dk, dj, bo, cX);
              };
              this.getCookie = function (dk) {
                var dj = aC(aT(dk));
                if (dj === 0) {
                  return null;
                }
                return dj;
              };
              this.setCookiePath = function (dj) {
                bo = dj;
                bh();
              };
              this.getCookiePath = function (dj) {
                return bo;
              };
              this.setVisitorCookieTimeout = function (dj) {
                cI = dj * 1000;
              };
              this.setSessionCookieTimeout = function (dj) {
                co = dj * 1000;
              };
              this.getSessionCookieTimeout = function () {
                return co;
              };
              this.setReferralCookieTimeout = function (dj) {
                c5 = dj * 1000;
              };
              this.setConversionAttributionFirstReferrer = function (dj) {
                bu = dj;
              };
              this.setSecureCookie = function (dj) {
                bR = dj;
              };
              this.disableCookies = function () {
                bk = true;
                c8.cookie = '0';
                if (b5) {
                  aE();
                }
              };
              this.deleteCookies = function () {
                aE();
              };
              this.setDoNotTrack = function (dk) {
                var dj = h.doNotTrack || h.msDoNotTrack;
                cP = dk && (dj === 'yes' || dj === '1');
                if (cP) {
                  this.disableCookies();
                }
              };
              this.alwaysUseSendBeacon = function () {
                cW = true;
              };
              this.addListener = function (dk, dj) {
                aq(dk, dj);
              };
              this.enableLinkTracking = function (dk) {
                c9 = true;
                var dj = this;
                cg(function () {
                  q(function () {
                    bC(dk, dj);
                  });
                });
              };
              this.enableJSErrorTracking = function () {
                if (cS) {
                  return;
                }
                cS = true;
                var dj = T.onerror;
                T.onerror = function (dp, dm, dl, dn, dk) {
                  cg(function () {
                    var dq = 'JavaScript Errors';
                    var dr = dm + ':' + dl;
                    if (dn) {
                      dr += ':' + dn;
                    }
                    at(dq, dr, dp);
                  });
                  if (dj) {
                    return dj(dp, dm, dl, dn, dk);
                  }
                  return false;
                };
              };
              this.disablePerformanceTracking = function () {
                a2 = false;
              };
              this.setGenerationTimeMs = function (dj) {
                cm = parseInt(dj, 10);
              };
              this.setVisitStandardLength = function (dj) {
                dj = Math.max(dj, 5);
                c7 = dj;
              };
              this.enableHeartBeatTimer = function (dj) {
                dj = Math.max(dj, 5);
                a5 = (dj || 15) * 1000;
                if (cY !== null) {
                  dg();
                }
              };
              this.disableHeartBeatTimer = function () {
                bJ();
                if (a5 || aN) {
                  if (T.removeEventListener) {
                    T.removeEventListener('focus', ba);
                    T.removeEventListener('blur', ay);
                  } else {
                    if (T.detachEvent) {
                      T.detachEvent('onfocus', ba);
                      T.detachEvent('onblur', ay);
                    }
                  }
                }
                a5 = null;
                aN = false;
              };
              this.killFrame = function () {
                if (T.location !== T.top.location) {
                  T.top.location = T.location;
                }
              };
              this.redirectFile = function (dj) {
                if (T.location.protocol === 'file:') {
                  T.location = dj;
                }
              };
              this.setCountPreRendered = function (dj) {
                be = dj;
              };
              this.trackGoal = function (dj, dm, dl, dk) {
                cg(function () {
                  cT(dj, dm, dl, dk);
                });
              };
              this.trackLink = function (dk, dj, dm, dl) {
                cg(function () {
                  c1(dk, dj, dm, dl);
                });
              };
              this.getNumTrackedPageViews = function () {
                return cr;
              };
              this.trackPageView = function (dj, dl, dk) {
                b9 = [];
                cJ = [];
                if (N(b5)) {
                  cg(function () {
                    Z(aD, bG, b5);
                  });
                } else {
                  cg(function () {
                    cr++;
                    bZ(dj, dl, dk);
                  });
                }
              };
              this.trackAllContentImpressions = function () {
                if (N(b5)) {
                  return;
                }
                cg(function () {
                  q(function () {
                    var dj = v.findContentNodes();
                    var dk = cy(dj);
                    df(dk, bI);
                  });
                });
              };
              this.trackVisibleContentImpressions = function (dj, dk) {
                if (N(b5)) {
                  return;
                }
                if (!J(dj)) {
                  dj = true;
                }
                if (!J(dk)) {
                  dk = 750;
                }
                aS(dj, dk, this);
                cg(function () {
                  n(function () {
                    var dl = v.findContentNodes();
                    var dm = a9(dl);
                    df(dm, bI);
                  });
                });
              };
              this.trackContentImpression = function (dl, dj, dk) {
                if (N(b5)) {
                  return;
                }
                dl = a(dl);
                dj = a(dj);
                dk = a(dk);
                if (!dl) {
                  return;
                }
                dj = dj || 'Unknown';
                cg(function () {
                  var dm = aF(dl, dj, dk);
                  bE(dm, bI);
                });
              };
              this.trackContentImpressionsWithinNode = function (dj) {
                if (N(b5) || !dj) {
                  return;
                }
                cg(function () {
                  if (ce) {
                    n(function () {
                      var dk = v.findContentNodesWithinNode(dj);
                      var dl = a9(dk);
                      df(dl, bI);
                    });
                  } else {
                    q(function () {
                      var dk = v.findContentNodesWithinNode(dj);
                      var dl = cy(dk);
                      df(dl, bI);
                    });
                  }
                });
              };
              this.trackContentInteraction = function (dl, dm, dj, dk) {
                if (N(b5)) {
                  return;
                }
                dl = a(dl);
                dm = a(dm);
                dj = a(dj);
                dk = a(dk);
                if (!dl || !dm) {
                  return;
                }
                dj = dj || 'Unknown';
                cg(function () {
                  var dn = aP(dl, dm, dj, dk);
                  if (dn) {
                    bE(dn, bI);
                  }
                });
              };
              this.trackContentInteractionNode = function (dk, dj) {
                if (N(b5) || !dk) {
                  return;
                }
                cg(function () {
                  var dl = db(dk, dj);
                  if (dl) {
                    bE(dl, bI);
                  }
                });
              };
              this.logAllContentBlocksOnPage = function () {
                var dl = v.findContentNodes();
                var dj = v.collectContent(dl);
                var dk = typeof console;
                if (dk !== 'undefined' && console && console.log) {
                  console.log(dj);
                }
              };
              this.trackEvent = function (dk, dm, dj, dl, dp, dn) {
                cg(function () {
                  at(dk, dm, dj, dl, dp, dn);
                });
              };
              this.trackSiteSearch = function (dj, dl, dk, dm) {
                b9 = [];
                cg(function () {
                  b7(dj, dl, dk, dm);
                });
              };
              this.setEcommerceView = function (dm, dj, dl, dk) {
                if (Y(dl)) {
                  dl = String(dl);
                }
                if (!J(dl) || dl === null || dl === false || !dl.length) {
                  dl = '';
                } else {
                  if (dl instanceof Array) {
                    dl = JSON_PIWIK.stringify(dl);
                  }
                }
                bV[5] = ['_pkc', dl];
                if (J(dk) && dk !== null && dk !== false && String(dk).length) {
                  bV[2] = ['_pkp', dk];
                }
                if (!Y(dm) && !Y(dj)) {
                  return;
                }
                if (Y(dm)) {
                  bV[3] = ['_pks', dm];
                }
                if (!Y(dj)) {
                  dj = '';
                }
                bV[4] = ['_pkn', dj];
              };
              this.getEcommerceItems = function () {
                return JSON.parse(JSON.stringify(c0));
              };
              this.addEcommerceItem = function (dn, dj, dl, dk, dm) {
                if (Y(dn)) {
                  c0[dn] = [String(dn), dj, dl, dk, dm];
                }
              };
              this.removeEcommerceItem = function (dj) {
                if (Y(dj)) {
                  dj = String(dj);
                  delete c0[dj];
                }
              };
              this.clearEcommerceCart = function () {
                c0 = {};
              };
              this.trackEcommerceOrder = function (dj, dn, dm, dl, dk, dp) {
                bY(dj, dn, dm, dl, dk, dp);
              };
              this.trackEcommerceCartUpdate = function (dj) {
                br(dj);
              };
              this.trackRequest = function (dk, dm, dl, dj) {
                cg(function () {
                  var dn = cs(dk, dm, dj);
                  bE(dn, bI, dl);
                });
              };
              this.ping = function () {
                this.trackRequest('ping=1', null, null, 'ping');
              };
              this.disableQueueRequest = function () {
                bB.enabled = false;
              };
              this.setRequestQueueInterval = function (dj) {
                if (dj < 1000) {
                  throw new Error('Request queue interval needs to be at least 1000ms');
                }
                bB.interval = dj;
              };
              this.queueRequest = function (dj) {
                cg(function () {
                  var dk = cs(dj);
                  bB.push(dk);
                });
              };
              this.isConsentRequired = function () {
                return cz;
              };
              this.getRememberedConsent = function () {
                var dj = aC(bd);
                if (aC(cL)) {
                  if (dj) {
                    bX(bd, bo, cX);
                  }
                  return null;
                }
                if (!dj || dj === 0) {
                  return null;
                }
                return dj;
              };
              this.hasRememberedConsent = function () {
                return !!this.getRememberedConsent();
              };
              this.requireConsent = function () {
                cz = true;
                bA = this.hasRememberedConsent();
                x++;
                b['CoreConsent' + x] = {
                  unload: function () {
                    if (!bA) {
                      aE();
                    }
                  },
                };
              };
              this.setConsentGiven = function () {
                bA = true;
                bX(cL, bo, cX);
                var dk, dj;
                for (dk = 0; dk < cJ.length; dk++) {
                  dj = typeof cJ[dk];
                  if (dj === 'string') {
                    bE(cJ[dk], bI);
                  } else {
                    if (dj === 'object') {
                      df(cJ[dk], bI);
                    }
                  }
                }
                cJ = [];
              };
              this.rememberConsentGiven = function (dk) {
                if (dk) {
                  dk = dk * 60 * 60 * 1000;
                } else {
                  dk = 30 * 365 * 24 * 60 * 60 * 1000;
                }
                this.setConsentGiven();
                var dj = new Date().getTime();
                de(bd, dj, dk, bo, cX, bR);
              };
              this.forgetConsentGiven = function () {
                var dj = 30 * 365 * 24 * 60 * 60 * 1000;
                bX(bd, bo, cX);
                de(cL, new Date().getTime(), dj, bo, cX, bR);
                this.requireConsent();
              };
              this.isUserOptedOut = function () {
                return !bA;
              };
              this.optUserOut = this.forgetConsentGiven;
              this.forgetUserOptOut = this.rememberConsentGiven;
              e.trigger('TrackerSetup', [this]);
            }
            function H () {
              return { push: af };
            }
            function c (au, at) {
              var av = {};
              var aq, ar;
              for (aq = 0; aq < at.length; aq++) {
                var ao = at[aq];
                av[ao] = 1;
                for (ar = 0; ar < au.length; ar++) {
                  if (au[ar] && au[ar][0]) {
                    var ap = au[ar][0];
                    if (ao === ap) {
                      af(au[ar]);
                      delete au[ar];
                      if (av[ap] > 1 && ap !== 'addTracker') {
                        ak(
                          'The method ' +
                            ap +
                            ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: https://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers'
                        );
                      }
                      av[ap]++;
                    }
                  }
                }
              }
              return au;
            }
            var C = [
              'addTracker',
              'disableCookies',
              'setTrackerUrl',
              'setAPIUrl',
              'enableCrossDomainLinking',
              'setCrossDomainLinkingTimeout',
              'setSessionCookieTimeout',
              'setVisitorCookieTimeout',
              'setSecureCookie',
              'setCookiePath',
              'setCookieDomain',
              'setDomains',
              'setUserId',
              'setSiteId',
              'alwaysUseSendBeacon',
              'enableLinkTracking',
              'requireConsent',
              'setConsentGiven',
            ];
            function ad (ao, aq) {
              var ap = new Q(ao, aq);
              I.push(ap);
              _paq = c(_paq, C);
              for (E = 0; E < _paq.length; E++) {
                if (_paq[E]) {
                  af(_paq[E]);
                }
              }
              _paq = new H();
              e.trigger('TrackerAdded', [ap]);
              return ap;
            }
            an(T, 'beforeunload', ai, false);
            an(
              T,
              'message',
              function (au) {
                if (!au || !au.origin) {
                  return;
                }
                var aw, ar, ap;
                var ax = d(au.origin);
                var at = e.getAsyncTrackers();
                for (ar = 0; ar < at.length; ar++) {
                  ap = d(at[ar].getPiwikUrl());
                  if (ap === ax) {
                    aw = at[ar];
                    break;
                  }
                }
                if (!aw) {
                  return;
                }
                var aq = null;
                try {
                  aq = JSON.parse(au.data);
                } catch (av) {
                  return;
                }
                if (!aq) {
                  return;
                }
                function ao (aA) {
                  var aC = G.getElementsByTagName('iframe');
                  for (ar = 0; ar < aC.length; ar++) {
                    var aB = aC[ar];
                    var ay = d(aB.src);
                    if (aB.contentWindow && J(aB.contentWindow.postMessage) && ay === ax) {
                      var az = JSON.stringify(aA);
                      aB.contentWindow.postMessage(az, '*');
                    }
                  }
                }
                if (J(aq.maq_initial_value)) {
                  ao({
                    maq_opted_in: aq.maq_initial_value && aw.hasConsent(),
                    maq_url: aw.getPiwikUrl(),
                    maq_optout_by_default: aw.isConsentRequired(),
                  });
                } else {
                  if (J(aq.maq_opted_in)) {
                    at = e.getAsyncTrackers();
                    for (ar = 0; ar < at.length; ar++) {
                      aw = at[ar];
                      if (aq.maq_opted_in) {
                        aw.rememberConsentGiven();
                      } else {
                        aw.forgetConsentGiven();
                      }
                    }
                    ao({
                      maq_confirm_opted_in: aw.hasConsent(),
                      maq_url: aw.getPiwikUrl(),
                      maq_optout_by_default: aw.isConsentRequired(),
                    });
                  }
                }
              },
              false
            );
            Date.prototype.getTimeAlias = Date.prototype.getTime;
            e = {
              initialized: false,
              JSON: JSON_PIWIK,
              DOM: {
                addEventListener: function (ar, aq, ap, ao) {
                  var at = typeof ao;
                  if (at === 'undefined') {
                    ao = false;
                  }
                  an(ar, aq, ap, ao);
                },
                onLoad: n,
                onReady: q,
                isNodeVisible: j,
                isOrWasNodeVisible: v.isNodeVisible,
              },
              on: function (ap, ao) {
                if (!y[ap]) {
                  y[ap] = [];
                }
                y[ap].push(ao);
              },
              off: function (aq, ap) {
                if (!y[aq]) {
                  return;
                }
                var ao = 0;
                for (ao; ao < y[aq].length; ao++) {
                  if (y[aq][ao] === ap) {
                    y[aq].splice(ao, 1);
                  }
                }
              },
              trigger: function (aq, ar, ap) {
                if (!y[aq]) {
                  return;
                }
                var ao = 0;
                for (ao; ao < y[aq].length; ao++) {
                  y[aq][ao].apply(ap || T, ar);
                }
              },
              addPlugin: function (ao, ap) {
                b[ao] = ap;
              },
              getTracker: function (ao, ap) {
                if (!J(ap)) {
                  ap = this.getAsyncTracker().getSiteId();
                }
                if (!J(ao)) {
                  ao = this.getAsyncTracker().getTrackerUrl();
                }
                return new Q(ao, ap);
              },
              getAsyncTrackers: function () {
                return I;
              },
              addTracker: function (ao, aq) {
                var ap;
                if (!I.length) {
                  ap = ad(ao, aq);
                } else {
                  ap = I[0].addTracker(ao, aq);
                }
                return ap;
              },
              getAsyncTracker: function (ap, at) {
                var ar;
                if (I && I.length && I[0]) {
                  ar = I[0];
                } else {
                  return ad(ap, at);
                }
                if (!at && !ap) {
                  return ar;
                }
                if ((!J(at) || null === at) && ar) {
                  at = ar.getSiteId();
                }
                if ((!J(ap) || null === ap) && ar) {
                  ap = ar.getTrackerUrl();
                }
                var aq,
                  ao = 0;
                for (ao; ao < I.length; ao++) {
                  aq = I[ao];
                  if (aq && String(aq.getSiteId()) === String(at) && aq.getTrackerUrl() === ap) {
                    return aq;
                  }
                }
              },
              retryMissedPluginCalls: function () {
                var ap = ah;
                ah = [];
                var ao = 0;
                for (ao; ao < ap.length; ao++) {
                  af(ap[ao]);
                }
              },
            };
            if (typeof define === 'function' && define.amd) {
              define('piwik', [], function () {
                return e;
              });
              define('matomo', [], function () {
                return e;
              });
            }
            return e;
          }.apply(this, arguments);
        } finally {
          if ($___old_d5388efbdc49b520)
            ({}.constructor.defineProperty(window, 'performance', $___old_d5388efbdc49b520));
        }
      })();
    }
    (function () {
      var a = 'original';
      var n = false;
      var i = true;
      var h = 'PiwikAbTesting';
      function m () {
        if (n && 'undefined' !== typeof console && console && console.debug) {
          console.debug.apply(console, arguments);
        }
      }
      function b (o) {
        m(o);
        if (typeof k !== 'undefined' && k && k.THROW_ERRORS) {
          throw new Error(o);
        }
      }
      var j = {
        isItpBrowser: function () {
          const $___old_8ce06ce0d7eed470 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'vendor'
          );
          try {
            if ($___old_8ce06ce0d7eed470)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'vendor',
                $___stub_aa3322bf228cccca.vendor
              ));
            return function () {
              return (
                navigator.vendor &&
                navigator.vendor.indexOf('Apple') > -1 &&
                navigator.userAgent &&
                navigator.userAgent.indexOf('CriOS') === -1 &&
                navigator.userAgent.indexOf('FxiOS') === -1
              );
            }.apply(this, arguments);
          } finally {
            if ($___old_8ce06ce0d7eed470)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'vendor',
                $___old_8ce06ce0d7eed470
              ));
          }
        },
        getRandomNumber: function (p, o) {
          return parseInt(Math.round(Math.random() * (o - p) + p, 10));
        },
        hasLocalStorage: function () {
          if (typeof localStorage === 'undefined') {
            return false;
          }
          var p = new Date();
          var o;
          try {
            localStorage.setItem(p, p);
            o = localStorage.getItem(p) == p;
            localStorage.removeItem(p);
            return (
              o && localStorage && typeof JSON === 'object' && typeof JSON.parse === 'function'
            );
          } catch (q) {
            return false;
          }
        },
        decodeSafe: function (p) {
          try {
            return window.decodeURIComponent(p);
          } catch (o) {
            return window.unescape(p);
          }
        },
        getQueryParameter: function (o, s) {
          o = ('' + o).toLowerCase();
          s = ('' + s).toLowerCase();
          var r = new RegExp('[?&]' + s + '(=([^&#]*)|&|#|$)', 'i');
          var q = r.exec(o);
          if (!q) {
            return null;
          }
          if (!q[2]) {
            return '';
          }
          var p = q[2].replace(/\+/g, ' ');
          return this.decodeSafe(p);
        },
        removeQueryAndHashFromUrl: function (p) {
          var o = p.indexOf('#');
          if (o !== -1) {
            p = p.substr(0, o);
          }
          var q = p.indexOf('?');
          if (q !== -1) {
            p = p.substr(0, q);
          }
          return p;
        },
        removeProtocol: function (p) {
          var o = ('' + p).indexOf('://');
          if (o !== -1 && o < 9) {
            return p.substr(o);
          }
          return p;
        },
        removeWwwSubdomain: function (o) {
          return ('' + o).replace('://www.', '://');
        },
        getVariationTest: function (o) {
          if (o && o.search) {
            var p = j.getQueryParameter(o.search, 'pk_ab_test');
            if (p) {
              m('requested variation test ' + p);
              return String(p).split(',');
            }
          }
          return [];
        },
      };
      var d = {
        local: function () {
          var p = localStorage.getItem(h) || '{}';
          if (p && p !== '{}') {
            localStorage.setItem(h, p);
          }
          var o = JSON.parse(p) || {};
          this.set = function (s, q, r) {
            q = s + ':' + q;
            o[q] = r;
            localStorage.setItem(h, JSON.stringify(o));
          };
          this.get = function (r, q) {
            q = r + ':' + q;
            if (o && q in o) {
              return o[q];
            }
          };
          this.clearAll = function () {
            o = {};
            localStorage.setItem(h, JSON.stringify({}));
          };
        },
        cookies: function () {
          this.set = function (s, q, r) {
            q = h + ':' + s + ':' + q;
            var t = 365;
            var p = new Date();
            p.setTime(p.getTime() + t * 24 * 60 * 60 * 1000);
            var o = '; expires=' + p.toGMTString();
            document.cookie =
              q + '=' + encodeURIComponent(r) + '; expires=' + o + '; path=/;SameSite=Lax';
          };
          this.get = function (q, p) {
            p = h + ':' + q + ':' + p;
            var r = p + '=';
            var t = document.cookie.split(';');
            for (var o = 0; o < t.length; o++) {
              var s = t[o];
              s = ('' + s).replace(/^\s+/, '');
              if (s.indexOf(r) == 0) {
                return decodeURIComponent(s.substring(r.length, s.length));
              }
            }
          };
          this.clearAll = function () {};
        },
      };
      var e = {
        location: window.location,
        matchesTarget: function (o) {
          if (!o || !o.type || !o.attribute) {
            return true;
          }
          var p = e._getValueForAttribute(o);
          return e._matchesAttribute(o, p);
        },
        matchesTargets: function (s, q) {
          if (q && q.length) {
            var o;
            for (var p = 0; p < q.length; p++) {
              o = q[p];
              if (this.matchesTarget(o)) {
                return false;
              }
            }
          }
          if (s && s.length) {
            var r;
            for (var p = 0; p < s.length; p++) {
              r = s[p];
              if (this.matchesTarget(r)) {
                return true;
              }
            }
            return false;
          }
          return true;
        },
        matchesDate: function (q, p, r) {
          var s = q.getTime() + q.getTimezoneOffset() * 60000;
          try {
            var u = new Date(p);
          } catch (t) {
            if (p) {
              b('Invalid startDateTime given');
            }
          }
          try {
            var o = new Date(r);
          } catch (t) {
            if (r) {
              b('Invalid startDateTime given');
            }
          }
          if (p && isNaN && isNaN(u.getTime())) {
            b('Invalid startDateTime given');
          }
          if (r && isNaN && isNaN(o.getTime())) {
            b('Invalid endDateTime given');
          }
          if (p && s < u.getTime() + u.getTimezoneOffset() * 60000) {
            return false;
          }
          if (r && s > o.getTime() + o.getTimezoneOffset() * 60000) {
            return false;
          }
          return true;
        },
        _getValueForAttribute: function (p) {
          var o = ('' + p.attribute).toLowerCase();
          switch (o) {
            case k.TARGET_ATTRIBUTE_URL:
              return j.decodeSafe(this.location.href);
            case k.TARGET_ATTRIBUTE_PATH:
              return j.decodeSafe(this.location.pathname);
            case k.TARGET_ATTRIBUTE_URLPARAM:
              return j.getQueryParameter(this.location.search, p.value);
          }
        },
        _matchesAttribute: function (q, o) {
          var p = ('' + q.attribute).toLowerCase();
          switch (p) {
            case k.TARGET_ATTRIBUTE_URL:
            case k.TARGET_ATTRIBUTE_PATH:
              return this._matchesTargetValue(o, q.type, q.inverted, q.value);
            case k.TARGET_ATTRIBUTE_URLPARAM:
              return this._matchesTargetValue(o, q.type, q.inverted, q.value2);
            default:
              b('Invalid target attribute');
          }
          return false;
        },
        _matchesTargetValue: function (q, p, s, o) {
          var r = false;
          var s = !!s && s !== '0';
          if ('string' === typeof q) {
            q = q.toLowerCase();
          }
          if ('string' === typeof o && p !== 'regexp') {
            o = o.toLowerCase();
          }
          switch (p) {
            case k.TARGET_TYPE_ANY:
              r = true;
              break;
            case k.TARGET_TYPE_EXISTS:
              if (typeof q !== 'undefined' && q !== null) {
                r = true;
              }
              break;
            case k.TARGET_TYPE_EQUALS_SIMPLE:
              if (q && q === String(o)) {
                r = true;
              }
              q = j.removeQueryAndHashFromUrl(q);
              q = j.removeProtocol(q);
              o = j.removeProtocol(o);
              q = j.removeWwwSubdomain(q);
              o = j.removeWwwSubdomain(o);
              if (
                q &&
                (q === String(o) ||
                  q + '/' === String(o) ||
                  q === '/' + o ||
                  q === o + '/' ||
                  q === '/' + o + '/')
              ) {
                r = true;
              }
              break;
            case k.TARGET_TYPE_EQUALS_EXACTLY:
              if (q && q === String(o)) {
                r = true;
              }
              if (
                q &&
                q.indexOf('://') > 0 &&
                q.charAt(q.length - 1) === '/' &&
                3 === q.split('/').length - 1 &&
                q === o + '/'
              ) {
                r = true;
              }
              if (
                o &&
                o.indexOf('://') > 0 &&
                o.charAt(o.length - 1) === '/' &&
                3 === o.split('/').length - 1 &&
                o === q + '/'
              ) {
                r = true;
              }
              break;
            case k.TARGET_TYPE_CONTAINS:
              if (q && q.indexOf(String(o)) !== -1) {
                r = true;
              }
              break;
            case k.TARGET_TYPE_STARTS_WITH:
              if (q && q.indexOf(String(o)) === 0) {
                r = true;
              }
              break;
            case k.TARGET_TYPE_REGEXP:
              if (new RegExp(o).test(q)) {
                r = true;
              }
              break;
            default:
              b('Invalid target type given');
          }
          if (s) {
            return !r;
          }
          return r;
        },
      };
      var k = function (p) {
        this.options = p ? p : {};
        m('creating experiment with options', p);
        if (!this.options.name) {
          b(
            'Missing experiment name in options. Use eg: new PiwikAbTesting.Experiment({name: "MyName"})'
          );
        }
        if (!this.options.variations) {
          b(
            'Missing "variations" option. Use eg: new PiwikAbTesting.Experiment({variations: [{...}, {...}]})'
          );
        }
        if (typeof this.options.variations !== 'object' || !this.options.variations.length) {
          b('"variations" has to be an array');
        }
        var q;
        for (q = 0; q < this.options.variations.length; q++) {
          if (typeof this.options.variations[q] !== 'object') {
            b('Each variation has to be an object');
          }
          if (!this.options.variations[q].name) {
            b('Missing variation name');
          }
          if (typeof this.options.variations[q].activate !== 'function') {
            b('A variation does not implement the "activate" method' + JSON.stringify(p));
          }
        }
        if (this.options.trigger && typeof this.options.trigger !== 'function') {
          b('The "trigger" option is not a function');
        }
        if (this.options.piwikTracker) {
          if (typeof this.options.piwikTracker !== 'object') {
            b('The Matomo tracker must be an instance of Piwik');
          }
          if (!this.options.piwikTracker.trackEvent) {
            b(
              'The Matomo instance does not implement the trackEvent method. Maybe a wrong Matomo instance is based as option?'
            );
          }
          if (!this.options.piwikTracker.trackGoal) {
            b(
              'The Matomo instance does not implement the trackGoal method. Maybe a wrong Matomo instance is based as option?'
            );
          }
        }
        if (
          (this.options.percentage && this.options.percentage < 0) ||
          this.options.percentage > 100
        ) {
          b('percentage has to be between 0 and 100');
        }
        this.name = null;
        this.variations = null;
        this.includedTargets = null;
        this.excludedTargets = null;
        this.startDateTime = null;
        this.endDateTime = null;
        this.percentage = 100;
        this.piwikTracker = null;
        this.trigger = function () {
          return true;
        };
        this._cacheForcedVariationName = null;
        if (j.hasLocalStorage()) {
          m('using local storage');
          this.storage = new d.local();
        } else {
          m('using cookies storage');
          this.storage = new d.cookies();
        }
        var o;
        for (o in this.options) {
          if (Object.prototype.hasOwnProperty.call(this.options, o)) {
            this[o] = this.options[o];
          }
        }
        this._track = function (u, t) {
          if (this.piwikTracker) {
            this.piwikTracker[u].apply(this.piwikTracker, t);
          } else {
            if (typeof _paq === 'undefined') {
              _paq = [];
            }
            t.unshift(u);
            _paq.push(t);
          }
          m('sent tracking request', u, t);
        };
        this.trackUsedVariation = function (t) {
          this._track('trackEvent', ['abtesting', this.name, t]);
        };
        this.trackGoal = function (t) {
          if (t) {
            this._track('trackGoal', [t]);
          }
        };
        this._getVariationByName = function (u) {
          u = ('' + u).toLowerCase();
          for (var t = 0; t < this.variations.length; t++) {
            if (('' + this.variations[t].name).toLowerCase() === u) {
              return this.variations[t];
            }
          }
        };
        this._makeEvent = function (u) {
          var t = this;
          var v = function (w) {
            w();
          };
          if (
            'undefined' !== typeof Piwik &&
            'undefined' !== typeof Piwik.DOM &&
            Piwik.DOM.onReady
          ) {
            v = Piwik.DOM.onReady;
          }
          return {
            type: 'activate',
            experiment: this,
            onReady: v,
            redirect: function (x) {
              var w =
                'pk_abe=' + encodeURIComponent(t.name) + '&pk_abv=' + encodeURIComponent(u.name);
              if (x && x.indexOf('?') !== -1) {
                x += '&' + w;
              } else {
                x += '?' + w;
              }
              var z = Piwik.getAsyncTrackers();
              for (var y = 0; y < z.length; y++) {
                z[y].trackPageView = function () {};
                z[y].trackEvent = function () {};
                z[y].trackGoal = function () {};
              }
              if (window.location.href === x) {
                return;
              }
              window.location.replace(x);
            },
          };
        };
        this.forceVariation = function (w) {
          this._cacheForcedVariationName = w;
          m(this.name, 'forcing variation', w);
          var u = this._getVariationByName(w);
          var t = this.storage.set('variation', this.name, w);
          if (u && u.activate) {
            var v = this._makeEvent(u);
            u.activate.apply(u, [v]);
          }
          this.trackUsedVariation(w);
          return t;
        };
        this.getActivatedVariationName = function () {
          var t;
          if (this._cacheForcedVariationName) {
            t = this._cacheForcedVariationName;
          } else {
            t = this.storage.get('variation', this.name);
          }
          if (this._getVariationByName(t)) {
            return t;
          }
        };
        this._doVariationsIncludeOriginal = function () {
          for (var u = 0; u < this.variations.length; u++) {
            var t = this.variations[u];
            if (t && t.name && t.name === a) {
              return true;
            }
          }
          return false;
        };
        this._getVariationDefaultPercentage = function () {
          var u = 100;
          var x = this.variations.length;
          for (var w = 0; w < this.variations.length; w++) {
            var v = this.variations[w];
            if (v && (v.percentage || v.percentage === 0 || v.percentage === '0')) {
              u = u - parseInt(v.percentage, 10);
              x--;
            }
          }
          var t = Math.round(u / x);
          if (t > 100) {
            t = 100;
          }
          if (t < 0) {
            t = 0;
          }
          return t;
        };
        this.getRandomVariationName = function () {
          var z = this._getVariationDefaultPercentage();
          var w = [];
          for (var x = 0; x < this.variations.length; x++) {
            var t = z;
            if (
              this.variations[x].percentage ||
              this.variations[x].percentage === 0 ||
              this.variations[x].percentage === '0'
            ) {
              t = this.variations[x].percentage;
            }
            for (var v = 0; v < t; v++) {
              w.push(x);
            }
          }
          var u = j.getRandomNumber(0, w.length - 1);
          var y = w[u];
          return this.variations[y].name;
        };
        this._isInTestGroup = function () {
          var t = this.storage.get('isInTestGroup', this.name);
          if (typeof t !== 'undefined' && t !== null) {
            return t === '1' ? true : false;
          }
          t = j.getRandomNumber(1, 100) <= this.percentage;
          this.storage.set('isInTestGroup', this.name, t ? '1' : '0');
          return t;
        };
        this.selectRandomVariation = function () {
          m(this.name, 'select random variation');
          var t = this.getRandomVariationName();
          this.forceVariation(t);
          return t;
        };
        this.shouldTrigger = function () {
          if (!i) {
            m(this.name, 'wont run because feature is disabled');
            return false;
          }
          if (!e.matchesDate(new Date(), this.startDateTime, this.endDateTime)) {
            m(this.name, 'wont run, scheduled date does not match');
            return false;
          }
          if (!e.matchesTargets(this.includedTargets, this.excludedTargets)) {
            m(this.name, 'wont run, targets do not match');
            return false;
          }
          if (!this.trigger()) {
            m(this.name, 'wont run, disabled by trigger method');
            return false;
          }
          if (!this._isInTestGroup()) {
            m(this.name, 'wont run, not in test group');
            return false;
          }
          return true;
        };
        if (!this._doVariationsIncludeOriginal()) {
          this.variations.push({ name: a, activate: function () {} });
        }
        var r = j.getVariationTest(window.location || null);
        if (r && r.length) {
          for (var q = 0; q < r.length; q++) {
            if (this._getVariationByName(r[q])) {
              m('going to test variation and disable tracking ' + r[q]);
              this.trackUsedVariation = function () {};
              this.forceVariation(r[q]);
              return;
            }
          }
        }
        if (!this.shouldTrigger()) {
          m(this.name, 'experiment should not trigger');
          return;
        }
        m(this.name, 'should trigger');
        var s = this.getActivatedVariationName();
        if (s) {
          this.forceVariation(s);
        } else {
          m(this.name, 'no existing variation found');
          this.selectRandomVariation();
        }
      };
      k.NAME_ORIGINAL_VARIATION = a;
      k.TARGET_ATTRIBUTE_URL = 'url';
      k.TARGET_ATTRIBUTE_PATH = 'path';
      k.TARGET_ATTRIBUTE_URLPARAM = 'urlparam';
      k.TARGET_TYPE_ANY = 'any';
      k.TARGET_TYPE_EXISTS = 'exists';
      k.TARGET_TYPE_EQUALS_SIMPLE = 'equals_simple';
      k.TARGET_TYPE_EQUALS_EXACTLY = 'equals_exactly';
      k.TARGET_TYPE_CONTAINS = 'contains';
      k.TARGET_TYPE_STARTS_WITH = 'starts_with';
      k.TARGET_TYPE_REGEXP = 'regexp';
      k.THROW_ERRORS = true;
      function f () {
        if (typeof window === 'object' && 'function' === typeof window.piwikAbTestingAsyncInit) {
          window.piwikAbTestingAsyncInit();
        }
      }
      var c = false;
      function g () {
        function o () {
          if (c) {
            return;
          }
          if ('object' !== typeof Piwik) {
            return;
          }
          var r = Piwik.getAsyncTrackers();
          if (!r || !r.length) {
            return;
          }
          if (window.location && j.getQueryParameter(window.location.search, 'pk_abe')) {
            c = true;
            var q = j.getQueryParameter(window.location.search, 'pk_abe');
            var p = j.getQueryParameter(window.location.search, 'pk_abv');
            Piwik.AbTesting.enter({ experiment: q, variation: p });
            m('entered experiment from url parameters');
          }
        }
        Piwik.DOM.onReady(o);
        Piwik.DOM.onLoad(o);
      }
      function l () {
        if (
          'object' === typeof window &&
          'object' === typeof window.Piwik &&
          'object' === typeof window.Piwik.AbTesting
        ) {
          m('wont initialize, AbTesting already loaded');
          return;
        }
        if ('object' === typeof window && 'object' !== typeof window.Piwik) {
          m('wont initialize, Matomo is not yet loaded');
          return;
        }
        Piwik.AbTesting = {
          utils: j,
          target: e,
          storage: d,
          Experiment: k,
          disableWhenItp: function () {
            if (j.isItpBrowser()) {
              this.disable();
              m('disabled because itp browser');
            }
          },
          isEnabled: function () {
            return i;
          },
          disable: function () {
            i = false;
          },
          enable: function () {
            i = true;
          },
          enter: function (o) {
            if (o && o.experiment) {
              _paq = _paq || [];
              _paq.push(['trackEvent', 'abtesting', o.experiment, o.variation || a]);
              m('entering user into an experiment', o);
            } else {
              m('not entering user into an experiment, missing parameter experiment');
            }
          },
          create: function (o) {
            return new k(o);
          },
          enableDebugMode: function () {
            n = true;
          },
        };
        if (window.Piwik.initialized) {
          Piwik.retryMissedPluginCalls();
          f();
          g();
        } else {
          Piwik.on('PiwikInitialized', function () {
            f();
            g();
          });
        }
        if (j.isItpBrowser() && j.hasLocalStorage()) {
          new d.local();
        }
      }
      if (typeof piwikExposeAbTestingTarget !== 'undefined' && piwikExposeAbTestingTarget) {
        window.piwikAbTestingTarget = e;
      }
      if ('object' === typeof window.Piwik) {
        m('matomo was already loaded, initializing abTesting now');
        l();
      } else {
        if ('object' !== typeof window.piwikPluginAsyncInit) {
          window.piwikPluginAsyncInit = [];
        }
        window.piwikPluginAsyncInit.push(l);
        m('matomo not loaded yet, waiting for it to be loaded');
      }
    })();
    (function () {
      function b () {
        if ('object' !== typeof _paq) {
          return false;
        }
        var c = typeof _paq.length;
        if ('undefined' === c) {
          return false;
        }
        return !!_paq.length;
      }
      if (
        window &&
        'object' === typeof window.piwikPluginAsyncInit &&
        window.piwikPluginAsyncInit.length
      ) {
        var a = 0;
        for (a; a < window.piwikPluginAsyncInit.length; a++) {
          if (typeof window.piwikPluginAsyncInit[a] === 'function') {
            window.piwikPluginAsyncInit[a]();
          }
        }
      }
      if (window && window.piwikAsyncInit) {
        window.piwikAsyncInit();
      }
      if (!window.Piwik.getAsyncTrackers().length) {
        if (b()) {
          window.Piwik.addTracker();
        } else {
          _paq = {
            push: function (c) {
              var d = typeof console;
              if (d !== 'undefined' && console && console.error) {
                console.error(
                  '_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.',
                  c
                );
              }
            },
          };
        }
      }
      window.Piwik.trigger('PiwikInitialized', []);
      window.Piwik.initialized = true;
    })();
    (function () {
      var a = typeof AnalyticsTracker;
      if (a === 'undefined') {
        AnalyticsTracker = window.Piwik;
      }
    })();
    if (typeof piwik_log !== 'function') {
      piwik_log = function (b, f, d, g) {
        function a (h) {
          try {
            if (window['piwik_' + h]) {
              return window['piwik_' + h];
            }
          } catch (i) {}
          return;
        }
        var c,
          e = window.Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a('tracker_pause');
        if (c) {
          e.setLinkTrackingTimer(c);
        }
        c = a('download_extensions');
        if (c) {
          e.setDownloadExtensions(c);
        }
        c = a('hosts_alias');
        if (c) {
          e.setDomains(c);
        }
        c = a('ignore_classes');
        if (c) {
          e.setIgnoreClasses(c);
        }
        e.trackPageView();
        if (a('install_tracker')) {
          piwik_track = function (i, k, j, h) {
            e.setSiteId(k);
            e.setTrackerUrl(j);
            e.trackLink(i, h);
          };
          e.enableLinkTracking();
        }
      };
    }
  })();
}
