{
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
  (function () {
    (function (w, g) {
      w[g] = w[g] || {};
      w[g].e = function (s) {
        const $___old_47ed8e5961331f1d = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_47ed8e5961331f1d)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_47c01efa79e9f191.userAgent
            ));
          return function () {
            return eval(s);
          }.apply(this, arguments);
        } finally {
          if ($___old_47ed8e5961331f1d)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_47ed8e5961331f1d
            ));
        }
      };
    })(window, 'google_tag_manager');
    (function () {
      const $___old_c984ca54bf7ab600 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        ),
        $___old_8cef4e96755e0372 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'appVersion'
        );
      try {
        if ($___old_c984ca54bf7ab600)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_47c01efa79e9f191.userAgent
          ));
        if ($___old_8cef4e96755e0372)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'appVersion',
            $___stub_47c01efa79e9f191.appVersion
          ));
        return function () {
          var data = {
            resource: {
              version: '844',
              macros: [
                {
                  function: '__jsm',
                  vtp_javascript: [
                    'template',
                    '(function(){var a=document.referrer;a=-1!==a.indexOf("reuters.com")?!0:!1;return a?!0:!1})();',
                  ],
                },
                {
                  function: '__jsm',
                  vtp_javascript: [
                    'template',
                    '(function(){var a=document.querySelector("meta[name\\x3d\'DCSext.DartZone\']");a=a&&a.content;return-1!==a.indexOf("qa.")})();',
                  ],
                },
                { function: '__e' },
                {
                  function: '__u',
                  vtp_component: 'HOST',
                  vtp_enableMultiQueryKeys: false,
                  vtp_enableIgnoreEmptyQueryParam: false,
                },
                {
                  function: '__jsm',
                  vtp_javascript: [
                    'template',
                    '(function(){var a=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,\n4))?!0:!1})();',
                  ],
                },
                {
                  function: '__u',
                  vtp_component: 'URL',
                  vtp_enableMultiQueryKeys: false,
                  vtp_enableIgnoreEmptyQueryParam: false,
                },
                {
                  function: '__u',
                  vtp_component: 'PATH',
                  vtp_enableMultiQueryKeys: false,
                  vtp_enableIgnoreEmptyQueryParam: false,
                },
                {
                  function: '__v',
                  vtp_name: 'gtm.triggers',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: true,
                  vtp_defaultValue: '',
                },
                {
                  function: '__jsm',
                  vtp_javascript: [
                    'template',
                    '(function(){function b(){var a=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,\n4))?!0:!1}var a=document.domain;if("www.reuters.com"==a||"mobile.reuters.com"==a||"blogs.reuters.com"==a||"widerimage.reuters.com"==a||"live.reuters.com"==a||"commerce.us.reuters.com"==a||"funds.us.reuters.com"==a||"stockscreener.us.reuters.com"==a||"polling.reuters.com"==a||"design.reuters.com"==a||"newslink.reuters.com"==a)return b()?"UA-24152976-12":"UA-24152976-1";if("uk.reuters.com"==a||"commerce.uk.reuters.com"==a||"uk.mobile.reuters.com"==a)return b()?"UA-24152976-18":"UA-24152976-7";if("in.reuters.com"==\na||"in.mobile.reuters.com"==a)return b()?"UA-24152976-21":"UA-24152976-2";if("cn.reuters.com"==a||"cn.mobile.reuters.com"==a)return b()?"UA-24152976-14":"UA-24152976-6";if("jp.reuters.com"==a||"commodities.reuters.co.jp"==a||"commerce.jp.reuters.com"==a||"jp.mobile.reuters.com"==a)return b()?"UA-24152976-13":"UA-24152976-9";if("de.reuters.com"==a)return"UA-24152976-5";if("af.reuters.com"==a||"ar.reuters.com"==a||"ara.reuters.com"==a||"br.reuters.com"==a||"ca.reuters.com"==a||"it.reuters.com"==a||\n"lta.reuters.com"==a||"mx.reuters.com"==a||"ru.reuters.com"==a||"es.reuters.com"==a||"fr.reuters.com"==a)return"UA-24152976-11"})();',
                  ],
                },
                {
                  function: '__gas',
                  vtp_cookieDomain: 'auto',
                  vtp_doubleClick: false,
                  vtp_setTrackerName: false,
                  vtp_useDebugVersion: false,
                  vtp_useHashAutoLink: false,
                  vtp_decorateFormsAutoLink: false,
                  vtp_enableLinkId: false,
                  vtp_enableEcommerce: false,
                  vtp_trackingId: ['macro', 8],
                  vtp_enableRecaptchaOption: false,
                  vtp_enableUaRlsa: false,
                  vtp_enableUseInternalVersion: false,
                  vtp_enableGA4Schema: false,
                },
                { function: '__v', vtp_name: 'gtm.scrollThreshold', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.videoStatus', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.videoPercent', vtp_dataLayerVersion: 1 },
                {
                  function: '__jsm',
                  vtp_javascript: [
                    'template',
                    '(function(){var a=',
                    ['escape', ['macro', 11], 8, 16],
                    ';switch(a){case "start":return"Play";case "pause":return"Pause";case "seek":return"Seeking";case "progress":return+',
                    ['escape', ['macro', 12], 8, 16],
                    '+"% Watched";case "complete":return"100% Watched"}})();',
                  ],
                },
                { function: '__v', vtp_name: 'gtm.videoTitle', vtp_dataLayerVersion: 1 },
                {
                  function: '__v',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: false,
                  vtp_name: 'event_category',
                },
                {
                  function: '__v',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: false,
                  vtp_name: 'event_action',
                },
                {
                  function: '__v',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: false,
                  vtp_name: 'event_label',
                },
                {
                  function: '__v',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: false,
                  vtp_name: 'attributes.cookieConsent',
                },
                {
                  function: '__jsm',
                  vtp_javascript: [
                    'template',
                    '(function(){var a=document.querySelector("meta[name\\x3d\'DCSext.DartZone\']");return(a=a&&a.content)&&a.split(".")[0]})();',
                  ],
                },
                {
                  function: '__v',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: false,
                  vtp_name: 'attributes.cookieConsent',
                },
                { function: '__aev', vtp_varType: 'ELEMENT' },
                { function: '__aev', vtp_varType: 'CLASSES' },
                { function: '__aev', vtp_varType: 'ID' },
                { function: '__aev', vtp_varType: 'TARGET' },
                { function: '__aev', vtp_varType: 'URL' },
                {
                  function: '__v',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: false,
                  vtp_name: 'category',
                },
                {
                  function: '__v',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: false,
                  vtp_name: 'action',
                },
                {
                  function: '__v',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: false,
                  vtp_name: 'label',
                },
                {
                  function: '__v',
                  vtp_dataLayerVersion: 2,
                  vtp_setDefaultValue: false,
                  vtp_name: 'network',
                },
                {
                  function: '__aev',
                  vtp_setDefaultValue: false,
                  vtp_varType: 'URL',
                  vtp_component: 'IS_OUTBOUND',
                  vtp_affiliatedDomains: 'yokogawa.com',
                },
                { function: '__f', vtp_component: 'URL' },
                { function: '__e' },
                { function: '__v', vtp_name: 'gtm.element', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.elementClasses', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.elementId', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.elementTarget', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.elementUrl', vtp_dataLayerVersion: 1 },
                { function: '__aev', vtp_varType: 'TEXT' },
                { function: '__v', vtp_name: 'gtm.element', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.elementClasses', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.elementId', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.elementTarget', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.elementUrl', vtp_dataLayerVersion: 1 },
                { function: '__aev', vtp_varType: 'TEXT' },
                { function: '__v', vtp_name: 'gtm.videoProvider', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.videoUrl', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.videoDuration', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.videoVisible', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.videoCurrentTime', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.scrollUnits', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.scrollDirection', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.visibleRatio', vtp_dataLayerVersion: 1 },
                { function: '__v', vtp_name: 'gtm.visibleTime', vtp_dataLayerVersion: 1 },
              ],
              tags: [
                {
                  function: '__hjtc',
                  metadata: ['map'],
                  consent: ['list'],
                  once_per_event: true,
                  vtp_hotjar_site_id: '65715',
                  tag_id: 109,
                },
                {
                  function: '__hjtc',
                  once_per_event: true,
                  vtp_hotjar_site_id: '339970',
                  tag_id: 110,
                },
                {
                  function: '__opt',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_overrideGaSettings: true,
                  vtp_setTrackerName: false,
                  vtp_useDebugVersion: false,
                  vtp_optimizeContainerId: 'GTM-MW939W',
                  vtp_trackingId: 'UA-24152976-12',
                  tag_id: 116,
                },
                {
                  function: '__hjtc',
                  once_per_event: true,
                  vtp_hotjar_site_id: '359123',
                  tag_id: 117,
                },
                {
                  function: '__hjtc',
                  once_per_event: true,
                  vtp_hotjar_site_id: '360206',
                  tag_id: 119,
                },
                {
                  function: '__opt',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_overrideGaSettings: true,
                  vtp_setTrackerName: false,
                  vtp_useDebugVersion: false,
                  vtp_optimizeContainerId: 'GTM-TBBXQQ',
                  vtp_trackingId: 'UA-24152976-1',
                  tag_id: 120,
                },
                {
                  function: '__hjtc',
                  once_per_event: true,
                  vtp_hotjar_site_id: '421604',
                  tag_id: 133,
                },
                {
                  function: '__hjtc',
                  once_per_event: true,
                  vtp_hotjar_site_id: '434142',
                  tag_id: 135,
                },
                {
                  function: '__hjtc',
                  once_per_event: true,
                  vtp_hotjar_site_id: '434143',
                  tag_id: 136,
                },
                {
                  function: '__ua',
                  once_per_event: true,
                  vtp_nonInteraction: true,
                  vtp_overrideGaSettings: false,
                  vtp_eventCategory: 'Scroll Tracking',
                  vtp_trackType: 'TRACK_EVENT',
                  vtp_gaSettings: ['macro', 9],
                  vtp_eventAction: ['template', ['macro', 10], '%'],
                  vtp_eventLabel: ['macro', 6],
                  vtp_enableRecaptchaOption: false,
                  vtp_enableUaRlsa: false,
                  vtp_enableUseInternalVersion: false,
                  vtp_enableFirebaseCampaignData: true,
                  vtp_trackTypeIsEvent: true,
                  vtp_enableGA4Schema: false,
                  tag_id: 149,
                },
                {
                  function: '__hjtc',
                  once_per_event: true,
                  vtp_hotjar_site_id: '950625',
                  tag_id: 154,
                },
                {
                  function: '__ua',
                  once_per_event: true,
                  vtp_nonInteraction: false,
                  vtp_overrideGaSettings: false,
                  vtp_eventCategory: 'YouTube',
                  vtp_trackType: 'TRACK_EVENT',
                  vtp_gaSettings: ['macro', 9],
                  vtp_eventAction: ['macro', 13],
                  vtp_eventLabel: ['macro', 14],
                  vtp_enableRecaptchaOption: false,
                  vtp_enableUaRlsa: false,
                  vtp_enableUseInternalVersion: false,
                  vtp_enableFirebaseCampaignData: true,
                  vtp_trackTypeIsEvent: true,
                  vtp_enableGA4Schema: false,
                  tag_id: 159,
                },
                {
                  function: '__ua',
                  once_per_event: true,
                  vtp_nonInteraction: true,
                  vtp_overrideGaSettings: false,
                  vtp_eventCategory: ['template', 'Vimeo - ', ['macro', 15]],
                  vtp_trackType: 'TRACK_EVENT',
                  vtp_gaSettings: ['macro', 9],
                  vtp_eventAction: ['macro', 16],
                  vtp_eventLabel: ['macro', 17],
                  vtp_enableRecaptchaOption: false,
                  vtp_enableUaRlsa: false,
                  vtp_enableUseInternalVersion: false,
                  vtp_enableFirebaseCampaignData: true,
                  vtp_trackTypeIsEvent: true,
                  vtp_enableGA4Schema: false,
                  tag_id: 164,
                },
                { function: '__paused', vtp_originalTagType: 'html', tag_id: 183 },
                { function: '__paused', vtp_originalTagType: 'html', tag_id: 188 },
                { function: '__paused', vtp_originalTagType: 'html', tag_id: 735 },
                {
                  function: '__hjtc',
                  metadata: ['map'],
                  consent: ['list'],
                  once_per_event: true,
                  vtp_hotjar_site_id: '339970',
                  tag_id: 773,
                },
                {
                  function: '__sdl',
                  vtp_verticalThresholdUnits: 'PERCENT',
                  vtp_verticalThresholdsPercent: '25,50,75,100',
                  vtp_verticalThresholdOn: true,
                  vtp_triggerStartOption: 'WINDOW_LOAD',
                  vtp_horizontalThresholdOn: false,
                  vtp_uniqueTriggerId: '341207_444',
                  vtp_enableTriggerStartOption: true,
                  tag_id: 774,
                },
                {
                  function: '__ytl',
                  vtp_progressThresholdsPercent: '25,50,75,100',
                  vtp_captureComplete: true,
                  vtp_captureStart: true,
                  vtp_fixMissingApi: true,
                  vtp_radioButtonGroup1: 'PERCENTAGE',
                  vtp_capturePause: true,
                  vtp_captureProgress: true,
                  vtp_uniqueTriggerId: '341207_491',
                  vtp_enableTriggerStartOption: true,
                  tag_id: 775,
                },
                {
                  function: '__html',
                  vtp_html:
                    '<script type="text/javascript">!TR3.data.doNotFireTags&&TR3.data.contentType&&"articles"==TR3.data.contentType&&(window._ttf=window._ttf||[],_ttf.push({pid:21918,lang:"jp",slot:".column1 #articleText \\x3e p, #resizeableText .focusParagraph \\x3e p",format:"inread",mobile:!1,minSlot:3,components:{mute:{delay:0},skip:{delay:0}},filter:function(a){return 450<=a.wrappedSizes.width}}),function(a){var b=a.getElementsByTagName("script")[0];a=a.createElement("script");a.async=!0;a.src="https://cdn.teads.tv/media/format.js";b.parentNode.insertBefore(a,\nb)}(window.document),TR3.log("Adding in-read for JP new with 21918 via GTM"));</script>',
                  vtp_supportDocumentWrite: true,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  vtp_usePostscribe: true,
                  tag_id: 34,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '\n<script>var _comscore=_comscore||[];_comscore.push({c1:"2",c2:"6035630"});(function(){var a=document.createElement("script"),b=document.getElementsByTagName("script")[0];a.async=!0;a.src=("https:"==document.location.protocol?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";b.parentNode.insertBefore(a,b)})();console.log("comscore new global fired");</script>\n\n<noscript><img src="http://b.scorecardresearch.com/p?c1=2&amp;c2=6035630&amp;cv=2.0&amp;cj=1"></noscript>\n',
                  vtp_supportDocumentWrite: true,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  vtp_usePostscribe: true,
                  tag_id: 37,
                },
                {
                  function: '__html',
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/javascript">window._ttf=window._ttf||[];\n_ttf.push({pid:71490,slot:"#resizeableText .focusParagraph \\x3e p, #articleText \\x3e p, #article-text \\x3e p",format:"inread",minSlot:3,css:"margin: 10px auto; max-width: 550px;",passBack:function(){_ttf=[];window._ttf=window._ttf||[];_ttf.push({pid:71492,slot:"#resizeableText .focusParagraph \\x3e p, #articleText \\x3e p, #article-text \\x3e p",format:"inread",minSlot:3,css:"margin: 10px auto; max-width: 550px;"});var a=window.document,b=a.getElementsByTagName("script")[0];a=a.createElement("script");\na.async=!0;a.src="//cdn.teads.tv/media/format.js";b.parentNode.insertBefore(a,b)}});(function(a){var b=a.getElementsByTagName("script")[0];a=a.createElement("script");a.async=!0;a.src="https://cdn.teads.tv/media/format.js";b.parentNode.insertBefore(a,b)})(window.document);</script>',
                  vtp_supportDocumentWrite: true,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  vtp_usePostscribe: true,
                  tag_id: 46,
                },
                {
                  function: '__html',
                  unlimited: true,
                  vtp_html: '<script src="//tru.am/scripts/custom/reuters.js"></script>',
                  vtp_supportDocumentWrite: true,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  vtp_usePostscribe: true,
                  tag_id: 54,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html: [
                    'template',
                    '<script type="text/javascript">(function(){var pid="";if("',
                    ['escape', ['macro', 3], 7],
                    '"=="uk.reuters.com")pid=15802;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="uk.mobile.reuters.com")pid=15802;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="in.reuters.com")pid=15885;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="in.mobile.reuters.com")pid=15885;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="cn.reuters.com")pid=15780;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="de.reuters.com")pid=15803;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="ar.reuters.com")pid=15782;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="es.reuters.com")pid=15783;if("',
                    ['escape', ['macro', 3], 7],
                    '"==\n"mx.reuters.com")pid=15784;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="af.reuters.com")pid=15804;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="br.reuters.com")pid=15805;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="it.reuters.com")pid=15806;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="fr.reuters.com")pid=15807;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="ru.reuters.com")pid=15808;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="ca.reuters.com")pid=15755;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="ara.reuters.com")pid=15809;if("',
                    ['escape', ['macro', 3], 7],
                    '"=="lta.reuters.com")pid=15756})();</script>',
                  ],
                  vtp_supportDocumentWrite: true,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  vtp_usePostscribe: true,
                  tag_id: 65,
                },
                {
                  function: '__html',
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/javascript">function getValuesGWIQ(){var d=_sf_async_config.sections,b,a=_sf_async_config.domain.substring(0,2),c=document.URL;c=-1<c.indexOf("mobile")?"mobile_web":"desktop";"re"==a&&"us"==a;"Homepage"==d?b="cid\\x3dc0069\\x26s\\x3d1\\x26c\\x3dhome\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Business"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d2\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d2\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Politics"==d?"Landing Page"==\n_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d14\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d14\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Markets"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d3\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d3\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"World"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d4\\x26c\\x3dlanding\\x26p\\x3d"+\nc+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d4\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"US"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d5\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d5\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Technology"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d6\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d6\\x26c\\x3darticle\\x26p\\x3d"+\nc+"\\x26g\\x3d"+a):"Money"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d7\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d7\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Sports"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d10\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d10\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Life"==d?"Landing Page"==_sf_async_config.type?\nb="cid\\x3dc0069\\x26s\\x3d11\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d11\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):0<=d.indexOf("Video")?"Video"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d13\\x26c\\x3dvideo\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Slideshow"==d?"Slideshow"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d12\\x26c\\x3dSlideshow\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Blogs"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d8\\x26c\\x3dlanding\\x26p\\x3d"+\nc+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d8\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Top News"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d15\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d15\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Domestic"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d16\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&\n(b="cid\\x3dc0069\\x26s\\x3d16\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Currencies"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d17\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d17\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Global Economy"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d18\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d18\\x26c\\x3darticle\\x26p\\x3d"+\nc+"\\x26g\\x3d"+a):"Enterprise"==d?"Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d19\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d19\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a):"Special"==d&&("Landing Page"==_sf_async_config.type?b="cid\\x3dc0069\\x26s\\x3d20\\x26c\\x3dlanding\\x26p\\x3d"+c+"\\x26g\\x3d"+a:"Article"==_sf_async_config.type&&(b="cid\\x3dc0069\\x26s\\x3d20\\x26c\\x3darticle\\x26p\\x3d"+c+"\\x26g\\x3d"+a));TR3.log("GWIQ: "+b);return b}\n(function(){var d=document.createElement("script");d.src="//gwiqcdn.globalwebindex.net/gwiq/gwiq.js";d.type="text/javascript";d.async="true";d.onload=d.onreadystatechange=function(){var a=this.readyState;if(!a||"complete"==a||"loaded"==a)try{gwiq.asyncjs(getValuesGWIQ())}catch(c){}};var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(d,b)})();</script>',
                  vtp_supportDocumentWrite: true,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  vtp_usePostscribe: true,
                  tag_id: 66,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  setup_tags: ['list', ['tag', 57, 1]],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">setTimeout(function(){var a=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\');a=a&&a.content;var b=document.getElementsByName("analyticsAttributes.topicChannel")[0];b&&(b=b.getAttribute("content")+" "+a);var c=document.getElementsByName("analyticsAttributes.topicSubChannel")[0];c&&(c=c.getAttribute("content")+" "+a);var d=document.getElementsByName("analyticsAttributes.channel")[0];d&&(d=d.getAttribute("content")+" "+a);var e=document.getElementsByName("analyticsAttributes.contentType")[0];\ne&&(e=e.getAttribute("content")+" "+a);var q=window.abp+" "+a,r="Desktop",f=document.getElementsByName("analyticsAttributes.keywordSlug")[0];f&&(f=f.getAttribute("content")+" "+a);var g=document.getElementsByName("analyticsAttributes.contentChannel")[0];g&&(g=g.getAttribute("content")+" "+a);var h=document.getElementsByName("analyticsAttributes.title")[0];h&&(h=h.getAttribute("content")+" "+a);var k=document.getElementsByName("analyticsAttributes.inlineType")[0];k&&(k=k.getAttribute("content")+" "+\na);var l=document.getElementsByName("DCSext.ContentChannel")[0];l&&(l=l.getAttribute("content")+" "+a);var m=document.getElementsByName("DCSext.ChannelList")[0];m&&(m=m.getAttribute("content")+" "+a);var n=document.getElementsByName("analyticsAttributes.topicN2Names")[0];n&&(n=n.getAttribute("content")+" "+a);var p=document.getElementsByName("analyticsAttributes.topicN2Codes")[0];p&&(p=p.getAttribute("content")+" "+a);a={topic_channel:b,topic_sub_channel:c,channel:d,content_type:e,adblock:q,edition:a,\nplatform:r,keyword_slug:f,content_channel:g,content_title:h,inline_type:k,channel_list:m,topicN2Names:n,topicN2Codes:p,dcontent_channel:l};adobeDil.api.signals(a,"c_")},1E3);</script>  ',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 141,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  setup_tags: ['list', ['tag', 57, 1]],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">setTimeout(function(){var a=document.getElementsByName("analyticsAttributes.edition")[0]&&document.getElementsByName("analyticsAttributes.edition")[0].content,b=document.getElementsByName("analyticsAttributes.topicChannel")[0];b&&(b=b.getAttribute("content")+" "+a);var c=document.getElementsByName("analyticsAttributes.topicSubChannel")[0];c&&(c=c.getAttribute("content")+" "+a);var d=document.getElementsByName("analyticsAttributes.channel")[0];d&&(d=d.getAttribute("content")+" "+a);var e=document.getElementsByName("analyticsAttributes.contentType")[0];\ne&&(e=e.getAttribute("content")+" "+a);var q=window.abp+" "+a,r="Mobile",f=document.getElementsByName("analyticsAttributes.keywordSlug")[0];f&&(f=f.getAttribute("content")+" "+a);var g=document.getElementsByName("analyticsAttributes.contentChannel")[0];g&&(g=g.getAttribute("content")+" "+a);var h=document.getElementsByName("analyticsAttributes.title")[0];h&&(h=h.getAttribute("content")+" "+a);var k=document.getElementsByName("analyticsAttributes.inlineType")[0];k&&(k=k.getAttribute("content")+" "+\na);var l=document.getElementsByName("DCSext.ContentChannel")[0];l&&(l=l.getAttribute("content")+" "+a);var m=document.getElementsByName("DCSext.ChannelList")[0];m&&(m=m.getAttribute("content")+" "+a);var n=document.getElementsByName("analyticsAttributes.topicN2Names")[0];n&&(n=n.getAttribute("content")+" "+Reuters.info.edition);var p=document.getElementsByName("analyticsAttributes.topicN2Codes")[0];p&&(p=p.getAttribute("content")+" "+Reuters.info.edition);a={topic_channel:b,topic_sub_channel:c,channel:d,\ncontent_type:e,adblock:q,edition:a,platform:r,keyword_slug:f,content_channel:g,content_title:h,inline_type:k,channel_list:m,topicN2Names:n,topicN2Codes:p,dcontent_channel:l};adobeDil.api.signals(a,"c_")},1E3);</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 142,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  setup_tags: ['list', ['tag', 57, 1]],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">function checkPlatform(){return-1<TR3.extractDartZone().indexOf("mobile")?"mobile":"desktop"}var topic_channel=document.getElementsByName("analyticsAttributes.topicChannel")[0];topic_channel&&(topic_channel=topic_channel.getAttribute("content")+" "+Reuters.info.edition);var channel=document.getElementsByName("analyticsAttributes.channel")[0];channel&&(channel=channel.getAttribute("content")+" "+Reuters.info.edition);var content_type=document.getElementsByName("analyticsAttributes.contentType")[0];\ncontent_type&&(content_type=content_type.getAttribute("content")+" "+Reuters.info.edition);var adblock=window.abp+" "+Reuters.info.edition,edition=window.article_edition,platform=window.article_platform,keyword_slug=document.getElementsByName("analyticsAttributes.keywordSlug")[0];keyword_slug&&(keyword_slug=keyword_slug.getAttribute("content")+" "+Reuters.info.edition);var content_channel=document.getElementsByName("analyticsAttributes.contentChannel")[0];\ncontent_channel&&(content_channel=content_channel.getAttribute("content")+" "+Reuters.info.edition);var content_title=document.getElementsByName("analyticsAttributes.title")[0];content_title&&(content_title=content_title.getAttribute("content")+" "+Reuters.info.edition);var inline_type=document.getElementsByName("analyticsAttributes.inlineType")[0];inline_type&&(inline_type=inline_type.getAttribute("content")+" "+Reuters.info.edition);var dcontent_channel=document.getElementsByName("DCSext.ContentChannel")[0];\ndcontent_channel&&(dcontent_channel=dcontent_channel.getAttribute("content")+" "+Reuters.info.edition);var channel_list=document.getElementsByName("DCSext.ChannelList")[0];channel_list&&(channel_list=channel_list.getAttribute("content")+" "+Reuters.info.edition);\nvar admp_vars={topic_channel:topic_channel,channel:channel,content_type:content_type,adblock:adblock,edition:edition,platform:platform,keyword_slug:keyword_slug,content_channel:content_channel,content_title:content_title,inline_type:inline_type,channel_list:channel_list,dcontent_channel:dcontent_channel};adobeDil.api.signals(admp_vars,"c_");</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 143,
                },
                {
                  function: '__html',
                  once_per_event: true,
                  vtp_html:
                    '<script src="https://www.reuters.com/ads.js" type="text/javascript"></script>\n<script type="text/javascript">document.getElementById("ApoHvDqryePk")?(abp=0,console.log("Blocking Ads: No")):(abp=1,console.log("Blocking Ads: Yes"));</script>',
                  vtp_supportDocumentWrite: true,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  vtp_usePostscribe: true,
                  tag_id: 148,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  setup_tags: ['list', ['tag', 57, 1]],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){function a(a){return(a=document.querySelector(\'meta[name\\x3d"\'+a+\'"]\'))?a.content+" "+c:void 0}var c=document.querySelector("html").dataset.edition,b=a("analyticsAttributes.keywordSlug");b=window.location&&b?window.location.pathname.replace(/^\\/article\\/|-id.+$/g,"").split("/"):[];DIL.getDil("reuters").api.signals({topic_channel:a("analyticsAttributes.topicChannel"),channel:a("analyticsAttributes.channel"),content_type:a("analyticsAttributes.contentType"),keyword_slug:b.length?b[0]:void 0,\ncontent_channel:a("analyticsAttributes.contentChannel"),content_title:a("analyticsAttributes.contentTitle"),inline_type:a("analyticsAttributes.inlineType"),channel_list:a("DCSext.ContentChannel"),dcontent_channel:a("analyticsAttributes.contentChannel"),adblock:("undefined"!==typeof window.abp?window.abp:"0")+" "+c,edition:c,platform:"Desktop"},"c_").submit()})();</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 151,
                },
                {
                  function: '__html',
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">function getCookie(a){a+="\\x3d";var b=decodeURIComponent(document.cookie);b=b.split(";");for(var c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return""}\nwindow.analytics&&analytics.ready(function(){var a={},b=window.ga&&ga.getAll()[0].get("trackingId"),c=getCookie("aam_uuid");b&&(a.google_analytics_id=b);c&&(a.adobe_id=c);console.log("segment identify user with traits:",a);analytics.identify(analytics.user().anonymousId(),a)});</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 152,
                },
                {
                  function: '__html',
                  once_per_event: true,
                  vtp_html:
                    '<script data-gtmsrc="https://ak.sail-horizon.com/spm/spm.v1.min.js" type="text/gtmscript"></script>\n<script type="text/gtmscript">Sailthru.init({customerId:"3b582fb003d4a35198e7ad9e42ade8f4"});</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 155,
                },
                {
                  function: '__html',
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">tp=window.tp||[];var article_date=document.querySelector("meta[name\\x3d\'analyticsAttributes.articleDate\']");article_date&&tp.push(["setContentCreated",article_date.content]);var author=document.querySelector("meta[name\\x3d\'analyticsAttributes.author\']");author&&tp.push(["setContentAuthor",author.content]);var content_channel=document.querySelector("meta[name\\x3d\'analyticsAttributes.contentChannel\']");content_channel&&tp.push(["setContentSection",content_channel.content]);var keywords=document.querySelector("meta[name\\x3d\'keywords\']");\nkeywords&&tp.push(["setTags",keywords.content.split(",")]);(function(a){var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})("//experience.tinypass.com/xbuilder/experience/load?aid\\x3dTIDovF4cqC");</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 158,
                },
                {
                  function: '__html',
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/javascript">(function(){function g(a){url=window.location.href;a=a.replace(/[\\[\\]]/g,"\\\\$\\x26");a=new RegExp("[?\\x26]"+a+"(\\x3d([^\\x26#]*)|\\x26|#|$)");return(a=a.exec(url))?a[2]?decodeURIComponent(a[2].replace(/\\+/g," ")):"":null}function h(a,b,c){var d=document.createElement("a"),e=new Image;e.src=a;e.height=26;d.appendChild(e);d.setAttribute("href",b);c.appendChild(d)}function k(a){var b=new Image;b.src=a;document.body.appendChild(b)}var l=g("videoId"),f=document.querySelector(".current-channel-header.group"),\nb=document.querySelector(".section-title");b=f||b;var c=document.createElement("div");b===f&&(c.style="float:right");c.id="client-logo";b.appendChild(c);switch(l){case "506464315":case "506855105":case "RCV00685E":h("https://www.reuters.com/media-campaign/brandfeatures/bofa/bofa_sponsored_logo.png","http://pubads.g.doubleclick.net/gampad/clk?id\\x3d4930741105\\x26iu\\x3d/4735792/video.us.reuters/business/davos",c),k("http://pubads.g.doubleclick.net/gampad/ad?iu\\x3d/4735792/custom_tracking/bofa\\x26sz\\x3d1x1\\x26t\\x3d\\x26c\\x3d"+\nMath.floor(99999999*Math.random()))}})();</script>',
                  vtp_supportDocumentWrite: true,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  vtp_usePostscribe: true,
                  tag_id: 165,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  consent: ['list'],
                  once_per_event: true,
                  vtp_html:
                    '\n<script type="text/gtmscript">var url=window.location.href,script=document.createElement("script");script.src="//get.s-onetag.com/4ed1416f-67eb-4d50-8a45-916a5921fee8/tag.min.js";script.async="true";script.defer="true";document.head.appendChild(script);</script>\n',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 166,
                },
                {
                  function: '__html',
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var a=document.querySelector("header .header-center #sponsored-txt"),b=document.querySelector("header .header-center .txt-bold");a.innerText="PAID FOR AND POSTED BY";b.innerText="THE BUSINESS DEBATE";document.querySelector("header .header-center").style.left="39%"})();</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 170,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  consent: ['list'],
                  teardown_tags: ['list', ['tag', 60, 2]],
                  once_per_event: true,
                  vtp_html:
                    '<link href="https://www.reuters.com/static-embeds/video-end-screen-b122/styles.css" rel="stylesheet">\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/video-end-screen-b122/rcom_embed_styles.js"></script>\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/video-end-screen-b122/rcom_embed.js"></script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 171,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  consent: ['list'],
                  teardown_tags: ['list', ['tag', 58, 2]],
                  once_per_event: true,
                  vtp_html:
                    '<link href="https://www.reuters.com/static-embeds/video-end-screen-b122/styles.css" rel="stylesheet">\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/video-end-screen-b122/rcom_embed_styles.js"></script>\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/video-end-screen-b122/rcom_embed.js"></script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 174,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  teardown_tags: ['list', ['tag', 56, 2]],
                  once_per_event: true,
                  vtp_html:
                    '<link href="https://www.reuters.com/static-embeds/stage-b108/styles.css" rel="stylesheet">\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed_styles.js"></script>\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed.js"></script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 176,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  teardown_tags: ['list', ['tag', 53, 2]],
                  once_per_event: true,
                  vtp_html:
                    '<link href="https://www.reuters.com/static-embeds/stage-b108/styles.css" rel="stylesheet">\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed_styles.js"></script>\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed.js"></script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 178,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var g={first_quartile:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"25",params:{category:"video quartile",label:[b,c,d,a].join("|")}}},second_quartile:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"50",params:{category:"video quartile",\nlabel:[b,c,d,a].join("|")}}},third_quartile:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"75",params:{category:"video quartile",label:[b,c,d,a].join("|")}}},fourth_quartile:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"100",params:{category:"video quartile",\nlabel:[b,c,d,a].join("|")}}},pause:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"pause",params:{category:"video",label:[b,c,d,a].join("|")}}},resume:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"resume",params:{category:"video",label:[b,c,d,\na].join("|")}}},play:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"play",params:{category:"video",label:[b,c,d,a].join("|")}}},cc_on:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"cc on",params:{category:"video",label:[b,c,d,a].join("|")}}},cc_off:function(a){var b=\na.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"cc off",params:{category:"video",label:[b,c,d,a].join("|")}}},seek:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"seek",params:{category:"video",label:[b,c,d,a].join("|")}}},skip:function(a){var b=a.original_video&&\n"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"skip",params:{category:"video",label:[b,c,d,a].join("|")}}},mute:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"mute",params:{category:"video",label:[b,c,d,a].join("|")}}},unmute:function(a){var b=a.original_video&&"original";b=(b=b||\na.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"unmute",params:{category:"video",label:[b,c,d,a].join("|")}}},fullscreen:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"fullscreen",params:{category:"video",label:[b,c,d,a].join("|")}}},click_out:function(a){var b=a.original_video&&"original";b=(b=b||\na.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"click out",params:{category:"video",label:[b,c,d,a].join("|")}}},preroll_start:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"preroll start",params:{category:"video ad",label:[b,c,d,a].join("|")}}},preroll_end:function(a){var b=a.original_video&&"original";\nb=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"preroll end",params:{category:"video ad",label:[b,c,d,a].join("|")}}},ad_skip:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"ad skip",params:{category:"video ad",label:[b,c,d,a].join("|")}}},opener_start:function(a){var b=a.original_video&&"original";\nb=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"opener start",params:{category:"video",label:[b,c,d,a].join("|")}}},opener_end:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"opener end",params:{category:"video",label:[b,c,d,a].join("|")}}},player_loaded:function(a){var b=a.original_video&&"original";\nb=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"player loaded",params:{category:"video",label:[b,c,d,a].join("|")}}},story_start:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"story start",params:{category:"video",label:[b,c,d,a].join("|")}}},story_end:function(a){var b=a.original_video&&"original";\nb=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"story end",params:{category:"video",label:[b,c,d,a].join("|")}}},collapse:function(a){var b=a.original_video&&"original";b=(b=b||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"collapse",params:{category:"video",label:[b,c,d,a].join("|")}}},dismiss:function(a){var b=a.original_video&&"original";b=(b=\nb||a.live&&"live")||a.type||"na";b.toLowerCase();b="rtv";var c=a.asset_id||0,d=a.title||"na";a=a.duration||0;return{action:"restore",params:{category:"video",label:[b,c,d,a].join("|")}}}};window.addEventListener("message",function(a){try{var b=JSON.parse(a.data);if("rtv-player"===b.role||"track"===b.type){var c=g[b.key];if(c){var d=c(b.params),f=d.action,e=d.params;console.log("Captured video event from embedded player:",f,e,b.params);window.analytics?window.analytics.track(f,e):window.ga&&window.ga("send",\n"event",e.category,f,e.label)}}}catch(h){}})})();</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 187,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<link rel="stylesheet" href="https://siteintercept.allegiancetech.com/dist/tr1si001/MCX_Thomson_Reuters_Modal_Invite.css">\n<script type="text/gtmscript">var mcxUniqueID="mcxInvitationModal";function getCookie(c){c+="\\x3d";var b=decodeURIComponent(document.cookie);b=b.split(";");for(var d=0;d<b.length;d++){for(var a=b[d];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(c))return a.substring(c.length,a.length)}return""}\nvar segmentId=getCookie("ajs_anonymous_id"),anonId=getCookie("ajs_anonymous_id"),sessionId=getCookie("sessionId"),groupId=getCookie("groupId"),mcxCurrentURL=sessionStorage.getItem("mcx.surveyURLParams"),mcxURLObject=JSON.parse(mcxCurrentURL),mcxLastVisitedURL=mcxURLObject?mcxURLObject[0].lastVisitedURL:"",mcxCurrentPageURL=window.location.href,platform="RCOM";</script>\n\n<script type="text/gtmscript" id="">window.addEventListener("message",function(a){var b=a.message?"message":"data";a=a[b];console.log(a);"CloseModal"===a&&McxSiteInterceptOnExit.closeSurveyModal()},!1);</script>\n\n    <script data-gtmsrc="https://siteintercept.allegiancetech.com/dist/tr1si001/MCX_Thomson_Reuters_Modal_Invite.js" type="text/gtmscript"></script>\n    <script data-gtmsrc="https://siteintercept.allegiancetech.com/InterceptScripts/mcxSiteIntercept-1.9.1.js" type="text/gtmscript"></script>\n\n<script type="text/gtmscript">var triggers=mcxSiteInterceptParameters.delay/1E3+" seconds, "+mcxSiteInterceptParameters.pageVisit+" page visits, "+mcxSiteInterceptParameters.probability+"% probabilty",MCXPassThroughParameters={CustomerID:anonId,SessionID:sessionId,SegmentID:segmentId,InvitedURL:mcxLastVisitedURL,CurrentURL:mcxCurrentPageURL,GroupId:groupId,Trigger_Type:triggers,TR_platform:platform};</script>\n\n    <div id="mcxInvitationModal">\n        <div id="mcxFloating">\n            <div id="mcxInfo2">\n                <div id="mcxNoButton">\n                    <button id="mcxNo" onclick="McxSiteInterceptOnExit.declineSurvey()">X</button>\n                </div>\n                <div id="mcxLogos">\n                    <img src="https://siteintercept.allegiancetech.com/dist/tr1si001/images/reuters_logo.png">\n                </div>\n                <div class="clearfix">\n                    <div id="mcxHeading">We value your feedback!</div>\n                    <div id="mcxText1">Please answer this short 2 question survey to help Reuters improve our experience.</div>\n                    <div id="mcxYesButton" class="clearfix">\n                        <button id="mcxYes" onclick="McxSiteInterceptOnExit.acceptSurvey();">TAKE THE SURVEY</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 730,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  teardown_tags: ['list', ['tag', 55, 2]],
                  once_per_event: true,
                  vtp_html:
                    '<link href="https://www.reuters.com/static-embeds/stage-b108/styles.css" rel="stylesheet">\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed_styles.js"></script>\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed.js"></script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 738,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  teardown_tags: ['list', ['tag', 54, 2]],
                  once_per_event: true,
                  vtp_html:
                    '<link href="https://www.reuters.com/static-embeds/stage-b108/styles.css" rel="stylesheet">\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed_styles.js"></script>\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed.js"></script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 741,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(a){a.require_ccpa_consent||document.body.classList.add("non-ca")})});</script>\n\n<style>\n  body.non-ca a[href*="evidon.notice.showOptions"] {\n    display: none;\n  }\n</style>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 743,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(a){a.require_ccpa_consent||document.body.classList.add("non-ca")})});</script>\n\n<style>\n  body.non-ca a[href*="evidon.notice.showOptions"] {\n    display: none;\n  }\n</style>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 745,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  teardown_tags: ['list', ['tag', 59, 2]],
                  once_per_event: true,
                  vtp_html:
                    '<link href="https://www.reuters.com/static-embeds/stage-b108/styles.css" rel="stylesheet">\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed_styles.js"></script>\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed.js"></script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 750,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  teardown_tags: ['list', ['tag', 61, 2]],
                  once_per_event: true,
                  vtp_html:
                    '<link href="https://www.reuters.com/static-embeds/stage-b108/styles.css" rel="stylesheet">\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed_styles.js"></script>\n<script type="text/gtmscript" data-gtmsrc="https://www.reuters.com/static-embeds/stage-b108/rcom_embed.js"></script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 751,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  consent: ['list'],
                  once_per_event: true,
                  vtp_html:
                    '<style>\n  .tier3-shutdown-banner {\n    max-width: 1280px;\n    margin: 0 auto 10px;\n    color: white;\n    text-align: center;\n    background: #009297;\n    padding: 10px;\n  }\n\n  .tier3-shutdown-banner p,\n  .tier3-shutdown-banner a {\n    font-family: knowledge-medium, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    position: relative;\n    font-size: 15px;\n  }\n  .tier3-shutdown-banner a {\n    color: white;\n    font-weight: bold;\n    text-decoration: underline;\n  }\n</style>\n<script type="text/gtmscript">var captureOutboundLink=function(a){analytics.track("ui.interaction",{ui_element:"[banner title]",category:"Landing Page",label:"[_ui_element]",ui_element_click_url:a,nonInteraction:0,uiInteraction:1},{},function(){document.location=a})},banner_container=document.createElement("div");banner_container.className="tier3-shutdown-banner";\nvar edition_metatag=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\'),edition_metatag_content=edition_metatag&&edition_metatag.content&&edition_metatag.content.toUpperCase().replace("U.S.","US").replace("U.K.","UK"),article_edition=window.article_edition&&window.article_edition.replace("U.S.","US").replace("U.K.","UK"),edition=article_edition||document.querySelector("html").dataset.edition||edition_metatag_content,is_article=-1!==window.location.href.indexOf("/article/");\nswitch(edition){case "AF":banner_container.innerHTML=\'\\x3cp\\x3eThank you for visiting Reuters. In order to provide the best possible user experience, we will be transitioning some of our regional editions to our main website. As of September 17, you will be redirected to Reuters.com. \\x3c/p\\x3e\\x3cp\\x3eLearn more about these changes \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience/"\\x3ehere.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "AR":banner_container.innerHTML=\'\\x3cp\\x3eGracias por visitar Reuters. Con la intenci\\u00f3n de ofrecerle la mejor experiencia de usuario posible, estaremos integrando algunas de nuestras ediciones regionales en nuestro sitio principal. A partir del 17 de septiembre, ser\\u00e1 redireccionado a Reuters.com. \\x3c/p\\x3e\\x3cp\\x3eConozca m\\u00e1s sobre estos cambios \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/es/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/es/coverage/changes-to-your-reuters-regional-experience/"\\x3eaqu\\u00ed.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "ARA":banner_container.style="direction: rtl; text-align: right;";banner_container.innerHTML=\'\\x3cp\\x3e\\u0634\\u0643\\u0631\\u0627 \\u0639\\u0644\\u0649 \\u0632\\u064a\\u0627\\u0631\\u0629 \\u0645\\u0648\\u0642\\u0639 \\u0631\\u0648\\u064a\\u062a\\u0631\\u0632. \\u0645\\u0646 \\u0623\\u062c\\u0644 \\u062a\\u0642\\u062f\\u064a\\u0645 \\u0623\\u0641\\u0636\\u0644 \\u062a\\u062c\\u0631\\u0628\\u0629 \\u0645\\u0645\\u0643\\u0646\\u0629 \\u0644\\u0644\\u0645\\u0633\\u062a\\u062e\\u062f\\u0645\\u060c \\u0633\\u0646\\u0646\\u0642\\u0644 \\u0628\\u0639\\u0636 \\u0627\\u0644\\u0646\\u0633\\u062e \\u0627\\u0644\\u0625\\u0642\\u0644\\u064a\\u0645\\u064a\\u0629 \\u0625\\u0644\\u0649 \\u0645\\u0648\\u0642\\u0639\\u0646\\u0627 \\u0627\\u0644\\u0631\\u0626\\u064a\\u0633\\u064a. \\u0627\\u0639\\u062a\\u0628\\u0627\\u0631\\u064b\\u0627 \\u0645\\u0646 17 \\u0633\\u0628\\u062a\\u0645\\u0628\\u0631\\u060c \\u0633\\u062a\\u062a\\u0645 \\u0625\\u0639\\u0627\\u062f\\u0629 \\u062a\\u0648\\u062c\\u064a\\u0647\\u0643 \\u0625\\u0644\\u0649 Reuters.com. \\x3c/p\\x3e\\x3cp\\x3e\\u062a\\u0639\\u0631\\u0641 \\u0639\\u0644\\u0649 \\u0627\\u0644\\u0645\\u0632\\u064a\\u062f \\u062d\\u0648\\u0644 \\u0647\\u0630\\u0647 \\u0627\\u0644\\u062a\\u063a\\u064a\\u064a\\u0631\\u0627\\u062a\\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/ar/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/ar/coverage/changes-to-your-reuters-regional-experience/"\\x3e \\u0647\\u0646\\u0627\\x3c/a\\x3e.\\x3c/p\\x3e\';\nbreak;case "IT":banner_container.innerHTML=\'\\x3cp\\x3eGrazie per aver visitato Reuters. Per fornire ai nostri utenti la migliore esperienza possibile, ci apprestiamo a trasferire alcune edizioni regionali sul nostro sito principale. A partire dal 17 settembre, sarai reindirizzato su Reuters.com. \\x3c/p\\x3e\\x3cp\\x3ePer ulteriori informazioni cliccare \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/it/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/it/coverage/changes-to-your-reuters-regional-experience/"\\x3equi.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "RU":banner_container.innerHTML=\'\\x3cp\\x3e\\u0421\\u043f\\u0430\\u0441\\u0438\\u0431\\u043e, \\u0447\\u0442\\u043e \\u0412\\u044b \\u043f\\u043e\\u0441\\u0435\\u0442\\u0438\\u043b\\u0438 \\u0441\\u0430\\u0439\\u0442 \\u0420\\u0435\\u0439\\u0442\\u0435\\u0440. \\u0427\\u0442\\u043e\\u0431\\u044b \\u0438 \\u0434\\u0430\\u043b\\u044c\\u0448\\u0435 \\u043e\\u0431\\u0435\\u0441\\u043f\\u0435\\u0447\\u0438\\u0432\\u0430\\u0442\\u044c \\u0432\\u044b\\u0441\\u043e\\u0447\\u0430\\u0439\\u0448\\u0435\\u0435 \\u043a\\u0430\\u0447\\u0435\\u0441\\u0442\\u0432\\u043e \\u043e\\u0444\\u043e\\u0440\\u043c\\u043b\\u0435\\u043d\\u0438\\u044f \\u043d\\u0430\\u0448\\u0438\\u0445 \\u043d\\u043e\\u0432\\u043e\\u0441\\u0442\\u0435\\u0439 \\u0438 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445, \\u043c\\u044b \\u043f\\u0435\\u0440\\u0435\\u0432\\u043e\\u0434\\u0438\\u043c \\u0447\\u0430\\u0441\\u0442\\u044c \\u0440\\u0435\\u0433\\u0438\\u043e\\u043d\\u0430\\u043b\\u044c\\u043d\\u044b\\u0445 \\u0438\\u0437\\u0434\\u0430\\u043d\\u0438\\u0439 \\u043d\\u0430 \\u0433\\u043b\\u0430\\u0432\\u043d\\u0443\\u044e \\u0432\\u0435\\u0431-\\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0443 \\u0420\\u0435\\u0439\\u0442\\u0435\\u0440. \\u041d\\u0430\\u0447\\u0438\\u043d\\u0430\\u044f \\u0441 17 \\u0441\\u0435\\u043d\\u0442\\u044f\\u0431\\u0440\\u044f \\u0412\\u044b \\u0431\\u0443\\u0434\\u0435\\u0442\\u0435 \\u043f\\u0435\\u0440\\u0435\\u043d\\u0430\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u044b \\u043d\\u0430 \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0443 Reuters.com. \\x3c/p\\x3e\\x3cp\\x3e\\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/ru/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/ru/coverage/changes-to-your-reuters-regional-experience/"\\x3e\\u0417\\u0434\\u0435\\u0441\\u044c \\x3c/a\\x3e\\u0412\\u044b \\u0441\\u043c\\u043e\\u0436\\u0435\\u0442\\u0435 \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u0443\\u0437\\u043d\\u0430\\u0442\\u044c \\u043e\\u0431 \\u044d\\u0442\\u0438\\u0445 \\u0438\\u0437\\u043c\\u0435\\u043d\\u0435\\u043d\\u0438\\u044f\\u0445.\\x3c/p\\x3e\';\nbreak;case "CA":banner_container.innerHTML=\'\\x3cp\\x3eThank you for visiting Reuters. In order to provide the best possible user experience, we will be transitioning some of our regional editions to our main website. As of December 10, you will be redirected to Reuters.com. Learn more about these changes \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience-canada/\\\')" href\\x3d"https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience-canada/"\\x3ehere.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "UK":case "IN":banner_container.innerHTML=\'\\x3cp\\x3eThank you for visiting Reuters. In order to provide the best possible user experience, we will be transitioning some of our regional editions to our main website. As of January 7, 2021, you will be redirected to Reuters.com. Learn more about these changes \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience/"\\x3ehere.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "ES":case "LTA":banner_container.innerHTML=\'\\x3cp\\x3eGracias por visitar Reuters. Para brindar la mejor experiencia de usuario posible, realizaremos la transici\\u00f3n de algunas de nuestras ediciones regionales a nuestro sitio web principal. A partir del 7 de enero de 2021 ser\\u00e1 redirigido a Reuters.com. Obtenga m\\u00e1s informaci\\u00f3n sobre estos cambios \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/es/coverage/changes-to-your-reuters-regional-experience-latam/\\\')" href\\x3d"https://www.reutersagency.com/es/coverage/changes-to-your-reuters-regional-experience-latam/"\\x3eaqu\\u00ed.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "DE":banner_container.innerHTML=\'\\x3cp\\x3eVielen Dank, dass Sie Reuters besuchen. Um Ihnen auch weiterhin die beste Nutzerfreundlichkeit bieten zu k\\u00f6nnen, werden einige unserer regionalen Internetauftritte in die neue weltweite Hauptinternetseite \\u00fcbergehen. Ab dme 7. Januar 2021 werden Sie an dieser Stelle auf Reuters.com  weitergeleitet. Erfahren Sie mehr \\u00fcber diese \\u00c4nderrungen \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/de/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/de/coverage/changes-to-your-reuters-regional-experience/"\\x3ehier.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "BR":banner_container.innerHTML=\'\\x3cp\\x3eObrigado por visitar Reuters. Com o objetivo de fornecer a melhor experi\\u00eancia poss\\u00edvel ao usu\\u00e1rio, vamos transferir algumas das nossas edi\\u00e7\\u00f5es locais para o nosso site principal. Em 7 de janeiro de 2021, voc\\u00ea ser\\u00e1 redirecionado para Reuters.com. Saiba mais sobre as mudan\\u00e7as \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/pt-br/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/pt-br/coverage/changes-to-your-reuters-regional-experience/"\\x3eaqui.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "FR":banner_container.innerHTML=\'\\x3cp\\x3eMerci de votre visite sur Reuters. Afin d\\\'offrir la meilleure exp\\u00e9rience possible \\u00e0 nos utilisateurs, nous allons transf\\u00e9rer certaines de nos \\u00e9ditions r\\u00e9gionales vers notre site Internet principal. \\u00c0 partir du 7 janvier 2021, vous serez redirig\\u00e9 vers Reuters.com. Pour en savoir plus sur ces changements, cliquez \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/fr/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/fr/coverage/changes-to-your-reuters-regional-experience/"\\x3eici.\\x3c/a\\x3e\\x3c/p\\x3e\'}\nswitch(edition){case "AF":case "AR":case "ARA":case "BR":case "CA":case "DE":case "ES":case "FR":case "IN":case "IT":case "LTA":case "RU":case "UK":console.log("### Render Shutdown Banner ###"),document.body.insertBefore(banner_container,document.body.firstChild),is_article&&setTimeout(function(){console.log("### Shutdown Banner Timeout at 10s ###");banner_container.parentNode.removeChild(banner_container)},1E4)};</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 752,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">var markit_script=document.createElement("script");markit_script.setAttribute("async","async");markit_script.type="text/javascript";markit_script.src="https://ad.wsod.com/site/dc54d4678e62010da03e468039cfe826/0.0.async/";document.head.appendChild(markit_script);</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 754,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    'Snippet below:\n\n<script type="text/gtmscript">(function(){try{var q={a:{}};q.a.f={t:(new Date).getTime(),de:Math.floor(Math.random()*Math.pow(10,12)),zMoatAB_SNPT:"true"};q.a.client="BMS_HEADER1";q.a.b="bmsheader368942753932";q.a.g="px.moatads.com";window["__MHS_P__"+q.a.b]=q.a.f;window["__MHS_E__"+q.a.b]=function(){};(function(l){function m(a){var c=a=a.replace(":","");try{for(var d=0;10>d&&(a=decodeURIComponent(a),c!=a)&&!a.match(/^http(s)?:/);d++)c=a}catch(k){}return a.replace(/(^\\s+|\\s+$)/g,"")}function r(a,c,d,k){return a[c]===k&&0===d||\na[d]===k&&0===c}var f=l.a.f;if(!location||!location.hostname||!location.pathname)return!1;var n=document.location.hostname.replace(/^www\\./,""),u=function(){for(var a,c=document.getElementsByTagName("meta"),d,k=0,w=c.length;k<w;k++)if(d=c[k],"og:title"===d.getAttribute("property")){a=d.getAttribute("content");break}a||(a=document.title||"Untitled");return a}();(function(a,c,d){a.l1=c;a.l2=d;a.l3="__page__";a.l4="-"})(f,n,u);var x=(new Date).getTime().toString(35);n=l.a.client;u=[m(f.l1),m(f.l2),m(f.l3),\nm(f.l4)].join(":");var v="",p=/zct[a-z0-9]+/i;for(h in f)f.hasOwnProperty(h)&&h.match(p)&&(v+="\\x26"+h+"\\x3d"+f[h]);var h=(h=document.referrer.match(/^([^:]{2,}:\\/\\/[^\\/]*)/))?h[1]:document.referrer;var t=["e\\x3d17","d\\x3d"+encodeURIComponent(u),"de\\x3d"+f.de,"t\\x3d"+f.t,"i\\x3d"+n,"cm\\x3d1","gu\\x3d"+document.location.href,String("j\\x3d"+encodeURIComponent(h)+v),"mp\\x3d1","ac\\x3d1","pl\\x3d1","bq\\x3d10","vc\\x3d2"],b="https://ug38pwbohic2-a.akamaihd.net/"+x+".gif?",e=function(a){for(var c="",d=0;d<a.length;d++)c+=\n(0===d?"":"\\x26")+a[d];return c}(function(a){for(var c=0;c<a.length;c++){var d=Math.floor(Math.random()*(a.length-c)+c),k=a[c],w=r(a,c,d,t[1]);r(a,c,d,t[0])||w?c--:(a[c]=a[d],a[d]=k)}return a}(t));x=l.a.g;p=f.de;f=f.t;b=b+e+"\\x26cs\\x3d0";e="https://"+x+"/pixel.gif?e\\x3d17\\x26d\\x3d"+encodeURIComponent(u)+"\\x26de\\x3d"+p+"\\x26t\\x3d"+f+"\\x26i\\x3d"+n+"\\x26cm\\x3d1\\x26j\\x3d"+encodeURIComponent(h)+v+"\\x26mp\\x3d0\\x26ac\\x3d1\\x26pl\\x3d1\\x26bq\\x3d10\\x26ad_type\\x3dimg\\x26vc\\x3d2\\x26cs\\x3d0";var g="https://"+x+\n"/pixel.gif?e\\x3d17\\x26d\\x3d"+encodeURIComponent(u)+"\\x26de\\x3d"+p+"\\x26t\\x3d"+f+"\\x26i\\x3d"+n+"\\x26cm\\x3d1\\x26j\\x3d"+encodeURIComponent(h)+v+"\\x26ku\\x3d1\\x26ac\\x3d1\\x26pl\\x3d1\\x26bq\\x3d10\\x26ad_type\\x3dimg\\x26vc\\x3d2\\x26cs\\x3d0";(new Image).src=b;(new Image).src=e;window["__MHS_E__"+l.a.b]=function(){(new Image).src=g}})(q);(function(){function l(b){p&&console.log("\\x3e\\x3e\\x3eMOAT /"+b)}function m(){try{var b=window.googletag;return b.apiReady?b.pubads():!1}catch(e){return l("init:"+e),!1}}function r(b){var e=\nm(),g=f(b);e?g(e,window.googletag):(window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){var a=m();a&&g(a,window.googletag)}))}function f(b){return function(){try{return b&&b.apply?b.apply(null,arguments):b()}catch(a){try{var e=document.referrer}catch(c){e=""}try{var g="//px.moatads.com/pixel.gif?e\\x3d24\\x26d\\x3ddata%3Adata%3Adata%3Adata\\x26i\\x3dMOATHEADERSNIPPET1\\x26vc\\x3d2\\x26ac\\x3d1\\x26k\\x3d"+encodeURIComponent(void 0)+"\\x26j\\x3d"+\nencodeURIComponent(e)+"\\x26cs\\x3d"+(new Date).getTime();(new Image).src=g}catch(c){}throw a;}}}function n(b){r(function(e){var g={};b.c?(e={}.toString.call(b.c),e=!e||"[object Array]"!==e&&"[object Array Iterator]"!==e?[b.c]:b.c):e=e.getSlots();g.slots=e;g.slots&&window&&window.setTimeout?(e=b.timeout,"number"===typeof e&&!isNaN(e)||(b.timeout=1E3),g.fired=!1,g.callback="function"===typeof b.callback?b.callback:void 0,g.disableAdCall="boolean"===typeof b.disableAdCall?b.disableAdCall:!1,g.timeoutId=\nwindow.setTimeout(u(g),b.timeout),v.push(g)):l("init: No valid slots found or provided, exiting.")})}function u(b){return function(){if(h)return h(b);x(b)}}function x(b){r(function(e,g){b.fired=!0;if(b.disableAdCall)l("init: Ad call disabled, not making ad call.");else{l("init: Making ad Call.");for(var a=0;a<b.slots.length;a++){var c=g,d=e,k=b.slots[a],w=c.pubadsReady&&!d.enableSingleRequest();w&&c.display(k);(!w||"function"===typeof d.isInitialLoadDisabled&&d.isInitialLoadDisabled())&&d.refresh([k])}}"function"===\ntypeof b.callback&&(a=f(b.callback),l("init: Firing callback."),a(!1))})}var v=[],p=!1,h;if(!window.moatPrebidApi||"object"!==typeof window.moatPrebidApi){window.moatPrebidApi={};var t=window.moatPrebidApi;t.init=function(b){n(b||{})};t.enableLogging=function(){return p=!0};t.disableLogging=function(){p=!1;return!0};t.__onScriptLoad=function(){return{entries:v,enableLogging:p,setTimeoutFn:function(b){h||"function"!==typeof b||(h=b)}}}}})()}catch(l){(function(m){try{var r=document.referrer}catch(n){r=\n""}try{var f="//px.moatads.com/pixel.gif?e\\x3d24\\x26d\\x3ddata%3Adata%3Adata%3Adata\\x26i\\x3dMOATHEADERSNIPPET1\\x26vc\\x3d2\\x26ac\\x3d1\\x26k\\x3d"+encodeURIComponent(m)+"\\x26j\\x3d"+encodeURIComponent(r)+"\\x26cs\\x3d"+(new Date).getTime();(new Image).src=f}catch(n){}})()}})();</script>\n<script type="text/gtmscript" data-gtmsrc="https://z.moatads.com/bmsheader368942753932/moatheader.js#zMoatAB_SNPT=true" onerror="window[&#39;__MHS_E__bmsheader368942753932&#39;]()"></script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 757,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  consent: ['list'],
                  once_per_event: true,
                  vtp_html:
                    '<style>\n  .tier3-shutdown-banner {\n    max-width: 100%;\n    margin: 0 auto;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #009297;\n    padding: 40px 10px;\n  }\n\n  .tier3-shutdown-banner p {\n    max-width: 900px;\n    text-align: center;\n  }\n\n  .tier3-shutdown-banner p,\n  .tier3-shutdown-banner a {\n    font-family: knowledge-medium, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    position: relative;\n    font-size: 15px;\n  }\n  .tier3-shutdown-banner a {\n    color: white;\n    font-weight: bold;\n    text-decoration: underline;\n  }\n</style>\n<script type="text/gtmscript">var captureOutboundLink=function(a){analytics.track("ui.interaction",{ui_element:"[banner title]",category:"Landing Page",label:"[_ui_element]",ui_element_click_url:a,nonInteraction:0,uiInteraction:1},{},function(){document.location=a})},banner_container=document.createElement("div");banner_container.className="tier3-shutdown-banner";var edition=window.location.search.split("edition-redirect\\x3d")[1]&&window.location.search.split("edition-redirect\\x3d")[1].split("\\x26")[0];\nswitch(edition){case "af":banner_container.innerHTML=\'\\x3cp\\x3eYou have been redirected to our main site, Reuters.com. In order to provide the best possible user experience, we have transitioned some of our regional editions to our main website. To learn more about these changes, click \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience/"\\x3ehere.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "ar":banner_container.innerHTML=\'\\x3cp\\x3eUsted ha sido redireccionado a nuestro sitio principal, Reuters.com. Con la intenci\\u00f3n de ofrecerle la mejor experiencia de usuario posible, hemos integrado algunas de nuestras ediciones regionales en nuestro sitio principal. Para saber m\\u00e1s sobre estos cambios, haga click \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/es/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/es/coverage/changes-to-your-reuters-regional-experience/"\\x3eaqu\\u00ed.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "ara":banner_container.style="direction: rtl; text-align: right;";banner_container.innerHTML=\'\\x3cp\\x3e\\u0644\\u0642\\u062f \\u062a\\u0645 \\u0625\\u0639\\u0627\\u062f\\u0629 \\u062a\\u0648\\u062c\\u064a\\u0647\\u0643 \\u0625\\u0644\\u0649 \\u0645\\u0648\\u0642\\u0639\\u0646\\u0627 \\u0627\\u0644\\u0631\\u0626\\u064a\\u0633\\u064a Reuters.com.  \\u0645\\u0646 \\u0623\\u062c\\u0644 \\u062a\\u0648\\u0641\\u064a\\u0631 \\u0623\\u0641\\u0636\\u0644 \\u062a\\u062c\\u0631\\u0628\\u0629 \\u0645\\u0645\\u0643\\u0646\\u0629 \\u0644\\u0644\\u0645\\u0633\\u062a\\u062e\\u062f\\u0645\\u060c \\u0642\\u0645\\u0646\\u0627 \\u0628\\u0646\\u0642\\u0644 \\u0628\\u0639\\u0636 \\u0645\\u0648\\u0627\\u0642\\u0639\\u0646\\u0627 \\u0627\\u0644\\u0625\\u0642\\u0644\\u064a\\u0645\\u064a\\u0629 \\u0625\\u0644\\u0649 \\u0645\\u0648\\u0642\\u0639\\u0646\\u0627 \\u0627\\u0644\\u0631\\u0626\\u064a\\u0633\\u064a. \\u062a\\u0639\\u0631\\u0641 \\u0639\\u0644\\u0649 \\u0627\\u0644\\u0645\\u0632\\u064a\\u062f   \\u062d\\u0648\\u0644 \\u0647\\u0630\\u0647 \\u0627\\u0644\\u062a\\u063a\\u064a\\u064a\\u0631\\u0627\\u062a \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/ar/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/ar/coverage/changes-to-your-reuters-regional-experience/"\\x3e\\u0647\\u0646\\u0627.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "it":banner_container.innerHTML=\'\\x3cp\\x3e Caro utente, sei stato reindirizzato al nostro sito principale, Reuters.com. Per fornirti la migliore esperienza possibile , abbiamo trasferito alcune edizioni regionali sul nostro website principale. Ulteriori informazioni sono disponibili \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/it/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/it/coverage/changes-to-your-reuters-regional-experience/"\\x3equi.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "ru":banner_container.innerHTML=\'\\x3cp\\x3e\\u0412\\u044b \\u0431\\u044b\\u043b\\u0438 \\u043f\\u0435\\u0440\\u0435\\u043d\\u0430\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u044b \\u043d\\u0430 \\u043d\\u0430\\u0448 \\u0433\\u043b\\u0430\\u0432\\u043d\\u044b\\u0439 \\u0441\\u0430\\u0439\\u0442, Reuters.com. \\u0427\\u0442\\u043e\\u0431\\u044b \\u0438 \\u0434\\u0430\\u043b\\u044c\\u0448\\u0435 \\u043e\\u0431\\u0435\\u0441\\u043f\\u0435\\u0447\\u0438\\u0432\\u0430\\u0442\\u044c \\u0432\\u044b\\u0441\\u043e\\u0447\\u0430\\u0439\\u0448\\u0435\\u0435 \\u043a\\u0430\\u0447\\u0435\\u0441\\u0442\\u0432\\u043e \\u043e\\u0444\\u043e\\u0440\\u043c\\u043b\\u0435\\u043d\\u0438\\u044f \\u043d\\u0430\\u0448\\u0438\\u0445 \\u043d\\u043e\\u0432\\u043e\\u0441\\u0442\\u0435\\u0439 \\u0438 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445, \\u043c\\u044b \\u043f\\u0435\\u0440\\u0435\\u0432\\u0435\\u043b\\u0438 \\u0447\\u0430\\u0441\\u0442\\u044c \\u0440\\u0435\\u0433\\u0438\\u043e\\u043d\\u0430\\u043b\\u044c\\u043d\\u044b\\u0445 \\u0438\\u0437\\u0434\\u0430\\u043d\\u0438\\u0439 \\u043d\\u0430 \\u0433\\u043b\\u0430\\u0432\\u043d\\u0443\\u044e \\u0432\\u0435\\u0431-\\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u0443 \\u0420\\u0435\\u0439\\u0442\\u0435\\u0440. \\u0427\\u0442\\u043e\\u0431\\u044b \\u0443\\u0437\\u043d\\u0430\\u0442\\u044c \\u0431\\u043e\\u043b\\u044c\\u0448\\u0435 \\u043e\\u0431 \\u044d\\u0442\\u0438\\u0445 \\u0438\\u0437\\u043c\\u0435\\u043d\\u0435\\u043d\\u0438\\u044f\\u0445, \\u043d\\u0430\\u0436\\u043c\\u0438\\u0442\\u0435 \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/ru/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/ru/coverage/changes-to-your-reuters-regional-experience/"\\x3e\\u0437\\u0434\\u0435\\u0441\\u044c.\\x3c/a\\x3e\\x3c/p\\x3e\';\nbreak;case "ca":banner_container.innerHTML=\'\\x3cp\\x3eYou have been redirected to our main site, Reuters.com. In order to provide the best possible user experience, we have transitioned some of our regional editions to our main website. To learn more about these changes, click \\x3ca onClick\\x3d"captureOutboundLink(\\\'https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience/\\\')" href\\x3d"https://www.reutersagency.com/en/coverage/changes-to-your-reuters-regional-experience/"\\x3ehere.\\x3c/a\\x3e\\x3c/p\\x3e\'}\nswitch(edition){case "af":case "ar":case "ara":case "it":case "ru":case "ca":console.log("### Render Shutdown Banner ###");var url=window.location.href;if(-1!==url.indexOf("mobile.reuters")){var ticker_tape=document.querySelector(".modules-markets-thin");ticker_tape&&document.body.insertBefore(banner_container,ticker_tape)}else document.body.insertBefore(banner_container,document.body.firstChild)};</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 758,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  consent: ['list'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">var vanity_path=window.location.pathname.split("/article/sponsored/")[1];if(-1!==vanity_path.indexOf("ibm-mayflower-de")){var tracking_img=document.createElement("img");tracking_img.src="https://tps.doubleverify.com/visit.jpg?ctx\\x3d1681949\\x26cmp\\x3d24785172\\x26sid\\x3d5395330\\x26plc\\x3d284751752\\x26adsrv\\x3d1\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26tagtype\\x3d\\x26dvtagver\\x3d6.1.img\\x26";tracking_img.width="0";tracking_img.height="0";document.head.appendChild(tracking_img)}\n-1!==vanity_path.indexOf("ibm-mayflower-uk")&&(tracking_img=document.createElement("img"),tracking_img.src="https://tps.doubleverify.com/visit.jpg?ctx\\x3d1681949\\x26cmp\\x3d24785172\\x26sid\\x3d5395330\\x26plc\\x3d284753627\\x26adsrv\\x3d1\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26tagtype\\x3d\\x26dvtagver\\x3d6.1.img\\x26",tracking_img.width="0",tracking_img.height="0",document.head.appendChild(tracking_img));\n-1!==vanity_path.indexOf("ibm-think-digital-de")&&(tracking_img=document.createElement("img"),tracking_img.src="https://tps.doubleverify.com/visit.jpg?ctx\\x3d1681949\\x26cmp\\x3d24785172\\x26sid\\x3d5395330\\x26plc\\x3d284748092\\x26adsrv\\x3d1\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26tagtype\\x3d\\x26dvtagver\\x3d6.1.img\\x26",tracking_img.width="0",tracking_img.height="0",document.head.appendChild(tracking_img));\n-1!==vanity_path.indexOf("ibm-mayflower-fr")&&(tracking_img=document.createElement("img"),tracking_img.src="https://tps.doubleverify.com/visit.jpg?ctx\\x3d1681949\\x26cmp\\x3d24785172\\x26sid\\x3d5395330\\x26plc\\x3d284753636\\x26adsrv\\x3d1\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26tagtype\\x3d\\x26dvtagver\\x3d6.1.img\\x26",tracking_img.width="0",tracking_img.height="0",document.head.appendChild(tracking_img));\n-1!==vanity_path.indexOf("ibm-think-digital-uk")&&(tracking_img=document.createElement("img"),tracking_img.src="https://tps.doubleverify.com/visit.jpg?ctx\\x3d1681949\\x26cmp\\x3d24785172\\x26sid\\x3d5395330\\x26plc\\x3d284752751\\x26adsrv\\x3d1\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26tagtype\\x3d\\x26dvtagver\\x3d6.1.img\\x26",tracking_img.width="0",tracking_img.height="0",document.head.appendChild(tracking_img));\n-1!==vanity_path.indexOf("ibm-think-digital-france")&&(tracking_img=document.createElement("img"),tracking_img.src="https://tps.doubleverify.com/visit.jpg?ctx\\x3d1681949\\x26cmp\\x3d24785172\\x26sid\\x3d5395330\\x26plc\\x3d284753894\\x26adsrv\\x3d1\\x26btreg\\x3d\\x26btadsrv\\x3d\\x26crt\\x3d\\x26tagtype\\x3d\\x26dvtagver\\x3d6.1.img\\x26",tracking_img.width="0",tracking_img.height="0",document.head.appendChild(tracking_img));</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 761,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var c=window.location.search.split("adstest\\x3d")[1];c=c?c.split("\\x26")[0]:null;document.querySelector(\'meta[name\\x3d"DCSext.DartZone"]\')&&document.querySelector(\'meta[name\\x3d"DCSext.DartZone"]\');var b=document.querySelector("#hpvideomodule");if(b){var l=function(a){var d=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\').content,e=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\')&&\ndocument.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\').content,f=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\').content,g=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\').content,h=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\').content,\nk=document.querySelector(\'link[rel\\x3d"canonical"]\')&&document.querySelector(\'link[rel\\x3d"canonical"]\').href;"undefined"!==typeof a&&(a.topic_channel=d,a.topic_sub_channel=e,a.content_type=f,a.content_channel=g,a.content_type_channel=d,a.edition=h,a.canonical_url=k,a.ad_blocked="0","undefinded"!==typeof window.analytics&&window.analytics.track(a.action,a))};window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(a){var d=\na.require_consent?a.consent?"0":"1":"0";a=a.require_ccpa_consent&&!a.consent?"1":"0";var e=b.getAttribute("data-guid"),f=b.getAttribute("data-edition"),g=b.getAttribute("data-dartzone");RCOMEmbed.init.hpvideomodule({channel_id:e,edition:f,dart_zone:g,adstest:c,npa:d,rdp:a,autoplay:!1,platform:"Mobile",context:"VOD",location:"homepage",onAnalyticsEvent:l},b)})})}})();</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 179,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var c=window.location.search.split("adstest\\x3d")[1];c=c?c.split("\\x26")[0]:null;var b=document.querySelector("#landing-video-container");if(b){var l=function(a){var d=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\').content,e=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\').content,\nf=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\').content,g=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\').content,h=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\').content,k=document.querySelector(\'link[rel\\x3d"canonical"]\')&&\ndocument.querySelector(\'link[rel\\x3d"canonical"]\').href;"undefined"!==typeof a&&(a.topic_channel=d,a.topic_sub_channel=e,a.content_type=f,a.content_channel=g,a.edition=h,a.canonical=k,a.ad_blocked="0","undefinded"!==typeof window.analytics&&window.analytics.track(a.action,a))};window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(a){var d=a.require_consent?a.consent?"0":"1":"0";a=a.require_ccpa_consent&&\n!a.consent?"1":"0";var e=b.getAttribute("data-guid"),f=b.getAttribute("data-edition"),g=b.getAttribute("data-dartzone");RCOMEmbed.init.videomodule({channel_id:e,edition:f,dart_zone:g,adstest:c,npa:d,rdp:a,platform:"Mobile",context:"VOD",location:"Legal",translations:{reuters:"Legal",tv:"Video"},onAnalyticsEvent:l},b)})})}})();</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 740,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var d=window.location.search.split("adstest\\x3d")[1];d=d?d.split("\\x26")[0]:null;window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(b){var e=b.require_consent?b.consent?"0":"1":"0";b=b.require_ccpa_consent&&!b.consent?"1":"0";var c=document.querySelector("#landing-video-container");if(c){var n=function(a){var f=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\')&&\ndocument.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\').content,g=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\').content,h=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\').content,k=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\').content,\nl=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\').content,m=document.querySelector(\'link[rel\\x3d"canonical"]\')&&document.querySelector(\'link[rel\\x3d"canonical"]\').href;"undefined"!==typeof a&&(a.topic_channel=f,a.topic_sub_channel=g,a.content_type=h,a.content_channel=k,a.edition=l,a.canonical=m,a.ad_blocked="0","undefinded"!==typeof window.analytics&&window.analytics.track(a.action,a))},p=c.getAttribute("data-guid"),\nq=c.getAttribute("data-edition"),r=c.getAttribute("data-dartzone");RCOMEmbed.init.videomodule({channel_id:p,edition:q,dart_zone:r,adstest:d,npa:e,rdp:b,platform:"Desktop",context:"VOD",location:"Legal",translations:{reuters:"Legal",tv:"Video"},onAnalyticsEvent:n},c)}})})})();</script>\n',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 737,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var c=window.location.search.split("adstest\\x3d")[1];c=c?c.split("\\x26")[0]:null;document.querySelector(\'meta[name\\x3d"DCSext.DartZone"]\')&&document.querySelector(\'meta[name\\x3d"DCSext.DartZone"]\');var b=document.querySelector("#hpvideomodule");if(b){var l=function(a){var d=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\').content,e=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\')&&\ndocument.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\').content,f=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\').content,g=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\').content,h=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\').content,\nk=document.querySelector(\'link[rel\\x3d"canonical"]\')&&document.querySelector(\'link[rel\\x3d"canonical"]\').href;"undefined"!==typeof a&&(a.topic_channel=d,a.topic_sub_channel=e,a.content_type=f,a.content_channel=g,a.content_type_channel=d,a.edition=h,a.canonical_url=k,a.ad_blocked="0","undefinded"!==typeof window.analytics&&window.analytics.track(a.action,a))};window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(a){var d=\na.require_consent?a.consent?"0":"1":"0";a=a.require_ccpa_consent&&!a.consent?"1":"0";var e=b.getAttribute("data-guid"),f=b.getAttribute("data-edition"),g=b.getAttribute("data-dartzone");RCOMEmbed.init.hpvideomodule({channel_id:e,edition:f,dart_zone:g,adstest:c,npa:d,rdp:a,autoplay:!1,platform:"Mobile",context:"VOD",location:"homepage",onAnalyticsEvent:l},b)})})}})();</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 177,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">/*\n\n Adobe Visitor API for JavaScript version: 4.4.0\n Copyright 2019 Adobe, Inc. All Rights Reserved\n More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/\n*/\nvar e=function(){function z(g){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(g){return typeof g}:function(g){return g&&"function"==typeof Symbol&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g})(g)}function Y(g,a,l){return a in g?Object.defineProperty(g,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):g[a]=l,g}function Z(){return{callbacks:{},add:function(g,a){this.callbacks[g]=this.callbacks[g]||[];var l=this.callbacks[g].push(a)-1,c=this;return function(){c.callbacks[g].splice(l,\n1)}},execute:function(g,a){if(this.callbacks[g]){a=void 0===a?[]:a;a=a instanceof Array?a:[a];try{for(;this.callbacks[g].length;){var l=this.callbacks[g].shift();"function"==typeof l?l.apply(null,a):l instanceof Array&&l[1].apply(l[0],a)}delete this.callbacks[g]}catch(c){}}},executeAll:function(g,a){(a||g&&!A.isObjectEmpty(g))&&Object.keys(this.callbacks).forEach(function(a){var c=void 0!==g[a]?g[a]:"";this.execute(a,c)},this)},hasCallbacks:function(){return!!Object.keys(this.callbacks).length}}}\nfunction P(g,a,l){g=null==g?void 0:g[a];return void 0===g?l:g}function R(g,a){if(g===a)return 0;g=g.toString().split(".");a=a.toString().split(".");a:{var l=g.concat(a);for(var c=/^\\d+$/,y=0,k=l.length;y<k;y++)if(!c.test(l[y])){l=!1;break a}l=!0}if(l){l=g;for(c=a;l.length<c.length;)l.push("0");for(;c.length<l.length;)c.push("0");a:{for(l=0;l<g.length;l++){c=parseInt(g[l],10);y=parseInt(a[l],10);if(c>y){g=1;break a}if(y>c){g=-1;break a}}g=0}}else g=NaN;return g}function oa(){var a=0<arguments.length&&\nvoid 0!==arguments[0]?arguments[0]:"",k=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){return!0};this.log=Fa("log",a,k);this.warn=Fa("warn",a,k);this.error=Fa("error",a,k)}function d(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},k=a.isEnabled,l=a.cookieName;a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};var c=a.cookies;return k&&l&&c?{remove:function(){c.remove(l)},get:function(){var a=c.get(l),g={};try{g=JSON.parse(a)}catch(xa){g={}}return g},set:function(a,\ng){g=g||{};c.set(l,JSON.stringify(a),{domain:g.optInCookieDomain||"",cookieLifetime:g.optInStorageExpiry||3419E4,expires:!0})}}:{get:pa,set:pa,remove:pa}}function h(a){this.name=this.constructor.name;this.message=a;"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error(a).stack}function q(){function a(b,a){b=Ga(b);return b.length?b.every(function(b){return!!a[b]}):cb(a)}function k(){t=ca;X=aa.COMPLETE;m(p.status,p.permissions);h.set(p.permissions,\n{optInCookieDomain:Ha,optInStorageExpiry:Oa});n.execute(Pa)}function l(b){return function(a,c){if(!Ia(a))throw Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");return X=aa.CHANGED,Object.assign(ca,Qa(Ga(a),b)),c||k(),p}}var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},y=c.doesOptInApply,f=c.previousPermissions,xa=c.preOptInApprovals,v=c.isOptInStorageEnabled,Ha=c.optInCookieDomain,Oa=c.optInStorageExpiry,b=c.isIabContext;c=1<arguments.length&&void 0!==\narguments[1]?arguments[1]:{};c=c.cookies;f=db(f);ya(f)||ra.error("".concat("Invalid `previousPermissions`!"));ya(xa)||ra.error("".concat("Invalid `preOptInApprovals`!"));var h=d({isEnabled:!!v,cookieName:"adobeujs-optin"},{cookies:c}),p=this,m=eb(p),n=Sa();v=Ta(f);var q=Ta(xa);f=h.get();var r={},X=function(b,a){return ya(b)||a&&ya(a)?aa.COMPLETE:aa.PENDING}(v,f),t=function(b,a,c){var g=Qa(za,!y);return y?Object.assign({},g,b,a,c):g}(q,v,f),ca=JSON.parse(JSON.stringify(t));p.deny=l(!1);p.approve=l(!0);\np.denyAll=p.deny.bind(p,za);p.approveAll=p.approve.bind(p,za);p.isApproved=function(b){return a(b,p.permissions)};p.isPreApproved=function(b){return a(b,q)};p.fetchPermissions=function(b){var a=1<arguments.length&&void 0!==arguments[1]&&arguments[1],c=a?p.on(aa.COMPLETE,b):pa;return!y||y&&p.isComplete||xa?b(p.permissions):a||n.add(Pa,function(){return b(p.permissions)}),c};p.complete=function(){p.status===aa.CHANGED&&k()};p.registerPlugin=function(b){if(!b||!b.name||"function"!=typeof b.onRegister)throw Error(fb);\nr[b.name]||(r[b.name]=b,b.onRegister.call(b,p))};p.execute=gb(r);Object.defineProperties(p,{permissions:{get:function(){return t}},status:{get:function(){return X}},Categories:{get:function(){return da}},doesOptInApply:{get:function(){return!!y}},isPending:{get:function(){return p.status===aa.PENDING}},isComplete:{get:function(){return p.status===aa.COMPLETE}},__plugins:{get:function(){return Object.keys(r)}},isIabContext:{get:function(){return b}}})}function m(a,k){function g(){y=null;a.call(a,new h("The call took longer than you wanted!"))}\nfunction c(){y&&(clearTimeout(y),a.apply(a,arguments))}if(void 0===k)return a;var y=setTimeout(g,k);return c}function w(){if(window.__cmp)return window.__cmp;var a=window;if(a===window.top)return void ra.error("__cmp not found");for(var k;!k;){a=a.parent;try{a.frames.__cmpLocator&&(k=a)}catch(c){}if(a===window.top)break}if(!k)return void ra.error("__cmp not found");var l={};return window.__cmp=function(a,g,f){var c=Math.random()+"";a={__cmpCall:{command:a,parameter:g,callId:c}};l[c]=f;k.postMessage(a,\n"*")},window.addEventListener("message",function(a){var c=a.data;if("string"==typeof c)try{c=JSON.parse(a.data)}catch(bb){}c.__cmpReturn&&(a=c.__cmpReturn,l[a.callId]&&(l[a.callId](a.returnValue,a.success),delete l[a.callId]))},!1),window.__cmp}function t(){var a=this;a.name="iabPlugin";a.version="0.0.1";var k=Sa(),l={allConsentData:null},c=function(a){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return l[a]=c};a.fetchConsentData=function(a){var c=a.callback;a=a.timeout;c=m(c,a);\ny({callback:c})};a.isApproved=function(a){var c=a.callback,b=a.category;a=a.timeout;if(l.allConsentData)return c(null,v(b,l.allConsentData.vendorConsents,l.allConsentData.purposeConsents));a=m(function(a){var g=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=g.vendorConsents;g=g.purposeConsents;c(a,v(b,l,g))},a);y({category:b,callback:a})};a.onRegister=function(c){var g=Object.keys(Ja),b=function(b){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=a.purposeConsents,k=\na.gdprApplies,y=a.vendorConsents;!b&&k&&y&&l&&(g.forEach(function(b){var a=v(b,y,l);c[a?"approve":"deny"](b,!0)}),c.complete())};a.fetchConsentData({callback:b})};var y=function(a){a=a.callback;if(l.allConsentData)return a(null,l.allConsentData);k.add("FETCH_CONSENT_DATA",a);var g={};d(function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=b.purposeConsents,y=b.gdprApplies;b=b.vendorConsents;1<arguments.length&&arguments[1]&&(g={purposeConsents:a,gdprApplies:y,vendorConsents:b},\nc("allConsentData",g));f(function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};1<arguments.length&&arguments[1]&&(g.consentString=b.consentData,c("allConsentData",g));k.execute("FETCH_CONSENT_DATA",[null,l.allConsentData])})})},f=function(a){var c=w();c&&c("getConsentData",null,a)},d=function(a){var c=hb(Ja),b=w();b&&b("getVendorConsents",c,a)},v=function(a){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},b=2<arguments.length&&void 0!==arguments[2]?arguments[2]:\n{};return(c=!!c[Ja[a]])&&function(){return ib[a].every(function(a){return b[a]})}()}}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(a){for(var g,l,c=1;c<arguments.length;++c)for(g in l=arguments[c],l)Object.prototype.hasOwnProperty.call(l,g)&&(a[g]=l[g]);return a};var r,u,S={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},E={MCMID:"MCMID",\nMCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},M={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",ALLFIELDS:"getVisitorValues"},J={CUSTOMERIDS:"getCustomerIDs"},H={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",\nALLFIELDS:"getVisitorValues"},T={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},sa={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},F={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},jb={GLOBAL:"global"},Aa=S,kb=E,ta=M,Ba=J,Ca=H,lb=T,Ka=sa,Da=F,ba=jb,U=kb,ua=function(a){function g(){}function l(c,g){var l=this;return function(){var k=a(0,c),y={};return y[c]=k,l.setStateAndPublish(y),g(k),k}}this.getMarketingCloudVisitorID=function(a){a=a||g;var c=this.findField(U.MCMID,a);a=l.call(this,\nU.MCMID,a);return void 0!==c?c:a()};this.getVisitorValues=function(a){this.getMarketingCloudVisitorID(function(c){a({MCMID:c})})}},x=Aa,D=ta,fa=Ba,ha=function(){function a(){}function k(a,c){var g=this;return function(){return g.callbackRegistry.add(a,c),g.messageParent(x.GETSTATE),""}}function l(c){this[D[c]]=function(g){g=g||a;var l=this.findField(c,g);g=k.call(this,c,g);return void 0!==l?l:g()}}function c(c){this[fa[c]]=function(){return this.findField(c,a)||{}}}Object.keys(D).forEach(l,this);\nObject.keys(fa).forEach(c,this)},ia=ta,ja=function(){Object.keys(ia).forEach(function(a){this[ia[a]]=function(g){this.callbackRegistry.add(a,g)}},this)},A=function(a,k){return k={exports:{}},a(k,k.exports),k.exports}(function(a,k){k.isObjectEmpty=function(a){return a===Object(a)&&0===Object.keys(a).length};k.isValueEmpty=function(a){return""===a||k.isObjectEmpty(a)};k.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var c=document.createElement("div");\nif(c.innerHTML="\\x3c!--[if IE "+a+"]\\x3e\\x3cspan\\x3e\\x3c/span\\x3e\\x3c![endif]--\\x3e",c.getElementsByTagName("span").length)return a}return null};k.encodeAndBuildRequest=function(a,c){return a.map(encodeURIComponent).join(c)};k.isObject=function(a){return null!==a&&"object"===z(a)&&!1===Array.isArray(a)};k.defineGlobalNamespace=function(){return window.adobe=k.isObject(window.adobe)?window.adobe:{},window.adobe};k.pluck=function(a,c){return c.reduce(function(c,g){return a[g]&&(c[g]=a[g]),c},Object.create(null))};\nk.parseOptOut=function(a,c,g){c||(c=g,a.d_optout&&a.d_optout instanceof Array&&(c=a.d_optout.join(",")));a=parseInt(a.d_ottl,10);return isNaN(a)&&(a=7200),{optOut:c,d_ottl:a}};k.normalizeBoolean=function(a){var c=a;return"true"===a?c=!0:"false"===a&&(c=!1),c}}),B=(A.isObjectEmpty,A.isValueEmpty,A.getIeVersion,A.encodeAndBuildRequest,A.isObject,A.defineGlobalNamespace,A.pluck,A.parseOptOut,A.normalizeBoolean,Z),G=Aa,V={0:"prefix",1:"orgID",2:"state"},va=function(a,k){this.parse=function(a){try{var c=\n{};return a.data.split("|").forEach(function(a,g){void 0!==a&&(c[V[g]]=2!==g?a:JSON.parse(a))}),c}catch(y){}};this.isInvalid=function(g){var c=this.parse(g);if(!c||2>Object.keys(c).length)return!0;var l=a!==c.orgID;g=!k||g.origin!==k;c=-1===Object.keys(G).indexOf(c.prefix);return l||g||c};this.send=function(g,c,y){c=c+"|"+a;y&&y===Object(y)&&(c+="|"+JSON.stringify(y));try{g.postMessage(c,k)}catch(bb){}}},ka=Aa,W=function(a,k,l,c){function g(a){Object.assign(b.state,a);Object.assign(b.state.ALLFIELDS,\na);b.callbackRegistry.executeAll(b.state)}function f(a){r.isInvalid(a)||(q=!1,a=r.parse(a),b.setStateAndPublish(a.state))}function d(b){!q&&m&&(q=!0,r.send(c,b))}function v(){Object.assign(b,new ua(l._generateID));b.getMarketingCloudVisitorID();b.callbackRegistry.executeAll(b.state,!0);n.removeEventListener("message",p)}function p(a){r.isInvalid(a)||(a=r.parse(a),q=!1,n.clearTimeout(b._handshakeTimeout),n.removeEventListener("message",p),Object.assign(b,new ha(b)),n.addEventListener("message",f),\nb.setStateAndPublish(a.state),b.callbackRegistry.hasCallbacks()&&d(ka.GETSTATE))}function h(){function a(a){0!==a.indexOf("_")&&"function"==typeof l[a]&&(b[a]=function(){})}Object.keys(l).forEach(a);b.getSupplementalDataID=l.getSupplementalDataID;b.isAllowed=function(){return!0}}var b=this,m=k.whitelistParentDomain;b.state={ALLFIELDS:{}};b.version=l.version;b.marketingCloudOrgID=a;b.cookieDomain=l.cookieDomain||"";b._instanceType="child";var q=!1,r=new va(a,m);b.callbackRegistry=B();b.init=function(){n.s_c_in||\n(n.s_c_il=[],n.s_c_in=0);b._c="Visitor";b._il=n.s_c_il;b._in=n.s_c_in;b._il[b._in]=b;n.s_c_in++;h();Object.assign(b,new ja(b));m&&postMessage?(n.addEventListener("message",p),d(ka.HANDSHAKE),b._handshakeTimeout=setTimeout(v,250)):v()};b.findField=function(a,c){if(void 0!==b.state[a])return c(b.state[a]),b.state[a]};b.messageParent=d;b.setStateAndPublish=g},ea=Aa,K=Ca,Ea=ta,la=lb,La=function(a,k){function g(){var c={};return Object.keys(K).forEach(function(g){var b=K[g];b=a[b]();A.isValueEmpty(b)||\n(c[g]=b)}),c}function c(){var c=[];return a._loading&&Object.keys(a._loading).forEach(function(g){a._loading[g]&&(g=la[g],c.push(g))}),c.length?c:null}function y(g){return function qa(b){(b=c())?(b=Ea[b[0]],a[b](qa,!0)):g()}}function f(a){v(a);var c=ea.HANDSHAKE,b=g();k.send(a,c,b)}function d(a){y(function(){var c=a,b=ea.PARENTSTATE,l=g();k.send(c,b,l)})()}function v(c){function g(g){b.call(a,g);k.send(c,ea.PARENTSTATE,{CUSTOMERIDS:a.getCustomerIDs()})}var b=a.setCustomerIDs;a.setCustomerIDs=g}return function(a){k.isInvalid(a)||\n(k.parse(a).prefix===ea.HANDSHAKE?f:d)(a.source)}},a=function(a,k){function g(a){return function(g){c[a]=g;y++;y===f&&k(c)}}var c={},y=0,f=Object.keys(a).length;Object.keys(a).forEach(function(c){var l=a[c];if(l.fn){var k=l.args||[];k.unshift(g(c));l.fn.apply(l.context||null,k)}})},f={get:function(a){a=encodeURIComponent(a);var g=(";"+document.cookie).split(" ").join(";"),l=g.indexOf(";"+a+"\\x3d"),c=0>l?l:g.indexOf(";",l+1);return 0>l?"":decodeURIComponent(g.substring(l+2+a.length,0>c?g.length:c))},\nset:function(a,k,l){var c=P(l,"cookieLifetime"),g=P(l,"expires"),f=P(l,"domain");l=(l=P(l,"secure"))?"Secure":"";if(g&&"SESSION"!==c&&"NONE"!==c){var d=""!==k?parseInt(c||0,10):-60;d?(g=new Date,g.setTime(g.getTime()+1E3*d)):1===g&&(g=new Date,d=g.getYear(),g.setYear(d+2+(1900>d?1900:0)))}else g=0;return a&&"NONE"!==c?(document.cookie=encodeURIComponent(a)+"\\x3d"+encodeURIComponent(k)+"; path\\x3d/;"+(g?" expires\\x3d"+g.toGMTString()+";":"")+(f?" domain\\x3d"+f+";":"")+l,this.get(a)===k):0},remove:function(a,\nk){k=(k=P(k,"domain"))?" domain\\x3d"+k+";":"";document.cookie=encodeURIComponent(a)+"\\x3d; Path\\x3d/; Expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;"+k}},v=function(a){!a&&n.location&&(a=n.location.hostname);var g,l=a.split(".");for(g=l.length-2;0<=g;g--)if(a=l.slice(g).join("."),f.set("test","cookie",{domain:a}))return f.remove("test",{domain:a}),a;return""},p={compare:R,isLessThan:function(a,k){return 0>R(a,k)},areVersionsDifferent:function(a,k){return 0!==R(a,k)},isGreaterThan:function(a,k){return 0<\nR(a,k)},isEqual:function(a,k){return 0===R(a,k)}},X=!!n.postMessage,ca={postMessage:function(a,k,l){var c=1;k&&(X?l.postMessage(a,k.replace(/([^:]+:\\/\\/[^\\/]+).*/,"$1")):k&&(l.location=k.replace(/#.*$/,"")+"#"+ +new Date+c++ +"\\x26"+a))},receiveMessage:function(a,k){var g;try{X&&(a&&(g=function(c){if("string"==typeof k&&c.origin!==k||"[object Function]"===Object.prototype.toString.call(k)&&!1===k(c.origin))return!1;a(c)}),n.addEventListener?n[a?"addEventListener":"removeEventListener"]("message",\ng):n[a?"attachEvent":"detachEvent"]("onmessage",g))}catch(c){}}},mb=function(a){var g="0123456789",l="",c="",f=8,d=10,v=10;if(1==a){g+="ABCDEF";for(a=0;16>a;a++){var p=Math.floor(Math.random()*f);l+=g.substring(p,p+1);p=Math.floor(Math.random()*f);c+=g.substring(p,p+1);f=16}return l+"-"+c}for(a=0;19>a;a++)p=Math.floor(Math.random()*d),l+=g.substring(p,p+1),0===a&&9==p?d=3:(1==a||2==a)&&10!=d&&2>p?d=10:2<a&&(d=10),p=Math.floor(Math.random()*v),c+=g.substring(p,p+1),0===a&&9==p?v=3:(1==a||2==a)&&10!=\nv&&2>p?v=10:2<a&&(v=10);return l+c},nb=function(a,k){return{corsMetadata:function(){var a="none",c=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(c=!1),0<Object.prototype.toString.call(n.HTMLElement).indexOf("Constructor")&&(c=!1)),{corsType:a,corsCookiesEnabled:c}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?\nnull:new n[this.corsMetadata.corsType]},fireCORS:function(g,c,k){var l=this;c&&(g.loadErrorHandler=c);try{var f=this.getCORSInstance();f.open("get",g.corsUrl+"\\x26ts\\x3d"+(new Date).getTime(),!0);"XMLHttpRequest"===this.corsMetadata.corsType&&(f.withCredentials=!0,f.timeout=a.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var a;try{if((a=JSON.parse(this.responseText))!==Object(a)){l.handleCORSError(g,\nnull,"Response is not JSON");break a}}catch(qa){l.handleCORSError(g,qa,"Error parsing response as JSON");break a}try{for(var c=g.callback,k=n,b=0;b<c.length;b++)k=k[c[b]];k(a)}catch(qa){l.handleCORSError(g,qa,"Error forming callback function")}}});f.onerror=function(a){l.handleCORSError(g,a,"onerror")};f.ontimeout=function(a){l.handleCORSError(g,a,"ontimeout")};f.send();a._log.requests.push(g.corsUrl)}catch(Ra){this.handleCORSError(g,Ra,"try-catch")}},handleCORSError:function(g,c,k){a.CORSErrors.push({corsData:g,\nerror:c,description:k});g.loadErrorHandler&&("ontimeout"===k?g.loadErrorHandler(!0):g.loadErrorHandler(!1))}}},ma=!!n.postMessage,ob=1,Ma=864E5,Ua="adobe_mc",L="adobe_mc_sdid",wa=/^[0-9a-fA-F\\-]+$/,pb=5,Va=/vVersion\\|((\\d+\\.)?(\\d+\\.)?(\\*|\\d+))(?=$|\\|)/,qb="s_ecid",rb=function(a,k){var g=n.document;return{THROTTLE_START:3E4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(a){if("string"==typeof a)return a=a.split("/"),a[0]+"//"+a[2]},subdomain:null,\nurl:null,getUrl:function(){var c,k="http://fast.",l="?d_nsid\\x3d"+a.idSyncContainerID+"#"+encodeURIComponent(g.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),a.loadSSL&&(k=a.idSyncSSLUseAkamai?"https://fast.":"https://"),c=k+this.subdomain+".demdex.net/dest5.html"+l,this.iframeHost=this.getIframeHost(c),this.id="destination_publishing_iframe_"+this.subdomain+"_"+a.idSyncContainerID,c},checkDPIframeSrc:function(){var c="?d_nsid\\x3d"+a.idSyncContainerID+"#"+encodeURIComponent(g.location.href);\n"string"==typeof a.dpIframeSrc&&a.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(a._subdomain||this.subdomain||(new Date).getTime())+"_"+a.idSyncContainerID,this.iframeHost=this.getIframeHost(a.dpIframeSrc),this.url=a.dpIframeSrc+c)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,\nmessages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:ma?null:100,onPageDestinationsFired:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(a.idSyncDisableSyncs||a.disableIdSyncs||a.idSyncDisable3rdPartySyncing||a.disableThirdPartyCookies||a.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&\n(this.doAttachIframe||a._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||a._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function a(){f=g.createElement("iframe");f.sandbox="allow-scripts allow-same-origin";f.title="Adobe ID Syncing iFrame";f.id=l.id;f.name=l.id+"_name";f.style.cssText="display: none; width: 0; height: 0;";f.src=l.url;l.newIframeCreated=!0;k();g.body.appendChild(f)}function k(a){f.addEventListener("load",function(){f.className=\n"aamIframeLoaded";l.iframeHasLoaded=!0;l.fireIframeLoadedCallbacks(a);l.requestToProcess()})}this.startedAttachingIframe=!0;var l=this,f=g.getElementById(this.id);f?"IFRAME"!==f.nodeName?(this.id+="_2",this.iframeIdChanged=!0,a()):(this.newIframeCreated=!1,"aamIframeLoaded"!==f.className?(this.originalIframeHasLoadedAlready=!1,k("The destination publishing iframe already exists from a different library, but hadn\'t loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=\nf,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):a();this.iframe=f},fireIframeLoadedCallbacks:function(a){this.iframeLoadedCallbacks.forEach(function(c){"function"==typeof c&&c({message:a||"The destination publishing iframe was attached and loaded successfully."})});this.iframeLoadedCallbacks=[]},requestToProcess:function(c){function g(){f.jsonForComparison.push(c);f.jsonWaiting.push(c);\nf.processSyncOnPage(c)}var k,f=this;if(c===Object(c)&&c.ibs)if(k=JSON.stringify(c.ibs||[]),this.jsonForComparison.length){var l,d,v=!1;var b=0;for(l=this.jsonForComparison.length;b<l;b++)if(d=this.jsonForComparison[b],k===JSON.stringify(d.ibs||[])){v=!0;break}v?this.jsonDuplicates.push(c):g()}else g();(this.receivedThirdPartyCookiesNotification||!ma||this.iframeHasLoaded)&&this.jsonWaiting.length&&(k=this.jsonWaiting.shift(),this.process(k),this.requestToProcess());a.idSyncDisableSyncs||a.disableIdSyncs||\n!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){f.messageSendingInterval=ma?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(c,g){var k=a._getField("MCAAMLH");c=c.d_region||c.dcs_region;return k?c&&(a._setFieldExpire("MCAAMLH",g),a._setField("MCAAMLH",c),parseInt(k,10)!==c&&(this.regionChanged=!0,this.timesRegionChanged++,a._setField("MCSYNCSOP",\n""),a._setField("MCSYNCS",""),k=c)):(k=c)&&(a._setFieldExpire("MCAAMLH",g),a._setField("MCAAMLH",k)),k||(k=""),k},processSyncOnPage:function(a){var c,g;if((c=a.ibs)&&c instanceof Array&&(g=c.length))for(a=0;a<g;a++){var k=c[a];k.syncOnPage&&this.checkFirstPartyCookie(k,"","syncOnPage")}},process:function(a){var c,g,k,f=encodeURIComponent,l=!1;if((c=a.ibs)&&c instanceof Array&&(g=c.length))for(l=!0,k=0;k<g;k++){var d=c[k];var b=[f("ibs"),f(d.id||""),f(d.tag||""),A.encodeAndBuildRequest(d.url||[],","),\nf(d.ttl||""),"","",d.fireURLSync?"true":"false"];d.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(b.join("|")):d.fireURLSync&&this.checkFirstPartyCookie(d,b.join("|")))}l&&this.jsonProcessed.push(a)},checkFirstPartyCookie:function(c,g,k){var f=(k="syncOnPage"===k)?"MCSYNCSOP":"MCSYNCS";a._readVisitor();var l,d,v=a._getField(f),b=!1,p=!1,y=Math.ceil((new Date).getTime()/Ma);v?(l=v.split("*"),d=this.pruneSyncData(l,c.id,y),b=d.dataPresent,p=d.dataValid,b&&p||this.fireSync(k,c,g,l,f,y)):(l=\n[],this.fireSync(k,c,g,l,f,y))},pruneSyncData:function(a,g,k){var c,f=!1,l=!1;for(c=0;c<a.length;c++){var d=a[c];var b=parseInt(d.split("-")[1],10);d.match("^"+g+"-")?(f=!0,k<b?l=!0:(a.splice(c,1),c--)):k>=b&&(a.splice(c,1),c--)}return{dataPresent:f,dataValid:l}},manageSyncsSize:function(a){if(a.join("*").length>this.MAX_SYNCS_LENGTH)for(a.sort(function(a,c){return parseInt(a.split("-")[1],10)-parseInt(c.split("-")[1],10)});a.join("*").length>this.MAX_SYNCS_LENGTH;)a.shift()},fireSync:function(c,\ng,k,f,l,d){var v=this;if(c){if("img"===g.tag){var b=g.url,p=a.loadSSL?"https:":"http:";c=0;for(k=b.length;c<k;c++){f=b[c];var y=/^\\/\\//.test(f);var h=new Image;h.addEventListener("load",function(b,c,g,k){return function(){v.onPagePixels[b]=null;a._readVisitor();var f=a._getField(l);var d=[];if(f){f=f.split("*");var p;var y=0;for(p=f.length;y<p;y++){var h=f[y];h.match("^"+c.id+"-")||d.push(h)}}v.setSyncTrackingData(d,c,g,k)}}(this.onPagePixels.length,g,l,d));h.src=(y?p:"")+f;this.onPagePixels.push(h)}}}else this.addMessage(k),\nthis.setSyncTrackingData(f,g,l,d)},addMessage:function(c){var g=encodeURIComponent;g=g(a._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((ma?"":g)+c)},setSyncTrackingData:function(c,g,k,f){c.push(g.id+"-"+(f+Math.ceil(g.ttl/60/24)));this.manageSyncsSize(c);a._setField(k,c.join("*"))},sendMessages:function(){var a,g=this,k="",f=encodeURIComponent;this.regionChanged&&(k=f("---destpub-clear-dextp---"),this.regionChanged=!1);this.messages.length?ma?(a=k+f("---destpub-combined---")+\nthis.messages.join("%01"),this.postMessage(a),this.messages=[],this.sendingMessages=!1):(a=this.messages.shift(),this.postMessage(k+a),setTimeout(function(){g.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(a){ca.postMessage(a,this.url,this.iframe.contentWindow);this.messagesPosted.push(a)},receiveMessage:function(a){var c,g=/^---destpub-to-parent---/;"string"==typeof a&&g.test(a)&&(c=a.replace(g,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.canSetThirdPartyCookies=\n"true"===c[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(a))},processIDCallData:function(c){(null==this.url||c.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof a._subdomain&&a._subdomain.length?this.subdomain=a._subdomain:this.subdomain=c.subdomain||"",this.url=this.getUrl());c.ibs instanceof Array&&c.ibs.length&&(this.doAttachIframe=!0);this.readyToAttachIframe()&&(a.idSyncAttachIframeOnWindowLoad?(k.windowLoaded||"complete"===\ng.readyState||"loaded"===g.readyState)&&this.attachIframe():this.attachIframeASAP());"function"==typeof a.idSyncIDCallResult?a.idSyncIDCallResult(c):this.requestToProcess(c);"function"==typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(c)},canMakeSyncIDCall:function(c,g){return a._forceSyncIDCall||!c||g-c>ob},attachIframeASAP:function(){function a(){k.startedAttachingIframe||(g.body?k.attachIframe():setTimeout(a,30))}var k=this;a()}}},Wa={audienceManagerServer:{},audienceManagerServerSecure:{},\ncookieDomain:{},cookieLifetime:{},cookieName:{},doesOptInApply:{},disableThirdPartyCalls:{},discardTrackingServerECID:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},idSyncSSLUseAkamai:{},isCoopSafe:{},isIabContext:{},isOptInStorageEnabled:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},\noptInStorageExpiry:{},overwriteCrossDomainMCIDAndAID:{},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}},Xa={getConfigNames:function(){return Object.keys(Wa)},getConfigs:function(){return Wa},normalizeConfig:function(a){return"function"!=typeof a?a:a()}},eb=function(a){var g={};return a.on=function(a,\nc,k){if(!c||"function"!=typeof c)throw Error("[ON] Callback should be a function.");g.hasOwnProperty(a)||(g[a]=[]);var f=g[a].push({callback:c,context:k})-1;return function(){g[a].splice(f,1);g[a].length||delete g[a]}},a.off=function(a,c){g.hasOwnProperty(a)&&(g[a]=g[a].filter(function(a){if(a.callback!==c)return a}))},a.publish=function(a){if(g.hasOwnProperty(a)){var c=[].slice.call(arguments,1);g[a].slice(0).forEach(function(a){a.callback.apply(a.context,c)})}},a.publish},aa={PENDING:"pending",\nCHANGED:"changed",COMPLETE:"complete"},da={AAM:"aam",ADCLOUD:"adcloud",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",VIDEO_ANALYTICS:"videoaa"},Ja=(r={},Y(r,da.AAM,565),Y(r,da.ECID,565),r),ib=(u={},Y(u,da.AAM,[1,2,5]),Y(u,da.ECID,[1,2,5]),u),za=function(a){return Object.keys(a).map(function(g){return a[g]})}(da),Sa=function(){var a={};return a.callbacks=Object.create(null),a.add=function(g,f){if(!("function"==typeof f||f instanceof Array&&f.length))throw Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");\na.callbacks[g]=a.callbacks[g]||[];var c=a.callbacks[g].push(f)-1;return function(){a.callbacks[g].splice(c,1)}},a.execute=function(g,f){if(a.callbacks[g]){f=void 0===f?[]:f;f=f instanceof Array?f:[f];try{for(;a.callbacks[g].length;){var c=a.callbacks[g].shift();"function"==typeof c?c.apply(null,f):c instanceof Array&&c[1].apply(c[0],f)}delete a.callbacks[g]}catch(y){}}},a.executeAll=function(g,f){(f||g&&(g!==Object(g)||0!==Object.keys(g).length))&&Object.keys(a.callbacks).forEach(function(c){var f=\nvoid 0!==g[c]?g[c]:"";a.execute(c,f)},a)},a.hasCallbacks=function(){return!!Object.keys(a.callbacks).length},a},sb=function(){},Fa=function(a,f,d){return d()?function(){var c=window;c=c.console;if(c=!!c&&"function"==typeof c[a]){c=arguments.length;for(var g=Array(c),k=0;k<c;k++)g[k]=arguments[k];console[a].apply(console,[f].concat(g))}}:sb},tb=oa,ra=new tb("[ADOBE OPT-IN]"),Ga=function(a,f){return a instanceof Array?a:"string"===z(a)?[a]:f||[]},cb=function(a){var g=Object.keys(a);return!!g.length&&\ng.every(function(g){return!0===a[g]})},Ia=function(a){return!(!a||ub(a))&&Ga(a).every(function(a){return-1<za.indexOf(a)})},Qa=function(a,f){return a.reduce(function(a,c){return a[c]=f,a},{})},ub=function(a){return"[object Array]"===Object.prototype.toString.call(a)&&!a.length},Ta=function(a){if(Ya(a))return a;try{return JSON.parse(a)}catch(k){return{}}},ya=function(a){var g;if(!(g=void 0===a)){if(Ya(a))var f=Ia(Object.keys(a));else try{var c=JSON.parse(a);f=!!a&&"string"===z(a)&&Ia(Object.keys(c))}catch(y){f=\n!1}g=f}return g},Ya=function(a){return null!==a&&"object"===z(a)&&!1===Array.isArray(a)},pa=function(){},db=function(a){return"function"===z(a)?a():a},vb=function(a){return Object.keys(a).map(function(g){return a[g]})},hb=function(a){return vb(a).filter(function(a,g,c){return c.indexOf(a)===g})},gb=function(a){return function(){var g=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},f=g.command,c=g.params;c=void 0===c?{}:c;g=g.callback;g=void 0===g?pa:g;if(!f||-1===f.indexOf("."))throw Error("[OptIn.execute] Please provide a valid command.");\ntry{var d=f.split("."),v=a[d[0]],p=d[1];if(!v||"function"!=typeof v[p])throw Error("Make sure the plugin and API name exist.");var h=Object.assign(c,{callback:g});v[p].call(v,h)}catch(Ha){ra.error("[execute] Something went wrong: "+Ha.message)}}};h.prototype=Object.create(Error.prototype);h.prototype.constructor=h;var Pa="fetchPermissions",fb="[OptIn#registerPlugin] Plugin is invalid.";q.Categories=da;q.TimeoutError=h;var Na=Object.freeze({OptIn:q,IabPlugin:t}),wb=function(a,f){a.publishDestinations=\nfunction(g,c,d){var k=d;try{k="function"==typeof k?k:g.callback}catch(Oa){k=function(){}}var l=f;if(!l.readyToAttachIframePreliminary())return void k({error:"The destination publishing iframe is disabled in the Visitor library."});if("string"==typeof g){if(!g.length)return void k({error:"subdomain is not a populated string."});if(!(c instanceof Array&&c.length))return void k({error:"messages is not a populated array."});var v=!1;if(c.forEach(function(a){"string"==typeof a&&a.length&&(l.addMessage(a),\nv=!0)}),!v)return void k({error:"None of the messages are populated strings."})}else{if(!A.isObject(g))return void k({error:"Invalid parameters passed."});d=g;if("string"!=typeof(g=d.subdomain)||!g.length)return void k({error:"config.subdomain is not a populated string."});d=d.urlDestinations;if(!(d instanceof Array&&d.length))return void k({error:"config.urlDestinations is not a populated array."});var p=[];d.forEach(function(a){A.isObject(a)&&(a.hideReferrer?a.message&&l.addMessage(a.message):p.push(a))});\n!function b(){p.length&&setTimeout(function(){var a=new Image,c=p.shift();a.src=c.url;l.onPageDestinationsFired.push(c);b()},100)}()}l.iframe?(k({message:"The destination publishing iframe is already attached and loaded."}),l.requestToProcess()):!a.subdomain&&a._getField("MCMID")?(l.subdomain=g,l.doAttachIframe=!0,l.url=l.getUrl(),l.readyToAttachIframe()?(l.iframeLoadedCallbacks.push(function(a){k({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+\n(a.message||"no result")})}),l.attachIframe()):k({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):l.iframeLoadedCallbacks.push(function(a){k({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(a.message||"no result")})})}},xb=function l(a){function c(a,b){return a>>>b|a<<32-b}var f;var d=Math.pow;for(var k=d(2,32),v="",p=[],h=8*a.length,b=l.h=l.h||[],m=\nl.k=l.k||[],n=m.length,q={},r=2;64>n;r++)if(!q[r]){for(f=0;313>f;f+=r)q[f]=r;b[n]=d(r,.5)*k|0;m[n++]=d(r,1/3)*k|0}for(a+="\\u0080";a.length%64-56;)a+="\\x00";for(f=0;f<a.length;f++){if((d=a.charCodeAt(f))>>8)return;p[f>>2]|=d<<(3-f)%4*8}p[p.length]=h/k|0;p[p.length]=h;for(d=0;d<p.length;){a=p.slice(d,d+=16);k=b;b=b.slice(0,8);for(f=0;64>f;f++)n=a[f-15],q=a[f-2],h=b[0],r=b[4],n=b[7]+(c(r,6)^c(r,11)^c(r,25))+(r&b[5]^~r&b[6])+m[f]+(a[f]=16>f?a[f]:a[f-16]+(c(n,7)^c(n,18)^n>>>3)+a[f-7]+(c(q,17)^c(q,19)^\nq>>>10)|0),b=[n+((c(h,2)^c(h,13)^c(h,22))+(h&b[1]^h&b[2]^b[1]&b[2]))|0].concat(b),b[4]=b[4]+n|0;for(f=0;8>f;f++)b[f]=b[f]+k[f]|0}for(f=0;8>f;f++)for(d=3;d+1;d--)p=b[f]>>8*d&255,v+=(16>p?0:"")+p.toString(16);return v},Za=function(a,f){return"SHA-256"!==f&&"SHA256"!==f&&"sha256"!==f&&"sha-256"!==f||(a=xb(a)),a},yb=Na.OptIn;A.defineGlobalNamespace();window.adobe.OptInCategories=yb.Categories;var ab=function(d,l,c){function k(a){var C=a;return function(a){a=a||H.location.href;try{var c=b._extractParamFromUri(a,\nC);if(c)return I.parsePipeDelimetedKeyValues(c)}catch(Db){}}}function h(a){a=a||{};b._supplementalDataIDCurrent=a.supplementalDataIDCurrent||"";b._supplementalDataIDCurrentConsumed=a.supplementalDataIDCurrentConsumed||{};b._supplementalDataIDLast=a.supplementalDataIDLast||"";b._supplementalDataIDLastConsumed=a.supplementalDataIDLastConsumed||{}}function m(a){function b(a,b){var C=b[0];b=b[1];null!=b&&b!==J&&(a=C=(a=a?a+="|":a,a+(C+"\\x3d"+encodeURIComponent(b))));return a}a=a.reduce(b,"");return function(a){var b=\nI.getTimestampInSeconds();return a=a?a+="|":a,a+("TS\\x3d"+b)}(a)}function q(){return b.configs.isIabContext?t.optIn.isApproved(t.optIn.Categories.ECID)&&w:t.optIn.isApproved(t.optIn.Categories.ECID)}function r(a,c){if(w=!0,a)throw Error("[IAB plugin] : "+a);c.gdprApplies&&(u=c.consentString);b.init();t.optIn.off("complete",X)}function X(){t.optIn.isApproved(t.optIn.Categories.ECID)&&(b.configs.isIabContext?t.optIn.execute({command:"iabPlugin.fetchConsentData",callback:r}):(b.init(),t.optIn.off("complete",\nX)))}if(!c||c.split("").reverse().join("")!==d)throw Error("Please use `Visitor.getInstance` to instantiate Visitor.");var b=this,t=window.adobe,u="",w=!1,S=!1;b.version="4.4.0";var H=n,E=H.Visitor;E.version=b.version;E.AuthState=Da;E.OptOut=ba;H.s_c_in||(H.s_c_il=[],H.s_c_in=0);b._c="Visitor";b._il=H.s_c_il;b._in=H.s_c_in;b._il[b._in]=b;H.s_c_in++;b._instanceType="regular";b._log={requests:[]};b.marketingCloudOrgID=d;b.cookieName="AMCV_"+d;b.sessionCookieName="AMCVS_"+d;b.cookieDomain=v();b.loadSSL=\n0<=H.location.protocol.toLowerCase().indexOf("https");b.loadTimeout=3E4;b.CORSErrors=[];b.marketingCloudServer=b.audienceManagerServer="dpm.demdex.net";b.sdidParamExpiry=30;var D=null,x="MCMID",G="MCIDTS",M="A",B="MCAID",T="AAM",F="MCAAMB",J="NONE",sa=nb(b);b.FIELDS=Ka;b.cookieRead=function(a){return f.get(a)};b.cookieWrite=function(a,c,d){var C=b.cookieLifetime?(""+b.cookieLifetime).toUpperCase():"",N=!1;return b.configs&&b.configs.secureCookie&&"https:"===location.protocol&&(N=!0),f.set(a,""+c,\n{expires:d,domain:b.cookieDomain,cookieLifetime:C,secure:N})};b.resetState=function(a){a?b._mergeServerState(a):h()};b._isAllowedDone=!1;b._isAllowedFlag=!1;b.isAllowed=function(){return b._isAllowedDone||(b._isAllowedDone=!0,(b.cookieRead(b.cookieName)||b.cookieWrite(b.cookieName,"T",1))&&(b._isAllowedFlag=!0)),"T"===b.cookieRead(b.cookieName)&&b._helpers.removeCookie(b.cookieName),b._isAllowedFlag};b.setMarketingCloudVisitorID=function(a){b._setMarketingCloudFields(a)};b._use1stPartyMarketingCloudServer=\n!1;b.getMarketingCloudVisitorID=function(a,c){b.marketingCloudServer&&0>b.marketingCloudServer.indexOf(".demdex.net")&&(b._use1stPartyMarketingCloudServer=!0);var C=b._getAudienceManagerURLData("_setMarketingCloudFields"),f=C.url;return b._getRemoteField(x,f,a,c,C)};b.getVisitorValues=function(c,f){var C={MCMID:{fn:b.getMarketingCloudVisitorID,args:[!0],context:b},MCOPTOUT:{fn:b.isOptedOut,args:[void 0,!0],context:b},MCAID:{fn:b.getAnalyticsVisitorID,args:[!0],context:b},MCAAMLH:{fn:b.getAudienceManagerLocationHint,\nargs:[!0],context:b},MCAAMB:{fn:b.getAudienceManagerBlob,args:[!0],context:b}};f=f&&f.length?A.pluck(C,f):C;a(f,c)};b._currentCustomerIDs={};b._customerIDsHashChanged=!1;b._newCustomerIDsHash="";b.setCustomerIDs=function(a,c){function C(){b._customerIDsHashChanged=!1}if(!b.isOptedOut()&&a){if(!A.isObject(a)||A.isObjectEmpty(a))return!1;b._readVisitor();var f,d,k;for(f in a)if(!Object.prototype[f]&&(d=a[f],c=d.hasOwnProperty("hashType")?d.hashType:c,d))if("object"===z(d)){var N={};if(d.id){if(c){if(!(k=\nZa(String(d.id).trim().toLowerCase(),c)))return;d.id=k;N.hashType=c}N.id=d.id}void 0!=d.authState&&(N.authState=d.authState);b._currentCustomerIDs[f]=N}else if(c){if(!(k=Za(String(d).trim().toLowerCase(),c)))return;b._currentCustomerIDs[f]={id:k,hashType:c}}else b._currentCustomerIDs[f]={id:d};a=b.getCustomerIDs();c=b._getField("MCCIDH");k="";c||(c=0);for(f in a)!Object.prototype[f]&&(d=a[f],k+=(k?"|":"")+f+"|"+(d.id?d.id:"")+(d.authState?d.authState:""));b._newCustomerIDsHash=String(b._hash(k));\nb._newCustomerIDsHash!==c&&(b._customerIDsHashChanged=!0,b._mapCustomerIDs(C))}};b.getCustomerIDs=function(){b._readVisitor();var a,c,f={};for(a in b._currentCustomerIDs)!Object.prototype[a]&&(c=b._currentCustomerIDs[a],f[a]||(f[a]={}),c.id&&(f[a].id=c.id),void 0!=c.authState?f[a].authState=c.authState:f[a].authState=E.AuthState.UNKNOWN,c.hashType&&(f[a].hashType=c.hashType));return f};b.setAnalyticsVisitorID=function(a){b._setAnalyticsFields(a)};b.getAnalyticsVisitorID=function(a,c,f){if(!I.isTrackingServerPopulated()&&\n!f)return b._callCallback(a,[""]),"";var C="";if(f||(C=b.getMarketingCloudVisitorID(function(c){b.getAnalyticsVisitorID(a,!0)})),C||f){var d=f?b.marketingCloudServer:b.trackingServer,k="";b.loadSSL&&(f?b.marketingCloudServerSecure&&(d=b.marketingCloudServerSecure):b.trackingServerSecure&&(d=b.trackingServerSecure));var N={};if(d){d="http"+(b.loadSSL?"s":"")+"://"+d+"/id";C="d_visid_ver\\x3d"+b.version+"\\x26mcorgid\\x3d"+encodeURIComponent(b.marketingCloudOrgID)+(C?"\\x26mid\\x3d"+encodeURIComponent(C):\n"")+(b.idSyncDisable3rdPartySyncing||b.disableThirdPartyCookies?"\\x26d_coppa\\x3dtrue":"");var l=["s_c_il",b._in,"_set"+(f?"MarketingCloud":"Analytics")+"Fields"];k=d+"?"+C+"\\x26callback\\x3ds_c_il%5B"+b._in+"%5D._set"+(f?"MarketingCloud":"Analytics")+"Fields";N.corsUrl=d+"?"+C;N.callback=l}return N.url=k,b._getRemoteField(f?x:B,k,a,c,N)}return""};b.getAudienceManagerLocationHint=function(a,c){if(b.getMarketingCloudVisitorID(function(c){b.getAudienceManagerLocationHint(a,!0)})){var f=b._getField(B);\nif(!f&&I.isTrackingServerPopulated()&&(f=b.getAnalyticsVisitorID(function(c){b.getAudienceManagerLocationHint(a,!0)})),f||!I.isTrackingServerPopulated()){f=b._getAudienceManagerURLData();var C=f.url;return b._getRemoteField("MCAAMLH",C,a,c,f)}}return""};b.getLocationHint=b.getAudienceManagerLocationHint;b.getAudienceManagerBlob=function(a,c){if(b.getMarketingCloudVisitorID(function(c){b.getAudienceManagerBlob(a,!0)})){var f=b._getField(B);if(!f&&I.isTrackingServerPopulated()&&(f=b.getAnalyticsVisitorID(function(c){b.getAudienceManagerBlob(a,\n!0)})),f||!I.isTrackingServerPopulated()){f=b._getAudienceManagerURLData();var C=f.url;return b._customerIDsHashChanged&&b._setFieldExpire(F,-1),b._getRemoteField(F,C,a,c,f)}}return""};b._supplementalDataIDCurrent="";b._supplementalDataIDCurrentConsumed={};b._supplementalDataIDLast="";b._supplementalDataIDLastConsumed={};b.getSupplementalDataID=function(a,c){b._supplementalDataIDCurrent||c||(b._supplementalDataIDCurrent=b._generateID(1));var f=b._supplementalDataIDCurrent;return b._supplementalDataIDLast&&\n!b._supplementalDataIDLastConsumed[a]?(f=b._supplementalDataIDLast,b._supplementalDataIDLastConsumed[a]=!0):f&&(b._supplementalDataIDCurrentConsumed[a]&&(b._supplementalDataIDLast=b._supplementalDataIDCurrent,b._supplementalDataIDLastConsumed=b._supplementalDataIDCurrentConsumed,b._supplementalDataIDCurrent=f=c?"":b._generateID(1),b._supplementalDataIDCurrentConsumed={}),f&&(b._supplementalDataIDCurrentConsumed[a]=!0)),f};var K=!1;b._liberatedOptOut=null;b.getOptOut=function(a,c){var f=b._getAudienceManagerURLData("_setMarketingCloudFields"),\nC=f.url;if(q())return b._getRemoteField("MCOPTOUT",C,a,c,f);if(b._registerCallback("liberatedOptOut",a),null!==b._liberatedOptOut)return b._callAllCallbacks("liberatedOptOut",[b._liberatedOptOut]),K=!1,b._liberatedOptOut;if(K)return null;K=!0;a="liberatedGetOptOut";return f.corsUrl=f.corsUrl.replace(/dpm\\.demdex\\.net\\/id\\?/,"dpm.demdex.net/optOutStatus?"),f.callback=[a],n[a]=function(a){if(a===Object(a)){a=A.parseOptOut(a,c,J);var c=a.optOut;a=1E3*a.d_ottl;b._liberatedOptOut=c;setTimeout(function(){b._liberatedOptOut=\nnull},a)}b._callAllCallbacks("liberatedOptOut",[c]);K=!1},sa.fireCORS(f),null};b.isOptedOut=function(a,c,f){c||(c=E.OptOut.GLOBAL);return(f=b.getOptOut(function(f){f=f===E.OptOut.GLOBAL||0<=f.indexOf(c);b._callCallback(a,[f])},f))?f===E.OptOut.GLOBAL||0<=f.indexOf(c):null};b._fields=null;b._fieldsExpired=null;b._hash=function(a){var b,c=0;if(a)for(b=0;b<a.length;b++){var f=a.charCodeAt(b);c=(c<<5)-c+f;c&=c}return c};b._generateID=mb;b._generateLocalMID=function(){var a=b._generateID(0);return Q.isClientSideMarketingCloudVisitorID=\n!0,a};b._callbackList=null;b._callCallback=function(a,b){try{"function"==typeof a?a.apply(H,b):a[1].apply(a[0],b)}catch($a){}};b._registerCallback=function(a,c){c&&(null==b._callbackList&&(b._callbackList={}),void 0==b._callbackList[a]&&(b._callbackList[a]=[]),b._callbackList[a].push(c))};b._callAllCallbacks=function(a,c){if(null!=b._callbackList&&(a=b._callbackList[a]))for(;0<a.length;)b._callCallback(a.shift(),c)};b._addQuerystringParam=function(a,b,c,f){b=encodeURIComponent(b)+"\\x3d"+encodeURIComponent(c);\nc=I.parseHash(a);a=I.hashlessUrl(a);if(-1===a.indexOf("?"))return a+"?"+b+c;var C=a.split("?");a=C[0]+"?";C=C[1];return a+I.addQueryParamAtLocation(C,b,f)+c};b._extractParamFromUri=function(a,b){b=new RegExp("[\\\\?\\x26#]"+b+"\\x3d([^\\x26#]*)");if((a=b.exec(a))&&a.length)return decodeURIComponent(a[1])};b._parseAdobeMcFromUrl=k(Ua);b._parseAdobeMcSdidFromUrl=k(L);b._attemptToPopulateSdidFromUrl=function(a){a=b._parseAdobeMcSdidFromUrl(a);var c=1E9;a&&a.TS&&(c=I.getTimestampInSeconds()-a.TS);a&&a.SDID&&\na.MCORGID===d&&c<b.sdidParamExpiry&&(b._supplementalDataIDCurrent=a.SDID,b._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)};b._attemptToPopulateIdsFromUrl=function(){var a=b._parseAdobeMcFromUrl();if(a&&a.TS){var c=I.getTimestampInSeconds();c-=a.TS;if(!(Math.floor(c/60)>pb||a.MCORGID!==d)){c=a[x];var f=b.setMarketingCloudVisitorID,k=x;c&&c.match(wa)&&(k===x&&(S=!0),f(c));b._setFieldExpire(F,-1);a=a[B];c=b.setAnalyticsVisitorID;a&&a.match(wa)&&(void 0===x&&(S=!0),c(a))}}};b._mergeServerState=\nfunction(a){if(a)try{if(a=function(a){return I.isObject(a)?a:JSON.parse(a)}(a),a[b.marketingCloudOrgID]){var c=a[b.marketingCloudOrgID];!function(a){I.isObject(a)&&b.setCustomerIDs(a)}(c.customerIDs);h(c.sdid)}}catch($a){throw Error("`serverState` has an invalid format.");}};b._timeout=null;b._loadData=function(a,c,f,d){b._addQuerystringParam(c,"d_fieldgroup",a,1);d.url=b._addQuerystringParam(d.url,"d_fieldgroup",a,1);d.corsUrl=b._addQuerystringParam(d.corsUrl,"d_fieldgroup",a,1);Q.fieldGroupObj[a]=\n!0;d===Object(d)&&d.corsUrl&&"XMLHttpRequest"===sa.corsMetadata.corsType&&sa.fireCORS(d,f,a)};b._clearTimeout=function(a){null!=b._timeout&&b._timeout[a]&&(clearTimeout(b._timeout[a]),b._timeout[a]=0)};b._settingsDigest=0;b._getSettingsDigest=function(){if(!b._settingsDigest){var a=b.version;b.audienceManagerServer&&(a+="|"+b.audienceManagerServer);b.audienceManagerServerSecure&&(a+="|"+b.audienceManagerServerSecure);b._settingsDigest=b._hash(a)}return b._settingsDigest};b._readVisitorDone=!1;b._readVisitor=\nfunction(){if(!b._readVisitorDone){b._readVisitorDone=!0;var a,c,f;var d=b._getSettingsDigest();var k=!1,l=b.cookieRead(b.cookieName),p=new Date;if(l||S||b.discardTrackingServerECID||(l=b.cookieRead(qb)),null==b._fields&&(b._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\\-0-9]+$/)&&(parseInt(l[0],10)!==d&&(k=!0),l.shift()),1==l.length%2&&l.pop(),a=0;a<l.length;a+=2){d=l[a].split("-");var v=d[0];var h=l[a+1];1<d.length?(c=parseInt(d[1],10),f=0<d[1].indexOf("s")):(c=0,f=!1);k&&("MCCIDH"===\nv&&(h=""),0<c&&(c=p.getTime()/1E3-60));v&&h&&(b._setField(v,h,1),0<c&&(b._fields["expire"+v]=c+(f?"s":""),(p.getTime()>=1E3*c||f&&!b.cookieRead(b.sessionCookieName))&&(b._fieldsExpired||(b._fieldsExpired={}),b._fieldsExpired[v]=!0)))}!b._getField(B)&&I.isTrackingServerPopulated()&&(l=b.cookieRead("s_vi"))&&(l=l.split("|"),1<l.length&&0<=l[0].indexOf("v1")&&(h=l[1],a=h.indexOf("["),0<=a&&(h=h.substring(0,a)),h&&h.match(wa)&&b._setField(B,h)))}};b._appendVersionTo=function(a){var c="vVersion|"+b.version,\nf=a?b._getCookieVersion(a):null;return f?p.areVersionsDifferent(f,b.version)&&(a=a.replace(Va,c)):a+=(a?"|":"")+c,a};b._writeVisitor=function(){var a,c,f=b._getSettingsDigest();for(a in b._fields)!Object.prototype[a]&&b._fields[a]&&"expire"!==a.substring(0,6)&&(c=b._fields[a],f+=(f?"|":"")+a+(b._fields["expire"+a]?"-"+b._fields["expire"+a]:"")+"|"+c);f=b._appendVersionTo(f);b.cookieWrite(b.cookieName,f,1)};b._getField=function(a,c){return null==b._fields||!c&&b._fieldsExpired&&b._fieldsExpired[a]?\nnull:b._fields[a]};b._setField=function(a,c,f){null==b._fields&&(b._fields={});b._fields[a]=c;f||b._writeVisitor()};b._getFieldList=function(a,c){return(a=b._getField(a,c))?a.split("*"):null};b._setFieldList=function(a,c,f){b._setField(a,c?c.join("*"):"",f)};b._getFieldMap=function(a,c){if(a=b._getFieldList(a,c)){var f={};for(c=0;c<a.length;c+=2)f[a[c]]=a[c+1];return f}return null};b._setFieldMap=function(a,c,f){var d,k=null;if(c)for(d in k=[],c)!Object.prototype[d]&&(k.push(d),k.push(c[d]));b._setFieldList(a,\nk,f)};b._setFieldExpire=function(a,c,f){var d=new Date;d.setTime(d.getTime()+1E3*c);null==b._fields&&(b._fields={});b._fields["expire"+a]=Math.floor(d.getTime()/1E3)+(f?"s":"");0>c?(b._fieldsExpired||(b._fieldsExpired={}),b._fieldsExpired[a]=!0):b._fieldsExpired&&(b._fieldsExpired[a]=!1);f&&(b.cookieRead(b.sessionCookieName)||b.cookieWrite(b.sessionCookieName,"1"))};b._findVisitorID=function(a){return a&&("object"===z(a)&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&\n"NOTARGET"===(a=a.toUpperCase())&&(a=J),a&&(a===J||a.match(wa))||(a="")),a};b._setFields=function(a,c){if(b._clearTimeout(a),null!=b._loading&&(b._loading[a]=!1),Q.fieldGroupObj[a]&&Q.setState(a,!1),"MC"===a){!0!==Q.isClientSideMarketingCloudVisitorID&&(Q.isClientSideMarketingCloudVisitorID=!1);var f=b._getField(x);if(!f||b.overwriteCrossDomainMCIDAndAID){if(!(f="object"===z(c)&&c.mid?c.mid:b._findVisitorID(c))){if(b._use1stPartyMarketingCloudServer&&!b.tried1stPartyMarketingCloudServer)return b.tried1stPartyMarketingCloudServer=\n!0,void b.getAnalyticsVisitorID(null,!1,!0);f=b._generateLocalMID()}b._setField(x,f)}f&&f!==J||(f="");"object"===z(c)&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&b._setFields(T,c),b._use1stPartyMarketingCloudServer&&c.mid&&b._setFields(M,{id:c.id}));b._callAllCallbacks(x,[f])}if(a===T&&"object"===z(c)){f=604800;void 0!=c.id_sync_ttl&&c.id_sync_ttl&&(f=parseInt(c.id_sync_ttl,10));var d=O.getRegionAndCheckIfChanged(c,f);b._callAllCallbacks("MCAAMLH",[d]);d=b._getField(F);(c.d_blob||c.blob)&&(d=\nc.d_blob,d||(d=c.blob),b._setFieldExpire(F,f),b._setField(F,d));d||(d="");b._callAllCallbacks(F,[d]);!c.error_msg&&b._newCustomerIDsHash&&b._setField("MCCIDH",b._newCustomerIDsHash)}a===M&&((a=b._getField(B))&&!b.overwriteCrossDomainMCIDAndAID||(a=b._findVisitorID(c),a?a!==J&&b._setFieldExpire(F,-1):a=J,b._setField(B,a)),a&&a!==J||(a=""),b._callAllCallbacks(B,[a]));b.idSyncDisableSyncs||b.disableIdSyncs?O.idCallNotProcesssed=!0:(O.idCallNotProcesssed=!1,a={},a.ibs=c.ibs,a.subdomain=c.subdomain,O.processIDCallData(a));\nif(c===Object(c)){var k;q()&&b.isAllowed()&&(k=b._getField("MCOPTOUT"));c=A.parseOptOut(c,k,J);k=c.optOut;c=c.d_ottl;b._setFieldExpire("MCOPTOUT",c,!0);b._setField("MCOPTOUT",k);b._callAllCallbacks("MCOPTOUT",[k])}};b._loading=null;b._getRemoteField=function(a,c,f,d,k){var l,v="",p=I.isFirstPartyAnalyticsVisitorIDCall(a),C={MCAAMLH:!0,MCAAMB:!0};if(q()&&b.isAllowed())if(b._readVisitor(),v=b._getField(a,!0===C[a]),!(!v||b._fieldsExpired&&b._fieldsExpired[a])||b.disableThirdPartyCalls&&!p)v||(a===x?\n(b._registerCallback(a,f),v=b._generateLocalMID(),b.setMarketingCloudVisitorID(v)):a===B?(b._registerCallback(a,f),v="",b.setAnalyticsVisitorID(v)):(v="",d=!0));else if(a===x||"MCOPTOUT"===a?l="MC":"MCAAMLH"===a||a===F?l=T:a===B&&(l=M),l)return!c||null!=b._loading&&b._loading[l]||(null==b._loading&&(b._loading={}),b._loading[l]=!0,b._loadData(l,c,function(c){b._getField(a)||(c&&Q.setState(l,!0),c="",a===x?c=b._generateLocalMID():l===T&&(c={error_msg:"timeout"}),b._setFields(l,c))},k)),b._registerCallback(a,\nf),v||(c||b._setFields(l,{id:J}),"");return a!==x&&a!==B||v!==J||(v="",d=!0),f&&d&&b._callCallback(f,[v]),v};b._setMarketingCloudFields=function(a){b._readVisitor();b._setFields("MC",a)};b._mapCustomerIDs=function(a){b.getAudienceManagerBlob(a,!0)};b._setAnalyticsFields=function(a){b._readVisitor();b._setFields(M,a)};b._setAudienceManagerFields=function(a){b._readVisitor();b._setFields(T,a)};b._getAudienceManagerURLData=function(a){var c=b.audienceManagerServer,f="",d=b._getField(x),k=b._getField(F,\n!0),l=b._getField(B);l=l&&l!==J?"\\x26d_cid_ic\\x3dAVID%01"+encodeURIComponent(l):"";if(b.loadSSL&&b.audienceManagerServerSecure&&(c=b.audienceManagerServerSecure),c){var v,p,h=b.getCustomerIDs();if(h)for(v in h)!Object.prototype[v]&&(p=h[v],l+="\\x26d_cid_ic\\x3d"+encodeURIComponent(v)+"%01"+encodeURIComponent(p.id?p.id:"")+(p.authState?"%01"+p.authState:""));a||(a="_setAudienceManagerFields");c="http"+(b.loadSSL?"s":"")+"://"+c+"/id";d="d_visid_ver\\x3d"+b.version+(u&&-1!==c.indexOf("demdex.net")?"\\x26gdpr\\x3d1\\x26gdpr_force\\x3d1\\x26gdpr_consent\\x3d"+\nu:"")+"\\x26d_rtbd\\x3djson\\x26d_ver\\x3d2"+(!d&&b._use1stPartyMarketingCloudServer?"\\x26d_verify\\x3d1":"")+"\\x26d_orgid\\x3d"+encodeURIComponent(b.marketingCloudOrgID)+"\\x26d_nsid\\x3d"+(b.idSyncContainerID||0)+(d?"\\x26d_mid\\x3d"+encodeURIComponent(d):"")+(b.idSyncDisable3rdPartySyncing||b.disableThirdPartyCookies?"\\x26d_coppa\\x3dtrue":"")+(!0===D?"\\x26d_coop_safe\\x3d1":!1===D?"\\x26d_coop_unsafe\\x3d1":"")+(k?"\\x26d_blob\\x3d"+encodeURIComponent(k):"")+l;k=["s_c_il",b._in,a];return f=c+"?"+d+"\\x26d_cb\\x3ds_c_il%5B"+\nb._in+"%5D."+a,{url:f,corsUrl:c+"?"+d,callback:k}}return{url:f}};b.appendVisitorIDsTo=function(a){try{var c=[[x,b._getField(x)],[B,b._getField(B)],["MCORGID",b.marketingCloudOrgID]];return b._addQuerystringParam(a,Ua,m(c))}catch($a){return a}};b.appendSupplementalDataIDTo=function(a,c){if(!(c=c||b.getSupplementalDataID(I.generateRandomString(),!0)))return a;try{var f=m([["SDID",c],["MCORGID",b.marketingCloudOrgID]]);return b._addQuerystringParam(a,L,f)}catch(Cb){return a}};var I={parseHash:function(a){var b=\na.indexOf("#");return 0<b?a.substr(b):""},hashlessUrl:function(a){var b=a.indexOf("#");return 0<b?a.substr(0,b):a},addQueryParamAtLocation:function(a,b,c){a=a.split("\\x26");return c=null!=c?c:a.length,a.splice(c,0,b),a.join("\\x26")},isFirstPartyAnalyticsVisitorIDCall:function(a,c,f){if(a!==B)return!1;var d;return c||(c=b.trackingServer),f||(f=b.trackingServerSecure),!("string"!=typeof(d=b.loadSSL?f:c)||!d.length)&&0>d.indexOf("2o7.net")&&0>d.indexOf("omtrdc.net")},isObject:function(a){return!(!a||\na!==Object(a))},removeCookie:function(a){f.remove(a,{domain:b.cookieDomain})},isTrackingServerPopulated:function(){return!!b.trackingServer||!!b.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1E3)},parsePipeDelimetedKeyValues:function(a){return a.split("|").reduce(function(a,b){b=b.split("\\x3d");return a[b[0]]=decodeURIComponent(b[1]),a},{})},generateRandomString:function(a){a=a||5;for(var b="",c="abcdefghijklmnopqrstuvwxyz0123456789";a--;)b+=c[Math.floor(Math.random()*\nc.length)];return b},normalizeBoolean:function(a){return"true"===a||"false"!==a&&a},parseBoolean:function(a){return"true"===a||"false"!==a&&null},replaceMethodsWithFunction:function(a,b){for(var c in a)a.hasOwnProperty(c)&&"function"==typeof a[c]&&(a[c]=b);return a}};b._helpers=I;var O=rb(b,E);b._destinationPublishing=O;b.timeoutMetricsLog=[];var Q={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(a,\nb){switch(a){case "MC":!1===b?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=b;break;case M:!1===b?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=b;break;case T:!1===b?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=b}}};b.isClientSideMarketingCloudVisitorID=function(){return Q.isClientSideMarketingCloudVisitorID};b.MCIDCallTimedOut=function(){return Q.MCIDCallTimedOut};b.AnalyticsIDCallTimedOut=\nfunction(){return Q.AnalyticsIDCallTimedOut};b.AAMIDCallTimedOut=function(){return Q.AAMIDCallTimedOut};b.idSyncGetOnPageSyncInfo=function(){return b._readVisitor(),b._getField("MCSYNCSOP")};b.idSyncByURL=function(a){if(!b.isOptedOut()){var c=a||{};var f=c.minutesToLive,d="";c=((b.idSyncDisableSyncs||b.disableIdSyncs)&&(d=d||"Error: id syncs have been disabled"),"string"==typeof c.dpid&&c.dpid.length||(d=d||"Error: config.dpid is empty"),"string"==typeof c.url&&c.url.length||(d=d||"Error: config.url is empty"),\nvoid 0===f?f=20160:(f=parseInt(f,10),(isNaN(f)||0>=f)&&(d=d||"Error: config.minutesToLive needs to be a positive number")),{error:d,ttl:f});if(c.error)return c.error;var k,l;f=a.url;d=encodeURIComponent;var v=O;return f=f.replace(/^https:/,"").replace(/^http:/,""),k=A.encodeAndBuildRequest(["",a.dpid,a.dpuuid||""],","),l=["ibs",d(a.dpid),"img",d(f),c.ttl,"",k],v.addMessage(l.join("|")),v.requestToProcess(),"Successfully queued"}};b.idSyncByDataSource=function(a){if(!b.isOptedOut())return a===Object(a)&&\n"string"==typeof a.dpuuid&&a.dpuuid.length?(a.url="//dpm.demdex.net/ibs:dpid\\x3d"+a.dpid+"\\x26dpuuid\\x3d"+a.dpuuid,b.idSyncByURL(a)):"Error: config or config.dpuuid is empty"};wb(b,O);b._getCookieVersion=function(a){a=a||b.cookieRead(b.cookieName);return(a=Va.exec(a))&&1<a.length?a[1]:null};b._resetAmcvCookie=function(a){var c=b._getCookieVersion();c&&!p.isLessThan(c,a)||I.removeCookie(b.cookieName)};b.setAsCoopSafe=function(){D=!0};b.setAsCoopUnsafe=function(){D=!1};(function(){if(b.configs=Object.create(null),\nI.isObject(l))for(var a in l)!Object.prototype[a]&&(b[a]=l[a],b.configs[a]=l[a])})();(function(){[["getMarketingCloudVisitorID"],["setCustomerIDs",void 0],["getAnalyticsVisitorID"],["getAudienceManagerLocationHint"],["getLocationHint"],["getAudienceManagerBlob"]].forEach(function(a){var c=a[0],f=2===a.length?a[1]:"",d=b[c];b[c]=function(a){return q()&&b.isAllowed()?d.apply(b,arguments):("function"==typeof a&&b._callCallback(a,[f]),f)}})})();b.init=function(){if(b.configs.doesOptInApply&&(!t.optIn.isComplete||\n!q()))return t.optIn.fetchPermissions(X,!0);!function(){if(I.isObject(l)){b.idSyncContainerID=b.idSyncContainerID||0;D="boolean"==typeof b.isCoopSafe?b.isCoopSafe:I.parseBoolean(b.isCoopSafe);b.resetBeforeVersion&&b._resetAmcvCookie(b.resetBeforeVersion);b._attemptToPopulateIdsFromUrl();b._attemptToPopulateSdidFromUrl();b._readVisitor();var a=b._getField(G),c=Math.ceil((new Date).getTime()/Ma);b.idSyncDisableSyncs||b.disableIdSyncs||!O.canMakeSyncIDCall(a,c)||(b._setFieldExpire(F,-1),b._setField(G,\nc));b.getMarketingCloudVisitorID();b.getAudienceManagerLocationHint();b.getAudienceManagerBlob();b._mergeServerState(b.serverState)}else b._attemptToPopulateIdsFromUrl(),b._attemptToPopulateSdidFromUrl()}();(function(){if(!b.idSyncDisableSyncs&&!b.disableIdSyncs){O.checkDPIframeSrc();H.addEventListener("load",function(){E.windowLoaded=!0;var a=O;a.readyToAttachIframe()&&a.attachIframe()});try{ca.receiveMessage(function(a){O.receiveMessage(a.data)},O.iframeHost)}catch(C){}}})();(function(){b.whitelistIframeDomains&&\nma&&(b.whitelistIframeDomains=b.whitelistIframeDomains instanceof Array?b.whitelistIframeDomains:[b.whitelistIframeDomains],b.whitelistIframeDomains.forEach(function(a){var c=new va(d,a);c=La(b,c);ca.receiveMessage(c,a)}))})()}};ab.config=Xa;var na=n.Visitor=ab,zb=function(a){if(A.isObject(a))return Object.keys(a).filter(function(f){return""!==a[f]}).reduce(function(f,c){var d="doesOptInApply"!==c?a[c]:Xa.normalizeConfig(a[c]);d=A.normalizeBoolean(d);return f[c]=d,f},Object.create(null))},Ab=Na.OptIn,\nBb=Na.IabPlugin;return na.getInstance=function(a,d){if(!a)throw Error("Visitor requires Adobe Marketing Cloud Org ID.");0>a.indexOf("@")&&(a+="@AdobeOrg");var c=function(){var c=n.s_c_il;if(c)for(var f=0;f<c.length;f++){var d=c[f];if(d&&"Visitor"===d._c&&d.marketingCloudOrgID===a)return d}}();if(c)return c;d=zb(d);!function(a){var c=n.adobe,d;(d=n.adobe.optIn)||(d=A.pluck(a,"doesOptInApply previousPermissions preOptInApprovals isOptInStorageEnabled optInStorageExpiry isIabContext".split(" ")),a=(a=\na.optInCookieDomain||a.cookieDomain)||v(),a=a===window.location.hostname?"":a,d.optInCookieDomain=a,a=new Ab(d,{cookies:f}),d.isIabContext&&(d=new Bb(window.__cmp),a.registerPlugin(d)),d=a);c.optIn=d}(d||{});c=a;var k=c.split("").reverse().join("");c=new na(a,null,k);A.isObject(d)&&d.cookieDomain&&(c.cookieDomain=d.cookieDomain);n.s_c_il.splice(--n.s_c_in,1);var l=A.getIeVersion();if("number"==typeof l&&10>l)return c._helpers.replaceMethodsWithFunction(c,function(){});try{var p=n.self!==n.parent}catch(Ra){p=\n!0}p=p&&!function(a){return a.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===a.cookieRead("TEST_AMCV_COOKIE")&&(a._helpers.removeCookie("TEST_AMCV_COOKIE"),!0)}(c)&&n.parent?new W(a,d,c,n.parent):new na(a,d,k);return c=null,p.init(),p},function(){function a(){na.windowLoaded=!0}n.addEventListener?n.addEventListener("load",a):n.attachEvent&&n.attachEvent("onload",a);na.codeLoadEnd=(new Date).getTime()}(),na}();\n!function(){function z(d,h,q){var m="";h=h||"Error caught in DIL module/submodule: ";return d===Object(d)?m=h+(d.message||"err has no message"):(m=h+"err is not a valid object",d={}),d.message=m,q instanceof DIL&&(d.partner=q.api.getPartner()),DIL.errorModule.handleError(d),this.errorMessage=m}var Y,Z,P,R={submitUniversalAnalytics:function(d,h,q){try{var m,w,t=d.getAll()[0],n=t[q||"b"].data.keys;d={};var r=0;for(m=n.length;r<m;r++){var u=n[r];void 0===(w=t.get(u))||"function"==typeof w||w===Object(w)||\n/^_/.test(u)||/^&/.test(u)||(d[u]=w)}return h.api.signals(d,"c_").submit(),d}catch(S){return"Caught error with message: "+S.message}},dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:z,init:function(d,h,q){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var m={name:"DIL GA Module Error"},w="";h instanceof DIL?(this.dil=\nh,m.partner=this.dil.api.getPartner()):(w="dilInstance is not a valid instance of DIL",m.message=w,DIL.errorModule.handleError(m));d instanceof Array&&d.length?this.arr=d:(w="gaArray is not an array or is empty",m.message=w,DIL.errorModule.handleError(m));this.tv=this.constructTrackVars(q);this.errorMessage=w}catch(t){this.handle(t,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(d){var h,q,m,w,t=[];if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){var n=\n{};var r=0;for(q=(w=this.defaultTrackVars).length;r<q;r++)n[w[r]]=!0;this.defaultTrackVarsObj=n}else n=this.defaultTrackVarsObj;if(d===Object(d)){if((h=d.names)instanceof Array&&(q=h.length))for(r=0;r<q;r++)"string"==typeof(m=h[r])&&m.length&&m in n&&t.push(m);if(t.length)return t}return this.defaultTrackVars},constructGAObj:function(d){var h,q,m,w,t,n={},r=d instanceof Array?d:this.arr;d=0;for(h=r.length;d<h;d++)(q=r[d])instanceof Array&&q.length&&(w=q=[],t=r[d],w instanceof Array&&t instanceof Array&&\nArray.prototype.push.apply(w,t),"string"==typeof(m=q.shift())&&m.length&&(n[m]instanceof Array||(n[m]=[]),n[m].push(q)));return n},addToSignals:function(d,h){return"string"==typeof d&&""!==d&&null!=h&&""!==h&&(this.signals[d]instanceof Array||(this.signals[d]=[]),this.signals[d].push(h),this.hasSignals=!0)},constructSignals:function(){var d,h,q,m,w=this.constructGAObj(),t={_setAccount:function(d){this.addToSignals("c_accountId",d)},_setCustomVar:function(d,h,m){"string"==typeof h&&h.length&&this.addToSignals("c_"+\nh,m)},_addItem:function(d,h,m,n,q,r){this.addToSignals("c_itemOrderId",d);this.addToSignals("c_itemSku",h);this.addToSignals("c_itemName",m);this.addToSignals("c_itemCategory",n);this.addToSignals("c_itemPrice",q);this.addToSignals("c_itemQuantity",r)},_addTrans:function(d,h,m,n,q,r,t,u){this.addToSignals("c_transOrderId",d);this.addToSignals("c_transAffiliation",h);this.addToSignals("c_transTotal",m);this.addToSignals("c_transTax",n);this.addToSignals("c_transShipping",q);this.addToSignals("c_transCity",\nr);this.addToSignals("c_transState",t);this.addToSignals("c_transCountry",u)},_trackSocial:function(d,h,m,n){this.addToSignals("c_socialNetwork",d);this.addToSignals("c_socialAction",h);this.addToSignals("c_socialTarget",m);this.addToSignals("c_socialPagePath",n)}},n=this.tv;var r=0;for(d=n.length;r<d;r++)if(h=n[r],w.hasOwnProperty(h)&&t.hasOwnProperty(h)&&(m=w[h])instanceof Array){var u=0;for(q=m.length;u<q;u++)t[h].apply(this,m[u])}},submit:function(){try{return""!==this.errorMessage?this.errorMessage:\n(this.constructSignals(),this.hasSignals?(this.dil.api.signals(this.signals).submit(),"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"\\x3d",!0)):"No signals present")}catch(d){return this.handle(d,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:z,callback:null,v:function(){return!1},init:function(d,h,q){try{this.callback=this.dil=null,this.errorMessage="",d instanceof DIL?\n(this.dil=d,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(h)?h:"aam_ga",this.delimiter=this.v(q)?q:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(m){this.handle(m,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(d){var h,q,m,w,t,n,r,u,S=!1,E=1;if(d===Object(d)&&(h=d.stuff)&&h instanceof Array&&(q=h.length))for(d=0;d<q;d++)if((m=h[d])&&m===Object(m)&&\n(w=m.cn,t=m.cv,w===this.cookieName&&this.v(t))){S=!0;break}if(S){h=t.split(this.delimiter);void 0===window._gaq&&(window._gaq=[]);m=window._gaq;d=0;for(q=h.length;d<q&&(r=(n=h[d].split("\\x3d"))[0],u=n[1],this.v(r)&&this.v(u)&&m.push(["_setCustomVar",E++,r,u,1]),!(E>this.LIMIT));d++);this.errorMessage=1<E?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"==typeof this.callback)return this.callback()},submit:function(){try{var d=\nthis;return""!==this.errorMessage?this.errorMessage:(this.dil.api.afterResult(function(h){d.process(h)}).submit(),"DIL.modules.GA.Stuffer.submit() successful")}catch(h){return this.handle(h,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}},oa={dil:null,handle:z,init:function(d,h,q,m){try{var w=this,t={name:"DIL Site Catalyst Module Error"},n=function(d){return t.message=d,DIL.errorModule.handleError(t),d};return(this.options=m===Object(m)?m:{},this.dil=null,h instanceof DIL)?\n(this.dil=h,t.partner=h.api.getPartner(),d!==Object(d))?n("siteCatalystReportingSuite is not an object"):(window.AppMeasurement_Module_DIL=d.m_DIL=function(d){var h="function"==typeof d.m_i?d.m_i("DIL"):this;if(h!==Object(h))return n("m is not an object");h.trackVars=w.constructTrackVars(q);h.d=0;h.s=d;h._t=function(){var d,h,m=this,q=","+m.trackVars+",",r=m.s;var t=[];var u=[];var F={},z=!1;if(r!==Object(r))return n("Error in m._t function: s is not an object");if(m.d){if("function"==typeof r.foreachVar)r.foreachVar(function(d,\nh){void 0!==h&&(F[d]=h,z=!0)},m.trackVars);else{if(!(r.va_t instanceof Array))return n("Error in m._t function: s.va_t is not an array");if(r.lightProfileID?(d=r.lightTrackVars)&&(d=","+d+","+r.vl_mr+","):(r.pe||r.linkType)&&(d=r.linkTrackVars,r.pe&&(h=r.pe.substring(0,1).toUpperCase()+r.pe.substring(1),r[h]&&(d=r[h].trackVars)),d&&(d=","+d+","+r.vl_l+","+r.vl_l2+",")),d){h=0;for(t=d.split(",");h<t.length;h++)0<=q.indexOf(","+t[h]+",")&&u.push(t[h]);u.length&&(q=","+u.join(",")+",")}t=0;for(u=r.va_t.length;t<\nu;t++)d=r.va_t[t],0<=q.indexOf(","+d+",")&&void 0!==r[d]&&null!==r[d]&&""!==r[d]&&(F[d]=r[d],z=!0)}w.includeContextData(r,F).store_populated&&(z=!0);z&&m.d.api.signals(F,"c_").submit()}}},d.loadModule("DIL"),d.DIL.d=h,t.message?t.message:"DIL.modules.siteCatalyst.init() completed with no errors"):n("dilInstance is not a valid instance of DIL")}catch(r){return this.handle(r,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(d){var h,q,m,w,t,n,r,u=[];\nif(d===Object(d)){if((h=d.names)instanceof Array&&(w=h.length))for(m=0;m<w;m++)"string"==typeof(t=h[m])&&t.length&&u.push(t);if((q=d.iteratedNames)instanceof Array&&(w=q.length))for(m=0;m<w;m++)if((n=q[m])===Object(n)&&(t=n.name,r=parseInt(n.maxIndex,10),"string"==typeof t&&t.length&&!isNaN(r)&&0<=r))for(d=0;d<=r;d++)u.push(t+d);if(u.length)return u.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",\nmaxIndex:75},{name:"eVar",maxIndex:250}]})},includeContextData:function(d,h){var q={},m=!1;if(d.contextData===Object(d.contextData)){var w,t,n,r=d.contextData,u=this.options.replaceContextDataPeriodsWith,z=this.options.filterFromContextVariables,E={};if("string"==typeof u&&u.length||(u="_"),z instanceof Array)for(d=0,w=z.length;d<w;d++){var M=z[d];this.dil.validators.isPopulatedString(M)&&(E[M]=!0)}for(t in r)r.hasOwnProperty(t)&&!E[t]&&((n=r[t])||"number"==typeof n)&&(h[t=("contextData."+t).replace(/\\./g,\nu)]=n,m=!0)}return q.store_populated=m,q}};"function"!=typeof window.DIL&&(window.DIL=function(d,h){function q(a){return void 0===a||!0===a}var m,w,t=[],n={};d!==Object(d)&&(d={});var r=d.partner;var u=d.containerNSID;var z=d.mappings;var E=d.uuidCookie;var M=!0===d.enableErrorReporting;var J=d.visitorService;var H=d.declaredId;var T=!0===d.delayAllUntilWindowLoad;var P=q(d.secureDataCollection);var F="boolean"==typeof d.isCoopSafe?d.isCoopSafe:null;var Y=q(d.enableHrefererParam);var Z=q(d.enableLogging);\nvar R=q(d.enableUrlDestinations);var ta=q(d.enableCookieDestinations);var Ba=!0===d.disableDefaultRequest;var Ca=d.afterResultForDefaultRequest;var oa=d.visitorConstructor;var Ka=!0===d.disableCORS;var Da=!0===d.ignoreHardDependencyOnVisitorAPI;M&&DIL.errorModule.activate();Da&&t.push("Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.");\nM=!0===window._dil_unit_tests;if((m=h)&&t.push(m+""),!r||"string"!=typeof r)return H={name:"error",message:m="DIL partner is invalid or not specified in initConfig",filename:"dil.js"},DIL.errorModule.handleError(H),Error(m);if(m="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0",(u||"number"==typeof u)&&(u=parseInt(u,10),!isNaN(u)&&0<=u&&(m="")),m&&(u=0,t.push(m),m=""),(w=DIL.getDil(r,u))instanceof DIL&&w.api.getPartner()===r&&w.api.getContainerNSID()===u)return w;\nif(!(this instanceof DIL))return new DIL(d,"DIL was not instantiated with the \'new\' operator, returning a valid instance with partner \\x3d "+r+" and containerNSID \\x3d "+u);DIL.registerDil(this,r,u);var ba={doesConsoleLogExist:window.console===Object(window.console)&&"function"==typeof window.console.log,logMemo:{},log:function(a){(t.push(a),Z&&this.doesConsoleLogExist)&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,arguments)},logOnce:function(a){this.logMemo[a]||\n(this.logMemo[a]=!0,ba.log(a))}},U={IS_HTTPS:P||"https:"===document.location.protocol,SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var f=document.createElement("div");if(f.innerHTML="\\x3c!--[if IE "+a+"]\\x3e\\x3cspan\\x3e\\x3c/span\\x3e\\x3c![endif]--\\x3e",f.getElementsByTagName("span").length)return a}return null}()};U.IS_IE_LESS_THAN_10="number"==typeof U.IE_VERSION&&10>U.IE_VERSION;var ua={stuffed:{}},x={},D={firingQueue:[],\nfired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},firstRequestHasFired:!1,abortRequests:!1,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,platformParams:{d_nsid:u+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:3E4,calledBack:!1,mid:null,\nnoVisitorAPI:null,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(a){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=!0;var f,d,p,h=J;if("function"!=typeof a||"function"!=typeof a.getInstance)throw this.noVisitorAPI=!0,Error("Visitor does not exist.");if(h!==Object(h)||!(f=h.namespace)||"string"!=typeof f)throw this.releaseType="no namespace",Error("DIL.create() needs the initConfig property `visitorService`:{namespace:\'\\x3cExperience Cloud Org ID\\x3e\'}");\nif(!((d=a.getInstance(f,{idSyncContainerID:u}))===Object(d)&&d instanceof a&&"function"==typeof d.isAllowed&&"function"==typeof d.getMarketingCloudVisitorID&&"function"==typeof d.getCustomerIDs&&"function"==typeof d.isOptedOut&&"function"==typeof d.publishDestinations))throw this.releaseType="invalid instance",p="Invalid Visitor instance.",d===Object(d)&&"function"!=typeof d.publishDestinations&&(p+=" In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ ."),\nError(p);if(this.VisitorAPI=a,!d.isAllowed())return this.releaseType="VisitorAPI is not allowed to write cookies",void this.releaseRequests();this.instance=d;this.waitForMidToReleaseRequests()}}catch(ca){if(!Da)throw Error("Error in processing Visitor API, which is a hard dependency for DIL v8.0+: "+ca.message);this.releaseRequests()}},waitForMidToReleaseRequests:function(){var a=this;this.instance&&(this.instance.getMarketingCloudVisitorID(function(f){a.mid=f;a.releaseType="VisitorAPI";a.releaseRequests()},\n!0),(!V.exists||!V.isIabContext&&V.isApproved()||V.isIabContext&&K.hasGoSignal())&&setTimeout(function(){"VisitorAPI"!==a.releaseType&&(a.releaseType="timeout",a.releaseRequests())},this.getLoadTimeout()))},releaseRequests:function(){this.calledBack=!0;D.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var a=B.isPopulatedString,f=this.getMarketingCloudVisitorID();return a(this.mid)&&this.mid===\nf||(this.mid=f),a(this.mid)?"d_mid\\x3d"+this.mid+"\\x26":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(a){if(a!==Object(a))return"";var f,d,p="",h=[],m=[];for(f in a)a.hasOwnProperty(f)&&(d=a[m[0]=f])===Object(d)&&(m[1]=d.id||"",m[2]=d.authState||0,h.push(m),m=[]);if(f=h.length)for(a=0;a<f;a++)p+="\\x26d_cid_ic\\x3d"+G.encodeAndBuildRequest(h[a],"%01");return p},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,\nthis.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(a){this.isOptedOut=a;this.isOptedOutCallbackCalled=!0;D.registerRequest();V.isIabContext()&&K.checkQueryStringObject()},getLoadTimeout:function(){var a=this.instance;if(a){if("function"==typeof a.getLoadTimeout)return a.getLoadTimeout();if(void 0!==a.loadTimeout)return a.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,\nrequest:null},declaredIdCombos:{},setDeclaredId:function(a,f){var d=B.isPopulatedString,p=encodeURIComponent;if(a===Object(a)&&d(f)){var h=a.dpid;a=a.dpuuid;var m=null;if(d(h)&&d(a))return m=p(h)+"$"+p(a),!0===this.declaredIdCombos[m]?"setDeclaredId: combo exists for type \'"+f+"\'":(this.declaredIdCombos[m]=!0,this.declaredId[f]={dpid:h,dpuuid:a},"setDeclaredId: succeeded for type \'"+f+"\'")}return"setDeclaredId: failed for type \'"+f+"\'"},getDeclaredIdQueryString:function(){var a=this.declaredId.request,\nf=this.declaredId.init,d=encodeURIComponent,p="";return null!==a?p="\\x26d_dpid\\x3d"+d(a.dpid)+"\\x26d_dpuuid\\x3d"+d(a.dpuuid):null!==f&&(p="\\x26d_dpid\\x3d"+d(f.dpid)+"\\x26d_dpuuid\\x3d"+d(f.dpuuid)),p}},registerRequest:function(a){var f,d=this.firingQueue;a===Object(a)&&(d.push(a),a.isDefaultRequest||(Ba=!0));this.firing||!d.length||T&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(V.isApproved()||\nK.hasGoSignal())&&(this.adms.isOptedOutCallbackCalled=!1,(f=d.shift()).src=f.src.replace(/&d_nsid=/,"\\x26"+this.adms.getMIDQueryString()+K.getQueryString()+"d_nsid\\x3d"),B.isPopulatedString(f.corsPostData)&&(f.corsPostData=f.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+K.getQueryString()+"d_nsid\\x3d")),A.fireRequest(f),this.firstRequestHasFired||"script"!==f.tag&&"cors"!==f.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(oa||window.Visitor)},\ngetCoopQueryString:function(){var a="";return!0===F?a="\\x26d_coop_safe\\x3d1":!1===F&&(a="\\x26d_coop_unsafe\\x3d1"),a}};n.requestController=D;var fa,ha,ia={sendingMessages:!1,messages:[],messagesPosted:[],destinations:[],destinationsPosted:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],publishDestinationsVersion:null,requestToProcess:function(a,f){function d(){h.jsonForComparison.push(a);h.jsonWaiting.push([a,f])}var p,h=this;if(a&&!B.isEmptyObject(a))if(p=JSON.stringify(a.dests||\n[]),this.jsonForComparison.length){var m,r,n=!1;var q=0;for(m=this.jsonForComparison.length;q<m;q++)if(r=this.jsonForComparison[q],p===JSON.stringify(r.dests||[])){n=!0;break}n?this.jsonDuplicates.push(a):d()}else d();this.jsonWaiting.length&&(p=this.jsonWaiting.shift(),this.process(p[0],p[1]),this.requestToProcess());this.messages.length&&!this.sendingMessages&&this.sendMessages()},process:function(a){if(R){var f,d,p,h=encodeURIComponent,m=this.getPublishDestinationsVersion(),r=!1;if(-1!==m){if((f=\na.dests)&&f instanceof Array&&(d=f.length)){for(p=0;p<d;p++){var n=f[p];var q=[h("dests"),h(n.id||""),h(n.y||""),h(n.c||"")].join("|");this.addMessage(q);q={url:n.c,hideReferrer:void 0===n.hr||!!n.hr,message:q};this.addDestination(q);void 0!==n.hr&&(r=!0)}1===m&&r&&ba.logOnce("Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.")}this.jsonProcessed.push(a)}}},addMessage:function(a){this.messages.push(a)},\naddDestination:function(a){this.destinations.push(a)},sendMessages:function(){this.sendingMessages||(this.sendingMessages=!0,R&&this.messages.length&&this.publishDestinations())},publishDestinations:function(){var a=this,f=D.adms.instance,d=[],h=[],m=function(f){ba.log("visitor.publishDestinations() result: "+(f.error||f.message));a.sendingMessages=!1;a.requestToProcess()};1===this.publishDestinationsVersion?(G.extendArray(d,this.messages),G.extendArray(this.messagesPosted,this.messages),a.messages=\n[],a.destinations=[],f=(f.publishDestinations(r,d,m),"Called visitor.publishDestinations() version 1")):1<this.publishDestinationsVersion?(G.extendArray(h,this.destinations),G.extendArray(this.destinationsPosted,this.destinations),a.messages=[],a.destinations=[],f=(f.publishDestinations({subdomain:r,callback:m,urlDestinations:h}),"Called visitor.publishDestinations() version \\x3e 1")):f=void 0;return f},getPublishDestinationsVersion:function(){if(null!==this.publishDestinationsVersion)return this.publishDestinationsVersion;\nvar a=D.adms.instance,f=-1;return a.publishDestinations(null,null,function(a){a===Object(a)&&(a=a.error,"subdomain is not a populated string."===a?f=1:"Invalid parameters passed."===a&&(f=2))}),this.publishDestinationsVersion=f}},ja={traits:function(a){return B.isValidPdata(a)&&(x.sids instanceof Array||(x.sids=[]),G.extendArray(x.sids,a)),this},pixels:function(a){return B.isValidPdata(a)&&(x.pdata instanceof Array||(x.pdata=[]),G.extendArray(x.pdata,a)),this},logs:function(a){return B.isValidLogdata(a)&&\n(x.logdata!==Object(x.logdata)&&(x.logdata={}),G.extendObject(x.logdata,a)),this},customQueryParams:function(a){return B.isEmptyObject(a)||G.extendObject(x,a,D.reservedKeys),this},signals:function(a,f){var d,h=a;if(!B.isEmptyObject(h)){if(f&&"string"==typeof f)for(d in h={},a)a.hasOwnProperty(d)&&(h[f+d]=a[d]);G.extendObject(x,h,D.reservedKeys)}return this},declaredId:function(a){return D.declaredId.setDeclaredId(a,"request"),this},result:function(a){return"function"==typeof a&&(x.callback=a),this},\nafterResult:function(a){return"function"==typeof a&&(x.postCallbackFn=a),this},useImageRequest:function(){return x.useImageRequest=!0,this},clearData:function(){return x={},this},submit:function(a){return x.isDefaultRequest=!!a,A.submitRequest(x),x={},this},getPartner:function(){return r},getContainerNSID:function(){return u},getEventLog:function(){return t},getState:function(){var a={},f={};return G.extendObject(a,D,{registerRequest:!0}),G.extendObject(f,ia,{requestToProcess:!0,process:!0,sendMessages:!0}),\n{initConfig:d,pendingRequest:x,otherRequestInfo:a,destinationPublishingInfo:f,log:t}},idSync:function(){throw Error("Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance");},aamIdSync:function(){throw Error("Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance");},passData:function(a){return B.isEmptyObject(a)?"Error: json is empty or not an object":(A.defaultCallback(a),a)},getPlatformParams:function(){return D.platformParams},\ngetEventCallConfigParams:function(){var a,f=D,d=f.modStatsParams,h=f.platformParams;if(!d){for(a in d={},h)h.hasOwnProperty(a)&&!f.nonModStatsParams[a]&&(d[a.replace(/^d_/,"")]=h[a]);!0===F?d.coop_safe=1:!1===F&&(d.coop_unsafe=1);f.modStatsParams=d}return d},setAsCoopSafe:function(){return F=!0,this},setAsCoopUnsafe:function(){return F=!1,this},getEventCallIabSignals:function(a){var f;return a!==Object(a)?"Error: config is not an object":"function"!=typeof a.callback?"Error: config.callback is not a function":\n(f=parseInt(a.timeout,10),isNaN(f)&&(f=null),void K.getQueryStringObject(a.callback,f))}},A={corsMetadata:(fa="none","undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&"withCredentials"in new XMLHttpRequest&&(fa="XMLHttpRequest"),{corsType:fa}),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(a){return D.registerRequest(A.createQueuedRequest(a)),!0},createQueuedRequest:function(a){var f,\nd,h,m,n,r=a.callback,q="img",t=a.isDefaultRequest;if(delete a.isDefaultRequest,!B.isEmptyObject(z))for(h in z)z.hasOwnProperty(h)&&null!=(m=z[h])&&""!==m&&(!(h in a)||m in a||m in D.reservedKeys||null==(n=a[h])||""===n||(a[m]=n));return B.isValidPdata(a.sids)||(a.sids=[]),B.isValidPdata(a.pdata)||(a.pdata=[]),B.isValidLogdata(a.logdata)||(a.logdata={}),a.logdataArray=G.convertObjectToKeyValuePairs(a.logdata,"\\x3d",!0),a.logdataArray.push("_ts\\x3d"+(new Date).getTime()),"function"!=typeof r&&(r=this.defaultCallback),\nf=this.makeRequestSrcData(a),(d=this.getCORSInstance())&&!0!==a.useImageRequest&&(q="cors"),{tag:q,src:f.src,corsSrc:f.corsSrc,callbackFn:r,postCallbackFn:a.postCallbackFn,useImageRequest:!!a.useImageRequest,requestData:a,corsInstance:d,corsPostData:f.corsPostData,isDefaultRequest:t}},defaultCallback:function(a,f){var d,h,m,n,r,q,t,u,w;if(ta&&(d=a.stuff)&&d instanceof Array&&(h=d.length))for(m=0;m<h;m++)(n=d[m])&&n===Object(n)&&(r=n.cn,q=n.cv,void 0!==(t=n.ttl)&&""!==t||(t=Math.floor(G.getMaxCookieExpiresInMinutes()/\n60/24)),u=n.dmn||"."+document.domain.replace(/^www\\./,""),w=n.type,r&&(q||"number"==typeof q)&&("var"!==w&&(t=parseInt(t,10))&&!isNaN(t)&&G.setCookie(r,q,1440*t,"/",u,!1),ua.stuffed[r]=q));var x,A;d=a.uuid;B.isPopulatedString(d)&&(B.isEmptyObject(E)||("string"==typeof(x=E.path)&&x.length||(x="/"),A=parseInt(E.days,10),isNaN(A)&&(A=100),G.setCookie(E.name||"aam_did",d,1440*A,x,E.domain||"."+document.domain.replace(/^www\\./,""),!0===E.secure)));D.abortRequests||ia.requestToProcess(a,f)},makeRequestSrcData:function(a){a.sids=\nB.removeEmptyArrayValues(a.sids||[]);a.pdata=B.removeEmptyArrayValues(a.pdata||[]);var f=D,d=f.platformParams,h=G.encodeAndBuildRequest(a.sids,","),m=G.encodeAndBuildRequest(a.pdata,","),n=(a.logdataArray||[]).join("\\x26");delete a.logdataArray;var q,t,u=encodeURIComponent,w=U.IS_HTTPS?"https://":"http://",x=f.declaredId.getDeclaredIdQueryString(),A=f.adms.instance?f.adms.getCustomerIDsQueryString(f.adms.getCustomerIDs()):"",z,E,F,H=[];for(z in a)if(!(z in f.reservedKeys)&&a.hasOwnProperty(z))if(E=\na[z],z=u(z),E instanceof Array){var J=0;for(F=E.length;J<F;J++)H.push(z+"\\x3d"+u(E[J]))}else H.push(z+"\\x3d"+u(E));a=H.length?"\\x26"+H.join("\\x26"):"";z="d_dil_ver\\x3d"+u(DIL.version);f="d_nsid\\x3d"+d.d_nsid+f.getCoopQueryString()+x+A+(h.length?"\\x26d_sid\\x3d"+h:"")+(m.length?"\\x26d_px\\x3d"+m:"")+(n.length?"\\x26d_ld\\x3d"+u(n):"");d="\\x26d_rtbd\\x3d"+d.d_rtbd+"\\x26d_jsonv\\x3d"+d.d_jsonv+"\\x26d_dst\\x3d"+d.d_dst;u=Y?"\\x26h_referer\\x3d"+u(location.href):"";return t=(q=w+r+".demdex.net/event")+"?"+z+"\\x26"+\nf+d+a+u,{corsSrc:q+"?"+z+"\\x26_ts\\x3d"+(new Date).getTime(),src:t,corsPostData:f+d+a+u,isDeclaredIdCall:""!==x}},fireRequest:function(a){if("img"===a.tag)this.fireImage(a);else{var f=D.declaredId;f=f.declaredId.request||f.declaredId.init||{};f={dpid:f.dpid||"",dpuuid:f.dpuuid||""};this.fireCORS(a,f)}},fireImage:function(a){var f,d,h=D;h.abortRequests||(h.firing=!0,f=new Image(0,0),h.sent.push(a),f.onload=function(){h.firing=!1;h.fired.push(a);h.num_of_img_responses++;h.registerRequest()},d=function(f){m=\n"imgAbortOrErrorHandler received the event of type "+f.type;ba.log(m);h.abortRequests=!0;h.firing=!1;h.errored.push(a);h.num_of_img_errors++;h.registerRequest()},f.addEventListener("error",d),f.addEventListener("abort",d),f.src=a.src)},fireCORS:function(a,f){var d=this,h=D,n=this.corsMetadata.corsType,q=a.corsSrc,t=a.corsInstance,u=a.corsPostData,w=a.postCallbackFn,x="function"==typeof w;if(!h.abortRequests&&!Ka){h.firing=!0;try{t.open("post",q,!0),"XMLHttpRequest"===n&&(t.withCredentials=!0,t.setRequestHeader("Content-Type",\n"application/x-www-form-urlencoded"),t.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var p;try{if((p=JSON.parse(this.responseText))!==Object(p)){d.handleCORSError(a,f,"Response is not JSON");break a}}catch(L){d.handleCORSError(a,f,"Error parsing response as JSON");break a}try{var n=a.callbackFn;h.firing=!1;h.fired.push(a);h.num_of_cors_responses++;n(p,f);x&&w(p,f)}catch(L){L.message="DIL handleCORSResponse caught error with message "+L.message;m=L.message;ba.log(m);L.filename=\nL.filename||"dil.js";L.partner=r;DIL.errorModule.handleError(L);try{n({error:L.name+"|"+L.message},f),x&&w({error:L.name+"|"+L.message},f)}catch(wa){}}finally{h.registerRequest()}}}),t.onerror=function(){d.handleCORSError(a,f,"onerror")},t.ontimeout=function(){d.handleCORSError(a,f,"ontimeout")},t.send(u)}catch(Ma){this.handleCORSError(a,f,"try-catch")}h.sent.push(a);h.declaredId.declaredId.request=null}},handleCORSError:function(a,f,d){D.num_of_cors_errors++;D.corsErrorSources.push(d)}},B={isValidPdata:function(a){return!!(a instanceof\nArray&&this.removeEmptyArrayValues(a).length)},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var d in a)if(a.hasOwnProperty(d))return!1;return!0},removeEmptyArrayValues:function(a){var d,h,p=a.length,m=[];for(h=0;h<p;h++)null!=(d=a[h])&&""!==d&&m.push(d);return m},isPopulatedString:function(a){return"string"==typeof a&&a.length}},G={convertObjectToKeyValuePairs:function(a,d,h){var f,m,n=[];for(f in d||(d="\\x3d"),a)a.hasOwnProperty(f)&&\nnull!=(m=a[f])&&""!==m&&n.push(f+d+(h?encodeURIComponent(m):m));return n},encodeAndBuildRequest:function(a,d){return a.map(function(a){return encodeURIComponent(a)}).join(d)},getCookie:function(a){var d,h,m=a+"\\x3d",n=document.cookie.split(";");a=0;for(d=n.length;a<d;a++){for(h=n[a];" "===h.charAt(0);)h=h.substring(1,h.length);if(0===h.indexOf(m))return decodeURIComponent(h.substring(m.length,h.length))}return null},setCookie:function(a,d,h,m,n,q){var f=new Date;h&&(h*=6E4);document.cookie=a+"\\x3d"+\nencodeURIComponent(d)+(h?";expires\\x3d"+(new Date(f.getTime()+h)).toUTCString():"")+(m?";path\\x3d"+m:"")+(n?";domain\\x3d"+n:"")+(q?";secure":"")},extendArray:function(a,d){return a instanceof Array&&d instanceof Array&&(Array.prototype.push.apply(a,d),!0)},extendObject:function(a,d,h){var f;if(a!==Object(a)||d!==Object(d))return!1;for(f in d)!d.hasOwnProperty(f)||!B.isEmptyObject(h)&&f in h||(a[f]=d[f]);return!0},getMaxCookieExpiresInMinutes:function(){return U.SIX_MONTHS_IN_MINUTES},replaceMethodsWithFunction:function(a,\nd){var f;if(a===Object(a)&&"function"==typeof d)for(f in a)a.hasOwnProperty(f)&&"function"==typeof a[f]&&(a[f]=d)}},V=(ha=n.requestController,{exists:null,instance:null,aamIsApproved:null,init:function(){var a=this;this.checkIfExists()?(this.exists=!0,this.instance=window.adobe.optIn,this.instance.fetchPermissions(function(){a.callback()},!0)):this.exists=!1},checkIfExists:function(){return window.adobe===Object(window.adobe)&&window.adobe.optIn===Object(window.adobe.optIn)},callback:function(){this.aamIsApproved=\nthis.instance.isApproved([this.instance.Categories.AAM]);ha.adms.waitForMidToReleaseRequests();ha.adms.getIsOptedOut()},isApproved:function(){return!this.isIabContext()&&!ha.adms.isOptedOut&&(!this.exists||this.aamIsApproved)},isIabContext:function(){return this.instance&&this.instance.isIabContext}});n.optIn=V;var va,ka,W,ea,K=(ka=(va=n).requestController,W=va.optIn,ea={isVendorConsented:null,doesGdprApply:null,consentString:null,queryStringObjectCallbacks:[],init:function(){this.fetchConsentData()},\nhasGoSignal:function(){return!(!(W.isIabContext()&&this.isVendorConsented&&this.doesGdprApply&&"string"==typeof this.consentString&&this.consentString.length)||ka.adms.isOptedOut)},fetchConsentData:function(a,d){var f=this,h={};"function"!=typeof a&&(a=function(){});W.instance&&W.isIabContext()?(d&&(h.timeout=d),W.instance.execute({command:"iabPlugin.fetchConsentData",params:h,callback:function(d,h){h===Object(h)?(f.doesGdprApply=!!h.gdprApplies,f.consentString=h.consentString||""):(f.doesGdprApply=\n!1,f.consentString="");f.isVendorConsented=W.instance.isApproved(W.instance.Categories.AAM);d?a({}):f.checkQueryStringObject(a);ka.adms.waitForMidToReleaseRequests()}})):a({})},getQueryString:function(){return W.isIabContext()?"gdpr\\x3d"+(this.doesGdprApply?1:0)+"\\x26gdpr_consent\\x3d"+this.consentString+"\\x26":""},getQueryStringObject:function(a,d){this.fetchConsentData(a,d)},checkQueryStringObject:function(a){ea.hasGoSignal()&&"function"==typeof a&&a({gdpr:this.doesGdprApply?1:0,gdpr_consent:this.consentString})}});\nn.iab=K;"error"===r&&0===u&&window.addEventListener("load",function(){DIL.windowLoaded=!0});var Ea=!1,la=function(){Ea||(Ea=!0,D.registerRequest(),La())},La=function(){setTimeout(function(){Ba||D.firstRequestHasFired||("function"==typeof Ca?ja.afterResult(Ca).submit(!0):ja.submit(!0))},DIL.constants.TIME_TO_DEFAULT_REQUEST)};h=document;"error"!==r&&(DIL.windowLoaded?la():"complete"!==h.readyState&&"loaded"!==h.readyState?window.addEventListener("load",function(){DIL.windowLoaded=!0;la()}):(DIL.windowLoaded=\n!0,la()));D.declaredId.setDeclaredId(H,"init");V.init();K.init();D.processVisitorAPI();U.IS_IE_LESS_THAN_10&&G.replaceMethodsWithFunction(ja,function(){return this});this.api=ja;this.getStuffedVariable=function(a){var d=ua.stuffed[a];return d||"number"==typeof d||(d=G.getCookie(a))||"number"==typeof d||(d=""),d};this.validators=B;this.helpers=G;this.constants=U;this.log=t;this.pendingRequest=x;this.requestController=D;this.destinationPublishing=ia;this.requestProcs=A;this.units=n;this.initConfig=\nd;this.logger=ba;M&&(this.variables=ua,this.callWindowLoadFunctions=la)},DIL.extendStaticPropertiesAndMethods=function(d){var h;if(d===Object(d))for(h in d)d.hasOwnProperty(h)&&(this[h]=d[h])},DIL.extendStaticPropertiesAndMethods({version:"9.3",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:500},variables:{scriptNodeList:document.getElementsByTagName("script")},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(d){this.windowLoaded="function"==typeof d?!!d():"boolean"!=typeof d||d},create:function(d){try{return new DIL(d)}catch(h){throw Error("Error in attempt to create DIL instance with DIL.create(): "+\nh.message);}},registerDil:function(d,h,q){h=h+"$"+q;h in this.dils||(this.dils[h]=d)},getDil:function(d,h){var q;return"string"!=typeof d&&(d=""),h||(h=0),(q=d+"$"+h)in this.dils?this.dils[q]:Error("The DIL instance with partner \\x3d "+d+" and containerNSID \\x3d "+h+" was not found")},dexGetQSVars:function(d,h,q){h=this.getDil(h,q);return h instanceof this?h.getStuffedVariable(d):""}}),DIL.errorModule=(Y=DIL.create({partner:"error",containerNSID:0,ignoreHardDependencyOnVisitorAPI:!0}),P=!(Z={harvestererror:14138,\ndestpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020}),{activate:function(){P=!0},handleError:function(d){if(!P)return"DIL error module has not been activated";d!==Object(d)&&(d={});var h=d.name?(d.name+"").toLowerCase():"",q=h in Z?Z[h]:Z.noerrortypedefined,m=[];d={name:h,filename:d.filename?d.filename+"":"",partner:d.partner?d.partner+"":"no_partner",site:d.site?d.site+"":document.location.href,\nmessage:d.message?d.message+"":""};return m.push(q),Y.api.pixels(m).logs(d).useImageRequest().submit(),"DIL error report sent"},pixelMap:Z}),DIL.tools={},DIL.modules={helpers:{}});window.DIL&&DIL.tools&&DIL.modules&&(DIL.tools.getMetaTags=function(){var d,h,q,m,w={},t=document.getElementsByTagName("meta");var n=0;for(h=arguments.length;n<h;n++)if(null!==(q=arguments[n]))for(d=0;d<t.length;d++)if((m=t[d]).name===q){w[q]=m.content;break}return w},DIL.tools.decomposeURI=function(d){var h,q=document.createElement("a");\nreturn q.href=d||document.referrer,{hash:q.hash,host:q.host.split(":").shift(),hostname:q.hostname,href:q.href,pathname:q.pathname.replace(/^\\//,""),protocol:q.protocol,search:q.search,uriParams:(h={},q.search.replace(/^(\\/|\\?)?|\\/$/g,"").split("\\x26").map(function(d){d=d.split("\\x3d");h[d.shift()]=d.shift()}),h)}},DIL.tools.getSearchReferrer=function(d,h){var q=DIL.getDil("error"),m=DIL.tools.decomposeURI(d||document.referrer),w=d="",t={queryParam:"q"};h=[h===Object(h)?h:{},{hostPattern:/aol\\./},\n{hostPattern:/ask\\./},{hostPattern:/bing\\./},{hostPattern:/google\\./},{hostPattern:/yahoo\\./,queryParam:"p"}];return(d=h.filter(function(d){return!(!d.hasOwnProperty("hostPattern")||!m.hostname.match(d.hostPattern))}).shift())?{valid:!0,name:m.hostname,keywords:(q.helpers.extendObject(t,d),d=(""+m.search).match(t.queryPattern),w=t.queryPattern?d?d[1]:"":m.uriParams[t.queryParam],decodeURIComponent(w||"").replace(/\\+|%20/g," "))}:{valid:!1,name:"",keywords:""}},DIL.modules.GA=R,DIL.modules.siteCatalyst=\noa,DIL.modules.helpers.handleModuleError=z)}();var adobeDil=DIL.create({partner:"reuters",containerNSID:0,uuidCookie:{name:"aam_uuid",days:30},visitorService:{namespace:"4579BF7A580A3C6A0A495DAF@AdobeOrg"}});</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 172,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  consent: ['list'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var c=window.location.search.split("adstest\\x3d")[1];c=c?c.split("\\x26")[0]:null;var f=document.querySelector(\'meta[name\\x3d"DCSext.DartZone"]\')&&"/4735792/"+document.querySelector(\'meta[name\\x3d"DCSext.DartZone"]\').content,b=document.getElementById("floating-leaderboard");b&&RCOMEmbed.init.leaderboard({dart_zone:f,div_id:"canvas_leaderboard",sizes:[[1100,100],[728,90],[970,250],[970,90],[970,66],[970,180],[970,230],[1,1]],targeting:{type:"leaderboard",adstest:c},ias_enabled:!0},b);(b=\ndocument.getElementById("center-leaderboard"))&&RCOMEmbed.init.leaderboard({dart_zone:f,div_id:"canvas_leaderboard_center",sizes:[[1100,375],[728,90],[970,250],[970,90],[970,66],[940,230],[1,1]],targeting:{type:"leaderboardcenter",adstest:c},ias_enabled:!0},b);window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(d){var g=d.require_consent?d.consent?"0":"1":"0",k=d.require_ccpa_consent&&!d.consent?\n"1":"0";d=document.querySelector("#video-container");var e=document.querySelector("#hpvideomodule");if(e){var r=function(a){var h=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\').content,l=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\').content,m=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\')&&\ndocument.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\').content,n=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\').content,p=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\').content,q=document.querySelector(\'link[rel\\x3d"canonical"]\')&&document.querySelector(\'link[rel\\x3d"canonical"]\').href;\n"undefined"!==typeof a&&(a.topic_channel=h,a.topic_sub_channel=l,a.content_type=m,a.content_channel=n,a.content_type_channel=h,a.edition=p,a.canonical_url=q,a.ad_blocked="0","undefinded"!==typeof window.analytics&&window.analytics.track(a.action,a))},t=e.getAttribute("data-guid"),u=e.getAttribute("data-edition"),v=e.getAttribute("data-dartzone");RCOMEmbed.init.hpvideomodule({channel_id:t,edition:u,dart_zone:v,adstest:c,npa:g,rdp:k,platform:"Desktop",context:"VOD",location:"homepage",autoplay:!0,tracked_element:d,\nonAnalyticsEvent:r},e);g=document.querySelector("#hpvideostickycontainer");RCOMEmbed.init.hpvideostickycontainer({style:{height:"calc(100% - 30px)"},top_threshold:66,tracked_element:d},g)}})});if(b=document.querySelector("#tabbedtickertapes")){var w=b.getAttribute("data-edition"),x=b.getAttribute("data-tabs"),y=b.getAttribute("data-rics"),z=b.getAttribute("data-default-link");RCOMEmbed.init.tabbedtickertapes({edition:w,tabs:x,rics:y,dart_zone:f,adstest:c,default_link:z},b)}})();</script>\n',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 175,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var d=window.location.search.split("adstest\\x3d")[1];d=d?d.split("\\x26")[0]:null;window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(b){var e=b.require_consent?b.consent?"0":"1":"0";b=b.require_ccpa_consent&&!b.consent?"1":"0";var c=document.querySelector("#landing-video-container");if(c){var n=function(a){var f=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\')&&\ndocument.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\').content,g=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\').content,h=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\').content,k=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\').content,\nl=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\').content,m=document.querySelector(\'link[rel\\x3d"canonical"]\')&&document.querySelector(\'link[rel\\x3d"canonical"]\').href;"undefined"!==typeof a&&(a.topic_channel=f,a.topic_sub_channel=g,a.content_type=h,a.content_channel=k,a.edition=l,a.canonical=m,a.ad_blocked="0","undefinded"!==typeof window.analytics&&window.analytics.track(a.action,a))},p=c.getAttribute("data-guid"),\nq=c.getAttribute("data-edition"),r=c.getAttribute("data-dartzone");RCOMEmbed.init.videomodule({channel_id:p,edition:q,dart_zone:r,adstest:d,npa:e,rdp:b,platform:"Desktop",context:"VOD",location:"Legal",translations:{reuters:"Legal",tv:"Video"},onAnalyticsEvent:n},c)}})})})();</script>\n',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 748,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  consent: ['list'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var c=window.location.search.split("adstest\\x3d")[1];c=c?c.split("\\x26")[0]:null;var f=document.querySelector(\'meta[name\\x3d"DCSext.DartZone"]\')&&"/4735792/"+document.querySelector(\'meta[name\\x3d"DCSext.DartZone"]\').content,b=document.getElementById("floating-leaderboard");b&&RCOMEmbed.init.leaderboard({dart_zone:f,div_id:"canvas_leaderboard",sizes:[[1100,100],[728,90],[970,250],[970,90],[970,66],[970,180],[970,230],[1,1]],targeting:{type:"leaderboard",adstest:c},ias_enabled:!0},b);(b=\ndocument.getElementById("center-leaderboard"))&&RCOMEmbed.init.leaderboard({dart_zone:f,div_id:"canvas_leaderboard_center",sizes:[[1100,375],[728,90],[970,250],[970,90],[970,66],[940,230],[1,1]],targeting:{type:"leaderboardcenter",adstest:c},ias_enabled:!0},b);window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(d){var g=d.require_consent?d.consent?"0":"1":"0",k=d.require_ccpa_consent&&!d.consent?\n"1":"0";d=document.querySelector("#video-container");var e=document.querySelector("#hpvideomodule");if(e){var r=function(a){var h=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\').content,l=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\').content,m=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\')&&\ndocument.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\').content,n=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\').content,p=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\').content,q=document.querySelector(\'link[rel\\x3d"canonical"]\')&&document.querySelector(\'link[rel\\x3d"canonical"]\').href;\n"undefined"!==typeof a&&(a.topic_channel=h,a.topic_sub_channel=l,a.content_type=m,a.content_channel=n,a.content_type_channel=h,a.edition=p,a.canonical_url=q,a.ad_blocked="0","undefinded"!==typeof window.analytics&&window.analytics.track(a.action,a))},t=e.getAttribute("data-guid"),u=e.getAttribute("data-edition"),v=e.getAttribute("data-dartzone");RCOMEmbed.init.hpvideomodule({channel_id:t,edition:u,dart_zone:v,adstest:c,npa:g,rdp:k,platform:"Desktop",context:"VOD",location:"homepage",autoplay:!0,tracked_element:d,\nonAnalyticsEvent:r},e);g=document.querySelector("#hpvideostickycontainer");RCOMEmbed.init.hpvideostickycontainer({style:{height:"calc(100% - 30px)"},top_threshold:66,tracked_element:d},g)}})});if(b=document.querySelector("#tabbedtickertapes")){var w=b.getAttribute("data-edition"),x=b.getAttribute("data-tabs"),y=b.getAttribute("data-rics"),z=b.getAttribute("data-default-link");RCOMEmbed.init.tabbedtickertapes({edition:w,tabs:x,rics:y,dart_zone:f,adstest:c,default_link:z},b)}})();</script>\n',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 173,
                },
                {
                  function: '__html',
                  metadata: ['map'],
                  once_per_event: true,
                  vtp_html:
                    '<script type="text/gtmscript">(function(){var c=window.location.search.split("adstest\\x3d")[1];c=c?c.split("\\x26")[0]:null;var b=document.querySelector("#landing-video-container");if(b){var l=function(a){var d=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicChannel"]\').content,e=document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.topicSubChannel"]\').content,\nf=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentType"]\').content,g=document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.contentChannel"]\').content,h=document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\')&&document.querySelector(\'meta[name\\x3d"analyticsAttributes.edition"]\').content,k=document.querySelector(\'link[rel\\x3d"canonical"]\')&&\ndocument.querySelector(\'link[rel\\x3d"canonical"]\').href;"undefined"!==typeof a&&(a.topic_channel=d,a.topic_sub_channel=e,a.content_type=f,a.content_channel=g,a.edition=h,a.canonical=k,a.ad_blocked="0","undefinded"!==typeof window.analytics&&window.analytics.track(a.action,a))};window.bootstrap=window.bootstrap||{};window.bootstrap.queue=window.bootstrap.queue||[];window.bootstrap.queue.push(function(){window.bootstrap.getResults(function(a){var d=a.require_consent?a.consent?"0":"1":"0";a=a.require_ccpa_consent&&\n!a.consent?"1":"0";var e=b.getAttribute("data-guid"),f=b.getAttribute("data-edition"),g=b.getAttribute("data-dartzone");RCOMEmbed.init.videomodule({channel_id:e,edition:f,dart_zone:g,adstest:c,npa:d,rdp:a,platform:"Mobile",context:"VOD",location:"Legal",translations:{reuters:"Legal",tv:"Video"},onAnalyticsEvent:l},b)})})}})();</script>',
                  vtp_supportDocumentWrite: false,
                  vtp_enableIframeMode: false,
                  vtp_enableEditJsMacroBehavior: false,
                  tag_id: 749,
                },
              ],
              predicates: [
                { function: '_eq', arg0: ['macro', 0], arg1: 'true' },
                { function: '_eq', arg0: ['macro', 1], arg1: 'true' },
                { function: '_eq', arg0: ['macro', 2], arg1: 'gtm.dom' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'mobile.reuters.com' },
                { function: '_cn', arg0: ['macro', 3], arg1: 'mobile.reuters.com' },
                { function: '_eq', arg0: ['macro', 2], arg1: 'gtm.js' },
                { function: '_eq', arg0: ['macro', 4], arg1: 'true' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'jp.reuters.com' },
                { function: '_cn', arg0: ['macro', 5], arg1: 'jp.reuters.com/article' },
                { function: '_cn', arg0: ['macro', 3], arg1: 'http://d.reuters.co.jp' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'www.reuters.com' },
                { function: '_sw', arg0: ['macro', 6], arg1: '/assets/' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'cn.reuters.com' },
                { function: '_cn', arg0: ['macro', 5], arg1: 'cn.reuters.com/article' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'uk.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'in.reuters.com' },
                { function: '_cn', arg0: ['macro', 5], arg1: 'in.reuters.com/article' },
                { function: '_cn', arg0: ['macro', 6], arg1: '/brandfeature' },
                { function: '_eq', arg0: ['macro', 2], arg1: 'gtm.scrollDepth' },
                { function: '_re', arg0: ['macro', 7], arg1: '(^$|((^|,)341207_444($|,)))' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'mx.reuters.com' },
                { function: '_cn', arg0: ['macro', 6], arg1: '/brandfeatures/' },
                { function: '_eq', arg0: ['macro', 2], arg1: 'gtm.video' },
                { function: '_re', arg0: ['macro', 7], arg1: '(^$|((^|,)341207_491($|,)))' },
                { function: '_eq', arg0: ['macro', 15], arg1: 'Video' },
                { function: '_eq', arg0: ['macro', 16], arg1: 'play' },
                { function: '_eq', arg0: ['macro', 2], arg1: 'vimeo' },
                { function: '_cn', arg0: ['macro', 16], arg1: 'progress' },
                { function: '_eq', arg0: ['macro', 18], arg1: 'true' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'ca.reuters.com' },
                { function: '_eq', arg0: ['macro', 2], arg1: 'Cookie Consent' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'uk.mobile.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'ca.mobile.reuters.com' },
                { function: '_eq', arg0: ['macro', 19], arg1: 'qa' },
                { function: '_cn', arg0: ['macro', 5], arg1: '/article' },
                { function: '_eq', arg0: ['macro', 2], arg1: 'gtm.load' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'ara.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'lta.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'es.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'disable' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'it.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'ru.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'af.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'de.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'fr.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'in.mobile.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'cn.mobile.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'ar.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'br.reuters.com' },
                { function: '_eq', arg0: ['macro', 3], arg1: 'jp.mobile.reuters.com' },
                { function: '_re', arg0: ['macro', 5], arg1: '.*' },
                { function: '_cn', arg0: ['macro', 3], arg1: 'www.reuters.com' },
                {
                  function: '_re',
                  arg0: ['macro', 5],
                  arg1: '^(http(s)?(:\\/\\/))?(www.|mobile.)?reuters\\.com\\/video(.*)$',
                },
                { function: '_cn', arg0: ['macro', 6], arg1: '/brandfeatures/business-debate' },
                { function: '_cn', arg0: ['macro', 6], arg1: '/brandfeatures/17-goals' },
                { function: '_eq', arg0: ['macro', 6], arg1: '/' },
                {
                  function: '_re',
                  arg0: ['macro', 3],
                  arg1: '(cn|in|jp|de|uk|www|admin).reuters.com',
                },
                {
                  function: '_re',
                  arg0: ['macro', 3],
                  arg1: '(mobile|mobile.uk|mobile.in|mobile.jp).reuters.com',
                },
                { function: '_cn', arg0: ['macro', 6], arg1: '/brandfeatures' },
                { function: '_cn', arg0: ['macro', 6], arg1: '/sponsored/article/' },
                { function: '_eq', arg0: ['macro', 20], arg1: 'true' },
                { function: '_eq', arg0: ['macro', 6], arg1: '/legal' },
                {
                  function: '_cn',
                  arg0: ['macro', 5],
                  arg1: 'https://www.reuters.com/sponsored/article/science-of-survival',
                },
                { function: '_cn', arg0: ['macro', 6], arg1: 'article/sponsored/' },
              ],
              rules: [
                [
                  ['if', 0, 1, 2],
                  ['add', 0, 16],
                ],
                [
                  ['if', 2, 3],
                  ['add', 1, 51],
                ],
                [
                  ['if', 4, 5],
                  ['add', 2, 24],
                ],
                [
                  ['if', 5, 6],
                  ['add', 2],
                ],
                [
                  ['if', 2, 7],
                  ['unless', 8],
                  ['add', 3, 31],
                ],
                [
                  ['if', 2, 9],
                  ['add', 4],
                ],
                [
                  ['if', 5, 10],
                  ['add', 5, 24],
                ],
                [
                  ['if', 2, 12],
                  ['unless', 13],
                  ['add', 6],
                ],
                [
                  ['if', 2, 14],
                  ['add', 7, 22],
                ],
                [
                  ['if', 2, 15],
                  ['unless', 16],
                  ['add', 8, 48],
                ],
                [
                  ['if', 17, 18, 19],
                  ['add', 9],
                ],
                [
                  ['if', 2, 20],
                  ['add', 10, 29],
                ],
                [
                  ['if', 21, 22, 23],
                  ['add', 11],
                ],
                [
                  ['if', 21, 24, 25, 26],
                  ['add', 12],
                ],
                [
                  ['if', 21, 24, 26, 27],
                  ['add', 12],
                ],
                [
                  ['if', 28, 29, 30],
                  ['add', 13, 27],
                ],
                [
                  ['if', 28, 30, 31],
                  ['add', 13, 26],
                ],
                [
                  ['if', 10, 28, 30],
                  ['add', 13, 25],
                ],
                [
                  ['if', 3, 28, 30],
                  ['add', 13, 26],
                ],
                [
                  ['if', 28, 30, 32],
                  ['add', 13],
                ],
                [
                  ['if', 14, 28, 30],
                  ['add', 13, 25],
                ],
                [
                  ['if', 2, 33],
                  ['add', 13],
                ],
                [
                  ['if', 28, 30, 34],
                  ['add', 14],
                ],
                [
                  ['if', 33, 35],
                  ['add', 15],
                ],
                [
                  ['if', 35],
                  ['add', 17],
                ],
                [
                  ['if', 5],
                  ['add', 18, 20],
                ],
                [
                  ['if', 2, 7],
                  ['add', 19, 22],
                ],
                [
                  ['if', 35, 36],
                  ['add', 21, 23],
                ],
                [
                  ['if', 2, 10],
                  ['add', 22],
                ],
                [
                  ['if', 2, 15],
                  ['add', 22, 23],
                ],
                [
                  ['if', 2, 37],
                  ['add', 22, 23],
                ],
                [
                  ['if', 2, 12],
                  ['add', 23],
                ],
                [
                  ['if', 35, 38, 39],
                  ['add', 23],
                ],
                [
                  ['if', 35, 39, 40],
                  ['add', 23],
                ],
                [
                  ['if', 35, 41],
                  ['add', 23],
                ],
                [
                  ['if', 35, 42],
                  ['add', 23],
                ],
                [
                  ['if', 2, 43],
                  ['add', 23],
                ],
                [
                  ['if', 35, 39, 44],
                  ['add', 23],
                ],
                [
                  ['if', 31, 35, 39],
                  ['add', 23],
                ],
                [
                  ['if', 35, 45],
                  ['add', 23],
                ],
                [
                  ['if', 35, 46],
                  ['add', 23],
                ],
                [
                  ['if', 35, 47],
                  ['add', 23],
                ],
                [
                  ['if', 20, 35],
                  ['add', 23],
                ],
                [
                  ['if', 35, 48],
                  ['add', 23],
                ],
                [
                  ['if', 29, 35],
                  ['add', 23],
                ],
                [
                  ['if', 5, 14],
                  ['add', 24],
                ],
                [
                  ['if', 5, 7],
                  ['add', 24],
                ],
                [
                  ['if', 12, 28, 30],
                  ['add', 25],
                ],
                [
                  ['if', 28, 30, 43],
                  ['add', 25],
                ],
                [
                  ['if', 15, 28, 30],
                  ['add', 25],
                ],
                [
                  ['if', 7, 28, 30],
                  ['add', 25],
                ],
                [
                  ['if', 28, 30, 37],
                  ['add', 25],
                ],
                [
                  ['if', 2, 46],
                  ['add', 26],
                ],
                [
                  ['if', 28, 30, 45],
                  ['add', 26],
                ],
                [
                  ['if', 28, 30, 49],
                  ['add', 26],
                ],
                [
                  ['if', 28, 30, 42],
                  ['add', 27],
                ],
                [
                  ['if', 28, 30, 47],
                  ['add', 27],
                ],
                [
                  ['if', 28, 30, 36],
                  ['add', 27],
                ],
                [
                  ['if', 28, 30, 48],
                  ['add', 27],
                ],
                [
                  ['if', 28, 30, 38],
                  ['add', 27],
                ],
                [
                  ['if', 28, 30, 44],
                  ['add', 27],
                ],
                [
                  ['if', 28, 30, 40],
                  ['add', 27],
                ],
                [
                  ['if', 28, 30, 41],
                  ['add', 27],
                ],
                [
                  ['if', 2],
                  ['add', 28],
                ],
                [
                  ['if', 35, 50],
                  ['add', 30, 34],
                ],
                [
                  ['if', 2, 49],
                  ['add', 31],
                ],
                [
                  ['if', 2, 51],
                  ['add', 32, 49, 51],
                ],
                [
                  ['if', 2, 52],
                  ['add', 33],
                ],
                [
                  ['if', 2, 53],
                  ['add', 35],
                ],
                [
                  ['if', 2, 54],
                  ['add', 35],
                ],
                [
                  ['if', 2, 55, 56],
                  ['unless', 33],
                  ['add', 36],
                ],
                [
                  ['if', 2, 33, 55, 56],
                  ['add', 37],
                ],
                [
                  ['if', 2, 33, 55, 57],
                  ['add', 38],
                ],
                [
                  ['if', 2, 55, 57],
                  ['unless', 33],
                  ['add', 39],
                ],
                [
                  ['if', 2, 58],
                  ['add', 40],
                ],
                [
                  ['if', 2, 59],
                  ['add', 40],
                ],
                [
                  ['if', 30, 51, 60],
                  ['add', 41],
                ],
                [
                  ['if', 5, 33],
                  ['add', 41],
                ],
                [
                  ['if', 4, 30, 60],
                  ['add', 41],
                ],
                [
                  ['if', 2, 33, 56, 61],
                  ['add', 42],
                ],
                [
                  ['if', 2, 33, 57, 61],
                  ['add', 43],
                ],
                [
                  ['if', 1, 2],
                  ['add', 44],
                ],
                [
                  ['if', 2],
                  ['unless', 33],
                  ['add', 45],
                ],
                [
                  ['if', 2, 56, 61],
                  ['unless', 33],
                  ['add', 46],
                ],
                [
                  ['if', 2, 57, 61],
                  ['unless', 33],
                  ['add', 47],
                ],
                [
                  ['if', 2, 42],
                  ['add', 48],
                ],
                [
                  ['if', 2, 36],
                  ['add', 48],
                ],
                [
                  ['if', 2, 40],
                  ['add', 48],
                ],
                [
                  ['if', 2, 41],
                  ['add', 48],
                ],
                [
                  ['if', 2, 47],
                  ['add', 48],
                ],
                [
                  ['if', 2, 29],
                  ['add', 48],
                ],
                [
                  ['if', 1, 2, 43],
                  ['add', 48],
                ],
                [
                  ['if', 1, 2, 14],
                  ['add', 48],
                ],
                [
                  ['if', 1, 2, 37],
                  ['add', 48],
                ],
                [
                  ['if', 1, 2, 48],
                  ['add', 48],
                ],
                [
                  ['if', 1, 2, 38],
                  ['add', 48],
                ],
                [
                  ['if', 1, 2, 44],
                  ['add', 48],
                ],
                [
                  ['if', 5, 62],
                  ['add', 50],
                ],
                [
                  ['if', 2, 63],
                  ['add', 52],
                ],
                [
                  ['if', 2, 11],
                  ['block', 5],
                ],
              ],
            },
            runtime: [
              [
                50,
                '__hjtc',
                [46, 'a'],
                [52, 'b', ['require', 'createArgumentsQueue']],
                [52, 'c', ['require', 'encodeUriComponent']],
                [52, 'd', ['require', 'injectScript']],
                [52, 'e', ['require', 'makeString']],
                [52, 'f', ['require', 'setInWindow']],
                ['b', 'hj', 'hj.q'],
                [52, 'g', [17, [15, 'a'], 'hotjar_site_id']],
                ['f', '_hjSettings', [8, 'hjid', [15, 'g'], 'hjsv', 7, 'scriptSource', 'gtm']],
                [
                  'd',
                  [
                    0,
                    [0, 'https://static.hotjar.com/c/hotjar-', ['c', ['e', [15, 'g']]]],
                    '.js?sv=7',
                  ],
                  [17, [15, 'a'], 'gtmOnSuccess'],
                  [17, [15, 'a'], 'gtmOnFailure'],
                ],
              ],
            ],
            permissions: {
              __hjtc: {
                access_globals: {
                  keys: [
                    { key: 'hj', read: true, write: true, execute: false },
                    { key: 'hj.q', read: true, write: true, execute: false },
                    { key: '_hjSettings', read: true, write: true, execute: false },
                  ],
                },
                inject_script: { urls: ['https://static.hotjar.com/c/hotjar-*'] },
              },
            },
            security_groups: { nonGoogleScripts: ['__hjtc'] },
          };
          var aa,
            da = function (a) {
              var b = 0;
              return function () {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
              };
            },
            ea =
              'function' == typeof Object.create
                ? Object.create
                : function (a) {
                    var b = function () {};
                    b.prototype = a;
                    return new b();
                  },
            fa;
          if ('function' == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
          else {
            var ha;
            a: {
              var ia = { Bg: !0 },
                ja = {};
              try {
                ja.__proto__ = ia;
                ha = ja.Bg;
                break a;
              } catch (a) {}
              ha = !1;
            }
            fa = ha
              ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                  return a;
                }
              : null;
          }
          var ka = fa,
            la = function (a, b) {
              a.prototype = ea(b.prototype);
              a.prototype.constructor = a;
              if (ka) ka(a, b);
              else
                for (var c in b)
                  if ('prototype' != c)
                    if (Object.defineProperties) {
                      var d = Object.getOwnPropertyDescriptor(b, c);
                      d && Object.defineProperty(a, c, d);
                    } else a[c] = b[c];
              a.ri = b.prototype;
            },
            ma = this || self,
            qa = function (a) {
              if (a && a != ma) return oa(a.document);
              null === pa && (pa = oa(ma.document));
              return pa;
            },
            ra = /^[\w+/_-]+[=]{0,2}$/,
            pa = null,
            oa = function (a) {
              var b = a.querySelector && a.querySelector('script[nonce]');
              if (b) {
                var c = b.nonce || b.getAttribute('nonce');
                if (c && ra.test(c)) return c;
              }
              return '';
            },
            ua = function (a) {
              var b = typeof a;
              return 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
            },
            xa = function (a, b) {
              function c () {}
              c.prototype = b.prototype;
              a.ri = b.prototype;
              a.prototype = new c();
              a.prototype.constructor = a;
              a.Ki = function (d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                  g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g);
              };
            },
            ya = function (a) {
              return a;
            };
          var za = function (a, b) {
            this.a = a;
            this.i = b;
          };
          var Aa = function (a) {
              return (
                ('number' === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
                ('string' === typeof a && '-' !== a[0] && a === '' + parseInt(a, 10))
              );
            },
            Ba = function () {
              this.B = {};
              this.m = !1;
              this.F = {};
            };
          Ba.prototype.get = function (a) {
            return this.B['dust.' + a];
          };
          Ba.prototype.set = function (a, b) {
            this.m || ((a = 'dust.' + a), this.F.hasOwnProperty(a) || (this.B[a] = b));
          };
          Ba.prototype.has = function (a) {
            return this.B.hasOwnProperty('dust.' + a);
          };
          var Ca = function (a) {
            var b = [],
              c;
            for (c in a.B) a.B.hasOwnProperty(c) && b.push(c.substr(5));
            return b;
          };
          var k = function (a) {
            this.i = new Ba();
            this.a = [];
            a = a || [];
            for (var b in a)
              a.hasOwnProperty(b) &&
                (Aa(b) ? (this.a[Number(b)] = a[Number(b)]) : this.i.set(b, a[b]));
          };
          aa = k.prototype;
          aa.toString = function (a) {
            if (a && 0 <= a.indexOf(this)) return '';
            for (var b = [], c = 0; c < this.a.length; c++) {
              var d = this.a[c];
              null === d || void 0 === d
                ? b.push('')
                : d instanceof k
                ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
                : b.push(d.toString());
            }
            return b.join(',');
          };
          aa.set = function (a, b) {
            if ('length' === a) {
              if (!Aa(b)) throw Error('RangeError: Length property must be a valid integer.');
              this.a.length = Number(b);
            } else Aa(a) ? (this.a[Number(a)] = b) : this.i.set(a, b);
          };
          aa.get = function (a) {
            return 'length' === a ? this.length() : Aa(a) ? this.a[Number(a)] : this.i.get(a);
          };
          aa.length = function () {
            return this.a.length;
          };
          aa.Bc = function () {
            for (var a = Ca(this.i), b = 0; b < this.a.length; b++) a.push(b + '');
            return new k(a);
          };
          var Da = function (a, b) {
            if (Aa(b)) delete a.a[Number(b)];
            else {
              var c = a.i,
                d;
              d = 'dust.' + b;
              c.m || c.F.hasOwnProperty(d) || delete c.B[d];
            }
          };
          aa = k.prototype;
          aa.pop = function () {
            return this.a.pop();
          };
          aa.push = function (a) {
            return this.a.push.apply(this.a, Array.prototype.slice.call(arguments));
          };
          aa.shift = function () {
            return this.a.shift();
          };
          aa.splice = function (a, b, c) {
            return new k(this.a.splice.apply(this.a, arguments));
          };
          aa.unshift = function (a) {
            return this.a.unshift.apply(this.a, Array.prototype.slice.call(arguments));
          };
          aa.has = function (a) {
            return (Aa(a) && this.a.hasOwnProperty(a)) || this.i.has(a);
          };
          var Ea = function () {
            function a (f, g) {
              if (b[f]) {
                if (b[f].sc + g > b[f].max) throw Error('Quota exceeded');
                b[f].sc += g;
              }
            }
            var b = {},
              c = void 0,
              d = void 0,
              e = {
                Rh: function (f) {
                  c = f;
                },
                df: function () {
                  c && a(c, 1);
                },
                Th: function (f) {
                  d = f;
                },
                La: function (f) {
                  d && a(d, f);
                },
                mi: function (f, g) {
                  b[f] = b[f] || { sc: 0 };
                  b[f].max = g;
                },
                rh: function (f) {
                  return (b[f] && b[f].sc) || 0;
                },
                reset: function () {
                  b = {};
                },
                Zg: a,
              };
            e.onFnConsume = e.Rh;
            e.consumeFn = e.df;
            e.onStorageConsume = e.Th;
            e.consumeStorage = e.La;
            e.setMax = e.mi;
            e.getConsumed = e.rh;
            e.reset = e.reset;
            e.consume = e.Zg;
            return e;
          };
          var Fa = function (a, b) {
            this.F = a;
            this.R = function (c, d, e) {
              return c.apply(d, e);
            };
            this.m = b;
            this.i = new Ba();
            this.a = this.B = void 0;
          };
          Fa.prototype.add = function (a, b) {
            Ga(this, a, b, !1);
          };
          var Ga = function (a, b, c, d) {
            if (!a.i.m)
              if (
                (a.F.La(
                  ('string' === typeof b ? b.length : 1) + ('string' === typeof c ? c.length : 1)
                ),
                d)
              ) {
                var e = a.i;
                e.set(b, c);
                e.F['dust.' + b] = !0;
              } else a.i.set(b, c);
          };
          Fa.prototype.set = function (a, b) {
            this.i.m ||
              (!this.i.has(a) && this.m && this.m.has(a)
                ? this.m.set(a, b)
                : (this.F.La(
                    ('string' === typeof a ? a.length : 1) + ('string' === typeof b ? b.length : 1)
                  ),
                  this.i.set(a, b)));
          };
          Fa.prototype.get = function (a) {
            return this.i.has(a) ? this.i.get(a) : this.m ? this.m.get(a) : void 0;
          };
          Fa.prototype.has = function (a) {
            return !!this.i.has(a) || !(!this.m || !this.m.has(a));
          };
          var Ha = function (a) {
            var b = new Fa(a.F, a);
            a.B && (b.B = a.B);
            b.R = a.R;
            b.a = a.a;
            return b;
          };
          var Ia = function () {},
            Ja = function (a) {
              return 'function' == typeof a;
            },
            m = function (a) {
              return 'string' == typeof a;
            },
            Ka = function (a) {
              return 'number' == typeof a && !isNaN(a);
            },
            La = function (a) {
              return '[object Array]' == Object.prototype.toString.call(Object(a));
            },
            Na = function (a, b) {
              if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return 'number' == typeof c ? c : -1;
              }
              for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
              return -1;
            },
            Oa = function (a, b) {
              if (a && La(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
            },
            Pa = function (a, b) {
              if (!Ka(a) || !Ka(b) || a > b) (a = 0), (b = 2147483647);
              return Math.floor(Math.random() * (b - a + 1) + a);
            },
            Ra = function (a, b) {
              for (var c = new Qa(), d = 0; d < a.length; d++) c.set(a[d], !0);
              for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
              return !1;
            },
            Sa = function (a, b) {
              for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
            },
            Ta = function (a) {
              return (
                !!a &&
                ('[object Arguments]' == Object.prototype.toString.call(a) ||
                  Object.prototype.hasOwnProperty.call(a, 'callee'))
              );
            },
            Va = function (a) {
              return Math.round(Number(a)) || 0;
            },
            Wa = function (a) {
              return 'false' == String(a).toLowerCase() ? !1 : !!a;
            },
            Xa = function (a) {
              var b = [];
              if (La(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
              return b;
            },
            Ya = function (a) {
              return a ? a.replace(/^\s+|\s+$/g, '') : '';
            },
            Za = function () {
              return new Date().getTime();
            },
            Qa = function () {
              this.prefix = 'gtm.';
              this.values = {};
            };
          Qa.prototype.set = function (a, b) {
            this.values[this.prefix + a] = b;
          };
          Qa.prototype.get = function (a) {
            return this.values[this.prefix + a];
          };
          var $a = function (a, b, c) {
              return a && a.hasOwnProperty(b) ? a[b] : c;
            },
            ab = function (a) {
              var b = !1;
              return function () {
                if (!b)
                  try {
                    a();
                  } catch (c) {}
                b = !0;
              };
            },
            cb = function (a, b) {
              for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            },
            db = function (a) {
              for (var b in a) if (a.hasOwnProperty(b)) return !0;
              return !1;
            },
            eb = function (a, b) {
              for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d]), c.push.apply(c, b[a[d]] || []);
              return c;
            },
            gb = function (a, b) {
              var c = B;
              b = b || [];
              for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <= Na(b, d)) return;
              }
              return d;
            },
            hb = function (a, b) {
              for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++)
                d = d[e[f]] = {};
              d[e[e.length - 1]] = b;
              return c;
            },
            ib = function (a) {
              var b = [];
              Sa(a, function (c, d) {
                10 > c.length && d && b.push(c);
              });
              return b.join(',');
            };
          var jb = function (a, b) {
            Ba.call(this);
            this.a = a;
            this.R = b;
          };
          la(jb, Ba);
          jb.prototype.toString = function () {
            return this.a;
          };
          jb.prototype.Bc = function () {
            return new k(Ca(this));
          };
          jb.prototype.i = function (a, b) {
            a.F.df();
            return this.R.apply(mb(this, a), Array.prototype.slice.call(arguments, 1));
          };
          var mb = function (a, b) {
            var c = function (d, e) {
              this.i = d;
              this.m = e;
            };
            c.prototype.a = function (d) {
              var e = this.m;
              return La(d) ? nb(e, d) : d;
            };
            c.prototype.F = function (d) {
              return ob(this.m, d);
            };
            c.prototype.B = function () {
              return b.F;
            };
            return new c(a, b);
          };
          jb.prototype.Pa = function (a, b) {
            try {
              return this.i.apply(this, Array.prototype.slice.call(arguments, 0));
            } catch (c) {}
          };
          var ob = function (a, b) {
              for (var c, d = 0; d < b.length && !((c = nb(a, b[d])), c instanceof za); d++);
              return c;
            },
            nb = function (a, b) {
              try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof jb))
                  throw Error('Attempting to execute non-function ' + b[0] + '.');
                return c.i.apply(c, [a].concat(b.slice(1)));
              } catch (e) {
                var d = a.B;
                d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
                throw e;
              }
            };
          var pb = function () {
            Ba.call(this);
          };
          la(pb, Ba);
          pb.prototype.Bc = function () {
            return new k(Ca(this));
          };
          var qb = {
            control: function (a, b) {
              return new za(a, this.a(b));
            },
            fn: function (a, b, c) {
              var d = this.m,
                e = this.a(b);
              if (!(e instanceof k))
                throw Error('Error: non-List value given for Fn argument names.');
              var f = Array.prototype.slice.call(arguments, 2);
              this.B().La(a.length + f.length);
              return new jb(
                a,
                (function () {
                  return function (g) {
                    var h = Ha(d);
                    void 0 === h.a && (h.a = this.m.a);
                    for (
                      var l = Array.prototype.slice.call(arguments, 0), n = 0;
                      n < l.length;
                      n++
                    )
                      if (((l[n] = this.a(l[n])), l[n] instanceof za)) return l[n];
                    for (var p = e.get('length'), q = 0; q < p; q++)
                      q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add('arguments', new k(l));
                    var t = ob(h, f);
                    if (t instanceof za) return 'return' === t.a ? t.i : t;
                  };
                })()
              );
            },
            list: function (a) {
              var b = this.B();
              b.La(arguments.length);
              for (var c = new k(), d = 0; d < arguments.length; d++) {
                var e = this.a(arguments[d]);
                'string' === typeof e && b.La(e.length ? e.length - 1 : 0);
                c.push(e);
              }
              return c;
            },
            map: function (a) {
              for (var b = this.B(), c = new pb(), d = 0; d < arguments.length - 1; d += 2) {
                var e = this.a(arguments[d]) + '',
                  f = this.a(arguments[d + 1]),
                  g = e.length;
                g += 'string' === typeof f ? f.length : 1;
                b.La(g);
                c.set(e, f);
              }
              return c;
            },
            undefined: function () {},
          };
          var rb = function () {
              this.m = Ea();
              this.a = new Fa(this.m);
            },
            sb = function (a, b, c) {
              var d = new jb(b, c);
              d.m = !0;
              a.a.set(b, d);
            };
          rb.prototype.yc = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 0);
            return this.i(c);
          };
          rb.prototype.i = function (a) {
            for (var b, c = 0; c < arguments.length; c++) b = nb(this.a, arguments[c]);
            return b;
          };
          rb.prototype.B = function (a, b) {
            var c = Ha(this.a);
            c.a = a;
            for (var d, e = 1; e < arguments.length; e++) d = d = nb(c, arguments[e]);
            return d;
          };
          var tb = function (a) {
            if (a instanceof tb) return a;
            this.qa = a;
          };
          tb.prototype.toString = function () {
            return String(this.qa);
          };
          var ub = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
            vb = function (a) {
              if (null == a) return String(a);
              var b = ub.exec(Object.prototype.toString.call(Object(a)));
              return b ? b[1].toLowerCase() : 'object';
            },
            wb = function (a, b) {
              return Object.prototype.hasOwnProperty.call(Object(a), b);
            },
            xb = function (a) {
              if (!a || 'object' != vb(a) || a.nodeType || a == a.window) return !1;
              try {
                if (
                  a.constructor &&
                  !wb(a, 'constructor') &&
                  !wb(a.constructor.prototype, 'isPrototypeOf')
                )
                  return !1;
              } catch (c) {
                return !1;
              }
              for (var b in a);
              return void 0 === b || wb(a, b);
            },
            E = function (a, b) {
              var c = b || ('array' == vb(a) ? [] : {}),
                d;
              for (d in a)
                if (wb(a, d)) {
                  var e = a[d];
                  'array' == vb(e)
                    ? ('array' != vb(c[d]) && (c[d] = []), (c[d] = E(e, c[d])))
                    : xb(e)
                    ? (xb(c[d]) || (c[d] = {}), (c[d] = E(e, c[d])))
                    : (c[d] = e);
                }
              return c;
            };
          var Ab = function (a, b, c) {
              var d = [],
                e = [],
                f = function (h, l) {
                  for (var n = Ca(h), p = 0; p < n.length; p++) l[n[p]] = g(h.get(n[p]));
                },
                g = function (h) {
                  var l = Na(d, h);
                  if (-1 < l) return e[l];
                  if (h instanceof k) {
                    var n = [];
                    d.push(h);
                    e.push(n);
                    for (var p = h.Bc(), q = 0; q < p.length(); q++)
                      n[p.get(q)] = g(h.get(p.get(q)));
                    return n;
                  }
                  if (h instanceof pb) {
                    var t = {};
                    d.push(h);
                    e.push(t);
                    f(h, t);
                    return t;
                  }
                  if (h instanceof jb) {
                    var r = function () {
                      for (
                        var u = Array.prototype.slice.call(arguments, 0), v = 0;
                        v < u.length;
                        v++
                      )
                        u[v] = zb(u[v], b, !!c);
                      var x = b ? b.F : Ea(),
                        y = new Fa(x);
                      b && (y.a = b.a);
                      return g(h.i.apply(h, [y].concat(u)));
                    };
                    d.push(h);
                    e.push(r);
                    f(h, r);
                    return r;
                  }
                  switch (typeof h) {
                    case 'boolean':
                    case 'number':
                    case 'string':
                    case 'undefined':
                      return h;
                    case 'object':
                      if (null === h) return null;
                  }
                };
              return g(a);
            },
            zb = function (a, b, c) {
              var d = [],
                e = [],
                f = function (h, l) {
                  for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]));
                },
                g = function (h) {
                  var l = Na(d, h);
                  if (-1 < l) return e[l];
                  if (La(h) || Ta(h)) {
                    var n = new k([]);
                    d.push(h);
                    e.push(n);
                    for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                    return n;
                  }
                  if (xb(h)) {
                    var q = new pb();
                    d.push(h);
                    e.push(q);
                    f(h, q);
                    return q;
                  }
                  if ('function' === typeof h) {
                    var t = new jb('', function (u) {
                      for (
                        var v = Array.prototype.slice.call(arguments, 0), x = 0;
                        x < v.length;
                        x++
                      )
                        v[x] = Ab(this.a(v[x]), b, !!c);
                      return g((0, this.m.R)(h, h, v));
                    });
                    d.push(h);
                    e.push(t);
                    f(h, t);
                    return t;
                  }
                  var r = typeof h;
                  if (null === h || 'string' === r || 'number' === r || 'boolean' === r) return h;
                };
              return g(a);
            };
          var Bb = function (a) {
              for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
              return b;
            },
            Cb = function (a) {
              if (void 0 === a || La(a) || xb(a)) return !0;
              switch (typeof a) {
                case 'boolean':
                case 'number':
                case 'string':
                case 'function':
                  return !0;
              }
              return !1;
            };
          var Db = {
            supportedMethods: 'concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString'.split(
              ' '
            ),
            concat: function (a, b) {
              for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
              for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof k)
                  for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
              return new k(c);
            },
            every: function (a, b) {
              for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.i(a, this.get(d), d, this)) return !1;
              return !0;
            },
            filter: function (a, b) {
              for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.i(a, this.get(e), e, this) && d.push(this.get(e));
              return new k(d);
            },
            forEach: function (a, b) {
              for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.i(a, this.get(d), d, this);
            },
            hasOwnProperty: function (a, b) {
              return this.has(b);
            },
            indexOf: function (a, b, c) {
              var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
              0 > e && (e = Math.max(d + e, 0));
              for (var f = e; f < d; f++) if (this.has(f) && this.get(f) === b) return f;
              return -1;
            },
            join: function (a, b) {
              for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
              return c.join(b);
            },
            lastIndexOf: function (a, b, c) {
              var d = this.length(),
                e = d - 1;
              void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
              for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
              return -1;
            },
            map: function (a, b) {
              for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.i(a, this.get(e), e, this));
              return new k(d);
            },
            pop: function () {
              return this.pop();
            },
            push: function (a, b) {
              return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
            },
            reduce: function (a, b, c) {
              var d = this.length(),
                e,
                f = 0;
              if (void 0 !== c) e = c;
              else {
                if (0 === d) throw Error('TypeError: Reduce on List with no elements.');
                for (var g = 0; g < d; g++)
                  if (this.has(g)) {
                    e = this.get(g);
                    f = g + 1;
                    break;
                  }
                if (g === d) throw Error('TypeError: Reduce on List with no elements.');
              }
              for (var h = f; h < d; h++) this.has(h) && (e = b.i(a, e, this.get(h), h, this));
              return e;
            },
            reduceRight: function (a, b, c) {
              var d = this.length(),
                e,
                f = d - 1;
              if (void 0 !== c) e = c;
              else {
                if (0 === d) throw Error('TypeError: ReduceRight on List with no elements.');
                for (var g = 1; g <= d; g++)
                  if (this.has(d - g)) {
                    e = this.get(d - g);
                    f = d - (g + 1);
                    break;
                  }
                if (g > d) throw Error('TypeError: ReduceRight on List with no elements.');
              }
              for (var h = f; 0 <= h; h--) this.has(h) && (e = b.i(a, e, this.get(h), h, this));
              return e;
            },
            reverse: function () {
              for (var a = Bb(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : Da(this, c);
              return this;
            },
            shift: function () {
              return this.shift();
            },
            slice: function (a, b, c) {
              var d = this.length();
              void 0 === b && (b = 0);
              b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
              c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
              c = Math.max(b, c);
              for (var e = [], f = b; f < c; f++) e.push(this.get(f));
              return new k(e);
            },
            some: function (a, b) {
              for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.i(a, this.get(d), d, this)) return !0;
              return !1;
            },
            sort: function (a, b) {
              var c = Bb(this);
              void 0 === b
                ? c.sort()
                : c.sort(function (e, f) {
                    return Number(b.i(a, e, f));
                  });
              for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : Da(this, d);
            },
            splice: function (a, b, c, d) {
              return this.splice.apply(
                this,
                Array.prototype.splice.call(arguments, 1, arguments.length - 1)
              );
            },
            toString: function () {
              return this.toString();
            },
            unshift: function (a, b) {
              return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
            },
          };
          var Eb = 'charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim'.split(
              ' '
            ),
            Fb = new za('break'),
            Gb = new za('continue'),
            Hb = function (a, b) {
              return this.a(a) + this.a(b);
            },
            Ib = function (a, b) {
              return this.a(a) && this.a(b);
            },
            Jb = function (a, b, c) {
              a = this.a(a);
              b = this.a(b);
              c = this.a(c);
              if (!(c instanceof k))
                throw Error('Error: Non-List argument given to Apply instruction.');
              if (null === a || void 0 === a)
                throw Error("TypeError: Can't read property " + b + ' of ' + a + '.');
              if ('boolean' === typeof a || 'number' === typeof a) {
                if ('toString' === b) return a.toString();
                throw Error('TypeError: ' + a + '.' + b + ' is not a function.');
              }
              if ('string' === typeof a) {
                if (0 <= Na(Eb, b)) return zb(a[b].apply(a, Bb(c)), this.m);
                throw Error('TypeError: ' + b + ' is not a function');
              }
              if (a instanceof k) {
                if (a.has(b)) {
                  var d = a.get(b);
                  if (d instanceof jb) {
                    var e = Bb(c);
                    e.unshift(this.m);
                    return d.i.apply(d, e);
                  }
                  throw Error('TypeError: ' + b + ' is not a function');
                }
                if (0 <= Na(Db.supportedMethods, b)) {
                  var f = Bb(c);
                  f.unshift(this.m);
                  return Db[b].apply(a, f);
                }
              }
              if (a instanceof jb || a instanceof pb) {
                if (a.has(b)) {
                  var g = a.get(b);
                  if (g instanceof jb) {
                    var h = Bb(c);
                    h.unshift(this.m);
                    return g.i.apply(g, h);
                  }
                  throw Error('TypeError: ' + b + ' is not a function');
                }
                if ('toString' === b) return a instanceof jb ? a.a : a.toString();
                if ('hasOwnProperty' === b) return a.has.apply(a, Bb(c));
              }
              if (a instanceof tb && 'toString' === b) return a.toString();
              throw Error("TypeError: Object has no '" + b + "' property.");
            },
            Kb = function (a, b) {
              a = this.a(a);
              if ('string' !== typeof a) throw Error('Invalid key name given for assignment.');
              var c = this.m;
              if (!c.has(a)) throw Error('Attempting to assign to undefined value ' + b);
              var d = this.a(b);
              c.set(a, d);
              return d;
            },
            Lb = function (a) {
              var b = Ha(this.m),
                c = ob(b, Array.prototype.slice.apply(arguments));
              if (c instanceof za) return c;
            },
            Mb = function () {
              return Fb;
            },
            Nb = function (a) {
              for (var b = this.a(a), c = 0; c < b.length; c++) {
                var d = this.a(b[c]);
                if (d instanceof za) return d;
              }
            },
            Ob = function (a) {
              for (var b = this.m, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ('string' === typeof d) {
                  var e = this.a(arguments[c + 1]);
                  Ga(b, d, e, !0);
                }
              }
            },
            Pb = function () {
              return Gb;
            },
            Qb = function (a, b, c) {
              var d = new k();
              b = this.a(b);
              for (var e = 0; e < b.length; e++) d.push(b[e]);
              var f = [51, a, d].concat(
                Array.prototype.splice.call(arguments, 2, arguments.length - 2)
              );
              this.m.add(a, this.a(f));
            },
            Rb = function (a, b) {
              return this.a(a) / this.a(b);
            },
            Sb = function (a, b) {
              a = this.a(a);
              b = this.a(b);
              var c = a instanceof tb,
                d = b instanceof tb;
              return c || d ? (c && d ? a.qa == b.qa : !1) : a == b;
            },
            Tb = function (a) {
              for (var b, c = 0; c < arguments.length; c++) b = this.a(arguments[c]);
              return b;
            };
          function Ub (a, b, c, d) {
            for (var e = 0; e < b(); e++) {
              var f = a(c(e)),
                g = ob(f, d);
              if (g instanceof za) {
                if ('break' === g.a) break;
                if ('return' === g.a) return g;
              }
            }
          }
          function Vb (a, b, c) {
            if ('string' === typeof b)
              return Ub(
                a,
                function () {
                  return b.length;
                },
                function (f) {
                  return f;
                },
                c
              );
            if (b instanceof pb || b instanceof k || b instanceof jb) {
              var d = b.Bc(),
                e = d.length();
              return Ub(
                a,
                function () {
                  return e;
                },
                function (f) {
                  return d.get(f);
                },
                c
              );
            }
          }
          var Wb = function (a, b, c) {
              a = this.a(a);
              b = this.a(b);
              c = this.a(c);
              var d = this.m;
              return Vb(
                function (e) {
                  d.set(a, e);
                  return d;
                },
                b,
                c
              );
            },
            Xb = function (a, b, c) {
              a = this.a(a);
              b = this.a(b);
              c = this.a(c);
              var d = this.m;
              return Vb(
                function (e) {
                  var f = Ha(d);
                  Ga(f, a, e, !0);
                  return f;
                },
                b,
                c
              );
            },
            Yb = function (a, b, c) {
              a = this.a(a);
              b = this.a(b);
              c = this.a(c);
              var d = this.m;
              return Vb(
                function (e) {
                  var f = Ha(d);
                  f.add(a, e);
                  return f;
                },
                b,
                c
              );
            },
            $b = function (a, b, c) {
              a = this.a(a);
              b = this.a(b);
              c = this.a(c);
              var d = this.m;
              return Zb(
                function (e) {
                  d.set(a, e);
                  return d;
                },
                b,
                c
              );
            },
            ac = function (a, b, c) {
              a = this.a(a);
              b = this.a(b);
              c = this.a(c);
              var d = this.m;
              return Zb(
                function (e) {
                  var f = Ha(d);
                  Ga(f, a, e, !0);
                  return f;
                },
                b,
                c
              );
            },
            bc = function (a, b, c) {
              a = this.a(a);
              b = this.a(b);
              c = this.a(c);
              var d = this.m;
              return Zb(
                function (e) {
                  var f = Ha(d);
                  f.add(a, e);
                  return f;
                },
                b,
                c
              );
            };
          function Zb (a, b, c) {
            if ('string' === typeof b)
              return Ub(
                a,
                function () {
                  return b.length;
                },
                function (d) {
                  return b[d];
                },
                c
              );
            if (b instanceof k)
              return Ub(
                a,
                function () {
                  return b.length();
                },
                function (d) {
                  return b.get(d);
                },
                c
              );
            throw new TypeError('The value is not iterable.');
          }
          var cc = function (a, b, c, d) {
              function e (p, q) {
                for (var t = 0; t < f.length(); t++) {
                  var r = f.get(t);
                  q.add(r, p.get(r));
                }
              }
              var f = this.a(a);
              if (!(f instanceof k))
                throw Error('TypeError: Non-List argument given to ForLet instruction.');
              var g = this.m;
              d = this.a(d);
              var h = Ha(g);
              for (e(g, h); nb(h, b); ) {
                var l = ob(h, d);
                if (l instanceof za) {
                  if ('break' === l.a) break;
                  if ('return' === l.a) return l;
                }
                var n = Ha(g);
                e(h, n);
                nb(n, c);
                h = n;
              }
            },
            dc = function (a) {
              a = this.a(a);
              var b = this.m,
                c = !1;
              if (c && !b.has(a)) throw new ReferenceError(a + ' is not defined.');
              return b.get(a);
            },
            ec = function (a, b) {
              var c;
              a = this.a(a);
              b = this.a(b);
              if (void 0 === a || null === a)
                throw Error('TypeError: cannot access property of ' + a + '.');
              if (a instanceof pb || a instanceof k || a instanceof jb) c = a.get(b);
              else if ('string' === typeof a)
                'length' === b ? (c = a.length) : Aa(b) && (c = a[b]);
              else if (a instanceof tb) return;
              return c;
            },
            gc = function (a, b) {
              return this.a(a) > this.a(b);
            },
            hc = function (a, b) {
              return this.a(a) >= this.a(b);
            },
            ic = function (a, b) {
              a = this.a(a);
              b = this.a(b);
              a instanceof tb && (a = a.qa);
              b instanceof tb && (b = b.qa);
              return a === b;
            },
            jc = function (a, b) {
              return !ic.call(this, a, b);
            },
            kc = function (a, b, c) {
              var d = [];
              this.a(a) ? (d = this.a(b)) : c && (d = this.a(c));
              var e = this.F(d);
              if (e instanceof za) return e;
            },
            mc = function (a, b) {
              return this.a(a) < this.a(b);
            },
            nc = function (a, b) {
              return this.a(a) <= this.a(b);
            },
            oc = function (a, b) {
              return this.a(a) % this.a(b);
            },
            pc = function (a, b) {
              return this.a(a) * this.a(b);
            },
            qc = function (a) {
              return -this.a(a);
            },
            rc = function (a) {
              return !this.a(a);
            },
            sc = function (a, b) {
              return !Sb.call(this, a, b);
            },
            tc = function () {
              return null;
            },
            uc = function (a, b) {
              return this.a(a) || this.a(b);
            },
            vc = function (a, b) {
              var c = this.a(a);
              this.a(b);
              return c;
            },
            wc = function (a) {
              return this.a(a);
            },
            xc = function (a) {
              return Array.prototype.slice.apply(arguments);
            },
            yc = function (a) {
              return new za('return', this.a(a));
            },
            zc = function (a, b, c) {
              a = this.a(a);
              b = this.a(b);
              c = this.a(c);
              if (null === a || void 0 === a)
                throw Error("TypeError: Can't set property " + b + ' of ' + a + '.');
              (a instanceof jb || a instanceof k || a instanceof pb) && a.set(b, c);
              return c;
            },
            Ac = function (a, b) {
              return this.a(a) - this.a(b);
            },
            Bc = function (a, b, c) {
              a = this.a(a);
              var d = this.a(b),
                e = this.a(c);
              if (!La(d) || !La(e)) throw Error('Error: Malformed switch instruction.');
              for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === this.a(d[h]))
                  if (((f = this.a(e[h])), f instanceof za)) {
                    var l = f.a;
                    if ('break' === l) return;
                    if ('return' === l || 'continue' === l) return f;
                  } else g = !0;
              if (
                e.length === d.length + 1 &&
                ((f = this.a(e[e.length - 1])),
                f instanceof za && ('return' === f.a || 'continue' === f.a))
              )
                return f;
            },
            Dc = function (a, b, c) {
              return this.a(a) ? this.a(b) : this.a(c);
            },
            Ec = function (a) {
              a = this.a(a);
              return a instanceof jb ? 'function' : typeof a;
            },
            Fc = function (a) {
              for (var b = this.m, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                'string' !== typeof d || b.add(d, void 0);
              }
            },
            Gc = function (a, b, c, d) {
              var e = this.a(d);
              if (this.a(c)) {
                var f = this.F(e);
                if (f instanceof za) {
                  if ('break' === f.a) return;
                  if ('return' === f.a) return f;
                }
              }
              for (; this.a(a); ) {
                var g = this.F(e);
                if (g instanceof za) {
                  if ('break' === g.a) break;
                  if ('return' === g.a) return g;
                }
                this.a(b);
              }
            },
            Hc = function (a) {
              return ~Number(this.a(a));
            },
            Ic = function (a, b) {
              return Number(this.a(a)) << Number(this.a(b));
            },
            Jc = function (a, b) {
              return Number(this.a(a)) >> Number(this.a(b));
            },
            Lc = function (a, b) {
              return Number(this.a(a)) >>> Number(this.a(b));
            },
            Mc = function (a, b) {
              return Number(this.a(a)) & Number(this.a(b));
            },
            Nc = function (a, b) {
              return Number(this.a(a)) ^ Number(this.a(b));
            },
            Oc = function (a, b) {
              return Number(this.a(a)) | Number(this.a(b));
            };
          var Qc = function () {
            this.a = new rb();
            Pc(this);
          };
          Qc.prototype.yc = function (a) {
            return Rc(this.a.i(a));
          };
          var Tc = function (a, b) {
              return Rc(Sc.a.B(a, b));
            },
            Pc = function (a) {
              var b = function (d, e) {
                var f = a.a,
                  g = String(e);
                qb.hasOwnProperty(d) && sb(f, g || d, qb[d]);
              };
              b('control', 49);
              b('fn', 51);
              b('list', 7);
              b('map', 8);
              b('undefined', 44);
              var c = function (d, e) {
                sb(a.a, String(d), e);
              };
              c(0, Hb);
              c(1, Ib);
              c(2, Jb);
              c(3, Kb);
              c(53, Lb);
              c(4, Mb);
              c(5, Nb);
              c(52, Ob);
              c(6, Pb);
              c(9, Nb);
              c(50, Qb);
              c(10, Rb);
              c(12, Sb);
              c(13, Tb);
              c(47, Wb);
              c(54, Xb);
              c(55, Yb);
              c(63, cc);
              c(64, $b);
              c(65, ac);
              c(66, bc);
              c(15, dc);
              c(16, ec);
              c(17, ec);
              c(18, gc);
              c(19, hc);
              c(20, ic);
              c(21, jc);
              c(22, kc);
              c(23, mc);
              c(24, nc);
              c(25, oc);
              c(26, pc);
              c(27, qc);
              c(28, rc);
              c(29, sc);
              c(45, tc);
              c(30, uc);
              c(32, vc);
              c(33, vc);
              c(34, wc);
              c(35, wc);
              c(46, xc);
              c(36, yc);
              c(43, zc);
              c(37, Ac);
              c(38, Bc);
              c(39, Dc);
              c(40, Ec);
              c(41, Fc);
              c(42, Gc);
              c(58, Hc);
              c(57, Ic);
              c(60, Jc);
              c(61, Lc);
              c(56, Mc);
              c(62, Nc);
              c(59, Oc);
            },
            Vc = function () {
              var a = Sc,
                b = Uc();
              sb(a.a, 'require', b);
            },
            Wc = function (a, b) {
              a.a.a.R = b;
            };
          function Rc (a) {
            if (
              a instanceof za ||
              a instanceof jb ||
              a instanceof k ||
              a instanceof pb ||
              a instanceof tb ||
              null === a ||
              void 0 === a ||
              'string' === typeof a ||
              'number' === typeof a ||
              'boolean' === typeof a
            )
              return a;
          }
          var Xc = [],
            Yc = {
              '\0': '&#0;',
              '"': '&quot;',
              '&': '&amp;',
              "'": '&#39;',
              '<': '&lt;',
              '>': '&gt;',
              '\t': '&#9;',
              '\n': '&#10;',
              '\x0B': '&#11;',
              '\f': '&#12;',
              '\r': '&#13;',
              ' ': '&#32;',
              '-': '&#45;',
              '/': '&#47;',
              '=': '&#61;',
              '`': '&#96;',
              '\x85': '&#133;',
              '\xA0': '&#160;',
              '\u2028': '&#8232;',
              '\u2029': '&#8233;',
            },
            Zc = function (a) {
              return Yc[a];
            },
            $c = /[\x00\x22\x26\x27\x3c\x3e]/g;
          var dd = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
            ed = {
              '\0': '\\x00',
              '\b': '\\x08',
              '\t': '\\t',
              '\n': '\\n',
              '\x0B': '\\x0b',
              '\f': '\\f',
              '\r': '\\r',
              '"': '\\x22',
              '&': '\\x26',
              "'": '\\x27',
              '/': '\\/',
              '<': '\\x3c',
              '=': '\\x3d',
              '>': '\\x3e',
              '\\': '\\\\',
              '\x85': '\\x85',
              '\u2028': '\\u2028',
              '\u2029': '\\u2029',
              $: '\\x24',
              '(': '\\x28',
              ')': '\\x29',
              '*': '\\x2a',
              '+': '\\x2b',
              ',': '\\x2c',
              '-': '\\x2d',
              '.': '\\x2e',
              ':': '\\x3a',
              '?': '\\x3f',
              '[': '\\x5b',
              ']': '\\x5d',
              '^': '\\x5e',
              '{': '\\x7b',
              '|': '\\x7c',
              '}': '\\x7d',
            },
            fd = function (a) {
              return ed[a];
            };
          Xc[7] = function (a) {
            return String(a).replace(dd, fd);
          };
          Xc[8] = function (a) {
            if (null == a) return ' null ';
            switch (typeof a) {
              case 'boolean':
              case 'number':
                return ' ' + a + ' ';
              default:
                return "'" + String(String(a)).replace(dd, fd) + "'";
            }
          };
          var pd = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
            qd = {
              '\0': '%00',
              '\x01': '%01',
              '\x02': '%02',
              '\x03': '%03',
              '\x04': '%04',
              '\x05': '%05',
              '\x06': '%06',
              '\x07': '%07',
              '\b': '%08',
              '\t': '%09',
              '\n': '%0A',
              '\x0B': '%0B',
              '\f': '%0C',
              '\r': '%0D',
              '\x0E': '%0E',
              '\x0F': '%0F',
              '\x10': '%10',
              '\x11': '%11',
              '\x12': '%12',
              '\x13': '%13',
              '\x14': '%14',
              '\x15': '%15',
              '\x16': '%16',
              '\x17': '%17',
              '\x18': '%18',
              '\x19': '%19',
              '\x1A': '%1A',
              '\x1B': '%1B',
              '\x1C': '%1C',
              '\x1D': '%1D',
              '\x1E': '%1E',
              '\x1F': '%1F',
              ' ': '%20',
              '"': '%22',
              "'": '%27',
              '(': '%28',
              ')': '%29',
              '<': '%3C',
              '>': '%3E',
              '\\': '%5C',
              '{': '%7B',
              '}': '%7D',
              '\x7F': '%7F',
              '\x85': '%C2%85',
              '\xA0': '%C2%A0',
              '\u2028': '%E2%80%A8',
              '\u2029': '%E2%80%A9',
              '\uFF01': '%EF%BC%81',
              '\uFF03': '%EF%BC%83',
              '\uFF04': '%EF%BC%84',
              '\uFF06': '%EF%BC%86',
              '\uFF07': '%EF%BC%87',
              '\uFF08': '%EF%BC%88',
              '\uFF09': '%EF%BC%89',
              '\uFF0A': '%EF%BC%8A',
              '\uFF0B': '%EF%BC%8B',
              '\uFF0C': '%EF%BC%8C',
              '\uFF0F': '%EF%BC%8F',
              '\uFF1A': '%EF%BC%9A',
              '\uFF1B': '%EF%BC%9B',
              '\uFF1D': '%EF%BC%9D',
              '\uFF1F': '%EF%BC%9F',
              '\uFF20': '%EF%BC%A0',
              '\uFF3B': '%EF%BC%BB',
              '\uFF3D': '%EF%BC%BD',
            },
            rd = function (a) {
              return qd[a];
            };
          Xc[16] = function (a) {
            return a;
          };
          var td;
          var ud = [],
            vd = [],
            wd = [],
            xd = [],
            yd = [],
            zd = {},
            Ad,
            Bd,
            Cd,
            Dd = function (a, b) {
              var c = {};
              c['function'] = '__' + a;
              for (var d in b) b.hasOwnProperty(d) && (c['vtp_' + d] = b[d]);
              return c;
            },
            Ed = function (a, b) {
              var c = a['function'];
              if (!c) throw Error('Error: No function name given for function call.');
              var d = zd[c],
                e = {},
                f;
              for (f in a)
                a.hasOwnProperty(f) &&
                  0 === f.indexOf('vtp_') &&
                  (d && b && b.af && b.af(a[f]), (e[void 0 !== d ? f : f.substr(4)] = a[f]));
              return void 0 !== d ? d(e) : td(c, e, b);
            },
            Gd = function (a, b, c) {
              c = c || [];
              var d = {},
                e;
              for (e in a) a.hasOwnProperty(e) && (d[e] = Fd(a[e], b, c));
              return d;
            },
            Hd = function (a) {
              var b = a['function'];
              if (!b) throw 'Error: No function name given for function call.';
              var c = zd[b];
              return c ? c.priorityOverride || 0 : 0;
            },
            Fd = function (a, b, c) {
              if (La(a)) {
                var d;
                switch (a[0]) {
                  case 'function_id':
                    return a[1];
                  case 'list':
                    d = [];
                    for (var e = 1; e < a.length; e++) d.push(Fd(a[e], b, c));
                    return d;
                  case 'macro':
                    var f = a[1];
                    if (c[f]) return;
                    var g = ud[f];
                    if (!g || b.yd(g)) return;
                    c[f] = !0;
                    try {
                      var h = Gd(g, b, c);
                      h.vtp_gtmEventId = b.id;
                      d = Ed(h, b);
                      Cd && (d = Cd.ah(d, h));
                    } catch (y) {
                      b.rf && b.rf(y, Number(f)), (d = !1);
                    }
                    c[f] = !1;
                    return d;
                  case 'map':
                    d = {};
                    for (var l = 1; l < a.length; l += 2) d[Fd(a[l], b, c)] = Fd(a[l + 1], b, c);
                    return d;
                  case 'template':
                    d = [];
                    for (var n = !1, p = 1; p < a.length; p++) {
                      var q = Fd(a[p], b, c);
                      Bd && (n = n || q === Bd.ic);
                      d.push(q);
                    }
                    return Bd && n ? Bd.eh(d) : d.join('');
                  case 'escape':
                    d = Fd(a[1], b, c);
                    if (Bd && La(a[1]) && 'macro' === a[1][0] && Bd.Dh(a)) return Bd.Yh(d);
                    d = String(d);
                    for (var t = 2; t < a.length; t++) Xc[a[t]] && (d = Xc[a[t]](d));
                    return d;
                  case 'tag':
                    var r = a[1];
                    if (!xd[r]) throw Error('Unable to resolve tag reference ' + r + '.');
                    return (d = { hf: a[2], index: r });
                  case 'zb':
                    var u = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                    u['function'] = a[1];
                    var v = Id(u, b, c),
                      x = !!a[4];
                    return x || 2 !== v ? x !== (1 === v) : null;
                  default:
                    throw Error('Attempting to expand unknown Value type: ' + a[0] + '.');
                }
              }
              return a;
            },
            Id = function (a, b, c) {
              try {
                return Ad(Gd(a, b, c));
              } catch (d) {
                JSON.stringify(a);
              }
              return 2;
            };
          var Jd = (function () {
            var a = function (b) {
              return {
                toString: function () {
                  return b;
                },
              };
            };
            return {
              Gf: a('consent'),
              Xd: a('convert_case_to'),
              Yd: a('convert_false_to'),
              Zd: a('convert_null_to'),
              $d: a('convert_true_to'),
              ae: a('convert_undefined_to'),
              Ci: a('debug_mode_metadata'),
              Ka: a('function'),
              rg: a('instance_name'),
              sg: a('live_only'),
              ug: a('malware_disabled'),
              vg: a('metadata'),
              Fi: a('original_vendor_template_id'),
              yg: a('once_per_event'),
              Re: a('once_per_load'),
              Ve: a('setup_tags'),
              We: a('tag_id'),
              Xe: a('teardown_tags'),
            };
          })();
          var Kd = function (a, b, c) {
            var d;
            d = Error.call(this);
            this.message = d.message;
            'stack' in d && (this.stack = d.stack);
            this.i = a;
            this.a = c;
          };
          la(Kd, Error);
          function Ld (a, b) {
            if (La(a)) {
              Object.defineProperty(a, 'context', { value: { line: b[0] } });
              for (var c = 1; c < a.length; c++) Ld(a[c], b[c]);
            }
          }
          var Md = function (a, b) {
            var c;
            c = Error.call(this);
            this.message = c.message;
            'stack' in c && (this.stack = c.stack);
            this.m = a;
            this.i = b;
            this.a = [];
          };
          la(Md, Error);
          var Nd = function (a) {
            var b = a.a.slice();
            a.i && (b = a.i(b));
            return b;
          };
          var Pd = function () {
            return function (a, b) {
              a instanceof Md || (a = new Md(a, Od));
              b && a.a.push(b);
              throw a;
            };
          };
          function Od (a) {
            if (!a.length) return a;
            a.push({ id: 'main', line: 0 });
            for (var b = a.length - 1; 0 < b; b--) Ka(a[b].id) && a.splice(b++, 1);
            for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
            a.splice(0, 1);
            return a;
          }
          var Qd = null,
            Td = function (a) {
              function b (q) {
                for (var t = 0; t < q.length; t++) d[q[t]] = !0;
              }
              var c = [],
                d = [];
              Qd = Rd(a);
              for (var e = 0; e < vd.length; e++) {
                var f = vd[e],
                  g = Sd(f);
                if (g) {
                  for (var h = f.add || [], l = 0; l < h.length; l++) c[h[l]] = !0;
                  b(f.block || []);
                } else null === g && b(f.block || []);
              }
              for (var n = [], p = 0; p < xd.length; p++) c[p] && !d[p] && (n[p] = !0);
              return n;
            },
            Sd = function (a) {
              for (var b = a['if'] || [], c = 0; c < b.length; c++) {
                var d = Qd(b[c]);
                if (0 === d) return !1;
                if (2 === d) return null;
              }
              for (var e = a.unless || [], f = 0; f < e.length; f++) {
                var g = Qd(e[f]);
                if (2 === g) return null;
                if (1 === g) return !1;
              }
              return !0;
            },
            Rd = function (a) {
              var b = [];
              return function (c) {
                void 0 === b[c] && (b[c] = Id(wd[c], a));
                return b[c];
              };
            };
          var Ud = {
            ah: function (a, b) {
              b[Jd.Xd] &&
                'string' === typeof a &&
                (a = 1 == b[Jd.Xd] ? a.toLowerCase() : a.toUpperCase());
              b.hasOwnProperty(Jd.Zd) && null === a && (a = b[Jd.Zd]);
              b.hasOwnProperty(Jd.ae) && void 0 === a && (a = b[Jd.ae]);
              b.hasOwnProperty(Jd.$d) && !0 === a && (a = b[Jd.$d]);
              b.hasOwnProperty(Jd.Yd) && !1 === a && (a = b[Jd.Yd]);
              return a;
            },
          };
          var Vd = function () {
            this.a = {};
          };
          function Wd (a, b, c, d) {
            if (a)
              for (var e = 0; e < a.length; e++) {
                var f = void 0,
                  g = 'A policy function denied the permission request';
                try {
                  (f = a[e].call(void 0, b, c, d)), (g += '.');
                } catch (h) {
                  g =
                    'string' === typeof h
                      ? g + (': ' + h)
                      : h instanceof Error
                      ? g + (': ' + h.message)
                      : g + '.';
                }
                if (!f) throw new Kd(c, d, g);
              }
          }
          function Xd (a, b, c) {
            return function () {
              var d = arguments[0];
              if (d) {
                var e = a.a[d],
                  f = a.a.all;
                if (e || f) {
                  var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                  Wd(e, b, d, g);
                  Wd(f, b, d, g);
                }
              }
            };
          }
          var ae = function (a) {
              var b = Yd.C,
                c = this;
              this.i = new Vd();
              this.a = {};
              var d = {},
                e = Xd(this.i, b, function () {
                  var f = arguments[0];
                  return f && d[f]
                    ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
                    : {};
                });
              Sa(a, function (f, g) {
                var h = {};
                Sa(g, function (l, n) {
                  var p = Zd(l, n);
                  h[l] = p.assert;
                  d[l] || (d[l] = p.K);
                });
                c.a[f] = function (l, n) {
                  var p = h[l];
                  if (!p) throw $d(l, {}, 'The requested permission ' + l + ' is not configured.');
                  var q = Array.prototype.slice.call(arguments, 0);
                  p.apply(void 0, q);
                  e.apply(void 0, q);
                };
              });
            },
            ce = function (a) {
              return be.a[a] || function () {};
            };
          function Zd (a, b) {
            var c = Dd(a, b);
            c.vtp_permissionName = a;
            c.vtp_createPermissionError = $d;
            try {
              return Ed(c);
            } catch (d) {
              return {
                assert: function (e) {
                  throw new Kd(e, {}, 'Permission ' + e + ' is unknown.');
                },
                K: function () {
                  for (var e = {}, f = 0; f < arguments.length; ++f)
                    e['arg' + (f + 1)] = arguments[f];
                  return e;
                },
              };
            }
          }
          function $d (a, b, c) {
            return new Kd(a, b, c);
          }
          var de = !1;
          var ee = {};
          ee.xi = Wa('');
          ee.kh = Wa('');
          var fe = de,
            ge = ee.kh,
            he = ee.xi;
          var we = function (a, b) {
              return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
            },
            xe = function (a, b) {
              var c = '*' === b.charAt(b.length - 1) || '/' === b || '/*' === b;
              we(b, '/*') && (b = b.slice(0, -2));
              we(b, '?') && (b = b.slice(0, -1));
              var d = b.split('*');
              if (!c && 1 === d.length) return a === d[0];
              for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                  e = a.indexOf(g, e);
                  if (-1 === e || (0 === f && 0 !== e)) return !1;
                  e += g.length;
                }
              }
              if (c || e === a.length) return !0;
              var h = d[d.length - 1];
              return a.lastIndexOf(h) === a.length - h.length;
            },
            ye = /^[a-z0-9-]+$/i,
            ze = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
            Be = function (a, b) {
              var c;
              if (!(c = !Ae(a))) {
                var d;
                a: {
                  var e = a.hostname.split('.');
                  if (2 > e.length) d = !1;
                  else {
                    for (var f = 0; f < e.length; f++)
                      if (!ye.exec(e[f])) {
                        d = !1;
                        break a;
                      }
                    d = !0;
                  }
                }
                c = !d;
              }
              if (c) return !1;
              for (var g = 0; g < b.length; g++) {
                var h;
                var l = a,
                  n = b[g];
                if (!ze.exec(n)) throw Error('Invalid Wildcard');
                var p = n.slice(8),
                  q = p.slice(0, p.indexOf('/')),
                  t;
                var r = l.hostname,
                  u = q;
                if (0 !== u.indexOf('*.')) t = r.toLowerCase() === u.toLowerCase();
                else {
                  u = u.slice(2);
                  var v = r.toLowerCase().indexOf(u.toLowerCase());
                  t =
                    -1 === v
                      ? !1
                      : r.length === u.length
                      ? !0
                      : r.length !== u.length + v
                      ? !1
                      : '.' === r[v - 1];
                }
                if (t) {
                  var x = p.slice(p.indexOf('/'));
                  h = xe(l.pathname + l.search, x) ? !0 : !1;
                } else h = !1;
                if (h) return !0;
              }
              return !1;
            },
            Ae = function (a) {
              return 'https:' === a.protocol && (!a.port || '443' === a.port);
            };
          var Ce,
            De = function () {};
          (function () {
            function a (h, l) {
              h = h || '';
              l = l || {};
              for (var n in b)
                b.hasOwnProperty(n) &&
                  (l.Og && (l['fix_' + n] = !0), (l.kf = l.kf || l['fix_' + n]));
              var p = {
                  comment: /^\x3c!--/,
                  endTag: /^<\//,
                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                  startTag: /^</,
                  chars: /^[^<]/,
                },
                q = {
                  comment: function () {
                    var r = h.indexOf('-->');
                    if (0 <= r) return { content: h.substr(4, r), length: r + 3 };
                  },
                  endTag: function () {
                    var r = h.match(d);
                    if (r) return { tagName: r[1], length: r[0].length };
                  },
                  atomicTag: function () {
                    var r = q.startTag();
                    if (r) {
                      var u = h.slice(r.length);
                      if (u.match(new RegExp('</\\s*' + r.tagName + '\\s*>', 'i'))) {
                        var v = u.match(
                          new RegExp('([\\s\\S]*?)</\\s*' + r.tagName + '\\s*>', 'i')
                        );
                        if (v)
                          return {
                            tagName: r.tagName,
                            Y: r.Y,
                            content: v[1],
                            length: v[0].length + r.length,
                          };
                      }
                    }
                  },
                  startTag: function () {
                    var r = h.match(c);
                    if (r) {
                      var u = {};
                      r[2].replace(e, function (v, x, y, w, z) {
                        var A = y || w || z || (f.test(x) && x) || null,
                          C = document.createElement('div');
                        C.innerHTML = A;
                        u[x] = C.textContent || C.innerText || A;
                      });
                      return { tagName: r[1], Y: u, Nc: !!r[3], length: r[0].length };
                    }
                  },
                  chars: function () {
                    var r = h.indexOf('<');
                    return { length: 0 <= r ? r : h.length };
                  },
                },
                t = function () {
                  for (var r in p)
                    if (p[r].test(h)) {
                      var u = q[r]();
                      return u
                        ? ((u.type = u.type || r),
                          (u.text = h.substr(0, u.length)),
                          (h = h.slice(u.length)),
                          u)
                        : null;
                    }
                };
              l.kf &&
                (function () {
                  var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                    u = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                    v = [];
                  v.qf = function () {
                    return this[this.length - 1];
                  };
                  v.Ad = function (C) {
                    var D = this.qf();
                    return D && D.tagName && D.tagName.toUpperCase() === C.toUpperCase();
                  };
                  v.$g = function (C) {
                    for (var D = 0, F; (F = this[D]); D++) if (F.tagName === C) return !0;
                    return !1;
                  };
                  var x = function (C) {
                      C && 'startTag' === C.type && (C.Nc = r.test(C.tagName) || C.Nc);
                      return C;
                    },
                    y = t,
                    w = function () {
                      h = '</' + v.pop().tagName + '>' + h;
                    },
                    z = {
                      startTag: function (C) {
                        var D = C.tagName;
                        'TR' === D.toUpperCase() && v.Ad('TABLE')
                          ? ((h = '<TBODY>' + h), A())
                          : l.Pi && u.test(D) && v.$g(D)
                          ? v.Ad(D)
                            ? w()
                            : ((h = '</' + C.tagName + '>' + h), A())
                          : C.Nc || v.push(C);
                      },
                      endTag: function (C) {
                        v.qf() ? (l.mh && !v.Ad(C.tagName) ? w() : v.pop()) : l.mh && (y(), A());
                      },
                    },
                    A = function () {
                      var C = h,
                        D = x(y());
                      h = C;
                      if (D && z[D.type]) z[D.type](D);
                    };
                  t = function () {
                    A();
                    return x(y());
                  };
                })();
              return {
                append: function (r) {
                  h += r;
                },
                ci: t,
                Ti: function (r) {
                  for (var u; (u = t()) && (!r[u.type] || !1 !== r[u.type](u)); );
                },
                clear: function () {
                  var r = h;
                  h = '';
                  return r;
                },
                Ui: function () {
                  return h;
                },
                stack: [],
              };
            }
            var b = (function () {
                var h = {},
                  l = this.document.createElement('div');
                l.innerHTML = '<P><I></P></I>';
                h.Wi = '<P><I></P></I>' !== l.innerHTML;
                l.innerHTML = '<P><i><P></P></i></P>';
                h.Vi = 2 === l.childNodes.length;
                return h;
              })(),
              c = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
              d = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
              e = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
              f = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
            a.supports = b;
            for (var g in b);
            Ce = a;
          })();
          (function () {
            function a () {}
            function b (q) {
              return void 0 !== q && null !== q;
            }
            function c (q, t, r) {
              var u,
                v = (q && q.length) || 0;
              for (u = 0; u < v; u++) t.call(r, q[u], u);
            }
            function d (q, t, r) {
              for (var u in q) q.hasOwnProperty(u) && t.call(r, u, q[u]);
            }
            function e (q, t) {
              d(t, function (r, u) {
                q[r] = u;
              });
              return q;
            }
            function f (q, t) {
              q = q || {};
              d(t, function (r, u) {
                b(q[r]) || (q[r] = u);
              });
              return q;
            }
            function g (q) {
              try {
                return n.call(q);
              } catch (r) {
                var t = [];
                c(q, function (u) {
                  t.push(u);
                });
                return t;
              }
            }
            var h = {
                Fg: a,
                Gg: a,
                Hg: a,
                Ig: a,
                Pg: a,
                Qg: function (q) {
                  return q;
                },
                done: a,
                error: function (q) {
                  throw q;
                },
                fi: !1,
              },
              l = this;
            if (!l.postscribe) {
              var n = Array.prototype.slice,
                p = (function () {
                  function q (r, u, v) {
                    var x = 'data-ps-' + u;
                    if (2 === arguments.length) {
                      var y = r.getAttribute(x);
                      return b(y) ? String(y) : y;
                    }
                    b(v) && '' !== v ? r.setAttribute(x, v) : r.removeAttribute(x);
                  }
                  function t (r, u) {
                    var v = r.ownerDocument;
                    e(this, {
                      root: r,
                      options: u,
                      Ub: v.defaultView || v.parentWindow,
                      cb: v,
                      Ec: Ce('', { Og: !0 }),
                      nd: [r],
                      Kd: '',
                      Ld: v.createElement(r.nodeName),
                      Rb: [],
                      Sa: [],
                    });
                    q(this.Ld, 'proxyof', 0);
                  }
                  t.prototype.write = function () {
                    [].push.apply(this.Sa, arguments);
                    for (var r; !this.vc && this.Sa.length; )
                      (r = this.Sa.shift()), 'function' === typeof r ? this.Vg(r) : this.Ud(r);
                  };
                  t.prototype.Vg = function (r) {
                    var u = { type: 'function', value: r.name || r.toString() };
                    this.Fd(u);
                    r.call(this.Ub, this.cb);
                    this.sf(u);
                  };
                  t.prototype.Ud = function (r) {
                    this.Ec.append(r);
                    for (
                      var u, v = [], x, y;
                      (u = this.Ec.ci()) &&
                      !(x =
                        u && 'tagName' in u ? !!~u.tagName.toLowerCase().indexOf('script') : !1) &&
                      !(y =
                        u && 'tagName' in u ? !!~u.tagName.toLowerCase().indexOf('style') : !1);

                    )
                      v.push(u);
                    this.Ai(v);
                    x && this.wh(u);
                    y && this.xh(u);
                  };
                  t.prototype.Ai = function (r) {
                    var u = this.Sg(r);
                    u.Ze &&
                      ((u.wd = this.Kd + u.Ze),
                      (this.Kd += u.ai),
                      (this.Ld.innerHTML = u.wd),
                      this.yi());
                  };
                  t.prototype.Sg = function (r) {
                    var u = this.nd.length,
                      v = [],
                      x = [],
                      y = [];
                    c(r, function (w) {
                      v.push(w.text);
                      if (w.Y) {
                        if (!/^noscript$/i.test(w.tagName)) {
                          var z = u++;
                          x.push(w.text.replace(/(\/?>)/, ' data-ps-id=' + z + ' $1'));
                          'ps-script' !== w.Y.id &&
                            'ps-style' !== w.Y.id &&
                            y.push(
                              'atomicTag' === w.type
                                ? ''
                                : '<' + w.tagName + ' data-ps-proxyof=' + z + (w.Nc ? ' />' : '>')
                            );
                        }
                      } else x.push(w.text), y.push('endTag' === w.type ? w.text : '');
                    });
                    return { Xi: r, raw: v.join(''), Ze: x.join(''), ai: y.join('') };
                  };
                  t.prototype.yi = function () {
                    for (var r, u = [this.Ld]; b((r = u.shift())); ) {
                      var v = 1 === r.nodeType;
                      if (!v || !q(r, 'proxyof')) {
                        v && ((this.nd[q(r, 'id')] = r), q(r, 'id', null));
                        var x = r.parentNode && q(r.parentNode, 'proxyof');
                        x && this.nd[x].appendChild(r);
                      }
                      u.unshift.apply(u, g(r.childNodes));
                    }
                  };
                  t.prototype.wh = function (r) {
                    var u = this.Ec.clear();
                    u && this.Sa.unshift(u);
                    r.src = r.Y.src || r.Y.Hi;
                    r.src && this.Rb.length ? (this.vc = r) : this.Fd(r);
                    var v = this;
                    this.zi(r, function () {
                      v.sf(r);
                    });
                  };
                  t.prototype.xh = function (r) {
                    var u = this.Ec.clear();
                    u && this.Sa.unshift(u);
                    r.type = r.Y.type || r.Y.TYPE || 'text/css';
                    this.Bi(r);
                    u && this.write();
                  };
                  t.prototype.Bi = function (r) {
                    var u = this.Ug(r);
                    this.Ah(u);
                    r.content &&
                      (u.styleSheet && !u.sheet
                        ? (u.styleSheet.cssText = r.content)
                        : u.appendChild(this.cb.createTextNode(r.content)));
                  };
                  t.prototype.Ug = function (r) {
                    var u = this.cb.createElement(r.tagName);
                    u.setAttribute('type', r.type);
                    d(r.Y, function (v, x) {
                      u.setAttribute(v, x);
                    });
                    return u;
                  };
                  t.prototype.Ah = function (r) {
                    this.Ud('<span id="ps-style"/>');
                    var u = this.cb.getElementById('ps-style');
                    u.parentNode.replaceChild(r, u);
                  };
                  t.prototype.Fd = function (r) {
                    r.Uh = this.Sa;
                    this.Sa = [];
                    this.Rb.unshift(r);
                  };
                  t.prototype.sf = function (r) {
                    r !== this.Rb[0]
                      ? this.options.error({
                          message: 'Bad script nesting or script finished twice',
                        })
                      : (this.Rb.shift(),
                        this.write.apply(this, r.Uh),
                        !this.Rb.length && this.vc && (this.Fd(this.vc), (this.vc = null)));
                  };
                  t.prototype.zi = function (r, u) {
                    var v = this.Tg(r),
                      x = this.oi(v),
                      y = this.options.Fg;
                    r.src &&
                      ((v.src = r.src),
                      this.ji(
                        v,
                        x
                          ? y
                          : function () {
                              u();
                              y();
                            }
                      ));
                    try {
                      this.zh(v), (r.src && !x) || u();
                    } catch (w) {
                      this.options.error(w), u();
                    }
                  };
                  t.prototype.Tg = function (r) {
                    var u = this.cb.createElement(r.tagName);
                    d(r.Y, function (v, x) {
                      u.setAttribute(v, x);
                    });
                    r.content && (u.text = r.content);
                    return u;
                  };
                  t.prototype.zh = function (r) {
                    this.Ud('<span id="ps-script"/>');
                    var u = this.cb.getElementById('ps-script');
                    u.parentNode.replaceChild(r, u);
                  };
                  t.prototype.ji = function (r, u) {
                    function v () {
                      r = r.onload = r.onreadystatechange = r.onerror = null;
                    }
                    var x = this.options.error;
                    e(r, {
                      onload: function () {
                        v();
                        u();
                      },
                      onreadystatechange: function () {
                        /^(loaded|complete)$/.test(r.readyState) && (v(), u());
                      },
                      onerror: function () {
                        var y = { message: 'remote script failed ' + r.src };
                        v();
                        x(y);
                        u();
                      },
                    });
                  };
                  t.prototype.oi = function (r) {
                    return (
                      !/^script$/i.test(r.nodeName) ||
                      !!(this.options.fi && r.src && r.hasAttribute('async'))
                    );
                  };
                  return t;
                })();
              l.postscribe = (function () {
                function q () {
                  var x = u.shift(),
                    y;
                  x && ((y = x[x.length - 1]), y.Gg(), (x.stream = t.apply(null, x)), y.Hg());
                }
                function t (x, y, w) {
                  function z (F) {
                    F = w.Qg(F);
                    v.write(F);
                    w.Ig(F);
                  }
                  v = new p(x, w);
                  v.id = r++;
                  v.name = w.name || v.id;
                  var A = x.ownerDocument,
                    C = { close: A.close, open: A.open, write: A.write, writeln: A.writeln };
                  e(A, {
                    close: a,
                    open: a,
                    write: function () {
                      return z(g(arguments).join(''));
                    },
                    writeln: function () {
                      return z(g(arguments).join('') + '\n');
                    },
                  });
                  var D = v.Ub.onerror || a;
                  v.Ub.onerror = function (F, M, Q) {
                    w.error({ msg: F + ' - ' + M + ':' + Q });
                    D.apply(v.Ub, arguments);
                  };
                  v.write(y, function () {
                    e(A, C);
                    v.Ub.onerror = D;
                    w.done();
                    v = null;
                    q();
                  });
                  return v;
                }
                var r = 0,
                  u = [],
                  v = null;
                return e(
                  function (x, y, w) {
                    'function' === typeof w && (w = { done: w });
                    w = f(w, h);
                    x = /^#/.test(x) ? l.document.getElementById(x.substr(1)) : x.Ri ? x[0] : x;
                    var z = [x, y, w];
                    x.Xh = {
                      cancel: function () {
                        z.stream ? z.stream.abort() : (z[1] = a);
                      },
                    };
                    w.Pg(z);
                    u.push(z);
                    v || q();
                    return x.Xh;
                  },
                  { streams: {}, Si: u, Ji: p }
                );
              })();
              De = l.postscribe;
            }
          })();
          var Ee = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
            Fe = { Fn: 'function', DustMap: 'Object', List: 'Array' },
            G = function (a, b, c) {
              for (var d = 0; d < b.length; d++) {
                var e = Ee.exec(b[d]);
                if (!e) throw Error('Internal Error in ' + a);
                var f = e[1],
                  g = '!' === e[2],
                  h = e[3],
                  l = c[d],
                  n = typeof l;
                if (null === l || 'undefined' === n) {
                  if (g)
                    throw Error('Error in ' + a + '. Required argument ' + f + ' not supplied.');
                } else if ('*' !== h) {
                  var p = typeof l;
                  l instanceof jb
                    ? (p = 'Fn')
                    : l instanceof k
                    ? (p = 'List')
                    : l instanceof pb
                    ? (p = 'DustMap')
                    : l instanceof tb && (p = 'OpaqueValue');
                  if (p != h)
                    throw Error(
                      'Error in ' +
                        a +
                        '. Argument ' +
                        f +
                        ' has type ' +
                        p +
                        ', which does not match required type ' +
                        (Fe[h] || h) +
                        '.'
                    );
                }
              }
            };
          function Ge (a) {
            return '' + a;
          }
          function He (a, b) {
            var c = [];
            return c;
          }
          var Ie = function (a, b) {
              var c = new jb(a, function () {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                  d[e] = this.a(d[e]);
                return b.apply(this, d);
              });
              c.m = !0;
              return c;
            },
            Je = function (a, b) {
              var c = new pb(),
                d;
              for (d in b)
                if (b.hasOwnProperty(d)) {
                  var e = b[d];
                  Ja(e)
                    ? c.set(d, Ie(a + '_' + d, e))
                    : (Ka(e) || m(e) || 'boolean' == typeof e) && c.set(d, e);
                }
              c.m = !0;
              return c;
            };
          var Ke = function (a, b) {
            G(this.i.a, ['apiName:!string', 'message:?string'], arguments);
            var c = {},
              d = new pb();
            return (d = Je('AssertApiSubject', c));
          };
          var Le = function (a, b) {
            G(this.i.a, ['actual:?*', 'message:?string'], arguments);
            var c = {},
              d = new pb();
            return (d = Je('AssertThatSubject', c));
          };
          function Me (a) {
            return function () {
              for (var b = [], c = this.m, d = 0; d < arguments.length; ++d)
                b.push(Ab(arguments[d], c));
              return zb(a.apply(null, b));
            };
          }
          var Oe = function () {
            for (var a = Math, b = Ne, c = {}, d = 0; d < b.length; d++) {
              var e = b[d];
              a.hasOwnProperty(e) && (c[e] = Me(a[e].bind(a)));
            }
            return c;
          };
          var Pe = function (a) {
            var b;
            return b;
          };
          var Qe = function (a) {
            var b;
            return b;
          };
          var Re = function (a) {
            G(this.i.a, ['uri:!string'], arguments);
            return encodeURI(a);
          };
          var Se = function (a) {
            G(this.i.a, ['uri:!string'], arguments);
            return encodeURIComponent(a);
          };
          var Te = function (a) {
            G(this.i.a, ['message:?string'], arguments);
          };
          var Ue = function (a, b) {
            G(this.i.a, ['min:!number', 'max:!number'], arguments);
            return Pa(a, b);
          };
          var Ve = function (a, b, c) {
            var d = a.m.a;
            if (!d) throw Error('Missing program state.');
            d.Ng.apply(null, Array.prototype.slice.call(arguments, 1));
          };
          var We = function () {
            Ve(this, 'read_container_data');
            var a = new pb();
            a.set('containerId', 'GTM-W9SLGS');
            a.set('version', '844');
            a.set('environmentName', '');
            a.set('debugMode', fe);
            a.set('previewMode', he);
            a.set('environmentMode', ge);
            a.m = !0;
            return a;
          };
          var Xe = function () {
            return new Date().getTime();
          };
          var Ye = function (a) {
            if (null === a) return 'null';
            if (a instanceof k) return 'array';
            if (a instanceof jb) return 'function';
            if (a instanceof tb) {
              a = a.qa;
              if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1);
              }
              return String(a.constructor.name);
            }
            return typeof a;
          };
          var Ze = function (a) {
            function b (c) {
              return function (d) {
                try {
                  return c(d);
                } catch (e) {
                  (fe || he) && a.call(this, e.message);
                }
              };
            }
            return {
              parse: b(function (c) {
                return zb(JSON.parse(c));
              }),
              stringify: b(function (c) {
                return JSON.stringify(Ab(c));
              }),
            };
          };
          var $e = function (a) {
            return Va(Ab(a, this.m));
          };
          var af = function (a) {
            return Number(Ab(a, this.m));
          };
          var bf = function (a) {
            return null === a ? 'null' : void 0 === a ? 'undefined' : a.toString();
          };
          var cf = function (a, b, c) {
            var d = null,
              e = !1;
            return e ? d : null;
          };
          var Ne = 'floor ceil round max min abs pow sqrt'.split(' ');
          var df = function () {
              var a = {};
              return {
                sh: function (b) {
                  return a.hasOwnProperty(b) ? a[b] : void 0;
                },
                ni: function (b, c) {
                  a[b] = c;
                },
                reset: function () {
                  a = {};
                },
              };
            },
            ef = function (a, b) {
              G(this.i.a, ['apiName:!string', 'mock:?*'], arguments);
            };
          var ff = function () {
            this.a = {};
            this.i = {};
          };
          ff.prototype.get = function (a, b) {
            var c = this.a.hasOwnProperty(a) ? this.a[a] : void 0;
            return c;
          };
          ff.prototype.add = function (a, b, c) {
            if (this.a.hasOwnProperty(a))
              throw 'Attempting to add a function which already exists: ' + a + '.';
            if (this.i.hasOwnProperty(a))
              throw 'Attempting to add an API with an existing private API name: ' + a + '.';
            this.a[a] = c ? void 0 : Ja(b) ? Ie(a, b) : Je(a, b);
          };
          var gf = function (a, b, c) {
            if (a.i.hasOwnProperty(b))
              throw 'Attempting to add a private function which already exists: ' + b + '.';
            if (a.a.hasOwnProperty(b))
              throw 'Attempting to add a private function with an existing API name: ' + b + '.';
            a.i[b] = Ja(c) ? Ie(b, c) : Je(b, c);
          };
          function hf () {
            var a = {};
            return a;
          }
          var H = {
            Ab: '_ee',
            ld: '_syn',
            Ii: '_uei',
            Gi: '_pci',
            Tc: 'event_callback',
            bc: 'event_timeout',
            fa: 'gtag.config',
          };
          H.Ga = 'gtag.get';
          H.wa = 'purchase';
          H.nb = 'refund';
          H.Wa = 'begin_checkout';
          H.lb = 'add_to_cart';
          H.mb = 'remove_from_cart';
          H.Pf = 'view_cart';
          H.fe = 'add_to_wishlist';
          H.Fa = 'view_item';
          H.ee = 'view_promotion';
          H.de = 'select_promotion';
          H.ce = 'select_item';
          H.Yb = 'view_item_list';
          H.be = 'add_payment_info';
          H.Of = 'add_shipping_info';
          (H.za = 'value_key'), (H.ya = 'value_callback');
          H.ia = 'allow_ad_personalization_signals';
          H.bd = 'restricted_data_processing';
          H.ob = 'allow_google_signals';
          H.ja = 'cookie_expires';
          H.ac = 'cookie_update';
          H.xb = 'session_duration';
          H.na = 'user_properties';
          H.Ja = 'transport_url';
          H.N = 'ads_data_redaction';
          H.s = 'ad_storage';
          H.M = 'analytics_storage';
          H.Hf = 'region';
          H.If = 'wait_for_update';
          H.Ie = [
            H.wa,
            H.nb,
            H.Wa,
            H.lb,
            H.mb,
            H.Pf,
            H.fe,
            H.Fa,
            H.ee,
            H.de,
            H.Yb,
            H.ce,
            H.be,
            H.Of,
          ];
          H.He = [H.ia, H.ob, H.ac];
          H.Je = [H.ja, H.bc, H.xb];
          var jf = {},
            kf = function (a, b) {
              jf[a] = jf[a] || [];
              jf[a][b] = !0;
            },
            lf = function (a) {
              for (var b = [], c = jf[a] || [], d = 0; d < c.length; d++)
                c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
              for (var e = 0; e < b.length; e++)
                b[e] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(
                  b[e] || 0
                );
              return b.join('');
            };
          var I = function (a) {
            kf('GTM', a);
          };
          function mf (a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, mf);
            else {
              var b = Error().stack;
              b && (this.stack = b);
            }
            a && (this.message = String(a));
          }
          xa(mf, Error);
          mf.prototype.name = 'CustomError';
          var nf = function (a, b) {
            for (var c = a.split('%s'), d = '', e = c.length - 1, f = 0; f < e; f++)
              d += c[f] + (f < b.length ? b[f] : '%s');
            mf.call(this, d + c[e]);
          };
          xa(nf, mf);
          nf.prototype.name = 'AssertionError';
          var of = function (a, b) {
            throw new nf(
              'Failure' + (a ? ': ' + a : ''),
              Array.prototype.slice.call(arguments, 1)
            );
          };
          var pf = function (a, b) {
              var c = function () {};
              c.prototype = a.prototype;
              var d = new c();
              a.apply(d, Array.prototype.slice.call(arguments, 1));
              return d;
            },
            qf = function (a) {
              var b = a;
              return function () {
                if (b) {
                  var c = b;
                  b = null;
                  c();
                }
              };
            };
          var rf,
            sf = function () {
              if (void 0 === rf) {
                var a = null,
                  b = ma.trustedTypes;
                if (b && b.createPolicy) {
                  try {
                    a = b.createPolicy('goog#html', {
                      createHTML: ya,
                      createScript: ya,
                      createScriptURL: ya,
                    });
                  } catch (c) {
                    ma.console && ma.console.error(c.message);
                  }
                  rf = a;
                } else rf = a;
              }
              return rf;
            };
          var uf = function (a, b) {
            this.a = b === tf ? a : '';
          };
          uf.prototype.toString = function () {
            return 'TrustedResourceUrl{' + this.a + '}';
          };
          var tf = {};
          var vf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
          var wf;
          a: {
            var xf = ma.navigator;
            if (xf) {
              var yf = xf.userAgent;
              if (yf) {
                wf = yf;
                break a;
              }
            }
            wf = '';
          }
          var zf = function (a) {
            return -1 != wf.indexOf(a);
          };
          var Bf = function (a, b, c) {
            this.a = c === Af ? a : '';
          };
          Bf.prototype.toString = function () {
            return 'SafeHtml{' + this.a + '}';
          };
          var Cf = function (a) {
              if (a instanceof Bf && a.constructor === Bf) return a.a;
              of("expected object of type SafeHtml, got '" + a + "' of type " + ua(a));
              return 'type_error:SafeHtml';
            },
            Af = {},
            Ef = new Bf((ma.trustedTypes && ma.trustedTypes.emptyHTML) || '', 0, Af);
          var Ff = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
            Gf = (function (a) {
              var b = !1,
                c;
              return function () {
                b || ((c = a()), (b = !0));
                return c;
              };
            })(function () {
              if ('undefined' === typeof document) return !1;
              var a = document.createElement('div'),
                b = document.createElement('div');
              b.appendChild(document.createElement('div'));
              a.appendChild(b);
              if (!a.firstChild) return !1;
              var c = a.firstChild.firstChild;
              a.innerHTML = Cf(Ef);
              return !c.parentElement;
            }),
            Hf = function (a, b) {
              if (a.tagName && Ff[a.tagName.toUpperCase()])
                throw Error(
                  'goog.dom.safe.setInnerHtml cannot be used to set content of ' + a.tagName + '.'
                );
              if (Gf()) for (; a.lastChild; ) a.removeChild(a.lastChild);
              a.innerHTML = Cf(b);
            };
          var If = function (a) {
            var b = sf(),
              c = b ? b.createHTML(a) : a;
            return new Bf(c, null, Af);
          };
          var B = window,
            L = document,
            Jf = navigator,
            Kf = L.currentScript && L.currentScript.src,
            Lf = function (a, b) {
              var c = B[a];
              B[a] = void 0 === c ? b : c;
              return B[a];
            },
            Mf = function (a, b) {
              b &&
                (a.addEventListener
                  ? (a.onload = b)
                  : (a.onreadystatechange = function () {
                      a.readyState in { loaded: 1, complete: 1 } &&
                        ((a.onreadystatechange = null), b());
                    }));
            },
            Nf = function (a, b, c) {
              var d = L.createElement('script');
              d.type = 'text/javascript';
              d.async = !0;
              var e,
                f = sf(),
                g = f ? f.createScriptURL(a) : a;
              e = new uf(g, tf);
              var h;
              a: {
                try {
                  var l = d && d.ownerDocument,
                    n = l && (l.defaultView || l.parentWindow);
                  n = n || ma;
                  if (n.Element && n.Location) {
                    h = n;
                    break a;
                  }
                } catch (x) {}
                h = null;
              }
              if (
                h &&
                'undefined' != typeof h.HTMLScriptElement &&
                (!d ||
                  (!(d instanceof h.HTMLScriptElement) &&
                    (d instanceof h.Location || d instanceof h.Element)))
              ) {
                var p;
                var q = typeof d;
                if (('object' == q && null != d) || 'function' == q)
                  try {
                    p =
                      d.constructor.displayName ||
                      d.constructor.name ||
                      Object.prototype.toString.call(d);
                  } catch (x) {
                    p = '<object could not be stringified>';
                  }
                else p = void 0 === d ? 'undefined' : null === d ? 'null' : typeof d;
                of(
                  'Argument is not a %s (or a non-Element, non-Location mock); got: %s',
                  'HTMLScriptElement',
                  p
                );
              }
              var t;
              e instanceof uf && e.constructor === uf
                ? (t = e.a)
                : (of(
                    "expected object of type TrustedResourceUrl, got '" + e + "' of type " + ua(e)
                  ),
                  (t = 'type_error:TrustedResourceUrl'));
              d.src = t;
              var r = qa(d.ownerDocument && d.ownerDocument.defaultView);
              r && d.setAttribute('nonce', r);
              Mf(d, b);
              c && (d.onerror = c);
              var u = qa();
              u && d.setAttribute('nonce', u);
              var v = L.getElementsByTagName('script')[0] || L.body || L.head;
              v.parentNode.insertBefore(d, v);
              return d;
            },
            Of = function () {
              if (Kf) {
                var a = Kf.toLowerCase();
                if (0 === a.indexOf('https://')) return 2;
                if (0 === a.indexOf('http://')) return 3;
              }
              return 1;
            },
            Pf = function (a, b) {
              var c = L.createElement('iframe');
              c.height = '0';
              c.width = '0';
              c.style.display = 'none';
              c.style.visibility = 'hidden';
              var d = (L.body && L.body.lastChild) || L.body || L.head;
              d.parentNode.insertBefore(c, d);
              Mf(c, b);
              void 0 !== a && (c.src = a);
              return c;
            },
            Qf = function (a, b, c) {
              var d = new Image(1, 1);
              d.onload = function () {
                d.onload = null;
                b && b();
              };
              d.onerror = function () {
                d.onerror = null;
                c && c();
              };
              d.src = a;
              return d;
            },
            Rf = function (a, b, c, d) {
              a.addEventListener
                ? a.addEventListener(b, c, !!d)
                : a.attachEvent && a.attachEvent('on' + b, c);
            },
            Sf = function (a, b, c) {
              a.removeEventListener
                ? a.removeEventListener(b, c, !1)
                : a.detachEvent && a.detachEvent('on' + b, c);
            },
            N = function (a) {
              B.setTimeout(a, 0);
            },
            Tf = function (a, b) {
              return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
            },
            Uf = function (a) {
              var b = a.innerText || a.textContent || '';
              b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''));
              b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
              return b;
            },
            Vf = function (a) {
              var b = L.createElement('div');
              Hf(b, If('A<div>' + a + '</div>'));
              b = b.lastChild;
              for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild));
              return c;
            },
            Wf = function (a, b, c) {
              c = c || 100;
              for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
              for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement;
              }
              return null;
            },
            Xf = function (a) {
              (Jf.sendBeacon && Jf.sendBeacon(a)) || Qf(a);
            },
            Yf = function (a, b) {
              var c = a[b];
              c && 'string' === typeof c.animVal && (c = c.animVal);
              return c;
            };
          var Zf = {},
            $f = function (a) {
              return void 0 == Zf[a] ? !1 : Zf[a];
            };
          var ag = [];
          function bg () {
            var a = Lf('google_tag_data', {});
            a.ics ||
              (a.ics = {
                entries: {},
                set: cg,
                update: dg,
                addListener: eg,
                notifyListeners: fg,
                active: !1,
              });
            return a.ics;
          }
          function cg (a, b, c, d, e, f) {
            var g = bg();
            g.active = !0;
            if (void 0 != b) {
              var h = g.entries,
                l = h[a] || {},
                n = l.region,
                p = c && m(c) ? c.toUpperCase() : void 0;
              d = d.toUpperCase();
              e = e.toUpperCase();
              if (p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                  t = { region: p, initial: 'granted' === b, update: l.update, quiet: q };
                h[a] = t;
                q &&
                  B.setTimeout(function () {
                    h[a] === t && t.quiet && ((t.quiet = !1), gg(a), fg(), kf('TAGGING', 2));
                  }, f);
              }
            }
          }
          function dg (a, b) {
            var c = bg();
            c.active = !0;
            if (void 0 != b) {
              var d = hg(a),
                e = c.entries,
                f = (e[a] = e[a] || {});
              f.update = 'granted' === b;
              var g = hg(a);
              f.quiet ? ((f.quiet = !1), gg(a)) : g !== d && gg(a);
            }
          }
          function eg (a, b) {
            ag.push({ cf: a, nh: b });
          }
          function gg (a) {
            for (var b = 0; b < ag.length; ++b) {
              var c = ag[b];
              La(c.cf) && -1 !== c.cf.indexOf(a) && (c.vf = !0);
            }
          }
          function fg (a) {
            for (var b = 0; b < ag.length; ++b) {
              var c = ag[b];
              if (c.vf) {
                c.vf = !1;
                try {
                  c.nh({ bf: a });
                } catch (d) {}
              }
            }
          }
          var hg = function (a) {
              var b = bg().entries[a] || {};
              return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0;
            },
            ig = function (a) {
              return !(bg().entries[a] || {}).quiet;
            },
            jg = function () {
              return $f('gtag_cs_api') ? bg().active : !1;
            },
            kg = function (a, b) {
              bg().addListener(a, b);
            },
            lg = function (a, b) {
              function c () {
                for (var e = 0; e < b.length; e++) if (!ig(b[e])) return !0;
                return !1;
              }
              if (c()) {
                var d = !1;
                kg(b, function (e) {
                  d || c() || ((d = !0), a(e));
                });
              } else a({});
            },
            mg = function (a, b) {
              if (!1 === hg(b)) {
                var c = !1;
                kg([b], function (d) {
                  !c && hg(b) && (a(d), (c = !0));
                });
              }
            };
          var ng = [H.s, H.M],
            og = function (a) {
              var b = a[H.Hf];
              b && I(40);
              var c = a[H.If];
              c && I(41);
              for (var d = La(b) ? b : [b], e = 0; e < d.length; ++e)
                for (var f = 0; f < ng.length; f++) {
                  var g = ng[f],
                    h = a[ng[f]],
                    l = d[e];
                  bg().set(g, h, l, '', '', c);
                }
            },
            pg = function (a, b) {
              for (var c = 0; c < ng.length; c++) {
                var d = ng[c],
                  e = a[ng[c]];
                bg().update(d, e);
              }
              bg().notifyListeners(b);
            },
            qg = function (a) {
              var b = hg(a);
              return void 0 != b ? b : !0;
            },
            rg = function () {
              for (var a = [], b = 0; b < ng.length; b++) {
                var c = hg(ng[b]);
                a[b] = !0 === c ? '1' : !1 === c ? '0' : '-';
              }
              return 'G1' + a.join('');
            },
            sg = function (a, b) {
              lg(a, b);
            };
          var ug = function (a) {
              return tg ? L.querySelectorAll(a) : null;
            },
            vg = function (a, b) {
              if (!tg) return null;
              if (Element.prototype.closest)
                try {
                  return a.closest(b);
                } catch (e) {
                  return null;
                }
              var c =
                  Element.prototype.matches ||
                  Element.prototype.webkitMatchesSelector ||
                  Element.prototype.mozMatchesSelector ||
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.oMatchesSelector,
                d = a;
              if (!L.documentElement.contains(d)) return null;
              do {
                try {
                  if (c.call(d, b)) return d;
                } catch (e) {
                  break;
                }
                d = d.parentElement || d.parentNode;
              } while (null !== d && 1 === d.nodeType);
              return null;
            },
            wg = !1;
          if (L.querySelectorAll)
            try {
              var xg = L.querySelectorAll(':root');
              xg && 1 == xg.length && xg[0] == L.documentElement && (wg = !0);
            } catch (a) {}
          var tg = wg;
          var Yd = {},
            O = null,
            Lg = Math.random();
          Yd.C = 'GTM-W9SLGS';
          Yd.nc = 'b41';
          Yd.Ei = '';
          var Mg = {
              __cl: !0,
              __ecl: !0,
              __ehl: !0,
              __evl: !0,
              __fal: !0,
              __fil: !0,
              __fsl: !0,
              __hl: !0,
              __jel: !0,
              __lcl: !0,
              __sdl: !0,
              __tl: !0,
              __ytl: !0,
            },
            Ng = { __paused: !0, __tg: !0 },
            Og;
          for (Og in Mg) Mg.hasOwnProperty(Og) && (Ng[Og] = !0);
          var Pg = 'www.googletagmanager.com/gtm.js';
          var Qg = Pg,
            Rg = Wa(''),
            Sg = null,
            Tg = null,
            Ug = '//www.googletagmanager.com/a?id=' + Yd.C + '&cv=844',
            Vg = {},
            Wg = {},
            Xg = function () {
              var a = O.sequence || 1;
              O.sequence = a + 1;
              return a;
            };
          var Yg = {},
            Zg = new Qa(),
            $g = {},
            ah = {},
            dh = {
              name: 'dataLayer',
              set: function (a, b) {
                E(hb(a, b), $g);
                bh();
              },
              get: function (a) {
                return ch(a, 2);
              },
              reset: function () {
                Zg = new Qa();
                $g = {};
                bh();
              },
            },
            ch = function (a, b) {
              return 2 != b ? Zg.get(a) : eh(a);
            },
            eh = function (a, b) {
              var c = a.split('.');
              b = b || [];
              for (var d = $g, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== Na(b, d)) return;
              }
              return d;
            },
            fh = function (a, b) {
              ah.hasOwnProperty(a) || (Zg.set(a, b), E(hb(a, b), $g), bh());
            },
            bh = function (a) {
              Sa(ah, function (b, c) {
                Zg.set(b, c);
                E(hb(b, void 0), $g);
                E(hb(b, c), $g);
                a && delete ah[b];
              });
            },
            gh = function (a, b, c) {
              Yg[a] = Yg[a] || {};
              var d = 1 !== c ? eh(b) : Zg.get(b);
              'array' === vb(d) || 'object' === vb(d) ? (Yg[a][b] = E(d)) : (Yg[a][b] = d);
            },
            hh = function (a, b) {
              if (Yg[a]) return Yg[a][b];
            },
            ih = function (a, b) {
              Yg[a] && delete Yg[a][b];
            };
          var lh = {},
            mh = function (a, b) {
              if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a)) return B._gtmexpgrp[a];
              void 0 === lh[a] && (lh[a] = Math.floor(Math.random() * b));
              return lh[a];
            };
          var nh = /:[0-9]+$/,
            oh = function (a, b, c, d) {
              for (var e = [], f = a.split('&'), g = 0; g < f.length; g++) {
                var h = f[g].split('=');
                if (decodeURIComponent(h[0]).replace(/\+/g, ' ') === b) {
                  var l = h.slice(1).join('=');
                  if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, ' ');
                  e.push(d ? l : decodeURIComponent(l).replace(/\+/g, ' '));
                }
              }
              return c ? e : void 0;
            },
            rh = function (a, b, c, d, e) {
              b && (b = String(b).toLowerCase());
              if ('protocol' === b || 'port' === b)
                a.protocol = ph(a.protocol) || ph(B.location.protocol);
              'port' === b
                ? (a.port = String(
                    Number(a.hostname ? a.port : B.location.port) ||
                      ('http' == a.protocol ? 80 : 'https' == a.protocol ? 443 : '')
                  ))
                : 'host' === b &&
                  (a.hostname = (a.hostname || B.location.hostname).replace(nh, '').toLowerCase());
              return qh(a, b, c, d, e);
            },
            qh = function (a, b, c, d, e) {
              var f,
                g = ph(a.protocol);
              b && (b = String(b).toLowerCase());
              switch (b) {
                case 'url_no_fragment':
                  f = sh(a);
                  break;
                case 'protocol':
                  f = g;
                  break;
                case 'host':
                  f = a.hostname.replace(nh, '').toLowerCase();
                  if (c) {
                    var h = /^www\d*\./.exec(f);
                    h && h[0] && (f = f.substr(h[0].length));
                  }
                  break;
                case 'port':
                  f = String(Number(a.port) || ('http' == g ? 80 : 'https' == g ? 443 : ''));
                  break;
                case 'path':
                  a.pathname || a.hostname || kf('TAGGING', 1);
                  f = '/' == a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
                  var l = f.split('/');
                  0 <= Na(d || [], l[l.length - 1]) && (l[l.length - 1] = '');
                  f = l.join('/');
                  break;
                case 'query':
                  f = a.search.replace('?', '');
                  e && (f = oh(f, e, !1, void 0));
                  break;
                case 'extension':
                  var n = a.pathname.split('.');
                  f = 1 < n.length ? n[n.length - 1] : '';
                  f = f.split('/')[0];
                  break;
                case 'fragment':
                  f = a.hash.replace('#', '');
                  break;
                default:
                  f = a && a.href;
              }
              return f;
            },
            ph = function (a) {
              return a ? a.replace(':', '').toLowerCase() : '';
            },
            sh = function (a) {
              var b = '';
              if (a && a.href) {
                var c = a.href.indexOf('#');
                b = 0 > c ? a.href : a.href.substr(0, c);
              }
              return b;
            },
            th = function (a) {
              var b = L.createElement('a');
              a && (b.href = a);
              var c = b.pathname;
              '/' !== c[0] && (a || kf('TAGGING', 1), (c = '/' + c));
              var d = b.hostname.replace(nh, '');
              return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port,
              };
            },
            uh = function (a) {
              function b (n) {
                var p = n.split('=')[0];
                return 0 > d.indexOf(p) ? n : p + '=0';
              }
              function c (n) {
                return n
                  .split('&')
                  .map(b)
                  .filter(function (p) {
                    return void 0 != p;
                  })
                  .join('&');
              }
              var d = 'gclid dclid gclaw gcldc gclgp gclha gclgf _gl'.split(' '),
                e = th(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
              '?' === g[0] && (g = g.substring(1));
              '#' === h[0] && (h = h.substring(1));
              g = c(g);
              h = c(h);
              '' !== g && (g = '?' + g);
              '' !== h && (h = '#' + h);
              var l = '' + f + g + h;
              '/' === l[l.length - 1] && (l = l.substring(0, l.length - 1));
              return l;
            };
          function vh (a, b, c) {
            for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
              var g = e[f].split('='),
                h = g[0].replace(/^\s*|\s*$/g, '');
              if (h && h == a) {
                var l = g
                  .slice(1)
                  .join('=')
                  .replace(/^\s*|\s*$/g, '');
                l && c && (l = decodeURIComponent(l));
                d.push(l);
              }
            }
            return d;
          }
          var xh = function (a, b, c, d) {
              return wh(d) ? vh(a, String(b || document.cookie), c) : [];
            },
            Ah = function (a, b, c, d, e) {
              if (wh(e)) {
                var f = yh(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                  f = zh(
                    f,
                    function (g) {
                      return g.wc;
                    },
                    b
                  );
                  if (1 === f.length) return f[0].id;
                  f = zh(
                    f,
                    function (g) {
                      return g.Ob;
                    },
                    c
                  );
                  return f[0] ? f[0].id : void 0;
                }
              }
            };
          function Bh (a, b, c, d) {
            var e = document.cookie;
            document.cookie = a;
            var f = document.cookie;
            return e != f || (void 0 != c && 0 <= xh(b, f, !1, d).indexOf(c));
          }
          var Fh = function (a, b, c, d) {
              function e (x, y, w) {
                if (null == w) return delete h[y], x;
                h[y] = w;
                return x + '; ' + y + '=' + w;
              }
              function f (x, y) {
                if (null == y) return delete h[y], x;
                h[y] = !0;
                return x + '; ' + y;
              }
              if (!wh(c.Na)) return 2;
              var g;
              void 0 == b
                ? (g = a + '=deleted; expires=' + new Date(0).toUTCString())
                : (c.encode && (b = encodeURIComponent(b)), (b = Ch(b)), (g = a + '=' + b));
              var h = {};
              g = e(g, 'path', c.path);
              var l;
              c.expires instanceof Date
                ? (l = c.expires.toUTCString())
                : null != c.expires && (l = '' + c.expires);
              g = e(g, 'expires', l);
              g = e(g, 'max-age', c.Oh);
              g = e(g, 'samesite', c.hi);
              c.ki && (g = f(g, 'secure'));
              var n = c.domain;
              if ('auto' === n) {
                for (var p = Dh(), q = void 0, t = !1, r = 0; r < p.length; ++r) {
                  var u = 'none' !== p[r] ? p[r] : void 0,
                    v = e(g, 'domain', u);
                  v = f(v, c.flags);
                  try {
                    d && d(a, h);
                  } catch (x) {
                    q = x;
                    continue;
                  }
                  t = !0;
                  if (!Eh(u, c.path) && Bh(v, a, b, c.Na)) return 0;
                }
                if (q && !t) throw q;
                return 1;
              }
              n && 'none' !== n && (g = e(g, 'domain', n));
              g = f(g, c.flags);
              d && d(a, h);
              return Eh(n, c.path) ? 1 : Bh(g, a, b, c.Na) ? 0 : 1;
            },
            Gh = function (a, b, c) {
              null == c.path && (c.path = '/');
              c.domain || (c.domain = 'auto');
              return Fh(a, b, c);
            };
          function zh (a, b, c) {
            for (var d = [], e = [], f, g = 0; g < a.length; g++) {
              var h = a[g],
                l = b(h);
              l === c
                ? d.push(h)
                : void 0 === f || l < f
                ? ((e = [h]), (f = l))
                : l === f && e.push(h);
            }
            return 0 < d.length ? d : e;
          }
          function yh (a, b, c) {
            for (var d = [], e = xh(a, void 0, void 0, c), f = 0; f < e.length; f++) {
              var g = e[f].split('.'),
                h = g.shift();
              if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l &&
                  ((l = l.split('-')),
                  d.push({ id: g.join('.'), wc: 1 * l[0] || 1, Ob: 1 * l[1] || 1 }));
              }
            }
            return d;
          }
          var Ch = function (a) {
              a && 1200 < a.length && (a = a.substring(0, 1200));
              return a;
            },
            Hh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
            Ih = /(^|\.)doubleclick\.net$/i,
            Eh = function (a, b) {
              return Ih.test(document.location.hostname) || ('/' === b && Hh.test(a));
            },
            Dh = function () {
              var a = [],
                b = document.location.hostname.split('.');
              if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ['none'];
              }
              for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'));
              var e = document.location.hostname;
              Ih.test(e) || Hh.test(e) || a.push('none');
              return a;
            },
            wh = function (a) {
              if (!$f('gtag_cs_api') || !a || !jg()) return !0;
              if (!ig(a)) return !1;
              var b = hg(a);
              return null == b ? !0 : !!b;
            };
          var Jh = function () {
              for (
                var a = Jf.userAgent + (L.cookie || '') + (L.referrer || ''),
                  b = a.length,
                  c = B.history.length;
                0 < c;

              )
                a += c-- ^ b++;
              var d = 1,
                e,
                f,
                g;
              if (a)
                for (d = 0, f = a.length - 1; 0 <= f; f--)
                  (g = a.charCodeAt(f)),
                    (d = ((d << 6) & 268435455) + g + (g << 14)),
                    (e = d & 266338304),
                    (d = 0 != e ? d ^ (e >> 21) : d);
              return [
                Math.round(2147483647 * Math.random()) ^ (d & 2147483647),
                Math.round(Za() / 1000),
              ].join('.');
            },
            Mh = function (a, b, c, d, e) {
              var f = Kh(b);
              return Ah(a, f, Lh(c), d, e);
            },
            Nh = function (a, b, c, d) {
              var e = '' + Kh(c),
                f = Lh(d);
              1 < f && (e += '-' + f);
              return [b, e, a].join('.');
            },
            Kh = function (a) {
              if (!a) return 1;
              a = 0 === a.indexOf('.') ? a.substr(1) : a;
              return a.split('.').length;
            },
            Lh = function (a) {
              if (!a || '/' === a) return 1;
              '/' !== a[0] && (a = '/' + a);
              '/' !== a[a.length - 1] && (a += '/');
              return a.split('/').length - 1;
            };
          function Oh (a, b, c) {
            var d,
              e = a.Nb;
            null == e && (e = 7776000);
            0 !== e && (d = new Date((b || Za()) + 1000 * e));
            return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d };
          }
          var Ph = ['1'],
            Qh = {},
            Uh = function (a) {
              var b = Rh(a.prefix);
              Qh[b] || Sh(b, a.path, a.domain) || (Th(b, Jh(), a), Sh(b, a.path, a.domain));
            };
          function Th (a, b, c) {
            var d = Nh(b, '1', c.domain, c.path),
              e = Oh(c);
            e.Na = 'ad_storage';
            Gh(a, d, e);
          }
          function Sh (a, b, c) {
            var d = Mh(a, b, c, Ph, 'ad_storage');
            d && (Qh[a] = d);
            return d;
          }
          function Rh (a) {
            return (a || '_gcl') + '_au';
          }
          function Vh () {
            for (var a = Wh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
            return b;
          }
          function Xh () {
            var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            a += a.toLowerCase() + '0123456789-_';
            return a + '.';
          }
          var Wh, Yh;
          function Zh (a) {
            Wh = Wh || Xh();
            Yh = Yh || Vh();
            for (var b = [], c = 0; c < a.length; c += 3) {
              var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = ((f & 3) << 4) | (g >> 4),
                p = ((g & 15) << 2) | (h >> 6),
                q = h & 63;
              e || ((q = 64), d || (p = 64));
              b.push(Wh[l], Wh[n], Wh[p], Wh[q]);
            }
            return b.join('');
          }
          function $h (a) {
            function b (l) {
              for (; d < a.length; ) {
                var n = a.charAt(d++),
                  p = Yh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error('Unknown base64 encoding at char: ' + n);
              }
              return l;
            }
            Wh = Wh || Xh();
            Yh = Yh || Vh();
            for (var c = '', d = 0; ; ) {
              var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
              if (64 === h && -1 === e) return c;
              c += String.fromCharCode((e << 2) | (f >> 4));
              64 != g &&
                ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
                64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
            }
          }
          var bi;
          var fi = function () {
              var a = ci,
                b = di,
                c = ei(),
                d = function (g) {
                  a(g.target || g.srcElement || {});
                },
                e = function (g) {
                  b(g.target || g.srcElement || {});
                };
              if (!c.init) {
                Rf(L, 'mousedown', d);
                Rf(L, 'keyup', d);
                Rf(L, 'submit', e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function () {
                  b(this);
                  f.call(this);
                };
                c.init = !0;
              }
            },
            gi = function (a, b, c, d, e) {
              var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e,
              };
              ei().decorators.push(f);
            },
            hi = function (a, b, c) {
              for (var d = ei().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                  h;
                if ((h = !c || g.forms))
                  a: {
                    var l = g.domains,
                      n = a,
                      p = !!g.sameHost;
                    if (l && (p || n !== L.location.hostname))
                      for (var q = 0; q < l.length; q++)
                        if (l[q] instanceof RegExp) {
                          if (l[q].test(n)) {
                            h = !0;
                            break a;
                          }
                        } else if (0 <= n.indexOf(l[q]) || (p && 0 <= l[q].indexOf(n))) {
                          h = !0;
                          break a;
                        }
                    h = !1;
                  }
                if (h) {
                  var t = g.placement;
                  void 0 == t && (t = g.fragment ? 2 : 1);
                  t === b && cb(e, g.callback());
                }
              }
              return e;
            },
            ei = function () {
              var a = Lf('google_tag_data', {}),
                b = a.gl;
              (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
              return b;
            };
          var ii = /(.*?)\*(.*?)\*(.*)/,
            ji = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
            ki = /^(?:www\.|m\.|amp\.)+/,
            li = /([^?#]+)(\?[^#]*)?(#.*)?/;
          function mi (a) {
            return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)');
          }
          var oi = function (a) {
              var b = [],
                c;
              for (c in a)
                if (a.hasOwnProperty(c)) {
                  var d = a[c];
                  void 0 !== d &&
                    d === d &&
                    null !== d &&
                    '[object Object]' !== d.toString() &&
                    (b.push(c), b.push(Zh(String(d))));
                }
              var e = b.join('*');
              return ['1', ni(e), e].join('*');
            },
            ni = function (a, b) {
              var c = [
                  window.navigator.userAgent,
                  new Date().getTimezoneOffset(),
                  window.navigator.userLanguage || window.navigator.language,
                  Math.floor(new Date().getTime() / 60 / 1000) - (void 0 === b ? 0 : b),
                  a,
                ].join('*'),
                d;
              if (!(d = bi)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                  for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
                  e[f] = g;
                }
                d = e;
              }
              bi = d;
              for (var l = 4294967295, n = 0; n < c.length; n++)
                l = (l >>> 8) ^ bi[(l ^ c.charCodeAt(n)) & 255];
              return ((l ^ -1) >>> 0).toString(36);
            },
            qi = function () {
              return function (a) {
                var b = th(B.location.href),
                  c = b.search.replace('?', ''),
                  d = oh(c, '_gl', !1, !0) || '';
                a.query = pi(d) || {};
                var e = rh(b, 'fragment').match(mi('_gl'));
                a.fragment = pi((e && e[3]) || '') || {};
              };
            },
            ri = function (a) {
              var b = qi(),
                c = ei();
              c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
              var d = {},
                e = c.data;
              e && (cb(d, e.query), a && cb(d, e.fragment));
              return d;
            },
            pi = function (a) {
              var b;
              b = void 0 === b ? 3 : b;
              try {
                if (a) {
                  var c;
                  a: {
                    for (var d = a, e = 0; 3 > e; ++e) {
                      var f = ii.exec(d);
                      if (f) {
                        c = f;
                        break a;
                      }
                      d = decodeURIComponent(d);
                    }
                    c = void 0;
                  }
                  var g = c;
                  if (g && '1' === g[1]) {
                    var h = g[3],
                      l;
                    a: {
                      for (var n = g[2], p = 0; p < b; ++p)
                        if (n === ni(h, p)) {
                          l = !0;
                          break a;
                        }
                      l = !1;
                    }
                    if (l) {
                      for (var q = {}, t = h ? h.split('*') : [], r = 0; r < t.length; r += 2)
                        q[t[r]] = $h(t[r + 1]);
                      return q;
                    }
                  }
                }
              } catch (u) {}
            };
          function si (a, b, c, d) {
            function e (p) {
              var q = p,
                t = mi(a).exec(q),
                r = q;
              if (t) {
                var u = t[2],
                  v = t[4];
                r = t[1];
                v && (r = r + u + v);
              }
              p = r;
              var x = p.charAt(p.length - 1);
              p && '&' !== x && (p += '&');
              return p + n;
            }
            d = void 0 === d ? !1 : d;
            var f = li.exec(c);
            if (!f) return '';
            var g = f[1],
              h = f[2] || '',
              l = f[3] || '',
              n = a + '=' + b;
            d ? (l = '#' + e(l.substring(1))) : (h = '?' + e(h.substring(1)));
            return '' + g + h + l;
          }
          function ti (a, b) {
            var c = 'FORM' === (a.tagName || '').toUpperCase(),
              d = hi(b, 1, c),
              e = hi(b, 2, c),
              f = hi(b, 3, c);
            if (db(d)) {
              var g = oi(d);
              c ? ui('_gl', g, a) : vi('_gl', g, a, !1);
            }
            if (!c && db(e)) {
              var h = oi(e);
              vi('_gl', h, a, !0);
            }
            for (var l in f)
              if (f.hasOwnProperty(l))
                a: {
                  var n = l,
                    p = f[l],
                    q = a;
                  if (q.tagName) {
                    if ('a' === q.tagName.toLowerCase()) {
                      vi(n, p, q, void 0);
                      break a;
                    }
                    if ('form' === q.tagName.toLowerCase()) {
                      ui(n, p, q);
                      break a;
                    }
                  }
                  'string' == typeof q && si(n, p, q, void 0);
                }
          }
          function vi (a, b, c, d) {
            if (c.href) {
              var e = si(a, b, c.href, void 0 === d ? !1 : d);
              vf.test(e) && (c.href = e);
            }
          }
          function ui (a, b, c) {
            if (c && c.action) {
              var d = (c.method || '').toLowerCase();
              if ('get' === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                  var h = e[g];
                  if (h.name === a) {
                    h.setAttribute('value', b);
                    f = !0;
                    break;
                  }
                }
                if (!f) {
                  var l = L.createElement('input');
                  l.setAttribute('type', 'hidden');
                  l.setAttribute('name', a);
                  l.setAttribute('value', b);
                  c.appendChild(l);
                }
              } else if ('post' === d) {
                var n = si(a, b, c.action);
                vf.test(n) && (c.action = n);
              }
            }
          }
          var ci = function (a) {
              try {
                var b;
                a: {
                  for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                      b = c;
                      break a;
                    }
                    c = c.parentNode;
                    d--;
                  }
                  b = null;
                }
                var e = b;
                if (e) {
                  var f = e.protocol;
                  ('http:' !== f && 'https:' !== f) || ti(e, e.hostname);
                }
              } catch (g) {}
            },
            di = function (a) {
              try {
                if (a.action) {
                  var b = rh(th(a.action), 'host');
                  ti(a, b);
                }
              } catch (c) {}
            },
            wi = function (a, b, c, d) {
              fi();
              gi(a, b, 'fragment' === c ? 2 : 1, !!d, !1);
            },
            xi = function (a, b) {
              fi();
              gi(a, [qh(B.location, 'host', !0)], b, !0, !0);
            },
            yi = function () {
              var a = L.location.hostname,
                b = ji.exec(L.referrer);
              if (!b) return !1;
              var c = b[2],
                d = b[1],
                e = '';
              if (c) {
                var f = c.split('/'),
                  g = f[1];
                e = 's' === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
              } else if (d) {
                if (0 === d.indexOf('xn--')) return !1;
                e = d.replace(/-/g, '.').replace(/\.\./g, '-');
              }
              var h = a.replace(ki, ''),
                l = e.replace(ki, ''),
                n;
              if (!(n = h === l)) {
                var p = '.' + l;
                n = h.substring(h.length - p.length, h.length) === p;
              }
              return n;
            },
            zi = function (a, b) {
              return !1 === a ? !1 : a || b || yi();
            };
          var Ai = /^\w+$/,
            Bi = /^[\w-]+$/,
            Ci = /^~?[\w-]+$/,
            Di = { aw: '_aw', dc: '_dc', gf: '_gf', ha: '_ha', gp: '_gp' },
            Ei = function () {
              if (!$f('gtag_cs_api') || !jg()) return !0;
              var a = hg('ad_storage');
              return null == a ? !0 : !!a;
            },
            Fi = function (a, b) {
              ig('ad_storage')
                ? Ei()
                  ? a()
                  : mg(a, 'ad_storage')
                : b
                ? kf('TAGGING', 3)
                : lg(
                    function () {
                      Fi(a, !0);
                    },
                    ['ad_storage']
                  );
            },
            Ii = function (a) {
              var b = [];
              if (!L.cookie) return b;
              var c = xh(a, L.cookie, void 0, 'ad_storage');
              if (!c || 0 == c.length) return b;
              for (var d = 0; d < c.length; d++) {
                var e = Gi(c[d]);
                e && -1 === Na(b, e) && b.push(e);
              }
              return Hi(b);
            };
          function Ji (a) {
            return a && 'string' == typeof a && a.match(Ai) ? a : '_gcl';
          }
          var Li = function () {
              var a = th(B.location.href),
                b = rh(a, 'query', !1, void 0, 'gclid'),
                c = rh(a, 'query', !1, void 0, 'gclsrc'),
                d = rh(a, 'query', !1, void 0, 'dclid');
              if (!b || !c) {
                var e = a.hash.replace('#', '');
                b = b || oh(e, 'gclid', !1, void 0);
                c = c || oh(e, 'gclsrc', !1, void 0);
              }
              return Ki(b, c, d);
            },
            Ki = function (a, b, c) {
              var d = {},
                e = function (f, g) {
                  d[g] || (d[g] = []);
                  d[g].push(f);
                };
              d.gclid = a;
              d.gclsrc = b;
              d.dclid = c;
              if (void 0 !== a && a.match(Bi))
                switch (b) {
                  case void 0:
                    e(a, 'aw');
                    break;
                  case 'aw.ds':
                    e(a, 'aw');
                    e(a, 'dc');
                    break;
                  case 'ds':
                    e(a, 'dc');
                    break;
                  case '3p.ds':
                    $f('gtm_3pds') && e(a, 'dc');
                    break;
                  case 'gf':
                    e(a, 'gf');
                    break;
                  case 'ha':
                    e(a, 'ha');
                    break;
                  case 'gp':
                    e(a, 'gp');
                }
              c && e(c, 'dc');
              return d;
            },
            Ni = function (a) {
              var b = Li();
              Fi(function () {
                Mi(b, a);
              });
            };
          function Mi (a, b, c) {
            function d (l, n) {
              var p = Oi(l, e);
              p && Gh(p, n, f);
            }
            b = b || {};
            var e = Ji(b.prefix);
            c = c || Za();
            var f = Oh(b, c, !0);
            f.Na = 'ad_storage';
            var g = Math.round(c / 1000),
              h = function (l) {
                return ['GCL', g, l].join('.');
              };
            a.aw && (!0 === b.Zi ? d('aw', h('~' + a.aw[0])) : d('aw', h(a.aw[0])));
            a.dc && d('dc', h(a.dc[0]));
            a.gf && d('gf', h(a.gf[0]));
            a.ha && d('ha', h(a.ha[0]));
            a.gp && d('gp', h(a.gp[0]));
          }
          var Qi = function (a, b) {
              var c = ri(!0);
              Fi(function () {
                for (var d = Ji(b.prefix), e = 0; e < a.length; ++e) {
                  var f = a[e];
                  if (void 0 !== Di[f]) {
                    var g = Oi(f, d),
                      h = c[g];
                    if (h) {
                      var l = Math.min(Pi(h), Za()),
                        n;
                      b: {
                        for (
                          var p = l, q = xh(g, L.cookie, void 0, 'ad_storage'), t = 0;
                          t < q.length;
                          ++t
                        )
                          if (Pi(q[t]) > p) {
                            n = !0;
                            break b;
                          }
                        n = !1;
                      }
                      if (!n) {
                        var r = Oh(b, l, !0);
                        r.Na = 'ad_storage';
                        Gh(g, h, r);
                      }
                    }
                  }
                }
                Mi(Ki(c.gclid, c.gclsrc), b);
              });
            },
            Oi = function (a, b) {
              var c = Di[a];
              if (void 0 !== c) return b + c;
            },
            Pi = function (a) {
              var b = a.split('.');
              return 3 !== b.length || 'GCL' !== b[0] ? 0 : 1000 * (Number(b[1]) || 0);
            };
          function Gi (a) {
            var b = a.split('.');
            if (3 == b.length && 'GCL' == b[0] && b[1]) return b[2];
          }
          var Ri = function (a, b, c, d, e) {
              if (La(b)) {
                var f = Ji(e),
                  g = function () {
                    for (var h = {}, l = 0; l < a.length; ++l) {
                      var n = Oi(a[l], f);
                      if (n) {
                        var p = xh(n, L.cookie, void 0, 'ad_storage');
                        p.length && (h[n] = p.sort()[p.length - 1]);
                      }
                    }
                    return h;
                  };
                Fi(function () {
                  wi(g, b, c, d);
                });
              }
            },
            Hi = function (a) {
              return a.filter(function (b) {
                return Ci.test(b);
              });
            },
            Si = function (a, b) {
              for (var c = Ji(b.prefix), d = {}, e = 0; e < a.length; e++)
                Di[a[e]] && (d[a[e]] = Di[a[e]]);
              Fi(function () {
                Sa(d, function (f, g) {
                  var h = xh(c + g, L.cookie, void 0, 'ad_storage');
                  if (h.length) {
                    var l = h[0],
                      n = Pi(l),
                      p = {};
                    p[f] = [Gi(l)];
                    Mi(p, b, n);
                  }
                });
              });
            };
          function Ti (a, b) {
            for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
            return !1;
          }
          var Ui = function () {
              function a (e, f, g) {
                g && (e[f] = g);
              }
              var b = ['aw', 'dc'];
              if (jg()) {
                var c = Li();
                if (Ti(c, b)) {
                  var d = {};
                  a(d, 'gclid', c.gclid);
                  a(d, 'dclid', c.dclid);
                  a(d, 'gclsrc', c.gclsrc);
                  xi(function () {
                    return d;
                  }, 3);
                  xi(function () {
                    var e = {};
                    return (e._up = '1'), e;
                  }, 1);
                }
              }
            },
            Vi = function () {
              var a;
              if (Ei()) {
                for (
                  var b = [],
                    c = L.cookie.split(';'),
                    d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,
                    e = 0;
                  e < c.length;
                  e++
                ) {
                  var f = c[e].match(d);
                  f && b.push({ Rd: f[1], value: f[2] });
                }
                var g = {};
                if (b && b.length)
                  for (var h = 0; h < b.length; h++) {
                    var l = b[h].value.split('.');
                    '1' == l[0] &&
                      3 == l.length &&
                      l[1] &&
                      (g[b[h].Rd] || (g[b[h].Rd] = []),
                      g[b[h].Rd].push({ timestamp: l[1], ph: l[2] }));
                  }
                a = g;
              } else a = {};
              return a;
            };
          var Wi = /^\d+\.fls\.doubleclick\.net$/;
          function Xi (a, b) {
            ig(H.s)
              ? qg(H.s)
                ? a()
                : mg(a, H.s)
              : b
              ? I(42)
              : sg(
                  function () {
                    Xi(a, !0);
                  },
                  [H.s]
                );
          }
          function Yi (a) {
            var b = th(B.location.href),
              c = rh(b, 'host', !1);
            if (c && c.match(Wi)) {
              var d = rh(b, 'path').split(a + '=');
              if (1 < d.length) return d[1].split(';')[0].split('?')[0];
            }
          }
          function Zi (a, b, c) {
            if ('aw' == a || 'dc' == a) {
              var d = Yi('gcl' + a);
              if (d) return d.split('.');
            }
            var e = Ji(b);
            if ('_gcl' == e) {
              c = void 0 === c ? !0 : c;
              var f = !qg(H.s) && c,
                g;
              g = Li()[a] || [];
              if (0 < g.length) return f ? ['0'] : g;
            }
            var h = Oi(a, e);
            return h ? Ii(h) : [];
          }
          var $i = function (a) {
              var b = Yi('gac');
              if (b) return !qg(H.s) && a ? '0' : decodeURIComponent(b);
              var c = Vi(),
                d = [];
              Sa(c, function (e, f) {
                for (var g = [], h = 0; h < f.length; h++) g.push(f[h].ph);
                g = Hi(g);
                g.length && d.push(e + ':' + g.join(','));
              });
              return d.join(';');
            },
            aj = function (a, b) {
              var c = Li().dc || [];
              Xi(function () {
                Uh(b);
                var d = Qh[Rh(b.prefix)],
                  e = !1;
                if (d && 0 < c.length) {
                  var f = (O.joined_au = O.joined_au || {}),
                    g = b.prefix || '_gcl';
                  if (!f[g])
                    for (var h = 0; h < c.length; h++) {
                      var l = 'https://adservice.google.com/ddm/regclk';
                      l = l + '?gclid=' + c[h] + '&auiddc=' + d;
                      Xf(l);
                      e = f[g] = !0;
                    }
                }
                null == a && (a = e);
                if (a && d) {
                  var n = Rh(b.prefix),
                    p = Qh[n];
                  p && Th(n, p, b);
                }
              });
            };
          var bj = /[A-Z]+/,
            cj = /\s/,
            dj = function (a) {
              if (m(a) && ((a = Ya(a)), !cj.test(a))) {
                var b = a.indexOf('-');
                if (!(0 > b)) {
                  var c = a.substring(0, b);
                  if (bj.test(c)) {
                    for (var d = a.substring(b + 1).split('/'), e = 0; e < d.length; e++)
                      if (!d[e]) return;
                    return { id: a, prefix: c, containerId: c + '-' + d[0], D: d };
                  }
                }
              }
            },
            fj = function (a) {
              for (var b = {}, c = 0; c < a.length; ++c) {
                var d = dj(a[c]);
                d && (b[d.id] = d);
              }
              ej(b);
              var e = [];
              Sa(b, function (f, g) {
                e.push(g);
              });
              return e;
            };
          function ej (a) {
            var b = [],
              c;
            for (c in a)
              if (a.hasOwnProperty(c)) {
                var d = a[c];
                'AW' === d.prefix && d.D[1] && b.push(d.containerId);
              }
            for (var e = 0; e < b.length; ++e) delete a[b[e]];
          }
          var gj = function () {
            var a = !1;
            return a;
          };
          var ij = function (a, b, c, d) {
              return (2 === hj() || d || 'http:' != B.location.protocol ? a : b) + c;
            },
            hj = function () {
              var a = Of(),
                b;
              if (1 === a)
                a: {
                  var c = Qg;
                  c = c.toLowerCase();
                  for (
                    var d = 'https://' + c,
                      e = 'http://' + c,
                      f = 1,
                      g = L.getElementsByTagName('script'),
                      h = 0;
                    h < g.length && 100 > h;
                    h++
                  ) {
                    var l = g[h].src;
                    if (l) {
                      l = l.toLowerCase();
                      if (0 === l.indexOf(e)) {
                        b = 3;
                        break a;
                      }
                      1 === f && 0 === l.indexOf(d) && (f = 2);
                    }
                  }
                  b = f;
                }
              else b = a;
              return b;
            };
          var wj = function (a) {
              return qg(H.s)
                ? a
                : a.replace(/&url=([^&#]+)/, function (b, c) {
                    var d = uh(decodeURIComponent(c));
                    return '&url=' + encodeURIComponent(d);
                  });
            },
            xj = function () {
              var a;
              if (!(a = Rg)) {
                var b;
                if (!0 === B._gtmdgs) b = !0;
                else {
                  var c = (Jf && Jf.userAgent) || '';
                  b =
                    0 > c.indexOf('Safari') ||
                    /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) ||
                    11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || '')
                      ? !1
                      : !0;
                }
                a = !b;
              }
              if (a) return -1;
              var d = Va('1');
              return mh(1, 100) < d ? mh(2, 2) : -1;
            },
            yj = function (a) {
              var b;
              return b;
            };
          var zj = new RegExp(
              /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
            ),
            Aj = {
              cl: ['ecl'],
              customPixels: ['nonGooglePixels'],
              ecl: ['cl'],
              ehl: ['hl'],
              hl: ['ehl'],
              html: [
                'customScripts',
                'customPixels',
                'nonGooglePixels',
                'nonGoogleScripts',
                'nonGoogleIframes',
              ],
              customScripts: [
                'html',
                'customPixels',
                'nonGooglePixels',
                'nonGoogleScripts',
                'nonGoogleIframes',
              ],
              nonGooglePixels: [],
              nonGoogleScripts: ['nonGooglePixels'],
              nonGoogleIframes: ['nonGooglePixels'],
            },
            Bj = {
              cl: ['ecl'],
              customPixels: ['customScripts', 'html'],
              ecl: ['cl'],
              ehl: ['hl'],
              hl: ['ehl'],
              html: ['customScripts'],
              customScripts: ['html'],
              nonGooglePixels: [
                'customPixels',
                'customScripts',
                'html',
                'nonGoogleScripts',
                'nonGoogleIframes',
              ],
              nonGoogleScripts: ['customScripts', 'html'],
              nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
            },
            Cj = 'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
              ' '
            );
          var Ej = function (a) {
              var b;
              ch('gtm.allowlist') && I(52);
              b = ch('gtm.allowlist');
              b || (b = ch('gtm.whitelist'));
              b && I(9);
              var c = b && eb(Xa(b), Aj),
                d;
              ch('gtm.blocklist') && I(51);
              d = ch('gtm.blocklist');
              d || (d = ch('gtm.blacklist'));
              d || ((d = ch('tagTypeBlacklist')) && I(3));
              d ? I(8) : (d = []);
              Dj() &&
                ((d = Xa(d)), d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'));
              0 <= Na(Xa(d), 'google') && I(2);
              var e = d && eb(Xa(d), Bj),
                f = {};
              return function (g) {
                var h = g && g[Jd.Ka];
                if (!h || 'string' != typeof h) return !0;
                h = h.replace(/^_*/, '');
                if (void 0 !== f[h]) return f[h];
                var l = Wg[h] || [],
                  n = a(h, l);
                if (b) {
                  var p;
                  if ((p = n))
                    a: {
                      if (0 > Na(c, h))
                        if (l && 0 < l.length)
                          for (var q = 0; q < l.length; q++) {
                            if (0 > Na(c, l[q])) {
                              I(11);
                              p = !1;
                              break a;
                            }
                          }
                        else {
                          p = !1;
                          break a;
                        }
                      p = !0;
                    }
                  n = p;
                }
                var t = !1;
                if (d) {
                  var r = 0 <= Na(e, h);
                  if (r) t = r;
                  else {
                    var u = Ra(e, l || []);
                    u && I(10);
                    t = u;
                  }
                }
                var v = !n || t;
                v ||
                  !(0 <= Na(l, 'sandboxedScripts')) ||
                  (c && -1 !== Na(c, 'sandboxedScripts')) ||
                  (v = Ra(e, Cj));
                return (f[h] = v);
              };
            },
            Dj = function () {
              return zj.test(B.location && B.location.hostname);
            };
          var Fj = {
              active: !0,
              isAllowed: function () {
                return !0;
              },
            },
            Gj = function (a) {
              var b = O.zones;
              return b ? b.checkState(Yd.C, a) : Fj;
            },
            Hj = function (a) {
              var b = O.zones;
              !b && a && (b = O.zones = a());
              return b;
            };
          var Ij = function () {},
            Jj = function () {};
          var Kj = !1,
            Lj = 0,
            Mj = [];
          function Nj (a) {
            if (!Kj) {
              var b = L.createEventObject,
                c = 'complete' == L.readyState,
                d = 'interactive' == L.readyState;
              if (!a || 'readystatechange' != a.type || c || (!b && d)) {
                Kj = !0;
                for (var e = 0; e < Mj.length; e++) N(Mj[e]);
              }
              Mj.push = function () {
                for (var f = 0; f < arguments.length; f++) N(arguments[f]);
                return 0;
              };
            }
          }
          function Oj () {
            if (!Kj && 140 > Lj) {
              Lj++;
              try {
                L.documentElement.doScroll('left'), Nj();
              } catch (a) {
                B.setTimeout(Oj, 50);
              }
            }
          }
          var Pj = function (a) {
            Kj ? a() : Mj.push(a);
          };
          var Qj = {},
            Rj = {},
            Sj = function (a, b, c, d) {
              if (!Rj[a] || Ng[b] || '__zone' === b) return -1;
              var e = {};
              xb(d) && (e = E(d, e));
              e.id = c;
              e.status = 'timeout';
              return Rj[a].tags.push(e) - 1;
            },
            Tj = function (a, b, c, d) {
              if (Rj[a]) {
                var e = Rj[a].tags[b];
                e && ((e.status = c), (e.executionTime = d));
              }
            };
          function Uj (a) {
            for (var b = Qj[a] || [], c = 0; c < b.length; c++) b[c]();
            Qj[a] = {
              push: function (d) {
                d(Yd.C, Rj[a]);
              },
            };
          }
          var Xj = function (a, b, c) {
              Rj[a] = { tags: [] };
              Ja(b) && Vj(a, b);
              c &&
                B.setTimeout(function () {
                  return Uj(a);
                }, Number(c));
              return Wj(a);
            },
            Vj = function (a, b) {
              Qj[a] = Qj[a] || [];
              Qj[a].push(
                ab(function () {
                  return N(function () {
                    b(Yd.C, Rj[a]);
                  });
                })
              );
            };
          function Wj (a) {
            var b = 0,
              c = 0,
              d = !1;
            return {
              add: function () {
                c++;
                return ab(function () {
                  b++;
                  d && b >= c && Uj(a);
                });
              },
              Mg: function () {
                d = !0;
                b >= c && Uj(a);
              },
            };
          }
          var Yj = function () {
            const $___old_7d5082ee7ed26044 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_7d5082ee7ed26044)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_2b47892348e4e4b9.performance
                ));
              return function () {
                function a (d) {
                  return !Ka(d) || 0 > d ? 0 : d;
                }
                if (!O._li && B.performance && B.performance.timing) {
                  var b = B.performance.timing.navigationStart,
                    c = Ka(dh.get('gtm.start')) ? dh.get('gtm.start') : 0;
                  O._li = { cst: a(c - b), cbt: a(Tg - b) };
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_7d5082ee7ed26044)
                ({}.constructor.defineProperty(window, 'performance', $___old_7d5082ee7ed26044));
            }
          };
          var ck = {},
            dk = function () {
              return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject];
            },
            ek = !1;
          var fk = function (a) {
              B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || 'ga');
              var b = B.GoogleAnalyticsObject;
              if (B[b]) B.hasOwnProperty(b) || I(12);
              else {
                var c = function () {
                  c.q = c.q || [];
                  c.q.push(arguments);
                };
                c.l = Number(new Date());
                B[b] = c;
              }
              Yj();
              return B[b];
            },
            gk = function (a, b, c, d) {
              b = String(b).replace(/\s+/g, '').split(',');
              var e = dk();
              e(a + 'require', 'linker');
              e(a + 'linker:autoLink', b, c, d);
            },
            hk = function (a) {};
          var jk = function (a) {},
            ik = function () {
              return B.GoogleAnalyticsObject || 'ga';
            },
            kk = function (a, b) {
              return function () {
                var c = dk(),
                  d = c && c.getByName && c.getByName(a);
                if (d) {
                  var e = d.get('sendHitTask');
                  d.set('sendHitTask', function (f) {
                    var g = f.get('hitPayload'),
                      h = f.get('hitCallback'),
                      l = 0 > g.indexOf('&tid=' + b);
                    l &&
                      (f.set('hitPayload', g.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b), !0),
                      f.set('hitCallback', void 0, !0));
                    e(f);
                    l &&
                      (f.set('hitPayload', g, !0),
                      f.set('hitCallback', h, !0),
                      f.set('_x_19', void 0, !0),
                      e(f));
                  });
                }
              };
            };
          var pk = function () {
              return (
                '&tc=' +
                xd.filter(function (a) {
                  return a;
                }).length
              );
            },
            sk = function () {
              2022 <= qk().length && rk();
            },
            uk = function () {
              tk || (tk = B.setTimeout(rk, 500));
            },
            rk = function () {
              tk && (B.clearTimeout(tk), (tk = void 0));
              void 0 === vk ||
                (wk[vk] && !xk && !yk) ||
                (zk[vk] || Ak.Fh() || 0 >= Bk--
                  ? (I(1), (zk[vk] = !0))
                  : (Ak.di(), Qf(qk()), (wk[vk] = !0), (Ck = Dk = Ek = yk = xk = '')));
            },
            qk = function () {
              var a = vk;
              if (void 0 === a) return '';
              var b = lf('GTM'),
                c = lf('TAGGING');
              return [
                Fk,
                wk[a] ? '' : '&es=1',
                Gk[a],
                b ? '&u=' + b : '',
                c ? '&ut=' + c : '',
                pk(),
                xk,
                yk,
                Ek ? Ek : '',
                Dk,
                Ck,
                '&z=0',
              ].join('');
            },
            Hk = function () {
              return [Ug, '&v=3&t=t', '&pid=' + Pa(), '&rv=' + Yd.nc].join('');
            },
            Ik = '0.005000' > Math.random(),
            Fk = Hk(),
            Jk = function () {
              Fk = Hk();
            },
            wk = {},
            xk = '',
            yk = '',
            Ck = '',
            Dk = '',
            Ek = '',
            vk = void 0,
            Gk = {},
            zk = {},
            tk = void 0,
            Ak = (function (a, b) {
              var c = 0,
                d = 0;
              return {
                Fh: function () {
                  if (c < a) return !1;
                  Za() - d >= b && (c = 0);
                  return c >= a;
                },
                di: function () {
                  Za() - d >= b && (c = 0);
                  c++;
                  d = Za();
                },
              };
            })(2, 1000),
            Bk = 1000,
            Kk = function (a, b, c) {
              if (Ik && !zk[a] && b) {
                a !== vk && (rk(), (vk = a));
                var d,
                  e = String(b[Jd.Ka] || '').replace(/_/g, '');
                0 === e.indexOf('cvt') && (e = 'cvt');
                d = e;
                var f = c + d;
                xk = xk ? xk + '.' + f : '&tr=' + f;
                var g = b['function'];
                if (!g) throw Error('Error: No function name given for function call.');
                var h = (zd[g] ? '1' : '2') + d;
                Ck = Ck ? Ck + '.' + h : '&ti=' + h;
                uk();
                sk();
              }
            },
            Lk = function (a, b, c) {
              if (Ik && !zk[a]) {
                a !== vk && (rk(), (vk = a));
                var d = c + b;
                yk = yk ? yk + '.' + d : '&epr=' + d;
                uk();
                sk();
              }
            },
            Mk = function (a, b, c) {};
          var Nk = function () {
              return !1;
            },
            Ok = function () {
              var a = {};
              return function (b, c, d) {};
            };
          function Pk (a, b, c, d) {
            var e = xd[a],
              f = Qk(a, b, c, d);
            if (!f) return null;
            var g = Fd(e[Jd.Ve], c, []);
            if (g && g.length) {
              var h = g[0];
              f = Pk(
                h.index,
                { J: f, I: 1 === h.hf ? b.terminate : f, terminate: b.terminate },
                c,
                d
              );
            }
            return f;
          }
          function Qk (a, b, c, d) {
            function e () {
              if (f[Jd.ug]) h();
              else {
                var x = Gd(f, c, []);
                var z = Sj(c.id, String(f[Jd.Ka]), Number(f[Jd.We]), x[Jd.vg]),
                  A = !1;
                x.vtp_gtmOnSuccess = function () {
                  if (!A) {
                    A = !0;
                    var F = Za() - D;
                    Kk(c.id, xd[a], '5');
                    Tj(c.id, z, 'success', F);
                    g();
                  }
                };
                x.vtp_gtmOnFailure = function () {
                  if (!A) {
                    A = !0;
                    var F = Za() - D;
                    Kk(c.id, xd[a], '6');
                    Tj(c.id, z, 'failure', F);
                    h();
                  }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                Kk(c.id, f, '1');
                var C = function () {
                  var F = Za() - D;
                  Kk(c.id, f, '7');
                  Tj(c.id, z, 'exception', F);
                  A || ((A = !0), h());
                };
                var D = Za();
                try {
                  Ed(x, c);
                } catch (F) {
                  C(F);
                }
              }
            }
            var f = xd[a],
              g = b.J,
              h = b.I,
              l = b.terminate;
            if (c.yd(f)) return null;
            var n = Fd(f[Jd.Xe], c, []);
            if (n && n.length) {
              var p = n[0],
                q = Pk(p.index, { J: g, I: h, terminate: l }, c, d);
              if (!q) return null;
              g = q;
              h = 2 === p.hf ? l : q;
            }
            if (f[Jd.Re] || f[Jd.yg]) {
              var t = f[Jd.Re] ? yd : c.si,
                r = g,
                u = h;
              if (!t[a]) {
                e = ab(e);
                var v = Rk(a, t, e);
                g = v.J;
                h = v.I;
              }
              return function () {
                t[a](r, u);
              };
            }
            return e;
          }
          function Rk (a, b, c) {
            var d = [],
              e = [];
            b[a] = Sk(d, e, c);
            return {
              J: function () {
                b[a] = Tk;
                for (var f = 0; f < d.length; f++) d[f]();
              },
              I: function () {
                b[a] = Uk;
                for (var f = 0; f < e.length; f++) e[f]();
              },
            };
          }
          function Sk (a, b, c) {
            return function (d, e) {
              a.push(d);
              b.push(e);
              c();
            };
          }
          function Tk (a) {
            a();
          }
          function Uk (a, b) {
            b();
          }
          var Xk = function (a, b, c) {
            for (var d = [], e = 0; e < xd.length; e++)
              if (a[e]) {
                var f = xd[e];
                var g = c.add();
                try {
                  var h = Pk(e, { J: g, I: g, terminate: g }, b, e);
                  h ? d.push({ Df: e, wf: Hd(f), yc: h }) : (Vk(e, b), g());
                } catch (n) {
                  g();
                }
              }
            c.Mg();
            d.sort(Wk);
            for (var l = 0; l < d.length; l++) d[l].yc();
            return 0 < d.length;
          };
          function Wk (a, b) {
            var c,
              d = b.wf,
              e = a.wf;
            c = d > e ? 1 : d < e ? -1 : 0;
            var f;
            if (0 !== c) f = c;
            else {
              var g = a.Df,
                h = b.Df;
              f = g > h ? 1 : g < h ? -1 : 0;
            }
            return f;
          }
          function Vk (a, b) {
            if (!Ik) return;
            var c = function (d) {
              var e = b.yd(xd[d]) ? '3' : '4',
                f = Fd(xd[d][Jd.Ve], b, []);
              f && f.length && c(f[0].index);
              Kk(b.id, xd[d], e);
              var g = Fd(xd[d][Jd.Xe], b, []);
              g && g.length && c(g[0].index);
            };
            c(a);
          }
          var Yk = !1,
            cl = function (a) {
              var b = a['gtm.uniqueEventId'],
                c = a.event;
              if ('gtm.js' === c) {
                if (Yk) return !1;
                Yk = !0;
              }
              var d = Gj(b),
                e = !1;
              if (!d.active) {
                var f = !0;
                if ('gtm.js' === c) {
                  (f = !1), (e = !0), (d = Gj(Number.MAX_SAFE_INTEGER));
                }
                if (f) return !1;
              }
              Ik &&
                !zk[b] &&
                vk !== b &&
                (rk(),
                (vk = b),
                (Ck = xk = ''),
                (Gk[b] =
                  '&e=' + (0 === c.indexOf('gtm.') ? encodeURIComponent(c) : '*') + '&eid=' + b),
                uk());
              var g = {
                  id: b,
                  name: c,
                  yd: Ej(d.isAllowed),
                  si: [],
                  rf: function () {
                    I(6);
                  },
                  af: Zk(b),
                },
                h = Xj(b, a.eventCallback, a.eventTimeout);
              $k(b);
              var l = Td(g);
              e && (l = al(l));
              var n = Xk(l, g, h);
              ('gtm.js' !== c && 'gtm.sync' !== c) || jk(Yd.C);
              switch (c) {
                case 'gtm.init':
                  I(19), n && I(20);
              }
              return bl(l, n);
            };
          function Zk (a) {
            return function (b) {
              Ik && (Cb(b) || Mk(a, 'input', b));
            };
          }
          function $k (a) {
            gh(a, 'event', 1);
            gh(a, 'ecommerce', 1);
            gh(a, 'gtm');
            gh(a, 'eventModel');
          }
          function al (a) {
            var b = [];
            for (var c = 0; c < a.length; c++) a[c] && Mg[String(xd[c][Jd.Ka])] && (b[c] = !0);
            return b;
          }
          function bl (a, b) {
            if (!b) return b;
            for (var c = 0; c < a.length; c++)
              if (a[c] && xd[c] && !Ng[String(xd[c][Jd.Ka])]) return !0;
            return !1;
          }
          function dl (a, b) {
            if (a) {
              var c = '' + a;
              0 !== c.indexOf('http://') && 0 !== c.indexOf('https://') && (c = 'https://' + c);
              '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1));
              return th('' + c + b).href;
            }
          }
          function el (a, b) {
            return fl() ? dl(a, b) : void 0;
          }
          function fl () {
            var a = !1;
            return a;
          }
          var gl = function () {
              this.eventModel = {};
              this.targetConfig = {};
              this.containerConfig = {};
              this.a = {};
              this.globalConfig = {};
              this.J = function () {};
              this.I = function () {};
              this.eventId = void 0;
            },
            hl = function (a) {
              var b = new gl();
              b.eventModel = a;
              return b;
            },
            il = function (a, b) {
              a.targetConfig = b;
              return a;
            },
            jl = function (a, b) {
              a.containerConfig = b;
              return a;
            },
            kl = function (a, b) {
              a.a = b;
              return a;
            },
            ll = function (a, b) {
              a.globalConfig = b;
              return a;
            },
            ml = function (a, b) {
              a.J = b;
              return a;
            },
            nl = function (a, b) {
              a.I = b;
              return a;
            };
          gl.prototype.getWithConfig = function (a) {
            if (void 0 !== this.eventModel[a]) return this.eventModel[a];
            if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
            if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
            if (void 0 !== this.a[a]) return this.a[a];
            if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
          };
          var ol = function (a) {
            function b (e) {
              Sa(e, function (f) {
                c[f] = null;
              });
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            var d = [];
            Sa(c, function (e) {
              d.push(e);
            });
            return d;
          };
          var pl;
          if (3 === Yd.nc.length) pl = 'g';
          else {
            var ql = 'G';
            pl = ql;
          }
          var rl = {
              '': 'n',
              UA: 'u',
              AW: 'a',
              DC: 'd',
              G: 'e',
              GF: 'f',
              HA: 'h',
              GTM: pl,
              OPT: 'o',
            },
            sl = function (a) {
              var b = Yd.C.split('-'),
                c = b[0].toUpperCase(),
                d = rl[c] || 'i',
                e = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
                f;
              if (3 === Yd.nc.length) {
                var g = 'w';
                f = '2' + g;
              } else f = '';
              return f + d + Yd.nc + e;
            };
          var tl = function (a, b) {
            a.addEventListener && a.addEventListener('message', b, !1);
          };
          var ul = function () {
            return zf('iPhone') && !zf('iPod') && !zf('iPad');
          };
          zf('Opera');
          zf('Trident') || zf('MSIE');
          zf('Edge');
          !zf('Gecko') ||
            (-1 != wf.toLowerCase().indexOf('webkit') && !zf('Edge')) ||
            zf('Trident') ||
            zf('MSIE') ||
            zf('Edge');
          -1 != wf.toLowerCase().indexOf('webkit') && !zf('Edge') && zf('Mobile');
          zf('Macintosh');
          zf('Windows');
          zf('Linux') || zf('CrOS');
          var vl = ma.navigator || null;
          vl && (vl.appVersion || '').indexOf('X11');
          zf('Android');
          ul();
          zf('iPad');
          zf('iPod');
          ul() || zf('iPad') || zf('iPod');
          wf.toLowerCase().indexOf('kaios');
          var wl = function (a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
              var e;
              try {
                e = !(!c.frames || !c.frames[b]);
              } catch (h) {
                e = !1;
              }
              if (e) return c;
              var f;
              a: {
                try {
                  var g = c.parent;
                  if (g && g != c) {
                    f = g;
                    break a;
                  }
                } catch (h) {}
                f = null;
              }
              if (!(c = f)) break;
            }
            return null;
          };
          var xl = function () {};
          var yl = function (a) {
              if ($f('tteai')) {
                if (
                  (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
                  (void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies) ||
                  (void 0 !== a.listenerId && 'number' !== typeof a.listenerId) ||
                  (void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent)
                )
                  return 2;
              } else if (
                (void 0 !== a.addtlConsent &&
                  'string' !== typeof a.addtlConsent &&
                  (a.addtlConsent = void 0),
                void 0 !== a.gdprApplies &&
                  'boolean' !== typeof a.gdprApplies &&
                  (a.gdprApplies = void 0),
                (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
                  (void 0 !== a.listenerId && 'number' !== typeof a.listenerId))
              )
                return 2;
              return a.cmpStatus && 'error' !== a.cmpStatus ? 0 : 3;
            },
            zl = function (a, b) {
              this.i = a;
              this.a = null;
              this.B = {};
              this.R = 0;
              this.F = void 0 === b ? 500 : b;
              this.m = null;
            };
          la(zl, xl);
          var Bl = function (a) {
            return 'function' === typeof a.i.__tcfapi || null != Al(a);
          };
          zl.prototype.addEventListener = function (a) {
            var b = {},
              c = qf(function () {
                return a(b);
              }),
              d = 0;
            -1 !== this.F &&
              (d = setTimeout(function () {
                b.tcString = 'tcunavailable';
                b.internalErrorState = 1;
                c();
              }, this.F));
            var e = function (f, g) {
              clearTimeout(d);
              f
                ? ((b = f),
                  (b.internalErrorState = yl(b)),
                  (g && 0 === b.internalErrorState) ||
                    ((b.tcString = 'tcunavailable'), g || (b.internalErrorState = 3)))
                : ((b.tcString = 'tcunavailable'), (b.internalErrorState = 3));
              a(b);
            };
            try {
              Cl(this, 'addEventListener', e);
            } catch (f) {
              (b.tcString = 'tcunavailable'),
                (b.internalErrorState = 3),
                d && (clearTimeout(d), (d = 0)),
                c();
            }
          };
          zl.prototype.removeEventListener = function (a) {
            a && a.listenerId && Cl(this, 'removeEventListener', null, a.listenerId);
          };
          var El = function (a, b, c) {
              var d;
              d = void 0 === d ? '755' : d;
              var e;
              a: {
                if (a.publisher && a.publisher.restrictions) {
                  var f = a.publisher.restrictions[b];
                  if (void 0 !== f) {
                    e = f[void 0 === d ? '755' : d];
                    break a;
                  }
                }
                e = void 0;
              }
              var g = e;
              if (0 === g) return !1;
              var h = c;
              2 === c ? ((h = 0), 2 === g && (h = 1)) : 3 === c && ((h = 1), 1 === g && (h = 0));
              var l;
              if (0 === h)
                if (a.purpose && a.vendor) {
                  var n = Dl(a.vendor.consents, void 0 === d ? '755' : d);
                  l =
                    n && '1' === b && a.purposeOneTreatment && 'DE' === a.publisherCC
                      ? !0
                      : n && Dl(a.purpose.consents, b);
                } else l = !0;
              else
                l =
                  1 === h
                    ? a.purpose && a.vendor
                      ? Dl(a.purpose.legitimateInterests, b) &&
                        Dl(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
                      : !0
                    : !0;
              return l;
            },
            Dl = function (a, b) {
              return !(!a || !a[b]);
            },
            Cl = function (a, b, c, d) {
              c || (c = function () {});
              if ('function' === typeof a.i.__tcfapi) {
                var e = a.i.__tcfapi;
                e(b, 2, c, d);
              } else if (Al(a)) {
                Fl(a);
                var f = ++a.R;
                a.B[f] = c;
                if (a.a) {
                  var g = {};
                  a.a.postMessage(
                    ((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), g),
                    '*'
                  );
                }
              } else c({}, !1);
            },
            Al = function (a) {
              if (a.a) return a.a;
              a.a = wl(a.i, '__tcfapiLocator');
              return a.a;
            },
            Fl = function (a) {
              a.m ||
                ((a.m = function (b) {
                  try {
                    var c, d;
                    'string' === typeof b.data ? (d = JSON.parse(b.data)) : (d = b.data);
                    c = d.__tcfapiReturn;
                    a.B[c.callId](c.returnValue, c.success);
                  } catch (e) {}
                }),
                tl(a.i, a.m));
            };
          var Gl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
          function Hl (a, b) {
            if ('' === a) return b;
            var c = Number(a);
            return isNaN(c) ? b : c;
          }
          var Il = Hl('', 550),
            Jl = Hl('', 500);
          function Kl () {
            var a = O.tcf || {};
            return (O.tcf = a);
          }
          var Ll = function (a, b) {
              this.m = a;
              this.a = b;
              this.i = Za();
            },
            Ml = function (a) {},
            Nl = function (a) {},
            Tl = function () {
              var a = Kl(),
                b = new zl(B, 3000),
                c = new Ll(b, a);
              if (
                (Ol() ? !0 === B.gtag_enable_tcf_support : !1 !== B.gtag_enable_tcf_support) &&
                !a.active &&
                ('function' === typeof B.__tcfapi || Bl(b))
              ) {
                a.active = !0;
                a.Pb = {};
                Pl();
                var d = setTimeout(function () {
                  Ql(a);
                  Rl(a);
                  d = null;
                }, Jl);
                try {
                  b.addEventListener(function (e) {
                    d && (clearTimeout(d), (d = null));
                    if (0 !== e.internalErrorState) Ql(a), Rl(a), Ml(c);
                    else {
                      var f;
                      if (!1 === e.gdprApplies) (f = Sl()), b.removeEventListener(e);
                      else if (
                        'tcloaded' === e.eventStatus ||
                        'useractioncomplete' === e.eventStatus ||
                        'cmpuishown' === e.eventStatus
                      ) {
                        var g = {},
                          h;
                        for (h in Gl)
                          if (Gl.hasOwnProperty(h))
                            if ('1' === h) {
                              var l = e,
                                n = !0;
                              n = void 0 === n ? !1 : n;
                              var p;
                              var q = l;
                              !1 === q.gdprApplies
                                ? (p = !0)
                                : (void 0 === q.internalErrorState &&
                                    (q.internalErrorState = yl(q)),
                                  (p =
                                    'error' === q.cmpStatus ||
                                    0 !== q.internalErrorState ||
                                    ('loaded' === q.cmpStatus &&
                                      ('tcloaded' === q.eventStatus ||
                                        'useractioncomplete' === q.eventStatus))
                                      ? !0
                                      : !1));
                              g['1'] = p
                                ? !1 === l.gdprApplies ||
                                  'tcunavailable' === l.tcString ||
                                  (void 0 === l.gdprApplies && !n) ||
                                  'string' !== typeof l.tcString ||
                                  !l.tcString.length
                                  ? !0
                                  : El(l, '1', 0)
                                : !1;
                            } else g[h] = El(e, h, Gl[h]);
                        f = g;
                      }
                      f && ((a.tcString = e.tcString || 'tcempty'), (a.Pb = f), Rl(a), Ml(c));
                    }
                  }),
                    Nl(c);
                } catch (e) {
                  d && (clearTimeout(d), (d = null)), Ql(a), Rl(a);
                }
              }
            };
          function Ql (a) {
            a.type = 'e';
            a.tcString = 'tcunavailable';
            a.Pb = Sl();
          }
          function Pl () {
            var a = {};
            og(((a.ad_storage = 'denied'), (a.wait_for_update = Il), a));
          }
          var Ol = function () {
            var a = !1;
            a = !0;
            return a;
          };
          function Sl () {
            var a = {},
              b;
            for (b in Gl) Gl.hasOwnProperty(b) && (a[b] = !0);
            return a;
          }
          function Rl (a) {
            var b = {};
            pg(((b.ad_storage = a.Pb['1'] ? 'granted' : 'denied'), b));
          }
          var Ul = function () {
              var a = Kl();
              if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
            },
            Vl = function () {
              var a = Kl();
              return a.active ? a.tcString || '' : '';
            },
            Wl = function (a) {
              if (!Gl.hasOwnProperty(String(a))) return !0;
              var b = Kl();
              return b.active && b.Pb ? !!b.Pb[String(a)] : !0;
            };
          function Xl (a, b, c) {
            function d (p) {
              var q;
              O.reported_gclid || (O.reported_gclid = {});
              q = O.reported_gclid;
              var t = f + (p ? 'gcu' : 'gcs');
              if (!q[t]) {
                q[t] = !0;
                var r = [],
                  u = function (z, A) {
                    A && r.push(z + '=' + encodeURIComponent(A));
                  },
                  v = 'https://www.google.com';
                if (jg()) {
                  var x = qg(H.s);
                  u('gcs', rg());
                  p && u('gcu', '1');
                  O.dedupe_gclid || (O.dedupe_gclid = '' + Jh());
                  u('rnd', O.dedupe_gclid);
                  if ((!f || (g && 'aw.ds' !== g)) && qg(H.s)) {
                    var y = Ii('_gcl_aw');
                    u('gclaw', y.join('.'));
                  }
                  u('url', String(B.location).split(/[?#]/)[0]);
                  u('dclid', Yl(b, h));
                  !x && b && (v = 'https://pagead2.googlesyndication.com');
                }
                u('gdpr_consent', Vl());
                '1' === ri(!1)._up && u('gtm_up', '1');
                u('gclid', Yl(b, f));
                u('gclsrc', g);
                u('gtm', sl(!c));
                var w = v + '/pagead/landing?' + r.join('&');
                Xf(w);
              }
            }
            var e = Li(),
              f = e.gclid || '',
              g = e.gclsrc,
              h = e.dclid || '',
              l = !a && (!f || (g && 'aw.ds' !== g) ? !1 : !0),
              n = jg();
            if (l || n)
              n
                ? sg(
                    function () {
                      d();
                      qg(H.s) ||
                        mg(function (p) {
                          return d(!0, p.bf);
                        }, H.s);
                    },
                    [H.s]
                  )
                : d();
          }
          function Yl (a, b) {
            var c = a && !qg(H.s);
            return b && c ? '0' : b;
          }
          var Zl = function (a) {
            if (L.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle) return !0;
            var c = B.getComputedStyle(a, null);
            if ('hidden' === c.visibility) return !0;
            for (var d = a, e = c; d; ) {
              if ('none' === e.display) return !0;
              var f = e.opacity,
                g = e.filter;
              if (g) {
                var h = g.indexOf('opacity(');
                0 <= h &&
                  ((g = g.substring(h + 8, g.indexOf(')', h))),
                  '%' == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                  (f = Math.min(g, f)));
              }
              if (void 0 !== f && 0 >= f) return !0;
              (d = d.parentElement) && (e = B.getComputedStyle(d, null));
            }
            return !1;
          };
          var $l = function () {
              var a = L.body,
                b = L.documentElement || (a && a.parentElement),
                c,
                d;
              if (L.compatMode && 'BackCompat' !== L.compatMode)
                (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
              else {
                var e = function (f, g) {
                  return f && g ? Math.min(f, g) : Math.max(f, g);
                };
                I(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
              }
              return { width: d, height: c };
            },
            am = function (a) {
              var b = $l(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
              return f && g
                ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) *
                    (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1))
                : 0;
            };
          var hm = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
            im = ['SCRIPT', 'IMG', 'SVG', 'PATH', 'BR'],
            jm = ['BR'];
          function km (a) {
            var b;
            if (a === L.body) b = 'body';
            else {
              var c;
              if (a.id) c = '#' + a.id;
              else {
                var d;
                if (a.parentElement) {
                  var e;
                  a: {
                    var f = a.parentElement;
                    if (f) {
                      for (var g = 0; g < f.childElementCount; g++)
                        if (f.children[g] === a) {
                          e = g + 1;
                          break a;
                        }
                      e = -1;
                    } else e = 1;
                  }
                  d = km(a.parentElement) + '>:nth-child(' + e + ')';
                } else d = '';
                c = d;
              }
              b = c;
            }
            return b;
          }
          function lm () {
            var a;
            var b = [],
              c = L.body;
            if (c) {
              for (var d = c.querySelectorAll('*'), e = 0; e < d.length && 10000 > e; e++) {
                var f = d[e];
                if (!(0 <= im.indexOf(f.tagName.toUpperCase()))) {
                  for (var g = !1, h = 0; h < f.childElementCount && 10000 > h; h++)
                    if (!(0 <= jm.indexOf(f.children[h].tagName.toUpperCase()))) {
                      g = !0;
                      break;
                    }
                  g || b.push(f);
                }
              }
              a = { elements: b, status: 10000 < d.length ? '2' : '1' };
            } else a = { elements: b, status: '4' };
            for (var l = a, n = l.elements, p = [], q = 0; q < n.length; q++) {
              var t = n[q],
                r = t.textContent;
              t.value && (r = t.value);
              if (r) {
                var u = r.match(hm);
                if (u) {
                  var v = u[0],
                    x;
                  if (B.location) {
                    var y = qh(B.location, 'host', !0);
                    x = 0 <= v.toLowerCase().indexOf(y);
                  } else x = !1;
                  x || p.push({ element: t, Yi: v });
                }
              }
            }
            for (
              var w = [], z = 10 < p.length ? '3' : l.status, A = 0;
              A < p.length && 10 > A;
              A++
            ) {
              var C = p[A].element;
              w.push({ querySelector: km(C), tagName: C.tagName, isVisible: !Zl(C), type: 1 });
            }
            return { elements: w, status: z };
          }
          var Vm = function () {
              var a = !0;
              (Wl(7) && Wl(9) && Wl(10)) || (a = !1);
              var b = !0;
              b = !1;
              b && !Um() && (a = !1);
              return a;
            },
            Um = function () {
              var a = !0;
              (Wl(3) && Wl(4)) || (a = !1);
              return a;
            };
          function rn () {
            var a = O;
            return (a.gcq = a.gcq || new sn());
          }
          var tn = function (a, b, c) {
              rn().register(a, b, c);
            },
            un = function (a, b, c, d) {
              rn().push('event', [b, a], c, d);
            },
            vn = function (a, b) {
              rn().push('config', [a], b);
            },
            wn = function (a) {
              rn().push('set', [a]);
            },
            xn = function (a, b, c) {
              rn().push('get', [a, b], c);
            },
            yn = function (a) {
              return rn().getRemoteConfig(a);
            },
            zn = {},
            An = function () {
              this.status = 1;
              this.containerConfig = {};
              this.targetConfig = {};
              this.a = {};
              this.m = null;
              this.i = !1;
            },
            Bn = function (a, b, c, d, e) {
              this.type = a;
              this.m = b;
              this.ca = c || '';
              this.a = d;
              this.i = e;
            },
            sn = function () {
              this.m = {};
              this.i = {};
              this.a = [];
            },
            Cn = function (a, b) {
              var c = dj(b);
              return (a.m[c.containerId] = a.m[c.containerId] || new An());
            },
            Dn = function (a, b, c) {
              if (b) {
                var d = dj(b);
                if (d && 1 === Cn(a, b).status) {
                  Cn(a, b).status = 2;
                  var e = {};
                  Ik &&
                    (e.timeoutId = B.setTimeout(function () {
                      I(38);
                      uk();
                    }, 3000));
                  a.push('require', [e], d.containerId);
                  zn[d.containerId] = Za();
                  if (gj()) {
                  } else {
                    var g =
                        '/gtag/js?id=' + encodeURIComponent(d.containerId) + '&l=dataLayer&cx=c',
                      h =
                        ('http:' != B.location.protocol ? 'https:' : 'http:') +
                        ('//www.googletagmanager.com' + g),
                      l = el(c, g) || h;
                    Nf(l);
                  }
                }
              }
            },
            En = function (a, b, c, d) {
              if (d.ca) {
                var e = Cn(a, d.ca),
                  f = e.m;
                if (f) {
                  var g = E(c),
                    h = E(e.targetConfig[d.ca]),
                    l = E(e.containerConfig),
                    n = E(e.a),
                    p = E(a.i),
                    q = ch('gtm.uniqueEventId'),
                    t = dj(d.ca).prefix,
                    r = nl(
                      ml(ll(kl(jl(il(hl(g), h), l), n), p), function () {
                        Lk(q, t, '2');
                      }),
                      function () {
                        Lk(q, t, '3');
                      }
                    );
                  try {
                    Lk(q, t, '1');
                    f(d.ca, b, d.m, r);
                  } catch (u) {
                    Lk(q, t, '4');
                  }
                }
              }
            };
          sn.prototype.register = function (a, b, c) {
            var d = Cn(this, a);
            if (3 !== d.status) {
              d.m = b;
              d.status = 3;
              if (c) {
                d.a = c;
              }
              var e = dj(a),
                f = zn[e.containerId];
              if (void 0 !== f) {
                var g = O[e.containerId].bootstrap,
                  h = e.prefix.toUpperCase();
                O[e.containerId]._spx && (h = h.toLowerCase());
                var l = ch('gtm.uniqueEventId'),
                  n = h,
                  p = Za() - g;
                if (Ik && !zk[l]) {
                  l !== vk && (rk(), (vk = l));
                  var q = n + '.' + Math.floor(g - f) + '.' + Math.floor(p);
                  Dk = Dk ? Dk + ',' + q : '&cl=' + q;
                }
                delete zn[e.containerId];
              }
              this.flush();
            }
          };
          sn.prototype.push = function (a, b, c, d) {
            var e = Math.floor(Za() / 1000);
            Dn(this, c, b[0][H.Ja] || this.i[H.Ja]);
            this.a.push(new Bn(a, e, c, b, d));
            d || this.flush();
          };
          sn.prototype.flush = function (a) {
            for (var b = this; this.a.length; ) {
              var c = this.a[0];
              if (c.i) (c.i = !1), this.a.push(c);
              else
                switch (c.type) {
                  case 'require':
                    if (3 !== Cn(this, c.ca).status && !a) return;
                    Ik && B.clearTimeout(c.a[0].timeoutId);
                    break;
                  case 'set':
                    Sa(c.a[0], function (p, q) {
                      E(hb(p, q), b.i);
                    });
                    break;
                  case 'config':
                    var d = c.a[0],
                      e = !!d[H.hc];
                    delete d[H.hc];
                    var f = Cn(this, c.ca),
                      g = dj(c.ca),
                      h = g.containerId === g.id;
                    e || (h ? (f.containerConfig = {}) : (f.targetConfig[c.ca] = {}));
                    (f.i && e) || En(this, H.fa, d, c);
                    f.i = !0;
                    delete d[H.Ab];
                    h ? E(d, f.containerConfig) : E(d, f.targetConfig[c.ca]);
                    break;
                  case 'event':
                    En(this, c.a[1], c.a[0], c);
                    break;
                  case 'get':
                    var l = {},
                      n = ((l[H.za] = c.a[0]), (l[H.ya] = c.a[1]), l);
                    En(this, H.Ga, n, c);
                }
              this.a.shift();
            }
          };
          sn.prototype.getRemoteConfig = function (a) {
            return Cn(this, a).a;
          };
          var Fn = function (a, b, c) {};
          var Gn = function (a, b, c, d) {};
          var Hn = function (a) {};
          var In = function (a, b, c) {};
          var Jn = function (a, b) {
            return !0;
          };
          var Kn = function (a, b) {
            var c;
            return c;
          };
          var Ln = function (a) {};
          var Mn = !1,
            Nn = [];
          function On () {
            if (!Mn) {
              Mn = !0;
              for (var a = 0; a < Nn.length; a++) N(Nn[a]);
            }
          }
          var Pn = function (a) {
            Mn ? N(a) : Nn.push(a);
          };
          var Qn = function (a) {
            G(this.i.a, ['listener:!Fn'], arguments);
            Ve(this, 'process_dom_events', 'window', 'load');
            Pn(Ab(a));
          };
          var Rn = function (a, b) {
            var c;
            var e = !1;
            var f = zb(c, this.m, e);
            void 0 === f && void 0 !== c && I(45);
            return f;
          };
          var Sn = function (a) {
            var b;
            var f = !1;
            var g = zb(b, this.m, f);
            void 0 === g && void 0 !== b && I(45);
            return g;
          };
          var Tn = function (a, b) {
            var c = null,
              d = !1;
            G(this.i.a, ['functionPath:!string', 'arrayPath:!string'], arguments);
            Ve(this, 'access_globals', 'readwrite', a);
            Ve(this, 'access_globals', 'readwrite', b);
            var e = [];
            var f = a.split('.'),
              g = gb(f, e),
              h = f[f.length - 1];
            if (void 0 === g) throw Error('Path ' + a + ' does not exist.');
            var l = g[h];
            if (l && !Ja(l)) return null;
            if (l) return zb(l, this.m, d);
            var n;
            l = function () {
              if (!Ja(n.push)) throw Error('Object at ' + b + ' in window is not an array.');
              n.push.call(n, arguments);
            };
            g[h] = l;
            var p = b.split('.'),
              q = gb(p, e),
              t = p[p.length - 1];
            if (void 0 === q) throw Error('Path ' + p + ' does not exist.');
            n = q[t];
            void 0 === n && ((n = []), (q[t] = n));
            c = function () {
              l.apply(l, Array.prototype.slice.call(arguments, 0));
            };
            return zb(c, this.m, d);
          };
          var Un = function (a) {
            var b;
            var h = !1;
            return zb(b, this.m, h);
          };
          var Vn = function (a) {
            var b;
            return b;
          };
          var Wn = function (a, b) {
            b = void 0 === b ? !0 : b;
            var c;
            return c;
          };
          var Xn = function (a) {
            var b = null;
            return b;
          };
          var Yn = function (a, b) {
            var c;
            return c;
          };
          var Zn = function (a, b) {
            var c;
            return c;
          };
          var $n = function (a) {
            var b = '';
            return b;
          };
          function ao (a, b) {}
          var bo = function (a) {
            var b = '';
            return b;
          };
          var co = function () {
            Ve(this, 'get_user_agent');
            return B.navigator.userAgent;
          };
          var eo = function (a, b) {};
          var fo = {},
            go = function (a, b, c, d) {
              G(
                this.i.a,
                ['url:!string', 'onSuccess:?Fn', 'onFailure:?Fn', 'cacheToken:?string'],
                arguments
              );
              Ve(this, 'inject_script', a);
              var e = this.m,
                f = function () {
                  b instanceof jb && b.Pa(e);
                },
                g = function () {
                  c instanceof jb && c.Pa(e);
                };
              if (!d) {
                Nf(a, f, g);
                return;
              }
              var h = d;
              fo[h]
                ? (fo[h].onSuccess.push(f), fo[h].onFailure.push(g))
                : ((fo[h] = { onSuccess: [f], onFailure: [g] }),
                  (f = function () {
                    for (var l = fo[h].onSuccess, n = 0; n < l.length; n++) N(l[n]);
                    l.push = function (p) {
                      N(p);
                      return 0;
                    };
                  }),
                  (g = function () {
                    for (var l = fo[h].onFailure, n = 0; n < l.length; n++) N(l[n]);
                    fo[h] = null;
                  }),
                  Nf(a, f, g));
            };
          var ho = function () {
              return !1;
            },
            io = {
              getItem: function (a) {
                var b = null;
                return b;
              },
              setItem: function (a, b) {
                return !1;
              },
              removeItem: function (a) {},
            };
          var jo = function () {};
          var ko = function (a, b) {
            var c = !1;
            return c;
          };
          var lo = function () {
            var a = '';
            return a;
          };
          var mo = function () {
            var a = '';
            return a;
          };
          var no = function (a, b, c) {};
          var oo = function (a, b, c, d) {
            var e = this;
            d = void 0 === d ? !0 : d;
            var f = !1;
            return f;
          };
          var po = function (a, b, c) {
            G(this.i.a, ['path:!string', 'value:?*', 'overrideExisting:?boolean'], arguments);
            Ve(this, 'access_globals', 'readwrite', a);
            var d = !1;
            var e = a.split('.'),
              f = B,
              g;
            for (g = 0; g < e.length - 1; g++) {
              f = f[e[g]];
              if (void 0 === f) return !1;
            }
            if (void 0 === f[e[g]] || c) return (f[e[g]] = Ab(b, this.m, d)), !0;
            return !1;
          };
          function qo (a, b, c) {}
          var ro = function (a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
              var e = a.charCodeAt(d);
              128 > e
                ? (b[c++] = e)
                : (2048 > e
                    ? (b[c++] = (e >> 6) | 192)
                    : (55296 == (e & 64512) &&
                      d + 1 < a.length &&
                      56320 == (a.charCodeAt(d + 1) & 64512)
                        ? ((e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                          (b[c++] = (e >> 18) | 240),
                          (b[c++] = ((e >> 12) & 63) | 128))
                        : (b[c++] = (e >> 12) | 224),
                      (b[c++] = ((e >> 6) & 63) | 128)),
                  (b[c++] = (e & 63) | 128));
            }
            return b;
          };
          var so = function (a, b, c) {
            var d = this;
          };
          var to = {},
            uo = {};
          to.getItem = function (a) {
            var b = null;
            return b;
          };
          to.setItem = function (a, b) {};
          to.removeItem = function (a) {};
          to.clear = function () {};
          var vo = function (a) {
            var b;
            return b;
          };
          var Uc = function () {
            var a = new ff();
            gj()
              ? (a.add('injectHiddenIframe', Ia), a.add('injectScript', Ia))
              : (a.add('injectHiddenIframe', eo), a.add('injectScript', go));
            var b = no;
            a.add('Math', Oe());
            a.add('TestHelper', hf());
            a.add('addEventCallback', Hn);
            a.add('aliasInWindow', Jn);
            a.add('assertApi', Ke);
            a.add('assertThat', Le);
            a.add('callInWindow', Kn);
            a.add('callLater', Ln);
            a.add('copyFromDataLayer', Rn);
            a.add('copyFromWindow', Sn);
            a.add('createArgumentsQueue', Tn);
            a.add('createQueue', Un);
            a.add('decodeUri', Pe);
            a.add('decodeUriComponent', Qe);
            a.add('encodeUri', Re);
            a.add('encodeUriComponent', Se);
            a.add('fail', Te);
            a.add('fromBase64', Vn, !('atob' in B));
            a.add('generateRandom', Ue);
            a.add('getContainerVersion', We);
            a.add('getCookieValues', Wn);
            a.add('getQueryParameters', Yn);
            a.add('getReferrerQueryParameters', Zn);
            a.add('getReferrerUrl', $n);
            a.add('getTimestamp', Xe);
            a.add('getTimestampMillis', Xe);
            a.add('getType', Ye);
            a.add('getUrl', bo);
            a.add('localStorage', io, !ho());
            a.add('logToConsole', jo);
            a.add('makeInteger', $e);
            a.add('makeNumber', af);
            a.add('makeString', bf);
            a.add('makeTableMap', cf);
            a.add('mock', ef);
            a.add('queryPermission', ko);
            a.add('readCharacterSet', lo);
            a.add('readTitle', mo);
            a.add('sendPixel', b);
            a.add('setCookie', oo);
            a.add('setInWindow', po);
            a.add('sha256', so);
            a.add('templateStorage', to);
            a.add('toBase64', vo, !('btoa' in B));
            a.add(
              'JSON',
              Ze(function (c) {
                var d = this.m.a;
                d && d.log.call(this, 'error', c);
              })
            );
            return function (c) {
              var d;
              if (a.a.hasOwnProperty(c)) d = a.get(c, this);
              else {
                var e;
                if ((e = a.i.hasOwnProperty(c)))
                  b: {
                    var f = this.m.a;
                    if (f) {
                      var g = f.Ib();
                      if (g && 0 !== g.indexOf('__cvt_')) {
                        e = !0;
                        break b;
                      }
                    }
                    e = !1;
                  }
                if (e) d = a.i.hasOwnProperty(c) ? a.i[c] : void 0;
                else throw Error(c + ' is not a valid API name.');
              }
              return d;
            };
          };
          var Sc, be;
          function wo () {
            var a = data.runtime || [],
              b = data.runtime_lines;
            Sc = new Qc();
            xo();
            td = function (e, f, g) {
              yo(f);
              var h = new pb();
              Sa(f, function (r, u) {
                var v = zb(u);
                void 0 === v && void 0 !== u && I(44);
                h.set(r, v);
              });
              Sc.a.a.B = Pd();
              var l = {
                Ng: ce(e),
                eventId: void 0 !== g ? g.id : void 0,
                Ib: function () {
                  return e;
                },
                log: function () {},
              };
              if (Nk()) {
                var n = Ok(),
                  p = void 0,
                  q = void 0;
                l.da = {
                  i: {},
                  a: function (r, u, v) {
                    1 === u && (p = r);
                    7 === u && (q = v);
                    n(r, u, v);
                  },
                  m: df(),
                };
                l.log = function (r, u) {
                  if (p) {
                    var v = Array.prototype.slice.call(arguments, 1);
                    n(p, 4, { level: r, source: q, message: v });
                  }
                };
              }
              var t = Tc(l, [e, h]);
              Sc.a.a.B = void 0;
              t instanceof za && 'return' === t.a && (t = t.i);
              return Ab(t);
            };
            Vc();
            for (var c = 0; c < a.length; c++) {
              var d = a[c];
              if (!La(d) || 3 > d.length) {
                if (0 === d.length) continue;
                break;
              }
              b && b[c] && b[c].length && Ld(d, b[c]);
              Sc.yc(d);
            }
          }
          function yo (a) {
            var b = a.gtmOnSuccess,
              c = a.gtmOnFailure;
            Ja(b) &&
              (a.gtmOnSuccess = function () {
                N(b);
              });
            Ja(c) &&
              (a.gtmOnFailure = function () {
                N(c);
              });
          }
          function xo () {
            var a = Sc;
            O.SANDBOXED_JS_SEMAPHORE = O.SANDBOXED_JS_SEMAPHORE || 0;
            Wc(a, function (b, c, d) {
              O.SANDBOXED_JS_SEMAPHORE++;
              try {
                return b.apply(c, d);
              } finally {
                O.SANDBOXED_JS_SEMAPHORE--;
              }
            });
          }
          function zo (a) {
            void 0 !== a &&
              Sa(a, function (b, c) {
                for (var d = 0; d < c.length; d++) {
                  var e = c[d].replace(/^_*/, '');
                  Wg[e] = Wg[e] || [];
                  Wg[e].push(b);
                }
              });
          }
          var Ao = 'HA GF G UA AW DC'.split(' '),
            Bo = !1,
            Co = {},
            Do = !1;
          function Eo (a, b) {
            var c = { event: a };
            b &&
              ((c.eventModel = E(b)),
              b[H.Tc] && (c.eventCallback = b[H.Tc]),
              b[H.bc] && (c.eventTimeout = b[H.bc]));
            return c;
          }
          function Fo () {
            return Bo;
          }
          var Io = {
            config: function (a) {},
            event: function (a) {
              var b = a[1];
              if (!(2 > a.length) && m(b)) {
                var c;
                if (2 < a.length) {
                  if ((!xb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
                  c = a[2];
                }
                var d = Eo(b, c);
                return d;
              }
            },
            js: function (a) {
              if (2 == a.length && a[1].getTime)
                return (Do = !0), Fo(), { event: 'gtm.js', 'gtm.start': a[1].getTime() };
            },
            policy: function (a) {
              if (3 === a.length) {
                var b = a[1],
                  c = a[2],
                  d = be.i;
                d.a[b] ? d.a[b].push(c) : (d.a[b] = [c]);
              }
            },
            set: function (a) {
              var b;
              2 == a.length && xb(a[1])
                ? (b = E(a[1]))
                : 3 == a.length &&
                  m(a[1]) &&
                  ((b = {}), xb(a[2]) || La(a[2]) ? (b[a[1]] = E(a[2])) : (b[a[1]] = a[2]));
              if (b) {
                b._clear = !0;
                return b;
              }
            },
            consent: function (a) {
              function b () {
                Fo() && E(a[2], { subcommand: a[1] });
              }
              if (3 === a.length) {
                I(39);
                var c = Xg(),
                  d = a[1];
                'default' === d ? (b(), og(a[2])) : 'update' === d && (b(), pg(a[2], c));
              }
            },
          };
          Io.get = function (a) {};
          var Jo = { policy: !0 };
          var Ko = function (a, b) {
              var c = a.hide;
              if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                  e;
                for (e in c)
                  if (c.hasOwnProperty(e) && !0 === c[e]) {
                    d = !1;
                    break;
                  }
                d && (c.end(), (c.end = null));
              }
            },
            Mo = function (a) {
              var b = Lo(),
                c = b && b.hide;
              c && c.end && (c[a] = !0);
            };
          var cp = function (a) {
            if (bp(a)) return a;
            this.a = a;
          };
          cp.prototype.vh = function () {
            return this.a;
          };
          var bp = function (a) {
            return !a || 'object' !== vb(a) || xb(a) ? !1 : 'getUntrustedUpdateValue' in a;
          };
          cp.prototype.getUntrustedUpdateValue = cp.prototype.vh;
          var dp = [],
            ep = !1,
            fp = function (a) {
              return B['dataLayer'].push(a);
            },
            gp = function (a) {
              var b = O['dataLayer'],
                c = b ? b.subscribers : 1,
                d = 0;
              return function () {
                ++d === c && a();
              };
            };
          function hp (a) {
            var b = a._clear;
            Sa(a, function (d, e) {
              '_clear' !== d && (b && fh(d, void 0), fh(d, e));
            });
            Sg || (Sg = a['gtm.start']);
            var c = a['gtm.uniqueEventId'];
            if (!a.event) return !1;
            c || ((c = Xg()), (a['gtm.uniqueEventId'] = c), fh('gtm.uniqueEventId', c));
            return cl(a);
          }
          function ip () {
            for (var a = !1; !ep && 0 < dp.length; ) {
              ep = !0;
              delete $g.eventModel;
              bh();
              var b = dp.shift();
              if (null != b) {
                var c = bp(b);
                if (c) {
                  var d = b;
                  b = bp(d) ? d.getUntrustedUpdateValue() : void 0;
                  for (
                    var e = [
                        'gtm.allowlist',
                        'gtm.blocklist',
                        'gtm.whitelist',
                        'gtm.blacklist',
                        'tagTypeBlacklist',
                      ],
                      f = 0;
                    f < e.length;
                    f++
                  ) {
                    var g = e[f],
                      h = ch(g, 1);
                    if (La(h) || xb(h)) h = E(h);
                    ah[g] = h;
                  }
                }
                try {
                  if (Ja(b))
                    try {
                      b.call(dh);
                    } catch (v) {}
                  else if (La(b)) {
                    var l = b;
                    if (m(l[0])) {
                      var n = l[0].split('.'),
                        p = n.pop(),
                        q = l.slice(1),
                        t = ch(n.join('.'), 2);
                      if (void 0 !== t && null !== t)
                        try {
                          t[p].apply(t, q);
                        } catch (v) {}
                    }
                  } else {
                    if (Ta(b)) {
                      a: {
                        var r = b;
                        if (r.length && m(r[0])) {
                          var u = Io[r[0]];
                          if (u && (!c || !Jo[r[0]])) {
                            b = u(r);
                            break a;
                          }
                        }
                        b = void 0;
                      }
                      if (!b) {
                        ep = !1;
                        continue;
                      }
                    }
                    a = hp(b) || a;
                  }
                } finally {
                  c && bh(!0);
                }
              }
              ep = !1;
            }
            return !a;
          }
          function jp () {
            var a = ip();
            try {
              Ko(B['dataLayer'], Yd.C);
            } catch (b) {}
            return a;
          }
          var lp = function () {
              var a = Lf('dataLayer', []),
                b = Lf('google_tag_manager', {});
              b = b['dataLayer'] = b['dataLayer'] || {};
              Pj(function () {
                b.gtmDom || ((b.gtmDom = !0), a.push({ event: 'gtm.dom' }));
              });
              Pn(function () {
                b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: 'gtm.load' }));
              });
              b.subscribers = (b.subscribers || 0) + 1;
              var c = a.push;
              a.push = function () {
                var e;
                if (0 < O.SANDBOXED_JS_SEMAPHORE) {
                  e = [];
                  for (var f = 0; f < arguments.length; f++) e[f] = new cp(arguments[f]);
                } else e = [].slice.call(arguments, 0);
                var g = c.apply(a, e);
                dp.push.apply(dp, e);
                if (300 < this.length) for (I(4); 300 < this.length; ) this.shift();
                var h = 'boolean' !== typeof g || g;
                return ip() && h;
              };
              var d = a.slice(0);
              dp.push.apply(dp, d);
              kp() && N(jp);
            },
            kp = function () {
              var a = !0;
              return a;
            };
          var mp = {};
          mp.ic = new String('undefined');
          var np = function (a) {
            this.a = function (b) {
              for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === mp.ic ? b : a[d]);
              return c.join('');
            };
          };
          np.prototype.toString = function () {
            return this.a('undefined');
          };
          np.prototype.valueOf = np.prototype.toString;
          mp.Ag = np;
          mp.jd = {};
          mp.eh = function (a) {
            return new np(a);
          };
          var op = {};
          mp.ei = function (a, b) {
            var c = Xg();
            op[c] = [a, b];
            return c;
          };
          mp.ef = function (a) {
            var b = a ? 0 : 1;
            return function (c) {
              var d = op[c];
              if (d && 'function' === typeof d[b]) d[b]();
              op[c] = void 0;
            };
          };
          mp.Dh = function (a) {
            for (var b = !1, c = !1, d = 2; d < a.length; d++)
              (b = b || 8 === a[d]), (c = c || 16 === a[d]);
            return b && c;
          };
          mp.Yh = function (a) {
            if (a === mp.ic) return a;
            var b = Xg();
            mp.jd[b] = a;
            return 'google_tag_manager["' + Yd.C + '"].macro(' + b + ')';
          };
          mp.Ph = function (a, b, c) {
            a instanceof mp.Ag && ((a = a.a(mp.ei(b, c))), (b = Ia));
            return { wd: a, J: b };
          };
          var pp = function (a, b, c) {
              function d (f, g) {
                var h = f[g];
                return h;
              }
              var e = {
                event: b,
                'gtm.element': a,
                'gtm.elementClasses': d(a, 'className'),
                'gtm.elementId': a['for'] || Tf(a, 'id') || '',
                'gtm.elementTarget': a.formTarget || d(a, 'target') || '',
              };
              c && (e['gtm.triggers'] = c.join(','));
              e['gtm.elementUrl'] =
                (a.attributes && a.attributes.formaction ? a.formAction : '') ||
                a.action ||
                d(a, 'href') ||
                a.src ||
                a.code ||
                a.codebase ||
                '';
              return e;
            },
            qp = function (a) {
              O.hasOwnProperty('autoEventsSettings') || (O.autoEventsSettings = {});
              var b = O.autoEventsSettings;
              b.hasOwnProperty(a) || (b[a] = {});
              return b[a];
            },
            rp = function (a, b, c) {
              qp(a)[b] = c;
            },
            sp = function (a, b, c, d) {
              var e = qp(a),
                f = $a(e, b, d);
              e[b] = c(f);
            },
            tp = function (a, b, c) {
              var d = qp(a);
              return $a(d, b, c);
            };
          var up = ['input', 'select', 'textarea'],
            vp = ['button', 'hidden', 'image', 'reset', 'submit'],
            wp = function (a) {
              var b = a.tagName.toLowerCase();
              return !Oa(up, function (c) {
                return c === b;
              }) ||
                ('input' === b &&
                  Oa(vp, function (c) {
                    return c === a.type.toLowerCase();
                  }))
                ? !1
                : !0;
            },
            xp = function (a) {
              return a.form
                ? a.form.tagName
                  ? a.form
                  : L.getElementById(a.form)
                : Wf(a, ['form'], 100);
            },
            yp = function (a, b, c) {
              if (!a.elements) return 0;
              for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if (wp(g)) {
                  if (g.getAttribute(c) === d) return f;
                  f++;
                }
              }
              return 0;
            };
          var zp = !!B.MutationObserver,
            Ap = void 0,
            Bp = function (a) {
              if (!Ap) {
                var b = function () {
                  var c = L.body;
                  if (c)
                    if (zp)
                      new MutationObserver(function () {
                        for (var e = 0; e < Ap.length; e++) N(Ap[e]);
                      }).observe(c, { childList: !0, subtree: !0 });
                    else {
                      var d = !1;
                      Rf(c, 'DOMNodeInserted', function () {
                        d ||
                          ((d = !0),
                          N(function () {
                            d = !1;
                            for (var e = 0; e < Ap.length; e++) N(Ap[e]);
                          }));
                      });
                    }
                };
                Ap = [];
                L.body ? b() : N(b);
              }
              Ap.push(a);
            };
          var Mp = function (a, b, c) {
            function d () {
              var g = a();
              f += e ? ((Za() - e) * g.playbackRate) / 1000 : 0;
              e = Za();
            }
            var e = 0,
              f = 0;
            return {
              xc: function (g, h, l) {
                var n = a(),
                  p = n.ff,
                  q =
                    void 0 !== l
                      ? Math.round(l)
                      : void 0 !== h
                      ? Math.round(n.ff * h)
                      : Math.round(n.fh),
                  t = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round((q / p) * 100),
                  r = L.hidden ? !1 : 0.5 <= am(c);
                d();
                var u = pp(c, 'gtm.video', [b]);
                u['gtm.videoProvider'] = 'youtube';
                u['gtm.videoStatus'] = g;
                u['gtm.videoUrl'] = n.url;
                u['gtm.videoTitle'] = n.title;
                u['gtm.videoDuration'] = Math.round(p);
                u['gtm.videoCurrentTime'] = Math.round(q);
                u['gtm.videoElapsedTime'] = Math.round(f);
                u['gtm.videoPercent'] = t;
                u['gtm.videoVisible'] = r;
                fp(u);
              },
              gi: function () {
                e = Za();
              },
              md: function () {
                d();
              },
            };
          };
          var Np = B.clearTimeout,
            Op = B.setTimeout,
            S = function (a, b, c) {
              if (gj()) {
                b && N(b);
              } else return Nf(a, b, c);
            },
            Pp = function () {
              return new Date();
            },
            Qp = function () {
              return B.location.href;
            },
            Rp = function (a) {
              return rh(th(a), 'fragment');
            },
            Sp = function (a) {
              return sh(th(a));
            },
            Tp = function (a, b) {
              return ch(a, b || 2);
            },
            Up = function (a, b, c) {
              var d;
              b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = fp(a))) : (d = fp(a));
              return d;
            },
            Vp = function (a, b) {
              B[a] = b;
            },
            T = function (a, b, c) {
              b && (void 0 === B[a] || (c && !B[a])) && (B[a] = b);
              return B[a];
            },
            Wp = function (a, b, c) {
              return xh(a, b, void 0 === c ? !0 : !!c);
            },
            Xp = function (a, b, c) {
              return 0 === Gh(a, b, c);
            },
            Yp = function (a, b) {
              if (gj()) {
                b && N(b);
              } else Pf(a, b);
            },
            Zp = function (a) {
              return !!tp(a, 'init', !1);
            },
            $p = function (a) {
              rp(a, 'init', !0);
            },
            aq = function (a, b) {
              var c = (void 0 === b ? 0 : b) ? 'www.googletagmanager.com/gtag/js' : Qg;
              c += '?id=' + encodeURIComponent(a) + '&l=dataLayer';
              S(ij('https://', 'http://', c));
            },
            bq = function (a, b) {
              var c = a[b];
              return c;
            },
            cq = function (a, b, c) {
              Ik && (Cb(a) || Mk(c, b, a));
            };
          var dq = mp.Ph;
          function Aq (a, b) {
            a = String(a);
            b = String(b);
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c;
          }
          var Bq = new Qa();
          function Cq (a, b) {
            function c (g) {
              var h = th(g),
                l = rh(h, 'protocol'),
                n = rh(h, 'host', !0),
                p = rh(h, 'port'),
                q = rh(h, 'path').toLowerCase().replace(/\/$/, '');
              if (void 0 === l || ('http' == l && '80' == p) || ('https' == l && '443' == p))
                (l = 'web'), (p = 'default');
              return [l, n, p, q];
            }
            for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
              if (d[f] !== e[f]) return !1;
            return !0;
          }
          function Dq (a) {
            return Eq(a) ? 1 : 0;
          }
          function Eq (a) {
            var b = a.arg0,
              c = a.arg1;
            if (a.any_of && La(c)) {
              for (var d = 0; d < c.length; d++) {
                var e = E(a, {});
                E({ arg1: c[d], any_of: void 0 }, e);
                if (Dq(e)) return !0;
              }
              return !1;
            }
            switch (a['function']) {
              case '_cn':
                return 0 <= String(b).indexOf(String(c));
              case '_css':
                var f;
                a: {
                  if (b) {
                    var g = [
                      'matches',
                      'webkitMatchesSelector',
                      'mozMatchesSelector',
                      'msMatchesSelector',
                      'oMatchesSelector',
                    ];
                    try {
                      for (var h = 0; h < g.length; h++)
                        if (b[g[h]]) {
                          f = b[g[h]](c);
                          break a;
                        }
                    } catch (r) {}
                  }
                  f = !1;
                }
                return f;
              case '_ew':
                return Aq(b, c);
              case '_eq':
                return String(b) == String(c);
              case '_ge':
                return Number(b) >= Number(c);
              case '_gt':
                return Number(b) > Number(c);
              case '_lc':
                var l;
                l = String(b).split(',');
                return 0 <= Na(l, String(c));
              case '_le':
                return Number(b) <= Number(c);
              case '_lt':
                return Number(b) < Number(c);
              case '_re':
                var n;
                var p = a.ignore_case ? 'i' : void 0;
                try {
                  var q = String(c) + p,
                    t = Bq.get(q);
                  t || ((t = new RegExp(c, p)), Bq.set(q, t));
                  n = t.test(b);
                } catch (r) {
                  n = !1;
                }
                return n;
              case '_sw':
                return 0 == String(b).indexOf(String(c));
              case '_um':
                return Cq(b, c);
            }
            return !1;
          }
          var Fq = {},
            Gq = encodeURI,
            W = encodeURIComponent,
            Hq = Qf;
          var Iq = function (a, b) {
            if (!a) return !1;
            var c = rh(th(a), 'host');
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
              var e = b[d] && b[d].toLowerCase();
              if (e) {
                var f = c.length - e.length;
                0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e));
                if (0 <= f && c.indexOf(e, f) == f) return !0;
              }
            }
            return !1;
          };
          var Jq = function (a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
              a[f] &&
                a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) &&
                ((d[a[f][b]] = a[f][c]), (e = !0));
            return e ? d : null;
          };
          Fq.Eh = function () {
            var a = !1;
            return a;
          };
          var tr = null,
            ur = [],
            vr = 0,
            wr = null;
          function xr () {
            var a = Za() - vr;
            0 <= a
              ? (wr && (B.clearTimeout(wr), (wr = null)), yr())
              : wr ||
                (wr = B.setTimeout(function () {
                  yr();
                  wr = null;
                }, 0 - a));
          }
          function yr () {
            vr = Za();
            var a = ur;
            ur = [];
            var b,
              c = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            b = c ? c.call(a) : { next: da(a) };
            for (var d = b.next(); !d.done; d = b.next()) {
              var e = d.value;
              e();
            }
            tr &&
              (tr.takeRecords(),
              ur.length ||
                (tr && (tr.disconnect(), (tr = null)), wr && (B.clearTimeout(wr), (wr = null))));
          }
          function as () {
            return (B.gaGlobal = B.gaGlobal || {});
          }
          var bs = function () {
              var a = as();
              a.hid = a.hid || Pa();
              return a.hid;
            },
            cs = function (a, b) {
              var c = as();
              if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
            };
          var Ks = function (a, b) {
            var c;
            var d = ls(a);
            d ? (js(d, a) || (I(25), a.abort()), (c = d)) : (c = void 0);
            var e = c,
              f;
            a: {
              var g = a.L[H.Xa];
              g
                ? ((g = '' + g), gs(g, a) || (I(31), a.abort()), cs(g, qg(H.M)), (f = g))
                : (I(32), a.abort(), (f = ''));
            }
            return { clientId: f, Af: e };
          };
          var Ls = window,
            Ms = document,
            Ns = function (a) {
              var b = Ls._gaUserPrefs;
              if ((b && b.ioo && b.ioo()) || (a && !0 === Ls['ga-disable-' + a])) return !0;
              try {
                var c = Ls.external;
                if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0;
              } catch (f) {}
              for (var d = vh('AMP_TOKEN', String(Ms.cookie), !0), e = 0; e < d.length; e++)
                if ('$OPT_OUT' == d[e]) return !0;
              return Ms.getElementById('__gaOptOutExtension') ? !0 : !1;
            };
          function Qs (a) {
            delete a.eventModel[H.Ab];
            Ts(a.eventModel);
          }
          var Ts = function (a) {
            Sa(a, function (c) {
              '_' === c.charAt(0) && delete a[c];
            });
            var b = a[H.na] || {};
            Sa(b, function (c) {
              '_' === c.charAt(0) && delete b[c];
            });
          };
          var Ws = function (a, b, c) {
              un(b, c, a);
            },
            Xs = function (a, b, c) {
              un(b, c, a, !0);
            },
            Zs = function (a, b) {};
          function Ys (a, b) {}
          var Z = { b: {} };
          (Z.b.sdl = ['google']),
            (function () {
              function a () {
                return !!(
                  Object.keys(l('horiz.pix')).length ||
                  Object.keys(l('horiz.pct')).length ||
                  Object.keys(l('vert.pix')).length ||
                  Object.keys(l('vert.pct')).length
                );
              }
              function b (w) {
                for (var z = [], A = w.split(','), C = 0; C < A.length; C++) {
                  var D = Number(A[C]);
                  if (isNaN(D)) return [];
                  p.test(A[C]) || z.push(D);
                }
                return z;
              }
              function c () {
                var w = 0,
                  z = 0;
                return function () {
                  var A = $l(),
                    C = A.height;
                  w = Math.max(v.scrollLeft + A.width, w);
                  z = Math.max(v.scrollTop + C, z);
                  return { hh: w, ih: z };
                };
              }
              function d () {
                r = T('self');
                u = r.document;
                v = u.scrollingElement || (u.body && u.body.parentNode);
                y = c();
              }
              function e (w, z, A, C) {
                var D = l(z),
                  F = {},
                  M;
                for (M in D) {
                  F.Ua = M;
                  if (D.hasOwnProperty(F.Ua)) {
                    var Q = Number(F.Ua);
                    w < Q ||
                      (Up({
                        event: 'gtm.scrollDepth',
                        'gtm.scrollThreshold': Q,
                        'gtm.scrollUnits': A.toLowerCase(),
                        'gtm.scrollDirection': C,
                        'gtm.triggers': D[F.Ua].join(','),
                      }),
                      sp(
                        'sdl',
                        z,
                        (function (ba) {
                          return function (ca) {
                            delete ca[ba.Ua];
                            return ca;
                          };
                        })(F),
                        {}
                      ));
                  }
                  F = { Ua: F.Ua };
                }
              }
              function f () {
                var w = y(),
                  z = w.hh,
                  A = w.ih,
                  C = (z / v.scrollWidth) * 100,
                  D = (A / v.scrollHeight) * 100;
                e(z, 'horiz.pix', q.kc, t.Ke);
                e(C, 'horiz.pct', q.jc, t.Ke);
                e(A, 'vert.pix', q.kc, t.Ye);
                e(D, 'vert.pct', q.jc, t.Ye);
                rp('sdl', 'pending', !1);
              }
              function g () {
                var w = 250,
                  z = !1;
                u.scrollingElement &&
                  u.documentElement &&
                  r.addEventListener &&
                  ((w = 50), (z = !0));
                var A = 0,
                  C = !1,
                  D = function () {
                    C
                      ? (A = Op(D, w))
                      : ((A = 0),
                        f(),
                        Zp('sdl') &&
                          !a() &&
                          (Sf(r, 'scroll', F), Sf(r, 'resize', F), rp('sdl', 'init', !1)));
                    C = !1;
                  },
                  F = function () {
                    z && y();
                    A ? (C = !0) : ((A = Op(D, w)), rp('sdl', 'pending', !0));
                  };
                return F;
              }
              function h (w, z, A) {
                if (z) {
                  var C = b(String(w));
                  sp(
                    'sdl',
                    A,
                    function (D) {
                      for (var F = 0; F < C.length; F++) {
                        var M = String(C[F]);
                        D.hasOwnProperty(M) || (D[M] = []);
                        D[M].push(z);
                      }
                      return D;
                    },
                    {}
                  );
                }
              }
              function l (w) {
                return tp('sdl', w, {});
              }
              function n (w) {
                N(w.vtp_gtmOnSuccess);
                var z = w.vtp_uniqueTriggerId,
                  A = w.vtp_horizontalThresholdsPixels,
                  C = w.vtp_horizontalThresholdsPercent,
                  D = w.vtp_verticalThresholdUnits,
                  F = w.vtp_verticalThresholdsPixels,
                  M = w.vtp_verticalThresholdsPercent;
                switch (w.vtp_horizontalThresholdUnits) {
                  case q.kc:
                    h(A, z, 'horiz.pix');
                    break;
                  case q.jc:
                    h(C, z, 'horiz.pct');
                }
                switch (D) {
                  case q.kc:
                    h(F, z, 'vert.pix');
                    break;
                  case q.jc:
                    h(M, z, 'vert.pct');
                }
                Zp('sdl')
                  ? tp('sdl', 'pending') ||
                    (x || (d(), (x = !0)),
                    N(function () {
                      return f();
                    }))
                  : (d(),
                    (x = !0),
                    v &&
                      ($p('sdl'),
                      rp('sdl', 'pending', !0),
                      N(function () {
                        f();
                        if (a()) {
                          var Q = g();
                          Rf(r, 'scroll', Q);
                          Rf(r, 'resize', Q);
                        } else rp('sdl', 'init', !1);
                      })));
              }
              var p = /^\s*$/,
                q = { jc: 'PERCENT', kc: 'PIXELS' },
                t = { Ye: 'vertical', Ke: 'horizontal' },
                r,
                u,
                v,
                x = !1,
                y;
              (function (w) {
                Z.__sdl = w;
                Z.__sdl.g = 'sdl';
                Z.__sdl.h = !0;
                Z.__sdl.priorityOverride = 0;
              })(function (w) {
                w.vtp_triggerStartOption
                  ? n(w)
                  : Pn(function () {
                      n(w);
                    });
              });
            })();
          (Z.b.jsm = ['customScripts']),
            (function () {
              (function (a) {
                Z.__jsm = a;
                Z.__jsm.g = 'jsm';
                Z.__jsm.h = !0;
                Z.__jsm.priorityOverride = 0;
              })(function (a) {
                if (void 0 !== a.vtp_javascript) {
                  var b = a.vtp_javascript;
                  try {
                    var c = T('google_tag_manager');
                    var d = c && c.e && c.e(b);
                    cq(d, 'jsm', a.vtp_gtmEventId);
                    return d;
                  } catch (e) {}
                }
              });
            })();
          (Z.b.e = ['google']),
            (function () {
              (function (a) {
                Z.__e = a;
                Z.__e.g = 'e';
                Z.__e.h = !0;
                Z.__e.priorityOverride = 0;
              })(function (a) {
                return String(hh(a.vtp_gtmEventId, 'event'));
              });
            })();
          (Z.b.f = ['google']),
            (function () {
              (function (a) {
                Z.__f = a;
                Z.__f.g = 'f';
                Z.__f.h = !0;
                Z.__f.priorityOverride = 0;
              })(function (a) {
                var b = Tp('gtm.referrer', 1) || L.referrer;
                return b
                  ? a.vtp_component && 'URL' != a.vtp_component
                    ? rh(
                        th(String(b)),
                        a.vtp_component,
                        a.vtp_stripWww,
                        a.vtp_defaultPages,
                        a.vtp_queryKey
                      )
                    : Sp(String(b))
                  : String(b);
              });
            })();
          (Z.b.access_globals = ['google']),
            (function () {
              function a (b, c, d) {
                var e = { key: d, read: !1, write: !1, execute: !1 };
                switch (c) {
                  case 'read':
                    e.read = !0;
                    break;
                  case 'write':
                    e.write = !0;
                    break;
                  case 'readwrite':
                    e.read = e.write = !0;
                    break;
                  case 'execute':
                    e.execute = !0;
                    break;
                  default:
                    throw Error('Invalid access_globals request ' + c);
                }
                return e;
              }
              (function (b) {
                Z.__access_globals = b;
                Z.__access_globals.g = 'access_globals';
                Z.__access_globals.h = !0;
                Z.__access_globals.priorityOverride = 0;
              })(function (b) {
                for (
                  var c = b.vtp_keys || [],
                    d = b.vtp_createPermissionError,
                    e = [],
                    f = [],
                    g = [],
                    h = 0;
                  h < c.length;
                  h++
                ) {
                  var l = c[h],
                    n = l.key;
                  l.read && e.push(n);
                  l.write && f.push(n);
                  l.execute && g.push(n);
                }
                return {
                  assert: function (p, q, t) {
                    if (!m(t)) throw d(p, {}, 'Key must be a string.');
                    if ('read' === q) {
                      if (-1 < Na(e, t)) return;
                    } else if ('write' === q) {
                      if (-1 < Na(f, t)) return;
                    } else if ('readwrite' === q) {
                      if (-1 < Na(f, t) && -1 < Na(e, t)) return;
                    } else if ('execute' === q) {
                      if (-1 < Na(g, t)) return;
                    } else
                      throw d(
                        p,
                        {},
                        "Operation must be either 'read', 'write', or 'execute', was " + q
                      );
                    throw d(p, {}, 'Prohibited ' + q + ' on global variable: ' + t + '.');
                  },
                  K: a,
                };
              });
            })();
          (Z.b.u = ['google']),
            (function () {
              var a = function (b) {
                return {
                  toString: function () {
                    return b;
                  },
                };
              };
              (function (b) {
                Z.__u = b;
                Z.__u.g = 'u';
                Z.__u.h = !0;
                Z.__u.priorityOverride = 0;
              })(function (b) {
                var c;
                b.vtp_customUrlSource ? (c = b.vtp_customUrlSource) : (c = Tp('gtm.url', 1));
                c = c || Qp();
                var d = b[a('vtp_component')];
                if (!d || 'URL' == d) return Sp(String(c));
                var e = th(String(c)),
                  f;
                if ('QUERY' === d)
                  a: {
                    var g = b[a('vtp_multiQueryKeys').toString()],
                      h = b[a('vtp_queryKey').toString()] || '',
                      l = b[a('vtp_ignoreEmptyQueryParam').toString()],
                      n;
                    g
                      ? La(h)
                        ? (n = h)
                        : (n = String(h).replace(/\s+/g, '').split(','))
                      : (n = [String(h)]);
                    for (var p = 0; p < n.length; p++) {
                      var q = rh(e, 'QUERY', void 0, void 0, n[p]);
                      if (void 0 != q && (!l || '' !== q)) {
                        f = q;
                        break a;
                      }
                    }
                    f = void 0;
                  }
                else
                  f = rh(
                    e,
                    d,
                    'HOST' == d ? b[a('vtp_stripWww')] : void 0,
                    'PATH' == d ? b[a('vtp_defaultPages')] : void 0,
                    void 0
                  );
                return f;
              });
            })();
          (Z.b.v = ['google']),
            (function () {
              (function (a) {
                Z.__v = a;
                Z.__v.g = 'v';
                Z.__v.h = !0;
                Z.__v.priorityOverride = 0;
              })(function (a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Tp(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1),
                  d = void 0 !== c ? c : a.vtp_defaultValue;
                cq(d, 'v', a.vtp_gtmEventId);
                return d;
              });
            })();
          (Z.b.ua = ['google']),
            (function () {
              function a (q) {
                return qg(q);
              }
              function b (q, t) {
                if (jg() && !e[q]) {
                  var r = function () {
                    var u = dk(),
                      v = 'gtm' + Xg(),
                      x = n(t),
                      y = { name: v };
                    l(x, y, !0);
                    u('create', q, y);
                    u(function () {
                      u.remove(v);
                    });
                  };
                  mg(r, H.M);
                  mg(r, H.s);
                  e[q] = !0;
                }
              }
              var c,
                d = {},
                e = {},
                f = {
                  name: !0,
                  clientId: !0,
                  sampleRate: !0,
                  siteSpeedSampleRate: !0,
                  alwaysSendReferrer: !0,
                  allowAnchor: !0,
                  allowLinker: !0,
                  cookieName: !0,
                  cookieDomain: !0,
                  cookieExpires: !0,
                  cookiePath: !0,
                  cookieUpdate: !0,
                  cookieFlags: !0,
                  legacyCookieDomain: !0,
                  legacyHistoryImport: !0,
                  storage: !0,
                  useAmpClientId: !0,
                  storeGac: !0,
                  _cd2l: !0,
                  _useUp: !0,
                  _cs: !0,
                },
                g = {
                  allowAnchor: !0,
                  allowLinker: !0,
                  alwaysSendReferrer: !0,
                  anonymizeIp: !0,
                  cookieUpdate: !0,
                  exFatal: !0,
                  forceSSL: !0,
                  javaEnabled: !0,
                  legacyHistoryImport: !0,
                  nonInteraction: !0,
                  useAmpClientId: !0,
                  useBeacon: !0,
                  storeGac: !0,
                  allowAdFeatures: !0,
                  allowAdPersonalizationSignals: !0,
                  _cd2l: !0,
                },
                h = { urlPassthrough: !0 },
                l = function (q, t, r) {
                  var u = 0;
                  if (q)
                    for (var v in q)
                      if (
                        !h[v] &&
                        q.hasOwnProperty(v) &&
                        ((r && f[v]) || (!r && void 0 === f[v]))
                      ) {
                        var x = g[v] ? Wa(q[v]) : q[v];
                        'anonymizeIp' != v || x || (x = void 0);
                        t[v] = x;
                        u++;
                      }
                  return u;
                },
                n = function (q) {
                  var t = {};
                  q.vtp_gaSettings &&
                    E(Jq(q.vtp_gaSettings.vtp_fieldsToSet, 'fieldName', 'value'), t);
                  E(Jq(q.vtp_fieldsToSet, 'fieldName', 'value'), t);
                  qg(H.M) || (t.storage = 'none');
                  qg(H.s) || ((t.allowAdFeatures = !1), (t.storeGac = !1));
                  Vm() || (t.allowAdFeatures = !1);
                  Um() || (t.allowAdPersonalizationSignals = !1);
                  q.vtp_transportUrl && (t._x_19 = q.vtp_transportUrl);
                  return t;
                },
                p = function (q) {
                  function t (ta, P) {
                    void 0 !== P && F('set', ta, P);
                  }
                  var r = {},
                    u = {},
                    v = {},
                    x = {};
                  if (q.vtp_gaSettings) {
                    var y = q.vtp_gaSettings;
                    E(Jq(y.vtp_contentGroup, 'index', 'group'), u);
                    E(Jq(y.vtp_dimension, 'index', 'dimension'), v);
                    E(Jq(y.vtp_metric, 'index', 'metric'), x);
                    var w = E(y);
                    w.vtp_fieldsToSet = void 0;
                    w.vtp_contentGroup = void 0;
                    w.vtp_dimension = void 0;
                    w.vtp_metric = void 0;
                    q = E(q, w);
                  }
                  E(Jq(q.vtp_contentGroup, 'index', 'group'), u);
                  E(Jq(q.vtp_dimension, 'index', 'dimension'), v);
                  E(Jq(q.vtp_metric, 'index', 'metric'), x);
                  var z = n(q),
                    A = fk(q.vtp_functionName);
                  if (Ja(A)) {
                    var C = '',
                      D = '';
                    q.vtp_setTrackerName && 'string' == typeof q.vtp_trackerName
                      ? '' !== q.vtp_trackerName && ((D = q.vtp_trackerName), (C = D + '.'))
                      : ((D = 'gtm' + Xg()), (C = D + '.'));
                    var F = function (ta) {
                        var P = [].slice.call(arguments, 0);
                        P[0] = C + P[0];
                        A.apply(window, P);
                      },
                      M = function (ta, P) {
                        return void 0 === P ? P : ta(P);
                      },
                      Q = function (ta, P) {
                        if (P) for (var fb in P) P.hasOwnProperty(fb) && F('set', ta + fb, P[fb]);
                      },
                      ba = function () {},
                      ca = { name: D };
                    l(z, ca, !0);
                    var va = q.vtp_trackingId || r.trackingId;
                    A('create', va, ca);
                    F('set', '&gtm', sl(!0));
                    jg() && (F('set', '&gcs', rg()), b(va, q));
                    z._x_19 &&
                      (null == Kf && delete z._x_19,
                      z._x_20 && !d[D] && ((d[D] = !0), A(kk(D, String(z._x_20)))));
                    q.vtp_enableRecaptcha && F('require', 'recaptcha', 'recaptcha.js');
                    (function (ta, P) {
                      void 0 !== q[P] && F('set', ta, q[P]);
                    })('nonInteraction', 'vtp_nonInteraction');
                    Q('contentGroup', u);
                    Q('dimension', v);
                    Q('metric', x);
                    var J = {};
                    l(z, J, !1) && F('set', J);
                    var K;
                    q.vtp_enableLinkId && F('require', 'linkid', 'linkid.js');
                    F('set', 'hitCallback', function () {
                      var ta = z && z.hitCallback;
                      Ja(ta) && ta();
                      q.vtp_gtmOnSuccess();
                    });
                    if ('TRACK_EVENT' == q.vtp_trackType) {
                      q.vtp_enableEcommerce && (F('require', 'ec', 'ec.js'), ba());
                      var V = {
                        hitType: 'event',
                        eventCategory: String(q.vtp_eventCategory || r.category),
                        eventAction: String(q.vtp_eventAction || r.action),
                        eventLabel: M(String, q.vtp_eventLabel || r.label),
                        eventValue: M(Va, q.vtp_eventValue || r.value),
                      };
                      l(K, V, !1);
                      F('send', V);
                    } else if ('TRACK_SOCIAL' == q.vtp_trackType) {
                    } else if ('TRACK_TRANSACTION' == q.vtp_trackType) {
                    } else if ('TRACK_TIMING' == q.vtp_trackType) {
                    } else if ('DECORATE_LINK' == q.vtp_trackType) {
                    } else if ('DECORATE_FORM' == q.vtp_trackType) {
                    } else if ('TRACK_DATA' == q.vtp_trackType) {
                    } else {
                      q.vtp_enableEcommerce && (F('require', 'ec', 'ec.js'), ba());
                      if (
                        q.vtp_doubleClick ||
                        'DISPLAY_FEATURES' == q.vtp_advertisingFeaturesType
                      ) {
                        var fc =
                          '_dc_gtm_' + String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, '');
                        F('require', 'displayfeatures', void 0, { cookieName: fc });
                      }
                      if (
                        'DISPLAY_FEATURES_WITH_REMARKETING_LISTS' == q.vtp_advertisingFeaturesType
                      ) {
                        var Cc =
                          '_dc_gtm_' + String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, '');
                        F('require', 'adfeatures', { cookieName: Cc });
                      }
                      K ? F('send', 'pageview', K) : F('send', 'pageview');
                      Wa(z.urlPassthrough) && hk(C);
                    }
                    if (!c) {
                      var jd = q.vtp_useDebugVersion ? 'u/analytics_debug.js' : 'analytics.js';
                      q.vtp_useInternalVersion &&
                        !q.vtp_useDebugVersion &&
                        (jd = 'internal/' + jd);
                      c = !0;
                      var kd = el(z._x_19, '/analytics.js'),
                        Df = ij(
                          'https:',
                          'http:',
                          '//www.google-analytics.com/' + jd,
                          z && !!z.forceSSL
                        );
                      S(
                        'analytics.js' === jd && kd ? kd : Df,
                        function () {
                          var ta = dk();
                          (ta && ta.loaded) || q.vtp_gtmOnFailure();
                        },
                        q.vtp_gtmOnFailure
                      );
                    }
                  } else N(q.vtp_gtmOnFailure);
                };
              (function (q) {
                Z.__ua = q;
                Z.__ua.g = 'ua';
                Z.__ua.h = !0;
                Z.__ua.priorityOverride = 0;
              })(function (q) {
                sg(
                  function () {
                    p(q);
                  },
                  [H.M, H.s]
                );
              });
            })();
          (Z.b.inject_script = ['google']),
            (function () {
              function a (b, c) {
                return { url: c };
              }
              (function (b) {
                Z.__inject_script = b;
                Z.__inject_script.g = 'inject_script';
                Z.__inject_script.h = !0;
                Z.__inject_script.priorityOverride = 0;
              })(function (b) {
                var c = b.vtp_urls || [],
                  d = b.vtp_createPermissionError;
                return {
                  assert: function (e, f) {
                    if (!m(f)) throw d(e, {}, 'Script URL must be a string.');
                    try {
                      if (Be(th(f), c)) return;
                    } catch (g) {
                      throw d(e, {}, 'Invalid script URL filter.');
                    }
                    throw d(e, {}, 'Prohibited script URL: ' + f);
                  },
                  K: a,
                };
              });
            })();
          (Z.b.ytl = ['google']),
            (function () {
              function a () {
                var v = Math.round(1000000000 * Math.random()) + '';
                return L.getElementById(v) ? a() : v;
              }
              function b (v, x) {
                if (!v) return !1;
                for (var y = 0; y < q.length; y++)
                  if (0 <= v.indexOf('//' + q[y] + '/' + x)) return !0;
                return !1;
              }
              function c (v) {
                var x = -1 !== v.indexOf('?') ? '&' : '?';
                if (-1 < v.indexOf('origin=')) return v + x + 'enablejsapi=1';
                if (!r) {
                  var y = T('document');
                  r = y.location.protocol + '//' + y.location.hostname;
                  y.location.port && (r += ':' + y.location.port);
                }
                return v + x + 'enablejsapi=1&origin=' + encodeURIComponent(r);
              }
              function d (v, x) {
                var y = v.getAttribute('src');
                if (b(y, 'embed/')) {
                  if (0 < y.indexOf('enablejsapi=1')) return !0;
                  if (x) return v.setAttribute('src', c(y)), !0;
                }
                return !1;
              }
              function e (v, x) {
                if (
                  !v.getAttribute('data-gtm-yt-inspected-' + x.Sd) &&
                  (v.setAttribute('data-gtm-yt-inspected-' + x.Sd, 'true'), d(v, x.lf))
                ) {
                  v.id || (v.id = a());
                  var y = T('YT'),
                    w = y.get(v.id);
                  w || (w = new y.Player(v.id));
                  var z = g(w, x),
                    A = {},
                    C;
                  for (C in z)
                    (A.ib = C),
                      z.hasOwnProperty(A.ib) &&
                        w.addEventListener(
                          A.ib,
                          (function (D) {
                            return function (F) {
                              return z[D.ib](F.data);
                            };
                          })(A)
                        ),
                      (A = { ib: A.ib });
                }
              }
              function f (v) {
                N(function () {
                  function x () {
                    for (var w = y.getElementsByTagName('iframe'), z = w.length, A = 0; A < z; A++)
                      e(w[A], v);
                  }
                  var y = T('document');
                  x();
                  Bp(x);
                });
              }
              function g (v, x) {
                var y, w;
                function z () {
                  va = Mp(
                    function () {
                      return { url: V, title: U, ff: K, fh: v.getCurrentTime(), playbackRate: R };
                    },
                    x.Sd,
                    v.getIframe()
                  );
                  K = 0;
                  U = V = '';
                  R = 1;
                  return A;
                }
                function A (Y) {
                  switch (Y) {
                    case t.PLAYING:
                      K = Math.round(v.getDuration());
                      V = v.getVideoUrl();
                      if (v.getVideoData) {
                        var na = v.getVideoData();
                        U = na ? na.title : '';
                      }
                      R = v.getPlaybackRate();
                      x.Yg ? va.xc('start') : va.md();
                      J = n(x.$h, x.Zh, v.getDuration());
                      return C(Y);
                    default:
                      return A;
                  }
                }
                function C () {
                  wa = v.getCurrentTime();
                  X = Pp().getTime();
                  va.gi();
                  ca();
                  return D;
                }
                function D (Y) {
                  var na;
                  switch (Y) {
                    case t.ENDED:
                      return M(Y);
                    case t.PAUSED:
                      na = 'pause';
                    case t.BUFFERING:
                      var Ma = v.getCurrentTime() - wa;
                      na =
                        1 < Math.abs(((Pp().getTime() - X) / 1000) * R - Ma)
                          ? 'seek'
                          : na || 'buffering';
                      v.getCurrentTime() && (x.Xg ? va.xc(na) : va.md());
                      ba();
                      return F;
                    case t.UNSTARTED:
                      return z(Y);
                    default:
                      return D;
                  }
                }
                function F (Y) {
                  switch (Y) {
                    case t.ENDED:
                      return M(Y);
                    case t.PLAYING:
                      return C(Y);
                    case t.UNSTARTED:
                      return z(Y);
                    default:
                      return F;
                  }
                }
                function M () {
                  for (; w; ) {
                    var Y = y;
                    Np(w);
                    Y();
                  }
                  x.Wg && va.xc('complete', 1);
                  return z(t.UNSTARTED);
                }
                function Q () {}
                function ba () {
                  w && (Np(w), (w = 0), (y = Q));
                }
                function ca () {
                  if (J.length && 0 !== R) {
                    var Y = -1,
                      na;
                    do {
                      na = J[0];
                      if (na.Qa > v.getDuration()) return;
                      Y = (na.Qa - v.getCurrentTime()) / R;
                      if (0 > Y && (J.shift(), 0 === J.length)) return;
                    } while (0 > Y);
                    y = function () {
                      w = 0;
                      y = Q;
                      0 < J.length &&
                        J[0].Qa === na.Qa &&
                        (J.shift(), va.xc('progress', na.uf, na.yf));
                      ca();
                    };
                    w = Op(y, 1000 * Y);
                  }
                }
                var va,
                  J = [],
                  K,
                  V,
                  U,
                  R,
                  wa,
                  X,
                  sa = z(t.UNSTARTED);
                w = 0;
                y = Q;
                return {
                  onStateChange: function (Y) {
                    sa = sa(Y);
                  },
                  onPlaybackRateChange: function (Y) {
                    wa = v.getCurrentTime();
                    X = Pp().getTime();
                    va.md();
                    R = Y;
                    ba();
                    ca();
                  },
                };
              }
              function h (v) {
                for (var x = v.split(','), y = x.length, w = [], z = 0; z < y; z++) {
                  var A = parseInt(x[z], 10);
                  isNaN(A) || 100 < A || 0 > A || w.push(A / 100);
                }
                w.sort(function (C, D) {
                  return C - D;
                });
                return w;
              }
              function l (v) {
                for (var x = v.split(','), y = x.length, w = [], z = 0; z < y; z++) {
                  var A = parseInt(x[z], 10);
                  isNaN(A) || 0 > A || w.push(A);
                }
                w.sort(function (C, D) {
                  return C - D;
                });
                return w;
              }
              function n (v, x, y) {
                var w = v.map(function (C) {
                  return { Qa: C, yf: C, uf: void 0 };
                });
                if (!x.length) return w;
                var z = x.map(function (C) {
                  return { Qa: C * y, yf: void 0, uf: C };
                });
                if (!w.length) return z;
                var A = w.concat(z);
                A.sort(function (C, D) {
                  return C.Qa - D.Qa;
                });
                return A;
              }
              function p (v) {
                var x = !!v.vtp_captureStart,
                  y = !!v.vtp_captureComplete,
                  w = !!v.vtp_capturePause,
                  z = h(v.vtp_progressThresholdsPercent + ''),
                  A = l(v.vtp_progressThresholdsTimeInSeconds + ''),
                  C = !!v.vtp_fixMissingApi;
                if (x || y || w || z.length || A.length) {
                  var D = {
                      Yg: x,
                      Wg: y,
                      Xg: w,
                      Zh: z,
                      $h: A,
                      lf: C,
                      Sd: void 0 === v.vtp_uniqueTriggerId ? '' : v.vtp_uniqueTriggerId,
                    },
                    F = T('YT'),
                    M = function () {
                      f(D);
                    };
                  N(v.vtp_gtmOnSuccess);
                  if (F) F.ready && F.ready(M);
                  else {
                    var Q = T('onYouTubeIframeAPIReady');
                    Vp('onYouTubeIframeAPIReady', function () {
                      Q && Q();
                      M();
                    });
                    N(function () {
                      for (
                        var ba = T('document'),
                          ca = ba.getElementsByTagName('script'),
                          va = ca.length,
                          J = 0;
                        J < va;
                        J++
                      ) {
                        var K = ca[J].getAttribute('src');
                        if (b(K, 'iframe_api') || b(K, 'player_api')) return;
                      }
                      for (
                        var V = ba.getElementsByTagName('iframe'), U = V.length, R = 0;
                        R < U;
                        R++
                      )
                        if (!u && d(V[R], D.lf)) {
                          S('https://www.youtube.com/iframe_api');
                          u = !0;
                          break;
                        }
                    });
                  }
                } else N(v.vtp_gtmOnSuccess);
              }
              var q = ['www.youtube.com', 'www.youtube-nocookie.com'],
                t = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 },
                r,
                u = !1;
              (function (v) {
                Z.__ytl = v;
                Z.__ytl.g = 'ytl';
                Z.__ytl.h = !0;
                Z.__ytl.priorityOverride = 0;
              })(function (v) {
                v.vtp_triggerStartOption
                  ? p(v)
                  : Pj(function () {
                      p(v);
                    });
              });
            })();
          (Z.b.opt = ['google']),
            (function () {
              var a;
              (function (b) {
                Z.__opt = b;
                Z.__opt.g = 'opt';
                Z.__opt.h = !0;
                Z.__opt.priorityOverride = 0;
              })(function (b) {
                var c = {};
                if (b.vtp_gaSettings) {
                  var d = b.vtp_gaSettings;
                  E(Jq(d.vtp_fieldsToSet, 'fieldName', 'value'), c);
                  b.vtp_gaSettings = null;
                  d.vtp_fieldsToSet = void 0;
                  var e = E(d);
                  b = E(b, e) || {};
                }
                E(Jq(b.vtp_fieldsToSet, 'fieldName', 'value'), c);
                var f = fk(b.vtp_functionName);
                if (Ja(f)) {
                  f.r = !0;
                  var g = '',
                    h = '';
                  b.vtp_setTrackerName && 'string' === typeof b.vtp_trackerName
                    ? '' !== b.vtp_trackerName && ((h = b.vtp_trackerName), (g = h + '.'))
                    : ((h = 'gtm' + Xg()), (g = h + '.'));
                  var l = {
                      name: !0,
                      clientId: !0,
                      sampleRate: !0,
                      siteSpeedSampleRate: !0,
                      alwaysSendReferrer: !0,
                      allowAnchor: !0,
                      allowLinker: !0,
                      cookieName: !0,
                      cookieDomain: !0,
                      cookieExpires: !0,
                      cookiePath: !0,
                      cookieUpdate: !0,
                      legacyCookieDomain: !0,
                      legacyHistoryImport: !0,
                      storage: !0,
                      useAmpClientId: !0,
                      storeGac: !0,
                    },
                    n = {
                      allowAnchor: !0,
                      allowLinker: !0,
                      alwaysSendReferrer: !0,
                      anonymizeIp: !0,
                      cookieUpdate: !0,
                      exFatal: !0,
                      forceSSL: !0,
                      javaEnabled: !0,
                      legacyHistoryImport: !0,
                      nonInteraction: !0,
                      useAmpClientId: !0,
                      useBeacon: !0,
                      storeGac: !0,
                    },
                    p = function (x, y, w) {
                      var z = 0,
                        A;
                      for (A in x)
                        if (x.hasOwnProperty(A) && ((w && l[A]) || (!w && void 0 === l[A]))) {
                          var C = n[A] ? Wa(x[A]) : x[A];
                          'anonymizeIp' !== A || C || (C = void 0);
                          y[A] = C;
                          z++;
                        }
                      return z;
                    },
                    q = { name: h };
                  p(c, q, !0);
                  var t = { '&gtm': sl(!0) };
                  p(c, t, !1);
                  var r = encodeURI(
                    ij(
                      'https:',
                      'http:',
                      '//www.google-analytics.com/' +
                        (b.vtp_useDebugVersion ? 'u/analytics_debug.js' : 'analytics.js'),
                      !!c.forceSSL
                    )
                  );
                  f('create', b.vtp_trackingId, q);
                  f(g + 'set', t);
                  f(g + 'require', b.vtp_optimizeContainerId, { dataLayer: 'dataLayer' });
                  f(b.vtp_gtmOnSuccess);
                  f(g + 'require', 'render');
                  a ||
                    ((a = !0),
                    S(
                      r,
                      function () {
                        return dk().loaded || b.vtp_gtmOnFailure();
                      },
                      b.vtp_gtmOnFailure
                    ));
                  var u = T('dataLayer'),
                    v = u && u.hide;
                  v && (v.end || !0 === v['GTM-W9SLGS']) && (v[b.vtp_optimizeContainerId] = !0);
                } else N(b.vtp_gtmOnFailure);
              });
            })();
          (Z.b.aev = ['google']),
            (function () {
              function a (r, u) {
                var v = hh(r, 'gtm');
                if (v) return v[u];
              }
              function b (r, u, v, x) {
                x || (x = 'element');
                var y = r + '.' + u,
                  w;
                if (p.hasOwnProperty(y)) w = p[y];
                else {
                  var z = a(r, x);
                  if (z && ((w = v(z)), (p[y] = w), q.push(y), 35 < q.length)) {
                    var A = q.shift();
                    delete p[A];
                  }
                }
                return w;
              }
              function c (r, u, v) {
                var x = a(r, t[u]);
                return void 0 !== x ? x : v;
              }
              function d (r, u) {
                if (!r) return !1;
                var v = e(Qp());
                La(u) ||
                  (u = String(u || '')
                    .replace(/\s+/g, '')
                    .split(','));
                for (var x = [v], y = 0; y < u.length; y++) {
                  var w = u[y];
                  if (w.hasOwnProperty('is_regex'))
                    if (w.is_regex)
                      try {
                        w = new RegExp(w.domain);
                      } catch (A) {
                        continue;
                      }
                    else w = w.domain;
                  if (w instanceof RegExp) {
                    if (w.test(r)) return !1;
                  } else {
                    var z = w;
                    if (0 != z.length) {
                      if (0 <= e(r).indexOf(z)) return !1;
                      x.push(e(z));
                    }
                  }
                }
                return !Iq(r, x);
              }
              function e (r) {
                n.test(r) || (r = 'http://' + r);
                return rh(th(r), 'HOST', !0);
              }
              function f (r, u, v) {
                switch (r) {
                  case 'SUBMIT_TEXT':
                    return b(u, 'FORM.' + r, g, 'formSubmitElement') || v;
                  case 'LENGTH':
                    var x = b(u, 'FORM.' + r, h);
                    return void 0 === x ? v : x;
                  case 'INTERACTED_FIELD_ID':
                    return l(u, 'id', v);
                  case 'INTERACTED_FIELD_NAME':
                    return l(u, 'name', v);
                  case 'INTERACTED_FIELD_TYPE':
                    return l(u, 'type', v);
                  case 'INTERACTED_FIELD_POSITION':
                    var y = a(u, 'interactedFormFieldPosition');
                    return void 0 === y ? v : y;
                  case 'INTERACT_SEQUENCE_NUMBER':
                    var w = a(u, 'interactSequenceNumber');
                    return void 0 === w ? v : w;
                  default:
                    return v;
                }
              }
              function g (r) {
                switch (r.tagName.toLowerCase()) {
                  case 'input':
                    return Tf(r, 'value');
                  case 'button':
                    return Uf(r);
                  default:
                    return null;
                }
              }
              function h (r) {
                if ('form' === r.tagName.toLowerCase() && r.elements) {
                  for (var u = 0, v = 0; v < r.elements.length; v++) wp(r.elements[v]) && u++;
                  return u;
                }
              }
              function l (r, u, v) {
                var x = a(r, 'interactedFormField');
                return (x && Tf(x, u)) || v;
              }
              var n = /^https?:\/\//i,
                p = {},
                q = [],
                t = {
                  ATTRIBUTE: 'elementAttribute',
                  CLASSES: 'elementClasses',
                  ELEMENT: 'element',
                  ID: 'elementId',
                  HISTORY_CHANGE_SOURCE: 'historyChangeSource',
                  HISTORY_NEW_STATE: 'newHistoryState',
                  HISTORY_NEW_URL_FRAGMENT: 'newUrlFragment',
                  HISTORY_OLD_STATE: 'oldHistoryState',
                  HISTORY_OLD_URL_FRAGMENT: 'oldUrlFragment',
                  TARGET: 'elementTarget',
                };
              (function (r) {
                Z.__aev = r;
                Z.__aev.g = 'aev';
                Z.__aev.h = !0;
                Z.__aev.priorityOverride = 0;
              })(function (r) {
                var u = r.vtp_gtmEventId,
                  v = r.vtp_defaultValue,
                  x = r.vtp_varType;
                switch (x) {
                  case 'TAG_NAME':
                    var y = a(u, 'element');
                    return (y && y.tagName) || v;
                  case 'TEXT':
                    return b(u, x, Uf) || v;
                  case 'URL':
                    var w;
                    a: {
                      var z = String(a(u, 'elementUrl') || v || ''),
                        A = th(z),
                        C = String(r.vtp_component || 'URL');
                      switch (C) {
                        case 'URL':
                          w = z;
                          break a;
                        case 'IS_OUTBOUND':
                          w = d(z, r.vtp_affiliatedDomains);
                          break a;
                        default:
                          w = rh(A, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey);
                      }
                    }
                    return w;
                  case 'ATTRIBUTE':
                    var D;
                    if (void 0 === r.vtp_attribute) D = c(u, x, v);
                    else {
                      var F = r.vtp_attribute,
                        M = a(u, 'element');
                      D = (M && Tf(M, F)) || v || '';
                    }
                    return D;
                  case 'MD':
                    var Q = r.vtp_mdValue,
                      ba = b(u, 'MD', Ip);
                    return Q && ba ? Lp(ba, Q) || v : ba || v;
                  case 'FORM':
                    return f(String(r.vtp_component || 'SUBMIT_TEXT'), u, v);
                  default:
                    var ca = c(u, x, v);
                    cq(ca, 'aev', r.vtp_gtmEventId);
                    return ca;
                }
              });
            })();
          (Z.b.gas = ['google']),
            (function () {
              (function (a) {
                Z.__gas = a;
                Z.__gas.g = 'gas';
                Z.__gas.h = !0;
                Z.__gas.priorityOverride = 0;
              })(function (a) {
                var b = E(a),
                  c = b;
                c[Jd.Ka] = null;
                c[Jd.rg] = null;
                var d = (b = c);
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e &&
                  (d.vtp_fieldsToSet.push({ fieldName: 'cookieDomain', value: e }),
                  delete d.vtp_cookieDomain);
                return b;
              });
            })();
          (Z.b.paused = []),
            (function () {
              (function (a) {
                Z.__paused = a;
                Z.__paused.g = 'paused';
                Z.__paused.h = !0;
                Z.__paused.priorityOverride = 0;
              })(function (a) {
                N(a.vtp_gtmOnFailure);
              });
            })();
          (Z.b.html = ['customScripts']),
            (function () {
              function a (d, e, f, g) {
                return function () {
                  const $___old_e0e05bc358549e09 = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'sessionStorage'
                  );
                  try {
                    if ($___old_e0e05bc358549e09)
                      ({}.constructor.defineProperty(
                        window,
                        'sessionStorage',
                        $___stub_b317e19f866a2da7.sessionStorage
                      ));
                    return function () {
                      try {
                        if (0 < e.length) {
                          var h = e.shift(),
                            l = a(d, e, f, g);
                          if (
                            'SCRIPT' == String(h.nodeName).toUpperCase() &&
                            'text/gtmscript' == h.type
                          ) {
                            var n = L.createElement('script');
                            n.async = !1;
                            n.type = 'text/javascript';
                            n.id = h.id;
                            n.text = h.text || h.textContent || h.innerHTML || '';
                            h.charset && (n.charset = h.charset);
                            var p = h.getAttribute('data-gtmsrc');
                            p && ((n.src = p), Mf(n, l));
                            d.insertBefore(n, null);
                            p || l();
                          } else if (
                            h.innerHTML &&
                            0 <= h.innerHTML.toLowerCase().indexOf('<script')
                          ) {
                            for (var q = []; h.firstChild; ) q.push(h.removeChild(h.firstChild));
                            d.insertBefore(h, null);
                            a(h, q, l, g)();
                          } else d.insertBefore(h, null), l();
                        } else f();
                      } catch (t) {
                        N(g);
                      }
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_e0e05bc358549e09)
                      ({}.constructor.defineProperty(
                        window,
                        'sessionStorage',
                        $___old_e0e05bc358549e09
                      ));
                  }
                };
              }
              var b = function (d, e, f) {
                Pj(function () {
                  var g = O.postscribe,
                    h = { done: e },
                    l = L.createElement('div');
                  l.style.display = 'none';
                  l.style.visibility = 'hidden';
                  L.body.appendChild(l);
                  try {
                    g(l, d, h);
                  } catch (n) {
                    N(f);
                  }
                });
              };
              var c = function (d) {
                if (L.body) {
                  var e = d.vtp_gtmOnFailure,
                    f = dq(d.vtp_html, d.vtp_gtmOnSuccess, e),
                    g = f.wd,
                    h = f.J;
                  if (d.vtp_useIframe) {
                  } else d.vtp_supportDocumentWrite ? b(g, h, e) : a(L.body, Vf(g), h, e)();
                } else
                  Op(function () {
                    c(d);
                  }, 200);
              };
              Z.__html = c;
              Z.__html.g = 'html';
              Z.__html.h = !0;
              Z.__html.priorityOverride = 0;
            })();
          var $s = {};
          ($s.macro = function (a) {
            if (mp.jd.hasOwnProperty(a)) return mp.jd[a];
          }),
            ($s.onHtmlSuccess = mp.ef(!0)),
            ($s.onHtmlFailure = mp.ef(!1));
          $s.dataLayer = dh;
          $s.callback = function (a) {
            Vg.hasOwnProperty(a) && Ja(Vg[a]) && Vg[a]();
            delete Vg[a];
          };
          $s.bootstrap = 0;
          $s._spx = !1;
          function at () {
            O[Yd.C] = $s;
            cb(Wg, Z.b);
            Bd = Bd || mp;
            Cd = Ud;
          }
          function bt () {
            Zf.gtm_3pds = !0;
            Zf.gtag_cs_api = !0;
            O = B.google_tag_manager = B.google_tag_manager || {};
            Tl();
            if (O[Yd.C]) {
              var a = O.zones;
              a && a.unregisterChild(Yd.C);
            } else {
              for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++)
                ud.push(c[d]);
              for (var e = b.tags || [], f = 0; f < e.length; f++) xd.push(e[f]);
              for (var g = b.predicates || [], h = 0; h < g.length; h++) wd.push(g[h]);
              for (var l = b.rules || [], n = 0; n < l.length; n++) {
                for (var p = l[n], q = {}, t = 0; t < p.length; t++)
                  q[p[t][0]] = Array.prototype.slice.call(p[t], 1);
                vd.push(q);
              }
              zd = Z;
              Ad = Dq;
              var r = data.permissions || {},
                u = data.sandboxed_scripts,
                v = data.security_groups;
              wo();
              be = new ae(r);
              if (void 0 !== u)
                for (var x = ['sandboxedScripts'], y = 0; y < u.length; y++) {
                  var w = u[y].replace(/^_*/, '');
                  Wg[w] = x;
                }
              zo(v);
              at();
              lp();
              Kj = !1;
              Lj = 0;
              if (
                ('interactive' == L.readyState && !L.createEventObject) ||
                'complete' == L.readyState
              )
                Nj();
              else {
                Rf(L, 'DOMContentLoaded', Nj);
                Rf(L, 'readystatechange', Nj);
                if (L.createEventObject && L.documentElement.doScroll) {
                  var z = !0;
                  try {
                    z = !B.frameElement;
                  } catch (M) {}
                  z && Oj();
                }
                Rf(B, 'load', Nj);
              }
              Mn = !1;
              'complete' === L.readyState ? On() : Rf(B, 'load', On);
              a: {
                if (!Ik) break a;
                B.setInterval(Jk, 86400000);
              }
              var F = O;
              F.postscribe || (F.postscribe = B.postscribe || De);
              Tg = new Date().getTime();
            }
          }
          (function (a) {
            var e = !0;
            e = !1;
            if (e) {
              a();
              return;
            }
            var f = function () {
                var n = B['google.tagmanager.debugui2.queue'];
                n ||
                  ((n = []),
                  (B['google.tagmanager.debugui2.queue'] = n),
                  Nf('https://www.googletagmanager.com/debug/bootstrap'));
                return n;
              },
              g = 'x' === rh(B.location, 'query', !1, void 0, 'gtm_debug');
            if (!g && L.referrer) {
              var h = th(L.referrer);
              g = 'tagassistant.google.com' === qh(h, 'host');
            }
            if (!g) {
              var l = xh('__TAG_ASSISTANT');
              g = l.length && l[0].length;
            }
            B.__TAG_ASSISTANT_API && (g = !0);
            if (g && Kf) {
              f().push({
                messageType: 'CONTAINER_STARTING',
                data: {
                  scriptSource: Kf,
                  resume: function () {
                    a();
                  },
                },
              });
              return;
            }
            a();
          })(bt);
        }.apply(this, arguments);
      } finally {
        if ($___old_c984ca54bf7ab600)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_c984ca54bf7ab600
          ));
        if ($___old_8cef4e96755e0372)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'appVersion',
            $___old_8cef4e96755e0372
          ));
      }
    })();
  })();
}
