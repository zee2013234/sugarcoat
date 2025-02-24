{
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
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var segIds = Bootstrapper.Cookies.get('aam_qbus') || '';
        segIds = decodeURIComponent(segIds);
        var matching = {};
        var pixelID = '850485508311844';
        if (false) {
          if ('') matching.em = ''.toLowerCase();
          if ('') matching.fn = ''.toLowerCase();
          if ('') matching.ln = ''.toLowerCase();
          if ('') matching.ph = ''.toLowerCase();
          if ('') matching.ge = ''.toLowerCase();
          if ('') matching.db = '';
          if ('') matching.ct = ''.toLowerCase();
          if ('') matching.st = ''.toLowerCase();
          if ('') matching.zp = ''.toLowerCase();
        }
        if (!window.fbq) {
          var n = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          window.fbq = n;
          window._fbq = window._fbq || n;
          n.push = n;
          n.loaded = !0;
          n.version = '2.0';
          n.queue = [];
          var locale = 'en_US' || 'en_US';
          Bootstrapper.insertScript('https://connect.facebook.net/' + locale + '/fbevents.js');
        }
        fbq.agent = 'tmensighten';
        if (true) {
          Bootstrapper.fbq = Bootstrapper.fbq || {};
          Bootstrapper.fbq.loadCallback =
            Bootstrapper.fbq.loadCallback ||
            function (cb) {
              var fbInterval = setInterval(function () {
                if (
                  fbq.getState &&
                  fbq.getState() &&
                  fbq.getState().pixels &&
                  fbq.getState().pixels.length > 0
                ) {
                  cb();
                  clearInterval(fbInterval);
                }
              }, 250);
              setTimeout(function () {
                clearInterval(fbInterval);
              }, 5000);
            };
          Bootstrapper.fbq.hasPixelInitialized =
            Bootstrapper.fbq.hasPixelInitialized ||
            function (pixelID) {
              if (
                fbq.getState &&
                fbq.getState() &&
                fbq.getState().pixels &&
                fbq.getState().pixels.length > 0
              ) {
                var pixelsInit = fbq.getState().pixels;
                for (var i = 0; i < pixelsInit.length; i++)
                  if (pixelsInit[i].id === pixelID) return true;
              }
              return false;
            };
        }
        if (!true || (true && !Bootstrapper.fbq.hasPixelInitialized(pixelID))) {
          if (true) fbq('dataProcessingOptions', ['LDU'], 0, 0);
          false ? fbq('init', pixelID, matching) : fbq('init', pixelID);
          fbq('set', 'autoConfig', false, pixelID);
          fbq('track', 'PageView');
        }
        fbq('trackCustom', 'aam', { aam_segs: segIds });
      },
      3308401,
      651159
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var partner_id = '71656';
        window._linkedin_data_partner_id = partner_id;
        src = '//snap.licdn.com/li.lms-analytics/insight.min.js';
        Bootstrapper.insertScript(src);
      },
      3124951,
      568772
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var twitter_id = 'nuq8i';
        !(function (e, t, n, s, u, a) {
          e.twq ||
            ((s = e.twq = function () {
              s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
            }),
            (s.version = '1.1'),
            (s.queue = []),
            (u = t.createElement(n)),
            (u.async = !0),
            (u.src = '//static.ads-twitter.com/uwt.js'),
            (a = t.getElementsByTagName(n)[0]),
            a.parentNode.insertBefore(u, a));
        })(window, document, 'script');
        twq('init', twitter_id);
        twq('track', 'PageView');
      },
      2772373,
      555125
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src =
          '//pt.ispot.tv/v2/TC-3308-2.gif?type=visit' +
          '&' +
          'cid=' +
          Bootstrapper.Cookies.get('ivid') +
          '' +
          '&' +
          'uid=' +
          Bootstrapper.Cookies.get('s_vi') +
          '' +
          '&' +
          'refid=' +
          Bootstrapper.Cookies.get('qbn.qbo_sc') +
          '';
      },
      3333892,
      509363
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        const $___old_0823593691bd57e3 = {}.constructor.getOwnPropertyDescriptor(
          window,
          'sessionStorage'
        );
        try {
          if ($___old_0823593691bd57e3)
            ({}.constructor.defineProperty(
              window,
              'sessionStorage',
              $___stub_053c907fde22f83d.sessionStorage
            ));
          return function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            function isEmpty (obj) {
              try {
                for (var prop in obj) if (obj.hasOwnProperty(prop)) return false;
                return JSON.stringify(obj) === JSON.stringify({});
              } catch (err) {}
            }
            try {
              var hasBeaconed = sessionStorage.getItem('dnbsessvalid');
              if (!hasBeaconed)
                Bootstrapper.loadScriptCallback('//vid1005.d41.co/sync/', function () {
                  Bootstrapper.loadScriptCallback(
                    '//cdn-0.d41.co/tags/dnb_coretag_v3.min.js',
                    function () {
                      if (typeof dnbvid == 'object' && typeof dnbvid.getData == 'function')
                        try {
                          dnbvid.getData('vi4820', 'json', 'T', function (dnb_Data) {
                            if (!isEmpty(dnb_Data)) {
                              for (var key in dnb_Data) {
                                var newkey = 'dnb_' + key;
                                dnb_Data[newkey] = dnb_Data[key];
                                delete dnb_Data[key];
                              }
                              if (dnb_Data['dnb_status'] == '200')
                                try {
                                  dnb_Data['dnb_naicsCodes'] = dnb_Data['dnb_naicsCodes']
                                    ? dnb_Data.dnb_naicsCodes.match(/[0-9]+/)[0]
                                    : null;
                                  dnb_Data['dnb_sicCodes'] = dnb_Data['dnb_sicCodes']
                                    ? dnb_Data.dnb_sicCodes.match(/[0-9]+/)[0]
                                    : null;
                                  intuit.tracking.ecs.webAnalytics.identify(dnb_Data);
                                } catch (err) {}
                            }
                          });
                          sessionStorage.setItem('dnbsessvalid', true);
                        } catch (err) {}
                    }
                  );
                });
            } catch (err) {}
          }.apply(this, arguments);
        } finally {
          if ($___old_0823593691bd57e3)
            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_0823593691bd57e3));
        }
      },
      3371764,
      660941
    );
    Bootstrapper.bindDependencyDOMParsed(
      function () {
        const $___old_1aeb4191f52d9ddc = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_1aeb4191f52d9ddc)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_fb986baf23da602c.userAgent
            ));
          return function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var isMobile = false;
            isMobile =
              navigator.userAgent.match(
                /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|webOS|Mobile Safari|Mobi/i
              ) !== null;
            var dev = '';
            var lpSectionDesktop = window.lpSectionDesktop || '';
            var lpSectionMobile = window.lpSectionMobile || '';
            var lpSectionForIframe = 'IFRAME';
            var isPageFramed = location.search.match(/gsiframe=true/) !== null;
            if (location.host.indexOf('qasp.') > -1) dev = 'qasp.';
            var elem = document.getElementById('chatContainer');
            if (elem !== null) elem.parentNode.removeChild(elem);
            if (isPageFramed) {
              var elem1 = document.getElementById('main');
              if (elem1 !== null) elem1.classList.add('gsiframe');
            }
            function loadNewLPEvent () {
              if (isMobile) {
                if (lpSectionMobile) {
                  var lpsecmobile = lpSectionMobile.split(':');
                  if (lpsecmobile.length === 2 && lpsecmobile[0] !== lpSectionForIframe)
                    window.loadNewLivePerson(lpsecmobile[0], lpsecmobile[1], '');
                  if (lpsecmobile.length > 2 && lpsecmobile[0] !== lpSectionForIframe)
                    window.loadNewLivePerson(lpsecmobile[0], lpsecmobile[1], lpsecmobile[2]);
                }
              } else if (lpSectionDesktop) {
                var lpsection = lpSectionDesktop.split(':');
                if (lpsection.length === 2 && lpsection[0] !== lpSectionForIframe)
                  window.loadNewLivePerson(lpsection[0], lpsection[1], '');
                if (lpsection.length > 2 && lpsection[0] !== lpSectionForIframe)
                  window.loadNewLivePerson(lpsection[0], lpsection[1], lpsection[2]);
              }
            }
            if (!isPageFramed)
              if (lpSectionMobile || lpSectionDesktop) loadNewLPEvent();
              else
                switch (
                  location.host +
                  location.pathname +
                  (location.pathname.substr(-1) == '/' ? '' : '/')
                ) {
                  case dev + 'search2.payroll.com/online-payroll/':
                  case dev + 'search2.payroll.com/t/qbks-8526/a/online-payroll/':
                  case dev + 'search2.payroll.com/t/qbks-8526/b/online-payroll/':
                  case dev + 'search2.quickbooksonline.com/quickbooksonline-payroll/':
                  case dev +
                    'search2.quickbooksonline.com/t/qbks-8526/a/quickbooksonline-payroll/':
                  case dev +
                    'search2.quickbooksonline.com/t/qbks-8526/b/quickbooksonline-payroll/':
                  case dev + 'www.intuitfullservicepayroll.com/aff/full-service-payroll/':
                  case dev + 'www.intuitfullservicepayroll.com/free-trial/':
                  case dev + 'www.intuitfullservicepayroll.com/full-service-payroll/':
                  case dev +
                    'www.intuitfullservicepayroll.com/t/qbks-8526/a/full-service-payroll/':
                  case dev +
                    'www.intuitfullservicepayroll.com/t/qbks-8526/b/full-service-payroll/':
                  case dev + 'www.intuitfullservicepayroll.com/quickbooks/':
                  case dev + 'www.intuitfullservicepayroll.com/schedule-call/':
                  case dev + 'www.intuitfullservicepayroll.com/schedule-call-thankyou/':
                  case dev + 'www.intuitfullservicepayroll.com/workerscomp/':
                  case dev + 'quickbooks.intuit.com/payroll/full-service/':
                  case dev + 'quickbooks.intuit.com/payroll/quickbooks-payroll/':
                  case dev + 'quickbooks.intuit.com/payroll/quickbooks-online/':
                  case dev + 'quickbooks.intuit.com/payroll-software/':
                    window.loadNewLivePerson(
                      'EMS',
                      'chat-qb-payroll-sales-english-fixed-right-btn',
                      'chat-qb-payroll-sales-english-harmony-top-header'
                    );
                    break;
                  case dev + 'quickbooks.intuit.com/quickbooks-payments-for-small-business/':
                  case dev +
                    'quickbooks.intuit.com/sandbox/1215_ba/payments/credit-card-processing-small-business/':
                  case dev + 'quickbooks.intuit.com/facts-about-electronic-checks/':
                  case dev + 'quickbooks.intuit.com/payments/ecommerce-payment-processing/':
                  case dev + 'quickbooks.intuit.com/payments/mobile-credit-card-processing/':
                  case dev + 'quickbooks.intuit.com/payments/pos-emv/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/pos-emv/':
                  case dev + 'quickbooks.intuit.com/payments-offers/':
                  case dev + 'quickbooks.intuit.com/quickbooks-payments-for-small-business/':
                  case dev + 'quickbooks.intuit.com/reduce-credit-card-processing-costs/':
                  case dev + 'www.intuit-gopayment.com/get-gopayment/':
                  case dev + 'www.intuit-gopayment.com/mobile-payments/':
                  case dev + 'www.intuit-gopayment.com/qbo/quickbooks/':
                  case dev + 'www.intuit-gopayment.com/solutions/low-rates/':
                  case dev + 'www.intuitpayments.com/qbo/quickbooks/':
                  case dev + 'www.intuitpayments.com/qb-payments/':
                  case dev + 'www.intuitpayments.com/qb-payments/desktop/':
                  case dev + 'www.intuitpayments.com/qb-payments/online/':
                  case dev + 'merchant.intuit.com/signup/':
                  case dev + 'quickbooks.intuit.com/payments/ecommerce-payment-processing/':
                    window.loadNewLivePerson('PCS', 'divButton-payments-sales-english1', '');
                    break;
                  case dev + 'quickbooks.intuit.com/payments/':
                    if (isMobile)
                      window.loadNewLivePerson('PCS', 'div-payments-sales-english-mobile', '');
                    else window.loadNewLivePerson('PCS', 'divButton-payments-sales-english1', '');
                    break;
                  case dev + 'quickbooks.intuit.com/integrations/point-of-sale/quickbooks-pos/':
                  case dev + 'quickbooks.intuit.com/oa/pos/free-trial/':
                  case dev + 'quickbooks.intuit.com/oa/pos/free-trial-thankyou/':
                  case dev + 'quickbooks.intuit.com/online-pos-system/':
                  case dev + 'quickbooks.intuit.com/payments/pos-full-service-restaurants-bar/':
                  case dev + 'quickbooks.intuit.com/payments/pos-quick-service-restaurants/':
                  case dev + 'quickbooks.intuit.com/payments/pos-retail/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/desktop-pos-system/':
                  case dev + 'quickbooks.intuit.com/sandbox/1215_ba/payments/desktop-pos-system/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/online-pos-system/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/payments/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/pos-grocery/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/pos-salon-spa/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/grocery/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/salon/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/restaurant/':
                  case dev + 'quickbooks.intuit.com/point-of-sale/retail/':
                  case dev + 'quickbooks.intuit.com/point-of-sale-compare/':
                  case dev + 'quickbooks.intuit.com/point-of-sale-software-thankyou/':
                  case dev + 'quickbooks.intuit.com/point-of-sale-software/':
                  case dev + 'quickbooks.intuit.com/pos-download-free/':
                  case dev + 'quickbooks.intuit.com/pos-download-thankyou/':
                  case dev + 'quickbooks.intuit.com/pos-hardware/':
                  case dev + 'quickbooks.intuit.com/sandbox/1215_ba/payments/pos-hardware/':
                  case dev + 'quickbooks.intuit.com/pos-offers/':
                  case dev + 'www.intuitpayments.com/aff/qb-pointofsale/':
                  case dev + 'www.intuitpayments.com/qb-pointofsale/':
                  case dev + 'www.intuitpayments.com/qb-pointofsale-v12/':
                  case dev + 'www.intuitpayments.com/seg/brand/all/qb-pointofsale/':
                  case dev + 'www.intuitpayments.com/seg/brand/all/qb-pointofsale-v12/':
                  case dev + 'www.intuitpayments.com/seg/paym/all/qb-pointofsale/':
                  case dev + 'www.intuitpayments.com/seg/paym/all/qb-pointofsale-v12/':
                    window.loadNewLivePerson('POS', 'divButton-qb-pos-sales-english1', '');
                    break;
                  case dev + 'quickbooks.intuit.com/learn-and-support/':
                  case dev + 'quickbooks.intuit.com/business-type/starting-up/':
                  case dev + 'quickbooks.intuit.com/integrations/paypal/':
                  case dev + 'quickbooks.intuit.com/mobile/':
                  case dev + 'quickbooks.intuit.com/move-from-desktop-to-online/':
                  case dev + 'quickbooks.intuit.com/online/':
                  case dev + 'quickbooks.intuit.com/pricing/':
                  case dev + 'quickbooks.intuit.com/var/pricing/':
                  case dev + 'quickbooks.intuit.com/var2/pricing/':
                  case dev + 'quickbooks.intuit.com/t/qbks-12892/pricing/':
                  case dev + 'quickbooks.intuit.com/pricing-bundle/':
                  case dev + 'quickbooks.intuit.com/products/':
                  case dev + 'quickbooks.intuit.com/var2/self-employed/':
                  case dev + 'quickbooks.intuit.com/var/online/':
                  case dev + 'quickbooks.intuit.com/var/business-type/starting-up/':
                  case dev + 'quickbooks.intuit.com/var/homepage/':
                  case dev + 'quickbooks.intuit.com/var2/homepage/':
                  case dev + 'quickbooks.intuit.com/signup/':
                  case dev + 'quickbooks.intuit.com/pro/':
                  case dev + 'quickbooks.intuit.com/premier/':
                  case dev + 'quickbooks.intuit.com/self-employed/':
                  case dev + 'quickbooks.intuit.com/smallbusiness/':
                  case dev + 'quickbooks.intuit.com/business-type/product-sellers/':
                  case dev + 'quickbooks.intuit.com/features/':
                  case dev + 'quickbooks.intuit.com/mac/':
                  case dev + 'quickbooks.intuit.com/move-to-quickbooks-online/':
                  case dev + 'quickbooks.intuit.com/online/compare/':
                  case dev + 'quickbooks.intuit.com/business-type/non-profit/':
                  case dev + 'quickbooks.intuit.com/pro/compare/':
                  case dev + 'quickbooks.intuit.com/premier/compare/':
                  case dev + 'quickbooks.intuit.com/right-for-me-buynow/':
                  case dev + 'quickbooks.intuit.com/integrations/square/':
                  case dev + 'quickbooks.intuit.com/mac/compare/':
                  case dev + 'quickbooks.intuit.com/integrations/':
                  case dev + 'quickbooks.intuit.com/inventory-management/':
                  case dev + 'quickbooks.intuit.com/integrations/paypal/':
                    if (isMobile)
                      window.loadNewLivePerson('QB', 'div-qb-sales-english-mobile', '');
                    else
                      window.loadNewLivePerson(
                        'QB',
                        'divButton_chat-qb-sales-english-prebridgechat',
                        ''
                      );
                    break;
                  case dev + 'quickbooks.intuit.com/integrations/':
                  case dev + 'quickbooks.intuit.com/bookkeeping/':
                  case dev + 'quickbooks.intuit.com/business-expenses/':
                  case dev + 'quickbooks.intuit.com/chart-of-accounts/':
                  case dev + 'quickbooks.intuit.com/integrations/shopify/':
                  case dev + 'quickbooks.intuit.com/integrations/square/':
                  case dev + 'quickbooks.intuit.com/inventory-management/':
                  case dev + 'quickbooks.intuit.com/ctrl/invoicing/':
                  case dev + 'quickbooks.intuit.com/print-checks/':
                  case dev + 'quickbooks.intuit.com/profit-and-loss-statement/':
                  case dev + 'quickbooks.intuit.com/starting-a-small-business/':
                  case dev + 'quickbooks.intuit.com/try-for-free-accounting-software/':
                  case dev + 'quickbooks.intuit.com/accounting-for-a-loan/':
                  case dev + 'quickbooks.intuit.com/accounting-reports/':
                  case dev + 'quickbooks.intuit.com/accounts-receivable/':
                  case dev + 'quickbooks.intuit.com/amex/':
                  case dev + 'quickbooks.intuit.com/apps/':
                  case dev + 'quickbooks.intuit.com/bbt/':
                  case dev + 'quickbooks.intuit.com/billing/':
                  case dev + 'quickbooks.intuit.com/bookkeeping/':
                  case dev + 'quickbooks.intuit.com/business-expenses/':
                  case dev + 'quickbooks.intuit.com/business-type/non-profit/':
                  case dev + 'quickbooks.intuit.com/business-type/product-sellers/':
                  case dev + 'quickbooks.intuit.com/business-type/project/':
                  case dev + 'quickbooks.intuit.com/business-type/starting-up/':
                  case dev + 'quickbooks.intuit.com/ctrl/business-type/starting-up/':
                  case dev + 'quickbooks.intuit.com/chart-of-accounts/':
                  case dev + 'quickbooks.intuit.com/church-accounting/':
                  case dev + 'quickbooks.intuit.com/cloud-accounting-software/':
                  case dev + 'quickbooks.intuit.com/commercial-lease-agreement/':
                  case dev + 'quickbooks.intuit.com/construction-accounting-software/':
                  case dev + 'quickbooks.intuit.com/customers/ecommerce/':
                  case dev + 'quickbooks.intuit.com/customers/products/':
                  case dev + 'quickbooks.intuit.com/customers/qbse-var2/':
                  case dev + 'quickbooks.intuit.com/features/':
                  case dev + 'quickbooks.intuit.com/food-restaurant-licenses-permits/':
                  case dev + 'quickbooks.intuit.com/general-ledger-software/':
                  case dev + 'quickbooks.intuit.com/home-accounting-software/':
                  case dev + 'quickbooks.intuit.com/how-to-get-started-restaurant-business/':
                  case dev + 'quickbooks.intuit.com/how-to-use-yelp-for-customer-engagement/':
                  case dev + 'quickbooks.intuit.com/income-statement/':
                  case dev + 'quickbooks.intuit.com/insurance-restaurant-business/':
                  case dev + 'quickbooks.intuit.com/journal-entries/':
                  case dev + 'quickbooks.intuit.com/legal-accounting-software/':
                  case dev + 'quickbooks.intuit.com/mac/':
                  case dev + 'quickbooks.intuit.com/mac/compare/':
                  case dev + 'quickbooks.intuit.com/mobile/apps/':
                  case dev + 'quickbooks.intuit.com/move-to-quickbooks-online/':
                  case dev + 'quickbooks.intuit.com/must-have-applications-restaurants/':
                  case dev + 'quickbooks.intuit.com/mycorporation/':
                  case dev + 'quickbooks.intuit.com/new/':
                  case dev + 'quickbooks.intuit.com/new_quickbooks_online/':
                  case dev + 'quickbooks.intuit.com/nonprofit-accounting-software/':
                  case dev + 'quickbooks.intuit.com/online/compare/':
                  case dev + 'quickbooks.intuit.com/premier/':
                  case dev + 'quickbooks.intuit.com/premier/compare/':
                  case dev + 'quickbooks.intuit.com/print-checks/':
                  case dev + 'quickbooks.intuit.com/pro/':
                  case dev + 'quickbooks.intuit.com/pro/compare/':
                  case dev + 'quickbooks.intuit.com/product/add_ons/bill_pay/':
                  case dev + 'quickbooks.intuit.com/product/add_ons/shipping_manager/':
                  case dev + 'quickbooks.intuit.com/profit-and-loss-statement/':
                  case dev + 'quickbooks.intuit.com/qb_pro_product_ruby_page_qbo/':
                  case dev + 'quickbooks.intuit.com/quickbooks-faq/':
                  case dev + 'quickbooks.intuit.com/reconcile-bank-statements/':
                  case dev + 'quickbooks.intuit.com/referral/':
                  case dev + 'quickbooks.intuit.com/restaurant-business/':
                  case dev + 'quickbooks.intuit.com/right-for-me-buynow/':
                  case dev + 'quickbooks.intuit.com/right-for-me-trial/':
                  case dev + 'quickbooks.intuit.com/rm/cmc34507/cell2/':
                  case dev + 'quickbooks.intuit.com/rm/cmc34507/cell3/':
                  case dev + 'quickbooks.intuit.com/rm/cmc34507/cell4/':
                  case dev + 'quickbooks.intuit.com/salesforce/media/salesforce-data-sheet/':
                  case dev + 'quickbooks.intuit.com/salesforce/salesforce-integration-quickbooks/':
                  case dev + 'quickbooks.intuit.com/sales-receipts/':
                  case dev + 'quickbooks.intuit.com/self-employed/':
                  case dev + 'quickbooks.intuit.com/ctrl/self-employed/':
                  case dev + 'quickbooks.intuit.com/var/self-employed/':
                  case dev + 'quickbooks.intuit.com/smallbusiness/':
                  case dev + 'quickbooks.intuit.com/starting-a-small-business/':
                  case dev +
                    'quickbooks.intuit.com/startup-financial-planner/gillian-muessig-interview/':
                  case dev +
                    'quickbooks.intuit.com/startup-financial-planner/sian-morson-interview/':
                  case dev +
                    'quickbooks.intuit.com/startup-financial-planner/tips-for-choosing-a-business-partner/':
                  case dev + 'quickbooks.intuit.com/try-for-free-accounting-software/':
                  case dev + 'quickbooks.intuit.com/upgrade_browser/':
                  case dev + 'quickbooks.intuit.com/why-quickbooks/':
                  case dev + 'quickbooks.intuit.com/write-off-bad-debt/':
                  case dev + 'quickbooks.intuit.com/addons/':
                  case dev + 'quickbooks.intuit.com/home-accounting-software/':
                  case dev + 'quickbooks.intuit.com/reviews/':
                  case dev + 'quickbooks.intuit.com/business-types/':
                  case dev + 'quickbooks.intuit.com/accounting-software/':
                  case dev + 'quickbooks.intuit.com/sales-tax/':
                    window.loadNewLivePerson(
                      'QB',
                      'divButton_chat-qb-sales-english-prebridgechat',
                      ''
                    );
                    break;
                  case dev + 'quickbooks.intuit.com/start/billing_info/':
                  case dev + 'quickbooks.intuit.com/start/core_sui/':
                  case dev + 'quickbooks.intuit.com/signup/core/':
                  case dev + 'quickbooks.intuit.com/wwsui/core_chat/':
                  case dev + 'quickbooks.intuit.com/signup/var/core/':
                    if (isMobile)
                      window.loadNewLivePerson('QBbutton', 'div-qb-sales-english-mobile', '');
                    else
                      window.loadNewLivePerson(
                        'QBbutton',
                        'divButton_chat-qb-sales-english-prebridgechat',
                        ''
                      );
                    break;
                  case dev + 'quickbooks.intuit.com/':
                  case dev + 'quickbooks.intuit.com/t/qbks-14566/home-page/':
                    if (isMobile)
                      window.loadNewLivePerson('QBHomepage', 'div-qb-sales-english-mobile', '');
                    else
                      window.loadNewLivePerson(
                        'QBHomepage',
                        'divButton_chat-qb-sales-english-prebridgechat',
                        ''
                      );
                    break;
                  case dev + 'search2.quickbooksonline.com/qb-online/':
                  case dev + 'search2.quickbooks.com/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/get-quickbooks-mac/':
                  case dev + 'search2.quickbooksonline.com/self-employed/':
                  case dev + 'quickbooks.intuit.com/oa/qb-online/':
                  case dev + 'quickbooks.intuit.com/oa/online/':
                    if (isMobile)
                      window.loadNewLivePerson('QBOA', 'div-qboa-sales-english-mobile', '');
                    else window.loadNewLivePerson('QBOA', 'QBOAlpChatButton', '');
                    break;
                  case dev + 'quickbooks.intuit.com/oa/affsignup/':
                  case dev + 'quickbooks.intuit.com/oa/ss-annual/':
                  case dev + 'quickbooks.intuit.com/oa/qbo/':
                  case dev + 'quickbooks.intuit.com/oa/selfemployed/':
                  case dev + 'quickbooks.intuit.com/oa/seg/starting-up/':
                  case dev + 'quickbooks.intuit.com/oa/pla/buy-quickbooks-pro-2017/':
                  case dev + 'quickbooks.intuit.com/oa/pla/buy-quickbooks-mac-2016/':
                  case dev + 'quickbooks.intuit.com/oa/pla/buy-quickbooks-premier-2017/':
                  case dev + 'quickbooks.intuit.com/oa/pla/buy-quickbooks-pro-2018/':
                  case dev + 'quickbooks.intuit.com/oa/pla/buy-quickbooks-mac-2016-new/':
                  case dev + 'quickbooks.intuit.com/oa/pla/buy-quickbooks-premier-2018/':
                  case dev + 'quickbooks.intuit.com/oa/seg/brand/all/quickbooks/':
                  case dev + 'quickbooks.intuit.com/oa/t/qbks-9453/a/qb-online/':
                  case dev + 'quickbooks.intuit.com/oa/t/qbks-9840/a/selfemployed/':
                  case dev + 'quickbooks.intuit.com/oa/t/qbks-9840/b/selfemployed/':
                  case dev + 'quickbooks.intuit.com/oa/t/qbks-9840/c/selfemployed/':
                  case dev + 'quickbooks.intuit.com/oa/t/qbks-9840/d/selfemployed/':
                  case dev + 'quickbooks.intuit.com/oa/compare/online/':
                  case dev + 'quickbooks.intuit.com/oa/promos/limited-time-offer/':
                  case dev + 'quickbooks.intuit.com/oa/promos/limited-time-offer-sign-in/':
                  case dev + 'quickbooks.intuit.com/oa/promos/special-offer/':
                  case dev + 'quickbooks.intuit.com/oa/promos/special-offer-extended/':
                  case dev + 'quickbooks.intuit.com/oa/signup/':
                  case dev + 'sbconnect.intuit.com/quickbooks/':
                  case dev + 'sbconnect.intuit.com/smallbusiness/':
                  case dev + 'search2.payroll.com/quickbooks/':
                  case dev + 'search2.quickbooks.com/buy-quickbooks-mac-2016/':
                  case dev + 'search2.quickbooks.com/get-quickbooks-pro/':
                  case dev + 'search2.quickbooks.com/buy-quickbooks-premier-2016/':
                  case dev + 'search2.quickbooks.com/buy-quickbooks-pro-2016/':
                  case dev + 'search2.quickbooks.com/get-quickbooks-premier/':
                  case dev + 'search2.quickbooks.com/qb-lineup/':
                  case dev + 'search2.quickbooks.com/qbo-lineup/':
                  case dev + 'search2.quickbooks.com/get-quickbooks/starting-up/':
                  case dev + 'search2.quickbooks.com/t/qbks-5205/c/get-quickbook/':
                  case dev + 'search2.quickbooks.com/t/qbks-5205/d/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-5665/b/starting-up/':
                  case dev + 'search2.quickbooks.com/t/qbks-7736/a/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-7736/b/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-8176/a/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-8176/b/get-quickbooks/':
                  case dev + 'search2.quickbooksonline.com/accounting/':
                  case dev + 'search2.quickbooksonline.com/amazon/':
                  case dev + 'search2.quickbooksonline.com/qb-online/starting-up/':
                  case dev + 'search2.quickbooksonline.com/buy-qboss/':
                  case dev + 'search2.quickbooksonline.com/compare-online/':
                  case dev + 'search2.quickbooksonline.com/compare-online-no-se/':
                  case dev + 'search2.quickbooksonline.com/compare-online-se/':
                  case dev + 'search2.quickbooksonline.com/compare-online-se-tt/':
                  case dev + 'search2.quickbooksonline.com/invoice/':
                  case dev + 'search2.quickbooksonline.com/quickbooks-display/':
                  case dev + 'search2.quickbooksonline.com/quickbooksonline-essentials/':
                  case dev + 'search2.quickbooksonline.com/quickbooksonline-plus/':
                  case dev + 'search2.quickbooksonline.com/quickbooksonline-search/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-7786/a/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-7786/b/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-9141/a/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-9141/b/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-9141/c/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-9964/a/qb-online/':
                  case dev + 'search2.quickbooks.com/t/qbks-9487/a/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-9487/b/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-9487/c/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-9487/d/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-9964/a/get-quickbooks/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-9842/a/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-9842/b/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-9842/c/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-9842/d/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-10903/a/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-10903/b/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-10903/c/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-10903/d/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-11880/a/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-11880/b/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-11880/c/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-11880/d/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-11845/a/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-11845/b/qb-online/':
                  case dev + 'search2.quickbooks.com/t/qbks-9842/a/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-10514/a/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-10514/b/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-10514/c/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-10514/d/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/qbdt-vs-qbo/':
                  case dev + 'search2.quickbooks.com/t/qbks-12405/a/qbdt-vs-qbo/':
                  case dev + 'search2.quickbooks.com/t/qbks-12405/b/qbdt-vs-qbo/':
                  case dev + 'search2.quickbooks.com/t/qbks-12185/a/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-12185/b/get-quickbooks/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-12159/a/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-12159/b/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-12159/c/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-12159/d/qb-online/':
                  case dev + 'quickbooks.intuit.com/oa/promos/limited-time-offer/':
                  case dev + 'quickbooks.intuit.com/oa/promos/limited-time-offer-sign-in/':
                  case dev + 'quickbooks.intuit.com/oa/promos/special-offer/':
                  case dev + 'quickbooks.intuit.com/oa/promos/special-offer-extended/':
                  case dev + 'search2.quickbooks.com/online-payroll/':
                  case dev + 'search2.quickbooks.com/promos/limited-time-offer-sign-in/':
                  case dev + 'quickbooks.intuit.com/oa/t/qbks-13784/a/try-quickbooks/':
                  case dev + 'quickbooks.intuit.com/oa/t/qbks-13784/b/try-quickbooks/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-14014/a/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-14014/b/qb-online/':
                  case dev + 'search2.quickbooks.com/t/qbks-13771/b/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-14692/b/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/t/qbks-15214/get-quickbooks/':
                  case dev + 'search2.quickbooks.com/m/get-quickbooks/':
                  case dev + 'search2.quickbooksonline.com/m/qb-online/':
                  case dev + 'search2.quickbooksonline.com/t/qbks-13784/b/try-quickbooks/':
                    window.loadNewLivePerson('QBOA', 'QBOAlpChatButton', '');
                    break;
                  case dev + 'quickbooks.intuit.com/sign-in-offer/':
                  case dev + 'quickbooks.intuit.com/sign-in/select-plan/':
                  case dev + 'quickbooks.intuit.com/oa/promos/limited-time-offer-se/':
                    window.loadNewLivePerson('qboabuttononly', 'QBOAlpChatButton', '');
                    break;
                  case dev + 'quickbooks.intuit.com/prepare-1099/':
                    window.loadNewLivePerson('efilebuttononly', '', '');
                    break;
                  case dev + 'quickbooks.intuit.com/accountants/':
                  case dev + 'quickbooks.intuit.com/accountants/client-discounts/':
                  case dev + 'quickbooks.intuit.com/accountants/payments/':
                  case dev + 'quickbooks.intuit.com/accountants/pro-advisor-enterprise/':
                  case dev + 'quickbooks.intuit.com/accountants/proadvisor/':
                  case dev +
                    'quickbooks.intuit.com/accountants/quickbooks-accountant-desktop-disco/':
                  case dev + 'quickbooks.intuit.com/accountants/desktop/':
                  case dev + 'quickbooks.intuit.com/accountants/payroll-full-service/':
                  case dev + 'quickbooks.intuit.com/accountants/payroll-online/':
                  case dev + 'quickbooks.intuit.com/accountants/quickbooks-desktop-disco/':
                  case dev + 'quickbooks.intuit.com/accountants/online/':
                  case dev + 'quickbooks.intuit.com/accountants/self-employed/':
                  case dev + 'quickbooks.intuit.com/accountants/offerweb/':
                  case dev + 'quickbooks.intuit.com/accountants/discounts-wholesale/':
                  case dev + 'quickbooks.intuit.com/accountants/discounts/':
                  case dev + 'quickbooks.intuit.com/aag/accountants/clientproducts/':
                  case dev +
                    'quickbooks.intuit.com/aag/accountants/payroll/enhanced-payroll-for-accountants/':
                  case dev +
                    'quickbooks.intuit.com/aag/accountants/payroll/fullservice-payroll-for-accountants/':
                  case dev +
                    'quickbooks.intuit.com/aag/accountants/payroll/online-payroll-for-accountants/':
                  case dev + 'quickbooks.intuit.com/aag/accountants/payroll/overview/':
                  case dev + 'quickbooks.intuit.com/aag/accountants/compchart/':
                  case dev + 'quickbooks.intuit.com/oa/accountants/pw/prospects-qboa/':
                    window.loadNewLivePerson('acctsales', '', '');
                    break;
                  case dev + 'quickbooks.intuit.com/accounting/advanced/':
                  case dev + 'quickbooks.intuit.com/accounting/advanced/contact-us/':
                    window.loadNewLivePerson('QBES', '', '');
                    break;
                  default:
                    break;
                }
          }.apply(this, arguments);
        } finally {
          if ($___old_1aeb4191f52d9ddc)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_1aeb4191f52d9ddc
            ));
        }
      },
      3190443,
      [3218915],
      535553,
      [535321]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (!utils)
          var utils = {
            getQueryString: function (e) {
              var i;
              return (i = e.split('?')).length > 1 ? i[1] : '';
            },
            getParameter: function (e) {
              var i,
                t,
                o = window.location.search.substring(1).split('&');
              for (i = 0; i < o.length; i++)
                if ((t = o[i].split('='))[0] == e) return unescape(t[1]);
              return '';
            },
            isEmpty: function (e) {
              return null == e || 0 == e.length;
            },
            log: function (e, i) {
              $.ajax({
                url: '/log_messages',
                type: 'GET',
                cache: !1,
                data: { logType: e, logInfo: i },
              }).done(function (i) {
                'undefined' != typeof console &&
                  console.log &&
                  'debug' == e &&
                  console.log('Cookie Attribution Logic Log Message: ' + i);
              });
            },
          };
        utils.cookies ||
          (utils.cookies = (function () {
            return (
              (this.getCookieValue = function (e) {
                var i = document.cookie.indexOf(';', e);
                return (
                  -1 == i && (i = document.cookie.length),
                  unescape(document.cookie.substring(e, i))
                );
              }),
              {
                getCookie: function (e) {
                  for (var i = e + '=', t = i.length, o = document.cookie.length, n = 0; n < o; ) {
                    var r = n + t;
                    if (document.cookie.substring(n, r) == i) return getCookieValue(r);
                    if (0 == (n = document.cookie.indexOf(' ', n) + 1)) break;
                  }
                  return '';
                },
                setCookie: function (e, i, t, o, n, r, s) {
                  document.cookie =
                    e +
                    '=' +
                    i +
                    (t ? '; expires=' + t : '') +
                    (o ? '; path=' + o : '') +
                    (n ? '; domain=' + n : '') +
                    (r ? '; SameSite=' + r : '') +
                    (s ? '; Secure' : '');
                },
                deleteCookie: function (e, i, t) {
                  this.getCookie(e) &&
                    (document.cookie =
                      e +
                      '=' +
                      (i ? '; path=' + i : '') +
                      (t ? '; domain=' + t : '') +
                      '; expires=Thu, 01-Jan-70 00:00:01 GMT');
                },
                canHandleSameSiteAttribute: function (e) {
                  for (
                    var i = [
                        /\(iP.+; CPU .*OS 12[_\d]*.*\) AppleWebKit\//,
                        /^.*Macintosh;.*Mac OS X 10_14.*Version.*Safari.*$/,
                        /(Chromium|Chrome)\/(5[1-9]|6[0-6])\.(\d+)(?:\.(\d+)|)(?:\.(\d+)|)/,
                        /UCBrowser\/[0-9][0-1]?.(\d+)\.(\d+)[\.\d]*!/,
                        /UCBrowser\/12.[0-9][0-2]?.(\d+)[\.\d]*!/,
                        /UCBrowser\/12.13.[0-2][\.\d]*/,
                        /(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(\d+)/,
                        /\bMSIE\s+7\.0;.*\bTrident\/(\d+)\.0/,
                      ],
                      t = 0;
                    t < i.length;
                    t++
                  ) {
                    var o = i[t];
                    if (null !== e.match(o)) return !1;
                  }
                  return !0;
                },
              }
            );
          })()),
          (function (e, i, t) {
            const $___old_63c728c3d0b2813f = {}.constructor.getOwnPropertyDescriptor(
              Navigator.prototype,
              'userAgent'
            );
            try {
              if ($___old_63c728c3d0b2813f)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___stub_fb986baf23da602c.userAgent
                ));
              return function () {
                var o = utils.getParameter('loggingEnabled') || !1,
                  n = '90days',
                  r = '',
                  s = 'qbn.',
                  l = !0,
                  c = '',
                  a = '',
                  u = '',
                  p = 'QOE-COM',
                  d = 'qbo_sc',
                  m = 'qbo_sctimer',
                  g = utils.cookies.canHandleSameSiteAttribute(navigator.userAgent),
                  C = g ? 'None' : '',
                  f = !!g,
                  k = {
                    cdev01: 'qbn.ptc.',
                    'localdev[.]sr': 'qbn.ptc.',
                    localhost: 'qbn.ptc.',
                    'qa[.]sr': 'qbn.ptc.',
                    'perf[.]sr': 'qbn.',
                    qasp: 'qbn.ptc.',
                    perfsp: 'qbn.',
                  },
                  E = ['.com', '.net', '.org'],
                  S = { android: 'ANDROID', iphone: 'IPHONE', dfault: 'UNKWN-DEVICE' },
                  v = { 'www.intuit.com': 'INTUIT', 'intuit.mv.intuit.com': 'MV_INTUIT' },
                  O = [
                    'google.com',
                    'aol.com',
                    'bing.com',
                    'yahoo.com',
                    'lycos.com',
                    'ask.com',
                    'ctsdev',
                  ],
                  I = {
                    'm.intuit.com': 'MOBILEINTUIT',
                    'qbinproduct.intuit.com/mobile': 'MOBILE',
                  },
                  T = {
                    SCGOOGLE: 'SEO-GOO_',
                    SCAOL: 'SEO-AOL_',
                    SCBING: 'SEO-MSN_',
                    SCYAHOO: 'SEO-YAH_',
                    SCLYCOS: 'SEO-LYC_',
                    SCASK: 'SEO-ASK_',
                    SCMOBILEINTUITANDROID: 'MOB-WEB-AND',
                    SCMOBILEINTUITOTHER: 'MOB-WEB',
                    SCMOBILEANDROID: 'MOB-IPD-AND',
                    SCMOBILEOTHER: 'MOB-IPD',
                    SCINTUIT: 'INT',
                    SCMV_INTUIT: 'INT',
                    SCCTSDEV: 'SEO-GOO_',
                  };
                function x (i, o, r, s, l, d) {
                  b('Inside analyzeAndSetSCCookie()');
                  var m = !1;
                  utils.isEmpty(l) || (m = !0),
                    b('SC Cookie exists :: ' + m + ' :: SC Cookie :: ' + l);
                  var g = [],
                    C = 0,
                    f = '',
                    k = '',
                    E = '',
                    v = '',
                    O = '',
                    I = location.hostname,
                    x = (I.split('.com') || [])[0] + '.com';
                  if (
                    (b('Current Server Name:' + I),
                    m &&
                      ((C = d || 0),
                      (g = (function (e) {
                        var i = /(CID:|SC:|EXT:|INT:)/i,
                          o = [],
                          n = ['', '', '', ''];
                        try {
                          if (!utils.isEmpty(e)) {
                            o = e.split('|');
                            var r = {};
                            if (!utils.isEmpty(o))
                              for (var s = 0; s < o.length; s++)
                                if (utils.isEmpty(o[s])) b('Empty KeyValue Pair');
                                else {
                                  b('Checking Pipe Split Value pair  == ' + o[s]);
                                  var l = o[s].split(':') || [],
                                    c = l.slice(1).join(':');
                                  if (
                                    (b('Key Value :: ' + l[0]),
                                    b('pairVal == ' + c),
                                    b('No of pieces after split :: ' + l.length),
                                    null != l && l.length >= 2 && !utils.isEmpty(l[0]))
                                  )
                                    if (
                                      null != c &&
                                      'null' != c.toLowerCase() &&
                                      'OTH-HTTP' != c.toLowerCase() &&
                                      'OTH-HTTPS' != c.toLowerCase()
                                    )
                                      if (i.test(c)) {
                                        b('Pattern encountered');
                                        var a = '',
                                          u = l[0];
                                        try {
                                          /cid:/i.test(c)
                                            ? ((a = c.substring(
                                                c.toLowerCase().indexOf('cid:') + 4
                                              )),
                                              (u = 'cid'))
                                            : /sc:/i.test(c)
                                            ? ((a = c.substring(
                                                c.toLowerCase().indexOf('sc:') + 3
                                              )),
                                              (u = 'sc'))
                                            : ((u = l[0]), (a = ''));
                                        } catch (e) {
                                          (u = l[0]), (a = '');
                                        }
                                        b('Recovered Key =' + u + '\nRecovered Value=' + a),
                                          (r[u.toLowerCase()] = a);
                                      } else
                                        b('Pattern not encountered'), (r[l[0].toLowerCase()] = c);
                                    else r[l[0].toLowerCase()] = '';
                                  else b('Data Corruption/Non-KeyValue pair');
                                }
                            b('Object of existing values: '),
                              b(r),
                              r.cid != t && (n[0] = null != r.cid ? r.cid : ''),
                              r.sc != t && (n[1] = null != r.sc ? r.sc : ''),
                              r.ext != t && (n[2] = null != r.ext ? r.ext : ''),
                              r.int != t && (n[3] = null != r.int ? r.int : '');
                          }
                        } catch (e) {
                          b('************Error getting existing cookie values***********'),
                            b('Salvage whatever we can, and reset others to blanks' + e.message),
                            b(
                              '\ncid=' + n[0] + '\nsc=' + n[1] + '\next=' + n[2] + '\nint=' + n[3]
                            );
                        }
                        return n;
                      })(l)),
                      b('Previous SC :: cookie values :: ' + l + ' cookie age :: ' + C),
                      b('Split Values :: ' + g),
                      null != g && g.length >= 4))
                  )
                    try {
                      b(
                        'cidExisting :: ' +
                          (f = null != g[0] ? g[0] : '') +
                          'scExisting :: ' +
                          (k = null != g[1] ? g[1] : '') +
                          'externalExisting :: ' +
                          (E = null != g[2] ? g[2] : '') +
                          'internalExisting :: ' +
                          (v = null != g[3] ? g[3] : '')
                      );
                    } catch (e) {
                      b(
                        'There was an error extracting the existing cookie values.. Resetting all existing values to blank'
                      ),
                        (f = ''),
                        (k = ''),
                        (E = ''),
                        (v = ''),
                        b('Resetting complete.');
                    }
                  if (m)
                    if (utils.isEmpty(i))
                      if (utils.isEmpty(o))
                        if (utils.isEmpty(s))
                          null != (N = e.location.pathname || '') &&
                          /\/mobile\/new_login\.jsp/.test(N)
                            ? ((o =
                                c == S.android ? T.SCMOBILEINTUITANDROID : T.SCMOBILEINTUITOTHER),
                              b(
                                'CID NOT present; SC NOT present; request url contains //mobile//new_login.jsp'
                              ),
                              b('SC val = ' + o),
                              b(
                                'prior cookie present, cid null, SC null,  cookie value = ' +
                                  (O = 'cid:' + f + '|sc:' + o + '|ext:' + E + '|int:' + v + '|')
                              ))
                            : (b('Internal Domain = ' + x),
                              b(
                                'prior cookie present, cid null, SC set to Direct,  cookie value = ' +
                                  (O = 'cid:' + f + '|sc:' + k + '|ext:' + E + '|int:' + x + '|')
                              ));
                        else {
                          L = h(s);
                          utils.isEmpty(L)
                            ? ((L = y(s)),
                              utils.isEmpty(L)
                                ? b(
                                    'prior cookie present, cid null, SC null, Int Url present and existing int url; cookie value = ' +
                                      (O =
                                        'cid:' + f + '|sc:' + k + '|ext:' + E + '|int:' + v + '|')
                                  )
                                : b(
                                    'prior cookie present, cid null, SC null, Int Url present; cookie value = ' +
                                      (O =
                                        'cid:' + f + '|sc:' + k + '|ext:' + E + '|int:' + L + '|')
                                  ))
                            : b(
                                'prior cookie present, cid null, SC null, Ext Url present; cookie value = ' +
                                  (O = 'cid:' + f + '|sc:' + k + '|ext:' + L + '|int:' + v + '|')
                              );
                        }
                      else
                        b(
                          'prior cookie present, cid null, SC not null,  cookie value = ' +
                            (O = 'cid:' + f + '|sc:' + o + '|ext:' + E + '|int:' + v + '|')
                        );
                    else
                      (a = n),
                        b(
                          'prior cookie present, cid not null, cookie value = ' +
                            (O = 'cid:' + i + '|sc:' + k + '|ext:' + E + '|int:' + v + '|')
                        );
                  else {
                    if (utils.isEmpty(i))
                      if (utils.isEmpty(o))
                        if (utils.isEmpty(s)) {
                          var N;
                          null != (N = e.location.pathname || '') &&
                          /\/mobile\/new_login\.jsp/.test(N)
                            ? ((o =
                                c == S.android ? T.SCMOBILEINTUITANDROID : T.SCMOBILEINTUITOTHER),
                              b(
                                'CID NOT present; SC NOT present; request url contains //mobile//new_login.jsp'
                              ),
                              b('SC val = ' + o),
                              b(
                                'no prior cookie, cid null, SC null,  cookie value = ' +
                                  (O = 'cid:|sc:' + o + '|ext:|int:|')
                              ))
                            : (b('Internal Domain = ' + x),
                              b(
                                'no prior cookie, cid null, SC set to Direct,  cookie value = ' +
                                  (O = 'cid:|sc:|ext:' + p + '|int:' + x + '|')
                              ));
                        } else {
                          var L = h(s);
                          utils.isEmpty(L)
                            ? ((L = y(s)),
                              utils.isEmpty(L)
                                ? b(
                                    'no prior cookie, cid null, SC null, Int available; cookie value = ' +
                                      (O = 'cid:|sc:|ext:|int:http://quickbooks.intuit.com|')
                                  )
                                : b(
                                    'no prior cookie, cid null, SC null, Int available; cookie value = ' +
                                      (O = 'cid:|sc:|ext:|int:' + L + '|')
                                  ))
                            : b(
                                'no prior cookie, cid null, SC null, Ext available; cookie value = ' +
                                  (O = 'cid:|sc:|ext:' + L + '|int:|')
                              );
                        }
                      else
                        b(
                          'no prior cookie, cid null, SC not null,  cookie value = ' +
                            (O = 'cid:|sc:' + o + '|ext:|int:|')
                        );
                    else
                      b(
                        'no prior cookie, cid not null, cookie value = ' +
                          (O = utils.isEmpty(o)
                            ? 'cid:' + i + '|sc:|ext:|int:|'
                            : 'cid:' + i + '|sc:' + o + '|ext:|int:|')
                      );
                    a = n;
                  }
                  u = unescape(O);
                }
                function h (e) {
                  b('Referer Url : ' + e);
                  var i,
                    t,
                    o = '';
                  if (utils.isEmpty(e)) return o;
                  for (i in (b('External URL Map: ' + O), O))
                    if (-1 != e.toLowerCase().indexOf(O[i])) {
                      var n = O[i].split('.')[0].toUpperCase();
                      return (o = T['SC' + n]);
                    }
                  for (t in (b('Mobile URL Map: ' + I), I))
                    if (-1 != e.toLowerCase().indexOf(t))
                      return (o =
                        c == S.android ? T['SC' + I[t] + 'ANDROID'] : T['SC' + I[t] + 'OTHER']);
                  if (!/\.intuit\.com/i.test(e)) {
                    var r;
                    for (r in E)
                      if (e.indexOf(E[r]) > -1) {
                        var s = e.split(E[r]);
                        (o = 'OTH-' + s[0] + E[r]), b('siteType : ' + E[r]), b('Split on : ' + s);
                      }
                    return o;
                  }
                  return b('Fall Through for External Link Check'), o;
                }
                function y (e) {
                  b('Referer Url : ' + e);
                  var i,
                    t = '';
                  if (utils.isEmpty(e)) return t;
                  for (i in (b('Internal URL Map: ' + v), v))
                    if (-1 != e.toLowerCase().indexOf(i)) return (t = T['SC' + v[i]]);
                  return /\.intuit\.com/.test(e) && !/quickbooksonline\.intuit\.com/.test(e)
                    ? (b('Internal Domain = ' + (t = e.split('.intuit.com')[0] + '.intuit.com')),
                      t)
                    : (b('Fall Through for Internal Link Check'), t);
                }
                function N () {
                  const $___old_87f35c6522991bfe = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_87f35c6522991bfe)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_fb986baf23da602c.userAgent
                      ));
                    return function () {
                      b('=======Inside executeQBTrackingLogic method=======');
                      var t = i.referrer || '',
                        o = navigator.userAgent || '',
                        n = e.location.origin + e.location.pathname || '',
                        r = utils.getParameter('id') || utils.getParameter('ID') || '',
                        l = utils.getParameter('cid') || utils.getParameter('CID') || '',
                        p = utils.getParameter('sc') || utils.getParameter('SC') || '',
                        g = utils.getParameter('m360refdomain') || '';
                      b('ReferURL : ' + t),
                        b('m360 ReferURL : ' + g),
                        b('Browser = ' + o),
                        b('ID : ' + r),
                        b('CID : ' + l),
                        b('SC : ' + p),
                        utils.isEmpty(g) || b('Modified ReferURL : ' + (t = g)),
                        (function (e) {
                          utils.isEmpty(c) &&
                            (utils.isEmpty(e)
                              ? ((c = S.dfault), b('mDevice = ' + S.dfault))
                              : /android/i.test(e)
                              ? ((c = S.android), b('mDevice = ' + S.android))
                              : /iphone/i.test(e) && ((c = S.iphone), b('mDevice = ' + S.iphone)));
                        })(o);
                      var k = s + d,
                        E = s + m;
                      b('Looking for Existing Cookie : ' + k);
                      var v = utils.cookies.getCookie(k),
                        O = utils.cookies.getCookie(E);
                      b('Existing Cookie : ' + v),
                        (!utils.isEmpty(r) &&
                          !utils.isEmpty(p) &&
                          !utils.isEmpty(l) &&
                          !/ppc_login\.jsp/i.test(n)) ||
                        (!utils.isEmpty(t) && /search2/i.test(t)) ||
                        !utils.isEmpty(utils.getParameter('ad_id')) ||
                        (/search\./i.test(n) && !/ppc_login\.jsp/i.test(n))
                          ? (x(l, p, 0, t, v), b('PPC Flow Cookie Logic executed !'))
                          : utils.isEmpty(t)
                          ? utils.isEmpty(t) &&
                            (b('NON PPC Flow - RefUrl NOT Present Cookie Logic executing !'),
                            x(l, p, 0, t, v, O),
                            b('NON PPC Flow - RefUrl NOT Present Cookie Logic executed !'))
                          : (b('NON PPC Flow - RefUrl Present Cookie Logic executing !'),
                            x(l, p, 0, t, v, O),
                            b('NON PPC Flow - RefUrl Present Cookie Logic executed !')),
                        (function () {
                          new Date();
                          var e = new Date();
                          e.setTime(e.getTime() + 7776000000);
                          var i = '.intuit.com',
                            t = '/',
                            o = a,
                            n = u;
                          if ('90days' == o)
                            utils.cookies.setCookie(
                              s + m,
                              e.getTime(),
                              e.toGMTString(),
                              t,
                              i,
                              C,
                              f
                            ),
                              (o = e.toGMTString());
                          else {
                            var r = utils.cookies.getCookie(s + m);
                            if (r) {
                              var l = Number(r),
                                c = new Date(l).toGMTString();
                              utils.cookies.setCookie(s + m, l, c, t, i, C, f), (o = c);
                            } else
                              utils.cookies.setCookie(
                                s + m,
                                e.getTime(),
                                e.toGMTString(),
                                t,
                                i,
                                C,
                                f
                              ),
                                (o = e.toGMTString());
                          }
                          utils.isEmpty(n) || utils.cookies.setCookie(s + d, n, o, t, i, C, f);
                        })();
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_87f35c6522991bfe)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_87f35c6522991bfe
                      ));
                  }
                }
                function b (e) {
                  o && console.log(e);
                }
                $(i).ready(function () {
                  try {
                    (s =
                      (function () {
                        var e,
                          i = '';
                        if (
                          (b('Inside getcookiePrefix()'),
                          utils.isEmpty(r) && (r = location.hostname.toLowerCase() || ''),
                          l)
                        ) {
                          var t = utils.getParameter('host');
                          utils.isEmpty(t) || (r = t);
                        }
                        for (e in k)
                          if (new RegExp('^' + e).test(r)) {
                            i = k[e];
                            break;
                          }
                        return b('Cookie Prefix :: ' + i), i;
                      })() || 'qbn.'),
                      N();
                  } catch (e) {
                    utils.log('error', 'Error :: ' + e);
                  }
                });
              }.apply(this, arguments);
            } finally {
              if ($___old_63c728c3d0b2813f)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___old_63c728c3d0b2813f
                ));
            }
          })(window, document);
        function getQueryVariable (variable) {
          var query = window.location.search.substring(1);
          var vars = query.split('&');
          for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] == variable) return pair[1];
          }
          return false;
        }
        window.addEventListener('load', refId);
        function refId () {
          const $___old_8b9caf99179d4566 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_8b9caf99179d4566)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_fb986baf23da602c.userAgent
              ));
            return function () {
              var exp = (new Date(), new Date());
              exp.setTime(exp.getTime() + 7776000000);
              exp = exp.toGMTString();
              var isSameSiteCompatible = utils.cookies.canHandleSameSiteAttribute(
                  navigator.userAgent
                ),
                sameSiteParam = isSameSiteCompatible ? 'None' : '',
                isCookieSecure = isSameSiteCompatible ? true : false;
              console.log('refId : isSameSiteCompatible : ' + isSameSiteCompatible);
              if (getQueryVariable('cjevent'))
                document.cookie =
                  'ref_id=' +
                  getQueryVariable('cjevent') +
                  ';expires=' +
                  exp +
                  '; domain=.intuit.com;path=/' +
                  (sameSiteParam ? '; SameSite=' + sameSiteParam : '') +
                  (isCookieSecure ? '; Secure' : '');
            }.apply(this, arguments);
          } finally {
            if ($___old_8b9caf99179d4566)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_8b9caf99179d4566
              ));
          }
        }
      },
      3163533,
      430636
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        window.qbesTest = window.qbesTest || {};
        window.qbesTest.testing = true;
        try {
          var LONG_VIDEO_PERCENTAGE_TRACKING_INCREMENTS = [
            { increment: 0.1, trackValue: 0 },
            { increment: 0.2, trackValue: 0.1 },
            { increment: 0.25, trackValue: 0.2 },
            { increment: 0.3, trackValue: 0.25 },
            { increment: 0.4, trackValue: 0.3 },
            { increment: 0.5, trackValue: 0.4 },
            { increment: 0.6, trackValue: 0.5 },
            { increment: 0.7, trackValue: 0.6 },
            { increment: 0.75, trackValue: 0.7 },
            { increment: 0.8, trackValue: 0.75 },
            { increment: 0.9, trackValue: 0.8 },
            { increment: 0.95, trackValue: 0.9 },
            { increment: 1, trackValue: 0.95 },
          ];
          var SHORT_VIDEO_PERCENTAGE_TRACKING_INCREMENTS = [
            { increment: 0.25, trackValue: 0 },
            { increment: 0.5, trackValue: 0.25 },
            { increment: 0.75, trackValue: 0.5 },
            { increment: 0.9, trackValue: 0.75 },
            { increment: 1, trackValue: 0.95 },
          ];
          var youTubeAnalyticsTrackingStores = {};
          function mergeState (videoState, newState) {
            var newObj = {};
            for (var key in videoState) {
              if (key === 'hasTracked' && newState.hasTracked && newState.hasTracked) {
                newObj.hasTracked = videoState.hasTracked.concat(newState.hasTracked);
                continue;
              }
              if (newState.hasOwnProperty(key) && newState[key] !== videoState[key]) {
                newObj[key] = newState[key];
                continue;
              }
              newObj[key] = videoState[key];
            }
            return newObj;
          }
          function createYouTubeTrackingStore (formattingFunction) {
            var videoState = {
              hasStarted: false,
              hasTracked: [],
              percentageToTrack: null,
              videoDuration: 0,
              videoId: '',
              videoTitle: '',
            };
            return {
              getState: function () {
                return videoState;
              },
              update: function (newState) {
                videoState = mergeState(videoState, newState);
                if (videoState.videoId && videoState.videoTitle) formattingFunction(videoState);
              },
            };
          }
          function find (collection, predicate) {
            var length = collection.length;
            for (var i = 0; i < length; i++) if (predicate(collection[i])) return collection[i];
            return undefined;
          }
          function checkMessageForYouTubeOrigin (event) {
            if (event.origin !== 'https://www.youtube.com') return false;
            return true;
          }
          function validateEventData (eventData) {
            if (eventData[0] !== '{') return false;
            return JSON.parse(eventData);
          }
          function checkPlaybackMessageForContent (event) {
            var playbackData = validateEventData(event.data);
            if (!playbackData) return false;
            if (playbackData.event !== 'infoDelivery' && playbackData.event !== 'onStateChange')
              return false;
            if (!playbackData.info) return false;
            if (playbackData.event === 'onStateChange' && typeof playbackData.info !== 'number')
              return false;
            if (playbackData.event === 'infoDelivery' && typeof playbackData.info !== 'object')
              return false;
            if (playbackData.event === 'infoDelivery' && !playbackData.info.currentTime)
              return false;
            return playbackData;
          }
          function removeMessageListener (callback) {
            if (window.removeEventListener) window.removeEventListener('message', callback);
            else if (window.detachEvent) window.detachEvent('message', callback);
          }
          function createVideoPercentageMonitor (storeId, videoInfo, percentageIncrements) {
            return function monitorVideoPercentages (event) {
              if (!checkMessageForYouTubeOrigin(event)) return;
              if (youTubeAnalyticsTrackingStores.currentlyPlaying !== storeId) {
                removeMessageListener(monitorVideoPercentages);
                return;
              }
              var playbackData = checkPlaybackMessageForContent(event);
              if (!playbackData) return;
              var storeState = youTubeAnalyticsTrackingStores[storeId].getState();
              if (playbackData.event === 'onStateChange' && playbackData.info !== 1) return;
              if (!storeState.hasStarted)
                return youTubeAnalyticsTrackingStores[storeId].update({
                  hasStarted: true,
                  hasTracked: percentageIncrements[0].increment,
                  percentageToTrack: 0,
                  videoDuration: videoInfo.duration,
                  videoId: videoInfo.videoData.video_id,
                  videoTitle: videoInfo.videoData.title,
                });
              if (storeState.hasStarted && playbackData.event === 'onStateChange') return;
              var percentagePlayed =
                Math.floor((playbackData.info.currentTime / videoInfo.duration) * 20) / 20;
              var percentageToCheck = find(percentageIncrements, function (percentageIncrement) {
                return percentagePlayed < percentageIncrement.increment;
              });
              if (storeState.hasTracked.indexOf(percentageToCheck.increment) === -1)
                youTubeAnalyticsTrackingStores[storeId].update({
                  hasTracked: percentageToCheck.increment,
                  percentageToTrack: percentageToCheck.trackValue,
                });
              if (percentageToCheck.increment === 1)
                removeMessageListener(monitorVideoPercentages);
            };
          }
          function monitorVideoPercentagePlayedFromMessages (
            storeId,
            videoInfo,
            percentageIncrements
          ) {
            var monitorVideoPercentages = createVideoPercentageMonitor(
              storeId,
              videoInfo,
              percentageIncrements
            );
            if (window.addEventListener)
              window.addEventListener('message', monitorVideoPercentages);
            else if (window.attachEvent) window.attachEvent('message', monitorVideoPercentages);
          }
          function simpleMap (array, projectionFunction) {
            var newArray = [];
            var length = array.length;
            for (var i = 0; i < length; i++) newArray.push(projectionFunction(array[i]));
            return newArray;
          }
          function determinePercentageIncrements (videoDuration) {
            var copier = function (item) {
              return { increment: item.increment, trackValue: item.trackValue };
            };
            return videoDuration >= 300
              ? simpleMap(LONG_VIDEO_PERCENTAGE_TRACKING_INCREMENTS, copier)
              : simpleMap(SHORT_VIDEO_PERCENTAGE_TRACKING_INCREMENTS, copier);
          }
          function formatAndSendYouTubeTrackingData (state) {
            var percentage =
              state.percentageToTrack === 0
                ? 'start'
                : state.percentageToTrack === 0.95
                ? 'complete'
                : (state.percentageToTrack * 100).toString() + '%';
            var formattedIdString = 'yt:' + state.videoId;
            var formattedTitle = state.videoTitle.replace(/[^\w\d]/gi, '');
            wa.trackLinkPlus(true, {
              linkName: 'videoTrackYoutube',
              videoTrack: percentage + '|' + formattedIdString + '|' + formattedTitle,
            });
          }
          function initializeYouTubeAnalyticsTracking (formattingFunction, videoInfo) {
            var storeId = videoInfo.videoData.video_id;
            if (!storeId) return;
            youTubeAnalyticsTrackingStores.currentlyPlaying = storeId;
            var percentageIncrements = determinePercentageIncrements(videoInfo.duration);
            if (!youTubeAnalyticsTrackingStores[storeId])
              youTubeAnalyticsTrackingStores[storeId] = createYouTubeTrackingStore(
                formattingFunction
              );
            monitorVideoPercentagePlayedFromMessages(storeId, videoInfo, percentageIncrements);
          }
          function checkInitialDeliveryForContent (event) {
            var initialDeliveryData = validateEventData(event.data);
            if (initialDeliveryData.event !== 'initialDelivery') return false;
            if (!initialDeliveryData.info || typeof initialDeliveryData.info !== 'object')
              return false;
            if (
              !initialDeliveryData.info.videoData ||
              typeof initialDeliveryData.info.videoData !== 'object'
            )
              return false;
            if (
              typeof initialDeliveryData.info.videoData.title !== 'string' ||
              typeof initialDeliveryData.info.videoData.video_id !== 'string'
            )
              return false;
            return initialDeliveryData;
          }
          function initialDeliveryMessageListener (event) {
            if (!checkMessageForYouTubeOrigin(event)) return;
            var initialDeliveryData = checkInitialDeliveryForContent(event);
            if (initialDeliveryData)
              initializeYouTubeAnalyticsTracking(formatAndSendYouTubeTrackingData, {
                duration: initialDeliveryData.info.duration,
                id: initialDeliveryData.id,
                videoData: initialDeliveryData.info.videoData,
              });
          }
          if (window.addEventListener)
            window.addEventListener('message', initialDeliveryMessageListener);
          else if (window.attachEvent)
            window.attachEvent('message', initialDeliveryMessageListener);
        } catch (err) {}
      },
      3190338,
      [3249278],
      412204,
      [496140]
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        function formatUPSResponse (results) {
          if (results && results.status === 'ok') {
            let companyTraits = { hasPayroll: false, hasPayments: false, numEmployees: 0 };
            if (results.companyProfile && results.companyProfile.profileResults) {
              let ups = results.companyProfile.profileResults.data;
              if (ups && ups.profile && ups.profile.company) {
                let upsNodes = ups.profile.company.edges;
                if (upsNodes && Array.isArray(upsNodes) && upsNodes.length)
                  if (upsNodes[0].node) {
                    let entitlements = upsNodes[0].node.entitlements;
                    if (entitlements) {
                      if (
                        entitlements.hasPayments &&
                        Array.isArray(entitlements.hasPayments) &&
                        entitlements.hasPayments.length
                      )
                        companyTraits.hasPayments = entitlements.hasPayments[0].value;
                      if (
                        entitlements.hasPayroll &&
                        Array.isArray(entitlements.hasPayroll) &&
                        entitlements.hasPayroll.length
                      )
                        companyTraits.hasPayroll = entitlements.hasPayroll[0].value;
                    }
                    if (upsNodes[0].node.payroll && upsNodes[0].node.payroll.insights) {
                      let numEmployeesArr = upsNodes[0].node.payroll.insights.numEmployees;
                      if (
                        numEmployeesArr &&
                        Array.isArray(numEmployeesArr) &&
                        numEmployeesArr.length > 0
                      )
                        companyTraits.numEmployees = numEmployeesArr[0].value;
                    }
                  }
              }
            }
            window.mktg_datalayer.traits = companyTraits;
          }
        }
        $(document).ready(function () {
          const $___old_ef27e48defd61790 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'XMLHttpRequest'
            ),
            $___old_e353c8e800a4ed76 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'XMLHttpRequest'
            );
          try {
            if ($___old_ef27e48defd61790)
              ({}.constructor.defineProperty(
                window,
                'XMLHttpRequest',
                $___stub_c92db3a21e6ea955.XMLHttpRequest
              ));
            if ($___old_e353c8e800a4ed76)
              ({}.constructor.defineProperty(
                window,
                'XMLHttpRequest',
                $___stub_c92db3a21e6ea955.XMLHttpRequest
              ));
            return function () {
              let mktg_ivid = Bootstrapper.Cookies.get('ivid');
              if (mktg_ivid)
                $.ajax({
                  url: 'https://marketingplatform.api.intuit.com/v1/company',
                  data: { ivid: mktg_ivid },
                  type: 'GET',
                  headers: {
                    Authorization:
                      'Intuit_APIKey intuit_apikey=prdakyresPssbUgTk0rlcx3K9v9Q6tFvxIDs0i67',
                    'Content-Type': 'application/json',
                  },
                  success: function (results) {
                    if (!window.mktg_datalayer) window.mktg_datalayer = {};
                    formatUPSResponse(results);
                  },
                });
            }.apply(this, arguments);
          } finally {
            if ($___old_ef27e48defd61790)
              ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_ef27e48defd61790));
            if ($___old_e353c8e800a4ed76)
              ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_e353c8e800a4ed76));
          }
        });
      },
      3229281,
      635578
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var param_ti = '5153170';
        var param_gv = '';
        var param_ea = '';
        var param_ec = '';
        var param_el = '';
        var param_ev = '';
        var pageLoad = true;
        var arrayName = '';
        var onload_function = function () {
          var name = '';
          if (arrayName === 'uetq' || arrayName === '') name = window.uetq || [];
          else if (arrayName !== undefined && arrayName != 'uetq') name = window.arrayName || [];
          var o = { ti: param_ti };
          (o.q = name), (name = new UET(o));
          if (pageLoad) name.push('pageLoad');
          var local_object = {};
          param_gv ? (local_object['gv'] = +(+param_gv).toFixed(3)) : '',
            param_ea ? (local_object['ea'] = param_ea) : '',
            param_ec ? (local_object['ec'] = param_ec) : '',
            param_el ? (local_object['el'] = param_el) : '',
            param_ev ? (local_object['ev'] = param_ev) : '';
          name.push(local_object);
        };
        var local_scr_url = '//' + 'bat.bing.com/bat.js';
        Bootstrapper.loadScriptCallback(local_scr_url, onload_function);
      },
      3124831,
      463886
    );
    Bootstrapper.bindDependencyDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        try {
          (function () {
            var qboCookieName = 'qbn.qbo_sc';
            var qboCookieTimerName = 'qbn.qbo_sctimer';
            var qbseCookieName = 'qbse.cid';
            var qbseCookieTimerName = 'qbse.cid_timer';
            var qboCookie = getCookie(qboCookieName);
            var qboCookieTimer = getCookie(qboCookieTimerName);
            var qbseCookie = getCookie(qbseCookieName);
            var hasCID =
              (location.search + location.hash).toLowerCase().indexOf('cid=') > -1 ? true : false;
            var hasXCID =
              (location.search + location.hash).toLowerCase().indexOf('xcid=') > -1 ? true : false;
            var expire, newCookieVal;
            if (qboCookie !== null) {
              expire = getExpireDays(false, qboCookieTimerName);
              var xcidStr = '';
              if (qbseCookie && qbseCookie.toLowerCase().indexOf('xcid:') > -1)
                xcidStr = qbseCookie.substring(qbseCookie.toLowerCase().lastIndexOf('xcid:'));
              if (qboCookie.toLowerCase().indexOf('xcid:') > -1)
                setCookie(
                  qbseCookieName,
                  qboCookie.substr(0, qboCookie.toLowerCase().indexOf('xcid:')) + xcidStr,
                  expire
                );
              else setCookie(qbseCookieName, qboCookie + xcidStr, expire);
              setCookie(qbseCookieTimerName, Math.floor(qboCookieTimer / 1000), expire);
            }
            if (qboCookie === null)
              if (hasCID || hasXCID) {
                newCookieVal = genrateQBSECookie();
                expire = getExpireDays(true);
                setCookie(qboCookieName, newCookieVal, expire, true);
                var expireDate = new Date();
                expireDate.setTime(expireDate.getTime() + 90 * 86400000);
                var newExpireTP = Math.floor(expireDate);
                setCookie(qboCookieTimerName, newExpireTP, expire);
              }
            qbseCookie = getCookie(qbseCookieName);
            if (qbseCookie.length > 254 || qbseCookie.match(/sc:/g).length > 1) {
              expire = getExpireDays(false, qbseCookieTimerName);
              setCookie(qbseCookieName, cleanQBSEcookie(), expire);
            }
            function cleanQBSEcookie () {
              var oldValue = getCookie(qbseCookieName);
              var obj = {};
              var i, ary, ary2;
              if (oldValue !== null) {
                ary = oldValue.split('|');
                for (i = 0; i < ary.length; i++) {
                  ary2 = ary[i].split(':');
                  if (ary2.length == 2) obj[ary2[0]] = ary2[1];
                }
              }
              var st =
                'cid:' +
                (obj.cid ? obj.cid : '') +
                '|sc:' +
                (obj.sc ? obj.sc : '') +
                '|ext:' +
                (obj.ext ? obj.ext : '') +
                '|int:' +
                (obj.int ? obj.int : '') +
                '|xcid:' +
                (obj.xcid ? obj.xcid : '') +
                '|';
              return st.substr(0, 254);
            }
            function genrateQBSECookie () {
              var nintyDayCookieName = 'qbse.cid';
              var nintyDayCookieTimestampName = 'qbse.cid_timer';
              var externalUrlMappings = {
                GOOGLE: [
                  'google.com.au',
                  'google.com.br',
                  'google.ca',
                  'www.google.fr',
                  'google.co.in',
                  'google.co.uk',
                ],
                USGOOGLE: ['google.com'],
                AOL: [
                  'aol.com',
                  'aol.com.au',
                  'aol.com.br',
                  'aol.ca',
                  'www.aol.fr',
                  'aol.in',
                  'aol.co.uk',
                ],
                BING: ['bing.com'],
                YAHOO: [
                  'yahoo.com',
                  'au.yahoo.com',
                  'br.yahoo.com',
                  'ca.yahoo.com',
                  'fr.yahoo.com',
                  'in.yahoo.com',
                  'uk.yahoo.com',
                ],
                LYCOS: [
                  'lycos.com',
                  'lycos.com.au',
                  'lycos.ca',
                  'lycos.in',
                  'lycos.co.uk',
                  'lycos.fr',
                ],
                ASK: ['ask.com'],
                FACEBOOK: ['facebook.com'],
                KATOO: ['uk.kartoo.com'],
                ZEN: ['wrx.zen.co.uk'],
                YAHOOSEARCH: ['r.search.yahoo.com'],
              };
              var internalUrlMappings = {
                INTUIT: [
                  'www.intuit.com',
                  'www.intuit.com.au',
                  'www.quickbooksonline.com.br',
                  'www.intuit.ca',
                  'www.quickbooks.fr',
                  'www.intuit.in',
                  'www.intuit.co.uk',
                ],
                MV_INTUIT: ['intuit.mv.intuit.com'],
                QB_INTUIT: [
                  'www.quickbooks.com.au',
                  'quickbooks.intuit.ca',
                  'www.quickbooks.in',
                  'plus.quickbooks.co.uk',
                ],
                NEW_INTUIT: [
                  'quickbooks.intuit.com.au',
                  'quickbooks.com.br',
                  'quickbooks.intuit.fr',
                  'quickbooks.intuit.in',
                  'quickbooks.intuit.co.uk',
                ],
                ENT_INTUIT: ['enterprise.intuit.ca'],
                GP_INTUIT: ['gopayment.intuit.ca'],
                MS_INTUIT: ['merchantservices.intuit.ca'],
                QB_INTUIT1: ['quickbooksenligne.intuit.ca'],
                PROADV_INTUIT: ['proadvisor.intuit.ca'],
                PROADV_INTUIT1: ['conseillerspro.intuit.ca'],
                PROADV_INTUIT2: ['comptable.intuit.ca'],
                PROFILE_INTUIT: ['profile.intuit.ca'],
                PROFILE_INTUIT1: ['profilefrancais.intuit.ca'],
                ACCT_INTUIT: ['accountant.intuit.ca'],
                TT_INTUIT: ['turbotax.intuit.ca'],
                TT_INTUIT1: ['impotrapide.intuit.ca'],
                COMM_INTUIT: ['community.turbotaxonline.ca'],
                CTSDEV: ['ctsdev'],
              };
              var mobileUrls = {
                'm.intuit.com': 'MOBILEINTUIT',
                'qbinproduct.intuit.com/mobile': 'MOBILE',
              };
              var code_mapping = {
                GOOGLE: 'SEO-GOO_',
                USGOOGLE: 'SEO-GOO_',
                AOL: 'SEO-AOL_',
                BING: 'SEO-MSN_',
                YAHOO: 'SEO-YAH_',
                LYCOS: 'SEO-LYC_',
                ASK: 'SEO-ASK_',
                MOBILEINTUITANDROID: 'MOB-WEB-AND',
                MOBILEINTUITOTHER: 'MOB-WEB',
                MOBILEANDROID: 'MOB-IPD-AND',
                MOBILEOTHER: 'MOB-IPD',
                INTUIT: 'INT',
                ENT_INTUIT: 'INT',
                GP_INTUIT: 'INT',
                MS_INTUIT: 'INT',
                PROADV_INTUIT: 'INT',
                PROADV_INTUIT1: 'INT',
                PROADV_INTUIT2: 'INT',
                PROFILE_INTUIT: 'INT',
                PROFILE_INTUIT1: 'INT',
                ACCT_INTUIT: 'INT',
                TT_INTUIT: 'INT',
                TT_INTUIT1: 'INT',
                COMM_INTUIT: 'INT',
                QB_INTUIT: 'INT',
                QB_INTUIT1: 'INT',
                FACEBOOK: 'SOC-FACEBOOK',
                YAHOOSEARCH: 'SEO-YAH_',
                CTSDEV: 'SEO-GOO_',
              };
              var deviceTypes = {
                android: 'ANDROID',
                iphone: 'IPHONE',
                defaultDevice: 'UNKWN-DEVICE',
              };
              var device = setDevice(navigator.userAgent || '');
              var cid = getQueryStrParam('cid');
              var sc = getQueryStrParam('sc');
              var xcid = getQueryStrParam('xcid');
              var referrer = document.referrer;
              var int, ext;
              var newCookieValue, newExpireDay, newExpireTimestamp;
              var noExistingCookie = getCookie(nintyDayCookieName) === null;
              if (cid !== null && cid.length > 0) {
                newCookieValue = updateCookieValue('cid', cid);
                if (noExistingCookie && sc !== null && sc.length > 0)
                  newCookieValue = updateCookieValue('sc', sc, newCookieValue);
                newExpireDay = getExpireDays(true);
                newExpireTimestamp = getExpireTimestamp(true);
              } else if (sc !== null && sc.length > 0) {
                newCookieValue = updateCookieValue('sc', sc);
                newExpireDay = getExpireDays(false);
                newExpireTimestamp = getExpireTimestamp(false);
              } else if (referrer !== null && referrer.length > 0) {
                ext = getUrlMapping(referrer, externalUrlMappings);
                if (ext === null) {
                  var j;
                  for (j in mobileUrls)
                    if (referrer.toLowerCase().indexOf(j) != -1) {
                      if (device == deviceTypes.android)
                        ext = sc = code_mapping[mobileUrls[j] + 'ANDROID'];
                      else returnVal = code_mapping[mobileUrls[j] + 'OTHER'];
                      return returnVal;
                    }
                  var parser = document.createElement('a');
                  parser.href = referrer;
                  if (
                    parser.hostname.indexOf('.intuit.') < 0 &&
                    parser.hostname.indexOf('.quickbooks.') < 0
                  ) {
                    ext = 'OTH-' + parser.hostname;
                    newCookieValue = updateCookieValue('ext', ext);
                  } else {
                    int = getUrlMapping(referrer, internalUrlMappings);
                    if (int === null)
                      if (
                        parser.hostname.indexOf('.intuit.com') > -1 &&
                        parser.hostname.indexOf('quickbooksonline.intuit.com') < 0
                      ) {
                        int = parser.hostname;
                        newCookieValue = updateCookieValue('int', int);
                      } else {
                        if (
                          noExistingCookie &&
                          (parser.hostname.indexOf('.intuit.') > -1 ||
                            parser.hostname.indexOf('.quickbooks.') > -1)
                        ) {
                          int = parser.hostname;
                          newCookieValue = updateCookieValue('int', int);
                        }
                      }
                    else newCookieValue = updateCookieValue('int', int);
                  }
                } else newCookieValue = updateCookieValue('ext', ext);
                newExpireDay = getExpireDays(false);
                newExpireTimestamp = getExpireTimestamp(false);
              } else {
                var pathName = window.location.pathname || '';
                if (pathName !== null && /\/mobile\/new_login\.jsp/.test(pathName)) {
                  if (device == deviceTypes.android) sc = code_mapping.MOBILEINTUITANDROID;
                  else sc = code_mapping.MOBILEINTUITOTHER;
                  newCookieValue = updateCookieValue('sc', sc);
                } else {
                  newCookieValue = updateCookieValue('int', location.host);
                  if (noExistingCookie)
                    newCookieValue = updateCookieValue('ext', 'QOE-COM', newCookieValue);
                }
                newExpireDay = getExpireDays(false);
                newExpireTimestamp = getExpireTimestamp(false);
              }
              if (xcid !== null && xcid.length > 0)
                newCookieValue = updateCookieValue('xcid', xcid, newCookieValue);
              if (newCookieValue) {
                setCookie(nintyDayCookieName, newCookieValue, newExpireDay);
                setCookie(nintyDayCookieTimestampName, newExpireTimestamp, newExpireDay);
              }
              function formatCookieValue (obj) {
                var st =
                  'cid:' +
                  (obj.cid ? obj.cid : '') +
                  '|sc:' +
                  (obj.sc ? obj.sc : '') +
                  '|ext:' +
                  (obj.ext ? obj.ext : '') +
                  '|int:' +
                  (obj.int ? obj.int : '') +
                  '|xcid:' +
                  (obj.xcid ? obj.xcid : '') +
                  '|';
                return st.substr(0, 254);
              }
              function updateCookieValue (type, value, latestValue) {
                var oldValue = latestValue ? latestValue : getCookie(nintyDayCookieName);
                var obj = {};
                var i, ary, ary2;
                if (oldValue !== null) {
                  ary = oldValue.split('|');
                  for (i = 0; i < ary.length; i++) {
                    ary2 = ary[i].split(':');
                    if (ary2.length == 2) obj[ary2[0]] = ary2[1];
                  }
                }
                obj[type] = value;
                return formatCookieValue(obj);
              }
              function getExpireDays (reset) {
                if (reset) return 90;
                else {
                  var expireDate, expireDays, today;
                  var cookieExpire = getCookie(nintyDayCookieTimestampName);
                  if (cookieExpire !== null && cookieExpire != 'null') {
                    expireDate = new Date(cookieExpire * 1000);
                    today = new Date();
                    var timeDiff = Math.abs(expireDate.getTime() - today.getTime());
                    return Math.ceil(timeDiff / (1000 * 3600 * 24));
                  } else return 90;
                }
              }
              function getExpireTimestamp (reset) {
                var tp = getCookie(nintyDayCookieTimestampName);
                if (reset || tp === null || tp == 'null') {
                  expireDate = new Date();
                  return expireDate.setTime(expireDate.getTime() + 90 * 86400000);
                } else if (tp.length == 10) return tp * 1000;
                else return tp;
              }
              function getUrlMapping (referrer, mappings) {
                var key1 = null;
                for (var key in mappings) {
                  var ary = mappings[key];
                  for (var i = 0; i < ary.length; i++)
                    if (referrer.indexOf(ary[i]) > -1) {
                      key1 = key;
                      break;
                    }
                }
                if (key1)
                  if (code_mapping.hasOwnProperty(key1)) return code_mapping[key1];
                  else return key1;
                return null;
              }
              function setDevice (userAgent) {
                var device = deviceTypes.defaultDevice;
                if (userAgent === null || userAgent.length === 0)
                  device = deviceTypes.defaultDevice;
                else if (/android/i.test(userAgent)) device = deviceTypes.android;
                else if (/iphone/i.test(userAgent)) device = deviceTypes.iphone;
                return device;
              }
              return newCookieValue;
            }
            function canHandleSameSiteAttribute (userAgent) {
              var regexes = [
                /\(iP.+; CPU .*OS 12[_\d]*.*\) AppleWebKit\//,
                /^.*Macintosh;.*Mac OS X 10_14.*Version.*Safari.*$/,
                /(Chromium|Chrome)\/(5[1-9]|6[0-6])\.(\d+)(?:\.(\d+)|)(?:\.(\d+)|)/,
                /UCBrowser\/[0-9][0-1]?.(\d+)\.(\d+)[\.\d]*!/,
                /UCBrowser\/12.[0-9][0-2]?.(\d+)[\.\d]*!/,
                /UCBrowser\/12.13.[0-2][\.\d]*/,
                /(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(\d+)/,
                /\bMSIE\s+7\.0;.*\bTrident\/(\d+)\.0/,
              ];
              for (var index = 0; index < regexes.length; index++) {
                var regex = regexes[index];
                if (userAgent.match(regex) !== null) return false;
              }
              return true;
            }
            function setCookie (c_name, c_value, expire, disableEncode) {
              const $___old_d4fb3e56519b609f = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
              try {
                if ($___old_d4fb3e56519b609f)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_fb986baf23da602c.userAgent
                  ));
                return function () {
                  if (!disableEncode) c_value = encodeURIComponent(c_value);
                  var d = new Date();
                  d.setTime(d.getTime() + expire * 24 * 60 * 60 * 1000);
                  var expires = 'expires=' + d.toUTCString();
                  var root_domain = getRootDomain();
                  var sameSiteNone = canHandleSameSiteAttribute(navigator.userAgent)
                    ? 'sameSite=None; secure'
                    : '';
                  document.cookie =
                    c_name +
                    '=' +
                    c_value +
                    '; ' +
                    expires +
                    '; path=/; domain=' +
                    root_domain +
                    ';' +
                    sameSiteNone;
                }.apply(this, arguments);
              } finally {
                if ($___old_d4fb3e56519b609f)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_d4fb3e56519b609f
                  ));
              }
            }
            function getCookie (c_name) {
              try {
                var i,
                  x,
                  y,
                  ARRcookies = document.cookie.split(';');
                for (i = 0, len = ARRcookies.length; i < len; i++) {
                  x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
                  y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
                  x = x.replace(/^\s+|\s+$/g, '');
                  if (x == c_name)
                    if (y === null) return null;
                    else return unescape(y);
                }
                return null;
              } catch (err) {
                return null;
              }
            }
            function getQueryStrParam (key) {
              try {
                key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, '\\$&');
                var allQueries = location.hash + location.search;
                var match = allQueries.match(
                  new RegExp('[?&]' + key.toLowerCase() + '=([^&]+)(&|$)', 'i')
                );
                if (match && match[1] !== null)
                  return decodeURIComponent(match[1].replace(/\+/gi, ' '));
                return null;
              } catch (err) {
                return null;
              }
            }
            function getRootDomain () {
              var i = 0,
                domain = document.domain,
                p = domain.split('.'),
                s = '_gd' + new Date().getTime();
              while (i < p.length - 1 && document.cookie.indexOf(s + '=' + s) == -1) {
                domain = p.slice(-1 - ++i).join('.');
                document.cookie = s + '=' + s + ';domain=' + domain + ';';
              }
              document.cookie =
                s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + domain + ';';
              return domain;
            }
            function getExpireDays (reset, cookieName) {
              if (reset) return 90;
              else {
                if (cookieName === null) cookieName = nintyDayCookieTimestampName;
                var expireDate, expireDays, today;
                var cookieExpire = getCookie(cookieName);
                if (cookieExpire !== null && cookieExpire != 'null') {
                  if (cookieExpire.length == 10)
                    expireDate = new Date(parseInt(cookieExpire * 1000, 10));
                  else expireDate = new Date(parseInt(cookieExpire, 10));
                  today = new Date();
                  var timeDiff = Math.abs(expireDate.getTime() - today.getTime());
                  return Math.floor(timeDiff / (3600 * 24 * 1000));
                } else return 90;
              }
            }
          })();
        } catch (err) {}
      },
      3163629,
      [3163533],
      365893,
      [430636]
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        try {
          var segIds = Bootstrapper.Cookies.get('aam_qbus') || '';
          segIds = decodeURIComponent(segIds);
          Bootstrapper.insertScript('https://www.googletagmanager.com/gtag/js?id=AW-1030811807');
          window.dataLayer = window.dataLayer || [];
          window.gtag =
            window.gtag ||
            function () {
              dataLayer.push(arguments);
            };
          gtag('js', new Date());
          gtag('config', 'AW-1030811807');
          gtag('config', 'DC-1996823');
          gtag('event', 'page_view', { send_to: 'AW-1030811807', aam_segs: segIds });
        } catch (err) {}
      },
      3257397,
      582209
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (typeof jQuery != 'undefined') {
          jQuery(window).on('modal:open', function () {
            window.wa = window.wa || {};
            var eventList = '';
            var funnelName = '';
            if (wa.modalPageName == 'ifsp-contact-form') {
              eventList = 'fspcontactformshow';
              funnelName = 'FSP Contact Form';
            }
            function doesModalInfoExist () {
              if (wa.modalPageName != '' && wa.modalPageName != null)
                if (wa.pageName != 'undefined' && !wa.justTrackedModal) return true;
              return false;
            }
            try {
              if (doesModalInfoExist()) {
                var basePageName = wa.pageName;
                wa.trackPage({
                  funnelName: funnelName,
                  pageName: basePageName + '#modal:' + wa.modalPageName,
                  eventList: eventList,
                });
                wa.justTrackedModal = true;
                setTimeout(function () {
                  wa.justTrackedModal = false;
                }, 1000);
              }
            } catch (err) {}
            if (!jQuery('.simplemodal-container input#Continue').attr('data-wa-link'))
              jQuery('.simplemodal-container input#Continue').attr(
                'data-wa-link',
                'modal-continue'
              );
          });
          jQuery(function () {
            jQuery('a.modal').on('click', function () {
              var modalUrl = jQuery(this).attr('href') || '';
              var modalUrlSplit = modalUrl.split('/');
              var modalPageName = modalUrlSplit[modalUrlSplit.length - 1];
              window.wa = window.wa || {};
              wa.modalPageName = modalPageName;
            });
          });
        }
      },
      3190449,
      491222
    );
  })();
}
