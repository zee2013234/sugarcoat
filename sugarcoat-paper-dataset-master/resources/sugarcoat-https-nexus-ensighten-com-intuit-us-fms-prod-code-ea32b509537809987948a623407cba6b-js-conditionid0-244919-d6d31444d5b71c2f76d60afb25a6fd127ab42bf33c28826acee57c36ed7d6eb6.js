{
  const $___stub_fb986baf23da602c = {};
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
  })($___stub_fb986baf23da602c);
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
  const $___stub_c92db3a21e6ea955 = {};
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
  })($___stub_c92db3a21e6ea955);
  (function () {
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return window.qbse && window.qbse.analytics && qbse.analytics.ensighten
                  ? qbse.analytics.ensighten.productCode || ''
                  : '';
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'ProductCode',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7863' }
          );
        }, 7863);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return window.qbse && window.qbse.analytics && qbse.analytics.ensighten
                  ? qbse.analytics.ensighten.cost || '0'
                  : '0';
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'Cost',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7867' }
          );
        }, 7867);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                var t = '';
                if (window.qbse && window.qbse.buyNowOffer) t = 'BuyNow';
                else if (window.qbse && window.qbse.integrationFtuInfo) t = 'Freemium';
                else t = 'Trial';
                return t;
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'Subscription Type',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7881' }
          );
        }, 7881);
      },
      -1,
      -1
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.loadScriptCallback(
          '//cdn.websdk.intuit.com/js/cdc_lib_min_1.10.12_s.js',
          function () {
            const $___old_e093da1dfab166c4 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              ),
              $___old_50e2b287ad7c6678 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              ),
              $___old_bd12a9dffde72c4c = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              ),
              $___old_cfa385a1a34d0711 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'appVersion'
              ),
              $___old_d099341f5bda8c24 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'platform'
              ),
              $___old_4c1a5e37949f9c71 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              ),
              $___old_f2eb83e828b51e01 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              );
            try {
              if ($___old_e093da1dfab166c4)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___stub_fb986baf23da602c.userAgent
                ));
              if ($___old_50e2b287ad7c6678)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_053c907fde22f83d.localStorage
                ));
              if ($___old_bd12a9dffde72c4c)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_f81a89698ffc49dd.performance
                ));
              if ($___old_cfa385a1a34d0711)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'appVersion',
                  $___stub_fb986baf23da602c.appVersion
                ));
              if ($___old_d099341f5bda8c24)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'platform',
                  $___stub_fb986baf23da602c.platform
                ));
              if ($___old_4c1a5e37949f9c71)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_c92db3a21e6ea955.XMLHttpRequest
                ));
              if ($___old_f2eb83e828b51e01)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_c92db3a21e6ea955.XMLHttpRequest
                ));
              return function () {
                function normalizeURL (url) {
                  if (url) {
                    let splitUrl = url.split('?');
                    if (splitUrl.length > 1) url = splitUrl[0];
                  }
                  return url;
                }
                window.getIACEndpoint = function () {
                  var endpoint = 'trinity.platform.intuit.com/trinity/v1/intuit-clickstream';
                  return endpoint;
                };
                let date = new Date().toISOString().slice(0, 19) + 'Z';
                let url = normalizeURL(window.location.href);
                window.wsdkconfig = {
                  cec_version: '1',
                  app_name: 'SBM',
                  generate_ivid_client_side_enabled: true,
                  ivid_cookie_same_site_enabled: true,
                  providers: {
                    iac: {
                      enable: true,
                      clickstream_format_version: '1',
                      server_endpoint: 'http://#ENDPOINT#',
                      server_endpoint_secure: 'https://#ENDPOINT#',
                    },
                    siteCatalyst: { enable: false },
                  },
                  dom_events: [{ css_selector: 'a', event: 'click', standard: false }],
                  custom_events: {
                    page_entry: [
                      {
                        capture: {
                          iac: [
                            {
                              properties: {
                                'event.event_name': 'page_view',
                                'event.name': 'page_view',
                                'event.page.page_name': '#STD_PAGENAME#',
                                'event.dimensions.url': url,
                                'event.offering': 'qbo',
                                'event.category': 'marketing',
                                'event.billing_country': 'US',
                                'event.timestamp': date,
                              },
                            },
                          ],
                        },
                      },
                    ],
                    link_click: [
                      {
                        capture: {
                          iac: [
                            {
                              properties: {
                                'event.event_name': '#EVENT_NAME#',
                                'event.event_value': '#EVENT_VALUE#',
                                'event.name': 'link_click',
                                'event.offering': '#EVENT_OFFERING#',
                                'event.category': '#EVENT_CATEGORY#',
                                'event.timestamp': '#EVENT_TIMESTAMP#',
                                'event.billing_country': '#EVENT_BILLING_COUNTRY#',
                                'event.dimensions': '#EVENT_DIMENSIONS#',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                  parameters: { ENDPOINT: { values: [{ js_func: 'getIACEndpoint' }] } },
                };
                window.tracker = new intuit.web.analytics();
                window.tracker.init(window.wsdkconfig);
                window.tracker.triggerEvent('page_entry');
                window.webAnalyticsLoadedForWeb = true;
                $('a').click(function () {
                  var eventName = 'link_click';
                  let href = normalizeURL($(this).attr('href'));
                  let websdkObj = [
                    { key: 'EVENT_NAME', value: eventName },
                    { key: 'EVENT_EVENT_NAME', value: eventName },
                    { key: 'EVENT_OFFERING', value: 'qbo' },
                    { key: 'EVENT_CATEGORY', value: 'marketing' },
                    { key: 'EVENT_TIMESTAMP', value: new Date().toISOString().slice(0, 19) + 'Z' },
                    { key: 'EVENT_DIMENSIONS', value: { url: url, href: href } },
                    { key: 'EVENT_BILLING_COUNTRY', value: 'US' },
                    { key: 'EVENT_VALUE', value: href },
                  ];
                  console.log('Logging to websdk ', eventName, websdkObj);
                  window.tracker.triggerEvent('link_click', websdkObj);
                });
              }.apply(this, arguments);
            } finally {
              if ($___old_e093da1dfab166c4)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___old_e093da1dfab166c4
                ));
              if ($___old_50e2b287ad7c6678)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_50e2b287ad7c6678));
              if ($___old_bd12a9dffde72c4c)
                ({}.constructor.defineProperty(window, 'performance', $___old_bd12a9dffde72c4c));
              if ($___old_cfa385a1a34d0711)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'appVersion',
                  $___old_cfa385a1a34d0711
                ));
              if ($___old_d099341f5bda8c24)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'platform',
                  $___old_d099341f5bda8c24
                ));
              if ($___old_4c1a5e37949f9c71)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_4c1a5e37949f9c71
                ));
              if ($___old_f2eb83e828b51e01)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_f2eb83e828b51e01
                ));
            }
          }
        );
      },
      3263091,
      340377
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                var cat = '',
                  subType =
                    window.qbse && window.qbse.analytics && qbse.analytics.ensighten
                      ? qbse.analytics.ensighten.subscriptionType || ''
                      : '';
                if (/trial/i.test(subType)) cat = 'qbsetria';
                else if (/buy/i.test(subType)) cat = 'qbsebuyn';
                return cat;
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'Floodlight_Cat_trialBuyno',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7912' }
          );
        }, 7912);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                var uid = '999999';
                if (
                  window.qbse &&
                  window.qbse.analytics &&
                  window.qbse.analytics.ensighten &&
                  qbse.analytics.ensighten.userId
                )
                  uid = qbse.analytics.ensighten.userId;
                return uid;
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'UserId with fallback',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '11716' }
          );
        }, 11716);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return window.qbse && window.qbse.analytics && qbse.analytics.ensighten
                  ? qbse.analytics.ensighten.countryCode || ''
                  : '';
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'CountryCode',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7861' }
          );
        }, 7861);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return window.qbse && window.qbse.analytics && qbse.analytics.ensighten
                  ? qbse.analytics.ensighten.pageLoadStart || ''
                  : '';
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'PageLoadStart',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7864' }
          );
        }, 7864);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return window.qbse && window.qbse.analytics && qbse.analytics.ensighten
                  ? qbse.analytics.ensighten.productName || ''
                  : '';
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'ProductName',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7866' }
          );
        }, 7866);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return window.qbse && window.qbse.analytics && qbse.analytics.ensighten
                  ? qbse.analytics.ensighten.quantity || ''
                  : '';
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'Quantity',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7868' }
          );
        }, 7868);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return window.qbse && window.qbse.analytics && qbse.analytics.ensighten
                  ? qbse.analytics.ensighten.pageName || ''
                  : '';
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'PageName',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7862' }
          );
        }, 7862);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return window.qbse && window.qbse.analytics && qbse.analytics.ensighten
                  ? qbse.analytics.ensighten.userId || ''
                  : '';
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'UserId',
              collection: 'QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7865' }
          );
        }, 7865);
      },
      -1,
      -1
    );
  })();
}
