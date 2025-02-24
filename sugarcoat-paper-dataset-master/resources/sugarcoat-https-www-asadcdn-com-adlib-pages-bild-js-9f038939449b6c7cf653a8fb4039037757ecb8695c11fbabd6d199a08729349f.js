var framed,
  inDapIf,
  fif,
  ASCDP,
  apntag,
  sas_callAd,
  sas_callAds,
  sas_ccf,
  asmi,
  sas_ajax,
  sas_target,
  sas_queue,
  sasmobile,
  SmartAdServerAjax,
  SmartAdServerASMI;
{
  const $___stub_fd468a9a287c63aa = {};
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
  })($___stub_fd468a9a287c63aa);
  const $___stub_6dae24411f43be95 = {};
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
  })($___stub_6dae24411f43be95);
  const $___stub_187b68ea62666909 = {};
  (exports => {
    'use strict';
    const xhrUnsent = 0;
    const xhrOpened = 1;
    const xhrHeadersReceived = 2;
    const xhrLoading = 3;
    const xhrDone = 4;
    const xhrDeferredHandleSymbol = Symbol('deferredHandle');
    const xhrOnLoadStartSymbol = Symbol('onloadstart');
    const xhrOnProgressSymbol = Symbol('onprogress');
    const xhrOnAbortSymbol = Symbol('onabort');
    const xhrOnErrorSymbol = Symbol('onerror');
    const xhrOnLoadSymbol = Symbol('onload');
    const xhrOnTimeoutSymbol = Symbol('ontimeout');
    const xhrOnLoadEndSymbol = Symbol('onloadend');
    const xhrOnReadyStateChangeSymbol = Symbol('onreadystatechange');
    const xhrReadyStateSymbol = Symbol('readyState');
    const xhrTimeoutSymbol = Symbol('timeout');
    const xhrWithCredentialsSymbol = Symbol('withCredentials');
    const xhrUploadSymbol = Symbol('upload');
    const xhrResponseTypeSymbol = Symbol('responseType');
    const defineEvent = (obj, symbol) => {
      const type = symbol.description.substring(2);
      Object.defineProperty(obj, symbol, {
        configurable: false,
        enumerable: false,
        value: null,
        writable: true,
      });
      obj.addEventListener(type, function (event) {
        const handler = this[symbol];
        if (handler) {
          handler(event);
        }
      });
    };
    const changeReadyState = (xhr, readyState) => {
      xhr[xhrReadyStateSymbol] = readyState;
      xhr.dispatchEvent(new Event('readystatechange'));
    };
    let isSealed = true;
    class XMLHttpRequestEventTarget extends EventTarget {
      constructor () {
        super();
        if (!(this instanceof XMLHttpRequest) && !(this instanceof XMLHttpRequestUpload)) {
          throw new TypeError('Illegal constructor');
        }
        defineEvent(this, xhrOnLoadStartSymbol);
        defineEvent(this, xhrOnProgressSymbol);
        defineEvent(this, xhrOnAbortSymbol);
        defineEvent(this, xhrOnErrorSymbol);
        defineEvent(this, xhrOnLoadSymbol);
        defineEvent(this, xhrOnTimeoutSymbol);
        defineEvent(this, xhrOnLoadEndSymbol);
      }
      get onloadstart () {
        return this[xhrOnLoadStartSymbol];
      }
      set onloadstart (value) {
        this[xhrOnLoadStartSymbol] = value;
      }
      get onprogress () {
        return this[xhrOnProgressSymbol];
      }
      set onprogress (value) {
        this[xhrOnProgressSymbol] = value;
      }
      get onabort () {
        return this[xhrOnAbortSymbol];
      }
      set onabort (value) {
        this[xhrOnAbortSymbol] = value;
      }
      get onerror () {
        return this[xhrOnErrorSymbol];
      }
      set onerror (value) {
        this[xhrOnErrorSymbol] = value;
      }
      get ontimeout () {
        return this[xhrOnTimeoutSymbol];
      }
      set ontimeout (value) {
        this[xhrOnTimeoutSymbol] = value;
      }
      get onloadend () {
        return this[xhrOnLoadEndSymbol];
      }
      set onloadend (value) {
        this[xhrOnLoadEndSymbol] = value;
      }
    }
    exports.XMLHttpRequestEventTarget = {
      configurable: true,
      enumerable: true,
      value: XMLHttpRequestEventTarget,
      writable: true,
    };
    class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
        super();
      }
    }
    exports.XMLHttpRequestUpload = {
      configurable: true,
      enumerable: true,
      value: XMLHttpRequestUpload,
      writable: true,
    };
    class XMLHttpRequest extends XMLHttpRequestEventTarget {
      constructor () {
        super();
        isSealed = false;
        const xhrUpload = new XMLHttpRequestUpload();
        isSealed = true;
        Object.defineProperty(this, xhrDeferredHandleSymbol, {
          configurable: false,
          enumerable: false,
          value: null,
          writable: true,
        });
        defineEvent(this, xhrOnReadyStateChangeSymbol);
        Object.defineProperty(this, xhrReadyStateSymbol, {
          configurable: false,
          enumerable: false,
          value: xhrUnsent,
          writable: true,
        });
        Object.defineProperty(this, xhrTimeoutSymbol, {
          configurable: false,
          enumerable: false,
          value: 0,
          writable: true,
        });
        Object.defineProperty(this, xhrWithCredentialsSymbol, {
          configurable: false,
          enumerable: false,
          value: false,
          writable: true,
        });
        Object.defineProperty(this, xhrUploadSymbol, {
          configurable: false,
          enumerable: false,
          value: xhrUpload,
          writable: false,
        });
        Object.defineProperty(this, xhrResponseTypeSymbol, {
          configurable: false,
          enumerable: false,
          value: '',
          writable: true,
        });
      }
      get onreadystatechange () {
        return this[xhrOnReadyStateChangeSymbol];
      }
      set onreadystatechange (value) {
        this[xhrOnReadyStateChangeSymbol] = value;
      }
      get readyState () {
        return this[xhrReadyStateSymbol];
      }
      open (method, url) {
        switch (this[xhrReadyStateSymbol]) {
          case xhrUnsent:
          case xhrDone: {
            changeReadyState(this, xhrOpened);
            break;
          }
        }
      }
      setRequestHeader (name, value) {}
      setTrustToken (trustToken) {}
      get timeout () {
        return this[xhrTimeoutSymbol];
      }
      set timeout (value) {
        this[xhrTimeoutSymbol] = value;
      }
      get withCredentials () {
        return this[xhrWithCredentialsSymbol];
      }
      set withCredentials (value) {
        switch (this[xhrReadyStateSymbol]) {
          case xhrUnsent:
          case xhrOpened: {
            break;
          }
          default: {
            throw new DOMException(
              "Failed to set the 'withCredentials' property on 'XMLHttpRequest': The value may only be set if the object's state is UNSENT or OPENED."
            );
          }
        }
        this[xhrWithCredentialsSymbol] = !!value;
      }
      get upload () {
        return this[xhrUploadSymbol];
      }
      send () {
        if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] === null) {
          this[xhrDeferredHandleSymbol] = setTimeout(() => {
            this[xhrDeferredHandleSymbol] = null;
            changeReadyState(this, xhrDone);
            this.dispatchEvent(new ProgressEvent('error'));
            this.dispatchEvent(new ProgressEvent('loadend'));
          }, 0);
        } else {
          throw new DOMException(
            "Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED."
          );
        }
      }
      abort () {
        if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] !== null) {
          clearTimeout(this[xhrDeferredHandleSymbol]);
          this[xhrDeferredHandleSymbol] = null;
          changeReadyState(this, xhrUnsent);
          this.dispatchEvent(new ProgressEvent('abort'));
          this.dispatchEvent(new ProgressEvent('loadend'));
        }
      }
      get responseURL () {
        return '';
      }
      get status () {
        return 0;
      }
      get statusText () {
        return '';
      }
      getResponseHeader (name) {
        return null;
      }
      overrideMimeType (mime) {}
      get responseType () {
        return this[xhrResponseTypeSymbol];
      }
      set responseType (value) {
        switch (this[xhrReadyStateSymbol]) {
          case xhrDone: {
            throw new DOMException(
              "Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set if the object's state is LOADING or DONE."
            );
          }
        }
        switch (value) {
          case '':
          case 'arraybuffer':
          case 'blob':
          case 'document':
          case 'json':
          case 'text': {
            this[xhrResponseTypeSymbol] = value;
            break;
          }
        }
      }
      get response () {
        const responseType = this[xhrResponseTypeSymbol];
        return responseType === '' || responseType === 'text' ? '' : null;
      }
      get responseText () {
        const responseType = this[xhrResponseTypeSymbol];
        if (responseType === '' || responseType === 'text') {
          return '';
        } else {
          throw new DOMException(
            "Failed to read the 'responseText' property from 'XMLHttpRequest': The value is only accessible if the object's 'responseType' is '' or 'text' (was 'arraybuffer')."
          );
        }
      }
      get responseXML () {
        return null;
      }
    }
    Object.defineProperty(XMLHttpRequest, 'UNSENT', {
      configurable: false,
      enumerable: true,
      value: xhrUnsent,
    });
    Object.defineProperty(XMLHttpRequest, 'OPENED', {
      configurable: false,
      enumerable: true,
      value: xhrOpened,
    });
    Object.defineProperty(XMLHttpRequest, 'HEADERS_RECEIVED', {
      configurable: false,
      enumerable: true,
      value: xhrHeadersReceived,
    });
    Object.defineProperty(XMLHttpRequest, 'LOADING', {
      configurable: false,
      enumerable: true,
      value: xhrLoading,
    });
    Object.defineProperty(XMLHttpRequest, 'DONE', {
      configurable: false,
      enumerable: true,
      value: xhrDone,
    });
    exports.XMLHttpRequest = {
      configurable: true,
      enumerable: true,
      value: XMLHttpRequest,
      writable: true,
    };
  })($___stub_187b68ea62666909);
  const $___stub_d454ba247eb956b2 = {};
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
  })($___stub_d454ba247eb956b2);
  const $___old_d099345f6ecc1f41 = {}.constructor.getOwnPropertyDescriptor(
      Navigator.prototype,
      'userAgent'
    ),
    $___old_4b4f0e2544504011 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
  try {
    if ($___old_d099345f6ecc1f41)
      ({}.constructor.defineProperty(
        Navigator.prototype,
        'userAgent',
        $___stub_fd468a9a287c63aa.userAgent
      ));
    if ($___old_4b4f0e2544504011)
      ({}.constructor.defineProperty(
        window,
        'XMLHttpRequest',
        $___stub_187b68ea62666909.XMLHttpRequest
      ));
    (function () {
      var $___var_2704ed051484dca6 = !1,
        $___var_82942e12e29a792d = !1,
        $___var_d4e14c5c3fbfa689 = !1,
        $___var_bdb83a7936a88a08 = window.ASCDP || {},
        $___var_b2a374c47b7178a4 = window.apntag || {};
      framed = $___var_2704ed051484dca6;
      inDapIf = $___var_82942e12e29a792d;
      fif = $___var_d4e14c5c3fbfa689;
      ASCDP = $___var_bdb83a7936a88a08;
      apntag = $___var_b2a374c47b7178a4;
      if (
        ((apntag.anq = apntag.anq || []),
        (ASCDP.initPageSet = function () {
          const $___old_84f01e58709c9c2f = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_84f01e58709c9c2f)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_fd468a9a287c63aa.userAgent
              ));
            return function () {
              var e;
              ASCDP.pageSet = {
                protocol: 'https:' === location.href.substring(0, 6) ? 'https:' : 'http:',
                view: !(!window.adSSetup || !adSSetup.view) && adSSetup.view,
                isAMP: !(!window.adSSetup || !adSSetup.isAMP),
                pageName: window.adSSetup && adSSetup.pageName ? adSSetup.pageName : 'notSet',
                target:
                  (window.adSSetup && adSSetup.target ? adSSetup.target + ';' : '') +
                  ';' +
                  location.hash.replace('#', '') +
                  ';',
                siteName: 'bild',
                siteDomain: 'bild.de',
                siteId: 109242,
                siteIdMobile: 112673,
                memberId: 7823,
                publisherId: 1000494,
                tagInTag: !1,
                async: !(!window.adSSetup || void 0 === adSSetup.async) && adSSetup.async,
                useTTJ: 'ionic:' === location.protocol || 'file:' === location.protocol,
                bbFix: !1,
                useTCF: !0,
                partners: !window.adSSetup || void 0 === adSSetup.partners || adSSetup.partners,
                retgtHome: !1,
                autoReloader: !0,
                autoReloadTimer: 20000,
                autoReloadHome: !1,
                tealKeys: [
                  'dip_properties.5914',
                  'dip_properties.5894',
                  'dip_properties.5920',
                  'dip_properties.5882',
                  'properties.8342',
                  'badges.5764',
                  'badges.6075',
                  'badges.6750',
                  'badges.6611',
                  'badges.6643',
                  'badges.6645',
                  'badges.6647',
                  'badges.5766',
                  'badges.6519',
                  'badges.5572',
                  'badges.6788',
                  'badges.6754',
                  'badges.6756',
                  'badges.6734',
                  'badges.7773',
                  'badges.6586',
                  'badges.6863',
                  'badges.6865',
                  'properties.7721',
                  'badges.8758',
                  'badges.8702',
                  'badges.8896',
                  'badges.8898',
                  'badges.8900',
                  'badges.8922',
                  'badges.8924',
                  'badges.8930',
                ],
                tealProfile: 'tealium_va_axelspringer_bild',
                yieldLab: !0,
                yieldParams: {
                  desktop: {
                    sb: 463361,
                    sky: 463355,
                    mrec: 463357,
                    dds: 463358,
                    hpa: 463359,
                    bb: 463362,
                    wp: 463360,
                    rm: 463356,
                    inread: 463354,
                  },
                  mobile: {
                    sb: 463367,
                    sky: 463364,
                    bb: 463366,
                    mrec: 463365,
                    rm: 463363,
                    inread: 1606304,
                  },
                },
                yieldParamsGM: {
                  desktop: {
                    sb: 2060898,
                    sky: 2060895,
                    mrec: 2060896,
                    dds: 2060900,
                    hpa: 2060897,
                    bb: 2060899,
                    wp: '',
                    rm: '',
                    inread: 2061228,
                    preroll: 5990473,
                  },
                  mobile: {
                    sb: 2061113,
                    sky: 2061112,
                    bb: 2061110,
                    mrec: 2060896,
                    rm: '',
                    inread: 2061109,
                    preroll: 5990473,
                  },
                },
                amazon: !0,
                prebid: !0,
                pbBidder: [
                  'criteo',
                  'openx',
                  'yieldlab',
                  'pubmatic',
                  'aduptech',
                  'ix',
                  'rubicon',
                  'teads',
                  'orbidder',
                  'smartadserver',
                ],
                pb_aduptech: {
                  '728x90': { atf: '728x90', btf: '728x90' },
                  '160x600': { atf: '160x600', btf: '160x600' },
                  '300x600': { atf: '300x600', btf: '300x600' },
                  '970x250': { atf: '970x250', btf: '970x250' },
                  '300x75': { atf: '300x75', btf: '300x75' },
                  '300x250': { atf: '300x250', btf: '300x250' },
                  '320x160': { atf: '320x160', btf: '320x160' },
                  params: { publisher: 'mediaimpact', placement: '{PLACEMENTNAME}' },
                  toNetPrice: 1,
                },
                pb_criteo: {
                  '728x90': { atf: '1101', btf: '1101' },
                  '800x250': { atf: '1101', btf: '1101' },
                  '970x250': { atf: '1101', btf: '1101' },
                  '160x600': { atf: '1101', btf: '1101' },
                  '300x250': { atf: '1101', btf: '1101' },
                  '640x360': { atf: '1101', btf: '1101' },
                  '640x480': { atf: '1101', btf: '1101' },
                  '320x480': { atf: '1101', btf: '1101' },
                  '320x50': { atf: '1101', btf: '1101' },
                  params: { networkId: '{PLACEMENTID}', publisherSubId: '{PLACEMENTNAME}' },
                  toNetPrice: 1,
                },
                pb_districtmDMX: {},
                pb_ix: {
                  '728x90': { atf: '399093', btf: '399099' },
                  '160x600': { atf: '399094', btf: '399100' },
                  '300x600': { atf: '399095', btf: '399101' },
                  '800x250': { atf: '399096', btf: '399102' },
                  '970x250': { atf: '399097', btf: '399103' },
                  '300x250': { atf: '399092', btf: '399098' },
                  '320x50': { atf: '399105', btf: '399107' },
                  '320x480': { atf: '399104', btf: '399106' },
                  '640x480': { atf: '488821', btf: '488821' },
                  params: { siteId: '{PLACEMENTID}', size: '{SIZEARR}' },
                  toNetPrice: 1,
                },
                pb_openx: {
                  '728x90': { atf: '540676656', btf: '540676657' },
                  '800x250': { atf: '540676656', btf: '540676657' },
                  '160x600': { atf: '540676646', btf: '540676647' },
                  '300x250': { atf: '540676648', btf: '540676649' },
                  params: {
                    delDomain: 'axel-springer-d.openx.net',
                    unit: '{PLACEMENTID}',
                    customParams: { zoneIdent: '{PLACEMENTGROUP}' },
                  },
                  toNetPrice: 1,
                },
                pb_pubmatic: {
                  '728x90': { atf: '1956795', btf: '1956806' },
                  '800x250': { atf: '1956795', btf: '1956806' },
                  '160x600': { atf: '1956797', btf: '1956802' },
                  '300x250': { atf: '1956006', btf: '2482354' },
                  '640x480': { atf: '2481473', btf: '2481473' },
                  params: {
                    publisherId: '156678',
                    pmzoneid: '{SITEDOMAIN}',
                    adSlot: '{PLACEMENTID}',
                  },
                  toNetPrice: 1,
                },
                pb_rubicon: {
                  '728x90': { atf: '57', btf: '57' },
                  '800x250': { atf: '57', btf: '57' },
                  '160x600': { atf: '10', btf: '10' },
                  '300x250': { atf: '15', btf: '15' },
                  '320x50': { atf: '34', btf: '34' },
                  '640x480': { atf: '201', btf: '201' },
                  params: {
                    accountId: '10113',
                    siteId: '245802',
                    zoneId: '1215678',
                    sizes: '{PLACEMENTID}',
                    position: '{POS}',
                    inventory: { domain: '{SITEDOMAIN}', plgroup: '{PLACEMENTGROUP}' },
                    keywords: ['{PLACEMENTGROUP}'],
                  },
                  toNetPrice: 1,
                },
                pb_smartadserver: {
                  '320x480': { atf: '76496', btf: '76498' },
                  '728x90': { atf: '76483', btf: '76491' },
                  '800x250': { atf: '76483', btf: '76491' },
                  '160x600': { atf: '76484', btf: '76492' },
                  '300x250': { atf: '76482', btf: '76489' },
                  params: {
                    domain: 'https://prg.smartadserver.com',
                    siteId: '289956',
                    pageId: '1057571',
                    target: 'site={SITEDOMAIN};plgroup={PLACEMENTGROUP};',
                    formatId: '{PLACEMENTID}',
                  },
                  toNetPrice: 0.95,
                },
                pb_orbidder: {
                  '728x90': { atf: '728x90', btf: '728x90' },
                  '160x600': { atf: '160x600', btf: '160x600' },
                  '300x600': { atf: '300x600', btf: '300x600' },
                  '970x250': { atf: '970x250', btf: '970x250' },
                  '300x75': { atf: '300x75', btf: '300x75' },
                  '300x250': { atf: '300x250', btf: '300x250' },
                  '320x160': { atf: '320x160', btf: '320x160' },
                  params: { accountId: 'mediaimpact', placementId: '{PLACEMENTNAME}' },
                  toNetPrice: 1,
                },
                pb_yieldlab: {
                  '728x90': { atf: 463361, btf: 463361 },
                  '728x600': { atf: 463360, btf: 463360 },
                  '160x600': { atf: 463355, btf: 463355 },
                  '500x1000': { atf: 463358, btf: 463358 },
                  '300x250': { d: 463357, m: 463365 },
                  '300x600': { atf: 463359, btf: 463359 },
                  '970x250': { atf: 463362, btf: 463362 },
                  '800x250': { atf: 463362, btf: 463362 },
                  '1x1': { atf: 463356, btf: 463356 },
                  '640x360': { atf: 463354, btf: 463354 },
                  '320x50': { atf: 463367, btf: 463367 },
                  '320x160': { atf: 463364, btf: 463364 },
                  '320x80': { atf: 463366, btf: 463366 },
                  params: {
                    adslotId: '{PLACEMENTID}',
                    adSize: '{SIZE}',
                    supplyId: '453131',
                    extId: '{PLACEMENTGROUP}',
                    toNetPrice: 0.915,
                  },
                },
                pb_bius: {},
                xhrVideoInterceptor: !0,
                remtreck: !0,
                pgWidth: 1017,
                outerWrapper: 'outerWrapper',
                innerWrapperArr: ['#innerWrapper', '.page-content', '#superbanner'],
                colorBg: !window.adSSetup || void 0 === adSSetup.colorBg || adSSetup.colorBg,
                bgClick: !window.adSSetup || void 0 === adSSetup.bgClick || adSSetup.bgClick,
                bgClickSelector: 'wallpaper|wpCont|outerWrapper|page-wrapper',
                cursorCSS:
                  'body > * {cursor: default;} html, body, a, #skyscraper {cursor:pointer;}#outerWrapper > *, .page-wrapper > * {cursor: auto;} #outerWrapper, .page-wrapper {cursor:pointer;}',
                overlayArr: [],
                blockerMatrix: {
                  superbanner: {
                    wallpaper: {
                      sky: [
                        [120, 600],
                        [160, 600],
                        [300, 600],
                      ],
                    },
                    fireplace: {
                      sky: [
                        [120, 600],
                        [160, 600],
                        [300, 600],
                      ],
                    },
                  },
                  sky: {
                    sitebar: {
                      superbanner: [
                        [728, 600],
                        [1000, 600],
                      ],
                    },
                    doubleSitebar: { superbanner: [['x', 'x']] },
                  },
                  mrec: { interscroller: { mrec_btf: [['x', 'x']] } },
                },
                pageCSS:
                  'div[id^="div_utif_"] {display:block!important;line-height:0;font-size:0;}.wallpaper iframe, .fireplace iframe {margin:0!important;} #superbanner_btf .wallpaper, #superbanner_btf .fireplace, #superbanner_btf .takeover {left: -12px;}',
                stickySky: !window.adSSetup || void 0 === adSSetup.stickySky || adSSetup.stickySky,
                floatSky: !0,
                sightloaderArr:
                  window.adSSetup && void 0 !== adSSetup.sightloaderArr
                    ? adSSetup.sightloaderArr
                    : ['.*_btf.*'],
                paulArr: ['.*_btf.*', '^sky', '^mrec'],
                navi: ['nav.main-nav', '.navigation__wrapper'],
                naviMobile: ['.masthead', '.page-header'],
                bottomBar: ['.socialbar--fixed'],
                lblk: 3000,
                outstreamId: ['inpage', 'teaser'],
                outstreamIdMobile: ['inpage', 'mrec'],
                outstreamSoundMouseOver: !1,
                teadsBannerPID: {
                  d:
                    ((e = window.adSSetup || { pageName: '' }),
                    -1 < e.pageName.indexOf('auto')
                      ? '104029'
                      : -1 < e.pageName.indexOf('geld')
                      ? '104034'
                      : -1 < e.pageName.indexOf('lifestyle') || -1 < e.pageName.indexOf('ratgeber')
                      ? '104036'
                      : -1 < e.pageName.indexOf('reise')
                      ? '104060'
                      : -1 < e.pageName.indexOf('sport')
                      ? '104054'
                      : -1 < e.pageName.indexOf('digital') ||
                        -1 < e.pageName.indexOf('spiel') ||
                        -1 < e.pageName.indexOf('teenager')
                      ? '104057'
                      : -1 < e.pageName.indexOf('unterhaltung')
                      ? '104032'
                      : -1 < e.pageName.indexOf('video')
                      ? '70307'
                      : '104049'),
                  m: (function () {
                    var e = window.adSSetup || { pageName: '' };
                    return -1 < e.pageName.indexOf('auto')
                      ? '104064'
                      : -1 < e.pageName.indexOf('geld')
                      ? '104083'
                      : -1 < e.pageName.indexOf('lifestyle') || -1 < e.pageName.indexOf('ratgeber')
                      ? '104085'
                      : -1 < e.pageName.indexOf('reise')
                      ? '104092'
                      : -1 < e.pageName.indexOf('sport')
                      ? '104088'
                      : -1 < e.pageName.indexOf('digital') ||
                        -1 < e.pageName.indexOf('spiel') ||
                        -1 < e.pageName.indexOf('teenager')
                      ? '104091'
                      : -1 < e.pageName.indexOf('unterhaltung')
                      ? '104075'
                      : -1 < e.pageName.indexOf('video')
                      ? '70307'
                      : '104086';
                  })(),
                },
                teadsBannerSlotId: {
                  d: (function () {
                    var e = window.adSSetup || { pageName: '' };
                    return -1 < e.pageName.indexOf('auto')
                      ? '112620'
                      : -1 < e.pageName.indexOf('geld')
                      ? '112625'
                      : -1 < e.pageName.indexOf('lifestyle') || -1 < e.pageName.indexOf('ratgeber')
                      ? '112627'
                      : -1 < e.pageName.indexOf('reise')
                      ? '112646'
                      : -1 < e.pageName.indexOf('sport')
                      ? '112640'
                      : -1 < e.pageName.indexOf('digital') ||
                        -1 < e.pageName.indexOf('spiel') ||
                        -1 < e.pageName.indexOf('teenager')
                      ? '112643'
                      : -1 < e.pageName.indexOf('unterhaltung')
                      ? '112623'
                      : -1 < e.pageName.indexOf('video')
                      ? '70307'
                      : '112635';
                  })(),
                  m: (function () {
                    var e = window.adSSetup || { pageName: '' };
                    return -1 < e.pageName.indexOf('auto')
                      ? '112650'
                      : -1 < e.pageName.indexOf('geld')
                      ? '112669'
                      : -1 < e.pageName.indexOf('lifestyle') || -1 < e.pageName.indexOf('ratgeber')
                      ? '112671'
                      : -1 < e.pageName.indexOf('reise')
                      ? '112678'
                      : -1 < e.pageName.indexOf('sport')
                      ? '112674'
                      : -1 < e.pageName.indexOf('digital') ||
                        -1 < e.pageName.indexOf('spiel') ||
                        -1 < e.pageName.indexOf('teenager')
                      ? '112677'
                      : -1 < e.pageName.indexOf('unterhaltung')
                      ? '112661'
                      : -1 < e.pageName.indexOf('video')
                      ? '70307'
                      : '112672';
                  })(),
                },
                teadsPID: {
                  d: (function () {
                    var e = window.adSSetup || { pageName: '' };
                    return -1 < e.pageName.indexOf('auto')
                      ? '9622'
                      : -1 < e.pageName.indexOf('geld')
                      ? '9624'
                      : -1 < e.pageName.indexOf('lifestyle') || -1 < e.pageName.indexOf('ratgeber')
                      ? '9628'
                      : -1 < e.pageName.indexOf('reise')
                      ? '69061'
                      : -1 < e.pageName.indexOf('sport')
                      ? '9620'
                      : -1 < e.pageName.indexOf('digital') ||
                        -1 < e.pageName.indexOf('spiel') ||
                        -1 < e.pageName.indexOf('teenager')
                      ? '55973'
                      : -1 < e.pageName.indexOf('unterhaltung')
                      ? '9626'
                      : -1 < e.pageName.indexOf('video')
                      ? '70307'
                      : '55974';
                  })(),
                  m: (function () {
                    var e = window.adSSetup || { pageName: '' };
                    return -1 < e.pageName.indexOf('auto')
                      ? '83882'
                      : -1 < e.pageName.indexOf('geld')
                      ? '83886'
                      : -1 < e.pageName.indexOf('lifestyle') || -1 < e.pageName.indexOf('ratgeber')
                      ? '83888'
                      : -1 < e.pageName.indexOf('reise')
                      ? '83891'
                      : -1 < e.pageName.indexOf('sport')
                      ? '83890'
                      : -1 < e.pageName.indexOf('digital') ||
                        -1 < e.pageName.indexOf('spiel') ||
                        -1 < e.pageName.indexOf('teenager')
                      ? '83887'
                      : -1 < e.pageName.indexOf('unterhaltung')
                      ? '83885'
                      : -1 < e.pageName.indexOf('video')
                      ? '70307'
                      : '83889';
                  })(),
                },
                teadsSlotId: {
                  d: (function () {
                    var e = window.adSSetup || { pageName: '' };
                    return -1 < e.pageName.indexOf('auto')
                      ? '29405'
                      : -1 < e.pageName.indexOf('geld')
                      ? '29407'
                      : -1 < e.pageName.indexOf('lifestyle') || -1 < e.pageName.indexOf('ratgeber')
                      ? '29411'
                      : -1 < e.pageName.indexOf('reise')
                      ? '74131'
                      : -1 < e.pageName.indexOf('sport')
                      ? '29209'
                      : -1 < e.pageName.indexOf('digital') ||
                        -1 < e.pageName.indexOf('spiel') ||
                        -1 < e.pageName.indexOf('teenager')
                      ? '61019'
                      : -1 < e.pageName.indexOf('unterhaltung')
                      ? '29409'
                      : -1 < e.pageName.indexOf('video')
                      ? '75752'
                      : '61020';
                  })(),
                  m: (function () {
                    var e = window.adSSetup || { pageName: '' };
                    return -1 < e.pageName.indexOf('auto')
                      ? '90738'
                      : -1 < e.pageName.indexOf('geld')
                      ? '90742'
                      : -1 < e.pageName.indexOf('lifestyle') || -1 < e.pageName.indexOf('ratgeber')
                      ? '90744'
                      : -1 < e.pageName.indexOf('reise')
                      ? '90747'
                      : -1 < e.pageName.indexOf('sport')
                      ? '90746'
                      : -1 < e.pageName.indexOf('digital') ||
                        -1 < e.pageName.indexOf('spiel') ||
                        -1 < e.pageName.indexOf('teenager')
                      ? '90743'
                      : -1 < e.pageName.indexOf('unterhaltung')
                      ? '90741'
                      : -1 < e.pageName.indexOf('video')
                      ? '75752'
                      : '90745';
                  })(),
                },
                teadsSlot: function () {
                  return 'article .txt > p br, article .txt > p, .fuehrerscheinwrapp h3';
                },
                teadsMinSlot: window.adSSetup && 'm' === adSSetup.view ? 1 : 4,
                partnerTimeout:
                  window.adSSetup && void 0 !== adSSetup.partnerTimeout
                    ? adSSetup.partnerTimeout
                    : 700,
                isHome:
                  (window.adSSetup &&
                    adSSetup.pageName &&
                    adSSetup.pageName.indexOf('home') > -1) ||
                  location.pathname.length < 2,
                isMobile: !!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                  navigator.userAgent || navigator.vendor || window.opera
                ),
              };
              var a =
                location.host.match(/(^m|^wap|^mobil.*)\./i) ||
                (window.screen && screen.availWidth && screen.availWidth <= 800) ||
                (ASCDP.pageSet.isMobile && window.innerWidth <= 800)
                  ? 'm'
                  : 'd';
              (ASCDP.pageSet.view = ASCDP.pageSet.view || a),
                (ASCDP.pageSet.branch = 'abtest'),
                (ASCDP.pageSet.branchPath = 'https://www.asadcdn.com/adlib/beta/branches/abtest/'),
                (ASCDP.pageSet.contentLocation = (window.context && window.context.canonicalUrl
                  ? window.context
                  : window
                ).location),
                (ASCDP.pageSet.target += ';branch=' + ASCDP.pageSet.branch + ';'),
                (ASCDP.pageSet.adPlacements = []),
                (ASCDP.pageSet.cookies = {}),
                (ASCDP.pageSet.pageTypes = { d: 'desktop', m: 'mew', amp: 'amp', dooh: 'dooh' });
              for (
                var t = [
                    'edg',
                    'msie',
                    'nintendo wiuU',
                    'nintendo 3ds',
                    'xbox',
                    'playstation',
                    'silk',
                    'atf',
                    'kindle',
                    'amazon',
                    'firefox',
                    'opr',
                    'samsungbrowser',
                    'chrome',
                    'safari',
                  ],
                  d = [
                    'EDGE',
                    'MSIE',
                    'WiiU',
                    '3DS',
                    'Xbox',
                    'Playstation',
                    'Amazon',
                    'Amazon',
                    'Amazon',
                    'Amazon',
                    'Firefox',
                    'Opera',
                    'Samsung',
                    'Chrome',
                    'Safari',
                  ],
                  i = 'unknown',
                  n = 1;
                n < t.length;
                n++
              )
                if (navigator.userAgent.toLowerCase().indexOf(t[n]) > -1) {
                  i = d[n];
                  break;
                }
              ASCDP.pageSet.target += ';browser=' + i + ';';
            }.apply(this, arguments);
          } finally {
            if ($___old_84f01e58709c9c2f)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_84f01e58709c9c2f
              ));
          }
        }),
        ASCDP.initPageSet(),
        (ASCDP.window = window),
        ASCDP.pageSet.isAMP)
      )
        ASCDP.pageSet.availableSlots = adSSetup.availableSlots;
      else
        try {
          window.top.document.domain
            ? window.top !== window.self &&
              ((inDapIf = framed = fif = !0), (ASCDP.window = window.top))
            : window.parent.document.domain
            ? ((ASCDP.window = window.parent), (inDapIf = framed = fif = !0))
            : (ASCDP.window = window);
        } catch (e) {
          (ASCDP.pageSet.partners = !1), (framed = !0), (ASCDP.window = window);
        }
      if (
        (ASCDP.pageSet.isHome &&
          !ASCDP.pageSet.autoReloadHome &&
          (ASCDP.pageSet.autoReloader = !1),
        (ASCDP.pageSet.pgPrefix = ''),
        ('https:' !== location.protocol && 'transfermarktApp' === ASCDP.pageSet.siteName) ||
          (ASCDP.pageSet.pageCSS += '.rlSlot {z-index:-1;height:0!important;}'),
        (function () {
          const $___old_c447d967e41c6f7e = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_c447d967e41c6f7e)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_fd468a9a287c63aa.userAgent
              ));
            return function () {
              if (!document.getElementById('ASCDP_CSS')) {
                var e = document.createElement('style');
                (e.type = 'text/css'),
                  (e.id = 'ASCDP_CSS'),
                  navigator.userAgent.match(/MSIE/gi)
                    ? (e.styleSheet.cssText = ASCDP.pageSet.pageCSS)
                    : (e.innerHTML = ASCDP.pageSet.pageCSS),
                  document.getElementsByTagName('head')[0].appendChild(e);
                var a = document.createElement('link');
                (a.rel = 'stylesheet'),
                  (a.id = 'ASCDP_OBA'),
                  (a.href = ASCDP.pageSet.branchPath + 'libmodules/extensions/adplayer.css'),
                  document.getElementsByTagName('head')[0].appendChild(a);
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_c447d967e41c6f7e)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_c447d967e41c6f7e
              ));
          }
        })(),
        (ASCDP.getURLParameter = function (e) {
          return (
            decodeURIComponent(
              (new RegExp('[?|&|;]' + e + '=([^&;]+?)(&|#|;|$)').exec(
                ASCDP.pageSet.contentLocation.search
              ) || ['', ''])[1].replace(/\+/g, '%20')
            ) || ''
          );
        }),
        (ASCDP.modulesLoading = {}),
        (ASCDP.adtemplates = ASCDP.adtemplates || {}),
        (ASCDP.partners = ASCDP.partners || {}),
        (ASCDP.hashMap = JSON.parse(
          '{"amp":{"aceConverter":"85f70b84","ada":"81b24310","addCSS":"861719b1","addEventListener":"5c678141","addOba":"4e38cf63","addVisibility":"1f958bf3","adplayer":"e5192a35","alertWatch":"9311383c","amazon":"bf35fe33","analyseResponse":"7de436a2","ast_alpha":"9d48d989","ast":"59455c54","autoReloader":"77e4194e","backchanger":"4c8e7033","browsi":"126e7130","calc":"9fe3438d","calcAdPos":"a4872828","calcX":"d359e50b","calcY":"8fdca0d3","ccf":"12fd5e91","checkView":"a85c9001","clearAdElt":"22bc84a8","contactimpact":"121ded42","cxsense":"61eb6f05","defineTag":"8ea9dd34","delCSS":"e2cf95b9","delOba":"c7677ecb","doExpScript":"f01c167a","doOnClickBody":"274d596e","emetriq":"cf2e7c8c","emetriqTCom":"53cebc33","err":"88ffbf8d","extendSlot":"bb13c021","fetchCurrency":"37d76234","fillFrame":"449b5918","fireRequest":"2684121d","floatSky":"87d75cff","frameRemover":"6bdf44a7","getBarHeight":"b38c95c8","getContWidth":"02d367c1","getHEIDI":"503bdaaa","getLocalData":"4b6eb50c","getNavHeight":"11a04adc","getPlacementName":"ccb65fdd","getScrollTop":"5fd7463d","getWinHeight":"96b9f4af","getWinWidth":"036a7985","ias":"28577419","idleLoader":"2786ebc0","init":"6393aba5","initAdElt":"fd82de2b","initPartners":"514a5d0f","instream":"afcdf5f9","isChildOf":"a93649e7","isChildOfActiveOverlay":"52c491df","isSightloader":"7b1b03be","isVisible":"8193833f","listenMessage":"f7e02edc","loadModules":"b1cd5f5d","loadScripts":"0dadce79","moveBanner":"2d3af957","moveSky":"bd4910dd","netId":"fd2ebf8e","nuggad":"3d179adc","onePlusX":"c25d2715","ovkvmf":"6d4802f5","pageRefresh":"5b685ef5","passbackCall":"fd28ce10","posOutstream":"fab71036","prebid":"89aeb145","prebidLib":"e67a0b84","reloadAds":"d4626dd1","rem":"b864784f","removeAd":"5a50277c","removeEventListener":"f749a432","renderAd":"9f144703","renderAdElt":"13c7de5a","renderOutstreamMediation":"7faac604","reposBanner":"e1a8a7fa","rescaleAll":"60d6cf5c","rescaleSlot":"59d25266","rewindMatrix":"254c8ddd","saveAuctionId":"c139153f","scanAmpFrames":"0df39404","scrollHandler":"ebea9614","semcona":"f57a30a9","sendEvent":"deac2b8b","setCSS":"6167a49a","setHEIDI":"fc4f7c50","setPageOpts":"0eaf8d8d","setPG":"71c8cc36","setUserGroup":"ab58c05f","sightLoader":"8d8d5e8c","slotSizeMap":"c92bfd6f","som":"ad9d12ba","speedCheck":"99c4b441","startAdAlert":"c7ef20fe","stickToSlot":"113f5ce2","stripSizes":"045520a0","visoon":"dd2d0850","yield":"f499a635"},"desktop":{"aceConverter":"85f70b84","ada":"81b24310","addCSS":"d7ca71f7","addEventListener":"5c678141","addOba":"4e38cf63","addVisibility":"01c26ae8","adplayer":"e5192a35","alertWatch":"9311383c","amazon":"bf35fe33","analyseResponse":"7de436a2","ast_alpha":"9d48d989","ast":"59455c54","autoReloader":"b26cf314","backchanger":"ffe51d5f","browsi":"126e7130","calc":"5866d4e4","calcAdPos":"4c6f25e7","calcX":"760e42be","calcY":"85a125a6","ccf":"12fd5e91","checkView":"d170befd","clearAdElt":"22bc84a8","contactimpact":"121ded42","cxsense":"61eb6f05","defineTag":"8ea9dd34","delCSS":"e2cf95b9","delOba":"c7677ecb","doExpScript":"0d6d84cf","doOnClickBody":"6ce0a5c0","emetriq":"cf2e7c8c","emetriqTCom":"53cebc33","err":"88ffbf8d","extendSlot":"bb13c021","fetchCurrency":"37d76234","fillFrame":"449b5918","fireRequest":"2684121d","floatSky":"c7fab776","frameRemover":"6bdf44a7","getBarHeight":"4feb5365","getContWidth":"02d367c1","getHEIDI":"503bdaaa","getLocalData":"4b6eb50c","getNavHeight":"08f6053e","getPlacementName":"ccb65fdd","getScrollTop":"2e0099ec","getWinHeight":"96b9f4af","getWinWidth":"036a7985","ias":"28577419","idleLoader":"2786ebc0","init":"6393aba5","initAdElt":"fd82de2b","initPartners":"514a5d0f","instream":"aba43944","isChildOf":"6cb48d12","isChildOfActiveOverlay":"52c491df","isSightloader":"12b81044","isVisible":"8193833f","listenMessage":"f7e02edc","loadModules":"b1cd5f5d","loadScripts":"0dadce79","moveBanner":"3b9b9089","moveSky":"f5dc4b23","netId":"fd2ebf8e","nuggad":"3d179adc","onePlusX":"c25d2715","ovkvmf":"6d4802f5","pageRefresh":"5b685ef5","passbackCall":"fd28ce10","posOutstream":"378beb29","prebid":"89aeb145","prebidLib":"e67a0b84","reloadAds":"d4626dd1","rem":"b864784f","removeAd":"5a50277c","removeEventListener":"f749a432","renderAd":"c7ce21dc","renderAdElt":"13c7de5a","renderOutstreamMediation":"7faac604","reposBanner":"59de710e","rescaleAll":"0fe74b25","rescaleSlot":"59d25266","rewindMatrix":"8a7a8ed8","saveAuctionId":"8047d82d","scanAmpFrames":"0ab33ae6","scrollHandler":"7594414a","semcona":"f57a30a9","sendEvent":"deac2b8b","setCSS":"6167a49a","setHEIDI":"fc4f7c50","setPageOpts":"0eaf8d8d","setPG":"71c8cc36","setUserGroup":"ab58c05f","sightLoader":"1c34fe18","slotSizeMap":"c92bfd6f","som":"ad9d12ba","speedCheck":"99c4b441","startAdAlert":"84c2f299","stickToSlot":"113f5ce2","stripSizes":"045520a0","visoon":"dd2d0850","yield":"f499a635"},"dooh":{"aceConverter":"85f70b84","ada":"81b24310","addCSS":"d7ca71f7","addEventListener":"5c678141","addOba":"4e38cf63","addVisibility":"01c26ae8","adplayer":"e5192a35","alertWatch":"9311383c","amazon":"bf35fe33","analyseResponse":"7de436a2","ast_alpha":"9d48d989","ast":"59455c54","autoReloader":"77e4194e","backchanger":"ffe51d5f","browsi":"126e7130","calc":"9fe3438d","calcAdPos":"a4872828","calcX":"d359e50b","calcY":"8fdca0d3","ccf":"12fd5e91","checkView":"a85c9001","clearAdElt":"22bc84a8","contactimpact":"121ded42","cxsense":"61eb6f05","defineTag":"8ea9dd34","delCSS":"e2cf95b9","delOba":"c7677ecb","doExpScript":"0d6d84cf","doOnClickBody":"274d596e","emetriq":"cf2e7c8c","emetriqTCom":"53cebc33","err":"88ffbf8d","extendSlot":"bb13c021","fetchCurrency":"37d76234","fillFrame":"449b5918","fireRequest":"2684121d","floatSky":"87d75cff","frameRemover":"6bdf44a7","getBarHeight":"b38c95c8","getContWidth":"02d367c1","getHEIDI":"503bdaaa","getLocalData":"4b6eb50c","getNavHeight":"11a04adc","getPlacementName":"ccb65fdd","getScrollTop":"5fd7463d","getWinHeight":"96b9f4af","getWinWidth":"036a7985","ias":"28577419","idleLoader":"2786ebc0","init":"6393aba5","initAdElt":"fd82de2b","initPartners":"514a5d0f","instream":"afcdf5f9","isChildOf":"a93649e7","isChildOfActiveOverlay":"52c491df","isSightloader":"12b81044","isVisible":"8193833f","listenMessage":"f7e02edc","loadModules":"b1cd5f5d","loadScripts":"0dadce79","moveBanner":"2d3af957","moveSky":"bd4910dd","netId":"fd2ebf8e","nuggad":"3d179adc","onePlusX":"c25d2715","ovkvmf":"6d4802f5","pageRefresh":"5b685ef5","passbackCall":"fd28ce10","posOutstream":"fab71036","prebid":"89aeb145","prebidLib":"e67a0b84","reloadAds":"d4626dd1","rem":"b864784f","removeAd":"5a50277c","removeEventListener":"f749a432","renderAd":"479b765d","renderAdElt":"13c7de5a","renderOutstreamMediation":"7faac604","reposBanner":"e1a8a7fa","rescaleAll":"0fe74b25","rescaleSlot":"59d25266","rewindMatrix":"254c8ddd","saveAuctionId":"8047d82d","scanAmpFrames":"0ab33ae6","scrollHandler":"ebea9614","semcona":"f57a30a9","sendEvent":"deac2b8b","setCSS":"6167a49a","setHEIDI":"fc4f7c50","setPageOpts":"0eaf8d8d","setPG":"71c8cc36","setUserGroup":"ab58c05f","sightLoader":"91e8eaba","slotSizeMap":"c92bfd6f","som":"ad9d12ba","speedCheck":"99c4b441","startAdAlert":"c7ef20fe","stickToSlot":"113f5ce2","stripSizes":"045520a0","visoon":"dd2d0850","yield":"f499a635"},"extensions":{"adalert":"e5d2a574","":"","corsFrameAdCalls":"d1ba72bf","corsFrameBetCalls":"f07d882e","hls":"4dfe6ce3","mediation":"edea4ae2","passback":"76ec135a","verify":"3d33f37f"},"mew":{"aceConverter":"85f70b84","ada":"81b24310","addCSS":"d7ca71f7","addEventListener":"5c678141","addOba":"4e38cf63","addVisibility":"01c26ae8","adplayer":"e5192a35","alertWatch":"9311383c","amazon":"bf35fe33","analyseResponse":"7de436a2","ast_alpha":"9d48d989","ast":"59455c54","autoReloader":"b26cf314","backchanger":"ffe51d5f","browsi":"126e7130","calc":"5866d4e4","calcAdPos":"4c6f25e7","calcX":"760e42be","calcY":"85a125a6","ccf":"12fd5e91","checkView":"d170befd","clearAdElt":"22bc84a8","contactimpact":"121ded42","cxsense":"61eb6f05","defineTag":"8ea9dd34","delCSS":"e2cf95b9","delOba":"c7677ecb","doExpScript":"0d6d84cf","doOnClickBody":"274d596e","emetriq":"cf2e7c8c","emetriqTCom":"53cebc33","err":"88ffbf8d","extendSlot":"bb13c021","fetchCurrency":"37d76234","fillFrame":"449b5918","fireRequest":"2684121d","floatSky":"87d75cff","frameRemover":"6bdf44a7","getBarHeight":"4feb5365","getContWidth":"02d367c1","getHEIDI":"503bdaaa","getLocalData":"4b6eb50c","getNavHeight":"08f6053e","getPlacementName":"ccb65fdd","getScrollTop":"2e0099ec","getWinHeight":"96b9f4af","getWinWidth":"036a7985","ias":"28577419","idleLoader":"2786ebc0","init":"6393aba5","initAdElt":"fd82de2b","initPartners":"514a5d0f","instream":"aba43944","isChildOf":"6cb48d12","isChildOfActiveOverlay":"52c491df","isSightloader":"12b81044","isVisible":"8193833f","listenMessage":"f7e02edc","loadModules":"b1cd5f5d","loadScripts":"0dadce79","moveBanner":"3b9b9089","moveSky":"bd4910dd","netId":"fd2ebf8e","nuggad":"3d179adc","onePlusX":"c25d2715","ovkvmf":"6d4802f5","pageRefresh":"5b685ef5","passbackCall":"fd28ce10","posOutstream":"378beb29","prebid":"89aeb145","prebidLib":"e67a0b84","reloadAds":"d4626dd1","rem":"b864784f","removeAd":"5a50277c","removeEventListener":"f749a432","renderAd":"c7ce21dc","renderAdElt":"13c7de5a","renderOutstreamMediation":"7faac604","reposBanner":"59de710e","rescaleAll":"0fe74b25","rescaleSlot":"59d25266","rewindMatrix":"8a7a8ed8","saveAuctionId":"8047d82d","scanAmpFrames":"0ab33ae6","scrollHandler":"7594414a","semcona":"f57a30a9","sendEvent":"deac2b8b","setCSS":"6167a49a","setHEIDI":"fc4f7c50","setPageOpts":"0eaf8d8d","setPG":"71c8cc36","setUserGroup":"ab58c05f","sightLoader":"1c34fe18","slotSizeMap":"c92bfd6f","som":"ad9d12ba","speedCheck":"99c4b441","startAdAlert":"84c2f299","stickToSlot":"113f5ce2","stripSizes":"045520a0","visoon":"dd2d0850","yield":"f499a635"},"ovkvmf":{"doClose":"2debdf21","doContract":"bffde0eb","doExpand":"7986db61","doHide":"07a1b1b0","doShow":"12285003","isVisible":"673d02f5","listenOVKAdMessage":"904864aa","propagateCursorPosition":"34197787","propagateOnScroll":"aaf219f5","propagatePosY":"41e42fd0","propagateWinResize":"1aa0263c","renderAdElt":"80521b88","sendCursorPosition":"5af54c68","sendPageSet":"e5920e3d","sendPageSize":"5ab585a9","sendWinResize":"766bbb21","sendWinScroll":"bb55c0e9","sendYPos":"76b04a79","setExpandable":"8884b553","walkFrames":"10f8e2c7"}}'
        )),
        (ASCDP.adS = ASCDP.adS || {
          activeWP: '',
          astEvents: [
            'adAvailable',
            'adBadRequest',
            'adLoaded',
            'adNoBid',
            'adRequestFailure',
            'adError',
            'adLoadedMediated',
            'adNoBidMediated',
          ],
          oldWP:
            fif && ASCDP.window.ASCDP && ASCDP.window.ASCDP.adS
              ? ASCDP.window.ASCDP.adS.oldWP
              : '',
          adElts:
            fif && ASCDP.window.ASCDP && ASCDP.window.ASCDP.adS
              ? ASCDP.window.ASCDP.adS.adElts
              : {},
          block:
            fif && ASCDP.window.ASCDP && ASCDP.window.ASCDP.adS
              ? ASCDP.window.ASCDP.adS.block
              : [],
          blockMatrixElements: 0,
          globalSet:
            !!(fif && ASCDP.window.ASCDP && ASCDP.window.ASCDP.adS) &&
            ASCDP.window.ASCDP.adS.globalSet,
          href: location.href.replace(/http.:\/\//gi, ''),
          ieCSS: navigator.userAgent.match(/MSIE/gi) ? 1 : 0,
          initPlacements: [],
          alertCode: 'adalert',
          nextKeyCode: 'a',
          keylog: '',
          observeArr:
            fif && ASCDP.window.ASCDP && ASCDP.window.ASCDP.adS
              ? ASCDP.window.ASCDP.adS.observeArr
              : [],
          reloadArr:
            fif && ASCDP.window.ASCDP && ASCDP.window.ASCDP.adS
              ? ASCDP.window.ASCDP.adS.reloadArr
              : {},
          tsn: Math.round(10000000000000 * Math.random()),
          preRenderMap: {
            d: {
              fast: 0,
              normal: 50,
              slow: 50,
              'very-slow': 50,
              notDetected: 100,
              notSupported: 50,
              failure: 50,
            },
            m: {
              fast: 100,
              normal: 100,
              slow: 100,
              'very-slow': 100,
              notDetected: 100,
              notSupported: 100,
              failure: 100,
            },
          },
          prtnKeys: { once: {}, static: '' },
          prtnKeysVid: { kw_misc: ASCDP.pageSet.target },
          targetString: '',
          prebidTimeout: 1500,
          bidderArr: {},
          outstreamRendererOptions: {
            playerTechnology: ['html5', 'flash'],
            adText: 'Werbung',
            showMute: !0,
            showVolume: !0,
            audioOnMouseover: ASCDP.pageSet.outstreamSoundMouseOver,
            nonViewableBehavior: 'pause',
            showProgressBar: !0,
            autoInitialSize: !0,
            allowFullscreen: !0,
            disableCollapse: { enabled: !0, replay: !1 },
            skippable: {
              videoThreshold: 30,
              videoOffset: 0,
              skipLocation: 'top-left',
              skipText: 'Schliessen',
              skipButtonText: 'Schliessen',
            },
            cbNotification: function (e, a, t) {
              var d = ASCDP.adS,
                i = d.adElts[t];
              i.hasPAUL &&
                ('firstQuartile' === a
                  ? i.slotSpacer
                    ? ((i.slotSpacer.style.height = getComputedStyle(i.adSlot).height),
                      (i.slotSpacer.style.width = getComputedStyle(i.masterSlot.parentNode).width),
                      (i.adSlot.style.position = 'absolute'),
                      d.stripSizes(
                        t,
                        parseInt(i.slotSpacer.style.width),
                        parseInt(i.slotSpacer.style.height)
                      ))
                    : (i.adSlot.style.minHeight = getComputedStyle(i.adSlot).height)
                  : 'thirdQuartile' === a
                  ? ASCDP.prebid &&
                    ASCDP.prebid.reauction &&
                    d.auctionSlots.length > 0 &&
                    (d.auctionSlots.push(t), ASCDP.prebid.reauction(d.auctionSlots))
                  : 'complete' === a && ((i.reloadTimer = 0), (d.reloadArr[t] = !0)));
            },
          },
          pbSizes: [
            '320x50',
            '300x250',
            '728x90',
            '728x600',
            '160x600',
            '120x600',
            '250x250',
            '300x600',
            '970x250',
            '800x250',
            '320x160',
            '320x480',
            '500x800',
            '500x1000',
            '640x360',
            '640x480',
          ],
          auctionSlots: [],
          requesting:
            !!(fif && ASCDP.window.ASCDP && ASCDP.window.ASCDP.adS) &&
            ASCDP.window.ASCDP.adS.requesting,
          loading: 0,
          v3loading: !1,
          v3loadCount: 1,
          responded: 0,
          noPaulArr: [],
          requiredJs: [
            'https://confiant-integrations.global.ssl.fastly.net/7GPxwkHfdSwn-OphtKZwIPivffk/axel/config.js',
          ],
          moduleList: [
            'doClose^ovkvmf',
            'doContract^ovkvmf',
            'doExpand^ovkvmf',
            'doHide^ovkvmf',
            'doShow^ovkvmf',
            'isVisible^ovkvmf',
            'listenOVKAdMessage^ovkvmf',
            'propagateCursorPosition^ovkvmf',
            'propagateOnScroll^ovkvmf',
            'propagatePosY^ovkvmf',
            'propagateWinResize^ovkvmf',
            'renderAdElt^ovkvmf',
            'sendCursorPosition^ovkvmf',
            'sendPageSet^ovkvmf',
            'sendPageSize^ovkvmf',
            'sendWinResize^ovkvmf',
            'sendWinScroll^ovkvmf',
            'sendYPos^ovkvmf',
            'setExpandable^ovkvmf',
            'walkFrames^ovkvmf',
          ],
          modulesLoading: {},
          resizeArr:
            fif && ASCDP.window.ASCDP && ASCDP.window.ASCDP.adS
              ? ASCDP.window.ASCDP.adS.resizeArr
              : [],
          logColor: 'background-color:#0000ff;color:#fff;padding:3px;',
          rootUrl: 'https://www.asadcdn.com/adlib/pages',
          version: '4.6.7',
          prevOn: ASCDP.pageSet.contentLocation.search.indexOf('ast_override_div') > -1,
          devOn: ASCDP.pageSet.contentLocation.search.indexOf('dev=true') > -1,
          debug:
            ASCDP.pageSet.target.indexOf('branch=development') > -1 ||
            ASCDP.pageSet.contentLocation.search.indexOf('debugAS') > -1,
          addEventListener: function (e, a, t, d) {
            return window.addEventListener
              ? e.addEventListener(a, t, d)
              : e.attachEvent('on' + a, t);
          },
          err: function (e, a, t) {
            var d, i;
            if (
              ((d =
                e.error && e.error.stack
                  ? e.error.stack
                  : e.stack
                  ? e.stack
                  : !(!e.target || !e.target.outerHTML) && e.target.outerHTML),
              (i = e.error && e.error.message ? e.error.message : e.message ? e.message : ''),
              d && d.match(/appnexus|adnxs|asadcdn/i))
            ) {
              var n,
                r,
                o = t ? ['', t] : d.match(/&tag=(.*?)&/) || !1;
              o
                ? ((r = ASCDP.adS.adElts[o[1]] ? ASCDP.adS.adElts[o[1]].insertionId : 'N/A'),
                  (n = a && a.caller ? a.caller : 'templateError'))
                : ((r = t || 'global'), (n = a && a.caller ? a.caller : 'globalError')),
                (i +=
                  'Trigger:' +
                  d
                    .substring(0, d.indexOf('at ', d.indexOf('at ') + 2) - 5)
                    .replace(new RegExp(ASCDP.pageSet.branchPath, 'g'), '')
                    .replace(/http.*adlib\//g, ''));
              var s =
                'https://www.asadcdn.com/flairfire/f.png?' +
                encodeURIComponent(
                  'key=' +
                    n +
                    '&value=Error:' +
                    (i || 'N/A') +
                    ';Insertion/Slot:' +
                    r +
                    ';&adlibVersion=' +
                    ASCDP.adS.version +
                    '&branch=' +
                    ASCDP.pageSet.branch
                );
              ASCDP.adS.fireRequest(s),
                ASCDP.adS.debug &&
                  window.console &&
                  console.error('%cADLIB: errorFlair ' + e, ASCDP.adS.logColor);
            }
          },
          fireRequest: function (e) {
            var a = new XMLHttpRequest();
            a.open('GET', e), a.send();
          },
          getHEIDI: function () {
            if (
              ASCDP.pageSet.cmpFound &&
              (!ASCDP.pageSet.storageAccess ||
                (ASCDP.pageSet.miVendor && !ASCDP.pageSet.miVendor.vendorGrant))
            )
              return !1;
            var e, a, t;
            try {
              document.cookie &&
                ((e = ASCDP.pageSet.cookies.springBID),
                (a = ASCDP.pageSet.cookies.nexusId),
                (t = ASCDP.pageSet.cookies.nitpid)),
                window.localStorage &&
                  ((e = localStorage.springBID ? localStorage.springBID : 0),
                  (a = localStorage.nexusId ? localStorage.nexusId : '0'),
                  (t = localStorage.nitpid ? localStorage.nitpid : '0'));
            } catch (d) {
              e = a = t = '0';
            }
            return (
              '0' !== a && '-1' !== a
                ? (ASCDP.pageSet.target.heidi = ['0'])
                : 'forbidden' === e
                ? (ASCDP.pageSet.target.heidi = ['3'])
                : '0' !== e && '0' === a
                ? (ASCDP.pageSet.target.heidi = ['1'])
                : '0' === e && '0' === a && (ASCDP.pageSet.target.heidi = ['2']),
              (ASCDP.pageSet.target.nifound = [('0' !== t).toString()]),
              'forbidden' !== e && '0' !== e && e
            );
          },
          getWinWidth: function () {
            var e = NaN;
            if (document.querySelector('meta[name=viewport]') && 'm' === ASCDP.pageSet.view)
              if (1120688 === ASCDP.pageSet.publisherId) e = 320;
              else {
                var a = document
                  .querySelector('meta[name=viewport]')
                  .getAttribute('content')
                  .match(/width=([0-9]+)/i);
                a && (e = parseInt(a[1]));
              }
            return isNaN(e)
              ? (document.body && document.body.clientWidth) ||
                  (document.documentElement && document.documentElement.clientWidth) ||
                  window.innerWidth
              : e;
          },
          idleLoader: function () {
            ASCDP.adS.moduleList.length &&
              (window.requestIdleCallback
                ? requestIdleCallback(function () {
                    var e = ASCDP.adS.moduleList.shift().split('^');
                    ASCDP.adS.loadModules([e[0]], null, e[1]), ASCDP.adS.idleLoader();
                  })
                : setTimeout(function () {
                    ASCDP.adS.loadModules([ASCDP.adS.moduleList.shift()], ASCDP.adS.idleLoader);
                  }, 20));
          },
          listenMessage: function (e) {
            if (e && e.data.toString().indexOf(':;:') > -1)
              ASCDP.adS.loadModules(['ovkvmf'], function () {
                ovkvmf.listenOVKAdMessage(e);
              });
            else if (
              e &&
              e.origin.match(/asadcdn\.com/) &&
              e.data.toString().indexOf('springBID') > -1
            ) {
              var a = e.data.toString().match(/springBID=(.*?);/)[1],
                t = e.data.toString().match(/nexusId=(.*?);/)[1],
                d = (e.data.toString().match(/nitpid=(.*?);/) || ['', ''])[1],
                i = (e.data.toString().match(/nitpidRefresh=(.*?);/) || ['', ''])[1];
              document.cookie &&
                ((document.cookie =
                  'springBID=' +
                  a +
                  '; domain=.' +
                  ASCDP.pageSet.siteDomain +
                  '; SameSite=Strict; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'),
                (document.cookie =
                  'nexusId=' +
                  t +
                  '; domain=.' +
                  ASCDP.pageSet.siteDomain +
                  '; SameSite=Strict; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/')),
                window.localStorage &&
                  ((localStorage.springBID = a),
                  (localStorage.nexusId = t),
                  (localStorage.nitpid = d)),
                'true' === i &&
                  (localStorage.setItem('niDate', ''),
                  !ASCDP.pageSet.isAMP &&
                    'development' === ASCDP.pageSet.branch &&
                    ASCDP.partners &&
                    ASCDP.partners.netId &&
                    ASCDP.partners.netId.init());
            }
          },
          loadModules: function (e, a, t) {
            function d (e, a) {
              return e.map(function (e) {
                var t;
                return (
                  (t =
                    (a = a || ASCDP.pageSet.pageTypes[ASCDP.pageSet.view]) && ASCDP.hashMap[a][e]
                      ? '.' + ASCDP.hashMap[a][e]
                      : ''),
                  ASCDP.pageSet.branchPath + 'libmodules/' + a + '/' + e + t + '.js'
                );
              });
            }
            var i = d(e, t);
            ASCDP.adS.loadScripts(i, function () {
              var i = !0;
              if (
                (d(e, t).forEach(function (e) {
                  'loading' === ASCDP.modulesLoading[e] && (i = !1);
                }),
                i)
              ) {
                if (a)
                  try {
                    a();
                  } catch (e) {
                    var n = e.stack.match(/ASCDP\.adS\.(.*?)(\s|\/)/) ||
                      e.stack.match(/adlib\/.*\/(.*?)\..*?\.js/) || ['', 'unknown'];
                    ASCDP.adS.err(e, { caller: n[1] }, '');
                  }
              } else
                setTimeout(function () {
                  ASCDP.adS.loadModules(e, a, t);
                }, 20);
            });
          },
          loadScripts: function (e, a) {
            var t = 'https:' === location.href.substring(0, 6) ? 'https:' : 'http:';
            !(function (d) {
              var i, n, r, o;
              0 !== e.length
                ? ((i = e.shift()),
                  (n = arguments.callee),
                  (r = document.getElementsByTagName('script')[0]),
                  ((o = document.createElement('script')).src =
                    ('//' === i.substring(0, 2) ? t : '') + i),
                  'noModule' in o && o.src.match(/asadcdn\.com.*module/g) && (o.type = 'module'),
                  (o.async = !0),
                  (o.onload = function () {
                    (o.onload = null), delete ASCDP.modulesLoading[o.src], n(o.src);
                  }),
                  document.querySelector('script[src*="' + i + '"]')
                    ? n(i)
                    : ((ASCDP.modulesLoading[o.src] = 'loading'), r.parentNode.insertBefore(o, r)))
                : a &&
                  (!ASCDP.adS.globalSet || -1 === a.toString().indexOf('apntag.loadTags()')) &&
                  a();
            })();
          },
          renderAd: function (e) {
            window.adSSetup &&
              !1 !== adSSetup.hasPageAdMi &&
              ASCDP.adS.loadModules(
                ['getPlacementName', 'initAdElt', 'sightLoader', 'clearAdElt', 'defineTag'],
                function () {
                  var a = ASCDP.pageSet,
                    t = ASCDP.adS,
                    d = t.adElts[e] || t.initAdElt(e),
                    i = new Date().getTime();
                  if (
                    (!ASCDP.pageSet.prebid ||
                      !a.partners ||
                      d.prebidLoading ||
                      d.renderAdReload ||
                      ASCDP.pageSet.noDFP ||
                      (ASCDP.window.pbjs && ASCDP.prebid && ASCDP.prebid.reauction([e])),
                    t.globalSet)
                  ) {
                    if (
                      (d.renderAdReload ||
                        (a.adPlacements.push(e), t.clearAdElt(e), t.defineTag(e)),
                      t.v3loading)
                    )
                      (d.adSlot = d.adSlot || document.getElementById(e)),
                        t.sightLoader && !t.v3loading
                          ? t.sightLoader()
                          : (d.renderAdReload = setTimeout("ASCDP.adS.renderAd('" + e + "')", 50));
                    else if (!d.hasAd || d.lastLoad + a.lblk <= i)
                      if (
                        ((t.tsn = Math.round(10000000000000 * Math.random())),
                        d && (d.lastLoad = i),
                        apntag.requests.cbCalled)
                      ) {
                        for (var n in t.adElts)
                          t.adElts.hasOwnProperty(n) && clearTimeout(t.adElts[n].renderAdReload);
                        (d.renderAdReload = !1),
                          (apntag.requests.cbCalled = !1),
                          (a.adPlacements = a.adPlacements.filter(function (e, t) {
                            return a.adPlacements.indexOf(e) === t && !/^[0-9]*$/.test(e);
                          })),
                          apntag.loadTags();
                      } else
                        d.renderAdReload = setTimeout(function () {
                          ASCDP.adS.renderAd(e);
                        }, 50);
                  } else a.adPlacements.push(e);
                }
              );
          },
          sendEvent: function (e, a, t) {
            var d;
            try {
              d = new CustomEvent(e, { detail: a });
            } catch (t) {
              (d = document.createEvent('CustomEvent')).initCustomEvent(e, !0, !0, { detail: a });
            }
            (t || window).dispatchEvent(d),
              ASCDP.adS.debug &&
                window.console &&
                console.log('%cADLIB: event ' + e + ' dispatched', ASCDP.adS.logColor, a);
          },
          slotSizeMap: {
            superbanner: [
              {
                minWidth: 1,
                sizes: [
                  [728, 90],
                  [728, 600],
                  [1000, 600],
                ],
              },
            ],
            superbanner_btf: [
              {
                minWidth: 1,
                sizes: [
                  [728, 90],
                  [728, 600],
                  [1000, 600],
                ],
              },
            ],
            sky: [
              {
                minWidth: 1,
                sizes: [
                  [160, 600],
                  [120, 600],
                  [300, 600],
                  [500, 1000],
                  [1000, 1000],
                ],
              },
            ],
            sky2: [
              {
                minWidth: 1,
                sizes: [
                  [160, 600],
                  [120, 600],
                  [300, 600],
                  [500, 1000],
                  [1000, 1000],
                ],
              },
            ],
            sky_btf: [
              {
                minWidth: 1,
                sizes: [
                  [160, 600],
                  [120, 600],
                  [300, 600],
                  [500, 1000],
                  [1000, 1000],
                ],
              },
            ],
            billboard: [
              {
                minWidth: 1,
                sizes: [
                  [970, 250],
                  [800, 250],
                ],
              },
            ],
            billboard_btf: [
              {
                minWidth: 1,
                sizes: [
                  [970, 250],
                  [800, 250],
                ],
              },
            ],
            mrec: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 250],
                        [300, 600],
                      ]
                    : [
                        [300, 250],
                        [300, 300],
                        [250, 250],
                        [320, 160],
                        [300, 150],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 100],
                        [300, 100],
                        [300, 50],
                        [300, 75],
                      ],
              },
            ],
            mrec2: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 250],
                        [300, 600],
                      ]
                    : [
                        [300, 250],
                        [300, 300],
                        [250, 250],
                        [320, 160],
                        [300, 150],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 100],
                        [300, 100],
                        [300, 50],
                        [300, 75],
                      ],
              },
            ],
            mrec3: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 250],
                        [300, 600],
                      ]
                    : [
                        [300, 250],
                        [300, 300],
                        [250, 250],
                        [320, 160],
                        [300, 150],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 100],
                        [300, 100],
                        [300, 50],
                        [300, 75],
                      ],
              },
            ],
            mrec4: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 250],
                        [300, 600],
                      ]
                    : [
                        [300, 250],
                        [300, 300],
                        [250, 250],
                        [320, 160],
                        [300, 150],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 100],
                        [300, 100],
                        [300, 50],
                        [300, 75],
                      ],
              },
            ],
            mrec_btf: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 250],
                        [300, 600],
                      ]
                    : [
                        [300, 250],
                        [300, 300],
                        [250, 250],
                        [320, 160],
                        [300, 150],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 100],
                        [300, 100],
                        [300, 50],
                        [300, 75],
                      ],
              },
            ],
            galleryad: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 250],
                        [300, 600],
                      ]
                    : [
                        [300, 250],
                        [300, 300],
                        [250, 250],
                        [320, 160],
                        [300, 150],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 100],
                        [300, 100],
                        [300, 50],
                        [300, 75],
                      ],
              },
            ],
            xxlblock: [{ minWidth: 1, sizes: [[993, 90]] }],
            buli_powerbutton: [{ minWidth: 1, sizes: [[2, 2]] }],
            buli_powerplace: [{ minWidth: 1, sizes: [[2, 2]] }],
            buli_powerplace_inverted: [{ minWidth: 1, sizes: [[2, 2]] }],
            buli_powersky_bottom_left: [{ minWidth: 1, sizes: [[2, 2]] }],
            buli_powersky_bottom_right: [{ minWidth: 1, sizes: [[2, 2]] }],
            buli_powersky_top_left: [{ minWidth: 1, sizes: [[2, 2]] }],
            buli_powersky_top_right: [{ minWidth: 1, sizes: [[2, 2]] }],
            'a-teaser': [{ minWidth: 1, sizes: [[2, 2]] }],
            'b-teaser': [{ minWidth: 1, sizes: [[2, 2]] }],
            'home-a-teaser': [{ minWidth: 1, sizes: [[2, 2]] }],
            'home-b-teaser': [{ minWidth: 1, sizes: [[2, 2]] }],
            wettpartner_ergebnisModul: [{ minWidth: 1, sizes: [[2, 2]] }],
            wettpartner_livekalender_ankuendigung: [{ minWidth: 1, sizes: [[2, 2]] }],
            wettpartner_scoreboard: [{ minWidth: 1, sizes: [[2, 2]] }],
            wettpartner_textlink: [{ minWidth: 1, sizes: [[2, 2]] }],
            teaser: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 150],
                        [300, 250],
                      ]
                    : [
                        [300, 150],
                        [300, 250],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 160],
                        [300, 300],
                      ],
              },
            ],
            teaser_2: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 150],
                        [300, 250],
                      ]
                    : [
                        [300, 150],
                        [300, 250],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 160],
                        [300, 300],
                      ],
              },
            ],
            teaser_3: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 150],
                        [300, 250],
                      ]
                    : [
                        [300, 150],
                        [300, 250],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 160],
                        [300, 300],
                      ],
              },
            ],
            teaser_4: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 150],
                        [300, 250],
                      ]
                    : [
                        [300, 150],
                        [300, 250],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 160],
                        [300, 300],
                      ],
              },
            ],
            teaser_5: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 150],
                        [300, 250],
                      ]
                    : [
                        [300, 150],
                        [300, 250],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 160],
                        [300, 300],
                      ],
              },
            ],
            teaser_6: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [
                        [300, 150],
                        [300, 250],
                      ]
                    : [
                        [300, 150],
                        [300, 250],
                        [320, 50],
                        [320, 75],
                        [320, 80],
                        [320, 160],
                        [300, 300],
                      ],
              },
            ],
            inpage: [
              {
                minWidth: 1,
                sizes: [
                  [5, 5],
                  [320, 480],
                  [640, 360],
                  [1000, 300],
                ],
              },
            ],
            menuad: [{ minWidth: 1, sizes: [[4, 4]] }],
            multilink: [{ minWidth: 1, sizes: [[290, 79]] }],
            tickerfeed: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [[660, 132]]
                    : [
                        [320, 80],
                        [320, 50],
                      ],
              },
            ],
            event_top: [
              {
                minWidth: 1,
                sizes:
                  'd' === ASCDP.pageSet.view
                    ? [[1000, 200]]
                    : [
                        [320, 80],
                        [320, 50],
                      ],
              },
            ],
            'banner-browsi': [
              {
                minWidth: 1,
                sizes: [
                  [320, 50],
                  [320, 75],
                  [320, 80],
                  [320, 100],
                  [300, 100],
                  [300, 50],
                  [300, 75],
                  [300, 250],
                ],
              },
            ],
            banner: [
              {
                minWidth: 1,
                sizes: [
                  [320, 50],
                  [320, 75],
                  [320, 80],
                  [320, 100],
                  [300, 100],
                  [300, 50],
                  [300, 75],
                ],
              },
            ],
            banner_sticky: [
              {
                minWidth: 1,
                sizes: [
                  [320, 50],
                  [320, 75],
                  [320, 80],
                  [320, 100],
                  [300, 100],
                  [300, 50],
                  [300, 75],
                ],
              },
            ],
            banner2: [
              {
                minWidth: 1,
                sizes: [
                  [320, 50],
                  [320, 75],
                  [320, 80],
                  [320, 100],
                  [300, 100],
                  [300, 50],
                  [300, 75],
                ],
              },
            ],
            widgetad: [
              {
                minWidth: 1,
                sizes: [
                  [300, 250],
                  [300, 600],
                  [9, 9],
                ],
              },
            ],
            dealsad: [
              {
                minWidth: 1,
                sizes: [
                  [427, 23],
                  [728, 90],
                ],
              },
            ],
            betad: [{ minWidth: 1, sizes: [[427, 23]] }],
            betad_btf: [{ minWidth: 1, sizes: [[427, 23]] }],
            preroll: [{ minWidth: 1, sizes: [[640, 480]] }],
          },
          speedCheck: function (e, a) {
            const $___old_dcd43c1719ecf649 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_dcd43c1719ecf649)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_6dae24411f43be95.performance
                ));
              return function () {
                if (
                  ((ASCDP.pageSet.netSpeed = ASCDP.pageSet.netSpeed || 'notDetected'),
                  window.performance)
                ) {
                  var t = e || 'https://www.asadcdn.com/200/test.js';
                  ASCDP.adS.loadScripts([t], function () {
                    if (((ASCDP.adS.performance = {}), performance.getEntriesByType)) {
                      var e = performance.getEntriesByType('resource');
                      e &&
                        (ASCDP.adS.performance = e.filter(function (e) {
                          return e.name.indexOf(t) > -1;
                        })[0]);
                    } else
                      performance.timing &&
                        ((ASCDP.adS.performance = performance.timing),
                        (ASCDP.adS.performance.duration =
                          (ASCDP.adS.performance.responseEnd || 0) -
                          (ASCDP.adS.performance.requestStart || 0)));
                    ASCDP.adS.performance && 'number' == typeof ASCDP.adS.performance.duration
                      ? ((ASCDP.adS.performance.roundedDuration = Math.round(
                          ASCDP.adS.performance.duration
                        )),
                        ASCDP.adS.performance.roundedDuration < 400
                          ? (ASCDP.pageSet.netSpeed = 'fast')
                          : ASCDP.adS.performance.roundedDuration < 1300
                          ? (ASCDP.pageSet.netSpeed = 'normal')
                          : ASCDP.adS.performance.roundedDuration < 2500
                          ? (ASCDP.pageSet.netSpeed = 'slow')
                          : ASCDP.adS.performance.roundedDuration >= 2500
                          ? ((ASCDP.pageSet.netSpeed = 'very-slow'),
                            ASCDP.adS.performance.roundedDuration > 10000 &&
                              (ASCDP.adS.performance.roundedDuration = 10000))
                          : (ASCDP.pageSet.netSpeed = 'failure'))
                      : ((ASCDP.adS.performance = { duration: -1 }),
                        (ASCDP.pageSet.netSpeed = 'notSupported')),
                      'string' == typeof ASCDP.pageSet.target
                        ? (';' !== ASCDP.pageSet.target[ASCDP.pageSet.target.length - 1] &&
                            (ASCDP.pageSet.target += ';'),
                          (ASCDP.pageSet.target +=
                            'netSpeed=' +
                            ASCDP.pageSet.netSpeed +
                            ',' +
                            ASCDP.adS.performance.roundedDuration +
                            ';'))
                        : (ASCDP.pageSet.target.netSpeed =
                            ASCDP.pageSet.netSpeed + ',' + ASCDP.adS.performance.roundedDuration),
                      ';' !== adSSetup.target[adSSetup.target.length - 1] &&
                        (adSSetup.target += ';'),
                      (adSSetup.target +=
                        'netSpeed=' +
                        ASCDP.pageSet.netSpeed +
                        ',' +
                        ASCDP.adS.performance.roundedDuration +
                        ';'),
                      a && a();
                  });
                } else a && a();
              }.apply(this, arguments);
            } finally {
              if ($___old_dcd43c1719ecf649)
                ({}.constructor.defineProperty(window, 'performance', $___old_dcd43c1719ecf649));
            }
          },
        }),
        (ASCDP.ovkvmf = {
          ovkvmfv: '1.1.1',
          registredFrames: {},
          ads2Handle: [],
          expHandle: [],
          doClose: function (e) {
            ASCDP.adS.loadModules(
              ['doClose'],
              function () {
                ASCDP.ovkvmf.doClose(e);
              },
              'ovkvmf'
            );
          },
          doContract: function (e) {
            ASCDP.adS.loadModules(
              ['doContract'],
              function () {
                ASCDP.ovkvmf.doContract(e);
              },
              'ovkvmf'
            );
          },
          doExpand: function (e) {
            ASCDP.adS.loadModules(
              ['doExpand'],
              function () {
                ASCDP.ovkvmf.doExpand(e);
              },
              'ovkvmf'
            );
          },
          doHide: function (e) {
            ASCDP.adS.loadModules(
              ['doHide'],
              function () {
                ASCDP.ovkvmf.doHide(e);
              },
              'ovkvmf'
            );
          },
          doShow: function (e) {
            ASCDP.adS.loadModules(
              ['doShow'],
              function () {
                ASCDP.ovkvmf.doShow(e);
              },
              'ovkvmf'
            );
          },
          isVisible: function (e) {
            ASCDP.adS.loadModules(
              ['isVisible'],
              function () {
                ASCDP.ovkvmf.isVisible(e);
              },
              'ovkvmf'
            );
          },
          listenOVKAdMessage: function (e) {
            ASCDP.adS.loadModules(
              ['listenOVKAdMessage'],
              function () {
                ASCDP.ovkvmf.listenOVKAdMessage(e);
              },
              'ovkvmf'
            );
          },
          propagateCursorPosition: function (e) {
            ASCDP.adS.loadModules(
              ['propagateCursorPosition'],
              function () {
                ASCDP.ovkvmf.propagateCursorPosition(e);
              },
              'ovkvmf'
            );
          },
          propagateOnScroll: function () {
            ASCDP.adS.loadModules(
              ['propagateOnScroll'],
              function () {
                ASCDP.ovkvmf.propagateOnScroll();
              },
              'ovkvmf'
            );
          },
          propagatePosY: function () {
            ASCDP.adS.loadModules(
              ['propagatePosY'],
              function () {
                ASCDP.ovkvmf.propagatePosY();
              },
              'ovkvmf'
            );
          },
          propagateWinResize: function () {
            ASCDP.adS.loadModules(
              ['propagateWinResize'],
              function () {
                ASCDP.ovkvmf.propagateWinResize();
              },
              'ovkvmf'
            );
          },
          renderAdElt: function (e) {
            ASCDP.adS.loadModules(
              ['renderAdElt'],
              function () {
                ASCDP.ovkvmf.renderAdElt(e);
              },
              'ovkvmf'
            );
          },
          sendCursorPosition: function (e, a) {
            ASCDP.adS.loadModules(
              ['sendCursorPosition'],
              function () {
                ASCDP.ovkvmf.sendCursorPosition(e, a);
              },
              'ovkvmf'
            );
          },
          sendPageSet: function (e) {
            ASCDP.adS.loadModules(
              ['sendPageSet'],
              function () {
                ASCDP.ovkvmf.sendPageSet(e);
              },
              'ovkvmf'
            );
          },
          sendPageSize: function (e) {
            ASCDP.adS.loadModules(
              ['sendPageSize'],
              function () {
                ASCDP.ovkvmf.sendPageSize(e);
              },
              'ovkvmf'
            );
          },
          sendWinResize: function (e) {
            ASCDP.adS.loadModules(
              ['sendWinResize'],
              function () {
                ASCDP.ovkvmf.sendWinResize(e);
              },
              'ovkvmf'
            );
          },
          sendWinScroll: function (e) {
            ASCDP.adS.loadModules(
              ['sendWinScroll'],
              function () {
                ASCDP.ovkvmf.sendWinScroll(e);
              },
              'ovkvmf'
            );
          },
          sendYPos: function (e) {
            ASCDP.adS.loadModules(
              ['sendYPos'],
              function () {
                ASCDP.ovkvmf.sendYPos(e);
              },
              'ovkvmf'
            );
          },
          setExpandable: function (e, a, t, d) {
            ASCDP.adS.loadModules(
              ['setExpandable'],
              function () {
                ASCDP.ovkvmf.setExpandable(e, a, t, d);
              },
              'ovkvmf'
            );
          },
          walkFrames: function (e, a, t) {
            ASCDP.adS.loadModules(
              ['walkFrames'],
              function () {
                ASCDP.ovkvmf.walkFrames(e, a, t);
              },
              'ovkvmf'
            );
          },
        }),
        (window.ovkvmf = ASCDP.ovkvmf),
        (ovkvmf.ads2Handle.push = function () {
          for (var e = 0; e < arguments.length; e++)
            ovkvmf.registredFrames[arguments[e].id] = {
              name: arguments[e].id,
              id: arguments[e].id,
              exp: null,
              cont: null,
              adFrame: null,
            };
        }),
        (ASCDP.loadModules = ASCDP.adS.loadModules),
        (ASCDP.loadScripts = ASCDP.adS.loadScripts),
        (ASCDP.pageSet.tcString = ''),
        (ASCDP.tcf = {
          analysePurposes: function (e) {
            var a = e || ASCDP.tcf.data || { purpose: !1 };
            if (a.purpose) {
              for (var t = 1; t < 11; t++)
                a.purpose.consents[t]
                  ? (ASCDP.pageSet.target += 'gdpr_p' + t + '=true;')
                  : ((ASCDP.tcf.useTCF = !0),
                    (ASCDP.pageSet.target += 'gdpr_p' + t + '=false;'),
                    (1 !== t && 2 !== t && 7 !== t && 9 !== t && 10 !== t) ||
                      (ASCDP.pageSet.noDFP = !0));
              ASCDP.pageSet.legInt = a.purpose.legitimateInterests;
            }
          },
          getTCData: function () {
            __tcfapi('getTCData', 2, function (e, a) {
              if (a) {
                if (
                  ('loaded' !== e.cmpStatus &&
                    ASCDP.adS.fireRequest(
                      'https://secure.adnxs.com/imptr?id=55909&cachebuster=' +
                        ASCDP.adS.tsn +
                        '&t=0'
                    ),
                  (ASCDP.tcf.data = e),
                  (ASCDP.tcf.tcfProcessed = !0),
                  (ASCDP.tcf.useTCF = e.purpose && 0 === Object.keys(e.purpose.consents).length),
                  (ASCDP.tcf.storageAccess =
                    e.purposeOneTreatment || (e.purpose && e.purpose.consents[1]) || !1),
                  ASCDP.tcf.analysePurposes(),
                  e.googleVendorConsents)
                )
                  for (var t in e.googleVendorConsents)
                    e.googleVendorConsents.hasOwnProperty(t) &&
                      !e.googleVendorConsents[t] &&
                      (ASCDP.tcf.useTCF = !0);
                if (e.customVendorConsents)
                  for (var d in e.customVendorConsents)
                    e.customVendorConsents.hasOwnProperty(d) &&
                      !e.customVendorConsents[d] &&
                      (ASCDP.tcf.useTCF = !0);
                if (
                  ((ASCDP.pageSet.useTCF = ASCDP.tcf.useTCF),
                  (ASCDP.pageSet.tcString = ASCDP.tcf.data.tcString),
                  (ASCDP.pageSet.storageAccess = ASCDP.tcf.storageAccess),
                  !ASCDP.tcf.useTCF &&
                    e.vendor &&
                    e.vendor.consents[45] &&
                    ASCDP.pageSet.orgPbBidder.indexOf('smartadserver') > -1 &&
                    ASCDP.pageSet.pbBidder.push('smartadserver'),
                  !ASCDP.tcf.useTCF &&
                    e.vendor &&
                    e.vendor.consents[91] &&
                    ASCDP.pageSet.orgPbBidder.indexOf('criteo') > -1 &&
                    ASCDP.pageSet.pbBidder.push('criteo'),
                  !ASCDP.tcf.useTCF &&
                    e.vendor &&
                    e.vendor.consents[132] &&
                    ASCDP.pageSet.orgPbBidder.indexOf('teads') > -1 &&
                    ASCDP.pageSet.pbBidder.push('teads'),
                  !ASCDP.tcf.useTCF &&
                    e.vendor &&
                    e.vendor.consents[10] &&
                    ASCDP.pageSet.orgPbBidder.indexOf('ix') > -1 &&
                    ASCDP.pageSet.pbBidder.push('ix'),
                  (ASCDP.tcf.useTCF || (e.vendor && !e.vendor.consents[213])) &&
                    ASCDP.partners &&
                    ASCDP.partners.emqTC &&
                    delete ASCDP.partners.emqTC,
                  (ASCDP.tcf.miVendor = { _id: '5f2a2b392b87b72624a333f2', vendorGrant: !0 }),
                  window.OnetrustActiveGroups
                    ? (window.OnetrustActiveGroups.match(/CMMI2/i)
                        ? ASCDP.tcf.storageAccess &&
                          ASCDP.adS.loadModules(['setHEIDI'], function () {
                            ASCDP.adS.setHEIDI();
                          })
                        : ((ASCDP.tcf.useTCF = !0), (ASCDP.tcf.miVendor.vendorGrant = !1)),
                      ASCDP.adS.loadModules(['initPartners'], function () {
                        ASCDP.adS.initPartners();
                      }))
                    : window._sp_
                    ? __tcfapi('getCustomVendorConsents', 2, function (e, a) {
                        if (a) {
                          e.grants['5f2a2b392b87b72624a333f2'] &&
                            (!1 === e.grants['5f2a2b392b87b72624a333f2'].vendorGrant
                              ? ((ASCDP.tcf.useTCF = !0), (ASCDP.tcf.miVendor.vendorGrant = !1))
                              : ASCDP.tcf.storageAccess &&
                                ASCDP.adS.loadModules(['setHEIDI'], function () {
                                  ASCDP.adS.setHEIDI();
                                }));
                          var t = e.consentedVendors.filter(function (e) {
                            return 'Piano Inc.' === e.name;
                          })[0];
                          ASCDP.partners.cxsense &&
                            (ASCDP.tcf.useTCF || (t && !e.grants[t._id].vendorGrant)) &&
                            delete ASCDP.partners.cxsense;
                        }
                        ASCDP.adS.loadModules(['initPartners'], function () {
                          ASCDP.adS.initPartners();
                        });
                      })
                    : (ASCDP.adS.loadModules(['initPartners'], function () {
                        ASCDP.adS.initPartners();
                      }),
                      ASCDP.tcf.storageAccess &&
                        ASCDP.adS.loadModules(['setHEIDI'], function () {
                          ASCDP.adS.setHEIDI();
                        }),
                      window.OnetrustActiveGroups),
                  (ASCDP.pageSet.group && 'undefined' !== ASCDP.pageSet.group) ||
                    (ASCDP.pageSet.cookies.springUG = ASCDP.pageSet.group = Math.round(
                      100 * Math.random()
                    )),
                  ASCDP.tcf.storageAccess &&
                    (ASCDP.adS.loadModules(['getLocalData'], function () {
                      ASCDP.adS.getLocalData();
                    }),
                    ASCDP.adS.loadModules(['setUserGroup'], function () {
                      ASCDP.adS.setUserGroup();
                    })),
                  ASCDP.adS.globalSet
                    ? ASCDP.adS.loadModules(['reloadAds'], function () {
                        ASCDP.adS.reloadAds();
                      })
                    : ASCDP.adS.loadModules(['init'], function () {
                        (ASCDP.adS.initTime = new Date().getTime()), ASCDP.adS.init();
                      }),
                  window.sas_queue)
                ) {
                  for (var i = 0; i < sas_queue.length; i++)
                    SmartAdServerASMI(
                      sas_queue[i][0],
                      sas_queue[i][1],
                      sas_queue[i][2],
                      sas_queue[i][3],
                      sas_queue[i][4]
                    );
                  window.sas_queue = void 0;
                }
              } else ASCDP.adS.err({ stack: 'https://www.asadcdn.com/adlib/limodules/desktop/tcf', message: 'error while getTCData' }, { caller: 'tcf' });
            });
          },
        }),
        (ASCDP.tcf.addTCListener = function () {
          __tcfapi('addEventListener', 2, function (e, a) {
            ASCDP.adS.debug &&
              console.log(
                '%cADLIB: tcfapi callback received for ' + e.eventStatus,
                ASCDP.adS.logColor
              ),
              (('tcloaded' === e.eventStatus && !ASCDP.tcf.tcloadedTriggered) ||
                (a && 'useractioncomplete' === e.eventStatus)) &&
                ('tcloaded' === e.eventStatus && (ASCDP.tcf.tcloadedTriggered = !0),
                ASCDP.tcf.getTCData()),
              'cmpuishown' === e.eventStatus &&
                ((ASCDP.tcf.cmpUIshown = !0), ASCDP.adS.prevOn && ASCDP.tcf.hideForPreview()),
              clearTimeout(ASCDP.tcf.cmpFlowControl);
          }),
            (ASCDP.tcf.cmpFlowControl = setTimeout(function () {
              ASCDP.tcf.tcloadedTriggered ||
                ASCDP.tcf.cmpUIshown ||
                (ASCDP.tcf.getTCData(),
                ASCDP.adS.err(
                  {
                    stack: 'https://www.asadcdn.com/adlib/limodules/desktop/tcf',
                    message: "cmp doesn't respond within 5 seconds",
                  },
                  { caller: 'tcf' }
                ));
            }, 5000));
        }),
        (ASCDP.tcf.hideForPreview = function () {
          if (window._sp_)
            try {
              (ASCDP.adS.prevLoop = function () {
                (document.querySelector('html').getAttribute('class') || '').indexOf(
                  'sp-message-open'
                ) > -1
                  ? document
                      .querySelector('html')
                      .setAttribute(
                        'class',
                        document
                          .querySelector('html')
                          .getAttribute('class')
                          .replace('sp-message-open', '')
                      )
                  : setTimeout(ASCDP.adS.prevLoop, 100);
              }),
                ASCDP.adS.prevLoop();
            } catch (e) {
              ASCDP.adS.prevLoop();
            }
          ASCDP.adS.loadModules(['addCSS'], function () {
            ASCDP.adS.addCSS(
              'body > div[id*="sp_message_container"], #cmpbox, #cmpbox2, body > #onetrust-consent-sdk {display:none!important;}'
            ),
              (ASCDP.pageSet.pageCSS +=
                'body > div[id*="sp_message_container"], #cmpbox, #cmpbox2, body > #onetrust-consent-sdk {display:none!important;}');
          }),
            (ASCDP.tcf.useTCF = !1),
            (ASCDP.pageSet.useTCF = !1),
            ASCDP.adS.loadModules(['init'], function () {
              ASCDP.adS.init();
            });
        }),
        ASCDP.pageSet.useTCF &&
        (window.OneTrustStub || window.__tcfapi) &&
        window.adSSetup &&
        !1 !== adSSetup.hasPageAdMi
          ? ((ASCDP.tcf.cmpFound = !0),
            (ASCDP.pageSet.cmpFound = ASCDP.tcf.cmpFound),
            (ASCDP.pageSet.orgPbBidder = ASCDP.pageSet.pbBidder.join()),
            (ASCDP.pageSet.pbBidder = ASCDP.pageSet.pbBidder.filter(function (e) {
              return 'smartadserver' !== e && 'criteo' !== e && 'teads' !== e && 'ix' !== e;
            })),
            window.__tcfapi
              ? ASCDP.tcf.addTCListener()
              : window.OneTrustStub &&
                ((ASCDP.tcf.oTinterceptor = OneTrustStub.otSdkStub.receiveIabMessage),
                (OneTrustStub.otSdkStub.receiveIabMessage = function (e) {
                  ASCDP.tcf.addTCListener(), ASCDP.tcf.oTinterceptor.call(this, e);
                })))
          : ((ASCDP.tcf.useTCF = !1),
            (ASCDP.pageSet.useTCF = !1),
            ASCDP.adS.loadModules(['getLocalData'], function () {
              ASCDP.adS.getLocalData();
            }),
            ASCDP.adS.loadModules(['setUserGroup'], function () {
              ASCDP.adS.setUserGroup();
            }),
            ASCDP.adS.loadModules(['setHEIDI'], function () {
              ASCDP.adS.setHEIDI();
            })),
        ASCDP.xhrOpen ||
          ((ASCDP.xhrOpen = XMLHttpRequest.prototype.open),
          (XMLHttpRequest.prototype.open = function (e, a, t) {
            if (
              ('string' == typeof a &&
                a.match(/ad-ipd.sxp.smartclip.net\/select.*&ada=ada_vdc/) &&
                'object' == typeof $AC &&
                'function' == typeof $AC.getSXPKeys &&
                (a = a.replace('&ada=ada_vdc', '&' + window.$AC.getSXPKeys())),
              'string' == typeof a && a.match(/ib.adnxs.com\/ptv.*roll/))
            ) {
              var d = '',
                i = ASCDP.adS.getHEIDI();
              for (var n in ASCDP.adS.prtnKeysVid)
                if (ASCDP.adS.prtnKeysVid.hasOwnProperty(n)) {
                  var r = JSON.stringify(ASCDP.adS.prtnKeysVid[n])
                    .replace(/[\{\}\[\]"]/gi, '')
                    .replace(/#/g, '');
                  n.match(/^pt\d$/)
                    ? (d += n.replace('kw_', '').replace(/#/g, '') + '=' + r + '&')
                    : 'kw_misc' !== n || -1 === a.indexOf('kw_misc=')
                    ? (d += 'kw_' + n.replace('kw_', '').replace(/#/g, '') + '=' + r + '&')
                    : (a = a.replace('kw_misc=', 'kw_misc=' + r.replace(/;/g, ',') + ','));
                }
              if (
                ((a = i
                  ? a.replace(
                      '&',
                      '&external_uid=' +
                        i +
                        '&kw_heidi=' +
                        ASCDP.pageSet.target.heidi +
                        '&kw_ext_uid_sent=' +
                        ASCDP.pageSet.target.heidi +
                        '&'
                    )
                  : a.replace(
                      '&',
                      '&kw_heidi=' +
                        ASCDP.pageSet.target.heidi +
                        '&kw_ext_uid_sent=' +
                        ASCDP.pageSet.target.heidi +
                        '&'
                    )),
                '' !== d && (a = a.replace('&', '&' + d + '&')),
                ASCDP.adS.amazonKeysVid && (a = a.replace('&', ASCDP.adS.amazonKeysVid + '&')),
                ASCDP.adS.adaLoadVDC &&
                  (a = a.replace('&', '&kw_vidAdaLoadVDC=' + ASCDP.adS.adaLoadVDC + '&')),
                -1 === a.indexOf('&publisher=') &&
                  (a = a.replace('&', '&publisher=' + ASCDP.pageSet.publisherId + '&')),
                -1 === a.indexOf('&size=') && (a = a.replace('&', '&size=1x1&')),
                'development' === ASCDP.pageSet.branch && (a = a.replace('&', '&test=1&')),
                ASCDP.pageSet.cmpFound)
              ) {
                var o = ASCDP.pageSet.useTCF ? '1' : '0';
                a = a.concat(
                  '&gdpr=1&gdpr_consent=' + ASCDP.pageSet.tcString + '&kw_gdpr_applies=' + o
                );
              }
              for (var s = a.split('&'), S = 0; S < s.length; S++)
                -1 !== s[S].indexOf('inv_code=') &&
                  (ASCDP.adS.instream.adAlertPlacement = s[S].replace('inv_code=', '')),
                  -1 !== s[S].indexOf('kw_misc=') &&
                    (ASCDP.adS.instream.adAlertKwMisc = s[S].replace('kw_misc=', '')),
                  -1 !== s[S].indexOf('kw_vidContentId=') &&
                    (ASCDP.adS.instream.adAlertVidContentId = s[S].replace(
                      'kw_vidContentId=',
                      ''
                    ));
              (ASCDP.adS.arVideoOnLoad = this.onload),
                (this.onload = function () {
                  4 === this.readyState &&
                    200 === this.status &&
                    ASCDP.adS.analyseResponseVideo(this.responseText),
                    ASCDP.adS.arVideoOnLoad && ASCDP.adS.arVideoOnLoad.apply(this, arguments);
                });
            }
            return (
              a.match(/adnxs.com\/ut\/v3$/i) &&
                ((ASCDP.adS.v3loading = !0),
                (ASCDP.adS.prevOn || 'development' === ASCDP.pageSet.branch) &&
                  (this.isANPreview = !0),
                (ASCDP.adS.v3OnLoad = this.onload),
                (this.onload = function () {
                  ASCDP.adS.analyseResponse(this.responseText),
                    ASCDP.adS.v3OnLoad.apply(this, arguments);
                })),
              ASCDP.xhrOpen.apply(this, arguments)
            );
          }),
          (ASCDP.xhrSend = XMLHttpRequest.prototype.send),
          (XMLHttpRequest.prototype.send = function (e) {
            this.isANPreview && this.setRequestHeader('X-Is-Test', '1'),
              ASCDP.xhrSend.call(this, e);
          })),
        ASCDP.pageSet.isHome &&
          (ASCDP.pageSet.sightloaderArr = ['superbanner_btf', 'mrec_btf.*', 'billboard_btf_2']),
        (function () {
          var e = new Date();
          window.__tcfapi &&
            window._sp_ &&
            window._sp_.config &&
            window._sp_.config.events &&
            (window._sp_.config.events.onMessageChoiceError = function (a) {
              (ASCDP.pageSet.useTCF = !0),
                (ASCDP.pageSet.target +=
                  'gdpr_p1=false;gdpr_p2=false;gdpr_p3=false;gdpr_p4=false;gdpr_p5=false;gdpr_p6=false;gdpr_p7=false;gdpr_p8=false;gdpr_p9=false;gdpr_p10=false;'),
                (ASCDP.pageSet.noDFP = !0),
                ASCDP.adS.err(
                  {
                    stack: 'https://www.asadcdn.com/adlib/',
                    message: 'sp onMessageChoiceError event triggered:' + a,
                  },
                  { caller: 'SourcePoint' }
                );
              var t = Math.round((new Date() - e) / 1000);
              try {
                if (
                  !window.__tcfapi ||
                  !window._sp_ ||
                  !window.fetch ||
                  !window.atob ||
                  window.__cmp_sp_nmf_init
                )
                  return;
                (window.__cmp_sp_nmf_init = !0),
                  fetch(atob('aHR0cHM6Ly93d3cuYmlsZC5kZS9iYXNoY3VybjQy'), {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({
                      event: {
                        type: 'sp-req-fail',
                        name: 'native-message',
                        ua: navigator.userAgent,
                        origin: window.location.origin,
                        timediff: t,
                      },
                    }),
                  }).catch(function (e) {
                    console.error('Fetch failed', e);
                  });
              } catch (e) {}
            });
        })(),
        window.adSSetup &&
        adSSetup.hasOwnProperty('hasVideoPlayer') &&
        !1 === adSSetup.hasVideoPlayer
          ? ASCDP.adS.sendEvent('adlibLoaded', 'adlibLoaded')
          : ASCDP.adS.loadModules(['instream'], function () {
              ASCDP.adS.sendEvent('adlibLoaded', 'adlibLoaded');
            }),
        window.console &&
          console.log(
            '%cAdLib v' + ASCDP.adS.version + ' ' + ASCDP.pageSet.branch + ' loaded',
            ASCDP.adS.logColor
          ),
        (!window.adSSetup ||
          !adSSetup.hasOwnProperty('hasPageAdMi') ||
          !1 !== adSSetup.hasPageAdMi) &&
          !ASCDP.adS.globalSet &&
          ((window.adSSetup && (adSSetup.isAMP || 'dooh' === adSSetup.view)) || !framed))
      ) {
        ASCDP.pageSet.target.match('badcontent') && (ASCDP.pageSet.noDFP = !0),
          ASCDP.adS.addEventListener(
            ASCDP.window,
            'message',
            function (e) {
              ASCDP.adS.listenMessage(e);
            },
            !1
          ),
          ASCDP.adS.addEventListener(
            ASCDP.window,
            'slotAvailable',
            function (e) {
              ASCDP.adS.renderAd(e);
            },
            !1
          ),
          ASCDP.adS.addEventListener(
            document,
            'renderAd',
            function (e) {
              ASCDP.adS.renderAd(e.detail);
            },
            !1
          ),
          ASCDP.adS.addEventListener(
            document,
            'reloadAds',
            function () {
              ASCDP.adS.loadModules(['reloadAds'], function () {
                ASCDP.adS.reloadAds();
              });
            },
            !1
          ),
          ASCDP.adS.loadScripts(ASCDP.adS.requiredJs),
          (ASCDP.pageSet.target += 'adlibVersion=' + ASCDP.adS.version + ';'),
          ASCDP.adS.speedCheck();
        var hasPartners =
          ASCDP.pageSet.partners &&
          (!ASCDP.pageSet.isHome || (ASCDP.pageSet.isHome && ASCDP.pageSet.retgtHome));
        if (
          (('amp' === ASCDP.pageSet.view || (hasPartners && !ASCDP.pageSet.useTCF)) &&
            ASCDP.adS.loadModules(['initPartners'], function () {
              ASCDP.adS.initPartners();
            }),
          window.adSSetup)
        ) {
          if (
            (adSSetup.target || (adSSetup.target = ''),
            adSSetup.hasOwnProperty('hasVideoPlayer') &&
              (ASCDP.pageSet.target += 'hasVideoPlayer=' + adSSetup.hasVideoPlayer + ';'),
            adSSetup.adPlacements &&
              (ASCDP.pageSet.adPlacements = adSSetup.adPlacements.filter(function (e, a) {
                return adSSetup.adPlacements.indexOf(e) === a && !/^[0-9]*$/.test(e);
              })),
            adSSetup.adSlotSizes)
          )
            for (var v in adSSetup.adSlotSizes)
              adSSetup.adSlotSizes.hasOwnProperty(v) &&
                (ASCDP.adS.slotSizeMap[v] = JSON.parse(JSON.stringify(adSSetup.adSlotSizes[v])));
          for (var slotMapId in ASCDP.adS.slotSizeMap)
            if (ASCDP.adS.slotSizeMap.hasOwnProperty(slotMapId)) {
              var slotsizes = [],
                sizeArr = ASCDP.adS.slotSizeMap[slotMapId],
                max = 0;
              for (var g in sizeArr)
                sizeArr.hasOwnProperty(g) &&
                  sizeArr[g].minWidth > max &&
                  ASCDP.adS.getWinWidth() > sizeArr[g].minWidth &&
                  ((max = sizeArr[g].minWidth), (slotsizes = [sizeArr[g]]));
              0 === slotsizes.length && (slotsizes = ASCDP.adS.slotSizeMap[slotMapId]),
                (slotsizes[0].minWidth = 1),
                (ASCDP.adS.slotSizeMap[slotMapId] = slotsizes),
                (adSSetup.adSlotSizes[slotMapId] = ASCDP.adS.slotSizeMap[slotMapId]);
            }
          ASCDP.pageSet.bbFix &&
            !ASCDP.pageSet.isHome &&
            ASCDP.pageSet.adPlacements.join('|').match(/superbanner(?!_btf)/) &&
            ASCDP.pageSet.adPlacements.join('|').match(/billboard(?!_btf)/) &&
            '3,3' !== adSSetup.adSlotSizes.billboard[0].sizes[0].toString() &&
            ((ASCDP.adS.slotSizeMap.superbanner[0].sizes = ASCDP.adS.slotSizeMap.superbanner[0].sizes.concat(
              ASCDP.adS.slotSizeMap.billboard[0].sizes
            )),
            (adSSetup.adSlotSizes.superbanner[0].sizes =
              ASCDP.adS.slotSizeMap.superbanner[0].sizes),
            (adSSetup.adSlotSizes.billboard = ASCDP.adS.slotSizeMap.billboard = [
              { minWidth: 1, sizes: [[3, 3]] },
            ]));
        }
        ASCDP.pageSet.adPlacements
          ? ((ASCDP.adS.initPlacements = ASCDP.pageSet.adPlacements.slice()),
            ASCDP.adS.loadModules(['setPG', 'initAdElt', 'init'], function () {
              var e;
              for (var a in (ASCDP.adS.setPG(),
              'amp' === ASCDP.pageSet.view &&
                ((ASCDP.pageSet.target += 'springamp=true;'),
                (ASCDP.getElementById = document.getElementById),
                (document.getElementById = function (a) {
                  var t,
                    d,
                    i,
                    n = '';
                  if (
                    (ASCDP.pageSet.availableSlots[a]
                      ? (n = a)
                      : a.match(/^utif_/)
                      ? ((d = a.split('_')).splice(-1, 1), d.splice(0, 1), (n = d.join('_')))
                      : ((t = a.match(/^(banner.*|mrec.*)/i) || a.match(/(_banner.*|mrec.*)/i)) &&
                        t[1]
                          ? (n = t[1])
                          : ASCDP.pageSet.availableSlots[a.replace(/_frame.*/, '')] && (n = a),
                        (n = n.replace(/_frame.*/, '').replace(/_CSS/, ''))),
                    (i = a.match(/iframevideowrapper_/i)),
                    n)
                  ) {
                    if (
                      ((e = ASCDP.adS.adElts[n]),
                      !ASCDP.pageSet.availableSlots[n].document.getElementById(n))
                    ) {
                      e.adSlot = e.masterSlot = document.createElement('div');
                      var r = e.adSlot;
                      (r.id = n),
                        ASCDP.pageSet.availableSlots[n].document
                          .getElementById('c')
                          .appendChild(r);
                    }
                    return ASCDP.pageSet.availableSlots[n].document.getElementById(a);
                  }
                  if (i) {
                    for (var o = '', s = 0; s < ASCDP.pageSet.outstreamIdMobile.length; s++)
                      (e = ASCDP.adS.adElts[ASCDP.pageSet.outstreamIdMobile[s]]) &&
                        e.outstream &&
                        (o = ASCDP.pageSet.outstreamIdMobile[s]);
                    return o
                      ? ASCDP.pageSet.availableSlots[o].document.getElementById(a)
                      : ASCDP.getElementById.call(this, a);
                  }
                  return ASCDP.getElementById.call(this, a);
                })),
              ASCDP.pageSet.adPlacements))
                ASCDP.pageSet.adPlacements.hasOwnProperty(a) &&
                  ASCDP.adS.initAdElt(ASCDP.pageSet.adPlacements[a]);
              ASCDP.pageSet.cmpFound || ASCDP.adS.init();
            }))
          : ASCDP.adS.err(
              { stack: ASCDP.adS.rootUrl, message: 'adSSetup missing' },
              { caller: 'postLib' }
            );
      }
      var $___var_7f617d647844a7ed = function (e) {
          ASCDP.adS.err(
            { stack: ASCDP.adS.rootUrl, message: 'sas_callAd used' },
            { caller: 'postLib' }
          ),
            ASCDP.adS.loadModules(['renderAd'], function () {
              ASCDP.adS.renderAd(e);
            });
        },
        $___var_37023cce9ffff58e = function () {
          ASCDP.adS.err(
            { stack: ASCDP.adS.rootUrl, message: 'sas_callAds used' },
            { caller: 'postLib' }
          ),
            ASCDP.adS.loadModules(['reloadAds'], function () {
              ASCDP.adS.reloadAds();
            });
        },
        $___var_a8e00bebbcaac200 = function (e) {
          ASCDP.adS.err(
            { stack: ASCDP.adS.rootUrl, message: 'sas_ccf used' },
            { caller: 'postLib' }
          ),
            ASCDP.adS.loadModules(['ccf'], function () {
              ASCDP.adS.ccf(e);
            });
        };
      sas_callAd = $___var_7f617d647844a7ed;
      sas_callAds = $___var_37023cce9ffff58e;
      sas_ccf = $___var_a8e00bebbcaac200;
      ASCDP.pageSet.isMobile &&
        'development' === ASCDP.pageSet.branch &&
        ASCDP.adS.addEventListener(
          window,
          'load',
          function () {
            ASCDP.adS.loadModules(['alertWatch'], function () {
              (ASCDP.adS.alertWatch.moves = 0),
                (ASCDP.adS.alertWatch.dir = 'down'),
                ASCDP.adS.addEventListener(
                  window,
                  'touchmove',
                  function (e) {
                    ASCDP.adS.alertWatch(e, 'watch');
                  },
                  !1
                ),
                ASCDP.adS.addEventListener(
                  window,
                  'touchend',
                  function (e) {
                    ASCDP.adS.alertWatch(e, 'check');
                  },
                  !1
                );
            });
          },
          !1
        ),
        ASCDP.adS.addEventListener(window, 'load', function () {
          const $___old_ef59b66f7340d7fd = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_ef59b66f7340d7fd)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_d454ba247eb956b2.localStorage
              ));
            return function () {
              if (!document.getElementById('__asadlibLocator')) {
                var e = document.createElement('iframe');
                (e.id = '__asadlibLocator'),
                  (e.name = '__asadlibLocator'),
                  (e.style.display = 'none'),
                  document.getElementsByTagName('body')[0].appendChild(e);
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_ef59b66f7340d7fd)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_ef59b66f7340d7fd));
          }
        }),
        (window.adSSetup &&
          adSSetup.hasOwnProperty('hasPageAdMi') &&
          !1 === adSSetup.hasPageAdMi) ||
          ((window.opeCustomEvents = []),
          ASCDP.pageSet.useTCF && window.__tcfapi
            ? ASCDP.adS.loadScripts(['https://tagger.opecloud.com/asmi/v2/tcf-tagger.js'])
            : ASCDP.adS.loadScripts(['https://tagger.opecloud.com/asmi/v2/tagger.js']),
          (ASCDP.adS.toOPE = function (e, a) {
            var t = { type: e },
              d = '';
            a || ('emetriq' === e && (a = window._emqtest));
            var i = a.split(';');
            for (var n in i)
              if (i.hasOwnProperty(n)) {
                var r = i[n].split('=');
                '' !== r[0] && ((t[r[0]] = '1'), (d += '&' + r[0] + '=' + r[1]));
              }
            ASCDP.adS.fireRequest('https://tagger.opecloud.com/asmi/v1/custom?type=' + e + d);
          }),
          (ASCDP.adS.ope2target = function (e) {
            ASCDP.adS.loading--,
              e &&
                ((ASCDP.adS.prtnKeys.static += '1plusX=' + e.s.join(',') + ';'),
                (ASCDP.adS.prtnKeysVid['1plusX'] = e.s.join(',') + ';'),
                (ASCDP.adS.prtnKeys.static += 'opectx=' + e.t.join(',') + ';'),
                (ASCDP.adS.prtnKeysVid.opectx = e.t.join(',') + ';'));
          }),
          ASCDP.adS.loading++,
          (function () {
            const $___old_e0c66e29f8c21a74 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              ),
              $___old_71f7059adb9672e1 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              );
            try {
              if ($___old_e0c66e29f8c21a74)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_187b68ea62666909.XMLHttpRequest
                ));
              if ($___old_71f7059adb9672e1)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_187b68ea62666909.XMLHttpRequest
                ));
              return function () {
                var e = new XMLHttpRequest();
                e.open('GET', 'https://profiles.tagger.opecloud.com/api/v1/asmi/profile'),
                  (e.withCredentials = !0),
                  e.setRequestHeader('referrerPolicy', 'no-referrer-when-downgrade'),
                  e.addEventListener('load', function (e) {
                    if ((ASCDP.adS.loading--, e.target.responseText)) {
                      var a = JSON.parse(e.target.responseText);
                      (ASCDP.adS.prtnKeys.static += '1plusX=' + a.s.join(',') + ';'),
                        (ASCDP.adS.prtnKeysVid['1plusX'] = a.s.join(',') + ';'),
                        (ASCDP.adS.prtnKeys.static += 'opectx=' + a.t.join(',') + ';'),
                        (ASCDP.adS.prtnKeysVid.opectx = a.t.join(',') + ';');
                    }
                  }),
                  e.send();
              }.apply(this, arguments);
            } finally {
              if ($___old_e0c66e29f8c21a74)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_e0c66e29f8c21a74
                ));
              if ($___old_71f7059adb9672e1)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_71f7059adb9672e1
                ));
            }
          })(),
          (ASCDP.adS.getCI = function () {
            if (_ci.a && _ci.a.length)
              for (; _ci.a.length > 0 && 0 !== _ci.a.length; ) {
                var e = _ci.a.shift(),
                  a = '';
                if (e.match(/df=|df_basic=|df_SPK=|dfb=|dfc=|dfr=|dft=|dfw=|dfv_|dfx_/))
                  if (e.match('=')) {
                    var t = e.split('=');
                    (a = t[0]),
                      (ASCDP.adS.prtnKeysVid['kw_' + a] = ASCDP.adS.prtnKeysVid['kw_' + a] || []);
                    var d = t[1];
                    -1 === ASCDP.adS.prtnKeysVid['kw_' + a].indexOf(d) &&
                      ASCDP.adS.prtnKeysVid['kw_' + a].push(d);
                  } else
                    (a = e + ';'),
                      -1 === ASCDP.adS.prtnKeysVid.kw_misc.indexOf(a) &&
                        (ASCDP.adS.prtnKeysVid.kw_misc += a);
                -1 === e.indexOf('dfv_') &&
                  ((a = e + ';'),
                  -1 === ASCDP.adS.prtnKeys.static.indexOf(a) && (ASCDP.adS.prtnKeys.static += a));
              }
            _ci.l
              ? (_ci.ct &&
                  ((ASCDP.pageSet.connectionType = _ci.ct),
                  ASCDP.adS.loadModules(['sendEvent'], function () {
                    ASCDP.adS.sendEvent('connectionTypeReceived', { type: _ci.ct });
                  })),
                ASCDP.adS.setCISlotTargets(null),
                (ASCDP.adS.CIloading = !1),
                ASCDP.adS.loading--)
              : setTimeout(ASCDP.adS.getCI, 20);
          }),
          (ASCDP.adS.setCISlotTargets = function (e) {
            var a = e || _ci.p;
            for (var t in a)
              if (a.hasOwnProperty(t)) {
                var d =
                  !!ASCDP.adS.slotSizeMap[t] &&
                  _ci.getBid(
                    t,
                    ASCDP.adS.slotSizeMap[t][0].sizes.map(function (e) {
                      return e.join('x');
                    })
                  );
                d &&
                  ASCDP.adS.adElts[t] &&
                  ((ASCDP.adS.prtnKeys.once[t] = ASCDP.adS.prtnKeys.once[t] || {}),
                  (ASCDP.adS.prtnKeys.once[t]['ci_' + d.s] = d.c));
              }
          }),
          (function () {
            if (
              ((window._ci = window._df = window._df || {
                bidUrlRoot: 'https://h.df-srv.de/hb/1221',
                requestCount: 0,
                l: !1,
                ca: [],
                b:
                  -1 !== document.cookie.indexOf('_df_block=1') ||
                  -1 !== location.hash.indexOf('df_block'),
                e: {},
                p: {},
                g: {},
              }),
              -1 !== document.cookie.indexOf('_df_store='))
            ) {
              var e = document.cookie.match(/_df_store=(.*?);/i);
              e && e.length > 1 && ((_ci.ca = e[1].split(',')), (_ci.a = e[1].split(',')));
            }
            if (-1 !== document.cookie.indexOf('_df_extra=')) {
              var a = document.cookie.match(/_df_extra=(.*?);/i);
              a &&
                a[1] &&
                ((_ci.e.m = a[1]),
                (document.cookie =
                  '_df_extra=; SameSite=Strict; Secure; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'));
            }
            window.adSSetup && (_ci.e.t = adSSetup.target),
              (_ci.getBid = function (e, a) {
                var t = _ci.p[e];
                return !(!t || t.placed || -1 === a.indexOf(t.s)) && t;
              }),
              (_ci.getBids = function (e) {
                for (var a = {}, t = 0; t < e.length; t++) {
                  var d = e[t],
                    i = _ci.p[d];
                  i && !i.placed && (a[d] = i);
                }
                return a;
              }),
              (_ci.buildQueryString = function (e) {
                var a = '';
                for (var t in e)
                  e.hasOwnProperty(t) &&
                    ('' !== a && (a += '&'), (a += t + '=' + encodeURIComponent(e[t])));
                return a;
              }),
              (_ci.buildAdTag = function (e, a, t) {
                var d =
                    t ||
                    '<style>body,html {margin:0;padding:0;overflow:hidden;}a {border:none;}</style>',
                  i = {
                    'extra[asn]': _ci.e.asn,
                    'extra[asd]': _ci.e.asd,
                    'extra[api]': _ci.e.api,
                    'extra[apn]': _ci.e.apn,
                    'extra[av]': _ci.e.av,
                    r: _ci.requestId,
                    gdpr_required: ASCDP.pageSet.cmpFound,
                    gdpr_consent: ASCDP.pageSet.tcString,
                  };
                for (var n in a) a.hasOwnProperty(n) && (i[n] = a[n]);
                return (
                  (d +=
                    '<script id="' +
                    e +
                    '" src="https://a.df-srv.de/v2/view/' +
                    e +
                    '/a.js?' +
                    _ci.buildQueryString(i) +
                    '"></script>'),
                  (d += '<script>foreignId = "' + e + '-' + _ci.requestId + '";</script>')
                );
              }),
              (_ci.r = function (e, a, t, d) {
                var i = _ci.g[e],
                  n = t,
                  r = { 'extra[token]': e, 'extra[slot]': a };
                if (i) {
                  var o = i[a] || i.default;
                  if (o && ((n = o.h), o.extra && (r['extra[extra]'] = o.extra), o.t)) return o.t;
                }
                return n ? _ci.buildAdTag(n, r) : '';
              }),
              (_ci.t = function (e, a) {
                var t = ASCDP.adS.adElts[e];
                e = e.replace('_rlSlot', '');
                var d = _ci.p[e];
                d.placed = !0;
                var i = d.t;
                if (!i) {
                  var n = {
                    sync: 'dontusethis',
                    'extra[placement]': e,
                    'extra[extra]': d.extra,
                    'extra[reload]': t.relCount,
                    b: d.b,
                  };
                  a && (n.redirect2enc = encodeURIComponent(a)), (i = _ci.buildAdTag(d.h, n));
                }
                if ('oneTag' === t.tempName) {
                  var r = d.s.split('x');
                  (t.adSlot.querySelector('div.oneTag iframe').style.width = r[0] + 'px'),
                    (t.adSlot.querySelector('div.oneTag iframe').style.height = r[1] + 'px');
                }
                return i;
              }),
              (_ci.bid = function (e, a) {
                if ((a && (_ci.callbackCache = a), e)) {
                  (_ci.e.f = {}), (_ci.e.slots = []);
                  for (var t = 0; t < e.length; t++) {
                    var d = e[t].match('teaser')
                      ? e[t]
                      : (e[t].match(/(.*?)_\d.*/) || ['', e[t]])[1];
                    ASCDP.adS.slotSizeMap[d] &&
                      ((_ci.e.f[e[t]] = ASCDP.adS.slotSizeMap[d][0].sizes.map(function (e) {
                        return e.join('x');
                      })),
                      _ci.e.slots.push({ slotId: e[t], placement: d, sizes: _ci.e.f[e[t]] }));
                  }
                }
                if (
                  (window.__tcfapi &&
                    ((_ci.e.gdpr_consent = ASCDP.pageSet.tcString), (_ci.e.gdpr_required = !0)),
                  _ci.requestId &&
                    ((_ci.e.requestId = _ci.requestId + '-' + _ci.requestCount),
                    _ci.requestCount++),
                  'withCredentials' in new XMLHttpRequest())
                ) {
                  var i = new XMLHttpRequest();
                  i.open('POST', _ci.bidUrlRoot),
                    (i.withCredentials = !0),
                    i.setRequestHeader('Content-Type', 'text/plain'),
                    i.send(JSON.stringify(_ci.e)),
                    i.addEventListener('load', function () {
                      if (200 === i.status && i.responseText) {
                        var e;
                        try {
                          e = JSON.parse(i.responseText);
                        } catch (e) {}
                        e && _ci.handleBid(e);
                      }
                    });
                } else
                  ASCDP.adS.loadScripts([
                    _ci.bidUrlRoot + '?cb=window._ci.handleBid&' + _ci.buildQueryString(_ci.e),
                  ]);
              }),
              (_ci.handleBid = function (e) {
                if (
                  ((_ci.requestId = _ci.requestId || e.r),
                  (_ci.vId = e.v),
                  _ci.ca && _ci.ca.length)
                )
                  for (var a = 0; a < e.a.length; a++)
                    -1 === _ci.ca.indexOf(e.a[a]) && _ci.a.push(e.a[a]);
                else _ci.a = e.a.slice(0);
                if (((_ci.c = e.c), ASCDP.getURLParameter('ci_regio')))
                  _ci.g = JSON.parse(ASCDP.getURLParameter('ci_regio'));
                else if (e.g) for (var t in e.g) e.g.hasOwnProperty(t) && (_ci.g[t] = e.g[t]);
                if (((_ci.ct = e.ct), ASCDP.getURLParameter('ci_perf')))
                  _ci.p = JSON.parse(ASCDP.getURLParameter('ci_perf'));
                else if (e.p) for (var d in e.p) e.p.hasOwnProperty(d) && (_ci.p[d] = e.p[d]);
                if (((_ci.l = !0), e.a.length)) {
                  _ci.ca = [];
                  for (var i = 0; i < e.a.length; i++)
                    e.a[i].match(/dfv_|dfx_|df=|dfr=|dfc=/) && _ci.ca.push(e.a[i]);
                  if (_ci.ca.length && ASCDP.pageSet.storageAccess) {
                    var n = new Date();
                    n.setTime(n.getTime() + 43200000),
                      (document.cookie =
                        '_df_store=' +
                        _ci.ca.join(',') +
                        '; SameSite=Strict; Secure; expires=' +
                        n.toUTCString() +
                        '; path=/');
                  }
                } else
                  _ci.ca &&
                    (document.cookie =
                      '_df_store=; SameSite=Strict; Secure; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/');
                _ci.callbackCache && (_ci.callbackCache(), (_ci.callbackCache = void 0));
              }),
              ASCDP.adS.loadModules(['slotSizeMap', 'getPlacementName'], function () {
                ASCDP.pageSet &&
                  ((_ci.e.asn = ASCDP.pageSet.siteName),
                  (_ci.e.asd = ASCDP.pageSet.siteDomain),
                  (_ci.e.api = ASCDP.pageSet.publisherId),
                  (_ci.e.apg = ASCDP.pageSet.placementGroup),
                  (_ci.e.asid = ASCDP.pageSet.siteId),
                  (_ci.e.apn = ASCDP.pageSet.pageName),
                  (_ci.e.av = ASCDP.pageSet.view),
                  (_ci.e.am = ASCDP.pageSet.isMobile),
                  ASCDP.adS.loadModules(['getWinWidth'], function () {
                    _ci.e.sx = ASCDP.adS.getWinWidth();
                  }),
                  ASCDP.adS.loadModules(['getWinHeight'], function () {
                    _ci.e.sy = ASCDP.adS.getWinHeight();
                  })),
                  _ci.b && (_ci.l = !0);
              });
          })(),
          ASCDP.adS.loadScripts(['https://cdn.c-i.as/c.js']),
          ASCDP.pageSet.isHome ||
            (ASCDP.adS.loading++,
            (window.__iasPET = window.__iasPET || {}),
            (window.__iasPET.start =
              window.__iasPET.start ||
              function (e, a) {
                const $___old_34a1132dfa076132 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                );
                try {
                  if ($___old_34a1132dfa076132)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___stub_187b68ea62666909.XMLHttpRequest
                    ));
                  return function () {
                    var t, d, i, n, r, o;
                    try {
                      var s = function (e) {
                          var a,
                            t,
                            d,
                            i,
                            n = {},
                            r = function (e) {
                              return e && e.replace(/[^\w-_.>\/]/g, '');
                            };
                          return (
                            (a = r(
                              (function (e) {
                                return e && e.replace(/\//g, '');
                              })(e.adSlotId)
                            )),
                            (t = e.size && e.size instanceof Array && e.size.join('.')),
                            (d = r(e.adUnitPath)),
                            (i = (function (a) {
                              var t = 'display';
                              return (
                                void 0 !== e.type && null != a && 'video' == r(a) && (t = 'video'),
                                t
                              );
                            })(e.type)),
                            (n.id = a),
                            ((n = g.extend(
                              n,
                              (function (e) {
                                var a = {};
                                return (
                                  g.isArray(e) &&
                                    (e.every(g.isArray)
                                      ? ((e = e
                                          .map(function (e) {
                                            return e.join('.');
                                          })
                                          .join(',')),
                                        (a.ss = '[' + e + ']'))
                                      : (a.s = e.join('.'))),
                                  a
                                );
                              })(e.size)
                            )).p = d),
                            (n.t = i),
                            {
                              toString: function () {
                                var e,
                                  a = [];
                                for (e in n) n.hasOwnProperty(e) && a.push(e + ':' + n[e]);
                                return 'slot={' + a.join(',') + '}';
                              },
                              isValid: function () {
                                return a && t && d;
                              },
                            }
                          );
                        },
                        S =
                          ((o = function (e) {
                            e &&
                              ((i = g.isFn(e.dataHandler) ? e.dataHandler : i),
                              (d = e.timeout || d),
                              c.setAdSlots(e));
                          }),
                          {
                            setup: function () {
                              (n = new (function () {
                                var a = {},
                                  d = function (e) {
                                    return setTimeout(function () {
                                      a[e] ||
                                        (t.diagPix(l.LONG_REQUEST, { message: 'threshold:2000' }),
                                        t.warn('Long PET request that exceeds 2000ms.'));
                                    }, 2000);
                                  },
                                  i = function (e) {
                                    var d,
                                      i,
                                      n = g.getQueryParamByName('iasprofileprobability') || 10,
                                      r = {};
                                    g.chance(n) &&
                                      setTimeout(function () {
                                        (i = (d = a[e]) && d - e),
                                          (r.responsetime = i),
                                          (r.probability = n),
                                          t.diagPix(l.PROFILE_RESPONSE, {
                                            message: g.buildQueryString(r, ':'),
                                          });
                                      }, 2000);
                                  },
                                  n = function (e) {
                                    return e.width + '.' + e.height;
                                  },
                                  r = function () {
                                    var a = [],
                                      d = e.__iasPET.pubId,
                                      i = n(f.getWindowSize(e)),
                                      r = n(f.getScreenSize(e)),
                                      o = e.__iasPET.sessionId;
                                    if (!c.isEmpty() && d)
                                      return (
                                        a.push('anId=' + d),
                                        a.push(c),
                                        a.push('wr=' + i),
                                        a.push('sr=' + r),
                                        a.push('sessionId=' + o),
                                        t.log('ad slots set: ' + c),
                                        t.log('anid set: ' + d),
                                        a.join('&')
                                      );
                                    c.isEmpty() &&
                                      t.error('Expected valid ad slot configuration.'),
                                      d || t.error('Expecting valid IAS publisher id.'),
                                      t.diagPix(l.MISSING_DATA);
                                  };
                                return {
                                  send: function (e, n) {
                                    var o,
                                      s,
                                      S,
                                      l = !1,
                                      f =
                                        g.getQueryParamByName('iasendpoint') ||
                                        '//pixel.adsafeprotected.com/services/pub',
                                      u = r(),
                                      m = g.isFn(e);
                                    u &&
                                      ((o = function (d) {
                                        (l = g.now()),
                                          t.log('PET response ' + d),
                                          (a[s] = l),
                                          p.updateData(d),
                                          m && e(d),
                                          clearTimeout(S);
                                      }),
                                      (s = g.now()),
                                      (a[s] = !1),
                                      g.sendXHR(f, u, o, n),
                                      (S = d(s)),
                                      i(s),
                                      c.clear());
                                  },
                                };
                              })()),
                                ((r = r || e.__iasPET.queue).push = function (e) {
                                  var a;
                                  try {
                                    if (g.isFn(e)) a = e();
                                    else {
                                      if (!g.isObj(e))
                                        throw Error(
                                          'Items pushed into the queue must be a function or object'
                                        );
                                      a = e;
                                    }
                                  } catch (e) {
                                    t.error('Error processing queued command: ' + e.message);
                                  }
                                  o(a), n.send(i, d);
                                });
                            },
                            executeCommands: function () {
                              var a, s;
                              if ((r = r || e.__iasPET.queue) && r.length) {
                                for (a = 0; a < r.length; ++a) {
                                  try {
                                    g.isFn(r[a]) ? (s = r[a]()) : g.isObj(r[a]) && (s = r[a]);
                                  } catch (e) {
                                    t.error('Error processing queued command: ' + e.message);
                                  }
                                  o(s);
                                }
                                n.send(i, d);
                              }
                            },
                          }),
                        c = (function () {
                          var e = [],
                            a = function (a) {
                              new s(a).isValid()
                                ? e.push(new s(a))
                                : t.error('Missing ad slot id, slot size and/or ad unit path.');
                            };
                          return {
                            setAdSlots: function (e) {
                              (e = e.adSlots) &&
                                (e instanceof Array
                                  ? e.forEach(function (e) {
                                      a(e);
                                    })
                                  : g.isObj(e) && a(e));
                            },
                            clear: function () {
                              e = [];
                            },
                            isEmpty: function () {
                              return 0 === e.length;
                            },
                            toString: function () {
                              return e.join('&');
                            },
                          };
                        })(),
                        p = (function () {
                          var a = {},
                            d = {},
                            i = function (e, a) {
                              e &&
                                g.isFn(e.setTargeting) &&
                                g.forIn(a, function (a, d) {
                                  t.log('setting targeting: {' + a + ': ' + d + '}'),
                                    e.setTargeting(a, d);
                                });
                            };
                          return {
                            updateData: function (e) {
                              var t = JSON.parse(e);
                              e = t.brandSafety;
                              var i = t.slots;
                              (a.fr = t.fr),
                                (t = function (e, a) {
                                  g.forIn(e, function (e, t) {
                                    a[e] = t;
                                  });
                                })(e, a),
                                t(i, d);
                            },
                            setTargeting: function () {
                              e.googletag
                                ? e.googletag.cmd.push(function () {
                                    i(e.googletag.pubads(), a),
                                      (function () {
                                        var a,
                                          n = e.googletag.pubads().getSlots();
                                        n
                                          ? n.forEach(function (e) {
                                              (a =
                                                g.isFn(e.getSlotElementId) &&
                                                e.getSlotElementId()) && i(e, d[a]);
                                            })
                                          : t.error(
                                              'GPT slots have to be defined before setting slot level keyword targeting'
                                            );
                                      })();
                                  })
                                : (t.error(
                                    'googletag is not available. Cannot set keyword targeting for GPT.'
                                  ),
                                  t.diagPix(l.GPT_NA)),
                                g.isEmptyObj(a) &&
                                  t.warn(
                                    'PET page level data (brand safety, fraud) is not available yet.'
                                  ),
                                g.isEmptyObj(d) &&
                                  t.warn(
                                    'PET slot level data (viewability) is not available yet.'
                                  );
                            },
                          };
                        })(),
                        l = {
                          GPT_NA: 'gpt',
                          LONG_REQUEST: 'longreq',
                          MISSING_DATA: 'm',
                          XHR_NA: 'na',
                          PROFILE_RESPONSE: 'profile',
                          XHR_GENERAL: 'x',
                          XHR_ERROR: 'xe',
                          XHR_TIMEOUT: 'xt',
                        },
                        f = {
                          getWindowSize: function (e) {
                            return { width: e.innerWidth || -1, height: e.innerHeight || -1 };
                          },
                          getScreenSize: function (e) {
                            return {
                              width: (e.screen && e.screen.width) || -1,
                              height: (e.screen && e.screen.height) || -1,
                            };
                          },
                        };
                      (e.__iasPET.queue = e.__iasPET.queue || []),
                        (e.__iasPET.VERSION = '1.10.0'),
                        (e.__iasPET.setTargetingForGPT = p.setTargeting);
                      var u = e.postMessage
                        ? function (e) {
                            top.postMessage(e, '*');
                          }
                        : function () {};
                      t = (function () {
                        var a = {},
                          t = function (a, t) {
                            var d = 'background-color: ',
                              i = e.console && 'function' == typeof e.console.error,
                              n = g.getQueryParamByName('iasdebug');
                            (n = n && 'TRUE' === n.toUpperCase()),
                              'log' === a
                                ? (d += 'lightgreen')
                                : 'error' === a
                                ? (d += 'pink')
                                : 'warn' === a && (d += 'lightyellow'),
                              i &&
                                n &&
                                (console.log('%cIAS_DEBUG: ' + t, d),
                                u('DEBUG_petErrorsLog: IAS_DEBUG: ' + t));
                          },
                          d = t.bind(null, 'log'),
                          i = t.bind(null, 'warn');
                        return {
                          diagPix: function (t, d) {
                            var i, n, r, o;
                            if (!a[t])
                              try {
                                (i = e.__iasPET.pubId || ''),
                                  (n = e.__iasPET.sessionId || ''),
                                  (a[t] = !0),
                                  (r = { code: 'pet_' + t, anid: i, sessionId: n }),
                                  d && (r.err = encodeURIComponent(d.message)),
                                  (o = g.buildQueryString(r, ':')),
                                  (new Image().src =
                                    '//pixel.adsafeprotected.com/jsdiagnostic?' + o),
                                  u(
                                    'DEBUG_petErrorsReport: //pixel.adsafeprotected.com/jsdiagnostic?' +
                                      o
                                  );
                              } catch (e) {}
                          },
                          error: t.bind(null, 'error'),
                          log: d,
                          warn: i,
                        };
                      })();
                      var g = {
                        buildQueryString: function (e, a) {
                          var t = '';
                          return (
                            e &&
                              (t = Object.keys(e)
                                .reduce(function (t, d) {
                                  return t.push([d, e[d]].join(a)), t;
                                }, [])
                                .join('&')),
                            t
                          );
                        },
                        getQueryParamByName: function (t) {
                          var d,
                            i = e.location.search && e.location.search.toLowerCase();
                          return (
                            -1 !== (t = i && i.indexOf(t)) &&
                              ((d = i.indexOf('=', t) + 1),
                              (t = -1 === (t = i.indexOf('&', d)) ? a : t),
                              (d = decodeURIComponent(i.slice(d, t)))),
                            d
                          );
                        },
                        sendXHR: function (e, a, d, i) {
                          const $___old_024c73e33a943d31 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_055b6757cc86c9a2 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_024c73e33a943d31)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_187b68ea62666909.XMLHttpRequest
                              ));
                            if ($___old_055b6757cc86c9a2)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_187b68ea62666909.XMLHttpRequest
                              ));
                            return function () {
                              var n, r;
                              try {
                                (n = new XMLHttpRequest()) &&
                                  ((r = encodeURI(e + '?' + a)),
                                  n.open('GET', r),
                                  u('DEBUG_petDataRequest: ' + r),
                                  (n.onreadystatechange = function () {
                                    var e;
                                    if (4 === n.readyState && 200 === n.status)
                                      if ((e = n.responseText).code)
                                        t.error(
                                          'XMLHttpRequest failure code: ' +
                                            e.code +
                                            ', message: ' +
                                            e.message
                                        );
                                      else if (d)
                                        try {
                                          d.call({}, e);
                                        } catch (e) {
                                          t.error(
                                            'Error firing the XMLHttpRequest callback: ' +
                                              e.message
                                          );
                                        }
                                  }),
                                  i && (n.timeout = i),
                                  (n.ontimeout = function () {
                                    t.error('XMLHttpRequest timeout event is fired.'),
                                      t.diagPix(l.XHR_TIMEOUT, { message: 'timeout:' + i });
                                  }),
                                  (n.onerror = function (e) {
                                    t.error('XMLHttpRequest error event is fired.'),
                                      t.diagPix(l.XHR_ERROR, e);
                                  }),
                                  n.send());
                              } catch (e) {
                                t.error('Error sending XMLHttpRequest: ' + e.message),
                                  t.diagPix(l.XHR_GENERAL, e);
                              }
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_024c73e33a943d31)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_024c73e33a943d31
                              ));
                            if ($___old_055b6757cc86c9a2)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_055b6757cc86c9a2
                              ));
                          }
                        },
                        forIn: function (e, a) {
                          for (var t in e) e.hasOwnProperty(t) && a(t, e[t]);
                        },
                        getUID: function () {
                          var e = function () {
                            return Math.floor(65536 * (1 + Math.random()))
                              .toString(16)
                              .substring(1);
                          };
                          return (
                            e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e()
                          );
                        },
                        extend: function (e, a) {
                          return (
                            a &&
                              Object.keys(a).forEach(function (t) {
                                e[t] = a[t];
                              }),
                            e
                          );
                        },
                        isArray: function (e) {
                          return e instanceof Array;
                        },
                        isDef: function (e) {
                          return void 0 !== e;
                        },
                        isFn: function (e) {
                          return 'function' == typeof e;
                        },
                        isObj: function (e) {
                          return 'object' == typeof e;
                        },
                        isEmptyObj: function (e) {
                          return 0 === Object.getOwnPropertyNames(e).length;
                        },
                        now: function () {
                          return new Date().getTime();
                        },
                        chance: function (e) {
                          return 100 * Math.random() < e;
                        },
                      };
                      'undefined' == typeof XMLHttpRequest
                        ? t.diagPix(l.XHR_NA)
                        : ((e.__iasPET.sessionId = g.getUID()), S.setup(), S.executeCommands());
                    } catch (e) {
                      t.error(e.message);
                    }
                  }.apply(this, arguments);
                } finally {
                  if ($___old_34a1132dfa076132)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___old_34a1132dfa076132
                    ));
                }
              }),
            window.__iasPET.start(window),
            ASCDP.adS.loadModules(['slotSizeMap'], function () {
              for (var e = [], a = ASCDP.pageSet.adPlacements || [], t = 0; t < a.length; t++) {
                var d = (a[t].match(/(.*?)_\d.*/) || ['', a[t]])[1];
                e.push({
                  adSlotId: a[t],
                  size: (adSSetup.adSlotSizes[d] || ASCDP.adS.slotSizeMap[d])[0].sizes || [],
                  adUnitPath: '-',
                });
              }
              (__iasPET.pubId = '927274'),
                __iasPET.queue.push({
                  adSlots: e,
                  dataHandler: function (e) {
                    for (var a in (e = JSON.parse(e)).brandSafety)
                      e.brandSafety.hasOwnProperty(a) &&
                        (ASCDP.adS.prtnKeys.static += 'IAS_' + a + '=' + e.brandSafety[a] + ';');
                    if (e.custom)
                      for (var t in e.custom)
                        e.custom.hasOwnProperty(t) &&
                          (ASCDP.adS.prtnKeys.static +=
                            'IAS_' + t.replace('ias-', '') + '=' + e.custom[t] + ';');
                    if (e.slots)
                      for (var d in e.slots)
                        if (e.slots.hasOwnProperty(d))
                          for (var i in e.slots[d])
                            e.slots[d].hasOwnProperty(i) &&
                              (ASCDP.adS.adElts[d] || ASCDP.adS.initAdElt(d),
                              (ASCDP.adS.adElts[d].slotTarget +=
                                'IAS_' + i + '=' + e.slots[d][i] + ';'));
                    (ASCDP.adS.prtnKeys.static += 'IAS_fraud=' + e.fr + ';'), ASCDP.adS.loading--;
                  },
                });
            })),
          (ASCDP.partners.ada = function () {
            if ('m' === ASCDP.pageSet.view || 'd' === ASCDP.pageSet.view) {
              ASCDP.adS.adaConfig = {
                agof: window.iam_data ? iam_data.cp : '',
                autoDetection: !0,
                consent: !0,
                site: ASCDP.pageSet.siteDomain,
                ivw: '',
                nuggadID: '',
                playerName: '',
                playerVersion: '',
                playerSDK: '',
                playerSDKTimeout: 5,
                playerWrapper: 9,
                playerTimeout: 5,
              };
              var e = document.createElement('script');
              (e.type = 'text/javascript'),
                (e.id = 'ipdvdc'),
                (e.innerHTML = '$AC.loadConfig(' + JSON.stringify(ASCDP.adS.adaConfig) + ')'),
                (e.src = 'https://bilder-a.akamaihd.net/ip/js/ipdvdc/ipdvdc.min.js'),
                (e.async = !0),
                adSSetup.hasVideoPlayer
                  ? (document.head.appendChild(e), (ASCDP.adS.adaLoadVDC = '1'))
                  : adSSetup.hasOwnProperty('hasVideoPlayer')
                  ? (ASCDP.adS.adaLoadVDC = '0')
                  : (ASCDP.adS.addEventListener(
                      ASCDP.window,
                      'load',
                      function () {
                        !(
                          !document.querySelector('.showheroes-spot') &&
                          !document.querySelector('.jwplayer') &&
                          !document.querySelector('#fin_jw_player') &&
                          !document.querySelector('.bitmovin-mediasites-player') &&
                          !window.mediaplayer
                        ) && document.body.appendChild(e);
                      },
                      !1
                    ),
                    (ASCDP.adS.adaLoadVDC = '2')),
                ASCDP.adS.loading--;
            }
          }),
          ASCDP.pageSet.partners &&
            (ASCDP.adS.getRemKeys = function () {
              var e, a;
              (e = document.cookie.match(/remid=(.*?);/i)),
                (a = document.cookie.match(/adserveraction=(.*?);/i)),
                e &&
                  a &&
                  window.rem &&
                  ((ASCDP.pageSet.remID = e[1]),
                  (ASCDP.pageSet.remKID = a[1]),
                  (ASCDP.adS.prtnKeys.static += 'remKID=' + a[1] + ';remID=' + e[1] + ';'),
                  (ASCDP.adS.evaluate_rem_adevent = function (e) {
                    var a = [];
                    for (var t in e) e.hasOwnProperty(t) && [t].value && a.push(e[t]);
                    return a;
                  }),
                  (ASCDP.adS.countRem = function (e) {
                    var a = {
                      action: { name: 'action', value: e },
                      shopid: { name: 'shopid', value: rem.shopid.value },
                      origin: { name: 'origin', value: rem.origin.value },
                      contentid: { name: 'contentid', value: rem.contentid.value },
                      coremediaid: { name: 'coremediaid', value: rem.coremediaid.value },
                      kid: { name: 'kid', value: ASCDP.pageSet.remKID },
                      wid: { name: 'wid', value: '<wid>' },
                    };
                    window.rem_client && rem_client.request(ASCDP.adS.evaluate_rem_adevent(a));
                  })),
                (ASCDP.pageSet.remtreck = !1);
            })),
        (ASCDP.partners.emqTC = function () {
          ASCDP.adS.loadScripts(['https://ups.xplosion.de/loader/49351/default.js']);
        }),
        (ASCDP.partners.netId = {
          getId: function () {
            var e = new XMLHttpRequest();
            e.open(
              'GET',
              'https://einwilligungsspeicher.netid.de/permissions/iab-permissions?tapp_id=892f6c4d-519c-4be8-b49f-9398f45cd18c'
            ),
              e.addEventListener('load', function () {
                var a = JSON.parse(e.responseText);
                if (((ASCDP.partners.netId.userData = a), a.tpid)) {
                  ASCDP.adS.fireRequest('https://www.asadcdn.com/flairfire/ni.png?c=3');
                  try {
                    window.localStorage.setItem('nitpid', a.tpid);
                  } catch (e) {}
                } else a.tc ? (ASCDP.adS.fireRequest('https://www.asadcdn.com/flairfire/ni.png?c=2'), ASCDP.partners.netId.postString()) : 'OK' === a.status ? (ASCDP.adS.fireRequest('https://www.asadcdn.com/flairfire/ni.png?c=0'), ASCDP.partners.netId.postString()) : 'NO_TPID' === a.status ? ASCDP.adS.fireRequest('https://www.asadcdn.com/flairfire/ni.png?c=1') : ASCDP.adS.fireRequest('https://www.asadcdn.com/flairfire/ni.png?c=4');
                try {
                  window.localStorage.setItem('niDate', new Date().toLocaleDateString());
                } catch (e) {}
              }),
              e.addEventListener('error', function () {
                ASCDP.partners.netId.onError();
              }),
              (e.withCredentials = !0),
              e.send();
          },
          postString: function () {
            var e = { identification: !0, tc: ASCDP.pageSet.tcString },
              a = new XMLHttpRequest();
            a.open(
              'POST',
              'https://einwilligen.netid.de/permissions/iab-permissions?tapp_id=892f6c4d-519c-4be8-b49f-9398f45cd18c'
            ),
              a.addEventListener('load', function () {
                var e = JSON.parse(a.responseText);
                if (((ASCDP.partners.netId.userData = e), e.tpid)) {
                  ASCDP.adS.fireRequest('https://www.asadcdn.com/flairfire/ni.png?c=3');
                  try {
                    window.localStorage.setItem('nitpid', e.tpid);
                  } catch (e) {}
                }
              }),
              a.addEventListener('error', function () {
                ASCDP.partners.netId.onError();
              }),
              a.setRequestHeader(
                'Content-type',
                'application/vnd.netid.permissions.iab-permission-write-v1+json'
              ),
              (a.withCredentials = !0),
              a.send(JSON.stringify(e));
          },
          onError: function () {
            ASCDP.adS.fireRequest('https://www.asadcdn.com/flairfire/ni.png?c=5');
            try {
              window.localStorage.setItem('niDate', new Date().toLocaleDateString());
            } catch (e) {}
          },
          init: function () {
            var e, a;
            try {
              (e = window.localStorage && localStorage.getItem('niDate')),
                (a = localStorage.getItem('nitpid'));
            } catch (e) {
              return;
            }
            e !== new Date().toLocaleDateString()
              ? ASCDP.partners.netId.getId()
              : (ASCDP.partners.netId.userData = {
                  tc: ASCDP.pageSet.tcString || '',
                  status: a ? 'OK' : 'NO_TPID',
                  tpid: a || 'no netId accessible',
                });
          },
        });
      var $___var_5a37349ff7b858a5 = ASCDP;
      asmi = $___var_5a37349ff7b858a5;
      asmi.sas = ASCDP.adS;
      var $___var_49e881c82a1069b7 = !0,
        $___var_407b242649db6a0e = window.sas_target || '',
        $___var_6786a68a61f5fa9c = [],
        $___var_70f69f93980e9d91 = function () {
          return 0;
        },
        $___var_fd730922f432d7df = sasmobile,
        $___var_21b957a9b798a2b0 = function (e, a, t, d, i) {
          if (!isNaN(a))
            if (
              ASCDP.pageSet.useTCF &&
              ASCDP.tcf.cmpFound &&
              window.sas_queue &&
              !ASCDP.tcf.tcfProcessed
            )
              window.sas_queue.push([e, a, t, d, i]);
            else
              try {
                var n = '',
                  r = ASCDP.adS,
                  o = ASCDP.pageSet,
                  s = adSSetup.tms ? adSSetup.tms.nwId : '788';
                e = e || ('d' === o.view ? o.siteId : o.siteIdMobile) + '/(' + o.pageName + ')';
                var S = document.createElement('script');
                (a = a.toString()), (i = 'sas_' + (i && String(i).replace('sas_', '')) || a);
                var c = e.replace(/\)/g, '').split('(');
                '' === c[0].replace('/', '') &&
                  (c[0] = 'm' === o.view ? o.siteIdMobile : o.siteId),
                  ASCDP.pageSet.cxSegments &&
                    (n = ASCDP.pageSet.cxSegments.join(';CxSegments=') + ';'),
                  (S.id = 'sas_s' + i.replace('sas_', '')),
                  (S.type = 'text/javascript'),
                  (S.src =
                    'https://www6.smartadserver.com/ac?nwid=' +
                    s +
                    '&siteid=' +
                    String(c[0]).replace('/', '') +
                    '&pgname=' +
                    o.pageName.replace(/\./g, '/') +
                    '&fmtid=' +
                    a +
                    '&visit=S&tmstp=' +
                    r.tsn +
                    '&tag=' +
                    i +
                    (ASCDP.pageSet.useTCF
                      ? '&gdpr_consent=' + ASCDP.pageSet.tcString + '&gdpr=1'
                      : '') +
                    '&async=1&tgt=' +
                    encodeURIComponent(
                      (t || r.targetString) +
                        ';' +
                        r.prtnKeys.static +
                        n +
                        'isAppNexus=true;isRed=' +
                        !!adSSetup.tms +
                        ';'
                    )),
                  (S.onreadystatechange = S.onload = function () {
                    (this.readyState &&
                      'loaded' !== this.readyState &&
                      'complete' !== this.readyState) ||
                      (ASCDP.adS.loadModules(['calcY', 'addCSS'], function () {
                        var e = r.adElts[i] || { id: i },
                          a = document.getElementById(i);
                        (e.posY = r.calcY(a, a.offsetTop)),
                          (e.requesting = r.requesting = ASCDP.window.sas_noad = !1),
                          (e.hasAd =
                            a &&
                            a.hasChildNodes() &&
                            (a.children.length > 1 || 'SCRIPT' !== a.children[0].tagName)),
                          adSSetup.tms &&
                            e.hasAd &&
                            (a.setAttribute('class', a.getAttribute('class') + ' addelivered'),
                            ASCDP.adS.addCSS(
                              '#' + i + ' img {display: block;margin:auto;left:0;right:0;}'
                            )),
                          adSSetup.tms &&
                            e.hasMarker &&
                            a.setAttribute('class', a.getAttribute('class') + ' hasmarker'),
                          ASCDP.adS.sendEvent('adInfo', e);
                      }),
                      (S.onload = S.onreadystatechange = null));
                  }),
                  (document.getElementById(i).innerHTML = ''),
                  document.getElementById(i).appendChild(S);
              } catch (e) {
                console.error('%cADLIB: error in SmartAd call ' + e, ASCDP.adS.logColor);
              }
        };
      sas_ajax = $___var_49e881c82a1069b7;
      sas_target = $___var_407b242649db6a0e;
      sas_queue = $___var_6786a68a61f5fa9c;
      sasmobile = $___var_70f69f93980e9d91;
      SmartAdServerAjax = $___var_fd730922f432d7df;
      SmartAdServerASMI = $___var_21b957a9b798a2b0;
      (ASCDP.adS.tmsSightloader = function () {
        ASCDP.adS.loadModules(['calcY', 'getScrollTop', 'getWinHeight'], function () {
          for (
            var e = JSON.stringify(adSSetup.tms.tea),
              a = ASCDP.adS.getScrollTop(),
              t = ASCDP.adS.getWinHeight(),
              d = 0;
            d < adSSetup.tms.pubPlacements.length;
            d++
          ) {
            var i = adSSetup.tms.pubPlacements[d],
              n = document.getElementById('sas_' + i),
              r = !!n && ASCDP.adS.calcY(n, n.offsetTop);
            r &&
              a <= r &&
              r < a + t + 150 &&
              (adSSetup.tms.pubPlacements.splice(d, 1),
              d--,
              e.indexOf(i) < 0 &&
                SmartAdServerASMI(
                  adSSetup.tms.siteId + '/(' + adSSetup.pageName + ')',
                  i,
                  '',
                  '',
                  i
                ));
          }
        });
      }),
        adSSetup.tms &&
          adSSetup.hasPageAdTms &&
          (ASCDP.adS.addEventListener(
            window,
            'adInfo',
            function (e) {
              if (adSSetup.tms.tea[e.detail.id] && !e.detail.hasAd) {
                for (
                  var a = ASCDP.adS.adElts[e.detail.id], t = 0;
                  t < adSSetup.tms.pubPlacements.length;
                  t++
                )
                  adSSetup.tms.pubPlacements[t] === adSSetup.tms.tea[e.detail.id][0] &&
                    (adSSetup.tms.pubPlacements.splice(t, 1), t--);
                a.masterSlot && (a.masterSlot.innerHTML = '');
                var d = document.createElement('div');
                (d.id = 'sas_' + adSSetup.tms.tea[e.detail.id][0]),
                  (d.style.cssText = 'position: relative; width: 100%; display: block;'),
                  d.setAttribute('class', 'ad ad--tms ad--mark'),
                  a.masterSlot.appendChild(d),
                  SmartAdServerASMI(
                    adSSetup.tms.siteId + '/(' + adSSetup.pageName + ')',
                    adSSetup.tms.tea[e.detail.id][0],
                    '',
                    '',
                    adSSetup.tms.tea[e.detail.id][0]
                  ),
                  delete adSSetup.tms.tea[e.detail.id];
              }
            },
            !1
          ),
          ASCDP.adS.addEventListener(ASCDP.window, 'scroll', ASCDP.adS.tmsSightloader, !1),
          ASCDP.adS.addEventListener(ASCDP.window, 'load', ASCDP.adS.tmsSightloader, !1),
          ASCDP.adS.tmsSightloader()),
        ASCDP.adS.loadModules(['cxsense']);
    })();
  } finally {
    if ($___old_d099345f6ecc1f41)
      ({}.constructor.defineProperty(Navigator.prototype, 'userAgent', $___old_d099345f6ecc1f41));
    if ($___old_4b4f0e2544504011)
      ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_4b4f0e2544504011));
  }
}
