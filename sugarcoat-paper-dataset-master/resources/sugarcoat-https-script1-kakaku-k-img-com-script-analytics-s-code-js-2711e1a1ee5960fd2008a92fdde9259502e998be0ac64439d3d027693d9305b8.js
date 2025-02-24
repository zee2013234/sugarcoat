var sc_measurementDomains,
  getRSID,
  s_account,
  s,
  s_doPlugins,
  s_getLoadTime,
  AppMeasurement_Module_Media,
  AppMeasurement_Module_ActivityMap,
  AppMeasurement,
  s_gi,
  s_pgicq,
  st_hook_flg,
  t_org,
  sendDataToBI;
{
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
  const $___old_cb2b94318f83533e = {}.constructor.getOwnPropertyDescriptor(
    Navigator.prototype,
    'userAgent'
  );
  try {
    if ($___old_cb2b94318f83533e)
      ({}.constructor.defineProperty(
        Navigator.prototype,
        'userAgent',
        $___stub_47c01efa79e9f191.userAgent
      ));
    (function () {
      var $___var_ab958e8c2ad13d40 = [
        'rex-card.com',
        'ecredit.jaccs.co.jp',
        'link1-kakaku.com',
        'kakakucom-insurance.co.jp',
      ];
      sc_measurementDomains = $___var_ab958e8c2ad13d40;
      var $___var_7d7ddcbe5b19c30c = function () {
        if (!location.host) {
          return 'kakakucomkakakucombot';
        } else {
          var sc_domain = location.host.split('.');
          if (
            sc_domain[sc_domain.length - 2] == 'kakaku' &&
            sc_domain[sc_domain.length - 1] == 'com'
          ) {
            return 'kakakucomkakakucom';
          } else if (sc_measurementDomains.join(',').indexOf(location.host) != -1) {
            return 'kakakucomkakakucom';
          } else {
            return 'kakakucomkakakucombot';
          }
        }
      };
      getRSID = $___var_7d7ddcbe5b19c30c;
      var $___var_a120d964233321bf = getRSID();
      s_account = $___var_a120d964233321bf;
      var $___var_1487840b03fcbb95 = s_gi(s_account);
      s = $___var_1487840b03fcbb95;
      s.charSet = 'UTF-8';
      s.currencyCode = 'JPY';
      s.trackDownloadLinks = false;
      s.trackExternalLinks = false;
      s.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls';
      s.linkInternalFilters = 'javascript:,kakaku.com';
      s.linkLeaveQueryString = false;
      s.linkTrackVars = 'None';
      s.linkTrackEvents = 'None';
      s.visitorNamespace = 'kakakucom';
      s.trackingServer = 'kakakucom.112.2o7.net';
      s.usePlugins = true;
      function $___var_b2d19327850097d9 (s) {
        const $___old_6ebb760fde160d80 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'performance'
          ),
          $___old_8e558bf0ad70aee9 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'sessionStorage'
          );
        try {
          if ($___old_6ebb760fde160d80)
            ({}.constructor.defineProperty(
              window,
              'performance',
              $___stub_2b47892348e4e4b9.performance
            ));
          if ($___old_8e558bf0ad70aee9)
            ({}.constructor.defineProperty(
              window,
              'sessionStorage',
              $___stub_b317e19f866a2da7.sessionStorage
            ));
          return function () {
            s.eVar49 = s.getNewRepeat();
            s.campaign = s.Util.getQueryParam('cid');
            s.eVar48 = s.Util.getQueryParam('lid');
            s.referrer = s.Util.getQueryParam('atref', document.URL);
            s.eVar46 = s.prop1;
            s.eVar47 = s.prop1;
            if (s.Util.getQueryParam('eVar50')) {
              s.eVar50 = s.Util.getQueryParam('eVar50');
            } else {
              s.eVar50 = s.Util.cookieRead('_td');
            }
            s.eVar51 = 'D=fid';
            s.prop53 = 'D=s_vi';
            s.eVar53 = 'D=s_vi';
            s.eVar64 = document.cookie.match(/(^|;\s*)i_puid=([^;]+)/) ? RegExp.$2 : 'guest';
            var now = new Date();
            var nowyear = now.getFullYear();
            var nowmonth = now.getMonth() + 1;
            var nowday = now.getDate();
            if (s.campaign) {
              s.eVar71 = s.campaign + ':' + nowyear + '/' + nowmonth + '/' + nowday;
              s.eVar72 = s.eVar71;
              s.eVar73 = s.eVar71;
              s.eVar74 = s.eVar71;
              s.eVar75 = (function (str) {
                var needles = [
                  'shop_g_',
                  'shop_google_',
                  'shop_o_',
                  'shop_yahoo_',
                  'shop_dsa_',
                  'shop_drmkt_',
                  'shop_im',
                  'ss_g_',
                  'ss_google_',
                  'ss_o_',
                  'ss_yahoo_',
                  'ss_im',
                  'ss_dsa_',
                  'ss_ct_g_',
                  'ss_sl_ig_',
                ];
                if (!str) {
                  return '';
                }
                for (var i in needles) {
                  if (str.indexOf(needles[i]) > -1) {
                    return '';
                  }
                }
                return 'Other Channel';
              })(s.campaign);
            }
            if (s.prop18) {
            } else {
              s.prop18 = s.channel;
            }
            if (s.prop19) {
            } else {
              s.prop19 = s.prop1;
            }
            s.prop39 = 'Ver20190207_pc';
            s.server = document.domain;
            s.linkTrackVars = s.apl(s.linkTrackVars, 'prop39', ',', 1);
            s.linkTrackVars = s.apl(s.linkTrackVars, 'server', ',', 1);
            if (!s.campaign) s.campaign = s.Util.getQueryParam('banner_id');
            if (s.campaign) s.prop48 = s.eVar49 + '_' + s.campaign;
            if (s.c_r('ls')) {
              s.prop61 = s.c_r('ls');
            } else {
              s.prop61 = 'guest';
            }
            s.eVar61 = 'D=c61';
            if (s.c_r('cgmsb') && s.c_r('cgmsr')) {
              s.prop62 = s.c_r('cgmsb') + '_' + s.c_r('cgmsr');
            } else if (s.c_r('cgmsb')) {
              s.prop62 = s.c_r('cgmsb') + '_';
            } else if (s.c_r('cgmsr')) {
              s.prop62 = '_' + s.c_r('cgmsr');
            } else {
              s.prop62 = 'guest';
            }
            s.eVar62 = 'D=c62';
            var checkDtmTag = function () {
              var sc_script = document.getElementsByTagName('script');
              var dtmchk = 'assets.adobedtm.com';
              for (var i = sc_script.length; i > -1; i--) {
                try {
                  if (sc_script[i].getAttribute('src').indexOf(dtmchk) != -1) {
                    return sc_script[i].getAttribute('src').match(/[^\/]+\.js/g)[0];
                    break;
                  }
                } catch (e) {}
              }
            };
            s.prop46 = checkDtmTag() ? 'DTM_ready:' + checkDtmTag() : 'DTM_notready';
            var s_trn_prop1 = encodeURIComponent(s.prop1);
            s.eVar59 = s.getPreviousValue(s_trn_prop1, 'gpv_v59');
            s.eVar59 = decodeURI(s.eVar59);
            try {
              s.performanceTiming('list3');
              s.list3 = '';
            } catch (e) {}
            s_getLoadTime();
            if (s_getLoadTime()) s.events = s.apl(s.events, 'event299=' + s_getLoadTime(), ',', 1);
            if (window.mboxLoadSCPluginForAtJs) {
              window.mboxLoadSCPluginForAtJs(s);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_6ebb760fde160d80)
            ({}.constructor.defineProperty(window, 'performance', $___old_6ebb760fde160d80));
          if ($___old_8e558bf0ad70aee9)
            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_8e558bf0ad70aee9));
        }
      }
      s_doPlugins = $___var_b2d19327850097d9;
      ({}.constructor.defineProperty(s_doPlugins, 'name', {
        configurable: true,
        enumerable: false,
        value: 's_doPlugins',
        writable: false,
      }));
      s.pte =
        'event281,event282,event283,event284,event285,event286,event287,event288,event289,event290';
      s.ptc = false;
      s.doPlugins = s_doPlugins;
      s.loadModule('Media');
      s.Media.autoTrack = false;
      s.Media.trackWhilePlaying = true;
      s.Media.segmentByMilestones = true;
      s.Media.trackVars = 'events,eVar76,eVar77,eVar78,prop71,products';
      s.Media.trackEvents = 'event83,event84,event85,event86,event87,event88,event89';
      s.Media.trackMilestones = '25,50,75';
      s.Media.trackUsingContextData = true;
      s.Media.contextDataMapping = {
        'a.media.name': 'eVar76,prop71',
        'a.media.segment': 'eVar77',
        'a.contentType': 'eVar78',
        'a.media.timePlayed': 'event83',
        'a.media.view': 'event84',
        'a.media.segmentView': 'event85',
        'a.media.complete': 'event89',
        'a.media.milestones': { 25: 'event86', 50: 'event87', 75: 'event88' },
      };
      s.apl = new Function(
        'l',
        'v',
        'd',
        'u',
        '' +
          "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a." +
          'length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas' +
          'e()));}}if(!m)l=l?l+d+v:v;return l'
      );
      s.getPreviousValue = new Function(
        'v',
        'c',
        'el',
        '' +
          "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" +
          "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" +
          '){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)' +
          ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" +
          "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
      );
      s.split = new Function(
        'l',
        'd',
        '' +
          'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x' +
          '++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
      );
      s.getNewRepeat = new Function(
        'd',
        'cn',
        '' +
          'var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:' +
          "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" +
          "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" +
          "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" +
          "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"
      );
      s.getCk = new Function('c', '' + 'var s=this,k=s.c_r(c);return k;');
      s.setCk = new Function(
        'c',
        'v',
        'e',
        '' +
          'var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);s.c' +
          '_w(c,v,e?a:0);'
      );
      s.performanceTiming = new Function(
        'v',
        '' +
          "var s=this;if(v)s.ptv=v;if(typeof performance!='undefined'){if(perf" +
          'ormance.timing.loadEventEnd==0){s.pi=setInterval(function(){s.perfo' +
          "rmanceWrite()},250);}if(!s.ptc||s.linkType=='e'){s.performanceRead(" +
          ");}else{s.rfe();s[s.ptv]='';}}"
      );
      s.performanceWrite = new Function(
        '',
        '' +
          'var s=this;if(performance.timing.loadEventEnd>0)clearInterval(s.pi)' +
          ";try{if(s.c_r('s_ptc')==''&&performance.timing.loadEventEnd>0){try{" +
          "var pt=performance.timing;var pta='';pta=s.performanceCheck(pt.fetc" +
          "hStart,pt.navigationStart);pta+='^^'+s.performanceCheck(pt.domainLo" +
          "okupStart,pt.fetchStart);pta+='^^'+s.performanceCheck(pt.domainLook" +
          "upEnd,pt.domainLookupStart);pta+='^^'+s.performanceCheck(pt.connect" +
          "End,pt.connectStart);pta+='^^'+s.performanceCheck(pt.responseStart," +
          "pt.connectEnd);pta+='^^'+s.performanceCheck(pt.responseEnd,pt.respo" +
          "nseStart);pta+='^^'+s.performanceCheck(pt.loadEventStart,pt.domLoad" +
          "ing);pta+='^^'+s.performanceCheck(pt.loadEventEnd,pt.loadEventStart" +
          ");pta+='^^'+s.performanceCheck(pt.loadEventEnd,pt.navigationStart);" +
          "s.c_w('s_ptc',pta);if(sessionStorage&&navigator.cookieEnabled&&s.pt" +
          "v!='undefined'){var pe=performance.getEntries();var tempPe='';for(v" +
          "ar i=0;i<pe.length;i++){tempPe+='!';tempPe+=pe[i].name.indexOf('?')" +
          ">-1?pe[i].name.split('?')[0]:pe[i].name;tempPe+='|'+(Math.round(pe[" +
          "i].startTime)/1000).toFixed(1)+'|'+(Math.round(pe[i].duration)/1000" +
          ").toFixed(1)+'|'+pe[i].initiatorType;}sessionStorage.setItem('s_pec" +
          "',tempPe);}}catch(err){return;}}}catch(err){return;}"
      );
      s.performanceCheck = new Function(
        'a',
        'b',
        '' +
          'if(a>=0&&b>=0){if((a-b)<60000&&((a-b)>=0)){return((a-b)/1000).toFix' +
          'ed(3);}else{return 600;}}'
      );
      s.performanceRead = new Function(
        '',
        '' +
          'var s=this;if(performance.timing.loadEventEnd>0)clearInterval(s.pi)' +
          ";var cv=s.c_r('s_ptc');if(s.pte){var ela=s.pte.split(',');}if(cv!='" +
          "'){var cva=s.split(cv,'^^');if(cva[1]!=''){for(var x=0;x<(ela.lengt" +
          "h-1);x++){s.events=s.apl(s.events,ela[x]+'='+cva[x],',',2);}}s.even" +
          "ts=s.apl(s.events,ela[ela.length-1],',',2);}s.linkTrackEvents=s.apl" +
          "(s.linkTrackEvents,s.pte,',',2);s.c_w('s_ptc','',0);if(sessionStora" +
          "ge&&navigator.cookieEnabled&&s.ptv!='undefined'){s[s.ptv]=sessionSt" +
          "orage.getItem('s_pec');sessionStorage.setItem('s_pec','',0);}else{s" +
          "[s.ptv]='sessionStorage Unavailable';}s.ptc=true;"
      );
      s.rfe = new Function(
        '',
        '' +
          "var s=this;var ea=s.split(s.events,',');var pta=s.split(s.pte,',');" +
          "try{for(x in pta){var ptr=new RegExp(pta[x]+'[^,][0-9]*.[0-9](.*)" +
          "');s.events=s.events.match(ptr)[1];s.contextData['events']=s.events" +
          ';}}catch(e){return;}'
      );
      function $___var_e515a4979bf17652 () {
        const $___old_9e6fa7c377ce0446 = {}.constructor.getOwnPropertyDescriptor(
          window,
          'performance'
        );
        try {
          if ($___old_9e6fa7c377ce0446)
            ({}.constructor.defineProperty(
              window,
              'performance',
              $___stub_2b47892348e4e4b9.performance
            ));
          return function () {
            if (!window.s_loadT) {
              var b = new Date().getTime(),
                o = window.performance ? performance.timing : 0,
                a = o ? o.requestStart : window.inHeadTS || 0;
              s_loadT = a ? (b - a) / 100 : '';
            }
            return s_loadT;
          }.apply(this, arguments);
        } finally {
          if ($___old_9e6fa7c377ce0446)
            ({}.constructor.defineProperty(window, 'performance', $___old_9e6fa7c377ce0446));
        }
      }
      s_getLoadTime = $___var_e515a4979bf17652;
      ({}.constructor.defineProperty(s_getLoadTime, 'name', {
        configurable: true,
        enumerable: false,
        value: 's_getLoadTime',
        writable: false,
      }));
      function $___var_e7bc4b3ec4f61fcd (q) {
        var b = this;
        b.s = q;
        q = window;
        q.s_c_in || ((q.s_c_il = []), (q.s_c_in = 0));
        b._il = q.s_c_il;
        b._in = q.s_c_in;
        b._il[b._in] = b;
        q.s_c_in++;
        b._c = 's_m';
        b.list = [];
        b.open = function (d, c, e, k) {
          var f = {},
            a = new Date(),
            l = '',
            g;
          c || (c = -1);
          if (d && e) {
            b.list || (b.list = {});
            b.list[d] && b.close(d);
            k && k.id && (l = k.id);
            if (l)
              for (g in b.list)
                !Object.prototype[g] && b.list[g] && b.list[g].R == l && b.close(b.list[g].name);
            f.name = d;
            f.length = c;
            f.offset = 0;
            f.e = 0;
            f.playerName = b.playerName ? b.playerName : e;
            f.R = l;
            f.C = 0;
            f.a = 0;
            f.timestamp = Math.floor(a.getTime() / 1000);
            f.k = 0;
            f.u = f.timestamp;
            f.c = -1;
            f.n = '';
            f.g = -1;
            f.D = 0;
            f.I = {};
            f.G = 0;
            f.m = 0;
            f.f = '';
            f.B = 0;
            f.L = 0;
            f.A = 0;
            f.F = 0;
            f.l = !1;
            f.v = '';
            f.J = '';
            f.K = 0;
            f.r = !1;
            f.H = '';
            f.complete = 0;
            f.Q = 0;
            f.p = 0;
            f.q = 0;
            b.list[d] = f;
          }
        };
        b.openAd = function (d, c, e, k, f, a, l, g) {
          var h = {};
          b.open(d, c, e, g);
          if ((h = b.list[d])) (h.l = !0), (h.v = k), (h.J = f), (h.K = a), (h.H = l);
        };
        b.M = function (d) {
          var c = b.list[d];
          b.list[d] = 0;
          c && c.monitor && clearTimeout(c.monitor.interval);
        };
        b.close = function (d) {
          b.i(d, 0, -1);
        };
        b.play = function (d, c, e, k) {
          var f = b.i(d, 1, c, e, k);
          f &&
            !f.monitor &&
            ((f.monitor = {}),
            (f.monitor.update = function () {
              1 == f.k && b.i(f.name, 3, -1);
              f.monitor.interval = setTimeout(f.monitor.update, 1000);
            }),
            f.monitor.update());
        };
        b.click = function (d, c) {
          b.i(d, 7, c);
        };
        b.complete = function (d, c) {
          b.i(d, 5, c);
        };
        b.stop = function (d, c) {
          b.i(d, 2, c);
        };
        b.track = function (d) {
          b.i(d, 4, -1);
        };
        b.P = function (d, c) {
          var e = 'a.media.',
            k = d.linkTrackVars,
            f = d.linkTrackEvents,
            a = 'm_i',
            l,
            g = d.contextData,
            h;
          c.l &&
            ((e += 'ad.'),
            c.v && ((g['a.media.name'] = c.v), (g[e + 'pod'] = c.J), (g[e + 'podPosition'] = c.K)),
            c.G || (g[e + 'CPM'] = c.H));
          c.r && ((g[e + 'clicked'] = !0), (c.r = !1));
          g['a.contentType'] = 'video' + (c.l ? 'Ad' : '');
          g['a.media.channel'] = b.channel;
          g[e + 'name'] = c.name;
          g[e + 'playerName'] = c.playerName;
          0 < c.length && (g[e + 'length'] = c.length);
          g[e + 'timePlayed'] = Math.floor(c.a);
          0 < Math.floor(c.a) && (g[e + 'timePlayed'] = Math.floor(c.a));
          c.G ||
            ((g[e + 'view'] = !0),
            (a = 'm_s'),
            b.Heartbeat &&
              b.Heartbeat.enabled &&
              (a = c.l ? (b.__primetime ? 'mspa_s' : 'msa_s') : b.__primetime ? 'msp_s' : 'ms_s'),
            (c.G = 1));
          c.f &&
            ((g[e + 'segmentNum'] = c.m),
            (g[e + 'segment'] = c.f),
            0 < c.B && (g[e + 'segmentLength'] = c.B),
            c.A && 0 < c.a && (g[e + 'segmentView'] = !0));
          !c.Q && c.complete && ((g[e + 'complete'] = !0), (c.S = 1));
          0 < c.p && (g[e + 'milestone'] = c.p);
          0 < c.q && (g[e + 'offsetMilestone'] = c.q);
          if (k) for (h in g) Object.prototype[h] || (k += ',contextData.' + h);
          l = g['a.contentType'];
          d.pe = a;
          d.pev3 = l;
          var q, s;
          if (b.contextDataMapping)
            for (h in (d.events2 || (d.events2 = ''), k && (k += ',events'), b.contextDataMapping))
              if (!Object.prototype[h]) {
                a =
                  h.length > e.length && h.substring(0, e.length) == e
                    ? h.substring(e.length)
                    : '';
                l = b.contextDataMapping[h];
                if ('string' == typeof l)
                  for (q = l.split(','), s = 0; s < q.length; s++)
                    (l = q[s]),
                      'a.contentType' == h
                        ? (k && (k += ',' + l), (d[l] = g[h]))
                        : 'view' == a ||
                          'segmentView' == a ||
                          'clicked' == a ||
                          'complete' == a ||
                          'timePlayed' == a ||
                          'CPM' == a
                        ? (f && (f += ',' + l),
                          'timePlayed' == a || 'CPM' == a
                            ? g[h] && (d.events2 += (d.events2 ? ',' : '') + l + '=' + g[h])
                            : g[h] && (d.events2 += (d.events2 ? ',' : '') + l))
                        : 'segment' == a && g[h + 'Num']
                        ? (k && (k += ',' + l), (d[l] = g[h + 'Num'] + ':' + g[h]))
                        : (k && (k += ',' + l), (d[l] = g[h]));
                else if ('milestones' == a || 'offsetMilestones' == a)
                  (h = h.substring(0, h.length - 1)),
                    g[h] &&
                      b.contextDataMapping[h + 's'][g[h]] &&
                      (f && (f += ',' + b.contextDataMapping[h + 's'][g[h]]),
                      (d.events2 += (d.events2 ? ',' : '') + b.contextDataMapping[h + 's'][g[h]]));
                g[h] && (g[h] = 0);
                'segment' == a && g[h + 'Num'] && (g[h + 'Num'] = 0);
              }
          d.linkTrackVars = k;
          d.linkTrackEvents = f;
        };
        b.i = function (d, c, e, k, f) {
          var a = {},
            l = new Date().getTime() / 1000,
            g,
            h,
            q = b.trackVars,
            s = b.trackEvents,
            t = b.trackSeconds,
            u = b.trackMilestones,
            v = b.trackOffsetMilestones,
            w = b.segmentByMilestones,
            x = b.segmentByOffsetMilestones,
            p,
            n,
            r = 1,
            m = {},
            y;
          b.channel || (b.channel = b.s.w.location.hostname);
          if ((a = d && b.list && b.list[d] ? b.list[d] : 0))
            if (
              (a.l &&
                ((t = b.adTrackSeconds),
                (u = b.adTrackMilestones),
                (v = b.adTrackOffsetMilestones),
                (w = b.adSegmentByMilestones),
                (x = b.adSegmentByOffsetMilestones)),
              0 > e && (e = 1 == a.k && 0 < a.u ? l - a.u + a.c : a.c),
              0 < a.length && (e = e < a.length ? e : a.length),
              0 > e && (e = 0),
              (a.offset = e),
              0 < a.length && ((a.e = (a.offset / a.length) * 100), (a.e = 100 < a.e ? 100 : a.e)),
              0 > a.c && (a.c = e),
              (y = a.D),
              (m.name = d),
              (m.ad = a.l),
              (m.length = a.length),
              (m.openTime = new Date()),
              m.openTime.setTime(1000 * a.timestamp),
              (m.offset = a.offset),
              (m.percent = a.e),
              (m.playerName = a.playerName),
              (m.mediaEvent =
                0 > a.g
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
              2 < c || (c != a.k && (2 != c || 1 == a.k)))
            ) {
              f || ((k = a.m), (f = a.f));
              if (c) {
                1 == c && (a.c = e);
                if ((3 >= c || 5 <= c) && 0 <= a.g && ((r = !1), (q = s = 'None'), a.g != e)) {
                  h = a.g;
                  h > e && ((h = a.c), h > e && (h = e));
                  p = u ? u.split(',') : 0;
                  if (0 < a.length && p && e >= h)
                    for (n = 0; n < p.length; n++)
                      (g = p[n] ? parseFloat('' + p[n]) : 0) &&
                        (h / a.length) * 100 < g &&
                        a.e >= g &&
                        ((r = !0),
                        (n = p.length),
                        (m.mediaEvent = 'MILESTONE'),
                        (a.p = m.milestone = g));
                  if ((p = v ? v.split(',') : 0) && e >= h)
                    for (n = 0; n < p.length; n++)
                      (g = p[n] ? parseFloat('' + p[n]) : 0) &&
                        h < g &&
                        e >= g &&
                        ((r = !0),
                        (n = p.length),
                        (m.mediaEvent = 'OFFSET_MILESTONE'),
                        (a.q = m.offsetMilestone = g));
                }
                if (a.L || !f) {
                  if (w && u && 0 < a.length) {
                    if ((p = u.split(',')))
                      for (p.push('100'), n = h = 0; n < p.length; n++)
                        if ((g = p[n] ? parseFloat('' + p[n]) : 0))
                          a.e < g && ((k = n + 1), (f = 'M:' + h + '-' + g), (n = p.length)),
                            (h = g);
                  } else if (x && v && (p = v.split(',')))
                    for (
                      p.push('' + (0 < a.length ? a.length : 'E')), n = h = 0;
                      n < p.length;
                      n++
                    )
                      if ((g = p[n] ? parseFloat('' + p[n]) : 0) || 'E' == p[n]) {
                        if (e < g || 'E' == p[n])
                          (k = n + 1), (f = 'O:' + h + '-' + g), (n = p.length);
                        h = g;
                      }
                  f && (a.L = !0);
                }
                (f || a.f) &&
                  f != a.f &&
                  ((a.F = !0), a.f || ((a.m = k), (a.f = f)), 0 <= a.g && (r = !0));
                (2 <= c || 100 <= a.e) && a.c < e && ((a.C += e - a.c), (a.a += e - a.c));
                if (2 >= c || (3 == c && !a.k))
                  (a.n += (1 == c || 3 == c ? 'S' : 'E') + Math.floor(e)), (a.k = 3 == c ? 1 : c);
                !r &&
                  0 <= a.g &&
                  3 >= c &&
                  (t = t ? t : 0) &&
                  a.a >= t &&
                  ((r = !0), (m.mediaEvent = 'SECONDS'));
                a.u = l;
                a.c = e;
              }
              if (!c || (3 >= c && 100 <= a.e))
                2 != a.k && (a.n += 'E' + Math.floor(e)),
                  (c = 0),
                  (q = s = 'None'),
                  (m.mediaEvent = 'CLOSE');
              7 == c && (r = m.clicked = a.r = !0);
              if (
                5 == c ||
                (b.completeByCloseOffset &&
                  (!c || 100 <= a.e) &&
                  0 < a.length &&
                  e >= a.length - b.completeCloseOffsetThreshold)
              )
                r = m.complete = a.complete = !0;
              l = m.mediaEvent;
              'MILESTONE' == l
                ? (l += '_' + m.milestone)
                : 'OFFSET_MILESTONE' == l && (l += '_' + m.offsetMilestone);
              a.I[l] ? (m.eventFirstTime = !1) : ((m.eventFirstTime = !0), (a.I[l] = 1));
              m.event = m.mediaEvent;
              m.timePlayed = a.C;
              m.segmentNum = a.m;
              m.segment = a.f;
              m.segmentLength = a.B;
              b.monitor && 4 != c && b.monitor(b.s, m);
              b.Heartbeat && b.Heartbeat.enabled && 0 <= a.g && (r = !1);
              0 == c && b.M(d);
              r &&
                a.D == y &&
                ((d = { contextData: {} }),
                (d.linkTrackVars = q),
                (d.linkTrackEvents = s),
                d.linkTrackVars || (d.linkTrackVars = ''),
                d.linkTrackEvents || (d.linkTrackEvents = ''),
                b.P(d, a),
                d.linkTrackVars || (d['!linkTrackVars'] = 1),
                d.linkTrackEvents || (d['!linkTrackEvents'] = 1),
                b.s.track(d),
                a.F ? ((a.m = k), (a.f = f), (a.A = !0), (a.F = !1)) : 0 < a.a && (a.A = !1),
                (a.n = ''),
                (a.p = a.q = 0),
                (a.a -= Math.floor(a.a)),
                (a.g = e),
                a.D++);
            }
          return a;
        };
        b.O = function (d, c, e, k, f) {
          var a = 0;
          if (d && (!b.autoTrackMediaLengthRequired || (c && 0 < c))) {
            if (b.list && b.list[d]) a = 1;
            else if (1 == e || 3 == e) b.open(d, c, 'HTML5 Video', f), (a = 1);
            a && b.i(d, e, k, -1, 0);
          }
        };
        b.attach = function (d) {
          var c, e, k;
          d &&
            d.tagName &&
            'VIDEO' == d.tagName.toUpperCase() &&
            (b.o ||
              (b.o = function (c, a, d) {
                var e, h;
                b.autoTrack &&
                  ((e = c.currentSrc),
                  (h = c.duration) || (h = -1),
                  0 > d && (d = c.currentTime),
                  b.O(e, h, a, d, c));
              }),
            (c = function () {
              b.o(d, 1, -1);
            }),
            (e = function () {
              b.o(d, 1, -1);
            }),
            b.j(d, 'play', c),
            b.j(d, 'pause', e),
            b.j(d, 'seeking', e),
            b.j(d, 'seeked', c),
            b.j(d, 'ended', function () {
              b.o(d, 0, -1);
            }),
            b.j(d, 'timeupdate', c),
            (k = function () {
              d.paused || d.ended || d.seeking || b.o(d, 3, -1);
              setTimeout(k, 1000);
            }),
            k());
        };
        b.j = function (b, c, e) {
          b.attachEvent
            ? b.attachEvent('on' + c, e)
            : b.addEventListener && b.addEventListener(c, e, !1);
        };
        void 0 == b.completeByCloseOffset && (b.completeByCloseOffset = 1);
        void 0 == b.completeCloseOffsetThreshold && (b.completeCloseOffsetThreshold = 1);
        b.Heartbeat = {};
        b.N = function () {
          var d, c;
          if (b.autoTrack && (d = b.s.d.getElementsByTagName('VIDEO')))
            for (c = 0; c < d.length; c++) b.attach(d[c]);
        };
        b.j(q, 'load', b.N);
      }
      AppMeasurement_Module_Media = $___var_e7bc4b3ec4f61fcd;
      ({}.constructor.defineProperty(AppMeasurement_Module_Media, 'name', {
        configurable: true,
        enumerable: false,
        value: 'AppMeasurement_Module_Media',
        writable: false,
      }));
      function $___var_9723a98fa68ed1a1 (f) {
        function g (a, d) {
          var b, c, n;
          if (a && d && (b = e.c[d] || (e.c[d] = d.split(','))))
            for (n = 0; n < b.length && (c = b[n++]); ) if (-1 < a.indexOf(c)) return null;
          p = 1;
          return a;
        }
        function q (a, d, b, c, e) {
          var g, h;
          if (a.dataset && (h = a.dataset[d])) g = h;
          else if (a.getAttribute)
            if ((h = a.getAttribute('data-' + b))) g = h;
            else if ((h = a.getAttribute(b))) g = h;
          if (
            !g &&
            f.useForcedLinkTracking &&
            e &&
            ((g = ''), (d = a.onclick ? '' + a.onclick : ''))
          ) {
            b = d.indexOf(c);
            var l, k;
            if (0 <= b) {
              for (b += 10; b < d.length && 0 <= '= \t\r\n'.indexOf(d.charAt(b)); ) b++;
              if (b < d.length) {
                h = b;
                for (l = k = 0; h < d.length && (';' != d.charAt(h) || l); )
                  l
                    ? d.charAt(h) != l || k
                      ? (k = '\\' == d.charAt(h) ? !k : 0)
                      : (l = 0)
                    : ((l = d.charAt(h)), '"' != l && "'" != l && (l = 0)),
                    h++;
                if ((d = d.substring(b, h)))
                  (a.e = new Function('s', 'var e;try{s.w.' + c + '=' + d + '}catch(e){}')),
                    a.e(f);
              }
            }
          }
          return g || (e && f.w[c]);
        }
        function r (a, d, b) {
          var c;
          return (c = e[d](a, b)) && (p ? ((p = 0), c) : g(k(c), e[d + 'Exclusions']));
        }
        function s (a, d, b) {
          var c;
          if (
            a &&
            !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && t[c]) &&
            (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c),
            b.a ||
              b.t ||
              b.s ||
              !a.getAttribute ||
              ((c = a.getAttribute('alt'))
                ? (b.a = c)
                : (c = a.getAttribute('title'))
                ? (b.t = c)
                : 'IMG' == ('' + a.nodeName).toUpperCase() &&
                  (c = a.getAttribute('src') || a.src) &&
                  (b.s = c)),
            (c = a.childNodes) && c.length)
          )
            for (a = 0; a < c.length; a++) s(c[a], d, b);
        }
        function k (a) {
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
          } catch (d) {}
        }
        var e = this;
        e.s = f;
        var m = window;
        m.s_c_in || ((m.s_c_il = []), (m.s_c_in = 0));
        e._il = m.s_c_il;
        e._in = m.s_c_in;
        e._il[e._in] = e;
        m.s_c_in++;
        e._c = 's_m';
        e.c = {};
        var p = 0,
          t = { SCRIPT: 1, STYLE: 1, LINK: 1, CANVAS: 1 };
        e._g = function () {
          var a,
            d,
            b,
            c = f.contextData,
            e = f.linkObject;
          (a = f.pageName || f.pageURL) &&
            (d = r(e, 'link', f.linkName)) &&
            (b = r(e, 'region')) &&
            ((c['a.activitymap.page'] = a.substring(0, 255)),
            (c['a.activitymap.link'] = 128 < d.length ? d.substring(0, 128) : d),
            (c['a.activitymap.region'] = 127 < b.length ? b.substring(0, 127) : b),
            (c['a.activitymap.pageIDType'] = f.pageName ? 1 : 0));
        };
        e.link = function (a, d) {
          var b;
          if (d) b = g(k(d), e.linkExclusions);
          else if ((b = a) && !(b = q(a, 'sObjectId', 's-object-id', 's_objectID', 1))) {
            var c, f;
            (f = g(k(a.innerText || a.textContent), e.linkExclusions)) ||
              (s(a, (c = []), (b = { a: void 0, t: void 0, s: void 0 })),
              (f = g(k(c.join('')))) ||
                (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) ||
                !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() : '') ||
                ('INPUT' == c || ('SUBMIT' == c && a.value)
                  ? (f = g(k(a.value)))
                  : a.src && 'IMAGE' == c && (f = g(k(a.src)))));
            b = f;
          }
          return b;
        };
        e.region = function (a) {
          for (var d, b = e.regionIDAttribute || 'id'; a && (a = a.parentNode); ) {
            if ((d = q(a, b, b, b))) return d;
            if ('BODY' == a.nodeName) return 'BODY';
          }
        };
      }
      AppMeasurement_Module_ActivityMap = $___var_9723a98fa68ed1a1;
      ({}.constructor.defineProperty(AppMeasurement_Module_ActivityMap, 'name', {
        configurable: true,
        enumerable: false,
        value: 'AppMeasurement_Module_ActivityMap',
        writable: false,
      }));
      function $___var_09ffa4072ada45d5 () {
        const $___old_53b9d6d5cc79aa0a = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_53b9d6d5cc79aa0a)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_47c01efa79e9f191.userAgent
            ));
          return function () {
            var a = this;
            a.version = '1.6.1';
            var k = window;
            k.s_c_in || ((k.s_c_il = []), (k.s_c_in = 0));
            a._il = k.s_c_il;
            a._in = k.s_c_in;
            a._il[a._in] = a;
            k.s_c_in++;
            a._c = 's_c';
            var q = k.AppMeasurement.Cb;
            q || (q = null);
            var r = k,
              n,
              t;
            try {
              for (
                n = r.parent, t = r.location;
                n &&
                n.location &&
                t &&
                '' + n.location != '' + t &&
                r.location &&
                '' + n.location != '' + r.location &&
                n.location.host == t.host;

              )
                (r = n), (n = r.parent);
            } catch (u) {}
            a.sb = function (a) {
              try {
                console.log(a);
              } catch (b) {}
            };
            a.Da = function (a) {
              return '' + parseInt(a) == '' + a;
            };
            a.replace = function (a, b, d) {
              return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d);
            };
            a.escape = function (c) {
              var b, d;
              if (!c) return c;
              c = encodeURIComponent(c);
              for (b = 0; 7 > b; b++)
                (d = "+~!*()'".substring(b, b + 1)),
                  0 <= c.indexOf(d) &&
                    (c = a.replace(c, d, '%' + d.charCodeAt(0).toString(16).toUpperCase()));
              return c;
            };
            a.unescape = function (c) {
              if (!c) return c;
              c = 0 <= c.indexOf('+') ? a.replace(c, '+', ' ') : c;
              try {
                return decodeURIComponent(c);
              } catch (b) {}
              return unescape(c);
            };
            a.kb = function () {
              var c = k.location.hostname,
                b = a.fpCookieDomainPeriods,
                d;
              b || (b = a.cookieDomainPeriods);
              if (
                c &&
                !a.cookieDomain &&
                !/^[0-9.]+$/.test(c) &&
                ((b = b ? parseInt(b) : 2), (b = 2 < b ? b : 2), (d = c.lastIndexOf('.')), 0 <= d)
              ) {
                for (; 0 <= d && 1 < b; ) (d = c.lastIndexOf('.', d - 1)), b--;
                a.cookieDomain = 0 < d ? c.substring(d) : c;
              }
              return a.cookieDomain;
            };
            a.c_r = a.cookieRead = function (c) {
              c = a.escape(c);
              var b = ' ' + a.d.cookie,
                d = b.indexOf(' ' + c + '='),
                f = 0 > d ? d : b.indexOf(';', d);
              c = 0 > d ? '' : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
              return '[[B]]' != c ? c : '';
            };
            a.c_w = a.cookieWrite = function (c, b, d) {
              var f = a.kb(),
                e = a.cookieLifetime,
                g;
              b = '' + b;
              e = e ? ('' + e).toUpperCase() : '';
              d &&
                'SESSION' != e &&
                'NONE' != e &&
                ((g = '' != b ? parseInt(e ? e : 0) : -60)
                  ? ((d = new Date()), d.setTime(d.getTime() + 1000 * g))
                  : 1 == d &&
                    ((d = new Date()),
                    (g = d.getYear()),
                    d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
              return c && 'NONE' != e
                ? ((a.d.cookie =
                    c +
                    '=' +
                    a.escape('' != b ? b : '[[B]]') +
                    '; path=/;' +
                    (d && 'SESSION' != e ? ' expires=' + d.toGMTString() + ';' : '') +
                    (f ? ' domain=' + f + ';' : '')),
                  a.cookieRead(c) == b)
                : 0;
            };
            a.H = [];
            a.ea = function (c, b, d) {
              if (a.wa) return 0;
              a.maxDelay || (a.maxDelay = 250);
              var f = 0,
                e = new Date().getTime() + a.maxDelay,
                g = a.d.visibilityState,
                m = ['webkitvisibilitychange', 'visibilitychange'];
              g || (g = a.d.webkitVisibilityState);
              if (g && 'prerender' == g) {
                if (!a.fa)
                  for (a.fa = 1, d = 0; d < m.length; d++)
                    a.d.addEventListener(m[d], function () {
                      var b = a.d.visibilityState;
                      b || (b = a.d.webkitVisibilityState);
                      'visible' == b && ((a.fa = 0), a.delayReady());
                    });
                f = 1;
                e = 0;
              } else d || (a.l('_d') && (f = 1));
              f && (a.H.push({ m: c, a: b, t: e }), a.fa || setTimeout(a.delayReady, a.maxDelay));
              return f;
            };
            a.delayReady = function () {
              var c = new Date().getTime(),
                b = 0,
                d;
              for (a.l('_d') ? (b = 1) : a.qa(); 0 < a.H.length; ) {
                d = a.H.shift();
                if (b && !d.t && d.t > c) {
                  a.H.unshift(d);
                  setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                  break;
                }
                a.wa = 1;
                a[d.m].apply(a, d.a);
                a.wa = 0;
              }
            };
            a.setAccount = a.sa = function (c) {
              var b, d;
              if (!a.ea('setAccount', arguments))
                if (((a.account = c), a.allAccounts))
                  for (
                    b = a.allAccounts.concat(c.split(',')), a.allAccounts = [], b.sort(), d = 0;
                    d < b.length;
                    d++
                  )
                    (0 != d && b[d - 1] == b[d]) || a.allAccounts.push(b[d]);
                else a.allAccounts = c.split(',');
            };
            a.foreachVar = function (c, b) {
              var d,
                f,
                e,
                g,
                m = '';
              e = f = '';
              if (a.lightProfileID)
                (d = a.L), (m = a.lightTrackVars) && (m = ',' + m + ',' + a.ja.join(',') + ',');
              else {
                d = a.e;
                if (a.pe || a.linkType)
                  (m = a.linkTrackVars),
                    (f = a.linkTrackEvents),
                    a.pe &&
                      ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                      a[e] && ((m = a[e].Bb), (f = a[e].Ab)));
                m && (m = ',' + m + ',' + a.C.join(',') + ',');
                f && m && (m += ',events,');
              }
              b && (b = ',' + b + ',');
              for (f = 0; f < d.length; f++)
                (e = d[f]),
                  (g = a[e]) &&
                    (!m || 0 <= m.indexOf(',' + e + ',')) &&
                    (!b || 0 <= b.indexOf(',' + e + ',')) &&
                    c(e, g);
            };
            a.p = function (c, b, d, f, e) {
              var g = '',
                m,
                p,
                k,
                w,
                n = 0;
              'contextData' == c && (c = 'c');
              if (b) {
                for (m in b)
                  if (
                    !(Object.prototype[m] || (e && m.substring(0, e.length) != e)) &&
                    b[m] &&
                    (!d || 0 <= d.indexOf(',' + (f ? f + '.' : '') + m + ','))
                  ) {
                    k = !1;
                    if (n)
                      for (p = 0; p < n.length; p++)
                        m.substring(0, n[p].length) == n[p] && (k = !0);
                    if (
                      !k &&
                      ('' == g && (g += '&' + c + '.'),
                      (p = b[m]),
                      e && (m = m.substring(e.length)),
                      0 < m.length)
                    )
                      if (((k = m.indexOf('.')), 0 < k))
                        (p = m.substring(0, k)),
                          (k = (e ? e : '') + p + '.'),
                          n || (n = []),
                          n.push(k),
                          (g += a.p(p, b, d, f, k));
                      else if (('boolean' == typeof p && (p = p ? 'true' : 'false'), p)) {
                        if ('retrieveLightData' == f && 0 > e.indexOf('.contextData.'))
                          switch (((k = m.substring(0, 4)), (w = m.substring(4)), m)) {
                            case 'transactionID':
                              m = 'xact';
                              break;
                            case 'channel':
                              m = 'ch';
                              break;
                            case 'campaign':
                              m = 'v0';
                              break;
                            default:
                              a.Da(w) &&
                                ('prop' == k
                                  ? (m = 'c' + w)
                                  : 'eVar' == k
                                  ? (m = 'v' + w)
                                  : 'list' == k
                                  ? (m = 'l' + w)
                                  : 'hier' == k && ((m = 'h' + w), (p = p.substring(0, 255))));
                          }
                        g += '&' + a.escape(m) + '=' + a.escape(p);
                      }
                  }
                '' != g && (g += '&.' + c);
              }
              return g;
            };
            a.mb = function () {
              var c = '',
                b,
                d,
                f,
                e,
                g,
                m,
                p,
                k,
                n = '',
                r = '',
                s = (e = '');
              if (a.lightProfileID)
                (b = a.L), (n = a.lightTrackVars) && (n = ',' + n + ',' + a.ja.join(',') + ',');
              else {
                b = a.e;
                if (a.pe || a.linkType)
                  (n = a.linkTrackVars),
                    (r = a.linkTrackEvents),
                    a.pe &&
                      ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                      a[e] && ((n = a[e].Bb), (r = a[e].Ab)));
                n && (n = ',' + n + ',' + a.C.join(',') + ',');
                r && ((r = ',' + r + ','), n && (n += ',events,'));
                a.events2 && (s += ('' != s ? ',' : '') + a.events2);
              }
              if (a.visitor && 1.5 <= parseFloat(a.visitor.version) && a.visitor.getCustomerIDs) {
                e = q;
                if ((g = a.visitor.getCustomerIDs()))
                  for (d in g)
                    Object.prototype[d] ||
                      ((f = g[d]),
                      e || (e = {}),
                      f.id && (e[d + '.id'] = f.id),
                      f.authState && (e[d + '.as'] = f.authState));
                e && (c += a.p('cid', e));
              }
              a.AudienceManagement &&
                a.AudienceManagement.isReady() &&
                (c += a.p('d', a.AudienceManagement.getEventCallConfigParams()));
              for (d = 0; d < b.length; d++) {
                e = b[d];
                g = a[e];
                f = e.substring(0, 4);
                m = e.substring(4);
                !g && 'events' == e && s && ((g = s), (s = ''));
                if (g && (!n || 0 <= n.indexOf(',' + e + ','))) {
                  switch (e) {
                    case 'supplementalDataID':
                      e = 'sdid';
                      break;
                    case 'timestamp':
                      e = 'ts';
                      break;
                    case 'dynamicVariablePrefix':
                      e = 'D';
                      break;
                    case 'visitorID':
                      e = 'vid';
                      break;
                    case 'marketingCloudVisitorID':
                      e = 'mid';
                      break;
                    case 'analyticsVisitorID':
                      e = 'aid';
                      break;
                    case 'audienceManagerLocationHint':
                      e = 'aamlh';
                      break;
                    case 'audienceManagerBlob':
                      e = 'aamb';
                      break;
                    case 'authState':
                      e = 'as';
                      break;
                    case 'pageURL':
                      e = 'g';
                      255 < g.length &&
                        ((a.pageURLRest = g.substring(255)), (g = g.substring(0, 255)));
                      break;
                    case 'pageURLRest':
                      e = '-g';
                      break;
                    case 'referrer':
                      e = 'r';
                      break;
                    case 'vmk':
                    case 'visitorMigrationKey':
                      e = 'vmt';
                      break;
                    case 'visitorMigrationServer':
                      e = 'vmf';
                      a.ssl && a.visitorMigrationServerSecure && (g = '');
                      break;
                    case 'visitorMigrationServerSecure':
                      e = 'vmf';
                      !a.ssl && a.visitorMigrationServer && (g = '');
                      break;
                    case 'charSet':
                      e = 'ce';
                      break;
                    case 'visitorNamespace':
                      e = 'ns';
                      break;
                    case 'cookieDomainPeriods':
                      e = 'cdp';
                      break;
                    case 'cookieLifetime':
                      e = 'cl';
                      break;
                    case 'variableProvider':
                      e = 'vvp';
                      break;
                    case 'currencyCode':
                      e = 'cc';
                      break;
                    case 'channel':
                      e = 'ch';
                      break;
                    case 'transactionID':
                      e = 'xact';
                      break;
                    case 'campaign':
                      e = 'v0';
                      break;
                    case 'latitude':
                      e = 'lat';
                      break;
                    case 'longitude':
                      e = 'lon';
                      break;
                    case 'resolution':
                      e = 's';
                      break;
                    case 'colorDepth':
                      e = 'c';
                      break;
                    case 'javascriptVersion':
                      e = 'j';
                      break;
                    case 'javaEnabled':
                      e = 'v';
                      break;
                    case 'cookiesEnabled':
                      e = 'k';
                      break;
                    case 'browserWidth':
                      e = 'bw';
                      break;
                    case 'browserHeight':
                      e = 'bh';
                      break;
                    case 'connectionType':
                      e = 'ct';
                      break;
                    case 'homepage':
                      e = 'hp';
                      break;
                    case 'events':
                      s && (g += ('' != g ? ',' : '') + s);
                      if (r)
                        for (m = g.split(','), g = '', f = 0; f < m.length; f++)
                          (p = m[f]),
                            (k = p.indexOf('=')),
                            0 <= k && (p = p.substring(0, k)),
                            (k = p.indexOf(':')),
                            0 <= k && (p = p.substring(0, k)),
                            0 <= r.indexOf(',' + p + ',') && (g += (g ? ',' : '') + m[f]);
                      break;
                    case 'events2':
                      g = '';
                      break;
                    case 'contextData':
                      c += a.p('c', a[e], n, e);
                      g = '';
                      break;
                    case 'lightProfileID':
                      e = 'mtp';
                      break;
                    case 'lightStoreForSeconds':
                      e = 'mtss';
                      a.lightProfileID || (g = '');
                      break;
                    case 'lightIncrementBy':
                      e = 'mti';
                      a.lightProfileID || (g = '');
                      break;
                    case 'retrieveLightProfiles':
                      e = 'mtsr';
                      break;
                    case 'deleteLightProfiles':
                      e = 'mtsd';
                      break;
                    case 'retrieveLightData':
                      a.retrieveLightProfiles && (c += a.p('mts', a[e], n, e));
                      g = '';
                      break;
                    default:
                      a.Da(m) &&
                        ('prop' == f
                          ? (e = 'c' + m)
                          : 'eVar' == f
                          ? (e = 'v' + m)
                          : 'list' == f
                          ? (e = 'l' + m)
                          : 'hier' == f && ((e = 'h' + m), (g = g.substring(0, 255))));
                  }
                  g && (c += '&' + e + '=' + ('pev' != e.substring(0, 3) ? a.escape(g) : g));
                }
                'pev3' == e && a.c && (c += a.c);
              }
              return c;
            };
            a.B = function (a) {
              var b = a.tagName;
              if (
                'undefined' != '' + a.Fb ||
                ('undefined' != '' + a.wb && 'HTML' != ('' + a.wb).toUpperCase())
              )
                return '';
              b = b && b.toUpperCase ? b.toUpperCase() : '';
              'SHAPE' == b && (b = '');
              b &&
                (('INPUT' == b || 'BUTTON' == b) && a.type && a.type.toUpperCase
                  ? (b = a.type.toUpperCase())
                  : !b && a.href && (b = 'A'));
              return b;
            };
            a.za = function (a) {
              var b = a.href ? a.href : '',
                d,
                f,
                e;
              d = b.indexOf(':');
              f = b.indexOf('?');
              e = b.indexOf('/');
              b &&
                (0 > d || (0 <= f && d > f) || (0 <= e && d > e)) &&
                ((f =
                  a.protocol && 1 < a.protocol.length ? a.protocol : l.protocol ? l.protocol : ''),
                (d = l.pathname.lastIndexOf('/')),
                (b =
                  (f ? f + '//' : '') +
                  (a.host ? a.host : l.host ? l.host : '') +
                  ('/' != h.substring(0, 1) ? l.pathname.substring(0, 0 > d ? 0 : d) + '/' : '') +
                  b));
              return b;
            };
            a.I = function (c) {
              var b = a.B(c),
                d,
                f,
                e = '',
                g = 0;
              return b &&
                ((d = c.protocol),
                (f = c.onclick),
                !c.href ||
                ('A' != b && 'AREA' != b) ||
                (f && d && !(0 > d.toLowerCase().indexOf('javascript')))
                  ? f
                    ? ((e = a.replace(
                        a.replace(a.replace(a.replace('' + f, '\r', ''), '\n', ''), '\t', ''),
                        ' ',
                        ''
                      )),
                      (g = 2))
                    : 'INPUT' == b || 'SUBMIT' == b
                    ? (c.value
                        ? (e = c.value)
                        : c.innerText
                        ? (e = c.innerText)
                        : c.textContent && (e = c.textContent),
                      (g = 3))
                    : c.src && 'IMAGE' == b && (e = c.src)
                  : (e = a.za(c)),
                e)
                ? { id: e.substring(0, 100), type: g }
                : 0;
            };
            a.Db = function (c) {
              for (var b = a.B(c), d = a.I(c); c && !d && 'BODY' != b; )
                if ((c = c.parentElement ? c.parentElement : c.parentNode))
                  (b = a.B(c)), (d = a.I(c));
              (d && 'BODY' != b) || (c = 0);
              c &&
                ((b = c.onclick ? '' + c.onclick : ''),
                0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) &&
                (c = 0);
              return c;
            };
            a.vb = function () {
              var c,
                b,
                d = a.linkObject,
                f = a.linkType,
                e = a.linkURL,
                g,
                m;
              a.ka = 1;
              d || ((a.ka = 0), (d = a.clickObject));
              if (d) {
                c = a.B(d);
                for (b = a.I(d); d && !b && 'BODY' != c; )
                  if ((d = d.parentElement ? d.parentElement : d.parentNode))
                    (c = a.B(d)), (b = a.I(d));
                (b && 'BODY' != c) || (d = 0);
                if (d && !a.linkObject) {
                  var p = d.onclick ? '' + d.onclick : '';
                  if (0 <= p.indexOf('.tl(') || 0 <= p.indexOf('.trackLink(')) d = 0;
                }
              } else a.ka = 1;
              !e && d && (e = a.za(d));
              e &&
                !a.linkLeaveQueryString &&
                ((g = e.indexOf('?')), 0 <= g && (e = e.substring(0, g)));
              if (!f && e) {
                var n = 0,
                  r = 0,
                  q;
                if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                  for (
                    p = e.toLowerCase(),
                      g = p.indexOf('?'),
                      m = p.indexOf('#'),
                      0 <= g ? 0 <= m && m < g && (g = m) : (g = m),
                      0 <= g && (p = p.substring(0, g)),
                      g = a.linkDownloadFileTypes.toLowerCase().split(','),
                      m = 0;
                    m < g.length;
                    m++
                  )
                    (q = g[m]) && p.substring(p.length - (q.length + 1)) == '.' + q && (f = 'd');
                if (
                  a.trackExternalLinks &&
                  !f &&
                  ((p = e.toLowerCase()),
                  a.Ca(p) &&
                    (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname),
                    (g = 0),
                    a.linkExternalFilters
                      ? ((g = a.linkExternalFilters.toLowerCase().split(',')), (n = 1))
                      : a.linkInternalFilters &&
                        (g = a.linkInternalFilters.toLowerCase().split(',')),
                    g))
                ) {
                  for (m = 0; m < g.length; m++) (q = g[m]), 0 <= p.indexOf(q) && (r = 1);
                  r ? n && (f = 'e') : n || (f = 'e');
                }
              }
              a.linkObject = d;
              a.linkURL = e;
              a.linkType = f;
              if (a.trackClickMap || a.trackInlineStats)
                (a.c = ''),
                  d &&
                    ((f = a.pageName),
                    (e = 1),
                    (d = d.sourceIndex),
                    f || ((f = a.pageURL), (e = 0)),
                    k.s_objectID && ((b.id = k.s_objectID), (d = b.type = 1)),
                    f &&
                      b &&
                      b.id &&
                      c &&
                      (a.c =
                        '&pid=' +
                        a.escape(f.substring(0, 255)) +
                        (e ? '&pidt=' + e : '') +
                        '&oid=' +
                        a.escape(b.id.substring(0, 100)) +
                        (b.type ? '&oidt=' + b.type : '') +
                        '&ot=' +
                        c +
                        (d ? '&oi=' + d : '')));
            };
            a.nb = function () {
              var c = a.ka,
                b = a.linkType,
                d = a.linkURL,
                f = a.linkName;
              b &&
                (d || f) &&
                ((b = b.toLowerCase()),
                'd' != b && 'e' != b && (b = 'o'),
                (a.pe = 'lnk_' + b),
                (a.pev1 = d ? a.escape(d) : ''),
                (a.pev2 = f ? a.escape(f) : ''),
                (c = 1));
              a.abort && (c = 0);
              if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
                var b = {},
                  d = 0,
                  e = a.cookieRead('s_sq'),
                  g = e ? e.split('&') : 0,
                  m,
                  p,
                  k,
                  e = 0;
                if (g)
                  for (m = 0; m < g.length; m++)
                    (p = g[m].split('=')),
                      (f = a.unescape(p[0]).split(',')),
                      (p = a.unescape(p[1])),
                      (b[p] = f);
                f = a.account.split(',');
                m = {};
                for (k in a.contextData)
                  k &&
                    !Object.prototype[k] &&
                    'a.activitymap.' == k.substring(0, 14) &&
                    ((m[k] = a.contextData[k]), (a.contextData[k] = ''));
                a.c = a.p('c', m) + (a.c ? a.c : '');
                if (c || a.c) {
                  c && !a.c && (e = 1);
                  for (p in b)
                    if (!Object.prototype[p])
                      for (k = 0; k < f.length; k++)
                        for (
                          e &&
                            ((g = b[p].join(',')),
                            g == a.account &&
                              ((a.c += ('&' != p.charAt(0) ? '&' : '') + p),
                              (b[p] = []),
                              (d = 1))),
                            m = 0;
                          m < b[p].length;
                          m++
                        )
                          (g = b[p][m]),
                            g == f[k] &&
                              (e &&
                                (a.c +=
                                  '&u=' +
                                  a.escape(g) +
                                  ('&' != p.charAt(0) ? '&' : '') +
                                  p +
                                  '&u=0'),
                              b[p].splice(m, 1),
                              (d = 1));
                  c || (d = 1);
                  if (d) {
                    e = '';
                    m = 2;
                    !c && a.c && ((e = a.escape(f.join(',')) + '=' + a.escape(a.c)), (m = 1));
                    for (p in b)
                      !Object.prototype[p] &&
                        0 < m &&
                        0 < b[p].length &&
                        ((e += (e ? '&' : '') + a.escape(b[p].join(',')) + '=' + a.escape(p)),
                        m--);
                    a.cookieWrite('s_sq', e);
                  }
                }
              }
              return c;
            };
            a.ob = function () {
              if (!a.zb) {
                var c = new Date(),
                  b = r.location,
                  d,
                  f,
                  e = (f = d = ''),
                  g = '',
                  m = '',
                  k = '1.2',
                  n = a.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N',
                  q = '',
                  s = '';
                if (
                  c.setUTCDate &&
                  ((k = '1.3'), (0).toPrecision && ((k = '1.5'), (c = []), c.forEach))
                ) {
                  k = '1.6';
                  f = 0;
                  d = {};
                  try {
                    (f = new Iterator(d)),
                      f.next &&
                        ((k = '1.7'),
                        c.reduce &&
                          ((k = '1.8'),
                          k.trim &&
                            ((k = '1.8.1'),
                            Date.parse && ((k = '1.8.2'), Object.create && (k = '1.8.5')))));
                  } catch (t) {}
                }
                d = screen.width + 'x' + screen.height;
                e = navigator.javaEnabled() ? 'Y' : 'N';
                f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
                g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
                m = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
                try {
                  a.b.addBehavior('#default#homePage'), (q = a.b.Eb(b) ? 'Y' : 'N');
                } catch (u) {}
                try {
                  a.b.addBehavior('#default#clientCaps'), (s = a.b.connectionType);
                } catch (x) {}
                a.resolution = d;
                a.colorDepth = f;
                a.javascriptVersion = k;
                a.javaEnabled = e;
                a.cookiesEnabled = n;
                a.browserWidth = g;
                a.browserHeight = m;
                a.connectionType = s;
                a.homepage = q;
                a.zb = 1;
              }
            };
            a.M = {};
            a.loadModule = function (c, b) {
              var d = a.M[c];
              if (!d) {
                d = k['AppMeasurement_Module_' + c] ? new k['AppMeasurement_Module_' + c](a) : {};
                a.M[c] = a[c] = d;
                d.Sa = function () {
                  return d.Wa;
                };
                d.Xa = function (b) {
                  if ((d.Wa = b))
                    (a[c + '_onLoad'] = b), a.ea(c + '_onLoad', [a, d], 1) || b(a, d);
                };
                try {
                  Object.defineProperty
                    ? Object.defineProperty(d, 'onLoad', { get: d.Sa, set: d.Xa })
                    : (d._olc = 1);
                } catch (f) {
                  d._olc = 1;
                }
              }
              b && ((a[c + '_onLoad'] = b), a.ea(c + '_onLoad', [a, d], 1) || b(a, d));
            };
            a.l = function (c) {
              var b, d;
              for (b in a.M)
                if (
                  !Object.prototype[b] &&
                  (d = a.M[b]) &&
                  (d._olc && d.onLoad && ((d._olc = 0), d.onLoad(a, d)), d[c] && d[c]())
                )
                  return 1;
              return 0;
            };
            a.qb = function () {
              var c = Math.floor(10000000000000 * Math.random()),
                b = a.visitorSampling,
                d = a.visitorSamplingGroup,
                d =
                  's_vsn_' +
                  (a.visitorNamespace ? a.visitorNamespace : a.account) +
                  (d ? '_' + d : ''),
                f = a.cookieRead(d);
              if (b) {
                f && (f = parseInt(f));
                if (!f) {
                  if (!a.cookieWrite(d, c)) return 0;
                  f = c;
                }
                if (f % 10000 > v) return 0;
              }
              return 1;
            };
            a.N = function (c, b) {
              var d, f, e, g, m, k;
              for (d = 0; 2 > d; d++)
                for (f = 0 < d ? a.ra : a.e, e = 0; e < f.length; e++)
                  if (((g = f[e]), (m = c[g]) || c['!' + g])) {
                    if (!b && ('contextData' == g || 'retrieveLightData' == g) && a[g])
                      for (k in a[g]) m[k] || (m[k] = a[g][k]);
                    a[g] = m;
                  }
            };
            a.La = function (c, b) {
              var d, f, e, g;
              for (d = 0; 2 > d; d++)
                for (f = 0 < d ? a.ra : a.e, e = 0; e < f.length; e++)
                  (g = f[e]), (c[g] = a[g]), b || c[g] || (c['!' + g] = 1);
            };
            a.ib = function (a) {
              var b,
                d,
                f,
                e,
                g,
                k = 0,
                p,
                n = '',
                q = '';
              if (
                a &&
                255 < a.length &&
                ((b = '' + a),
                (d = b.indexOf('?')),
                0 < d &&
                  ((p = b.substring(d + 1)),
                  (b = b.substring(0, d)),
                  (e = b.toLowerCase()),
                  (f = 0),
                  'http://' == e.substring(0, 7)
                    ? (f += 7)
                    : 'https://' == e.substring(0, 8) && (f += 8),
                  (d = e.indexOf('/', f)),
                  0 < d &&
                    ((e = e.substring(f, d)),
                    (g = b.substring(d)),
                    (b = b.substring(0, d)),
                    0 <= e.indexOf('google')
                      ? (k = ',q,ie,start,search_key,word,kw,cd,')
                      : 0 <= e.indexOf('yahoo.co') && (k = ',p,ei,'),
                    k && p)))
              ) {
                if ((a = p.split('&')) && 1 < a.length) {
                  for (f = 0; f < a.length; f++)
                    (e = a[f]),
                      (d = e.indexOf('=')),
                      0 < d && 0 <= k.indexOf(',' + e.substring(0, d) + ',')
                        ? (n += (n ? '&' : '') + e)
                        : (q += (q ? '&' : '') + e);
                  n && q ? (p = n + '&' + q) : (q = '');
                }
                d = 253 - (p.length - q.length) - b.length;
                a = b + (0 < d ? g.substring(0, d) : '') + '?' + p;
              }
              return a;
            };
            a.Ra = function (c) {
              var b = a.d.visibilityState,
                d = ['webkitvisibilitychange', 'visibilitychange'];
              b || (b = a.d.webkitVisibilityState);
              if (b && 'prerender' == b) {
                if (c)
                  for (b = 0; b < d.length; b++)
                    a.d.addEventListener(d[b], function () {
                      var b = a.d.visibilityState;
                      b || (b = a.d.webkitVisibilityState);
                      'visible' == b && c();
                    });
                return !1;
              }
              return !0;
            };
            a.aa = !1;
            a.F = !1;
            a.Za = function () {
              a.F = !0;
              a.i();
            };
            a.Y = !1;
            a.R = !1;
            a.Va = function (c) {
              a.marketingCloudVisitorID = c;
              a.R = !0;
              a.i();
            };
            a.ba = !1;
            a.S = !1;
            a.$a = function (c) {
              a.visitorOptedOut = c;
              a.S = !0;
              a.i();
            };
            a.V = !1;
            a.O = !1;
            a.Na = function (c) {
              a.analyticsVisitorID = c;
              a.O = !0;
              a.i();
            };
            a.X = !1;
            a.Q = !1;
            a.Pa = function (c) {
              a.audienceManagerLocationHint = c;
              a.Q = !0;
              a.i();
            };
            a.W = !1;
            a.P = !1;
            a.Oa = function (c) {
              a.audienceManagerBlob = c;
              a.P = !0;
              a.i();
            };
            a.Qa = function (c) {
              a.maxDelay || (a.maxDelay = 250);
              return a.l('_d')
                ? (c &&
                    setTimeout(function () {
                      c();
                    }, a.maxDelay),
                  !1)
                : !0;
            };
            a.Z = !1;
            a.D = !1;
            a.qa = function () {
              a.D = !0;
              a.i();
            };
            a.isReadyToTrack = function () {
              var c = !0,
                b = a.visitor;
              a.aa || a.F || (a.Ra(a.Za) ? (a.F = !0) : (a.aa = !0));
              if (a.aa && !a.F) return !1;
              b &&
                b.isAllowed() &&
                (a.Y ||
                  a.marketingCloudVisitorID ||
                  !b.getMarketingCloudVisitorID ||
                  ((a.Y = !0),
                  (a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.Va])),
                  a.marketingCloudVisitorID && (a.R = !0)),
                a.ba ||
                  a.visitorOptedOut ||
                  !b.isOptedOut ||
                  ((a.ba = !0),
                  (a.visitorOptedOut = b.isOptedOut([a, a.$a])),
                  a.visitorOptedOut != q && (a.S = !0)),
                a.V ||
                  a.analyticsVisitorID ||
                  !b.getAnalyticsVisitorID ||
                  ((a.V = !0),
                  (a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.Na])),
                  a.analyticsVisitorID && (a.O = !0)),
                a.X ||
                  a.audienceManagerLocationHint ||
                  !b.getAudienceManagerLocationHint ||
                  ((a.X = !0),
                  (a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.Pa])),
                  a.audienceManagerLocationHint && (a.Q = !0)),
                a.W ||
                  a.audienceManagerBlob ||
                  !b.getAudienceManagerBlob ||
                  ((a.W = !0),
                  (a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Oa])),
                  a.audienceManagerBlob && (a.P = !0)),
                (a.Y && !a.R && !a.marketingCloudVisitorID) ||
                  (a.V && !a.O && !a.analyticsVisitorID) ||
                  (a.X && !a.Q && !a.audienceManagerLocationHint) ||
                  (a.W && !a.P && !a.audienceManagerBlob) ||
                  (a.ba && !a.S)) &&
                (c = !1);
              a.Z || a.D || (a.Qa(a.qa) ? (a.D = !0) : (a.Z = !0));
              a.Z && !a.D && (c = !1);
              return c;
            };
            a.k = q;
            a.q = 0;
            a.callbackWhenReadyToTrack = function (c, b, d) {
              var f;
              f = {};
              f.eb = c;
              f.cb = b;
              f.ab = d;
              a.k == q && (a.k = []);
              a.k.push(f);
              0 == a.q && (a.q = setInterval(a.i, 100));
            };
            a.i = function () {
              var c;
              if (a.isReadyToTrack() && (a.Ya(), a.k != q))
                for (; 0 < a.k.length; ) (c = a.k.shift()), c.cb.apply(c.eb, c.ab);
            };
            a.Ya = function () {
              a.q && (clearInterval(a.q), (a.q = 0));
            };
            a.Ta = function (c) {
              var b,
                d,
                f = q,
                e = q;
              if (!a.isReadyToTrack()) {
                b = [];
                if (c != q) for (d in ((f = {}), c)) f[d] = c[d];
                e = {};
                a.La(e, !0);
                b.push(f);
                b.push(e);
                a.callbackWhenReadyToTrack(a, a.track, b);
                return !0;
              }
              return !1;
            };
            a.lb = function () {
              var c = a.cookieRead('s_fid'),
                b = '',
                d = '',
                f;
              f = 8;
              var e = 4;
              if (!c || 0 > c.indexOf('-')) {
                for (c = 0; 16 > c; c++)
                  (f = Math.floor(Math.random() * f)),
                    (b += '0123456789ABCDEF'.substring(f, f + 1)),
                    (f = Math.floor(Math.random() * e)),
                    (d += '0123456789ABCDEF'.substring(f, f + 1)),
                    (f = e = 16);
                c = b + '-' + d;
              }
              a.cookieWrite('s_fid', c, 1) || (c = 0);
              return c;
            };
            a.t = a.track = function (c, b) {
              var d,
                f = new Date(),
                e =
                  's' +
                  (Math.floor(f.getTime() / 10800000) % 10) +
                  Math.floor(10000000000000 * Math.random()),
                g = f.getYear(),
                g =
                  't=' +
                  a.escape(
                    f.getDate() +
                      '/' +
                      f.getMonth() +
                      '/' +
                      (1900 > g ? g + 1900 : g) +
                      ' ' +
                      f.getHours() +
                      ':' +
                      f.getMinutes() +
                      ':' +
                      f.getSeconds() +
                      ' ' +
                      f.getDay() +
                      ' ' +
                      f.getTimezoneOffset()
                  );
              a.visitor &&
                (a.visitor.jb && (a.authState = a.visitor.jb()),
                !a.supplementalDataID &&
                  a.visitor.getSupplementalDataID &&
                  (a.supplementalDataID = a.visitor.getSupplementalDataID(
                    'AppMeasurement:' + a._in,
                    a.expectSupplementalData ? !1 : !0
                  )));
              a.l('_s');
              a.Ta(c) ||
                (b && a.N(b),
                c && ((d = {}), a.La(d, 0), a.N(c)),
                a.qb() &&
                  !a.visitorOptedOut &&
                  (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.lb()),
                  a.vb(),
                  a.usePlugins && a.doPlugins && a.doPlugins(a),
                  a.account &&
                    (a.abort ||
                      (a.trackOffline &&
                        !a.timestamp &&
                        (a.timestamp = Math.floor(f.getTime() / 1000)),
                      (f = k.location),
                      a.pageURL || (a.pageURL = f.href ? f.href : f),
                      a.referrer || a.Ma || (a.referrer = r.document.referrer),
                      (a.Ma = 1),
                      (a.referrer = a.ib(a.referrer)),
                      a.l('_g')),
                    a.nb() &&
                      !a.abort &&
                      (a.ob(), (g += a.mb()), a.ub(e, g), a.l('_t'), (a.referrer = '')))),
                c && a.N(d, 1));
              a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.c = a.lightProfileID = 0;
            };
            a.tl = a.trackLink = function (c, b, d, f, e) {
              a.linkObject = c;
              a.linkType = b;
              a.linkName = d;
              e && ((a.j = c), (a.u = e));
              return a.track(f);
            };
            a.trackLight = function (c, b, d, f) {
              a.lightProfileID = c;
              a.lightStoreForSeconds = b;
              a.lightIncrementBy = d;
              return a.track(f);
            };
            a.clearVars = function () {
              var c, b;
              for (c = 0; c < a.e.length; c++)
                if (
                  ((b = a.e[c]),
                  'prop' == b.substring(0, 4) ||
                    'eVar' == b.substring(0, 4) ||
                    'hier' == b.substring(0, 4) ||
                    'list' == b.substring(0, 4) ||
                    'channel' == b ||
                    'events' == b ||
                    'eventList' == b ||
                    'products' == b ||
                    'productList' == b ||
                    'purchaseID' == b ||
                    'transactionID' == b ||
                    'state' == b ||
                    'zip' == b ||
                    'campaign' == b)
                )
                  a[b] = void 0;
            };
            a.tagContainerMarker = '';
            a.ub = function (c, b) {
              var d,
                f = a.trackingServer;
              d = '';
              var e = a.dc,
                g = 'sc.',
                k = a.visitorNamespace;
              f
                ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure)
                : (k ||
                    ((k = a.account),
                    (f = k.indexOf(',')),
                    0 <= f && (k = k.substring(0, f)),
                    (k = k.replace(/[^A-Za-z0-9]/g, ''))),
                  d || (d = '2o7.net'),
                  (e = e ? ('' + e).toLowerCase() : 'd1'),
                  '2o7.net' == d && ('d1' == e ? (e = '112') : 'd2' == e && (e = '122'), (g = '')),
                  (f = k + '.' + e + '.' + g + d));
              d = a.ssl ? 'https://' : 'http://';
              e = a.AudienceManagement && a.AudienceManagement.isReady();
              d +=
                f +
                '/b/ss/' +
                a.account +
                '/' +
                (a.mobile ? '5.' : '') +
                (e ? '10' : '1') +
                '/JS-' +
                a.version +
                (a.yb ? 'T' : '') +
                (a.tagContainerMarker ? '-' + a.tagContainerMarker : '') +
                '/' +
                c +
                '?AQB=1&ndh=1&pf=1&' +
                (e ? 'callback=s_c_il[' + a._in + '].AudienceManagement.passData&' : '') +
                b +
                '&AQE=1';
              a.hb(d);
              a.ga();
            };
            a.hb = function (c) {
              a.g || a.pb();
              a.g.push(c);
              a.ia = a.A();
              a.Ja();
            };
            a.pb = function () {
              a.g = a.rb();
              a.g || (a.g = []);
            };
            a.rb = function () {
              var c, b;
              if (a.na()) {
                try {
                  (b = k.localStorage.getItem(a.la())) && (c = k.JSON.parse(b));
                } catch (d) {}
                return c;
              }
            };
            a.na = function () {
              var c = !0;
              (a.trackOffline && a.offlineFilename && k.localStorage && k.JSON) || (c = !1);
              return c;
            };
            a.Aa = function () {
              var c = 0;
              a.g && (c = a.g.length);
              a.o && c++;
              return c;
            };
            a.ga = function () {
              if (a.o && (a.v && a.v.complete && a.v.timeout && a.v.pa(), a.o)) return;
              a.Ba = q;
              if (a.ma) a.ia > a.K && a.Ha(a.g), a.oa(500);
              else {
                var c = a.bb();
                if (0 < c) a.oa(c);
                else if ((c = a.xa())) (a.o = 1), a.tb(c), a.xb(c);
              }
            };
            a.oa = function (c) {
              a.Ba || (c || (c = 0), (a.Ba = setTimeout(a.ga, c)));
            };
            a.bb = function () {
              var c;
              if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
              c = a.A() - a.Ga;
              return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
            };
            a.xa = function () {
              if (0 < a.g.length) return a.g.shift();
            };
            a.tb = function (c) {
              if (a.debugTracking) {
                var b = 'AppMeasurement Debug: ' + c;
                c = c.split('&');
                var d;
                for (d = 0; d < c.length; d++) b += '\n\t' + a.unescape(c[d]);
                a.sb(b);
              }
            };
            a.Ua = function () {
              return a.marketingCloudVisitorID || a.analyticsVisitorID;
            };
            a.U = !1;
            var s;
            try {
              s = JSON.parse('{"x":"y"}');
            } catch (x) {
              s = null;
            }
            s && 'y' == s.x
              ? ((a.U = !0),
                (a.T = function (a) {
                  return JSON.parse(a);
                }))
              : k.$ && k.$.parseJSON
              ? ((a.T = function (a) {
                  return k.$.parseJSON(a);
                }),
                (a.U = !0))
              : (a.T = function () {
                  return null;
                });
            a.xb = function (c) {
              var b, d, f;
              a.Ua() &&
                2047 < c.length &&
                ('undefined' != typeof XMLHttpRequest &&
                  ((b = new XMLHttpRequest()), 'withCredentials' in b ? (d = 1) : (b = 0)),
                b || 'undefined' == typeof XDomainRequest || ((b = new XDomainRequest()), (d = 2)),
                b &&
                  a.AudienceManagement &&
                  a.AudienceManagement.isReady() &&
                  (a.U ? (b.ta = !0) : (b = 0)));
              !b && a.Ka && (c = c.substring(0, 2047));
              !b &&
                a.d.createElement &&
                a.AudienceManagement &&
                a.AudienceManagement.isReady() &&
                (b = a.d.createElement('SCRIPT')) &&
                'async' in b &&
                ((f = (f = a.d.getElementsByTagName('HEAD')) && f[0] ? f[0] : a.d.body)
                  ? ((b.type = 'text/javascript'), b.setAttribute('async', 'async'), (d = 3))
                  : (b = 0));
              b ||
                ((b = new Image()),
                (b.alt = ''),
                b.abort ||
                  'undefined' === typeof k.InstallTrigger ||
                  (b.abort = function () {
                    b.src = q;
                  }));
              b.va = function () {
                try {
                  b.timeout && (clearTimeout(b.timeout), (b.timeout = 0));
                } catch (a) {}
              };
              b.onload = b.pa = function () {
                b.va();
                a.gb();
                a.ca();
                a.o = 0;
                a.ga();
                if (b.ta) {
                  b.ta = !1;
                  try {
                    var c = a.T(b.responseText);
                    a.AudienceManagement.passData(c);
                  } catch (d) {}
                }
              };
              b.onabort = b.onerror = b.ya = function () {
                b.va();
                (a.trackOffline || a.ma) && a.o && a.g.unshift(a.fb);
                a.o = 0;
                a.ia > a.K && a.Ha(a.g);
                a.ca();
                a.oa(500);
              };
              b.onreadystatechange = function () {
                4 == b.readyState && (200 == b.status ? b.pa() : b.ya());
              };
              a.Ga = a.A();
              if (1 == d || 2 == d) {
                var e = c.indexOf('?');
                f = c.substring(0, e);
                e = c.substring(e + 1);
                e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, '');
                1 == d
                  ? (b.open('POST', f, !0), b.send(e))
                  : 2 == d && (b.open('POST', f), b.send(e));
              } else if (((b.src = c), 3 == d)) {
                if (a.Ea)
                  try {
                    f.removeChild(a.Ea);
                  } catch (g) {}
                f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                a.Ea = a.v;
              }
              b.timeout = setTimeout(function () {
                b.timeout &&
                  (b.complete ? b.pa() : (a.trackOffline && b.abort && b.abort(), b.ya()));
              }, 5000);
              a.fb = c;
              a.v = k['s_i_' + a.replace(a.account, ',', '_')] = b;
              if ((a.useForcedLinkTracking && a.G) || a.u)
                a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
                  (a.da = setTimeout(a.ca, a.forcedLinkTrackingTimeout));
            };
            a.gb = function () {
              if (a.na() && !(a.Fa > a.K))
                try {
                  k.localStorage.removeItem(a.la()), (a.Fa = a.A());
                } catch (c) {}
            };
            a.Ha = function (c) {
              if (a.na()) {
                a.Ja();
                try {
                  k.localStorage.setItem(a.la(), k.JSON.stringify(c)), (a.K = a.A());
                } catch (b) {}
              }
            };
            a.Ja = function () {
              if (a.trackOffline) {
                if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
                for (; a.g.length > a.offlineLimit; ) a.xa();
              }
            };
            a.forceOffline = function () {
              a.ma = !0;
            };
            a.forceOnline = function () {
              a.ma = !1;
            };
            a.la = function () {
              return a.offlineFilename + '-' + a.visitorNamespace + a.account;
            };
            a.A = function () {
              return new Date().getTime();
            };
            a.Ca = function (a) {
              a = a.toLowerCase();
              return 0 != a.indexOf('#') &&
                0 != a.indexOf('about:') &&
                0 != a.indexOf('opera:') &&
                0 != a.indexOf('javascript:')
                ? !0
                : !1;
            };
            a.setTagContainer = function (c) {
              var b, d, f;
              a.yb = c;
              for (b = 0; b < a._il.length; b++)
                if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
                  a.N(d);
                  if (d.lmq) for (b = 0; b < d.lmq.length; b++) (f = d.lmq[b]), a.loadModule(f.n);
                  if (d.ml)
                    for (f in d.ml)
                      if (a[f])
                        for (b in ((c = a[f]), (f = d.ml[f]), f))
                          !Object.prototype[b] &&
                            ('function' != typeof f[b] || 0 > ('' + f[b]).indexOf('s_c_il')) &&
                            (c[b] = f[b]);
                  if (d.mmq)
                    for (b = 0; b < d.mmq.length; b++)
                      (f = d.mmq[b]),
                        a[f.m] &&
                          ((c = a[f.m]),
                          c[f.f] &&
                            'function' == typeof c[f.f] &&
                            (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                  if (d.tq) for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                  d.s = a;
                  break;
                }
            };
            a.Util = {
              urlEncode: a.escape,
              urlDecode: a.unescape,
              cookieRead: a.cookieRead,
              cookieWrite: a.cookieWrite,
              getQueryParam: function (c, b, d) {
                var f;
                b || (b = a.pageURL ? a.pageURL : k.location);
                d || (d = '&');
                return c &&
                  b &&
                  ((b = '' + b),
                  (f = b.indexOf('?')),
                  0 <= f &&
                    ((b = d + b.substring(f + 1) + d),
                    (f = b.indexOf(d + c + '=')),
                    0 <= f &&
                      ((b = b.substring(f + d.length + c.length + 1)),
                      (f = b.indexOf(d)),
                      0 <= f && (b = b.substring(0, f)),
                      0 < b.length)))
                  ? a.unescape(b)
                  : '';
              },
            };
            a.C = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(
              ' '
            );
            a.e = a.C.concat(
              'purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(
                ' '
              )
            );
            a.ja = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
              ' '
            );
            a.L = a.ja.slice(0);
            a.ra = 'account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement'.split(
              ' '
            );
            for (n = 0; 250 >= n; n++)
              76 > n && (a.e.push('prop' + n), a.L.push('prop' + n)),
                a.e.push('eVar' + n),
                a.L.push('eVar' + n),
                6 > n && a.e.push('hier' + n),
                4 > n && a.e.push('list' + n);
            n = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest'.split(
              ' '
            );
            a.e = a.e.concat(n);
            a.C = a.C.concat(n);
            a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf('https');
            a.charSet = 'UTF-8';
            a.contextData = {};
            a.offlineThrottleDelay = 0;
            a.offlineFilename = 'AppMeasurement.offline';
            a.Ga = 0;
            a.ia = 0;
            a.K = 0;
            a.Fa = 0;
            a.linkDownloadFileTypes =
              'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
            a.w = k;
            a.d = k.document;
            try {
              if (((a.Ka = !1), navigator)) {
                var y = navigator.userAgent;
                if (
                  'Microsoft Internet Explorer' == navigator.appName ||
                  0 <= y.indexOf('MSIE ') ||
                  (0 <= y.indexOf('Trident/') && 0 <= y.indexOf('Windows NT 6'))
                )
                  a.Ka = !0;
              }
            } catch (z) {}
            a.ca = function () {
              a.da && (k.clearTimeout(a.da), (a.da = q));
              a.j && a.G && a.j.dispatchEvent(a.G);
              a.u &&
                ('function' == typeof a.u ? a.u() : a.j && a.j.href && (a.d.location = a.j.href));
              a.j = a.G = a.u = 0;
            };
            a.Ia = function () {
              const $___old_423f63ca25f949a5 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
              try {
                if ($___old_423f63ca25f949a5)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_47c01efa79e9f191.userAgent
                  ));
                return function () {
                  a.b = a.d.body;
                  a.b
                    ? ((a.r = function (c) {
                        var b, d, f, e, g;
                        if (
                          !((a.d && a.d.getElementById('cppXYctnr')) || (c && c['s_fe_' + a._in]))
                        ) {
                          if (a.ua)
                            if (a.useForcedLinkTracking) a.b.removeEventListener('click', a.r, !1);
                            else {
                              a.b.removeEventListener('click', a.r, !0);
                              a.ua = a.useForcedLinkTracking = 0;
                              return;
                            }
                          else a.useForcedLinkTracking = 0;
                          a.clickObject = c.srcElement ? c.srcElement : c.target;
                          try {
                            if (
                              !a.clickObject ||
                              (a.J && a.J == a.clickObject) ||
                              !(
                                a.clickObject.tagName ||
                                a.clickObject.parentElement ||
                                a.clickObject.parentNode
                              )
                            )
                              a.clickObject = 0;
                            else {
                              var m = (a.J = a.clickObject);
                              a.ha && (clearTimeout(a.ha), (a.ha = 0));
                              a.ha = setTimeout(function () {
                                a.J == m && (a.J = 0);
                              }, 10000);
                              f = a.Aa();
                              a.track();
                              if (f < a.Aa() && a.useForcedLinkTracking && c.target) {
                                for (
                                  e = c.target;
                                  e &&
                                  e != a.b &&
                                  'A' != e.tagName.toUpperCase() &&
                                  'AREA' != e.tagName.toUpperCase();

                                )
                                  e = e.parentNode;
                                if (
                                  e &&
                                  ((g = e.href),
                                  a.Ca(g) || (g = 0),
                                  (d = e.target),
                                  c.target.dispatchEvent &&
                                    g &&
                                    (!d ||
                                      '_self' == d ||
                                      '_top' == d ||
                                      '_parent' == d ||
                                      (k.name && d == k.name)))
                                ) {
                                  try {
                                    b = a.d.createEvent('MouseEvents');
                                  } catch (n) {
                                    b = new k.MouseEvent();
                                  }
                                  if (b) {
                                    try {
                                      b.initMouseEvent(
                                        'click',
                                        c.bubbles,
                                        c.cancelable,
                                        c.view,
                                        c.detail,
                                        c.screenX,
                                        c.screenY,
                                        c.clientX,
                                        c.clientY,
                                        c.ctrlKey,
                                        c.altKey,
                                        c.shiftKey,
                                        c.metaKey,
                                        c.button,
                                        c.relatedTarget
                                      );
                                    } catch (q) {
                                      b = 0;
                                    }
                                    b &&
                                      ((b['s_fe_' + a._in] = b.s_fe = 1),
                                      c.stopPropagation(),
                                      c.stopImmediatePropagation && c.stopImmediatePropagation(),
                                      c.preventDefault(),
                                      (a.j = c.target),
                                      (a.G = b));
                                  }
                                }
                              }
                            }
                          } catch (r) {
                            a.clickObject = 0;
                          }
                        }
                      }),
                      a.b && a.b.attachEvent
                        ? a.b.attachEvent('onclick', a.r)
                        : a.b &&
                          a.b.addEventListener &&
                          (navigator &&
                            ((0 <= navigator.userAgent.indexOf('WebKit') && a.d.createEvent) ||
                              (0 <= navigator.userAgent.indexOf('Firefox/2') && k.MouseEvent)) &&
                            ((a.ua = 1),
                            (a.useForcedLinkTracking = 1),
                            a.b.addEventListener('click', a.r, !0)),
                          a.b.addEventListener('click', a.r, !1)))
                    : setTimeout(a.Ia, 30);
                }.apply(this, arguments);
              } finally {
                if ($___old_423f63ca25f949a5)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_423f63ca25f949a5
                  ));
              }
            };
            a.Ia();
            a.loadModule('ActivityMap');
          }.apply(this, arguments);
        } finally {
          if ($___old_53b9d6d5cc79aa0a)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_53b9d6d5cc79aa0a
            ));
        }
      }
      AppMeasurement = $___var_09ffa4072ada45d5;
      ({}.constructor.defineProperty(AppMeasurement, 'name', {
        configurable: true,
        enumerable: false,
        value: 'AppMeasurement',
        writable: false,
      }));
      function $___var_8d9e9ddf90d4682c (a) {
        var k,
          q = window.s_c_il,
          r,
          n,
          t = a.split(','),
          u,
          s,
          x = 0;
        if (q)
          for (r = 0; !x && r < q.length; ) {
            k = q[r];
            if ('s_c' == k._c && (k.account || k.oun))
              if (k.account && k.account == a) x = 1;
              else
                for (
                  n = k.account ? k.account : k.oun,
                    n = k.allAccounts ? k.allAccounts : n.split(','),
                    u = 0;
                  u < t.length;
                  u++
                )
                  for (s = 0; s < n.length; s++) t[u] == n[s] && (x = 1);
            r++;
          }
        x || (k = new AppMeasurement());
        k.setAccount ? k.setAccount(a) : k.sa && k.sa(a);
        return k;
      }
      s_gi = $___var_8d9e9ddf90d4682c;
      ({}.constructor.defineProperty(s_gi, 'name', {
        configurable: true,
        enumerable: false,
        value: 's_gi',
        writable: false,
      }));
      AppMeasurement.getInstance = s_gi;
      window.s_objectID || (window.s_objectID = 0);
      function $___var_672240fe5c54129f () {
        var a = window,
          k = a.s_giq,
          q,
          r,
          n;
        if (k)
          for (q = 0; q < k.length; q++)
            (r = k[q]),
              (n = s_gi(r.oun)),
              n.setAccount(r.un),
              n.setTagContainer(r.tagContainerName);
        a.s_giq = 0;
      }
      s_pgicq = $___var_672240fe5c54129f;
      ({}.constructor.defineProperty(s_pgicq, 'name', {
        configurable: true,
        enumerable: false,
        value: 's_pgicq',
        writable: false,
      }));
      s_pgicq();
      if (navigator.userAgent.match(/Google Web Preview/i)) {
        s.t = new Function();
        s.tl = new Function();
      }
      var $___var_ebebe238b5d63d8f = true;
      st_hook_flg = $___var_ebebe238b5d63d8f;
      var $___var_312ce4b64d6f2f8c = t_org || s.t;
      t_org = $___var_312ce4b64d6f2f8c;
      s.t = function () {
        try {
          if (st_hook_flg) {
            if (sendDataToBI()) {
              (function () {
                var el = document.createElement('script');
                el.type = 'text/javascript';
                el.async = true;
                el.src =
                  ('https:' == document.location.protocol ? 'https://' : 'http://') +
                  'cdn.bigmining.com/js/k3c_bigmining.js';
                var sct = document.getElementsByTagName('script')[0];
                sct.parentNode.insertBefore(el, sct);
              })();
            }
          }
          st_hook_flg = false;
        } catch (e) {}
        return t_org.apply(this, arguments);
      };
      function $___var_092ff02c1de4ed03 () {
        if (
          (typeof s.prop1 == 'undefined' ||
            (typeof s.prop1 !== 'undefined' &&
              s.prop1.indexOf(decodeURIComponent('%e8%a8%98%e4%ba%8b%e5%ba%83%e5%91%8a')) < 0 &&
              s.prop1.indexOf(
                decodeURIComponent('%e3%82%b7%e3%83%a7%e3%83%83%e3%83%97%e7%89%b9%e9%9b%86')
              ) < 0 &&
              s.prop1.indexOf(
                decodeURIComponent(
                  '%e7%89%b9%e9%9b%86%e3%82%b7%e3%83%a7%e3%83%83%e3%83%97%e9%80%81%e5%ae%a2'
                )
              ) < 0)) &&
          (typeof s.prop75 == 'undefined' ||
            (typeof s.prop75 !== 'undefined' && s.prop75 !== 'ns'))
        ) {
          return true;
        } else {
          return false;
        }
      }
      sendDataToBI = $___var_092ff02c1de4ed03;
      ({}.constructor.defineProperty(sendDataToBI, 'name', {
        configurable: true,
        enumerable: false,
        value: 'sendDataToBI',
        writable: false,
      }));
    })();
  } finally {
    if ($___old_cb2b94318f83533e)
      ({}.constructor.defineProperty(Navigator.prototype, 'userAgent', $___old_cb2b94318f83533e));
  }
}
