var _satellite;
{
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
  (function () {
    (function () {
      window._satellite = window._satellite || {};
      window._satellite.container = {
        buildInfo: {
          buildDate: '2020-10-07T00:04:32Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          'Order Id (wbx)': {
            defaultValue: '[no orderId]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'orderId' },
          },
          purchased_billing_mode: {
            defaultValue: '',
            forceLowerCase: true,
            cleanText: true,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var product;
                try {
                  product = spark_data.product_name[0];
                } catch (e) {
                  product = '';
                }
                var bill = /annual|monthly/i.exec(product);
                return bill[0] ? bill[0] : '';
              },
            },
          },
          'Promo Code': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (
                  userObj.promotionCode != '' &&
                  userObj.promotionCode != 'NoPromo' &&
                  userObj.promotionCode != 'PROMO_CANCELLED'
                ) {
                  var promoCode = changeOrderBean.promoCode;
                } else if ($.cookie('promo_code') && userObj.promotionCode == 'NoPromo') {
                  var promoCode = $.cookie('promo_code');
                } else {
                  var promoCode = 'NoPromotion';
                }
                return promoCode;
              },
            },
          },
          'SystemDown Error Code Value': {
            defaultValue: '[no error code]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: { elementProperty: 'text', elementSelector: 'div[errorCodeValue]' },
          },
          'DR purchase confirmation page is change order': {
            defaultValue: '',
            cleanText: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                return document.querySelector('div[class*="changeOrder"]') !== null
                  ? 'true'
                  : 'false';
              },
            },
          },
          'DR Shopping Cart - Order Total': {
            defaultValue: '0.0',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.order_total' },
          },
          'Trial Flag': {
            defaultValue: 'empty',
            storageDuration: 'session',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'TrialFlag' },
          },
          cd_p: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (document.URL.indexOf('.com.') > -1 || document.URL.indexOf('.co.') > -1) {
                  return '3';
                } else {
                  return '2';
                }
              },
            },
          },
          'SignUp Error Cookie': {
            defaultValue: '[error cookie not defined]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'step' },
          },
          geoLanguage: {
            defaultValue: 'en',
            forceLowerCase: true,
            cleanText: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var wx, at, dr;
                try {
                  wx = _satellite.cookie.get('user_lang') || '';
                } catch (e) {
                  wx = '';
                }
                try {
                  at = _satellite.cookie.get('lang').split('_')[0] || '';
                } catch (e) {
                  at = '';
                }
                try {
                  dr = spark_data.site_region.split('_')[0] || '';
                } catch (e) {
                  dr = '';
                }
                return dr.length > 0 ? dr : at.length > 0 ? at : wx;
              },
            },
          },
          currentDisplayName: {
            defaultValue: '[empty]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'currentDisplayName' },
          },
          pageName: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 's.pageName' },
          },
          'bill-cycle': {
            defaultValue: '',
            forceLowerCase: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (document.URL.indexOf('pricing/cart.html') > -1) {
                  if (typeof $ !== 'undefined') {
                    return $('.prod-cycle .select-selected').text();
                  }
                }
              },
            },
          },
          'FT Country': {
            defaultValue: 'choose your country',
            forceLowerCase: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (document.URL.indexOf('pricing/signup.html') > -1) {
                  if (
                    typeof document.getElementsByClassName('same-as-selected')[0] !== 'undefined'
                  ) {
                    return document
                      .getElementsByClassName('same-as-selected')[0]
                      .getAttribute('data-val');
                  }
                }
              },
            },
          },
          sl_cn: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (typeof $ !== 'undefined') {
                  var selCountry;
                  try {
                    selCountry = $('.wbx-region-name').text().toLowerCase();
                  } catch (e) {}
                  if (typeof selCountry == undefined) {
                    selCountry = '';
                  }
                }
                return selCountry;
              },
            },
          },
          'DR Shopping Cart - Confirmation Products': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var trackProducts = [];
                var str1 = '';
                var len = spark_data.product_name.length;
                for (i = 0; i < len; i++) {
                  if (spark_data.product_name[i].indexOf('Annual') >= 0) {
                    var bookAmount = spark_data.product_unit_price[i];
                    var nopromoSales =
                      spark_data.product_list_price[i] * spark_data.product_quantity[i];
                  } else {
                    var bookAmount = spark_data.product_unit_price[i] * 12;
                    var nopromoSales =
                      spark_data.product_list_price[i] * spark_data.product_quantity[i];
                  }
                  str1 = '';
                  str1 += ';' + spark_data.product_name[i] + ';';
                  str1 += spark_data.product_quantity[i] + ';';
                  str1 += spark_data.product_unit_price[i] + ';';
                  str1 += 'event16=' + bookAmount + '|';
                  str1 += 'event101=' + spark_data.product_unit_price[i] + '|';
                  str1 += 'event102=' + nopromoSales + ';';
                  trackProducts.push(str1);
                }
                return trackProducts;
              },
            },
          },
          'Webex Offer Type Flag': {
            defaultValue: 'undefined',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'wbxofferFlag' },
          },
          TrackID: {
            defaultValue: '[na]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'TrackID' },
          },
          s_url: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var s_val,
                  gt_val = document.URL.replace('https:', '').replace(/ft_e.$/, '');
                if (gt_val.indexOf('www.webex.com/pricing/cart.html?token=') > -1) {
                  s_val = gt_val.substr(0, 100);
                } else if (gt_val.indexOf('www.webex.com/pricing/buy/account-create') > -1) {
                  s_val = gt_val.substr(0, 100);
                } else {
                  s_val = gt_val.substr(0, 200);
                }
                return s_val;
              },
            },
          },
          'Order Booking Value': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var trackProducts = [];
                var len = spark_data.product_name.length;
                for (i = 0; i < len; i++) {
                  if (spark_data.product_name[i].indexOf('Annual') >= 0) {
                    var bookAmount = spark_data.product_unit_price[i];
                    var nopromoSales =
                      spark_data.product_list_price[i] * spark_data.product_quantity[i];
                  } else {
                    var bookAmount = spark_data.product_unit_price[i] * 12;
                    var nopromoSales =
                      spark_data.product_list_price[i] * spark_data.product_quantity[i];
                  }
                  return bookAmount;
                }
              },
            },
          },
          Language: {
            defaultValue: 'Empty',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'lang', caseInsensitive: true },
          },
          Referrer: {
            defaultValue: '[no referrer available]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                function isBlank (str) {
                  return !str || /^\s*$/.test(str);
                }
                var refURL = document.referrer.split('?')[0];
                var noRefURL = '[no referrer]';
                if (isBlank(refURL)) {
                  return noRefURL;
                } else {
                  return refURL;
                }
              },
            },
          },
          contentLanguage: {
            defaultValue: '',
            forceLowerCase: true,
            cleanText: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var wx, at, dr;
                try {
                  wx = document.querySelectorAll("meta[name='language']")[0].content || '';
                } catch (e) {
                  wx = '';
                }
                try {
                  at = _satellite.cookie.get('lang').split('_')[0] || '';
                } catch (e) {
                  at = '';
                }
                try {
                  dr = spark_data.site_region.split('_')[0] || '';
                } catch (e) {
                  dr = '';
                }
                return dr.length > 0 ? dr : at.length > 0 ? at : wx;
              },
            },
          },
          'Current Page Name': {
            defaultValue: '[na]',
            forceLowerCase: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 's.pageName' },
          },
          p_n: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                try {
                  var t = document.location.pathname;
                  return (
                    '' ==
                      (t =
                        ':' ===
                        (t = t
                          .replace(/[\?|#|%].+/, '')
                          .replace(/[?]/g, '')
                          .replace(/\//g, ':')
                          .replace(/#|.index.html|.index.php|.html|.php|.index.aspx/g, '')
                          .replace(/:ja|:es|:de|:fr|:ko|:hk|:br|:it|:pt|:zh/, ''))[t.length - 1]
                          ? t.slice(0, t.length - 1)
                          : t) && (t = ':home'),
                    t
                  );
                } catch (n) {}
              },
            },
          },
          'Marin Tracking': {
            defaultValue: 'Empty',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'msid', caseInsensitive: true },
          },
          utm_channel: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_channel', caseInsensitive: true },
          },
          utm_source: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_source', caseInsensitive: true },
          },
          utm_medium: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_medium', caseInsensitive: true },
          },
          utm_campaign: {
            defaultValue: '',
            forceLowerCase: true,
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_campaign', caseInsensitive: true },
          },
          'ft-site-url-s': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var gt = _satellite.getVar('ft-site-url');
                gt = gt.substring(0, 20);
                return gt;
              },
            },
          },
          SEMID: {
            defaultValue: 'Empty',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'semid', caseInsensitive: true },
          },
          'MC-Spark Free Trial': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'mc-spark-ft' },
          },
          'DR Promo Code': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var promocode = $('#promoCode').val();
                return promocode;
              },
            },
          },
          'Go Redirect ID': {
            defaultValue: 'Empty',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'goid', caseInsensitive: true },
          },
          'DR Shopping Cart - Page Type': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.page_type' },
          },
          geoCurrency: {
            defaultValue: 'usd',
            cleanText: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var wx, at, dr;
                try {
                  wx = _satellite.cookie.get('user_currency') || '';
                } catch (e) {
                  wx = '';
                }
                try {
                  at = _satellite.cookie.get('currency') || '';
                } catch (e) {
                  at = '';
                }
                try {
                  dr = spark_data.site_currency || '';
                } catch (e) {
                  dr = '';
                }
                return dr.length > 0
                  ? dr.toUpperCase()
                  : at.length > 0
                  ? at.toUpperCase()
                  : wx.toUpperCase();
              },
            },
          },
          'DR Shopping Cart - Updated Subscription Quantity': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var updatedSubs = document.getElementsByClassName(
                  'dr_productName dr_futureSubRenewalStatePlan'
                )[0].children[0].textContent;
                return updatedSubs;
              },
            },
          },
          'Internal Search Keyword': {
            defaultValue: 'NA',
            forceLowerCase: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'query', caseInsensitive: true },
          },
          'dr-cn': {
            defaultValue: '',
            forceLowerCase: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.site_country' },
          },
          CountryCode: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                function s_parseUri () {
                  if (arguments.length == 0) {
                    return window.location;
                  }
                  var u = arguments[0] + '';
                  var a;
                  if (!u) {
                    a = [];
                    a.href = a.hash = a.host = a.hostname = a.pathname = a.port = a.protocol = a.search =
                      '';
                  } else {
                    a = document.createElement('a');
                    a.setAttribute('href', u);
                  }
                  return a;
                }
                if (!('indexOf' in Array.prototype)) {
                  Array.prototype.indexOf = function (find, i) {
                    if (i === undefined) i = 0;
                    if (i < 0) i += this.length;
                    if (i < 0) i = 0;
                    for (var n = this.length; i < n; i++)
                      if (i in this && this[i] === find) return i;
                    return -1;
                  };
                }
                function findURLs (t) {
                  var i,
                    u = arguments.length > 1 ? arguments[1] : window.location.href,
                    v = s_parseUri(u).hostname + s_parseUri(u).pathname;
                  for (i in t) if (v.indexOf(t[i].site) > -1) return t[i];
                  return 0;
                }
                (rsidTest = 'webextest'),
                  (rsuits = [
                    { site: '/US/', rsid: 'webexuk', cc: 'USD', co: 'us' },
                    { site: '/GB/', rsid: 'webexuk', cc: 'GBP', co: 'uk' },
                    { site: '/FR/', rsid: 'webexfr', cc: 'EUR', co: 'fr' },
                    { site: '/DE/', rsid: 'webexde', cc: 'EUR', co: 'de' },
                    { site: '/ES/', rsid: 'webexespana', cc: 'EUR', co: 'es' },
                    { site: '/CA/', rsid: 'webexca', cc: 'USD', co: 'ca' },
                    { site: '/IT/', rsid: 'webexitaly', cc: 'EUR', co: 'it' },
                    { site: '/NL/', rsid: 'webexuk', cc: 'GBP', co: 'nl' },
                    { site: 'webex.com.br', rsid: 'webexbr', cc: 'BRL', co: 'br' },
                    { site: 'webex.com.cn', rsid: 'webexchina', cc: 'CNY', co: 'cn' },
                    { site: 'webex.com.hk', rsid: 'webexhongkong', cc: 'HKD', co: 'hk' },
                    { site: 'webex.co.in', rsid: 'webexindia', cc: 'INR', co: 'in' },
                    { site: 'webex.co.kr', rsid: 'webexskorea', cc: 'KRW', co: 'kr' },
                    { site: 'webex.co.it', rsid: 'webexitaly', cc: 'EUR', co: 'it' },
                    { site: 'webex.co.jp', rsid: 'webexjapan', cc: 'JPY', co: 'jp' },
                    { site: 'webex.com.mx', rsid: 'webexlatam', cc: 'USD', co: 'mx' },
                    { site: 'webex.co.uk', rsid: 'webexuk', cc: 'GBP', co: 'uk' },
                    { site: 'my.uk.webex.com', rsid: 'webexuk', cc: 'GBP', co: 'uk' },
                    { site: 'webex.ca', rsid: 'webexca', cc: 'CAD', co: 'ca' },
                    { site: 'mytrial.webex.com/uk', rsid: 'webexuk', cc: 'GBP', co: 'uk' },
                    { site: 'mytrial.webex.com/fr', rsid: 'webexfr', cc: 'EUR', co: 'fr' },
                    { site: 'mytrial.webex.com/de', rsid: 'webexde', cc: 'EUR', co: 'de' },
                    { site: 'mytrial.webex.com/es', rsid: 'webexespana', cc: 'EUR', co: 'es' },
                    { site: 'mytrial.webex.com/in', rsid: 'webexindia', cc: 'INR', co: 'in' },
                    { site: 'mytrial.webex.com/jp', rsid: 'webexjapan', cc: 'JPY', co: 'jp' },
                    { site: 'mytrial.webex.com/au', rsid: 'webexau', cc: 'AUD', co: 'au' },
                    { site: '.webex.com/ciscospark/', rsid: 'webexsquared', cc: 'USD', co: 'us' },
                    { site: 'jabber', rsid: 'webexus', cc: 'USD', co: 'us' },
                    { site: 'postpath', rsid: 'webexus', cc: 'USD', co: 'us' },
                    { site: 'cisco', rsid: 'webexus', cc: 'USD', co: 'us' },
                    { site: '.webex.', rsid: 'webexus', cc: 'USD', co: 'us' },
                  ]);
                var countryCodeT = findURLs(rsuits);
                return countryCodeT.co;
              },
            },
          },
          's.Product': {
            defaultValue: '[na]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var wbxProduct = productSkuTP + ';event16=' + bookingVal;
                return wbxProduct;
              },
            },
          },
          'MC-Spark Purchase': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'mc-spark' },
          },
          'Track ID': {
            defaultValue: 'Empty',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'TrackID', caseInsensitive: true },
          },
          'Adwords gclid': {
            defaultValue: '[undefined]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'gclid' },
          },
          p_vl: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (document.URL.indexOf('cart.webex.com') > -1) {
                  return 'wx:free-trial' + _satellite.getVar('p_n');
                } else {
                  return 'wx' + _satellite.getVar('p_n');
                }
              },
            },
          },
          'DR Shopping Cart - Product Quantity': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.product_quantity' },
          },
          'DR Shopping Cart - Selection Products': {
            defaultValue: '[na]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var trackProducts = [];
                var str1 = '';
                var len = spark_data.product_name.length;
                for (i = 0; i < len; i++) {
                  str1 = '';
                  str1 += ';' + spark_data.product_name[i] + ';';
                  trackProducts.push(str1);
                }
                return trackProducts;
              },
            },
          },
          'Purchase ID': {
            defaultValue: '[na]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'window.orderID' },
          },
          'DR Shopping Cart - Paid Subscription Details': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'Action', caseInsensitive: true },
          },
          'DR Shopping Cart - Order Currency': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.order_currency' },
          },
          'DR Shopping Cart - Product ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.product_id' },
          },
          ck_ftc: {
            defaultValue: '',
            forceLowerCase: true,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var user_locale = _satellite.cookie.get('user_locale');
                if (user_locale == '' || user_locale == undefined) {
                  if (window.sessionStorage.CART_LOCALE !== undefined) {
                    return window.sessionStorage.CART_LOCALE.replace('"', '');
                  }
                } else {
                  return user_locale;
                }
              },
            },
          },
          rs_up: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: { source: function (event) {} },
          },
          'dr-orderType': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (typeof spark_data.plan_old !== 'undefined') {
                  return 'change order';
                } else {
                  return 'direct';
                }
              },
            },
          },
          'DR Shopping Cart - Order ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.order_id' },
          },
          'prod-licen': {
            defaultValue: '',
            forceLowerCase: true,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (document.URL.indexOf('pricing/cart.html') > -1) {
                  if (typeof $ !== 'undefined') {
                    return $('.prod-license .select-selected').text();
                  }
                }
              },
            },
          },
          'Number of Search Results': {
            defaultValue: 'No Results',
            forceLowerCase: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: { elementProperty: 'text', elementSelector: '.total-results' },
          },
          cookieDomain: {
            defaultValue: '',
            forceLowerCase: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var cookieDomain = [
                  ['webex.com'],
                  ['webex.au'],
                  ['webex.br'],
                  ['webex.ca'],
                  ['webex.co.in'],
                  ['webex.co.it'],
                  ['webex.co.jp'],
                  ['webex.co.kr'],
                  ['webex.com.au'],
                  ['webex.com.br'],
                  ['webex.com.cn'],
                  ['webex.com.hk'],
                  ['webex.com.mx'],
                  ['webex.co.uk'],
                  ['webex.de'],
                  ['webex.es'],
                  ['webex.fr'],
                  ['webex.it'],
                  ['webex.mx'],
                ];
                var cookieDomainValue = '';
                for (i = 0; i < cookieDomain.length; i++) {
                  if (
                    window.location.hostname
                      .toLowerCase()
                      .indexOf(cookieDomain[i][0].toLowerCase()) > -1
                  ) {
                    cookieDomainValue = cookieDomain[i][0];
                  }
                }
                return cookieDomainValue;
              },
            },
          },
          'buy country': {
            defaultValue: '',
            forceLowerCase: true,
            cleanText: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var wx, at, dr;
                try {
                  wx = _satellite.cookie.get('buy_country') || '';
                } catch (e) {
                  wx = '';
                }
                try {
                  at = _satellite.cookie.get('lang').split('_')[1] || '';
                } catch (e) {
                  at = '';
                }
                try {
                  dr = spark_data.site_country || '';
                } catch (e) {
                  dr = '';
                }
                return dr.length > 0 ? dr : at.length > 0 ? at : wx;
              },
            },
          },
          'DR Shopping Cart - Payment Modality': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.payment_method' },
          },
          d_prefix: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var prefix = 'wx';
                return prefix;
              },
            },
          },
          freecta: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var st_btn = document
                    .getElementsByClassName('wbx-header-menu')[0]
                    .getElementsByClassName('wbx-header-try-it-free')[0]
                    .textContent.trim(),
                  validTxtKey1 = /inizia gratuitamente|start for free|comience de manera gratuita|Essayez Meetings gratuitement|無料で試す/i;
                validTxtKey2 = /inizia gratuitamente|try teams free|comience de manera gratuita|Essayez Teams gratuitement/i;
                if (validTxtKey1.test(st_btn)) {
                  return st_btn.toLowerCase().replace(validTxtKey1, 'start for free');
                } else if (validTxtKey2.test(st_btn)) {
                  return st_btn.toLowerCase().replace(validTxtKey2, 'try teams free');
                } else {
                  return st_btn;
                }
              },
            },
          },
          'Referrer: full URL': {
            defaultValue: '[no referrer available]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                function isBlank (str) {
                  return !str || /^\s*$/.test(str);
                }
                var refURL = document.referrer;
                var noRefURL = '[no referrer]';
                return isBlank(refURL) ? noRefURL : refURL;
              },
            },
          },
          'prod-type': {
            defaultValue: '',
            forceLowerCase: true,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (document.URL.indexOf('pricing/cart.html') > -1) {
                  if (typeof $ !== 'undefined') {
                    return $('.product-type .select-selected').text();
                  }
                }
              },
            },
          },
          'DG Channel': {
            defaultValue: '',
            forceLowerCase: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                _satellite.getVar('dg-channel');
              },
            },
          },
          'ft-site-url': {
            defaultValue: '',
            forceLowerCase: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'sURL', caseInsensitive: true },
          },
          'cart-add-on': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                if (document.getElementById('call-me-domestic').checked == true) {
                  return 'call-me-domestic';
                }
                if (document.getElementById('call-me-inter').checked == true) {
                  return 'call-me-inter';
                }
              },
            },
          },
          'promo-code': {
            defaultValue: 'No Promotion',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'promo_code' },
          },
          geoCountry: {
            defaultValue: '',
            forceLowerCase: true,
            cleanText: true,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var wx, at, dr;
                try {
                  wx = _satellite.cookie.get('user_locale') || '';
                } catch (e) {
                  wx = '';
                }
                try {
                  at = _satellite.cookie.get.readCookie('lang').split('_')[1] || '';
                } catch (e) {
                  at = '';
                }
                try {
                  dr = spark_data.site_country || '';
                } catch (e) {
                  dr = '';
                }
                return dr.length > 0 ? dr : at.length > 0 ? at : wx;
              },
            },
          },
          'Offer Type Flag': {
            defaultValue: 'undefined',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'offerFlag' },
          },
          'DR Shopping Cart - Server Error Number': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                var serverError = document.getElementsByClassName('dr_error')[0].children[2]
                  .textContent;
                return serverError;
              },
            },
          },
          nonce: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (event) {
                return "default-src 'self' 'unsafe-inline' *.adobedtm.com *.omtrdc.net;";
              },
            },
          },
          last_order_total: {
            defaultValue: '0.0',
            cleanText: true,
            modulePath: 'core/src/lib/dataElements/localStorage.js',
            settings: { name: 'last_order_total' },
          },
          ck_vl: {
            defaultValue: '',
            storageDuration: 'visitor',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'chko' },
          },
        },
        extensions: {
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/dataElements/javascriptVariable.js': {
                name: 'javascript-variable',
                displayName: 'JavaScript Variable',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var getObjectProperty = require('../helpers/getObjectProperty.js');
                  module.exports = function (settings) {
                    return getObjectProperty(window, settings.path);
                  };
                },
              },
              'core/src/lib/dataElements/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = function (settings, event) {
                    return settings.source(event);
                  };
                },
              },
              'core/src/lib/dataElements/domAttribute.js': {
                name: 'dom-attribute',
                displayName: 'DOM Attribute',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = function (settings) {
                    var element = document.querySelector(settings.elementSelector);
                    if (element) {
                      var property = settings.elementProperty;
                      if (property === 'text') {
                        return element.innerText || element.textContent;
                      } else if (property in element) {
                        return element[property];
                      } else {
                        return element.getAttribute ? element.getAttribute(property) : undefined;
                      }
                    }
                  };
                },
              },
              'core/src/lib/dataElements/cookie.js': {
                name: 'cookie',
                displayName: 'Cookie',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var cookie = require('@adobe/reactor-cookie');
                  module.exports = function (settings) {
                    return cookie.get(settings.name);
                  };
                },
              },
              'core/src/lib/dataElements/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var window = require('@adobe/reactor-window');
                  var queryString = require('@adobe/reactor-query-string');
                  module.exports = function (settings) {
                    var queryParams = queryString.parse(window.location.search);
                    if (settings.caseInsensitive) {
                      var lowerCaseName = settings.name.toLowerCase();
                      var keys = Object.keys(queryParams);
                      for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        if (key.toLowerCase() === lowerCaseName) {
                          return queryParams[key];
                        }
                      }
                    } else {
                      return queryParams[settings.name];
                    }
                  };
                },
              },
              'core/src/lib/dataElements/localStorage.js': {
                name: 'local-storage',
                displayName: 'Local Storage',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var window = require('@adobe/reactor-window');
                  module.exports = function (settings) {
                    try {
                      return window.localStorage.getItem(settings.name);
                    } catch (e) {
                      return null;
                    }
                  };
                },
              },
              'core/src/lib/events/pageBottom.js': {
                name: 'page-bottom',
                displayName: 'Page Bottom',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');
                  module.exports = function (settings, trigger) {
                    pageLifecycleEvents.registerPageBottomTrigger(trigger);
                  };
                },
              },
              'core/src/lib/conditions/domain.js': {
                name: 'domain',
                displayName: 'Domain',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var document = require('@adobe/reactor-document');
                  var matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;
                  var escapeForRegex = function (string) {
                    if (typeof string !== 'string') {
                      throw new TypeError('Expected a string');
                    }
                    return string.replace(matchOperatorsRegex, '\\$&');
                  };
                  module.exports = function (settings) {
                    var domain = document.location.hostname;
                    return settings.domains.some(function (acceptableDomain) {
                      return domain.match(
                        new RegExp('(^|\\.)' + escapeForRegex(acceptableDomain) + '$', 'i')
                      );
                    });
                  };
                },
              },
              'core/src/lib/conditions/pathAndQuerystring.js': {
                name: 'path-and-querystring',
                displayName: 'Path And Query String',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var document = require('@adobe/reactor-document');
                  var textMatch = require('../helpers/textMatch');
                  module.exports = function (settings) {
                    var path = document.location.pathname + document.location.search;
                    return settings.paths.some(function (acceptablePath) {
                      var acceptableValue = acceptablePath.valueIsRegex
                        ? new RegExp(acceptablePath.value, 'i')
                        : acceptablePath.value;
                      return textMatch(path, acceptableValue);
                    });
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var document = require('@adobe/reactor-document');
                  var Promise = require('@adobe/reactor-promise');
                  var decorateCode = require('./helpers/decorateCode');
                  var loadCodeSequentially = require('./helpers/loadCodeSequentially');
                  var postscribe = require('../../../node_modules/postscribe/dist/postscribe');
                  var unescapeHTMLEntities = require('./helpers/unescapeHtmlCode');
                  var cspNonce;
                  var postscribeWrite = (function () {
                    var write = function (source) {
                      postscribe(document.body, source, {
                        beforeWriteToken: function (token) {
                          var tagName = token.tagName && token.tagName.toLowerCase();
                          if (cspNonce && tagName === 'script') {
                            token.attrs.nonce = cspNonce;
                          }
                          if (tagName === 'script' || tagName === 'style') {
                            Object.keys(token.attrs || {}).forEach(function (key) {
                              token.attrs[key] = unescapeHTMLEntities(token.attrs[key]);
                            });
                            if (token.src) {
                              token.src = unescapeHTMLEntities(token.src);
                            }
                          }
                          return token;
                        },
                        error: function (error) {
                          turbine.logger.error(error.msg);
                        },
                      });
                    };
                    var queue = [];
                    var flushQueue = function () {
                      if (document.body) {
                        while (queue.length) {
                          write(queue.shift());
                        }
                      } else {
                        setTimeout(flushQueue, 20);
                      }
                    };
                    return function (source) {
                      queue.push(source);
                      flushQueue();
                    };
                  })();
                  var libraryWasLoadedAsynchronously = (function () {
                    if (document.currentScript) {
                      return document.currentScript.async;
                    } else {
                      var scripts = document.querySelectorAll('script');
                      for (var i = 0; i < scripts.length; i++) {
                        var script = scripts[i];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(script.src)) {
                          return script.async;
                        }
                      }
                      return true;
                    }
                  })();
                  module.exports = function (settings, event) {
                    const $___old_1ec94ee13a46c329 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_1ec94ee13a46c329)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        cspNonce = turbine.getExtensionSettings().cspNonce;
                        var decoratedResult;
                        var action = { settings: settings, event: event };
                        var source = action.settings.source;
                        if (!source) {
                          return;
                        }
                        if (action.settings.isExternal) {
                          return loadCodeSequentially(source).then(function (source) {
                            if (source) {
                              decoratedResult = decorateCode(action, source);
                              postscribeWrite(decoratedResult.code);
                              return decoratedResult.promise;
                            }
                            return Promise.resolve();
                          });
                        } else {
                          decoratedResult = decorateCode(action, source);
                          if (
                            !libraryWasLoadedAsynchronously &&
                            document.readyState === 'loading'
                          ) {
                            if (
                              document.write &&
                              turbine.propertySettings.ruleComponentSequencingEnabled === false
                            ) {
                              document.write(decoratedResult.code);
                            } else {
                              postscribeWrite(decoratedResult.code);
                            }
                          } else {
                            postscribeWrite(decoratedResult.code);
                          }
                          return decoratedResult.promise;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_1ec94ee13a46c329)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_1ec94ee13a46c329
                        ));
                    }
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');
                  module.exports = function (settings, trigger) {
                    pageLifecycleEvents.registerLibraryLoadedTrigger(trigger);
                  };
                },
              },
              'core/src/lib/conditions/subdomain.js': {
                name: 'subdomain',
                displayName: 'Subdomain',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var document = require('@adobe/reactor-document');
                  var textMatch = require('../helpers/textMatch');
                  module.exports = function (settings) {
                    var subdomain = document.location.hostname;
                    return settings.subdomains.some(function (acceptableSubdomain) {
                      var acceptableValue = acceptableSubdomain.valueIsRegex
                        ? new RegExp(acceptableSubdomain.value, 'i')
                        : acceptableSubdomain.value;
                      return textMatch(subdomain, acceptableValue);
                    });
                  };
                },
              },
              'core/src/lib/events/click.js': {
                name: 'click',
                displayName: 'Click',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var window = require('@adobe/reactor-window');
                  var bubbly = require('./helpers/createBubbly')();
                  var WeakMap = require('./helpers/weakMap');
                  var evaluatedEvents = new WeakMap();
                  var getDelayableLink = function (node) {
                    while (node) {
                      var tagName = node.tagName;
                      if (tagName && tagName.toLowerCase() === 'a') {
                        var href = node.getAttribute('href');
                        var target = node.getAttribute('target');
                        if (
                          href &&
                          (!target ||
                            target === '_self' ||
                            (target === '_top' && window.top === window) ||
                            target === window.name)
                        ) {
                          return node;
                        } else {
                          return;
                        }
                      }
                      node = node.parentNode;
                    }
                  };
                  document.addEventListener('click', bubbly.evaluateEvent, true);
                  module.exports = function (settings, trigger) {
                    bubbly.addListener(settings, function (syntheticEvent) {
                      var nativeEvent = syntheticEvent.nativeEvent;
                      if (nativeEvent.s_fe) {
                        return;
                      }
                      if (settings.anchorDelay) {
                        if (!evaluatedEvents.has(nativeEvent)) {
                          var delayableLink = getDelayableLink(nativeEvent.target);
                          if (delayableLink) {
                            nativeEvent.preventDefault();
                            setTimeout(function () {
                              window.location = delayableLink.href;
                            }, settings.anchorDelay);
                          }
                          evaluatedEvents.set(nativeEvent, true);
                        }
                      }
                      trigger(syntheticEvent);
                    });
                  };
                  module.exports.__reset = bubbly.__reset;
                },
              },
              'core/src/lib/events/directCall.js': {
                name: 'direct-call',
                displayName: 'Direct Call',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var triggersByIdentifier = {};
                  window._satellite = window._satellite || {};
                  window._satellite.track = function (identifier, detail) {
                    identifier = identifier.trim();
                    var triggers = triggersByIdentifier[identifier];
                    if (triggers) {
                      var syntheticEvent = { identifier: identifier, detail: detail };
                      triggers.forEach(function (trigger) {
                        trigger(syntheticEvent);
                      });
                      var logMessage =
                        'Rules using the direct call event type with identifier "' +
                        identifier +
                        '" have been triggered' +
                        (detail ? ' with additional detail:' : '.');
                      var logArgs = [logMessage];
                      if (detail) {
                        logArgs.push(detail);
                      }
                      turbine.logger.log.apply(turbine.logger, logArgs);
                    } else {
                      turbine.logger.log(
                        '"' + identifier + '" does not match any direct call identifiers.'
                      );
                    }
                  };
                  module.exports = function (settings, trigger) {
                    var triggers = triggersByIdentifier[settings.identifier];
                    if (!triggers) {
                      triggers = triggersByIdentifier[settings.identifier] = [];
                    }
                    triggers.push(trigger);
                  };
                },
              },
              'core/src/lib/conditions/variable.js': {
                name: 'variable',
                displayName: 'Variable',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var getObjectProperty = require('../helpers/getObjectProperty');
                  var textMatch = require('../helpers/textMatch');
                  module.exports = function (settings) {
                    var acceptableValue = settings.valueIsRegex
                      ? new RegExp(settings.value, 'i')
                      : settings.value;
                    return textMatch(getObjectProperty(window, settings.name), acceptableValue);
                  };
                },
              },
              'core/src/lib/events/entersViewport.js': {
                name: 'enters-viewport',
                displayName: 'Enters Viewport',
                script: function (module, exports, require, turbine) {
                  const $___old_de4973b19d9b3137 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_de4973b19d9b3137)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_47c01efa79e9f191.appVersion
                      ));
                    return function () {
                      'use strict';
                      var document = require('@adobe/reactor-document');
                      var window = require('@adobe/reactor-window');
                      var WeakMap = require('./helpers/weakMap');
                      var debounce = require('./helpers/debounce');
                      var enableWeakMapDefaultValue = require('./helpers/enableWeakMapDefaultValue');
                      var matchesSelector = require('./helpers/matchesSelector');
                      var matchesProperties = require('./helpers/matchesProperties');
                      var POLL_INTERVAL = 3000;
                      var DEBOUNCE_DELAY = 200;
                      var frequencies = { FIRST_ENTRY: 'firstEntry', EVERY_ENTRY: 'everyEntry' };
                      var isIE10 = window.navigator.appVersion.indexOf('MSIE 10') !== -1;
                      var stateByElement = enableWeakMapDefaultValue(new WeakMap(), function () {
                        return { timeoutIds: [], completedListeners: [], inViewport: false };
                      });
                      var listenersBySelector = {};
                      var offset = function (elem) {
                        var box;
                        try {
                          box = elem.getBoundingClientRect();
                        } catch (e) {}
                        var docElem = document.documentElement;
                        var body = document.body;
                        var clientTop = docElem.clientTop || body.clientTop || 0;
                        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
                        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
                        var scrollLeft =
                          window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
                        var top = box.top + scrollTop - clientTop;
                        var left = box.left + scrollLeft - clientLeft;
                        return { top: top, left: left };
                      };
                      var getViewportHeight = function () {
                        var height = window.innerHeight;
                        var mode = document.compatMode;
                        if (mode) {
                          height =
                            mode === 'CSS1Compat'
                              ? document.documentElement.clientHeight
                              : document.body.clientHeight;
                        }
                        return height;
                      };
                      var getScrollTop = function () {
                        return document.documentElement.scrollTop
                          ? document.documentElement.scrollTop
                          : document.body.scrollTop;
                      };
                      var elementIsInView = function (element, viewportHeight, scrollTop) {
                        var top = offset(element).top;
                        var height = element.offsetHeight;
                        return (
                          document.body.contains(element) &&
                          !(scrollTop > top + height || scrollTop + viewportHeight < top)
                        );
                      };
                      var handleElementInsideViewport = function (element) {
                        var elementState = stateByElement.get(element);
                        if (elementState.inViewport) {
                          return;
                        }
                        elementState.inViewport = true;
                        Object.keys(listenersBySelector).forEach(function (selector) {
                          if (!matchesSelector(element, selector)) {
                            return;
                          }
                          listenersBySelector[selector].forEach(function (listener) {
                            if (!matchesProperties(element, listener.settings.elementProperties)) {
                              return;
                            }
                            if (elementState.completedListeners.indexOf(listener) !== -1) {
                              return;
                            }
                            var delayComplete = function () {
                              var frequency =
                                listener.settings.frequency || frequencies.FIRST_ENTRY;
                              if (frequency === frequencies.FIRST_ENTRY) {
                                elementState.completedListeners.push(listener);
                              }
                              listener.trigger({
                                element: element,
                                target: element,
                                delay: listener.settings.delay,
                              });
                            };
                            if (listener.settings.delay) {
                              var timeoutId = setTimeout(function () {
                                if (
                                  elementIsInView(element, getViewportHeight(), getScrollTop())
                                ) {
                                  delayComplete();
                                }
                              }, listener.settings.delay);
                              elementState.timeoutIds.push(timeoutId);
                            } else {
                              delayComplete();
                            }
                          });
                        });
                      };
                      var handleElementOutsideViewport = function (element) {
                        var elementState = stateByElement.get(element);
                        elementState.inViewport = false;
                        if (elementState.timeoutIds.length) {
                          elementState.timeoutIds.forEach(clearTimeout);
                          elementState.timeoutIds = [];
                        }
                      };
                      var checkForElementsInViewport = debounce(function () {
                        var selectors = Object.keys(listenersBySelector);
                        if (!selectors.length) {
                          return;
                        }
                        var elements = document.querySelectorAll(selectors.join(','));
                        var viewportHeight = getViewportHeight();
                        var scrollTop = getScrollTop();
                        for (var i = 0; i < elements.length; i++) {
                          var element = elements[i];
                          if (elementIsInView(element, viewportHeight, scrollTop)) {
                            handleElementInsideViewport(element);
                          } else {
                            handleElementOutsideViewport(element);
                          }
                        }
                      }, DEBOUNCE_DELAY);
                      var initializeContentListeners = function () {
                        checkForElementsInViewport();
                        setInterval(checkForElementsInViewport, POLL_INTERVAL);
                        window.addEventListener('resize', checkForElementsInViewport);
                        window.addEventListener('scroll', checkForElementsInViewport);
                      };
                      if (isIE10) {
                        if (document.readyState === 'complete') {
                          initializeContentListeners();
                        } else {
                          window.addEventListener('load', initializeContentListeners);
                        }
                      } else {
                        if (document.readyState !== 'loading') {
                          initializeContentListeners();
                        } else {
                          document.addEventListener(
                            'DOMContentLoaded',
                            initializeContentListeners
                          );
                        }
                      }
                      module.exports = function (settings, trigger) {
                        var listeners = listenersBySelector[settings.elementSelector];
                        if (!listeners) {
                          listeners = listenersBySelector[settings.elementSelector] = [];
                        }
                        listeners.push({ settings: settings, trigger: trigger });
                      };
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_de4973b19d9b3137)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_de4973b19d9b3137
                      ));
                  }
                },
              },
              'core/src/lib/conditions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = function (settings, event) {
                    return settings.source.call(event.element, event, event.target);
                  };
                },
              },
              'core/src/lib/events/elementExists.js': {
                name: 'element-exists',
                displayName: 'Element Exists',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var POLL_INTERVAL = 3000;
                  var WeakMap = require('./helpers/weakMap');
                  var seenElements = new WeakMap();
                  var matchesProperties = require('./helpers/matchesProperties');
                  var listenersBySelector = {};
                  setInterval(function () {
                    Object.keys(listenersBySelector).forEach(function (selector) {
                      var listeners = listenersBySelector[selector];
                      var elements = document.querySelectorAll(selector);
                      for (var i = 0; i < elements.length; i++) {
                        var element = elements[i];
                        if (!seenElements.has(element)) {
                          seenElements.set(element, true);
                          for (var k = 0; k < listeners.length; k++) {
                            var listener = listeners[k];
                            if (matchesProperties(element, listener.settings.elementProperties)) {
                              listener.trigger({ element: element, target: element });
                              listeners.splice(k, 1);
                              k--;
                            }
                          }
                        }
                        if (!listeners.length) {
                          delete listenersBySelector[selector];
                          break;
                        }
                      }
                    });
                  }, POLL_INTERVAL);
                  module.exports = function (settings, trigger) {
                    var listeners = listenersBySelector[settings.elementSelector];
                    if (!listeners) {
                      listeners = listenersBySelector[settings.elementSelector] = [];
                    }
                    listeners.push({ settings: settings, trigger: trigger });
                  };
                },
              },
              'core/src/lib/events/historyChange.js': {
                name: 'history-change',
                displayName: 'History Change',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var debounce = require('./helpers/debounce');
                  var once = require('./helpers/once');
                  var history = window.history;
                  var lastURI = window.location.href;
                  var triggers = [];
                  var callThrough = function (object, methodName, fn) {
                    var original = object[methodName];
                    object[methodName] = function () {
                      var returnValue = original.apply(object, arguments);
                      fn.apply(null, arguments);
                      return returnValue;
                    };
                  };
                  var callTriggersIfURIChanged = debounce(function () {
                    var uri = window.location.href;
                    if (lastURI !== uri) {
                      triggers.forEach(function (trigger) {
                        trigger();
                      });
                      lastURI = uri;
                    }
                  }, 0);
                  var watchForHistoryChange = once(function () {
                    if (history) {
                      if (history.pushState) {
                        callThrough(history, 'pushState', callTriggersIfURIChanged);
                      }
                      if (history.replaceState) {
                        callThrough(history, 'replaceState', callTriggersIfURIChanged);
                      }
                    }
                    window.addEventListener('popstate', callTriggersIfURIChanged);
                    window.addEventListener('hashchange', callTriggersIfURIChanged);
                  });
                  module.exports = function (settings, trigger) {
                    watchForHistoryChange();
                    triggers.push(trigger);
                  };
                },
              },
              'core/src/lib/events/domReady.js': {
                name: 'dom-ready',
                displayName: 'DOM Ready',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');
                  module.exports = function (settings, trigger) {
                    pageLifecycleEvents.registerDomReadyTrigger(trigger);
                  };
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var document = require('@adobe/reactor-document');
                  var textMatch = require('../helpers/textMatch');
                  module.exports = function (settings) {
                    var path = document.location.pathname;
                    return settings.paths.some(function (acceptablePath) {
                      var acceptableValue = acceptablePath.valueIsRegex
                        ? new RegExp(acceptablePath.value, 'i')
                        : acceptablePath.value;
                      return textMatch(path, acceptableValue);
                    });
                  };
                },
              },
              'core/src/lib/conditions/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var window = require('@adobe/reactor-window');
                  var queryString = require('@adobe/reactor-query-string');
                  var textMatch = require('../helpers/textMatch');
                  module.exports = function (settings) {
                    var acceptableValue = settings.valueIsRegex
                      ? new RegExp(settings.value, 'i')
                      : settings.value;
                    var queryParams = queryString.parse(window.location.search);
                    return textMatch(queryParams[settings.name], acceptableValue);
                  };
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var isNumber = function (value) {
                    return typeof value === 'number' && isFinite(value);
                  };
                  var isString = function (value) {
                    return typeof value === 'string' || value instanceof String;
                  };
                  var updateCase = function (operand, caseInsensitive) {
                    return caseInsensitive && isString(operand) ? operand.toLowerCase() : operand;
                  };
                  var castToStringIfNumber = function (operand) {
                    return isNumber(operand) ? String(operand) : operand;
                  };
                  var castToNumberIfString = function (operand) {
                    return isString(operand) ? Number(operand) : operand;
                  };
                  var guardStringCompare = function (compare) {
                    return function (leftOperand, rightOperand, caseInsensitive) {
                      leftOperand = castToStringIfNumber(leftOperand);
                      rightOperand = castToStringIfNumber(rightOperand);
                      return (
                        isString(leftOperand) &&
                        isString(rightOperand) &&
                        compare(leftOperand, rightOperand, caseInsensitive)
                      );
                    };
                  };
                  var guardNumberCompare = function (compare) {
                    return function (leftOperand, rightOperand) {
                      leftOperand = castToNumberIfString(leftOperand);
                      rightOperand = castToNumberIfString(rightOperand);
                      return (
                        isNumber(leftOperand) &&
                        isNumber(rightOperand) &&
                        compare(leftOperand, rightOperand)
                      );
                    };
                  };
                  var guardCaseSensitivity = function (compare) {
                    return function (leftOperand, rightOperand, caseInsensitive) {
                      return compare(
                        updateCase(leftOperand, caseInsensitive),
                        updateCase(rightOperand, caseInsensitive)
                      );
                    };
                  };
                  var conditions = {
                    equals: guardCaseSensitivity(function (leftOperand, rightOperand) {
                      return leftOperand == rightOperand;
                    }),
                    doesNotEqual: function () {
                      return !conditions.equals.apply(null, arguments);
                    },
                    contains: guardStringCompare(
                      guardCaseSensitivity(function (leftOperand, rightOperand) {
                        return leftOperand.indexOf(rightOperand) !== -1;
                      })
                    ),
                    doesNotContain: function () {
                      return !conditions.contains.apply(null, arguments);
                    },
                    startsWith: guardStringCompare(
                      guardCaseSensitivity(function (leftOperand, rightOperand) {
                        return leftOperand.indexOf(rightOperand) === 0;
                      })
                    ),
                    doesNotStartWith: function () {
                      return !conditions.startsWith.apply(null, arguments);
                    },
                    endsWith: guardStringCompare(
                      guardCaseSensitivity(function (leftOperand, rightOperand) {
                        return (
                          leftOperand.substring(
                            leftOperand.length - rightOperand.length,
                            leftOperand.length
                          ) === rightOperand
                        );
                      })
                    ),
                    doesNotEndWith: function () {
                      return !conditions.endsWith.apply(null, arguments);
                    },
                    matchesRegex: guardStringCompare(function (
                      leftOperand,
                      rightOperand,
                      caseInsensitive
                    ) {
                      return new RegExp(rightOperand, caseInsensitive ? 'i' : '').test(
                        leftOperand
                      );
                    }),
                    doesNotMatchRegex: function () {
                      return !conditions.matchesRegex.apply(null, arguments);
                    },
                    lessThan: guardNumberCompare(function (leftOperand, rightOperand) {
                      return leftOperand < rightOperand;
                    }),
                    lessThanOrEqual: guardNumberCompare(function (leftOperand, rightOperand) {
                      return leftOperand <= rightOperand;
                    }),
                    greaterThan: guardNumberCompare(function (leftOperand, rightOperand) {
                      return leftOperand > rightOperand;
                    }),
                    greaterThanOrEqual: guardNumberCompare(function (leftOperand, rightOperand) {
                      return leftOperand >= rightOperand;
                    }),
                    isTrue: function (leftOperand) {
                      return leftOperand === true;
                    },
                    isTruthy: function (leftOperand) {
                      return Boolean(leftOperand);
                    },
                    isFalse: function (leftOperand) {
                      return leftOperand === false;
                    },
                    isFalsy: function (leftOperand) {
                      return !leftOperand;
                    },
                  };
                  module.exports = function (settings) {
                    return conditions[settings.comparison.operator](
                      settings.leftOperand,
                      settings.rightOperand,
                      Boolean(settings.comparison.caseInsensitive)
                    );
                  };
                },
              },
              'core/src/lib/events/dataElementChange.js': {
                name: 'data-element-change',
                displayName: 'Data Element Change',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var POLL_INTERVAL = 1000;
                  var triggersByName = {};
                  var cachedStringifiedValueByName = {};
                  setInterval(function () {
                    Object.keys(triggersByName).forEach(function (name) {
                      var stringifiedValue = JSON.stringify(turbine.getDataElementValue(name));
                      if (stringifiedValue !== cachedStringifiedValueByName[name]) {
                        var syntheticEvent = { dataElementName: name };
                        triggersByName[name].forEach(function (trigger) {
                          trigger(syntheticEvent);
                        });
                        cachedStringifiedValueByName[name] = stringifiedValue;
                      }
                    });
                  }, POLL_INTERVAL);
                  module.exports = function (settings, trigger) {
                    var name = settings.name;
                    var triggers = triggersByName[name];
                    if (!triggers) {
                      triggers = triggersByName[name] = [];
                      cachedStringifiedValueByName[name] = JSON.stringify(
                        turbine.getDataElementValue(name)
                      );
                    }
                    triggers.push(trigger);
                  };
                },
              },
              'core/src/lib/helpers/getObjectProperty.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = function (obj, property) {
                    var propertyChain = property.split('.');
                    var currentValue = obj;
                    for (var i = 0, len = propertyChain.length; i < len; i++) {
                      if (currentValue == null) {
                        return undefined;
                      }
                      currentValue = currentValue[propertyChain[i]];
                    }
                    return currentValue;
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (module, exports, require, turbine) {
                  const $___old_d5b6cd75a2b4c54a = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_d5b6cd75a2b4c54a)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_47c01efa79e9f191.appVersion
                      ));
                    return function () {
                      'use strict';
                      var window = require('@adobe/reactor-window');
                      var document = require('@adobe/reactor-document');
                      var isIE10 = window.navigator.appVersion.indexOf('MSIE 10') !== -1;
                      var WINDOW_LOADED = 'WINDOW_LOADED';
                      var DOM_READY = 'DOM_READY';
                      var PAGE_BOTTOM = 'PAGE_BOTTOM';
                      var lifecycleEventsOrder = [PAGE_BOTTOM, DOM_READY, WINDOW_LOADED];
                      var createSyntheticEvent = function (element, nativeEvent) {
                        return { element: element, target: element, nativeEvent: nativeEvent };
                      };
                      var registry = {};
                      lifecycleEventsOrder.forEach(function (event) {
                        registry[event] = [];
                      });
                      var processRegistry = function (lifecycleEvent, nativeEvent) {
                        lifecycleEventsOrder
                          .slice(0, getLifecycleEventIndex(lifecycleEvent) + 1)
                          .forEach(function (lifecycleEvent) {
                            processTriggers(nativeEvent, lifecycleEvent);
                          });
                      };
                      var detectLifecycleEvent = function () {
                        if (document.readyState === 'complete') {
                          return WINDOW_LOADED;
                        } else if (document.readyState === 'interactive') {
                          return !isIE10 ? DOM_READY : null;
                        }
                      };
                      var getLifecycleEventIndex = function (event) {
                        return lifecycleEventsOrder.indexOf(event);
                      };
                      var processTriggers = function (nativeEvent, lifecycleEvent) {
                        registry[lifecycleEvent].forEach(function (triggerData) {
                          processTrigger(nativeEvent, triggerData);
                        });
                        registry[lifecycleEvent] = [];
                      };
                      var processTrigger = function (nativeEvent, triggerData) {
                        var trigger = triggerData.trigger;
                        var syntheticEventFn = triggerData.syntheticEventFn;
                        trigger(syntheticEventFn ? syntheticEventFn(nativeEvent) : null);
                      };
                      window._satellite = window._satellite || {};
                      window._satellite.pageBottom = processRegistry.bind(null, PAGE_BOTTOM);
                      document.addEventListener(
                        'DOMContentLoaded',
                        processRegistry.bind(null, DOM_READY),
                        true
                      );
                      window.addEventListener(
                        'load',
                        processRegistry.bind(null, WINDOW_LOADED),
                        true
                      );
                      window.setTimeout(function () {
                        var lifecycleEvent = detectLifecycleEvent();
                        if (lifecycleEvent) {
                          processRegistry(lifecycleEvent);
                        }
                      }, 0);
                      module.exports = {
                        registerLibraryLoadedTrigger: function (trigger) {
                          trigger();
                        },
                        registerPageBottomTrigger: function (trigger) {
                          registry[PAGE_BOTTOM].push({ trigger: trigger });
                        },
                        registerDomReadyTrigger: function (trigger) {
                          registry[DOM_READY].push({
                            trigger: trigger,
                            syntheticEventFn: createSyntheticEvent.bind(null, document),
                          });
                        },
                        registerWindowLoadedTrigger: function (trigger) {
                          registry[WINDOW_LOADED].push({
                            trigger: trigger,
                            syntheticEventFn: createSyntheticEvent.bind(null, window),
                          });
                        },
                      };
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_d5b6cd75a2b4c54a)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_d5b6cd75a2b4c54a
                      ));
                  }
                },
              },
              'core/src/lib/helpers/textMatch.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = function (str, pattern) {
                    if (pattern == null) {
                      throw new Error('Illegal Argument: Pattern is not present');
                    }
                    if (str == null) {
                      return false;
                    }
                    if (typeof pattern === 'string') {
                      return str === pattern;
                    } else if (pattern instanceof RegExp) {
                      return pattern.test(str);
                    } else {
                      return false;
                    }
                  };
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var decorateGlobalJavaScriptCode = require('./decorators/decorateGlobalJavaScriptCode');
                  var decorateNonGlobalJavaScriptCode = require('./decorators/decorateNonGlobalJavaScriptCode');
                  var decorateHtmlCode = require('./decorators/decorateHtmlCode');
                  var decorators = {
                    javascript: function (action, source) {
                      return action.settings.global
                        ? decorateGlobalJavaScriptCode(action, source)
                        : decorateNonGlobalJavaScriptCode(action, source);
                    },
                    html: decorateHtmlCode,
                  };
                  module.exports = function (action, source) {
                    return decorators[action.settings.language](action, source);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var Promise = require('@adobe/reactor-promise');
                  var getSourceByUrl = require('./getSourceByUrl');
                  var previousExecuteCodePromise = Promise.resolve();
                  module.exports = function (sourceUrl) {
                    var sequentiallyLoadCodePromise = new Promise(function (resolve) {
                      var loadCodePromise = getSourceByUrl(sourceUrl);
                      Promise.all([loadCodePromise, previousExecuteCodePromise]).then(function (
                        values
                      ) {
                        var source = values[0];
                        resolve(source);
                      });
                    });
                    previousExecuteCodePromise = sequentiallyLoadCodePromise;
                    return sequentiallyLoadCodePromise;
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (module, exports, require, turbine) {
                  (function webpackUniversalModuleDefinition (root, factory) {
                    if (typeof exports === 'object' && typeof module === 'object')
                      module.exports = factory();
                    else if (typeof define === 'function' && define.amd) define([], factory);
                    else if (typeof exports === 'object') exports['postscribe'] = factory();
                    else root['postscribe'] = factory();
                  })(this, function () {
                    return (function (modules) {
                      var installedModules = {};
                      function __webpack_require__ (moduleId) {
                        if (installedModules[moduleId]) return installedModules[moduleId].exports;
                        var module = (installedModules[moduleId] = {
                          exports: {},
                          id: moduleId,
                          loaded: false,
                        });
                        modules[moduleId].call(
                          module.exports,
                          module,
                          module.exports,
                          __webpack_require__
                        );
                        module.loaded = true;
                        return module.exports;
                      }
                      __webpack_require__.m = modules;
                      __webpack_require__.c = installedModules;
                      __webpack_require__.p = '';
                      return __webpack_require__(0);
                    })([
                      function (module, exports, __webpack_require__) {
                        'use strict';
                        var _postscribe = __webpack_require__(1);
                        var _postscribe2 = _interopRequireDefault(_postscribe);
                        function _interopRequireDefault (obj) {
                          return obj && obj.__esModule ? obj : { default: obj };
                        }
                        module.exports = _postscribe2['default'];
                      },
                      function (module, exports, __webpack_require__) {
                        'use strict';
                        exports.__esModule = true;
                        var _extends =
                          Object.assign ||
                          function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                              var source = arguments[i];
                              for (var key in source) {
                                if (Object.prototype.hasOwnProperty.call(source, key)) {
                                  target[key] = source[key];
                                }
                              }
                            }
                            return target;
                          };
                        exports['default'] = postscribe;
                        var _writeStream = __webpack_require__(2);
                        var _writeStream2 = _interopRequireDefault(_writeStream);
                        var _utils = __webpack_require__(4);
                        var utils = _interopRequireWildcard(_utils);
                        function _interopRequireWildcard (obj) {
                          if (obj && obj.__esModule) {
                            return obj;
                          } else {
                            var newObj = {};
                            if (obj != null) {
                              for (var key in obj) {
                                if (Object.prototype.hasOwnProperty.call(obj, key))
                                  newObj[key] = obj[key];
                              }
                            }
                            newObj['default'] = obj;
                            return newObj;
                          }
                        }
                        function _interopRequireDefault (obj) {
                          return obj && obj.__esModule ? obj : { default: obj };
                        }
                        function doNothing () {}
                        var OPTIONS = {
                          afterAsync: doNothing,
                          afterDequeue: doNothing,
                          afterStreamStart: doNothing,
                          afterWrite: doNothing,
                          autoFix: true,
                          beforeEnqueue: doNothing,
                          beforeWriteToken: function beforeWriteToken (tok) {
                            return tok;
                          },
                          beforeWrite: function beforeWrite (str) {
                            return str;
                          },
                          done: doNothing,
                          error: function error (e) {
                            throw new Error(e.msg);
                          },
                          releaseAsync: false,
                        };
                        var nextId = 0;
                        var queue = [];
                        var active = null;
                        function nextStream () {
                          var args = queue.shift();
                          if (args) {
                            var options = utils.last(args);
                            options.afterDequeue();
                            args.stream = runStream.apply(undefined, args);
                            options.afterStreamStart();
                          }
                        }
                        function runStream (el, html, options) {
                          active = new _writeStream2['default'](el, options);
                          active.id = nextId++;
                          active.name = options.name || active.id;
                          postscribe.streams[active.name] = active;
                          var doc = el.ownerDocument;
                          var stash = {
                            close: doc.close,
                            open: doc.open,
                            write: doc.write,
                            writeln: doc.writeln,
                          };
                          function _write (str) {
                            str = options.beforeWrite(str);
                            active.write(str);
                            options.afterWrite(str);
                          }
                          _extends(doc, {
                            close: doNothing,
                            open: doNothing,
                            write: function write () {
                              for (
                                var _len = arguments.length, str = Array(_len), _key = 0;
                                _key < _len;
                                _key++
                              ) {
                                str[_key] = arguments[_key];
                              }
                              return _write(str.join(''));
                            },
                            writeln: function writeln () {
                              for (
                                var _len2 = arguments.length, str = Array(_len2), _key2 = 0;
                                _key2 < _len2;
                                _key2++
                              ) {
                                str[_key2] = arguments[_key2];
                              }
                              return _write(str.join('') + '\n');
                            },
                          });
                          var oldOnError = active.win.onerror || doNothing;
                          active.win.onerror = function (msg, url, line) {
                            options.error({ msg: msg + ' - ' + url + ': ' + line });
                            oldOnError.apply(active.win, [msg, url, line]);
                          };
                          active.write(html, function () {
                            _extends(doc, stash);
                            active.win.onerror = oldOnError;
                            options.done();
                            active = null;
                            nextStream();
                          });
                          return active;
                        }
                        function postscribe (el, html, options) {
                          if (utils.isFunction(options)) {
                            options = { done: options };
                          } else if (options === 'clear') {
                            queue = [];
                            active = null;
                            nextId = 0;
                            return;
                          }
                          options = utils.defaults(options, OPTIONS);
                          if (/^#/.test(el)) {
                            el = window.document.getElementById(el.substr(1));
                          } else {
                            el = el.jquery ? el[0] : el;
                          }
                          var args = [el, html, options];
                          el.postscribe = {
                            cancel: function cancel () {
                              if (args.stream) {
                                args.stream.abort();
                              } else {
                                args[1] = doNothing;
                              }
                            },
                          };
                          options.beforeEnqueue(args);
                          queue.push(args);
                          if (!active) {
                            nextStream();
                          }
                          return el.postscribe;
                        }
                        _extends(postscribe, {
                          streams: {},
                          queue: queue,
                          WriteStream: _writeStream2['default'],
                        });
                      },
                      function (module, exports, __webpack_require__) {
                        'use strict';
                        exports.__esModule = true;
                        var _extends =
                          Object.assign ||
                          function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                              var source = arguments[i];
                              for (var key in source) {
                                if (Object.prototype.hasOwnProperty.call(source, key)) {
                                  target[key] = source[key];
                                }
                              }
                            }
                            return target;
                          };
                        var _prescribe = __webpack_require__(3);
                        var _prescribe2 = _interopRequireDefault(_prescribe);
                        var _utils = __webpack_require__(4);
                        var utils = _interopRequireWildcard(_utils);
                        function _interopRequireWildcard (obj) {
                          if (obj && obj.__esModule) {
                            return obj;
                          } else {
                            var newObj = {};
                            if (obj != null) {
                              for (var key in obj) {
                                if (Object.prototype.hasOwnProperty.call(obj, key))
                                  newObj[key] = obj[key];
                              }
                            }
                            newObj['default'] = obj;
                            return newObj;
                          }
                        }
                        function _interopRequireDefault (obj) {
                          return obj && obj.__esModule ? obj : { default: obj };
                        }
                        function _classCallCheck (instance, Constructor) {
                          if (!(instance instanceof Constructor)) {
                            throw new TypeError('Cannot call a class as a function');
                          }
                        }
                        var DEBUG_CHUNK = false;
                        var BASEATTR = 'data-ps-';
                        var PROXY_STYLE = 'ps-style';
                        var PROXY_SCRIPT = 'ps-script';
                        function getData (el, name) {
                          var attr = BASEATTR + name;
                          var val = el.getAttribute(attr);
                          return !utils.existy(val) ? val : String(val);
                        }
                        function setData (el, name) {
                          var value =
                            arguments.length > 2 && arguments[2] !== undefined
                              ? arguments[2]
                              : null;
                          var attr = BASEATTR + name;
                          if (utils.existy(value) && value !== '') {
                            el.setAttribute(attr, value);
                          } else {
                            el.removeAttribute(attr);
                          }
                        }
                        var WriteStream = (function () {
                          function WriteStream (root) {
                            var options =
                              arguments.length > 1 && arguments[1] !== undefined
                                ? arguments[1]
                                : {};
                            _classCallCheck(this, WriteStream);
                            this.root = root;
                            this.options = options;
                            this.doc = root.ownerDocument;
                            this.win = this.doc.defaultView || this.doc.parentWindow;
                            this.parser = new _prescribe2['default']('', {
                              autoFix: options.autoFix,
                            });
                            this.actuals = [root];
                            this.proxyHistory = '';
                            this.proxyRoot = this.doc.createElement(root.nodeName);
                            this.scriptStack = [];
                            this.writeQueue = [];
                            setData(this.proxyRoot, 'proxyof', 0);
                          }
                          WriteStream.prototype.write = function write () {
                            var _writeQueue;
                            (_writeQueue = this.writeQueue).push.apply(_writeQueue, arguments);
                            while (!this.deferredRemote && this.writeQueue.length) {
                              var arg = this.writeQueue.shift();
                              if (utils.isFunction(arg)) {
                                this._callFunction(arg);
                              } else {
                                this._writeImpl(arg);
                              }
                            }
                          };
                          WriteStream.prototype._callFunction = function _callFunction (fn) {
                            var tok = { type: 'function', value: fn.name || fn.toString() };
                            this._onScriptStart(tok);
                            fn.call(this.win, this.doc);
                            this._onScriptDone(tok);
                          };
                          WriteStream.prototype._writeImpl = function _writeImpl (html) {
                            this.parser.append(html);
                            var tok = void 0;
                            var script = void 0;
                            var style = void 0;
                            var tokens = [];
                            while (
                              (tok = this.parser.readToken()) &&
                              !(script = utils.isScript(tok)) &&
                              !(style = utils.isStyle(tok))
                            ) {
                              tok = this.options.beforeWriteToken(tok);
                              if (tok) {
                                tokens.push(tok);
                              }
                            }
                            if (tokens.length > 0) {
                              this._writeStaticTokens(tokens);
                            }
                            if (script) {
                              this._handleScriptToken(tok);
                            }
                            if (style) {
                              this._handleStyleToken(tok);
                            }
                          };
                          WriteStream.prototype._writeStaticTokens = function _writeStaticTokens (
                            tokens
                          ) {
                            var chunk = this._buildChunk(tokens);
                            if (!chunk.actual) {
                              return null;
                            }
                            chunk.html = this.proxyHistory + chunk.actual;
                            this.proxyHistory += chunk.proxy;
                            this.proxyRoot.innerHTML = chunk.html;
                            if (DEBUG_CHUNK) {
                              chunk.proxyInnerHTML = this.proxyRoot.innerHTML;
                            }
                            this._walkChunk();
                            if (DEBUG_CHUNK) {
                              chunk.actualInnerHTML = this.root.innerHTML;
                            }
                            return chunk;
                          };
                          WriteStream.prototype._buildChunk = function _buildChunk (tokens) {
                            var nextId = this.actuals.length;
                            var raw = [];
                            var actual = [];
                            var proxy = [];
                            var len = tokens.length;
                            for (var i = 0; i < len; i++) {
                              var tok = tokens[i];
                              var tokenRaw = tok.toString();
                              raw.push(tokenRaw);
                              if (tok.attrs) {
                                if (!/^noscript$/i.test(tok.tagName)) {
                                  var id = nextId++;
                                  actual.push(
                                    tokenRaw.replace(/(\/?>)/, ' ' + BASEATTR + 'id=' + id + ' $1')
                                  );
                                  if (
                                    tok.attrs.id !== PROXY_SCRIPT &&
                                    tok.attrs.id !== PROXY_STYLE
                                  ) {
                                    proxy.push(
                                      tok.type === 'atomicTag'
                                        ? ''
                                        : '<' +
                                            tok.tagName +
                                            ' ' +
                                            BASEATTR +
                                            'proxyof=' +
                                            id +
                                            (tok.unary ? ' />' : '>')
                                    );
                                  }
                                }
                              } else {
                                actual.push(tokenRaw);
                                proxy.push(tok.type === 'endTag' ? tokenRaw : '');
                              }
                            }
                            return {
                              tokens: tokens,
                              raw: raw.join(''),
                              actual: actual.join(''),
                              proxy: proxy.join(''),
                            };
                          };
                          WriteStream.prototype._walkChunk = function _walkChunk () {
                            var node = void 0;
                            var stack = [this.proxyRoot];
                            while (utils.existy((node = stack.shift()))) {
                              var isElement = node.nodeType === 1;
                              var isProxy = isElement && getData(node, 'proxyof');
                              if (!isProxy) {
                                if (isElement) {
                                  this.actuals[getData(node, 'id')] = node;
                                  setData(node, 'id');
                                }
                                var parentIsProxyOf =
                                  node.parentNode && getData(node.parentNode, 'proxyof');
                                if (parentIsProxyOf) {
                                  this.actuals[parentIsProxyOf].appendChild(node);
                                }
                              }
                              stack.unshift.apply(stack, utils.toArray(node.childNodes));
                            }
                          };
                          WriteStream.prototype._handleScriptToken = function _handleScriptToken (
                            tok
                          ) {
                            var _this = this;
                            var remainder = this.parser.clear();
                            if (remainder) {
                              this.writeQueue.unshift(remainder);
                            }
                            tok.src = tok.attrs.src || tok.attrs.SRC;
                            tok = this.options.beforeWriteToken(tok);
                            if (!tok) {
                              return;
                            }
                            if (tok.src && this.scriptStack.length) {
                              this.deferredRemote = tok;
                            } else {
                              this._onScriptStart(tok);
                            }
                            this._writeScriptToken(tok, function () {
                              _this._onScriptDone(tok);
                            });
                          };
                          WriteStream.prototype._handleStyleToken = function _handleStyleToken (
                            tok
                          ) {
                            var remainder = this.parser.clear();
                            if (remainder) {
                              this.writeQueue.unshift(remainder);
                            }
                            tok.type = tok.attrs.type || tok.attrs.TYPE || 'text/css';
                            tok = this.options.beforeWriteToken(tok);
                            if (tok) {
                              this._writeStyleToken(tok);
                            }
                            if (remainder) {
                              this.write();
                            }
                          };
                          WriteStream.prototype._writeStyleToken = function _writeStyleToken (
                            tok
                          ) {
                            var el = this._buildStyle(tok);
                            this._insertCursor(el, PROXY_STYLE);
                            if (tok.content) {
                              if (el.styleSheet && !el.sheet) {
                                el.styleSheet.cssText = tok.content;
                              } else {
                                el.appendChild(this.doc.createTextNode(tok.content));
                              }
                            }
                          };
                          WriteStream.prototype._buildStyle = function _buildStyle (tok) {
                            var el = this.doc.createElement(tok.tagName);
                            el.setAttribute('type', tok.type);
                            utils.eachKey(tok.attrs, function (name, value) {
                              el.setAttribute(name, value);
                            });
                            return el;
                          };
                          WriteStream.prototype._insertCursor = function _insertCursor (
                            el,
                            which
                          ) {
                            this._writeImpl('<span id="' + which + '"/>');
                            var cursor = this.doc.getElementById(which);
                            if (cursor) {
                              cursor.parentNode.replaceChild(el, cursor);
                            }
                          };
                          WriteStream.prototype._onScriptStart = function _onScriptStart (tok) {
                            tok.outerWrites = this.writeQueue;
                            this.writeQueue = [];
                            this.scriptStack.unshift(tok);
                          };
                          WriteStream.prototype._onScriptDone = function _onScriptDone (tok) {
                            if (tok !== this.scriptStack[0]) {
                              this.options.error({
                                msg: 'Bad script nesting or script finished twice',
                              });
                              return;
                            }
                            this.scriptStack.shift();
                            this.write.apply(this, tok.outerWrites);
                            if (!this.scriptStack.length && this.deferredRemote) {
                              this._onScriptStart(this.deferredRemote);
                              this.deferredRemote = null;
                            }
                          };
                          WriteStream.prototype._writeScriptToken = function _writeScriptToken (
                            tok,
                            done
                          ) {
                            var el = this._buildScript(tok);
                            var asyncRelease = this._shouldRelease(el);
                            var afterAsync = this.options.afterAsync;
                            if (tok.src) {
                              el.src = tok.src;
                              this._scriptLoadHandler(
                                el,
                                !asyncRelease
                                  ? function () {
                                      done();
                                      afterAsync();
                                    }
                                  : afterAsync
                              );
                            }
                            try {
                              this._insertCursor(el, PROXY_SCRIPT);
                              if (!el.src || asyncRelease) {
                                done();
                              }
                            } catch (e) {
                              this.options.error(e);
                              done();
                            }
                          };
                          WriteStream.prototype._buildScript = function _buildScript (tok) {
                            var el = this.doc.createElement(tok.tagName);
                            utils.eachKey(tok.attrs, function (name, value) {
                              el.setAttribute(name, value);
                            });
                            if (tok.content) {
                              el.text = tok.content;
                            }
                            return el;
                          };
                          WriteStream.prototype._scriptLoadHandler = function _scriptLoadHandler (
                            el,
                            done
                          ) {
                            function cleanup () {
                              el = el.onload = el.onreadystatechange = el.onerror = null;
                            }
                            var error = this.options.error;
                            function success () {
                              cleanup();
                              if (done != null) {
                                done();
                              }
                              done = null;
                            }
                            function failure (err) {
                              cleanup();
                              error(err);
                              if (done != null) {
                                done();
                              }
                              done = null;
                            }
                            function reattachEventListener (el, evt) {
                              var handler = el['on' + evt];
                              if (handler != null) {
                                el['_on' + evt] = handler;
                              }
                            }
                            reattachEventListener(el, 'load');
                            reattachEventListener(el, 'error');
                            _extends(el, {
                              onload: function onload () {
                                if (el._onload) {
                                  try {
                                    el._onload.apply(
                                      this,
                                      Array.prototype.slice.call(arguments, 0)
                                    );
                                  } catch (err) {
                                    failure({
                                      msg: 'onload handler failed ' + err + ' @ ' + el.src,
                                    });
                                  }
                                }
                                success();
                              },
                              onerror: function onerror () {
                                if (el._onerror) {
                                  try {
                                    el._onerror.apply(
                                      this,
                                      Array.prototype.slice.call(arguments, 0)
                                    );
                                  } catch (err) {
                                    failure({
                                      msg: 'onerror handler failed ' + err + ' @ ' + el.src,
                                    });
                                    return;
                                  }
                                }
                                failure({ msg: 'remote script failed ' + el.src });
                              },
                              onreadystatechange: function onreadystatechange () {
                                if (/^(loaded|complete)$/.test(el.readyState)) {
                                  success();
                                }
                              },
                            });
                          };
                          WriteStream.prototype._shouldRelease = function _shouldRelease (el) {
                            var isScript = /^script$/i.test(el.nodeName);
                            return (
                              !isScript ||
                              !!(this.options.releaseAsync && el.src && el.hasAttribute('async'))
                            );
                          };
                          return WriteStream;
                        })();
                        exports['default'] = WriteStream;
                      },
                      function (module, exports, __webpack_require__) {
                        (function webpackUniversalModuleDefinition (root, factory) {
                          if (true) module.exports = factory();
                          else if (typeof define === 'function' && define.amd) define([], factory);
                          else if (typeof exports === 'object') exports['Prescribe'] = factory();
                          else root['Prescribe'] = factory();
                        })(this, function () {
                          return (function (modules) {
                            var installedModules = {};
                            function __webpack_require__ (moduleId) {
                              if (installedModules[moduleId])
                                return installedModules[moduleId].exports;
                              var module = (installedModules[moduleId] = {
                                exports: {},
                                id: moduleId,
                                loaded: false,
                              });
                              modules[moduleId].call(
                                module.exports,
                                module,
                                module.exports,
                                __webpack_require__
                              );
                              module.loaded = true;
                              return module.exports;
                            }
                            __webpack_require__.m = modules;
                            __webpack_require__.c = installedModules;
                            __webpack_require__.p = '';
                            return __webpack_require__(0);
                          })([
                            function (module, exports, __webpack_require__) {
                              'use strict';
                              var _HtmlParser = __webpack_require__(1);
                              var _HtmlParser2 = _interopRequireDefault(_HtmlParser);
                              function _interopRequireDefault (obj) {
                                return obj && obj.__esModule ? obj : { default: obj };
                              }
                              module.exports = _HtmlParser2['default'];
                            },
                            function (module, exports, __webpack_require__) {
                              'use strict';
                              exports.__esModule = true;
                              var _supports = __webpack_require__(2);
                              var supports = _interopRequireWildcard(_supports);
                              var _streamReaders = __webpack_require__(3);
                              var streamReaders = _interopRequireWildcard(_streamReaders);
                              var _fixedReadTokenFactory = __webpack_require__(6);
                              var _fixedReadTokenFactory2 = _interopRequireDefault(
                                _fixedReadTokenFactory
                              );
                              var _utils = __webpack_require__(5);
                              function _interopRequireDefault (obj) {
                                return obj && obj.__esModule ? obj : { default: obj };
                              }
                              function _interopRequireWildcard (obj) {
                                if (obj && obj.__esModule) {
                                  return obj;
                                } else {
                                  var newObj = {};
                                  if (obj != null) {
                                    for (var key in obj) {
                                      if (Object.prototype.hasOwnProperty.call(obj, key))
                                        newObj[key] = obj[key];
                                    }
                                  }
                                  newObj['default'] = obj;
                                  return newObj;
                                }
                              }
                              function _classCallCheck (instance, Constructor) {
                                if (!(instance instanceof Constructor)) {
                                  throw new TypeError('Cannot call a class as a function');
                                }
                              }
                              var detect = {
                                comment: /^<!--/,
                                endTag: /^<\//,
                                atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                startTag: /^</,
                                chars: /^[^<]/,
                              };
                              var HtmlParser = (function () {
                                function HtmlParser () {
                                  var _this = this;
                                  var stream =
                                    arguments.length > 0 && arguments[0] !== undefined
                                      ? arguments[0]
                                      : '';
                                  var options =
                                    arguments.length > 1 && arguments[1] !== undefined
                                      ? arguments[1]
                                      : {};
                                  _classCallCheck(this, HtmlParser);
                                  this.stream = stream;
                                  var fix = false;
                                  var fixedTokenOptions = {};
                                  for (var key in supports) {
                                    if (supports.hasOwnProperty(key)) {
                                      if (options.autoFix) {
                                        fixedTokenOptions[key + 'Fix'] = true;
                                      }
                                      fix = fix || fixedTokenOptions[key + 'Fix'];
                                    }
                                  }
                                  if (fix) {
                                    this._readToken = (0, _fixedReadTokenFactory2['default'])(
                                      this,
                                      fixedTokenOptions,
                                      function () {
                                        return _this._readTokenImpl();
                                      }
                                    );
                                    this._peekToken = (0, _fixedReadTokenFactory2['default'])(
                                      this,
                                      fixedTokenOptions,
                                      function () {
                                        return _this._peekTokenImpl();
                                      }
                                    );
                                  } else {
                                    this._readToken = this._readTokenImpl;
                                    this._peekToken = this._peekTokenImpl;
                                  }
                                }
                                HtmlParser.prototype.append = function append (str) {
                                  this.stream += str;
                                };
                                HtmlParser.prototype.prepend = function prepend (str) {
                                  this.stream = str + this.stream;
                                };
                                HtmlParser.prototype._readTokenImpl = function _readTokenImpl () {
                                  var token = this._peekTokenImpl();
                                  if (token) {
                                    this.stream = this.stream.slice(token.length);
                                    return token;
                                  }
                                };
                                HtmlParser.prototype._peekTokenImpl = function _peekTokenImpl () {
                                  for (var type in detect) {
                                    if (detect.hasOwnProperty(type)) {
                                      if (detect[type].test(this.stream)) {
                                        var token = streamReaders[type](this.stream);
                                        if (token) {
                                          if (
                                            token.type === 'startTag' &&
                                            /script|style/i.test(token.tagName)
                                          ) {
                                            return null;
                                          } else {
                                            token.text = this.stream.substr(0, token.length);
                                            return token;
                                          }
                                        }
                                      }
                                    }
                                  }
                                };
                                HtmlParser.prototype.peekToken = function peekToken () {
                                  return this._peekToken();
                                };
                                HtmlParser.prototype.readToken = function readToken () {
                                  return this._readToken();
                                };
                                HtmlParser.prototype.readTokens = function readTokens (handlers) {
                                  var tok = void 0;
                                  while ((tok = this.readToken())) {
                                    if (handlers[tok.type] && handlers[tok.type](tok) === false) {
                                      return;
                                    }
                                  }
                                };
                                HtmlParser.prototype.clear = function clear () {
                                  var rest = this.stream;
                                  this.stream = '';
                                  return rest;
                                };
                                HtmlParser.prototype.rest = function rest () {
                                  return this.stream;
                                };
                                return HtmlParser;
                              })();
                              exports['default'] = HtmlParser;
                              HtmlParser.tokenToString = function (tok) {
                                return tok.toString();
                              };
                              HtmlParser.escapeAttributes = function (attrs) {
                                var escapedAttrs = {};
                                for (var name in attrs) {
                                  if (attrs.hasOwnProperty(name)) {
                                    escapedAttrs[name] = (0, _utils.escapeQuotes)(
                                      attrs[name],
                                      null
                                    );
                                  }
                                }
                                return escapedAttrs;
                              };
                              HtmlParser.supports = supports;
                              for (var key in supports) {
                                if (supports.hasOwnProperty(key)) {
                                  HtmlParser.browserHasFlaw =
                                    HtmlParser.browserHasFlaw || (!supports[key] && key);
                                }
                              }
                            },
                            function (module, exports) {
                              'use strict';
                              exports.__esModule = true;
                              var tagSoup = false;
                              var selfClose = false;
                              var work = window.document.createElement('div');
                              try {
                                var html = '<P><I></P></I>';
                                work.innerHTML = html;
                                exports.tagSoup = tagSoup = work.innerHTML !== html;
                              } catch (e) {
                                exports.tagSoup = tagSoup = false;
                              }
                              try {
                                work.innerHTML = '<P><i><P></P></i></P>';
                                exports.selfClose = selfClose = work.childNodes.length === 2;
                              } catch (e) {
                                exports.selfClose = selfClose = false;
                              }
                              work = null;
                              exports.tagSoup = tagSoup;
                              exports.selfClose = selfClose;
                            },
                            function (module, exports, __webpack_require__) {
                              'use strict';
                              exports.__esModule = true;
                              var _typeof =
                                typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                                  ? function (obj) {
                                      return typeof obj;
                                    }
                                  : function (obj) {
                                      return obj &&
                                        typeof Symbol === 'function' &&
                                        obj.constructor === Symbol &&
                                        obj !== Symbol.prototype
                                        ? 'symbol'
                                        : typeof obj;
                                    };
                              exports.comment = comment;
                              exports.chars = chars;
                              exports.startTag = startTag;
                              exports.atomicTag = atomicTag;
                              exports.endTag = endTag;
                              var _tokens = __webpack_require__(4);
                              var REGEXES = {
                                startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                              };
                              function comment (stream) {
                                var index = stream.indexOf('-->');
                                if (index >= 0) {
                                  return new _tokens.CommentToken(
                                    stream.substr(4, index - 1),
                                    index + 3
                                  );
                                }
                              }
                              function chars (stream) {
                                var index = stream.indexOf('<');
                                return new _tokens.CharsToken(index >= 0 ? index : stream.length);
                              }
                              function startTag (stream) {
                                var endTagIndex = stream.indexOf('>');
                                if (endTagIndex !== -1) {
                                  var match = stream.match(REGEXES.startTag);
                                  if (match) {
                                    var _ret = (function () {
                                      var attrs = {};
                                      var booleanAttrs = {};
                                      var rest = match[2];
                                      match[2].replace(REGEXES.attr, function (match, name) {
                                        if (
                                          !(
                                            arguments[2] ||
                                            arguments[3] ||
                                            arguments[4] ||
                                            arguments[5]
                                          )
                                        ) {
                                          attrs[name] = '';
                                        } else if (arguments[5]) {
                                          attrs[arguments[5]] = '';
                                          booleanAttrs[arguments[5]] = true;
                                        } else {
                                          attrs[name] =
                                            arguments[2] ||
                                            arguments[3] ||
                                            arguments[4] ||
                                            (REGEXES.fillAttr.test(name) && name) ||
                                            '';
                                        }
                                        rest = rest.replace(match, '');
                                      });
                                      return {
                                        v: new _tokens.StartTagToken(
                                          match[1],
                                          match[0].length,
                                          attrs,
                                          booleanAttrs,
                                          !!match[3],
                                          rest.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      };
                                    })();
                                    if (
                                      (typeof _ret === 'undefined'
                                        ? 'undefined'
                                        : _typeof(_ret)) === 'object'
                                    )
                                      return _ret.v;
                                  }
                                }
                              }
                              function atomicTag (stream) {
                                var start = startTag(stream);
                                if (start) {
                                  var rest = stream.slice(start.length);
                                  if (
                                    rest.match(new RegExp('</\\s*' + start.tagName + '\\s*>', 'i'))
                                  ) {
                                    var match = rest.match(
                                      new RegExp(
                                        '([\\s\\S]*?)</\\s*' + start.tagName + '\\s*>',
                                        'i'
                                      )
                                    );
                                    if (match) {
                                      return new _tokens.AtomicTagToken(
                                        start.tagName,
                                        match[0].length + start.length,
                                        start.attrs,
                                        start.booleanAttrs,
                                        match[1]
                                      );
                                    }
                                  }
                                }
                              }
                              function endTag (stream) {
                                var match = stream.match(REGEXES.endTag);
                                if (match) {
                                  return new _tokens.EndTagToken(match[1], match[0].length);
                                }
                              }
                            },
                            function (module, exports, __webpack_require__) {
                              'use strict';
                              exports.__esModule = true;
                              exports.EndTagToken = exports.AtomicTagToken = exports.StartTagToken = exports.TagToken = exports.CharsToken = exports.CommentToken = exports.Token = undefined;
                              var _utils = __webpack_require__(5);
                              function _classCallCheck (instance, Constructor) {
                                if (!(instance instanceof Constructor)) {
                                  throw new TypeError('Cannot call a class as a function');
                                }
                              }
                              var Token = (exports.Token = function Token (type, length) {
                                _classCallCheck(this, Token);
                                this.type = type;
                                this.length = length;
                                this.text = '';
                              });
                              var CommentToken = (exports.CommentToken = (function () {
                                function CommentToken (content, length) {
                                  _classCallCheck(this, CommentToken);
                                  this.type = 'comment';
                                  this.length = length || (content ? content.length : 0);
                                  this.text = '';
                                  this.content = content;
                                }
                                CommentToken.prototype.toString = function toString () {
                                  return '<!--' + this.content;
                                };
                                return CommentToken;
                              })());
                              var CharsToken = (exports.CharsToken = (function () {
                                function CharsToken (length) {
                                  _classCallCheck(this, CharsToken);
                                  this.type = 'chars';
                                  this.length = length;
                                  this.text = '';
                                }
                                CharsToken.prototype.toString = function toString () {
                                  return this.text;
                                };
                                return CharsToken;
                              })());
                              var TagToken = (exports.TagToken = (function () {
                                function TagToken (type, tagName, length, attrs, booleanAttrs) {
                                  _classCallCheck(this, TagToken);
                                  this.type = type;
                                  this.length = length;
                                  this.text = '';
                                  this.tagName = tagName;
                                  this.attrs = attrs;
                                  this.booleanAttrs = booleanAttrs;
                                  this.unary = false;
                                  this.html5Unary = false;
                                }
                                TagToken.formatTag = function formatTag (tok) {
                                  var content =
                                    arguments.length > 1 && arguments[1] !== undefined
                                      ? arguments[1]
                                      : null;
                                  var str = '<' + tok.tagName;
                                  for (var key in tok.attrs) {
                                    if (tok.attrs.hasOwnProperty(key)) {
                                      str += ' ' + key;
                                      var val = tok.attrs[key];
                                      if (
                                        typeof tok.booleanAttrs === 'undefined' ||
                                        typeof tok.booleanAttrs[key] === 'undefined'
                                      ) {
                                        str += '="' + (0, _utils.escapeQuotes)(val) + '"';
                                      }
                                    }
                                  }
                                  if (tok.rest) {
                                    str += ' ' + tok.rest;
                                  }
                                  if (tok.unary && !tok.html5Unary) {
                                    str += '/>';
                                  } else {
                                    str += '>';
                                  }
                                  if (content !== undefined && content !== null) {
                                    str += content + '</' + tok.tagName + '>';
                                  }
                                  return str;
                                };
                                return TagToken;
                              })());
                              var StartTagToken = (exports.StartTagToken = (function () {
                                function StartTagToken (
                                  tagName,
                                  length,
                                  attrs,
                                  booleanAttrs,
                                  unary,
                                  rest
                                ) {
                                  _classCallCheck(this, StartTagToken);
                                  this.type = 'startTag';
                                  this.length = length;
                                  this.text = '';
                                  this.tagName = tagName;
                                  this.attrs = attrs;
                                  this.booleanAttrs = booleanAttrs;
                                  this.html5Unary = false;
                                  this.unary = unary;
                                  this.rest = rest;
                                }
                                StartTagToken.prototype.toString = function toString () {
                                  return TagToken.formatTag(this);
                                };
                                return StartTagToken;
                              })());
                              var AtomicTagToken = (exports.AtomicTagToken = (function () {
                                function AtomicTagToken (
                                  tagName,
                                  length,
                                  attrs,
                                  booleanAttrs,
                                  content
                                ) {
                                  _classCallCheck(this, AtomicTagToken);
                                  this.type = 'atomicTag';
                                  this.length = length;
                                  this.text = '';
                                  this.tagName = tagName;
                                  this.attrs = attrs;
                                  this.booleanAttrs = booleanAttrs;
                                  this.unary = false;
                                  this.html5Unary = false;
                                  this.content = content;
                                }
                                AtomicTagToken.prototype.toString = function toString () {
                                  return TagToken.formatTag(this, this.content);
                                };
                                return AtomicTagToken;
                              })());
                              var EndTagToken = (exports.EndTagToken = (function () {
                                function EndTagToken (tagName, length) {
                                  _classCallCheck(this, EndTagToken);
                                  this.type = 'endTag';
                                  this.length = length;
                                  this.text = '';
                                  this.tagName = tagName;
                                }
                                EndTagToken.prototype.toString = function toString () {
                                  return '</' + this.tagName + '>';
                                };
                                return EndTagToken;
                              })());
                            },
                            function (module, exports) {
                              'use strict';
                              exports.__esModule = true;
                              exports.escapeQuotes = escapeQuotes;
                              function escapeQuotes (value) {
                                var defaultValue =
                                  arguments.length > 1 && arguments[1] !== undefined
                                    ? arguments[1]
                                    : '';
                                return !value
                                  ? defaultValue
                                  : value.replace(/([^"]*)"/g, function (_, prefix) {
                                      return /\\/.test(prefix) ? prefix + '"' : prefix + '\\"';
                                    });
                              }
                            },
                            function (module, exports) {
                              'use strict';
                              exports.__esModule = true;
                              exports['default'] = fixedReadTokenFactory;
                              var EMPTY = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i;
                              var CLOSESELF = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                              function correct (tok) {
                                if (tok && tok.type === 'startTag') {
                                  tok.unary = EMPTY.test(tok.tagName) || tok.unary;
                                  tok.html5Unary = !/\/>$/.test(tok.text);
                                }
                                return tok;
                              }
                              function peekToken (parser, readTokenImpl) {
                                var tmp = parser.stream;
                                var tok = correct(readTokenImpl());
                                parser.stream = tmp;
                                return tok;
                              }
                              function closeLast (parser, stack) {
                                var tok = stack.pop();
                                parser.prepend('</' + tok.tagName + '>');
                              }
                              function newStack () {
                                var stack = [];
                                stack.last = function () {
                                  return this[this.length - 1];
                                };
                                stack.lastTagNameEq = function (tagName) {
                                  var last = this.last();
                                  return (
                                    last &&
                                    last.tagName &&
                                    last.tagName.toUpperCase() === tagName.toUpperCase()
                                  );
                                };
                                stack.containsTagName = function (tagName) {
                                  for (var i = 0, tok; (tok = this[i]); i++) {
                                    if (tok.tagName === tagName) {
                                      return true;
                                    }
                                  }
                                  return false;
                                };
                                return stack;
                              }
                              function fixedReadTokenFactory (parser, options, readTokenImpl) {
                                var stack = newStack();
                                var handlers = {
                                  startTag: function startTag (tok) {
                                    var tagName = tok.tagName;
                                    if (
                                      tagName.toUpperCase() === 'TR' &&
                                      stack.lastTagNameEq('TABLE')
                                    ) {
                                      parser.prepend('<TBODY>');
                                      prepareNextToken();
                                    } else if (
                                      options.selfCloseFix &&
                                      CLOSESELF.test(tagName) &&
                                      stack.containsTagName(tagName)
                                    ) {
                                      if (stack.lastTagNameEq(tagName)) {
                                        closeLast(parser, stack);
                                      } else {
                                        parser.prepend('</' + tok.tagName + '>');
                                        prepareNextToken();
                                      }
                                    } else if (!tok.unary) {
                                      stack.push(tok);
                                    }
                                  },
                                  endTag: function endTag (tok) {
                                    var last = stack.last();
                                    if (last) {
                                      if (
                                        options.tagSoupFix &&
                                        !stack.lastTagNameEq(tok.tagName)
                                      ) {
                                        closeLast(parser, stack);
                                      } else {
                                        stack.pop();
                                      }
                                    } else if (options.tagSoupFix) {
                                      readTokenImpl();
                                      prepareNextToken();
                                    }
                                  },
                                };
                                function prepareNextToken () {
                                  var tok = peekToken(parser, readTokenImpl);
                                  if (tok && handlers[tok.type]) {
                                    handlers[tok.type](tok);
                                  }
                                }
                                return function fixedReadToken () {
                                  prepareNextToken();
                                  return correct(readTokenImpl());
                                };
                              }
                            },
                          ]);
                        });
                      },
                      function (module, exports) {
                        'use strict';
                        exports.__esModule = true;
                        var _typeof =
                          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                            ? function (obj) {
                                return typeof obj;
                              }
                            : function (obj) {
                                return obj &&
                                  typeof Symbol === 'function' &&
                                  obj.constructor === Symbol &&
                                  obj !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof obj;
                              };
                        exports.existy = existy;
                        exports.isFunction = isFunction;
                        exports.each = each;
                        exports.eachKey = eachKey;
                        exports.defaults = defaults;
                        exports.toArray = toArray;
                        exports.last = last;
                        exports.isTag = isTag;
                        exports.isScript = isScript;
                        exports.isStyle = isStyle;
                        function existy (thing) {
                          return thing !== void 0 && thing !== null;
                        }
                        function isFunction (x) {
                          return 'function' === typeof x;
                        }
                        function each (arr, fn, target) {
                          var i = void 0;
                          var len = (arr && arr.length) || 0;
                          for (i = 0; i < len; i++) {
                            fn.call(target, arr[i], i);
                          }
                        }
                        function eachKey (obj, fn, target) {
                          for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                              fn.call(target, key, obj[key]);
                            }
                          }
                        }
                        function defaults (options, _defaults) {
                          options = options || {};
                          eachKey(_defaults, function (key, val) {
                            if (!existy(options[key])) {
                              options[key] = val;
                            }
                          });
                          return options;
                        }
                        function toArray (obj) {
                          try {
                            return Array.prototype.slice.call(obj);
                          } catch (e) {
                            var _ret = (function () {
                              var ret = [];
                              each(obj, function (val) {
                                ret.push(val);
                              });
                              return { v: ret };
                            })();
                            if (
                              (typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) ===
                              'object'
                            )
                              return _ret.v;
                          }
                        }
                        function last (array) {
                          return array[array.length - 1];
                        }
                        function isTag (tok, tag) {
                          return !tok ||
                            !(tok.type === 'startTag' || tok.type === 'atomicTag') ||
                            !('tagName' in tok)
                            ? !1
                            : !!~tok.tagName.toLowerCase().indexOf(tag);
                        }
                        function isScript (tok) {
                          return isTag(tok, 'script');
                        }
                        function isStyle (tok) {
                          return isTag(tok, 'style');
                        }
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/unescapeHtmlCode.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var document = require('@adobe/reactor-document');
                  var el = document.createElement('div');
                  module.exports = function (html) {
                    el.innerHTML = html;
                    return el.textContent || el.innerText || html;
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var Promise = require('@adobe/reactor-promise');
                  module.exports = function (_, source) {
                    return {
                      code: '<scr' + 'ipt>\n' + source + '\n</scr' + 'ipt>',
                      promise: Promise.resolve(),
                    };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var Promise = require('@adobe/reactor-promise');
                  var id = 0;
                  module.exports = function (action, source) {
                    var runScriptFnName = '_runScript' + ++id;
                    var promise = new Promise(function (resolve, reject) {
                      _satellite[runScriptFnName] = function (fn) {
                        delete _satellite[runScriptFnName];
                        new Promise(function (_resolve) {
                          const $___old_529fba9249738d90 = {}.constructor.getOwnPropertyDescriptor(
                            window,
                            'localStorage'
                          );
                          try {
                            if ($___old_529fba9249738d90)
                              ({}.constructor.defineProperty(
                                window,
                                'localStorage',
                                $___stub_b317e19f866a2da7.localStorage
                              ));
                            return function () {
                              _resolve(
                                fn.call(
                                  action.event.element,
                                  action.event,
                                  action.event.target,
                                  Promise
                                )
                              );
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_529fba9249738d90)
                              ({}.constructor.defineProperty(
                                window,
                                'localStorage',
                                $___old_529fba9249738d90
                              ));
                          }
                        }).then(resolve, reject);
                      };
                    });
                    var code =
                      '<scr' +
                      'ipt>_satellite["' +
                      runScriptFnName +
                      '"](function(event, target, Promise) {\n' +
                      source +
                      '\n});</scr' +
                      'ipt>';
                    return { code: code, promise: promise };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateHtmlCode.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var Promise = require('@adobe/reactor-promise');
                  var callbackId = 0;
                  var htmlCodePromises = {};
                  window._satellite = window._satellite || {};
                  window._satellite._onCustomCodeSuccess = function (callbackId) {
                    var promiseHandlers = htmlCodePromises[callbackId];
                    if (!promiseHandlers) {
                      return;
                    }
                    delete htmlCodePromises[callbackId];
                    promiseHandlers.resolve();
                  };
                  window._satellite._onCustomCodeFailure = function (callbackId) {
                    var promiseHandlers = htmlCodePromises[callbackId];
                    if (!promiseHandlers) {
                      return;
                    }
                    delete htmlCodePromises[callbackId];
                    promiseHandlers.reject();
                  };
                  var reactorCallbackIdShouldBeReplaced = function (source) {
                    return source.indexOf('${reactorCallbackId}') !== -1;
                  };
                  var replaceCallbacksIds = function (source, callbackId) {
                    return source.replace(/\${reactorCallbackId}/g, callbackId);
                  };
                  var isSourceLoadedFromFile = function (action) {
                    return action.settings.isExternal;
                  };
                  module.exports = function (action, source) {
                    if (isSourceLoadedFromFile(action)) {
                      source = turbine.replaceTokens(source, action.event);
                    }
                    var promise;
                    if (reactorCallbackIdShouldBeReplaced(source)) {
                      promise = new Promise(function (resolve, reject) {
                        htmlCodePromises[String(callbackId)] = {
                          resolve: resolve,
                          reject: reject,
                        };
                      });
                      source = replaceCallbacksIds(source, callbackId);
                      callbackId += 1;
                    } else {
                      promise = Promise.resolve();
                    }
                    return { code: source, promise: promise };
                  };
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var loadScript = require('@adobe/reactor-load-script');
                  var Promise = require('@adobe/reactor-promise');
                  var codeBySourceUrl = {};
                  var scriptStore = {};
                  var loadScriptOnlyOnce = function (url) {
                    if (!scriptStore[url]) {
                      scriptStore[url] = loadScript(url);
                    }
                    return scriptStore[url];
                  };
                  _satellite.__registerScript = function (sourceUrl, code) {
                    codeBySourceUrl[sourceUrl] = code;
                  };
                  module.exports = function (sourceUrl) {
                    if (codeBySourceUrl[sourceUrl]) {
                      return Promise.resolve(codeBySourceUrl[sourceUrl]);
                    } else {
                      return new Promise(function (resolve) {
                        loadScriptOnlyOnce(sourceUrl).then(
                          function () {
                            resolve(codeBySourceUrl[sourceUrl]);
                          },
                          function () {
                            resolve();
                          }
                        );
                      });
                    }
                  };
                },
              },
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var WeakMap = require('./weakMap');
                  var matchesProperties = require('./matchesProperties');
                  var matchesSelector = require('./matchesSelector');
                  module.exports = function () {
                    var listeners = [];
                    var processedEvents = new WeakMap();
                    var bubbly = {
                      addListener: function (settings, callback) {
                        listeners.push({ settings: settings, callback: callback });
                      },
                      evaluateEvent: function (event, eventIsSynthetic) {
                        if (!listeners.length) {
                          return;
                        }
                        if (processedEvents.has(event)) {
                          return;
                        }
                        var node = event.target;
                        var childHasTriggeredRule = false;
                        while (node) {
                          var preventEvaluationOnAncestors = false;
                          var nodeTriggeredRule = false;
                          for (var i = 0; i < listeners.length; i++) {
                            var listener = listeners[i];
                            var elementSelector = listener.settings.elementSelector;
                            var elementProperties = listener.settings.elementProperties;
                            if (
                              listener.settings.bubbleFireIfChildFired === false &&
                              childHasTriggeredRule
                            ) {
                              continue;
                            }
                            if (
                              node !== event.target &&
                              listener.settings.bubbleFireIfParent === false
                            ) {
                              continue;
                            }
                            if (
                              node !== event.target &&
                              !elementSelector &&
                              (!elementProperties || !Object.keys(elementProperties).length)
                            ) {
                              continue;
                            }
                            if (elementSelector && !matchesSelector(node, elementSelector)) {
                              continue;
                            }
                            if (elementProperties && !matchesProperties(node, elementProperties)) {
                              continue;
                            }
                            var syntheticEventForCallback = {};
                            if (eventIsSynthetic) {
                              Object.keys(event).forEach(function (key) {
                                syntheticEventForCallback[key] = event[key];
                              });
                            } else {
                              syntheticEventForCallback.nativeEvent = event;
                            }
                            syntheticEventForCallback.element = node;
                            syntheticEventForCallback.target = event.target;
                            var callbackResponse = listener.callback(syntheticEventForCallback);
                            var ruleTriggered = callbackResponse !== false;
                            if (ruleTriggered) {
                              nodeTriggeredRule = true;
                              if (listener.settings.bubbleStop) {
                                preventEvaluationOnAncestors = true;
                              }
                            }
                          }
                          if (preventEvaluationOnAncestors) {
                            break;
                          }
                          if (nodeTriggeredRule) {
                            childHasTriggeredRule = true;
                          }
                          node = node.parentNode;
                        }
                        processedEvents.set(event, true);
                      },
                    };
                    bubbly.__reset = function () {
                      listeners = [];
                    };
                    return bubbly;
                  };
                },
              },
              'core/src/lib/events/helpers/weakMap.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var window = require('@adobe/reactor-window');
                  var WeakMap = window.WeakMap;
                  if (typeof WeakMap === 'undefined') {
                    var defineProperty = Object.defineProperty;
                    var counter = Date.now() % 1000000000;
                    WeakMap = function () {
                      this.name =
                        '__st' + ((Math.random() * 1000000000) >>> 0) + (counter++ + '__');
                    };
                    WeakMap.prototype = {
                      set: function (key, value) {
                        var entry = key[this.name];
                        if (entry && entry[0] === key) entry[1] = value;
                        else
                          defineProperty(key, this.name, { value: [key, value], writable: true });
                        return this;
                      },
                      get: function (key) {
                        var entry;
                        return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
                      },
                      delete: function (key) {
                        var entry = key[this.name];
                        if (!entry || entry[0] !== key) return false;
                        entry[0] = entry[1] = undefined;
                        return true;
                      },
                      has: function (key) {
                        var entry = key[this.name];
                        if (!entry) return false;
                        return entry[0] === key;
                      },
                    };
                  }
                  module.exports = WeakMap;
                },
              },
              'core/src/lib/events/helpers/matchesProperties.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var textMatch = require('./../../helpers/textMatch');
                  var getElementProperty = function (element, property) {
                    if (property === '@text' || property === 'innerText') {
                      return element.textContent || element.innerText;
                    } else if (property in element) {
                      return element[property];
                    } else if (element.getAttribute) {
                      return element.getAttribute(property);
                    }
                  };
                  module.exports = function (element, properties) {
                    if (properties) {
                      return properties.every(function (property) {
                        var actualValue = getElementProperty(element, property.name);
                        var criterionValue = property.valueIsRegex
                          ? new RegExp(property.value, 'i')
                          : property.value;
                        return textMatch(actualValue, criterionValue);
                      });
                    }
                    return true;
                  };
                },
              },
              'core/src/lib/events/helpers/matchesSelector.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = function (element, selector) {
                    var matches = element.matches || element.msMatchesSelector;
                    if (matches) {
                      try {
                        return matches.call(element, selector);
                      } catch (error) {
                        turbine.logger.warn(
                          'Matching element failed. ' + selector + ' is not a valid selector.'
                        );
                        return false;
                      }
                    }
                    return false;
                  };
                },
              },
              'core/src/lib/events/helpers/debounce.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = function (fn, delay, context) {
                    var timeoutId = null;
                    return function () {
                      var ctx = context || this;
                      var args = arguments;
                      clearTimeout(timeoutId);
                      timeoutId = setTimeout(function () {
                        fn.apply(ctx, args);
                      }, delay);
                    };
                  };
                },
              },
              'core/src/lib/events/helpers/enableWeakMapDefaultValue.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = function (weakMap, defaultValueFactory) {
                    var originalGet = weakMap.get;
                    weakMap.get = function (key) {
                      if (!weakMap.has(key)) {
                        weakMap.set(key, defaultValueFactory());
                      }
                      return originalGet.apply(this, arguments);
                    };
                    return weakMap;
                  };
                },
              },
              'core/src/lib/events/helpers/once.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = function (fn, context) {
                    var result;
                    return function () {
                      if (fn) {
                        result = fn.apply(context || this, arguments);
                        fn = null;
                      }
                      return result;
                    };
                  };
                },
              },
            },
            settings: { cspNonce: '%nonce%' },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2e2f86ba46954a2b8a2b3bb72276b9f8/',
          },
          'adobe-mcid': {
            displayName: 'Experience Cloud ID Service',
            modules: {
              'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var document = require('@adobe/reactor-document');
                  var VisitorAPI = require('../codeLibrary/VisitorAPI');
                  var timeUnits = require('../../view/utils/timeUnits');
                  var transformArrayToObject = function (configs) {
                    var initConfig = configs.reduce(function (obj, config) {
                      var value = /^(true|false)$/i.test(config.value)
                        ? JSON.parse(config.value)
                        : config.value;
                      obj[config.name] = value;
                      return obj;
                    }, {});
                    return initConfig;
                  };
                  var initializeVisitorId = function (Visitor) {
                    var extensionSettings = turbine.getExtensionSettings();
                    if (typeof extensionSettings.orgId !== 'string') {
                      throw new TypeError('Org ID is not a string.');
                    }
                    var initConfig = transformArrayToObject(extensionSettings.variables || []);
                    var doesOptInApply = extensionSettings.doesOptInApply;
                    if (doesOptInApply) {
                      if (typeof doesOptInApply === 'boolean') {
                        initConfig['doesOptInApply'] = doesOptInApply;
                      } else if (extensionSettings.optInCallback) {
                        initConfig['doesOptInApply'] = extensionSettings.optInCallback;
                      }
                    }
                    var isOptInStorageEnabled = extensionSettings.isOptInStorageEnabled;
                    if (isOptInStorageEnabled) {
                      initConfig['isOptInStorageEnabled'] = isOptInStorageEnabled;
                    }
                    var optInCookieDomain = extensionSettings.optInCookieDomain;
                    if (optInCookieDomain) {
                      initConfig['optInCookieDomain'] = optInCookieDomain;
                    }
                    var optInStorageExpiry = extensionSettings.optInStorageExpiry;
                    if (optInStorageExpiry) {
                      var timeUnit = extensionSettings.timeUnit;
                      if (timeUnit && timeUnits[timeUnit]) {
                        var seconds = optInStorageExpiry * timeUnits[timeUnit];
                        initConfig['optInStorageExpiry'] = seconds;
                      }
                    } else if (isOptInStorageEnabled === true) {
                      initConfig['optInStorageExpiry'] = 13 * 30 * 24 * 3600;
                    }
                    var previousPermissions = extensionSettings.previousPermissions;
                    if (previousPermissions) {
                      initConfig['previousPermissions'] = previousPermissions;
                    }
                    var preOptInApprovals = extensionSettings.preOptInApprovals;
                    if (preOptInApprovals) {
                      initConfig['preOptInApprovals'] = preOptInApprovals;
                    } else {
                      var preOptInApprovalInput = extensionSettings.preOptInApprovalInput;
                      if (preOptInApprovalInput) {
                        initConfig['preOptInApprovals'] = preOptInApprovalInput;
                      }
                    }
                    var isIabContext = extensionSettings.isIabContext;
                    if (isIabContext) {
                      initConfig['isIabContext'] = isIabContext;
                    }
                    var instance = Visitor.getInstance(extensionSettings.orgId, initConfig);
                    turbine.logger.info(
                      'Created instance using orgId: "' + extensionSettings.orgId + '"'
                    );
                    turbine.logger.info('Set variables: ' + JSON.stringify(initConfig));
                    instance.getMarketingCloudVisitorID(function (id) {
                      turbine.logger.info('Obtained Marketing Cloud Visitor Id: ' + id);
                    }, true);
                    return instance;
                  };
                  var excludePathsMatched = function (path) {
                    var extensionSettings = turbine.getExtensionSettings();
                    var pathExclusions = extensionSettings.pathExclusions || [];
                    return pathExclusions.some(function (pathExclusion) {
                      if (pathExclusion.valueIsRegex) {
                        return new RegExp(pathExclusion.value, 'i').test(path);
                      } else {
                        return pathExclusion.value === path;
                      }
                    });
                  };
                  var visitorIdInstance = null;
                  _satellite.getVisitorId = function () {
                    return visitorIdInstance;
                  };
                  if (excludePathsMatched(document.location.pathname)) {
                    turbine.logger.warn(
                      'MCID library not loaded. One of the path exclusions matches the ' +
                        'current path.'
                    );
                  } else {
                    visitorIdInstance = initializeVisitorId(VisitorAPI);
                  }
                  module.exports = visitorIdInstance;
                },
                name: 'mcid-instance',
                shared: true,
              },
              'adobe-mcid/src/lib/codeLibrary/VisitorAPI.js': {
                script: function (module, exports, require, turbine) {
                  module.exports = (function () {
                    var e = (function () {
                      'use strict';
                      function e (t) {
                        '@babel/helpers - typeof';
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
                            (t || (e && !V.isObjectEmpty(e))) &&
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
                        for (var t = /^\d+$/, n = 0, i = e.length; n < i; n++)
                          if (!t.test(e[n])) return !1;
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
                      function c (e) {
                        return e === Object(e) && 0 === Object.keys(e).length;
                      }
                      function u (e) {
                        return 'function' == typeof e || (e instanceof Array && e.length);
                      }
                      function l () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                          t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : function () {
                                  return !0;
                                };
                        (this.log = Ie('log', e, t)),
                          (this.warn = Ie('warn', e, t)),
                          (this.error = Ie('error', e, t));
                      }
                      function d () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          t = e.cookieName,
                          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          i = n.cookies;
                        if (!t || !i) return { get: we, set: we, remove: we };
                        var r = {
                          remove: function () {
                            i.remove(t);
                          },
                          get: function () {
                            var e = i.get(t),
                              n = {};
                            try {
                              n = JSON.parse(e);
                            } catch (e) {
                              n = {};
                            }
                            return n;
                          },
                          set: function (e, n) {
                            n = n || {};
                            var a = r.get(),
                              o = Object.assign(a, e);
                            i.set(t, JSON.stringify(o), {
                              domain: n.optInCookieDomain || '',
                              cookieLifetime: n.optInStorageExpiry || 34190000,
                              expires: !0,
                            });
                          },
                        };
                        return r;
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
                          var n = Ae(e);
                          return n.length
                            ? n.every(function (e) {
                                return !!t[e];
                              })
                            : be(t);
                        }
                        function t () {
                          M(b),
                            O(le.COMPLETE),
                            _(h.status, h.permissions),
                            s &&
                              m.set(h.permissions, {
                                optInCookieDomain: c,
                                optInStorageExpiry: u,
                              }),
                            C.execute(He);
                        }
                        function n (e) {
                          return function (n, i) {
                            if (!Oe(n))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return O(le.CHANGED), Object.assign(b, Me(Ae(n), e)), i || t(), h;
                          };
                        }
                        var i =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          r = i.doesOptInApply,
                          a = i.previousPermissions,
                          o = i.preOptInApprovals,
                          s = i.isOptInStorageEnabled,
                          c = i.optInCookieDomain,
                          u = i.optInStorageExpiry,
                          l = i.isIabContext,
                          f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          p = f.cookies,
                          g = Fe(a);
                        Ne(g, 'Invalid `previousPermissions`!'),
                          Ne(o, 'Invalid `preOptInApprovals`!');
                        var m = d({ cookieName: 'adobeujs-optin' }, { cookies: p }),
                          h = this,
                          _ = ue(h),
                          C = he(),
                          I = Te(g),
                          S = Te(o),
                          v = s ? m.get() : {},
                          D = {},
                          y = (function (e, t) {
                            return Pe(e) || (t && Pe(t)) ? le.COMPLETE : le.PENDING;
                          })(I, v),
                          A = (function (e, t, n) {
                            var i = Me(me, !r);
                            return r ? Object.assign({}, i, e, t, n) : i;
                          })(S, I, v),
                          b = ke(A),
                          O = function (e) {
                            return (y = e);
                          },
                          M = function (e) {
                            return (A = e);
                          };
                        (h.deny = n(!1)),
                          (h.approve = n(!0)),
                          (h.denyAll = h.deny.bind(h, me)),
                          (h.approveAll = h.approve.bind(h, me)),
                          (h.isApproved = function (t) {
                            return e(t, h.permissions);
                          }),
                          (h.isPreApproved = function (t) {
                            return e(t, S);
                          }),
                          (h.fetchPermissions = function (e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                              n = t ? h.on(le.COMPLETE, e) : we;
                            return (
                              !r || (r && h.isComplete) || !!o
                                ? e(h.permissions)
                                : t ||
                                  C.add(He, function () {
                                    return e(h.permissions);
                                  }),
                              n
                            );
                          }),
                          (h.complete = function () {
                            h.status === le.CHANGED && t();
                          }),
                          (h.registerPlugin = function (e) {
                            if (!e || !e.name || 'function' != typeof e.onRegister)
                              throw new Error(Ue);
                            D[e.name] || ((D[e.name] = e), e.onRegister.call(e, h));
                          }),
                          (h.execute = Ve(D)),
                          (h.memoizeContent = function (e) {
                            Re(e) && m.set(e, { optInCookieDomain: c, optInStorageExpiry: u });
                          }),
                          (h.getMemoizedContent = function (e) {
                            var t = m.get();
                            if (t) return t[e];
                          }),
                          Object.defineProperties(h, {
                            permissions: {
                              get: function () {
                                return A;
                              },
                            },
                            status: {
                              get: function () {
                                return y;
                              },
                            },
                            Categories: {
                              get: function () {
                                return de;
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
                                return Object.keys(D);
                              },
                            },
                            isIabContext: {
                              get: function () {
                                return l;
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
                        if (window.__tcfapi) return window.__tcfapi;
                        var e = window;
                        if (e === window.top) return void De.error('__tcfapi not found');
                        for (var t; !t; ) {
                          e = e.parent;
                          try {
                            e.frames.__tcfapiLocator && (t = e);
                          } catch (e) {}
                          if (e === window.top) break;
                        }
                        if (!t) return void De.error('__tcfapi not found');
                        var n = {};
                        return (
                          (window.__tcfapi = function (e, i, r, a) {
                            var o = Math.random() + '',
                              s = {
                                __tcfapiCall: { command: e, parameter: a, version: i, callId: o },
                              };
                            (n[o] = r), t.postMessage(s, '*');
                          }),
                          window.addEventListener(
                            'message',
                            function (e) {
                              var t = e.data;
                              if ('string' == typeof t)
                                try {
                                  t = JSON.parse(e.data);
                                } catch (e) {}
                              if (t.__tcfapiReturn) {
                                var i = t.__tcfapiReturn;
                                'function' == typeof n[i.callId] &&
                                  (n[i.callId](i.returnValue, i.success), delete n[i.callId]);
                              }
                            },
                            !1
                          ),
                          window.__tcfapi
                        );
                      }
                      function h (e, t) {
                        var n =
                            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                          i = !0 === e.vendor.consents[t],
                          r = n.every(function (t) {
                            return !0 === e.purpose.consents[t];
                          });
                        return i && r;
                      }
                      function _ () {
                        var e = this;
                        (e.name = 'iabPlugin'), (e.version = '0.0.2');
                        var t,
                          n = he(),
                          i = { transparencyAndConsentData: null },
                          r = function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return (i[e] = t);
                          };
                        (e.fetchConsentData = function (e) {
                          var t = e.callback,
                            n = e.timeout,
                            i = g(t, n);
                          a({ callback: i });
                        }),
                          (e.isApproved = function (e) {
                            var t = e.callback,
                              n = e.category,
                              r = e.timeout;
                            if (i.transparencyAndConsentData)
                              return t(null, h(i.transparencyAndConsentData, fe[n], pe[n]));
                            var o = g(function (e, i) {
                              t(e, h(i, fe[n], pe[n]));
                            }, r);
                            a({ category: n, callback: o });
                          }),
                          (e.onRegister = function (n) {
                            t = n;
                            var i = Object.keys(fe),
                              r = function (e, t) {
                                !e &&
                                  t &&
                                  (i.forEach(function (e) {
                                    var i = h(t, fe[e], pe[e]);
                                    n[i ? 'approve' : 'deny'](e, !0);
                                  }),
                                  n.complete());
                              };
                            e.fetchConsentData({ callback: r });
                          });
                        var a = function (e) {
                            var a = e.callback;
                            if (i.transparencyAndConsentData)
                              return a(null, i.transparencyAndConsentData);
                            n.add('FETCH_CONSENT_DATA', a),
                              o(function (e, a) {
                                if (a) {
                                  var o = ke(e),
                                    s = t.getMemoizedContent('iabConsentHash'),
                                    c = ve(o.tcString).toString(32);
                                  (o.consentString = e.tcString),
                                    (o.hasConsentChangedSinceLastCmpPull = s !== c),
                                    r('transparencyAndConsentData', o),
                                    t.memoizeContent({ iabConsentHash: c });
                                }
                                n.execute('FETCH_CONSENT_DATA', [
                                  null,
                                  i.transparencyAndConsentData,
                                ]);
                              });
                          },
                          o = function (e) {
                            var t = je(fe),
                              n = m();
                            'function' == typeof n && n('getTCData', 2, e, t);
                          };
                      }
                      var C =
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
                            for (t in n)
                              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                          }
                          return e;
                        };
                      var I,
                        S,
                        v = {
                          HANDSHAKE: 'HANDSHAKE',
                          GETSTATE: 'GETSTATE',
                          PARENTSTATE: 'PARENTSTATE',
                        },
                        D = {
                          MCMID: 'MCMID',
                          MCAID: 'MCAID',
                          MCAAMB: 'MCAAMB',
                          MCAAMLH: 'MCAAMLH',
                          MCOPTOUT: 'MCOPTOUT',
                          CUSTOMERIDS: 'CUSTOMERIDS',
                        },
                        y = {
                          MCMID: 'getMarketingCloudVisitorID',
                          MCAID: 'getAnalyticsVisitorID',
                          MCAAMB: 'getAudienceManagerBlob',
                          MCAAMLH: 'getAudienceManagerLocationHint',
                          MCOPTOUT: 'isOptedOut',
                          ALLFIELDS: 'getVisitorValues',
                        },
                        A = { CUSTOMERIDS: 'getCustomerIDs' },
                        b = {
                          MCMID: 'getMarketingCloudVisitorID',
                          MCAAMB: 'getAudienceManagerBlob',
                          MCAAMLH: 'getAudienceManagerLocationHint',
                          MCOPTOUT: 'isOptedOut',
                          MCAID: 'getAnalyticsVisitorID',
                          CUSTOMERIDS: 'getCustomerIDs',
                          ALLFIELDS: 'getVisitorValues',
                        },
                        O = { MC: 'MCMID', A: 'MCAID', AAM: 'MCAAMB' },
                        M = {
                          MCMID: 'MCMID',
                          MCOPTOUT: 'MCOPTOUT',
                          MCAID: 'MCAID',
                          MCAAMLH: 'MCAAMLH',
                          MCAAMB: 'MCAAMB',
                        },
                        k = { UNKNOWN: 0, AUTHENTICATED: 1, LOGGED_OUT: 2 },
                        E = { GLOBAL: 'global' },
                        T = {
                          MESSAGES: v,
                          STATE_KEYS_MAP: D,
                          ASYNC_API_MAP: y,
                          SYNC_API_MAP: A,
                          ALL_APIS: b,
                          FIELDGROUP_TO_FIELD: O,
                          FIELDS: M,
                          AUTH_STATE: k,
                          OPT_OUT: E,
                        },
                        P = T.STATE_KEYS_MAP,
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
                            var i = this.findField(P.MCMID, e),
                              r = n.call(this, P.MCMID, e);
                            return void 0 !== i ? i : r();
                          }),
                            (this.getVisitorValues = function (e) {
                              this.getMarketingCloudVisitorID(function (t) {
                                e({ MCMID: t });
                              });
                            });
                        },
                        R = T.MESSAGES,
                        w = T.ASYNC_API_MAP,
                        F = T.SYNC_API_MAP,
                        N = function () {
                          function e () {}
                          function t (e, t) {
                            var n = this;
                            return function () {
                              return n.callbackRegistry.add(e, t), n.messageParent(R.GETSTATE), '';
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
                            this[F[t]] = function () {
                              return this.findField(t, e) || {};
                            };
                          }
                          Object.keys(w).forEach(n, this), Object.keys(F).forEach(i, this);
                        },
                        x = T.ASYNC_API_MAP,
                        j = function () {
                          Object.keys(x).forEach(function (e) {
                            this[x[e]] = function (t) {
                              this.callbackRegistry.add(e, t);
                            };
                          }, this);
                        },
                        V = (function (e, t) {
                          return (t = { exports: {} }), e(t, t.exports), t.exports;
                        })(function (t, n) {
                          (n.isObjectEmpty = function (e) {
                            return e === Object(e) && 0 === Object.keys(e).length;
                          }),
                            (n.isValueEmpty = function (e) {
                              return '' === e || n.isObjectEmpty(e);
                            });
                          var i = function () {
                            const $___old_57573744c3005654 = {}.constructor.getOwnPropertyDescriptor(
                              Navigator.prototype,
                              'userAgent'
                            );
                            try {
                              if ($___old_57573744c3005654)
                                ({}.constructor.defineProperty(
                                  Navigator.prototype,
                                  'userAgent',
                                  $___stub_47c01efa79e9f191.userAgent
                                ));
                              return function () {
                                var e = navigator.appName,
                                  t = navigator.userAgent;
                                return (
                                  'Microsoft Internet Explorer' === e ||
                                  t.indexOf('MSIE ') >= 0 ||
                                  (t.indexOf('Trident/') >= 0 && t.indexOf('Windows NT 6') >= 0)
                                );
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_57573744c3005654)
                                ({}.constructor.defineProperty(
                                  Navigator.prototype,
                                  'userAgent',
                                  $___old_57573744c3005654
                                ));
                            }
                          };
                          (n.getIeVersion = function () {
                            return document.documentMode ? document.documentMode : i() ? 7 : null;
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
                                e.d_optout &&
                                  e.d_optout instanceof Array &&
                                  (t = e.d_optout.join(',')));
                              var i = parseInt(e.d_ottl, 10);
                              return isNaN(i) && (i = 7200), { optOut: t, d_ottl: i };
                            }),
                            (n.normalizeBoolean = function (e) {
                              var t = e;
                              return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
                            });
                        }),
                        H =
                          (V.isObjectEmpty,
                          V.isValueEmpty,
                          V.getIeVersion,
                          V.encodeAndBuildRequest,
                          V.isObject,
                          V.defineGlobalNamespace,
                          V.pluck,
                          V.parseOptOut,
                          V.normalizeBoolean,
                          n),
                        U = T.MESSAGES,
                        B = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        G = function (e, t) {
                          (this.parse = function (e) {
                            try {
                              var t = {};
                              return (
                                e.data.split('|').forEach(function (e, n) {
                                  if (void 0 !== e) {
                                    t[B[n]] = 2 !== n ? e : JSON.parse(e);
                                  }
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
                        Y = T.MESSAGES,
                        q = function (e, t, n, i) {
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
                          function c () {
                            r(new L(n._generateID)),
                              p.getMarketingCloudVisitorID(),
                              p.callbackRegistry.executeAll(p.state, !0),
                              C.removeEventListener('message', u);
                          }
                          function u (e) {
                            if (!h.isInvalid(e)) {
                              var t = h.parse(e);
                              (m = !1),
                                C.clearTimeout(p._handshakeTimeout),
                                C.removeEventListener('message', u),
                                r(new N(p)),
                                C.addEventListener('message', o),
                                p.setStateAndPublish(t.state),
                                p.callbackRegistry.hasCallbacks() && s(Y.GETSTATE);
                            }
                          }
                          function l () {
                            g && postMessage
                              ? (C.addEventListener('message', u),
                                s(Y.HANDSHAKE),
                                (p._handshakeTimeout = setTimeout(c, 250)))
                              : c();
                          }
                          function d () {
                            C.s_c_in || ((C.s_c_il = []), (C.s_c_in = 0)),
                              (p._c = 'Visitor'),
                              (p._il = C.s_c_il),
                              (p._in = C.s_c_in),
                              (p._il[p._in] = p),
                              C.s_c_in++;
                          }
                          function f () {
                            function e (e) {
                              0 !== e.indexOf('_') &&
                                'function' == typeof n[e] &&
                                (p[e] = function () {});
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
                            h = new G(e, g);
                          (p.callbackRegistry = H()),
                            (p.init = function () {
                              d(), f(), r(new j(p)), l();
                            }),
                            (p.findField = function (e, t) {
                              if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e];
                            }),
                            (p.messageParent = s),
                            (p.setStateAndPublish = a);
                        },
                        W = T.MESSAGES,
                        X = T.ALL_APIS,
                        K = T.ASYNC_API_MAP,
                        J = T.FIELDGROUP_TO_FIELD,
                        z = function (e, t) {
                          function n () {
                            var t = {};
                            return (
                              Object.keys(X).forEach(function (n) {
                                var i = X[n],
                                  r = e[i]();
                                V.isValueEmpty(r) || (t[n] = r);
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
                                var o = K[a[0]];
                                e[o](n, !0);
                              } else t();
                            };
                          }
                          function a (e, i) {
                            var r = n();
                            t.send(e, i, r);
                          }
                          function o (e) {
                            c(e), a(e, W.HANDSHAKE);
                          }
                          function s (e) {
                            r(function () {
                              a(e, W.PARENTSTATE);
                            })();
                          }
                          function c (n) {
                            function i (i) {
                              r.call(e, i),
                                t.send(n, W.PARENTSTATE, { CUSTOMERIDS: e.getCustomerIDs() });
                            }
                            var r = e.setCustomerIDs;
                            e.setCustomerIDs = i;
                          }
                          return function (e) {
                            if (!t.isInvalid(e)) {
                              (t.parse(e).prefix === W.HANDSHAKE ? o : s)(e.source);
                            }
                          };
                        },
                        Q = function (e, t) {
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
                        $ = {
                          get: function (e) {
                            e = encodeURIComponent(e);
                            var t = (';' + document.cookie).split(' ').join(';'),
                              n = t.indexOf(';' + e + '='),
                              i = n < 0 ? n : t.indexOf(';', n + 1);
                            return n < 0
                              ? ''
                              : decodeURIComponent(
                                  t.substring(n + 2 + e.length, i < 0 ? t.length : i)
                                );
                          },
                          set: function (e, t, n) {
                            var r = i(n, 'cookieLifetime'),
                              a = i(n, 'expires'),
                              o = i(n, 'domain'),
                              s = i(n, 'secure'),
                              c = s ? 'Secure' : '';
                            if (a && 'SESSION' !== r && 'NONE' !== r) {
                              var u = '' !== t ? parseInt(r || 0, 10) : -60;
                              if (u) (a = new Date()), a.setTime(a.getTime() + 1000 * u);
                              else if (1 === a) {
                                a = new Date();
                                var l = a.getYear();
                                a.setYear(l + 2 + (l < 1900 ? 1900 : 0));
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
                                  c),
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
                        Z = function (e) {
                          var t;
                          !e && C.location && (e = C.location.hostname), (t = e);
                          var n,
                            i = t.split('.');
                          for (n = i.length - 2; n >= 0; n--)
                            if (
                              ((t = i.slice(n).join('.')), $.set('test', 'cookie', { domain: t }))
                            )
                              return $.remove('test', { domain: t }), t;
                          return '';
                        },
                        ee = {
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
                        te = !!C.postMessage,
                        ne = {
                          postMessage: function (e, t, n) {
                            var i = 1;
                            t &&
                              (te
                                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (n.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + i++ + '&' + e));
                          },
                          receiveMessage: function (e, t) {
                            var n;
                            try {
                              te &&
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
                                C.addEventListener
                                  ? C[e ? 'addEventListener' : 'removeEventListener']('message', n)
                                  : C[e ? 'attachEvent' : 'detachEvent']('onmessage', n));
                            } catch (e) {}
                          },
                        },
                        ie = function (e) {
                          var t,
                            n,
                            i = '0123456789',
                            r = '',
                            a = '',
                            o = 8,
                            s = 10,
                            c = 10;
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
                              (n = Math.floor(Math.random() * c)),
                              (a += i.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (c = 3)
                                : (1 == t || 2 == t) && 10 != c && 2 > n
                                ? (c = 10)
                                : 2 < t && (c = 10);
                          return r + a;
                        },
                        re = function (e, t) {
                          return {
                            corsMetadata: (function () {
                              const $___old_22e90177dc8ee108 = {}.constructor.getOwnPropertyDescriptor(
                                  window,
                                  'XMLHttpRequest'
                                ),
                                $___old_2be46a4e1e011589 = {}.constructor.getOwnPropertyDescriptor(
                                  window,
                                  'XMLHttpRequest'
                                );
                              try {
                                if ($___old_22e90177dc8ee108)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'XMLHttpRequest',
                                    $___stub_afd3abb015d4d981.XMLHttpRequest
                                  ));
                                if ($___old_2be46a4e1e011589)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'XMLHttpRequest',
                                    $___stub_afd3abb015d4d981.XMLHttpRequest
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
                                      Object.prototype.toString
                                        .call(C.HTMLElement)
                                        .indexOf('Constructor') > 0 && (t = !1)),
                                    { corsType: e, corsCookiesEnabled: t }
                                  );
                                }.apply(this, arguments);
                              } finally {
                                if ($___old_22e90177dc8ee108)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'XMLHttpRequest',
                                    $___old_22e90177dc8ee108
                                  ));
                                if ($___old_2be46a4e1e011589)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'XMLHttpRequest',
                                    $___old_2be46a4e1e011589
                                  ));
                              }
                            })(),
                            getCORSInstance: function () {
                              const $___old_3777a2e5b5c7568e = {}.constructor.getOwnPropertyDescriptor(
                                  window,
                                  'XMLHttpRequest'
                                ),
                                $___old_2b436a4e8d1817e5 = {}.constructor.getOwnPropertyDescriptor(
                                  window,
                                  'XMLHttpRequest'
                                );
                              try {
                                if ($___old_3777a2e5b5c7568e)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'XMLHttpRequest',
                                    $___stub_afd3abb015d4d981.XMLHttpRequest
                                  ));
                                if ($___old_2b436a4e8d1817e5)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'XMLHttpRequest',
                                    $___stub_afd3abb015d4d981.XMLHttpRequest
                                  ));
                                return function () {
                                  return 'none' === this.corsMetadata.corsType
                                    ? null
                                    : new C[this.corsMetadata.corsType]();
                                }.apply(this, arguments);
                              } finally {
                                if ($___old_3777a2e5b5c7568e)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'XMLHttpRequest',
                                    $___old_3777a2e5b5c7568e
                                  ));
                                if ($___old_2b436a4e8d1817e5)
                                  ({}.constructor.defineProperty(
                                    window,
                                    'XMLHttpRequest',
                                    $___old_2b436a4e8d1817e5
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
                                  return void a.handleCORSError(
                                    t,
                                    e,
                                    'Error parsing response as JSON'
                                  );
                                }
                                try {
                                  for (var i = t.callback, r = C, o = 0; o < i.length; o++)
                                    r = r[i[o]];
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
                                  ('ontimeout' === i
                                    ? t.loadErrorHandler(!0)
                                    : t.loadErrorHandler(!1));
                            },
                          };
                        },
                        ae = {
                          POST_MESSAGE_ENABLED: !!C.postMessage,
                          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                          MILLIS_PER_DAY: 86400000,
                          ADOBE_MC: 'adobe_mc',
                          ADOBE_MC_SDID: 'adobe_mc_sdid',
                          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                          ADOBE_MC_TTL_IN_MIN: 5,
                          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                          FIRST_PARTY_SERVER_COOKIE: 's_ecid',
                        },
                        oe = function (e, t) {
                          var n = C.document;
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
                                e.loadSSL &&
                                  (i = e.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
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
                            messageSendingInterval: ae.POST_MESSAGE_ENABLED ? null : 100,
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
                                if (
                                  ((i = JSON.stringify(t.ibs || [])),
                                  this.jsonForComparison.length)
                                ) {
                                  var a,
                                    o,
                                    s,
                                    c = !1;
                                  for (a = 0, o = this.jsonForComparison.length; a < o; a++)
                                    if (
                                      ((s = this.jsonForComparison[a]),
                                      i === JSON.stringify(s.ibs || []))
                                    ) {
                                      c = !0;
                                      break;
                                    }
                                  c ? this.jsonDuplicates.push(t) : n();
                                } else n();
                              if (
                                (this.receivedThirdPartyCookiesNotification ||
                                  !ae.POST_MESSAGE_ENABLED ||
                                  this.iframeHasLoaded) &&
                                this.jsonWaiting.length
                              ) {
                                var u = this.jsonWaiting.shift();
                                this.process(u), this.requestToProcess();
                              }
                              e.idSyncDisableSyncs ||
                                e.disableIdSyncs ||
                                !this.iframeHasLoaded ||
                                !this.messages.length ||
                                this.sendingMessages ||
                                (this.throttleTimerSet ||
                                  ((this.throttleTimerSet = !0),
                                  setTimeout(function () {
                                    r.messageSendingInterval = ae.POST_MESSAGE_ENABLED
                                      ? null
                                      : 150;
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
                                    r.syncOnPage &&
                                      this.checkFirstPartyCookie(r, '', 'syncOnPage');
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
                                      V.encodeAndBuildRequest(r.url || [], ','),
                                      o(r.ttl || ''),
                                      '',
                                      '',
                                      r.fireURLSync ? 'true' : 'false',
                                    ]),
                                    r.syncOnPage ||
                                      (this.canSetThirdPartyCookies
                                        ? this.addMessage(a.join('|'))
                                        : r.fireURLSync &&
                                          this.checkFirstPartyCookie(r, a.join('|')));
                              s && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (t, n, i) {
                              var r = 'syncOnPage' === i,
                                a = r ? 'MCSYNCSOP' : 'MCSYNCS';
                              e._readVisitor();
                              var o,
                                s,
                                c = e._getField(a),
                                u = !1,
                                l = !1,
                                d = Math.ceil(new Date().getTime() / ae.MILLIS_PER_DAY);
                              c
                                ? ((o = c.split('*')),
                                  (s = this.pruneSyncData(o, t.id, d)),
                                  (u = s.dataPresent),
                                  (l = s.dataValid),
                                  (u && l) || this.fireSync(r, t, n, o, a, d))
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
                                    return (
                                      parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10)
                                    );
                                  });
                                  e.join('*').length > this.MAX_SYNCS_LENGTH;

                                )
                                  e.shift();
                            },
                            fireSync: function (t, n, i, r, a, o) {
                              var s = this;
                              if (t) {
                                if ('img' === n.tag) {
                                  var c,
                                    u,
                                    l,
                                    d,
                                    f = n.url,
                                    p = e.loadSSL ? 'https:' : 'http:';
                                  for (c = 0, u = f.length; c < u; c++) {
                                    (l = f[c]), (d = /^\/\//.test(l));
                                    var g = new Image();
                                    g.addEventListener(
                                      'load',
                                      (function (t, n, i, r) {
                                        return function () {
                                          (s.onPagePixels[t] = null), e._readVisitor();
                                          var o,
                                            c = e._getField(a),
                                            u = [];
                                          if (c) {
                                            o = c.split('*');
                                            var l, d, f;
                                            for (l = 0, d = o.length; l < d; l++)
                                              (f = o[l]), f.match('^' + n.id + '-') || u.push(f);
                                          }
                                          s.setSyncTrackingData(u, n, i, r);
                                        };
                                      })(this.onPagePixels.length, n, a, o)
                                    ),
                                      (g.src = (d ? p : '') + l),
                                      this.onPagePixels.push(g);
                                  }
                                }
                              } else this.addMessage(i), this.setSyncTrackingData(r, n, a, o);
                            },
                            addMessage: function (t) {
                              var n = encodeURIComponent,
                                i = n(
                                  e._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                                );
                              this.messages.push((ae.POST_MESSAGE_ENABLED ? '' : i) + t);
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
                                  ? ae.POST_MESSAGE_ENABLED
                                    ? ((e =
                                        n +
                                        i('---destpub-combined---') +
                                        this.messages.join('%01')),
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
                              ne.postMessage(e, this.url, this.iframe.contentWindow),
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
                                i.ibs instanceof Array &&
                                  i.ibs.length &&
                                  (this.doAttachIframe = !0),
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
                              return (
                                e._forceSyncIDCall || !t || n - t > ae.DAYS_BETWEEN_SYNC_ID_CALLS
                              );
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
                        se = {
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
                        ce = {
                          getConfigNames: function () {
                            return Object.keys(se);
                          },
                          getConfigs: function () {
                            return se;
                          },
                          normalizeConfig: function (e) {
                            return 'function' != typeof e ? e : e();
                          },
                        },
                        ue = function (e) {
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
                        le = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
                        de = {
                          AAM: 'aam',
                          ADCLOUD: 'adcloud',
                          ANALYTICS: 'aa',
                          CAMPAIGN: 'campaign',
                          ECID: 'ecid',
                          LIVEFYRE: 'livefyre',
                          TARGET: 'target',
                          MEDIA_ANALYTICS: 'mediaaa',
                        },
                        fe = ((I = {}), t(I, de.AAM, 565), t(I, de.ECID, 565), I),
                        pe = ((S = {}), t(S, de.AAM, [1, 10]), t(S, de.ECID, [1, 10]), S),
                        ge = ['videoaa', 'iabConsentHash'],
                        me = (function (e) {
                          return Object.keys(e).map(function (t) {
                            return e[t];
                          });
                        })(de),
                        he = function () {
                          var e = {};
                          return (
                            (e.callbacks = Object.create(null)),
                            (e.add = function (t, n) {
                              if (!u(n))
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
                              (n || (t && !c(t))) &&
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
                        _e = function () {},
                        Ce = function (e) {
                          var t = window,
                            n = t.console;
                          return !!n && 'function' == typeof n[e];
                        },
                        Ie = function (e, t, n) {
                          return n()
                            ? function () {
                                if (Ce(e)) {
                                  for (
                                    var n = arguments.length, i = new Array(n), r = 0;
                                    r < n;
                                    r++
                                  )
                                    i[r] = arguments[r];
                                  console[e].apply(console, [t].concat(i));
                                }
                              }
                            : _e;
                        },
                        Se = l,
                        ve = (function () {
                          for (var e = [], t = 0; t < 256; t++) {
                            for (var n = t, i = 0; i < 8; i++)
                              n = 1 & n ? 3988292384 ^ (n >>> 1) : n >>> 1;
                            e.push(n);
                          }
                          return function (t, n) {
                            (t = unescape(encodeURIComponent(t))), n || (n = 0), (n ^= -1);
                            for (var i = 0; i < t.length; i++) {
                              var r = 255 & (n ^ t.charCodeAt(i));
                              n = (n >>> 8) ^ e[r];
                            }
                            return (n ^= -1) >>> 0;
                          };
                        })(),
                        De = new Se('[ADOBE OPT-IN]'),
                        ye = function (t, n) {
                          return e(t) === n;
                        },
                        Ae = function (e, t) {
                          return e instanceof Array ? e : ye(e, 'string') ? [e] : t || [];
                        },
                        be = function (e) {
                          var t = Object.keys(e);
                          return (
                            !!t.length &&
                            t.every(function (t) {
                              return !0 === e[t];
                            })
                          );
                        },
                        Oe = function (e) {
                          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                          return (
                            !(!e || Ee(e)) &&
                            Ae(e).every(function (e) {
                              return me.indexOf(e) > -1 || (t && ge.indexOf(e) > -1);
                            })
                          );
                        },
                        Me = function (e, t) {
                          return e.reduce(function (e, n) {
                            return (e[n] = t), e;
                          }, {});
                        },
                        ke = function (e) {
                          return JSON.parse(JSON.stringify(e));
                        },
                        Ee = function (e) {
                          return (
                            '[object Array]' === Object.prototype.toString.call(e) && !e.length
                          );
                        },
                        Te = function (e) {
                          if (Re(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        Pe = function (e) {
                          return void 0 === e || (Re(e) ? Oe(Object.keys(e), !0) : Le(e));
                        },
                        Le = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && ye(e, 'string') && Oe(Object.keys(t), !0);
                          } catch (e) {
                            return !1;
                          }
                        },
                        Re = function (e) {
                          return null !== e && ye(e, 'object') && !1 === Array.isArray(e);
                        },
                        we = function () {},
                        Fe = function (e) {
                          return ye(e, 'function') ? e() : e;
                        },
                        Ne = function (e, t) {
                          Pe(e) || De.error(''.concat(t));
                        },
                        xe = function (e) {
                          return Object.keys(e).map(function (t) {
                            return e[t];
                          });
                        },
                        je = function (e) {
                          return xe(e).filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                          });
                        },
                        Ve = function (e) {
                          return function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              n = t.command,
                              i = t.params,
                              r = void 0 === i ? {} : i,
                              a = t.callback,
                              o = void 0 === a ? we : a;
                            if (!n || -1 === n.indexOf('.'))
                              throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                              var s = n.split('.'),
                                c = e[s[0]],
                                u = s[1];
                              if (!c || 'function' != typeof c[u])
                                throw new Error('Make sure the plugin and API name exist.');
                              var l = Object.assign(r, { callback: o });
                              c[u].call(c, l);
                            } catch (e) {
                              De.error('[execute] Something went wrong: ' + e.message);
                            }
                          };
                        };
                      (f.prototype = Object.create(Error.prototype)),
                        (f.prototype.constructor = f);
                      var He = 'fetchPermissions',
                        Ue = '[OptIn#registerPlugin] Plugin is invalid.';
                      (p.Categories = de), (p.TimeoutError = f);
                      var Be = Object.freeze({ OptIn: p, IabPlugin: _ }),
                        Ge = function (e, t) {
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
                                return void r({
                                  error: 'None of the messages are populated strings.',
                                });
                            } else {
                              if (!V.isObject(n))
                                return void r({ error: 'Invalid parameters passed.' });
                              var s = n;
                              if ('string' != typeof (n = s.subdomain) || !n.length)
                                return void r({
                                  error: 'config.subdomain is not a populated string.',
                                });
                              var c = s.urlDestinations;
                              if (!(c instanceof Array && c.length))
                                return void r({
                                  error: 'config.urlDestinations is not a populated array.',
                                });
                              var u = [];
                              c.forEach(function (e) {
                                V.isObject(e) &&
                                  (e.hideReferrer
                                    ? e.message && a.addMessage(e.message)
                                    : u.push(e));
                              });
                              !(function e () {
                                u.length &&
                                  setTimeout(function () {
                                    var t = new Image(),
                                      n = u.shift();
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
                        Ye = function e (t) {
                          function n (e, t) {
                            return (e >>> t) | (e << (32 - t));
                          }
                          for (
                            var i,
                              r,
                              a = Math.pow,
                              o = a(2, 32),
                              s = '',
                              c = [],
                              u = 8 * t.length,
                              l = (e.h = e.h || []),
                              d = (e.k = e.k || []),
                              f = d.length,
                              p = {},
                              g = 2;
                            f < 64;
                            g++
                          )
                            if (!p[g]) {
                              for (i = 0; i < 313; i += g) p[i] = g;
                              (l[f] = (a(g, 0.5) * o) | 0), (d[f++] = (a(g, 1 / 3) * o) | 0);
                            }
                          for (t += '\x80'; (t.length % 64) - 56; ) t += '\0';
                          for (i = 0; i < t.length; i++) {
                            if ((r = t.charCodeAt(i)) >> 8) return;
                            c[i >> 2] |= r << (((3 - i) % 4) * 8);
                          }
                          for (c[c.length] = (u / o) | 0, c[c.length] = u, r = 0; r < c.length; ) {
                            var m = c.slice(r, (r += 16)),
                              h = l;
                            for (l = l.slice(0, 8), i = 0; i < 64; i++) {
                              var _ = m[i - 15],
                                C = m[i - 2],
                                I = l[0],
                                S = l[4],
                                v =
                                  l[7] +
                                  (n(S, 6) ^ n(S, 11) ^ n(S, 25)) +
                                  ((S & l[5]) ^ (~S & l[6])) +
                                  d[i] +
                                  (m[i] =
                                    i < 16
                                      ? m[i]
                                      : (m[i - 16] +
                                          (n(_, 7) ^ n(_, 18) ^ (_ >>> 3)) +
                                          m[i - 7] +
                                          (n(C, 17) ^ n(C, 19) ^ (C >>> 10))) |
                                        0);
                              (l = [
                                (v +
                                  ((n(I, 2) ^ n(I, 13) ^ n(I, 22)) +
                                    ((I & l[1]) ^ (I & l[2]) ^ (l[1] & l[2])))) |
                                  0,
                              ].concat(l)),
                                (l[4] = (l[4] + v) | 0);
                            }
                            for (i = 0; i < 8; i++) l[i] = (l[i] + h[i]) | 0;
                          }
                          for (i = 0; i < 8; i++)
                            for (r = 3; r + 1; r--) {
                              var D = (l[i] >> (8 * r)) & 255;
                              s += (D < 16 ? 0 : '') + D.toString(16);
                            }
                          return s;
                        },
                        qe = function (e, t) {
                          return (
                            ('SHA-256' !== t &&
                              'SHA256' !== t &&
                              'sha256' !== t &&
                              'sha-256' !== t) ||
                              (e = Ye(e)),
                            e
                          );
                        },
                        We = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        Xe = Be.OptIn;
                      V.defineGlobalNamespace(), (window.adobe.OptInCategories = Xe.Categories);
                      var Ke = function (t, n, i) {
                        function r () {
                          I._customerIDsHashChanged = !1;
                        }
                        function a (e) {
                          var t = e;
                          return function (e) {
                            var n = e || b.location.href;
                            try {
                              var i = I._extractParamFromUri(n, t);
                              if (i) return B.parsePipeDelimetedKeyValues(i);
                            } catch (e) {}
                          };
                        }
                        function o (e) {
                          function t (e, t, n) {
                            e && e.match(ae.VALID_VISITOR_ID_REGEX) && (n === E && (A = !0), t(e));
                          }
                          t(e[E], I.setMarketingCloudVisitorID, E),
                            I._setFieldExpire(F, -1),
                            t(e[R], I.setAnalyticsVisitorID);
                        }
                        function s (e) {
                          (e = e || {}),
                            (I._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                            (I._supplementalDataIDCurrentConsumed =
                              e.supplementalDataIDCurrentConsumed || {}),
                            (I._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                            (I._supplementalDataIDLastConsumed =
                              e.supplementalDataIDLastConsumed || {});
                        }
                        function c (e) {
                          function t (e, t, n) {
                            return (
                              (n = n ? (n += '|') : n), (n += e + '=' + encodeURIComponent(t))
                            );
                          }
                          function n (e, n) {
                            var i = n[0],
                              r = n[1];
                            return null != r && r !== N && (e = t(i, r, e)), e;
                          }
                          var i = e.reduce(n, '');
                          return (function (e) {
                            var t = B.getTimestampInSeconds();
                            return (e = e ? (e += '|') : e), (e += 'TS=' + t);
                          })(i);
                        }
                        function u (e) {
                          var t = e.minutesToLive,
                            n = '';
                          return (
                            (I.idSyncDisableSyncs || I.disableIdSyncs) &&
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
                                    n ||
                                    'Error: config.minutesToLive needs to be a positive number')),
                            { error: n, ttl: t }
                          );
                        }
                        function l () {
                          return !!I.configs.doesOptInApply && !(S.optIn.isComplete && d());
                        }
                        function d () {
                          return I.configs.doesOptInApply && I.configs.isIabContext
                            ? S.optIn.isApproved(S.optIn.Categories.ECID) && y
                            : S.optIn.isApproved(S.optIn.Categories.ECID);
                        }
                        function f () {
                          [
                            ['getMarketingCloudVisitorID'],
                            ['setCustomerIDs', void 0],
                            ['syncIdentity', void 0],
                            ['getAnalyticsVisitorID'],
                            ['getAudienceManagerLocationHint'],
                            ['getLocationHint'],
                            ['getAudienceManagerBlob'],
                          ].forEach(function (e) {
                            var t = e[0],
                              n = 2 === e.length ? e[1] : '',
                              i = I[t];
                            I[t] = function (e) {
                              return d() && I.isAllowed()
                                ? i.apply(I, arguments)
                                : ('function' == typeof e && I._callCallback(e, [n]), n);
                            };
                          });
                        }
                        function p () {
                          var e = I._getAudienceManagerURLData(),
                            t = e.url;
                          return I._loadData(k, t, null, e);
                        }
                        function g (e, t) {
                          if (((y = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t &&
                            t.gdprApplies &&
                            ((v = t.consentString),
                            (D = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            p(),
                            _();
                        }
                        function m (e, t) {
                          if (((y = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies &&
                            ((v = t.consentString),
                            (D = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            I.init(),
                            _();
                        }
                        function h () {
                          S.optIn.isComplete &&
                            (S.optIn.isApproved(S.optIn.Categories.ECID)
                              ? I.configs.isIabContext
                                ? S.optIn.execute({
                                    command: 'iabPlugin.fetchConsentData',
                                    callback: m,
                                  })
                                : (I.init(), _())
                              : I.configs.isIabContext
                              ? S.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: g,
                                })
                              : (f(), _()));
                        }
                        function _ () {
                          S.optIn.off('complete', h);
                        }
                        if (!i || i.split('').reverse().join('') !== t)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var I = this,
                          S = window.adobe,
                          v = '',
                          D = 0,
                          y = !1,
                          A = !1;
                        I.version = '5.0.1';
                        var b = C,
                          O = b.Visitor;
                        (O.version = I.version),
                          (O.AuthState = T.AUTH_STATE),
                          (O.OptOut = T.OPT_OUT),
                          b.s_c_in || ((b.s_c_il = []), (b.s_c_in = 0)),
                          (I._c = 'Visitor'),
                          (I._il = b.s_c_il),
                          (I._in = b.s_c_in),
                          (I._il[I._in] = I),
                          b.s_c_in++,
                          (I._instanceType = 'regular'),
                          (I._log = { requests: [] }),
                          (I.marketingCloudOrgID = t),
                          (I.cookieName = 'AMCV_' + t),
                          (I.sessionCookieName = 'AMCVS_' + t),
                          (I.cookieDomain = Z()),
                          (I.loadSSL = !0),
                          (I.loadTimeout = 30000),
                          (I.CORSErrors = []),
                          (I.marketingCloudServer = I.audienceManagerServer = 'dpm.demdex.net'),
                          (I.sdidParamExpiry = 30);
                        var M = null,
                          k = 'MC',
                          E = 'MCMID',
                          P = 'MCIDTS',
                          L = 'A',
                          R = 'MCAID',
                          w = 'AAM',
                          F = 'MCAAMB',
                          N = 'NONE',
                          x = function (e) {
                            return !Object.prototype[e];
                          },
                          j = re(I);
                        (I.FIELDS = T.FIELDS),
                          (I.cookieRead = function (e) {
                            return $.get(e);
                          }),
                          (I.cookieWrite = function (e, t, n) {
                            var i = I.cookieLifetime ? ('' + I.cookieLifetime).toUpperCase() : '',
                              r = !1;
                            return (
                              I.configs &&
                                I.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (r = !0),
                              $.set(e, '' + t, {
                                expires: n,
                                domain: I.cookieDomain,
                                cookieLifetime: i,
                                secure: r,
                              })
                            );
                          }),
                          (I.resetState = function (e) {
                            e ? I._mergeServerState(e) : s();
                          }),
                          (I._isAllowedDone = !1),
                          (I._isAllowedFlag = !1),
                          (I.isAllowed = function () {
                            return (
                              I._isAllowedDone ||
                                ((I._isAllowedDone = !0),
                                (I.cookieRead(I.cookieName) ||
                                  I.cookieWrite(I.cookieName, 'T', 1)) &&
                                  (I._isAllowedFlag = !0)),
                              'T' === I.cookieRead(I.cookieName) &&
                                I._helpers.removeCookie(I.cookieName),
                              I._isAllowedFlag
                            );
                          }),
                          (I.setMarketingCloudVisitorID = function (e) {
                            I._setMarketingCloudFields(e);
                          }),
                          (I._use1stPartyMarketingCloudServer = !1),
                          (I.getMarketingCloudVisitorID = function (e, t) {
                            I.marketingCloudServer &&
                              I.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                              (I._use1stPartyMarketingCloudServer = !0);
                            var n = I._getAudienceManagerURLData('_setMarketingCloudFields'),
                              i = n.url;
                            return I._getRemoteField(E, i, e, t, n);
                          });
                        var H = function (e, t) {
                          var n = {};
                          I.getMarketingCloudVisitorID(function () {
                            t.forEach(function (e) {
                              n[e] = I._getField(e, !0);
                            }),
                              -1 !== t.indexOf('MCOPTOUT')
                                ? I.isOptedOut(
                                    function (t) {
                                      (n.MCOPTOUT = t), e(n);
                                    },
                                    null,
                                    !0
                                  )
                                : e(n);
                          }, !0);
                        };
                        (I.getVisitorValues = function (e, t) {
                          var n = {
                              MCMID: { fn: I.getMarketingCloudVisitorID, args: [!0], context: I },
                              MCOPTOUT: { fn: I.isOptedOut, args: [void 0, !0], context: I },
                              MCAID: { fn: I.getAnalyticsVisitorID, args: [!0], context: I },
                              MCAAMLH: {
                                fn: I.getAudienceManagerLocationHint,
                                args: [!0],
                                context: I,
                              },
                              MCAAMB: { fn: I.getAudienceManagerBlob, args: [!0], context: I },
                            },
                            i = t && t.length ? V.pluck(n, t) : n;
                          t && -1 === t.indexOf('MCAID') ? H(e, t) : Q(i, e);
                        }),
                          (I._currentCustomerIDs = {}),
                          (I._customerIDsHashChanged = !1),
                          (I._newCustomerIDsHash = ''),
                          (I.setCustomerIDs = function (t, n) {
                            if (!I.isOptedOut() && t) {
                              if (!V.isObject(t) || V.isObjectEmpty(t)) return !1;
                              I._readVisitor();
                              var i, a, o, s;
                              for (i in t)
                                if (
                                  x(i) &&
                                  ((I._currentCustomerIDs.dataSources =
                                    I._currentCustomerIDs.dataSources || {}),
                                  (a = t[i]),
                                  (n = a.hasOwnProperty('hashType') ? a.hashType : n),
                                  a)
                                )
                                  if ('object' === e(a)) {
                                    var c = {};
                                    if (a.id) {
                                      if (n) {
                                        if (!(s = qe(We(a.id), n))) return;
                                        (a.id = s), (c.hashType = n);
                                      }
                                      c.id = a.id;
                                    }
                                    void 0 != a.authState && (c.authState = a.authState),
                                      (I._currentCustomerIDs.dataSources[i] = c);
                                  } else if (n) {
                                    if (!(s = qe(We(a), n))) return;
                                    I._currentCustomerIDs.dataSources[i] = { id: s, hashType: n };
                                  } else I._currentCustomerIDs.dataSources[i] = { id: a };
                              var u = I.getCustomerIDs(!0),
                                l = I._getField('MCCIDH'),
                                d = '';
                              l || (l = 0);
                              for (o in u) {
                                var f = u[o];
                                if (!V.isObjectEmpty(f))
                                  for (i in f)
                                    x(i) &&
                                      ((a = f[i]),
                                      (d +=
                                        (d ? '|' : '') +
                                        i +
                                        '|' +
                                        (a.id ? a.id : '') +
                                        (a.authState ? a.authState : '')));
                              }
                              (I._newCustomerIDsHash = String(I._hash(d))),
                                I._newCustomerIDsHash !== l &&
                                  ((I._customerIDsHashChanged = !0), I._mapCustomerIDs(r));
                            }
                          }),
                          (I.syncIdentity = function (t, n) {
                            if (!I.isOptedOut() && t) {
                              if (!V.isObject(t) || V.isObjectEmpty(t)) return !1;
                              I._readVisitor();
                              var i, a, o, s, c;
                              for (i in t)
                                if (
                                  x(i) &&
                                  ((I._currentCustomerIDs.nameSpaces =
                                    I._currentCustomerIDs.nameSpaces || {}),
                                  (a = t[i]),
                                  (n = a.hasOwnProperty('hashType') ? a.hashType : n),
                                  a && 'object' === e(a))
                                ) {
                                  var u = {};
                                  if (a.id) {
                                    if (n) {
                                      if (!(o = qe(We(a.id), n))) return;
                                      (a.id = o), (u.hashType = n);
                                    }
                                    u.id = a.id;
                                  }
                                  void 0 != a.authState && (u.authState = a.authState),
                                    a.dataSource &&
                                      ((I._currentCustomerIDs.dataSources =
                                        I._currentCustomerIDs.dataSources || {}),
                                      (s = a.dataSource),
                                      (I._currentCustomerIDs.dataSources[s] = u)),
                                    (I._currentCustomerIDs.nameSpaces[i] = u);
                                }
                              var l = I.getCustomerIDs(!0),
                                d = I._getField('MCCIDH'),
                                f = '';
                              d || (d = '0');
                              for (c in l) {
                                var p = l[c];
                                if (!V.isObjectEmpty(p))
                                  for (i in p)
                                    x(i) &&
                                      ((a = p[i]),
                                      (f +=
                                        (f ? '|' : '') +
                                        i +
                                        '|' +
                                        (a.id ? a.id : '') +
                                        (a.authState ? a.authState : '')));
                              }
                              (I._newCustomerIDsHash = String(I._hash(f))),
                                I._newCustomerIDsHash !== d &&
                                  ((I._customerIDsHashChanged = !0), I._mapCustomerIDs(r));
                            }
                          }),
                          (I.getCustomerIDs = function (e) {
                            I._readVisitor();
                            var t,
                              n,
                              i = { dataSources: {}, nameSpaces: {} },
                              r = I._currentCustomerIDs.dataSources;
                            for (t in r)
                              x(t) &&
                                ((n = r[t]),
                                n.id &&
                                  (i.dataSources[t] || (i.dataSources[t] = {}),
                                  (i.dataSources[t].id = n.id),
                                  void 0 != n.authState
                                    ? (i.dataSources[t].authState = n.authState)
                                    : (i.dataSources[t].authState = O.AuthState.UNKNOWN),
                                  n.hashType && (i.dataSources[t].hashType = n.hashType)));
                            var a = I._currentCustomerIDs.nameSpaces;
                            for (t in a)
                              x(t) &&
                                ((n = a[t]),
                                n.id &&
                                  (i.nameSpaces[t] || (i.nameSpaces[t] = {}),
                                  (i.nameSpaces[t].id = n.id),
                                  void 0 != n.authState
                                    ? (i.nameSpaces[t].authState = n.authState)
                                    : (i.nameSpaces[t].authState = O.AuthState.UNKNOWN),
                                  n.hashType && (i.nameSpaces[t].hashType = n.hashType)));
                            return e ? i : i.dataSources;
                          }),
                          (I.setAnalyticsVisitorID = function (e) {
                            I._setAnalyticsFields(e);
                          }),
                          (I.getAnalyticsVisitorID = function (e, t, n) {
                            if (!B.isTrackingServerPopulated() && !n)
                              return I._callCallback(e, ['']), '';
                            var i = '';
                            if (
                              (n ||
                                (i = I.getMarketingCloudVisitorID(function (t) {
                                  I.getAnalyticsVisitorID(e, !0);
                                })),
                              i || n)
                            ) {
                              var r = n ? I.marketingCloudServer : I.trackingServer,
                                a = '';
                              I.loadSSL &&
                                (n
                                  ? I.marketingCloudServerSecure &&
                                    (r = I.marketingCloudServerSecure)
                                  : I.trackingServerSecure && (r = I.trackingServerSecure));
                              var o = {};
                              if (r) {
                                var s = 'http' + (I.loadSSL ? 's' : '') + '://' + r + '/id',
                                  c =
                                    'd_visid_ver=' +
                                    I.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(I.marketingCloudOrgID) +
                                    (i ? '&mid=' + encodeURIComponent(i) : '') +
                                    (I.idSyncDisable3rdPartySyncing || I.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  u = [
                                    's_c_il',
                                    I._in,
                                    '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (a =
                                  s +
                                  '?' +
                                  c +
                                  '&callback=s_c_il%5B' +
                                  I._in +
                                  '%5D._set' +
                                  (n ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (o.corsUrl = s + '?' + c),
                                  (o.callback = u);
                              }
                              return (o.url = a), I._getRemoteField(n ? E : R, a, e, t, o);
                            }
                            return '';
                          }),
                          (I.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              I.getMarketingCloudVisitorID(function (t) {
                                I.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var n = I._getField(R);
                              if (
                                (!n &&
                                  B.isTrackingServerPopulated() &&
                                  (n = I.getAnalyticsVisitorID(function (t) {
                                    I.getAudienceManagerLocationHint(e, !0);
                                  })),
                                n || !B.isTrackingServerPopulated())
                              ) {
                                var i = I._getAudienceManagerURLData(),
                                  r = i.url;
                                return I._getRemoteField('MCAAMLH', r, e, t, i);
                              }
                            }
                            return '';
                          }),
                          (I.getLocationHint = I.getAudienceManagerLocationHint),
                          (I.getAudienceManagerBlob = function (e, t) {
                            if (
                              I.getMarketingCloudVisitorID(function (t) {
                                I.getAudienceManagerBlob(e, !0);
                              })
                            ) {
                              var n = I._getField(R);
                              if (
                                (!n &&
                                  B.isTrackingServerPopulated() &&
                                  (n = I.getAnalyticsVisitorID(function (t) {
                                    I.getAudienceManagerBlob(e, !0);
                                  })),
                                n || !B.isTrackingServerPopulated())
                              ) {
                                var i = I._getAudienceManagerURLData(),
                                  r = i.url;
                                return (
                                  I._customerIDsHashChanged && I._setFieldExpire(F, -1),
                                  I._getRemoteField(F, r, e, t, i)
                                );
                              }
                            }
                            return '';
                          }),
                          (I._supplementalDataIDCurrent = ''),
                          (I._supplementalDataIDCurrentConsumed = {}),
                          (I._supplementalDataIDLast = ''),
                          (I._supplementalDataIDLastConsumed = {}),
                          (I.getSupplementalDataID = function (e, t) {
                            I._supplementalDataIDCurrent ||
                              t ||
                              (I._supplementalDataIDCurrent = I._generateID(1));
                            var n = I._supplementalDataIDCurrent;
                            return (
                              I._supplementalDataIDLast && !I._supplementalDataIDLastConsumed[e]
                                ? ((n = I._supplementalDataIDLast),
                                  (I._supplementalDataIDLastConsumed[e] = !0))
                                : n &&
                                  (I._supplementalDataIDCurrentConsumed[e] &&
                                    ((I._supplementalDataIDLast = I._supplementalDataIDCurrent),
                                    (I._supplementalDataIDLastConsumed =
                                      I._supplementalDataIDCurrentConsumed),
                                    (I._supplementalDataIDCurrent = n = t ? '' : I._generateID(1)),
                                    (I._supplementalDataIDCurrentConsumed = {})),
                                  n && (I._supplementalDataIDCurrentConsumed[e] = !0)),
                              n
                            );
                          });
                        var U = !1;
                        (I._liberatedOptOut = null),
                          (I.getOptOut = function (e, t) {
                            var n = I._getAudienceManagerURLData('_setMarketingCloudFields'),
                              i = n.url;
                            if (d()) return I._getRemoteField('MCOPTOUT', i, e, t, n);
                            if (
                              (I._registerCallback('liberatedOptOut', e),
                              null !== I._liberatedOptOut)
                            )
                              return (
                                I._callAllCallbacks('liberatedOptOut', [I._liberatedOptOut]),
                                (U = !1),
                                I._liberatedOptOut
                              );
                            if (U) return null;
                            U = !0;
                            var r = 'liberatedGetOptOut';
                            return (
                              (n.corsUrl = n.corsUrl.replace(
                                /\.demdex\.net\/id\?/,
                                '.demdex.net/optOutStatus?'
                              )),
                              (n.callback = [r]),
                              (C[r] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    n,
                                    i = V.parseOptOut(e, t, N);
                                  (t = i.optOut),
                                    (n = 1000 * i.d_ottl),
                                    (I._liberatedOptOut = t),
                                    setTimeout(function () {
                                      I._liberatedOptOut = null;
                                    }, n);
                                }
                                I._callAllCallbacks('liberatedOptOut', [t]), (U = !1);
                              }),
                              j.fireCORS(n),
                              null
                            );
                          }),
                          (I.isOptedOut = function (e, t, n) {
                            t || (t = O.OptOut.GLOBAL);
                            var i = I.getOptOut(function (n) {
                              var i = n === O.OptOut.GLOBAL || n.indexOf(t) >= 0;
                              I._callCallback(e, [i]);
                            }, n);
                            return i ? i === O.OptOut.GLOBAL || i.indexOf(t) >= 0 : null;
                          }),
                          (I._fields = null),
                          (I._fieldsExpired = null),
                          (I._hash = function (e) {
                            var t,
                              n,
                              i = 0;
                            if (e)
                              for (t = 0; t < e.length; t++)
                                (n = e.charCodeAt(t)), (i = (i << 5) - i + n), (i &= i);
                            return i;
                          }),
                          (I._generateID = ie),
                          (I._generateLocalMID = function () {
                            var e = I._generateID(0);
                            return (q.isClientSideMarketingCloudVisitorID = !0), e;
                          }),
                          (I._callbackList = null),
                          (I._callCallback = function (e, t) {
                            try {
                              'function' == typeof e ? e.apply(b, t) : e[1].apply(e[0], t);
                            } catch (e) {}
                          }),
                          (I._registerCallback = function (e, t) {
                            t &&
                              (null == I._callbackList && (I._callbackList = {}),
                              void 0 == I._callbackList[e] && (I._callbackList[e] = []),
                              I._callbackList[e].push(t));
                          }),
                          (I._callAllCallbacks = function (e, t) {
                            if (null != I._callbackList) {
                              var n = I._callbackList[e];
                              if (n) for (; n.length > 0; ) I._callCallback(n.shift(), t);
                            }
                          }),
                          (I._addQuerystringParam = function (e, t, n, i) {
                            var r = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                              a = B.parseHash(e),
                              o = B.hashlessUrl(e);
                            if (-1 === o.indexOf('?')) return o + '?' + r + a;
                            var s = o.split('?'),
                              c = s[0] + '?',
                              u = s[1];
                            return c + B.addQueryParamAtLocation(u, r, i) + a;
                          }),
                          (I._extractParamFromUri = function (e, t) {
                            var n = new RegExp('[\\?&#]' + t + '=([^&#]*)'),
                              i = n.exec(e);
                            if (i && i.length) return decodeURIComponent(i[1]);
                          }),
                          (I._parseAdobeMcFromUrl = a(ae.ADOBE_MC)),
                          (I._parseAdobeMcSdidFromUrl = a(ae.ADOBE_MC_SDID)),
                          (I._attemptToPopulateSdidFromUrl = function (e) {
                            var n = I._parseAdobeMcSdidFromUrl(e),
                              i = 1000000000;
                            n && n.TS && (i = B.getTimestampInSeconds() - n.TS),
                              n &&
                                n.SDID &&
                                n.MCORGID === t &&
                                i < I.sdidParamExpiry &&
                                ((I._supplementalDataIDCurrent = n.SDID),
                                (I._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (I._attemptToPopulateIdsFromUrl = function () {
                            var e = I._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var n = B.getTimestampInSeconds(),
                                i = n - e.TS;
                              if (Math.floor(i / 60) > ae.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== t)
                                return;
                              o(e);
                            }
                          }),
                          (I._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((e = (function (e) {
                                    return B.isObject(e) ? e : JSON.parse(e);
                                  })(e)),
                                  e[I.marketingCloudOrgID])
                                ) {
                                  var t = e[I.marketingCloudOrgID];
                                  !(function (e) {
                                    B.isObject(e) && I.setCustomerIDs(e);
                                  })(t.customerIDs),
                                    s(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                          }),
                          (I._timeout = null),
                          (I._loadData = function (e, t, n, i) {
                            (t = I._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (i.url = I._addQuerystringParam(i.url, 'd_fieldgroup', e, 1)),
                              (i.corsUrl = I._addQuerystringParam(
                                i.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (q.fieldGroupObj[e] = !0),
                              i === Object(i) &&
                                i.corsUrl &&
                                'XMLHttpRequest' === j.corsMetadata.corsType &&
                                j.fireCORS(i, n, e);
                          }),
                          (I._clearTimeout = function (e) {
                            null != I._timeout &&
                              I._timeout[e] &&
                              (clearTimeout(I._timeout[e]), (I._timeout[e] = 0));
                          }),
                          (I._settingsDigest = 0),
                          (I._getSettingsDigest = function () {
                            if (!I._settingsDigest) {
                              var e = I.version;
                              I.audienceManagerServer && (e += '|' + I.audienceManagerServer),
                                I.audienceManagerServerSecure &&
                                  (e += '|' + I.audienceManagerServerSecure),
                                (I._settingsDigest = I._hash(e));
                            }
                            return I._settingsDigest;
                          }),
                          (I._readVisitorDone = !1),
                          (I._readVisitor = function () {
                            if (!I._readVisitorDone) {
                              I._readVisitorDone = !0;
                              var e,
                                t,
                                n,
                                i,
                                r,
                                a,
                                o = I._getSettingsDigest(),
                                s = !1,
                                c = I.cookieRead(I.cookieName),
                                u = new Date();
                              if (
                                (c ||
                                  A ||
                                  I.discardTrackingServerECID ||
                                  (c = I.cookieRead(ae.FIRST_PARTY_SERVER_COOKIE)),
                                null == I._fields && (I._fields = {}),
                                c && 'T' !== c)
                              )
                                for (
                                  c = c.split('|'),
                                    c[0].match(/^[\-0-9]+$/) &&
                                      (parseInt(c[0], 10) !== o && (s = !0), c.shift()),
                                    c.length % 2 == 1 && c.pop(),
                                    e = 0;
                                  e < c.length;
                                  e += 2
                                )
                                  (t = c[e].split('-')),
                                    (n = t[0]),
                                    (i = c[e + 1]),
                                    t.length > 1
                                      ? ((r = parseInt(t[1], 10)), (a = t[1].indexOf('s') > 0))
                                      : ((r = 0), (a = !1)),
                                    s &&
                                      ('MCCIDH' === n && (i = ''),
                                      r > 0 && (r = u.getTime() / 1000 - 60)),
                                    n &&
                                      i &&
                                      (I._setField(n, i, 1),
                                      r > 0 &&
                                        ((I._fields['expire' + n] = r + (a ? 's' : '')),
                                        (u.getTime() >= 1000 * r ||
                                          (a && !I.cookieRead(I.sessionCookieName))) &&
                                          (I._fieldsExpired || (I._fieldsExpired = {}),
                                          (I._fieldsExpired[n] = !0))));
                              !I._getField(R) &&
                                B.isTrackingServerPopulated() &&
                                (c = I.cookieRead('s_vi')) &&
                                ((c = c.split('|')),
                                c.length > 1 &&
                                  c[0].indexOf('v1') >= 0 &&
                                  ((i = c[1]),
                                  (e = i.indexOf('[')),
                                  e >= 0 && (i = i.substring(0, e)),
                                  i && i.match(ae.VALID_VISITOR_ID_REGEX) && I._setField(R, i)));
                            }
                          }),
                          (I._appendVersionTo = function (e) {
                            var t = 'vVersion|' + I.version,
                              n = e ? I._getCookieVersion(e) : null;
                            return (
                              n
                                ? ee.areVersionsDifferent(n, I.version) &&
                                  (e = e.replace(ae.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (I._writeVisitor = function () {
                            var e,
                              t,
                              n = I._getSettingsDigest();
                            for (e in I._fields)
                              x(e) &&
                                I._fields[e] &&
                                'expire' !== e.substring(0, 6) &&
                                ((t = I._fields[e]),
                                (n +=
                                  (n ? '|' : '') +
                                  e +
                                  (I._fields['expire' + e] ? '-' + I._fields['expire' + e] : '') +
                                  '|' +
                                  t));
                            (n = I._appendVersionTo(n)), I.cookieWrite(I.cookieName, n, 1);
                          }),
                          (I._getField = function (e, t) {
                            return null == I._fields ||
                              (!t && I._fieldsExpired && I._fieldsExpired[e])
                              ? null
                              : I._fields[e];
                          }),
                          (I._setField = function (e, t, n) {
                            null == I._fields && (I._fields = {}),
                              (I._fields[e] = t),
                              n || I._writeVisitor();
                          }),
                          (I._getFieldList = function (e, t) {
                            var n = I._getField(e, t);
                            return n ? n.split('*') : null;
                          }),
                          (I._setFieldList = function (e, t, n) {
                            I._setField(e, t ? t.join('*') : '', n);
                          }),
                          (I._getFieldMap = function (e, t) {
                            var n = I._getFieldList(e, t);
                            if (n) {
                              var i,
                                r = {};
                              for (i = 0; i < n.length; i += 2) r[n[i]] = n[i + 1];
                              return r;
                            }
                            return null;
                          }),
                          (I._setFieldMap = function (e, t, n) {
                            var i,
                              r = null;
                            if (t) {
                              r = [];
                              for (i in t) x(i) && (r.push(i), r.push(t[i]));
                            }
                            I._setFieldList(e, r, n);
                          }),
                          (I._setFieldExpire = function (e, t, n) {
                            var i = new Date();
                            i.setTime(i.getTime() + 1000 * t),
                              null == I._fields && (I._fields = {}),
                              (I._fields['expire' + e] =
                                Math.floor(i.getTime() / 1000) + (n ? 's' : '')),
                              t < 0
                                ? (I._fieldsExpired || (I._fieldsExpired = {}),
                                  (I._fieldsExpired[e] = !0))
                                : I._fieldsExpired && (I._fieldsExpired[e] = !1),
                              n &&
                                (I.cookieRead(I.sessionCookieName) ||
                                  I.cookieWrite(I.sessionCookieName, '1'));
                          }),
                          (I._findVisitorID = function (t) {
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
                                t && 'NOTARGET' === (t = t.toUpperCase()) && (t = N),
                                (t && (t === N || t.match(ae.VALID_VISITOR_ID_REGEX))) ||
                                  (t = '')),
                              t
                            );
                          }),
                          (I._setFields = function (t, n) {
                            if (
                              (I._clearTimeout(t),
                              null != I._loading && (I._loading[t] = !1),
                              q.fieldGroupObj[t] && q.setState(t, !1),
                              t === k)
                            ) {
                              !0 !== q.isClientSideMarketingCloudVisitorID &&
                                (q.isClientSideMarketingCloudVisitorID = !1);
                              var i = I._getField(E);
                              if (!i || I.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(i = 'object' === e(n) && n.mid ? n.mid : I._findVisitorID(n))
                                ) {
                                  if (
                                    I._use1stPartyMarketingCloudServer &&
                                    !I.tried1stPartyMarketingCloudServer
                                  )
                                    return (
                                      (I.tried1stPartyMarketingCloudServer = !0),
                                      void I.getAnalyticsVisitorID(null, !1, !0)
                                    );
                                  i = I._generateLocalMID();
                                }
                                I._setField(E, i);
                              }
                              (i && i !== N) || (i = ''),
                                'object' === e(n) &&
                                  ((n.d_region || n.dcs_region || n.d_blob || n.blob) &&
                                    I._setFields(w, n),
                                  I._use1stPartyMarketingCloudServer &&
                                    n.mid &&
                                    I._setFields(L, { id: n.id })),
                                I._callAllCallbacks(E, [i]);
                            }
                            if (t === w && 'object' === e(n)) {
                              var r = 604800;
                              void 0 != n.id_sync_ttl &&
                                n.id_sync_ttl &&
                                (r = parseInt(n.id_sync_ttl, 10));
                              var a = Y.getRegionAndCheckIfChanged(n, r);
                              I._callAllCallbacks('MCAAMLH', [a]);
                              var o = I._getField(F);
                              (n.d_blob || n.blob) &&
                                ((o = n.d_blob),
                                o || (o = n.blob),
                                I._setFieldExpire(F, r),
                                I._setField(F, o)),
                                o || (o = ''),
                                I._callAllCallbacks(F, [o]),
                                !n.error_msg &&
                                  I._newCustomerIDsHash &&
                                  I._setField('MCCIDH', I._newCustomerIDsHash);
                            }
                            if (t === L) {
                              var s = I._getField(R);
                              (s && !I.overwriteCrossDomainMCIDAndAID) ||
                                ((s = I._findVisitorID(n)),
                                s ? s !== N && I._setFieldExpire(F, -1) : (s = N),
                                I._setField(R, s)),
                                (s && s !== N) || (s = ''),
                                I._callAllCallbacks(R, [s]);
                            }
                            if (I.idSyncDisableSyncs || I.disableIdSyncs)
                              Y.idCallNotProcesssed = !0;
                            else {
                              Y.idCallNotProcesssed = !1;
                              var c = {};
                              (c.ibs = n.ibs), (c.subdomain = n.subdomain), Y.processIDCallData(c);
                            }
                            if (n === Object(n)) {
                              var u, l;
                              d() && I.isAllowed() && (u = I._getField('MCOPTOUT'));
                              var f = V.parseOptOut(n, u, N);
                              (u = f.optOut),
                                (l = f.d_ottl),
                                I._setFieldExpire('MCOPTOUT', l, !0),
                                I._setField('MCOPTOUT', u),
                                I._callAllCallbacks('MCOPTOUT', [u]);
                            }
                          }),
                          (I._loading = null),
                          (I._getRemoteField = function (e, t, n, i, r) {
                            var a,
                              o = '',
                              s = B.isFirstPartyAnalyticsVisitorIDCall(e),
                              c = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && I.isAllowed()) {
                              I._readVisitor(), (o = I._getField(e, !0 === c[e]));
                              if (
                                (function () {
                                  return (
                                    (!o || (I._fieldsExpired && I._fieldsExpired[e])) &&
                                    (!I.disableThirdPartyCalls || s)
                                  );
                                })()
                              ) {
                                if (
                                  (e === E || 'MCOPTOUT' === e
                                    ? (a = k)
                                    : 'MCAAMLH' === e || e === F
                                    ? (a = w)
                                    : e === R && (a = L),
                                  a)
                                )
                                  return (
                                    !t ||
                                      (null != I._loading && I._loading[a]) ||
                                      (null == I._loading && (I._loading = {}),
                                      (I._loading[a] = !0),
                                      a === w && (D = 0),
                                      I._loadData(
                                        a,
                                        t,
                                        function (t) {
                                          if (!I._getField(e)) {
                                            t && q.setState(a, !0);
                                            var n = '';
                                            e === E
                                              ? (n = I._generateLocalMID())
                                              : a === w && (n = { error_msg: 'timeout' }),
                                              I._setFields(a, n);
                                          }
                                        },
                                        r
                                      )),
                                    I._registerCallback(e, n),
                                    o || (t || I._setFields(a, { id: N }), '')
                                  );
                              } else
                                o ||
                                  (e === E
                                    ? (I._registerCallback(e, n),
                                      (o = I._generateLocalMID()),
                                      I.setMarketingCloudVisitorID(o))
                                    : e === R
                                    ? (I._registerCallback(e, n),
                                      (o = ''),
                                      I.setAnalyticsVisitorID(o))
                                    : ((o = ''), (i = !0)));
                            }
                            return (
                              (e !== E && e !== R) || o !== N || ((o = ''), (i = !0)),
                              n && i && I._callCallback(n, [o]),
                              o
                            );
                          }),
                          (I._setMarketingCloudFields = function (e) {
                            I._readVisitor(), I._setFields(k, e);
                          }),
                          (I._mapCustomerIDs = function (e) {
                            I.getAudienceManagerBlob(e, !0);
                          }),
                          (I._setAnalyticsFields = function (e) {
                            I._readVisitor(), I._setFields(L, e);
                          }),
                          (I._setAudienceManagerFields = function (e) {
                            I._readVisitor(), I._setFields(w, e);
                          }),
                          (I._getAudienceManagerURLData = function (e) {
                            var t = I.audienceManagerServer,
                              n = '',
                              i = I._getField(E),
                              r = I._getField(F, !0),
                              a = I._getField(R),
                              o = a && a !== N ? '&d_cid_ic=AVID%01' + encodeURIComponent(a) : '';
                            if (
                              (I.loadSSL &&
                                I.audienceManagerServerSecure &&
                                (t = I.audienceManagerServerSecure),
                              t)
                            ) {
                              var s,
                                c,
                                u,
                                l = I.getCustomerIDs(!0);
                              if (l)
                                for (c in l) {
                                  var d = l[c];
                                  if (!V.isObjectEmpty(d)) {
                                    var f = 'nameSpaces' === c ? '&d_cid_ns=' : '&d_cid_ic=';
                                    for (s in d)
                                      x(s) &&
                                        ((u = d[s]),
                                        (o +=
                                          f +
                                          encodeURIComponent(s) +
                                          '%01' +
                                          encodeURIComponent(u.id ? u.id : '') +
                                          (u.authState ? '%01' + u.authState : '')));
                                  }
                                }
                              e || (e = '_setAudienceManagerFields');
                              var p = 'http' + (I.loadSSL ? 's' : '') + '://' + t + '/id',
                                g =
                                  'd_visid_ver=' +
                                  I.version +
                                  (v && -1 !== p.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_consent=' + v
                                    : '') +
                                  (D && -1 !== p.indexOf('demdex.net') ? '&d_cf=' + D : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!i && I._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(I.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (I.idSyncContainerID || 0) +
                                  (i ? '&d_mid=' + encodeURIComponent(i) : '') +
                                  (I.idSyncDisable3rdPartySyncing || I.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === M
                                    ? '&d_coop_safe=1'
                                    : !1 === M
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                                  o,
                                m = ['s_c_il', I._in, e];
                              return (
                                (n = p + '?' + g + '&d_cb=s_c_il%5B' + I._in + '%5D.' + e),
                                { url: n, corsUrl: p + '?' + g, callback: m }
                              );
                            }
                            return { url: n };
                          }),
                          (I.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [E, I._getField(E)],
                                [R, I._getField(R)],
                                ['MCORGID', I.marketingCloudOrgID],
                              ];
                              return I._addQuerystringParam(e, ae.ADOBE_MC, c(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (I.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || I.getSupplementalDataID(B.generateRandomString(), !0)))
                              return e;
                            try {
                              var n = c([
                                ['SDID', t],
                                ['MCORGID', I.marketingCloudOrgID],
                              ]);
                              return I._addQuerystringParam(e, ae.ADOBE_MC_SDID, n);
                            } catch (t) {
                              return e;
                            }
                          });
                        var B = {
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
                            if (e !== R) return !1;
                            var i;
                            return (
                              t || (t = I.trackingServer),
                              n || (n = I.trackingServerSecure),
                              !('string' != typeof (i = I.loadSSL ? n : t) || !i.length) &&
                                i.indexOf('2o7.net') < 0 &&
                                i.indexOf('omtrdc.net') < 0
                            );
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            $.remove(e, { domain: I.cookieDomain });
                          },
                          isTrackingServerPopulated: function () {
                            return !!I.trackingServer || !!I.trackingServerSecure;
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
                        I._helpers = B;
                        var Y = oe(I, O);
                        (I._destinationPublishing = Y), (I.timeoutMetricsLog = []);
                        var q = {
                          isClientSideMarketingCloudVisitorID: null,
                          MCIDCallTimedOut: null,
                          AnalyticsIDCallTimedOut: null,
                          AAMIDCallTimedOut: null,
                          fieldGroupObj: {},
                          setState: function (e, t) {
                            switch (e) {
                              case k:
                                !1 === t
                                  ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1)
                                  : (this.MCIDCallTimedOut = t);
                                break;
                              case L:
                                !1 === t
                                  ? !0 !== this.AnalyticsIDCallTimedOut &&
                                    (this.AnalyticsIDCallTimedOut = !1)
                                  : (this.AnalyticsIDCallTimedOut = t);
                                break;
                              case w:
                                !1 === t
                                  ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1)
                                  : (this.AAMIDCallTimedOut = t);
                            }
                          },
                        };
                        (I.isClientSideMarketingCloudVisitorID = function () {
                          return q.isClientSideMarketingCloudVisitorID;
                        }),
                          (I.MCIDCallTimedOut = function () {
                            return q.MCIDCallTimedOut;
                          }),
                          (I.AnalyticsIDCallTimedOut = function () {
                            return q.AnalyticsIDCallTimedOut;
                          }),
                          (I.AAMIDCallTimedOut = function () {
                            return q.AAMIDCallTimedOut;
                          }),
                          (I.idSyncGetOnPageSyncInfo = function () {
                            return I._readVisitor(), I._getField('MCSYNCSOP');
                          }),
                          (I.idSyncByURL = function (e) {
                            if (!I.isOptedOut()) {
                              var t = u(e || {});
                              if (t.error) return t.error;
                              var n,
                                i,
                                r = e.url,
                                a = encodeURIComponent,
                                o = Y;
                              return (
                                (r = r.replace(/^https:/, '').replace(/^http:/, '')),
                                (n = V.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (i = ['ibs', a(e.dpid), 'img', a(r), t.ttl, '', n]),
                                o.addMessage(i.join('|')),
                                o.requestToProcess(),
                                'Successfully queued'
                              );
                            }
                          }),
                          (I.idSyncByDataSource = function (e) {
                            if (!I.isOptedOut())
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  I.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                          }),
                          Ge(I, Y),
                          (I._getCookieVersion = function (e) {
                            e = e || I.cookieRead(I.cookieName);
                            var t = ae.VERSION_REGEX.exec(e);
                            return t && t.length > 1 ? t[1] : null;
                          }),
                          (I._resetAmcvCookie = function (e) {
                            var t = I._getCookieVersion();
                            (t && !ee.isLessThan(t, e)) || B.removeCookie(I.cookieName);
                          }),
                          (I.setAsCoopSafe = function () {
                            M = !0;
                          }),
                          (I.setAsCoopUnsafe = function () {
                            M = !1;
                          }),
                          (function () {
                            if (((I.configs = Object.create(null)), B.isObject(n)))
                              for (var e in n) x(e) && ((I[e] = n[e]), (I.configs[e] = n[e]));
                          })(),
                          f();
                        var W;
                        I.init = function () {
                          (l() &&
                            (S.optIn.fetchPermissions(h, !0),
                            !S.optIn.isApproved(S.optIn.Categories.ECID))) ||
                            W ||
                            ((W = !0),
                            (function () {
                              if (B.isObject(n)) {
                                (I.idSyncContainerID = I.idSyncContainerID || 0),
                                  (M =
                                    'boolean' == typeof I.isCoopSafe
                                      ? I.isCoopSafe
                                      : B.parseBoolean(I.isCoopSafe)),
                                  I.resetBeforeVersion && I._resetAmcvCookie(I.resetBeforeVersion),
                                  I._attemptToPopulateIdsFromUrl(),
                                  I._attemptToPopulateSdidFromUrl(),
                                  I._readVisitor();
                                var e = I._getField(P),
                                  t = Math.ceil(new Date().getTime() / ae.MILLIS_PER_DAY);
                                I.idSyncDisableSyncs ||
                                  I.disableIdSyncs ||
                                  !Y.canMakeSyncIDCall(e, t) ||
                                  (I._setFieldExpire(F, -1), I._setField(P, t)),
                                  I.getMarketingCloudVisitorID(),
                                  I.getAudienceManagerLocationHint(),
                                  I.getAudienceManagerBlob(),
                                  I._mergeServerState(I.serverState);
                              } else
                                I._attemptToPopulateIdsFromUrl(),
                                  I._attemptToPopulateSdidFromUrl();
                            })(),
                            (function () {
                              if (!I.idSyncDisableSyncs && !I.disableIdSyncs) {
                                Y.checkDPIframeSrc();
                                var e = function () {
                                  var e = Y;
                                  e.readyToAttachIframe() && e.attachIframe();
                                };
                                b.addEventListener('load', function () {
                                  (O.windowLoaded = !0), e();
                                });
                                try {
                                  ne.receiveMessage(function (e) {
                                    Y.receiveMessage(e.data);
                                  }, Y.iframeHost);
                                } catch (e) {}
                              }
                            })(),
                            (function () {
                              I.whitelistIframeDomains &&
                                ae.POST_MESSAGE_ENABLED &&
                                ((I.whitelistIframeDomains =
                                  I.whitelistIframeDomains instanceof Array
                                    ? I.whitelistIframeDomains
                                    : [I.whitelistIframeDomains]),
                                I.whitelistIframeDomains.forEach(function (e) {
                                  var n = new G(t, e),
                                    i = z(I, n);
                                  ne.receiveMessage(i, e);
                                }));
                            })());
                        };
                      };
                      (Ke.config = ce), (C.Visitor = Ke);
                      var Je = Ke,
                        ze = function (e) {
                          if (V.isObject(e))
                            return Object.keys(e)
                              .filter(function (t) {
                                return '' !== e[t];
                              })
                              .reduce(function (t, n) {
                                var i = ce.normalizeConfig(e[n]),
                                  r = V.normalizeBoolean(i);
                                return (t[n] = r), t;
                              }, Object.create(null));
                        },
                        Qe = Be.OptIn,
                        $e = Be.IabPlugin;
                      return (
                        (Je.getInstance = function (e, t) {
                          if (!e)
                            throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                          e.indexOf('@') < 0 && (e += '@AdobeOrg');
                          var n = (function () {
                            var t = C.s_c_il;
                            if (t)
                              for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                if (i && 'Visitor' === i._c && i.marketingCloudOrgID === e)
                                  return i;
                              }
                          })();
                          if (n) return n;
                          var i = ze(t);
                          !(function (e) {
                            C.adobe.optIn =
                              C.adobe.optIn ||
                              (function () {
                                var t = V.pluck(e, [
                                    'doesOptInApply',
                                    'previousPermissions',
                                    'preOptInApprovals',
                                    'isOptInStorageEnabled',
                                    'optInStorageExpiry',
                                    'isIabContext',
                                  ]),
                                  n = e.optInCookieDomain || e.cookieDomain;
                                (n = n || Z()),
                                  (n = n === window.location.hostname ? '' : n),
                                  (t.optInCookieDomain = n);
                                var i = new Qe(t, { cookies: $ });
                                if (t.isIabContext && t.doesOptInApply) {
                                  var r = new $e();
                                  i.registerPlugin(r);
                                }
                                return i;
                              })();
                          })(i || {});
                          var r = e,
                            a = r.split('').reverse().join(''),
                            o = new Je(e, null, a);
                          V.isObject(i) && i.cookieDomain && (o.cookieDomain = i.cookieDomain),
                            (function () {
                              C.s_c_il.splice(--C.s_c_in, 1);
                            })();
                          var s = V.getIeVersion();
                          if ('number' == typeof s && s < 10)
                            return o._helpers.replaceMethodsWithFunction(o, function () {});
                          var c =
                            (function () {
                              try {
                                return C.self !== C.parent;
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
                            C.parent
                              ? new q(e, i, o, C.parent)
                              : new Je(e, i, a);
                          return (o = null), c.init(), c;
                        }),
                        (function () {
                          function e () {
                            Je.windowLoaded = !0;
                          }
                          C.addEventListener
                            ? C.addEventListener('load', e)
                            : C.attachEvent && C.attachEvent('onload', e),
                            (Je.codeLoadEnd = new Date().getTime());
                        })(),
                        Je
                      );
                    })();
                    return Visitor;
                  })();
                },
              },
              'adobe-mcid/src/view/utils/timeUnits.js': {
                script: function (module, exports, require, turbine) {
                  var timeUnits = {
                    Hours: 3600,
                    Days: 24 * 3600,
                    Weeks: 7 * 24 * 3600,
                    Months: 30 * 24 * 3600,
                    Years: 365 * 24 * 3600,
                  };
                  module.exports = timeUnits;
                },
              },
            },
            settings: {
              orgId: '5C0A123F5245AEEA0A490D45@AdobeOrg',
              variables: [
                { name: 'cookieDomain', value: '%cookieDomain%' },
                { name: 'trackingServer', value: 'metrics.webex.com' },
                { name: 'trackingServerSecure', value: 'smetrics.webex.com' },
              ],
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP6437fa78ab024946a211397689052381/',
          },
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
              'adobe-analytics/src/lib/actions/setVariables.js': {
                name: 'set-variables',
                displayName: 'Set Variables',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var getTracker = require('../sharedModules/getTracker');
                  var applyTrackerVariables = require('../helpers/applyTrackerVariables');
                  module.exports = function (settings, event) {
                    return getTracker().then(
                      function (tracker) {
                        turbine.logger.info('Set variables on the tracker.');
                        applyTrackerVariables(tracker, settings.trackerProperties);
                        if (settings.customSetup && settings.customSetup.source) {
                          settings.customSetup.source.call(event.element, event, tracker);
                        }
                      },
                      function (errorMessage) {
                        turbine.logger.error('Cannot set variables: ' + errorMessage);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var getTracker = require('../sharedModules/getTracker');
                  var isLink = function (element) {
                    return element && element.nodeName && element.nodeName.toLowerCase() === 'a';
                  };
                  var getLinkName = function (element) {
                    if (isLink(element)) {
                      return element.innerHTML;
                    } else {
                      return 'link clicked';
                    }
                  };
                  var sendBeacon = function (tracker, settings, targetElement) {
                    if (settings.type === 'page') {
                      turbine.logger.info('Firing page view beacon.');
                      tracker.t();
                    } else {
                      var linkSettings = {
                        linkType: settings.linkType || 'o',
                        linkName: settings.linkName || getLinkName(targetElement),
                      };
                      turbine.logger.info(
                        'Firing link track beacon using the values: ' +
                          JSON.stringify(linkSettings) +
                          '.'
                      );
                      tracker.tl(
                        isLink(targetElement) ? targetElement : 'true',
                        linkSettings.linkType,
                        linkSettings.linkName
                      );
                    }
                  };
                  module.exports = function (settings, event) {
                    return getTracker().then(
                      function (tracker) {
                        sendBeacon(tracker, settings, event.element);
                      },
                      function (errorMessage) {
                        turbine.logger.error('Cannot send beacon: ' + errorMessage);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/clearVariables.js': {
                name: 'clear-variables',
                displayName: 'Clear Variables',
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var getTracker = require('../sharedModules/getTracker');
                  module.exports = function () {
                    return getTracker().then(
                      function (tracker) {
                        if (tracker.clearVars) {
                          turbine.logger.info('Clear variables.');
                          tracker.clearVars();
                        }
                      },
                      function (errorMessage) {
                        turbine.logger.error('Cannot clear variables: ' + errorMessage);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var cookie = require('@adobe/reactor-cookie');
                  var Promise = require('@adobe/reactor-promise');
                  var window = require('@adobe/reactor-window');
                  var settingsHelper = require('../helpers/settingsHelper');
                  var augmenters = require('../helpers/augmenters');
                  var applyTrackerVariables = require('../helpers/applyTrackerVariables');
                  var loadLibrary = require('../helpers/loadLibrary');
                  var generateVersion = require('../helpers/generateVersion');
                  var version = generateVersion(turbine.buildInfo.turbineBuildDate);
                  var BEFORE_SETTINGS_LOAD_PHASE = 'beforeSettings';
                  var mcidInstance = turbine.getSharedModule('adobe-mcid', 'mcid-instance');
                  var checkEuCompliance = function (trackingCoookieName) {
                    if (!trackingCoookieName) {
                      return true;
                    }
                    var euCookieValue = cookie.get(trackingCoookieName);
                    return euCookieValue === 'true';
                  };
                  var augmentTracker = function (tracker) {
                    return Promise.all(
                      augmenters.map(function (augmenterFn) {
                        var result;
                        try {
                          result = augmenterFn(tracker);
                        } catch (e) {
                          setTimeout(function () {
                            throw e;
                          });
                        }
                        return Promise.resolve(result);
                      })
                    ).then(function () {
                      return tracker;
                    });
                  };
                  var linkVisitorId = function (tracker) {
                    if (mcidInstance) {
                      turbine.logger.info('Setting MCID instance on the tracker.');
                      tracker.visitor = mcidInstance;
                    }
                    return tracker;
                  };
                  var updateTrackerVersion = function (tracker) {
                    turbine.logger.info('Setting version on tracker: "' + version + '".');
                    if (typeof tracker.tagContainerMarker !== 'undefined') {
                      tracker.tagContainerMarker = version;
                    } else if (
                      typeof tracker.version === 'string' &&
                      tracker.version.substring(tracker.version.length - 5) !== '-' + version
                    ) {
                      tracker.version += '-' + version;
                    }
                    return tracker;
                  };
                  var updateTrackerVariables = function (trackerProperties, customSetup, tracker) {
                    if (
                      customSetup.loadPhase === BEFORE_SETTINGS_LOAD_PHASE &&
                      customSetup.source
                    ) {
                      turbine.logger.info('Calling custom script before settings.');
                      customSetup.source.call(window, tracker);
                    }
                    applyTrackerVariables(tracker, trackerProperties || {});
                    if (
                      customSetup.loadPhase !== BEFORE_SETTINGS_LOAD_PHASE &&
                      customSetup.source
                    ) {
                      turbine.logger.info('Calling custom script after settings.');
                      customSetup.source.call(window, tracker);
                    }
                    return tracker;
                  };
                  var initializeAudienceManagement = function (settings, tracker) {
                    if (settingsHelper.isAudienceManagementEnabled(settings)) {
                      tracker.loadModule('AudienceManagement');
                      turbine.logger.info('Initializing AudienceManagement module');
                      tracker.AudienceManagement.setup(
                        settings.moduleProperties.audienceManager.config
                      );
                    }
                    return tracker;
                  };
                  var initialize = function (settings) {
                    if (checkEuCompliance(settings.trackingCookieName)) {
                      return loadLibrary(settings)
                        .then(augmentTracker)
                        .then(linkVisitorId)
                        .then(updateTrackerVersion)
                        .then(
                          updateTrackerVariables.bind(
                            null,
                            settings.trackerProperties,
                            settings.customSetup || {}
                          )
                        )
                        .then(initializeAudienceManagement.bind(null, settings));
                    } else {
                      return Promise.reject('EU compliance was not acknowledged by the user.');
                    }
                  };
                  var promise = initialize(turbine.getExtensionSettings());
                  module.exports = function () {
                    return promise;
                  };
                },
                name: 'get-tracker',
                shared: true,
              },
              'adobe-analytics/src/lib/sharedModules/augmentTracker.js': {
                name: 'augment-tracker',
                shared: true,
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var augmenters = require('../helpers/augmenters');
                  module.exports = function (fn) {
                    augmenters.push(fn);
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var queryString = require('@adobe/reactor-query-string');
                  var window = require('@adobe/reactor-window');
                  var eVarRegExp = /eVar([0-9]+)/;
                  var propRegExp = /prop([0-9]+)/;
                  var linkTrackVarsKeys = new RegExp(
                    '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|' +
                      'channel|server|state|zip|pageType$'
                  );
                  var onlyUnique = function (value, index, self) {
                    return self.indexOf(value) === index;
                  };
                  var buildLinkTrackVars = function (tracker, newTrackerProperties, addEvents) {
                    var linkTrackVarsValues = Object.keys(newTrackerProperties).filter(
                      linkTrackVarsKeys.test.bind(linkTrackVarsKeys)
                    );
                    if (addEvents) {
                      linkTrackVarsValues.push('events');
                    }
                    linkTrackVarsValues = linkTrackVarsValues.concat(
                      (tracker.linkTrackVars || '').split(',')
                    );
                    return linkTrackVarsValues
                      .filter(function (value, index) {
                        return (
                          value !== 'None' &&
                          value &&
                          onlyUnique(value, index, linkTrackVarsValues)
                        );
                      })
                      .join(',');
                  };
                  var buildLinkTrackEvents = function (tracker, eventsData) {
                    var linkTrackEventsValues = eventsData.map(function (event) {
                      return event.name;
                    });
                    linkTrackEventsValues = linkTrackEventsValues.concat(
                      (tracker.linkTrackEvents || '').split(',')
                    );
                    return linkTrackEventsValues
                      .filter(function (value, index) {
                        return value !== 'None' && onlyUnique(value, index, linkTrackEventsValues);
                      })
                      .join(',');
                  };
                  var commaJoin = function (store, keyName, trackerProperties) {
                    store[keyName] = trackerProperties[keyName].join(',');
                  };
                  var variablesTransform = function (store, keyName, trackerProperties) {
                    var dynamicVariablePrefix = trackerProperties.dynamicVariablePrefix || 'D=';
                    trackerProperties[keyName].forEach(function (variableData) {
                      var value;
                      if (variableData.type === 'value') {
                        value = variableData.value;
                      } else {
                        var eVarData = eVarRegExp.exec(variableData.value);
                        if (eVarData) {
                          value = dynamicVariablePrefix + 'v' + eVarData[1];
                        } else {
                          var propData = propRegExp.exec(variableData.value);
                          if (propData) {
                            value = dynamicVariablePrefix + 'c' + propData[1];
                          }
                        }
                      }
                      store[variableData.name] = value;
                    });
                  };
                  var transformers = {
                    linkDownloadFileTypes: commaJoin,
                    linkExternalFilters: commaJoin,
                    linkInternalFilters: commaJoin,
                    hierarchies: function (store, keyName, trackerProperties) {
                      trackerProperties[keyName].forEach(function (hierarchyData) {
                        store[hierarchyData.name] = hierarchyData.sections.join(
                          hierarchyData.delimiter
                        );
                      });
                    },
                    props: variablesTransform,
                    eVars: variablesTransform,
                    campaign: function (store, keyName, trackerProperties) {
                      if (trackerProperties[keyName].type === 'queryParam') {
                        var queryParams = queryString.parse(window.location.search);
                        store[keyName] = queryParams[trackerProperties[keyName].value];
                      } else {
                        store[keyName] = trackerProperties[keyName].value;
                      }
                    },
                    events: function (store, keyName, trackerProperties) {
                      var events = trackerProperties[keyName].map(function (data) {
                        var entry = data.name;
                        if (data.id) {
                          entry = [entry, data.id].join(':');
                        }
                        if (data.value) {
                          entry = [entry, data.value].join('=');
                        }
                        return entry;
                      });
                      store[keyName] = events.join(',');
                    },
                  };
                  module.exports = function (tracker, trackerProperties) {
                    var newProperties = {};
                    trackerProperties = trackerProperties || {};
                    Object.keys(trackerProperties).forEach(function (propertyName) {
                      var transform = transformers[propertyName];
                      var value = trackerProperties[propertyName];
                      if (transform) {
                        transform(newProperties, propertyName, trackerProperties);
                      } else {
                        newProperties[propertyName] = value;
                      }
                    });
                    if (newProperties.events) {
                      if (tracker.events && tracker.events.length > 0) {
                        newProperties.events = tracker.events + ',' + newProperties.events;
                      }
                    }
                    var hasEvents =
                      trackerProperties &&
                      trackerProperties.events &&
                      trackerProperties.events.length > 0;
                    var linkTrackVars = buildLinkTrackVars(tracker, newProperties, hasEvents);
                    if (linkTrackVars) {
                      newProperties.linkTrackVars = linkTrackVars;
                    }
                    var linkTrackEvents = buildLinkTrackEvents(
                      tracker,
                      trackerProperties.events || []
                    );
                    if (linkTrackEvents) {
                      newProperties.linkTrackEvents = linkTrackEvents;
                    }
                    turbine.logger.info(
                      'Applying the following properties on tracker: "' +
                        JSON.stringify(newProperties) +
                        '".'
                    );
                    Object.keys(newProperties).forEach(function (propertyName) {
                      tracker[propertyName] = newProperties[propertyName];
                    });
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/settingsHelper.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var window = require('@adobe/reactor-window');
                  var settingsHelper = {
                    LIB_TYPES: {
                      MANAGED: 'managed',
                      PREINSTALLED: 'preinstalled',
                      REMOTE: 'remote',
                      CUSTOM: 'custom',
                    },
                    MANAGED_LIB_PATHS: {
                      APP_MEASUREMENT: 'AppMeasurement.js',
                      ACTIVITY_MAP: 'AppMeasurement_Module_ActivityMap.js',
                      AUDIENCE_MANAGEMENT: 'AppMeasurement_Module_AudienceManagement.js',
                    },
                    getReportSuites: function (reportSuitesData) {
                      var reportSuiteValues = reportSuitesData.production;
                      if (reportSuitesData[turbine.buildInfo.environment]) {
                        reportSuiteValues = reportSuitesData[turbine.buildInfo.environment];
                      }
                      return reportSuiteValues.join(',');
                    },
                    isActivityMapEnabled: function (settings) {
                      return !(
                        settings.libraryCode &&
                        !settings.libraryCode.useActivityMap &&
                        settings.libraryCode.useActivityMap === false
                      );
                    },
                    isAudienceManagementEnabled: function (settings) {
                      var isEnabled = false;
                      if (
                        settings &&
                        settings.moduleProperties &&
                        settings.moduleProperties.audienceManager &&
                        settings.moduleProperties.audienceManager.config &&
                        window &&
                        window._satellite &&
                        window._satellite.company &&
                        window._satellite.company.orgId
                      ) {
                        isEnabled = true;
                      }
                      return isEnabled;
                    },
                  };
                  module.exports = settingsHelper;
                },
              },
              'adobe-analytics/src/lib/helpers/augmenters.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  module.exports = [];
                },
              },
              'adobe-analytics/src/lib/helpers/loadLibrary.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var loadScript = require('@adobe/reactor-load-script');
                  var window = require('@adobe/reactor-window');
                  var Promise = require('@adobe/reactor-promise');
                  var settingsHelper = require('./settingsHelper');
                  var pollHelper = require('./pollHelper');
                  var createTracker = function (settings, reportSuites) {
                    if (!window.s_gi) {
                      throw new Error(
                        'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                          window.AppMeasurement
                      );
                    }
                    turbine.logger.info(
                      'Creating AppMeasurement tracker with these report suites: "' +
                        reportSuites +
                        '"'
                    );
                    var tracker = window.s_gi(reportSuites);
                    if (settings.libraryCode.scopeTrackerGlobally) {
                      turbine.logger.info('Setting the tracker as window.s');
                      window.s = tracker;
                    }
                    return tracker;
                  };
                  var getUrlsToLoad = function (settings) {
                    var urls = [];
                    switch (settings.libraryCode.type) {
                      case settingsHelper.LIB_TYPES.MANAGED:
                        urls.push(
                          turbine.getHostedLibFileUrl(
                            settingsHelper.MANAGED_LIB_PATHS.APP_MEASUREMENT
                          )
                        );
                        if (settingsHelper.isActivityMapEnabled(settings)) {
                          urls.push(
                            turbine.getHostedLibFileUrl(
                              settingsHelper.MANAGED_LIB_PATHS.ACTIVITY_MAP
                            )
                          );
                        }
                        break;
                      case settingsHelper.LIB_TYPES.CUSTOM:
                        urls.push(settings.libraryCode.source);
                        break;
                      case settingsHelper.LIB_TYPES.REMOTE:
                        urls.push(
                          window.location.protocol === 'https:'
                            ? settings.libraryCode.httpsUrl
                            : settings.libraryCode.httpUrl
                        );
                        break;
                    }
                    if (settingsHelper.isAudienceManagementEnabled(settings)) {
                      var visitorServiceConfig = { namespace: window._satellite.company.orgId };
                      settings.moduleProperties.audienceManager.config.visitorService = visitorServiceConfig;
                      urls.push(
                        turbine.getHostedLibFileUrl(
                          settingsHelper.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT
                        )
                      );
                    }
                    return urls;
                  };
                  var loadLibraryScripts = function (settings) {
                    return Promise.all(
                      getUrlsToLoad(settings).map(function (url) {
                        turbine.logger.info('Loading script: ' + url);
                        return loadScript(url);
                      })
                    );
                  };
                  var setReportSuitesOnTracker = function (settings, tracker) {
                    if (settings.libraryCode.accounts) {
                      if (!tracker.sa) {
                        turbine.logger.warn(
                          'Cannot set report suites on tracker. `sa` method not available.'
                        );
                      } else {
                        var reportSuites = settingsHelper.getReportSuites(
                          settings.libraryCode.accounts
                        );
                        turbine.logger.info(
                          'Setting the following report suites on the tracker: "' +
                            reportSuites +
                            '"'
                        );
                        tracker.sa(reportSuites);
                      }
                    }
                    return tracker;
                  };
                  var getTrackerFromVariable = function (trackerVariableName) {
                    if (window[trackerVariableName]) {
                      turbine.logger.info(
                        'Found tracker located at: "' + trackerVariableName + '".'
                      );
                      return window[trackerVariableName];
                    } else {
                      throw new Error(
                        'Cannot find the global variable name: "' + trackerVariableName + '".'
                      );
                    }
                  };
                  module.exports = function (settings) {
                    var loadLibraries = loadLibraryScripts(settings);
                    switch (settings.libraryCode.type) {
                      case settingsHelper.LIB_TYPES.MANAGED:
                        var reportSuites = settingsHelper.getReportSuites(
                          settings.libraryCode.accounts
                        );
                        return loadLibraries.then(
                          createTracker.bind(null, settings, reportSuites)
                        );
                      case settingsHelper.LIB_TYPES.PREINSTALLED:
                        return loadLibraries
                          .then(
                            pollHelper.poll.bind(
                              null,
                              window,
                              settings.libraryCode.trackerVariableName
                            )
                          )
                          .then(setReportSuitesOnTracker.bind(null, settings));
                      case settingsHelper.LIB_TYPES.CUSTOM:
                      case settingsHelper.LIB_TYPES.REMOTE:
                        return loadLibraries
                          .then(
                            getTrackerFromVariable.bind(
                              null,
                              settings.libraryCode.trackerVariableName
                            )
                          )
                          .then(setReportSuitesOnTracker.bind(null, settings));
                      default:
                        throw new Error('Cannot load library. Type not supported.');
                    }
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/generateVersion.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var THIRD_OF_DAY = 8;
                  var getDayField = function (date) {
                    return date.getUTCDate().toString(36);
                  };
                  var getLastChar = function (str) {
                    return str.substr(str.length - 1);
                  };
                  var getRevision = function (date) {
                    return Math.floor(date.getUTCHours() / THIRD_OF_DAY);
                  };
                  var getMonthField = function (date) {
                    var monthNumber = date.getUTCMonth() + 1;
                    var revision = getRevision(date);
                    var monthField = (monthNumber + revision * 12).toString(36);
                    return getLastChar(monthField);
                  };
                  var getYearField = function (date) {
                    return (date.getUTCFullYear() - 2010).toString(36);
                  };
                  module.exports = function (dateString) {
                    var date = new Date(dateString);
                    if (isNaN(date)) {
                      throw new Error('Invalid date provided');
                    }
                    return (
                      'L' +
                      getYearField(date) +
                      getMonthField(date) +
                      getDayField(date)
                    ).toUpperCase();
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/pollHelper.js': {
                script: function (module, exports, require, turbine) {
                  'use strict';
                  var Promise = require('@adobe/reactor-promise');
                  var MAX_ITERATIONS = 40;
                  var INTERVAL = 250;
                  var found = function (resolve, variableName, result) {
                    turbine.logger.info('Found property located at: "' + variableName + '"].');
                    resolve(result);
                  };
                  var getPromise = function (object, variableName) {
                    return new Promise(function (resolve, reject) {
                      if (object[variableName]) {
                        return found(resolve, variableName, object[variableName]);
                      }
                      var i = 1;
                      var intervalId = setInterval(function () {
                        if (object[variableName]) {
                          found(resolve, variableName, object[variableName]);
                          clearInterval(intervalId);
                        }
                        if (i >= MAX_ITERATIONS) {
                          clearInterval(intervalId);
                          reject(
                            new Error(
                              'Bailing out. Cannot find the variable name: "' +
                                variableName +
                                '"].'
                            )
                          );
                        }
                        i++;
                      }, INTERVAL);
                    });
                  };
                  module.exports = {
                    poll: function (object, variableName) {
                      turbine.logger.info(
                        'Waiting for the property to become accessible at: "' +
                          variableName +
                          '"].'
                      );
                      return getPromise(object, variableName);
                    },
                  };
                },
              },
            },
            settings: {
              orgId: '5C0A123F5245AEEA0A490D45@AdobeOrg',
              customSetup: {
                source: function (s) {
                  function mapvalues (list, match) {
                    if (!(list && match)) {
                      return false;
                    }
                    var m = unescape(match).toLowerCase(),
                      v,
                      exact = arguments.length > 2 ? arguments[2] : false;
                    for (var i in list) {
                      if (!list[i].str) {
                        return list[i].id;
                      }
                      v = list[i].str.toLowerCase();
                      if (!v || (exact ? m == v : m.indexOf(v) > -1)) {
                        return list[i].id;
                      }
                    }
                    return false;
                  }
                  function mapvaluesReverse (list, match) {
                    if (!(list && match)) {
                      return false;
                    }
                    var m = unescape(match).toLowerCase(),
                      v,
                      exact = arguments.length > 2 ? arguments[2] : false;
                    for (var i in list) {
                      if (!list[i].id) {
                        return list[i].str;
                      }
                      v = list[i].id.toLowerCase();
                      if (!v || (exact ? m == v : m.indexOf(v) > -1)) {
                        return list[i].str;
                      }
                    }
                    return false;
                  }
                  function s_parseUri () {
                    if (arguments.length == 0) {
                      return window.location;
                    }
                    var u = arguments[0] + '';
                    if (!u) {
                      var a = [];
                      a.href = a.hash = a.host = a.hostname = a.pathname = a.port = a.protocol = a.search =
                        '';
                    } else {
                      var a = document.createElement('a');
                      a.setAttribute('href', u);
                    }
                    return a;
                  }
                  function s_mapURLtoRSID (t) {
                    var i,
                      u = arguments.length > 1 ? arguments[1] : window.location.href,
                      v = s_parseUri(u).hostname + s_parseUri(u).pathname;
                    for (i in t) if (v.indexOf(t[i].site) > -1) return t[i];
                    return 0;
                  }
                  function s_getShortHn () {
                    return s_parseUri(
                      arguments.length > 0 ? arguments[0] : window.location.href
                    ).hostname.replace(/^www[0-9]*\./i, '');
                  }
                  function endsWith (str, suffix) {
                    return str.indexOf(suffix, str.length - suffix.length) !== -1;
                  }
                  function s_split (l, d) {
                    var i,
                      x = 0,
                      a = new Array();
                    if (!d) d = ',';
                    while (l) {
                      i = l.indexOf(d);
                      i = i > -1 ? i : l.length;
                      a[x++] = l.substring(0, i);
                      l = l.substring(i + d.length);
                    }
                    return a;
                  }
                  s_rsids2 = [
                    { site: 'www.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                    { site: 'support.webex.', siteValue: 'webex:support:', cc: 'USD', co: '' },
                    { site: 'buy.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                    { site: 'view.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                  ];
                  domainPeriods = [
                    { site: '/US/', ccVal: 'us' },
                    { site: '.com.br', ccVal: 'br' },
                    { site: '.co.uk', ccVal: 'uk' },
                    { site: '.es', ccVal: 'es' },
                    { site: '.com.mx', ccVal: 'mx' },
                    { site: '.com.au', ccVal: 'au' },
                    { site: '.de', ccVal: 'de' },
                    { site: '.co.it', ccVal: 'it' },
                    { site: '.com.hk', ccVal: 'hk' },
                    { site: '.co.kr', ccVal: 'kr' },
                    { site: '.co.in', ccVal: 'in' },
                    { site: '.co.jp', ccVal: 'jp' },
                    { site: '.ca', ccVal: 'ca' },
                    { site: '.com.cn', ccVal: 'cn' },
                    { site: '.com', ccVal: 'us' },
                  ];
                  var s_contentMap2 = {
                    sites: [
                      { str: 'university.', id: 'uni' },
                      { str: 'www.', id: 'wx3' },
                    ],
                    countries: [
                      { str: 'Australia', id: 'au' },
                      { str: 'Belgium', id: 'be' },
                      { str: 'China', id: 'cn' },
                      { str: 'Denmark', id: 'dk' },
                      { str: 'Finland', id: 'fi' },
                      { str: 'France', id: 'fr' },
                      { str: 'Germany', id: 'de' },
                      { str: 'Greece', id: 'gr' },
                      { str: 'Hong Kong', id: 'hk' },
                      { str: 'India', id: 'in' },
                      { str: 'Ireland', id: 'ie' },
                      { str: 'Italy', id: 'it' },
                      { str: 'Latin America', id: 'lat' },
                      { str: 'Mexico', id: 'mx' },
                      { str: 'Netherlands', id: 'nl' },
                      { str: 'Norway', id: 'no' },
                      { str: 'Portugal', id: 'pt' },
                      { str: 'South Africa', id: 'za' },
                      { str: 'Spain', id: 'es' },
                      { str: 'Sweden', id: 'se' },
                      { str: 'Switzerland', id: 'ch' },
                      { str: 'United Kingdom', id: 'uk' },
                      { str: 'United States', id: 'us' },
                      { str: '', id: '??' },
                      { str: 'United States', id: '' },
                    ],
                    sections: [{ str: 'products', id: 'products' }],
                  };
                  var s_rsid2 = s_mapURLtoRSID(s_rsids2);
                  var siteName =
                    s_rsid2 && typeof s_rsid2.siteValue == 'string' ? s_rsid2.siteValue : '';
                  var countryMap = s_mapURLtoRSID(domainPeriods);
                  var countryVal =
                    countryMap && typeof countryMap.ccVal == 'string' ? countryMap.ccVal : '';
                  var siteCountryReverse = mapvaluesReverse(s_contentMap2.countries, countryVal);
                  var pathName = s_parseUri().pathname;
                  var splitPath = s_split(
                    pathName.indexOf('/') == 0 ? pathName.substring(1) : pathName,
                    '/'
                  );
                  if (splitPath.length > 1) {
                    sectionName = mapvalues(s_contentMap2.sections, pathName)
                      ? mapvalues(s_contentMap2.sections, pathName)
                      : pathName;
                  }
                  if (endsWith(document.URL, '/')) {
                    sectionName = mapvalues(s_contentMap2.sections, splitPath[0])
                      ? mapvalues(s_contentMap2.sections, splitPath[0])
                      : splitPath[0];
                  }
                  if (sectionName == 'undefined' || sectionName === undefined) {
                    var urlParts = s_split(
                      location.pathname.indexOf('/') == 0
                        ? location.pathname.substring(1)
                        : location.pathname,
                      '/'
                    );
                    var pathParts = s_split(
                      location.pathname.indexOf('/') == 0
                        ? location.pathname.substring(1)
                        : location.pathname,
                      '/'
                    ).length;
                    var pageTitle = pathParts - 1;
                    var lastFolder = pathParts - 2;
                    if (
                      endsWith(location.pathname, 'index.html') ||
                      endsWith(location.pathname, 'index.php')
                    ) {
                      var checkIndex = 'true';
                    } else {
                    }
                    if (pathParts == 0) {
                      var sectionName = 'home';
                      var fileName = 'home';
                    } else if (pathParts == 1 && endsWith(location.pathname, '/')) {
                      var sectionName = urlParts[pathParts - 1];
                      var fileName = 'home';
                    } else if (pathParts == 1 && checkIndex == 'true') {
                      var sectionName = 'home';
                      var fileName = 'home';
                    } else if (pathParts == 1 && endsWith(location.pathname, '.html')) {
                      var shortTitle = urlParts[pageTitle];
                      shortTitle = shortTitle.split('.');
                      var sectionName = 'home';
                      var fileName = shortTitle[0];
                    } else if (checkIndex == 'true') {
                      var sectionName = urlParts[lastFolder];
                      var fileName = 'home';
                    } else {
                      var shortTitle = urlParts[pageTitle];
                      shortTitle = shortTitle.split('.');
                      var sectionName = urlParts[lastFolder];
                      var fileName = shortTitle[0];
                    }
                    var myPageName = siteName + countryVal + ':' + sectionName + ':' + fileName;
                  } else {
                    var urlParts = s_split(
                      location.pathname.indexOf('/') == 0
                        ? location.pathname.substring(1)
                        : location.pathname,
                      '/'
                    );
                    var pathParts = s_split(
                      location.pathname.indexOf('/') == 0
                        ? location.pathname.substring(1)
                        : location.pathname,
                      '/'
                    ).length;
                    var pageTitle = pathParts - 1;
                    var lastFolder = pathParts - 2;
                    if (
                      endsWith(location.pathname, 'index.html') ||
                      endsWith(location.pathname, 'index.php')
                    ) {
                      var checkIndex = 'true';
                    } else {
                    }
                    if (pathParts == 0) {
                      var fileName = 'home';
                    } else if (pathParts == 1 && endsWith(location.pathname, '/')) {
                      var fileName = 'home';
                    } else if (pathParts == 1 && checkIndex == 'true') {
                      var fileName = 'home';
                    } else if (pathParts == 1 && endsWith(location.pathname, '.html')) {
                      var shortTitle = urlParts[pageTitle];
                      shortTitle = shortTitle.split('.');
                      var fileName = shortTitle[0];
                    } else if (checkIndex == 'true') {
                      var fileName = 'home';
                    } else {
                      var shortTitle = urlParts[pageTitle];
                      shortTitle = shortTitle.split('.');
                      var fileName = shortTitle[0];
                    }
                    var myPageName = siteName + countryVal + ':' + sectionName + ':' + fileName;
                  }
                  if (
                    document.location.pathname
                      .toLowerCase()
                      .indexOf('lbx/call-me-country-map.html') > -1
                  )
                    return false;
                  if (document.URL.indexOf('/lbx/global_sales_num.html') > -1) return false;
                  if (document.URL.indexOf('pricing/trial/confirmationpage.html') > -1) {
                    s.eVar108 = s.getTimeToComplete('stop', 'em-chk');
                    s.eVar100 = s.getTimeToComplete('stop', 'gttcconfirmation');
                  }
                  if (document.URL.indexOf('/pricing/trial/loadingpage.html') > -1) {
                    s.eVar99 = s.getTimeToComplete('stop', 'gttcloading');
                  }
                  s.visitorNamespace = 'ciscowebex';
                  s.trackingServer = 'metrics.webex.com';
                  s.trackingServerSecure = 'smetrics.webex.com';
                },
              },
              libraryCode: {
                type: 'custom',
                source:
                  'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/EX2f1ca257492c46ddbf38a4c435c38c52-libraryCode_source.js',
                trackerVariableName: 's',
              },
              trackerProperties: {
                charSet: 'UTF-8',
                pageURL: '%s_url%',
                currencyCode: 'USD',
                trackingServer: 'metrics.webex.com',
                trackInlineStats: true,
                visitorNamespace: 'ciscowebex',
                trackDownloadLinks: true,
                trackExternalLinks: true,
                linkExternalFilters: [],
                linkInternalFilters: [
                  'ciscospark.com',
                  'javascript:',
                  'mailto:',
                  'origin-webex-uat.cisco.com',
                  'tel:',
                  'webex.',
                  'cisco.com',
                ],
                trackingServerSecure: 'smetrics.webex.com',
                fpCookieDomainPeriods: '%cd_p%',
                linkDownloadFileTypes: [
                  'avi',
                  'css',
                  'csv',
                  'dmg',
                  'doc',
                  'docx',
                  'eps',
                  'exe',
                  'jpg',
                  'js',
                  'm4v',
                  'mov',
                  'mp3',
                  'msi',
                  'pdf',
                  'png',
                  'ppt',
                  'pptx',
                  'rar',
                  'svg',
                  'tab',
                  'txt',
                  'vsd',
                  'vxd',
                  'wav',
                  'wma',
                  'wmv',
                  'xls',
                  'xlsx',
                  'xml',
                  'zip',
                ],
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPbde2f7ca14e540399dcc1f8208860b7b/',
          },
        },
        company: { orgId: '5C0A123F5245AEEA0A490D45@AdobeOrg' },
        property: {
          name: 'Cisco Webex Sites',
          settings: {
            domains: [
              'cisco.com',
              'webex.ca',
              'webex.co.in',
              'webex.co.it',
              'webex.co.jp',
              'webex.co.kr',
              'webex.com',
              'webex.com.au',
              'webex.com.br',
              'webex.com.cn',
              'webex.com.hk',
              'webex.com.mx',
              'webex.co.uk',
              'webex.de',
              'webex.es',
              'webex.fr',
              'webex.it',
            ],
            undefinedVarsReturnEmpty: false,
            ruleComponentSequencingEnabled: false,
          },
        },
        rules: [
          {
            id: 'RL0227e7e960fe436db3e91d71fa41d58a',
            name: 'WebEx Meetings Free Trial -Activation Confirmation',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'pricing\\/trial\\/confirmationpage\\.html', valueIsRegex: true },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['cisco.com', 'webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: { source: function (event, s) {} },
                  trackerProperties: {
                    events: [{ name: 'event135' }, { name: 'event100', value: '%ft-site-url-s%' }],
                  },
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "(function(h,o,t,j,a,r){\nh.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\nh._hjSettings={hjid:566501,hjsv:6};\na=o.getElementsByTagName('head')[0];\nr=o.createElement('script');r.async=1;\nr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\na.appendChild(r);\n})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL0f0404ec5a8f40b2b7ac2c56551804e2',
            name: 'PL - AEM prod - Amplitude - config',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 40 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: '^www\\.webex\\.co', valueIsRegex: true },
                    { value: '^use\\.webex\\.com$', valueIsRegex: true },
                    { value: '^www3-webex\\.cisco\\.com$', valueIsRegex: true },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '\\/lbx\\/global_sales|lbx\\/call-me-country', valueIsRegex: true },
                    { value: '\\/LP=\\d{1,4}', valueIsRegex: true },
                  ],
                },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    '(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")\n;r.type="text/javascript"\n;r.integrity="sha384-a+mq7tiLwde/00Oc7avFHLn/ttGfdAq1rtZc7u97SEzIiyYoT2IsOKWCkAThwdEu"\n;r.crossOrigin="anonymous";r.async=false\n;r.src="https://cdn.amplitude.com/libs/amplitude-5.3.0-min.gz.js"\n;r.onload=function(){if(!e.amplitude.runQueuedFunctions){\nconsole.log("[Amplitude] Error: could not load SDK")}}\n;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)\n;function s(e,t){e.prototype[t]=function(){\nthis._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}\nvar o=function(){this._q=[];return this}\n;var a=["add","append","clearAll","prepend","set","setOnce","unset"]\n;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]\n;return this}\n;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]\n;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c\n;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]\n;function v(e){function t(t){e[t]=function(){\ne._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}\nfor(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){\ne=(!e||e.length===0?"$default_instance":e).toLowerCase()\n;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}\n;e.amplitude=n})(window,document);\n\n\n//var amp_wx = new amplitude.getInstance();\n//var API_KEY;if(_satellite.buildInfo.environment==\'production\'){ API_KEY= "2123f0c8058771907cf1e29b8e20adfe";}else{API_KEY= "cb2e4925deb8c279b676a30aa3855b43"}\nvar patInternal = /^((?!www.webex.).)*$/;\nvar API_KEY = "2123f0c8058771907cf1e29b8e20adfe";\n\nif(patInternal.test(document.referrer)){ammFlag=true}else{ammFlag=false}\namplitude.getInstance().init(API_KEY, null, {\n    saveEvents: true,\n    includeUtm: true,\n\tincludeReferrer: ammFlag,\n    secureCookie:true,\n\tincludeGclid:true,\n    saveParamsReferrerOncePerSession:false,\n    apiEndpoint: \'api2.amplitude.com\',\n    trackingOptions: {\n      ip_address: false\n    }\n});\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL0787ca5101ed4e1fa40d1b0094d5fe6a',
            name: 'Footer - Social links',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '#wbx-footer-rs .wbx-footer-social a.wbx-icon',
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'footer:svg:%this.getAttribute(title)%:%pageName%',
                      },
                      { name: 'eVar92', type: 'value', value: '%this.getAttribute(title)%' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'alias', value: 'eVar92' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }, { name: 'event180' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.getAttribute(title)%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL0d3d683b66ee494992ae27f821b20186',
            name: 'DB - Activation Failure',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'actDbFail' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { pageName: 'wx:direct-buy:activation:failure' } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RL0f71746a234a48499cfb242ff9e29181',
            name: 'Send Beacon on every page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 14 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RLf32bc54106584b05bc6601cfd38c582f',
            name: 'globalTrack',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.wbx-product-hero-pill a[href*=contact-sales]',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'training-online', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.co', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC9f9e6e4c70a34bb498fb4e79f4f2de24-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL17d1d326ec1d427597fa31b8c22b8373',
            name: 'PL - AEM test - Amplitude - config',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 109 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    {
                      value: 'origin-webex-(dev|qa|lt|sb|stg|uat)\\.cisco\\.com',
                      valueIsRegex: true,
                    },
                    { value: 'www-auth-webex.cisco.com', valueIsRegex: true },
                    { value: 'wbxapp-pub-prd2-01:4503', valueIsRegex: true },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '\\/lbx\\/global_sales|lbx\\/call-me-country', valueIsRegex: true },
                    { value: '\\/LP=\\d{1,4}', valueIsRegex: true },
                  ],
                },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    '(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")\n;r.type="text/javascript"\n;r.integrity="sha384-a+mq7tiLwde/00Oc7avFHLn/ttGfdAq1rtZc7u97SEzIiyYoT2IsOKWCkAThwdEu"\n;r.crossOrigin="anonymous";r.async=true\n;r.src="https://cdn.amplitude.com/libs/amplitude-5.3.0-min.gz.js"\n;r.onload=function(){if(!e.amplitude.runQueuedFunctions){\nconsole.log("[Amplitude] Error: could not load SDK")}}\n;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)\n;function s(e,t){e.prototype[t]=function(){\nthis._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}\nvar o=function(){this._q=[];return this}\n;var a=["add","append","clearAll","prepend","set","setOnce","unset"]\n;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]\n;return this}\n;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]\n;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c\n;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]\n;function v(e){function t(t){e[t]=function(){\ne._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}\nfor(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){\ne=(!e||e.length===0?"$default_instance":e).toLowerCase()\n;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}\n;e.amplitude=n})(window,document);\n\nvar API_KEY = "cb2e4925deb8c279b676a30aa3855b43";\namplitude.getInstance().init(API_KEY, null, {\n    saveEvents: true,\n    includeUtm: true,\n//\tincludeReferrer: ammFlag,\n    secureCookie:true,\n\tincludeGclid:true,\n    saveParamsReferrerOncePerSession:false,\n    apiEndpoint: \'api2.amplitude.com\',\n    trackingOptions: {\n      ip_address: false\n    }\n});\n\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL1127da9acf584818884f4fe0037b0c51',
            name: 'Spark Purchase - Billing',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 9 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/variable.js',
                settings: {
                  name: 'spark_data.page_name',
                  value: 'ThreePgCheckoutAddressPaymentInfoPage',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    events: [{ name: 'event111' }],
                    pageName: 'wx:dr-shopping-cart:billing',
                  },
                },
              },
            ],
          },
          {
            id: 'RL16599bdf1f1c496da747d20d0996fa93',
            name: 'Free trial 2.0 signup',
            events: [
              {
                modulePath: 'core/src/lib/events/entersViewport.js',
                settings: { frequency: 'everyEntry', elementSelector: '#react-aria-modal-dialog' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'cart.webex.com' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'sign-up', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCbd17b638af2f4d9ab53d87198b87641a-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL7dbbc2bb8b5a4e818449b5dc1163cfc9',
            name: 'MC+Spark Change Order Page Load',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/buy/order.html', valueIsRegex: true },
                    { value: '/buy/new-order.html', valueIsRegex: true },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    document.cookie = 'wbxofferFlag=upgrade;expires=0;domain=.webex.com;path=/';
                    return true;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar77', type: 'value', value: '%currentDisplayName%' }],
                    pageName: 'wx:mc-spark:change-order',
                  },
                },
              },
            ],
          },
          {
            id: 'RL7efc11914e1f42b0b6aa473afa6afbb1',
            name: 'Cart | step 1 |  Product selection',
            events: [
              {
                modulePath: 'core/src/lib/events/elementExists.js',
                settings: { elementSelector: '#accountCreateBuy' },
                ruleOrder: 110,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '\\/pricing\\/cart\\.html', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.webex.com', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCf936ab52b4df412fa9961c23bfdfcff7-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL820995008d484273a9a6ae6762eb6f2f',
            name: 'OrderStatusTimeStart',
            events: [
              { modulePath: 'core/src/lib/events/historyChange.js', settings: {}, ruleOrder: 20 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'order-status', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'cart.webex.com', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC71aed0a3e8e74bb8b75efc8961379c5d-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL188fbb6c539c424ab5b5b3b34576d033',
            name: 'PL - AEM | click tracking',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 70 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    {
                      value: 'origin-webex-(dev|qa|lt|sb|stg|uat)\\.cisco\\.com',
                      valueIsRegex: true,
                    },
                    { value: 'www-auth-webex.cisco.com', valueIsRegex: true },
                    { value: 'wbxapp-pub-prd2-01:4503', valueIsRegex: true },
                    { value: 'www\\.webex\\.com', valueIsRegex: true },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    "var webex = webex || {};\nwebex.util = webex.util || {};\nwebex.util.click = (function() {\n  var clickables;\n  var clickEventName = 'wx_clicked';\n  var utilURL = webex.util.data.utilURL;\n  var pageName = _satellite.getVar('p_n').replace(':', '');\n\n  var onClick = function(event) {\n    var el = event.target;\n    var eventProperties = {\n      page_url: utilURL.urlCleaned,\n      page_name: pageName,\n      click_ID: el.getAttribute('data-click-id'),\n    };\n\n    if (typeof el.href !== 'undefined') {\n      eventProperties.destination = utilURL.clean(el.href);\n    }\n\n    try {\n      amplitude.getInstance().logEvent(clickEventName, eventProperties);\n    } catch (e) {\n      // Do nothing.\n    }\n    return false;\n  };\n\n  var configure = function(el) {\n    el.addEventListener(\n      'click',\n      function(el) {\n        onClick(el);\n      },\n      false\n    );\n  };\n\n  var getClickables = function() {\n    var clickables = document.querySelectorAll('[data-click-id]');\n\n    return clickables;\n  };\n\n  var init = (function() {\n    clickables = getClickables();\n    Array.prototype.forEach.call(clickables, configure);\n  })();\n\n  return {\n    configure: configure,\n  };\n})();\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL882672d40c4444739e6de1b0f107bc9a',
            name: 'Maintenance Pages',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/maintenancesupport.html', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop31', type: 'value', value: '%Referrer%' }],
                  },
                },
              },
            ],
          },
          {
            id: 'RLf56f1facbb6e4b33a0d2f2ebe29020aa',
            name: 'PL - AEM - DB email - Test User',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 80 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'pricing\\/buy\\/account\\-create\\.html', valueIsRegex: true },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'setTimeout(function(){ \nif (typeof amplitude !== "undefined") { \nvar tAmpNode=document.getElementById("signupButton"),TestEmail_Flag;\nif(void 0!==tAmpNode||null!==tAmpNode){var TEST_EMAIL_STRINGS=/collabctg\\+|mailinator\\.com|wbxmconline\\+|yopmail\\.com|mconlineauto\\+|wbxmcauto\\+/,conAmpfig={attributes:!0,childList:!1,subtree:!1},stFlgVal=!0,callback=function(a,b){a.forEach(function(a,b){if(stFlgVal){if("attributes"===a.type&&1==TEST_EMAIL_STRINGS.test(document.getElementById("email").value)){TestEmail_Flag=(new amplitude.Identify()).setOnce("test","true");try{amplitude.getInstance().identify(TestEmail_Flag)}catch(c){}}stFlgVal=!1}})},\nobrMut=new MutationObserver(callback);obrMut.observe(tAmpNode,conAmpfig)}\n}\n}, 1000)',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL9f5331433ee24f96a7c62d59c358e511',
            name: 'Footer-clicks',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.wbx-footer-links-wrapper .wbx-footer-links-list-item a',
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.co', valueIsRegex: true }] },
              },
            ],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'footer:link:%this.@cleanText%:%p_vl%',
                      },
                      { name: 'eVar73', type: 'value', value: '%this.@cleanText%' },
                    ],
                    props: [
                      { name: 'prop10', type: 'alias', value: 'eVar73' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event179' }, { name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCc078513b6f7e42fcb388cae5b4089d42-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RLfcd89608854e4045aed012b433d18552',
            name: 'PL - homepage see pricing',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.first-banner-left a.Button--transparent--2ueDz',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 90,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCe7af07b2fc544fe0b17947dfe1dced83-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RLfeb0deb2099b4ee9869b6964836533e5',
            name: 'PL - AEM | pageviewed',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 60 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www\\.webex\\.com', valueIsRegex: true },
                    { value: 'use\\.webex\\.com', valueIsRegex: true },
                    { value: 'www\\.webex\\.es', valueIsRegex: true },
                    { value: 'www\\.webex\\.co\\.', valueIsRegex: true },
                    {
                      value: 'origin-webex-(dev|qa|lt|sb|stg|uat)\\.cisco\\.com',
                      valueIsRegex: true,
                    },
                    { value: 'www-auth-webex\\.cisco\\.com', valueIsRegex: true },
                    { value: 'wbxapp-pub-prd2-01:4503', valueIsRegex: true },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '\\/LP=\\d{1,4}', valueIsRegex: true }] },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    "var webex = webex || {};\nwebex.util = webex.util || {};\nwebex.util.data = (function () {\n  var gathered = {};\n\n  var utilURL = (function () {\n    var urlCleaned;\n\n    var updateURLParameter = function (url, paramKey, paramValue) {\n      var caseInsensitiveKey = new RegExp('^' + paramKey + '$', 'i');\n      var splits;\n      var parameters;\n      var urlFull = null;\n      var urlBase = null;\n      var urlAnchor = null;\n      var urlQueryString = null;\n      var urlParameters = null;\n      var key;\n      var i;\n\n      splits = url.split('?');\n      urlBase = splits[0];\n      urlQueryString = splits[1];\n\n      if (urlQueryString) {\n        splits = urlQueryString.split('#');\n        urlParameters = splits[0];\n        urlAnchor = splits[1];\n\n        parameters = urlParameters.split('&');\n\n        for (i = 0; i < parameters.length; i += 1) {\n          key = parameters[i].split('=')[0];\n          if (caseInsensitiveKey.test(key)) {\n            // Replace the value. Keep the original case of the key.\n            parameters[i] = key + '=' + paramValue;\n          }\n        }\n\n        urlParameters = parameters.join('&');\n      }\n\n      urlFull = urlBase;\n      urlFull += urlParameters ? '?' + urlParameters : '';\n      urlFull += urlAnchor ? '#' + urlAnchor : '';\n\n      return urlFull;\n    };\n\n    var parseQueryString = function (q) {\n      // Parameter keys are converted to all lower case.\n      qs = (function (a) {\n        var b = {};\n        var p;\n        if (a === '') return b;\n        for (var i = 0; i < a.length; ++i) {\n          p = a[i].split('=', 2);\n          if (p.length === 1) b[p[0]] = '';\n          // else b[p[0].toLowerCase()] = decodeURIComponent(p[1].replace(/\\+/g, ' '));\n          else b[p[0].toLowerCase()] = p[1];\n        }\n        return b;\n      })(q.split('&'));\n\n      return qs;\n    };\n\n    var getParameterFromPageUrl = function (param) {\n      var urlRaw = document.location.href;\n      var urlCleaned = clean(urlRaw);\n\n      return getParameterFromUrl(param, urlCleaned);\n    };\n\n    var getParameterFromUrl = function (param, url) {\n      var queryString = url.substr(url.indexOf('?') + 1);\n      var qs = parseQueryString(queryString);\n      // Parameter key must be all lower case for lookup.\n      var value = qs[param.toLowerCase()] || '';\n\n      return value;\n    };\n\n    var cleanEmailAddress = function (email, replacement) {\n      var splits;\n\n      email = decodeURIComponent(email);\n      splits = email.split('@');\n      // Email domain is not PII.\n      email = splits.length === 2 ? replacement + '@' + splits[1] : replacement;\n      email = encodeURIComponent(email);\n\n      return email;\n    };\n\n    var removePII = function (url, replacement) {\n      // Remove personally identifiable information (PII).\n      var cleaned = url;\n      var AD = cleanEmailAddress(getParameterFromUrl('AD', url) || '', replacement);\n      var email = cleanEmailAddress(getParameterFromUrl('email', url) || '', replacement);\n\n      // Remove email address.\n      cleaned = updateURLParameter(cleaned, 'email', email);\n      // Remove first name.\n      cleaned = updateURLParameter(cleaned, 'FN', replacement);\n      // Remove last name.\n      cleaned = updateURLParameter(cleaned, 'LN', replacement);\n      // Remove p_url.\n      cleaned = updateURLParameter(cleaned, 'p_url', replacement);\n      // Remove for post-meeting landing page.\n      cleaned = updateURLParameter(cleaned, 'AD', AD);\n      cleaned = updateURLParameter(cleaned, 'displayName', replacement);\n      cleaned = updateURLParameter(cleaned, 'NM', replacement);\n\n      return cleaned;\n    };\n\n    var clean = function (url) {\n      var redacted = 'REDACTED';\n      var cleaned = removePII(url, redacted);\n\n      return cleaned;\n    };\n\n    var init = (function () {\n      var urlRaw = document.location.href;\n      urlCleaned = clean(urlRaw);\n    })();\n\n    return {\n      parameter: getParameterFromPageUrl,\n      clean: clean,\n      urlCleaned: urlCleaned,\n    };\n  })();\n\n  // -------------------------------------------------------------------------\n  var utilDGID = (function () {\n    var data = {};\n    var invalid = 'invalid';\n    var functions = {\n      '1': 'Media',\n      '2': 'Social',\n      '3': 'Push Communication',\n      '4': 'In-Product Messaging',\n      '5': 'Video',\n      '6': 'Cisco',\n      '7': 'CCTG',\n      '8': 'Partners',\n    };\n    var channels = {\n      '1': 'Organic Social',\n      '2': 'Paid Social',\n      '3': 'Programmatic',\n      '4': 'SEM',\n      '5': 'Content Syndication ',\n      '6': 'Sponsored Content ',\n      '7': 'Email',\n      '8': 'Text/SMS Message',\n      '9': 'Push Notification',\n      '10': 'Web Product Messaging',\n      '11': 'Mobile App Messaging',\n      '12': 'Brightcove',\n      '13': 'Web',\n      '14': 'CCTG - Paid Social',\n      '15': 'CCTG - Organic Social',\n      '16': 'Out of Home',\n      '17': 'CCTG - Emerge',\n      '18': 'CCTG - Sales',\n      '19': 'CCTG - Email',\n      '20': 'Affiliate',\n    };\n    var placements = {\n      '1': 'Bing',\n      '2': 'Bing',\n      '3': 'Facebook',\n      '4': 'FBX',\n      '5': 'GDN',\n      '6': 'Gmail',\n      '7': 'Google',\n      '8': 'Google+',\n      '9': 'LinkedIn',\n      '10': 'Pandora',\n      '11': 'Spotify',\n      '12': 'Triplelift',\n      '13': 'Twitter',\n      '14': 'Web',\n      '15': 'Yahoo',\n      '16': 'Youtube',\n      '17': 'Baidu',\n      '18': 'Eloqua',\n      '19': 'MarketFirst',\n      '20': 'Salesperson',\n      '21': 'Mobile Device',\n      '22': 'Spark Post Session',\n      '23': 'W11 Post-Attendee',\n      '24': 'MC Post-Meeting',\n      '25': 'W11 Top Bar',\n      '26': 'W11 Sidebar',\n      '27': 'W11 Ticker',\n      '28': 'W11 Account Sidebar',\n      '29': 'W11 Account Ticker',\n      '30': 'Spark App',\n      '31': 'WebEx App',\n      '32': 'Landing Page',\n      '33': 'Hub',\n      '34': 'Cisco Expert Talks',\n      '35': 'Auto-Con Email',\n      '36': 'Spark Adoption Gallery',\n      '37': 'MC Curtain',\n      '38': 'MC Invite Widget',\n      '39': 'MC Scheduler',\n      '40': 'MC Top Bar',\n      '41': 'Snapchat',\n      '42': 'Airport - Public',\n      '43': 'Airport - Members Area',\n      '44': 'CCTG - Emerge Website',\n      '45': 'CCTG - TeamTV Website',\n      '46': 'CCTG - SparkVR Website',\n      '47': 'CCTG - Sales Email',\n      '48': 'CCTG - Monica Website',\n      '49': 'Cisco - Newsroom',\n      '50': 'Cisco - Email Send',\n      '51': 'Partner',\n      '52': 'In-Content CTA',\n      '53': 'Instagram',\n    };\n    var channelTactics = {\n      '1': 'Acquisition-Modeling',\n      '2': 'Article',\n      '3': 'Case Study',\n      '4': 'CRM',\n      '5': 'Digital Radio',\n      '6': 'Graphic',\n      '7': 'Image',\n      '8': 'Infographic\t',\n      '9': 'Mobile',\n      '10': 'Native',\n      '11': 'Remarketing',\n      '12': 'Search',\n      '13': 'Search Retargeting',\n      '14': 'Text',\n      '15': 'Video',\n      '16': 'Video',\n      '17': 'Visual Blog',\n      '18': 'Webcast',\n      '19': 'WebEx Blog',\n      '20': 'Whitepaper',\n      '21': 'Customer Research',\n      '22': 'Analyst Research',\n      '23': 'How-to',\n      '24': 'Usage Tips',\n      '25': 'Transaction',\n      '26': 'Product Offer',\n      '27': 'Promotion/Discount',\n      '28': 'Influencer Program',\n      '29': 'Contact Sales',\n      '30': 'RAD',\n      '31': 'Video Testimonial',\n      '32': 'Video How-To',\n      '33': 'Video Commercial',\n      '34': 'Video Advertisement',\n      '35': 'Video Live Demo',\n      '36': 'Hub Referral',\n      '37': 'Webinar',\n      '38': 'CCTG - Product Website',\n      '39': 'E-Book',\n      '40': 'Email - Content Syndication',\n      '41': 'Telemarketing',\n      '42': 'Checklist',\n      '43': 'Native Advertising',\n    };\n    var personas = {\n      '1': 'Undefined',\n      '2': 'Enablers',\n      '3': 'End Users',\n      '4': 'Sellers',\n      '5': 'Stable, Tenured',\n      '6': 'Tellers',\n      '7': 'Up and Comers',\n    };\n    var goals = {\n      '1': 'Awareness',\n      '2': 'Basic Account',\n      '3': 'Basic to Premium',\n      '4': 'Call Sales Team',\n      '5': 'Free Trial',\n      '6': 'Premium 100',\n      '7': 'Request a Demo',\n      '8': 'Upgrade',\n      '9': 'Download App',\n      '10': 'Nurture',\n      '11': 'Activation',\n      '12': 'Adoption',\n      '13': 'Cart abandon',\n      '14': 'Drip',\n      '15': 'Hotline / Chat',\n      '16': 'On-board',\n      '17': 'Recycle',\n      '18': 'Retention',\n      '19': 'Upsell',\n      '20': 'Waner',\n      '21': 'Live demo',\n      '22': 'Premium',\n      '23': 'MQL',\n    };\n    var products = {\n      '1': 'Cisco Spark',\n      '2': 'Collaboration Meeting Rooms (CMR)',\n      '3': 'Collaboration Solutions',\n      '4': 'WebEx Event Center',\n      '5': 'WebEx Meeting Center',\n      '6': 'WebEx Meetings',\n      '7': 'WebEx Training Center',\n      '8': 'WebEx Support Center',\n      '9': 'Project Storm',\n      '10': 'MC+Spark',\n      '11': 'Spark Board',\n    };\n\n    var getCountry = function (value) {\n      var country = invalid;\n\n      // Format values properly.\n      if (/^[a-z]{2}$/i.test(value)) {\n        country = value.toUpperCase();\n      } else if (/^Global$/i.test(value)) {\n        country = 'Global';\n      }\n\n      return country;\n    };\n\n    var lookup = function (key, values) {\n      var cleanedKey = cleanKey(key);\n      var value = Object.prototype.hasOwnProperty.call(values, cleanedKey) ? values[cleanedKey] : invalid;\n\n      return value;\n    };\n\n    var trimLeadingZeroes = function (s) {\n      return s.replace(/^0+/, '');\n    };\n\n    var cleanKey = function (s) {\n      // A key must have 1-4 digits. We will trim any leading zeroes for subsequent lookup.\n      var validKey = /^\\d{1,4}$/;\n      var cleaned = s;\n\n      if (validKey.test(cleaned)) {\n        cleaned = trimLeadingZeroes(cleaned);\n      } else {\n        cleaned = invalid;\n      }\n\n      return cleaned;\n    };\n\n    var validateDgid = function (dgid) {\n      // DGID key should have 8 positions delimited by \"-\".\n      var isValid = false;\n\n      if (typeof dgid === 'string') {\n        isValid = dgid.split('-').length === 8;\n      }\n\n      return isValid;\n    };\n\n    var decodeDgid = function (dgid) {\n      var isValidDgid = validateDgid(dgid);\n      var keys;\n      var decoded = {};\n      var dgFunction = invalid;\n      var dgChannel = invalid;\n      var dgPlacement = invalid;\n      var dgCountry = invalid;\n      var dgChannelTactic = invalid;\n      var dgPersona = invalid;\n      var dgGoal = invalid;\n      var dgProduct = invalid;\n\n      if (isValidDgid) {\n        try {\n          keys = dgid.split('-');\n          dgFunction = lookup(keys[0], functions);\n          dgChannel = lookup(keys[1], channels);\n          dgPlacement = lookup(keys[2], placements);\n          dgCountry = getCountry(keys[3]);\n          dgChannelTactic = lookup(keys[4], channelTactics);\n          dgPersona = lookup(keys[5], personas);\n          dgGoal = lookup(keys[6], goals);\n          dgProduct = lookup(keys[7], products);\n        } catch (e) {\n          // Do nothing.\n        }\n      }\n\n      decoded = {\n        dg_function: dgFunction,\n        dg_channel: dgChannel,\n        dg_placement: dgPlacement,\n        dg_country: dgCountry,\n        dg_channel_tactic: dgChannelTactic,\n        dg_persona: dgPersona,\n        dg_goal: dgGoal,\n        dg_product: dgProduct,\n      };\n\n      return decoded;\n    };\n\n    var getDGID = function () {\n      // In order of preference, check DG, then DGID parameters.\n      var dgid = {};\n      dgid.key = utilURL.parameter('DG');\n      if (dgid.key === '') {\n        dgid.key = utilURL.parameter('DGID');\n      }\n      dgid.decoded = decodeDgid(dgid.key);\n\n      return dgid;\n    };\n\n    var init = (function () {\n      data = getDGID();\n    })();\n\n    return {\n      data: data,\n    };\n  })();\n  // -------------------------------------------------------------------------\n  var utilUTM = (function () {\n    var urlParameters;\n    var hasUrlParameters;\n\n    var getUrlParameters = function () {\n      // UTM Source: PaidSearch, PaidSocial, Programmatic, OrganicSocial etc.\n      // UTM Channel: GoogleAds / FacebookAds / TwitterAds etc\n      // UTM Campaign: Campaign name\n      // UTM Content: Ad Set / Ad Group\n      // UTM Medium: Ad name\n      parameters = {\n        campaign: utilURL.parameter('utm_campaign'),\n        channel: utilURL.parameter('utm_channel'),\n        content: utilURL.parameter('utm_content'),\n        medium: utilURL.parameter('utm_medium'),\n        source: utilURL.parameter('utm_source'),\n      };\n\n      return parameters;\n    };\n\n    var init = (function () {\n      urlParameters = getUrlParameters();\n\n      hasUrlParameters =\n        parameters.campaign + parameters.channel + parameters.content + parameters.medium + parameters.source !== '';\n    })();\n\n    return {\n      parameters: urlParameters,\n      hasParameters: hasUrlParameters,\n    };\n  })();\n  // -------------------------------------------------------------------------\n  // post-meeting landing page\n  var pmlp = (function () {\n    var data = {};\n\n    var getUserType = function () {\n      var url = utilURL.urlCleaned;\n      var userType = '';\n      if (/\\/post-meeting\\/host\\//.test(url)) {\n        userType = 'host';\n      } else if (/\\/post-meeting\\/attendee\\//.test(url)) {\n        userType = 'attendee';\n      } else if (/\\/post-meeting\\/index\\.html/.test(url)) {\n        userType = utilURL.parameter('userType').toLowerCase() || '';\n      }\n\n      return userType;\n    };\n\n    var getData = function () {\n      var data = {\n        billingMode: utilURL.parameter('billingMode'),\n        userType: getUserType(),\n      };\n\n      return data;\n    };\n\n    var isPmlp;\n\n    var init = (function () {\n      data = getData();\n\n      isPmlp = data.userType !== '';\n    })();\n\n    return {\n      data: data,\n      isPmlp: isPmlp,\n    };\n  })();\n  // -------------------------------------------------------------------------\n\n  var getReferrerURL = function () {\n    var url = document.referrer || '';\n\n    url = utilURL.clean(url);\n\n    return url;\n  };\n\n  var getReferrerDomain = function () {\n    var domain;\n    var url = document.referrer;\n\n    var matches = url.match(/:\\/\\/(.[^/]+)/);\n\n    if (matches !== null && matches[1] !== null) {\n      domain = matches[1];\n    } else {\n      domain = '';\n    }\n\n    return domain;\n  };\n\n  var getReferrerChannel = function () {\n    var domain = getReferrerDomain();\n    var patternDirect = /^$/;\n    var patternInternal = /(blog|help)\\.webex\\.com/i;\n    // Use none to bucket exclusions with all lower environment, webex.co.*, and non- blog. and help. webex.com traffic.\n    var patternNone = /(wbxapp-(auth|pub)-|origin-webex-[a-z]+.cisco\\.com|\\.webex\\.co\\.|(?!blog|help)\\.webex\\.com)/i;\n    var patternSearch = /\\.(aol|ask|askjeeves|baidu|bing|chacha|duckduckgo|excite|google|lycos|msxml|searchencrypt|yahoo|yandex)\\./i;\n    var patternSocial = /\\.(facebook|linkedin)\\.com/i;\n    var channels = {\n      direct: 'direct',\n      internal: 'internal',\n      none: 'none',\n      other: 'other',\n      search: 'search engine',\n      social: 'social',\n    };\n    var channel = channels.other;\n\n    if (patternDirect.test(domain)) {\n      channel = channels.direct;\n    } else if (patternInternal.test(domain)) {\n      channel = channels.internal;\n    } else if (patternNone.test(domain)) {\n      channel = channels.none;\n    } else if (patternSearch.test(domain)) {\n      channel = channels.search;\n    } else if (patternSocial.test(domain)) {\n      channel = channels.social;\n    }\n\n    if (/^(search engine|social)$/i.test(channel)) {\n      channel = isPaidTraffic() ? channel + ' - paid' : channel + ' - organic';\n    }\n\n    return channel;\n  };\n\n  var getPsearchID = function () {\n    var param = decodeURIComponent(utilURL.parameter('psearchID'));\n\n    return param;\n  };\n\n  var getTrackID = function () {\n    var trackID = utilURL.parameter('TrackID');\n\n    return trackID;\n  };\n\n  var isPaidTraffic = function () {\n    // Check if any of the following values exist.\n    var isPaid = utilDGID.data.key !== '' || utilUTM.hasParameters;\n\n    return isPaid;\n  };\n\n  var getTargeterValue = function (property) {\n    var value;\n    try {\n      value = JSON.parse(localStorage.getItem('targeter')).for_analysis[property];\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getPageName = function () {\n    var name;\n\n    var isFile = function (url) {\n      var value = /^file:\\/\\//i.test(url);\n      return value;\n    };\n\n    var isPageNotFound = function () {\n      value = false;\n      var translationPageNotFound = [\n        'Page not Found', // en\n        'Seite nicht gefunden', // de\n        'Página no encontrada', // es\n        'Page non trouvée', // fr\n        'ページが見つかりません - Cisco Webex', // ja\n        'Página não encontrada', // pt\n        '页面未找到', // zh_CN\n        '找不到頁面', // zh_HK\n        'Page not Found',\n        '페이지를 찾을 수 없음', // ko\n        'No se encontró la página.', // es_MX\n      ];\n      var metaTitle;\n\n      try {\n        metaTitle = document.querySelector('meta[name=title]').content.toLowerCase();\n      } catch (e) {\n        metaTitle = '';\n      }\n\n      if (metaTitle !== '') {\n        for (var i = 0; i < translationPageNotFound.length; i++) {\n          value = translationPageNotFound[i].toLowerCase().indexOf(metaTitle) > -1;\n          if (value) break;\n        }\n      }\n\n      return value;\n    };\n\n    var url = document.URL;\n\n    name = isPageNotFound()\n      ? 'page-not-found'\n      : isFile(url)\n      ? 'file'\n      : /www\\.webex\\.com\\/join\\//i.test(url)\n      ? 'join'\n      : /www\\.webex\\.com\\/meet\\//i.test(url)\n      ? 'meet'\n      : _satellite.getVar('p_n').replace(':', '');\n\n    return name;\n  };\n\n  var getPageCategory = function () {\n    return '';\n  };\n\n  var gatherData = function () {\n    var dgid = utilDGID.data;\n    var utm = utilUTM.parameters;\n    var isPaid = isPaidTraffic();\n    var cleanedURL = utilURL.urlCleaned;\n    var data = {\n      pageName: getPageName(),\n      pageCategory: getPageCategory(),\n      destinationURL: cleanedURL,\n      referringURL: getReferrerURL(),\n      referringDomain: getReferrerDomain(),\n      referringChannel: getReferrerChannel(),\n      utm: utm,\n      DGID: dgid,\n      trackID: getTrackID(),\n      psearchID: getPsearchID(),\n      isPaidTraffic: isPaid,\n    };\n\n    var mainUrl = cleanedURL\n      .replace(/[\\?|#].+/, '')\n      .replace(/[?]/g, '')\n      .replace(/^http(s?):\\/\\//i, '');\n    var fullUrl = cleanedURL.replace(/^http(s?):\\/\\//i, '');\n    var userLang = _satellite.cookie.get('user_lang') || '';\n    var userLocale;\n    if (cleanedURL.indexOf('/www.webex.co.in') > 0) userLocale = 'in';\n    else if (cleanedURL.indexOf('/www.webex.com.cn') > 0) userLocale = 'cn';\n    else if (cleanedURL.indexOf('/www.webex.com.br') > 0) userLocale = 'br';\n    else if (cleanedURL.indexOf('/www.webex.com.mx/') > 0) userLocale = 'mx';\n    else if (cleanedURL.indexOf('/www.webex.co.kr/') > 0) userLocale = 'kr';\n    else if (cleanedURL.indexOf('/www.webex.es/') > 0) userLocale = 'es';\n    else if (cleanedURL.indexOf('/www.webex.co.it/') > 0) userLocale = 'it';\n    else if (cleanedURL.indexOf('/www.webex.com/it/') > 0) userLocale = 'it';\n    else if (cleanedURL.indexOf('/www.webex.com/es/') > 0) userLocale = 'es';\n    else if (cleanedURL.indexOf('/www.webex.com/ko/') > 0) userLocale = 'ko';\n    else if (cleanedURL.indexOf('/www.webex.com/hk/') > 0) userLocale = 'it';\n    else if (cleanedURL.indexOf('/www.webex.com/br/') > 0) userLocale = 'br';\n    else userLocale = _satellite.cookie.get('user_locale') || '';\n\n    userLang = userLang.toLowerCase();\n    userLocale = userLocale.toLowerCase();\n\n    // Add to the data object.\n    data.pageViewedEventProperties = {\n      page_name: data.pageName,\n      page_category: data.pageCategory,\n      custom_referrer_url: data.referringURL,\n      main_page_url: mainUrl,\n      page_url: fullUrl,\n      domain: location.host,\n      locale: userLocale,\n      lang: userLang,\n      dg_param: data.DGID.key,\n      trackID: data.trackID,\n      psearchID: data.psearchID,\n    };\n\n    data.targeter = {\n      domain: getTargeterValue('domain'),\n      company_name: getTargeterValue('company_name'),\n      company_size: getTargeterValue('company_size'),\n      industry_category: getTargeterValue('industry_category'),\n      industry_sub_category: getTargeterValue('industry_sub_category'),\n      segment: getTargeterValue('segment'),\n    };\n\n    if (pmlp.isPmlp) {\n      data.pmlp = pmlp.data;\n      data.pageViewedEventProperties.pmlp_user_type = data.pmlp.userType;\n      data.pageViewedEventProperties.pmlp_billing_mode = data.pmlp.billingMode;\n    }\n\n    return data;\n  };\n\n  var init = (function () {\n    gathered = gatherData();\n  })();\n\n  return {\n    gathered: gathered,\n    utilURL: utilURL,\n  };\n})();\n",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    "var utilDataLayer = (function(data) {\n  var digitalData = {};\n\n  var getProperty = function(p) {\n    var value;\n\n    try {\n      value = data[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var hasUtm = function(utm) {\n    var hasUtm = utm.campaign + utm.channel + utm.content + utm.medium + utm.source !== '';\n\n    return hasUtm;\n  };\n\n  var setDigitalData = function() {\n    var pageName = getProperty('pageName');\n    var pageCategory = getProperty('pageCategory');\n    var TrackID = getProperty('trackID');\n    var psearchID = getProperty('psearchID');\n    var destinationURL = getProperty('destinationURL');\n    var referringURL = getProperty('referringURL');\n    var referringDomain = getProperty('referringDomain');\n    var referringChannel = getProperty('referringChannel');\n    var demandGeneration = getProperty('DGID');\n    var utm = getProperty('utm');\n    var targeter = getProperty('targeter');\n\n    digitalData = {\n      page: {\n        pageInfo: {\n          pageName: pageName,\n          pageCategory: pageCategory,\n          destinationURL: destinationURL,\n          referringURL: referringURL,\n          referringDomain: referringDomain,\n          referringChannel: referringChannel,\n        },\n      },\n      user: [\n        {\n          segment: {},\n        },\n      ],\n    };\n    var userProperties = digitalData.user[0].segment;\n\n    // Only add user properties that exist.\n    if (demandGeneration.key !== '') userProperties.demandGeneration = demandGeneration;\n    if (hasUtm(utm)) userProperties.utm = utm;\n    if (TrackID !== '') userProperties.TrackID = TrackID;\n    if (psearchID !== '') userProperties.psearchID = psearchID;\n    if (targeter !== '') userProperties.targeter = targeter;\n  };\n\n  var init = (function() {\n    setDigitalData();\n  })();\n\n  return {\n    digitalData: digitalData,\n  };\n})(webex.util.data.gathered);\n\nvar digitalData = utilDataLayer.digitalData;\n",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    "(function(data) {\n  var getDGKey = function() {\n    var value;\n\n    try {\n      value = data.DGID.key || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getDGProperty = function(p) {\n    var value;\n\n    try {\n      value = data.DGID.decoded[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getPmlpProperty = function(p) {\n    var value;\n\n    try {\n      value = data.pmlp[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getTargeterProperty = function(p) {\n    var value;\n\n    try {\n      value = data.targeter[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getUtmProperty = function(p) {\n    var value;\n\n    try {\n      value = data.utm[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getProperty = function(p) {\n    var value;\n\n    try {\n      value = data[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var setTargeterProperty = function(property, userProperties) {\n    // If 'property' exists in targeter, add it to 'userProperties'.\n    var value = getTargeterProperty(property);\n\n    if (value !== '') userProperties['targeter.' + property] = value;\n\n    return userProperties;\n  };\n\n  var send = function() {\n    var userProperties = {};\n    var eventName;\n    var prefix = 'wx_pageviewed_';\n    var pageViewEventProperties = getProperty('pageViewedEventProperties');\n    var pageName = getProperty('pageName');\n    var pageCategory = getProperty('pageCategory');\n    var TrackID = getProperty('trackID');\n    var psearchID = getProperty('psearchID');\n    var referringURL = getProperty('referringURL');\n    var referringDomain = getProperty('referringDomain');\n    var referringChannel = getProperty('referringChannel');\n    var utmChannel = getUtmProperty('channel');\n    var pmlpBillingMode = getPmlpProperty('billingMode');\n    var pmlpUserType = getPmlpProperty('userType');\n    // Various pages used in funnels already have a page viewed event.\n    // We will not send a page view event for these.\n    var urlsWithOtherPageViewEvents = /www\\.webex\\.com\\/pricing\\/buy\\//i;\n    var sendPsearchId = psearchID !== '';\n    var sendReferringChannel = referringChannel !== '' && referringChannel !== 'none';\n    var sendUtmChannel = utmChannel !== '';\n    var identifyAmp;\n\n    // Make sure Amplitude is loaded. Exclude lightboxes.\n    if (typeof amplitude !== 'undefined' && document.URL.indexOf('/lbx/') < 0) {\n      identifyAmp = new amplitude.Identify();\n\n      // If not a PMLP, clear PMLP user properties.\n      if (pmlpBillingMode === '') {\n        identifyAmp.unset('pmlp_billing_mode');\n      } else {\n        userProperties.pmlp_billing_mode = pmlpBillingMode;\n      }\n      if (pmlpUserType === '') {\n        identifyAmp.unset('pmlp_user_type');\n      } else {\n        userProperties.pmlp_user_type = pmlpUserType;\n      }\n      // Only add user properties that exist.\n      if (getProperty('isPaidTraffic')) {\n        userProperties.DGID = getDGKey();\n        userProperties.dg_function = getDGProperty('dg_function');\n        userProperties.dg_channel = getDGProperty('dg_channel');\n        userProperties.dg_placement = getDGProperty('dg_placement');\n        userProperties.dg_country = getDGProperty('dg_country');\n        userProperties.dg_channel_tactic = getDGProperty('dg_channel_tactic');\n        userProperties.dg_persona = getDGProperty('dg_persona');\n        userProperties.dg_goal = getDGProperty('dg_goal');\n        userProperties.dg_product = getDGProperty('dg_product');\n      }\n      if (TrackID !== '') userProperties.TrackID = TrackID;\n      // Amplitude's referring URL can include PII. Ours does not. Use ours.\n      if (referringURL !== '') userProperties.referrer = referringURL;\n      // Use Amplitude's referring domain.\n      // if (referringDomain !== '') userProperties.referring_domain = referringDomain;\n\n      if (sendPsearchId || sendReferringChannel || sendUtmChannel) {\n        // Set the initial and last-touch values for each of these user properties.\n        if (sendPsearchId) {\n          identifyAmp.setOnce('initial_psearchID', psearchID);\n          userProperties.psearchID = psearchID;\n        }\n        if (sendReferringChannel) {\n          identifyAmp.setOnce('initial_referring_channel', referringChannel);\n          userProperties.referring_channel = referringChannel;\n        }\n        if (sendUtmChannel) {\n          identifyAmp.setOnce('initial_utm_channel', utmChannel);\n          userProperties.utm_channel = utmChannel;\n        }\n        // Make a single, combined .identify() call.\n        amplitude.getInstance().identify(identifyAmp);\n        // debugger;\n\n        userProperties = setTargeterProperty('domain', userProperties);\n        userProperties = setTargeterProperty('company_name', userProperties);\n        userProperties = setTargeterProperty('company_size', userProperties);\n        userProperties = setTargeterProperty('industry_category', userProperties);\n        userProperties = setTargeterProperty('industry_sub_category', userProperties);\n        userProperties = setTargeterProperty('segment', userProperties);\n      }\n\n      // Send the user properties to Amplitude.\n      amplitude.getInstance().setUserProperties(userProperties);\n\n      if (!urlsWithOtherPageViewEvents.test(document.URL)) {\n        // Send a page viewed event.\n        // No need to exclude cart.webex.com pages here. The domains condition for this rule already excludes them.\n        eventName = /free_to_paid/i.test(document.URL)\n          ? 'MCOnline_CO_pricing page upgrade viewed'\n          : pageCategory !== ''\n          ? prefix + pageCategory\n          : prefix + pageName;\n        amplitude.getInstance().logEvent(eventName, pageViewEventProperties);\n      }\n    }\n  };\n\n  var init = (function() {\n    send();\n  })();\n})(webex.util.data.gathered);\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLff3a3214039e48f2b412a714a5bcd447',
            name: 'homepage | sign up form',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'setTimeout(function() {\ntry {\n/*window.chEmValStr=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\\.)+[A-Z]{2,4}$/i;window.chEmVal=/^[A-Z0-9._%+-]/i;function exscLnchStr(){LnTrkEvent(this,"event181","section:hero-banner:button:","start for free")}function exscLnch(){LnTrkEvent(this,"event181","section:hero-banner:button:clicked:","start for free")}var gtEmVal=document.getElementById("email"),runIenfe=!0,runIenfeStr=!0;gtEmVal.onfocus=function(){runIenfeStr&&(exscLnchStr(),runIenfeStr=!1)};\ngtEmVal.onclick=function(){runIenfeStr&&(exscLnchStr(),runIenfeStr=!1)};gtEmVal.onpaste=function(){runIenfeStr&&(exscLnchStr(),runIenfeStr=!1)};\nwindow.chEmVal=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\\.)+[A-Z]{2,4}$/i;\nvar runIenfe2=true;\n*/\n$(\'.hero-content .hero-cta1\').click(function(){LnTrkEvent(this,"event181","section:hero-banner:button:","see pricing")})\n  $(\'.hero-content .hero-cta2\').click(function(){LnTrkEvent(this,"event181","section:hero-banner:button:","start for free")})\n\n//document.getElementById("signupButton").onclick=function(){chEmVal.test(document.getElementById("email").value)&&(runIenfe&&(LnTrkEvent(this,"event181","section:hero-banner:button:","start for free:clk"),runIenfe2=!1))};\t\n} catch (e) {}\n}, 2000);\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL8c11b3b1822b45a6a92d6932ec6a1229',
            name: 'System Down Error Page',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'webex-systemdown' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.prop25 =
                        _satellite.getVar('SystemDown Error Code Value') +
                        ' : ' +
                        _satellite.getVar('SignUp Error Cookie');
                      s.prop31 = _satellite.getVar('Referrer');
                      s.abort = true;
                    },
                  },
                  trackerProperties: { events: [{ name: 'event71' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RLef09f2f6de8b4b3e81493c372295d652',
            name: 'FAQs Text',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'dt',
                  elementProperties: [
                    { name: 'className', value: 'question', valueIsRegex: true },
                  ],
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    var qs = jQuery(this).parent().find('.question').text();
                    _satellite.setVar('Question', qs);
                    return true;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop27', type: 'value', value: 'FAQ - %Question%' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'FAQ Qs - %Question%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf055f3281d6e4f80a3dd0c748db57ff2',
            name: 'download CTA',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'downloads.html', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCc3af767abce24c319e2bf448391e9d75-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL92ab31e8c98d41a3809bd0d71f228d1c',
            name: 'FT pin-check',
            events: [
              {
                modulePath: 'core/src/lib/events/entersViewport.js',
                settings: { elementSelector: '.resend-link' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'pin-check', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC5c1da5d0c9e44ef69698e5f4672ae000-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL1b689aba21b940ef8b5ff9f17de6aff1',
            name: 'freeTrialButtonClick',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a[href*="pricing/free-trial."], a[id="signupButton"]',
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    var pn = location.pathname,
                      lb = this.innerText.trim().toLowerCase(),
                      pc = this.parentElement.className,
                      rv = 'n/a',
                      teamsButtonLabels = (
                        'Try Teams free' +
                        'Teams kostenlos testen' +
                        'Essayez Teams gratuitement'
                      )
                        .trim()
                        .toLowerCase();
                    if (pc === 'wbx-header-menu-list-item wbx-header-try-it-free') {
                      if (pn.indexOf('/team-collaboration.html') > -1)
                        rv = 'team product page header';
                      else rv = 'global header';
                    } else if (pc === 'hero-cta-container') rv = 'home page hero';
                    else if (pc === 'hero-item2-cta-container') rv = 'home page carousel 1';
                    else if (pc === 'webex-test') rv = 'home page last section';
                    else if (pc === 'container') {
                      if (this.parentElement.parentElement.className === 'hp-start sec-6')
                        rv = 'home page last section';
                    } else if (teamsButtonLabels.indexOf(lb) > -1) rv = 'teams page hero section';
                    else {
                      if (pn.indexOf('video-conferencing') > -1) rv = 'meetings page hero section';
                      else if (pn.indexOf('free-trial') > -1) {
                        if (pn.indexOf('-testmeeting') > -1) rv = 'test meeting landing page';
                        else rv = 'dg landing page';
                      } else if (pn.indexOf('/why-webex/index') > -1) {
                        if (pc === 'module2') rv = 'why webex section 2';
                        else if (pc === 'module') rv = 'why webex last section';
                      } else if (pn.indexOf('/the-future-of-work') > -1) {
                        if (pc === 'section6-btn-box') rv = 'future of work last section';
                      } else return false;
                    }
                    _satellite.setVar('freeTrialValue', rv);
                    return true;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar87', type: 'value', value: '%freeTrialValue%' }],
                    events: [{ name: 'event176' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Try Meeting Click-thru', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf1b9c6059a914ee28cc7baf3935e77d7',
            name: 'hotjar free-trial - 566501',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'pricing/free-trial', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '(function(h, o, t, j, a, r) {\n  h.hj =\n    h.hj ||\n    function() {\n      (h.hj.q = h.hj.q || []).push(arguments);\n    };\n  h._hjSettings = { hjid: 566501, hjsv: 6 };\n  a = o.getElementsByTagName("head")[0];\n  r = o.createElement("script");\n  r.async = 1;\n  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;\n  a.appendChild(r);\n})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL1cd125cfd97b4773aba84d6cb72d55ba',
            name: 'US - Pricing Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/pricing/index.html', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['cisco.com', 'webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "(function(h,o,t,j,a,r){\nh.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\nh._hjSettings={hjid:566501,hjsv:6};\na=o.getElementsByTagName('head')[0];\nr=o.createElement('script');r.async=1;\nr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\na.appendChild(r);\n})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL1fa7066ceeb248d6836e505a88228298',
            name: 'WebEx Meetings Free Trial Info',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/pricing/info.html', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['cisco.com', 'ciscospark.com', 'webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.getTimeToComplete('start', 'gttcloading');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event148' }] },
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "(function(h,o,t,j,a,r){\nh.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\nh._hjSettings={hjid:566501,hjsv:6};\na=o.getElementsByTagName('head')[0];\nr=o.createElement('script');r.async=1;\nr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\na.appendChild(r);\n})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL224dbe0105ff4dfd8efb882c781b30ed',
            name: 'Spark Purchase - Product View',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/variable.js',
                settings: { name: 'DR Shopping Cart - Page Type', value: 'Shopping' },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: { pageName: 'wx:us:dr-shopping-cart:product-view' },
                },
              },
            ],
          },
          {
            id: 'RL23ae432486ed41f19a02923d87ca9efc',
            name: 'PL - homepage start for free',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.first-banner-left a.Button--blue--3At0v',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 90,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.webex.com', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC41c05e9a095445de865055c1e6401aa2-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RLd8de5c61e90b44af9953351998717bf0',
            name: 'FW - homepage',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector:
                    '.home-take-survey a.survey-action,a[href*="use.webex.com"],.homepage-learn-more a',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: true }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'button:section:%this.@cleanText%:%p_vl%',
                      },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'value', value: '%this.@cleanText%' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RLe1a44372355a471d9b1dbde38b44f32b',
            name: 'FW - Navigation',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '#mobile-menu-toggler a,.header__menu a',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: true }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'header:nav:%this.@cleanText%:%p_vl%',
                      },
                      { name: 'eVar72', type: 'value', value: '%this.@cleanText%' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'alias', value: 'eVar72' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event178' }, { name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL129b986d3342498583832d61b275b0b0',
            name: 'FW Footer-clicks',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector:
                    '#footer-mobile-menu-toggler .bottom-section-columns__categories a',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: true }],
                },
              },
            ],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'footer:link:%this.@cleanText%:%p_vl%',
                      },
                      { name: 'eVar73', type: 'value', value: '%this.@cleanText%' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'alias', value: 'eVar73' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event179' }, { name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCb484da6f4fa648a88e78c00cf96e4d37-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL418f610195f847e08ce53703a72be1d6',
            name: 'trackVideoFinish',
            events: [
              {
                modulePath: 'core/src/lib/events/elementExists.js',
                settings: { elementSelector: '.vjs-ended' },
                ruleOrder: 91,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.com', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: false,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC402eebbdf2a740baa4b58823c15455c3-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL43460e3755ea4d6bab40f710b64fc9d4',
            name: 'Sign Up Error Page',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'webex-signuperror' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.prop25 =
                        _satellite.getVar('SystemDown Error Code Value') +
                        ' : ' +
                        _satellite.getVar('SignUp Error Cookie');
                      s.prop31 = _satellite.getVar('Referrer');
                      try {
                        s.abort = true;
                      } catch (e) {}
                    },
                  },
                  trackerProperties: { events: [{ name: 'event71' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RL9b1a2c67a75a494b8853d68a27be9c36',
            name: 'FW - hp article click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.home-section-content article a',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    var gt = this.getAttribute('href');
                    if (gt.search('futureofwork.webex.com') > -1) {
                      var lnkClkN = gt
                        .replace(location.protocol + '//' + location.host + '/', '')
                        .replace(/\/$/, '')
                        .replace('/', ':');
                      if (lnkClkN !== '') {
                        _satellite.setVar('linkName', lnkClkN);
                      } else {
                        _satellite.setVar('linkName', 'home');
                      }
                      return true;
                    } else {
                      return false;
                    }
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: true }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'section:article:%linkName%:%p_vl%',
                      },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'value', value: '%linkName%' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%linkName%', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL46daead1238f43ad91918f5b30b7e83e',
            name: 'FT - Incorrect Pin',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'InvalidPin' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: { pageName: 'wx:free-trial:pin-check:incorrect-pin' },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCf30a05c3b87449f6842f652af076cd94-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RLedb8acf3bb43463dab71f14670d4929e',
            name: 'FW. Footer - Social links',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'footer .social-icons a',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: true }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'footer:svg:%this.getAttribute(aria-label)%:%pageName%',
                      },
                      { name: 'eVar92', type: 'value', value: '%this.getAttribute(aria-label)%' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'alias', value: 'eVar92' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }, { name: 'event180' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.getAttribute(title)%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf65768ee5dc6428c8d59b770c7c51292',
            name: 'FW - homepage ebook',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a[href*="ebooks.cisco.com"]',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: true }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    var gt = this.getAttribute('href');
                    var lnkClkN = gt
                      .replace(location.protocol + '//' + 'ebooks.cisco.com/', '')
                      .replace(/\/$/, '')
                      .replace('/', ':');
                    if (lnkClkN !== '') {
                      _satellite.setVar('linkName', lnkClkN);
                    }
                    return true;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.events = '';
                      s.prop10 = s.prop11 = '';
                    },
                  },
                  trackerProperties: { events: [{ name: 'event70' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'e-book:%linkName%', linkType: 'd' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL4726dcd9fcea406e992ed72e399901c0',
            name: 'PL - DR - all pages',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'buy\\.webex\\.com', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    '!function(){function r(){return NodeFilter.FILTER_ACCEPT}if(0<document.getElementsByClassName("dr_error").length){var e="",o="",t="",n=spark_data.customer_uuid;void 0===n&&(n="Session Expired"),"undefined"!=typeof $&&0<$("#dr_ServerError h1").length&&(e=$("#dr_ServerError h1").text(),void 0!==$("#dr_ServerError .dr_error p")[2]&&(o=$("#dr_ServerError .dr_error p")[2].textContent),c=document,t=document.createNodeIterator(c,NodeFilter.SHOW_COMMENT,r,!1).nextNode().nodeValue,d="DR_Server_Error",u=e,i=o,a=t,_=n,((s=window["adrum-config"]||(window["adrum-config"]={})).userEventInfo||(s.userEventInfo={})).PageView=function(){return{userData:{Error_Code:d,Error_Desc1:u,Error_Desc2:i,DR_Request_ID:a,Customer_uuid:_}}},$.getScript("https://cdn.appdynamics.com/adrum/adrum-latest.js",function(){}))}var d,u,i,a,_,s,c}();',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa1ae3b878c17419980d10e9e5f21f423',
            name: 'teams collab',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: 'video-conferencing|team-collaboration', valueIsRegex: true }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'setTimeout(function() {\ntry {\nwindow.chEmValStr=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\\.)+[A-Z]{2,4}$/i;window.chEmVal=/^[A-Z0-9._%+-]/i;function exscLnchStr(){LnTrkEvent(this,"event181","section:hero-banner:text-box:","enter email")}var gtEmVal=document.getElementById("email"),runIenfe=!0,runIenfeStr=!0;gtEmVal.onfocus=function(){runIenfeStr&&(exscLnchStr(),runIenfeStr=!1)};\ngtEmVal.onclick=function(){runIenfeStr&&(exscLnchStr(),runIenfeStr=!1)};gtEmVal.onpaste=function(){runIenfeStr&&(exscLnchStr(),runIenfeStr=!1)};\nwindow.chEmVal=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\\.)+[A-Z]{2,4}$/i;\nvar runIenfe2=true;\n\n\ndocument.getElementById("signupButton").onclick=function(){chEmVal.test(document.getElementById("email").value)&&(runIenfe&&(LnTrkEvent(this,"event181","section:hero-banner:button:","try free"),runIenfe2=!1))};\t\n} catch (e) {}\n}, 2000);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLaff42f785e06415491d0c0939576f75b',
            name: 'Contact LBX',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '\\/lbx\\/global_sales|lbx\\/call-me-country', valueIsRegex: true },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: { source: 'try{s.abort=true;}catch(e){}', language: 'javascript' },
              },
            ],
          },
          {
            id: 'RL49f075a3ce6646cdaadd88f1af0c8e45',
            name: 'Spark Purchase - Change Quantity eVar',
            events: [
              {
                modulePath: 'core/src/lib/events/entersViewport.js',
                settings: {
                  elementSelector: 'td.dr_productName.dr_futureSubRenewalStatePlan span',
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'buy', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['cisco.com', 'ciscospark.com', 'webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      try {
                        _satellite.cookie.set('offerFlag', 'change', { expires: 7 });
                      } catch (e) {}
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar77', type: 'value', value: 'Change Quantity' },
                      {
                        name: 'eVar74',
                        type: 'value',
                        value: '%DR Shopping Cart - Updated Subscription Quantity%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'DR Step 1 - Change Quantity Page ',
                  linkType: 'o',
                },
              },
            ],
          },
          {
            id: 'RLb075fc396d7d41ac88faff04db70a398',
            name: 'DR Confirmation Page - Click "Get Started"',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.dr_activationURL > a:nth-child(1)',
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'DR Confirmation Page - Click "Get Started"',
                  linkType: 'o',
                },
              },
            ],
          },
          {
            id: 'RL4f06606bebbd4ef1b13082e9059d73a8',
            name: 'AppDynamics Tracker',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 109 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '\\/lbx\\/', valueIsRegex: true }] },
                negate: true,
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    {
                      value: 'cart.webex.com|purchase.webex.com|purchase-int.webex.com',
                      valueIsRegex: true,
                    },
                  ],
                },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<script charset=\"UTF-8\">\nif (/\\/\\/origin-webex-[a-z]+\\.cisco\\.com/i.test(document.referrer)) {\n  _satellite.cookie.set('aemenv', 'test');\n} else if (/\\/\\/www\\.webex\\.com/i.test(document.referrer)) {\n  _satellite.cookie.set('aemenv', 'prod');\n}\n \nwindow['adrum-start-time'] = new Date().getTime();\n(function(config){\n    config.appKey = (_satellite.cookie.get('aemenv') === 'test') ? 'AD-AAB-AAR-UKW' : 'AD-AAB-AAM-ABS';\n    config.adrumExtUrlHttp = 'http://cdn.appdynamics.com';\n    config.adrumExtUrlHttps = 'https://cdn.appdynamics.com';\n    config.beaconUrlHttp = 'http://col.eum-appdynamics.com';\n    config.beaconUrlHttps = 'https://col.eum-appdynamics.com';\n    config.xd = {enable : true};\n})(window['adrum-config'] || (window['adrum-config'] = {}));\nif ('https:' === document.location.protocol) {\n    document.write(unescape('%3Cscript')\n + \" src='https://cdn.appdynamics.com/adrum/adrum-4.4.3.717.js' \"\n + \" type='text/javascript' charset='UTF-8'\" \n + unescape('%3E%3C/script%3E'));\n} else {\n    document.write(unescape('%3Cscript')\n + \" src='http://cdn.appdynamics.com/adrum/adrum-4.4.3.717.js' \"\n + \" type='text/javascript' charset='UTF-8'\" \n + unescape('%3E%3C/script%3E'));\n}\n\n</script>",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL6c2b42d31d124377903ac4ca49d3085b',
            name: 'DR Purchase - Confirmation Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 8 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'id', value: '^ThankYouPage$', valueIsRegex: true },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'buy\\.webex\\.com', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.products = _satellite.getVar('DR Shopping Cart - Confirmation Products');
                    },
                  },
                  trackerProperties: {
                    props: [
                      { name: 'prop34', type: 'value', value: '%DR Shopping Cart - Order ID%' },
                      {
                        name: 'prop71',
                        type: 'value',
                        value: '%DR Shopping Cart - Payment Modality%',
                      },
                    ],
                    events: [
                      { name: 'purchase', value: '%DR Shopping Cart - Order ID%' },
                      { name: 'event113', value: '%DR Shopping Cart - Order ID%' },
                      { name: 'event16' },
                      { name: 'event101' },
                      { name: 'event102' },
                    ],
                    pageName: 'wx:dr-shopping-cart:purchase-confirmation',
                  },
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "var spkOfferf = _satellite.cookie.get('offerFlag');\nswitch(spkOfferf){\n case 'direct':\n\t\t_satellite.track('spark-direct-purchase-pixels');\n    break;\n case 'upgrade':\n   _satellite.track('spark-f2p-purchase-pixels');\n   break;\n case 'change':\n    break;\n default\t:\n  \tbreak;\n}\n\n\nvar wbxOfferf = _satellite.cookie.get('wbxofferFlag')\nswitch(wbxOfferf){\ncase 'direct':\n_satellite.track('wbx-direct-purchase-pixels');\n    var exdate=new Date(); \nexdate.setDate(exdate.getDate() + 180);document.cookie=\"mc-spark=direct-purchase; expires=\" + exdate.toUTCString() + \"; path=/; domain=.webex.com\";\nbreak;\ncase 'upgrade':\n_satellite.track('wbx-f2p-purchase-pixels');\n    var exdate=new Date(); \nexdate.setDate(exdate.getDate() + 180);document.cookie=\"mc-spark=upgrade-purchase; expires=\" + exdate.toUTCString() + \"; path=/; domain=.webex.com\";\nbreak;\ncase 'change':\nbreak;\ndefault\t:\nbreak;\n}",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "/*adobe.target.trackEvent({ \n\tmbox: 'orderConfirmtion',\n\tparams: {\n\t\tproductPurchasedId: _satellite.getVar( 'DR Shopping Cart - Product ID' ),\n\t\torderTotal: _satellite.getVar( 'DR Shopping Cart - Order Total' ),\n\t\torderId: _satellite.getVar( 'DR Shopping Cart - Order ID' ),\n        billingMode: _satellite.getVar( 'purchased_billing_mode' )\n\t}\n});\n*/",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb72cd8425af145028fdb1767d53552d6',
            name: 'collaboration page | accordions',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.circle-title',
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'the-future-of-work.html', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'section:accordion:%this.@cleanText%:%pageName%',
                      },
                    ],
                    props: [
                      { name: 'prop10', type: 'value', value: '%this.@cleanText%' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf3667d3323344fd7a11d0e209bace524',
            name: 'Free trial 2.0',
            events: [
              { modulePath: 'core/src/lib/events/historyChange.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: true },
                  leftOperand: '%s_url%',
                  rightOperand: 'cart.webex.com',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC3e8f8bdea8b346dabd4bc771e2b7a188-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL59144d860aed4b3697af72c43b7bbf36',
            name: 'hp- btn2',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.first-banner-left .hero-btn2',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 100,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'www.webex.com|www.webex.co.it', valueIsRegex: true }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      if (typeof $ !== 'undefined') {
                        var selCountry;
                        try {
                          selCountry = $('.wbx-region-name').text().toLowerCase();
                        } catch (e) {}
                        if (typeof selCountry == undefined) {
                          selCountry = '';
                        }
                      }
                      if (typeof amplitude !== 'undefined') {
                        var ev_p = {
                          button_name: 'start free test meeting',
                          location: 'herobanner',
                          pageUrl: document.URL,
                          selCountry: selCountry,
                        };
                        amplitude.getInstance().logEvent('wx_clk_testing-meeting', ev_p);
                      }
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'section:hero:button:start free test meeting:%pageName%',
                      },
                      { name: 'eVar87', type: 'value', value: 'home page hero section' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'value', value: 'start free test meeting' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'start free test meeting', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLc10c4f2fb4374fe79741ae0c4f86c64f',
            name: 'Adwords - Offline Conversion Tracking Tag',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'gclid', value: '(.*)', valueIsRegex: true },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "function setCookie(name, value, days){\n    var date = new Date();\n    date.setTime(date.getTime() + (days*24*60*60*1000)); \n    var expires = \"; expires=\" + date.toGMTString();\n    document.cookie = name + \"=\" + value + expires + \";path=/\";\n}\nfunction getParam(p){\n    var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);\n    return match && decodeURIComponent(match[1].replace(/\\+/g, ' '));\n}\nvar gclid = getParam('gclid');\nif(gclid){\n    var gclsrc = getParam('gclsrc');\n    if(!gclsrc || gclsrc.indexOf('aw') !== -1){\n\t    setCookie('gclid', gclid, 90);\n\t}\n}",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLe42d18130f9148599e28fbac0b521ddc',
            name: 'CDC Tracking: Tealium',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 105 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: {
                  domains: [
                    'webex.au',
                    'webex.br',
                    'webex.ca',
                    'webex.co.in',
                    'webex.co.it',
                    'webex.co.jp',
                    'webex.co.kr',
                    'webex.com',
                    'webex.com.au',
                    'webex.com.br',
                    'webex.com.cn',
                    'webex.com.hk',
                    'webex.com.mx',
                    'webex.co.uk',
                    'webex.de',
                    'webex.es',
                    'webex.fr',
                    'webex.it',
                    'webex.mx',
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: '^(futureofwork)\\.webex\\.com$', valueIsRegex: true }],
                },
                negate: true,
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '\\/(lbx|post-meeting)\\/', valueIsRegex: true },
                    { value: 'user_ci_uuid=', valueIsRegex: true },
                  ],
                },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "ctmProfile = \"collaboration\";\n  \n  (function(a,b,c,d){\n    a='//www.cisco.com/c/dam/cdc/t/ctm.js';\n    b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=false;\n    a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);\n    })();\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb3abc6661a2547bca0502ced105b9fc8',
            name: 'hotjar-566501',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'pricing/free-trial.html', valueIsRegex: true },
                    { value: '/pricing/info.html', valueIsRegex: true },
                    { value: 'pricing/signup.html', valueIsRegex: true },
                    { value: 'pricing/emailsent.html', valueIsRegex: true },
                    { value: 'pricing/free-trial-DG.html', valueIsRegex: true },
                    { value: '/pricing/index.html', valueIsRegex: true },
                    { value: 'ShoppingCartPage', valueIsRegex: true },
                    { value: 'pricing/trial/confirmationpage.html', valueIsRegex: true },
                    { value: 'AddressPaymentInfoPage', valueIsRegex: true },
                    { value: '\\/lbx\\/', valueIsRegex: true },
                  ],
                },
                negate: true,
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'cart\\.webex\\.com', valueIsRegex: true }] },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '(function(h, o, t, j, a, r) {\n  h.hj =\n    h.hj ||\n    function() {\n      (h.hj.q = h.hj.q || []).push(arguments);\n    };\n  h._hjSettings = { hjid: 566501, hjsv: 5 };\n  a = o.getElementsByTagName("head")[0];\n  r = o.createElement("script");\n  r.async = 1;\n  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;\n  a.appendChild(r);\n})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL59a4c56249834e0fb3cad7441b4fff49',
            name: 'Future of work - start for free bottom',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.cog-section6 .section6-btn-box a.btn-try',
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/the-future-of-work.html', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'section:button:start for free:%pageName%',
                      },
                      { name: 'eVar87', type: 'value', value: 'future of work last section' },
                    ],
                    props: [
                      { name: 'prop10', type: 'value', value: 'start for free' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'start for free', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLc678d361e63145b0b5933bf357572164',
            name: 'Overlay - Free to Paid Lightbox',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [{ value: '/MyAccountWeb/changeorder.do', valueIsRegex: true }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'userUpgradeOption', value: 'genericupgrade' },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    if (userObj.locale === 'en_US') {
                      return true;
                    }
                  },
                },
              },
            ],
            actions: [],
          },
          {
            id: 'RLce1f9688e84e4f489b1217fd84754987',
            name: 'section clk',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.Item--item__content--1Wtee .Item--item__button--2c6Ye',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'www.webex.com|www.webex.co.it', valueIsRegex: true }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      if (typeof $ !== 'undefined') {
                        var selCountry;
                        try {
                          selCountry = $('.wbx-region-name').text().toLowerCase();
                        } catch (e) {}
                        if (typeof selCountry == undefined) {
                          selCountry = '';
                        }
                      }
                      if (typeof amplitude !== 'undefined') {
                        var ev_p = {
                          button_name: 'discover webex meetings',
                          location: 'page-section',
                          pageUrl: document.URL,
                          selCountry: selCountry,
                        };
                        amplitude.getInstance().logEvent('wx_clk_video-conferencing', ev_p);
                      }
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'section:link:discover webex meetings:%pageName%',
                      },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'value', value: 'discover webex meetings' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'discover webex meetings', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLd1a4e672f8c947dc87adb20c7a43a0e9',
            name: 'host and join cta',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 45 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    {
                      value: 'pricing\\/free-trial\\.html|pricing\\/free\\.html',
                      valueIsRegex: true,
                    },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'setTimeout(function(){ \n$(\'.link-join\').click(function(){$thisTxt=$(this).text(); LnTrkEvent(this,"event181","header:button:",$thisTxt.trim());})\n}, 1500);\n\n\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL62afb2317b9b430684b69c10e458a885',
            name: 'US Contact Sales Submit Click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { anchorDelay: 100, elementSelector: '.cta-1' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'contact-sales.html', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC8706cb2e3b6c425e8f810e4db0e3a141-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL4a69bebbdb9346dba7619e36b725f1a5',
            name: 'Navigation clicks',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.co', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'if(typeof $!==\'undefined\'){\ntry{setTimeout(function(){$("#wbx-header .wbx-header-products a.wbx-header-popup-toggle,.wbx-header-menu-list-item.wbx-header-devices,#wbx-header .wbx-header-resources a.wbx-header-popup-toggle,#wbx-header .wbx-header-menu-plans a,#wbx-header .wbx-header-help-center a,#wbx-header .wbx-header-join a,#wbx-header .wbx-header-signin a.SEOPreventDefault").click(function(){var a=$(this),b=a.attr("aria-expanded");a=a.text().toLowerCase().trim();"true"!==b&&ClickLnTrkNv(this,"event178,event181","header:nav:",a)});$("#wbx-header .wbx-header-region a.wbx-header-popup-toggle").click(function(){"true"!==\n$(this).attr("aria-expanded")&&ClickLnTrkNv(this,"event178,event181","header:nav:","country selector")}); $("#wbx-header .wbx-header-popup-list .wbx-header-popup-list-item a.wbx-header-product-eyebrow").click(function(){var a=$(this),b=a.parents(".wbx-header-popup-menu").children("a:first").text().toLowerCase().trim();a=a.text().toLowerCase().trim();"undefined"!==b&&"undefined"!==a&&ClickLnTrkNv(this,"event178,event181","header:nav:"+b+":",a)});$("#wbx-header .wbx-header-region .wbx-header-popup .region-select-list .region-item a").click(function(){var a=\n$(this).text().toLowerCase().trim();"undefined"!==a&&ClickLnTrkNv(this,"event178,event181","header:nav:country selector:",a)});$("#wbx-header .wbx-header-signin .wbx-header-popup-list .wbx-header-popup-list-item a").click(function(){var a=$(this),b=a.parents(".wbx-header-popup-menu").children("a:first").text().toLowerCase().trim();a=a.children(".wbx-header-product-eyebrow").text().toLowerCase().trim();"undefined"!==b&&"undefined"!==a&&0!==a.length&&ClickLnTrkNv(this,"event178,event181","header:nav:"+b+":",a)})\nif(document.URL.indexOf(\'/fr/\')>-1|| document.URL.indexOf(\'/de/\')>-1){\n$("#wbx-header .wbx-header-signin .wbx-header-popup-list .wbx-header-popup-list-item a").click(function(){var a=$(this),b=a.parents(".wbx-header-popup-menu").children("a:first").text().toLowerCase().trim();a=a.text().toLowerCase().trim();"undefined"!==b&&"undefined"!==a&&ClickLnTrkNv(this,"event178,event181","header:nav:"+b+":",a)})}},2E3);\n}catch(e){}\n}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL6511d0ce9db5461db2e6a610ae93cb87',
            name: 'orderConfirmPageBooking mbox',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/variable.js',
                settings: { name: 'DR Shopping Cart - Page Type', value: 'Checkout' },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    if (spark_data.order_id == null) {
                      return false;
                    } else {
                      if (window.location.href.indexOf('buy.webex') > -1) return true;
                    }
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<div id="orderConfirmPageMboxDiv" style="display:none; visibility:hidden;"></div>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL23efd8df1bc142c5957dcd1e47aac7eb',
            name: 'Original TrackID Cookie Create',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    var cookieCrumb = _satellite.cookie.get('OrigTrackID');
                    if (cookieCrumb == null) {
                      if (window.location.href.indexOf('TrackID=') == -1) {
                        return false;
                      } else {
                        return true;
                      }
                    } else {
                      return false;
                    }
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "var urlTrackID = _satellite.getVar('TrackID');\ntry{\n  _satellite.cookie.set('OrigTrackID', urlTrackID, { expires: 90 });\n//_satellite.setCookie(\"OrigTrackID\",urlTrackID,90);\n}catch(e){}",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL25252fe2727a493a929448b834053517',
            name: 'SystemDown Page Load',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'systemdown.html', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.prop25 =
                        _satellite.getVar('SystemDown Error Code Value') +
                        ' : ' +
                        _satellite.getVar('SignUp Error Cookie');
                      s.prop31 = _satellite.getVar('Referrer');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event71' }] },
                },
              },
            ],
          },
          {
            id: 'RL1ccb261e36924188b294cd496268ac65',
            name: 'zBT-Rule',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '\\/lbx\\/', valueIsRegex: true }] },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'try{var getSiteCatalystURL=window.location.href.replace(location.protocol+"//","").substr(0,250)\nif(document.URL.indexOf(\'/pricing/cart.html\')>-1){getSiteCatalystURL=getSiteCatalystURL.substr(0,50)}\n}catch(b){}\nwindow.ClickLnTrkNv=function(b,c,d,a){ s.account="webexglobal,webexgli";\n  s_account="webexglobal,webexgli";\n  var s=s_gi(s_account);s.account=s_account;window.s=s; try{var e=a.lastIndexOf("/")+1;s.prop10=s.prop11="";a=a.substring(e);a=a.toLowerCase();a=a.replace(/\\//g,":").replace("#","");s.eVar72=a;s.prop10="D=v72";a=d+a+":"+_satellite.getVar(\'p_vl\');s.eVar43=a;s.prop11="D=v43";"undefined"!==typeof getSiteCatalystURL&&(s.prop9=getSiteCatalystURL);s.events=c;s.linkTrackEvents=c;s.linkTrackVars="events,eVar43,eVar72,prop9,prop10,prop11";s.tl(b,"o",a);s.linkTrackVars="None";s.linkTrackEvents="None";s.events=\'\';}catch(f){}};\nwindow.LnTrkEvent=function(c,b,d,a){try{var e=a.lastIndexOf("/")+1;s.prop10=s.prop11="";a=a.substring(e);a=a.toLowerCase();a=a.replace(/\\//g,":").replace("#","");s.eVar117=s.prop10=a.replace(/:play|:pause|:completed|:continue-to-play/,\'\');"undefined"!==typeof getSiteCatalystURL&&(s.prop9=getSiteCatalystURL);a=d+a+":"+_satellite.getVar(\'p_vl\');s.eVar43=a;s.prop11="D=v43";s.events=b;s.linkTrackEvents=b;s.linkTrackVars="events,eVar43,eVar117,prop9,prop10,prop11";s.tl(c,"o",a);s.linkTrackVars="None";s.linkTrackEvents="None";s.events=\'\';}catch(f){}};\nwindow.LnTrkCrt=function(b,c,d,a,p,l,h,u,q){try{var e=a.lastIndexOf("/")+1;s.prop10=s.prop11="";a=a.substring(e);a=a.toLowerCase();a=a.replace(/\\//g,":").replace("#","");s.eVar112=h;s.eVar111=l;s.eVar110=p;s.eVar113=q;s.prop10=a;a=d+a+":"+_satellite.getVar(\'p_vl\');s.eVar43=a;s.prop11="D=v43";"undefined"!==typeof getSiteCatalystURL&&(s.prop9=getSiteCatalystURL);s.events=c;s.contextData[\'dbdb9\']=u;s.linkTrackEvents=c;s.linkTrackVars="events,eVar43,eVar110,eVar111,eVar112,eVar113,prop9,prop10,prop11,contextData.dbdb9";s.tl(b,"o",a);s.linkTrackVars="None";s.linkTrackEvents="None"}catch(f){}};\nwindow.ClkPlnTrk=function(b,c,d,a,p,l){try{var e=a.lastIndexOf("/")+1;s.prop10=s.prop11="";a=a.substring(e);a=a.toLowerCase();a=a.replace(/\\//g,":").replace("#","");s.eVar105=l;s.eVar104=p;s.prop10=a;a=d+a+":"+_satellite.getVar(\'p_vl\');s.eVar43=a;s.prop11="D=v43";"undefined"!==typeof getSiteCatalystURL&&(s.prop9=getSiteCatalystURL);s.events=c;s.linkTrackEvents=c;s.linkTrackVars="events,eVar43,eVar104,eVar105,prop9,prop10,prop11";s.tl(b,"o",a);s.linkTrackVars="None";s.linkTrackEvents="None";s.events=\'\';}catch(f){}};\n\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL29583091428142f59431d63ff1afbbae',
            name: 'FT - Activation success',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'actSuccess' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.eVar108 = s.getTimeToComplete('stop', 'pchk');
                      s.eVar100 = s.getTimeToComplete('stop', 'ordSt');
                    },
                  },
                  trackerProperties: { pageName: 'wx:free-trial:signup:success' },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RLda61ac0efae0467fa54062df70aff61d',
            name: 'DR - Server Error',
            events: [
              {
                modulePath: 'core/src/lib/events/entersViewport.js',
                settings: { elementSelector: '#dr_ServerError.dr_Content' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'buy', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['ciscospark.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'wx:us:shopping-cart:%DR Shopping Cart - Server Error Number%',
                  linkType: 'o',
                },
              },
            ],
          },
          {
            id: 'RL92b12e6ef2be4d5eb3e89a8164ee0b91',
            name: 'WebEx Meetings Free Trial Sign Up',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'pricing/signup.html', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['cisco.com', 'webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event151' }] } },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '(function(h, o, t, j, a, r) {\n  h.hj =\n    h.hj ||\n    function() {\n      (h.hj.q = h.hj.q || []).push(arguments);\n    };\n  h._hjSettings = { hjid: 566501, hjsv: 6 };\n  a = o.getElementsByTagName("head")[0];\n  r = o.createElement("script");\n  r.async = 1;\n  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;\n  a.appendChild(r);\n})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL90ff07bf9de44aa5be202cb2d7ca09ae',
            name: 'wx home',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '^(\\/)$', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    {
                      value: '^(cart|purchase|futureofwork)(-int)?\\.webex\\.com',
                      valueIsRegex: true,
                    },
                  ],
                },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: false,
                  source:
                    'setTimeout(function(){$(\'.Button--button--wGVl3\').click(function(){var gtTxt=$(this).text().trim(); LnTrkEvent(this,"event181","section:hero-banner:button:",gtTxt); })\n$(\'.Product--product__src--2hZEG\').click(function(){var gtTxt=$(this).attr(\'alt\').toLowerCase(); LnTrkEvent(this,"event181","section:image:",gtTxt); })\n     $(\'.Plans--plans__header--1qH4N a,.learn-more-btn\').click(function(){var gtTxt=$(this).text().trim(); LnTrkEvent(this,"event181","section:button:",gtTxt); })\n     $(\'.img-succeeds-spencer\').click(function(){ LnTrkEvent(this,"event181","section:image:",\'spencer-dinwiddie\'); })\n     $(\'.HowTo--how__carousel--31JoY .Card--card__heading--1TLJC\').click(function(){var gtTxt=$(this).text().trim();gtTxt=gtTxt.substr(0,40); LnTrkEvent(this,"event181","section:link:",gtTxt); })                 \n$(\'.LinkButton--link--1DgYM h3,.LinkButton--link--1DgYM span,.Item--item__button--2c6Ye,#helloBar a,.meetings-app,.teams-app,.hero-links-block a,.stay-link1,.stay-link2 \').click(function(){var gtTxt=$(this).text().trim(); LnTrkEvent(this,"event181","section:link:",gtTxt); })\n$(\'.hero-btn3.at-element-click-tracking\').click(function(){ LnTrkEvent(this,"event181","section:hero:button:","sign up now for free"); })\n                      \n                     }, 2000);\n\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL2997320c9f2e47329be7444b81ba8fe2',
            name: 'WebEx Meetings Free Trial Email Sent',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'pricing/emailsent.html', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['cisco.com', 'webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.getTimeToComplete('start', 'em-chk');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event145' }] },
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "(function(h,o,t,j,a,r){\nh.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\nh._hjSettings={hjid:566501,hjsv:6};\na=o.getElementsByTagName('head')[0];\nr=o.createElement('script');r.async=1;\nr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\na.appendChild(r);\n})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLdd5e33d5438a418c845e7eef8959f88a',
            name: 'FT - Activation progress',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'actProgress' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: { pageName: 'wx:free-trial:activation:in-progress' },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC5d912b7fe4964f00a4be92bcdc665905-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RLdfc61a26b6fe4ef3b3e25806281647c7',
            name: 'PL - AEM prod - www.webex.com/home.html',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '^\\/home\\.html$', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    "(function() {\n\n  var clickables = [\n    {\n      section: 'Work better, together.',\n      location: 'CTA buttons',\n      label: 'Start for Free',\n      type: 'button',\n      selector: '.HomepageHero--homepageHero__buttons--i9QgT .Button--blue--3At0v',\n    },\n    {\n      section: 'Work better, together.',\n      location: 'CTA buttons',\n      label: 'See Pricing',\n      type: 'button',\n      selector: '.HomepageHero--homepageHero__buttons--i9QgT .Button--transparent--2ueDz',\n    },\n    {\n      section: 'Hassle-free video ...',\n      location: 'copy',\n      label: 'Discover Webex Meetings',\n      type: 'button',\n      selector: '.Item--item__button--2c6Ye',\n    },\n    {\n      section: 'Get more done.',\n      location: 'quadrant Webex Meetings',\n      label: 'Meetings product',\n      type: 'image',\n      selector: '.Product--product--1dvFl:nth-child(1)>.Product--product__img--1_CTe>a',\n    },\n    {\n      section: 'Get more done.',\n      location: 'quadrant Webex Meetings',\n      label: 'Explore Video Conferencing',\n      type: 'text',\n      selector: '.Product--product--1dvFl:nth-child(1)>a',\n    },\n    {\n      section: 'Get more done.',\n      location: 'quadrant Webex Teams',\n      label: 'Teams product',\n      type: 'image',\n      selector: '.Product--product--1dvFl:nth-child(2)>.Product--product__img--1_CTe>a',\n    },\n    {\n      section: 'Get more done.',\n      location: 'quadrant Webex Teams',\n      label: 'Explore Team Collaboration',\n      type: 'text',\n      selector: '.Product--product--1dvFl:nth-child(2)>a',\n    },\n    {\n      section: 'Get more done.',\n      location: 'quadrant Webex Calling',\n      label: 'Calling product',\n      type: 'image',\n      selector: '.Product--product--1dvFl:nth-child(3)>.Product--product__img--1_CTe>a',\n    },\n    {\n      section: 'Get more done.',\n      location: 'quadrant Webex Calling',\n      label: 'Explore Cloud Calling',\n      type: 'text',\n      selector: '.Product--product--1dvFl:nth-child(3)>a',\n    },\n    {\n      section: 'Get more done.',\n      location: 'quadrant Webex Devices',\n      label: 'Devices product',\n      type: 'image',\n      selector: '.Product--product--1dvFl:nth-child(4)>.Product--product__img--1_CTe>a',\n    },\n    {\n      section: 'Get more done.',\n      location: 'quadrant Webex Devices',\n      label: 'Explore Collaboration Devices',\n      type: 'text',\n      selector: '.Product--product--1dvFl:nth-child(4)>a',\n    },\n    {\n      section: 'Get more done.',\n      location: 'downloads',\n      label: 'Meetings',\n      type: 'button',\n      selector: '.Products--products__sidebar--3BMkx>div>a:nth-child(2)',\n    },\n    {\n      section: 'Get more done.',\n      location: 'downloads',\n      label: 'Teams',\n      type: 'button',\n      selector: '.Products--products__sidebar--3BMkx>div>a:nth-child(3)',\n    },\n    {\n      section: 'Get more done.',\n      location: 'products',\n      label: 'Training',\n      type: 'text',\n      selector: '.Products--products__sidebar--3BMkx>div>div>a:nth-child(1)',\n    },\n    {\n      section: 'Get more done.',\n      location: 'products',\n      label: 'Webinars',\n      type: 'text',\n      selector: '.Products--products__sidebar--3BMkx>div>div>a:nth-child(2)',\n    },\n    {\n      section: 'Get more done.',\n      location: 'products',\n      label: 'Video Support',\n      type: 'text',\n      selector: '.Products--products__sidebar--3BMkx>div>div>a:nth-child(3)',\n    },\n    {\n      section: 'Webex works well ...',\n      location: 'copy',\n      label: 'Learn More',\n      type: 'button',\n      selector: '.learn-more-btn a',\n    },\n    {\n      section: 'Insights & Resources ...',\n      location: 'carousel white papers',\n      label: 'The future of ...',\n      type: 'text',\n      selector: '.Card--card__group--17oEA:nth-child(1) a',\n    },\n    {\n      section: 'Insights & Resources ...',\n      location: 'carousel blog',\n      label: 'Artificial intelligence is ...',\n      type: 'text',\n      selector: '.Card--card__group--17oEA:nth-child(2) a',\n    },\n    {\n      section: 'Insights & Resources ...',\n      location: 'carousel ebooks',\n      label: 'Teamwork makes the ...',\n      type: 'text',\n      selector: '.Card--card__group--17oEA:nth-child(3) a',\n    },\n    {\n      section: 'Insights & Resources ...',\n      location: 'carousel what\\'s new',\n      label: 'Collaboration technology essentials ...',\n      type: 'text',\n      selector: '.Card--card__group--17oEA:nth-child(4) a',\n    },\n    {\n      section: 'Get started with ...',\n      location: 'copy',\n      label: 'View Plans & Pricing',\n      type: 'button',\n      selector: '.Plans--plans__header--1qH4N a',\n    },\n  ];\n\n  var configureTracking = function(clickable) {\n    try {\n      var element = document.querySelector(clickable.selector);\n\n      element.addEventListener('click', function() {\n        try {\n          var path = clickable.type + ':section:' + clickable.section + ':';\n          var clickable_name = clickable.location + '|' + clickable.label;\n          LnTrkEvent(this, 'event181', path, clickable_name);\n        } catch (e) {\n          //Do nothing.\n        }\n      });\n    } catch (e) {\n      //Do nothing.\n    }\n  };\n\n  clickables.map(configureTracking);\n\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLe17844bee0544916b1723a18712085dc',
            name: 'WebEx Meetings Free Trial -Loading Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [{ value: 'pricing/trial/loadingpage.html', valueIsRegex: true }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['cisco.com', 'webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.getTimeToComplete('start', 'gttcconfirmation');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event147' }] },
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "(function(h,o,t,j,a,r){\nh.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\nh._hjSettings={hjid:566501,hjsv:6};\na=o.getElementsByTagName('head')[0];\nr=o.createElement('script');r.async=1;\nr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\na.appendChild(r);\n})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLeb162073282f4352bc5b03f44b292ffd',
            name: 'purchase | db 2.0',
            events: [
              { modulePath: 'core/src/lib/events/historyChange.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: true },
                  leftOperand: '%s_url%',
                  rightOperand: 'purchase.webex.com|purchase-int.webex.com',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC0c38299a9f6e461a93a32907c5f574ed-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RLb2a8545eb65c4bcabc9c53cfc725a519',
            name: 'FT - thankyou',
            events: [
              { modulePath: 'core/src/lib/events/historyChange.js', settings: {}, ruleOrder: 30 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'thankyou', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC1951792e40ed401d9faf2aac14c3c9b9-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RLde30fc2b03cb489d997a12d7ca777ffe',
            name: 'FT - Create trial',
            events: [
              { modulePath: 'core/src/lib/events/historyChange.js', settings: {}, ruleOrder: 30 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'create-trial', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: false,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC4c3d468fe74f44bf9a41514f540a9e8f-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RLbde3aa04a43d4db690d7b79c2de30f83',
            name: 'essential | update program',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    {
                      value:
                        'update-program\\/admin\\.html|update-program/end-user.html|get-started-admin.html',
                      valueIsRegex: true,
                    },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar43', type: 'value', value: 'section:%this.@cleanText%:%p_vl%' },
                      { name: 'eVar117', type: 'value', value: '%this.@cleanText%' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'alias', value: 'eVar117' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL6d19203ae77c4af484d7ad7c233d269f',
            name: 'trackVideoPlay',
            events: [
              {
                modulePath: 'core/src/lib/events/elementExists.js',
                settings: { elementSelector: '#HpPlayer_html5_api' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.com', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC20285b59656a48b5a88d8973e21ab30a-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCc5aea7268230440c98ca4385e66ebdf1-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL476187dfdbe14c28abb469685a5b76b7',
            name: 'essential | getting started admin',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a>img',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'get-started-admin.html', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar43', type: 'value', value: 'section:%this.className%:%p_vl%' },
                      { name: 'eVar117', type: 'value', value: '%this.className%' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'alias', value: 'eVar117' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL65c04ac5216248d894a2d7fbcfc07df5',
            name: 'Pricing page plan',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    {
                      value: '\\/pricing\\/index\\.html|\\/pricing\\/index4\\.html',
                      valueIsRegex: true,
                    },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'setTimeout(function(){if(typeof $!=="undefined"){$("#buystarter,#buyplus,#buybus").click(function(){var getPl=$(this).parents(".offer-plan-box").find(".plan-name").text();var bPlan=$(".offer-plan-contain").attr("class").search("month");var bOption;if(bPlan>-1)bOption="monthly";else bOption="annual";ClkPlnTrk(this,"event181","button:section:",bOption+"-plan:"+getPl+":buy now",bOption,getPl)});$("#ent1 .offer-btn-cta").click(function(){var getPl=$(this).parents(".offer-plan-box").find(".plan-name").text();\nvar bPlan=$(".offer-plan-contain").attr("class").search("month");var bOption;if(bPlan>-1)bOption="monthly";else bOption="annual";if(document.URL.indexOf("index.html")>-1)ClkPlnTrk(this,"event181","button:section:",bOption+"-plan:"+getPl+":sign up",bOption,getPl);else ClkPlnTrk(this,"event181","button:section:",bOption+"-plan:"+getPl+":call now",bOption,getPl)});$(".offer-page.sec-3 .spark-title").click(function(){LnTrkEvent(this,"event181","link:section:","See-all-teams-feature")});$(".mc-more-info .tc-ec a").click(function(){LnTrkEvent(this,\n"event181","button:section:webex-event:","contact sales")});$(".mc-more-info .wx-edu a").click(function(){LnTrkEvent(this,"event181","button:section:webex-edu:","contact sales")});$(\'.touch-type .touch-btn a[href*="contact-sale"]\').click(function(){LnTrkEvent(this,"event181","button:section:talk-specialist:","contact sales")});$(\'.touch-type .touch-btn a[href*="cisco.com/contact"]\').click(function(){LnTrkEvent(this,"event181","button:section:get-support:","contact sales")});$(".touch-subtitle a.global-sales").click(function(){LnTrkEvent(this,\n"event181","link:section:talk-specialist:","call us")});$(".blue-module a").click(function(){LnTrkEvent(this,"event181","button:section:blue-module:","contact us")});$(".que-title").click(function(){var lt=$(this).text().trim().toLowerCase();lt=lt.substring(0,50);LnTrkEvent(this,"event181","link:section:question:",lt)});$(".features-more").click(function(){var $this=$(this);var text=$this.text();var head=$this.parents(".offer-plan-box-detail").siblings(".offer-plan-box").find(".plan-name").text();\nLnTrkEvent(this,"event181","link:accord:"+head+":",text)})}},400);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL3069e0d00496436bb360f7d0e728294a',
            name: 'hotjar cartWebex',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'cart\\.webex\\.com', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "(function(h,o,t,j,a,r){\nh.hj=h.hj||function()\n\n{(h.hj.q=h.hj.q||[]).push(arguments)}\n;\nh._hjSettings={hjid:1521503,hjsv:6};\na=o.getElementsByTagName('head')[0];\nr=o.createElement('script');r.async=1;\nr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\na.appendChild(r);\n})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL96e99566116449a783b205e44d2668c0',
            name: 'Host Button Floodlight',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'host-button-floodlight' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC28587a778f3d4988ac11e4cef6f8f863-source.js',
                  language: 'html',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL9c4d5a687a464c438312775fbb2eda19',
            name: 'Internal Search - New Site',
            events: [
              {
                modulePath: 'core/src/lib/events/entersViewport.js',
                settings: { elementSelector: '#wbx-search-results' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar58',
                        type: 'value',
                        value: '%Internal Search Keyword% : %Number of Search Results%',
                      },
                    ],
                    props: [
                      {
                        name: 'prop29',
                        type: 'value',
                        value: '%Internal Search Keyword% : %Number of Search Results%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Internal Search Performed', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL6683d5d0d05e46e3bb3436a0dee18eaf',
            name: 'DB - Activation success',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'actDbSuccess' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.eVar108 = s.getTimeToComplete('stop', 'pchk');
                      s.eVar100 = s.getTimeToComplete('stop', 'ordSt');
                    },
                  },
                  trackerProperties: { pageName: 'wx:direct-buy:signup:success' },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RL9ce9b282ed6c4db6b710c99f22f38e77',
            name: 'collaboration page | buttons',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.wbx-people-insights-cta, a.btn-download, a.btn-reg',
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'the-future-of-work.html', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'section:button:%this.@cleanText%:%pageName%',
                      },
                    ],
                    props: [
                      { name: 'prop10', type: 'value', value: '%this.@cleanText%' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL66dcecf6d2e1426abab6170d11743693',
            name: 'FT - Re-enter email',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'reEnterEmail' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'section:link:re-enter-email:%pageName%',
                      },
                    ],
                    props: [
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                      { name: 'prop10', type: 'value', value: 're-enter-email' },
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                    ],
                    pageName: 'wx:free-trial:re-enter-email',
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'section:link:re-enter-email:%pageName%',
                  linkType: 'o',
                },
              },
            ],
          },
          {
            id: 'RL96fc067e752d45658ae51adbfd00a444',
            name: 'PL - AEM localized - chat',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 200 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com.cn'] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: '^\\/((contact-sales|index)\\.html)?$', valueIsRegex: true }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'chat', value: '0' },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!----------------------------------------------------------->\n<!----------------------------------------------------------->\n<!-- chat begin -->\n<!----------------------------------------------------------->\n<link rel="stylesheet" type="text/css" href="/content/dam/webex/eopi/lib/LiveAgent/button.css" />\n<script>\n  var xhr;\n  if (window.XMLHttpRequest) {\n    // Mozilla, Safari...\n    xhr = new XMLHttpRequest();\n  } else if (window.ActiveXObject) {\n    // IE\n    xhr = new ActiveXObject(\'Msxml2.XMLHTTP\');\n  }\n  xhr.open(\'get\', \'/content/dam/webex/eopi/lib/LiveAgent/buff-bot-webex-020-d.js\', true);\n  xhr.onreadystatechange = function() {\n    if (xhr.readyState == 4) {\n      if ((xhr.status >= 200 && xhr.status < 3000) || xhr.status == 304) {\n        var script = document.createElement(\'script\');\n        script.type = \'text/javascript\';\n        script.text = xhr.responseText;\n        document.body.appendChild(script);\n      }\n    }\n  };\n  xhr.send(null);\n</script>\n\n<div class="c2c-component">\n  <div class="c2c-active" style="display:none;">\n    <a\n      class="c2c-button"\n      data-config-metrics-group="sm_luh"\n      data-config-metrics-title="right rail"\n      data-config-metrics-item="Chat Now"\n      href="javascript:void(0);"\n    >\n      <img\n        src="https://www.webex.com/content/dam/webex/eopi/Americas/USA/en_us/global/images/chat/chat-button-60-1.png"\n        alt=""\n        class="chat-icon"\n      />\n    </a>\n  </div>\n  <div class="c2c-inactive">\n    <!-- no chat available -->\n  </div>\n\n  <!-- DM:components/letushelp/letushelp-eot:V2.7.3 -->\n\n  <div class="dmc-proactivechat dmr c2c-proactive-modal ">\n    <div class="proac-head">\n      <div class="cisco-logo">\n        <img src="https://www.cisco.com/etc/designs/cdc/dm/chat/cisco-logo.svg" alt="" title="" />\n      </div>\n      <div class="proac-content">\n        <p>Chat live with a Cisco representative</p>\n      </div>\n      <div class="cisco-icon">\n        <a\n          class="c2c-proactive-dismiss"\n          href="javascript:void(0)"\n          alt="Decline the chat invitation"\n          title="Decline the chat invitation"\n          data-config-metrics-item="decline the chat invitation"\n          data-config-metrics-group="pop up chat"\n        >\n          <img src="https://www.cisco.com/etc/designs/cdc/dm/chat/close-icon.png" alt="" title="" />\n        </a>\n      </div>\n    </div>\n    <div class="proac-container">\n      <p class="content">Cisco:</p>\n      <ul>\n        <li>Welcome to Cisco!</li>\n        <li>How can I help you?</li>\n      </ul>\n    </div>\n\n    <ul class="cta">\n      <li>\n        <a\n          href="javascript:void(0);"\n          alt="Decline the chat invitation"\n          title="Decline the chat invitation"\n          data-config-metrics-item="decline the chat invitation"\n          data-config-metrics-group="pop up chat"\n          class="dmc-button atlantic pal-6 c2c-proactive-dismiss"\n          >No Thanks</a\n        >\n      </li>\n      <li>\n        <a\n          href="javascript:void(0);"\n          alt="Accept the chat invitation"\n          title="Accept the chat invitation"\n          data-config-metrics-item="accept the chat invitation"\n          data-config-metrics-group="pop up chat"\n          class="dmc-button atlantic pal-4 c2c-proactive-agree"\n          >Chat Now</a\n        >\n      </li>\n    </ul>\n  </div>\n</div>\n<!----------------------------------------------------------->\n<!-- chat end -->\n<!----------------------------------------------------------->\n<!----------------------------------------------------------->\n',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL9f99f31a9b814d9c8293fe4eef981fc7',
            name: 'start for free',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector:
                    '.wbx-header-menu-list .wbx-header-try-it-free a,.ft-header .cta-freetrial a',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.co', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      if (typeof $ !== 'undefined') {
                        var selCountry;
                        try {
                          selCountry = $('.wbx-region-name').text().toLowerCase();
                        } catch (e) {}
                        if (typeof selCountry == undefined) {
                          selCountry = '';
                        }
                      }
                      if (typeof amplitude !== 'undefined') {
                        var ev_p = {
                          button_name: 'start for free',
                          location: 'header',
                          pageUrl: document.URL,
                          selCountry: selCountry,
                        };
                        if (
                          document.URL.indexOf('contact-sales.html') < 0 &&
                          document.URL.indexOf('team-collaboration') < 0
                        ) {
                          amplitude.getInstance().logEvent('wx_clk_start-for-free', ev_p);
                        }
                        if (document.URL.indexOf('contact-sales.html') > -1) {
                          ev_p.button_name = 'try meetings free';
                          amplitude.getInstance().logEvent('wx_clk_try-meetings-free', ev_p);
                        }
                        if (document.URL.indexOf('team-collaboration.html') > -1) {
                          ev_p.button_name = 'try teams free';
                          amplitude.getInstance().logEvent('wx_clk_try-teams-free', ev_p);
                        }
                      }
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'header:nav:button:%freecta%:%pageName%',
                      },
                      { name: 'eVar72', type: 'value', value: '%freecta%' },
                      { name: 'eVar87', type: 'value', value: 'global header' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'alias', value: 'eVar72' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event178' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%freecta%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLae2f53e1f0984513acf953735fa7d700',
            name: 'pchk time',
            events: [
              { modulePath: 'core/src/lib/events/historyChange.js', settings: {}, ruleOrder: 20 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'pin-check', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC7a97c9c75ea746b0b05ed3def204e59c-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RL465473e216f6432cbfbc300a99450d30',
            name: 'PL - AEM unified - chat',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 200 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: '^www\\.webex\\.com$', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    {
                      value:
                        '^(\\/(de|es|fr|it|ja|ko|pt|zh))?\\/((contact-sales|contact-sales\\/contact-sales-thankyou|contact-sales-intl|contact-sales-intl\\/contact-sales-thankyou|downloads|faqs|index|pricing\\/index|remote-support|team-collaboration|training-online|video-conference-equipment|webinar)\\.html|video-conferencing)?$',
                      valueIsRegex: true,
                    },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'chat', value: '0' },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!----------------------------------------------------------->\n<!----------------------------------------------------------->\n<!-- chat begin -->\n<!----------------------------------------------------------->\n<link rel="stylesheet" type="text/css" href="/content/dam/webex/eopi/lib/LiveAgent/button.css" />\n<script>\n  var xhr;\n  if (window.XMLHttpRequest) {\n    // Mozilla, Safari...\n    xhr = new XMLHttpRequest();\n  } else if (window.ActiveXObject) {\n    // IE\n    xhr = new ActiveXObject(\'Msxml2.XMLHTTP\');\n  }\n  xhr.open(\'get\', \'/content/dam/webex/eopi/lib/LiveAgent/buff-bot-webex-020-d.js\', true);\n  xhr.onreadystatechange = function() {\n    if (xhr.readyState == 4) {\n      if ((xhr.status >= 200 && xhr.status < 3000) || xhr.status == 304) {\n        var script = document.createElement(\'script\');\n        script.type = \'text/javascript\';\n        script.text = xhr.responseText;\n        document.body.appendChild(script);\n      }\n    }\n  };\n  xhr.send(null);\n</script>\n\n<div class="c2c-component">\n  <div class="c2c-active" style="display:none;">\n    <a\n      class="c2c-button"\n      data-config-metrics-group="sm_luh"\n      data-config-metrics-title="right rail"\n      data-config-metrics-item="Chat Now"\n      href="javascript:void(0);"\n    >\n      <img\n        src="https://www.webex.com/content/dam/webex/eopi/Americas/USA/en_us/global/images/chat/chat-button-60-1.png"\n        alt=""\n        class="chat-icon"\n      />\n    </a>\n  </div>\n  <div class="c2c-inactive">\n    <!-- no chat available -->\n  </div>\n\n  <!-- DM:components/letushelp/letushelp-eot:V2.7.3 -->\n\n  <div class="dmc-proactivechat dmr c2c-proactive-modal ">\n    <div class="proac-head">\n      <div class="cisco-logo">\n        <img src="https://www.cisco.com/etc/designs/cdc/dm/chat/cisco-logo.svg" alt="" title="" />\n      </div>\n      <div class="proac-content">\n        <p>Chat live with a Cisco representative</p>\n      </div>\n      <div class="cisco-icon">\n        <a\n          class="c2c-proactive-dismiss"\n          href="javascript:void(0)"\n          alt="Decline the chat invitation"\n          title="Decline the chat invitation"\n          data-config-metrics-item="decline the chat invitation"\n          data-config-metrics-group="pop up chat"\n        >\n          <img src="https://www.cisco.com/etc/designs/cdc/dm/chat/close-icon.png" alt="" title="" />\n        </a>\n      </div>\n    </div>\n    <div class="proac-container">\n      <p class="content">Cisco:</p>\n      <ul>\n        <li>Welcome to Cisco!</li>\n        <li>How can I help you?</li>\n      </ul>\n    </div>\n\n    <ul class="cta">\n      <li>\n        <a\n          href="javascript:void(0);"\n          alt="Decline the chat invitation"\n          title="Decline the chat invitation"\n          data-config-metrics-item="decline the chat invitation"\n          data-config-metrics-group="pop up chat"\n          class="dmc-button atlantic pal-6 c2c-proactive-dismiss"\n          >No Thanks</a\n        >\n      </li>\n      <li>\n        <a\n          href="javascript:void(0);"\n          alt="Accept the chat invitation"\n          title="Accept the chat invitation"\n          data-config-metrics-item="accept the chat invitation"\n          data-config-metrics-group="pop up chat"\n          class="dmc-button atlantic pal-4 c2c-proactive-agree"\n          >Chat Now</a\n        >\n      </li>\n    </ul>\n  </div>\n</div>\n<!----------------------------------------------------------->\n<!-- chat end -->\n<!----------------------------------------------------------->\n<!----------------------------------------------------------->\n',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL6df3f14e91a243008af891e9f8c6f480',
            name: 'PL - AEM Prod - wx11-migration/meetings-upgrade- pages',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 13 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    {
                      value: '\\/wx11-migration\\/meetings-upgrade-is-on-the-way\\.html',
                      valueIsRegex: true,
                    },
                    {
                      value: '\\/wx11-migration\\/meetings-upgrade-has-arrived\\.html',
                      valueIsRegex: true,
                    },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source:
                    '!function(){function r(e){var r;try{r=AEM_data_layer.digitalData.page.pageInfo[e]||""}catch(e){r=""}return r}!function(){var e={page_url:r("destinationURL"),referrer:r("referringURL"),referring_domain:r("referringDomain")};try{amplitude.getInstance().logEvent("wx11-migration page viewed",e)}catch(e){}}()}();',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar116', type: 'value', value: '%Referrer: full URL%' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'wx11-migration-referrer', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL32fbe2a3669842f582edd4d927f35717',
            name: 'orderConfirmPage mbox',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/variable.js',
                settings: { name: 'DR Shopping Cart - Page Type', value: 'Checkout' },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    if (spark_data.order_id == null) {
                      return false;
                    } else {
                      if (window.location.href.indexOf('buy.webex') > -1) return true;
                    }
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<div id="orderConfirmPageMboxDiv" style="display:none; visibility:hidden;"></div>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL6c0717e4dd2149fa876fa3e84fb7976a',
            name: 'SignUp Country Dropdown',
            events: [
              {
                modulePath: 'core/src/lib/events/dataElementChange.js',
                settings: { name: 'FT Country' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'pricing\\/signup.html', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'dropdown:form:country:%FT Country%:%pageName%',
                      },
                    ],
                    props: [
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                      { name: 'prop10', type: 'value', value: '%FT Country%' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%FT Country%', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL3a67b5ea206b43c9ac18ce9c3e1b60ee',
            name: 'hp- btn1',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.first-banner-left .hero-btn1',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 100,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'www.webex.com|www.webex.co.it', valueIsRegex: true }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      if (typeof $ !== 'undefined') {
                        var selCountry;
                        try {
                          selCountry = $('.wbx-region-name').text().toLowerCase();
                        } catch (e) {}
                        if (typeof selCountry == undefined) {
                          selCountry = '';
                        }
                      }
                      if (typeof amplitude !== 'undefined') {
                        var ev_p = {
                          button_name: 'sign up now for free',
                          location: 'herobanner',
                          pageUrl: document.URL,
                          selCountry: selCountry,
                        };
                        amplitude.getInstance().logEvent('wx_clk_start-for-free', ev_p);
                      }
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'section:hero:button:sign up now for free:%pageName%',
                      },
                      { name: 'eVar87', type: 'value', value: 'home page hero section' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'value', value: 'sign up now for free' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'sign up now for free', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL3c4db4df8dce413581649aa94614a6b3',
            name: 'DB - Activation progress',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'actDbProgress' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: { pageName: 'wx:direct-buy:activation:in-progress' },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RL3e89b08fb28f4f5ba5f56d3a087afba0',
            name: 'Switch to Free Plan - Reason and Comments',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a#btn-reason-to-free',
                  bubbleFireIfChildFired: false,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (event, target) {
                    var selectValue = jQuery(this)
                      .parent()
                      .parent()
                      .find('#reason-type option:selected')
                      .text();
                    var comments = jQuery(this)
                      .parent()
                      .parent()
                      .find('textarea.cancel-comments')
                      .val();
                    var concat = selectValue + ' | ' + comments;
                    _satellite.setVar('cancel reasons', concat);
                    return true;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar78', type: 'value', value: '%cancel reasons%' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'Switch to Free - Cancel Plan',
                  linkType: 'o',
                },
              },
            ],
          },
          {
            id: 'RL6eba2aae699948e585bc95b45d7ebc97',
            name: 'Internal Search (Copy)',
            events: [
              {
                modulePath: 'core/src/lib/events/entersViewport.js',
                settings: {
                  elementSelector: 'div',
                  elementProperties: [{ name: 'className', value: 'results-box' }],
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar58',
                        type: 'value',
                        value: '%Internal Search Keyword% : %Number of Search Results%',
                      },
                    ],
                    props: [
                      {
                        name: 'prop29',
                        type: 'value',
                        value: '%Internal Search Keyword% : %Number of Search Results%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Internal Search Performed', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL752cd433f3234abf9da83995b2059a53',
            name: 'PL - AEM - Google Analytics',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 200 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: '^www\\.', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '\\/(lbx|post-meeting)\\/', valueIsRegex: true },
                    { value: '(email|FN|LN|p_url|user_ci_uuid)=', valueIsRegex: true },
                  ],
                },
                negate: true,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-584538-1\"></script>\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\n\ngtag('config', 'UA-584538-1');\n</script>",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL7553e54444674b588ff9c4012953218e',
            name: 'Spark Purchase - Verify Purchase Details',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 8 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/variable.js',
                settings: {
                  name: 'spark_data.page_name',
                  value: 'ThreePgCheckoutConfirmOrderPage',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (event, s) {
                      s.products = _satellite.getVar('DR Shopping Cart - Selection Products');
                    },
                  },
                  trackerProperties: {
                    events: [{ name: 'scCheckout' }, { name: 'event112' }],
                    pageName: 'wx:dr-shopping-cart:confirm-details',
                  },
                },
              },
            ],
          },
          {
            id: 'RL7c5d86a6c14e4bbd9ccaa92cca7c84d2',
            name: 'FT - Activation Failure',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'actFail' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { pageName: 'wx:free-trial:activation:failure' } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC395515161fd44dd9a9bf608bc3a7e3d1-source.js',
                  language: 'javascript',
                  isExternal: true,
                },
              },
            ],
          },
          {
            id: 'RLac0e4aa8147d414fbcd069c5c701fded',
            name: 'FW - homepage event section',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.events-and-webinars .event-item a.event-url',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: true }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value:
                          'button:section:event:%this.getAttribute(href)%:%this.@cleanText%:%p_vl%',
                      },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'value', value: '%this.@cleanText%' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL2feef503b8dd48ec887de4fdf894aca8',
            name: 'FW',
            events: [],
            conditions: [],
            actions: [],
          },
          {
            id: 'RL83913ca136d1436d9e448d5402fb53e1',
            name: 'Tealium - JavaScript',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.webex.com' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/2/tealium/test-bare.html', valueIsRegex: false }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source: 'console.log("Tealium JavaScript");\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL34d39aa8122c4c48851d63a5f6c6c522',
            name: 'Tealium - HTML',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.webex.com' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '^\\/2\\/tealium\\/', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<h1>Tealium HTML</h1>\n<script>\n  console.log("Tealium HTML");\n</script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLa7f7848a87c84b318e1fe5ca8377bbca',
            name: 'Tealium - JavaScript globally',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.webex.com' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '^\\/2\\/tealium\\/', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: true,
                  source: 'console.log("Tealium JavaScript globally");\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL332913ae08bf484a8e587b3b24231682',
            name: 'essential | get-started | click tracking',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'get-started/mt-', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'essentials.webex.com', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar43', type: 'value', value: 'section:%this.@cleanText%:%p_vl%' },
                      { name: 'eVar117', type: 'value', value: '%this.@cleanText%' },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'alias', value: 'eVar117' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@cleanText%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL0e626a7775c1457a84772f74630591b3',
            name: 'Cloud calling',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '#wbx-calling .container .cta',
                  bubbleFireIfParent: true,
                  bubbleFireIfChildFired: true,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'cloud-calling', valueIsRegex: true }] },
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar43',
                        type: 'value',
                        value: 'section:button:contact sales:%p_vl%',
                      },
                    ],
                    props: [
                      { name: 'prop9', type: 'value', value: '%s_url%' },
                      { name: 'prop10', type: 'value', value: 'contact sales' },
                      { name: 'prop11', type: 'alias', value: 'eVar43' },
                    ],
                    events: [{ name: 'event181' }],
                  },
                },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RLa00942861aef416685c0b0e0bb729b05',
            name: 'targetLoad',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.com', valueIsRegex: true }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "var webex = webex || {};\nwebex.targeter = webex.targeter || {};\nwebex.targeter.data =\n  webex.targeter.data ||\n  (function() {\n    var dataRaw = {};\n    var data = {};\n    var flatten = function(data) {\n      var result = {};\n      function recurse(cur, prop) {\n        if (Object(cur) !== cur) {\n          result[prop] = cur;\n        } else if (Array.isArray(cur)) {\n          for (var i = 0, l = cur.length; i < l; i++) recurse(cur[i], prop + '[' + i + ']');\n          if (l == 0) result[prop] = [];\n        } else {\n          var isEmpty = true;\n          for (var p in cur) {\n            isEmpty = false;\n            recurse(cur[p], prop ? prop + '.' + p : p);\n          }\n          if (isEmpty && prop) result[prop] = {};\n        }\n      }\n      recurse(data, '');\n      return result;\n    };\n    var msFromNow = function(ms) {\n      var d = Date.now() + ms;\n\n      return d;\n    };\n    var processData = function(d) {\n      var processed;\n      try {\n        processed = {\n          expires: msFromNow(1000 * 60 * 15),\n          all: flatten(d),\n          for_analysis: {\n            domain: d.domain.domain || '',\n            company_name: d.domain.company_name || '',\n            company_size: d.abm.company_size || '',\n            industry_category: d.domain.industry_cat || '',\n            industry_sub_category: d.domain.industry_sub_cat || '',\n            segment: d.abm.segment || '',\n          },\n        };\n      } catch (e) {\n        processed = {\n          expires: msFromNow(0),\n          for_analysis: {\n            domain: '',\n            company_name: '',\n            company_size: '',\n            industry_category: '',\n            industry_sub_category: '',\n            segment: '',\n          },\n        };\n      }\n      return processed;\n    };\n\n\n    var interval = function(func, wait, times) {\n      var interv = (function(w, t) {\n        return function() {\n          if (typeof t === 'undefined' || t-- > 0) {\n            setTimeout(interv, w);\n            try {\n              func.call(null);\n            } catch (e) {\n              t = 0;\n              throw e.toString();\n            }\n          }\n        };\n      })(wait, times);\n\n      setTimeout(interv, wait);\n    };\n\n    var onLoaded = function(o) {\n      dataRaw = o;\n\n      data = processData(dataRaw);\n      var sentToLocalStorage = false;\n      var sentToAmplitude = false;\n\n      interval(\n        function() {\n          if (!sentToLocalStorage) {\n            if (typeof webex.targeter.data.localStorage.send !== 'undefined') {\n              webex.targeter.data.localStorage.send(data);\n              sentToLocalStorage = true;\n            }\n          }\n        },\n        1000,\n        5\n      );\n\n \n    };\n\n    var fetch = function() {\n      var json_dns = new XMLHttpRequest();\n      json_dns.onreadystatechange = function(b) {\n        if (4 == this.readyState && 200 == this.status) {\n          var a = JSON.parse(this.response);\n          targetPageParams = function() {\n            return {\n              targeter_domain: a.domain.domain || '',\n              targeter_company_name: a.domain.company_name || '',\n              targeter_company_size: a.abm.company_size || '',\n              targeter_industry_category: a.domain.industry_cat || '',\n              targeter_industry_sub_category: a.domain.industry_sub_cat || '',\n              targeter_segment: a.abm.segment || '',\n            };\n          };\n\n          onLoaded(a);\n        }\n      };\n      json_dns.open('GET', 'https://dsc.cisco.com/v1/netid?apikey=qywbp58DO3oWMHehM6ozpqIGwqGrgokT', !0);\n      json_dns.send();\n    };\n\n    var dataExists = function() {\n      var hasData;\n\n      try {\n        hasData = JSON.parse(localStorage.getItem('targeter')).expires > Date.now();\n      } catch (e) {\n        hasData = false;\n      }\n      return hasData;\n    };\n\n    var getExistingData = function() {\n      var data;\n      try {\n        data = JSON.parse(localStorage.getItem('targeter')).for_analysis;\n      } catch (e) {\n        data = null;\n      }\n      return data;\n    };\n\n    var init = (function() {\n      var msToFetch = 0;\n      var existingData;\n      var isTargeterConsumer = /^www\\.webex\\.com$/i.test(location.hostname);\n      if (isTargeterConsumer) {\n        if (dataExists()) {\n          existingData = getExistingData();\n          targetPageParams = function() {\n            return {\n              targeter_domain: existingData.domain || '',\n              targeter_company_name: existingData.company_name || '',\n              targeter_company_size: existingData.company_size || '',\n              targeter_industry_category: existingData.industry_category || '',\n              targeter_industry_sub_category: existingData.industry_sub_category || '',\n              targeter_segment: existingData.segment || '',\n            };\n          };\n        } else {\n         // fetch();\n          //setTimeout(initTarget, msToFetch);\n        }\n      } else {\n       // initTarget();\n      }\n    })();\n\n    return {\n      gathered: data,\n    };\n  })();\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLd8590e792c9145d5a7e37233da9bcd42',
            name: 'serverUpdate',
            events: [],
            conditions: [],
            actions: [],
          },
        ],
      };
    })();
    var $___var_1e6a3dcdf3e2a297 = (function () {
      const $___old_937eef39346bf3da = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_937eef39346bf3da)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_47c01efa79e9f191.userAgent
          ));
        return function () {
          'use strict';
          if (!window.atob) {
            console.warn('Adobe Launch is unsupported in IE 9 and below.');
            return;
          }
          var buildRuleExecutionOrder = function (rules) {
            var ruleEventPairs = [];
            rules.forEach(function (rule) {
              if (rule.events) {
                rule.events.forEach(function (event) {
                  ruleEventPairs.push({ rule: rule, event: event });
                });
              }
            });
            return ruleEventPairs.sort(function (ruleEventPairA, ruleEventPairB) {
              return ruleEventPairA.event.ruleOrder - ruleEventPairB.event.ruleOrder;
            });
          };
          var DEBUG_LOCAL_STORAGE_NAME = 'debug';
          var createDebugController = function (localStorage, logger) {
            var getPersistedDebugEnabled = function () {
              return localStorage.getItem(DEBUG_LOCAL_STORAGE_NAME) === 'true';
            };
            var setPersistedDebugEnabled = function (enabled) {
              localStorage.setItem(DEBUG_LOCAL_STORAGE_NAME, enabled);
            };
            var debugChangedCallbacks = [];
            var onDebugChanged = function (callback) {
              debugChangedCallbacks.push(callback);
            };
            logger.outputEnabled = getPersistedDebugEnabled();
            return {
              onDebugChanged: onDebugChanged,
              getDebugEnabled: getPersistedDebugEnabled,
              setDebugEnabled: function (enabled) {
                if (getPersistedDebugEnabled() !== enabled) {
                  setPersistedDebugEnabled(enabled);
                  logger.outputEnabled = enabled;
                  debugChangedCallbacks.forEach(function (callback) {
                    callback(enabled);
                  });
                }
              },
            };
          };
          var MODULE_NOT_FUNCTION_ERROR = 'Module did not export a function.';
          var createExecuteDelegateModule = function (moduleProvider, replaceTokens) {
            return function (moduleDescriptor, syntheticEvent, moduleCallParameters) {
              moduleCallParameters = moduleCallParameters || [];
              var moduleExports = moduleProvider.getModuleExports(moduleDescriptor.modulePath);
              if (typeof moduleExports !== 'function') {
                throw new Error(MODULE_NOT_FUNCTION_ERROR);
              }
              var settings = replaceTokens(moduleDescriptor.settings || {}, syntheticEvent);
              return moduleExports.bind(null, settings).apply(null, moduleCallParameters);
            };
          };
          var cleanText = function (str) {
            return typeof str === 'string' ? str.replace(/\s+/g, ' ').trim() : str;
          };
          var levels = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' };
          var ROCKET = '\uD83D\uDE80';
          var ieVersion = parseInt(
            (/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]
          );
          var launchPrefix = ieVersion === 10 ? '[Launch]' : ROCKET;
          var outputEnabled = false;
          var process = function (level) {
            if (outputEnabled && window.console) {
              var logArguments = Array.prototype.slice.call(arguments, 1);
              logArguments.unshift(launchPrefix);
              if (level === levels.DEBUG && !window.console[level]) {
                level = levels.INFO;
              }
              window.console[level].apply(window.console, logArguments);
            }
          };
          var log = process.bind(null, levels.LOG);
          var info = process.bind(null, levels.INFO);
          var debug = process.bind(null, levels.DEBUG);
          var warn = process.bind(null, levels.WARN);
          var error = process.bind(null, levels.ERROR);
          var logger = {
            log: log,
            info: info,
            debug: debug,
            warn: warn,
            error: error,
            get outputEnabled () {
              return outputEnabled;
            },
            set outputEnabled (value) {
              outputEnabled = value;
            },
            createPrefixedLogger: function (identifier) {
              var loggerSpecificPrefix = '[' + identifier + ']';
              return {
                log: log.bind(null, loggerSpecificPrefix),
                info: info.bind(null, loggerSpecificPrefix),
                debug: debug.bind(null, loggerSpecificPrefix),
                warn: warn.bind(null, loggerSpecificPrefix),
                error: error.bind(null, loggerSpecificPrefix),
              };
            },
          };
          function createCommonjsModule (fn, module) {
            return (module = { exports: {} }), fn(module, module.exports), module.exports;
          }
          var js_cookie = createCommonjsModule(function (module, exports) {
            (function (factory) {
              var registeredInModuleLoader;
              {
                module.exports = factory();
                registeredInModuleLoader = true;
              }
              if (!registeredInModuleLoader) {
                var OldCookies = window.Cookies;
                var api = (window.Cookies = factory());
                api.noConflict = function () {
                  window.Cookies = OldCookies;
                  return api;
                };
              }
            })(function () {
              function extend () {
                var i = 0;
                var result = {};
                for (; i < arguments.length; i++) {
                  var attributes = arguments[i];
                  for (var key in attributes) {
                    result[key] = attributes[key];
                  }
                }
                return result;
              }
              function decode (s) {
                return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
              }
              function init (converter) {
                function api () {}
                function set (key, value, attributes) {
                  if (typeof document === 'undefined') {
                    return;
                  }
                  attributes = extend({ path: '/' }, api.defaults, attributes);
                  if (typeof attributes.expires === 'number') {
                    attributes.expires = new Date(new Date() * 1 + attributes.expires * 86400000);
                  }
                  attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
                  try {
                    var result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                      value = result;
                    }
                  } catch (e) {}
                  value = converter.write
                    ? converter.write(value, key)
                    : encodeURIComponent(String(value)).replace(
                        /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                        decodeURIComponent
                      );
                  key = encodeURIComponent(String(key))
                    .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                    .replace(/[\(\)]/g, escape);
                  var stringifiedAttributes = '';
                  for (var attributeName in attributes) {
                    if (!attributes[attributeName]) {
                      continue;
                    }
                    stringifiedAttributes += '; ' + attributeName;
                    if (attributes[attributeName] === true) {
                      continue;
                    }
                    stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
                  }
                  return (document.cookie = key + '=' + value + stringifiedAttributes);
                }
                function get (key, json) {
                  if (typeof document === 'undefined') {
                    return;
                  }
                  var jar = {};
                  var cookies = document.cookie ? document.cookie.split('; ') : [];
                  var i = 0;
                  for (; i < cookies.length; i++) {
                    var parts = cookies[i].split('=');
                    var cookie = parts.slice(1).join('=');
                    if (!json && cookie.charAt(0) === '"') {
                      cookie = cookie.slice(1, -1);
                    }
                    try {
                      var name = decode(parts[0]);
                      cookie = (converter.read || converter)(cookie, name) || decode(cookie);
                      if (json) {
                        try {
                          cookie = JSON.parse(cookie);
                        } catch (e) {}
                      }
                      jar[name] = cookie;
                      if (key === name) {
                        break;
                      }
                    } catch (e) {}
                  }
                  return key ? jar[key] : jar;
                }
                api.set = set;
                api.get = function (key) {
                  return get(key, false);
                };
                api.getJSON = function (key) {
                  return get(key, true);
                };
                api.remove = function (key, attributes) {
                  set(key, '', extend(attributes, { expires: -1 }));
                };
                api.defaults = {};
                api.withConverter = init;
                return api;
              }
              return init(function () {});
            });
          });
          var reactorCookie = { get: js_cookie.get, set: js_cookie.set, remove: js_cookie.remove };
          var reactorWindow = window;
          var NAMESPACE = 'com.adobe.reactor.';
          var getNamespacedStorage = function (storageType, additionalNamespace) {
            var finalNamespace = NAMESPACE + (additionalNamespace || '');
            return {
              getItem: function (name) {
                const $___old_ea8b2197f69f0433 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'localStorage'
                );
                try {
                  if ($___old_ea8b2197f69f0433)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___stub_b317e19f866a2da7.localStorage
                    ));
                  return function () {
                    try {
                      return reactorWindow[storageType].getItem(finalNamespace + name);
                    } catch (e) {
                      return null;
                    }
                  }.apply(this, arguments);
                } finally {
                  if ($___old_ea8b2197f69f0433)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___old_ea8b2197f69f0433
                    ));
                }
              },
              setItem: function (name, value) {
                const $___old_30837bc48cec7a4d = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'localStorage'
                );
                try {
                  if ($___old_30837bc48cec7a4d)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___stub_b317e19f866a2da7.localStorage
                    ));
                  return function () {
                    try {
                      reactorWindow[storageType].setItem(finalNamespace + name, value);
                      return true;
                    } catch (e) {
                      return false;
                    }
                  }.apply(this, arguments);
                } finally {
                  if ($___old_30837bc48cec7a4d)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___old_30837bc48cec7a4d
                    ));
                }
              },
            };
          };
          var COOKIE_PREFIX = '_sdsat_';
          var DATA_ELEMENTS_NAMESPACE = 'dataElements.';
          var MIGRATED_KEY = 'dataElementCookiesMigrated';
          var reactorLocalStorage = getNamespacedStorage('localStorage');
          var dataElementSessionStorage = getNamespacedStorage(
            'sessionStorage',
            DATA_ELEMENTS_NAMESPACE
          );
          var dataElementLocalStorage = getNamespacedStorage(
            'localStorage',
            DATA_ELEMENTS_NAMESPACE
          );
          var storageDurations = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' };
          var pageviewCache = {};
          var serialize = function (value) {
            var serialized;
            try {
              serialized = JSON.stringify(value);
            } catch (e) {}
            return serialized;
          };
          var setValue = function (key, storageDuration, value) {
            var serializedValue;
            switch (storageDuration) {
              case storageDurations.PAGEVIEW:
                pageviewCache[key] = value;
                return;
              case storageDurations.SESSION:
                serializedValue = serialize(value);
                if (serializedValue) {
                  dataElementSessionStorage.setItem(key, serializedValue);
                }
                return;
              case storageDurations.VISITOR:
                serializedValue = serialize(value);
                if (serializedValue) {
                  dataElementLocalStorage.setItem(key, serializedValue);
                }
                return;
            }
          };
          var getValue = function (key, storageDuration) {
            var value;
            switch (storageDuration) {
              case storageDurations.PAGEVIEW:
                return pageviewCache.hasOwnProperty(key) ? pageviewCache[key] : null;
              case storageDurations.SESSION:
                value = dataElementSessionStorage.getItem(key);
                return value === null ? value : JSON.parse(value);
              case storageDurations.VISITOR:
                value = dataElementLocalStorage.getItem(key);
                return value === null ? value : JSON.parse(value);
            }
          };
          var migrateDataElement = function (dataElementName, storageDuration) {
            var storedValue = reactorCookie.get(COOKIE_PREFIX + dataElementName);
            if (storedValue !== undefined) {
              setValue(dataElementName, storageDuration, storedValue);
            }
          };
          var migrateCookieData = function (dataElements) {
            if (!reactorLocalStorage.getItem(MIGRATED_KEY)) {
              Object.keys(dataElements).forEach(function (dataElementName) {
                migrateDataElement(dataElementName, dataElements[dataElementName].storageDuration);
              });
              reactorLocalStorage.setItem(MIGRATED_KEY, true);
            }
          };
          var dataElementSafe = {
            setValue: setValue,
            getValue: getValue,
            migrateCookieData: migrateCookieData,
          };
          var getErrorMessage = function (dataDef, dataElementName, errorMessage, errorStack) {
            return (
              'Failed to execute data element module ' +
              dataDef.modulePath +
              ' for data element ' +
              dataElementName +
              '. ' +
              errorMessage +
              (errorStack ? '\n' + errorStack : '')
            );
          };
          var createGetDataElementValue = function (
            moduleProvider,
            getDataElementDefinition,
            replaceTokens,
            undefinedVarsReturnEmpty
          ) {
            return function (name, syntheticEvent) {
              var dataDef = getDataElementDefinition(name);
              if (!dataDef) {
                return undefinedVarsReturnEmpty ? '' : undefined;
              }
              var storageDuration = dataDef.storageDuration;
              var moduleExports;
              try {
                moduleExports = moduleProvider.getModuleExports(dataDef.modulePath);
              } catch (e) {
                logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
                return;
              }
              if (typeof moduleExports !== 'function') {
                logger.error(getErrorMessage(dataDef, name, 'Module did not export a function.'));
                return;
              }
              var value;
              try {
                value = moduleExports(
                  replaceTokens(dataDef.settings, syntheticEvent),
                  syntheticEvent
                );
              } catch (e) {
                logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
                return;
              }
              if (storageDuration) {
                if (value != null) {
                  dataElementSafe.setValue(name, storageDuration, value);
                } else {
                  value = dataElementSafe.getValue(name, storageDuration);
                }
              }
              if (value == null && dataDef.defaultValue != null) {
                value = dataDef.defaultValue;
              }
              if (typeof value === 'string') {
                if (dataDef.cleanText) {
                  value = cleanText(value);
                }
                if (dataDef.forceLowerCase) {
                  value = value.toLowerCase();
                }
              }
              return value;
            };
          };
          var specialPropertyAccessors = {
            text: function (obj) {
              return obj.textContent;
            },
            cleanText: function (obj) {
              return cleanText(obj.textContent);
            },
          };
          var getObjectProperty = function (host, propChain, supportSpecial) {
            var value = host;
            var attrMatch;
            for (var i = 0, len = propChain.length; i < len; i++) {
              if (value == null) {
                return undefined;
              }
              var prop = propChain[i];
              if (supportSpecial && prop.charAt(0) === '@') {
                var specialProp = prop.slice(1);
                value = specialPropertyAccessors[specialProp](value);
                continue;
              }
              if (value.getAttribute && (attrMatch = prop.match(/^getAttribute\((.+)\)$/))) {
                var attr = attrMatch[1];
                value = value.getAttribute(attr);
                continue;
              }
              value = value[prop];
            }
            return value;
          };
          var createGetVar = function (customVars, getDataElementDefinition, getDataElementValue) {
            return function (variable, syntheticEvent) {
              var value;
              if (getDataElementDefinition(variable)) {
                value = getDataElementValue(variable, syntheticEvent);
              } else {
                var propChain = variable.split('.');
                var variableHostName = propChain.shift();
                if (variableHostName === 'this') {
                  if (syntheticEvent) {
                    value = getObjectProperty(syntheticEvent.element, propChain, true);
                  }
                } else if (variableHostName === 'event') {
                  if (syntheticEvent) {
                    value = getObjectProperty(syntheticEvent, propChain);
                  }
                } else if (variableHostName === 'target') {
                  if (syntheticEvent) {
                    value = getObjectProperty(syntheticEvent.target, propChain);
                  }
                } else {
                  value = getObjectProperty(customVars[variableHostName], propChain);
                }
              }
              return value;
            };
          };
          var createIsVar = function (customVars, getDataElementDefinition) {
            return function (variableName) {
              var nameBeforeDot = variableName.split('.')[0];
              return Boolean(
                getDataElementDefinition(variableName) ||
                  nameBeforeDot === 'this' ||
                  nameBeforeDot === 'event' ||
                  nameBeforeDot === 'target' ||
                  customVars.hasOwnProperty(nameBeforeDot)
              );
            };
          };
          var extractModuleExports = function (script, require, turbine) {
            var module = { exports: {} };
            script.call(module.exports, module, module.exports, require, turbine);
            return module.exports;
          };
          var createModuleProvider = function () {
            var moduleByReferencePath = {};
            var getModule = function (referencePath) {
              var module = moduleByReferencePath[referencePath];
              if (!module) {
                throw new Error('Module ' + referencePath + ' not found.');
              }
              return module;
            };
            var registerModule = function (
              referencePath,
              moduleDefinition,
              extensionName,
              require,
              turbine
            ) {
              var module = {
                definition: moduleDefinition,
                extensionName: extensionName,
                require: require,
                turbine: turbine,
              };
              module.require = require;
              moduleByReferencePath[referencePath] = module;
            };
            var hydrateCache = function () {
              Object.keys(moduleByReferencePath).forEach(function (referencePath) {
                try {
                  getModuleExports(referencePath);
                } catch (e) {
                  var errorMessage =
                    'Error initializing module ' +
                    referencePath +
                    '. ' +
                    e.message +
                    (e.stack ? '\n' + e.stack : '');
                  logger.error(errorMessage);
                }
              });
            };
            var getModuleExports = function (referencePath) {
              var module = getModule(referencePath);
              if (!module.hasOwnProperty('exports')) {
                module.exports = extractModuleExports(
                  module.definition.script,
                  module.require,
                  module.turbine
                );
              }
              return module.exports;
            };
            var getModuleDefinition = function (referencePath) {
              return getModule(referencePath).definition;
            };
            var getModuleExtensionName = function (referencePath) {
              return getModule(referencePath).extensionName;
            };
            return {
              registerModule: registerModule,
              hydrateCache: hydrateCache,
              getModuleExports: getModuleExports,
              getModuleDefinition: getModuleDefinition,
              getModuleExtensionName: getModuleExtensionName,
            };
          };
          var warningLogged = false;
          var createNotifyMonitors = function (_satellite) {
            return function (type, event) {
              var monitors = _satellite._monitors;
              if (monitors) {
                if (!warningLogged) {
                  logger.warn(
                    'The _satellite._monitors API may change at any time and should only ' +
                      'be used for debugging.'
                  );
                  warningLogged = true;
                }
                monitors.forEach(function (monitor) {
                  if (monitor[type]) {
                    monitor[type](event);
                  }
                });
              }
            };
          };
          var createReplaceTokens = function (isVar, getVar, undefinedVarsReturnEmpty) {
            var replaceTokensInString;
            var replaceTokensInObject;
            var replaceTokensInArray;
            var replaceTokens;
            var variablesBeingRetrieved = [];
            var getVarValue = function (token, variableName, syntheticEvent) {
              if (!isVar(variableName)) {
                return token;
              }
              variablesBeingRetrieved.push(variableName);
              var val = getVar(variableName, syntheticEvent);
              variablesBeingRetrieved.pop();
              return val == null && undefinedVarsReturnEmpty ? '' : val;
            };
            replaceTokensInString = function (str, syntheticEvent) {
              var result = /^%([^%]+)%$/.exec(str);
              if (result) {
                return getVarValue(str, result[1], syntheticEvent);
              } else {
                return str.replace(/%(.+?)%/g, function (token, variableName) {
                  return getVarValue(token, variableName, syntheticEvent);
                });
              }
            };
            replaceTokensInObject = function (obj, syntheticEvent) {
              var ret = {};
              var keys = Object.keys(obj);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = obj[key];
                ret[key] = replaceTokens(value, syntheticEvent);
              }
              return ret;
            };
            replaceTokensInArray = function (arr, syntheticEvent) {
              var ret = [];
              for (var i = 0, len = arr.length; i < len; i++) {
                ret.push(replaceTokens(arr[i], syntheticEvent));
              }
              return ret;
            };
            replaceTokens = function (thing, syntheticEvent) {
              if (typeof thing === 'string') {
                return replaceTokensInString(thing, syntheticEvent);
              } else if (Array.isArray(thing)) {
                return replaceTokensInArray(thing, syntheticEvent);
              } else if (typeof thing === 'object' && thing !== null) {
                return replaceTokensInObject(thing, syntheticEvent);
              }
              return thing;
            };
            return function (thing, syntheticEvent) {
              if (variablesBeingRetrieved.length > 10) {
                logger.error(
                  'Data element circular reference detected: ' +
                    variablesBeingRetrieved.join(' -> ')
                );
                return thing;
              }
              return replaceTokens(thing, syntheticEvent);
            };
          };
          var createSetCustomVar = function (customVars) {
            return function () {
              if (typeof arguments[0] === 'string') {
                customVars[arguments[0]] = arguments[1];
              } else if (arguments[0]) {
                var mapping = arguments[0];
                for (var key in mapping) {
                  customVars[key] = mapping[key];
                }
              }
            };
          };
          function finallyConstructor (callback) {
            var constructor = this.constructor;
            return this.then(
              function (value) {
                return constructor.resolve(callback()).then(function () {
                  return value;
                });
              },
              function (reason) {
                return constructor.resolve(callback()).then(function () {
                  return constructor.reject(reason);
                });
              }
            );
          }
          var setTimeoutFunc = setTimeout;
          function isArray (x) {
            return Boolean(x && typeof x.length !== 'undefined');
          }
          function noop () {}
          function bind (fn, thisArg) {
            return function () {
              fn.apply(thisArg, arguments);
            };
          }
          function Promise (fn) {
            if (!(this instanceof Promise))
              throw new TypeError('Promises must be constructed via new');
            if (typeof fn !== 'function') throw new TypeError('not a function');
            this._state = 0;
            this._handled = false;
            this._value = undefined;
            this._deferreds = [];
            doResolve(fn, this);
          }
          function handle (self, deferred) {
            while (self._state === 3) {
              self = self._value;
            }
            if (self._state === 0) {
              self._deferreds.push(deferred);
              return;
            }
            self._handled = true;
            Promise._immediateFn(function () {
              var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
              if (cb === null) {
                (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
                return;
              }
              var ret;
              try {
                ret = cb(self._value);
              } catch (e) {
                reject(deferred.promise, e);
                return;
              }
              resolve(deferred.promise, ret);
            });
          }
          function resolve (self, newValue) {
            try {
              if (newValue === self)
                throw new TypeError('A promise cannot be resolved with itself.');
              if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
                var then = newValue.then;
                if (newValue instanceof Promise) {
                  self._state = 3;
                  self._value = newValue;
                  finale(self);
                  return;
                } else if (typeof then === 'function') {
                  doResolve(bind(then, newValue), self);
                  return;
                }
              }
              self._state = 1;
              self._value = newValue;
              finale(self);
            } catch (e) {
              reject(self, e);
            }
          }
          function reject (self, newValue) {
            self._state = 2;
            self._value = newValue;
            finale(self);
          }
          function finale (self) {
            if (self._state === 2 && self._deferreds.length === 0) {
              Promise._immediateFn(function () {
                if (!self._handled) {
                  Promise._unhandledRejectionFn(self._value);
                }
              });
            }
            for (var i = 0, len = self._deferreds.length; i < len; i++) {
              handle(self, self._deferreds[i]);
            }
            self._deferreds = null;
          }
          function Handler (onFulfilled, onRejected, promise) {
            this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
            this.onRejected = typeof onRejected === 'function' ? onRejected : null;
            this.promise = promise;
          }
          function doResolve (fn, self) {
            var done = false;
            try {
              fn(
                function (value) {
                  if (done) return;
                  done = true;
                  resolve(self, value);
                },
                function (reason) {
                  if (done) return;
                  done = true;
                  reject(self, reason);
                }
              );
            } catch (ex) {
              if (done) return;
              done = true;
              reject(self, ex);
            }
          }
          Promise.prototype['catch'] = function (onRejected) {
            return this.then(null, onRejected);
          };
          Promise.prototype.then = function (onFulfilled, onRejected) {
            var prom = new this.constructor(noop);
            handle(this, new Handler(onFulfilled, onRejected, prom));
            return prom;
          };
          Promise.prototype['finally'] = finallyConstructor;
          Promise.all = function (arr) {
            return new Promise(function (resolve, reject) {
              if (!isArray(arr)) {
                return reject(new TypeError('Promise.all accepts an array'));
              }
              var args = Array.prototype.slice.call(arr);
              if (args.length === 0) return resolve([]);
              var remaining = args.length;
              function res (i, val) {
                try {
                  if (val && (typeof val === 'object' || typeof val === 'function')) {
                    var then = val.then;
                    if (typeof then === 'function') {
                      then.call(
                        val,
                        function (val) {
                          res(i, val);
                        },
                        reject
                      );
                      return;
                    }
                  }
                  args[i] = val;
                  if (--remaining === 0) {
                    resolve(args);
                  }
                } catch (ex) {
                  reject(ex);
                }
              }
              for (var i = 0; i < args.length; i++) {
                res(i, args[i]);
              }
            });
          };
          Promise.resolve = function (value) {
            if (value && typeof value === 'object' && value.constructor === Promise) {
              return value;
            }
            return new Promise(function (resolve) {
              resolve(value);
            });
          };
          Promise.reject = function (value) {
            return new Promise(function (resolve, reject) {
              reject(value);
            });
          };
          Promise.race = function (arr) {
            return new Promise(function (resolve, reject) {
              if (!isArray(arr)) {
                return reject(new TypeError('Promise.race accepts an array'));
              }
              for (var i = 0, len = arr.length; i < len; i++) {
                Promise.resolve(arr[i]).then(resolve, reject);
              }
            });
          };
          Promise._immediateFn =
            (typeof setImmediate === 'function' &&
              function (fn) {
                setImmediate(fn);
              }) ||
            function (fn) {
              setTimeoutFunc(fn, 0);
            };
          Promise._unhandledRejectionFn = function _unhandledRejectionFn (err) {
            if (typeof console !== 'undefined' && console) {
              console.warn('Possible Unhandled Promise Rejection:', err);
            }
          };
          var reactorPromise = window.Promise || Promise.default || Promise;
          var createAddActionToQueue = function (
            executeDelegateModule,
            normalizeRuleComponentError,
            logActionError
          ) {
            return function (action, rule, syntheticEvent, lastPromiseInQueue) {
              return lastPromiseInQueue.then(function () {
                var delayNextAction = action.delayNext;
                var actionTimeoutId;
                return new reactorPromise(function (resolve, reject) {
                  var moduleResult = executeDelegateModule(action, syntheticEvent, [
                    syntheticEvent,
                  ]);
                  if (!delayNextAction) {
                    return resolve();
                  }
                  var promiseTimeoutMs = action.timeout;
                  var timeoutPromise = new reactorPromise(function (resolve, reject) {
                    actionTimeoutId = setTimeout(function () {
                      reject(
                        new Error(
                          'A timeout occurred because the action took longer than ' +
                            promiseTimeoutMs / 1000 +
                            ' seconds to complete. '
                        )
                      );
                    }, promiseTimeoutMs);
                  });
                  reactorPromise.race([moduleResult, timeoutPromise]).then(resolve, reject);
                })
                  .catch(function (e) {
                    clearTimeout(actionTimeoutId);
                    e = normalizeRuleComponentError(e);
                    logActionError(action, rule, e);
                    return reactorPromise.reject(e);
                  })
                  .then(function () {
                    clearTimeout(actionTimeoutId);
                  });
              });
            };
          };
          var createAddConditionToQueue = function (
            executeDelegateModule,
            normalizeRuleComponentError,
            isConditionMet,
            logConditionError,
            logConditionNotMet
          ) {
            return function (condition, rule, syntheticEvent, lastPromiseInQueue) {
              return lastPromiseInQueue.then(function () {
                var conditionTimeoutId;
                return new reactorPromise(function (resolve, reject) {
                  var moduleResult = executeDelegateModule(condition, syntheticEvent, [
                    syntheticEvent,
                  ]);
                  var promiseTimeoutMs = condition.timeout;
                  var timeoutPromise = new reactorPromise(function (resolve, reject) {
                    conditionTimeoutId = setTimeout(function () {
                      reject(
                        new Error(
                          'A timeout occurred because the condition took longer than ' +
                            promiseTimeoutMs / 1000 +
                            ' seconds to complete. '
                        )
                      );
                    }, promiseTimeoutMs);
                  });
                  reactorPromise.race([moduleResult, timeoutPromise]).then(resolve, reject);
                })
                  .catch(function (e) {
                    clearTimeout(conditionTimeoutId);
                    e = normalizeRuleComponentError(e);
                    logConditionError(condition, rule, e);
                    return reactorPromise.reject(e);
                  })
                  .then(function (result) {
                    clearTimeout(conditionTimeoutId);
                    if (!isConditionMet(condition, result)) {
                      logConditionNotMet(condition, rule);
                      return reactorPromise.reject();
                    }
                  });
              });
            };
          };
          var lastPromiseInQueue = reactorPromise.resolve();
          var createAddRuleToQueue = function (
            addConditionToQueue,
            addActionToQueue,
            logRuleCompleted
          ) {
            return function (rule, syntheticEvent) {
              if (rule.conditions) {
                rule.conditions.forEach(function (condition) {
                  lastPromiseInQueue = addConditionToQueue(
                    condition,
                    rule,
                    syntheticEvent,
                    lastPromiseInQueue
                  );
                });
              }
              if (rule.actions) {
                rule.actions.forEach(function (action) {
                  lastPromiseInQueue = addActionToQueue(
                    action,
                    rule,
                    syntheticEvent,
                    lastPromiseInQueue
                  );
                });
              }
              lastPromiseInQueue = lastPromiseInQueue.then(function () {
                logRuleCompleted(rule);
              });
              lastPromiseInQueue = lastPromiseInQueue.catch(function () {});
              return lastPromiseInQueue;
            };
          };
          var isPromiseLike = function (value) {
            return Boolean(value && typeof value === 'object' && typeof value.then === 'function');
          };
          var createEvaluateConditions = function (
            executeDelegateModule,
            isConditionMet,
            logConditionNotMet,
            logConditionError
          ) {
            return function (rule, syntheticEvent) {
              var condition;
              if (rule.conditions) {
                for (var i = 0; i < rule.conditions.length; i++) {
                  condition = rule.conditions[i];
                  try {
                    var result = executeDelegateModule(condition, syntheticEvent, [
                      syntheticEvent,
                    ]);
                    if (isPromiseLike(result)) {
                      throw new Error(
                        'Rule component sequencing must be enabled on the property ' +
                          'for this condition to function properly.'
                      );
                    }
                    if (!isConditionMet(condition, result)) {
                      logConditionNotMet(condition, rule);
                      return false;
                    }
                  } catch (e) {
                    logConditionError(condition, rule, e);
                    return false;
                  }
                }
              }
              return true;
            };
          };
          var createExecuteRule = function (evaluateConditions, runActions) {
            return function (rule, normalizedSyntheticEvent) {
              if (evaluateConditions(rule, normalizedSyntheticEvent)) {
                runActions(rule, normalizedSyntheticEvent);
              }
            };
          };
          var createGetModuleDisplayNameByRuleComponent = function (moduleProvider) {
            return function (ruleComponent) {
              var moduleDefinition = moduleProvider.getModuleDefinition(ruleComponent.modulePath);
              return (
                (moduleDefinition && moduleDefinition.displayName) || ruleComponent.modulePath
              );
            };
          };
          var createGetSyntheticEventMeta = function (moduleProvider) {
            return function (ruleEventPair) {
              var rule = ruleEventPair.rule;
              var event = ruleEventPair.event;
              var moduleName = moduleProvider.getModuleDefinition(event.modulePath).name;
              var extensionName = moduleProvider.getModuleExtensionName(event.modulePath);
              return {
                $type: extensionName + '.' + moduleName,
                $rule: { id: rule.id, name: rule.name },
              };
            };
          };
          var createInitEventModule = function (
            triggerRule,
            executeDelegateModule,
            normalizeSyntheticEvent,
            getErrorMessage,
            getSyntheticEventMeta,
            logger
          ) {
            return function (guardUntilAllInitialized, ruleEventPair) {
              var rule = ruleEventPair.rule;
              var event = ruleEventPair.event;
              event.settings = event.settings || {};
              try {
                var syntheticEventMeta = getSyntheticEventMeta(ruleEventPair);
                executeDelegateModule(event, null, [
                  function trigger (syntheticEvent) {
                    var normalizedSyntheticEvent = normalizeSyntheticEvent(
                      syntheticEventMeta,
                      syntheticEvent
                    );
                    guardUntilAllInitialized(function () {
                      triggerRule(normalizedSyntheticEvent, rule);
                    });
                  },
                ]);
              } catch (e) {
                logger.error(getErrorMessage(event, rule, e));
              }
            };
          };
          var createLogActionError = function (
            getRuleComponentErrorMessage,
            getModuleDisplayNameByRuleComponent,
            logger,
            notifyMonitors
          ) {
            return function (action, rule, e) {
              var actionDisplayName = getModuleDisplayNameByRuleComponent(action);
              logger.error(getRuleComponentErrorMessage(actionDisplayName, rule.name, e));
              notifyMonitors('ruleActionFailed', { rule: rule, action: action });
            };
          };
          var createLogConditionError = function (
            getRuleComponentErrorMessage,
            getModuleDisplayNameByRuleComponent,
            logger,
            notifyMonitors
          ) {
            return function (condition, rule, e) {
              var conditionDisplayName = getModuleDisplayNameByRuleComponent(condition);
              logger.error(getRuleComponentErrorMessage(conditionDisplayName, rule.name, e));
              notifyMonitors('ruleConditionFailed', { rule: rule, condition: condition });
            };
          };
          var createLogConditionNotMet = function (
            getModuleDisplayNameByRuleComponent,
            logger,
            notifyMonitors
          ) {
            return function (condition, rule) {
              var conditionDisplayName = getModuleDisplayNameByRuleComponent(condition);
              logger.log(
                'Condition "' +
                  conditionDisplayName +
                  '" for rule "' +
                  rule.name +
                  '" was not met.'
              );
              notifyMonitors('ruleConditionFailed', { rule: rule, condition: condition });
            };
          };
          var createLogRuleCompleted = function (logger, notifyMonitors) {
            return function (rule) {
              logger.log('Rule "' + rule.name + '" fired.');
              notifyMonitors('ruleCompleted', { rule: rule });
            };
          };
          var createRunActions = function (
            executeDelegateModule,
            logActionError,
            logRuleCompleted
          ) {
            return function (rule, syntheticEvent) {
              var action;
              if (rule.actions) {
                for (var i = 0; i < rule.actions.length; i++) {
                  action = rule.actions[i];
                  try {
                    executeDelegateModule(action, syntheticEvent, [syntheticEvent]);
                  } catch (e) {
                    logActionError(action, rule, e);
                    return;
                  }
                }
              }
              logRuleCompleted(rule);
            };
          };
          var createTriggerRule = function (
            ruleComponentSequencingEnabled,
            executeRule,
            addRuleToQueue,
            notifyMonitors
          ) {
            return function (normalizedSyntheticEvent, rule) {
              notifyMonitors('ruleTriggered', { rule: rule });
              if (ruleComponentSequencingEnabled) {
                addRuleToQueue(rule, normalizedSyntheticEvent);
              } else {
                executeRule(rule, normalizedSyntheticEvent);
              }
            };
          };
          var getRuleComponentErrorMessage = function (ruleComponentName, ruleName, error) {
            return (
              'Failed to execute "' +
              ruleComponentName +
              '" for "' +
              ruleName +
              '" rule. ' +
              error.message +
              (error.stack ? '\n' + error.stack : '')
            );
          };
          var isConditionMet = function (condition, result) {
            return (result && !condition.negate) || (!result && condition.negate);
          };
          var triggerCallQueue = [];
          var eventModulesInitialized = false;
          var guardUntilAllInitialized = function (callback) {
            if (!eventModulesInitialized) {
              triggerCallQueue.push(callback);
            } else {
              callback();
            }
          };
          var initRules = function (buildRuleExecutionOrder, rules, initEventModule) {
            buildRuleExecutionOrder(rules).forEach(function (ruleEventPair) {
              initEventModule(guardUntilAllInitialized, ruleEventPair);
            });
            eventModulesInitialized = true;
            triggerCallQueue.forEach(function (triggerCall) {
              triggerCall();
            });
            triggerCallQueue = [];
          };
          var normalizeRuleComponentError = function (e) {
            if (!e) {
              e = new Error(
                'The extension triggered an error, but no error information was provided.'
              );
            }
            if (!(e instanceof Error)) {
              var stringifiedError = typeof e === 'object' ? JSON.stringify(e) : String(e);
              e = new Error(stringifiedError);
            }
            return e;
          };
          var getOwnPropertySymbols = Object.getOwnPropertySymbols;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var propIsEnumerable = Object.prototype.propertyIsEnumerable;
          function toObject (val) {
            if (val === null || val === undefined) {
              throw new TypeError('Object.assign cannot be called with null or undefined');
            }
            return Object(val);
          }
          function shouldUseNative () {
            try {
              if (!Object.assign) {
                return false;
              }
              var test1 = new String('abc');
              test1[5] = 'de';
              if (Object.getOwnPropertyNames(test1)[0] === '5') {
                return false;
              }
              var test2 = {};
              for (var i = 0; i < 10; i++) {
                test2['_' + String.fromCharCode(i)] = i;
              }
              var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                return test2[n];
              });
              if (order2.join('') !== '0123456789') {
                return false;
              }
              var test3 = {};
              'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                test3[letter] = letter;
              });
              if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                return false;
              }
              return true;
            } catch (err) {
              return false;
            }
          }
          var objectAssign = shouldUseNative()
            ? Object.assign
            : function (target, source) {
                var from;
                var to = toObject(target);
                var symbols;
                for (var s = 1; s < arguments.length; s++) {
                  from = Object(arguments[s]);
                  for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                      to[key] = from[key];
                    }
                  }
                  if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) {
                      if (propIsEnumerable.call(from, symbols[i])) {
                        to[symbols[i]] = from[symbols[i]];
                      }
                    }
                  }
                }
                return to;
              };
          var reactorObjectAssign = objectAssign;
          var normalizeSyntheticEvent = function (syntheticEventMeta, syntheticEvent) {
            syntheticEvent = syntheticEvent || {};
            reactorObjectAssign(syntheticEvent, syntheticEventMeta);
            if (!syntheticEvent.hasOwnProperty('type')) {
              Object.defineProperty(syntheticEvent, 'type', {
                get: function () {
                  logger.warn(
                    'Accessing event.type in Adobe Launch has been deprecated and will be ' +
                      'removed soon. Please use event.$type instead.'
                  );
                  return syntheticEvent.$type;
                },
              });
            }
            return syntheticEvent;
          };
          var createGetSharedModuleExports = function (extensions, moduleProvider) {
            return function (extensionName, moduleName) {
              var extension = extensions[extensionName];
              if (extension) {
                var modules = extension.modules;
                if (modules) {
                  var referencePaths = Object.keys(modules);
                  for (var i = 0; i < referencePaths.length; i++) {
                    var referencePath = referencePaths[i];
                    var module = modules[referencePath];
                    if (module.shared && module.name === moduleName) {
                      return moduleProvider.getModuleExports(referencePath);
                    }
                  }
                }
              }
            };
          };
          var createGetExtensionSettings = function (replaceTokens, settings) {
            return function () {
              return settings ? replaceTokens(settings) : {};
            };
          };
          var createGetHostedLibFileUrl = function (hostedLibFilesBaseUrl, minified) {
            return function (file) {
              if (minified) {
                var fileParts = file.split('.');
                fileParts.splice(fileParts.length - 1 || 1, 0, 'min');
                file = fileParts.join('.');
              }
              return hostedLibFilesBaseUrl + file;
            };
          };
          var JS_EXTENSION = '.js';
          var dirname = function (path) {
            return path.substr(0, path.lastIndexOf('/'));
          };
          var endsWith = function (str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
          };
          var resolveRelativePath = function (fromPath, relativePath) {
            if (!endsWith(relativePath, JS_EXTENSION)) {
              relativePath = relativePath + JS_EXTENSION;
            }
            var relativePathSegments = relativePath.split('/');
            var resolvedPathSegments = dirname(fromPath).split('/');
            relativePathSegments.forEach(function (relativePathSegment) {
              if (!relativePathSegment || relativePathSegment === '.') {
                return;
              } else if (relativePathSegment === '..') {
                if (resolvedPathSegments.length) {
                  resolvedPathSegments.pop();
                }
              } else {
                resolvedPathSegments.push(relativePathSegment);
              }
            });
            return resolvedPathSegments.join('/');
          };
          var reactorDocument = document;
          var getPromise = function (url, script) {
            return new reactorPromise(function (resolve, reject) {
              script.onload = function () {
                resolve(script);
              };
              script.onerror = function () {
                reject(new Error('Failed to load script ' + url));
              };
            });
          };
          var reactorLoadScript = function (url) {
            var script = document.createElement('script');
            script.src = url;
            script.async = true;
            var promise = getPromise(url, script);
            document.getElementsByTagName('head')[0].appendChild(script);
            return promise;
          };
          function hasOwnProperty$1 (obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          }
          var decode = function (qs, sep, eq, options) {
            sep = sep || '&';
            eq = eq || '=';
            var obj = {};
            if (typeof qs !== 'string' || qs.length === 0) {
              return obj;
            }
            var regexp = /\+/g;
            qs = qs.split(sep);
            var maxKeys = 1000;
            if (options && typeof options.maxKeys === 'number') {
              maxKeys = options.maxKeys;
            }
            var len = qs.length;
            if (maxKeys > 0 && len > maxKeys) {
              len = maxKeys;
            }
            for (var i = 0; i < len; ++i) {
              var x = qs[i].replace(regexp, '%20'),
                idx = x.indexOf(eq),
                kstr,
                vstr,
                k,
                v;
              if (idx >= 0) {
                kstr = x.substr(0, idx);
                vstr = x.substr(idx + 1);
              } else {
                kstr = x;
                vstr = '';
              }
              k = decodeURIComponent(kstr);
              v = decodeURIComponent(vstr);
              if (!hasOwnProperty$1(obj, k)) {
                obj[k] = v;
              } else if (Array.isArray(obj[k])) {
                obj[k].push(v);
              } else {
                obj[k] = [obj[k], v];
              }
            }
            return obj;
          };
          var stringifyPrimitive = function (v) {
            switch (typeof v) {
              case 'string':
                return v;
              case 'boolean':
                return v ? 'true' : 'false';
              case 'number':
                return isFinite(v) ? v : '';
              default:
                return '';
            }
          };
          var encode = function (obj, sep, eq, name) {
            sep = sep || '&';
            eq = eq || '=';
            if (obj === null) {
              obj = undefined;
            }
            if (typeof obj === 'object') {
              return Object.keys(obj)
                .map(function (k) {
                  var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                  if (Array.isArray(obj[k])) {
                    return obj[k]
                      .map(function (v) {
                        return ks + encodeURIComponent(stringifyPrimitive(v));
                      })
                      .join(sep);
                  } else {
                    return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
                  }
                })
                .join(sep);
            }
            if (!name) return '';
            return (
              encodeURIComponent(stringifyPrimitive(name)) +
              eq +
              encodeURIComponent(stringifyPrimitive(obj))
            );
          };
          var querystring = createCommonjsModule(function (module, exports) {
            exports.decode = exports.parse = decode;
            exports.encode = exports.stringify = encode;
          });
          var querystring_1 = querystring.decode;
          var querystring_2 = querystring.parse;
          var querystring_3 = querystring.encode;
          var querystring_4 = querystring.stringify;
          var reactorQueryString = {
            parse: function (string) {
              if (typeof string === 'string') {
                string = string.trim().replace(/^[?#&]/, '');
              }
              return querystring.parse(string);
            },
            stringify: function (object) {
              return querystring.stringify(object);
            },
          };
          var CORE_MODULE_PREFIX = '@adobe/reactor-';
          var modules = {
            cookie: reactorCookie,
            document: reactorDocument,
            'load-script': reactorLoadScript,
            'object-assign': reactorObjectAssign,
            promise: reactorPromise,
            'query-string': reactorQueryString,
            window: reactorWindow,
          };
          var createPublicRequire = function (getModuleExportsByRelativePath) {
            return function (key) {
              if (key.indexOf(CORE_MODULE_PREFIX) === 0) {
                var keyWithoutScope = key.substr(CORE_MODULE_PREFIX.length);
                var module = modules[keyWithoutScope];
                if (module) {
                  return module;
                }
              }
              if (key.indexOf('./') === 0 || key.indexOf('../') === 0) {
                return getModuleExportsByRelativePath(key);
              }
              throw new Error('Cannot resolve module "' + key + '".');
            };
          };
          var hydrateModuleProvider = function (
            container,
            moduleProvider,
            debugController,
            replaceTokens,
            getDataElementValue
          ) {
            var extensions = container.extensions;
            var buildInfo = container.buildInfo;
            var propertySettings = container.property.settings;
            if (extensions) {
              var getSharedModuleExports = createGetSharedModuleExports(
                extensions,
                moduleProvider
              );
              Object.keys(extensions).forEach(function (extensionName) {
                var extension = extensions[extensionName];
                var getExtensionSettings = createGetExtensionSettings(
                  replaceTokens,
                  extension.settings
                );
                if (extension.modules) {
                  var prefixedLogger = logger.createPrefixedLogger(extension.displayName);
                  var getHostedLibFileUrl = createGetHostedLibFileUrl(
                    extension.hostedLibFilesBaseUrl,
                    buildInfo.minified
                  );
                  var turbine = {
                    buildInfo: buildInfo,
                    getDataElementValue: getDataElementValue,
                    getExtensionSettings: getExtensionSettings,
                    getHostedLibFileUrl: getHostedLibFileUrl,
                    getSharedModule: getSharedModuleExports,
                    logger: prefixedLogger,
                    propertySettings: propertySettings,
                    replaceTokens: replaceTokens,
                    onDebugChanged: debugController.onDebugChanged,
                    get debugEnabled () {
                      return debugController.getDebugEnabled();
                    },
                  };
                  Object.keys(extension.modules).forEach(function (referencePath) {
                    var module = extension.modules[referencePath];
                    var getModuleExportsByRelativePath = function (relativePath) {
                      var resolvedReferencePath = resolveRelativePath(referencePath, relativePath);
                      return moduleProvider.getModuleExports(resolvedReferencePath);
                    };
                    var publicRequire = createPublicRequire(getModuleExportsByRelativePath);
                    moduleProvider.registerModule(
                      referencePath,
                      module,
                      extensionName,
                      publicRequire,
                      turbine
                    );
                  });
                }
              });
              moduleProvider.hydrateCache();
            }
            return moduleProvider;
          };
          var hydrateSatelliteObject = function (
            _satellite,
            container,
            setDebugEnabled,
            getVar,
            setCustomVar
          ) {
            var customScriptPrefixedLogger = logger.createPrefixedLogger('Custom Script');
            _satellite.track = function (identifier) {
              logger.log('"' + identifier + '" does not match any direct call identifiers.');
            };
            _satellite.getVisitorId = function () {
              return null;
            };
            _satellite.property = { name: container.property.name };
            _satellite.company = container.company;
            _satellite.buildInfo = container.buildInfo;
            _satellite.logger = customScriptPrefixedLogger;
            _satellite.notify = function (message, level) {
              logger.warn(
                '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
              );
              switch (level) {
                case 3:
                  customScriptPrefixedLogger.info(message);
                  break;
                case 4:
                  customScriptPrefixedLogger.warn(message);
                  break;
                case 5:
                  customScriptPrefixedLogger.error(message);
                  break;
                default:
                  customScriptPrefixedLogger.log(message);
              }
            };
            _satellite.getVar = getVar;
            _satellite.setVar = setCustomVar;
            _satellite.setCookie = function (name, value, days) {
              var optionsStr = '';
              var options = {};
              if (days) {
                optionsStr = ', { expires: ' + days + ' }';
                options.expires = days;
              }
              var msg =
                '_satellite.setCookie is deprecated. Please use ' +
                '_satellite.cookie.set("' +
                name +
                '", "' +
                value +
                '"' +
                optionsStr +
                ').';
              logger.warn(msg);
              reactorCookie.set(name, value, options);
            };
            _satellite.readCookie = function (name) {
              logger.warn(
                '_satellite.readCookie is deprecated. ' +
                  'Please use _satellite.cookie.get("' +
                  name +
                  '").'
              );
              return reactorCookie.get(name);
            };
            _satellite.removeCookie = function (name) {
              logger.warn(
                '_satellite.removeCookie is deprecated. ' +
                  'Please use _satellite.cookie.remove("' +
                  name +
                  '").'
              );
              reactorCookie.remove(name);
            };
            _satellite.cookie = reactorCookie;
            _satellite.pageBottom = function () {};
            _satellite.setDebug = setDebugEnabled;
            var warningLogged = false;
            Object.defineProperty(_satellite, '_container', {
              get: function () {
                if (!warningLogged) {
                  logger.warn(
                    '_satellite._container may change at any time and should only ' +
                      'be used for debugging.'
                  );
                  warningLogged = true;
                }
                return container;
              },
            });
          };
          var _satellite = window._satellite;
          if (_satellite && !window.__satelliteLoaded) {
            window.__satelliteLoaded = true;
            var container = _satellite.container;
            delete _satellite.container;
            var undefinedVarsReturnEmpty = container.property.settings.undefinedVarsReturnEmpty;
            var ruleComponentSequencingEnabled =
              container.property.settings.ruleComponentSequencingEnabled;
            var dataElements = container.dataElements || {};
            dataElementSafe.migrateCookieData(dataElements);
            var getDataElementDefinition = function (name) {
              return dataElements[name];
            };
            var moduleProvider = createModuleProvider();
            var replaceTokens;
            var proxyReplaceTokens = function () {
              return replaceTokens.apply(null, arguments);
            };
            var getDataElementValue = createGetDataElementValue(
              moduleProvider,
              getDataElementDefinition,
              proxyReplaceTokens,
              undefinedVarsReturnEmpty
            );
            var customVars = {};
            var setCustomVar = createSetCustomVar(customVars);
            var isVar = createIsVar(customVars, getDataElementDefinition);
            var getVar = createGetVar(customVars, getDataElementDefinition, getDataElementValue);
            replaceTokens = createReplaceTokens(isVar, getVar, undefinedVarsReturnEmpty);
            var localStorage = getNamespacedStorage('localStorage');
            var debugController = createDebugController(localStorage, logger);
            hydrateSatelliteObject(
              _satellite,
              container,
              debugController.setDebugEnabled,
              getVar,
              setCustomVar
            );
            hydrateModuleProvider(
              container,
              moduleProvider,
              debugController,
              replaceTokens,
              getDataElementValue
            );
            var notifyMonitors = createNotifyMonitors(_satellite);
            var executeDelegateModule = createExecuteDelegateModule(moduleProvider, replaceTokens);
            var getModuleDisplayNameByRuleComponent = createGetModuleDisplayNameByRuleComponent(
              moduleProvider
            );
            var logConditionNotMet = createLogConditionNotMet(
              getModuleDisplayNameByRuleComponent,
              logger,
              notifyMonitors
            );
            var logConditionError = createLogConditionError(
              getRuleComponentErrorMessage,
              getModuleDisplayNameByRuleComponent,
              logger,
              notifyMonitors
            );
            var logActionError = createLogActionError(
              getRuleComponentErrorMessage,
              getModuleDisplayNameByRuleComponent,
              logger,
              notifyMonitors
            );
            var logRuleCompleted = createLogRuleCompleted(logger, notifyMonitors);
            var evaluateConditions = createEvaluateConditions(
              executeDelegateModule,
              isConditionMet,
              logConditionNotMet,
              logConditionError
            );
            var runActions = createRunActions(
              executeDelegateModule,
              logActionError,
              logRuleCompleted
            );
            var executeRule = createExecuteRule(evaluateConditions, runActions);
            var addConditionToQueue = createAddConditionToQueue(
              executeDelegateModule,
              normalizeRuleComponentError,
              isConditionMet,
              logConditionError,
              logConditionNotMet
            );
            var addActionToQueue = createAddActionToQueue(
              executeDelegateModule,
              normalizeRuleComponentError,
              logActionError
            );
            var addRuleToQueue = createAddRuleToQueue(
              addConditionToQueue,
              addActionToQueue,
              logRuleCompleted
            );
            var triggerRule = createTriggerRule(
              ruleComponentSequencingEnabled,
              executeRule,
              addRuleToQueue,
              notifyMonitors
            );
            var getSyntheticEventMeta = createGetSyntheticEventMeta(moduleProvider);
            var initEventModule = createInitEventModule(
              triggerRule,
              executeDelegateModule,
              normalizeSyntheticEvent,
              getRuleComponentErrorMessage,
              getSyntheticEventMeta,
              logger
            );
            initRules(buildRuleExecutionOrder, container.rules || [], initEventModule);
          }
          var src = _satellite;
          return src;
        }.apply(this, arguments);
      } finally {
        if ($___old_937eef39346bf3da)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_937eef39346bf3da
          ));
      }
    })();
    _satellite = $___var_1e6a3dcdf3e2a297;
  })();
}
