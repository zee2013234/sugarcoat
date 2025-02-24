var mid,
  adobe_mc,
  href,
  detm_last_link_info,
  _3rdPartyChat,
  e,
  disableAudienceManager,
  isIE,
  DataMappingInterface,
  detm_tag_notification_key,
  legacyModeKey,
  satelliteDetector,
  scriptExecutor,
  filesadded,
  monecontwatched,
  loadAdsFile,
  injectHtmlTag,
  executeMonetizationTagInjection,
  injectMonetization,
  iterateANConfigObj,
  findAccurateConfig,
  detmScriptLoaderConfig,
  detmScriptLoader;
{
  const $___stub_5e1b81c00d598b73 = {};
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
  })($___stub_5e1b81c00d598b73);
  const $___stub_3ac875f7196a9c3f = {};
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
  })($___stub_3ac875f7196a9c3f);
  const $___stub_93ef30bcc5fe9986 = {};
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
  })($___stub_93ef30bcc5fe9986);
  const $___old_1b9e1c4cf7e50f38 = {}.constructor.getOwnPropertyDescriptor(
      window,
      'sessionStorage'
    ),
    $___old_c3a820a494fbb380 = {}.constructor.getOwnPropertyDescriptor(
      Navigator.prototype,
      'userAgent'
    );
  try {
    if ($___old_1b9e1c4cf7e50f38)
      ({}.constructor.defineProperty(
        window,
        'sessionStorage',
        $___stub_3ac875f7196a9c3f.sessionStorage
      ));
    if ($___old_c3a820a494fbb380)
      ({}.constructor.defineProperty(
        Navigator.prototype,
        'userAgent',
        $___stub_93ef30bcc5fe9986.userAgent
      ));
    (function () {
      _3rdPartyChat = $___var_572d86235e9ce1d9;
      ({}.constructor.defineProperty(_3rdPartyChat, 'name', {
        configurable: true,
        enumerable: false,
        value: '_3rdPartyChat',
        writable: false,
      }));
      isIE = $___var_8ddd1289f2af6f9e;
      ({}.constructor.defineProperty(isIE, 'name', {
        configurable: true,
        enumerable: false,
        value: 'isIE',
        writable: false,
      }));
      satelliteDetector = $___var_68daac195abadebb;
      ({}.constructor.defineProperty(satelliteDetector, 'name', {
        configurable: true,
        enumerable: false,
        value: 'satelliteDetector',
        writable: false,
      }));
      scriptExecutor = $___var_4d2cc039cb985231;
      ({}.constructor.defineProperty(scriptExecutor, 'name', {
        configurable: true,
        enumerable: false,
        value: 'scriptExecutor',
        writable: false,
      }));
      loadAdsFile = $___var_866d6902431cb2ac;
      ({}.constructor.defineProperty(loadAdsFile, 'name', {
        configurable: true,
        enumerable: false,
        value: 'loadAdsFile',
        writable: false,
      }));
      injectHtmlTag = $___var_663b07ec2e494b27;
      ({}.constructor.defineProperty(injectHtmlTag, 'name', {
        configurable: true,
        enumerable: false,
        value: 'injectHtmlTag',
        writable: false,
      }));
      executeMonetizationTagInjection = $___var_021df8902f4f24cd;
      ({}.constructor.defineProperty(executeMonetizationTagInjection, 'name', {
        configurable: true,
        enumerable: false,
        value: 'executeMonetizationTagInjection',
        writable: false,
      }));
      injectMonetization = $___var_82c4bddb4d9eaca4;
      ({}.constructor.defineProperty(injectMonetization, 'name', {
        configurable: true,
        enumerable: false,
        value: 'injectMonetization',
        writable: false,
      }));
      iterateANConfigObj = $___var_2c5f16a8ed3c1cf9;
      ({}.constructor.defineProperty(iterateANConfigObj, 'name', {
        configurable: true,
        enumerable: false,
        value: 'iterateANConfigObj',
        writable: false,
      }));
      findAccurateConfig = $___var_878bb1b92628ac49;
      ({}.constructor.defineProperty(findAccurateConfig, 'name', {
        configurable: true,
        enumerable: false,
        value: 'findAccurateConfig',
        writable: false,
      }));
      detmScriptLoader = $___var_db5690196b4c0d8e;
      ({}.constructor.defineProperty(detmScriptLoader, 'name', {
        configurable: true,
        enumerable: false,
        value: 'detmScriptLoader',
        writable: false,
      }));
      detmScriptLoader.component = {
        UNKNOWN: { ordinal: 0 },
        GOLDENEYE: {
          ordinal: 1,
          launch: 'static',
          restrictions: 'target',
          forceasync: 'goldeneye',
        },
        ADOBETARGET: {
          ordinal: 2,
          launch: 'static',
          restrictions: 'target',
          forceasync: 'adobetarget',
        },
        VIPR: { ordinal: 3, launch: 'dynamic' },
        QUANTUM: { ordinal: 4, launch: 'dynamic' },
        UC: { ordinal: 5, launch: 'dynamic', legacy: !1 },
        DATAMANAGER: {
          ordinal: 6,
          launch: 'dynamic',
          trigger: 'script.dataset.trigger',
          legacy: !0,
        },
        DATADEFINITION: {
          ordinal: 7,
          launch: 'dynamic',
          trigger: 'script.dataset.trigger',
          legacy: !0,
        },
        SATELLITELIB: {
          ordinal: 8,
          launch: 'dynamic',
          trigger: 'script.dataset.trigger.dtm',
          satellite: !0,
        },
        DETM_ADOBE: {
          ordinal: 9,
          launch: 'dynamic',
          trigger: 'script.dataset.trigger',
          legacy: !0,
        },
        THIRD_PARTY: { ordinal: 10, launch: 'dynamic' },
        ENGAGE: { ordinal: 11, launch: 'dynamic' },
      };
      var $___var_4ce5d8e55f787680 = window.location.href.match('[&|?]mid=([^&]*)') || '',
        $___var_dc5030a979b231ab = window.location.href.match('[&|?]adobe_mc=([^&]*)') || '',
        $___var_93f5a4c9fd006ecc = document.location.href;
      mid = $___var_4ce5d8e55f787680;
      adobe_mc = $___var_dc5030a979b231ab;
      href = $___var_93f5a4c9fd006ecc;
      if ('' !== mid && '' == adobe_mc) {
        var analytics_app_visitor_id = mid[1],
          ts = Math.round(new Date().getTime() / 1000);
        if (history.pushState) {
          if (href.indexOf('?') > -1)
            var newurl =
              window.location.href +
              '&adobe_mc=MCMID=' +
              analytics_app_visitor_id +
              '|MCORGID=55633F7A534535110A490D44@AdobeOrg|TS=' +
              ts;
          else
            var newurl =
              window.location.href +
              '?adobe_mc=MCMID=' +
              analytics_app_visitor_id +
              '|MCORGID=55633F7A534535110A490D44@AdobeOrg|TS=' +
              ts;
          window.history.pushState({ path: newurl }, '', newurl);
        }
      }
      var $___var_6f2f9459ce66df2d = { element: null };
      detm_last_link_info = $___var_6f2f9459ce66df2d;
      function $___var_572d86235e9ce1d9 () {
        (this.transport = null), (this.anf = null), (this.data = []);
        var $me = this,
          msg = 'TC_ANF_NOTIFY',
          canonicals_of_interest = [
            'page.attributes.eligibleServices',
            'page.attributes.integratedOfferPromoIndicator',
            'page.attributes.productType',
            'page.category.pageOwnership',
            'page.pageInfo.flowCode',
            'page.pageInfo.referralFlow',
          ];
        this.initialize = function (ddo) {
          (this.transport = ddo),
            (this.anf = AnalyticsNotificationFramework.create(this.transport)),
            this.transport.registerForEvents(
              this.anf,
              msg,
              'pageLoad',
              void 0,
              canonicals_of_interest
            ),
            window.addEventListener(msg, function (e) {
              $me.data.push(e.detail.data);
            }),
            this.anf.listen(),
            (this.getRequestData = function () {
              return this.anf.listen(!1), this.data;
            });
        };
      }
      document.addEventListener('click', function (event) {
        detm_last_link_info.element = event.target;
      }),
        (window.chatAnalytics = new _3rdPartyChat()),
        (detmScriptLoader.getMCMID = function () {
          var value = '',
            idx = document.cookie.indexOf('AMCV_');
          idx > -1 &&
            ((idx = (value = document.cookie.substring(idx)).indexOf(';')),
            (value = value.substring(0, idx)),
            (idx = (value = decodeURIComponent(value)).indexOf('|MCMID|')),
            (idx = (value = value.substring(idx + '|MCMID|'.length)).indexOf('|')),
            (value = value.substring(0, idx)));
          return value;
        }),
        (detmScriptLoader.isABS = function () {
          var poUrl = document.location.pathname,
            poDomain = document.location.host;
          return (
            (void 0 !== poUrl &&
              void 0 !== poDomain &&
              (poUrl.indexOf('/ebiz/') > -1 ||
                poUrl.indexOf('/business/') > -1 ||
                poUrl.indexOf('/businesscare/') > -1 ||
                poUrl.indexOf('/clouduser/') > -1 ||
                poUrl.indexOf('/businesscare-ebill') > -1 ||
                poUrl.indexOf('/businessebill/') > -1 ||
                poUrl.indexOf('/businesssupport/') > -1 ||
                poUrl.indexOf('/premiercare') > -1 ||
                poUrl.indexOf('/icamprodilmportal') > -1 ||
                poUrl.indexOf('/firstnet') > -1 ||
                poUrl.indexOf('/directv-for-business') > -1 ||
                poDomain.indexOf('apimarket') > -1 ||
                poDomain.indexOf('dev.kandy') > -1 ||
                (poDomain.indexOf('localhost') > -1 &&
                  null != sessionStorage.getItem('appName') &&
                  'ABCA' === sessionStorage.getItem('appName')) ||
                poDomain.indexOf('iotca.org') > -1 ||
                poDomain.indexOf('marketplace.att.com') > -1 ||
                poDomain.indexOf('att.fleetcomplete.com') > -1 ||
                poDomain.indexOf('businessdigital.att.com') > -1 ||
                poDomain.indexOf('businessdigital.web.att.com') > -1 ||
                poDomain.indexOf('www.business.att.com') > -1 ||
                poDomain.indexOf('firstnet.att.com') > -1 ||
                poDomain.indexOf('bizcircle.att.com') > -1 ||
                poDomain.indexOf('marketing.att.com') > -1 ||
                poDomain.indexOf('networkingexchangeblog.att.com') > -1 ||
                poDomain.indexOf('stagingneblog.att.com') > -1 ||
                poDomain.indexOf('devneblog.att.com') > -1 ||
                poDomain.indexOf('resources.att.com') > -1 ||
                poDomain.indexOf('www.corp.att.com') > -1 ||
                poDomain.indexOf('www.businessdirect.att.com') > -1 ||
                poDomain.indexOf('obt.bus.att.com') > -1 ||
                poDomain.indexOf('marketing.web.att.com') > -1 ||
                poDomain.indexOf('marketingtest.web.att.com') > -1 ||
                poDomain.indexOf('marketingprod.web.att.com') > -1 ||
                poDomain.indexOf('thesummit.att.com') > -1 ||
                poDomain.indexOf('asecare.att.com') > -1 ||
                poDomain.indexOf('epttapi.att.com') > -1 ||
                (poDomain.indexOf('wireless.att.com') > -1 &&
                  poUrl.indexOf('/businesscenter') > -1) ||
                poDomain.indexOf('digital.att.com') > -1 ||
                poDomain.indexOf('firstnet') > -1 ||
                poDomain.indexOf('icam.att.com') > -1 ||
                poDomain.indexOf('wipbusinesssite.aldc.att.com') > -1 ||
                poDomain.indexOf('incmgt.stage.att.com') > -1 ||
                poDomain.indexOf('smallbusiness.att.com') > -1 ||
                poDomain.indexOf('aem-business.stage.att.com') > -1 ||
                poDomain.indexOf('aem-business.att.com') > -1 ||
                poDomain.indexOf('bizsummit.att.com') > -1 ||
                poDomain.indexOf('test-www.wireless.att.com') > -1 ||
                poDomain.indexOf('www.usa.att.com') > -1 ||
                poDomain.indexOf('bcontent.stage.att.com') > -1 ||
                poDomain.indexOf('bcontent.att.com') > -1 ||
                poDomain.indexOf('aem-wipbusiness.test.att.com') > -1 ||
                poDomain.indexOf('business-preview.att.com') > -1 ||
                poDomain.indexOf('serviceguide.att.com') > -1 ||
                poDomain.indexOf('aem-prodauthor.web.att.com') > -1)) ||
            poUrl.indexOf('/collaborateonline/') > -1 ||
            poDomain.indexOf('dmp.att.com') > -1 ||
            poDomain.indexOf('bizconsole.stage.att.com') > -1 ||
            (poDomain.indexOf('wireless.att.com') > -1 &&
              poUrl.indexOf('/businessconsole') > -1) ||
            poDomain.indexOf('aem-author.dev.att.com') > -1 ||
            poDomain.indexOf('aem-author.stage.att.com') > -1 ||
            poDomain.indexOf('aem-business.dev.att.com') > -1 ||
            poDomain.indexOf('aem-business.test-e.att.com') > -1 ||
            poDomain.indexOf('aem-wipauthor.stage.att.com') > -1 ||
            poDomain.indexOf('alienvault.com') > -1 ||
            poDomain.indexOf('cybersecurity.att.com') > -1 ||
            poUrl.indexOf('/cybersecurity/') > -1
          );
        }),
        (detmScriptLoader.isXandR = function () {
          var poUrl = document.location.pathname,
            poDomain = document.location.host;
          return (
            void 0 !== poUrl &&
            void 0 !== poDomain &&
            (poDomain.indexOf('programs.thekernorg.com') > -1 ||
              poDomain.indexOf('att.net') > -1 ||
              poDomain.indexOf('lsreg.att.net') > -1 ||
              poDomain.indexOf('attreg.att.net') > -1 ||
              poDomain.indexOf('uverse.com') > -1 ||
              poDomain.indexOf('more.att.com') > -1 ||
              poDomain.indexOf('watch.att.com') > -1 ||
              poDomain.indexOf('experience.att.com') > -1 ||
              poDomain.indexOf('audience.att.com') > -1 ||
              poDomain.indexOf('audiencenetwork.att.com') > -1)
          );
        }),
        (detmScriptLoader.isTimeForMode4 = function () {
          var istimeformode4 = !0,
            month = new Date().getUTCMonth() + 1,
            day = new Date().getUTCDate(),
            hour = new Date().getUTCHours();
          new Date().getUTCMinutes();
          return (
            ((11 == month && day > 4 && day < 9) || (11 == month && 9 == day && hour < 8)) &&
              (istimeformode4 = !1),
            istimeformode4
          );
        });
      var $___var_db26360ec8dc555b = (function () {
          'use strict';
          function r (e, r) {
            if (e === r) return 0;
            var a = e.toString().split('.'),
              s = r.toString().split('.');
            return (function (e) {
              for (var t = /^\d+$/, i = 0, n = e.length; i < n; i++) if (!t.test(e[i])) return !1;
              return !0;
            })(a.concat(s))
              ? ((function (e, t) {
                  for (; e.length < t.length; ) e.push('0');
                  for (; t.length < e.length; ) t.push('0');
                })(a, s),
                (function (e, t) {
                  for (var i = 0; i < e.length; i++) {
                    var n = parseInt(e[i], 10),
                      r = parseInt(t[i], 10);
                    if (n > r) return 1;
                    if (r > n) return -1;
                  }
                  return 0;
                })(a, s))
              : NaN;
          }
          var a =
            'undefined' != typeof window
              ? window
              : 'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
              ? self
              : {};
          Object.assign =
            Object.assign ||
            function (e) {
              for (var t, i, n = 1; n < arguments.length; ++n)
                for (t in (i = arguments[n]))
                  Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
              return e;
            };
          var h_MESSAGES = {
              HANDSHAKE: 'HANDSHAKE',
              GETSTATE: 'GETSTATE',
              PARENTSTATE: 'PARENTSTATE',
            },
            h_ASYNC_API_MAP = {
              MCMID: 'getMarketingCloudVisitorID',
              MCAID: 'getAnalyticsVisitorID',
              MCAAMB: 'getAudienceManagerBlob',
              MCAAMLH: 'getAudienceManagerLocationHint',
              MCOPTOUT: 'getOptOut',
              ALLFIELDS: 'getVisitorValues',
            },
            h_ALL_APIS = {
              MCMID: 'getMarketingCloudVisitorID',
              MCAAMB: 'getAudienceManagerBlob',
              MCAAMLH: 'getAudienceManagerLocationHint',
              MCOPTOUT: 'getOptOut',
              MCAID: 'getAnalyticsVisitorID',
              CUSTOMERIDS: 'getCustomerIDs',
              ALLFIELDS: 'getVisitorValues',
            },
            h_FIELDGROUP_TO_FIELD = { MC: 'MCMID', A: 'MCAID', AAM: 'MCAAMB' },
            h_FIELDS = {
              MCMID: 'MCMID',
              MCOPTOUT: 'MCOPTOUT',
              MCAID: 'MCAID',
              MCAAMLH: 'MCAAMLH',
              MCAAMB: 'MCAAMB',
            },
            h_AUTH_STATE = { UNKNOWN: 0, AUTHENTICATED: 1, LOGGED_OUT: 2 },
            h_OPT_OUT = { GLOBAL: 'global' },
            _ = {
              MCMID: 'MCMID',
              MCAID: 'MCAID',
              MCAAMB: 'MCAAMB',
              MCAAMLH: 'MCAAMLH',
              MCOPTOUT: 'MCOPTOUT',
              CUSTOMERIDS: 'CUSTOMERIDS',
            },
            p = function (e) {
              function t () {}
              function i (t, i) {
                var n = this;
                return function () {
                  var r = e(0, t),
                    a = {};
                  return (a[t] = r), n.setStateAndPublish(a), i(r), r;
                };
              }
              var n = this;
              (this.getMarketingCloudVisitorID = function (e) {
                e = e || t;
                var n = this.findField(_.MCMID, e),
                  r = i.call(this, _.MCMID, e);
                return void 0 !== n ? n : r();
              }),
                (this.getVisitorValues = function (e) {
                  n.getMarketingCloudVisitorID(function (t) {
                    e({ MCMID: t });
                  });
                });
            },
            C = h_MESSAGES,
            S = h_ASYNC_API_MAP,
            I = { CUSTOMERIDS: 'getCustomerIDs' },
            D = function () {
              function e () {}
              Object.keys(S).forEach(function (i) {
                this[S[i]] = function (n) {
                  n = n || e;
                  var r = this.findField(i, n),
                    a = function (e, t) {
                      var i = this;
                      return function () {
                        return i.callbackRegistry.add(e, t), i.messageParent(C.GETSTATE), '';
                      };
                    }.call(this, i, n);
                  return void 0 !== r ? r : a();
                };
              }, this),
                Object.keys(I).forEach(function (t) {
                  this[I[t]] = function () {
                    return this.findField(t, e) || {};
                  };
                }, this);
            },
            A = h_ASYNC_API_MAP,
            v = (function (e, t) {
              return (
                (function (e, t) {
                  (t.isObjectEmpty = function (e) {
                    return e === Object(e) && 0 === Object.keys(e).length;
                  }),
                    (t.isValueEmpty = function (e) {
                      return '' === e || t.isObjectEmpty(e);
                    }),
                    (t.getIeVersion = function () {
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
                    (t.encodeAndBuildRequest = function (e, t) {
                      return e.map(encodeURIComponent).join(t);
                    }),
                    (t.isObject = function (e) {
                      return null !== e && 'object' == typeof e && !1 === Array.isArray(e);
                    });
                })(0, (t = { exports: {} }).exports),
                t.exports
              );
            })(),
            y =
              (v.isObjectEmpty,
              v.isValueEmpty,
              v.getIeVersion,
              v.encodeAndBuildRequest,
              v.isObject,
              function () {
                return {
                  callbacks: {},
                  add: function (e, t) {
                    this.callbacks[e] = this.callbacks[e] || [];
                    var i = this.callbacks[e].push(t) - 1;
                    return function () {
                      this.callbacks[e].splice(i, 1);
                    };
                  },
                  execute: function (e, t) {
                    if (this.callbacks[e]) {
                      t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                      try {
                        for (; this.callbacks[e].length; ) {
                          var i = this.callbacks[e].shift();
                          'function' == typeof i
                            ? i.apply(null, t)
                            : i instanceof Array && i[1].apply(i[0], t);
                        }
                        delete this.callbacks[e];
                      } catch (e) {}
                    }
                  },
                  executeAll: function (e, t) {
                    (t || (e && !v.isObjectEmpty(e))) &&
                      Object.keys(this.callbacks).forEach(function (t) {
                        var i = void 0 !== e[t] ? e[t] : '';
                        this.execute(t, i);
                      }, this);
                  },
                  hasCallbacks: function () {
                    return Boolean(Object.keys(this.callbacks).length);
                  },
                };
              }),
            b = h_MESSAGES,
            T = { 0: 'prefix', 1: 'orgID', 2: 'state' },
            k = function (e, t) {
              (this.parse = function (e) {
                try {
                  var t = {};
                  return (
                    e.data.split('|').forEach(function (e, i) {
                      void 0 !== e && (t[T[i]] = 2 !== i ? e : JSON.parse(e));
                    }),
                    t
                  );
                } catch (e) {}
              }),
                (this.isInvalid = function (i) {
                  var n = this.parse(i);
                  if (!n || Object.keys(n).length < 2) return !0;
                  var r = e !== n.orgID,
                    a = !t || i.origin !== t,
                    s = -1 === Object.keys(b).indexOf(n.prefix);
                  return r || a || s;
                }),
                (this.send = function (i, n, r) {
                  var a = n + '|' + e;
                  r && r === Object(r) && (a += '|' + JSON.stringify(r));
                  try {
                    i.postMessage(a, t);
                  } catch (e) {}
                });
            },
            O = h_MESSAGES,
            E = function (e, t, i, n) {
              function r (e) {
                Object.assign(m, e);
              }
              function o (e) {
                if (!C.isInvalid(e)) {
                  _ = !1;
                  var t = C.parse(e);
                  m.setStateAndPublish(t.state);
                }
              }
              function l (e) {
                !_ && h && ((_ = !0), C.send(n, e));
              }
              function d () {
                r(new p(i._generateID)),
                  m.getMarketingCloudVisitorID(),
                  m.callbackRegistry.executeAll(m.state, !0),
                  a.removeEventListener('message', c);
              }
              function c (e) {
                if (!C.isInvalid(e)) {
                  var t = C.parse(e);
                  (_ = !1),
                    a.clearTimeout(m._handshakeTimeout),
                    a.removeEventListener('message', c),
                    r(new D(m)),
                    a.addEventListener('message', o),
                    m.setStateAndPublish(t.state),
                    m.callbackRegistry.hasCallbacks() && l(O.GETSTATE);
                }
              }
              var m = this,
                h = t.whitelistParentDomain;
              (m.state = { ALLFIELDS: {} }),
                (m.version = i.version),
                (m.marketingCloudOrgID = e),
                (m.cookieDomain = i.cookieDomain || ''),
                (m._instanceType = 'child');
              var _ = !1,
                C = new k(e, h);
              (m.callbackRegistry = y()),
                (m.init = function () {
                  a.s_c_in || ((a.s_c_il = []), (a.s_c_in = 0)),
                    (m._c = 'Visitor'),
                    (m._il = a.s_c_il),
                    (m._in = a.s_c_in),
                    (m._il[m._in] = m),
                    a.s_c_in++,
                    Object.keys(i).forEach(function (e) {
                      0 !== e.indexOf('_') && 'function' == typeof i[e] && (m[e] = function () {});
                    }),
                    (m.getSupplementalDataID = i.getSupplementalDataID),
                    (m.isAllowed = function () {
                      return !0;
                    }),
                    r(
                      new (function () {
                        Object.keys(A).forEach(function (e) {
                          this[A[e]] = function (t) {
                            this.callbackRegistry.add(e, t);
                          };
                        }, this);
                      })(m)
                    ),
                    h && postMessage
                      ? (a.addEventListener('message', c),
                        l(O.HANDSHAKE),
                        (m._handshakeTimeout = setTimeout(d, 250)))
                      : d();
                }),
                (m.findField = function (e, t) {
                  if (m.state[e]) return t(m.state[e]), m.state[e];
                }),
                (m.messageParent = l),
                (m.setStateAndPublish = function (e) {
                  Object.assign(m.state, e),
                    Object.assign(m.state.ALLFIELDS, e),
                    m.callbackRegistry.executeAll(m.state);
                });
            },
            L = h_MESSAGES,
            P = h_ALL_APIS,
            R = h_ASYNC_API_MAP,
            F = h_FIELDGROUP_TO_FIELD,
            V = function (e, t) {
              function i () {
                var t = {};
                return (
                  Object.keys(P).forEach(function (i) {
                    var n = P[i],
                      r = e[n]();
                    v.isValueEmpty(r) || (t[i] = r);
                  }),
                  t
                );
              }
              function r (t) {
                return function i (r) {
                  var a = (function () {
                    var t = [];
                    return (
                      e._loading &&
                        Object.keys(e._loading).forEach(function (i) {
                          if (e._loading[i]) {
                            var n = F[i];
                            t.push(n);
                          }
                        }),
                      t.length ? t : null
                    );
                  })();
                  if (a) {
                    var s = R[a[0]];
                    e[s](i, !0);
                  } else t();
                };
              }
              function a (e, n) {
                var r = i();
                t.send(e, n, r);
              }
              function l (i) {
                var r = e.setCustomerIDs;
                e.setCustomerIDs = function (n) {
                  r.call(e, n), t.send(i, L.PARENTSTATE, { CUSTOMERIDS: e.getCustomerIDs() });
                };
              }
              return function (e) {
                t.isInvalid(e) ||
                  (t.parse(e).prefix === L.HANDSHAKE
                    ? function (e) {
                        l(e), a(e, L.HANDSHAKE);
                      }
                    : function (e) {
                        r(function () {
                          a(e, L.PARENTSTATE);
                        })();
                      })(e.source);
              };
            },
            x_isLessThan = function (e, t) {
              return r(e, t) < 0;
            },
            x_areVersionsDifferent = function (e, t) {
              return 0 !== r(e, t);
            },
            j = !!a.postMessage,
            U_postMessage = function (e, t, i) {
              var n = 1;
              t &&
                (j
                  ? i.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                  : t && (i.location = t.replace(/#.*$/, '') + '#' + +new Date() + n++ + '&' + e));
            },
            U_receiveMessage = function (e, t) {
              var i;
              try {
                j &&
                  (e &&
                    (i = function (i) {
                      if (
                        ('string' == typeof t && i.origin !== t) ||
                        ('[object Function]' === Object.prototype.toString.call(t) &&
                          !1 === t(i.origin))
                      )
                        return !1;
                      e(i);
                    }),
                  a.addEventListener
                    ? a[e ? 'addEventListener' : 'removeEventListener']('message', i)
                    : a[e ? 'attachEvent' : 'detachEvent']('onmessage', i));
              } catch (e) {}
            },
            H = function (e) {
              var t,
                i,
                n = '0123456789',
                r = '',
                a = '',
                s = 8,
                o = 10,
                l = 10;
              if (1 == e) {
                for (n += 'ABCDEF', t = 0; 16 > t; t++)
                  (i = Math.floor(Math.random() * s)),
                    (r += n.substring(i, i + 1)),
                    (i = Math.floor(Math.random() * s)),
                    (a += n.substring(i, i + 1)),
                    (s = 16);
                return r + '-' + a;
              }
              for (t = 0; 19 > t; t++)
                (i = Math.floor(Math.random() * o)),
                  (r += n.substring(i, i + 1)),
                  0 === t && 9 == i
                    ? (o = 3)
                    : (1 == t || 2 == t) && 10 != o && 2 > i
                    ? (o = 10)
                    : 2 < t && (o = 10),
                  (i = Math.floor(Math.random() * l)),
                  (a += n.substring(i, i + 1)),
                  0 === t && 9 == i
                    ? (l = 3)
                    : (1 == t || 2 == t) && 10 != l && 2 > i
                    ? (l = 10)
                    : 2 < t && (l = 10);
              return r + a;
            },
            B = function (e, t) {
              return {
                corsMetadata: (function () {
                  const $___old_aa92fc28346d19d4 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    ),
                    $___old_2a96b917ec35e559 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    );
                  try {
                    if ($___old_aa92fc28346d19d4)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_5e1b81c00d598b73.XMLHttpRequest
                      ));
                    if ($___old_2a96b917ec35e559)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_5e1b81c00d598b73.XMLHttpRequest
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
                          Object.prototype.toString.call(a.HTMLElement).indexOf('Constructor') >
                            0 && (t = !1)),
                        { corsType: e, corsCookiesEnabled: t }
                      );
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_aa92fc28346d19d4)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_aa92fc28346d19d4
                      ));
                    if ($___old_2a96b917ec35e559)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_2a96b917ec35e559
                      ));
                  }
                })(),
                getCORSInstance: function () {
                  const $___old_160df8da0086488d = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    ),
                    $___old_c7b225f9812b1076 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    );
                  try {
                    if ($___old_160df8da0086488d)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_5e1b81c00d598b73.XMLHttpRequest
                      ));
                    if ($___old_c7b225f9812b1076)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_5e1b81c00d598b73.XMLHttpRequest
                      ));
                    return function () {
                      return 'none' === this.corsMetadata.corsType
                        ? null
                        : new a[this.corsMetadata.corsType]();
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_160df8da0086488d)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_160df8da0086488d
                      ));
                    if ($___old_c7b225f9812b1076)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_c7b225f9812b1076
                      ));
                  }
                },
                fireCORS: function (t, i, n) {
                  var s = this;
                  i && (t.loadErrorHandler = i);
                  try {
                    var o = this.getCORSInstance();
                    o.open('get', t.corsUrl + '&ts=' + new Date().getTime(), !0),
                      'XMLHttpRequest' === this.corsMetadata.corsType &&
                        ((o.withCredentials = !0),
                        (o.timeout = e.loadTimeout),
                        o.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                        (o.onreadystatechange = function () {
                          4 === this.readyState &&
                            200 === this.status &&
                            (function (e) {
                              var i;
                              try {
                                if ((i = JSON.parse(e)) !== Object(i))
                                  return void s.handleCORSError(t, null, 'Response is not JSON');
                              } catch (e) {
                                return void s.handleCORSError(
                                  t,
                                  e,
                                  'Error parsing response as JSON'
                                );
                              }
                              try {
                                for (var n = t.callback, r = a, o = 0; o < n.length; o++)
                                  r = r[n[o]];
                                r(i);
                              } catch (e) {
                                s.handleCORSError(t, e, 'Error forming callback function');
                              }
                            })(this.responseText);
                        })),
                      (o.onerror = function (e) {
                        s.handleCORSError(t, e, 'onerror');
                      }),
                      (o.ontimeout = function (e) {
                        s.handleCORSError(t, e, 'ontimeout');
                      }),
                      o.send(),
                      e._log.requests.push(t.corsUrl);
                  } catch (e) {
                    this.handleCORSError(t, e, 'try-catch');
                  }
                },
                handleCORSError: function (t, i, n) {
                  e.CORSErrors.push({ corsData: t, error: i, description: n }),
                    t.loadErrorHandler &&
                      ('ontimeout' === n ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1));
                },
              };
            },
            G = {
              POST_MESSAGE_ENABLED: !!a.postMessage,
              DAYS_BETWEEN_SYNC_ID_CALLS: 1,
              MILLIS_PER_DAY: 86400000,
              ADOBE_MC: 'adobe_mc',
              ADOBE_MC_SDID: 'adobe_mc_sdid',
              VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
              ADOBE_MC_TTL_IN_MIN: 5,
              VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
            },
            Y = {
              audienceManagerServer: {},
              audienceManagerServerSecure: {},
              cookieDomain: {},
              cookieLifetime: {},
              cookieName: {},
              disableThirdPartyCalls: {},
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
              loadSSL: {},
              loadTimeout: {},
              marketingCloudServer: {},
              marketingCloudServerSecure: {},
              overwriteCrossDomainMCIDAndAID: {},
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
            X = {
              getConfigNames: function () {
                return Object.keys(Y);
              },
              getConfigs: function () {
                return Y;
              },
            },
            W = function (e, t, i) {
              function n (e) {
                var t = e;
                return function (e) {
                  var i = e || c.location.href;
                  try {
                    var n = d._extractParamFromUri(i, t);
                    if (n) return y.parsePipeDelimetedKeyValues(n);
                  } catch (e) {}
                };
              }
              function s (e) {
                (e = e || {}),
                  (d._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                  (d._supplementalDataIDCurrentConsumed =
                    e.supplementalDataIDCurrentConsumed || {}),
                  (d._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                  (d._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {});
              }
              function o (e) {
                return (function (e) {
                  return (e = e ? (e += '|') : e) + 'TS=' + y.getTimestampInSeconds();
                })(
                  e.reduce(function (e, i) {
                    var n = i[0],
                      r = i[1];
                    return (
                      null != r &&
                        r !== D &&
                        (e = (function (e, t, i) {
                          return (i = i ? (i += '|') : i) + (e + '=') + encodeURIComponent(t);
                        })(n, r, e)),
                      e
                    );
                  }, '')
                );
              }
              if (!i || i.split('').reverse().join('') !== e)
                throw new Error('Please use `Visitor.getInstance` to instantiate Visitor.');
              var d = this;
              d.version = '3.4.0';
              var c = a,
                u = c.Visitor;
              (u.version = d.version),
                (u.AuthState = h_AUTH_STATE),
                (u.OptOut = h_OPT_OUT),
                c.s_c_in || ((c.s_c_il = []), (c.s_c_in = 0)),
                (d._c = 'Visitor'),
                (d._il = c.s_c_il),
                (d._in = c.s_c_in),
                (d._il[d._in] = d),
                c.s_c_in++,
                (d._instanceType = 'regular'),
                (d._log = { requests: [] }),
                (d.marketingCloudOrgID = e),
                (d.cookieName = 'AMCV_' + e),
                (d.sessionCookieName = 'AMCVS_' + e),
                (d.cookieDomain = (function (e) {
                  var t;
                  if ((!e && a.location && (e = a.location.hostname), (t = e)))
                    if (/^[0-9.]+$/.test(t)) t = '';
                    else {
                      var n = t.split('.'),
                        r = n.length - 1,
                        s = r - 1;
                      if (
                        (r > 1 &&
                          n[r].length <= 2 &&
                          (2 === n[r - 1].length ||
                            ',ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,'.indexOf(
                              ',' + n[r] + ','
                            ) < 0) &&
                          s--,
                        s > 0)
                      )
                        for (t = ''; r >= s; ) (t = n[r] + (t ? '.' : '') + t), r--;
                    }
                  return t;
                })()),
                d.cookieDomain === c.location.hostname && (d.cookieDomain = ''),
                (d.loadSSL = c.location.protocol.toLowerCase().indexOf('https') >= 0),
                (d.loadTimeout = 30000),
                (d.CORSErrors = []),
                (d.marketingCloudServer = d.audienceManagerServer = 'dpm.demdex.net'),
                (d.sdidParamExpiry = 30);
              var f = c.document,
                g = null,
                m = 'MCMID',
                _ = 'MCIDTS',
                p = 'A',
                C = 'MCAID',
                S = 'AAM',
                I = 'MCAAMB',
                D = 'NONE',
                A = function (e) {
                  return !Object.prototype[e];
                },
                M = B(d);
              (d.FIELDS = h_FIELDS),
                (d.cookieRead = function (e) {
                  e = encodeURIComponent(e);
                  var t = (';' + f.cookie).split(' ').join(';'),
                    i = t.indexOf(';' + e + '='),
                    n = i < 0 ? i : t.indexOf(';', i + 1);
                  return i < 0
                    ? ''
                    : decodeURIComponent(t.substring(i + 2 + e.length, n < 0 ? t.length : n));
                }),
                (d.cookieWrite = function (e, t, i) {
                  var n,
                    r = d.cookieLifetime,
                    a = '';
                  if (
                    ((t = '' + t),
                    (r = r ? ('' + r).toUpperCase() : ''),
                    i && 'SESSION' !== r && 'NONE' !== r)
                  ) {
                    if ((n = '' !== t ? parseInt(r || 0, 10) : -60))
                      (i = new Date()).setTime(i.getTime() + 1000 * n);
                    else if (1 === i) {
                      var s = (i = new Date()).getYear();
                      i.setYear(s + 2 + (s < 1900 ? 1900 : 0));
                    }
                  } else i = 0;
                  return e && 'NONE' !== r
                    ? (d.configs &&
                        d.configs.secureCookie &&
                        'https:' === location.protocol &&
                        (a = 'Secure'),
                      (f.cookie =
                        encodeURIComponent(e) +
                        '=' +
                        encodeURIComponent(t) +
                        '; path=/;' +
                        (i ? ' expires=' + i.toGMTString() + ';' : '') +
                        (d.cookieDomain ? ' domain=' + d.cookieDomain + ';' : '') +
                        a),
                      d.cookieRead(e) === t)
                    : 0;
                }),
                (d.resetState = function (e) {
                  e ? d._mergeServerState(e) : s();
                }),
                (d._isAllowedDone = !1),
                (d._isAllowedFlag = !1),
                (d.isAllowed = function () {
                  return (
                    d._isAllowedDone ||
                      ((d._isAllowedDone = !0),
                      (d.cookieRead(d.cookieName) || d.cookieWrite(d.cookieName, 'T', 1)) &&
                        (d._isAllowedFlag = !0)),
                    d._isAllowedFlag
                  );
                }),
                (d.setMarketingCloudVisitorID = function (e) {
                  d._setMarketingCloudFields(e);
                }),
                (d._use1stPartyMarketingCloudServer = !1),
                (d.getMarketingCloudVisitorID = function (e, t) {
                  if (d.isAllowed()) {
                    d.marketingCloudServer &&
                      d.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                      (d._use1stPartyMarketingCloudServer = !0);
                    var i = d._getAudienceManagerURLData('_setMarketingCloudFields'),
                      n = i.url;
                    return d._getRemoteField(m, n, e, t, i);
                  }
                  return '';
                }),
                (d.getVisitorValues = function (e, t) {
                  var i = {
                    MCMID: { fn: d.getMarketingCloudVisitorID, args: [!0], context: d },
                    MCOPTOUT: { fn: d.isOptedOut, args: [void 0, !0], context: d },
                    MCAID: { fn: d.getAnalyticsVisitorID, args: [!0], context: d },
                    MCAAMLH: { fn: d.getAudienceManagerLocationHint, args: [!0], context: d },
                    MCAAMB: { fn: d.getAudienceManagerBlob, args: [!0], context: d },
                  };
                  !(function (e, t) {
                    function i (e) {
                      return function (i) {
                        (n[e] = i), ++r === a && t(n);
                      };
                    }
                    var n = {},
                      r = 0,
                      a = Object.keys(e).length;
                    Object.keys(e).forEach(function (t) {
                      var n = e[t];
                      if (n.fn) {
                        var r = n.args || [];
                        r.unshift(i(t)), n.fn.apply(n.context || null, r);
                      }
                    });
                  })(t && t.length ? y.pluck(i, t) : i, e);
                }),
                (d._currentCustomerIDs = {}),
                (d._customerIDsHashChanged = !1),
                (d._newCustomerIDsHash = ''),
                (d.setCustomerIDs = function (e) {
                  if (d.isAllowed() && e) {
                    if (!v.isObject(e) || v.isObjectEmpty(e)) return !1;
                    var i, n;
                    for (i in (d._readVisitor(), e))
                      if (A(i) && (n = e[i]))
                        if ('object' == typeof n) {
                          var r = {};
                          n.id && (r.id = n.id),
                            null != n.authState && (r.authState = n.authState),
                            (d._currentCustomerIDs[i] = r);
                        } else d._currentCustomerIDs[i] = { id: n };
                    var a = d.getCustomerIDs(),
                      s = d._getField('MCCIDH'),
                      o = '';
                    for (i in (s || (s = 0), a))
                      A(i) &&
                        (o +=
                          (o ? '|' : '') +
                          i +
                          '|' +
                          ((n = a[i]).id ? n.id : '') +
                          (n.authState ? n.authState : ''));
                    (d._newCustomerIDsHash = String(d._hash(o))),
                      d._newCustomerIDsHash !== s &&
                        ((d._customerIDsHashChanged = !0),
                        d._mapCustomerIDs(function () {
                          d._customerIDsHashChanged = !1;
                        }));
                  }
                }),
                (d.getCustomerIDs = function () {
                  d._readVisitor();
                  var e,
                    t,
                    i = {};
                  for (e in d._currentCustomerIDs)
                    A(e) &&
                      ((t = d._currentCustomerIDs[e]),
                      i[e] || (i[e] = {}),
                      t.id && (i[e].id = t.id),
                      null != t.authState
                        ? (i[e].authState = t.authState)
                        : (i[e].authState = u.AuthState.UNKNOWN));
                  return i;
                }),
                (d.setAnalyticsVisitorID = function (e) {
                  d._setAnalyticsFields(e);
                }),
                (d.getAnalyticsVisitorID = function (e, t, i) {
                  if (!y.isTrackingServerPopulated() && !i) return d._callCallback(e, ['']), '';
                  if (d.isAllowed()) {
                    var n = '';
                    if (
                      (i ||
                        (n = d.getMarketingCloudVisitorID(function (t) {
                          d.getAnalyticsVisitorID(e, !0);
                        })),
                      n || i)
                    ) {
                      var r = i ? d.marketingCloudServer : d.trackingServer,
                        a = '';
                      d.loadSSL &&
                        (i
                          ? d.marketingCloudServerSecure && (r = d.marketingCloudServerSecure)
                          : d.trackingServerSecure && (r = d.trackingServerSecure));
                      var s = {};
                      if (r) {
                        var o = 'http' + (d.loadSSL ? 's' : '') + '://' + r + '/id',
                          l =
                            'd_visid_ver=' +
                            d.version +
                            '&mcorgid=' +
                            encodeURIComponent(d.marketingCloudOrgID) +
                            (n ? '&mid=' + encodeURIComponent(n) : '') +
                            (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies
                              ? '&d_coppa=true'
                              : ''),
                          c = [
                            's_c_il',
                            d._in,
                            '_set' + (i ? 'MarketingCloud' : 'Analytics') + 'Fields',
                          ];
                        (a =
                          o +
                          '?' +
                          l +
                          '&callback=s_c_il%5B' +
                          d._in +
                          '%5D._set' +
                          (i ? 'MarketingCloud' : 'Analytics') +
                          'Fields'),
                          (s.corsUrl = o + '?' + l),
                          (s.callback = c);
                      }
                      return (s.url = a), d._getRemoteField(i ? m : C, a, e, t, s);
                    }
                  }
                  return '';
                }),
                (d.getAudienceManagerLocationHint = function (e, t) {
                  if (
                    d.isAllowed() &&
                    d.getMarketingCloudVisitorID(function (t) {
                      d.getAudienceManagerLocationHint(e, !0);
                    })
                  ) {
                    var i = d._getField(C);
                    if (
                      (!i &&
                        y.isTrackingServerPopulated() &&
                        (i = d.getAnalyticsVisitorID(function (t) {
                          d.getAudienceManagerLocationHint(e, !0);
                        })),
                      i || !y.isTrackingServerPopulated())
                    ) {
                      var n = d._getAudienceManagerURLData(),
                        r = n.url;
                      return d._getRemoteField('MCAAMLH', r, e, t, n);
                    }
                  }
                  return '';
                }),
                (d.getLocationHint = d.getAudienceManagerLocationHint),
                (d.getAudienceManagerBlob = function (e, t) {
                  if (
                    d.isAllowed() &&
                    d.getMarketingCloudVisitorID(function (t) {
                      d.getAudienceManagerBlob(e, !0);
                    })
                  ) {
                    var i = d._getField(C);
                    if (
                      (!i &&
                        y.isTrackingServerPopulated() &&
                        (i = d.getAnalyticsVisitorID(function (t) {
                          d.getAudienceManagerBlob(e, !0);
                        })),
                      i || !y.isTrackingServerPopulated())
                    ) {
                      var n = d._getAudienceManagerURLData(),
                        r = n.url;
                      return (
                        d._customerIDsHashChanged && d._setFieldExpire(I, -1),
                        d._getRemoteField(I, r, e, t, n)
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
                  var i = d._supplementalDataIDCurrent;
                  return (
                    d._supplementalDataIDLast && !d._supplementalDataIDLastConsumed[e]
                      ? ((i = d._supplementalDataIDLast),
                        (d._supplementalDataIDLastConsumed[e] = !0))
                      : i &&
                        (d._supplementalDataIDCurrentConsumed[e] &&
                          ((d._supplementalDataIDLast = d._supplementalDataIDCurrent),
                          (d._supplementalDataIDLastConsumed =
                            d._supplementalDataIDCurrentConsumed),
                          (d._supplementalDataIDCurrent = i = t ? '' : d._generateID(1)),
                          (d._supplementalDataIDCurrentConsumed = {})),
                        i && (d._supplementalDataIDCurrentConsumed[e] = !0)),
                    i
                  );
                }),
                (d.getOptOut = function (e, t) {
                  if (d.isAllowed()) {
                    var i = d._getAudienceManagerURLData('_setMarketingCloudFields'),
                      n = i.url;
                    return d._getRemoteField('MCOPTOUT', n, e, t, i);
                  }
                  return '';
                }),
                (d.isOptedOut = function (e, t, i) {
                  if (d.isAllowed()) {
                    t || (t = u.OptOut.GLOBAL);
                    var n = d.getOptOut(function (i) {
                      var n = i === u.OptOut.GLOBAL || i.indexOf(t) >= 0;
                      d._callCallback(e, [n]);
                    }, i);
                    return n ? n === u.OptOut.GLOBAL || n.indexOf(t) >= 0 : null;
                  }
                  return !1;
                }),
                (d._fields = null),
                (d._fieldsExpired = null),
                (d._hash = function (e) {
                  var t,
                    n = 0;
                  if (e)
                    for (t = 0; t < e.length; t++) (n = (n << 5) - n + e.charCodeAt(t)), (n &= n);
                  return n;
                }),
                (d._generateID = H),
                (d._generateLocalMID = function () {
                  var e = d._generateID(0);
                  return (T.isClientSideMarketingCloudVisitorID = !0), e;
                }),
                (d._callbackList = null),
                (d._callCallback = function (e, t) {
                  try {
                    'function' == typeof e ? e.apply(c, t) : e[1].apply(e[0], t);
                  } catch (e) {}
                }),
                (d._registerCallback = function (e, t) {
                  t &&
                    (null == d._callbackList && (d._callbackList = {}),
                    null == d._callbackList[e] && (d._callbackList[e] = []),
                    d._callbackList[e].push(t));
                }),
                (d._callAllCallbacks = function (e, t) {
                  if (null != d._callbackList) {
                    var i = d._callbackList[e];
                    if (i) for (; i.length > 0; ) d._callCallback(i.shift(), t);
                  }
                }),
                (d._addQuerystringParam = function (e, t, i, n) {
                  var r = encodeURIComponent(t) + '=' + encodeURIComponent(i),
                    a = y.parseHash(e),
                    s = y.hashlessUrl(e);
                  if (-1 === s.indexOf('?')) return s + '?' + r + a;
                  var o = s.split('?'),
                    l = o[0] + '?',
                    d = o[1];
                  return l + y.addQueryParamAtLocation(d, r, n) + a;
                }),
                (d._extractParamFromUri = function (e, t) {
                  var n = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                  if (n && n.length) return decodeURIComponent(n[1]);
                }),
                (d._parseAdobeMcFromUrl = n(G.ADOBE_MC)),
                (d._parseAdobeMcSdidFromUrl = n(G.ADOBE_MC_SDID)),
                (d._attemptToPopulateSdidFromUrl = function (t) {
                  var i = d._parseAdobeMcSdidFromUrl(t),
                    n = 1000000000;
                  i && i.TS && (n = y.getTimestampInSeconds() - i.TS),
                    i &&
                      i.SDID &&
                      i.MCORGID === e &&
                      n < d.sdidParamExpiry &&
                      ((d._supplementalDataIDCurrent = i.SDID),
                      (d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                }),
                (d._attemptToPopulateIdsFromUrl = function () {
                  var t = d._parseAdobeMcFromUrl();
                  if (t && t.TS) {
                    var n = y.getTimestampInSeconds() - t.TS;
                    if (Math.floor(n / 60) > G.ADOBE_MC_TTL_IN_MIN || t.MCORGID !== e) return;
                    !(function (e) {
                      function t (e, t) {
                        e && e.match(G.VALID_VISITOR_ID_REGEX) && t(e);
                      }
                      t(e[m], d.setMarketingCloudVisitorID),
                        d._setFieldExpire(I, -1),
                        t(e[C], d.setAnalyticsVisitorID);
                    })(t);
                  }
                }),
                (d._mergeServerState = function (e) {
                  if (e)
                    try {
                      if (
                        (e = (function (e) {
                          return y.isObject(e) ? e : JSON.parse(e);
                        })(e))[d.marketingCloudOrgID]
                      ) {
                        var t = e[d.marketingCloudOrgID];
                        !(function (e) {
                          y.isObject(e) && d.setCustomerIDs(e);
                        })(t.customerIDs),
                          s(t.sdid);
                      }
                    } catch (e) {
                      throw new Error('`serverState` has an invalid format.');
                    }
                }),
                (d._timeout = null),
                (d._loadData = function (e, t, i, n) {
                  (t = d._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                    (n.url = d._addQuerystringParam(n.url, 'd_fieldgroup', e, 1)),
                    (n.corsUrl = d._addQuerystringParam(n.corsUrl, 'd_fieldgroup', e, 1)),
                    (T.fieldGroupObj[e] = !0),
                    n === Object(n) &&
                      n.corsUrl &&
                      'XMLHttpRequest' === M.corsMetadata.corsType &&
                      M.fireCORS(n, i, e);
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
                      d.audienceManagerServerSecure && (e += '|' + d.audienceManagerServerSecure),
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
                      i,
                      n,
                      r,
                      a,
                      s = d._getSettingsDigest(),
                      o = !1,
                      l = d.cookieRead(d.cookieName),
                      c = new Date();
                    if ((null == d._fields && (d._fields = {}), l && 'T' !== l))
                      for (
                        (l = l.split('|'))[0].match(/^[\-0-9]+$/) &&
                          (parseInt(l[0], 10) !== s && (o = !0), l.shift()),
                          l.length % 2 == 1 && l.pop(),
                          e = 0;
                        e < l.length;
                        e += 2
                      )
                        (i = (t = l[e].split('-'))[0]),
                          (n = l[e + 1]),
                          t.length > 1
                            ? ((r = parseInt(t[1], 10)), (a = t[1].indexOf('s') > 0))
                            : ((r = 0), (a = !1)),
                          o &&
                            ('MCCIDH' === i && (n = ''), r > 0 && (r = c.getTime() / 1000 - 60)),
                          i &&
                            n &&
                            (d._setField(i, n, 1),
                            r > 0 &&
                              ((d._fields['expire' + i] = r + (a ? 's' : '')),
                              (c.getTime() >= 1000 * r ||
                                (a && !d.cookieRead(d.sessionCookieName))) &&
                                (d._fieldsExpired || (d._fieldsExpired = {}),
                                (d._fieldsExpired[i] = !0))));
                    !d._getField(C) &&
                      y.isTrackingServerPopulated() &&
                      (l = d.cookieRead('s_vi')) &&
                      (l = l.split('|')).length > 1 &&
                      l[0].indexOf('v1') >= 0 &&
                      ((e = (n = l[1]).indexOf('[')) >= 0 && (n = n.substring(0, e)),
                      n && n.match(G.VALID_VISITOR_ID_REGEX) && d._setField(C, n));
                  }
                }),
                (d._appendVersionTo = function (e) {
                  var t = 'vVersion|' + d.version,
                    i = e ? d._getCookieVersion(e) : null;
                  return (
                    i
                      ? x_areVersionsDifferent(i, d.version) && (e = e.replace(G.VERSION_REGEX, t))
                      : (e += (e ? '|' : '') + t),
                    e
                  );
                }),
                (d._writeVisitor = function () {
                  var e,
                    t,
                    i = d._getSettingsDigest();
                  for (e in d._fields)
                    A(e) &&
                      d._fields[e] &&
                      'expire' !== e.substring(0, 6) &&
                      ((t = d._fields[e]),
                      (i +=
                        (i ? '|' : '') +
                        e +
                        (d._fields['expire' + e] ? '-' + d._fields['expire' + e] : '') +
                        '|' +
                        t));
                  (i = d._appendVersionTo(i)), d.cookieWrite(d.cookieName, i, 1);
                }),
                (d._getField = function (e, t) {
                  return null == d._fields || (!t && d._fieldsExpired && d._fieldsExpired[e])
                    ? null
                    : d._fields[e];
                }),
                (d._setField = function (e, t, i) {
                  null == d._fields && (d._fields = {}),
                    (d._fields[e] = t),
                    i || d._writeVisitor();
                }),
                (d._getFieldList = function (e, t) {
                  var i = d._getField(e, t);
                  return i ? i.split('*') : null;
                }),
                (d._setFieldList = function (e, t, i) {
                  d._setField(e, t ? t.join('*') : '', i);
                }),
                (d._getFieldMap = function (e, t) {
                  var i = d._getFieldList(e, t);
                  if (i) {
                    var n,
                      r = {};
                    for (n = 0; n < i.length; n += 2) r[i[n]] = i[n + 1];
                    return r;
                  }
                  return null;
                }),
                (d._setFieldMap = function (e, t, i) {
                  var n,
                    r = null;
                  if (t) for (n in ((r = []), t)) A(n) && (r.push(n), r.push(t[n]));
                  d._setFieldList(e, r, i);
                }),
                (d._setFieldExpire = function (e, t, i) {
                  var n = new Date();
                  n.setTime(n.getTime() + 1000 * t),
                    null == d._fields && (d._fields = {}),
                    (d._fields['expire' + e] = Math.floor(n.getTime() / 1000) + (i ? 's' : '')),
                    t < 0
                      ? (d._fieldsExpired || (d._fieldsExpired = {}), (d._fieldsExpired[e] = !0))
                      : d._fieldsExpired && (d._fieldsExpired[e] = !1),
                    i &&
                      (d.cookieRead(d.sessionCookieName) ||
                        d.cookieWrite(d.sessionCookieName, '1'));
                }),
                (d._findVisitorID = function (e) {
                  return (
                    e &&
                      ('object' == typeof e &&
                        (e = e.d_mid
                          ? e.d_mid
                          : e.visitorID
                          ? e.visitorID
                          : e.id
                          ? e.id
                          : e.uuid
                          ? e.uuid
                          : '' + e),
                      e && 'NOTARGET' === (e = e.toUpperCase()) && (e = D),
                      (e && (e === D || e.match(G.VALID_VISITOR_ID_REGEX))) || (e = '')),
                    e
                  );
                }),
                (d._setFields = function (e, t) {
                  if (
                    (d._clearTimeout(e),
                    null != d._loading && (d._loading[e] = !1),
                    T.fieldGroupObj[e] && T.setState(e, !1),
                    'MC' === e)
                  ) {
                    !0 !== T.isClientSideMarketingCloudVisitorID &&
                      (T.isClientSideMarketingCloudVisitorID = !1);
                    var i = d._getField(m);
                    if (!i || d.overwriteCrossDomainMCIDAndAID) {
                      if (!(i = 'object' == typeof t && t.mid ? t.mid : d._findVisitorID(t))) {
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
                      d._setField(m, i);
                    }
                    (i && i !== D) || (i = ''),
                      'object' == typeof t &&
                        ((t.d_region || t.dcs_region || t.d_blob || t.blob) && d._setFields(S, t),
                        d._use1stPartyMarketingCloudServer &&
                          t.mid &&
                          d._setFields(p, { id: t.id })),
                      d._callAllCallbacks(m, [i]);
                  }
                  if (e === S && 'object' == typeof t) {
                    var n = 604800;
                    null != t.id_sync_ttl && t.id_sync_ttl && (n = parseInt(t.id_sync_ttl, 10));
                    var r = b.getRegionAndCheckIfChanged(t, n);
                    d._callAllCallbacks('MCAAMLH', [r]);
                    var a = d._getField(I);
                    (t.d_blob || t.blob) &&
                      ((a = t.d_blob) || (a = t.blob), d._setFieldExpire(I, n), d._setField(I, a)),
                      a || (a = ''),
                      d._callAllCallbacks(I, [a]),
                      !t.error_msg &&
                        d._newCustomerIDsHash &&
                        d._setField('MCCIDH', d._newCustomerIDsHash);
                  }
                  if (e === p) {
                    var s = d._getField(C);
                    (s && !d.overwriteCrossDomainMCIDAndAID) ||
                      ((s = d._findVisitorID(t)) ? s !== D && d._setFieldExpire(I, -1) : (s = D),
                      d._setField(C, s)),
                      (s && s !== D) || (s = ''),
                      d._callAllCallbacks(C, [s]);
                  }
                  if (d.idSyncDisableSyncs || d.disableIdSyncs) b.idCallNotProcesssed = !0;
                  else {
                    b.idCallNotProcesssed = !1;
                    var o = {};
                    (o.ibs = t.ibs), (o.subdomain = t.subdomain), b.processIDCallData(o);
                  }
                  var l, c;
                  t === Object(t) &&
                    (d.isAllowed() && (l = d._getField('MCOPTOUT')),
                    l ||
                      ((l = D),
                      t.d_optout && t.d_optout instanceof Array && (l = t.d_optout.join(',')),
                      (c = parseInt(t.d_ottl, 10)),
                      isNaN(c) && (c = 7200),
                      d._setFieldExpire('MCOPTOUT', c, !0),
                      d._setField('MCOPTOUT', l)),
                    d._callAllCallbacks('MCOPTOUT', [l]));
                }),
                (d._loading = null),
                (d._getRemoteField = function (e, t, i, n, r) {
                  var a,
                    s = '',
                    o = y.isFirstPartyAnalyticsVisitorIDCall(e);
                  if (d.isAllowed())
                    if (
                      (d._readVisitor(),
                      !(
                        !(s = d._getField(e, !0 === { MCAAMLH: !0, MCAAMB: !0 }[e])) ||
                        (d._fieldsExpired && d._fieldsExpired[e])
                      ) ||
                        (d.disableThirdPartyCalls && !o))
                    )
                      s ||
                        (e === m
                          ? (d._registerCallback(e, i),
                            (s = d._generateLocalMID()),
                            d.setMarketingCloudVisitorID(s))
                          : e === C
                          ? (d._registerCallback(e, i), (s = ''), d.setAnalyticsVisitorID(s))
                          : ((s = ''), (n = !0)));
                    else if (
                      (e === m || 'MCOPTOUT' === e
                        ? (a = 'MC')
                        : 'MCAAMLH' === e || e === I
                        ? (a = S)
                        : e === C && (a = p),
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
                                t && T.setState(a, !0);
                                var i = '';
                                e === m
                                  ? (i = d._generateLocalMID())
                                  : a === S && (i = { error_msg: 'timeout' }),
                                  d._setFields(a, i);
                              }
                            },
                            r
                          )),
                        d._registerCallback(e, i),
                        s || (t || d._setFields(a, { id: D }), '')
                      );
                  return (
                    (e !== m && e !== C) || s !== D || ((s = ''), (n = !0)),
                    i && n && d._callCallback(i, [s]),
                    s
                  );
                }),
                (d._setMarketingCloudFields = function (e) {
                  d._readVisitor(), d._setFields('MC', e);
                }),
                (d._mapCustomerIDs = function (e) {
                  d.getAudienceManagerBlob(e, !0);
                }),
                (d._setAnalyticsFields = function (e) {
                  d._readVisitor(), d._setFields(p, e);
                }),
                (d._setAudienceManagerFields = function (e) {
                  d._readVisitor(), d._setFields(S, e);
                }),
                (d._getAudienceManagerURLData = function (e) {
                  var t = d.audienceManagerServer,
                    i = '',
                    n = d._getField(m),
                    r = d._getField(I, !0),
                    a = d._getField(C),
                    s = a && a !== D ? '&d_cid_ic=AVID%01' + encodeURIComponent(a) : '';
                  if (
                    (d.loadSSL &&
                      d.audienceManagerServerSecure &&
                      (t = d.audienceManagerServerSecure),
                    t)
                  ) {
                    var o,
                      l,
                      c = d.getCustomerIDs();
                    if (c)
                      for (o in c)
                        A(o) &&
                          ((l = c[o]),
                          (s +=
                            '&d_cid_ic=' +
                            encodeURIComponent(o) +
                            '%01' +
                            encodeURIComponent(l.id ? l.id : '') +
                            (l.authState ? '%01' + l.authState : '')));
                    e || (e = '_setAudienceManagerFields');
                    var u = 'http' + (d.loadSSL ? 's' : '') + '://' + t + '/id',
                      f =
                        'd_visid_ver=' +
                        d.version +
                        '&d_rtbd=json&d_ver=2' +
                        (!n && d._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                        '&d_orgid=' +
                        encodeURIComponent(d.marketingCloudOrgID) +
                        '&d_nsid=' +
                        (d.idSyncContainerID || 0) +
                        (n ? '&d_mid=' + encodeURIComponent(n) : '') +
                        (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies
                          ? '&d_coppa=true'
                          : '') +
                        (!0 === g ? '&d_coop_safe=1' : !1 === g ? '&d_coop_unsafe=1' : '') +
                        (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                        s,
                      h = ['s_c_il', d._in, e];
                    return {
                      url: (i = u + '?' + f + '&d_cb=s_c_il%5B' + d._in + '%5D.' + e),
                      corsUrl: u + '?' + f,
                      callback: h,
                    };
                  }
                  return { url: i };
                }),
                (d.appendVisitorIDsTo = function (e) {
                  try {
                    var t = [
                      [m, d._getField(m)],
                      [C, d._getField(C)],
                      ['MCORGID', d.marketingCloudOrgID],
                    ];
                    return d._addQuerystringParam(e, G.ADOBE_MC, o(t));
                  } catch (t) {
                    return e;
                  }
                }),
                (d.appendSupplementalDataIDTo = function (e, t) {
                  if (!(t = t || d.getSupplementalDataID(y.generateRandomString(), !0))) return e;
                  try {
                    var i = o([
                      ['SDID', t],
                      ['MCORGID', d.marketingCloudOrgID],
                    ]);
                    return d._addQuerystringParam(e, G.ADOBE_MC_SDID, i);
                  } catch (t) {
                    return e;
                  }
                });
              var y = {
                parseHash: function (e) {
                  var t = e.indexOf('#');
                  return t > 0 ? e.substr(t) : '';
                },
                hashlessUrl: function (e) {
                  var t = e.indexOf('#');
                  return t > 0 ? e.substr(0, t) : e;
                },
                addQueryParamAtLocation: function (e, t, i) {
                  var n = e.split('&');
                  return (i = null != i ? i : n.length), n.splice(i, 0, t), n.join('&');
                },
                isFirstPartyAnalyticsVisitorIDCall: function (e, t, i) {
                  return (
                    e === C &&
                    (t || (t = d.trackingServer),
                    i || (i = d.trackingServerSecure),
                    !('string' != typeof (n = d.loadSSL ? i : t) || !n.length) &&
                      n.indexOf('2o7.net') < 0 &&
                      n.indexOf('omtrdc.net') < 0)
                  );
                  var n;
                },
                isObject: function (e) {
                  return Boolean(e && e === Object(e));
                },
                removeCookie: function (e) {
                  document.cookie =
                    encodeURIComponent(e) +
                    '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                    (d.cookieDomain ? ' domain=' + d.cookieDomain + ';' : '');
                },
                isTrackingServerPopulated: function () {
                  return !!d.trackingServer || !!d.trackingServerSecure;
                },
                getTimestampInSeconds: function () {
                  return Math.round(new Date().getTime() / 1000);
                },
                parsePipeDelimetedKeyValues: function (e) {
                  return e.split('|').reduce(function (e, t) {
                    var i = t.split('=');
                    return (e[i[0]] = decodeURIComponent(i[1])), e;
                  }, {});
                },
                generateRandomString: function (e) {
                  e = e || 5;
                  for (var t = '', i = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--; )
                    t += i[Math.floor(Math.random() * i.length)];
                  return t;
                },
                normalizeBoolean: function (e) {
                  return 'true' === e || ('false' !== e && e);
                },
                parseBoolean: function (e) {
                  return 'true' === e || ('false' !== e && null);
                },
                replaceMethodsWithFunction: function (e, t) {
                  for (var i in e) e.hasOwnProperty(i) && 'function' == typeof e[i] && (e[i] = t);
                  return e;
                },
                pluck: function (e, t) {
                  return t.reduce(function (t, i) {
                    return e[i] && (t[i] = e[i]), t;
                  }, Object.create(null));
                },
              };
              d._helpers = y;
              var b = (function (e, t) {
                var i = a.document;
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
                      n = 'http://fast.',
                      r =
                        '?d_nsid=' +
                        e.idSyncContainerID +
                        '#' +
                        encodeURIComponent(i.location.origin);
                    return (
                      this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                      e.loadSSL && (n = e.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                      (t = n + this.subdomain + '.demdex.net/dest5.html' + r),
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
                      '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(i.location.href);
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
                  messageSendingInterval: G.POST_MESSAGE_ENABLED ? null : 100,
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
                      ((r = i.createElement('iframe')).sandbox =
                        'allow-scripts allow-same-origin'),
                        (r.title = 'Adobe ID Syncing iFrame'),
                        (r.id = n.id),
                        (r.name = n.id + '_name'),
                        (r.style.cssText = 'display: none; width: 0; height: 0;'),
                        (r.src = n.url),
                        (n.newIframeCreated = !0),
                        t(),
                        i.body.appendChild(r);
                    }
                    function t (e) {
                      r.addEventListener('load', function () {
                        (r.className = 'aamIframeLoaded'),
                          (n.iframeHasLoaded = !0),
                          n.fireIframeLoadedCallbacks(e),
                          n.requestToProcess();
                      });
                    }
                    this.startedAttachingIframe = !0;
                    var n = this,
                      r = i.getElementById(this.id);
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
                    function i () {
                      r.jsonForComparison.push(t), r.jsonWaiting.push(t), r.processSyncOnPage(t);
                    }
                    var n,
                      r = this;
                    if (t === Object(t) && t.ibs)
                      if (((n = JSON.stringify(t.ibs || [])), this.jsonForComparison.length)) {
                        var a,
                          s,
                          o,
                          l = !1;
                        for (a = 0, s = this.jsonForComparison.length; a < s; a++)
                          if (
                            ((o = this.jsonForComparison[a]), n === JSON.stringify(o.ibs || []))
                          ) {
                            l = !0;
                            break;
                          }
                        l ? this.jsonDuplicates.push(t) : i();
                      } else i();
                    if (
                      (this.receivedThirdPartyCookiesNotification ||
                        !G.POST_MESSAGE_ENABLED ||
                        this.iframeHasLoaded) &&
                      this.jsonWaiting.length
                    ) {
                      var d = this.jsonWaiting.shift();
                      this.process(d), this.requestToProcess();
                    }
                    e.idSyncDisableSyncs ||
                      e.disableIdSyncs ||
                      !this.iframeHasLoaded ||
                      !this.messages.length ||
                      this.sendingMessages ||
                      (this.throttleTimerSet ||
                        ((this.throttleTimerSet = !0),
                        setTimeout(function () {
                          r.messageSendingInterval = G.POST_MESSAGE_ENABLED ? null : 150;
                        }, this.THROTTLE_START)),
                      (this.sendingMessages = !0),
                      this.sendMessages());
                  },
                  getRegionAndCheckIfChanged: function (t, i) {
                    var n = e._getField('MCAAMLH'),
                      r = t.d_region || t.dcs_region;
                    return (
                      n
                        ? r &&
                          (e._setFieldExpire('MCAAMLH', i),
                          e._setField('MCAAMLH', r),
                          parseInt(n, 10) !== r &&
                            ((this.regionChanged = !0),
                            this.timesRegionChanged++,
                            e._setField('MCSYNCSOP', ''),
                            e._setField('MCSYNCS', ''),
                            (n = r)))
                        : (n = r) && (e._setFieldExpire('MCAAMLH', i), e._setField('MCAAMLH', n)),
                      n || (n = ''),
                      n
                    );
                  },
                  processSyncOnPage: function (e) {
                    var t, i, n, r;
                    if ((t = e.ibs) && t instanceof Array && (i = t.length))
                      for (n = 0; n < i; n++)
                        (r = t[n]).syncOnPage && this.checkFirstPartyCookie(r, '', 'syncOnPage');
                  },
                  process: function (e) {
                    var t,
                      i,
                      n,
                      r,
                      a,
                      s = encodeURIComponent,
                      o = !1;
                    if ((t = e.ibs) && t instanceof Array && (i = t.length))
                      for (o = !0, n = 0; n < i; n++)
                        (r = t[n]),
                          (a = [
                            s('ibs'),
                            s(r.id || ''),
                            s(r.tag || ''),
                            v.encodeAndBuildRequest(r.url || [], ','),
                            s(r.ttl || ''),
                            '',
                            '',
                            r.fireURLSync ? 'true' : 'false',
                          ]),
                          r.syncOnPage ||
                            (this.canSetThirdPartyCookies
                              ? this.addMessage(a.join('|'))
                              : r.fireURLSync && this.checkFirstPartyCookie(r, a.join('|')));
                    o && this.jsonProcessed.push(e);
                  },
                  checkFirstPartyCookie: function (t, i, n) {
                    var r = 'syncOnPage' === n,
                      a = r ? 'MCSYNCSOP' : 'MCSYNCS';
                    e._readVisitor();
                    var s,
                      o,
                      l = e._getField(a),
                      d = !1,
                      c = !1,
                      u = Math.ceil(new Date().getTime() / G.MILLIS_PER_DAY);
                    l
                      ? ((s = l.split('*')),
                        (d = (o = this.pruneSyncData(s, t.id, u)).dataPresent),
                        (c = o.dataValid),
                        (d && c) || this.fireSync(r, t, i, s, a, u))
                      : ((s = []), this.fireSync(r, t, i, s, a, u));
                  },
                  pruneSyncData: function (e, t, i) {
                    var n,
                      r,
                      a,
                      s = !1,
                      o = !1;
                    for (r = 0; r < e.length; r++)
                      (n = e[r]),
                        (a = parseInt(n.split('-')[1], 10)),
                        n.match('^' + t + '-')
                          ? ((s = !0), i < a ? (o = !0) : (e.splice(r, 1), r--))
                          : i >= a && (e.splice(r, 1), r--);
                    return { dataPresent: s, dataValid: o };
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
                  fireSync: function (t, i, n, r, a, s) {
                    var o = this;
                    if (t) {
                      if ('img' === i.tag) {
                        var l,
                          d,
                          c,
                          u,
                          f = i.url,
                          g = e.loadSSL ? 'https:' : 'http:';
                        for (l = 0, d = f.length; l < d; l++) {
                          (c = f[l]), (u = /^\/\//.test(c));
                          var m = new Image();
                          m.addEventListener(
                            'load',
                            (function (t, i, n, r) {
                              return function () {
                                (o.onPagePixels[t] = null), e._readVisitor();
                                var s,
                                  c,
                                  u,
                                  f,
                                  l = e._getField(a),
                                  d = [];
                                if (l)
                                  for (c = 0, u = (s = l.split('*')).length; c < u; c++)
                                    (f = s[c]).match('^' + i.id + '-') || d.push(f);
                                o.setSyncTrackingData(d, i, n, r);
                              };
                            })(this.onPagePixels.length, i, a, s)
                          ),
                            (m.src = (u ? g : '') + c),
                            this.onPagePixels.push(m);
                        }
                      }
                    } else this.addMessage(n), this.setSyncTrackingData(r, i, a, s);
                  },
                  addMessage: function (t) {
                    var n = encodeURIComponent(
                      e._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                    );
                    this.messages.push((G.POST_MESSAGE_ENABLED ? '' : n) + t);
                  },
                  setSyncTrackingData: function (t, i, n, r) {
                    t.push(i.id + '-' + (r + Math.ceil(i.ttl / 60 / 24))),
                      this.manageSyncsSize(t),
                      e._setField(n, t.join('*'));
                  },
                  sendMessages: function () {
                    var e,
                      t = this,
                      i = '',
                      n = encodeURIComponent;
                    this.regionChanged &&
                      ((i = n('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                      this.messages.length
                        ? G.POST_MESSAGE_ENABLED
                          ? ((e = i + n('---destpub-combined---') + this.messages.join('%01')),
                            this.postMessage(e),
                            (this.messages = []),
                            (this.sendingMessages = !1))
                          : ((e = this.messages.shift()),
                            this.postMessage(i + e),
                            setTimeout(function () {
                              t.sendMessages();
                            }, this.messageSendingInterval))
                        : (this.sendingMessages = !1);
                  },
                  postMessage: function (e) {
                    U_postMessage(e, this.url, this.iframe.contentWindow),
                      this.messagesPosted.push(e);
                  },
                  receiveMessage: function (e) {
                    var t,
                      i = /^---destpub-to-parent---/;
                    'string' == typeof e &&
                      i.test(e) &&
                      ('canSetThirdPartyCookies' === (t = e.replace(i, '').split('|'))[0] &&
                        ((this.canSetThirdPartyCookies = 'true' === t[1]),
                        (this.receivedThirdPartyCookiesNotification = !0),
                        this.requestToProcess()),
                      this.messagesReceived.push(e));
                  },
                  processIDCallData: function (n) {
                    (null == this.url ||
                      (n.subdomain && 'nosubdomainreturned' === this.subdomain)) &&
                      ('string' == typeof e._subdomain && e._subdomain.length
                        ? (this.subdomain = e._subdomain)
                        : (this.subdomain = n.subdomain || ''),
                      (this.url = this.getUrl())),
                      n.ibs instanceof Array && n.ibs.length && (this.doAttachIframe = !0),
                      this.readyToAttachIframe() &&
                        (e.idSyncAttachIframeOnWindowLoad
                          ? (t.windowLoaded ||
                              'complete' === i.readyState ||
                              'loaded' === i.readyState) &&
                            this.attachIframe()
                          : this.attachIframeASAP()),
                      'function' == typeof e.idSyncIDCallResult
                        ? e.idSyncIDCallResult(n)
                        : this.requestToProcess(n),
                      'function' == typeof e.idSyncAfterIDCallResult &&
                        e.idSyncAfterIDCallResult(n);
                  },
                  canMakeSyncIDCall: function (t, i) {
                    return e._forceSyncIDCall || !t || i - t > G.DAYS_BETWEEN_SYNC_ID_CALLS;
                  },
                  attachIframeASAP: function () {
                    var t = this;
                    !(function e () {
                      t.startedAttachingIframe || (i.body ? t.attachIframe() : setTimeout(e, 30));
                    })();
                  },
                };
              })(d, u);
              (d._destinationPublishing = b), (d.timeoutMetricsLog = []);
              var T = {
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
                    case p:
                      !1 === t
                        ? !0 !== this.AnalyticsIDCallTimedOut &&
                          (this.AnalyticsIDCallTimedOut = !1)
                        : (this.AnalyticsIDCallTimedOut = t);
                      break;
                    case S:
                      !1 === t
                        ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1)
                        : (this.AAMIDCallTimedOut = t);
                  }
                },
              };
              (d.isClientSideMarketingCloudVisitorID = function () {
                return T.isClientSideMarketingCloudVisitorID;
              }),
                (d.MCIDCallTimedOut = function () {
                  return T.MCIDCallTimedOut;
                }),
                (d.AnalyticsIDCallTimedOut = function () {
                  return T.AnalyticsIDCallTimedOut;
                }),
                (d.AAMIDCallTimedOut = function () {
                  return T.AAMIDCallTimedOut;
                }),
                (d.idSyncGetOnPageSyncInfo = function () {
                  return d._readVisitor(), d._getField('MCSYNCSOP');
                }),
                (d.idSyncByURL = function (e) {
                  var t = (function (e) {
                    var t = e.minutesToLive,
                      i = '';
                    return (
                      (d.idSyncDisableSyncs || d.disableIdSyncs) &&
                        (i = i || 'Error: id syncs have been disabled'),
                      ('string' == typeof e.dpid && e.dpid.length) ||
                        (i = i || 'Error: config.dpid is empty'),
                      ('string' == typeof e.url && e.url.length) ||
                        (i = i || 'Error: config.url is empty'),
                      void 0 === t
                        ? (t = 20160)
                        : ((t = parseInt(t, 10)),
                          (isNaN(t) || t <= 0) &&
                            (i =
                              i || 'Error: config.minutesToLive needs to be a positive number')),
                      { error: i, ttl: t }
                    );
                  })(e || {});
                  if (t.error) return t.error;
                  var i,
                    n,
                    r = e.url,
                    a = encodeURIComponent,
                    s = b;
                  return (
                    (r = r.replace(/^https:/, '').replace(/^http:/, '')),
                    (i = v.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                    (n = ['ibs', a(e.dpid), 'img', a(r), t.ttl, '', i]),
                    s.addMessage(n.join('|')),
                    s.requestToProcess(),
                    'Successfully queued'
                  );
                }),
                (d.idSyncByDataSource = function (e) {
                  return e === Object(e) && 'string' == typeof e.dpuuid && e.dpuuid.length
                    ? ((e.url = '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                      d.idSyncByURL(e))
                    : 'Error: config or config.dpuuid is empty';
                }),
                (d.publishDestinations = function (e, t, i) {
                  if (
                    ((i = 'function' == typeof i ? i : function () {}),
                    'string' == typeof e && e.length)
                  )
                    if (t instanceof Array && t.length) {
                      var n = b;
                      if (n.readyToAttachIframePreliminary()) {
                        var r = !1;
                        t.forEach(function (e) {
                          'string' == typeof e && e.length && (n.addMessage(e), (r = !0));
                        }),
                          r
                            ? n.iframe
                              ? (i({
                                  message:
                                    'The destination publishing iframe is already attached and loaded.',
                                }),
                                n.requestToProcess())
                              : !d.subdomain && d._getField(m)
                              ? ((n.subdomain = e),
                                (n.doAttachIframe = !0),
                                (n.url = n.getUrl()),
                                n.readyToAttachIframe()
                                  ? (n.iframeLoadedCallbacks.push(function (e) {
                                      i({
                                        message:
                                          'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                                          (e.message || 'no result'),
                                      });
                                    }),
                                    n.attachIframe())
                                  : i({
                                      error:
                                        'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                                    }))
                              : n.iframeLoadedCallbacks.push(function (e) {
                                  i({
                                    message:
                                      'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
                                      (e.message || 'no result'),
                                  });
                                })
                            : i({ error: 'None of the messages are populated strings.' });
                      } else
                        i({
                          error:
                            'The destination publishing iframe is disabled in the Visitor library.',
                        });
                    } else i({ error: 'messages is not a populated array.' });
                  else i({ error: 'subdomain is not a populated string.' });
                }),
                (d._getCookieVersion = function (e) {
                  e = e || d.cookieRead(d.cookieName);
                  var t = G.VERSION_REGEX.exec(e);
                  return t && t.length > 1 ? t[1] : null;
                }),
                (d._resetAmcvCookie = function (e) {
                  var t = d._getCookieVersion();
                  (t && !x_isLessThan(t, e)) || y.removeCookie(d.cookieName);
                }),
                (d.setAsCoopSafe = function () {
                  g = !0;
                }),
                (d.setAsCoopUnsafe = function () {
                  g = !1;
                }),
                (d.init = function () {
                  !(function () {
                    var e = null;
                    if (t && 'object' == typeof t) {
                      for (var i in ((d.configs = Object.create(null)), t))
                        A(i) && ((e = y.normalizeBoolean(t[i])), (d[i] = e), (d.configs[i] = e));
                      (d.idSyncContainerID = d.idSyncContainerID || 0),
                        (g =
                          'boolean' == typeof d.isCoopSafe
                            ? d.isCoopSafe
                            : y.parseBoolean(d.isCoopSafe)),
                        d.resetBeforeVersion && d._resetAmcvCookie(d.resetBeforeVersion),
                        d._attemptToPopulateIdsFromUrl(),
                        d._attemptToPopulateSdidFromUrl(),
                        d._readVisitor();
                      var n = d._getField(_),
                        r = Math.ceil(new Date().getTime() / G.MILLIS_PER_DAY);
                      d.idSyncDisableSyncs ||
                        d.disableIdSyncs ||
                        !b.canMakeSyncIDCall(n, r) ||
                        (d._setFieldExpire(I, -1), d._setField(_, r)),
                        d.getMarketingCloudVisitorID(),
                        d.getAudienceManagerLocationHint(),
                        d.getAudienceManagerBlob(),
                        d._mergeServerState(d.serverState);
                    } else d._attemptToPopulateIdsFromUrl(), d._attemptToPopulateSdidFromUrl();
                  })(),
                    (function () {
                      if (!d.idSyncDisableSyncs && !d.disableIdSyncs) {
                        b.checkDPIframeSrc();
                        c.addEventListener('load', function () {
                          (u.windowLoaded = !0),
                            (function () {
                              var e = b;
                              e.readyToAttachIframe() && e.attachIframe();
                            })();
                        });
                        try {
                          U_receiveMessage(function (e) {
                            b.receiveMessage(e.data);
                          }, b.iframeHost);
                        } catch (e) {}
                      }
                    })(),
                    d.whitelistIframeDomains &&
                      G.POST_MESSAGE_ENABLED &&
                      ((d.whitelistIframeDomains =
                        d.whitelistIframeDomains instanceof Array
                          ? d.whitelistIframeDomains
                          : [d.whitelistIframeDomains]),
                      d.whitelistIframeDomains.forEach(function (t) {
                        var i = new k(e, t),
                          n = V(d, i);
                        U_receiveMessage(n, t);
                      }));
                });
            };
          return (
            (W.getInstance = function (e, t) {
              if (!e) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
              e.indexOf('@') < 0 && (e += '@AdobeOrg');
              var i = (function () {
                var t = a.s_c_il;
                if (t)
                  for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (n && 'Visitor' === n._c && n.marketingCloudOrgID === e) return n;
                  }
              })();
              if (i) return i;
              var r = e.split('').reverse().join(''),
                s = new W(e, null, r);
              t === Object(t) && t.cookieDomain && (s.cookieDomain = t.cookieDomain),
                a.s_c_il.splice(--a.s_c_in, 1);
              var o = v.getIeVersion();
              if ('number' == typeof o && o < 10)
                return s._helpers.replaceMethodsWithFunction(s, function () {});
              var l =
                (function () {
                  try {
                    return a.self !== a.parent;
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
                })(s) &&
                a.parent
                  ? new E(e, t, s, a.parent)
                  : new W(e, t, r);
              return (s = null), l.init(), l;
            }),
            (function () {
              function e () {
                W.windowLoaded = !0;
              }
              a.addEventListener
                ? a.addEventListener('load', e)
                : a.attachEvent && a.attachEvent('onload', e),
                (W.codeLoadEnd = new Date().getTime());
            })(),
            (W.config = X),
            (a.Visitor = W),
            W
          );
        })(),
        $___var_6225c3501733bcb3 =
          document.location.host.indexOf('loginprodx.att.net') > -1 ||
          document.location.host.indexOf('att.com') > -1;
      e = $___var_db26360ec8dc555b;
      disableAudienceManager = $___var_6225c3501733bcb3;
      if (disableAudienceManager)
        var visitor = Visitor.getInstance('55633F7A534535110A490D44@AdobeOrg', {
          trackingServer: 'metrics.att.com',
          trackingServerSecure: 'smetrics.att.com',
          overwriteCrossDomainMCIDAndAID: !0,
          disableIdSyncs: !0,
          idSyncDisableSyncs: !0,
        });
      else
        var visitor = Visitor.getInstance('55633F7A534535110A490D44@AdobeOrg', {
          trackingServer: 'metrics.att.com',
          trackingServerSecure: 'smetrics.att.com',
          overwriteCrossDomainMCIDAndAID: !0,
        });
      function $___var_8ddd1289f2af6f9e (e, t) {
        var n,
          c = 'IE',
          d = document.createElement('B'),
          i = document.documentElement;
        return (
          e && ((c += ' ' + e), t && (c = t + ' ' + c)),
          (d.innerHTML = '<!--[if ' + c + ']><b id="iecctest"></b><![endif]-->'),
          i.appendChild(d),
          (n = !!document.getElementById('iecctest')),
          i.removeChild(d),
          n
        );
      }
      !(function (a) {
        function b (a, b) {
          return function () {
            a.apply(b, arguments);
          };
        }
        function c (a) {
          if ('object' != typeof this) throw new TypeError('Promises must be constructed via new');
          if ('function' != typeof a) throw new TypeError('not a function');
          (this._state = null),
            (this._value = null),
            (this._deferreds = []),
            i(a, b(e, this), b(f, this));
        }
        function d (a) {
          var b = this;
          return null === this._state
            ? void this._deferreds.push(a)
            : void k(function () {
                var c = b._state ? a.onFulfilled : a.onRejected;
                if (null !== c) {
                  var d;
                  try {
                    d = c(b._value);
                  } catch (e) {
                    return void a.reject(e);
                  }
                  a.resolve(d);
                } else (b._state ? a.resolve : a.reject)(b._value);
              });
        }
        function e (a) {
          try {
            if (a === this) throw new TypeError('A promise cannot be resolved with itself.');
            if (a && ('object' == typeof a || 'function' == typeof a)) {
              var c = a.then;
              if ('function' == typeof c) return void i(b(c, a), b(e, this), b(f, this));
            }
            (this._state = !0), (this._value = a), g.call(this);
          } catch (d) {
            f.call(this, d);
          }
        }
        function f (a) {
          (this._state = !1), (this._value = a), g.call(this);
        }
        function g () {
          for (var a = 0, b = this._deferreds.length; b > a; a++) d.call(this, this._deferreds[a]);
          this._deferreds = null;
        }
        function i (a, b, c) {
          var d = !1;
          try {
            a(
              function (a) {
                d || ((d = !0), b(a));
              },
              function (a) {
                d || ((d = !0), c(a));
              }
            );
          } catch (e) {
            if (d) return;
            (d = !0), c(e);
          }
        }
        var j = setTimeout,
          k =
            ('function' == typeof setImmediate && setImmediate) ||
            function (a) {
              j(a, 1);
            },
          l =
            Array.isArray ||
            function (a) {
              return '[object Array]' === Object.prototype.toString.call(a);
            };
        (c.prototype.catch = function (a) {
          return this.then(null, a);
        }),
          (c.prototype.then = function (a, b) {
            var e = this;
            return new c(function (c, f) {
              d.call(
                e,
                new (function (a, b, c, d) {
                  (this.onFulfilled = 'function' == typeof a ? a : null),
                    (this.onRejected = 'function' == typeof b ? b : null),
                    (this.resolve = c),
                    (this.reject = d);
                })(a, b, c, f)
              );
            });
          }),
          (c.all = function () {
            var a = Array.prototype.slice.call(
              1 === arguments.length && l(arguments[0]) ? arguments[0] : arguments
            );
            return new c(function (b, c) {
              function d (f, g) {
                try {
                  if (g && ('object' == typeof g || 'function' == typeof g)) {
                    var h = g.then;
                    if ('function' == typeof h)
                      return void h.call(
                        g,
                        function (a) {
                          d(f, a);
                        },
                        c
                      );
                  }
                  (a[f] = g), 0 == --e && b(a);
                } catch (i) {
                  c(i);
                }
              }
              if (0 === a.length) return b([]);
              for (var e = a.length, f = 0; f < a.length; f++) d(f, a[f]);
            });
          }),
          (c.resolve = function (a) {
            return a && 'object' == typeof a && a.constructor === c
              ? a
              : new c(function (b) {
                  b(a);
                });
          }),
          (c.reject = function (a) {
            return new c(function (b, c) {
              c(a);
            });
          }),
          (c.race = function (a) {
            return new c(function (b, c) {
              for (var d = 0, e = a.length; e > d; d++) a[d].then(b, c);
            });
          }),
          (c._setImmediateFn = function (a) {
            k = a;
          }),
          'undefined' != typeof module && module.exports
            ? (module.exports = c)
            : a.Promise || (a.Promise = c);
      })(this),
        (function () {
          if ('function' == typeof window.CustomEvent) return !1;
          function CustomEvent (event, params) {
            params = params || { bubbles: !1, cancelable: !1, detail: void 0 };
            var evt = null;
            return (
              void 0 !== document.createEvent &&
                (evt = document.createEvent('CustomEvent')).initCustomEvent(
                  event,
                  params.bubbles,
                  params.cancelable,
                  params.detail
                ),
              evt
            );
          }
          (CustomEvent.prototype = window.Event.prototype), (window.CustomEvent = CustomEvent);
        })(),
        'function' != typeof Object.assign &&
          Object.defineProperty(Object, 'assign', {
            value: function (target, varArgs) {
              'use strict';
              if (null == target)
                throw new TypeError('Cannot convert undefined or null to object');
              for (var to = Object(target), index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (null != nextSource)
                  for (var nextKey in nextSource)
                    Object.prototype.hasOwnProperty.call(nextSource, nextKey) &&
                      (to[nextKey] = nextSource[nextKey]);
              }
              return to;
            },
            writable: !0,
            configurable: !0,
          });
      var $___var_6ea5f927a3d9144c = {
        placeholder: !0,
        disableAutoPageLoad: function () {
          console.info('edmContainerHeader:: auto page load is disabled by application!!!'),
            DataMappingInterface.updateLocalStorage('_ipld', !0, !1);
        },
        resetcache: !0,
        addDataLayerItem: function (attribute, value) {
          console.info('dummyFramework call for addDataLayerItem...'),
            this.pushToTempHold('a', { attr: attribute, value: value });
        },
        getDataLayerItem: function (attribute, index) {
          console.info('dummyFramework call for getDataLayerItem...');
          for (
            var items =
                'undefined' !== localStorage.getItem('_dmnahold') &&
                null !== localStorage.getItem('_dmnahold')
                  ? JSON.parse(localStorage.getItem('_dmnahold')).data
                  : [],
              collection = [],
              idx = 0,
              i = 0;
            i < items.length;
            i++
          ) {
            var item = items[i];
            if ('a' == (void 0 !== item.method ? item.method : '') && item.attr == attribute)
              if (void 0 === index) collection.push(item.value);
              else if (idx++ == index) return item.value;
          }
          return void 0 === index ? collection : null;
        },
        clearDataLayerItems: function (attribute) {
          console.info('dummyFramework call for clearDataLayerItems...');
          for (
            var items =
                'undefined' !== localStorage.getItem('_dmnahold') &&
                null !== localStorage.getItem('_dmnahold')
                  ? JSON.parse(localStorage.getItem('_dmnahold')).data
                  : [],
              i = items.length;
            i;

          ) {
            var item = items[--i];
            'a' == (void 0 !== item.method ? item.method : '') &&
              item.attr === attribute &&
              items.splice(i, 1);
          }
          DataMappingInterface.updateLocalStorage('_dmnahold', items, !0);
        },
        setMappingUrls: function (data) {
          void 0 === data.mappingurl &&
            void 0 !== DataMappingInterface.eventmapurl &&
            DataMappingInterface.eventmapurl != DataMappingInterface.eventmapdefaulturl &&
            (data.mappingurl = DataMappingInterface.eventmapurl),
            void 0 === data.eddurl &&
              void 0 !== DataMappingInterface.eddurl &&
              DataMappingInterface.eddurl != DataMappingInterface.edddefaulturl &&
              (data.eddurl = DataMappingInterface.eddurl);
        },
        customEventNotification: function (data, currentscope) {
          console.info('dummyFramework call for customevent...'),
            this.setMappingUrls(data),
            this.pushToTempHold('c', data, currentscope);
        },
        directiveInvocation: function (data, currentscope) {
          console.info('dummyFramework call for directive...'),
            this.setMappingUrls(data),
            this.pushToTempHold('d', data, currentscope);
        },
        init: function (data) {
          console.info('dummyFramework call for init...'),
            this.setMappingUrls(data),
            this.pushToTempHold('i', data);
        },
        isObjectEmpty: function (inputobject) {
          var key;
          for (key in inputobject) return !1;
          return !0;
        },
        updateLocalStorage: function (name, data, isarray) {
          isarray
            ? localStorage.setItem(name, JSON.stringify({ data: data }))
            : localStorage.setItem(name, data);
        },
        pushToTempHold: function (method, data, currentScope) {
          try {
            return (
              console.info(
                'edmContainerHeader: event being held for data manager...' + data.eventAction
              ),
              void 0 !== currentScope && (data.scopeid = currentScope.$id),
              DataMappingInterface.resetcache &&
                (localStorage.removeItem('_dmnahold'), (DataMappingInterface.resetcache = !1)),
              (this.tempHold =
                'undefined' !== localStorage.getItem('_dmnahold') &&
                null !== localStorage.getItem('_dmnahold')
                  ? JSON.parse(localStorage.getItem('_dmnahold')).data
                  : []),
              DataMappingInterface.isObjectEmpty(this.tempHold)
                ? (this.tempHold[0] = data)
                : (this.tempHold[this.tempHold.length] = data),
              (data.method = method),
              DataMappingInterface.updateLocalStorage('_dmnahold', this.tempHold, !0),
              !0
            );
          } catch (e) {
            return (
              console.info(
                'edmContainerHeader:: error happened during DMF placeholder initialization ...'
              ),
              !1
            );
          }
        },
      };
      DataMappingInterface = $___var_6ea5f927a3d9144c;
      !(function () {
        function getQueryStringParameterValue (params, name) {
          var q = params.match(new RegExp('[?&]' + name + '=([^&#]*)'));
          return q && q[1];
        }
        window.addEventListener('DETM_DTV_TRACK', function (e) {
          var isLinkClick = !1;
          if (void 0 !== e.detail && void 0 !== e.detail['s-object']) {
            for (
              var params = (function (raw) {
                  for (
                    var parameters = [],
                      keys = [
                        { attr: 'purchaseID', prop: 'page.attributes.directvOrderId' },
                        { attr: 'v10', prop: 'page.pageInfo.flowCode' },
                        { attr: 'mid', prop: 'page.attributes.directvMID' },
                        { attr: 'pageName', prop: 'page.attributes.directvPageName' },
                        { attr: 'pe', prop: 'linkType' },
                      ],
                      i = 0;
                    i < keys.length;
                    i++
                  ) {
                    var value = getQueryStringParameterValue(raw, keys[i].attr);
                    null != value && parameters.push({ prop: keys[i].prop, value: value });
                  }
                  return parameters;
                })(unescape(e.detail['s-object'])),
                json = {
                  eventAction: 'pageLoad',
                  eventCode: 'intercepted DTV page load',
                  eddsupported: !1,
                },
                dataset = {},
                i = 0;
              i < params.length;
              i++
            )
              'linkType' == params[i].prop
                ? (isLinkClick = !0)
                : (dataset[params[i].prop] = params[i].value);
            if (
              ((json.dataset = dataset),
              (json.dataset['page.location.url'] = window.location.href),
              isLinkClick)
            )
              return (
                (json.eventAction = 'linkClick'),
                void (json.eventCode = 'intercepted DTV link click')
              );
            DataMappingInterface.disableAutoPageLoad(), DataMappingInterface.init(json);
          }
          console.log('detmScriptLoader - intercepted a DTV track request for a page view');
        }),
          window.addEventListener('DETM_DTV_MOBILE_TRACK', function (e) {
            var isLinkClick = !1,
              json = null;
            try {
              json = JSON.parse(unescape(e.detail));
            } catch (e) {
              console.log(
                'detmScriptLoader - could not deserialize reporting data for DTV mobile track request'
              );
            }
            if (null !== json) {
              for (
                var params = (function (json) {
                    for (
                      var parameters = [],
                        keys = [
                          { attr: 'purchaseID', prop: 'page.attributes.directvOrderId' },
                          { attr: 'eVar10', prop: 'page.pageInfo.flowCode' },
                          { attr: 'mid', prop: 'page.attributes.directvMID' },
                          { attr: 'pageName', prop: 'page.attributes.directvPageName' },
                          { attr: 'pe', prop: 'linkType' },
                        ],
                        i = 0;
                      i < keys.length;
                      i++
                    ) {
                      var name = keys[i].attr,
                        value = void 0 !== json[name] ? json[name] : null;
                      null != value && parameters.push({ prop: keys[i].prop, value: value });
                    }
                    return parameters;
                  })(json),
                  dataset =
                    ((json = {
                      eventAction: 'pageLoad',
                      eventCode: 'intercepted DTV page load',
                      eddsupported: !1,
                    }),
                    {}),
                  i = 0;
                i < params.length;
                i++
              )
                'linkType' == params[i].prop
                  ? (isLinkClick = !0)
                  : (dataset[params[i].prop] = params[i].value);
              if (
                ((json.dataset = dataset),
                (json.dataset['page.location.url'] = window.location.href),
                isLinkClick)
              )
                return (
                  (json.eventAction = 'linkClick'),
                  void (json.eventCode = 'intercepted DTV link click')
                );
              DataMappingInterface.disableAutoPageLoad(), DataMappingInterface.init(json);
            }
            console.log(
              'detmScriptLoader - intercepted a DTV mobile track request for a page view'
            );
          });
      })();
      var $___var_984f9dd0090bf166 = 'detm-tag-notification';
      detm_tag_notification_key = $___var_984f9dd0090bf166;
      sessionStorage.removeItem(detm_tag_notification_key),
        window.addEventListener('TagNotifier', function (e) {
          var changed = !1,
            state = null,
            tags = null;
          void 0 !== e.detail &&
            void 0 !== e.detail.state &&
            !1 === (state = e.detail.state) &&
            void 0 !== e.detail.tags &&
            (tags = e.detail.tags);
          var config = sessionStorage.getItem(detm_tag_notification_key);
          null !== config
            ? (config = JSON.parse(config)).state != state && (changed = !0)
            : (changed = !0),
            !0 === changed &&
              null !== state &&
              ((config = { state: state, tags: [] }),
              0 == state && null != tags && (config.tags = tags),
              (config = JSON.stringify(config)),
              sessionStorage.setItem(detm_tag_notification_key, config));
        });
      var $___var_44f2eb0daec48670 = 'SSAFLegacyMode';
      legacyModeKey = $___var_44f2eb0daec48670;
      if (
        ((function () {
          const $___old_a7bf32084df4a1fd = {}.constructor.getOwnPropertyDescriptor(
            window,
            'sessionStorage'
          );
          try {
            if ($___old_a7bf32084df4a1fd)
              ({}.constructor.defineProperty(
                window,
                'sessionStorage',
                $___stub_3ac875f7196a9c3f.sessionStorage
              ));
            return function () {
              var lm = sessionStorage.getItem(legacyModeKey);
              /(.*ssaflegacymode=1)/.test(location.href)
                ? '1' != lm && sessionStorage.setItem(legacyModeKey, '1')
                : /(.*ssaflegacymode=2)/.test(location.href)
                ? '2' != lm && sessionStorage.setItem(legacyModeKey, '2')
                : /(.*ssaflegacymode=3)/.test(location.href)
                ? '3' != lm && sessionStorage.setItem(legacyModeKey, '3')
                : /(.*ssaflegacymode=4)/.test(location.href)
                ? '4' != lm && sessionStorage.setItem(legacyModeKey, '4')
                : /(.*ssaflegacymode)/.test(location.href) &&
                  sessionStorage.removeItem(legacyModeKey);
            }.apply(this, arguments);
          } finally {
            if ($___old_a7bf32084df4a1fd)
              ({}.constructor.defineProperty(window, 'sessionStorage', $___old_a7bf32084df4a1fd));
          }
        })(),
        (function () {
          var queryAdobe = /(.*dtmScriptOwner=adobe)/.test(location.href),
            queryDetm = /(.*dtmScriptOwner=detm)/.test(location.href),
            dtmScriptOwner = queryAdobe ? 'adobe' : queryDetm ? 'detm' : '';
          if ('' != dtmScriptOwner) {
            var value = localStorage.getItem('detm-assets-owner');
            value != dtmScriptOwner &&
              ((value = dtmScriptOwner), localStorage.setItem('detm-assets-owner', value));
          }
        })(),
        (detmDisabled = /(.*detmDisabled)/.test(location.href)),
        (function () {
          var restrictions = location.href.match('[?&]detmTagRestrictions=([^&#]*)');
          if (restrictions && void 0 !== restrictions.length && restrictions.length > 0) {
            var key = 'detm-tag-restrictions';
            if ('' == restrictions[1]) sessionStorage.removeItem(key);
            else {
              var tags = unescape(restrictions[1]),
                tokens = tags.split('|');
              if (tokens && tokens.length > 0) {
                var value = sessionStorage.getItem(key);
                value != tags && ((value = tags), sessionStorage.setItem(key, value));
              }
            }
          }
        })(),
        void 0 === detmScriptLoader.triggers ||
          void 0 === detmScriptLoader.restrictions ||
          void 0 === detmScriptLoader.forceasync)
      ) {
        (detmScriptLoader.triggers = { detm: '', dtm: '' }),
          (detmScriptLoader.restrictions = ''),
          (detmScriptLoader.forceasync = '');
        for (
          var scripts = document.getElementsByTagName('script'), i = 0;
          i < scripts.length;
          i++
        ) {
          var script = scripts[i];
          if (void 0 !== script.dataset) {
            var src = script.src.toLocaleLowerCase();
            if (
              src.indexOf('detm-container-hdr.js') > -1 ||
              src.indexOf('detm-container-hdr.unmin.js') > -1
            ) {
              (detmScriptLoader.triggers.detm = script.dataset.trigger || ''),
                (detmScriptLoader.triggers.dtm =
                  script.dataset.triggerDtm || script.dataset['trigger.dtm'] || ''),
                (detmScriptLoader.restrictions = script.dataset.restrictions || ''),
                (detmScriptLoader.forceasync = script.dataset.forceasync || '');
              break;
            }
          }
        }
      }
      function $___var_68daac195abadebb (component) {
        this.component = component;
        var detm_satellite_timer_id = null,
          check_interval = 20,
          elapsed_time = 0,
          time_is_exceeded = new Promise(function (resolve) {
            setTimeout(function () {
              clearInterval(detm_satellite_timer_id), resolve(!1);
            }, 3000);
          }),
          satellite_is_ready = new Promise(function (resolve) {
            detm_satellite_timer_id = setInterval(function () {
              switch (((elapsed_time += check_interval), this.component)) {
                case detmScriptLoader.component.SATELLITELIB:
                  'undefined' != typeof _satellite &&
                    (clearInterval(detm_satellite_timer_id),
                    console.info(
                      'detm-container-hdr: _satellite is defined after ' + elapsed_time + 'ms'
                    ),
                    resolve(!0));
                  break;
                case detmScriptLoader.component.THIRDPARTY:
                  'undefined' != typeof gtag &&
                    (clearInterval(detm_satellite_timer_id),
                    console.info(
                      'detm-container-hdr: gtag is defined after ' + elapsed_time + 'ms'
                    ),
                    resolve(!0));
                  break;
                case detmScriptLoader.component.ENGAGE:
                  'undefined' != typeof opinionLabCondition &&
                    (clearInterval(detm_satellite_timer_id),
                    console.info(
                      'detm-container-hdr: opinionLabCondition is defined after ' +
                        elapsed_time +
                        'ms'
                    ),
                    resolve(!0));
                  break;
                case detmScriptLoader.component.DETM_ATOM:
                  'undefined' != typeof taglibraryconfig &&
                    (clearInterval(detm_satellite_timer_id),
                    console.info(
                      'detm-container-hdr: taglibraryconfig is defined after ' +
                        elapsed_time +
                        'ms'
                    ),
                    resolve(!0));
              }
            }, check_interval);
          });
        Promise.race([time_is_exceeded, satellite_is_ready]).then(function (value) {
          const $___old_62d1ab0772ada4d0 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'sessionStorage'
          );
          try {
            if ($___old_62d1ab0772ada4d0)
              ({}.constructor.defineProperty(
                window,
                'sessionStorage',
                $___stub_3ac875f7196a9c3f.sessionStorage
              ));
            return function () {
              var evt = new CustomEvent('DTM_SATELLITE_STATE', { detail: { exists: value } });
              document.dispatchEvent(evt);
            }.apply(this, arguments);
          } finally {
            if ($___old_62d1ab0772ada4d0)
              ({}.constructor.defineProperty(window, 'sessionStorage', $___old_62d1ab0772ada4d0));
          }
        });
      }
      function $___var_4d2cc039cb985231 () {
        (this.modules = []),
          (this.push = function (name, method) {
            var module = this.get(name);
            return (
              null == module &&
                ((module = { name: name, method: method }), this.modules.push(module)),
              module
            );
          }),
          (this.get = function (name) {
            for (var item in this.modules) {
              var module = this.modules[item];
              if (name === module.name) return module;
            }
            return null;
          }),
          (this.execute = function (name, params) {
            var module = this.get(name);
            return null != module && (module.method.apply(window, [params]), !0);
          });
      }
      'undefined' == typeof detmScriptExecutor && (detmScriptExecutor = new scriptExecutor());
      var $___var_12b0718e32c93c37 = '',
        $___var_f7e9f6f4254df088 = !1;
      filesadded = $___var_12b0718e32c93c37;
      monecontwatched = $___var_f7e9f6f4254df088;
      function $___var_866d6902431cb2ac (filename, filetype) {
        return -1 == filesadded.indexOf('[' + filename + ']')
          ? new Promise(function (resolve, reject) {
              if ('js' == filetype)
                ((script = document.createElement('script')).src = filename),
                  (script.defer = !0),
                  (script.type = 'text/javascript');
              else if ('css' == filetype) {
                ((script = document.createElement('link')).href = filename),
                  (script.rel = 'stylesheet'),
                  (script.defer = !0),
                  (script.type = 'text/css');
              } else if ('div' == filetype) {
                var script;
                (script = document.createElement('div')).id = filename;
              }
              'div' !== filetype &&
                (script.addEventListener('load', function () {
                  (filesadded += '[' + filename + ']'), resolve();
                }),
                script.addEventListener('error', function (e) {
                  reject(e);
                })),
                void 0 !== script && document.body.appendChild(script);
            })
          : new Promise(function (resolve, reject) {
              resolve();
            });
      }
      function $___var_663b07ec2e494b27 (root_container) {
        var htmlElement = document.getElementById(root_container),
          script = document.createElement('div');
        (script.id = appMonetizationFtrUnitsConfig.glbFtrIdent),
          htmlElement &&
            (htmlElement.hasChildNodes()
              ? htmlElement.firstElementChild.id !== appMonetizationFtrUnitsConfig.glbFtrIdent &&
                (htmlElement.insertBefore(script, htmlElement.childNodes[0]),
                console.info(
                  'js_gb_adc :: ads intialized at the first child of root page holder!'
                ))
              : (htmlElement.appendChild(script),
                console.info('js_gb_adc :: ads appended on the root page holder!')));
      }
      function $___var_021df8902f4f24cd () {
        if (js_gb_adc) {
          var curConfig = findAccurateConfig();
          curConfig.delyedLoading
            ? ((window.monecontwatched = !0),
              window.addEventListener(
                'scroll',
                function (event) {
                  if (window.monecontwatched) {
                    var container = document.getElementById(
                      appMonetizationFtrUnitsConfig.glbFtrIdent
                    );
                    if (container) {
                      var bounding = container.getBoundingClientRect();
                      bounding.top + 100 >= 0 &&
                        bounding.left >= 0 &&
                        bounding.top <=
                          (window.innerHeight || document.documentElement.clientHeight) &&
                        ((window.monecontwatched = !1),
                        js_gb_adc.intializeTags(
                          curConfig,
                          appMonetizationFtrUnitsConfig.glbFtrIdent
                        ),
                        console.info('js_gb_adc:: viewport-in-focus oriented ads initialized!'));
                    }
                  }
                },
                !1
              ))
            : js_gb_adc.intializeTags(curConfig, appMonetizationFtrUnitsConfig.glbFtrIdent);
        }
      }
      function $___var_82c4bddb4d9eaca4 (wait_iteration, root_tag) {
        wait_iteration < 40
          ? setTimeout(function () {
              root_tag !== appMonetizationFtrUnitsConfig.gnFtrIdent &&
              root_tag !== appMonetizationFtrUnitsConfig.legacyFtrIdent &&
              document.getElementById(root_tag) &&
              'div' === document.getElementById(root_tag).nodeName.toLowerCase()
                ? (injectHtmlTag(root_tag), executeMonetizationTagInjection())
                : (root_tag !== appMonetizationFtrUnitsConfig.gnFtrIdent &&
                    root_tag !== appMonetizationFtrUnitsConfig.legacyFtrIdent) ||
                  (document.getElementById(appMonetizationFtrUnitsConfig.gnFtrIdent) &&
                  'div' ===
                    document
                      .getElementById(appMonetizationFtrUnitsConfig.gnFtrIdent)
                      .nodeName.toLowerCase() &&
                  document.getElementById(appMonetizationFtrUnitsConfig.gnFtrIdent).hasChildNodes()
                    ? (injectHtmlTag(appMonetizationFtrUnitsConfig.gnFtrIdent),
                      executeMonetizationTagInjection())
                    : document.getElementById(appMonetizationFtrUnitsConfig.legacyFtrIdent) &&
                      'div' ===
                        document
                          .getElementById(appMonetizationFtrUnitsConfig.legacyFtrIdent)
                          .nodeName.toLowerCase() &&
                      document
                        .getElementById(appMonetizationFtrUnitsConfig.legacyFtrIdent)
                        .hasChildNodes()
                    ? (injectHtmlTag(appMonetizationFtrUnitsConfig.legacyFtrIdent),
                      executeMonetizationTagInjection())
                    : injectMonetization(wait_iteration + 1, root_tag));
            }, 200)
          : console.warn(
              'js_gb_adc :: no global tag placement found, so att monetization is not intialized!'
            );
      }
      function $___var_2c5f16a8ed3c1cf9 (searchobj, searchkey) {
        var foundConfig = void 0;
        try {
          for (var key in searchobj)
            if (searchobj.hasOwnProperty(key) && searchkey.indexOf(key) >= 0) {
              foundConfig = { adkey: key, adconfig: searchobj[key] };
              break;
            }
        } catch (e) {
          console.warn('js_gb_adc :: config parsing failed...', e);
        }
        return foundConfig;
      }
      function $___var_878bb1b92628ac49 () {
        try {
          var rootconfig,
            contextpath = location.hostname + location.pathname,
            fullpath = contextpath + location.hash,
            exclusions = !1,
            subconfig = void 0;
          if (!(rootconfig = iterateANConfigObj(appMonetizationFtrUnitsConfig, contextpath)))
            return null;
          if (
            (void 0 === (subconfig = iterateANConfigObj(rootconfig.adconfig, fullpath)) &&
              (subconfig = { adkey: rootconfig.adkey, adconfig: rootconfig.adconfig.global }),
            void 0 === subconfig.adconfig.exclusions)
          )
            return subconfig.adconfig.apntagconfig;
          if (subconfig.adconfig.exclusions)
            for (var i = 0; i < subconfig.adconfig.exclusions.length; i++) {
              if (
                fullpath
                  .substring(fullpath.indexOf(subconfig.adkey) + subconfig.adkey.length)
                  .toLowerCase()
                  .indexOf(subconfig.adconfig.exclusions[i].toLowerCase()) >= 0
              ) {
                exclusions = !0;
                break;
              }
            }
          if (!exclusions) return subconfig.adconfig.apntagconfig;
        } catch (e) {
          console.warn(
            'js_gb_adc :: something went wrong in getting monetization config data...',
            e
          );
        }
        return null;
      }
      document
        .getElementsByTagName('head')[0]
        .addEventListener('DM_EVENT_PAGELOAD', function (event) {
          location.hostname.indexOf('cprodmasx.att.com') < 0 &&
            location.hostname.indexOf('prodctnxsf.att.net') < 0 &&
            location.hostname.indexOf('cprodx.att.net') < 0 &&
            loadAdsFile(
              'https://www.att.com/scripts/adobe/' +
                (detmScriptLoaderConfig.environment
                  ? detmScriptLoaderConfig.environment
                  : 'prod') +
                '/attmonetization/js/attmonetization.config.js',
              'js'
            )
              .then(function (e) {
                if (void 0 !== appMonetizationFtrUnitsConfig) {
                  var currentPageConfig = findAccurateConfig();
                  currentPageConfig
                    ? loadAdsFile(
                        appMonetizationFtrUnitsConfig.baseAdsHost + 'attmonetization.css',
                        'css'
                      )
                        .then(function (e) {
                          loadAdsFile(
                            appMonetizationFtrUnitsConfig.baseAdsHost + 'attmonetization.min.js',
                            'js'
                          )
                            .then(function (e) {
                              injectMonetization(
                                0,
                                currentPageConfig.customAdsIdent
                                  ? currentPageConfig.customAdsIdent
                                  : appMonetizationFtrUnitsConfig.gnFtrIdent
                              );
                            })
                            .catch(function (e) {
                              console.warn(
                                'js_gb_adc :: att monetization component library loading failed...',
                                e
                              );
                            });
                        })
                        .catch(function (e) {
                          console.warn(
                            'js_gb_adc :: att monetization component library loading failed...',
                            e
                          );
                        })
                    : (console.warn(
                        'js_gb_adc :: no configuration found for this page, so footer ads not activated...' +
                          location.pathname
                      ),
                      document.getElementById(appMonetizationFtrUnitsConfig.glbFtrIdent) &&
                        ((document.getElementById(
                          appMonetizationFtrUnitsConfig.glbFtrIdent
                        ).innerHTML = ''),
                        (window.js_gb_adc_loaded = !1)));
                }
              })
              .catch(function (e) {
                console.warn('js_gb_adc :: att monetization master config loading failed...', e);
              });
        }),
        document
          .getElementsByTagName('head')[0]
          .addEventListener('DM_EVENT_PAGELOAD', function (event) {
            location.hostname.indexOf('cprodmasx.att.com') < 0 &&
              location.hostname.indexOf('prodctnxsf.att.net') < 0 &&
              location.hostname.indexOf('cprodx.att.net') < 0 &&
              ('stage' ===
              (detmScriptLoaderConfig.environment ? detmScriptLoaderConfig.environment : 'prod')
                ? loadAdsFile(
                    'https://signin.stage.att.com/static/ciam/en/common/js/keepAlive.js',
                    'js'
                  )
                    .then(function (e) {
                      /^(.*;)?\s*tAuthNState=true\s*/.test(document.cookie) &&
                        /^(.*;)?\s*cAuthNState=\s*/.test(document.cookie) &&
                        refreshTGuardSession();
                    })
                    .catch(function (e) {
                      console.warn('keepAlive failed', e);
                    })
                : loadAdsFile('https://signin.att.com/static/ciam/en/common/js/keepAlive.js', 'js')
                    .then(function (e) {
                      /^(.*;)?\s*tAuthNState=true\s*/.test(document.cookie) &&
                        /^(.*;)?\s*cAuthNState=\s*/.test(document.cookie) &&
                        refreshTGuardSession();
                    })
                    .catch(function (e) {
                      console.warn('keepAlive failed', e);
                    }));
            location.hostname.indexOf('cprodmasx.att.com') < 0 &&
              location.hostname.indexOf('prodctnxsf.att.net') < 0 &&
              location.hostname.indexOf('cprodx.att.net') < 0 &&
              location.hostname.toLowerCase().indexOf('signin.att.com') < 0 &&
              location.hostname.toLowerCase().indexOf('signin.stage.clogin.att.com') < 0 &&
              location.hostname.toLowerCase().indexOf('signin.test.clogin.att.com') < 0 &&
              location.hostname.toLowerCase().indexOf('signin.dev.clogin.att.com') < 0 &&
              location.hostname.toLowerCase().indexOf('att.com') > 0 &&
              loadAdsFile(
                detmScriptLoaderConfig.environment && 'stage' == detmScriptLoaderConfig.environment
                  ? 'https://myattqa1.stage.att.com/ui/services_co_myatt_login/1.0.0/halo-application-edm-bridge.js'
                  : 'https://www.att.com/ui/services_co_myatt_login/1.0.0/halo-application-edm-bridge.js',
                'js'
              )
                .then(function (e) {
                  console.info('Halo.C Bridge script loading is successfull!');
                })
                .catch(function (e) {
                  console.warn('Halo.C Bridge script loading failed!', e);
                });
          }),
        (detmDomainMapper = function (mappings) {
          (void 0 !== (mappings = mappings) && null != mappings) || this.clear(),
            (this.push = function (domain, url, tags, operation) {
              mappings.push({ domain: domain, url: url, tags: tags, operation: operation });
            }),
            (this.map = function (domain, attr) {
              var value = null,
                prop = 'url';
              switch (attr) {
                case detmDomainMapper.attrs.url:
                  prop = 'url';
                  break;
                case detmDomainMapper.attrs.composite:
                  prop = 'composite';
                  break;
                case detmDomainMapper.attrs.tags:
                  prop = 'tags';
              }
              for (var i = 0; i < mappings.length; i++) {
                var mapping = mappings[i];
                switch (mapping.operation) {
                  case detmDomainMapper.operations.equals:
                    domain === mapping.domain && (value = mapping[prop]);
                    break;
                  case detmDomainMapper.operations.contains:
                    domain.indexOf(mapping.domain) > -1 && (value = mapping[prop]);
                }
                if (null != value) break;
              }
              return value;
            }),
            (this.clear = function () {
              mappings = [];
            });
        }),
        (detmDomainMapper.attrs = { url: 1, composite: 2, tags: 3 }),
        (detmDomainMapper.operations = { equals: 1, contains: 2 }),
        'undefined' == typeof detmTagControls &&
          (detmTagControls = [
            {
              path: ['/shop/xpress/', '/shop/login/', '/shop/wireless/'],
              tags: {
                adobe_target_1: {
                  name: 'mbox-contents.js',
                  expires: new Date(2017, 9, 19, 15).valueOf(),
                },
                adobe_target_2: {
                  name: 'Target-main-mbox-contents',
                  expires: new Date(2017, 9, 19, 15).valueOf(),
                },
                adobe_target_3: {
                  name: 'CrazyEgg_2432',
                  expires: new Date(2017, 9, 19, 15).valueOf(),
                },
                adobe_target_4: {
                  name: 'CrazyEgg_2432_CE_DM',
                  expires: new Date(2017, 9, 19, 15).valueOf(),
                },
                adobe_target_5: {
                  name: 'CrazyEgg_6954',
                  expires: new Date(2017, 9, 19, 15).valueOf(),
                },
                adobe_target_6: {
                  name: 'CrazyEgg_6954_CE_DM',
                  expires: new Date(2017, 9, 19, 15).valueOf(),
                },
                opinion_lab_1: {
                  name: 'OpinionLab_Desktop_2Conf_CE_DM',
                  expires: new Date(2017, 9, 18, 15).valueOf(),
                },
                opinion_lab_2: {
                  name: 'OpinionLab_Desktop_2Conf',
                  expires: new Date(2017, 9, 18, 15).valueOf(),
                },
                marketing_1: {
                  name: 'eComm_Universal_Atlas_CE_DM',
                  expires: new Date(2017, 9, 20, 15).valueOf(),
                },
                marketing_2: {
                  name: 'eComm_Universal_Atlas',
                  expires: new Date(2017, 9, 20, 15).valueOf(),
                },
                marketing_3: {
                  name: 'MOB_bAccessoryGroups_RT',
                  expires: new Date(2017, 9, 20, 15).valueOf(),
                },
                foresee_1: {
                  name: 'Foresee_FailSafe_Global',
                  expires: new Date(2017, 9, 21, 15).valueOf(),
                },
                foresee_2: {
                  name: 'Foresee_FailSafe_Global_CE_DM',
                  expires: new Date(2017, 9, 21, 15).valueOf(),
                },
                foresee_3: {
                  name: 'Foresee_POC_CE_DM',
                  expires: new Date(2017, 9, 21, 15).valueOf(),
                },
                foresee_4: { name: 'Foresee_POC', expires: new Date(2017, 9, 21, 15).valueOf() },
              },
            },
          ]);
      var $___var_76caf41459b8bd74 = {
        async: !0,
        environment: 'prod',
        type: 'text/javascript',
        version: '2079',
        scripts: [
          {
            component: detmScriptLoader.component.QUANTUM,
            name: 'quantum-att.js',
            source: 'https://cdn.quantummetric.com/qscripts/{name}',
            warranted:
              (window.location.hostname.indexOf('directv.com') > -1 ||
                window.location.hostname.indexOf('att.com') > -1) &&
              -1 === window.location.href.indexOf('/tc') &&
              window.location.hostname.indexOf('myattzone.att.com') < 0 &&
              -1 === window.location.href.indexOf('/expresskiosk') &&
              !detmScriptLoader.isABS() &&
              !detmScriptLoader.isXandR(),
          },
          {
            component: detmScriptLoader.component.GOLDENEYE,
            name: 'goldeneye.js',
            source: 'https://www.att.com/scripts/goldeneye/scripts/goldeneye.js',
            warranted: (function (domain) {
              var warranted = !1;
              'object' != typeof prodconfig && 'object' != typeof stagconfig && (warranted = !0),
                !0 === warranted &&
                  ('www.att.com' == domain ||
                    'm.att.com' == domain ||
                    'www.cricketwireless.com' == domain ||
                    'www.directv.com' == domain ||
                    'att.yahoo.com' == domain ||
                    'www.att.yahoo.com' == domain ||
                    'att.net' == domain ||
                    'www.att.net' == domain ||
                    'uverse.com' == domain ||
                    'www.uverse.com' == domain ||
                    'directvnow.com' == domain ||
                    'www.directvnow.com' == domain ||
                    'mobile.directv.com' == domain ||
                    'www.mobile.directv.com' == domain ||
                    'ufix.att.com' == domain ||
                    'troubleshoot.att.com' == domain ||
                    'start.att.net' == domain ||
                    (warranted = !1));
              var renny = document.querySelector('meta[charSet].rennaissanceAEM64');
              return (
                (('object' == typeof renny && null !== renny) ||
                  window.location.hostname.toLowerCase().indexOf('signin.att.com') >= 0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.stage.clogin.att.com') >=
                    0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.test.clogin.att.com') >=
                    0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.dev.clogin.att.com') >=
                    0) &&
                  (warranted = !1),
                warranted
              );
            })(window.location.hostname),
            canrestrict: !0,
          },
          {
            component: detmScriptLoader.component.VIPR,
            name: 'vipr.js',
            source: 'https://www.att.com/scripts/goldeneye/scripts/vipr.js',
            warranted: (function () {
              var warranted = !1,
                renny = document.querySelector('meta[charSet].rennaissanceAEM64');
              return 'object' == typeof renny && null !== renny && (warranted = !0), warranted;
            })(),
          },
          {
            component: detmScriptLoader.component.ADOBETARGET,
            name: 'mbox-contents.js',
            source: 'https://www.att.com/scripts/adobe/{environment}/{name}',
            warranted:
              (window.location.hostname.indexOf('start.att.net') > -1 &&
                window.location.pathname.indexOf('/search/index.php') > -1) ||
              (0 == isIE(8) &&
                0 == window.location.href.indexOf('/prbuyflow') > -1 &&
                0 == window.location.hostname.indexOf('start.att.net') > -1 &&
                0 == window.location.hostname.toLowerCase().indexOf('signin.att.com') >= 0 &&
                0 ==
                  window.location.hostname.toLowerCase().indexOf('signin.stage.clogin.att.com') >=
                    0 &&
                0 ==
                  window.location.hostname.toLowerCase().indexOf('signin.test.clogin.att.com') >=
                    0 &&
                0 ==
                  window.location.hostname.toLowerCase().indexOf('signin.dev.clogin.att.com') >=
                    0),
            canrestrict: !0,
          },
          {
            component: detmScriptLoader.component.UC,
            name: 'ssaf-uc.js',
            source: 'https://www.att.com/scripts/ssaf_universal_client/{environment}/{name}',
            warranted: (function () {
              var warranted = !1;
              return (
                detmScriptLoader.isABS() || detmScriptLoader.isXandR() || (warranted = !0),
                warranted
              );
            })(),
          },
          {
            component: detmScriptLoader.component.DATAMANAGER,
            name: 'edmDataManager.js',
            source: '//www.att.com/scripts/adobe/{environment}/{name}',
          },
          {
            component: detmScriptLoader.component.DATADEFINITION,
            name: 'edmDataDefinition.js',
            source: '//www.att.com/scripts/adobe/{environment}/{name}',
          },
          {
            component: detmScriptLoader.component.SATELLITELIB,
            name: 'satellite library',
            source: (function (pgUrl) {
              const $___old_b7b9619e72a14f30 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              );
              try {
                if ($___old_b7b9619e72a14f30)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_3ac875f7196a9c3f.localStorage
                  ));
                return function () {
                  var domain = '//www.att.com',
                    owner = localStorage.getItem('detm-assets-owner');
                  void 0 === owner || null == owner
                    ? (owner = 'detm')
                    : 'adobe' != owner && 'detm' != owner && (owner = 'detm'),
                    'adobe' == owner && (domain = '//assets.adobedtm.com');
                  var default_mapping_composite = {
                      preamble: '',
                      path: '/8bb7555f31d461fe2aef4e2d53a11a03e7f9a04c/',
                      file: 'satelliteLib-bee1ce9b89e943a46b1dfd167adc564fe75eef37.js',
                    },
                    mappings =
                      (detmDomainMapper.operations.contains,
                      [
                        {
                          domain: 'paygonline.com',
                          composite: {
                            preamble: '',
                            path: '/8bb7555f31d461fe2aef4e2d53a11a03e7f9a04c/',
                            file: 'satelliteLib-76bf78dc6674bbd3a4d4e851c5c36135a3cc9ea7.js',
                          },
                          operation: detmDomainMapper.operations.contains,
                        },
                        {
                          domain: '/easyactivate/',
                          composite: {
                            preamble: '',
                            path: '/8bb7555f31d461fe2aef4e2d53a11a03e7f9a04c/',
                            file: 'satelliteLib-fbb4967966de28cdc2de129137985fac3edfbc59.js',
                          },
                          operation: detmDomainMapper.operations.contains,
                        },
                        {
                          domain: 'coamoffdevice',
                          composite: {
                            preamble: '',
                            path: '/8bb7555f31d461fe2aef4e2d53a11a03e7f9a04c/',
                            file: 'satelliteLib-fbb4967966de28cdc2de129137985fac3edfbc59.js',
                          },
                          operation: detmDomainMapper.operations.contains,
                        },
                      ]),
                    composite = new detmDomainMapper(mappings).map(
                      location.hostname,
                      detmDomainMapper.attrs.composite
                    );
                  return (
                    null == composite && (composite = default_mapping_composite),
                    (path = composite.path),
                    'detm' === owner &&
                      (path =
                        '/scripts/satellite/' +
                        composite.preamble +
                        '{environment}' +
                        composite.path),
                    domain + path + composite.file
                  );
                }.apply(this, arguments);
              } finally {
                if ($___old_b7b9619e72a14f30)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_b7b9619e72a14f30
                  ));
              }
            })((window.location.host, window.location.pathname)),
            warranted: (function () {
              var warranted = !0;
              return (
                (window.location.hostname.toLowerCase().indexOf('signin.att.com') >= 0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.stage.clogin.att.com') >=
                    0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.test.clogin.att.com') >=
                    0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.dev.clogin.att.com') >=
                    0) &&
                  (warranted = !1),
                warranted
              );
            })(),
            canrestrict: !0,
          },
          {
            component: detmScriptLoader.component.DETM_ADOBE,
            name: 'detm adobe modules',
            source: '//www.att.com/scripts/adobe/{environment}/detm_adobe.js',
          },
          {
            component: detmScriptLoader.component.THIRD_PARTY,
            name: 'marketing',
            source: '//www.att.com/scripts/adobe/{environment}/marketing.min.js',
            warranted: (function () {
              var warranted = !0;
              return (
                (window.location.hostname.toLowerCase().indexOf('myattzone.att.com') >= 0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.att.com') >= 0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.stage.clogin.att.com') >=
                    0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.test.clogin.att.com') >=
                    0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.dev.att.com') >= 0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.dev.clogin.att.com') >=
                    0) &&
                  (warranted = !1),
                warranted
              );
            })(),
          },
          {
            component: detmScriptLoader.component.ENGAGE,
            name: 'chat',
            source:
              '//www.att.com/scripts/adobe/{environment}/engage.min.js?build=2079-2020-11-16',
            warranted: (function () {
              var warranted = !0;
              return (
                (window.location.hostname.toLowerCase().indexOf('myattzone.att.com') >= 0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.att.com') >= 0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.stage.clogin.att.com') >=
                    0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.test.clogin.att.com') >=
                    0 ||
                  window.location.hostname.toLowerCase().indexOf('signin.dev.clogin.att.com') >=
                    0) &&
                  (warranted = !1),
                warranted
              );
            })(),
          },
        ],
        whitelist: [
          { path: ['/pmt/', '/view/', '/shop/address/', '/shop/service/'] },
          { domain: 'www.att.com', path: ['/wireless/index.html', '/internet/index.html'] },
          { domain: 'start.att.net', path: ['/'] },
          { domain: 'startuat.att.net', path: ['/'] },
          { domain: 'startuat01.att.net', path: ['/'] },
          { domain: 'startuat02.att.net', path: ['/'] },
          { domain: 'startuat03.att.net', path: ['/'] },
          { domain: 'startuat04.att.net', path: ['/'] },
          { domain: 'tst.stage.att.com', path: ['/cart/', '/checkout/'] },
          { domain: 'tst31.stage.att.com', path: ['/cart/', '/checkout/'] },
        ],
        blacklist: [],
        allowdelayedload: [{ path: ['/shopmobile/', '/shop/', '/cart/', '/checkout/'] }],
        dualmodebypass: [{ path: ['/'], timing: { eval: 'detmScriptLoader.isTimeForMode4()' } }],
      };
      detmScriptLoaderConfig = $___var_76caf41459b8bd74;
      function $___var_db5690196b4c0d8e (config) {
        const $___old_50cd46d29229c184 = {}.constructor.getOwnPropertyDescriptor(
          window,
          'sessionStorage'
        );
        try {
          if ($___old_50cd46d29229c184)
            ({}.constructor.defineProperty(
              window,
              'sessionStorage',
              $___stub_3ac875f7196a9c3f.sessionStorage
            ));
          return function () {
            var $me = this;
            (this.config = config),
              (this.scriptLoading = ''),
              (this.finished = !1),
              (this.allowDelayedLoad = !0),
              (this.loadingDetm = !1),
              (this.nometrics = !1),
              (this.legacyMode = sessionStorage.getItem(legacyModeKey)),
              null == this.legacyMode && (this.legacyMode = detmScriptLoader.legacyMode.UNKNOWN);
            var iscontrolled = function (tag) {
                for (
                  var result = !1,
                    check_group = (tag.name, void 0 !== tag.group && tag.group),
                    epoch = new Date().valueOf(),
                    i = 0;
                  i < detmTagControls.length;
                  i++
                ) {
                  var mapping = detmTagControls[i];
                  if (
                    $me.isGoverned(window.location.hostname, window.location.pathname, [mapping])
                      .confirmed
                  )
                    for (var prop in mapping.tags) {
                      var item = mapping.tags[prop];
                      if (!(epoch > item.expires)) {
                        if (item.name == tag.name) {
                          result = !0;
                          break;
                        }
                        if (check_group) {
                          var idx = prop.lastIndexOf('_');
                          if (idx >= 0)
                            if (prop.substr(0, idx) == tag.name) {
                              result = !0;
                              break;
                            }
                        }
                      }
                    }
                  if (result) break;
                }
                return result;
              },
              executeFooterEvent = new CustomEvent('detmExecuteFooter', {
                detail: { loader: this },
              });
            (this.loadAsync = !0),
              (this.restrictedTags = function () {
                const $___old_c42bc18233c3fb41 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                );
                try {
                  if ($___old_c42bc18233c3fb41)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___stub_3ac875f7196a9c3f.sessionStorage
                    ));
                  return function () {
                    var value = sessionStorage.getItem('detm-tag-restrictions');
                    return (
                      void 0 !== value &&
                        null != value &&
                        value.length > 0 &&
                        (value = value.split('|')),
                      value
                    );
                  }.apply(this, arguments);
                } finally {
                  if ($___old_c42bc18233c3fb41)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___old_c42bc18233c3fb41
                    ));
                }
              });
            var getScriptLoadTypeFromQueryString = function () {
              var queryAsync = /(.*detmScriptLoadType=async)/.test(location.href),
                querySync = /(.*detmScriptLoadType=sync)/.test(location.href);
              return queryAsync ? 'async' : querySync ? 'sync' : '';
            };
            (this.configure = function () {
              var explanation = '',
                criteria = '',
                manipulated = !1;
              window._satellite = new (function () {
                (this.notify = function () {
                  console.warn('do not use _satellite.notify()');
                }),
                  (this.pageBottom = function () {
                    console.warn('do not use _satellite.pageBottom()');
                  }),
                  (this.track = function () {
                    console.warn('do not use _satellite.track()');
                  }),
                  (this.override = function () {
                    console.warn('do not use _satellite.override()');
                  }),
                  (this.getVar = function () {
                    console.warn('do not use _satellite.getVar()');
                  }),
                  (this.setVar = function () {
                    console.warn('do not use _satellite.setVar()');
                  });
              })();
              var scriptLoadType = getScriptLoadTypeFromQueryString();
              if (
                ('' != scriptLoadType
                  ? ((explanation = 'the user has manipulated the query string'),
                    (manipulated = !0))
                  : 'undefined' != typeof detmScriptLoadType &&
                    'string' == typeof detmScriptLoadType &&
                    ((scriptLoadType = detmScriptLoadType.toLowerCase()),
                    (explanation = 'the application has overridden the default setting')),
                void 0 !== $me.config.allowdelayedload)
              ) {
                var allow = $me.isGoverned(
                  window.location.hostname,
                  window.location.pathname,
                  $me.config.allowdelayedload
                );
                ($me.allowdelayedload = allow.confirmed),
                  0 == $me.allowdelayedload &&
                    (console.log(
                      'Adobe Solutions: governance does not allow delayed load od detm components'
                    ),
                    (detmScriptLoader.triggers.detm = ''));
              }
              if (
                0 == manipulated &&
                1 ==
                  (function (host, path, list) {
                    var result = $me.isGoverned(host, path, list);
                    if (void 0 !== result.confirmed && 1 == result.confirmed)
                      for (attr in result)
                        'confirmed' != attr &&
                          ('' != criteria && (criteria += ' and '),
                          void 0 !== result[attr] && 1 == result[attr] && (criteria += attr));
                    return result.confirmed;
                  })(window.location.hostname, window.location.pathname, $me.config.blacklist)
              )
                (explanation = 'the ' + criteria + ' of this page is black-listed'),
                  ($me.loadAsync = !1);
              else if ('' != scriptLoadType) {
                var error = !1;
                switch (scriptLoadType.toLowerCase()) {
                  case 'async':
                    $me.loadAsync = !0;
                    break;
                  case 'sync':
                    $me.loadAsync = !1;
                    break;
                  default:
                    (error = !0),
                      console.log(
                        'Adobe Solutions: detmScriptLoadType must be either "sync" or "async"'
                      );
                }
                error && (explanation = 'this is the default setting');
              } else
                (criteria = ''),
                  0 ==
                  (function (host, path, list) {
                    var result = $me.isGoverned(host, path, list);
                    if (void 0 !== result.confirmed && 1 == result.confirmed)
                      for (attr in result)
                        'confirmed' != attr &&
                          ('' != criteria && (criteria += ' and '),
                          void 0 !== result[attr] && 1 == result[attr] && (criteria += attr));
                    return result.confirmed;
                  })(window.location.hostname, window.location.pathname, $me.config.whitelist)
                    ? ((explanation = 'this is normally how detm script components are loaded'),
                      ($me.loadAsync = !1))
                    : (explanation = 'the ' + criteria + ' of this page is white-listed');
              void 0 === document.createEvent &&
                ((explanation = 'the browser does not support custom events'),
                ($me.loadAsync = !1),
                'undefined' != typeof detmScriptLoadType && (detmScriptLoadType = 'sync'));
              var msg = 'detm scripts were loaded ';
              (msg += $me.loadAsync ? 'asynchronously' : 'synchronously'),
                (msg += ' because ' + explanation),
                console.log('----------'),
                console.log(
                  'detmScriptLoader - ' + config.environment + ' version: ' + config.version
                ),
                console.log(msg),
                console.log('----------'),
                this.initializeLegacyMode();
            }),
              (this.isRestricted = function (tag) {
                var value = !1;
                'satellitelib' === tag && (tag = '_dtm');
                var restrictions = this.restrictedTags();
                return (
                  void 0 !== restrictions &&
                    null != restrictions &&
                    restrictions.length > 0 &&
                    0 == (value = restrictions.includes(tag)) &&
                    '_dtm' != tag &&
                    (value = restrictions.includes('_all')),
                  0 == value && (value = this.isRestrictedByNotification(tag)),
                  value
                );
              }),
              (this.isRestrictedByNotification = function (tag) {
                const $___old_87f1b2f103e289b3 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                );
                try {
                  if ($___old_87f1b2f103e289b3)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___stub_3ac875f7196a9c3f.sessionStorage
                    ));
                  return function () {
                    var restricted = !1,
                      notifications = sessionStorage.getItem(detm_tag_notification_key);
                    if (null !== notifications) {
                      var json = JSON.parse(notifications);
                      if (void 0 !== json.state && 0 == json.state && void 0 !== json.tags)
                        for (var tags = json.tags, i = 0; i < tags.length; i++) {
                          if (tags[i] === tag) {
                            restricted = !0;
                            break;
                          }
                        }
                    }
                    return restricted;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_87f1b2f103e289b3)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___old_87f1b2f103e289b3
                    ));
                }
              }),
              (this.isWarranted = function (tag) {
                return !0;
              }),
              (this.initializeLegacyMode = function () {
                const $___old_7ebc07c355727ea7 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                );
                try {
                  if ($___old_7ebc07c355727ea7)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___stub_3ac875f7196a9c3f.sessionStorage
                    ));
                  return function () {
                    if (
                      null === this.legacyMode ||
                      detmScriptLoader.legacyMode.UNKNOWN == this.legacyMode
                    ) {
                      var fABS = detmScriptLoader.isABS(),
                        fXANDR = detmScriptLoader.isXandR();
                      fABS || fXANDR
                        ? (this.legacyMode = detmScriptLoader.legacyMode.LEGACY)
                        : ((this.legacyMode = detmScriptLoader.legacyMode.BOTH),
                          ($me.nometrics = !0)),
                        sessionStorage.setItem('SSAFLegacyMode', this.legacyMode);
                    } else
                      detmScriptLoader.legacyMode.BOTH == this.legacyMode && ($me.nometrics = !0);
                  }.apply(this, arguments);
                } finally {
                  if ($___old_7ebc07c355727ea7)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___old_7ebc07c355727ea7
                    ));
                }
              }),
              (this.isGoverned = function (host, path, list) {
                for (
                  var lchost = host.toLowerCase(),
                    lcpath = path.toLowerCase(),
                    governedresult = { confirmed: !1 },
                    i = 0;
                  i < list.length;
                  i++
                ) {
                  var item = list[i];
                  if (void 0 !== item.domain)
                    if (
                      ((governedresult.domain = !1),
                      'string' != typeof item.domain && void 0 !== item.domain.length)
                    ) {
                      for (var j = 0; j < item.domain.length; j++)
                        if (0 == lchost.indexOf(item.domain[j])) {
                          governedresult.domain = !0;
                          break;
                        }
                    } else 0 == lchost.indexOf(item.domain) && (governedresult.domain = !0);
                  if (void 0 !== item.path)
                    if (
                      ((governedresult.path = !1),
                      'string' != typeof item.path && void 0 !== item.path.length)
                    ) {
                      for (var j = 0; j < item.path.length; j++)
                        if (0 == lcpath.indexOf(item.path[j])) {
                          governedresult.path = !0;
                          break;
                        }
                    } else 0 == lcpath.indexOf(item.path) && (governedresult.path = !0);
                  if (
                    (void 0 !== governedresult.domain
                      ? 1 == governedresult.domain &&
                        void 0 !== governedresult.path &&
                        1 == governedresult.path
                        ? (governedresult.confirmed = !0)
                        : 1 == governedresult.domain && void 0 === governedresult.path
                        ? (governedresult.confirmed = !0)
                        : (governedresult.confirmed = !1)
                      : void 0 !== governedresult.path &&
                        1 == governedresult.path &&
                        (governedresult.confirmed = !0),
                    governedresult.confirmed &&
                      void 0 !== item.timing &&
                      void 0 !== item.timing.eval &&
                      (eval(item.timing.eval) || (governedresult.confirmed = !1)),
                    governedresult.confirmed)
                  )
                    break;
                  delete governedresult.domain, delete governedresult.path;
                }
                return governedresult;
              });
            var when_mapping_framework_is_ready = new Promise(function (resolve, reject) {
                var dmf_parsed_message = 'DETM_LEGACY_DMF_PARSED';
                detmScriptLoader.legacyMode.MS == $me.legacyMode &&
                  (dmf_parsed_message = 'DETM_DMF_PARSED'),
                  window.addEventListener(dmf_parsed_message, function () {
                    resolve();
                  });
              }),
              executeFooter = function () {
                when_mapping_framework_is_ready.then(function () {
                  ($me.finished = !0), document.dispatchEvent(executeFooterEvent);
                });
              },
              isForced = function (item) {
                var forced = !1;
                if ('' !== detmScriptLoader.forceasync)
                  for (
                    var lcItem = item.toLowerCase(),
                      items = detmScriptLoader.forceasync.split(','),
                      i = 0;
                    i < items.length;
                    i++
                  )
                    if (
                      items[i].toLowerCase() == lcItem &&
                      ('adobetarget' !== lcItem ||
                        document.location.href.indexOf('5g/consumer/') > -1)
                    ) {
                      forced = !0;
                      break;
                    }
                return forced;
              },
              isForcedComponent = function (component) {
                var forced = !1;
                return (
                  void 0 !== component.forceasync && (forced = isForced(component.forceasync)),
                  forced
                );
              };
            this.loadForcedComponents = function () {
              for (var key in detmScriptLoader.component) {
                var component = detmScriptLoader.component[key];
                isForcedComponent(component) && load(component).then(function () {});
              }
            };
            var load = function (component) {
              return new Promise(function (resolve, reject) {
                var script = get(component),
                  isrestricted = !1;
                if (void 0 !== script.canrestrict && script.canrestrict) {
                  var tag = $me.getComponentKey(component).toLowerCase();
                  isrestricted = $me.isRestricted(tag);
                }
                $me.scriptLoading = script.name;
                var warranted = void 0 === script.warranted || script.warranted;
                if (
                  (warranted && (warranted = $me.isWarranted({ name: script.name, group: !1 })),
                  0 == isrestricted && 1 == warranted)
                ) {
                  var element = document.createElement('script'),
                    url = script.source.replace('{environment}', $me.config.environment);
                  (url = url.replace('{name}', script.name)),
                    (element.type = $me.config.type),
                    (element.async = $me.loadAsync),
                    element.setAttribute('data-loadedby', 'detm');
                  var timing = new (function (epoch) {
                    this.start = epoch;
                    var timer$ = this;
                    this.report = function () {
                      var allowed =
                        sessionStorage.getItem('detm-script-loader-allowtimings') || !0;
                      if ('boolean' == typeof allowed && allowed) {
                        var stop = Date.now(),
                          elapsed = stop - timer$.start;
                        console.log(
                          'detmScriptLoader - loading (and initializing): ' +
                            script.name +
                            (function (start, stop, elapsed) {
                              var t1 = new Date(start),
                                t2 = new Date(stop),
                                begin = t1.toTimeString().substr(0, 8);
                              begin += '.' + t1.getMilliseconds();
                              var end = t2.toTimeString().substr(0, 8);
                              return (
                                ' start: ' +
                                begin +
                                ' stop: ' +
                                (end += '.' + t2.getMilliseconds()) +
                                ' elapsed: ' +
                                elapsed +
                                'ms'
                              );
                            })(timer$.start, stop, elapsed)
                        );
                      }
                    };
                  })(Date.now());
                  (element.onload = element.onreadystatechange = function () {
                    timing.report(), resolve();
                  }),
                    (element.onerror = function () {
                      timing.report(),
                        console.log(
                          'Adobe solutions: error - could not load script ' + script.name
                        ),
                        resolve();
                    }),
                    (element.src = url),
                    document.getElementsByTagName('head')[0].appendChild(element);
                } else isrestricted && console.log('detmScriptLoader - ' + script.name + ' was not loaded due to a user-specified tag restriction'), resolve();
              });
            };
            (this.loadBlockingScript = function (component) {
              var script = get(component),
                isrestricted = !1;
              if (void 0 !== script.canrestrict && script.canrestrict) {
                var tag = $me.getComponentKey(component).toLowerCase();
                isrestricted = $me.isRestricted(tag);
              }
              $me.scriptLoading = script.name;
              var warranted = void 0 === script.warranted || script.warranted;
              if (
                (warranted && (warranted = $me.isWarranted({ name: script.name, group: !1 })),
                0 == isrestricted && 1 == warranted && 8 !== component.ordinal)
              ) {
                var url = script.source.replace('{environment}', $me.config.environment);
                (url = url.replace('{name}', script.name)),
                  document.write(
                    '<script type="' +
                      $me.config.type +
                      '" src="' +
                      url +
                      '" data-loadedby="detm"></script>'
                  );
              } else
                isrestricted &&
                  console.log(
                    'detmScriptLoader - ' +
                      script.name +
                      ' was not loaded due to a user-specified tag restriction'
                  );
            }),
              (this.getComponentKey = function (component) {
                for (var key in detmScriptLoader.component)
                  if (component == detmScriptLoader.component[key]) return key;
                return null;
              });
            var initChatManager = function () {
              window.setTimeout(
                null,
                void (
                  'undefined' != typeof ddo &&
                  (clearTimeout(null), window.chatAnalytics.initialize(ddo))
                )
              );
            };
            (this.loadDetm = function () {
              if (((this.loadingDetm = !0), detmScriptLoader.legacyMode.MS === this.legacyMode))
                load(detmScriptLoader.component.QUANTUM).then(function () {
                  return load(detmScriptLoader.component.UC).then(function () {
                    ($me.loadingDetm = !1),
                      initChatManager(),
                      ('' == detmScriptLoader.triggers.dtm ||
                        window.location.hostname.toLowerCase().indexOf('signin.att.com') >= 0 ||
                        window.location.hostname
                          .toLowerCase()
                          .indexOf('signin.stage.clogin.att.com') >= 0 ||
                        window.location.hostname
                          .toLowerCase()
                          .indexOf('signin.test.clogin.att.com') >= 0 ||
                        window.location.hostname
                          .toLowerCase()
                          .indexOf('signin.dev.clogin.att.com') >= 0 ||
                        window.location.hostname.toLowerCase().indexOf('signin.dev.att.com') >=
                          0) &&
                        $me.loadAdobeDtm();
                  });
                });
              else if (
                detmScriptLoader.legacyMode.BOTH === this.legacyMode ||
                detmScriptLoader.legacyMode.BOTH_TEST === this.legacyMode
              ) {
                var org = DataMappingInterface;
                load(detmScriptLoader.component.QUANTUM).then(function () {
                  return load(detmScriptLoader.component.UC).then(function () {
                    return (
                      (DataMappingInterface = org),
                      load(detmScriptLoader.component.DATAMANAGER).then(function () {
                        return load(detmScriptLoader.component.DATADEFINITION).then(function () {
                          return load(detmScriptLoader.component.DETM_ADOBE).then(function () {
                            ($me.loadingDetm = !1),
                              initChatManager(),
                              ('' == detmScriptLoader.triggers.dtm ||
                                window.location.hostname.toLowerCase().indexOf('signin.att.com') >=
                                  0 ||
                                window.location.hostname
                                  .toLowerCase()
                                  .indexOf('signin.stage.clogin.att.com') >= 0 ||
                                window.location.hostname
                                  .toLowerCase()
                                  .indexOf('signin.test.clogin.att.com') >= 0 ||
                                window.location.hostname
                                  .toLowerCase()
                                  .indexOf('signin.dev.clogin.att.com') >= 0 ||
                                window.location.hostname
                                  .toLowerCase()
                                  .indexOf('signin.dev.att.com') >= 0) &&
                                $me.loadAdobeDtm();
                          });
                        });
                      })
                    );
                  });
                });
              } else
                load(detmScriptLoader.component.QUANTUM).then(function () {
                  return load(detmScriptLoader.component.DATAMANAGER).then(function () {
                    return load(detmScriptLoader.component.DATADEFINITION).then(function () {
                      return load(detmScriptLoader.component.DETM_ADOBE).then(function () {
                        ($me.loadingDetm = !1),
                          initChatManager(),
                          ('' == detmScriptLoader.triggers.dtm ||
                            window.location.hostname.toLowerCase().indexOf('signin.att.com') >=
                              0 ||
                            window.location.hostname
                              .toLowerCase()
                              .indexOf('signin.stage.clogin.att.com') >= 0 ||
                            window.location.hostname
                              .toLowerCase()
                              .indexOf('signin.test.clogin.att.com') >= 0 ||
                            window.location.hostname
                              .toLowerCase()
                              .indexOf('signin.dev.clogin.att.com') >= 0 ||
                            window.location.hostname.toLowerCase().indexOf('signin.dev.att.com') >=
                              0) &&
                            $me.loadAdobeDtm();
                      });
                    });
                  });
                });
            }),
              (this.loadAdobeDtm = function () {
                if (0 == window.detmDisabled) {
                  if ($me.loadingDetm && '' !== detmScriptLoader.triggers.dtm)
                    return (
                      (detmScriptLoader.triggers.dtm = ''),
                      ($me.loadingDetm = !1),
                      void console.log(
                        'detmScriptLoader - the application has triggered the Adobe DTM (satellite) launch too early... initiating appropriate remediation'
                      )
                    );
                  load(detmScriptLoader.component.THIRD_PARTY).then(function () {
                    load(detmScriptLoader.component.ENGAGE).then(function () {
                      document.addEventListener('DTM_SATELLITE_STATE', function (e) {
                        executeFooter();
                      });
                      new satelliteDetector(detmScriptLoader.component.ENGAGE);
                    });
                  });
                }
              }),
              document
                .getElementsByTagName('head')[0]
                .addEventListener('DM_EVENT_PAGELOAD', function (event) {
                  load(detmScriptLoader.component.VIPR);
                });
            var get = function (component) {
              for (var script = null, i = 0; i < $me.config.scripts.length; i++)
                if ($me.config.scripts[i].component == component) {
                  script = $me.config.scripts[i];
                  break;
                }
              return script;
            };
            this.run = function (what) {
              var engage_has_loaded = !1;
              for (var key in detmScriptLoader.component) {
                var component = detmScriptLoader.component[key];
                if (
                  ('ADOBETARGET' != key || !isForcedComponent(component)) &&
                  !(
                    ('ADOBETARGET' !== key && isForcedComponent(component)) ||
                    detmScriptLoader.component.UNKNOWN == component ||
                    (void 0 !== what &&
                      'static' === what &&
                      void 0 !== component.launch &&
                      component.launch !== what) ||
                    (void 0 === what &&
                      'undefined' !== component.launch &&
                      'static' === component.launch)
                  )
                ) {
                  if (
                    void 0 !== component.legacy &&
                    $me.legacyMode !== detmScriptLoader.legacyMode.BOTH &&
                    $me.legacyMode !== detmScriptLoader.legacyMode.BOTH_TEST
                  ) {
                    if (
                      !0 === component.legacy &&
                      $me.legacyMode != detmScriptLoader.legacyMode.LEGACY &&
                      $me.legacyMode != detmScriptLoader.legacyMode.UNKNOWN
                    )
                      continue;
                    if (
                      !1 === component.legacy &&
                      $me.legacyMode != detmScriptLoader.legacyMode.MS
                    )
                      continue;
                  }
                  ('' != detmScriptLoader.restrictions &&
                    void 0 !== component.restrictions &&
                    component.restrictions == detmScriptLoader.restrictions) ||
                    ($me.loadBlockingScript(component),
                    detmScriptLoader.component.ENGAGE == component && (engage_has_loaded = !0));
                }
              }
              void 0 === what &&
                (engage_has_loaded && new satelliteDetector(component.ENGAGE), executeFooter());
            };
          }.apply(this, arguments);
        } finally {
          if ($___old_50cd46d29229c184)
            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_50cd46d29229c184));
        }
      }
      if (
        ((detmScriptLoader.legacyMode = {
          UNKNOWN: '0',
          MS: '1',
          LEGACY: '2',
          BOTH: '3',
          BOTH_TEST: '4',
        }),
        void 0 === detmLoader)
      ) {
        var detmLoader = new detmScriptLoader(detmScriptLoaderConfig);
        if ((detmLoader.configure(), -1 === navigator.userAgent.toLowerCase().indexOf('ktxn'))) {
          detmLoader.loadForcedComponents(), detmLoader.run('static');
          var AllowDelayedLoad = !0;
          0 == AllowDelayedLoad || 0 == detmLoader.loadAsync
            ? detmLoader.run()
            : ('' != detmScriptLoader.triggers.detm
                ? (console.log(
                    'detmScriptLoader - load delayed for (DETM) trigger: ' +
                      detmScriptLoader.triggers.detm
                  ),
                  document.addEventListener(detmScriptLoader.triggers.detm, function (e) {
                    '' !== detmScriptLoader.triggers.detm &&
                      detmLoader.loadAsync &&
                      (console.log(
                        'detmScriptLoader - received (DETM) trigger: ' +
                          detmScriptLoader.triggers.detm
                      ),
                      detmLoader.loadDetm());
                  }))
                : detmLoader.loadDetm(),
              '' != detmScriptLoader.triggers.dtm &&
                (console.log(
                  'detmScriptLoader - load delayed for (Adobe DTM) trigger: ' +
                    detmScriptLoader.triggers.dtm
                ),
                document.addEventListener(detmScriptLoader.triggers.dtm, function (e) {
                  '' !== detmScriptLoader.triggers.dtm &&
                    detmLoader.loadAsync &&
                    (console.log(
                      'detmScriptLoader - received (Adobe DTM) trigger: ' +
                        detmScriptLoader.triggers.dtm
                    ),
                    detmLoader.loadAdobeDtm());
                })));
        }
      }
    })();
  } finally {
    if ($___old_1b9e1c4cf7e50f38)
      ({}.constructor.defineProperty(window, 'sessionStorage', $___old_1b9e1c4cf7e50f38));
    if ($___old_c3a820a494fbb380)
      ({}.constructor.defineProperty(Navigator.prototype, 'userAgent', $___old_c3a820a494fbb380));
  }
}
