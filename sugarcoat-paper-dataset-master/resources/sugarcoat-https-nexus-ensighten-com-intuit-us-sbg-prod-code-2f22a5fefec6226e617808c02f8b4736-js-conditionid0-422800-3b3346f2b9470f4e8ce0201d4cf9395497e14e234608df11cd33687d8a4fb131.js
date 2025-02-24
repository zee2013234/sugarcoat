{
  const $___stub_a1115fdf2e39e319 = {};
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
  })($___stub_a1115fdf2e39e319);
  const $___stub_f41e7bff56ded01f = {};
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
  })($___stub_f41e7bff56ded01f);
  const $___stub_8784486a79b95885 = {};
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
  })($___stub_8784486a79b95885);
  const $___stub_4011c24c598eb934 = {};
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
  })($___stub_4011c24c598eb934);
  (function () {
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['ICom - Button Click to QB'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var data = {};
          if ('') data['value'] = '';
          if ('') data['currency'] = '';
          if ('') data['content_name'] = '';
          if ('') data['content_category'] = '';
          if ('') data['content_ids'] = '' ? ''.split(',') : '';
          if ('') data['content_type'] = '';
          if ('') data['num_items'] = '';
          if ('') data['search_string'] = '';
          if ('') data['status'] = '';
          var eventTrackingPixelId = '1827482914219447';
          var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_quickbooks' : 'CustomEvent';
          var trackString =
            'CustomEvent' === 'CustomEvent'
              ? eventTrackingPixelId
                ? 'trackSingleCustom'
                : 'trackCustom'
              : eventTrackingPixelId
              ? 'trackSingle'
              : 'track';
          var makeRequest = function () {
            if (eventTrackingPixelId) fbq(trackString, eventTrackingPixelId, eventType, data);
            else fbq(trackString, eventType, data);
          };
          if (true)
            var interval = setInterval(function () {
              if (window.fbq) {
                makeRequest();
                clearInterval(interval);
              }
            }, 100);
          else makeRequest();
        });
      },
      2762253,
      [3309959],
      585674,
      [520782]
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        try {
          var nonDataLinks = document.body.querySelectorAll('[href]:not([data-wa-link])');
          for (var i = 0; i < nonDataLinks.length; i++)
            nonDataLinks[i].setAttribute('data-wa-link', 'custom linkTrack');
        } catch (Err) {}
      },
      2852260,
      597525
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.on(
          'click',
          'li.accountantssignin a',
          function () {
            Bootstrapper.ensEvent.trigger('US - SBG - QBOA - Accountant Sign In Click', this);
          },
          true
        );
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['ICom - Button Click to ProConnect'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var data = {};
          if ('') data['value'] = '';
          if ('') data['currency'] = '';
          if ('') data['content_name'] = '';
          if ('') data['content_category'] = '';
          if ('') data['content_ids'] = '' ? ''.split(',') : '';
          if ('') data['content_type'] = '';
          if ('') data['num_items'] = '';
          if ('') data['search_string'] = '';
          if ('') data['status'] = '';
          var eventTrackingPixelId = '1827482914219447';
          var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_proconnect' : 'CustomEvent';
          var trackString =
            'CustomEvent' === 'CustomEvent'
              ? eventTrackingPixelId
                ? 'trackSingleCustom'
                : 'trackCustom'
              : eventTrackingPixelId
              ? 'trackSingle'
              : 'track';
          var makeRequest = function () {
            if (eventTrackingPixelId) fbq(trackString, eventTrackingPixelId, eventType, data);
            else fbq(trackString, eventType, data);
          };
          if (true)
            var interval = setInterval(function () {
              if (window.fbq) {
                makeRequest();
                clearInterval(interval);
              }
            }, 100);
          else makeRequest();
        });
      },
      2762243,
      [3309959],
      585677,
      [520782]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.bindDOMParsed(function () {
          var elements = Bootstrapper.qwery('.IntuitBrandClicktoQB');
          for (var i = 0; i < elements.length; i++)
            Bootstrapper.unobtrusiveAddEvent(elements[i], 'onclick', function () {
              Bootstrapper.ensEvent.trigger('ICom - Button Click to QB');
            });
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['ICom - Button Click to TT'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var countingMethod = 'standard';
          var dl = 'dataLayer';
          var floodLightId = 'DC-8344993';
          var send_to = [];
          if (floodLightId) {
            var receiver = floodLightId + '/' + 'int_00' + '/' + 'intui000' + '+' + countingMethod;
            send_to.push(receiver);
          } else {
            var ids = [];
            for (var i in ids) {
              var receiver = ids[i] + '/' + 'int_00' + '/' + 'intui000' + '+' + countingMethod;
              send_to.push(receiver);
            }
          }
          var allow_custom_scripts = 'true' == 'true' ? true : false;
          var eventObj = { allow_custom_scripts: allow_custom_scripts, send_to: send_to };
          if (countingMethod === 'per_session') if ('') eventObj.session_id = '';
          if (countingMethod === 'transactions') {
            if ('') eventObj.value = '';
            if ('') eventObj.transaction_id = '';
            if ('') eventObj.quantity = '';
          }
          window[dl] = window[dl] || [];
          window.gtag =
            window.gtag ||
            function gtag () {
              window[dl].push(arguments);
            };
          gtag('event', 'conversion', eventObj);
        });
      },
      2762228,
      [2762202],
      585583,
      [585580]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.bindDOMParsed(function () {
          var elements = Bootstrapper.qwery('.IntuitBrandClicktoTT');
          for (var i = 0; i < elements.length; i++)
            Bootstrapper.unobtrusiveAddEvent(elements[i], 'onclick', function () {
              Bootstrapper.ensEvent.trigger('ICom - Button Click to TT');
            });
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['ICom - Button Click to Mint'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var countingMethod = 'standard';
          var dl = 'dataLayer';
          var floodLightId = 'DC-8344993';
          var send_to = [];
          if (floodLightId) {
            var receiver = floodLightId + '/' + 'int_00' + '/' + 'intui002' + '+' + countingMethod;
            send_to.push(receiver);
          } else {
            var ids = [];
            for (var i in ids) {
              var receiver = ids[i] + '/' + 'int_00' + '/' + 'intui002' + '+' + countingMethod;
              send_to.push(receiver);
            }
          }
          var allow_custom_scripts = 'true' == 'true' ? true : false;
          var eventObj = { allow_custom_scripts: allow_custom_scripts, send_to: send_to };
          if (countingMethod === 'per_session') if ('') eventObj.session_id = '';
          if (countingMethod === 'transactions') {
            if ('') eventObj.value = '';
            if ('') eventObj.transaction_id = '';
            if ('') eventObj.quantity = '';
          }
          window[dl] = window[dl] || [];
          window.gtag =
            window.gtag ||
            function gtag () {
              window[dl].push(arguments);
            };
          gtag('event', 'conversion', eventObj);
        });
      },
      2762260,
      [2762202],
      585585,
      [585580]
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['ICom - Button Click to TT'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var data = {};
          if ('') data['value'] = '';
          if ('') data['currency'] = '';
          if ('') data['content_name'] = '';
          if ('') data['content_category'] = '';
          if ('') data['content_ids'] = '' ? ''.split(',') : '';
          if ('') data['content_type'] = '';
          if ('') data['num_items'] = '';
          if ('') data['search_string'] = '';
          if ('') data['status'] = '';
          var eventTrackingPixelId = '1827482914219447';
          var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_turbotax' : 'CustomEvent';
          var trackString =
            'CustomEvent' === 'CustomEvent'
              ? eventTrackingPixelId
                ? 'trackSingleCustom'
                : 'trackCustom'
              : eventTrackingPixelId
              ? 'trackSingle'
              : 'track';
          var makeRequest = function () {
            if (eventTrackingPixelId) fbq(trackString, eventTrackingPixelId, eventType, data);
            else fbq(trackString, eventType, data);
          };
          if (true)
            var interval = setInterval(function () {
              if (window.fbq) {
                makeRequest();
                clearInterval(interval);
              }
            }, 100);
          else makeRequest();
        });
      },
      2762238,
      [3309959],
      585664,
      [520782]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                var returnVal = 'false';
                try {
                  var publishPath = Bootstrapper.ensightenOptions.publishPath,
                    truePaths = ['us_fms_', 'us_qbes_', 'us_ems_', 'tealium_poc'];
                  for (var i = 0, max = truePaths.length; i < max; i++) {
                    var patt = new RegExp('^' + truePaths[i], 'i');
                    returnVal = patt.test(publishPath) ? 'true' : 'false';
                    if (returnVal === 'true') break;
                  }
                  return returnVal;
                } catch (err) {
                  return returnVal;
                }
              },
              transform: function (val) {
                return val ? val : '';
              },
              load: 'page',
              trigger: Bootstrapper.data.immediateTrigger,
              dataDefName: 'AAM ECID isAllowed',
              collection: 'AAM',
              source: 'Manage',
              priv: 'false',
            },
            { id: '55364' }
          );
        }, 55364);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
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
          function i (e, t, n) {
            var i = null == e ? void 0 : e[t];
            return void 0 === i ? n : i;
          }
          function r (e) {
            for (var t = /^\d+$/, n = 0, i = e.length; n < i; n++) if (!t.test(e[n])) return !1;
            return !0;
          }
          function a (e, t) {
            for (; e.length < t.length; ) e.push('0');
            for (; t.length < e.length; ) t.push('0');
          }
          function o (e, t) {
            for (var n = 0; n < e.length; n++) {
              var i = parseInt(e[n], 10),
                r = parseInt(t[n], 10);
              if (i > r) return 1;
              if (r > i) return -1;
            }
            return 0;
          }
          function s (e, t) {
            if (e === t) return 0;
            var n = e.toString().split('.'),
              i = t.toString().split('.');
            return r(n.concat(i)) ? (a(n, i), o(n, i)) : NaN;
          }
          function l (e) {
            return e === Object(e) && 0 === Object.keys(e).length;
          }
          function c (e) {
            return 'function' == typeof e || (e instanceof Array && e.length);
          }
          function u () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function () {
                      return !0;
                    };
            (this.log = _e('log', e, t)),
              (this.warn = _e('warn', e, t)),
              (this.error = _e('error', e, t));
          }
          function d () {
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
              : { get: Le, set: Le, remove: Le };
          }
          function f (e) {
            (this.name = this.constructor.name),
              (this.message = e),
              'function' == typeof Error.captureStackTrace
                ? Error.captureStackTrace(this, this.constructor)
                : (this.stack = new Error(e).stack);
          }
          function p () {
            function e (e, t) {
              var n = Se(e);
              return n.length
                ? n.every(function (e) {
                    return !!t[e];
                  })
                : De(t);
            }
            function t () {
              M(b),
                O(ce.COMPLETE),
                _(h.status, h.permissions),
                m.set(h.permissions, { optInCookieDomain: l, optInStorageExpiry: c }),
                C.execute(xe);
            }
            function n (e) {
              return function (n, i) {
                if (!Ae(n))
                  throw new Error(
                    '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                  );
                return O(ce.CHANGED), Object.assign(b, ye(Se(n), e)), i || t(), h;
              };
            }
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              r = i.doesOptInApply,
              a = i.previousPermissions,
              o = i.preOptInApprovals,
              s = i.isOptInStorageEnabled,
              l = i.optInCookieDomain,
              c = i.optInStorageExpiry,
              u = i.isIabContext,
              f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              p = f.cookies,
              g = Pe(a);
            Re(g, 'Invalid `previousPermissions`!'), Re(o, 'Invalid `preOptInApprovals`!');
            var m = d({ isEnabled: !!s, cookieName: 'adobeujs-optin' }, { cookies: p }),
              h = this,
              _ = le(h),
              C = ge(),
              I = Me(g),
              v = Me(o),
              S = m.get(),
              D = {},
              A = (function (e, t) {
                return ke(e) || (t && ke(t)) ? ce.COMPLETE : ce.PENDING;
              })(I, S),
              y = (function (e, t, n) {
                var i = ye(pe, !r);
                return r ? Object.assign({}, i, e, t, n) : i;
              })(v, I, S),
              b = be(y),
              O = function (e) {
                return (A = e);
              },
              M = function (e) {
                return (y = e);
              };
            (h.deny = n(!1)),
              (h.approve = n(!0)),
              (h.denyAll = h.deny.bind(h, pe)),
              (h.approveAll = h.approve.bind(h, pe)),
              (h.isApproved = function (t) {
                return e(t, h.permissions);
              }),
              (h.isPreApproved = function (t) {
                return e(t, v);
              }),
              (h.fetchPermissions = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = t ? h.on(ce.COMPLETE, e) : Le;
                return (
                  !r || (r && h.isComplete) || !!o
                    ? e(h.permissions)
                    : t ||
                      C.add(xe, function () {
                        return e(h.permissions);
                      }),
                  n
                );
              }),
              (h.complete = function () {
                h.status === ce.CHANGED && t();
              }),
              (h.registerPlugin = function (e) {
                if (!e || !e.name || 'function' != typeof e.onRegister) throw new Error(je);
                D[e.name] || ((D[e.name] = e), e.onRegister.call(e, h));
              }),
              (h.execute = Ne(D)),
              Object.defineProperties(h, {
                permissions: {
                  get: function () {
                    return y;
                  },
                },
                status: {
                  get: function () {
                    return A;
                  },
                },
                Categories: {
                  get: function () {
                    return ue;
                  },
                },
                doesOptInApply: {
                  get: function () {
                    return !!r;
                  },
                },
                isPending: {
                  get: function () {
                    return h.status === ce.PENDING;
                  },
                },
                isComplete: {
                  get: function () {
                    return h.status === ce.COMPLETE;
                  },
                },
                __plugins: {
                  get: function () {
                    return Object.keys(D);
                  },
                },
                isIabContext: {
                  get: function () {
                    return u;
                  },
                },
              });
          }
          function g (e, t) {
            function n () {
              (r = null), e.call(e, new f('The call took longer than you wanted!'));
            }
            function i () {
              r && (clearTimeout(r), e.apply(e, arguments));
            }
            if (void 0 === t) return e;
            var r = setTimeout(n, t);
            return i;
          }
          function m () {
            if (window.__cmp) return window.__cmp;
            var e = window;
            if (e === window.top) return void Ie.error('__cmp not found');
            for (var t; !t; ) {
              e = e.parent;
              try {
                e.frames.__cmpLocator && (t = e);
              } catch (e) {}
              if (e === window.top) break;
            }
            if (!t) return void Ie.error('__cmp not found');
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
                    n[i.callId] && (n[i.callId](i.returnValue, i.success), delete n[i.callId]);
                  }
                },
                !1
              ),
              window.__cmp
            );
          }
          function h () {
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
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.vendorConsents,
                    a = n.purposeConsents;
                  t(e, s(i, r, a));
                }, a);
                r({ category: i, callback: o });
              }),
              (e.onRegister = function (t) {
                var n = Object.keys(de),
                  i = function (e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
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
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = e.purposeConsents,
                    o = e.gdprApplies,
                    l = e.vendorConsents;
                  (arguments.length > 1 ? arguments[1] : void 0) &&
                    ((s = { purposeConsents: r, gdprApplies: o, vendorConsents: l }),
                    i('allConsentData', s)),
                    a(function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                      (arguments.length > 1 ? arguments[1] : void 0) &&
                        ((s.consentString = e.consentData), i('allConsentData', s)),
                        t.execute('FETCH_CONSENT_DATA', [null, n.allConsentData]);
                    });
                });
              },
              a = function (e) {
                var t = m();
                t && t('getConsentData', null, e);
              },
              o = function (e) {
                var t = Fe(de),
                  n = m();
                n && n('getVendorConsents', t, e);
              },
              s = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  i = !!t[de[e]];
                return (
                  i &&
                  (function () {
                    return fe[e].every(function (e) {
                      return n[e];
                    });
                  })()
                );
              };
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
            S = {
              MCMID: 'MCMID',
              MCAID: 'MCAID',
              MCAAMB: 'MCAAMB',
              MCAAMLH: 'MCAAMLH',
              MCOPTOUT: 'MCOPTOUT',
              CUSTOMERIDS: 'CUSTOMERIDS',
            },
            D = {
              MCMID: 'getMarketingCloudVisitorID',
              MCAID: 'getAnalyticsVisitorID',
              MCAAMB: 'getAudienceManagerBlob',
              MCAAMLH: 'getAudienceManagerLocationHint',
              MCOPTOUT: 'isOptedOut',
              ALLFIELDS: 'getVisitorValues',
            },
            A = { CUSTOMERIDS: 'getCustomerIDs' },
            y = {
              MCMID: 'getMarketingCloudVisitorID',
              MCAAMB: 'getAudienceManagerBlob',
              MCAAMLH: 'getAudienceManagerLocationHint',
              MCOPTOUT: 'isOptedOut',
              MCAID: 'getAnalyticsVisitorID',
              CUSTOMERIDS: 'getCustomerIDs',
              ALLFIELDS: 'getVisitorValues',
            },
            b = { MC: 'MCMID', A: 'MCAID', AAM: 'MCAAMB' },
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
              STATE_KEYS_MAP: S,
              ASYNC_API_MAP: D,
              SYNC_API_MAP: A,
              ALL_APIS: y,
              FIELDGROUP_TO_FIELD: b,
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
              (this.getMarketingCloudVisitorID = function (e) {
                e = e || t;
                var i = this.findField(T.MCMID, e),
                  r = n.call(this, T.MCMID, e);
                return void 0 !== i ? i : r();
              }),
                (this.getVisitorValues = function (e) {
                  this.getMarketingCloudVisitorID(function (t) {
                    e({ MCMID: t });
                  });
                });
            },
            P = E.MESSAGES,
            R = E.ASYNC_API_MAP,
            w = E.SYNC_API_MAP,
            F = function () {
              function e () {}
              function t (e, t) {
                var n = this;
                return function () {
                  return n.callbackRegistry.add(e, t), n.messageParent(P.GETSTATE), '';
                };
              }
              function n (n) {
                this[R[n]] = function (i) {
                  i = i || e;
                  var r = this.findField(n, i),
                    a = t.call(this, n, i);
                  return void 0 !== r ? r : a();
                };
              }
              function i (t) {
                this[w[t]] = function () {
                  return this.findField(t, e) || {};
                };
              }
              Object.keys(R).forEach(n, this), Object.keys(w).forEach(i, this);
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
                    (window.adobe = n.isObject(window.adobe) ? window.adobe : {}), window.adobe
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
            H = E.MESSAGES,
            U = { 0: 'prefix', 1: 'orgID', 2: 'state' },
            B = function (e, t) {
              (this.parse = function (e) {
                try {
                  var t = {};
                  return (
                    e.data.split('|').forEach(function (e, n) {
                      if (void 0 !== e) t[U[n]] = 2 !== n ? e : JSON.parse(e);
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
                    o = -1 === Object.keys(H).indexOf(i.prefix);
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
            Y = function (e, t, n, i) {
              function r (e) {
                Object.assign(p, e);
              }
              function a (e) {
                Object.assign(p.state, e),
                  Object.assign(p.state.ALLFIELDS, e),
                  p.callbackRegistry.executeAll(p.state);
              }
              function o (e) {
                if (!h.isInvalid(e)) {
                  m = !1;
                  var t = h.parse(e);
                  p.setStateAndPublish(t.state);
                }
              }
              function s (e) {
                !m && g && ((m = !0), h.send(i, e));
              }
              function l () {
                r(new L(n._generateID)),
                  p.getMarketingCloudVisitorID(),
                  p.callbackRegistry.executeAll(p.state, !0),
                  _.removeEventListener('message', c);
              }
              function c (e) {
                if (!h.isInvalid(e)) {
                  var t = h.parse(e);
                  (m = !1),
                    _.clearTimeout(p._handshakeTimeout),
                    _.removeEventListener('message', c),
                    r(new F(p)),
                    _.addEventListener('message', o),
                    p.setStateAndPublish(t.state),
                    p.callbackRegistry.hasCallbacks() && s(G.GETSTATE);
                }
              }
              function u () {
                g && postMessage
                  ? (_.addEventListener('message', c),
                    s(G.HANDSHAKE),
                    (p._handshakeTimeout = setTimeout(l, 250)))
                  : l();
              }
              function d () {
                _.s_c_in || ((_.s_c_il = []), (_.s_c_in = 0)),
                  (p._c = 'Visitor'),
                  (p._il = _.s_c_il),
                  (p._in = _.s_c_in),
                  (p._il[p._in] = p),
                  _.s_c_in++;
              }
              function f () {
                function e (e) {
                  0 !== e.indexOf('_') && 'function' == typeof n[e] && (p[e] = function () {});
                }
                Object.keys(n).forEach(e),
                  (p.getSupplementalDataID = n.getSupplementalDataID),
                  (p.isAllowed = function () {
                    return !0;
                  });
              }
              var p = this,
                g = t.whitelistParentDomain;
              (p.state = { ALLFIELDS: {} }),
                (p.version = n.version),
                (p.marketingCloudOrgID = e),
                (p.cookieDomain = n.cookieDomain || ''),
                (p._instanceType = 'child');
              var m = !1,
                h = new B(e, g);
              (p.callbackRegistry = V()),
                (p.init = function () {
                  d(), f(), r(new x(p)), u();
                }),
                (p.findField = function (e, t) {
                  if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e];
                }),
                (p.messageParent = s),
                (p.setStateAndPublish = a);
            },
            q = E.MESSAGES,
            X = E.ALL_APIS,
            W = E.ASYNC_API_MAP,
            J = E.FIELDGROUP_TO_FIELD,
            K = function (e, t) {
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
                        var i = J[n];
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
                    var o = W[a[0]];
                    e[o](n, !0);
                  } else t();
                };
              }
              function a (e, i) {
                var r = n();
                t.send(e, i, r);
              }
              function o (e) {
                l(e), a(e, q.HANDSHAKE);
              }
              function s (e) {
                r(function () {
                  a(e, q.PARENTSTATE);
                })();
              }
              function l (n) {
                function i (i) {
                  r.call(e, i), t.send(n, q.PARENTSTATE, { CUSTOMERIDS: e.getCustomerIDs() });
                }
                var r = e.setCustomerIDs;
                e.setCustomerIDs = i;
              }
              return function (e) {
                if (!t.isInvalid(e)) (t.parse(e).prefix === q.HANDSHAKE ? o : s)(e.source);
              };
            },
            z = function (e, t) {
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
            Q = {
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
                var r = i(n, 'cookieLifetime'),
                  a = i(n, 'expires'),
                  o = i(n, 'domain'),
                  s = i(n, 'secure'),
                  l = s ? 'Secure' : '';
                if (a && 'SESSION' !== r && 'NONE' !== r) {
                  var c = '' !== t ? parseInt(r || 0, 10) : -60;
                  if (c) (a = new Date()), a.setTime(a.getTime() + 1000 * c);
                  else if (1 === a) {
                    a = new Date();
                    var u = a.getYear();
                    a.setYear(u + 2 + (u < 1900 ? 1900 : 0));
                  }
                } else a = 0;
                return e && 'NONE' !== r
                  ? ((document.cookie =
                      encodeURIComponent(e) +
                      '=' +
                      encodeURIComponent(t) +
                      '; path=/;' +
                      (a ? ' expires=' + a.toGMTString() + ';' : '') +
                      (o ? ' domain=' + o + ';' : '') +
                      l),
                    this.get(e) === t)
                  : 0;
              },
              remove: function (e, t) {
                var n = i(t, 'domain');
                (n = n ? ' domain=' + n + ';' : ''),
                  (document.cookie =
                    encodeURIComponent(e) +
                    '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                    n);
              },
            },
            $ = function (e) {
              var t;
              !e && _.location && (e = _.location.hostname), (t = e);
              var n,
                i = t.split('.');
              for (n = i.length - 2; n >= 0; n--)
                if (((t = i.slice(n).join('.')), Q.set('test', 'cookie', { domain: t })))
                  return Q.remove('test', { domain: t }), t;
              return '';
            },
            Z = {
              compare: s,
              isLessThan: function (e, t) {
                return s(e, t) < 0;
              },
              areVersionsDifferent: function (e, t) {
                return 0 !== s(e, t);
              },
              isGreaterThan: function (e, t) {
                return s(e, t) > 0;
              },
              isEqual: function (e, t) {
                return 0 === s(e, t);
              },
            },
            ee = !!_.postMessage,
            te = {
              postMessage: function (e, t, n) {
                var i = 1;
                t &&
                  (ee
                    ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                    : t &&
                      (n.location = t.replace(/#.*$/, '') + '#' + +new Date() + i++ + '&' + e));
              },
              receiveMessage: function (e, t) {
                var n;
                try {
                  ee &&
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
            ne = function (e) {
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
            ie = function (e, t) {
              return {
                corsMetadata: (function () {
                  const $___old_80dc8d5d1d6ed22c = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    ),
                    $___old_363cec72aa9aa8c9 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    );
                  try {
                    if ($___old_80dc8d5d1d6ed22c)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_a1115fdf2e39e319.XMLHttpRequest
                      ));
                    if ($___old_363cec72aa9aa8c9)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_a1115fdf2e39e319.XMLHttpRequest
                      ));
                    return function () {
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
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_80dc8d5d1d6ed22c)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_80dc8d5d1d6ed22c
                      ));
                    if ($___old_363cec72aa9aa8c9)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_363cec72aa9aa8c9
                      ));
                  }
                })(),
                getCORSInstance: function () {
                  const $___old_3071550c93ab09ea = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    ),
                    $___old_a9aa4a479eae2872 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    );
                  try {
                    if ($___old_3071550c93ab09ea)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_a1115fdf2e39e319.XMLHttpRequest
                      ));
                    if ($___old_a9aa4a479eae2872)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_a1115fdf2e39e319.XMLHttpRequest
                      ));
                    return function () {
                      return 'none' === this.corsMetadata.corsType
                        ? null
                        : new _[this.corsMetadata.corsType]();
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_3071550c93ab09ea)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_3071550c93ab09ea
                      ));
                    if ($___old_a9aa4a479eae2872)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_a9aa4a479eae2872
                      ));
                  }
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
                        o.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                        (o.onreadystatechange = function () {
                          4 === this.readyState && 200 === this.status && r(this.responseText);
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
            re = {
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
            ae = function (e, t) {
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
                    '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(n.location.href);
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
                messageSendingInterval: re.POST_MESSAGE_ENABLED ? null : 100,
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
                    r.jsonForComparison.push(t), r.jsonWaiting.push(t), r.processSyncOnPage(t);
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
                        if (((s = this.jsonForComparison[a]), i === JSON.stringify(s.ibs || []))) {
                          l = !0;
                          break;
                        }
                      l ? this.jsonDuplicates.push(t) : n();
                    } else n();
                  if (
                    (this.receivedThirdPartyCookiesNotification ||
                      !re.POST_MESSAGE_ENABLED ||
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
                        r.messageSendingInterval = re.POST_MESSAGE_ENABLED ? null : 150;
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
                      : (i = r) && (e._setFieldExpire('MCAAMLH', n), e._setField('MCAAMLH', i)),
                    i || (i = ''),
                    i
                  );
                },
                processSyncOnPage: function (e) {
                  var t, n, i, r;
                  if ((t = e.ibs) && t instanceof Array && (n = t.length))
                    for (i = 0; i < n; i++)
                      (r = t[i]), r.syncOnPage && this.checkFirstPartyCookie(r, '', 'syncOnPage');
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
                    d = Math.ceil(new Date().getTime() / re.MILLIS_PER_DAY);
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
                        p = e.loadSSL ? 'https:' : 'http:';
                      for (l = 0, c = f.length; l < c; l++) {
                        (u = f[l]), (d = /^\/\//.test(u));
                        var g = new Image();
                        g.addEventListener(
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
                          (g.src = (d ? p : '') + u),
                          this.onPagePixels.push(g);
                      }
                    }
                  } else this.addMessage(i), this.setSyncTrackingData(r, n, a, o);
                },
                addMessage: function (t) {
                  var n = encodeURIComponent,
                    i = n(e._enableErrorReporting ? '---destpub-debug---' : '---destpub---');
                  this.messages.push((re.POST_MESSAGE_ENABLED ? '' : i) + t);
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
                      ? re.POST_MESSAGE_ENABLED
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
                  te.postMessage(e, this.url, this.iframe.contentWindow),
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
                    'function' == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(i);
                },
                canMakeSyncIDCall: function (t, n) {
                  return e._forceSyncIDCall || !t || n - t > re.DAYS_BETWEEN_SYNC_ID_CALLS;
                },
                attachIframeASAP: function () {
                  function e () {
                    t.startedAttachingIframe || (n.body ? t.attachIframe() : setTimeout(e, 30));
                  }
                  var t = this;
                  e();
                },
              };
            },
            oe = {
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
            se = {
              getConfigNames: function () {
                return Object.keys(oe);
              },
              getConfigs: function () {
                return oe;
              },
              normalizeConfig: function (e) {
                return 'function' != typeof e ? e : e();
              },
            },
            le = function (e) {
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
                (e.off = function (e, n) {
                  t.hasOwnProperty(e) &&
                    (t[e] = t[e].filter(function (e) {
                      if (e.callback !== n) return e;
                    }));
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
            ce = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
            ue = {
              AAM: 'aam',
              ADCLOUD: 'adcloud',
              ANALYTICS: 'aa',
              CAMPAIGN: 'campaign',
              ECID: 'ecid',
              LIVEFYRE: 'livefyre',
              TARGET: 'target',
              VIDEO_ANALYTICS: 'videoaa',
            },
            de = ((C = {}), t(C, ue.AAM, 565), t(C, ue.ECID, 565), C),
            fe = ((I = {}), t(I, ue.AAM, [1, 2, 5]), t(I, ue.ECID, [1, 2, 5]), I),
            pe = (function (e) {
              return Object.keys(e).map(function (t) {
                return e[t];
              });
            })(ue),
            ge = function () {
              var e = {};
              return (
                (e.callbacks = Object.create(null)),
                (e.add = function (t, n) {
                  if (!c(n))
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
                  (n || (t && !l(t))) &&
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
            me = function () {},
            he = function (e) {
              var t = window,
                n = t.console;
              return !!n && 'function' == typeof n[e];
            },
            _e = function (e, t, n) {
              return n()
                ? function () {
                    if (he(e)) {
                      for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                        i[r] = arguments[r];
                      console[e].apply(console, [t].concat(i));
                    }
                  }
                : me;
            },
            Ce = u,
            Ie = new Ce('[ADOBE OPT-IN]'),
            ve = function (t, n) {
              return e(t) === n;
            },
            Se = function (e, t) {
              return e instanceof Array ? e : ve(e, 'string') ? [e] : t || [];
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
            Ae = function (e) {
              return (
                !(!e || Oe(e)) &&
                Se(e).every(function (e) {
                  return pe.indexOf(e) > -1;
                })
              );
            },
            ye = function (e, t) {
              return e.reduce(function (e, n) {
                return (e[n] = t), e;
              }, {});
            },
            be = function (e) {
              return JSON.parse(JSON.stringify(e));
            },
            Oe = function (e) {
              return '[object Array]' === Object.prototype.toString.call(e) && !e.length;
            },
            Me = function (e) {
              if (Te(e)) return e;
              try {
                return JSON.parse(e);
              } catch (e) {
                return {};
              }
            },
            ke = function (e) {
              return void 0 === e || (Te(e) ? Ae(Object.keys(e)) : Ee(e));
            },
            Ee = function (e) {
              try {
                var t = JSON.parse(e);
                return !!e && ve(e, 'string') && Ae(Object.keys(t));
              } catch (e) {
                return !1;
              }
            },
            Te = function (e) {
              return null !== e && ve(e, 'object') && !1 === Array.isArray(e);
            },
            Le = function () {},
            Pe = function (e) {
              return ve(e, 'function') ? e() : e;
            },
            Re = function (e, t) {
              ke(e) || Ie.error(''.concat(t));
            },
            we = function (e) {
              return Object.keys(e).map(function (t) {
                return e[t];
              });
            },
            Fe = function (e) {
              return we(e).filter(function (e, t, n) {
                return n.indexOf(e) === t;
              });
            },
            Ne = function (e) {
              return function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = t.command,
                  i = t.params,
                  r = void 0 === i ? {} : i,
                  a = t.callback,
                  o = void 0 === a ? Le : a;
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
                  Ie.error('[execute] Something went wrong: ' + e.message);
                }
              };
            };
          (f.prototype = Object.create(Error.prototype)), (f.prototype.constructor = f);
          var xe = 'fetchPermissions',
            je = '[OptIn#registerPlugin] Plugin is invalid.';
          (p.Categories = ue), (p.TimeoutError = f);
          var Ve = Object.freeze({ OptIn: p, IabPlugin: h }),
            He = function (e, t) {
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
                    error: 'The destination publishing iframe is disabled in the Visitor library.',
                  });
                if ('string' == typeof n) {
                  if (!n.length) return void r({ error: 'subdomain is not a populated string.' });
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
                    return void r({ error: 'config.urlDestinations is not a populated array.' });
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
                      message: 'The destination publishing iframe is already attached and loaded.',
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
            Ue = function e (t) {
              function n (e, t) {
                return (e >>> t) | (e << (32 - t));
              }
              for (
                var i,
                  r,
                  a = Math.pow,
                  o = a(2, 32),
                  s = '',
                  l = [],
                  c = 8 * t.length,
                  u = (e.h = e.h || []),
                  d = (e.k = e.k || []),
                  f = d.length,
                  p = {},
                  g = 2;
                f < 64;
                g++
              )
                if (!p[g]) {
                  for (i = 0; i < 313; i += g) p[i] = g;
                  (u[f] = (a(g, 0.5) * o) | 0), (d[f++] = (a(g, 1 / 3) * o) | 0);
                }
              for (t += '\x80'; (t.length % 64) - 56; ) t += '\0';
              for (i = 0; i < t.length; i++) {
                if ((r = t.charCodeAt(i)) >> 8) return;
                l[i >> 2] |= r << (((3 - i) % 4) * 8);
              }
              for (l[l.length] = (c / o) | 0, l[l.length] = c, r = 0; r < l.length; ) {
                var m = l.slice(r, (r += 16)),
                  h = u;
                for (u = u.slice(0, 8), i = 0; i < 64; i++) {
                  var _ = m[i - 15],
                    C = m[i - 2],
                    I = u[0],
                    v = u[4],
                    S =
                      u[7] +
                      (n(v, 6) ^ n(v, 11) ^ n(v, 25)) +
                      ((v & u[5]) ^ (~v & u[6])) +
                      d[i] +
                      (m[i] =
                        i < 16
                          ? m[i]
                          : (m[i - 16] +
                              (n(_, 7) ^ n(_, 18) ^ (_ >>> 3)) +
                              m[i - 7] +
                              (n(C, 17) ^ n(C, 19) ^ (C >>> 10))) |
                            0);
                  (u = [
                    (S +
                      ((n(I, 2) ^ n(I, 13) ^ n(I, 22)) +
                        ((I & u[1]) ^ (I & u[2]) ^ (u[1] & u[2])))) |
                      0,
                  ].concat(u)),
                    (u[4] = (u[4] + S) | 0);
                }
                for (i = 0; i < 8; i++) u[i] = (u[i] + h[i]) | 0;
              }
              for (i = 0; i < 8; i++)
                for (r = 3; r + 1; r--) {
                  var D = (u[i] >> (8 * r)) & 255;
                  s += (D < 16 ? 0 : '') + D.toString(16);
                }
              return s;
            },
            Be = function (e, t) {
              return (
                ('SHA-256' !== t && 'SHA256' !== t && 'sha256' !== t && 'sha-256' !== t) ||
                  (e = Ue(e)),
                e
              );
            },
            Ge = function (e) {
              return String(e).trim().toLowerCase();
            },
            Ye = Ve.OptIn;
          j.defineGlobalNamespace(), (window.adobe.OptInCategories = Ye.Categories);
          var qe = function (t, n, i) {
            function r (e) {
              var t = e;
              return function (e) {
                var n = e || v.location.href;
                try {
                  var i = g._extractParamFromUri(n, t);
                  if (i) return w.parsePipeDelimetedKeyValues(i);
                } catch (e) {}
              };
            }
            function a (e) {
              function t (e, t, n) {
                e && e.match(re.VALID_VISITOR_ID_REGEX) && (n === A && (I = !0), t(e));
              }
              t(e[A], g.setMarketingCloudVisitorID, A),
                g._setFieldExpire(k, -1),
                t(e[O], g.setAnalyticsVisitorID);
            }
            function o (e) {
              (e = e || {}),
                (g._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                (g._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}),
                (g._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                (g._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {});
            }
            function s (e) {
              function t (e, t, n) {
                return (n = n ? (n += '|') : n), (n += e + '=' + encodeURIComponent(t));
              }
              function n (e, n) {
                var i = n[0],
                  r = n[1];
                return null != r && r !== T && (e = t(i, r, e)), e;
              }
              var i = e.reduce(n, '');
              return (function (e) {
                var t = w.getTimestampInSeconds();
                return (e = e ? (e += '|') : e), (e += 'TS=' + t);
              })(i);
            }
            function l (e) {
              var t = e.minutesToLive,
                n = '';
              return (
                (g.idSyncDisableSyncs || g.disableIdSyncs) &&
                  (n = n || 'Error: id syncs have been disabled'),
                ('string' == typeof e.dpid && e.dpid.length) ||
                  (n = n || 'Error: config.dpid is empty'),
                ('string' == typeof e.url && e.url.length) ||
                  (n = n || 'Error: config.url is empty'),
                void 0 === t
                  ? (t = 20160)
                  : ((t = parseInt(t, 10)),
                    (isNaN(t) || t <= 0) &&
                      (n = n || 'Error: config.minutesToLive needs to be a positive number')),
                { error: n, ttl: t }
              );
            }
            function c () {
              return !!g.configs.doesOptInApply && !(m.optIn.isComplete && u());
            }
            function u () {
              return g.configs.isIabContext
                ? m.optIn.isApproved(m.optIn.Categories.ECID) && C
                : m.optIn.isApproved(m.optIn.Categories.ECID);
            }
            function d (e, t) {
              if (((C = !0), e)) throw new Error('[IAB plugin] : ' + e);
              t.gdprApplies && (h = t.consentString), g.init(), p();
            }
            function f () {
              m.optIn.isApproved(m.optIn.Categories.ECID) &&
                (g.configs.isIabContext
                  ? m.optIn.execute({ command: 'iabPlugin.fetchConsentData', callback: d })
                  : (g.init(), p()));
            }
            function p () {
              m.optIn.off('complete', f);
            }
            if (!i || i.split('').reverse().join('') !== t)
              throw new Error('Please use `Visitor.getInstance` to instantiate Visitor.');
            var g = this,
              m = window.adobe,
              h = '',
              C = !1,
              I = !1;
            g.version = '4.4.0';
            var v = _,
              S = v.Visitor;
            (S.version = g.version),
              (S.AuthState = E.AUTH_STATE),
              (S.OptOut = E.OPT_OUT),
              v.s_c_in || ((v.s_c_il = []), (v.s_c_in = 0)),
              (g._c = 'Visitor'),
              (g._il = v.s_c_il),
              (g._in = v.s_c_in),
              (g._il[g._in] = g),
              v.s_c_in++,
              (g._instanceType = 'regular'),
              (g._log = { requests: [] }),
              (g.marketingCloudOrgID = t),
              (g.cookieName = 'AMCV_' + t),
              (g.sessionCookieName = 'AMCVS_' + t),
              (g.cookieDomain = $()),
              (g.loadSSL = v.location.protocol.toLowerCase().indexOf('https') >= 0),
              (g.loadTimeout = 30000),
              (g.CORSErrors = []),
              (g.marketingCloudServer = g.audienceManagerServer = 'dpm.demdex.net'),
              (g.sdidParamExpiry = 30);
            var D = null,
              A = 'MCMID',
              y = 'MCIDTS',
              b = 'A',
              O = 'MCAID',
              M = 'AAM',
              k = 'MCAAMB',
              T = 'NONE',
              L = function (e) {
                return !Object.prototype[e];
              },
              P = ie(g);
            (g.FIELDS = E.FIELDS),
              (g.cookieRead = function (e) {
                return Q.get(e);
              }),
              (g.cookieWrite = function (e, t, n) {
                var i = g.cookieLifetime ? ('' + g.cookieLifetime).toUpperCase() : '',
                  r = !1;
                return (
                  g.configs &&
                    g.configs.secureCookie &&
                    'https:' === location.protocol &&
                    (r = !0),
                  Q.set(e, '' + t, {
                    expires: n,
                    domain: g.cookieDomain,
                    cookieLifetime: i,
                    secure: r,
                  })
                );
              }),
              (g.resetState = function (e) {
                e ? g._mergeServerState(e) : o();
              }),
              (g._isAllowedDone = !1),
              (g._isAllowedFlag = !1),
              (g.isAllowed = function () {
                return (
                  g._isAllowedDone ||
                    ((g._isAllowedDone = !0),
                    (g.cookieRead(g.cookieName) || g.cookieWrite(g.cookieName, 'T', 1)) &&
                      (g._isAllowedFlag = !0)),
                  'T' === g.cookieRead(g.cookieName) && g._helpers.removeCookie(g.cookieName),
                  g._isAllowedFlag
                );
              }),
              (g.setMarketingCloudVisitorID = function (e) {
                g._setMarketingCloudFields(e);
              }),
              (g._use1stPartyMarketingCloudServer = !1),
              (g.getMarketingCloudVisitorID = function (e, t) {
                g.marketingCloudServer &&
                  g.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                  (g._use1stPartyMarketingCloudServer = !0);
                var n = g._getAudienceManagerURLData('_setMarketingCloudFields'),
                  i = n.url;
                return g._getRemoteField(A, i, e, t, n);
              }),
              (g.getVisitorValues = function (e, t) {
                var n = {
                    MCMID: { fn: g.getMarketingCloudVisitorID, args: [!0], context: g },
                    MCOPTOUT: { fn: g.isOptedOut, args: [void 0, !0], context: g },
                    MCAID: { fn: g.getAnalyticsVisitorID, args: [!0], context: g },
                    MCAAMLH: { fn: g.getAudienceManagerLocationHint, args: [!0], context: g },
                    MCAAMB: { fn: g.getAudienceManagerBlob, args: [!0], context: g },
                  },
                  i = t && t.length ? j.pluck(n, t) : n;
                z(i, e);
              }),
              (g._currentCustomerIDs = {}),
              (g._customerIDsHashChanged = !1),
              (g._newCustomerIDsHash = ''),
              (g.setCustomerIDs = function (t, n) {
                function i () {
                  g._customerIDsHashChanged = !1;
                }
                if (!g.isOptedOut() && t) {
                  if (!j.isObject(t) || j.isObjectEmpty(t)) return !1;
                  g._readVisitor();
                  var r, a, o;
                  for (r in t)
                    if (
                      L(r) &&
                      ((a = t[r]), (n = a.hasOwnProperty('hashType') ? a.hashType : n), a)
                    )
                      if ('object' === e(a)) {
                        var s = {};
                        if (a.id) {
                          if (n) {
                            if (!(o = Be(Ge(a.id), n))) return;
                            (a.id = o), (s.hashType = n);
                          }
                          s.id = a.id;
                        }
                        void 0 != a.authState && (s.authState = a.authState),
                          (g._currentCustomerIDs[r] = s);
                      } else if (n) {
                        if (!(o = Be(Ge(a), n))) return;
                        g._currentCustomerIDs[r] = { id: o, hashType: n };
                      } else g._currentCustomerIDs[r] = { id: a };
                  var l = g.getCustomerIDs(),
                    c = g._getField('MCCIDH'),
                    u = '';
                  c || (c = 0);
                  for (r in l)
                    L(r) &&
                      ((a = l[r]),
                      (u +=
                        (u ? '|' : '') +
                        r +
                        '|' +
                        (a.id ? a.id : '') +
                        (a.authState ? a.authState : '')));
                  (g._newCustomerIDsHash = String(g._hash(u))),
                    g._newCustomerIDsHash !== c &&
                      ((g._customerIDsHashChanged = !0), g._mapCustomerIDs(i));
                }
              }),
              (g.getCustomerIDs = function () {
                g._readVisitor();
                var e,
                  t,
                  n = {};
                for (e in g._currentCustomerIDs)
                  L(e) &&
                    ((t = g._currentCustomerIDs[e]),
                    n[e] || (n[e] = {}),
                    t.id && (n[e].id = t.id),
                    void 0 != t.authState
                      ? (n[e].authState = t.authState)
                      : (n[e].authState = S.AuthState.UNKNOWN),
                    t.hashType && (n[e].hashType = t.hashType));
                return n;
              }),
              (g.setAnalyticsVisitorID = function (e) {
                g._setAnalyticsFields(e);
              }),
              (g.getAnalyticsVisitorID = function (e, t, n) {
                if (!w.isTrackingServerPopulated() && !n) return g._callCallback(e, ['']), '';
                var i = '';
                if (
                  (n ||
                    (i = g.getMarketingCloudVisitorID(function (t) {
                      g.getAnalyticsVisitorID(e, !0);
                    })),
                  i || n)
                ) {
                  var r = n ? g.marketingCloudServer : g.trackingServer,
                    a = '';
                  g.loadSSL &&
                    (n
                      ? g.marketingCloudServerSecure && (r = g.marketingCloudServerSecure)
                      : g.trackingServerSecure && (r = g.trackingServerSecure));
                  var o = {};
                  if (r) {
                    var s = 'http' + (g.loadSSL ? 's' : '') + '://' + r + '/id',
                      l =
                        'd_visid_ver=' +
                        g.version +
                        '&mcorgid=' +
                        encodeURIComponent(g.marketingCloudOrgID) +
                        (i ? '&mid=' + encodeURIComponent(i) : '') +
                        (g.idSyncDisable3rdPartySyncing || g.disableThirdPartyCookies
                          ? '&d_coppa=true'
                          : ''),
                      c = [
                        's_c_il',
                        g._in,
                        '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                      ];
                    (a =
                      s +
                      '?' +
                      l +
                      '&callback=s_c_il%5B' +
                      g._in +
                      '%5D._set' +
                      (n ? 'MarketingCloud' : 'Analytics') +
                      'Fields'),
                      (o.corsUrl = s + '?' + l),
                      (o.callback = c);
                  }
                  return (o.url = a), g._getRemoteField(n ? A : O, a, e, t, o);
                }
                return '';
              }),
              (g.getAudienceManagerLocationHint = function (e, t) {
                if (
                  g.getMarketingCloudVisitorID(function (t) {
                    g.getAudienceManagerLocationHint(e, !0);
                  })
                ) {
                  var n = g._getField(O);
                  if (
                    (!n &&
                      w.isTrackingServerPopulated() &&
                      (n = g.getAnalyticsVisitorID(function (t) {
                        g.getAudienceManagerLocationHint(e, !0);
                      })),
                    n || !w.isTrackingServerPopulated())
                  ) {
                    var i = g._getAudienceManagerURLData(),
                      r = i.url;
                    return g._getRemoteField('MCAAMLH', r, e, t, i);
                  }
                }
                return '';
              }),
              (g.getLocationHint = g.getAudienceManagerLocationHint),
              (g.getAudienceManagerBlob = function (e, t) {
                if (
                  g.getMarketingCloudVisitorID(function (t) {
                    g.getAudienceManagerBlob(e, !0);
                  })
                ) {
                  var n = g._getField(O);
                  if (
                    (!n &&
                      w.isTrackingServerPopulated() &&
                      (n = g.getAnalyticsVisitorID(function (t) {
                        g.getAudienceManagerBlob(e, !0);
                      })),
                    n || !w.isTrackingServerPopulated())
                  ) {
                    var i = g._getAudienceManagerURLData(),
                      r = i.url;
                    return (
                      g._customerIDsHashChanged && g._setFieldExpire(k, -1),
                      g._getRemoteField(k, r, e, t, i)
                    );
                  }
                }
                return '';
              }),
              (g._supplementalDataIDCurrent = ''),
              (g._supplementalDataIDCurrentConsumed = {}),
              (g._supplementalDataIDLast = ''),
              (g._supplementalDataIDLastConsumed = {}),
              (g.getSupplementalDataID = function (e, t) {
                g._supplementalDataIDCurrent ||
                  t ||
                  (g._supplementalDataIDCurrent = g._generateID(1));
                var n = g._supplementalDataIDCurrent;
                return (
                  g._supplementalDataIDLast && !g._supplementalDataIDLastConsumed[e]
                    ? ((n = g._supplementalDataIDLast),
                      (g._supplementalDataIDLastConsumed[e] = !0))
                    : n &&
                      (g._supplementalDataIDCurrentConsumed[e] &&
                        ((g._supplementalDataIDLast = g._supplementalDataIDCurrent),
                        (g._supplementalDataIDLastConsumed = g._supplementalDataIDCurrentConsumed),
                        (g._supplementalDataIDCurrent = n = t ? '' : g._generateID(1)),
                        (g._supplementalDataIDCurrentConsumed = {})),
                      n && (g._supplementalDataIDCurrentConsumed[e] = !0)),
                  n
                );
              });
            var R = !1;
            (g._liberatedOptOut = null),
              (g.getOptOut = function (e, t) {
                var n = g._getAudienceManagerURLData('_setMarketingCloudFields'),
                  i = n.url;
                if (u()) return g._getRemoteField('MCOPTOUT', i, e, t, n);
                if ((g._registerCallback('liberatedOptOut', e), null !== g._liberatedOptOut))
                  return (
                    g._callAllCallbacks('liberatedOptOut', [g._liberatedOptOut]),
                    (R = !1),
                    g._liberatedOptOut
                  );
                if (R) return null;
                R = !0;
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
                        i = j.parseOptOut(e, t, T);
                      (t = i.optOut),
                        (n = 1000 * i.d_ottl),
                        (g._liberatedOptOut = t),
                        setTimeout(function () {
                          g._liberatedOptOut = null;
                        }, n);
                    }
                    g._callAllCallbacks('liberatedOptOut', [t]), (R = !1);
                  }),
                  P.fireCORS(n),
                  null
                );
              }),
              (g.isOptedOut = function (e, t, n) {
                t || (t = S.OptOut.GLOBAL);
                var i = g.getOptOut(function (n) {
                  var i = n === S.OptOut.GLOBAL || n.indexOf(t) >= 0;
                  g._callCallback(e, [i]);
                }, n);
                return i ? i === S.OptOut.GLOBAL || i.indexOf(t) >= 0 : null;
              }),
              (g._fields = null),
              (g._fieldsExpired = null),
              (g._hash = function (e) {
                var t,
                  n,
                  i = 0;
                if (e)
                  for (t = 0; t < e.length; t++)
                    (n = e.charCodeAt(t)), (i = (i << 5) - i + n), (i &= i);
                return i;
              }),
              (g._generateID = ne),
              (g._generateLocalMID = function () {
                var e = g._generateID(0);
                return (N.isClientSideMarketingCloudVisitorID = !0), e;
              }),
              (g._callbackList = null),
              (g._callCallback = function (e, t) {
                try {
                  'function' == typeof e ? e.apply(v, t) : e[1].apply(e[0], t);
                } catch (e) {}
              }),
              (g._registerCallback = function (e, t) {
                t &&
                  (null == g._callbackList && (g._callbackList = {}),
                  void 0 == g._callbackList[e] && (g._callbackList[e] = []),
                  g._callbackList[e].push(t));
              }),
              (g._callAllCallbacks = function (e, t) {
                if (null != g._callbackList) {
                  var n = g._callbackList[e];
                  if (n) for (; n.length > 0; ) g._callCallback(n.shift(), t);
                }
              }),
              (g._addQuerystringParam = function (e, t, n, i) {
                var r = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                  a = w.parseHash(e),
                  o = w.hashlessUrl(e);
                if (-1 === o.indexOf('?')) return o + '?' + r + a;
                var s = o.split('?'),
                  l = s[0] + '?',
                  c = s[1];
                return l + w.addQueryParamAtLocation(c, r, i) + a;
              }),
              (g._extractParamFromUri = function (e, t) {
                var n = new RegExp('[\\?&#]' + t + '=([^&#]*)'),
                  i = n.exec(e);
                if (i && i.length) return decodeURIComponent(i[1]);
              }),
              (g._parseAdobeMcFromUrl = r(re.ADOBE_MC)),
              (g._parseAdobeMcSdidFromUrl = r(re.ADOBE_MC_SDID)),
              (g._attemptToPopulateSdidFromUrl = function (e) {
                var n = g._parseAdobeMcSdidFromUrl(e),
                  i = 1000000000;
                n && n.TS && (i = w.getTimestampInSeconds() - n.TS),
                  n &&
                    n.SDID &&
                    n.MCORGID === t &&
                    i < g.sdidParamExpiry &&
                    ((g._supplementalDataIDCurrent = n.SDID),
                    (g._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
              }),
              (g._attemptToPopulateIdsFromUrl = function () {
                var e = g._parseAdobeMcFromUrl();
                if (e && e.TS) {
                  var n = w.getTimestampInSeconds(),
                    i = n - e.TS;
                  if (Math.floor(i / 60) > re.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== t) return;
                  a(e);
                }
              }),
              (g._mergeServerState = function (e) {
                if (e)
                  try {
                    if (
                      ((e = (function (e) {
                        return w.isObject(e) ? e : JSON.parse(e);
                      })(e)),
                      e[g.marketingCloudOrgID])
                    ) {
                      var t = e[g.marketingCloudOrgID];
                      !(function (e) {
                        w.isObject(e) && g.setCustomerIDs(e);
                      })(t.customerIDs),
                        o(t.sdid);
                    }
                  } catch (e) {
                    throw new Error('`serverState` has an invalid format.');
                  }
              }),
              (g._timeout = null),
              (g._loadData = function (e, t, n, i) {
                (t = g._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                  (i.url = g._addQuerystringParam(i.url, 'd_fieldgroup', e, 1)),
                  (i.corsUrl = g._addQuerystringParam(i.corsUrl, 'd_fieldgroup', e, 1)),
                  (N.fieldGroupObj[e] = !0),
                  i === Object(i) &&
                    i.corsUrl &&
                    'XMLHttpRequest' === P.corsMetadata.corsType &&
                    P.fireCORS(i, n, e);
              }),
              (g._clearTimeout = function (e) {
                null != g._timeout &&
                  g._timeout[e] &&
                  (clearTimeout(g._timeout[e]), (g._timeout[e] = 0));
              }),
              (g._settingsDigest = 0),
              (g._getSettingsDigest = function () {
                if (!g._settingsDigest) {
                  var e = g.version;
                  g.audienceManagerServer && (e += '|' + g.audienceManagerServer),
                    g.audienceManagerServerSecure && (e += '|' + g.audienceManagerServerSecure),
                    (g._settingsDigest = g._hash(e));
                }
                return g._settingsDigest;
              }),
              (g._readVisitorDone = !1),
              (g._readVisitor = function () {
                if (!g._readVisitorDone) {
                  g._readVisitorDone = !0;
                  var e,
                    t,
                    n,
                    i,
                    r,
                    a,
                    o = g._getSettingsDigest(),
                    s = !1,
                    l = g.cookieRead(g.cookieName),
                    c = new Date();
                  if (
                    (l ||
                      I ||
                      g.discardTrackingServerECID ||
                      (l = g.cookieRead(re.FIRST_PARTY_SERVER_COOKIE)),
                    null == g._fields && (g._fields = {}),
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
                        s && ('MCCIDH' === n && (i = ''), r > 0 && (r = c.getTime() / 1000 - 60)),
                        n &&
                          i &&
                          (g._setField(n, i, 1),
                          r > 0 &&
                            ((g._fields['expire' + n] = r + (a ? 's' : '')),
                            (c.getTime() >= 1000 * r ||
                              (a && !g.cookieRead(g.sessionCookieName))) &&
                              (g._fieldsExpired || (g._fieldsExpired = {}),
                              (g._fieldsExpired[n] = !0))));
                  !g._getField(O) &&
                    w.isTrackingServerPopulated() &&
                    (l = g.cookieRead('s_vi')) &&
                    ((l = l.split('|')),
                    l.length > 1 &&
                      l[0].indexOf('v1') >= 0 &&
                      ((i = l[1]),
                      (e = i.indexOf('[')),
                      e >= 0 && (i = i.substring(0, e)),
                      i && i.match(re.VALID_VISITOR_ID_REGEX) && g._setField(O, i)));
                }
              }),
              (g._appendVersionTo = function (e) {
                var t = 'vVersion|' + g.version,
                  n = e ? g._getCookieVersion(e) : null;
                return (
                  n
                    ? Z.areVersionsDifferent(n, g.version) && (e = e.replace(re.VERSION_REGEX, t))
                    : (e += (e ? '|' : '') + t),
                  e
                );
              }),
              (g._writeVisitor = function () {
                var e,
                  t,
                  n = g._getSettingsDigest();
                for (e in g._fields)
                  L(e) &&
                    g._fields[e] &&
                    'expire' !== e.substring(0, 6) &&
                    ((t = g._fields[e]),
                    (n +=
                      (n ? '|' : '') +
                      e +
                      (g._fields['expire' + e] ? '-' + g._fields['expire' + e] : '') +
                      '|' +
                      t));
                (n = g._appendVersionTo(n)), g.cookieWrite(g.cookieName, n, 1);
              }),
              (g._getField = function (e, t) {
                return null == g._fields || (!t && g._fieldsExpired && g._fieldsExpired[e])
                  ? null
                  : g._fields[e];
              }),
              (g._setField = function (e, t, n) {
                null == g._fields && (g._fields = {}), (g._fields[e] = t), n || g._writeVisitor();
              }),
              (g._getFieldList = function (e, t) {
                var n = g._getField(e, t);
                return n ? n.split('*') : null;
              }),
              (g._setFieldList = function (e, t, n) {
                g._setField(e, t ? t.join('*') : '', n);
              }),
              (g._getFieldMap = function (e, t) {
                var n = g._getFieldList(e, t);
                if (n) {
                  var i,
                    r = {};
                  for (i = 0; i < n.length; i += 2) r[n[i]] = n[i + 1];
                  return r;
                }
                return null;
              }),
              (g._setFieldMap = function (e, t, n) {
                var i,
                  r = null;
                if (t) {
                  r = [];
                  for (i in t) L(i) && (r.push(i), r.push(t[i]));
                }
                g._setFieldList(e, r, n);
              }),
              (g._setFieldExpire = function (e, t, n) {
                var i = new Date();
                i.setTime(i.getTime() + 1000 * t),
                  null == g._fields && (g._fields = {}),
                  (g._fields['expire' + e] = Math.floor(i.getTime() / 1000) + (n ? 's' : '')),
                  t < 0
                    ? (g._fieldsExpired || (g._fieldsExpired = {}), (g._fieldsExpired[e] = !0))
                    : g._fieldsExpired && (g._fieldsExpired[e] = !1),
                  n &&
                    (g.cookieRead(g.sessionCookieName) || g.cookieWrite(g.sessionCookieName, '1'));
              }),
              (g._findVisitorID = function (t) {
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
                    t && 'NOTARGET' === (t = t.toUpperCase()) && (t = T),
                    (t && (t === T || t.match(re.VALID_VISITOR_ID_REGEX))) || (t = '')),
                  t
                );
              }),
              (g._setFields = function (t, n) {
                if (
                  (g._clearTimeout(t),
                  null != g._loading && (g._loading[t] = !1),
                  N.fieldGroupObj[t] && N.setState(t, !1),
                  'MC' === t)
                ) {
                  !0 !== N.isClientSideMarketingCloudVisitorID &&
                    (N.isClientSideMarketingCloudVisitorID = !1);
                  var i = g._getField(A);
                  if (!i || g.overwriteCrossDomainMCIDAndAID) {
                    if (!(i = 'object' === e(n) && n.mid ? n.mid : g._findVisitorID(n))) {
                      if (
                        g._use1stPartyMarketingCloudServer &&
                        !g.tried1stPartyMarketingCloudServer
                      )
                        return (
                          (g.tried1stPartyMarketingCloudServer = !0),
                          void g.getAnalyticsVisitorID(null, !1, !0)
                        );
                      i = g._generateLocalMID();
                    }
                    g._setField(A, i);
                  }
                  (i && i !== T) || (i = ''),
                    'object' === e(n) &&
                      ((n.d_region || n.dcs_region || n.d_blob || n.blob) && g._setFields(M, n),
                      g._use1stPartyMarketingCloudServer &&
                        n.mid &&
                        g._setFields(b, { id: n.id })),
                    g._callAllCallbacks(A, [i]);
                }
                if (t === M && 'object' === e(n)) {
                  var r = 604800;
                  void 0 != n.id_sync_ttl && n.id_sync_ttl && (r = parseInt(n.id_sync_ttl, 10));
                  var a = F.getRegionAndCheckIfChanged(n, r);
                  g._callAllCallbacks('MCAAMLH', [a]);
                  var o = g._getField(k);
                  (n.d_blob || n.blob) &&
                    ((o = n.d_blob),
                    o || (o = n.blob),
                    g._setFieldExpire(k, r),
                    g._setField(k, o)),
                    o || (o = ''),
                    g._callAllCallbacks(k, [o]),
                    !n.error_msg &&
                      g._newCustomerIDsHash &&
                      g._setField('MCCIDH', g._newCustomerIDsHash);
                }
                if (t === b) {
                  var s = g._getField(O);
                  (s && !g.overwriteCrossDomainMCIDAndAID) ||
                    ((s = g._findVisitorID(n)),
                    s ? s !== T && g._setFieldExpire(k, -1) : (s = T),
                    g._setField(O, s)),
                    (s && s !== T) || (s = ''),
                    g._callAllCallbacks(O, [s]);
                }
                if (g.idSyncDisableSyncs || g.disableIdSyncs) F.idCallNotProcesssed = !0;
                else {
                  F.idCallNotProcesssed = !1;
                  var l = {};
                  (l.ibs = n.ibs), (l.subdomain = n.subdomain), F.processIDCallData(l);
                }
                if (n === Object(n)) {
                  var c, d;
                  u() && g.isAllowed() && (c = g._getField('MCOPTOUT'));
                  var f = j.parseOptOut(n, c, T);
                  (c = f.optOut),
                    (d = f.d_ottl),
                    g._setFieldExpire('MCOPTOUT', d, !0),
                    g._setField('MCOPTOUT', c),
                    g._callAllCallbacks('MCOPTOUT', [c]);
                }
              }),
              (g._loading = null),
              (g._getRemoteField = function (e, t, n, i, r) {
                var a,
                  o = '',
                  s = w.isFirstPartyAnalyticsVisitorIDCall(e),
                  l = { MCAAMLH: !0, MCAAMB: !0 };
                if (u() && g.isAllowed()) {
                  g._readVisitor(), (o = g._getField(e, !0 === l[e]));
                  if (
                    (function () {
                      return (
                        (!o || (g._fieldsExpired && g._fieldsExpired[e])) &&
                        (!g.disableThirdPartyCalls || s)
                      );
                    })()
                  ) {
                    if (
                      (e === A || 'MCOPTOUT' === e
                        ? (a = 'MC')
                        : 'MCAAMLH' === e || e === k
                        ? (a = M)
                        : e === O && (a = b),
                      a)
                    )
                      return (
                        !t ||
                          (null != g._loading && g._loading[a]) ||
                          (null == g._loading && (g._loading = {}),
                          (g._loading[a] = !0),
                          g._loadData(
                            a,
                            t,
                            function (t) {
                              if (!g._getField(e)) {
                                t && N.setState(a, !0);
                                var n = '';
                                e === A
                                  ? (n = g._generateLocalMID())
                                  : a === M && (n = { error_msg: 'timeout' }),
                                  g._setFields(a, n);
                              }
                            },
                            r
                          )),
                        g._registerCallback(e, n),
                        o || (t || g._setFields(a, { id: T }), '')
                      );
                  } else
                    o ||
                      (e === A
                        ? (g._registerCallback(e, n),
                          (o = g._generateLocalMID()),
                          g.setMarketingCloudVisitorID(o))
                        : e === O
                        ? (g._registerCallback(e, n), (o = ''), g.setAnalyticsVisitorID(o))
                        : ((o = ''), (i = !0)));
                }
                return (
                  (e !== A && e !== O) || o !== T || ((o = ''), (i = !0)),
                  n && i && g._callCallback(n, [o]),
                  o
                );
              }),
              (g._setMarketingCloudFields = function (e) {
                g._readVisitor(), g._setFields('MC', e);
              }),
              (g._mapCustomerIDs = function (e) {
                g.getAudienceManagerBlob(e, !0);
              }),
              (g._setAnalyticsFields = function (e) {
                g._readVisitor(), g._setFields(b, e);
              }),
              (g._setAudienceManagerFields = function (e) {
                g._readVisitor(), g._setFields(M, e);
              }),
              (g._getAudienceManagerURLData = function (e) {
                var t = g.audienceManagerServer,
                  n = '',
                  i = g._getField(A),
                  r = g._getField(k, !0),
                  a = g._getField(O),
                  o = a && a !== T ? '&d_cid_ic=AVID%01' + encodeURIComponent(a) : '';
                if (
                  (g.loadSSL &&
                    g.audienceManagerServerSecure &&
                    (t = g.audienceManagerServerSecure),
                  t)
                ) {
                  var s,
                    l,
                    c = g.getCustomerIDs();
                  if (c)
                    for (s in c)
                      L(s) &&
                        ((l = c[s]),
                        (o +=
                          '&d_cid_ic=' +
                          encodeURIComponent(s) +
                          '%01' +
                          encodeURIComponent(l.id ? l.id : '') +
                          (l.authState ? '%01' + l.authState : '')));
                  e || (e = '_setAudienceManagerFields');
                  var u = 'http' + (g.loadSSL ? 's' : '') + '://' + t + '/id',
                    d =
                      'd_visid_ver=' +
                      g.version +
                      (h && -1 !== u.indexOf('demdex.net')
                        ? '&gdpr=1&gdpr_force=1&gdpr_consent=' + h
                        : '') +
                      '&d_rtbd=json&d_ver=2' +
                      (!i && g._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                      '&d_orgid=' +
                      encodeURIComponent(g.marketingCloudOrgID) +
                      '&d_nsid=' +
                      (g.idSyncContainerID || 0) +
                      (i ? '&d_mid=' + encodeURIComponent(i) : '') +
                      (g.idSyncDisable3rdPartySyncing || g.disableThirdPartyCookies
                        ? '&d_coppa=true'
                        : '') +
                      (!0 === D ? '&d_coop_safe=1' : !1 === D ? '&d_coop_unsafe=1' : '') +
                      (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                      o,
                    f = ['s_c_il', g._in, e];
                  return (
                    (n = u + '?' + d + '&d_cb=s_c_il%5B' + g._in + '%5D.' + e),
                    { url: n, corsUrl: u + '?' + d, callback: f }
                  );
                }
                return { url: n };
              }),
              (g.appendVisitorIDsTo = function (e) {
                try {
                  var t = [
                    [A, g._getField(A)],
                    [O, g._getField(O)],
                    ['MCORGID', g.marketingCloudOrgID],
                  ];
                  return g._addQuerystringParam(e, re.ADOBE_MC, s(t));
                } catch (t) {
                  return e;
                }
              }),
              (g.appendSupplementalDataIDTo = function (e, t) {
                if (!(t = t || g.getSupplementalDataID(w.generateRandomString(), !0))) return e;
                try {
                  var n = s([
                    ['SDID', t],
                    ['MCORGID', g.marketingCloudOrgID],
                  ]);
                  return g._addQuerystringParam(e, re.ADOBE_MC_SDID, n);
                } catch (t) {
                  return e;
                }
              });
            var w = {
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
                if (e !== O) return !1;
                var i;
                return (
                  t || (t = g.trackingServer),
                  n || (n = g.trackingServerSecure),
                  !('string' != typeof (i = g.loadSSL ? n : t) || !i.length) &&
                    i.indexOf('2o7.net') < 0 &&
                    i.indexOf('omtrdc.net') < 0
                );
              },
              isObject: function (e) {
                return Boolean(e && e === Object(e));
              },
              removeCookie: function (e) {
                Q.remove(e, { domain: g.cookieDomain });
              },
              isTrackingServerPopulated: function () {
                return !!g.trackingServer || !!g.trackingServerSecure;
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
                for (var n in e) e.hasOwnProperty(n) && 'function' == typeof e[n] && (e[n] = t);
                return e;
              },
            };
            g._helpers = w;
            var F = ae(g, S);
            (g._destinationPublishing = F), (g.timeoutMetricsLog = []);
            var N = {
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
                  case b:
                    !1 === t
                      ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1)
                      : (this.AnalyticsIDCallTimedOut = t);
                    break;
                  case M:
                    !1 === t
                      ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1)
                      : (this.AAMIDCallTimedOut = t);
                }
              },
            };
            (g.isClientSideMarketingCloudVisitorID = function () {
              return N.isClientSideMarketingCloudVisitorID;
            }),
              (g.MCIDCallTimedOut = function () {
                return N.MCIDCallTimedOut;
              }),
              (g.AnalyticsIDCallTimedOut = function () {
                return N.AnalyticsIDCallTimedOut;
              }),
              (g.AAMIDCallTimedOut = function () {
                return N.AAMIDCallTimedOut;
              }),
              (g.idSyncGetOnPageSyncInfo = function () {
                return g._readVisitor(), g._getField('MCSYNCSOP');
              }),
              (g.idSyncByURL = function (e) {
                if (!g.isOptedOut()) {
                  var t = l(e || {});
                  if (t.error) return t.error;
                  var n,
                    i,
                    r = e.url,
                    a = encodeURIComponent,
                    o = F;
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
              (g.idSyncByDataSource = function (e) {
                if (!g.isOptedOut())
                  return e === Object(e) && 'string' == typeof e.dpuuid && e.dpuuid.length
                    ? ((e.url = '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                      g.idSyncByURL(e))
                    : 'Error: config or config.dpuuid is empty';
              }),
              He(g, F),
              (g._getCookieVersion = function (e) {
                e = e || g.cookieRead(g.cookieName);
                var t = re.VERSION_REGEX.exec(e);
                return t && t.length > 1 ? t[1] : null;
              }),
              (g._resetAmcvCookie = function (e) {
                var t = g._getCookieVersion();
                (t && !Z.isLessThan(t, e)) || w.removeCookie(g.cookieName);
              }),
              (g.setAsCoopSafe = function () {
                D = !0;
              }),
              (g.setAsCoopUnsafe = function () {
                D = !1;
              }),
              (function () {
                if (((g.configs = Object.create(null)), w.isObject(n)))
                  for (var e in n) L(e) && ((g[e] = n[e]), (g.configs[e] = n[e]));
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
                    i = g[t];
                  g[t] = function (e) {
                    return u() && g.isAllowed()
                      ? i.apply(g, arguments)
                      : ('function' == typeof e && g._callCallback(e, [n]), n);
                  };
                });
              })(),
              (g.init = function () {
                if (c()) return m.optIn.fetchPermissions(f, !0);
                !(function () {
                  if (w.isObject(n)) {
                    (g.idSyncContainerID = g.idSyncContainerID || 0),
                      (D =
                        'boolean' == typeof g.isCoopSafe
                          ? g.isCoopSafe
                          : w.parseBoolean(g.isCoopSafe)),
                      g.resetBeforeVersion && g._resetAmcvCookie(g.resetBeforeVersion),
                      g._attemptToPopulateIdsFromUrl(),
                      g._attemptToPopulateSdidFromUrl(),
                      g._readVisitor();
                    var e = g._getField(y),
                      t = Math.ceil(new Date().getTime() / re.MILLIS_PER_DAY);
                    g.idSyncDisableSyncs ||
                      g.disableIdSyncs ||
                      !F.canMakeSyncIDCall(e, t) ||
                      (g._setFieldExpire(k, -1), g._setField(y, t)),
                      g.getMarketingCloudVisitorID(),
                      g.getAudienceManagerLocationHint(),
                      g.getAudienceManagerBlob(),
                      g._mergeServerState(g.serverState);
                  } else g._attemptToPopulateIdsFromUrl(), g._attemptToPopulateSdidFromUrl();
                })(),
                  (function () {
                    if (!g.idSyncDisableSyncs && !g.disableIdSyncs) {
                      F.checkDPIframeSrc();
                      var e = function () {
                        var e = F;
                        e.readyToAttachIframe() && e.attachIframe();
                      };
                      v.addEventListener('load', function () {
                        (S.windowLoaded = !0), e();
                      });
                      try {
                        te.receiveMessage(function (e) {
                          F.receiveMessage(e.data);
                        }, F.iframeHost);
                      } catch (e) {}
                    }
                  })(),
                  (function () {
                    g.whitelistIframeDomains &&
                      re.POST_MESSAGE_ENABLED &&
                      ((g.whitelistIframeDomains =
                        g.whitelistIframeDomains instanceof Array
                          ? g.whitelistIframeDomains
                          : [g.whitelistIframeDomains]),
                      g.whitelistIframeDomains.forEach(function (e) {
                        var n = new B(t, e),
                          i = K(g, n);
                        te.receiveMessage(i, e);
                      }));
                  })();
              });
          };
          (qe.config = se), (_.Visitor = qe);
          var Xe = qe,
            We = function (e) {
              if (j.isObject(e))
                return Object.keys(e)
                  .filter(function (t) {
                    return '' !== e[t];
                  })
                  .reduce(function (t, n) {
                    var i = 'doesOptInApply' !== n ? e[n] : se.normalizeConfig(e[n]),
                      r = j.normalizeBoolean(i);
                    return (t[n] = r), t;
                  }, Object.create(null));
            },
            Je = Ve.OptIn,
            Ke = Ve.IabPlugin;
          return (
            (Xe.getInstance = function (e, t) {
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
              var i = We(t);
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
                    (n = n || $()),
                      (n = n === window.location.hostname ? '' : n),
                      (t.optInCookieDomain = n);
                    var i = new Je(t, { cookies: Q });
                    if (t.isIabContext) {
                      var r = new Ke(window.__cmp);
                      i.registerPlugin(r);
                    }
                    return i;
                  })();
              })(i || {});
              var r = e,
                a = r.split('').reverse().join(''),
                o = new Xe(e, null, a);
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
                  ? new Y(e, i, o, _.parent)
                  : new Xe(e, i, a);
              return (o = null), l.init(), l;
            }),
            (function () {
              function e () {
                Xe.windowLoaded = !0;
              }
              _.addEventListener
                ? _.addEventListener('load', e)
                : _.attachEvent && _.attachEvent('onload', e),
                (Xe.codeLoadEnd = new Date().getTime());
            })(),
            Xe
          );
        })();
        var containerID = Bootstrapper.data.resolve('55349');
        var visitorServiceNamespace = Bootstrapper.data.resolve('55350');
        var visitor = Visitor.getInstance(visitorServiceNamespace, {
          trackingServer: 'ci.intuit.com',
          trackingServerSecure: 'sci.intuit.com',
          marketingCloudServer: 'ci.intuit.com',
          marketingCloudServerSecure: 'sci.intuit.com',
          idSyncContainerID: containerID.nsidId,
          idSyncAttachIframeOnWindowLoad: true,
        });
        try {
          if (window.wa.ivid)
            visitor.setCustomerIDs({
              IVID: { id: window.wa.ivid, authState: Visitor.AuthState.UNKNOWN },
            });
        } catch (err) {}
        window.visitor = visitor;
      },
      3008712,
      559422
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                if (
                  window.location.href.indexOf('quickbooks.intuit.com/signup/core/') == -1 &&
                  window.location.href.indexOf('selfemployed.intuit.com/login?') == -1 &&
                  window.location.href.indexOf('quickbooks.intuit.com/signup/qboa/') == -1 &&
                  window.location.href.indexOf('quickbooks.intuit.com/signup/proadvisor/') == -1 &&
                  window.location.href.indexOf('signup.quickbooks.intuit.com/') == -1 &&
                  window.location.href.indexOf('signup-e2e.quickbooks.intuit.com/') == -1
                )
                  return 'no';
                else return 'yes';
              },
              load: 'page',
              trigger: Bootstrapper.data.immediateTrigger,
              dataDefName: 'QBSE Sign In-Create Account Page and WW SUI pages',
              collection: 'QBO QBSE',
              source: 'Manage',
              priv: 'false',
            },
            { id: '56949' }
          );
        }, 56949);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        try {
          var allowActivityMap = 'true';
          var publishPath = Bootstrapper.ensightenOptions.publishPath,
            omitPaths = ['sbg', 'sbg-dev', 'us_fmsp_dev', 'us_fmsp_prod'];
          for (var i = 0, max = omitPaths.length; i < max; i++) {
            var patt = new RegExp('^' + omitPaths[i], 'i');
            allowActivityMap = patt.test(publishPath) ? false : true;
            if (allowActivityMap === false) break;
          }
          if (allowActivityMap)
            window.AppMeasurement_Module_ActivityMap = function (f) {
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
                        : 'IMAGE' == c && a.src && (f = g(k(a.src)))));
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
            };
        } catch (err) {}
        window.AppMeasurement_Module_Integrate = function (l) {
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
        };
        window.AppMeasurement = function (r) {
          const $___old_1a6ee38d451ed4f2 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_1a6ee38d451ed4f2)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_f41e7bff56ded01f.userAgent
              ));
            return function () {
              var a = this;
              a.version = '2.17.0';
              var h = window;
              h.s_c_in || ((h.s_c_il = []), (h.s_c_in = 0));
              a._il = h.s_c_il;
              a._in = h.s_c_in;
              a._il[a._in] = a;
              h.s_c_in++;
              a._c = 's_c';
              var q = h.AppMeasurement.ec;
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
                  '' + m.location != '' + s &&
                  p.location &&
                  '' + m.location != '' + p.location &&
                  m.location.host == s.host;

                )
                  (p = m), (m = p.parent);
              } catch (u) {}
              a.C = function (a) {
                try {
                  console.log(a);
                } catch (b) {}
              };
              a.Pa = function (a) {
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
              a.Kb = function () {
                var c = h.location.hostname,
                  b = a.fpCookieDomainPeriods,
                  d;
                b || (b = a.cookieDomainPeriods);
                if (
                  c &&
                  !a.Ia &&
                  !/^[0-9.]+$/.test(c) &&
                  ((b = b ? parseInt(b) : 2),
                  (b = 2 < b ? b : 2),
                  (d = c.lastIndexOf('.')),
                  0 <= d)
                ) {
                  for (; 0 <= d && 1 < b; ) (d = c.lastIndexOf('.', d - 1)), b--;
                  a.Ia = 0 < d ? c.substring(d) : c;
                }
                return a.Ia;
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
                var f = a.Kb(),
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
                      ((d = new Date()),
                      (g = d.getYear()),
                      d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
                return c && 'NONE' != e
                  ? ((a.d.cookie =
                      a.escape(c) +
                      '=' +
                      a.escape('' != b ? b : '[[B]]') +
                      '; path=/;' +
                      (d && 'SESSION' != e ? ' expires=' + d.toUTCString() + ';' : '') +
                      (f ? ' domain=' + f + ';' : '')),
                    a.cookieRead(c) == b)
                  : 0;
              };
              a.Hb = function () {
                var c = a.Util.getIeVersion();
                'number' === typeof c &&
                  10 > c &&
                  ((a.unsupportedBrowser = !0), a.ub(a, function () {}));
              };
              a.ub = function (a, b) {
                for (var d in a) a.hasOwnProperty(d) && 'function' === typeof a[d] && (a[d] = b);
              };
              a.K = [];
              a.ea = function (c, b, d) {
                if (a.Ja) return 0;
                a.maxDelay || (a.maxDelay = 250);
                var f = 0,
                  e = new Date().getTime() + a.maxDelay,
                  g = a.d.visibilityState,
                  k = ['webkitvisibilitychange', 'visibilitychange'];
                g || (g = a.d.webkitVisibilityState);
                if (g && 'prerender' == g) {
                  if (!a.fa)
                    for (a.fa = 1, d = 0; d < k.length; d++)
                      a.d.addEventListener(k[d], function () {
                        var c = a.d.visibilityState;
                        c || (c = a.d.webkitVisibilityState);
                        'visible' == c && ((a.fa = 0), a.delayReady());
                      });
                  f = 1;
                  e = 0;
                } else d || (a.u('_d') && (f = 1));
                f &&
                  (a.K.push({ m: c, a: b, t: e }), a.fa || setTimeout(a.delayReady, a.maxDelay));
                return f;
              };
              a.delayReady = function () {
                var c = new Date().getTime(),
                  b = 0,
                  d;
                for (a.u('_d') ? (b = 1) : a.ya(); 0 < a.K.length; ) {
                  d = a.K.shift();
                  if (b && !d.t && d.t > c) {
                    a.K.unshift(d);
                    setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                    break;
                  }
                  a.Ja = 1;
                  a[d.m].apply(a, d.a);
                  a.Ja = 0;
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
                  k = '';
                e = f = '';
                if (a.lightProfileID)
                  (d = a.O), (k = a.lightTrackVars) && (k = ',' + k + ',' + a.ka.join(',') + ',');
                else {
                  d = a.g;
                  if (a.pe || a.linkType)
                    (k = a.linkTrackVars),
                      (f = a.linkTrackEvents),
                      a.pe &&
                        ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                        a[e] && ((k = a[e].ac), (f = a[e].$b)));
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
                                a.Pa(n) &&
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
              a.Nb = function () {
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
                  (b = a.O), (n = a.lightTrackVars) && (n = ',' + n + ',' + a.ka.join(',') + ',');
                else {
                  b = a.g;
                  if (a.pe || a.linkType)
                    (n = a.linkTrackVars),
                      (m = a.linkTrackEvents),
                      a.pe &&
                        ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                        a[e] && ((n = a[e].ac), (m = a[e].$b)));
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
                      : 'marketingCloudOrgID' == e &&
                        r &&
                        a.V('ECID') &&
                        (g = r.marketingCloudOrgID));
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
                        a.Pa(k) &&
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
                a.ja && ((c += '&lrt=' + a.ja), (a.ja = null));
                return c;
              };
              a.B = function (a) {
                var b = a.tagName;
                if (
                  'undefined' != '' + a.hc ||
                  ('undefined' != '' + a.Wb && 'HTML' != ('' + a.Wb).toUpperCase())
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
              a.La = function (a) {
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
                  ((e =
                    a.protocol && 1 < a.protocol.length
                      ? a.protocol
                      : b.protocol
                      ? b.protocol
                      : ''),
                  (f = b.pathname.lastIndexOf('/')),
                  (d =
                    (e ? e + '//' : '') +
                    (a.host ? a.host : b.host ? b.host : '') +
                    ('/' != d.substring(0, 1)
                      ? b.pathname.substring(0, 0 > f ? 0 : f) + '/'
                      : '') +
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
                    : (e = a.La(c)),
                  e)
                  ? { id: e.substring(0, 100), type: g }
                  : 0;
              };
              a.fc = function (c) {
                for (var b = a.B(c), d = a.L(c); c && !d && 'BODY' != b; )
                  if ((c = c.parentElement ? c.parentElement : c.parentNode))
                    (b = a.B(c)), (d = a.L(c));
                (d && 'BODY' != b) || (c = 0);
                c &&
                  ((b = c.onclick ? '' + c.onclick : ''),
                  0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) &&
                  (c = 0);
                return c;
              };
              a.Vb = function () {
                var c,
                  b,
                  d = a.linkObject,
                  f = a.linkType,
                  e = a.linkURL,
                  g,
                  k;
                a.la = 1;
                d || ((a.la = 0), (d = a.clickObject));
                if (d) {
                  c = a.B(d);
                  for (b = a.L(d); d && !b && 'BODY' != c; )
                    if ((d = d.parentElement ? d.parentElement : d.parentNode))
                      (c = a.B(d)), (b = a.L(d));
                  (b && 'BODY' != c) || (d = 0);
                  if (d && !a.linkObject) {
                    var l = d.onclick ? '' + d.onclick : '';
                    if (0 <= l.indexOf('.tl(') || 0 <= l.indexOf('.trackLink(')) d = 0;
                  }
                } else a.la = 1;
                !e && d && (e = a.La(d));
                e &&
                  !a.linkLeaveQueryString &&
                  ((g = e.indexOf('?')), 0 <= g && (e = e.substring(0, g)));
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
                    a.Oa(l) &&
                      (a.linkInternalFilters || (a.linkInternalFilters = h.location.hostname),
                      (g = 0),
                      a.linkExternalFilters
                        ? ((g = a.linkExternalFilters.toLowerCase().split(',')), (m = 1))
                        : a.linkInternalFilters &&
                          (g = a.linkInternalFilters.toLowerCase().split(',')),
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
              a.Ob = function () {
                var c = a.la,
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
                if (a.trackClickMap || a.trackInlineStats || a.Rb()) {
                  var b = {},
                    d = 0,
                    e = a.pb(),
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
                                ((a.e += ('&' != l.charAt(0) ? '&' : '') + l),
                                (b[l] = []),
                                (d = 1))),
                              k = 0;
                            k < b[l].length;
                            k++
                          )
                            (g = b[l][k]),
                              g == f[h] &&
                                (e &&
                                  (a.e +=
                                    '&u=' +
                                    a.escape(g) +
                                    ('&' != l.charAt(0) ? '&' : '') +
                                    l +
                                    '&u=0'),
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
                          ((e += (e ? '&' : '') + a.escape(b[l].join(',')) + '=' + a.escape(l)),
                          k--);
                      a.wb(e);
                    }
                  }
                }
                return c;
              };
              a.pb = function () {
                if (a.useLinkTrackSessionStorage) {
                  if (a.Ca()) return h.sessionStorage.getItem(a.P);
                } else return a.cookieRead(a.P);
              };
              a.Ca = function () {
                return h.sessionStorage ? !0 : !1;
              };
              a.wb = function (c) {
                a.useLinkTrackSessionStorage
                  ? a.Ca() && h.sessionStorage.setItem(a.P, c)
                  : a.cookieWrite(a.P, c);
              };
              a.Pb = function () {
                if (!a.Zb) {
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
                    a.b.addBehavior('#default#homePage'), (m = a.b.gc(b) ? 'Y' : 'N');
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
                  a.Zb = 1;
                }
              };
              a.Q = {};
              a.loadModule = function (c, b) {
                var d = a.Q[c];
                if (!d) {
                  d = h['AppMeasurement_Module_' + c]
                    ? new h['AppMeasurement_Module_' + c](a)
                    : {};
                  a.Q[c] = a[c] = d;
                  d.ib = function () {
                    return d.sb;
                  };
                  d.xb = function (b) {
                    if ((d.sb = b))
                      (a[c + '_onLoad'] = b), a.ea(c + '_onLoad', [a, d], 1) || b(a, d);
                  };
                  try {
                    Object.defineProperty
                      ? Object.defineProperty(d, 'onLoad', { get: d.ib, set: d.xb })
                      : (d._olc = 1);
                  } catch (f) {
                    d._olc = 1;
                  }
                }
                b && ((a[c + '_onLoad'] = b), a.ea(c + '_onLoad', [a, d], 1) || b(a, d));
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
              a.Rb = function () {
                return a.ActivityMap && a.ActivityMap._c ? !0 : !1;
              };
              a.Sb = function () {
                var c = Math.floor(10000000000000 * Math.random()),
                  b = a.visitorSampling,
                  d = a.visitorSamplingGroup,
                  d =
                    's_vsn_' +
                    (a.visitorNamespace ? a.visitorNamespace : a.account) +
                    (d ? '_' + d : ''),
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
                  for (f = 0 < d ? a.Ea : a.g, e = 0; e < f.length; e++)
                    if (((g = f[e]), (k = c[g]) || c['!' + g])) {
                      if (k && !b && ('contextData' == g || 'retrieveLightData' == g) && a[g])
                        for (h in a[g]) k[h] || (k[h] = a[g][h]);
                      a[g] || (m['!' + g] = 1);
                      m[g] = a[g];
                      a[g] = k;
                    }
                return m;
              };
              a.cc = function (c) {
                var b, d, f, e;
                for (b = 0; 2 > b; b++)
                  for (d = 0 < b ? a.Ea : a.g, f = 0; f < d.length; f++)
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
              a.Jb = function (a) {
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
              a.bb = function (c) {
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
              a.ba = !1;
              a.H = !1;
              a.zb = function () {
                a.H = !0;
                a.p();
              };
              a.I = !1;
              a.Ab = function (c) {
                a.marketingCloudVisitorID = c.MCMID;
                a.visitorOptedOut = c.MCOPTOUT;
                a.analyticsVisitorID = c.MCAID;
                a.audienceManagerLocationHint = c.MCAAMLH;
                a.audienceManagerBlob = c.MCAAMB;
                a.I = !1;
                a.p();
              };
              a.ab = function (c) {
                a.maxDelay || (a.maxDelay = 250);
                return a.u('_d')
                  ? (c &&
                      setTimeout(function () {
                        c();
                      }, a.maxDelay),
                    !1)
                  : !0;
              };
              a.Z = !1;
              a.G = !1;
              a.ya = function () {
                a.G = !0;
                a.p();
              };
              a.isReadyToTrack = function () {
                var c = !0;
                if (!a.mb() || !a.kb()) return !1;
                a.ob() || (c = !1);
                a.rb() || (c = !1);
                return c;
              };
              a.mb = function () {
                a.ba || a.H || (a.bb(a.zb) ? (a.H = !0) : (a.ba = !0));
                return a.ba && !a.H ? !1 : !0;
              };
              a.kb = function () {
                var c = a.va();
                if (c)
                  if (a.ra || a.aa)
                    if (a.ra) {
                      if (!c.isApproved(c.Categories.ANALYTICS)) return !1;
                    } else return !1;
                  else return c.fetchPermissions(a.tb, !0), (a.aa = !0), !1;
                return !0;
              };
              a.V = function (c) {
                var b = a.va();
                return b && !b.isApproved(b.Categories[c]) ? !1 : !0;
              };
              a.va = function () {
                return h.adobe && h.adobe.optIn ? h.adobe.optIn : null;
              };
              a.Y = !0;
              a.ob = function () {
                var c = a.T();
                if (!c || !c.getVisitorValues) return !0;
                a.Y && ((a.Y = !1), a.I || ((a.I = !0), c.getVisitorValues(a.Ab)));
                return !a.I;
              };
              a.T = function () {
                var c = a.visitor;
                c && !c.isAllowed() && (c = null);
                return c;
              };
              a.rb = function () {
                a.Z || a.G || (a.ab(a.ya) ? (a.G = !0) : (a.Z = !0));
                return a.Z && !a.G ? !1 : !0;
              };
              a.aa = !1;
              a.tb = function () {
                a.aa = !1;
                a.ra = !0;
              };
              a.j = q;
              a.q = 0;
              a.callbackWhenReadyToTrack = function (c, b, d) {
                var f;
                f = {};
                f.Eb = c;
                f.Db = b;
                f.Bb = d;
                a.j == q && (a.j = []);
                a.j.push(f);
                0 == a.q && (a.q = setInterval(a.p, 100));
              };
              a.p = function () {
                var c;
                if (a.isReadyToTrack() && (a.yb(), a.j != q))
                  for (; 0 < a.j.length; ) (c = a.j.shift()), c.Db.apply(c.Eb, c.Bb);
              };
              a.yb = function () {
                a.q && (clearInterval(a.q), (a.q = 0));
              };
              a.ta = function (c) {
                var b,
                  d = {};
                a.cc(d);
                if (c != q) for (b in c) d[b] = c[b];
                a.callbackWhenReadyToTrack(a, a.Da, [d]);
                a.Ba();
              };
              a.Lb = function () {
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
              a.Da = function (c) {
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
                a.Sb() &&
                  !a.visitorOptedOut &&
                  (a.wa() || (a.fid = a.Lb()),
                  a.Vb(),
                  a.usePlugins && a.doPlugins && a.doPlugins(a),
                  a.account &&
                    (a.abort ||
                      (a.trackOffline &&
                        !a.timestamp &&
                        (a.timestamp = Math.floor(b.getTime() / 1000)),
                      (c = h.location),
                      a.pageURL || (a.pageURL = c.href ? c.href : c),
                      a.referrer ||
                        a.Za ||
                        ((c = a.Util.getQueryParam('adobe_mc_ref', null, null, !0)),
                        (a.referrer =
                          c || void 0 === c ? (void 0 === c ? '' : c) : p.document.referrer)),
                      (a.Za = 1),
                      (a.referrer = a.Jb(a.referrer)),
                      a.u('_g')),
                    a.Ob() &&
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
                      a.Pb(),
                      (f += a.Nb()),
                      a.qb(d, f),
                      a.u('_t'),
                      (a.referrer = ''))));
                a.Ba();
                g && a.S(g, 1);
              };
              a.t = a.track = function (c, b) {
                b && a.S(b);
                a.Y = !0;
                a.isReadyToTrack()
                  ? null != a.j && 0 < a.j.length
                    ? (a.ta(c), a.p())
                    : a.Da(c)
                  : a.ta(c);
              };
              a.Ba = function () {
                a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = h.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = a.useBeacon = a.referrer = 0;
              };
              a.Aa = [];
              a.registerPreTrackCallback = function (c) {
                for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
                'function' == typeof c
                  ? a.Aa.push([c, b])
                  : a.debugTracking &&
                    a.C('DEBUG: Non function type passed to registerPreTrackCallback');
              };
              a.fb = function (c) {
                a.ua(a.Aa, c);
              };
              a.za = [];
              a.registerPostTrackCallback = function (c) {
                for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
                'function' == typeof c
                  ? a.za.push([c, b])
                  : a.debugTracking &&
                    a.C('DEBUG: Non function type passed to registerPostTrackCallback');
              };
              a.eb = function (c) {
                a.ua(a.za, c);
              };
              a.ua = function (c, b) {
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
              a.qb = function (c, b) {
                var d =
                  a.gb() +
                  '/' +
                  c +
                  '?AQB=1&ndh=1&pf=1&' +
                  (a.xa() ? 'callback=s_c_il[' + a._in + '].doPostbacks&et=1&' : '') +
                  b +
                  '&AQE=1';
                a.fb(d);
                a.cb(d);
                a.U();
              };
              a.gb = function () {
                var c = a.hb();
                return (
                  'http' +
                  (a.ssl ? 's' : '') +
                  '://' +
                  c +
                  '/b/ss/' +
                  a.account +
                  '/' +
                  (a.mobile ? '5.' : '') +
                  (a.xa() ? '10' : '1') +
                  '/JS-' +
                  a.version +
                  (a.Yb ? 'T' : '') +
                  (a.tagContainerMarker ? '-' + a.tagContainerMarker : '')
                );
              };
              a.xa = function () {
                return (
                  (a.AudienceManagement && a.AudienceManagement.isReady()) || 0 != a.usePostbacks
                );
              };
              a.hb = function () {
                var c = a.dc,
                  b = a.trackingServer;
                b
                  ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure)
                  : ((c = c ? ('' + c).toLowerCase() : 'd1'),
                    'd1' == c ? (c = '112') : 'd2' == c && (c = '122'),
                    (b = a.jb() + '.' + c + '.2o7.net'));
                return b;
              };
              a.jb = function () {
                var c = a.visitorNamespace;
                c || ((c = a.account.split(',')[0]), (c = c.replace(/[^0-9a-z]/gi, '')));
                return c;
              };
              a.Ya = /{(%?)(.*?)(%?)}/;
              a.bc = RegExp(a.Ya.source, 'g');
              a.Ib = function (c) {
                if ('object' == typeof c.dests)
                  for (var b = 0; b < c.dests.length; ++b) {
                    var d = c.dests[b];
                    if ('string' == typeof d.c && 'aa.' == d.id.substr(0, 3))
                      for (var f = d.c.match(a.bc), e = 0; e < f.length; ++e) {
                        var g = f[e],
                          k = g.match(a.Ya),
                          h = '';
                        '%' == k[1] && 'timezone_offset' == k[2]
                          ? (h = new Date().getTimezoneOffset())
                          : '%' == k[1] && 'timestampz' == k[2] && (h = a.Mb());
                        d.c = d.c.replace(g, a.escape(h));
                      }
                  }
              };
              a.Mb = function () {
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
              a.pa = {};
              a.doPostbacks = function (c) {
                if ('object' == typeof c)
                  if (
                    (a.Ib(c),
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
                        ((a.pa[d.id] = new Image()),
                        (a.pa[d.id].alt = ''),
                        (a.pa[d.id].src = d.c));
                    }
              };
              a.cb = function (c) {
                a.i || a.Qb();
                a.i.push(c);
                a.ia = a.A();
                a.Wa();
              };
              a.Qb = function () {
                a.i = a.Tb();
                a.i || (a.i = []);
              };
              a.Tb = function () {
                var c, b;
                if (a.oa()) {
                  try {
                    (b = h.localStorage.getItem(a.ma())) && (c = h.JSON.parse(b));
                  } catch (d) {}
                  return c;
                }
              };
              a.oa = function () {
                var c = !0;
                (a.trackOffline && a.offlineFilename && h.localStorage && h.JSON) || (c = !1);
                return c;
              };
              a.Ma = function () {
                var c = 0;
                a.i && (c = a.i.length);
                a.l && c++;
                return c;
              };
              a.U = function () {
                if (a.l && (a.v && a.v.complete && a.v.D && a.v.R(), a.l)) return;
                a.Na = q;
                if (a.na) a.ia > a.N && a.Ua(a.i), a.qa(500);
                else {
                  var c = a.Cb();
                  if (0 < c) a.qa(c);
                  else if ((c = a.Ka())) (a.l = 1), a.Ub(c), a.Xb(c);
                }
              };
              a.qa = function (c) {
                a.Na || (c || (c = 0), (a.Na = setTimeout(a.U, c)));
              };
              a.Cb = function () {
                var c;
                if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
                c = a.A() - a.Sa;
                return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
              };
              a.Ka = function () {
                if (0 < a.i.length) return a.i.shift();
              };
              a.Ub = function (c) {
                if (a.debugTracking) {
                  var b = 'AppMeasurement Debug: ' + c;
                  c = c.split('&');
                  var d;
                  for (d = 0; d < c.length; d++) b += '\n\t' + a.unescape(c[d]);
                  a.C(b);
                }
              };
              a.wa = function () {
                return a.marketingCloudVisitorID || a.analyticsVisitorID;
              };
              a.X = !1;
              var t;
              try {
                t = JSON.parse('{"x":"y"}');
              } catch (w) {
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
              a.Xb = function (c) {
                var b, d, f;
                a.lb(c) &&
                  ((d = 1),
                  (b = {
                    send: function (c) {
                      a.useBeacon = !1;
                      navigator.sendBeacon(c) ? b.R() : b.ga();
                    },
                  }));
                !b &&
                  a.wa() &&
                  2047 < c.length &&
                  (a.$a() && ((d = 2), (b = new XMLHttpRequest())),
                  b &&
                    ((a.AudienceManagement && a.AudienceManagement.isReady()) ||
                      0 != a.usePostbacks) &&
                    (a.X ? (b.Fa = !0) : (b = 0)));
                !b && a.Xa && (c = c.substring(0, 2047));
                !b &&
                  a.d.createElement &&
                  (0 != a.usePostbacks ||
                    (a.AudienceManagement && a.AudienceManagement.isReady())) &&
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
                b.Ta = Date.now();
                b.Ha = function () {
                  try {
                    b.D && (clearTimeout(b.D), (b.D = 0));
                  } catch (a) {}
                };
                b.onload = b.R = function () {
                  b.Ta && (a.ja = Date.now() - b.Ta);
                  a.eb(c);
                  b.Ha();
                  a.Gb();
                  a.ca();
                  a.l = 0;
                  a.U();
                  if (b.Fa) {
                    b.Fa = !1;
                    try {
                      a.doPostbacks(a.W(b.responseText));
                    } catch (d) {}
                  }
                };
                b.onabort = b.onerror = b.ga = function () {
                  b.Ha();
                  (a.trackOffline || a.na) && a.l && a.i.unshift(a.Fb);
                  a.l = 0;
                  a.ia > a.N && a.Ua(a.i);
                  a.ca();
                  a.qa(500);
                };
                b.onreadystatechange = function () {
                  4 == b.readyState && (200 == b.status ? b.R() : b.ga());
                };
                a.Sa = a.A();
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
                  if (a.Qa)
                    try {
                      f.removeChild(a.Qa);
                    } catch (e) {}
                  f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                  a.Qa = a.v;
                }
                b.D = setTimeout(function () {
                  b.D && (b.complete ? b.R() : (a.trackOffline && b.abort && b.abort(), b.ga()));
                }, 5000);
                a.Fb = c;
                a.v = h['s_i_' + a.replace(a.account, ',', '_')] = b;
                if ((a.useForcedLinkTracking && a.J) || a.bodyClickFunction)
                  a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
                    (a.da = setTimeout(a.ca, a.forcedLinkTrackingTimeout));
              };
              a.lb = function (c) {
                var b = !1;
                navigator.sendBeacon && (a.nb(c) ? (b = !0) : a.useBeacon && (b = !0));
                a.vb(c) && (b = !1);
                return b;
              };
              a.nb = function (a) {
                return a && 0 < a.indexOf('pe=lnk_e') ? !0 : !1;
              };
              a.vb = function (a) {
                return 64000 <= a.length;
              };
              a.$a = function () {
                return 'undefined' !== typeof XMLHttpRequest &&
                  'withCredentials' in new XMLHttpRequest()
                  ? !0
                  : !1;
              };
              a.Gb = function () {
                if (a.oa() && !(a.Ra > a.N))
                  try {
                    h.localStorage.removeItem(a.ma()), (a.Ra = a.A());
                  } catch (c) {}
              };
              a.Ua = function (c) {
                if (a.oa()) {
                  a.Wa();
                  try {
                    h.localStorage.setItem(a.ma(), h.JSON.stringify(c)), (a.N = a.A());
                  } catch (b) {}
                }
              };
              a.Wa = function () {
                if (a.trackOffline) {
                  if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
                  for (; a.i.length > a.offlineLimit; ) a.Ka();
                }
              };
              a.forceOffline = function () {
                a.na = !0;
              };
              a.forceOnline = function () {
                a.na = !1;
              };
              a.ma = function () {
                return a.offlineFilename + '-' + a.visitorNamespace + a.account;
              };
              a.A = function () {
                return new Date().getTime();
              };
              a.Oa = function (a) {
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
                a.Yb = c;
                for (b = 0; b < a._il.length; b++)
                  if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
                    a.S(d);
                    if (d.lmq)
                      for (b = 0; b < d.lmq.length; b++) (f = d.lmq[b]), a.loadModule(f.n);
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
                  if (document.documentMode) return document.documentMode;
                  for (var a = 7; 4 < a; a--) {
                    var b = document.createElement('div');
                    b.innerHTML = '<!--[if IE ' + a + ']><span></span><![endif]-->';
                    if (b.getElementsByTagName('span').length) return a;
                  }
                  return null;
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
              a.ka = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
                ' '
              );
              a.O = a.ka.slice(0);
              a.Ea = 'account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement'.split(
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
              a.offlineThrottleDelay = 0;
              a.offlineFilename = 'AppMeasurement.offline';
              a.P = 's_sq';
              a.Sa = 0;
              a.ia = 0;
              a.N = 0;
              a.Ra = 0;
              a.linkDownloadFileTypes =
                'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
              a.w = h;
              a.d = h.document;
              try {
                if (((a.Xa = !1), navigator)) {
                  var v = navigator.userAgent;
                  if (
                    'Microsoft Internet Explorer' == navigator.appName ||
                    0 <= v.indexOf('MSIE ') ||
                    (0 <= v.indexOf('Trident/') && 0 <= v.indexOf('Windows NT 6'))
                  )
                    a.Xa = !0;
                }
              } catch (x) {}
              a.ca = function () {
                a.da && (h.clearTimeout(a.da), (a.da = q));
                a.bodyClickTarget && a.J && a.bodyClickTarget.dispatchEvent(a.J);
                a.bodyClickFunction &&
                  ('function' == typeof a.bodyClickFunction
                    ? a.bodyClickFunction()
                    : a.bodyClickTarget &&
                      a.bodyClickTarget.href &&
                      (a.d.location = a.bodyClickTarget.href));
                a.bodyClickTarget = a.J = a.bodyClickFunction = 0;
              };
              a.Va = function () {
                const $___old_e78c860533c8c379 = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_e78c860533c8c379)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_f41e7bff56ded01f.userAgent
                    ));
                  return function () {
                    a.b = a.d.body;
                    a.b
                      ? ((a.r = function (c) {
                          var b, d, f, e, g;
                          if (
                            !(
                              (a.d && a.d.getElementById('cppXYctnr')) ||
                              (c && c['s_fe_' + a._in])
                            )
                          ) {
                            if (a.Ga)
                              if (a.useForcedLinkTracking)
                                a.b.removeEventListener('click', a.r, !1);
                              else {
                                a.b.removeEventListener('click', a.r, !0);
                                a.Ga = a.useForcedLinkTracking = 0;
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
                                a.ha && (clearTimeout(a.ha), (a.ha = 0));
                                a.ha = setTimeout(function () {
                                  a.M == k && (a.M = 0);
                                }, 10000);
                                f = a.Ma();
                                a.track();
                                if (f < a.Ma() && a.useForcedLinkTracking && c.target) {
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
                                    a.Oa(g) || (g = 0),
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
                              ((a.Ga = 1),
                              (a.useForcedLinkTracking = 1),
                              a.b.addEventListener('click', a.r, !0)),
                            a.b.addEventListener('click', a.r, !1)))
                      : setTimeout(a.Va, 30);
                  }.apply(this, arguments);
                } finally {
                  if ($___old_e78c860533c8c379)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_e78c860533c8c379
                    ));
                }
              };
              a.Hb();
              a.ic ||
                (r
                  ? a.setAccount(r)
                  : a.C('Error, missing Report Suite ID in AppMeasurement initialization'),
                a.Va(),
                a.loadModule('ActivityMap'));
            }.apply(this, arguments);
          } finally {
            if ($___old_1a6ee38d451ed4f2)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_1a6ee38d451ed4f2
              ));
          }
        };
        function s_gi (r) {
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
        AppMeasurement.getInstance = s_gi;
        window.s_objectID || (window.s_objectID = 0);
        function s_pgicq () {
          var r = window,
            a = r.s_giq,
            h,
            q,
            p;
          if (a)
            for (h = 0; h < a.length; h++)
              (q = a[h]),
                (p = s_gi(q.oun)),
                p.setAccount(q.un),
                p.setTagContainer(q.tagContainerName);
          r.s_giq = 0;
        }
        s_pgicq();
      },
      3007710,
      496139
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['ICom - Button Click to QB'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var countingMethod = 'standard';
          var dl = 'dataLayer';
          var floodLightId = 'DC-8344993';
          var send_to = [];
          if (floodLightId) {
            var receiver = floodLightId + '/' + 'int_00' + '/' + 'intui001' + '+' + countingMethod;
            send_to.push(receiver);
          } else {
            var ids = [];
            for (var i in ids) {
              var receiver = ids[i] + '/' + 'int_00' + '/' + 'intui001' + '+' + countingMethod;
              send_to.push(receiver);
            }
          }
          var allow_custom_scripts = 'true' == 'true' ? true : false;
          var eventObj = { allow_custom_scripts: allow_custom_scripts, send_to: send_to };
          if (countingMethod === 'per_session') if ('') eventObj.session_id = '';
          if (countingMethod === 'transactions') {
            if ('') eventObj.value = '';
            if ('') eventObj.transaction_id = '';
            if ('') eventObj.quantity = '';
          }
          window[dl] = window[dl] || [];
          window.gtag =
            window.gtag ||
            function gtag () {
              window[dl].push(arguments);
            };
          gtag('event', 'conversion', eventObj);
        });
      },
      2762233,
      [2762202],
      585584,
      [585580]
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(
          [
            'ICom - Button Click to Mint',
            'ICom - Button Click to ProConnect',
            'ICom - Button Click to QB',
            'ICom - Button Click to TT',
          ],
          function () {
            var ensEventContext = this;
            if (ensEventContext == window) ensEventContext = undefined;
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var countingMethod = 'standard';
            var dl = 'dataLayer';
            var floodLightId = 'DC-8344993';
            var send_to = [];
            if (floodLightId) {
              var receiver = floodLightId + '/' + 'all_00' + '/' + 'intui0' + '+' + countingMethod;
              send_to.push(receiver);
            } else {
              var ids = [];
              for (var i in ids) {
                var receiver = ids[i] + '/' + 'all_00' + '/' + 'intui0' + '+' + countingMethod;
                send_to.push(receiver);
              }
            }
            var allow_custom_scripts = 'true' == 'true' ? true : false;
            var eventObj = { allow_custom_scripts: allow_custom_scripts, send_to: send_to };
            if (countingMethod === 'per_session') if ('') eventObj.session_id = '';
            if (countingMethod === 'transactions') {
              if ('') eventObj.value = '';
              if ('') eventObj.transaction_id = '';
              if ('') eventObj.quantity = '';
            }
            window[dl] = window[dl] || [];
            window.gtag =
              window.gtag ||
              function gtag () {
                window[dl].push(arguments);
              };
            gtag('event', 'conversion', eventObj);
          }
        );
      },
      2762237,
      [2762202],
      585587,
      [585580]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        window._waConfig = window._waConfig || {};
        var config = window._waConfig;
        config.lastUpdate = config.lastUpdate || [];
        config.lastUpdate.push('2020|11|16');
        config.dataReady = true;
        window._waDataElements = window._waDataElements || {};
        var dataElements = window._waDataElements;
        dataElements.articleTitle = {
          definition: function (data, config, utils, wa) {
            if (window.LITHIUM.CommunityJsonObject.Page.object.subject)
              return window.LITHIUM.CommunityJsonObject.Page.object.subject;
            else return null;
          },
        };
        dataElements.articleId = {
          definition: function (data, config, utils, wa) {
            if (window.LITHIUM.CommunityJsonObject.Page.object.id)
              return window.LITHIUM.CommunityJsonObject.Page.object.id;
            else return null;
          },
        };
        dataElements.articleProductType = {
          definition: function (data, config, utils, wa) {
            try {
              var metas = document.getElementsByTagName('meta');
              var metaVals = '';
              for (var i = 0; i < metas.length; i++)
                if (metas[i].getAttribute('property') === 'article:tag')
                  metaVals = metaVals + metas[i].getAttribute('content') + '|';
              if (metaVals != '') {
                metaVals = metaVals.substring(0, metaVals.length - 1);
                return metaVals;
              } else return null;
            } catch (err) {
              console.error('[wa - getMeta] -> Error \n');
              return null;
            }
          },
        };
        dataElements.cookie = {
          runOrder: 'first',
          definition: function (data, config, utils, wa) {
            return utils.getAllCookies();
          },
        };
        dataElements.queryString = {
          runOrder: 'first',
          definition: function (data, config, utils, wa) {
            return utils.getAllQueryStringParams(undefined, true);
          },
        };
        dataElements.pageUrl = {
          definition: function (data, config, utils, wa) {
            return window.document.location.href;
          },
        };
        dataElements.org = {
          definition: function (data, config, utils, wa) {
            return 'Segment: sbseg';
          },
        };
        dataElements.scope = {
          definition: function (data, config, utils, wa) {
            return 'Segment: quickbooks';
          },
        };
        dataElements.purpose = {
          definition: function (data, config, utils, wa) {
            return 'Segment: care';
          },
        };
        dataElements.cleanUrl = {
          definition: function (data, config, utils, wa) {
            var retVal = data.pageUrl;
            retVal =
              retVal.indexOf('#__utm') > -1 ? retVal.substr(0, retVal.indexOf('#__utm')) : retVal;
            if (data.queryString['gclid']) retVal = retVal.replace(data.queryString['gclid'], '');
            if (data.queryString['_requestid'])
              retVal = retVal.replace(data.queryString['_requestid'], '');
          },
          dependencies: ['pageUrl'],
        };
        dataElements.pageUrlNoQuery = {
          definition: function (data, config, utils, wa) {
            var retVal = [location.protocol, '//', location.host, location.pathname].join('');
            return retVal;
          },
        };
        dataElements.hostname = {
          definition: function (data, config, utils, wa) {
            return window.document.location.hostname;
          },
        };
        dataElements.pathname = {
          definition: function (data, config, utils, wa) {
            return document.location.pathname;
          },
        };
        dataElements.baseDomain = {
          definition: function (data, config, utils, wa) {
            var hostSplit = data.hostname.split('.');
            return hostSplit.slice(-2).join('.');
          },
          dependencies: ['hostname'],
        };
        dataElements.referrer = {
          definition: function () {
            return window.document.referrer || '';
          },
        };
        dataElements.referrerDomain = {
          definition: function (data, config, utils, wa) {
            var allButPath = data.referrer.replace(/(\/\/[^\/]+\/).*/, '$1');
            var cleanDomain = allButPath.replace(/www.|http:|https:|\//g, '');
            cleanDomain =
              cleanDomain.indexOf('mail.') > -1
                ? utils.spliceDelimitedString(cleanDomain, '.', 3)
                : cleanDomain;
            return cleanDomain;
          },
          dependencies: ['referrer'],
        };
        dataElements.referrerPath = {
          definition: function (data, config, utils, wa) {
            var allButPath = data.referrer.replace(/(\/\/[^\/]+\/).*/, '$1');
            var path = data.referrer.replace(allButPath, '');
            return path;
          },
          dependencies: ['referrer'],
        };
        dataElements.refUrlSbg = {
          definition: function (data, config, utils, wa) {
            var refUrlSbg = '';
            if (data.referrer && data.referrer != data.pageUrl) {
              var referrerIsSbg = false;
              for (var i = 0; i < config.internalHostSbg.length; i++)
                if (data.referrerDomain == config.internalHostSbg[i]) {
                  referrerIsSbg = true;
                  break;
                }
              if (!referrerIsSbg) refUrlSbg = data.referrer;
            }
            return refUrlSbg;
          },
          dependencies: ['referrer', 'referrerDomain'],
        };
        dataElements.localRefUrl = {
          definition: function (data, config, utils, wa) {
            var localReferrer = '';
            if (data.referrer) {
              var referralIsLocal = false;
              for (var i = 0; i < data.internalHostArray.length; i++)
                if (data.referrerDomain == data.internalHostArray[i]) {
                  referralIsLocal = true;
                  break;
                }
              if (!referralIsLocal) return data.referrer;
            }
            return localReferrer;
          },
          dependencies: ['referrer', 'referrerDomain', 'internalHostArray'],
        };
        dataElements.refDomainLocal = {
          definition: function (data, config, utils, wa) {
            if (!utils.isVarEmpty(data.localRefUrl)) return data.referrer.split('/')[2];
          },
          dependencies: ['localRefUrl', 'referrer'],
        };
        dataElements.isQBSE = {
          definition: function (data, config, utils, wa) {
            if (data.publishPathCountry == 'us')
              if (
                /.*quickbooks\.intuit\.com/.test(data.hostname) &&
                (/.*\/self\-?employed\/?/.test(data.pathname) ||
                  /\/(pricing|products)\/?/.test(data.pathname) ||
                  /\/(r|oa)\/.*self\-?employ(ed|ment)\-/.test(data.pathname))
              )
                return true;
              else {
                if (/selfemployed/.test(data.hostname)) return true;
              }
            else if (data.publishPathCountry == 'uk') return true;
            return false;
          },
          dependencies: ['hostname', 'pathname', 'publishPathCountry'],
        };
        dataElements.reportSuiteSites = {
          definition: function (data, config, utils, wa) {
            var sites = [];
            if (data.publishPathCountry === 'us' || data.publishPathCountry === 'apps')
              if (data.siteName == 'ems')
                if (data.iopAll === 'true') {
                  sites.push('ems');
                  sites.push('iop');
                } else if (data.iopAll === 'false') sites.push('iop');
                else sites.push('ems');
              else if (data.siteName == 'aag' || data.siteName == 'fms' || data.siteName == 'sbg')
                sites.push('fms');
              else if (data.siteName == 'psd' || data.siteName == 'ims' || data.siteName == 'pcs')
                sites.push('pcs');
              else {
                if (!utils.isVarEmpty(data.siteName)) sites.push(data.siteName);
              }
            else if (data.publishPathCountry) sites.push(data.publishPathCountry);
            else if (wa._log) wa._log('No idea which base report suite to use', 'warn');
            if (data.isQBSE) sites.push('qbse');
            if (!utils.isIn('sbg', sites)) sites.unshift('sbg');
            return sites;
          },
          dependencies: ['siteName', 'iopAll', 'isQBSE', 'publishPathCountry'],
        };
        dataElements.internalHostArray = {
          definition: function (data, config, utils, wa) {
            var internalHosts = [];
            if (
              data.publishPathCountry === 'us' ||
              data.publishPathCountry === 'apps' ||
              data.publishPathCountry === 'int'
            ) {
              for (var i = 0; i < data.reportSuiteSites.length; i++) {
                var site = data.reportSuiteSites[i];
                var siteHostList = config['internalHost' + utils.capitalize(site)];
                if (site == 'sbg' && data.reportSuiteSites.length > 1) continue;
                if (!utils.isVarEmpty(siteHostList))
                  internalHosts = internalHosts.concat(siteHostList);
              }
              if (internalHosts.length > 0)
                internalHosts = internalHosts.concat(config.internalHostAllLocal);
              else {
                config.internalHostQaDomains.push(data.hostname);
                internalHosts = ['hostListNotFound'];
              }
            } else
              internalHosts = config[
                'internalHost' + utils.capitalize(data.publishPathCountry)
              ] || ['hostListNotFound'];
            return internalHosts;
          },
          dependencies: ['hostname', 'reportSuiteSites', 'publishPathCountry'],
        };
        dataElements.isProd = {
          definition: function (data, config, utils, wa) {
            for (var i = 0; i < data.internalHostArray.length; i++)
              if (data.internalHostArray[i] == 'hostListNotFound') return false;
              else if (data.internalHostArray[i] == data.hostname) {
                return true;
                break;
              }
            return false;
          },
          dependencies: ['internalHostArray', 'hostname'],
        };
        dataElements.reportSuiteOverride = {};
        dataElements.reportSuite = {
          definition: function (data, config, utils, wa) {
            if (data.reportSuiteOverride) return data.reportSuiteOverride;
            else {
              var reportSuites = [];
              var rsType = 'qa';
              if (data.isProd) rsType = 'prod';
              for (var i = 0; i < data.reportSuiteSites.length; i++) {
                var site = data.reportSuiteSites[i];
                if (
                  !utils.isVarEmpty(config.reportSuites[site]) &&
                  !utils.isVarEmpty(config.reportSuites[site][rsType])
                )
                  if (!utils.isIn(config.reportSuites[site][rsType], reportSuites))
                    reportSuites.push(config.reportSuites[site][rsType]);
              }
              if (reportSuites.length < 1) reportSuites.push(config.reportSuites.sbg.qa);
              return reportSuites.join(',');
            }
          },
          dependencies: ['reportSuiteSites', 'isProd', 'reportSuiteOverride'],
        };
        dataElements.trackExitLinks = {
          definition: function (data, config, utils, wa) {
            return data.reportSuiteOverride ? true : data.isProd;
          },
          dependencies: ['reportSuiteOverride', 'isProd'],
        };
        dataElements.siteName = {
          useExplicitValue: false,
          definition: function (data, config, utils, wa) {
            var siteName = this.explicitValue || '';
            if (data.publishPathCountry !== 'us' && !siteName) siteName = 'fms';
            if (wa.siteHost.indexOf('intuitmarket') == 0) siteName = 'ics';
            if (siteName === 'psd' || siteName === 'ims') siteName = 'pcs';
            return siteName;
          },
          dependencies: ['publishPathCountry', 'siteHost'],
        };
        dataElements.siteGroup = {
          useExplicitValue: false,
          definition: function (data, config, utils, wa) {
            var siteGroup = this.explicitValue || '';
            if (
              (data.publishPathCountry !== 'us' && !siteGroup) ||
              data.siteHost.indexOf('intuitmarket') == 0
            )
              siteGroup = 'mktg';
            return siteGroup;
          },
          dependencies: ['publishPathCountry', 'siteName'],
        };
        dataElements.siteHost = {
          useExplicitValue: false,
          definition: function (data, config, utils, wa) {
            var siteHost = this.explicitValue || '';
            if (data.publishPathCountry !== 'us' && !siteHost) {
              if (utils.isIn('quickbooks.intuit.com', data.hostname)) siteHost = 'quickbooks';
              if (utils.isIn('zeropaper.com.br', data.hostname)) siteHost = 'zeropaper';
              if (utils.isIn('intuitmarket.intuit.com', data.hostname)) siteHost = 'intuitmarket';
            }
            return siteHost || data.hostname;
          },
          dependencies: ['hostname'],
        };
        dataElements.pagePath = {
          definition: function (data, config, utils, wa) {
            return data.pathname;
          },
          dependencies: ['pathname'],
        };
        dataElements.pageCleanPath = {
          definition: function (data, config, utils, wa) {
            var path = data.pagePath;
            var re = /(\/|^)(var|uk|au|ca|global|eu|br|fr-ca|mx|za|fr|in)(?=\/|$)/g;
            path = re.test(path) ? path.replace(re, '') : path;
            path = path === '/' || path === '' ? 'index' : path;
            if (path.indexOf('/') === 0) path = path.replace('/', '');
            if (path.indexOf(';') > 0) path = path.substr(0, path.indexOf(';'));
            if (path.indexOf('#') === path.length - 1) path = path.replace('#', '');
            if (path.lastIndexOf('/') === path.length - 1)
              path = path.slice(0, path.lastIndexOf('/'));
            if (data.addIndexToPath) {
              if (path.indexOf('.') < 0 && path !== 'index') path += '/';
              if (path.lastIndexOf('/') == path.length - 1) path += 'index';
            }
            if (wa.siteName === 'qbes') {
              var cleanQbesPath = /(^enterprise\/)|(^desktop\/enterprise\/)/;
              path = cleanQbesPath.test(path) ? path.replace(cleanQbesPath, '') : path;
              path = path.replace(/\.jsp$/i, '');
            }
            if (wa.siteName === 'pcs') {
              var cleanPcsPage = /(^desktop\/)/;
              path = cleanPcsPage.test(path) ? path.replace(cleanPcsPage, '') : path;
              path = path.replace(/\.jsp$/i, '');
            }
            if (wa.siteName === 'ems') {
              var cleanEmsPath = /^payroll\//;
              path = cleanEmsPath.test(path) ? path.replace(cleanEmsPath, '') : path;
              path = path.replace(/\.jsp$/i, '');
            }
            return path;
          },
          dependencies: ['pagePath', 'siteName', 'addIndexToPath'],
        };
        dataElements.addIndexToPath = {
          definition: function (data, config, utils, wa) {
            return true;
          },
        };
        dataElements.channel = {
          definition: function (data, config, utils, wa) {
            var retVal;
            retVal = data.siteName ? data.siteName : '';
            retVal += data.siteGroup ? '|' + data.siteGroup : '|';
            return retVal;
          },
          dependencies: ['siteName', 'siteGroup'],
        };
        dataElements.siteGroupSubgroup = {
          definition: function (data, config, utils, wa) {
            var returnValue = '';
            if (!utils.isUndefined(data.siteName)) returnValue += data.siteName;
            if (!utils.isUndefined(data.siteGroup)) returnValue += '|' + data.siteGroup;
            if (!utils.isUndefined(data.siteHost)) returnValue += '|' + data.siteHost;
            return returnValue;
          },
          dependencies: ['siteName', 'siteGroup', 'siteHost'],
        };
        dataElements.pageName = {
          definition: function (data, config, utils, wa) {
            if (data.pageNameOverride) return data.pageNameOverride;
            else {
              var retVal = data.siteGroupSubgroup;
              retVal += data.pageCleanPath ? '|' + data.pageCleanPath : '|';
              retVal = retVal.toLowerCase();
              return retVal;
            }
          },
          dependencies: ['siteGroupSubgroup', 'pageCleanPath', 'pageNameOverride'],
        };
        dataElements.pageNameOverride = { persistent: false };
        dataElements.pageHier = {
          definition: function (data, config, utils, wa) {
            return utils.buildPageHier({ str: data.pageName, max: 15, delim: '|' });
          },
          dependencies: ['pageName'],
        };
        dataElements.eventList = { persistent: false };
        dataElements.adobeEventList = {
          persistent: false,
          runOrder: 'last',
          definition: function (data, config, utils, wa) {
            var eventString = '';
            if (data.eventList) {
              var aryEvents = data.eventList.split(',');
              for (var i = 0; i < aryEvents.length; i++) {
                var eventLowercase = aryEvents[i].toLowerCase();
                var eventName = eventLowercase.split(':')[0];
                var serialId = aryEvents[i].split(':')[1];
                var eventValue = eventName.split('=')[1] || '';
                eventName = eventName.split('=')[0];
                for (var adobeEvent in config.eventNames)
                  if (utils.isIn(eventName, config.eventNames[adobeEvent])) {
                    eventName = adobeEvent;
                    break;
                  }
                if (config.eventSerialIds[eventName] && wa[config.eventSerialIds[eventName]])
                  serialId = data[config.eventSerialIds[eventName]];
                if (eventName == 'event73' && !serialId) return '';
                if (serialId)
                  eventString = utils.appendList(eventString, eventName + ':' + serialId);
                else if (eventValue)
                  eventString = utils.appendList(eventString, eventName + '=' + eventValue);
                else eventString = utils.appendList(eventString, eventName);
              }
            }
            return eventString;
          },
          dependencies: ['eventList'],
        };
        dataElements.linkTrackEvents = {
          persistent: false,
          definition: function (data, config, utils, wa) {
            if (data.adobeEventList) {
              var eventListWithoutSerialization = data.adobeEventList.replace(
                /(:|=)[^,]+,?/g,
                ','
              );
              return eventListWithoutSerialization;
            }
            return '';
          },
          dependencies: ['adobeEventList'],
        };
        dataElements.aryProducts = { persistent: false };
        dataElements.products = {
          persistent: false,
          definition: function (data, config, utils, wa) {
            var retVal = '';
            if (data.aryProducts)
              for (var i = 0; i < data.aryProducts.length; i++) {
                var aProd = ';' + data.aryProducts[i][0];
                aProd += data.aryProducts[i][1] ? ';' + data.aryProducts[i][1] : ';1';
                aProd += data.aryProducts[i][2] ? ';' + data.aryProducts[i][2] : '';
                retVal += retVal ? ',' + aProd : aProd;
              }
            return retVal;
          },
          dependencies: ['aryProducts'],
        };
        dataElements.firstProduct = {
          persistent: false,
          definition: function (data, config, utils, wa) {
            var retVal = '';
            if (data.adobeEventList && data.adobeEventList.indexOf('scAdd') > -1)
              if (data.products) retVal = data.products.split(',')[0].split(';')[1];
            return retVal;
          },
          dependencies: ['adobeEventList', 'products'],
        };
        dataElements.language = {
          definition: function (data, config, utils, wa) {
            var language;
            try {
              var htmlElement = document.getElementsByTagName('html')[0];
              if (!utils.isUndefined(htmlElement)) {
                htmlLang = htmlElement.getAttribute('lang');
                if (!utils.isUndefined(htmlLang)) language = htmlLang.split('-')[0];
              }
              if (utils.isVarEmpty(language)) language = wa.utils.getMetaData('name', 'language');
              if (utils.isVarEmpty(language)) language = 'unknown';
            } catch (error) {}
            return language;
          },
        };
        dataElements.country = {
          definition: function (data, config, utils, wa) {
            var validUrlRegex = /^https?:\/\/(\w+\.)*(\w+\/?)+\/?/,
              urlWithoutProtocol,
              firstPath;
            var pageUrl = data.pageUrl || '';
            if (validUrlRegex.test(pageUrl)) {
              urlWithoutProtocol = pageUrl.split('//')[1];
              firstPath =
                urlWithoutProtocol.indexOf('/') > 0
                  ? urlWithoutProtocol.split('/')[1].split('?')[0].toUpperCase()
                  : '';
              if (config.countryMap && !(firstPath in config.countryMap))
                switch (firstPath) {
                  case 'GLOBAL':
                  case 'EU':
                    firstPath =
                      data.queryString['region'] ||
                      data.cookie['REGION'] ||
                      'unknown: ' + firstPath;
                    break;
                  case 'FR-CA':
                    firstPath = 'CA-FR';
                    break;
                  case 'ZH-HK':
                    firstPath = 'HK-ZH';
                    break;
                  case 'UK':
                    firstPath = 'GB';
                    break;
                  default:
                    firstPath = data.publishPathCountry || 'US';
                }
            } else firstPath = "unknown: '" + pageUrl.substring(0, 10) + "*'";
            firstPath = firstPath.toLowerCase();
            if (firstPath === 'uk') firstPath = 'gb';
            if (
              document.location.hostname.search('quickbooks.intuit.com') > -1 &&
              (document.location.pathname.search('community') > -1 ||
                document.location.pathname.search('learn-support') > -1)
            )
              firstPath = window.getLocale();
            return firstPath;
          },
          dependencies: ['pageUrl', 'publishPathCountry'],
        };
        dataElements.siteLocale = {
          definition: function (data, config, utils, wa) {
            var language = data.language;
            var country = '';
            var htmlElement = document.getElementsByTagName('html')[0];
            if (utils.getType(htmlElement) != 'undefined') {
              htmlLang = htmlElement.getAttribute('lang');
              if (htmlLang) country = htmlLang.split('-')[1];
            }
            if (utils.isVarEmpty(country)) country = data.country;
            if (utils.isVarEmpty(country)) country = 'unknown';
            if (utils.isVarEmpty(language)) language = 'unknown';
            return country.toLowerCase() + '-' + language.toLowerCase();
          },
          dependencies: ['language', 'country'],
        };
        dataElements.sVersion = {
          definition: function (data, config, utils, wa) {
            if (!utils.isUndefined(wa.s)) return wa.s.version;
            else return '';
          },
        };
        dataElements.lastUpdate = {
          definition: function (data, config, utils, wa) {
            config.lastUpdate = config.lastUpdate || [];
            var latestDate = utils.parsePipeDate('1970|1|1');
            for (var i = 0; i < config.lastUpdate.length; i++) {
              var parsedDate = utils.parsePipeDate(config.lastUpdate[i]);
              latestDate = Math.max(latestDate, parsedDate);
            }
            return utils.buildPipeDate(latestDate);
          },
          dependencies: [],
        };
        dataElements.publishPath = {
          definition: function (data, config, utils, wa) {
            if (window.Bootstrapper && window.Bootstrapper.ensightenOptions)
              return window.Bootstrapper.ensightenOptions.publishPath;
            return '';
          },
          dependencies: [],
        };
        dataElements.publishPathCountry = {
          definition: function (data, config, utils, wa) {
            if (
              data.publishPath == 'sbg-dev' ||
              data.publishPath == 'sbg' ||
              data.publishPath == 'ohh_sbg_prod'
            )
              return 'us';
            return data.publishPath.toLowerCase().split('_')[0] || '';
          },
          dependencies: ['publishPath'],
        };
        dataElements.publishPathSite = {
          definition: function (data, config, utils, wa) {
            return data.publishPath.toLowerCase().split('_')[1] || '';
          },
          dependencies: ['publishPath'],
        };
        dataElements.publishPathEnvironment = {
          definition: function (data, config, utils, wa) {
            return data.publishPath.toLowerCase().split('_')[2] || '';
          },
          dependencies: ['publishPath'],
        };
        dataElements.jsLibraryVersion = {
          definition: function (data, config, utils, wa) {
            var retVal = data.sVersion ? data.sVersion : '';
            retVal += ':wa2';
            retVal += '|' + data.lastUpdate;
            retVal += data.publishPath ? '|' + data.publishPath : '';
            return retVal;
          },
          dependencies: ['sVersion', 'lastUpdate', 'publishPath'],
        };
        dataElements.funnelName = {
          useExplicitValue: false,
          definition: function (data, config, utils, wa) {
            var funnelName = this.explicitValue || data.funnelname || '';
            if (!utils.isVarEmpty(funnelName) && !utils.isVarEmpty(data.siteName))
              funnelName = data.siteName + '|' + funnelName;
            return funnelName;
          },
          dependencies: ['siteName'],
        };
        dataElements.linkNameOverride = { persistent: false };
        dataElements.linkOverride = { persistent: false };
        dataElements.excludePageNameFromLink = { persistent: false };
        dataElements.userAction = {
          persistent: false,
          useExplicitValue: false,
          definition: function (data, config, utils, wa) {
            if (data.linkOverride) return data.linkOverride;
            if (utils.isIn('formAnalysis:', data.linkName)) return '';
            var action = data.linkName || this.explicitValue || '';
            action = action.toLowerCase();
            if (
              !utils.isVarEmpty(action) &&
              !utils.isIn('["+pageName+"]', action) &&
              !data.excludePageNameFromLink
            )
              action = 'D="' + action + ' ["+pageName+"]"';
            return action;
          },
          dependencies: ['linkOverride', 'linkName', 'excludePageNameFromLink'],
        };
        dataElements.linkName = {
          persistent: false,
          useExplicitValue: false,
          definition: function (data, config, utils, wa) {
            return data.linkNameOverride || data.linkName || '';
          },
          dependencies: ['linkNameOverride'],
        };
        dataElements.trackType = {
          persistent: false,
          useExplicitValue: false,
          definition: function (data, config, utils, wa) {
            var trackType = data.trackType || 'wa.track';
            if (data.linkName) trackType = 'link|' + trackType;
            else trackType = 'page|' + trackType;
            return trackType;
          },
          dependencies: ['linkName'],
        };
        dataElements.pageOrAction = {
          definition: function (data, config, utils, wa) {
            return data.userAction ? data.userAction : data.pageName;
          },
          dependencies: ['userAction', 'pageName'],
        };
        dataElements.cid = {
          definition: function (data, config, utils, wa) {
            var retVal;
            retVal = data.queryString.cid;
            var kbid = data.queryString.kbid,
              msclkid = data.queryString.msclkid,
              gclid = data.queryString.gclid;
            retVal = !retVal ? (kbid ? 'aff_kb_' + kbid : '') : retVal;
            retVal = !retVal ? (data.isSaa ? 'saa' : '') : retVal;
            if (utils.isVarEmpty(retVal)) {
              var medium = data.queryString.utm_medium || '',
                source = data.queryString.utm_source || '',
                content = data.queryString.utm_content || '',
                campaign = data.queryString.utm_campaign || '';
              if (medium || source) {
                retVal = medium + '_' + source;
                if (content || campaign)
                  retVal += '_' + content + (campaign ? '_' + campaign : '');
              }
            }
            retVal = !retVal ? (gclid ? 'ppc_gg_' + gclid : '') : retVal;
            retVal = !retVal ? (msclkid ? 'ppc_ms_' + msclkid : '') : retVal;
            if (retVal.indexOf('Z0N') >= 0) retVal = retVal.substring(12);
            return retVal;
          },
        };
        dataElements.campaignPrefix = {
          definition: function (data, config, utils, wa) {
            if (data.cid)
              if (data.cid.indexOf('_') > -1) return data.cid.split('_')[0];
              else return data.cid;
          },
          dependencies: ['cid'],
        };
        dataElements.isSocial = {
          definition: function (data, config, utils, wa) {
            for (var site in config.socialSites)
              if (config.socialSites[site].pattern.test(data.referrerDomain)) return true;
            return false;
          },
          dependencies: ['referrerDomain'],
        };
        dataElements.searchTerm = {
          definition: function (data, config, utils, wa) {
            if (
              data.searchSite &&
              !utils.isVarEmpty(config.searchSites[data.searchSite].searchParam)
            ) {
              var referrerParams = utils.getAllQueryStringParams(data.referrer);
              var searchParam = config.searchSites[data.searchSite].searchParam;
              if (referrerParams[searchParam]) return referrerParams[searchParam];
              else {
                var otherParamsToTry = ['wakw', 'raw_kw', 'raw_keyword', 'keyword'];
                for (var i = 0; i < otherParamsToTry.length; i++)
                  if (referrerParams[otherParamsToTry[i]])
                    return referrerParams[otherParamsToTry[i]];
                return 'not provided|' + data.searchSite;
              }
            }
          },
          dependencies: ['cid', 'searchSite', 'referrer', 'referrerDomain', 'referrerPath'],
        };
        dataElements.searchSite = {
          definition: function (data, config, utils, wa) {
            for (var site in config.searchSites)
              if (config.searchSites[site].pattern.test(data.referrerDomain)) return site;
            return '';
          },
          dependencies: ['referrerDomain'],
        };
        dataElements.trafficType = {
          definition: function (data, config, utils, wa) {
            if (data.searchSite)
              if (data.cid) return 'ppc';
              else return 'seo';
            else if (data.cid && data.campaignPrefix) return data.campaignPrefix;
            else if (data.isSocial) {
              if (data.referrerDomain) return 'soc';
            } else if (data.referrerDomain) {
              var domainList = config.internalReferralDomains || [data.hostname];
              for (var i = 0; i < domainList.length; i++) {
                var domainToCheck = domainList[i];
                if (domainToCheck.slice(0, 4) == 'www.') domainToCheck = domainToCheck.slice(4);
                if (utils.endsWith(data.referrerDomain, domainToCheck)) return '';
              }
              return 'ref';
            }
            return '';
          },
          dependencies: [
            'cid',
            'searchSite',
            'campaignPrefix',
            'isSocial',
            'referrerDomain',
            'hostname',
          ],
        };
        dataElements.ppckw = {
          definition: function (data, config, utils, wa) {
            if (data.trafficType)
              if (data.trafficType == 'ppc') return data.searchTerm;
              else return '(not paid search)';
          },
          dependencies: ['searchTerm', 'trafficType'],
        };
        dataElements.natkw = {
          definition: function (data, config, utils, wa) {
            if (data.trafficType)
              if (data.trafficType == 'seo') return data.searchTerm;
              else return '(not organic search)';
          },
          dependencies: ['searchTerm', 'trafficType'],
        };
        dataElements.urs = {
          definition: function (data, config, utils, wa) {
            if (data.cid) return data.cid;
            else if (utils.isIn(data.trafficType, ['seo', 'soc', 'ref']))
              return data.referrerDomain + ' [' + data.trafficType + ']';
          },
          dependencies: ['cid', 'trafficType', 'referrerDomain'],
        };
        dataElements.campaignStack = {
          definition: function (data, config, utils, wa) {
            if (data.trafficType) {
              var channelStack = utils.stackCookie('sc_sbg_cmp_cvp', data.trafficType, {
                stackLength: 5,
                delimiter: ',',
                expirationDays: 90,
                domain: data.baseDomain,
              });
              return channelStack.split(',').reverse().join('|');
            }
          },
          dependencies: ['trafficType', 'baseDomain'],
        };
        dataElements.internalCampaign = {
          definition: function (data, config, utils, wa) {
            var retVal = data.queryString['scid'] || data.queryString['xcid'] || '';
            return retVal.toLowerCase();
          },
        };
        dataElements.priorityCode = {
          definition: function (data, config, utils, wa) {
            var retVal = data.queryString['prioritycode'] || data.cookie['priorityCode'] || '';
            return retVal.toLowerCase();
          },
        };
        dataElements.iksmUserId = {
          definition: function (data, config, utils, wa) {
            var retVal = data.cookie['iksm.intuit.com#auth-token'] || '';
            if (retVal) {
              const base64Url = retVal.split('.')[1];
              const base64 = base64Url.replace('-', '+').replace('_', '/');
              retVal = JSON.parse(window.atob(base64)).sub;
            }
            return retVal.toLowerCase();
          },
        };
        dataElements.pcode = {
          definition: function (data, config, utils, wa) {
            var retVal =
              data.offerCode ||
              data.p_prioritycode ||
              utils.getFirstNotEmpty([
                data.queryString['pcode'],
                data.queryString['p'],
                data.queryString['offerid'],
                data.queryString['offer_id'],
                data.queryString['offer_code'],
              ]) ||
              '';
            return retVal.toLowerCase();
          },
          dependencies: ['p_prioritycode'],
        };
        dataElements.p_prioritycode = {
          definition: function (data, config, utils, wa) {
            var retVal = data.queryString['p_prioritycode'] || '';
            return retVal.toLowerCase();
          },
        };
        dataElements.sourceCode = {
          definition: function (data, config, utils, wa) {
            var retVal =
              data.qboSourceCode || data.queryString['sc'] || data.queryString['source'] || '';
            return retVal.toLowerCase();
          },
        };
        dataElements.sku = {
          definition: function (data, config, utils, wa) {
            return (
              data.offeringId || data.queryString['sku'] || data.queryString['offeringid'] || ''
            );
          },
        };
        dataElements.billingCode = {
          definition: function (data, config, utils, wa) {
            return data.queryString['bc'];
          },
        };
        dataElements.brand = {
          definition: function (data, config, utils, wa) {
            return data.queryString['b'];
          },
        };
        dataElements.companyId = {
          definition: function (data, config, utils, wa) {
            var companyId = '';
            if (data.publishPathCountry == 'br')
              try {
                var idIsDeclared;
                companyId = data.gaDataLayer[0].companyId;
              } catch (e) {
                if (e.name == 'ReferenceError') idIsDeclared = false;
              }
            if (!companyId)
              if (data.publishPathCountry != 'us')
                if (!utils.isVarEmpty(data.windowCompanyId)) companyId = data.windowCompanyId;
                else if (!utils.isVarEmpty(data.swCookieCompanyId))
                  companyId = data.cookie[data.swCookieCompanyId];
            companyId = companyId || data.queryString['companyid'] || '';
            if (
              document.location.hostname.search('quickbooks.intuit.com') > -1 &&
              (document.location.pathname.search('community') > -1 ||
                document.location.pathname.search('learn-support') > -1)
            )
              companyId = window.qbo_company_id;
            return companyId;
          },
          dependencies: ['publishPathCountry', 'gaDataLayer'],
        };
        dataElements.intuitAuthId = {
          definition: function (data, config, utils, wa) {
            if (
              document.location.hostname.search('quickbooks.intuit.com') > -1 &&
              (document.location.pathname.search('community') > -1 ||
                document.location.pathname.search('learn-support') > -1)
            )
              return window.qbo_gauth_id;
            else return '';
          },
        };
        dataElements.qboUserId = {
          definition: function (data, config, utils, wa) {
            if (data.publishPathCountry == 'br')
              try {
                var idIsDeclared;
                return data.gaDataLayer[0].userId;
              } catch (e) {
                if (e.name == 'ReferenceError') idIsDeclared = false;
                return '';
              }
            else return '';
          },
          dependencies: ['publishPathCountry', 'gaDataLayer'],
        };
        dataElements.gaDataLayer = {
          definition: function (data, config, utils, wa) {
            return window.dataLayer;
          },
        };
        dataElements.swCookieCompanyId = {
          definition: function (data, config, utils, wa) {
            return window.SWCOOKIE_COMPANY_ID;
          },
        };
        dataElements.windowCompanyId = {
          definition: function (data, config, utils, wa) {
            return window.companyId;
          },
        };
        dataElements.responsysCreativeId = {
          definition: function (data, config, utils, wa) {
            return data.queryString['rmid'];
          },
        };
        dataElements.responsysSubId = {
          definition: function (data, config, utils, wa) {
            return data.queryString['rrid'];
          },
        };
        dataElements.formEvent = { persistent: false };
        dataElements.formName = { persistent: false };
        dataElements.formLastFieldChanged = { persistent: false };
        dataElements.formField = { persistent: false };
        dataElements.formAnalysisData = {
          persistent: false,
          definition: function (data, config, utils, wa) {
            if (data.formField) return data.formField;
            var formAnalysis = '';
            if (!utils.isVarEmpty(data.formEvent)) {
              formAnalysis = data.formEvent + '|' + data.formName;
              if (data.formEvent == 'abandon') formAnalysis += '|' + data.formLastFieldChanged;
            }
            return formAnalysis;
          },
          dependencies: ['formEvent', 'formName', 'formLastFieldChanged', 'formField'],
        };
        dataElements.qboConvCookie = {
          definition: function (data, config, utils, wa) {
            var cookieEnvironment = 'prod';
            if (!data.isProd) cookieEnvironment = 'dev';
            var cookieNameCom =
              config.marketingChannelCookieNames['com'][cookieEnvironment]['main'];
            var cookieNameIntl =
              config.marketingChannelCookieNames['intl'][cookieEnvironment]['main'];
            var cookieVal = data.cookie[cookieNameCom] || data.cookie[cookieNameIntl] || '';
            if (utils.isVarEmpty(cookieVal)) return '(no cookie)';
            else return cookieVal;
          },
          dependencies: ['isProd', 'publishPathCountry'],
        };
        dataElements.globalCookie = {
          definition: function (data, config, utils, wa) {
            var retVal = data.cookie['propertySegments'];
            if (retVal) {
              retVal = retVal.split('|');
              retVal.shift();
              retVal = retVal.join('|');
              return retVal;
            }
          },
        };
        dataElements.s_vi = {
          definition: function (data, config, utils, wa) {
            return data.cookie['s_vi'];
          },
        };
        dataElements.marketingCloudID = {
          definition: function (data, config, utils, wa) {
            if (window.Visitor) {
              var id = window.Bootstrapper.data.resolve('55350');
              var retVal = window.Visitor.getInstance(id).getMarketingCloudVisitorID();
              return retVal;
            }
          },
        };
        dataElements.userId = {
          definition: function (data, config, utils, wa) {
            var retVal = data.cookie['sbm_intuit_id'];
            if (retVal) return retVal;
          },
        };
        dataElements.qboCustType = {
          definition: function (data, config, utils, wa) {
            var qboCookie = data.cookie['qbo.qbo'];
            if (!utils.isUndefined(qboCookie)) {
              qboCookie = qboCookie.replace(/"/g, '');
              return qboCookie;
            }
          },
        };
        dataElements.ivid = {
          runOrder: 'last',
          definition: function (data, config, utils, wa) {
            return data.cookie['ivid'];
          },
        };
        dataElements.ixpId = {
          definition: function (data, config, utils, wa) {
            return data.cookie['ixp_ivid'];
          },
        };
        dataElements.userStatus = {
          definition: function (data, config, utils, wa) {
            var retVal = 'Lookers';
            var cookiePat = /^[1-9][\.\d]*(,\d+)?$/;
            if (data.cookie['qbo.company'] && cookiePat.test(data.cookie['qbo.company']))
              retVal = 'Users';
            return retVal;
          },
        };
        dataElements.mdsPersonalizationStore = {
          definition: function (data, config, utils, wa) {
            return data.cookie['mds_3rdparty_experience_store'];
          },
        };
        dataElements.mdsProspectStatus = {
          definition: function (data, config, utils, wa) {
            return data.cookie['prospect_status'];
          },
        };
        dataElements.visitDate = {
          definition: function (data, config, utils, wa) {
            var retVal = utils.calculateDate('-8');
            retVal = retVal ? retVal.toLowerCase() : '';
            return retVal;
          },
        };
        dataElements.optimizelyTestId = {
          definition: function (data, config, utils, wa) {
            retVal = '';
            if (wa.s)
              if (window.optimizely && window.optimizely.hasOwnProperty('get')) {
                var obj,
                  str = '';
                try {
                  obj = window.optimizely.get('state').getVariationMap();
                } catch (err) {}
                if (obj !== null || obj !== 'undefined') {
                  var output = [];
                  for (var key in obj) {
                    var tmp = key + ':' + obj[key].id;
                    output.push(tmp);
                  }
                  retVal = output.join(',');
                  retVal = retVal ? 'oz:' + retVal : '';
                }
                return retVal;
              }
          },
          dependencies: [],
        };
        dataElements.ssTestId = {};
        dataElements.ttTestId = {};
        dataElements.testId = {};
        dataElements.abTest = {
          definition: function (data, config, utils, wa) {
            var retVal = '';
            retVal = data.ssTestId ? 'ss:' + data.ssTestId : '';
            retVal += data.ttTestId ? '|tt:' + data.ttTestId : '';
            retVal += data.testId ? '|' + data.testId : '';
            retVal += data.optimizelyTestId ? '|' + data.optimizelyTestId : '';
            retVal += data.mdsPersonalizationStore
              ? '|' + 'mds:' + data.mdsPersonalizationStore
              : '';
            if (retVal.indexOf('|') == 0) retVal = retVal.replace('|', '');
            return retVal;
          },
          dependencies: [
            'optimizelyTestId',
            'ssTestId',
            'ttTestId',
            'testId',
            'mdsPersonalizationStore',
          ],
        };
        dataElements.abTestList = {
          definition: function (data, config, utils, wa) {
            if (data.abTest) {
              var abTestSplit = data.abTest.split('|');
              var acceptedTextPrefixes = ['ss:', 'tt:', 'oz:', 'mds:'];
              var abTestList = [];
              for (var abTestIndex = 0; abTestIndex < abTestSplit.length; abTestIndex++) {
                var abTestValues = abTestSplit[abTestIndex].split(',');
                var prefix = '';
                for (var prefixIndex = 0; prefixIndex < acceptedTextPrefixes.length; prefixIndex++)
                  if (abTestValues[0].indexOf(acceptedTextPrefixes[prefixIndex]) === 0) {
                    prefix = acceptedTextPrefixes[prefixIndex];
                    abTestValues[0] = abTestValues[0].slice(prefix.length);
                    break;
                  }
                for (var i = 0; i < abTestValues.length; i++)
                  abTestList.push(prefix + abTestValues[i]);
              }
              return abTestList.join(',');
            }
            return '';
          },
          dependencies: ['abTest'],
        };
        dataElements.suiPaymentPlan = {};
        dataElements.pageLoadStart = { persistent: false };
        dataElements.pageLoadTime = {
          definition: function (data, config, utils, wa) {
            const $___old_ee910dc018e4e75f = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_ee910dc018e4e75f)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_8784486a79b95885.performance
                ));
              return function () {
                var retVal = '';
                if (window.performance && window.performance.timing.domContentLoadedEventEnd > 0)
                  try {
                    retVal =
                      window.performance.timing.domContentLoadedEventEnd -
                      window.performance.timing.navigationStart;
                  } catch (err) {}
                else if (data.pageLoadStart) retVal = new Date() - data.pageLoadStart;
                else retVal = 'start time not provided';
                return retVal;
              }.apply(this, arguments);
            } finally {
              if ($___old_ee910dc018e4e75f)
                ({}.constructor.defineProperty(window, 'performance', $___old_ee910dc018e4e75f));
            }
          },
          dependencies: ['pageLoadStart'],
        };
        dataElements.pcsAppId = {
          definition: function (data, config, utils, wa) {
            var appId = data.pcsApplication || data.psdApplication || data.imsApplication || '';
            return appId;
          },
        };
        dataElements.merchantId = {
          definition: function (data, config, utils, wa) {
            var merchId = data.pcsMerchantId || data.psdMerchantId || data.imsMerchantId || '';
            return merchId;
          },
        };
        dataElements.articleDetail = {
          definition: function (data, config, utils, wa) {
            var retVal;
            if (typeof google_tag_params != 'undefined') {
              if (
                !utils.isVarEmpty(google_tag_params.pageCategory) &&
                !utils.isVarEmpty(google_tag_params.pagePostAuthor)
              )
                retVal = google_tag_params.pageCategory + '|' + google_tag_params.pagePostAuthor;
              if (
                !utils.isVarEmpty(google_tag_params.pageCategory) &&
                !utils.isVarEmpty(google_tag_params.pagePostAuthor)
              )
                retVal = google_tag_params.pageCategory;
            }
            return retVal;
          },
        };
        dataElements.fingerPrintId = {
          definition: function (data, config, utils, wa) {
            var retVal = '';
            if (data.pageName === 'pcs|mktg|merchant|signup/appsubmitted_instant.wsp') {
              var qboSourceCodeSpan = document.getElementById('qboSourceCode');
              if (!utils.isVarEmpty(qboSourceCodeSpan)) retVal = qboSourceCodeSpan.innerHTML;
            }
            return retVal;
          },
          dependencies: ['pageName'],
        };
        dataElements.emsLicenseId = {};
        dataElements.decibelSessionId = {
          runOrder: 'last',
          definition: function (data, config, utils, wa) {
            const $___old_f99bd0cd49b2ae84 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'sessionStorage'
            );
            try {
              if ($___old_f99bd0cd49b2ae84)
                ({}.constructor.defineProperty(
                  window,
                  'sessionStorage',
                  $___stub_4011c24c598eb934.sessionStorage
                ));
              return function () {
                var retVal = '';
                if (sessionStorage && sessionStorage.vis_di_sessionId)
                  retVal = sessionStorage.vis_di_sessionId;
                else if (
                  typeof decibelInsight !== 'undefined' ||
                  typeof decibelInsight.getSessionId == 'function'
                ) {
                  retVal = decibelInsight.getSessionId();
                  sessionStorage.vis_di_sessionId = retVal;
                }
                return retVal;
              }.apply(this, arguments);
            } finally {
              if ($___old_f99bd0cd49b2ae84)
                ({}.constructor.defineProperty(
                  window,
                  'sessionStorage',
                  $___old_f99bd0cd49b2ae84
                ));
            }
          },
        };
        dataElements.eStoreOfferCode = {
          definition: function (data, config, utils, wa) {
            return data.payrollOffer;
          },
        };
        dataElements.internalKeyword = {
          definition: function (data, config, utils, wa) {
            if (!utils.isVarEmpty(data.formData)) return 'ft:' + data.formData;
            else if (
              document.location.hostname.search('quickbooks.intuit.com') > -1 &&
              (document.location.pathname.search('community') > -1 ||
                document.location.pathname.search('learn-support') > -1)
            )
              try {
                var params = new URL(window.location.href).searchParams;
                if (params.get('q') === undefined || params.get('q') === 'undefined') return null;
                else return params.get('q');
              } catch (err) {
                console.error('[ShAnalytics - getSearchParam] -> Error \n ');
                return null;
              }
          },
        };
        dataElements.pageRating = { persistent: false };
        dataElements.pageRatingVal = {
          definition: function (data, config, utils, wa) {
            var retVal;
            if (!utils.isVarEmpty(data.pageRating)) {
              var objPageRating = data.pageRating;
              var expectedProperties = {
                content: '',
                design: '',
                usability: '',
                overall: '',
                taskComplete: '',
              };
              for (key in expectedProperties)
                objPageRating[key] = objPageRating[key] ? objPageRating[key] : '';
              retVal = 'c:' + objPageRating.content;
              retVal += '|d:' + objPageRating.design;
              retVal += '|u:' + objPageRating.usability;
              retVal += '|o:' + objPageRating.overall;
              retVal += '|tc:' + objPageRating.taskComplete;
              retVal += '|ref:' + (data.queryString['r'] ? data.queryString['r'] : '');
            } else retVal = '';
            return retVal;
          },
          dependencies: ['pageRating'],
        };
        dataElements.chatSessionId = {
          definition: function (data, config, utils, wa) {
            var retVal = '';
            if (data.chatSessionId) retVal = data.chatSessionId ? data.chatSessionId : '';
            return retVal;
          },
        };
        dataElements.surveyId = {
          definition: function (data, config, utils, wa) {
            var retVal = '';
            if (!utils.isVarEmpty(data.pageRating))
              retVal = data.pageRating.surveyId ? data.pageRating.surveyId : '';
            return retVal;
          },
          dependencies: ['pageRating'],
        };
        dataElements.leadEvalID = {
          definition: function (data, config, utils, wa) {
            var retVal = '';
            if (data.leadEvalID) retVal = data.leadEvalID;
            else retVal = data.queryString['leadid'];
            return retVal;
          },
        };
        dataElements.navigation = {
          definition: function (data, config, utils, wa) {
            var retVal = data.queryString['ncid'];
            retVal = retVal ? retVal.toLowerCase() : '';
            return retVal;
          },
        };
        dataElements.visitPageCount = {
          enabled: false,
          definition: function (data, config, utils, wa) {
            var cookieName = 'int-sbg_vpc';
            var count = parseInt(data.cookie[cookieName]);
            if (isNaN(count)) count = 0;
            count++;
            utils.setCookie(cookieName, count, { domain: data.baseDomain });
            return count;
          },
          dependencies: ['baseDomain'],
        };
        dataElements.prevPage = {
          trackOnce: true,
          definition: function (data, config, utils, wa) {
            if (utils.beginsWith(data.trackType, 'page'))
              if (
                utils.objectHasPropertyChain(wa, 's.getPreviousValue') &&
                utils.getType(wa.s.getPreviousValue) == 'function'
              )
                return wa.s.getPreviousValue(data.pageName, 'gpv_pn');
            return '';
          },
          dependencies: ['pageName', 'trackType'],
        };
        dataElements.prevPagePctViewed = {
          trackOnce: true,
          definition: function (data, config, utils, wa) {
            if (
              utils.objectHasPropertyChain(wa, 's.getPercentPageViewed') &&
              data.prevPage &&
              utils.getType(data.prevPage) == 'string' &&
              data.prevPage != 'no value'
            ) {
              var ppv = wa.s.getPercentPageViewed(data.pageName);
              if (ppv && utils.getType(ppv) == 'array' && ppv[0] == data.prevPage)
                return ppv[1] + '|' + ppv[2];
            }
            return '';
          },
          dependencies: ['prevPage', 'pageName'],
        };
        dataElements.inspectorDisabled = {
          definition: function (data, config, utils, wa) {
            var useWaInspector = Bootstrapper.data.resolve('Manage.WA-v2.use-wa-inspector');
            if (useWaInspector === 'no') return true;
            else if (useWaInspector === 'yes') return false;
            else return !!data.isProd;
          },
          dependencies: ['isProd'],
        };
        dataElements.inspectorTestId = {
          runOrder: 'last',
          persistent: false,
          useExplicitValue: false,
          definition: function (data, config, utils, wa) {
            if (wa.inspectorConditions) {
              var testIds = [];
              if (this.explicitValue) testIds = this.explicitValue.split(',');
              for (var key in wa.inspectorConditions)
                if (!utils.isUndefined(wa.inspectorConditions[key].expectedKvPairs.ALWAYS))
                  testIds.push(key);
                else if (
                  utils.objectMatchesTest(data, wa.inspectorConditions[key].expectedKvPairs)
                )
                  testIds.push(key);
              return testIds.join(',');
            }
          },
        };
        dataElements.inspectorData = {
          runOrder: 'last',
          persistent: false,
          dependencies: ['inspectorTestId'],
        };
        dataElements.wwsuiEventName = { persistent: false };
        dataElements.licenseId = {
          definition: function (data, config, utils, wa) {
            return data.queryString['license'];
          },
        };
        dataElements.personaMatrix = {
          definition: function (data, config, utils, wa) {
            if (
              Intuit &&
              Intuit.Persona &&
              Intuit.Persona.Experiences &&
              Intuit.Persona.Experiences.length > 0
            )
              return Intuit.Persona.Experiences.filter(function (exp) {
                return exp.points > 0;
              })
                .filter(function (exp) {
                  return exp.persona === Intuit.Persona.User.slug;
                })
                .map(function (exp) {
                  return (
                    (exp.persona || '') +
                    '|' +
                    (exp.points || '') +
                    '|' +
                    (exp.name || '') +
                    '|' +
                    (exp.experience_points || '') +
                    '|' +
                    exp.stages
                      .filter(function (stage) {
                        return stage.name === exp.activeStage;
                      })
                      .map(function (stage) {
                        return stage.name + '|' + stage.points_to_activate;
                      })
                  );
                })[0];
          },
        };
        dataElements.aamQbusCookie = {
          definition: function (data, config, utils, wa) {
            return data.cookie['aam_qbus'];
          },
        };
        dataElements.qbcPersonId = {
          definition: function (data, config, utils, wa) {
            var retVal = '';
            if (document.location.host == 'events.quickbooksconnect.com')
              if (document.getElementById('person-id'))
                retVal = document.getElementById('person-id').innerText;
            return retVal;
          },
        };
      },
      3398016,
      496141
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.bindDOMParsed(function () {
          var elements = Bootstrapper.qwery('.IntuitBrandClicktoProConnect');
          for (var i = 0; i < elements.length; i++)
            Bootstrapper.unobtrusiveAddEvent(elements[i], 'onclick', function () {
              Bootstrapper.ensEvent.trigger('ICom - Button Click to ProConnect');
            });
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        window._waConfig = window._waConfig || {};
        var config = window._waConfig;
        config.lastUpdate = config.lastUpdate || [];
        config.lastUpdate.push('2020|11|16');
        config.configReady = true;
        config.segmentIO = config.segmentIO || {};
        config.segmentIO.enabled = true;
        config.varmap = {
          sbgsegment: {
            org: 'org',
            purpose: 'purpose',
            scope: 'scope',
            pageName: 'name',
            pageProperties: 'properties',
            userAction: 'properties[action]',
          },
          sbgprod: {
            pageType: 'pageType',
            hostname: 'server',
            channel: 'channel',
            referrer: 'referrer',
            pageName: ['pageName', 'prop2'],
            pageHier: 'hier2',
            adobeEventList: 'events',
            products: 'products',
            cid: ['campaign', 'eVar66', 'prop66'],
            siteGroupSubgroup: ['eVar1', 'prop1'],
            billingCode: 'eVar2',
            funnelName: ['eVar3', 'prop3'],
            formAnalysisData: 'prop4',
            brand: 'eVar4',
            navigation: ['eVar5', 'prop5'],
            pcsAppStatus: 'eVar6',
            qboUserId: 'eVar7',
            xsell_upsell: 'prop8',
            emsExternalId: 'eVar8',
            pcsAppId: 'eVar9',
            emsLicenseId: 'eVar9',
            aamQbusCookie: 'prop9',
            fingerPrintId: 'eVar10',
            invoiceID: 'prop10',
            emsPartnerId: 'prop11',
            chatSessionId: 'eVar11',
            globalCookie: 'prop12',
            articleTitle: 'eVar12',
            articleId: 'eVar13',
            articleProductType: 'prop14',
            customerId: 'prop13',
            eStoreOfferCode: 'eVar14',
            sku: 'eVar15',
            userStatus: 'prop16',
            firstProduct: 'eVar16',
            refUrlSbg: 'eVar17',
            videoTrack: 'prop17',
            localRefUrl: 'eVar18',
            licenseId: 'eVar19',
            marketingCloudID: 'prop20',
            decibelSessionId: 'eVar20',
            internalCampaign: 'eVar21',
            campaignStack: 'eVar22',
            priorityCode: 'eVar23',
            p_prioritycode: 'eVar24',
            pageDetail: 'prop24',
            pcode: 'eVar25',
            qboConvCookie: ['eVar26', 'prop26'],
            pageUrl: ['pageUrl', 'eVar27', 'prop27'],
            urs: ['eVar28', 'prop28'],
            ppckw: 'eVar29',
            natkw: 'eVar30',
            trackType: 'prop30',
            zonCode: 'eVar31',
            inspectorData: 'prop31',
            internalSearch: 'prop19',
            numIntSearchResults: 'prop32',
            mdsProspectStatus: 'eVar32',
            reportSuite: 'prop33',
            responsysCreativeId: 'eVar33',
            responsysSubId: 'eVar34',
            leadEvalID: 'prop34',
            qbcPersonId: 'eVar35',
            surveyId: 'prop35',
            mdsPersonalizationStore: 'eVar36',
            jsLibraryVersion: 'prop36',
            testData: 'prop39',
            purchaseId: ['purchaseID', 'transactionID', 'eVar40'],
            qboSemHistCookie: 'prop40',
            prevPagePctViewed: 'prop41',
            prevPage: 'prop42',
            articleDetail: 'prop43',
            pageOrAction: 'prop49',
            qboCustType: 'eVar50',
            personalizedPage: 'eVar51',
            s_vi: 'prop52',
            qbseUserId: ['eVar53', 'prop53'],
            iksmUserId: 'prop54',
            ivid: 'eVar54',
            linkHREF: 'prop55',
            sourceCode: 'eVar55',
            personaMatrix: 'prop56',
            suiPaymentPlan: 'eVar56',
            addOnIds: 'eVar57',
            intuitAuthId: ['eVar58', 'prop58'],
            companyId: ['eVar59', 'prop59'],
            country: ['eVar60', 'prop60'],
            pageId: ['prop61'],
            ixpId: ['prop62'],
            mobileLocale: ['eVar62'],
            mobileIp: ['eVar63', 'prop63'],
            siteName: ['eVar64', 'prop64'],
            userAction: ['eVar65', 'prop65'],
            visitDate: ['eVar67', 'prop67'],
            internalKeyword: ['eVar68', 'prop68'],
            appVersion: ['eVar69', 'prop69'],
            mobileDevice: ['eVar70', 'prop70'],
            abTest: ['eVar71', 'prop71'],
            fraudId: ['eVar72', 'prop72'],
            pageLoadTime: ['eVar73', 'prop73'],
            userId: ['eVar74', 'prop74'],
            error: ['eVar75', 'prop75'],
            miscVisitData: 'list1',
            abTestList: 'list2',
          },
        };
        config.eventNames = {
          prodView: ['prodview', 'product_view'],
          scView: ['cartview', 'view_cart'],
          scOpen: ['cartopen', 'open_cart'],
          scAdd: ['cartadd', 'add_to_cart'],
          scRemove: ['cartremove', 'remove_from_cart'],
          scCheckout: ['checkout', 'scCheckout'],
          purchase: ['order', 'purchase'],
          event1: ['fmsstep1'],
          event2: ['fmsstep2'],
          event3: ['fmsstep3'],
          event4: ['fmsappcomplete'],
          event5: ['fmsestorecustomer'],
          event6: ['fmspaymentmethod'],
          event7: ['fmsretailstep1'],
          event10: ['fmsretailstep2'],
          event11: ['fmsretailcomplete'],
          event13: ['emsappstart'],
          event14: ['emsappstep2'],
          event15: ['emsappstep3'],
          event16: ['emsappstep4'],
          event17: ['emsappcomplete'],
          event18: ['emsinsstart'],
          event19: ['emsinssubmit'],
          event20: ['emsiamsignin'],
          event21: ['emsiamcolist'],
          event22: ['emsiamcoselected'],
          event23: ['emsretailactivation'],
          event25: ['psdstart', 'imsstart', 'pcsstart'],
          event26: ['psdstep2', 'imsstep2', 'pcsstep2'],
          event27: ['psdstep3', 'imsstep3', 'pcsstep3'],
          event28: ['psdappsubmitconfirm', 'imsappsubmitconfirm', 'pcsappsubmitconfirm'],
          event51: ['emsapprovedpayroll'],
          event52: ['emstaxsetupstart'],
          event53: ['emstaxsetupcomplete'],
          event54: ['emssetupcomplete'],
          event55: ['emsccinforeceived'],
          event56: ['emsfirstcheckapproved'],
          event57: ['emstrialstart'],
          event66: [
            'qbastep1',
            'qboastep1',
            'qbacastep1',
            'papstep1',
            'papqbastep1',
            'qbapapstep1',
          ],
          event67: [
            'qbasignupcomplete',
            'papsignupcomplete',
            'qbapapsignupcomplete',
            'papqbasignupcomplete',
            'qboacomplete',
            'qbacasignupcomplete',
          ],
          event69: ['qbastep2', 'papstep2', 'qbapapstep2', 'papqbastep2'],
          event70: ['qbastep3', 'papstep3', 'qbapapstep3', 'papqbastep3'],
          event71: ['qbesstart'],
          event72: ['qbesstep2'],
          event73: ['qbessubmit'],
          event74: ['engagedseconds'],
          event75: ['qbfspstart'],
          event76: ['qbfspstep2'],
          event77: ['qbfspcomplete'],
          event94: ['crashed', 'crash'],
          event95: ['launches', 'launch'],
          event96: ['upgrades', 'upgrade'],
          event97: ['install'],
          event98: ['register'],
          event99: ['login'],
          event100: ['error'],
          event101: ['grabpdf'],
          event102: ['downloadqbes'],
          event110: ['attachpayroll'],
          event111: ['switchtobuynow'],
          event112: ['fmscompletewithoutbilling'],
          event113: ['defercompanycreation'],
          event201: ['qbsestep1'],
          event202: ['qbseaccountcreated'],
          event203: ['qbsechooser'],
          event204: ['qbsebillinginfo'],
          event205: ['qbsesubscribe'],
          event206: ['qbsetrialstart'],
          event207: ['qbsetrialcomplete'],
          event208: ['qbsebuystart'],
          event209: ['qbsebuycomplete'],
          event210: ['fspcontactformshow'],
          event211: ['fspcontactformsubmit'],
          event212: ['blog_comment_attempt'],
          event220: ['fmsposleadstart'],
          event221: ['fmsposleadcomplete'],
          event230: ['qboadvleadstart'],
          event231: ['qboadvleadcomplete'],
          event241: ['qbcstep1'],
          event242: ['qbcstep2'],
          event243: ['qbcregistersuccess'],
          event251: ['qbotrialsignupstart'],
          event252: ['qbotrialsignupcomplete'],
          event253: ['qbobuysignupstart'],
          event254: ['qbobuysignupcomplete'],
        };
        config.eventSerialIds = {
          event4: 'companyId',
          event11: 'companyId',
          event17: 'emsExternalId',
          event28: 'pcsAppId',
          event52: 'emsExternalId',
          event53: 'emsExternalId',
          event54: 'emsExternalId',
          event55: 'emsExternalId',
          event57: 'emsExternalId',
          event67: 'companyId',
          event73: 'leadEvalID',
          event77: 'companyId',
          event112: 'companyId',
          event202: 'qbseUserId',
          event205: 'qbseUserId',
          event207: 'companyId',
          event209: 'companyId',
          event221: 'leadEvalID',
          event231: 'leadEvalID',
          event243: 'purchaseId',
          event252: 'companyId',
          event254: 'companyId',
        };
        config.varsets = {
          link: [
            'ivid',
            'referrer',
            'siteGroupSubgroup',
            'billingCode',
            'fullUrl',
            'landingPage',
            'jsLibraryVersion',
            'siteName',
            'pageOrAction',
            'userAction',
            'adobeEventList',
            'abTest',
            'formAnalysisData',
            'reportSuite',
            'siteLocale',
            'country',
            'inspectorData',
            'pageName',
            'pageUrl',
            'linkHREF',
            's_vi',
            'org',
            'scope',
            'purpose',
            'internalSearch',
          ],
        };
        config.s = {};
        config.s.charSet = 'UTF-8';
        config.s.currencyCode = 'USD';
        config.s.linkLeaveQueryString = false;
        config.s.trackDownloadLinks = true;
        config.s.linkDownloadFileTypes =
          'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,msi';
        config.s.linkTrackVars =
          'eVar1,prop1,prop2,prop19,eVar27,prop27,prop33,prop36,eVar52,eVar54,eVar60,prop60,eVar61,eVar64,prop64';
        config.s.linkTrackEvents = 'None';
        config.s.trackInlineStats = false;
        config.s.visitorNamespace = 'intuitinc';
        config.s.trackingServer = 'ci.intuit.com';
        config.s.trackingServerSecure = 'sci.intuit.com';
        config.internalHostEms = [
          'search.payroll.com',
          'search2.payroll.com',
          'payroll.intuit.com',
          'paycycle.com',
          'www.paycycle.com',
          'easy.paycycle.com',
          'payroll.com',
          'www.bestonlinepayroll.com',
          'onlinepayroll.intuit.com',
          'online.payroll.intuit.com',
          'usepayroll.com',
          'www.qbmacpayroll.com',
          'www.macpayroll.com',
          'payroll.quickbooks.com',
          'www.intuitfullservicepayroll.com',
          'quickbookspayroll.com',
          'www.managepayroll.com',
          'intuitfullservicepayroll.com',
          'www.fullpayrollsolution.com',
          'fullpayrollsolution.com',
          'www.intuithire.com',
          'intuithirebook.com',
          'www.intuit-hire-book.com',
          'www.intuit-hire.com',
          'hire.intuit.com',
          'snappypayroll.com',
          'www.intuitinc.com',
          'www.firstemployee.intuit.com',
          'www.firstemployeebok.com',
          'insurance.intuit.com',
          'compliance.intuitlabs.com',
          'iop.intuit.com',
          'www.paycheckrecords.com',
          'qbosso.onlinepayroll.intuit.com',
          'iopsso.onlinepayroll.intuit.com',
          'workplacesso.onlinepayroll.intuit.com',
          'beyondpayroll.emslabs.intuit.com',
          'www.payroll.intuit.com',
          'beyondpayroll.emslabs.intuit.com',
          'ems.intuit.com',
          'ews.intuit.com',
          'viewmypaycheck.com',
          'viewmypaycheck.intuit.com',
          'paychecks.intuit.com',
          'ewslogincallback.intuit.com',
          '1099central.intuit.com',
          'index.intuit.com',
          'quickbooks.intuit.com',
          'quickbooks.com',
        ];
        config.internalHostFms = [
          'qbpayroll.com',
          'quickbooks.com',
          'quickbooks.intuit.com',
          'search.quickbooks.com',
          'search2.quickbooks.com',
          'qboe.com',
          'qbonline.com',
          'quickbooksonline.com',
          'quickbooksonline.intuit.com',
          'search.quickbooksonline.com',
          'search2.quickbooksonline.com',
          'www.qbpayroll.com',
          'sbconnect.intuit.com',
          'www.quickbooks.intuit.com',
          'selfemployed.intuit.com',
          'www.firmofthefuture.com',
          'events.intuit.com',
          'www.quickbooksconnect.com',
          'quickbooksconnect.com',
          'www.eiseverywhere.com',
          'eiseverywhere.com',
          'events.quickbooksconnect.com',
          'canevents.quickbooksconnect.com',
          'ukevents.quickbooksconnect.com',
          'auevents.quickbooksconnect.com',
          'help.developer.intuit.com',
          'signup.quickbooks.intuit.com',
          'qbindia.intuit.com',
          'na.eventscloud.com',
        ];
        config.internalHostIcs = ['intuitmarket.intuit.com', 'www.intuitmarket.com'];
        config.internalHostPcs = [
          'ipd.intuit.com',
          'pay.intuit.com',
          'payments.intuit.com',
          'gopayment.com',
          'intuit-gopayment.com',
          'www.gopayment.com',
          'www.intuit-gopayment.com',
          'intuitpayments.com',
          'pointofsale.intuit.com',
          'merchant.intuit.com',
          'www.intuitmerchant.com',
          'intuitmerchant.com',
          'merchantboarding.ipcommerce.com',
          'www.quickbooksmerchantservice.com',
          'quickbooksmerchantservice.com',
          'inquickbooks.intuit.com',
          'http-download.intuit.com',
          'www.intuitpayments.com',
          'paymentsolutions.intuit.com',
          'translate.googleusercontent.com',
          'merchantcenter.intuit.com',
          'webcache.googleusercontent.com',
          'intuitshipping.panomark.com',
          'www.intuitcreditcardprocessing.com',
          'paaf.payments.intuit.com',
          'qbdtonboard.payments.intuit.com',
          'gopaymenthelp.com',
          'www.gopaymenthelp.com',
          'quickbooks.intuit.com',
          'connect.intuit.com',
          'payments-gpa.intuit.com',
        ];
        config.internalHostIcom = ['www.intuit.com', 'intuit.com', 'intuitblog.com'];
        config.internalHostQbes = [
          'enterprisesuite.intuit.com',
          'quickbooks.com',
          'quickbooks.intuit.com',
        ];
        config.internalHostIksm = ['iksm.intuit.com'];
        config.internalHostAllLocal = [
          'qbgdm.intuit.com',
          'qbinproduct.intuit.com',
          'www.aboutqbtrial.com',
          'www.buyqb.com',
          'www.buyquickbooks.com',
          'www.checkoutqb.com',
          'www.chooseqb.com',
          'www.freeqb.com',
          'www.freeqbtrial.com',
          'www.getqb.com',
          'www.getqbnow.com',
          'www.getqbtrial.com',
          'www.getqbtrialnow.com',
          'www.gogetqb.com',
          'www.gogetqbtrial.com',
          'www.gotoqb.com',
          'www.intuitdirect.com',
          'www.iwantqb.com',
          'www.iwantqbtrial.com',
          'www.mustgetqb.com',
          'www.musthaveqb.com',
          'www.myqbtrial.com',
          'www.ordermyqb.com',
          'www.ordermyqbtrial.com',
          'www.orderqb.com',
          'www.orderqbtrial.com',
          'www.posmas.com',
          'www.qbmas.com',
          'www.qbpointofsale.com',
          'www.qbposms.com',
          'www.qbretail.com',
          'www.qbretailsolutions.com',
          'www.qbtrial.com',
          'www.qbtrialnow.com',
          'www.qbtvoffer.com',
          'www.qbtvtrial.com',
          'www.quickbooksdirect.com',
          'www.quickbooksms.com',
          'www.quickbookspos.com',
          'www.quickbookspro.com',
          'www.quickbooksretail.com',
          'www.quickbooksupgrade.com',
          'www.seeqbtrial.com',
          'www.tryqb.com',
          'www.tryqbnow.com',
          'www.useqb.com',
          'www.usequickbooks.com',
          'support.intuit.com',
          'selfservice.intuit.com',
          'sblb.intuit.com',
          'www.smallbusinessbiggame.com',
          'support.quickbooks.intuit.com',
          'sales.liveperson.net',
          'www.qbomobilecc.com',
          'qbomobilecc.com',
          'e.shop.intuit.com',
          'registration.intuitpartnerportal.com',
          'qbdtipd.qbinproduct.intuit.com',
          'iksm.intuit.com',
          'intuitblog.com',
        ];
        config.internalHostQaDomains = [
          'qa.sr.payroll.intuit.com',
          'qa.sr.pay.intuit.com',
          'qa.sr.payments.intuit.com',
          'qa.sr.intuit.com',
          'merchant.qa.intuit.com',
          'bp-test.intuitlabs.com',
          'wcgo2c3.enterprisesuite.intuit.com',
          'wcgo2c3.quickbooks.intuit.com',
          'pds.enterprisesuite.intuit.com',
          'pds.quickbooks.intuit.com',
          'inf2.payroll.intuit.com',
          'inf2.qbinproduct.intuit.com',
          'inf2.quickbooks.intuit.com',
          'stg.payroll.intuit.com',
          'stg.qbinproduct.intuit.com',
          'stg.inf2.quickbooks.intuit.com',
          'wcgo2c3.qbinproduct.intuit.com',
          'pds.qbinproduct.intuit.com',
          'wcgo2c3.proadvisor.intuit.com',
          'pds.proadvisor.intuit.com',
          'wcgo2c3.payroll.intuit.com',
          'pds.payroll.intuit.com',
          'qbdtipd-dev.qbinproduct.intuit.com',
          'qbdtipd-qal.qbinproduct.intuit.com',
          'qbdtipd-prf.qbinproduct.intuit.com',
          'signup-e2e.quickbooks.intuit.com',
          'signup-qa.quickbooks.intuit.com',
          'try.iksm.a.intuit.com',
          'uqa0.iksm-ppd.a.intuit.com',
          'uqa1.iksm-ppd.a.intuit.com',
          'uqa2.iksm-ppd.a.intuit.com',
          'uqa3.iksm-ppd.a.intuit.com',
          'qbdtipd-dev.qbinproduct.intuit.com',
          'qbdtipd-qal.qbinproduct.intuit.com',
          'qbdtipd-prf.qbinproduct.intuit.com',
          'qbdtonboard-qa.payments.intuit.com',
          'qbdtonboard-e2e.payments.intuit.com',
        ];
        config.internalHostSbg = config.internalHostEms.concat(
          config.internalHostFms,
          config.internalHostPcs,
          config.internalHostIcom,
          config.internalHostQbes,
          config.internalHostIcs
        );
        config.internalHostBr = [
          'signup.quickbooks.intuit.com',
          'www.quickbooks.com.br',
          'quickbooks.com.br',
          'www.quickbooksonline.com.br',
          'quickbooks.intuit.com.br',
          'quickbooksonline.intuit.com.br',
          'zeropaper.com.br',
          'www.zeropaper.com.br',
          'global.intuit.com',
          'quickbooks.intuit.com',
        ];
        config.internalHostBrQa = [
          'test.quickbooks.intuit.com.br',
          'test.www.intuit.com.br',
          'xhjga.zeropaper.com.br',
        ];
        config.internalHostMx = [
          'signup.quickbooks.intuit.com',
          'quickbooks.intuit.mx',
          'global.intuit.com',
          'www.intuit.com',
          'quickbooks.intuit.com',
        ];
        config.internalHostMxQa = ['test.quickbooks.intuit.mx'];
        config.internalHostAu = [
          'signup.quickbooks.intuit.com',
          'quickbooks.intuit.com',
          'www.intuit.com.au',
          'quickbooks.intuit.com.au',
          'www.quickbooks.com.au',
          'intuit.com.au',
          'quickbooks.com.au',
          'intuitglobal.com',
          'www.intuitglobal.com',
          'au.quickbooksconnect.com',
          'www.eiseverywhere.com',
          'auevents.quickbooksconnect.com',
          'au.eventscloud.com',
        ];
        config.internalHostAuQa = [
          'signup-qa.quickbooks.intuit.com',
          'qasp.quickbooks.intuit.com',
          'perfsp.quickbooks.intuit.com',
          'test.quickbooks.intuit.com.au',
          'test.www.intuit.com.au',
        ];
        config.internalHostCa = [
          'signup.quickbooks.intuit.com',
          'global.intuit.ca',
          'enterprise.intuit.ca',
          'shop.quickbooks.ca',
          'www.intuit.ca',
          'quickbooks.intuit.ca',
          'enterprise.intuit.ca',
          'shop.quickbooks.ca',
          'proadvisor.intuit.ca',
          'quickbooksenligne.intuit.ca',
          'succespme.intuit.ca',
          'quickbooksonline.intuit.ca',
          'global.intuit.ca',
          'intuitglobal.ca',
          'qbofortrades.ca',
          'accountant.intuit.ca',
          'conseillerspro.intuit.ca',
          'comptable.intuit.ca',
          'profile.intuit.ca',
          'ww1.secure.intuit.ca',
          'quickbooks-startup-foundations.thinkific.com',
          'can.quickbooksconnect.com',
          'events.intuit.com',
          'quickbooks.intuit.com',
          'intuit.com',
          'www.intuit.com',
          'enterprise.intuit.ca',
          'merchantservices.intuit.ca',
          'gopayment.intuit.ca',
          'gopayment.ca',
          'merchant.quickbooks.ca',
          'canevents.quickbooksconnect.com',
        ];
        config.internalHostCaQa = [
          'test.quickbooks.intuit.ca',
          'test.www.intuit.ca',
          'test.education.intuit.ca',
          'ww2.test.secure.intuit.ca',
          'ww2.perf.secure.intuit.ca',
        ];
        if (document.location.hostname.search('profile.intuit.ca') > -1) {
          try {
            wa.internalHostArray.push('profile.intuit.ca');
          } catch (err) {}
          wa.siteHost = 'pfenca';
          wa.siteGroup = 'mktg';
          wa.siteName = 'aag';
        }
        if (document.location.hostname.search('profilefrancais.intuit.ca') > -1) {
          try {
            wa.internalHostArray.push('profilefrancais.intuit.ca');
          } catch (err) {}
          wa.siteHost = 'pffrca';
          wa.siteGroup = 'mktg';
          wa.siteName = 'aag';
        }
        if (document.location.hostname.search('conseillerspro.intuit.ca') > -1)
          try {
            wa.internalHostArray.push('conseillerspro.intuit.ca');
          } catch (err) {}
        if (document.location.hostname.search('education.intuit.ca') > -1) {
          wa.siteHost = 'quickbooks';
          wa.siteGroup = 'mktg';
          wa.siteName = 'fms';
        }
        if (
          document.location.hostname.search('quickbooks.intuit.com') > -1 &&
          (document.location.pathname.search('community') > -1 ||
            document.location.pathname.search('learn-support') > -1)
        ) {
          wa.siteHost = 'qbcommunity';
          wa.siteGroup = 'care';
          wa.siteName = 'fms';
        }
        if (document.location.hostname.search('ww1.secure.intuit.ca') > -1)
          try {
            wa.internalHostArray.push('ww1.secure.intuit.ca');
          } catch (err) {}
        if (document.location.hostname.search('quickbooksconnect.com') > -1)
          try {
            wa.pagePath = document.location.pathname;
          } catch (err) {}
        config.internalHostFr = [
          'signup.quickbooks.intuit.com',
          'quickbooks.intuit.fr',
          'lesmoulins.club',
          'event-intuit.com',
          'global.intuit.com',
          'quickbooks.intuit.com',
        ];
        config.internalHostFrQa = ['qa.quickbooks.intuit.fr', 'prodblue.quickbooks.intuit.fr'];
        config.internalHostIn = [
          'signup.quickbooks.intuit.com',
          'www.quickbooks.in',
          'qbindia.intuit.com',
          'quickbooks.in',
          'quickbooks.intuit.com',
        ];
        config.internalHostInQa = [
          'test.www.quickbooks.in',
          'test.qbindia.intuit.com',
          'test.quickbooks.intuit.in',
          'preview.quickbooks.intuit.in',
        ];
        config.internalHostUk = [
          'signup.quickbooks.intuit.com',
          'global.intuit.co.uk',
          'enterprise.intuit.co.uk',
          'shop.quickbooks.co.uk',
          'www.quickbooks.co.uk',
          'www.intuit.co.uk',
          'quickbooks.intuit.co.uk',
          'enterprise.intuit.co.uk',
          'shop.quickbooks.co.uk',
          'proadvisor.intuit.co.uk',
          'quickbooksenligne.intuit.co.uk',
          'succespme.intuit.co.uk',
          'quickbooksonline.intuit.co.uk',
          'global.intuit.co.uk',
          'intuitglobal.co.uk',
          'qbofortrades.co.uk',
          'selfemployed.intuit.co.uk',
          'uk.selfemployed.intuit.com',
          'eu.eventscloud.com',
          'quickbooks.co.uk',
          'quickbooks.intuit.com',
          'events.intuit.com',
          'www.eiseverywhere.com',
          'uk.quickbooksconnect.com',
          'ukevents.quickbooksconnect.com',
        ];
        config.internalHostUkQa = [
          'perf.sr.quickbooks.intuit.co.uk',
          'qa.sr.intuit.co.uk',
          'qa.quickbooks.co.uk',
          'perf.quickbooks.co.uk',
          'uk.qbconnectdev.ycms2.com',
        ];
        config.internalHostRw = [
          'signup.quickbooks.intuit.com',
          'global.intuit.com',
          'enterprise.intuit.com',
          'shop.quickbooks.com',
          'www.intuit.com',
          'quickbooks.intuit.com',
          'enterprise.intuit.com',
          'shop.quickbooks.com',
          'proadvisor.intuit.com',
          'quickbooksenligne.intuit.com',
          'succespme.intuit.com',
          'quickbooksonline.intuit.com',
          'global.intuit.com',
          'intuitglobal.com',
          'qbofortrades.com',
          'www.intuit.ph',
          'intuit.ph',
          'quickbooks.intuit.ph',
          'quickbooks.intuit.sg',
          'intuit.sg',
          'www.intuit.sg',
          'www.intuit.hk',
          'intuit.hk',
          'quickbooks.intuit.hk',
          'www.intuit.ae',
          'intuit.ae',
          'quickbooks.intuit.ae',
          'www.intuit.com.my',
          'intuit.com.my',
          'quickbooks.intuit.com.my',
          'quickbooks.intuit.co.za',
          'merchantservices.intuit.com',
          'gopayment.intuit.com',
          'gopayment.com',
          'merchant.quickbooks.com',
        ];
        config.internalHostRwQa = ['test.quickbooks.intuit.com', 'test.www.intuit.com'];
        config.internalReferralDomains = [
          'intuit.com',
          'paycheckrecords.com',
          'quickbooksonline.com',
          'quickbooks.com',
          'intuitpayments.com',
          'intuitblog.com',
          'payroll.com',
          'intuit-gopayment.com',
          'quickbooksconnect.com',
          'firmofthefuture.com',
          'qbcommunity.com',
          'intuit.net',
          'zeropaper.com.br',
          'quickbooks.com.br',
          'intuit.ca',
          'quickbooks.co.uk',
          'intuit.co.uk',
          'quickbooks.in',
          'intuit.com.au',
          'intuit.ph',
          'intuit.com.my',
          'intuit.fr',
          'intuit.mx',
          'intuit.sg',
          'intuit.ae',
          'intuit.hk',
          'accounts.google.com',
          'eiseverywhere.com',
          'ycms2.com',
          'events.quickbooksconnect.com',
          'canevents.quickbooksconnect.com',
          'ukevents.quickbooksconnect.com',
          'auevents.quickbooksconnect.com',
          'eloqua.com',
        ];
        config.reportSuites = {
          ems: { prod: 'intuitemsprod', qa: 'intuitemsqa' },
          iop: { prod: 'intuitiopnewprod', qa: 'intuitiopnewqa' },
          fms: { prod: 'intuitsbgprod', qa: 'intuitsbgqa' },
          ics: { prod: 'intuitmarketsbgprod', qa: 'intuitsbgqa' },
          pcs: { prod: 'intuitpcsprod', qa: 'intuitpcsqa' },
          icom: { prod: 'intuiticomprod', qa: 'intuiticomqa' },
          sbg: { prod: 'intuitsbgprod', qa: 'intuitsbgqa' },
          qbes: { prod: 'intuitqbesprod', qa: 'intuitqbesqa' },
          qbse: { prod: 'intuitqbse', qa: 'intuitqbseqa' },
          br: { prod: 'intuitcasbgbrazilglobal', qa: 'intuitca-sbg-global-qa' },
          mx: { prod: 'intuitcasbgmxglobal', qa: 'intuitca-sbg-global-qa' },
          ca: { prod: 'intuitsbgcanadaglobal', qa: 'intuitca-sbg-global-qa' },
          au: { prod: 'intuitcasbgaustraliaglobal', qa: 'intuitca-sbg-global-qa' },
          uk: { prod: 'intuitcasbgukglobal', qa: 'intuitca-sbg-global-qa' },
          rw: { prod: 'intuitcasbgrowglobal', qa: 'intuitca-sbg-global-qa' },
          fr: { prod: 'intuitcasbgfranceglobal', qa: 'intuitca-sbg-global-qa' },
          iksm: { prod: 'intuitiksm', qa: 'intuitiksmqa' },
          in: { prod: 'intuitcasbgindiaglobal', qa: 'intuitca-sbg-global-qa' },
        };
        config.searchSites = {
          aol: { pattern: /(\.|^)search\.aol\.|(\.|^)aolsearch\.com$/, searchParam: 'q' },
          ask: { pattern: /(\.|^)ask\.com$/, searchParam: 'q' },
          avg: { pattern: /(\.|i|^)search\.avg\.com$/, searchParam: 'q' },
          baidu: { pattern: /(\.|^)baidu\.com$/, searchParam: 'wd' },
          bing: { pattern: /(\.|^)bing\.com$/, searchParam: 'q' },
          bt: { pattern: /(\.|^)search\.bt\.com$/, searchParam: 'p' },
          duckduckgo: { pattern: /(\.|^)duckduckgo\.com$/, searchParam: 'q' },
          earthlink: { pattern: /(\.|^)search\.earthlink\.net$/, searchParam: 'q' },
          ecosia: { pattern: /(\.|^)ecosia\.org$/, searchParam: 'q' },
          google: {
            pattern: /^(www\.)?google\.|com\.google\.android\.googlequicksearchbox$/,
            searchParam: 'q',
          },
          informationvine: { pattern: /(\.|^)informationvine\.com/, searchParam: 'q' },
          kvasir: { pattern: /(\.|^)kvasir\.no$/, searchParam: 'q' },
          lastfm: { pattern: /(\.|^)s\.last\.fm/, searchParam: 'q' },
          monstercrawler: { pattern: /(\.|^)search\.monstercrawler\.com$/, searchParam: 'q' },
          myway: { pattern: /(\.|^)search\.myway\.com$/, searchParam: 'q' },
          mywebsearch: { pattern: /(\.|^)search\.mywebsearch\.com$/, searchParam: 'searchfor' },
          rambler: { pattern: /(\.|^)nova\.rambler\.ru$/, searchParam: 'query' },
          reference: { pattern: /(\.|^)reference\.com$/, searchParam: 'q' },
          naver: { pattern: /(\.|^)search\.naver\.com$/, searchParam: 'query' },
          searchalot: { pattern: /(\.|^)searchalot\.com$/, searchParam: 'q' },
          searchencrypt: { pattern: /(\.|^)searchencrypt\.com/, searchParam: 'q' },
          so: { pattern: /(\.|^)so\.com/, searchParam: 'text' },
          sogou: { pattern: /(\.|^)sogou\.com$/, searchParam: 'query' },
          teoma: { pattern: /(\.|^)teoma\.com$/, searchParam: 'q' },
          webcrawler: { pattern: /(\.|^)webcrawler\.com/, searchParam: 'q' },
          xfinity: { pattern: /(\.|^)search\.xfinity\.com$/, searchParam: 'q' },
          yahoo: { pattern: /(\.|^)search\.yahoo\.com$/, searchParam: 'p' },
          yandex: { pattern: /(www\.|^)yandex\./, searchParam: 'text' },
        };
        config.socialSites = {
          blogspot: { pattern: /(\.|^)blogspot\./ },
          dailymotion: { pattern: /(\.|^)dailymotion\./ },
          deviantart: { pattern: /(\.|^)deviantart\.com/ },
          digg: { pattern: /(\.|^)digg\.com/ },
          disqus: { pattern: /(\.|^)disqus\.com$/ },
          facebook: { pattern: /(\.|^)facebook\.com$/ },
          fc2: { pattern: /(\.|^)fc2\.com$/ },
          flickr: { pattern: /(\.|^)flickr\.com$/ },
          foursquare: { pattern: /(\.|^)foursquare\.com$/ },
          goodreads: { pattern: /(\.|^)goodreads\.com$/ },
          googlePlus: { pattern: /(\.|^)plus.google\.com$/ },
          hatena: { pattern: /(\.|^)hatena\.ne\.jp$/ },
          instagram: { pattern: /(\.|^)instagram\.com$/ },
          linkedin: { pattern: /(\.|^)linkedin\.com$|^lnkd\.in$|com\.linkedin\.android/ },
          livejournal: { pattern: /(\.|^)livejournal\./ },
          meetup: { pattern: /(\.|^)meetup\.com$/ },
          myspace: { pattern: /(\.|^)myspace\.com$/ },
          nextdoor: { pattern: /(\.|^)nextdoor\.com$/ },
          pinterest: { pattern: /(\.|^)pinterest\.com|com\.pinterest$/ },
          reddit: { pattern: /(\.|^)reddit\.com$/ },
          slideshare: { pattern: /(\.|^)slideshare\.com$/ },
          stumbleupon: { pattern: /(\.|^)stumbleupon\.com$/ },
          tagged: { pattern: /(\.|^)tagged\.com|(\.|^)hi5\.com/ },
          taringa: { pattern: /(\.|^)taringa\.com$/ },
          tumblr: { pattern: /(\.|^)tumblr\.com$/ },
          twitter: { pattern: /^t\.co$|(\.|^)twitter\.com$/ },
          vimeo: { pattern: /(\.|^)vimeo\.com$/ },
          vk: { pattern: /(\.|^)vk\.com$/ },
          weibo: { pattern: /(\.|^)weibo\.com$/ },
          wordpress: { pattern: /(\.|^)wordpress\.com$/ },
          xing: { pattern: /(\.|^)xing\.com$/ },
          yahooAnswers: { pattern: /(\.|^)answers\.yahoo\.com$/ },
          yammer: { pattern: /(\.|^)yammer\.com$/ },
          yelp: { pattern: /(\.|^)yelp\./ },
          youtube: { pattern: /(\.|^)youtube\.com$/ },
          twelvesecondstv: { pattern: /(\.|^)12seconds\.tv$/ },
          fourtravel: { pattern: /(\.|^)4travel\.jp$/ },
          advogato: { pattern: /(\.|^)advogato\.org$/ },
          ameba: { pattern: /(\.|^)ameba\.jp$/ },
          anobil: { pattern: /(\.|^)anobil\.com$/ },
          asmallworld: { pattern: /(\.|^)asmallworld\.net$/ },
          avforums: { pattern: /(\.|^)avforumd\.com$/ },
          backtype: { pattern: /(\.|^)backtype\.com$/ },
          badoo: { pattern: /(\.|^)badoo\.com$/ },
          bebo: { pattern: /(\.|^)bebo\.com$/ },
          bigadda: { pattern: /(\.|^)bigadda\.com$/ },
          bigtent: { pattern: /(\.|^)bigtent\.com$/ },
          blip: { pattern: /(\.|^)blip\.no$/ },
          blackplanet: { pattern: /(\.|^)blackplanet\.com$/ },
          blogseesa: { pattern: /(\.|^)blog\.seesa\.jp$/ },
          blogster: { pattern: /(\.|^)blogster\.com$/ },
          blomotion: { pattern: /(\.|^)blomotion\.com$/ },
          bolt: { pattern: /(\.|^)bolt\.com$/ },
          brightknife: { pattern: /(\.|^)brightknife\.com$/ },
          buzznet: { pattern: /(\.|^)buzznet\.com$/ },
          cafemom: { pattern: /(\.|^)cafemom\.com$/ },
          care2: { pattern: /(\.|^)care2\.com$/ },
          classmates: { pattern: /(\.|^)classmates\.com$/ },
          cloob: { pattern: /(\.|^)cloob\.com$/ },
          collegeblender: { pattern: /(\.|^)collegeblender\.com$/ },
          cyworld: { pattern: /(\.|^)cyworld\.co\.kr$/ },
          cyworldcom: { pattern: /(\.|^)cyworld\.com\.cn$/ },
          delicious: { pattern: /(\.|^)delicious\.com$/ },
          diigo: { pattern: /(\.|^)diigo\.com$/ },
          draugiem: { pattern: /(\.|^)draugiem\.lv$/ },
          faceparty: { pattern: /(\.|^)faceparty\.com$/ },
          flixster: { pattern: /(\.|^)flixster\.com$/ },
          fotolog: { pattern: /(\.|^)fotolog\.com$/ },
          friendfeed: { pattern: /(\.|^)friendfeed\.com$/ },
          friendsreunited: { pattern: /(\.|^)friendsreunited\.com$/ },
          friendsreuniteduk: { pattern: /(\.|^)friendsreunited\.co\.uk$/ },
          friendster: { pattern: /(\.|^)friendster\.com$/ },
          fubar: { pattern: /(\.|^)fubar\.com$/ },
          gaiaonline: { pattern: /(\.|^)gaiaonline\.com$/ },
          geni: { pattern: /(\.|^)geni\.com$/ },
          grono: { pattern: /(\.|^)grono\.net$/ },
          habbo: { pattern: /(\.|^)habbo\.com$/ },
          hifive: { pattern: /(\.|^)hi5\.com$/ },
          hotnews: { pattern: /(\.|^)hotnews\.infoseek\.co\.jp$/ },
          hyves: { pattern: /(\.|^)hyves\.nl$/ },
          ibibo: { pattern: /(\.|^)ibibo\.com$/ },
          identi: { pattern: /(\.|^)identi\.ca$/ },
          imeem: { pattern: /(\.|^)imeem\.com$/ },
          intensedebate: { pattern: /(\.|^)intensedebate\.com$/ },
          ircgalleria: { pattern: /(\.|^)irc-galleria\.net$/ },
          iwiw: { pattern: /(\.|^)iwiw\.hu$/ },
          jaiku: { pattern: /(\.|^)jaiku\.com$/ },
          jpmyspace: { pattern: /(\.|^)jp\.myspace\.com$/ },
          kaixin: { pattern: /(\.|^)kaixin(001|002)\.com$/ },
          kakaku: { pattern: /(\.|^)kakaku\.com$/ },
          kanshin: { pattern: /(\.|^)kanshin\.com$/ },
          kozocom: { pattern: /(\.|^)kozocom\.com$/ },
          last: { pattern: /(\.|^)last\.fm$/ },
          lnkd: { pattern: /(\.|^)lnkd\.in$/ },
          matomenaver: { pattern: /(\.|^)matome\.naver\.jp$/ },
          metoday: { pattern: /(\.|^)me2day\.net$/ },
          misterwong: { pattern: /(\.|^)mister-wong\.com$/ },
          mixi: { pattern: /(\.|^)mixi\.jp$/ },
          mouthshut: { pattern: /(\.|^)mouthshut\.com$/ },
          mpweixin: { pattern: /(\.|^)mp\.weixin\.qq\.com$/ },
          multiply: { pattern: /(\.|^)multiply\.com$/ },
          mumsnet: { pattern: /(\.|^)mumsnet.com$/ },
          myheritage: { pattern: /(\.|^)myheritage\.com$/ },
          mylife: { pattern: /(\.|^)mylife\.com$/ },
          myyearbook: { pattern: /(\.|^)myyearbook\.com$/ },
          naszaklasa: { pattern: /(\.|^)nasza-klasa\.pl$/ },
          netlog: { pattern: /(\.|^)netlog\.com$/ },
          nettby: { pattern: /(\.|^)nettby\.no$/ },
          netvibes: { pattern: /(\.|^)netvibes\.com$/ },
          nicovideo: { pattern: /(\.|^)nicovideo\.jp$/ },
          ning: { pattern: /(\.|^)ning\.com$/ },
          odnoklassniki: { pattern: /(\.|^)odnoklassniki\.ru$/ },
          okru: { pattern: /(\.|^)ok\.ru$/ },
          orkut: { pattern: /(\.|^)orkut\.com$/ },
          pakila: { pattern: /(\.|^)pakila\.jp$/ },
          photobucket: { pattern: /(\.|^)photobucket\.com$/ },
          pinterestintl: { pattern: /(\.|^pinterest)\.[A-Za-z]{2,3}(\.uk|kr)?$/ },
          plurk: { pattern: /(\.|^)plurk\.com$/ },
          plaxo: { pattern: /(\.|^)plaxo\.com$/ },
          plusgoogle: { pattern: /(\.|^)plus\.google\.com$/ },
          post: { pattern: /(\.|^)po\.st$/ },
          renren: { pattern: /(\.|^)renren\.com$/ },
          smcb: { pattern: /(\.|^)smcb\.jp$/ },
          smugmug: { pattern: /(\.|^)smugmug\.com$/ },
          sonico: { pattern: /(\.|^)sonico\.com$/ },
          studivz: { pattern: /(\.|^)studivz\.net$/ },
          tonesixthree: { pattern: /(\.|^)t\.163\.com$/ },
          thexun: { pattern: /(\.|^)t\.hexun\.com$/ },
          tifeng: { pattern: /(\.|^)t\.ifeng\.com$/ },
          tpeople: { pattern: /(\.|^)t\.people\.com\.cn$/ },
          tqq: { pattern: /(\.|^)t\.qq\.com$/ },
          tsina: { pattern: /(\.|^)t\.sina\.com\.cn$/ },
          tabelog: { pattern: /(\.|^)tabelog\.com$/ },
          thefancy: { pattern: /(\.|^)site\.com$/ },
          toutiao: { pattern: /(\.|^)toutiao\.com$/ },
          tripit: { pattern: /(\.|^)tripit\.com$/ },
          trombi: { pattern: /(\.|^)trombi\.com$/ },
          trytrend: { pattern: /(\.|^)trytrend.jp\.com$/ },
          tuenti: { pattern: /(\.|^)tuenti\.com$/ },
          twine: { pattern: /(\.|^)twine\.com$/ },
          uhuru: { pattern: /(\.|^)uhuru\.jp$/ },
          viadeo: { pattern: /(\.|^)viadeo\.com$/ },
          wayn: { pattern: /(\.|^)wayn\.com$/ },
          weourfamily: { pattern: /(\.|^)weourfamily\.com$/ },
          werkenntwen: { pattern: /(\.|^)wer-kennt-wen\.de$/ },
          xanga: { pattern: /(\.|^)xanga\.com$/ },
          yaplog: { pattern: /(\.|^)yaplog\.jp$/ },
          yelpuk: { pattern: /(\.|^)yelp\.co\.uk$/ },
          youku: { pattern: /(\.|^)youku\.com$/ },
          yozmdaum: { pattern: /(\.|^)yozm\.daum\.net$/ },
          yuku: { pattern: /(\.|^)yuku\.com$/ },
          zhihu: { pattern: /(\.|^)zhihu\.com$/ },
          zooomr: { pattern: /(\.|^)zooomr\.com$/ },
        };
        config.countryTldMap = {
          '.br': 'br',
          '.ca': 'ca',
          '.uk': 'gb',
          '.au': 'au',
          '.in': 'in',
          '.mx': 'mx',
          '.my': 'my',
          '.ph': 'ph',
          '.fr': 'fr',
          '.sg': 'sg',
          '.ae': 'ae',
          '.hk': 'hk',
          '.za': 'za',
        };
        config.countryPathMap = {
          br: 'br',
          ca: 'ca',
          uk: 'gb',
          au: 'au',
          in: 'in',
          mx: 'mx',
          my: 'my',
          ph: 'ph',
          fr: 'fr',
          sg: 'sg',
          ae: 'ae',
          hk: 'hk',
          za: 'za',
        };
        config.countryPathDomainExclusions = ['iop.intuit.com'];
        config.addDataAttribute = function () {
          var host = wa.hostname.match(/(www|perfsp|qasp)\.intuit\.com/);
          if (host) return true;
          else return false;
        };
        config.formAnalysisEvents = {};
        config.marketingChannelCookieNames = {
          com: {
            prod: { main: 'qbn.qbo_sc', timer: 'qbn.qbo_sctimer' },
            dev: { main: 'qbn.ptc.qbo_sc', timer: 'qbn.ptc.qbo_sctimer' },
          },
          intl: {
            prod: { main: 'qbn.sbm_global_sc_channel', timer: 'qbn.sbm_global_sc_channel_timer' },
            dev: {
              main: 'qbn.sbm_global_sc_channel_test',
              timer: 'qbn.sbm_global_sc_channel_test_timer',
            },
          },
        };
        config.countryMap = {
          AF: 'Afghanistan',
          AX: 'Aland Islands',
          AL: 'Albania',
          DZ: 'Algeria',
          AS: 'American Samoa',
          AD: 'Andorra',
          AO: 'Angola',
          AI: 'Anguilla',
          AQ: 'Antarctica',
          AG: 'Antigua And Barbuda',
          AR: 'Argentina',
          AM: 'Armenia',
          AW: 'Aruba',
          AU: 'Australia',
          AT: 'Austria',
          AZ: 'Azerbaijan',
          BS: 'Bahamas',
          BH: 'Bahrain',
          BD: 'Bangladesh',
          BB: 'Barbados',
          BY: 'Belarus',
          BE: 'Belgium',
          BZ: 'Belize',
          BJ: 'Benin',
          BM: 'Bermuda',
          BT: 'Bhutan',
          BO: 'Bolivia',
          BA: 'Bosnia And Herzegovina',
          BW: 'Botswana',
          BV: 'Bouvet Island',
          BR: 'Brazil',
          IO: 'British Indian Ocean Territory',
          BN: 'Brunei Darussalam',
          BG: 'Bulgaria',
          BF: 'Burkina Faso',
          BI: 'Burundi',
          KH: 'Cambodia',
          CM: 'Cameroon',
          CA: 'Canada',
          CV: 'Cape Verde',
          KY: 'Cayman Islands',
          CF: 'Central African Republic',
          TD: 'Chad',
          CL: 'Chile',
          CN: 'China',
          CX: 'Christmas Island',
          CC: 'Cocos (Keeling) Islands',
          CO: 'Colombia',
          KM: 'Comoros',
          CG: 'Congo',
          CD: 'Congo, Democratic Republic',
          CK: 'Cook Islands',
          CR: 'Costa Rica',
          CI: "Cote D'Ivoire",
          HR: 'Croatia',
          CU: 'Cuba',
          CY: 'Cyprus',
          CZ: 'Czech Republic',
          DK: 'Denmark',
          DJ: 'Djibouti',
          DM: 'Dominica',
          DO: 'Dominican Republic',
          EC: 'Ecuador',
          EG: 'Egypt',
          SV: 'El Salvador',
          GQ: 'Equatorial Guinea',
          ER: 'Eritrea',
          EE: 'Estonia',
          ET: 'Ethiopia',
          FK: 'Falkland Islands (Malvinas)',
          FO: 'Faroe Islands',
          FJ: 'Fiji',
          FI: 'Finland',
          FR: 'France',
          GF: 'French Guiana',
          PF: 'French Polynesia',
          TF: 'French Southern Territories',
          GA: 'Gabon',
          GM: 'Gambia',
          GE: 'Georgia',
          DE: 'Germany',
          GH: 'Ghana',
          GI: 'Gibraltar',
          GR: 'Greece',
          GL: 'Greenland',
          GD: 'Grenada',
          GP: 'Guadeloupe',
          GU: 'Guam',
          GT: 'Guatemala',
          GG: 'Guernsey',
          GN: 'Guinea',
          GW: 'Guinea-Bissau',
          GY: 'Guyana',
          HT: 'Haiti',
          HM: 'Heard Island & Mcdonald Islands',
          VA: 'Holy See (Vatican City State)',
          HN: 'Honduras',
          HK: 'Hong Kong',
          HU: 'Hungary',
          IS: 'Iceland',
          IN: 'India',
          ID: 'Indonesia',
          IR: 'Iran, Islamic Republic Of',
          IQ: 'Iraq',
          IE: 'Ireland',
          IM: 'Isle Of Man',
          IL: 'Israel',
          IT: 'Italy',
          JM: 'Jamaica',
          JP: 'Japan',
          JE: 'Jersey',
          JO: 'Jordan',
          KZ: 'Kazakhstan',
          KE: 'Kenya',
          KI: 'Kiribati',
          KR: 'Korea',
          KW: 'Kuwait',
          KG: 'Kyrgyzstan',
          LA: "Lao People's Democratic Republic",
          LV: 'Latvia',
          LB: 'Lebanon',
          LS: 'Lesotho',
          LR: 'Liberia',
          LY: 'Libyan Arab Jamahiriya',
          LI: 'Liechtenstein',
          LT: 'Lithuania',
          LU: 'Luxembourg',
          MO: 'Macao',
          MK: 'Macedonia',
          MG: 'Madagascar',
          MW: 'Malawi',
          MY: 'Malaysia',
          MV: 'Maldives',
          ML: 'Mali',
          MT: 'Malta',
          MH: 'Marshall Islands',
          MQ: 'Martinique',
          MR: 'Mauritania',
          MU: 'Mauritius',
          YT: 'Mayotte',
          MX: 'Mexico',
          FM: 'Micronesia, Federated States Of',
          MD: 'Moldova',
          MC: 'Monaco',
          MN: 'Mongolia',
          ME: 'Montenegro',
          MS: 'Montserrat',
          MA: 'Morocco',
          MZ: 'Mozambique',
          MM: 'Myanmar',
          NA: 'Namibia',
          NR: 'Nauru',
          NP: 'Nepal',
          NL: 'Netherlands',
          AN: 'Netherlands Antilles',
          NC: 'New Caledonia',
          NZ: 'New Zealand',
          NI: 'Nicaragua',
          NE: 'Niger',
          NG: 'Nigeria',
          NU: 'Niue',
          NF: 'Norfolk Island',
          MP: 'Northern Mariana Islands',
          NO: 'Norway',
          OM: 'Oman',
          PK: 'Pakistan',
          PW: 'Palau',
          PS: 'Palestinian Territory, Occupied',
          PA: 'Panama',
          PG: 'Papua New Guinea',
          PY: 'Paraguay',
          PE: 'Peru',
          PH: 'Philippines',
          PN: 'Pitcairn',
          PL: 'Poland',
          PT: 'Portugal',
          PR: 'Puerto Rico',
          QA: 'Qatar',
          RE: 'Reunion',
          RO: 'Romania',
          RU: 'Russian Federation',
          RW: 'Rwanda',
          BL: 'Saint Barthelemy',
          SH: 'Saint Helena',
          KN: 'Saint Kitts And Nevis',
          LC: 'Saint Lucia',
          MF: 'Saint Martin',
          PM: 'Saint Pierre And Miquelon',
          VC: 'Saint Vincent And Grenadines',
          WS: 'Samoa',
          SM: 'San Marino',
          ST: 'Sao Tome And Principe',
          SA: 'Saudi Arabia',
          SN: 'Senegal',
          RS: 'Serbia',
          SC: 'Seychelles',
          SL: 'Sierra Leone',
          SG: 'Singapore',
          SK: 'Slovakia',
          SI: 'Slovenia',
          SB: 'Solomon Islands',
          SO: 'Somalia',
          ZA: 'South Africa',
          GS: 'South Georgia And Sandwich Isl.',
          ES: 'Spain',
          LK: 'Sri Lanka',
          SD: 'Sudan',
          SR: 'Suriname',
          SJ: 'Svalbard And Jan Mayen',
          SZ: 'Swaziland',
          SE: 'Sweden',
          CH: 'Switzerland',
          SY: 'Syrian Arab Republic',
          TW: 'Taiwan',
          TJ: 'Tajikistan',
          TZ: 'Tanzania',
          TH: 'Thailand',
          TL: 'Timor-Leste',
          TG: 'Togo',
          TK: 'Tokelau',
          TO: 'Tonga',
          TT: 'Trinidad And Tobago',
          TN: 'Tunisia',
          TR: 'Turkey',
          TM: 'Turkmenistan',
          TC: 'Turks And Caicos Islands',
          TV: 'Tuvalu',
          UG: 'Uganda',
          UA: 'Ukraine',
          AE: 'United Arab Emirates',
          GB: 'United Kingdom',
          US: 'United States',
          UM: 'United States Outlying Islands',
          UY: 'Uruguay',
          UZ: 'Uzbekistan',
          VU: 'Vanuatu',
          VE: 'Venezuela',
          VN: 'Viet Nam',
          VG: 'Virgin Islands, British',
          VI: 'Virgin Islands, U.S.',
          WF: 'Wallis And Futuna',
          EH: 'Western Sahara',
          YE: 'Yemen',
          ZM: 'Zambia',
          ZW: 'Zimbabwe',
        };
        setTimeout(function () {
          if (
            window.intuit &&
            intuit.tracking &&
            intuit.tracking.ecs &&
            wa &&
            typeof wa.trackLinkPlus == 'function'
          )
            try {
              window.intuit.tracking.ecs.analytics.on('track', function (
                event,
                properties,
                options
              ) {
                if (event == 'lead:create_submitted') {
                  var leadFromSeg = properties.lead_xref_id || '';
                  if (leadFromSeg !== '' && wa)
                    wa.trackLinkPlus('link', {
                      linkName: 'lead_submit_success',
                      leadEvalID: leadFromSeg,
                    });
                }
              });
            } catch (err) {}
        }, 3000);
      },
      3398013,
      496143
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.bindDOMParsed(function () {
          var elements = Bootstrapper.qwery('.IntuitBrandClicktoMint');
          for (var i = 0; i < elements.length; i++)
            Bootstrapper.unobtrusiveAddEvent(elements[i], 'onclick', function () {
              Bootstrapper.ensEvent.trigger('ICom - Button Click to Mint');
            });
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['ICom - Button Click to Mint'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var data = {};
          if ('') data['value'] = '';
          if ('') data['currency'] = '';
          if ('') data['content_name'] = '';
          if ('') data['content_category'] = '';
          if ('') data['content_ids'] = '' ? ''.split(',') : '';
          if ('') data['content_type'] = '';
          if ('') data['num_items'] = '';
          if ('') data['search_string'] = '';
          if ('') data['status'] = '';
          var eventTrackingPixelId = '1827482914219447';
          var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_mint' : 'CustomEvent';
          var trackString =
            'CustomEvent' === 'CustomEvent'
              ? eventTrackingPixelId
                ? 'trackSingleCustom'
                : 'trackCustom'
              : eventTrackingPixelId
              ? 'trackSingle'
              : 'track';
          var makeRequest = function () {
            if (eventTrackingPixelId) fbq(trackString, eventTrackingPixelId, eventType, data);
            else fbq(trackString, eventType, data);
          };
          if (true)
            var interval = setInterval(function () {
              if (window.fbq) {
                makeRequest();
                clearInterval(interval);
              }
            }, 100);
          else makeRequest();
        });
      },
      2762241,
      [3309959],
      585676,
      [520782]
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['ExecuteAAM'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          !(function () {
            function e (e, t, s) {
              var n = '',
                i = t || 'Error caught in DIL module/submodule: ';
              return (
                e === Object(e)
                  ? (n = i + (e.message || 'err has no message'))
                  : ((n = i + 'err is not a valid object'), (e = {})),
                (e.message = n),
                s instanceof DIL && (e.partner = s.api.getPartner()),
                DIL.errorModule.handleError(e),
                (this.errorMessage = n)
              );
            }
            var r,
              a,
              o,
              t = {
                submitUniversalAnalytics: function (e, t, s) {
                  try {
                    var n,
                      i,
                      r,
                      a,
                      o = e.getAll()[0],
                      d = o[s || 'b'].data.keys,
                      u = {};
                    for (n = 0, i = d.length; n < i; n++)
                      (r = d[n]),
                        void 0 === (a = o.get(r)) ||
                          'function' == typeof a ||
                          a === Object(a) ||
                          /^_/.test(r) ||
                          /^&/.test(r) ||
                          (u[r] = a);
                    return t.api.signals(u, 'c_').submit(), u;
                  } catch (e) {
                    return 'Caught error with message: ' + e.message;
                  }
                },
                dil: null,
                arr: null,
                tv: null,
                errorMessage: '',
                defaultTrackVars: [
                  '_setAccount',
                  '_setCustomVar',
                  '_addItem',
                  '_addTrans',
                  '_trackSocial',
                ],
                defaultTrackVarsObj: null,
                signals: {},
                hasSignals: !1,
                handle: e,
                init: function (e, t, s) {
                  try {
                    (this.dil = null),
                      (this.arr = null),
                      (this.tv = null),
                      (this.errorMessage = ''),
                      (this.signals = {}),
                      (this.hasSignals = !1);
                    var n = { name: 'DIL GA Module Error' },
                      i = '';
                    t instanceof DIL
                      ? ((this.dil = t), (n.partner = this.dil.api.getPartner()))
                      : ((i = 'dilInstance is not a valid instance of DIL'),
                        (n.message = i),
                        DIL.errorModule.handleError(n)),
                      e instanceof Array && e.length
                        ? (this.arr = e)
                        : ((i = 'gaArray is not an array or is empty'),
                          (n.message = i),
                          DIL.errorModule.handleError(n)),
                      (this.tv = this.constructTrackVars(s)),
                      (this.errorMessage = i);
                  } catch (e) {
                    this.handle(e, 'DIL.modules.GA.init() caught error with message ', this.dil);
                  } finally {
                    return this;
                  }
                },
                constructTrackVars: function (e) {
                  var t,
                    s,
                    n,
                    i,
                    r,
                    a,
                    o = [];
                  if (this.defaultTrackVarsObj !== Object(this.defaultTrackVarsObj)) {
                    for (a = {}, s = 0, n = (r = this.defaultTrackVars).length; s < n; s++)
                      a[r[s]] = !0;
                    this.defaultTrackVarsObj = a;
                  } else a = this.defaultTrackVarsObj;
                  if (e === Object(e)) {
                    if ((t = e.names) instanceof Array && (n = t.length))
                      for (s = 0; s < n; s++)
                        'string' == typeof (i = t[s]) && i.length && i in a && o.push(i);
                    if (o.length) return o;
                  }
                  return this.defaultTrackVars;
                },
                constructGAObj: function (e) {
                  var t,
                    s,
                    n,
                    i,
                    r,
                    a,
                    o = {},
                    d = e instanceof Array ? e : this.arr;
                  for (t = 0, s = d.length; t < s; t++)
                    (n = d[t]) instanceof Array &&
                      n.length &&
                      ((r = n = []),
                      (a = d[t]),
                      r instanceof Array && a instanceof Array && Array.prototype.push.apply(r, a),
                      'string' == typeof (i = n.shift()) &&
                        i.length &&
                        (o[i] instanceof Array || (o[i] = []), o[i].push(n)));
                  return o;
                },
                addToSignals: function (e, t) {
                  return (
                    'string' == typeof e &&
                    '' !== e &&
                    null != t &&
                    '' !== t &&
                    (this.signals[e] instanceof Array || (this.signals[e] = []),
                    this.signals[e].push(t),
                    (this.hasSignals = !0))
                  );
                },
                constructSignals: function () {
                  var e,
                    t,
                    s,
                    n,
                    i,
                    r,
                    a = this.constructGAObj(),
                    o = {
                      _setAccount: function (e) {
                        this.addToSignals('c_accountId', e);
                      },
                      _setCustomVar: function (e, t, s) {
                        'string' == typeof t && t.length && this.addToSignals('c_' + t, s);
                      },
                      _addItem: function (e, t, s, n, i, r) {
                        this.addToSignals('c_itemOrderId', e),
                          this.addToSignals('c_itemSku', t),
                          this.addToSignals('c_itemName', s),
                          this.addToSignals('c_itemCategory', n),
                          this.addToSignals('c_itemPrice', i),
                          this.addToSignals('c_itemQuantity', r);
                      },
                      _addTrans: function (e, t, s, n, i, r, a, o) {
                        this.addToSignals('c_transOrderId', e),
                          this.addToSignals('c_transAffiliation', t),
                          this.addToSignals('c_transTotal', s),
                          this.addToSignals('c_transTax', n),
                          this.addToSignals('c_transShipping', i),
                          this.addToSignals('c_transCity', r),
                          this.addToSignals('c_transState', a),
                          this.addToSignals('c_transCountry', o);
                      },
                      _trackSocial: function (e, t, s, n) {
                        this.addToSignals('c_socialNetwork', e),
                          this.addToSignals('c_socialAction', t),
                          this.addToSignals('c_socialTarget', s),
                          this.addToSignals('c_socialPagePath', n);
                      },
                    },
                    d = this.tv;
                  for (e = 0, t = d.length; e < t; e++)
                    if (
                      ((s = d[e]),
                      a.hasOwnProperty(s) && o.hasOwnProperty(s) && (r = a[s]) instanceof Array)
                    )
                      for (n = 0, i = r.length; n < i; n++) o[s].apply(this, r[n]);
                },
                submit: function () {
                  try {
                    return '' !== this.errorMessage
                      ? this.errorMessage
                      : (this.constructSignals(),
                        this.hasSignals
                          ? (this.dil.api.signals(this.signals).submit(),
                            'Signals sent: ' +
                              this.dil.helpers.convertObjectToKeyValuePairs(this.signals, '=', !0))
                          : 'No signals present');
                  } catch (e) {
                    return this.handle(
                      e,
                      'DIL.modules.GA.submit() caught error with message ',
                      this.dil
                    );
                  }
                },
                Stuffer: {
                  LIMIT: 5,
                  dil: null,
                  cookieName: null,
                  delimiter: null,
                  errorMessage: '',
                  handle: e,
                  callback: null,
                  v: function () {
                    return !1;
                  },
                  init: function (e, t, s) {
                    try {
                      (this.dil = null),
                        (this.callback = null),
                        (this.errorMessage = ''),
                        e instanceof DIL
                          ? ((this.dil = e),
                            (this.v = this.dil.validators.isPopulatedString),
                            (this.cookieName = this.v(t) ? t : 'aam_ga'),
                            (this.delimiter = this.v(s) ? s : '|'))
                          : this.handle(
                              { message: 'dilInstance is not a valid instance of DIL' },
                              'DIL.modules.GA.Stuffer.init() error: '
                            );
                    } catch (e) {
                      this.handle(
                        e,
                        'DIL.modules.GA.Stuffer.init() caught error with message ',
                        this.dil
                      );
                    } finally {
                      return this;
                    }
                  },
                  process: function (e) {
                    var t,
                      s,
                      n,
                      i,
                      r,
                      a,
                      o,
                      d,
                      u,
                      c,
                      l,
                      h = !1,
                      f = 1;
                    if (e === Object(e) && (t = e.stuff) && t instanceof Array && (s = t.length))
                      for (n = 0; n < s; n++)
                        if (
                          (i = t[n]) &&
                          i === Object(i) &&
                          ((r = i.cn), (a = i.cv), r === this.cookieName && this.v(a))
                        ) {
                          h = !0;
                          break;
                        }
                    if (h) {
                      for (
                        o = a.split(this.delimiter),
                          void 0 === window._gaq && (window._gaq = []),
                          d = window._gaq,
                          n = 0,
                          s = o.length;
                        n < s &&
                        ((c = (u = o[n].split('='))[0]),
                        (l = u[1]),
                        this.v(c) && this.v(l) && d.push(['_setCustomVar', f++, c, l, 1]),
                        !(f > this.LIMIT));
                        n++
                      );
                      this.errorMessage =
                        1 < f ? 'No errors - stuffing successful' : 'No valid values to stuff';
                    } else this.errorMessage = 'Cookie name and value not found in json';
                    if ('function' == typeof this.callback) return this.callback();
                  },
                  submit: function () {
                    try {
                      var t = this;
                      return '' !== this.errorMessage
                        ? this.errorMessage
                        : (this.dil.api
                            .afterResult(function (e) {
                              t.process(e);
                            })
                            .submit(),
                          'DIL.modules.GA.Stuffer.submit() successful');
                    } catch (e) {
                      return this.handle(
                        e,
                        'DIL.modules.GA.Stuffer.submit() caught error with message ',
                        this.dil
                      );
                    }
                  },
                },
              },
              s = {
                dil: null,
                handle: e,
                init: function (e, t, s, n) {
                  try {
                    var f = this,
                      i = { name: 'DIL Site Catalyst Module Error' },
                      p = function (e) {
                        return (i.message = e), DIL.errorModule.handleError(i), e;
                      };
                    if (
                      ((this.options = n === Object(n) ? n : {}),
                      (this.dil = null),
                      !(t instanceof DIL))
                    )
                      return p('dilInstance is not a valid instance of DIL');
                    if (((this.dil = t), (i.partner = t.api.getPartner()), e !== Object(e)))
                      return p('siteCatalystReportingSuite is not an object');
                    var r = e;
                    return (
                      (window.AppMeasurement_Module_DIL = r.m_DIL = function (e) {
                        var t = 'function' == typeof e.m_i ? e.m_i('DIL') : this;
                        if (t !== Object(t)) return p('m is not an object');
                        (t.trackVars = f.constructTrackVars(s)),
                          (t.d = 0),
                          (t.s = e),
                          (t._t = function () {
                            var e,
                              t,
                              s,
                              n,
                              i,
                              r,
                              a = this,
                              o = ',' + a.trackVars + ',',
                              d = a.s,
                              u = [],
                              c = [],
                              l = {},
                              h = !1;
                            if (d !== Object(d))
                              return p('Error in m._t function: s is not an object');
                            if (a.d) {
                              if ('function' == typeof d.foreachVar)
                                d.foreachVar(function (e, t) {
                                  void 0 !== t && ((l[e] = t), (h = !0));
                                }, a.trackVars);
                              else {
                                if (!(d.va_t instanceof Array))
                                  return p('Error in m._t function: s.va_t is not an array');
                                if (
                                  (d.lightProfileID
                                    ? (e = d.lightTrackVars) && (e = ',' + e + ',' + d.vl_mr + ',')
                                    : (d.pe || d.linkType) &&
                                      ((e = d.linkTrackVars),
                                      d.pe &&
                                        ((t =
                                          d.pe.substring(0, 1).toUpperCase() + d.pe.substring(1)),
                                        d[t] && (e = d[t].trackVars)),
                                      e && (e = ',' + e + ',' + d.vl_l + ',' + d.vl_l2 + ',')),
                                  e)
                                ) {
                                  for (r = 0, u = e.split(','); r < u.length; r++)
                                    0 <= o.indexOf(',' + u[r] + ',') && c.push(u[r]);
                                  c.length && (o = ',' + c.join(',') + ',');
                                }
                                for (n = 0, i = d.va_t.length; n < i; n++)
                                  (s = d.va_t[n]),
                                    0 <= o.indexOf(',' + s + ',') &&
                                      void 0 !== d[s] &&
                                      null !== d[s] &&
                                      '' !== d[s] &&
                                      ((l[s] = d[s]), (h = !0));
                              }
                              f.includeContextData(d, l).store_populated && (h = !0),
                                h && a.d.api.signals(l, 'c_').submit();
                            }
                          });
                      }),
                      r.loadModule('DIL'),
                      (r.DIL.d = t),
                      i.message
                        ? i.message
                        : 'DIL.modules.siteCatalyst.init() completed with no errors'
                    );
                  } catch (e) {
                    return this.handle(
                      e,
                      'DIL.modules.siteCatalyst.init() caught error with message ',
                      this.dil
                    );
                  }
                },
                constructTrackVars: function (e) {
                  var t,
                    s,
                    n,
                    i,
                    r,
                    a,
                    o,
                    d,
                    u = [];
                  if (e === Object(e)) {
                    if ((t = e.names) instanceof Array && (i = t.length))
                      for (n = 0; n < i; n++)
                        'string' == typeof (r = t[n]) && r.length && u.push(r);
                    if ((s = e.iteratedNames) instanceof Array && (i = s.length))
                      for (n = 0; n < i; n++)
                        if (
                          (a = s[n]) === Object(a) &&
                          ((r = a.name),
                          (d = parseInt(a.maxIndex, 10)),
                          'string' == typeof r && r.length && !isNaN(d) && 0 <= d)
                        )
                          for (o = 0; o <= d; o++) u.push(r + o);
                    if (u.length) return u.join(',');
                  }
                  return this.constructTrackVars({
                    names: [
                      'pageName',
                      'channel',
                      'campaign',
                      'products',
                      'events',
                      'pe',
                      'pev1',
                      'pev2',
                      'pev3',
                    ],
                    iteratedNames: [
                      { name: 'prop', maxIndex: 75 },
                      { name: 'eVar', maxIndex: 250 },
                    ],
                  });
                },
                includeContextData: function (e, t) {
                  var s = {},
                    n = !1;
                  if (e.contextData === Object(e.contextData)) {
                    var i,
                      r,
                      a,
                      o,
                      d,
                      u = e.contextData,
                      c = this.options.replaceContextDataPeriodsWith,
                      l = this.options.filterFromContextVariables,
                      h = {};
                    if ((('string' == typeof c && c.length) || (c = '_'), l instanceof Array))
                      for (i = 0, r = l.length; i < r; i++)
                        (a = l[i]), this.dil.validators.isPopulatedString(a) && (h[a] = !0);
                    for (o in u)
                      u.hasOwnProperty(o) &&
                        !h[o] &&
                        ((d = u[o]) || 'number' == typeof d) &&
                        ((t[(o = ('contextData.' + o).replace(/\./g, c))] = d), (n = !0));
                  }
                  return (s.store_populated = n), s;
                },
              };
            'function' != typeof window.DIL &&
              ((window.DIL = function (s) {
                var c,
                  e,
                  I,
                  r,
                  u,
                  p,
                  t,
                  a,
                  n,
                  i,
                  o,
                  d,
                  y,
                  l,
                  h,
                  g,
                  f,
                  m,
                  b,
                  v,
                  D,
                  S = [],
                  _ = {};
                function O (e) {
                  return void 0 === e || !0 === e;
                }
                s !== Object(s) && (s = {}),
                  (I = s.partner),
                  (r = s.containerNSID),
                  (u = s.mappings),
                  (p = s.uuidCookie),
                  (t = !0 === s.enableErrorReporting),
                  (a = s.visitorService),
                  (n = s.declaredId),
                  (i = !0 === s.delayAllUntilWindowLoad),
                  (o = O(s.secureDataCollection)),
                  (d = 'boolean' == typeof s.isCoopSafe ? s.isCoopSafe : null),
                  (y = O(s.enableHrefererParam)),
                  (l = O(s.enableLogging)),
                  (h = O(s.enableUrlDestinations)),
                  (g = O(s.enableCookieDestinations)),
                  (f = !0 === s.disableDefaultRequest),
                  (m = s.afterResultForDefaultRequest),
                  (b = s.visitorConstructor),
                  (v = !0 === s.disableCORS),
                  (D = !0 === s.ignoreHardDependencyOnVisitorAPI),
                  t && DIL.errorModule.activate(),
                  D &&
                    S.push(
                      'Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.'
                    );
                var C = !0 === window._dil_unit_tests;
                if (((c = arguments[1]) && S.push(c + ''), !I || 'string' != typeof I)) {
                  var w = {
                    name: 'error',
                    message: (c = 'DIL partner is invalid or not specified in initConfig'),
                    filename: 'dil.js',
                  };
                  return DIL.errorModule.handleError(w), new Error(c);
                }
                if (
                  ((c =
                    'DIL containerNSID is invalid or not specified in initConfig, setting to default of 0'),
                  (r || 'number' == typeof r) &&
                    ((r = parseInt(r, 10)), !isNaN(r) && 0 <= r && (c = '')),
                  c && ((r = 0), S.push(c), (c = '')),
                  (e = DIL.getDil(I, r)) instanceof DIL &&
                    e.api.getPartner() === I &&
                    e.api.getContainerNSID() === r)
                )
                  return e;
                if (!(this instanceof DIL))
                  return new DIL(
                    s,
                    "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " +
                      I +
                      ' and containerNSID = ' +
                      r
                  );
                DIL.registerDil(this, I, r);
                var L = {
                    doesConsoleLogExist:
                      window.console === Object(window.console) &&
                      'function' == typeof window.console.log,
                    logMemo: {},
                    log: function (e) {
                      (S.push(e), l && this.doesConsoleLogExist) &&
                        Function.prototype.bind
                          .call(window.console.log, window.console)
                          .apply(window.console, arguments);
                    },
                    logOnce: function (e) {
                      this.logMemo[e] || ((this.logMemo[e] = !0), L.log(e));
                    },
                  },
                  A = {
                    IS_HTTPS: o || 'https:' === document.location.protocol,
                    SIX_MONTHS_IN_MINUTES: 259200,
                    IE_VERSION: (function () {
                      if (document.documentMode) return document.documentMode;
                      for (var e = 7; 4 < e; e--) {
                        var t = document.createElement('div');
                        if (
                          ((t.innerHTML = '<!--[if IE ' + e + ']><span></span><![endif]-->'),
                          t.getElementsByTagName('span').length)
                        )
                          return (t = null), e;
                      }
                      return null;
                    })(),
                  };
                A.IS_IE_LESS_THAN_10 = 'number' == typeof A.IE_VERSION && A.IE_VERSION < 10;
                var P = { stuffed: {} },
                  T = {},
                  R = {
                    firingQueue: [],
                    fired: [],
                    firing: !1,
                    sent: [],
                    errored: [],
                    reservedKeys: {
                      sids: !0,
                      pdata: !0,
                      logdata: !0,
                      callback: !0,
                      postCallbackFn: !0,
                      useImageRequest: !0,
                    },
                    firstRequestHasFired: !1,
                    abortRequests: !1,
                    num_of_cors_responses: 0,
                    num_of_cors_errors: 0,
                    corsErrorSources: [],
                    num_of_img_responses: 0,
                    num_of_img_errors: 0,
                    platformParams: {
                      d_nsid: r + '',
                      d_rtbd: 'json',
                      d_jsonv: DIL.jsonVersion + '',
                      d_dst: '1',
                    },
                    nonModStatsParams: { d_rtbd: !0, d_dst: !0, d_cts: !0, d_rs: !0 },
                    modStatsParams: null,
                    adms: {
                      TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 30000,
                      calledBack: !1,
                      mid: null,
                      noVisitorAPI: null,
                      VisitorAPI: null,
                      instance: null,
                      releaseType: 'no VisitorAPI',
                      isOptedOut: !0,
                      isOptedOutCallbackCalled: !1,
                      admsProcessingStarted: !1,
                      process: function (e) {
                        try {
                          if (this.admsProcessingStarted) return;
                          this.admsProcessingStarted = !0;
                          var t,
                            s,
                            n,
                            i = a;
                          if ('function' != typeof e || 'function' != typeof e.getInstance)
                            throw ((this.noVisitorAPI = !0), new Error('Visitor does not exist.'));
                          if (i !== Object(i) || !(t = i.namespace) || 'string' != typeof t)
                            throw (
                              ((this.releaseType = 'no namespace'),
                              new Error(
                                "DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}"
                              ))
                            );
                          if (
                            !(
                              (s = e.getInstance(t, { idSyncContainerID: r })) === Object(s) &&
                              s instanceof e &&
                              'function' == typeof s.isAllowed &&
                              'function' == typeof s.getMarketingCloudVisitorID &&
                              'function' == typeof s.getCustomerIDs &&
                              'function' == typeof s.isOptedOut &&
                              'function' == typeof s.publishDestinations
                            )
                          )
                            throw (
                              ((this.releaseType = 'invalid instance'),
                              (n = 'Invalid Visitor instance.'),
                              s === Object(s) &&
                                'function' != typeof s.publishDestinations &&
                                (n +=
                                  ' In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ .'),
                              new Error(n))
                            );
                          if (((this.VisitorAPI = e), !s.isAllowed()))
                            return (
                              (this.releaseType = 'VisitorAPI is not allowed to write cookies'),
                              void this.releaseRequests()
                            );
                          (this.instance = s), this.waitForMidToReleaseRequests();
                        } catch (e) {
                          if (!D)
                            throw new Error(
                              'Error in processing Visitor API, which is a hard dependency for DIL v8.0+: ' +
                                e.message
                            );
                          this.releaseRequests();
                        }
                      },
                      waitForMidToReleaseRequests: function () {
                        var t = this;
                        this.instance &&
                          (this.instance.getMarketingCloudVisitorID(function (e) {
                            (t.mid = e), (t.releaseType = 'VisitorAPI'), t.releaseRequests();
                          }, !0),
                          (!N.exists ||
                            (!N.isIabContext && N.isApproved()) ||
                            (N.isIabContext && G.hasGoSignal())) &&
                            setTimeout(function () {
                              'VisitorAPI' !== t.releaseType &&
                                ((t.releaseType = 'timeout'), t.releaseRequests());
                            }, this.getLoadTimeout()));
                      },
                      releaseRequests: function () {
                        (this.calledBack = !0), R.registerRequest();
                      },
                      getMarketingCloudVisitorID: function () {
                        return this.instance ? this.instance.getMarketingCloudVisitorID() : null;
                      },
                      getMIDQueryString: function () {
                        var e = V.isPopulatedString,
                          t = this.getMarketingCloudVisitorID();
                        return (
                          (e(this.mid) && this.mid === t) || (this.mid = t),
                          e(this.mid) ? 'd_mid=' + this.mid + '&' : ''
                        );
                      },
                      getCustomerIDs: function () {
                        return this.instance ? this.instance.getCustomerIDs() : null;
                      },
                      getCustomerIDsQueryString: function (e) {
                        if (e !== Object(e)) return '';
                        var t,
                          s,
                          n,
                          i,
                          r = '',
                          a = [],
                          o = [];
                        for (t in e)
                          e.hasOwnProperty(t) &&
                            (s = e[(o[0] = t)]) === Object(s) &&
                            ((o[1] = s.id || ''), (o[2] = s.authState || 0), a.push(o), (o = []));
                        if ((i = a.length))
                          for (n = 0; n < i; n++)
                            r += '&d_cid_ic=' + x.encodeAndBuildRequest(a[n], '%01');
                        return r;
                      },
                      getIsOptedOut: function () {
                        this.instance
                          ? this.instance.isOptedOut(
                              [this, this.isOptedOutCallback],
                              this.VisitorAPI.OptOut.GLOBAL,
                              !0
                            )
                          : ((this.isOptedOut = !1), (this.isOptedOutCallbackCalled = !0));
                      },
                      isOptedOutCallback: function (e) {
                        (this.isOptedOut = e),
                          (this.isOptedOutCallbackCalled = !0),
                          R.registerRequest(),
                          N.isIabContext() && G.checkQueryStringObject();
                      },
                      getLoadTimeout: function () {
                        var e = this.instance;
                        if (e) {
                          if ('function' == typeof e.getLoadTimeout) return e.getLoadTimeout();
                          if (void 0 !== e.loadTimeout) return e.loadTimeout;
                        }
                        return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE;
                      },
                    },
                    declaredId: {
                      declaredId: { init: null, request: null },
                      declaredIdCombos: {},
                      setDeclaredId: function (e, t) {
                        var s = V.isPopulatedString,
                          n = encodeURIComponent;
                        if (e === Object(e) && s(t)) {
                          var i = e.dpid,
                            r = e.dpuuid,
                            a = null;
                          if (s(i) && s(r))
                            return (
                              (a = n(i) + '$' + n(r)),
                              !0 === this.declaredIdCombos[a]
                                ? "setDeclaredId: combo exists for type '" + t + "'"
                                : ((this.declaredIdCombos[a] = !0),
                                  (this.declaredId[t] = { dpid: i, dpuuid: r }),
                                  "setDeclaredId: succeeded for type '" + t + "'")
                            );
                        }
                        return "setDeclaredId: failed for type '" + t + "'";
                      },
                      getDeclaredIdQueryString: function () {
                        var e = this.declaredId.request,
                          t = this.declaredId.init,
                          s = encodeURIComponent,
                          n = '';
                        return (
                          null !== e
                            ? (n = '&d_dpid=' + s(e.dpid) + '&d_dpuuid=' + s(e.dpuuid))
                            : null !== t &&
                              (n = '&d_dpid=' + s(t.dpid) + '&d_dpuuid=' + s(t.dpuuid)),
                          n
                        );
                      },
                    },
                    registerRequest: function (e) {
                      var t,
                        s = this.firingQueue;
                      e === Object(e) && (s.push(e), e.isDefaultRequest || (f = !0)),
                        this.firing ||
                          !s.length ||
                          (i && !DIL.windowLoaded) ||
                          (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(),
                          this.adms.calledBack &&
                            !this.adms.isOptedOut &&
                            this.adms.isOptedOutCallbackCalled &&
                            (N.isApproved() || G.hasGoSignal()) &&
                            ((this.adms.isOptedOutCallbackCalled = !1),
                            ((t = s.shift()).src = t.src.replace(
                              /&d_nsid=/,
                              '&' + this.adms.getMIDQueryString() + G.getQueryString() + 'd_nsid='
                            )),
                            V.isPopulatedString(t.corsPostData) &&
                              (t.corsPostData = t.corsPostData.replace(
                                /^d_nsid=/,
                                this.adms.getMIDQueryString() + G.getQueryString() + 'd_nsid='
                              )),
                            M.fireRequest(t),
                            this.firstRequestHasFired ||
                              ('script' !== t.tag && 'cors' !== t.tag) ||
                              (this.firstRequestHasFired = !0)));
                    },
                    processVisitorAPI: function () {
                      this.adms.process(b || window.Visitor);
                    },
                    getCoopQueryString: function () {
                      var e = '';
                      return (
                        !0 === d ? (e = '&d_coop_safe=1') : !1 === d && (e = '&d_coop_unsafe=1'), e
                      );
                    },
                  };
                _.requestController = R;
                var E,
                  j,
                  k = {
                    sendingMessages: !1,
                    messages: [],
                    messagesPosted: [],
                    destinations: [],
                    destinationsPosted: [],
                    jsonForComparison: [],
                    jsonDuplicates: [],
                    jsonWaiting: [],
                    jsonProcessed: [],
                    publishDestinationsVersion: null,
                    requestToProcess: function (e, t) {
                      var s,
                        n = this;
                      function i () {
                        n.jsonForComparison.push(e), n.jsonWaiting.push([e, t]);
                      }
                      if (e && !V.isEmptyObject(e))
                        if (((s = JSON.stringify(e.dests || [])), this.jsonForComparison.length)) {
                          var r,
                            a,
                            o,
                            d = !1;
                          for (r = 0, a = this.jsonForComparison.length; r < a; r++)
                            if (
                              ((o = this.jsonForComparison[r]),
                              s === JSON.stringify(o.dests || []))
                            ) {
                              d = !0;
                              break;
                            }
                          d ? this.jsonDuplicates.push(e) : i();
                        } else i();
                      if (this.jsonWaiting.length) {
                        var u = this.jsonWaiting.shift();
                        this.process(u[0], u[1]), this.requestToProcess();
                      }
                      this.messages.length && !this.sendingMessages && this.sendMessages();
                    },
                    process: function (e) {
                      if (h) {
                        var t,
                          s,
                          n,
                          i,
                          r,
                          a,
                          o = encodeURIComponent,
                          d = this.getPublishDestinationsVersion(),
                          u = !1;
                        if (-1 !== d) {
                          if ((t = e.dests) && t instanceof Array && (s = t.length)) {
                            for (n = 0; n < s; n++)
                              (i = t[n]),
                                (a = [o('dests'), o(i.id || ''), o(i.y || ''), o(i.c || '')].join(
                                  '|'
                                )),
                                this.addMessage(a),
                                (r = {
                                  url: i.c,
                                  hideReferrer: void 0 === i.hr || !!i.hr,
                                  message: a,
                                }),
                                this.addDestination(r),
                                void 0 !== i.hr && (u = !0);
                            1 === d &&
                              u &&
                              L.logOnce(
                                'Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.'
                              );
                          }
                          this.jsonProcessed.push(e);
                        }
                      }
                    },
                    addMessage: function (e) {
                      this.messages.push(e);
                    },
                    addDestination: function (e) {
                      this.destinations.push(e);
                    },
                    sendMessages: function () {
                      this.sendingMessages ||
                        ((this.sendingMessages = !0),
                        h && this.messages.length && this.publishDestinations());
                    },
                    publishDestinations: function () {
                      var t = this,
                        e = R.adms.instance,
                        s = [],
                        n = [],
                        i = function (e) {
                          L.log('visitor.publishDestinations() result: ' + (e.error || e.message)),
                            (t.sendingMessages = !1),
                            t.requestToProcess();
                        },
                        r = function () {
                          (t.messages = []), (t.destinations = []);
                        };
                      return 1 === this.publishDestinationsVersion
                        ? (x.extendArray(s, this.messages),
                          x.extendArray(this.messagesPosted, this.messages),
                          r(),
                          e.publishDestinations(I, s, i),
                          'Called visitor.publishDestinations() version 1')
                        : 1 < this.publishDestinationsVersion
                        ? (x.extendArray(n, this.destinations),
                          x.extendArray(this.destinationsPosted, this.destinations),
                          r(),
                          e.publishDestinations({ subdomain: I, callback: i, urlDestinations: n }),
                          'Called visitor.publishDestinations() version > 1')
                        : void 0;
                    },
                    getPublishDestinationsVersion: function () {
                      if (null !== this.publishDestinationsVersion)
                        return this.publishDestinationsVersion;
                      var e = R.adms.instance,
                        s = -1;
                      return (
                        e.publishDestinations(null, null, function (e) {
                          if (e === Object(e)) {
                            var t = e.error;
                            'subdomain is not a populated string.' === t
                              ? (s = 1)
                              : 'Invalid parameters passed.' === t && (s = 2);
                          }
                        }),
                        (this.publishDestinationsVersion = s)
                      );
                    },
                  },
                  q = {
                    traits: function (e) {
                      return (
                        V.isValidPdata(e) &&
                          (T.sids instanceof Array || (T.sids = []), x.extendArray(T.sids, e)),
                        this
                      );
                    },
                    pixels: function (e) {
                      return (
                        V.isValidPdata(e) &&
                          (T.pdata instanceof Array || (T.pdata = []), x.extendArray(T.pdata, e)),
                        this
                      );
                    },
                    logs: function (e) {
                      return (
                        V.isValidLogdata(e) &&
                          (T.logdata !== Object(T.logdata) && (T.logdata = {}),
                          x.extendObject(T.logdata, e)),
                        this
                      );
                    },
                    customQueryParams: function (e) {
                      return V.isEmptyObject(e) || x.extendObject(T, e, R.reservedKeys), this;
                    },
                    signals: function (e, t) {
                      var s,
                        n = e;
                      if (!V.isEmptyObject(n)) {
                        if (t && 'string' == typeof t)
                          for (s in ((n = {}), e)) e.hasOwnProperty(s) && (n[t + s] = e[s]);
                        x.extendObject(T, n, R.reservedKeys);
                      }
                      return this;
                    },
                    declaredId: function (e) {
                      return R.declaredId.setDeclaredId(e, 'request'), this;
                    },
                    result: function (e) {
                      return 'function' == typeof e && (T.callback = e), this;
                    },
                    afterResult: function (e) {
                      return 'function' == typeof e && (T.postCallbackFn = e), this;
                    },
                    useImageRequest: function () {
                      return (T.useImageRequest = !0), this;
                    },
                    clearData: function () {
                      return (T = {}), this;
                    },
                    submit: function (e) {
                      return (T.isDefaultRequest = !!e), M.submitRequest(T), (T = {}), this;
                    },
                    getPartner: function () {
                      return I;
                    },
                    getContainerNSID: function () {
                      return r;
                    },
                    getEventLog: function () {
                      return S;
                    },
                    getState: function () {
                      var e = {},
                        t = {};
                      return (
                        x.extendObject(e, R, { registerRequest: !0 }),
                        x.extendObject(t, k, {
                          requestToProcess: !0,
                          process: !0,
                          sendMessages: !0,
                        }),
                        {
                          initConfig: s,
                          pendingRequest: T,
                          otherRequestInfo: e,
                          destinationPublishingInfo: t,
                          log: S,
                        }
                      );
                    },
                    idSync: function () {
                      throw new Error(
                        'Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance'
                      );
                    },
                    aamIdSync: function () {
                      throw new Error(
                        'Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance'
                      );
                    },
                    passData: function (e) {
                      return V.isEmptyObject(e)
                        ? 'Error: json is empty or not an object'
                        : (M.defaultCallback(e), e);
                    },
                    getPlatformParams: function () {
                      return R.platformParams;
                    },
                    getEventCallConfigParams: function () {
                      var e,
                        t = R,
                        s = t.modStatsParams,
                        n = t.platformParams;
                      if (!s) {
                        for (e in ((s = {}), n))
                          n.hasOwnProperty(e) &&
                            !t.nonModStatsParams[e] &&
                            (s[e.replace(/^d_/, '')] = n[e]);
                        !0 === d ? (s.coop_safe = 1) : !1 === d && (s.coop_unsafe = 1),
                          (t.modStatsParams = s);
                      }
                      return s;
                    },
                    setAsCoopSafe: function () {
                      return (d = !0), this;
                    },
                    setAsCoopUnsafe: function () {
                      return (d = !1), this;
                    },
                    getEventCallIabSignals: function (e) {
                      var t;
                      return e !== Object(e)
                        ? 'Error: config is not an object'
                        : 'function' != typeof e.callback
                        ? 'Error: config.callback is not a function'
                        : ((t = parseInt(e.timeout, 10)),
                          isNaN(t) && (t = null),
                          void G.getQueryStringObject(e.callback, t));
                    },
                  },
                  M = {
                    corsMetadata:
                      ((E = 'none'),
                      'undefined' != typeof XMLHttpRequest &&
                        XMLHttpRequest === Object(XMLHttpRequest) &&
                        'withCredentials' in new XMLHttpRequest() &&
                        (E = 'XMLHttpRequest'),
                      { corsType: E }),
                    getCORSInstance: function () {
                      return 'none' === this.corsMetadata.corsType
                        ? null
                        : new window[this.corsMetadata.corsType]();
                    },
                    submitRequest: function (e) {
                      return R.registerRequest(M.createQueuedRequest(e)), !0;
                    },
                    createQueuedRequest: function (e) {
                      var t,
                        s,
                        n,
                        i,
                        r,
                        a = e.callback,
                        o = 'img',
                        d = e.isDefaultRequest;
                      if ((delete e.isDefaultRequest, !V.isEmptyObject(u)))
                        for (n in u)
                          if (u.hasOwnProperty(n)) {
                            if (null == (i = u[n]) || '' === i) continue;
                            if (n in e && !(i in e) && !(i in R.reservedKeys)) {
                              if (null == (r = e[n]) || '' === r) continue;
                              e[i] = r;
                            }
                          }
                      return (
                        V.isValidPdata(e.sids) || (e.sids = []),
                        V.isValidPdata(e.pdata) || (e.pdata = []),
                        V.isValidLogdata(e.logdata) || (e.logdata = {}),
                        (e.logdataArray = x.convertObjectToKeyValuePairs(e.logdata, '=', !0)),
                        e.logdataArray.push('_ts=' + new Date().getTime()),
                        'function' != typeof a && (a = this.defaultCallback),
                        (t = this.makeRequestSrcData(e)),
                        (s = this.getCORSInstance()) && !0 !== e.useImageRequest && (o = 'cors'),
                        {
                          tag: o,
                          src: t.src,
                          corsSrc: t.corsSrc,
                          callbackFn: a,
                          postCallbackFn: e.postCallbackFn,
                          useImageRequest: !!e.useImageRequest,
                          requestData: e,
                          corsInstance: s,
                          corsPostData: t.corsPostData,
                          isDefaultRequest: d,
                        }
                      );
                    },
                    defaultCallback: function (e, t) {
                      var s, n, i, r, a, o, d, u, c;
                      if (g && (s = e.stuff) && s instanceof Array && (n = s.length))
                        for (i = 0; i < n; i++)
                          (r = s[i]) &&
                            r === Object(r) &&
                            ((a = r.cn),
                            (o = r.cv),
                            (void 0 !== (d = r.ttl) && '' !== d) ||
                              (d = Math.floor(x.getMaxCookieExpiresInMinutes() / 60 / 24)),
                            (u = r.dmn || '.' + document.domain.replace(/^www\./, '')),
                            (c = r.type),
                            a &&
                              (o || 'number' == typeof o) &&
                              ('var' !== c &&
                                (d = parseInt(d, 10)) &&
                                !isNaN(d) &&
                                x.setCookie(a, o, 24 * d * 60, '/', u, !1),
                              (P.stuffed[a] = o)));
                      var l,
                        h,
                        f = e.uuid;
                      V.isPopulatedString(f) &&
                        (V.isEmptyObject(p) ||
                          (('string' == typeof (l = p.path) && l.length) || (l = '/'),
                          (h = parseInt(p.days, 10)),
                          isNaN(h) && (h = 100),
                          x.setCookie(
                            p.name || 'aam_did',
                            f,
                            24 * h * 60,
                            l,
                            p.domain || '.' + document.domain.replace(/^www\./, ''),
                            !0 === p.secure
                          ))),
                        R.abortRequests || k.requestToProcess(e, t);
                    },
                    makeRequestSrcData: function (r) {
                      (r.sids = V.removeEmptyArrayValues(r.sids || [])),
                        (r.pdata = V.removeEmptyArrayValues(r.pdata || []));
                      var a = R,
                        e = a.platformParams,
                        t = x.encodeAndBuildRequest(r.sids, ','),
                        s = x.encodeAndBuildRequest(r.pdata, ','),
                        n = (r.logdataArray || []).join('&');
                      delete r.logdataArray;
                      var i,
                        o,
                        d = encodeURIComponent,
                        u = A.IS_HTTPS ? 'https://' : 'http://',
                        c = a.declaredId.getDeclaredIdQueryString(),
                        l = a.adms.instance
                          ? a.adms.getCustomerIDsQueryString(a.adms.getCustomerIDs())
                          : '',
                        h = (function () {
                          var e,
                            t,
                            s,
                            n,
                            i = [];
                          for (e in r)
                            if (!(e in a.reservedKeys) && r.hasOwnProperty(e))
                              if (((t = r[e]), (e = d(e)), t instanceof Array))
                                for (s = 0, n = t.length; s < n; s++) i.push(e + '=' + d(t[s]));
                              else i.push(e + '=' + d(t));
                          return i.length ? '&' + i.join('&') : '';
                        })(),
                        f = 'd_dil_ver=' + d(DIL.version),
                        p =
                          'd_nsid=' +
                          e.d_nsid +
                          a.getCoopQueryString() +
                          c +
                          l +
                          (t.length ? '&d_sid=' + t : '') +
                          (s.length ? '&d_px=' + s : '') +
                          (n.length ? '&d_ld=' + d(n) : ''),
                        g = '&d_rtbd=' + e.d_rtbd + '&d_jsonv=' + e.d_jsonv + '&d_dst=' + e.d_dst,
                        m = y ? '&h_referer=' + d(location.href) : '';
                      return (
                        (o = (i = u + I + '.demdex.net/event') + '?' + f + '&' + p + g + h + m),
                        {
                          corsSrc: i + '?' + f + '&_ts=' + new Date().getTime(),
                          src: o,
                          corsPostData: p + g + h + m,
                          isDeclaredIdCall: '' !== c,
                        }
                      );
                    },
                    fireRequest: function (e) {
                      if ('img' === e.tag) this.fireImage(e);
                      else {
                        var t = R.declaredId,
                          s = t.declaredId.request || t.declaredId.init || {},
                          n = { dpid: s.dpid || '', dpuuid: s.dpuuid || '' };
                        this.fireCORS(e, n);
                      }
                    },
                    fireImage: function (t) {
                      var e,
                        s,
                        n = R;
                      n.abortRequests ||
                        ((n.firing = !0),
                        (e = new Image(0, 0)),
                        n.sent.push(t),
                        (e.onload = function () {
                          (n.firing = !1),
                            n.fired.push(t),
                            n.num_of_img_responses++,
                            n.registerRequest();
                        }),
                        (s = function (e) {
                          (c = 'imgAbortOrErrorHandler received the event of type ' + e.type),
                            L.log(c),
                            (n.abortRequests = !0),
                            (n.firing = !1),
                            n.errored.push(t),
                            n.num_of_img_errors++,
                            n.registerRequest();
                        }),
                        e.addEventListener('error', s),
                        e.addEventListener('abort', s),
                        (e.src = t.src));
                    },
                    fireCORS: function (n, i) {
                      var r = this,
                        a = R,
                        e = this.corsMetadata.corsType,
                        t = n.corsSrc,
                        s = n.corsInstance,
                        o = n.corsPostData,
                        d = n.postCallbackFn,
                        u = 'function' == typeof d;
                      if (!a.abortRequests && !v) {
                        a.firing = !0;
                        try {
                          s.open('post', t, !0),
                            'XMLHttpRequest' === e &&
                              ((s.withCredentials = !0),
                              s.setRequestHeader(
                                'Content-Type',
                                'application/x-www-form-urlencoded'
                              ),
                              (s.onreadystatechange = function () {
                                4 === this.readyState &&
                                  200 === this.status &&
                                  (function (e) {
                                    var t;
                                    try {
                                      if ((t = JSON.parse(e)) !== Object(t))
                                        return r.handleCORSError(n, i, 'Response is not JSON');
                                    } catch (e) {
                                      return r.handleCORSError(
                                        n,
                                        i,
                                        'Error parsing response as JSON'
                                      );
                                    }
                                    try {
                                      var s = n.callbackFn;
                                      (a.firing = !1),
                                        a.fired.push(n),
                                        a.num_of_cors_responses++,
                                        s(t, i),
                                        u && d(t, i);
                                    } catch (e) {
                                      (e.message =
                                        'DIL handleCORSResponse caught error with message ' +
                                        e.message),
                                        (c = e.message),
                                        L.log(c),
                                        (e.filename = e.filename || 'dil.js'),
                                        (e.partner = I),
                                        DIL.errorModule.handleError(e);
                                      try {
                                        s({ error: e.name + '|' + e.message }, i),
                                          u && d({ error: e.name + '|' + e.message }, i);
                                      } catch (e) {}
                                    } finally {
                                      a.registerRequest();
                                    }
                                  })(this.responseText);
                              })),
                            (s.onerror = function () {
                              r.handleCORSError(n, i, 'onerror');
                            }),
                            (s.ontimeout = function () {
                              r.handleCORSError(n, i, 'ontimeout');
                            }),
                            s.send(o);
                        } catch (e) {
                          this.handleCORSError(n, i, 'try-catch');
                        }
                        a.sent.push(n), (a.declaredId.declaredId.request = null);
                      }
                    },
                    handleCORSError: function (e, t, s) {
                      R.num_of_cors_errors++, R.corsErrorSources.push(s);
                    },
                  },
                  V = {
                    isValidPdata: function (e) {
                      return !!(e instanceof Array && this.removeEmptyArrayValues(e).length);
                    },
                    isValidLogdata: function (e) {
                      return !this.isEmptyObject(e);
                    },
                    isEmptyObject: function (e) {
                      if (e !== Object(e)) return !0;
                      var t;
                      for (t in e) if (e.hasOwnProperty(t)) return !1;
                      return !0;
                    },
                    removeEmptyArrayValues: function (e) {
                      var t,
                        s = 0,
                        n = e.length,
                        i = [];
                      for (s = 0; s < n; s++) null != (t = e[s]) && '' !== t && i.push(t);
                      return i;
                    },
                    isPopulatedString: function (e) {
                      return 'string' == typeof e && e.length;
                    },
                  },
                  x = {
                    convertObjectToKeyValuePairs: function (e, t, s) {
                      var n,
                        i,
                        r = [];
                      for (n in (t || (t = '='), e))
                        e.hasOwnProperty(n) &&
                          null != (i = e[n]) &&
                          '' !== i &&
                          r.push(n + t + (s ? encodeURIComponent(i) : i));
                      return r;
                    },
                    encodeAndBuildRequest: function (e, t) {
                      return e
                        .map(function (e) {
                          return encodeURIComponent(e);
                        })
                        .join(t);
                    },
                    getCookie: function (e) {
                      var t,
                        s,
                        n,
                        i = e + '=',
                        r = document.cookie.split(';');
                      for (t = 0, s = r.length; t < s; t++) {
                        for (n = r[t]; ' ' === n.charAt(0); ) n = n.substring(1, n.length);
                        if (0 === n.indexOf(i))
                          return decodeURIComponent(n.substring(i.length, n.length));
                      }
                      return null;
                    },
                    setCookie: function (e, t, s, n, i, r) {
                      var a = new Date();
                      s && (s = 1000 * s * 60),
                        (document.cookie =
                          e +
                          '=' +
                          encodeURIComponent(t) +
                          (s ? ';expires=' + new Date(a.getTime() + s).toUTCString() : '') +
                          (n ? ';path=' + n : '') +
                          (i ? ';domain=' + i : '') +
                          (r ? ';secure' : ''));
                    },
                    extendArray: function (e, t) {
                      return (
                        e instanceof Array &&
                        t instanceof Array &&
                        (Array.prototype.push.apply(e, t), !0)
                      );
                    },
                    extendObject: function (e, t, s) {
                      var n;
                      if (e !== Object(e) || t !== Object(t)) return !1;
                      for (n in t)
                        if (t.hasOwnProperty(n)) {
                          if (!V.isEmptyObject(s) && n in s) continue;
                          e[n] = t[n];
                        }
                      return !0;
                    },
                    getMaxCookieExpiresInMinutes: function () {
                      return A.SIX_MONTHS_IN_MINUTES;
                    },
                    replaceMethodsWithFunction: function (e, t) {
                      var s;
                      if (e === Object(e) && 'function' == typeof t)
                        for (s in e)
                          e.hasOwnProperty(s) && 'function' == typeof e[s] && (e[s] = t);
                    },
                  },
                  N =
                    ((j = _.requestController),
                    {
                      exists: null,
                      instance: null,
                      aamIsApproved: null,
                      init: function () {
                        var e = this;
                        this.checkIfExists()
                          ? ((this.exists = !0),
                            (this.instance = window.adobe.optIn),
                            this.instance.fetchPermissions(function () {
                              e.callback();
                            }, !0))
                          : (this.exists = !1);
                      },
                      checkIfExists: function () {
                        return (
                          window.adobe === Object(window.adobe) &&
                          window.adobe.optIn === Object(window.adobe.optIn)
                        );
                      },
                      callback: function () {
                        (this.aamIsApproved = this.instance.isApproved([
                          this.instance.Categories.AAM,
                        ])),
                          j.adms.waitForMidToReleaseRequests(),
                          j.adms.getIsOptedOut();
                      },
                      isApproved: function () {
                        return (
                          !this.isIabContext() &&
                          !j.adms.isOptedOut &&
                          (!this.exists || this.aamIsApproved)
                        );
                      },
                      isIabContext: function () {
                        return this.instance && this.instance.isIabContext;
                      },
                    });
                _.optIn = N;
                var U,
                  F,
                  Q,
                  H,
                  G =
                    ((F = (U = _).requestController),
                    (Q = U.optIn),
                    (H = {
                      isVendorConsented: null,
                      doesGdprApply: null,
                      consentString: null,
                      queryStringObjectCallbacks: [],
                      init: function () {
                        this.fetchConsentData();
                      },
                      hasGoSignal: function () {
                        return !(
                          !(
                            Q.isIabContext() &&
                            this.isVendorConsented &&
                            this.doesGdprApply &&
                            'string' == typeof this.consentString &&
                            this.consentString.length
                          ) || F.adms.isOptedOut
                        );
                      },
                      fetchConsentData: function (s, e) {
                        var n = this,
                          t = {};
                        'function' != typeof s && (s = function () {}),
                          Q.instance && Q.isIabContext()
                            ? (e && (t.timeout = e),
                              Q.instance.execute({
                                command: 'iabPlugin.fetchConsentData',
                                params: t,
                                callback: function (e, t) {
                                  t === Object(t)
                                    ? ((n.doesGdprApply = !!t.gdprApplies),
                                      (n.consentString = t.consentString || ''))
                                    : ((n.doesGdprApply = !1), (n.consentString = '')),
                                    (n.isVendorConsented = Q.instance.isApproved(
                                      Q.instance.Categories.AAM
                                    )),
                                    e ? s({}) : n.checkQueryStringObject(s),
                                    F.adms.waitForMidToReleaseRequests();
                                },
                              }))
                            : s({});
                      },
                      getQueryString: function () {
                        return Q.isIabContext()
                          ? 'gdpr=' +
                              (this.doesGdprApply ? 1 : 0) +
                              '&gdpr_consent=' +
                              this.consentString +
                              '&'
                          : '';
                      },
                      getQueryStringObject: function (e, t) {
                        this.fetchConsentData(e, t);
                      },
                      checkQueryStringObject: function (e) {
                        H.hasGoSignal() &&
                          'function' == typeof e &&
                          e({
                            gdpr: this.doesGdprApply ? 1 : 0,
                            gdpr_consent: this.consentString,
                          });
                      },
                    }));
                (_.iab = G),
                  'error' === I &&
                    0 === r &&
                    window.addEventListener('load', function () {
                      DIL.windowLoaded = !0;
                    });
                var B = !1,
                  W = function () {
                    B || ((B = !0), R.registerRequest(), K());
                  },
                  K = function () {
                    setTimeout(function () {
                      f ||
                        R.firstRequestHasFired ||
                        ('function' == typeof m ? q.afterResult(m).submit(!0) : q.submit(!0));
                    }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
                  },
                  X = document;
                'error' !== I &&
                  (DIL.windowLoaded
                    ? W()
                    : 'complete' !== X.readyState && 'loaded' !== X.readyState
                    ? window.addEventListener('load', function () {
                        (DIL.windowLoaded = !0), W();
                      })
                    : ((DIL.windowLoaded = !0), W())),
                  R.declaredId.setDeclaredId(n, 'init'),
                  N.init(),
                  G.init(),
                  R.processVisitorAPI();
                A.IS_IE_LESS_THAN_10 &&
                  x.replaceMethodsWithFunction(q, function () {
                    return this;
                  }),
                  (this.api = q),
                  (this.getStuffedVariable = function (e) {
                    var t = P.stuffed[e];
                    return (
                      t ||
                        'number' == typeof t ||
                        (t = x.getCookie(e)) ||
                        'number' == typeof t ||
                        (t = ''),
                      t
                    );
                  }),
                  (this.validators = V),
                  (this.helpers = x),
                  (this.constants = A),
                  (this.log = S),
                  (this.pendingRequest = T),
                  (this.requestController = R),
                  (this.destinationPublishing = k),
                  (this.requestProcs = M),
                  (this.units = _),
                  (this.initConfig = s),
                  (this.logger = L),
                  C && ((this.variables = P), (this.callWindowLoadFunctions = W));
              }),
              (DIL.extendStaticPropertiesAndMethods = function (e) {
                var t;
                if (e === Object(e)) for (t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
              }),
              DIL.extendStaticPropertiesAndMethods({
                version: '9.3',
                jsonVersion: 1,
                constants: { TIME_TO_DEFAULT_REQUEST: 500 },
                variables: { scriptNodeList: document.getElementsByTagName('script') },
                windowLoaded: !1,
                dils: {},
                isAddedPostWindowLoad: function () {
                  var e = arguments[0];
                  this.windowLoaded = 'function' == typeof e ? !!e() : 'boolean' != typeof e || e;
                },
                create: function (e) {
                  try {
                    return new DIL(e);
                  } catch (e) {
                    throw new Error(
                      'Error in attempt to create DIL instance with DIL.create(): ' + e.message
                    );
                  }
                },
                registerDil: function (e, t, s) {
                  var n = t + '$' + s;
                  n in this.dils || (this.dils[n] = e);
                },
                getDil: function (e, t) {
                  var s;
                  return (
                    'string' != typeof e && (e = ''),
                    t || (t = 0),
                    (s = e + '$' + t) in this.dils
                      ? this.dils[s]
                      : new Error(
                          'The DIL instance with partner = ' +
                            e +
                            ' and containerNSID = ' +
                            t +
                            ' was not found'
                        )
                  );
                },
                dexGetQSVars: function (e, t, s) {
                  var n = this.getDil(t, s);
                  return n instanceof this ? n.getStuffedVariable(e) : '';
                },
              }),
              (DIL.errorModule =
                ((r = DIL.create({
                  partner: 'error',
                  containerNSID: 0,
                  ignoreHardDependencyOnVisitorAPI: !0,
                })),
                (o = !(a = {
                  harvestererror: 14138,
                  destpuberror: 14139,
                  dpmerror: 14140,
                  generalerror: 14137,
                  error: 14137,
                  noerrortypedefined: 15021,
                  evalerror: 15016,
                  rangeerror: 15017,
                  referenceerror: 15018,
                  typeerror: 15019,
                  urierror: 15020,
                })),
                {
                  activate: function () {
                    o = !0;
                  },
                  handleError: function (e) {
                    if (!o) return 'DIL error module has not been activated';
                    e !== Object(e) && (e = {});
                    var t = e.name ? (e.name + '').toLowerCase() : '',
                      s = t in a ? a[t] : a.noerrortypedefined,
                      n = [],
                      i = {
                        name: t,
                        filename: e.filename ? e.filename + '' : '',
                        partner: e.partner ? e.partner + '' : 'no_partner',
                        site: e.site ? e.site + '' : document.location.href,
                        message: e.message ? e.message + '' : '',
                      };
                    return (
                      n.push(s),
                      r.api.pixels(n).logs(i).useImageRequest().submit(),
                      'DIL error report sent'
                    );
                  },
                  pixelMap: a,
                })),
              (DIL.tools = {}),
              (DIL.modules = { helpers: {} })),
              window.DIL &&
                DIL.tools &&
                DIL.modules &&
                ((DIL.tools.getMetaTags = function () {
                  var e,
                    t,
                    s,
                    n,
                    i,
                    r = {},
                    a = document.getElementsByTagName('meta');
                  for (e = 0, s = arguments.length; e < s; e++)
                    if (null !== (n = arguments[e]))
                      for (t = 0; t < a.length; t++)
                        if ((i = a[t]).name === n) {
                          r[n] = i.content;
                          break;
                        }
                  return r;
                }),
                (DIL.tools.decomposeURI = function (e) {
                  var s,
                    t = document.createElement('a');
                  return (
                    (t.href = e || document.referrer),
                    {
                      hash: t.hash,
                      host: t.host.split(':').shift(),
                      hostname: t.hostname,
                      href: t.href,
                      pathname: t.pathname.replace(/^\//, ''),
                      protocol: t.protocol,
                      search: t.search,
                      uriParams:
                        ((s = {}),
                        t.search
                          .replace(/^(\/|\?)?|\/$/g, '')
                          .split('&')
                          .map(function (e) {
                            var t = e.split('=');
                            s[t.shift()] = t.shift();
                          }),
                        s),
                    }
                  );
                }),
                (DIL.tools.getSearchReferrer = function (e, t) {
                  var s = DIL.getDil('error'),
                    n = DIL.tools.decomposeURI(e || document.referrer),
                    i = '',
                    r = '',
                    a = {
                      DEFAULT: { queryParam: 'q' },
                      SEARCH_ENGINES: [
                        t === Object(t) ? t : {},
                        { hostPattern: /aol\./ },
                        { hostPattern: /ask\./ },
                        { hostPattern: /bing\./ },
                        { hostPattern: /google\./ },
                        { hostPattern: /yahoo\./, queryParam: 'p' },
                      ],
                    },
                    o = a.DEFAULT;
                  return (i = a.SEARCH_ENGINES.filter(function (e) {
                    return !(!e.hasOwnProperty('hostPattern') || !n.hostname.match(e.hostPattern));
                  }).shift())
                    ? {
                        valid: !0,
                        name: n.hostname,
                        keywords:
                          (s.helpers.extendObject(o, i),
                          (i = ('' + n.search).match(o.queryPattern)),
                          (r = o.queryPattern ? (i ? i[1] : '') : n.uriParams[o.queryParam]),
                          decodeURIComponent(r || '').replace(/\+|%20/g, ' ')),
                      }
                    : { valid: !1, name: '', keywords: '' };
                }),
                (DIL.modules.GA = t),
                (DIL.modules.siteCatalyst = s),
                (DIL.modules.helpers.handleModuleError = e));
          })();
          var userOptedOutString = Bootstrapper.data.resolve('55449') || 'true';
          userOptedOut = userOptedOutString === 'true';
          var xintuit = {
            org: Bootstrapper.data.resolve('55346'),
            env: Bootstrapper.data.resolve('55347'),
            src: Bootstrapper.data.resolve('55348'),
            cNSID: Bootstrapper.data.resolve('55349'),
          };
          var dil = DIL.create({
            partner: 'turbotax',
            enableLogging: false,
            visitorService: { namespace: Bootstrapper.data.resolve('55350') },
            containerNSID: xintuit.cNSID.nsidId,
            uuidCookie: { name: 'aam_uuid' },
            isCoopSafe: !userOptedOut,
            secureDataCollection: false,
          });
          if (window.wa.ivid) {
            var cidIntegrateCode = encodeURIComponent('28016');
            var cidUserID = encodeURIComponent(window.wa.ivid);
            var cidFinal = cidIntegrateCode + '%01' + cidUserID;
            dil.api.signals({ d_cid: cidFinal, c_ivid: window.wa.ivid });
          }
          xintuit.cNSID = xintuit.cNSID.nsidId + '|' + xintuit.cNSID.nsidName;
          dil.api.signals(xintuit, 'c_xintuit_');
          var _scDilObj = window.AppMeasurement.getInstance(wa.s.account);
          DIL.modules.siteCatalyst.init(_scDilObj, dil);
        });
      },
      3008713,
      559417
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                const $___old_e68eef1250b3d030 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'localStorage'
                );
                try {
                  if ($___old_e68eef1250b3d030)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___stub_4011c24c598eb934.localStorage
                    ));
                  return function () {
                    try {
                      var useLogs = !!localStorage.getItem('analyticsDebug');
                      if (useLogs && useLogs === 'yes') {
                        console.log(
                          "Enableing WA Inspector via 'analyticsDebug' local storage item"
                        );
                        return useLogs;
                      }
                      if (Bootstrapper.hasOwnProperty('getQueryParam'))
                        if (Bootstrapper.getQueryParam('useWaInspector')) {
                          console.log("Enableing WA Inspector via 'useWaInspector' query param");
                          return 'yes';
                        }
                    } catch (err) {
                      return 'no';
                    }
                    return 'no';
                  }.apply(this, arguments);
                } finally {
                  if ($___old_e68eef1250b3d030)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___old_e68eef1250b3d030
                    ));
                }
              },
              transform: function (val) {
                return val ? val : '';
              },
              load: 'session',
              trigger: Bootstrapper.data.afterEnsightenCompleteTrigger,
              dataDefName: 'use-wa-inspector',
              collection: 'WA-v2',
              source: 'Manage',
              priv: 'false',
            },
            { id: '52340' }
          );
        }, 52340);
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['ICom - Button Click to ProConnect'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var countingMethod = 'standard';
          var dl = 'dataLayer';
          var floodLightId = 'DC-8344993';
          var send_to = [];
          if (floodLightId) {
            var receiver = floodLightId + '/' + 'int_00' + '/' + 'intui003' + '+' + countingMethod;
            send_to.push(receiver);
          } else {
            var ids = [];
            for (var i in ids) {
              var receiver = ids[i] + '/' + 'int_00' + '/' + 'intui003' + '+' + countingMethod;
              send_to.push(receiver);
            }
          }
          var allow_custom_scripts = 'true' == 'true' ? true : false;
          var eventObj = { allow_custom_scripts: allow_custom_scripts, send_to: send_to };
          if (countingMethod === 'per_session') if ('') eventObj.session_id = '';
          if (countingMethod === 'transactions') {
            if ('') eventObj.value = '';
            if ('') eventObj.transaction_id = '';
            if ('') eventObj.quantity = '';
          }
          window[dl] = window[dl] || [];
          window.gtag =
            window.gtag ||
            function gtag () {
              window[dl].push(arguments);
            };
          gtag('event', 'conversion', eventObj);
        });
      },
      2762235,
      [2762202],
      585586,
      [585580]
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        overAllCookieSizeLimit = 8000;
        perCookieSizeLimit = 1000;
        cookieCleanPerformed = false;
        cookiesSizeExceededOverAllLimit = false;
        var cookie_names = [
          's_cc,.intuit.com',
          's_ppv,.intuit.com',
          's_ppvl,.intuit.com',
          's_sq,.intuit.com',
          '__utma,.intuit.com',
          '__utmb,.intuit.com',
          '__utmc,.intuit.com',
          '__utmt,.intuit.com',
          '__utmz,.intuit.com',
          '_at_id.intuitquickbooks.production.13f2,.intuit.com',
          '_at_id.intuitquickbooks.engage.13f2,.intuit.com',
          'cvo_sid1,.intuit.com',
          'cvo_tid1,.intuit.com',
          'ivid,.intuit.com',
          'ivid_b,.intuit.com',
          'mbox,.intuit.com',
          'propertySegments,.intuit.com',
          'sbm_intuit_id,.intuit.com',
          'SSID,.intuit.com',
          'SSOD,.intuit.com',
          'SSPV,.intuit.com',
          'SSRT,.intuit.com',
          'SSSC,.intuit.com',
          'Survey_Tracker,.intuit.com',
          'SurveyClosed,.intuit.com',
          '_tq_id.TV-278154-1.5ae0,quickbooks.intuit.com',
          '37343836-SKEY,quickbooks.intuit.com',
          '37343836-VID,quickbooks.intuit.com',
          'HumanClickSiteContainerID_37343836,quickbooks.intuit.com',
          'ivid_synced,quickbooks.intuit.com',
          'WRUID,quickbooks.intuit.com',
          'oo_OODynamicRewrite_weight,.intuit.com',
          'oo_inv_percent,.intuit.com',
          'i_websdk_unsentBeaconsExist,quickbooks.intuit.com',
          'optimizelyPendingLogEvents,.intuit.com',
          'qbn.ptc.qbo_sc,.intuit.com',
          'qbn.ptc.qbo_sctimer,.intuit.com',
          'mds_3rdparty_experience_store,.intuit.com',
        ];
        function getCookie (w) {
          cookieValue = '';
          aCookies = new Array();
          aCookies = document.cookie.split('; ');
          for (ctr = 0; ctr < aCookies.length; ctr++) {
            NmeVal = new Array();
            NmeVal = aCookies[ctr].split('=');
            if (NmeVal[0] == w) cookieValue = unescape(NmeVal[1]);
          }
          return cookieValue;
        }
        function getByteSize (s) {
          return encodeURIComponent('<q></q>' + s).length;
        }
        try {
          beforeCookieCleanUp = getByteSize(document.cookie);
          cLength = cookie_names.length;
          startTime = new Date().getTime();
          message = '';
          if (beforeCookieCleanUp > overAllCookieSizeLimit) {
            cookiesSizeExceededOverAllLimit = true;
            message = ' Over All Cookies Size Exceeded ' + overAllCookieSizeLimit + '\n';
          }
          for (i = 0; i < cLength; i++) {
            cNameDomain = cookie_names[i].split(',');
            c_Name = cNameDomain[0];
            c_Domain = cNameDomain[1];
            c_Value = getCookie(c_Name);
            if (cookiesSizeExceededOverAllLimit || c_Value.length > perCookieSizeLimit) {
              if (!cookieCleanPerformed) {
                cookieCleanPerformed = true;
                if (!cookiesSizeExceededOverAllLimit) message = ' List Of Cookies Deleted\n';
              }
              if (!cookiesSizeExceededOverAllLimit)
                message = message + ' Name : ' + c_Name + ' , Length : ' + c_Value.length + '\n';
              document.cookie =
                c_Name +
                ' =; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=' +
                c_Domain +
                '; path=/;';
            }
          }
          endTime = new Date().getTime();
          afterCookieCleanUp = getByteSize(document.cookie);
          if (cookieCleanPerformed) {
            message =
              message +
              'Cookies Size Before ' +
              beforeCookieCleanUp +
              '\nCookies Size After ' +
              afterCookieCleanUp +
              '\n Execution Time ' +
              (endTime - startTime) +
              ' ms ';
            newrelic.addPageAction('Cookie_CleanUp_Performed', { info: message });
          }
        } catch (err) {}
      },
      1951771,
      465543
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(
          [
            'ICom - Button Click to ProConnect',
            'ICom - Button Click to Mint',
            'ICom - Button Click to QB',
            'ICom - Button Click to TT',
          ],
          function () {
            var ensEventContext = this;
            if (ensEventContext == window) ensEventContext = undefined;
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var data = {};
            if ('') data['value'] = '';
            if ('') data['currency'] = '';
            if ('') data['content_name'] = '';
            if ('') data['content_category'] = '';
            if ('') data['content_ids'] = '' ? ''.split(',') : '';
            if ('') data['content_type'] = '';
            if ('') data['num_items'] = '';
            if ('') data['search_string'] = '';
            if ('') data['status'] = '';
            var eventTrackingPixelId = '1827482914219447';
            var eventType = 'CustomEvent' === 'CustomEvent' ? 'exit_allbrands' : 'CustomEvent';
            var trackString =
              'CustomEvent' === 'CustomEvent'
                ? eventTrackingPixelId
                  ? 'trackSingleCustom'
                  : 'trackCustom'
                : eventTrackingPixelId
                ? 'trackSingle'
                : 'track';
            var makeRequest = function () {
              if (eventTrackingPixelId) fbq(trackString, eventTrackingPixelId, eventType, data);
              else fbq(trackString, eventType, data);
            };
            if (true)
              var interval = setInterval(function () {
                if (window.fbq) {
                  makeRequest();
                  clearInterval(interval);
                }
              }, 100);
            else makeRequest();
          }
        );
      },
      2762244,
      [3309959],
      585678,
      [520782]
    );
  })();
}
