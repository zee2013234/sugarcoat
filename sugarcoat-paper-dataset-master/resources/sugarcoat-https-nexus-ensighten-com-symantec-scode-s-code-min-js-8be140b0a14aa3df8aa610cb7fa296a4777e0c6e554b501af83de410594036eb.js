var s_getLoadTime,
  removeTxt,
  internalSearchLinkClick_Natural,
  s_doPlugins,
  AppMeasurement_Module_Integrate,
  AppMeasurement_Module_Media,
  AppMeasurement_Module_ActivityMap,
  AppMeasurement,
  s_gi,
  s_pgicq,
  s;
{
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
  (function () {
    function $___var_5f6625ce67cfdbc2 () {
      const $___old_6f503b589cf54ba7 = {}.constructor.getOwnPropertyDescriptor(
        window,
        'performance'
      );
      try {
        if ($___old_6f503b589cf54ba7)
          ({}.constructor.defineProperty(
            window,
            'performance',
            $___stub_c0f1d0ee9b6f2da6.performance
          ));
        return function () {
          if (!window.s_loadT) {
            var a = new Date().getTime(),
              b = window.performance ? performance.timing : 0,
              c = b ? b.requestStart : window.inHeadTS || 0;
            s_loadT = c ? Math.round((a - c) / 100) : '';
          }
          return s_loadT;
        }.apply(this, arguments);
      } finally {
        if ($___old_6f503b589cf54ba7)
          ({}.constructor.defineProperty(window, 'performance', $___old_6f503b589cf54ba7));
      }
    }
    s_getLoadTime = $___var_5f6625ce67cfdbc2;
    ({}.constructor.defineProperty(s_getLoadTime, 'name', {
      configurable: true,
      enumerable: false,
      value: 's_getLoadTime',
      writable: false,
    }));
    function $___var_060de0b133347c56 (a, b) {
      return 'undefined' == typeof b && (b = ''), (results = b.replace(a, ''));
    }
    removeTxt = $___var_060de0b133347c56;
    ({}.constructor.defineProperty(removeTxt, 'name', {
      configurable: true,
      enumerable: false,
      value: 'removeTxt',
      writable: false,
    }));
    function $___var_3fb92456083172e9 (a, b) {
      (s.linkTrackVars = 'events,prop40'),
        (s.events = s.linkTrackEvents = 'event32'),
        (s.prop40 = a),
        s.tl(!0, 'o', 'Internal Search Click - Natural'),
        setTimeout(function () {
          window.location.href = b;
        }, 250);
    }
    internalSearchLinkClick_Natural = $___var_3fb92456083172e9;
    ({}.constructor.defineProperty(internalSearchLinkClick_Natural, 'name', {
      configurable: true,
      enumerable: false,
      value: 'internalSearchLinkClick_Natural',
      writable: false,
    }));
    function $___var_c6fad32692eeacd7 (a) {
      var b = a.linkURL;
      if (void 0 !== typeof a.linkType && 'd' == a.linkType && 'string' == typeof b) {
        a.events = 'event1';
        var c = b.split('/'),
          d = c[c.length - 1],
          e = d.substr(d.lastIndexOf('.') + 1).toLowerCase();
        (a.eVar1 = 'D=c33'),
          (a.prop33 = b),
          (a.prop46 = e),
          (a.prop47 = 'download'),
          (a.prop48 = d),
          (a.eVar49 = 'D=c48'),
          (a.linkTrackVars = 'events,eVar1,prop33,prop46,prop47,prop48,eVar49'),
          (a.linkTrackEvents = 'event1');
      } else
        void 0 !== typeof a.linkType &&
          'e' == a.linkType &&
          ((a.linkTrackVars = 'None'), (a.linkTrackEvents = 'None'));
      (a.prop21 = a.getQueryParam('inid')),
        (a.eVar21 = 'D=c21'),
        (a.prop35 = 'D=pageName'),
        a.prop21 && (a.prop35 = '> ' + a.prop21 + ' ' + a.pageName),
        (a.prop22 = a.getQueryParam('om_em_cid')),
        a.prop22 || (a.prop22 = a.getQueryParam('om_sem_cid')),
        a.prop22 || (a.prop22 = a.getQueryParam('om_ext_cid'));
      var f = a.getQueryParam('cjid');
      f && (a.prop22 = (location.hostname.indexOf('buy.norton.com') > -1 ? '' : 'hho_aff_') + f);
      var g = a.getQueryParam('om_aff_cid');
      if (
        (g &&
          (a.prop22 = (location.hostname.indexOf('buy.norton.com') > -1 ? '' : 'hho_aff_') + g),
        (a.prop22 = a.getValOnce(a.prop22, 's_prop22', 30)),
        (a.eVar35 = a.prop22),
        (a.campaign = a.prop22),
        a.campaign && (a.prop35 = '> ' + a.campaign + ' ' + a.pageName),
        'New' == a.getNewRepeat(240))
      ) {
        var h = 'event69';
        a.getValOnce(h, 'event69', 240) && a.setCustomEvent(h);
      }
      var i = window.s_tnt ? window.s_tnt : a.trackTNT();
      (i = '::,' == i ? '' : i),
        i && (a.eVar39 = a.tnt = i),
        'undefined' != typeof a.eVar41 &&
          -1 == a.eVar41.indexOf('=c41') &&
          (a.eVar72 = a.channelParticipationStacker(a.eVar41, 's_eVar72', 10, ',')),
        a.prop35 && (a.eVar18 = 'D=pageName');
      var j = a.getQueryParam('pifcamid');
      j && (a.eVar38 = a.getValOnce(j, 's_eVar38')),
        (a.prop60 = a.getPreviousValue(a.pageName, 's_gpv'));
      try {
        var k = s_getLoadTime();
        k && k > 1000 && (k = 1000), k && k > 0 && a.setCustomEvent('event79=' + k);
      } catch (l) {
        window.console && console.warn('Analytics Exception: Page Load Time: ' + l);
      }
      a.setVisitorIdVariables(a),
        (a.eVar96 = [location.protocol, '//', location.host, location.pathname].join('')),
        window.autodowngrade && (a.eVar107 = window.autodowngrade);
    }
    s_doPlugins = $___var_c6fad32692eeacd7;
    ({}.constructor.defineProperty(s_doPlugins, 'name', {
      configurable: true,
      enumerable: false,
      value: 's_doPlugins',
      writable: false,
    }));
    function $___var_d97b016c43f2df04 (a) {
      var b = this;
      b.s = a;
      var c = window;
      c.s_c_in || ((c.s_c_il = []), (c.s_c_in = 0)),
        (b._il = c.s_c_il),
        (b._in = c.s_c_in),
        (b._il[b._in] = b),
        c.s_c_in++,
        (b._c = 's_m'),
        (b.list = []),
        (b.add = function (d, e) {
          var f;
          e || (e = 's_Integrate_' + d),
            c[e] || (c[e] = {}),
            (f = b[d] = c[e]),
            (f.a = d),
            (f.e = b),
            (f._c = 0),
            (f._d = 0),
            void 0 == f.disable && (f.disable = 0),
            (f.get = function (a, d) {
              var e,
                g = document,
                h = g.getElementsByTagName('HEAD');
              if (
                !f.disable &&
                (d || (v = 's_' + b._in + '_Integrate_' + f.a + '_get_' + f._c),
                f._c++,
                (f.VAR = v),
                (f.CALLBACK = 's_c_il[' + b._in + '].' + f.a + '.callback'),
                f.delay(),
                (h = h && 0 < h.length ? h[0] : g.body))
              )
                try {
                  (e = g.createElement('SCRIPT')),
                    (e.type = 'text/javascript'),
                    e.setAttribute('async', 'async'),
                    (e.src = b.c(f, a)),
                    0 > a.indexOf('[CALLBACK]') &&
                      (e.onload = e.onreadystatechange = function () {
                        f.callback(c[v]);
                      }),
                    h.firstChild ? h.insertBefore(e, h.firstChild) : h.appendChild(e);
                } catch (i) {}
            }),
            (f.callback = function (a) {
              var b;
              if (a) for (b in a) Object.prototype[b] || (f[b] = a[b]);
              f.ready();
            }),
            (f.beacon = function (a) {
              var d = 's_i_' + b._in + '_Integrate_' + f.a + '_' + f._c;
              f.disable || (f._c++, (d = c[d] = new Image()), (d.src = b.c(f, a)));
            }),
            (f.script = function (a) {
              f.get(a, 1);
            }),
            (f.delay = function () {
              f._d++;
            }),
            (f.ready = function () {
              f._d--, f.disable || a.delayReady();
            }),
            b.list.push(d);
        }),
        (b._g = function (c) {
          var d,
            e = (c ? 'use' : 'set') + 'Vars';
          for (c = 0; c < b.list.length; c++)
            if ((d = b[b.list[c]]) && !d.disable && d[e])
              try {
                d[e](a, d);
              } catch (f) {}
        }),
        (b._t = function () {
          b._g(1);
        }),
        (b._d = function () {
          var a, c;
          for (a = 0; a < b.list.length; a++)
            if ((c = b[b.list[a]]) && !c.disable && 0 < c._d) return 1;
          return 0;
        }),
        (b.c = function (b, c) {
          var d, e, f, g;
          for (
            'http' != c.toLowerCase().substring(0, 4) && (c = 'http://' + c),
              a.ssl && (c = a.replace(c, 'http:', 'https:')),
              b.RAND = Math.floor(10000000000000 * Math.random()),
              d = 0;
            d >= 0;

          )
            (d = c.indexOf('[', d)),
              d >= 0 &&
                ((e = c.indexOf(']', d)),
                e > d &&
                  ((f = c.substring(d + 1, e)),
                  2 < f.length && 's.' == f.substring(0, 2)
                    ? (g = a[f.substring(2)]) || (g = '')
                    : ((g = '' + b[f]), g != b[f] && parseFloat(g) != b[f] && (f = 0)),
                  f && (c = c.substring(0, d) + encodeURIComponent(g) + c.substring(e + 1)),
                  (d = e)));
          return c;
        });
    }
    AppMeasurement_Module_Integrate = $___var_d97b016c43f2df04;
    ({}.constructor.defineProperty(AppMeasurement_Module_Integrate, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement_Module_Integrate',
      writable: false,
    }));
    function $___var_2bce06b3663b7a72 (a) {
      var b = this;
      (b.s = a),
        (a = window),
        a.s_c_in || ((a.s_c_il = []), (a.s_c_in = 0)),
        (b._il = a.s_c_il),
        (b._in = a.s_c_in),
        (b._il[b._in] = b),
        a.s_c_in++,
        (b._c = 's_m'),
        (b.list = []),
        (b.open = function (a, c, d, e) {
          var f,
            g = {},
            h = new Date(),
            i = '';
          if ((c || (c = -1), a && d)) {
            if ((b.list || (b.list = {}), b.list[a] && b.close(a), e && e.id && (i = e.id), i))
              for (f in b.list)
                !Object.prototype[f] && b.list[f] && b.list[f].R == i && b.close(b.list[f].name);
            (g.name = a),
              (g.length = c),
              (g.offset = 0),
              (g.e = 0),
              (g.playerName = b.playerName ? b.playerName : d),
              (g.R = i),
              (g.C = 0),
              (g.a = 0),
              (g.timestamp = Math.floor(h.getTime() / 1000)),
              (g.k = 0),
              (g.u = g.timestamp),
              (g.c = -1),
              (g.n = ''),
              (g.g = -1),
              (g.D = 0),
              (g.I = {}),
              (g.G = 0),
              (g.m = 0),
              (g.f = ''),
              (g.B = 0),
              (g.L = 0),
              (g.A = 0),
              (g.F = 0),
              (g.l = !1),
              (g.v = ''),
              (g.J = ''),
              (g.K = 0),
              (g.r = !1),
              (g.H = ''),
              (g.complete = 0),
              (g.Q = 0),
              (g.p = 0),
              (g.q = 0),
              (b.list[a] = g);
          }
        }),
        (b.openAd = function (a, c, d, e, f, g, h, i) {
          var j = {};
          b.open(a, c, d, i),
            (j = b.list[a]) && ((j.l = !0), (j.v = e), (j.J = f), (j.K = g), (j.H = h));
        }),
        (b.M = function (a) {
          var c = b.list[a];
          (b.list[a] = 0), c && c.monitor && clearTimeout(c.monitor.interval);
        }),
        (b.close = function (a) {
          b.i(a, 0, -1);
        }),
        (b.play = function (a, c, d, e) {
          var f = b.i(a, 1, c, d, e);
          f &&
            !f.monitor &&
            ((f.monitor = {}),
            (f.monitor.update = function () {
              1 == f.k && b.i(f.name, 3, -1),
                (f.monitor.interval = setTimeout(f.monitor.update, 1000));
            }),
            f.monitor.update());
        }),
        (b.click = function (a, c) {
          b.i(a, 7, c);
        }),
        (b.complete = function (a, c) {
          b.i(a, 5, c);
        }),
        (b.stop = function (a, c) {
          b.i(a, 2, c);
        }),
        (b.track = function (a) {
          b.i(a, 4, -1);
        }),
        (b.P = function (a, c) {
          var d,
            e,
            f = 'a.media.',
            g = a.linkTrackVars,
            h = a.linkTrackEvents,
            i = 'm_i',
            j = a.contextData;
          if (
            (c.l &&
              ((f += 'ad.'),
              c.v &&
                ((j['a.media.name'] = c.v), (j[f + 'pod'] = c.J), (j[f + 'podPosition'] = c.K)),
              c.G || (j[f + 'CPM'] = c.H)),
            c.r && ((j[f + 'clicked'] = !0), (c.r = !1)),
            (j['a.contentType'] = 'video' + (c.l ? 'Ad' : '')),
            (j['a.media.channel'] = b.channel),
            (j[f + 'name'] = c.name),
            (j[f + 'playerName'] = c.playerName),
            0 < c.length && (j[f + 'length'] = c.length),
            (j[f + 'timePlayed'] = Math.floor(c.a)),
            0 < Math.floor(c.a) && (j[f + 'timePlayed'] = Math.floor(c.a)),
            c.G ||
              ((j[f + 'view'] = !0),
              (i = 'm_s'),
              b.Heartbeat &&
                b.Heartbeat.enabled &&
                (i = c.l
                  ? b.__primetime
                    ? 'mspa_s'
                    : 'msa_s'
                  : b.__primetime
                  ? 'msp_s'
                  : 'ms_s'),
              (c.G = 1)),
            c.f &&
              ((j[f + 'segmentNum'] = c.m),
              (j[f + 'segment'] = c.f),
              0 < c.B && (j[f + 'segmentLength'] = c.B),
              c.A && 0 < c.a && (j[f + 'segmentView'] = !0)),
            !c.Q && c.complete && ((j[f + 'complete'] = !0), (c.S = 1)),
            0 < c.p && (j[f + 'milestone'] = c.p),
            0 < c.q && (j[f + 'offsetMilestone'] = c.q),
            g)
          )
            for (e in j) Object.prototype[e] || (g += ',contextData.' + e);
          (d = j['a.contentType']), (a.pe = i), (a.pev3 = d);
          var k, l;
          if (b.contextDataMapping)
            for (e in (a.events2 || (a.events2 = ''), g && (g += ',events'), b.contextDataMapping))
              if (!Object.prototype[e]) {
                if (
                  ((i =
                    e.length > f.length && e.substring(0, f.length) == f
                      ? e.substring(f.length)
                      : ''),
                  (d = b.contextDataMapping[e]),
                  'string' == typeof d)
                )
                  for (k = d.split(','), l = 0; l < k.length; l++)
                    (d = k[l]),
                      'a.contentType' == e
                        ? (g && (g += ',' + d), (a[d] = j[e]))
                        : 'view' == i ||
                          'segmentView' == i ||
                          'clicked' == i ||
                          'complete' == i ||
                          'timePlayed' == i ||
                          'CPM' == i
                        ? (h && (h += ',' + d),
                          'timePlayed' == i || 'CPM' == i
                            ? j[e] && (a.events2 += (a.events2 ? ',' : '') + d + '=' + j[e])
                            : j[e] && (a.events2 += (a.events2 ? ',' : '') + d))
                        : 'segment' == i && j[e + 'Num']
                        ? (g && (g += ',' + d), (a[d] = j[e + 'Num'] + ':' + j[e]))
                        : (g && (g += ',' + d), (a[d] = j[e]));
                else
                  ('milestones' == i || 'offsetMilestones' == i) &&
                    ((e = e.substring(0, e.length - 1)),
                    j[e] &&
                      b.contextDataMapping[e + 's'][j[e]] &&
                      (h && (h += ',' + b.contextDataMapping[e + 's'][j[e]]),
                      (a.events2 +=
                        (a.events2 ? ',' : '') + b.contextDataMapping[e + 's'][j[e]])));
                j[e] && (j[e] = 0), 'segment' == i && j[e + 'Num'] && (j[e + 'Num'] = 0);
              }
          (a.linkTrackVars = g), (a.linkTrackEvents = h);
        }),
        (b.i = function (a, c, d, e, f) {
          var g,
            h,
            i,
            j,
            k,
            l = {},
            m = new Date().getTime() / 1000,
            n = b.trackVars,
            o = b.trackEvents,
            p = b.trackSeconds,
            q = b.trackMilestones,
            r = b.trackOffsetMilestones,
            s = b.segmentByMilestones,
            t = b.segmentByOffsetMilestones,
            u = 1,
            v = {};
          if (
            (b.channel || (b.channel = b.s.w.location.hostname),
            (l = a && b.list && b.list[a] ? b.list[a] : 0) &&
              (l.l &&
                ((p = b.adTrackSeconds),
                (q = b.adTrackMilestones),
                (r = b.adTrackOffsetMilestones),
                (s = b.adSegmentByMilestones),
                (t = b.adSegmentByOffsetMilestones)),
              0 > d && (d = 1 == l.k && 0 < l.u ? m - l.u + l.c : l.c),
              0 < l.length && (d = d < l.length ? d : l.length),
              0 > d && (d = 0),
              (l.offset = d),
              0 < l.length && ((l.e = (l.offset / l.length) * 100), (l.e = 100 < l.e ? 100 : l.e)),
              0 > l.c && (l.c = d),
              (k = l.D),
              (v.name = a),
              (v.ad = l.l),
              (v.length = l.length),
              (v.openTime = new Date()),
              v.openTime.setTime(1000 * l.timestamp),
              (v.offset = l.offset),
              (v.percent = l.e),
              (v.playerName = l.playerName),
              (v.mediaEvent =
                0 > l.g
                  ? 'OPEN'
                  : 1 == c
                  ? 'PLAY'
                  : 2 == c
                  ? 'STOP'
                  : 3 == c
                  ? 'MONITOR'
                  : 4 == c
                  ? 'TRACK'
                  : 5 == c
                  ? 'COMPLETE'
                  : 7 == c
                  ? 'CLICK'
                  : 'CLOSE'),
              c > 2 || (c != l.k && (2 != c || 1 == l.k))))
          ) {
            if ((f || ((e = l.m), (f = l.f)), c)) {
              if (
                (1 == c && (l.c = d),
                (3 >= c || c >= 5) && 0 <= l.g && ((u = !1), (n = o = 'None'), l.g != d))
              ) {
                if (
                  ((h = l.g),
                  h > d && ((h = l.c), h > d && (h = d)),
                  (i = q ? q.split(',') : 0),
                  0 < l.length && i && d >= h)
                )
                  for (j = 0; j < i.length; j++)
                    (g = i[j] ? parseFloat('' + i[j]) : 0) &&
                      (h / l.length) * 100 < g &&
                      l.e >= g &&
                      ((u = !0),
                      (j = i.length),
                      (v.mediaEvent = 'MILESTONE'),
                      (l.p = v.milestone = g));
                if ((i = r ? r.split(',') : 0) && d >= h)
                  for (j = 0; j < i.length; j++)
                    (g = i[j] ? parseFloat('' + i[j]) : 0) &&
                      g > h &&
                      d >= g &&
                      ((u = !0),
                      (j = i.length),
                      (v.mediaEvent = 'OFFSET_MILESTONE'),
                      (l.q = v.offsetMilestone = g));
              }
              if (l.L || !f) {
                if (s && q && 0 < l.length) {
                  if ((i = q.split(',')))
                    for (i.push('100'), j = h = 0; j < i.length; j++)
                      (g = i[j] ? parseFloat('' + i[j]) : 0) &&
                        (l.e < g && ((e = j + 1), (f = 'M:' + h + '-' + g), (j = i.length)),
                        (h = g));
                } else if (t && r && (i = r.split(',')))
                  for (i.push('' + (0 < l.length ? l.length : 'E')), j = h = 0; j < i.length; j++)
                    ((g = i[j] ? parseFloat('' + i[j]) : 0) || 'E' == i[j]) &&
                      ((g > d || 'E' == i[j]) &&
                        ((e = j + 1), (f = 'O:' + h + '-' + g), (j = i.length)),
                      (h = g));
                f && (l.L = !0);
              }
              (f || l.f) &&
                f != l.f &&
                ((l.F = !0), l.f || ((l.m = e), (l.f = f)), 0 <= l.g && (u = !0)),
                (c >= 2 || 100 <= l.e) && l.c < d && ((l.C += d - l.c), (l.a += d - l.c)),
                (2 >= c || (3 == c && !l.k)) &&
                  ((l.n += (1 == c || 3 == c ? 'S' : 'E') + Math.floor(d)),
                  (l.k = 3 == c ? 1 : c)),
                !u &&
                  0 <= l.g &&
                  3 >= c &&
                  (p = p ? p : 0) &&
                  l.a >= p &&
                  ((u = !0), (v.mediaEvent = 'SECONDS')),
                (l.u = m),
                (l.c = d);
            }
            (!c || (3 >= c && 100 <= l.e)) &&
              (2 != l.k && (l.n += 'E' + Math.floor(d)),
              (c = 0),
              (n = o = 'None'),
              (v.mediaEvent = 'CLOSE')),
              7 == c && (u = v.clicked = l.r = !0),
              (5 == c ||
                (b.completeByCloseOffset &&
                  (!c || 100 <= l.e) &&
                  0 < l.length &&
                  d >= l.length - b.completeCloseOffsetThreshold)) &&
                (u = v.complete = l.complete = !0),
              (m = v.mediaEvent),
              'MILESTONE' == m
                ? (m += '_' + v.milestone)
                : 'OFFSET_MILESTONE' == m && (m += '_' + v.offsetMilestone),
              l.I[m] ? (v.eventFirstTime = !1) : ((v.eventFirstTime = !0), (l.I[m] = 1)),
              (v.event = v.mediaEvent),
              (v.timePlayed = l.C),
              (v.segmentNum = l.m),
              (v.segment = l.f),
              (v.segmentLength = l.B),
              b.monitor && 4 != c && b.monitor(b.s, v),
              b.Heartbeat && b.Heartbeat.enabled && 0 <= l.g && (u = !1),
              0 == c && b.M(a),
              u &&
                l.D == k &&
                ((a = { contextData: {} }),
                (a.linkTrackVars = n),
                (a.linkTrackEvents = o),
                a.linkTrackVars || (a.linkTrackVars = ''),
                a.linkTrackEvents || (a.linkTrackEvents = ''),
                b.P(a, l),
                a.linkTrackVars || (a['!linkTrackVars'] = 1),
                a.linkTrackEvents || (a['!linkTrackEvents'] = 1),
                b.s.track(a),
                l.F ? ((l.m = e), (l.f = f), (l.A = !0), (l.F = !1)) : 0 < l.a && (l.A = !1),
                (l.n = ''),
                (l.p = l.q = 0),
                (l.a -= Math.floor(l.a)),
                (l.g = d),
                l.D++);
          }
          return l;
        }),
        (b.O = function (a, c, d, e, f) {
          var g = 0;
          a &&
            (!b.autoTrackMediaLengthRequired || (c && c > 0)) &&
            (b.list && b.list[a]
              ? (g = 1)
              : (1 == d || 3 == d) && (b.open(a, c, 'HTML5 Video', f), (g = 1)),
            g && b.i(a, d, e, -1, 0));
        }),
        (b.attach = function (a) {
          var c, d, e;
          a &&
            a.tagName &&
            'VIDEO' == a.tagName.toUpperCase() &&
            (b.o ||
              (b.o = function (a, c, d) {
                var e, f;
                b.autoTrack &&
                  ((e = a.currentSrc),
                  (f = a.duration) || (f = -1),
                  0 > d && (d = a.currentTime),
                  b.O(e, f, c, d, a));
              }),
            (c = function () {
              b.o(a, 1, -1);
            }),
            (d = function () {
              b.o(a, 1, -1);
            }),
            b.j(a, 'play', c),
            b.j(a, 'pause', d),
            b.j(a, 'seeking', d),
            b.j(a, 'seeked', c),
            b.j(a, 'ended', function () {
              b.o(a, 0, -1);
            }),
            b.j(a, 'timeupdate', c),
            (e = function () {
              a.paused || a.ended || a.seeking || b.o(a, 3, -1), setTimeout(e, 1000);
            })());
        }),
        (b.j = function (a, b, c) {
          a.attachEvent
            ? a.attachEvent('on' + b, c)
            : a.addEventListener && a.addEventListener(b, c, !1);
        }),
        void 0 == b.completeByCloseOffset && (b.completeByCloseOffset = 1),
        void 0 == b.completeCloseOffsetThreshold && (b.completeCloseOffsetThreshold = 1),
        (b.Heartbeat = {}),
        (b.N = function () {
          var a, c;
          if (b.autoTrack && (a = b.s.d.getElementsByTagName('VIDEO')))
            for (c = 0; c < a.length; c++) b.attach(a[c]);
        }),
        b.j(a, 'load', b.N);
    }
    AppMeasurement_Module_Media = $___var_2bce06b3663b7a72;
    ({}.constructor.defineProperty(AppMeasurement_Module_Media, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement_Module_Media',
      writable: false,
    }));
    function $___var_be1b7b03f2bec762 (a) {
      function b () {
        var a = j.pageYOffset + (j.innerHeight || 0);
        a && a > +l && (l = a);
      }
      function c () {
        if (i.scrollReachSelector) {
          var b = a.d.querySelector && a.d.querySelector(i.scrollReachSelector);
          b
            ? ((l = b.scrollTop || 0),
              b.addEventListener('scroll', function () {
                var a;
                (a = (b && b.scrollTop + b.clientHeight) || 0) > l && (l = a);
              }))
            : 0 < m-- && setTimeout(c, 1000);
        }
      }
      function d (a, b) {
        var c, d, e;
        if (a && b && (c = i.c[b] || (i.c[b] = b.split(','))))
          for (e = 0; e < c.length && (d = c[e++]); ) if (-1 < a.indexOf(d)) return null;
        return a;
      }
      function e (b, c, d, e, f) {
        var g, h;
        if (
          (b.dataset && (h = b.dataset[c])
            ? (g = h)
            : b.getAttribute &&
              ((h = b.getAttribute('data-' + d)) ? (g = h) : (h = b.getAttribute(d)) && (g = h)),
          !g && a.useForcedLinkTracking && f)
        ) {
          var i;
          if (
            ((b = b.onclick ? '' + b.onclick : ''),
            (varValue = ''),
            e && b && ((c = b.indexOf(e)), c >= 0))
          ) {
            for (c += e.length; c < b.length; )
              if (((d = b.charAt(c++)), 0 <= '\'"'.indexOf(d))) {
                i = d;
                break;
              }
            for (h = !1; c < b.length && i && ((d = b.charAt(c)), h || d !== i); )
              '\\' === d ? (h = !0) : ((varValue += d), (h = !1)), c++;
          }
          (i = varValue) && (a.w[e] = i);
        }
        return g || (f && a.w[e]);
      }
      function f (a, b, c) {
        var e;
        return (e = i[b](a, c)) && d(h(e), i[b + 'Exclusions']);
      }
      function g (a, b, c) {
        var d;
        if (
          a &&
          !(1 === (d = a.nodeType) && (d = a.nodeName) && (d = d.toUpperCase()) && n[d]) &&
          (1 === a.nodeType && (d = a.nodeValue) && (b[b.length] = d),
          c.a ||
            c.t ||
            c.s ||
            !a.getAttribute ||
            ((d = a.getAttribute('alt'))
              ? (c.a = d)
              : (d = a.getAttribute('title'))
              ? (c.t = d)
              : 'IMG' == ('' + a.nodeName).toUpperCase() &&
                (d = a.getAttribute('src') || a.src) &&
                (c.s = d)),
          (d = a.childNodes) && d.length)
        )
          for (a = 0; a < d.length; a++) g(d[a], b, c);
      }
      function h (a) {
        if (null == a || void 0 == a) return a;
        try {
          return a
            .replace(
              RegExp(
                '^[\\s\\n\\f\\r\\t\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u205F\u3000\uFEFF]+',
                'mg'
              ),
              ''
            )
            .replace(
              RegExp(
                '[\\s\\n\\f\\r\\t\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u205F\u3000\uFEFF]+$',
                'mg'
              ),
              ''
            )
            .replace(
              RegExp(
                '[\\s\\n\\f\\r\\t\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u205F\u3000\uFEFF]{1,}',
                'mg'
              ),
              ' '
            )
            .substring(0, 254);
        } catch (b) {}
      }
      var i = this;
      i.s = a;
      var j = window;
      j.s_c_in || ((j.s_c_il = []), (j.s_c_in = 0)),
        (i._il = j.s_c_il),
        (i._in = j.s_c_in),
        (i._il[i._in] = i),
        j.s_c_in++,
        (i._c = 's_m');
      var k,
        l = 0,
        m = 60;
      i.c = {};
      var n = { SCRIPT: 1, STYLE: 1, LINK: 1, CANVAS: 1 };
      (i._g = function () {
        var b,
          c,
          d,
          e = a.contextData,
          g = a.linkObject;
        (b = a.pageName || a.pageURL) &&
          (c = f(g, 'link', a.linkName)) &&
          (d = f(g, 'region')) &&
          ((e['a.activitymap.page'] = b.substring(0, 255)),
          (e['a.activitymap.link'] = 128 < c.length ? c.substring(0, 128) : c),
          (e['a.activitymap.region'] = 127 < d.length ? d.substring(0, 127) : d),
          l > 0 && (e['a.activitymap.xy'] = 10 * Math.floor(l / 10)),
          (e['a.activitymap.pageIDType'] = a.pageName ? 1 : 0));
      }),
        (i._d = function () {
          i.trackScrollReach &&
            !k &&
            (i.scrollReachSelector
              ? c()
              : (b(), j.addEventListener && j.addEventListener('scroll', b, !1)),
            (k = !0));
        }),
        (i.link = function (a, b) {
          var c;
          if (b) c = d(h(b), i.linkExclusions);
          else if ((c = a) && !(c = e(a, 'sObjectId', 's-object-id', 's_objectID', 1))) {
            var f, j;
            (j = d(h(a.innerText || a.textContent), i.linkExclusions)) ||
              (g(a, (f = []), (c = { a: void 0, t: void 0, s: void 0 })),
              (j = d(h(f.join('')))) ||
                (j = d(h(c.a ? c.a : c.t ? c.t : c.s ? c.s : void 0))) ||
                !(f = (f = a.tagName) && f.toUpperCase ? f.toUpperCase() : '') ||
                ('INPUT' == f || ('SUBMIT' == f && a.value)
                  ? (j = d(h(a.value)))
                  : 'IMAGE' == f && a.src && (j = d(h(a.src))))),
              (c = j);
          }
          return c;
        }),
        (i.region = function (a) {
          for (var b, c = i.regionIDAttribute || 'id'; a && (a = a.parentNode); ) {
            if ((b = e(a, c, c, c))) return b;
            if ('BODY' == a.nodeName) return 'BODY';
          }
        });
    }
    AppMeasurement_Module_ActivityMap = $___var_be1b7b03f2bec762;
    ({}.constructor.defineProperty(AppMeasurement_Module_ActivityMap, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement_Module_ActivityMap',
      writable: false,
    }));
    function $___var_d1029b22c5d76f56 (a) {
      var b = this;
      b.version = '2.22.0';
      var c = window;
      c.s_c_in || ((c.s_c_il = []), (c.s_c_in = 0)),
        (b._il = c.s_c_il),
        (b._in = c.s_c_in),
        (b._il[b._in] = b),
        c.s_c_in++,
        (b._c = 's_c');
      var d = c.AppMeasurement.ic;
      d || (d = null);
      var e,
        f,
        g = c;
      try {
        for (
          e = g.parent, f = g.location;
          e &&
          e.location &&
          f &&
          '' + e.location != '' + f &&
          g.location &&
          '' + e.location != '' + g.location &&
          e.location.host === f.host;

        )
          (g = e), (e = g.parent);
      } catch (h) {}
      (b.C = function (a) {
        try {
          console.log(a);
        } catch (b) {}
      }),
        (b.Ra = function (a) {
          return '' + parseInt(a) == '' + a;
        }),
        (b.replace = function (a, b, c) {
          return !a || 0 > a.indexOf(b) ? a : a.split(b).join(c);
        }),
        (b.escape = function (a) {
          var c, d;
          if (!a) return a;
          for (a = encodeURIComponent(a), c = 0; 7 > c; c++)
            (d = "+~!*()'".substring(c, c + 1)),
              0 <= a.indexOf(d) &&
                (a = b.replace(a, d, '%' + d.charCodeAt(0).toString(16).toUpperCase()));
          return a;
        }),
        (b.unescape = function (a) {
          if (!a) return a;
          a = 0 <= a.indexOf('+') ? b.replace(a, '+', ' ') : a;
          try {
            return decodeURIComponent(a);
          } catch (c) {}
          return unescape(a);
        }),
        (b.Nb = function () {
          var a,
            d = c.location.hostname,
            e = b.fpCookieDomainPeriods;
          if (
            (e || (e = b.cookieDomainPeriods),
            d &&
              !b.Ka &&
              !/^[0-9.]+$/.test(d) &&
              ((e = e ? parseInt(e) : 2), (e = e > 2 ? e : 2), (a = d.lastIndexOf('.')), a >= 0))
          ) {
            for (; a >= 0 && e > 1; ) (a = d.lastIndexOf('.', a - 1)), e--;
            b.Ka = a > 0 ? d.substring(a) : d;
          }
          return b.Ka;
        }),
        (b.c_r = b.cookieRead = function (a) {
          a = b.escape(a);
          var c = ' ' + b.d.cookie,
            d = c.indexOf(' ' + a + '='),
            e = 0 > d ? d : c.indexOf(';', d);
          return (
            (a = 0 > d ? '' : b.unescape(c.substring(d + 2 + a.length, 0 > e ? c.length : e))),
            '[[B]]' != a ? a : ''
          );
        }),
        (b.c_w = b.cookieWrite = function (a, c, d) {
          var e,
            f = b.Nb(),
            g = b.cookieLifetime;
          return (
            (c = '' + c),
            (g = g ? ('' + g).toUpperCase() : ''),
            d &&
              'SESSION' != g &&
              'NONE' != g &&
              ((e = '' != c ? parseInt(g ? g : 0) : -60)
                ? ((d = new Date()), d.setTime(d.getTime() + 1000 * e))
                : 1 === d &&
                  ((d = new Date()), (e = d.getYear()), d.setYear(e + 2 + (1900 > e ? 1900 : 0)))),
            a && 'NONE' != g
              ? ((b.d.cookie =
                  b.escape(a) +
                  '=' +
                  b.escape('' != c ? c : '[[B]]') +
                  '; path=/;' +
                  (d && 'SESSION' != g ? ' expires=' + d.toUTCString() + ';' : '') +
                  (f ? ' domain=' + f + ';' : '') +
                  (b.writeSecureCookies ? ' secure;' : '')),
                b.cookieRead(a) == c)
              : 0
          );
        }),
        (b.Kb = function () {
          var a = b.Util.getIeVersion();
          'number' == typeof a && 10 > a && ((b.unsupportedBrowser = !0), b.xb(b, function () {}));
        }),
        (b.ya = function () {
          const $___old_7157275f96ae721e = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_7157275f96ae721e)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_9d7b4eb662ee43f5.userAgent
              ));
            return function () {
              var a = navigator.userAgent;
              return 'Microsoft Internet Explorer' === navigator.appName ||
                0 <= a.indexOf('MSIE ') ||
                (0 <= a.indexOf('Trident/') && 0 <= a.indexOf('Windows NT 6'))
                ? !0
                : !1;
            }.apply(this, arguments);
          } finally {
            if ($___old_7157275f96ae721e)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_7157275f96ae721e
              ));
          }
        }),
        (b.xb = function (a, b) {
          for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && 'function' == typeof a[c] && (a[c] = b);
        }),
        (b.K = []),
        (b.fa = function (a, c, d) {
          if (b.La) return 0;
          b.maxDelay || (b.maxDelay = 250);
          var e = 0,
            f = new Date().getTime() + b.maxDelay,
            g = b.d.visibilityState,
            h = ['webkitvisibilitychange', 'visibilitychange'];
          if ((g || (g = b.d.webkitVisibilityState), g && 'prerender' == g)) {
            if (!b.ga)
              for (b.ga = 1, d = 0; d < h.length; d++)
                b.d.addEventListener(h[d], function () {
                  var a = b.d.visibilityState;
                  a || (a = b.d.webkitVisibilityState),
                    'visible' == a && ((b.ga = 0), b.delayReady());
                });
            (e = 1), (f = 0);
          } else d || (b.u('_d') && (e = 1));
          return (
            e && (b.K.push({ m: a, a: c, t: f }), b.ga || setTimeout(b.delayReady, b.maxDelay)), e
          );
        }),
        (b.delayReady = function () {
          var a,
            c = new Date().getTime(),
            d = 0;
          for (b.u('_d') ? (d = 1) : b.Aa(); 0 < b.K.length; ) {
            if (((a = b.K.shift()), d && !a.t && a.t > c)) {
              b.K.unshift(a), setTimeout(b.delayReady, parseInt(b.maxDelay / 2));
              break;
            }
            (b.La = 1), b[a.m].apply(b, a.a), (b.La = 0);
          }
        }),
        (b.setAccount = b.sa = function (a) {
          var c, d;
          if (!b.fa('setAccount', arguments))
            if (((b.account = a), b.allAccounts))
              for (
                c = b.allAccounts.concat(a.split(',')), b.allAccounts = [], c.sort(), d = 0;
                d < c.length;
                d++
              )
                (0 != d && c[d - 1] == c[d]) || b.allAccounts.push(c[d]);
            else b.allAccounts = a.split(',');
        }),
        (b.foreachVar = function (a, c) {
          var d,
            e,
            f,
            g,
            h = '';
          for (
            f = e = '',
              b.lightProfileID
                ? ((d = b.O), (h = b.lightTrackVars) && (h = ',' + h + ',' + b.la.join(',') + ','))
                : ((d = b.g),
                  (b.pe || b.linkType) &&
                    ((h = b.linkTrackVars),
                    (e = b.linkTrackEvents),
                    b.pe &&
                      ((f = b.pe.substring(0, 1).toUpperCase() + b.pe.substring(1)),
                      b[f] && ((h = b[f].ec), (e = b[f].cc)))),
                  h && (h = ',' + h + ',' + b.F.join(',') + ','),
                  e && h && (h += ',events,')),
              c && (c = ',' + c + ','),
              e = 0;
            e < d.length;
            e++
          )
            (f = d[e]),
              (g = b[f]) &&
                (!h || 0 <= h.indexOf(',' + f + ',')) &&
                (!c || 0 <= c.indexOf(',' + f + ',')) &&
                a(f, g);
        }),
        (b.o = function (a, c, d, e, f) {
          var g,
            h,
            i,
            j,
            k = '',
            l = 0;
          if (('contextData' == a && (a = 'c'), c)) {
            for (g in c)
              if (
                !(Object.prototype[g] || (f && g.substring(0, f.length) != f)) &&
                c[g] &&
                (!d || 0 <= d.indexOf(',' + (e ? e + '.' : '') + g + ','))
              ) {
                if (((i = !1), l))
                  for (h = 0; h < l.length; h++)
                    if (g.substring(0, l[h].length) == l[h]) {
                      i = !0;
                      break;
                    }
                if (
                  !i &&
                  ('' == k && (k += '&' + a + '.'),
                  (h = c[g]),
                  f && (g = g.substring(f.length)),
                  0 < g.length)
                )
                  if (((i = g.indexOf('.')), i > 0))
                    (h = g.substring(0, i)),
                      (i = (f ? f : '') + h + '.'),
                      l || (l = []),
                      l.push(i),
                      (k += b.o(h, c, d, e, i));
                  else if (('boolean' == typeof h && (h = h ? 'true' : 'false'), h)) {
                    if ('retrieveLightData' == e && 0 > f.indexOf('.contextData.'))
                      switch (((i = g.substring(0, 4)), (j = g.substring(4)), g)) {
                        case 'transactionID':
                          g = 'xact';
                          break;
                        case 'channel':
                          g = 'ch';
                          break;
                        case 'campaign':
                          g = 'v0';
                          break;
                        default:
                          b.Ra(j) &&
                            ('prop' == i
                              ? (g = 'c' + j)
                              : 'eVar' == i
                              ? (g = 'v' + j)
                              : 'list' == i
                              ? (g = 'l' + j)
                              : 'hier' == i && ((g = 'h' + j), (h = h.substring(0, 255))));
                      }
                    k += '&' + b.escape(g) + '=' + b.escape(h);
                  }
              }
            '' != k && (k += '&.' + a);
          }
          return k;
        }),
        (b.usePostbacks = 0),
        (b.Qb = function () {
          var a,
            c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = '',
            l = '',
            m = '',
            n = (f = ''),
            o = b.T();
          if (
            (b.lightProfileID
              ? ((a = b.O), (l = b.lightTrackVars) && (l = ',' + l + ',' + b.la.join(',') + ','))
              : ((a = b.g),
                (b.pe || b.linkType) &&
                  ((l = b.linkTrackVars),
                  (m = b.linkTrackEvents),
                  b.pe &&
                    ((f = b.pe.substring(0, 1).toUpperCase() + b.pe.substring(1)),
                    b[f] && ((l = b[f].ec), (m = b[f].cc)))),
                l && (l = ',' + l + ',' + b.F.join(',') + ','),
                m && ((m = ',' + m + ','), l && (l += ',events,')),
                b.events2 && (n += ('' != n ? ',' : '') + b.events2)),
            o && o.getCustomerIDs)
          ) {
            if (((f = d), (g = o.getCustomerIDs())))
              for (c in g)
                Object.prototype[c] ||
                  ((e = g[c]),
                  'object' == typeof e &&
                    (f || (f = {}),
                    e.id && (f[c + '.id'] = e.id),
                    e.authState && (f[c + '.as'] = e.authState)));
            f && (k += b.o('cid', f));
          }
          for (
            b.AudienceManagement &&
              b.AudienceManagement.isReady() &&
              (k += b.o('d', b.AudienceManagement.getEventCallConfigParams())),
              c = 0;
            c < a.length;
            c++
          ) {
            if (
              ((f = a[c]),
              (g = b[f]),
              (e = f.substring(0, 4)),
              (h = f.substring(4)),
              g ||
                ('events' == f && n
                  ? ((g = n), (n = ''))
                  : 'marketingCloudOrgID' == f && o && b.V('ECID') && (g = o.marketingCloudOrgID)),
              g && (!l || 0 <= l.indexOf(',' + f + ',')))
            ) {
              switch (f) {
                case 'customerPerspective':
                  f = 'cp';
                  break;
                case 'marketingCloudOrgID':
                  f = 'mcorgid';
                  break;
                case 'supplementalDataID':
                  f = 'sdid';
                  break;
                case 'timestamp':
                  f = 'ts';
                  break;
                case 'dynamicVariablePrefix':
                  f = 'D';
                  break;
                case 'visitorID':
                  f = 'vid';
                  break;
                case 'marketingCloudVisitorID':
                  f = 'mid';
                  break;
                case 'analyticsVisitorID':
                  f = 'aid';
                  break;
                case 'audienceManagerLocationHint':
                  f = 'aamlh';
                  break;
                case 'audienceManagerBlob':
                  f = 'aamb';
                  break;
                case 'authState':
                  f = 'as';
                  break;
                case 'pageURL':
                  (f = 'g'),
                    255 < g.length &&
                      ((b.pageURLRest = g.substring(255)), (g = g.substring(0, 255)));
                  break;
                case 'pageURLRest':
                  f = '-g';
                  break;
                case 'referrer':
                  f = 'r';
                  break;
                case 'vmk':
                case 'visitorMigrationKey':
                  f = 'vmt';
                  break;
                case 'visitorMigrationServer':
                  (f = 'vmf'), b.ssl && b.visitorMigrationServerSecure && (g = '');
                  break;
                case 'visitorMigrationServerSecure':
                  (f = 'vmf'), !b.ssl && b.visitorMigrationServer && (g = '');
                  break;
                case 'charSet':
                  f = 'ce';
                  break;
                case 'visitorNamespace':
                  f = 'ns';
                  break;
                case 'cookieDomainPeriods':
                  f = 'cdp';
                  break;
                case 'cookieLifetime':
                  f = 'cl';
                  break;
                case 'variableProvider':
                  f = 'vvp';
                  break;
                case 'currencyCode':
                  f = 'cc';
                  break;
                case 'channel':
                  f = 'ch';
                  break;
                case 'transactionID':
                  f = 'xact';
                  break;
                case 'campaign':
                  f = 'v0';
                  break;
                case 'latitude':
                  f = 'lat';
                  break;
                case 'longitude':
                  f = 'lon';
                  break;
                case 'resolution':
                  f = 's';
                  break;
                case 'colorDepth':
                  f = 'c';
                  break;
                case 'javascriptVersion':
                  f = 'j';
                  break;
                case 'javaEnabled':
                  f = 'v';
                  break;
                case 'cookiesEnabled':
                  f = 'k';
                  break;
                case 'browserWidth':
                  f = 'bw';
                  break;
                case 'browserHeight':
                  f = 'bh';
                  break;
                case 'connectionType':
                  f = 'ct';
                  break;
                case 'homepage':
                  f = 'hp';
                  break;
                case 'events':
                  if ((n && (g += ('' != g ? ',' : '') + n), m))
                    for (h = g.split(','), g = '', e = 0; e < h.length; e++)
                      (i = h[e]),
                        (j = i.indexOf('=')),
                        j >= 0 && (i = i.substring(0, j)),
                        (j = i.indexOf(':')),
                        j >= 0 && (i = i.substring(0, j)),
                        0 <= m.indexOf(',' + i + ',') && (g += (g ? ',' : '') + h[e]);
                  break;
                case 'events2':
                  g = '';
                  break;
                case 'contextData':
                  (k += b.o('c', b[f], l, f)), (g = '');
                  break;
                case 'lightProfileID':
                  f = 'mtp';
                  break;
                case 'lightStoreForSeconds':
                  (f = 'mtss'), b.lightProfileID || (g = '');
                  break;
                case 'lightIncrementBy':
                  (f = 'mti'), b.lightProfileID || (g = '');
                  break;
                case 'retrieveLightProfiles':
                  f = 'mtsr';
                  break;
                case 'deleteLightProfiles':
                  f = 'mtsd';
                  break;
                case 'retrieveLightData':
                  b.retrieveLightProfiles && (k += b.o('mts', b[f], l, f)), (g = '');
                  break;
                default:
                  b.Ra(h) &&
                    ('prop' == e
                      ? (f = 'c' + h)
                      : 'eVar' == e
                      ? (f = 'v' + h)
                      : 'list' == e
                      ? (f = 'l' + h)
                      : 'hier' == e && ((f = 'h' + h), (g = g.substring(0, 255))));
              }
              g && (k += '&' + f + '=' + ('pev' != f.substring(0, 3) ? b.escape(g) : g));
            }
            'pev3' == f && b.e && (k += b.e);
          }
          return b.ka && ((k += '&lrt=' + b.ka), (b.ka = null)), k;
        }),
        (b.B = function (a) {
          var b = a.tagName;
          return 'undefined' != '' + a.lc ||
            ('undefined' != '' + a.Zb && 'HTML' != ('' + a.Zb).toUpperCase())
            ? ''
            : ((b = b && b.toUpperCase ? b.toUpperCase() : ''),
              'SHAPE' == b && (b = ''),
              b &&
                (('INPUT' == b || 'BUTTON' == b) && a.type && a.type.toUpperCase
                  ? (b = a.type.toUpperCase())
                  : !b && a.href && (b = 'A')),
              b);
        }),
        (b.Na = function (a) {
          var b,
            d,
            e,
            f = c.location,
            g = a.href ? a.href : '';
          return (
            (b = g.indexOf(':')),
            (d = g.indexOf('?')),
            (e = g.indexOf('/')),
            g &&
              (0 > b || (d >= 0 && b > d) || (e >= 0 && b > e)) &&
              ((d =
                a.protocol && 1 < a.protocol.length ? a.protocol : f.protocol ? f.protocol : ''),
              (b = f.pathname.lastIndexOf('/')),
              (g =
                (d ? d + '//' : '') +
                (a.host ? a.host : f.host ? f.host : '') +
                ('/' != g.substring(0, 1) ? f.pathname.substring(0, 0 > b ? 0 : b) + '/' : '') +
                g)),
            g
          );
        }),
        (b.L = function (a) {
          var c,
            d,
            e = b.B(a),
            f = '',
            g = 0;
          return e &&
            ((c = a.protocol),
            (d = a.onclick),
            !a.href ||
            ('A' != e && 'AREA' != e) ||
            (d && c && !(0 > c.toLowerCase().indexOf('javascript')))
              ? d
                ? ((f = b.replace(
                    b.replace(b.replace(b.replace('' + d, '\r', ''), '\n', ''), '\t', ''),
                    ' ',
                    ''
                  )),
                  (g = 2))
                : 'INPUT' == e || 'SUBMIT' == e
                ? (a.value
                    ? (f = a.value)
                    : a.innerText
                    ? (f = a.innerText)
                    : a.textContent && (f = a.textContent),
                  (g = 3))
                : 'IMAGE' == e && a.src && (f = a.src)
              : (f = b.Na(a)),
            f)
            ? { id: f.substring(0, 100), type: g }
            : 0;
        }),
        (b.jc = function (a) {
          for (var c = b.B(a), d = b.L(a); a && !d && 'BODY' != c; )
            (a = a.parentElement ? a.parentElement : a.parentNode) && ((c = b.B(a)), (d = b.L(a)));
          return (
            (d && 'BODY' != c) || (a = 0),
            a &&
              ((c = a.onclick ? '' + a.onclick : ''),
              0 <= c.indexOf('.tl(') || 0 <= c.indexOf('.trackLink(')) &&
              (a = 0),
            a
          );
        }),
        (b.Yb = function () {
          var a,
            d,
            e,
            f,
            g = b.linkObject,
            h = b.linkType,
            i = b.linkURL;
          if (((b.ma = 1), g || ((b.ma = 0), (g = b.clickObject)), g)) {
            for (a = b.B(g), d = b.L(g); g && !d && 'BODY' != a; )
              (g = g.parentElement ? g.parentElement : g.parentNode) &&
                ((a = b.B(g)), (d = b.L(g)));
            if (((d && 'BODY' != a) || (g = 0), g && !b.linkObject)) {
              var j = g.onclick ? '' + g.onclick : '';
              (0 <= j.indexOf('.tl(') || 0 <= j.indexOf('.trackLink(')) && (g = 0);
            }
          } else b.ma = 1;
          if (
            (!i && g && (i = b.Na(g)),
            i &&
              !b.linkLeaveQueryString &&
              ((e = i.indexOf('?')), e >= 0 && (i = i.substring(0, e))),
            !h && i)
          ) {
            var k,
              l = 0,
              m = 0;
            if (b.trackDownloadLinks && b.linkDownloadFileTypes)
              for (
                j = i.toLowerCase(),
                  e = j.indexOf('?'),
                  f = j.indexOf('#'),
                  e >= 0 ? f >= 0 && e > f && (e = f) : (e = f),
                  e >= 0 && (j = j.substring(0, e)),
                  e = b.linkDownloadFileTypes.toLowerCase().split(','),
                  f = 0;
                f < e.length;
                f++
              )
                (k = e[f]) && j.substring(j.length - (k.length + 1)) == '.' + k && (h = 'd');
            if (
              b.trackExternalLinks &&
              !h &&
              ((j = i.toLowerCase()),
              b.Qa(j) &&
                (b.linkInternalFilters || (b.linkInternalFilters = c.location.hostname),
                (e = 0),
                b.linkExternalFilters
                  ? ((e = b.linkExternalFilters.toLowerCase().split(',')), (l = 1))
                  : b.linkInternalFilters && (e = b.linkInternalFilters.toLowerCase().split(',')),
                e))
            ) {
              for (f = 0; f < e.length; f++) (k = e[f]), 0 <= j.indexOf(k) && (m = 1);
              m ? l && (h = 'e') : l || (h = 'e');
            }
          }
          (b.linkObject = g),
            (b.linkURL = i),
            (b.linkType = h),
            (b.trackClickMap || b.trackInlineStats) &&
              ((b.e = ''),
              g &&
                ((h = b.pageName),
                (i = 1),
                (g = g.sourceIndex),
                h || ((h = b.pageURL), (i = 0)),
                c.s_objectID && ((d.id = c.s_objectID), (g = d.type = 1)),
                h &&
                  d &&
                  d.id &&
                  a &&
                  (b.e =
                    '&pid=' +
                    b.escape(h.substring(0, 255)) +
                    (i ? '&pidt=' + i : '') +
                    '&oid=' +
                    b.escape(d.id.substring(0, 100)) +
                    (d.type ? '&oidt=' + d.type : '') +
                    '&ot=' +
                    a +
                    (g ? '&oi=' + g : ''))));
        }),
        (b.Rb = function () {
          var a = b.ma,
            c = b.linkType,
            d = b.linkURL,
            e = b.linkName;
          if (
            (c &&
              (d || e) &&
              ((c = c.toLowerCase()),
              'd' != c && 'e' != c && (c = 'o'),
              (b.pe = 'lnk_' + c),
              (b.pev1 = d ? b.escape(d) : ''),
              (b.pev2 = e ? b.escape(e) : ''),
              (a = 1)),
            b.abort && (a = 0),
            b.trackClickMap || b.trackInlineStats || b.Ub())
          ) {
            var f,
              g,
              h,
              c = {},
              d = 0,
              i = b.rb(),
              j = i ? i.split('&') : 0,
              i = 0;
            if (j)
              for (f = 0; f < j.length; f++)
                (g = j[f].split('=')),
                  (e = b.unescape(g[0]).split(',')),
                  (g = b.unescape(g[1])),
                  (c[g] = e);
            (e = b.account.split(',')), (f = {});
            for (h in b.contextData)
              h &&
                !Object.prototype[h] &&
                'a.activitymap.' == h.substring(0, 14) &&
                ((f[h] = b.contextData[h]), (b.contextData[h] = ''));
            if (((b.e = b.o('c', f) + (b.e ? b.e : '')), a || b.e)) {
              a && !b.e && (i = 1);
              for (g in c)
                if (!Object.prototype[g])
                  for (h = 0; h < e.length; h++)
                    for (
                      i &&
                        ((j = c[g].join(',')),
                        j == b.account &&
                          ((b.e += ('&' != g.charAt(0) ? '&' : '') + g), (c[g] = []), (d = 1))),
                        f = 0;
                      f < c[g].length;
                      f++
                    )
                      (j = c[g][f]),
                        j == e[h] &&
                          (i &&
                            (b.e +=
                              '&u=' + b.escape(j) + ('&' != g.charAt(0) ? '&' : '') + g + '&u=0'),
                          c[g].splice(f, 1),
                          (d = 1));
              if ((a || (d = 1), d)) {
                (i = ''),
                  (f = 2),
                  !a && b.e && ((i = b.escape(e.join(',')) + '=' + b.escape(b.e)), (f = 1));
                for (g in c)
                  !Object.prototype[g] &&
                    f > 0 &&
                    0 < c[g].length &&
                    ((i += (i ? '&' : '') + b.escape(c[g].join(',')) + '=' + b.escape(g)), f--);
                b.zb(i);
              }
            }
          }
          return a;
        }),
        (b.rb = function () {
          return b.useLinkTrackSessionStorage
            ? b.Ea()
              ? c.sessionStorage.getItem(b.P)
              : void 0
            : b.cookieRead(b.P);
        }),
        (b.Ea = function () {
          return c.sessionStorage ? !0 : !1;
        }),
        (b.zb = function (a) {
          b.useLinkTrackSessionStorage
            ? b.Ea() && c.sessionStorage.setItem(b.P, a)
            : b.cookieWrite(b.P, a);
        }),
        (b.Sb = function () {
          if (!b.bc) {
            var a,
              c,
              d = new Date(),
              e = g.location,
              f = (c = a = ''),
              h = '',
              i = '',
              j = '1.2',
              k = b.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N',
              l = '',
              m = '';
            if (
              d.setUTCDate &&
              ((j = '1.3'), (0).toPrecision && ((j = '1.5'), (d = []), d.forEach))
            ) {
              (j = '1.6'), (c = 0), (a = {});
              try {
                (c = new Iterator(a)),
                  c.next &&
                    ((j = '1.7'),
                    d.reduce &&
                      ((j = '1.8'),
                      j.trim &&
                        ((j = '1.8.1'),
                        Date.parse && ((j = '1.8.2'), Object.create && (j = '1.8.5')))));
              } catch (n) {}
            }
            (a = screen.width + 'x' + screen.height),
              (f = navigator.javaEnabled() ? 'Y' : 'N'),
              (c = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth),
              (h = b.w.innerWidth ? b.w.innerWidth : b.d.documentElement.offsetWidth),
              (i = b.w.innerHeight ? b.w.innerHeight : b.d.documentElement.offsetHeight);
            try {
              b.b.addBehavior('#default#homePage'), (l = b.b.kc(e) ? 'Y' : 'N');
            } catch (o) {}
            try {
              b.b.addBehavior('#default#clientCaps'), (m = b.b.connectionType);
            } catch (p) {}
            (b.resolution = a),
              (b.colorDepth = c),
              (b.javascriptVersion = j),
              (b.javaEnabled = f),
              (b.cookiesEnabled = k),
              (b.browserWidth = h),
              (b.browserHeight = i),
              (b.connectionType = m),
              (b.homepage = l),
              (b.bc = 1);
          }
        }),
        (b.Q = {}),
        (b.loadModule = function (a, d) {
          var e = b.Q[a];
          if (!e) {
            (e = c['AppMeasurement_Module_' + a] ? new c['AppMeasurement_Module_' + a](b) : {}),
              (b.Q[a] = b[a] = e),
              (e.kb = function () {
                return e.ub;
              }),
              (e.Ab = function (c) {
                (e.ub = c) && ((b[a + '_onLoad'] = c), b.fa(a + '_onLoad', [b, e], 1) || c(b, e));
              });
            try {
              Object.defineProperty
                ? Object.defineProperty(e, 'onLoad', { get: e.kb, set: e.Ab })
                : (e._olc = 1);
            } catch (f) {
              e._olc = 1;
            }
          }
          d && ((b[a + '_onLoad'] = d), b.fa(a + '_onLoad', [b, e], 1) || d(b, e));
        }),
        (b.u = function (a) {
          var c, d;
          for (c in b.Q)
            if (
              !Object.prototype[c] &&
              (d = b.Q[c]) &&
              (d._olc && d.onLoad && ((d._olc = 0), d.onLoad(b, d)), d[a] && d[a]())
            )
              return 1;
          return 0;
        }),
        (b.Ub = function () {
          return b.ActivityMap && b.ActivityMap._c ? !0 : !1;
        }),
        (b.Vb = function () {
          var a = Math.floor(10000000000000 * Math.random()),
            c = b.visitorSampling,
            d = b.visitorSamplingGroup,
            d =
              's_vsn_' +
              (b.visitorNamespace ? b.visitorNamespace : b.account) +
              (d ? '_' + d : ''),
            e = b.cookieRead(d);
          if (c) {
            if (((c *= 100), e && (e = parseInt(e)), !e)) {
              if (!b.cookieWrite(d, a)) return 0;
              e = a;
            }
            if (e % 10000 > c) return 0;
          }
          return 1;
        }),
        (b.S = function (a, c) {
          var d, e, f, g, h, i, j;
          for (j = {}, d = 0; 2 > d; d++)
            for (e = d > 0 ? b.Ga : b.g, f = 0; f < e.length; f++)
              if (((g = e[f]), (h = a[g]) || a['!' + g])) {
                if (h && !c && ('contextData' == g || 'retrieveLightData' == g) && b[g])
                  for (i in b[g]) h[i] || (h[i] = b[g][i]);
                b[g] || (j['!' + g] = 1), (j[g] = b[g]), (b[g] = h);
              }
          return j;
        }),
        (b.hc = function (a) {
          var c, d, e, f;
          for (c = 0; 2 > c; c++)
            for (d = c > 0 ? b.Ga : b.g, e = 0; e < d.length; e++)
              (f = d[e]),
                (a[f] = b[f]),
                a[f] ||
                  ('prop' !== f.substring(0, 4) &&
                    'eVar' !== f.substring(0, 4) &&
                    'hier' !== f.substring(0, 4) &&
                    'list' !== f.substring(0, 4) &&
                    'channel' !== f &&
                    'events' !== f &&
                    'eventList' !== f &&
                    'products' !== f &&
                    'productList' !== f &&
                    'purchaseID' !== f &&
                    'transactionID' !== f &&
                    'state' !== f &&
                    'zip' !== f &&
                    'campaign' !== f &&
                    'events2' !== f &&
                    'latitude' !== f &&
                    'longitude' !== f &&
                    'ms_a' !== f &&
                    'contextData' !== f &&
                    'supplementalDataID' !== f &&
                    'tnt' !== f &&
                    'timestamp' !== f &&
                    'abort' !== f &&
                    'useBeacon' !== f &&
                    'linkObject' !== f &&
                    'clickObject' !== f &&
                    'linkType' !== f &&
                    'linkName' !== f &&
                    'linkURL' !== f &&
                    'bodyClickTarget' !== f &&
                    'bodyClickFunction' !== f) ||
                  (a['!' + f] = 1);
        }),
        (b.Mb = function (a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h = 0,
            i = '',
            j = '';
          if (
            a &&
            255 < a.length &&
            ((b = '' + a),
            (c = b.indexOf('?')),
            c > 0 &&
              ((g = b.substring(c + 1)),
              (b = b.substring(0, c)),
              (e = b.toLowerCase()),
              (d = 0),
              'http://' == e.substring(0, 7)
                ? (d += 7)
                : 'https://' == e.substring(0, 8) && (d += 8),
              (c = e.indexOf('/', d)),
              c > 0 &&
                ((e = e.substring(d, c)),
                (f = b.substring(c)),
                (b = b.substring(0, c)),
                0 <= e.indexOf('google')
                  ? (h = ',q,ie,start,search_key,word,kw,cd,')
                  : 0 <= e.indexOf('yahoo.co')
                  ? (h = ',p,ei,')
                  : 0 <= e.indexOf('baidu.') && (h = ',wd,word,'),
                h && g)))
          ) {
            if ((a = g.split('&')) && 1 < a.length) {
              for (d = 0; d < a.length; d++)
                (e = a[d]),
                  (c = e.indexOf('=')),
                  c > 0 && 0 <= h.indexOf(',' + e.substring(0, c) + ',')
                    ? (i += (i ? '&' : '') + e)
                    : (j += (j ? '&' : '') + e);
              i && j ? (g = i + '&' + j) : (j = '');
            }
            (c = 253 - (g.length - j.length) - b.length),
              (a = b + (c > 0 ? f.substring(0, c) : '') + '?' + g);
          }
          return a;
        }),
        (b.eb = function (a) {
          var c = b.d.visibilityState,
            d = ['webkitvisibilitychange', 'visibilitychange'];
          if ((c || (c = b.d.webkitVisibilityState), c && 'prerender' == c)) {
            if (a)
              for (c = 0; c < d.length; c++)
                b.d.addEventListener(d[c], function () {
                  var c = b.d.visibilityState;
                  c || (c = b.d.webkitVisibilityState), 'visible' == c && a();
                });
            return !1;
          }
          return !0;
        }),
        (b.ca = !1),
        (b.H = !1),
        (b.Cb = function () {
          (b.H = !0), b.p();
        }),
        (b.I = !1),
        (b.Db = function (a) {
          (b.marketingCloudVisitorID = a.MCMID),
            (b.visitorOptedOut = a.MCOPTOUT),
            (b.analyticsVisitorID = a.MCAID),
            (b.audienceManagerLocationHint = a.MCAAMLH),
            (b.audienceManagerBlob = a.MCAAMB),
            (b.I = !1),
            b.p();
        }),
        (b.cb = function (a) {
          return (
            b.maxDelay || (b.maxDelay = 250),
            b.u('_d')
              ? (a &&
                  setTimeout(function () {
                    a();
                  }, b.maxDelay),
                !1)
              : !0
          );
        }),
        (b.aa = !1),
        (b.G = !1),
        (b.Aa = function () {
          (b.G = !0), b.p();
        }),
        (b.isReadyToTrack = function () {
          var a = !0;
          return b.ob() && b.mb() ? (b.qb() || (a = !1), b.tb() || (a = !1), a) : !1;
        }),
        (b.ob = function () {
          return b.ca || b.H || (b.eb(b.Cb) ? (b.H = !0) : (b.ca = !0)), b.ca && !b.H ? !1 : !0;
        }),
        (b.mb = function () {
          var a = b.wa();
          if (a) {
            if (!b.ta && !b.ba) return a.fetchPermissions(b.vb, !0), (b.ba = !0), !1;
            if (!b.ta) return !1;
            if (!a.isApproved(a.Categories.ANALYTICS)) return !1;
          }
          return !0;
        }),
        (b.V = function (a) {
          var c = b.wa();
          return c && !c.isApproved(c.Categories[a]) ? !1 : !0;
        }),
        (b.wa = function () {
          return c.adobe && c.adobe.optIn ? c.adobe.optIn : null;
        }),
        (b.Y = !0),
        (b.qb = function () {
          var a = b.T();
          return a && a.getVisitorValues
            ? (b.Y && ((b.Y = !1), b.I || ((b.I = !0), a.getVisitorValues(b.Db))), !b.I)
            : !0;
        }),
        (b.T = function () {
          var a = b.visitor;
          return a && !a.isAllowed() && (a = null), a;
        }),
        (b.tb = function () {
          return b.aa || b.G || (b.cb(b.Aa) ? (b.G = !0) : (b.aa = !0)), b.aa && !b.G ? !1 : !0;
        }),
        (b.ba = !1),
        (b.vb = function () {
          (b.ba = !1), (b.ta = !0);
        }),
        (b.j = d),
        (b.q = 0),
        (b.callbackWhenReadyToTrack = function (a, c, e) {
          var f;
          (f = {}),
            (f.Hb = a),
            (f.Gb = c),
            (f.Eb = e),
            b.j == d && (b.j = []),
            b.j.push(f),
            0 == b.q && (b.q = setInterval(b.p, 100));
        }),
        (b.p = function () {
          var a;
          if (b.isReadyToTrack() && (b.Bb(), b.j != d))
            for (; 0 < b.j.length; ) (a = b.j.shift()), a.Gb.apply(a.Hb, a.Eb);
        }),
        (b.Bb = function () {
          b.q && (clearInterval(b.q), (b.q = 0));
        }),
        (b.ua = function (a) {
          var c,
            e = {};
          if ((b.hc(e), a != d)) for (c in a) e[c] = a[c];
          b.callbackWhenReadyToTrack(b, b.Fa, [e]), b.Da();
        }),
        (b.Ob = function () {
          var a,
            c = b.cookieRead('s_fid'),
            d = '',
            e = '';
          a = 8;
          var f = 4;
          if (!c || 0 > c.indexOf('-')) {
            for (c = 0; 16 > c; c++)
              (a = Math.floor(Math.random() * a)),
                (d += '0123456789ABCDEF'.substring(a, a + 1)),
                (a = Math.floor(Math.random() * f)),
                (e += '0123456789ABCDEF'.substring(a, a + 1)),
                (a = f = 16);
            c = d + '-' + e;
          }
          return b.cookieWrite('s_fid', c, 1) || (c = 0), c;
        }),
        (b.Fa = function (a) {
          var d,
            e = new Date(),
            f =
              's' +
              (Math.floor(e.getTime() / 10800000) % 10) +
              Math.floor(10000000000000 * Math.random()),
            h = e.getYear(),
            h =
              't=' +
              b.escape(
                e.getDate() +
                  '/' +
                  e.getMonth() +
                  '/' +
                  (1900 > h ? h + 1900 : h) +
                  ' ' +
                  e.getHours() +
                  ':' +
                  e.getMinutes() +
                  ':' +
                  e.getSeconds() +
                  ' ' +
                  e.getDay() +
                  ' ' +
                  e.getTimezoneOffset()
              ),
            i = b.T();
          a && (d = b.S(a, 1)),
            b.Vb() &&
              !b.visitorOptedOut &&
              (b.xa() || (b.fid = b.Ob()),
              b.Yb(),
              b.usePlugins && b.doPlugins && b.doPlugins(b),
              b.account &&
                (b.abort ||
                  (b.trackOffline &&
                    !b.timestamp &&
                    (b.timestamp = Math.floor(e.getTime() / 1000)),
                  (a = c.location),
                  b.pageURL || (b.pageURL = a.href ? a.href : a),
                  b.referrer ||
                    b.$a ||
                    ((a = b.Util.getQueryParam('adobe_mc_ref', null, null, !0)),
                    (b.referrer =
                      a || void 0 === a ? (void 0 === a ? '' : a) : g.document.referrer)),
                  (b.$a = 1),
                  !b.referrer && b.Z && (b.referrer = b.Z),
                  (b.Z = 0),
                  (b.referrer = b.Mb(b.referrer)),
                  b.u('_g')),
                b.Rb() &&
                  !b.abort &&
                  (i &&
                    b.V('TARGET') &&
                    !b.supplementalDataID &&
                    i.getSupplementalDataID &&
                    (b.supplementalDataID = i.getSupplementalDataID(
                      'AppMeasurement:' + b._in,
                      b.expectSupplementalData ? !1 : !0
                    )),
                  b.V('AAM') || (b.contextData['cm.ssf'] = 1),
                  b.Sb(),
                  b.wb(),
                  (h += b.Qb()),
                  b.sb(f, h),
                  b.u('_t'),
                  (b.referrer = '')))),
            b.referrer && (b.Z = b.referrer),
            b.Da(),
            d && b.S(d, 1);
        }),
        (b.t = b.track = function (a, c) {
          c && b.S(c),
            (b.Y = !0),
            b.isReadyToTrack()
              ? null != b.j && 0 < b.j.length
                ? (b.ua(a), b.p())
                : b.Fa(a)
              : b.ua(a);
        }),
        (b.wb = function () {
          b.writeSecureCookies && !b.ssl && b.ab();
        }),
        (b.ab = function () {
          (b.contextData.excCodes = b.contextData.excCodes ? b.contextData.excCodes : []),
            b.contextData.excCodes.push(1);
        }),
        (b.Da = function () {
          (b.abort = b.supplementalDataID = b.timestamp = b.pageURLRest = b.linkObject = b.clickObject = b.linkURL = b.linkName = b.linkType = c.s_objectID = b.pe = b.pev1 = b.pev2 = b.pev3 = b.e = b.lightProfileID = b.useBeacon = b.referrer = 0),
            b.contextData && b.contextData.excCodes && (b.contextData.excCodes = 0);
        }),
        (b.Ca = []),
        (b.registerPreTrackCallback = function (a) {
          for (var c = [], d = 1; d < arguments.length; d++) c.push(arguments[d]);
          'function' == typeof a
            ? b.Ca.push([a, c])
            : b.debugTracking &&
              b.C('DEBUG: Non function type passed to registerPreTrackCallback');
        }),
        (b.hb = function (a) {
          b.va(b.Ca, a);
        }),
        (b.Ba = []),
        (b.registerPostTrackCallback = function (a) {
          for (var c = [], d = 1; d < arguments.length; d++) c.push(arguments[d]);
          'function' == typeof a
            ? b.Ba.push([a, c])
            : b.debugTracking &&
              b.C('DEBUG: Non function type passed to registerPostTrackCallback');
        }),
        (b.gb = function (a) {
          b.va(b.Ba, a);
        }),
        (b.va = function (a, c) {
          if ('object' == typeof a)
            for (var d = 0; d < a.length; d++) {
              var e = a[d][0],
                f = a[d][1].slice();
              if ((f.unshift(c), 'function' == typeof e))
                try {
                  e.apply(null, f);
                } catch (g) {
                  b.debugTracking && b.C(g.message);
                }
            }
        }),
        (b.tl = b.trackLink = function (a, c, d, e, f) {
          return (
            (b.linkObject = a),
            (b.linkType = c),
            (b.linkName = d),
            f && ((b.bodyClickTarget = a), (b.bodyClickFunction = f)),
            b.track(e)
          );
        }),
        (b.trackLight = function (a, c, d, e) {
          return (
            (b.lightProfileID = a),
            (b.lightStoreForSeconds = c),
            (b.lightIncrementBy = d),
            b.track(e)
          );
        }),
        (b.clearVars = function () {
          var a, c;
          for (a = 0; a < b.g.length; a++)
            (c = b.g[a]),
              ('prop' == c.substring(0, 4) ||
                'eVar' == c.substring(0, 4) ||
                'hier' == c.substring(0, 4) ||
                'list' == c.substring(0, 4) ||
                'channel' == c ||
                'events' == c ||
                'eventList' == c ||
                'products' == c ||
                'productList' == c ||
                'purchaseID' == c ||
                'transactionID' == c ||
                'state' == c ||
                'zip' == c ||
                'campaign' == c) &&
                (b[c] = void 0);
        }),
        (b.tagContainerMarker = ''),
        (b.sb = function (a, c) {
          var d =
            b.ib() +
            '/' +
            a +
            '?AQB=1&ndh=1&pf=1&' +
            (b.za() ? 'callback=s_c_il[' + b._in + '].doPostbacks&et=1&' : '') +
            c +
            '&AQE=1';
          b.hb(d), b.fb(d), b.U();
        }),
        (b.ib = function () {
          var a = b.jb();
          return (
            'http' +
            (b.ssl ? 's' : '') +
            '://' +
            a +
            '/b/ss/' +
            b.account +
            '/' +
            (b.mobile ? '5.' : '') +
            (b.za() ? '10' : '1') +
            '/JS-' +
            b.version +
            (b.ac ? 'T' : '') +
            (b.tagContainerMarker ? '-' + b.tagContainerMarker : '')
          );
        }),
        (b.za = function () {
          return (b.AudienceManagement && b.AudienceManagement.isReady()) || 0 != b.usePostbacks;
        }),
        (b.jb = function () {
          var a = b.dc,
            c = b.trackingServer;
          return (
            c
              ? b.trackingServerSecure && b.ssl && (c = b.trackingServerSecure)
              : ((a = a ? ('' + a).toLowerCase() : 'd1'),
                'd1' == a ? (a = '112') : 'd2' == a && (a = '122'),
                (c = b.lb() + '.' + a + '.2o7.net')),
            c
          );
        }),
        (b.lb = function () {
          var a = b.visitorNamespace;
          return a || ((a = b.account.split(',')[0]), (a = a.replace(/[^0-9a-z]/gi, ''))), a;
        }),
        (b.Za = /{(%?)(.*?)(%?)}/),
        (b.gc = RegExp(b.Za.source, 'g')),
        (b.Lb = function (a) {
          if ('object' == typeof a.dests)
            for (var c = 0; c < a.dests.length; ++c) {
              var d = a.dests[c];
              if ('string' == typeof d.c && 'aa.' == d.id.substr(0, 3))
                for (var e = d.c.match(b.gc), f = 0; f < e.length; ++f) {
                  var g = e[f],
                    h = g.match(b.Za),
                    i = '';
                  '%' == h[1] && 'timezone_offset' == h[2]
                    ? (i = new Date().getTimezoneOffset())
                    : '%' == h[1] && 'timestampz' == h[2] && (i = b.Pb()),
                    (d.c = d.c.replace(g, b.escape(i)));
                }
            }
        }),
        (b.Pb = function () {
          var a = new Date(),
            c = new Date(60000 * Math.abs(a.getTimezoneOffset()));
          return (
            b.k(4, a.getFullYear()) +
            '-' +
            b.k(2, a.getMonth() + 1) +
            '-' +
            b.k(2, a.getDate()) +
            'T' +
            b.k(2, a.getHours()) +
            ':' +
            b.k(2, a.getMinutes()) +
            ':' +
            b.k(2, a.getSeconds()) +
            (0 < a.getTimezoneOffset() ? '-' : '+') +
            b.k(2, c.getUTCHours()) +
            ':' +
            b.k(2, c.getUTCMinutes())
          );
        }),
        (b.k = function (a, b) {
          return (Array(a + 1).join(0) + b).slice(-a);
        }),
        (b.qa = {}),
        (b.doPostbacks = function (a) {
          if ('object' == typeof a)
            if (
              (b.Lb(a),
              'object' == typeof b.AudienceManagement &&
                'function' == typeof b.AudienceManagement.isReady &&
                b.AudienceManagement.isReady() &&
                'function' == typeof b.AudienceManagement.passData)
            )
              b.AudienceManagement.passData(a);
            else if ('object' == typeof a && 'object' == typeof a.dests)
              for (var c = 0; c < a.dests.length; ++c) {
                var d = a.dests[c];
                'object' == typeof d &&
                  'string' == typeof d.c &&
                  'string' == typeof d.id &&
                  'aa.' == d.id.substr(0, 3) &&
                  ((b.qa[d.id] = new Image()), (b.qa[d.id].alt = ''), (b.qa[d.id].src = d.c));
              }
        }),
        (b.fb = function (a) {
          b.i || b.Tb(), b.i.push(a), (b.ja = b.A()), b.Ya();
        }),
        (b.Tb = function () {
          (b.i = b.Wb()), b.i || (b.i = []);
        }),
        (b.Wb = function () {
          var a, d;
          if (b.pa()) {
            try {
              (d = c.localStorage.getItem(b.na())) && (a = c.JSON.parse(d));
            } catch (e) {}
            return a;
          }
        }),
        (b.pa = function () {
          var a = !0;
          return (b.trackOffline && b.offlineFilename && c.localStorage && c.JSON) || (a = !1), a;
        }),
        (b.Oa = function () {
          var a = 0;
          return b.i && (a = b.i.length), b.l && a++, a;
        }),
        (b.U = function () {
          if (!b.l || (b.v && b.v.complete && b.v.D && b.v.R(), !b.l))
            if (((b.Pa = d), b.oa)) b.ja > b.N && b.Wa(b.i), b.ra(500);
            else {
              var a = b.Fb();
              a > 0 ? b.ra(a) : (a = b.Ma()) && ((b.l = 1), b.Xb(a), b.$b(a));
            }
        }),
        (b.ra = function (a) {
          b.Pa || (a || (a = 0), (b.Pa = setTimeout(b.U, a)));
        }),
        (b.Fb = function () {
          var a;
          return !b.trackOffline || 0 >= b.offlineThrottleDelay
            ? 0
            : ((a = b.A() - b.Ua), b.offlineThrottleDelay < a ? 0 : b.offlineThrottleDelay - a);
        }),
        (b.Ma = function () {
          return 0 < b.i.length ? b.i.shift() : void 0;
        }),
        (b.Xb = function (a) {
          if (b.debugTracking) {
            var c = 'AppMeasurement Debug: ' + a;
            a = a.split('&');
            var d;
            for (d = 0; d < a.length; d++) c += '\n\t' + b.unescape(a[d]);
            b.C(c);
          }
        }),
        (b.xa = function () {
          return b.marketingCloudVisitorID || b.analyticsVisitorID;
        }),
        (b.X = !1);
      var i;
      try {
        i = JSON.parse('{"x":"y"}');
      } catch (j) {
        i = null;
      }
      i && 'y' == i.x
        ? ((b.X = !0),
          (b.W = function (a) {
            return JSON.parse(a);
          }))
        : c.$ && c.$.parseJSON
        ? ((b.W = function (a) {
            return c.$.parseJSON(a);
          }),
          (b.X = !0))
        : (b.W = function () {
            return null;
          }),
        (b.$b = function (a) {
          var e, f, g;
          if (
            (b.nb(a) &&
              ((f = 1),
              (e = {
                send: function (a) {
                  (b.useBeacon = !1), navigator.sendBeacon(a) ? e.R() : e.ha();
                },
              })),
            !e &&
              b.xa() &&
              2047 < a.length &&
              (b.bb() && ((f = 2), (e = new XMLHttpRequest())),
              e &&
                ((b.AudienceManagement && b.AudienceManagement.isReady()) ||
                  0 != b.usePostbacks) &&
                (b.X ? (e.Ha = !0) : (e = 0))),
            !e && b.fc && (a = a.substring(0, 2047)),
            !e &&
              b.d.createElement &&
              (0 != b.usePostbacks || (b.AudienceManagement && b.AudienceManagement.isReady())) &&
              (e = b.d.createElement('SCRIPT')) &&
              'async' in e &&
              ((g = (g = b.d.getElementsByTagName('HEAD')) && g[0] ? g[0] : b.d.body)
                ? ((e.type = 'text/javascript'), e.setAttribute('async', 'async'), (f = 3))
                : (e = 0)),
            e ||
              ((e = new Image()),
              (e.alt = ''),
              e.abort ||
                'undefined' == typeof c.InstallTrigger ||
                (e.abort = function () {
                  e.src = d;
                })),
            (e.Va = Date.now()),
            (e.Ja = function () {
              try {
                e.D && (clearTimeout(e.D), (e.D = 0));
              } catch (a) {}
            }),
            (e.onload = e.R = function () {
              if (
                (e.Va && (b.ka = Date.now() - e.Va),
                b.gb(a),
                e.Ja(),
                b.Jb(),
                b.da(),
                (b.l = 0),
                b.U(),
                e.Ha)
              ) {
                e.Ha = !1;
                try {
                  b.doPostbacks(b.W(e.responseText));
                } catch (c) {}
              }
            }),
            (e.onabort = e.onerror = e.ha = function () {
              e.Ja(),
                (b.trackOffline || b.oa) && b.l && b.i.unshift(b.Ib),
                (b.l = 0),
                b.ja > b.N && b.Wa(b.i),
                b.da(),
                b.ra(500);
            }),
            (e.onreadystatechange = function () {
              4 == e.readyState && (200 == e.status ? e.R() : e.ha());
            }),
            (b.Ua = b.A()),
            1 === f)
          )
            e.send(a);
          else if (2 === f)
            (g = a.indexOf('?')),
              (f = a.substring(0, g)),
              (g = a.substring(g + 1)),
              (g = g.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, '')),
              e.open('POST', f, !0),
              (e.withCredentials = !0),
              e.send(g);
          else if (((e.src = a), 3 === f)) {
            if (b.Sa)
              try {
                g.removeChild(b.Sa);
              } catch (h) {}
            g.firstChild ? g.insertBefore(e, g.firstChild) : g.appendChild(e), (b.Sa = b.v);
          }
          (e.D = setTimeout(function () {
            e.D && (e.complete ? e.R() : (b.trackOffline && e.abort && e.abort(), e.ha()));
          }, 5000)),
            (b.Ib = a),
            (b.v = c['s_i_' + b.replace(b.account, ',', '_')] = e),
            ((b.useForcedLinkTracking && b.J) || b.bodyClickFunction) &&
              (b.forcedLinkTrackingTimeout || (b.forcedLinkTrackingTimeout = 250),
              (b.ea = setTimeout(b.da, b.forcedLinkTrackingTimeout)));
        }),
        (b.nb = function (a) {
          var c = !1;
          return (
            navigator.sendBeacon && (b.pb(a) ? (c = !0) : b.useBeacon && (c = !0)),
            b.yb(a) && (c = !1),
            c
          );
        }),
        (b.pb = function (a) {
          return a && 0 < a.indexOf('pe=lnk_e') ? !0 : !1;
        }),
        (b.yb = function (a) {
          return 64000 <= a.length;
        }),
        (b.bb = function () {
          return 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
            ? !0
            : !1;
        }),
        (b.Jb = function () {
          if (b.pa() && !(b.Ta > b.N))
            try {
              c.localStorage.removeItem(b.na()), (b.Ta = b.A());
            } catch (a) {}
        }),
        (b.Wa = function (a) {
          if (b.pa()) {
            b.Ya();
            try {
              c.localStorage.setItem(b.na(), c.JSON.stringify(a)), (b.N = b.A());
            } catch (d) {}
          }
        }),
        (b.Ya = function () {
          if (b.trackOffline)
            for (
              (!b.offlineLimit || 0 >= b.offlineLimit) && (b.offlineLimit = 10);
              b.i.length > b.offlineLimit;

            )
              b.Ma();
        }),
        (b.forceOffline = function () {
          b.oa = !0;
        }),
        (b.forceOnline = function () {
          b.oa = !1;
        }),
        (b.na = function () {
          return b.offlineFilename + '-' + b.visitorNamespace + b.account;
        }),
        (b.A = function () {
          return new Date().getTime();
        }),
        (b.Qa = function (a) {
          return (
            (a = a.toLowerCase()),
            0 != a.indexOf('#') &&
            0 != a.indexOf('about:') &&
            0 != a.indexOf('opera:') &&
            0 != a.indexOf('javascript:')
              ? !0
              : !1
          );
        }),
        (b.setTagContainer = function (a) {
          var c, d, e;
          for (b.ac = a, c = 0; c < b._il.length; c++)
            if ((d = b._il[c]) && 's_l' == d._c && d.tagContainerName == a) {
              if ((b.S(d), d.lmq))
                for (c = 0; c < d.lmq.length; c++) (e = d.lmq[c]), b.loadModule(e.n);
              if (d.ml)
                for (e in d.ml)
                  if (b[e])
                    for (c in ((a = b[e]), (e = d.ml[e])))
                      !Object.prototype[c] &&
                        ('function' != typeof e[c] || 0 > ('' + e[c]).indexOf('s_c_il')) &&
                        (a[c] = e[c]);
              if (d.mmq)
                for (c = 0; c < d.mmq.length; c++)
                  (e = d.mmq[c]),
                    b[e.m] &&
                      ((a = b[e.m]),
                      a[e.f] &&
                        'function' == typeof a[e.f] &&
                        (e.a ? a[e.f].apply(a, e.a) : a[e.f].apply(a)));
              if (d.tq) for (c = 0; c < d.tq.length; c++) b.track(d.tq[c]);
              d.s = b;
              break;
            }
        }),
        (b.Util = {
          urlEncode: b.escape,
          urlDecode: b.unescape,
          cookieRead: b.cookieRead,
          cookieWrite: b.cookieWrite,
          getQueryParam: function (a, d, e, f) {
            var g,
              h = '';
            return (
              d || (d = b.pageURL ? b.pageURL : c.location),
              (e = e ? e : '&'),
              a && d
                ? ((d = '' + d),
                  (g = d.indexOf('?')),
                  0 > g
                    ? h
                    : ((d = e + d.substring(g + 1) + e),
                      f && (0 <= d.indexOf(e + a + e) || 0 <= d.indexOf(e + a + '=' + e))
                        ? void 0
                        : ((g = d.indexOf('#')),
                          g >= 0 && (d = d.substr(0, g) + e),
                          (g = d.indexOf(e + a + '=')),
                          0 > g
                            ? h
                            : ((d = d.substring(g + e.length + a.length + 1)),
                              (g = d.indexOf(e)),
                              g >= 0 && (d = d.substring(0, g)),
                              0 < d.length && (h = b.unescape(d)),
                              h))))
                : h
            );
          },
          getIeVersion: function () {
            return document.documentMode ? document.documentMode : b.ya() ? 7 : null;
          },
        }),
        (b.F = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(
          ' '
        )),
        (b.g = b.F.concat(
          'purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(
            ' '
          )
        )),
        (b.la = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
          ' '
        )),
        (b.O = b.la.slice(0)),
        (b.Ga = 'account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement'.split(
          ' '
        ));
      for (e = 0; 250 >= e; e++)
        76 > e && (b.g.push('prop' + e), b.O.push('prop' + e)),
          b.g.push('eVar' + e),
          b.O.push('eVar' + e),
          6 > e && b.g.push('hier' + e),
          4 > e && b.g.push('list' + e);
      (e = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a'.split(
        ' '
      )),
        (b.g = b.g.concat(e)),
        (b.F = b.F.concat(e)),
        (b.ssl = 0 <= c.location.protocol.toLowerCase().indexOf('https')),
        (b.charSet = 'UTF-8'),
        (b.contextData = {}),
        (b.writeSecureCookies = !1),
        (b.offlineThrottleDelay = 0),
        (b.offlineFilename = 'AppMeasurement.offline'),
        (b.P = 's_sq'),
        (b.Ua = 0),
        (b.ja = 0),
        (b.N = 0),
        (b.Ta = 0),
        (b.linkDownloadFileTypes =
          'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx'),
        (b.w = c),
        (b.d = c.document),
        (b.da = function () {
          b.ea && (c.clearTimeout(b.ea), (b.ea = d)),
            b.bodyClickTarget && b.J && b.bodyClickTarget.dispatchEvent(b.J),
            b.bodyClickFunction &&
              ('function' == typeof b.bodyClickFunction
                ? b.bodyClickFunction()
                : b.bodyClickTarget &&
                  b.bodyClickTarget.href &&
                  (b.d.location = b.bodyClickTarget.href)),
            (b.bodyClickTarget = b.J = b.bodyClickFunction = 0);
        }),
        (b.Xa = function () {
          const $___old_0ae47e5a2926266d = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_0ae47e5a2926266d)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_9d7b4eb662ee43f5.userAgent
              ));
            return function () {
              (b.b = b.d.body),
                b.b
                  ? ((b.r = function (a) {
                      var d, e, f, g, h;
                      if (
                        !((b.d && b.d.getElementById('cppXYctnr')) || (a && a['s_fe_' + b._in]))
                      ) {
                        if (b.Ia) {
                          if (!b.useForcedLinkTracking)
                            return (
                              b.b.removeEventListener('click', b.r, !0),
                              void (b.Ia = b.useForcedLinkTracking = 0)
                            );
                          b.b.removeEventListener('click', b.r, !1);
                        } else b.useForcedLinkTracking = 0;
                        b.clickObject = a.srcElement ? a.srcElement : a.target;
                        try {
                          if (
                            !b.clickObject ||
                            (b.M && b.M == b.clickObject) ||
                            !(
                              b.clickObject.tagName ||
                              b.clickObject.parentElement ||
                              b.clickObject.parentNode
                            )
                          )
                            b.clickObject = 0;
                          else {
                            var i = (b.M = b.clickObject);
                            if (
                              (b.ia && (clearTimeout(b.ia), (b.ia = 0)),
                              (b.ia = setTimeout(function () {
                                b.M == i && (b.M = 0);
                              }, 10000)),
                              (f = b.Oa()),
                              b.track(),
                              f < b.Oa() && b.useForcedLinkTracking && a.target)
                            ) {
                              for (
                                g = a.target;
                                g &&
                                g != b.b &&
                                'A' != g.tagName.toUpperCase() &&
                                'AREA' != g.tagName.toUpperCase();

                              )
                                g = g.parentNode;
                              if (
                                g &&
                                ((h = g.href),
                                b.Qa(h) || (h = 0),
                                (e = g.target),
                                a.target.dispatchEvent &&
                                  h &&
                                  (!e ||
                                    '_self' == e ||
                                    '_top' == e ||
                                    '_parent' == e ||
                                    (c.name && e == c.name)))
                              ) {
                                try {
                                  d = b.d.createEvent('MouseEvents');
                                } catch (j) {
                                  d = new c.MouseEvent();
                                }
                                if (d) {
                                  try {
                                    d.initMouseEvent(
                                      'click',
                                      a.bubbles,
                                      a.cancelable,
                                      a.view,
                                      a.detail,
                                      a.screenX,
                                      a.screenY,
                                      a.clientX,
                                      a.clientY,
                                      a.ctrlKey,
                                      a.altKey,
                                      a.shiftKey,
                                      a.metaKey,
                                      a.button,
                                      a.relatedTarget
                                    );
                                  } catch (k) {
                                    d = 0;
                                  }
                                  d &&
                                    ((d['s_fe_' + b._in] = d.s_fe = 1),
                                    a.stopPropagation(),
                                    a.stopImmediatePropagation && a.stopImmediatePropagation(),
                                    a.preventDefault(),
                                    (b.bodyClickTarget = a.target),
                                    (b.J = d));
                                }
                              }
                            }
                          }
                        } catch (l) {
                          b.clickObject = 0;
                        }
                      }
                    }),
                    b.b && b.b.attachEvent
                      ? b.b.attachEvent('onclick', b.r)
                      : b.b &&
                        b.b.addEventListener &&
                        (navigator &&
                          ((0 <= navigator.userAgent.indexOf('WebKit') && b.d.createEvent) ||
                            (0 <= navigator.userAgent.indexOf('Firefox/2') && c.MouseEvent)) &&
                          ((b.Ia = 1),
                          (b.useForcedLinkTracking = 1),
                          b.b.addEventListener('click', b.r, !0)),
                        b.b.addEventListener('click', b.r, !1)))
                  : setTimeout(b.Xa, 30);
            }.apply(this, arguments);
          } finally {
            if ($___old_0ae47e5a2926266d)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_0ae47e5a2926266d
              ));
          }
        }),
        (b.fc = b.ya()),
        b.Kb(),
        b.mc ||
          (a
            ? b.setAccount(a)
            : b.C('Error, missing Report Suite ID in AppMeasurement initialization'),
          b.Xa(),
          b.loadModule('ActivityMap'));
    }
    AppMeasurement = $___var_d1029b22c5d76f56;
    ({}.constructor.defineProperty(AppMeasurement, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement',
      writable: false,
    }));
    function $___var_4edff2a5e5b65d41 (a) {
      var b,
        c,
        d,
        e,
        f,
        g = window.s_c_il,
        h = a.split(','),
        i = 0;
      if (g)
        for (c = 0; !i && c < g.length; ) {
          if (((b = g[c]), 's_c' == b._c && (b.account || b.oun)))
            if (b.account && b.account == a) i = 1;
            else
              for (
                d = b.account ? b.account : b.oun,
                  d = b.allAccounts ? b.allAccounts : d.split(','),
                  e = 0;
                e < h.length;
                e++
              )
                for (f = 0; f < d.length; f++) h[e] == d[f] && (i = 1);
          c++;
        }
      return i ? b.setAccount && b.setAccount(a) : (b = new AppMeasurement(a)), b;
    }
    s_gi = $___var_4edff2a5e5b65d41;
    ({}.constructor.defineProperty(s_gi, 'name', {
      configurable: true,
      enumerable: false,
      value: 's_gi',
      writable: false,
    }));
    function $___var_be5040396ae37e15 () {
      var a,
        b,
        c,
        d = window,
        e = d.s_giq;
      if (e)
        for (a = 0; a < e.length; a++)
          (b = e[a]), (c = s_gi(b.oun)), c.setAccount(b.un), c.setTagContainer(b.tagContainerName);
      d.s_giq = 0;
    }
    s_pgicq = $___var_be5040396ae37e15;
    ({}.constructor.defineProperty(s_pgicq, 'name', {
      configurable: true,
      enumerable: false,
      value: 's_pgicq',
      writable: false,
    }));
    if ((s_getLoadTime(), 'undefined' != typeof metaData)) {
      var s_account = metaData.report_suite;
      s_account = s_account ? s_account : metaData.repsuite;
    } else if ('undefined' != typeof window.reportsuite_id) var s_account = window.reportsuite_id;
    else if ('undefined' != typeof window.repsuite) var s_account = window.repsuite;
    else var s_account = 'symanteccom';
    'undefined' == typeof _numeric_ && (_numeric_ = {}),
      'undefined' == typeof _numeric_.utils && (_numeric_.utils = {});
    var $___var_a5e419e42ad506ea = s_gi(s_account);
    s = $___var_a5e419e42ad506ea;
    for (
      s.charSet = 'UTF-8',
        'undefined' == typeof PageN && (PageN = ''),
        s.trackDownloadLinks = !0,
        s.trackExternalLinks = !0,
        s.trackInlineStats = !0,
        s.linkDownloadFileTypes =
          'exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,gz,gg,iso,kmz,xml,mp4,m4a,air,ppt,pptx,docx,xlsx,m4v,dmg,tar,txt,jpg,jpeg,png,gif,tiff,bmp,rar,msi,rpm,swf,1of2,2of2,1of3,2of3,3of3,1of4,2of4,3of4,4of4,1of5,2of5,3of5,4of5,5of5',
        s.linkInternalFilters =
          '#,javascript:,norton.com,nortonstore.jp,nortonstore.cn,nortonstore.hk,nortonstore.kr,nortonstore.tw,backup.com,ustudio.com,lifelock.com,nortonlifelock.com,surfeasy.com',
        s.linkLeaveQueryString = !1,
        s.linkTrackVars = 'None',
        s.linkTrackEvents = 'None',
        s.trackingServer = 'om.norton.com',
        s.trackingServerSecure = 'oms.norton.com',
        s.dc = 112,
        s.wd = window,
        s.eVar47 = 's_code',
        'undefined' != typeof Visitor &&
          (s.visitor = Visitor.getInstance('67C716D751E567F70A490D4C@AdobeOrg')),
        s.setCustomEvent = function (a) {
          var b = this;
          'undefined' != typeof b.events && b.events.length
            ? b.events.indexOf(a) < 0 && (b.events += ',' + a)
            : ('undefined' == typeof b.events || b.events.indexOf(a) < 0) && (b.events = a);
        },
        _numeric_.utils.getCookie = function (a) {
          var b = document.cookie.indexOf(a + '='),
            c = b + a.length + 1;
          if (!b && a != document.cookie.substring(0, a.length)) return null;
          if (-1 == b) return null;
          var d = document.cookie.indexOf(';', c);
          return (
            -1 == d && (d = document.cookie.length), decodeURI(document.cookie.substring(c, d))
          );
        },
        _numeric_.utils.deleteCookie = function (a, b, c) {
          _numeric_.utils.getCookie(a) &&
            (document.cookie =
              a +
              '=' +
              (c ? ';path=' + c : '') +
              (b ? ';domain=' + b : '') +
              ';expires=Thu, 01-Jan-1970 00:00:01 GMT');
        },
        _numeric_.utils.cookieIngredients = function (a, b) {
          (this.supercookie_name = a),
            (this.name_value_delim = '~'),
            (this.cookie_delim = '|'),
            (this.chips = {}),
            'undefined' == typeof b
              ? (this.expires = null)
              : ((expiration_date = new Date()),
                expiration_date.setDate(expiration_date.getDate() + b),
                (this.expires = expiration_date)),
            (this.add = function (a, b) {
              this.chips[a] = encodeURI(b);
            }),
            (this.eat = function (a) {
              for (var b in this.chips)
                if (b.indexOf(a) >= 0) {
                  delete this.chips[b];
                  break;
                }
            }),
            (this.getChip = function (a) {
              var b = '';
              for (var c in this.chips)
                if (c.indexOf(a) >= 0) return (b = decodeURI(this.chips[c]));
              return '';
            }),
            (this.setChip = function (a, b, c) {
              this.add(a, b), this.bake(this.supercookie_name, this.getAllChips(), this.expires);
            }),
            (this.fill = function (a) {
              if (a)
                for (var b = a.split(this.cookie_delim), c = 0; c < b.length; ++c) {
                  var d = b[c].split(this.name_value_delim);
                  this.add(d[0], d[1]);
                }
            }),
            (this.bake = function (a, b, c) {
              var d = '/',
                e = '',
                f = document.domain,
                g = f.split('.');
              g.length;
              e = 3 == g.length ? g[1] + '.' + g[2] : f;
              var h = !1,
                i =
                  a +
                  '=' +
                  b +
                  (null == c ? '' : '; expires=' + c.toGMTString()) +
                  (null == d ? '' : '; path=' + d) +
                  (null == e ? '' : '; domain=' + e) +
                  (1 == h ? '; secure' : '');
              document.cookie = i;
            }),
            (this.getAllChips = function () {
              var a = new Array();
              for (var b in this.chips) a.push(b + this.name_value_delim + this.chips[b]);
              return (tmp = a.join(this.cookie_delim)), tmp;
            }),
            (this.deleteChip = function (a) {
              this.getChip(a) &&
                (this.eat(a),
                this.bake(this.supercookie_name, this.getAllChips()),
                0 == this.size && _numeric_.utils.deleteCookie(this.supercookie_name));
            }),
            (this.size = function () {
              var a = 0;
              for (var b in this.chips) a++;
              return a;
            });
        },
        _numeric_.utils.superCookie = new _numeric_.utils.cookieIngredients('naf'),
        _numeric_.utils.superCookie.fill(
          _numeric_.utils.getCookie(_numeric_.utils.superCookie.supercookie_name)
        ),
        location.hostname.indexOf('norton.com') > -1 &&
          ((_numeric_.utils.superStackCookie = new _numeric_.utils.cookieIngredients(
            'channelStack',
            365
          )),
          _numeric_.utils.superStackCookie.fill(
            _numeric_.utils.getCookie(_numeric_.utils.superStackCookie.supercookie_name)
          )),
        trackCustomDownload = function (a, b, c) {
          var d = 'undefined' == typeof window.s ? s_gi(s_account) : window.s;
          (d.linkTrackVars = 'events,prop33,eVar1,prop46,prop47,prop48,eVar49'),
            (d.linkTrackEvents = 'event1'),
            (d.prop33 = d.eVar1 = a),
            (d.prop48 = d.eVar49 = b),
            (d.prop46 = c),
            (d.prop47 = 'download'),
            (d.events = 'event1'),
            d.tl(this, 'd', a);
        },
        s.trackSSOPage = function () {
          var a = this,
            b = a.pageName.split(':');
          (b =
            'undefined' != typeof metaData &&
            metaData.site_section.toLowerCase().indexOf('norton.com') > -1
              ? b.slice(0, 2)
              : b.slice(0, 3)),
            b.push('sso'),
            (a.eVar18 = a.pageName = b.join(':')),
            (a.linkTrackVars = ''),
            (a.linkTrackEvents = ''),
            a.t();
        },
        'undefined' != typeof jQuery &&
          jQuery(document).ready(function () {
            jQuery(function () {
              jQuery('[data-tracksso]').length &&
                jQuery('[data-tracksso]').each(function (a) {
                  jQuery(this).click(function () {
                    s.trackSSOPage();
                  });
                });
            });
          }),
        'undefined' != typeof metaData &&
          'undefined' != typeof metaData.site_section &&
          metaData.site_section.toLowerCase().indexOf('norton.com') > -1 &&
          ((s.pageName = metaData.page_name),
          (s.server = 'symantec'),
          (s.pageType = metaData.page_type),
          (s.prop2 = metaData.site_country),
          (s.prop3 = metaData.site_language),
          (s.prop14 = metaData.now_trafficsource_cookie_name),
          (s.prop17 = metaData.now_current_subchannel),
          (s.prop41 = metaData.site_section),
          (s.prop46 = metaData.content_format),
          (s.prop47 = metaData.content_type),
          (s.prop48 = metaData.content_title),
          (s.prop49 = metaData.site_section_us),
          (s.products = metaData.products),
          (s.eVar5 = metaData.now_vendor_code),
          'undefined' != typeof metaData.bkSegments &&
            (s.eVar15 = 'norton:bk:' + metaData.bkSegments),
          (s.eVar16 = metaData.now_trafficsource_cookie_name),
          (s.eVar24 = metaData.now_original_subchannel),
          (s.eVar27 = metaData.site_country),
          (s.eVar28 = metaData.site_language),
          (s.eVar33 = metaData.now_current_subchannel),
          (s.eVar41 = metaData.site_section),
          (s.eVar42 = metaData.product_name),
          (s.eVar48 = metaData.site_section_us),
          (s.eVar49 = metaData.content_title),
          (s.eVar66 = metaData.now_program_type),
          (s.eVar17 = metaData['search results filter type']),
          'undefined' != typeof $ &&
            ($(".icon-social[href*='.facebook']").on('click', function () {
              (s.linkTrackVars = 'eVar18,eVar49,events'),
                (s.linkTrackEvents = 'event26'),
                (s.eVar49 = $data('content_title') + ':facebook'),
                (s.eVar18 = s.pageName),
                (s.events = 'event26'),
                s.tl('true', 'o', 'facebook'),
                (s.events = '');
            }),
            $(".icon-social[href*='twitter.']").on('click', function () {
              (s.linkTrackVars = 'eVar18,eVar49,events'),
                (s.linkTrackEvents = 'event26'),
                (s.eVar49 = $data('content_title') + ':twitter'),
                (s.eVar18 = s.pageName),
                (s.events = 'event26'),
                s.tl('true', 'o', 'twitter'),
                (s.events = '');
            }),
            $(".icon-social[href*='plus.google']").on('click', function () {
              (s.linkTrackVars = 'eVar18,eVar49,events'),
                (s.linkTrackEvents = 'event26'),
                (s.eVar49 = $data('content_title') + ':googleplus'),
                (s.eVar18 = s.pageName),
                (s.events = 'event26'),
                s.tl('true', 'o', 'googleplus'),
                (s.events = '');
            }),
            $(".icon-social[href*='.youtube.']").on('click', function () {
              (s.linkTrackVars = 'eVar18,eVar49,events'),
                (s.linkTrackEvents = 'event26'),
                (s.eVar49 = $data('content_title') + ':youtube'),
                (s.eVar18 = s.pageName),
                (s.events = 'event26'),
                s.tl('true', 'o', 'youtube'),
                (s.events = '');
            }),
            $(".icon-social[href*='.linkedin.']").on('click', function () {
              (s.linkTrackVars = 'eVar18,eVar49,events'),
                (s.linkTrackEvents = 'event26'),
                (s.eVar49 = $data('content_title') + ':linkedin'),
                (s.eVar18 = s.pageName),
                (s.events = 'event26'),
                s.tl('true', 'o', 'linkedin'),
                (s.events = '');
            })),
          metaData.internal_search_keyword_results_yes &&
            ((s.strippedKeywords = removeTxt(
              'norton:',
              metaData.internal_search_keyword_results_yes
            )),
            (s.strippedKeywords = removeTxt('community:', s.strippedKeywords)),
            (s.prop4 = s.strippedKeywords),
            (s.eVar40 = metaData.internal_search_keyword_results_yes),
            s.setCustomEvent('event31,event30'),
            (s.prop49 = 'Search'),
            (s.eVar48 = 'D=c49')),
          metaData.internal_search_keyword_results_no &&
            ((s.strippedKeywords = removeTxt(
              'norton:',
              metaData.internal_search_keyword_results_no
            )),
            (s.strippedKeywords = removeTxt('community:', s.strippedKeywords)),
            (s.prop4 = 'na:' + s.strippedKeywords),
            (s.eVar40 = metaData.internal_search_keyword_results_no),
            s.setCustomEvent('event30'),
            (s.prop49 = 'Search'),
            (s.eVar48 = 'D=c49')),
          s.prop4 &&
            'undefined' != typeof jQuery &&
            jQuery(document).ready(function (a) {
              jQuery('.l a').length > 0 &&
                jQuery('.l a').on('click', function (a) {
                  a.preventDefault();
                  var b = this.href;
                  s.getQueryParam('currentIndex')
                    ? (s.currentIndex = 10 * parseInt(s.getQueryParam('currentIndex') - 1))
                    : (s.currentIndex = 0),
                    (searchLinks = jQuery('.l a')),
                    (s.itemIndex =
                      parseInt(searchLinks.index(jQuery(this))) + parseInt(s.currentIndex) + 1),
                    internalSearchLinkClick_Natural(s.itemIndex, b);
                });
            })),
        s.events &&
          s.events.toLowerCase().indexOf('purchase') > -1 &&
          (s.prop41 = s.eVar41 = 'purchase'),
        s.usePlugins = !0,
        s.doPlugins = s_doPlugins,
        s.channelParticipationStacker = function (a, b, c, d) {
          if (
            location.hostname.indexOf('norton.com') > -1 &&
            'undefined' != typeof a &&
            a.length > 0
          ) {
            if (_numeric_.utils.superStackCookie.getChip(b)) {
              var e = _numeric_.utils.superStackCookie.getChip(b),
                f = e.split(d),
                g = f[f.length - 1];
              return (
                f.length < c &&
                  g != a &&
                  ((e = e + d + a), _numeric_.utils.superStackCookie.setChip(b, e)),
                e
              );
            }
            return _numeric_.utils.superStackCookie.setChip(b, a), a;
          }
        },
        s.getQueryParam = new Function(
          'p',
          'd',
          'u',
          "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v"
        ),
        s.p_gpv = new Function(
          'k',
          'u',
          "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v"
        ),
        s.p_gvf = new Function(
          't',
          'k',
          "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''"
        ),
        s.epa = new Function(
          'x',
          "var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');return tcf(x)}else return unescape(x)}return y"
        ),
        s.rep = new Function(
          'x',
          'o',
          'n',
          "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x"
        ),
        s.trackTNT = new Function(
          'v',
          'p',
          'b',
          "var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s.getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;"
        ),
        s.getNewRepeat = new Function(
          'd',
          'cn',
          "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"
        ),
        s.getValOnce = new Function(
          'v',
          'c',
          'e',
          't',
          "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v"
        ),
        s.split = new Function(
          'l',
          'd',
          'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
        ),
        s.getPreviousValue = new Function(
          'v',
          'c',
          'el',
          "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.Util.cookieRead(c)) r=s.Util.cookieRead(c);v?s.Util.cookieWrite(c,v,t):s.Util.cookieWrite(c,'no value',t);return r}}}}}else{if(s.Util.cookieRead(c)) r=s.Util.cookieRead(c);v?s.Util.cookieWrite(c,v,t):s.Util.cookieWrite(c,'no value',t);return r}"
        ),
        s.pt = function (a, b, c, d) {
          for (var e, f, g = this, h = a, i = 0; h; ) {
            if (
              ((e = h.indexOf(b)),
              (e = 0 > e ? h.length : e),
              (h = h.substring(0, e)),
              (f = g[c](h, d)))
            )
              return f;
            (i += e + b.length), (h = a.substring(i, a.length)), (h = i < a.length ? h : '');
          }
          return '';
        },
        s.eVar65 = (function () {
          if (
            document.cookie.indexOf('WRUID') > -1 &&
            -1 == document.cookie.indexOf('WRIgnore=true')
          ) {
            for (var a = document.cookie.split(';'), b = 0, c = 0, d = 0; d < a.length; d++) {
              for (var e = a[d]; ' ' == e.charAt(0); ) e = e.substring(1, e.length);
              e.indexOf('CT_Data') > -1 && (b = e.substring(e.indexOf('apv_')).split('_')[1]),
                ((1 == (document.cookie.match(/WRUID/g) || []).length &&
                  e.indexOf('WRUID') > -1) ||
                  (e.indexOf('WRUID') > -1 &&
                    (document.cookie.match(/WRUID/g) || []).length > 1 &&
                    -1 == e.indexOf('WRUID='))) &&
                  (c = e.split('=')[1]);
            }
            return 0 == c || 0 == b ? null : c + '.' + b;
          }
          return null;
        })(),
        s.setVisitorIdVariables = function (a) {
          var a = this;
          try {
            var b = '';
            'undefined' != typeof window.visitor
              ? (b = window.visitor.getMarketingCloudVisitorID())
              : 'undefined' != typeof a.visitor && (b = a.visitor.getMarketingCloudVisitorID()),
              null != b && '' != b.trim() ? (a.eVar57 = b) : (a.eVar57 = 'MCID not available'),
              (a.prop75 = 'D=v57');
          } catch (c) {
            window.console && console.warn('Analytics Exception: s.setVisitorIdVariables: ' + c);
          }
        },
        _numeric_.utils.moxie_events = [
          'GoMoxie:widgetOpened',
          'GoMoxie:widgetClosed',
          'GoMoxie:proactiveOffer',
          'GoMoxie:widget:chat:prechatQuestionnaireComplete',
          'GoMoxie:widget:chat:chatSessionStarted',
          'GoMoxie:widget:chat:agentJoinedSession',
        ],
        _numeric_.utils.handleMoxieEvent = function (a) {
          var b = '',
            c = '',
            d = '';
          if ('undefined' != typeof a)
            switch (a.type) {
              case 'GoMoxie:widgetOpened':
                'undefined' != typeof a.detail &&
                  'chat' == a.detail.widgetName &&
                  'button' == a.detail.source &&
                  ((b = 'userinitiated'), (c = 'chat displayed'), (d = 'event72'));
                break;
              case 'GoMoxie:widgetClosed':
                'undefined' != typeof a.detail &&
                  'chat' == a.detail.widgetName &&
                  ((c = 'chat closed'), (d = 'event74'));
                break;
              case 'GoMoxie:proactiveOffer':
                'undefined' != typeof a.detail &&
                  'chat' == a.detail.widgetName &&
                  ((b = 'systeminitiated'),
                  'displayed' == a.detail.status
                    ? ((c = 'chat displayed'), (d = 'event72'))
                    : 'accepted' == a.detail.status
                    ? ((c = 'chat accepted'), (d = 'event99'))
                    : 'declined' == a.detail.status && ((c = 'chat declined'), (d = 'event100')));
                break;
              case 'GoMoxie:widget:chat:chatSessionStarted':
                (c = 'chat session started'), (d = 'event101');
                break;
              case 'GoMoxie:widget:chat:agentJoinedSession':
                (c = 'agent joined session'), (d = 'event102');
            }
          '' != c &&
            ('' != b
              ? s.Util.cookieWrite('moxie_chat_type', b)
              : (b = s.Util.cookieRead('moxie_chat_type')),
            (s.eVar61 = 'chatmoxie-' + b),
            'undefined' != typeof a.detail &&
              ((s.eVar37 = 'undefined' != typeof a.detail.rule ? a.detail.rule.name : ''),
              (s.eVar7 = 'undefined' != typeof a.detail.sessionId ? a.detail.sessionId : '')),
            (s.pageName = ''),
            (s.prop59 = ''),
            s.eVar41 && !s.eVar41.startsWith('D=')
              ? (s.prop59 = s.pageName = s.eVar41 + ':')
              : s.prop41 && !s.prop41.startsWith('D=') && (s.prop59 = s.pageName = s.prop41 + ':'),
            s.eVar27 && !s.eVar27.startsWith('D=')
              ? (s.pageName += s.eVar27 + ':')
              : s.prop2 && !s.prop2.startsWith('D=') && (s.pageName += s.prop2 + ':'),
            (s.pageName += 'chatmoxie:' + b + ':' + c),
            (s.prop59 += 'chatmoxie:' + b + ':' + c),
            (s.events = d),
            s.t(),
            (s.events = ''));
        },
        i = 0;
      i < _numeric_.utils.moxie_events.length;
      i++
    )
      window.addEventListener(_numeric_.utils.moxie_events[i], _numeric_.utils.handleMoxieEvent);
    (s.maxDelay = 750),
      s.loadModule('Integrate'),
      (function () {
        var a = [];
        (window.uStudio = window.uStudio ? window.uStudio : {}),
          (window.uStudio.Player = window.uStudio.Player ? window.uStudio.Player : {}),
          (window.uStudio.Player.registerPlayerCallback = function (b) {
            a.push(b);
          });
        var b = {},
          c = function (a, b, c) {
            (this.id = a),
              (this.source = b),
              (this.origin = c),
              (this.subscribers = {}),
              (this.video_title = '');
          };
        (c.prototype.handle_event = function (a, b) {
          for (var c = this.subscribers[a] || [], d = 0; d < c.length; d++) c[d].apply(this, b);
        }),
          (c.prototype.subscribe = function (a, b) {
            this.subscribers[a] || (this.subscribers[a] = []), this.subscribers[a].push(b);
          }),
          (c.prototype.broadcast = function (a, b) {
            (b = b ? b : []),
              this.source.postMessage(
                window.JSON.stringify({ event: a, arguments: b }),
                this.origin
              );
          });
        var d = function (d) {
            try {
              var e = JSON.parse(d.data);
            } catch (f) {
              return;
            }
            if (null != e) {
              var g = e.id,
                h = b[g];
              if ('uStudio.eventsReady' === e.event) {
                g || (g = 'player-' + parseInt(Math.floor(100000 * Math.random()), 10)),
                  b[g] || ((b[g] = new c(g, d.source, d.origin)), (h = b[g])),
                  h.broadcast('uStudio.pageReady', [{ url: window.location.href, id: g }]);
                for (var i = 0; i < a.length; i++) a[i](h);
              } else {
                if (!e.id || !b[g]) return;
                h.handle_event(e.event, e.arguments);
              }
            }
          },
          e = function (a, b) {
            window.attachEvent
              ? window.attachEvent('on' + a, b)
              : window.addEventListener
              ? window.addEventListener(a, b, !1)
              : document.addEventListener(a, b, !1);
          };
        e('message', d);
      })(),
      'undefined' != typeof uStudio &&
        'undefined' != typeof uStudio.Player &&
        uStudio.Player.registerPlayerCallback(function (a) {
          a.subscribe('Playlist.videoSelected', function (b) {
            a.video_title = b.video.name;
          }),
            a.subscribe('Player.durationchange', function (b) {
              a.duration = Math.floor(b.duration);
            }),
            a.subscribe('Player.timeupdate', function (b) {
              a.currentTime = Math.floor(b.currentTime);
            }),
            a.subscribe('Player.playing', function (b) {
              'undefined' != typeof a.start && a.start
                ? s.Media.play(a.video_title, a.currentTime)
                : (s.Media.open(a.video_title, a.duration, 'uStudio'),
                  s.Media.play(a.video_title, 0),
                  (a.start = !0));
            }),
            a.subscribe('Player.paused', function (b) {
              s.Media.stop(a.video_title, a.currentTime);
            }),
            a.subscribe('Player.seeking', function (b) {
              s.Media.stop(a.video_title, a.currentTime);
            }),
            a.subscribe('Player.ended', function (b) {
              s.Media.stop(a.video_title, a.currentTime),
                s.Media.close(a.video_title),
                (a.start = !1);
            });
        }),
      s.loadModule('Media'),
      (s.Media.autoTrack = !1),
      (s.Media.trackWhilePlaying = !0),
      (s.Media.trackVars = 'events,prop48,prop47,eVar49,prop73,eVar62,eVar74'),
      (s.Media.trackEvents =
        'event90,event91,event92,event93,event94,event95,event96,event97,event98'),
      (s.Media.trackMilestones = '10,25,50,75,95'),
      (s.Media.trackUsingContextData = !0),
      (s.Media.contextDataMapping = {
        'a.media.name': 'prop73,eVar62,prop48,eVar49',
        'a.contentType': 'prop47',
        'a.media.view': 'event90',
        'a.media.timePlayed': 'event97',
        'a.media.complete': 'event96',
        'a.media.milestones': {
          10: 'event91',
          25: 'event92',
          50: 'event93',
          75: 'event94',
          95: 'event95',
        },
      }),
      (s.Media.monitor = function (a, b) {
        null !== b.event.match(/MILESTONE|OPEN|CLOSE/gi) &&
          ((a.eVar74 = document.URL),
          null !== b.event.match(/OPEN/gi) ? (a.events = 'event98=' + b.length) : (a.events = ''),
          a.Media.track(b.name));
      }),
      (AppMeasurement.getInstance = s_gi),
      window.s_objectID || (window.s_objectID = 0),
      s_pgicq();
  })();
}
