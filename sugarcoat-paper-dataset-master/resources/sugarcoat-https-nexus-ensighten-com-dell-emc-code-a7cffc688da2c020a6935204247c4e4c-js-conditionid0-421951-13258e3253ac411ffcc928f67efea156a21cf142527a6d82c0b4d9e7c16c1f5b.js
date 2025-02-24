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
  const $___stub_afd3abb015d4d981 = {};
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
  })($___stub_afd3abb015d4d981);
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
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                var value = '; ' + document.cookie;
                var parts = value.split('; AMCV_A6F4776A5245B0EA0A490D44%40AdobeOrg=');
                if (parts.length == 2) return decodeURIComponent(parts.pop().split(';').shift());
              },
              transform: function (val) {
                return val ? val : '';
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'AMCV EMC Cookie',
              collection: 'Dell Cookie Values',
              source: 'Manage',
              priv: 'false',
            },
            { id: '58749' }
          );
        }, 58749);
      },
      -1,
      -1
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var data = Dell.Metrics.sc;
        if (data.applicationname == 'education') {
          window.iperceptionskey = '41039d59-df92-4f5c-937c-d8a79d32d94b';
          (function () {
            var a = document.createElement('script'),
              b = document.getElementsByTagName('body')[0];
            a.type = 'text/javascript';
            a.async = true;
            a.src = '//universal.iperceptions.com/wrapper.js';
            b.appendChild(a);
          })();
        } else if (data.cms == 'delltech') {
          window.iperceptionskey = '8c377d46-a6c4-4205-9147-e9c9c45ad533';
          (function () {
            var a = document.createElement('script'),
              b = document.getElementsByTagName('body')[0];
            a.type = 'text/javascript';
            a.async = true;
            a.src = '//universal.iper2.com/wrapper.js';
            b.appendChild(a);
          })();
        } else {
          window.iperceptionskey = '8c377d46-a6c4-4205-9147-e9c9c45ad533';
          (function () {
            var a = document.createElement('script'),
              b = document.getElementsByTagName('body')[0];
            a.type = 'text/javascript';
            a.async = true;
            a.src = '//universal.iper2.com/wrapper.js';
            b.appendChild(a);
          })();
        }
      },
      2801096,
      541908
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (
          window.location.href.indexOf('/teammembers/') != -1 ||
          window.location.host.indexOf('delltechnologiesworld') != -1 ||
          window.location.host.indexOf('onlinexperiences') != -1
        );
        else {
          if (typeof gb === 'undefined') gb = {};
          gb._metrics = gb._metrics || {};
          var GBDataCollection_FeatureToggle = true;
          if (GBDataCollection_FeatureToggle === true) {
            gb._metrics.parentURL = document.location.href;
            gb._metrics.GBTagVersion = '6.3.108';
            gb._metrics.EnsightenSpace = 'EMC';
          }
          if (typeof _cls_config === 'undefined') _cls_config = {};
          if (
            window.location.href.indexOf('/premier/') != -1 ||
            window.location.href.indexOf('pilot.search.dell.com') != -1
          ) {
            _cls_config.reportEncoding = 'JSON';
            _cls_config.reportPreferSendBeaconAPI = true;
            _cls_config.reportCompress = true;
          } else _cls_config.reportPreferSendBeaconAPI = false;
          _cls_config.reportMaxConcurrency = 2;
          _cls_config.reportInterval = 3000;
          _cls_config.reportAddUriParamAPI = true;
          _cls_config.removeBase64ImageDataTagNames = ['LI', 'DIV', 'IMG'];
          _cls_config.reportURI = 'https://gbxgateway.dell.com/post/WEB/report';
          _cls_config.resourcesRecordEnabled = true;
          _cls_config.resourcesRecordAllowCors = true;
          _cls_config.resourcesRecordCount = 1;
          _cls_config.resourceRecordCssOnly = true;
          _cls_config.domPreciseStyleSheetCloning = true;
          _cls_config.maxRecordedCountPerError = 1;
          _cls_config.useIdSelectors = true;
          _cls_config.clientAttributesEnabled = true;
          _cls_config.clientAttributesMaxLength = 30;
          _cls_config.interceptAjax = false;
          _cls_config.idleEventTimeInterval = 30000;
          _cls_config.maxTimeForIdleEvent = 90000;
          _cls_config.reportTimingBetweenBeacons = 200;
          _cls_config.segmentationIgnoreWhenLocationContains = 'pilot.search.dell.com';
          _cls_config.recordMouseMoves = true;
          _cls_config.recordScrolls = true;
          _cls_config.recordHovers = true;
          _cls_config.collectStruggles = true;
          _cls_config.domStartAfter = 2000;
          _cls_config.domHashTokens = true;
          _cls_config.reportToStorageAfterUnload = true;
          _cls_config.domTamperingDetectionEnabled = true;
          _cls_config.maskBlacklistValueById = [
            '*password',
            'password*',
            '*MothersMaidenName',
            'MothersMaidenName*',
            'mothersMaidenName',
            'motherMaidenName',
            '*SocialSecurityNumber',
            'SocialSecurityNumber*',
            'SocialSecurityNumber',
            'socialSecurityNumber',
            '*socialSecurityNumber',
            'socialSecurityNumber*',
            '*AccountNumber',
            'AccountNumber*',
            '*accountnumber',
            'accountnumber*',
            'AccountPin',
            'cardId',
            'CardIdentificationNumber*',
            '*CardIdentificationNumber',
            'cardNumber',
            'CardNumber*',
            '*CardNumber',
            'cartPayment_ccNumber',
            'cid*',
            '*cid',
            'cid',
            'ConfirmNewPassword',
            'credit-card',
            'credit-card*',
            '*credit-card',
            'creditCardVm.model.cardNumRegex',
            'CurrentPassword',
            '*IdentificationNumber',
            'identificationNumber',
            'input[type=password]',
            'item-CardIdentificationNumber.*',
            'NewPassword',
            'Password',
            'paymentCCCreditCard',
            '*SocialInsuranceNumber',
            'pinNumber',
            'security-code',
            'security-code*',
            'txtSecurityCode',
            'visiblePassword',
            'driversLicense',
            'pcaasId',
            'federalTaxId',
            '*ssn',
            'ssn*',
            'ssn',
            'account-details',
            'my-profile-page__section--information',
            '*rtnnumber',
            '*acc-number',
            'add-an-account-page__dpa-mmn',
            'BankInformation.BankNumber',
            'BankInformation.BranchTransitNumber',
            '*DateOfBirthDay',
            '*DateOfBirthMonth',
            '*DateOfBirthYear',
            'dateOfBirth',
            '*DateOfBirth',
            'PersCode.ConfirmationPersonalCode',
            'PersCode.PersonalCodeField',
            'pin',
            'Agreement-confirmPin',
            'SharedInformation_DriversLicenseNumber',
          ];
          _cls_config.maskBlacklistValueByClass = [
            'add-bank-account__acc-number-input',
            '*password',
            'password*',
          ];
          _cls_config.valueMaskingMode = 'blacklist';
          _cls_config.domBlacklistMaskContentById = [
            'dfs-hidden-value__label--value-show',
            '*DateOfBirthDay',
            '*DateOfBirthMonth',
            '*DateOfBirthYear',
            'dateOfBirth',
            '*DateOfBirth',
          ];
          _cls_config.domMaskingMode = 'blacklist';
          _cls_config.domKeepScriptMatching = 'Dell.Metrics.sc';
          _cls_config.captureGlobalObjects = [
            'gb._tttoken',
            'gb._boom',
            'Dell.Metrics.sc',
            'gb._metrics',
          ];
          _cls_config.captureGlobalObjectsOnSegmentChange = true;
          !(function () {
            var i,
              n = self;
            (n.Function.prototype.gbBind = n.Function.prototype.bind),
              /{s+[native code]/.test(
                Function.prototype.toString.call(n.Function.prototype.bind)
              ) &&
                ((i = Array.prototype.slice),
                (n.Function.prototype.gbBind = function () {
                  var e = this,
                    t = arguments[0],
                    r = i.call(arguments, 1);
                  if ('function' != typeof e)
                    throw new TypeError(
                      'Function.prototype.bind - what is trying to be bound is not callable'
                    );
                  return function () {
                    var n = r.concat(i.call(arguments));
                    return e.apply(t, n);
                  };
                }));
          })(),
            (function (i, n, e, O, t, F) {
              const $___old_8948ef26c7fb32ac = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'localStorage'
                ),
                $___old_a4d2612577a9fc6d = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                ),
                $___old_ae2a9756a010f92d = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                ),
                $___old_f446a7a46c890922 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'performance'
                );
              try {
                if ($___old_8948ef26c7fb32ac)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_b317e19f866a2da7.localStorage
                  ));
                if ($___old_a4d2612577a9fc6d)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_47c01efa79e9f191.userAgent
                  ));
                if ($___old_ae2a9756a010f92d)
                  ({}.constructor.defineProperty(
                    window,
                    'sessionStorage',
                    $___stub_b317e19f866a2da7.sessionStorage
                  ));
                if ($___old_f446a7a46c890922)
                  ({}.constructor.defineProperty(
                    window,
                    'performance',
                    $___stub_2b47892348e4e4b9.performance
                  ));
                return function () {
                  var _,
                    r,
                    o,
                    a,
                    L,
                    E,
                    u,
                    c,
                    logger,
                    s,
                    f,
                    d,
                    l,
                    P,
                    B,
                    w,
                    v,
                    h,
                    m,
                    b,
                    p,
                    g,
                    y,
                    C,
                    T,
                    S,
                    I,
                    k,
                    x,
                    M,
                    R,
                    A,
                    N,
                    D,
                    j,
                    U,
                    H,
                    V,
                    q,
                    z,
                    W,
                    X,
                    G,
                    J,
                    K,
                    Q,
                    Y,
                    $,
                    Z,
                    nn,
                    en,
                    tn,
                    rn,
                    on,
                    an,
                    un,
                    cn,
                    sn,
                    fn,
                    dn,
                    ln,
                    vn,
                    hn,
                    mn,
                    pn,
                    gn,
                    yn,
                    wn,
                    bn,
                    En,
                    Cn,
                    Tn,
                    Sn,
                    In,
                    kn,
                    xn,
                    Mn,
                    Rn,
                    An,
                    Nn,
                    Dn,
                    _n,
                    On,
                    Fn,
                    Ln,
                    Pn,
                    Bn,
                    jn,
                    Un,
                    Hn,
                    Vn,
                    qn,
                    zn,
                    Wn,
                    Xn,
                    Gn,
                    Jn,
                    Kn,
                    Qn,
                    Yn,
                    $n,
                    Zn,
                    ne,
                    ee,
                    te,
                    re,
                    ie,
                    oe,
                    ae,
                    ue,
                    ce,
                    se,
                    fe,
                    de,
                    iframeHelper,
                    le,
                    ve,
                    he,
                    me,
                    pe,
                    ge,
                    ye,
                    we,
                    be,
                    Ee,
                    Ce,
                    Te,
                    Se,
                    Ie,
                    ke,
                    xe,
                    Me,
                    Re,
                    Ae,
                    Ne,
                    De,
                    _e,
                    Oe,
                    Fe,
                    Le,
                    Pe,
                    Be,
                    je,
                    Ue,
                    He,
                    Ve,
                    qe,
                    ze,
                    We,
                    Xe,
                    Ge,
                    Je,
                    Ke,
                    Qe,
                    Ye,
                    $e,
                    Ze;
                  function nt (n) {
                    (n.debugMode = !1),
                      (n.traceMode = !1),
                      (n.suppressMouseMovesDebug = !0),
                      (n.reportByPost = !1),
                      (n.reportPreferSendBeaconAPI = !1),
                      (n.reportDisableCors = !1),
                      (n.timingMode = !1),
                      (n.useIdSelectors = !0),
                      (n.noIdSelectorsForClassNames = ['skull_list']),
                      (n.noIdSelectorsForIDs = []),
                      (n.noIdSelectorsForAttrs = []),
                      (n.useNameInFormSelectors = !1),
                      (n.preferNamesInFormSelectors = !1),
                      (n.reportValidationErrors = !0),
                      (n.supportNativeAutoComplete = !1),
                      (n.recordEnterForInputs = !0),
                      (n.recordTypingAll = !1),
                      (n.recordTypingForAttrs = ['bs-typeahead']),
                      (n.recordTypingForClasses = ['tt-input']),
                      (n.recordTypingForIDs = []),
                      (n.ignorableElementIds = ['cls_logger', 'cls_logger_tab']),
                      (n.idleEventTimeInterval = -1),
                      (n.maxTimeForIdleEvent = 420000),
                      (n.validationValueForRenderTime = 20000),
                      (n.titleCharsLimit = 150),
                      (n.recordAjaxCallsAnyway = !1),
                      (n.ajaxDebug = !1),
                      (n.recordSpaLoadTime = !0),
                      (n.ajaxHashRecurrentUrls = !0),
                      (n.reportVisualNames = !0),
                      (n.visualNameDebug = !1),
                      (n.visualName = {
                        maxLimit: 160,
                        maxParentLevel: 3,
                        CLS_NAME_ATTR: 'cls_vname',
                        filterNamingByTagName: ['script', 'style'],
                        maxDistance: 20,
                        eventsToCalcDistance: ['mousedown'],
                        by: {
                          title: !0,
                          alt: !0,
                          ariaLabel: !0,
                          labelTag: !0,
                          inlineText: !0,
                          placeholder: !0,
                          inputConsts: !0,
                          inputButtonsValue: !0,
                          name: !0,
                          id: !0,
                          parent: !0,
                          child: !0,
                        },
                        elementListToCheckParent: ['img', 'span', 'div'],
                        elementListToCheckChild: ['button'],
                        filterInlineTextByClassName: [],
                        wrapperElementList: ['BUTTON', 'A'],
                      }),
                      (n.visualNameLimit = 60),
                      (n.valueEncryptionMode = _.censorMode.BlackList),
                      (n.valueEncryptById = []),
                      (n.valueEncryptByClass = []),
                      (n.valueMaskingMode = F),
                      (n.maskWhitelistValueById = []),
                      (n.maskBlacklistValueById = []),
                      (n.maskWhitelistValueByClass = []),
                      (n.maskBlacklistValueByClass = []),
                      (n.valueWhitelistMaskSimpleSelector = []),
                      (n.valueBlacklistMaskSimpleSelector = []),
                      (n.valueMaskIgnoreAttribute = ''),
                      (n.ajaxMaskRequestBody = []),
                      (n.ajaxMaskResponseBody = []),
                      (n.ajaxStatsQueryParams = []),
                      (n.ajaxCaptureRequestCookie = !1),
                      (n.maskCookies = []),
                      (n.maskQueryParameters = []),
                      (n.ccAutoMask = !0),
                      (n.ccAutoMaskByContent = !0),
                      (n.ccAutoMaskKeepLastDigits = -1),
                      (n.ccForceMaskContainer = !0),
                      (n.valueMaskByCategories = []),
                      (n.valueMaskingCharNumeric = '#'),
                      (n.valueMaskingCharNumericLike = '#'),
                      (n.maskTitle = !1),
                      (n.cookieAssignFQDN = !1),
                      (n.cookieTLDSegmentCount = -1),
                      (n.recordErrors = !0),
                      (n.recordConsoleErrors = !0),
                      (n.maxRecordedCountPerError = 2),
                      (n.minDragPixels = 10),
                      (n.botDetection = !1),
                      (n.devToolsDetectionEnabled = !0),
                      (n.devToolsDetectionMessage = ''),
                      (n.struggleCaptureHorizontalScrollbar = !0),
                      (n.struggleCaptureBlankPage = !0),
                      (n.struggleCaptureDeadClick = !0),
                      (n.struggleDeadClickInterval = 1000),
                      (n.struggleCaptureErrorClick = !0),
                      (n.struggleErrorClickInterval = 1000),
                      (n.reportDebugInfo = !0),
                      (n.DOMBeaconImg = !1),
                      (n.truncateEventsWithUnload = !0),
                      (n.recordScrolls = !1),
                      (n.minStallingScrollTime = 3000),
                      (n.scrollDebug = !1),
                      (n.recordMouseMoves = !1),
                      (n.mmRecordTimes = !1),
                      (n.mmDiluteMinPixels = 20),
                      (n.mmMaxMovesWithUnload = 100),
                      (n.mmMaxMovesInEventNoTimes = 180),
                      (n.mmMaxMovesInEventWithTimes = 130),
                      (n.mmMinStallingMoveTime = 10000),
                      (n.mmMaxInMemoryMoves = 600),
                      (n.mmDebug = !1),
                      (n.SCIntegration = !1),
                      (n.SCIntegrationURLsContainList = []),
                      (n.SCIntegrationKeyList = ['pageName', 'v25', 'v11', 'v39']),
                      (n.interceptThirdPartyAttributes = !0),
                      (n.interceptABTesting = !0),
                      (n.externalIdAttr = 'id'),
                      (n.recordHovers = !1),
                      (n.mhDeepLevel = 2),
                      (n.mhMaxListSize = 10),
                      (n.mhMaxInMemeoryHovers = 100),
                      (n.mhDebug = !1),
                      (n.reportHybrid = !1),
                      (n.domRecordEnabled = !1),
                      (n.reportAllResourcesLoad = !1),
                      (n.ignoreReportResourcesByTagNames = []),
                      (n.reportExternalResources = !1),
                      (n.reportMaxConcurrency = -1),
                      (n.reportTimingBetweenBeacons = -1),
                      (n.externalReporterObject = ''),
                      (n.clsDebug = !0),
                      (n.clsDebugCharsLimit = 1000),
                      (n.clsDebugMaxReports = 5),
                      (n.reportEncoding = 'formUrl'),
                      (n.reportCompress = !1),
                      (n.cordovaSdkReporting = !1),
                      (n.reportAddUriParams = ['clsjsv', '_cls_s', '_cls_v', 'sn']),
                      (n.reportAddUriParamAPI = !1),
                      (n.reportStorageBackedForUA = ['.*']),
                      (n.reportViaTopWindow = !1),
                      (n.duplicateIdCheck = !1),
                      (n.blackoutWhenLocationContains = []),
                      (n.reportCorsForceSafelistedHeaders = !0),
                      (n.reportCorsTakeNativeCookies = []),
                      (n.resetCorsOnNativeCookieChange = !1),
                      (n.clsByNativeCookie = ''),
                      (n.visitorDaysToExpiration = 1825),
                      (n.reportIncludeReferrer = !0),
                      (n.reportCreateSubSessionCookie = !1),
                      (n.sessionIdByQueryParam = '_cls_s'),
                      (n.visitorIdByQueryParam = '_cls_v'),
                      (n.sendStateInfo = !0),
                      (n.debounceScrolls = 500),
                      (n.encryptionKeyId = 'key1'),
                      (n.encryptionTimeout = 600),
                      (n.captureGlobalObjectsEmptyStrings = !1),
                      (n.captureGlobalObjectsOnSegmentChange = !1),
                      (n.segmentationTriggerBySimpleSelector = []),
                      (n.segmentationLabelBySimpleSelector = []),
                      (n.segmentationLabelByAttribute = ''),
                      (n.segmentationTitleByAttribute = ''),
                      (n.segmentationPrefix = '_logical_'),
                      (n.useExtension = !0),
                      (n.ajaxRecordSessionLimit = -1),
                      (n.pageNameResolvingEnabled = !0),
                      (n.pageNameResolvingByElements = []);
                  }
                  function et (n) {
                    (n.maxReportSize = 1900),
                      (n.reportInterval = 3000),
                      (n.reportByPost = !0),
                      (n.maxPostReportSize = 150000),
                      (n.reportPostInterval = 10000),
                      (n.reportPostRetry = !0),
                      (n.reportMaxRetries = 2),
                      (n.reportAbortAfter = -1),
                      (n.reportAddUriParams = ['clsjsv', '_cls_s', '_cls_v', 'pid', 'sn']),
                      (n.reportUseWorker = !1),
                      (n.interceptAjax = !0),
                      (n.ajaxHashRecurrentUrls = !1),
                      (n.ajaxRecordMetadata = 'always'),
                      (n.domNewPageTriggers = []),
                      (n.domNewPageAjaxTriggers = []),
                      (n.domStartAfter = 10000),
                      (n.domExpireSnapshotAfter = 1140000),
                      (n.domUpdateEveryWsMsgIn = -1),
                      (n.domCompress = !0),
                      (n.domRecordCssRules = !0),
                      (n.domRecordEnabled = !0),
                      (n.recordShadowDom = !1),
                      (n.resourcesRecordEnabled = !1),
                      (n.resourceRecordCssOnly = !0),
                      (n.resourcesRecordCount = 1),
                      (n.resourcesRecordChance = 0.5),
                      (n.resourcesRecordAllowCors = !1),
                      (n.resourceIgnoreWhenUrlContains = []),
                      (n.resourceTimingRecordEnabled = !1),
                      (n.resourceTimingRecordEnabledByChance = 0.01),
                      (n.clientAttributesEnabled = !1),
                      (n.clientAttributeMaxLength = 30),
                      (n.semiDomEnabled = !0),
                      (n.domIgnoredFormElements = ['__VIEWSTATE']),
                      (n.domIncludeSelectorOnUpdate = !0),
                      (n.domWhitelistMaskContentById = []),
                      (n.domBlacklistMaskContentById = []),
                      (n.domOmitByClass = []),
                      (n.domOmitById = ['gb-main-overlay', 'gbOverlay']),
                      (n.domOmitObjectElementsByType = []),
                      (n.domWhitelistMaskContentByClass = []),
                      (n.domBlacklistMaskContentByClass = []),
                      (n.domMaskedAttributes = []),
                      (n.domMaskAttributesByTag = []),
                      (n.domMaskIgnoreAttribute = ''),
                      (n.domWhitelistMaskSimpleSelector = []),
                      (n.domBlacklistMaskSimpleSelector = []),
                      (n.domMaskingMode = _.censorMode.BlackList),
                      (n.domEncryptById = []),
                      (n.domEncryptByClass = []),
                      (n.domPartialWhenLocationContains = []),
                      (n.domFilterAttributes = []),
                      (n.cordovaSdkReporting = !1),
                      (n.domKeepComments = !1),
                      (n.domOmitAfterUnload = !1),
                      (n.domIE11ForceMutationObserver = !1),
                      (n.iframesRecordEnabled = !0),
                      (n.framesetRecordEnabled = !1),
                      (n.iframesDebugEnabled = !1),
                      (n.iframesAutoInject = !1),
                      (n.iframesAutoInjectMode = _.iframesAutoInjectMode.BlackList),
                      (n.blackoutIdleReporting = !1),
                      (n.domTamperingDetectionEnabled = !1),
                      (n.domTamperingGraceTime = 500),
                      (n.iframesHandshakeTimeout = 2000),
                      (n.iframesSkipHidden = !0),
                      (n.domFormValidationTracking = !0),
                      (n.domThrottleChanges = !1),
                      (n.domThrottleChangesIE11Only = !0),
                      (n.domPreciseStyleSheetCloning = !1),
                      (n.collectStruggles = !0),
                      (n.collectFormStruggles = !0),
                      (n.struggleMaxLongFocusTime = 30000),
                      (n.struggleRageClickInterval = 3000),
                      (n.struggleRageClickMinCount = 5),
                      (n.struggleCaptureAjaxErrors = !0),
                      (n.forceRenderingFixForUA = F),
                      (n.domFuseDuration = -1),
                      (n.domFuseElementCount = -1),
                      (n.domFuseDurationIE = 800),
                      (n.domFuseElementCountIE = -1),
                      (n.domFormValidationAdditionalTagNames = []),
                      (n.removeBase64ImageDataTagNames = []),
                      (n.delayDomMutationEvent = -1);
                  }
                  function tt (n) {
                    return function () {
                      return Array.prototype[n].apply(
                        arguments[0],
                        Array.prototype.slice.call(arguments, 1)
                      );
                    };
                  }
                  function rt (u) {
                    var r;
                    function t (n) {
                      return null !== n && E.isNumber(n.width) && E.isNumber(n.height)
                        ? n.width + 'x' + n.height
                        : 'x';
                    }
                    function i (n) {
                      return n ? '1' : '0';
                    }
                    function a (n) {
                      return B.Base64.encode(n);
                    }
                    function c (n) {
                      if (E.isNumber(n)) return B.encodeAsBase(n, _.encoding.numberBase);
                    }
                    function o (n) {
                      if (E.isString(n)) return c(B.hashcode(n));
                    }
                    function e (n) {
                      if (!E.isNumber(n.x) || !E.isNumber(n.y)) return n.x, void n.y;
                      var e = Math.round(n.x),
                        t = Math.round(n.y);
                      return c(e) + '_' + c(t);
                    }
                    function s (n, e, t, r) {
                      E.isString(t) &&
                        (r
                          ? n.push(B.Base64.encode(e) + '_' + B.Base64.encode(t))
                          : n.push(e + '_' + t));
                    }
                    function f (n, e, t) {
                      E.isNumber(t) && n.push(e + '_' + c(t));
                    }
                    function d (n, e) {
                      var t,
                        r = [];
                      for (t in e)
                        void 0 !== _.dictionary.performanceTimingEvents[t] &&
                          f(r, _.dictionary.encodePerformanceTimingMeasurement(t), e[t]);
                      return r.join(n);
                    }
                    return {
                      setBeaconEncoder: function (n) {
                        r = n;
                      },
                      encodePageDetails: function (n) {
                        var e = [];
                        return (
                          n.frame && s(e, 't', n.frame ? 'f' : 'p'),
                          s(e, 'u', o(n.urlWithoutHash)),
                          n.hash && s(e, 'h', B.Base64.encode(n.hash)),
                          n.windowSize && s(e, 's', t(n.windowSize)),
                          n.screenSize && s(e, 'sc', t(n.screenSize)),
                          n.referrerWithoutHash && s(e, 'r', o(n.referrerWithoutHash)),
                          _.reportBase64URLs && s(e, 'ub', B.Base64.encode(n.url)),
                          e.join('*')
                        );
                      },
                      encodePageSnapshotData: function (n) {
                        var e = 'h',
                          t = r.encodeSnapshotHtml(n.html);
                        return (
                          t.compressed ? (e = 'hh') : t.plain && (e = 'p'),
                          [
                            'sn_' + n.seq,
                            'r_' + B.Base64.encode(n.referrer),
                            'c_' + B.Base64.encode(n.cookie),
                            'ch_' + n.charset,
                            e + '_' + t.encoded,
                          ].join('*')
                        );
                      },
                      encodeResize: function (n) {
                        var e = [];
                        return s(e, 'ws', t(n.window)), s(e, 'sc', t(n.screen)), e.join('*');
                      },
                      encodeTimings: function (n) {
                        return E.reduce(
                          n,
                          function (n, e, t) {
                            var r = 'u_' + t + '*t_' + e.total;
                            return (
                              E.isNumber(e.rendering) && (r += '*r_' + e.rendering),
                              E.isNumber(e.dns) && (r += '*d_' + e.dns),
                              E.isNumber(e.timeToFirstBuffer) &&
                                (r += '*f_' + e.timeToFirstBuffer),
                              E.isNumber(e.downloadTime) && (r += '*w_' + e.downloadTime),
                              E.isNumber(e.originalRenderTime) &&
                                (r += '*o_' + e.originalRenderTime),
                              E.isString(n) && 0 < n.length ? n + '**' + r : r
                            );
                          },
                          ''
                        );
                      },
                      encodeWaterfallTiming: function (n) {
                        var e = [];
                        for (var t in n) {
                          for (var r = [], i = {}, o = [], a = 0; a < n[t].length; a++) {
                            var u = [],
                              c = null;
                            for (var s in n[t][a])
                              'name' === s
                                ? (c = B.Base64.encode(n[t][a][s]))
                                : (i[s] === F && ((i[s] = o.length), o.push(s)),
                                  f(u, i[s], Math.round(n[t][a][s])));
                            null !== c && r.push(c + '_' + u.join('_')), (c = null);
                          }
                          0 !== r.length && e.push(t + '*' + o.join('_') + '*' + r.join('*'));
                        }
                        return e.join('**');
                      },
                      encodeThirdPartyAttributes: function (n) {
                        for (var e, t = '', r = [], i = 0; i < n.length; i++) {
                          for (e in ((t += B.Base64.encode(n[i].urlMatcher)), n[i].valueMap))
                            n[i].valueMap.hasOwnProperty(e) &&
                              (t +=
                                '_' +
                                B.Base64.encode(e) +
                                '_' +
                                B.Base64.encode(n[i].valueMap[e]));
                          r.push(t), (t = '');
                        }
                        return r.join('*');
                      },
                      encodeABTesting: function (n) {
                        for (var e = [], t = 0; t < n.length; t++)
                          e.push(
                            'vi_' +
                              B.Base64.encode(n[t].variantId) +
                              '_vn_' +
                              B.Base64.encode(n[t].variantName) +
                              '_ei_' +
                              B.Base64.encode(n[t].experimentId) +
                              '_en_' +
                              B.Base64.encode(n[t].experimentName)
                          );
                        return e.join('*');
                      },
                      encodeAjaxStats: function (n) {
                        var e = JSON.stringify(n),
                          t = B.pako.gzip(e);
                        return B.Base64.bytesToBase64(t);
                      },
                      encodeStruggles: function (n) {
                        var e = JSON.stringify(n);
                        return B.Base64.encode(e);
                      },
                      encodePerformanceTimings: function (n) {
                        var e = n.perf.timing,
                          t = n.perf.navigation,
                          r = n.browserTime,
                          i = [d('*', e)];
                        return (
                          t && E.isNumber(t.type) && f(i, 'nt', t.type),
                          t && E.isNumber(t.redirectCount) && f(i, 'rc', t.redirectCount),
                          r && f(i, 'bt', r),
                          i.join('*')
                        );
                      },
                      encodeAjaxRequest: function (n) {
                        var e,
                          t,
                          r = [];
                        return (
                          s(r, 'sn', c(n.sn || 0)),
                          n.method && s(r, 'm', n.method),
                          u.ajaxHashRecurrentUrls && 'function' == typeof n.ajaxUrls.get
                            ? ((e = o(n.url)),
                              (t = n.ajaxUrls.get(e)),
                              E.isUndefined(t) &&
                                (n.ajaxUrls.set(e, n.url), s(r, 'u', B.Base64.encode(n.url))),
                              s(r, 'uh', e))
                            : s(r, 'u', B.Base64.encode(n.url)),
                          n.startedAt && n.endedAt && s(r, 'd', c(n.endedAt - n.startedAt)),
                          s(r, 's', c(n.status)),
                          n.statusText && s(r, 'st', B.Base64.encode(n.statusText)),
                          n.requestHeaders && s(r, 'rqh', B.Base64.encode(n.requestHeaders)),
                          n.requestContent && s(r, 'rqc', B.Base64.encode(n.requestContent)),
                          n.responseHeaders && s(r, 'rh', B.Base64.encode(n.responseHeaders)),
                          n.responseContent &&
                            s(
                              r,
                              'rc',
                              (n.responseCompressed ? B.Base64.bytesToBase64 : B.Base64.encode)(
                                n.responseContent
                              )
                            ),
                          n.resContentType && s(r, 'rct', B.Base64.encode(n.resContentType)),
                          n.reqContentType && s(r, 'rqct', B.Base64.encode(n.reqContentType)),
                          n.contentLength && s(r, 'rcl', c(parseInt(n.contentLength))),
                          n.requestLength && s(r, 'rqcl', c(parseInt(n.requestLength))),
                          n.ttfb && s(r, 'ttfb', c(n.ttfb)),
                          n.downTime && s(r, 'dt', c(n.downTime)),
                          s(r, 'a', i(n.aborted)),
                          s(r, 'api', n.api),
                          r.join('*')
                        );
                      },
                      encodeResourceContent: function (n) {
                        var e = [];
                        if (!E.isUndefined(n.url))
                          return (
                            s(e, 'u', B.Base64.encode(n.url)),
                            n.type && 0 < n.type.length && s(e, 't', B.Base64.encode(n.type)),
                            n.content &&
                              0 < n.content.length &&
                              s(e, 'dd', B.Base64.bytesToBase64(n.content)),
                            n.error && 0 < n.error.length && s(e, 'er', B.Base64.encode(n.error)),
                            e.join('*')
                          );
                      },
                      encodeKeyValue: function (n) {
                        var e = [];
                        return (
                          s(e, 'n', B.Base64.encode(n.name)),
                          s(e, 'v', B.Base64.encode('' + n.val)),
                          e.join('*')
                        );
                      },
                      encodeSegmentChanged: function (n) {
                        var e = [];
                        return (
                          n.type && e.push('t_' + n.type),
                          n.current && e.push('c_' + B.Base64.encode(n.current)),
                          n.hint && e.push('h_' + n.hint),
                          n.last && e.push('l_' + B.Base64.encode(n.last)),
                          n.lastDwell && e.push('ld_' + c(n.lastDwell)),
                          (!n.lastLoadTime && 0 !== n.lastLoadTime) ||
                            e.push('ll_' + c(n.lastLoadTime)),
                          e.join('*')
                        );
                      },
                      encodeKeyEvent: function (n) {
                        var e = '';
                        return (
                          n.unicode && (e += n.unicode),
                          E.isUndefined(n.content) || (e += '_' + B.Base64.encode(n.content)),
                          e
                        );
                      },
                      encodeClickDetails: function (n) {
                        return e(n.start) + '*' + e(n.end) + '*' + c(n.duration);
                      },
                      encodeMouseMove: function (n) {
                        u.mmDebug && (n.length, JSON.stringify(n));
                        for (var e, t = [], r = 0; r < n.length; r++)
                          !(function (n, e, t, r) {
                            r = r || 0;
                            var i = u.mmRecordTimes ? '_' + c(r) : '',
                              o = Math.round(e),
                              a = Math.round(t);
                            n.push(c(o) + '_' + c(a) + i);
                          })(t, (e = n[r]).x, e.y, e.t);
                        return t.join('*');
                      },
                      encodeHoverEvent: function (n) {
                        var e = n.join(' ');
                        return u.mhDebug && n.length, e;
                      },
                      encodeKVMap: function (n) {
                        var e = [];
                        for (var t in n) n.hasOwnProperty(t) && s(e, t, n[t], !0);
                        return e.join('*');
                      },
                      encodeNameKVMap: function (n) {
                        var e = n.val;
                        if (!e || 0 === Object.keys(e).length) return '';
                        var t,
                          r = [B.Base64.encode(n.name)],
                          i = [];
                        for (var o in e)
                          e.hasOwnProperty(o) &&
                            ((t = e[o]),
                            i.push(
                              B.Base64.encode(o) + '_' + (E.isString(t) ? '' + t : a(t.toString()))
                            ));
                        return r.push(i.join('*')), r.join('**');
                      },
                      encodeNumber: c,
                      encodeBoolean: i,
                      encodeString: a,
                      encodeCoordinate: function (n) {
                        if (!E.isNumber(n.x) || !E.isNumber(n.y)) return n.x, void n.y;
                        var e = Math.round(n.x),
                          t = Math.round(n.y);
                        return c(e) + '_' + c(t);
                      },
                      encodeCoordinate64: function (n) {
                        return B.Base64.encode(e(n));
                      },
                      encodeHashCode: o,
                      encodeNavigationTiming: d,
                    };
                  }
                  function it () {}
                  function ot (n, e) {
                    if (!n) return n;
                    if ('object' != typeof n) return n;
                    var t,
                      r,
                      i = {};
                    for (t in n)
                      if (n.hasOwnProperty(t)) {
                        if ('function' == (r = typeof n[t])) continue;
                        if ('object' == r) {
                          if (null === n[t]) continue;
                          if (n[t].addEventListener || n[t].attachEvent) continue;
                          if (!n[t].hasOwnProperty) continue;
                          if (Array.isArray(n[t])) {
                            i[t] = n[t].map(ot);
                            continue;
                          }
                          i[t] = ot(n[t], e);
                          continue;
                        }
                        i[t] = n[t];
                      }
                    return i;
                  }
                  function at (n, e, t, r) {
                    it.call(this),
                      (this.pageId = r),
                      (this.timestamp = e),
                      (this.type = n),
                      (this.element = t),
                      (this.report = !0),
                      (this.shouldEncodeValue = !0),
                      (this.subPage = window.location.hash),
                      (this.referrer = B.stripHash(window.location.href)),
                      (this.id = at.prototype.nextId++),
                      (this.extraInfo = { eventId: this.id });
                  }
                  function ut (n, e) {
                    it.call(this), (this.id = n), (this.metadata = e), (this.events = []);
                  }
                  function ct (i, t) {
                    function r (n, e) {
                      return (n ? '1' : '0') + (e ? '1' : '0');
                    }
                    var o = ct.INITIAL_COMPRESSION_FACTOR,
                      e =
                        (t = t || { compress: !0, forceBase64: !0 }).compress || t.forceBase64
                          ? 1.33
                          : 1,
                      a = 1;
                    (this.newPayload = function () {
                      return new st();
                    }),
                      (this.encode = t.compress
                        ? function (n) {
                            if (0 === n._updates.length) return '';
                            var e,
                              t = B.arrayToJsonSafe(n._updates),
                              r = B.Base64.bytesToBase64(i.compress(t));
                            return (
                              (e = r.length / t.length),
                              (o = Math.max(e, ct.MINIMAL_COMPRESSION_FACTOR)),
                              '11' + r
                            );
                          }
                        : function (n) {
                            if (0 === n._updates.length) return '';
                            var e = B.arrayToJsonSafe(n._updates);
                            return (
                              r(!1, t.forceBase64) + (t.forceBase64 ? B.Base64.toBase64(e) : e)
                            );
                          }),
                      (this.refForEvent = function (n) {
                        return '' + a++ + B.hashcode(n.type + n.timestamp);
                      }),
                      (this.estimatedDomUpdateSize = function (n) {
                        return (n ? JSON.stringify(n).length : 0) * e * (t.compress ? o : 1);
                      });
                  }
                  function st () {
                    this._updates = [];
                  }
                  function ft (i) {
                    return {
                      compress: function (n) {
                        return B.pako.gzip(n);
                      },
                      encodeTimestamp: function (n) {
                        var e = n.timestamp;
                        return E.isNumber(e) || (e = B.currentTimestamp()), i.encodeNumber(e);
                      },
                      encodeEventType: function (n) {
                        return _.encodeEventTypes ? _.dictionary.encodeEventType(n) : n;
                      },
                      encodeExtraInfo: function (n) {
                        var e = n.extraInfo;
                        if (E.isUndefined(e)) return '';
                        for (
                          var t, r, i, o, a = [], u = at.prototype.extraInfoAttrs, c = 0;
                          c < u.length;
                          c++
                        ) {
                          var s = u[c],
                            f = e[s.name];
                          E.isUndefined(f) ||
                            ((t = a),
                            (r = s.encodeName),
                            (i = s.encodeFunc(f)),
                            (o = s.encodeCode),
                            E.isString(i) && t.push(r + '.' + o + '_' + i));
                        }
                        return a.join('*');
                      },
                      encodeDebugInfo: function (n) {
                        var e = n.debugInfo;
                        if (E.isUndefined(e)) return '-';
                        function t (n, e, t) {
                          E.isUndefined(t) || n.push(e + '_' + t);
                        }
                        var r = [];
                        return (
                          t(r, 's', e.severity),
                          t(r, 'c', e.code),
                          t(r, 'i', e.count),
                          e.msg && e.count <= 3 && t(r, 'm', i.encodeString(e.msg)),
                          r.join('*')
                        );
                      },
                    };
                  }
                  function dt (l, v, h, m, p, g) {
                    var s = (g = g || {}).base64UriEncoder || encodeURIComponent,
                      y = new ct(m, { forceBase64: !0, compress: g.domCompress });
                    (this.name = 'FORM-URL'),
                      (this.supportsCompression = !1),
                      (this.isCompressing = function () {
                        return !1;
                      }),
                      (this.visitXhr = function (n) {
                        n.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                      }),
                      (this.getContentType = function () {
                        return 'application/x-www-form-urlencoded';
                      }),
                      (this.encodeSnapshotHtml = function (n) {
                        return g.domCompress
                          ? {
                              encoded: h.Base64.bytesToBase64(m.compress(n)),
                              plain: !1,
                              compressed: !0,
                            }
                          : { encoded: h.Base64.encode(n), plain: !1, compressed: !1 };
                      }),
                      (this.estimateBeaconSize = function (n) {
                        return n;
                      }),
                      (this.encodeEvent = function (n, e) {
                        var t,
                          r = v.encoding.delimiters.eventParts,
                          i = m.encodeTimestamp(n),
                          o = m.encodeEventType(n.type),
                          a = w[b[n.type]],
                          u = a ? a(n.value) : n.value;
                        void 0 === e &&
                          (e =
                            l.isUndefined(n.selectorExpression) || null == n.selectorExpression
                              ? v.encoding.rootSelector
                              : n.selectorExpression);
                        var c,
                          s = i + r + o + r + e;
                        l.isString(u)
                          ? (p.stringIsEncrypted(u)
                              ? (n.shouldEncodeValue = !1)
                              : (t = n.shouldEncodeValue
                                  ? v.encoding.valueEncodedPrefix
                                  : v.encoding.valueNotEncodedPrefix),
                            (c = n.shouldEncodeValue ? h.Base64.encode(u) : u),
                            (s += t ? r + t + c : r + c))
                          : (s += r + '-'),
                          l.isUndefined(n.extraInfo)
                            ? (s += r + '-')
                            : (s += r + m.encodeExtraInfo(n)),
                          g.reportDebugInfo && !l.isUndefined(n.debugInfo)
                            ? (s += r + m.encodeDebugInfo(n))
                            : (s += r + '-');
                        var f = '';
                        n.domSnapshot &&
                          ((f = y.refForEvent(n)), (s += r + v.encoding.domSnapshotRefPrefix + f)),
                          n.type,
                          l.contains(
                            ['webSocketFrame', 'resourceContent', 'pageSnapshot'],
                            n.type
                          ),
                          0 < n.subPage.length && n.subPage;
                        var d = {
                          event: encodeURIComponent(s),
                          domUpdate: n.domSnapshot,
                          domUpdateRef: f,
                        };
                        return (
                          (d.length = d.event.length + y.estimatedDomUpdateSize(n.domSnapshot)), d
                        );
                      }),
                      (this.encodeBeacon = function (n, e, t, r) {
                        for (var i = [], o = y.newPayload(), a = 0; a < t.length; a++)
                          i.push(t[a].event),
                            t[a].domUpdate && o.add(t[a].domUpdate, t[a].domUpdateRef);
                        var u =
                            'v=' +
                            n +
                            (void 0 !== e.referrer ? '&r=' + encodeURIComponent(e.referrer) : '') +
                            '&sn=' +
                            r +
                            '&p=' +
                            e.pageId +
                            (void 0 !== e.segment ? '&seg=' + encodeURIComponent(e.segment) : '') +
                            (void 0 !== e.subPage ? '&sp=' + encodeURIComponent(e.subPage) : '') +
                            (void 0 !== e.pssn ? '&pssn=' + e.pssn : '') +
                            '&e=' +
                            i.join(v.encoding.delimiters.events) +
                            '&dom=' +
                            s(y.encode(o)),
                          c = p.getKeyInfo();
                        return c && (u += '&key=' + encodeURIComponent(c)), u;
                      });
                  }
                  function lt (u, c, s, d, l, v) {
                    var h = 0.25,
                      m = new ct(d, {
                        forceBase64: !1,
                        compress: !(v = v || {}).compress && v.domCompress,
                      });
                    (this.name = 'JSON'),
                      (this.supportsCompression = !0),
                      (this.isCompressing = function () {
                        return !0;
                      }),
                      (this.visitXhr = function (n) {
                        v.corsSafelisted
                          ? n.setRequestHeader(
                              'Content-Type',
                              'text/plain' +
                                (v.compress ? '; charset=' + lt.COMPRESSED_INDICATION_CHARSET : '')
                            )
                          : (n.setRequestHeader('Content-Type', 'application/json'),
                            v.compress && n.setRequestHeader('Content-Encoding', 'gzip'));
                      }),
                      (this.getContentType = function () {
                        return 'application/json';
                      }),
                      (this.encodeSnapshotHtml = function (n) {
                        return !v.compress && v.domCompress
                          ? {
                              encoded: s.Base64.bytesToBase64(d.compress(n)),
                              plain: !1,
                              compressed: !0,
                            }
                          : { encoded: n, plain: !0, compressed: !1 };
                      }),
                      (this.estimateBeaconSize = function (n) {
                        return v.compress ? n * h : n;
                      }),
                      (this.encodeEvent = function (n, e) {
                        var t,
                          r = {
                            timestamp: d.encodeTimestamp(n),
                            type: '' + d.encodeEventType(n.type),
                          };
                        void 0 === e &&
                          (e =
                            u.isUndefined(n.selectorExpression) || null == n.selectorExpression
                              ? c.encoding.rootSelector
                              : n.selectorExpression),
                          (r.selector = e);
                        var i = w[b[n.type]],
                          o = i ? i(n.value) : n.value;
                        u.isString(o)
                          ? (l.stringIsEncrypted(o)
                              ? (n.shouldEncodeValue = !1)
                              : (t = n.shouldEncodeValue
                                  ? c.encoding.valueEncodedPrefix
                                  : c.encoding.valueNotEncodedPrefix),
                            (o = n.shouldEncodeValue ? s.Base64.encode(o) : o),
                            (r.value = t ? t + o : o))
                          : (r.value = '-'),
                          u.isUndefined(n.extraInfo)
                            ? (r.extraInfo = '-')
                            : (r.extraInfo = d.encodeExtraInfo(n)),
                          v.reportDebugInfo && !u.isUndefined(n.debugInfo)
                            ? (r.debugInfo = d.encodeDebugInfo(n))
                            : (r.debugInfo = '-');
                        var a = '';
                        return (
                          n.domSnapshot
                            ? ((a = m.refForEvent(n)),
                              (r.domSnapshot = c.encoding.domSnapshotRefPrefix + a))
                            : (r.domSnapshot = '-'),
                          n.type,
                          r.timestamp,
                          r.type,
                          0 < n.subPage.length && n.subPage,
                          (function (n) {
                            var e,
                              t = 0;
                            for (e in n.event)
                              'string' == typeof n.event[e] &&
                                (t += e.length + n.event[e].length + 6);
                            return (n.length = t + 2 + m.estimatedDomUpdateSize(n.domUpdate)), n;
                          })({ event: r, domUpdate: n.domSnapshot, domUpdateRef: a })
                        );
                      }),
                      (this.encodeBeacon = function (n, e, t, r) {
                        for (var i = [], o = m.newPayload(), a = 0; a < t.length; a++)
                          i.push(t[a].event),
                            t[a].domUpdate && o.add(t[a].domUpdate, t[a].domUpdateRef);
                        var u = {
                            ver: n,
                            sn: r,
                            pageId: e.pageId,
                            segment: e.segment,
                            events: i,
                            dom: m.encode(o),
                          },
                          c = l.getKeyInfo();
                        c && (u.key = c),
                          e.referrer && (u.referrer = e.referrer),
                          void 0 !== e.subPage && 0 < e.subPage.length && (u.subPage = e.subPage),
                          void 0 !== e.pssn && (u.pssn = e.pssn);
                        var s = JSON.stringify(u);
                        if (v.compress) {
                          var f = d.compress(s);
                          return (
                            (h = Math.max(f.length / s.length, lt.MINIMAL_COMPRESSION_FACTOR)),
                            s.length,
                            f.length,
                            f
                          );
                        }
                        return s;
                      });
                  }
                  function vt (n, e, t, r, i) {
                    const $___old_e48087f79d424e97 = {}.constructor.getOwnPropertyDescriptor(
                      Navigator.prototype,
                      'userAgent'
                    );
                    try {
                      if ($___old_e48087f79d424e97)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___stub_47c01efa79e9f191.userAgent
                        ));
                      return function () {
                        var o,
                          a,
                          u = ft(n);
                        function c (n) {
                          return '%' + n.charCodeAt(0).toString(16).toUpperCase();
                        }
                        return (
                          (o =
                            'json' === i.reportEncoding
                              ? new lt(E, _, B, u, t, {
                                  reportDebugInfo: i.reportDebugInfo,
                                  compress: i.reportCompress,
                                  domCompress: i.domCompress,
                                  corsSafelisted: r && i.reportCorsForceSafelistedHeaders,
                                })
                              : ((a = /SamsungBrowser\/7/gi.test(e.userAgent)),
                                new dt(E, _, B, u, t, {
                                  reportDebugInfo: i.reportDebugInfo,
                                  domCompress: i.domCompress,
                                  base64UriEncoder: a
                                    ? function (n) {
                                        return n.replace(/\+|=|\//gi, c);
                                      }
                                    : encodeURIComponent,
                                }))),
                          n.setBeaconEncoder(o),
                          o
                        );
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_e48087f79d424e97)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___old_e48087f79d424e97
                        ));
                    }
                  }
                  function ht () {
                    var a = [];
                    (this.add = function (n, e, t, r, i, o) {
                      (this[i.toLowerCase()] = {
                        type: n,
                        nullable: e,
                        parser: t,
                        name: i,
                        required: o,
                        validator: r,
                      }),
                        o && a.push(i);
                    }),
                      (this.requiredFieldsMask = function () {
                        for (var n = {}, e = 0; e < a.length; e++) n[a[e]] = !0;
                        return n;
                      });
                  }
                  function mt () {
                    (this.errors = []), (this.warnings = []);
                  }
                  function pt (n, e, t) {
                    if (void 0 !== n) {
                      var r,
                        i = e.get(t + '.bychance.enabled');
                      return (
                        e.get(t + '.bychance.prev_th') !== '' + n && (i = null),
                        null === i
                          ? ((r = Math.random() < n),
                            e.set(t + '.bychance.enabled', r),
                            e.set(t + '.bychance.prev_th', n))
                          : (r = 'true' === i),
                        r
                      );
                    }
                  }
                  function gt (n, e, t) {
                    var r, i;
                    for (r in ((t =
                      t ||
                      function (n, e, t) {
                        return { key: n, value: e };
                      }),
                    e))
                      e.hasOwnProperty(r) && (n[(i = t(r, e[r], n)).key] = i.value);
                  }
                  function yt () {
                    for (var n = 0; n < arguments.length; n++)
                      if (arguments[n] && arguments[n].length) return 1;
                  }
                  function wt () {
                    return {
                      validateSelector: function (e) {
                        try {
                          return O.querySelector(e), !0;
                        } catch (n) {
                          return (
                            this.printErrorMsg('selector not valid'),
                            void 0 !== Un &&
                              setTimeout(function () {
                                Un.saveClsDebugErrorEvent('maskingConfiguration', F, e);
                              }, 0),
                            !1
                          );
                        }
                      },
                      printErrorMsg: function (n) {
                        console.error(
                          '[EyeView-403]: Error while processing configuration. Error cause: ' + n
                        );
                      },
                    };
                  }
                  function bt (n) {
                    var e = n.msCrypto,
                      a = n.msCrypto.subtle;
                    (this.executeEncryptionFlow = function (n, e, t, r) {
                      var i,
                        o = a.importKey(
                          'spki',
                          n,
                          { name: 'RSA-OAEP', hash: { name: 'SHA-1' } },
                          !1,
                          ['encrypt']
                        );
                      (o.onerror = function (n) {
                        r(n.message);
                      }),
                        (o.oncomplete = function (n) {
                          ((i = a.encrypt(
                            { name: 'RSA-OAEP', hash: { name: 'SHA-1' } },
                            n.target.result,
                            e
                          )).onerror = function (n) {
                            r(n.message);
                          }),
                            (i.oncomplete = function (n) {
                              var e = n.target.result;
                              t(e);
                            });
                        });
                    }),
                      (this.getRandomValues = function (n) {
                        return e.getRandomValues(n);
                      });
                  }
                  function Et (n) {
                    var e = n.crypto,
                      i = e.subtle || e.webkitSubtle;
                    (this.executeEncryptionFlow = function (n, e, t, r) {
                      i.importKey('spki', n, { name: 'RSA-OAEP', hash: 'SHA-1' }, !1, ['encrypt'])
                        .then(function (n) {
                          i.encrypt({ name: 'RSA-OAEP', hash: 'SHA-1' }, n, e)
                            .then(function (n) {
                              t(n);
                            })
                            .catch(function (n) {
                              r(n.message);
                            });
                        })
                        .catch(function (n) {
                          r(n.message);
                        });
                    }),
                      (this.getRandomValues = function (n) {
                        return e.getRandomValues(n);
                      });
                  }
                  function Ct (r) {
                    function n (n, e) {
                      var t = (n ? '\\' + n.split('').join('\\') : '') + (e ? '\\s' : ''),
                        r = new RegExp('^[' + t + ']*\\d[\\d*' + t + ']*$', 'mi');
                      return function (n) {
                        return r.test(n);
                      };
                    }
                    r = B.optionsWithDefaults(r, {
                      valueMaskByCategories: [],
                      valueMaskingCharNumeric: '#',
                      valueMaskingCharNumericLike: '#',
                    });
                    var i = {
                      numeric: {
                        type: 'numeric',
                        test: n(!1, !1),
                        maskingChar: r.valueMaskingCharNumeric || '#',
                        byAttTest: {
                          autocomplete: B.immutableSet(
                            'tel-extension',
                            'tel-local',
                            'tel-area-code',
                            'tel-national',
                            'tel-country-code',
                            'bday-year',
                            'bday-month',
                            'bday-day',
                            'transaction-amount',
                            'postal-code',
                            'country',
                            'cc-exp-month',
                            'cc-exp-year'
                          ),
                          type: B.immutableSet('number', 'range'),
                        },
                      },
                      numericlike: {
                        type: 'numericLike',
                        test: n('=-\\()/%$_#.', !0),
                        maskingChar: r.valueMaskingCharNumericLike || '#',
                        byAttTest: {
                          autocomplete: B.immutableSet('tel', 'bday', 'cc-exp'),
                          type: B.immutableSet('time', 'tel', 'month'),
                        },
                      },
                      badConfiguration: {
                        type: 'bad_Configuration',
                        test: function () {
                          return !0;
                        },
                        maskingChar: '#',
                        byAttTest: { autocomplete: null, type: null },
                      },
                    };
                    return (function () {
                      for (var n = [], e = 0; e < r.valueMaskByCategories.length; ++e) {
                        var t = r.valueMaskByCategories[e].toLowerCase();
                        i[t] ? n.push(i[t]) : n.push(i.badConfiguration);
                      }
                      return n;
                    })();
                  }
                  function Tt (r) {
                    var i = { doMask: !1 };
                    return function (n) {
                      for (var e = 0; e < r.length; ++e) {
                        var t = r[e];
                        if (
                          (function (n, e) {
                            var t;
                            if (e.byAttTest)
                              for (t in e.byAttTest)
                                if (
                                  e.byAttTest.hasOwnProperty(t) &&
                                  e.byAttTest[t][n.getAttribute(t)]
                                )
                                  return 1;
                          })(n, t) ||
                          t.test(n.value)
                        )
                          return { doMask: !0, cause: t.type, maskingChar: t.maskingChar || '*' };
                      }
                      return i;
                    };
                  }
                  function St (n) {
                    var t = !1,
                      r = { INPUT: !0, SELECT: !0, TEXTAREA: !0 };
                    function i (n) {
                      for (; n.parentNode; ) if ('FORM' === (n = n.parentNode).tagName) return n;
                      return n;
                    }
                    return (
                      n.on('domMutation', function (n) {
                        var e = !1;
                        'childList' === n.type &&
                          t &&
                          n.addedNodes.forEach(function (n) {
                            r[n.tagName] &&
                              (e || i(n)._gbForceMasking) &&
                              ((e = !0), (n._gbForceMasking = !0));
                          });
                      }),
                      {
                        markOwnerAndInputs: function (n) {
                          t = !0;
                          var e = i(n);
                          (e._gbForceMasking = !0),
                            (function (n) {
                              for (
                                var e = n.querySelectorAll('input, select, textarea'), t = 0;
                                t < e.length;
                                ++t
                              )
                                e[t]._gbForceMasking = !0;
                            })(e);
                        },
                      }
                    );
                  }
                  function It (n, e, t) {
                    (this.maskingUtils = n), (this.bundles = e), (this.cb = t);
                  }
                  function kt (n) {
                    for (var e, t = 0; t < this.bundles.length; t++)
                      if ((e = this.bundles[t](n)).doMask) return e;
                    return {};
                  }
                  function xt (n, e, t, r, a) {
                    function i (n, e, t) {
                      for (var r, i = [], o = 0; o < n.length; o++)
                        if (1 === (i = n[o].split('*')).length) e.push(n[o]);
                        else if (2 === i.length)
                          try {
                            (r = new RegExp('(^|\\s)' + i.join('.*') + '($|\\s)')), t.push(r);
                          } catch (n) {
                            a.printErrorMsg('exception when creating a regular expression');
                          }
                        else a.printErrorMsg('more than one wildcard in string');
                    }
                    (this._censorValueOf = n.censorValueOf),
                      (this._isAvailable = n.isAvailable),
                      (this._envCensorMode = e),
                      (this._censorAttribute = t),
                      (this._valueCensorIdsWithoutwildcards = []),
                      (this._valueCensorClassesWithoutwildcards = []),
                      (this._regexpValueCensorIds = []),
                      (this._regexpValueCensorClasses = []),
                      (this._valueCensorSelectorsWithoutwildcards = []),
                      (this._options = r || {}),
                      this._options.valueCensorIds &&
                        i(
                          this._options.valueCensorIds,
                          this._valueCensorIdsWithoutwildcards,
                          this._regexpValueCensorIds
                        ),
                      this._options.valueCensorClasses &&
                        i(
                          this._options.valueCensorClasses,
                          this._valueCensorClassesWithoutwildcards,
                          this._regexpValueCensorClasses
                        ),
                      this._options.valueCensorSimpleSelectors &&
                        (function (n, e) {
                          var t;
                          for (t = 0; t < n.length; ++t) a.validateSelector(n[t]) && e.push(n[t]);
                        })(
                          this._options.valueCensorSimpleSelectors,
                          this._valueCensorSelectorsWithoutwildcards
                        ),
                      (this._options.autoCensorPredicate =
                        this._options.autoCensorPredicate ||
                        function () {
                          return !1;
                        });
                  }
                  function Mt (n) {
                    var e = n[en];
                    return e || ((e = tn()), (n[en] = e)), e;
                  }
                  function Rt (n, e, t) {
                    for (var r, i = [], o = 0; o < n.length; o++)
                      if (1 === (i = n[o].split('*')).length) e.push(n[o]);
                      else if (2 === i.length)
                        try {
                          (r = new RegExp('(^|\\s)' + i.join('.*') + '($|\\s)')), t.push(r);
                        } catch (n) {
                          wt.printErrorMsg('exception when creating a regular expression');
                        }
                      else wt.printErrorMsg('more than one wildcard in string');
                  }
                  function At () {
                    (this.readyState = XMLHttpRequest.UNSENT),
                      (this.status = F),
                      (this._url = F),
                      (this._contentType = F),
                      (this.cls_own = !0),
                      (this.report_api = 'send_beacon');
                  }
                  function Nt () {
                    (this.readyState = XMLHttpRequest.UNSENT),
                      (this.status = F),
                      (this.xdr = new XDomainRequest()),
                      (this.xdr.onprogress = function () {}),
                      (this.xdr.ontimeout = function () {});
                    var n = this;
                    (this.xdr.onload = function () {
                      (n.status = 200),
                        (n.readyState = XMLHttpRequest.DONE),
                        n.onreadystatechange && n.onreadystatechange();
                    }),
                      (this.xdr.onerror = function () {
                        (n.status = 400),
                          (n.readyState = XMLHttpRequest.DONE),
                          n.onreadystatechange && n.onreadystatechange();
                      });
                  }
                  function Dt (n, i, o, e) {
                    var t,
                      r,
                      a = !0,
                      u = [
                        function () {
                          const $___old_a33d4f1dacf3f713 = {}.constructor.getOwnPropertyDescriptor(
                            window,
                            'XMLHttpRequest'
                          );
                          try {
                            if ($___old_a33d4f1dacf3f713)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
                              ));
                            return function () {
                              return new XMLHttpRequest();
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_a33d4f1dacf3f713)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_a33d4f1dacf3f713
                              ));
                          }
                        },
                        function () {
                          return new ActiveXObject('Msxml2.XMLHTTP');
                        },
                        function () {
                          return new ActiveXObject('Msxml3.XMLHTTP');
                        },
                        function () {
                          return new ActiveXObject('Microsoft.XMLHTTP');
                        },
                      ];
                    void 0 !== n.XDomainRequest &&
                      /(msie 8\.0|msie 9\.0)/i.test(n.navigator.userAgent) &&
                      u.unshift(function () {
                        return new Nt();
                      }),
                      'undefined' != typeof CordovaRequestAdapter &&
                        e &&
                        ((t = new CordovaCookieAdapter(z)),
                        (r = new CordovaContext(O, t)),
                        u.unshift(function () {
                          return new CordovaRequestAdapter(r, t);
                        }));
                    function c (n) {
                      var e = n();
                      return (e.cls_own = !0), e;
                    }
                    var s = null;
                    return {
                      createXMLHTTPObject: function (n, e) {
                        if (!n && i && e && At.isSupported() && At.canSend(e))
                          return a && o ? ((a = !1), new XMLHttpRequest()) : new At();
                        if (s) return c(s);
                        for (var t, r = 0; r < u.length; r++)
                          try {
                            return (t = c(u[r])), (s = u[r]), t;
                          } catch (n) {}
                        return t;
                      },
                    };
                  }
                  function _t (n) {
                    (this.size = 0), (this.limit = n), (this._keymap = {});
                  }
                  function Ot (e, v, t) {
                    var h = [],
                      m = [];
                    var n,
                      p =
                        ((n = e.location || e.document.location),
                        function () {
                          return n.href;
                        });
                    function r () {
                      var n = p() || '',
                        e = h.length;
                      if (0 !== e) {
                        if (h[e - 1] !== n) {
                          var t = h[h.length - 1],
                            r = g(t),
                            i = g(n),
                            o = Ot.UrlType.FUlL_URL;
                          2 === r.length &&
                            2 === i.length &&
                            r[0] === i[0] &&
                            (o = Ot.UrlType.HASH_ONLY);
                          var a = null;
                          2 <= e && h[e - 2] === n
                            ? (h.pop(), m.push(t), (a = Ot.DirectionType.BACK))
                            : 0 < m.length && m[m.length - 1] === n
                            ? (m.pop(), h.push(n), (a = Ot.DirectionType.FORWARD))
                            : (h.push(n), (m = []));
                          var u,
                            c,
                            s,
                            f,
                            d = o === Ot.UrlType.FUlL_URL ? n : i[1],
                            l = o === Ot.UrlType.FUlL_URL ? t : r[1];
                          return (
                            (u = a),
                            (c = o),
                            (s = l),
                            (f = d),
                            v.emit('navigation', {
                              direction: u,
                              urlType: c,
                              fromUrl: s,
                              toUrl: f,
                            }),
                            1
                          );
                        }
                      } else h.push(n);
                    }
                    function g (n) {
                      var e = (n || '').split('#');
                      return [e[0], e[1] || ''];
                    }
                    function i (e) {
                      var n;
                      'function' == typeof t[e] &&
                        ((n = t[e]),
                        (t[e] = function () {
                          try {
                            3 <= arguments.length &&
                              setTimeout(function () {
                                r();
                              }, 0);
                          } catch (n) {
                            logger.error(
                              'error while intercepting history.' + e + ' method. error:' + n
                            );
                          }
                          return n.apply(t, [].slice.call(arguments));
                        }));
                    }
                    try {
                      i('pushState'), i('replaceState');
                    } catch (n) {
                      logger.error('failed hooking native history manipulation methods.', n);
                    }
                    v.on('init:loaded', function () {
                      var n = void 0 !== e.onpopstate ? 'popstate' : 'hashchange';
                      B.addEventHandler(e, n, function () {
                        r();
                      }),
                        r();
                    }),
                      (this.printHistory = function () {
                        for (var n = 0; n < h.length; n++) console.log('  - ' + n + ' : ' + h[n]);
                      });
                  }
                  function Ft (n, t, r) {
                    var i = r
                        ? function (n) {
                            for (var e = 0; e < r.length; e++)
                              if (-1 !== n.indexOf(r[e])) return !0;
                            return !1;
                          }
                        : Ft.ALWAYS_FALSE,
                      o = !1;
                    function a (n, e) {
                      t.emit(n ? Ft.EVENTS.BlackoutEnter : Ft.EVENTS.BlackoutLeave, e);
                    }
                    function e (n) {
                      var e;
                      i(n) !== o && (a((e = !o), n), (o = e));
                    }
                    function u () {
                      a(!0, n.top.location.href), (o = !0);
                    }
                    function c () {
                      a((o = !1), n.top.location.href);
                    }
                    (this.isUnderBlackout = function () {
                      return o;
                    }),
                      t.on('init:loaded', function () {
                        e(n.location.href);
                      }),
                      t.on('navigation', function () {
                        e(n.location.href);
                      }),
                      t.on('local:forceBlackoutEnter', u),
                      t.on('local:forceBlackoutLeave', c),
                      (this.forceBlackoutEnter = function () {
                        u();
                      }),
                      (this.forceBlackoutLeave = function () {
                        c();
                      });
                  }
                  function Lt (n, e, t, r) {
                    (this.severity = n), (this.code = e), (this.count = t), r && (this.msg = r);
                  }
                  function Pt (s) {
                    var e = { tilda: '_clstil', asterisks: '_clsast', space: '_clsspc' };
                    function f (n, e) {
                      if (v(n)) return e ? _.encoding.rootSelector : n.nodeName;
                      var t = u(n.nodeName, e),
                        r = (function (n) {
                          if (!n.parentNode) return null;
                          var e = n.parentNode.childNodes;
                          if (e.length < 2) return null;
                          for (var t = n.nodeName, r = [], i = 0; i < e.length; i += 1)
                            e[i].nodeName === t && r.push(e[i]);
                          if (r.length < 2) return null;
                          for (var o = 0; o < r.length; o += 1) if (r[o] === n) return o;
                          return null;
                        })(n);
                      if (null !== r)
                        return (function (n, e, t) {
                          var r = n;
                          t || (r += ':eq');
                          return r + '(' + e + ')';
                        })(t, r, e);
                      if (_.useClassesInSelectors) {
                        var i = B.getClassList(n);
                        if (0 < i.length) {
                          for (var o = t, a = 0; a < i.length; a++) o += '.' + i[a];
                          return o;
                        }
                      }
                      return t;
                    }
                    function d (n, e, t) {
                      var r = B.getElementId(n);
                      return (
                        ((r && -1 !== r.indexOf('~')) ||
                          -1 !== r.indexOf('*') ||
                          -1 !== r.indexOf(' ')) &&
                          (r = i(r)),
                        e ? u(n.nodeName, t) + '#' + r : '#' + r
                      );
                    }
                    function l (n, e) {
                      var t = typeof e;
                      ('string' != t && 'number' != t) || n.unshift(e);
                    }
                    function u (n, e) {
                      return e ? _.dictionary.encodeNodeName(n) : n;
                    }
                    function v (n) {
                      var e = n.nodeName;
                      return 'HTML' === e || 'BODY' === e;
                    }
                    function i (n) {
                      return n
                        .replace(/~/g, e.tilda)
                        .replace(/\*/g, e.asterisks)
                        .replace(/ /g, e.space);
                    }
                    function h (n) {
                      for (var e = n.parentNode; null !== e; ) {
                        if (
                          (void 0 === e && console.log('hasFormAncestor undefined node: ', n),
                          'FORM' === e.nodeName)
                        )
                          return 1;
                        e = e.parentNode;
                      }
                    }
                    function m (n, e, t) {
                      var r = '[' + e + "='" + n.getAttribute(e) + "']";
                      return (
                        (-1 === r.indexOf('~') &&
                          -1 === r.indexOf('*') &&
                          -1 === r.indexOf(' ')) ||
                          (r = i(r)),
                        u(n.nodeName, t) + r
                      );
                    }
                    function p (n, e) {
                      if (
                        0 === s.noIdSelectorsForClassNames.length &&
                        0 === s.noIdSelectorsForIDs.length &&
                        0 === s.noIdSelectorsForAttrs.length
                      )
                        return 1;
                      for (
                        var t = B.getClassList(n), r = 0;
                        r < s.noIdSelectorsForClassNames.length;
                        r++
                      )
                        if (0 <= E.indexOf(t, s.noIdSelectorsForClassNames[r])) return;
                      for (r = 0; r < s.noIdSelectorsForAttrs.length; r++)
                        if (n.hasAttribute(s.noIdSelectorsForAttrs[r])) return;
                      for (r = 0; r < s.noIdSelectorsForIDs.length; r++) {
                        var i = s.noIdSelectorsForIDs[r];
                        if (i && 0 <= e.indexOf(i)) return;
                      }
                      return 1;
                    }
                    this.getSelectorInfo = function (n, e, t) {
                      (e = void 0 !== e ? e : _.encodeSelectors), (t = t || { useId: !0 });
                      var r = s.useIdSelectors && t.useId;
                      if (null === n || E.isUndefined(n) || !B.isElement(n))
                        return { selector: _.encoding.rootSelector };
                      if (n.name && s.preferNamesInFormSelectors && h(n))
                        return { selector: m(n, 'name', e) };
                      if (r) {
                        var i = B.getElementId(n);
                        if (i && !B.isDuplicateElementId(i) && p(n, i))
                          return { selector: d(n, !0, e) };
                      }
                      if (n.name && s.useNameInFormSelectors && h(n))
                        return { selector: m(n, 'name', e) };
                      if (t.identifyingAttribute && n.hasAttribute(t.identifyingAttribute))
                        return { selector: m(n, t.identifyingAttribute, e) };
                      for (var o = [f(n, e)], a = n, u = e ? '*' : '>'; a.parentNode && !v(a); )
                        if (1 === (a = a.parentNode).nodeType) {
                          var c = B.getElementId(a);
                          if (c && r && !B.isDuplicateElementId(c) && p(a, c))
                            return l(o, d(a, !1)), { selector: o.join(u) };
                          if ((l(o, f(a, e)), a === parent)) return { selector: o.join(u) };
                        }
                      return { selector: o.join(u) };
                    };
                  }
                  function Bt (n, u, e) {
                    var c,
                      s = B.immutableSet.apply(null, e);
                    function f (n, e) {
                      return n + '=' + e;
                    }
                    function d (n, e, t) {
                      t && s[e] && n.push(f(e, t));
                    }
                    (u = encodeURIComponent(u)),
                      n.on('updateSafariQueryString', function (n) {
                        c = n;
                      }),
                      (this.apply = function (n, e, t, r) {
                        var i,
                          o = [];
                        if (
                          (d(o, 'clsjsv', u),
                          e &&
                            (d(o, '_cls_s', e.sessionId),
                            d(o, '_cls_v', e.visitorId),
                            s.ref && o.push(f('ref', encodeURIComponent(e.referrer))),
                            d(o, '_cls_subs', e.subSessionId),
                            d(o, 'pid', e.pageId)),
                          d(o, 'sn', t),
                          r)
                        )
                          for (i in r) r.hasOwnProperty(i) && o.push(f(i, r[i]));
                        if (c && c.length)
                          for (var a = 0; a < c.length; a++) o.push(f(c[a].key, c[a].value));
                        return o.length
                          ? n + (-1 !== n.indexOf('?') ? '&' : '?') + o.join('&')
                          : n;
                      }),
                      (this.updateNativeCookies = function (n) {
                        c = n;
                      });
                  }
                  function jt (t, e) {
                    function r (n) {
                      return e.keysPrefix + n;
                    }
                    (t = t || {}),
                      (this.get = function (n) {
                        try {
                          return t[r(n)];
                        } catch (n) {
                          return F;
                        }
                      }),
                      (this.set = function (n, e) {
                        try {
                          return (t[r(n)] = e);
                        } catch (n) {
                          return F;
                        }
                      }),
                      (this.remove = function (n) {
                        try {
                          return delete t[r(n)];
                        } catch (n) {
                          return F;
                        }
                      });
                  }
                  function Ut (r, i) {
                    r = r || {};
                    var n,
                      o = i.keysPrefix + 'sid',
                      a = function () {
                        return (n = n || i.sessionIdFunc());
                      };
                    function u (n) {
                      return i.keysPrefix + n;
                    }
                    (this.get = function (n) {
                      var e = a();
                      if (!e) return F;
                      try {
                        if (e === r[o]) return r[u(n)];
                      } catch (n) {}
                      return F;
                    }),
                      (this.set = function (n, e) {
                        var t = a();
                        if (!t) return F;
                        try {
                          return (
                            t !== r[o] &&
                              (function () {
                                var n;
                                for (n in r) 0 === n.indexOf(i.keysPrefix) && delete r[n];
                              })(),
                            (r[o] = t),
                            (r[u(n)] = e)
                          );
                        } catch (n) {}
                        return F;
                      }),
                      (this.remove = function (n) {
                        var e = a();
                        if (!e) return !0;
                        try {
                          if (e === r[o]) return delete r[u(n)];
                        } catch (n) {}
                        return !0;
                      });
                  }
                  function Ht (u, c) {
                    c = B.optionsWithDefaults(c, { domainBy: 'tld', tldSegmentCount: -1 });
                    var s,
                      f = {};
                    function d (n, e, t, r) {
                      var i =
                        encodeURIComponent(n) +
                        '=' +
                        (e + '').replace(/[^!#-+\--:<-\[\]-~]/g, encodeURIComponent);
                      return (
                        (i += ';path=/'), (i += t), (i += r ? ';expires=' + r.toUTCString() : '')
                      );
                    }
                    (this.get = function (n) {
                      var e,
                        t = f[n];
                      return (
                        void 0 === t &&
                          ((t =
                            ((e = new RegExp('[,; ]' + n + '=([^\\s,;]*)', 'gi').exec(
                              ';' + u.cookie
                            )) &&
                              e[1]) ||
                            null),
                          (f[n] = t)),
                        null === t ? F : t
                      );
                    }),
                      (this.set = function (n, e, t) {
                        if (((f[n] = e), void 0 !== s)) u.cookie = d(n, e, s, t);
                        else {
                          for (
                            var r,
                              i = !1,
                              o = (function () {
                                if ('fqdn' === c.domainBy) return [''];
                                var n,
                                  e = [],
                                  t = u.location.host.split(':')[0] || '',
                                  r = t.split('.');
                                if (r.length < 2) return [''];
                                if (2 === r.length) return [t];
                                if (2 <= c.tldSegmentCount && c.tldSegmentCount <= r.length)
                                  return ['.' + r.slice(-c.tldSegmentCount).join('.')];
                                for (n = 2; n < r.length; n++) e.push('.' + r.slice(-n).join('.'));
                                return e;
                              })(),
                              a = 0;
                            a < o.length;
                            a++
                          )
                            if (
                              ((r = o[a] ? ';domain=' + o[a] : ''),
                              (u.cookie = d(n, e, r, t)),
                              -1 !== u.cookie.indexOf(n) && -1 !== u.cookie.indexOf(e))
                            ) {
                              (s = r), o[a], (i = !0);
                              break;
                            }
                          i || (s = '');
                        }
                      });
                  }
                  function Vt (a, u, n, e, c) {
                    (n = n || {}), (c = E.isNumber(c) && 0 < c ? c : 1825);
                    var s = 'cls_v_expr';
                    var t,
                      r = {};
                    e ||
                      ((t = (function (n) {
                        var e,
                          t = n,
                          r = !1,
                          i = !1,
                          o = !1;
                        if (t) t !== u.get(_.cookies.visitor) && (o = i = !0);
                        else if ((t = u.get(_.cookies.visitor))) {
                          if (!(e = (e = a.get(s)) && parseInt(e)) || e !== c) {
                            i = o = !0;
                            try {
                              a.set(s, c);
                            } catch (n) {
                              logger.error(
                                'Error while setting _cls_v expiration date. Exception: ' +
                                  n.message,
                                n
                              );
                            }
                          }
                        } else (i = r = !0), (t = B.uuid());
                        return (
                          i && u.set(_.cookies.visitor, t, B.dateFromNow(24 * c * 60 * 60 * 1000)),
                          { isNew: r, visitorId: t, valueChanged: o }
                        );
                      })(n.visitorId)),
                      (r.visitorId = t.visitorId),
                      (r.changed = t.valueChanged));
                    var i,
                      o,
                      f,
                      d,
                      l,
                      v,
                      h =
                        ((i = e),
                        (o = n.sessionId),
                        (f = t && t.isNew),
                        (v = l = !1),
                        i
                          ? ((d = B.uuid() + ':' + (f ? '0' : '1')), (v = l = !0))
                          : (d = o)
                          ? d !== u.get(_.cookies.session) && (v = l = !0)
                          : (d = u.get(_.cookies.session)) ||
                            ((d = B.uuid() + ':' + (f ? '0' : '1')), (l = !0)),
                        l && u.set(_.cookies.session, d),
                        { sessionId: d, valueChanged: v });
                    return (
                      (r.sessionId = h.sessionId), (r.changed = r.changed || h.valueChanged), r
                    );
                  }
                  function qt (n, e, t) {
                    var r = E.isNumber(n) && E.isNumber(e);
                    return (
                      r ||
                        jn.setErrorOnEvent(
                          state.currentlyEncodedPageEvent,
                          jn.types.WINDOW_SIZE_NOT_VALID_ERR,
                          'Non valid values for window size for ' + t + ': x=' + n + ' y=' + e
                        ),
                      r ? { width: n, height: e } : null
                    );
                  }
                  function zt (n) {
                    var e = B.getClassList(n);
                    if (e)
                      for (var t = 0; t < e.length; t++)
                        if (B.startsWith(e[t], qn.byClassPrefix)) return '.' + e[t];
                    return F;
                  }
                  function Wt (n, e, t) {
                    (this.url = e), (this.timestamp = t), (this.type = n);
                  }
                  function Xt (n, e) {
                    (this.x = n), (this.y = e);
                  }
                  function Gt (r) {
                    var i = null;
                    (this.setNext = function (n) {
                      i = n;
                    }),
                      (this.handle = function (n, e, t) {
                        r && t && (n.events = zn.truncateEventsForUnload(n.events)),
                          i.handle(n, e, t);
                      });
                  }
                  function Jt (i) {
                    var r = null;
                    (this.setNext = function (n) {
                      r = n;
                    }),
                      (this.handle = function (n, e, t) {
                        !(function (n, e) {
                          if (e && i)
                            for (var t = n.events, r = 0; r < t.length; r++)
                              t[r].domSnapshot && delete t[r].domSnapshot;
                        })(n, t),
                          r.handle(n, e, t);
                      });
                  }
                  function Kt (c) {
                    c = c || 50000;
                    var r = null,
                      s = {},
                      f = {};
                    (this.setNext = function (n) {
                      r = n;
                    }),
                      (this.handle = function (n, e, t) {
                        !(function (n, e) {
                          var t,
                            r,
                            i,
                            o,
                            a = n.encodedEvents,
                            u = n.metadata.pageId;
                          for (s[u] = s[u] || 1, t = 0; t < a.length; t++)
                            (o = (r = a[t]).length + _.encoding.delimiters.events.length),
                              (!i || i.estimatedEncodedLength + o > c) &&
                                (i && (i.endIndex = t),
                                (i = {
                                  startIndex: t,
                                  metadata: n.metadata,
                                  encodedEvents: [],
                                  eventSetId: n.id,
                                  estimatedEncodedLength: 0,
                                  sn: s[u],
                                }),
                                f[u] && (i.storage = !0),
                                s[u]++,
                                e.push(i)),
                              i.encodedEvents.push(r),
                              (i.estimatedEncodedLength += o);
                          i && (i.endIndex = t);
                        })(n, e),
                          r.handle(n, e, t);
                      }),
                      (this.onRestoreState = function (n, e) {
                        B.assign(s, n), B.assign(f, e);
                      });
                  }
                  function Qt (i, o) {
                    var r = null;
                    (this.setNext = function (n) {
                      r = n;
                    }),
                      (this.handle = function (n, e, t) {
                        !(function (n, e) {
                          for (var t = n.metadata.pageId, r = 0; r < e.length; r++)
                            (i[t] = i[t] || {}),
                              (i[t][e[r].sn] = {
                                startIndex: e[r].startIndex,
                                endIndex: e[r].endIndex,
                                eventSetId: e[r].eventSetId,
                                sn: e[r].sn,
                              });
                        })(n, e),
                          r.handle(n, e, t);
                      }),
                      (this.onReporterMessage = function (n, e, t, r) {
                        t
                          ? t && i[e] && i[e][n] && (o(e, i[e][n], t), delete i[e][n])
                          : o(e, i[e][n], t, r);
                      });
                  }
                  function Yt (u, c) {
                    var s,
                      f = null;
                    (this.setNext = function (n) {
                      f = n;
                    }),
                      (this.handle = function (n, e, t) {
                        for (var r, i, o = [], a = 0; a < n.events.length; a++)
                          (r = (i = n.events[a]).selectorExpression || _.encoding.rootSelector),
                            (s = (function (e, n) {
                              try {
                                return u.encodeEvent(e, n);
                              } catch (n) {
                                logger.error(
                                  'ERROR: while encoding event: ' + e.type + ' . Exception: ',
                                  n.stack ? n.stack : n.message
                                ),
                                  c &&
                                    ((c.encodingErrors = c.encodingErrors || []),
                                    c.encodingErrors.length < 100 &&
                                      c.encodingErrors.push(n.message));
                              }
                            })(i, r)) && o.push(s);
                        (n.encodedEvents = o), f.handle(n, e, t);
                      });
                  }
                  function $t (n, e, t, r, i) {
                    for (
                      var o = new Kt(n.config.maxReportSize),
                        a = [
                          new Gt(i.truncateEventsWithUnload),
                          new Jt(i.domOmitAfterUnload),
                          new Yt(t, r),
                          o,
                          e,
                          new nr(),
                        ],
                        u = 0;
                      u < a.length;
                      u++
                    )
                      a[u].setNext(a[u + 1]);
                    (this.handle = function (n, e) {
                      for (var t = [], r = 0; r < n.length; r++) a[0].handle(n[r], t, e);
                      return t;
                    }),
                      (this.restoreState = function (n, e) {
                        o.onRestoreState(n, e);
                      });
                  }
                  function Zt (t, r) {
                    var i = null;
                    (this.setNext = function (n) {
                      i = n;
                    }),
                      (this.handle = function (n, e) {
                        (r && r.extensionInspectMode) ||
                          (t.emit('extensionEvent', n.event), i.handle(n, e));
                      }),
                      (this.onPipelineTick = function () {});
                  }
                  function nr () {
                    (this.setNext = function () {}),
                      (this.handle = function () {}),
                      (this.onPipelineTick = function () {});
                  }
                  function er (n) {
                    var r = null,
                      i = F,
                      e = 0,
                      o = [];
                    function t () {
                      (i = F), (o = []);
                    }
                    function a (n) {
                      return new ut(++e, n);
                    }
                    n.on('recordingStopped', function () {
                      t();
                    }),
                      (this.setNext = function (n) {
                        r = n;
                      }),
                      (this.handle = function (n, e) {
                        var t;
                        E.contains(_.nobelEventTypes, n.event.type)
                          ? ((t = a(n.metadata)).events.push(n.event), o.push(t), (i = F))
                          : ((i && i.metadata === n.metadata) || ((i = a(n.metadata)), o.push(i)),
                            i.events.push(n.event)),
                          r.handle(n, e);
                      }),
                      (this.pull = function () {
                        var n = o;
                        return t(), n;
                      }),
                      (this.onPipelineTick = function () {});
                  }
                  function tr (n, t) {
                    var r,
                      e,
                      i,
                      o = null;
                    function a () {
                      B.currentTimestamp() - e < L.maxTimeForIdleEvent &&
                        n.emit('reporter:idle', { idleBaseTime: e, latestEventTime: r });
                    }
                    (e = r = B.currentTimestamp()),
                      -1 !== t && (i = setInterval(a, t)),
                      (this.setNext = function (n) {
                        o = n;
                      }),
                      (this.handle = function (n, e) {
                        -1 !== t &&
                          (clearInterval(i), (i = setInterval(a, t)), (r = B.currentTimestamp())),
                          o.handle(n, e);
                      }),
                      (this.onPipelineTick = function () {});
                  }
                  function rr (n, e) {
                    var r,
                      i = {},
                      o = !1;
                    function a () {
                      return {
                        sessionId: i.sessionId,
                        subSessionId: i.subSessionId,
                        visitorId: i.visitorId,
                        pageId: i.pageId,
                        pssn: i.pssn,
                        referrer: i.referrer,
                        subPage: i.subPage,
                        segment: i.segment,
                        reportURI: e,
                      };
                    }
                    n.on('init:preloaded', function (n) {
                      ((i = {}).sessionId = n.sessionId),
                        (i.visitorId = n.visitorId),
                        (i.pageId = n.pageId);
                    }),
                      n.on('session:new', function (n) {
                        ((i = {}).sessionId = n.sessionId),
                          (i.visitorId = n.visitorId),
                          (i.pageId = n.pageId);
                      }),
                      n.on('session:newSubSessionId', function (n) {
                        ((i = a()).pssn = n.pageSnapshotSN), (i.subSessionId = n.subSessionId);
                      }),
                      n.on('pageSnapshot:report', function (n) {
                        (i = a()).pssn = n.seq;
                      }),
                      (this.setNext = function (n) {
                        r = n;
                      }),
                      (this.handle = function (n, e) {
                        var t = E.contains(_.nobelEventTypes, n.event.type);
                        (o ||
                          t ||
                          i.referrer !== n.event.referrer ||
                          i.subPage !== n.event.subPage ||
                          i.segment !== n.event.segment) &&
                          ((o = t ? !0 : o && !1),
                          ((i = a()).referrer = n.event.referrer),
                          (i.subPage = n.event.subPage),
                          (i.segment = n.event.segment)),
                          (n.metadata = i),
                          r && r.handle(n, e);
                      }),
                      (this.onPipelineTick = function () {});
                  }
                  function ir (r) {
                    var i,
                      o,
                      a = null,
                      u = !1,
                      c = B.immutableSet('mousemove', 'resize', 'scroll');
                    (this.setNext = function (n) {
                      a = n;
                    }),
                      (this.handle = function (n, e) {
                        var t = r(o, i, n.event);
                        (o = i),
                          (i = n.event),
                          !t || (n.event.domSnapshot && n.event.domSnapshot.domChanges)
                            ? (o && c[o.type] && u && ((u = !1), a.handle({ event: o }, e)),
                              a.handle(n, e))
                            : (u = !0);
                      }),
                      (this.onPipelineTick = function (n) {
                        u &&
                          100 < B.currentTimestamp() - i.timestamp &&
                          ((u = !1), a.handle({ event: i }, n), (i = o = F));
                      });
                  }
                  function or (n, e, t) {
                    var r,
                      i,
                      o,
                      a,
                      u,
                      c,
                      s,
                      f,
                      d,
                      l,
                      v,
                      h,
                      m,
                      p,
                      g,
                      y,
                      w,
                      b,
                      E,
                      C = null,
                      T = B.compositeFunctionBuilder()
                        .add(
                          t.domRecordEnabled
                            ? ((p = Un),
                              (g = t),
                              (y = !1),
                              (w = -1),
                              (b = B.immutableSet.apply(null, _.snapshotApplicableEventType)),
                              (E = B.immutableSet(
                                'pageUpdate',
                                'mousedown',
                                'touchstart',
                                'drag',
                                'keydown',
                                'unload'
                              )),
                              function (n) {
                                return (
                                  -1 !== g.domExpireSnapshotAfter &&
                                    'pageSnapshot' !== n.type &&
                                    -1 !== w &&
                                    n.timestamp - w > g.domExpireSnapshotAfter &&
                                    (I().reset(), (p.useCurrentTimeForPagesnapshot = !0)),
                                  (y = y || E[n.type]) &&
                                    b[n.type] &&
                                    (n.domSnapshot = I().getDomSnapshot()),
                                  'pageSnapshot' !== n.type && (w = n.timestamp),
                                  !('pageUpdate' === n.type && !n.domSnapshot) &&
                                    !I()
                                      .getDomMasker()
                                      .isDomMasked(n.element, ee.SELF_OR_ANY_PARENT, te.OMIT)
                                );
                              })
                            : F
                        )
                        .add(
                          ((h = at.prototype.SELECTOR_ACTION_COUNT),
                          (m = {}),
                          function (n) {
                            var e;
                            return (
                              n.selectorExpression &&
                                (void 0 === m[n.selectorExpression] &&
                                  (m[n.selectorExpression] = 0),
                                (e = ++m[n.selectorExpression]),
                                n.setExtraInfo(h, e)),
                              !0
                            );
                          })
                        )
                        .add(
                          ((a = {}),
                          (u = {}),
                          (c = {}),
                          (s = {}),
                          (v = l = d = !(f = {})),
                          (i = e).on('beacon:sending', function (n) {
                            a[n] = !0;
                          }),
                          i.on('beacon:sent', function (n) {
                            delete a[n];
                          }),
                          i.on('beacon:storageAdded', function (n) {
                            u[n] = !0;
                          }),
                          i.on('beacon:storageRemoved', function (n) {
                            delete u[n];
                          }),
                          i.on('beacon:failed', function (n) {
                            f[n.sn] = n.status;
                          }),
                          i.on('beacon:storageFlushFail', function (n) {
                            c[n] = !0;
                          }),
                          i.on('beacon:sizeExceed', function (n) {
                            s[n] = !0;
                          }),
                          i.on('beacon:sendingFromStorage', function () {
                            d = !0;
                          }),
                          i.on('beacon:failedSendingFromStorage', function () {
                            l = !0;
                          }),
                          i.on('devToolsVisibilityChanged', function (n) {
                            o = n.size;
                          }),
                          i.on('worker:init', function (n) {
                            v = !!n;
                          }),
                          function (n) {
                            var e, t, r, i;
                            return (
                              'unload' === n.type &&
                                (S(n, a, at.prototype.DEBUG_UNCONFIRMED_BEACONS),
                                S(n, u, at.prototype.DEBUG_STORAGE_PENDING),
                                S(n, c, at.prototype.FAILED_STORAGE_FLUSH_BEACONS),
                                S(n, s, at.prototype.STORAGE_SIZE_EXCEED),
                                (e = n),
                                (t = f),
                                (r = at.prototype.RETRIED),
                                (i = Object.keys(t)).length &&
                                  ((function (n, e) {
                                    var t;
                                    for (t = 0; t < n.length; t++)
                                      n[t] = 'sn_' + n[t] + '_status_' + e[n[t]];
                                  })(i, t),
                                  e.setExtraInfo(r, i.join(','))),
                                d && n.setExtraInfo(at.prototype.FAILED_SEND_FROM_STORAGE, !0),
                                l && n.setExtraInfo(at.prototype.SENDING_FROM_STORAGE, !0),
                                o && n.setExtraInfo(at.prototype.DEVTOOLS_VALUES, o),
                                n.setExtraInfo(at.prototype.USING_WORKER, v)),
                              !0
                            );
                          })
                        )
                        .add(
                          ((r = Un.logicalSegmentTracker),
                          function () {
                            return r.onBeforeEmittingPageEvent(), !0;
                          })
                        )
                        .buildBooleanAnd();
                    function S (n, e, t) {
                      var r = Object.keys(e);
                      r.length && n.setExtraInfo(t, r.join(','));
                    }
                    function I () {
                      return p.plugins.domRecordingPlugin;
                    }
                    (this.setNext = function (n) {
                      C = n;
                    }),
                      (this.handle = function (n, e) {
                        T(n.event) && C.handle(n, e);
                      }),
                      (this.onPipelineTick = function () {});
                  }
                  function ar (n, e, t, r, i) {
                    for (
                      var o = { stats: r },
                        a = [
                          new ir(zn.diluteEvents.gbBind(zn)),
                          new or(0, e, i),
                          new rr(e, i.reportURI),
                          new Zt(e, Un),
                          new tr(e, i.idleEventTimeInterval),
                          t,
                          new nr(),
                        ],
                        u = 0;
                      u < a.length;
                      u++
                    )
                      a[u].setNext(a[u + 1]);
                    setInterval(function () {
                      for (var n = 0; n < a.length; n++) a[n].onPipelineTick(o);
                    }, 5000),
                      e.on('saveEvent', function (n) {
                        var e = { event: n };
                        try {
                          a[0].handle(e, o);
                        } catch (n) {
                          logger.error("Failed handling page event'. Error: " + n.message, n);
                        }
                      });
                  }
                  function ur (o, a, u, c, s, n, f, d, i) {
                    var l,
                      v = [];
                    function h (n) {
                      var e,
                        t,
                        r = new Date().getTime();
                      -1 !== i && l && r - l < i
                        ? ((e = n),
                          (t = i - (r - l)),
                          setTimeout(p.bind(null, v.shift(), e), t),
                          (l += i))
                        : ((l = r), p(v.shift(), n));
                    }
                    function m () {
                      v.length ? h() : d++;
                    }
                    function p (n, e) {
                      var t, r, i;
                      n &&
                        ((t = n.beacon),
                        (r = n.queryParams),
                        t.storage && (r.storage = !0),
                        (i = a.encodeBeacon(_.beaconVersion, t.metadata, t.encodedEvents, t.sn)),
                        e && d--,
                        o.emit('beacon:sending', t.sn),
                        u.dispatch(i, t.metadata, t.sn, r, m),
                        f(t.sn, i.length),
                        t.sn,
                        t.metadata.pageId,
                        t.encodedEvents.length);
                    }
                    -1 === d && (d = 1000),
                      o.on('removeFromStorage', n.untrack),
                      (this.restoreState = function (n, e) {
                        c.restoreState(n, e);
                      }),
                      (this.encodeAndDispatch = function (n, e, t) {
                        try {
                          var r,
                            i,
                            o = s ? { aid: e } : {},
                            a = (function (n, e) {
                              for (var t = [], r = 0; r < n.length; r++)
                                n[r].encodedEvents.length &&
                                  t.push({ beacon: n[r], queryParams: e });
                              return t;
                            })(c.handle(n, t), o);
                          for (
                            a.length && (v = v.concat(a)), i = Math.min(v.length, d), r = 0;
                            r < i;
                            r++
                          )
                            h(!0), (i = Math.min(v.length, d));
                        } catch (n) {
                          logger.error('Error while flushing beacons. message:', n.message);
                        }
                      });
                  }
                  function cr (t, r) {
                    (this.set = function (n, e) {
                      try {
                        t[n] = r.encode(e);
                      } catch (n) {
                        logger.error('error: failed writing to storage. message:', n.message);
                      }
                    }),
                      (this.getAndClear = function (n) {
                        try {
                          var e = t[n];
                          if ((t.removeItem(n), e)) return r.decode(e);
                        } catch (n) {
                          logger.error('error: failed reading from storage: ' + n.message, n);
                        }
                        return F;
                      });
                  }
                  function sr (t, e, r, o, a, i, u, c, s) {
                    var f,
                      d,
                      n = !1,
                      l = !1,
                      v = '',
                      h = -1,
                      m = !(s.reportPreferSendBeaconAPI && At.isSupported()),
                      p = {};
                    function g () {
                      return n && l && d;
                    }
                    function y (n, e) {
                      (h = Math.max(h, n)), c.count++, (c.flushedBytes += e);
                    }
                    function w () {
                      if (g())
                        try {
                          var n = a.pull();
                          n.length && (b(n), zn.notifyEventsFlush());
                        } catch (n) {
                          logger.error(
                            'ERROR: while flushing pending events. Exception: ',
                            n.stack ? n.stack : n.message
                          );
                        }
                    }
                    function b (n) {
                      o.track(n), d.encodeAndDispatch(n, v);
                    }
                    function E () {
                      try {
                        var n = u.getAndClear(cr.KEY_NAME_SN),
                          e = u.getAndClear(cr.KEY_NAME_EST);
                        n &&
                          e &&
                          e.length &&
                          (d.restoreState(
                            n,
                            (function (n) {
                              for (var e = {}, t = 0; t < n.length; t++)
                                e[n[t].metadata.pageId] = !0;
                              return e;
                            })(e)
                          ),
                          t.emit('beacon:sendingFromStorage'),
                          b(e));
                      } catch (n) {
                        t.emit('beacon:failedSendingFromStorage'),
                          logger.error(
                            'error: could not send pending storage reports. message:',
                            n.message
                          );
                      }
                    }
                    function C () {
                      var n;
                      E(),
                        (n = s.reportByPost ? s.reportPostInterval : s.reportInterval) &&
                          !f &&
                          (f = setInterval(w, n));
                    }
                    function T (n) {
                      try {
                        p[n.data.pageId].postMessage({
                          messageId: n.data.messageId,
                          type: 'eventSet',
                        }),
                          g()
                            ? b(n.data.eventSets)
                            : (logger.error(
                                'Cannot flush event sets of a child iframe as the Flusher is not ready.'
                              ),
                              t.emit(
                                'clsDebug',
                                "cannot flush child iframe's events: dispatcher not set (waiting for worker?)."
                              ));
                      } catch (n) {
                        logger.error(
                          'ERROR: while flushing event sets of a child iframe. Exception: ',
                          n.stack ? n.stack : n.message
                        );
                      }
                    }
                    t.on('worker:init', function (n) {
                      (d = n
                        ? new dr(n, o, y, t)
                        : new ur(
                            t,
                            e,
                            r,
                            i,
                            m,
                            o,
                            y,
                            s.reportMaxConcurrency,
                            s.reportTimingBetweenBeacons
                          )),
                        g() && C();
                    }),
                      t.on('corsReady', function () {
                        (l = !0), g() && C();
                      }),
                      t.on('corsReset', function () {
                        l = !1;
                      }),
                      t.on('encryptionReady', function () {
                        (n = !0), g() && C();
                      }),
                      t.on('sendStoragePendingReports', E),
                      t.on(
                        'event:unload',
                        function () {
                          try {
                            var n,
                              e,
                              t,
                              r,
                              i = a.pull();
                            s.storageBackedReporting
                              ? ((n = o.packageEventSets()),
                                (e = []),
                                Array.prototype.push.apply(e, n.eventSets),
                                Array.prototype.push.apply(e, i),
                                (n.sn[i[0].metadata.pageId] = n.sn[i[0].metadata.pageId] || 1),
                                (n.eventSets = ut.reduceByMetadata(e)),
                                (t = u.getAndClear(cr.KEY_NAME_EST)),
                                (r = u.getAndClear(cr.KEY_NAME_SN)) && B.assign(n.sn, r),
                                t && Array.prototype.push.apply(n.eventSets, t),
                                u.set(cr.KEY_NAME_EST, n.eventSets),
                                u.set(cr.KEY_NAME_SN, n.sn))
                              : i.length && g() && b(i);
                          } catch (n) {
                            logger.error(
                              "Flusher error: handling 'unload' event raised an error.",
                              n.message
                            );
                          }
                        },
                        F,
                        1000
                      ),
                      t.on('forceFlush', w),
                      t.on('analyzerId', function (n) {
                        v = n;
                      }),
                      t.on('iframePortReceived', function (n) {
                        g() && E(), (p[n.pageId] = n.port), (n.port.onmessage = T);
                      }),
                      (this.flush = function () {
                        w();
                      });
                  }
                  function fr (e, r, i, t, o, a) {
                    var u,
                      c = 1,
                      s = {};
                    function f (n) {
                      try {
                        var e = t.pull();
                        e.length && (d(e, n), zn.notifyEventsFlush());
                      } catch (n) {
                        logger.error(
                          'ERROR: while flushing pending events. Exception: ',
                          n.stack ? n.stack : n.message
                        );
                      }
                    }
                    function d (n, e) {
                      try {
                        var t;
                        (s[c] = n),
                          !e || (e && !a.storageBackedReporting)
                            ? (i.send({ eventSets: n, messageId: c, pageId: r().page.id }), c++)
                            : ((t = (o.getAndClear(cr.KEY_NAME_EST) || []).concat(
                                (function (n) {
                                  var e,
                                    t = [];
                                  for (e in n) n.hasOwnProperty(e) && (t = t.concat(n[e]));
                                  return t;
                                })(s)
                              )),
                              o.set(cr.KEY_NAME_EST, t),
                              (s = {}));
                      } catch (n) {
                        logger.error('Exception while flushing events. message:', n.message);
                      }
                    }
                    function l (n) {
                      var e;
                      'ack' === n.data.type
                        ? (f(),
                          (e = a.reportByPost ? a.reportPostInterval : a.reportInterval) &&
                            !u &&
                            (u = setInterval(f, e)))
                        : delete s[n.data.messageId];
                    }
                    e.on('init:loaded', function () {
                      var n = i.initPorts(l);
                      e.emit('frame:port', { args: { pageId: r().page.id }, transferable: n });
                    }),
                      e.on('event:unload', f.gbBind(null, !0)),
                      e.on('forceFlush', f),
                      e.on('sendStoragePendingReports', function () {
                        try {
                          var n = o.getAndClear(cr.KEY_NAME_EST);
                          n && n.length && (e.emit('beacon:sendingFromStorage'), d(n, !1));
                        } catch (n) {
                          e.emit('beacon:failedSendingFromStorage'),
                            logger.error(
                              'error: could not send pending storage reports. message:',
                              n.message
                            );
                        }
                      }),
                      (this.flush = function () {
                        u && f();
                      });
                  }
                  function dr (i, t, r, o) {
                    i.addEventListener('message', function (n) {
                      var e = n.data;
                      'beaconSent' === e.type
                        ? r(e.sn, e.encodedLength)
                        : 'onBeaconResponse' === e.type
                        ? e.success
                          ? (t.untrack({ pageId: e.pageId, beaconData: e.beaconData }),
                            o.emit('beacon:sent', e.sn))
                          : o.emit('beacon:failed', { sn: e.sn, status: e.requestStatus })
                        : 'newConfig' === e.type && o.emit('handleGatewayResponse', e.config);
                    }),
                      o.on('updateSafariQueryString', function (n) {
                        i.postMessage({ type: 'updateQueryString', args: [n] });
                      }),
                      (this.restoreState = function (n, e) {
                        i.postMessage({ type: 'restoreState', args: [n, e] });
                      }),
                      (this.encodeAndDispatch = function (n, e, t) {
                        var r = n.map(function (n) {
                          return n.toJSON ? n.toJSON() : n;
                        });
                        i.postMessage({ type: 'encodeAndDispatch', args: [r, e, t] });
                      });
                  }
                  function lr (i, o, logger, c) {
                    function a (n, e, t) {
                      for (var r = n, i = 0; i < e.length; i++) if (!(r = r[e[i]])) return null;
                      return (function (n, e) {
                        var t,
                          r,
                          i,
                          o,
                          a = [];
                        for (n instanceof Array || (n = [n]), t = 0; t < n.length; t++)
                          for (i = n[t][e], r = 0; r < i.length; r++) {
                            var u = i[r].responseTokens;
                            (o = u) &&
                            o['experience.id'] &&
                            o['experience.name'] &&
                            o['activity.id'] &&
                            o['activity.name']
                              ? a.push({
                                  variantId: u['experience.id'],
                                  variantName: u['experience.name'],
                                  experimentId: u['activity.id'],
                                  experimentName: u['activity.name'],
                                })
                              : c.abTesting.missingFields++;
                          }
                        return a;
                      })(r, t);
                    }
                    ((c = c || {}).abTesting = { missingFields: 0, success: 0 }),
                      i.on('ajax:end', function (n) {
                        try {
                          if (
                            200 <= n.status &&
                            n.status <= 202 &&
                            n.resContentType &&
                            -1 < n.resContentType.indexOf('application/json')
                          ) {
                            var e, t, r;
                            if (n.responseType && 'text' !== n.responseType) {
                              if ('json' !== n.responseType) return;
                              t = n.response;
                            } else t = JSON.parse(n.responseText);
                            for (e = 0; e < o.length; e++)
                              if (
                                new RegExp(o[e].urlMatcher, 'i').test(n.url) &&
                                (r = a(t, o[e].path, o[e].tokenContainer)) &&
                                r.length
                              ) {
                                i.emit('abTesting', r), c.abTesting.success++;
                                break;
                              }
                          }
                        } catch (n) {}
                      });
                  }
                  function vr (t) {
                    var r = vr.extractTLD(t);
                    function o (n) {
                      throw new SyntaxError('Illegal ajax predicate syntax: ' + n);
                    }
                    var a = {
                      always: function () {
                        return function () {
                          return !0;
                        };
                      },
                      never: function () {
                        return function () {
                          return !1;
                        };
                      },
                      fqdn: function () {
                        return function (n) {
                          var e = B.extractHostname(n.url);
                          return !e || e === t;
                        };
                      },
                      tld: function () {
                        return function (n) {
                          var e = B.extractHostname(n.url);
                          return !e || vr.extractTLD(e) === r;
                        };
                      },
                      statusgte: function (n) {
                        n || o("Missing required argument 'status'.");
                        var e = parseInt(n);
                        return function (n) {
                          return n.status >= e;
                        };
                      },
                      urimatches: function (n) {
                        n || o("Missing required argument 'pattern'.");
                        var e = new RegExp(n);
                        return function (n) {
                          return !1 !== e.test(n.url);
                        };
                      },
                      not: function (n) {
                        n || o('Missing required arguments.');
                        var e = i(n);
                        return (
                          1 !== e.length && o('Expecting single argument.'),
                          function (n) {
                            return !e[0](n);
                          }
                        );
                      },
                      and: function (n) {
                        n || o('Missing required arguments.');
                        var t = i(n);
                        return function (n) {
                          for (var e = 0; e < t.length; e++) if (!t[e](n)) return !1;
                          return !0;
                        };
                      },
                      or: function (n) {
                        n || o('Missing required arguments.');
                        var t = i(n);
                        return function (n) {
                          for (var e = 0; e < t.length; e++) if (t[e](n)) return !0;
                          return !1;
                        };
                      },
                    };
                    function u (n) {
                      var e = n.indexOf('(');
                      if (-1 < e) {
                        for (var t = -1, r = 1, i = e + 1; i < n.length; i++)
                          if (('(' === n.charAt(i) && r++, ')' === n.charAt(i) && 0 == --r)) {
                            t = i;
                            break;
                          }
                        return (
                          -1 === t && o("Missing closing ')'."),
                          [B.trim(n.substring(0, e).toLowerCase()), B.trim(n.substring(e + 1, t))]
                        );
                      }
                      return [n.toLowerCase()];
                    }
                    function i (n) {
                      for (var e, t = [], r = (n || '').split(','), i = 0; i < r.length; i++)
                        (e = u(B.trim(r[i]))),
                          a[e[0]] || o("Unsupported predicate type '" + e[0] + "'."),
                          t.push(a[e[0]](e[1]));
                      return t;
                    }
                    (a.true = a.always),
                      (a.false = a.never),
                      (this.create = function (n) {
                        if (!n) return a.never();
                        var e = u(n);
                        return (
                          a[e[0]] || o("Unsupported predicate type '" + e[0] + "'."), a[e[0]](e[1])
                        );
                      });
                  }
                  function hr (f, n, e, d) {
                    var l = {},
                      v = vr.extractTLD(e),
                      h = function () {
                        return !1;
                      },
                      m = f.location.pathname;
                    function p (n) {
                      return l[hr.getEntryKey(n)];
                    }
                    return (
                      n.on('segmentChanged', function (n) {
                        m = n.current;
                      }),
                      n.on('event:unload', function () {
                        B.isEmpty(l) ||
                          n.emit(
                            'ajax:reportStats',
                            (function (n) {
                              var e,
                                t = [];
                              for (e in n) n.hasOwnProperty(e) && t.push(n[e]);
                              return t;
                            })(l)
                          );
                      }),
                      {
                        initConfig: function (n) {
                          try {
                            if (d.ajaxRecordStats) return (h = n.create(d.ajaxRecordStats)), !0;
                          } catch (n) {
                            logger.error(
                              'Error while parsing Ajax predicates from configuration. interception disabled. error:' +
                                n
                            );
                          }
                          return !1;
                        },
                        onSend: function (n) {
                          var e, t, r, i, o, a, u, c, s;
                          h(n) &&
                            ((e = {}),
                            (t = d.ajaxStatsQueryParams && B.parseQuery(n.url.split('?')[1])),
                            (n.queryHash = (function (e, t) {
                              if (!e) return 0;
                              var r = 0;
                              return (
                                d.ajaxStatsQueryParams.forEach(function (n) {
                                  e[n] &&
                                    ((t[n] = e[n]),
                                    (r = 31 * (r = 31 * r + B.hashcode(n)) + B.hashcode(e[n])));
                                }),
                                r
                              );
                            })(t, e)),
                            (n.segment = m),
                            (a = p(n)) ||
                              ((r = f.location.href),
                              (i = B.extractHostname(n.url) || f.location.hostname),
                              (o = B.extractPath(n.url.split('?')[0])),
                              (a = {
                                fields: {
                                  segment: m,
                                  sameTLD: 0 === (s = i).indexOf('/') || v === vr.extractTLD(s),
                                  method: n.method,
                                  hostname: i,
                                  path: o,
                                  refHost: B.extractHostname(r),
                                  refPath: B.extractPath(r.split('?')[0]),
                                  api: n.api,
                                },
                                counters: {},
                                queryParams: e,
                              }),
                              (u = n),
                              (c = a),
                              (l[hr.getEntryKey(u)] = c)));
                        },
                        onLoadEnd: function (n) {
                          var e,
                            t,
                            r,
                            i,
                            o,
                            a,
                            u,
                            c,
                            s,
                            f,
                            d,
                            l,
                            v,
                            h = p(n);
                          h &&
                            ((e = n.resContentType),
                            (t = n.reqContentType),
                            0 === (r = n.status) && (r = n.aborted ? 1 : r),
                            (u = n),
                            (c = h.counters),
                            (s = r),
                            (f = u.duration),
                            (d = parseInt(u.contentLength)),
                            (l = u.requestLength || 0),
                            ++(v = (v = c[s]) || {
                              count: 0,
                              sumDuration: 0,
                              sumResponseBytes: 0,
                              sumRequestBytes: 0,
                              sumTtfb: 0,
                              sumDownloadTime: 0,
                            }).count,
                            (v.sumDuration = v.sumDuration + f),
                            (v.sumResponseBytes = v.sumResponseBytes + (d || 0)),
                            (v.sumRequestBytes = v.sumRequestBytes + (l || 0)),
                            (v.sumTtfb = v.sumTtfb + (u.ttfb || 0)),
                            (v.sumDownloadTime = v.sumDownloadTime + (u.downloadTime || 0)),
                            (c[s] = v),
                            (i = h),
                            (a = t),
                            (o = e) && (i.fields.responseContentType = o),
                            a && (i.fields.requestContentType = a));
                        },
                      }
                    );
                  }
                  function mr (s, f, d, l, t, r) {
                    var v = {},
                      h = r.ajaxCaptureRequestCookie || !1;
                    d.on(
                      'event:unload',
                      function () {
                        var n;
                        for (n in v) v.hasOwnProperty(n) && ((v[n].status = 0), e(v[n]));
                      },
                      null,
                      -1
                    );
                    function n () {
                      return !1;
                    }
                    var m = n,
                      p = n,
                      g = n,
                      y = n,
                      w = n;
                    function b (n, e, t, r, i, o) {
                      var a = {};
                      return (
                        (a.startedAt = n.startTime),
                        (a.endedAt = n.endTime),
                        (a.url = br.safeEncodeURI(n.url)),
                        (a.method = n.method),
                        (a.requestContent =
                          'string' == typeof t
                            ? t
                            : 'string' == typeof n.requestContent
                            ? n.requestContent
                            : null),
                        (a.requestHeaders =
                          e ||
                          (a.requestContent ? 'Content-Type: text/plain;charset=utf-8' : null)),
                        (a.responseHeaders = r),
                        (a.responseContent = i),
                        (a.responseCompressed = o),
                        (a.api = n.api),
                        (a.sn = n.sn),
                        a
                      );
                    }
                    function e (n) {
                      if ((delete v[n.uuid], !n.recordingLimitExceeded)) {
                        var e = g(n),
                          t = e || p(n),
                          r = w(n),
                          i = r || y(n);
                        if (!(i || t || m(n))) return !1;
                        var o = e && n.hasGzipContentEncoding(),
                          a = e ? n.captureContent() : null;
                        o && (a = (c = a) ? l.pako.gzip(c) : null);
                        var u = b(
                          n,
                          i
                            ? (function (n) {
                                var e = n.requestHeaders || [];
                                if (
                                  h &&
                                  (l.extractHostname(n.url) === s.location.host ||
                                    l.isHostRelativeUrl(n.url))
                                )
                                  try {
                                    var t = f.cookie;
                                    t && e.push('cookie: ' + t);
                                  } catch (n) {}
                                return (
                                  n.masking &&
                                    n.masking.request &&
                                    e.push('X-Glassbox-JSMasking: ' + n.masking.request),
                                  e.join('\r\n')
                                );
                              })(n)
                            : null,
                          r ? n.requestContent : null,
                          t ? n.fixHeaders() : null,
                          a,
                          o
                        );
                        (u.lastFocusedSelectorInfo = n.lastFocusedSelectorInfo),
                          (u.status = n.status),
                          (u.statusText = n.statusText),
                          (u.aborted = n.aborted),
                          (u.resContentType = n.resContentType),
                          (u.reqContentType = n.reqContentType || 'text/plain;charset=utf-8'),
                          (u.requestLength = n.requestLength),
                          (u.contentLength = n.contentLength),
                          (u.ttfb = n.ttfb),
                          (u.downTime = n.downloadTime),
                          setTimeout(function () {
                            d.emit('ajax:loadend', u);
                          }, 0);
                      }
                      var c;
                    }
                    return {
                      initConfig: function (n) {
                        var e = !1;
                        return (
                          r.ajaxRecordMetadata && ((m = n.create(r.ajaxRecordMetadata)), (e = !0)),
                          r.ajaxRecordResponseHeaders &&
                            ((p = n.create(r.ajaxRecordResponseHeaders)), (e = !0)),
                          r.ajaxRecordResponseBody &&
                            ((g = n.create(r.ajaxRecordResponseBody)), (e = !0)),
                          r.ajaxRecordRequestHeaders &&
                            ((y = n.create(r.ajaxRecordRequestHeaders)), (e = !0)),
                          r.ajaxRecordRequestBody &&
                            ((w = n.create(r.ajaxRecordRequestBody)), (e = !0)),
                          e
                        );
                      },
                      onLoad: function (n) {
                        n.recordingLimitExceeded || d.emit('ajax:load', b(n));
                      },
                      onError: function (n) {
                        n.recordingLimitExceeded || d.emit('ajax:error', b(n));
                      },
                      onSend: function (n) {
                        var e;
                        t.allow()
                          ? ((e = b((v[n.uuid] = n), n.requestHeaders, n.requestContent)),
                            n.requestContent && (e.data = n.requestContent))
                          : (n.recordingLimitExceeded = !0);
                      },
                      onLoadEnd: e,
                    };
                  }
                  function pr (n, e, t, r, i) {
                    var o;
                    for (o in ((this.api = 'fetch'),
                    (this.url = n),
                    (this.startTime = r),
                    (this.lastFocusedSelectorInfo = i),
                    (this.uuid = t),
                    (this.init = e || {}),
                    (this.method = e.method),
                    (this.requestHeaders = []),
                    (this.masking = {}),
                    (this.sn = br.nextSn()),
                    e.headers))
                      e.headers.hasOwnProperty(o) &&
                        (this.requestHeaders.push(o + ': ' + e.headers[o]),
                        'content-type' === o.toLowerCase() &&
                          (this.reqContentType = e.headers[o]));
                  }
                  function gr (n, e, t, r, i, o) {
                    (this.xhr = n),
                      (this.uuid = i),
                      (this.requestHeaders = []),
                      (this.method = t),
                      (this.url = e),
                      (this.async = r),
                      (this.api = 'xhr'),
                      (this.ajaxMasker = o),
                      (this.masking = {}),
                      (this.sn = br.nextSn());
                  }
                  function yr (a, u, c, s, f, d, l) {
                    if (!a.fetch) return !1;
                    function v (n) {
                      return !n || n.includes('json') || n.includes('text');
                    }
                    function h (n) {
                      d.getPerformanceResourceEntry(n.url, n), u('onLoadEnd', n);
                    }
                    var e = a.fetch;
                    a.fetch = function () {
                      var n = !1;
                      1 < arguments.length &&
                        arguments[1] &&
                        arguments[1].cls_own &&
                        ((n = arguments[1].cls_own), delete arguments[1], (arguments.length = 1));
                      var o = (function (n, e) {
                        try {
                          var t = 'object' == typeof n[0] ? n[0].url || '' + n[0] : n[0],
                            r =
                              'object' == typeof n[1] ? n[1] : 'object' == typeof n[0] ? n[0] : {};
                          if (f(t, e)) {
                            var i = a.document.activeElement
                                ? c.getSelectorInfo(a.document.activeElement)
                                : null,
                              o = new pr(s.mask(t), r, d.uuid(), d.currentTimestamp(), i);
                            return (
                              r.body &&
                                v(o.reqContentType) &&
                                (o.reqContentType && o.reqContentType.includes('json')
                                  ? (o.requestContent = l.getJsonContent(o, 'request', r.body))
                                  : (o.requestContent = l.maskText(o, 'request', r.body)),
                                (o.requestLength = o.requestContent.length)),
                              u('onSend', o),
                              u('onLoadStart', o),
                              o
                            );
                          }
                        } catch (n) {
                          logger.error(
                            'Error while processing fetch request. Error: ' + n.message,
                            n
                          );
                        }
                      })(arguments, n);
                      return o
                        ? Promise.resolve(
                            e
                              .apply(a, arguments)
                              .then(function (n) {
                                try {
                                  var e, t;
                                  n.bodyUsed ||
                                    ((e = n.clone()),
                                    (i = e),
                                    ((r = o).resHeaders = i.headers),
                                    (r.endTime = d.currentTimestamp()),
                                    (r.duration = r.endTime - r.startTime),
                                    (r.status = i.status),
                                    (r.statusText = i.statusText),
                                    (r.resContentType = i.headers.get('Content-Type')),
                                    (r.contentLength = i.headers.get('Content-Length')),
                                    (r.responseText = null),
                                    v((t = e.headers.get('Content-Type'))) && e.ok
                                      ? t && t.includes('json')
                                        ? e
                                            .json()
                                            .then(function (n) {
                                              (o.responseText = l.getJsonContent(
                                                o,
                                                'response',
                                                n
                                              )),
                                                h(o);
                                            })
                                            .catch(function () {
                                              h(o);
                                            })
                                        : e
                                            .text()
                                            .then(function (n) {
                                              (o.responseText = l.maskText(o, 'response', n)),
                                                h(o);
                                            })
                                            .catch(function () {
                                              h(o);
                                            })
                                      : h(o));
                                } catch (n) {
                                  logger.error('Error while processing fetch request.', n);
                                }
                                var r, i;
                                return n;
                              })
                              .catch(function (n) {
                                var e, t;
                                return (
                                  (t = n),
                                  ((e = o).status = 0),
                                  (e.statusText = t.stack),
                                  (e.duration = d.currentTimestamp() - e.startTime),
                                  (e.endTime = d.currentTimestamp()),
                                  h(e),
                                  Promise.reject(n)
                                );
                              })
                          )
                        : e.apply(a, arguments);
                    };
                  }
                  function wr (n, t, e, r, i, o, a, u) {
                    var c = a.hookProto(XMLHttpRequest.prototype);
                    function s (n) {
                      n.adapter.consumed ||
                        (n.adapter.onCompleted(),
                        o.getPerformanceResourceEntry(n.adapter.url, n.adapter),
                        t('onLoadEnd', n.adapter));
                    }
                    function f () {
                      t('onLoad', this.adapter);
                    }
                    function d () {
                      t('onError', this.adapter);
                    }
                    function l () {
                      (this.adapter.startTime = o.currentTimestamp()),
                        (this.adapter.lastFocusedSelectorInfo = n.document.activeElement
                          ? e.getSelectorInfo(n.document.activeElement)
                          : null),
                        t('onLoadStart', this.adapter);
                    }
                    function v () {
                      this.adapter && s(this);
                    }
                    return (
                      'onloadend' in new XMLHttpRequest() &&
                      (!!(
                        c.setHookBefore('open', function () {
                          var n =
                            'object' == typeof arguments[1]
                              ? arguments[1].toString()
                              : arguments[1];
                          i(n, this.cls_own) &&
                            ((n = r.mask(n)),
                            (this.adapter = new gr(
                              this,
                              n,
                              arguments[0],
                              arguments[2],
                              o.uuid(),
                              u
                            )),
                            this.addEventListener('load', f, !1),
                            this.addEventListener('error', d, !1),
                            this.addEventListener('loadstart', l, !1),
                            this.addEventListener('loadend', v, !1));
                        }) &&
                        c.setHookBefore('send', function () {
                          var n, e;
                          this.adapter &&
                            (arguments[0] &&
                              ('string' == typeof arguments[0] ||
                                (0 < arguments.length &&
                                  (!(e = this.adapter.reqContentType) ||
                                    0 <= e.indexOf('json') ||
                                    0 <= e.indexOf('text')))) &&
                              ((n = arguments[0]),
                              (n =
                                this.adapter.reqContentType &&
                                0 <= this.adapter.reqContentType.indexOf('json')
                                  ? u.getJsonContent(this.adapter, 'request', n)
                                  : u.maskText(this.adapter, 'request', n)),
                              (this.adapter.requestContent = n),
                              (this.adapter.requestLength = n.length)),
                            t('onSend', this.adapter));
                        }) &&
                        c.setHookBefore('abort', function () {
                          this.adapter &&
                            ((this.adapter.aborted = !0),
                            this.status
                              ? s(this)
                              : ((this.adapter.aborted = !0), t('onAbort', this.adapter)));
                        }) &&
                        c.setHookBefore('setRequestHeader', function () {
                          this.adapter &&
                            arguments[1] &&
                            (this.adapter.requestHeaders.push(arguments[0] + ': ' + arguments[1]),
                            'Content-Type' === arguments[0] &&
                              (this.adapter.reqContentType = arguments[1]));
                        })
                      ) ||
                        (c.revert(), !1))
                    );
                  }
                  function br (i, o, n, a, e, u, c, s, f, d) {
                    var t,
                      r,
                      l = [
                        mr(i, i.document, n, B, e, f),
                        hr(i, n, c, f),
                        ((t = n),
                        (r = f),
                        {
                          initConfig: function () {
                            return (
                              r.interceptThirdPartyAttributes ||
                              r.struggleCaptureAjaxErrors ||
                              r.recordSpaLoadTime ||
                              r.interceptABTesting ||
                              r.struggleCaptureDeadClick
                            );
                          },
                          onSend: function (n) {
                            t.emit('ajax:send', n);
                          },
                          onLoadEnd: function (n) {
                            t.emit('ajax:end', n);
                          },
                          onError: function (n) {
                            t.emit('ajax:loadError', n);
                          },
                        }),
                      ],
                      v = [];
                    function h (n, e) {
                      for (var t = 0; t < v.length; ++t) v[t][n] && v[t][n](e);
                    }
                    function m (n, e) {
                      if (!n) return !1;
                      if (e) return !1;
                      if (B.startsWith(n, 'data:')) return !1;
                      if (0 <= n.indexOf(f.reportURI)) return !1;
                      for (var t = n.toLowerCase(), r = 0; r < d.length; r++)
                        if (0 <= t.indexOf(d[r])) return !1;
                      return !0;
                    }
                    this.initialize = function () {
                      try {
                        var n,
                          e = new vr(c);
                        for (u.init(e), n = 0; n < l.length; ++n)
                          l[n].initConfig(e) && v.push(l[n]);
                      } catch (n) {
                        return (
                          logger.error(
                            'Error while parsing Ajax predicates from configuration. interception disabled. error:' +
                              n
                          ),
                          !1
                        );
                      }
                      return (
                        (t = yr(i, h, a, s, m, B, u)),
                        (r = wr(i, h, a, s, m, B, o, u)),
                        !(!t && !r)
                      );
                      var t, r;
                    };
                  }
                  function Er () {
                    return parseInt($n.get('xhr.cnt') || '0');
                  }
                  function Cr (r, i, o) {
                    var a = 0,
                      u = {};
                    (this.untrack = function (n) {
                      try {
                        var e, t;
                        (u[n.pageId] = Math.max(u[n.pageId] || 1, n.beaconData.sn)),
                          i[n.pageId] &&
                            ((e = n.beaconData.eventSetId),
                            (t = i[n.pageId][e].events).length &&
                              ((a -= n.beaconData.endIndex - n.beaconData.startIndex),
                              t.splice(
                                n.beaconData.startIndex,
                                n.beaconData.endIndex - n.beaconData.startIndex
                              ),
                              r.emit('beacon:storageRemoved', n.beaconData.sn),
                              t.length || delete i[n.pageId][e]));
                      } catch (n) {
                        logger.error(
                          'Failed removing form memory. Exception message:' + n.message,
                          n
                        );
                      }
                    }),
                      (this.track = function (n) {
                        for (var e, t, r = 0; r < n.length; r++)
                          0 < (e = o - a) &&
                            ((t = n[r]),
                            (i[t.metadata.pageId] = i[t.metadata.pageId] || {}),
                            (i[t.metadata.pageId][t.id] = t).events.length <= e
                              ? (a += t.events.length)
                              : ((a = o), t.events.splice(e)));
                      }),
                      (this.packageEventSets = function () {
                        var n = (function () {
                          var n,
                            e,
                            t = { sn: {}, eventSets: [] };
                          for (n in i)
                            if (i.hasOwnProperty(n))
                              for (e in ((t.sn[n] = u[n] !== F ? u[n] + 1 : 1), i[n]))
                                i[n].hasOwnProperty(e) && t.eventSets.push(i[n][e]);
                          return t;
                        })();
                        return (i = {}), n;
                      });
                  }
                  function Tr (s, f, d, logger, l, v, h) {
                    function m (n, e, t, r, i, o) {
                      var a,
                        u = !1;
                      n = n || '';
                      var c = d.createXMLHTTPObject(!1, n);
                      if (!c)
                        return (
                          logger.error('Failed creating an XMLHttpRequest object'),
                          (u = !0),
                          void o()
                        );
                      h.reportAddUriParamAPI &&
                        ((t.extraInfo = t.extraInfo || {}),
                        (t.extraInfo.api = c.report_api ? c.report_api : 'xhr')),
                        (a = f.apply(t.metadata.reportURI, t.metadata, t.sn, t.extraInfo)),
                        r === F && (r = h.reportMaxRetries),
                        (c.onreadystatechange = function () {
                          4 === c.readyState
                            ? 200 === c.status
                              ? (function () {
                                  l(e, i, !0);
                                  var n = c.getResponseHeader('Content-Type');
                                  n && -1 !== n.indexOf('application/json') && v(c.response),
                                    (u = !0),
                                    o();
                                })()
                              : h.reportPostRetry && r
                              ? (r--,
                                l(e, i, !1, c.status),
                                c.status,
                                c.statusText,
                                m(n, e, t, r, i, o))
                              : (c.abort(), (u = !0), o())
                            : 0 === c.readyState &&
                              (h.reportPostRetry && r
                                ? m(n, e, t, --r, i, o)
                                : (c.abort(), (u = !0), o()));
                        });
                      try {
                        c.open('POST', a, !0),
                          (c.onprogress = function () {}),
                          (c.ontimeout = function () {}),
                          (c.onerror = function () {}),
                          (c.withCredentials = !0),
                          s.visitXhr(c),
                          setTimeout(function () {
                            -1 !== h.reportAbortAfter &&
                              setTimeout(function () {
                                4 !== c.readyState && (c.abort(), u || o());
                              }, h.reportAbortAfter);
                            try {
                              c.send(n);
                            } catch (n) {
                              logger.error(
                                'Failed sending (in) POST request (' +
                                  e +
                                  ') to url ' +
                                  a +
                                  ': ' +
                                  n.message,
                                n
                              );
                            }
                          }, 0);
                      } catch (n) {
                        logger.error(
                          'Failed sending POST request (' + e + ') to url ' + a + ': ' + n.message,
                          n
                        ),
                          (u = !0),
                          o();
                      }
                    }
                    (this.name = 'POST'),
                      (this.config = { maxReportSize: h.maxPostReportSize }),
                      (this.dispatch = function (n, e, t, r, i) {
                        m(n, t, { metadata: e, sn: t, extraInfo: r }, F, e.pageId, i);
                      });
                  }
                  function Sr (t) {
                    var r;
                    (this.send = function (n) {
                      try {
                        var e = n.eventSets.map(function (n) {
                          return n.toJSON ? n.toJSON() : n;
                        });
                        (n.eventSets = e), r.postMessage(n);
                      } catch (n) {
                        logger.error('error: could not send via port. message:', n.message);
                      }
                    }),
                      (this.initPorts = function (n) {
                        var e = new t.MessageChannel();
                        return ((r = e.port1).onmessage = n), e.port2;
                      });
                  }
                  function Ir (e) {
                    (this.encode = function (n) {
                      return n.constructor === Array
                        ? e.encode(B.arrayToJsonSafe(n))
                        : e.encode(JSON.stringify(n));
                    }),
                      (this.decode = function (n) {
                        return JSON.parse(e.decode(n));
                      });
                  }
                  function kr (n, d) {
                    var e = (n = n || {}).domMaskingMode === _.censorMode.WhiteList,
                      t = n.valueMaskingMode === _.censorMode.WhiteList;
                    function r (n, e, t, r, i, o) {
                      var a,
                        u,
                        c = [],
                        s = [];
                      if (t) for (a = 0; a < t.length; a++) s.push(t[a]);
                      if (n)
                        for (a = 0; a < n.length; a++)
                          1 === (c = (u = CSS.escape(n[a])).split('\\*')).length
                            ? s.push('#' + u)
                            : 2 === c.length
                            ? s.push(kr.prepareWildCardSelector(c, 'id'))
                            : d.printErrorMsg('more than one wildcard in id list');
                      if (e)
                        for (a = 0; a < e.length; a++)
                          1 === (c = (u = CSS.escape(e[a])).split('\\*')).length
                            ? s.push('.' + u)
                            : 2 === c.length
                            ? s.push(kr.prepareWildCardSelector(c, 'class'))
                            : d.printErrorMsg('more than one wildcard in class list');
                      if (0 === s.length) return o && i ? (s.push('[' + i + ']'), s) : null;
                      if (r)
                        return s
                          .map(function (n) {
                            var e = n.split('][');
                            return 2 === e.length
                              ? ':not(' + e[0] + ']):not([' + e[1] + ')'
                              : ':not(' + n + ')';
                          })
                          .join('');
                      var f = i ? xr(s, i, o) : s.join(',');
                      return d.validateSelector(f) ? f : null;
                    }
                    (this._domMaskingMode = n.domMaskingMode),
                      (this._maskedAttributes = B.immutableSet.apply(null, n.domMaskedAttributes)),
                      (this._maskedAttributesTags = B.immutableSet.apply(
                        null,
                        (n.domMaskAttributesTags || []).map(function (n) {
                          return n.toUpperCase();
                        })
                      )),
                      (this._ignoreMaskByAttribute = n.domMaskIgnoreAttribute),
                      (this._selectorsByMaskingType = {}),
                      (this._selectorsByMaskingType[te.TEXT] = {
                        selector: r(
                          n.domMaskIds,
                          n.domMaskClasses,
                          n.domMaskSimpleSelector,
                          !1,
                          n.domMaskIgnoreAttribute,
                          e
                        ),
                        doInvert: this._domMaskingMode === _.censorMode.WhiteList,
                      }),
                      (this._selectorsByMaskingType[te.OMIT] = {
                        selector: r(n.domOmitIds, n.domOmitClasses),
                        doInvert: !1,
                      }),
                      (this._selectorsByMaskingType[te.VALUE_ATTRIBUTE] = {
                        selector:
                          'input' +
                          r(
                            n.valueMaskIds,
                            ['cls_mask'].concat(n.valueMaskClasses || []),
                            !1,
                            t,
                            n.valueMaskIgnoreAttribute,
                            e
                          ),
                        doInvert: !1,
                      }),
                      (this._selectorsByMaskingType[te.ATTRIBUTE] = {
                        selector: (function (n, e, t) {
                          if (0 === n.length || 0 === e.length) return null;
                          var r,
                            i,
                            o = [];
                          for (r = 0; r < e.length; r++)
                            for (i = 0; i < n.length; i++) o.push(e[r] + '[' + n[i] + ']');
                          return t ? xr(o, t, !1) : o.join(',');
                        })(
                          n.domMaskedAttributes || [],
                          n.domMaskAttributesTags || [],
                          n.domMaskIgnoreAttribute
                        ),
                        doInvert: !1,
                      }),
                      (this._unmaskableTags = B.immutableSet('TITLE', 'SCRIPT'));
                  }
                  function xr (n, e, t) {
                    var r =
                      1 === n.length
                        ? t
                          ? (n.push('[' + e + ']'), n.join(','))
                          : ((n[0] = n[0] + ':not([' + e + '])'), n)
                        : t
                        ? n.push('[' + e + ']').join(',')
                        : n.join(':not([' + e + ']),');
                    return r;
                  }
                  function Mr (n) {
                    this._cookieMaskSet =
                      n && n.cookieMask ? B.immutableSet.apply(null, n.cookieMask) : null;
                  }
                  function Rr (n, e, t, o, r) {
                    (r = r || {}),
                      (this._encryptionSelector = (function (n, e) {
                        var t,
                          r = [];
                        if (n) for (t = 0; t < n.length; t++) r.push('#' + n[t]);
                        if (e) for (t = 0; t < e.length; t++) r.push('.' + e[t]);
                        if (0 === r.length) return null;
                        var i = r.join(',');
                        return o.validateSelector(i) ? i : null;
                      })(r.domEncryptIds, r.domEncryptClasses)),
                      (this._unEncryptableTags = B.immutableSet('TITLE', 'SCRIPT')),
                      (this._encryptionUtils = e),
                      (this._maskingUtils = t),
                      (this._events = n),
                      (this._shouldFallback = !1);
                  }
                  function Ar (i) {
                    var o,
                      a = i.length;
                    (this.onStart = function (n, e) {
                      for (o = 0; o < a; o++) i[o].onStart(n, e);
                    }),
                      (this.onEnterElement = function (n, e) {
                        var t, r;
                        for (o = 0; o < a; o++) (r = i[o].onEnterElement(n, e)), (t = t || r);
                        return t;
                      }),
                      (this.onLeaveElement = function (n, e) {
                        for (o = 0; o < a; o++) i[o].onLeaveElement(n, e);
                      }),
                      (this.onEnd = function () {
                        for (o = 0; o < a; o++) i[o].onEnd();
                      });
                  }
                  function Nr (n, e) {
                    (this._node = n), (this._predicate = e), (this._childIndex = -1);
                  }
                  function Dr (l, v, e, h, t, m, p) {
                    var g = !!l.ShadowRoot;
                    this.clone = function (n, a, u) {
                      var c = {},
                        s = 0,
                        f = v.clonerDoc.createElement('gb-root'),
                        d = e.createFuse();
                      return (
                        t.visit(n, function (n, e) {
                          if (d.blown) return !0;
                          var t,
                            r = !0,
                            i = h.idOf(n);
                          g && n instanceof l.ShadowRoot
                            ? (t = v.clonerDoc.createElement('gb-shadow'))
                            : (t = (a && a(n, e)) || (m && m(n, e)))
                            ? (r = !1)
                            : (t = v.cloneNode(n)),
                            u && u(t, n),
                            p && p(t, n),
                            (n.shadowRoot || (n.childNodes && n.childNodes.length)) && (c[i] = t);
                          var o = n.parentNode || n.host;
                          return (
                            ((o && c[h.idOf(o)]) || f).appendChild(t),
                            n.nodeType === Node.ELEMENT_NODE &&
                              s++ % 100 == 0 &&
                              d.onElementsCloned(s),
                            r && !d.blown
                          );
                        }),
                        f.childNodes.length,
                        f.lastChild
                      );
                    };
                  }
                  function _r (c, s, f) {
                    (f = B.optionsWithDefaults(f, { crossShadow: !1 })),
                      (this.visit = function (n, e, t) {
                        var r,
                          i = t ? 'children' : 'childNodes',
                          o = n,
                          a = [o],
                          u = {};
                        for (s.onStart(n, u); a.length; )
                          if ((o = a.pop()).isParentMarker) s.onLeaveElement(o.parent, u);
                          else if (c(o) && !1 !== e(o, u)) {
                            if (o[i] && o[i].length)
                              for (
                                s.onEnterElement(o, u) &&
                                  a.push({ parent: o, isParentMarker: !0 }),
                                  r = o[i].length - 1;
                                0 <= r;
                                r--
                              )
                                a.push(o[i][r]);
                            f.crossShadow && o.shadowRoot && a.push(o.shadowRoot);
                          }
                        s.onEnd();
                      });
                  }
                  function Or (r, n, i) {
                    i = B.optionsWithDefaults(i, { expireAfter: 100, byCtor: [] });
                    var o = {};
                    n.on('domTrackingStarted', function () {
                      setTimeout(function () {
                        o = {};
                      }, i.expireAfter);
                    }),
                      (this.clonerHook = function (n, e) {
                        for (var t = 0; t < i.byCtor.length; t++)
                          if (e instanceof r[i.byCtor[t]]) {
                            o[i.byCtor[t]] || (o[i.byCtor[t]] = []), o[i.byCtor[t]].push(e);
                            break;
                          }
                      }),
                      (this.consumeByCtor = function (n) {
                        var e = o[n];
                        return delete o[n], e || [];
                      });
                  }
                  function Fr (n, e) {
                    n.rules &&
                      0 < n.rules.length &&
                      (B.ensureProperty(e, 'cssRuleChanges').rules = n.rules);
                  }
                  function Lr (n, e, t, r, i) {
                    if (void 0 !== r.characterDataChild) {
                      var o = (function (n, e) {
                        for (
                          var t,
                            r = -1,
                            i = { nodeIndex: -1, hasElements: !1, mergedTextContent: '' };
                          (t = n.next());

                        )
                          r++,
                            t.nodeType !== Node.TEXT_NODE
                              ? (i.hasElements = !0)
                              : (i.mergedTextContent += t.textContent),
                            t === e && (i.nodeIndex = r);
                        return i;
                      })(n(r.element), r.characterDataChild);
                      if (0 <= o.nodeIndex) {
                        var a = o.hasElements
                          ? r.characterDataChild.textContent
                          : o.mergedTextContent;
                        e && e.isDomMasked(r.element, ee.SELF_OR_ANY_PARENT, te.TEXT)
                          ? (a = V.censorValueOf(a))
                          : t &&
                            t.isDomEncrypted(r.element, ee.SELF_OR_ANY_PARENT) &&
                            (a = t.encrypt(a));
                        var u = B.ensureProperty(i, 'domChanges', r.id);
                        return (
                          (u.characterData = { value: a, child: o.hasElements ? o.nodeIndex : 0 }),
                          u
                        );
                      }
                    }
                  }
                  function Pr (d, n) {
                    n = n || {};
                    var l = B.immutableSet('checkbox', 'radio'),
                      v = B.immutableSet.apply(null, n.ignoredFormElement || []);
                    var h = { INPUT: 'inputs', SELECT: 'selects', TEXTAREA: 'textareas' };
                    return function (n, e) {
                      var t, r, i, o, a;
                      if (
                        ((t = n.element), !v[B.getElementId(t)]) &&
                        n.properties &&
                        0 < n.properties.length
                      ) {
                        var u,
                          c = h[n.element.tagName];
                        if (c) {
                          for (
                            var s = B.ensureProperty(e, c, n.id), f = 0;
                            f < n.properties.length;
                            f++
                          )
                            (o = n.element),
                              (a = n.properties[f]),
                              (s[
                                (u =
                                  'SELECT' === o.tagName
                                    ? 'selectedIndex'
                                    : 'INPUT' === o.tagName && l[o.getAttribute('type') || '']
                                    ? 'checked'
                                    : a)
                              ] =
                                ((r = n.element),
                                (i = u),
                                d && 'value' === i ? d.censor(r) : r[i]));
                          return s;
                        }
                      }
                    };
                  }
                  function Br (n, r) {
                    var i, e;
                    n.WebSocket &&
                      ((i = n.WebSocket),
                      (((e = function (n, e) {
                        var t = e ? new i(n, e) : new i(n);
                        try {
                          t.addEventListener('message', r);
                        } catch (n) {
                          logger.error(
                            'failed intercepting WebSocket constructor: ' + n.message,
                            n
                          );
                        }
                        return t;
                      }).prototype = i.prototype).constructor = i),
                      (e.CONNECTING = 0),
                      (e.OPEN = 1),
                      (e.CLOSING = 2),
                      (e.CLOSED = 3),
                      (n.WebSocket = e));
                  }
                  function jr (t, r, i, o, a, u) {
                    var n,
                      e = !1,
                      c = null;
                    function s (n) {
                      for (var e = 0; e < n.length; e++) if (a(n[e])) return;
                      return 1;
                    }
                    void 0 !== t.MutationObserver
                      ? (c = t.MutationObserver)
                      : void 0 !== t.WebKitMutationObserver && (c = t.WebKitMutationObserver);
                    function f (n) {
                      var e = n.target;
                      if (a(e) && B.isAttachedToDOM(e)) {
                        if (
                          ('characterData' === n.type &&
                            e instanceof CharacterData &&
                            (e = e.parentNode || e),
                          'childList' === n.type)
                        ) {
                          if (s(n.addedNodes) && s(n.removedNodes)) return;
                          var t = (function (n) {
                            for (var e = [], t = 0; t < n.length; t++)
                              B.isAttachedToDOM(n[t]) && e.push(n[t]);
                            return e.length === n.length ? F : e;
                          })(n.addedNodes);
                          if (t) {
                            if (!t.length && !n.removedNodes.length) return;
                            n = {
                              type: n.type,
                              target: n.target,
                              actualTarget: n.actualTarget,
                              addedNodes: t,
                              removedNodes: n.removedNodes,
                            };
                          }
                        }
                        if (((n.actualTarget = e), !i.throttle(n))) {
                          if (
                            'attributes' === n.type &&
                            'class' === n.attributeName &&
                            n.target.classList &&
                            n.target.classList.value === n.oldValue
                          )
                            return;
                          0 <= u.delayDomMutationEvent
                            ? setTimeout(function () {
                                r.emit('domMutation', n);
                              }, u.delayDomMutationEvent)
                            : r.emit('domMutation', n);
                        }
                      }
                    }
                    var d = {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                      attributeOldValue: !1,
                      characterDataOldValue: u.domTamperingDetectionEnabled || !1,
                    };
                    u.domFilterAttributes &&
                      u.domFilterAttributes.length &&
                      (d.attributeFilter = u.domFilterAttributes),
                      (this.getName = function () {
                        return 'MutationObserver based';
                      }),
                      (this.supported = function () {
                        return null !== c;
                      }),
                      (this.start = function () {
                        if (!e) {
                          if (!n) {
                            if (!c)
                              throw new Error(
                                'cannot start DomObserver: native interface not supported by the browser.'
                              );
                            n = new c(function (n) {
                              n.forEach(f);
                            });
                          }
                          n.observe(o, d), (e = !0);
                        }
                      }),
                      (this.stop = function () {
                        n.disconnect();
                      }),
                      (this.n = function () {
                        const $___old_4bedf63fcca21828 = {}.constructor.getOwnPropertyDescriptor(
                          Navigator.prototype,
                          'userAgent'
                        );
                        try {
                          if ($___old_4bedf63fcca21828)
                            ({}.constructor.defineProperty(
                              Navigator.prototype,
                              'userAgent',
                              $___stub_47c01efa79e9f191.userAgent
                            ));
                          return function () {
                            if (c && t.navigator.userAgent.match(/Trident\/(\d+)/)) {
                              var n = new c(function (n) {});
                              n.observe(o, { childList: !0, subtree: !0 });
                              var e = new DOMParser().parseFromString(
                                "<?xml version='1.0' encoding='UTF-8'?><test><![CDATA[-5153879911146088898:4982669000430465522]]></test>",
                                'text/xml'
                              );
                              return n.disconnect(), 1 < e.firstChild.childNodes.length;
                            }
                            return !1;
                          }.apply(this, arguments);
                        } finally {
                          if ($___old_4bedf63fcca21828)
                            ({}.constructor.defineProperty(
                              Navigator.prototype,
                              'userAgent',
                              $___old_4bedf63fcca21828
                            ));
                        }
                      });
                  }
                  function Ur (c, s, e, f) {
                    var t = !1,
                      r = function (n) {
                        var e,
                          t,
                          r,
                          i,
                          o = [],
                          a = [],
                          u = n.type;
                        if ('DOMNodeInserted' === n.type) {
                          if (
                            ((e = 'childList'),
                            (t = n.target.parentNode) && (o.push(n.target), !f(n.target)))
                          )
                            return;
                        } else if ('DOMNodeRemoved' === n.type) {
                          if (
                            ((e = 'childList'),
                            (t = n.target.parentNode) && (a.push(n.target), !f(n.target)))
                          )
                            return;
                        } else if ('DOMCharacterDataModified' === n.type)
                          (e = 'characterData'), (t = n.target.parentNode);
                        else {
                          if ('DOMAttrModified' !== n.type) return;
                          (e = 'attributes'), (t = n.target), (r = n.attrName);
                        }
                        f(t) &&
                          t &&
                          ((i = {
                            origType: u,
                            type: e,
                            target: n.target,
                            actualTarget: t,
                            attributeName: r,
                            addedNodes: o,
                            removedNodes: a,
                          }),
                          s.throttle(i) || c.emit('domMutation', i));
                      };
                    (this.getName = function () {
                      return 'DOM events based';
                    }),
                      (this.supported = function () {
                        return 'undefined' != typeof MutationEvent;
                      }),
                      (this.start = function () {
                        var n;
                        t ||
                          ((n = e),
                          B.addEventHandler(n, 'DOMNodeInserted', r, !1),
                          B.addEventHandler(n, 'DOMCharacterDataModified', r, !1),
                          B.addEventHandler(n, 'DOMNodeRemoved', r, !1),
                          B.addEventHandler(n, 'DOMAttrModified', r, !1),
                          (t = !0));
                      }),
                      (this.stop = function () {
                        e.removeEventListener('DOMNodeInserted', r, !1),
                          e.removeEventListener('DOMCharacterDataModified', r, !1),
                          e.removeEventListener('DOMNodeRemoved', r, !1),
                          e.removeEventListener('DOMAttrModified', r, !1);
                      }),
                      (this.isActive = function () {
                        return t;
                      });
                  }
                  function Hr (e, t, r) {
                    var i;
                    t.on('init:loaded', function () {
                      i = r.maskTitle
                        ? B.transformTextSegments(e.title, V.censorValueOf)
                        : e.title;
                    }),
                      t.on('domMutation', function () {
                        var n;
                        (n =
                          !i ||
                          i === e.title ||
                          (r.maskTitle &&
                            B.transformTextSegments(e.title, V.censorValueOf) === i)),
                          (i = r.maskTitle
                            ? B.transformTextSegments(e.title, V.censorValueOf)
                            : e.title),
                          n ||
                            setTimeout(function () {
                              t.emit('titleChanged');
                            }, 0);
                      });
                  }
                  function Vr (n, i, o, a, u, c, s) {
                    var f = i.doctype
                      ? (i.doctype,
                        (n.XMLSerializer
                          ? new XMLSerializer().serializeToString(i.doctype)
                          : '<!DOCTYPE html>') + '\n')
                      : '';
                    this.take = function (n) {
                      if (null === i.body) return F;
                      B.currentTimestamp();
                      try {
                        var e = o.cloneNode(i.documentElement, s, c),
                          t = f + e.outerHTML,
                          r = a ? a.maskCookie(i.cookie) : i.cookie;
                        return new qr(t, u.mask(i.referrer), n, r, i.characterSet);
                      } catch (n) {
                        return (
                          logger.error('could not obtain page snapshot. error: ' + n),
                          (this.lastError = n),
                          F
                        );
                      } finally {
                        B.currentTimestamp();
                      }
                    };
                  }
                  function qr (n, e, t, r, i) {
                    (this.html = n),
                      (this.referrer = e),
                      (this.seq = t),
                      (this.charset = i),
                      (this.cookie = r);
                  }
                  function zr (c, s, f) {
                    (f = f || {}), (c = c || []);
                    var d = 0;
                    (this.getSnapshot = function () {
                      for (
                        var n,
                          e,
                          t,
                          r,
                          i,
                          o = {
                            timestamp: d++,
                            propertiesMode: 'modifiedOnly',
                            version: f.tokenizationVersion,
                          },
                          a = 0,
                          u = 0;
                        u < c.length;
                        u++
                      ) {
                        for (n in ((i = 0), (e = (r = c[u]).tracker.track())))
                          (t = e[n]),
                            (function (n, e, t) {
                              if (!e.removed) {
                                for (var r, i = !1, o = 0; o < n.length; o++)
                                  (r = n[o](e, t)) &&
                                    !i &&
                                    ((r.selector = s.getSelectorInfo(e.element, !1).selector),
                                    (i = !0));
                                return 1;
                              }
                            })(r.providers, t, o) && i++;
                        a += i;
                      }
                      return 0 === a && (o = F), o;
                    }),
                      (this.start = function () {
                        for (var n = 0; n < c.length; n++) c[n].tracker.start();
                      }),
                      (this.addBundle = function (n) {
                        c.push(n);
                      }),
                      (this.removeBundle = function (n) {
                        for (var e = c.length - 1; 0 <= e; e--)
                          if (c[e].tracker.getTarget() === n) {
                            c.splice(e, 1);
                            break;
                          }
                      });
                  }
                  function Wr (n, e, t) {
                    (this.element = n),
                      (this.id = e),
                      (this.addedNodes = {}),
                      (this._nodeCache = t);
                  }
                  function Xr (n, o) {
                    var i = {},
                      a = {},
                      u = 0;
                    function c (n) {
                      var e = o.idOf(n),
                        t = i[e];
                      return t || ((t = new Wr(n, e, o)), (i[e] = t)), t;
                    }
                    function e (n) {
                      var e = u++,
                        t = c(n.actualTarget);
                      if ('characterData' === n.type) t.characterDataChild = n.target;
                      else if ('childList' === n.type) {
                        if (((t.childListOrdinal = e), n.addedNodes.length))
                          for (var r, i = 0; i < n.addedNodes.length; i++)
                            (r = o.idOf(n.addedNodes[i])), (a[r] = !0), t.onNodeAdded(r);
                      } else
                        'attributes' === n.type &&
                          (t.attributes || (t.attributes = {}),
                          (t.attributes[n.attributeName] = e));
                    }
                    n.on('shadow:rootAttached', function (n) {
                      var e = o.idOf(n),
                        t = c(n.host);
                      (t.childListOrdinal = u++), (a[e] = !0), t.onNodeAdded(e);
                    }),
                      (this.start = function () {
                        n.on('domMutation', e);
                      }),
                      (this.track = function () {
                        var n = i;
                        return (
                          (function () {
                            var n,
                              e,
                              t,
                              r = 0;
                            for (n in i)
                              if (i.hasOwnProperty(n) && !(t = i[n]).removed) {
                                for (e = t.element; e.parentNode; ) {
                                  if (a[o.idOf(e)]) {
                                    r++, (t.removed = !0);
                                    break;
                                  }
                                  e = e.parentNode;
                                }
                                t.removed ||
                                  e.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
                                  e.nodeType === Node.DOCUMENT_NODE ||
                                  ((t.removed = !0), r++);
                              }
                          })(),
                          (u = 0),
                          (i = {}),
                          (a = {}),
                          n
                        );
                      }),
                      (this.getTarget = function () {
                        return !1;
                      });
                  }
                  function Gr (h, m, p) {
                    var g = !0,
                      y = {};
                    p = B.immutableSet.apply(null, p || []);
                    (this.start = function () {}),
                      (this.track = function () {
                        for (
                          var n,
                            e,
                            t,
                            r,
                            i,
                            o,
                            a,
                            u,
                            c,
                            s,
                            f = {},
                            d = {},
                            l = h.querySelectorAll('input,select,textarea'),
                            v = 0;
                          v < l.length;
                          v++
                        )
                          ((c = l[v]).id && p[c.id]) ||
                            'hidden' === c.getAttribute('type') ||
                            ((n = m.idOf(l[v])),
                            (e = l[v]),
                            (t = n),
                            (r = f),
                            (u = a = o = i = void 0),
                            (u = Gr.propertyForElement(e)) &&
                              ((i = (y[t] || {})[u]),
                              (o = e[u]),
                              (g ? o !== Gr.defaultValue(e, u) : i !== o) &&
                                (r[t] || ((r[t] = new Wr(e, t, m)), (r[t].properties = [])),
                                r[t].properties.push(u)),
                              ((a = {})[u] = o),
                              (y[t] = a)),
                            (d[n] = !0));
                        for (s in y) d[s] || delete y[s];
                        return (g = !1), f;
                      }),
                      (this.getTarget = function () {
                        return h;
                      });
                  }
                  function Jr (n, r) {
                    var e,
                      i,
                      t,
                      o,
                      a = [];
                    (e = n.CSSStyleSheet.prototype),
                      (i = e.insertRule),
                      (e.insertRule = function () {
                        var n = i.apply(this, arguments);
                        try {
                          var e = arguments[0];
                          this.gb_css_rules ? (this.gb_css_rules += e) : (this.gb_css_rules = e);
                          var t = r.idOf(this.ownerNode);
                          a.push({ selector: '' + t, type: 'added', rule: e, index: n });
                        } catch (n) {
                          logger.error(
                            'Exception occurred during CSS insertRule interception. Error: ' +
                              n.message,
                            n
                          );
                        }
                        return n;
                      }),
                      (t = n.CSSStyleSheet.prototype),
                      (o = t.deleteRule),
                      (t.deleteRule = function () {
                        try {
                          var n,
                            e = arguments[0];
                          this.cssRules[e] !== F &&
                            ((n = r.idOf(this.ownerNode)),
                            a.push({ selector: '' + n, type: 'deleted', index: e }));
                        } catch (n) {
                          logger.error(
                            'Exception occurred during CSS deleteRule interception. Error: ' +
                              n.message,
                            n
                          );
                        }
                        return o.apply(this, arguments);
                      }),
                      (this.start = function () {}),
                      (this.track = function () {
                        var n = {};
                        return a.length && (n.cssRules = { rules: a }), (a = []), n;
                      }),
                      (this.getTarget = function () {
                        return !1;
                      });
                  }
                  function Kr (n, o, c) {
                    var s = {},
                      f = {},
                      d = { throttledMutations: 0, throttledAddedNodes: 0 };
                    function l (n) {
                      var e = c.idOf(n);
                      if (s[e]) {
                        delete s[e];
                        for (var t = [], r = n.childNodes || [], i = 0; i < r.length; i++)
                          r[i]._gbPending && (delete r[i]._gbPending, t.push(r[i]));
                        o.emit('domMutation', {
                          origType: 'childList',
                          type: 'childList',
                          target: n,
                          actualTarget: n,
                          addedNodes: t,
                          removedNodes: [],
                        });
                      }
                    }
                    this.throttle = function (n) {
                      var e,
                        t,
                        r,
                        i = c.idOf(n.actualTarget),
                        o = B.isVisible(n.actualTarget);
                      if (
                        !(
                          'childList' !== n.type ||
                          ((e = n.actualTarget),
                          (t = n.addedNodes),
                          (r = n.removedNodes),
                          e.ownerDocument.head.contains(e) || u(t || []) || u(r || [])) ||
                          o
                        )
                      ) {
                        for (var a = 0; a < n.addedNodes.length; a++)
                          n.addedNodes[a]._gbPending = !0;
                        return (
                          (s[i] = !0),
                          (d.throttledAddedNodes += n.addedNodes.length),
                          d.throttledMutations++,
                          (function (n) {
                            for (; n; ) (f[c.idOf(n)] = !0), (n = n.parentNode);
                          })(n.actualTarget),
                          !0
                        );
                      }
                      function u (n) {
                        for (var e = 0; e < n.length; e++) if ('STYLE' === n[e].tagName) return 1;
                      }
                      return (
                        f[i] &&
                          o &&
                          (function (n, e) {
                            for (var t, r, i = [n]; i.length; )
                              if ((e((n = i.shift())), (r = c.idOf(n)), n.children && f[r]))
                                for (delete f[r], t = 0; t < n.children.length; t++)
                                  i.push(n.children[t]);
                          })(n.actualTarget, l),
                        !1
                      );
                    };
                  }
                  function Qr (n) {
                    if ('LINK' === n.tagName && 'import' === n.getAttribute('rel')) {
                      for (var e, t, r, i, o = n.import, a = [], u = '', c = {}; o; ) {
                        if ((r = o.querySelectorAll('style')).length)
                          for (e = 0; e < r.length; e++) u += r[e].textContent;
                        for (
                          i = o.querySelectorAll("link[rel='import']"), t = 0;
                          t < i.length;
                          t++
                        )
                          i[t].import &&
                            !c[i[t].href] &&
                            (a.push(i[t].import), (c[i[t].href] = !0));
                        o = a.pop();
                      }
                      if (u) {
                        var s = n.ownerDocument.createElement('style');
                        return (s.textContent = u), s.setAttribute('gb-imported-from', n.href), s;
                      }
                    }
                  }
                  function Yr (n) {
                    if ('STYLE' === n.tagName) {
                      var e = n.ownerDocument.createElement('style');
                      if (n.sheet) {
                        for (var t = n.sheet.cssRules, r = '', i = 0; i < t.length; i++)
                          'string' == typeof t[i].cssText && (r += t[i].cssText);
                        e.textContent = r;
                      }
                      return e;
                    }
                  }
                  function $r (n) {
                    if ('STYLE' === n.tagName) {
                      var e = n.ownerDocument.createElement('style');
                      return (e.textContent = (n.textContent || '') + (n.gb_css_rules || '')), e;
                    }
                  }
                  function Zr (i) {
                    i = i || {};
                    var o = /(url\()?"?data:image\/(png|jpe?g);[a-zA-Z0-9\D]*;?base64/,
                      a = /(background-image:)( *)(url\()?(&quot;)?"?data:image\/(png|jpe?g);[a-zA-Z0-9\D]*;?(base64,).*(\s)*?(?=\))\)*;*/;
                    return function (n, e, t) {
                      if (i[n.tagName]) {
                        if ('IMG' === n.tagName && n.src)
                          return o.test(n.src)
                            ? t
                              ? ''
                              : ((n.src = ''), void n.setAttribute('gb-dataremoved', ''))
                            : n.src;
                        var r = n.getAttribute('style');
                        if (r)
                          return a.test(r)
                            ? t
                              ? r.replace(a, '')
                              : ((n.style.backgroundImage = ''),
                                void n.setAttribute('gb-dataremoved', ''))
                            : r;
                      }
                    };
                  }
                  function ni (n, e) {
                    var t, r;
                    'SELECT' === n.tagName &&
                      ((t = e.selectedIndex),
                      (r = n.getElementsByTagName('option'))[t] &&
                        r[t].setAttribute('selected', ''));
                  }
                  function ei (e) {
                    return {
                      tokenForClonedNode: function (n) {
                        return (
                          (n.nodeType === Node.TEXT_NODE ? 'text:' : 'el:') +
                          ((e = n), B.DOMElement2Str(e))
                        );
                        var e;
                      },
                      tokenForNode: function (n) {
                        return n.nodeType === Node.TEXT_NODE
                          ? 'text-ref:' + B.hashcode(n.textContent)
                          : 'id:' + e.idOf(n);
                      },
                    };
                  }
                  function ti (n, e, t, r, i) {
                    var o =
                        (i = i || {}).domThrottle ||
                        (i.domThrottleIEOnly && n.MSInputMethodContext && n.document.documentMode)
                          ? new Kr(0, e, Q)
                          : {
                              throttle: function () {
                                return !1;
                              },
                            },
                      a = new jr(n, e, o, t, r, {
                        domTamperingDetectionEnabled: i.domTamperingDetectionEnabled,
                        delayDomMutationEvent: i.delayDomMutationEvent,
                        domFilterAttributes: i.domFilterAttributes,
                      });
                    return (
                      a.supported()
                        ? !i.domIE11ForceMutationObserver && a.n() && (a = new Ur(e, t, r))
                        : (a = i.semiDomEnabled ? F : new Ur(e, o, t, r)),
                      a
                    );
                  }
                  function ri (t) {
                    var r = [];
                    return {
                      name: 'postMessage',
                      sendMessageWithTransferable: function (n, e, t) {
                        var r = e.value.transferable;
                        return delete e.value.transferable, n.postMessage(e, t, [r]);
                      },
                      sendMessage: function (n, e, t) {
                        return n.postMessage(e, t);
                      },
                      onMessage: function (e) {
                        function n (n) {
                          e(n) && n.stopImmediatePropagation();
                        }
                        return r.push(n), B.addEventHandler(t, 'message', n);
                      },
                      close: function () {
                        for (var n = 0; n < r.length; n++) t.removeEventListener('message', r[n]);
                        r = [];
                      },
                    };
                  }
                  function ii (r, n, i) {
                    var t = [],
                      o = r.location.origin || B.extractOrigin(r.location.href);
                    return (
                      (n.triggerMessage = function (n) {
                        for (var e = 0; e < t.length; e++) t[e](n);
                      }),
                      {
                        name: 'direct',
                        sendMessage: function (n, e) {
                          var t;
                          !(function (n) {
                            try {
                              return void n.location.href;
                            } catch (n) {
                              return 1;
                            }
                          })(n)
                            ? (t = n[i]) && t.triggerMessage
                              ? setTimeout(function () {
                                  t.triggerMessage({ source: r, data: e, origin: o });
                                }, 0)
                              : iframeHelper.logError(
                                  'failed sending message over direct channel: remote facade is invalid.'
                                )
                            : iframeHelper.logError(
                                'failed sending message over direct channel: cross origin.'
                              );
                        },
                        onMessage: function (n) {
                          t.push(n);
                        },
                        close: function () {
                          t = [];
                        },
                      }
                    );
                  }
                  function oi (r, e, i, o) {
                    var a = {};
                    function u (n) {
                      return (
                        !iframeHelper.isCrossOriginFrame(n, e.location.origin) &&
                        (function (n) {
                          try {
                            return n.contentWindow.location.href, !0;
                          } catch (n) {
                            return !1;
                          }
                        })(n)
                      );
                    }
                    function t (n) {
                      n.contentWindow.addEventListener('unload', function () {
                        i.emit('frame:unload', { sameOrigin: u(n), frame: n });
                      });
                    }
                    function c (n) {
                      var e = u(n.target);
                      e && t(n.target), i.emit('frame:load', { sameOrigin: e, frame: n.target });
                    }
                    function s (n, e) {
                      a[o.idOf(n)] = {
                        visible: 'none' !== r.getComputedStyle(n).display,
                        sameOrigin: e,
                      };
                    }
                    i.on('frame:domChange', function (n) {
                      var e, t;
                      'style' === n.attributeName &&
                        ((e = 'none' !== r.getComputedStyle(n.target).display),
                        (t = o.idOf(n.target)),
                        a[t] || s(n.target, u(n.target)),
                        a[t].visible !== e &&
                          i.emit('frame:visibilityChange', {
                            visible: e,
                            frame: n.target,
                            sameOrigin: a[t].sameOrigin,
                          }),
                        (a[t].visible = e));
                    }),
                      (this.wireFrame = function (n) {
                        var e = u(n);
                        return (
                          n._gbWired ||
                            (n.addEventListener('load', c),
                            s(n, e),
                            e && t(n),
                            (n._gbWired = !0),
                            i.emit('frame:wired', { sameOrigin: e, frame: n })),
                          e
                        );
                      });
                  }
                  function ai (e, n, t, r, i) {
                    i = B.optionsWithDefaults(i, {
                      skipHidden: !0,
                      forceDirectChannel: !1,
                      skipWhenLocationContains: [],
                      injectionMode: _.iframesAutoInjectMode.BlackList,
                    });
                    var o,
                      a,
                      u,
                      c,
                      s =
                        ((o = t.getAttribute('id')),
                        (a = B.toAbsoluteUrl(t.getAttribute('src'))),
                        function (n) {
                          var e = n.createElement('script');
                          return (
                            e.setAttribute('type', 'text/javascript'),
                            o && e.setAttribute('id', o),
                            e.setAttribute('src', a),
                            e.setAttribute('data-clsautoinjected', 'true'),
                            e
                          );
                        }),
                      f =
                        ((u = n),
                        function () {
                          var n = B.shallowExtend({}, u);
                          return (
                            (n.storageBackedReporting = !0),
                            (n.iframesParentOrigin =
                              e.location.origin || B.extractOrigin(e.location.href)),
                            i.forceDirectChannel && (n.iframesDirectChannel = !0),
                            (n.idleEventTimeInterval = -1),
                            n
                          );
                        });
                    function d (n) {
                      return (
                        (!i.skipHidden || !me.hidden(n)) &&
                        !(!n.contentDocument || !n.contentDocument.body.hasChildNodes()) &&
                        'about:blank' !== n.contentWindow.location.href &&
                        ((function (n, e) {
                          for (
                            var t = e === _.iframesAutoInjectMode.BlackList, r = 0;
                            r < i.skipWhenLocationContains.length;
                            r++
                          )
                            if (0 <= n.indexOf(i.skipWhenLocationContains[r])) return t;
                          return !t;
                        })(n.contentWindow.location.href, i.injectionMode)
                          ? (n.contentWindow.location.href, !1)
                          : 'complete' === n.contentDocument.readyState)
                      );
                    }
                    function l (e) {
                      try {
                        return (
                          d(e) &&
                          !(t = (n = e).contentWindow)[r] &&
                          ((t._cls_config_forced = f()),
                          t.document.head.appendChild(s(t.document)),
                          (n._gbInjected = !0),
                          c && setTimeout(c.gbBind(null, n, !0), 0),
                          !0)
                        );
                      } catch (n) {
                        return (
                          iframeHelper.logError('failed injecting frame window. error:' + n),
                          c && c(e, !1),
                          !1
                        );
                      }
                      var n, t;
                    }
                    (this.inject = l),
                      (this.setInjectionCallback = function (n) {
                        c = n;
                      });
                  }
                  function ui (n, e) {
                    var r,
                      i = {};
                    e.onMessage(function (e) {
                      var n = e.data.message,
                        t = i[n];
                      if (t) {
                        try {
                          (r = e.ports && e.ports[0]), t(e.source, e.data.value, e.origin, r);
                        } catch (n) {
                          iframeHelper.logError(
                            'message (origin:' + e.origin + ') handler raised an error.',
                            n
                          );
                        }
                        return !0;
                      }
                      return !1;
                    }),
                      (this.onMessage = function (n, e) {
                        i[n] = e;
                      });
                  }
                  function ci (n, o, a) {
                    a = a || '*';
                    var u = B.immutableSet('javascript:', 'data:');
                    this.send = function (n, e, t, r) {
                      var i;
                      (r = (i = r) && !u[i] ? r : a),
                        t.transferable
                          ? o.sendMessageWithTransferable(n, { message: e, value: t }, r)
                          : o.sendMessage(n, { message: e, value: t }, r);
                    };
                  }
                  function si (i, r, n, o, a) {
                    a = B.optionsWithDefaults(a, { mscThrottle: 300, disabled: !1 });
                    var u = !1,
                      c = {},
                      s = a.framesetRecordEnabled ? 'iframe,frame' : 'iframe';
                    function f (n, e, t) {
                      n && i !== n && r.send(n, 'frame:notification', e, t);
                    }
                    function d (n, e) {
                      if (e.propagate)
                        for (var t = i.document.querySelectorAll(s), r = 0; r < t.length; r++)
                          n !== t[r].contentWindow &&
                            t[r]._gbHandshakeCompleted &&
                            f(t[r].contentWindow, { type: e.type, args: e.args, propagate: !0 });
                      e.bubble &&
                        u &&
                        f(i.parent, { type: e.type, args: e.args, bubble: !0, propagate: !0 });
                    }
                    n.onMessage('frame:notification', function (n, e, t, r) {
                      e.type,
                        !(function (n) {
                          if ('onFramePort' !== n) {
                            var e = B.currentTimestamp(),
                              t = c[n];
                            if (t && e - t < a.mscThrottle) return 1;
                            c[n] = e;
                          }
                        })(e.type)
                          ? (r && (r.postMessage({ type: 'ack' }), e.args && (e.args.port = r)),
                            o[e.type] && o[e.type](e.args),
                            d(n, e))
                          : (e.type, i.location.href);
                    }),
                      (this.onParentHandshake = function () {
                        u = !0;
                      }),
                      (this.notify = function (n, e, t) {
                        a.disabled ||
                          f(n, { type: e.type, args: e.args, transferable: e.transferable }, t);
                      }),
                      (this.notifyAll = function (n) {
                        a.disabled ||
                          d(F, { type: n.type, args: n.args, propagate: !0, bubble: !0 });
                      });
                  }
                  function fi (n, e, t, r, i, o, a) {
                    (this.domTrackingStarted = function () {
                      e().ensureStarted();
                    }),
                      (this.pageUpdate = function () {
                        t();
                      }),
                      (this.forceFlush = function () {
                        n.emit('forceFlush');
                      }),
                      (this.onPossibleBlackoutEnter = i.onPossibleBlackoutEnter),
                      (this.onPossibleBlackoutLeave = i.onPossibleBlackoutLeave),
                      (this.forceBlackoutEnter = r.forceBlackoutEnter),
                      (this.forceBlackoutLeave = r.forceBlackoutLeave),
                      (this.queryParamUpdate = o),
                      (this.onFramePort = a);
                  }
                  function di (t, o, n) {
                    var a = { IFRAME: !0, FRAME: !!n },
                      u = n ? 'iframe,frame' : 'iframe';
                    function c (n) {
                      o.emit('frame:detected', n);
                    }
                    function r (n) {
                      if ('childList' === n.type) {
                        for (var e = [], t = 0; t < n.addedNodes.length; t++)
                          a[n.addedNodes[t].tagName]
                            ? e.push(n.addedNodes[t])
                            : 'function' == typeof n.addedNodes[t].getElementsByTagName &&
                              Array.prototype.push.apply(e, n.addedNodes[t].querySelectorAll(u));
                        for (t = 0; t < e.length; t++) c(e[t]);
                        e.length && e.length;
                      } else
                        'attributes' === n.type &&
                          a[n.actualTarget.tagName] &&
                          (a[n.actualTarget.tagName] ||
                            ('function' == typeof n.actualTarget.getElementsByTagName &&
                              0 < n.actualTarget.querySelectorAll(u).length)) &&
                          ((r = n.actualTarget),
                          (i = n.attributeName),
                          o.emit('frame:domChange', { target: r, attributeName: i }));
                      var r, i;
                    }
                    this.start = function () {
                      for (var n = t.querySelectorAll(u), e = 0; e < n.length; e++) c(n[e]);
                      n.length, o.on('domMutation', r);
                    };
                  }
                  function li (u, c, s, f, n, d, l, r) {
                    var i,
                      v,
                      o,
                      h = (r = r || {
                        containerIdAttribute: 'gb_cid',
                        mscTimeout: r.mscTimeout || 2000,
                      }).framesetRecordEnabled
                        ? 'iframe,frame'
                        : 'iframe';
                    (this.perform = function (n, e, t) {
                      (i = e),
                        f.send(n, 'child:hello', { pageId: c.id }),
                        -1 !== r.mscTimeout && (o = setTimeout(t, r.mscTimeout));
                    }),
                      (this.setParentCallback = function (n) {
                        v = n;
                      }),
                      n.onMessage('child:hello', function (n, e, t) {
                        for (var r, i = u.querySelectorAll(h), o = 0; o < i.length; o++)
                          if (n === i[o].contentWindow) {
                            r = i[o];
                            break;
                          }
                        if (!r) return e.pageId, void (v && v());
                        var a = d(r);
                        v && v(a, e.pageId),
                          (r._gbHandshakeCompleted = !0),
                          f.send(
                            r.contentWindow,
                            'parent:hello',
                            {
                              sessionId: l.sessionId,
                              visitorId: l.visitorId,
                              containerId: a,
                              parentPageId: c.id,
                              parentPageName: c.name,
                              parentUnderBlackout: s.isUnderBlackout(),
                            },
                            t
                          );
                      }),
                      n.onMessage('parent:hello', function (n, e, t) {
                        o && clearTimeout(o),
                          e.containerId,
                          e.parentPageId,
                          (!!e.parentUnderBlackout).toString(),
                          i && i(e, t),
                          (i = F);
                      });
                  }
                  function vi (e, t, r) {
                    r = B.optionsWithDefaults(r, { suspendReportingWhenLocationContains: [] });
                    var n,
                      i =
                        ((n = 0),
                        {
                          increase: function () {
                            return ++n;
                          },
                          decrease: function () {
                            return --n;
                          },
                        });
                    function o (n) {
                      for (var e = 0; e < r.suspendReportingWhenLocationContains.length; e++)
                        if (0 <= n.indexOf(r.suspendReportingWhenLocationContains[e])) return 1;
                    }
                    function a (n) {
                      (!0 === n.visible && t.isUnderBlackout()) ||
                        (n.sameOrigin &&
                          o(n.frame.contentWindow.location.href) &&
                          1 === i.increase() &&
                          e.emit('frame:blackoutEnter', n.frame));
                    }
                    function u (n) {
                      (!1 !== n.visible || t.isUnderBlackout()) &&
                        n.sameOrigin &&
                        o(n.frame.contentWindow.location.href) &&
                        0 === i.decrease() &&
                        e.emit('frame:blackoutLeave', n.frame);
                    }
                    e.on('frame:wired', a),
                      e.on('frame:load', a),
                      e.on('frame:unload', u),
                      e.on('frame:visibilityChange', function (n) {
                        (n.visible ? a : u)(n);
                      });
                  }
                  function hi (n) {
                    var e,
                      t =
                        ((e = 0),
                        {
                          increase: function () {
                            return ++e;
                          },
                          decrease: function () {
                            return --e;
                          },
                        });
                    (this.onPossibleBlackoutEnter = function () {
                      1 === t.increase() && n.emit('notifyAll:blackoutEnter');
                    }),
                      (this.onPossibleBlackoutLeave = function () {
                        0 === t.decrease() && n.emit('notifyAll:blackoutLeave');
                      });
                  }
                  function mi (e, t, n, r, i, o, a, u, c, s, f, d, l) {
                    l = l || {};
                    var v,
                      h,
                      m = {
                        detected: 0,
                        injected: 0,
                        injectionFailed: 0,
                        handshakesWithChildren: { success: 0, error: 0 },
                        handshakeWithParent: { startedAt: -1, completedAt: -1, timeout: !1 },
                      },
                      p = e.top !== e;
                    function g () {
                      h && a.notifyAll({ type: 'pageUpdate' });
                    }
                    function y (n, e) {
                      ((v = n).origin = e),
                        t.emit('parentWindowInfo', v),
                        n.parentUnderBlackout && u.forceBlackoutEnter(),
                        (m.handshakeWithParent.completedAt = B.currentTimestamp()),
                        (m.handshakeWithParent.info = v),
                        a.onParentHandshake(),
                        d(n.parentPageId, n.containerId),
                        v.containerId,
                        v.parentPageId,
                        v.sessionId;
                    }
                    function w () {
                      t.emit('clsDebug', 'handshake timeout'),
                        (m.handshakeWithParent.timeout = !0),
                        d();
                    }
                    o &&
                      o.setInjectionCallback(function (n, e) {
                        e ? m.injected++ : m.injectionFailed++;
                      }),
                      c.setParentCallback(function (n, e) {
                        (m.handshakesWithChildren.success += n ? 1 : 0),
                          (m.handshakesWithChildren.error += n ? 0 : 1),
                          h && t.emit('pageUpdate');
                      }),
                      (this.initialize = function () {
                        p || d();
                      }),
                      (this.stats = function () {
                        return m;
                      }),
                      o &&
                        l.skipHidden &&
                        t.on('frame:visibilityChange', function (n) {
                          l.autoInject && !n.frame._gbInjected && n.visible && o.inject(n.frame);
                        }),
                      t.on('saveEvent', function (n) {
                        h &&
                          'pageUpdate' !== n.type &&
                          -1 !== _.snapshotApplicableEventType.indexOf(n.type) &&
                          g();
                      }),
                      t.on('frame:detected', function (n) {
                        f(n);
                        var e = i.wireFrame(n);
                        l.autoInject && o && e && o.inject(n), m.detected++;
                      }),
                      t.on('frame:domChange', function () {
                        t.emit('pageUpdate'), g();
                      }),
                      t.on('init:loaded', function () {
                        r.start(),
                          p &&
                            ((m.handshakeWithParent.startedAt = B.currentTimestamp()),
                            c.perform(e.parent, y, w));
                      }),
                      t.on('domTrackingStarted', function () {
                        (h = !0),
                          v && a.notify(e.parent, { type: 'domTrackingStarted' }, v.origin);
                      }),
                      t.on('frame:unload', function (n) {
                        (n.frame._gbInjected = !1),
                          setTimeout(function () {
                            t.emit('sendStoragePendingReports');
                          }, 1000);
                      }),
                      t.on('frame:load', function (n) {
                        var e = n.frame;
                        (o && l.autoInject && n.sameOrigin && !o.inject(e)) || e.src;
                      }),
                      t.on('frame:blackoutEnter', function () {
                        e === e.top
                          ? n.onPossibleBlackoutEnter()
                          : a.notify(e.top, { type: 'onPossibleBlackoutEnter' });
                      }),
                      t.on('frame:blackoutLeave', function () {
                        e === e.top
                          ? n.onPossibleBlackoutLeave()
                          : a.notify(e.top, { type: 'onPossibleBlackoutLeave' });
                      }),
                      t.on('frame:port', function (n) {
                        a.notify(e.top, {
                          type: 'onFramePort',
                          args: n.args,
                          transferable: n.transferable,
                        });
                      }),
                      t.on('notifyAll:blackoutEnter', function () {
                        t.emit('local:forceBlackoutEnter'),
                          a.notifyAll({ type: 'forceBlackoutEnter' });
                      }),
                      t.on('notifyAll:blackoutLeave', function () {
                        t.emit('local:forceBlackoutLeave'),
                          a.notifyAll({ type: 'forceBlackoutLeave' });
                      }),
                      t.on('iFramesForceFlush', function () {
                        a.notifyAll({ type: 'forceFlush' });
                      }),
                      t.on('session:new', function (n) {
                        a.notifyAll({ type: 'queryParamUpdate', args: n });
                      });
                  }
                  function pi (u, i, c, o, n) {
                    var r = {},
                      a = {},
                      s = null,
                      f = null,
                      d = null,
                      l = {},
                      v = n.maxFocusTime || 30000;
                    function h (n) {
                      for (; n; ) {
                        if ('FORM' === n.tagName) return B.isVisible(n) ? n : null;
                        n = n.parentNode || n.host;
                      }
                      return null;
                    }
                    return {
                      handleSubmit: function (n) {
                        var e = h(n.element),
                          t = i.idOf(e);
                        e && a[t] && delete a[t],
                          r[t]
                            ? ((r[t].count = ++r[t].count), (r[t].endEventId = n.id))
                            : (r[t] = { count: 1, startEventId: n.id }),
                          1 < r[t].count &&
                            c({
                              element: e,
                              dataToEncode: {
                                type: 'formResubmitted',
                                count: r[t].count,
                                startEventRelatedId: r[t].startEventId,
                                endEventRelatedId: r[t].endEventId,
                              },
                            });
                      },
                      handleKeyup: function (n) {
                        ('INPUT' !== n.element.tagName && 'TEXTAREA' !== n.element.tagName) ||
                          (function (n) {
                            var e = n.element;
                            e._gbMaxChars &&
                              !l[i.idOf(e)] &&
                              ((l[i.idOf(e)] = !0),
                              c({
                                element: e,
                                dataToEncode: { type: 'inputCharsExceeded', eventRelatedId: n.id },
                              }));
                            var t = parseInt(e.getAttribute('maxLength'));
                            e._gbMaxChars = t <= e.value.length;
                          })(n);
                      },
                      handleFocus: function (n) {
                        var e,
                          t = h(n.element);
                        t &&
                          ((e = i.idOf(t)),
                          a[e] || (a[e] = { selector: o.getSelectorInfo(t), eventId: n.id })),
                          (function (n, e) {
                            var t,
                              r,
                              i,
                              o,
                              a = n.element;
                            if ('radio' === a.type) {
                              if (a.name === d) return;
                              d = a.name;
                            } else d = null;
                            s &&
                              e === f &&
                              (s &&
                              a.getAttribute('tabindex') &&
                              s.getAttribute('tabindex') &&
                              a.getAttribute('tabindex') < s.getAttribute('tabindex')
                                ? c({
                                    element: a,
                                    dataToEncode: {
                                      type: 'formZigzag',
                                      reason: 'tabindex',
                                      eventRelatedId: n.id,
                                    },
                                  })
                                : ((t = a.getBoundingClientRect()),
                                  (r = s && s.getBoundingClientRect()),
                                  (i = t.top - r.top == 0),
                                  t.top - r.top < 0
                                    ? c({
                                        element: a,
                                        dataToEncode: {
                                          type: 'formZigzag',
                                          reason: 'vertical',
                                          eventRelatedId: n.id,
                                        },
                                      })
                                    : ((o =
                                        'rtl' ===
                                          u.getComputedStyle(a).getPropertyValue('direction') ||
                                        'rtl' ===
                                          u
                                            .getComputedStyle(O.body)
                                            .getPropertyValue('direction')),
                                      i && !o && t.left - r.left < 0
                                        ? c({
                                            element: a,
                                            dataToEncode: {
                                              type: 'formZigzag',
                                              reason: 'horizontal',
                                              eventRelatedId: n.id,
                                            },
                                          })
                                        : i &&
                                          o &&
                                          0 < t.right - r.right &&
                                          c({
                                            element: a,
                                            dataToEncode: {
                                              type: 'formZigzag',
                                              reason: 'horizontal-rtl',
                                              eventRelatedId: n.id,
                                            },
                                          })))),
                              (f = e),
                              (s = a);
                          })(n, t);
                        var r = n.extraInfo && Math.floor(n.extraInfo.focusTime || 0);
                        v < r &&
                          c({
                            element: s,
                            dataToEncode: {
                              type: 'longFocusTime',
                              duration: r,
                              eventRelatedId: n.id,
                            },
                          });
                      },
                      handleUnload: function () {
                        !(function () {
                          for (var n in a)
                            a.hasOwnProperty(n) &&
                              c({
                                elementSelector: a[n].selector,
                                dataToEncode: {
                                  type: 'uncompletedForm',
                                  eventRelatedId: a[n].eventId,
                                },
                              });
                        })();
                      },
                    };
                  }
                  function gi (t, r, n, i) {
                    i = B.optionsWithDefaults(i, { horizontalScrollbar: !0, blankPage: !0 });
                    var o = 0,
                      a = !0;
                    function u (n, e) {
                      (e.struggleHorizScrollCount = e.struggleHorizScrollCount || 0),
                        e.struggleHorizScrollCount < 3 &&
                          o < 5 &&
                          n.nodeType === Node.ELEMENT_NODE &&
                          n.firstElementChild &&
                          (function (n) {
                            if (n.scrollWidth > n.clientWidth) {
                              var e = t.getComputedStyle(n);
                              return (
                                'scroll' === e.overflow ||
                                'scroll' === e.overflowX ||
                                'auto' === e.overflow ||
                                'auto' === e.overflowX
                              );
                            }
                          })(n) &&
                          B.isVisible(n) &&
                          (e.struggleHorizScrollCount++,
                          o++,
                          r({ element: n, dataToEncode: { type: 'horizontalScrollbar' } }));
                    }
                    return (
                      n.on('pageSnapshot:report', function () {
                        a && i.blankPage && r({ dataToEncode: { type: 'blankPage' } });
                      }),
                      {
                        handleNode: function (n, e) {
                          var t, r;
                          i.horizontalScrollbar && u(n, e),
                            i.blankPage &&
                              ((t = n),
                              !a ||
                                t.nodeType !== Node.TEXT_NODE ||
                                ((r = t.textContent) &&
                                  r.trim() &&
                                  B.isVisible(t.parentNode) &&
                                  (a = !1)));
                        },
                      }
                    );
                  }
                  function yi (n, e, t, r) {
                    var i,
                      o,
                      a,
                      u,
                      c,
                      s,
                      f,
                      d = [];
                    function l () {
                      clearTimeout(c);
                    }
                    r.domRecordEnabled &&
                      r.interceptAjax &&
                      r.struggleCaptureDeadClick &&
                      ((o = e),
                      (a = t),
                      (u = { deadClickTimeout: r.struggleDeadClickInterval || 1000 }),
                      (s = u.deadClickTimeout),
                      (f = { INPUT: !0, SELECT: !0, TEXTAREA: !0 }),
                      o.on('domMutation', l),
                      o.on('segmentChanged', l),
                      o.on('event:change', l),
                      o.on('ajax:send', l),
                      o.on('pageError', l),
                      o.on('event:unload', l),
                      (i = {
                        handleClick: function (n) {
                          var e, t;
                          clearTimeout(c),
                            f[n.element.tagName] ||
                              ((e = n.id),
                              (t = n),
                              (c = setTimeout(function () {
                                a({
                                  element: n.element,
                                  dataToEncode: { type: 'deadClick', eventRelatedId: e },
                                  relatedEvent: t,
                                });
                              }, s)));
                        },
                      }),
                      d.push(i.handleClick.gbBind(i)));
                    var v,
                      h,
                      m,
                      p,
                      g,
                      y,
                      w,
                      b,
                      E,
                      C,
                      T,
                      S,
                      I,
                      k,
                      x,
                      M =
                        ((v = n),
                        (h = t),
                        (m = {
                          timeBetweenClicks: r.struggleRageClickInterval,
                          minimumClicksToRage: r.struggleRageClickMinCount,
                        }),
                        (g = m.timeBetweenClicks || 3000),
                        (y = m.minimumClicksToRage || 5),
                        (w = {}),
                        (b = 1),
                        {
                          handleClick: function (e) {
                            var n = v.idOf(e.element);
                            w[n]
                              ? (w[n].times.push({ time: e.timestamp, eventId: e.id }),
                                w[n].times.length >= y &&
                                  (w[n].times = w[n].times.filter(function (n) {
                                    return e.timestamp - n.time < g;
                                  })),
                                w[n].times.length >= y
                                  ? ((e.indexInRage = y + w[n].count),
                                    (e.rageSequence = b),
                                    w[n].isRage ||
                                      h({
                                        element: e.element,
                                        dataToEncode: {
                                          type: 'rageClick',
                                          startEventRelatedId: w[n].times[0].eventId,
                                          endEventRelatedId: e.id,
                                          rageSequence: b,
                                        },
                                        relatedEvent: e,
                                      }),
                                    (w[n].isRage = !0),
                                    (w[n].count = w[n].count + 1))
                                  : w[n].isRage &&
                                    (((w = {})[n] = {}),
                                    (w[n].times = []),
                                    w[n].times.push({ time: e.timestamp, eventId: e.id }),
                                    (w[n].count = 0),
                                    ++b))
                              : ((w[n] = {}),
                                (w[n].times = []),
                                w[n].times.push({ time: e.timestamp, eventId: e.id }),
                                (w[n].count = 0)),
                              p &&
                                w[p] &&
                                w[p].isRage &&
                                !w[n].isRage &&
                                ((w[p].isRage = !1), (w[p].count = 0), ++b),
                              (p = n);
                          },
                        });
                    return (
                      d.push(M.handleClick.gbBind(M)),
                      r.struggleCaptureErrorClick &&
                        ((C = e),
                        (T = t),
                        (S = { errorClickTimeout: r.struggleErrorClickInterval || 1000 }),
                        (x = S.errorClickTimeout),
                        C.on('pageError', function () {
                          k = !0;
                        }),
                        (E = {
                          handleClick: function (n) {
                            clearTimeout(I);
                            var e = n.id,
                              t = n;
                            I = setTimeout(function () {
                              k &&
                                ((k = !1),
                                T({
                                  element: n.element,
                                  dataToEncode: { eventRelatedId: e, type: 'errorClick' },
                                  relatedEvent: t,
                                }));
                            }, x);
                          },
                        }),
                        d.push(E.handleClick.gbBind(E))),
                      {
                        handleClick: function (e) {
                          d.forEach(function (n) {
                            n(e);
                          });
                        },
                      }
                    );
                  }
                  function wi (t, r) {
                    return {
                      handlePageLoad: function () {
                        !(function () {
                          const $___old_1e43406a3483e58d = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'performance'
                            ),
                            $___old_fe81923997518409 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'PerformanceNavigation'
                            );
                          try {
                            if ($___old_1e43406a3483e58d)
                              ({}.constructor.defineProperty(
                                window,
                                'performance',
                                $___stub_2b47892348e4e4b9.performance
                              ));
                            if ($___old_fe81923997518409)
                              ({}.constructor.defineProperty(
                                window,
                                'PerformanceNavigation',
                                $___stub_2b47892348e4e4b9.PerformanceNavigation
                              ));
                            return function () {
                              var n = t.performance.getEntriesByType
                                ? t.performance.getEntriesByType('navigation')
                                : [];
                              if (0 < n.length)
                                for (var e = 0; e < n.length; e++) {
                                  if ('reload' === n[e].type)
                                    return r({ element: O, dataToEncode: { type: 'reload' } });
                                  if ('back_forward' === n[e].type)
                                    return r({
                                      element: O,
                                      dataToEncode: { type: 'backForward' },
                                    });
                                }
                              t.performance.navigation &&
                                t.PerformanceNavigation &&
                                (t.performance.navigation.type ===
                                  t.PerformanceNavigation.TYPE_RELOAD &&
                                  r({ element: O, dataToEncode: { type: 'reload' } }),
                                t.performance.navigation.type ===
                                  t.PerformanceNavigation.TYPE_BACK_FORWARD &&
                                  r({ element: O, dataToEncode: { type: 'backForward' } }));
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_1e43406a3483e58d)
                              ({}.constructor.defineProperty(
                                window,
                                'performance',
                                $___old_1e43406a3483e58d
                              ));
                            if ($___old_fe81923997518409)
                              ({}.constructor.defineProperty(
                                window,
                                'PerformanceNavigation',
                                $___old_fe81923997518409
                              ));
                          }
                        })();
                      },
                    };
                  }
                  function bi (n) {
                    ke
                      ? we.emit('reportStruggle', n)
                      : setTimeout(function () {
                          we.emit('reportStruggle', n);
                        }, 0);
                  }
                  function Ei () {
                    Re.handlePageLoad();
                  }
                  function Ci (n) {
                    xe.handleSubmit(n);
                  }
                  function Ti (n) {
                    xe.handleKeyup(n);
                  }
                  function Si (n) {
                    xe.handleFocus(n);
                  }
                  function Ii () {
                    (ke = !0), xe.handleUnload();
                  }
                  function ki (n) {
                    Me.handleClick(n);
                  }
                  function xi (n) {
                    Ae.checkXhr(n);
                  }
                  function Mi (o) {
                    this.getSelectorInfo = function (n, e, t) {
                      if (!n || 'function' != typeof n.getRootNode)
                        return { selector: o.getSelectorInfo(n, e, t).selector };
                      for (var r = []; n; )
                        r.unshift(o.getSelectorInfo(n, e, t).selector),
                          (n = (n.getRootNode() || {}).host);
                      var i = { selector: r.splice(r.length - 1)[0] };
                      return r.length && (i.hostSelectorPath = r.join(',')), i;
                    };
                  }
                  function Ri (t, r, i) {
                    var o = '_gbHasShadow',
                      a = '_gbHasObserver',
                      u = {
                        initialShadowRootCount: 0,
                        hookInvocationsCount: 0,
                        totalShadowRootCount: 0,
                        totalShadowRootRemoved: 0,
                      };
                    function c (n) {
                      for (; n && !n[o]; ) (n[o] = !0), (n = n.parentNode ? n.parentNode : n.host);
                    }
                    function e (n) {
                      var e = t.Element.prototype[n];
                      e &&
                        (t.Element.prototype[n] = function () {
                          var n = e.apply(this, arguments);
                          try {
                            B.isAttachedToDOM(this) && r.emit('shadow:rootAttached', n),
                              r.emit('shadow:rootDetected', n),
                              (this[a] = !0),
                              c(this),
                              u.hookInvocationsCount++,
                              u.totalShadowRootCount++;
                          } catch (n) {
                            n.message;
                          }
                          return n;
                        });
                    }
                    r.on('domMutation', function (n) {
                      if ('childList' === n.type) {
                        for (var e = 0; e < n.addedNodes.length; e++)
                          n.addedNodes[e][o] &&
                            i.visit(
                              n.addedNodes[e],
                              function (n) {
                                n.shadowRoot &&
                                  !n[a] &&
                                  r.emit('shadow:rootDetected', n.shadowRoot);
                              },
                              _r.SHOW_ELEMENTS
                            );
                        for (e = 0; e < n.removedNodes.length; e++)
                          n.removedNodes[e][o] &&
                            i.visit(
                              n.removedNodes[e],
                              function (n) {
                                n.shadowRoot &&
                                  (r.emit('shadow:rootRemoved', n.shadowRoot),
                                  u.totalShadowRootCount--,
                                  u.totalShadowRootRemoved++);
                              },
                              _r.SHOW_ELEMENTS
                            );
                      }
                    }),
                      (this.startObservingShadowRoots = function (n) {
                        !(function (n) {
                          for (var e = 0; e < n.length; e++)
                            c(n[e]),
                              r.emit('shadow:rootDetected', n[e]),
                              u.initialShadowRootCount++,
                              u.totalShadowRootCount++;
                        })(n || []),
                          ['attachShadow', 'createShadowRoot'].forEach(e),
                          u.initialShadowRootCount;
                      }),
                      (this.stats = function () {
                        return u;
                      });
                  }
                  function Ai (e, t, r) {
                    var i = { url: e };
                    if (window.fetch)
                      return (
                        fetch(e, { cls_own: !0 })
                          .then(function (n) {
                            n.ok
                              ? ((i.type = n.headers.get('Content-Type')),
                                n
                                  .arrayBuffer()
                                  .then(function (n) {
                                    (i.content = B.pako.gzip(n)), t(i);
                                  })
                                  .catch(function (n) {
                                    logger.error(
                                      'Failed getting resource data by fetch for url : ' +
                                        e +
                                        ' error:' +
                                        n.message
                                    ),
                                      (i.error = 'status:' + n.message),
                                      t(i);
                                  }))
                              : (logger.error(
                                  'Failed getting resource data by fetch for url : ' +
                                    e +
                                    ' status:' +
                                    n.status +
                                    '  ' +
                                    n.statusText
                                ),
                                (i.error = 'status:' + n.status + '  ' + n.statusText),
                                t(i));
                          })
                          .catch(function (n) {
                            logger.error(
                              'Failed getting resource data by fetch for url : ' +
                                e +
                                ' error:' +
                                n.message
                            ),
                              (i.error = 'status: ' + n.message),
                              t(i);
                          }),
                        !0
                      );
                    try {
                      var o = new XMLHttpRequest();
                      return o
                        ? ((o.onreadystatechange = function () {
                            var n;
                            4 === o.readyState &&
                              (200 === o.status
                                ? ((n = o.getResponseHeader('Content-Type')),
                                  (i.type = n),
                                  (i.content = B.pako.gzip(o.response)),
                                  t(i))
                                : 0 === o.status
                                ? r(i.url)
                                : (logger.error(
                                    'Failed getting resource data by Ajax for url : ' +
                                      e +
                                      ' status:' +
                                      o.status +
                                      '  ' +
                                      o.statusText
                                  ),
                                  (i.error = 'status: ' + o.statusText + ' (' + o.status + ')'),
                                  t(i)));
                          }),
                          (o.cls_own = !0),
                          o.open('GET', e, !0),
                          (o.responseType = 'arraybuffer'),
                          o.send(),
                          !0)
                        : !1;
                    } catch (n) {
                      return (
                        logger.error(s + n.message, n),
                        console.log(
                          'Failed getting resource data by Ajax for url: ' + e + ': ' + n.message,
                          n
                        ),
                        !1
                      );
                    }
                  }
                  function Ni (u, c, t, e, s, f, d, r) {
                    var n, l;
                    function v () {
                      var n,
                        e = c.get('res.pending');
                      if ((c.remove('res.pending'), e))
                        try {
                          n = s.decode(e);
                        } catch (n) {
                          logger.error(
                            'Failed parsing JSON for pending resources: ' + n.message,
                            n
                          );
                        }
                      return n;
                    }
                    function i (n) {
                      r.countRecorded++, e.emit('saveResourceEvent', n);
                    }
                    function o (n) {
                      r.countCorsDenied++, e.emit('saveCorsDeniedEvent', n);
                    }
                    ((n = r || {}).countRecorded = 0),
                      (n.countCorsDenied = 0),
                      (n.recordingAll = !!c.get('res.all')),
                      (r = n),
                      (l = d.resourceRecordCssOnly
                        ? B.immutableSet('link', 'css')
                        : B.immutableSet('link', 'css', 'font', 'img', 'input')),
                      (this.fetchResources = function () {
                        var n = v();
                        if (n)
                          for (var e = 0; e < n.length; e++)
                            if (!t(n[e], i, o)) {
                              logger.error(
                                'Failed executing an XHR request for fetching a resource. Breaking the fetch loop.'
                              );
                              break;
                            }
                      }),
                      (this.electResources = function () {
                        var n,
                          e = d.electAmount,
                          t = d.maxPendingResources;
                        if (
                          (c.get('res.all') &&
                            ((n = !0), (e = Number.MAX_VALUE), (t = Number.MAX_VALUE)),
                          (n = n || Math.random() < d.electProbability))
                        ) {
                          for (
                            var r,
                              i = (function (n) {
                                for (var e = [], t = 0; t < n.length; t++) {
                                  var r = n[t];
                                  f(r.name) || (l[n[t].initiatorType] && e.push(r));
                                }
                                return e;
                              })((i = u.performance.getEntriesByType('resource'))),
                              o = v() || [],
                              a = 0;
                            a < e && 0 < i.length && !(o.length >= t);
                            a++
                          )
                            (r = Math.floor(Math.random() * i.length)),
                              o.push(i[r].name),
                              i.splice(r, 1);
                          c.set('res.pending', s.encode(o));
                        }
                      }),
                      (this.recordAllResources = function () {
                        c.set('res.all', 'true');
                      }),
                      (this.stopRecordAllResources = function () {
                        c.remove('res.all');
                      });
                  }
                  function Di (f, t, r) {
                    function i (n, e, t, r, i) {
                      var o,
                        a = [],
                        u = f.performance.getEntriesByType(e),
                        a =
                          r && i
                            ? u.filter(function (n) {
                                return i[n[r]] !== F;
                              })
                            : u;
                      if ('resource' === e)
                        for (
                          var c = (function () {
                              for (
                                var n = {}, e = f.document.getElementsByTagName('script'), t = 0;
                                t < e.length;
                                t++
                              )
                                e[t].src && (n[e[t].src] = e[t].async ? 1 : 0);
                              return n;
                            })(),
                            s = 0;
                          s < a.length;
                          s++
                        )
                          'script' === (o = a[s]).initiatorType && (o.async = c[o.name] ? 1 : 0);
                      for (n[e] = [], s = 0; s < a.length; s++)
                        n[e].push(
                          (function (n, e) {
                            for (var t = {}, r = 0; r < e.length; r++)
                              n[e[r]] !== F && (t[e[r]] = n[e[r]]);
                            return t;
                          })(a[s], t)
                        );
                    }
                    this.reportMeasurements = function () {
                      for (var n = {}, e = 0; e < r.length; e++)
                        i(n, r[e].type, r[e].properties, r[e].filterBy, r[e].validFilterValues);
                      t.emit('waterfall', n);
                    };
                  }
                  function _i (i, f, o, d, e, l) {
                    l = o.optionsWithDefaults(l, {
                      redComponentMin: 120,
                      redComponentDelta: 80,
                      minTextLen: 10,
                      submitIds: [],
                      ignoreNodesVisibility: !1,
                      allowFormLevel: !0,
                      considerBG: !0,
                      additionalTagNames: [],
                    });
                    var t = o.immutableSet.apply(null, l.submitIds),
                      r = o.immutableSet.apply(null, l.additionalTagNames),
                      v = o.immutableSet('INPUT', 'SELECT', 'TEXTAREA'),
                      h = 'input:not([type="hidden"]),select,textarea',
                      m = 2,
                      p = !1,
                      g = {},
                      y = {};
                    function w (n) {
                      for (; n; ) {
                        if ('FORM' === n.tagName || r[n.tagName]) return o.isVisible(n) ? n : null;
                        n = n.parentNode || n.host;
                      }
                      return null;
                    }
                    function b (n, r) {
                      e.visit(
                        n,
                        function (n) {
                          if (
                            n.nodeType === Node.TEXT_NODE &&
                            ((t = n),
                            !g[d.idOf(t)] &&
                              (function (n) {
                                return n.textContent.trim().length > l.minTextLen;
                              })(t) &&
                              (function (n) {
                                function e (n) {
                                  var e = n.match(/\d+/g);
                                  return (
                                    e &&
                                    parseInt(e[0]) > l.redComponentMin &&
                                    e[0] >
                                      Math.max(parseInt(e[1]), parseInt(e[2])) +
                                        l.redComponentDelta
                                  );
                                }
                                var t = i.getComputedStyle(n.parentNode);
                                return e(t.color) || (l.considerBG && e(t.backgroundColor));
                              })(t))
                          )
                            r.push(n);
                          else if (
                            n.nodeType === Node.ELEMENT_NODE &&
                            !l.ignoreNodesVisibility &&
                            ((e = n),
                            !o.isVisible(e) || 'hidden' === i.getComputedStyle(e).visibility)
                          )
                            return !1;
                          var e, t;
                        },
                        _r.SHOW_ALL
                      );
                    }
                    f.on('domMutation', function (n) {
                      if (p) {
                        var e = w(n.actualTarget);
                        if (e) {
                          for (
                            var t,
                              r,
                              i,
                              o,
                              a,
                              u =
                                'childList' === (r = n).type
                                  ? r.addedNodes
                                  : 'attributes' === r.type
                                  ? [r.actualTarget]
                                  : [],
                              c = [],
                              s = 0;
                            s < u.length;
                            s++
                          )
                            b(u[s], c);
                          for (s = 0; s < c.length; s++)
                            (t = (function (n, e) {
                              for (var t = n.parentNode, r = t.previousElementSibling; r; ) {
                                if (v[r.tagName]) return r;
                                r = r.previousElementSibling;
                              }
                              for (var i, o = m, a = t.parentElement; a && o--; ) {
                                if (1 === (i = a.querySelectorAll(h)).length) return i[0];
                                if (1 < i.length) break;
                                if (a === e) break;
                                a = a.parentNode;
                              }
                              return e;
                            })(c[s], e)),
                              (!l.allowFormLevel && t === e) ||
                                (v[t.tagName] &&
                                  ((i = t),
                                  (a = o = void 0),
                                  (o = d.idOf(i)),
                                  (a = void 0 === y[o] || y[o] !== i.value),
                                  (y[o] = i.value),
                                  !a)) ||
                                ((g[d.idOf(c[s])] = !0),
                                (function (n, e) {
                                  setTimeout(function () {
                                    f.emit('formValidationError', { element: n, message: e });
                                  }, 0);
                                })(t, c[s].textContent.trim()));
                        }
                      }
                    }),
                      (this.intercept = function (n) {
                        (p = t[n.id] || !!w(n)) && (g = {});
                      });
                  }
                  function Oi (c) {
                    var s = 1;
                    (this.showErrorsLRU = new _t(20)),
                      (this.intercept = function () {
                        var u = jQuery.validator.prototype.showErrors;
                        jQuery.validator.prototype.showErrors = function (n) {
                          try {
                            if (this.errorList && 0 < this.errorList.length)
                              for (var e = 0; e < this.errorList.length; e++) {
                                var t = this.errorList[e].element,
                                  r = this.errorList[e].message,
                                  i = 'SAME - NOT REPORTING';
                                t.gbLocalId || ((t.gbLocalId = s), s++);
                                var o,
                                  a = this.showErrorsLRU.set(t.gbLocalId, r);
                                null === a || E.isUndefined(a)
                                  ? (i = 'NEW')
                                  : a !== r
                                  ? (i = 'UPDATE')
                                  : a !== r ||
                                    ((o = this.errorsFor(t)) &&
                                      0 < o.length &&
                                      !E.isUndefined(o[0].innerHTML) &&
                                      ((o[0].innerHTML === r && jQuery(o[0]).is(':visible')) ||
                                        (i = 'SHOW'))),
                                  ('NEW' !== i && 'UPDATE' !== i && 'SHOW' !== i) ||
                                    c.emit('formValidationError', {
                                      element: t,
                                      message: 0 < r.length ? r : 'NONE',
                                    });
                              }
                          } catch (n) {
                            logger.error(
                              'Failed intercepting showErrors for validation error report. ' +
                                n.message,
                              n
                            );
                          }
                          u.call(this, n);
                        };
                      });
                  }
                  function Fi () {
                    return (
                      !(
                        'value' !== this.accessor ||
                        !Le.isDomMasked(this.elem, ee.SELF, te.VALUE_ATTRIBUTE)
                      ) ||
                      !!Le.isDomMasked(this.elem, ee.SELF_OR_ANY_PARENT, te.OMIT) ||
                      !(
                        !Ue[this.accessor] ||
                        !He[this.elem.tagName.toLowerCase()] ||
                        (this.elem.hasAttribute && this.elem.hasAttribute(Ve))
                      )
                    );
                  }
                  function Li () {
                    if (Le.isDomMasked(this.elem, ee.SELF_OR_ANY_PARENT, te.OMIT)) return !0;
                    if (Be && 'value' === this.accessor) {
                      if (
                        je.valueMaskIgnoreAttribute &&
                        this.elem.nodeType === Node.ELEMENT_NODE &&
                        this.elem.hasAttribute(je.valueMaskIgnoreAttribute)
                      )
                        return !1;
                      if (Be.isCensored(this.elem)) return !0;
                    }
                    return (
                      (('innerText' !== this.accessor &&
                        'textContent' !== this.accessor &&
                        'innerHTML' !== this.accessor &&
                        'outerHTML' !== this.accessor) ||
                        !Ve ||
                        !(function (n) {
                          for (; n; ) {
                            if (n.nodeType === Node.ELEMENT_NODE && n.hasAttribute(Ve)) return 1;
                            n = n.parentNode;
                          }
                        })(this.elem)) &&
                      (!(
                        ('innerText' !== this.accessor && 'textContent' !== this.accessor) ||
                        !(
                          Le.isDomMasked(this.elem, ee.SELF_OR_ANY_CHILD, te.TEXT) ||
                          Le.isDomMasked(this.elem, ee.SELF_OR_ANY_PARENT, te.TEXT) ||
                          Pe.isDomEncrypted(this.elem, ee.SELF_OR_ANY_CHILD) ||
                          Pe.isDomEncrypted(this.elem, ee.SELF_OR_ANY_PARENT)
                        )
                      ) ||
                        !(
                          'innerHTML' !== this.accessor ||
                          !(
                            Le.isDomMasked(
                              this.elem,
                              ee.SELF_OR_ANY_CHILD,
                              te.TEXT,
                              te.ATTRIBUTE
                            ) ||
                            Le.isDomMasked(
                              this.elem,
                              ee.SELF_OR_ANY_PARENT,
                              te.TEXT,
                              te.ATTRIBUTE
                            ) ||
                            Pe.isDomEncrypted(this.elem, ee.SELF_OR_ANY_CHILD) ||
                            Pe.isDomEncrypted(this.elem, ee.SELF_OR_ANY_PARENT)
                          )
                        ) ||
                        !(
                          'outerHTML' !== this.accessor ||
                          !(
                            Le.isDomMasked(
                              this.elem,
                              ee.SELF_OR_ANY_CHILD,
                              te.TEXT,
                              te.ATTRIBUTE
                            ) ||
                            Le.isDomMasked(
                              this.elem,
                              ee.SELF_OR_ANY_PARENT,
                              te.TEXT,
                              te.ATTRIBUTE
                            ) ||
                            Pe.isDomEncrypted(this.elem, ee.SELF_OR_ANY_CHILD) ||
                            Pe.isDomEncrypted(this.elem, ee.SELF_OR_ANY_PARENT)
                          )
                        ))
                    );
                  }
                  function Pi () {
                    return !!Le.isDomMasked(this.elem, ee.SELF_OR_ANY_PARENT, te.OMIT);
                  }
                  function Bi (n) {
                    return n.replace(/^[\s>]*|[\s>]*$/gi, '');
                  }
                  function ji (n, e, t, r, i) {
                    if ('function' != typeof n.querySelector) return [];
                    if (-1 !== e.eqIndex) {
                      if (1 === r) {
                        var o = n.querySelectorAll(e.selector);
                        return o[e.eqIndex] ? [o[e.eqIndex]] : [];
                      }
                      for (
                        var a = 0,
                          u = n.nodeType === Node.DOCUMENT_NODE ? [n.documentElement] : n.children,
                          c = 0;
                        c < u.length;
                        c++
                      )
                        if (Xe.call(u[c], e.selector) && a++ === e.eqIndex) return [u[c]];
                      return [];
                    }
                    if (i && t) {
                      var s = n.querySelector(e.selector);
                      return s ? [s] : [];
                    }
                    return Array.prototype.slice.call(n.querySelectorAll(e.selector));
                  }
                  function Ui (n, e, t) {
                    for (
                      var r, i, o, a, u = (e = e.slice()).length, c = [], s = [n];
                      0 < e.length;

                    ) {
                      for (r = e.shift(), o = [], i = 0; i < s.length; i++) {
                        if (
                          ((a = ji(s[i], r, t, u, 0 === e.length)),
                          t && 0 === r.length && 0 < a.length)
                        )
                          return [a[0]];
                        o.push.apply(o, a);
                      }
                      c = s = o;
                    }
                    return c;
                  }
                  function Hi (n, e) {
                    return Ui(n, e, !1);
                  }
                  function Vi (n, e, t, r) {
                    (this._elementResolver = e),
                      (this._accessors = t),
                      (this._rule = n),
                      (this._urlRegexp = r),
                      (this._isHierarchical = -1 !== n.selector.indexOf('>'));
                  }
                  function qi (t, n) {
                    var r;
                    t.on(
                      'init:loaded',
                      function () {
                        (r = n[qi.KEY_NAME]) && t.emit('analyzerId', r);
                      },
                      F,
                      -1
                    ),
                      t.on('event:unload', function () {
                        try {
                          r && (n[qi.KEY_NAME] = r);
                        } catch (n) {
                          logger.error('error: could not set aid to storage. ' + n.message);
                        }
                      }),
                      (this.handle = function (n, e) {
                        n && ((r = n), t.emit('analyzerId', r));
                      });
                  }
                  function zi (n) {
                    for (var e = 0; e < $e.length; e++)
                      Je.hasOwnProperty($e[e]) && (n[$e[e]] = Je[$e[e]]);
                    return n;
                  }
                  (!e &&
                    (function (n, e) {
                      if (void 0 === n[e]) return void 0 === n.NodeFilter;
                      void 0 !== n.console &&
                        'function' == typeof n.console.log &&
                        console.log(
                          'WARNING[EyeView-1301]: detector script has been loaded more than once. Please fix to have a single detector loading. (Extra script loading will be ignored)'
                        );
                      return !0;
                    })(n, i)) ||
                    ((r = self),
                    (o = O),
                    ((a = { beaconVersion: '2' }).detectorVersion = t),
                    (a.mouseEvents =
                      r && r.PointerEvent
                        ? { down: 'pointerdown', up: 'pointerup' }
                        : { down: 'mousedown', up: 'mouseup' }),
                    (a.eventTypes = [
                      a.mouseEvents.down,
                      a.mouseEvents.up,
                      'touchstart',
                      'touchend',
                      'scroll',
                      'change',
                      'blur',
                      'focusout',
                      'keydown',
                      'keyup',
                      'submit',
                      'reset',
                      'load',
                      'unload',
                      'ajaxComplete',
                      'hashchange',
                      'navigation',
                      'popstate',
                      'focus',
                      'focusin',
                      'mouseenter',
                      'mousemove',
                      'error',
                      'beforeunload',
                      'resize',
                      'pagehide',
                      'dragstart',
                      'dragend',
                    ]),
                    (a.snapshotApplicableEventType = [
                      'pageUpdate',
                      'change',
                      'mousedown',
                      'scroll',
                      'touchstart',
                      'touchend',
                      'blur',
                      'submit',
                      'drag',
                      'dragstart',
                      'dragend',
                      'formValidationError',
                      'navigation',
                      'unload',
                      'beforeunload',
                      'segmentChanged',
                      'domTampered',
                    ]),
                    (a.reportBase64URLs = !1),
                    (a.nobelEventTypes = ['pageSnapshot']),
                    (a.socialNobelEventTypes = ['resourceContent']),
                    (a.encryptionPrefix = '__ENC_'),
                    (a.encodeSelectors = !0),
                    (a.encodeEventTypes = !0),
                    (a.useClassesInSelectors = !1),
                    (a.encoding = {
                      numberBase: 36,
                      rootSelector: '-',
                      delimiters: {
                        versionPayload: ';',
                        pages: '~~~',
                        events: '~~',
                        eventParts: '~',
                        pageIdEvents: '_',
                      },
                      domSnapshotPrefix: 'D',
                      domSnapshotRefPrefix: 'r',
                      domSnapshotCompressedPrefix: 'd',
                      domSnapshotPlainPrefix: 'P',
                      valueEncodedPrefix: 'E',
                      valueNotEncodedPrefix: 'N',
                    }),
                    (a.cookies = {
                      session: '_cls_s',
                      visitor: '_cls_v',
                      sub_session: '_cls_subs',
                      supportMode: '_cls_sm',
                    }),
                    (a.censorMode = { BlackList: 'blacklist', WhiteList: 'whitelist' }),
                    (a.iframesAutoInjectMode = { BlackList: 'blacklist', WhiteList: 'whitelist' }),
                    (a.Storage = { BoundKeyPrefix: 'gb.', UnboundKeyPrefix: 'gb_unbound.' }),
                    (a.detectorScript = o
                      ? (function (n, e) {
                          if (n)
                            return (!n.hasAttribute(e) && o.querySelector('[' + e + ']')) || n;
                          var t = o.querySelector('[' + e + ']');
                          return (
                            r &&
                              !t &&
                              r._cls_config &&
                              r._cls_config.detectorTagId &&
                              (t = o.getElementById(r._cls_config.detectorTagId)),
                            (t = t || o.getElementById('_cls_detector'))
                          );
                        })(o.currentScript, 'data-clsconfig')
                      : F),
                    (_ = a),
                    void 0 !== (L = {}) && nt(L),
                    (_.setup = 'dom'),
                    void 0 !== L && et(L),
                    (_.dictionary = {
                      eventTypes: {
                        change: 0,
                        document: 2,
                        mousedown: 3,
                        touchstart: 4,
                        touchend: 5,
                        focusout: 6,
                        blur: 7,
                        unload: 9,
                        submit: 10,
                        reset: 11,
                        mouseup: 12,
                        drag: 13,
                        scroll: 14,
                        popstate: 15,
                        keydown: 16,
                        keyup: 17,
                        keypress: 18,
                        timing: 20,
                        idle: 21,
                        ajaxRequest: 22,
                        formValidationError: 23,
                        hashchange: 25,
                        botDetection: 26,
                        mouseenter: 27,
                        navigation: 28,
                        mousemove: 29,
                        error: 30,
                        thirdparty: 31,
                        custom: 32,
                        hover: 33,
                        thirdpartymap: 34,
                        performance: 35,
                        resource: 36,
                        clsdebug: 37,
                        resize: 38,
                        thirdPartyAttribute: 39,
                        ajaxStats: 40,
                        ajaxLimitReached: 41,
                        pageSnapshot: 91,
                        pageUpdate: 92,
                        resourceContent: 93,
                        corsDeniedResource: 94,
                        blackout: 101,
                        segmentChanged: 102,
                        titleChanged: 103,
                        devToolsVisibilityChanged: 104,
                        domTampered: 105,
                        webStruggle: 106,
                        clientAttribute: 110,
                        waterfall: 111,
                        lastSegment: 112,
                        abTesting: 120,
                        customMap: 121,
                      },
                      elements: {
                        DIV: 0,
                        SPAN: 1,
                        INPUT: 2,
                        FORM: 3,
                        SELECT: 4,
                        TEXTAREA: 5,
                        TABLE: 6,
                        TR: 7,
                        TD: 8,
                        IFRAME: 9,
                        TBODY: 10,
                        THEAD: 11,
                        LABEL: 12,
                      },
                      encodingTypes: {
                        cd_number: 0,
                        cd_boolean: 1,
                        cd_string: 2,
                        cd_coordinate: 3,
                        cd_navtiming: 4,
                      },
                      performanceTimingEvents: {
                        navigationStart: 1,
                        redirectStart: 2,
                        fetchStart: 4,
                        domainLookupStart: 5,
                        connectStart: 7,
                        secureConnectionStart: 8,
                        requestStart: 10,
                        responseStart: 13,
                        domLoading: 15,
                        domContentLoadedEventStart: 17,
                        domComplete: 19,
                        loadEventStart: 20,
                        loadEventEnd: 21,
                      },
                      encode: function (n, e) {
                        var t = e[n];
                        return t !== F ? t : n;
                      },
                      encodeEventType: function (n) {
                        return _.dictionary.encode(n, _.dictionary.eventTypes);
                      },
                      encodeNodeName: function (n) {
                        return _.dictionary.encode(n, _.dictionary.elements);
                      },
                      encodeEncodingType: function (n) {
                        return _.dictionary.encode(n, _.dictionary.encodingTypes);
                      },
                      encodePerformanceTimingMeasurement: function (n) {
                        return _.dictionary.encode(n, _.dictionary.performanceTimingEvents);
                      },
                    }),
                    (function (n) {
                      if (n.CSS && n.CSS.escape) return n.CSS.escape;
                      var e = function (n) {
                        if (arguments.length === 0)
                          throw new TypeError('`CSS.escape` requires an argument.');
                        var e = String(n);
                        var t = e.length;
                        var r = -1;
                        var i;
                        var o = '';
                        var a = e.charCodeAt(0);
                        while (++r < t) {
                          i = e.charCodeAt(r);
                          if (i == 0) {
                            o += '\uFFFD';
                            continue;
                          }
                          if (
                            (i >= 1 && i <= 31) ||
                            i == 127 ||
                            (r == 0 && i >= 48 && i <= 57) ||
                            (r == 1 && i >= 48 && i <= 57 && a == 45)
                          ) {
                            o += '\\' + i.toString(16) + ' ';
                            continue;
                          }
                          if (r == 0 && t == 1 && i == 45) {
                            o += '\\' + e.charAt(r);
                            continue;
                          }
                          if (
                            i >= 128 ||
                            i == 45 ||
                            i == 95 ||
                            (i >= 48 && i <= 57) ||
                            (i >= 65 && i <= 90) ||
                            (i >= 97 && i <= 122)
                          ) {
                            o += e.charAt(r);
                            continue;
                          }
                          o += '\\' + e.charAt(r);
                        }
                        return o;
                      };
                      if (!n.CSS) n.CSS = {};
                      n.CSS.escape = e;
                    })(self),
                    (u = Object.prototype.toString),
                    (E = {
                      isFunction: function (n) {
                        return 'function' == typeof n;
                      },
                      isNumber: function (n) {
                        return 'number' == typeof n || '[object Number]' === u.call(n);
                      },
                      isBoolean: function (n) {
                        return 'boolean' == typeof n || '[object Boolean]' == u.call(n);
                      },
                      isString: function (n) {
                        return 'string' == typeof n || '[object String]' === u.call(n);
                      },
                      isUndefined: function (n) {
                        return void 0 === n;
                      },
                      last: function (n) {
                        return n && n[n.length - 1];
                      },
                      forOwn: function (n, e) {
                        for (var t in n) n.hasOwnProperty(t) && e(n[t], t);
                      },
                      indexOf: (c = tt('indexOf')),
                      pluck: function (n, e) {
                        return n
                          ? n.map(function (n) {
                              return n[e];
                            })
                          : [];
                      },
                      reduce: tt('reduce'),
                      contains:
                        'function' == typeof Array.prototype.includes
                          ? tt('includes')
                          : function (n, e, t) {
                              return -1 < c(n, e, t);
                            },
                      forEach: tt('forEach'),
                    }),
                    (f = E),
                    (d = self),
                    (l = (l = void 0 !== L ? L : {}) || {}),
                    (logger = {
                      isConsoleSupported: function () {
                        return !f.isUndefined(d.console) && f.isFunction(d.console.log);
                      },
                      error: function () {
                        this.log.apply(this, arguments);
                      },
                      log: function () {
                        var n, e;
                        !f.isUndefined(l.debugMode) &&
                          l.debugMode &&
                          ((n = Array.prototype.slice.call(arguments, 0)).unshift(
                            B.currentTimestamp()
                          ),
                          Un &&
                            Un.page &&
                            Un.page.frame &&
                            n.push(' (in frame ' + Un.page.id + ')'),
                          this.isConsoleSupported()
                            ? console.log.apply(console, n)
                            : f.isUndefined(d.console.log) || ((e = n.join(' ')), console.log(e)));
                      },
                      trace: function () {
                        l.traceMode && this.log.apply(this, arguments);
                      },
                    }),
                    (s = 'error was detected '),
                    (P = new (function (n) {
                      var o = {},
                        a = [];
                      function i (n, e) {
                        return n[2] < e[2] ? -1 : n[2] > e[2] ? 1 : 0;
                      }
                      ((n = n || this).on = function (n, e, t, r) {
                        r === F && (r = 0), (o[n] = o[n] || []).push([e, t, r]), o[n].sort(i);
                      }),
                        (n.off = function (n, e) {
                          n || (o = {});
                          for (var t = o[n] || a, r = (t.length = e ? t.length : 0); r--; )
                            e == t[r][0] && t.splice(r, 1);
                        }),
                        (n.emit = function (n) {
                          for (
                            var e,
                              t = o[n] || a,
                              r = 0 < t.length ? t.slice(0, t.length) : t,
                              i = 0;
                            (e = r[i++]);

                          )
                            e[0].apply(e[1], a.slice.call(arguments, 1));
                        });
                    })()),
                    (B = (function (i, o, a, e) {
                      e = e || {};
                      var t,
                        u = {
                          select: 'input',
                          change: 'input',
                          submit: 'form',
                          reset: 'form',
                          error: 'img',
                          load: 'img',
                          unload: 'img',
                          abort: 'img',
                          readystatechange: 'XMLHttpRequest',
                        },
                        c =
                          'function' == typeof Object.assign
                            ? Object.assign
                            : function () {
                                var n = arguments[0];
                                if (null === n || n === F)
                                  throw new TypeError(
                                    'Cannot convert undefined or null to object'
                                  );
                                for (var e, t, r = Object(n), i = 1; i < arguments.length; i++)
                                  if (null !== (e = arguments[i]) && e !== F)
                                    for (t in e)
                                      Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                                return r;
                              },
                        r = a && a.createElement('a'),
                        s =
                          o &&
                          o.console &&
                          o.console.time &&
                          o.console.timeEnd &&
                          o.console.timeStamp,
                        f = i.isFunction(o.String.prototype.startsWith),
                        d =
                          o &&
                          (function () {
                            if (o.Event && o.Event.prototype && o.Event.prototype.composedPath)
                              return function (n) {
                                return n.composedPath()[0];
                              };
                            var n, e;
                            function t () {
                              (n = a.createElement('iframe')),
                                a.body.appendChild(n),
                                (e = n.contentWindow.Event.prototype.composedPath),
                                a.body.removeChild(n);
                            }
                            try {
                              t();
                            } catch (n) {
                              a.addEventListener('DOMContentLoaded', function () {
                                t();
                              });
                            }
                            return function (n) {
                              return e ? e.call(n)[0] : n.target;
                            };
                          })(),
                        l = o.Node && o.Node.prototype.hasOwnProperty('isConnected');
                      return {
                        currentTimestamp:
                          i.isFunction(Date.now) && i.isNumber(Date.now())
                            ? Date.now
                            : function () {
                                return new Date().getTime();
                              },
                        isElement: function (n) {
                          return 'hasAttribute' in n;
                        },
                        isDOMElement: function (n) {
                          return 'object' == typeof HTMLElement
                            ? n instanceof HTMLElement
                            : n &&
                                'object' == typeof n &&
                                null !== n &&
                                1 === n.nodeType &&
                                'string' == typeof n.nodeName;
                        },
                        isEditableInput: function (n) {
                          if (!n) return !1;
                          if ('INPUT' !== n.tagName) return !0;
                          var e = (n.getAttribute('type') || '').toLowerCase();
                          return 'button' !== e && 'submit' !== e && 'reset' !== e;
                        },
                        isOldIE: function () {
                          return !a.addEventListener;
                        },
                        hasTouch: function () {
                          return 'ontouchstart' in o;
                        },
                        isMobile: function () {
                          const $___old_216966f7faead3be = {}.constructor.getOwnPropertyDescriptor(
                            Navigator.prototype,
                            'userAgent'
                          );
                          try {
                            if ($___old_216966f7faead3be)
                              ({}.constructor.defineProperty(
                                Navigator.prototype,
                                'userAgent',
                                $___stub_47c01efa79e9f191.userAgent
                              ));
                            return function () {
                              var n = navigator.userAgent;
                              return /Android|webOS|iPhone|iPad|iPod|Windows Phone|IEMobile|Opera Mini|Mobile|mobile|Tablet|CriOS/i.test(
                                n
                              );
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_216966f7faead3be)
                              ({}.constructor.defineProperty(
                                Navigator.prototype,
                                'userAgent',
                                $___old_216966f7faead3be
                              ));
                          }
                        },
                        isChromeDesktop: function () {
                          const $___old_ef94b2ae3432ee18 = {}.constructor.getOwnPropertyDescriptor(
                            Navigator.prototype,
                            'userAgent'
                          );
                          try {
                            if ($___old_ef94b2ae3432ee18)
                              ({}.constructor.defineProperty(
                                Navigator.prototype,
                                'userAgent',
                                $___stub_47c01efa79e9f191.userAgent
                              ));
                            return function () {
                              var n = navigator.userAgent,
                                e = /Chrome/i.test(n);
                              return !this.isMobile() && e;
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_ef94b2ae3432ee18)
                              ({}.constructor.defineProperty(
                                Navigator.prototype,
                                'userAgent',
                                $___old_ef94b2ae3432ee18
                              ));
                          }
                        },
                        isSafari: function (n) {
                          var e = /Safari/i.test(n),
                            t = /Chrome/i.test(n);
                          return e && !t;
                        },
                        isIE: function (n) {
                          return /Trident|MSIE/i.test(n);
                        },
                        isChromeOnIos: function (n) {
                          return /CriOS/i.test(n);
                        },
                        getAttributeForElement: function (n, e) {
                          return n && this.isElement(n)
                            ? (n.hasAttribute(e.toLocaleLowerCase())
                                ? (t = n.getAttribute(e.toLocaleLowerCase()))
                                : n.hasAttribute(e.toLocaleUpperCase()) &&
                                  (t = n.getAttribute(e.toLocaleUpperCase())),
                              (t = t && this.trim(t)) || null)
                            : null;
                          var t;
                        },
                        getElementId: function (n) {
                          return n && n.id
                            ? i.isString(n.id) || 'function' != typeof n.getAttribute
                              ? n.id
                              : n.getAttribute('id')
                            : null;
                        },
                        isDuplicateElementId: function (n) {
                          if (!e.duplicateIdCheck) return !1;
                          try {
                            return 'querySelectorAll' in a
                              ? 1 < a.querySelectorAll("[id='" + n + "']").length
                              : !1;
                          } catch (n) {
                            return !1;
                          }
                        },
                        getMouseEnterTarget: function () {
                          return 'onmouseenter' in a ? a : 'onmouseenter' in o ? o : a.body;
                        },
                        hasTimingAPI: function () {
                          const $___old_ba099abd5f663ba8 = {}.constructor.getOwnPropertyDescriptor(
                            window,
                            'performance'
                          );
                          try {
                            if ($___old_ba099abd5f663ba8)
                              ({}.constructor.defineProperty(
                                window,
                                'performance',
                                $___stub_2b47892348e4e4b9.performance
                              ));
                            return function () {
                              return (
                                !i.isUndefined(o.performance) &&
                                !i.isUndefined(o.performance.timing)
                              );
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_ba099abd5f663ba8)
                              ({}.constructor.defineProperty(
                                window,
                                'performance',
                                $___old_ba099abd5f663ba8
                              ));
                          }
                        },
                        startsWith: function (n, e) {
                          return (
                            !(!i.isString(n) || !i.isString(e)) &&
                            (f ? n.startsWith(e) : n.slice(0, e.length) === e)
                          );
                        },
                        truncateStr: function (n, e, t) {
                          var r = n;
                          return (
                            n &&
                              n.length > e &&
                              ((r = n.substr(0, e)), t && (r = r.concat('...'))),
                            r
                          );
                        },
                        getCoordinate: function (n) {
                          var e = n.changedTouches || n.touches,
                            t = e && 0 < e.length ? e[0] : n,
                            r = this.extractElementFromEvent(n);
                          return this.isHybrid() || 'HTML' === r.nodeName.toUpperCase()
                            ? new Xt(t.clientX, t.clientY)
                            : i.isUndefined(t.pageX) || i.isUndefined(t.pageY)
                            ? new Xt(
                                n.clientX + a.body.scrollLeft + a.documentElement.scrollLeft,
                                n.clientY + a.body.scrollTop + a.documentElement.scrollTop
                              )
                            : new Xt(t.pageX, t.pageY);
                        },
                        getScrollTopLeft: function () {
                          try {
                            var n = null !== o.top && o.top !== o.self ? o.top : o;
                            return {
                              top:
                                void 0 !== n.pageYOffset
                                  ? n.pageYOffset
                                  : (
                                      n.document.documentElement ||
                                      n.document.body.parentNode ||
                                      n.document.body
                                    ).scrollTop,
                              left:
                                void 0 !== n.pageXOffset
                                  ? n.pageXOffset
                                  : (
                                      n.document.documentElement ||
                                      n.document.body.parentNode ||
                                      n.document.body
                                    ).scrollLeft,
                            };
                          } catch (n) {
                            return (
                              logger.error('Failed getting scroll values: ' + n.message, n),
                              { top: 0, left: 0 }
                            );
                          }
                        },
                        getElementXYCoordinates: function (n) {
                          if (!n) return null;
                          if (!('getBoundingClientRect' in n)) return null;
                          var e = n.getBoundingClientRect(),
                            t = this.getScrollTopLeft();
                          return new Xt(Math.round(e.left + t.left), Math.round(e.top + t.top));
                        },
                        isSameCoordinates: function (n, e) {
                          return n.x === e.x && n.y === e.y;
                        },
                        isCoordinatesDistLargerThan: function (n, e, t) {
                          return Math.abs(n.x - e.x) > t || Math.abs(n.y - e.y) > t;
                        },
                        getCurrentScrollReach: function () {
                          try {
                            var n = null !== o.top && o.top !== o.self ? o.top : o;
                            return (
                              (void 0 !== n.pageYOffset
                                ? n.pageYOffset
                                : (
                                    n.document.documentElement ||
                                    n.document.body.parentNode ||
                                    n.document.body
                                  ).scrollTop) +
                              (n.innerHeight ||
                                n.document.documentElement.clientHeight ||
                                n.document.body.clientHeight)
                            );
                          } catch (n) {
                            return 0;
                          }
                        },
                        getWindowSize: function () {
                          return i.isNumber(o.innerWidth) && i.isNumber(o.innerHeight)
                            ? this.validateSize(o.innerWidth, o.innerHeight)
                            : !i.isUndefined(a.body) &&
                              i.isNumber(a.body.offsetWidth) &&
                              i.isNumber(a.body.offsetHeight)
                            ? this.validateSize(a.body.offsetWidth, a.body.offsetHeight)
                            : null;
                        },
                        getScreenSize: function () {
                          return this.validateSize(screen.width, screen.height);
                        },
                        validateSize: function (n, e) {
                          return i.isNumber(n) && i.isNumber(e) ? { width: n, height: e } : null;
                        },
                        indexOfNode: function (n, e, t) {
                          for (var r = t || 0; r < n.length; r++) if (n[r] === e) return r;
                          return -1;
                        },
                        getLocationUrlSplitByHash: function () {
                          var n = o.location.href,
                            e = n.indexOf('#');
                          return -1 === e
                            ? { url: n, withoutHash: n, hash: null }
                            : {
                                url: n,
                                withoutHash: n.slice(0, e),
                                hash: n.slice(e + 1, n.length),
                              };
                        },
                        getHashFromUrl: function (n) {
                          var e = n.indexOf('#');
                          return -1 === e ? '' : n.slice(e + 1, n.length);
                        },
                        stripHash: function (n) {
                          var e = n.indexOf('#');
                          return -1 === e ? n : n.slice(0, e);
                        },
                        getReferrerUrlWithoutHash: function () {
                          var n = o.document.referrer;
                          if (!n || 0 === n.length) return null;
                          var e = n.indexOf('#');
                          return -1 !== e ? n.slice(0, e) : n;
                        },
                        encodeAsBase: function (n, e) {
                          return n.toString(e);
                        },
                        uuid: function () {
                          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
                            n
                          ) {
                            var e = (16 * Math.random()) | 0;
                            return ('x' === n ? e : (3 & e) | 8).toString(16);
                          });
                        },
                        addEventHandler: function (n, e, t, r) {
                          n.addEventListener
                            ? n.addEventListener(e, t, r)
                            : n.attachEvent && n.attachEvent('on' + e, t);
                        },
                        removeEventHandler: function (n, e, t) {
                          i.isUndefined(n.removeEventListener)
                            ? i.isUndefined(n.detachEvent) || n.detachEvent('on' + e, t)
                            : n.removeEventListener(e, t, !0);
                        },
                        extractElementFromEvent: function (n) {
                          void 0 === n && (n = o.event);
                          var e = (n.target.shadowRoot ? d(n) : n.target) || n.srcElement;
                          return null == e ? null : 3 === e.nodeType ? e.parentNode : e;
                        },
                        isEventSupported: function (n) {
                          var e = 'on' + n;
                          if (e in o || e in o.document) return !0;
                          var t = a.createElement(u[e] || 'div'),
                            r = e in t;
                          return (
                            r || (t.setAttribute(e, 'return;'), (r = i.isFunction(t[e]))),
                            (t = null),
                            r
                          );
                        },
                        isConsoleSupported: function () {
                          return !i.isUndefined(o.console) && i.isFunction(o.console.log);
                        },
                        getReason: function (n) {
                          return i.isString(n) ? '(' + n + ')' : '(not specified)';
                        },
                        hashcode: function (n) {
                          var e = 0;
                          if (0 === n.length) return e;
                          for (var t = 0; t < n.length; t++) {
                            e = (e << 5) - e + n.charCodeAt(t);
                            e &= e;
                          }
                          return e;
                        },
                        trim: function (n) {
                          return 'function' != typeof String.prototype.trim
                            ? n.replace(/^\s+|\s+$/g, '')
                            : n.trim();
                        },
                        time: function (n) {
                          e.timingMode && s && o.console.time(n);
                        },
                        timeEnd: function (n) {
                          e.timingMode && s && o.console.timeEnd(n);
                        },
                        timeStamp: function (n) {
                          e.timingMode && s && o.console.timeStamp(n);
                        },
                        hasOneOfClassNames: function (n, e) {
                          for (var t = ' ' + this.getClass(n) + ' ', r = 0; r < e.length; r++)
                            if (-1 < t.indexOf(' ' + e[r] + ' ')) return !0;
                          return !1;
                        },
                        getClass: function (n) {
                          return (n.getAttribute && n.getAttribute('class')) || '';
                        },
                        getClassList: function (n) {
                          if (n.classList) return n.classList;
                          var e = this.getClass(n);
                          return e ? e.split(' ') : [];
                        },
                        hasClassName: function (n, e) {
                          return -1 < (' ' + this.getClass(n) + ' ').indexOf(' ' + e + ' ');
                        },
                        getHybridType: function () {
                          return 'undefined' == typeof eyeViewHybridBridge
                            ? null
                            : eyeViewHybridBridge.getHybridType();
                        },
                        isHybrid: function () {
                          return 'undefined' != typeof eyeViewHybridBridge;
                        },
                        isHybridAndroid: function () {
                          return (
                            this.isHybrid() &&
                            this.getHybridType() === eyeViewHybridBridge.HYBRID_ANDROID
                          );
                        },
                        isHybridIOS: function () {
                          return (
                            this.isHybrid() &&
                            this.getHybridType() === eyeViewHybridBridge.HYBRID_IOS
                          );
                        },
                        immutableSet: function () {
                          for (var n = {}, e = 0; e < arguments.length; e++) n[arguments[e]] = !0;
                          return n;
                        },
                        DOMElement2Str: function (n) {
                          return n instanceof CharacterData ? n.textContent : n.outerHTML;
                        },
                        dateFromNow: function (n) {
                          return new Date(this.currentTimestamp() + n);
                        },
                        getRootNode: function (n) {
                          if (!n) return n;
                          if (n.getRootNode) return n.getRootNode();
                          var e = n;
                          for (n = n.parentNode; n; ) n = (e = n).parentNode;
                          return e || n;
                        },
                        isAttachedToDOM: function (n) {
                          if (!n) return !1;
                          if (l) return n.isConnected;
                          var e = n.ownerDocument;
                          if (n.getRootNode) return e === n.getRootNode({ composed: !0 });
                          for (; n; ) {
                            if (n === e) return !0;
                            n = n.parentNode || n.host;
                          }
                          return !1;
                        },
                        isVisible: function (n) {
                          return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
                        },
                        ensureProperty: function (n) {
                          for (
                            var e = Array.prototype.slice.call(arguments, 1), t = n, r = 0;
                            r < e.length;
                            r++
                          )
                            t.hasOwnProperty(e[r]) || (t[e[r]] = {}), (t = t[e[r]]);
                          return t;
                        },
                        shallowExtend: function (n, e) {
                          if (!n) return n;
                          var t;
                          for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                          return n;
                        },
                        isEmpty: function (n) {
                          for (var e in n) if (n.hasOwnProperty(e)) return !1;
                          return !0;
                        },
                        assign: function (n, e, t, r) {
                          return c.call(null, n, e, t, r);
                        },
                        getPerformanceResourceEntry: function (n, e) {
                          var t, r;
                          o.performance &&
                            o.performance.getEntriesByName &&
                            (t = performance.getEntriesByName(B.toAbsoluteUrl(n))) &&
                            t.length &&
                            (t.sort(function (n, e) {
                              return n.startTime - e.startTime;
                            }),
                            (r = t[t.length - 1]) &&
                              ((e.downloadTime = r.duration ? Math.floor(r.duration) : F),
                              (e.ttfb = r.responseStart
                                ? Math.floor(r.responseStart - r.startTime)
                                : F)));
                        },
                        extractHostname: function (n) {
                          if (!n) return '';
                          var e = n.indexOf('//');
                          if (-1 === e) return '';
                          var t = n.indexOf('/', e + 2);
                          return n.substring(e + 2, -1 !== t ? t : F);
                        },
                        isHostRelativeUrl: function (n) {
                          return !n || !('//' === n.substring(0, 2) || -1 < n.indexOf('://'));
                        },
                        extractPath: function (n) {
                          if (!n) return '';
                          r.href = n;
                          var e = r.pathname;
                          return '/' !== e.charAt(0) && (e = '/' + e), e;
                        },
                        joinPath: function (n, e) {
                          var t = '/' === n.charAt(n.length - 1),
                            r = '/' === e.charAt(0);
                          return t && r ? n + e.substring(1) : t || r ? n + e : n + '/' + e;
                        },
                        extractOrigin: function (n) {
                          if (!n) return '';
                          if (((r.href = n), r.origin)) return r.origin;
                          var e = n.indexOf('://'),
                            t = -1 !== e && -1 !== n.indexOf(':', e + 3);
                          return r.hostname
                            ? r.protocol + '//' + r.hostname + (t && r.port ? ':' + r.port : '')
                            : '';
                        },
                        toAbsoluteUrl: function (n) {
                          return (r.href = n), r.href;
                        },
                        arrayToJsonSafe: function (n) {
                          return (t =
                            t ||
                            ('function' == typeof Array.prototype.toJSON
                              ? function (n) {
                                  var e = Array.prototype.toJSON;
                                  delete Array.prototype.toJSON;
                                  var t = JSON.stringify(n);
                                  return (Array.prototype.toJSON = e), t;
                                }
                              : JSON.stringify))(n);
                        },
                        parseQuery: function (n) {
                          var e = {};
                          if (n)
                            for (var t, r = n.split('&'), i = 0; i < r.length; i++)
                              if ((t = r[i].split('='))[0])
                                try {
                                  e[t[0]] = t[1] ? decodeURIComponent(t[1]) : '';
                                } catch (n) {}
                          return e;
                        },
                        optionsWithDefaults: function (n, e) {
                          var t;
                          for (t in ((n = n || {}), (e = e || {})))
                            e.hasOwnProperty(t) && (n[t] = void 0 !== n[t] ? n[t] : e[t]);
                          return n;
                        },
                        strToBytes: function (n) {
                          for (
                            var e = new ArrayBuffer(n.length), t = new Uint8Array(e), r = 0;
                            r < n.length;
                            r++
                          )
                            t[r] = n.charCodeAt(r);
                          return e;
                        },
                        strToUTF8Bytes: function (n) {
                          for (var e = [], t = 0, r = 0; r < n.length; r++) {
                            var i = n.charCodeAt(r);
                            i < 128
                              ? (e[t++] = i)
                              : (i < 2048
                                  ? (e[t++] = (i >> 6) | 192)
                                  : (55296 == (64512 & i) &&
                                    r + 1 < n.length &&
                                    56320 == (64512 & n.charCodeAt(r + 1))
                                      ? ((i =
                                          65536 + ((1023 & i) << 10) + (1023 & n.charCodeAt(++r))),
                                        (e[t++] = (i >> 18) | 240),
                                        (e[t++] = ((i >> 12) & 63) | 128))
                                      : (e[t++] = (i >> 12) | 224),
                                    (e[t++] = ((i >> 6) & 63) | 128)),
                                (e[t++] = (63 & i) | 128));
                          }
                          return e;
                        },
                        compositeFunctionBuilder: function (t) {
                          var r = [];
                          return {
                            add: function (n) {
                              return 'function' == typeof n && r.push(n), this;
                            },
                            build: function () {
                              return r.length
                                ? function () {
                                    for (var n, e = 0; e < r.length; e++)
                                      if (((n = r[e].apply(null, arguments)), t && n)) return n;
                                  }
                                : F;
                            },
                            buildBooleanAnd: function () {
                              return r.length
                                ? function () {
                                    for (var n = !0, e = 0; e < r.length; e++)
                                      n = n && r[e].apply(null, arguments);
                                    return n;
                                  }
                                : function () {
                                    return !0;
                                  };
                            },
                          };
                        },
                        transformTextSegments: function (n, e) {
                          for (var t, r = 0, i = '', o = /\s+/gi; (t = o.exec(n)); )
                            (i += e(n.substring(r, t.index))),
                              (i += t[0]),
                              (r = t.index + t[0].length);
                          return (i += e(n.substring(r)));
                        },
                        elementMatches: (function () {
                          if (!o.Element)
                            return function () {
                              return !1;
                            };
                          var n = o.Element.prototype;
                          return (
                            n.matches ||
                              (n.matches =
                                n.matchesSelector ||
                                n.mozMatchesSelector ||
                                n.msMatchesSelector ||
                                n.oMatchesSelector ||
                                n.webkitMatchesSelector ||
                                function (n) {
                                  for (
                                    var e = (this.document || this.ownerDocument).querySelectorAll(
                                        n
                                      ),
                                      t = e.length;
                                    0 <= --t && e.item(t) !== this;

                                  );
                                  return -1 < t;
                                }),
                            function (n, e) {
                              return n.matches(e);
                            }
                          );
                        })(),
                      };
                    })(E, self, O, void 0 !== L ? L : {})),
                    (function () {
                      (('undefined' !== typeof B ? B : {}) || window || this).pako = (function o (
                        a,
                        u,
                        c
                      ) {
                        function s (t, n) {
                          if (!u[t]) {
                            if (!a[t]) {
                              var e = 'function' == typeof require && require;
                              if (!n && e) return e(t, !0);
                              if (f) return f(t, !0);
                              var r = new Error("Cannot find module '" + t + "'");
                              throw ((r.code = 'MODULE_NOT_FOUND'), r);
                            }
                            var i = (u[t] = { exports: {} });
                            a[t][0].call(
                              i.exports,
                              function (n) {
                                var e = a[t][1][n];
                                return s(e || n);
                              },
                              i,
                              i.exports,
                              o,
                              a,
                              u,
                              c
                            );
                          }
                          return u[t].exports;
                        }
                        for (
                          var f = 'function' == typeof require && require, n = 0;
                          n < c.length;
                          n++
                        )
                          s(c[n]);
                        return s;
                      })(
                        {
                          1: [
                            function (n, e, t) {
                              var a = n('./zlib/deflate'),
                                u = n('./utils/common'),
                                c = n('./utils/strings'),
                                i = n('./zlib/messages'),
                                o = n('./zlib/zstream'),
                                s = Object.prototype.toString,
                                f = 0,
                                d = -1,
                                l = 0,
                                v = 8;
                              function h (n) {
                                if (!(this instanceof h)) return new h(n);
                                this.options = u.assign(
                                  {
                                    level: d,
                                    method: v,
                                    chunkSize: 16384,
                                    windowBits: 15,
                                    memLevel: 8,
                                    strategy: l,
                                    to: '',
                                  },
                                  n || {}
                                );
                                var e = this.options;
                                if (
                                  (e.raw && 0 < e.windowBits
                                    ? (e.windowBits = -e.windowBits)
                                    : e.gzip &&
                                      0 < e.windowBits &&
                                      e.windowBits < 16 &&
                                      (e.windowBits += 16),
                                  (this.err = 0),
                                  (this.msg = ''),
                                  (this.ended = !1),
                                  (this.chunks = []),
                                  (this.strm = new o()),
                                  (this.strm.avail_out = 0),
                                  (t = a.deflateInit2(
                                    this.strm,
                                    e.level,
                                    e.method,
                                    e.windowBits,
                                    e.memLevel,
                                    e.strategy
                                  )) !== f)
                                )
                                  throw new Error(i[t]);
                                if (
                                  (e.header && a.deflateSetHeader(this.strm, e.header),
                                  e.dictionary)
                                ) {
                                  var t,
                                    r =
                                      'string' == typeof e.dictionary
                                        ? c.string2buf(e.dictionary)
                                        : '[object ArrayBuffer]' === s.call(e.dictionary)
                                        ? new Uint8Array(e.dictionary)
                                        : e.dictionary;
                                  if ((t = a.deflateSetDictionary(this.strm, r)) !== f)
                                    throw new Error(i[t]);
                                  this._dict_set = !0;
                                }
                              }
                              function r (n, e) {
                                var t = new h(e);
                                if ((t.push(n, !0), t.err)) throw t.msg || i[t.err];
                                return t.result;
                              }
                              (h.prototype.push = function (n, e) {
                                var t,
                                  r,
                                  i = this.strm,
                                  o = this.options.chunkSize;
                                if (this.ended) return !1;
                                (r = e === ~~e ? e : !0 === e ? 4 : 0),
                                  'string' == typeof n
                                    ? (i.input = c.string2buf(n))
                                    : '[object ArrayBuffer]' === s.call(n)
                                    ? (i.input = new Uint8Array(n))
                                    : (i.input = n),
                                  (i.next_in = 0),
                                  (i.avail_in = i.input.length);
                                do {
                                  if (
                                    (0 === i.avail_out &&
                                      ((i.output = new u.Buf8(o)),
                                      (i.next_out = 0),
                                      (i.avail_out = o)),
                                    1 !== (t = a.deflate(i, r)) && t !== f)
                                  )
                                    return this.onEnd(t), !(this.ended = !0);
                                  (0 !== i.avail_out &&
                                    (0 !== i.avail_in || (4 !== r && 2 !== r))) ||
                                    ('string' === this.options.to
                                      ? this.onData(
                                          c.buf2binstring(u.shrinkBuf(i.output, i.next_out))
                                        )
                                      : this.onData(u.shrinkBuf(i.output, i.next_out)));
                                } while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== t);
                                return 4 === r
                                  ? ((t = a.deflateEnd(this.strm)),
                                    this.onEnd(t),
                                    (this.ended = !0),
                                    t === f)
                                  : 2 !== r || (this.onEnd(f), !(i.avail_out = 0));
                              }),
                                (h.prototype.onData = function (n) {
                                  this.chunks.push(n);
                                }),
                                (h.prototype.onEnd = function (n) {
                                  n === f &&
                                    ('string' === this.options.to
                                      ? (this.result = this.chunks.join(''))
                                      : (this.result = u.flattenChunks(this.chunks))),
                                    (this.chunks = []),
                                    (this.err = n),
                                    (this.msg = this.strm.msg);
                                }),
                                (t.Deflate = h),
                                (t.deflate = r),
                                (t.deflateRaw = function (n, e) {
                                  return ((e = e || {}).raw = !0), r(n, e);
                                }),
                                (t.gzip = function (n, e) {
                                  return ((e = e || {}).gzip = !0), r(n, e);
                                });
                            },
                            {
                              './utils/common': 2,
                              './utils/strings': 3,
                              './zlib/deflate': 6,
                              './zlib/messages': 7,
                              './zlib/zstream': 9,
                            },
                          ],
                          2: [
                            function (n, e, t) {
                              var r =
                                'undefined' != typeof Uint8Array &&
                                'undefined' != typeof Uint16Array &&
                                'undefined' != typeof Int32Array;
                              (t.assign = function (n) {
                                for (
                                  var e = Array.prototype.slice.call(arguments, 1);
                                  e.length;

                                ) {
                                  var t = e.shift();
                                  if (t) {
                                    if ('object' != typeof t)
                                      throw new TypeError(t + 'must be non-object');
                                    for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
                                  }
                                }
                                return n;
                              }),
                                (t.shrinkBuf = function (n, e) {
                                  return n.length === e
                                    ? n
                                    : n.subarray
                                    ? n.subarray(0, e)
                                    : ((n.length = e), n);
                                });
                              var i = {
                                  arraySet: function (n, e, t, r, i) {
                                    if (e.subarray && n.subarray) n.set(e.subarray(t, t + r), i);
                                    else for (var o = 0; o < r; o++) n[i + o] = e[t + o];
                                  },
                                  flattenChunks: function (n) {
                                    for (var e, t, r, i = 0, o = 0, a = n.length; o < a; o++)
                                      i += n[o].length;
                                    for (
                                      r = new Uint8Array(i), o = e = 0, a = n.length;
                                      o < a;
                                      o++
                                    )
                                      (t = n[o]), r.set(t, e), (e += t.length);
                                    return r;
                                  },
                                },
                                o = {
                                  arraySet: function (n, e, t, r, i) {
                                    for (var o = 0; o < r; o++) n[i + o] = e[t + o];
                                  },
                                  flattenChunks: function (n) {
                                    return [].concat.apply([], n);
                                  },
                                };
                              (t.setTyped = function (n) {
                                n
                                  ? ((t.Buf8 = Uint8Array),
                                    (t.Buf16 = Uint16Array),
                                    (t.Buf32 = Int32Array),
                                    t.assign(t, i))
                                  : ((t.Buf8 = Array),
                                    (t.Buf16 = Array),
                                    (t.Buf32 = Array),
                                    t.assign(t, o));
                              }),
                                t.setTyped(r);
                            },
                            {},
                          ],
                          3: [
                            function (n, e, t) {
                              var c = n('./common'),
                                i = !0,
                                o = !0;
                              try {
                                String.fromCharCode.apply(null, [0]);
                              } catch (n) {
                                i = !1;
                              }
                              try {
                                String.fromCharCode.apply(null, new Uint8Array(1));
                              } catch (n) {
                                o = !1;
                              }
                              for (var s = new c.Buf8(256), r = 0; r < 256; r++)
                                s[r] =
                                  252 <= r
                                    ? 6
                                    : 248 <= r
                                    ? 5
                                    : 240 <= r
                                    ? 4
                                    : 224 <= r
                                    ? 3
                                    : 192 <= r
                                    ? 2
                                    : 1;
                              function f (n, e) {
                                if (e < 65537 && ((n.subarray && o) || (!n.subarray && i)))
                                  return String.fromCharCode.apply(null, c.shrinkBuf(n, e));
                                for (var t = '', r = 0; r < e; r++) t += String.fromCharCode(n[r]);
                                return t;
                              }
                              (s[254] = s[254] = 1),
                                (t.string2buf = function (n) {
                                  for (var e, t, r, i, o = n.length, a = 0, u = 0; u < o; u++)
                                    55296 == (64512 & (t = n.charCodeAt(u))) &&
                                      u + 1 < o &&
                                      56320 == (64512 & (r = n.charCodeAt(u + 1))) &&
                                      ((t = 65536 + ((t - 55296) << 10) + (r - 56320)), u++),
                                      (a += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4);
                                  for (e = new c.Buf8(a), u = i = 0; i < a; u++)
                                    55296 == (64512 & (t = n.charCodeAt(u))) &&
                                      u + 1 < o &&
                                      56320 == (64512 & (r = n.charCodeAt(u + 1))) &&
                                      ((t = 65536 + ((t - 55296) << 10) + (r - 56320)), u++),
                                      t < 128
                                        ? (e[i++] = t)
                                        : (t < 2048
                                            ? (e[i++] = 192 | (t >>> 6))
                                            : (t < 65536
                                                ? (e[i++] = 224 | (t >>> 12))
                                                : ((e[i++] = 240 | (t >>> 18)),
                                                  (e[i++] = 128 | ((t >>> 12) & 63))),
                                              (e[i++] = 128 | ((t >>> 6) & 63))),
                                          (e[i++] = 128 | (63 & t)));
                                  return e;
                                }),
                                (t.buf2binstring = function (n) {
                                  return f(n, n.length);
                                }),
                                (t.binstring2buf = function (n) {
                                  for (
                                    var e = new c.Buf8(n.length), t = 0, r = e.length;
                                    t < r;
                                    t++
                                  )
                                    e[t] = n.charCodeAt(t);
                                  return e;
                                }),
                                (t.buf2string = function (n, e) {
                                  for (
                                    var t,
                                      r,
                                      i = e || n.length,
                                      o = new Array(2 * i),
                                      a = 0,
                                      u = 0;
                                    u < i;

                                  )
                                    if ((t = n[u++]) < 128) o[a++] = t;
                                    else if (4 < (r = s[t])) (o[a++] = 65533), (u += r - 1);
                                    else {
                                      for (t &= 2 === r ? 31 : 3 === r ? 15 : 7; 1 < r && u < i; )
                                        (t = (t << 6) | (63 & n[u++])), r--;
                                      1 < r
                                        ? (o[a++] = 65533)
                                        : t < 65536
                                        ? (o[a++] = t)
                                        : ((t -= 65536),
                                          (o[a++] = 55296 | ((t >> 10) & 1023)),
                                          (o[a++] = 56320 | (1023 & t)));
                                    }
                                  return f(o, a);
                                }),
                                (t.utf8border = function (n, e) {
                                  var t;
                                  for (
                                    (e = e || n.length) > n.length && (e = n.length), t = e - 1;
                                    0 <= t && 128 == (192 & n[t]);

                                  )
                                    t--;
                                  return !(t < 0) && 0 !== t && t + s[n[t]] > e ? t : e;
                                });
                            },
                            { './common': 2 },
                          ],
                          4: [
                            function (n, e, t) {
                              e.exports = function (n, e, t, r) {
                                for (
                                  var i = (65535 & n) | 0, o = ((n >>> 16) & 65535) | 0, a = 0;
                                  0 !== t;

                                ) {
                                  for (
                                    t -= a = 2000 < t ? 2000 : t;
                                    (o = (o + (i = (i + e[r++]) | 0)) | 0), --a;

                                  );
                                  (i %= 65521), (o %= 65521);
                                }
                                return i | (o << 16) | 0;
                              };
                            },
                            {},
                          ],
                          5: [
                            function (n, e, t) {
                              var u = (function () {
                                for (var n, e = [], t = 0; t < 256; t++) {
                                  n = t;
                                  for (var r = 0; r < 8; r++)
                                    n = 1 & n ? 3988292384 ^ (n >>> 1) : n >>> 1;
                                  e[t] = n;
                                }
                                return e;
                              })();
                              e.exports = function (n, e, t, r) {
                                var i = u,
                                  o = r + t;
                                n ^= -1;
                                for (var a = r; a < o; a++) n = (n >>> 8) ^ i[255 & (n ^ e[a])];
                                return -1 ^ n;
                              };
                            },
                            {},
                          ],
                          6: [
                            function (n, e, t) {
                              var c,
                                l = n('../utils/common'),
                                s = n('./trees'),
                                v = n('./adler32'),
                                h = n('./crc32'),
                                r = n('./messages'),
                                f = 0,
                                d = 4,
                                m = 0,
                                p = -2,
                                g = -1,
                                y = 4,
                                i = 2,
                                w = 8,
                                b = 9,
                                o = 286,
                                a = 30,
                                u = 19,
                                E = 2 * o + 1,
                                C = 15,
                                T = 3,
                                S = 258,
                                I = S + T + 1,
                                k = 42,
                                x = 113,
                                M = 1,
                                R = 2,
                                A = 3,
                                N = 4;
                              function D (n, e) {
                                return (n.msg = r[e]), e;
                              }
                              function _ (n) {
                                return (n << 1) - (4 < n ? 9 : 0);
                              }
                              function O (n) {
                                for (var e = n.length; 0 <= --e; ) n[e] = 0;
                              }
                              function F (n) {
                                var e = n.state,
                                  t = e.pending;
                                t > n.avail_out && (t = n.avail_out),
                                  0 !== t &&
                                    (l.arraySet(
                                      n.output,
                                      e.pending_buf,
                                      e.pending_out,
                                      t,
                                      n.next_out
                                    ),
                                    (n.next_out += t),
                                    (e.pending_out += t),
                                    (n.total_out += t),
                                    (n.avail_out -= t),
                                    (e.pending -= t),
                                    0 === e.pending && (e.pending_out = 0));
                              }
                              function L (n, e) {
                                s._tr_flush_block(
                                  n,
                                  0 <= n.block_start ? n.block_start : -1,
                                  n.strstart - n.block_start,
                                  e
                                ),
                                  (n.block_start = n.strstart),
                                  F(n.strm);
                              }
                              function P (n, e) {
                                n.pending_buf[n.pending++] = e;
                              }
                              function B (n, e) {
                                (n.pending_buf[n.pending++] = (e >>> 8) & 255),
                                  (n.pending_buf[n.pending++] = 255 & e);
                              }
                              function j (n, e) {
                                var t,
                                  r,
                                  i = n.max_chain_length,
                                  o = n.strstart,
                                  a = n.prev_length,
                                  u = n.nice_match,
                                  c = n.strstart > n.w_size - I ? n.strstart - (n.w_size - I) : 0,
                                  s = n.window,
                                  f = n.w_mask,
                                  d = n.prev,
                                  l = n.strstart + S,
                                  v = s[o + a - 1],
                                  h = s[o + a];
                                n.prev_length >= n.good_match && (i >>= 2),
                                  u > n.lookahead && (u = n.lookahead);
                                do
                                  if (
                                    s[(t = e) + a] === h &&
                                    s[t + a - 1] === v &&
                                    s[t] === s[o] &&
                                    s[++t] === s[o + 1]
                                  ) {
                                    (o += 2), t++;
                                    do;
                                    while (
                                      s[++o] === s[++t] &&
                                      s[++o] === s[++t] &&
                                      s[++o] === s[++t] &&
                                      s[++o] === s[++t] &&
                                      s[++o] === s[++t] &&
                                      s[++o] === s[++t] &&
                                      s[++o] === s[++t] &&
                                      s[++o] === s[++t] &&
                                      o < l
                                    );
                                    if (((r = S - (l - o)), (o = l - S), a < r)) {
                                      if (((n.match_start = e), u <= (a = r))) break;
                                      (v = s[o + a - 1]), (h = s[o + a]);
                                    }
                                  }
                                while ((e = d[e & f]) > c && 0 != --i);
                                return a <= n.lookahead ? a : n.lookahead;
                              }
                              function U (n) {
                                var e,
                                  t,
                                  r,
                                  i,
                                  o,
                                  a,
                                  u,
                                  c,
                                  s,
                                  f,
                                  d = n.w_size;
                                do {
                                  if (
                                    ((i = n.window_size - n.lookahead - n.strstart),
                                    n.strstart >= d + (d - I))
                                  ) {
                                    for (
                                      l.arraySet(n.window, n.window, d, d, 0),
                                        n.match_start -= d,
                                        n.strstart -= d,
                                        n.block_start -= d,
                                        e = t = n.hash_size;
                                      (r = n.head[--e]), (n.head[e] = d <= r ? r - d : 0), --t;

                                    );
                                    for (
                                      e = t = d;
                                      (r = n.prev[--e]), (n.prev[e] = d <= r ? r - d : 0), --t;

                                    );
                                    i += d;
                                  }
                                  if (0 === n.strm.avail_in) break;
                                  if (
                                    ((a = n.strm),
                                    (u = n.window),
                                    (c = n.strstart + n.lookahead),
                                    (s = i),
                                    (f = void 0),
                                    (f = a.avail_in),
                                    s < f && (f = s),
                                    (t =
                                      0 === f
                                        ? 0
                                        : ((a.avail_in -= f),
                                          l.arraySet(u, a.input, a.next_in, f, c),
                                          1 === a.state.wrap
                                            ? (a.adler = v(a.adler, u, f, c))
                                            : 2 === a.state.wrap &&
                                              (a.adler = h(a.adler, u, f, c)),
                                          (a.next_in += f),
                                          (a.total_in += f),
                                          f)),
                                    (n.lookahead += t),
                                    n.lookahead + n.insert >= T)
                                  )
                                    for (
                                      o = n.strstart - n.insert,
                                        n.ins_h = n.window[o],
                                        n.ins_h =
                                          ((n.ins_h << n.hash_shift) ^ n.window[o + 1]) &
                                          n.hash_mask;
                                      n.insert &&
                                      ((n.ins_h =
                                        ((n.ins_h << n.hash_shift) ^ n.window[o + T - 1]) &
                                        n.hash_mask),
                                      (n.prev[o & n.w_mask] = n.head[n.ins_h]),
                                      (n.head[n.ins_h] = o),
                                      o++,
                                      n.insert--,
                                      !(n.lookahead + n.insert < T));

                                    );
                                } while (n.lookahead < I && 0 !== n.strm.avail_in);
                              }
                              function H (n, e) {
                                for (var t, r; ; ) {
                                  if (n.lookahead < I) {
                                    if ((U(n), n.lookahead < I && e === f)) return M;
                                    if (0 === n.lookahead) break;
                                  }
                                  if (
                                    ((t = 0),
                                    n.lookahead >= T &&
                                      ((n.ins_h =
                                        ((n.ins_h << n.hash_shift) ^
                                          n.window[n.strstart + T - 1]) &
                                        n.hash_mask),
                                      (t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
                                      (n.head[n.ins_h] = n.strstart)),
                                    0 !== t &&
                                      n.strstart - t <= n.w_size - I &&
                                      (n.match_length = j(n, t)),
                                    n.match_length >= T)
                                  )
                                    if (
                                      ((r = s._tr_tally(
                                        n,
                                        n.strstart - n.match_start,
                                        n.match_length - T
                                      )),
                                      (n.lookahead -= n.match_length),
                                      n.match_length <= n.max_lazy_match && n.lookahead >= T)
                                    ) {
                                      for (
                                        n.match_length--;
                                        n.strstart++,
                                          (n.ins_h =
                                            ((n.ins_h << n.hash_shift) ^
                                              n.window[n.strstart + T - 1]) &
                                            n.hash_mask),
                                          (t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
                                          (n.head[n.ins_h] = n.strstart),
                                          0 != --n.match_length;

                                      );
                                      n.strstart++;
                                    } else
                                      (n.strstart += n.match_length),
                                        (n.match_length = 0),
                                        (n.ins_h = n.window[n.strstart]),
                                        (n.ins_h =
                                          ((n.ins_h << n.hash_shift) ^ n.window[n.strstart + 1]) &
                                          n.hash_mask);
                                  else
                                    (r = s._tr_tally(n, 0, n.window[n.strstart])),
                                      n.lookahead--,
                                      n.strstart++;
                                  if (r && (L(n, !1), 0 === n.strm.avail_out)) return M;
                                }
                                return (
                                  (n.insert = n.strstart < T - 1 ? n.strstart : T - 1),
                                  e === d
                                    ? (L(n, !0), 0 === n.strm.avail_out ? A : N)
                                    : n.last_lit && (L(n, !1), 0 === n.strm.avail_out)
                                    ? M
                                    : R
                                );
                              }
                              function V (n, e) {
                                for (var t, r, i; ; ) {
                                  if (n.lookahead < I) {
                                    if ((U(n), n.lookahead < I && e === f)) return M;
                                    if (0 === n.lookahead) break;
                                  }
                                  if (
                                    ((t = 0),
                                    n.lookahead >= T &&
                                      ((n.ins_h =
                                        ((n.ins_h << n.hash_shift) ^
                                          n.window[n.strstart + T - 1]) &
                                        n.hash_mask),
                                      (t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
                                      (n.head[n.ins_h] = n.strstart)),
                                    (n.prev_length = n.match_length),
                                    (n.prev_match = n.match_start),
                                    (n.match_length = T - 1),
                                    0 !== t &&
                                      n.prev_length < n.max_lazy_match &&
                                      n.strstart - t <= n.w_size - I &&
                                      ((n.match_length = j(n, t)),
                                      n.match_length <= 5 &&
                                        (1 === n.strategy ||
                                          (n.match_length === T &&
                                            4096 < n.strstart - n.match_start)) &&
                                        (n.match_length = T - 1)),
                                    n.prev_length >= T && n.match_length <= n.prev_length)
                                  ) {
                                    for (
                                      i = n.strstart + n.lookahead - T,
                                        r = s._tr_tally(
                                          n,
                                          n.strstart - 1 - n.prev_match,
                                          n.prev_length - T
                                        ),
                                        n.lookahead -= n.prev_length - 1,
                                        n.prev_length -= 2;
                                      ++n.strstart <= i &&
                                        ((n.ins_h =
                                          ((n.ins_h << n.hash_shift) ^
                                            n.window[n.strstart + T - 1]) &
                                          n.hash_mask),
                                        (t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h]),
                                        (n.head[n.ins_h] = n.strstart)),
                                        0 != --n.prev_length;

                                    );
                                    if (
                                      ((n.match_available = 0),
                                      (n.match_length = T - 1),
                                      n.strstart++,
                                      r && (L(n, !1), 0 === n.strm.avail_out))
                                    )
                                      return M;
                                  } else if (n.match_available) {
                                    if (
                                      ((r = s._tr_tally(n, 0, n.window[n.strstart - 1])) &&
                                        L(n, !1),
                                      n.strstart++,
                                      n.lookahead--,
                                      0 === n.strm.avail_out)
                                    )
                                      return M;
                                  } else (n.match_available = 1), n.strstart++, n.lookahead--;
                                }
                                return (
                                  n.match_available &&
                                    ((r = s._tr_tally(n, 0, n.window[n.strstart - 1])),
                                    (n.match_available = 0)),
                                  (n.insert = n.strstart < T - 1 ? n.strstart : T - 1),
                                  e === d
                                    ? (L(n, !0), 0 === n.strm.avail_out ? A : N)
                                    : n.last_lit && (L(n, !1), 0 === n.strm.avail_out)
                                    ? M
                                    : R
                                );
                              }
                              function q (n, e, t, r, i) {
                                (this.good_length = n),
                                  (this.max_lazy = e),
                                  (this.nice_length = t),
                                  (this.max_chain = r),
                                  (this.func = i);
                              }
                              function z () {
                                (this.strm = null),
                                  (this.status = 0),
                                  (this.pending_buf = null),
                                  (this.pending_buf_size = 0),
                                  (this.pending_out = 0),
                                  (this.pending = 0),
                                  (this.wrap = 0),
                                  (this.gzhead = null),
                                  (this.gzindex = 0),
                                  (this.method = w),
                                  (this.last_flush = -1),
                                  (this.w_size = 0),
                                  (this.w_bits = 0),
                                  (this.w_mask = 0),
                                  (this.window = null),
                                  (this.window_size = 0),
                                  (this.prev = null),
                                  (this.head = null),
                                  (this.ins_h = 0),
                                  (this.hash_size = 0),
                                  (this.hash_bits = 0),
                                  (this.hash_mask = 0),
                                  (this.hash_shift = 0),
                                  (this.block_start = 0),
                                  (this.match_length = 0),
                                  (this.prev_match = 0),
                                  (this.match_available = 0),
                                  (this.strstart = 0),
                                  (this.match_start = 0),
                                  (this.lookahead = 0),
                                  (this.prev_length = 0),
                                  (this.max_chain_length = 0),
                                  (this.max_lazy_match = 0),
                                  (this.level = 0),
                                  (this.strategy = 0),
                                  (this.good_match = 0),
                                  (this.nice_match = 0),
                                  (this.dyn_ltree = new l.Buf16(2 * E)),
                                  (this.dyn_dtree = new l.Buf16(2 * (2 * a + 1))),
                                  (this.bl_tree = new l.Buf16(2 * (2 * u + 1))),
                                  O(this.dyn_ltree),
                                  O(this.dyn_dtree),
                                  O(this.bl_tree),
                                  (this.l_desc = null),
                                  (this.d_desc = null),
                                  (this.bl_desc = null),
                                  (this.bl_count = new l.Buf16(C + 1)),
                                  (this.heap = new l.Buf16(2 * o + 1)),
                                  O(this.heap),
                                  (this.heap_len = 0),
                                  (this.heap_max = 0),
                                  (this.depth = new l.Buf16(2 * o + 1)),
                                  O(this.depth),
                                  (this.l_buf = 0),
                                  (this.lit_bufsize = 0),
                                  (this.last_lit = 0),
                                  (this.d_buf = 0),
                                  (this.opt_len = 0),
                                  (this.static_len = 0),
                                  (this.matches = 0),
                                  (this.insert = 0),
                                  (this.bi_buf = 0),
                                  (this.bi_valid = 0);
                              }
                              function W (n) {
                                var e;
                                return n && n.state
                                  ? ((n.total_in = n.total_out = 0),
                                    (n.data_type = i),
                                    ((e = n.state).pending = 0),
                                    (e.pending_out = 0),
                                    e.wrap < 0 && (e.wrap = -e.wrap),
                                    (e.status = e.wrap ? k : x),
                                    (n.adler = 2 === e.wrap ? 0 : 1),
                                    (e.last_flush = f),
                                    s._tr_init(e),
                                    m)
                                  : D(n, p);
                              }
                              function X (n) {
                                var e,
                                  t = W(n);
                                return (
                                  t === m &&
                                    (((e = n.state).window_size = 2 * e.w_size),
                                    O(e.head),
                                    (e.max_lazy_match = c[e.level].max_lazy),
                                    (e.good_match = c[e.level].good_length),
                                    (e.nice_match = c[e.level].nice_length),
                                    (e.max_chain_length = c[e.level].max_chain),
                                    (e.strstart = 0),
                                    (e.block_start = 0),
                                    (e.lookahead = 0),
                                    (e.insert = 0),
                                    (e.match_length = e.prev_length = T - 1),
                                    (e.match_available = 0),
                                    (e.ins_h = 0)),
                                  t
                                );
                              }
                              function G (n, e, t, r, i, o) {
                                if (!n) return p;
                                var a = 1;
                                if (
                                  (e === g && (e = 6),
                                  r < 0 ? ((a = 0), (r = -r)) : 15 < r && ((a = 2), (r -= 16)),
                                  i < 1 ||
                                    b < i ||
                                    t !== w ||
                                    r < 8 ||
                                    15 < r ||
                                    e < 0 ||
                                    9 < e ||
                                    o < 0 ||
                                    y < o)
                                )
                                  return D(n, p);
                                8 === r && (r = 9);
                                var u = new z();
                                return (
                                  ((n.state = u).strm = n),
                                  (u.wrap = a),
                                  (u.gzhead = null),
                                  (u.w_bits = r),
                                  (u.w_size = 1 << u.w_bits),
                                  (u.w_mask = u.w_size - 1),
                                  (u.hash_bits = i + 7),
                                  (u.hash_size = 1 << u.hash_bits),
                                  (u.hash_mask = u.hash_size - 1),
                                  (u.hash_shift = ~~((u.hash_bits + T - 1) / T)),
                                  (u.window = new l.Buf8(2 * u.w_size)),
                                  (u.head = new l.Buf16(u.hash_size)),
                                  (u.prev = new l.Buf16(u.w_size)),
                                  (u.lit_bufsize = 1 << (i + 6)),
                                  (u.pending_buf_size = 4 * u.lit_bufsize),
                                  (u.pending_buf = new l.Buf8(u.pending_buf_size)),
                                  (u.d_buf = +u.lit_bufsize),
                                  (u.l_buf = 3 * u.lit_bufsize),
                                  (u.level = e),
                                  (u.strategy = o),
                                  (u.method = t),
                                  X(n)
                                );
                              }
                              (c = [
                                new q(0, 0, 0, 0, function (n, e) {
                                  var t = 65535;
                                  for (
                                    t > n.pending_buf_size - 5 && (t = n.pending_buf_size - 5);
                                    ;

                                  ) {
                                    if (n.lookahead <= 1) {
                                      if ((U(n), 0 === n.lookahead && e === f)) return M;
                                      if (0 === n.lookahead) break;
                                    }
                                    (n.strstart += n.lookahead), (n.lookahead = 0);
                                    var r = n.block_start + t;
                                    if (
                                      (0 === n.strstart || n.strstart >= r) &&
                                      ((n.lookahead = n.strstart - r),
                                      (n.strstart = r),
                                      L(n, !1),
                                      0 === n.strm.avail_out)
                                    )
                                      return M;
                                    if (
                                      n.strstart - n.block_start >= n.w_size - I &&
                                      (L(n, !1), 0 === n.strm.avail_out)
                                    )
                                      return M;
                                  }
                                  return (
                                    (n.insert = 0),
                                    e === d
                                      ? (L(n, !0), 0 === n.strm.avail_out ? A : N)
                                      : (n.strstart > n.block_start &&
                                          (L(n, !1), n.strm.avail_out),
                                        M)
                                  );
                                }),
                                new q(4, 4, 8, 4, H),
                                new q(4, 5, 16, 8, H),
                                new q(4, 6, 32, 32, H),
                                new q(4, 4, 16, 16, V),
                                new q(8, 16, 32, 32, V),
                                new q(8, 16, 128, 128, V),
                                new q(8, 32, 128, 256, V),
                                new q(32, 128, 258, 1024, V),
                                new q(32, 258, 258, 4096, V),
                              ]),
                                (t.deflateInit = function (n, e) {
                                  return G(n, e, w, 15, 8, 0);
                                }),
                                (t.deflateInit2 = G),
                                (t.deflateReset = X),
                                (t.deflateResetKeep = W),
                                (t.deflateSetHeader = function (n, e) {
                                  return !n || !n.state || 2 !== n.state.wrap
                                    ? p
                                    : ((n.state.gzhead = e), m);
                                }),
                                (t.deflate = function (n, e) {
                                  var t, r, i, o, a;
                                  if (!n || !n.state || 5 < e || e < 0) return n ? D(n, p) : p;
                                  if (
                                    ((r = n.state),
                                    !n.output ||
                                      (!n.input && 0 !== n.avail_in) ||
                                      (666 === r.status && e !== d))
                                  )
                                    return D(n, 0 === n.avail_out ? -5 : p);
                                  if (
                                    ((r.strm = n),
                                    (t = r.last_flush),
                                    (r.last_flush = e),
                                    r.status === k &&
                                      (2 === r.wrap
                                        ? ((n.adler = 0),
                                          P(r, 31),
                                          P(r, 139),
                                          P(r, 8),
                                          r.gzhead
                                            ? (P(
                                                r,
                                                (r.gzhead.text ? 1 : 0) +
                                                  (r.gzhead.hcrc ? 2 : 0) +
                                                  (r.gzhead.extra ? 4 : 0) +
                                                  (r.gzhead.name ? 8 : 0) +
                                                  (r.gzhead.comment ? 16 : 0)
                                              ),
                                              P(r, 255 & r.gzhead.time),
                                              P(r, (r.gzhead.time >> 8) & 255),
                                              P(r, (r.gzhead.time >> 16) & 255),
                                              P(r, (r.gzhead.time >> 24) & 255),
                                              P(
                                                r,
                                                9 === r.level
                                                  ? 2
                                                  : 2 <= r.strategy || r.level < 2
                                                  ? 4
                                                  : 0
                                              ),
                                              P(r, 255 & r.gzhead.os),
                                              r.gzhead.extra &&
                                                r.gzhead.extra.length &&
                                                (P(r, 255 & r.gzhead.extra.length),
                                                P(r, (r.gzhead.extra.length >> 8) & 255)),
                                              r.gzhead.hcrc &&
                                                (n.adler = h(
                                                  n.adler,
                                                  r.pending_buf,
                                                  r.pending,
                                                  0
                                                )),
                                              (r.gzindex = 0),
                                              (r.status = 69))
                                            : (P(r, 0),
                                              P(r, 0),
                                              P(r, 0),
                                              P(r, 0),
                                              P(r, 0),
                                              P(
                                                r,
                                                9 === r.level
                                                  ? 2
                                                  : 2 <= r.strategy || r.level < 2
                                                  ? 4
                                                  : 0
                                              ),
                                              P(r, 3),
                                              (r.status = x)))
                                        : ((a = (w + ((r.w_bits - 8) << 4)) << 8),
                                          (a |=
                                            (2 <= r.strategy || r.level < 2
                                              ? 0
                                              : r.level < 6
                                              ? 1
                                              : 6 === r.level
                                              ? 2
                                              : 3) << 6),
                                          0 !== r.strstart && (a |= 32),
                                          (a += 31 - (a % 31)),
                                          (r.status = x),
                                          B(r, a),
                                          0 !== r.strstart &&
                                            (B(r, n.adler >>> 16), B(r, 65535 & n.adler)),
                                          (n.adler = 1))),
                                    69 === r.status)
                                  )
                                    if (r.gzhead.extra) {
                                      for (
                                        i = r.pending;
                                        r.gzindex < (65535 & r.gzhead.extra.length) &&
                                        (r.pending !== r.pending_buf_size ||
                                          (r.gzhead.hcrc &&
                                            r.pending > i &&
                                            (n.adler = h(
                                              n.adler,
                                              r.pending_buf,
                                              r.pending - i,
                                              i
                                            )),
                                          F(n),
                                          (i = r.pending),
                                          r.pending !== r.pending_buf_size));

                                      )
                                        P(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;
                                      r.gzhead.hcrc &&
                                        r.pending > i &&
                                        (n.adler = h(n.adler, r.pending_buf, r.pending - i, i)),
                                        r.gzindex === r.gzhead.extra.length &&
                                          ((r.gzindex = 0), (r.status = 73));
                                    } else r.status = 73;
                                  if (73 === r.status)
                                    if (r.gzhead.name) {
                                      i = r.pending;
                                      do {
                                        if (
                                          r.pending === r.pending_buf_size &&
                                          (r.gzhead.hcrc &&
                                            r.pending > i &&
                                            (n.adler = h(
                                              n.adler,
                                              r.pending_buf,
                                              r.pending - i,
                                              i
                                            )),
                                          F(n),
                                          (i = r.pending),
                                          r.pending === r.pending_buf_size)
                                        ) {
                                          o = 1;
                                          break;
                                        }
                                        (o =
                                          r.gzindex < r.gzhead.name.length
                                            ? 255 & r.gzhead.name.charCodeAt(r.gzindex++)
                                            : 0),
                                          P(r, o);
                                      } while (0 !== o);
                                      r.gzhead.hcrc &&
                                        r.pending > i &&
                                        (n.adler = h(n.adler, r.pending_buf, r.pending - i, i)),
                                        0 === o && ((r.gzindex = 0), (r.status = 91));
                                    } else r.status = 91;
                                  if (91 === r.status)
                                    if (r.gzhead.comment) {
                                      i = r.pending;
                                      do {
                                        if (
                                          r.pending === r.pending_buf_size &&
                                          (r.gzhead.hcrc &&
                                            r.pending > i &&
                                            (n.adler = h(
                                              n.adler,
                                              r.pending_buf,
                                              r.pending - i,
                                              i
                                            )),
                                          F(n),
                                          (i = r.pending),
                                          r.pending === r.pending_buf_size)
                                        ) {
                                          o = 1;
                                          break;
                                        }
                                        (o =
                                          r.gzindex < r.gzhead.comment.length
                                            ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                                            : 0),
                                          P(r, o);
                                      } while (0 !== o);
                                      r.gzhead.hcrc &&
                                        r.pending > i &&
                                        (n.adler = h(n.adler, r.pending_buf, r.pending - i, i)),
                                        0 === o && (r.status = 103);
                                    } else r.status = 103;
                                  if (
                                    (103 === r.status &&
                                      (r.gzhead.hcrc
                                        ? (r.pending + 2 > r.pending_buf_size && F(n),
                                          r.pending + 2 <= r.pending_buf_size &&
                                            (P(r, 255 & n.adler),
                                            P(r, (n.adler >> 8) & 255),
                                            (n.adler = 0),
                                            (r.status = x)))
                                        : (r.status = x)),
                                    0 !== r.pending)
                                  ) {
                                    if ((F(n), 0 === n.avail_out)) return (r.last_flush = -1), m;
                                  } else if (0 === n.avail_in && _(e) <= _(t) && e !== d)
                                    return D(n, -5);
                                  if (666 === r.status && 0 !== n.avail_in) return D(n, -5);
                                  if (
                                    0 !== n.avail_in ||
                                    0 !== r.lookahead ||
                                    (e !== f && 666 !== r.status)
                                  ) {
                                    var u =
                                      2 === r.strategy
                                        ? (function (n, e) {
                                            for (var t; ; ) {
                                              if (0 === n.lookahead && (U(n), 0 === n.lookahead)) {
                                                if (e === f) return M;
                                                break;
                                              }
                                              if (
                                                ((n.match_length = 0),
                                                (t = s._tr_tally(n, 0, n.window[n.strstart])),
                                                n.lookahead--,
                                                n.strstart++,
                                                t && (L(n, !1), 0 === n.strm.avail_out))
                                              )
                                                return M;
                                            }
                                            return (
                                              (n.insert = 0),
                                              e === d
                                                ? (L(n, !0), 0 === n.strm.avail_out ? A : N)
                                                : n.last_lit && (L(n, !1), 0 === n.strm.avail_out)
                                                ? M
                                                : R
                                            );
                                          })(r, e)
                                        : 3 === r.strategy
                                        ? (function (n, e) {
                                            for (var t, r, i, o, a = n.window; ; ) {
                                              if (n.lookahead <= S) {
                                                if ((U(n), n.lookahead <= S && e === f)) return M;
                                                if (0 === n.lookahead) break;
                                              }
                                              if (
                                                ((n.match_length = 0),
                                                n.lookahead >= T &&
                                                  0 < n.strstart &&
                                                  (r = a[(i = n.strstart - 1)]) === a[++i] &&
                                                  r === a[++i] &&
                                                  r === a[++i])
                                              ) {
                                                o = n.strstart + S;
                                                do;
                                                while (
                                                  r === a[++i] &&
                                                  r === a[++i] &&
                                                  r === a[++i] &&
                                                  r === a[++i] &&
                                                  r === a[++i] &&
                                                  r === a[++i] &&
                                                  r === a[++i] &&
                                                  r === a[++i] &&
                                                  i < o
                                                );
                                                (n.match_length = S - (o - i)),
                                                  n.match_length > n.lookahead &&
                                                    (n.match_length = n.lookahead);
                                              }
                                              if (
                                                (n.match_length >= T
                                                  ? ((t = s._tr_tally(n, 1, n.match_length - T)),
                                                    (n.lookahead -= n.match_length),
                                                    (n.strstart += n.match_length),
                                                    (n.match_length = 0))
                                                  : ((t = s._tr_tally(n, 0, n.window[n.strstart])),
                                                    n.lookahead--,
                                                    n.strstart++),
                                                t && (L(n, !1), 0 === n.strm.avail_out))
                                              )
                                                return M;
                                            }
                                            return (
                                              (n.insert = 0),
                                              e === d
                                                ? (L(n, !0), 0 === n.strm.avail_out ? A : N)
                                                : n.last_lit && (L(n, !1), 0 === n.strm.avail_out)
                                                ? M
                                                : R
                                            );
                                          })(r, e)
                                        : c[r.level].func(r, e);
                                    if (
                                      ((u !== A && u !== N) || (r.status = 666),
                                      u === M || u === A)
                                    )
                                      return 0 === n.avail_out && (r.last_flush = -1), m;
                                    if (
                                      u === R &&
                                      (1 === e
                                        ? s._tr_align(r)
                                        : 5 !== e &&
                                          (s._tr_stored_block(r, 0, 0, !1),
                                          3 === e &&
                                            (O(r.head),
                                            0 === r.lookahead &&
                                              ((r.strstart = 0),
                                              (r.block_start = 0),
                                              (r.insert = 0)))),
                                      F(n),
                                      0 === n.avail_out)
                                    )
                                      return (r.last_flush = -1), m;
                                  }
                                  return e !== d
                                    ? m
                                    : r.wrap <= 0
                                    ? 1
                                    : (2 === r.wrap
                                        ? (P(r, 255 & n.adler),
                                          P(r, (n.adler >> 8) & 255),
                                          P(r, (n.adler >> 16) & 255),
                                          P(r, (n.adler >> 24) & 255),
                                          P(r, 255 & n.total_in),
                                          P(r, (n.total_in >> 8) & 255),
                                          P(r, (n.total_in >> 16) & 255),
                                          P(r, (n.total_in >> 24) & 255))
                                        : (B(r, n.adler >>> 16), B(r, 65535 & n.adler)),
                                      F(n),
                                      0 < r.wrap && (r.wrap = -r.wrap),
                                      0 !== r.pending ? m : 1);
                                }),
                                (t.deflateEnd = function (n) {
                                  var e;
                                  return n && n.state
                                    ? (e = n.state.status) !== k &&
                                      69 !== e &&
                                      73 !== e &&
                                      91 !== e &&
                                      103 !== e &&
                                      e !== x &&
                                      666 !== e
                                      ? D(n, p)
                                      : ((n.state = null), e === x ? D(n, -3) : m)
                                    : p;
                                }),
                                (t.deflateSetDictionary = function (n, e) {
                                  var t,
                                    r,
                                    i,
                                    o,
                                    a,
                                    u,
                                    c,
                                    s,
                                    f = e.length;
                                  if (!n || !n.state) return p;
                                  if (
                                    2 === (o = (t = n.state).wrap) ||
                                    (1 === o && t.status !== k) ||
                                    t.lookahead
                                  )
                                    return p;
                                  for (
                                    1 === o && (n.adler = v(n.adler, e, f, 0)),
                                      t.wrap = 0,
                                      f >= t.w_size &&
                                        (0 === o &&
                                          (O(t.head),
                                          (t.strstart = 0),
                                          (t.block_start = 0),
                                          (t.insert = 0)),
                                        (s = new l.Buf8(t.w_size)),
                                        l.arraySet(s, e, f - t.w_size, t.w_size, 0),
                                        (e = s),
                                        (f = t.w_size)),
                                      a = n.avail_in,
                                      u = n.next_in,
                                      c = n.input,
                                      n.avail_in = f,
                                      n.next_in = 0,
                                      n.input = e,
                                      U(t);
                                    t.lookahead >= T;

                                  ) {
                                    for (
                                      r = t.strstart, i = t.lookahead - (T - 1);
                                      (t.ins_h =
                                        ((t.ins_h << t.hash_shift) ^ t.window[r + T - 1]) &
                                        t.hash_mask),
                                        (t.prev[r & t.w_mask] = t.head[t.ins_h]),
                                        (t.head[t.ins_h] = r),
                                        r++,
                                        --i;

                                    );
                                    (t.strstart = r), (t.lookahead = T - 1), U(t);
                                  }
                                  return (
                                    (t.strstart += t.lookahead),
                                    (t.block_start = t.strstart),
                                    (t.insert = t.lookahead),
                                    (t.lookahead = 0),
                                    (t.match_length = t.prev_length = T - 1),
                                    (t.match_available = 0),
                                    (n.next_in = u),
                                    (n.input = c),
                                    (n.avail_in = a),
                                    (t.wrap = o),
                                    m
                                  );
                                }),
                                (t.deflateInfo = 'pako deflate (from Nodeca project)');
                            },
                            {
                              '../utils/common': 2,
                              './adler32': 4,
                              './crc32': 5,
                              './messages': 7,
                              './trees': 8,
                            },
                          ],
                          7: [
                            function (n, e, t) {
                              e.exports = {
                                2: 'need dictionary',
                                1: 'stream end',
                                0: '',
                                '-1': 'file error',
                                '-2': 'stream error',
                                '-3': 'data error',
                                '-4': 'insufficient memory',
                                '-5': 'buffer error',
                                '-6': 'incompatible version',
                              };
                            },
                            {},
                          ],
                          8: [
                            function (n, e, t) {
                              var c = n('../utils/common'),
                                u = 0,
                                s = 1;
                              function r (n) {
                                for (var e = n.length; 0 <= --e; ) n[e] = 0;
                              }
                              var f = 0,
                                a = 29,
                                d = 256,
                                l = d + 1 + a,
                                v = 30,
                                h = 19,
                                p = 2 * l + 1,
                                g = 15,
                                i = 16,
                                m = 7,
                                y = 256,
                                w = 16,
                                b = 17,
                                E = 18,
                                C = [
                                  0,
                                  0,
                                  0,
                                  0,
                                  0,
                                  0,
                                  0,
                                  0,
                                  1,
                                  1,
                                  1,
                                  1,
                                  2,
                                  2,
                                  2,
                                  2,
                                  3,
                                  3,
                                  3,
                                  3,
                                  4,
                                  4,
                                  4,
                                  4,
                                  5,
                                  5,
                                  5,
                                  5,
                                  0,
                                ],
                                T = [
                                  0,
                                  0,
                                  0,
                                  0,
                                  1,
                                  1,
                                  2,
                                  2,
                                  3,
                                  3,
                                  4,
                                  4,
                                  5,
                                  5,
                                  6,
                                  6,
                                  7,
                                  7,
                                  8,
                                  8,
                                  9,
                                  9,
                                  10,
                                  10,
                                  11,
                                  11,
                                  12,
                                  12,
                                  13,
                                  13,
                                ],
                                S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                                I = [
                                  16,
                                  17,
                                  18,
                                  0,
                                  8,
                                  7,
                                  9,
                                  6,
                                  10,
                                  5,
                                  11,
                                  4,
                                  12,
                                  3,
                                  13,
                                  2,
                                  14,
                                  1,
                                  15,
                                ],
                                k = new Array(2 * (l + 2));
                              r(k);
                              var x = new Array(2 * v);
                              r(x);
                              var M = new Array(512);
                              r(M);
                              var R = new Array(256);
                              r(R);
                              var A = new Array(a);
                              r(A);
                              var N,
                                D,
                                _,
                                O = new Array(v);
                              function F (n, e, t, r, i) {
                                (this.static_tree = n),
                                  (this.extra_bits = e),
                                  (this.extra_base = t),
                                  (this.elems = r),
                                  (this.max_length = i),
                                  (this.has_stree = n && n.length);
                              }
                              function o (n, e) {
                                (this.dyn_tree = n), (this.max_code = 0), (this.stat_desc = e);
                              }
                              function L (n) {
                                return n < 256 ? M[n] : M[256 + (n >>> 7)];
                              }
                              function P (n, e) {
                                (n.pending_buf[n.pending++] = 255 & e),
                                  (n.pending_buf[n.pending++] = (e >>> 8) & 255);
                              }
                              function B (n, e, t) {
                                n.bi_valid > i - t
                                  ? ((n.bi_buf |= (e << n.bi_valid) & 65535),
                                    P(n, n.bi_buf),
                                    (n.bi_buf = e >> (i - n.bi_valid)),
                                    (n.bi_valid += t - i))
                                  : ((n.bi_buf |= (e << n.bi_valid) & 65535), (n.bi_valid += t));
                              }
                              function j (n, e, t) {
                                B(n, t[2 * e], t[2 * e + 1]);
                              }
                              function U (n, e) {
                                for (var t = 0; (t |= 1 & n), (n >>>= 1), (t <<= 1), 0 < --e; );
                                return t >>> 1;
                              }
                              function H (n, e, t) {
                                for (var r, i = new Array(g + 1), o = 0, a = 1; a <= g; a++)
                                  i[a] = o = (o + t[a - 1]) << 1;
                                for (r = 0; r <= e; r++) {
                                  var u = n[2 * r + 1];
                                  0 !== u && (n[2 * r] = U(i[u]++, u));
                                }
                              }
                              function V (n) {
                                for (var e = 0; e < l; e++) n.dyn_ltree[2 * e] = 0;
                                for (e = 0; e < v; e++) n.dyn_dtree[2 * e] = 0;
                                for (e = 0; e < h; e++) n.bl_tree[2 * e] = 0;
                                (n.dyn_ltree[2 * y] = 1),
                                  (n.opt_len = n.static_len = 0),
                                  (n.last_lit = n.matches = 0);
                              }
                              function q (n) {
                                8 < n.bi_valid
                                  ? P(n, n.bi_buf)
                                  : 0 < n.bi_valid && (n.pending_buf[n.pending++] = n.bi_buf),
                                  (n.bi_buf = 0),
                                  (n.bi_valid = 0);
                              }
                              function z (n, e, t, r) {
                                var i = 2 * e,
                                  o = 2 * t;
                                return n[i] < n[o] || (n[i] === n[o] && r[e] <= r[t]);
                              }
                              function W (n, e, t) {
                                for (
                                  var r = n.heap[t], i = t << 1;
                                  i <= n.heap_len &&
                                  (i < n.heap_len &&
                                    z(e, n.heap[i + 1], n.heap[i], n.depth) &&
                                    i++,
                                  !z(e, r, n.heap[i], n.depth));

                                )
                                  (n.heap[t] = n.heap[i]), (t = i), (i <<= 1);
                                n.heap[t] = r;
                              }
                              function X (n, e, t) {
                                var r,
                                  i,
                                  o,
                                  a,
                                  u = 0;
                                if (0 !== n.last_lit)
                                  for (
                                    ;
                                    (r =
                                      (n.pending_buf[n.d_buf + 2 * u] << 8) |
                                      n.pending_buf[n.d_buf + 2 * u + 1]),
                                      (i = n.pending_buf[n.l_buf + u]),
                                      u++,
                                      0 == r
                                        ? j(n, i, e)
                                        : (j(n, (o = R[i]) + d + 1, e),
                                          0 !== (a = C[o]) && B(n, (i -= A[o]), a),
                                          j(n, (o = L(--r)), t),
                                          0 !== (a = T[o]) && B(n, (r -= O[o]), a)),
                                      u < n.last_lit;

                                  );
                                j(n, y, e);
                              }
                              function G (n, e) {
                                var t,
                                  r,
                                  i,
                                  o = e.dyn_tree,
                                  a = e.stat_desc.static_tree,
                                  u = e.stat_desc.has_stree,
                                  c = e.stat_desc.elems,
                                  s = -1;
                                for (n.heap_len = 0, n.heap_max = p, t = 0; t < c; t++)
                                  0 !== o[2 * t]
                                    ? ((n.heap[++n.heap_len] = s = t), (n.depth[t] = 0))
                                    : (o[2 * t + 1] = 0);
                                for (; n.heap_len < 2; )
                                  (o[2 * (i = n.heap[++n.heap_len] = s < 2 ? ++s : 0)] = 1),
                                    (n.depth[i] = 0),
                                    n.opt_len--,
                                    u && (n.static_len -= a[2 * i + 1]);
                                for (e.max_code = s, t = n.heap_len >> 1; 1 <= t; t--) W(n, o, t);
                                for (
                                  i = c;
                                  (t = n.heap[1]),
                                    (n.heap[1] = n.heap[n.heap_len--]),
                                    W(n, o, 1),
                                    (r = n.heap[1]),
                                    (n.heap[--n.heap_max] = t),
                                    (n.heap[--n.heap_max] = r),
                                    (o[2 * i] = o[2 * t] + o[2 * r]),
                                    (n.depth[i] =
                                      (n.depth[t] >= n.depth[r] ? n.depth[t] : n.depth[r]) + 1),
                                    (o[2 * t + 1] = o[2 * r + 1] = i),
                                    (n.heap[1] = i++),
                                    W(n, o, 1),
                                    2 <= n.heap_len;

                                );
                                (n.heap[--n.heap_max] = n.heap[1]),
                                  (function (n, e) {
                                    for (
                                      var t,
                                        r,
                                        i,
                                        o,
                                        a,
                                        u = e.dyn_tree,
                                        c = e.max_code,
                                        s = e.stat_desc.static_tree,
                                        f = e.stat_desc.has_stree,
                                        d = e.stat_desc.extra_bits,
                                        l = e.stat_desc.extra_base,
                                        v = e.stat_desc.max_length,
                                        h = 0,
                                        m = 0;
                                      m <= g;
                                      m++
                                    )
                                      n.bl_count[m] = 0;
                                    for (
                                      u[2 * n.heap[n.heap_max] + 1] = 0, t = n.heap_max + 1;
                                      t < p;
                                      t++
                                    )
                                      v < (m = u[2 * u[2 * (r = n.heap[t]) + 1] + 1] + 1) &&
                                        ((m = v), h++),
                                        (u[2 * r + 1] = m),
                                        c < r ||
                                          (n.bl_count[m]++,
                                          (o = 0),
                                          l <= r && (o = d[r - l]),
                                          (a = u[2 * r]),
                                          (n.opt_len += a * (m + o)),
                                          f && (n.static_len += a * (s[2 * r + 1] + o)));
                                    if (0 !== h) {
                                      do {
                                        for (m = v - 1; 0 === n.bl_count[m]; ) m--;
                                        n.bl_count[m]--,
                                          (n.bl_count[m + 1] += 2),
                                          n.bl_count[v]--,
                                          (h -= 2);
                                      } while (0 < h);
                                      for (m = v; 0 !== m; m--)
                                        for (r = n.bl_count[m]; 0 !== r; )
                                          c < (i = n.heap[--t]) ||
                                            (u[2 * i + 1] !== m &&
                                              ((n.opt_len += (m - u[2 * i + 1]) * u[2 * i]),
                                              (u[2 * i + 1] = m)),
                                            r--);
                                    }
                                  })(n, e),
                                  H(o, s, n.bl_count);
                              }
                              function J (n, e, t) {
                                var r,
                                  i,
                                  o = -1,
                                  a = e[1],
                                  u = 0,
                                  c = 7,
                                  s = 4;
                                for (
                                  0 === a && ((c = 138), (s = 3)),
                                    e[2 * (t + 1) + 1] = 65535,
                                    r = 0;
                                  r <= t;
                                  r++
                                )
                                  (i = a),
                                    (a = e[2 * (r + 1) + 1]),
                                    (++u < c && i === a) ||
                                      (u < s
                                        ? (n.bl_tree[2 * i] += u)
                                        : 0 !== i
                                        ? (i !== o && n.bl_tree[2 * i]++, n.bl_tree[2 * w]++)
                                        : u <= 10
                                        ? n.bl_tree[2 * b]++
                                        : n.bl_tree[2 * E]++,
                                      (o = i),
                                      (s =
                                        (u = 0) === a
                                          ? ((c = 138), 3)
                                          : i === a
                                          ? ((c = 6), 3)
                                          : ((c = 7), 4)));
                              }
                              function K (n, e, t) {
                                var r,
                                  i,
                                  o = -1,
                                  a = e[1],
                                  u = 0,
                                  c = 7,
                                  s = 4;
                                for (0 === a && ((c = 138), (s = 3)), r = 0; r <= t; r++)
                                  if (((i = a), (a = e[2 * (r + 1) + 1]), !(++u < c && i === a))) {
                                    if (u < s) for (; j(n, i, n.bl_tree), 0 != --u; );
                                    else
                                      0 !== i
                                        ? (i !== o && (j(n, i, n.bl_tree), u--),
                                          j(n, w, n.bl_tree),
                                          B(n, u - 3, 2))
                                        : u <= 10
                                        ? (j(n, b, n.bl_tree), B(n, u - 3, 3))
                                        : (j(n, E, n.bl_tree), B(n, u - 11, 7));
                                    (o = i),
                                      (s =
                                        (u = 0) === a
                                          ? ((c = 138), 3)
                                          : i === a
                                          ? ((c = 6), 3)
                                          : ((c = 7), 4));
                                  }
                              }
                              r(O);
                              var Q = !1;
                              function Y (n, e, t, r) {
                                var i, o, a, u;
                                B(n, (f << 1) + (r ? 1 : 0), 3),
                                  (o = e),
                                  (a = t),
                                  (u = !0),
                                  q((i = n)),
                                  u && (P(i, a), P(i, ~a)),
                                  c.arraySet(i.pending_buf, i.window, o, a, i.pending),
                                  (i.pending += a);
                              }
                              (t._tr_init = function (n) {
                                Q ||
                                  ((function () {
                                    for (
                                      var n, e, t, r = new Array(g + 1), i = 0, o = 0;
                                      o < a - 1;
                                      o++
                                    )
                                      for (A[o] = i, n = 0; n < 1 << C[o]; n++) R[i++] = o;
                                    for (R[i - 1] = o, o = t = 0; o < 16; o++)
                                      for (O[o] = t, n = 0; n < 1 << T[o]; n++) M[t++] = o;
                                    for (t >>= 7; o < v; o++)
                                      for (O[o] = t << 7, n = 0; n < 1 << (T[o] - 7); n++)
                                        M[256 + t++] = o;
                                    for (e = 0; e <= g; e++) r[e] = 0;
                                    for (n = 0; n <= 143; ) (k[2 * n + 1] = 8), n++, r[8]++;
                                    for (; n <= 255; ) (k[2 * n + 1] = 9), n++, r[9]++;
                                    for (; n <= 279; ) (k[2 * n + 1] = 7), n++, r[7]++;
                                    for (; n <= 287; ) (k[2 * n + 1] = 8), n++, r[8]++;
                                    for (H(k, l + 1, r), n = 0; n < v; n++)
                                      (x[2 * n + 1] = 5), (x[2 * n] = U(n, 5));
                                    (N = new F(k, C, d + 1, l, g)),
                                      (D = new F(x, T, 0, v, g)),
                                      (_ = new F(new Array(0), S, 0, h, m));
                                  })(),
                                  (Q = !0)),
                                  (n.l_desc = new o(n.dyn_ltree, N)),
                                  (n.d_desc = new o(n.dyn_dtree, D)),
                                  (n.bl_desc = new o(n.bl_tree, _)),
                                  (n.bi_buf = 0),
                                  (n.bi_valid = 0),
                                  V(n);
                              }),
                                (t._tr_stored_block = Y),
                                (t._tr_flush_block = function (n, e, t, r) {
                                  var i,
                                    o,
                                    a = 0;
                                  0 < n.level
                                    ? (2 === n.strm.data_type &&
                                        (n.strm.data_type = (function (n) {
                                          for (var e = 4093624447, t = 0; t <= 31; t++, e >>>= 1)
                                            if (1 & e && 0 !== n.dyn_ltree[2 * t]) return u;
                                          if (
                                            0 !== n.dyn_ltree[18] ||
                                            0 !== n.dyn_ltree[20] ||
                                            0 !== n.dyn_ltree[26]
                                          )
                                            return s;
                                          for (t = 32; t < d; t++)
                                            if (0 !== n.dyn_ltree[2 * t]) return s;
                                          return u;
                                        })(n)),
                                      G(n, n.l_desc),
                                      G(n, n.d_desc),
                                      (a = (function (n) {
                                        var e;
                                        for (
                                          J(n, n.dyn_ltree, n.l_desc.max_code),
                                            J(n, n.dyn_dtree, n.d_desc.max_code),
                                            G(n, n.bl_desc),
                                            e = h - 1;
                                          3 <= e && 0 === n.bl_tree[2 * I[e] + 1];
                                          e--
                                        );
                                        return (n.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                                      })(n)),
                                      (i = (n.opt_len + 3 + 7) >>> 3),
                                      (o = (n.static_len + 3 + 7) >>> 3) <= i && (i = o))
                                    : (i = o = t + 5),
                                    t + 4 <= i && -1 !== e
                                      ? Y(n, e, t, r)
                                      : 4 === n.strategy || o === i
                                      ? (B(n, 2 + (r ? 1 : 0), 3), X(n, k, x))
                                      : (B(n, 4 + (r ? 1 : 0), 3),
                                        (function (n, e, t, r) {
                                          var i;
                                          for (
                                            B(n, e - 257, 5),
                                              B(n, t - 1, 5),
                                              B(n, r - 4, 4),
                                              i = 0;
                                            i < r;
                                            i++
                                          )
                                            B(n, n.bl_tree[2 * I[i] + 1], 3);
                                          K(n, n.dyn_ltree, e - 1), K(n, n.dyn_dtree, t - 1);
                                        })(n, n.l_desc.max_code + 1, n.d_desc.max_code + 1, a + 1),
                                        X(n, n.dyn_ltree, n.dyn_dtree)),
                                    V(n),
                                    r && q(n);
                                }),
                                (t._tr_tally = function (n, e, t) {
                                  return (
                                    (n.pending_buf[n.d_buf + 2 * n.last_lit] = (e >>> 8) & 255),
                                    (n.pending_buf[n.d_buf + 2 * n.last_lit + 1] = 255 & e),
                                    (n.pending_buf[n.l_buf + n.last_lit] = 255 & t),
                                    n.last_lit++,
                                    0 === e
                                      ? n.dyn_ltree[2 * t]++
                                      : (n.matches++,
                                        e--,
                                        n.dyn_ltree[2 * (R[t] + d + 1)]++,
                                        n.dyn_dtree[2 * L(e)]++),
                                    n.last_lit === n.lit_bufsize - 1
                                  );
                                }),
                                (t._tr_align = function (n) {
                                  var e;
                                  B(n, 2, 3),
                                    j(n, y, k),
                                    16 === (e = n).bi_valid
                                      ? (P(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                                      : 8 <= e.bi_valid &&
                                        ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                                        (e.bi_buf >>= 8),
                                        (e.bi_valid -= 8));
                                });
                            },
                            { '../utils/common': 2 },
                          ],
                          9: [
                            function (n, e, t) {
                              e.exports = function () {
                                (this.input = null),
                                  (this.next_in = 0),
                                  (this.avail_in = 0),
                                  (this.total_in = 0),
                                  (this.output = null),
                                  (this.next_out = 0),
                                  (this.avail_out = 0),
                                  (this.total_out = 0),
                                  (this.msg = ''),
                                  (this.state = null),
                                  (this.data_type = 2),
                                  (this.adler = 0);
                              };
                            },
                            {},
                          ],
                        },
                        {},
                        [1]
                      )(1);
                    })(),
                    (function (e, n) {
                      function t (n) {
                        var e = n.charCodeAt(0);
                        return e < 128
                          ? n
                          : e < 2048
                          ? l(192 | (e >>> 6)) + l(128 | (63 & e))
                          : l(224 | ((e >>> 12) & 15)) +
                            l(128 | ((e >>> 6) & 63)) +
                            l(128 | (63 & e));
                      }
                      function r (n) {
                        return n.replace(/[^\x00-\x7F]/g, t);
                      }
                      function i (n) {
                        var e = [0, 2, 1][n.length % 3],
                          t =
                            (n.charCodeAt(0) << 16) |
                            ((1 < n.length ? n.charCodeAt(1) : 0) << 8) |
                            (2 < n.length ? n.charCodeAt(2) : 0);
                        return [
                          f.charAt(t >>> 18),
                          f.charAt((t >>> 12) & 63),
                          2 <= e ? '=' : f.charAt((t >>> 6) & 63),
                          1 <= e ? '=' : f.charAt(63 & t),
                        ].join('');
                      }
                      function o (n) {
                        return v(r(n));
                      }
                      function a (n, e) {
                        return e
                          ? o(n).replace(/[+\/]/g, function (n) {
                              return '+' == n ? '-' : '_';
                            })
                          : o(n);
                      }
                      function u (n) {
                        return l(
                          n.length < 3
                            ? ((31 & n.charCodeAt(0)) << 6) | (63 & n.charCodeAt(1))
                            : ((15 & n.charCodeAt(0)) << 12) |
                                ((63 & n.charCodeAt(1)) << 6) |
                                (63 & n.charCodeAt(2))
                        );
                      }
                      function c (n) {
                        return n.replace(m, u);
                      }
                      function s (n) {
                        return (
                          (e = n
                            .replace(/[-_]/g, function (n) {
                              return '-' == n ? '+' : '/';
                            })
                            .replace(/[^A-Za-z0-9\+\/]/g, '')),
                          c(h(e))
                        );
                        var e;
                      }
                      var f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                        d = (function (n) {
                          for (var e = {}, t = 0, r = n.length; t < r; t++) e[n.charAt(t)] = t;
                          return e;
                        })(f),
                        l = String.fromCharCode,
                        v =
                          'function' == typeof e.btoa
                            ? function (n) {
                                return e.btoa(n);
                              }
                            : function (n) {
                                return n.replace(/[\s\S]{1,3}/g, i);
                              },
                        h =
                          'function' == typeof e.atob
                            ? function (n) {
                                return e.atob(n);
                              }
                            : function (n) {
                                return n.replace(/[\s\S]{1,4}/g, p);
                              },
                        m = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}/g,
                        p = function (n) {
                          var e = n.length,
                            t = e % 4,
                            r =
                              (0 < e ? d[n.charAt(0)] << 18 : 0) |
                              (1 < e ? d[n.charAt(1)] << 12 : 0) |
                              (2 < e ? d[n.charAt(2)] << 6 : 0) |
                              (3 < e ? d[n.charAt(3)] : 0),
                            i = [l(r >>> 16), l((r >>> 8) & 255), l(255 & r)];
                          return (i.length -= [0, 0, 2, 1][t]), i.join('');
                        };
                      n.Base64 = {
                        atob: h,
                        btoa: v,
                        fromBase64: s,
                        toBase64: a,
                        bytesToBase64: function (n) {
                          for (var e, t = '', r = 0; r < n.length; r += 3)
                            (e = (252 & n[r]) >> 2),
                              (t += f.charAt(e)),
                              (e = (3 & n[r]) << 4),
                              r + 1 < n.length
                                ? ((e |= (240 & n[r + 1]) >> 4),
                                  (t += f.charAt(e)),
                                  (e = (15 & n[r + 1]) << 2),
                                  r + 2 < n.length
                                    ? ((e |= (192 & n[r + 2]) >> 6),
                                      (t += f.charAt(e)),
                                      (e = 63 & n[r + 2]),
                                      (t += f.charAt(e)))
                                    : ((t += f.charAt(e)), (t += '=')))
                                : ((t += f.charAt(e)), (t += '=='));
                          return t;
                        },
                        utob: r,
                        encode: a,
                        encodeURI: function (n) {
                          return a(n, !0);
                        },
                        btou: c,
                        decode: s,
                      };
                    })(self, void 0 !== B ? B : {}),
                    void 0 !== n && (w = rt(L)),
                    (it.prototype = {
                      toJSON: function () {
                        if (!(this instanceof it)) throw new Error('Illegal invocation');
                        return ot(this, this);
                      },
                    }),
                    (at.prototype =
                      ((v = Object.create(it.prototype)),
                      (at.prototype.constructor = at),
                      (v.toString = function () {
                        return this.type;
                      }),
                      (v.setExtraInfo = function (n, e) {
                        E.isUndefined(e)
                          ? logger.error(
                              'Failed setting value for extra info attribute: ' +
                                n +
                                '. Value is undefined'
                            )
                          : (this.extraInfo[n] = e);
                      }),
                      (v.getExtraInfo = function (n) {
                        if (E.isUndefined(this.extraInfo)) return null;
                        var e = this.extraInfo[n];
                        return void 0 === e ? null : e;
                      }),
                      (v.setDebugInfo = function (n) {
                        E.isUndefined(this.debugInfo) && (this.debugInfo = {}),
                          (this.debugInfo = n);
                      }),
                      (v.getDebugInfo = function () {
                        return this.debugInfo;
                      }),
                      (v.getSubPage = function () {
                        return this.subPage;
                      }),
                      (v.addHybridActionDataItem = function (n, e) {
                        E.isUndefined(e)
                          ? logger.error(
                              'Failed setting value for hybrid action data item: ' +
                                n +
                                '. Value is undefined'
                            )
                          : (E.isUndefined(this.hybridActionData) && (this.hybridActionData = {}),
                            (this.hybridActionData[n] = e));
                      }),
                      (v.getdHybridActionData = function () {
                        return this.hybridActionData;
                      }),
                      (v.nextId = 1),
                      v)),
                    (at.fromJSON = function (n) {
                      return (n.constructor = at), Object.setPrototypeOf(n, at.prototype), n;
                    }),
                    (at.prototype.FOCUS_TIME_ATTR = 'focusTime'),
                    (at.prototype.AUTO_COMPLETE_ATTR = 'autoComplete'),
                    (at.prototype.VISUAL_NAME = 'visualName'),
                    (at.prototype.PAGE_NAME = 'pageName'),
                    (at.prototype.WINDOW_DEPTH = 'windowDepth'),
                    (at.prototype.CONTAINER_ID = 'containerId'),
                    (at.prototype.PARENT_PAGE_ID = 'parentPageId'),
                    (at.prototype.HISTORY_LENGTH = 'historyLen'),
                    (at.prototype.TIME_SINCE_LAST_EVENT = 'timeSinceLastIdle'),
                    (at.prototype.COORDINATE_ATTR = 'coordinate'),
                    (at.prototype.SCROLL_REACH = 'scrollReach'),
                    (at.prototype.MOVES_TRUNCATED = 'truncated'),
                    (at.prototype.LOST_EVENTS_NUM = 'lostEvents'),
                    (at.prototype.TP_INTEGRATION_TYPE = 'tpIntegrationType'),
                    (at.prototype.EXTERNAL_ID = 'externalId'),
                    (at.prototype.SYNC_COORDINATE = 'syncCoordinates'),
                    (at.prototype.RAGE_SEQUENCE = 'rageSequence'),
                    (at.prototype.INDEX_IN_RAGE = 'indexInRage'),
                    (at.prototype.ZOOM = 'zoom'),
                    (at.prototype.MOBILE_HYBRID_ID = 'mobileHybridId'),
                    (at.prototype.DETECTOR_CONFIG_ID = 'detectorCfg'),
                    (at.prototype.AUTO_MASKING = 'autoMasking'),
                    (at.prototype.SCROLL_DEBOUNCED = 'scrollDebounced'),
                    (at.prototype.HOST_SELECTOR_PATH = 'hostSelectorPath'),
                    (at.prototype.SNAPSHOT_FUSE = 'snapshotFuse'),
                    (at.prototype.SELECTOR_ACTION_COUNT = 'selectorActionCount'),
                    (at.prototype.EVENT_ID = 'eventId'),
                    (at.prototype.DEBUG_UNCONFIRMED_BEACONS = 'unconfirmedBeacons'),
                    (at.prototype.FINAL_CANCELLATION = 'finalCancellation'),
                    (at.prototype.ABORT_ON_TIMEOUT = 'abortOnTimeout'),
                    (at.prototype.DEBUG_STORAGE_PENDING = 'storagePendingBeacons'),
                    (at.prototype.FAIL_REQUEST_STATUS = 'failedWithStatus'),
                    (at.prototype.FAILED_STORAGE_FLUSH_BEACONS = 'failedStorageFlushBeacons'),
                    (at.prototype.STORAGE_SIZE_EXCEED = 'storageSizeExceed'),
                    (at.prototype.FAILED_SEND_FROM_STORAGE = 'failedSendFromStorage'),
                    (at.prototype.SENDING_FROM_STORAGE = 'sendingFromStorage'),
                    (at.prototype.RETRIED = 'failed'),
                    (at.prototype.DEVTOOLS_VALUES = 'devToolsValues'),
                    (at.prototype.DEBUG_PAGE_SN = 'pageSn'),
                    (at.prototype.DEBUG_BROWSER_TAB_ID = 'browserTabId'),
                    (at.prototype.USING_WORKER = 'usingWorker'),
                    (at.prototype.NAVIGATION_TIMING = 'navigationTiming'),
                    (at.prototype.CURRENT_VALUE = 'currentValue'),
                    (at.prototype.OLD_VALUE = 'oldValue'),
                    void 0 !== w &&
                      (at.prototype.extraInfoAttrs = [
                        {
                          name: at.prototype.FOCUS_TIME_ATTR,
                          encodeName: 'ft',
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.AUTO_COMPLETE_ATTR,
                          encodeName: 'ac',
                          encodeFunc: w.encodeBoolean,
                          encodeCode: _.dictionary.encodeEncodingType('cd_boolean'),
                        },
                        {
                          name: at.prototype.VISUAL_NAME,
                          encodeName: 'vn',
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.PAGE_NAME,
                          encodeName: at.prototype.PAGE_NAME,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.WINDOW_DEPTH,
                          encodeName: at.prototype.WINDOW_DEPTH,
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.CONTAINER_ID,
                          encodeName: at.prototype.CONTAINER_ID,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.PARENT_PAGE_ID,
                          encodeName: at.prototype.PARENT_PAGE_ID,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.HISTORY_LENGTH,
                          encodeName: at.prototype.HISTORY_LENGTH,
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.TIME_SINCE_LAST_EVENT,
                          encodeName: 'tl',
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.COORDINATE_ATTR,
                          encodeName: 'co',
                          encodeFunc: w.encodeCoordinate64,
                          encodeCode: _.dictionary.encodeEncodingType('cd_coordinate'),
                        },
                        {
                          name: at.prototype.SCROLL_REACH,
                          encodeName: 'sr',
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.MOVES_TRUNCATED,
                          encodeName: 'tr',
                          encodeFunc: w.encodeBoolean,
                          encodeCode: _.dictionary.encodeEncodingType('cd_boolean'),
                        },
                        {
                          name: at.prototype.LOST_EVENTS_NUM,
                          encodeName: 'le',
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.TP_INTEGRATION_TYPE,
                          encodeName: 'tp',
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.EXTERNAL_ID,
                          encodeName: 'ei',
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.SYNC_COORDINATE,
                          encodeName: 'sy',
                          encodeFunc: w.encodeCoordinate64,
                          encodeCode: _.dictionary.encodeEncodingType('cd_coordinate'),
                        },
                        {
                          name: at.prototype.RAGE_SEQUENCE,
                          encodeName: at.prototype.RAGE_SEQUENCE,
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.INDEX_IN_RAGE,
                          encodeName: at.prototype.INDEX_IN_RAGE,
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.ZOOM,
                          encodeName: 'zo',
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.MOBILE_HYBRID_ID,
                          encodeName: at.prototype.MOBILE_HYBRID_ID,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.DETECTOR_CONFIG_ID,
                          encodeName: at.prototype.DETECTOR_CONFIG_ID,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.AUTO_MASKING,
                          encodeName: at.prototype.AUTO_MASKING,
                          encodeFunc: w.encodeBoolean,
                          encodeCode: _.dictionary.encodeEncodingType('cd_boolean'),
                        },
                        {
                          name: at.prototype.SCROLL_DEBOUNCED,
                          encodeName: at.prototype.SCROLL_DEBOUNCED,
                          encodeFunc: w.encodeBoolean,
                          encodeCode: _.dictionary.encodeEncodingType('cd_boolean'),
                        },
                        {
                          name: at.prototype.HOST_SELECTOR_PATH,
                          encodeName: at.prototype.HOST_SELECTOR_PATH,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.SELECTOR_ACTION_COUNT,
                          encodeName: at.prototype.SELECTOR_ACTION_COUNT,
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.EVENT_ID,
                          encodeName: at.prototype.EVENT_ID,
                          encodeFunc: w.encodeNumber,
                          encodeCode: _.dictionary.encodeEncodingType('cd_number'),
                        },
                        {
                          name: at.prototype.DEBUG_UNCONFIRMED_BEACONS,
                          encodeName: at.prototype.DEBUG_UNCONFIRMED_BEACONS,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.FINAL_CANCELLATION,
                          encodeName: at.prototype.FINAL_CANCELLATION,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.ABORT_ON_TIMEOUT,
                          encodeName: at.prototype.ABORT_ON_TIMEOUT,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.DEBUG_STORAGE_PENDING,
                          encodeName: at.prototype.DEBUG_STORAGE_PENDING,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.FAIL_REQUEST_STATUS,
                          encodeName: at.prototype.FAIL_REQUEST_STATUS,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.FAILED_STORAGE_FLUSH_BEACONS,
                          encodeName: at.prototype.FAILED_STORAGE_FLUSH_BEACONS,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.STORAGE_SIZE_EXCEED,
                          encodeName: at.prototype.STORAGE_SIZE_EXCEED,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.FAILED_SEND_FROM_STORAGE,
                          encodeName: at.prototype.FAILED_SEND_FROM_STORAGE,
                          encodeFunc: w.encodeBoolean,
                          encodeCode: _.dictionary.encodeEncodingType('cd_boolean'),
                        },
                        {
                          name: at.prototype.SENDING_FROM_STORAGE,
                          encodeName: at.prototype.SENDING_FROM_STORAGE,
                          encodeFunc: w.encodeBoolean,
                          encodeCode: _.dictionary.encodeEncodingType('cd_boolean'),
                        },
                        {
                          name: at.prototype.RETRIED,
                          encodeName: at.prototype.RETRIED,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.DEVTOOLS_VALUES,
                          encodeName: at.prototype.DEVTOOLS_VALUES,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.DEBUG_PAGE_SN,
                          encodeName: at.prototype.DEBUG_PAGE_SN,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.DEBUG_BROWSER_TAB_ID,
                          encodeName: at.prototype.DEBUG_BROWSER_TAB_ID,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.USING_WORKER,
                          encodeName: at.prototype.USING_WORKER,
                          encodeFunc: w.encodeBoolean,
                          encodeCode: _.dictionary.encodeEncodingType('cd_boolean'),
                        },
                        {
                          name: at.prototype.NAVIGATION_TIMING,
                          encodeName: at.prototype.NAVIGATION_TIMING,
                          encodeFunc: w.encodeNavigationTiming.gbBind(null, '_'),
                          encodeCode: _.dictionary.encodeEncodingType('cd_navtiming'),
                        },
                        {
                          name: at.prototype.OLD_VALUE,
                          encodeName: at.prototype.OLD_VALUE,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.CURRENT_VALUE,
                          encodeName: at.prototype.CURRENT_VALUE,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                        {
                          name: at.prototype.SNAPSHOT_FUSE,
                          encodeName: at.prototype.SNAPSHOT_FUSE,
                          encodeFunc: w.encodeString,
                          encodeCode: _.dictionary.encodeEncodingType('cd_string'),
                        },
                      ]),
                    (ut.prototype =
                      ((h = Object.create(it.prototype)),
                      (ut.prototype.constructor = ut),
                      (h.toString = function () {
                        return 'EventSet {id:' + this.id + ' Events:' + this.events.length + '}';
                      }),
                      h)),
                    (ut.fromJSON = function (n) {
                      return (
                        (n.constructor = ut),
                        Object.setPrototypeOf(n, ut.prototype),
                        n.events.forEach(function (n) {
                          at.fromJSON(n);
                        }),
                        n
                      );
                    }),
                    (ut.reduceByMetadata = function (n) {
                      for (var e, t = 1, r = {}, i = 0; i < n.length; i++)
                        (n[i].metadata._id = n[i].metadata._id || t++),
                          r[(e = n[i].metadata._id)]
                            ? Array.prototype.push.apply(r[e].events, n[i].events)
                            : (r[e] = n[i]);
                      var o = [];
                      for (e in r) r.hasOwnProperty(e) && o.push(r[e]);
                      return o;
                    }),
                    void 0 !== n &&
                      (m = (function (n, s) {
                        var e,
                          t =
                            'object' == typeof n.glassboxMobileBridge &&
                            'function' == typeof n.glassboxMobileBridge.getContext
                              ? n.glassboxMobileBridge.getContext()
                              : F;
                        if ('string' == typeof t)
                          try {
                            e = JSON.parse(t);
                          } catch (n) {}
                        return {
                          sessionId: (e = e || {}).sessionId,
                          config: e.config || {},
                          override: function (n, e, t) {
                            var r,
                              i,
                              o,
                              a = n,
                              u = e,
                              c = 'reportURI';
                            return (
                              ('mobileReportURI' !== n && c !== n) ||
                                ((r = t[c]) !== F &&
                                  ((a = c),
                                  (i = s.extractOrigin(r)),
                                  (o = 0 === u.indexOf('http') ? s.extractPath(u) : u),
                                  (u = i.concat(o)))),
                              { key: a, value: u }
                            );
                          },
                        };
                      })(n, B)),
                    (st.prototype.add = function (n, e) {
                      return this._updates.push({ ref: e, update: n }), this;
                    }),
                    (ct.INITIAL_COMPRESSION_FACTOR = 0.25),
                    (ct.MINIMAL_COMPRESSION_FACTOR = 0.05),
                    ((b = {
                      idle: 'encodeNumber',
                      document: 'encodePageDetails',
                      segmentChanged: 'encodeSegmentChanged',
                      lastSegment: 'encodeSegmentChanged',
                      pageSnapshot: 'encodePageSnapshotData',
                      devToolsVisibilityChanged: 'encodeBoolean',
                      webStruggle: 'encodeStruggles',
                      ajaxRequest: 'encodeAjaxRequest',
                      ajaxStats: 'encodeAjaxStats',
                      hover: 'encodeHoverEvent',
                      custom: 'encodeKeyValue',
                      customMap: 'encodeNameKVMap',
                      thirdpartymap: 'encodeKVMap',
                      thirdPartyAttribute: 'encodeThirdPartyAttributes',
                      abTesting: 'encodeABTesting',
                      resourceContent: 'encodeResourceContent',
                      clientAttribute: 'encodeKeyValue',
                      waterfall: 'encodeWaterfallTiming',
                      performance: 'encodePerformanceTimings',
                      timing: 'encodeTimings',
                      resize: 'encodeResize',
                      submit: 'encodeHashCode',
                      touchmove: 'encodeClickDetails',
                      touchend: 'encodeClickDetails',
                      drag: 'encodeClickDetails',
                      mousemove: 'encodeMouseMove',
                      mouseover: 'encodeHoverEvent',
                      scroll: 'encodeCoordinate',
                      keydown: 'encodeKeyEvent',
                      keypress: 'encodeKeyEvent',
                    })[_.mouseEvents.up] = 'encodeClickDetails'),
                    (lt.COMPRESSED_INDICATION_CHARSET = 'ISO-8859-15'),
                    (lt.MINIMAL_COMPRESSION_FACTOR = 0.05),
                    e
                      ? (function (d, l) {
                          var v = { incomingEventMessages: 0 };
                          d[l] = { state: 'INIT', stats: v };
                          var i,
                            r,
                            h = {
                              onBeaconDispatched: function (n, e) {
                                i.postMessage({
                                  type: 'beaconSent',
                                  sn: n,
                                  encodedLength: e.length,
                                });
                              },
                              onBeaconResponse: function (n, e, t, r) {
                                i.postMessage({
                                  type: 'onBeaconResponse',
                                  pageId: n,
                                  beaconData: e,
                                  success: t,
                                  requestStatus: r,
                                });
                              },
                              onWorkerReady: function () {
                                i.postMessage({ type: 'ready' });
                              },
                              onNewConfig: function (n) {
                                i.postMessage({ type: 'newConfig', config: n });
                              },
                            },
                            m =
                              ((r = {}),
                              (i = d).addEventListener(
                                'message',
                                function (n) {
                                  var e = n.data,
                                    t = r[e.type];
                                  t && t.apply(null, e.args);
                                },
                                !1
                              ),
                              {
                                on: function (n, e) {
                                  r[n] = e;
                                },
                              });
                          m.on('init', function (n, e, t) {
                            w = rt(n);
                            var r = {
                                getKeyInfo: function () {
                                  return t;
                                },
                                stringIsEncrypted: function (n) {
                                  return B.startsWith(n, _.encryptionPrefix);
                                },
                              },
                              i = new Bt(
                                { on: function () {} },
                                _.detectorVersion,
                                n.reportAddUriParams
                              ),
                              o = Dt(self, !1, !1, !1),
                              a = vt(w, d.navigator, r, e, n),
                              u = new Qt({}, h.onBeaconResponse),
                              c = new Tr(
                                a,
                                i,
                                o,
                                logger,
                                u.onReporterMessage.gbBind(u),
                                h.onNewConfig,
                                n
                              ),
                              s = new $t(c, u, a, d[l].stats, n),
                              f = new ur(
                                { on: function () {}, off: function () {}, emit: function () {} },
                                a,
                                c,
                                s,
                                !0,
                                {
                                  track: function () {},
                                  untrack: function () {},
                                  packageEventSets: function () {},
                                },
                                h.onBeaconDispatched,
                                n.reportMaxConcurrency,
                                n.reportTimingBetweenBeacons
                              );
                            m.on('encodeAndDispatch', function (n, e, t) {
                              v.incomingEventMessages++;
                              var r = n.map(function (n) {
                                return ut.fromJSON(n);
                              });
                              f.encodeAndDispatch(r, e, t);
                            }),
                              m.on('restoreState', function (n, e) {
                                v.incomingEventMessages++, s.restoreState(n, e);
                              }),
                              m.on('updateQueryString', function (n) {
                                i.updateNativeCookies(n);
                              }),
                              (d[l].state = 'READY'),
                              h.onWorkerReady();
                          });
                        })(n, i)
                      : ((p = ','),
                        void 0 !== _ &&
                          _.detectorScript &&
                          (p = _.detectorScript.getAttribute('data-clsarraydelim') || p),
                        (g = function (n, e) {
                          if ('TRUE' === n.toUpperCase()) return !0;
                          if ('FALSE' === n.toUpperCase()) return !1;
                          throw "cannot parse boolean from '" + n + "'";
                        }),
                        (y = function (n) {
                          var e = (-1 === n.indexOf('.') ? parseInt : parseFloat)(n);
                          if (isNaN(e)) throw "cannot parse number from '" + n + "'";
                          return e;
                        }),
                        (C = function (n) {
                          return n;
                        }),
                        (T = function (n) {
                          return null == n ? [] : n.split(p);
                        }),
                        (S = function (n) {
                          return (Array.isArray ? Array.isArray(n) : n instanceof Array)
                            ? null
                            : 'array is expected';
                        }),
                        (I = function (n, e) {
                          for (var t = 0; t < e.length; t++)
                            if (typeof e[t] !== n)
                              return (
                                'array element type mismatch. expected:' +
                                n +
                                ' actual:' +
                                typeof e[t]
                              );
                          return null;
                        }),
                        (k = function () {
                          var r = arguments;
                          return function (n) {
                            for (var e = 0; e < r.length; e++) {
                              var t = r[e](n);
                              if (null != t) return t;
                            }
                            return null;
                          };
                        }),
                        (ht.prototype.ignore = function (n) {
                          this[n.toLowerCase()] = { name: n, ignore: !0 };
                        }),
                        (x = {
                          options: {
                            caseSensitive: !0,
                            errorOnUnknown: !(ht.newBuilder = function () {
                              var t = new ht();
                              return {
                                bool: function (n, e) {
                                  return t.add('boolean', !1, g, null, n, e), this;
                                },
                                num: function (n, e) {
                                  return t.add('number', !1, y, null, n, e), this;
                                },
                                str: function (n, e) {
                                  return t.add('string', !0, C, null, n, e), this;
                                },
                                strarray: function (n, e) {
                                  return (
                                    t.add(
                                      'object',
                                      !0,
                                      T,
                                      k(S, function (n) {
                                        return I('string', n);
                                      }),
                                      n,
                                      e
                                    ),
                                    this
                                  );
                                },
                                objarray: function (n, e) {
                                  return (
                                    t.add(
                                      'object',
                                      !0,
                                      T,
                                      k(S, function (n) {
                                        return I('object', n);
                                      }),
                                      n,
                                      e
                                    ),
                                    this
                                  );
                                },
                                ignore: function (n) {
                                  return t.ignore(n), this;
                                },
                                build: function () {
                                  return t;
                                },
                              };
                            }),
                          },
                          validate: function (n, e) {
                            var t = new mt();
                            if (this.parsingError) return t.addError(x.parsingError), t;
                            e = e || {};
                            var r,
                              i = n.requiredFieldsMask();
                            for (r in e)
                              if (e.hasOwnProperty(r)) {
                                var o = n[r.toLowerCase()];
                                if (!o) {
                                  (x.options.errorOnUnknown ? t.addError : t.addWarning).call(
                                    t,
                                    'unknown configuration field',
                                    r
                                  );
                                  continue;
                                }
                                if (o.ignore) continue;
                                if (o.name !== r && x.options.caseSensitive) {
                                  t.addError(
                                    "unknown configuration field (did you mean '" +
                                      o.name +
                                      "'?).",
                                    r
                                  ),
                                    delete i[o.name];
                                  continue;
                                }
                                var a,
                                  u = e[r];
                                if (null === u || u === F) {
                                  o.nullable ||
                                    t.addError(
                                      'value cannot be null, value of ' +
                                        o.type +
                                        ' type is expected.',
                                      r
                                    );
                                  continue;
                                }
                                if (typeof u !== o.type) {
                                  t.addError(
                                    'value type mismatch. expected:' +
                                      o.type +
                                      ' actual:' +
                                      typeof u,
                                    r
                                  );
                                  continue;
                                }
                                o.required && delete i[o.name],
                                  !o.validator ||
                                    ((a = o.validator(u)) &&
                                      t.addError('value violation, ' + a, r));
                              }
                            for (r in i)
                              i.hasOwnProperty(r) && t.addError('missing required field', r);
                            return t;
                          },
                          onParsingError: function (n) {
                            x.parsingError = n;
                          },
                        }),
                        (mt.prototype.addError = function (n, e) {
                          this.errors.push({ field: e, reason: n });
                        }),
                        (mt.prototype.addWarning = function (n, e) {
                          this.warnings.push({ field: e, reason: n });
                        }),
                        (mt.prototype.toString = function () {
                          function n (n) {
                            var e = '',
                              t = 0;
                            return t < n.length
                              ? e +
                                  ('\n' +
                                    (n[t].field ? "'" + n[t].field + "': " : '') +
                                    n[t].reason)
                              : e;
                          }
                          var e = '\n' + this.errors.length + ' error(s):';
                          return (
                            (e += n(this.errors)),
                            (e += '\n' + this.warnings.length + ' warning(s):'),
                            (e += n(this.warnings))
                          );
                        }),
                        (M = function (n, e, t, r, i) {
                          function o (n) {
                            return 'function' != typeof String.prototype.trim
                              ? n.replace(/^\s+|\s+$/g, '')
                              : n.trim();
                          }
                          n = n || {};
                          for (var a = null != t ? t.split(e) : [], u = 0; u < a.length; u++) {
                            var c = a[u].split('=');
                            if (2 === c.length) {
                              var s,
                                f = o(c[0]),
                                d = o(c[1]),
                                l = n[f.toLowerCase()];
                              (!l || void 0 === (s = l.parser)) && (s = C);
                              try {
                                r[f] = s(d);
                              } catch (n) {
                                i && i("'" + f + "': " + n);
                              }
                            }
                          }
                        }),
                        (R = ht
                          .newBuilder()
                          .ignore('injectionTime')
                          .ignore('visualName')
                          .ignore('detectionScriptURI')
                          .str('reportURI', !0)
                          .str('configPath', !1)
                          .bool('recordMouseMoves', !1)
                          .bool('recordScrolls', !1)
                          .bool('recordErrors', !1)
                          .bool('reportValidationErrors', !1)
                          .bool('domFormValidationTracking', !1)
                          .num('domFormValidationRedComponentMin', !1)
                          .num('domFormValidationRedComponentDelta', !1)
                          .strarray('domFormValidationSubmissionIds', !1)
                          .strarray('domFormValidationAdditionalTagNames', !1)
                          .num('idleEventTimeInterval', !1)
                          .bool('botDetection', !1)
                          .bool('recordHovers', !1)
                          .bool('reportByPost', !1)
                          .num('maxPostReportSize', !1)
                          .num('reportPostInterval', !1)
                          .bool('reportPostRetry', !1)
                          .num('reportMaxRetries', !1)
                          .num('reportAbortAfter', !1)
                          .bool('reportUseWorker', !1)
                          .bool('DOMBeaconImg', !1)
                          .num('reportInterval', !1)
                          .num('maxReportSize', !1)
                          .strarray('maskList', !1)
                          .strarray('maskWhitelistValueById', !1)
                          .strarray('maskBlacklistValueById', !1)
                          .strarray('maskClassList', !1)
                          .strarray('maskWhitelistValueByClass', !1)
                          .strarray('maskBlacklistValueByClass', !1)
                          .strarray('valueWhitelistMaskSimpleSelector', !1)
                          .strarray('valueBlacklistMaskSimpleSelector', !1)
                          .str('valueMaskIgnoreAttribute', !1)
                          .bool('maskTitle', !1)
                          .strarray('encryptionList', !1)
                          .strarray('encryptionClassList', !1)
                          .strarray('valueEncryptById', !1)
                          .strarray('valueEncryptByClass', !1)
                          .str('externalIdAttr', !1)
                          .str('valueMaskingCharNumericLike', !1)
                          .str('valueMaskingCharNumeric', !1)
                          .strarray('valueMaskByCategories', !1)
                          .bool('useIdSelectors', !1)
                          .bool('useNameInFormSelectors', !1)
                          .bool('preferNamesInFormSelectors', !1)
                          .strarray('noIdSelectorsForClassNames', !1)
                          .strarray('noIdSelectorsForIDs', !1)
                          .strarray('noIdSelectorsForAttrs', !1)
                          .bool('SCIntegration', !1)
                          .strarray('SCIntegrationURLsContainList', !1)
                          .strarray('SCIntegrationKeyList', !1)
                          .bool('interceptThirdPartyAttributes', !1)
                          .bool('interceptABTesting', !1)
                          .bool('reportAllResourcesLoad', !1)
                          .bool('reportExternalResources', !1)
                          .strarray('ignoreReportResourcesByTagNames', !1)
                          .num('reportMaxConcurrency', !1)
                          .num('reportTimingBetweenBeacons', !1)
                          .str('externalReporterObject', !1)
                          .bool('debugMode', !1)
                          .bool('traceMode', !1)
                          .bool('suppressMouseMovesDebug', !1)
                          .bool('visualNameDebug', !1)
                          .bool('timingMode', !1)
                          .num('minDragPixels', !1)
                          .bool('reportVisualNames', !1)
                          .num('titleCharsLimit', !1)
                          .num('maxTimeForIdleEvent', !1)
                          .num('validationValueForRenderTime', !1)
                          .bool('reportDebugInfo', !1)
                          .str('externalIdByClassesOnPrefix', !1)
                          .bool('supportNativeAutoComplete', !1)
                          .bool('recordEnterForInputs', !1)
                          .bool('recordTypingAll', !1)
                          .strarray('recordTypingForAttrs', !1)
                          .strarray('recordTypingForClasses', !1)
                          .strarray('recordTypingForIDs', !1)
                          .num('mmMaxMovesWithUnload', !1)
                          .num('mmMaxMovesInEventNoTimes', !1)
                          .num('mmMaxMovesInEventWithTimes', !1)
                          .num('mmMinStallingMoveTime', !1)
                          .num('mmMaxInMemoryMoves', !1)
                          .bool('mmDebug', !1)
                          .num('mhDeepLevel', !1)
                          .num('mhMaxListSize', !1)
                          .num('mhMaxInMemeoryHovers', !1)
                          .bool('mhDebug', !1)
                          .num('minStallingScrollTime', !1)
                          .bool('scrollDebug', !1)
                          .bool('clsDebug', !1)
                          .num('clsDebugCharsLimit', !1)
                          .num('clsDebugMaxReports', !1)
                          .bool('domRecordEnabled', !1)
                          .bool('recordShadowDom', !1)
                          .strarray('domNewPageTriggers', !1)
                          .strarray('pageSnapshotTriggers', !1)
                          .num('domStartAfter', !1)
                          .num('domUpdateEveryWsMsgIn', !1)
                          .num('domRecordEnabledByChance', !1)
                          .str('domReportURI', !1)
                          .bool('domCompress', !1)
                          .strarray('domNewPageAjaxTriggers', !1)
                          .strarray('domIgnoredFormElements', !1)
                          .bool('domIncludeSelectorOnUpdate', !1)
                          .bool('semiDomEnabled', !1)
                          .bool('domRecordCssRules', !1)
                          .bool('domPreciseStyleSheetCloning', !1)
                          .bool('domThrottleChanges', !1)
                          .strarray('ignorableElementIds', !1)
                          .bool('recordAjaxCallsAnyway', !1)
                          .bool('truncateEventsWithUnload', !1)
                          .bool('mmRecordTimes', !1)
                          .num('mmDiluteMinPixels', !1)
                          .bool('reportHybrid', !1)
                          .str('customTLD', !1)
                          .num('enabledByChance', !1)
                          .strarray('domCloningBannedIds', !1)
                          .strarray('domCloningBannedClasses', !1)
                          .str('reportEncoding', !1)
                          .bool('reportCompress', !1)
                          .bool('cordovaSdkReporting', !1)
                          .str('maskingMode', !1)
                          .str('valueMaskingMode', !1)
                          .str('domMaskingMode', !1)
                          .str('encryptionMode', !1)
                          .str('valueEncryptionMode', !1)
                          .strarray('reportAddUriParams', !1)
                          .bool('recordConsoleErrors', !1)
                          .strarray('domMaskContentById', !1)
                          .strarray('domBlacklistMaskContentById', !1)
                          .strarray('domWhitelistMaskContentById', !1)
                          .strarray('domMaskContentByClass', !1)
                          .strarray('domBlacklistMaskContentByClass', !1)
                          .strarray('domWhitelistMaskContentByClass', !1)
                          .strarray('domOmitById', !1)
                          .strarray('domOmitByClass', !1)
                          .strarray('domOmitObjectElementsByType', !1)
                          .strarray('domMaskOmitById', !1)
                          .strarray('domMaskOmitByClass', !1)
                          .strarray('domMaskedAttributes', !1)
                          .strarray('domMaskAttributesByTag', !1)
                          .str('domMaskIgnoreAttribute', !1)
                          .strarray('domMaskSimpleSelector', !1)
                          .strarray('domBlacklistMaskSimpleSelector', !1)
                          .strarray('domWhitelistMaskSimpleSelector', !1)
                          .strarray('domEncryptById', !1)
                          .strarray('domEncryptByClass', !1)
                          .str('encryptionPublicKey', !1)
                          .str('encryptionKeyId', !1)
                          .num('encryptionTimeout', !1)
                          .bool('reportPreferSendBeaconAPI', !1)
                          .bool('domKeepComments', !1)
                          .str('domKeepScriptMatching', !1)
                          .num('domExpireSnapshotAfter', !1)
                          .bool('reportCorsForceSafelistedHeaders', !1)
                          .bool('reportDisableCors', !1)
                          .strarray('reportCorsTakeNativeCookies', !1)
                          .str('clsByNativeCookie', !1)
                          .num('visitorDaysToExpiration', !1)
                          .bool('resetCorsOnNativeCookieChange', !1)
                          .strarray('maskCookies', !1)
                          .strarray('maskQueryParameters', !1)
                          .strarray('reportStorageBackedForUA', !1)
                          .bool('reportViaTopWindow', !1)
                          .bool('reportAddUriParamAPI', !1)
                          .bool('storageBackedReporting', !1)
                          .bool('externalReporting', !1)
                          .bool('domOmitAfterUnload', !1)
                          .bool('duplicateIdCheck', !1)
                          .strarray('domPartialWhenLocationContains', !1)
                          .strarray('domFilterAttributes', !1)
                          .strarray('blackoutWhenLocationContains', !1)
                          .bool('iframesAutoInject', !1)
                          .str('iframesAutoInjectMode', !1)
                          .bool('iframesRecordEnabled', !1)
                          .bool('framesetRecordEnabled', !1)
                          .str('iframesParentOrigin', !1)
                          .num('iframesHandshakeTimeout', !1)
                          .bool('iframesDebugEnabled', !1)
                          .bool('iframesSkipHidden', !1)
                          .bool('iframesDisableNotifications', !1)
                          .bool('iframesDirectChannel', !1)
                          .strarray('iframesDirectChannelWhenUriContains', !1)
                          .strarray('iframesSkipWhenLocationContains', !1)
                          .strarray('iframesBlackoutWhenLocationContains', !1)
                          .bool('blackoutIdleReporting', !1)
                          .bool('reportIncludeReferrer', !1)
                          .str('mobileHybridId', !1)
                          .bool('interceptAjax', !1)
                          .bool('ajaxDebug', !1)
                          .bool('ajaxHashRecurrentUrls', !1)
                          .str('ajaxRecordMetadata', !1)
                          .str('ajaxRecordResponseBody', !1)
                          .str('ajaxRecordResponseHeaders', !1)
                          .str('ajaxRecordRequestBody', !1)
                          .str('ajaxRecordRequestHeaders', !1)
                          .str('ajaxRecordStats', !1)
                          .strarray('ajaxStatsQueryParams', !1)
                          .num('ajaxRecordSessionLimit', !1)
                          .bool('ajaxCaptureRequestCookie', !1)
                          .objarray('ajaxMaskRequestBody', !1)
                          .objarray('ajaxMaskResponseBody', !1)
                          .bool('reportCreateSubSessionCookie', !1)
                          .bool('resourcesRecordEnabled', !1)
                          .bool('resourceRecordCssOnly', !1)
                          .bool('resourcesRecordAllowCors', !1)
                          .num('resourcesRecordCount', !1)
                          .num('resourcesRecordChance', !1)
                          .strarray('resourceIgnoreWhenUrlContains', !1)
                          .bool('resourceTimingRecordEnabled', !1)
                          .num('resourceTimingRecordEnabledByChance', !1)
                          .bool('clientAttributesEnabled', !1)
                          .num('clientAttributeMaxLength', !1)
                          .bool('domIE11ForceMutationObserver', !1)
                          .str('detectorTagId', !1)
                          .bool('cookieAssignFQDN', !1)
                          .num('cookieTLDSegmentCount', !1)
                          .str('sessionIdByQueryParam', !1)
                          .str('visitorIdByQueryParam', !1)
                          .str('domIdentifyingAttribute', !1)
                          .bool('sendStateInfo', !1)
                          .num('debounceScrolls', !1)
                          .bool('domHashTokens', !1)
                          .bool('ccAutoMask', !1)
                          .bool('ccAutoMaskByContent', !1)
                          .strarray('ccAutoMaskFields', !1)
                          .num('ccAutoMaskKeepLastDigits', !1)
                          .bool('ccForceMaskContainer', !1)
                          .str('domTokenizationVersion', !1)
                          .strarray('captureGlobalObjects', !1)
                          .bool('captureGlobalObjectsEmptyStrings', !1)
                          .bool('captureGlobalObjectsOnSegmentChange', !1)
                          .bool('domIEForceStyleCopyByRules', !1)
                          .bool('domFormValidationAllowFormLevel', !1)
                          .strarray('segmentationTriggerBySimpleSelector', !1)
                          .strarray('segmentationLabelBySimpleSelector', !1)
                          .str('segmentationLabelByAttribute', !1)
                          .str('segmentationTitleByAttribute', !1)
                          .str('segmentationPrefix', !1)
                          .str('segmentationIgnoreWhenLocationContains', !1)
                          .bool('recordSpaLoadTime', !1)
                          .bool('collectStruggles', !1)
                          .bool('collectFormStruggles', !1)
                          .num('struggleMaxLongFocusTime', !1)
                          .num('struggleRageClickInterval', !1)
                          .num('struggleRageClickMinCount', !1)
                          .bool('struggleCaptureDeadClick', !1)
                          .num('struggleDeadClickInterval', !1)
                          .bool('struggleCaptureErrorClick', !1)
                          .num('struggleErrorClickInterval', !1)
                          .bool('struggleCaptureAjaxErrors', !1)
                          .bool('struggleCaptureHorizontalScrollbar', !1)
                          .bool('struggleCaptureBlankPage', !1)
                          .bool('domTamperingDetectionEnabled', !1)
                          .num('domTamperingGraceTime', !1)
                          .bool('devToolsDetectionEnabled', !1)
                          .str('devToolsDetectionMessage', !1)
                          .bool('domThrottleChanges', !1)
                          .bool('domThrottleChangesIE11Only', !1)
                          .num('visualNameLimit', !1)
                          .num('maxRecordedCountPerError', !1)
                          .bool('useExtension', !1)
                          .str('forceRenderingFixForUA', !1)
                          .bool('pageNameResolvingEnabled', !1)
                          .strarray('pageNameResolvingByElements', !1)
                          .num('domFuseDuration', !1)
                          .num('domFuseElementCount', !1)
                          .num('domFuseDurationIE', !1)
                          .num('domFuseElementCountIE', !1)
                          .strarray('removeBase64ImageDataTagNames', !1)
                          .num('delayDomMutationEvent', !1)
                          .build()),
                        _.detectorScript &&
                          ((A = _.detectorScript.getAttribute('data-clsdelim') || ';'),
                          (N = _.detectorScript.getAttribute('data-clsconfig')) &&
                            M(R, A, N, L, x.onParsingError)),
                        (D = window._cls_config || window._config || {}),
                        gt(L, D),
                        gt(L, window._cls_config_forced),
                        (L.maskingMode ||
                          yt(
                            L.domMaskContentById,
                            L.domMaskContentByClass,
                            L.domMaskSimpleSelector,
                            L.maskList,
                            L.maskClassList
                          )) &&
                          ((L.valueMaskingMode = L.maskingMode
                            ? L.maskingMode
                            : L.valueMaskingMode || _.censorMode.BlackList),
                          (L.domBlacklistMaskContentById = L.domMaskContentById || []),
                          (L.domWhitelistMaskContentById = L.domMaskContentById || []),
                          (L.domBlacklistMaskContentByClass = L.domMaskContentByClass || []),
                          (L.domWhitelistMaskContentByClass = L.domMaskContentByClass || []),
                          (L.domBlacklistMaskSimpleSelector = L.domMaskSimpleSelector || []),
                          (L.domWhitelistMaskSimpleSelector = L.domMaskSimpleSelector || []),
                          (L.maskBlacklistValueById = L.maskList || []),
                          (L.maskWhitelistValueById = L.maskList || []),
                          (L.maskBlacklistValueByClass = L.maskClassList || []),
                          (L.maskWhitelistValueByClass = L.maskClassList || [])),
                        (L.valueMaskingMode = L.valueMaskingMode || _.censorMode.WhiteList),
                        (L.domPreciseStyleSheetCloning =
                          L.domPreciseStyleSheetCloning || !!L.domIEForceStyleCopyByRules),
                        (L.reportPostRetry = L.reportPostRetry || !!L.postRetry),
                        (L.encryptionMode || yt(L.encryptionList, L.encryptionClassList)) &&
                          ((L.valueEncryptionMode = L.encryptionMode
                            ? L.encryptionMode
                            : L.valueEncryptionMode || _.censorMode.BlackList),
                          (L.valueEncryptById = L.encryptionList || []),
                          (L.valueEncryptByClass = L.encryptionClassList || [])),
                        L.reportAddUriParamAPI &&
                          ((L.reportAddUriParams = L.reportAddUriParams || []),
                          L.reportAddUriParams.push('api')),
                        L.visualName &&
                          L.visualName.eventsToCalcDistance &&
                          L.visualName.eventsToCalcDistance.length &&
                          (L.visualName.eventsToCalcDistance = B.immutableSet.apply(
                            null,
                            L.visualName.eventsToCalcDistance
                          )),
                        (function (n) {
                          var e = L.reportToStorageAfterUnload,
                            t =
                              L.reportPreferSendBeaconAPI &&
                              'function' != typeof navigator.sendBeacon;
                          if (!e && L.reportStorageBackedForUA && !t)
                            for (var r = 0; r < L.reportStorageBackedForUA.length; r++)
                              try {
                                if (
                                  new RegExp(L.reportStorageBackedForUA[r], 'gi').exec(
                                    n.navigator.userAgent
                                  )
                                ) {
                                  e = !0;
                                  break;
                                }
                              } catch (n) {}
                          e && (L.storageBackedReporting = !0);
                        })(window),
                        (j = window),
                        L.externalReporterObject &&
                          j[L.externalReporterObject] &&
                          ((L.externalReporting = !0),
                          (L.reportDisableCors = !0),
                          L.reportUseWorker && (L.reportUseWorker = !1)),
                        gt(L, m.config, m.override),
                        L.domRecordEnabled &&
                          void 0 !== L.domRecordEnabledByChance &&
                          ((U = new Ht(O, F)),
                          (H = new Ut(window.localStorage, {
                            keysPrefix: _.Storage.BoundKeyPrefix,
                            sessionIdFunc: function () {
                              return U.get(_.cookies.session);
                            },
                          })),
                          pt(L.domRecordEnabledByChance, H, 'dom')
                            ? ((L.domRecordEnabled = !0),
                              L.domReportURI && (L.reportURI = L.domReportURI))
                            : (L.domRecordEnabled = !1),
                          L.domRecordEnabledByChance),
                        (V = {
                          MASKING_CHAR: '*',
                          censorValueOf: function (n, e, t) {
                            return (
                              (n = '' + (n || '')),
                              0 < (e || 0)
                                ? ((e = Math.min(n.length, e)),
                                  new Array(n.length - e + 1).join(t || V.MASKING_CHAR) +
                                    n.substring(n.length - e))
                                : new Array(n.length + 1).join(t || V.MASKING_CHAR)
                            );
                          },
                          isAvailable: function () {
                            return !0;
                          },
                        }),
                        (It.prototype = {
                          isCensored: function (n) {
                            return !!kt.call(this, n).doMask;
                          },
                          censor: function (n) {
                            var e = kt.call(this, n);
                            return e.doMask
                              ? (this.cb && this.cb(n, e.cause),
                                this.maskingUtils.censorValueOf(
                                  n.value,
                                  e.keepLastDigits,
                                  e.maskingChar
                                ))
                              : n.value;
                          },
                          isAvailable: function () {
                            return !0;
                          },
                        }),
                        (xt.attributeValueInRegexpArray = function (n, e) {
                          for (var t = 0; t < e.length; t++) if (e[t].test(n)) return !0;
                          return !1;
                        }),
                        (xt.checkSelector = function (n, e) {
                          for (var t = 0; t < e.length; ++t)
                            if (n.nodeType === Node.ELEMENT_NODE && B.elementMatches(n, e[t]))
                              return !0;
                          return !1;
                        }),
                        (xt.prototype.isCensored = function (n, e) {
                          var t = e ? n.parentElement : n;
                          if (!B.isEditableInput(t)) return !1;
                          if (t.hasAttribute(this._options.valueCensorIgnoreAttribute)) return !1;
                          var r =
                            this._options.valueCensorshipMode === this._envCensorMode.WhiteList;
                          return (
                            t.hasAttribute(this._censorAttribute) ||
                            B.hasClassName(t, this._censorAttribute)
                              ? (r = !0)
                              : ((this._valueCensorIdsWithoutwildcards.length &&
                                  E.contains(
                                    this._valueCensorIdsWithoutwildcards,
                                    B.getElementId(t)
                                  )) ||
                                  (this._valueCensorClassesWithoutwildcards.length &&
                                    B.hasOneOfClassNames(
                                      t,
                                      this._valueCensorClassesWithoutwildcards
                                    )) ||
                                  (this._valueCensorSelectorsWithoutwildcards.length &&
                                    xt.checkSelector(
                                      t,
                                      this._valueCensorSelectorsWithoutwildcards
                                    )) ||
                                  (this._regexpValueCensorIds.length &&
                                    xt.attributeValueInRegexpArray(
                                      B.getElementId(t),
                                      this._regexpValueCensorIds
                                    )) ||
                                  (this._regexpValueCensorClasses.length &&
                                    xt.attributeValueInRegexpArray(
                                      B.getClass(t),
                                      this._regexpValueCensorClasses
                                    ))) &&
                                (r = !r),
                            r
                          );
                        }),
                        (xt.prototype.censor = function (n, e) {
                          return this.isCensored(n, e) ? this._censorValueOf(n.value) : n.value;
                        }),
                        (xt.prototype.isAvailable = function () {
                          return this._isAvailable();
                        }),
                        (q = new (function (a, u, c) {
                          var n = (function () {
                            if (-1 === (u || '').indexOf('://')) return !1;
                            var n = a.createElement('a');
                            if (
                              ((n.href = u), (/:\d+/gi.test(u) ? n.port : '') !== a.location.port)
                            )
                              return !0;
                            if (c) return n.hostname !== a.location.hostname;
                            for (
                              var e = a.location.hostname.split('.'),
                                t = n.hostname.split('.'),
                                r = e.length <= 2,
                                i = !1;
                              e.length && t.length && !i;

                            )
                              i = e.pop() !== t.pop();
                            var o = (i ? 1 : 0) + Math.max(e.length, t.length);
                            return r ? 0 !== o : 1 < o;
                          })();
                          this.isCorsReporting = function () {
                            return n;
                          };
                        })(O, L.reportURI, L.cookieAssignFQDN)),
                        (z = new Ht(O, {
                          domainBy: L.cookieAssignFQDN ? 'fqdn' : 'tld',
                          tldSegmentCount: L.cookieTLDSegmentCount,
                        })),
                        (W = new Ut(window.localStorage, {
                          keysPrefix: _.Storage.BoundKeyPrefix,
                          sessionIdFunc: function () {
                            return z.get(_.cookies.session);
                          },
                        })),
                        (An = window),
                        (X =
                          (Nn = L).recordShadowDom && An.ShadowRoot && void 0 !== Mi
                            ? new Mi(new Pt(Nn))
                            : new Pt(Nn)),
                        (G = new (function (t, e, n, r, i, o) {
                          o = o || {};
                          var a,
                            u,
                            c,
                            s,
                            f,
                            d,
                            l =
                              0 < (i.valueEncryptById || []).length ||
                              0 < (i.valueEncryptByClass || []).length ||
                              0 < (i.domEncryptById || []).length ||
                              0 < (i.domEncryptByClass || []).length ||
                              i.valueEncryptionMode === _.censorMode.WhiteList,
                            v = l && !(!o.publicKey || !o.keyId),
                            h = !1,
                            m = !1,
                            p = !1,
                            g = [];
                          function y (n) {
                            E((u = B.Base64.bytesToBase64(new Uint8Array(n)))), !p && m && b();
                          }
                          function w (n) {
                            g.push(n),
                              E(),
                              m && g.length && e.emit('clsDebug', 'Error: ' + g.join('. Error: '));
                          }
                          function b () {
                            n.set('hybrid.key', u),
                              n.set('symmetric.key', B.Base64.bytesToBase64(new Uint8Array(a))),
                              n.set('public.key.hash', B.hashcode(o.publicKey)),
                              (p = !0);
                          }
                          function E (n) {
                            h ||
                              (B.currentTimestamp(),
                              (h = !0),
                              (u = n) && (c = o.keyId + '_' + u),
                              setTimeout(function () {
                                e.emit('encryptionReady');
                              }, 0));
                          }
                          if (v)
                            try {
                              B.currentTimestamp(),
                                (s = n.get('symmetric.key')),
                                (f = n.get('hybrid.key')),
                                (d = '' + B.hashcode(o.publicKey) === n.get('public.key.hash')),
                                s && f && d
                                  ? ((a = new Uint8Array(B.strToBytes(B.Base64.atob(s)))), E(f))
                                  : (e.on('init:loaded', function () {
                                      (m = !0),
                                        !p && a && u && b(),
                                        g.length &&
                                          e.emit('clsDebug', 'Error: ' + g.join('. Error: '));
                                    }),
                                    (function () {
                                      var n = r(t);
                                      if (n) {
                                        var e = B.strToBytes(B.Base64.atob(o.publicKey));
                                        return (
                                          (a = new Uint8Array(16)),
                                          n.getRandomValues(a),
                                          n.executeEncryptionFlow(e, a, y, w),
                                          1
                                        );
                                      }
                                      w('Current browser does not support crypto interface.');
                                    })() &&
                                      setTimeout(function () {
                                        E();
                                      }, o.timeout));
                            } catch (n) {
                              w(n.message || 'unknown exception during encryption');
                            }
                          else
                            l
                              ? (w('encryption is not well configured'),
                                console.error(
                                  '[EyeView-403]: Encryption configuration error: missing encryption key settings. Sensitive data might be recorded.'
                                ))
                              : E();
                          (this.isEncryptionConfigured = function () {
                            return !!l;
                          }),
                            (this.canUseEncryption = function () {
                              return (
                                !!c &&
                                !!(
                                  (t.crypto && (t.crypto.subtle || t.crypto.webkitSubtle)) ||
                                  (t.msCrypto && t.msCrypto.subtle)
                                )
                              );
                            }),
                            (this.getEncryptionKey = function () {
                              return c ? a : F;
                            }),
                            (this.getKeyInfo = function () {
                              return c || F;
                            }),
                            (this.stringIsEncrypted = function (n) {
                              return B.startsWith(n, _.encryptionPrefix);
                            });
                        })(
                          window,
                          P,
                          W,
                          function (n) {
                            return n.crypto && (n.crypto.subtle || n.crypto.webkitSubtle)
                              ? new Et(n)
                              : n.msCrypto && n.msCrypto.subtle
                              ? new bt(n)
                              : null;
                          },
                          L,
                          {
                            publicKey: L.encryptionPublicKey,
                            keyId: L.encryptionKeyId,
                            timeout: L.encryptionTimeout,
                          }
                        )),
                        window,
                        (Rn = G),
                        (J = {
                          censorValueOf: function (n) {
                            var e = Rn.getEncryptionKey(),
                              t = Rn.AES_CBC.encrypt(new Uint8Array(B.strToUTF8Bytes(n)), e, !0);
                            return _.encryptionPrefix + B.Base64.bytesToBase64(t, !0) + '_';
                          },
                          isAvailable: function () {
                            return Rn.canUseEncryption();
                          },
                        }),
                        (K = new (function (n, e) {
                          var o = e.handlers;
                          function a (n) {
                            return (o[n] = e.fallbackHandlers[n] || o[n]), o[n];
                          }
                          (this.censor = function (e, t) {
                            for (var n, r = e.value, i = 0; i < o.length; i++) {
                              (n = o[i]).isAvailable() || (n = a(i));
                              try {
                                r = n.censor(e, t);
                              } catch (n) {
                                logger.error(
                                  'failed censoring value, switching to fallback: ' + n.message,
                                  n
                                ),
                                  (r = a(i).censor(e, t));
                              }
                              if (r !== e.value) return r;
                            }
                            return r;
                          }),
                            (this.isCensored = function (n, e) {
                              for (var t = 0; t < o.length; t++)
                                if (o[t].isCensored(n, e)) return !0;
                              return !1;
                            });
                        })(
                          window,
                          ((rn = G),
                          (on = J),
                          (an = P),
                          (Sn = wt()),
                          (In = (un = L).valueMaskingMode === _.censorMode.WhiteList),
                          (kn = un.ccForceMaskContainer
                            ? St(an)
                            : { markOwnerAndInputs: function () {} }),
                          (Mn = []),
                          (xn = []).push(
                            new It(
                              V,
                              [
                                function (n) {
                                  return {
                                    doMask: 'INPUT' === n.tagName && 'password' === n.type,
                                    cause: 'password',
                                  };
                                },
                                ((cn = {
                                  enabled: un.ccAutoMask,
                                  byContent: un.ccAutoMaskByContent,
                                  byAttributes: un.ccAutoMaskFields,
                                  keepLastDigits: un.ccAutoMaskKeepLastDigits,
                                }),
                                (fn =
                                  0 <
                                  (cn = B.optionsWithDefaults(cn, {
                                    enabled: !0,
                                    byContent: !0,
                                    byAttributes: ['cc-number', 'cc-csc'],
                                    byCommonProps: ['class', 'id', 'name'],
                                  })).keepLastDigits
                                    ? cn.keepLastDigits
                                    : F),
                                (dn = B.immutableSet.apply(null, cn.byAttributes)),
                                (ln = { doMask: !1 }),
                                (vn = /[\s\d]+/gi),
                                (hn = /\d{12,19}/g),
                                (mn = /(credit.*card)|((credit|card|cc).*num)/gi),
                                (sn = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]),
                                (pn = function (n) {
                                  for (var e, t = n.length, r = 1, i = 0; t; )
                                    (e = parseInt(n.charAt(--t), 10)), (i += (r ^= 1) ? sn[e] : e);
                                  return i && i % 10 == 0;
                                }),
                                function (e) {
                                  if (!cn.enabled) return ln;
                                  var n =
                                    e.getAttribute('autocomplete') ||
                                    e.getAttribute('x-autocompletetype') ||
                                    '';
                                  if (dn[n])
                                    return {
                                      doMask: !0,
                                      keepLastDigits: 'cc-number' === n ? fn : F,
                                      cause: 'cc',
                                    };
                                  if (cn.byContent) {
                                    var t = e.value || '';
                                    if (
                                      t.match(vn) &&
                                      (t = t.trim().split(/\s+/).join('')) &&
                                      t.match(hn) &&
                                      pn(t)
                                    )
                                      return { doMask: !0, keepLastDigits: fn, cause: 'cc' };
                                  }
                                  return cn.byCommonProps &&
                                    cn.byCommonProps.some(function (n) {
                                      return (e.getAttribute(n) || '').match(mn);
                                    })
                                    ? { doMask: !0, keepLastDigits: fn, cause: 'cc' }
                                    : ln;
                                }),
                                Tt(
                                  Ct({
                                    valueMaskByCategories: un.valueMaskByCategories,
                                    valueMaskingCharNumeric: un.valueMaskingCharNumeric,
                                    valueMaskingCharNumericLike: un.valueMaskingCharNumericLike,
                                  })
                                ),
                              ],
                              function (n, e) {
                                'cc' === e && kn.markOwnerAndInputs(n),
                                  Un.onAutoMaskingApplied(n, e);
                              }
                            )
                          ),
                          Mn.push(F),
                          xn.push(
                            ((gn = V),
                            (yn = {
                              valueCensorIds: In ? un.maskWhitelistValueById : [],
                              valueCensorClasses: In ? un.maskWhitelistValueByClass : [],
                              valueCensorSimpleSelector: In
                                ? un.valueWhitelistMaskSimpleSelector
                                : [],
                              valueCensorIgnoreAttribute: un.valueMaskIgnoreAttribute,
                            }),
                            (wn = []),
                            (bn = []),
                            (En = []),
                            (Cn = []),
                            (Tn = yn || {}).valueCensorIds && Rt(Tn.valueCensorIds, wn, En),
                            Tn.valueCensorClasses && Rt(Tn.valueCensorClasses, bn, Cn),
                            {
                              isCensored: function (n, e) {
                                var t = e ? n.parentElement : n,
                                  r = !!t._gbForceMasking;
                                return (
                                  (t.hasAttribute(Tn.valueCensorIgnoreAttribute) ||
                                    (wn.length && E.contains(wn, B.getElementId(t))) ||
                                    (bn.length && B.hasOneOfClassNames(t, bn)) ||
                                    (En.length &&
                                      xt.attributeValueInRegexpArray(B.getElementId(t), En)) ||
                                    (Cn.length &&
                                      xt.attributeValueInRegexpArray(B.getClass(t), Cn))) &&
                                    (r = !1),
                                  r
                                );
                              },
                              censor: function (n, e) {
                                return this.isCensored(n, e) ? gn.censorValueOf(n.value) : n.value;
                              },
                              isAvailable: function () {
                                return !0;
                              },
                            })
                          ),
                          Mn.push(F),
                          rn.isEncryptionConfigured() &&
                            (xn.push(
                              new xt(
                                on,
                                _.censorMode,
                                'cls_encrypt',
                                {
                                  name: 'encryption',
                                  valueCensorshipMode: un.valueEncryptionMode,
                                  valueCensorIds: un.valueEncryptById,
                                  valueCensorClasses: un.valueEncryptByClass,
                                  autoCensorPredicate: F,
                                },
                                Sn
                              )
                            ),
                            Mn.push(
                              new xt(
                                V,
                                _.censorMode,
                                'cls_encrypt',
                                {
                                  name: 'masking_fallback',
                                  valueCensorshipMode: un.valueEncryptionMode,
                                  valueCensorIds: un.valueEncryptById,
                                  valueCensorClasses: un.valueEncryptByClass,
                                  valueCensorIgnoreAttribute: un.valueMaskIgnoreAttribute,
                                },
                                Sn
                              )
                            )),
                          xn.push(
                            new xt(
                              V,
                              _.censorMode,
                              'cls_mask',
                              {
                                name: 'masking',
                                valueCensorshipMode: un.valueMaskingMode,
                                valueCensorIds: In
                                  ? un.maskWhitelistValueById
                                  : un.maskBlacklistValueById,
                                valueCensorClasses: In
                                  ? un.maskWhitelistValueByClass
                                  : un.maskBlacklistValueByClass,
                                valueCensorSimpleSelectors: In
                                  ? un.valueWhitelistMaskSimpleSelector
                                  : un.valueBlacklistMaskSimpleSelector,
                                valueCensorIgnoreAttribute: un.valueMaskIgnoreAttribute,
                              },
                              Sn
                            )
                          ),
                          Mn.push(F),
                          { handlers: xn, fallbackHandlers: Mn })
                        )),
                        (nn = 0),
                        (tn = function () {
                          return ++nn;
                        }),
                        (Q = {
                          idOf: function (n, e) {
                            return e ? n[en] : Mt(n);
                          },
                          selectorFor: function (n) {
                            return { selector: '' + Mt(n) };
                          },
                          GB_ID_FIELD_NAME: (en = '_gbid'),
                        }),
                        (Y = (function (n) {
                          n = (n || []).map(function (n) {
                            return n.toLowerCase();
                          });
                          var c = B.immutableSet.apply(null, n);
                          function t (n) {
                            var e = n.split('?');
                            if (!e[1]) return n;
                            for (
                              var t, r, i, o = [], a = e[1].split('&'), u = 0;
                              u < a.length;
                              u++
                            )
                              1 < (t = a[u].split('=')).length
                                ? ((r = t[0]),
                                  (i = c[r.toLowerCase()] ? V.censorValueOf(t[1]) : t[1]),
                                  o.push(r + '=' + i))
                                : o.push(a[u]);
                            return e[0] + '?' + o.join('&');
                          }
                          return {
                            mask: function (n) {
                              var e = n.split('#');
                              return t(e[0]) + (1 < e.length ? '#' + t(e[1]) : '');
                            },
                          };
                        })(L.maskQueryParameters)),
                        ($ = {
                          setListener: function (n) {
                            Z = n;
                          },
                          clonerHook: function (n, e) {
                            Z && Z(n, e);
                          },
                        }),
                        (Dn = {
                          hookProto: function (i) {
                            var o = {};
                            return {
                              setHookBefore: function (e, n) {
                                var t = i[e];
                                return (
                                  !!t &&
                                  ((i[e] = function () {
                                    try {
                                      n.apply(this, arguments);
                                    } catch (n) {
                                      logger.error(
                                        "error during method '" +
                                          e +
                                          "' hook invocation. error: " +
                                          n.message,
                                        n
                                      );
                                    }
                                    return t.apply(this, arguments);
                                  }),
                                  (o[e] = t),
                                  !0)
                                );
                              },
                              setHookAfter: function (e, t) {
                                var r = i[e];
                                return (
                                  !!r &&
                                  ((i[e] = function () {
                                    var n = r.apply(this, arguments);
                                    try {
                                      t.apply(this, arguments);
                                    } catch (n) {
                                      logger.error(
                                        "error during method '" +
                                          e +
                                          "' hook invocation. error: " +
                                          n.message,
                                        n
                                      );
                                    }
                                    return n;
                                  }),
                                  (o[e] = r),
                                  !0)
                                );
                              },
                              hookSetPropertyAfter: function (e, t) {
                                var r = Object.getOwnPropertyDescriptor(i, e)
                                  ? Object.getOwnPropertyDescriptor(i, e).set
                                  : null;
                                return (
                                  !!r &&
                                  (Object.defineProperty(i, e, {
                                    set: function () {
                                      var n = r.apply(this, arguments);
                                      try {
                                        t.apply(this, arguments);
                                      } catch (n) {
                                        logger.error(
                                          "error during method '" +
                                            e +
                                            "' hook invocation. error: " +
                                            n.message,
                                          n
                                        );
                                      }
                                      return n;
                                    },
                                  }),
                                  (o[e] = r),
                                  !0)
                                );
                              },
                              revert: function () {
                                var n;
                                for (n in o) o.hasOwnProperty(n) && (i[n] = o[n]);
                              },
                            };
                          },
                        }),
                        (On = O),
                        (Fn = void 0 !== L && L.scrollDebug),
                        (_n = {
                          scroll: function (n, e) {
                            function a () {
                              l &&
                                (h++,
                                l(),
                                (l = null),
                                f && console.log('SCROLL DEBUG: bounced invocation #' + h));
                            }
                            var u, c, s, f, d, l, v, h;
                            return (
                              (u = On),
                              (c = e),
                              (s = n),
                              (f = Fn),
                              (h = v = 0),
                              (Ln = {
                                debouncedHandler: function (n) {
                                  var e, t, r, i, o;
                                  clearTimeout(d),
                                    (l = s.gbBind(this, n)),
                                    (o = n.target),
                                    (i = o === u ? u.documentElement : o)._gb_scrollInfo ||
                                      (i._gb_scrollInfo = {
                                        lastScrollTop: i.scrollTop,
                                        lastVDelta: 0,
                                      }),
                                    (t = (e = i).scrollTop - e._gb_scrollInfo.lastScrollTop),
                                    (r = t * e._gb_scrollInfo.lastVDelta < 0),
                                    (e._gb_scrollInfo.lastVDelta = t),
                                    (e._gb_scrollInfo.lastScrollTop = e.scrollTop),
                                    r
                                      ? a()
                                      : ((d = setTimeout(a, c)),
                                        v++,
                                        f &&
                                          v % 20 == 0 &&
                                          console.log(
                                            'SCROLL DEBUG: de-bouncer - called:',
                                            h,
                                            ' of total:',
                                            v
                                          ));
                                },
                                bounce: a,
                              })
                            );
                          },
                          bounceAll: function (n) {
                            Ln && 'scroll' !== n && Ln.bounce();
                          },
                        }),
                        (At.prototype.open = function (n, e) {
                          (this._url = e),
                            (this.readyState = XMLHttpRequest.OPENED),
                            this.onreadystatechange && this.onreadystatechange();
                        }),
                        (At.prototype.send = function (n) {
                          var e, t;
                          (this.readyState = XMLHttpRequest.LOADING),
                            (t = this._contentType
                              ? ((e = { type: this._contentType }), new Blob([n], e))
                              : n),
                            (this.status = navigator.sendBeacon(this._url, t)
                              ? 200
                              : At.BEACON_ERROR_STATUS),
                            200 !== this.status &&
                              logger.error(
                                'failed posting new beacon using sendBeacon API. payload:  contentType:' +
                                  this._contentType
                              ),
                            (this.readyState = XMLHttpRequest.DONE),
                            this.onreadystatechange && this.onreadystatechange();
                        }),
                        (At.prototype.setRequestHeader = function (n, e) {
                          'Content-Type' === n && (this._contentType = e);
                        }),
                        (At.prototype.getResponseHeader = function () {
                          return null;
                        }),
                        (At.canSend =
                          ((Pn = /chrome/.test(navigator.userAgent.toLowerCase())),
                          function (n) {
                            return !(Pn && n && n.length > At.CHROME_PAYLOAD_LIMIT);
                          })),
                        (At.isSupported = function () {
                          return 'function' == typeof navigator.sendBeacon;
                        }),
                        (At.CHROME_PAYLOAD_LIMIT = 61440),
                        (At.BEACON_ERROR_STATUS = 400),
                        (Nt.prototype.open = function (n, e) {
                          -1 === e.indexOf('://') &&
                            (e =
                              location.protocol +
                              '//' +
                              location.hostname +
                              (e.startsWith('/') ? '' : '/') +
                              e),
                            this.xdr.open(n, e),
                            (this.readyState = XMLHttpRequest.OPENED),
                            this.onreadystatechange && this.onreadystatechange();
                        }),
                        (Nt.prototype.send = function (n) {
                          this.xdr.send(n),
                            (this.readyState = XMLHttpRequest.LOADING),
                            this.onreadystatechange && this.onreadystatechange();
                        }),
                        (Nt.prototype.setRequestHeader = function () {}),
                        (Nt.prototype.getResponseHeader = function () {
                          return null;
                        }),
                        (Bn = Dt(
                          self,
                          L.reportPreferSendBeaconAPI,
                          L.clientAttributesEnabled || L.interceptThirdPartyAttributes,
                          L.cordovaSdkReporting
                        )),
                        (function (n) {
                          var r,
                            i,
                            e =
                              (this && this.__extends) ||
                              ((r = function (n, e) {
                                return (r =
                                  Object.setPrototypeOf ||
                                  ({ __proto__: [] } instanceof Array &&
                                    function (n, e) {
                                      n.__proto__ = e;
                                    }) ||
                                  function (n, e) {
                                    for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
                                  })(n, e);
                              }),
                              function (n, e) {
                                function t () {
                                  this.constructor = n;
                                }
                                r(n, e),
                                  (n.prototype =
                                    null === e
                                      ? Object.create(e)
                                      : ((t.prototype = e.prototype), new t()));
                              }),
                            f = ((i = Error), e(t, i), t);
                          function t () {
                            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                            var t = i.apply(this, n) || this;
                            return (
                              Object.create(Error.prototype, {
                                name: { value: 'IllegalArgumentError' },
                              }),
                              t
                            );
                          }
                          var w = (function () {
                              var a,
                                u,
                                i = !1;
                              function o (n, e) {
                                var t = a[(u[n] + u[e]) % 255];
                                return (0 !== n && 0 !== e) || (t = 0), t;
                              }
                              var m,
                                c,
                                s,
                                f,
                                d = !1;
                              function r () {
                                function n (n) {
                                  var e, t, r, i, o;
                                  for (
                                    o = a[255 - u[(i = n)]], 0 === i && (o = 0), t = r = o, e = 0;
                                    e < 4;
                                    e++
                                  )
                                    r ^= t = 255 & ((t << 1) | (t >>> 7));
                                  return (r ^= 99);
                                }
                                i ||
                                  (function () {
                                    (a = []), (u = []);
                                    for (var n, e = 1, t = 0; t < 255; t++)
                                      (n = 128 & (a[t] = e)),
                                        (e <<= 1),
                                        (e &= 255),
                                        128 == n && (e ^= 27),
                                        (e ^= a[t]),
                                        (u[a[t]] = t);
                                    (a[255] = a[0]), (u[0] = 0), (i = !0);
                                  })(),
                                  (m = []),
                                  (c = []),
                                  (s = [[], [], [], []]),
                                  (f = [[], [], [], []]);
                                for (var e = 0; e < 256; e++) {
                                  var t = n(e);
                                  (m[e] = t),
                                    (c[t] = e),
                                    (s[0][e] = (o(2, t) << 24) | (t << 16) | (t << 8) | o(3, t)),
                                    (f[0][t] =
                                      (o(14, e) << 24) |
                                      (o(9, e) << 16) |
                                      (o(13, e) << 8) |
                                      o(11, e));
                                  for (var r = 1; r < 4; r++)
                                    (s[r][e] = (s[r - 1][e] >>> 8) | (s[r - 1][e] << 24)),
                                      (f[r][t] = (f[r - 1][t] >>> 8) | (f[r - 1][t] << 24));
                                }
                                d = !0;
                              }
                              function n (n, e) {
                                d || r();
                                var v = new Uint32Array(e);
                                v.set(m, 512), v.set(c, 768);
                                for (var t = 0; t < 4; t++)
                                  v.set(s[t], (4096 + 1024 * t) >> 2),
                                    v.set(f[t], (8192 + 1024 * t) >> 2);
                                var h = (function (n, e) {
                                  'use asm';
                                  var p = 0,
                                    g = 0,
                                    y = 0,
                                    w = 0,
                                    h = 0,
                                    m = 0,
                                    b = 0,
                                    E = 0,
                                    i = 0,
                                    o = 0,
                                    a = 0,
                                    u = 0,
                                    c = 0,
                                    s = 0,
                                    f = 0,
                                    d = 0,
                                    C = 0,
                                    T = 0,
                                    S = 0,
                                    I = 0,
                                    l = 0;
                                  var k = new n.Uint32Array(e),
                                    v = new n.Uint8Array(e);
                                  function x (n, e, t, r, i, o, a, u) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    i = i | 0;
                                    o = o | 0;
                                    a = a | 0;
                                    u = u | 0;
                                    var c = 0,
                                      s = 0,
                                      f = 0,
                                      d = 0,
                                      l = 0,
                                      v = 0,
                                      h = 0,
                                      m = 0;
                                    (c = t | 1024), (s = t | 2048), (f = t | 3072);
                                    (i = i ^ k[(n | 0) >> 2]),
                                      (o = o ^ k[(n | 4) >> 2]),
                                      (a = a ^ k[(n | 8) >> 2]),
                                      (u = u ^ k[(n | 12) >> 2]);
                                    for (m = 16; (m | 0) <= r << 4; m = (m + 16) | 0) {
                                      (d =
                                        k[(t | ((i >> 22) & 1020)) >> 2] ^
                                        k[(c | ((o >> 14) & 1020)) >> 2] ^
                                        k[(s | ((a >> 6) & 1020)) >> 2] ^
                                        k[(f | ((u << 2) & 1020)) >> 2] ^
                                        k[(n | m | 0) >> 2]),
                                        (l =
                                          k[(t | ((o >> 22) & 1020)) >> 2] ^
                                          k[(c | ((a >> 14) & 1020)) >> 2] ^
                                          k[(s | ((u >> 6) & 1020)) >> 2] ^
                                          k[(f | ((i << 2) & 1020)) >> 2] ^
                                          k[(n | m | 4) >> 2]),
                                        (v =
                                          k[(t | ((a >> 22) & 1020)) >> 2] ^
                                          k[(c | ((u >> 14) & 1020)) >> 2] ^
                                          k[(s | ((i >> 6) & 1020)) >> 2] ^
                                          k[(f | ((o << 2) & 1020)) >> 2] ^
                                          k[(n | m | 8) >> 2]),
                                        (h =
                                          k[(t | ((u >> 22) & 1020)) >> 2] ^
                                          k[(c | ((i >> 14) & 1020)) >> 2] ^
                                          k[(s | ((o >> 6) & 1020)) >> 2] ^
                                          k[(f | ((a << 2) & 1020)) >> 2] ^
                                          k[(n | m | 12) >> 2]);
                                      (i = d), (o = l), (a = v), (u = h);
                                    }
                                    (p =
                                      (k[(e | ((i >> 22) & 1020)) >> 2] << 24) ^
                                      (k[(e | ((o >> 14) & 1020)) >> 2] << 16) ^
                                      (k[(e | ((a >> 6) & 1020)) >> 2] << 8) ^
                                      k[(e | ((u << 2) & 1020)) >> 2] ^
                                      k[(n | m | 0) >> 2]),
                                      (g =
                                        (k[(e | ((o >> 22) & 1020)) >> 2] << 24) ^
                                        (k[(e | ((a >> 14) & 1020)) >> 2] << 16) ^
                                        (k[(e | ((u >> 6) & 1020)) >> 2] << 8) ^
                                        k[(e | ((i << 2) & 1020)) >> 2] ^
                                        k[(n | m | 4) >> 2]),
                                      (y =
                                        (k[(e | ((a >> 22) & 1020)) >> 2] << 24) ^
                                        (k[(e | ((u >> 14) & 1020)) >> 2] << 16) ^
                                        (k[(e | ((i >> 6) & 1020)) >> 2] << 8) ^
                                        k[(e | ((o << 2) & 1020)) >> 2] ^
                                        k[(n | m | 8) >> 2]),
                                      (w =
                                        (k[(e | ((u >> 22) & 1020)) >> 2] << 24) ^
                                        (k[(e | ((i >> 14) & 1020)) >> 2] << 16) ^
                                        (k[(e | ((o >> 6) & 1020)) >> 2] << 8) ^
                                        k[(e | ((a << 2) & 1020)) >> 2] ^
                                        k[(n | m | 12) >> 2]);
                                  }
                                  function M (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    x(0, 2048, 4096, l, n, e, t, r);
                                  }
                                  function R (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    var i = 0;
                                    x(1024, 3072, 8192, l, n, r, t, e);
                                    (i = g), (g = w), (w = i);
                                  }
                                  function A (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    x(0, 2048, 4096, l, h ^ n, m ^ e, b ^ t, E ^ r);
                                    (h = p), (m = g), (b = y), (E = w);
                                  }
                                  function N (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    var i = 0;
                                    x(1024, 3072, 8192, l, n, r, t, e);
                                    (i = g), (g = w), (w = i);
                                    (p = p ^ h), (g = g ^ m), (y = y ^ b), (w = w ^ E);
                                    (h = n), (m = e), (b = t), (E = r);
                                  }
                                  function D (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    x(0, 2048, 4096, l, h, m, b, E);
                                    (h = p = p ^ n),
                                      (m = g = g ^ e),
                                      (b = y = y ^ t),
                                      (E = w = w ^ r);
                                  }
                                  function _ (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    x(0, 2048, 4096, l, h, m, b, E);
                                    (p = p ^ n), (g = g ^ e), (y = y ^ t), (w = w ^ r);
                                    (h = n), (m = e), (b = t), (E = r);
                                  }
                                  function O (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    x(0, 2048, 4096, l, h, m, b, E);
                                    (h = p), (m = g), (b = y), (E = w);
                                    (p = p ^ n), (g = g ^ e), (y = y ^ t), (w = w ^ r);
                                  }
                                  function F (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    x(0, 2048, 4096, l, i, o, a, u);
                                    u = (~d & u) | (d & (u + 1));
                                    a = (~f & a) | (f & (a + ((u | 0) == 0)));
                                    o = (~s & o) | (s & (o + ((a | 0) == 0)));
                                    i = (~c & i) | (c & (i + ((o | 0) == 0)));
                                    p = p ^ n;
                                    g = g ^ e;
                                    y = y ^ t;
                                    w = w ^ r;
                                  }
                                  function L (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    var i = 0,
                                      o = 0,
                                      a = 0,
                                      u = 0,
                                      c = 0,
                                      s = 0,
                                      f = 0,
                                      d = 0,
                                      l = 0,
                                      v = 0;
                                    (n = n ^ h), (e = e ^ m), (t = t ^ b), (r = r ^ E);
                                    (i = C | 0), (o = T | 0), (a = S | 0), (u = I | 0);
                                    for (; (l | 0) < 128; l = (l + 1) | 0) {
                                      if (i >>> 31)
                                        (c = c ^ n), (s = s ^ e), (f = f ^ t), (d = d ^ r);
                                      (i = (i << 1) | (o >>> 31)),
                                        (o = (o << 1) | (a >>> 31)),
                                        (a = (a << 1) | (u >>> 31)),
                                        (u = u << 1);
                                      v = r & 1;
                                      (r = (r >>> 1) | (t << 31)),
                                        (t = (t >>> 1) | (e << 31)),
                                        (e = (e >>> 1) | (n << 31)),
                                        (n = n >>> 1);
                                      if (v) n = n ^ 3774873600;
                                    }
                                    (h = c), (m = s), (b = f), (E = d);
                                  }
                                  function t (n) {
                                    n = n | 0;
                                    l = n;
                                  }
                                  function P (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    (p = n), (g = e), (y = t), (w = r);
                                  }
                                  function B (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    (h = n), (m = e), (b = t), (E = r);
                                  }
                                  function j (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    (i = n), (o = e), (a = t), (u = r);
                                  }
                                  function U (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    (c = n), (s = e), (f = t), (d = r);
                                  }
                                  function H (n, e, t, r) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    r = r | 0;
                                    (u = (~d & u) | (d & r)),
                                      (a = (~f & a) | (f & t)),
                                      (o = (~s & o) | (s & e)),
                                      (i = (~c & i) | (c & n));
                                  }
                                  function r (n) {
                                    n = n | 0;
                                    if (n & 15) return -1;
                                    (v[n | 0] = p >>> 24),
                                      (v[n | 1] = (p >>> 16) & 255),
                                      (v[n | 2] = (p >>> 8) & 255),
                                      (v[n | 3] = p & 255),
                                      (v[n | 4] = g >>> 24),
                                      (v[n | 5] = (g >>> 16) & 255),
                                      (v[n | 6] = (g >>> 8) & 255),
                                      (v[n | 7] = g & 255),
                                      (v[n | 8] = y >>> 24),
                                      (v[n | 9] = (y >>> 16) & 255),
                                      (v[n | 10] = (y >>> 8) & 255),
                                      (v[n | 11] = y & 255),
                                      (v[n | 12] = w >>> 24),
                                      (v[n | 13] = (w >>> 16) & 255),
                                      (v[n | 14] = (w >>> 8) & 255),
                                      (v[n | 15] = w & 255);
                                    return 16;
                                  }
                                  function V (n) {
                                    n = n | 0;
                                    if (n & 15) return -1;
                                    (v[n | 0] = h >>> 24),
                                      (v[n | 1] = (h >>> 16) & 255),
                                      (v[n | 2] = (h >>> 8) & 255),
                                      (v[n | 3] = h & 255),
                                      (v[n | 4] = m >>> 24),
                                      (v[n | 5] = (m >>> 16) & 255),
                                      (v[n | 6] = (m >>> 8) & 255),
                                      (v[n | 7] = m & 255),
                                      (v[n | 8] = b >>> 24),
                                      (v[n | 9] = (b >>> 16) & 255),
                                      (v[n | 10] = (b >>> 8) & 255),
                                      (v[n | 11] = b & 255),
                                      (v[n | 12] = E >>> 24),
                                      (v[n | 13] = (E >>> 16) & 255),
                                      (v[n | 14] = (E >>> 8) & 255),
                                      (v[n | 15] = E & 255);
                                    return 16;
                                  }
                                  function q () {
                                    M(0, 0, 0, 0);
                                    (C = p), (T = g), (S = y), (I = w);
                                  }
                                  function z (n, e, t) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    var r = 0;
                                    if (e & 15) return -1;
                                    while ((t | 0) >= 16) {
                                      X[n & 7](
                                        (v[e | 0] << 24) |
                                          (v[e | 1] << 16) |
                                          (v[e | 2] << 8) |
                                          v[e | 3],
                                        (v[e | 4] << 24) |
                                          (v[e | 5] << 16) |
                                          (v[e | 6] << 8) |
                                          v[e | 7],
                                        (v[e | 8] << 24) |
                                          (v[e | 9] << 16) |
                                          (v[e | 10] << 8) |
                                          v[e | 11],
                                        (v[e | 12] << 24) |
                                          (v[e | 13] << 16) |
                                          (v[e | 14] << 8) |
                                          v[e | 15]
                                      );
                                      (v[e | 0] = p >>> 24),
                                        (v[e | 1] = (p >>> 16) & 255),
                                        (v[e | 2] = (p >>> 8) & 255),
                                        (v[e | 3] = p & 255),
                                        (v[e | 4] = g >>> 24),
                                        (v[e | 5] = (g >>> 16) & 255),
                                        (v[e | 6] = (g >>> 8) & 255),
                                        (v[e | 7] = g & 255),
                                        (v[e | 8] = y >>> 24),
                                        (v[e | 9] = (y >>> 16) & 255),
                                        (v[e | 10] = (y >>> 8) & 255),
                                        (v[e | 11] = y & 255),
                                        (v[e | 12] = w >>> 24),
                                        (v[e | 13] = (w >>> 16) & 255),
                                        (v[e | 14] = (w >>> 8) & 255),
                                        (v[e | 15] = w & 255);
                                      (r = (r + 16) | 0), (e = (e + 16) | 0), (t = (t - 16) | 0);
                                    }
                                    return r | 0;
                                  }
                                  function W (n, e, t) {
                                    n = n | 0;
                                    e = e | 0;
                                    t = t | 0;
                                    var r = 0;
                                    if (e & 15) return -1;
                                    while ((t | 0) >= 16) {
                                      G[n & 1](
                                        (v[e | 0] << 24) |
                                          (v[e | 1] << 16) |
                                          (v[e | 2] << 8) |
                                          v[e | 3],
                                        (v[e | 4] << 24) |
                                          (v[e | 5] << 16) |
                                          (v[e | 6] << 8) |
                                          v[e | 7],
                                        (v[e | 8] << 24) |
                                          (v[e | 9] << 16) |
                                          (v[e | 10] << 8) |
                                          v[e | 11],
                                        (v[e | 12] << 24) |
                                          (v[e | 13] << 16) |
                                          (v[e | 14] << 8) |
                                          v[e | 15]
                                      );
                                      (r = (r + 16) | 0), (e = (e + 16) | 0), (t = (t - 16) | 0);
                                    }
                                    return r | 0;
                                  }
                                  var X = [M, R, A, N, D, _, O, F];
                                  var G = [A, L];
                                  return {
                                    set_rounds: t,
                                    set_state: P,
                                    set_iv: B,
                                    set_nonce: j,
                                    set_mask: U,
                                    set_counter: H,
                                    get_state: r,
                                    get_iv: V,
                                    gcm_init: q,
                                    cipher: z,
                                    mac: W,
                                  };
                                })({ Uint8Array: Uint8Array, Uint32Array: Uint32Array }, e);
                                return (
                                  (h.set_key = function (n, e, t, r, i, o, a, u, c) {
                                    var s = v.subarray(0, 60);
                                    v.subarray(256, 316), s.set([e, t, r, i, o, a, u, c]);
                                    for (var f = n, d = 1; f < 4 * n + 28; f++) {
                                      var l = s[f - 1];
                                      (f % n == 0 || (8 === n && f % n == 4)) &&
                                        (l =
                                          (m[l >>> 24] << 24) ^
                                          (m[(l >>> 16) & 255] << 16) ^
                                          (m[(l >>> 8) & 255] << 8) ^
                                          m[255 & l]),
                                        f % n == 0 &&
                                          ((l = (l << 8) ^ (l >>> 24) ^ (d << 24)),
                                          (d = (d << 1) ^ (128 & d ? 27 : 0))),
                                        (s[f] = s[f - n] ^ l);
                                    }
                                    h.set_rounds(n + 5);
                                  }),
                                  h
                                );
                              }
                              return (
                                (n.ENC = { ECB: 0, CBC: 2, CFB: 4, OFB: 6, CTR: 7 }),
                                (n.MAC = { CBC: 0, GCM: 1 }),
                                (n.HEAP_DATA = 16384),
                                n
                              );
                            })(),
                            o =
                              ((a.prototype.AES_Encrypt_process = function (n) {
                                if (!(n instanceof Uint8Array))
                                  throw new TypeError("data isn't of expected type");
                                for (
                                  var e,
                                    t,
                                    r,
                                    i,
                                    o,
                                    a,
                                    u,
                                    c = this.asm,
                                    s = this.heap,
                                    f = w.ENC[this.mode],
                                    d = w.HEAP_DATA,
                                    l = this.pos,
                                    v = this.len,
                                    h = 0,
                                    m = n.length || 0,
                                    p = 0,
                                    g = 0,
                                    y = new Uint8Array((v + m) & -16);
                                  0 < m;

                                )
                                  (t = l + v),
                                    (r = n),
                                    (i = h),
                                    (o = m),
                                    (u = a = void 0),
                                    (a = (e = s).length - t),
                                    (u = a < o ? a : o),
                                    e.set(r.subarray(i, i + u), t),
                                    (v += g = u),
                                    (h += g),
                                    (m -= g),
                                    (g = c.cipher(f, d + l, v)) && y.set(s.subarray(l, l + g), p),
                                    (p += g),
                                    g < v ? ((l += g), (v -= g)) : (v = l = 0);
                                return (this.pos = l), (this.len = v), y;
                              }),
                              (a.prototype.AES_Encrypt_finish = function () {
                                var n = this.asm,
                                  e = this.heap,
                                  t = w.ENC[this.mode],
                                  r = w.HEAP_DATA,
                                  i = this.pos,
                                  o = this.len,
                                  a = 16 - (o % 16),
                                  u = o;
                                if (this.hasOwnProperty('padding'))
                                  if (this.padding) {
                                    for (var c = 0; c < a; ++c) e[i + o + c] = a;
                                    u = o += a;
                                  } else {
                                    if (o % 16)
                                      throw new f(
                                        'data length must be a multiple of the block size'
                                      );
                                  }
                                else o += a;
                                var s = new Uint8Array(u);
                                return (
                                  o && n.cipher(t, r + i, o),
                                  u && s.set(e.subarray(i, i + u)),
                                  (this.pos = 0),
                                  (this.len = 0),
                                  s
                                );
                              }),
                              a);
                          function a (n, e, t, r, i, o) {
                            void 0 === t && (t = !0),
                              (this.pos = 0),
                              (this.len = 0),
                              (this.mode = r),
                              (this.heap =
                                i ||
                                (function (n, e) {
                                  var t = n ? n.byteLength : e || 65536;
                                  if (4095 & t || t <= 0)
                                    throw new Error(
                                      'heap size must be a positive integer and a multiple of 4096'
                                    );
                                  return (n = n || new Uint8Array(new ArrayBuffer(t)));
                                })().subarray(w.HEAP_DATA)),
                              (this.asm = o || new w(null, this.heap.buffer)),
                              (this.pos = 0),
                              (this.len = 0);
                            var a = n.length;
                            if (16 !== a && 24 !== a && 32 !== a) throw new f('illegal key size');
                            var u = new DataView(n.buffer, n.byteOffset, n.byteLength);
                            if (
                              (this.asm.set_key(
                                a >> 2,
                                u.getUint32(0),
                                u.getUint32(4),
                                u.getUint32(8),
                                u.getUint32(12),
                                16 < a ? u.getUint32(16) : 0,
                                16 < a ? u.getUint32(20) : 0,
                                24 < a ? u.getUint32(24) : 0,
                                24 < a ? u.getUint32(28) : 0
                              ),
                              e !== F)
                            ) {
                              if (16 !== e.length) throw new f('illegal iv size');
                              var c = new DataView(e.buffer, e.byteOffset, e.byteLength);
                              this.asm.set_iv(
                                c.getUint32(0),
                                c.getUint32(4),
                                c.getUint32(8),
                                c.getUint32(12)
                              );
                            } else this.asm.set_iv(0, 0, 0, 0);
                            this.padding = t;
                          }
                          function u (n, e, t, r) {
                            void 0 === t && (t = !0), (this.aes = r || new o(n, e, t, 'CBC'));
                          }
                          n.AES_CBC =
                            ((u.encrypt = function (n, e, t, r) {
                              return void 0 === t && (t = !0), new u(e, r, t).encrypt(n);
                            }),
                            (u.prototype.encrypt = function (n) {
                              return (function () {
                                for (var n = [], e = 0; e < arguments.length; e++)
                                  n[e] = arguments[e];
                                for (
                                  var t = n.reduce(function (n, e) {
                                      return n + e.length;
                                    }, 0),
                                    r = new Uint8Array(t),
                                    i = 0,
                                    o = 0;
                                  o < n.length;
                                  o++
                                )
                                  r.set(n[o], i), (i += n[o].length);
                                return r;
                              })(this.aes.AES_Encrypt_process(n), this.aes.AES_Encrypt_finish());
                            }),
                            u);
                        })(G),
                        (_t.prototype.put = function (n, e) {
                          var t = { key: n, value: e };
                          if (
                            ((this._keymap[n] = t),
                            this.tail
                              ? ((this.tail.newer = t).older = this.tail)
                              : (this.head = t),
                            (this.tail = t),
                            this.size === this.limit)
                          )
                            return this.shift();
                          this.size++;
                        }),
                        (_t.prototype.shift = function () {
                          var n = this.head;
                          return (
                            n &&
                              (this.head.newer
                                ? ((this.head = this.head.newer), (this.head.older = F))
                                : (this.head = F),
                              (n.newer = n.older = F),
                              delete this._keymap[n.key]),
                            n
                          );
                        }),
                        (_t.prototype.get = function (n, e) {
                          var t = this._keymap[n];
                          if (t !== F)
                            return (
                              t === this.tail ||
                                (t.newer &&
                                  (t === this.head && (this.head = t.newer),
                                  (t.newer.older = t.older)),
                                t.older && (t.older.newer = t.newer),
                                (t.newer = F),
                                (t.older = this.tail),
                                this.tail && (this.tail.newer = t),
                                (this.tail = t)),
                              e ? t : t.value
                            );
                        }),
                        (_t.prototype.find = function (n) {
                          return this._keymap[n];
                        }),
                        (_t.prototype.set = function (n, e) {
                          var t,
                            r = this.get(n, !0);
                          return (
                            r
                              ? ((t = r.value), (r.value = e))
                              : (t = (t = this.put(n, e)) && t.value),
                            t
                          );
                        }),
                        (_t.prototype.toString = function () {
                          for (var n = '', e = this.head; e; )
                            (n += String(e.key) + ':' + e.value), (e = e.newer) && (n += ' < ');
                          return n;
                        }),
                        (Ot.MAX_ENTRIES = 150),
                        (Ot.DirectionType = { BACK: 1, FORWARD: 2 }),
                        (Ot.UrlType = { FUlL_URL: 1, HASH_ONLY: 2 }),
                        (Ft.EVENTS = {
                          BlackoutEnter: 'BlackoutEnter',
                          BlackoutLeave: 'BlackoutLeave',
                        }),
                        (Ft.ALWAYS_FALSE = function () {
                          return !1;
                        }),
                        (jn = {
                          severity: { ERROR: 0, WARN: 1, INFO: 2, DEBUG: 3 },
                          types: {
                            GENERAL_ERR: { code: 100, count: 0 },
                            INVALID_TIMING_ERR: { code: 101, count: 0 },
                            TOP_WINDOW_SIZE_ERR: { code: 102, count: 0 },
                            WINDOW_SIZE_NOT_VALID_ERR: { code: 103, count: 0 },
                            KEREN_ERR: { code: 104, count: 0 },
                          },
                          currentDebugInfo: null,
                          registerError: function (n, e) {
                            jn.registerDebugInfo(jn.severity.ERROR, n, e);
                          },
                          registerErrorAndLog: function (n, e) {
                            jn.registerDebugInfoAndLog(jn.severity.ERROR, n, e);
                          },
                          registerDebugInfoAndLog: function (n, e, t) {
                            jn.registerDebugInfo(n, e, t);
                          },
                          registerDebugInfo: function (n, e, t) {
                            e.count++,
                              null === jn.currentDebugInfo &&
                                (jn.currentDebugInfo = new Lt(n, e.code, e.count, t));
                          },
                          getRegisteredDebugInfo: function (n) {
                            var e = jn.currentDebugInfo;
                            return null === e || E.isUndefined(e)
                              ? null
                              : (n && jn.clearDebugInfo(), e);
                          },
                          clearDebugInfo: function () {
                            jn.currentDebugInfo = null;
                          },
                          setRegisteredDebugInfoOnEvent: function (n) {
                            var e;
                            (null !== n.getDebugInfo() && !E.isUndefined(n.getDebugInfo())) ||
                              (null != (e = jn.getRegisteredDebugInfo(!0)) && n.setDebugInfo(e));
                          },
                          setErrorOnEvent: function (n, e, t) {
                            jn.setDebugInfoOnEvent(n, jn.severity.ERROR, e, t);
                          },
                          setErrorOnEventAndLog: function (n, e, t, r) {
                            jn.setDebugInfoOnEvent(n, jn.severity.ERROR, e, t);
                          },
                          setWarnOnEvent: function (n, e, t) {
                            jn.setDebugInfoOnEvent(n, jn.severity.WARN, e, t);
                          },
                          setDebugInfoOnEvent: function (n, e, t, r) {
                            var i;
                            null === n || E.isUndefined(n)
                              ? logger.error('Failed setting debug on non-existing event')
                              : ((i = new Lt(e, t.code, t.count, r)), n.setDebugInfo(i));
                          },
                        }),
                        (Un = {
                          env: _,
                          config: L,
                          utils: B,
                          _: E,
                          sessionId: F,
                          visitorId: F,
                          externalIdResolver:
                            ((qn =
                              (qn = {
                                byAttribute: L.externalIdAttr,
                                byClassPrefix: L.externalIdByClassesOnPrefix,
                              }) || {}),
                            {
                              resolve: function (n) {
                                if (n.getAttribute) {
                                  if (qn.byClassPrefix) {
                                    var e = zt(n);
                                    if (e)
                                      return (function (n, e) {
                                        for (var t = n.parentElement, r = [e]; t; )
                                          (e = zt(t)) && r.unshift(e), (t = t.parentElement);
                                        return r.join(' ');
                                      })(n, e);
                                  }
                                  if (qn.byAttribute) {
                                    var t = n.getAttribute(qn.byAttribute);
                                    if (t) return t;
                                  }
                                }
                                return null;
                              },
                            }),
                          uaUtils: {
                            captureWindowSize: function () {
                              return E.isNumber(window.innerWidth) &&
                                E.isNumber(window.innerHeight)
                                ? qt(window.innerWidth, window.innerHeight, '[inner]')
                                : !E.isUndefined(O.body) &&
                                  E.isNumber(O.body.offsetWidth) &&
                                  E.isNumber(O.body.offsetHeight)
                                ? qt(O.body.offsetWidth, O.body.offsetHeight, '[offset]')
                                : null;
                            },
                            captureScreenSize: function () {
                              return qt(window.screen.width, window.screen.height, '[screen]');
                            },
                          },
                          debugHelper:
                            ((Hn = L),
                            {
                              visitLoadEvent: function (n) {
                                var e, t;
                                Hn.sendStateInfo &&
                                  (nt((e = {})),
                                  et(e),
                                  (t = {
                                    ver: Vn,
                                    config: (function (n) {
                                      var e,
                                        t,
                                        r = {};
                                      for (e in Hn)
                                        Hn.hasOwnProperty(e) &&
                                          ('object' == typeof Hn[e]
                                            ? 0 < (Hn[e].length || 0) && (r[e] = Hn[e])
                                            : ((t = '' + Hn[e]),
                                              '' + n[e] !== t &&
                                                (100 < t.length &&
                                                  (t = '[trimmed] ' + t.substring(0, 100)),
                                                (r[e] = t))));
                                      return r;
                                    })(e),
                                  }),
                                  n.setExtraInfo(
                                    at.prototype.DETECTOR_CONFIG_ID,
                                    JSON.stringify(t)
                                  ));
                              },
                              visitUnloadEvent: function (n) {},
                            }),
                          page: { snapshotEmitted: !(Vn = t), snapshotFuseData: F, timing: {} },
                          encryptionPendingEvents: [],
                          bindings: { registered: [], unsupportedEventTypes: [] },
                          plugins: {},
                          reports: { events: [], resources: [] },
                          state: {
                            loaded: !1,
                            handshakeDone: !1,
                            encryptionReady: !1,
                            stopped: !1,
                            clickStart: F,
                            clickStartType: F,
                            scrolling: {},
                            unloading: !1,
                            maxScrollReach: 0,
                            typableElementsLRUMap: new _t(20),
                            lastFocusData: {},
                            mouseEnterReported: !1,
                            hover: { hoverStartTimestamp: 0, hoverElementList: [] },
                            clsDebugCounter: 0,
                            dpr: window.devicePixelRatio,
                          },
                          touchDetected: !1,
                          ajaxUrls: new _t(20),
                          historyManager: new Ot(window, P, window.history),
                          blackoutManager: new Ft(window, P, L.blackoutWhenLocationContains),
                          debugInfoHandler: jn,
                          zoomType: { IN: 1, OUT: 2 },
                          version: _.detectorVersion,
                          logicalSegmentTracker: new (function (o, a, t, u) {
                            var r,
                              i,
                              c,
                              s,
                              f = !1;
                            function d (n) {
                              var e = n.join(',');
                              return t.validateSelector(e) ? e : null;
                            }
                            function l (n) {
                              for (var e, t, r = a.querySelectorAll(c), i = 0; i < r.length; i++) {
                                if ((e = r[i].getAttribute(u.labelByAttribute)) && e !== s) {
                                  (s = e),
                                    n &&
                                      (o.emit('logicalSegmentEntered', u.segmentationPrefix + e),
                                      (t = r[i].getAttribute(u.titleByAttribute)) &&
                                        o.emit('titleChanged', t));
                                  break;
                                }
                                n && (f = !0);
                              }
                            }
                            function v () {
                              setTimeout(l.gbBind(null, !0), 0);
                            }
                            function n () {
                              var n, e;
                              if (
                                ((i = d(u.triggerBySimpleSelector)),
                                (c = d(u.labelBySimpleSelector)),
                                i && c)
                              ) {
                                for (n = 0; n < u.triggerBySimpleSelector.length; n++)
                                  for (
                                    r = a.querySelectorAll(u.triggerBySimpleSelector[n]), e = 0;
                                    e < r.length;
                                    e++
                                  )
                                    B.addEventHandler(r[e], 'click', v, !0);
                                l(!1);
                              }
                            }
                            (this.init = function () {
                              n();
                            }),
                              (this.onBeforeEmittingPageEvent = function () {
                                f && l(!(f = !1));
                              });
                          })(P, O, wt(), {
                            triggerBySimpleSelector: L.segmentationTriggerBySimpleSelector,
                            labelBySimpleSelector: L.segmentationLabelBySimpleSelector,
                            labelByAttribute: L.segmentationLabelByAttribute,
                            titleByAttribute: L.segmentationTitleByAttribute,
                            segmentationPrefix: L.segmentationPrefix,
                          }),
                          segmentManager: new (function (r, u, c, i, n) {
                            n = n || { ignoreWhenLocationContains: F };
                            var s = !1,
                              e = '',
                              o = i.mask(B.stripHash(r.location.href)),
                              f = {
                                startedAt: B.currentTimestamp(),
                                value: r.location.pathname,
                                type: 'path',
                              };
                            function a (n) {
                              (e = i.mask(r.location.hash)), d() || l('hash', n, e);
                            }
                            function d () {
                              return (
                                n.ignoreWhenLocationContains &&
                                0 <= r.location.href.indexOf(n.ignoreWhenLocationContains)
                              );
                            }
                            function l (n, e, t) {
                              var r = B.currentTimestamp(),
                                i = f.value,
                                o = c.segmentChange(r),
                                a = {
                                  type: n,
                                  hint: e,
                                  current: t,
                                  last: i,
                                  lastDwell: r - f.startedAt,
                                };
                              -1 !== o && (a.lastLoadTime = o),
                                (f.startedAt = r),
                                (f.type = n),
                                (f.value = t),
                                (s = !0),
                                u.emit('segmentChanged', a);
                            }
                            u.on('init:loaded', function () {
                              (o = i.mask(B.stripHash(r.location.href))),
                                r.location.hash && a('load');
                            }),
                              u.on('navigation', function (n) {
                                var e, t;
                                n.direction === Ot.DirectionType.BACK
                                  ? (e = 'back')
                                  : n.direction === Ot.DirectionType.FORWARD && (e = 'forward'),
                                  n.urlType === Ot.UrlType.HASH_ONLY
                                    ? a(e)
                                    : ((t = e),
                                      (o = i.mask(B.stripHash(r.location.href))),
                                      d() || l('path', t, i.mask(r.location.pathname)));
                              }),
                              u.on('logicalSegmentEntered', function (n) {
                                var e = i.mask(B.joinPath(r.location.pathname, n));
                                (o = i.mask(B.joinPath(r.location.pathname, n))),
                                  l('path', 'logical', e);
                              }),
                              (this.onUnload = function () {
                                s &&
                                  u.emit('lastSegment', {
                                    last: f.value,
                                    lastDwell: B.currentTimestamp() - f.startedAt,
                                    lastLoadTime: f.lastLoadTime,
                                  });
                              }),
                              (this.visitEvent = function (n) {
                                (n.referrer = o), (n.segment = f.value), (n.subPage = e);
                              });
                          })(
                            O,
                            P,
                            new (function (e, t, r) {
                              var i = 50,
                                o = {
                                  pendingEvents: {},
                                  totalLoadTime: 0,
                                  startTime: 0,
                                  keepListen: !1,
                                },
                                a = null,
                                u = null,
                                c = (function (s, f, d, l) {
                                  var v = { IFRAME: !0, FRAME: !!l };
                                  function h (e) {
                                    var n,
                                      t,
                                      r,
                                      i,
                                      o,
                                      a,
                                      u = !1,
                                      c = e.nodeName.toUpperCase();
                                    if (
                                      c.match(/^(IMG|IFRAME|IMAGE)$/) ||
                                      (l && c.match(/^(FRAME)$/)) ||
                                      ('LINK' === c && e.rel && e.rel.match(/\bstylesheet\b/i))
                                    ) {
                                      if ('LINK' === c && e.rel && e.sheet) return;
                                      if (
                                        ((n = d(e)) && e.src !== n.url && (u = !0),
                                        !(o =
                                          e.src ||
                                          ('function' == typeof e.getAttribute &&
                                            e.getAttribute('xlink:href')) ||
                                          e.href) || o.match(/^(about:|javascript:|data:)/i))
                                      )
                                        return;
                                      if ((n && n.url !== o && (u = !0), 'IMG' === c)) {
                                        if (
                                          (e.naturalWidth && !u) ||
                                          ('' !== e.getAttribute('src') && e.complete)
                                        )
                                          return;
                                        if (
                                          'function' == typeof e.getAttribute &&
                                          '' === e.getAttribute('src')
                                        )
                                          return;
                                      }
                                      if (v[c] && u) return;
                                      n || s(e, o),
                                        (a = function (n) {
                                          f(n.target),
                                            B.removeEventHandler(e, 'load', a),
                                            B.removeEventHandler(e, 'error', a);
                                        }),
                                        B.addEventHandler(e, 'load', a),
                                        B.addEventHandler(e, 'error', a);
                                    } else
                                      e.nodeType === Node.ELEMENT_NODE &&
                                        ['IMAGE', 'IMG'].forEach(function (n) {
                                          if ((t = e.getElementsByTagName(n)).length)
                                            for (r = 0, i = t.length; r < i; r++) h(t[r]);
                                        }, this);
                                  }
                                  return {
                                    checkMutation: function (n) {
                                      var e, t, r;
                                      if ('attributes' === n.type) h(n.target);
                                      else if ('childList' === n.type) {
                                        for (t = n.addedNodes.length, e = 0; e < t; e++)
                                          h(n.addedNodes[e]);
                                        for (t = n.removedNodes.length, e = 0; e < t; e++)
                                          (r = n.removedNodes[e]),
                                            v[r.nodeName.toUpperCase()] && d(r) && f(r);
                                      }
                                    },
                                  };
                                })(
                                  function (n, e) {
                                    o.pendingEvents[t.idOf(n)] = { url: e };
                                  },
                                  function (n) {
                                    v(t.idOf(n));
                                  },
                                  function (n) {
                                    return o.pendingEvents[t.idOf(n)];
                                  },
                                  r.framesetRecordEnabled
                                );
                              function s (n) {
                                o.isRoutingStart && (u = o.totalLoadTime),
                                  (o.keepListen = !0),
                                  (o.pendingEvents = {}),
                                  (o.totalLoadTime = 0),
                                  (o.startTime = n),
                                  o.isRoutingStart ||
                                    (e.on('ajax:send', d),
                                    e.on('ajax:end', l),
                                    e.on('ajax:loadError', l),
                                    e.on('domMutation', h),
                                    (o.isRoutingStart = !0));
                              }
                              function f () {
                                B.isEmpty(o.pendingEvents) &&
                                  ((u = o.totalLoadTime), (o.keepListen = !1));
                              }
                              function d (n) {
                                o.keepListen && (o.pendingEvents[n.uuid] = { url: n.url });
                              }
                              function l (n) {
                                o.keepListen && v(n.uuid);
                              }
                              function v (n) {
                                var e;
                                o.pendingEvents[n] &&
                                  ((o.totalLoadTime = B.currentTimestamp() - o.startTime),
                                  delete o.pendingEvents[n],
                                  B.isEmpty(o.pendingEvents) &&
                                    ((e = i), a && clearTimeout(a), (a = setTimeout(f, e))));
                              }
                              function h (n) {
                                o.keepListen && c.checkMutation(n);
                              }
                              this.segmentChange = function (n) {
                                return r.recordSpaLoadTime && r.interceptAjax
                                  ? (s(n),
                                    null === u &&
                                      (u =
                                        window.performance.timing.domContentLoadedEventEnd -
                                        window.performance.timing.navigationStart),
                                    u)
                                  : -1;
                              };
                            })(P, Q, {
                              recordSpaLoadTime: L.recordSpaLoadTime,
                              interceptAjax: L.interceptAjax,
                              framesetRecordEnabled: L.framesetRecordEnabled,
                            }),
                            Y,
                            {
                              ignoreWhenLocationContains: L.segmentationIgnoreWhenLocationContains,
                            }
                          ),
                          botDetector: new (function (t, e, i) {
                            var o = 'bot.nh',
                              r = 'bot.d',
                              a = {
                                CLICKS_WITH_NO_MOUSE_MOVES: { code: '1', active: !0 },
                                NOT_TRUSTED_MOUSEEVENT: { code: '3', active: !0 },
                                INVALID_NAVIGATION_API_VALUES: { code: '4', active: !0 },
                                MOVE_AND_CLICK_SAME_COORDINATES_AND_TIMES: {
                                  code: '5',
                                  active: !0,
                                },
                              },
                              u = { MANY_MOUSE_MOVES_BETWEEN_CLICKS: { code: '-1', active: !0 } },
                              c = !1,
                              s = !1,
                              f = null,
                              d = null,
                              l = 0,
                              v = 100,
                              h = 0,
                              m = { robot: !1, human: !1 },
                              p = !1;
                            function g () {
                              n('mousemove', y), n('click', w), (p = !1);
                            }
                            function y (n) {
                              return (
                                c || ((d = B.getCoordinate(n)), (l = B.currentTimestamp())),
                                s && h++,
                                (c = !0)
                              );
                            }
                            function w (n) {
                              return (
                                n.type === _.mouseEvents.down &&
                                  (function (n) {
                                    if (n.type !== _.mouseEvents.down) return;
                                    s = !0;
                                    var e = B.getCoordinate(n);
                                    null !== f
                                      ? u.MANY_MOUSE_MOVES_BETWEEN_CLICKS.active &&
                                        !B.isSameCoordinates(e, f)
                                        ? 10 <= h &&
                                          (function (n) {
                                            n.code, (m.human = !0), i.set(r, n.code), g();
                                          })(u.MANY_MOUSE_MOVES_BETWEEN_CLICKS)
                                        : a.CLICKS_WITH_NO_MOUSE_MOVES.active &&
                                          B.isCoordinatesDistLargerThan(e, f, 10) &&
                                          0 === h &&
                                          b(a.CLICKS_WITH_NO_MOUSE_MOVES)
                                      : c &&
                                        (function (n) {
                                          if (!a.MOVE_AND_CLICK_SAME_COORDINATES_AND_TIMES.active)
                                            return;
                                          var e = B.getCoordinate(n);
                                          {
                                            var t, r;
                                            null !== d &&
                                              B.isSameCoordinates(e, d) &&
                                              B.currentTimestamp() - l < v &&
                                              ((t = i.get(o)),
                                              E.isUndefined(t)
                                                ? i.set(o, 1)
                                                : ((r = parseInt(t)),
                                                  isNaN(r) && (r = 1),
                                                  r++,
                                                  i.set(o, r),
                                                  b(a.MOVE_AND_CLICK_SAME_COORDINATES_AND_TIMES),
                                                  (a.MOVE_AND_CLICK_SAME_COORDINATES_AND_TIMES.active = !1)));
                                          }
                                        })(n);
                                    (h = 0), (f = e);
                                  })(n),
                                (function (n) {
                                  if (!a.NOT_TRUSTED_MOUSEEVENT.active) return;
                                  'isTrusted' in n &&
                                    !1 === n.isTrusted &&
                                    b(a.NOT_TRUSTED_MOUSEEVENT);
                                })(n),
                                !0
                              );
                            }
                            function n (e, n) {
                              try {
                                B.removeEventHandler(t.body, e, n);
                              } catch (n) {
                                logger.error(
                                  'BotDetector failed to remove ' +
                                    e +
                                    ' listener. ' +
                                    n.message(),
                                  n
                                );
                              }
                            }
                            function b (n) {
                              p &&
                                (n.code,
                                (n.active = !1),
                                i.set(r, n.code),
                                (m.robot = !0),
                                g(),
                                e.emit('botDetection', n.code));
                            }
                            (this.init = function () {
                              var n = i.get(r);
                              n ||
                                ((p = !0),
                                B.addEventHandler(t.body, 'mousemove', y, !0),
                                B.addEventHandler(t.body, 'click', w, !0));
                            }),
                              (this.isActive = function () {
                                return p;
                              }),
                              (this.notifyMouseAction = w);
                          })(O, P, W),
                          pageInfo: (function (n, e, t) {
                            var r, i, o, a;
                            if (!t || e) return F;
                            n.on('event:unload', function () {
                              t['gb.unloaded'] = !0;
                            });
                            try {
                              (r = (function () {
                                var e = t['gb.psn'] || '0';
                                try {
                                  e = parseInt(e) + 1;
                                } catch (n) {
                                  e = 1;
                                }
                                return (t['gb.psn'] = e);
                              })()),
                                (o = t['gb.btabid']),
                                (a = t['gb.unloaded']),
                                (void 0 !== o && void 0 !== a) ||
                                  ((o = B.uuid()), (t['gb.btabid'] = o)),
                                delete t['gb.unloaded'],
                                (i = o);
                            } catch (n) {}
                            return { pageSn: r, browserTabId: i };
                          })((window, P), window.top !== window, window.sessionStorage),
                          initialize: function () {
                            var n, e, t;
                            if (
                              (_.setup,
                              Un.version,
                              Un.setClientCookies(
                                ((L.visitorIdByQueryParam || L.sessionIdByQueryParam) &&
                                  ((e = (n = B.parseQuery(O.location.search.substring(1)))[
                                    L.sessionIdByQueryParam
                                  ]),
                                  (t = n[L.visitorIdByQueryParam])),
                                m.sessionId && (m.sessionId, (e = m.sessionId)),
                                L.clsByNativeCookie && (e = z.get(L.clsByNativeCookie)),
                                { sessionId: e, visitorId: t })
                              ),
                              void 0 !== L.enabledByChance &&
                                !pt(L.enabledByChance, W, 'recording'))
                            )
                              return (_.disabled = !0), void L.enabledByChance;
                            try {
                              if (void 0 !== R) {
                                var r = x.validate(R, L);
                                if (0 < r.errors.length)
                                  return void console.error(
                                    '[EyeView-1401]: Detector configuration validation failure. validation report:' +
                                      r
                                  );
                              }
                            } catch (n) {
                              return void console.error(
                                '[EyeView-1402]: Error while validating Detector configuration:' +
                                  n +
                                  '. Detector is DISABLED.'
                              );
                            }
                            try {
                              Un.checkSupportModeSession(),
                                Un.initializePageDetails(),
                                Un.registerPlugins(),
                                P.on('clsDebug', Un.saveClsDebugErrorEvent),
                                P.on(Ft.EVENTS.BlackoutEnter, Un.onBlackoutEnter),
                                P.on(Ft.EVENTS.BlackoutLeave, Un.onBlackoutLeave),
                                this.asStoppable().isStopped(!0),
                                Un.addDomReadyEventHandler(),
                                Un.updateScrollReach(),
                                Un.registerPreLoadEvents(),
                                P.on('3rdpartymap:scReport', Un.saveThirdPartyMapEvent),
                                P.on('3rdPartyAttribute', Un.saveThirdPartyAttributeEvent),
                                P.on('abTesting', Un.saveABTesting),
                                P.on('pageNameResolved', Un.onPageNameResolved),
                                P.on('encryptionReady', Un.onEncryptionReady),
                                P.on('dom:fuseBlown', Un.onDomFuseBlown),
                                P.emit('init:preloaded', {
                                  sessionId: Un.sessionId,
                                  visitorId: Un.visitorId,
                                  pageId: Un.page.id,
                                }),
                                Un.saveDocumentLoadEvent(Un.page.initializationTimestamp),
                                Un.page.id,
                                Un.page.urlWithoutHash;
                              var i = window.document.readyState;
                              O.body && 'complete' === i
                                ? Un.onLoad()
                                : B.addEventHandler(window, 'load', Un.onLoad, !1);
                            } catch (n) {
                              logger.error(
                                'ERROR: while initializing detector. Exception: ',
                                n.stack ? n.stack : n.message
                              ),
                                console.log(
                                  'WARNING[EyeView-1302]: Failed initializing detector script - ' +
                                    n.message
                                ),
                                Un.saveClsDebugErrorEvent('initialize', n);
                            }
                            L.reportValidationErrors &&
                              P.on('formValidationError', Un.saveValidationError);
                          },
                          onEncryptionReady: function () {
                            var n;
                            for (
                              Un.state.encryptionReady = !0, n = 0;
                              n < Un.encryptionPendingEvents.length;
                              n++
                            )
                              P.emit('saveEvent', Un.encryptionPendingEvents[n]);
                            Un.encryptionPendingEvents = [];
                          },
                          onBlackoutEnter: function (n) {
                            var e;
                            window === window.top &&
                              (((e = Un.createEventObject(
                                'blackout',
                                B.currentTimestamp(),
                                null
                              )).value = n),
                              Un.saveEvent(e));
                          },
                          onBlackoutLeave: function () {
                            Un.savePageUpdate();
                          },
                          onLoad: function () {
                            window.location.href;
                            var n = B.currentTimestamp();
                            Un.state.loaded ||
                              (B.time('onLoadInitialization'),
                              Un.documentEvent &&
                                0 < O.title.length &&
                                (void 0 === Un.page.title || 0 === Un.page.title.length) &&
                                ((Un.page.title = Un.getPageTitle()),
                                Un.documentEvent.setExtraInfo(
                                  at.prototype.VISUAL_NAME,
                                  Un.page.title
                                )),
                              !B.getLocationUrlSplitByHash(window.location.href).hash &&
                                0 < L.segmentationTriggerBySimpleSelector.length &&
                                0 < L.segmentationLabelBySimpleSelector.length &&
                                '' !== L.segmentationLabelByAttribute &&
                                '' !== L.segmentationTitleByAttribute &&
                                Un.logicalSegmentTracker.init(),
                              L.botDetection && !B.hasTouch() && Un.botDetector.init(),
                              (Un.state.loaded = !0),
                              (Un.page.loadTimestamp = n),
                              Un.trySendPerformanceEvent(),
                              P.emit('init:loaded'),
                              Un.registerPostLoadEvents(),
                              Un.plugins.domRecordingPlugin && new Hr(O, P, L),
                              P.emit('init:post_binding'),
                              B.timeEnd('onLoadInitialization'),
                              window.location.href);
                          },
                          registerPlugins: function () {
                            var t = this;
                            E.forOwn(Un.plugins, function (n, e) {
                              n.initialize(P, t);
                            });
                          },
                          registerPreLoadEvents: function () {
                            function n () {
                              return Un.state.unloading;
                            }
                            var e = [
                              {
                                type: 'beforeunload',
                                interception: Un.interceptUnload,
                                target: window,
                                logicalName: 'unload',
                                filter: n,
                              },
                              {
                                type: 'pagehide',
                                interception: Un.interceptUnload,
                                target: window,
                                logicalName: 'unload',
                                filter: n,
                              },
                              {
                                type: 'resize',
                                internallyDispatchAs: 'window',
                                filter: Un.filterResize,
                                interception: Un.interceptResize,
                                target: window,
                              },
                              {
                                type: Un.getChangeEventType(),
                                valueExtraction: Un.extractElementValue,
                                interception: Un.interceptFocusLost,
                                filter: Un.filterNonChangableEventsElements,
                                logicalName: 'change',
                                target: O,
                              },
                              { type: 'reset', target: O },
                              {
                                type: 'submit',
                                valueExtraction: Un.extractElementSource,
                                target: O,
                              },
                              { type: 'keyup', target: O, internalOnly: !0 },
                              {
                                type: Un.getFocusInEventType(),
                                internallyDispatchAs: 'element',
                                valueExtraction: Un.extractElementValue,
                                interception: Un.interceptFocusIn,
                                filter: Un.filterNonTypableElements,
                                target: O,
                              },
                            ];
                            Un.page.hasTouch
                              ? (e.push({
                                  type: 'touchstart',
                                  interception: Un.interceptTouchStart,
                                  target: O,
                                }),
                                e.push({
                                  type: B.isHybridAndroid() ? 'touchmove' : 'touchend',
                                  interception: Un.interceptClickEnd,
                                  target: O,
                                }))
                              : (e.push({
                                  type: _.mouseEvents.down,
                                  interception: Un.interceptClickStart,
                                  target: O,
                                  logicalName: 'mousedown',
                                }),
                                e.push({
                                  type: _.mouseEvents.up,
                                  interception: Un.interceptClickEnd,
                                  target: O,
                                })),
                              B.isMobile() ||
                                (e.push({
                                  type: 'dragstart',
                                  interception: Un.interceptDragStart,
                                  target: O,
                                }),
                                e.push({
                                  type: 'dragend',
                                  interception: Un.interceptDragEnd,
                                  target: O,
                                })),
                              'blur' !== Un.getChangeEventType() &&
                                e.push({
                                  preload: !0,
                                  type: 'blur',
                                  valueExtraction: Un.extractElementValue,
                                  interception: Un.interceptBlur,
                                  filter: Un.filterNonTypableElements,
                                  logicalName: 'change',
                                  target: O,
                                }),
                              L.recordMouseMoves &&
                                e.push({
                                  type: 'mousemove',
                                  valueExtraction: Un.extractMouseMoveValue,
                                  encodeValue: !1,
                                  interception: Un.interceptMouseMove,
                                  dontSendElement: !0,
                                  target: O,
                                }),
                              L.recordHovers &&
                                e.push({
                                  type: 'mouseover',
                                  encodeValue: !1,
                                  filter: Un.filterHovers,
                                  interception: Un.interceptMouseOver,
                                  target: O,
                                }),
                              L.recordScrolls &&
                                e.push({
                                  type: 'scroll',
                                  debounceBy: L.debounceScrolls,
                                  valueExtraction: Un.extractScrollValue,
                                  filter: Un.filterScrollElements,
                                  interception: Un.interceptScroll,
                                  target: O,
                                });
                            var t = B.getMouseEnterTarget();
                            (t !== O && t !== window) ||
                              e.push({
                                type: 'mouseenter',
                                interception: Un.interceptMouseEnter,
                                target: t,
                              }),
                              Un.shouldListenToKeyEvents() &&
                                (e.push({
                                  type: 'keydown',
                                  interception: Un.interceptKeyboard,
                                  target: O,
                                }),
                                e.push({
                                  type: 'keypress',
                                  interception: Un.interceptKeyboard,
                                  target: O,
                                })),
                              L.domRecordEnabled &&
                                (P.on('pageSnapshot:save', Un.savePageSnapshotEvent),
                                P.on('pageUpdate', Un.savePageUpdate)),
                              L.resourcesRecordEnabled &&
                                P.on('saveResourceEvent', Un.saveResourceDataEvent),
                              L.resourcesRecordAllowCors &&
                                P.on('saveCorsDeniedEvent', Un.saveCorsDeniedDataEvent),
                              L.clientAttributesEnabled &&
                                P.on('clientAttribute', Un.saveClientAttributeEvent),
                              L.resourceTimingRecordEnabled &&
                                pt(
                                  L.resourceTimingRecordEnabledByChance,
                                  W,
                                  'performanceRecord'
                                ) &&
                                P.on('waterfall', Un.savePerformanceDataEvent),
                              (Un.page.hasTimingAPI && !L.recordAjaxCallsAnyway) ||
                                (P.on('ajax:load', Un.recordAjaxResource),
                                P.on('ajax:error', Un.recordAjaxResource)),
                              -1 !== L.ajaxRecordSessionLimit &&
                                P.on('ajax:limitReached', Un.ajaxLimitReached),
                              P.on('devToolsVisibilityChanged', Un.saveDevToolsChangeEvent),
                              P.on('domTampered', Un.saveDomTamperedEvent),
                              P.on('ajax:loadend', Un.saveAjaxRequestEvent),
                              P.on('ajax:reportStats', Un.saveAjaxStatsEvent),
                              P.on('segmentChanged', Un.saveSegmentChangedEvent),
                              P.on('lastSegment', Un.saveLastSegmentEvent),
                              P.on('titleChanged', Un.saveTitleChanged),
                              P.on('botDetection', Un.saveBotDetectionEvent),
                              P.on('reporter:idle', Un.saveIdleEvent),
                              P.on('customEvent', Un.saveCustomEvent),
                              P.on('customMapEvent', Un.saveCustomMapEvent),
                              P.on('pageError', Un.onPageError),
                              P.on('parentWindowInfo', Un.setClientCookies),
                              P.on('reportStruggle', Un.saveStruggle),
                              P.on('invalidateSession', Un.onInvalidateSession),
                              Un.bindPageEvents(e);
                          },
                          saveIdleEvent: function (n) {
                            var e = B.currentTimestamp(),
                              t = Un.createEventObject('idle', e, null);
                            (t.value = e - n.idleBaseTime),
                              t.setExtraInfo(
                                at.prototype.TIME_SINCE_LAST_EVENT,
                                e - n.latestEventTime
                              ),
                              Un.saveEvent(t);
                          },
                          saveBotDetectionEvent: function (n) {
                            var e = Un.createEventObject(
                              'botDetection',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = n), (e.shouldEncodeValue = !1), Un.saveEvent(e);
                          },
                          registerPostLoadEvents: function () {
                            var n = [];
                            Un.state.mouseEnterReported ||
                              B.getMouseEnterTarget() !== O.body ||
                              n.push({
                                type: 'mouseenter',
                                interception: Un.interceptMouseEnter,
                                target: O.body,
                              }),
                              0 < n.length && Un.bindPageEvents(n);
                          },
                          bindPageEvents: function (n) {
                            B.time('bindPageEvents'),
                              E.forEach(n, function (n) {
                                Un.registerEventBinding(n);
                              }),
                              Un.bindings.registered.length,
                              E.pluck(Un.bindings.registered, 'type'),
                              Un.bindings.unsupportedEventTypes.length &&
                                Un.bindings.unsupportedEventTypes.join(', '),
                              B.timeEnd('bindPageEvents');
                          },
                          registerEventBinding: function (e) {
                            var n = e.target || window.document.body;
                            if (E.isUndefined(n) || null == n) e.type;
                            else
                              try {
                                Un.handleElementsEvents(n, e);
                              } catch (n) {
                                logger.error(
                                  "Failed binding '" + e.type + "'. Error: " + n.message,
                                  n
                                ),
                                  window.console && console.error(n);
                              }
                          },
                          handleElementsEvents: function (n, e) {
                            var t,
                              r = e.type;
                            E.contains(_.eventTypes, r) &&
                              (B.isEventSupported(r)
                                ? ((t = Un.createHandler(e)),
                                  B.addEventHandler(n, r, t, !0),
                                  Un.bindings.registered.push({ type: r, el: n, handler: t }))
                                : Un.bindings.unsupportedEventTypes.push(r));
                          },
                          createHandler: function (e) {
                            var n,
                              t = function (n) {
                                if (
                                  (_n.bounceAll(n.type),
                                  Un.handleDOMEvent(n, e),
                                  'beforeunload' !== n.type)
                                )
                                  return !0;
                              };
                            return (
                              0 < (e.debounceBy || 0) &&
                                ((n = _n[e.type])
                                  ? (t = n(t, e.debounceBy).debouncedHandler)
                                  : e.type),
                              t
                            );
                          },
                          handleDOMEvent: function (e, n) {
                            try {
                              if (
                                ((e = e || window.event),
                                !E.isUndefined(e._cls_handled) && !0 === e._cls_handled)
                              )
                                return;
                              (e._cls_handled = !0), B.time('handleDOMEvent_' + e.type);
                              var t = B.extractElementFromEvent(e),
                                r = B.getElementId(t);
                              (L.ignorableElementIds && E.contains(L.ignorableElementIds, r)) ||
                                Un.handleEvent(e, t, n),
                                B.timeEnd('handleDOMEvent_' + e.type);
                            } catch (n) {
                              logger.error(
                                'ERROR: while handling ' + e.type + ' DOM event ',
                                e,
                                ' Exception: ',
                                n.stack ? n.stack : n.message
                              ),
                                Un.saveClsDebugErrorEvent(
                                  'handleDOMEvent',
                                  n,
                                  'event type=' + e.type
                                );
                            }
                          },
                          assignSelectorInfo: function (n, e) {
                            var t = X.getSelectorInfo(n);
                            (e.selectorExpression = t.selector || _.encoding.rootSelector),
                              t.hostSelectorPath &&
                                e.setExtraInfo(
                                  at.prototype.HOST_SELECTOR_PATH,
                                  t.hostSelectorPath
                                );
                          },
                          handleEvent: function (n, e, t) {
                            var r, i, o, a, u, c;
                            t.internallyDispatchAs &&
                              P.emit(t.internallyDispatchAs + ':' + t.type, e),
                              (E.isFunction(t.filter) && t.filter(e, n)) ||
                                ((r = B.currentTimestamp()),
                                (i = n.type),
                                B.time('handleEvent_' + i),
                                ((o = Un.createEventObject(i, r, e)).domEvent = n),
                                (a =
                                  !E.isUndefined(t.dontSendElement) && !0 === t.dontSendElement),
                                Un.assignSelectorInfo(e, o),
                                (o.selectorExpression = a
                                  ? _.encoding.rootSelector
                                  : o.selectorExpression),
                                (o.binding = t),
                                E.isUndefined(t.encodeValue) ||
                                  !1 !== t.encodeValue ||
                                  (o.shouldEncodeValue = !1),
                                Un.extractValue(o, t),
                                Un.extractExternalId(o, e),
                                Un.interceptReport(o, t),
                                L.reportVisualNames &&
                                  o.report &&
                                  !a &&
                                  (c =
                                    L.visualName && L.visualName.eventsToCalcDistance[o.type]
                                      ? ((u = o.getExtraInfo(at.prototype.COORDINATE_ATTR)),
                                        Un.extractVisualName(e, u.x, u.y))
                                      : Un.extractVisualName(e)) &&
                                  o.setExtraInfo(at.prototype.VISUAL_NAME, c),
                                Un.autoMaskingSignaled &&
                                  (o.setExtraInfo(
                                    at.prototype.AUTO_MASKING,
                                    Un.autoMaskingSignaled
                                  ),
                                  (Un.autoMaskingSignaled = null)),
                                t.internalOnly || Un.saveEvent(o),
                                P.emit('event:' + o.type, o),
                                B.timeEnd('handleEvent' + i));
                          },
                          createEventObject: function (n, e, t) {
                            var r = new at(n, e, t, Un.page.id);
                            return Un.segmentManager.visitEvent(r), r;
                          },
                          onDomReady: function () {
                            P.emit('init:domready');
                          },
                          onAutoMaskingApplied: function (n, e) {
                            n.tagName, n.id, (Un.autoMaskingSignaled = e);
                          },
                          addDomReadyEventHandler: function () {
                            'interactive' === O.readyState
                              ? Un.onDomReady()
                              : B.addEventHandler(window, 'DOMContentLoaded', Un.onDomReady, !0);
                          },
                          extractValue: function (e, n) {
                            try {
                              var t;
                              E.isUndefined(n.valueExtraction) ||
                                ((t = n.valueExtraction(e.domEvent, e.element)),
                                E.isUndefined(t) || null == t || (e.value = t));
                            } catch (n) {
                              logger.error(
                                'Failed extracting value for event ' +
                                  e.type +
                                  ' - ' +
                                  n.name +
                                  ': ' +
                                  n.message,
                                n
                              ),
                                'clsdebug' !== e.type &&
                                  Un.saveClsDebugErrorEvent(
                                    'extractValue',
                                    n,
                                    'event type=' + e.type
                                  );
                            }
                          },
                          extractExternalId: function (n, e) {
                            var t;
                            e &&
                              B.isElement(e) &&
                              (t = this.externalIdResolver.resolve(e)) &&
                              n.setExtraInfo(at.prototype.EXTERNAL_ID, t);
                          },
                          interceptReport: function (e, n) {
                            if (!E.isUndefined(n.interception))
                              try {
                                e.report = n.interception(e);
                              } catch (n) {
                                logger.error(
                                  'Failed intercepting ' + e.type + ' event: ' + n.message,
                                  n,
                                  e
                                ),
                                  'clsdebug' !== e.type &&
                                    Un.saveClsDebugErrorEvent(
                                      'interceptReport',
                                      n,
                                      'event type=' + e.type
                                    );
                              }
                          },
                          addEvent: function (n) {
                            Un.config.debugMode && Un.reports.events.push(n);
                          },
                          getFocusInEventType: function () {
                            return B.isOldIE() ? 'focusin' : 'focus';
                          },
                          getChangeEventType: function () {
                            return B.isOldIE()
                              ? 'onfocusout' in O
                                ? 'focusout'
                                : 'blur'
                              : 'change';
                          },
                          startFocusTiming: function (n) {
                            var e = B.currentTimestamp(),
                              t = Un.state.lastFocusData.startTime;
                            Un.state.lastFocusData = {
                              element: n,
                              startTime: e,
                              prevFocusStartTime: t,
                            };
                          },
                          endFocusTiming: function (n) {
                            var e;
                            Un.state.lastFocusData.element === n &&
                              ((e = B.currentTimestamp()),
                              (Un.state.lastFocusData.focusTime =
                                e - Un.state.lastFocusData.startTime));
                          },
                          filterNonTypableElements: function (n, e) {
                            return (
                              null === n ||
                              (Un.isChangebleElement(n) &&
                                ('focus' === e.type || 'focusin' === e.type
                                  ? Un.startFocusTiming(n)
                                  : 'blur' === e.type && Un.endFocusTiming(n)),
                              !Un.isTypableElement(n))
                            );
                          },
                          filterNonChangableEventsElements: function (n, e) {
                            return (
                              null === n ||
                              null === e ||
                              (Un.isChangebleElement(n) && Un.endFocusTiming(n),
                              'change' !== e.type && !Un.isChangebleElement(n))
                            );
                          },
                          interceptFocusIn: function (n) {
                            return Un.checkTypedContentHasChangedAndUpdate(n), !1;
                          },
                          interceptFocusLost: function (n) {
                            return (
                              null !== n &&
                              null !== n.element &&
                              (Un.state.lastFocusData.focusTime &&
                                n.setExtraInfo(
                                  n.FOCUS_TIME_ATTR,
                                  Un.state.lastFocusData.focusTime
                                ),
                              P.emit('event:elementChange', n),
                              !!Un.isSelectableElement(n.element) ||
                                Un.checkTypedContentHasChangedAndUpdate(n))
                            );
                          },
                          interceptBlur: function (n) {
                            return (
                              Un.state.lastFocusData.focusTime &&
                                n.setExtraInfo(
                                  n.FOCUS_TIME_ATTR,
                                  Un.state.lastFocusData.focusTime
                                ),
                              P.emit('event:elementChange', n),
                              Un.checkTypedContentHasChangedAndUpdate(n)
                            );
                          },
                          checkTypedContentHasChangedAndUpdate: function (n) {
                            var e = 'focus' === n.type || 'focusin' === n.type,
                              t = 'blur' === n.type || 'focusout' === n.type,
                              r = n.selectorExpression,
                              i = n.value;
                            if (null === i || E.isUndefined(i)) return !1;
                            var o = { text: i, markAutoComplete: !1 },
                              a = Un.state.typableElementsLRUMap.set(r, o),
                              u = E.isUndefined(a);
                            if (u && t) return !1;
                            if (
                              (e &&
                                !u &&
                                a.text !== i &&
                                0 <= i.toLocaleLowerCase().indexOf(a.text.toLocaleLowerCase()) &&
                                (o.markAutoComplete = !0),
                              t && !u && a.markAutoComplete)
                            ) {
                              var c,
                                s = Un.state.lastFocusData.prevFocusStartTime;
                              return (
                                !E.isUndefined(s) &&
                                E.isNumber(s) &&
                                Un.state.lastFocusData.element === n.element
                                  ? ((c = B.currentTimestamp() - s),
                                    n.setExtraInfo(n.FOCUS_TIME_ATTR, c))
                                  : n.setExtraInfo(n.FOCUS_TIME_ATTR, -1),
                                n.setExtraInfo(n.AUTO_COMPLETE_ATTR, !0),
                                !0
                              );
                            }
                            return u || a.text !== i;
                          },
                          isMouseEvent: function (n) {
                            return n === _.mouseEvents.down || n === _.mouseEvents.up;
                          },
                          isTouchEvent: function (n) {
                            return 'touchstart' === n || 'touchend' === n || 'touchmove' === n;
                          },
                          interceptMouseEnter: function (n) {
                            if (Un.state.mouseEnterReported) return !1;
                            var e = B.getCoordinate(n.domEvent);
                            return (
                              n.setExtraInfo(at.prototype.COORDINATE_ATTR, e),
                              Un.removeEventBinding('mouseenter'),
                              (Un.state.mouseEnterReported = !0),
                              Un.page.hasTouch &&
                                !Un.touchDetected &&
                                B.isChromeDesktop() &&
                                (Un.switchTouchToMouse(), (Un.page.hasTouch = !1)),
                              !0
                            );
                          },
                          switchTouchToMouse: function () {
                            Un.removeEventBinding('touchstart'),
                              B.isHybridAndroid()
                                ? Un.removeEventBinding('touchmove')
                                : Un.removeEventBinding('touchend');
                            var n = [
                              {
                                type: _.mouseEvents.down,
                                interception: Un.interceptClickStart,
                                target: O,
                                logicalName: 'mousedown',
                              },
                              {
                                type: _.mouseEvents.up,
                                interception: Un.interceptClickEnd,
                                target: O,
                                logicalName: 'mouseup',
                              },
                            ];
                            Un.bindPageEvents(n);
                          },
                          filterHovers: function (e) {
                            try {
                              if (
                                'undefined' == typeof jQuery ||
                                E.isUndefined(jQuery) ||
                                E.isUndefined(jQuery._data)
                              )
                                return !0;
                              for (
                                var n = e,
                                  t = 1,
                                  r = E.isNumber(L.mhDeepLevel) ? L.mhDeepLevel : 1;
                                null !== n && n !== O.body && t <= r;

                              ) {
                                var i = jQuery._data(n, 'events');
                                if (i && i.mouseover && 0 < i.mouseover.length)
                                  return L.mhDebug && n.id && n.id, Un.addHoverElement(n), !0;
                                t++, (n = n.parentElement);
                              }
                            } catch (n) {
                              logger.error(
                                'Exception while extracting hover information for element : ',
                                e,
                                n.message,
                                n
                              ),
                                Un.saveClsDebugErrorEvent(
                                  'filterHovers',
                                  n,
                                  'element=' + (e ? e.nodeName : 'null')
                                );
                            }
                            return !0;
                          },
                          addHoverElement: function (n) {
                            Un.state.hover.hoverElementList.length < L.mhMaxInMemeoryHovers &&
                              (Un.state.hover.hoverElementList.push(n),
                              (Un.state.hover.hoverStartTimestamp = B.currentTimestamp()));
                          },
                          cleanHoverElements: function () {
                            L.mhDebug,
                              (Un.state.hover.hoverElementList = []),
                              (Un.state.hover.hoverStartTimestamp = 0);
                          },
                          filterResize: function () {
                            return B.isOldIE();
                          },
                          interceptResize: function (n) {
                            var e = B.getWindowSize(),
                              t = B.getScreenSize(),
                              r = !1;
                            return (
                              null === e ||
                                null === Un.page.windowSize ||
                                (Un.page.windowSize.width === e.width &&
                                  Un.page.windowSize.height === e.height) ||
                                ((Un.page.windowSize = e), (r = !0)),
                              null === t ||
                                null === Un.page.screenSize ||
                                (Un.page.screenSize.width === t.width &&
                                  Un.page.screenSize.height === t.height) ||
                                ((Un.page.screenSize = t), (r = !0)),
                              window.devicePixelRatio !== Un.state.dpr &&
                                (window.devicePixelRatio > Un.state.dpr
                                  ? n.setExtraInfo(n.ZOOM, Un.zoomType.IN)
                                  : n.setExtraInfo(n.ZOOM, Un.zoomType.OUT),
                                (Un.state.dpr = window.devicePixelRatio)),
                              (n.value = {}),
                              (n.value.dpr = Un.state.dpr),
                              (n.value.window = Un.page.windowSize),
                              (n.value.screen = Un.page.screenSize),
                              r
                            );
                          },
                          interceptMouseOver: function () {
                            return !1;
                          },
                          interceptClickStart: function (n) {
                            return (
                              Un.botDetector.isActive() &&
                                Un.isMouseEvent(n.type) &&
                                Un.botDetector.notifyMouseAction(n.domEvent),
                              L.recordHovers && Un.saveHoverEvent(),
                              (Un.state.clickStart = Un.createClickDetailsObject(n)),
                              !(Un.state.clickStartType = 'mousedown')
                            );
                          },
                          interceptTouchStart: function (n) {
                            return (
                              (Un.touchDetected = !0),
                              (Un.state.clickStartType = 'touchstart'),
                              (Un.state.clickStart = Un.createClickDetailsObject(n)),
                              !1
                            );
                          },
                          interceptClickEnd: function (n) {
                            Un.botDetector.isActive() &&
                              Un.isMouseEvent(n.type) &&
                              Un.botDetector.notifyMouseAction(n.domEvent);
                            var e,
                              t = !1,
                              r = Un.state.clickStart,
                              i = Un.createClickDetailsObject(n);
                            if (
                              ('touchend' === n.type &&
                                r &&
                                i.elPosition &&
                                i.elPosition.left &&
                                Math.abs(
                                  parseInt(i.elPosition.left, 10) -
                                    (parseInt(r.elPosition.left, 10) || 0)
                                ) > L.minDragPixels) ||
                              (i.elPosition &&
                                i.elPosition.right &&
                                Math.abs(
                                  parseInt(i.elPosition.right, 10) -
                                    (parseInt(r.elPosition.right, 10) || 0)
                                ) > L.minDragPixels) ||
                              (i.elPosition &&
                                i.elPosition.top &&
                                Math.abs(
                                  parseInt(i.elPosition.top, 10) -
                                    (parseInt(r.elPosition.top, 10) || 0)
                                ) > L.minDragPixels) ||
                              (i.elPosition &&
                                i.elPosition.bottom &&
                                Math.abs(
                                  parseInt(i.elPosition.bottom, 10) -
                                    (parseInt(r.elPosition.bottom, 10) || 0)
                                ) > L.minDragPixels)
                            )
                              Un.handleDrag(n, r, i), (t = !0);
                            else if (r) {
                              if (B.isMobile())
                                if (
                                  r &&
                                  (Math.abs(i.coordinate.x - r.coordinate.x) > L.minDragPixels ||
                                    Math.abs(i.coordinate.y - r.coordinate.y) > L.minDragPixels)
                                )
                                  return !1;
                              (n.type = Un.state.clickStartType),
                                (n.value = r),
                                (n.timestamp = r.timestamp),
                                n.setExtraInfo(
                                  at.prototype.COORDINATE_ATTR,
                                  Un.state.clickStart.coordinate
                                ),
                                E.isUndefined(n.element) ||
                                  ((e = B.getElementXYCoordinates(n.element)) &&
                                    n.setExtraInfo(at.prototype.SYNC_COORDINATE, e)),
                                B.isHybrid() &&
                                  n.addHybridActionDataItem('start', {
                                    x: Un.state.clickStart.coordinate.x,
                                    y: Un.state.clickStart.coordinate.y,
                                  }),
                                P.emit('event:click', n),
                                n.rageSequence &&
                                  n.indexInRage &&
                                  (n.setExtraInfo(at.prototype.RAGE_SEQUENCE, n.rageSequence),
                                  n.setExtraInfo(at.prototype.INDEX_IN_RAGE, n.indexInRage)),
                                (t = !0);
                            }
                            return (Un.state.clickStart = F), (Un.state.clickStartType = F), t;
                          },
                          interceptDragStart: function (n) {
                            return (
                              (Un.state.clickStart = Un.createClickDetailsObject(n)),
                              !(Un.state.clickStartType = 'mousedown')
                            );
                          },
                          interceptDragEnd: function (n) {
                            var e = Un.state.clickStart,
                              t = Un.createClickDetailsObject(n);
                            return Un.handleDrag(n, e, t), !0;
                          },
                          handleDrag: function (n, e, t) {
                            var r,
                              i = {
                                duration: e.timestamp ? t.timestamp - e.timestamp : -1,
                                start: e.coordinate,
                                end: t.coordinate,
                              };
                            (n.type = 'drag'),
                              (n.value = i),
                              E.isUndefined(n.element) ||
                                ((r = B.getElementXYCoordinates(e.el)) &&
                                  n.setExtraInfo(at.prototype.SYNC_COORDINATE, r)),
                              B.isHybrid() &&
                                (n.addHybridActionDataItem('start', {
                                  x: e.coordinate.x,
                                  y: e.coordinate.y,
                                }),
                                n.addHybridActionDataItem('end', {
                                  x: t.coordinate.x,
                                  y: t.coordinate.y,
                                }));
                          },
                          interceptUnload: function (n) {
                            B.time('unload'),
                              (Un.state.unloading = !0),
                              Un.segmentManager.onUnload();
                            var e = B.currentTimestamp();
                            Un.page.hasTimingAPI ||
                              (sessionStorage['gb.lastReferrer'] =
                                w.encodeNumber(e) + '_' + B.Base64.encode(Un.page.urlWithoutHash));
                            var t = e - Un.page.initializationTimestamp;
                            return (
                              n.setExtraInfo(n.FOCUS_TIME_ATTR, t),
                              n.setExtraInfo(n.SCROLL_REACH, Math.round(Un.state.maxScrollReach)),
                              Un.debugHelper.visitUnloadEvent(n),
                              B.timeEnd('unload'),
                              (n.timestamp = e),
                              !0
                            );
                          },
                          updateScrollReach: function () {
                            Un.state.maxScrollReach = Math.max(
                              Un.state.maxScrollReach,
                              B.getCurrentScrollReach()
                            );
                          },
                          interceptScroll: function (n) {
                            return (
                              '#document' === n.element.nodeName && Un.updateScrollReach(), !0
                            );
                          },
                          filterScrollElements: function (n) {
                            return !(null != n && 'MARQUEE' !== n.nodeName);
                          },
                          interceptMouseMove: function (n) {
                            return (
                              (n.lastSingleMoveTimestamp = n.timestamp),
                              n.setExtraInfo(n.FOCUS_TIME_ATTR, 0),
                              !0
                            );
                          },
                          createClickDetailsObject: function (n) {
                            var e = {
                              coordinate: B.getCoordinate(n.domEvent),
                              el: n.element,
                              selector: n.selectorExpression,
                              timestamp: n.timestamp,
                            };
                            return (
                              B.isMobile() &&
                                (e.elPosition = {
                                  left: n.element.style ? n.element.style.left : '',
                                  right: n.element.style ? n.element.style.right : '',
                                  top: n.element.style ? n.element.style.top : '',
                                  bottom: n.element.style ? n.element.style.bottom : '',
                                }),
                              e
                            );
                          },
                          shouldListenToKeyEvents: function () {
                            return L.recordEnterForInputs || Un.recordAutoCompleteRelatedChars();
                          },
                          recordAutoCompleteRelatedChars: function () {
                            return (
                              void 0 === Un.acCharsSupport &&
                                (Un.acCharsSupport =
                                  L.recordTypingAll ||
                                  L.supportNativeAutoComplete ||
                                  (L.recordTypingForAttrs && 0 < L.recordTypingForAttrs.length) ||
                                  (L.recordTypingForClasses &&
                                    0 < L.recordTypingForClasses.length) ||
                                  (L.recordTypingForIDs && 0 < L.recordTypingForIDs.length)),
                              Un.acCharsSupport
                            );
                          },
                          resolveKeyData: function (n) {
                            var e = n.domEvent,
                              t = n.element.value,
                              r = n.element,
                              i = e.keyCode || e.charCode;
                            n.value = { unicode: i };
                            var o = K.isCensored(r);
                            return 'keypress' === n.type
                              ? 13 !== i &&
                                  8 !== i &&
                                  '0' !== e.charCode &&
                                  (o
                                    ? (n.value = { unicode: 42 })
                                    : E.isUndefined(t) ||
                                      null === t ||
                                      (n.value.content = t + String.fromCharCode(i)),
                                  !0)
                              : 'keydown' === n.type &&
                                  (38 === i || 40 === i || 13 === i
                                    ? (o || (n.value.content = n.element.value), !0)
                                    : 8 === i &&
                                      !E.isUndefined(t) &&
                                      null !== t &&
                                      !o &&
                                      ((n.value.content =
                                        0 < t.length ? t.substring(0, t.length - 1) : ''),
                                      !0));
                          },
                          interceptKeyboard: function (n) {
                            var e = n.element;
                            if (!(e && ('INPUT' === e.nodeName || 'BUTTON' === e.nodeName)))
                              return !1;
                            var t,
                              r = 13 === (n.domEvent.keyCode || n.domEvent.charCode);
                            if (((n.shouldEncodeValue = !1), r && L.recordEnterForInputs))
                              return Un.resolveKeyData(n);
                            if (
                              L.supportNativeAutoComplete &&
                              (e.hasAttribute('autocomplete') ||
                                (e.hasAttribute('aria-autocomplete') &&
                                  'none' !== e.getAttribute('aria-autocomplete')) ||
                                (e.hasAttribute('class') &&
                                  E.contains(e.getAttribute('class'), 'autocomplete')))
                            )
                              return Un.resolveKeyData(n);
                            if (L.recordTypingAll) return Un.resolveKeyData(n);
                            if (L.recordTypingForAttrs && 0 < L.recordTypingForAttrs.length)
                              for (t = 0; t < L.recordTypingForAttrs.length; t++)
                                if (e.hasAttribute(L.recordTypingForAttrs[t]))
                                  return Un.resolveKeyData(n);
                            if (
                              e.hasAttribute('class') &&
                              L.recordTypingForClasses &&
                              0 < L.recordTypingForClasses.length
                            )
                              for (t = 0; t < L.recordTypingForClasses.length; t++)
                                if (
                                  E.contains(e.getAttribute('class'), L.recordTypingForClasses[t])
                                )
                                  return Un.resolveKeyData(n);
                            var i = B.getElementId(e);
                            if (i && L.recordTypingForIDs && 0 < L.recordTypingForIDs.length)
                              for (t = 0; t < L.recordTypingForIDs.length; t++)
                                if (i === L.recordTypingForIDs[t]) return Un.resolveKeyData(n);
                            return !1;
                          },
                          recordAjaxResource: function (n) {
                            Un.addResource('ajax', n.url, n.timestamp);
                          },
                          addResource: function (n, e, t) {
                            var r = new Wt(n, e, t);
                            return Un.reports.resources.push(r), P.emit('timingResource', r), r;
                          },
                          saveEvent: function (n) {
                            var e;
                            (Un.blackoutManager.isUnderBlackout() &&
                              ('idle' !== n.type ||
                                ('idle' === n.type && !L.blackoutIdleReporting))) ||
                              this.state.stopped ||
                              ((e = Un.renameEventType(n)),
                              Un.addEvent(n),
                              jn.setRegisteredDebugInfoOnEvent(n),
                              L.debugMode &&
                                (n.report || L.traceMode) &&
                                Un.shouldLog(n.type) &&
                                Un.logEvent(n, e),
                              n.report &&
                                (Un.state.encryptionReady
                                  ? P.emit('saveEvent', n)
                                  : Un.encryptionPendingEvents.push(n)));
                          },
                          shouldLog: function (n) {
                            return 'mousemove' === n
                              ? !L.suppressMouseMovesDebug || L.mmDebug
                              : 'scroll' !== n || L.scrollDebug;
                          },
                          renameEventType: function (n) {
                            var e = n.type;
                            return (
                              E.isUndefined(n.binding) ||
                                E.isUndefined(n.binding.logicalName) ||
                                'drag' === n.type ||
                                (n.type = n.binding.logicalName),
                              e
                            );
                          },
                          logEvent: function (n, e) {
                            var t;
                            L.debugMode &&
                              ((t = [
                                'saving event: ' +
                                  (n.type === e ? n.type : n.type + '(' + e + ')') +
                                  ' selector: ' +
                                  (n.selectorExpression || ''),
                              ]).push('{value='),
                              t.push(n.value || 'NONE'),
                              n.extraInfo && (t.push('{ extraInfo='), t.push(n.extraInfo)),
                              t.push('}'));
                          },
                          saveDocumentLoadEvent: function (n) {
                            var e = Un.createEventObject('document', n, null);
                            (Un.page.url = Y.mask(Un.page.url)),
                              (Un.page.urlWithoutHash = Y.mask(Un.page.urlWithoutHash)),
                              (e.value = Un.page),
                              (e.shouldEncodeValue = !1),
                              (Un.page.screenSize = Un.uaUtils.captureScreenSize()),
                              (Un.page.windowSize = Un.uaUtils.captureWindowSize()),
                              (Un.page.title = Un.getPageTitle()),
                              Un.page.title &&
                                e.setExtraInfo(at.prototype.VISUAL_NAME, Un.page.title),
                              void 0 !== iframeHelper &&
                                e.setExtraInfo(
                                  at.prototype.WINDOW_DEPTH,
                                  iframeHelper.tryGetCurrentDepth(window)
                                ),
                              e.setExtraInfo(at.prototype.HISTORY_LENGTH, window.history.length),
                              Un.pageInfo &&
                                (e.setExtraInfo(
                                  at.prototype.DEBUG_PAGE_SN,
                                  '' + Un.pageInfo.pageSn
                                ),
                                e.setExtraInfo(
                                  at.prototype.DEBUG_BROWSER_TAB_ID,
                                  '' + Un.pageInfo.browserTabId
                                )),
                              L.mobileHybridId &&
                                e.setExtraInfo(at.prototype.MOBILE_HYBRID_ID, L.mobileHybridId),
                              L.debounceScrolls &&
                                e.setExtraInfo(at.prototype.SCROLL_DEBOUNCED, !0),
                              (Un.documentEvent = e),
                              this.debugHelper.visitLoadEvent(e),
                              Un.documentEventHook
                                ? Un.documentEventHook(e, Un.onParentHandshakeDone)
                                : Un.onParentHandshakeDone();
                          },
                          trySendPerformanceEvent: function () {
                            Un.state.loaded &&
                              Un.state.handshakeDone &&
                              Un.resolvePageLoadTime(Un.page);
                          },
                          onParentHandshakeDone: function () {
                            (Un.state.handshakeDone = !0),
                              Un.documentEvent &&
                                (Un.saveEvent(Un.documentEvent), P.emit('event:document')),
                              Un.trySendPerformanceEvent();
                          },
                          savePageUpdate: function () {
                            var n = Un.createEventObject('pageUpdate', B.currentTimestamp(), null);
                            Un.saveEvent(n);
                          },
                          onPageError: function (n) {
                            var e;
                            n.eventLimitExceeded ||
                              (((e = Un.createEventObject(
                                'error',
                                B.currentTimestamp(),
                                null
                              )).value = n.error),
                              (e.shouldEncodeValue = !0),
                              Un.saveEvent(e));
                          },
                          saveTitleChanged: function (n) {
                            var e = Un.createEventObject(
                              'titleChanged',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = Un.getPageTitle()),
                              (e.shouldEncodeValue = !0),
                              Un.saveEvent(e);
                          },
                          saveSegmentChangedEvent: function (n) {
                            var e = Un.createEventObject(
                              'segmentChanged',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = n),
                              (e.shouldEncodeValue = !1),
                              Un.saveEvent(e),
                              Un.plugins.domRecordingPlugin &&
                                Un.plugins.domRecordingPlugin.isStarted() &&
                                setTimeout(function () {
                                  Un.savePageUpdate();
                                }, 0);
                          },
                          saveLastSegmentEvent: function (n) {
                            var e = Un.createEventObject(
                              'lastSegment',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = n), (e.shouldEncodeValue = !1), Un.saveEvent(e);
                          },
                          savePageSnapshotEvent: function (n) {
                            const $___old_eaf0ff62aaf5e56d = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'performance'
                            );
                            try {
                              if ($___old_eaf0ff62aaf5e56d)
                                ({}.constructor.defineProperty(
                                  window,
                                  'performance',
                                  $___stub_2b47892348e4e4b9.performance
                                ));
                              return function () {
                                var e = Un.useCurrentTimeForPagesnapshot
                                    ? B.currentTimestamp()
                                    : Un.page.initializationTimestamp,
                                  t = Un.createEventObject('pageSnapshot', e, null);
                                (t.value = n), (t.shouldEncodeValue = !1);
                                var r = window.performance && window.performance.timing;
                                r &&
                                  t.setExtraInfo(
                                    at.prototype.NAVIGATION_TIMING,
                                    JSON.parse(JSON.stringify(r))
                                  ),
                                  Un.autoMaskingSignaled &&
                                    (t.setExtraInfo(
                                      at.prototype.AUTO_MASKING,
                                      Un.autoMaskingSignaled
                                    ),
                                    (Un.autoMaskingSignaled = null)),
                                  Un.page.snapshotFuseData &&
                                    t.setExtraInfo(
                                      at.prototype.SNAPSHOT_FUSE,
                                      JSON.stringify(Un.page.snapshotFuseData)
                                    ),
                                  Un.saveEvent(t);
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_eaf0ff62aaf5e56d)
                                ({}.constructor.defineProperty(
                                  window,
                                  'performance',
                                  $___old_eaf0ff62aaf5e56d
                                ));
                            }
                          },
                          saveDevToolsChangeEvent: function (n) {
                            var e = Un.createEventObject(
                              'devToolsVisibilityChanged',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = n.value), Un.saveEvent(e);
                          },
                          saveDomTamperedEvent: function (n) {
                            var e = Un.createEventObject(
                              'domTampered',
                              B.currentTimestamp(),
                              null
                            );
                            (e.element = n.element),
                              void 0 !== n.newText &&
                                e.setExtraInfo(at.prototype.CURRENT_VALUE, n.newText),
                              void 0 !== n.prevText &&
                                e.setExtraInfo(at.prototype.OLD_VALUE, n.prevText),
                              Un.assignSelectorInfo(n.element, e),
                              Un.saveEvent(e);
                          },
                          saveStruggle: function (n) {
                            var e,
                              t,
                              r = Un.createEventObject('webStruggle', B.currentTimestamp(), null);
                            n.elementSelector
                              ? ((r.selectorExpression =
                                  n.elementSelector.selector || _.encoding.rootSelector),
                                n.elementSelector.hostSelectorPath &&
                                  n.setExtraInfo(
                                    at.prototype.HOST_SELECTOR_PATH,
                                    n.elementSelector.hostSelectorPath
                                  ))
                              : ((r.element = n.element),
                                Un.assignSelectorInfo(n.element, r),
                                L.reportVisualNames &&
                                  n.relatedEvent &&
                                  (t =
                                    L.visualName &&
                                    L.visualName.eventsToCalcDistance[n.relatedEvent.type]
                                      ? ((e = n.relatedEvent.getExtraInfo(
                                          at.prototype.COORDINATE_ATTR
                                        )),
                                        Un.extractVisualName(n.element, e.x, e.y))
                                      : Un.extractVisualName(n.element)) &&
                                  r.setExtraInfo(at.prototype.VISUAL_NAME, t)),
                              (r.value = n.dataToEncode),
                              (r.shouldEncodeValue = !1),
                              Un.saveEvent(r);
                          },
                          saveAjaxRequestEvent: function (n) {
                            var e = Un.createEventObject(
                              'ajaxRequest',
                              n.startedAt || B.currentTimestamp(),
                              null
                            );
                            (n.ajaxUrls = Un.ajaxUrls),
                              (e.value = n),
                              (e.selectorExpression = n.lastFocusedSelectorInfo
                                ? n.lastFocusedSelectorInfo.selector
                                : _.encoding.rootSelector),
                              n.lastFocusedSelectorInfo &&
                                n.lastFocusedSelectorInfo.hostSelectorPath &&
                                e.setExtraInfo(
                                  at.prototype.HOST_SELECTOR_PATH,
                                  n.lastFocusedSelectorInfo.hostSelectorPath
                                ),
                              (e.shouldEncodeValue = !1),
                              Un.saveEvent(e);
                          },
                          ajaxLimitReached: function () {
                            var n = Un.createEventObject(
                              'ajaxLimitReached',
                              B.currentTimestamp(),
                              null
                            );
                            Un.saveEvent(n);
                          },
                          saveAjaxStatsEvent: function (n) {
                            var e = Un.createEventObject('ajaxStats', B.currentTimestamp(), null);
                            (e.value = n), (e.shouldEncodeValue = !1), Un.saveEvent(e);
                          },
                          saveClsDebugErrorEvent: function (n, e, t) {
                            var r,
                              i = Un.formatClsDebugMessage(n, e, t);
                            0 !== i.length &&
                              (((r = Un.createEventObject(
                                'clsdebug',
                                B.currentTimestamp(),
                                null
                              )).value = i),
                              Un.saveEvent(r));
                          },
                          formatClsDebugMessage: function (n, e, t) {
                            if (Un.state.clsDebugCounter >= L.clsDebugMaxReports) return '';
                            Un.state.clsDebugCounter++;
                            var r = e ? (e.stack ? e.stack : e.name + ': ' + e.message) : '';
                            return (
                              'CLS Error in ' +
                              n +
                              ' ' +
                              (t ? '{' + t + '} ' : '') +
                              (0 < (r = B.truncateStr(r, L.clsDebugCharsLimit, !0)).length
                                ? ': ' + r
                                : '')
                            );
                          },
                          saveValidationError: function (n) {
                            var e = Un.createEventObject(
                              'formValidationError',
                              B.currentTimestamp(),
                              null
                            );
                            (e.element = n.element),
                              (e.value = n.message),
                              Un.assignSelectorInfo(n.element, e),
                              Un.saveEvent(e);
                          },
                          saveHoverEvent: function () {
                            var n = Un.createEventObject(
                              'hover',
                              Un.state.hover.hoverStartTimestamp,
                              null
                            );
                            if (0 !== Un.state.hover.hoverElementList.length) {
                              L.mhDebug && Un.state.hover.hoverElementList.length;
                              var e = Un.state.hover.hoverElementList;
                              Un.cleanHoverElements();
                              for (var t, r, i = {}, o = [], a = e.length - 1; 0 <= a; a--)
                                if (
                                  ((r = e[a]),
                                  i[
                                    (t = X.getSelectorInfo(r).selector || _.encoding.rootSelector)
                                  ])
                                )
                                  L.mhDebug;
                                else if (((i[t] = !0), o.push(t), o.length >= L.mhMaxListSize)) {
                                  L.mhDebug;
                                  break;
                                }
                              (n.value = e), (n.shouldEncodeValue = !1), Un.saveEvent(n);
                            } else L.mhDebug;
                          },
                          saveCustomEvent: function (n) {
                            Un.handleCustomEvent('custom', n);
                          },
                          saveCustomMapEvent: function (n) {
                            Un.handleCustomEvent('customMap', n);
                          },
                          handleCustomEvent: function (n, e) {
                            var t = Un.createEventObject(n, B.currentTimestamp(), null);
                            (t.value = e),
                              !E.isUndefined(e.domEl) &&
                                B.isDOMElement(e.domEl) &&
                                ((t.element = e.domEl), Un.assignSelectorInfo(e.domEl, t)),
                              (t.shouldEncodeValue = !1),
                              Un.saveEvent(t);
                          },
                          saveThirdPartyMapEvent: function (n) {
                            var e = Un.createEventObject(
                              'thirdpartymap',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = n.value),
                              n.type && e.setExtraInfo(at.prototype.TP_INTEGRATION_TYPE, n.type),
                              n.element &&
                                ((e.element = n.element), Un.assignSelectorInfo(n.element, e)),
                              (e.shouldEncodeValue = !1),
                              Un.saveEvent(e);
                          },
                          saveThirdPartyAttributeEvent: function (n) {
                            var e = Un.createEventObject(
                              'thirdPartyAttribute',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = n), (e.shouldEncodeValue = !1), Un.saveEvent(e);
                          },
                          onDomFuseBlown: function (n) {
                            Un.page.snapshotEmitted || (Un.page.snapshotFuseData = n);
                          },
                          onPageNameResolved: function (n) {
                            Un.page.name = n;
                          },
                          saveABTesting: function (n) {
                            var e = Un.createEventObject('abTesting', B.currentTimestamp(), null);
                            (e.value = n), (e.shouldEncodeValue = !1), Un.saveEvent(e);
                          },
                          saveResourceDataEvent: function (n) {
                            var e = Un.createEventObject(
                              'resourceContent',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = n), (e.shouldEncodeValue = !1), Un.saveEvent(e);
                          },
                          saveCorsDeniedDataEvent: function (n) {
                            var e = Un.createEventObject(
                              'corsDeniedResource',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = n), Un.saveEvent(e);
                          },
                          saveClientAttributeEvent: function (n) {
                            var e = Un.createEventObject(
                              'clientAttribute',
                              B.currentTimestamp(),
                              null
                            );
                            (e.value = n), (e.shouldEncodeValue = !1), Un.saveEvent(e);
                          },
                          savePerformanceDataEvent: function (n) {
                            var e = Un.createEventObject('waterfall', B.currentTimestamp(), null);
                            (e.value = JSON.parse(JSON.stringify(n))),
                              (e.shouldEncodeValue = !1),
                              Un.saveEvent(e);
                          },
                          initializePageDetails: function () {
                            B.time('initializePageDetails');
                            var n = Un.page;
                            (n.initializationTimestamp = B.currentTimestamp()),
                              (n.id = B.uuid()),
                              (n.frame = window.self !== top),
                              n.frame && (n.referrerWithoutHash = B.getReferrerUrlWithoutHash());
                            var e = B.getLocationUrlSplitByHash();
                            (n.url = e.url),
                              (n.urlWithoutHash = e.withoutHash),
                              (n.hash = e.hash),
                              (n.hasTouch = B.hasTouch()),
                              (n.hasTimingAPI = B.hasTimingAPI()),
                              (n.title = Un.getPageTitle()),
                              B.timeEnd('initializePageDetails');
                          },
                          getPageTitle: function () {
                            var n = B.truncateStr(O.title, L.titleCharsLimit, !0);
                            return (
                              L.maskTitle && (n = B.transformTextSegments(n, V.censorValueOf)), n
                            );
                          },
                          resolvePageLoadTime: function (n) {
                            var e, t, r, i;
                            n.hasTimingAPI
                              ? Un.acquirePerformanceTiming()
                              : (e = sessionStorage['gb.lastReferrer']) &&
                                ((t = O.referrer.replace(/#.*/, '')),
                                (r = e.split('_')),
                                t === B.Base64.decode(r[1]) &&
                                  ((i = parseInt(r[0], 36)),
                                  (n.timing.total = n.loadTimestamp - i),
                                  Un.saveTimingEvent({ page: n.timing })));
                          },
                          saveTimingEvent: function (n) {
                            var e = Un.createEventObject(
                              'timing',
                              B.currentTimestamp(),
                              window.document
                            );
                            (e.value = n),
                              Un.page.title &&
                                e.setExtraInfo(at.prototype.VISUAL_NAME, Un.page.title),
                              Un.saveEvent(e);
                          },
                          savePerformanceEvent: function (n) {
                            const $___old_2896ea40bef19fe7 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'performance'
                            );
                            try {
                              if ($___old_2896ea40bef19fe7)
                                ({}.constructor.defineProperty(
                                  window,
                                  'performance',
                                  $___stub_2b47892348e4e4b9.performance
                                ));
                              return function () {
                                var e = Un.createEventObject(
                                  'performance',
                                  B.currentTimestamp(),
                                  window.document
                                );
                                window.performance &&
                                  window.performance.timing &&
                                  ((e.value = {
                                    perf: {
                                      timing: JSON.parse(
                                        JSON.stringify(window.performance.timing)
                                      ),
                                    },
                                    browserTime: n,
                                  }),
                                  window.performance.navigation &&
                                    (e.value.perf.navigation = {
                                      redirectCount: window.performance.navigation.redirectCount,
                                      type: window.performance.navigation.type,
                                    }),
                                  Un.page.title &&
                                    e.setExtraInfo(at.prototype.VISUAL_NAME, Un.page.title),
                                  Un.page.name &&
                                    e.setExtraInfo(at.prototype.PAGE_NAME, Un.page.name),
                                  (e.shouldEncodeValue = !1),
                                  Un.saveEvent(e));
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_2896ea40bef19fe7)
                                ({}.constructor.defineProperty(
                                  window,
                                  'performance',
                                  $___old_2896ea40bef19fe7
                                ));
                            }
                          },
                          acquirePerformanceTiming: function () {
                            const $___old_7df6aad391345669 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'performance'
                            );
                            try {
                              if ($___old_7df6aad391345669)
                                ({}.constructor.defineProperty(
                                  window,
                                  'performance',
                                  $___stub_2b47892348e4e4b9.performance
                                ));
                              return function () {
                                var n;
                                0 === window.performance.timing.loadEventEnd
                                  ? window.setTimeout(Un.acquirePerformanceTiming, 300)
                                  : ((n = B.currentTimestamp() - Un.page.initializationTimestamp),
                                    Un.savePerformanceEvent(n));
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_7df6aad391345669)
                                ({}.constructor.defineProperty(
                                  window,
                                  'performance',
                                  $___old_7df6aad391345669
                                ));
                            }
                          },
                          setClientCookies: function (n, e) {
                            const $___old_7ef7155c60ce3273 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'localStorage'
                            );
                            try {
                              if ($___old_7ef7155c60ce3273)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___stub_b317e19f866a2da7.localStorage
                                ));
                              return function () {
                                var t,
                                  r = Vt(
                                    new jt(window.localStorage, {
                                      keysPrefix: _.Storage.UnboundKeyPrefix,
                                    }),
                                    z,
                                    n,
                                    e,
                                    L.visitorDaysToExpiration
                                  );
                                q.isCorsReporting() &&
                                  r.changed &&
                                  (t = Un.plugins.cors) &&
                                  t.onCookieChanged(),
                                  r.visitorId && (this.visitorId = r.visitorId),
                                  (this.sessionId = r.sessionId);
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_7ef7155c60ce3273)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___old_7ef7155c60ce3273
                                ));
                            }
                          },
                          onInvalidateSession: function () {
                            P.emit('forceFlush'),
                              Un.setClientCookies(F, !0),
                              Un.sessionId,
                              (Un.page.id = B.uuid()),
                              (Un.page.snapshotEmitted = !1),
                              (Un.page.snapshotFuseData = F),
                              P.emit('session:new', {
                                sessionId: Un.sessionId,
                                visitorId: Un.visitorId,
                                pageId: Un.page.id,
                                pageName: Un.page.name,
                              });
                          },
                          registerPlugin: function (n, e) {
                            Un.plugins[n] = e;
                          },
                          removeEventBinding: function (n) {
                            for (var e = -1, t = 0; t < Un.bindings.registered.length; t++) {
                              var r = Un.bindings.registered[t];
                              r.type === n && (B.removeEventHandler(r.el, n, r.handler), (e = t));
                            }
                            0 <= e && Un.bindings.registered.splice(e, 1);
                          },
                          removeBindings: function () {
                            E.forEach(Un.bindings.registered, function (n) {
                              B.removeEventHandler(n.el, n.type, n.handler);
                            }),
                              (Un.bindings.registered = []),
                              (Un.bindings.unsupportedEventTypes = []);
                          },
                          getEncoder: function () {
                            return w;
                          },
                          supportModeOn: function (n) {
                            (n = n || !1), Un.applySupportMode(), n && W.set('supportMode', !0);
                          },
                          isSupportModeSession: function () {
                            return void 0 !== z.get(_.cookies.supportMode) || W.get('supportMode');
                          },
                          checkSupportModeSession: function () {
                            Un.isSupportModeSession() && Un.applySupportMode();
                          },
                          applySupportMode: function () {},
                          asStoppable: function () {
                            var e = this;
                            return {
                              isStopped: function (n) {
                                return (
                                  n && (e.state.stopped = 'true' === W.get('stopped')),
                                  e.state.stopped
                                );
                              },
                              start: function () {
                                return (
                                  !!e.state.stopped &&
                                  ((e.state.stopped = !1), W.remove('stopped'), !0)
                                );
                              },
                              stop: function () {
                                return (
                                  !e.state.stopped &&
                                  ((e.state.stopped = !0),
                                  P.emit('recordingStopped'),
                                  W.set('stopped', 'true'),
                                  !0)
                                );
                              },
                            };
                          },
                        }),
                        (Wt.prototype.toString = function () {
                          return this.url;
                        }),
                        (Xt.prototype.toString = function () {
                          return '(' + this.x + ',' + this.y + ')';
                        }),
                        (zn = {
                          inMemoryMovesCounter: 0,
                          notifyEventsFlush: function () {
                            zn.inMemoryMovesCounter = 0;
                          },
                          diluteEvents: function (n, e, t) {
                            if (e) {
                              if ('resize' === t.type) return !0;
                              if ('scroll' === t.type)
                                return 'scroll' === e.type ||
                                  (Un.page.hasTouch && 'drag' === e.type)
                                  ? !(t.timestamp - e.timestamp > L.minStallingScrollTime) &&
                                      ((t.selectorExpression = e.selectorExpression),
                                      L.scrollDebug && e.type,
                                      !0)
                                  : !(
                                      'mousemove' !== e.type ||
                                      1 !== e.value.length ||
                                      !n ||
                                      'scroll' !== n.type
                                    ) &&
                                      !(t.timestamp - n.timestamp > L.minStallingScrollTime) &&
                                      (L.scrollDebug, !0);
                              if ('mousemove' === t.type && 'mousemove' !== e.type) return !0;
                              if ('mousemove' === t.type && 'mousemove' === e.type) {
                                var r = L.reportByPost ? 3000 : L.mmMaxMovesInEventWithTimes,
                                  i = L.reportByPost ? 3000 : L.mmMaxMovesInEventNoTimes;
                                return (L.mmRecordTimes && e.value.length >= r) ||
                                  (!L.mmRecordTimes && e.value.length >= i)
                                  ? (L.mmDebug && e.value.length, zn.inMemoryMovesCounter++, !1)
                                  : !E.isUndefined(L.mmMinStallingMoveTime) &&
                                    t.timestamp - e.lastSingleMoveTimestamp >
                                      L.mmMinStallingMoveTime
                                  ? (L.mmDebug && (t.timestamp, e.lastSingleMoveTimestamp),
                                    zn.inMemoryMovesCounter++,
                                    !1)
                                  : (zn.checkExceededInMemoryMoves()
                                      ? L.mmDebug && L.mmMaxInMemoryMoves
                                      : zn.diluteMoveEvents(e, t) && zn.inMemoryMovesCounter++,
                                    !0);
                              }
                            }
                            return 'mousemove' === t.type && (zn.inMemoryMovesCounter++, !0);
                          },
                          checkExceededInMemoryMoves: function () {
                            var n = L.reportByPost ? 3000 : L.mmMaxInMemoryMoves;
                            return zn.inMemoryMovesCounter >= n;
                          },
                          diluteMoveEvents: function (n, e) {
                            var t = E.last(n.value),
                              r = e.value[0],
                              i = e.timestamp - n.lastSingleMoveTimestamp,
                              o = n.getExtraInfo(n.FOCUS_TIME_ATTR);
                            return Math.abs(t.x - r.x) > L.mmDiluteMinPixels ||
                              Math.abs(t.y - r.y) > L.mmDiluteMinPixels
                              ? ((o += r.t = i),
                                e.setExtraInfo(e.FOCUS_TIME_ATTR, o),
                                (e.timestamp = n.timestamp),
                                n.value.push(r),
                                (e.value = n.value),
                                L.mmDebug && e.value,
                                !0)
                              : (e.setExtraInfo(e.FOCUS_TIME_ATTR, o),
                                (e.timestamp = n.timestamp),
                                (e.value = n.value),
                                (e.lastSingleMoveTimestamp = n.lastSingleMoveTimestamp),
                                L.mmDebug && L.mmDiluteMinPixels,
                                !1);
                          },
                          truncateEventsForUnload: function (n) {
                            for (
                              var e = [], t = L.mmMaxMovesWithUnload, r = 0, i = !1, o = 0;
                              o < n.length;
                              o++
                            ) {
                              var a = n[o];
                              if ('mousemove' === a.type) {
                                if (r >= L.mmMaxMovesWithUnload) {
                                  L.mmMaxMovesWithUnload, (i = !0);
                                  continue;
                                }
                                var u = a.value.length,
                                  c = zn.truncateMouseMoveEvent(a, t - r);
                                (r += c), c < u && (i = !0);
                              }
                              'unload' === a.type &&
                                i &&
                                a.event.setExtraInfo(a.MOVES_TRUNCATED, !0),
                                e.push(a);
                            }
                            return e;
                          },
                          truncateMouseMoveEvent: function (n, e) {
                            var t = n.value.length;
                            return t < e ? t : ((n.value = n.value.slice(0, e)), e);
                          },
                        }),
                        (Un.checkElementChangebility = function (n) {
                          var e = n.nodeName,
                            t = n.type,
                            r = !1,
                            i = !1;
                          switch (e) {
                            case 'SELECT':
                              i = !0;
                              break;
                            case 'TEXTAREA':
                              r = !0;
                              break;
                            case 'INPUT':
                              if (null === t) break;
                              switch (t) {
                                case 'checkbox':
                                case 'radio':
                                  i = !0;
                                  break;
                                case 'text':
                                case 'password':
                                case 'number':
                                case 'file':
                                case 'url':
                                case 'search':
                                case 'email':
                                case 'date':
                                case 'time':
                                case 'tel':
                                case 'range':
                                case 'month':
                                case 'week':
                                case 'datetime':
                                case 'datetime-local':
                                case 'color':
                                  r = !0;
                              }
                          }
                          return { isTypable: r, isSelectable: i };
                        }),
                        (Un.isTypableElement = function (n) {
                          return Un.checkElementChangebility(n).isTypable;
                        }),
                        (Un.isSelectableElement = function (n) {
                          return Un.checkElementChangebility(n).isSelectable;
                        }),
                        (Un.isChangebleElement = function (n) {
                          return Un.isTypableElement(n) || Un.isSelectableElement(n);
                        }),
                        void 0 !== Un &&
                          (function (n, o) {
                            n = n || {};
                            var a = B.immutableSet(
                              'password',
                              'text',
                              'number',
                              'file',
                              'url',
                              'search',
                              'email',
                              'date',
                              'time',
                              'tel',
                              'range',
                              'month',
                              'week',
                              'datetime',
                              'datetime-local',
                              'color',
                              'radio'
                            );
                            (n.extractElementValue = function (n, e) {
                              var t = e.nodeName;
                              if ('INPUT' === t) {
                                var r = e.type;
                                if (a[r]) return o.censor(e);
                                if ('checkbox' === r) return e.checked ? 'true' : 'false';
                              } else {
                                if ('TEXTAREA' === t) return o.censor(e);
                                if ('SELECT' === t) {
                                  var i = e.options;
                                  if (
                                    !E.isUndefined(i) &&
                                    'number' == typeof i.length &&
                                    0 < i.length
                                  ) {
                                    if (!E.isUndefined(e.multiple) && e.multiple)
                                      return (
                                        '[' +
                                        (function (n) {
                                          for (var e = [], t = 0; t < n.length; t++) {
                                            var r = n[t];
                                            r.selected && e.push(o.censor(r, !0));
                                          }
                                          return e;
                                        })(i).join(',') +
                                        ']'
                                      );
                                    if (
                                      !E.isUndefined(e.selectedIndex) &&
                                      !E.isUndefined(i[e.selectedIndex])
                                    )
                                      return o.censor(i[e.selectedIndex], !0);
                                  }
                                }
                              }
                            }),
                              (n.extractElementSource = function (n, e) {
                                var t = e.src || e.href;
                                return E.isUndefined(t) || null == t ? void 0 : t;
                              }),
                              (n.extractLocationHash = function (n, e) {
                                return B.getLocationUrlSplitByHash().hash;
                              }),
                              (n.extractScrollValue = function (n, e) {
                                if ('#document' !== e.nodeName)
                                  return new Xt(e.scrollLeft, e.scrollTop);
                                var t = B.getScrollTopLeft();
                                return new Xt(t.left, t.top);
                              }),
                              (n.extractMouseMoveValue = function (n, e) {
                                return [B.getCoordinate(n)];
                              });
                          })(Un, K),
                        void 0 !== Un &&
                          L.useExtension &&
                          B.isChromeDesktop() &&
                          Un.registerPlugin(
                            'extensionManager',
                            new (function (t, n, e, r, i) {
                              var o = {};
                              function a (n) {
                                n.data && o[n.data.name] && o[n.data.name](n.data.data);
                              }
                              function u (n, e) {
                                o[n] = e;
                              }
                              function c (n, e) {
                                t.postMessage({ name: n, data: e || {} });
                              }
                              function s (n) {
                                c('GBX_EventLog', n.toJSON());
                              }
                              t.addEventListener('message', a, !1),
                                u('GBX_Inspection', function () {
                                  n.extensionInspectMode = !0;
                                }),
                                u('GBX_StopInspection', function () {
                                  n.extensionInspectMode = !1;
                                }),
                                (this.initialize = function () {
                                  O.querySelector("meta[name='gb-extension']") &&
                                    (e.on('extensionEvent', s, null, -1),
                                    c('GBD_initData', { detectorConfig: i, version: n.version }));
                                }),
                                (this.removeListener = function () {
                                  t.removeEventListener('message', a, !1);
                                });
                            })(window, Un, P, 0, L)
                          ),
                        (cr.KEY_NAME_EST = _.Storage.BoundKeyPrefix + 'est'),
                        (cr.KEY_NAME_SN = _.Storage.BoundKeyPrefix + 'sn'),
                        (Wn = {
                          uriContainsAnyOf: function (n, e) {
                            if (!n) return !1;
                            for (var t = 0; t < e.length; t++) if (0 <= n.indexOf(e[t])) return !0;
                            return !1;
                          },
                          tryParseValueMap: function (n, e) {
                            for (
                              var t, r, i = {}, o = n.split('&'), a = !1, u = 0;
                              u < o.length;
                              u++
                            )
                              if (2 === (t = o[u].split('=')).length)
                                try {
                                  if (!e[(r = decodeURIComponent(t[0]))]) continue;
                                  (i[r] = decodeURIComponent(t[1])), (a = !0);
                                } catch (n) {
                                  logger.error('error was detected: ' + n);
                                }
                            return a ? i : F;
                          },
                        }),
                        void 0 !== Un &&
                          ((Xn = []),
                          L.interceptThirdPartyAttributes &&
                            Xn.push(
                              new (function (o) {
                                var a = [];
                                function t (e, n) {
                                  for (var t, r = [], i = 0; i < a.length; i++)
                                    try {
                                      Wn.uriContainsAnyOf(e, [a[i].rule.urlMatcher]) &&
                                        (t = Wn.tryParseValueMap(n, a[i].keySet)) &&
                                        r.push({ urlMatcher: a[i].rule.urlMatcher, valueMap: t });
                                    } catch (n) {
                                      logger.error(
                                        'Error while parsing request for  ' +
                                          e +
                                          ' for third party integration: ' +
                                          n.message,
                                        n
                                      );
                                    }
                                  r.length && o.emit('3rdPartyAttribute', r);
                                }
                                o.on('newRemoteConfig', function (n) {
                                  if (n.thirdPartyAttributeRules)
                                    for (var e = 0; e < n.thirdPartyAttributeRules.length; e++)
                                      (t = n.thirdPartyAttributeRules[e]).urlMatcher &&
                                        t.attributes &&
                                        t.attributes.length &&
                                        a.push({
                                          rule: n.thirdPartyAttributeRules[e],
                                          keySet: B.immutableSet.apply(
                                            null,
                                            n.thirdPartyAttributeRules[e].attributes || []
                                          ),
                                        });
                                  var t;
                                }),
                                  o.on('ajax:send', function (n) {
                                    'POST' === n.method &&
                                      'string' == typeof n.requestContent &&
                                      t(n.url, n.requestContent);
                                  }),
                                  (this.intercept = function (n) {
                                    var e = (n.src || '').split('?')[1];
                                    e && t(n.src, e);
                                  });
                              })(P)
                            ),
                          L.SCIntegration &&
                            (L.SCIntegrationURLsContainList || []).length &&
                            (L.SCIntegrationKeyList || []).length &&
                            Xn.push(
                              new (function (r, i) {
                                i = i || {};
                                var o = B.immutableSet.apply(null, i.keys || []);
                                this.intercept = function (e) {
                                  var n,
                                    t = (e.src || '').split('?')[1];
                                  if (t)
                                    try {
                                      !Wn.uriContainsAnyOf(e.src, i.urlTokens) ||
                                        ((n = Wn.tryParseValueMap(t, o)) &&
                                          r.emit('3rdpartymap:scReport', { value: n }));
                                    } catch (n) {
                                      logger.error(
                                        'Error while checking image ' +
                                          e.src +
                                          ' for third party integration: ' +
                                          n.message,
                                        n
                                      );
                                    }
                                };
                              })(P, {
                                urlTokens: L.SCIntegrationURLsContainList,
                                keys: L.SCIntegrationKeyList,
                              })
                            ),
                          Un.registerPlugin(
                            'SCIntegration',
                            new (function (o, n, a) {
                              var e = {};
                              function t () {
                                !(function () {
                                  for (
                                    var n, e = o.document.querySelectorAll('script, img'), t = 0;
                                    t < e.length;
                                    t++
                                  )
                                    for (n = 0; n < a.length; n++) a[n].intercept.call(a[n], e[t]);
                                })(),
                                  (function () {
                                    var i = o.Image;
                                    o.Image = function (n, e) {
                                      for (var t = new i(n, e), r = 0; r < a.length; r++)
                                        try {
                                          B.addEventHandler(
                                            t,
                                            'load',
                                            a[r].intercept.gbBind(a[r], t)
                                          );
                                        } catch (n) {
                                          logger.error(
                                            'failed intercepting Image report via constructor. ' +
                                              n.message,
                                            n
                                          );
                                        }
                                      return t;
                                    };
                                    var r = o.document.createElement;
                                    o.document.createElement = function () {
                                      var n = r.apply(o.document, [].slice.call(arguments));
                                      if ('string' == typeof arguments[0]) {
                                        var e = arguments[0].toLowerCase();
                                        if ('img' === e || 'script' === e)
                                          for (var t = 0; t < a.length; t++)
                                            try {
                                              B.addEventHandler(
                                                n,
                                                'load',
                                                a[t].intercept.gbBind(a[t], n)
                                              );
                                            } catch (n) {
                                              logger.error(
                                                'failed intercepting native createElement method. ' +
                                                  n.message,
                                                n
                                              );
                                            }
                                        return n;
                                      }
                                    };
                                  })();
                              }
                              (this.initialize = function () {
                                L.interceptABTesting &&
                                  L.interceptAjax &&
                                  new lr(
                                    P,
                                    [
                                      {
                                        urlMatcher: 'global-mbox',
                                        path: [],
                                        tokenContainer: 'offers',
                                      },
                                      {
                                        urlMatcher: 'tt.omtrdc',
                                        path: ['execute', 'pageLoad'],
                                        tokenContainer: 'options',
                                      },
                                      {
                                        urlMatcher: 'tt.omtrdc',
                                        path: ['execute', 'mboxes'],
                                        tokenContainer: 'options',
                                      },
                                    ],
                                    0,
                                    e
                                  ),
                                  n.on('init:preloaded', t, F, 10);
                              }),
                                (this.stats = function () {
                                  return e;
                                });
                            })(window, P, Xn)
                          )),
                        void 0 !== Un &&
                          ((Gn = [L.domRecordEnabled ? 'domTrackingStarted' : 'init:loaded']),
                          L.captureGlobalObjectsOnSegmentChange && Gn.push('segmentChanged'),
                          Un.registerPlugin(
                            'ObjectCapture',
                            new (function (e, t, n, r, i) {
                              r = r || [];
                              var o = n({
                                  emptyStrings: (i = i || { paths: [], captureEmptyStrings: !1 })
                                    .captureEmptyStrings,
                                }),
                                a = { captured: [] };
                              function u (n) {
                                n &&
                                  (t.emit('3rdpartymap:scReport', { value: n }),
                                  a.captured.push(n));
                              }
                              i.paths.length &&
                                r.forEach(function (n) {
                                  t.on(n, function () {
                                    u(o.capture(e, i.paths));
                                  });
                                }),
                                t.on('api:captureObject', function (n) {
                                  u(o.toFlatMap(n));
                                }),
                                (this.initialize = function () {
                                  return !0;
                                }),
                                (this.stats = function () {
                                  return a;
                                });
                            })(
                              window,
                              P,
                              function (u) {
                                u = u || { emptyStrings: !1 };
                                var c = B.immutableSet('number', 'string', 'boolean');
                                function s (n) {
                                  return Array.isArray(n) && c[typeof n[0]];
                                }
                                return {
                                  capture: function (n, e) {
                                    for (var t, r = {}, i = 0; i < e.length; i++)
                                      (t = (function (n, e) {
                                        for (var t = n, r = e.split('.'), i = 0; i < r.length; i++)
                                          if (
                                            (t = t[r[i]]) === F ||
                                            (!u.emptyStrings && 'string' == typeof t && !t)
                                          )
                                            return null;
                                        return { object: t, name: r[r.length - 1] };
                                      })(n, e[i])) &&
                                        (function n (e, t, r, i) {
                                          var o,
                                            a = typeof e;
                                          if (c[a])
                                            (e || 'string' != a || u.emptyStrings) &&
                                              (r[t] = '' + e);
                                          else if (s(e)) r[t] = e.join(',');
                                          else if (i && 'object' == a)
                                            for (o in e) e.hasOwnProperty(o) && n(e[o], o, r, !1);
                                        })(t.object, t.name, r, !0);
                                    return Object.keys(r).length ? r : null;
                                  },
                                  toFlatMap: function (n) {
                                    if (!n || 'object' != typeof n) return null;
                                    var e = {};
                                    return (
                                      (function n (e, t, r) {
                                        var i,
                                          o = typeof e;
                                        if (c[o])
                                          (e || 'string' != o || u.emptyStrings) &&
                                            (r[t] = '' + e);
                                        else if (s(e)) r[t] = e.join(',');
                                        else if ('object' == o)
                                          for (i in ((t = t.length ? t + '.' : t), e))
                                            e.hasOwnProperty(i) && n(e[i], t + i, r);
                                      })(n, '', e),
                                      Object.keys(e).length ? e : null
                                    );
                                  },
                                };
                              },
                              Gn,
                              {
                                paths: L.captureGlobalObjects || [],
                                captureEmptyStrings: L.captureGlobalObjectsEmptyStrings,
                              }
                            )
                          )),
                        void 0 !== Un &&
                          (function (n, s, e) {
                            n = n || {};
                            var f = (e = e || {}).visualName,
                              i = e.visualNameDebug || !1,
                              o =
                                0 < e.visualNameLimit
                                  ? Math.min(e.visualNameLimit, e.visualName.maxLimit)
                                  : e.visualName.maxLimit,
                              d = B.immutableSet.apply(null, f.wrapperElementList || []);
                            function l (n, e, t) {
                              if (0 < f.maxDistance) {
                                var r = n.getClientRects();
                                if (r.length)
                                  for (var i = 0; i < r.length; i++)
                                    if (
                                      r[i].left - e < f.maxDistance &&
                                      e - r[i].right < f.maxDistance &&
                                      t - r[i].bottom < f.maxDistance &&
                                      r[i].top - t < f.maxDistance
                                    )
                                      return;
                              }
                              return 1;
                            }
                            var a,
                              u,
                              c,
                              v =
                                ((a = e.noIdSelectorsForClassNames || []),
                                (u = e.noIdSelectorsForIDs || []),
                                (c = e.noIdSelectorsForAttrs || []),
                                function (n) {
                                  if (0 === a.length && 0 === u.length && 0 === c.length)
                                    return !0;
                                  var e = n.getAttribute('id');
                                  if (e)
                                    for (i = 0; i < u.length; i++) {
                                      var t = u[i];
                                      if (t && 0 <= e.indexOf(t)) return !1;
                                    }
                                  for (var r = B.getClassList(n), i = 0; i < a.length; i++)
                                    if (0 <= E.indexOf(r, a[i])) return !1;
                                  for (i = 0; i < c; i++) if (n.hasAttribute(c[i])) return !1;
                                  return !0;
                                });
                            function h (n, e, t) {
                              var r = n.tagName;
                              if ('TD' === r) return null;
                              if ('TEXTAREA' !== r) {
                                var i = B.getAttributeForElement(n, 'class');
                                if (i && E.contains(f.filterInlineTextByClassName, i)) return null;
                                var o,
                                  a = null;
                                if (
                                  (f.by.labelTag && 'LABEL' === n.tagName && (a = n),
                                  ('SPAN' !== r && 'DIV' !== r) ||
                                    (1 === n.childElementCount &&
                                      (o = n.firstElementChild) &&
                                      'A' === o.tagName &&
                                      0 === o.childElementCount &&
                                      (a = o)),
                                  (a =
                                    a ||
                                    (function (n) {
                                      for (var e = f.maxParentLevel + 1; n && e--; ) {
                                        if (d[n.tagName]) return n;
                                        n = n.parentNode;
                                      }
                                      return null;
                                    })(n)) ||
                                    0 !== n.childElementCount ||
                                    (a = n),
                                  a ||
                                    (1 === n.childElementCount &&
                                      (0 !== (o = n.firstElementChild).childElementCount ||
                                        (e && t && l(o, e, t)) ||
                                        (a = n))),
                                  a)
                                )
                                  try {
                                    var u = s(),
                                      c = (u ? u.cloneNode(a) : a).innerText;
                                    return B.trim(c);
                                  } catch (n) {}
                                return null;
                              }
                            }
                            n.extractVisualName = function (n, e, t) {
                              var r = null;
                              if (!n || !B.isElement(n)) return r;
                              if (
                                E.contains(f.filterNamingByTagName, n.tagName.toLocaleLowerCase())
                              )
                                return r;
                              return (
                                (r = B.getAttributeForElement(n, f.CLS_NAME_ATTR)) && 0,
                                !r &&
                                  f.by.title &&
                                  (r = B.getAttributeForElement(n, 'title')) &&
                                  0,
                                !r && f.by.alt && (r = B.getAttributeForElement(n, 'alt')) && 0,
                                !r &&
                                  f.by.ariaLabel &&
                                  (r = B.getAttributeForElement(n, 'aria-label')) &&
                                  0,
                                r ||
                                  (!f.by.inputConsts && !f.by.inputButtonsValue) ||
                                  ((r = (function (n) {
                                    var e;
                                    if ('INPUT' === n.tagName) {
                                      var t = n.type.toLocaleLowerCase();
                                      if (
                                        (('button' !== t && 'submit' !== t && 'reset' !== t) ||
                                          !f.by.inputButtonsValue ||
                                          (e = n.value),
                                        !e && f.by.inputConsts)
                                      )
                                        switch (t) {
                                          case 'password':
                                            e = 'Password';
                                            break;
                                          case 'button':
                                          case 'submit':
                                          case 'image':
                                            e = 'Submit';
                                            break;
                                          case 'file':
                                            e = 'Choose File';
                                            break;
                                          case 'reset':
                                            e = 'Reset';
                                        }
                                    }
                                    return (e = e && B.trim(e)) || null;
                                  })(n)) &&
                                    0),
                                !r && f.by.name && (r = B.getAttributeForElement(n, 'name')) && 0,
                                !r && f.by.inlineText && (r = h(n, e, t)) && 0,
                                !r &&
                                  f.by.id &&
                                  v(n) &&
                                  (r = B.getAttributeForElement(n, 'id')) &&
                                  0,
                                !r &&
                                  f.by.placeholder &&
                                  (r = B.getAttributeForElement(n, 'placeholder')) &&
                                  0,
                                !r &&
                                  f.by.parent &&
                                  (r = (function (n) {
                                    if (
                                      !E.contains(
                                        f.elementListToCheckParent,
                                        n.tagName.toLocaleLowerCase()
                                      )
                                    )
                                      return null;
                                    var e = null,
                                      t = n.parentElement;
                                    return (
                                      !t ||
                                        ('a' !== t.tagName.toLocaleLowerCase() &&
                                          'button' !== t.tagName.toLocaleLowerCase()) ||
                                        (e =
                                          B.getAttributeForElement(t, 'title') ||
                                          B.getAttributeForElement(t, 'alt') ||
                                          B.getAttributeForElement(t, 'aria-label') ||
                                          B.getAttributeForElement(t, 'name') ||
                                          B.getAttributeForElement(t, 'id')),
                                      e || null
                                    );
                                  })(n)) &&
                                  0,
                                !r &&
                                  f.by.child &&
                                  (r = (function (n, e, t) {
                                    if (
                                      !E.contains(
                                        f.elementListToCheckChild,
                                        n.tagName.toLocaleLowerCase()
                                      )
                                    )
                                      return null;
                                    var r;
                                    if (1 === n.childElementCount) {
                                      var i = n.firstElementChild;
                                      if (e && t && l(i, e, t)) return null;
                                      r =
                                        B.getAttributeForElement(i, 'title') ||
                                        B.getAttributeForElement(i, 'alt') ||
                                        B.getAttributeForElement(i, 'aria-label') ||
                                        B.getAttributeForElement(i, 'name') ||
                                        B.getAttributeForElement(i, 'id');
                                    }
                                    return r || null;
                                  })(n, e, t)) &&
                                  0,
                                r && r.length > o && (r = r.substr(0, o).concat('...')),
                                i && (n.tagName, n.type && n.type),
                                r
                              );
                            };
                          })(
                            Un,
                            function () {
                              return Un.plugins.domRecordingPlugin
                                ? Un.plugins.domRecordingPlugin.getNodeCloner()
                                : null;
                            },
                            L
                          ),
                        void 0 !== Un &&
                          Un.registerPlugin(
                            'workerLoader',
                            new (function (e, t, r) {
                              var i,
                                o,
                                a = !1,
                                u = !1,
                                c = !1,
                                s = { state: 'init' };
                              function f (n) {
                                'ready' === n.data.type
                                  ? ((u = !0), clearTimeout(o), c && d('ready'))
                                  : t.emit(n.data);
                              }
                              function d (n) {
                                a || ((a = !0), (s.state = n), t.emit('worker:init', i));
                              }
                              function l () {
                                try {
                                  var n = q.isCorsReporting() && !r.reportDisableCors;
                                  (i = new Worker(
                                    _.detectorScript.src + '?worker'
                                  )).addEventListener('message', f),
                                    i.postMessage({ type: 'init', args: [r, n, G.getKeyInfo()] }),
                                    (s.state = 'started');
                                } catch (n) {
                                  (s.error = n.message),
                                    logger.error('Failed starting web worker. ' + n.message);
                                }
                              }
                              function v () {
                                (c = !0),
                                  u ? d('ready') : setTimeout(d.gbBind(null, 'timeout'), 1000);
                              }
                              (this.initialize = function () {
                                var n = !1;
                                (r.reportUseWorker && !r.reportPreferSendBeaconAPI) ||
                                  ((s.waivingReason = 'disabled'), (n = !0)),
                                  !n &&
                                    e !== e.top &&
                                    r.reportViaTopWindow &&
                                    ((s.waivingReason = 'non-top-window'), (n = !0)),
                                  n || e.Worker || ((s.waivingReason = 'not-supported'), (n = !0)),
                                  n ||
                                    _.detectorScript ||
                                    ((s.waivingReason = 'no-script'), (n = !0)),
                                  n
                                    ? t.emit('worker:init', F)
                                    : (t.on('init:preloaded', l), t.on('init:loaded', v));
                              }),
                                (this.stats = function () {
                                  return s;
                                });
                            })(self, P, L)
                          ),
                        (vr.extractTLD = function (n) {
                          var e = n.split('.');
                          return e.shift(), 0 < e.length ? e.join('.') : n;
                        }),
                        (hr.getEntryKey = function (n) {
                          return (
                            n.url.split('?')[0] +
                            '_' +
                            n.method +
                            '_' +
                            n.segment +
                            '_' +
                            n.queryHash
                          );
                        }),
                        (pr.prototype.hasGzipContentEncoding = function () {
                          if (this.resHeaders)
                            for (var n = this.resHeaders.entries(), e = n.next(); !e.done; ) {
                              if (
                                'content-encoding' === e.value[0].toLowerCase() &&
                                'gzip' === e.value[1].toLowerCase()
                              )
                                return !0;
                              e = n.next();
                            }
                          return !1;
                        }),
                        (pr.prototype.captureContent = function () {
                          return this.responseText;
                        }),
                        (pr.prototype.fixHeaders = function () {
                          if (!this.resHeaders) return '';
                          var t = '';
                          return (
                            this.resHeaders.forEach(function (n, e) {
                              ('transfer-encoding' === e.toLowerCase() &&
                                'chunked' === n.toLowerCase()) ||
                                (t =
                                  'content-length' === e.toLowerCase()
                                    ? t + 'X-Glassbox-Orig-Content-Length: ' + n + '\r\n'
                                    : t + e + ': ' + n + '\r\n');
                            }),
                            this.masking.response &&
                              (t += 'X-Glassbox-JSMasking: ' + this.masking.response + '\r\n'),
                            t
                          );
                        }),
                        (gr.prototype.hasGzipContentEncoding = function () {
                          return null !== /content-encoding:\sgzip/gi.exec(this.resHeaders || '');
                        }),
                        (gr.prototype.captureContent = function () {
                          return 'json' === this.xhr.responseType ||
                            (this.resContentType && -1 !== this.resContentType.indexOf('json'))
                            ? this.ajaxMasker.getJsonContent(this, 'response', this.xhr.response)
                            : 'string' == typeof this.xhr.response
                            ? this.ajaxMasker.maskText(this, 'response', this.xhr.response)
                            : null;
                        }),
                        (gr.prototype.fixHeaders = function () {
                          var n = (n = (this.resHeaders || '').replace(
                            /transfer-encoding:\schunked/gi,
                            'X-Glassbox-Orig-Transfer-Encoding: chunked'
                          )).replace(/content-length:/gi, 'X-Glassbox-Orig-Content-Length:');
                          return (
                            this.masking.response &&
                              ((n = n.trim()),
                              (n +=
                                '\r\nX-Glassbox-JSMasking: ' + this.masking.response + '\r\n')),
                            n
                          );
                        }),
                        (gr.prototype.onCompleted = function () {
                          var n = B.currentTimestamp();
                          (this.consumed = !0),
                            (this.status = this.xhr.status),
                            (this.statusText = this.xhr.statusText),
                            (this.resHeaders = this.xhr.getAllResponseHeaders()),
                            (this.resContentType = this.xhr.getResponseHeader('Content-Type')),
                            (this.contentLength = this.xhr.getResponseHeader('Content-Length')),
                            (this.duration = n - this.startTime),
                            (this.endTime = n),
                            (this.responseType = this.xhr.responseType),
                            (this.response = this.xhr.response),
                            (this.responseText =
                              this.xhr.responseType && 'text' !== this.xhr.responseType
                                ? F
                                : this.xhr.responseText);
                        }),
                        (br.safeEncodeURI = function (e) {
                          try {
                            return e === decodeURI(e) ? encodeURI(e) : e;
                          } catch (n) {
                            return encodeURI(e);
                          }
                        }),
                        (br.nextSn =
                          ((Jn = 0),
                          function () {
                            return Jn++;
                          })),
                        void 0 !== Un &&
                          void 0 !== L &&
                          L.interceptAjax &&
                          ((Kn = {
                            allow: function () {
                              return !0;
                            },
                          }),
                          -1 !== L.ajaxRecordSessionLimit &&
                            (window,
                            (Yn = P),
                            ($n = W),
                            (Zn = L.ajaxRecordSessionLimit),
                            (ne = Zn <= Er()),
                            (Kn = {
                              allow: function () {
                                var n = Er(),
                                  e = ++n <= Zn;
                                return (
                                  e || ne || (Yn.emit('ajax:limitReached'), (ne = !0)),
                                  $n.set('xhr.cnt', n),
                                  e
                                );
                              },
                            })),
                          (Qn = new (function (r, t) {
                            var f = 'MASKING ERROR';
                            t = B.optionsWithDefaults(t, { requestRules: [], responseRules: [] });
                            var d = !0,
                              i = [],
                              o = { request: [], response: [] };
                            function l (n) {
                              for (var e = 0; e < i.length; ++e) if (i[e](n)) return 1;
                            }
                            function v (n, e) {
                              for (var t = [], r = 0; r < o[e].length; ++r)
                                o[e][r].predicate(n) && t.push(o[e][r].transformations);
                              return t;
                            }
                            function a (n, e, t) {
                              try {
                                n.push({
                                  predicate: e,
                                  transformations: {
                                    jsonField: r.jsonField(t),
                                    pattern: r.pattern(t),
                                  },
                                });
                              } catch (n) {
                                logger.error(
                                  'Error while processing AJAX masking rule. Please check rules transformation configuration.',
                                  n
                                ),
                                  i.push(e);
                              }
                            }
                            function h (n, e, t) {
                              n.masking && (n.masking[e] = t);
                            }
                            (this.init = function (n) {
                              try {
                                for (var e = 0; e < t.responseRules.length; ++e)
                                  a(
                                    o.response,
                                    n.create(t.responseRules[e].predicate),
                                    t.responseRules[e].transformations
                                  );
                                for (e = 0; e < t.requestRules.length; ++e)
                                  a(
                                    o.request,
                                    n.create(t.requestRules[e].predicate),
                                    t.requestRules[e].transformations
                                  );
                              } catch (n) {
                                (d = !1),
                                  logger.error(
                                    'Error while initializing AJAX masking settings. Please check rules predicates configuration.',
                                    n
                                  );
                              }
                            }),
                              (this.maskText = function (e, t, n) {
                                if (!n) return '';
                                try {
                                  if (!d || l(e)) return h(e, t, 'bad-config'), f;
                                  var r = v(e, t);
                                  if (r.length) {
                                    for (var i = {}, o = 0; o < r.length; ++o)
                                      n = r[o].pattern(n, i);
                                    i.masked && h(e, t, 'masked');
                                  }
                                  return n;
                                } catch (n) {
                                  return (
                                    h(e, t, 'error'),
                                    logger.error('Error during textual ajax content masking.', n),
                                    f
                                  );
                                }
                              }),
                              (this.getJsonContent = function (e, t, n) {
                                if (!n) return '';
                                try {
                                  if (!d || l(e)) return e.masking && h(e, t, 'bad-config'), f;
                                  var r = 'string' == typeof n,
                                    i = {},
                                    o = v(e, t);
                                  if (!o.length) return r ? n : JSON.stringify(n);
                                  var a = r ? JSON.parse(n) : n,
                                    u = JSON.stringify(
                                      a,
                                      ((c = i),
                                      (s = o),
                                      function (n, e) {
                                        for (var t = e, r = 0; r < s.length; ++r)
                                          t = s[r].jsonField(n, t, c);
                                        return t;
                                      })
                                    );
                                  return i.masked && h(e, t, 'masked'), u;
                                } catch (n) {
                                  return (
                                    h(e, t, 'error'),
                                    logger.error('Error during json ajax content masking.', n),
                                    f
                                  );
                                }
                                var c, s;
                              });
                          })(
                            new (function () {
                              function i (n) {
                                return new RegExp(n, 'g');
                              }
                              function o (n, e) {
                                return V.censorValueOf(e, 0, n);
                              }
                              function e (n, e) {
                                for (var t = [], r = 0; r < n.length; ++r)
                                  n[r].type.toLowerCase() === e &&
                                    (n[r].replace
                                      ? t.push({ search: i(n[r].search), replace: n[r].replace })
                                      : t.push({
                                          search: i(n[r].search),
                                          replaceChar: n[r].replaceChar || '*',
                                        }));
                                return t;
                              }
                              (this.jsonField = function (n) {
                                var o = e(n, 'jsonfield');
                                return function (n, e, t) {
                                  for (var r = 0; r < o.length; ++r)
                                    if (o[r].search.test(n)) {
                                      var i = e + '';
                                      return (
                                        t && (t.masked = !0),
                                        o[r].replace
                                          ? o[r].replace
                                          : V.censorValueOf(i, 0, o[r].replaceChar)
                                      );
                                    }
                                  return e;
                                };
                              }),
                                (this.pattern = function (n) {
                                  var r = e(n, 'pattern');
                                  return function (n, e) {
                                    for (var t = 0; t < r.length; ++t)
                                      (n = r[t].replace
                                        ? n.replace(r[t].search, r[t].replace)
                                        : n.replace(
                                            r[t].search,
                                            o.gbBind(null, r[t].replaceChar || '*')
                                          )),
                                        e && (e.masked = !0);
                                    return n;
                                  };
                                });
                            })(),
                            {
                              requestRules: L.ajaxMaskRequestBody,
                              responseRules: L.ajaxMaskResponseBody,
                            }
                          )),
                          Un.registerPlugin(
                            'ajaxInterceptor',
                            new br(window, Dn, P, X, Kn, Qn, O.location.host, Y, L, [
                              'adrum',
                              'dynatrace',
                              'appdynamics.com',
                              'tealeaf',
                              '/retail/discountinternet/portal/coex.asmx/keepalive',
                              'oauth/cc',
                            ])
                          )),
                        void 0 !== Un &&
                          Un.registerPlugin(
                            'errors',
                            new (function (n, t, e) {
                              var r = (e = e || {}).maxRecordedCountPerError || -1,
                                i = {
                                  interceptedErrors: 0,
                                  interceptedConsoleErrors: 0,
                                  limitExceededErrors: 0,
                                  emittedPageEvents: 0,
                                },
                                o = {},
                                a =
                                  -1 === r
                                    ? function () {
                                        return !0;
                                      }
                                    : function (n) {
                                        var e = n.substring(0, 30);
                                        return (o[e] = (o[e] || 0) + 1), o[e] <= r;
                                      };
                              function u (n) {
                                var e = !a(n);
                                t.emit('pageError', { error: n, eventLimitExceeded: e }),
                                  e ? i.emittedPageEvents++ : i.limitExceededErrors++;
                              }
                              function c (n) {
                                var e = '';
                                'string' == typeof n.message && (e += n.message),
                                  'string' == typeof n.url
                                    ? (e += '; URL: ' + n.url)
                                    : 'string' == typeof n.filename &&
                                      (e += '; FILE: ' + n.filename),
                                  'number' == typeof n.lineno && (e += '; L: ' + n.lineno),
                                  'number' == typeof n.colno && (e += '; C: ' + n.colno),
                                  e && (i.interceptedErrors++, u(e));
                              }
                              function s (n) {
                                i.interceptedConsoleErrors++, u((n || []).join(' '));
                              }
                              (this.initialize = function () {
                                e.recordErrors && B.addEventHandler(n, 'error', c),
                                  e.recordConsoleErrors &&
                                    (function (n) {
                                      var e;
                                      if ('object' == typeof console)
                                        for (e in n)
                                          !(function (n, e) {
                                            var t;
                                            'function' == typeof console[n] &&
                                              ((t = console[n]),
                                              (console[n] = function () {
                                                var n = Array.prototype.slice.call(arguments);
                                                t.apply(console, n), e(n);
                                              }));
                                          })(e, n[e]);
                                    })({ error: s });
                              }),
                                (this.stats = function () {
                                  return i;
                                });
                            })(window, P, L)
                          ),
                        void 0 !== Un &&
                          Un.registerPlugin(
                            'cors',
                            new (function (t, o, i, n, a, u, c) {
                              c = c || {};
                              var s = { INIT: 0, HELPING: 1, READY: 2 },
                                f = 5000,
                                d = 'cors_ready',
                                l = [_.cookies.session, _.cookies.visitor],
                                v = c.reportCorsTakeNativeCookies || [],
                                h = 'prev_native_cookies',
                                e = !0,
                                m = s.INIT,
                                p = -1,
                                g = -1;
                              function y (n, e) {
                                for (var t, r = 0; r < n.length; r++)
                                  (t = u.get(n[r])) && e.push(n[r] + '=' + encodeURIComponent(t));
                              }
                              function r () {
                                var n = [];
                                if ((y(l, n), y(v, n), 0 !== n.length)) {
                                  var e = o.currentTimestamp();
                                  m = s.HELPING;
                                  var t = c.reportURI + '?' + n.join('&'),
                                    r = i();
                                  return (
                                    (r.onreadystatechange = function () {
                                      4 === r.readyState
                                        ? ((p = o.currentTimestamp() - e),
                                          (g = r.status),
                                          200 === r.status ? a.set(d, !0) : r.status,
                                          b())
                                        : 0 === r.readyState && b();
                                    }),
                                    r.open('GET', t, !0),
                                    (r.withCredentials = !0),
                                    (r.setTimeout = f),
                                    r.send(),
                                    1
                                  );
                                }
                              }
                              function w () {
                                if (!e) return b();
                                if (v.length)
                                  if (o.isSafari(window.navigator.userAgent))
                                    !(function () {
                                      try {
                                        for (var n = 0, e = [], n = 0; n < v.length; n++)
                                          e.push({ key: v[n], value: u.get(v[n]) });
                                        t.emit('updateSafariQueryString', e);
                                      } catch (n) {
                                        logger.error(
                                          'Failed handling Safari native cookies. Exception message:' +
                                            n.message,
                                          n
                                        );
                                      }
                                    })();
                                  else if (
                                    c.resetCorsOnNativeCookieChange &&
                                    (function () {
                                      var n,
                                        e,
                                        t,
                                        r = !1,
                                        i = [];
                                      try {
                                        for (
                                          t = (t = a.get(h)) ? JSON.parse(t) : [], n = 0;
                                          n < v.length;
                                          n++
                                        )
                                          (e = u.get(v[n])), i.push(e), e !== t[n] && (r = !0);
                                        r && a.set(h, o.arrayToJsonSafe(i));
                                      } catch (n) {
                                        return void logger.error(
                                          'Failed detecting native cookies change. Exception message:' +
                                            n.message,
                                          n
                                        );
                                      }
                                      return r;
                                    })()
                                  )
                                    return E();
                                return !a.get(d) && r() ? void 0 : b();
                              }
                              function b () {
                                (m = s.READY), t.emit('corsReady');
                              }
                              function E () {
                                e &&
                                  (t.emit('corsReset'),
                                  a.set(d, ''),
                                  (m = s.INIT),
                                  (g = p = -1),
                                  r());
                              }
                              (this.initialize = function () {
                                (e = n.isCorsReporting() && !c.reportDisableCors),
                                  t.on('init:loaded', w);
                              }),
                                (this.onCookieChanged = function () {
                                  E();
                                }),
                                (this.stats = function () {
                                  return {
                                    enabled: e,
                                    state: m,
                                    requestDuration: p,
                                    requestStatus: g,
                                  };
                                });
                            })(P, B, Bn.createXMLHTTPObject, q, W, z, L)
                          ),
                        void 0 !== Un &&
                          Un.registerPlugin(
                            'naming',
                            new (function (n, e, t) {
                              t = B.optionsWithDefaults(t, { pageNameEnabled: !1 });
                              var r,
                                i,
                                o,
                                a,
                                u,
                                c,
                                s = {};
                              function f () {
                                var n = i.resolve();
                                n &&
                                  ((r = n),
                                  (s.pageNameCurrent = r),
                                  e.emit('pageNameResolved', r));
                              }
                              t.pageNameEnabled
                                ? ((s.pageName = 'enabled'),
                                  (o = n),
                                  (a = { selectors: t.pageNameByElements }),
                                  (u = (a = a || {}).selectors || []),
                                  (c = B.immutableSet.apply(null, u)),
                                  (i = {
                                    resolve: function () {
                                      for (var n, e = 0; e < u.length; e++)
                                        if (c[u[e]])
                                          try {
                                            if ((n = o.querySelector(u[e]))) return n.textContent;
                                          } catch (n) {
                                            c[u[e]] = !1;
                                          }
                                    },
                                  }),
                                  e.on('init:loaded', f),
                                  e.on('frame:load', f),
                                  e.on('parentWindowInfo', function (n) {
                                    n.parentPageName &&
                                      ((r = n.parentPageName),
                                      (s.pageNameCurrent = r),
                                      e.emit('pageNameResolved', r));
                                  }))
                                : (s.pageName = 'disabled'),
                                (this.initialize = function () {
                                  return !0;
                                }),
                                (this.stats = function () {
                                  return s;
                                });
                            })(O, P, {
                              pageNameEnabled: L.pageNameResolvingEnabled,
                              pageNameByElements: L.pageNameResolvingByElements || [],
                            })
                          ),
                        new (function (n, t, e, r, i, o) {
                          var a, u;
                          function c (n) {
                            if (n) for (var e in n) 'hash' !== e && (o[e] = n[e]);
                          }
                          n.detectorScript &&
                            n.detectorScript.src &&
                            o.configPath &&
                            ((function () {
                              var n,
                                e = t.get('js.conf');
                              if (e)
                                try {
                                  (n = r.decode(e)), (a = n.hash), c(n);
                                } catch (n) {
                                  logger.error(
                                    'failed parsing JSON of external configuration: ' + n.message,
                                    n
                                  );
                                }
                            })(),
                            (u = B.extractOrigin(n.detectorScript.src)),
                            e(
                              B.joinPath(u, o.configPath),
                              function (n) {
                                var e;
                                try {
                                  e = JSON.parse(n);
                                } catch (n) {
                                  return void logger.error(
                                    'Failed parsing external configuration JSON: ' + n.message,
                                    n
                                  );
                                }
                                (void 0 !== a && void 0 !== e.hash && a === e.hash) ||
                                  (t.set('js.conf', r.encode(e)), c(e), (a = e.hash));
                              },
                              function (n) {
                                i.emit('clsDebug', n);
                              }
                            ));
                        })(
                          _,
                          new jt(window.localStorage, { keysPrefix: _.Storage.UnboundKeyPrefix }),
                          function (t, r, i) {
                            try {
                              var o = Bn.createXMLHTTPObject(!0);
                              o ||
                                i(
                                  'Failed creating XHR object for fetching external configuration'
                                ),
                                (o.onreadystatechange = function () {
                                  var n, e;
                                  4 === o.readyState &&
                                    (200 === o.status
                                      ? (n = o.getResponseHeader('Content-Type')) &&
                                        -1 !== n.indexOf('application/json') &&
                                        r(o.response)
                                      : ((e =
                                          'Failed getting external configuration for url : ' +
                                          t +
                                          ' status:' +
                                          o.status +
                                          '  ' +
                                          o.statusText),
                                        i(e)));
                                }),
                                o.open('GET', t, !0),
                                (o.onprogress = function () {}),
                                (o.ontimeout = function () {}),
                                (o.onerror = function () {}),
                                setTimeout(function () {
                                  try {
                                    o.send();
                                  } catch (n) {
                                    logger.error(
                                      'Failed sending request to url ' + t + ': ' + n.message,
                                      n
                                    );
                                  }
                                }, 0);
                            } catch (n) {
                              logger.error(s + n.message, n),
                                console.log(
                                  'Failed getting external configuration for url: ' +
                                    t +
                                    ': ' +
                                    n.message,
                                  n
                                ),
                                i(n.message);
                            }
                          },
                          new Ir(B.Base64),
                          P,
                          L
                        ),
                        (ee = {
                          SELF: {
                            follow: function (n, e) {
                              return n.nodeType === Node.ELEMENT_NODE && B.elementMatches(n, e);
                            },
                          },
                          SELF_OR_ANY_PARENT: {
                            follow: function (n, e) {
                              for (var t = n; t; ) {
                                if (t.nodeType === Node.ELEMENT_NODE && B.elementMatches(t, e))
                                  return !0;
                                t = t.parentNode;
                              }
                              return !1;
                            },
                          },
                          SELF_OR_ANY_CHILD: {
                            follow: function (n, e) {
                              return (
                                !(n.nodeType !== Node.ELEMENT_NODE || !B.elementMatches(n, e)) ||
                                ('function' == typeof n.querySelector && !!n.querySelector(e))
                              );
                            },
                          },
                        }),
                        (kr.prototype.isAttributeMasked = function (n, e) {
                          return !(
                            !this._maskedAttributesTags[n.tagName] ||
                            !this._maskedAttributes[e] ||
                            (n.hasAttribute && n.hasAttribute(this._ignoreMaskByAttribute))
                          );
                        }),
                        (kr.prototype.isDomMasked = function (n, e) {
                          for (
                            var t, r, i, o = Array.prototype.slice.call(arguments, 2), a = 0;
                            a < o.length;
                            a++
                          ) {
                            if (
                              ((r =
                                !!(t = this._selectorsByMaskingType[o[a]].selector) &&
                                e.follow(n, t)),
                              (i = this._selectorsByMaskingType[o[a]].doInvert),
                              r)
                            )
                              return !i;
                            if (i) return !0;
                          }
                          return !!i;
                        }),
                        (kr.prototype.createContextUpdater = function (o) {
                          var a = this,
                            u = this._domMaskingMode === _.censorMode.WhiteList,
                            c = {},
                            s = [];
                          function f (n, e) {
                            s.push(n), (e.maskText = n);
                          }
                          return {
                            onStart: function (n, e) {
                              if (
                                (f(
                                  !a._unmaskableTags[n.tagName] &&
                                    a.isDomMasked(n, ee.SELF_OR_ANY_PARENT, te.TEXT),
                                  e
                                ),
                                n.querySelectorAll)
                              ) {
                                var t = a._selectorsByMaskingType[te.TEXT].selector;
                                if (t)
                                  for (var r = n.querySelectorAll(t), i = 0; i < r.length; i++)
                                    c[o.idOf(r[i])] = !0;
                              }
                            },
                            onEnterElement: function (n, e) {
                              var t = s[s.length - 1],
                                r = o.idOf(n);
                              if (c[r]) {
                                var i = !u && !a._unmaskableTags[n.tagName];
                                if (i !== t) return f(i, e), !0;
                              }
                              return (
                                !!(
                                  (t && a._unmaskableTags[n.tagName]) ||
                                  (t && n.hasAttribute && n.hasAttribute(a._ignoreMaskByAttribute))
                                ) && (f(!1, e), !0)
                              );
                            },
                            onLeaveElement: function (n, e) {
                              s.pop(), (e.maskText = s[s.length - 1]);
                            },
                            onEnd: function () {
                              (c = {}), (s = []);
                            },
                          };
                        }),
                        (te = {
                          TEXT: 'TEXT',
                          ATTRIBUTE: 'ATTRIBUTE',
                          VALUE_ATTRIBUTE: 'VALUE_ATTRIBUTE',
                          OMIT: 'OMIT',
                        }),
                        (kr.prepareWildCardSelector = function (n, e) {
                          var t =
                            '' === n[0]
                              ? '[' + e + "$='" + n[1] + "']"
                              : '' === n[1]
                              ? '[' + e + "^='" + n[0] + "']"
                              : '[' + e + "^='" + n[0] + "'][" + e + "$='" + n[1] + "']";
                          return t;
                        }),
                        (Mr.prototype.maskCookie = function (n) {
                          if (!n || !this._cookieMaskSet) return n;
                          for (var e, t, r, i, o = n.split(';'), a = [], u = 0; u < o.length; u++)
                            -1 !== (t = (e = o[u]).indexOf('='))
                              ? ((r = e.substring(0, t).trim()),
                                (i = e.substring(t + 1)),
                                a.push(
                                  r +
                                    '=' +
                                    (i && this._cookieMaskSet.hasOwnProperty(r)
                                      ? V.censorValueOf(i)
                                      : i)
                                ))
                              : a.push(e);
                          return a.join('; ');
                        }),
                        (Rr.prototype.isDomEncrypted = function (n, e) {
                          return e.follow(n, this._encryptionSelector);
                        }),
                        (Rr.prototype.encrypt = function (e) {
                          if (this._shouldFallback)
                            return B.transformTextSegments(e, this._maskingUtils.censorValueOf);
                          if (!this._encryptionUtils.isAvailable())
                            return (
                              (this._shouldFallback = !0),
                              logger.error('encryption not available, switching to fallback.'),
                              this._events.emit(
                                'clsDebug',
                                'encryption not available, switching to fallback'
                              ),
                              B.transformTextSegments(e, this._maskingUtils.censorValueOf)
                            );
                          try {
                            return this._encryptionUtils.censorValueOf(e);
                          } catch (n) {
                            return (
                              logger.error(
                                'failed encrypting text, switching to fallback: ' + n.message,
                                n
                              ),
                              this._events.emit(
                                'clsDebug',
                                'Error: failed encrypting text. Switching to fallback'
                              ),
                              (this._shouldFallback = !0),
                              B.transformTextSegments(e, this._maskingUtils.censorValueOf)
                            );
                          }
                        }),
                        (Rr.prototype.createContextUpdater = function (o) {
                          var a = this,
                            u = {},
                            c = [];
                          function s (n, e) {
                            c.push(n), (e.encryptText = n);
                          }
                          return {
                            onStart: function (n, e) {
                              if (
                                (s(
                                  !a._unEncryptableTags[n.tagName] &&
                                    a.isDomEncrypted(n, ee.SELF_OR_ANY_PARENT),
                                  e
                                ),
                                n.querySelectorAll)
                              ) {
                                var t = a._encryptionSelector;
                                if (t)
                                  for (var r = n.querySelectorAll(t), i = 0; i < r.length; i++)
                                    u[o.idOf(r[i])] = !0;
                              }
                            },
                            onEnterElement: function (n, e) {
                              var t = c[c.length - 1],
                                r = o.idOf(n);
                              if (u[r]) {
                                var i = !a._unEncryptableTags[n.tagName];
                                if (i !== t) return s(i, e), !0;
                              }
                              return !(!t || !a._unEncryptableTags[n.tagName]) && (s(!1, e), !0);
                            },
                            onLeaveElement: function (n, e) {
                              c.pop(), (e.encryptText = c[c.length - 1]);
                            },
                            onEnd: function () {
                              (u = {}), (c = []);
                            },
                          };
                        }),
                        (Nr.prototype = {
                          next: function () {
                            for (
                              var n = this._node.childNodes[++this._childIndex];
                              n && !this._predicate(n);

                            )
                              n = this._node.childNodes[++this._childIndex];
                            return n;
                          },
                        }),
                        (_r.SHOW_ALL = 0),
                        (_r.SHOW_ELEMENTS = 1),
                        (qr.prototype.toString = function () {
                          return (
                            'seq:' +
                            this.seq +
                            'referrer' +
                            this.referrer +
                            'charset:' +
                            this.charset +
                            'cookie-len' +
                            (this.cookie ? this.cookie.length : 0) +
                            (20 < this.html.length
                              ? 'html length: ' + this.html.length
                              : 'html: ' + this.html)
                          );
                        }),
                        (Wr.prototype.onNodeAdded = function (n) {
                          this.addedNodes[n] = !0;
                        }),
                        (Gr.propertyForElement = function (n) {
                          if ('SELECT' === n.tagName) return 'selectedIndex';
                          if ('TEXTAREA' === n.tagName) return 'value';
                          if ('INPUT' !== n.tagName) return F;
                          var e = n.getAttribute('type') && n.getAttribute('type').toLowerCase();
                          return !e || ('checkbox' !== e && 'radio' !== e) ? 'value' : 'checked';
                        }),
                        (Gr.defaultValue = function (n, e) {
                          if ('checked' === e) return n.hasAttribute('checked');
                          if ('selectedIndex' === e) {
                            var t = n.querySelector('option[selected]');
                            return t ? t.index : null !== n.querySelector('option') ? 0 : -1;
                          }
                          var r = n.getAttribute(e);
                          return r || 'value' !== e ? r : '';
                        }),
                        void 0 !== Un &&
                          L.domRecordEnabled &&
                          ((re = L.valueMaskingMode === _.censorMode.WhiteList),
                          (ie = L.domMaskingMode === _.censorMode.WhiteList),
                          (Oe = new kr(
                            {
                              valueMaskingMode: L.valueMaskingMode,
                              valueMaskIds: re
                                ? L.maskWhitelistValueById
                                : L.maskBlacklistValueById,
                              valueMaskClasses: re
                                ? L.maskWhitelistValueByClass
                                : L.maskBlacklistValueByClass,
                              valueMaskIgnoreAttribute: L.valueMaskIgnoreAttribute,
                              domMaskingMode: L.domMaskingMode,
                              domMaskIds: ie
                                ? L.domWhitelistMaskContentById
                                : L.domBlacklistMaskContentById,
                              domMaskClasses: ie
                                ? L.domWhitelistMaskContentByClass
                                : L.domBlacklistMaskContentByClass,
                              domOmitIds: L.domMaskOmitById || L.domOmitById,
                              domOmitClasses: L.domMaskOmitByClass || L.domOmitByClass,
                              domMaskedAttributes: L.domMaskedAttributes,
                              domMaskAttributesTags: L.domMaskAttributesByTag,
                              domMaskIgnoreAttribute: L.domMaskIgnoreAttribute,
                              domMaskSimpleSelector: ie
                                ? L.domWhitelistMaskSimpleSelector
                                : L.domBlacklistMaskSimpleSelector,
                            },
                            wt()
                          )),
                          (Fe = new Rr(P, J, V, wt(), {
                            domEncryptIds: L.domEncryptById,
                            domEncryptClasses: L.domEncryptByClass,
                          })),
                          (oe = new (function (n, e, t, r, i, o, a, u) {
                            const $___old_c655e7a9585f5669 = {}.constructor.getOwnPropertyDescriptor(
                              Navigator.prototype,
                              'userAgent'
                            );
                            try {
                              if ($___old_c655e7a9585f5669)
                                ({}.constructor.defineProperty(
                                  Navigator.prototype,
                                  'userAgent',
                                  $___stub_47c01efa79e9f191.userAgent
                                ));
                              return function () {
                                var c = (function (t) {
                                    t = B.optionsWithDefaults(t, {
                                      denyTagNames: [],
                                      acceptIfTextContentMatches: {},
                                      denyIdsByTagName: {},
                                      denyComments: !0,
                                      denyHeadTagNames: [],
                                      denyIds: [],
                                      denyClasses: [],
                                      denyObjectElementsByType: [],
                                    });
                                    var r,
                                      i,
                                      o,
                                      a,
                                      u,
                                      c,
                                      s,
                                      n = (function () {
                                        var n,
                                          e = {};
                                        for (n in t.denyIdsByTagName)
                                          e[n] = B.immutableSet.apply(null, t.denyIdsByTagName[n]);
                                        return e;
                                      })(),
                                      e = (function () {
                                        var n,
                                          e = {};
                                        for (n in t.acceptIfTextContentMatches)
                                          e[n] = new RegExp(t.acceptIfTextContentMatches[n]);
                                        return e;
                                      })(),
                                      f = B.immutableSet.apply(null, t.denyTagNames),
                                      d = B.immutableSet.apply(null, t.denyHeadTagNames),
                                      l = B.immutableSet.apply(null, t.denyIds),
                                      v = B.immutableSet.apply(null, t.denyObjectElementsByType);
                                    return (
                                      (r = f),
                                      (i = d),
                                      (o = n),
                                      (a = e),
                                      (u = l),
                                      (c = t.denyClasses),
                                      (s = v),
                                      function (n) {
                                        if (
                                          n.parentNode &&
                                          'HEAD' === n.parentNode.tagName &&
                                          i[n.tagName]
                                        )
                                          return !1;
                                        if (
                                          u[n.id] ||
                                          ('OBJECT' === n.tagName && s[n.getAttribute('type')]) ||
                                          B.hasOneOfClassNames(n, c)
                                        )
                                          return !1;
                                        if (r[n.tagName]) {
                                          var e = a[n.tagName];
                                          if (!e || !e.exec(n.textContent)) return !1;
                                        }
                                        return (
                                          (n.nodeType !== Node.COMMENT_NODE || !t.denyComments) &&
                                          (!o[n.tagName] ||
                                            'undefined' === n.id ||
                                            !o[n.tagName][n.id])
                                        );
                                      }
                                    );
                                  })({
                                    denyComments: !u.domKeepComments,
                                    denyTagNames: ['SCRIPT', 'NOSCRIPT', 'DOM-IF'],
                                    denyIdsByTagName: u.domIgnoredFormElements
                                      ? { INPUT: u.domIgnoredFormElements }
                                      : {},
                                    acceptIfTextContentMatches: u.domKeepScriptMatching
                                      ? { SCRIPT: u.domKeepScriptMatching }
                                      : {},
                                    denyHeadTagNames: ['IFRAME', 'FRAME', 'FRAMESET'],
                                    denyIds: u.domMaskOmitById || u.domOmitById,
                                    denyClasses: u.domMaskOmitByClass || u.domOmitByClass,
                                    denyObjectElementsByType: u.domOmitObjectElementsByType,
                                  }),
                                  s = [];
                                s.push(o.createContextUpdater(t)),
                                  s.push(a.createContextUpdater(t));
                                var f,
                                  d,
                                  l,
                                  v = new _r(c, new Ar(s), { crossShadow: u.recordShadowDom }),
                                  h = B.compositeFunctionBuilder(!0).add(Qr).add($r);
                                h.add(
                                  ((f = V),
                                  (d = a),
                                  function (n, e) {
                                    if (n.nodeType === Node.TEXT_NODE && e && e.maskText)
                                      return n.ownerDocument.createTextNode(
                                        B.transformTextSegments(n.textContent, f.censorValueOf)
                                      );
                                    if (n.nodeType === Node.TEXT_NODE && e && e.encryptText) {
                                      var t = d.encrypt(n.textContent);
                                      return n.ownerDocument.createTextNode(t);
                                    }
                                  })
                                ),
                                  u.maskTitle &&
                                    h.add(
                                      ((l = V),
                                      function (n) {
                                        if ('TITLE' === n.nodeName) {
                                          var e = n.ownerDocument.createElement('title');
                                          return (
                                            (e.textContent = B.transformTextSegments(
                                              n.textContent,
                                              l.censorValueOf
                                            )),
                                            e
                                          );
                                        }
                                      })
                                    ),
                                  (u.struggleCaptureHorizontalScrollbar ||
                                    u.struggleCaptureBlankPage) &&
                                    h.add(i.clonerHook);
                                var m,
                                  p,
                                  g,
                                  y,
                                  w,
                                  b,
                                  E,
                                  C,
                                  T = B.compositeFunctionBuilder(!0).add(
                                    function (n, e, t, r) {
                                      t.nodeType === Node.ELEMENT_NODE && t.setAttribute(n, r[e]);
                                    }.gbBind(null, 'gbid', Q.GB_ID_FIELD_NAME)
                                  );
                                (u.valueMaskingMode === _.censorMode.WhiteList ||
                                  u.maskBlacklistValueByClass.length ||
                                  u.maskBlacklistValueById.length ||
                                  u.valueMaskByCategories.length ||
                                  u.valueBlacklistMaskSimpleSelector.length ||
                                  u.valueEncryptionMode === _.censorMode.WhiteList ||
                                  u.valueEncryptById.length ||
                                  u.valueEncryptByClass.length) &&
                                  (T.add(
                                    ((p = r),
                                    function (n) {
                                      'INPUT' === n.tagName &&
                                        n.getAttribute('value') &&
                                        n.setAttribute('value', p.censor(n));
                                    })
                                  ),
                                  h.add(
                                    ((m = r),
                                    function (n) {
                                      var e;
                                      if (
                                        'TEXTAREA' === n.tagName &&
                                        n.firstChild &&
                                        n.firstChild.textContent &&
                                        (e = m.censor(n)) !== n.firstChild.textContent
                                      ) {
                                        var t = n.cloneNode(!0);
                                        return (
                                          (t.firstChild.textContent = e), (t.maskContent = !0), t
                                        );
                                      }
                                    })
                                  )),
                                  u.domMaskAttributesByTag.length &&
                                    u.domMaskedAttributes.length &&
                                    T.add(
                                      ((g = V),
                                      (y = {
                                        domMaskedAttributes: u.domMaskedAttributes,
                                        domMaskAttributesTags: u.domMaskAttributesByTag,
                                        domMaskIgnoreAttribute: u.domMaskIgnoreAttribute,
                                      }),
                                      (w = { IMG: 'data:image/gif;base64,' }),
                                      (b = B.immutableSet.apply(null, y.domMaskedAttributes)),
                                      (E = B.immutableSet.apply(
                                        null,
                                        (y.domMaskAttributesTags || []).map(function (n) {
                                          return n.toUpperCase();
                                        })
                                      )),
                                      (C = y.domMaskIgnoreAttribute),
                                      function (n) {
                                        var e, t;
                                        if (
                                          E[n.tagName] &&
                                          'function' == typeof n.getAttribute &&
                                          !n.hasAttribute(C)
                                        )
                                          for (e in b)
                                            !b.hasOwnProperty(e) ||
                                              ((t = n.getAttribute(e)) &&
                                                (w[n.tagName] && 'src' === e
                                                  ? n.setAttribute(e, w[n.tagName])
                                                  : n.setAttribute(e, g.censorValueOf(t))));
                                      })
                                    ),
                                  u.removeBase64ImageDataTagNames &&
                                    0 < u.removeBase64ImageDataTagNames.length &&
                                    T.add(
                                      Zr(
                                        B.immutableSet.apply(null, u.removeBase64ImageDataTagNames)
                                      )
                                    );
                                var S,
                                  I,
                                  k,
                                  x,
                                  M = B.isIE(n.navigator.userAgent),
                                  R =
                                    ((S = e),
                                    (I = {
                                      maxElements: M
                                        ? u.domFuseElementCountIE
                                        : u.domFuseElementCount,
                                      maxDuration: M ? u.domFuseDurationIE : u.domFuseDuration,
                                    }),
                                    (k = 0 < ((I = I || {}).maxElements || 0)),
                                    (x = 0 < (I.maxDuration || 0)),
                                    {
                                      createFuse: function () {
                                        return {
                                          blown: !1,
                                          createdAt: new Date(),
                                          elementCount: -1,
                                          duration: -1,
                                          onElementsCloned: N,
                                        };
                                      },
                                    });
                                function A (n, e) {
                                  var t;
                                  n.blown ||
                                    ((t =
                                      -1 !== n.duration ? n.duration : new Date() - n.createdAt),
                                    n.elementCount,
                                    (n.blown = !0),
                                    S.emit('dom:fuseBlown', {
                                      reason: e,
                                      duration: t,
                                      elements: n.elementCount,
                                      maxDuration: I.maxDuration || -1,
                                      maxElements: I.maxElements || -1,
                                    }));
                                }
                                function N (n) {
                                  this.blown ||
                                    ((this.elementCount = n),
                                    x &&
                                    ((this.duration = new Date() - this.createdAt),
                                    this.duration >= I.maxDuration)
                                      ? A(this, 'duration')
                                      : k &&
                                        this.elementCount >= I.maxElements &&
                                        A(this, 'elementCount'));
                                }
                                var D = new Dr(
                                  n,
                                  (function (n, e, t) {
                                    const $___old_9c1e11e1a55003ba = {}.constructor.getOwnPropertyDescriptor(
                                      Navigator.prototype,
                                      'userAgent'
                                    );
                                    try {
                                      if ($___old_9c1e11e1a55003ba)
                                        ({}.constructor.defineProperty(
                                          Navigator.prototype,
                                          'userAgent',
                                          $___stub_47c01efa79e9f191.userAgent
                                        ));
                                      return function () {
                                        var r,
                                          i,
                                          o,
                                          a = F;
                                        try {
                                          a = t ? new RegExp(t, 'i') : F;
                                        } catch (n) {}
                                        return (
                                          (o =
                                            (a && a.test(n.navigator.userAgent)) ||
                                            e.isSafari(n.navigator.userAgent) ||
                                            e.isChromeOnIos(n.navigator.userAgent)
                                              ? ((r = n.document.implementation.createHTMLDocument(
                                                  'cloner-doc'
                                                )),
                                                (i = O.documentElement.namespaceURI),
                                                function (n) {
                                                  var e;
                                                  return (
                                                    n.nodeType === Node.ELEMENT_NODE
                                                      ? ((e =
                                                          n.namespaceURI !== i
                                                            ? r.createElementNS(
                                                                n.namespaceURI,
                                                                n.tagName.toLowerCase()
                                                              )
                                                            : r.createElement(n.tagName)),
                                                        Array.prototype.slice
                                                          .call(n.attributes)
                                                          .forEach(function (n) {
                                                            try {
                                                              e.setAttribute(n.name, n.value);
                                                            } catch (n) {}
                                                          }))
                                                      : (e = r.importNode(n, !1)),
                                                    e
                                                  );
                                                })
                                              : e.isIE(n.navigator.userAgent)
                                              ? ((r = n.document),
                                                function (n) {
                                                  return n.cloneNode(!1);
                                                })
                                              : ((r = n.document.implementation.createHTMLDocument(
                                                  'cloner-doc'
                                                )),
                                                function (n) {
                                                  return r.importNode(n, !1);
                                                })),
                                          { clonerDoc: r, cloneNode: o }
                                        );
                                      }.apply(this, arguments);
                                    } finally {
                                      if ($___old_9c1e11e1a55003ba)
                                        ({}.constructor.defineProperty(
                                          Navigator.prototype,
                                          'userAgent',
                                          $___old_9c1e11e1a55003ba
                                        ));
                                    }
                                  })(n, B, u.forceRenderingFixForUA),
                                  R,
                                  t,
                                  v,
                                  h.build(),
                                  T.build()
                                );
                                (this.isNodeAccepted = c),
                                  (this.createChildNodesIterator = function (n) {
                                    return new Nr(n, c);
                                  }),
                                  (this.visit = v.visit.gbBind(v)),
                                  (this.cloneNode = D.clone.gbBind(D));
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_c655e7a9585f5669)
                                ({}.constructor.defineProperty(
                                  Navigator.prototype,
                                  'userAgent',
                                  $___old_c655e7a9585f5669
                                ));
                            }
                          })(window, P, Q, K, $, Oe, Fe, L)),
                          (ae = ti(window, P, O, oe.isNodeAccepted, {
                            semiDomEnabled: L.semiDomEnabled,
                            domIE11ForceMutationObserver: L.domIE11ForceMutationObserver,
                            domTamperingDetectionEnabled: L.domTamperingDetectionEnabled,
                            domThrottle: L.domThrottleChanges,
                            domThrottleIEOnly: L.domThrottleChangesIE11Only,
                            delayDomMutationEvent: L.delayDomMutationEvent,
                            domFilterAttributes: L.domFilterAttributes,
                          })),
                          (ue = (function (n, e) {
                            for (var t = 0; t < e.length; t++)
                              if (-1 !== n.indexOf(e[t])) return !0;
                            return !1;
                          })(O.location.href, L.domPartialWhenLocationContains || [])),
                          Un.registerPlugin(
                            'domRecordingPlugin',
                            new (function (e, r, i, n, t, o, a, u, c, s, f, d) {
                              var l,
                                v,
                                h,
                                m,
                                p = new zr(
                                  ((l = ei(t)),
                                  (v = [
                                    {
                                      name: 'DOM-mutations',
                                      tracker: new Xr(P, t),
                                      providers: [
                                        Lr.gbBind(null, n.createChildNodesIterator, o, a),
                                        function (n, e, t, r, i) {
                                          var o = r.attributes ? Object.keys(r.attributes) : [];
                                          if (o && 0 < o.length) {
                                            var a,
                                              u,
                                              c,
                                              s = {};
                                            for (
                                              t &&
                                                t.removeBase64ImageDataTagNames &&
                                                0 < t.removeBase64ImageDataTagNames.length &&
                                                (c = Zr(
                                                  B.immutableSet.apply(
                                                    null,
                                                    t.removeBase64ImageDataTagNames
                                                  )
                                                )),
                                                a = 0;
                                              a < o.length;
                                              a++
                                            )
                                              (u = r.element.getAttribute(o[a])),
                                                'INPUT' === r.element.tagName && 'value' === o[a]
                                                  ? (u =
                                                      'password' === r.element.getAttribute('type')
                                                        ? V.censorValueOf(u)
                                                        : n.censor(r.element))
                                                  : e.isAttributeMasked(r.element, o[a])
                                                  ? (u = V.censorValueOf(u))
                                                  : ('style' !== o[a] && 'src' !== o[a]) ||
                                                    !c ||
                                                    ('' === (u = c(r.element, null, !0)) &&
                                                      'src' === o[a] &&
                                                      (s['gb-dataremoved'] = {
                                                        value: '',
                                                        ordinal: o.length + 1,
                                                      })),
                                                (s[o[a]] = {
                                                  value: u,
                                                  ordinal: r.attributes[o[a]],
                                                });
                                            var f = B.ensureProperty(i, 'domChanges', r.id);
                                            return (f.attributes = s), f;
                                          }
                                        }.gbBind(null, c, o, {
                                          removeBase64ImageDataTagNames:
                                            d.removeBase64ImageDataTagNames,
                                        }),
                                        function (n, e, t, r, i, o, a) {
                                          if (void 0 !== o.childListOrdinal) {
                                            if (
                                              i.isDomMasked(
                                                o.element,
                                                ee.SELF_OR_ANY_PARENT,
                                                te.OMIT
                                              )
                                            )
                                              return;
                                            for (
                                              var u, c, s, f = [], d = r(o.element);
                                              (u = d.next());

                                            )
                                              (c = e.idOf(u)),
                                                o.addedNodes && o.addedNodes[c]
                                                  ? ((s = n.cloneNode(u)),
                                                    f.push(t.tokenForClonedNode(s)))
                                                  : f.push(t.tokenForNode(u));
                                            var l = o.element.shadowRoot;
                                            l &&
                                              o.addedNodes[e.idOf(l)] &&
                                              f.push(t.tokenForClonedNode(n.cloneNode(l)));
                                            var v = B.ensureProperty(a, 'domChanges', o.id);
                                            return (
                                              (v.children = {
                                                ordinal: o.childListOrdinal,
                                                childList: f,
                                              }),
                                              v
                                            );
                                          }
                                        }.gbBind(null, n, t, l, n.createChildNodesIterator, o),
                                      ],
                                    },
                                    {
                                      name: 'property',
                                      tracker: new Gr(O, t, d.ignoredFormElements),
                                      providers: [
                                        Pr(c, { ignoredFormElement: d.ignoredFormElements }),
                                      ],
                                    },
                                  ]),
                                  d.recordCssRules &&
                                    v.push({
                                      name: 'css',
                                      tracker: new Jr(e, t),
                                      providers: [Fr],
                                    }),
                                  v),
                                  d.includeSelectorOnUpdate
                                    ? new Pt(L)
                                    : {
                                        getSelectorInfo: function () {
                                          return {};
                                        },
                                      },
                                  { tokenizationVersion: '2' }
                                ),
                                g = B.compositeFunctionBuilder()
                                  .add(
                                    function (n, e) {
                                      'INPUT' === n.tagName &&
                                        (e.value && n.setAttribute('value', e.value),
                                        e.checked && n.setAttribute('checked', ''));
                                    }.gbBind(null)
                                  )
                                  .add(
                                    ((h = V),
                                    function (n, e) {
                                      'TEXTAREA' === n.tagName &&
                                        e.firstChild &&
                                        e.value !== e.firstChild.textContent &&
                                        (n.maskContent
                                          ? (n.firstChild.textContent = h.censorValueOf(e.value))
                                          : (n.firstChild.textContent = e.value));
                                    })
                                  )
                                  .add(ni);
                              e.ShadowRoot &&
                                d.recordShadowDom &&
                                ((m = new Or(e, r, { byCtor: ['ShadowRoot'] })),
                                g.add(m.clonerHook.gbBind(m)));
                              var y = new Vr(
                                  e,
                                  O,
                                  n,
                                  new Mr({ cookieMask: d.maskCookies }),
                                  Y,
                                  g.build(),
                                  d.preciseStyleSheetCloning ? Yr : $r
                                ),
                                w = {
                                  snapshotDuration: -1,
                                  domUpdateDuration: -1,
                                  domUpdateCount: 0,
                                  domObserver: i ? i.getName() : 'NONE',
                                },
                                b = !!i;
                              function E () {
                                (R = M = !1), (A = 0);
                              }
                              function C () {
                                E(), _();
                              }
                              function T (n) {
                                if (!x) return F;
                                for (var e = 0; e < d.ajaxTriggers.length; e++)
                                  if (-1 !== n.url.indexOf(d.ajaxTriggers[e]))
                                    return n.url, void C();
                              }
                              function S (n) {
                                if (!x) return F;
                                -1 !== d.triggers.indexOf(n.selectorExpression) &&
                                  (n.selectorExpression, C());
                              }
                              function I () {
                                b &&
                                  (i.start(),
                                  !x ||
                                    M ||
                                    R ||
                                    void 0 === d.onLoadTimeoutReport ||
                                    -1 === d.onLoadTimeoutReport ||
                                    setTimeout(_, d.onLoadTimeoutReport));
                              }
                              function k () {
                                ++D % d.updateOnWsCount == 0 && r.emit('pageUpdate');
                              }
                              (d = d || {}), (f = f || function () {});
                              var x = !1,
                                M = !1,
                                R = !1,
                                A = 0,
                                N = 0,
                                D = 0,
                                _ = function () {
                                  if (!R && !M)
                                    try {
                                      b && i.start();
                                      var n =
                                        ((e = new Date()),
                                        (t = y.take(N)) &&
                                          ((w.snapshotDuration = new Date() - e),
                                          N++,
                                          r.emit('pageSnapshot:report', t),
                                          r.emit('pageSnapshot:save', t)),
                                        t);
                                      n
                                        ? (r.emit('domTrackingStarted'), p.start(), (M = !0))
                                        : (f('pageSnapshotError(' + ++A + ')', y.lastError),
                                          3 <= A && (R = !0));
                                    } catch (n) {
                                      f('startingError', n),
                                        logger.error(
                                          'error during DOM recording plugin starting. error: ' + n
                                        );
                                    }
                                  var e, t;
                                  return M;
                                };
                              (this.initialize = function (n) {
                                return (
                                  n.on('event:mousedown', S),
                                  n.on('ajax:send', T),
                                  n.on('init:loaded', I),
                                  n.on('session:new', C),
                                  -1 !== d.updateOnWsCount && new Br(e, k),
                                  d.compressionEnabled,
                                  (x = !0)
                                );
                              }),
                                (this.stats = function () {
                                  return w;
                                }),
                                (this.getDomSnapshot = function () {
                                  if (!x) return F;
                                  if (R) return F;
                                  if (!_()) return F;
                                  if (!b) return F;
                                  var n = new Date(),
                                    e = p.getSnapshot();
                                  return (
                                    (w.domUpdateDuration += new Date() - n), w.domUpdateCount++, e
                                  );
                                }),
                                (this.ensureStarted = _),
                                (this.isSemiDomActivated = function () {
                                  return !b;
                                }),
                                (this.isStarted = function () {
                                  return M;
                                }),
                                (this.reset = E),
                                (this.getNodeCloner = function () {
                                  return n;
                                }),
                                (this.getDomMasker = function () {
                                  return o;
                                }),
                                (this.getDomEncryptor = function () {
                                  return a;
                                }),
                                (this.getNodeVisitor = function () {
                                  return n;
                                }),
                                (this.consumeCapturedNodes = function (n) {
                                  return m ? m.consumeByCtor(n) : [];
                                }),
                                (this.nodeAcceptancePredicate = n.isNodeAccepted.gbBind(n)),
                                (this.getSnapshotAccumulator = function () {
                                  return p;
                                });
                            })(
                              window,
                              P,
                              ae,
                              oe,
                              Q,
                              Oe,
                              Fe,
                              0,
                              K,
                              0,
                              function (n, e) {
                                Un.saveClsDebugErrorEvent('domPlugin', e, n);
                              },
                              {
                                triggers: L.domNewPageTriggers,
                                ajaxTriggers: L.domNewPageAjaxTriggers,
                                onLoadTimeoutReport: L.domStartAfter,
                                updateOnWsCount: L.domUpdateEveryWsMsgIn,
                                compressionEnabled: L.domCompress,
                                ignoredFormElements: L.domIgnoredFormElements,
                                recordCssRules: L.domRecordCssRules,
                                maskCookies: L.maskCookies,
                                recordShadowDom: L.recordShadowDom,
                                preciseStyleSheetCloning: L.domPreciseStyleSheetCloning,
                                includeSelectorOnUpdate: L.domIncludeSelectorOnUpdate,
                                removeBase64ImageDataTagNames: L.removeBase64ImageDataTagNames,
                              }
                            )
                          )),
                        void 0 !== Un &&
                          ((ce = new Qt({}, function (n, e, t, r) {
                            t
                              ? (P.emit('removeFromStorage', { pageId: n, beaconData: e }),
                                P.emit('beacon:sent', e.sn))
                              : P.emit('beacon:failed', { sn: e.sn, status: r });
                          })),
                          (se = function (n) {
                            P.emit('handleGatewayResponse', n);
                          }),
                          (fe = vt(w, navigator, G, q.isCorsReporting(), L)),
                          (de = L.externalReporting
                            ? new (function (c, o, s, logger, f, d, l, v) {
                                var h = 0;
                                function m (n, e, t, r, i, o) {
                                  try {
                                    var a = !1;
                                    if (3 === h)
                                      return (
                                        l.stop(),
                                        void logger.error(
                                          'Stopped recording after exceeding errors limit'
                                        )
                                      );
                                    n = n || '';
                                    var u = s.createRequest(t);
                                    if (!u)
                                      return (
                                        logger.error('Failed creating request object'),
                                        h++,
                                        (a = !0),
                                        void o()
                                      );
                                    r === F && (r = v.reportMaxRetries),
                                      (u.onreadystatechange = function () {
                                        2 === u.readyState
                                          ? u.success
                                            ? (function () {
                                                f(e, i, !0);
                                                var n = u.responseContentType;
                                                n &&
                                                  -1 !== n.indexOf('application/json') &&
                                                  d(u.response),
                                                  (a = !0),
                                                  o();
                                              })()
                                            : v.reportPostRetry && r
                                            ? (r--, f(e, i, !1, u.status), m(n, e, t, r, i, o))
                                            : ((a = !0), o())
                                          : 3 === u.readyState &&
                                            (v.reportPostRetry && r
                                              ? m(n, e, t, --r, i, o)
                                              : ((a = !0), o()));
                                      }),
                                      -1 !== v.reportAbortAfter &&
                                        setTimeout(function () {
                                          2 !== u.readyState && (u.abort(), a || o());
                                        }, v.reportAbortAfter),
                                      u.send(n, c.getContentType(), v.reportCompress);
                                  } catch (n) {
                                    h++,
                                      logger.error(
                                        'Failed creating or handling request with beacon (' +
                                          e +
                                          ') to url ' +
                                          t +
                                          ': ' +
                                          n.message,
                                        n
                                      ),
                                      (a = !0),
                                      o();
                                  }
                                }
                                (this.name = 'ExternalReporter'),
                                  (this.config = { maxReportSize: v.maxPostReportSize }),
                                  (this.dispatch = function (n, e, t, r, i) {
                                    m(n, t, o.apply(e.reportURI, e, t, r), F, e.pageId, i);
                                  });
                              })(
                                fe,
                                new Bt(P, _.detectorVersion, L.reportAddUriParams),
                                window[L.externalReporterObject],
                                logger,
                                ce.onReporterMessage.gbBind(ce),
                                se,
                                Un.asStoppable(),
                                L
                              )
                            : L.reportByPost ||
                              L.domRecordEnabled ||
                              'undefined' == typeof createHttpGetReporter
                            ? new Tr(
                                fe,
                                new Bt(P, _.detectorVersion, L.reportAddUriParams),
                                Bn,
                                logger,
                                ce.onReporterMessage.gbBind(ce),
                                se,
                                L
                              )
                            : createHttpGetReporter()),
                          Un.registerPlugin(
                            'reporter',
                            new (function (t, r, n, e, i) {
                              const $___old_b037dd0d52e52610 = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'sessionStorage'
                              );
                              try {
                                if ($___old_b037dd0d52e52610)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'sessionStorage',
                                    $___stub_b317e19f866a2da7.sessionStorage
                                  ));
                                return function () {
                                  var o,
                                    a = { count: 0, flushedBytes: 0, encodingErrors: [] },
                                    u = new er(t);
                                  function c (n) {
                                    var e;
                                    o.flush(),
                                      i.reportCreateSubSessionCookie &&
                                        ((e = B.uuid()),
                                        z.set(_.cookies.sub_session, e),
                                        (n.cookie = O.cookie),
                                        t.emit('session:newSubSessionId', {
                                          pageSnapshotSN: n.seq,
                                          subSessionId: e,
                                        }));
                                  }
                                  new ar(window, t, u, a, i),
                                    (o =
                                      window !== window.top &&
                                      window.MessageChannel &&
                                      i.reportViaTopWindow
                                        ? new fr(
                                            t,
                                            function () {
                                              return Un;
                                            },
                                            new Sr(window),
                                            u,
                                            new cr(window.sessionStorage, new Ir(B.Base64)),
                                            i
                                          )
                                        : new sr(
                                            t,
                                            r,
                                            e,
                                            new Cr(P, {}, 1000),
                                            u,
                                            new $t(e, n, r, a, i),
                                            new cr(window.sessionStorage, new Ir(B.Base64)),
                                            a,
                                            i
                                          )),
                                    (this.initialize = function (n, e) {
                                      if (!E.isUndefined(i.reportURI) && 0 !== i.reportURI.length)
                                        return (
                                          i.reportByPost,
                                          r.name,
                                          i.reportCompress,
                                          r.supportsCompression,
                                          t.on('pageSnapshot:report', c),
                                          !0
                                        );
                                      console.log(
                                        "ERROR[EyeView-1401]: Detector script is missing configuration for 'reportURI'. Please add it."
                                      );
                                    }),
                                    (this.stats = function () {
                                      return a;
                                    });
                                }.apply(this, arguments);
                              } finally {
                                if ($___old_b037dd0d52e52610)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'sessionStorage',
                                    $___old_b037dd0d52e52610
                                  ));
                              }
                            })(P, fe, ce, de, L)
                          )),
                        void 0 === Un ||
                          void 0 === L ||
                          B.isMobile() ||
                          !L.domTamperingDetectionEnabled ||
                          ('undefined' == typeof MutationObserver &&
                            'undefined' == typeof WebKitMutationObserver) ||
                          Un.registerPlugin(
                            'domTamperingPlugin',
                            new (function (o, a, u, r) {
                              var i,
                                r = B.optionsWithDefaults(r, { graceTime: 500 }),
                                c = {},
                                s = 5,
                                f = 0,
                                d = !1,
                                l = !1;
                              function e () {
                                i = B.currentTimestamp();
                              }
                              var v = !1;
                              function h (n) {
                                var e = !(
                                  !O.documentElement.className.match('translated-rtl') &&
                                  !O.documentElement.className.match('translated-ltr')
                                );
                                e == !!n.target.gbTranslated || n.target.gbCheckedTrans
                                  ? e === n.target.gbTranslated && (n.target.gbCheckedTrans = F)
                                  : ((n.target.gbTranslated = e), (n.target.gbCheckedTrans = !0));
                                var t = n.target.data;
                                (d =
                                  d ||
                                  ((i = i || B.currentTimestamp()),
                                  B.currentTimestamp() - i >= r.graceTime)),
                                  !n.target.gbCheckedTrans &&
                                    (l || v) &&
                                    d &&
                                    f < s &&
                                    'characterData' === n.type &&
                                    c[u.idOf(n.target)] !== t &&
                                    n.oldValue.replace(/\s/g, '') !== t.replace(/\s/g, '') &&
                                    (++f,
                                    a.emit('domTampered', {
                                      element: n.target.parentNode,
                                      newText: t,
                                      prevText: n.oldValue,
                                    })),
                                  (l = !0);
                              }
                              function t (e) {
                                var t,
                                  n = O.implementation.createHTMLDocument('test');
                                (t = new MutationObserver(function (n) {
                                  t && t.disconnect(), 'characterData' !== n[0].type && e();
                                })).observe(n, {
                                  attributes: !1,
                                  childList: !0,
                                  characterData: !0,
                                  subtree: !0,
                                  attributeOldValue: !1,
                                  characterDataOldValue: !1,
                                }),
                                  (n.body.innerText = 'text1');
                              }
                              a.on('devToolsVisibilityChanged', function (n) {
                                v = n.value;
                              }),
                                (this.initialize = function () {
                                  function n () {
                                    function n () {
                                      f < s && (c[u.idOf(this)] = this.data);
                                    }
                                    function e () {
                                      this.nodeType === Node.TEXT_NODE &&
                                        f < s &&
                                        (c[u.idOf(this)] = this.data);
                                    }
                                    var t, r, i;
                                    (t = Dn.hookProto(o.CharacterData.prototype)),
                                      (r = Dn.hookProto(o.Text.prototype)),
                                      (i = Dn.hookProto(o.Node.prototype)),
                                      t.setHookAfter('replaceData', n),
                                      t.setHookAfter('appendData', n),
                                      t.setHookAfter('insertData', n),
                                      t.setHookAfter('deleteData', n),
                                      t.hookSetPropertyAfter('data', n),
                                      r.setHookAfter('splitText', n),
                                      i.hookSetPropertyAfter('textContent', e),
                                      i.hookSetPropertyAfter('nodeValue', e),
                                      r.setHookAfter('replaceWholeText', n),
                                      a.on('domMutation', h);
                                  }
                                  a.on('init:domready', e), !!o.chrome && !o.opr ? t(n) : n();
                                });
                            })(window, P, Q, { graceTime: L.domTamperingGraceTime })
                          ),
                        (le = window),
                        (ve = void 0 !== L && L.iframesDebugEnabled),
                        (he = le.top !== le),
                        (iframeHelper = {
                          MAX_DEPTH_THRESHOLD: 20,
                          tryGetCurrentDepth: function (n) {
                            var e = 0,
                              t = n;
                            try {
                              for (; t.parent != t && e <= this.MAX_DEPTH_THRESHOLD; )
                                (t = t.parent), e++;
                            } catch (n) {
                              return (
                                logger.error(
                                  "could not retrieve current window's depth (a CORS issue?). error:" +
                                    n
                                ),
                                -1
                              );
                            }
                            return e > this.MAX_DEPTH_THRESHOLD
                              ? (this.MAX_DEPTH_THRESHOLD, -1)
                              : e;
                          },
                          isCrossOriginFrame: function (n, e) {
                            try {
                              if (!n.contentWindow) return !0;
                              var t = n.getAttribute('src');
                              if ('about:blank' === t) return !1;
                              if (!t) return !1;
                              var r = B.extractOrigin(t);
                              return r ? e !== r : !1;
                            } catch (n) {
                              return !0;
                            }
                          },
                          isEmpty: function (n) {
                            return !(n.contentDocument && n.contentDocument.body.hasChildNodes());
                          },
                          logError: function () {
                            var n = Array.prototype.slice.call(arguments);
                            return (
                              'string' == typeof n[0] &&
                                (n[0] =
                                  '[frame.debug] ' +
                                  (he ? 'FRAME (' + le.location.href + ')' : 'TOP') +
                                  '  ' +
                                  n[0]),
                              ve ? console.log.apply(console, n) : logger.error(n)
                            );
                          },
                          logDebug: function () {
                            var n = Array.prototype.slice.call(arguments);
                            return (
                              'string' == typeof n[0] &&
                                (n[0] =
                                  '[frame.debug] ' +
                                  (he ? 'FRAME (' + le.location.href + ')' : 'TOP') +
                                  '  ' +
                                  n[0]),
                              ve && logger.log(n)
                            );
                          },
                        }),
                        (me = {
                          hidden: function (n) {
                            return !(!n || !n.style || 'none' !== n.style.display);
                          },
                        }),
                        void 0 !== Un &&
                          L.iframesRecordEnabled &&
                          ((pe = function (n) {
                            return '' + Q.idOf(n);
                          }),
                          (ge = (function (n, e, t, r) {
                            if ((r = r || {}).directChannel) return ii(n, e, t);
                            if (r.directChannelWhenUriContainer)
                              for (var i = 0; i < r.directChannelWhenUriContainer.length; i++)
                                if (
                                  0 <= n.location.href.indexOf(r.directChannelWhenUriContainer[i])
                                )
                                  return ii(n, e, t);
                            return ri(n);
                          })(window, Un, i, {
                            directChannel: L.iframesDirectChannel,
                            directChannelWhenUriContainer: L.iframesDirectChannelWhenUriContains,
                          })),
                          Un.registerPlugin(
                            'iframes',
                            (function () {
                              new vi(P, Un.blackoutManager, {
                                suspendReportingWhenLocationContains:
                                  L.iframesBlackoutWhenLocationContains,
                              });
                              var n = new hi(P),
                                e = new ci(window, ge, L.iframesParentOrigin),
                                t = new ui(window, ge),
                                r = new fi(
                                  P,
                                  function () {
                                    return Un.plugins.domRecordingPlugin;
                                  },
                                  Un.savePageUpdate.gbBind(Un),
                                  Un.blackoutManager,
                                  n,
                                  function (n) {
                                    P.emit('parentWindowInfo', n);
                                  },
                                  function (n) {
                                    P.emit('iframePortReceived', n);
                                  }
                                );
                              return new mi(
                                window,
                                P,
                                n,
                                new di(O, P, L.framesetRecordEnabled),
                                new oi(window, O, P, Q),
                                _.detectorScript
                                  ? new ai(O, L, _.detectorScript, i, {
                                      skipHidden: L.iframesSkipHidden,
                                      forceDirectChannel: 'direct' === ge.name,
                                      skipWhenLocationContains: L.iframesSkipWhenLocationContains,
                                      injectionMode: L.iframesAutoInjectMode,
                                    })
                                  : F,
                                new si(window, e, t, r, {
                                  disabled: L.iframesDisableNotifications,
                                  framesetRecordEnabled: L.framesetRecordEnabled,
                                }),
                                Un.blackoutManager,
                                new li(O, Un.page, Un.blackoutManager, e, t, pe, Un, {
                                  mscTimeout: L.iframesHandshakeTimeout,
                                  framesetRecordEnabled: L.framesetRecordEnabled,
                                }),
                                0,
                                pe,
                                (function (n, e, t) {
                                  t = t || {
                                    containerIdKey: 'containerId',
                                    parentPageIdKey: 'pageId',
                                  };
                                  var r,
                                    i,
                                    o,
                                    a = !1;
                                  function u () {
                                    a ||
                                      (o[t.containerIdKey] &&
                                        r.setExtraInfo(t.containerIdKey, o[t.containerIdKey]),
                                      o[t.parentPageIdKey] &&
                                        r.setExtraInfo(t.parentPageIdKey, o[t.parentPageIdKey]),
                                      i(),
                                      (a = !0));
                                  }
                                  return (
                                    n.on(
                                      'event:unload',
                                      function () {
                                        r && ((o = {}), u());
                                      },
                                      F,
                                      -100
                                    ),
                                    (e.documentEventHook = function (n, e) {
                                      (r = n), (i = e), o && u();
                                    }),
                                    function (n, e) {
                                      (o = { parentPageId: n, containerId: e }), r && i && u();
                                    }
                                  );
                                })(P, Un, {
                                  parentPageIdKey: at.prototype.PARENT_PAGE_ID,
                                  containerIdKey: at.prototype.CONTAINER_ID,
                                }),
                                {
                                  skipHidden: L.iframesSkipHidden,
                                  autoInject: L.iframesAutoInject,
                                }
                              );
                            })()
                          )),
                        void 0 !== Un &&
                          void 0 !== L &&
                          L.collectStruggles &&
                          Un.registerPlugin(
                            'strugglesPlugin',
                            ((ye = window),
                            (we = P),
                            (be = Q),
                            (Ee = $),
                            (Ce = X),
                            (Te = window !== window.top),
                            (xe = {}),
                            (Me = yi(be, we, bi, (Se = L))),
                            (Re = wi(ye, bi)),
                            (Ae = {
                              checkXhr: function (n) {
                                ((0 === n.status && !n.aborted) || 400 <= n.status) &&
                                  Ie({
                                    elementSelector: n.lastFocusedSelectorInfo,
                                    dataToEncode: {
                                      type: 'ajaxError',
                                      xhrStatus: n.status,
                                      url: n.url,
                                      sn: n.sn,
                                    },
                                  });
                              },
                            }),
                            (Ne = gi(ye, (Ie = bi), we, {
                              horizontalScrollbar: Se.struggleCaptureHorizontalScrollbar,
                              blankPage: !Te && Se.struggleCaptureBlankPage,
                            })),
                            Ee.setListener(Ne.handleNode),
                            {
                              initialize: function () {
                                we.on('init:loaded', Ei),
                                  we.on('event:click', ki),
                                  we.on('ajax:end', xi),
                                  Se.collectFormStruggles &&
                                    ((xe = pi(ye, be, bi, Ce, {
                                      maxFocusTime: Se.struggleMaxLongFocusTime,
                                    })),
                                    we.on('event:submit', Ci),
                                    we.on('event:keyup', Ti),
                                    we.on('event:elementChange', Si),
                                    we.on('event:unload', Ii));
                              },
                            })
                          ),
                        void 0 !== Un &&
                          window === window.top &&
                          L.devToolsDetectionEnabled &&
                          !B.isMobile() &&
                          ((De = /firefox/i.test(navigator.userAgent)
                            ? new (function (n, e) {
                                var t = !1,
                                  r = n.outerHeight,
                                  i = n.innerHeight,
                                  o = n.outerWidth,
                                  a = n.innerWidth;
                                function u () {
                                  t ||
                                    (n.outerHeight === r && 150 < n.Math.abs(n.innerHeight - i)
                                      ? (e.emit('devToolsVisibilityChanged', {
                                          value: !0,
                                          size: 'oh_' + n.outerHeight + '_ih_' + n.innerHeight,
                                        }),
                                        (t = !0))
                                      : n.outerWidth === o && 150 < n.Math.abs(n.innerWidth - a)
                                      ? (e.emit('devToolsVisibilityChanged', {
                                          value: !0,
                                          size: 'ow_' + n.outerWidth + '_iw_' + n.innerWidth,
                                        }),
                                        (t = !0))
                                      : n.outerHeight !== r
                                      ? ((r = n.outerHeight), (i = n.innerHeight))
                                      : ((o = n.outerWidth), (a = n.innerWidth)));
                                }
                                this.startDetecting = function () {
                                  e.on('window:resize', u);
                                };
                              })(window, P)
                            : new (function (e, n, t) {
                                t = t || { consoleMessage: '' };
                                var r = !1,
                                  i = e.document.createElement('div'),
                                  o = e.outerHeight,
                                  a = e.outerWidth;
                                function u (n) {
                                  r ||
                                    (n &&
                                      (e.outerHeight !== o
                                        ? ((o = e.outerHeight), 1)
                                        : e.outerWidth !== a && ((a = e.outerWidth), 1))) ||
                                    e.console.log(i);
                                }
                                (i.textContent = t.consoleMessage),
                                  Object.defineProperty(i, 'id', {
                                    get: function () {
                                      r ||
                                        ((r = !0),
                                        n.emit('devToolsVisibilityChanged', {
                                          value: !0,
                                          size:
                                            'oh_' +
                                            e.outerHeight +
                                            '_ih_' +
                                            e.innerHeight +
                                            '_ow_' +
                                            e.outerWidth +
                                            '_iw_' +
                                            e.innerWidth,
                                        }));
                                    },
                                  }),
                                  (this.startDetecting = function () {
                                    n.on('event:unload', u.gbBind(null, !1)),
                                      n.on('init:preloaded', u.gbBind(null, !1)),
                                      n.on('window:resize', u.gbBind(null, !0));
                                  });
                              })(window, P, { consoleMessage: L.devToolsDetectionMessage })),
                          Un.registerPlugin(
                            'devToolsTrackingPlugin',
                            new (function (n) {
                              n.startDetecting(), (this.initialize = function () {});
                            })(De)
                          )),
                        L.recordShadowDom &&
                          L.domRecordEnabled &&
                          window.ShadowRoot &&
                          ((_e = new Pt(L)),
                          Un.registerPlugin(
                            'shadowDomPlugin',
                            new (function (t, n, r, i, o, a, u) {
                              var c = {},
                                s = Q,
                                e = new Ri(t, r, o.getNodeVisitor());
                              r.on('shadow:rootDetected', function (n) {
                                var e = ti(t, r, n, o.nodeAcceptancePredicate, {
                                  semiDomEnabled: u.semiDomEnabled,
                                  domIE11ForceMutationObserver: u.domIE11ForceMutationObserver,
                                  domTamperingDetectionEnabled: u.domTamperingDetectionEnabled,
                                  domFilterAttributes: u.domFilterAttributes,
                                });
                                (c[s.idOf(n)] = e),
                                  o
                                    .getSnapshotAccumulator()
                                    .addBundle({
                                      name: 'property',
                                      tracker: new Gr(n, s, a, u.domIgnoredFormElements),
                                      providers: [
                                        Pr(i, { ignoredFormElement: u.domIgnoredFormElements }),
                                      ],
                                    }),
                                  e.start();
                              }),
                                r.on('shadow:rootRemoved', function (n) {
                                  var e = s.idOf(n);
                                  c[e] && (c[e].stop(), delete c[e]),
                                    o.getSnapshotAccumulator().removeBundle(n);
                                }),
                                r.on('domTrackingStarted', function () {
                                  e.startObservingShadowRoots(
                                    o.consumeCapturedNodes('ShadowRoot')
                                  );
                                }),
                                (this.initialize = function () {}),
                                (this.stats = function () {
                                  return e.stats();
                                });
                            })(window, 0, P, K, Un.plugins.domRecordingPlugin, _e, {
                              semiDomEnabled: L.semiDomEnabled,
                              domIgnoredFormElements: L.domIgnoredFormElements,
                              domIE11ForceMutationObserver: L.domIE11ForceMutationObserver,
                            })
                          )),
                        void 0 !== Un &&
                          window.performance &&
                          void 0 !== window.performance.getEntriesByType &&
                          void 0 !== window.MutationObserver &&
                          Un.registerPlugin(
                            'resourceRecorderPlugin',
                            new (function (n, e, t) {
                              const $___old_dd4afb300b1793aa = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'localStorage'
                              );
                              try {
                                if ($___old_dd4afb300b1793aa)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'localStorage',
                                    $___stub_b317e19f866a2da7.localStorage
                                  ));
                                return function () {
                                  var r,
                                    i,
                                    o,
                                    a,
                                    u = {};
                                  L.resourcesRecordEnabled &&
                                    void 0 !== n.XMLHttpRequest &&
                                    ((r = new Ni(
                                      n,
                                      new jt(n.localStorage, {
                                        keysPrefix: _.Storage.UnboundKeyPrefix,
                                      }),
                                      Ai,
                                      e,
                                      t,
                                      ((i = L.resourcesRecordAllowCors),
                                      (o = L.resourceIgnoreWhenUrlContains),
                                      function (n) {
                                        if (
                                          !B.startsWith(n, 'http') ||
                                          (!i && B.extractOrigin(n) !== window.location.origin)
                                        )
                                          return !0;
                                        for (var e = 0; e < o.length; e++)
                                          if (-1 !== n.indexOf(o[e])) return !0;
                                        return !1;
                                      }),
                                      {
                                        electProbability: L.resourcesRecordChance,
                                        electAmount: L.resourcesRecordCount,
                                        maxPendingResources: 5,
                                        resourceRecordCssOnly: L.resourceRecordCssOnly,
                                      },
                                      u
                                    )),
                                    e.on('init:loaded', function () {
                                      setTimeout(r.fetchResources.gbBind(r), 5000);
                                    }),
                                    e.on('event:unload', r.electResources.gbBind(r))),
                                    L.resourceTimingRecordEnabled &&
                                      pt(
                                        L.resourceTimingRecordEnabledByChance,
                                        W,
                                        'performanceRecord'
                                      ) &&
                                      ((a = new Di(n, P, [
                                        {
                                          type: 'resource',
                                          properties: [
                                            'name',
                                            'startTime',
                                            'requestStart',
                                            'responseStart',
                                            'responseEnd',
                                            'duration',
                                            'decodedBodySize',
                                            'async',
                                          ],
                                          filterBy: 'initiatorType',
                                          validFilterValues: B.immutableSet(
                                            'link',
                                            'css',
                                            'font',
                                            'img',
                                            'input',
                                            'script'
                                          ),
                                        },
                                      ])),
                                      e.on('init:loaded', a.reportMeasurements.gbBind(a))),
                                    (this.initialize = function () {}),
                                    (this.startRecordingAll = function () {
                                      r
                                        ? (console.log('Entering full resources recording mode.'),
                                          r.recordAllResources())
                                        : console.log('Please allow resource recording first.');
                                    }),
                                    (this.stopRecordingAll = function () {
                                      r
                                        ? (console.log('Exiting full resources recording mode.'),
                                          r.stopRecordAllResources())
                                        : console.log('Please allow resource recording first.');
                                    }),
                                    (this.stats = function () {
                                      return u;
                                    });
                                }.apply(this, arguments);
                              } finally {
                                if ($___old_dd4afb300b1793aa)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'localStorage',
                                    $___old_dd4afb300b1793aa
                                  ));
                              }
                            })(window, P, new Ir(B.Base64))
                          ),
                        L.reportValidationErrors &&
                          Un.plugins.domRecordingPlugin &&
                          Un.registerPlugin(
                            'formValidationPlugin',
                            new (function (n, t, r, i, o) {
                              t.on('init:loaded', function () {
                                'undefined' != typeof jQuery &&
                                  void 0 !== jQuery.validator &&
                                  new Oi(t).intercept();
                              }),
                                t.on('init:preloaded', function () {
                                  var e;
                                  o.domFormValidationTracking &&
                                    ((e = new _i(n, t, B, r, i, {
                                      redComponentMin: o.redComponentMin,
                                      redComponentDelta: o.redComponentDelta,
                                      submitIds: o.submitIds,
                                      allowFormLevel: o.allowFormLevel,
                                      considerBG: o.considerBG,
                                      additionalTagNames: o.additionalTagNames,
                                    })),
                                    t.on('event:mousedown', function (n) {
                                      e.intercept(n.element);
                                    }),
                                    t.on('element:focus', function (n) {
                                      e.intercept(n);
                                    }));
                                }),
                                (this.initialize = function () {});
                            })(window, P, Q, Un.plugins.domRecordingPlugin.getNodeVisitor(), {
                              domFormValidationTracking: L.domFormValidationTracking,
                              redComponentMin: L.domFormValidationRedComponentMin,
                              redComponentDelta: L.domFormValidationRedComponentDelta,
                              submitIds: L.domFormValidationSubmissionIds,
                              allowFormLevel: L.domFormViolationsAllowFormLevel,
                              considerBG: L.domFormValidationConsiderBG,
                              additionalTagNames: L.domFormValidationAdditionalTagNames,
                            })
                          ),
                        L.clientAttributesEnabled &&
                          void 0 !== Un &&
                          ((Oe = (Oe =
                            Un.plugins.domRecordingPlugin &&
                            Un.plugins.domRecordingPlugin.getDomMasker()) || {
                            isDomMasked: function () {
                              return !1;
                            },
                          }),
                          (Fe = (Fe =
                            Un.plugins.domRecordingPlugin &&
                            Un.plugins.domRecordingPlugin.getDomEncryptor()) || {
                            isDomEncrypted: function () {
                              return !1;
                            },
                          }),
                          Un.registerPlugin(
                            'attributePlugin',
                            new (function (n, e) {
                              n.on('newRemoteConfig', function (n) {
                                n.attributeRules && e.processRules(n.attributeRules);
                              }),
                                (this.initialize = function () {}),
                                (this.stats = function () {
                                  return e.getStats();
                                }),
                                (this.evaluateAttributes = function () {
                                  e.evaluateAttributes();
                                });
                            })(
                              P,
                              new (function (f, d, i, o, a, l) {
                                var v = {},
                                  h = [],
                                  u = [
                                    'name',
                                    'pageUrl',
                                    'selector',
                                    'accessorMethod',
                                    'accessor',
                                  ],
                                  e = !1,
                                  m = {
                                    masked: 0,
                                    reported: 0,
                                    configured: 0,
                                    configurationLastUpdatedAt: 0,
                                    badRules: 0,
                                    evalRoundsCount: 0,
                                    evalDurationTotalMsc: 0,
                                    evalDurationAverageMsc: 0,
                                    reportsByRule: {},
                                    rulesList: [],
                                  };
                                function t (n) {
                                  for (var e, t = 0; t < n.length; t++)
                                    (e = (function (n) {
                                      for (var e = 0; e < u.length; e++) if (!n[u[e]]) return;
                                      if (a[n.accessorMethod] && o.isValidSelector(n.selector)) {
                                        var t,
                                          r = n.pageUrl;
                                        n.pageHash &&
                                          (r +=
                                            ('#' === n.pageHash.charAt(0) ? '' : '#') +
                                            n.pageHash);
                                        try {
                                          t = new RegExp('^' + r.split('*').join('.*') + '$');
                                        } catch (n) {
                                          return void logger.error(
                                            'Exception occurred during parsing regular expression. Error: ' +
                                              n.message,
                                            n
                                          );
                                        }
                                        return (
                                          (n.selector = n.selector.replace(/\s*>\s*/g, '>')),
                                          new i(n, o, a, t)
                                        );
                                      }
                                    })(n[t])) && h.push(e);
                                  (m.configured = n.length), (m.badRules = n.length - h.length);
                                }
                                function c (n, e) {
                                  try {
                                    for (
                                      var t, r = f.location.href, i = {}, o = 0;
                                      o < h.length;
                                      o++
                                    ) {
                                      var a,
                                        u = Date.now(),
                                        c = h[o].evaluate(
                                          n,
                                          r,
                                          e,
                                          i,
                                          (function (n) {
                                            var e;
                                            return function () {
                                              return (e = e || X.getSelectorInfo(n, !1).selector);
                                            };
                                          })(n)
                                        ),
                                        s = Date.now();
                                      (m.evalDurationTotalMsc += s - u),
                                        m.evalRoundsCount++,
                                        (m.evalDurationAverageMsc =
                                          m.evalDurationTotalMsc / m.evalRoundsCount),
                                        (t = h[o].getRuleName()),
                                        c &&
                                          c.val &&
                                          v[t] !== c.val &&
                                          (c.isMasked()
                                            ? m.masked++
                                            : ((a =
                                                h[o].getRuleMaxLength() ||
                                                l.clientAttributeMaxLength),
                                              d.emit('clientAttribute', {
                                                name: t,
                                                val: c.val.substring(0, a),
                                              }),
                                              (m.reportsByRule[t] = (m.reportsByRule[t] || 0) + 1),
                                              m.reported++),
                                          (v[t] = c.val));
                                    }
                                  } catch (n) {
                                    logger.error(
                                      'Exception occurred during rule evaluation. Error: ' +
                                        n.message,
                                      n
                                    );
                                  }
                                }
                                d.on('domMutation', function (n) {
                                  var e = 'characterData' === n.type,
                                    t = !e && 'attributes' === n.type,
                                    r = e ? n.target.parentNode : n.target;
                                  e ||
                                    'childList' !== n.type ||
                                    (e =
                                      1 === n.addedNodes.length &&
                                      n.addedNodes[0].nodeType === Node.TEXT_NODE),
                                    c(r, e || t);
                                }),
                                  d.on('init:loaded', function () {
                                    c(f.document, !1), (e = !0);
                                  }),
                                  (this.processRules = function (n) {
                                    (v = {}),
                                      (m.configurationLastUpdatedAt = B.currentTimestamp()),
                                      B.assign(m.rulesList, n),
                                      t(n),
                                      e && c(f.document, !1);
                                  }),
                                  (this.getStats = function () {
                                    return m;
                                  }),
                                  (this.evaluateAttributes = function () {
                                    c(f.document, !1);
                                  });
                              })(
                                window,
                                P,
                                Vi,
                                ((qe = window.document),
                                (We = qe.createElement('div')),
                                (Xe =
                                  Element.prototype.matches ||
                                  Element.prototype.msMatchesSelector ||
                                  function () {
                                    return !1;
                                  }),
                                (ze = /([^>]*):eq\((\d+)\)/gi),
                                (Ge = function (n) {
                                  for (var e, t = [], r = 0, i = ze.exec(n); null !== i; )
                                    i.index &&
                                      (e = Bi(n.substring(r, i.index))) &&
                                      t.push({ selector: e, eqIndex: -1 }),
                                      t.push({ selector: Bi(i[1]), eqIndex: parseInt(i[2]) }),
                                      (r = i.index + i[0].length),
                                      (i = ze.exec(n));
                                  return (
                                    r < n.length &&
                                      (e = Bi(n.substring(r))) &&
                                      t.push({ selector: e, eqIndex: -1 }),
                                    t
                                  );
                                }),
                                {
                                  querySelector: function (n, e) {
                                    var t,
                                      r,
                                      i,
                                      o = Ge(e);
                                    return (
                                      (r = e),
                                      (i = o),
                                      (t = n).nodeType === Node.ELEMENT_NODE &&
                                      (1 === i.length && -1 === i[0].eqIndex
                                        ? Xe.call(t, r)
                                        : -1 !== Hi(B.getRootNode(t), i).indexOf(t))
                                        ? n
                                        : Ui(n, o, !0)[0] || null
                                    );
                                  },
                                  matches: function (n, e) {
                                    var t = Ge(e);
                                    return 1 === t.length && -1 === t[0].eqIndex
                                      ? Xe.call(n, e)
                                      : -1 !== Hi(n.ownerDocument, t).indexOf(n);
                                  },
                                  isValidSelector: function (n) {
                                    if (!n) return !1;
                                    try {
                                      for (var e = Ge(n), t = 0; t < e.length; t++)
                                        ji(We, e[0], !0, e.length, !0);
                                      return 0 < e.length;
                                    } catch (n) {
                                      return !1;
                                    }
                                  },
                                }),
                                ((Le = Oe),
                                (Pe = Fe),
                                (Be = K),
                                (je = {
                                  domMaskedAttributes: L.domMaskedAttributes,
                                  domMaskAttributesByTag: L.domMaskAttributesByTag,
                                  domMaskIgnoreAttribute: L.domMaskIgnoreAttribute,
                                  valueMaskIgnoreAttribute: L.valueMaskIgnoreAttribute,
                                }),
                                (Ue = B.immutableSet.apply(null, je.domMaskedAttributes)),
                                (He = B.immutableSet.apply(null, je.domMaskAttributesByTag)),
                                (Ve = je.domMaskIgnoreAttribute),
                                {
                                  attribute: function (n, e) {
                                    return {
                                      accessor: e,
                                      elem: n,
                                      val: n.getAttribute && n.getAttribute(e),
                                      isMasked: Fi,
                                    };
                                  },
                                  property: function (n, e) {
                                    return {
                                      accessor: e,
                                      elem: n,
                                      val: '' + (n[e] || ''),
                                      isMasked: Li,
                                    };
                                  },
                                  constant: function (n, e) {
                                    return { elem: n, val: e, isMasked: Pi };
                                  },
                                }),
                                { clientAttributeMaxLength: L.clientAttributeMaxLength }
                              )
                            )
                          )),
                        (Vi.prototype.matchPattern = function (n) {
                          return this._urlRegexp.test(n);
                        }),
                        (Vi.prototype.getRuleName = function () {
                          return this._rule.name;
                        }),
                        (Vi.prototype.getRuleMaxLength = function () {
                          return this._rule.maxLength;
                        }),
                        (Vi.prototype.evaluate = function (n, e, t, r, i) {
                          if (this.matchPattern(e)) {
                            var o = r[this._rule.selector];
                            if (
                              (o ||
                                (t
                                  ? this._elementResolver.matches(n, this._rule.selector) &&
                                    (o = n)
                                  : (o = this._elementResolver.querySelector(
                                      n,
                                      this._rule.selector
                                    ))),
                              !o && this._isHierarchical)
                            ) {
                              var a = i();
                              if (B.startsWith(this._rule.selector, a)) {
                                var u = this._rule.selector.substring(a.length + 1);
                                if (u)
                                  try {
                                    t
                                      ? this._elementResolver.matches(n, u) && (o = n)
                                      : (o = this._elementResolver.querySelector(n, u));
                                  } catch (n) {}
                              }
                            }
                            if (o)
                              return (
                                (r[this._rule.selector] = o),
                                this._accessors[this._rule.accessorMethod](o, this._rule.accessor)
                              );
                          }
                        }),
                        void 0 !== Un &&
                          Un.registerPlugin(
                            'gatewayPlugin',
                            new (function (n, i) {
                              n.on('handleGatewayResponse', function (n) {
                                var e;
                                try {
                                  e = JSON.parse(n);
                                } catch (n) {
                                  return void logger.error(
                                    'Failed parsing JSON of response: ' + n.message,
                                    n
                                  );
                                }
                                var t = e.appId;
                                for (var r in e)
                                  e.hasOwnProperty(r) && i[r] && i[r].handle(e[r], t);
                              }),
                                (this.initialize = function () {});
                            })(P, {
                              configuration: new (function (t, r, i) {
                                var o;
                                t.on('init:preloaded', function () {
                                  (o =
                                    (function () {
                                      var n,
                                        e = i.get('app.conf');
                                      if (e)
                                        try {
                                          n = r.decode(e);
                                        } catch (n) {
                                          logger.error(
                                            'Failed parsing JSON for configuration: ' + n.message,
                                            n
                                          );
                                        }
                                      return n;
                                    })() || {}).configuration &&
                                    t.emit('newRemoteConfig', o.configuration);
                                }),
                                  (this.handle = function (n, e) {
                                    o &&
                                      ((o.configuration && o.configuration.hash !== n.hash) ||
                                        o.appId !== e) &&
                                      (i.set('app.conf', r.encode({ configuration: n, appId: e })),
                                      (o.configuration = n),
                                      (o.appId = e),
                                      n && t.emit('newRemoteConfig', n));
                                  });
                              })(
                                P,
                                new Ir(B.Base64),
                                new jt(window.localStorage, {
                                  keysPrefix: _.Storage.UnboundKeyPrefix,
                                })
                              ),
                              aid:
                                L.reportPreferSendBeaconAPI && At.isSupported()
                                  ? { handle: function () {} }
                                  : new qi(P, window.sessionStorage),
                              commands: new (function () {
                                this.handle = function (n, e) {};
                              })(),
                            })
                          ),
                        (qi.KEY_NAME = _.Storage.BoundKeyPrefix + 'aid'),
                        (n[i] =
                          ((Ke = (Je = Un).asStoppable()),
                          (Qe = P),
                          (Ye = L.debugMode),
                          ($e = [
                            'config',
                            'page',
                            'plugins',
                            'blackoutManager',
                            'version',
                            'triggerMessage',
                            'sessionId',
                            'visitorId',
                          ]),
                          (Ze = B.shallowExtend(Ye ? Je : {}, {
                            triggerCustomEvent: function (n, e, t) {
                              n &&
                                'string' == typeof n &&
                                Qe.emit('customEvent', { name: '' + n, val: '' + e, domEl: t });
                            },
                            triggerCustomEventMap: function (n, e, t) {
                              n &&
                                'string' == typeof n &&
                                e &&
                                'object' == typeof e &&
                                0 !== Object.keys(e).length &&
                                Qe.emit('customMapEvent', { name: '' + n, val: e, domEl: t });
                            },
                            trigger3rdPartyMap: function (n) {
                              Qe.emit('api:captureObject', n);
                            },
                            isRecording: function () {
                              return !(Ke && Ke.isStopped());
                            },
                            startRecording: function () {
                              Ke && Ke.start();
                            },
                            stopRecording: function () {
                              Ke && Ke.stop();
                            },
                            invalidateSession: function () {
                              Qe.emit('invalidateSession'), zi(Ze);
                            },
                            flush: function () {
                              Qe.emit('forceFlush'), Qe.emit('iFramesForceFlush');
                            },
                          })),
                          Qe.on('init:loaded', zi.gbBind(null, Ze)),
                          zi(Ze))),
                        (n.Zone && n.Zone.root && 'function' == typeof n.Zone.root.wrap
                          ? n.Zone.root.wrap(Un.initialize)
                          : Un.initialize
                        ).call(Un)));
                }.apply(this, arguments);
              } finally {
                if ($___old_8948ef26c7fb32ac)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_8948ef26c7fb32ac
                  ));
                if ($___old_a4d2612577a9fc6d)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_a4d2612577a9fc6d
                  ));
                if ($___old_ae2a9756a010f92d)
                  ({}.constructor.defineProperty(
                    window,
                    'sessionStorage',
                    $___old_ae2a9756a010f92d
                  ));
                if ($___old_f446a7a46c890922)
                  ({}.constructor.defineProperty(window, 'performance', $___old_f446a7a46c890922));
              }
            })(
              '_detector',
              'undefined' != typeof window ? window : self,
              'undefined' == typeof window,
              'undefined' != typeof document ? document : void 0,
              '6.3.108B148'
            );
        }
      },
      3378264,
      596634
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var tntMutex = 1,
          recsMutex = 1;
        window.tntClick = function (mboxSeen, tntvar, mboxClick) {
          if (tntMutex) {
            tntMutex = 0;
            if (typeof s_dell !== 'undefined' && typeof s_dell.tl === 'function') {
              if (mboxSeen && mboxSeen.length > 0) {
                s_dell.prop16 = mboxSeen;
                s_dell.linkTrackVars = s_dell.apl(s_dell.linkTrackVars, 'prop16', ',', 2);
              }
              if (mboxClick && mboxClick.length > 0) {
                s_dell.eVar120 = mboxClick;
                s_dell.linkTrackVars = s_dell.apl(s_dell.linkTrackVars, 'eVar120', ',', 2);
              }
              s_dell.tl(true, 'o', tntvar);
            }
          }
        };
        window.recsClick = function (mboxClick, tntvar) {
          if (recsMutex) {
            recsMutex = 0;
            if (typeof s_dell !== 'undefined' && typeof s_dell.tl === 'function') {
              s_dell.eVar85 = mboxClick;
              s_dell.linkTrackVars = s_dell.apl(s_dell.linkTrackVars, 'eVar85', ',', 2);
              s_dell.tl(true, 'o', tntvar);
            }
          }
        };
      },
      2759454,
      456010
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var partition = 'www41';
        var projectGUID = '1de0049e-b22b-4d6a-8646-a6e5dca6106f';
        window.ClickTalePIISelector =
          'textarea,input[type="text"]:not([class*="search"]),input[type="hidden"],input[type="tel"],input[type="email"],input[type="password"],.globalnav-account-data,.account-info-data,.employee-name,#account-data-employee-name';
        if (!window.clickTaleTagInjected)
          !(function (d, t, u) {
            clickTaleTagInjected = true;
            function injectTag () {
              var ns = d.createElementNS;
              var a = ns ? ns.call(d, 'http://www.w3.org/1999/xhtml', t) : d.createElement(t),
                s = d.getElementsByTagName(t)[0];
              a.async = true;
              a.crossOrigin = 'anonymous';
              a.type = 'text/javascript';
              a.src = u;
              s.parentNode.insertBefore(a, s);
            }
            if (d.readyState != 'loading') injectTag();
            else
              d.addEventListener('DOMContentLoaded', function () {
                setTimeout(injectTag, 0);
              });
          })(
            document,
            'script',
            'https://cdnssl.clicktale.net/' + partition + '/ptc/' + projectGUID + '.js'
          );
      },
      3132064,
      585723
    );
  })();
}
