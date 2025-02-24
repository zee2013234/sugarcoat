var s_getLoadTime,
  s,
  s_doPlugins,
  AppMeasurement_Module_Integrate,
  AppMeasurement_Module_Media,
  AppMeasurement_Module_ActivityMap,
  AppMeasurement,
  s_gi,
  s_pgicq;
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
  (function () {
    function $___var_27a1bc0c5f582027 () {
      const $___old_7ca3f221f4ec4ff8 = {}.constructor.getOwnPropertyDescriptor(
        window,
        'performance'
      );
      try {
        if ($___old_7ca3f221f4ec4ff8)
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
            s_loadT = a ? Math.round((b - a) / 100) : '';
          }
          return s_loadT;
        }.apply(this, arguments);
      } finally {
        if ($___old_7ca3f221f4ec4ff8)
          ({}.constructor.defineProperty(window, 'performance', $___old_7ca3f221f4ec4ff8));
      }
    }
    s_getLoadTime = $___var_27a1bc0c5f582027;
    ({}.constructor.defineProperty(s_getLoadTime, 'name', {
      configurable: true,
      enumerable: false,
      value: 's_getLoadTime',
      writable: false,
    }));
    s_getLoadTime();
    if (typeof metaData != 'undefined') {
      var s_account = metaData['report_suite'];
      s_account = !s_account ? metaData.repsuite : s_account;
    } else if (typeof window.reportsuite_id != 'undefined') {
      var s_account = window.reportsuite_id;
    } else if (typeof window.repsuite != 'undefined') {
      var s_account = window.repsuite;
    } else {
      var s_account = 'symanteccom';
    }
    if (typeof _numeric_ == 'undefined') {
      _numeric_ = {};
    }
    if (typeof _numeric_.utils == 'undefined') {
      _numeric_.utils = {};
    }
    var $___var_5cb752bd5e6dba09 = s_gi(s_account);
    s = $___var_5cb752bd5e6dba09;
    s.charSet = 'UTF-8';
    if (typeof PageN == 'undefined') {
      PageN = '';
    }
    s.trackDownloadLinks = true;
    s.trackExternalLinks = true;
    s.trackInlineStats = true;
    s.linkDownloadFileTypes =
      'exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,gz,gg,iso,kmz,xml,mp4,m4a,air,ppt,pptx,docx,xlsx,m4v,dmg,tar,txt,jpg,jpeg,png,gif,tiff,bmp,rar,msi,rpm,swf,1of2,2of2,1of3,2of3,3of3,1of4,2of4,3of4,4of4,1of5,2of5,3of5,4of5,5of5';
    s.linkInternalFilters =
      '#,javascript:,norton.com,nortonstore.jp,nortonstore.cn,nortonstore.hk,nortonstore.kr,nortonstore.tw,backup.com,ustudio.com,lifelock.com,nortonlifelock.com,surfeasy.com';
    s.linkLeaveQueryString = false;
    s.linkTrackVars = 'None';
    s.linkTrackEvents = 'None';
    s.trackingServer = 'om.norton.com';
    s.trackingServerSecure = 'oms.norton.com';
    s.dc = 112;
    s.wd = window;
    s.eVar47 = 's_code';
    if (typeof Visitor != 'undefined') {
      s.visitor = Visitor.getInstance('67C716D751E567F70A490D4C@AdobeOrg');
    }
    s.setCustomEvent = function (eventToAdd) {
      var s = this;
      if (typeof s.events != 'undefined' && s.events.length) {
        if (s.events.indexOf(eventToAdd) < 0) {
          s.events += ',' + eventToAdd;
        }
      } else {
        if (typeof s.events == 'undefined' || s.events.indexOf(eventToAdd) < 0) {
          s.events = eventToAdd;
        }
      }
    };
    _numeric_.utils.getCookie = function (name) {
      var start = document.cookie.indexOf(name + '=');
      var len = start + name.length + 1;
      if (!start && name != document.cookie.substring(0, name.length)) {
        return null;
      }
      if (start == -1) return null;
      var end = document.cookie.indexOf(';', len);
      if (end == -1) end = document.cookie.length;
      return decodeURI(document.cookie.substring(len, end));
    };
    _numeric_.utils.deleteCookie = function (name, domain, path) {
      if (_numeric_.utils.getCookie(name)) {
        document.cookie =
          name +
          '=' +
          (path ? ';path=' + path : '') +
          (domain ? ';domain=' + domain : '') +
          ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
      }
    };
    _numeric_.utils.cookieIngredients = function (name, expires) {
      this.supercookie_name = name;
      this.name_value_delim = '~';
      this.cookie_delim = '|';
      this.chips = {};
      if (typeof expires == 'undefined') {
        this.expires = null;
      } else {
        expiration_date = new Date();
        expiration_date.setDate(expiration_date.getDate() + expires);
        this.expires = expiration_date;
      }
      this.add = function (n, val) {
        this.chips[n] = encodeURI(val);
      };
      this.eat = function (cname) {
        for (var key in this.chips) {
          if (key.indexOf(cname) >= 0) {
            delete this.chips[key];
            break;
          }
        }
      };
      this.getChip = function (cname) {
        var tmp = '';
        for (var key in this.chips) {
          if (key.indexOf(cname) >= 0) {
            tmp = decodeURI(this.chips[key]);
            return tmp;
            break;
          }
        }
        return '';
      };
      this.setChip = function (cname, cval, expires) {
        this.add(cname, cval);
        this.bake(this.supercookie_name, this.getAllChips(), this.expires);
      };
      this.fill = function (str) {
        if (str) {
          var strArray = str.split(this.cookie_delim);
          for (var i = 0; i < strArray.length; ++i) {
            var namevalpair = strArray[i].split(this.name_value_delim);
            this.add(namevalpair[0], namevalpair[1]);
          }
        }
      };
      this.bake = function (name, value, expires) {
        var path = '/',
          rootDomain = '';
        var domain = document.domain;
        var dparts = domain.split('.');
        var dl = dparts.length;
        if (dparts.length == 3) {
          rootDomain = dparts[1] + '.' + dparts[2];
        } else {
          rootDomain = domain;
        }
        var secure = false;
        var cookie =
          name +
          '=' +
          value +
          (expires == null ? '' : '; expires=' + expires.toGMTString()) +
          (path == null ? '' : '; path=' + path) +
          (rootDomain == null ? '' : '; domain=' + rootDomain) +
          (secure == true ? '; secure' : '');
        document.cookie = cookie;
      };
      this.getAllChips = function () {
        var tmpArray = new Array();
        for (var key in this.chips) {
          tmpArray.push(key + this.name_value_delim + this.chips[key]);
        }
        tmp = tmpArray.join(this.cookie_delim);
        return tmp;
      };
      this.deleteChip = function (cname) {
        if (this.getChip(cname)) {
          this.eat(cname);
          this.bake(this.supercookie_name, this.getAllChips());
          if (this.size == 0) {
            _numeric_.utils.deleteCookie(this.supercookie_name);
          }
        }
      };
      this.size = function () {
        var len = 0;
        for (var k in this.chips) {
          len++;
        }
        return len;
      };
    };
    _numeric_.utils.superCookie = new _numeric_.utils.cookieIngredients('naf');
    _numeric_.utils.superCookie.fill(
      _numeric_.utils.getCookie(_numeric_.utils.superCookie.supercookie_name)
    );
    if (location.hostname.indexOf('norton.com') > -1) {
      _numeric_.utils.superStackCookie = new _numeric_.utils.cookieIngredients(
        'channelStack',
        365
      );
      _numeric_.utils.superStackCookie.fill(
        _numeric_.utils.getCookie(_numeric_.utils.superStackCookie.supercookie_name)
      );
    }
    trackCustomDownload = function (dUrl, dName, dType) {
      var s = typeof window.s === 'undefined' ? s_gi(s_account) : window.s;
      s.linkTrackVars = 'events,prop33,eVar1,prop46,prop47,prop48,eVar49';
      s.linkTrackEvents = 'event1';
      s.prop33 = s.eVar1 = dUrl;
      s.prop48 = s.eVar49 = dName;
      s.prop46 = dType;
      s.prop47 = 'download';
      s.events = 'event1';
      s.tl(this, 'd', dUrl);
    };
    s.trackSSOPage = function () {
      var s = this;
      var aPage = s.pageName.split(':');
      if (
        typeof metaData != 'undefined' &&
        metaData['site_section'].toLowerCase().indexOf('norton.com') > -1
      ) {
        aPage = aPage.slice(0, 2);
      } else {
        aPage = aPage.slice(0, 3);
      }
      aPage.push('sso');
      s.eVar18 = s.pageName = aPage.join(':');
      s.linkTrackVars = '';
      s.linkTrackEvents = '';
      s.t();
    };
    if (typeof jQuery != 'undefined') {
      jQuery(document).ready(function () {
        jQuery(function () {
          if (jQuery('[data-tracksso]').length) {
            jQuery('[data-tracksso]').each(function (i) {
              jQuery(this).click(function () {
                s.trackSSOPage();
              });
            });
          }
        });
      });
    }
    if (
      typeof metaData != 'undefined' &&
      typeof metaData['site_section'] != 'undefined' &&
      metaData['site_section'].toLowerCase().indexOf('norton.com') > -1
    ) {
      s.pageName = metaData['page_name'];
      s.server = 'symantec';
      s.pageType = metaData['page_type'];
      s.prop2 = metaData['site_country'];
      s.prop3 = metaData['site_language'];
      s.prop14 = metaData['now_trafficsource_cookie_name'];
      s.prop17 = metaData['now_current_subchannel'];
      s.prop41 = metaData['site_section'];
      s.prop46 = metaData['content_format'];
      s.prop47 = metaData['content_type'];
      s.prop48 = metaData['content_title'];
      s.prop49 = metaData['site_section_us'];
      s.products = metaData['products'];
      s.eVar5 = metaData['now_vendor_code'];
      if (typeof metaData['bkSegments'] != 'undefined') {
        s.eVar15 = 'norton:bk:' + metaData['bkSegments'];
      }
      s.eVar16 = metaData['now_trafficsource_cookie_name'];
      s.eVar24 = metaData['now_original_subchannel'];
      s.eVar27 = metaData['site_country'];
      s.eVar28 = metaData['site_language'];
      s.eVar33 = metaData['now_current_subchannel'];
      s.eVar41 = metaData['site_section'];
      s.eVar42 = metaData['product_name'];
      s.eVar48 = metaData['site_section_us'];
      s.eVar49 = metaData['content_title'];
      s.eVar66 = metaData['now_program_type'];
      s.eVar17 = metaData['search results filter type'];
      if (typeof $ != 'undefined') {
        $(".icon-social[href*='.facebook']").on('click', function () {
          s.linkTrackVars = 'eVar18,eVar49,events';
          s.linkTrackEvents = 'event26';
          s.eVar49 = $data('content_title') + ':' + 'facebook';
          s.eVar18 = s.pageName;
          s.events = 'event26';
          s.tl('true', 'o', 'facebook');
          s.events = '';
        });
        $(".icon-social[href*='twitter.']").on('click', function () {
          s.linkTrackVars = 'eVar18,eVar49,events';
          s.linkTrackEvents = 'event26';
          s.eVar49 = $data('content_title') + ':' + 'twitter';
          s.eVar18 = s.pageName;
          s.events = 'event26';
          s.tl('true', 'o', 'twitter');
          s.events = '';
        });
        $(".icon-social[href*='plus.google']").on('click', function () {
          s.linkTrackVars = 'eVar18,eVar49,events';
          s.linkTrackEvents = 'event26';
          s.eVar49 = $data('content_title') + ':' + 'googleplus';
          s.eVar18 = s.pageName;
          s.events = 'event26';
          s.tl('true', 'o', 'googleplus');
          s.events = '';
        });
        $(".icon-social[href*='.youtube.']").on('click', function () {
          s.linkTrackVars = 'eVar18,eVar49,events';
          s.linkTrackEvents = 'event26';
          s.eVar49 = $data('content_title') + ':' + 'youtube';
          s.eVar18 = s.pageName;
          s.events = 'event26';
          s.tl('true', 'o', 'youtube');
          s.events = '';
        });
        $(".icon-social[href*='.linkedin.']").on('click', function () {
          s.linkTrackVars = 'eVar18,eVar49,events';
          s.linkTrackEvents = 'event26';
          s.eVar49 = $data('content_title') + ':' + 'linkedin';
          s.eVar18 = s.pageName;
          s.events = 'event26';
          s.tl('true', 'o', 'linkedin');
          s.events = '';
        });
      }
      function removeTxt (needle, haystack) {
        if (typeof haystack == 'undefined') {
          haystack = '';
        }
        return (results = haystack.replace(needle, ''));
      }
      if (metaData['internal_search_keyword_results_yes']) {
        s.strippedKeywords = removeTxt('norton:', metaData['internal_search_keyword_results_yes']);
        s.strippedKeywords = removeTxt('community:', s.strippedKeywords);
        s.prop4 = s.strippedKeywords;
        s.eVar40 = metaData['internal_search_keyword_results_yes'];
        s.setCustomEvent('event31,event30');
        s.prop49 = 'Search';
        s.eVar48 = 'D=c49';
      }
      if (metaData['internal_search_keyword_results_no']) {
        s.strippedKeywords = removeTxt('norton:', metaData['internal_search_keyword_results_no']);
        s.strippedKeywords = removeTxt('community:', s.strippedKeywords);
        s.prop4 = 'na:' + s.strippedKeywords;
        s.eVar40 = metaData['internal_search_keyword_results_no'];
        s.setCustomEvent('event30');
        s.prop49 = 'Search';
        s.eVar48 = 'D=c49';
      }
      if (s.prop4) {
        function internalSearchLinkClick_Natural (index, linkUrl) {
          s.linkTrackVars = 'events,prop40';
          s.events = s.linkTrackEvents = 'event32';
          s.prop40 = index;
          s.tl(true, 'o', 'Internal Search Click - Natural');
          setTimeout(function () {
            window.location.href = linkUrl;
          }, 250);
        }
        if (typeof jQuery != 'undefined') {
          jQuery(document).ready(function ($) {
            if (jQuery('.l a').length > 0) {
              jQuery('.l a').on('click', function (e) {
                e.preventDefault();
                var linkUrl = this.href;
                if (s.getQueryParam('currentIndex')) {
                  s.currentIndex = parseInt(s.getQueryParam('currentIndex') - 1) * 10;
                } else {
                  s.currentIndex = 0;
                }
                searchLinks = jQuery('.l a');
                s.itemIndex =
                  parseInt(searchLinks.index(jQuery(this))) + parseInt(s.currentIndex) + 1;
                internalSearchLinkClick_Natural(s.itemIndex, linkUrl);
              });
            }
          });
        }
      }
    }
    if (s.events && s.events.toLowerCase().indexOf('purchase') > -1) {
      s.prop41 = s.eVar41 = 'purchase';
    }
    s.usePlugins = true;
    function $___var_4e6d4f3a2b1ab031 (s) {
      var url = s.linkURL;
      if (typeof s.linkType !== undefined && s.linkType == 'd' && typeof url == 'string') {
        s.events = 'event1';
        var tmpArray = url.split('/');
        var filename = tmpArray[tmpArray.length - 1];
        var filetype = filename.substr(filename.lastIndexOf('.') + 1).toLowerCase();
        s.eVar1 = 'D=c33';
        s.prop33 = url;
        s.prop46 = filetype;
        s.prop47 = 'download';
        s.prop48 = filename;
        s.eVar49 = 'D=c48';
        s.linkTrackVars = 'events,eVar1,prop33,prop46,prop47,prop48,eVar49';
        s.linkTrackEvents = 'event1';
      } else if (typeof s.linkType !== undefined && s.linkType == 'e') {
        s.linkTrackVars = 'None';
        s.linkTrackEvents = 'None';
      }
      s.prop21 = s.getQueryParam('inid');
      s.eVar21 = 'D=c21';
      s.prop35 = 'D=pageName';
      if (s.prop21) s.prop35 = '> ' + s.prop21 + ' ' + s.pageName;
      s.prop22 = s.getQueryParam('om_em_cid');
      if (!s.prop22) s.prop22 = s.getQueryParam('om_sem_cid');
      if (!s.prop22) s.prop22 = s.getQueryParam('om_ext_cid');
      var cjid = s.getQueryParam('cjid');
      if (cjid) {
        s.prop22 = (location.hostname.indexOf('buy.norton.com') > -1 ? '' : 'hho_aff_') + cjid;
      }
      var om_aff_cid = s.getQueryParam('om_aff_cid');
      if (om_aff_cid) {
        s.prop22 =
          (location.hostname.indexOf('buy.norton.com') > -1 ? '' : 'hho_aff_') + om_aff_cid;
      }
      s.prop22 = s.getValOnce(s.prop22, 's_prop22', 30);
      s.eVar35 = s.prop22;
      s.campaign = s.prop22;
      if (s.campaign) s.prop35 = '> ' + s.campaign + ' ' + s.pageName;
      if (s.getNewRepeat(240) == 'New') {
        var event69 = 'event69';
        if (s.getValOnce(event69, 'event69', 240)) {
          s.setCustomEvent(event69);
        }
      }
      var tmpTNT = window.s_tnt ? window.s_tnt : s.trackTNT();
      tmpTNT = tmpTNT == '::,' ? '' : tmpTNT;
      if (tmpTNT) {
        s.eVar39 = s.tnt = tmpTNT;
      }
      if (typeof s.eVar41 != 'undefined' && s.eVar41.indexOf('=c41') == -1) {
        s.eVar72 = s.channelParticipationStacker(s.eVar41, 's_eVar72', 10, ',');
      }
      if (s.prop35) s.eVar18 = 'D=pageName';
      var pifcamid = s.getQueryParam('pifcamid');
      if (pifcamid) s.eVar38 = s.getValOnce(pifcamid, 's_eVar38');
      s.prop60 = s.getPreviousValue(s.pageName, 's_gpv');
      try {
        var page_load_time = s_getLoadTime();
        if (page_load_time && page_load_time > 1000) {
          page_load_time = 1000;
        }
        if (page_load_time && page_load_time > 0) {
          s.setCustomEvent('event79=' + page_load_time);
        }
      } catch (ex) {
        if (window.console) console.warn('Analytics Exception: Page Load Time: ' + ex);
      }
      s.setVisitorIdVariables(s);
      s.eVar96 = [location.protocol, '//', location.host, location.pathname].join('');
      if (window.autodowngrade) s.eVar107 = window.autodowngrade;
    }
    s_doPlugins = $___var_4e6d4f3a2b1ab031;
    ({}.constructor.defineProperty(s_doPlugins, 'name', {
      configurable: true,
      enumerable: false,
      value: 's_doPlugins',
      writable: false,
    }));
    s.doPlugins = s_doPlugins;
    s.channelParticipationStacker = function (val, cname, dv, delim) {
      if (location.hostname.indexOf('norton.com') > -1) {
        if (typeof val != 'undefined' && val.length > 0) {
          if (!_numeric_.utils.superStackCookie.getChip(cname)) {
            _numeric_.utils.superStackCookie.setChip(cname, val);
            return val;
          } else {
            var contents = _numeric_.utils.superStackCookie.getChip(cname);
            var aContents = contents.split(delim);
            var pv = aContents[aContents.length - 1];
            if (aContents.length < dv && pv != val) {
              contents = contents + delim + val;
              _numeric_.utils.superStackCookie.setChip(cname, contents);
            }
            return contents;
          }
          if (typeof s.events != 'undefined' && s.events.indexOf('purchase') > -1) {
            _numeric_.utils.deleteCookie(
              _numeric_.utils.superStackCookie.supercookie_name,
              '.norton.com'
            );
          }
        }
      }
    };
    s.getQueryParam = new Function(
      'p',
      'd',
      'u',
      '' +
        "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati" +
        "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p" +
        ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-" +
        "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i=" +
        '=p.length?i:i+1)}return v'
    );
    s.p_gpv = new Function(
      'k',
      'u',
      '' +
        "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v" +
        "=s.pt(q,'&','p_gvf',k)}return v"
    );
    s.p_gvf = new Function(
      't',
      'k',
      '' +
        "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" +
        "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." +
        "epa(v)}return ''"
    );
    s.epa = new Function(
      'x',
      '' +
        "var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Fu" +
        "nction('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape" +
        "(x)}return y');return tcf(x)}else return unescape(x)}return y"
    );
    s.rep = new Function(
      'x',
      'o',
      'n',
      '' +
        'var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for(' +
        'i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){' +
        'j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i' +
        ">=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.joi" +
        'n)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x'
    );
    s.trackTNT = new Function(
      'v',
      'p',
      'b',
      '' +
        "var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s." +
        "getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v" +
        "]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;"
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
    s.getValOnce = new Function(
      'v',
      'c',
      'e',
      't',
      '' +
        "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000" +
        '0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e' +
        "==0?0:a);}return v==k?'':v"
    );
    s.split = new Function(
      'l',
      'd',
      '' +
        'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x' +
        '++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
    );
    s.getPreviousValue = new Function(
      'v',
      'c',
      'el',
      '' +
        "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" +
        "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" +
        '){for(y in j){if(i[x]==j[y]){if(s.Util.cookieRead(c)) r=s.Util.cookieRead(c);v?s.Util.cookieWrite(c,v,t)' +
        ":s.Util.cookieWrite(c,'no value',t);return r}}}}}else{if(s.Util.cookieRead(c)) r=s.Util.cookieRead(c);v?" +
        "s.Util.cookieWrite(c,v,t):s.Util.cookieWrite(c,'no value',t);return r}"
    );
    s.pt = function (x, d, f, a) {
      var s = this,
        t = x,
        z = 0,
        y,
        r;
      while (t) {
        y = t.indexOf(d);
        y = y < 0 ? t.length : y;
        t = t.substring(0, y);
        r = s[f](t, a);
        if (r) return r;
        z += y + d.length;
        t = x.substring(z, x.length);
        t = z < x.length ? t : '';
      }
      return '';
    };
    s.eVar65 = (function () {
      if (
        document.cookie.indexOf('WRUID') > -1 &&
        document.cookie.indexOf('WRIgnore=true') == -1
      ) {
        var ca = document.cookie.split(';');
        var PID = 0,
          UID = 0;
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf('CT_Data') > -1) PID = c.substring(c.indexOf('apv_')).split('_')[1];
          if (
            ((document.cookie.match(/WRUID/g) || []).length == 1 && c.indexOf('WRUID') > -1) ||
            (c.indexOf('WRUID') > -1 &&
              (document.cookie.match(/WRUID/g) || []).length > 1 &&
              c.indexOf('WRUID=') == -1)
          )
            UID = c.split('=')[1];
        }
        return UID == 0 || PID == 0 ? null : UID + '.' + PID;
      } else return null;
    })();
    s.setVisitorIdVariables = function (s) {
      var s = this;
      try {
        var mcvid = '';
        if (typeof window.visitor != 'undefined') {
          mcvid = window.visitor.getMarketingCloudVisitorID();
        } else if (typeof s.visitor != 'undefined') {
          mcvid = s.visitor.getMarketingCloudVisitorID();
        }
        if (mcvid != null && mcvid.trim() != '') {
          s.eVar57 = mcvid;
        } else {
          s.eVar57 = 'MCID not available';
        }
        s.prop75 = 'D=v57';
      } catch (ex) {
        if (window.console) console.warn('Analytics Exception: s.setVisitorIdVariables: ' + ex);
      }
    };
    _numeric_.utils.moxie_events = [
      'GoMoxie:widgetOpened',
      'GoMoxie:widgetClosed',
      'GoMoxie:proactiveOffer',
      'GoMoxie:widget:chat:prechatQuestionnaireComplete',
      'GoMoxie:widget:chat:chatSessionStarted',
      'GoMoxie:widget:chat:agentJoinedSession',
    ];
    _numeric_.utils.handleMoxieEvent = function (e) {
      var chat_type = '';
      var event_name = '';
      var aa_events = '';
      if (typeof e != 'undefined') {
        switch (e.type) {
          case 'GoMoxie:widgetOpened':
            if (
              typeof e.detail != 'undefined' &&
              e.detail.widgetName == 'chat' &&
              e.detail.source == 'button'
            ) {
              chat_type = 'userinitiated';
              event_name = 'chat displayed';
              aa_events = 'event72';
            }
            break;
          case 'GoMoxie:widgetClosed':
            if (typeof e.detail != 'undefined' && e.detail.widgetName == 'chat') {
              event_name = 'chat closed';
              aa_events = 'event74';
            }
            break;
          case 'GoMoxie:proactiveOffer':
            if (typeof e.detail != 'undefined' && e.detail.widgetName == 'chat') {
              chat_type = 'systeminitiated';
              if (e.detail.status == 'displayed') {
                event_name = 'chat displayed';
                aa_events = 'event72';
              } else if (e.detail.status == 'accepted') {
                event_name = 'chat accepted';
                aa_events = 'event99';
              } else if (e.detail.status == 'declined') {
                event_name = 'chat declined';
                aa_events = 'event100';
              }
            }
            break;
          case 'GoMoxie:widget:chat:chatSessionStarted':
            event_name = 'chat session started';
            aa_events = 'event101';
            break;
          case 'GoMoxie:widget:chat:agentJoinedSession':
            event_name = 'agent joined session';
            aa_events = 'event102';
            break;
        }
      }
      if (event_name != '') {
        chat_type != ''
          ? s.Util.cookieWrite('moxie_chat_type', chat_type)
          : (chat_type = s.Util.cookieRead('moxie_chat_type'));
        s.eVar61 = 'chatmoxie-' + chat_type;
        if (typeof e.detail != 'undefined') {
          s.eVar37 = typeof e.detail.rule != 'undefined' ? e.detail.rule.name : '';
          s.eVar7 = typeof e.detail.sessionId != 'undefined' ? e.detail.sessionId : '';
        }
        s.pageName = '';
        s.prop59 = '';
        if (s.eVar41 && !s.eVar41.startsWith('D=')) {
          s.prop59 = s.pageName = s.eVar41 + ':';
        } else if (s.prop41 && !s.prop41.startsWith('D=')) {
          s.prop59 = s.pageName = s.prop41 + ':';
        }
        if (s.eVar27 && !s.eVar27.startsWith('D=')) {
          s.pageName += s.eVar27 + ':';
        } else if (s.prop2 && !s.prop2.startsWith('D=')) {
          s.pageName += s.prop2 + ':';
        }
        s.pageName += 'chatmoxie:' + chat_type + ':' + event_name;
        s.prop59 += 'chatmoxie:' + chat_type + ':' + event_name;
        s.events = aa_events;
        s.t();
        s.events = '';
      }
    };
    for (i = 0; i < _numeric_.utils.moxie_events.length; i++) {
      window.addEventListener(_numeric_.utils.moxie_events[i], _numeric_.utils.handleMoxieEvent);
    }
    s.maxDelay = 750;
    s.loadModule('Integrate');
    (function () {
      var LISTENERS = [];
      window.uStudio = window.uStudio ? window.uStudio : {};
      window.uStudio.Player = window.uStudio.Player ? window.uStudio.Player : {};
      window.uStudio.Player.registerPlayerCallback = function (callback) {
        LISTENERS.push(callback);
      };
      var PLAYERS = {};
      var Player = function (id, source, origin) {
        this.id = id;
        this.source = source;
        this.origin = origin;
        this.subscribers = {};
        this.video_title = '';
      };
      Player.prototype.handle_event = function (event, args) {
        var subscribers = this.subscribers[event] || [];
        for (var i = 0; i < subscribers.length; i++) {
          subscribers[i].apply(this, args);
        }
      };
      Player.prototype.subscribe = function (event, callback) {
        if (!this.subscribers[event]) {
          this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
      };
      Player.prototype.broadcast = function (event, args) {
        args = args ? args : [];
        this.source.postMessage(
          window.JSON.stringify({ event: event, arguments: args }),
          this.origin
        );
      };
      var onMessage = function (event) {
        try {
          var data = JSON.parse(event.data);
        } catch (e) {
          return;
        }
        if (data == null) return;
        var id = data.id,
          player = PLAYERS[id];
        if (data.event === 'uStudio.eventsReady') {
          if (!id) {
            id = 'player-' + parseInt(Math.floor(Math.random() * 100000), 10);
          }
          if (!PLAYERS[id]) {
            PLAYERS[id] = new Player(id, event.source, event.origin);
            player = PLAYERS[id];
          }
          player.broadcast('uStudio.pageReady', [{ url: window.location.href, id: id }]);
          for (var i = 0; i < LISTENERS.length; i++) {
            LISTENERS[i](player);
          }
        } else {
          if (!data.id || !PLAYERS[id]) {
            return;
          }
          player.handle_event(data.event, data.arguments);
        }
      };
      var addListener = function (eventName, listener) {
        if (window.attachEvent) {
          window.attachEvent('on' + eventName, listener);
        } else if (window.addEventListener) {
          window.addEventListener(eventName, listener, false);
        } else {
          document.addEventListener(eventName, listener, false);
        }
      };
      addListener('message', onMessage);
    })();
    if (typeof uStudio !== 'undefined' && typeof uStudio.Player !== 'undefined') {
      uStudio.Player.registerPlayerCallback(function (player) {
        var currentTime = 0;
        player.subscribe('Playlist.videoSelected', function (event) {
          player['video_title'] = event.video.name;
        });
        player.subscribe('Player.durationchange', function (event) {
          player['duration'] = Math.floor(event.duration);
        });
        player.subscribe('Player.timeupdate', function (event) {
          player['currentTime'] = Math.floor(event.currentTime);
        });
        player.subscribe('Player.playing', function (event) {
          if (typeof player['start'] == 'undefined' || !player['start']) {
            s.Media.open(player['video_title'], player['duration'], 'uStudio');
            s.Media.play(player['video_title'], 0);
            player['start'] = true;
          } else {
            s.Media.play(player['video_title'], player['currentTime']);
          }
        });
        player.subscribe('Player.paused', function (event) {
          s.Media.stop(player['video_title'], player['currentTime']);
        });
        player.subscribe('Player.seeking', function (event) {
          s.Media.stop(player['video_title'], player['currentTime']);
        });
        player.subscribe('Player.ended', function (event) {
          s.Media.stop(player['video_title'], player['currentTime']);
          s.Media.close(player['video_title']);
          player['start'] = false;
        });
      });
    }
    s.loadModule('Media');
    s.Media.autoTrack = false;
    s.Media.trackWhilePlaying = true;
    s.Media.trackVars = 'events,prop48,prop47,eVar49,prop73,eVar62,eVar74';
    s.Media.trackEvents =
      'event90,event91,event92,event93,event94,event95,event96,event97,event98';
    s.Media.trackMilestones = '10,25,50,75,95';
    s.Media.trackUsingContextData = true;
    s.Media.contextDataMapping = {
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
    };
    s.Media.monitor = function (s, media) {
      if (media.event.match(/MILESTONE|OPEN|CLOSE/gi) !== null) {
        s.eVar74 = document.URL;
        if (media.event.match(/OPEN/gi) !== null) {
          s.events = 'event98=' + media.length;
        } else {
          s.events = '';
        }
        s.Media.track(media.name);
      }
    };
    function $___var_25dc287479d78343 (l) {
      var c = this;
      c.s = l;
      var e = window;
      e.s_c_in || ((e.s_c_il = []), (e.s_c_in = 0));
      c._il = e.s_c_il;
      c._in = e.s_c_in;
      c._il[c._in] = c;
      e.s_c_in++;
      c._c = 's_m';
      c.list = [];
      c.add = function (d, b) {
        var a;
        b || (b = 's_Integrate_' + d);
        e[b] || (e[b] = {});
        a = c[d] = e[b];
        a.a = d;
        a.e = c;
        a._c = 0;
        a._d = 0;
        void 0 == a.disable && (a.disable = 0);
        a.get = function (b, d) {
          var f = document,
            h = f.getElementsByTagName('HEAD'),
            k;
          if (
            !a.disable &&
            (d || (v = 's_' + c._in + '_Integrate_' + a.a + '_get_' + a._c),
            a._c++,
            (a.VAR = v),
            (a.CALLBACK = 's_c_il[' + c._in + '].' + a.a + '.callback'),
            a.delay(),
            (h = h && 0 < h.length ? h[0] : f.body))
          )
            try {
              (k = f.createElement('SCRIPT')),
                (k.type = 'text/javascript'),
                k.setAttribute('async', 'async'),
                (k.src = c.c(a, b)),
                0 > b.indexOf('[CALLBACK]') &&
                  (k.onload = k.onreadystatechange = function () {
                    a.callback(e[v]);
                  }),
                h.firstChild ? h.insertBefore(k, h.firstChild) : h.appendChild(k);
            } catch (l) {}
        };
        a.callback = function (b) {
          var c;
          if (b) for (c in b) Object.prototype[c] || (a[c] = b[c]);
          a.ready();
        };
        a.beacon = function (b) {
          var d = 's_i_' + c._in + '_Integrate_' + a.a + '_' + a._c;
          a.disable || (a._c++, (d = e[d] = new Image()), (d.src = c.c(a, b)));
        };
        a.script = function (b) {
          a.get(b, 1);
        };
        a.delay = function () {
          a._d++;
        };
        a.ready = function () {
          a._d--;
          a.disable || l.delayReady();
        };
        c.list.push(d);
      };
      c._g = function (d) {
        var b,
          a = (d ? 'use' : 'set') + 'Vars';
        for (d = 0; d < c.list.length; d++)
          if ((b = c[c.list[d]]) && !b.disable && b[a])
            try {
              b[a](l, b);
            } catch (e) {}
      };
      c._t = function () {
        c._g(1);
      };
      c._d = function () {
        var d, b;
        for (d = 0; d < c.list.length; d++)
          if ((b = c[c.list[d]]) && !b.disable && 0 < b._d) return 1;
        return 0;
      };
      c.c = function (c, b) {
        var a, e, g, f;
        'http' != b.toLowerCase().substring(0, 4) && (b = 'http://' + b);
        l.ssl && (b = l.replace(b, 'http:', 'https:'));
        c.RAND = Math.floor(10000000000000 * Math.random());
        for (a = 0; 0 <= a; )
          (a = b.indexOf('[', a)),
            0 <= a &&
              ((e = b.indexOf(']', a)),
              e > a &&
                ((g = b.substring(a + 1, e)),
                2 < g.length && 's.' == g.substring(0, 2)
                  ? (f = l[g.substring(2)]) || (f = '')
                  : ((f = '' + c[g]), f != c[g] && parseFloat(f) != c[g] && (g = 0)),
                g && (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)),
                (a = e)));
        return b;
      };
    }
    AppMeasurement_Module_Integrate = $___var_25dc287479d78343;
    ({}.constructor.defineProperty(AppMeasurement_Module_Integrate, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement_Module_Integrate',
      writable: false,
    }));
    function $___var_94a9b33ace55c650 (q) {
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
                h.length > e.length && h.substring(0, e.length) == e ? h.substring(e.length) : '';
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
                  for (p.push('' + (0 < a.length ? a.length : 'E')), n = h = 0; n < p.length; n++)
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
    AppMeasurement_Module_Media = $___var_94a9b33ace55c650;
    ({}.constructor.defineProperty(AppMeasurement_Module_Media, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement_Module_Media',
      writable: false,
    }));
    function $___var_6534d55a9da5e8ba (h) {
      function p () {
        var a = f.pageYOffset + (f.innerHeight || 0);
        a && a > +g && (g = a);
      }
      function q () {
        if (e.scrollReachSelector) {
          var a = h.d.querySelector && h.d.querySelector(e.scrollReachSelector);
          a
            ? ((g = a.scrollTop || 0),
              a.addEventListener('scroll', function () {
                var d;
                (d = (a && a.scrollTop + a.clientHeight) || 0) > g && (g = d);
              }))
            : 0 < v-- && setTimeout(q, 1000);
        }
      }
      function l (a, d) {
        var b, c, n;
        if (a && d && (b = e.c[d] || (e.c[d] = d.split(','))))
          for (n = 0; n < b.length && (c = b[n++]); ) if (-1 < a.indexOf(c)) return null;
        return a;
      }
      function r (a, d, b, c, e) {
        var f, k;
        if (a.dataset && (k = a.dataset[d])) f = k;
        else if (a.getAttribute)
          if ((k = a.getAttribute('data-' + b))) f = k;
          else if ((k = a.getAttribute(b))) f = k;
        if (!f && h.useForcedLinkTracking && e) {
          var g;
          a = a.onclick ? '' + a.onclick : '';
          varValue = '';
          if (c && a && ((d = a.indexOf(c)), 0 <= d)) {
            for (d += c.length; d < a.length; )
              if (((b = a.charAt(d++)), 0 <= '\'"'.indexOf(b))) {
                g = b;
                break;
              }
            for (k = !1; d < a.length && g; ) {
              b = a.charAt(d);
              if (!k && b === g) break;
              '\\' === b ? (k = !0) : ((varValue += b), (k = !1));
              d++;
            }
          }
          (g = varValue) && (h.w[c] = g);
        }
        return f || (e && h.w[c]);
      }
      function s (a, d, b) {
        var c;
        return (c = e[d](a, b)) && l(m(c), e[d + 'Exclusions']);
      }
      function t (a, d, b) {
        var c;
        if (
          a &&
          !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && w[c]) &&
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
          for (a = 0; a < c.length; a++) t(c[a], d, b);
      }
      function m (a) {
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
      e.s = h;
      var f = window;
      f.s_c_in || ((f.s_c_il = []), (f.s_c_in = 0));
      e._il = f.s_c_il;
      e._in = f.s_c_in;
      e._il[e._in] = e;
      f.s_c_in++;
      e._c = 's_m';
      var g = 0,
        u,
        v = 60;
      e.c = {};
      var w = { SCRIPT: 1, STYLE: 1, LINK: 1, CANVAS: 1 };
      e._g = function () {
        var a,
          d,
          b,
          c = h.contextData,
          e = h.linkObject;
        (a = h.pageName || h.pageURL) &&
          (d = s(e, 'link', h.linkName)) &&
          (b = s(e, 'region')) &&
          ((c['a.activitymap.page'] = a.substring(0, 255)),
          (c['a.activitymap.link'] = 128 < d.length ? d.substring(0, 128) : d),
          (c['a.activitymap.region'] = 127 < b.length ? b.substring(0, 127) : b),
          0 < g && (c['a.activitymap.xy'] = 10 * Math.floor(g / 10)),
          (c['a.activitymap.pageIDType'] = h.pageName ? 1 : 0));
      };
      e._d = function () {
        e.trackScrollReach &&
          !u &&
          (e.scrollReachSelector
            ? q()
            : (p(), f.addEventListener && f.addEventListener('scroll', p, !1)),
          (u = !0));
      };
      e.link = function (a, d) {
        var b;
        if (d) b = l(m(d), e.linkExclusions);
        else if ((b = a) && !(b = r(a, 'sObjectId', 's-object-id', 's_objectID', 1))) {
          var c, f;
          (f = l(m(a.innerText || a.textContent), e.linkExclusions)) ||
            (t(a, (c = []), (b = { a: void 0, t: void 0, s: void 0 })),
            (f = l(m(c.join('')))) ||
              (f = l(m(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) ||
              !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() : '') ||
              ('INPUT' == c || ('SUBMIT' == c && a.value)
                ? (f = l(m(a.value)))
                : 'IMAGE' == c && a.src && (f = l(m(a.src)))));
          b = f;
        }
        return b;
      };
      e.region = function (a) {
        for (var d, b = e.regionIDAttribute || 'id'; a && (a = a.parentNode); ) {
          if ((d = r(a, b, b, b))) return d;
          if ('BODY' == a.nodeName) return 'BODY';
        }
      };
    }
    AppMeasurement_Module_ActivityMap = $___var_6534d55a9da5e8ba;
    ({}.constructor.defineProperty(AppMeasurement_Module_ActivityMap, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement_Module_ActivityMap',
      writable: false,
    }));
    function $___var_8a136b913d554916 (r) {
      var a = this;
      a.version = '2.22.0';
      var h = window;
      h.s_c_in || ((h.s_c_il = []), (h.s_c_in = 0));
      a._il = h.s_c_il;
      a._in = h.s_c_in;
      a._il[a._in] = a;
      h.s_c_in++;
      a._c = 's_c';
      var q = h.AppMeasurement.ic;
      q || (q = null);
      var p = h,
        m,
        s;
      try {
        for (
          m = p.parent, s = p.location;
          m &&
          m.location &&
          s &&
          '' + m.location !== '' + s &&
          p.location &&
          '' + m.location !== '' + p.location &&
          m.location.host === s.host;

        )
          (p = m), (m = p.parent);
      } catch (u) {}
      a.C = function (a) {
        try {
          console.log(a);
        } catch (b) {}
      };
      a.Ra = function (a) {
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
      a.Nb = function () {
        var c = h.location.hostname,
          b = a.fpCookieDomainPeriods,
          d;
        b || (b = a.cookieDomainPeriods);
        if (
          c &&
          !a.Ka &&
          !/^[0-9.]+$/.test(c) &&
          ((b = b ? parseInt(b) : 2), (b = 2 < b ? b : 2), (d = c.lastIndexOf('.')), 0 <= d)
        ) {
          for (; 0 <= d && 1 < b; ) (d = c.lastIndexOf('.', d - 1)), b--;
          a.Ka = 0 < d ? c.substring(d) : c;
        }
        return a.Ka;
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
        var f = a.Nb(),
          e = a.cookieLifetime,
          g;
        b = '' + b;
        e = e ? ('' + e).toUpperCase() : '';
        d &&
          'SESSION' != e &&
          'NONE' != e &&
          ((g = '' != b ? parseInt(e ? e : 0) : -60)
            ? ((d = new Date()), d.setTime(d.getTime() + 1000 * g))
            : 1 === d &&
              ((d = new Date()), (g = d.getYear()), d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
        return c && 'NONE' != e
          ? ((a.d.cookie =
              a.escape(c) +
              '=' +
              a.escape('' != b ? b : '[[B]]') +
              '; path=/;' +
              (d && 'SESSION' != e ? ' expires=' + d.toUTCString() + ';' : '') +
              (f ? ' domain=' + f + ';' : '') +
              (a.writeSecureCookies ? ' secure;' : '')),
            a.cookieRead(c) == b)
          : 0;
      };
      a.Kb = function () {
        var c = a.Util.getIeVersion();
        'number' === typeof c && 10 > c && ((a.unsupportedBrowser = !0), a.xb(a, function () {}));
      };
      a.ya = function () {
        const $___old_6f829fab4bff2c53 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_6f829fab4bff2c53)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_47c01efa79e9f191.userAgent
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
          if ($___old_6f829fab4bff2c53)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_6f829fab4bff2c53
            ));
        }
      };
      a.xb = function (a, b) {
        for (var d in a)
          Object.prototype.hasOwnProperty.call(a, d) && 'function' === typeof a[d] && (a[d] = b);
      };
      a.K = [];
      a.fa = function (c, b, d) {
        if (a.La) return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0,
          e = new Date().getTime() + a.maxDelay,
          g = a.d.visibilityState,
          k = ['webkitvisibilitychange', 'visibilitychange'];
        g || (g = a.d.webkitVisibilityState);
        if (g && 'prerender' == g) {
          if (!a.ga)
            for (a.ga = 1, d = 0; d < k.length; d++)
              a.d.addEventListener(k[d], function () {
                var c = a.d.visibilityState;
                c || (c = a.d.webkitVisibilityState);
                'visible' == c && ((a.ga = 0), a.delayReady());
              });
          f = 1;
          e = 0;
        } else d || (a.u('_d') && (f = 1));
        f && (a.K.push({ m: c, a: b, t: e }), a.ga || setTimeout(a.delayReady, a.maxDelay));
        return f;
      };
      a.delayReady = function () {
        var c = new Date().getTime(),
          b = 0,
          d;
        for (a.u('_d') ? (b = 1) : a.Aa(); 0 < a.K.length; ) {
          d = a.K.shift();
          if (b && !d.t && d.t > c) {
            a.K.unshift(d);
            setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
            break;
          }
          a.La = 1;
          a[d.m].apply(a, d.a);
          a.La = 0;
        }
      };
      a.setAccount = a.sa = function (c) {
        var b, d;
        if (!a.fa('setAccount', arguments))
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
          k = '';
        e = f = '';
        if (a.lightProfileID)
          (d = a.O), (k = a.lightTrackVars) && (k = ',' + k + ',' + a.la.join(',') + ',');
        else {
          d = a.g;
          if (a.pe || a.linkType)
            (k = a.linkTrackVars),
              (f = a.linkTrackEvents),
              a.pe &&
                ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                a[e] && ((k = a[e].ec), (f = a[e].cc)));
          k && (k = ',' + k + ',' + a.F.join(',') + ',');
          f && k && (k += ',events,');
        }
        b && (b = ',' + b + ',');
        for (f = 0; f < d.length; f++)
          (e = d[f]),
            (g = a[e]) &&
              (!k || 0 <= k.indexOf(',' + e + ',')) &&
              (!b || 0 <= b.indexOf(',' + e + ',')) &&
              c(e, g);
      };
      a.o = function (c, b, d, f, e) {
        var g = '',
          k,
          l,
          h,
          n,
          m = 0;
        'contextData' == c && (c = 'c');
        if (b) {
          for (k in b)
            if (
              !(Object.prototype[k] || (e && k.substring(0, e.length) != e)) &&
              b[k] &&
              (!d || 0 <= d.indexOf(',' + (f ? f + '.' : '') + k + ','))
            ) {
              h = !1;
              if (m)
                for (l = 0; l < m.length; l++)
                  if (k.substring(0, m[l].length) == m[l]) {
                    h = !0;
                    break;
                  }
              if (
                !h &&
                ('' == g && (g += '&' + c + '.'),
                (l = b[k]),
                e && (k = k.substring(e.length)),
                0 < k.length)
              )
                if (((h = k.indexOf('.')), 0 < h))
                  (l = k.substring(0, h)),
                    (h = (e ? e : '') + l + '.'),
                    m || (m = []),
                    m.push(h),
                    (g += a.o(l, b, d, f, h));
                else if (('boolean' == typeof l && (l = l ? 'true' : 'false'), l)) {
                  if ('retrieveLightData' == f && 0 > e.indexOf('.contextData.'))
                    switch (((h = k.substring(0, 4)), (n = k.substring(4)), k)) {
                      case 'transactionID':
                        k = 'xact';
                        break;
                      case 'channel':
                        k = 'ch';
                        break;
                      case 'campaign':
                        k = 'v0';
                        break;
                      default:
                        a.Ra(n) &&
                          ('prop' == h
                            ? (k = 'c' + n)
                            : 'eVar' == h
                            ? (k = 'v' + n)
                            : 'list' == h
                            ? (k = 'l' + n)
                            : 'hier' == h && ((k = 'h' + n), (l = l.substring(0, 255))));
                    }
                  g += '&' + a.escape(k) + '=' + a.escape(l);
                }
            }
          '' != g && (g += '&.' + c);
        }
        return g;
      };
      a.usePostbacks = 0;
      a.Qb = function () {
        var c = '',
          b,
          d,
          f,
          e,
          g,
          k,
          l,
          h,
          n = '',
          m = '',
          p = (e = ''),
          r = a.T();
        if (a.lightProfileID)
          (b = a.O), (n = a.lightTrackVars) && (n = ',' + n + ',' + a.la.join(',') + ',');
        else {
          b = a.g;
          if (a.pe || a.linkType)
            (n = a.linkTrackVars),
              (m = a.linkTrackEvents),
              a.pe &&
                ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                a[e] && ((n = a[e].ec), (m = a[e].cc)));
          n && (n = ',' + n + ',' + a.F.join(',') + ',');
          m && ((m = ',' + m + ','), n && (n += ',events,'));
          a.events2 && (p += ('' != p ? ',' : '') + a.events2);
        }
        if (r && r.getCustomerIDs) {
          e = q;
          if ((g = r.getCustomerIDs()))
            for (d in g)
              Object.prototype[d] ||
                ((f = g[d]),
                'object' == typeof f &&
                  (e || (e = {}),
                  f.id && (e[d + '.id'] = f.id),
                  f.authState && (e[d + '.as'] = f.authState)));
          e && (c += a.o('cid', e));
        }
        a.AudienceManagement &&
          a.AudienceManagement.isReady() &&
          (c += a.o('d', a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < b.length; d++) {
          e = b[d];
          g = a[e];
          f = e.substring(0, 4);
          k = e.substring(4);
          g ||
            ('events' == e && p
              ? ((g = p), (p = ''))
              : 'marketingCloudOrgID' == e && r && a.V('ECID') && (g = r.marketingCloudOrgID));
          if (g && (!n || 0 <= n.indexOf(',' + e + ','))) {
            switch (e) {
              case 'customerPerspective':
                e = 'cp';
                break;
              case 'marketingCloudOrgID':
                e = 'mcorgid';
                break;
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
                255 < g.length && ((a.pageURLRest = g.substring(255)), (g = g.substring(0, 255)));
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
                p && (g += ('' != g ? ',' : '') + p);
                if (m)
                  for (k = g.split(','), g = '', f = 0; f < k.length; f++)
                    (l = k[f]),
                      (h = l.indexOf('=')),
                      0 <= h && (l = l.substring(0, h)),
                      (h = l.indexOf(':')),
                      0 <= h && (l = l.substring(0, h)),
                      0 <= m.indexOf(',' + l + ',') && (g += (g ? ',' : '') + k[f]);
                break;
              case 'events2':
                g = '';
                break;
              case 'contextData':
                c += a.o('c', a[e], n, e);
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
                a.retrieveLightProfiles && (c += a.o('mts', a[e], n, e));
                g = '';
                break;
              default:
                a.Ra(k) &&
                  ('prop' == f
                    ? (e = 'c' + k)
                    : 'eVar' == f
                    ? (e = 'v' + k)
                    : 'list' == f
                    ? (e = 'l' + k)
                    : 'hier' == f && ((e = 'h' + k), (g = g.substring(0, 255))));
            }
            g && (c += '&' + e + '=' + ('pev' != e.substring(0, 3) ? a.escape(g) : g));
          }
          'pev3' == e && a.e && (c += a.e);
        }
        a.ka && ((c += '&lrt=' + a.ka), (a.ka = null));
        return c;
      };
      a.B = function (a) {
        var b = a.tagName;
        if (
          'undefined' != '' + a.lc ||
          ('undefined' != '' + a.Zb && 'HTML' != ('' + a.Zb).toUpperCase())
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
      a.Na = function (a) {
        var b = h.location,
          d = a.href ? a.href : '',
          f,
          e,
          g;
        f = d.indexOf(':');
        e = d.indexOf('?');
        g = d.indexOf('/');
        d &&
          (0 > f || (0 <= e && f > e) || (0 <= g && f > g)) &&
          ((e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : ''),
          (f = b.pathname.lastIndexOf('/')),
          (d =
            (e ? e + '//' : '') +
            (a.host ? a.host : b.host ? b.host : '') +
            ('/' != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + '/' : '') +
            d));
        return d;
      };
      a.L = function (c) {
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
              : 'IMAGE' == b && c.src && (e = c.src)
            : (e = a.Na(c)),
          e)
          ? { id: e.substring(0, 100), type: g }
          : 0;
      };
      a.jc = function (c) {
        for (var b = a.B(c), d = a.L(c); c && !d && 'BODY' != b; )
          if ((c = c.parentElement ? c.parentElement : c.parentNode)) (b = a.B(c)), (d = a.L(c));
        (d && 'BODY' != b) || (c = 0);
        c &&
          ((b = c.onclick ? '' + c.onclick : ''),
          0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) &&
          (c = 0);
        return c;
      };
      a.Yb = function () {
        var c,
          b,
          d = a.linkObject,
          f = a.linkType,
          e = a.linkURL,
          g,
          k;
        a.ma = 1;
        d || ((a.ma = 0), (d = a.clickObject));
        if (d) {
          c = a.B(d);
          for (b = a.L(d); d && !b && 'BODY' != c; )
            if ((d = d.parentElement ? d.parentElement : d.parentNode)) (c = a.B(d)), (b = a.L(d));
          (b && 'BODY' != c) || (d = 0);
          if (d && !a.linkObject) {
            var l = d.onclick ? '' + d.onclick : '';
            if (0 <= l.indexOf('.tl(') || 0 <= l.indexOf('.trackLink(')) d = 0;
          }
        } else a.ma = 1;
        !e && d && (e = a.Na(d));
        e && !a.linkLeaveQueryString && ((g = e.indexOf('?')), 0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
          var m = 0,
            n = 0,
            p;
          if (a.trackDownloadLinks && a.linkDownloadFileTypes)
            for (
              l = e.toLowerCase(),
                g = l.indexOf('?'),
                k = l.indexOf('#'),
                0 <= g ? 0 <= k && k < g && (g = k) : (g = k),
                0 <= g && (l = l.substring(0, g)),
                g = a.linkDownloadFileTypes.toLowerCase().split(','),
                k = 0;
              k < g.length;
              k++
            )
              (p = g[k]) && l.substring(l.length - (p.length + 1)) == '.' + p && (f = 'd');
          if (
            a.trackExternalLinks &&
            !f &&
            ((l = e.toLowerCase()),
            a.Qa(l) &&
              (a.linkInternalFilters || (a.linkInternalFilters = h.location.hostname),
              (g = 0),
              a.linkExternalFilters
                ? ((g = a.linkExternalFilters.toLowerCase().split(',')), (m = 1))
                : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(',')),
              g))
          ) {
            for (k = 0; k < g.length; k++) (p = g[k]), 0 <= l.indexOf(p) && (n = 1);
            n ? m && (f = 'e') : m || (f = 'e');
          }
        }
        a.linkObject = d;
        a.linkURL = e;
        a.linkType = f;
        if (a.trackClickMap || a.trackInlineStats)
          (a.e = ''),
            d &&
              ((f = a.pageName),
              (e = 1),
              (d = d.sourceIndex),
              f || ((f = a.pageURL), (e = 0)),
              h.s_objectID && ((b.id = h.s_objectID), (d = b.type = 1)),
              f &&
                b &&
                b.id &&
                c &&
                (a.e =
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
      a.Rb = function () {
        var c = a.ma,
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
        if (a.trackClickMap || a.trackInlineStats || a.Ub()) {
          var b = {},
            d = 0,
            e = a.rb(),
            g = e ? e.split('&') : 0,
            k,
            l,
            h,
            e = 0;
          if (g)
            for (k = 0; k < g.length; k++)
              (l = g[k].split('=')),
                (f = a.unescape(l[0]).split(',')),
                (l = a.unescape(l[1])),
                (b[l] = f);
          f = a.account.split(',');
          k = {};
          for (h in a.contextData)
            h &&
              !Object.prototype[h] &&
              'a.activitymap.' == h.substring(0, 14) &&
              ((k[h] = a.contextData[h]), (a.contextData[h] = ''));
          a.e = a.o('c', k) + (a.e ? a.e : '');
          if (c || a.e) {
            c && !a.e && (e = 1);
            for (l in b)
              if (!Object.prototype[l])
                for (h = 0; h < f.length; h++)
                  for (
                    e &&
                      ((g = b[l].join(',')),
                      g == a.account &&
                        ((a.e += ('&' != l.charAt(0) ? '&' : '') + l), (b[l] = []), (d = 1))),
                      k = 0;
                    k < b[l].length;
                    k++
                  )
                    (g = b[l][k]),
                      g == f[h] &&
                        (e &&
                          (a.e +=
                            '&u=' + a.escape(g) + ('&' != l.charAt(0) ? '&' : '') + l + '&u=0'),
                        b[l].splice(k, 1),
                        (d = 1));
            c || (d = 1);
            if (d) {
              e = '';
              k = 2;
              !c && a.e && ((e = a.escape(f.join(',')) + '=' + a.escape(a.e)), (k = 1));
              for (l in b)
                !Object.prototype[l] &&
                  0 < k &&
                  0 < b[l].length &&
                  ((e += (e ? '&' : '') + a.escape(b[l].join(',')) + '=' + a.escape(l)), k--);
              a.zb(e);
            }
          }
        }
        return c;
      };
      a.rb = function () {
        if (a.useLinkTrackSessionStorage) {
          if (a.Ea()) return h.sessionStorage.getItem(a.P);
        } else return a.cookieRead(a.P);
      };
      a.Ea = function () {
        return h.sessionStorage ? !0 : !1;
      };
      a.zb = function (c) {
        a.useLinkTrackSessionStorage
          ? a.Ea() && h.sessionStorage.setItem(a.P, c)
          : a.cookieWrite(a.P, c);
      };
      a.Sb = function () {
        if (!a.bc) {
          var c = new Date(),
            b = p.location,
            d,
            f,
            e = (f = d = ''),
            g = '',
            k = '',
            l = '1.2',
            h = a.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N',
            m = '',
            q = '';
          if (
            c.setUTCDate &&
            ((l = '1.3'), (0).toPrecision && ((l = '1.5'), (c = []), c.forEach))
          ) {
            l = '1.6';
            f = 0;
            d = {};
            try {
              (f = new Iterator(d)),
                f.next &&
                  ((l = '1.7'),
                  c.reduce &&
                    ((l = '1.8'),
                    l.trim &&
                      ((l = '1.8.1'),
                      Date.parse && ((l = '1.8.2'), Object.create && (l = '1.8.5')))));
            } catch (r) {}
          }
          d = screen.width + 'x' + screen.height;
          e = navigator.javaEnabled() ? 'Y' : 'N';
          f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
          g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
          k = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
          try {
            a.b.addBehavior('#default#homePage'), (m = a.b.kc(b) ? 'Y' : 'N');
          } catch (s) {}
          try {
            a.b.addBehavior('#default#clientCaps'), (q = a.b.connectionType);
          } catch (t) {}
          a.resolution = d;
          a.colorDepth = f;
          a.javascriptVersion = l;
          a.javaEnabled = e;
          a.cookiesEnabled = h;
          a.browserWidth = g;
          a.browserHeight = k;
          a.connectionType = q;
          a.homepage = m;
          a.bc = 1;
        }
      };
      a.Q = {};
      a.loadModule = function (c, b) {
        var d = a.Q[c];
        if (!d) {
          d = h['AppMeasurement_Module_' + c] ? new h['AppMeasurement_Module_' + c](a) : {};
          a.Q[c] = a[c] = d;
          d.kb = function () {
            return d.ub;
          };
          d.Ab = function (b) {
            if ((d.ub = b)) (a[c + '_onLoad'] = b), a.fa(c + '_onLoad', [a, d], 1) || b(a, d);
          };
          try {
            Object.defineProperty
              ? Object.defineProperty(d, 'onLoad', { get: d.kb, set: d.Ab })
              : (d._olc = 1);
          } catch (f) {
            d._olc = 1;
          }
        }
        b && ((a[c + '_onLoad'] = b), a.fa(c + '_onLoad', [a, d], 1) || b(a, d));
      };
      a.u = function (c) {
        var b, d;
        for (b in a.Q)
          if (
            !Object.prototype[b] &&
            (d = a.Q[b]) &&
            (d._olc && d.onLoad && ((d._olc = 0), d.onLoad(a, d)), d[c] && d[c]())
          )
            return 1;
        return 0;
      };
      a.Ub = function () {
        return a.ActivityMap && a.ActivityMap._c ? !0 : !1;
      };
      a.Vb = function () {
        var c = Math.floor(10000000000000 * Math.random()),
          b = a.visitorSampling,
          d = a.visitorSamplingGroup,
          d =
            's_vsn_' + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? '_' + d : ''),
          f = a.cookieRead(d);
        if (b) {
          b *= 100;
          f && (f = parseInt(f));
          if (!f) {
            if (!a.cookieWrite(d, c)) return 0;
            f = c;
          }
          if (f % 10000 > b) return 0;
        }
        return 1;
      };
      a.S = function (c, b) {
        var d, f, e, g, k, h, m;
        m = {};
        for (d = 0; 2 > d; d++)
          for (f = 0 < d ? a.Ga : a.g, e = 0; e < f.length; e++)
            if (((g = f[e]), (k = c[g]) || c['!' + g])) {
              if (k && !b && ('contextData' == g || 'retrieveLightData' == g) && a[g])
                for (h in a[g]) k[h] || (k[h] = a[g][h]);
              a[g] || (m['!' + g] = 1);
              m[g] = a[g];
              a[g] = k;
            }
        return m;
      };
      a.hc = function (c) {
        var b, d, f, e;
        for (b = 0; 2 > b; b++)
          for (d = 0 < b ? a.Ga : a.g, f = 0; f < d.length; f++)
            (e = d[f]),
              (c[e] = a[e]),
              c[e] ||
                ('prop' !== e.substring(0, 4) &&
                  'eVar' !== e.substring(0, 4) &&
                  'hier' !== e.substring(0, 4) &&
                  'list' !== e.substring(0, 4) &&
                  'channel' !== e &&
                  'events' !== e &&
                  'eventList' !== e &&
                  'products' !== e &&
                  'productList' !== e &&
                  'purchaseID' !== e &&
                  'transactionID' !== e &&
                  'state' !== e &&
                  'zip' !== e &&
                  'campaign' !== e &&
                  'events2' !== e &&
                  'latitude' !== e &&
                  'longitude' !== e &&
                  'ms_a' !== e &&
                  'contextData' !== e &&
                  'supplementalDataID' !== e &&
                  'tnt' !== e &&
                  'timestamp' !== e &&
                  'abort' !== e &&
                  'useBeacon' !== e &&
                  'linkObject' !== e &&
                  'clickObject' !== e &&
                  'linkType' !== e &&
                  'linkName' !== e &&
                  'linkURL' !== e &&
                  'bodyClickTarget' !== e &&
                  'bodyClickFunction' !== e) ||
                (c['!' + e] = 1);
      };
      a.Mb = function (a) {
        var b,
          d,
          f,
          e,
          g,
          k = 0,
          h,
          m = '',
          n = '';
        if (
          a &&
          255 < a.length &&
          ((b = '' + a),
          (d = b.indexOf('?')),
          0 < d &&
            ((h = b.substring(d + 1)),
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
                : 0 <= e.indexOf('yahoo.co')
                ? (k = ',p,ei,')
                : 0 <= e.indexOf('baidu.') && (k = ',wd,word,'),
              k && h)))
        ) {
          if ((a = h.split('&')) && 1 < a.length) {
            for (f = 0; f < a.length; f++)
              (e = a[f]),
                (d = e.indexOf('=')),
                0 < d && 0 <= k.indexOf(',' + e.substring(0, d) + ',')
                  ? (m += (m ? '&' : '') + e)
                  : (n += (n ? '&' : '') + e);
            m && n ? (h = m + '&' + n) : (n = '');
          }
          d = 253 - (h.length - n.length) - b.length;
          a = b + (0 < d ? g.substring(0, d) : '') + '?' + h;
        }
        return a;
      };
      a.eb = function (c) {
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
      a.ca = !1;
      a.H = !1;
      a.Cb = function () {
        a.H = !0;
        a.p();
      };
      a.I = !1;
      a.Db = function (c) {
        a.marketingCloudVisitorID = c.MCMID;
        a.visitorOptedOut = c.MCOPTOUT;
        a.analyticsVisitorID = c.MCAID;
        a.audienceManagerLocationHint = c.MCAAMLH;
        a.audienceManagerBlob = c.MCAAMB;
        a.I = !1;
        a.p();
      };
      a.cb = function (c) {
        a.maxDelay || (a.maxDelay = 250);
        return a.u('_d')
          ? (c &&
              setTimeout(function () {
                c();
              }, a.maxDelay),
            !1)
          : !0;
      };
      a.aa = !1;
      a.G = !1;
      a.Aa = function () {
        a.G = !0;
        a.p();
      };
      a.isReadyToTrack = function () {
        var c = !0;
        if (!a.ob() || !a.mb()) return !1;
        a.qb() || (c = !1);
        a.tb() || (c = !1);
        return c;
      };
      a.ob = function () {
        a.ca || a.H || (a.eb(a.Cb) ? (a.H = !0) : (a.ca = !0));
        return a.ca && !a.H ? !1 : !0;
      };
      a.mb = function () {
        var c = a.wa();
        if (c)
          if (a.ta || a.ba)
            if (a.ta) {
              if (!c.isApproved(c.Categories.ANALYTICS)) return !1;
            } else return !1;
          else return c.fetchPermissions(a.vb, !0), (a.ba = !0), !1;
        return !0;
      };
      a.V = function (c) {
        var b = a.wa();
        return b && !b.isApproved(b.Categories[c]) ? !1 : !0;
      };
      a.wa = function () {
        return h.adobe && h.adobe.optIn ? h.adobe.optIn : null;
      };
      a.Y = !0;
      a.qb = function () {
        var c = a.T();
        if (!c || !c.getVisitorValues) return !0;
        a.Y && ((a.Y = !1), a.I || ((a.I = !0), c.getVisitorValues(a.Db)));
        return !a.I;
      };
      a.T = function () {
        var c = a.visitor;
        c && !c.isAllowed() && (c = null);
        return c;
      };
      a.tb = function () {
        a.aa || a.G || (a.cb(a.Aa) ? (a.G = !0) : (a.aa = !0));
        return a.aa && !a.G ? !1 : !0;
      };
      a.ba = !1;
      a.vb = function () {
        a.ba = !1;
        a.ta = !0;
      };
      a.j = q;
      a.q = 0;
      a.callbackWhenReadyToTrack = function (c, b, d) {
        var f;
        f = {};
        f.Hb = c;
        f.Gb = b;
        f.Eb = d;
        a.j == q && (a.j = []);
        a.j.push(f);
        0 == a.q && (a.q = setInterval(a.p, 100));
      };
      a.p = function () {
        var c;
        if (a.isReadyToTrack() && (a.Bb(), a.j != q))
          for (; 0 < a.j.length; ) (c = a.j.shift()), c.Gb.apply(c.Hb, c.Eb);
      };
      a.Bb = function () {
        a.q && (clearInterval(a.q), (a.q = 0));
      };
      a.ua = function (c) {
        var b,
          d = {};
        a.hc(d);
        if (c != q) for (b in c) d[b] = c[b];
        a.callbackWhenReadyToTrack(a, a.Fa, [d]);
        a.Da();
      };
      a.Ob = function () {
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
      a.Fa = function (c) {
        var b = new Date(),
          d =
            's' +
            (Math.floor(b.getTime() / 10800000) % 10) +
            Math.floor(10000000000000 * Math.random()),
          f = b.getYear(),
          f =
            't=' +
            a.escape(
              b.getDate() +
                '/' +
                b.getMonth() +
                '/' +
                (1900 > f ? f + 1900 : f) +
                ' ' +
                b.getHours() +
                ':' +
                b.getMinutes() +
                ':' +
                b.getSeconds() +
                ' ' +
                b.getDay() +
                ' ' +
                b.getTimezoneOffset()
            ),
          e = a.T(),
          g;
        c && (g = a.S(c, 1));
        a.Vb() &&
          !a.visitorOptedOut &&
          (a.xa() || (a.fid = a.Ob()),
          a.Yb(),
          a.usePlugins && a.doPlugins && a.doPlugins(a),
          a.account &&
            (a.abort ||
              (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(b.getTime() / 1000)),
              (c = h.location),
              a.pageURL || (a.pageURL = c.href ? c.href : c),
              a.referrer ||
                a.$a ||
                ((c = a.Util.getQueryParam('adobe_mc_ref', null, null, !0)),
                (a.referrer = c || void 0 === c ? (void 0 === c ? '' : c) : p.document.referrer)),
              (a.$a = 1),
              !a.referrer && a.Z && (a.referrer = a.Z),
              (a.Z = 0),
              (a.referrer = a.Mb(a.referrer)),
              a.u('_g')),
            a.Rb() &&
              !a.abort &&
              (e &&
                a.V('TARGET') &&
                !a.supplementalDataID &&
                e.getSupplementalDataID &&
                (a.supplementalDataID = e.getSupplementalDataID(
                  'AppMeasurement:' + a._in,
                  a.expectSupplementalData ? !1 : !0
                )),
              a.V('AAM') || (a.contextData['cm.ssf'] = 1),
              a.Sb(),
              a.wb(),
              (f += a.Qb()),
              a.sb(d, f),
              a.u('_t'),
              (a.referrer = ''))));
        a.referrer && (a.Z = a.referrer);
        a.Da();
        g && a.S(g, 1);
      };
      a.t = a.track = function (c, b) {
        b && a.S(b);
        a.Y = !0;
        a.isReadyToTrack()
          ? null != a.j && 0 < a.j.length
            ? (a.ua(c), a.p())
            : a.Fa(c)
          : a.ua(c);
      };
      a.wb = function () {
        a.writeSecureCookies && !a.ssl && a.ab();
      };
      a.ab = function () {
        a.contextData.excCodes = a.contextData.excCodes ? a.contextData.excCodes : [];
        a.contextData.excCodes.push(1);
      };
      a.Da = function () {
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = h.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = a.useBeacon = a.referrer = 0;
        a.contextData && a.contextData.excCodes && (a.contextData.excCodes = 0);
      };
      a.Ca = [];
      a.registerPreTrackCallback = function (c) {
        for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
        'function' == typeof c
          ? a.Ca.push([c, b])
          : a.debugTracking && a.C('DEBUG: Non function type passed to registerPreTrackCallback');
      };
      a.hb = function (c) {
        a.va(a.Ca, c);
      };
      a.Ba = [];
      a.registerPostTrackCallback = function (c) {
        for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
        'function' == typeof c
          ? a.Ba.push([c, b])
          : a.debugTracking && a.C('DEBUG: Non function type passed to registerPostTrackCallback');
      };
      a.gb = function (c) {
        a.va(a.Ba, c);
      };
      a.va = function (c, b) {
        if ('object' == typeof c)
          for (var d = 0; d < c.length; d++) {
            var f = c[d][0],
              e = c[d][1].slice();
            e.unshift(b);
            if ('function' == typeof f)
              try {
                f.apply(null, e);
              } catch (g) {
                a.debugTracking && a.C(g.message);
              }
          }
      };
      a.tl = a.trackLink = function (c, b, d, f, e) {
        a.linkObject = c;
        a.linkType = b;
        a.linkName = d;
        e && ((a.bodyClickTarget = c), (a.bodyClickFunction = e));
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
        for (c = 0; c < a.g.length; c++)
          if (
            ((b = a.g[c]),
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
      a.sb = function (c, b) {
        var d =
          a.ib() +
          '/' +
          c +
          '?AQB=1&ndh=1&pf=1&' +
          (a.za() ? 'callback=s_c_il[' + a._in + '].doPostbacks&et=1&' : '') +
          b +
          '&AQE=1';
        a.hb(d);
        a.fb(d);
        a.U();
      };
      a.ib = function () {
        var c = a.jb();
        return (
          'http' +
          (a.ssl ? 's' : '') +
          '://' +
          c +
          '/b/ss/' +
          a.account +
          '/' +
          (a.mobile ? '5.' : '') +
          (a.za() ? '10' : '1') +
          '/JS-' +
          a.version +
          (a.ac ? 'T' : '') +
          (a.tagContainerMarker ? '-' + a.tagContainerMarker : '')
        );
      };
      a.za = function () {
        return (a.AudienceManagement && a.AudienceManagement.isReady()) || 0 != a.usePostbacks;
      };
      a.jb = function () {
        var c = a.dc,
          b = a.trackingServer;
        b
          ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure)
          : ((c = c ? ('' + c).toLowerCase() : 'd1'),
            'd1' == c ? (c = '112') : 'd2' == c && (c = '122'),
            (b = a.lb() + '.' + c + '.2o7.net'));
        return b;
      };
      a.lb = function () {
        var c = a.visitorNamespace;
        c || ((c = a.account.split(',')[0]), (c = c.replace(/[^0-9a-z]/gi, '')));
        return c;
      };
      a.Za = /{(%?)(.*?)(%?)}/;
      a.gc = RegExp(a.Za.source, 'g');
      a.Lb = function (c) {
        if ('object' == typeof c.dests)
          for (var b = 0; b < c.dests.length; ++b) {
            var d = c.dests[b];
            if ('string' == typeof d.c && 'aa.' == d.id.substr(0, 3))
              for (var f = d.c.match(a.gc), e = 0; e < f.length; ++e) {
                var g = f[e],
                  k = g.match(a.Za),
                  h = '';
                '%' == k[1] && 'timezone_offset' == k[2]
                  ? (h = new Date().getTimezoneOffset())
                  : '%' == k[1] && 'timestampz' == k[2] && (h = a.Pb());
                d.c = d.c.replace(g, a.escape(h));
              }
          }
      };
      a.Pb = function () {
        var c = new Date(),
          b = new Date(60000 * Math.abs(c.getTimezoneOffset()));
        return (
          a.k(4, c.getFullYear()) +
          '-' +
          a.k(2, c.getMonth() + 1) +
          '-' +
          a.k(2, c.getDate()) +
          'T' +
          a.k(2, c.getHours()) +
          ':' +
          a.k(2, c.getMinutes()) +
          ':' +
          a.k(2, c.getSeconds()) +
          (0 < c.getTimezoneOffset() ? '-' : '+') +
          a.k(2, b.getUTCHours()) +
          ':' +
          a.k(2, b.getUTCMinutes())
        );
      };
      a.k = function (a, b) {
        return (Array(a + 1).join(0) + b).slice(-a);
      };
      a.qa = {};
      a.doPostbacks = function (c) {
        if ('object' == typeof c)
          if (
            (a.Lb(c),
            'object' == typeof a.AudienceManagement &&
              'function' == typeof a.AudienceManagement.isReady &&
              a.AudienceManagement.isReady() &&
              'function' == typeof a.AudienceManagement.passData)
          )
            a.AudienceManagement.passData(c);
          else if ('object' == typeof c && 'object' == typeof c.dests)
            for (var b = 0; b < c.dests.length; ++b) {
              var d = c.dests[b];
              'object' == typeof d &&
                'string' == typeof d.c &&
                'string' == typeof d.id &&
                'aa.' == d.id.substr(0, 3) &&
                ((a.qa[d.id] = new Image()), (a.qa[d.id].alt = ''), (a.qa[d.id].src = d.c));
            }
      };
      a.fb = function (c) {
        a.i || a.Tb();
        a.i.push(c);
        a.ja = a.A();
        a.Ya();
      };
      a.Tb = function () {
        a.i = a.Wb();
        a.i || (a.i = []);
      };
      a.Wb = function () {
        var c, b;
        if (a.pa()) {
          try {
            (b = h.localStorage.getItem(a.na())) && (c = h.JSON.parse(b));
          } catch (d) {}
          return c;
        }
      };
      a.pa = function () {
        var c = !0;
        (a.trackOffline && a.offlineFilename && h.localStorage && h.JSON) || (c = !1);
        return c;
      };
      a.Oa = function () {
        var c = 0;
        a.i && (c = a.i.length);
        a.l && c++;
        return c;
      };
      a.U = function () {
        if (a.l && (a.v && a.v.complete && a.v.D && a.v.R(), a.l)) return;
        a.Pa = q;
        if (a.oa) a.ja > a.N && a.Wa(a.i), a.ra(500);
        else {
          var c = a.Fb();
          if (0 < c) a.ra(c);
          else if ((c = a.Ma())) (a.l = 1), a.Xb(c), a.$b(c);
        }
      };
      a.ra = function (c) {
        a.Pa || (c || (c = 0), (a.Pa = setTimeout(a.U, c)));
      };
      a.Fb = function () {
        var c;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
        c = a.A() - a.Ua;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
      };
      a.Ma = function () {
        if (0 < a.i.length) return a.i.shift();
      };
      a.Xb = function (c) {
        if (a.debugTracking) {
          var b = 'AppMeasurement Debug: ' + c;
          c = c.split('&');
          var d;
          for (d = 0; d < c.length; d++) b += '\n\t' + a.unescape(c[d]);
          a.C(b);
        }
      };
      a.xa = function () {
        return a.marketingCloudVisitorID || a.analyticsVisitorID;
      };
      a.X = !1;
      var t;
      try {
        t = JSON.parse('{"x":"y"}');
      } catch (v) {
        t = null;
      }
      t && 'y' == t.x
        ? ((a.X = !0),
          (a.W = function (a) {
            return JSON.parse(a);
          }))
        : h.$ && h.$.parseJSON
        ? ((a.W = function (a) {
            return h.$.parseJSON(a);
          }),
          (a.X = !0))
        : (a.W = function () {
            return null;
          });
      a.$b = function (c) {
        var b, d, f;
        a.nb(c) &&
          ((d = 1),
          (b = {
            send: function (c) {
              a.useBeacon = !1;
              navigator.sendBeacon(c) ? b.R() : b.ha();
            },
          }));
        !b &&
          a.xa() &&
          2047 < c.length &&
          (a.bb() && ((d = 2), (b = new XMLHttpRequest())),
          b &&
            ((a.AudienceManagement && a.AudienceManagement.isReady()) || 0 != a.usePostbacks) &&
            (a.X ? (b.Ha = !0) : (b = 0)));
        !b && a.fc && (c = c.substring(0, 2047));
        !b &&
          a.d.createElement &&
          (0 != a.usePostbacks || (a.AudienceManagement && a.AudienceManagement.isReady())) &&
          (b = a.d.createElement('SCRIPT')) &&
          'async' in b &&
          ((f = (f = a.d.getElementsByTagName('HEAD')) && f[0] ? f[0] : a.d.body)
            ? ((b.type = 'text/javascript'), b.setAttribute('async', 'async'), (d = 3))
            : (b = 0));
        b ||
          ((b = new Image()),
          (b.alt = ''),
          b.abort ||
            'undefined' === typeof h.InstallTrigger ||
            (b.abort = function () {
              b.src = q;
            }));
        b.Va = Date.now();
        b.Ja = function () {
          try {
            b.D && (clearTimeout(b.D), (b.D = 0));
          } catch (a) {}
        };
        b.onload = b.R = function () {
          b.Va && (a.ka = Date.now() - b.Va);
          a.gb(c);
          b.Ja();
          a.Jb();
          a.da();
          a.l = 0;
          a.U();
          if (b.Ha) {
            b.Ha = !1;
            try {
              a.doPostbacks(a.W(b.responseText));
            } catch (d) {}
          }
        };
        b.onabort = b.onerror = b.ha = function () {
          b.Ja();
          (a.trackOffline || a.oa) && a.l && a.i.unshift(a.Ib);
          a.l = 0;
          a.ja > a.N && a.Wa(a.i);
          a.da();
          a.ra(500);
        };
        b.onreadystatechange = function () {
          4 == b.readyState && (200 == b.status ? b.R() : b.ha());
        };
        a.Ua = a.A();
        if (1 === d) b.send(c);
        else if (2 === d)
          (f = c.indexOf('?')),
            (d = c.substring(0, f)),
            (f = c.substring(f + 1)),
            (f = f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, '')),
            b.open('POST', d, !0),
            (b.withCredentials = !0),
            b.send(f);
        else if (((b.src = c), 3 === d)) {
          if (a.Sa)
            try {
              f.removeChild(a.Sa);
            } catch (e) {}
          f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
          a.Sa = a.v;
        }
        b.D = setTimeout(function () {
          b.D && (b.complete ? b.R() : (a.trackOffline && b.abort && b.abort(), b.ha()));
        }, 5000);
        a.Ib = c;
        a.v = h['s_i_' + a.replace(a.account, ',', '_')] = b;
        if ((a.useForcedLinkTracking && a.J) || a.bodyClickFunction)
          a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
            (a.ea = setTimeout(a.da, a.forcedLinkTrackingTimeout));
      };
      a.nb = function (c) {
        var b = !1;
        navigator.sendBeacon && (a.pb(c) ? (b = !0) : a.useBeacon && (b = !0));
        a.yb(c) && (b = !1);
        return b;
      };
      a.pb = function (a) {
        return a && 0 < a.indexOf('pe=lnk_e') ? !0 : !1;
      };
      a.yb = function (a) {
        return 64000 <= a.length;
      };
      a.bb = function () {
        return 'undefined' !== typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
          ? !0
          : !1;
      };
      a.Jb = function () {
        if (a.pa() && !(a.Ta > a.N))
          try {
            h.localStorage.removeItem(a.na()), (a.Ta = a.A());
          } catch (c) {}
      };
      a.Wa = function (c) {
        if (a.pa()) {
          a.Ya();
          try {
            h.localStorage.setItem(a.na(), h.JSON.stringify(c)), (a.N = a.A());
          } catch (b) {}
        }
      };
      a.Ya = function () {
        if (a.trackOffline) {
          if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
          for (; a.i.length > a.offlineLimit; ) a.Ma();
        }
      };
      a.forceOffline = function () {
        a.oa = !0;
      };
      a.forceOnline = function () {
        a.oa = !1;
      };
      a.na = function () {
        return a.offlineFilename + '-' + a.visitorNamespace + a.account;
      };
      a.A = function () {
        return new Date().getTime();
      };
      a.Qa = function (a) {
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
        a.ac = c;
        for (b = 0; b < a._il.length; b++)
          if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
            a.S(d);
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
        getQueryParam: function (c, b, d, f) {
          var e,
            g = '';
          b || (b = a.pageURL ? a.pageURL : h.location);
          d = d ? d : '&';
          if (!c || !b) return g;
          b = '' + b;
          e = b.indexOf('?');
          if (0 > e) return g;
          b = d + b.substring(e + 1) + d;
          if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + '=' + d))) {
            e = b.indexOf('#');
            0 <= e && (b = b.substr(0, e) + d);
            e = b.indexOf(d + c + '=');
            if (0 > e) return g;
            b = b.substring(e + d.length + c.length + 1);
            e = b.indexOf(d);
            0 <= e && (b = b.substring(0, e));
            0 < b.length && (g = a.unescape(b));
            return g;
          }
        },
        getIeVersion: function () {
          return document.documentMode ? document.documentMode : a.ya() ? 7 : null;
        },
      };
      a.F = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(
        ' '
      );
      a.g = a.F.concat(
        'purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(
          ' '
        )
      );
      a.la = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
        ' '
      );
      a.O = a.la.slice(0);
      a.Ga = 'account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement'.split(
        ' '
      );
      for (m = 0; 250 >= m; m++)
        76 > m && (a.g.push('prop' + m), a.O.push('prop' + m)),
          a.g.push('eVar' + m),
          a.O.push('eVar' + m),
          6 > m && a.g.push('hier' + m),
          4 > m && a.g.push('list' + m);
      m = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a'.split(
        ' '
      );
      a.g = a.g.concat(m);
      a.F = a.F.concat(m);
      a.ssl = 0 <= h.location.protocol.toLowerCase().indexOf('https');
      a.charSet = 'UTF-8';
      a.contextData = {};
      a.writeSecureCookies = !1;
      a.offlineThrottleDelay = 0;
      a.offlineFilename = 'AppMeasurement.offline';
      a.P = 's_sq';
      a.Ua = 0;
      a.ja = 0;
      a.N = 0;
      a.Ta = 0;
      a.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
      a.w = h;
      a.d = h.document;
      a.da = function () {
        a.ea && (h.clearTimeout(a.ea), (a.ea = q));
        a.bodyClickTarget && a.J && a.bodyClickTarget.dispatchEvent(a.J);
        a.bodyClickFunction &&
          ('function' == typeof a.bodyClickFunction
            ? a.bodyClickFunction()
            : a.bodyClickTarget &&
              a.bodyClickTarget.href &&
              (a.d.location = a.bodyClickTarget.href));
        a.bodyClickTarget = a.J = a.bodyClickFunction = 0;
      };
      a.Xa = function () {
        const $___old_a4a4f79beab21d42 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_a4a4f79beab21d42)
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
                  if (!((a.d && a.d.getElementById('cppXYctnr')) || (c && c['s_fe_' + a._in]))) {
                    if (a.Ia)
                      if (a.useForcedLinkTracking) a.b.removeEventListener('click', a.r, !1);
                      else {
                        a.b.removeEventListener('click', a.r, !0);
                        a.Ia = a.useForcedLinkTracking = 0;
                        return;
                      }
                    else a.useForcedLinkTracking = 0;
                    a.clickObject = c.srcElement ? c.srcElement : c.target;
                    try {
                      if (
                        !a.clickObject ||
                        (a.M && a.M == a.clickObject) ||
                        !(
                          a.clickObject.tagName ||
                          a.clickObject.parentElement ||
                          a.clickObject.parentNode
                        )
                      )
                        a.clickObject = 0;
                      else {
                        var k = (a.M = a.clickObject);
                        a.ia && (clearTimeout(a.ia), (a.ia = 0));
                        a.ia = setTimeout(function () {
                          a.M == k && (a.M = 0);
                        }, 10000);
                        f = a.Oa();
                        a.track();
                        if (f < a.Oa() && a.useForcedLinkTracking && c.target) {
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
                            a.Qa(g) || (g = 0),
                            (d = e.target),
                            c.target.dispatchEvent &&
                              g &&
                              (!d ||
                                '_self' == d ||
                                '_top' == d ||
                                '_parent' == d ||
                                (h.name && d == h.name)))
                          ) {
                            try {
                              b = a.d.createEvent('MouseEvents');
                            } catch (l) {
                              b = new h.MouseEvent();
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
                              } catch (m) {
                                b = 0;
                              }
                              b &&
                                ((b['s_fe_' + a._in] = b.s_fe = 1),
                                c.stopPropagation(),
                                c.stopImmediatePropagation && c.stopImmediatePropagation(),
                                c.preventDefault(),
                                (a.bodyClickTarget = c.target),
                                (a.J = b));
                            }
                          }
                        }
                      }
                    } catch (n) {
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
                        (0 <= navigator.userAgent.indexOf('Firefox/2') && h.MouseEvent)) &&
                      ((a.Ia = 1),
                      (a.useForcedLinkTracking = 1),
                      a.b.addEventListener('click', a.r, !0)),
                    a.b.addEventListener('click', a.r, !1)))
              : setTimeout(a.Xa, 30);
          }.apply(this, arguments);
        } finally {
          if ($___old_a4a4f79beab21d42)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_a4a4f79beab21d42
            ));
        }
      };
      a.fc = a.ya();
      a.Kb();
      a.mc ||
        (r
          ? a.setAccount(r)
          : a.C('Error, missing Report Suite ID in AppMeasurement initialization'),
        a.Xa(),
        a.loadModule('ActivityMap'));
    }
    AppMeasurement = $___var_8a136b913d554916;
    ({}.constructor.defineProperty(AppMeasurement, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement',
      writable: false,
    }));
    function $___var_3ca4cd1dd6346282 (r) {
      var a,
        h = window.s_c_il,
        q,
        p,
        m = r.split(','),
        s,
        u,
        t = 0;
      if (h)
        for (q = 0; !t && q < h.length; ) {
          a = h[q];
          if ('s_c' == a._c && (a.account || a.oun))
            if (a.account && a.account == r) t = 1;
            else
              for (
                p = a.account ? a.account : a.oun,
                  p = a.allAccounts ? a.allAccounts : p.split(','),
                  s = 0;
                s < m.length;
                s++
              )
                for (u = 0; u < p.length; u++) m[s] == p[u] && (t = 1);
          q++;
        }
      t ? a.setAccount && a.setAccount(r) : (a = new AppMeasurement(r));
      return a;
    }
    s_gi = $___var_3ca4cd1dd6346282;
    ({}.constructor.defineProperty(s_gi, 'name', {
      configurable: true,
      enumerable: false,
      value: 's_gi',
      writable: false,
    }));
    AppMeasurement.getInstance = s_gi;
    window.s_objectID || (window.s_objectID = 0);
    function $___var_b00b97a99bd14e3d () {
      var r = window,
        a = r.s_giq,
        h,
        q,
        p;
      if (a)
        for (h = 0; h < a.length; h++)
          (q = a[h]), (p = s_gi(q.oun)), p.setAccount(q.un), p.setTagContainer(q.tagContainerName);
      r.s_giq = 0;
    }
    s_pgicq = $___var_b00b97a99bd14e3d;
    ({}.constructor.defineProperty(s_pgicq, 'name', {
      configurable: true,
      enumerable: false,
      value: 's_pgicq',
      writable: false,
    }));
    s_pgicq();
  })();
}
