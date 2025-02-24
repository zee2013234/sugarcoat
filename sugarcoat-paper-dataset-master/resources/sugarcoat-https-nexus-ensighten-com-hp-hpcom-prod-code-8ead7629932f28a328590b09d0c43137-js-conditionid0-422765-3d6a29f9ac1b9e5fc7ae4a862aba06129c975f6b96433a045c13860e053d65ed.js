{
  const $___stub_f81a89698ffc49dd = {};
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
  })($___stub_f81a89698ffc49dd);
  const $___stub_053c907fde22f83d = {};
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
  })($___stub_053c907fde22f83d);
  (function () {
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (
              tag.isValid &&
              (lcCurrentURL.indexOf(tag.url.toLowerCase()) !== -1 ||
                tag.url.indexOf(location.hostname + location.pathname) !== -1)
            )
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: 'http://www8.hp.com/de/de/instant-ink/overview.html',
            isValid: true,
            src: '2326416',
            type: 'ipsin0',
            cat: 'de_ip000',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/es/es/instant-ink/overview.html',
            isValid: true,
            src: '2326416',
            type: 'ipsin0',
            cat: 'es_ip0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/fr/fr/instant-ink/overview.html',
            isValid: true,
            src: '2326416',
            type: 'ipsin0',
            cat: 'fr_ip000',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/uk/en/instant-ink/overview.html',
            isValid: true,
            src: '2326416',
            type: 'ipsin0',
            cat: 'uk_ip000',
            ord: '<random>',
          },
        ]);
      },
      1663287,
      438035
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            new Image().src = url;
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (
              tag.isValid &&
              (lcCurrentURL.indexOf(tag.url.toLowerCase()) !== -1 ||
                tag.url.indexOf(location.hostname + location.pathname) !== -1)
            )
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/hk/zh/printers/deskjet3700.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'dj3700',
            ord: '<random>',
          },
          {
            url: '/hk/en/printers/deskjet3700.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'dj3700',
            ord: '<random>',
          },
          {
            url: '/tw/zh/printers/deskjet3700.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'dj3700',
            ord: '<random>',
          },
          {
            url: '/id/en/printers/ink-advantage.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpia01',
            ord: '<random>',
          },
          {
            url: '/ph/en/printers/ink-advantage.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpia01',
            ord: '<random>',
          },
          {
            url: '/in/en/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/au/en/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/nz/en/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/cn/zh/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/sg/en/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/my/en/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/ph/en/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/hk/en/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/hk/zh/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/tw/zh/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/kr/ko/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/th/th/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/id/en/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
          {
            url: '/vn/vi/printers/laserjet-pro-family.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'ljprofam',
            ord: '<random>',
          },
        ]);
      },
      2646833,
      438183
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          function assignCTA (tag) {
            var elements = document.getElementsByTagName('a');
            var position = 0;
            for (var i = 0; i < elements.length; i++)
              if (elements[i].innerHTML.indexOf(tag.cta) !== -1) {
                position++;
                elements[i].addEventListener('click', function () {
                  insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
                });
              }
            console.log('.: "' + tag.cta + '" buttons CTA tags assigned , TOTAL : ' + position);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (
              tag.isValid &&
              (lcCurrentURL.indexOf(tag.url.toLowerCase()) !== -1 ||
                tag.url.indexOf(location.hostname + location.pathname) !== -1)
            )
              if (typeof tag.cta != 'undefined') assignCTA(tag);
              else insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: 'http://www8.hp.com/be/nl/campaigns/gaming/index.html',
            isValid: true,
            src: '2326416',
            type: 'gamin0',
            cat: 'be_co0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/dk/da/campaigns/gaming/index.html',
            isValid: true,
            src: '2326416',
            type: 'gamin0',
            cat: 'dk_co0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/no/no/campaigns/gaming/index.html',
            isValid: true,
            src: '2326416',
            type: 'gamin0',
            cat: 'no_co0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/pl/pl/campaigns/gaming/',
            isValid: true,
            src: '2326416',
            type: 'gamin0',
            cat: 'pl_co0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/pt/pt/campaigns/gaming/index.html',
            isValid: true,
            src: '2326416',
            type: 'gamin0',
            cat: 'pt_co0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/ru/ru/campaigns/gaming/index.html',
            isValid: true,
            src: '2326416',
            type: 'gamin0',
            cat: 'ru_co0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/tr/tr/campaigns/gaming/index.html',
            isValid: true,
            src: '2326416',
            type: 'gamin0',
            cat: 'tr_co0',
            ord: '<random>',
          },
        ]);
      },
      1654985,
      435864
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            new Image().src = url;
            console.log('.: MTR-31 : ' + type + ' - ' + cat);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (lcCurrentURL.indexOf(tag.url) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/my/en/ads/ink-advantage/overview.html?jumpid=ba_v2uhj5eqm7',
            isValid: true,
            src: '4887624',
            type: 'hpstore',
            cat: 'hpia_0',
            ord: '<random>',
          },
          {
            url: '/in/en/business-solutions/security/secure-printing.html',
            isValid: true,
            src: '4887624',
            type: 'hpjet012',
            cat: 'hpjet100',
            ord: '<random>',
          },
          {
            url: '/in/en/ads/elitex2-1012/overview.html',
            isValid: true,
            src: '4887624',
            type: 'hpb2bpc',
            cat: 'hpelitex',
            ord: '<random>',
          },
          {
            url: '/in/en/ads/elitebook-folio/overview.html',
            isValid: true,
            src: '4887624',
            type: 'hpb2bpc',
            cat: 'folio01',
            ord: '<random>',
          },
          {
            url: '/in/en/campaigns/workstations/missionz.html?jumpid=va_cyhsx42b8k',
            isValid: true,
            src: '4887624',
            type: 'hpb2cpc',
            cat: 'hpzbk001',
            ord: '<random>',
          },
          {
            url: '/au/en/printers/officejet-pro-printers.html?jumpid=ba_t1rud3e7z4',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'offjet00',
            ord: '<random>',
          },
          {
            url: '/au/en/printers/officejet-pro-8000.html?jumpid=ba_be1htkdj7p',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpoj8k0',
            ord: '<random>',
          },
          {
            url: '/nz/en/printers/officejet-pro-8000.html?jumpid=ba_58kc6ig9nx',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpoj8k0',
            ord: '<random>',
          },
          {
            url: '/au/en/campaigns/workstations/missionz.html',
            isValid: true,
            src: '4887624',
            type: 'hpb2cpc',
            cat: 'hpzbk001',
            ord: '<random>',
          },
          {
            url: '/my/en/ads/elitebook-folio/overview.html',
            isValid: true,
            src: '4887624',
            type: 'hpb2bpc',
            cat: 'folio01',
            ord: '<random>',
          },
          {
            url: '/ph/en/premium/laptops/index.html',
            isValid: true,
            src: '4887624',
            type: 'hpprempc',
            cat: 'prempc01',
            ord: '<random>',
          },
          {
            url: '/au/en/printers/pagewide-business-printers.html?jumpid=va_nx8gizwmq7',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'offjet07',
            ord: '<random>',
          },
        ]);
      },
      2646823,
      423193
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (tag.isValid && lcCurrentURL.indexOf(tag.url.toLowerCase()) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/mx/es/ads/supplies/toner.html?_sm_au_=iRsfjtMf5t7fQnnr',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'toner00',
            ord: '<random>',
          },
          {
            url: '/ar/es/ads/supplies/toner.html?_sm_au_=iRsfjtMf5t7fQnnr',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'toner0',
            ord: '<random>',
          },
          {
            url: '/co/es/ads/supplies/toner.html?_sm_au_=iRsfjtMf5t7fQnnr',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'toner001',
            ord: '<random>',
          },
          {
            url: '/cl/es/ads/supplies/toner.html?_sm_au_=iRsfjtMf5t7fQnnr',
            isValid: true,
            src: '2565404',
            type: 'hpcdu237',
            cat: 'toner003',
            ord: '<random>',
          },
          {
            url: '/pe/es/ads/supplies/toner.html?_sm_au_=iRsfjtMf5t7fQnnr',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'toner005',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/ads/supplies/toner.html?_sm_au_=iRsfjtMf5t7fQnnr&jumpid=ba_tg1zbdwha5',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'toner007',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/ads/supplies/toner.html?_sm_au_=iRsfjtMf5t7fQnnr&jumpid=ba_ce5tpyvj6x',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'toner008',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/ads/supplies/toner.html?_sm_au_=iRsfjtMf5t7fQnnr&jumpid=ba_ntiz498aqk',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'toner009',
            ord: '<random>',
          },
        ]);
      },
      2646827,
      430677
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (
              tag.isValid &&
              (lcCurrentURL.indexOf(tag.url) !== -1 ||
                tag.url.indexOf(location.hostname + location.pathname) !== -1)
            )
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: 'http://www8.hp.com/be/fr/printers/pagewide-business-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpbus00',
            cat: 'be_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/be/nl/printers/pagewide-business-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpbus00',
            cat: 'be_pr00',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/ch/de/printers/pagewide-business-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpbus00',
            cat: 'ch_pr00',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/ch/fr/printers/pagewide-business-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpbus00',
            cat: 'ch_pr0',
            ord: '<random>',
          },
          {
            url: 'http://h71045.www7.hp.com/rfg_formprocessor/secure_print/overview.html',
            isValid: true,
            src: '2326416',
            type: 'hpbus00',
            cat: 'nl_pr0',
            ord: '<random>',
          },
        ]);
      },
      1537958,
      418377
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            new Image().src = url;
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (lcCurrentURL.indexOf(tag.url) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/au/en/premium/laptops/index.html',
            isValid: true,
            src: '4887624',
            type: 'hpprempc',
            cat: 'prempc01',
            ord: '<random>',
          },
          {
            url: '/nz/en/ads/elitebook-folio/overview.html',
            isValid: true,
            src: '4887624',
            type: 'hpb2bpc',
            cat: 'folio01',
            ord: '<random>',
          },
          {
            url: '/nz/en/campaigns/spectre-laptop/overview.html',
            isValid: true,
            src: '4887624',
            type: 'hpb2cpc',
            cat: 'hpspec0',
            ord: '<random>',
          },
        ]);
      },
      2646821,
      421098
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function () {
          var CodeVer = 'v230|MU201002e|v2.62',
            CodePlatform = 'Ensighten',
            GTMid = 'GTM-MZXB4R4',
            ASO = 's',
            T = !0,
            F = !1,
            UN = void 0,
            NU = null,
            L = 'length',
            K = 'unknown',
            S = 'string',
            N = 'number',
            O = 'object',
            A = 'array',
            OD = 'date',
            OR = 'regex',
            B = 'boolean',
            C = 'function',
            Z = 'null',
            U = 'undefined',
            W = window,
            Wn = W.navigator,
            Wh = W.history,
            D = document,
            Dr = D.referrer,
            Dl = D.location,
            Dlu = Dl.href,
            Dlh = Dl.hostname,
            E = '',
            Tq = '?',
            Te = '=',
            Ta = '&',
            Tb = ' ',
            Tp = '|',
            To = ':',
            Ts = ';',
            Td = '.',
            Th = '-',
            Tu = '_',
            Tc = ',',
            Tn = '\n',
            T1 = '1',
            T0 = '0',
            Txs = 'script',
            Txm = 'meta',
            Txc = 'content',
            Txh = 'head',
            Txb = 'body';
          !(function () {
            const $___old_881b9b128a17da2b = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_881b9b128a17da2b)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_f81a89698ffc49dd.performance
                ));
              return function () {
                if (!W._A || W._A.constructor != Object) {
                  console.log('_A Framework', CodeVer, CodePlatform),
                    (W._A = (function () {
                      var err = '_A ERROR',
                        eIn = err + ' in',
                        _ = {},
                        o = {},
                        i;
                      (_.tO = tO = function (e) {
                        var t = e === NU ? Z : typeof e;
                        return t != O
                          ? t
                          : e instanceof Date
                          ? OD
                          : e instanceof RegExp
                          ? OR
                          : e instanceof Array
                          ? A
                          : O;
                      }),
                        (_.isNU = isNU = function (e) {
                          return tO(e) == Z;
                        }),
                        (_.isU = isU = function (e) {
                          return tO(e) == U;
                        }),
                        (_.isN = isN = function (e) {
                          return tO(e) == N && !isNaN(e) && e != 1 / 0;
                        }),
                        (_.isS = isS = function (e) {
                          return tO(e) == S;
                        }),
                        (_.isB = isB = function (e) {
                          return tO(e) == B;
                        }),
                        (_.isAO = isAO = function (e) {
                          return tO(e) == O || tO(e) == A;
                        }),
                        (_.isA = isA = function (e) {
                          return tO(e) == A;
                        }),
                        (_.isO = isO = function (e) {
                          return tO(e) == O;
                        }),
                        (_.isF = isF = function (e) {
                          return tO(e) == C;
                        }),
                        (_.isR = isR = function (e) {
                          return tO(e) == OR;
                        }),
                        (_.isD = isD = function (e) {
                          return tO(e) == OD;
                        }),
                        (_.MC = MC = function (e, t) {
                          try {
                            isS(t) && (t = 'lc' == t ? -1 : 'uc' == t ? 1 : 0),
                              isN(t) || (t = t ? 1 : 0),
                              (e = isS(e) || isN(e) || isD(e) || isB(e) ? e + E : E),
                              (e = isS(e) ? (t < 0 ? LC(e) : t > 0 ? e.UC(e) : e) : E);
                          } catch (t) {
                            e = E;
                          }
                          return e;
                        }),
                        (_.LC = LC = function (e) {
                          return isS(e) || (e = E), e.toLowerCase();
                        }),
                        (_.UC = UC = function (e) {
                          return isS(e) || (e = E), e.toUpperCase();
                        }),
                        (_.LUC = LUC = function (e) {
                          if (isS(e)) {
                            for (var t = 0, r = Tb, n = E, o = E; t < e[L]; t++)
                              (o = e[t]),
                                (n +=
                                  (r >= 'a' && r <= 'z') || (r >= T0 && r <= '9') ? LC(o) : UC(o)),
                                "'" != o && (r = LC(o));
                            return n;
                          }
                          return e;
                        }),
                        (_.iO = iO = function (e, t, r, n) {
                          var o = -1,
                            a = 0,
                            i = function (e, t) {
                              var o = -1;
                              try {
                                o = isR(t)
                                  ? (n = e.match(t))
                                  : 1 == n
                                  ? e == t
                                  : -1 == n
                                  ? !e.indexOf(t, r)
                                  : e.indexOf(t, r) > -1;
                              } catch (e) {
                                o = -1;
                              }
                              return o;
                            };
                          try {
                            if (isA(e)) for (; a < e[L] && o < 0; a++) i(e[a], t) && (o = a);
                            else if (isA(t)) for (; a < t[L] && o < 0; a++) i(e, t[a]) && (o = a);
                            else
                              isR(t)
                                ? (i(e, t), n && (o = n.index))
                                : (o = i(e, t) ? e.indexOf(t, r) : -1);
                          } catch (e) {
                            o = -1;
                          }
                          return o;
                        }),
                        (_.sU = sU = function (e, t, r) {
                          try {
                            e = e.substring(t, r);
                          } catch (e) {}
                          return e;
                        }),
                        (_.trimWS = trimWS = function (e) {
                          try {
                            e || (e = E),
                              isS(e) &&
                                (e = e
                                  .replace(/^\s+/g, E)
                                  .replace(/\s+$/g, E)
                                  .replace(/\s+/g, Tb));
                          } catch (e) {}
                          return e;
                        }),
                        (_.scrubAndEsc = scrubAndEsc = function (e, t, r, n) {
                          (t = t || ':,'),
                            (n = n || Ts),
                            (isN(e) || isB(e)) && (e += ''),
                            (e = isS(e) ? e : E);
                          var o,
                            a = E,
                            i = new RegExp(
                              '[' + t.replace('[', '\\[').replace(']', '\\]') + ']',
                              'g'
                            );
                          if (
                            ((isN(e) || isB(e)) && (e += ''),
                            e || (e = ''),
                            (e = e.replace(/^\s+/, E).replace(/\s+$/, E)),
                            iO(t, Ts) < 0 || !i.test(e))
                          )
                            a = e.replace(i, Ts);
                          else
                            for (o = 0; o < e[L]; o++) a += iO(t, e[o]) > -1 ? escape(e[o]) : e[o];
                          return r ? LC(a) : a;
                        }),
                        (_.addCS = addCS = function (e, t, r) {
                          var n,
                            o,
                            a,
                            i,
                            s,
                            c = function (e) {
                              var t = e.split(Te);
                              return t[L] > 0 ? t[0] : e;
                            },
                            l = function (e) {
                              for (var t = 0; t < e; t++) a == c(n[t]) && (n[t] = E);
                            };
                          if (((e = e ? e + Tc + t : t), r)) {
                            for (
                              o = (n = e.split(Tc))[L], -1 == r && ((a = c(t)), l(o)), s = o - 1;
                              s >= 0;
                              s--
                            )
                              (i = n[s]), (a = c(i)), l(s);
                            for (e = E, s = 0; s < o; s++) (i = n[s]) && (e = e ? e + Tc + i : i);
                          }
                          return e;
                        }),
                        (_.gib = gib = function (e, t, r, n) {
                          var o = function (e) {
                              return Math.log(e);
                            },
                            i = function (e) {
                              return Math.log10(e);
                            },
                            s = function (e, t) {
                              return Math.max(e, t);
                            },
                            c = function (e, t, r) {
                              return e < t
                                ? ((r = t - e), (o(t) / o(r)) * 100)
                                : e > r
                                ? ((t = e - r), (o(100 - r) / o(t)) * 100)
                                : 0;
                            },
                            l = function (e) {
                              for (t = {}, a = E, d = 0; d < e[L]; ++d)
                                e[d] in t || ((t[e[d]] = 1), (a += e[d]));
                              return a;
                            };
                          if (!isS(e) || !e[L] || !e.trim()) return 0;
                          for (t = e, a = []; a[L] < t[L] / 35; )
                            a.push(sU(t, 0, 35)), (t = sU(t, 36));
                          for (
                            1 <= a[L] &&
                              10 > a[a[L] - 1][L] &&
                              ((a[a[L] - 2] += a[a[L] - 1]), a.pop()),
                              t = [],
                              d = 0;
                            d < a[L];
                            d++
                          )
                            t.push(l(a[d])[L]);
                          for (a = 100 * t, d = t = 0; d < a[L]; d++) t += parseFloat(a[d], 10);
                          for (a = t / a[L], r = d = t = 0; r < e[L]; r++)
                            (n = e.charAt(r)).match(/^[a-zA-Z]+$/) &&
                              (n.match(/^(a|e|i|o|u)$/i) && t++, d++);
                          return (
                            (t = d ? (t / d) * 100 : 0),
                            (e = (e.split(/[\W_]/)[L] / e[L]) * 100),
                            (a = s(1, c(a, 45, 50))),
                            (t = s(1, c(t, 35, 45))),
                            (e = s(1, c(e, 15, 20))),
                            s(1, ((i(a) + i(t) + i(e)) / 6) * 100)
                          );
                        }),
                        (_.hash = hash = function (e) {
                          for (var t = 0, r = 0; r < e.length; )
                            t = (t << 5) - t + e.charCodeAt(r++);
                          for (
                            t = parseInt(
                              (179528077 ^ t).toString(2).split(E).reverse().join(E),
                              2
                            ).toString(16);
                            t.length < 8;

                          )
                            t += 0;
                          return t;
                        }),
                        (_.validEm = validEm = function (e) {
                          return (
                            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(
                              e
                            ) && /\.(com|org|net|int|edu|gov|mil|arpa|[a-z][a-z])$/i.test(e)
                          );
                        }),
                        (_.scrubEm = scrubEm = function (e, t) {
                          var r,
                            n,
                            o,
                            a,
                            i = 0;
                          if (isS(e) && e)
                            if (t) {
                              for (n in (r = parseUri(e)).args)
                                validEm(n) &&
                                  ((o = hash(n)),
                                  (r.args[o] = r.args[n]),
                                  delete r.args[n],
                                  (n = o),
                                  (i = 1)),
                                  (a = r.args[n]),
                                  validEm(a) && ((r.args[n] = hash(a)), (i = 1));
                              if (i) {
                                for (n in ((e += Tq), (e = sU(e, 0, iO(e, Tq))), (i = 0), r.args))
                                  (a = r.args[n]),
                                    (e += (i ? Ta : Tq) + n + (isS(a) ? Te + a : E)),
                                    i++;
                                e += r.hash || E;
                              }
                            } else validEm(e) && (e = hash(e));
                          return e;
                        }),
                        (_.toStr = toStr = function (e) {
                          if (e)
                            try {
                              e += E;
                            } catch (t) {
                              e = E;
                            }
                          else e = E;
                          return e;
                        }),
                        (_.mapStr = mapStr = function (e, t, r) {
                          (e = isS(e) ? (r ? LC(e) : e) : E),
                            (t = (isS(t) ? (r ? LC(t) : t) : E).split(Tc));
                          for (var n, o = 0, a = E; !a && o < t[L]; o++)
                            e == (n = t[o].split(To))[0] && (a = n[1]);
                          return a;
                        }),
                        (_.ran = ran = function () {
                          var e = 2147483648;
                          return (((4095 & Date.now()) << 19) ^ Math.floor(Math.random() * e)) / e;
                        }),
                        (_.toNum = toNum = function (e, t, r) {
                          var n,
                            o,
                            a = NaN,
                            i = a,
                            s = 1,
                            c = 0,
                            l = 0,
                            u = t ? 1e306 : 100000000000000;
                          if (isN(e)) return t ? e : Math.round(e);
                          if ((isO(e) && (e += E), !e || !isS(e))) return a;
                          for (; r && c < e[L] && !((n = sU(e, c, c + 1)) > Tb); c++);
                          for (
                            n = sU(e, c, c + 1),
                              l || '+' != n || c++,
                              l || n != Th || ((s = -1), c++),
                              t && !l && n == Td && ((l = 1), c++);
                            c < e[L];
                            c++
                          )
                            if (
                              ((n = sU(e, c, c + 1)),
                              (o = iO('0123456789', n)),
                              t && n == Td && !l)
                            )
                              l = 1;
                            else {
                              if (o < 0) return r ? s * i : a;
                              if (i > u) return a;
                              isNaN(i) && (i = 0), l ? (i += o * (l /= 10)) : (i = 10 * i + o);
                            }
                          return s * i;
                        }),
                        (_.toInt = toInt = function (e) {
                          var t = arguments[L] > 1 && !!arguments[1];
                          return toNum(e, 0, t);
                        }),
                        (_.toFloat = toFloat = function (e) {
                          var t = arguments[L] > 1 && !!arguments[1];
                          return toNum(e, 1, t);
                        }),
                        (_.roundNum = roundNum = function (e, t, r, n) {
                          return (
                            isN(r) || (r = NaN),
                            isN(e) || (e = toFloat(e)),
                            isNaN(e)
                              ? r
                              : ((!isN(t) || t < 0) && (t = 0),
                                (!n || !isN(n) || n < 2) && (n = 10),
                                (t = Math.pow(n, isNaN(t) ? 0 : t)),
                                Math.floor(e * t + 0.5) / t)
                          );
                        }),
                        (_.fmtNum = fmtNum = function (e, t, r, n, o) {
                          n = n || Td;
                          var a = '\\d(?=(\\d{3})+' + (r > 0 ? '\\D' : '$') + ')';
                          (e = e.toFixed(Math.max(0, ~~r))),
                            (o = (n ? e.replace(Td, n) : e).replace(
                              new RegExp(a, 'g'),
                              '$&' + (o || '')
                            ));
                          for (t = (t || 0) - iO(o + n, n); t-- > 0; ) o = T0 + o;
                          return o;
                        }),
                        (_.fmtTimestamp = fmtTimestamp = function (e, t) {
                          var r = new Date(),
                            n =
                              23 == new Date(60000 * r.getTimezoneOffset()).getHours()
                                ? 3600000
                                : 0,
                            o = 60000 * r.getTimezoneOffset();
                          return (
                            (e = isD(e)
                              ? e
                              : isN(e)
                              ? new Date(e + ('l' == t ? 0 : 'u' == t ? o : n + o))
                              : r),
                            fmtNum(e.getHours(), 2) +
                              To +
                              fmtNum(e.getMinutes(), 2) +
                              To +
                              fmtNum(e.getSeconds() + e.getMilliseconds() / 1000, 2, 3)
                          );
                        }),
                        (_.Eval = Eval = function (c) {
                          const $___old_7019b7072aff57fa = {}.constructor.getOwnPropertyDescriptor(
                            window,
                            'performance'
                          );
                          try {
                            if ($___old_7019b7072aff57fa)
                              ({}.constructor.defineProperty(
                                window,
                                'performance',
                                $___stub_f81a89698ffc49dd.performance
                              ));
                            return function () {
                              var r = NU;
                              try {
                                r = eval(c);
                              } catch (e) {
                                r = NU;
                              }
                              return r;
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_7019b7072aff57fa)
                              ({}.constructor.defineProperty(
                                window,
                                'performance',
                                $___old_7019b7072aff57fa
                              ));
                          }
                        }),
                        (_.sP = sP = function (e, t) {
                          try {
                            var r,
                              n,
                              o = W,
                              a = new RegExp('\\[[\'"]?([^\\]\'"]+)[\'"]?\\]'),
                              i = arguments,
                              s = function (e) {
                                return /^[0-9]+$/.test(e) ? Number(e) : e;
                              };
                            if (2 == i[L] && e && isS(e)) {
                              for (e = e.replace(/\[\]/g, '[@]'), n = 0; n < 99 && e.match(a); n++)
                                e = e.replace(a, '.$1');
                              for (e = e.split(Td), n = 0, c = o; n < e[L] - 1; n++)
                                '@' == (i = s(e[n])) && (i = o[L] || 0),
                                  isAO(o[i]) ||
                                    ((r = s(e[n + 1])), (o[i] = '@' != r && isNaN(r) ? {} : [])),
                                  (o = o[i]);
                              '@' == (i = s(e[n])) && (i = o[L]), (o[i] = t);
                            }
                          } catch (e) {}
                          return t;
                        }),
                        (_.gP = gP = function (e, t, r) {
                          try {
                            isAO(e) ? (e = Eval(e[t])) : ((r = t), (e = Eval(e)));
                            try {
                              e = r == S ? v + E : r == N ? Number(e) : r == B ? !!e : e;
                            } catch (e) {}
                          } catch (t) {
                            e = void 0;
                          }
                          return e;
                        }),
                        (_.cO = cO = function (e) {
                          var t,
                            r = e == NU || typeof e != O ? e : e.constructor();
                          for (t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
                          return r;
                        }),
                        (_.subO = subO = function (e, t, r) {
                          var n,
                            o,
                            a,
                            i,
                            s,
                            c = isS(t) ? t.split(Tc) : [],
                            l = e;
                          if (isO(e))
                            for (l = {}, o = 0; o < c[L]; o++)
                              for (n in ((s = (i = c[o])[L]), e))
                                (a = e[n]),
                                  ((s > 0 && '*' == i[s - 1] && !iO(n, sU(i, 0, s - 1))) ||
                                    n == i) &&
                                    (!r || isB(a) || a) &&
                                    (l[n] = a);
                          return l;
                        }),
                        (_.parseUri = parseUri = function (e) {
                          var t = D.createElement('a'),
                            r = 0,
                            o = { args: {} },
                            a = 'pathname',
                            i = 'href',
                            s = 'search',
                            c = [
                              'hash',
                              'host',
                              'hostname',
                              i,
                              'origin',
                              a,
                              'port',
                              'protocol',
                              s,
                            ],
                            l = decodeURIComponent || unescape;
                          if ((e = isS(e) ? e : Dl[i])) {
                            for (t.setAttribute(i, e); r < c[L]; r++) o[c[r]] = t[c[r]];
                            for (
                              t = o[a] || E,
                                iO(t, '//') || (o[a] = '//' + o[a]),
                                e && iO(t, '/') && (o[a] = '/' + t),
                                t = o[s][L] > 0 ? sU(o[s], 1).split(Ta) : [],
                                r = 0;
                              r < t[L];
                              r++
                            )
                              if ((a = t[r]))
                                try {
                                  (i = a.split(Te)),
                                    (n = i[0]),
                                    i.shift(),
                                    i[L]
                                      ? c[L] > 0 && (o.args[n] = l(i.join(Te)))
                                      : (o.args[n] = T);
                                } catch (e) {}
                          }
                          return o;
                        }),
                        (_.parseParam = parseParam = function (e, t, r) {
                          isB(t) && ((r = t), (t = E)),
                            isS(t) || (t = Dl.href),
                            (t = parseUri(t).search);
                          var n,
                            o,
                            a,
                            i,
                            s,
                            c = sU(t, 0, 1);
                          for (
                            (c != Tq && c != Ta) || (t = sU(t, 1)), n = t.split(Ta), o = 0;
                            o < n[L];
                            o++
                          )
                            if (((a = n[o]), e == (s = (i = iO(a, Te)) < 0 ? a : sU(a, 0, i))))
                              return (
                                (s = sU(a, i + 1)),
                                i < 0 ? T : r || 0 == s[L] || isNaN(s) ? s : parseFloat(s)
                              );
                          return F;
                        }),
                        (_.persistParam = persistParam = function (e) {
                          var t = 's_q_' + e,
                            r = parseUri(Dlu).args[e];
                          return (
                            isU(r) || cW(t, r),
                            (r = cR(t) || UN),
                            isN(r) ? toNum(r) : 'true' == r ? T : 'false' == r ? F : r
                          );
                        }),
                        (_.getDeviceInfo = getDeviceInfo = function () {
                          var e,
                            t,
                            r,
                            n,
                            o,
                            a = 'unknown',
                            i = {
                              device: [
                                'BlackBerry',
                                'Google TV',
                                'iPad',
                                'iPhone',
                                'iPod',
                                'Kindle',
                                'Kindle Fire~(?:Cloud9|Silk-Accelerated)',
                                'Intel Mac',
                                'Mac',
                                'Nook',
                                'PlayBook',
                                'PlayStation Vita',
                                'TouchPad',
                                'Transformer',
                                'Xoom',
                                'Android',
                                'Windows CE',
                                'PC~Windows',
                              ],
                              OS: [
                                'Android',
                                'BlackBerry',
                                'CentOS',
                                'Debian',
                                'Fedora',
                                'FreeBSD',
                                'Gentoo',
                                'Haiku',
                                'Kubuntu',
                                'Linux Mint',
                                'Red Hat',
                                'SuSE',
                                'Ubuntu',
                                'Xubuntu',
                                'Cygwin',
                                'Symbian OS',
                                'hpwOS',
                                'webOS',
                                'Tablet OS',
                                'Linux',
                                'OS X',
                                'Macintosh',
                                'OpenBSD',
                                'Windows( [a-zA-Z0-9]+|)',
                              ],
                              browser: [
                                'Nook Browser',
                                'Opera( Mini|)',
                                'Opera~OPR',
                                'Chrome',
                                'Chrome Mobile~(?:CriOS|CrMo)',
                                'Firefox~(?:Firefox|Minefield)',
                                'IE~MSIE',
                                'Safari',
                              ],
                            },
                            s = W.navigator || {},
                            c = s.userAgent || E,
                            l = W.screen || {},
                            u = {
                              agent: c || a,
                              locale: LC(s.language || E) || a,
                              device: a,
                              deviceType: a,
                              OS: a,
                              OSVer: a,
                              browser: a,
                              browserVer: a,
                              width: l.width || 0,
                              height: l.height || 0,
                              density: Math.round(100 * (W.devicePixelRatio || 1)) / 100,
                            },
                            d = function (e) {
                              var t = iO(c, e) + e[L],
                                r = new RegExp('([/ :]+)([0-9.]+)', 'i').exec(sU(c, t));
                              return r[L] > 2 ? r[2] : E;
                            };
                          for (e in i)
                            for (t = r = 0; !r && t < i[e][L]; t++)
                              (n = i[e][t]),
                                (o = iO(n, '~') + 1),
                                (r = new RegExp(sU(n, o)).exec(c)) &&
                                  ((u[e] = o ? sU(n, 0, o - 1) : r[0]),
                                  'device' != e && (u[e + 'Ver'] = d(r[0])));
                          return (
                            (u.deviceType =
                              iO(
                                'BlackBerry|iPad|iPhone|iPod|Kindle|TouchPad|Nook|Android|Windows CE',
                                u.device
                              ) > -1
                                ? 'mobile'
                                : 'desktop'),
                            u
                          );
                        }),
                        (_.getHTMLtag = getHTMLtag = function (e) {
                          var t,
                            r = E,
                            n = E,
                            o = E,
                            a = E,
                            i = E,
                            s = 'mc',
                            c = arguments,
                            l = c[L];
                          if (
                            (l > 1 &&
                              (('uc' != (t = c[l - 1]) && 'lc' != t && 'mc' != t) ||
                                ((s = t), l--)),
                            !l)
                          )
                            return i;
                          if (
                            ((e = LC(e)),
                            2 == l
                              ? (o = LC(c[1]))
                              : l >= 3 &&
                                ((r = LC(c[1])), (n = MC(c[2], s)), l >= 4 && (o = MC(c[3], s))),
                            D.getElementsByTagName && (a = D.getElementsByTagName(e)),
                            !isAO(a))
                          )
                            return i;
                          for (t = 0; !i && t < a[L]; t++)
                            (i = a[t]), r && n && MC(i.getAttribute(r), s) != n && (i = E);
                          return isAO(i) && o
                            ? 'text' != o
                              ? i.getAttribute(o)
                              : (i = (i = i.innerText || i.textContent || E)
                                  .replace(/\s*>\s*/g, '>')
                                  .replace(/^>+/, E)
                                  .replace(/>+$/, E))
                            : i;
                        }),
                        (_.getMeta = getMeta = function (e, t) {
                          return getHTMLtag(Txm, 'name', e, Txc, t);
                        }),
                        (_.getCharSet = getCharSet = function () {
                          var e = getHTMLtag(Txm, 'http-equiv', 'content-type', Txc) || E,
                            t = iO(e, 'charset=');
                          return UC(
                            t < 0
                              ? getHTMLtag(Txm, 'charset') || E
                              : sU(e, t + 8).replace(/['";, ].*/, E)
                          );
                        }),
                        (_.getShortHn = getShortHn = function (e) {
                          return (
                            isS(e) || (e = Dl.href),
                            LC(parseUri(e).hostname.replace(/^www-?[0-9]*\./i, E))
                          );
                        }),
                        (_.getOwnerHn = getOwnerHn = function (e) {
                          isS(e) || (e = Dlh), iO(e, 'http') && (e = 'http://' + e);
                          var t = (e = LC(parseUri(e).hostname).split(Td))[L],
                            r = e[--t],
                            n = t > 0 ? e[--t] : E,
                            o = t > 0 ? e[--t] + Td : E,
                            a = (n ? n + Td : E) + r;
                          return (
                            2 == r[L] &&
                              iO(',com,edu,gov,org,net,mil,store,shop,', Tc + n + Tc) > -1 &&
                              (a = o + a),
                            a
                          );
                        }),
                        (_.getCookieHn = getCookieHn = function (e) {
                          return Td + getOwnerHn(e);
                        });
                      var t0n = E,
                        tMu = new Date().getTime(),
                        t0 = tMu;
                      !(function () {
                        var e,
                          t,
                          r = gP('performance.timing');
                        if (isO(r)) {
                          for (e in r)
                            (t = r[e]),
                              isN(t) &&
                                t <= tMu &&
                                tMu - t < 60000 &&
                                t < t0 &&
                                ((t0 = t), (t0n = e));
                          r.analyticsStart = tMu;
                        }
                      })(),
                        (_.getElapsedTime = getElapsedTime = function (e) {
                          return e < 0
                            ? { T0: t0, T0prop: t0n }
                            : new Date().getTime() - (e && isN(e) ? e : isD(e) ? e.getTime() : t0);
                        }),
                        (_.pageReloaded = pageReloaded = function () {
                          return isO(W.performance) && isO(W.performance.navigation)
                            ? 1 == W.performance.navigation.type
                            : Z;
                        }),
                        (_.newTabOrWinOpened = newTabOrWinOpened = function () {
                          return isO(Wh) ? 1 == Wh[L] : NU;
                        }),
                        (_.getTLDlevels = getTLDlevels = function (e) {
                          var t = parseUri(e || Dl.href).hostname;
                          return t.match(RegExp('\\.co\\..{2}$', 'i')) ||
                            t.match(RegExp('\\.(gov|edu|com|mil|org|net|int)\\..{2}$', 'i'))
                            ? 3
                            : 2;
                        }),
                        (_.cR = cR = function (e) {
                          var t = Tb + D.cookie,
                            r = iO(t, Tb + e + Te),
                            n = r < 0 ? r : iO(t, Ts, r);
                          return r < 0 ? E : unescape(sU(t, r + 2 + e[L], n < 0 ? t[L] : n));
                        }),
                        (_.cE = cE = function (e) {
                          return iO(Tb + D.cookie, Tb + e + Te) >= 0;
                        }),
                        (_.cW = cW = function (e, t, r, n, o) {
                          if (((t += E), cD(e, n), t))
                            return (
                              (r = r && !isD(r) ? new Date(r) : r),
                              e &&
                                (D.cookie =
                                  e +
                                  Te +
                                  t.replace(/%/g, '%25').replace(/;/g, '%3B') +
                                  '; path=/' +
                                  (n ? '; domain=' + n : E) +
                                  (o ? '; secure' : E)),
                              r ? r.toUTCString() : E,
                              e ? cR(e) : F
                            );
                          _A.cD(e, n);
                        }),
                        (_.cD = cD = function (e, t) {
                          var r,
                            n = cR(e),
                            o = function (t) {
                              D.cookie =
                                e +
                                '=;' +
                                (t ? ' domain=' + t + Ts : E) +
                                'path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                            },
                            a = function () {
                              if ((o(t), !t))
                                for (r = Dlh; iO(r, Td) > -1; r = r.replace(/[^.]+\./, E))
                                  o(Td + r);
                            };
                          if (isR(e)) for (e in logC(e, 1)) cR(e) && (n = T), a();
                          else e && isS(e) && a();
                          return n;
                        }),
                        (_.sG = sG = function (e) {
                          const $___old_860c11df6b26716b = {}.constructor.getOwnPropertyDescriptor(
                            window,
                            'sessionStorage'
                          );
                          try {
                            if ($___old_860c11df6b26716b)
                              ({}.constructor.defineProperty(
                                window,
                                'sessionStorage',
                                $___stub_053c907fde22f83d.sessionStorage
                              ));
                            return function () {
                              return sessionStorage.getItem(e) || E;
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_860c11df6b26716b)
                              ({}.constructor.defineProperty(
                                window,
                                'sessionStorage',
                                $___old_860c11df6b26716b
                              ));
                          }
                        }),
                        (_.sS = sS = function (e, t) {
                          sessionStorage.setItem(e, t);
                        }),
                        (_.sR = sR = function (e) {
                          sessionStorage.removeItem(e);
                        }),
                        (_.sC = sC = function () {
                          sessionStorage.clear();
                        }),
                        (_.lG = lG = function (e) {
                          return localStorage.getItem(e) || E;
                        }),
                        (_.lS = lS = function (e, t) {
                          localStorage.setItem(e, t);
                        }),
                        (_.lR = lR = function (e) {
                          localStorage.removeItem(e);
                        }),
                        (_.lC = lC = function () {
                          localStorage.clear();
                        }),
                        (_.getPrevious = getPrevious = function (e, t, r) {
                          _A.isB(t) && ((r = t), (t = UN)), isO(_A.Prev) || (_A.Prev = {});
                          var n = _A.Prev[e];
                          return (
                            isU(n) && (n = _A.Prev[e] = r ? sG(e) : cR(e)),
                            isU(t) || _A.getOptOut(2) || (r ? sS(e, t) : cW(e, t)),
                            logDebug('_A.getPrevious(', e, t, r, ') returning', n),
                            n
                          );
                        });
                      var wA = [],
                        wTO = 0,
                        wI = 50,
                        wV = function (e) {
                          var t,
                            r = wA[e],
                            n = r.n;
                          try {
                            t = r.k ? (cE(n) ? cR(n) : UN) : isS(n) ? Eval(n) : UN;
                          } catch (e) {}
                          return t;
                        },
                        wL = function (e) {
                          var t,
                            r = 0;
                          if (isO(e)) for (t in e) r++;
                          else r = isU(e) || isU(e) ? -1 : isA(e) ? e[L] : 1;
                          return r;
                        },
                        wVD = function (e) {
                          try {
                            var t = tO(e);
                            t != U &&
                              t != Z &&
                              (isAO(e) ? (t += Tb + wL(e)) : t == S ? (t += Tb + e) : (t = e));
                          } catch (r) {
                            t = e;
                          }
                          return t;
                        },
                        watchP = function () {
                          try {
                            wTO = 0;
                            for (var e, t, r, n, o, a, i = 0; i < wA[L]; i++)
                              if (
                                ((e = wA[i]), (t = wV(i)), (o = wL(t)), (n = (r = wVD(t)) !== e.d))
                              ) {
                                if (
                                  ((m = e.m),
                                  (a = m !== UN) &&
                                    (n = isR(m) ? (isS(t) ? !!t.match(m) : F) : m === t),
                                  !a || n)
                                )
                                  try {
                                    isF(e.c) && e.c(t, r, e.n, o, e.l, !!e.k),
                                      a && (watchEnd(e.n, e.c, e.k, e.m), (e = 0));
                                  } catch (e) {
                                    console.log(eIn, 'match callback', wA[i].n, 'ERROR', e);
                                  }
                                e && ((e.d = r), (e.l = o));
                              }
                          } catch (e) {}
                          wA[L] &&
                            (wTO = setTimeout(function () {
                              watchP();
                            }, wI));
                        },
                        fmtC,
                        fmtM;
                      (_.watch = watch = function (e, t, r, n) {
                        var o, a;
                        if (isS(e) && e && (isU(t) || isF(t)))
                          if (isS(e) && e && isF(t)) {
                            for (
                              wTO && (clearTimeout(wTO), (wTO = 0)), o = 0;
                              o < wA[L] &&
                              ((a = wA[o]).n != e ||
                                a.k != r ||
                                a.c != t ||
                                toStr(a.m) != toStr(n) ||
                                tO(a.m) != tO(n));
                              o++
                            );
                            o >= wA[L] && wA.push({ n: e, c: t, l: -1, k: r, m: n, d: U }),
                              (wTO = setTimeout(function () {
                                watchP();
                              }, wI));
                          } else isS(e) && watchEnd(e, t, r, n);
                      }),
                        (_.watchEnd = watchEnd = function (e, t, r, n) {
                          var o, a, i, s, c;
                          if ((wTO && (clearTimeout(wTO), (wTO = 0)), isS(e)))
                            if (e == E) for (; wA[L] > 0; ) wA.pop();
                            else
                              for (o = 0; o < wA[L]; o++)
                                try {
                                  for (
                                    i = wA[o];
                                    o < wA[L] &&
                                    i.n &&
                                    i.n + '/' + !!i.k == e + '/' + !!r &&
                                    (!t || i.c == t) &&
                                    (!isU(n) || (tO(i.m) == tO(n) && toStr(i.m) == toStr(n)));

                                  ) {
                                    for (a = o; a < wA[L] - 1; a++)
                                      (s = wA[a]),
                                        (c = wA[a + 1]),
                                        (s.n = c.n),
                                        (s.c = c.c),
                                        (s.k = c.k),
                                        (s.m = c.m),
                                        (s.d = c.d),
                                        (s.l = c.l),
                                        (i = wA[o]);
                                    wA.pop();
                                  }
                                } catch (e) {
                                  console.log('watchEnd ERROR', e);
                                }
                          wA[L] &&
                            (wTO = setTimeout(function () {
                              watchP();
                            }, wI));
                        }),
                        (_.intercept = intercept = function (e, t, r) {
                          var n = 'typeof ',
                            o = E,
                            a = E;
                          a = (e = r ? r + Td + e : e) + '_orig';
                          try {
                            Eval(n + a) != C &&
                              Eval(n + e) == C &&
                              Eval(n + t) == C &&
                              (Eval(a + Te + e + Ts + e + Te + t), (o = a));
                          } catch (e) {}
                          return o;
                        }),
                        (_.deIntercept = deIntercept = function (e, t) {
                          var r = 'typeof ',
                            n = E,
                            o = E;
                          o = (e = t ? t + Td + e : e) + '_orig';
                          try {
                            Eval(r + o) == C &&
                              Eval(r + e) == C &&
                              (Eval(e + Te + o + Ts + o + '=null'), (n = e));
                          } catch (e) {}
                          return n;
                        }),
                        (_.runJS = runJS = function (e, t, r, n) {
                          var o,
                            a,
                            i,
                            s,
                            c = D.body;
                          for (
                            (o = D.createElement(Txs)).type = 'text/java' + Txs,
                              o.src = isS(e) ? e : E,
                              o.async = F,
                              r && isF(r) && (o.onload = r),
                              t = t && isS(t) ? t.split(Tc) : [],
                              a = 0;
                            a < t[L];
                            a++
                          )
                            (i = t[a]),
                              iO(i, Te) > -1
                                ? 'charset' == (i = (s = i.split(Te))[0])
                                  ? (o[i] = s[1])
                                  : o.setAttribute(i, s[1])
                                : i == Txh
                                ? (n = T)
                                : 'async' == i || 'defer' == i
                                ? (o[i] = !0)
                                : o.setAttribute(i, 'true');
                          D.getElementsByTagName(n || !c ? Txh : Txb)[0].appendChild(o);
                        });
                      var fmt = function (e, t, r, n, o) {
                        if (!(fmtC > 1000))
                          try {
                            (t = t || 0), (r = r || E);
                            var a,
                              i,
                              s = E,
                              c = '...TRUNCATED, TOO ',
                              l = c + 'LARGE',
                              u = function (e, t) {
                                var r = E,
                                  n = 0;
                                if (1 == e) for (r += Tn; n++ < t; ) r += '  ';
                                return r;
                              },
                              d = function (e, t, r) {
                                return 2 == e && (r > 0 || t) ? t + Te : E;
                              };
                            if ((n || (n = 0), r || (r = Tq), o || (o = 0), ++o > 10))
                              return fmtM++ || (s += c + 'DEEP'), (fmtC = 2000), s;
                            var f = tO(e);
                            switch (f) {
                              case N:
                              case B:
                                s += d(t, r, n) + e;
                                break;
                              case C:
                                s += d(t, r, n) + 'function(){}';
                                break;
                              case U:
                              case Z:
                                s += d(t, r, n) + f;
                                break;
                              case S:
                                s += d(t, r, n) + "'" + e.replace(/"/g, "\\'") + "'";
                                break;
                              case A:
                                for (t < 2 && (s += '['), a = 0; a < e[L]; a++) {
                                  if (fmtC++ > 1000) return fmtM++ || (s += l), s;
                                  a && (s += 2 == t ? Tn : E),
                                    (s +=
                                      (t < 2 && a ? ', ' : E) +
                                      fmt(e[a], t, r + '[' + a + ']', n, o));
                                }
                                t < 2 && (s += ']');
                                break;
                              case O:
                                for (a in ((i = 0), n++, e)) {
                                  if (fmtC++ > 1000) return fmtM++ || (s += l), s;
                                  i && (s += 2 == t ? Tn : E),
                                    (s +=
                                      (t < 2
                                        ? (i ? ', ' : '{') + u(t, n) + a + To + (t ? Tb : E)
                                        : E) + fmt(e[a], t, r + Td + a, n, o)),
                                    i++;
                                }
                                n--, t < 2 && (s += (i ? E : '{') + u(t, n) + '}');
                                break;
                              default:
                                s += 'UNKNOWN TYPE: ' + f;
                            }
                            return s;
                          } catch (e) {
                            return (fmtC = 2000), fmtM++, '...FORMATTING ' + err;
                          }
                      };
                      (_.varsToStr = varsToStr = function () {
                        var e,
                          t,
                          r,
                          n,
                          o = arguments,
                          a = o[L],
                          i = F,
                          s = 0,
                          c = E,
                          l = E;
                        try {
                          for (e = 0; e < a; e++)
                            e && !i && (c += 2 == s ? Tn : Tb),
                              (i = F),
                              (t = o[e]),
                              (r = tO(t)) == S &&
                                ((n = t[L]) > 0 && sU(t, n - 1, n) == Te
                                  ? ((i = T),
                                    2 != s && (c += t),
                                    (l = sU(t, 0, n - 1)) || (l = Tb))
                                  : '-c' == t
                                  ? ((i = T), (s = 0))
                                  : '-l' == t
                                  ? ((i = T), (s = 1))
                                  : '-a' == t && ((i = T), (s = 2))),
                              i ||
                                ((fmtC = fmtM = 0),
                                (c += fmt(t, l && r == S && !s ? 1 : s, l == Tb ? E : l)),
                                (l = E));
                        } catch (e) {
                          c = 'PROCESSING ' + err;
                        }
                        return c;
                      }),
                        (_.log = log = function () {
                          console.log(varsToStr.apply(this, arguments));
                        }),
                        (_.logState = logState = function () {
                          var e,
                            t = 'logAnalytics';
                          try {
                            !0 === (e = parseParam(t)) && (e = 1),
                              1 == e ? cW(t, e) : 0 === e && cD(t),
                              isN(e) || (e = toNum(cR(t)));
                          } catch (e) {}
                          return e || 0;
                        }),
                        (_.logDebug = logDebug = function () {
                          try {
                            logState() && console.log.apply(this, arguments);
                          } catch (e) {
                            log(eIn, 'logDebug');
                          }
                        }),
                        (_.logl = logl = function () {
                          try {
                            var e = arguments,
                              t = e[0] || 0,
                              r = 1,
                              n = [];
                            for (isN(t) || (t = t ? 1 : 0); r < e[L]; ) n.push(e[r++]);
                            logState() > 0 && log.apply(this, n);
                          } catch (e) {
                            log(eIn, 'logl');
                          }
                        }),
                        (_.logE = logE = function (e, t) {
                          var r = err + Tb + (t && isS(t) && t ? ' in ' + t : E),
                            n = isO(e) ? 65535 & (e.number || 0) : E,
                            o = E,
                            a = e.message || e.description || E,
                            i = E,
                            s = E;
                          isN(n) &&
                            (n && (i = n + ': '),
                            e.name && iO(e.stack || E, e.name) < 0 && (i += e.name),
                            a && iO(e.stack || E, a) < 0 && (i += (i ? ': ' : E) + a),
                            e.lineNumber && (o += 'Line ' + e.lineNumber),
                            e.columnNumber && (o += ', Column' + e.columnNumber),
                            e.fileName && (o += (o ? Tb : E) + 'in ' + e.fileName),
                            e.stack && (s = e.stack),
                            log(r),
                            i && log(i),
                            o && log(o),
                            s && log(s));
                        }),
                        (_.logC = logC = function (e, t, r) {
                          var n,
                            o,
                            a,
                            i,
                            s,
                            c = D.cookie.split('; '),
                            l = /%[0-9a-fA-F]+/,
                            u = [],
                            d = {};
                          if (D.cookie) {
                            for (n = 0; n < c[L]; n++) {
                              for (
                                i = c[n],
                                  a = (s = iO(i, '=')) < 0 ? i : sU(i, 0, s),
                                  i = s < 0 ? E : "'" + sU(i, s + 1) + "'",
                                  s = 0;
                                s < 3 && !r;
                                s++
                              )
                                i = i.match(l) ? unescape(i) + ' e' : i;
                              (o = a + Te + i),
                                (e &&
                                  !(isR(e) ? a.match(e) : isS(e) ? iO(LC(a), LC(e)) > -1 : !e)) ||
                                  u.push(a + ' = ' + i);
                            }
                            for (n = 0; n < u[L]; n++)
                              for (s = 0; s < u[L] - 1; s++)
                                (a = s + 1),
                                  u[s].localeCompare(u[a]) > 0 &&
                                    ((o = u[s]), (u[s] = u[a]), (u[a] = o));
                            if (t) {
                              for (n = 0; n < u[L]; n++)
                                (i = u[n]), (d[(a = sU(i, 0, iO(i, ' =')))] = cR(a));
                              return d;
                            }
                            for (n = 0; n < u[L]; n++) console.log(u[n]);
                          }
                        }),
                        (_.getStackTrace = getStackTrace = function () {
                          var e,
                            t,
                            r = [],
                            n = [],
                            o = /^[ \t]+at ([^ ]+) \(([^)]+)\)/,
                            a = /^([^@])+@(.*)/,
                            i = new Error().stack,
                            s = isS(i) ? i.split(Tn) : 0,
                            c = 2,
                            l = 0,
                            u = Tq;
                          if (
                            ((function e (t) {
                              if (t) {
                                for (var n = [], o = t.arguments, a = 0; a < o[L]; a++)
                                  n.push(o[a]);
                                r.push(n);
                              }
                              return t ? e(t.caller) : 0;
                            })(arguments.callee.caller),
                            s)
                          )
                            if (i.match(/\n[ \t]+at /))
                              for (; c < s[L] && l < r[L]; c++) {
                                if ((t = s[c].match(o))) {
                                  for (
                                    n.push({
                                      name: t[L] > 1 ? t[1] : u,
                                      loc: t[L] > 2 ? t[2] : u,
                                      args: [],
                                    }),
                                      e = 0;
                                    e < r[l][L];
                                    e++
                                  )
                                    n[l].args.push(r[l][e]);
                                  l++;
                                }
                              }
                            else {
                              if (i.match(/\n.*@debugger/))
                                for (c = 1; c < s[L] && l < r[L]; c++) {
                                  for (
                                    (t = s[c].match(a)) &&
                                      n.push({
                                        name: t[L] > 1 ? t[1] : u,
                                        loc: t[L] > 2 ? t[2] : u,
                                        args: [],
                                      }),
                                      e = 0;
                                    e < r[l][L];
                                    e++
                                  )
                                    n[l].args.push(r[l][e]);
                                  l++;
                                }
                            }
                          else
                            for (c = 0; c < r[L]; c++)
                              for (n.push({ name: u, loc: u, args: [] }), e = 0; e < r[c][L]; e++)
                                n[c].args.push(r[c][e]);
                          return n;
                        }),
                        (_.logStackTrace = logStackTrace = function (e) {
                          e && isS(e) && console.log(e + ':\n');
                          for (var t = getStackTrace(), r = 2; r < t[L]; r++)
                            console.log(t[r].name + '(', t[r].args, ') at', t[r].loc);
                        }),
                        (_.logPerf = logPerf = function () {
                          var e,
                            t,
                            r,
                            n,
                            o,
                            a = fmtTimestamp,
                            i = gP('performance.timing'),
                            s = [],
                            c = 0;
                          if (isO(i)) {
                            for (e in ((i.now = new Date().getTime()), i))
                              (r = i[e]), isN(r) && r > 1500000000000 && (s[c++] = { p: e, v: r });
                            for (e = 0; e < c; e++)
                              for (t = 0; t < c - 1; t++)
                                s[t].v > s[t + 1].v &&
                                  ((n = s[t]), (s[t] = s[t + 1]), (s[t + 1] = n));
                            for (o = s[0].v, e = 0; e < c; e++) {
                              for (r = a((n = s[e]).v - o), t = 0; t < 2; t++)
                                iO(r, '00:') || (r = sU(r, 3));
                              console.log(a(n.v, 'l'), '+' + r, n.p);
                            }
                            delete i.now;
                          }
                        });
                      var getS = function (e) {
                        e = e || ASO;
                        var t,
                          r = isO(W._AA)
                            ? isO(W._AA[ASO])
                              ? W._AA[ASO]
                              : t
                            : isO(W[ASO])
                            ? W[ASO]
                            : t;
                        return isO(r) && isF(r.t) ? r : t;
                      };
                      (_.addLTV = addLTV = function () {
                        var e,
                          t,
                          r,
                          n,
                          o,
                          a = arguments,
                          i = getS() || {},
                          s = E,
                          c = function (e, n) {
                            return (
                              (e = isS(e) && 'none' != LC(e) ? e : E),
                              n &&
                                ((t = Tc + e + Tc),
                                (r = Tc + n + Tc),
                                !o && iO(t, r) < 0
                                  ? (e += (e ? Tc : E) + n)
                                  : o &&
                                    iO(t, r) > -1 &&
                                    ((t = t.replace(new RegExp(r), Tc)),
                                    (e = sU(t, 1, t.length - 1)) == Tc && (e = E))),
                              e
                            );
                          };
                        for (e = 0; e < a.length; e++)
                          isO(a[e]) ? (i = a[e]) : (s += (s ? Tc : E) + a[e]);
                        for (s = s.split(Tc), e = 0; e < s.length; e++)
                          (n = s[e].replace(/=.*/, E).replace(/:/, E)),
                            (o = n[0] == Th) && (n = sU(n, 1)),
                            ('event' == sU(n, 0, 5) ||
                              iO('scOpen,scView,scAdd,scRemove,scCheckout,prodView,purchase', n) >
                                -1) &&
                              ((i.linkTrackEvents = c(i.linkTrackEvents, n)),
                              (n = i.linkTrackEvents ? '-events' : 'events')),
                            (i.linkTrackVars = c(i.linkTrackVars, n));
                      }),
                        (_.getAdobeECID = getAdobeECID = function () {
                          var e,
                            t = logC(/^AMCV_/, 1),
                            r = cR('AMCV_5E34123F5245B2CD0A490D45%40AdobeOrg');
                          if (!r) for (e in t) r = t[e];
                          return (e = r.match(/mid\|([^|]*)/i)), isA(e) && e.length > 1 ? e[1] : E;
                        }),
                        (_.getAdobeID = getAdobeID = function () {
                          return cR('s_vi')
                            .replace(/\[[^\[]*\]/g, E)
                            .replace(/[^\|]*\|/, E);
                        }),
                        (_.getGoogleID = getGoogleID = function () {
                          var e = E;
                          try {
                            e = W.ga.getAll()[0].get('clientId');
                          } catch (t) {
                            e = E;
                          }
                          return (
                            e ||
                            cR('_ga')
                              .replace(/GA[^.]*/, E)
                              .replace(/^\.[0-9]\.*/, E)
                          );
                        }),
                        (_.getUniqueClientID = getUniqueClientID = function () {
                          var e = 's_fid',
                            t = getAdobeID() || cR(e),
                            r = function (e, r) {
                              for (r = 0, t = ''; r < 4; r++) {
                                for (
                                  e = UC(
                                    (
                                      (Math.pow(2, 16) - 1) &
                                      (new Date().getTime() ^ (Math.random() * Math.pow(2, 16)))
                                    ).toString(16)
                                  );
                                  e.length < 4;

                                )
                                  e = T0 + e;
                                t += e;
                              }
                              return t;
                            };
                          return t || ((t = r() + Th + r()), cW(e, t)), t;
                        }),
                        (_.subHpmmd = subHpmmd = function () {
                          return subO(
                            W.hpmmd,
                            'type,page,product,user,promo,search,legacy,browser,csstate,version,code'
                          );
                        }),
                        (_.subS = subS = function (e) {
                          return subO(
                            e || getS(),
                            'account,version,currencyCode,referrer,server,channel,hier*,pageType,pageName,events,products,purchaseID,transactionID,campaign,visitorID,zip,state,eVar*,prop*',
                            1
                          );
                        }),
                        (_.subDL = subDL = function (e) {
                          var t,
                            r = e || W.dataLayer,
                            n = r;
                          if (isA(n))
                            for (n = {}, t = 0; t < r[L]; t++)
                              (v = r[t].event), (isS(v) && !iO(v, 'gtm.')) || (n[t + E] = r[t]);
                          return n;
                        }),
                        (_.onEnsightenTest = onEnsightenTest = function () {
                          var e = gP('Bootstrapper.ensightenOptions.staticJavascriptPath');
                          return isS(e) && iO(e, '-test') > 0;
                        });
                      var df = 0,
                        al = W.addEventListener,
                        ae = W.attachEvent,
                        ale = W.removeEventListener,
                        aee = W.detachEvent,
                        de = [
                          'afterprint',
                          'beforeprint',
                          'focusin',
                          'focusout',
                          'pagehide',
                          'pageshow',
                          'play',
                          'pause',
                          'cuechange',
                          'playing',
                          'ended',
                          'volumechange',
                          'canplay',
                          'canplaythrough',
                          'durationchange',
                          'ratechange',
                          'waiting',
                          'change',
                          'contextmenu',
                          'formchange',
                          'forminput',
                          'submit',
                          'emptied',
                          'error',
                          'invalid',
                          'line',
                          'loadstart',
                          'load',
                          'hashchange',
                          'beforeunload',
                          'unload',
                          'stalled',
                          'reset',
                          'abort',
                          'loadeddata',
                          'loadedmetadata',
                          'DOMContentLoaded',
                          'readystatechange',
                          'offline',
                          'popstate',
                          'progress',
                          'seeking',
                          'seeked',
                          'show',
                          'suspend',
                          'timeupdate',
                        ],
                        dh = function (e) {
                          try {
                            (e = e || W.event), W.console.log('~DOM EVENT', e.type);
                          } catch (e) {}
                        };
                      (_.logDomEvents = logDomEvents = function () {
                        if (!df) {
                          df = T;
                          for (var e = 0; e < de[L]; e++)
                            al ? al(de[e], dh, F) : ae && ae('on' + de[e], dh);
                        }
                      }),
                        (_.logDomEventsEnd = logDomEventsEnd = function () {
                          if (df) {
                            df = F;
                            for (var e = 0; e < de[L]; e++)
                              al ? ale(de[e], dh, F) : ae && aee('on' + de[e], dh);
                          }
                        });
                      var lm = { log: 0, warn: 0, error: 0, info: 0 },
                        logU = Dl.href;
                      (_.logTimeStamps = logTimeStamps = function () {
                        var e,
                          t,
                          r,
                          n,
                          o = W.console || {},
                          a =
                            isO(W.performance) && isO(W.performance.timing)
                              ? W.performance.timing
                              : 0,
                          i = a ? a.navigationStart : 0,
                          s = [
                            'requestStart',
                            'responseStart',
                            'domLoading',
                            'domContentLoadedEventEnd',
                            'loadEventStart',
                            'loadEventEnd',
                          ],
                          c = function (e, t, r) {
                            try {
                              var n,
                                a = [fmtTimestamp(t || getElapsedTime())];
                              for (n = 0; n < r[L]; n++) a[n + 1] = r[n];
                              r = e ? Function.prototype.apply.call(e, o, a) : -1;
                            } catch (e) {
                              r = -2;
                            }
                            return r;
                          };
                        for (t in lm)
                          !lm[t] &&
                            (r = lm[t] = o[t] || 0) &&
                            (o[t] = function () {
                              return c(r, 0, arguments);
                            });
                        for (e = 0; i && e < s[L]; e++)
                          (n = a[(t = s[e])]),
                            isN(n) && n && (c(lm.log, n - i, ['~PERF TIME', t, logU]), (logU = E));
                      }),
                        (_.logTimeStampsEnd = logTimeStampsEnd = function () {
                          var e, t;
                          for (e in lm) (t = lm[e]) && ((W.console[e] = t), (lm[e] = 0));
                        });
                      var muTO = 0,
                        inStl = 0,
                        inSt = 0,
                        waPollActive = F,
                        dlPollActive = F,
                        dlL = 0,
                        srEv = 0,
                        pv1 = F,
                        iscsWait = 0,
                        wrapper = {
                          trackMetrics: {
                            c: 0,
                            n: function (e, t) {
                              var r;
                              if (isF(W.trackMetricsOverrides))
                                try {
                                  W.trackMetricsOverrides(e, t);
                                } catch (e) {
                                  console.log(eIn, 'trackMetricsOverrides', e);
                                }
                              if (logState())
                                try {
                                  console.log(
                                    'Analytics trackMetrics(',
                                    varsToStr(e),
                                    Tc,
                                    Tn + varsToStr('-l', t),
                                    ');',
                                    Tn + varsToStr('hpmmd_subset=', subHpmmd())
                                  );
                                } catch (e) {}
                              if (
                                ((r = W.o_trackMetrics.apply(W, arguments)),
                                isF(W.trackMetricsPostOverrides))
                              )
                                try {
                                  W.trackMetricsPostOverrides(e, t);
                                } catch (e) {
                                  console.log(eIn, 'trackMetricsPostOverrides', e);
                                }
                              return r;
                            },
                          },
                          doPlugins: {
                            c: ASO,
                            n: function () {
                              var e = this,
                                t = e.eo || e.linkObject || 0,
                                r = t ? t.href || t.download : 0,
                                n = (e.callTypeF =
                                  (r && e.lt ? e.lt(r) : 0) ||
                                  e.linkType ||
                                  (t
                                    ? r && e.linkName
                                      ? 'o'
                                      : '+'
                                    : e.lt || !e.callTypeF
                                    ? 't'
                                    : '+'));
                              return (
                                ('e' != n && 'd' != n) ||
                                  ((e.eVar50 = e.prop41 =
                                    n + Tp + (e.linkName || e.linkURL || Tq)),
                                  addLTV('eVar50,prop41')),
                                e.o_doPlugins.apply(e, arguments)
                              );
                            },
                          },
                          t: {
                            c: ASO,
                            n: function () {
                              var e,
                                t = this;
                              if ((wrapSifNeeded('doPlugins'), !inStl && isF(W.sToverrides)))
                                try {
                                  W.sToverrides(t);
                                } catch (e) {
                                  console.log(eIn, 'sToverrides', e);
                                }
                              try {
                                logState() && console.log('~Adobe Analytics s.t()'),
                                  console.log(varsToStr('s_subset=', subS()));
                              } catch (e) {}
                              if (
                                ((inSt = 1),
                                (e = t.o_t.apply(t, arguments)),
                                (inSt = 0),
                                isF(W.sTpostOverrides))
                              )
                                try {
                                  W.sTpostOverrides(t);
                                } catch (e) {
                                  console.log(eIn, 'sTpostOverrides()', e);
                                }
                              return e;
                            },
                          },
                          tl: {
                            c: ASO,
                            n: function (e, t, r) {
                              var n,
                                o = this;
                              if (isF(W.sTLoverrides))
                                try {
                                  W.sTLoverrides(o, e, t, r);
                                } catch (e) {
                                  console.log(eIn, 'sTLoverrides', e);
                                }
                              if (
                                ((inStl = 1),
                                (n = o.o_tl.apply(o, arguments)),
                                (inStl = 0),
                                isF(W.sTLpostOverrides))
                              )
                                try {
                                  W.sTLpostOverrides(o, e, t, r);
                                } catch (e) {
                                  console.log(eIn, 'sTLpostOverrides', e);
                                }
                              if (logState())
                                try {
                                  console.log(
                                    '~Adobe Analytics s.tl(',
                                    varsToStr(e),
                                    Tc,
                                    varsToStr(t),
                                    Tc,
                                    varsToStr(r),
                                    ')'
                                  ),
                                    console.log(varsToStr('s_subset=', subS()));
                                } catch (e) {}
                              return n;
                            },
                          },
                          sa: {
                            c: ASO,
                            n: function (e) {
                              var t;
                              if (((inSt = inStl = 0), isF(W.sSAoverrides)))
                                try {
                                  e = W.sSAoverrides(e);
                                } catch (e) {
                                  console.log(eIn, 'sSAoverrides', e);
                                }
                              if (((t = this.o_sa.apply(this, arguments)), logState()))
                                try {
                                  console.log(
                                    'Adobe Analytics s.sa(',
                                    varsToStr(e),
                                    ')',
                                    Tn + varsToStr('s_subset=', subS())
                                  );
                                } catch (e) {}
                              if (isF(W.sSApostOverrides))
                                try {
                                  e = W.sSApostOverrides(e);
                                } catch (e) {
                                  console.log(eIn, 'sSAoverrides', e);
                                }
                              return t;
                            },
                          },
                          s_gi: {
                            c: 0,
                            n: function (e) {
                              var t;
                              if (((inSt = inStl = 0), isF(W.sGIoverrides)))
                                try {
                                  e = W.sGIoverrides(e);
                                } catch (e) {
                                  console.log(eIn, 'sGIoverrides', e);
                                }
                              if (((t = W.o_s_gi.apply(W, arguments)), logState()))
                                try {
                                  console.log(
                                    'Adobe Analytics s_gi(',
                                    varsToStr(e),
                                    ')',
                                    Tn + varsToStr('s_subset=', subS())
                                  );
                                } catch (e) {}
                              if (isF(W.sGIpostOverrides))
                                try {
                                  e = W.sGIpostOverrides(e);
                                } catch (e) {
                                  console.log(eIn, 'sGIoverrides', e);
                                }
                              return t;
                            },
                          },
                        },
                        wrapSifNeeded = function (e) {
                          try {
                            var t,
                              r,
                              n,
                              o,
                              a = getS(),
                              i = T,
                              s = eIn + ' wrapSifNeeded',
                              c = function () {
                                try {
                                  (t = wrapper[e]),
                                    (r = t.c ? (t.c == ASO ? getS() : W[t.c]) : W) &&
                                      ((n = r[e]),
                                      (o = 'o_' + e),
                                      isF(n) && !isF(r[o]) && ((r[o] = n), (r[e] = t.n)));
                                } catch (e) {
                                  console.log(s, 'polling loop', e), (i = F);
                                }
                              };
                            if (a)
                              if (
                                (!isO(W._AA) &&
                                  W._A.adobeSobject != a &&
                                  isF(a.t) &&
                                  (W._A.adobeSobject = a),
                                e)
                              )
                                c();
                              else for (e in wrapper) c();
                          } catch (e) {
                            console.log(s, 'polling loop', e), (i = T);
                          }
                          return i;
                        },
                        checkDL = function () {
                          var e,
                            t,
                            r,
                            n = 'e_pageView',
                            o = 'mu.ready',
                            a = 1,
                            i = W.dataLayer,
                            s = function () {
                              var e = F;
                              if (isO(_A.section)) {
                                for (e = 'ISCS' != _A.section.platform, r = 0; r < i[L] && !e; r++)
                                  e = i[r].ecommerce || i[r].event == o;
                                (e |= iscsWait > 350), (iscsWait += 25);
                              }
                              e ? i.push({ event: o }) : setTimeout(s, 25);
                            };
                          try {
                            if (isA(i))
                              for (pv1 && isO(srEv) && (i.push(srEv), (srEv = 0)); dlL < i[L]; ) {
                                switch ((t = i[dlL]).event) {
                                  case n:
                                    for (e = dlL - 1; e > -1 && i[e].event != n; e--)
                                      if ('e_deferred' == i[e].event)
                                        for (r in i[e])
                                          'event' !== r &&
                                            r.indexOf('gtm.') < 0 &&
                                            !t.hasOwnProperty(r) &&
                                            (t[r] = i[e][r]);
                                    s(), (pv1 = T);
                                    break;
                                  case 'e_searchResults':
                                    for (r in (pv1 || i.push({ event: n }),
                                    (srEv = { event: 'mu.searchResults' }),
                                    t))
                                      'event' !== r && r.indexOf('gtm.') < 0 && (srEv[r] = t[r]);
                                }
                                dlL++;
                              }
                          } catch (e) {
                            a = 0;
                          }
                          return a;
                        },
                        muPoll = function () {
                          muTO && (clearTimeout(muTO), (muTO = 0)),
                            waPollActive && (waPollActive = wrapSifNeeded()),
                            dlPollActive && (dlPollActive = checkDL()),
                            (muTO = setTimeout(muPoll, 50));
                        },
                        iframeListener = function () {
                          var al = W.addEventListener,
                            ae = W.attachEvent,
                            messageHandler = function (o) {
                              try {
                                if (
                                  (logDebug('Message:', o),
                                  _A.isO(o) && _A.isS(o.origin) && _A.isS(o.data))
                                ) {
                                  var d = o.data.match(/^(UDL:)(\{.*\})/);
                                  _A.isA(d) &&
                                    dataLayer.push(
                                      _A.cO(eval('(function(){return ' + d[2] + '})();'))
                                    );
                                }
                              } catch (e) {
                                console.log(eIn, 'window.onmessage:', e);
                              }
                            };
                          al
                            ? al('message', messageHandler, F)
                            : ae && ae('onmessage', messageHandler);
                        };
                      for (i in ((_.wrapAdobeCalls = wrapAdobeCalls = function (e) {
                        (waPollActive = T), muPoll(), iframeListener();
                      }),
                      (_.logAdobeCreg = wrapAdobeCalls),
                      (_.wrapAdobeCallsEnd = wrapAdobeCallsEnd = function () {
                        try {
                          var e, t, r, n;
                          for (e in ((waPollActive = F), wrapper))
                            (t = wrapper[e].c ? W[wrapper[e].c] : W) &&
                              ((r = t[e]),
                              (n = 'o_' + e),
                              isF(r) && isF(t[n]) && ((t[e] = t[n]), (t[n] = 0)));
                        } catch (e) {
                          console.log(eIn, 'wrapAdobeCallsEnd', e);
                        }
                      }),
                      (_.muCheckStart = muCheckStart = function () {
                        dlPollActive = T;
                      }),
                      muPoll(),
                      _))
                        o[i] = _[i].bind(this);
                      return o;
                    })()),
                    (_A.codeVer = CodeVer),
                    (_A.codePlatform = CodePlatform),
                    W._A.logState() && (W._A.logTimeStamps(), W._A.logDomEvents()),
                    W._A.wrapAdobeCalls(),
                    (W._A.getOptOut = function (e, t, r, n) {
                      return isO(W._P)
                        ? _P.ifOptOut(2 == e ? 1 : 1 == e ? 2 : e)
                        : _A.optOut(e, t, r, n);
                    }),
                    W._A.muCheckStart();
                  var vcn = 's_vnum',
                    pcn = 's_invisit',
                    ccn = pcn + 'c',
                    ucn = 's_previousUrl',
                    vcv,
                    pcv,
                    ccv,
                    ucv = _A.cR(ucn),
                    rwvc = function (e, t) {
                      var r,
                        n,
                        o,
                        a = Td + _A.getOwnerHn(),
                        i = new Date().getTime(),
                        s = i + 31536000000,
                        c = i + 1800000;
                      switch (
                        ((vcv = _A.toNum(_A.cR(vcn))),
                        (pcv = _A.toNum(_A.cR(pcn))),
                        (ccv = _A.toNum(_A.cR(ccn))),
                        _A.isN(vcv) || ((vcv = 0), (pcv = ccv = UN), (r = T)),
                        _A.isN(pcv) || ((pcv = ccv = 0), vcv++, (r = T)),
                        _A.isN(ccv) || ((ccv = pcv), (r = T)),
                        e)
                      ) {
                        case 'v':
                          t && (vcv++, (pcv = ccv = 0), (r = T)), (o = vcv);
                          break;
                        case 'p':
                          t && (pcv++, ccv++, (r = n = T)), (o = pcv);
                          break;
                        case 'c':
                          t && (ccv++, (r = T)), (o = ccv);
                          break;
                        case 'u':
                          o = ucv;
                      }
                      return (
                        r &&
                          !_A.getOptOut(2) &&
                          (_A.cW(vcn, vcv, s, a), _A.cW(pcn, pcv, c, a), _A.cW(ccn, ccv, c, a)),
                        n && !_A.getOptOut(2) && _A.cW(ucn, Dlu, c, a),
                        o
                      );
                    },
                    incDepth = function (e) {
                      rwvc(e, T);
                    };
                  (_A.getVisitNum = function () {
                    return rwvc('v');
                  }),
                    (_A.getPageDepth = function () {
                      return rwvc('p');
                    }),
                    (_A.getCallDepth = function () {
                      return rwvc('c');
                    }),
                    (_A.getPrevUrl = function () {
                      return ucv || '';
                    }),
                    _A.scrollG ||
                      ((_A.scrollS = _A.ran() < 0.005 || _A.parseParam('stAnalytics')),
                      (_A.scrollG = [0, 0, 0, 0, 0]),
                      (_A.scrollA = [0, 0, 0, 0, 0]),
                      (_A.scrollHandler = function (e) {
                        _A.scrollS &&
                          ((e /= 25),
                          (_A.scrollG[e] = 1),
                          clearTimeout(_A.scrollGt),
                          (_A.scrollGt = setTimeout(function () {
                            var e = _A.scrollG.join('');
                            '00000' != e && dataLayer.push({ event: 'mu.scrollg', ms: e });
                          }, 1500)),
                          (_A.scrollA[e] = 1),
                          clearTimeout(_A.scrollAt),
                          (_A.scrollAt = setTimeout(function () {
                            var e = _A.scrollA.join('');
                            '00000' != e &&
                              _A.section.adobe !== F &&
                              dataLayer.push({ event: 'mu.scrolla', ms: e, udl: T });
                          }, 1500)));
                      })),
                    _A.getGAvar ||
                      (_A.getGAvar = function (e) {
                        var t,
                          r = W.google_tag_manager,
                          n = r && r.constructor == Object ? r[GTMid] : 0;
                        if (n)
                          try {
                            t = n.dataLayer.get(e);
                          } catch (e) {
                            t = void 0;
                          }
                        return t;
                      }),
                    _A.delGAvar ||
                      (_A.delGAvar = function (e) {
                        var t = W.google_tag_manager,
                          r = t && t.constructor == Object ? t[GTMid] : 0;
                        if (r)
                          try {
                            r.dataLayer.reset(e);
                          } catch (e) {}
                      });
                  var wP = W.performance,
                    wT = W.wP && _A.isO(wP) ? wP.timing : 0,
                    aaT = 'adobeAnalyticsT',
                    aaTL = aaT + 'L',
                    rc,
                    grc = function () {
                      var e,
                        t,
                        r,
                        n = _A.logC('', T),
                        o = [];
                      for (e in n) e && o.push(e);
                      return (t = o[L])
                        ? 'c|' + o[(r = toInt(t * Math.random())) < 0 ? 0 : r > t - 1 ? t - 1 : r]
                        : E;
                    },
                    optInGroups = function () {
                      try {
                        var e,
                          t = unescape(cR('OptanonConsent')).match(/groups=([^&]*)/),
                          r = 1,
                          n = [E];
                        for (t = _A.isA(t) && t[L] > 1 ? Tc + t[1] + Tc : E; r < 10; r++)
                          (e = t.match(new RegExp(Tc + (r + 1) + ':([01]),'))),
                            (n[r] = !_A.isA(e) || e[L] < 2 ? E : e[1] == T1 ? r + E : E);
                        return (
                          t.match(/,5:/) || (n[4] = n[2] != E ? '4' : E),
                          t.match(/,6:/) || (n[5] = n[3] != E ? '5' : E),
                          n.join(E) || '-'
                        );
                      } catch (e) {
                        return E;
                      }
                    },
                    setAdobeOverrideVars = function (e, t) {
                      var r,
                        n,
                        o = _A.parseUri(),
                        a = o.args.p,
                        i = a ? '?p=' + a : '',
                        s = o.args.sel,
                        c = Dl.pathname,
                        l = _A.section,
                        u = Tq,
                        d = _A.scrollA,
                        f = [32, 33, 34, 35, 36];
                      if (
                        ((e.eVar90 = Dlu),
                        Dr ? (e.eVar91 = Dr) : delete e.eVar91,
                        (i += s ? (i ? Ta : Tq) + 'sel=' + s : E),
                        (c = _A.isS(c) ? c.replace(/\/[0-9]+\/model\/[0-9]+\/*$/, '') : ''),
                        (e.eVar93 = Dl.protocol + '//' + Dlh + c + i),
                        (e.eVar94 = Dlh),
                        _A.isO(l) &&
                          ((u = l.type || Tq),
                          (u += To + (l.subtype || Tq)),
                          l.dev && (u += ':dev'),
                          (u += Tp + (l.platform || Tq)),
                          (u += Tp + (l.region || Tq)),
                          (u += Tp + (l.country || Tq)),
                          (u += To + (l.language || Tq)),
                          (u += Tp + (l.currency || Tq))),
                        (e.eVar95 = u),
                        (e.eVar96 = navigator.userAgent),
                        t &&
                          (_A.addLTV('eVar90,eVar93,eVar94,eVar95,eVar96'),
                          e.eVar91 && _A.addLTV('eVar91')),
                        _A.isA(d))
                      )
                        for (r = 0; r < 5; r++)
                          d[r] &&
                            ((n = 'event' + f[r]),
                            (e.events = _A.addCS(e.events, n)),
                            t && addLTV(n),
                            (d[r] = 0));
                      e.eVar100 || ((rc = grc()) && ((e.eVar100 = rc), t && _A.addLTV('eVar100')));
                    },
                    setGoogleOverrideVars = function (e) {
                      var t,
                        r = _A.scrollG,
                        n = [8, 1, 2, 3, 4];
                      if (((d = 'dimension'), (dv = e.get(d + 150) || E), _A.isA(r)))
                        for (t = 0; t < 5; t++) r[t] && (e.set('metric' + n[t], 1), (r[t] = 0));
                      dv || ((rc = grc()), e.set(d + 150, rc)), e.set(d + 66, optInGroups());
                    };
                  (W.gHitOverrides && W.gHitOverrides.constructor == Function) ||
                    (W.gHitOverrides = function (e, t) {
                      try {
                        t || (t = e.get('hitType')), setGoogleOverrideVars(e);
                      } catch (e) {
                        console.log('gHitOverrides ERROR', e);
                      }
                    }),
                    (W.gPostHitOverrides && W.gPostHitOverrides.constructor == Function) ||
                      (W.gPostHitOverrides = function (e) {
                        try {
                          var t,
                            r = 'action,AOID,chatAction,clearFacet,clickedTerm,demandBase1,demandBase2,demandBase3,detailsTabName,dnb1,dnb2,documentAction,documentID,documentType,ecommerce,filterCategories,filterChecked,filterValue,formError,formName,label,linkID,linkPlacement,numSearchResults,productName,searchCatAndTerm,searchResults,searchTerm,sortType,test1name,test1variation,test2name,test2variation,test3name,test3variation,concatProductIDs,concatComponents,configuratorAction,productName,component,fieldError,couponCode,orderNumber,returnType,sortType,videoAction,videoLabel'.split(
                              Tc
                            ),
                            n = _A.delGAvar;
                          for (t = 0; t < r.length; t++) n(r[t]);
                          for (t = 151; t < 201; t++) n('v' + t), n('e' + t);
                        } catch (e) {
                          console.log('gPostHitOverrides ERROR', e);
                        }
                      }),
                    's' != ASO ||
                      (W.sToverrides && W.sToverrides.constructor == Function) ||
                      (W.sToverrides = function (e) {
                        try {
                          var t,
                            r = _A.getAdobeID(),
                            n = _A.getAdobeECID();
                          delete e.prop67,
                            r && (e.prop67 = r),
                            delete e.prop66,
                            n && (e.prop66 = n),
                            _A.PVat ||
                              ((t = Math.floor(_A.getElapsedTime() / 100 + 0.5)) > 0 &&
                                t <= 30000 &&
                                ((e.events = _A.addCS(e.events, 'event46')),
                                (e.events = _A.addCS(e.events, 'event45=' + t)),
                                (t /= 10),
                                (e.eVar99 =
                                  t > 99.5
                                    ? _A.fmtNum(10 * Math.floor(0.5 + t / 10), 1, 0)
                                    : t > 9.95
                                    ? _A.fmtNum(t, 1, 0)
                                    : _A.fmtNum(t, 1, 1)),
                                (_A.PVat = t),
                                wT && (wT[aaT] = new Date().getTime())));
                          var o = _A.isS(e.account || W.s_account) ? e.account || W.s_account : '';
                          e.events &&
                            ((e.events = _A.addCS(e.events, 'event11', -1)),
                            (e.events = _A.addCS(e.events, 'event92', -1)),
                            (e.events = _A.addCS(e.events, 'event93', -1))),
                            delete e.prop61,
                            (e.linkTrackVars = _A.addCS(e.linkTrackVars || 'None', 'prop61', -1)),
                            _A.iO(e.pageName, ['_hpeuck_banview_']) < 0 &&
                              _A.iO(o, ['hphqemeaov2banners']) < 0 &&
                              !_A.pageReloaded() &&
                              ((e.prop30 = _A.hpPrevPageName = e.prop73 || ''),
                              incDepth('p'),
                              1 == pcv && (e.events = _A.addCS(e.events, 'event11', 1)),
                              2 == pcv && (e.events = _A.addCS(e.events, 'event92', 1)),
                              2 == ccv && (e.events = _A.addCS(e.events, 'event93', 1)),
                              (e.prop63 = ccv > 1 ? 'Engaged' : 'Initial'),
                              vcv > -1 &&
                                pcv > -1 &&
                                ccv > -1 &&
                                ((e.prop61 =
                                  ('000' + vcv).slice(-4) +
                                  To +
                                  ('000' + pcv).slice(-4) +
                                  To +
                                  (T0 + ccv).slice(-2)),
                                _A.addLTV('prop61'))),
                            setAdobeOverrideVars(e);
                        } catch (e) {
                          console.log('sToverrides ERROR', e);
                        }
                      }),
                    (W.sTpostOverrides && W.sTpostOverrides.constructor == Function) ||
                      (W.sTpostOverrides = function (e) {
                        (e.eVar100 = E),
                          setTimeout(function () {
                            W.adobeStCalled = T;
                          }, 150);
                      }),
                    's' != ASO ||
                      (W.sTLoverrides && W.sTLoverrides.constructor == Function) ||
                      (W.sTLoverrides = function (e, t, r, n) {
                        try {
                          var o = _A.getAdobeID(),
                            a = _A.getAdobeECID();
                          delete e.prop67,
                            o && ((e.prop67 = o), _A.addLTV('prop67')),
                            delete e.prop66,
                            a && ((e.prop66 = a), _A.addLTV('prop66')),
                            _A.hpPrevPageName &&
                              ((e.prop30 = _A.hpPrevPageName), _A.addLTV('prop30')),
                            wT && !wT[aaTL] && (wT[aaTL] = new Date().getTime());
                          var i = _A.isS(n) ? _A.LC(n) : '';
                          e.events &&
                            ((e.events = _A.addCS(e.events, 'event11', -1)),
                            (e.events = _A.addCS(e.events, 'event92', -1)),
                            (e.events = _A.addCS(e.events, 'event93', -1))),
                            delete e.prop61,
                            (e.linkTrackVars = _A.addCS(e.linkTrackVars || 'None', 'prop61', -1)),
                            (e.linkTrackEvents = _A.addCS(
                              e.linkTrackEvents || 'None',
                              'event11',
                              -1
                            )),
                            (e.linkTrackEvents = _A.addCS(
                              e.linkTrackEvents || 'None',
                              'event92',
                              -1
                            )),
                            (e.linkTrackEvents = _A.addCS(
                              e.linkTrackEvents || 'None',
                              'event93',
                              -1
                            )),
                            (!i ||
                              _A.iO(
                                i,
                                [
                                  'abtest',
                                  'd&b',
                                  'dnb',
                                  'demandbase',
                                  'hpeuck',
                                  'internal',
                                  '-us:hho:optly',
                                  'linkclick:namogoo',
                                  'optimizelylayerdecision',
                                  'customized.page',
                                ],
                                0,
                                -1
                              ) < 0) &&
                              ((e.prop41 = e.eVar50 =
                                ('o' == r ? 'c|' : 'd' == r ? 'd|' : 'e' == r ? 'e|' : E) +
                                (n || Th)),
                              _A.addLTV('prop41,eVar50'),
                              incDepth('c'),
                              2 == ccv &&
                                ((e.events = _A.addCS(e.events, 'event93', 1)),
                                _A.addLTV('event93')),
                              (e.prop63 = ccv > 1 ? 'Engaged' : 'Initial'),
                              vcv > -1 &&
                                pcv > -1 &&
                                ccv > -1 &&
                                ((e.prop61 =
                                  ('000' + vcv).slice(-4) +
                                  To +
                                  ('000' + pcv).slice(-4) +
                                  To +
                                  (T0 + ccv).slice(-2)),
                                _A.addLTV('prop61'))),
                            setAdobeOverrideVars(e, 1);
                        } catch (e) {
                          console.log('sTLoverrides ERROR', e);
                        }
                      }),
                    (W.sGIoverrides && W.sGIoverrides.constructor == Function) ||
                      (W.sGIoverrides = function (e) {
                        var t = e,
                          r = function (e) {
                            if (!e || !_A.isS(e)) return e;
                            e = e.split(Tc);
                            var t,
                              r,
                              n = [];
                            for (t = 0; t < e.length; t++)
                              (r = e[t].toLowerCase()),
                                (iO(r, 'hpe-') && 'hphqwwesg' != r && 'hpcstsg' != r) ||
                                  (e[t] = '');
                            for (t = 0; t < e.length; t++) e[t] && n.push(e[t]);
                            return 0 == n.length && n.push('hphqglobal'), n.join(Tc);
                          };
                        try {
                          (e = r(e)),
                            W[ASO] &&
                              _A.isO(W[ASO]) &&
                              W[ASO].account &&
                              (W[ASO].account = r(W[ASO].account)),
                            W.s_account && (W.s_account = r(W.s_account));
                        } catch (e) {}
                        return t != e && console.log('sGIoverrides() orig:', t, 'new:', e), e;
                      }),
                    (W.sSAoverrides && W.sSAoverrides.constructor == Function) ||
                      (W.sSAoverrides = W.sGIoverrides);
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_881b9b128a17da2b)
                ({}.constructor.defineProperty(window, 'performance', $___old_881b9b128a17da2b));
            }
          })();
          !(function () {
            if (!_A.isF(_A.getSiteSection)) {
              (_A.getSiteSection = function (t) {
                var e,
                  p,
                  r,
                  o,
                  a,
                  n,
                  c = this,
                  s = 'ERROR in getSiteSection',
                  i = Dl,
                  h = Dlh,
                  m = Dl.href,
                  u = E,
                  l = E,
                  b = 'hphqglobal',
                  f = b + 'dev',
                  g = 'match',
                  A = g + 'Dev',
                  d = 'rsid',
                  y = 'rsidDev',
                  _ = 'country',
                  D = 'language',
                  v = [d, y, _, D, 'region', 'market', 'currency'],
                  S = function (t) {
                    for (var e = 0; e < v[L]; e++) if (t == v[e]) return T;
                    return F;
                  },
                  w = function () {
                    var e = t ? E : _A.getMeta('udl', 'lc');
                    return 'enable' == e || 'udl' == e;
                  },
                  P = {
                    type: K,
                    subtype: K,
                    platform: K,
                    match: 'NONE',
                    dev: T,
                    rsid: 'hphqunknown',
                    rsidDev: f,
                    udl: w(),
                  },
                  k = function (t) {
                    for (var e, p, r, o = arguments, a = o[L], n = t[L], c = 0, s = []; c < n; ) {
                      for (p = 1, r = []; p < (a || 2); p++)
                        (e = o[p] || 1), r.push(c + e - 1 < n ? t.substr(c, e) : E), (c += e);
                      r.length > 0 && s.push(r[L] > 1 ? r : r[0]);
                    }
                    return s;
                  },
                  R = k(
                    'f_USD41a_USD10c_USD52e_EUR01l_USD52m_USD41afAFN10axEUR71alALL41dzDZD41asUSD42adEUR41aoAOA41aiXCD52aqXCD10agXCD52arARS52amAMD41awAWG52auAUD10atEUR01azAZN41bsBSD52bhBHD41bdBDT30bbBBD52byBYR41beEUR71bzBZD52bjXOF41bmBMD62btBTN10boBOB52baBAM41bwBWP41bvNOK71brBRL52ioGBP10bnBND10bgBGN01bfXOF41biBIF41khKHR10cmXAF41caCAD62cvCVE41bqUSD52kyKYD52cfXAF41tdXAF41clCLP52cnCNY20cxAUD10ccAUD10coCOP52kmKMF41cgXAF41cdCDF41ckNZD10crCRC52hrHRK01cwANG52cyEUR41czCZK01dkDKK71djDJF41dmXCD52doDOP52ecECS52egEGP41svSVC52gqXAF41erERN41eeEUR71etETB41fkFKP52foDKK41fjFJD10fiEUR71frEUR81gfEUR52pfEUR41tfEUR41gaXAF41gmGMD41geGEL41deEUR01ghGHS41giGIP81grEUR01glDKK71gdXCD52gpEUR52guUSD42gtGTQ52ggGGP41gnGNF41gwGWP41gyGYD52htHTG52hmAUD10hnHNL52hkHKD20huHUF01isISK71inINR30idIDR10iqIQD41ieEUR91imGBP91ilILS01itEUR81ciXOF41jmJMD52jpJPY10jeGBP71joJOD41kzKZT41keKES41kiAUD10krKRW10ksEUR01kwKWD41kgKGS41laLAK10lvLVL71lbLBP41lsLSL41lrLRD41lyLYD41liCHF41ltLTL71luEUR71moMOP10mkMKD41mgMGF41mwMWK41myMYR10mvMVR10mlXOF41mtEUR01mhUSD10mqEUR52mrMRO41muMUR41ytEUR41mxMXN52fmUSD10mdMDL41mcEUR81mnMNT10meEUR41msXCD52maMAD41mzMZN41mmMMK10naNAD41nrAUD10npNPR10nlEUR71anANG52ncXPF41nzNZD10niNIO52neXOF41ngNGN41nuNZD10nfAUD10mpUSD10noNOK71omOMR41pkPKR10pwUSD10psILS41paPAB52pgPGK10pyPYG52pePEN52phPHP10pnNZD10plPLN01ptEUR81prUSD52qaQAR41reEUR41roRON01ruRUB41rwRWF41blEUR52shSHP41knXCD52lcXCD52mfEUR52pmEUR61vcXCD52wsWST10smEUR81stSTD41saSAR41snXOF41rsRSD41scSCR41slSLL41sgSGD10skEUR01siEUR01sbSBD10soSOS41zaZAR41gsGBP52ssSSP41esEUR81lkLKR30nsSRD52sjNOK71szSZL41seSEK71chCHF71twTWD20tjTJS41tzTZS41thTHB10tlUSD10tgXOF41tkNZD10toTOP10ttTTD52tnTND41trTRY41tmTMT41tcUSD52tvAUD10ugUGX41uaUAH41aeAED41ukGBP91usUSD6?umUSD42uyUYU52uzUZS41vuVUV10vaEUR81veVEF52vnVND10vgUSD52viUSD62wfXPF10ehMAD41yeYER41zmZMW41zwZWD41',
                    2,
                    3,
                    1,
                    1
                  ),
                  U = 'CEU,GA,GC,IND,ISE,LA,NA,NEU,SEU,UKI'.split(Tc),
                  M = ['APJ', 'EMEA', 'AMS'],
                  O =
                    'australia|canada|france|germany|italy|korea|malaysia|netherlands|singapore|spain|sweden|switzerland|uk',
                  q = O.split(Tp),
                  C = 'au|ca|fr|de|it|kr|my|nl|sg|es|se|ch|uk'.split(Tp),
                  z = k(
                    'aaafamarayazbebgbibnbscachcscydadedvdzeleneseteufafifofrgagdglgnhehihohrhthuhyidisitjakakkklkmkokukwkylbloltlvmgmhmimkmnmsmtmynanbndnenlnnnonyomplpsptqurmrorurwsesfsgsiskslsmsnsosqsrssstsvswtatgthtitktltntrukuruzvixh',
                    2
                  ).concat(
                    'ast,crs,kaa,mfe,pap,pau,pih,niu,rar,sov,sr-latn,srp,tet,tkl,tox,tpi,zgh,zh,zh-hant,zu'.split(
                      Tc
                    )
                  ),
                  x = function (t) {
                    var e,
                      p = E;
                    for (
                      t = (function (t) {
                        var e = 'gb,xk,asia_pac,asia,emea_africa,emea_europe,emea_middle_east,lamerica_nsc_carib,lamerica_nsc_cnt_amer'.split(
                            Tc
                          ),
                          p = k('ukksa_a_f_e_m_c_l_', 2),
                          r = 0;
                        for (t = _A.LC(t); r < e[L]; r++) t == e[r] && (t = p[r]);
                        return t;
                      })(t),
                        e = 0;
                      !p && e < R[L];
                      e++
                    )
                      t == R[e][0] && (p = t);
                    return p;
                  },
                  B = function (t) {
                    t = _A.LC(t);
                    for (var e = 0, p = E; !p && e < z[L]; e++) t == z[e] && (p = t);
                    return p;
                  },
                  N = function (t, e, p) {
                    return (
                      (t = x(t)),
                      (e = B(e)),
                      t &&
                        e &&
                        ((!_A.isN(p) || 1 & p) && (u = t), (!_A.isN(p) || 2 & p) && (l = e)),
                      2 == p ? e : t
                    );
                  },
                  G = function (t, r) {
                    var o = (r = _A.isS(r) && r ? r : E) || p,
                      a = o.match(/^\/*([a-z_]+)(\/|-)([a-z_]+)(\/|$)/);
                    return (
                      _A.isA(a) && a[L] > 3 && !N(a[1], a[3]) && N(a[3], a[1]),
                      u || ((a = e.match(/\.([^.]+)$/)), _A.isA(a) && a[L] > 0 && (u = x(a[1]))),
                      (a = o.match(/^\/(ams|emea|apj)-([a-z]{2})(\/|$)/)),
                      u ||
                        l ||
                        r ||
                        !o ||
                        !a ||
                        4 != a[L] ||
                        ((l = B(a[2])) &&
                          (u =
                            mapStr(
                              l,
                              'ar:eg,bg:bg,zh:cn,hr:hr,cs:cz,da:dk,nl:nl,en:us,et:ee,fi:fi,fr:fr,de:de,el:gr,he:il,hu:hu,it:it,jp:jp,ko:kr,lv:lv,lt:lt,lb:lu,no:no,pl:pl,pt:pt,ro:ro,ru:ru,sr:sr,sk:sk,sl:si,es:es,sv:se,tr:tr'
                            ) || 'us')),
                      t ? l : u
                    );
                  },
                  H = function (e) {
                    var p = E,
                      r = _A.LC(t ? E : _A.getHTMLtag('html', 'lang') || _A.getMeta(D)),
                      o = r.match(/^([a-z_]+)-([a-z_]+)$/);
                    return (
                      _A.isA(o) && 3 == o[L]
                        ? N(o[2], o[1], 0)
                          ? ((r = B(o[1])), (p = x(o[2])))
                          : N(o[1], o[2], 0) && ((r = B(o[2])), (p = x(o[1])))
                        : (r = B(r)),
                      e ? p : r
                    );
                  },
                  I = function () {
                    return x(t ? E : _A.getMeta('target_country') || _A.getMeta(_)) || H(1);
                  },
                  X = function () {
                    return G(), (u = I() || u), (l = H() || l), u;
                  },
                  Z = function (t) {
                    var e,
                      p = 0,
                      r = function (t) {
                        var e = 0;
                        if (_A.isB(t) || _A.isN(t)) e = t;
                        else if (_A.isS(t)) e = _A.iO(m, t) > -1;
                        else if (_A.isR(t)) e = m.match(t);
                        else if (_A.isF(t))
                          try {
                            e = t(m);
                          } catch (t) {
                            console.log(s, 'running match function sectionAry[' + a + ']:', t);
                          }
                        return e;
                      };
                    if (_A.isA(t)) for (e = 0; !p && e < t[L]; e++) p = r(t[e]);
                    else p = r(t);
                    return p;
                  },
                  j = function (t) {
                    var e, p, r;
                    for (e = p = 0; !p && e < _A.sectionAry[L]; e++)
                      (r = _A.sectionAry[e]),
                        Z(r[t]) && (p = r),
                        p && u && r.matchCc && u != r.matchCc && (p = 0);
                    return p;
                  },
                  J = function (t, e) {
                    var p,
                      r = E;
                    for (p = 0; !r && p < R[L]; p++)
                      t == R[p][0] && (r = e ? U[R[p][2]] : M[R[p][3]]);
                    return r;
                  },
                  Y = function (t, e, p) {
                    if (_A.isF(t))
                      try {
                        t = t(P.url, P);
                      } catch (r) {
                        console.log(s, 'evaluating', p, 'for', e, r), (t = 'function-error');
                      }
                    return t;
                  },
                  V = function (t, e, p) {
                    (t = _A.isS(t) ? t : E), (t = b + (t ? Tc + t : E));
                    p = _A.isS(u) && '??' != u ? u : E;
                    var o =
                      'AMS' == r
                        ? 'us' == p || 'ca' == p || 'pr' == p
                          ? 'na'
                          : 'la'
                        : 'APJ' == r
                        ? 'ap'
                        : 'EMEA' == r
                        ? 'emea'
                        : E;
                    return (
                      o &&
                        ((t += ',hphq' + o + (p ? ',hphq' + o + p : E)),
                        (t += e
                          ? 'us' == p
                            ? ',hphqetrstagetemp,hpcsecamsushhos,hphqnaspshopping'
                            : 'ca' == p
                            ? ',hphq' + o + p + 'hpshoppingprod'
                            : 'APJ' == r
                            ? ',hphqaponlinestore' + (p ? E : ',hpi-hphqaponlinestore')
                            : 'EMEA' == r
                            ? ',hphqemeastore'
                            : E
                          : E),
                        (t += p ? E : ',hpi-hphq' + o + ',hpi-hphq' + o + p)),
                      t
                    );
                  },
                  $ = function () {
                    var e = t ? E : _A.getMeta('platform', 'lc');
                    return 'aem' == e ? 'AEM' : 'tridion' == e ? 'Tridion' : E;
                  },
                  Q = function () {
                    var e = _A.scrubAndEsc(t ? E : _A.getMeta('store_type', 'lc'));
                    return e.search(/^[a-z]+[a-z\- ]*$/) < 0 ? E : e;
                  };
                if (
                  ((_A.sectionAry = [
                    {
                      type: 'Store',
                      subtype: 'Public',
                      platform: function () {
                        var t = X();
                        return 'Store' + _A.UC(t ? Tb + t : E) + ' ISCS';
                      },
                      country: function (t) {
                        var e = E,
                          p = 0;
                        for (t = _A.parseUri(_A.LC(t)); !e && p < q.length; p++)
                          _A.iO(t.pathname, '/' + q[p]) > -1 && (e = C[p]);
                        return e || (e = I()), e;
                      },
                      match: ['h20386.www2.hp.com', new RegExp('store.hp.com/(' + O + ')store')],
                      matchDev: [
                        /c[12]?w[0-9]*\.itcs\.(hpicorp|hp)\.(net|com)/,
                        'gslb-itg-apjstore.glb.itcs.hp.com',
                        'h20387.www2.hp.com',
                        new RegExp(
                          '(qa|hotfix|itg|test|uat|perf|test)[0-9]*.store.hp.com/(' + O + ')store'
                        ),
                      ],
                      udl: T,
                      rsid: function () {
                        return V('hphqwwiscsonlinestore', T);
                      },
                      pb: T,
                    },
                    {
                      type: 'Store',
                      subtype: function (t) {
                        try {
                          var e,
                            p = Q(),
                            r = (t = _A.parseUri(_A.LC(t))).hostname,
                            o = t.pathname,
                            a = 'originalrewards,eliteclub,smbclub,studentstore'.split(Tc);
                          p ||
                            ((p = 'Public'),
                            _A.iO(r, 'php9') < 0 &&
                              _A.iO(r, 'newap.hpstore.cc') < 0 &&
                              ('store.hp.com' == r
                                ? ((e = o.match(/^\/([^\/]+)\/([^\/]+)\/([^\/]+)/)),
                                  _A.isA(e) &&
                                    e.length > 2 &&
                                    ('epp' == e[2]
                                      ? (p = 'epp')
                                      : 'cepp' == e[2]
                                      ? ((e =
                                          e.length > 3
                                            ? _A.sU(e[3], 0, _A.iO(e[3] + Tu, Tu))
                                            : Th),
                                        (p = _A.iO(e, a) > -1 ? e : 'cepp'))
                                      : ((e =
                                          e.length > 2
                                            ? _A.sU(e[2], 0, _A.iO(e[2] + Tu, Tu))
                                            : Th),
                                        (p = _A.iO(e, a) > -1 ? e : 'public'))))
                                : _A.iO(r, 'cepp.')
                                ? _A.iO(r, 'www.') &&
                                  _A.iO(r, 'staging.') &&
                                  (p = _A.sU(r, 0, _A.iO(r, Td)))
                                : ((p = 'cepp'),
                                  0 == _A.iO(o, '/') &&
                                    o.substring(1).indexOf('/') > 0 &&
                                    ((o = _A.sU(o, 1)),
                                    (!(p = _A.sU(o, 0, (o + '/').indexOf('/'))) ||
                                      _A.iO(p, a) < 0) &&
                                      (p = 'cepp')))),
                            'cepp-store' == p && (p = 'cepp'));
                        } catch (t) {
                          p = 'public';
                        }
                        return p;
                      },
                      platform: function () {
                        var t = X();
                        return 'Store' + _A.UC(t ? ' ' + t : E) + ' Magento';
                      },
                      match: [
                        'store.hp.com/au-en',
                        'store.hp.com/cn-zh',
                        'www.hpstore.cn',
                        'smbclub.hpstore.cn',
                        'store.hp.com/hk-en',
                        'store.hp.com/hk-zh',
                        'hpshopping.hk',
                        'store.hp.com/id-en',
                        'store.hp.com/id-id',
                        'hpshopping.id',
                        'store.hp.com/in-en',
                        'hpshopping.in',
                        'store.hp.com/kr-ko',
                        'store.hp.com/my-en',
                        'store.hp.com/sg-en',
                        'store.hp.com/th-th',
                        'store.hp.com/th-en',
                        'hpstorethailand.com',
                        'store.hp.com/ar-es',
                        'store.hp.com/br-pt',
                        'store.hp.com/cl-es',
                        'store.hp.com/co-es',
                        'store.hp.com/mx-es',
                        'store.hp.com/pe-es',
                      ],
                      matchDev: [
                        /\.php9\.cc/,
                        /(dev|upgrade|staging)\.hp(store|shopping)[a-z]*\.[a-z]+/,
                        /store\.hp\.com\/[^\/]+\/hp_ols_admin([\/?%&#: ]+|$)/,
                        /test\.newap\.hpstore\.cc\/[a-z]{2}-[a-z]{2}\//,
                        /cn\.newap\.hpstore\.cc\//,
                      ],
                      udl: T,
                      rsid: function () {
                        return V(E, T);
                      },
                      pb: function (t) {
                        return t.indexOf('hpstore.cn') < 0;
                      },
                    },
                    {
                      type: 'Store',
                      subtype: 'Public',
                      platform: 'Store NZ Acquire',
                      match: 'hpshopping.co.nz',
                      pb: F,
                    },
                    {
                      type: 'Store',
                      subtype: 'Public',
                      platform: 'Store JA Direct+',
                      match: /(h20547|h50146)\.www2\.hp\.com/,
                      pb: F,
                    },
                    {
                      type: 'Store',
                      subtype: 'Public',
                      platform: function () {
                        var t = X();
                        return 'Store' + _A.UC(t ? ' ' + t : E) + ' Lineo';
                      },
                      match: /www\.hponline(\.cl|\.com\.(mx|co|ar)|store\.com\.pe)/,
                      matchDev: ['hp.linio-staging.com', 'hp.linio-development.com'],
                      udl: T,
                      rsid: function () {
                        return V(E, T);
                      },
                      pb: F,
                    },
                    {
                      type: 'Store',
                      subtype: 'Public',
                      platform: 'Store BR ViaVarejo',
                      match: 'lojahp.com.br',
                      country: 'br',
                      language: 'pt',
                      udl: T,
                      rsid: function () {
                        return V(E, T);
                      },
                      pb: F,
                    },
                    {
                      type: 'Store',
                      subtype: 'Public',
                      platform: 'Store De Pacheco LTD',
                      match: 'hp-rus.com',
                      pb: F,
                    },
                    {
                      type: 'Store',
                      subtype: 'Services',
                      platform: 'GenesisGSS',
                      match: 'essc-web-pro.houston.hp.com/gss/',
                      matchDev: [
                        /(qa|hotfix|itg|test|uat|perf|test)[0-9]*\.store\.hp\.com\/gss\//,
                        /essc-web-(dev|itg)[12]?\.(houston|austin|genuitga)\.hp\.com\/gss\//,
                      ],
                      pb: F,
                    },
                    {
                      type: 'Store',
                      subtype: function () {
                        return Q() || 'Public';
                      },
                      platform: function () {
                        return (
                          'Store US ' +
                          (w() || (e + p).match(/store\.hp\.com\/app\//) ? 'UDL' : 'ETR')
                        );
                      },
                      match: /store\.hp\.com\/(us|app|webapp)\//,
                      matchDev: [
                        /(qa|hotfix|itg|test|uat|perf|test)[0-9]*\.store/,
                        /(genuiitga|essc-web-(dev|itg)[0-9]*)\.(houston|austin)\.hp\.com/,
                      ],
                      udl: function () {
                        return w() || !!(e + p).match(/store\.hp\.com\/app\//);
                      },
                      rsid: function () {
                        return V(E, T, T);
                      },
                      rsidDev: 'hphqetr1dev1,hphqatlasdev1',
                      pb: T,
                    },
                    {
                      type: 'HPID',
                      subtype: 'myaccount',
                      platform: 'HPID',
                      match: ['consent.id.hp.com', 'myccount.id.hp.com'],
                      matchDev: /ppc\.(dev|qa|stg)\.cd\.id\.hp(cwp|)\.com/,
                      udl: T,
                      rsid: b + ',hpid',
                      pb: T,
                    },
                    {
                      type: _A.sectionRef ? _A.sectionRef.type : 'HPID',
                      subtype: _A.sectionRef ? _A.sectionRef.subtype : 'login',
                      platform: 'HPID',
                      country: I() || (_A.sectionRef ? _A.sectionRef.country : 'us'),
                      language: H() || (_A.sectionRef ? _A.sectionRef.language : 'en'),
                      region: J(I() || (_A.sectionRef ? _A.sectionRef.country : 'us')),
                      market: J(I() || (_A.sectionRef ? _A.sectionRef.country : 'us'), 1),
                      match: /login\d*\.id\.hp\.com/,
                      matchDev: /login\d*\.(id|dev|qa|stg)\.cd\.id\.hp\.com\/.*/,
                      udl: T,
                      rsid: (_A.sectionRef ? _A.sectionRef.rsid : b) + ',hpid',
                      pb: F,
                    },
                    {
                      type: 'Support',
                      subtype: 'Genesis',
                      platform: 'Support GenesisGSS',
                      match: 'h20212-3.www2.hp.com',
                      matchDev: 'g1w9260g-3.austin.hpicorp.net',
                      rsid: b,
                      pb: F,
                    },
                    {
                      type: 'Support',
                      subtype: 'HPSC',
                      platform: 'Support HPSC',
                      match: 'www2.hp.com/hpsc',
                      pb: F,
                    },
                    {
                      type: 'Support',
                      subtype: 'ProdReg',
                      platform: 'Support ProdReg',
                      country: function (t) {
                        return x(_A.parseParam('cc', t) || '');
                      },
                      language: function (t) {
                        return x(_A.parseParam('lang', t) || '');
                      },
                      match: 'register.hp.com',
                      pb: T,
                    },
                    {
                      type: 'Support',
                      subtype: 'PartSurfer',
                      platform: 'Support PartSurfer',
                      match: 'partsurfer.hp.com',
                      pb: T,
                    },
                    {
                      type: 'Support',
                      subtype: 'Parts',
                      platform: 'Support Parts',
                      match: 'parts.hp.com',
                      pb: T,
                    },
                    {
                      type: 'Support',
                      subtype: 'Community',
                      platform: 'Support Community',
                      match: /h304(34|67)\.www3\.hp\.com/,
                      udl: T,
                      rsid: b + ',hpcsglobal,hphq-ces-global,hphq-ces-csf-global',
                      pb: T,
                    },
                    {
                      type: 'Support',
                      subtype: 'Lit',
                      platform: 'Support LitServer',
                      match: 'h20195.www2.hp.com',
                      pb: F,
                    },
                    {
                      type: 'Support',
                      platform: 'Support Main',
                      match: 'support.hp.com',
                      matchDev: /((uat|itgqa|hotfix|itg|test|uat|perf|test)[0-9]*\.support)\.hp\.com/,
                      pb: T,
                    },
                    {
                      type: 'Print',
                      subtype: 'Tektonika',
                      platform: 'Print Tektonika',
                      match: [
                        /(www\.|)tektonikamag\./,
                        /www8\.hp\.com\/([a-z_]+\/[a-z]{2}\/tektonika|de\/de\/businessnow)/,
                      ],
                      matchDev: [
                        /hp-[^\/.]*\.pxpqa\.com/,
                        /(stg|itg-live)\.www8\.hp\.com\/([a-z_]+\/[a-z]{2}\/tektonika|de\/de\/businessnow)/,
                      ],
                      udl: T,
                      rsid: b + ',hphqtektonika',
                      pb: T,
                    },
                    {
                      type: 'Print',
                      subtype: 'Compass',
                      platform: 'Support FSC',
                      match: 'futuresmartcompass.ext.hp.com',
                      matchDev: [
                        'stg-futuresmartcompass.ext.hp.com',
                        'futuresmartcompass.ext.hp.com.s3-website-us-west-2.amazonaws.com',
                      ],
                      pb: T,
                    },
                    {
                      type: 'Print',
                      subtype: 'JA-GSC',
                      platform: 'Print GSC',
                      match: /(hp|)gsc\.ext\.hp\.com/,
                      matchDev: /hpgsc.*centralus\.cloudapp\.azure\.com/,
                      udl: T,
                      rsid: b,
                      pb: F,
                    },
                    {
                      type: 'Print',
                      subtype: 'JA-AC',
                      platform: 'Print Apps Catalog',
                      matchDev: 'hpgscstgappcatalog.westus.cloudapp.azure.com',
                      udl: T,
                      rsid: b,
                      pb: T,
                    },
                    {
                      type: 'Print',
                      subtype: 'CarePack',
                      platform: 'Print CPC',
                      match: 'cpc.ext.hp.com',
                      pb: F,
                    },
                    {
                      type: 'Print',
                      subtype: 'SS',
                      platform: 'Print SureSupply',
                      match: 'h22203.www2.hp.com/suresupply',
                      pb: F,
                    },
                    {
                      type: 'Print',
                      subtype: 'Software',
                      platform: 'Print 123',
                      match: '123.hp.com',
                      matchDev: /123-(dev|stage|test)\.hpoobe\.com/,
                      udl: T,
                      rsid: function () {
                        return V('hpcsepc2main', F, T);
                      },
                      pb: F,
                    },
                    {
                      type: 'Print',
                      subtype: 'Printables',
                      platform: 'Print Printables',
                      match: 'printables.hp.com',
                      matchDev: /printables-(dev|uat|stg|itg)\.hp\.com/,
                      udl: T,
                      rsid: b + ',hphqprintables',
                      pb: T,
                    },
                    {
                      type: 'Print',
                      subtype: 'Printplans',
                      platform: 'Print Printplans',
                      match: /(instantink|printplans).hpconnected.com\/\/[a-z_]+\/[a-z]{2}\/(l|n)\/v2/,
                      matchDev: /(instantink|printplans|gemini)-(pie|stage)[0-9]*\.hpconnected(pie|stage)\.com\/[a-z_]+\/[a-z]{2}\/(l|n)\/v2/,
                      udl: T,
                      adobe: T,
                      rsid: b + ',hphcsprintplans',
                      pb: T,
                    },
                    {
                      type: 'Print',
                      subtype: 'II',
                      platform: 'Print InstantInk',
                      match: 'instantink.hpconnected.com',
                      matchDev: /(instantink|gemini)-(pie|stage)[0-9]*\.hpconnected(pie|stage)\.com/,
                      udl: T,
                      adobe: F,
                      pb: F,
                    },
                    {
                      type: 'Print',
                      subtype: 'Setup',
                      platform: 'Print OOBE',
                      match: 'oss.hpconnected.com',
                      matchDev: /oss\.hpconnected(stage|pie|test)\.com/,
                      udl: T,
                      adobe: T,
                      rsid: b + ',hphqowssetup',
                      pb: F,
                    },
                    {
                      type: 'Print',
                      subtype: 'HPC',
                      platform: 'Print HPconnected',
                      match: 'hpconnected.com',
                      matchDev: /hpconnected(stage|pie|test)\.com/,
                      udl: T,
                      adobe: F,
                      pb: F,
                    },
                    {
                      type: 'Print',
                      subtype: 'Softfax',
                      platform: 'Print Softfax',
                      match: 'sws.hp8.us',
                      matchDev: /sws\.(dev|pie|stage)\.hp8\.us/,
                      country: function () {
                        return G(0, W.softfaxWebLocale) || I() || 'us';
                      },
                      language: function () {
                        return x(G(1, W.softfaxWebLocale)) || H() || 'en';
                      },
                      udl: T,
                      rsid: b,
                      pb: F,
                    },
                    {
                      type: 'Print',
                      subtype: 'HPS',
                      platform: 'Print HPsmart',
                      match: 'hpsmart.com',
                      matchDev: [/hpsmart(dev|pie|stage)\.com/, /10\.0\.2\.2\/.*\/ucde\//],
                      udl: T,
                      adobe: F,
                      pb: T,
                    },
                    {
                      type: 'Print',
                      subtype: 'PrintOS',
                      platform: 'Print PrintOS',
                      match: 'printos.com',
                      strict: T,
                      pb: F,
                    },
                    {
                      type: 'B2B',
                      subtype: 'Elite',
                      platform: 'B2B Elite',
                      match: ['h20143.www2.hp.com', 'b2b.hp.com'],
                      pb: F,
                    },
                    {
                      type: 'B2B',
                      subtype: 'HP2B',
                      platform: 'HP2B Portal',
                      match: 'hp2b.hp.com',
                      pb: F,
                    },
                    {
                      type: 'B2B',
                      subtype: 'DaaS-APM',
                      platform: 'B2B DaaS-APM',
                      match: 'hpdaas.com',
                      matchDev: [
                        'stable.lightaria.com',
                        'usstagingms.hpdaas.com',
                        'usdevms.daas.hppipeline.com',
                        'eustagingms.hpdaas.com',
                        'infogain.lightaria.com',
                      ],
                      strict: T,
                      rsid: b + ',hphqtouchpoint',
                      rsidDev: 'hphqtouchpointdev',
                      pb: F,
                    },
                    {
                      type: 'B2B',
                      subtype: 'Workflows',
                      platform: 'B2B DaaS-APM',
                      match: 'hpworkflows.com',
                      matchDev: ['staging.hpworkflows.com', 'stable.hpworkflows.com'],
                      strict: T,
                      rsid: b,
                      rsidDev: f,
                      pb: F,
                    },
                    {
                      type: 'Partner',
                      subtype: 'Portal',
                      platform: 'Partner Portal',
                      match: ['partner.hp.com', 'passport.hp.com'],
                      pb: F,
                    },
                    {
                      type: 'Partner',
                      subtype: 'CSN',
                      platform: 'Partner CSN',
                      match: 'h30125.www3.hp.com',
                      pb: T,
                    },
                    {
                      type: 'Partner',
                      subtype: 'HPBC',
                      platform: 'Partner HPBC',
                      match: 'hpbusinesscentral.com',
                      matchDev: ['hpibc.hubub.com', 'hpi-bc-dev-web.hpsalescentral.com'],
                      udl: T,
                      country: function () {
                        return G(0, W.hp_country_language) || I() || 'us';
                      },
                      language: function () {
                        return x(G(1, W.hp_country_language)) || H() || 'en';
                      },
                      rsid: b + ',hphqhpbc',
                      rsidDev: f + ',hphqhpbcdev',
                      pb: F,
                    },
                    {
                      type: 'Partner',
                      subtype: 'HPSC',
                      platform: 'Partner SalesCentral',
                      match: [
                        'hpsalescentral.com',
                        'h30248.www3.hp.com/my-sales-guide',
                        'sales.hpcontent.com',
                      ],
                      matchDev: [
                        'cwd.pmxagency.com',
                        /.*dev.*hpsalescentral\.(com|net)/,
                        'hpisc.hubub.com',
                        /staging.*hpsalescentral.com/,
                        /.*wirestone\.net/,
                      ],
                      udl: T,
                      country: function () {
                        return G(0, W.hp_country_language) || I() || 'us';
                      },
                      language: function () {
                        return x(G(1, W.hp_country_language)) || H() || 'en';
                      },
                      rsid: b + ',hphqhpsc',
                      rsidDev: f + ',hphqhpscdev',
                      pb: T,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'main',
                      platform: 'WWMkt',
                      match: /www8\.hp\.com\/[^\/]+\/[^\/]+\/contact-hp\/how-to-buy/,
                      rsid: function () {
                        return V(E);
                      },
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'Contact',
                      platform: 'WWMkt',
                      match: /www8\.hp\.com\/[^\/]+\/[^\/]+\/contact-hp/,
                      rsid: function () {
                        return V(E);
                      },
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'Career',
                      platform: 'About',
                      match: ['h30631.www3.hp.com', /www8\.hp\.com\/[a-z_]+\/[a-z]{2}\/jobs/],
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'Investor',
                      platform: 'About Inverstor Relations',
                      match: ['h30261.www3.hp.com', 'investor.hp.com'],
                      matchDev: 'hp2018ir.q4web.com',
                      udl: function () {
                        return (
                          _A.iO(i.href, 'investor.hp.com') > -1 ||
                          _A.iO(i.href, 'hp2018ir.q4web.com') > -1 ||
                          F
                        );
                      },
                      pb: F,
                    },
                    {
                      type: 'About',
                      subtype: 'Sustain',
                      platform: 'About Sustainable',
                      match: /www8\.hp\.com\/[a-z_]+\/[a-z]{2}\/hp-information\/global-citizenship/,
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'TakeBack',
                      platform: 'Take Back',
                      match: 'inktoner-recycle.ext.hp.com',
                      matchDev: '-inktoner-recycle.ext.hp.com',
                      udl: T,
                      rsid: b + ',hphqtakeback',
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'Press',
                      platform: 'About Press Center',
                      match: 'press.ext.hp.com',
                      matchDev: 'stg-press.ext.hp.com',
                      udl: T,
                      rsid: function () {
                        return V('hphqnrb');
                      },
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'Press',
                      platform: 'About Press Center AEM',
                      match: 'press.hp.com',
                      matchDev: 'press-pro.hp.com',
                      udl: T,
                      rsid: function () {
                        return V('hphqnrb');
                      },
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'Garage',
                      platform: 'About Garage',
                      match: 'garage.ext.hp.com',
                      matchDev: 'stg-garage.ext.hp.com',
                      udl: T,
                      rsid: function () {
                        return V(E);
                      },
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'Garage',
                      platform: 'About Garage AEM',
                      match: 'garage.hp.com',
                      matchDev: 'garage-pro.hp.com',
                      udl: T,
                      rsid: function () {
                        return V(E);
                      },
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'NRblog',
                      platform: 'About Newsroom',
                      match: 'newsblog.ext.hp.com',
                      matchDev: 'stg-newsblog.ext.hp.com',
                      udl: T,
                      rsid: function () {
                        return V('hphqnrb');
                      },
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'Access',
                      platform: 'About Accessibility',
                      match: /www8\.hp\.com\/[a-z_]+\/[a-z]{2}\/hp-information\/accessibility/,
                      udl: F,
                      pb: T,
                    },
                    {
                      type: 'About',
                      subtype: 'Access ARM',
                      platform: 'About ARM',
                      match: 'accessibilityreporting.usa.hp.com',
                      matchDev: [
                        'accessibilityreportingitg.itcs.hp.com',
                        'accessibilityreporting.itg.hpicorp.net',
                      ],
                      udl: T,
                      rsid: function () {
                        return V('hphqnrb');
                      },
                      pb: T,
                    },
                    {
                      type: 'PubSector',
                      subtype: 'Gov',
                      platform: 'PublicSec Government',
                      match: 'government.hp.com',
                      pb: F,
                    },
                    {
                      type: 'PubSector',
                      subtype: 'Gov',
                      platform: 'PublicSec Compaq',
                      match: 'compaq.com',
                      pb: F,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'FitStation',
                      platform: 'WWMkt FitStation',
                      matchDev: /hp-ui-fitstation-dev\..*amazonaws\.com/,
                      match: 'hpfitstation.com',
                      pb: F,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'HMC',
                      platform: 'WWMkt HMC',
                      match: 'helpmechoose.ext.hp.com',
                      pb: F,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'Campaign',
                      platform: 'WWMkt Campaigns AEM',
                      match: 'campaigns.ext.hp.com',
                      matchDev: 'stg-campaigns.ext.hp.com',
                      udl: T,
                      rsid: function () {
                        return V(E);
                      },
                      pb: F,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'QR',
                      platform: 'QR',
                      match: ['qrq.itcs.hp.com', 'qr.inc.hp.com'],
                      matchDev: ['qrx.itcs.hp.com', 'dev-qrcode.hubub.com'],
                      country: function (t) {
                        return x(_A.parseUri(t).args.cc) || I() || 'us';
                      },
                      language: function (t) {
                        return B(_A.parseUri(t).args.ll) || H() || 'en';
                      },
                      udl: T,
                      rsid: function () {
                        return V('hphqqr');
                      },
                      rsidDev: 'hqhqglobaldev,hphqqrdev',
                      pb: F,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'FindReseller',
                      platform: 'WWMkt Metalocator',
                      country: function (t) {
                        return G() || I() || 'us';
                      },
                      language: function (t) {
                        return G(1) || H() || 'en';
                      },
                      match: 'locator.itcs.hp.com',
                      matchDev: ['staging.locator.itcs.hp.com', 'admin.metalocator.com'],
                      pb: F,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'ABM-HHO',
                      platform: 'WWMkt ABM Eloqua',
                      country: 'us',
                      language: 'en',
                      match: 'enable.hp.com/smb_',
                      udl: T,
                      rsid: function () {
                        return V(E);
                      },
                      pb: F,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'Landing',
                      platform: 'WWMkt Promos Eloqua',
                      match: 'enable.hp.com',
                      udl: T,
                      rsid: function () {
                        return V(E);
                      },
                      pb: F,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'Reinvent',
                      platform: 'WWMkt Eloqua',
                      match: 'reinvent.hp.com',
                      udl: T,
                      rsid: function () {
                        return V(E);
                      },
                      pb: T,
                    },
                    {
                      type: 'Test',
                      subtype: 'Main',
                      platform: 'hpi-patsrv1.boi.rd.hpicorp.net',
                      matchDev: 'hpi-patsrv1.boi.rd.hpicorp.net',
                      udl: T,
                      rsid: 'hqhqglobaldev',
                      pb: F,
                    },
                    {
                      type: 'Omen',
                      subtype: 'Main',
                      platform: 'WWMkt Omen',
                      match: ['omen.com', 'omen.gg'],
                      matchDev: [
                        'omen-pro.hp.com',
                        'author-dev.hp.com/content/hp-omen',
                        'www-pro.omen.com',
                      ],
                      udl: T,
                      rsid: function () {
                        return V('hphqomen');
                      },
                      pb: T,
                    },
                    {
                      type: 'Marketing',
                      subtype: 'Digitalprinting',
                      platform: 'Print AEM',
                      match: 'digitalprinting.hp.com',
                      matchDev: [
                        /possibility-city-[a-z]+\.hp\.com/,
                        /author-[a-z]+\.hp\.com\/[a-z]+\/possibility-city\//,
                      ],
                      rsid: b + ',hphqdigitalprinting',
                      udl: T,
                      pb: T,
                    },
                    {
                      type: 'Marketing',
                      subtype: function (e) {
                        return _A.iO(t ? E : _A.getMeta('analytics_section', 'lc'), 'catalog') &&
                          _A.iO(t ? E : _A.getMeta('simple_title', 'lc'), 'catalog')
                          ? 'main'
                          : 'catalog';
                      },
                      platform: function (t) {
                        return 'WWMkt' + ($() ? ' ' + $() : E);
                      },
                      match: /(www[2345678]?|m|ext|welcome|jp)\.hp\.com/,
                      matchDev: [
                        /((houston|austin)\.hp\.com|hpicorp\.net)/,
                        /author-hp-sites-[^/]*.adobecqms.net/,
                        'itg-live.www8.hp.com',
                        'author-aem.ext.hp.com',
                        /(author|publish)-(pro|stage)\.hp\.com/,
                        'hp-ui-homepage.s3.amazonaws.com',
                        '52.15.218.35',
                        'c4t30883.itcs.hp.com',
                        'pdp.glb1.hp.com',
                        'stg.www8.hp.com',
                        'origin.www8.hp.com',
                      ],
                      udl: w(),
                      rsid: function () {
                        return V(E);
                      },
                      pb: T,
                    },
                    {
                      type: 'Intranet',
                      subtype: 'BrandExp',
                      platform: 'BrandExperience',
                      match: [
                        'h10014.www1.hp.com/hpweb/experience',
                        function (t) {
                          return (
                            _A.iO(
                              t,
                              'h10014.www1.hp.com/hpweb/login.aspx?attempturl=%2fhpweb%2fexperience%2findex.aspx'
                            ) > -1
                          );
                        },
                        'brandcentral.int.hp.com/',
                      ],
                      matchDev: 'dev.brandcentral.int.hp.com',
                      pb: F,
                    },
                    {
                      type: 'Test',
                      subtype: 'Main',
                      platform: function (t) {
                        return _A.parseUri(t).hostname;
                      },
                      matchDev: [
                        'leventeopelczhp.bitbucket.io',
                        'webtransformer.com',
                        'hpi-patsrv1.boi.rd.hpicorp.net',
                        function (t) {
                          return !!_A
                            .parseUri(t)
                            .hostname.match(
                              /(^|[^a-zA-Z]+)(dev|itg|localhost|staging|stage|stg|test)([^a-zA-Z]+|$)/
                            );
                        },
                      ],
                      udl: T,
                      rsid: 'hqhqglobaldev',
                      pb: F,
                    },
                  ]),
                  (t != Dlu && t != Dlu.replace(/[#?].*/, E)) || (t = UN),
                  t && ((h = (i = _A.parseUri((m = t))).hostname), (m = i.href)),
                  (P.url = m),
                  (m = _A.LC(m.replace(/[#?].*/, E))),
                  (p = _A.iO(m, '//') > -1 ? _A.sU(m, _A.iO(m, '//') + 2) : m),
                  (p = _A.iO(p, '/') > -1 ? _A.sU(p, _A.iO(p, '/')) : E),
                  (e = _A.LC(h)),
                  _A.isA(_A.domainList) ||
                    (function () {
                      try {
                        var t,
                          e = function (t) {
                            if (_A.isA(t)) for (var p = 0; p < t.length; p++) e(t[p]);
                            _A.isS(t) && (t = t.replace(/\/.*/, E)),
                              (!_A.isS(t) && !_A.isR(t)) ||
                                (function (t) {
                                  for (var e = 0; e < _A.domainList.length; e++)
                                    if (t == _A.domainList[e]) return T;
                                  return F;
                                })(t) ||
                                _A.domainList.push(t);
                          };
                        if (((_A.domainList = []), _A.isA(_A.sectionAry)))
                          for (t = 0; t < _A.sectionAry.length; t++) e(_A.sectionAry[t].match);
                      } catch (t) {
                        console.log('_A buildDomainList ERROR', t);
                      }
                    })(),
                  X(),
                  (o = j(A)),
                  (P.dev = !!o || _A.iO(m, '//localhost') > -1),
                  o || (o = j(g)),
                  o)
                )
                  for (a in o)
                    a == A || a == g
                      ? (P[g] = P.dev ? Y(o[A], o, A) : Y(o[g], o, g))
                      : S(a) || (P[a] = Y(o[a], o, a));
                else
                  (P.subtype = _A.getShortHn(P.url)),
                    -1 == _A.iO(P.subtype, 'hp.com') &&
                      ((P.subtype = _A.getOwnerHn(P.url)), (P.nonHP = T)),
                    (P.strict = T),
                    (P.pb = T);
                if (
                  ((P[_] = u = (o ? Y(o[_], o, _) : E) || u || 'us'),
                  (P[D] = l = (o ? Y(o[D], o, D) : E) || l || 'en'),
                  (P.region = r = J(u) || 'AMS'),
                  (P.market = J(u, 1) || 'NA'),
                  (P.currency =
                    (function () {
                      var t,
                        e = E;
                      for (t = 0; !e && t < R[L]; t++) u == R[t][0] && (e = R[t][1]);
                      return e;
                    })() || E),
                  o && (o.rsid && (P.rsid = Y(o.rsid, o, d)), o[y] && (P[y] = Y(o[y], o, y))),
                  (n = _A.parseParam('enableUDL', P.url)) &&
                    (_A.isS(n) && (n = _A.LC(n)),
                    'true' == n && (n = T),
                    'false' == n && (n = F),
                    (P.udl = !!n)),
                  w() && (P.udl = T),
                  P.udl && (P.rsid || (P.rsid = V(E)), P.rsidDev || (P.rsidDev = 'hqhqglobaldev')),
                  !t)
                )
                  for (a in (_A.isO(c.section) || (c.section = {}), P)) c.section[a] = P[a];
                return P;
              }),
                (_A.onHP = function (t) {
                  var e = t || !_A.isO(_A.section) ? _A.getSiteSection(t) : _A.section;
                  return !('Non-HP' == e.type || e.nonHP);
                }),
                _A.getSiteSection();
              var t = 'secRef',
                e = D.referrer,
                p = e ? _A.parseUri(e) : 0,
                r = _A.sG(t);
              (p = (e = p && p.hostname != Dlh ? e : r) ? _A.parseUri(e) : 0) &&
                p.hostname != Dlh &&
                ((_A.sectionRef = _A.getSiteSection(e)), _A.sS(t, e));
            }
            var o = '??',
              a = 'de,es,fr,nl,gb,uk',
              n =
                a + ',at,be,bg,cy,cz,dk,ee,fi,gr,hr,hu,ie,it,lt,lu,lv,mt,po,pt,ro,se,si,sk,ch,us',
              c = a + ',da,el,en,et,fi,hr,hu,it,lv,no,pl,pt,ro,sk,sl,sv',
              s = [];
            _A.isF(_A.optOut) ||
              (_A.optOut = function () {
                var t,
                  e,
                  p,
                  r,
                  a,
                  i,
                  h,
                  m,
                  u,
                  l,
                  b,
                  f = arguments,
                  g = [1, 0, 0, 0],
                  A = [1, 1, 1, 1],
                  d = F,
                  y = T,
                  _ = [0, 0, 0],
                  D = E,
                  v = E,
                  S = ['PERSONALISATION', 'PERFORMANCE & ANALYTICS', 'REMARKETING'];
                if (Dlh.indexOf('hpe.com') > -1 || Dlh.indexOf('hpecorp.net') > -1)
                  console.log('ERROR: HPE page attempting to launch HP tag'), (d = T);
                else {
                  for (m in f)
                    'personalise' == (u = f[m]) || 'personalize' == u || 1 === u
                      ? ((y = 0), (_[0] = 1))
                      : 'analytics' == u || 2 == u
                      ? ((y = 0), (_[1] = 1))
                      : 'remarket' == u || 3 == u
                      ? ((y = 0), (_[2] = 1))
                      : _A.isS(u)
                      ? 's' == u
                        ? (b = T)
                        : 'l' == u
                        ? (b = F)
                        : 0 == u.indexOf('http')
                        ? (e = u)
                        : (D = u)
                      : (_A.isB(u) || -1 == u) && (l = T);
                  if (
                    (y && (_[0] = _[1] = _[2] = 1),
                    (p =
                      (t = _A.isO(_A.section) && !e ? _A.section : _A.getSiteSection(e)).country ||
                      o),
                    (r = t.language || o),
                    ('us' != p && 'pr' != p && p != o) || (S[0] = 'PERSONALIZATION'),
                    (b = t.pb),
                    (a = t.dev
                      ? A
                      : t.type == K
                      ? g
                      : b
                      ? p && p != o
                        ? n.indexOf(p) > -1
                          ? g
                          : (r == o || !r) && c.indexOf(r) > -1
                          ? g
                          : A
                        : g
                      : ',at,be,bg,hr,cy,cz,dk,ee,fi,fr,de,gr,hu,ie,it,lv,lt,lu,mt,nl,pl,pt,ro,sk,si,es,se'.indexOf(
                          p
                        ) > -1
                      ? g
                      : A),
                    (function () {
                      try {
                        var t,
                          e = _A.cR('OptanonAlertBoxClosed') ? T1 : T0,
                          p = unescape(_A.cR('OptanonConsent')).match(/groups=([^&]*)/),
                          r = 1;
                        for (
                          h = [p ? e : Tq, Tq, Tq, Tq],
                            p = _A.isA(p) && p[L] > 1 ? Tc + p[1] + Tc : E;
                          r < 4;
                          r++
                        )
                          p || (h[r] = Tq),
                            (t = p.match(new RegExp(Tc + (r + 1) + ':([01]),'))),
                            _A.isA(t) && t[L] > 1 && (h[r] = t[1]);
                      } catch (t) {
                        h[1] = h[2] = h[3] = Th;
                      }
                    })(),
                    (i = h[0] == Tq ? a : h),
                    'cn' == p && ((i[3] = 'C'), (S[2] += ' (CHINA)')),
                    !l &&
                      (i[2] != T1 && _[0] && ((d = T), (v += (v ? ', ' : E) + S[0])),
                      i[1] != T1 && _[1] && ((d = T), (v += (v ? ', ' : E) + S[1])),
                      i[3] != T1 && _[2] && ((d = T), (v += (v ? ', ' : E) + S[2])),
                      d && !l))
                  ) {
                    for (
                      v = 'OPT-OUT SUPPRESS' + (v ? ' - ' + v : E) + (D ? ' - ' + D : E),
                        m = 0,
                        u = T;
                      u && m < s[L];
                      m++
                    )
                      u = s[m] != v;
                    u && (s[L] < 100 && s.push(v), console.log(v));
                  }
                }
                return l ? h.join(E) : d;
              }),
              _A.isF(_A.oiGL) ||
                (_A.oiGL = function (t) {
                  return _A.isO(W._P) && _A.isF(_P.ifGL)
                    ? _P.ifGL(t)
                    : _A.cR('OptanonAlertBoxClosed')
                    ? T
                    : !_A.section.pb;
                });
          })();
        })();
      },
      3375270,
      371978
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function compatibilityModeClosure () {
          if (window._A && _A.constructor == Object && _A.isO(window._A.section))
            try {
              var LP = 'GA360 Processor',
                W = window,
                D = document,
                T = true,
                F = false,
                UN = 'unknown',
                DL = 'dataLayer',
                UDLcontainerID = 'GTM-MZXB4R4',
                ISCScontainerID = 'GTM-MHDHCK7',
                UDLcontainerLoaded = F,
                ISCScontainerLoaded = F;
              console.log(LP, '20.04.15a');
              if (!W._A || W._A.constructor != Object) {
                console.log(LP, 'ERROR: window._A object undefined');
                return;
              }
              var loadGTMcontainer = function (GTMid) {
                  if (typeof GTMid != 'string') {
                    console.log('loadGTMcontainer ERROR: GTMid not a string', GTMid);
                    _A.getStackTrace('GTMid not a string');
                  }
                  var gtmSnippet =
                    '(function(w,d,s,l,i){' +
                    'w[l]=w[l]||[];' +
                    "w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});" +
                    'var ' +
                    'f=d.getElementsByTagName(s)[0],' +
                    'j=d.createElement(s),' +
                    "dl=l!='dataLayer'?'&l='+l:'';" +
                    'j.async=true;' +
                    "j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;" +
                    'f.parentNode.insertBefore(j,f);' +
                    "})(window,document,'script','" +
                    DL +
                    "','" +
                    GTMid +
                    "');" +
                    "console.log('" +
                    LP +
                    ' added GTM container tag ' +
                    GTMid +
                    "');";
                  if (D.body) {
                    var script = D.createElement('script');
                    script.innerHTML = gtmSnippet;
                    D.body.appendChild(script);
                  } else console.log(LP, 'ERROR loading GTM, body undefined');
                },
                loadUDLcontainer = function () {
                  _A.logDebug(LP, 'loading WW GTM container');
                  loadGTMcontainer(UDLcontainerID);
                },
                loadISCScontainer = function () {
                  _A.logDebug(LP, 'loading EMEA GTM container');
                  loadGTMcontainer(ISCScontainerID);
                },
                loadUDLcontainerIfNeeded = function () {
                  _A.logDebug(LP, 'loadUDLcontainerIfNeeded');
                  if (_A.optOut('Google Analytics', 2) && _A.isF(_A.optInCallback))
                    _A.optInCallback(null, loadUDLcontainerIfNeeded);
                  else if (!UDLcontainerLoaded) {
                    UDLcontainerLoaded = T;
                    if (D.body) loadUDLcontainer();
                    else if (_A.isF(W.addEventListener))
                      W.addEventListener('load', loadUDLcontainer);
                    else if (_A.isF(W.attachEvent)) W.attachEvent('onload', loadUDLcontainer);
                  }
                },
                loadISCScontainerIfNeeded = function () {
                  if (!ISCScontainerLoaded) {
                    ISCScontainerLoaded = T;
                    if (D.body) loadISCScontainer();
                    else if (_A.isF(W.addEventListener))
                      W.addEventListener('load', loadISCScontainer);
                    else if (_A.isF(W.attachEvent)) W.attachEvent('onload', loadISCScontainer);
                  }
                },
                mapCatCodes = function (code) {
                  var n,
                    cats = {
                      'Accessories/3PP': '8w',
                      'Accessories/Camera': 'kn',
                      'Accessories/Desktop Accy': '2h,9f,9h',
                      'Accessories/IPG Accy': '2a,65,6a,gt,tx',
                      'Accessories/Notebook Accy': '8n,9g,ff,mp',
                      'Carepack/IPG ESP': '2d,64,7b,r4,r6,uw',
                      'Carepack/PSG ESP': '9r,cy,mn',
                      'Desktops/Desktop-Commercial': '2c,5u,5x,7f,dg,ga,gu',
                      'Desktops/Desktop-Consumer': '1m,6j,6v',
                      'Monitor/Monitor': '1u,2g,bo,tb,ut',
                      'Notebooks/Notebook-Commercial': '6u,8j,an,g7,ta,uv',
                      'Notebooks/Notebook-Consumer': '2f,2t,kv',
                      'Others/EG':
                        '1x,1y,35,3c,3p,3v,4q,4u,6h,72,7a,7g,96,da,ha,i5,j3,k3,la,li,ll,mv,r8,sh,si,sy,tn,uz',
                      'Others/GiftCard': '00',
                      'Others/IPG Other': '30,4x,5i,k2,kp,t4,tw',
                      'Others/PSG Other': '21,52,67,7s,9j,fh,kx,mg,p1,p3,r7,td,up,us',
                      'Others/TV': 'me',
                      'Others/WebOS': 'p2',
                      'Printers/Inkjet Printer': '2n,3y,4h,5m,7t,83,c2,dl,du,t8',
                      'Printers/Laserjet Printer':
                        '2b,2q,4l,4m,8a,9c,ak,c5,k5,ly,ma,mc,pq,sb,st,t2',
                      'Supplies/Ink': '1n,gd,gm,k6,uk,ur',
                      'Supplies/Media': 'au',
                      'Supplies/Toner': '5t,gj,gk,gn,gp',
                      'Tablets/Tablet Category': '4t,6x,7v,9t,ez,fd,fg',
                    },
                    c = ',';
                  for (n in cats)
                    if ((c + cats[n] + c).indexOf(c + _A.LC(code) + c) > -1)
                      return _A.UC(code) + '/' + n;
                  return code;
                },
                buildProductList = function (product) {
                  var floatPrice,
                    floatQty,
                    textPrice,
                    unitPrice,
                    o = { revenue: 0, products: [] };
                  for (var i = 0; i < product.list.length; i++) {
                    o.products[i] = {};
                    if (_A.isS(product.list[i].sku)) o.products[i].id = product.list[i].sku;
                    if (_A.isS(product.list[i].name)) o.products[i].name = product.list[i].name;
                    else if (_A.isS(product.list[i].sku)) o.products[i].name = product.list[i].sku;
                    floatQty = _A.toNum(product.list[i].units) || 1;
                    if (floatQty < 1) floatQty = 1;
                    floatQty = Math.round(floatQty * 100) / 100;
                    textPrice = product.list[i].price || product.list[i].total_price;
                    if (_A.isN(textPrice) || _A.isS(textPrice)) {
                      floatPrice = _A.toFloat((textPrice + '').replace(/,/g, '')) || 0;
                      floatPrice = Math.round(floatPrice * 100) / 100;
                      o.revenue += floatPrice;
                    } else floatPrice = 0;
                    unitPrice = Math.round((100 * floatPrice) / floatQty) / 100;
                    o.products[i].price = unitPrice + '';
                    o.products[i].quantity = floatQty;
                    if (_A.isS(product.list[i].productLine))
                      o.products[i].category = mapCatCodes(product.list[i].productLine);
                    if (
                      _A.isS(product.list[i].instant_disc_amt) ||
                      _A.isN(product.list[i].instant_disc_amt)
                    )
                      o.products[i].discountAmount = product.list[i].instant_disc_amt + '';
                  }
                  o.revenue = o.revenue + '';
                  return o;
                },
                eventsFromHPCOMtrackMetrics = function (a, b) {
                  try {
                    _A.logDebug(
                      LP,
                      'eventsFromHPCOMtrackMetrics(',
                      _A.varsToStr(a),
                      ',',
                      _A.varsToStr(b),
                      ')',
                      _A.varsToStr('-l', 'hpmmd=', _A.subHpmmd())
                    );
                    var o = {};
                    if (
                      _A.isS(a) &&
                      a == 'customized.page' &&
                      _A.isO(b) &&
                      _A.isO(b.page) &&
                      _A.isS(b.page.customized)
                    )
                      dataLayer.push({
                        event: 'e_internal',
                        v157: 'customized:' + b.page.customized,
                      });
                    if (_A.isS(o.event)) {
                      dataLayer.push(o);
                      _A.logDebug(
                        LP,
                        'after eventsFromHPCOMtrackMetrics',
                        _A.log(
                          'dataLayer[' + (dataLayer.length - 1) + ']=',
                          dataLayer[dataLayer.length - 1]
                        )
                      );
                    }
                  } catch (e) {
                    console.log(LP, 'ERROR in eventsFromHPCOMtrackMetrics(', a, ',', b, '):', e);
                  }
                },
                eventsFromETRtrackMetrics = function (a, b) {
                  try {
                    _A.logDebug(
                      LP,
                      'eventsFromETRtrackMetrics(',
                      _A.varsToStr(a),
                      ',',
                      _A.varsToStr(b),
                      ')',
                      _A.varsToStr('-l', 'hpmmd=', _A.subHpmmd())
                    );
                    var o = {};
                    if (
                      _A.isS(a) &&
                      a == 'new.page' &&
                      _A.isO(b) &&
                      _A.isO(b.product) &&
                      b.product.addtocart_method &&
                      _A.isA(b.product.list) &&
                      b.product.list.length > 0
                    ) {
                      var currency =
                        (_A.isO(hpmmd) && _A.isO(hpmmd.product) && _A.isS(hpmmd.product.currency)
                          ? hpmmd.product.currency
                          : _A.isS(_A.section.currency)
                          ? _A.section.currency
                          : '') || 'USD';
                      o = {
                        event: 'e_addToCart',
                        ecommerce: { currencyCode: currency, add: { products: [] } },
                      };
                      o.ecommerce.add.products = buildProductList(b.product).products;
                      _A.logDebug(LP, 'ECOMMERCE : Add to cart event');
                    }
                    if (
                      _A.isO(b) &&
                      _A.isO(b.page) &&
                      _A.isA(b.page.events) &&
                      b.page.events.indexOf('cart.remove') > -1
                    ) {
                      o = { event: 'e_removeFromCart', ecommerce: { remove: { products: [] } } };
                      o.ecommerce.remove.products = buildProductList(b.product).products;
                      _A.logDebug(LP, 'ECOMMERCE : Remove from cart event');
                    }
                    if (
                      _A.isO(b) &&
                      _A.isO(b.page) &&
                      _A.isA(b.page.events) &&
                      b.page.events.indexOf('checkout.billing') > -1
                    ) {
                      o = {
                        event: 'e_pageView',
                        ecommerce: {
                          checkout: { actionField: { step: 2, option: 'Payment' }, products: [] },
                        },
                      };
                      o.ecommerce.checkout.products = buildProductList(hpmmd.product).products;
                      _A.logDebug(LP, 'ECOMMERCE : Checkout start event : Step 2 PAYMENT');
                    }
                    if (
                      _A.isS(a) &&
                      a == 'new.link' &&
                      _A.isO(b) &&
                      _A.isO(b.page) &&
                      _A.isS(b.page.navigation) &&
                      b.page.navigation.indexOf('coupon') > -1
                    )
                      if (b.page.navigation.indexOf('coupon valid') > -1) {
                        if (_A.isS(b.promo.coupon_valid_entry))
                          o = { event: 'e_couponApplied', couponCode: b.promo.coupon_valid_entry };
                      } else if (b.page.navigation.indexOf('coupon invalid') > -1)
                        if (_A.isS(b.promo.coupon_invalid_entry))
                          o = { event: 'e_couponError', couponCode: b.promo.coupon_invalid_entry };
                    if (
                      _A.isS(a) &&
                      a == 'new.link' &&
                      _A.isO(b) &&
                      _A.isO(b.page) &&
                      _A.isA(b.page.events) &&
                      b.page.events.indexOf('config.change') > -1
                    )
                      if (
                        _A.isO(b.product) &&
                        _A.isA(b.product.list) &&
                        b.product.list.length > 0
                      ) {
                        var component = b.product.list[0].config_selection || 'not_valid';
                        dataLayer.push({ event: 'e_configuratorChange', component: component });
                      }
                    if (
                      _A.isS(a) &&
                      a == 'new.page' &&
                      _A.isO(b) &&
                      _A.isO(b.page) &&
                      _A.isA(b.page.events) &&
                      b.page.events.indexOf('config.complete') > -1
                    )
                      dataLayer.push({ event: 'e_configuratorComplete' });
                    if (
                      _A.isS(a) &&
                      a == 'new.facet' &&
                      _A.isO(b) &&
                      _A.isO(b.page) &&
                      _A.isA(b.page.events) &&
                      b.page.events.indexOf('facet-search') > -1 &&
                      _A.isS(b.page.navigation)
                    ) {
                      var z = b.page.navigation.split(':');
                      if (z.length > 1)
                        dataLayer.push({
                          event: 'e_facet',
                          filterCategories: z[0],
                          filterValue: z[1],
                        });
                    }
                    if (
                      _A.isS(a) &&
                      a == 'new.page' &&
                      _A.isO(b) &&
                      _A.isO(b.page) &&
                      _A.isS(b.page.tabname) &&
                      _A.isO(hpmmd) &&
                      _A.isO(hpmmd.product) &&
                      _A.isA(hpmmd.product.list) &&
                      hpmmd.product.list.length > 0
                    ) {
                      dataLayer.push({
                        event: 'e_prodDetailsTab',
                        detailsTabName: b.page.tabname,
                        productName: hpmmd.product.list[0].name || hpmmd.product.list[0].sku,
                      });
                      if (b.page.tabname.indexOf('review') > -1)
                        dataLayer.push({
                          event: 'e_readReview',
                          productName: hpmmd.product.list[0].name || hpmmd.product.list[0].sku,
                        });
                    }
                    if (
                      _A.isS(a) &&
                      a == 'customized.page' &&
                      _A.isO(b) &&
                      _A.isO(b.page) &&
                      _A.isS(b.page.customized)
                    )
                      dataLayer.push({
                        event: 'e_internal',
                        v157: 'customized:' + b.page.customized,
                      });
                    if (_A.isS(o.event)) {
                      dataLayer.push(o);
                      _A.logDebug(
                        LP,
                        'after TrackMetricsEtrGA',
                        _A.log(
                          'dataLayer[' + (dataLayer.length - 1) + ']=',
                          dataLayer[dataLayer.length - 1]
                        )
                      );
                    }
                  } catch (e) {
                    console.log(LP, 'ERROR in eventsFromETRtrackMetrics(', a, ',', b, '):', e);
                  }
                },
                mapHpmmdToEcommerce = function () {
                  var ecommerce = false;
                  var currency =
                    (_A.isO(hpmmd) && _A.isO(hpmmd.product) && _A.isS(hpmmd.product.currency)
                      ? hpmmd.product.currency
                      : _A.isS(_A.section.currency)
                      ? _A.section.currency
                      : '') || 'USD';
                  if (
                    _A.isO(hpmmd) &&
                    _A.isO(hpmmd.page) &&
                    _A.isA(hpmmd.page.events) &&
                    _A.isO(hpmmd.product) &&
                    _A.isA(hpmmd.product.list) &&
                    hpmmd.product.list.length > 0
                  )
                    if (hpmmd.page.events.indexOf('pdp.view') > -1) {
                      ecommerce = { detail: { products: [] } };
                      ecommerce.detail.products = buildProductList(hpmmd.product).products;
                      _A.logDebug(LP, 'ECOMMERCE : PDP pageView event');
                    } else if (
                      hpmmd.page.events.indexOf('purchase') > -1 &&
                      _A.isS(hpmmd.product.purchase_id)
                    )
                      if (
                        !sessionStorage.getItem('ga_purchase_id') ||
                        sessionStorage.getItem('ga_purchase_id') != hpmmd.product.purchase_id
                      ) {
                        ecommerce = {
                          currencyCode: currency,
                          purchase: { actionField: {}, products: [] },
                        };
                        ecommerce.purchase.actionField.id = hpmmd.product.purchase_id;
                        sessionStorage.setItem('ga_purchase_id', hpmmd.product.purchase_id);
                        ecommerce.purchase.actionField.affiliation = 'HP Online';
                        if (
                          hpmmd.product.tax &&
                          _A.isS(hpmmd.product.tax) &&
                          _A.toFloat(hpmmd.product.tax) > 0
                        )
                          ecommerce.purchase.actionField.tax = hpmmd.product.tax;
                        if (
                          _A.isO(hpmmd.promo) &&
                          _A.isS(hpmmd.promo.coupon_code) &&
                          hpmmd.promo.coupon_code
                        )
                          ecommerce.purchase.actionField.coupon = hpmmd.promo.coupon_code;
                        if (
                          _A.isO(hpmmd.promo) &&
                          _A.isS(hpmmd.promo.shipping_amt) &&
                          _A.toFloat(hpmmd.promo.shipping_amt) > 0
                        )
                          ecommerce.purchase.actionField.shipping = hpmmd.promo.shipping_amt;
                        var products = buildProductList(hpmmd.product).products;
                        if (_A.isA(products) && products.length > 0)
                          ecommerce.purchase.products = products;
                        var revenue = buildProductList(hpmmd.product).revenue;
                        if (revenue && _A.isS(revenue))
                          ecommerce.purchase.actionField.revenue = buildProductList(
                            hpmmd.product
                          ).revenue;
                        _A.logDebug(LP, 'ECOMMERCE : Purchase event');
                      } else
                        _A.logDebug(
                          LP,
                          'ECOMMERCE : Purchase event attempt, hpmmd.product.purchase_id:',
                          hpmmd.product.purchase_id,
                          ' , sessionStorage purchase_id:',
                          sessionStorage.getItem('ga_purchase_id')
                        );
                    else if (
                      hpmmd.page.events.indexOf('cart.view') > -1 &&
                      hpmmd.page.page_function == 'cart'
                    ) {
                      _A.logDebug(LP, 'ECOMMERCE : Cart View event');
                      ecommerce = {
                        currencyCode: currency,
                        detail: { actionField: { list: 'view cart' }, products: [] },
                      };
                      ecommerce.detail.products = buildProductList(hpmmd.product).products;
                    } else if (hpmmd.page.page_function == 'checkout')
                      for (var j = 0; j < hpmmd.page.events.length; j++) {
                        if (hpmmd.page.events[j].match('checkout.start:'))
                          if (hpmmd.page.name == 'shipping') {
                            ecommerce = {
                              checkout: {
                                actionField: { step: 1, option: 'Shipping / Contact Info' },
                                products: [],
                              },
                            };
                            ecommerce.checkout.products = buildProductList(hpmmd.product).products;
                            _A.logDebug(LP, 'ECOMMERCE : Checkout start event : Step 1 SHIPPING');
                          }
                        if (hpmmd.page.events[j].match('checkout.review'))
                          if (hpmmd.page.name == 'review') {
                            ecommerce = {
                              checkout: {
                                actionField: { step: 3, option: 'Review Order' },
                                products: [],
                              },
                            };
                            ecommerce.checkout.products = buildProductList(hpmmd.product).products;
                            _A.logDebug(
                              LP,
                              'ECOMMERCE : Checkout start event : Step 3 Review Order'
                            );
                          }
                      }
                  if (_A.isO(ecommerce)) return ecommerce;
                  else return F;
                },
                pushEvents = function () {
                  _A.logDebug(LP, 'pushEvents()');
                  if (_A.isO(hpmmd) && _A.isO(hpmmd.page)) {
                    if (!_A.isA(W[DL])) W[DL] = [];
                    if (
                      _A.isA(hpmmd.page.events) &&
                      hpmmd.page.events.indexOf('order.status') > -1
                    ) {
                      var orderNumber = _A.parseParam('extOrderId') || '';
                      if (orderNumber)
                        dataLayer.push({ event: 'e_orderStatus', orderNumber: orderNumber });
                    }
                    if (_A.isS(hpmmd.page.name) && hpmmd.page.name == 'my account your info')
                      dataLayer.push({ event: 'e_userRegister' });
                    if (
                      _A.isO(hpmmd.user) &&
                      hpmmd.user.login == 'Y' &&
                      (D.referrer.indexOf('store.hp.com/webapp/wcs/stores/servlet/LogonForm') >
                        -1 ||
                        D.referrer.indexOf('store.hp.com/us/en/Logoff') > -1 ||
                        D.referrer.indexOf(
                          'store.hp.com/webapp/wcs/stores/servlet/AjaxOrderItemDisplayView'
                        ) > -1)
                    )
                      dataLayer.push({ event: 'e_userLogin' });
                    if (
                      _A.isA(hpmmd.page.events) &&
                      hpmmd.page.events.indexOf('config.start') > -1
                    )
                      dataLayer.push({ event: 'e_configuratorStart' });
                    if (_A.isO(hpmmd.search)) {
                      _A.logDebug(LP, 'pushEvents() search event');
                      var sT = (sR = 0);
                      if (hpmmd.search.keywords && _A.isS(hpmmd.search.keywords)) {
                        sT = hpmmd.search.keywords;
                        sR =
                          hpmmd.search.number_of_results &&
                          _A.isS(hpmmd.search.number_of_results.replace(/,/g, ''))
                            ? hpmmd.search.number_of_results
                            : 0;
                      }
                      if (_A.isS(hpmmd.page.search_term) && hpmmd.page.search_term)
                        sT = hpmmd.page.search_term;
                      if (_A.parseParam('qt') && _A.parseParam('nores'))
                        (sT = _A.parseParam('qt')), (sR = '0');
                      if (sT) {
                        var o = { event: 'e_searchResults', searchTerm: sT, udl: true };
                        if (sR) o.numSearchResults = sR;
                        dataLayer.push(o);
                      }
                    }
                  }
                },
                UDLpageViewFromHpmmd = function () {
                  var ecommerce = mapHpmmdToEcommerce(),
                    o = { event: 'e_pageView' };
                  _A.logDebug(LP, 'UDLpageViewFromHpmmd()');
                  if (
                    _A.isO(W.hpmmd) &&
                    _A.isO(hpmmd.page) &&
                    hpmmd.page.platform == 'wcs call center'
                  ) {
                    o.loginStatus = true;
                    o.userTypeSession = 'call center';
                  } else {
                    o.loginStatus =
                      _A.isO(hpmmd) &&
                      _A.isO(hpmmd.user) &&
                      _A.isS(hpmmd.user.id) &&
                      hpmmd.user.id.indexOf('registered') > -1;
                    o.userTypeSession =
                      _A.isO(hpmmd) && _A.isO(hpmmd.page) && _A.isS(hpmmd.page.discount_tier)
                        ? hpmmd.page.discount_tier
                        : '';
                  }
                  if (ecommerce) o.ecommerce = ecommerce;
                  if (!_A.isA(W[DL])) W[DL] = [];
                  dataLayer.push(o);
                  setTimeout(function () {
                    W.adobeStCalled = true;
                  }, 150);
                },
                UDLpageViewFromISCS = function () {
                  var o = {},
                    lc = _A.LC((_A.isO(_A.section) ? _A.section.language : '??') || '??'),
                    cc = _A.LC((_A.isO(_A.section) ? _A.section.country : '??') || '??');
                  _A.logDebug(LP, 'UDLpageViewFromISCS()');
                  o.locale = lc + '-' + _A.UC(cc);
                  o.country = cc;
                  o.region = _A.section.region || 'Unknown';
                  o.type = _A.section.type || 'Unknown';
                  if (!_A.isA(W[DL])) W[DL] = [];
                  dataLayer.push(o);
                  loadISCScontainerIfNeeded();
                },
                sPageNameDefined = function (val, name, newLength, oldLength) {
                  _A.logDebug(
                    LP,
                    'sPageNameDefined(',
                    val,
                    ',',
                    name,
                    ',',
                    newLength,
                    ',',
                    oldLength,
                    ')'
                  );
                  try {
                    UDLpageViewFromHpmmd();
                    pushEvents();
                  } catch (e) {
                    console.log(LP, 'ERROR populating dataLayer[0]:', e);
                  }
                  loadUDLcontainerIfNeeded();
                  _A.watch('s.pageName');
                },
                hpmmdPageNameDefined = function (val, name, newLength, oldLength) {
                  _A.logDebug(
                    LP,
                    'hpmmdPageNameDefined(',
                    val,
                    ',',
                    name,
                    ',',
                    newLength,
                    ',',
                    oldLength,
                    ')'
                  );
                  try {
                    UDLpageViewFromHpmmd();
                    pushEvents();
                  } catch (e) {
                    console.log(LP, 'ERROR populating dataLayer[0]:', e);
                  }
                  loadUDLcontainerIfNeeded();
                  _A.watch('hpmmd.page.name');
                },
                dataLayerDefined = function (val, name, newLength, oldLength) {
                  var i;
                  _A.logDebug(
                    LP,
                    'dataLayerDefined(',
                    val,
                    ',',
                    name,
                    ',',
                    newLength,
                    ',',
                    oldLength,
                    ')'
                  );
                  if (_A.isA(W[DL]))
                    for (i = 0; i < W[DL].length; i++)
                      if (W[DL][i].event == 'gtm.load') {
                        _A.watch('dataLayer');
                        _A.watch('s.pageName', sPageNameDefined);
                      }
                };
              function wrapTrackMetricsIfNeeded () {
                if (!_A.isF(W.trackMetricsOverrides)) {
                  W.trackMetricsOverrides =
                    _A.LC(_A.section.platform) == 'store us etr' && _A.section.type == 'Store'
                      ? eventsFromETRtrackMetrics
                      : eventsFromHPCOMtrackMetrics;
                  _A.logDebug(LP, 'wrapTrackMetricsIfNeeded - wrapping trackMetrics()');
                }
              }
              wrapTrackMetricsIfNeeded();
              if (_A.LC(_A.section.platform) == 'store us etr' && _A.section.type == 'Store')
                _A.watch('s.pageName', sPageNameDefined);
              else if (
                _A.LC(_A.section.platform) == 'wwmkt' &&
                (_A.section.type == 'Marketing' || _A.section.type == 'About')
              )
                if (_A.section.region == 'EMEA') {
                  UDLpageViewFromISCS();
                  _A.watch('dataLayer', dataLayerDefined);
                } else _A.watch('s.pageName', sPageNameDefined);
              else if (_A.LC(_A.section.platform) == 'support community')
                _A.watch('hpmmd.page.name', hpmmdPageNameDefined);
            } catch (e) {
              console.log(LP, 'ERROR initialization:', e);
            }
          else setTimeout(compatibilityModeClosure, 50);
        })();
      },
      3226911,
      [3375270],
      439877,
      [371978]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                '//###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (lcCurrentURL.indexOf(tag.url) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/mx/es/business-solutions/security/secure-printing.html?jumpid=ba_6cmaw715ge',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur0',
            ord: '<random>',
          },
          {
            url:
              '/mx/es/contact-hp/how-to-buy.html?jumpid=cp_r163_mx/es/ips/secure_printing/entlaserjet/buynow2',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'compr0',
            ord: '<random>',
          },
          {
            url: '/ar/es/business-solutions/security/secure-printing.html?jumpid=ba_fvz2pk4wje',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur00',
            ord: '<random>',
          },
          {
            url:
              '/ar/es/contact-hp/how-to-buy.html?jumpid=cp_r163_ar/es/ips/secure_printing/entlaserjet/buynow2&_sm_au_=iPsqQTP1FnNWkvfS',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur000',
            ord: '<random>',
          },
          {
            url: '/co/es/business-solutions/security/secure-printing.html?jumpid=ba_6ncfx8yir3',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur001',
            ord: '<random>',
          },
          {
            url:
              '/co/es/contact-hp/how-to-buy.html?jumpid=cp_r163_co/es/ips/secure_printing/entlaserjet/buynow2',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur002',
            ord: '<random>',
          },
          {
            url: '/cl/es/business-solutions/security/secure-printing.html?jumpid=ba_e9vr7nqm4y',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur003',
            ord: '<random>',
          },
          {
            url:
              '/cl/es/contact-hp/how-to-buy.html?jumpid=cp_r163_cl/es/ips/secure_printing/entlaserjet/buynow2',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur004',
            ord: '<random>',
          },
          {
            url: '/pe/es/business-solutions/security/secure-printing.html?jumpid=ba_yqwz61sa9h',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur005',
            ord: '<random>',
          },
          {
            url:
              '/pe/es/contact-hp/how-to-buy.html?jumpid=cp_r163_pe/es/ips/secure_printing/entlaserjet/buynow2&_sm_au_=iPsqQTP1FnNWkvfS',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur006',
            ord: '<random>',
          },
          {
            url: '/ec/es/business-solutions/security/secure-printing.html?jumpid=ba_jqbnmctisz',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur007',
            ord: '<random>',
          },
          {
            url:
              '/ec/es/contact-hp/how-to-buy.html?jumpid=cp_r163_ec/es/ips/secure_printing/entlaserjet/buynow2&_sm_au_=iPsqQTP1FnNWkvfS',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur008',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/business-solutions/security/secure-printing.html?jumpid=ba_26ynmexkq7',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur009',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/contact-hp/how-to-buy.html?jumpid=cp_r163_lamerica_nsc_cnt_amer/es/ips/secure_printing/entlaserjet/buynow2&_sm_au_=iPsqQTP1FnNWkvfS',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur00-',
            ord: '<random>',
          },
          {
            url: '/br/pt/business-solutions/security/secure-printing.html?jumpid=ba_385sfa24w9',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur00a',
            ord: '<random>',
          },
          {
            url:
              '/br/pt/contact-hp/how-to-buy.html?jumpid=cp_r163_br/pt/ips/secure_printing/entlaserjet/buynow1&_sm_au_=iqsRZt76WZQPHQq0',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'secur00b',
            ord: '<random>',
          },
        ]);
      },
      2648296,
      425113
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (
              tag.isValid &&
              (lcCurrentURL.indexOf(tag.url.toLowerCase()) !== -1 ||
                tag.url.indexOf(location.hostname + location.pathname) !== -1)
            )
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: 'http://www8.hp.com/ch/de/printers/sprocket.html',
            isValid: true,
            src: '2326416',
            type: 'ipsin0',
            cat: 'ch_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/ch/fr/printers/sprocket.html',
            isValid: true,
            src: '2326416',
            type: 'ipsin0',
            cat: 'ch_pr00',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/de/de/printers/sprocket.html',
            isValid: true,
            src: '2326416',
            type: 'ipsin0',
            cat: 'de_pr002',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/uk/en/printers/sprocket.html',
            isValid: true,
            src: '2326416',
            type: 'ipsin0',
            cat: 'uk_pr002',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/il/he/printers/officejet-pro-6000.html',
            isValid: true,
            src: '2326416',
            type: 'ojpro287',
            cat: 'isr_p0',
            ord: '<random>',
          },
        ]);
      },
      1713093,
      445673
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        try {
          if (
            !_A.optOut('[Marketing] Dun and Bradstreet (D&B)', 2) &&
            !_A.optOut('[Marketing] Dun and Bradstreet (D&B)', 3) &&
            _A.section.country != 'cn'
          ) {
            var dt = new Date(),
              E = new Date(dt.setDate(dt.getDate() + 1)),
              wS = 'D&B:INCORRECT dnb_Data.status :',
              wI = 'D&B:ERROR : ',
              insertScript = function (u, t, d, a) {
                var i = d.createElement(t);
                i.type = 'text/javascript';
                i.async = a || false;
                i.src = '//' + u;
                var s = d.getElementsByTagName(t)[0];
                s.parentNode.insertBefore(i, s);
                console.log('D&B:INJECTION V5.0', u);
              },
              dnbCookieWrite = window.mediaTax._setCookie,
              dnbCookieRead = window.mediaTax._getCookie,
              waitForDnB = function (dnbObject, executeDnB) {
                if (typeof dnbObject === 'object' && typeof dnbObject.getData === 'function')
                  executeDnB();
                else
                  setTimeout(function () {
                    waitForDnB(window.dnbvid, executeDnB);
                  }, 50);
              },
              trackAnalyticsVariables = function (var20, var21) {
                if (
                  typeof s === 'object' &&
                  typeof s.linkTrackVars === 'string' &&
                  typeof s.tl === 'function'
                ) {
                  var c = ',',
                    lt = 'o',
                    d = 'D&B Data response';
                  s.linkTrackVars += c + 'eVar20' + c + 'eVar21';
                  s.eVar20 = var20;
                  s.eVar21 = var21;
                  s.tl(this, lt, d);
                }
              };
            if (
              !dnbCookieRead('dnb1') ||
              (dnbCookieRead('dnb1') != '200' && dnbCookieRead('dnb1') != '404')
            ) {
              var customer_id = dnbCookieRead('s_vi') || dnbCookieRead('aam_uuid') || '';
              insertScript('vid0377.d41.co/sync/', 'script', document, true);
              insertScript('cdn-0.d41.co/tags/dnb_coretag_v5.min.js', 'script', document);
              waitForDnB(window.dnbvid, function () {
                dnbvid.getData('vid0377', 'json', 'T', { p2: customer_id }, function (dnb_Data) {
                  if (typeof dnb_Data === 'object' && typeof dnb_Data.status === 'string') {
                    dnbCookieWrite('dnb1', dnb_Data.status, E, '.hp.com');
                    if (dnb_Data.status == '200') {
                      console.log('D&B:READY dnb_Data:', dnb_Data);
                      var de = '|';
                      var dnb_eVar20 =
                        (dnb_Data.duns || 'duns_na') +
                        de +
                        (dnb_Data.employeesAtLocation || 'employeesAtLocation_na') +
                        de +
                        (dnb_Data.networth || 'networth_na') +
                        de +
                        (dnb_Data.salesAnnual || 'salesAnnual_na') +
                        de +
                        (dnb_Data.companyCountry || 'companyCountry_na') +
                        de +
                        (dnb_Data.companyState || 'companyState_na') +
                        de +
                        (dnb_Data.jobFunction || 'jobFunction_na') +
                        de +
                        (dnb_Data.jobSeniority || 'jobSeniority_na') +
                        de +
                        (dnb_Data.companyName || 'companyName_na');
                      var dnb_eVar21 =
                        (!!dnb_Data.customAttributes && !!dnb_Data.customAttributes.stid
                          ? dnb_Data.customAttributes.stid
                          : 'customAttributes.stid_na') +
                        de +
                        (dnb_Data.industrySic || 'industrySic_na').substring(0, 110) +
                        de +
                        (dnb_Data.sicCodes || 'sicCodes_na').substring(0, 40) +
                        de +
                        (dnb_Data.walletSize || 'walletSize_na') +
                        de +
                        (dnb_Data.itExpense || 'itExpense_na') +
                        de +
                        (dnb_Data.salesAnnualNum || 'salesAnnualNum_na') +
                        de +
                        (dnb_Data.employeesAtLocationNum || 'employeesAtLocationNum_na') +
                        de +
                        (dnb_Data.networthNum || 'networthNum_na') +
                        de +
                        (dnb_Data.techOfficeDemand || 'techOfficeDemand_na');
                      dnbCookieWrite('dnb2', dnb_eVar20, E, '.hp.com');
                      dnbCookieWrite('dnb3', dnb_eVar21, E, '.hp.com');
                      setTimeout(trackAnalyticsVariables(dnb_eVar20, dnb_eVar21), 2000);
                    } else {
                      dnbCookieWrite('dnb2', wS + dnb_Data.status, E, '.hp.com');
                      dnbCookieWrite('dnb3', wS + dnb_Data.status, E, '.hp.com');
                      console.log(wS + dnb_Data.status);
                    }
                  }
                });
              });
            } else
              console.log(
                'D&B:ALREADY existing data:\ndnb_status:',
                dnbCookieRead('dnb1'),
                '\ndnb_eVar20:',
                dnbCookieRead('dnb2'),
                '\ndnb_eVar21:',
                dnbCookieRead('dnb3')
              );
          }
        } catch (e) {
          console.log(wI, e);
        }
      },
      3296021,
      [3375270, 3352595],
      498708,
      [371978, 423570]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            new Image().src = url;
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (lcCurrentURL.indexOf(tag.url) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: 'https://ssl.www8.hp.com/h41268/live/index.aspx?qid=27312',
            isValid: true,
            src: '4887624',
            type: 'hpelite',
            cat: 'slicermk',
            ord: '<random>',
          },
          {
            url:
              'https://ssl.www8.hp.com/h41268/live/index.aspx?qid=27501&jumpid=in_r11363_au/en/smb/ipg/overview-contactus_gi_ob_ds_pd/newlaserjets_cc/dt',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpform1',
            ord: '<random>',
          },
          {
            url: '/au/en/business-solutions/security/secure-printing.html?jumpid=af_a3bqzfm7yt',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpsecure',
            ord: '<random>',
          },
          {
            url: 'https://ssl.www8.hp.com/h41268/live/index.aspx?qid=25956',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpform1',
            ord: '<random>',
          },
        ]);
      },
      2646825,
      429699
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            new Image().src = url;
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (
              tag.isValid &&
              (lcCurrentURL.indexOf(tag.url) !== -1 ||
                tag.url.indexOf(location.hostname + location.pathname) !== -1)
            )
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/th/th/cartridge/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpcart01',
            ord: '<random>',
          },
          {
            url: '/kr/ko/cartridge/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpcart01',
            ord: '<random>',
          },
          {
            url: '/my/en/cartridge/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpcart01',
            ord: '<random>',
          },
          {
            url: '/ph/en/cartridge/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpcart01',
            ord: '<random>',
          },
          {
            url: '/in/en/cartridge/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpcart01',
            ord: '<random>',
          },
          {
            url: '/sg/en/cartridge/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpcart01',
            ord: '<random>',
          },
          {
            url: '/hk/zh/cartridge/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpcart01',
            ord: '<random>',
          },
          {
            url: '/hk/en/cartridge/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpcart01',
            ord: '<random>',
          },
          {
            url: '/tw/zh/cartridge/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpcart01',
            ord: '<random>',
          },
        ]);
      },
      2646835,
      447478
    );
    Bootstrapper.bindDependencyDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        try {
          function fire_img_tag (src) {
            new Image().src = src;
          }
          if (
            _A.section.region == 'APJ' &&
            _A.section.country != 'cn' &&
            !window._A.optOut('[Marketing] MTR-292 APJ AdWords')
          ) {
            var type = 'async',
              custom_conversion_id = '849111477',
              custom_conversion_label = '',
              local_params = window.google_tag_params;
            if (type === 'async')
              Bootstrapper.loadScriptCallback(
                '//www.googleadservices.com/pagead/conversion_async.js',
                function () {
                  window.google_trackConversion({
                    google_conversion_id: custom_conversion_id,
                    google_conversion_label: custom_conversion_label,
                    google_remarketing_only: true,
                    google_custom_params: local_params,
                  });
                }
              );
            else if (type === 'sync') {
              window.google_conversion_id = custom_conversion_id;
              window.google_conversion_label = custom_conversion_label;
              window.google_remarketing_only = true;
              window.google_custom_params = local_params;
              document.write(
                '<script src="//www.googleadservices.com/pagead/conversion.js"></script>'
              );
            }
          }
        } catch (e) {
          console.log('[Marketing] MTR-292 APJ AdWords error log:', e);
        }
      },
      2188829,
      [3375270],
      499714,
      [371978]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (tag.isValid && lcCurrentURL.indexOf(tag.url.toLowerCase()) !== -1) {
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
              console.log('.: MTR 86 87 88 fired.');
            }
          }
        })([
          {
            url: '/ar/es/ads/supplies/overview.html?jumpid=ba_jarqw36khu',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_in0',
            ord: '<random>',
          },
          {
            url: '/cl/es/ads/supplies/overview.html?jumpid=ba_t76smxg9d8',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_in000',
            ord: '<random>',
          },
          {
            url: '/co/es/ads/supplies/overview.html?jumpid=ba_a63qj7pm2h',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_in002',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/ads/supplies/overview.html?jumpid=ba_bevs76icdm',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_in00',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/ads/supplies/overview.html?jumpid=ba_wqtgrh2pj1',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_in001',
            ord: '<random>',
          },
          {
            url: '/ar/es/ads/supplies/toner.html?jumpid=ba_71xzter6cm',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_to0',
            ord: '<random>',
          },
          {
            url: '/cl/es/ads/supplies/toner.html?jumpid=ba_9h15prcm3x',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_to002',
            ord: '<random>',
          },
          {
            url: '/co/es/ads/supplies/toner.html?jumpid=ba_fdbkn17yw3',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_to00',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/ads/supplies/toner.html?jumpid=ba_8bcpa6svqr',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_to000',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/ads/supplies/toner.html?jumpid=ba_ehimjqfgxy',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_to001',
            ord: '<random>',
          },
          {
            url:
              '/br/pt/contact-hp/how-to-buy.html?jumpid=cp_r163_br/pt/ips/secure_printing/entlaserjet/buynow1',
            isValid: true,
            src: '2565404',
            type: '1',
            cat: 'q1_se003',
            ord: '<random>',
          },
          {
            url: '/mx/es/business-solutions/security/secure-printing.html?jumpid=ba_icqm9rkeat',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_se00',
            ord: '<random>',
          },
          {
            url:
              '/mx/es/contact-hp/how-to-buy.html?jumpid=cp_r163_mx/es/ips/secure_printing/entlaserjet/buynow1',
            isValid: true,
            src: '2565404',
            type: '1',
            cat: 'q1_se0',
            ord: '<random>',
          },
          {
            url: '/ar/es/business-solutions/security/secure-printing.html?jumpid=ba_wv6rpx512h',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_se0',
            ord: '<random>',
          },
          {
            url:
              '/ar/es/contact-hp/how-to-buy.html?jumpid=cp_r163_ar/es/ips/secure_printing/entlaserjet/buynow1',
            isValid: true,
            src: '2565404',
            type: '1',
            cat: 'q1_se00',
            ord: '<random>',
          },
          {
            url: '/cl/es/business-solutions/security/secure-printing.html?jumpid=ba_dpj3b5at6h',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_se001',
            ord: '<random>',
          },
          {
            url:
              '/cl/es/contact-hp/how-to-buy.html?jumpid=cp_r163_cl/es/ips/secure_printing/entlaserjet/buynow1',
            isValid: true,
            src: '2565404',
            type: '1',
            cat: 'q1_se001',
            ord: '<random>',
          },
          {
            url: '/co/es/business-solutions/security/secure-printing.html?jumpid=ba_imz7f9xtce',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_se000',
            ord: '<random>',
          },
          {
            url:
              '/co/es/contact-hp/how-to-buy.html?jumpid=cp_r163_co/es/ips/secure_printing/entlaserjet/buynow1',
            isValid: true,
            src: '2565404',
            type: '1',
            cat: 'q1_se000',
            ord: '<random>',
          },
          {
            url: '/pe/es/business-solutions/security/secure-printing.html?jumpid=ba_u65gv1exhy',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_se002',
            ord: '<random>',
          },
          {
            url:
              '/pe/es/contact-hp/how-to-buy.html?jumpid=cp_r163_pe/es/ips/secure_printing/entlaserjet/buynow1',
            isValid: true,
            src: '2565404',
            type: '1',
            cat: 'q1_se002',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/business-solutions/security/secure-printing.html?jumpid=ba_jnmgqtckb8',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'q1_se004',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/contact-hp/how-to-buy.html?jumpid=cp_r163_lamerica_nsc_cnt_amer/es/ips/secure_printing/entlaserjet/buynow1',
            isValid: true,
            src: '2565404',
            type: '1',
            cat: 'q1_se004',
            ord: '<random>',
          },
        ]);
      },
      2646840,
      455510
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (
              tag.isValid &&
              (lcCurrentURL.indexOf(tag.url) !== -1 ||
                tag.url.indexOf(location.hostname + location.pathname) !== -1)
            )
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: 'http://www8.hp.com/de/de/printers/officejet-pro-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpojp',
            cat: 'de_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/es/es/printers/officejet-pro-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpojp',
            cat: 'es_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/fr/fr/printers/officejet-pro-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpojp',
            cat: 'fr_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/il/he/printers/business-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpojp',
            cat: 'il_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/it/it/printers/officejet-pro-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpojp',
            cat: 'it_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/nl/nl/printers/business-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpojp',
            cat: 'nl_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/ru/ru/printers/laserjet.html',
            isValid: true,
            src: '2326416',
            type: 'hpojp',
            cat: 'ru_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/se/sv/printers/business-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpojp',
            cat: 'se_pr0',
            ord: '<random>',
          },
          {
            url: 'http://www8.hp.com/uk/en/printers/officejet-pro-printers.html',
            isValid: true,
            src: '2326416',
            type: 'hpojp',
            cat: 'uk_pr0',
            ord: '<random>',
          },
        ]);
      },
      1406639,
      390072
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function () {
          var tagMsg = '[Marketing] MTR-774 Brightroll Universal tag';
          if (window._A.optOut(tagMsg)) return;
          try {
            var src =
              '//sp.analytics.yahoo.com/spp.pl?a=10000&.yp=10056605&js=no&gdpr=GDPR_PLACEHOLDER&gdpr_consent=CONSENT_PLACEHOLDER';
            var img = document.createElement('img');
            img.setAttribute('height', '1');
            img.setAttribute('width', '1');
            img.style.display = 'none';
            img.setAttribute('src', src);
            document.body.appendChild(img);
          } catch (e) {
            console.log(tagMsg, ' issue log:', e);
          }
        })();
      },
      2494807,
      [3375270],
      543762,
      [371978]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (tag.isValid && lcCurrentURL.indexOf(tag.url.toLowerCase()) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/mx/es/campaigns/workstations/zbook-studio.html?jumpid=ba_5iw948uped',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'mx_wo0',
            ord: '<random>',
          },
          {
            url: '/mx/es/store-finder/tiendas_hp/hp_tiendas.html?_sm_au_=i7sWnBr5DtsQ7QHM',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'mx_wo00',
            ord: '<random>',
          },
          {
            url: '/mx/es/store-finder/tiendas_hp/hp_tiendas.html',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'mx_wo00',
            ord: '<random>',
          },
          {
            url: 'https://ssl.www8.hp.com/h41268/live/index.aspx?qid=26685',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'mx_wo000',
            ord: '<random>',
          },
          {
            url: 'https://ssl.www8.hp.com/h41268/live/closure.aspx?qid=26685',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'mx_wo001',
            ord: '<random>',
          },
          {
            url:
              '/co/es/campaigns/workstations/zbook-studio.html?jumpid=ba_wfcbt2jyx4&_sm_au_=i7sWnBr5DtsQ7QHM',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'co_wo001',
            ord: '<random>',
          },
          {
            url: '/co/es/campaigns/workstations/zbook-studio.html?jumpid=ba_wfcbt2jyx4',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'co_wo001',
            ord: '<random>',
          },
          {
            url: '/co/es/store-finder/tiendas_hp/hp_tiendas.html?_sm_au_=i7sWnBr5DtsQ7QHM',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'co_wo0',
            ord: '<random>',
          },
          {
            url: '/co/es/store-finder/tiendas_hp/hp_tiendas.html',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'co_wo0',
            ord: '<random>',
          },
          {
            url: 'https://ssl.www8.hp.com/h41268/live/index.aspx?qid=27492',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'co_wo00',
            ord: '<random>',
          },
          {
            url: 'https://ssl.www8.hp.com/h41268/live/closure.aspx?qid=27492',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'co_wo000',
            ord: '<random>',
          },
          {
            url:
              '/pe/es/campaigns/workstations/zbook-studio.html?jumpid=ba_36frzwdka8&_sm_au_=i7sWnBr5DtsQ7QHM',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'pe_wo001',
            ord: '<random>',
          },
          {
            url: '/pe/es/campaigns/workstations/zbook-studio.html?jumpid=ba_36frzwdka8',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'pe_wo001',
            ord: '<random>',
          },
          {
            url: '/pe/es/store-finder/tiendas_hp/hp_tiendas.html?_sm_au_=i7sWnBr5DtsQ7QHM',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'pe_wo0',
            ord: '<random>',
          },
          {
            url: '/pe/es/store-finder/tiendas_hp/hp_tiendas.html',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'pe_wo0',
            ord: '<random>',
          },
          {
            url: 'https://ssl.www8.hp.com/h41268/live/index.aspx?qid=27493',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'pe_wo00',
            ord: '<random>',
          },
          {
            url: 'https://ssl.www8.hp.com/h41268/live/closure.aspx?qid=27493',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'pe_wo000',
            ord: '<random>',
          },
          {
            url:
              '/cl/es/campaigns/workstations/zbook-studio.html?jumpid=ba_i3t1vybp98&_sm_au_=i7sWnBr5DtsQ7QHM',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'cl_wo001',
            ord: '<random>',
          },
          {
            url: '/cl/es/campaigns/workstations/zbook-studio.html?jumpid=ba_i3t1vybp98',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'cl_wo001',
            ord: '<random>',
          },
          {
            url: '/cl/es/store-finder/tiendas_hp/hp_tiendas.html?_sm_au_=i7sWnBr5DtsQ7QHM',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'cl_wo0',
            ord: '<random>',
          },
          {
            url: '/cl/es/store-finder/tiendas_hp/hp_tiendas.html',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'cl_wo0',
            ord: '<random>',
          },
          {
            url: 'https://ssl.www8.hp.com/h41268/live/index.aspx?qid=27490',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'cl_wo00',
            ord: '<random>',
          },
          {
            url: 'https://ssl.www8.hp.com/h41268/live/closure.aspx?qid=27490',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'cl_wo000',
            ord: '<random>',
          },
        ]);
      },
      2646832,
      431393
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            new Image().src = url;
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (lcCurrentURL.indexOf(tag.url) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/au/en/printers/deskjet3700.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'dj3700',
            ord: '<random>',
          },
          {
            url: '/nz/en/printers/deskjet3700.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'dj3700',
            ord: '<random>',
          },
          {
            url: '/sg/en/printers/deskjet3700.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'dj3700',
            ord: '<random>',
          },
          {
            url: '/th/th/printers/ink-advantage.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpia01',
            ord: '<random>',
          },
          {
            url: '/cn/zh/printers/ink-advantage.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpia01',
            ord: '<random>',
          },
          {
            url: '/in/en/printers/ink-advantage.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpia01',
            ord: '<random>',
          },
          {
            url: '/ph/en/printers/ink-advantage.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpia01',
            ord: '<random>',
          },
          {
            url: '/my/en/printers/ink-advantage.html?jumpid=ba_7v9eny32pt',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: 'hpia01',
            ord: '<random>',
          },
        ]);
      },
      2646828,
      431764
    );
    Bootstrapper.bindDependencyDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function () {
          var tagMsg = '[Marketing] MTR-SC-547 DCM Floodlight Tag';
          if (!window._A.optOut(tagMsg))
            try {
              var insertTag = function (src) {
                var iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = src;
                document.body.appendChild(iframe);
              };
              var tagList = [
                {
                  src:
                    '//9141230.fls.doubleclick.net/activityi;src=9141230;type=in_om00;cat=in_om000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?',
                  path:
                    'hp.com/in/en/commercial-printers/latex-printers/applications-brief-thanks.html',
                },
                {
                  src:
                    '//9141230.fls.doubleclick.net/activityi;src=9141230;type=in_om00;cat=in_om0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?',
                  path: 'hp.com/in/en/commercial-printers/latex-printers/print-samples-form.html',
                },
                {
                  src:
                    '//9141230.fls.doubleclick.net/activityi;src=9141230;type=in_om00;cat=in_om00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?',
                  path:
                    'hp.com/in/en/commercial-printers/latex-printers/print-samples-form-thanks.html',
                },
              ];
              for (var i = 0; i < tagList.length; i++)
                if (location.href.toLowerCase().includes(tagList[i].path.toLowerCase()))
                  insertTag(tagList[i].src);
            } catch (e) {
              console.log(tagMsg, ' issue log:', e);
            }
        })();
      },
      2804938,
      [3375270],
      591430,
      [371978]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            new Image().src = url;
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (
              tag.isValid &&
              (lcCurrentURL.indexOf(tag.url) !== -1 ||
                tag.url.indexOf(location.hostname + location.pathname) !== -1)
            )
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/au/en/supplies/anti-counterfeit.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '04supphp',
            ord: '<random>',
          },
          {
            url: '/au/en/printers/business-printers.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '06supphp',
            ord: '<random>',
          },
          {
            url: '/au/en/supplies/environment.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '05supphp',
            ord: '<random>',
          },
          {
            url: '/au/en/supplies/ink.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '02supphp',
            ord: '<random>',
          },
          {
            url: '/au/en/supplies/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '01supphp',
            ord: '<random>',
          },
          {
            url: '/au/en/supplies/toner.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '03supphp',
            ord: '<random>',
          },
          {
            url: '/nz/en/supplies/anti-counterfeit.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '04supphp',
            ord: '<random>',
          },
          {
            url: '/nz/en/printers/business-printers.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '06supphp',
            ord: '<random>',
          },
          {
            url: '/nz/en/supplies/environment.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '05supphp',
            ord: '<random>',
          },
          {
            url: '/nz/en/supplies/ink.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '02supphp',
            ord: '<random>',
          },
          {
            url: '/nz/en/supplies/ink-toner-paper.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '01supphp',
            ord: '<random>',
          },
          {
            url: '/nz/en/supplies/toner.html',
            isValid: true,
            src: '4887624',
            type: 'hpprint0',
            cat: '03supphp',
            ord: '<random>',
          },
        ]);
      },
      2646834,
      441668
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (lcCurrentURL.indexOf(tag.url.toLowerCase()) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/mx/es/premium/laptops/index.html?jumpid=ba_rb1sx4m9ke',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy0',
            ord: '<random>',
          },
          {
            url: '/mx/es/campaigns/elite-slice/overview.html?jumpid=ba_6mh1rsdj2y',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy003',
            ord: '<random>',
          },
          {
            url: '/mx/es/ads/elitebook-folio/overview.html?jumpid=ba_wehxv8gni1',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy009',
            ord: '<random>',
          },
          {
            url: '/mx/es/ads/elitex2-1012/elite_x2_1012.html?jumpid=ba_sebw15xh6n',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00e',
            ord: '<random>',
          },
          {
            url: '/mx/es/ads/elitex3/overview.html?jumpid=ba_e9bjuxhamt',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00k',
            ord: '<random>',
          },
          {
            url: '/ar/es/campaigns/elite-slice/overview.html?jumpid=ba_e2w34vtdhb',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy007',
            ord: '<random>',
          },
          {
            url: '/ar/es/ads/elitebook-folio/overview.html?jumpid=ba_5g9hruasky',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00c',
            ord: '<random>',
          },
          {
            url: '/ar/es/ads/elitex2-1012/elite_x2_1012.html?jumpid=ba_8wcx9az1h7',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00i',
            ord: '<random>',
          },
          {
            url: '/ar/es/ads/elitex3/overview.html?jumpid=ba_bcfdeig5mz',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00o',
            ord: '<random>',
          },
          {
            url: '/co/es/premium/laptops/index.html?jumpid=ba_jcfma9pske',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00',
            ord: '<random>',
          },
          {
            url: '/co/es/campaigns/elite-slice/overview.html?jumpid=ba_reg8vsdkzp',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy004',
            ord: '<random>',
          },
          {
            url: '/co/es/ads/elitex2-1012/elite_x2_1012.html?jumpid=ba_wzxg3bcfhq',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00f',
            ord: '<random>',
          },
          {
            url: '/co/es/ads/elitebook-folio/overview.html?jumpid=ba_baki8zrv2j',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00-',
            ord: '<random>',
          },
          {
            url: '/co/es/ads/elitex3/overview.html?jumpid=ba_ucq471af3k',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00l',
            ord: '<random>',
          },
          {
            url: '/cl/es/premium/laptops/index.html?jumpid=ba_72byri18ht',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy000',
            ord: '<random>',
          },
          {
            url: '/cl/es/campaigns/elite-slice/overview.html?jumpid=ba_7nh1ds2yct',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy005',
            ord: '<random>',
          },
          {
            url: '/cl/es/ads/elitebook-folio/overview.html?jumpid=ba_qsw3ymj5ch',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00a',
            ord: '<random>',
          },
          {
            url: '/cl/es/ads/elitex2-1012/elite_x2_1012.html?jumpid=ba_ksi5q6pr1j',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00g',
            ord: '<random>',
          },
          {
            url: '/cl/es/ads/elitex3/overview.html?jumpid=ba_kcvewhyzpj',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00m',
            ord: '<random>',
          },
          {
            url: '/pe/es/premium/laptops/index.html?jumpid=ba_xkf3vp75t9',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy001',
            ord: '<random>',
          },
          {
            url: '/pe/es/campaigns/elite-slice/overview.html?jumpid=ba_94gwfs8ndk',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy006',
            ord: '<random>',
          },
          {
            url: '/pe/es/ads/elitebook-folio/overview.html?jumpid=ba_8das12hi6g',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00b',
            ord: '<random>',
          },
          {
            url: '/pe/es/ads/elitex2-1012/elite_x2_1012.html?jumpid=ba_rwm8yexbz3',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00h',
            ord: '<random>',
          },
          {
            url: '/pe/es/ads/elitex3/overview.html?jumpid=ba_2wc318uj5e',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00n',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/premium/laptops/index.html?jumpid=ba_ihras5yq3c',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy002',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/campaigns/elite-slice/overview.html?jumpid=ba_7udjx1wzy8',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy008',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/ads/elitebook-folio/overview.html?jumpid=ba_xtfr1vu9pb',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00d',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/ads/elitex2-1012/elite_x2_1012.html?jumpid=ba_psw8ix34fu',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00j',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/ads/elitex3/overview.html?jumpid=ba_29hxsq4dn6',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00p',
            ord: '<random>',
          },
          {
            url: '/mx/es/campaigns/spectre-x360/overview.html?jumpid=dep9shytxfjp2',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00t',
            ord: '<random>',
          },
          {
            url: '/mx/es/campaigns/envyaio/overview.html?jumpid=ba_tx8d5km4sw',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00y',
            ord: '<random>',
          },
          {
            url: '/co/es/campaigns/envyaio/overview.html?jumpid=ba_a7bkzmvsq2',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00w',
            ord: '<random>',
          },
          {
            url: '/co/es/campaigns/spectre-x360/overview.html?jumpid=depzb37ah5x1w',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00r',
            ord: '<random>',
          },
          {
            url: '/cl/es/campaigns/envyaio/overview.html?jumpid=ba_7z63rit8g4',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00v',
            ord: '<random>',
          },
          {
            url: '/cl/es/campaigns/spectre-x360/overview.html?jumpid=depjs7gxb3ud4',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00q',
            ord: '<random>',
          },
          {
            url: '/pe/es/campaigns/envyaio/overview.html?jumpid=ba_8mwpvbaxcy',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00z',
            ord: '<random>',
          },
          {
            url: '/pe/es/campaigns/spectre-x360/overview.html?jumpid=depxjg1z9a6us',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00u',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/campaigns/envyaio/overview.html?jumpid=ba_26ativyuq9',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00x',
            ord: '<random>',
          },
          {
            url:
              '/lamerica_nsc_cnt_amer/es/campaigns/spectre-x360/overview.html?jumpid=depb98i6vsc2r',
            isValid: true,
            src: '2505778',
            type: 'landing',
            cat: 'q1_fy00s',
            ord: '<random>',
          },
        ]);
      },
      2646842,
      449615
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (lcCurrentURL.indexOf(tag.url) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/mx/es/ads/supplies/overview.html?jumpid=ba_1derf9i8at',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'ink_l0',
            ord: '<random>',
          },
          {
            url: '/ar/es/ads/supplies/overview.html?jumpid=ba_thfjbrpcy8',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'ink_l00',
            ord: '<random>',
          },
          {
            url: '/cl/es/ads/supplies/overview.html?jumpid=ba_su1b6xkd97',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'ink_l000',
            ord: '<random>',
          },
          {
            url: '/co/es/ads/supplies/overview.html?jumpid=ba_nx963rchgk',
            isValid: true,
            src: '2565404',
            type: 'hpcdu237',
            cat: 'ink_l0',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/ads/supplies/overview.html?jumpid=ba_cs7m4i5v9g',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'ink_l003',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/ads/supplies/overview.html?jumpid=ba_fvg2p9ry14',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'ink_l002',
            ord: '<random>',
          },
          {
            url: '/lamerica_nsc_cnt_amer/es/ads/supplies/overview.html?jumpid=ba_2dtg3a1rby',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'ink_l004',
            ord: '<random>',
          },
          {
            url: '/pe/es/ads/supplies/overview.html?jumpid=ba_zqcehkmv84',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'ink_l001',
            ord: '<random>',
          },
        ]);
      },
      2646826,
      429709
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function () {
          var tagMsg = 'OptanonFix';
          try {
            var _checkHP_consent = function (fn) {
                var hpeuck = _getHP_cookie('hpeuck_prefs');
                if (!!hpeuck) {
                  var val = hpeuck.split('=').length > 0 ? hpeuck.split('=')[1] : '';
                  fn = fn.toLowerCase().trim();
                  if (fn == 'analytics' && val.length > 1 && val.charAt(1) == '1') return true;
                  else if (fn == 'personalization' && val.length > 2 && val.charAt(2) == '1')
                    return true;
                  else if (fn == 'marketing' && val.length > 3 && val.charAt(3) == '1')
                    return true;
                }
                return false;
              },
              _getHP_cookie = function (nm) {
                var _cookies = document.cookie.split(';');
                if (!!_cookies)
                  for (var ii = 0; ii < _cookies.length; ii++)
                    if (_cookies[ii].indexOf(nm) >= 0) return _cookies[ii].trim();
              },
              _getHP_cookieSegment = function (groups, seg) {
                for (var jj = 0; jj < groups.length; jj++)
                  if ((_a = groups[jj].trim()).indexOf(seg) == 0) return _a;
                return null;
              },
              _setHPeuck_prefs = function () {
                _ocCookie = _getHP_cookie('OptanonConsent');
                if (!!_ocCookie) {
                  console.log('OC Cookie: ' + _ocCookie);
                  var _groups = _ocCookie.split('&');
                  if (!!_groups) {
                    var _group = _getHP_cookieSegment(_groups, 'groups');
                    var _ts = _getHP_cookieSegment(_groups, 'datestamp');
                    _group = !!_group ? decodeURIComponent(_group) : _group;
                    _ts = !!_ts ? decodeURIComponent(_ts) : _ts;
                    var _euckCookie = _getHP_cookie('hpeuck_prefs');
                    if (!!_group) {
                      var _tsDate = null;
                      var _tsx = _ts.split('=');
                      if (!!_tsx && _tsx.length > 1)
                        _tsDate = new Date(_tsx[1].replace(/\+/g, ' '));
                      var _date = new Date();
                      if (
                        !!!_euckCookie ||
                        !!!_tsDate ||
                        (_tsDate.getDate() == _date.getDate() &&
                          _tsDate.getHours() == _date.getHours())
                      ) {
                        console.log('OC Cookie: Consent Dates Have Changed');
                        var _lr = _group.split('=');
                        if (_lr.length > 1) {
                          _nv = _lr[1].split(',');
                          console.log('OptanonConsent: ' + _nv);
                          var _ck = ['1', '1', '1', '1'];
                          for (var kk = 0; kk < _nv.length && kk < 4; kk++) {
                            var l = parseInt(_nv[kk].split(':')[0]);
                            var r = _nv[kk].split(':')[1];
                            if (l > 0 && l < 5) _ck[l - 1] = r;
                          }
                          _date.setTime(_date.getTime() + 365 * 24 * 60 * 60 * 1000);
                          _euckCookie =
                            'hpeuck_prefs=' +
                            _ck.toString().replace(/,/g, '') +
                            '; expires=' +
                            _date.toUTCString() +
                            '; path=/; domain=hp.com';
                          document.cookie = _euckCookie;
                          console.log('HP euck_prefs: ' + _euckCookie);
                        }
                      }
                    }
                  }
                }
              };
            _setHPeuck_prefs();
          } catch (e) {
            console.log(tagMsg, ' issue log:', e);
          }
        })();
      },
      2572495,
      557389
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function () {
          try {
            var blacklist = [
                'www2.hp.com',
                'register.hp.com',
                'parts.hp.com',
                'hpe.com',
                'reinvent.hp.com',
                '123.hp.com',
                'hpp12.passport.hp.com',
                'www3.hp.com',
                'hp.com/country/us/en/welcome.html',
                'welcome.hp.com',
              ],
              eloqua_blacklisted = false;
            for (var i = 0; i < blacklist.length; i++)
              if (location.href.indexOf(blacklist[i]) > -1) {
                eloqua_blacklisted = true;
                console.log('Eloqua blacklisted');
                break;
              }
            if (window._A.optOut('Eloqua', 2) || eloqua_blacklisted) return;
            console.log('.: Eloqua addition...');
            window._elqQ = window._elqQ || [];
            _elqQ.push(['elqSetSiteId', '843062548']);
            _elqQ.push(['elqUseFirstPartyCookie', 'enable.hp.com']);
            _elqQ.push(['elqTrackPageView']);
            _elqQ.push(['elqSetSiteId', '704062726']);
            _elqQ.push(['elqTrackPageView']);
            function async_load () {
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = '//img04.en25.com/i/elqCfg.min.js';
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
              console.log('.: Eloqua addition...ASYNC_LOAD() function');
            }
            if (window.addEventListener) window.addEventListener('load', async_load, false);
            else if (window.attachEvent) window.attachEvent('onload', async_load);
          } catch (e) {
            console.log('Eloqua issue log:', e);
          }
        })();
      },
      3228337,
      [3375270],
      395266,
      [371978]
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          var tagMsg = '[Marketing] MTR-SC-632 Universal Twitter Tag';
          if (!window._A.optOut(tagMsg))
            try {
              var insertTag = function (src) {
                var img = document.createElement('img');
                img.setAttribute('height', '1');
                img.setAttribute('width', '1');
                img.style.display = 'none';
                img.setAttribute('src', src);
                document.body.appendChild(img);
              };
              insertTag(
                '//analytics.twitter.com/i/adsct?p_id=Twitter&p_user_id=0&txn_id=o1k62&events=%5B%5B%22PageView%22%2Cnull%5D%5D&tw_sale_amount=0&tw_order_quantity=0'
              );
              insertTag(
                '//t.co/i/adsct?p_id=Twitter&p_user_id=0&txn_id=o1k62&events=%5B%5B%22PageView%22%2Cnull%5D%5D&tw_sale_amount=0&tw_order_quantity=0'
              );
            } catch (e) {
              console.log(tagMsg, ' issue log:', e);
            }
        })();
      },
      2830736,
      [3375270],
      594591,
      [371978]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function (tagList) {
          function insertTag (src, type, cat, ord, num) {
            function replaceValueOrRandom (template, name, value) {
              var random = (Math.random() + '') * 10000000000000,
                tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
              return template.replace(name, tmp);
            }
            var srcTemplate =
                '//###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
              url = srcTemplate
                .replace('###SRC###', src)
                .replace('###TYPE###', type)
                .replace('###CAT###', cat)
                .replace('###SRC###', src);
            url = replaceValueOrRandom(url, '###ORD###', ord || '');
            url = replaceValueOrRandom(url, '###NUM###', num || '');
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);
          }
          var lcCurrentURL = location.href.toLowerCase();
          for (var i = 0; i < tagList.length; i++) {
            var tag = tagList[i];
            if (lcCurrentURL.indexOf(tag.url.toLowerCase()) !== -1)
              insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
          }
        })([
          {
            url: '/br/pt/printers/deskjet3700.html?jumpid=ba_a6cf48upy5',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'hp_q4000',
            ord: '<random>',
          },
          {
            url: '/cl/es/printers/deskjet3700.html?jumpid=ba_1gjmbkins8',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'hp_q400',
            ord: '<random>',
          },
          {
            url: '/mx/es/printers/deskjet3700.html?jumpid=ba_m4chnqz8r9',
            isValid: true,
            src: '2565404',
            type: 'landi0',
            cat: 'hp_q40',
            ord: '<random>',
          },
        ]);
      },
      2648295,
      447479
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function visitorClosure () {
          if (window._A && _A.constructor == Object && _A.isO(window._A.section)) {
            if (!_A.isF(window.Visitor) && (!_A.optOut(1) || !_A.optOut(2) || !_A.optOut(3))) {
              var e = (function () {
                function e (t) {
                  return (e =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        })(t);
                }
                function t (e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                function n () {
                  return {
                    callbacks: {},
                    add: function (e, t) {
                      this.callbacks[e] = this.callbacks[e] || [];
                      var n = this.callbacks[e].push(t) - 1,
                        i = this;
                      return function () {
                        i.callbacks[e].splice(n, 1);
                      };
                    },
                    execute: function (e, t) {
                      if (this.callbacks[e]) {
                        (t = void 0 === t ? [] : t), (t = t instanceof Array ? t : [t]);
                        try {
                          for (; this.callbacks[e].length; ) {
                            var n = this.callbacks[e].shift();
                            'function' == typeof n
                              ? n.apply(null, t)
                              : n instanceof Array && n[1].apply(n[0], t);
                          }
                          delete this.callbacks[e];
                        } catch (e) {}
                      }
                    },
                    executeAll: function (e, t) {
                      (t || (e && !j.isObjectEmpty(e))) &&
                        Object.keys(this.callbacks).forEach(function (t) {
                          var n = void 0 !== e[t] ? e[t] : '';
                          this.execute(t, n);
                        }, this);
                    },
                    hasCallbacks: function () {
                      return Boolean(Object.keys(this.callbacks).length);
                    },
                  };
                }
                function i (e) {
                  for (var t = /^\d+$/, n = 0, i = e.length; n < i; n++)
                    if (!t.test(e[n])) return !1;
                  return !0;
                }
                function r (e, t) {
                  for (; e.length < t.length; ) e.push('0');
                  for (; t.length < e.length; ) t.push('0');
                }
                function a (e, t) {
                  for (var n = 0; n < e.length; n++) {
                    var i = parseInt(e[n], 10),
                      r = parseInt(t[n], 10);
                    if (i > r) return 1;
                    if (r > i) return -1;
                  }
                  return 0;
                }
                function o (e, t) {
                  if (e === t) return 0;
                  var n = e.toString().split('.'),
                    o = t.toString().split('.');
                  return i(n.concat(o)) ? (r(n, o), a(n, o)) : NaN;
                }
                function s (e) {
                  return e === Object(e) && 0 === Object.keys(e).length;
                }
                function l (e) {
                  return 'function' == typeof e || (e instanceof Array && e.length);
                }
                function c () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : function () {
                            return !0;
                          };
                  (this.log = he('log', e, t)),
                    (this.warn = he('warn', e, t)),
                    (this.error = he('error', e, t));
                }
                function u () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.isEnabled,
                    n = e.cookieName,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = i.cookies;
                  return t && n && r
                    ? {
                        remove: function () {
                          r.remove(n);
                        },
                        get: function () {
                          var e = r.get(n),
                            t = {};
                          try {
                            t = JSON.parse(e);
                          } catch (e) {
                            t = {};
                          }
                          return t;
                        },
                        set: function (e, t) {
                          (t = t || {}),
                            r.set(n, JSON.stringify(e), {
                              domain: t.optInCookieDomain || '',
                              cookieLifetime: t.optInStorageExpiry || 34190000,
                              expires: !0,
                            });
                        },
                      }
                    : { get: Te, set: Te, remove: Te };
                }
                function d (e) {
                  (this.name = this.constructor.name),
                    (this.message = e),
                    'function' == typeof Error.captureStackTrace
                      ? Error.captureStackTrace(this, this.constructor)
                      : (this.stack = new Error(e).stack);
                }
                function f () {
                  function e (e, t) {
                    var n = ve(e);
                    return n.length
                      ? n.every(function (e) {
                          return !!t[e];
                        })
                      : De(t);
                  }
                  function t () {
                    M(y),
                      O(le.COMPLETE),
                      _(h.status, h.permissions),
                      m.set(h.permissions, { optInCookieDomain: l, optInStorageExpiry: c }),
                      C.execute(Ne);
                  }
                  function n (e) {
                    return function (n, i) {
                      if (!Se(n))
                        throw new Error(
                          '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                        );
                      return O(le.CHANGED), Object.assign(y, be(ve(n), e)), i || t(), h;
                    };
                  }
                  var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = i.doesOptInApply,
                    a = i.previousPermissions,
                    o = i.preOptInApprovals,
                    s = i.isOptInStorageEnabled,
                    l = i.optInCookieDomain,
                    c = i.optInStorageExpiry,
                    d = i.isIabContext,
                    f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    g = f.cookies,
                    p = Le(a);
                  Pe(p, 'Invalid `previousPermissions`!'), Pe(o, 'Invalid `preOptInApprovals`!');
                  var m = u({ isEnabled: !!s, cookieName: 'adobeujs-optin' }, { cookies: g }),
                    h = this,
                    _ = se(h),
                    C = ge(),
                    I = Oe(p),
                    v = Oe(o),
                    D = m.get(),
                    S = {},
                    b = (function (e, t) {
                      return Me(e) || (t && Me(t)) ? le.COMPLETE : le.PENDING;
                    })(I, D),
                    A = (function (e, t, n) {
                      var i = be(fe, !r);
                      return r ? Object.assign({}, i, e, t, n) : i;
                    })(v, I, D),
                    y = Ae(A),
                    O = function (e) {
                      return (b = e);
                    },
                    M = function (e) {
                      return (A = e);
                    };
                  (h.deny = n(!1)),
                    (h.approve = n(!0)),
                    (h.denyAll = h.deny.bind(h, fe)),
                    (h.approveAll = h.approve.bind(h, fe)),
                    (h.isApproved = function (t) {
                      return e(t, h.permissions);
                    }),
                    (h.isPreApproved = function (t) {
                      return e(t, v);
                    }),
                    (h.fetchPermissions = function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t ? h.on(le.COMPLETE, e) : Te;
                      return (
                        !r || (r && h.isComplete) || !!o
                          ? setTimeout(e(h.permissions), 0)
                          : t ||
                            C.add(Ne, function () {
                              return e(h.permissions);
                            }),
                        n
                      );
                    }),
                    (h.complete = function () {
                      h.status === le.CHANGED && t();
                    }),
                    (h.registerPlugin = function (e) {
                      if (!e || !e.name || 'function' != typeof e.onRegister) throw new Error(xe);
                      S[e.name] || ((S[e.name] = e), e.onRegister.call(e, h));
                    }),
                    (h.execute = Fe(S)),
                    Object.defineProperties(h, {
                      permissions: {
                        get: function () {
                          return A;
                        },
                      },
                      status: {
                        get: function () {
                          return b;
                        },
                      },
                      Categories: {
                        get: function () {
                          return ce;
                        },
                      },
                      doesOptInApply: {
                        get: function () {
                          return !!r;
                        },
                      },
                      isPending: {
                        get: function () {
                          return h.status === le.PENDING;
                        },
                      },
                      isComplete: {
                        get: function () {
                          return h.status === le.COMPLETE;
                        },
                      },
                      __plugins: {
                        get: function () {
                          return Object.keys(S);
                        },
                      },
                      isIabContext: {
                        get: function () {
                          return d;
                        },
                      },
                    });
                }
                function g (e, t) {
                  function n () {
                    (r = null), e.call(e, new d('The call took longer than you wanted!'));
                  }
                  function i () {
                    r && (clearTimeout(r), e.apply(e, arguments));
                  }
                  if (void 0 === t) return e;
                  var r = setTimeout(n, t);
                  return i;
                }
                function p () {
                  if (window.__cmp) return window.__cmp;
                  var e = window;
                  if (e === window.top) return void Ce.error('__cmp not found');
                  for (var t; !t; ) {
                    e = e.parent;
                    try {
                      e.frames.__cmpLocator && (t = e);
                    } catch (e) {}
                    if (e === window.top) break;
                  }
                  if (!t) return void Ce.error('__cmp not found');
                  var n = {};
                  return (
                    (window.__cmp = function (e, i, r) {
                      var a = Math.random() + '',
                        o = { __cmpCall: { command: e, parameter: i, callId: a } };
                      (n[a] = r), t.postMessage(o, '*');
                    }),
                    window.addEventListener(
                      'message',
                      function (e) {
                        var t = e.data;
                        if ('string' == typeof t)
                          try {
                            t = JSON.parse(e.data);
                          } catch (e) {}
                        if (t.__cmpReturn) {
                          var i = t.__cmpReturn;
                          n[i.callId] &&
                            (n[i.callId](i.returnValue, i.success), delete n[i.callId]);
                        }
                      },
                      !1
                    ),
                    window.__cmp
                  );
                }
                function m () {
                  var e = this;
                  (e.name = 'iabPlugin'), (e.version = '0.0.1');
                  var t = ge(),
                    n = { allConsentData: null },
                    i = function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                      return (n[e] = t);
                    };
                  (e.fetchConsentData = function (e) {
                    var t = e.callback,
                      n = e.timeout,
                      i = g(t, n);
                    r({ callback: i });
                  }),
                    (e.isApproved = function (e) {
                      var t = e.callback,
                        i = e.category,
                        a = e.timeout;
                      if (n.allConsentData)
                        return t(
                          null,
                          s(i, n.allConsentData.vendorConsents, n.allConsentData.purposeConsents)
                        );
                      var o = g(function (e) {
                        var n =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          r = n.vendorConsents,
                          a = n.purposeConsents;
                        t(e, s(i, r, a));
                      }, a);
                      r({ category: i, callback: o });
                    }),
                    (e.onRegister = function (t) {
                      var n = Object.keys(ue),
                        i = function (e) {
                          var i =
                              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = i.purposeConsents,
                            a = i.gdprApplies,
                            o = i.vendorConsents;
                          !e &&
                            a &&
                            o &&
                            r &&
                            (n.forEach(function (e) {
                              var n = s(e, o, r);
                              t[n ? 'approve' : 'deny'](e, !0);
                            }),
                            t.complete());
                        };
                      e.fetchConsentData({ callback: i });
                    });
                  var r = function (e) {
                      var r = e.callback;
                      if (n.allConsentData) return r(null, n.allConsentData);
                      t.add('FETCH_CONSENT_DATA', r);
                      var s = {};
                      o(function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          r = e.purposeConsents,
                          o = e.gdprApplies,
                          l = e.vendorConsents;
                        (arguments.length > 1 ? arguments[1] : void 0) &&
                          ((s = { purposeConsents: r, gdprApplies: o, vendorConsents: l }),
                          i('allConsentData', s)),
                          a(function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            (arguments.length > 1 ? arguments[1] : void 0) &&
                              ((s.consentString = e.consentData), i('allConsentData', s)),
                              t.execute('FETCH_CONSENT_DATA', [null, n.allConsentData]);
                          });
                      });
                    },
                    a = function (e) {
                      var t = p();
                      t && t('getConsentData', null, e);
                    },
                    o = function (e) {
                      var t = Re(ue),
                        n = p();
                      n && n('getVendorConsents', t, e);
                    },
                    s = function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = !!t[ue[e]];
                      return (
                        i &&
                        (function () {
                          return de[e].every(function (e) {
                            return n[e];
                          });
                        })()
                      );
                    };
                }
                function h (e, t, n) {
                  var i = null == e ? void 0 : e[t];
                  return void 0 === i ? n : i;
                }
                var _ =
                  'undefined' != typeof globalThis
                    ? globalThis
                    : 'undefined' != typeof window
                    ? window
                    : 'undefined' != typeof global
                    ? global
                    : 'undefined' != typeof self
                    ? self
                    : {};
                Object.assign =
                  Object.assign ||
                  function (e) {
                    for (var t, n, i = 1; i < arguments.length; ++i) {
                      n = arguments[i];
                      for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                    }
                    return e;
                  };
                var C,
                  I,
                  v = { HANDSHAKE: 'HANDSHAKE', GETSTATE: 'GETSTATE', PARENTSTATE: 'PARENTSTATE' },
                  D = {
                    MCMID: 'MCMID',
                    MCAID: 'MCAID',
                    MCAAMB: 'MCAAMB',
                    MCAAMLH: 'MCAAMLH',
                    MCOPTOUT: 'MCOPTOUT',
                    CUSTOMERIDS: 'CUSTOMERIDS',
                  },
                  S = {
                    MCMID: 'getMarketingCloudVisitorID',
                    MCAID: 'getAnalyticsVisitorID',
                    MCAAMB: 'getAudienceManagerBlob',
                    MCAAMLH: 'getAudienceManagerLocationHint',
                    MCOPTOUT: 'getOptOut',
                    ALLFIELDS: 'getVisitorValues',
                  },
                  b = { CUSTOMERIDS: 'getCustomerIDs' },
                  A = {
                    MCMID: 'getMarketingCloudVisitorID',
                    MCAAMB: 'getAudienceManagerBlob',
                    MCAAMLH: 'getAudienceManagerLocationHint',
                    MCOPTOUT: 'getOptOut',
                    MCAID: 'getAnalyticsVisitorID',
                    CUSTOMERIDS: 'getCustomerIDs',
                    ALLFIELDS: 'getVisitorValues',
                  },
                  y = { MC: 'MCMID', A: 'MCAID', AAM: 'MCAAMB' },
                  O = {
                    MCMID: 'MCMID',
                    MCOPTOUT: 'MCOPTOUT',
                    MCAID: 'MCAID',
                    MCAAMLH: 'MCAAMLH',
                    MCAAMB: 'MCAAMB',
                  },
                  M = { UNKNOWN: 0, AUTHENTICATED: 1, LOGGED_OUT: 2 },
                  k = { GLOBAL: 'global' },
                  E = {
                    MESSAGES: v,
                    STATE_KEYS_MAP: D,
                    ASYNC_API_MAP: S,
                    SYNC_API_MAP: b,
                    ALL_APIS: A,
                    FIELDGROUP_TO_FIELD: y,
                    FIELDS: O,
                    AUTH_STATE: M,
                    OPT_OUT: k,
                  },
                  T = E.STATE_KEYS_MAP,
                  L = function (e) {
                    function t () {}
                    function n (t, n) {
                      var i = this;
                      return function () {
                        var r = e(0, t),
                          a = {};
                        return (a[t] = r), i.setStateAndPublish(a), n(r), r;
                      };
                    }
                    var i = this;
                    (this.getMarketingCloudVisitorID = function (e) {
                      e = e || t;
                      var i = this.findField(T.MCMID, e),
                        r = n.call(this, T.MCMID, e);
                      return void 0 !== i ? i : r();
                    }),
                      (this.getVisitorValues = function (e) {
                        i.getMarketingCloudVisitorID(function (t) {
                          e({ MCMID: t });
                        });
                      });
                  },
                  P = E.MESSAGES,
                  w = E.ASYNC_API_MAP,
                  R = E.SYNC_API_MAP,
                  F = function () {
                    function e () {}
                    function t (e, t) {
                      var n = this;
                      return function () {
                        return n.callbackRegistry.add(e, t), n.messageParent(P.GETSTATE), '';
                      };
                    }
                    function n (n) {
                      this[w[n]] = function (i) {
                        i = i || e;
                        var r = this.findField(n, i),
                          a = t.call(this, n, i);
                        return void 0 !== r ? r : a();
                      };
                    }
                    function i (t) {
                      this[R[t]] = function () {
                        return this.findField(t, e) || {};
                      };
                    }
                    Object.keys(w).forEach(n, this), Object.keys(R).forEach(i, this);
                  },
                  N = E.ASYNC_API_MAP,
                  x = function () {
                    Object.keys(N).forEach(function (e) {
                      this[N[e]] = function (t) {
                        this.callbackRegistry.add(e, t);
                      };
                    }, this);
                  },
                  j = (function (e, t) {
                    return (t = { exports: {} }), e(t, t.exports), t.exports;
                  })(function (t, n) {
                    (n.isObjectEmpty = function (e) {
                      return e === Object(e) && 0 === Object.keys(e).length;
                    }),
                      (n.isValueEmpty = function (e) {
                        return '' === e || n.isObjectEmpty(e);
                      }),
                      (n.getIeVersion = function () {
                        if (document.documentMode) return document.documentMode;
                        for (var e = 7; e > 4; e--) {
                          var t = document.createElement('div');
                          if (
                            ((t.innerHTML = '<!--[if IE ' + e + ']><span></span><![endif]-->'),
                            t.getElementsByTagName('span').length)
                          )
                            return (t = null), e;
                          t = null;
                        }
                        return null;
                      }),
                      (n.encodeAndBuildRequest = function (e, t) {
                        return e.map(encodeURIComponent).join(t);
                      }),
                      (n.isObject = function (t) {
                        return null !== t && 'object' === e(t) && !1 === Array.isArray(t);
                      }),
                      (n.defineGlobalNamespace = function () {
                        return (
                          (window.adobe = n.isObject(window.adobe) ? window.adobe : {}),
                          window.adobe
                        );
                      }),
                      (n.pluck = function (e, t) {
                        return t.reduce(function (t, n) {
                          return e[n] && (t[n] = e[n]), t;
                        }, Object.create(null));
                      }),
                      (n.parseOptOut = function (e, t, n) {
                        t ||
                          ((t = n),
                          e.d_optout && e.d_optout instanceof Array && (t = e.d_optout.join(',')));
                        var i = parseInt(e.d_ottl, 10);
                        return isNaN(i) && (i = 7200), { optOut: t, d_ottl: i };
                      }),
                      (n.normalizeBoolean = function (e) {
                        var t = e;
                        return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
                      });
                  }),
                  V =
                    (j.isObjectEmpty,
                    j.isValueEmpty,
                    j.getIeVersion,
                    j.encodeAndBuildRequest,
                    j.isObject,
                    j.defineGlobalNamespace,
                    j.pluck,
                    j.parseOptOut,
                    j.normalizeBoolean,
                    n),
                  U = E.MESSAGES,
                  H = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                  B = function (e, t) {
                    (this.parse = function (e) {
                      try {
                        var t = {};
                        return (
                          e.data.split('|').forEach(function (e, n) {
                            if (void 0 !== e) t[H[n]] = 2 !== n ? e : JSON.parse(e);
                          }),
                          t
                        );
                      } catch (e) {}
                    }),
                      (this.isInvalid = function (n) {
                        var i = this.parse(n);
                        if (!i || Object.keys(i).length < 2) return !0;
                        var r = e !== i.orgID,
                          a = !t || n.origin !== t,
                          o = -1 === Object.keys(U).indexOf(i.prefix);
                        return r || a || o;
                      }),
                      (this.send = function (n, i, r) {
                        var a = i + '|' + e;
                        r && r === Object(r) && (a += '|' + JSON.stringify(r));
                        try {
                          n.postMessage(a, t);
                        } catch (e) {}
                      });
                  },
                  G = E.MESSAGES,
                  q = function (e, t, n, i) {
                    function r (e) {
                      Object.assign(g, e);
                    }
                    function a (e) {
                      Object.assign(g.state, e),
                        Object.assign(g.state.ALLFIELDS, e),
                        g.callbackRegistry.executeAll(g.state);
                    }
                    function o (e) {
                      if (!h.isInvalid(e)) {
                        m = !1;
                        var t = h.parse(e);
                        g.setStateAndPublish(t.state);
                      }
                    }
                    function s (e) {
                      !m && p && ((m = !0), h.send(i, e));
                    }
                    function l () {
                      r(new L(n._generateID)),
                        g.getMarketingCloudVisitorID(),
                        g.callbackRegistry.executeAll(g.state, !0),
                        _.removeEventListener('message', c);
                    }
                    function c (e) {
                      if (!h.isInvalid(e)) {
                        var t = h.parse(e);
                        (m = !1),
                          _.clearTimeout(g._handshakeTimeout),
                          _.removeEventListener('message', c),
                          r(new F(g)),
                          _.addEventListener('message', o),
                          g.setStateAndPublish(t.state),
                          g.callbackRegistry.hasCallbacks() && s(G.GETSTATE);
                      }
                    }
                    function u () {
                      p && postMessage
                        ? (_.addEventListener('message', c),
                          s(G.HANDSHAKE),
                          (g._handshakeTimeout = setTimeout(l, 250)))
                        : l();
                    }
                    function d () {
                      _.s_c_in || ((_.s_c_il = []), (_.s_c_in = 0)),
                        (g._c = 'Visitor'),
                        (g._il = _.s_c_il),
                        (g._in = _.s_c_in),
                        (g._il[g._in] = g),
                        _.s_c_in++;
                    }
                    function f () {
                      function e (e) {
                        0 !== e.indexOf('_') &&
                          'function' == typeof n[e] &&
                          (g[e] = function () {});
                      }
                      Object.keys(n).forEach(e),
                        (g.getSupplementalDataID = n.getSupplementalDataID),
                        (g.isAllowed = function () {
                          return !0;
                        });
                    }
                    var g = this,
                      p = t.whitelistParentDomain;
                    (g.state = { ALLFIELDS: {} }),
                      (g.version = n.version),
                      (g.marketingCloudOrgID = e),
                      (g.cookieDomain = n.cookieDomain || ''),
                      (g._instanceType = 'child');
                    var m = !1,
                      h = new B(e, p);
                    (g.callbackRegistry = V()),
                      (g.init = function () {
                        d(), f(), r(new x(g)), u();
                      }),
                      (g.findField = function (e, t) {
                        if (g.state[e]) return t(g.state[e]), g.state[e];
                      }),
                      (g.messageParent = s),
                      (g.setStateAndPublish = a);
                  },
                  Y = E.MESSAGES,
                  X = E.ALL_APIS,
                  z = E.ASYNC_API_MAP,
                  W = E.FIELDGROUP_TO_FIELD,
                  J = function (e, t) {
                    function n () {
                      var t = {};
                      return (
                        Object.keys(X).forEach(function (n) {
                          var i = X[n],
                            r = e[i]();
                          j.isValueEmpty(r) || (t[n] = r);
                        }),
                        t
                      );
                    }
                    function i () {
                      var t = [];
                      return (
                        e._loading &&
                          Object.keys(e._loading).forEach(function (n) {
                            if (e._loading[n]) {
                              var i = W[n];
                              t.push(i);
                            }
                          }),
                        t.length ? t : null
                      );
                    }
                    function r (t) {
                      return function n (r) {
                        var a = i();
                        if (a) {
                          var o = z[a[0]];
                          e[o](n, !0);
                        } else t();
                      };
                    }
                    function a (e, i) {
                      var r = n();
                      t.send(e, i, r);
                    }
                    function o (e) {
                      l(e), a(e, Y.HANDSHAKE);
                    }
                    function s (e) {
                      r(function () {
                        a(e, Y.PARENTSTATE);
                      })();
                    }
                    function l (n) {
                      function i (i) {
                        r.call(e, i),
                          t.send(n, Y.PARENTSTATE, { CUSTOMERIDS: e.getCustomerIDs() });
                      }
                      var r = e.setCustomerIDs;
                      e.setCustomerIDs = i;
                    }
                    return function (e) {
                      if (!t.isInvalid(e)) (t.parse(e).prefix === Y.HANDSHAKE ? o : s)(e.source);
                    };
                  },
                  K = function (e, t) {
                    function n (e) {
                      return function (n) {
                        (i[e] = n), r++, r === a && t(i);
                      };
                    }
                    var i = {},
                      r = 0,
                      a = Object.keys(e).length;
                    Object.keys(e).forEach(function (t) {
                      var i = e[t];
                      if (i.fn) {
                        var r = i.args || [];
                        r.unshift(n(t)), i.fn.apply(i.context || null, r);
                      }
                    });
                  },
                  Q = function (e) {
                    var t;
                    if ((!e && _.location && (e = _.location.hostname), (t = e)))
                      if (/^[0-9.]+$/.test(t)) t = '';
                      else {
                        var n =
                            ',ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,',
                          i = t.split('.'),
                          r = i.length - 1,
                          a = r - 1;
                        if (
                          (r > 1 &&
                            i[r].length <= 2 &&
                            (2 === i[r - 1].length || n.indexOf(',' + i[r] + ',') < 0) &&
                            a--,
                          a > 0)
                        )
                          for (t = ''; r >= a; ) (t = i[r] + (t ? '.' : '') + t), r--;
                      }
                    return t;
                  },
                  $ = {
                    compare: o,
                    isLessThan: function (e, t) {
                      return o(e, t) < 0;
                    },
                    areVersionsDifferent: function (e, t) {
                      return 0 !== o(e, t);
                    },
                    isGreaterThan: function (e, t) {
                      return o(e, t) > 0;
                    },
                    isEqual: function (e, t) {
                      return 0 === o(e, t);
                    },
                  },
                  Z = !!_.postMessage,
                  ee = {
                    postMessage: function (e, t, n) {
                      var i = 1;
                      t &&
                        (Z
                          ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                          : t &&
                            (n.location =
                              t.replace(/#.*$/, '') + '#' + +new Date() + i++ + '&' + e));
                    },
                    receiveMessage: function (e, t) {
                      var n;
                      try {
                        Z &&
                          (e &&
                            (n = function (n) {
                              if (
                                ('string' == typeof t && n.origin !== t) ||
                                ('[object Function]' === Object.prototype.toString.call(t) &&
                                  !1 === t(n.origin))
                              )
                                return !1;
                              e(n);
                            }),
                          _.addEventListener
                            ? _[e ? 'addEventListener' : 'removeEventListener']('message', n)
                            : _[e ? 'attachEvent' : 'detachEvent']('onmessage', n));
                      } catch (e) {}
                    },
                  },
                  te = function (e) {
                    var t,
                      n,
                      i = '0123456789',
                      r = '',
                      a = '',
                      o = 8,
                      s = 10,
                      l = 10;
                    if (1 == e) {
                      for (i += 'ABCDEF', t = 0; 16 > t; t++)
                        (n = Math.floor(Math.random() * o)),
                          (r += i.substring(n, n + 1)),
                          (n = Math.floor(Math.random() * o)),
                          (a += i.substring(n, n + 1)),
                          (o = 16);
                      return r + '-' + a;
                    }
                    for (t = 0; 19 > t; t++)
                      (n = Math.floor(Math.random() * s)),
                        (r += i.substring(n, n + 1)),
                        0 === t && 9 == n
                          ? (s = 3)
                          : (1 == t || 2 == t) && 10 != s && 2 > n
                          ? (s = 10)
                          : 2 < t && (s = 10),
                        (n = Math.floor(Math.random() * l)),
                        (a += i.substring(n, n + 1)),
                        0 === t && 9 == n
                          ? (l = 3)
                          : (1 == t || 2 == t) && 10 != l && 2 > n
                          ? (l = 10)
                          : 2 < t && (l = 10);
                    return r + a;
                  },
                  ne = function (e, t) {
                    return {
                      corsMetadata: (function () {
                        var e = 'none',
                          t = !0;
                        return (
                          'undefined' != typeof XMLHttpRequest &&
                            XMLHttpRequest === Object(XMLHttpRequest) &&
                            ('withCredentials' in new XMLHttpRequest()
                              ? (e = 'XMLHttpRequest')
                              : 'undefined' != typeof XDomainRequest &&
                                XDomainRequest === Object(XDomainRequest) &&
                                (t = !1),
                            Object.prototype.toString.call(_.HTMLElement).indexOf('Constructor') >
                              0 && (t = !1)),
                          { corsType: e, corsCookiesEnabled: t }
                        );
                      })(),
                      getCORSInstance: function () {
                        return 'none' === this.corsMetadata.corsType
                          ? null
                          : new _[this.corsMetadata.corsType]();
                      },
                      fireCORS: function (t, n, i) {
                        function r (e) {
                          var n;
                          try {
                            if ((n = JSON.parse(e)) !== Object(n))
                              return void a.handleCORSError(t, null, 'Response is not JSON');
                          } catch (e) {
                            return void a.handleCORSError(t, e, 'Error parsing response as JSON');
                          }
                          try {
                            for (var i = t.callback, r = _, o = 0; o < i.length; o++) r = r[i[o]];
                            r(n);
                          } catch (e) {
                            a.handleCORSError(t, e, 'Error forming callback function');
                          }
                        }
                        var a = this;
                        n && (t.loadErrorHandler = n);
                        try {
                          var o = this.getCORSInstance();
                          o.open('get', t.corsUrl + '&ts=' + new Date().getTime(), !0),
                            'XMLHttpRequest' === this.corsMetadata.corsType &&
                              ((o.withCredentials = !0),
                              (o.timeout = e.loadTimeout),
                              o.setRequestHeader(
                                'Content-Type',
                                'application/x-www-form-urlencoded'
                              ),
                              (o.onreadystatechange = function () {
                                4 === this.readyState &&
                                  200 === this.status &&
                                  r(this.responseText);
                              })),
                            (o.onerror = function (e) {
                              a.handleCORSError(t, e, 'onerror');
                            }),
                            (o.ontimeout = function (e) {
                              a.handleCORSError(t, e, 'ontimeout');
                            }),
                            o.send(),
                            e._log.requests.push(t.corsUrl);
                        } catch (e) {
                          this.handleCORSError(t, e, 'try-catch');
                        }
                      },
                      handleCORSError: function (t, n, i) {
                        e.CORSErrors.push({ corsData: t, error: n, description: i }),
                          t.loadErrorHandler &&
                            ('ontimeout' === i ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1));
                      },
                    };
                  },
                  ie = {
                    POST_MESSAGE_ENABLED: !!_.postMessage,
                    DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                    MILLIS_PER_DAY: 86400000,
                    ADOBE_MC: 'adobe_mc',
                    ADOBE_MC_SDID: 'adobe_mc_sdid',
                    VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                    ADOBE_MC_TTL_IN_MIN: 5,
                    VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                    FIRST_PARTY_SERVER_COOKIE: 's_ecid',
                  },
                  re = function (e, t) {
                    var n = _.document;
                    return {
                      THROTTLE_START: 30000,
                      MAX_SYNCS_LENGTH: 649,
                      throttleTimerSet: !1,
                      id: null,
                      onPagePixels: [],
                      iframeHost: null,
                      getIframeHost: function (e) {
                        if ('string' == typeof e) {
                          var t = e.split('/');
                          return t[0] + '//' + t[2];
                        }
                      },
                      subdomain: null,
                      url: null,
                      getUrl: function () {
                        var t,
                          i = 'http://fast.',
                          r =
                            '?d_nsid=' +
                            e.idSyncContainerID +
                            '#' +
                            encodeURIComponent(n.location.origin);
                        return (
                          this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                          e.loadSSL && (i = e.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                          (t = i + this.subdomain + '.demdex.net/dest5.html' + r),
                          (this.iframeHost = this.getIframeHost(t)),
                          (this.id =
                            'destination_publishing_iframe_' +
                            this.subdomain +
                            '_' +
                            e.idSyncContainerID),
                          t
                        );
                      },
                      checkDPIframeSrc: function () {
                        var t =
                          '?d_nsid=' +
                          e.idSyncContainerID +
                          '#' +
                          encodeURIComponent(n.location.href);
                        'string' == typeof e.dpIframeSrc &&
                          e.dpIframeSrc.length &&
                          ((this.id =
                            'destination_publishing_iframe_' +
                            (e._subdomain || this.subdomain || new Date().getTime()) +
                            '_' +
                            e.idSyncContainerID),
                          (this.iframeHost = this.getIframeHost(e.dpIframeSrc)),
                          (this.url = e.dpIframeSrc + t));
                      },
                      idCallNotProcesssed: null,
                      doAttachIframe: !1,
                      startedAttachingIframe: !1,
                      iframeHasLoaded: null,
                      iframeIdChanged: null,
                      newIframeCreated: null,
                      originalIframeHasLoadedAlready: null,
                      iframeLoadedCallbacks: [],
                      regionChanged: !1,
                      timesRegionChanged: 0,
                      sendingMessages: !1,
                      messages: [],
                      messagesPosted: [],
                      messagesReceived: [],
                      messageSendingInterval: ie.POST_MESSAGE_ENABLED ? null : 100,
                      onPageDestinationsFired: [],
                      jsonForComparison: [],
                      jsonDuplicates: [],
                      jsonWaiting: [],
                      jsonProcessed: [],
                      canSetThirdPartyCookies: !0,
                      receivedThirdPartyCookiesNotification: !1,
                      readyToAttachIframePreliminary: function () {
                        return !(
                          e.idSyncDisableSyncs ||
                          e.disableIdSyncs ||
                          e.idSyncDisable3rdPartySyncing ||
                          e.disableThirdPartyCookies ||
                          e.disableThirdPartyCalls
                        );
                      },
                      readyToAttachIframe: function () {
                        return (
                          this.readyToAttachIframePreliminary() &&
                          (this.doAttachIframe || e._doAttachIframe) &&
                          ((this.subdomain && 'nosubdomainreturned' !== this.subdomain) ||
                            e._subdomain) &&
                          this.url &&
                          !this.startedAttachingIframe
                        );
                      },
                      attachIframe: function () {
                        function e () {
                          (r = n.createElement('iframe')),
                            (r.sandbox = 'allow-scripts allow-same-origin'),
                            (r.title = 'Adobe ID Syncing iFrame'),
                            (r.id = i.id),
                            (r.name = i.id + '_name'),
                            (r.style.cssText = 'display: none; width: 0; height: 0;'),
                            (r.src = i.url),
                            (i.newIframeCreated = !0),
                            t(),
                            n.body.appendChild(r);
                        }
                        function t (e) {
                          r.addEventListener('load', function () {
                            (r.className = 'aamIframeLoaded'),
                              (i.iframeHasLoaded = !0),
                              i.fireIframeLoadedCallbacks(e),
                              i.requestToProcess();
                          });
                        }
                        this.startedAttachingIframe = !0;
                        var i = this,
                          r = n.getElementById(this.id);
                        r
                          ? 'IFRAME' !== r.nodeName
                            ? ((this.id += '_2'), (this.iframeIdChanged = !0), e())
                            : ((this.newIframeCreated = !1),
                              'aamIframeLoaded' !== r.className
                                ? ((this.originalIframeHasLoadedAlready = !1),
                                  t(
                                    "The destination publishing iframe already exists from a different library, but hadn't loaded yet."
                                  ))
                                : ((this.originalIframeHasLoadedAlready = !0),
                                  (this.iframeHasLoaded = !0),
                                  (this.iframe = r),
                                  this.fireIframeLoadedCallbacks(
                                    'The destination publishing iframe already exists from a different library, and had loaded alresady.'
                                  ),
                                  this.requestToProcess()))
                          : e(),
                          (this.iframe = r);
                      },
                      fireIframeLoadedCallbacks: function (e) {
                        this.iframeLoadedCallbacks.forEach(function (t) {
                          'function' == typeof t &&
                            t({
                              message:
                                e ||
                                'The destination publishing iframe was attached and loaded successfully.',
                            });
                        }),
                          (this.iframeLoadedCallbacks = []);
                      },
                      requestToProcess: function (t) {
                        function n () {
                          r.jsonForComparison.push(t),
                            r.jsonWaiting.push(t),
                            r.processSyncOnPage(t);
                        }
                        var i,
                          r = this;
                        if (t === Object(t) && t.ibs)
                          if (((i = JSON.stringify(t.ibs || [])), this.jsonForComparison.length)) {
                            var a,
                              o,
                              s,
                              l = !1;
                            for (a = 0, o = this.jsonForComparison.length; a < o; a++)
                              if (
                                ((s = this.jsonForComparison[a]),
                                i === JSON.stringify(s.ibs || []))
                              ) {
                                l = !0;
                                break;
                              }
                            l ? this.jsonDuplicates.push(t) : n();
                          } else n();
                        if (
                          (this.receivedThirdPartyCookiesNotification ||
                            !ie.POST_MESSAGE_ENABLED ||
                            this.iframeHasLoaded) &&
                          this.jsonWaiting.length
                        ) {
                          var c = this.jsonWaiting.shift();
                          this.process(c), this.requestToProcess();
                        }
                        e.idSyncDisableSyncs ||
                          e.disableIdSyncs ||
                          !this.iframeHasLoaded ||
                          !this.messages.length ||
                          this.sendingMessages ||
                          (this.throttleTimerSet ||
                            ((this.throttleTimerSet = !0),
                            setTimeout(function () {
                              r.messageSendingInterval = ie.POST_MESSAGE_ENABLED ? null : 150;
                            }, this.THROTTLE_START)),
                          (this.sendingMessages = !0),
                          this.sendMessages());
                      },
                      getRegionAndCheckIfChanged: function (t, n) {
                        var i = e._getField('MCAAMLH'),
                          r = t.d_region || t.dcs_region;
                        return (
                          i
                            ? r &&
                              (e._setFieldExpire('MCAAMLH', n),
                              e._setField('MCAAMLH', r),
                              parseInt(i, 10) !== r &&
                                ((this.regionChanged = !0),
                                this.timesRegionChanged++,
                                e._setField('MCSYNCSOP', ''),
                                e._setField('MCSYNCS', ''),
                                (i = r)))
                            : (i = r) &&
                              (e._setFieldExpire('MCAAMLH', n), e._setField('MCAAMLH', i)),
                          i || (i = ''),
                          i
                        );
                      },
                      processSyncOnPage: function (e) {
                        var t, n, i, r;
                        if ((t = e.ibs) && t instanceof Array && (n = t.length))
                          for (i = 0; i < n; i++)
                            (r = t[i]),
                              r.syncOnPage && this.checkFirstPartyCookie(r, '', 'syncOnPage');
                      },
                      process: function (e) {
                        var t,
                          n,
                          i,
                          r,
                          a,
                          o = encodeURIComponent,
                          s = !1;
                        if ((t = e.ibs) && t instanceof Array && (n = t.length))
                          for (s = !0, i = 0; i < n; i++)
                            (r = t[i]),
                              (a = [
                                o('ibs'),
                                o(r.id || ''),
                                o(r.tag || ''),
                                j.encodeAndBuildRequest(r.url || [], ','),
                                o(r.ttl || ''),
                                '',
                                '',
                                r.fireURLSync ? 'true' : 'false',
                              ]),
                              r.syncOnPage ||
                                (this.canSetThirdPartyCookies
                                  ? this.addMessage(a.join('|'))
                                  : r.fireURLSync && this.checkFirstPartyCookie(r, a.join('|')));
                        s && this.jsonProcessed.push(e);
                      },
                      checkFirstPartyCookie: function (t, n, i) {
                        var r = 'syncOnPage' === i,
                          a = r ? 'MCSYNCSOP' : 'MCSYNCS';
                        e._readVisitor();
                        var o,
                          s,
                          l = e._getField(a),
                          c = !1,
                          u = !1,
                          d = Math.ceil(new Date().getTime() / ie.MILLIS_PER_DAY);
                        l
                          ? ((o = l.split('*')),
                            (s = this.pruneSyncData(o, t.id, d)),
                            (c = s.dataPresent),
                            (u = s.dataValid),
                            (c && u) || this.fireSync(r, t, n, o, a, d))
                          : ((o = []), this.fireSync(r, t, n, o, a, d));
                      },
                      pruneSyncData: function (e, t, n) {
                        var i,
                          r,
                          a,
                          o = !1,
                          s = !1;
                        for (r = 0; r < e.length; r++)
                          (i = e[r]),
                            (a = parseInt(i.split('-')[1], 10)),
                            i.match('^' + t + '-')
                              ? ((o = !0), n < a ? (s = !0) : (e.splice(r, 1), r--))
                              : n >= a && (e.splice(r, 1), r--);
                        return { dataPresent: o, dataValid: s };
                      },
                      manageSyncsSize: function (e) {
                        if (e.join('*').length > this.MAX_SYNCS_LENGTH)
                          for (
                            e.sort(function (e, t) {
                              return parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10);
                            });
                            e.join('*').length > this.MAX_SYNCS_LENGTH;

                          )
                            e.shift();
                      },
                      fireSync: function (t, n, i, r, a, o) {
                        var s = this;
                        if (t) {
                          if ('img' === n.tag) {
                            var l,
                              c,
                              u,
                              d,
                              f = n.url,
                              g = e.loadSSL ? 'https:' : 'http:';
                            for (l = 0, c = f.length; l < c; l++) {
                              (u = f[l]), (d = /^\/\//.test(u));
                              var p = new Image();
                              p.addEventListener(
                                'load',
                                (function (t, n, i, r) {
                                  return function () {
                                    (s.onPagePixels[t] = null), e._readVisitor();
                                    var o,
                                      l = e._getField(a),
                                      c = [];
                                    if (l) {
                                      o = l.split('*');
                                      var u, d, f;
                                      for (u = 0, d = o.length; u < d; u++)
                                        (f = o[u]), f.match('^' + n.id + '-') || c.push(f);
                                    }
                                    s.setSyncTrackingData(c, n, i, r);
                                  };
                                })(this.onPagePixels.length, n, a, o)
                              ),
                                (p.src = (d ? g : '') + u),
                                this.onPagePixels.push(p);
                            }
                          }
                        } else this.addMessage(i), this.setSyncTrackingData(r, n, a, o);
                      },
                      addMessage: function (t) {
                        var n = encodeURIComponent,
                          i = n(e._enableErrorReporting ? '---destpub-debug---' : '---destpub---');
                        this.messages.push((ie.POST_MESSAGE_ENABLED ? '' : i) + t);
                      },
                      setSyncTrackingData: function (t, n, i, r) {
                        t.push(n.id + '-' + (r + Math.ceil(n.ttl / 60 / 24))),
                          this.manageSyncsSize(t),
                          e._setField(i, t.join('*'));
                      },
                      sendMessages: function () {
                        var e,
                          t = this,
                          n = '',
                          i = encodeURIComponent;
                        this.regionChanged &&
                          ((n = i('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                          this.messages.length
                            ? ie.POST_MESSAGE_ENABLED
                              ? ((e = n + i('---destpub-combined---') + this.messages.join('%01')),
                                this.postMessage(e),
                                (this.messages = []),
                                (this.sendingMessages = !1))
                              : ((e = this.messages.shift()),
                                this.postMessage(n + e),
                                setTimeout(function () {
                                  t.sendMessages();
                                }, this.messageSendingInterval))
                            : (this.sendingMessages = !1);
                      },
                      postMessage: function (e) {
                        ee.postMessage(e, this.url, this.iframe.contentWindow),
                          this.messagesPosted.push(e);
                      },
                      receiveMessage: function (e) {
                        var t,
                          n = /^---destpub-to-parent---/;
                        'string' == typeof e &&
                          n.test(e) &&
                          ((t = e.replace(n, '').split('|')),
                          'canSetThirdPartyCookies' === t[0] &&
                            ((this.canSetThirdPartyCookies = 'true' === t[1]),
                            (this.receivedThirdPartyCookiesNotification = !0),
                            this.requestToProcess()),
                          this.messagesReceived.push(e));
                      },
                      processIDCallData: function (i) {
                        (null == this.url ||
                          (i.subdomain && 'nosubdomainreturned' === this.subdomain)) &&
                          ('string' == typeof e._subdomain && e._subdomain.length
                            ? (this.subdomain = e._subdomain)
                            : (this.subdomain = i.subdomain || ''),
                          (this.url = this.getUrl())),
                          i.ibs instanceof Array && i.ibs.length && (this.doAttachIframe = !0),
                          this.readyToAttachIframe() &&
                            (e.idSyncAttachIframeOnWindowLoad
                              ? (t.windowLoaded ||
                                  'complete' === n.readyState ||
                                  'loaded' === n.readyState) &&
                                this.attachIframe()
                              : this.attachIframeASAP()),
                          'function' == typeof e.idSyncIDCallResult
                            ? e.idSyncIDCallResult(i)
                            : this.requestToProcess(i),
                          'function' == typeof e.idSyncAfterIDCallResult &&
                            e.idSyncAfterIDCallResult(i);
                      },
                      canMakeSyncIDCall: function (t, n) {
                        return e._forceSyncIDCall || !t || n - t > ie.DAYS_BETWEEN_SYNC_ID_CALLS;
                      },
                      attachIframeASAP: function () {
                        function e () {
                          t.startedAttachingIframe ||
                            (n.body ? t.attachIframe() : setTimeout(e, 30));
                        }
                        var t = this;
                        e();
                      },
                    };
                  },
                  ae = {
                    audienceManagerServer: {},
                    audienceManagerServerSecure: {},
                    cookieDomain: {},
                    cookieLifetime: {},
                    cookieName: {},
                    doesOptInApply: {},
                    disableThirdPartyCalls: {},
                    discardTrackingServerECID: {},
                    idSyncAfterIDCallResult: {},
                    idSyncAttachIframeOnWindowLoad: {},
                    idSyncContainerID: {},
                    idSyncDisable3rdPartySyncing: {},
                    disableThirdPartyCookies: {},
                    idSyncDisableSyncs: {},
                    disableIdSyncs: {},
                    idSyncIDCallResult: {},
                    idSyncSSLUseAkamai: {},
                    isCoopSafe: {},
                    isIabContext: {},
                    isOptInStorageEnabled: {},
                    loadSSL: {},
                    loadTimeout: {},
                    marketingCloudServer: {},
                    marketingCloudServerSecure: {},
                    optInCookieDomain: {},
                    optInStorageExpiry: {},
                    overwriteCrossDomainMCIDAndAID: {},
                    preOptInApprovals: {},
                    previousPermissions: {},
                    resetBeforeVersion: {},
                    sdidParamExpiry: {},
                    serverState: {},
                    sessionCookieName: {},
                    secureCookie: {},
                    takeTimeoutMetrics: {},
                    trackingServer: {},
                    trackingServerSecure: {},
                    whitelistIframeDomains: {},
                    whitelistParentDomain: {},
                  },
                  oe = {
                    getConfigNames: function () {
                      return Object.keys(ae);
                    },
                    getConfigs: function () {
                      return ae;
                    },
                    normalizeConfig: function (e) {
                      return 'function' != typeof e ? e : e();
                    },
                  },
                  se = function (e) {
                    var t = {};
                    return (
                      (e.on = function (e, n, i) {
                        if (!n || 'function' != typeof n)
                          throw new Error('[ON] Callback should be a function.');
                        t.hasOwnProperty(e) || (t[e] = []);
                        var r = t[e].push({ callback: n, context: i }) - 1;
                        return function () {
                          t[e].splice(r, 1), t[e].length || delete t[e];
                        };
                      }),
                      (e.publish = function (e) {
                        if (t.hasOwnProperty(e)) {
                          var n = [].slice.call(arguments, 1);
                          t[e].slice(0).forEach(function (e) {
                            e.callback.apply(e.context, n);
                          });
                        }
                      }),
                      e.publish
                    );
                  },
                  le = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
                  ce = {
                    AAM: 'aam',
                    ADCLOUD: 'adcloud',
                    ANALYTICS: 'aa',
                    CAMPAIGN: 'campaign',
                    ECID: 'ecid',
                    LIVEFYRE: 'livefyre',
                    TARGET: 'target',
                    VIDEO_ANALYTICS: 'videoaa',
                  },
                  ue = ((C = {}), t(C, ce.AAM, 565), t(C, ce.ECID, 565), C),
                  de = ((I = {}), t(I, ce.AAM, [1, 2, 5]), t(I, ce.ECID, [1, 2, 5]), I),
                  fe = (function (e) {
                    return Object.keys(e).map(function (t) {
                      return e[t];
                    });
                  })(ce),
                  ge = function () {
                    var e = {};
                    return (
                      (e.callbacks = Object.create(null)),
                      (e.add = function (t, n) {
                        if (!l(n))
                          throw new Error(
                            '[callbackRegistryFactory] Make sure callback is a function or an array of functions.'
                          );
                        e.callbacks[t] = e.callbacks[t] || [];
                        var i = e.callbacks[t].push(n) - 1;
                        return function () {
                          e.callbacks[t].splice(i, 1);
                        };
                      }),
                      (e.execute = function (t, n) {
                        if (e.callbacks[t]) {
                          (n = void 0 === n ? [] : n), (n = n instanceof Array ? n : [n]);
                          try {
                            for (; e.callbacks[t].length; ) {
                              var i = e.callbacks[t].shift();
                              'function' == typeof i
                                ? i.apply(null, n)
                                : i instanceof Array && i[1].apply(i[0], n);
                            }
                            delete e.callbacks[t];
                          } catch (e) {}
                        }
                      }),
                      (e.executeAll = function (t, n) {
                        (n || (t && !s(t))) &&
                          Object.keys(e.callbacks).forEach(function (n) {
                            var i = void 0 !== t[n] ? t[n] : '';
                            e.execute(n, i);
                          }, e);
                      }),
                      (e.hasCallbacks = function () {
                        return Boolean(Object.keys(e.callbacks).length);
                      }),
                      e
                    );
                  },
                  pe = function () {},
                  me = function (e) {
                    var t = window,
                      n = t.console;
                    return !!n && 'function' == typeof n[e];
                  },
                  he = function (e, t, n) {
                    return n()
                      ? function () {
                          if (me(e)) {
                            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                              i[r] = arguments[r];
                            console[e].apply(console, [t].concat(i));
                          }
                        }
                      : pe;
                  },
                  _e = c,
                  Ce = new _e('[ADOBE OPT-IN]'),
                  Ie = function (t, n) {
                    return e(t) === n;
                  },
                  ve = function (e, t) {
                    return e instanceof Array ? e : Ie(e, 'string') ? [e] : t || [];
                  },
                  De = function (e) {
                    var t = Object.keys(e);
                    return (
                      !!t.length &&
                      t.every(function (t) {
                        return !0 === e[t];
                      })
                    );
                  },
                  Se = function (e) {
                    return (
                      !(!e || ye(e)) &&
                      ve(e).every(function (e) {
                        return fe.indexOf(e) > -1;
                      })
                    );
                  },
                  be = function (e, t) {
                    return e.reduce(function (e, n) {
                      return (e[n] = t), e;
                    }, {});
                  },
                  Ae = function (e) {
                    return JSON.parse(JSON.stringify(e));
                  },
                  ye = function (e) {
                    return '[object Array]' === Object.prototype.toString.call(e) && !e.length;
                  },
                  Oe = function (e) {
                    if (Ee(e)) return e;
                    try {
                      return JSON.parse(e);
                    } catch (e) {
                      return {};
                    }
                  },
                  Me = function (e) {
                    return void 0 === e || (Ee(e) ? Se(Object.keys(e)) : ke(e));
                  },
                  ke = function (e) {
                    try {
                      var t = JSON.parse(e);
                      return !!e && Ie(e, 'string') && Se(Object.keys(t));
                    } catch (e) {
                      return !1;
                    }
                  },
                  Ee = function (e) {
                    return null !== e && Ie(e, 'object') && !1 === Array.isArray(e);
                  },
                  Te = function () {},
                  Le = function (e) {
                    return Ie(e, 'function') ? e() : e;
                  },
                  Pe = function (e, t) {
                    Me(e) || Ce.error(''.concat(t));
                  },
                  we = function (e) {
                    return Object.keys(e).map(function (t) {
                      return e[t];
                    });
                  },
                  Re = function (e) {
                    return we(e).filter(function (e, t, n) {
                      return n.indexOf(e) === t;
                    });
                  },
                  Fe = function (e) {
                    return function () {
                      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.command,
                        i = t.params,
                        r = void 0 === i ? {} : i,
                        a = t.callback,
                        o = void 0 === a ? Te : a;
                      if (!n || -1 === n.indexOf('.'))
                        throw new Error('[OptIn.execute] Please provide a valid command.');
                      try {
                        var s = n.split('.'),
                          l = e[s[0]],
                          c = s[1];
                        if (!l || 'function' != typeof l[c])
                          throw new Error('Make sure the plugin and API name exist.');
                        var u = Object.assign(r, { callback: o });
                        l[c].call(l, u);
                      } catch (e) {
                        Ce.error('[execute] Something went wrong: ' + e.message);
                      }
                    };
                  };
                (d.prototype = Object.create(Error.prototype)), (d.prototype.constructor = d);
                var Ne = 'fetchPermissions',
                  xe = '[OptIn#registerPlugin] Plugin is invalid.';
                (f.Categories = ce), (f.TimeoutError = d);
                var je = Object.freeze({ OptIn: f, IabPlugin: m }),
                  Ve = {
                    get: function (e) {
                      e = encodeURIComponent(e);
                      var t = (';' + document.cookie).split(' ').join(';'),
                        n = t.indexOf(';' + e + '='),
                        i = n < 0 ? n : t.indexOf(';', n + 1);
                      return n < 0
                        ? ''
                        : decodeURIComponent(t.substring(n + 2 + e.length, i < 0 ? t.length : i));
                    },
                    set: function (e, t, n) {
                      var i = h(n, 'cookieLifetime'),
                        r = h(n, 'expires'),
                        a = h(n, 'domain'),
                        o = h(n, 'secure'),
                        s = o ? 'Secure' : '';
                      if (r && 'SESSION' !== i && 'NONE' !== i) {
                        var l = '' !== t ? parseInt(i || 0, 10) : -60;
                        if (l) (r = new Date()), r.setTime(r.getTime() + 1000 * l);
                        else if (1 === r) {
                          r = new Date();
                          var c = r.getYear();
                          r.setYear(c + 2 + (c < 1900 ? 1900 : 0));
                        }
                      } else r = 0;
                      return e && 'NONE' !== i
                        ? ((document.cookie =
                            encodeURIComponent(e) +
                            '=' +
                            encodeURIComponent(t) +
                            '; path=/;' +
                            (r ? ' expires=' + r.toGMTString() + ';' : '') +
                            (a ? ' domain=' + a + ';' : '') +
                            s),
                          this.get(e) === t)
                        : 0;
                    },
                    remove: function (e, t) {
                      var n = h(t, 'domain');
                      (n = n ? ' domain=' + n + ';' : ''),
                        (document.cookie =
                          encodeURIComponent(e) +
                          '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                          n);
                    },
                  },
                  Ue = function (e, t) {
                    e.publishDestinations = function (n) {
                      var i = arguments[1],
                        r = arguments[2];
                      try {
                        r = 'function' == typeof r ? r : n.callback;
                      } catch (e) {
                        r = function () {};
                      }
                      var a = t;
                      if (!a.readyToAttachIframePreliminary())
                        return void r({
                          error:
                            'The destination publishing iframe is disabled in the Visitor library.',
                        });
                      if ('string' == typeof n) {
                        if (!n.length)
                          return void r({ error: 'subdomain is not a populated string.' });
                        if (!(i instanceof Array && i.length))
                          return void r({ error: 'messages is not a populated array.' });
                        var o = !1;
                        if (
                          (i.forEach(function (e) {
                            'string' == typeof e && e.length && (a.addMessage(e), (o = !0));
                          }),
                          !o)
                        )
                          return void r({ error: 'None of the messages are populated strings.' });
                      } else {
                        if (!j.isObject(n)) return void r({ error: 'Invalid parameters passed.' });
                        var s = n;
                        if ('string' != typeof (n = s.subdomain) || !n.length)
                          return void r({ error: 'config.subdomain is not a populated string.' });
                        var l = s.urlDestinations;
                        if (!(l instanceof Array && l.length))
                          return void r({
                            error: 'config.urlDestinations is not a populated array.',
                          });
                        var c = [];
                        l.forEach(function (e) {
                          j.isObject(e) &&
                            (e.hideReferrer ? e.message && a.addMessage(e.message) : c.push(e));
                        });
                        !(function e () {
                          c.length &&
                            setTimeout(function () {
                              var t = new Image(),
                                n = c.shift();
                              (t.src = n.url), a.onPageDestinationsFired.push(n), e();
                            }, 100);
                        })();
                      }
                      a.iframe
                        ? (r({
                            message:
                              'The destination publishing iframe is already attached and loaded.',
                          }),
                          a.requestToProcess())
                        : !e.subdomain && e._getField('MCMID')
                        ? ((a.subdomain = n),
                          (a.doAttachIframe = !0),
                          (a.url = a.getUrl()),
                          a.readyToAttachIframe()
                            ? (a.iframeLoadedCallbacks.push(function (e) {
                                r({
                                  message:
                                    'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                                    (e.message || 'no result'),
                                });
                              }),
                              a.attachIframe())
                            : r({
                                error:
                                  'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                              }))
                        : a.iframeLoadedCallbacks.push(function (e) {
                            r({
                              message:
                                'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
                                (e.message || 'no result'),
                            });
                          });
                    };
                  },
                  He = je.OptIn;
                j.defineGlobalNamespace(), (window.adobe.OptInCategories = He.Categories);
                var Be = function (t, n, i) {
                  function r (e) {
                    var t = e;
                    return function (e) {
                      var n = e || h.location.href;
                      try {
                        var i = d._extractParamFromUri(n, t);
                        if (i) return L.parsePipeDelimetedKeyValues(i);
                      } catch (e) {}
                    };
                  }
                  function a (e) {
                    function t (e, t, n) {
                      e && e.match(ie.VALID_VISITOR_ID_REGEX) && (n === v && (m = !0), t(e));
                    }
                    t(e[v], d.setMarketingCloudVisitorID, v),
                      d._setFieldExpire(y, -1),
                      t(e[b], d.setAnalyticsVisitorID);
                  }
                  function o (e) {
                    (e = e || {}),
                      (d._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                      (d._supplementalDataIDCurrentConsumed =
                        e.supplementalDataIDCurrentConsumed || {}),
                      (d._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                      (d._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {});
                  }
                  function s (e) {
                    function t (e, t, n) {
                      return (n = n ? (n += '|') : n), (n += e + '=' + encodeURIComponent(t));
                    }
                    function n (e, n) {
                      var i = n[0],
                        r = n[1];
                      return null != r && r !== O && (e = t(i, r, e)), e;
                    }
                    var i = e.reduce(n, '');
                    return (function (e) {
                      var t = L.getTimestampInSeconds();
                      return (e = e ? (e += '|') : e), (e += 'TS=' + t);
                    })(i);
                  }
                  function l (e) {
                    var t = e.minutesToLive,
                      n = '';
                    return (
                      (d.idSyncDisableSyncs || d.disableIdSyncs) &&
                        (n = n || 'Error: id syncs have been disabled'),
                      ('string' == typeof e.dpid && e.dpid.length) ||
                        (n = n || 'Error: config.dpid is empty'),
                      ('string' == typeof e.url && e.url.length) ||
                        (n = n || 'Error: config.url is empty'),
                      void 0 === t
                        ? (t = 20160)
                        : ((t = parseInt(t, 10)),
                          (isNaN(t) || t <= 0) &&
                            (n =
                              n || 'Error: config.minutesToLive needs to be a positive number')),
                      { error: n, ttl: t }
                    );
                  }
                  function c () {
                    return !!d.configs.doesOptInApply && !(f.optIn.isComplete && u());
                  }
                  function u () {
                    return d.configs.isIabContext
                      ? f.optIn.isApproved(f.optIn.Categories.ECID) && p
                      : f.optIn.isApproved(f.optIn.Categories.ECID);
                  }
                  if (!i || i.split('').reverse().join('') !== t)
                    throw new Error('Please use `Visitor.getInstance` to instantiate Visitor.');
                  var d = this,
                    f = window.adobe,
                    g = '',
                    p = !1,
                    m = !1;
                  d.version = '4.3.0';
                  var h = _,
                    C = h.Visitor;
                  (C.version = d.version),
                    (C.AuthState = E.AUTH_STATE),
                    (C.OptOut = E.OPT_OUT),
                    h.s_c_in || ((h.s_c_il = []), (h.s_c_in = 0)),
                    (d._c = 'Visitor'),
                    (d._il = h.s_c_il),
                    (d._in = h.s_c_in),
                    (d._il[d._in] = d),
                    h.s_c_in++,
                    (d._instanceType = 'regular'),
                    (d._log = { requests: [] }),
                    (d.marketingCloudOrgID = t),
                    (d.cookieName = 'AMCV_' + t),
                    (d.sessionCookieName = 'AMCVS_' + t),
                    (d.cookieDomain = Q()),
                    d.cookieDomain === h.location.hostname && (d.cookieDomain = ''),
                    (d.loadSSL = h.location.protocol.toLowerCase().indexOf('https') >= 0),
                    (d.loadTimeout = 30000),
                    (d.CORSErrors = []),
                    (d.marketingCloudServer = d.audienceManagerServer = 'dpm.demdex.net'),
                    (d.sdidParamExpiry = 30);
                  var I = null,
                    v = 'MCMID',
                    D = 'MCIDTS',
                    S = 'A',
                    b = 'MCAID',
                    A = 'AAM',
                    y = 'MCAAMB',
                    O = 'NONE',
                    M = function (e) {
                      return !Object.prototype[e];
                    },
                    k = ne(d);
                  (d.FIELDS = E.FIELDS),
                    (d.cookieRead = function (e) {
                      return Ve.get(e);
                    }),
                    (d.cookieWrite = function (e, t, n) {
                      var i = d.cookieLifetime ? ('' + d.cookieLifetime).toUpperCase() : '',
                        r = !1;
                      return (
                        d.configs &&
                          d.configs.secureCookie &&
                          'https:' === location.protocol &&
                          (r = !0),
                        Ve.set(e, '' + t, {
                          expires: n,
                          domain: d.cookieDomain,
                          cookieLifetime: i,
                          secure: r,
                        })
                      );
                    }),
                    (d.resetState = function (e) {
                      e ? d._mergeServerState(e) : o();
                    }),
                    (d._isAllowedDone = !1),
                    (d._isAllowedFlag = !1),
                    (d.isAllowed = function () {
                      return (
                        d._isAllowedDone ||
                          ((d._isAllowedDone = !0),
                          (d.cookieRead(d.cookieName) || d.cookieWrite(d.cookieName, 'T', 1)) &&
                            (d._isAllowedFlag = !0)),
                        'T' === d.cookieRead(d.cookieName) &&
                          d._helpers.removeCookie(d.cookieName),
                        d._isAllowedFlag
                      );
                    }),
                    (d.setMarketingCloudVisitorID = function (e) {
                      d._setMarketingCloudFields(e);
                    }),
                    (d._use1stPartyMarketingCloudServer = !1),
                    (d.getMarketingCloudVisitorID = function (e, t) {
                      d.marketingCloudServer &&
                        d.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                        (d._use1stPartyMarketingCloudServer = !0);
                      var n = d._getAudienceManagerURLData('_setMarketingCloudFields'),
                        i = n.url;
                      return d._getRemoteField(v, i, e, t, n);
                    }),
                    (d.getVisitorValues = function (e, t) {
                      var n = {
                          MCMID: { fn: d.getMarketingCloudVisitorID, args: [!0], context: d },
                          MCOPTOUT: { fn: d.isOptedOut, args: [void 0, !0], context: d },
                          MCAID: { fn: d.getAnalyticsVisitorID, args: [!0], context: d },
                          MCAAMLH: {
                            fn: d.getAudienceManagerLocationHint,
                            args: [!0],
                            context: d,
                          },
                          MCAAMB: { fn: d.getAudienceManagerBlob, args: [!0], context: d },
                        },
                        i = t && t.length ? j.pluck(n, t) : n;
                      K(i, e);
                    }),
                    (d._currentCustomerIDs = {}),
                    (d._customerIDsHashChanged = !1),
                    (d._newCustomerIDsHash = ''),
                    (d.setCustomerIDs = function (t) {
                      function n () {
                        d._customerIDsHashChanged = !1;
                      }
                      if (!d.isOptedOut() && t) {
                        if (!j.isObject(t) || j.isObjectEmpty(t)) return !1;
                        d._readVisitor();
                        var i, r;
                        for (i in t)
                          if (M(i) && (r = t[i]))
                            if ('object' === e(r)) {
                              var a = {};
                              r.id && (a.id = r.id),
                                void 0 != r.authState && (a.authState = r.authState),
                                (d._currentCustomerIDs[i] = a);
                            } else d._currentCustomerIDs[i] = { id: r };
                        var o = d.getCustomerIDs(),
                          s = d._getField('MCCIDH'),
                          l = '';
                        s || (s = 0);
                        for (i in o)
                          M(i) &&
                            ((r = o[i]),
                            (l +=
                              (l ? '|' : '') +
                              i +
                              '|' +
                              (r.id ? r.id : '') +
                              (r.authState ? r.authState : '')));
                        (d._newCustomerIDsHash = String(d._hash(l))),
                          d._newCustomerIDsHash !== s &&
                            ((d._customerIDsHashChanged = !0), d._mapCustomerIDs(n));
                      }
                    }),
                    (d.getCustomerIDs = function () {
                      d._readVisitor();
                      var e,
                        t,
                        n = {};
                      for (e in d._currentCustomerIDs)
                        M(e) &&
                          ((t = d._currentCustomerIDs[e]),
                          n[e] || (n[e] = {}),
                          t.id && (n[e].id = t.id),
                          void 0 != t.authState
                            ? (n[e].authState = t.authState)
                            : (n[e].authState = C.AuthState.UNKNOWN));
                      return n;
                    }),
                    (d.setAnalyticsVisitorID = function (e) {
                      d._setAnalyticsFields(e);
                    }),
                    (d.getAnalyticsVisitorID = function (e, t, n) {
                      if (!L.isTrackingServerPopulated() && !n)
                        return d._callCallback(e, ['']), '';
                      var i = '';
                      if (
                        (n ||
                          (i = d.getMarketingCloudVisitorID(function (t) {
                            d.getAnalyticsVisitorID(e, !0);
                          })),
                        i || n)
                      ) {
                        var r = n ? d.marketingCloudServer : d.trackingServer,
                          a = '';
                        d.loadSSL &&
                          (n
                            ? d.marketingCloudServerSecure && (r = d.marketingCloudServerSecure)
                            : d.trackingServerSecure && (r = d.trackingServerSecure));
                        var o = {};
                        if (r) {
                          var s = 'http' + (d.loadSSL ? 's' : '') + '://' + r + '/id',
                            l =
                              'd_visid_ver=' +
                              d.version +
                              '&mcorgid=' +
                              encodeURIComponent(d.marketingCloudOrgID) +
                              (i ? '&mid=' + encodeURIComponent(i) : '') +
                              (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies
                                ? '&d_coppa=true'
                                : ''),
                            c = [
                              's_c_il',
                              d._in,
                              '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                            ];
                          (a =
                            s +
                            '?' +
                            l +
                            '&callback=s_c_il%5B' +
                            d._in +
                            '%5D._set' +
                            (n ? 'MarketingCloud' : 'Analytics') +
                            'Fields'),
                            (o.corsUrl = s + '?' + l),
                            (o.callback = c);
                        }
                        return (o.url = a), d._getRemoteField(n ? v : b, a, e, t, o);
                      }
                      return '';
                    }),
                    (d.getAudienceManagerLocationHint = function (e, t) {
                      if (
                        d.getMarketingCloudVisitorID(function (t) {
                          d.getAudienceManagerLocationHint(e, !0);
                        })
                      ) {
                        var n = d._getField(b);
                        if (
                          (!n &&
                            L.isTrackingServerPopulated() &&
                            (n = d.getAnalyticsVisitorID(function (t) {
                              d.getAudienceManagerLocationHint(e, !0);
                            })),
                          n || !L.isTrackingServerPopulated())
                        ) {
                          var i = d._getAudienceManagerURLData(),
                            r = i.url;
                          return d._getRemoteField('MCAAMLH', r, e, t, i);
                        }
                      }
                      return '';
                    }),
                    (d.getLocationHint = d.getAudienceManagerLocationHint),
                    (d.getAudienceManagerBlob = function (e, t) {
                      if (
                        d.getMarketingCloudVisitorID(function (t) {
                          d.getAudienceManagerBlob(e, !0);
                        })
                      ) {
                        var n = d._getField(b);
                        if (
                          (!n &&
                            L.isTrackingServerPopulated() &&
                            (n = d.getAnalyticsVisitorID(function (t) {
                              d.getAudienceManagerBlob(e, !0);
                            })),
                          n || !L.isTrackingServerPopulated())
                        ) {
                          var i = d._getAudienceManagerURLData(),
                            r = i.url;
                          return (
                            d._customerIDsHashChanged && d._setFieldExpire(y, -1),
                            d._getRemoteField(y, r, e, t, i)
                          );
                        }
                      }
                      return '';
                    }),
                    (d._supplementalDataIDCurrent = ''),
                    (d._supplementalDataIDCurrentConsumed = {}),
                    (d._supplementalDataIDLast = ''),
                    (d._supplementalDataIDLastConsumed = {}),
                    (d.getSupplementalDataID = function (e, t) {
                      d._supplementalDataIDCurrent ||
                        t ||
                        (d._supplementalDataIDCurrent = d._generateID(1));
                      var n = d._supplementalDataIDCurrent;
                      return (
                        d._supplementalDataIDLast && !d._supplementalDataIDLastConsumed[e]
                          ? ((n = d._supplementalDataIDLast),
                            (d._supplementalDataIDLastConsumed[e] = !0))
                          : n &&
                            (d._supplementalDataIDCurrentConsumed[e] &&
                              ((d._supplementalDataIDLast = d._supplementalDataIDCurrent),
                              (d._supplementalDataIDLastConsumed =
                                d._supplementalDataIDCurrentConsumed),
                              (d._supplementalDataIDCurrent = n = t ? '' : d._generateID(1)),
                              (d._supplementalDataIDCurrentConsumed = {})),
                            n && (d._supplementalDataIDCurrentConsumed[e] = !0)),
                        n
                      );
                    });
                  var T = !1;
                  (d._liberatedOptOut = null),
                    (d.getOptOut = function (e, t) {
                      var n = d._getAudienceManagerURLData('_setMarketingCloudFields'),
                        i = n.url;
                      if (u()) return d._getRemoteField('MCOPTOUT', i, e, t, n);
                      if ((d._registerCallback('liberatedOptOut', e), null !== d._liberatedOptOut))
                        return (
                          d._callAllCallbacks('liberatedOptOut', [d._liberatedOptOut]),
                          (T = !1),
                          d._liberatedOptOut
                        );
                      if (T) return null;
                      T = !0;
                      var r = 'liberatedGetOptOut';
                      return (
                        (n.corsUrl = n.corsUrl.replace(
                          /dpm\.demdex\.net\/id\?/,
                          'dpm.demdex.net/optOutStatus?'
                        )),
                        (n.callback = [r]),
                        (_[r] = function (e) {
                          if (e === Object(e)) {
                            var t,
                              n,
                              i = j.parseOptOut(e, t, O);
                            (t = i.optOut),
                              (n = 1000 * i.d_ottl),
                              (d._liberatedOptOut = t),
                              setTimeout(function () {
                                d._liberatedOptOut = null;
                              }, n);
                          }
                          d._callAllCallbacks('liberatedOptOut', [t]), (T = !1);
                        }),
                        k.fireCORS(n),
                        null
                      );
                    }),
                    (d.isOptedOut = function (e, t, n) {
                      t || (t = C.OptOut.GLOBAL);
                      var i = d.getOptOut(function (n) {
                        var i = n === C.OptOut.GLOBAL || n.indexOf(t) >= 0;
                        d._callCallback(e, [i]);
                      }, n);
                      return i ? i === C.OptOut.GLOBAL || i.indexOf(t) >= 0 : null;
                    }),
                    (d._fields = null),
                    (d._fieldsExpired = null),
                    (d._hash = function (e) {
                      var t,
                        n,
                        i = 0;
                      if (e)
                        for (t = 0; t < e.length; t++)
                          (n = e.charCodeAt(t)), (i = (i << 5) - i + n), (i &= i);
                      return i;
                    }),
                    (d._generateID = te),
                    (d._generateLocalMID = function () {
                      var e = d._generateID(0);
                      return (w.isClientSideMarketingCloudVisitorID = !0), e;
                    }),
                    (d._callbackList = null),
                    (d._callCallback = function (e, t) {
                      try {
                        'function' == typeof e ? e.apply(h, t) : e[1].apply(e[0], t);
                      } catch (e) {}
                    }),
                    (d._registerCallback = function (e, t) {
                      t &&
                        (null == d._callbackList && (d._callbackList = {}),
                        void 0 == d._callbackList[e] && (d._callbackList[e] = []),
                        d._callbackList[e].push(t));
                    }),
                    (d._callAllCallbacks = function (e, t) {
                      if (null != d._callbackList) {
                        var n = d._callbackList[e];
                        if (n) for (; n.length > 0; ) d._callCallback(n.shift(), t);
                      }
                    }),
                    (d._addQuerystringParam = function (e, t, n, i) {
                      var r = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                        a = L.parseHash(e),
                        o = L.hashlessUrl(e);
                      if (-1 === o.indexOf('?')) return o + '?' + r + a;
                      var s = o.split('?'),
                        l = s[0] + '?',
                        c = s[1];
                      return l + L.addQueryParamAtLocation(c, r, i) + a;
                    }),
                    (d._extractParamFromUri = function (e, t) {
                      var n = new RegExp('[\\?&#]' + t + '=([^&#]*)'),
                        i = n.exec(e);
                      if (i && i.length) return decodeURIComponent(i[1]);
                    }),
                    (d._parseAdobeMcFromUrl = r(ie.ADOBE_MC)),
                    (d._parseAdobeMcSdidFromUrl = r(ie.ADOBE_MC_SDID)),
                    (d._attemptToPopulateSdidFromUrl = function (e) {
                      var n = d._parseAdobeMcSdidFromUrl(e),
                        i = 1000000000;
                      n && n.TS && (i = L.getTimestampInSeconds() - n.TS),
                        n &&
                          n.SDID &&
                          n.MCORGID === t &&
                          i < d.sdidParamExpiry &&
                          ((d._supplementalDataIDCurrent = n.SDID),
                          (d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                    }),
                    (d._attemptToPopulateIdsFromUrl = function () {
                      var e = d._parseAdobeMcFromUrl();
                      if (e && e.TS) {
                        var n = L.getTimestampInSeconds(),
                          i = n - e.TS;
                        if (Math.floor(i / 60) > ie.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== t) return;
                        a(e);
                      }
                    }),
                    (d._mergeServerState = function (e) {
                      if (e)
                        try {
                          if (
                            ((e = (function (e) {
                              return L.isObject(e) ? e : JSON.parse(e);
                            })(e)),
                            e[d.marketingCloudOrgID])
                          ) {
                            var t = e[d.marketingCloudOrgID];
                            !(function (e) {
                              L.isObject(e) && d.setCustomerIDs(e);
                            })(t.customerIDs),
                              o(t.sdid);
                          }
                        } catch (e) {
                          throw new Error('`serverState` has an invalid format.');
                        }
                    }),
                    (d._timeout = null),
                    (d._loadData = function (e, t, n, i) {
                      (t = d._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                        (i.url = d._addQuerystringParam(i.url, 'd_fieldgroup', e, 1)),
                        (i.corsUrl = d._addQuerystringParam(i.corsUrl, 'd_fieldgroup', e, 1)),
                        (w.fieldGroupObj[e] = !0),
                        i === Object(i) &&
                          i.corsUrl &&
                          'XMLHttpRequest' === k.corsMetadata.corsType &&
                          k.fireCORS(i, n, e);
                    }),
                    (d._clearTimeout = function (e) {
                      null != d._timeout &&
                        d._timeout[e] &&
                        (clearTimeout(d._timeout[e]), (d._timeout[e] = 0));
                    }),
                    (d._settingsDigest = 0),
                    (d._getSettingsDigest = function () {
                      if (!d._settingsDigest) {
                        var e = d.version;
                        d.audienceManagerServer && (e += '|' + d.audienceManagerServer),
                          d.audienceManagerServerSecure &&
                            (e += '|' + d.audienceManagerServerSecure),
                          (d._settingsDigest = d._hash(e));
                      }
                      return d._settingsDigest;
                    }),
                    (d._readVisitorDone = !1),
                    (d._readVisitor = function () {
                      if (!d._readVisitorDone) {
                        d._readVisitorDone = !0;
                        var e,
                          t,
                          n,
                          i,
                          r,
                          a,
                          o = d._getSettingsDigest(),
                          s = !1,
                          l = d.cookieRead(d.cookieName),
                          c = new Date();
                        if (
                          (l ||
                            m ||
                            d.discardTrackingServerECID ||
                            (l = d.cookieRead(ie.FIRST_PARTY_SERVER_COOKIE)),
                          null == d._fields && (d._fields = {}),
                          l && 'T' !== l)
                        )
                          for (
                            l = l.split('|'),
                              l[0].match(/^[\-0-9]+$/) &&
                                (parseInt(l[0], 10) !== o && (s = !0), l.shift()),
                              l.length % 2 == 1 && l.pop(),
                              e = 0;
                            e < l.length;
                            e += 2
                          )
                            (t = l[e].split('-')),
                              (n = t[0]),
                              (i = l[e + 1]),
                              t.length > 1
                                ? ((r = parseInt(t[1], 10)), (a = t[1].indexOf('s') > 0))
                                : ((r = 0), (a = !1)),
                              s &&
                                ('MCCIDH' === n && (i = ''),
                                r > 0 && (r = c.getTime() / 1000 - 60)),
                              n &&
                                i &&
                                (d._setField(n, i, 1),
                                r > 0 &&
                                  ((d._fields['expire' + n] = r + (a ? 's' : '')),
                                  (c.getTime() >= 1000 * r ||
                                    (a && !d.cookieRead(d.sessionCookieName))) &&
                                    (d._fieldsExpired || (d._fieldsExpired = {}),
                                    (d._fieldsExpired[n] = !0))));
                        !d._getField(b) &&
                          L.isTrackingServerPopulated() &&
                          (l = d.cookieRead('s_vi')) &&
                          ((l = l.split('|')),
                          l.length > 1 &&
                            l[0].indexOf('v1') >= 0 &&
                            ((i = l[1]),
                            (e = i.indexOf('[')),
                            e >= 0 && (i = i.substring(0, e)),
                            i && i.match(ie.VALID_VISITOR_ID_REGEX) && d._setField(b, i)));
                      }
                    }),
                    (d._appendVersionTo = function (e) {
                      var t = 'vVersion|' + d.version,
                        n = e ? d._getCookieVersion(e) : null;
                      return (
                        n
                          ? $.areVersionsDifferent(n, d.version) &&
                            (e = e.replace(ie.VERSION_REGEX, t))
                          : (e += (e ? '|' : '') + t),
                        e
                      );
                    }),
                    (d._writeVisitor = function () {
                      var e,
                        t,
                        n = d._getSettingsDigest();
                      for (e in d._fields)
                        M(e) &&
                          d._fields[e] &&
                          'expire' !== e.substring(0, 6) &&
                          ((t = d._fields[e]),
                          (n +=
                            (n ? '|' : '') +
                            e +
                            (d._fields['expire' + e] ? '-' + d._fields['expire' + e] : '') +
                            '|' +
                            t));
                      (n = d._appendVersionTo(n)), d.cookieWrite(d.cookieName, n, 1);
                    }),
                    (d._getField = function (e, t) {
                      return null == d._fields || (!t && d._fieldsExpired && d._fieldsExpired[e])
                        ? null
                        : d._fields[e];
                    }),
                    (d._setField = function (e, t, n) {
                      null == d._fields && (d._fields = {}),
                        (d._fields[e] = t),
                        n || d._writeVisitor();
                    }),
                    (d._getFieldList = function (e, t) {
                      var n = d._getField(e, t);
                      return n ? n.split('*') : null;
                    }),
                    (d._setFieldList = function (e, t, n) {
                      d._setField(e, t ? t.join('*') : '', n);
                    }),
                    (d._getFieldMap = function (e, t) {
                      var n = d._getFieldList(e, t);
                      if (n) {
                        var i,
                          r = {};
                        for (i = 0; i < n.length; i += 2) r[n[i]] = n[i + 1];
                        return r;
                      }
                      return null;
                    }),
                    (d._setFieldMap = function (e, t, n) {
                      var i,
                        r = null;
                      if (t) {
                        r = [];
                        for (i in t) M(i) && (r.push(i), r.push(t[i]));
                      }
                      d._setFieldList(e, r, n);
                    }),
                    (d._setFieldExpire = function (e, t, n) {
                      var i = new Date();
                      i.setTime(i.getTime() + 1000 * t),
                        null == d._fields && (d._fields = {}),
                        (d._fields['expire' + e] =
                          Math.floor(i.getTime() / 1000) + (n ? 's' : '')),
                        t < 0
                          ? (d._fieldsExpired || (d._fieldsExpired = {}),
                            (d._fieldsExpired[e] = !0))
                          : d._fieldsExpired && (d._fieldsExpired[e] = !1),
                        n &&
                          (d.cookieRead(d.sessionCookieName) ||
                            d.cookieWrite(d.sessionCookieName, '1'));
                    }),
                    (d._findVisitorID = function (t) {
                      return (
                        t &&
                          ('object' === e(t) &&
                            (t = t.d_mid
                              ? t.d_mid
                              : t.visitorID
                              ? t.visitorID
                              : t.id
                              ? t.id
                              : t.uuid
                              ? t.uuid
                              : '' + t),
                          t && 'NOTARGET' === (t = t.toUpperCase()) && (t = O),
                          (t && (t === O || t.match(ie.VALID_VISITOR_ID_REGEX))) || (t = '')),
                        t
                      );
                    }),
                    (d._setFields = function (t, n) {
                      if (
                        (d._clearTimeout(t),
                        null != d._loading && (d._loading[t] = !1),
                        w.fieldGroupObj[t] && w.setState(t, !1),
                        'MC' === t)
                      ) {
                        !0 !== w.isClientSideMarketingCloudVisitorID &&
                          (w.isClientSideMarketingCloudVisitorID = !1);
                        var i = d._getField(v);
                        if (!i || d.overwriteCrossDomainMCIDAndAID) {
                          if (!(i = 'object' === e(n) && n.mid ? n.mid : d._findVisitorID(n))) {
                            if (
                              d._use1stPartyMarketingCloudServer &&
                              !d.tried1stPartyMarketingCloudServer
                            )
                              return (
                                (d.tried1stPartyMarketingCloudServer = !0),
                                void d.getAnalyticsVisitorID(null, !1, !0)
                              );
                            i = d._generateLocalMID();
                          }
                          d._setField(v, i);
                        }
                        (i && i !== O) || (i = ''),
                          'object' === e(n) &&
                            ((n.d_region || n.dcs_region || n.d_blob || n.blob) &&
                              d._setFields(A, n),
                            d._use1stPartyMarketingCloudServer &&
                              n.mid &&
                              d._setFields(S, { id: n.id })),
                          d._callAllCallbacks(v, [i]);
                      }
                      if (t === A && 'object' === e(n)) {
                        var r = 604800;
                        void 0 != n.id_sync_ttl &&
                          n.id_sync_ttl &&
                          (r = parseInt(n.id_sync_ttl, 10));
                        var a = P.getRegionAndCheckIfChanged(n, r);
                        d._callAllCallbacks('MCAAMLH', [a]);
                        var o = d._getField(y);
                        (n.d_blob || n.blob) &&
                          ((o = n.d_blob),
                          o || (o = n.blob),
                          d._setFieldExpire(y, r),
                          d._setField(y, o)),
                          o || (o = ''),
                          d._callAllCallbacks(y, [o]),
                          !n.error_msg &&
                            d._newCustomerIDsHash &&
                            d._setField('MCCIDH', d._newCustomerIDsHash);
                      }
                      if (t === S) {
                        var s = d._getField(b);
                        (s && !d.overwriteCrossDomainMCIDAndAID) ||
                          ((s = d._findVisitorID(n)),
                          s ? s !== O && d._setFieldExpire(y, -1) : (s = O),
                          d._setField(b, s)),
                          (s && s !== O) || (s = ''),
                          d._callAllCallbacks(b, [s]);
                      }
                      if (d.idSyncDisableSyncs || d.disableIdSyncs) P.idCallNotProcesssed = !0;
                      else {
                        P.idCallNotProcesssed = !1;
                        var l = {};
                        (l.ibs = n.ibs), (l.subdomain = n.subdomain), P.processIDCallData(l);
                      }
                      if (n === Object(n)) {
                        var c, f;
                        u() && d.isAllowed() && (c = d._getField('MCOPTOUT'));
                        var g = j.parseOptOut(n, c, O);
                        (c = g.optOut),
                          (f = g.d_ottl),
                          d._setFieldExpire('MCOPTOUT', f, !0),
                          d._setField('MCOPTOUT', c),
                          d._callAllCallbacks('MCOPTOUT', [c]);
                      }
                    }),
                    (d._loading = null),
                    (d._getRemoteField = function (e, t, n, i, r) {
                      var a,
                        o = '',
                        s = L.isFirstPartyAnalyticsVisitorIDCall(e),
                        l = { MCAAMLH: !0, MCAAMB: !0 };
                      if (u() && d.isAllowed()) {
                        d._readVisitor(), (o = d._getField(e, !0 === l[e]));
                        if (
                          (function () {
                            return (
                              (!o || (d._fieldsExpired && d._fieldsExpired[e])) &&
                              (!d.disableThirdPartyCalls || s)
                            );
                          })()
                        ) {
                          if (
                            (e === v || 'MCOPTOUT' === e
                              ? (a = 'MC')
                              : 'MCAAMLH' === e || e === y
                              ? (a = A)
                              : e === b && (a = S),
                            a)
                          )
                            return (
                              !t ||
                                (null != d._loading && d._loading[a]) ||
                                (null == d._loading && (d._loading = {}),
                                (d._loading[a] = !0),
                                d._loadData(
                                  a,
                                  t,
                                  function (t) {
                                    if (!d._getField(e)) {
                                      t && w.setState(a, !0);
                                      var n = '';
                                      e === v
                                        ? (n = d._generateLocalMID())
                                        : a === A && (n = { error_msg: 'timeout' }),
                                        d._setFields(a, n);
                                    }
                                  },
                                  r
                                )),
                              d._registerCallback(e, n),
                              o || (t || d._setFields(a, { id: O }), '')
                            );
                        } else
                          o ||
                            (e === v
                              ? (d._registerCallback(e, n),
                                (o = d._generateLocalMID()),
                                d.setMarketingCloudVisitorID(o))
                              : e === b
                              ? (d._registerCallback(e, n), (o = ''), d.setAnalyticsVisitorID(o))
                              : ((o = ''), (i = !0)));
                      }
                      return (
                        (e !== v && e !== b) || o !== O || ((o = ''), (i = !0)),
                        n && i && d._callCallback(n, [o]),
                        o
                      );
                    }),
                    (d._setMarketingCloudFields = function (e) {
                      d._readVisitor(), d._setFields('MC', e);
                    }),
                    (d._mapCustomerIDs = function (e) {
                      d.getAudienceManagerBlob(e, !0);
                    }),
                    (d._setAnalyticsFields = function (e) {
                      d._readVisitor(), d._setFields(S, e);
                    }),
                    (d._setAudienceManagerFields = function (e) {
                      d._readVisitor(), d._setFields(A, e);
                    }),
                    (d._getAudienceManagerURLData = function (e) {
                      var t = d.audienceManagerServer,
                        n = '',
                        i = d._getField(v),
                        r = d._getField(y, !0),
                        a = d._getField(b),
                        o = a && a !== O ? '&d_cid_ic=AVID%01' + encodeURIComponent(a) : '';
                      if (
                        (d.loadSSL &&
                          d.audienceManagerServerSecure &&
                          (t = d.audienceManagerServerSecure),
                        t)
                      ) {
                        var s,
                          l,
                          c = d.getCustomerIDs();
                        if (c)
                          for (s in c)
                            M(s) &&
                              ((l = c[s]),
                              (o +=
                                '&d_cid_ic=' +
                                encodeURIComponent(s) +
                                '%01' +
                                encodeURIComponent(l.id ? l.id : '') +
                                (l.authState ? '%01' + l.authState : '')));
                        e || (e = '_setAudienceManagerFields');
                        var u = 'http' + (d.loadSSL ? 's' : '') + '://' + t + '/id',
                          f =
                            'd_visid_ver=' +
                            d.version +
                            (g && -1 !== u.indexOf('demdex.net')
                              ? '&gdpr=1&gdpr_force=1&gdpr_consent=' + g
                              : '') +
                            '&d_rtbd=json&d_ver=2' +
                            (!i && d._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                            '&d_orgid=' +
                            encodeURIComponent(d.marketingCloudOrgID) +
                            '&d_nsid=' +
                            (d.idSyncContainerID || 0) +
                            (i ? '&d_mid=' + encodeURIComponent(i) : '') +
                            (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies
                              ? '&d_coppa=true'
                              : '') +
                            (!0 === I ? '&d_coop_safe=1' : !1 === I ? '&d_coop_unsafe=1' : '') +
                            (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                            o,
                          p = ['s_c_il', d._in, e];
                        return (
                          (n = u + '?' + f + '&d_cb=s_c_il%5B' + d._in + '%5D.' + e),
                          { url: n, corsUrl: u + '?' + f, callback: p }
                        );
                      }
                      return { url: n };
                    }),
                    (d.appendVisitorIDsTo = function (e) {
                      try {
                        var t = [
                          [v, d._getField(v)],
                          [b, d._getField(b)],
                          ['MCORGID', d.marketingCloudOrgID],
                        ];
                        return d._addQuerystringParam(e, ie.ADOBE_MC, s(t));
                      } catch (t) {
                        return e;
                      }
                    }),
                    (d.appendSupplementalDataIDTo = function (e, t) {
                      if (!(t = t || d.getSupplementalDataID(L.generateRandomString(), !0)))
                        return e;
                      try {
                        var n = s([
                          ['SDID', t],
                          ['MCORGID', d.marketingCloudOrgID],
                        ]);
                        return d._addQuerystringParam(e, ie.ADOBE_MC_SDID, n);
                      } catch (t) {
                        return e;
                      }
                    });
                  var L = {
                    parseHash: function (e) {
                      var t = e.indexOf('#');
                      return t > 0 ? e.substr(t) : '';
                    },
                    hashlessUrl: function (e) {
                      var t = e.indexOf('#');
                      return t > 0 ? e.substr(0, t) : e;
                    },
                    addQueryParamAtLocation: function (e, t, n) {
                      var i = e.split('&');
                      return (n = null != n ? n : i.length), i.splice(n, 0, t), i.join('&');
                    },
                    isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
                      if (e !== b) return !1;
                      var i;
                      return (
                        t || (t = d.trackingServer),
                        n || (n = d.trackingServerSecure),
                        !('string' != typeof (i = d.loadSSL ? n : t) || !i.length) &&
                          i.indexOf('2o7.net') < 0 &&
                          i.indexOf('omtrdc.net') < 0
                      );
                    },
                    isObject: function (e) {
                      return Boolean(e && e === Object(e));
                    },
                    removeCookie: function (e) {
                      Ve.remove(e, { domain: d.cookieDomain });
                    },
                    isTrackingServerPopulated: function () {
                      return !!d.trackingServer || !!d.trackingServerSecure;
                    },
                    getTimestampInSeconds: function () {
                      return Math.round(new Date().getTime() / 1000);
                    },
                    parsePipeDelimetedKeyValues: function (e) {
                      return e.split('|').reduce(function (e, t) {
                        var n = t.split('=');
                        return (e[n[0]] = decodeURIComponent(n[1])), e;
                      }, {});
                    },
                    generateRandomString: function (e) {
                      e = e || 5;
                      for (var t = '', n = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--; )
                        t += n[Math.floor(Math.random() * n.length)];
                      return t;
                    },
                    normalizeBoolean: function (e) {
                      return 'true' === e || ('false' !== e && e);
                    },
                    parseBoolean: function (e) {
                      return 'true' === e || ('false' !== e && null);
                    },
                    replaceMethodsWithFunction: function (e, t) {
                      for (var n in e)
                        e.hasOwnProperty(n) && 'function' == typeof e[n] && (e[n] = t);
                      return e;
                    },
                  };
                  d._helpers = L;
                  var P = re(d, C);
                  (d._destinationPublishing = P), (d.timeoutMetricsLog = []);
                  var w = {
                    isClientSideMarketingCloudVisitorID: null,
                    MCIDCallTimedOut: null,
                    AnalyticsIDCallTimedOut: null,
                    AAMIDCallTimedOut: null,
                    fieldGroupObj: {},
                    setState: function (e, t) {
                      switch (e) {
                        case 'MC':
                          !1 === t
                            ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1)
                            : (this.MCIDCallTimedOut = t);
                          break;
                        case S:
                          !1 === t
                            ? !0 !== this.AnalyticsIDCallTimedOut &&
                              (this.AnalyticsIDCallTimedOut = !1)
                            : (this.AnalyticsIDCallTimedOut = t);
                          break;
                        case A:
                          !1 === t
                            ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1)
                            : (this.AAMIDCallTimedOut = t);
                      }
                    },
                  };
                  (d.isClientSideMarketingCloudVisitorID = function () {
                    return w.isClientSideMarketingCloudVisitorID;
                  }),
                    (d.MCIDCallTimedOut = function () {
                      return w.MCIDCallTimedOut;
                    }),
                    (d.AnalyticsIDCallTimedOut = function () {
                      return w.AnalyticsIDCallTimedOut;
                    }),
                    (d.AAMIDCallTimedOut = function () {
                      return w.AAMIDCallTimedOut;
                    }),
                    (d.idSyncGetOnPageSyncInfo = function () {
                      return d._readVisitor(), d._getField('MCSYNCSOP');
                    }),
                    (d.idSyncByURL = function (e) {
                      if (!d.isOptedOut()) {
                        var t = l(e || {});
                        if (t.error) return t.error;
                        var n,
                          i,
                          r = e.url,
                          a = encodeURIComponent,
                          o = P;
                        return (
                          (r = r.replace(/^https:/, '').replace(/^http:/, '')),
                          (n = j.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                          (i = ['ibs', a(e.dpid), 'img', a(r), t.ttl, '', n]),
                          o.addMessage(i.join('|')),
                          o.requestToProcess(),
                          'Successfully queued'
                        );
                      }
                    }),
                    (d.idSyncByDataSource = function (e) {
                      if (!d.isOptedOut())
                        return e === Object(e) && 'string' == typeof e.dpuuid && e.dpuuid.length
                          ? ((e.url =
                              '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                            d.idSyncByURL(e))
                          : 'Error: config or config.dpuuid is empty';
                    }),
                    Ue(d, P),
                    (d._getCookieVersion = function (e) {
                      e = e || d.cookieRead(d.cookieName);
                      var t = ie.VERSION_REGEX.exec(e);
                      return t && t.length > 1 ? t[1] : null;
                    }),
                    (d._resetAmcvCookie = function (e) {
                      var t = d._getCookieVersion();
                      (t && !$.isLessThan(t, e)) || L.removeCookie(d.cookieName);
                    }),
                    (d.setAsCoopSafe = function () {
                      I = !0;
                    }),
                    (d.setAsCoopUnsafe = function () {
                      I = !1;
                    }),
                    (function () {
                      if (((d.configs = Object.create(null)), L.isObject(n)))
                        for (var e in n) M(e) && ((d[e] = n[e]), (d.configs[e] = n[e]));
                    })(),
                    (function () {
                      [
                        ['getMarketingCloudVisitorID'],
                        ['setCustomerIDs', void 0],
                        ['getAnalyticsVisitorID'],
                        ['getAudienceManagerLocationHint'],
                        ['getLocationHint'],
                        ['getAudienceManagerBlob'],
                      ].forEach(function (e) {
                        var t = e[0],
                          n = 2 === e.length ? e[1] : '',
                          i = d[t];
                        d[t] = function (e) {
                          return u() && d.isAllowed()
                            ? i.apply(d, arguments)
                            : ('function' == typeof e && d._callCallback(e, [n]), n);
                        };
                      });
                    })(),
                    (d.init = function () {
                      if (c())
                        var e = f.optIn.fetchPermissions(function () {
                          f.optIn.isApproved(f.optIn.Categories.ECID) &&
                            (d.configs.isIabContext
                              ? f.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: function (t, n) {
                                    if (((p = !0), t)) throw new Error('[IAB plugin] : ' + t);
                                    n.gdprApplies && (g = n.consentString), d.init(), e();
                                  },
                                })
                              : (d.init(), e()));
                        }, !0);
                      else
                        !(function () {
                          if (L.isObject(n)) {
                            (d.idSyncContainerID = d.idSyncContainerID || 0),
                              (I =
                                'boolean' == typeof d.isCoopSafe
                                  ? d.isCoopSafe
                                  : L.parseBoolean(d.isCoopSafe)),
                              d.resetBeforeVersion && d._resetAmcvCookie(d.resetBeforeVersion),
                              d._attemptToPopulateIdsFromUrl(),
                              d._attemptToPopulateSdidFromUrl(),
                              d._readVisitor();
                            var e = d._getField(D),
                              t = Math.ceil(new Date().getTime() / ie.MILLIS_PER_DAY);
                            d.idSyncDisableSyncs ||
                              d.disableIdSyncs ||
                              !P.canMakeSyncIDCall(e, t) ||
                              (d._setFieldExpire(y, -1), d._setField(D, t)),
                              d.getMarketingCloudVisitorID(),
                              d.getAudienceManagerLocationHint(),
                              d.getAudienceManagerBlob(),
                              d._mergeServerState(d.serverState);
                          } else
                            d._attemptToPopulateIdsFromUrl(), d._attemptToPopulateSdidFromUrl();
                        })(),
                          (function () {
                            if (!d.idSyncDisableSyncs && !d.disableIdSyncs) {
                              P.checkDPIframeSrc();
                              var e = function () {
                                var e = P;
                                e.readyToAttachIframe() && e.attachIframe();
                              };
                              h.addEventListener('load', function () {
                                (C.windowLoaded = !0), e();
                              });
                              try {
                                ee.receiveMessage(function (e) {
                                  P.receiveMessage(e.data);
                                }, P.iframeHost);
                              } catch (e) {}
                            }
                          })(),
                          (function () {
                            d.whitelistIframeDomains &&
                              ie.POST_MESSAGE_ENABLED &&
                              ((d.whitelistIframeDomains =
                                d.whitelistIframeDomains instanceof Array
                                  ? d.whitelistIframeDomains
                                  : [d.whitelistIframeDomains]),
                              d.whitelistIframeDomains.forEach(function (e) {
                                var n = new B(t, e),
                                  i = J(d, n);
                                ee.receiveMessage(i, e);
                              }));
                          })();
                    });
                };
                (Be.config = oe), (_.Visitor = Be);
                var Ge = Be,
                  qe = je.OptIn,
                  Ye = je.IabPlugin;
                return (
                  (Ge.getInstance = function (e, t) {
                    if (!e) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                    e.indexOf('@') < 0 && (e += '@AdobeOrg');
                    var n = (function () {
                      var t = _.s_c_il;
                      if (t)
                        for (var n = 0; n < t.length; n++) {
                          var i = t[n];
                          if (i && 'Visitor' === i._c && i.marketingCloudOrgID === e) return i;
                        }
                    })();
                    if (n) return n;
                    var i = (function () {
                      if (j.isObject(t))
                        return Object.keys(t).reduce(function (e, n) {
                          var i = 'doesOptInApply' !== n ? t[n] : oe.normalizeConfig(t[n]),
                            r = j.normalizeBoolean(i);
                          return (e[n] = r), e;
                        }, Object.create(null));
                    })();
                    !(function (e) {
                      _.adobe.optIn =
                        _.adobe.optIn ||
                        (function () {
                          var t = j.pluck(e, [
                              'doesOptInApply',
                              'previousPermissions',
                              'preOptInApprovals',
                              'isOptInStorageEnabled',
                              'optInStorageExpiry',
                              'isIabContext',
                            ]),
                            n = e.optInCookieDomain || e.cookieDomain;
                          (n = n || Q()),
                            (n = n === window.location.hostname ? '' : n),
                            (t.optInCookieDomain = n);
                          var i = new qe(t, { cookies: Ve });
                          if (t.isIabContext) {
                            var r = new Ye(window.__cmp);
                            i.registerPlugin(r);
                          }
                          return i;
                        })();
                    })(i || {});
                    var r = e,
                      a = r.split('').reverse().join(''),
                      o = new Ge(e, null, a);
                    j.isObject(i) && i.cookieDomain && (o.cookieDomain = i.cookieDomain),
                      (function () {
                        _.s_c_il.splice(--_.s_c_in, 1);
                      })();
                    var s = j.getIeVersion();
                    if ('number' == typeof s && s < 10)
                      return o._helpers.replaceMethodsWithFunction(o, function () {});
                    var l =
                      (function () {
                        try {
                          return _.self !== _.parent;
                        } catch (e) {
                          return !0;
                        }
                      })() &&
                      !(function (e) {
                        return (
                          e.cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                          'T' === e.cookieRead('TEST_AMCV_COOKIE') &&
                            (e._helpers.removeCookie('TEST_AMCV_COOKIE'), !0)
                        );
                      })(o) &&
                      _.parent
                        ? new q(e, i, o, _.parent)
                        : new Ge(e, i, a);
                    return (o = null), l.init(), l;
                  }),
                  (function () {
                    function e () {
                      Ge.windowLoaded = !0;
                    }
                    _.addEventListener
                      ? _.addEventListener('load', e)
                      : _.attachEvent && _.attachEvent('onload', e),
                      (Ge.codeLoadEnd = new Date().getTime());
                  })(),
                  Ge
                );
              })();
              var visitor = Visitor.getInstance('5E34123F5245B2CD0A490D45@AdobeOrg', {
                trackingServer: 'met1.hp.com',
                trackingServerSecure: 'met2.hp.com',
                marketingCloudServer: 'met1.hp.com',
                marketingCloudServerSecure: 'met2.hp.com',
              });
            }
            window.visitorClosureDone = true;
          } else setTimeout(visitorClosure, 50);
        })();
      },
      3158145,
      [3375270],
      613579,
      [371978]
    );
  })();
}
