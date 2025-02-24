var _satellite;
{
  const $___stub_a011c28886b08277 = {};
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
  })($___stub_a011c28886b08277);
  const $___stub_9d7b4eb662ee43f5 = {};
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
  })($___stub_9d7b4eb662ee43f5);
  const $___stub_8343e440b270d768 = {};
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
  })($___stub_8343e440b270d768);
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
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
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e;
                try {
                  e = spark_data.product_name[0];
                } catch (n) {
                  e = '';
                }
                var t = /annual|monthly/i.exec(e);
                return t[0] ? t[0] : '';
              },
            },
          },
          'Promo Code': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (
                  '' != userObj.promotionCode &&
                  'NoPromo' != userObj.promotionCode &&
                  'PROMO_CANCELLED' != userObj.promotionCode
                )
                  var e = changeOrderBean.promoCode;
                else
                  e =
                    $.cookie('promo_code') && 'NoPromo' == userObj.promotionCode
                      ? $.cookie('promo_code')
                      : 'NoPromotion';
                return e;
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
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return null !== document.querySelector('div[class*="changeOrder"]')
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
              source: function () {
                return -1 < document.URL.indexOf('.com.') || -1 < document.URL.indexOf('.co.')
                  ? '3'
                  : '2';
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
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e, t, n;
                try {
                  e = _satellite.cookie.get('user_lang') || '';
                } catch (a) {
                  e = '';
                }
                try {
                  t = _satellite.cookie.get('lang').split('_')[0] || '';
                } catch (a) {
                  t = '';
                }
                try {
                  n = spark_data.site_region.split('_')[0] || '';
                } catch (a) {
                  n = '';
                }
                return 0 < n.length ? n : 0 < t.length ? t : e;
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
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (-1 < document.URL.indexOf('pricing/cart.html') && 'undefined' != typeof $)
                  return $('.prod-cycle .select-selected').text();
              },
            },
          },
          'FT Country': {
            defaultValue: 'choose your country',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (
                  -1 < document.URL.indexOf('pricing/signup.html') &&
                  'undefined' != typeof document.getElementsByClassName('same-as-selected')[0]
                )
                  return document
                    .getElementsByClassName('same-as-selected')[0]
                    .getAttribute('data-val');
              },
            },
          },
          sl_cn: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if ('undefined' != typeof $) {
                  var e;
                  try {
                    e = $('.wbx-region-name').text().toLowerCase();
                  } catch (t) {}
                  typeof e == undefined && (e = '');
                }
                return e;
              },
            },
          },
          'DR Shopping Cart - Confirmation Products': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = [],
                  t = '',
                  n = spark_data.product_name.length;
                for (i = 0; i < n; i++) {
                  if (0 <= spark_data.product_name[i].indexOf('Annual'))
                    var a = spark_data.product_unit_price[i],
                      r = spark_data.product_list_price[i] * spark_data.product_quantity[i];
                  else
                    (a = 12 * spark_data.product_unit_price[i]),
                      (r = spark_data.product_list_price[i] * spark_data.product_quantity[i]);
                  (t = ''),
                    (t += ';' + spark_data.product_name[i] + ';'),
                    (t += spark_data.product_quantity[i] + ';'),
                    (t += spark_data.product_unit_price[i] + ';'),
                    (t += 'event16=' + a + '|'),
                    (t += 'event101=' + spark_data.product_unit_price[i] + '|'),
                    (t += 'event102=' + r + ';'),
                    e.push(t);
                }
                return e;
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
              source: function () {
                var e = document.URL.replace('https:', '').replace(/ft_e.$/, '');
                return -1 < e.indexOf('www.webex.com/pricing/cart.html?token=')
                  ? e.substr(0, 100)
                  : -1 < e.indexOf('www.webex.com/pricing/buy/account-create')
                  ? e.substr(0, 100)
                  : e.substr(0, 200);
              },
            },
          },
          'Order Booking Value': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = spark_data.product_name.length;
                for (i = 0; i < e; i++) {
                  if (0 <= spark_data.product_name[i].indexOf('Annual')) {
                    var t = spark_data.product_unit_price[i];
                    spark_data.product_list_price[i], spark_data.product_quantity[i];
                  } else
                    (t = 12 * spark_data.product_unit_price[i]),
                      spark_data.product_list_price[i],
                      spark_data.product_quantity[i];
                  return t;
                }
              },
            },
          },
          Language: {
            defaultValue: 'Empty',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'lang', caseInsensitive: !0 },
          },
          Referrer: {
            defaultValue: '[no referrer available]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e (e) {
                  return !e || /^\s*$/.test(e);
                }
                var t = document.referrer.split('?')[0],
                  n = '[no referrer]';
                return e(t) ? n : t;
              },
            },
          },
          contentLanguage: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e, t, n;
                try {
                  e = document.querySelectorAll("meta[name='language']")[0].content || '';
                } catch (a) {
                  e = '';
                }
                try {
                  t = _satellite.cookie.get('lang').split('_')[0] || '';
                } catch (a) {
                  t = '';
                }
                try {
                  n = spark_data.site_region.split('_')[0] || '';
                } catch (a) {
                  n = '';
                }
                return 0 < n.length ? n : 0 < t.length ? t : e;
              },
            },
          },
          'Current Page Name': {
            defaultValue: '[na]',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 's.pageName' },
          },
          p_n: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                try {
                  var e = document.location.pathname;
                  return (
                    '' ==
                      (e =
                        ':' ===
                        (e = e
                          .replace(/[\?|#|%].+/, '')
                          .replace(/[?]/g, '')
                          .replace(/\//g, ':')
                          .replace(/#|.index.html|.index.php|.html|.php|.index.aspx/g, '')
                          .replace(/:ja|:es|:de|:fr|:ko|:hk|:br|:it|:pt|:zh/, ''))[e.length - 1]
                          ? e.slice(0, e.length - 1)
                          : e) && (e = ':home'),
                    e
                  );
                } catch (t) {}
              },
            },
          },
          'Marin Tracking': {
            defaultValue: 'Empty',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'msid', caseInsensitive: !0 },
          },
          utm_channel: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_channel', caseInsensitive: !0 },
          },
          utm_source: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_source', caseInsensitive: !0 },
          },
          utm_medium: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_medium', caseInsensitive: !0 },
          },
          utm_campaign: {
            defaultValue: '',
            forceLowerCase: !0,
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_campaign', caseInsensitive: !0 },
          },
          'ft-site-url-s': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = _satellite.getVar('ft-site-url');
                return (e = e.substring(0, 20));
              },
            },
          },
          SEMID: {
            defaultValue: 'Empty',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'semid', caseInsensitive: !0 },
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
              source: function () {
                return $('#promoCode').val();
              },
            },
          },
          'Go Redirect ID': {
            defaultValue: 'Empty',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'goid', caseInsensitive: !0 },
          },
          'DR Shopping Cart - Page Type': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.page_type' },
          },
          geoCurrency: {
            defaultValue: 'usd',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e, t, n;
                try {
                  e = _satellite.cookie.get('user_currency') || '';
                } catch (a) {
                  e = '';
                }
                try {
                  t = _satellite.cookie.get('currency') || '';
                } catch (a) {
                  t = '';
                }
                try {
                  n = spark_data.site_currency || '';
                } catch (a) {
                  n = '';
                }
                return 0 < n.length
                  ? n.toUpperCase()
                  : 0 < t.length
                  ? t.toUpperCase()
                  : e.toUpperCase();
              },
            },
          },
          'DR Shopping Cart - Updated Subscription Quantity': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return document.getElementsByClassName(
                  'dr_productName dr_futureSubRenewalStatePlan'
                )[0].children[0].textContent;
              },
            },
          },
          'Internal Search Keyword': {
            defaultValue: 'NA',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'query', caseInsensitive: !0 },
          },
          'dr-cn': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'spark_data.site_country' },
          },
          CountryCode: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function i (e) {
                  if (0 == arguments.length) return window.location;
                  var t,
                    n = e + '';
                  return (
                    n
                      ? (t = document.createElement('a')).setAttribute('href', n)
                      : ((t = []).href = t.hash = t.host = t.hostname = t.pathname = t.port = t.protocol = t.search =
                          ''),
                    t
                  );
                }
                function e (e, t) {
                  var n,
                    a = 1 < arguments.length ? t : window.location.href,
                    r = i(a).hostname + i(a).pathname;
                  for (n in e) if (-1 < r.indexOf(e[n].site)) return e[n];
                  return 0;
                }
                return (
                  'indexOf' in Array.prototype ||
                    (Array.prototype.indexOf = function (e, t) {
                      t === undefined && (t = 0), t < 0 && (t += this.length), t < 0 && (t = 0);
                      for (var n = this.length; t < n; t++)
                        if (t in this && this[t] === e) return t;
                      return -1;
                    }),
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
                  ]),
                  e(rsuits).co
                );
              },
            },
          },
          's.Product': {
            defaultValue: '[na]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return productSkuTP + ';event16=' + bookingVal;
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
            settings: { name: 'TrackID', caseInsensitive: !0 },
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
              source: function () {
                return -1 < document.URL.indexOf('cart.webex.com')
                  ? 'wx:free-trial' + _satellite.getVar('p_n')
                  : 'wx' + _satellite.getVar('p_n');
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
              source: function () {
                var e = [],
                  t = '',
                  n = spark_data.product_name.length;
                for (i = 0; i < n; i++)
                  (t = ''), (t += ';' + spark_data.product_name[i] + ';'), e.push(t);
                return e;
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
            settings: { name: 'Action', caseInsensitive: !0 },
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
            forceLowerCase: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = _satellite.cookie.get('user_locale');
                return '' != e && e != undefined
                  ? e
                  : window.sessionStorage.CART_LOCALE !== undefined
                  ? window.sessionStorage.CART_LOCALE.replace('"', '')
                  : void 0;
              },
            },
          },
          rs_up: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: { source: function () {} },
          },
          'dr-orderType': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'undefined' != typeof spark_data.plan_old ? 'change order' : 'direct';
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
            forceLowerCase: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (-1 < document.URL.indexOf('pricing/cart.html') && 'undefined' != typeof $)
                  return $('.prod-license .select-selected').text();
              },
            },
          },
          'Number of Search Results': {
            defaultValue: 'No Results',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: { elementProperty: 'text', elementSelector: '.total-results' },
          },
          cookieDomain: {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = [
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
                  ],
                  t = '';
                for (i = 0; i < e.length; i++)
                  -1 < window.location.hostname.toLowerCase().indexOf(e[i][0].toLowerCase()) &&
                    (t = e[i][0]);
                return t;
              },
            },
          },
          'buy country': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e, t, n;
                try {
                  e = _satellite.cookie.get('buy_country') || '';
                } catch (a) {
                  e = '';
                }
                try {
                  t = _satellite.cookie.get('lang').split('_')[1] || '';
                } catch (a) {
                  t = '';
                }
                try {
                  n = spark_data.site_country || '';
                } catch (a) {
                  n = '';
                }
                return 0 < n.length ? n : 0 < t.length ? t : e;
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
              source: function () {
                return 'wx';
              },
            },
          },
          freecta: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document
                    .getElementsByClassName('wbx-header-menu')[0]
                    .getElementsByClassName('wbx-header-try-it-free')[0]
                    .textContent.trim(),
                  t = /inizia gratuitamente|start for free|comience de manera gratuita|Essayez Meetings gratuitement|\u7121\u6599\u3067\u8a66\u3059/i;
                return (
                  (validTxtKey2 = /inizia gratuitamente|try teams free|comience de manera gratuita|Essayez Teams gratuitement/i),
                  t.test(e)
                    ? e.toLowerCase().replace(t, 'start for free')
                    : validTxtKey2.test(e)
                    ? e.toLowerCase().replace(validTxtKey2, 'try teams free')
                    : e
                );
              },
            },
          },
          'Referrer: full URL': {
            defaultValue: '[no referrer available]',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e (e) {
                  return !e || /^\s*$/.test(e);
                }
                var t = document.referrer,
                  n = '[no referrer]';
                return e(t) ? n : t;
              },
            },
          },
          'prod-type': {
            defaultValue: '',
            forceLowerCase: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (-1 < document.URL.indexOf('pricing/cart.html') && 'undefined' != typeof $)
                  return $('.product-type .select-selected').text();
              },
            },
          },
          'DG Channel': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                _satellite.getVar('dg-channel');
              },
            },
          },
          'ft-site-url': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'sURL', caseInsensitive: !0 },
          },
          'cart-add-on': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 1 == document.getElementById('call-me-domestic').checked
                  ? 'call-me-domestic'
                  : 1 == document.getElementById('call-me-inter').checked
                  ? 'call-me-inter'
                  : void 0;
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
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e, t, n;
                try {
                  e = _satellite.cookie.get('user_locale') || '';
                } catch (a) {
                  e = '';
                }
                try {
                  t = _satellite.cookie.get.readCookie('lang').split('_')[1] || '';
                } catch (a) {
                  t = '';
                }
                try {
                  n = spark_data.site_country || '';
                } catch (a) {
                  n = '';
                }
                return 0 < n.length ? n : 0 < t.length ? t : e;
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
              source: function () {
                return document.getElementsByClassName('dr_error')[0].children[2].textContent;
              },
            },
          },
          nonce: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return "default-src 'self' 'unsafe-inline' *.adobedtm.com *.omtrdc.net;";
              },
            },
          },
          last_order_total: {
            defaultValue: '0.0',
            cleanText: !0,
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
                script: function (e, t, n) {
                  'use strict';
                  var a = n('../helpers/getObjectProperty.js');
                  e.exports = function (e) {
                    return a(window, e.path);
                  };
                },
              },
              'core/src/lib/dataElements/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    return e.source(t);
                  };
                },
              },
              'core/src/lib/dataElements/domAttribute.js': {
                name: 'dom-attribute',
                displayName: 'DOM Attribute',
                script: function (e) {
                  'use strict';
                  e.exports = function (e) {
                    var t = document.querySelector(e.elementSelector);
                    if (t) {
                      var n = e.elementProperty;
                      return 'text' === n
                        ? t.innerText || t.textContent
                        : n in t
                        ? t[n]
                        : t.getAttribute
                        ? t.getAttribute(n)
                        : undefined;
                    }
                  };
                },
              },
              'core/src/lib/dataElements/cookie.js': {
                name: 'cookie',
                displayName: 'Cookie',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-cookie');
                  e.exports = function (e) {
                    return a.get(e.name);
                  };
                },
              },
              'core/src/lib/dataElements/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (e, t, n) {
                  'use strict';
                  var o = n('@adobe/reactor-window'),
                    s = n('@adobe/reactor-query-string');
                  e.exports = function (e) {
                    var t = s.parse(o.location.search);
                    if (!e.caseInsensitive) return t[e.name];
                    for (
                      var n = e.name.toLowerCase(), a = Object.keys(t), r = 0;
                      r < a.length;
                      r++
                    ) {
                      var i = a[r];
                      if (i.toLowerCase() === n) return t[i];
                    }
                  };
                },
              },
              'core/src/lib/dataElements/localStorage.js': {
                name: 'local-storage',
                displayName: 'Local Storage',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-window');
                  e.exports = function (e) {
                    try {
                      return a.localStorage.getItem(e.name);
                    } catch (t) {
                      return null;
                    }
                  };
                },
              },
              'core/src/lib/events/pageBottom.js': {
                name: 'page-bottom',
                displayName: 'Page Bottom',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    a.registerPageBottomTrigger(t);
                  };
                },
              },
              'core/src/lib/conditions/domain.js': {
                name: 'domain',
                displayName: 'Domain',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    r = /[|\\{}()[\]^$+*?.-]/g,
                    i = function (e) {
                      if ('string' != typeof e) throw new TypeError('Expected a string');
                      return e.replace(r, '\\$&');
                    };
                  e.exports = function (e) {
                    var t = a.location.hostname;
                    return e.domains.some(function (e) {
                      return t.match(new RegExp('(^|\\.)' + i(e) + '$', 'i'));
                    });
                  };
                },
              },
              'core/src/lib/conditions/pathAndQuerystring.js': {
                name: 'path-and-querystring',
                displayName: 'Path And Query String',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    r = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = a.location.pathname + a.location.search;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return r(n, t);
                    });
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, n, i) {
                  'use strict';
                  var o,
                    a,
                    r,
                    s,
                    c = n('@adobe/reactor-document'),
                    l = n('@adobe/reactor-promise'),
                    u = n('./helpers/decorateCode'),
                    d = n('./helpers/loadCodeSequentially'),
                    p = n('../../../node_modules/postscribe/dist/postscribe'),
                    m = n('./helpers/unescapeHtmlCode'),
                    g =
                      ((a = function (e) {
                        p(c.body, e, {
                          beforeWriteToken: function (t) {
                            var e = t.tagName && t.tagName.toLowerCase();
                            return (
                              o && 'script' === e && (t.attrs.nonce = o),
                              ('script' !== e && 'style' !== e) ||
                                (Object.keys(t.attrs || {}).forEach(function (e) {
                                  t.attrs[e] = m(t.attrs[e]);
                                }),
                                t.src && (t.src = m(t.src))),
                              t
                            );
                          },
                          error: function (e) {
                            i.logger.error(e.msg);
                          },
                        });
                      }),
                      (r = []),
                      (s = function () {
                        if (c.body) for (; r.length; ) a(r.shift());
                        else setTimeout(s, 20);
                      }),
                      function (e) {
                        r.push(e), s();
                      }),
                    f = (function () {
                      if (c.currentScript) return c.currentScript.async;
                      for (var e = c.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src)) return n.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    const $___old_a75963dbae579c35 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_a75963dbae579c35)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        var n;
                        o = i.getExtensionSettings().cspNonce;
                        var a = { settings: e, event: t },
                          r = a.settings.source;
                        if (r)
                          return a.settings.isExternal
                            ? d(r).then(function (e) {
                                return e ? ((n = u(a, e)), g(n.code), n.promise) : l.resolve();
                              })
                            : ((n = u(a, r)),
                              f || 'loading' !== c.readyState
                                ? g(n.code)
                                : c.write &&
                                  !1 === i.propertySettings.ruleComponentSequencingEnabled
                                ? c.write(n.code)
                                : g(n.code),
                              n.promise);
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_a75963dbae579c35)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_a75963dbae579c35
                        ));
                    }
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    a.registerLibraryLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/conditions/subdomain.js': {
                name: 'subdomain',
                displayName: 'Subdomain',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    r = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = a.location.hostname;
                    return e.subdomains.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return r(n, t);
                    });
                  };
                },
              },
              'core/src/lib/events/click.js': {
                name: 'click',
                displayName: 'Click',
                script: function (e, t, n) {
                  'use strict';
                  var i = n('@adobe/reactor-window'),
                    o = n('./helpers/createBubbly')(),
                    s = new (n('./helpers/weakMap'))(),
                    c = function (e) {
                      for (; e; ) {
                        var t = e.tagName;
                        if (t && 'a' === t.toLowerCase()) {
                          var n = e.getAttribute('href'),
                            a = e.getAttribute('target');
                          return n &&
                            (!a || '_self' === a || ('_top' === a && i.top === i) || a === i.name)
                            ? e
                            : void 0;
                        }
                        e = e.parentNode;
                      }
                    };
                  document.addEventListener('click', o.evaluateEvent, !0),
                    (e.exports = function (a, r) {
                      o.addListener(a, function (e) {
                        var t = e.nativeEvent;
                        if (!t.s_fe) {
                          if (a.anchorDelay && !s.has(t)) {
                            var n = c(t.target);
                            n &&
                              (t.preventDefault(),
                              setTimeout(function () {
                                i.location = n.href;
                              }, a.anchorDelay)),
                              s.set(t, !0);
                          }
                          r(e);
                        }
                      });
                    }),
                    (e.exports.__reset = o.__reset);
                },
              },
              'core/src/lib/events/directCall.js': {
                name: 'direct-call',
                displayName: 'Direct Call',
                script: function (e, t, n, i) {
                  'use strict';
                  var o = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite.track = function (e, t) {
                      e = e.trim();
                      var n = o[e];
                      if (n) {
                        var a = { identifier: e, detail: t };
                        n.forEach(function (e) {
                          e(a);
                        });
                        var r = [
                          'Rules using the direct call event type with identifier "' +
                            e +
                            '" have been triggered' +
                            (t ? ' with additional detail:' : '.'),
                        ];
                        t && r.push(t), i.logger.log.apply(i.logger, r);
                      } else
                        i.logger.log('"' + e + '" does not match any direct call identifiers.');
                    }),
                    (e.exports = function (e, t) {
                      var n = o[e.identifier];
                      n || (n = o[e.identifier] = []), n.push(t);
                    });
                },
              },
              'core/src/lib/conditions/variable.js': {
                name: 'variable',
                displayName: 'Variable',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('../helpers/getObjectProperty'),
                    r = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                    return r(a(window, e.name), t);
                  };
                },
              },
              'core/src/lib/events/entersViewport.js': {
                name: 'enters-viewport',
                displayName: 'Enters Viewport',
                script: function (e, t, n) {
                  const $___old_dc1047731dff44b3 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_dc1047731dff44b3)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_9d7b4eb662ee43f5.appVersion
                      ));
                    return function () {
                      'use strict';
                      var l = n('@adobe/reactor-document'),
                        u = n('@adobe/reactor-window'),
                        a = n('./helpers/weakMap'),
                        r = n('./helpers/debounce'),
                        i = n('./helpers/enableWeakMapDefaultValue'),
                        o = n('./helpers/matchesSelector'),
                        s = n('./helpers/matchesProperties'),
                        c = 3000,
                        d = 200,
                        p = { FIRST_ENTRY: 'firstEntry', EVERY_ENTRY: 'everyEntry' },
                        m = -1 !== u.navigator.appVersion.indexOf('MSIE 10'),
                        g = i(new a(), function () {
                          return { timeoutIds: [], completedListeners: [], inViewport: !1 };
                        }),
                        f = {},
                        h = function (e) {
                          var t;
                          try {
                            t = e.getBoundingClientRect();
                          } catch (c) {}
                          var n = l.documentElement,
                            a = l.body,
                            r = n.clientTop || a.clientTop || 0,
                            i = n.clientLeft || a.clientLeft || 0,
                            o = u.pageYOffset || n.scrollTop || a.scrollTop,
                            s = u.pageXOffset || n.scrollLeft || a.scrollLeft;
                          return { top: t.top + o - r, left: t.left + s - i };
                        },
                        b = function () {
                          var e = u.innerHeight,
                            t = l.compatMode;
                          return (
                            t &&
                              (e =
                                'CSS1Compat' === t
                                  ? l.documentElement.clientHeight
                                  : l.body.clientHeight),
                            e
                          );
                        },
                        v = function () {
                          return l.documentElement.scrollTop
                            ? l.documentElement.scrollTop
                            : l.body.scrollTop;
                        },
                        y = function (e, t, n) {
                          var a = h(e).top,
                            r = e.offsetHeight;
                          return l.body.contains(e) && !(a + r < n || n + t < a);
                        },
                        w = function (a) {
                          var r = g.get(a);
                          r.inViewport ||
                            ((r.inViewport = !0),
                            Object.keys(f).forEach(function (e) {
                              o(a, e) &&
                                f[e].forEach(function (e) {
                                  if (
                                    s(a, e.settings.elementProperties) &&
                                    -1 === r.completedListeners.indexOf(e)
                                  ) {
                                    var t = function () {
                                      (e.settings.frequency || p.FIRST_ENTRY) === p.FIRST_ENTRY &&
                                        r.completedListeners.push(e),
                                        e.trigger({
                                          element: a,
                                          target: a,
                                          delay: e.settings.delay,
                                        });
                                    };
                                    if (e.settings.delay) {
                                      var n = setTimeout(function () {
                                        y(a, b(), v()) && t();
                                      }, e.settings.delay);
                                      r.timeoutIds.push(n);
                                    } else t();
                                  }
                                });
                            }));
                        },
                        _ = function (e) {
                          var t = g.get(e);
                          (t.inViewport = !1),
                            t.timeoutIds.length &&
                              (t.timeoutIds.forEach(clearTimeout), (t.timeoutIds = []));
                        },
                        x = r(function () {
                          var e = Object.keys(f);
                          if (e.length)
                            for (
                              var t = l.querySelectorAll(e.join(',')), n = b(), a = v(), r = 0;
                              r < t.length;
                              r++
                            ) {
                              var i = t[r];
                              y(i, n, a) ? w(i) : _(i);
                            }
                        }, d),
                        C = function () {
                          x(),
                            setInterval(x, c),
                            u.addEventListener('resize', x),
                            u.addEventListener('scroll', x);
                        };
                      m
                        ? 'complete' === l.readyState
                          ? C()
                          : u.addEventListener('load', C)
                        : 'loading' !== l.readyState
                        ? C()
                        : l.addEventListener('DOMContentLoaded', C),
                        (e.exports = function (e, t) {
                          var n = f[e.elementSelector];
                          n || (n = f[e.elementSelector] = []),
                            n.push({ settings: e, trigger: t });
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_dc1047731dff44b3)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_dc1047731dff44b3
                      ));
                  }
                },
              },
              'core/src/lib/conditions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    return e.source.call(t.element, t, t.target);
                  };
                },
              },
              'core/src/lib/events/elementExists.js': {
                name: 'element-exists',
                displayName: 'Element Exists',
                script: function (e, t, n) {
                  'use strict';
                  var a = 3000,
                    s = new (n('./helpers/weakMap'))(),
                    c = n('./helpers/matchesProperties'),
                    l = {};
                  setInterval(function () {
                    Object.keys(l).forEach(function (e) {
                      for (
                        var t = l[e], n = document.querySelectorAll(e), a = 0;
                        a < n.length;
                        a++
                      ) {
                        var r = n[a];
                        if (!s.has(r)) {
                          s.set(r, !0);
                          for (var i = 0; i < t.length; i++) {
                            var o = t[i];
                            c(r, o.settings.elementProperties) &&
                              (o.trigger({ element: r, target: r }), t.splice(i, 1), i--);
                          }
                        }
                        if (!t.length) {
                          delete l[e];
                          break;
                        }
                      }
                    });
                  }, a),
                    (e.exports = function (e, t) {
                      var n = l[e.elementSelector];
                      n || (n = l[e.elementSelector] = []), n.push({ settings: e, trigger: t });
                    });
                },
              },
              'core/src/lib/events/historyChange.js': {
                name: 'history-change',
                displayName: 'History Change',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('./helpers/debounce'),
                    r = n('./helpers/once'),
                    i = window.history,
                    o = window.location.href,
                    s = [],
                    c = function (t, e, n) {
                      var a = t[e];
                      t[e] = function () {
                        var e = a.apply(t, arguments);
                        return n.apply(null, arguments), e;
                      };
                    },
                    l = a(function () {
                      var e = window.location.href;
                      o !== e &&
                        (s.forEach(function (e) {
                          e();
                        }),
                        (o = e));
                    }, 0),
                    u = r(function () {
                      i &&
                        (i.pushState && c(i, 'pushState', l),
                        i.replaceState && c(i, 'replaceState', l)),
                        window.addEventListener('popstate', l),
                        window.addEventListener('hashchange', l);
                    });
                  e.exports = function (e, t) {
                    u(), s.push(t);
                  };
                },
              },
              'core/src/lib/events/domReady.js': {
                name: 'dom-ready',
                displayName: 'DOM Ready',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    a.registerDomReadyTrigger(t);
                  };
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    r = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = a.location.pathname;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return r(n, t);
                    });
                  };
                },
              },
              'core/src/lib/conditions/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-window'),
                    r = n('@adobe/reactor-query-string'),
                    i = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value,
                      n = r.parse(a.location.search);
                    return i(n[e.name], t);
                  };
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (e) {
                  'use strict';
                  var a = function (e) {
                      return 'number' == typeof e && isFinite(e);
                    },
                    r = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    },
                    i = function (e, t) {
                      return t && r(e) ? e.toLowerCase() : e;
                    },
                    o = function (e) {
                      return a(e) ? String(e) : e;
                    },
                    s = function (e) {
                      return r(e) ? Number(e) : e;
                    },
                    t = function (a) {
                      return function (e, t, n) {
                        return (e = o(e)), (t = o(t)), r(e) && r(t) && a(e, t, n);
                      };
                    },
                    n = function (n) {
                      return function (e, t) {
                        return (e = s(e)), (t = s(t)), a(e) && a(t) && n(e, t);
                      };
                    },
                    c = function (a) {
                      return function (e, t, n) {
                        return a(i(e, n), i(t, n));
                      };
                    },
                    l = {
                      equals: c(function (e, t) {
                        return e == t;
                      }),
                      doesNotEqual: function () {
                        return !l.equals.apply(null, arguments);
                      },
                      contains: t(
                        c(function (e, t) {
                          return -1 !== e.indexOf(t);
                        })
                      ),
                      doesNotContain: function () {
                        return !l.contains.apply(null, arguments);
                      },
                      startsWith: t(
                        c(function (e, t) {
                          return 0 === e.indexOf(t);
                        })
                      ),
                      doesNotStartWith: function () {
                        return !l.startsWith.apply(null, arguments);
                      },
                      endsWith: t(
                        c(function (e, t) {
                          return e.substring(e.length - t.length, e.length) === t;
                        })
                      ),
                      doesNotEndWith: function () {
                        return !l.endsWith.apply(null, arguments);
                      },
                      matchesRegex: t(function (e, t, n) {
                        return new RegExp(t, n ? 'i' : '').test(e);
                      }),
                      doesNotMatchRegex: function () {
                        return !l.matchesRegex.apply(null, arguments);
                      },
                      lessThan: n(function (e, t) {
                        return e < t;
                      }),
                      lessThanOrEqual: n(function (e, t) {
                        return e <= t;
                      }),
                      greaterThan: n(function (e, t) {
                        return t < e;
                      }),
                      greaterThanOrEqual: n(function (e, t) {
                        return t <= e;
                      }),
                      isTrue: function (e) {
                        return !0 === e;
                      },
                      isTruthy: function (e) {
                        return Boolean(e);
                      },
                      isFalse: function (e) {
                        return !1 === e;
                      },
                      isFalsy: function (e) {
                        return !e;
                      },
                    };
                  e.exports = function (e) {
                    return l[e.comparison.operator](
                      e.leftOperand,
                      e.rightOperand,
                      Boolean(e.comparison.caseInsensitive)
                    );
                  };
                },
              },
              'core/src/lib/events/dataElementChange.js': {
                name: 'data-element-change',
                displayName: 'Data Element Change',
                script: function (e, t, n, r) {
                  'use strict';
                  var i = {},
                    o = {};
                  setInterval(function () {
                    Object.keys(i).forEach(function (e) {
                      var t = JSON.stringify(r.getDataElementValue(e));
                      if (t !== o[e]) {
                        var n = { dataElementName: e };
                        i[e].forEach(function (e) {
                          e(n);
                        }),
                          (o[e] = t);
                      }
                    });
                  }, 1000),
                    (e.exports = function (e, t) {
                      var n = e.name,
                        a = i[n];
                      a || ((a = i[n] = []), (o[n] = JSON.stringify(r.getDataElementValue(n)))),
                        a.push(t);
                    });
                },
              },
              'core/src/lib/helpers/getObjectProperty.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    for (var n = t.split('.'), a = e, r = 0, i = n.length; r < i; r++) {
                      if (null == a) return undefined;
                      a = a[n[r]];
                    }
                    return a;
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, n) {
                  const $___old_65f6972d2443ac19 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_65f6972d2443ac19)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_9d7b4eb662ee43f5.appVersion
                      ));
                    return function () {
                      'use strict';
                      var a = n('@adobe/reactor-window'),
                        r = n('@adobe/reactor-document'),
                        i = -1 !== a.navigator.appVersion.indexOf('MSIE 10'),
                        o = 'WINDOW_LOADED',
                        s = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        l = [c, s, o],
                        u = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        d = {};
                      l.forEach(function (e) {
                        d[e] = [];
                      });
                      var p = function (e, t) {
                          l.slice(0, g(e) + 1).forEach(function (e) {
                            f(t, e);
                          });
                        },
                        m = function () {
                          return 'complete' === r.readyState
                            ? o
                            : 'interactive' === r.readyState
                            ? i
                              ? null
                              : s
                            : void 0;
                        },
                        g = function (e) {
                          return l.indexOf(e);
                        },
                        f = function (t, e) {
                          d[e].forEach(function (e) {
                            h(t, e);
                          }),
                            (d[e] = []);
                        },
                        h = function (e, t) {
                          var n = t.trigger,
                            a = t.syntheticEventFn;
                          n(a ? a(e) : null);
                        };
                      (a._satellite = a._satellite || {}),
                        (a._satellite.pageBottom = p.bind(null, c)),
                        r.addEventListener('DOMContentLoaded', p.bind(null, s), !0),
                        a.addEventListener('load', p.bind(null, o), !0),
                        a.setTimeout(function () {
                          var e = m();
                          e && p(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            d[c].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            d[s].push({ trigger: e, syntheticEventFn: u.bind(null, r) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[o].push({ trigger: e, syntheticEventFn: u.bind(null, a) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_65f6972d2443ac19)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_65f6972d2443ac19
                      ));
                  }
                },
              },
              'core/src/lib/helpers/textMatch.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    if (null == t) throw new Error('Illegal Argument: Pattern is not present');
                    return (
                      null != e &&
                      ('string' == typeof t ? e === t : t instanceof RegExp && t.test(e))
                    );
                  };
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('./decorators/decorateGlobalJavaScriptCode'),
                    r = n('./decorators/decorateNonGlobalJavaScriptCode'),
                    i = {
                      javascript: function (e, t) {
                        return e.settings.global ? a(e, t) : r(e, t);
                      },
                      html: n('./decorators/decorateHtmlCode'),
                    };
                  e.exports = function (e, t) {
                    return i[e.settings.language](e, t);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-promise'),
                    r = n('./getSourceByUrl'),
                    i = a.resolve();
                  e.exports = function (t) {
                    var e = new a(function (n) {
                      var e = r(t);
                      a.all([e, i]).then(function (e) {
                        var t = e[0];
                        n(t);
                      });
                    });
                    return (i = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (n, a) {
                  !(function r (e, t) {
                    'object' == typeof a && 'object' == typeof n
                      ? (n.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof a
                      ? (a.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (n) {
                      function a (e) {
                        if (r[e]) return r[e].exports;
                        var t = (r[e] = { exports: {}, id: e, loaded: !1 });
                        return n[e].call(t.exports, t, t.exports, a), (t.loaded = !0), t.exports;
                      }
                      var r = {};
                      return (a.m = n), (a.c = r), (a.p = ''), a(0);
                    })([
                      function (e, t, n) {
                        'use strict';
                        function a (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var r = a(n(1));
                        e.exports = r['default'];
                      },
                      function (e, t, n) {
                        'use strict';
                        function a (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function l () {}
                        function u () {
                          var e = c.shift();
                          if (e) {
                            var t = o.last(e);
                            t.afterDequeue(),
                              (e.stream = i.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function i (e, t, a) {
                          function r (e) {
                            (e = a.beforeWrite(e)), f.write(e), a.afterWrite(e);
                          }
                          ((f = new m['default'](e, a)).id = g++),
                            (f.name = a.name || f.id),
                            (d.streams[f.name] = f);
                          var n = e.ownerDocument,
                            i = {
                              close: n.close,
                              open: n.open,
                              write: n.write,
                              writeln: n.writeln,
                            };
                          p(n, {
                            close: l,
                            open: l,
                            write: function s () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return r(t.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return r(t.join('') + '\n');
                            },
                          });
                          var o = f.win.onerror || l;
                          return (
                            (f.win.onerror = function (e, t, n) {
                              a.error({ msg: e + ' - ' + t + ': ' + n }),
                                o.apply(f.win, [e, t, n]);
                            }),
                            f.write(t, function () {
                              p(n, i), (f.win.onerror = o), a.done(), (f = null), u();
                            }),
                            f
                          );
                        }
                        function d (e, t, n) {
                          if (o.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (c = []), (f = null), void (g = 0);
                          n = o.defaults(n, s);
                          var a = [
                            (e = /^#/.test(e)
                              ? window.document.getElementById(e.substr(1))
                              : e.jquery
                              ? e[0]
                              : e),
                            t,
                            n,
                          ];
                          return (
                            (e.postscribe = {
                              cancel: function r () {
                                a.stream ? a.stream.abort() : (a[1] = l);
                              },
                            }),
                            n.beforeEnqueue(a),
                            c.push(a),
                            f || u(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var p =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                            }
                            return e;
                          };
                        t['default'] = d;
                        var m = r(n(2)),
                          o = a(n(4)),
                          s = {
                            afterAsync: l,
                            afterDequeue: l,
                            afterStreamStart: l,
                            afterWrite: l,
                            autoFix: !0,
                            beforeEnqueue: l,
                            beforeWriteToken: function h (e) {
                              return e;
                            },
                            beforeWrite: function b (e) {
                              return e;
                            },
                            done: l,
                            error: function v (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          g = 0,
                          c = [],
                          f = null;
                        p(d, { streams: {}, queue: c, WriteStream: m['default'] });
                      },
                      function (e, t, n) {
                        'use strict';
                        function a (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function y (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function w (e, t) {
                          var n = I + t,
                            a = e.getAttribute(n);
                          return P.existy(a) ? String(a) : a;
                        }
                        function _ (e, t, n) {
                          var a = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            r = I + t;
                          P.existy(a) && '' !== a ? e.setAttribute(r, a) : e.removeAttribute(r);
                        }
                        t.__esModule = !0;
                        var x =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var a in n)
                                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                              }
                              return e;
                            },
                          C = r(n(3)),
                          P = a(n(4)),
                          k = !1,
                          I = 'data-ps-',
                          S = 'ps-style',
                          j = 'ps-script',
                          i = (function () {
                            function a (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              y(this, a),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new C['default']('', { autoFix: n.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                _(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (a.prototype.write = function n () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  P.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (a.prototype._callFunction = function r (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (a.prototype._writeImpl = function i (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, n = void 0, a = void 0, r = [];
                                  (t = this.parser.readToken()) &&
                                  !(n = P.isScript(t)) &&
                                  !(a = P.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && r.push(t);
                                0 < r.length && this._writeStaticTokens(r),
                                  n && this._handleScriptToken(t),
                                  a && this._handleStyleToken(t);
                              }),
                              (a.prototype._writeStaticTokens = function o (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    k && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    k && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (a.prototype._buildChunk = function u (e) {
                                for (
                                  var t = this.actuals.length,
                                    n = [],
                                    a = [],
                                    r = [],
                                    i = e.length,
                                    o = 0;
                                  o < i;
                                  o++
                                ) {
                                  var s = e[o],
                                    c = s.toString();
                                  if ((n.push(c), s.attrs)) {
                                    if (!/^noscript$/i.test(s.tagName)) {
                                      var l = t++;
                                      a.push(c.replace(/(\/?>)/, ' ' + I + 'id=' + l + ' $1')),
                                        s.attrs.id !== j &&
                                          s.attrs.id !== S &&
                                          r.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  I +
                                                  'proxyof=' +
                                                  l +
                                                  (s.unary ? ' />' : '>')
                                          );
                                    }
                                  } else a.push(c), r.push('endTag' === s.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: n.join(''),
                                  actual: a.join(''),
                                  proxy: r.join(''),
                                };
                              }),
                              (a.prototype._walkChunk = function s () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  P.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !w(e, 'proxyof')) {
                                    n && _((this.actuals[w(e, 'id')] = e), 'id');
                                    var a = e.parentNode && w(e.parentNode, 'proxyof');
                                    a && this.actuals[a].appendChild(e);
                                  }
                                  t.unshift.apply(t, P.toArray(e.childNodes));
                                }
                              }),
                              (a.prototype._handleScriptToken = function c (e) {
                                var t = this,
                                  n = this.parser.clear();
                                n && this.writeQueue.unshift(n),
                                  (e.src = e.attrs.src || e.attrs.SRC),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    (e.src && this.scriptStack.length
                                      ? (this.deferredRemote = e)
                                      : this._onScriptStart(e),
                                    this._writeScriptToken(e, function () {
                                      t._onScriptDone(e);
                                    }));
                              }),
                              (a.prototype._handleStyleToken = function l (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (a.prototype._writeStyleToken = function d (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, S),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (a.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  P.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  n
                                );
                              }),
                              (a.prototype._insertCursor = function p (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n);
                              }),
                              (a.prototype._onScriptStart = function m (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (a.prototype._onScriptDone = function g (e) {
                                e === this.scriptStack[0]
                                  ? (this.scriptStack.shift(),
                                    this.write.apply(this, e.outerWrites),
                                    !this.scriptStack.length &&
                                      this.deferredRemote &&
                                      (this._onScriptStart(this.deferredRemote),
                                      (this.deferredRemote = null)))
                                  : this.options.error({
                                      msg: 'Bad script nesting or script finished twice',
                                    });
                              }),
                              (a.prototype._writeScriptToken = function f (e, t) {
                                var n = this._buildScript(e),
                                  a = this._shouldRelease(n),
                                  r = this.options.afterAsync;
                                e.src &&
                                  ((n.src = e.src),
                                  this._scriptLoadHandler(
                                    n,
                                    a
                                      ? r
                                      : function () {
                                          t(), r();
                                        }
                                  ));
                                try {
                                  this._insertCursor(n, j), (n.src && !a) || t();
                                } catch (i) {
                                  this.options.error(i), t();
                                }
                              }),
                              (a.prototype._buildScript = function h (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  P.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  e.content && (n.text = e.content),
                                  n
                                );
                              }),
                              (a.prototype._scriptLoadHandler = function b (t, n) {
                                function a () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function r () {
                                  a(), null != n && n(), (n = null);
                                }
                                function i (e) {
                                  a(), o(e), null != n && n(), (n = null);
                                }
                                function e (e, t) {
                                  var n = e['on' + t];
                                  null != n && (e['_on' + t] = n);
                                }
                                var o = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  x(t, {
                                    onload: function s () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          i({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
                                        }
                                      r();
                                    },
                                    onerror: function c () {
                                      if (t._onerror)
                                        try {
                                          t._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void i({
                                            msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                          });
                                        }
                                      i({ msg: 'remote script failed ' + t.src });
                                    },
                                    onreadystatechange: function l () {
                                      /^(loaded|complete)$/.test(t.readyState) && r();
                                    },
                                  });
                              }),
                              (a.prototype._shouldRelease = function v (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              a
                            );
                          })();
                        t['default'] = i;
                      },
                      function (n) {
                        !(function a (e, t) {
                          n.exports = t();
                        })(0, function () {
                          return (function (n) {
                            function a (e) {
                              if (r[e]) return r[e].exports;
                              var t = (r[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                n[e].call(t.exports, t, t.exports, a), (t.loaded = !0), t.exports
                              );
                            }
                            var r = {};
                            return (a.m = n), (a.c = r), (a.p = ''), a(0);
                          })([
                            function (e, t, n) {
                              'use strict';
                              function a (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var r = a(n(1));
                              e.exports = r['default'];
                            },
                            function (e, t, n) {
                              'use strict';
                              function a (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function r (e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                  for (var n in e)
                                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return (t['default'] = e), t;
                              }
                              function u (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              t.__esModule = !0;
                              var d = r(n(2)),
                                p = r(n(3)),
                                m = a(n(6)),
                                i = n(5),
                                g = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                o = (function () {
                                  function c (e, t) {
                                    var n = this,
                                      a =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      r =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    u(this, c), (this.stream = a);
                                    var i = !1,
                                      o = {};
                                    for (var s in d)
                                      d.hasOwnProperty(s) &&
                                        (r.autoFix && (o[s + 'Fix'] = !0),
                                        (i = i || o[s + 'Fix']));
                                    i
                                      ? ((this._readToken = (0, m['default'])(
                                          this,
                                          o,
                                          function () {
                                            return n._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, m['default'])(this, o, function () {
                                          return n._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (c.prototype.append = function t (e) {
                                      this.stream += e;
                                    }),
                                    (c.prototype.prepend = function n (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (c.prototype._readTokenImpl = function a () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function r () {
                                      for (var e in g)
                                        if (g.hasOwnProperty(e) && g[e].test(this.stream)) {
                                          var t = p[e](this.stream);
                                          if (t)
                                            return 'startTag' === t.type &&
                                              /script|style/i.test(t.tagName)
                                              ? null
                                              : ((t.text = this.stream.substr(0, t.length)), t);
                                        }
                                    }),
                                    (c.prototype.peekToken = function e () {
                                      return this._peekToken();
                                    }),
                                    (c.prototype.readToken = function i () {
                                      return this._readToken();
                                    }),
                                    (c.prototype.readTokens = function o (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (c.prototype.clear = function s () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (c.prototype.rest = function l () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var s in (((t['default'] = o).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (o.escapeAttributes = function (e) {
                                var t = {};
                                for (var n in e)
                                  e.hasOwnProperty(n) && (t[n] = (0, i.escapeQuotes)(e[n], null));
                                return t;
                              }),
                              (o.supports = d)))
                                d.hasOwnProperty(s) &&
                                  (o.browserHasFlaw = o.browserHasFlaw || (!d[s] && s));
                            },
                            function (e, t) {
                              'use strict';
                              var n = !(t.__esModule = !0),
                                a = !1,
                                r = window.document.createElement('div');
                              try {
                                var i = '<P><I></P></I>';
                                (r.innerHTML = i), (t.tagSoup = n = r.innerHTML !== i);
                              } catch (o) {
                                t.tagSoup = n = !1;
                              }
                              try {
                                (r.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = a = 2 === r.childNodes.length);
                              } catch (o) {
                                t.selfClose = a = !1;
                              }
                              (r = null), (t.tagSoup = n), (t.selfClose = a);
                            },
                            function (e, t, n) {
                              'use strict';
                              function a (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new u.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function r (e) {
                                var t = e.indexOf('<');
                                return new u.CharsToken(0 <= t ? t : e.length);
                              }
                              function i (e) {
                                var o, s, c;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(d.startTag);
                                  if (t) {
                                    var n =
                                      ((o = {}),
                                      (s = {}),
                                      (c = t[2]),
                                      t[2].replace(d.attr, function (e, t, n, a, r, i) {
                                        n || a || r || i
                                          ? arguments[5]
                                            ? ((o[arguments[5]] = ''), (s[arguments[5]] = !0))
                                            : (o[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (d.fillAttr.test(t) && t) ||
                                                '')
                                          : (o[t] = ''),
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new u.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          o,
                                          s,
                                          !!t[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === n ? 'undefined' : l(n)))
                                      return n.v;
                                  }
                                }
                              }
                              function o (e) {
                                var t = i(e);
                                if (t) {
                                  var n = e.slice(t.length);
                                  if (n.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var a = n.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (a)
                                      return new u.AtomicTagToken(
                                        t.tagName,
                                        a[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        a[1]
                                      );
                                  }
                                }
                              }
                              function s (e) {
                                var t = e.match(d.endTag);
                                if (t) return new u.EndTagToken(t[1], t[0].length);
                              }
                              t.__esModule = !0;
                              var l =
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
                                    };
                              (t.comment = a),
                                (t.chars = r),
                                (t.startTag = i),
                                (t.atomicTag = o),
                                (t.endTag = s);
                              var u = n(4),
                                d = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, t, n) {
                              'use strict';
                              function s (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (t.__esModule = !0),
                                (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                              var c = n(5),
                                a = (t.Token = function a (e, t) {
                                  s(this, a), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                r =
                                  ((t.CommentToken = (function () {
                                    function n (e, t) {
                                      s(this, n),
                                        (this.type = 'comment'),
                                        (this.length = t || (e ? e.length : 0)),
                                        (this.text = ''),
                                        (this.content = e);
                                    }
                                    return (
                                      (n.prototype.toString = function e () {
                                        return '<!--' + this.content;
                                      }),
                                      n
                                    );
                                  })()),
                                  (t.CharsToken = (function () {
                                    function t (e) {
                                      s(this, t),
                                        (this.type = 'chars'),
                                        (this.length = e),
                                        (this.text = '');
                                    }
                                    return (
                                      (t.prototype.toString = function e () {
                                        return this.text;
                                      }),
                                      t
                                    );
                                  })()),
                                  (t.TagToken = (function () {
                                    function i (e, t, n, a, r) {
                                      s(this, i),
                                        (this.type = e),
                                        (this.length = n),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = a),
                                        (this.booleanAttrs = r),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (i.formatTag = function o (e, t) {
                                        var n =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          a = '<' + e.tagName;
                                        for (var r in e.attrs)
                                          if (e.attrs.hasOwnProperty(r)) {
                                            a += ' ' + r;
                                            var i = e.attrs[r];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[r]) ||
                                              (a += '="' + (0, c.escapeQuotes)(i) + '"');
                                          }
                                        return (
                                          e.rest && (a += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (a += '/>') : (a += '>'),
                                          n !== undefined &&
                                            null !== n &&
                                            (a += n + '</' + e.tagName + '>'),
                                          a
                                        );
                                      }),
                                      i
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function o (e, t, n, a, r, i) {
                                  s(this, o),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = n),
                                    (this.booleanAttrs = a),
                                    (this.html5Unary = !1),
                                    (this.unary = r),
                                    (this.rest = i);
                                }
                                return (
                                  (o.prototype.toString = function e () {
                                    return r.formatTag(this);
                                  }),
                                  o
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function i (e, t, n, a, r) {
                                    s(this, i),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = n),
                                      (this.booleanAttrs = a),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = r);
                                  }
                                  return (
                                    (i.prototype.toString = function e () {
                                      return r.formatTag(this, this.content);
                                    }),
                                    i
                                  );
                                })()),
                                (t.EndTagToken = (function () {
                                  function n (e, t) {
                                    s(this, n),
                                      (this.type = 'endTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e);
                                  }
                                  return (
                                    (n.prototype.toString = function e () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    n
                                  );
                                })());
                            },
                            function (e, t) {
                              'use strict';
                              function n (e, t) {
                                var n =
                                  1 < arguments.length && t !== undefined ? arguments[1] : '';
                                return e
                                  ? e.replace(/([^"]*)"/g, function (e, t) {
                                      return /\\/.test(t) ? t + '"' : t + '\\"';
                                    })
                                  : n;
                              }
                              (t.__esModule = !0), (t.escapeQuotes = n);
                            },
                            function (e, t) {
                              'use strict';
                              function l (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = a.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function u (e, t) {
                                var n = e.stream,
                                  a = l(t());
                                return (e.stream = n), a;
                              }
                              function d (e, t) {
                                var n = t.pop();
                                e.prepend('</' + n.tagName + '>');
                              }
                              function p () {
                                var e = [];
                                return (
                                  (e.last = function () {
                                    return this[this.length - 1];
                                  }),
                                  (e.lastTagNameEq = function (e) {
                                    var t = this.last();
                                    return (
                                      t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase()
                                    );
                                  }),
                                  (e.containsTagName = function (e) {
                                    for (var t, n = 0; (t = this[n]); n++)
                                      if (t.tagName === e) return !0;
                                    return !1;
                                  }),
                                  e
                                );
                              }
                              function n (n, a, t) {
                                function r () {
                                  var e = u(n, t);
                                  e && o[e.type] && o[e.type](e);
                                }
                                var i = p(),
                                  o = {
                                    startTag: function s (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && i.lastTagNameEq('TABLE')
                                        ? (n.prepend('<TBODY>'), r())
                                        : a.selfCloseFix && m.test(t) && i.containsTagName(t)
                                        ? i.lastTagNameEq(t)
                                          ? d(n, i)
                                          : (n.prepend('</' + e.tagName + '>'), r())
                                        : e.unary || i.push(e);
                                    },
                                    endTag: function c (e) {
                                      i.last()
                                        ? a.tagSoupFix && !i.lastTagNameEq(e.tagName)
                                          ? d(n, i)
                                          : i.pop()
                                        : a.tagSoupFix && (t(), r());
                                    },
                                  };
                                return function e () {
                                  return r(), l(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = n);
                              var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                m = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function a (e) {
                          return null != e;
                        }
                        function n (e) {
                          return 'function' == typeof e;
                        }
                        function r (e, t, n) {
                          var a = void 0,
                            r = (e && e.length) || 0;
                          for (a = 0; a < r; a++) t.call(n, e[a], a);
                        }
                        function i (e, t, n) {
                          for (var a in e) e.hasOwnProperty(a) && t.call(n, a, e[a]);
                        }
                        function o (n, e) {
                          return (
                            (n = n || {}),
                            i(e, function (e, t) {
                              a(n[e]) || (n[e] = t);
                            }),
                            n
                          );
                        }
                        function s (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (a) {
                            var t =
                              ((n = []),
                              r(e, function (e) {
                                n.push(e);
                              }),
                              { v: n });
                            if ('object' === (void 0 === t ? 'undefined' : p(t))) return t.v;
                          }
                          var n;
                        }
                        function c (e) {
                          return e[e.length - 1];
                        }
                        function l (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function u (e) {
                          return l(e, 'script');
                        }
                        function d (e) {
                          return l(e, 'style');
                        }
                        t.__esModule = !0;
                        var p =
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
                              };
                        (t.existy = a),
                          (t.isFunction = n),
                          (t.each = r),
                          (t.eachKey = i),
                          (t.defaults = o),
                          (t.toArray = s),
                          (t.last = c),
                          (t.isTag = l),
                          (t.isScript = u),
                          (t.isStyle = d);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/unescapeHtmlCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document').createElement('div');
                  e.exports = function (e) {
                    return (a.innerHTML = e), a.textContent || a.innerText || e;
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-promise');
                  e.exports = function (e, t) {
                    return { code: '<script>\n' + t + '\n</script>', promise: a.resolve() };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var i = n('@adobe/reactor-promise'),
                    o = 0;
                  e.exports = function (a, e) {
                    var r = '_runScript' + ++o,
                      t = new i(function (e, n) {
                        _satellite[r] = function (t) {
                          delete _satellite[r],
                            new i(function (e) {
                              e(t.call(a.event.element, a.event, a.event.target, i));
                            }).then(e, n);
                        };
                      });
                    return {
                      code:
                        '<script>_satellite["' +
                        r +
                        '"](function(event, target, Promise) {\n' +
                        e +
                        '\n});</script>',
                      promise: t,
                    };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateHtmlCode.js': {
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('@adobe/reactor-promise'),
                    i = 0,
                    o = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite._onCustomCodeSuccess = function (e) {
                      var t = o[e];
                      t && (delete o[e], t.resolve());
                    }),
                    (window._satellite._onCustomCodeFailure = function (e) {
                      var t = o[e];
                      t && (delete o[e], t.reject());
                    });
                  var s = function (e) {
                      return -1 !== e.indexOf('${reactorCallbackId}');
                    },
                    c = function (e, t) {
                      return e.replace(/\${reactorCallbackId}/g, t);
                    },
                    l = function (e) {
                      return e.settings.isExternal;
                    };
                  e.exports = function (e, t) {
                    var n;
                    return (
                      l(e) && (t = a.replaceTokens(t, e.event)),
                      s(t)
                        ? ((n = new r(function (e, t) {
                            o[String(i)] = { resolve: e, reject: t };
                          })),
                          (t = c(t, i)),
                          (i += 1))
                        : (n = r.resolve()),
                      { code: t, promise: n }
                    );
                  };
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-load-script'),
                    r = n('@adobe/reactor-promise'),
                    i = {},
                    o = {},
                    s = function (e) {
                      return o[e] || (o[e] = a(e)), o[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    i[e] = t;
                  }),
                    (e.exports = function (t) {
                      return i[t]
                        ? r.resolve(i[t])
                        : new r(function (e) {
                            s(t).then(
                              function () {
                                e(i[t]);
                              },
                              function () {
                                e();
                              }
                            );
                          });
                    });
                },
              },
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('./weakMap'),
                    m = n('./matchesProperties'),
                    g = n('./matchesSelector');
                  e.exports = function () {
                    var d = [],
                      p = new a(),
                      e = {
                        addListener: function (e, t) {
                          d.push({ settings: e, callback: t });
                        },
                        evaluateEvent: function (t, e) {
                          if (d.length && !p.has(t)) {
                            for (var n = t.target, a = !1; n; ) {
                              for (var r = !1, i = !1, o = 0; o < d.length; o++) {
                                var s = d[o],
                                  c = s.settings.elementSelector,
                                  l = s.settings.elementProperties;
                                if (
                                  (!1 !== s.settings.bubbleFireIfChildFired || !a) &&
                                  (n === t.target || !1 !== s.settings.bubbleFireIfParent) &&
                                  (n === t.target || c || (l && Object.keys(l).length)) &&
                                  (!c || g(n, c)) &&
                                  (!l || m(n, l))
                                ) {
                                  var u = {};
                                  e
                                    ? Object.keys(t).forEach(function (e) {
                                        u[e] = t[e];
                                      })
                                    : (u.nativeEvent = t),
                                    (u.element = n),
                                    (u.target = t.target),
                                    !1 !== s.callback(u) &&
                                      ((i = !0), s.settings.bubbleStop && (r = !0));
                                }
                              }
                              if (r) break;
                              i && (a = !0), (n = n.parentNode);
                            }
                            p.set(t, !0);
                          }
                        },
                        __reset: function () {
                          d = [];
                        },
                      };
                    return e;
                  };
                },
              },
              'core/src/lib/events/helpers/weakMap.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-window').WeakMap;
                  if (void 0 === a) {
                    var r = Object.defineProperty,
                      i = Date.now() % 1000000000;
                    (a = function () {
                      this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + i++ + '__';
                    }).prototype = {
                      set: function (e, t) {
                        var n = e[this.name];
                        return (
                          n && n[0] === e
                            ? (n[1] = t)
                            : r(e, this.name, { value: [e, t], writable: !0 }),
                          this
                        );
                      },
                      get: function (e) {
                        var t;
                        return (t = e[this.name]) && t[0] === e ? t[1] : undefined;
                      },
                      delete: function (e) {
                        var t = e[this.name];
                        return !(!t || t[0] !== e || ((t[0] = t[1] = undefined), 0));
                      },
                      has: function (e) {
                        var t = e[this.name];
                        return !!t && t[0] === e;
                      },
                    };
                  }
                  e.exports = a;
                },
              },
              'core/src/lib/events/helpers/matchesProperties.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./../../helpers/textMatch'),
                    i = function (e, t) {
                      return '@text' === t || 'innerText' === t
                        ? e.textContent || e.innerText
                        : t in e
                        ? e[t]
                        : e.getAttribute
                        ? e.getAttribute(t)
                        : void 0;
                    };
                  e.exports = function (a, e) {
                    return (
                      !e ||
                      e.every(function (e) {
                        var t = i(a, e.name),
                          n = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return r(t, n);
                      })
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/matchesSelector.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  e.exports = function (e, t) {
                    var n = e.matches || e.msMatchesSelector;
                    if (n)
                      try {
                        return n.call(e, t);
                      } catch (a) {
                        return (
                          r.logger.warn(
                            'Matching element failed. ' + t + ' is not a valid selector.'
                          ),
                          !1
                        );
                      }
                    return !1;
                  };
                },
              },
              'core/src/lib/events/helpers/debounce.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (n, a, r) {
                    var i = null;
                    return function () {
                      var e = r || this,
                        t = arguments;
                      clearTimeout(i),
                        (i = setTimeout(function () {
                          n.apply(e, t);
                        }, a));
                    };
                  };
                },
              },
              'core/src/lib/events/helpers/enableWeakMapDefaultValue.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (t, n) {
                    var a = t.get;
                    return (
                      (t.get = function (e) {
                        return t.has(e) || t.set(e, n()), a.apply(this, arguments);
                      }),
                      t
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/once.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    var n;
                    return function () {
                      return e && ((n = e.apply(t || this, arguments)), (e = null)), n;
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
                script: function (e, t, n, g) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    r = n('../codeLibrary/VisitorAPI'),
                    f = n('../../view/utils/timeUnits'),
                    h = function (e) {
                      return e.reduce(function (e, t) {
                        var n = /^(true|false)$/i.test(t.value) ? JSON.parse(t.value) : t.value;
                        return (e[t.name] = n), e;
                      }, {});
                    },
                    i = function (e) {
                      var t = g.getExtensionSettings();
                      if ('string' != typeof t.orgId)
                        throw new TypeError('Org ID is not a string.');
                      var n = h(t.variables || []),
                        a = t.doesOptInApply;
                      a &&
                        ('boolean' == typeof a
                          ? (n.doesOptInApply = a)
                          : t.optInCallback && (n.doesOptInApply = t.optInCallback));
                      var r = t.isOptInStorageEnabled;
                      r && (n.isOptInStorageEnabled = r);
                      var i = t.optInCookieDomain;
                      i && (n.optInCookieDomain = i);
                      var o = t.optInStorageExpiry;
                      if (o) {
                        var s = t.timeUnit;
                        if (s && f[s]) {
                          var c = o * f[s];
                          n.optInStorageExpiry = c;
                        }
                      } else !0 === r && (n.optInStorageExpiry = 33696000);
                      var l = t.previousPermissions;
                      l && (n.previousPermissions = l);
                      var u = t.preOptInApprovals;
                      if (u) n.preOptInApprovals = u;
                      else {
                        var d = t.preOptInApprovalInput;
                        d && (n.preOptInApprovals = d);
                      }
                      var p = t.isIabContext;
                      p && (n.isIabContext = p);
                      var m = e.getInstance(t.orgId, n);
                      return (
                        g.logger.info('Created instance using orgId: "' + t.orgId + '"'),
                        g.logger.info('Set variables: ' + JSON.stringify(n)),
                        m.getMarketingCloudVisitorID(function (e) {
                          g.logger.info('Obtained Marketing Cloud Visitor Id: ' + e);
                        }, !0),
                        m
                      );
                    },
                    o = function (t) {
                      return (g.getExtensionSettings().pathExclusions || []).some(function (e) {
                        return e.valueIsRegex ? new RegExp(e.value, 'i').test(t) : e.value === t;
                      });
                    },
                    s = null;
                  (_satellite.getVisitorId = function () {
                    return s;
                  }),
                    o(a.location.pathname)
                      ? g.logger.warn(
                          'MCID library not loaded. One of the path exclusions matches the current path.'
                        )
                      : (s = i(r)),
                    (e.exports = s);
                },
                name: 'mcid-instance',
                shared: !0,
              },
              'adobe-mcid/src/lib/codeLibrary/VisitorAPI.js': {
                script: function (e) {
                  e.exports =
                    ((function () {
                      'use strict';
                      function q (e) {
                        return (q =
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
                              })(e);
                      }
                      function e (e, t, n) {
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
                      function t () {
                        return {
                          callbacks: {},
                          add: function (e, t) {
                            this.callbacks[e] = this.callbacks[e] || [];
                            var n = this.callbacks[e].push(t) - 1,
                              a = this;
                            return function () {
                              a.callbacks[e].splice(n, 1);
                            };
                          },
                          execute: function (e, t) {
                            if (this.callbacks[e]) {
                              t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
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
                          executeAll: function (n, e) {
                            (e || (n && !$.isObjectEmpty(n))) &&
                              Object.keys(this.callbacks).forEach(function (e) {
                                var t = void 0 !== n[e] ? n[e] : '';
                                this.execute(e, t);
                              }, this);
                          },
                          hasCallbacks: function () {
                            return Boolean(Object.keys(this.callbacks).length);
                          },
                        };
                      }
                      function l (e, t, n) {
                        var a = null == e ? void 0 : e[t];
                        return void 0 === a ? n : a;
                      }
                      function r (e) {
                        for (var t = /^\d+$/, n = 0, a = e.length; n < a; n++)
                          if (!t.test(e[n])) return !1;
                        return !0;
                      }
                      function i (e, t) {
                        for (; e.length < t.length; ) e.push('0');
                        for (; t.length < e.length; ) t.push('0');
                      }
                      function o (e, t) {
                        for (var n = 0; n < e.length; n++) {
                          var a = parseInt(e[n], 10),
                            r = parseInt(t[n], 10);
                          if (r < a) return 1;
                          if (a < r) return -1;
                        }
                        return 0;
                      }
                      function n (e, t) {
                        if (e === t) return 0;
                        var n = e.toString().split('.'),
                          a = t.toString().split('.');
                        return r(n.concat(a)) ? (i(n, a), o(n, a)) : NaN;
                      }
                      function s (e) {
                        return e === Object(e) && 0 === Object.keys(e).length;
                      }
                      function c (e) {
                        return 'function' == typeof e || (e instanceof Array && e.length);
                      }
                      function a (e, t) {
                        var n = 0 < arguments.length && void 0 !== e ? arguments[0] : '',
                          a =
                            1 < arguments.length && void 0 !== t
                              ? arguments[1]
                              : function () {
                                  return !0;
                                };
                        (this.log = pe('log', n, a)),
                          (this.warn = pe('warn', n, a)),
                          (this.error = pe('error', n, a));
                      }
                      function O (e, t) {
                        var r = (0 < arguments.length && void 0 !== e ? arguments[0] : {})
                            .cookieName,
                          i = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies;
                        if (!r || !i) return { get: Se, set: Se, remove: Se };
                        var o = {
                          remove: function () {
                            i.remove(r);
                          },
                          get: function () {
                            var e = i.get(r),
                              t = {};
                            try {
                              t = JSON.parse(e);
                            } catch (e) {
                              t = {};
                            }
                            return t;
                          },
                          set: function (e, t) {
                            t = t || {};
                            var n = o.get(),
                              a = Object.assign(n, e);
                            i.set(r, JSON.stringify(a), {
                              domain: t.optInCookieDomain || '',
                              cookieLifetime: t.optInStorageExpiry || 34190000,
                              expires: !0,
                            });
                          },
                        };
                        return o;
                      }
                      function u (e) {
                        (this.name = this.constructor.name),
                          (this.message = e),
                          'function' == typeof Error.captureStackTrace
                            ? Error.captureStackTrace(this, this.constructor)
                            : (this.stack = new Error(e).stack);
                      }
                      function d (e, t) {
                        function n (e, t) {
                          var n = be(e);
                          return n.length
                            ? n.every(function (e) {
                                return !!t[e];
                              })
                            : ve(t);
                        }
                        function a () {
                          A(E),
                            D(ae.COMPLETE),
                            x(_.status, _.permissions),
                            l &&
                              w.set(_.permissions, {
                                optInCookieDomain: u,
                                optInStorageExpiry: d,
                              }),
                            C.execute(Oe);
                        }
                        function r (n) {
                          return function (e, t) {
                            if (!ye(e))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return D(ae.CHANGED), Object.assign(E, we(be(e), n)), t || a(), _;
                          };
                        }
                        var i = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          o = i.doesOptInApply,
                          s = i.previousPermissions,
                          c = i.preOptInApprovals,
                          l = i.isOptInStorageEnabled,
                          u = i.optInCookieDomain,
                          d = i.optInStorageExpiry,
                          p = i.isIabContext,
                          m = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                          g = je(s);
                        Te(g, 'Invalid `previousPermissions`!'),
                          Te(c, 'Invalid `preOptInApprovals`!');
                        var f,
                          h,
                          b,
                          v,
                          y,
                          w = O({ cookieName: 'adobeujs-optin' }, { cookies: m }),
                          _ = this,
                          x = B(_),
                          C = le(),
                          P = Ce(g),
                          k = Ce(c),
                          I = l ? w.get() : {},
                          S = {},
                          j = ((y = I), Pe(P) || (y && Pe(y)) ? ae.COMPLETE : ae.PENDING),
                          T =
                            ((f = k),
                            (h = P),
                            (b = I),
                            (v = we(ce, !o)),
                            o ? Object.assign({}, v, f, h, b) : v),
                          E = _e(T),
                          D = function (e) {
                            return (j = e);
                          },
                          A = function (e) {
                            return (T = e);
                          };
                        (_.deny = r(!1)),
                          (_.approve = r(!0)),
                          (_.denyAll = _.deny.bind(_, ce)),
                          (_.approveAll = _.approve.bind(_, ce)),
                          (_.isApproved = function (e) {
                            return n(e, _.permissions);
                          }),
                          (_.isPreApproved = function (e) {
                            return n(e, k);
                          }),
                          (_.fetchPermissions = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t && arguments[1],
                              a = n ? _.on(ae.COMPLETE, e) : Se;
                            return (
                              !o || (o && _.isComplete) || c
                                ? e(_.permissions)
                                : n ||
                                  C.add(Oe, function () {
                                    return e(_.permissions);
                                  }),
                              a
                            );
                          }),
                          (_.complete = function () {
                            _.status === ae.CHANGED && a();
                          }),
                          (_.registerPlugin = function (e) {
                            if (!e || !e.name || 'function' != typeof e.onRegister)
                              throw new Error(Re);
                            S[e.name] || (S[e.name] = e).onRegister.call(e, _);
                          }),
                          (_.execute = Ae(S)),
                          (_.memoizeContent = function (e) {
                            Ie(e) && w.set(e, { optInCookieDomain: u, optInStorageExpiry: d });
                          }),
                          (_.getMemoizedContent = function (e) {
                            var t = w.get();
                            if (t) return t[e];
                          }),
                          Object.defineProperties(_, {
                            permissions: {
                              get: function () {
                                return T;
                              },
                            },
                            status: {
                              get: function () {
                                return j;
                              },
                            },
                            Categories: {
                              get: function () {
                                return re;
                              },
                            },
                            doesOptInApply: {
                              get: function () {
                                return !!o;
                              },
                            },
                            isPending: {
                              get: function () {
                                return _.status === ae.PENDING;
                              },
                            },
                            isComplete: {
                              get: function () {
                                return _.status === ae.COMPLETE;
                              },
                            },
                            __plugins: {
                              get: function () {
                                return Object.keys(S);
                              },
                            },
                            isIabContext: {
                              get: function () {
                                return p;
                              },
                            },
                          });
                      }
                      function p (e, t) {
                        function n () {
                          (r = null), e.call(e, new u('The call took longer than you wanted!'));
                        }
                        function a () {
                          r && (clearTimeout(r), e.apply(e, arguments));
                        }
                        if (void 0 === t) return e;
                        var r = setTimeout(n, t);
                        return a;
                      }
                      function m () {
                        if (window.__tcfapi) return window.__tcfapi;
                        var e = window;
                        if (e !== window.top) {
                          for (var o; !o; ) {
                            e = e.parent;
                            try {
                              e.frames.__tcfapiLocator && (o = e);
                            } catch (e) {}
                            if (e === window.top) break;
                          }
                          if (o) {
                            var s = {};
                            return (
                              (window.__tcfapi = function (e, t, n, a) {
                                var r = Math.random() + '',
                                  i = {
                                    __tcfapiCall: {
                                      command: e,
                                      parameter: a,
                                      version: t,
                                      callId: r,
                                    },
                                  };
                                (s[r] = n), o.postMessage(i, '*');
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
                                    var n = t.__tcfapiReturn;
                                    'function' == typeof s[n.callId] &&
                                      (s[n.callId](n.returnValue, n.success), delete s[n.callId]);
                                  }
                                },
                                !1
                              ),
                              window.__tcfapi
                            );
                          }
                          fe.error('__tcfapi not found');
                        } else fe.error('__tcfapi not found');
                      }
                      function g (t, e, n) {
                        var a = 2 < arguments.length && void 0 !== n ? arguments[2] : [],
                          r = !0 === t.vendor.consents[e],
                          i = a.every(function (e) {
                            return !0 === t.purpose.consents[e];
                          });
                        return r && i;
                      }
                      function f () {
                        var n = this;
                        (n.name = 'iabPlugin'), (n.version = '0.0.2');
                        var i,
                          o = le(),
                          s = { transparencyAndConsentData: null },
                          c = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {};
                            return (s[e] = n);
                          };
                        (n.fetchConsentData = function (e) {
                          var t = p(e.callback, e.timeout);
                          l({ callback: t });
                        }),
                          (n.isApproved = function (e) {
                            var n = e.callback,
                              a = e.category,
                              t = e.timeout;
                            if (s.transparencyAndConsentData)
                              return n(null, g(s.transparencyAndConsentData, ie[a], oe[a]));
                            var r = p(function (e, t) {
                              n(e, g(t, ie[a], oe[a]));
                            }, t);
                            l({ category: a, callback: r });
                          }),
                          (n.onRegister = function (a) {
                            i = a;
                            var t = Object.keys(ie),
                              e = function (e, n) {
                                !e &&
                                  n &&
                                  (t.forEach(function (e) {
                                    var t = g(n, ie[e], oe[e]);
                                    a[t ? 'approve' : 'deny'](e, !0);
                                  }),
                                  a.complete());
                              };
                            n.fetchConsentData({ callback: e });
                          });
                        var l = function (e) {
                            var t = e.callback;
                            if (s.transparencyAndConsentData)
                              return t(null, s.transparencyAndConsentData);
                            o.add('FETCH_CONSENT_DATA', t),
                              a(function (e, t) {
                                if (t) {
                                  var n = _e(e),
                                    a = i.getMemoizedContent('iabConsentHash'),
                                    r = ge(n.tcString).toString(32);
                                  (n.consentString = e.tcString),
                                    (n.hasConsentChangedSinceLastCmpPull = a !== r),
                                    c('transparencyAndConsentData', n),
                                    i.memoizeContent({ iabConsentHash: r });
                                }
                                o.execute('FETCH_CONSENT_DATA', [
                                  null,
                                  s.transparencyAndConsentData,
                                ]);
                              });
                          },
                          a = function (e) {
                            var t = De(ie),
                              n = m();
                            'function' == typeof n && n('getTCData', 2, e, t);
                          };
                      }
                      var G =
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
                          for (var t, n, a = 1; a < arguments.length; ++a)
                            for (t in (n = arguments[a]))
                              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                          return e;
                        };
                      var h,
                        b,
                        v,
                        y,
                        H = {
                          MESSAGES: {
                            HANDSHAKE: 'HANDSHAKE',
                            GETSTATE: 'GETSTATE',
                            PARENTSTATE: 'PARENTSTATE',
                          },
                          STATE_KEYS_MAP: {
                            MCMID: 'MCMID',
                            MCAID: 'MCAID',
                            MCAAMB: 'MCAAMB',
                            MCAAMLH: 'MCAAMLH',
                            MCOPTOUT: 'MCOPTOUT',
                            CUSTOMERIDS: 'CUSTOMERIDS',
                          },
                          ASYNC_API_MAP: {
                            MCMID: 'getMarketingCloudVisitorID',
                            MCAID: 'getAnalyticsVisitorID',
                            MCAAMB: 'getAudienceManagerBlob',
                            MCAAMLH: 'getAudienceManagerLocationHint',
                            MCOPTOUT: 'isOptedOut',
                            ALLFIELDS: 'getVisitorValues',
                          },
                          SYNC_API_MAP: { CUSTOMERIDS: 'getCustomerIDs' },
                          ALL_APIS: {
                            MCMID: 'getMarketingCloudVisitorID',
                            MCAAMB: 'getAudienceManagerBlob',
                            MCAAMLH: 'getAudienceManagerLocationHint',
                            MCOPTOUT: 'isOptedOut',
                            MCAID: 'getAnalyticsVisitorID',
                            CUSTOMERIDS: 'getCustomerIDs',
                            ALLFIELDS: 'getVisitorValues',
                          },
                          FIELDGROUP_TO_FIELD: { MC: 'MCMID', A: 'MCAID', AAM: 'MCAAMB' },
                          FIELDS: {
                            MCMID: 'MCMID',
                            MCOPTOUT: 'MCOPTOUT',
                            MCAID: 'MCAID',
                            MCAAMLH: 'MCAAMLH',
                            MCAAMB: 'MCAAMB',
                          },
                          AUTH_STATE: { UNKNOWN: 0, AUTHENTICATED: 1, LOGGED_OUT: 2 },
                          OPT_OUT: { GLOBAL: 'global' },
                        },
                        w = H.STATE_KEYS_MAP,
                        _ = function (i) {
                          function a () {}
                          function r (n, a) {
                            var r = this;
                            return function () {
                              var e = i(0, n),
                                t = {};
                              return (t[n] = e), r.setStateAndPublish(t), a(e), e;
                            };
                          }
                          (this.getMarketingCloudVisitorID = function (e) {
                            e = e || a;
                            var t = this.findField(w.MCMID, e),
                              n = r.call(this, w.MCMID, e);
                            return void 0 !== t ? t : n();
                          }),
                            (this.getVisitorValues = function (t) {
                              this.getMarketingCloudVisitorID(function (e) {
                                t({ MCMID: e });
                              });
                            });
                        },
                        x = H.MESSAGES,
                        C = H.ASYNC_API_MAP,
                        P = H.SYNC_API_MAP,
                        k = function () {
                          function r () {}
                          function i (e, t) {
                            var n = this;
                            return function () {
                              return n.callbackRegistry.add(e, t), n.messageParent(x.GETSTATE), '';
                            };
                          }
                          function e (a) {
                            this[C[a]] = function (e) {
                              e = e || r;
                              var t = this.findField(a, e),
                                n = i.call(this, a, e);
                              return void 0 !== t ? t : n();
                            };
                          }
                          function t (e) {
                            this[P[e]] = function () {
                              return this.findField(e, r) || {};
                            };
                          }
                          Object.keys(C).forEach(e, this), Object.keys(P).forEach(t, this);
                        },
                        I = H.ASYNC_API_MAP,
                        S = function () {
                          Object.keys(I).forEach(function (t) {
                            this[I[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        $ =
                          ((function (e, t) {
                            (t.isObjectEmpty = function (e) {
                              return e === Object(e) && 0 === Object.keys(e).length;
                            }),
                              (t.isValueEmpty = function (e) {
                                return '' === e || t.isObjectEmpty(e);
                              });
                            var n = function () {
                              const $___old_649b55a783f158d7 = {}.constructor.getOwnPropertyDescriptor(
                                Navigator.prototype,
                                'userAgent'
                              );
                              try {
                                if ($___old_649b55a783f158d7)
                                  ({}.constructor.defineProperty(
                                    Navigator.prototype,
                                    'userAgent',
                                    $___stub_9d7b4eb662ee43f5.userAgent
                                  ));
                                return function () {
                                  var e = navigator.appName,
                                    t = navigator.userAgent;
                                  return (
                                    'Microsoft Internet Explorer' === e ||
                                    0 <= t.indexOf('MSIE ') ||
                                    (0 <= t.indexOf('Trident/') && 0 <= t.indexOf('Windows NT 6'))
                                  );
                                }.apply(this, arguments);
                              } finally {
                                if ($___old_649b55a783f158d7)
                                  ({}.constructor.defineProperty(
                                    Navigator.prototype,
                                    'userAgent',
                                    $___old_649b55a783f158d7
                                  ));
                              }
                            };
                            (t.getIeVersion = function () {
                              return document.documentMode
                                ? document.documentMode
                                : n()
                                ? 7
                                : null;
                            }),
                              (t.encodeAndBuildRequest = function (e, t) {
                                return e.map(encodeURIComponent).join(t);
                              }),
                              (t.isObject = function (e) {
                                return null !== e && 'object' === q(e) && !1 === Array.isArray(e);
                              }),
                              (t.defineGlobalNamespace = function () {
                                return (
                                  (window.adobe = t.isObject(window.adobe) ? window.adobe : {}),
                                  window.adobe
                                );
                              }),
                              (t.pluck = function (n, e) {
                                return e.reduce(function (e, t) {
                                  return n[t] && (e[t] = n[t]), e;
                                }, Object.create(null));
                              }),
                              (t.parseOptOut = function (e, t, n) {
                                t ||
                                  ((t = n),
                                  e.d_optout &&
                                    e.d_optout instanceof Array &&
                                    (t = e.d_optout.join(',')));
                                var a = parseInt(e.d_ottl, 10);
                                return isNaN(a) && (a = 7200), { optOut: t, d_ottl: a };
                              }),
                              (t.normalizeBoolean = function (e) {
                                var t = e;
                                return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
                              });
                          })((y = { exports: {} }), y.exports),
                          y.exports),
                        j =
                          ($.isObjectEmpty,
                          $.isValueEmpty,
                          $.getIeVersion,
                          $.encodeAndBuildRequest,
                          $.isObject,
                          $.defineGlobalNamespace,
                          $.pluck,
                          $.parseOptOut,
                          $.normalizeBoolean,
                          t),
                        T = H.MESSAGES,
                        E = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        W = function (i, o) {
                          (this.parse = function (e) {
                            try {
                              var n = {};
                              return (
                                e.data.split('|').forEach(function (e, t) {
                                  void 0 !== e && (n[E[t]] = 2 !== t ? e : JSON.parse(e));
                                }),
                                n
                              );
                            } catch (e) {}
                          }),
                            (this.isInvalid = function (e) {
                              var t = this.parse(e);
                              if (!t || Object.keys(t).length < 2) return !0;
                              var n = i !== t.orgID,
                                a = !o || e.origin !== o,
                                r = -1 === Object.keys(T).indexOf(t.prefix);
                              return n || a || r;
                            }),
                            (this.send = function (e, t, n) {
                              var a = t + '|' + i;
                              n && n === Object(n) && (a += '|' + JSON.stringify(n));
                              try {
                                e.postMessage(a, o);
                              } catch (i) {}
                            });
                        },
                        D = H.MESSAGES,
                        A = function (e, t, n, a) {
                          function r (e) {
                            Object.assign(m, e);
                          }
                          function i (e) {
                            Object.assign(m.state, e),
                              Object.assign(m.state.ALLFIELDS, e),
                              m.callbackRegistry.executeAll(m.state);
                          }
                          function o (e) {
                            if (!h.isInvalid(e)) {
                              f = !1;
                              var t = h.parse(e);
                              m.setStateAndPublish(t.state);
                            }
                          }
                          function s (e) {
                            !f && g && ((f = !0), h.send(a, e));
                          }
                          function c () {
                            r(new _(n._generateID)),
                              m.getMarketingCloudVisitorID(),
                              m.callbackRegistry.executeAll(m.state, !0),
                              G.removeEventListener('message', l);
                          }
                          function l (e) {
                            if (!h.isInvalid(e)) {
                              var t = h.parse(e);
                              (f = !1),
                                G.clearTimeout(m._handshakeTimeout),
                                G.removeEventListener('message', l),
                                r(new k(m)),
                                G.addEventListener('message', o),
                                m.setStateAndPublish(t.state),
                                m.callbackRegistry.hasCallbacks() && s(D.GETSTATE);
                            }
                          }
                          function u () {
                            g && postMessage
                              ? (G.addEventListener('message', l),
                                s(D.HANDSHAKE),
                                (m._handshakeTimeout = setTimeout(c, 250)))
                              : c();
                          }
                          function d () {
                            G.s_c_in || ((G.s_c_il = []), (G.s_c_in = 0)),
                              (m._c = 'Visitor'),
                              (m._il = G.s_c_il),
                              (m._in = G.s_c_in),
                              (m._il[m._in] = m),
                              G.s_c_in++;
                          }
                          function p () {
                            function e (e) {
                              0 !== e.indexOf('_') &&
                                'function' == typeof n[e] &&
                                (m[e] = function () {});
                            }
                            Object.keys(n).forEach(e),
                              (m.getSupplementalDataID = n.getSupplementalDataID),
                              (m.isAllowed = function () {
                                return !0;
                              });
                          }
                          var m = this,
                            g = t.whitelistParentDomain;
                          (m.state = { ALLFIELDS: {} }),
                            (m.version = n.version),
                            (m.marketingCloudOrgID = e),
                            (m.cookieDomain = n.cookieDomain || '');
                          var f = !(m._instanceType = 'child'),
                            h = new W(e, g);
                          (m.callbackRegistry = j()),
                            (m.init = function () {
                              d(), p(), r(new S(m)), u();
                            }),
                            (m.findField = function (e, t) {
                              if (void 0 !== m.state[e]) return t(m.state[e]), m.state[e];
                            }),
                            (m.messageParent = s),
                            (m.setStateAndPublish = i);
                        },
                        R = H.MESSAGES,
                        L = H.ALL_APIS,
                        M = H.ASYNC_API_MAP,
                        V = H.FIELDGROUP_TO_FIELD,
                        Q = function (r, a) {
                          function i () {
                            var a = {};
                            return (
                              Object.keys(L).forEach(function (e) {
                                var t = L[e],
                                  n = r[t]();
                                $.isValueEmpty(n) || (a[e] = n);
                              }),
                              a
                            );
                          }
                          function o () {
                            var n = [];
                            return (
                              r._loading &&
                                Object.keys(r._loading).forEach(function (e) {
                                  if (r._loading[e]) {
                                    var t = V[e];
                                    n.push(t);
                                  }
                                }),
                              n.length ? n : null
                            );
                          }
                          function t (n) {
                            return function a () {
                              var e = o();
                              if (e) {
                                var t = M[e[0]];
                                r[t](a, !0);
                              } else n();
                            };
                          }
                          function n (e, t) {
                            var n = i();
                            a.send(e, t, n);
                          }
                          function s (e) {
                            l(e), n(e, R.HANDSHAKE);
                          }
                          function c (e) {
                            t(function () {
                              n(e, R.PARENTSTATE);
                            })();
                          }
                          function l (t) {
                            function e (e) {
                              n.call(r, e),
                                a.send(t, R.PARENTSTATE, { CUSTOMERIDS: r.getCustomerIDs() });
                            }
                            var n = r.setCustomerIDs;
                            r.setCustomerIDs = e;
                          }
                          return function (e) {
                            a.isInvalid(e) ||
                              (a.parse(e).prefix === R.HANDSHAKE ? s : c)(e.source);
                          };
                        },
                        Y = function (a, n) {
                          function r (t) {
                            return function (e) {
                              (i[t] = e), ++o === s && n(i);
                            };
                          }
                          var i = {},
                            o = 0,
                            s = Object.keys(a).length;
                          Object.keys(a).forEach(function (e) {
                            var t = a[e];
                            if (t.fn) {
                              var n = t.args || [];
                              n.unshift(r(e)), t.fn.apply(t.context || null, n);
                            }
                          });
                        },
                        K = {
                          get: function (e) {
                            e = encodeURIComponent(e);
                            var t = (';' + document.cookie).split(' ').join(';'),
                              n = t.indexOf(';' + e + '='),
                              a = n < 0 ? n : t.indexOf(';', n + 1);
                            return n < 0
                              ? ''
                              : decodeURIComponent(
                                  t.substring(n + 2 + e.length, a < 0 ? t.length : a)
                                );
                          },
                          set: function (e, t, n) {
                            var a = l(n, 'cookieLifetime'),
                              r = l(n, 'expires'),
                              i = l(n, 'domain'),
                              o = l(n, 'secure') ? 'Secure' : '';
                            if (r && 'SESSION' !== a && 'NONE' !== a) {
                              var s = '' !== t ? parseInt(a || 0, 10) : -60;
                              if (s) (r = new Date()).setTime(r.getTime() + 1000 * s);
                              else if (1 === r) {
                                var c = (r = new Date()).getYear();
                                r.setYear(c + 2 + (c < 1900 ? 1900 : 0));
                              }
                            } else r = 0;
                            return e && 'NONE' !== a
                              ? ((document.cookie =
                                  encodeURIComponent(e) +
                                  '=' +
                                  encodeURIComponent(t) +
                                  '; path=/;' +
                                  (r ? ' expires=' + r.toGMTString() + ';' : '') +
                                  (i ? ' domain=' + i + ';' : '') +
                                  o),
                                this.get(e) === t)
                              : 0;
                          },
                          remove: function (e, t) {
                            var n = l(t, 'domain');
                            (n = n ? ' domain=' + n + ';' : ''),
                              (document.cookie =
                                encodeURIComponent(e) +
                                '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                                n);
                          },
                        },
                        z = function (e) {
                          var t;
                          !e && G.location && (e = G.location.hostname);
                          var n,
                            a = (t = e).split('.');
                          for (n = a.length - 2; 0 <= n; n--)
                            if (
                              ((t = a.slice(n).join('.')), K.set('test', 'cookie', { domain: t }))
                            )
                              return K.remove('test', { domain: t }), t;
                          return '';
                        },
                        J = {
                          compare: n,
                          isLessThan: function (e, t) {
                            return n(e, t) < 0;
                          },
                          areVersionsDifferent: function (e, t) {
                            return 0 !== n(e, t);
                          },
                          isGreaterThan: function (e, t) {
                            return 0 < n(e, t);
                          },
                          isEqual: function (e, t) {
                            return 0 === n(e, t);
                          },
                        },
                        N = !!G.postMessage,
                        X = {
                          postMessage: function (e, t, n) {
                            var a = 1;
                            t &&
                              (N
                                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (n.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + a++ + '&' + e));
                          },
                          receiveMessage: function (t, n) {
                            var e;
                            try {
                              N &&
                                (t &&
                                  (e = function (e) {
                                    if (
                                      ('string' == typeof n && e.origin !== n) ||
                                      ('[object Function]' === Object.prototype.toString.call(n) &&
                                        !1 === n(e.origin))
                                    )
                                      return !1;
                                    t(e);
                                  }),
                                G.addEventListener
                                  ? G[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : G[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
                            } catch (t) {}
                          },
                        },
                        Z = function (e) {
                          var t,
                            n,
                            a = '0123456789',
                            r = '',
                            i = '',
                            o = 8,
                            s = 10,
                            c = 10;
                          if (1 == e) {
                            for (a += 'ABCDEF', t = 0; t < 16; t++)
                              (n = Math.floor(Math.random() * o)),
                                (r += a.substring(n, n + 1)),
                                (n = Math.floor(Math.random() * o)),
                                (i += a.substring(n, n + 1)),
                                (o = 16);
                            return r + '-' + i;
                          }
                          for (t = 0; t < 19; t++)
                            (n = Math.floor(Math.random() * s)),
                              (r += a.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (s = 3)
                                : (1 == t || 2 == t) && 10 != s && n < 2
                                ? (s = 10)
                                : 2 < t && (s = 10),
                              (n = Math.floor(Math.random() * c)),
                              (i += a.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (c = 3)
                                : (1 == t || 2 == t) && 10 != c && n < 2
                                ? (c = 10)
                                : 2 < t && (c = 10);
                          return r + i;
                        },
                        ee = function (a) {
                          const $___old_5a5c72ea39b7b48c = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_5a25179d3c6cc793 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_5a5c72ea39b7b48c)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_8343e440b270d768.XMLHttpRequest
                              ));
                            if ($___old_5a25179d3c6cc793)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_8343e440b270d768.XMLHttpRequest
                              ));
                            return function () {
                              return {
                                corsMetadata:
                                  ((e = 'none'),
                                  (t = !0),
                                  'undefined' != typeof XMLHttpRequest &&
                                    XMLHttpRequest === Object(XMLHttpRequest) &&
                                    ('withCredentials' in new XMLHttpRequest()
                                      ? (e = 'XMLHttpRequest')
                                      : 'undefined' != typeof XDomainRequest &&
                                        XDomainRequest === Object(XDomainRequest) &&
                                        (t = !1),
                                    0 <
                                      Object.prototype.toString
                                        .call(G.HTMLElement)
                                        .indexOf('Constructor') && (t = !1)),
                                  { corsType: e, corsCookiesEnabled: t }),
                                getCORSInstance: function () {
                                  const $___old_50bd62e35208f198 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    ),
                                    $___old_d693e6df15f2af21 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    );
                                  try {
                                    if ($___old_50bd62e35208f198)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_8343e440b270d768.XMLHttpRequest
                                      ));
                                    if ($___old_d693e6df15f2af21)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_8343e440b270d768.XMLHttpRequest
                                      ));
                                    return function () {
                                      return 'none' === this.corsMetadata.corsType
                                        ? null
                                        : new G[this.corsMetadata.corsType]();
                                    }.apply(this, arguments);
                                  } finally {
                                    if ($___old_50bd62e35208f198)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_50bd62e35208f198
                                      ));
                                    if ($___old_d693e6df15f2af21)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_d693e6df15f2af21
                                      ));
                                  }
                                },
                                fireCORS: function (i, e) {
                                  function t (e) {
                                    var t;
                                    try {
                                      if ((t = JSON.parse(e)) !== Object(t))
                                        return void o.handleCORSError(
                                          i,
                                          null,
                                          'Response is not JSON'
                                        );
                                    } catch (e) {
                                      return void o.handleCORSError(
                                        i,
                                        e,
                                        'Error parsing response as JSON'
                                      );
                                    }
                                    try {
                                      for (var n = i.callback, a = G, r = 0; r < n.length; r++)
                                        a = a[n[r]];
                                      a(t);
                                    } catch (e) {
                                      o.handleCORSError(i, e, 'Error forming callback function');
                                    }
                                  }
                                  var o = this;
                                  e && (i.loadErrorHandler = e);
                                  try {
                                    var n = this.getCORSInstance();
                                    n.open('get', i.corsUrl + '&ts=' + new Date().getTime(), !0),
                                      'XMLHttpRequest' === this.corsMetadata.corsType &&
                                        ((n.withCredentials = !0),
                                        (n.timeout = a.loadTimeout),
                                        n.setRequestHeader(
                                          'Content-Type',
                                          'application/x-www-form-urlencoded'
                                        ),
                                        (n.onreadystatechange = function () {
                                          4 === this.readyState &&
                                            200 === this.status &&
                                            t(this.responseText);
                                        })),
                                      (n.onerror = function (e) {
                                        o.handleCORSError(i, e, 'onerror');
                                      }),
                                      (n.ontimeout = function (e) {
                                        o.handleCORSError(i, e, 'ontimeout');
                                      }),
                                      n.send(),
                                      a._log.requests.push(i.corsUrl);
                                  } catch (a) {
                                    this.handleCORSError(i, a, 'try-catch');
                                  }
                                },
                                handleCORSError: function (e, t, n) {
                                  a.CORSErrors.push({ corsData: e, error: t, description: n }),
                                    e.loadErrorHandler &&
                                      ('ontimeout' === n
                                        ? e.loadErrorHandler(!0)
                                        : e.loadErrorHandler(!1));
                                },
                              };
                              var e, t;
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_5a5c72ea39b7b48c)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_5a5c72ea39b7b48c
                              ));
                            if ($___old_5a25179d3c6cc793)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_5a25179d3c6cc793
                              ));
                          }
                        },
                        te = {
                          POST_MESSAGE_ENABLED: !!G.postMessage,
                          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                          MILLIS_PER_DAY: 86400000,
                          ADOBE_MC: 'adobe_mc',
                          ADOBE_MC_SDID: 'adobe_mc_sdid',
                          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                          ADOBE_MC_TTL_IN_MIN: 5,
                          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                          FIRST_PARTY_SERVER_COOKIE: 's_ecid',
                        },
                        ne = function (g, t) {
                          var r = G.document;
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
                              var e,
                                t = 'http://fast.',
                                n =
                                  '?d_nsid=' +
                                  g.idSyncContainerID +
                                  '#' +
                                  encodeURIComponent(r.location.origin);
                              return (
                                this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                                g.loadSSL &&
                                  (t = g.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                                (e = t + this.subdomain + '.demdex.net/dest5.html' + n),
                                (this.iframeHost = this.getIframeHost(e)),
                                (this.id =
                                  'destination_publishing_iframe_' +
                                  this.subdomain +
                                  '_' +
                                  g.idSyncContainerID),
                                e
                              );
                            },
                            checkDPIframeSrc: function () {
                              var e =
                                '?d_nsid=' +
                                g.idSyncContainerID +
                                '#' +
                                encodeURIComponent(r.location.href);
                              'string' == typeof g.dpIframeSrc &&
                                g.dpIframeSrc.length &&
                                ((this.id =
                                  'destination_publishing_iframe_' +
                                  (g._subdomain || this.subdomain || new Date().getTime()) +
                                  '_' +
                                  g.idSyncContainerID),
                                (this.iframeHost = this.getIframeHost(g.dpIframeSrc)),
                                (this.url = g.dpIframeSrc + e));
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
                            messageSendingInterval: te.POST_MESSAGE_ENABLED ? null : 100,
                            onPageDestinationsFired: [],
                            jsonForComparison: [],
                            jsonDuplicates: [],
                            jsonWaiting: [],
                            jsonProcessed: [],
                            canSetThirdPartyCookies: !0,
                            receivedThirdPartyCookiesNotification: !1,
                            readyToAttachIframePreliminary: function () {
                              return !(
                                g.idSyncDisableSyncs ||
                                g.disableIdSyncs ||
                                g.idSyncDisable3rdPartySyncing ||
                                g.disableThirdPartyCookies ||
                                g.disableThirdPartyCalls
                              );
                            },
                            readyToAttachIframe: function () {
                              return (
                                this.readyToAttachIframePreliminary() &&
                                (this.doAttachIframe || g._doAttachIframe) &&
                                ((this.subdomain && 'nosubdomainreturned' !== this.subdomain) ||
                                  g._subdomain) &&
                                this.url &&
                                !this.startedAttachingIframe
                              );
                            },
                            attachIframe: function () {
                              function e () {
                                ((a = r.createElement('iframe')).sandbox =
                                  'allow-scripts allow-same-origin'),
                                  (a.title = 'Adobe ID Syncing iFrame'),
                                  (a.id = n.id),
                                  (a.name = n.id + '_name'),
                                  (a.style.cssText = 'display: none; width: 0; height: 0;'),
                                  (a.src = n.url),
                                  (n.newIframeCreated = !0),
                                  t(),
                                  r.body.appendChild(a);
                              }
                              function t (e) {
                                a.addEventListener('load', function () {
                                  (a.className = 'aamIframeLoaded'),
                                    (n.iframeHasLoaded = !0),
                                    n.fireIframeLoadedCallbacks(e),
                                    n.requestToProcess();
                                });
                              }
                              this.startedAttachingIframe = !0;
                              var n = this,
                                a = r.getElementById(this.id);
                              a
                                ? 'IFRAME' !== a.nodeName
                                  ? ((this.id += '_2'), (this.iframeIdChanged = !0), e())
                                  : ((this.newIframeCreated = !1),
                                    'aamIframeLoaded' !== a.className
                                      ? ((this.originalIframeHasLoadedAlready = !1),
                                        t(
                                          "The destination publishing iframe already exists from a different library, but hadn't loaded yet."
                                        ))
                                      : ((this.originalIframeHasLoadedAlready = !0),
                                        (this.iframeHasLoaded = !0),
                                        (this.iframe = a),
                                        this.fireIframeLoadedCallbacks(
                                          'The destination publishing iframe already exists from a different library, and had loaded alresady.'
                                        ),
                                        this.requestToProcess()))
                                : e(),
                                (this.iframe = a);
                            },
                            fireIframeLoadedCallbacks: function (t) {
                              this.iframeLoadedCallbacks.forEach(function (e) {
                                'function' == typeof e &&
                                  e({
                                    message:
                                      t ||
                                      'The destination publishing iframe was attached and loaded successfully.',
                                  });
                              }),
                                (this.iframeLoadedCallbacks = []);
                            },
                            requestToProcess: function (e) {
                              function t () {
                                a.jsonForComparison.push(e),
                                  a.jsonWaiting.push(e),
                                  a.processSyncOnPage(e);
                              }
                              var n,
                                a = this;
                              if (e === Object(e) && e.ibs)
                                if (
                                  ((n = JSON.stringify(e.ibs || [])),
                                  this.jsonForComparison.length)
                                ) {
                                  var r,
                                    i,
                                    o,
                                    s = !1;
                                  for (r = 0, i = this.jsonForComparison.length; r < i; r++)
                                    if (
                                      ((o = this.jsonForComparison[r]),
                                      n === JSON.stringify(o.ibs || []))
                                    ) {
                                      s = !0;
                                      break;
                                    }
                                  s ? this.jsonDuplicates.push(e) : t();
                                } else t();
                              if (
                                (this.receivedThirdPartyCookiesNotification ||
                                  !te.POST_MESSAGE_ENABLED ||
                                  this.iframeHasLoaded) &&
                                this.jsonWaiting.length
                              ) {
                                var c = this.jsonWaiting.shift();
                                this.process(c), this.requestToProcess();
                              }
                              g.idSyncDisableSyncs ||
                                g.disableIdSyncs ||
                                !this.iframeHasLoaded ||
                                !this.messages.length ||
                                this.sendingMessages ||
                                (this.throttleTimerSet ||
                                  ((this.throttleTimerSet = !0),
                                  setTimeout(function () {
                                    a.messageSendingInterval = te.POST_MESSAGE_ENABLED
                                      ? null
                                      : 150;
                                  }, this.THROTTLE_START)),
                                (this.sendingMessages = !0),
                                this.sendMessages());
                            },
                            getRegionAndCheckIfChanged: function (e, t) {
                              var n = g._getField('MCAAMLH'),
                                a = e.d_region || e.dcs_region;
                              return (
                                n
                                  ? a &&
                                    (g._setFieldExpire('MCAAMLH', t),
                                    g._setField('MCAAMLH', a),
                                    parseInt(n, 10) !== a &&
                                      ((this.regionChanged = !0),
                                      this.timesRegionChanged++,
                                      g._setField('MCSYNCSOP', ''),
                                      g._setField('MCSYNCS', ''),
                                      (n = a)))
                                  : (n = a) &&
                                    (g._setFieldExpire('MCAAMLH', t), g._setField('MCAAMLH', n)),
                                n || (n = ''),
                                n
                              );
                            },
                            processSyncOnPage: function (e) {
                              var t, n, a, r;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (a = 0; a < n; a++)
                                  (r = t[a]).syncOnPage &&
                                    this.checkFirstPartyCookie(r, '', 'syncOnPage');
                            },
                            process: function (e) {
                              var t,
                                n,
                                a,
                                r,
                                i,
                                o = encodeURIComponent,
                                s = !1;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (s = !0, a = 0; a < n; a++)
                                  (r = t[a]),
                                    (i = [
                                      o('ibs'),
                                      o(r.id || ''),
                                      o(r.tag || ''),
                                      $.encodeAndBuildRequest(r.url || [], ','),
                                      o(r.ttl || ''),
                                      '',
                                      '',
                                      r.fireURLSync ? 'true' : 'false',
                                    ]),
                                    r.syncOnPage ||
                                      (this.canSetThirdPartyCookies
                                        ? this.addMessage(i.join('|'))
                                        : r.fireURLSync &&
                                          this.checkFirstPartyCookie(r, i.join('|')));
                              s && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (e, t, n) {
                              var a = 'syncOnPage' === n,
                                r = a ? 'MCSYNCSOP' : 'MCSYNCS';
                              g._readVisitor();
                              var i,
                                o,
                                s = g._getField(r),
                                c = !1,
                                l = !1,
                                u = Math.ceil(new Date().getTime() / te.MILLIS_PER_DAY);
                              s
                                ? ((i = s.split('*')),
                                  (c = (o = this.pruneSyncData(i, e.id, u)).dataPresent),
                                  (l = o.dataValid),
                                  (c && l) || this.fireSync(a, e, t, i, r, u))
                                : ((i = []), this.fireSync(a, e, t, i, r, u));
                            },
                            pruneSyncData: function (e, t, n) {
                              var a,
                                r,
                                i,
                                o = !1,
                                s = !1;
                              for (r = 0; r < e.length; r++)
                                (a = e[r]),
                                  (i = parseInt(a.split('-')[1], 10)),
                                  a.match('^' + t + '-')
                                    ? ((o = !0), n < i ? (s = !0) : (e.splice(r, 1), r--))
                                    : i <= n && (e.splice(r, 1), r--);
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
                            fireSync: function (e, t, n, a, u, r) {
                              var d = this;
                              if (e) {
                                if ('img' === t.tag) {
                                  var i,
                                    o,
                                    s,
                                    c,
                                    l = t.url,
                                    p = g.loadSSL ? 'https:' : 'http:';
                                  for (i = 0, o = l.length; i < o; i++) {
                                    (s = l[i]), (c = /^\/\//.test(s));
                                    var m = new Image();
                                    m.addEventListener(
                                      'load',
                                      (function (o, s, c, l) {
                                        return function () {
                                          (d.onPagePixels[o] = null), g._readVisitor();
                                          var e,
                                            t,
                                            n,
                                            a,
                                            r = g._getField(u),
                                            i = [];
                                          if (r)
                                            for (t = 0, n = (e = r.split('*')).length; t < n; t++)
                                              (a = e[t]).match('^' + s.id + '-') || i.push(a);
                                          d.setSyncTrackingData(i, s, c, l);
                                        };
                                      })(this.onPagePixels.length, t, u, r)
                                    ),
                                      (m.src = (c ? p : '') + s),
                                      this.onPagePixels.push(m);
                                  }
                                }
                              } else this.addMessage(n), this.setSyncTrackingData(a, t, u, r);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                g._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push((te.POST_MESSAGE_ENABLED ? '' : t) + e);
                            },
                            setSyncTrackingData: function (e, t, n, a) {
                              e.push(t.id + '-' + (a + Math.ceil(t.ttl / 60 / 24))),
                                this.manageSyncsSize(e),
                                g._setField(n, e.join('*'));
                            },
                            sendMessages: function () {
                              var e,
                                t = this,
                                n = '',
                                a = encodeURIComponent;
                              this.regionChanged &&
                                ((n = a('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                                this.messages.length
                                  ? te.POST_MESSAGE_ENABLED
                                    ? ((e =
                                        n +
                                        a('---destpub-combined---') +
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
                              X.postMessage(e, this.url, this.iframe.contentWindow),
                                this.messagesPosted.push(e);
                            },
                            receiveMessage: function (e) {
                              var t,
                                n = /^---destpub-to-parent---/;
                              'string' == typeof e &&
                                n.test(e) &&
                                ('canSetThirdPartyCookies' ===
                                  (t = e.replace(n, '').split('|'))[0] &&
                                  ((this.canSetThirdPartyCookies = 'true' === t[1]),
                                  (this.receivedThirdPartyCookiesNotification = !0),
                                  this.requestToProcess()),
                                this.messagesReceived.push(e));
                            },
                            processIDCallData: function (e) {
                              (null == this.url ||
                                (e.subdomain && 'nosubdomainreturned' === this.subdomain)) &&
                                ('string' == typeof g._subdomain && g._subdomain.length
                                  ? (this.subdomain = g._subdomain)
                                  : (this.subdomain = e.subdomain || ''),
                                (this.url = this.getUrl())),
                                e.ibs instanceof Array &&
                                  e.ibs.length &&
                                  (this.doAttachIframe = !0),
                                this.readyToAttachIframe() &&
                                  (g.idSyncAttachIframeOnWindowLoad
                                    ? (t.windowLoaded ||
                                        'complete' === r.readyState ||
                                        'loaded' === r.readyState) &&
                                      this.attachIframe()
                                    : this.attachIframeASAP()),
                                'function' == typeof g.idSyncIDCallResult
                                  ? g.idSyncIDCallResult(e)
                                  : this.requestToProcess(e),
                                'function' == typeof g.idSyncAfterIDCallResult &&
                                  g.idSyncAfterIDCallResult(e);
                            },
                            canMakeSyncIDCall: function (e, t) {
                              return (
                                g._forceSyncIDCall || !e || t - e > te.DAYS_BETWEEN_SYNC_ID_CALLS
                              );
                            },
                            attachIframeASAP: function () {
                              function e () {
                                t.startedAttachingIframe ||
                                  (r.body ? t.attachIframe() : setTimeout(e, 30));
                              }
                              var t = this;
                              e();
                            },
                          };
                        },
                        F = {
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
                        U = {
                          getConfigNames: function () {
                            return Object.keys(F);
                          },
                          getConfigs: function () {
                            return F;
                          },
                          normalizeConfig: function (e) {
                            return 'function' != typeof e ? e : e();
                          },
                        },
                        B = function (e) {
                          var r = {};
                          return (
                            (e.on = function (e, t, n) {
                              if (!t || 'function' != typeof t)
                                throw new Error('[ON] Callback should be a function.');
                              r.hasOwnProperty(e) || (r[e] = []);
                              var a = r[e].push({ callback: t, context: n }) - 1;
                              return function () {
                                r[e].splice(a, 1), r[e].length || delete r[e];
                              };
                            }),
                            (e.off = function (e, t) {
                              r.hasOwnProperty(e) &&
                                (r[e] = r[e].filter(function (e) {
                                  if (e.callback !== t) return e;
                                }));
                            }),
                            (e.publish = function (e) {
                              if (r.hasOwnProperty(e)) {
                                var t = [].slice.call(arguments, 1);
                                r[e].slice(0).forEach(function (e) {
                                  e.callback.apply(e.context, t);
                                });
                              }
                            }),
                            e.publish
                          );
                        },
                        ae = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
                        re = {
                          AAM: 'aam',
                          ADCLOUD: 'adcloud',
                          ANALYTICS: 'aa',
                          CAMPAIGN: 'campaign',
                          ECID: 'ecid',
                          LIVEFYRE: 'livefyre',
                          TARGET: 'target',
                          MEDIA_ANALYTICS: 'mediaaa',
                        },
                        ie = (e((h = {}), re.AAM, 565), e(h, re.ECID, 565), h),
                        oe = (e((b = {}), re.AAM, [1, 10]), e(b, re.ECID, [1, 10]), b),
                        se = ['videoaa', 'iabConsentHash'],
                        ce =
                          ((v = re),
                          Object.keys(v).map(function (e) {
                            return v[e];
                          })),
                        le = function () {
                          var a = {};
                          return (
                            (a.callbacks = Object.create(null)),
                            (a.add = function (e, t) {
                              if (!c(t))
                                throw new Error(
                                  '[callbackRegistryFactory] Make sure callback is a function or an array of functions.'
                                );
                              a.callbacks[e] = a.callbacks[e] || [];
                              var n = a.callbacks[e].push(t) - 1;
                              return function () {
                                a.callbacks[e].splice(n, 1);
                              };
                            }),
                            (a.execute = function (e, t) {
                              if (a.callbacks[e]) {
                                t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                                try {
                                  for (; a.callbacks[e].length; ) {
                                    var n = a.callbacks[e].shift();
                                    'function' == typeof n
                                      ? n.apply(null, t)
                                      : n instanceof Array && n[1].apply(n[0], t);
                                  }
                                  delete a.callbacks[e];
                                } catch (a) {}
                              }
                            }),
                            (a.executeAll = function (n, e) {
                              (e || (n && !s(n))) &&
                                Object.keys(a.callbacks).forEach(function (e) {
                                  var t = void 0 !== n[e] ? n[e] : '';
                                  a.execute(e, t);
                                }, a);
                            }),
                            (a.hasCallbacks = function () {
                              return Boolean(Object.keys(a.callbacks).length);
                            }),
                            a
                          );
                        },
                        ue = function () {},
                        de = function (e) {
                          var t = window.console;
                          return !!t && 'function' == typeof t[e];
                        },
                        pe = function (a, r, e) {
                          return e()
                            ? function () {
                                if (de(a)) {
                                  for (
                                    var e = arguments.length, t = new Array(e), n = 0;
                                    n < e;
                                    n++
                                  )
                                    t[n] = arguments[n];
                                  console[a].apply(console, [r].concat(t));
                                }
                              }
                            : ue;
                        },
                        me = a,
                        ge = (function () {
                          for (var r = [], e = 0; e < 256; e++) {
                            for (var t = e, n = 0; n < 8; n++)
                              t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                            r.push(t);
                          }
                          return function (e, t) {
                            (e = unescape(encodeURIComponent(e))), t || (t = 0), (t ^= -1);
                            for (var n = 0; n < e.length; n++) {
                              var a = 255 & (t ^ e.charCodeAt(n));
                              t = (t >>> 8) ^ r[a];
                            }
                            return (t ^= -1) >>> 0;
                          };
                        })(),
                        fe = new me('[ADOBE OPT-IN]'),
                        he = function (e, t) {
                          return q(e) === t;
                        },
                        be = function (e, t) {
                          return e instanceof Array ? e : he(e, 'string') ? [e] : t || [];
                        },
                        ve = function (t) {
                          var e = Object.keys(t);
                          return (
                            !!e.length &&
                            e.every(function (e) {
                              return !0 === t[e];
                            })
                          );
                        },
                        ye = function (e, t) {
                          var n = 1 < arguments.length && void 0 !== t && arguments[1];
                          return (
                            !(!e || xe(e)) &&
                            be(e).every(function (e) {
                              return -1 < ce.indexOf(e) || (n && -1 < se.indexOf(e));
                            })
                          );
                        },
                        we = function (e, n) {
                          return e.reduce(function (e, t) {
                            return (e[t] = n), e;
                          }, {});
                        },
                        _e = function (e) {
                          return JSON.parse(JSON.stringify(e));
                        },
                        xe = function (e) {
                          return (
                            '[object Array]' === Object.prototype.toString.call(e) && !e.length
                          );
                        },
                        Ce = function (e) {
                          if (Ie(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        Pe = function (e) {
                          return void 0 === e || (Ie(e) ? ye(Object.keys(e), !0) : ke(e));
                        },
                        ke = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && he(e, 'string') && ye(Object.keys(t), !0);
                          } catch (e) {
                            return !1;
                          }
                        },
                        Ie = function (e) {
                          return null !== e && he(e, 'object') && !1 === Array.isArray(e);
                        },
                        Se = function () {},
                        je = function (e) {
                          return he(e, 'function') ? e() : e;
                        },
                        Te = function (e, t) {
                          Pe(e) || fe.error(''.concat(t));
                        },
                        Ee = function (t) {
                          return Object.keys(t).map(function (e) {
                            return t[e];
                          });
                        },
                        De = function (e) {
                          return Ee(e).filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                          });
                        },
                        Ae = function (d) {
                          return function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                              n = t.command,
                              a = t.params,
                              r = void 0 === a ? {} : a,
                              i = t.callback,
                              o = void 0 === i ? Se : i;
                            if (!n || -1 === n.indexOf('.'))
                              throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                              var s = n.split('.'),
                                c = d[s[0]],
                                l = s[1];
                              if (!c || 'function' != typeof c[l])
                                throw new Error('Make sure the plugin and API name exist.');
                              var u = Object.assign(r, { callback: o });
                              c[l].call(c, u);
                            } catch (d) {
                              fe.error('[execute] Something went wrong: ' + d.message);
                            }
                          };
                        };
                      (u.prototype = Object.create(Error.prototype)),
                        (u.prototype.constructor = u);
                      var Oe = 'fetchPermissions',
                        Re = '[OptIn#registerPlugin] Plugin is invalid.';
                      (d.Categories = re), (d.TimeoutError = u);
                      var Le = Object.freeze({ OptIn: d, IabPlugin: f }),
                        Me = function (d, p) {
                          d.publishDestinations = function (e, t, n) {
                            var a = t,
                              r = n;
                            try {
                              r = 'function' == typeof r ? r : e.callback;
                            } catch (d) {
                              r = function () {};
                            }
                            var i = p;
                            if (i.readyToAttachIframePreliminary()) {
                              if ('string' == typeof e) {
                                if (!e.length)
                                  return void r({ error: 'subdomain is not a populated string.' });
                                if (!(a instanceof Array && a.length))
                                  return void r({ error: 'messages is not a populated array.' });
                                var o = !1;
                                if (
                                  (a.forEach(function (e) {
                                    'string' == typeof e &&
                                      e.length &&
                                      (i.addMessage(e), (o = !0));
                                  }),
                                  !o)
                                )
                                  return void r({
                                    error: 'None of the messages are populated strings.',
                                  });
                              } else {
                                if (!$.isObject(e))
                                  return void r({ error: 'Invalid parameters passed.' });
                                var s = e;
                                if ('string' != typeof (e = s.subdomain) || !e.length)
                                  return void r({
                                    error: 'config.subdomain is not a populated string.',
                                  });
                                var c = s.urlDestinations;
                                if (!(c instanceof Array && c.length))
                                  return void r({
                                    error: 'config.urlDestinations is not a populated array.',
                                  });
                                var l = [];
                                c.forEach(function (e) {
                                  $.isObject(e) &&
                                    (e.hideReferrer
                                      ? e.message && i.addMessage(e.message)
                                      : l.push(e));
                                }),
                                  (function u () {
                                    l.length &&
                                      setTimeout(function () {
                                        var e = new Image(),
                                          t = l.shift();
                                        (e.src = t.url), i.onPageDestinationsFired.push(t), u();
                                      }, 100);
                                  })();
                              }
                              i.iframe
                                ? (r({
                                    message:
                                      'The destination publishing iframe is already attached and loaded.',
                                  }),
                                  i.requestToProcess())
                                : !d.subdomain && d._getField('MCMID')
                                ? ((i.subdomain = e),
                                  (i.doAttachIframe = !0),
                                  (i.url = i.getUrl()),
                                  i.readyToAttachIframe()
                                    ? (i.iframeLoadedCallbacks.push(function (e) {
                                        r({
                                          message:
                                            'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                                            (e.message || 'no result'),
                                        });
                                      }),
                                      i.attachIframe())
                                    : r({
                                        error:
                                          'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                                      }))
                                : i.iframeLoadedCallbacks.push(function (e) {
                                    r({
                                      message:
                                        'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
                                        (e.message || 'no result'),
                                    });
                                  });
                            } else
                              r({
                                error:
                                  'The destination publishing iframe is disabled in the Visitor library.',
                              });
                          };
                        },
                        Ve = function q (e) {
                          function t (e, t) {
                            return (e >>> t) | (e << (32 - t));
                          }
                          for (
                            var n,
                              a,
                              r = Math.pow,
                              i = r(2, 32),
                              o = '',
                              s = [],
                              c = 8 * e.length,
                              l = (q.h = q.h || []),
                              u = (q.k = q.k || []),
                              d = u.length,
                              p = {},
                              m = 2;
                            d < 64;
                            m++
                          )
                            if (!p[m]) {
                              for (n = 0; n < 313; n += m) p[n] = m;
                              (l[d] = (r(m, 0.5) * i) | 0), (u[d++] = (r(m, 1 / 3) * i) | 0);
                            }
                          for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
                          for (n = 0; n < e.length; n++) {
                            if ((a = e.charCodeAt(n)) >> 8) return;
                            s[n >> 2] |= a << (((3 - n) % 4) * 8);
                          }
                          for (s[s.length] = (c / i) | 0, s[s.length] = c, a = 0; a < s.length; ) {
                            var g = s.slice(a, (a += 16)),
                              f = l;
                            for (l = l.slice(0, 8), n = 0; n < 64; n++) {
                              var h = g[n - 15],
                                b = g[n - 2],
                                v = l[0],
                                y = l[4],
                                w =
                                  l[7] +
                                  (t(y, 6) ^ t(y, 11) ^ t(y, 25)) +
                                  ((y & l[5]) ^ (~y & l[6])) +
                                  u[n] +
                                  (g[n] =
                                    n < 16
                                      ? g[n]
                                      : (g[n - 16] +
                                          (t(h, 7) ^ t(h, 18) ^ (h >>> 3)) +
                                          g[n - 7] +
                                          (t(b, 17) ^ t(b, 19) ^ (b >>> 10))) |
                                        0);
                              (l = [
                                (w +
                                  ((t(v, 2) ^ t(v, 13) ^ t(v, 22)) +
                                    ((v & l[1]) ^ (v & l[2]) ^ (l[1] & l[2])))) |
                                  0,
                              ].concat(l))[4] = (l[4] + w) | 0;
                            }
                            for (n = 0; n < 8; n++) l[n] = (l[n] + f[n]) | 0;
                          }
                          for (n = 0; n < 8; n++)
                            for (a = 3; a + 1; a--) {
                              var _ = (l[n] >> (8 * a)) & 255;
                              o += (_ < 16 ? 0 : '') + _.toString(16);
                            }
                          return o;
                        },
                        Ne = function (e, t) {
                          return (
                            ('SHA-256' !== t &&
                              'SHA256' !== t &&
                              'sha256' !== t &&
                              'sha-256' !== t) ||
                              (e = Ve(e)),
                            e
                          );
                        },
                        Fe = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        Ue = Le.OptIn;
                      $.defineGlobalNamespace(), (window.adobe.OptInCategories = Ue.Categories);
                      var Be = function (a, n, e) {
                        function p () {
                          b._customerIDsHashChanged = !1;
                        }
                        function t (e) {
                          var a = e;
                          return function (e) {
                            var t = e || C.location.href;
                            try {
                              var n = b._extractParamFromUri(t, a);
                              if (n) return N.parsePipeDelimetedKeyValues(n);
                            } catch (e) {}
                          };
                        }
                        function r (e) {
                          function t (e, t, n) {
                            e && e.match(te.VALID_VISITOR_ID_REGEX) && (n === S && (x = !0), t(e));
                          }
                          t(e[S], b.setMarketingCloudVisitorID, S),
                            b._setFieldExpire(A, -1),
                            t(e[E], b.setAnalyticsVisitorID);
                        }
                        function i (e) {
                          (e = e || {}),
                            (b._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                            (b._supplementalDataIDCurrentConsumed =
                              e.supplementalDataIDCurrentConsumed || {}),
                            (b._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                            (b._supplementalDataIDLastConsumed =
                              e.supplementalDataIDLastConsumed || {});
                        }
                        function o (e) {
                          function r (e, t, n) {
                            return (n = n ? (n += '|') : n) + (e + '=') + encodeURIComponent(t);
                          }
                          function t (e, t) {
                            var n = t[0],
                              a = t[1];
                            return null != a && a !== O && (e = r(n, a, e)), e;
                          }
                          var n,
                            a = e.reduce(t, '');
                          return (
                            (n = (n = a) ? (n += '|') : n) + 'TS=' + N.getTimestampInSeconds()
                          );
                        }
                        function s (e) {
                          var t = e.minutesToLive,
                            n = '';
                          return (
                            (b.idSyncDisableSyncs || b.disableIdSyncs) &&
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
                        function c () {
                          return !(!b.configs.doesOptInApply || (v.optIn.isComplete && d()));
                        }
                        function d () {
                          return b.configs.doesOptInApply && b.configs.isIabContext
                            ? v.optIn.isApproved(v.optIn.Categories.ECID) && _
                            : v.optIn.isApproved(v.optIn.Categories.ECID);
                        }
                        function l () {
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
                              a = b[t];
                            b[t] = function (e) {
                              return d() && b.isAllowed()
                                ? a.apply(b, arguments)
                                : ('function' == typeof e && b._callCallback(e, [n]), n);
                            };
                          });
                        }
                        function u () {
                          var e = b._getAudienceManagerURLData(),
                            t = e.url;
                          return b._loadData(I, t, null, e);
                        }
                        function m (e, t) {
                          if (((_ = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t &&
                            t.gdprApplies &&
                            ((y = t.consentString),
                            (w = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            u(),
                            h();
                        }
                        function g (e, t) {
                          if (((_ = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies &&
                            ((y = t.consentString),
                            (w = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            b.init(),
                            h();
                        }
                        function f () {
                          v.optIn.isComplete &&
                            (v.optIn.isApproved(v.optIn.Categories.ECID)
                              ? b.configs.isIabContext
                                ? v.optIn.execute({
                                    command: 'iabPlugin.fetchConsentData',
                                    callback: g,
                                  })
                                : (b.init(), h())
                              : b.configs.isIabContext
                              ? v.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: m,
                                })
                              : (l(), h()));
                        }
                        function h () {
                          v.optIn.off('complete', f);
                        }
                        if (!e || e.split('').reverse().join('') !== a)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var b = this,
                          v = window.adobe,
                          y = '',
                          w = 0,
                          _ = !1,
                          x = !1;
                        b.version = '5.0.1';
                        var C = G,
                          P = C.Visitor;
                        (P.version = b.version),
                          (P.AuthState = H.AUTH_STATE),
                          (P.OptOut = H.OPT_OUT),
                          C.s_c_in || ((C.s_c_il = []), (C.s_c_in = 0)),
                          (b._c = 'Visitor'),
                          (b._il = C.s_c_il),
                          (b._in = C.s_c_in),
                          (b._il[b._in] = b),
                          C.s_c_in++,
                          (b._instanceType = 'regular'),
                          (b._log = { requests: [] }),
                          (b.marketingCloudOrgID = a),
                          (b.cookieName = 'AMCV_' + a),
                          (b.sessionCookieName = 'AMCVS_' + a),
                          (b.cookieDomain = z()),
                          (b.loadSSL = !0),
                          (b.loadTimeout = 30000),
                          (b.CORSErrors = []),
                          (b.marketingCloudServer = b.audienceManagerServer = 'dpm.demdex.net'),
                          (b.sdidParamExpiry = 30);
                        var k = null,
                          I = 'MC',
                          S = 'MCMID',
                          j = 'MCIDTS',
                          T = 'A',
                          E = 'MCAID',
                          D = 'AAM',
                          A = 'MCAAMB',
                          O = 'NONE',
                          R = function (e) {
                            return !Object.prototype[e];
                          },
                          L = ee(b);
                        (b.FIELDS = H.FIELDS),
                          (b.cookieRead = function (e) {
                            return K.get(e);
                          }),
                          (b.cookieWrite = function (e, t, n) {
                            var a = b.cookieLifetime ? ('' + b.cookieLifetime).toUpperCase() : '',
                              r = !1;
                            return (
                              b.configs &&
                                b.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (r = !0),
                              K.set(e, '' + t, {
                                expires: n,
                                domain: b.cookieDomain,
                                cookieLifetime: a,
                                secure: r,
                              })
                            );
                          }),
                          (b.resetState = function (e) {
                            e ? b._mergeServerState(e) : i();
                          }),
                          (b._isAllowedDone = !1),
                          (b._isAllowedFlag = !1),
                          (b.isAllowed = function () {
                            return (
                              b._isAllowedDone ||
                                ((b._isAllowedDone = !0),
                                (b.cookieRead(b.cookieName) ||
                                  b.cookieWrite(b.cookieName, 'T', 1)) &&
                                  (b._isAllowedFlag = !0)),
                              'T' === b.cookieRead(b.cookieName) &&
                                b._helpers.removeCookie(b.cookieName),
                              b._isAllowedFlag
                            );
                          }),
                          (b.setMarketingCloudVisitorID = function (e) {
                            b._setMarketingCloudFields(e);
                          }),
                          (b._use1stPartyMarketingCloudServer = !1),
                          (b.getMarketingCloudVisitorID = function (e, t) {
                            b.marketingCloudServer &&
                              b.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                              (b._use1stPartyMarketingCloudServer = !0);
                            var n = b._getAudienceManagerURLData('_setMarketingCloudFields'),
                              a = n.url;
                            return b._getRemoteField(S, a, e, t, n);
                          });
                        var M = function (t, e) {
                          var n = {};
                          b.getMarketingCloudVisitorID(function () {
                            e.forEach(function (e) {
                              n[e] = b._getField(e, !0);
                            }),
                              -1 !== e.indexOf('MCOPTOUT')
                                ? b.isOptedOut(
                                    function (e) {
                                      (n.MCOPTOUT = e), t(n);
                                    },
                                    null,
                                    !0
                                  )
                                : t(n);
                          }, !0);
                        };
                        (b.getVisitorValues = function (e, t) {
                          var n = {
                              MCMID: { fn: b.getMarketingCloudVisitorID, args: [!0], context: b },
                              MCOPTOUT: { fn: b.isOptedOut, args: [void 0, !0], context: b },
                              MCAID: { fn: b.getAnalyticsVisitorID, args: [!0], context: b },
                              MCAAMLH: {
                                fn: b.getAudienceManagerLocationHint,
                                args: [!0],
                                context: b,
                              },
                              MCAAMB: { fn: b.getAudienceManagerBlob, args: [!0], context: b },
                            },
                            a = t && t.length ? $.pluck(n, t) : n;
                          t && -1 === t.indexOf('MCAID') ? M(e, t) : Y(a, e);
                        }),
                          (b._currentCustomerIDs = {}),
                          (b._customerIDsHashChanged = !1),
                          (b._newCustomerIDsHash = ''),
                          (b.setCustomerIDs = function (e, t) {
                            if (!b.isOptedOut() && e) {
                              if (!$.isObject(e) || $.isObjectEmpty(e)) return !1;
                              var n, a, r, i;
                              for (n in (b._readVisitor(), e))
                                if (
                                  R(n) &&
                                  ((b._currentCustomerIDs.dataSources =
                                    b._currentCustomerIDs.dataSources || {}),
                                  (t = (a = e[n]).hasOwnProperty('hashType') ? a.hashType : t),
                                  a)
                                )
                                  if ('object' === q(a)) {
                                    var o = {};
                                    if (a.id) {
                                      if (t) {
                                        if (!(i = Ne(Fe(a.id), t))) return;
                                        (a.id = i), (o.hashType = t);
                                      }
                                      o.id = a.id;
                                    }
                                    null != a.authState && (o.authState = a.authState),
                                      (b._currentCustomerIDs.dataSources[n] = o);
                                  } else if (t) {
                                    if (!(i = Ne(Fe(a), t))) return;
                                    b._currentCustomerIDs.dataSources[n] = { id: i, hashType: t };
                                  } else b._currentCustomerIDs.dataSources[n] = { id: a };
                              var s = b.getCustomerIDs(!0),
                                c = b._getField('MCCIDH'),
                                l = '';
                              for (r in (c || (c = 0), s)) {
                                var u = s[r];
                                if (!$.isObjectEmpty(u))
                                  for (n in u)
                                    R(n) &&
                                      (l +=
                                        (l ? '|' : '') +
                                        n +
                                        '|' +
                                        ((a = u[n]).id ? a.id : '') +
                                        (a.authState ? a.authState : ''));
                              }
                              (b._newCustomerIDsHash = String(b._hash(l))),
                                b._newCustomerIDsHash !== c &&
                                  ((b._customerIDsHashChanged = !0), b._mapCustomerIDs(p));
                            }
                          }),
                          (b.syncIdentity = function (e, t) {
                            if (!b.isOptedOut() && e) {
                              if (!$.isObject(e) || $.isObjectEmpty(e)) return !1;
                              var n, a, r, i, o;
                              for (n in (b._readVisitor(), e))
                                if (
                                  R(n) &&
                                  ((b._currentCustomerIDs.nameSpaces =
                                    b._currentCustomerIDs.nameSpaces || {}),
                                  (t = (a = e[n]).hasOwnProperty('hashType') ? a.hashType : t),
                                  a && 'object' === q(a))
                                ) {
                                  var s = {};
                                  if (a.id) {
                                    if (t) {
                                      if (!(r = Ne(Fe(a.id), t))) return;
                                      (a.id = r), (s.hashType = t);
                                    }
                                    s.id = a.id;
                                  }
                                  null != a.authState && (s.authState = a.authState),
                                    a.dataSource &&
                                      ((b._currentCustomerIDs.dataSources =
                                        b._currentCustomerIDs.dataSources || {}),
                                      (i = a.dataSource),
                                      (b._currentCustomerIDs.dataSources[i] = s)),
                                    (b._currentCustomerIDs.nameSpaces[n] = s);
                                }
                              var c = b.getCustomerIDs(!0),
                                l = b._getField('MCCIDH'),
                                u = '';
                              for (o in (l || (l = '0'), c)) {
                                var d = c[o];
                                if (!$.isObjectEmpty(d))
                                  for (n in d)
                                    R(n) &&
                                      (u +=
                                        (u ? '|' : '') +
                                        n +
                                        '|' +
                                        ((a = d[n]).id ? a.id : '') +
                                        (a.authState ? a.authState : ''));
                              }
                              (b._newCustomerIDsHash = String(b._hash(u))),
                                b._newCustomerIDsHash !== l &&
                                  ((b._customerIDsHashChanged = !0), b._mapCustomerIDs(p));
                            }
                          }),
                          (b.getCustomerIDs = function (e) {
                            b._readVisitor();
                            var t,
                              n,
                              a = { dataSources: {}, nameSpaces: {} },
                              r = b._currentCustomerIDs.dataSources;
                            for (t in r)
                              R(t) &&
                                (n = r[t]).id &&
                                (a.dataSources[t] || (a.dataSources[t] = {}),
                                (a.dataSources[t].id = n.id),
                                null != n.authState
                                  ? (a.dataSources[t].authState = n.authState)
                                  : (a.dataSources[t].authState = P.AuthState.UNKNOWN),
                                n.hashType && (a.dataSources[t].hashType = n.hashType));
                            var i = b._currentCustomerIDs.nameSpaces;
                            for (t in i)
                              R(t) &&
                                (n = i[t]).id &&
                                (a.nameSpaces[t] || (a.nameSpaces[t] = {}),
                                (a.nameSpaces[t].id = n.id),
                                null != n.authState
                                  ? (a.nameSpaces[t].authState = n.authState)
                                  : (a.nameSpaces[t].authState = P.AuthState.UNKNOWN),
                                n.hashType && (a.nameSpaces[t].hashType = n.hashType));
                            return e ? a : a.dataSources;
                          }),
                          (b.setAnalyticsVisitorID = function (e) {
                            b._setAnalyticsFields(e);
                          }),
                          (b.getAnalyticsVisitorID = function (e, t, n) {
                            if (!N.isTrackingServerPopulated() && !n)
                              return b._callCallback(e, ['']), '';
                            var a = '';
                            if (
                              (n ||
                                (a = b.getMarketingCloudVisitorID(function () {
                                  b.getAnalyticsVisitorID(e, !0);
                                })),
                              a || n)
                            ) {
                              var r = n ? b.marketingCloudServer : b.trackingServer,
                                i = '';
                              b.loadSSL &&
                                (n
                                  ? b.marketingCloudServerSecure &&
                                    (r = b.marketingCloudServerSecure)
                                  : b.trackingServerSecure && (r = b.trackingServerSecure));
                              var o = {};
                              if (r) {
                                var s = 'http' + (b.loadSSL ? 's' : '') + '://' + r + '/id',
                                  c =
                                    'd_visid_ver=' +
                                    b.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(b.marketingCloudOrgID) +
                                    (a ? '&mid=' + encodeURIComponent(a) : '') +
                                    (b.idSyncDisable3rdPartySyncing || b.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  l = [
                                    's_c_il',
                                    b._in,
                                    '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (i =
                                  s +
                                  '?' +
                                  c +
                                  '&callback=s_c_il%5B' +
                                  b._in +
                                  '%5D._set' +
                                  (n ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (o.corsUrl = s + '?' + c),
                                  (o.callback = l);
                              }
                              return (o.url = i), b._getRemoteField(n ? S : E, i, e, t, o);
                            }
                            return '';
                          }),
                          (b.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              b.getMarketingCloudVisitorID(function () {
                                b.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var n = b._getField(E);
                              if (
                                (!n &&
                                  N.isTrackingServerPopulated() &&
                                  (n = b.getAnalyticsVisitorID(function () {
                                    b.getAudienceManagerLocationHint(e, !0);
                                  })),
                                n || !N.isTrackingServerPopulated())
                              ) {
                                var a = b._getAudienceManagerURLData(),
                                  r = a.url;
                                return b._getRemoteField('MCAAMLH', r, e, t, a);
                              }
                            }
                            return '';
                          }),
                          (b.getLocationHint = b.getAudienceManagerLocationHint),
                          (b.getAudienceManagerBlob = function (e, t) {
                            if (
                              b.getMarketingCloudVisitorID(function () {
                                b.getAudienceManagerBlob(e, !0);
                              })
                            ) {
                              var n = b._getField(E);
                              if (
                                (!n &&
                                  N.isTrackingServerPopulated() &&
                                  (n = b.getAnalyticsVisitorID(function () {
                                    b.getAudienceManagerBlob(e, !0);
                                  })),
                                n || !N.isTrackingServerPopulated())
                              ) {
                                var a = b._getAudienceManagerURLData(),
                                  r = a.url;
                                return (
                                  b._customerIDsHashChanged && b._setFieldExpire(A, -1),
                                  b._getRemoteField(A, r, e, t, a)
                                );
                              }
                            }
                            return '';
                          }),
                          (b._supplementalDataIDCurrent = ''),
                          (b._supplementalDataIDCurrentConsumed = {}),
                          (b._supplementalDataIDLast = ''),
                          (b._supplementalDataIDLastConsumed = {});
                        var V = !(b.getSupplementalDataID = function (e, t) {
                          b._supplementalDataIDCurrent ||
                            t ||
                            (b._supplementalDataIDCurrent = b._generateID(1));
                          var n = b._supplementalDataIDCurrent;
                          return (
                            b._supplementalDataIDLast && !b._supplementalDataIDLastConsumed[e]
                              ? ((n = b._supplementalDataIDLast),
                                (b._supplementalDataIDLastConsumed[e] = !0))
                              : n &&
                                (b._supplementalDataIDCurrentConsumed[e] &&
                                  ((b._supplementalDataIDLast = b._supplementalDataIDCurrent),
                                  (b._supplementalDataIDLastConsumed =
                                    b._supplementalDataIDCurrentConsumed),
                                  (b._supplementalDataIDCurrent = n = t ? '' : b._generateID(1)),
                                  (b._supplementalDataIDCurrentConsumed = {})),
                                n && (b._supplementalDataIDCurrentConsumed[e] = !0)),
                            n
                          );
                        });
                        (b._liberatedOptOut = null),
                          (b.getOptOut = function (e, t) {
                            var n = b._getAudienceManagerURLData('_setMarketingCloudFields'),
                              a = n.url;
                            if (d()) return b._getRemoteField('MCOPTOUT', a, e, t, n);
                            if (
                              (b._registerCallback('liberatedOptOut', e),
                              null !== b._liberatedOptOut)
                            )
                              return (
                                b._callAllCallbacks('liberatedOptOut', [b._liberatedOptOut]),
                                (V = !1),
                                b._liberatedOptOut
                              );
                            if (V) return null;
                            V = !0;
                            var r = 'liberatedGetOptOut';
                            return (
                              (n.corsUrl = n.corsUrl.replace(
                                /\.demdex\.net\/id\?/,
                                '.demdex.net/optOutStatus?'
                              )),
                              (n.callback = [r]),
                              (G[r] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    n,
                                    a = $.parseOptOut(e, t, O);
                                  (t = a.optOut),
                                    (n = 1000 * a.d_ottl),
                                    (b._liberatedOptOut = t),
                                    setTimeout(function () {
                                      b._liberatedOptOut = null;
                                    }, n);
                                }
                                b._callAllCallbacks('liberatedOptOut', [t]), (V = !1);
                              }),
                              L.fireCORS(n),
                              null
                            );
                          }),
                          (b.isOptedOut = function (n, a, e) {
                            a || (a = P.OptOut.GLOBAL);
                            var t = b.getOptOut(function (e) {
                              var t = e === P.OptOut.GLOBAL || 0 <= e.indexOf(a);
                              b._callCallback(n, [t]);
                            }, e);
                            return t ? t === P.OptOut.GLOBAL || 0 <= t.indexOf(a) : null;
                          }),
                          (b._fields = null),
                          (b._fieldsExpired = null),
                          (b._hash = function (e) {
                            var t,
                              n = 0;
                            if (e)
                              for (t = 0; t < e.length; t++)
                                (n = (n << 5) - n + e.charCodeAt(t)), (n &= n);
                            return n;
                          }),
                          (b._generateID = Z),
                          (b._generateLocalMID = function () {
                            var e = b._generateID(0);
                            return (B.isClientSideMarketingCloudVisitorID = !0), e;
                          }),
                          (b._callbackList = null),
                          (b._callCallback = function (e, t) {
                            try {
                              'function' == typeof e ? e.apply(C, t) : e[1].apply(e[0], t);
                            } catch (e) {}
                          }),
                          (b._registerCallback = function (e, t) {
                            t &&
                              (null == b._callbackList && (b._callbackList = {}),
                              null == b._callbackList[e] && (b._callbackList[e] = []),
                              b._callbackList[e].push(t));
                          }),
                          (b._callAllCallbacks = function (e, t) {
                            if (null != b._callbackList) {
                              var n = b._callbackList[e];
                              if (n) for (; 0 < n.length; ) b._callCallback(n.shift(), t);
                            }
                          }),
                          (b._addQuerystringParam = function (e, t, n, a) {
                            var r = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                              i = N.parseHash(e),
                              o = N.hashlessUrl(e);
                            if (-1 === o.indexOf('?')) return o + '?' + r + i;
                            var s = o.split('?'),
                              c = s[0] + '?',
                              l = s[1];
                            return c + N.addQueryParamAtLocation(l, r, a) + i;
                          }),
                          (b._extractParamFromUri = function (e, t) {
                            var n = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                            if (n && n.length) return decodeURIComponent(n[1]);
                          }),
                          (b._parseAdobeMcFromUrl = t(te.ADOBE_MC)),
                          (b._parseAdobeMcSdidFromUrl = t(te.ADOBE_MC_SDID)),
                          (b._attemptToPopulateSdidFromUrl = function (e) {
                            var t = b._parseAdobeMcSdidFromUrl(e),
                              n = 1000000000;
                            t && t.TS && (n = N.getTimestampInSeconds() - t.TS),
                              t &&
                                t.SDID &&
                                t.MCORGID === a &&
                                n < b.sdidParamExpiry &&
                                ((b._supplementalDataIDCurrent = t.SDID),
                                (b._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (b._attemptToPopulateIdsFromUrl = function () {
                            var e = b._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var t = N.getTimestampInSeconds() - e.TS;
                              if (Math.floor(t / 60) > te.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== a)
                                return;
                              r(e);
                            }
                          }),
                          (b._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((a = e),
                                  (e = N.isObject(a) ? a : JSON.parse(a))[b.marketingCloudOrgID])
                                ) {
                                  var t = e[b.marketingCloudOrgID];
                                  (n = t.customerIDs),
                                    N.isObject(n) && b.setCustomerIDs(n),
                                    i(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                            var n, a;
                          }),
                          (b._timeout = null),
                          (b._loadData = function (e, t, n, a) {
                            (t = b._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (a.url = b._addQuerystringParam(a.url, 'd_fieldgroup', e, 1)),
                              (a.corsUrl = b._addQuerystringParam(
                                a.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (B.fieldGroupObj[e] = !0),
                              a === Object(a) &&
                                a.corsUrl &&
                                'XMLHttpRequest' === L.corsMetadata.corsType &&
                                L.fireCORS(a, n, e);
                          }),
                          (b._clearTimeout = function (e) {
                            null != b._timeout &&
                              b._timeout[e] &&
                              (clearTimeout(b._timeout[e]), (b._timeout[e] = 0));
                          }),
                          (b._settingsDigest = 0),
                          (b._getSettingsDigest = function () {
                            if (!b._settingsDigest) {
                              var e = b.version;
                              b.audienceManagerServer && (e += '|' + b.audienceManagerServer),
                                b.audienceManagerServerSecure &&
                                  (e += '|' + b.audienceManagerServerSecure),
                                (b._settingsDigest = b._hash(e));
                            }
                            return b._settingsDigest;
                          }),
                          (b._readVisitorDone = !1),
                          (b._readVisitor = function () {
                            if (!b._readVisitorDone) {
                              b._readVisitorDone = !0;
                              var e,
                                t,
                                n,
                                a,
                                r,
                                i,
                                o = b._getSettingsDigest(),
                                s = !1,
                                c = b.cookieRead(b.cookieName),
                                l = new Date();
                              if (
                                (c ||
                                  x ||
                                  b.discardTrackingServerECID ||
                                  (c = b.cookieRead(te.FIRST_PARTY_SERVER_COOKIE)),
                                null == b._fields && (b._fields = {}),
                                c && 'T' !== c)
                              )
                                for (
                                  (c = c.split('|'))[0].match(/^[\-0-9]+$/) &&
                                    (parseInt(c[0], 10) !== o && (s = !0), c.shift()),
                                    c.length % 2 == 1 && c.pop(),
                                    e = 0;
                                  e < c.length;
                                  e += 2
                                )
                                  (n = (t = c[e].split('-'))[0]),
                                    (a = c[e + 1]),
                                    1 < t.length
                                      ? ((r = parseInt(t[1], 10)), (i = 0 < t[1].indexOf('s')))
                                      : ((r = 0), (i = !1)),
                                    s &&
                                      ('MCCIDH' === n && (a = ''),
                                      0 < r && (r = l.getTime() / 1000 - 60)),
                                    n &&
                                      a &&
                                      (b._setField(n, a, 1),
                                      0 < r &&
                                        ((b._fields['expire' + n] = r + (i ? 's' : '')),
                                        (l.getTime() >= 1000 * r ||
                                          (i && !b.cookieRead(b.sessionCookieName))) &&
                                          (b._fieldsExpired || (b._fieldsExpired = {}),
                                          (b._fieldsExpired[n] = !0))));
                              !b._getField(E) &&
                                N.isTrackingServerPopulated() &&
                                (c = b.cookieRead('s_vi')) &&
                                1 < (c = c.split('|')).length &&
                                0 <= c[0].indexOf('v1') &&
                                (0 <= (e = (a = c[1]).indexOf('[')) && (a = a.substring(0, e)),
                                a && a.match(te.VALID_VISITOR_ID_REGEX) && b._setField(E, a));
                            }
                          }),
                          (b._appendVersionTo = function (e) {
                            var t = 'vVersion|' + b.version,
                              n = e ? b._getCookieVersion(e) : null;
                            return (
                              n
                                ? J.areVersionsDifferent(n, b.version) &&
                                  (e = e.replace(te.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (b._writeVisitor = function () {
                            var e,
                              t,
                              n = b._getSettingsDigest();
                            for (e in b._fields)
                              R(e) &&
                                b._fields[e] &&
                                'expire' !== e.substring(0, 6) &&
                                ((t = b._fields[e]),
                                (n +=
                                  (n ? '|' : '') +
                                  e +
                                  (b._fields['expire' + e] ? '-' + b._fields['expire' + e] : '') +
                                  '|' +
                                  t));
                            (n = b._appendVersionTo(n)), b.cookieWrite(b.cookieName, n, 1);
                          }),
                          (b._getField = function (e, t) {
                            return null == b._fields ||
                              (!t && b._fieldsExpired && b._fieldsExpired[e])
                              ? null
                              : b._fields[e];
                          }),
                          (b._setField = function (e, t, n) {
                            null == b._fields && (b._fields = {}),
                              (b._fields[e] = t),
                              n || b._writeVisitor();
                          }),
                          (b._getFieldList = function (e, t) {
                            var n = b._getField(e, t);
                            return n ? n.split('*') : null;
                          }),
                          (b._setFieldList = function (e, t, n) {
                            b._setField(e, t ? t.join('*') : '', n);
                          }),
                          (b._getFieldMap = function (e, t) {
                            var n = b._getFieldList(e, t);
                            if (n) {
                              var a,
                                r = {};
                              for (a = 0; a < n.length; a += 2) r[n[a]] = n[a + 1];
                              return r;
                            }
                            return null;
                          }),
                          (b._setFieldMap = function (e, t, n) {
                            var a,
                              r = null;
                            if (t) for (a in ((r = []), t)) R(a) && (r.push(a), r.push(t[a]));
                            b._setFieldList(e, r, n);
                          }),
                          (b._setFieldExpire = function (e, t, n) {
                            var a = new Date();
                            a.setTime(a.getTime() + 1000 * t),
                              null == b._fields && (b._fields = {}),
                              (b._fields['expire' + e] =
                                Math.floor(a.getTime() / 1000) + (n ? 's' : '')),
                              t < 0
                                ? (b._fieldsExpired || (b._fieldsExpired = {}),
                                  (b._fieldsExpired[e] = !0))
                                : b._fieldsExpired && (b._fieldsExpired[e] = !1),
                              n &&
                                (b.cookieRead(b.sessionCookieName) ||
                                  b.cookieWrite(b.sessionCookieName, '1'));
                          }),
                          (b._findVisitorID = function (e) {
                            return (
                              e &&
                                ('object' === q(e) &&
                                  (e = e.d_mid
                                    ? e.d_mid
                                    : e.visitorID
                                    ? e.visitorID
                                    : e.id
                                    ? e.id
                                    : e.uuid
                                    ? e.uuid
                                    : '' + e),
                                e && 'NOTARGET' === (e = e.toUpperCase()) && (e = O),
                                (e && (e === O || e.match(te.VALID_VISITOR_ID_REGEX))) ||
                                  (e = '')),
                              e
                            );
                          }),
                          (b._setFields = function (e, t) {
                            if (
                              (b._clearTimeout(e),
                              null != b._loading && (b._loading[e] = !1),
                              B.fieldGroupObj[e] && B.setState(e, !1),
                              e === I)
                            ) {
                              !0 !== B.isClientSideMarketingCloudVisitorID &&
                                (B.isClientSideMarketingCloudVisitorID = !1);
                              var n = b._getField(S);
                              if (!n || b.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(n = 'object' === q(t) && t.mid ? t.mid : b._findVisitorID(t))
                                ) {
                                  if (
                                    b._use1stPartyMarketingCloudServer &&
                                    !b.tried1stPartyMarketingCloudServer
                                  )
                                    return (
                                      (b.tried1stPartyMarketingCloudServer = !0),
                                      void b.getAnalyticsVisitorID(null, !1, !0)
                                    );
                                  n = b._generateLocalMID();
                                }
                                b._setField(S, n);
                              }
                              (n && n !== O) || (n = ''),
                                'object' === q(t) &&
                                  ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                    b._setFields(D, t),
                                  b._use1stPartyMarketingCloudServer &&
                                    t.mid &&
                                    b._setFields(T, { id: t.id })),
                                b._callAllCallbacks(S, [n]);
                            }
                            if (e === D && 'object' === q(t)) {
                              var a = 604800;
                              null != t.id_sync_ttl &&
                                t.id_sync_ttl &&
                                (a = parseInt(t.id_sync_ttl, 10));
                              var r = F.getRegionAndCheckIfChanged(t, a);
                              b._callAllCallbacks('MCAAMLH', [r]);
                              var i = b._getField(A);
                              (t.d_blob || t.blob) &&
                                ((i = t.d_blob) || (i = t.blob),
                                b._setFieldExpire(A, a),
                                b._setField(A, i)),
                                i || (i = ''),
                                b._callAllCallbacks(A, [i]),
                                !t.error_msg &&
                                  b._newCustomerIDsHash &&
                                  b._setField('MCCIDH', b._newCustomerIDsHash);
                            }
                            if (e === T) {
                              var o = b._getField(E);
                              (o && !b.overwriteCrossDomainMCIDAndAID) ||
                                ((o = b._findVisitorID(t))
                                  ? o !== O && b._setFieldExpire(A, -1)
                                  : (o = O),
                                b._setField(E, o)),
                                (o && o !== O) || (o = ''),
                                b._callAllCallbacks(E, [o]);
                            }
                            if (b.idSyncDisableSyncs || b.disableIdSyncs)
                              F.idCallNotProcesssed = !0;
                            else {
                              F.idCallNotProcesssed = !1;
                              var s = {};
                              (s.ibs = t.ibs), (s.subdomain = t.subdomain), F.processIDCallData(s);
                            }
                            if (t === Object(t)) {
                              var c, l;
                              d() && b.isAllowed() && (c = b._getField('MCOPTOUT'));
                              var u = $.parseOptOut(t, c, O);
                              (c = u.optOut),
                                (l = u.d_ottl),
                                b._setFieldExpire('MCOPTOUT', l, !0),
                                b._setField('MCOPTOUT', c),
                                b._callAllCallbacks('MCOPTOUT', [c]);
                            }
                          }),
                          (b._loading = null),
                          (b._getRemoteField = function (n, e, t, a, r) {
                            var i,
                              o = '',
                              s = N.isFirstPartyAnalyticsVisitorIDCall(n),
                              c = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && b.isAllowed())
                              if (
                                (b._readVisitor(),
                                !(
                                  !(o = b._getField(n, !0 === c[n])) ||
                                  (b._fieldsExpired && b._fieldsExpired[n])
                                ) ||
                                  (b.disableThirdPartyCalls && !s))
                              )
                                o ||
                                  (n === S
                                    ? (b._registerCallback(n, t),
                                      (o = b._generateLocalMID()),
                                      b.setMarketingCloudVisitorID(o))
                                    : n === E
                                    ? (b._registerCallback(n, t),
                                      (o = ''),
                                      b.setAnalyticsVisitorID(o))
                                    : (a = !(o = '')));
                              else if (
                                (n === S || 'MCOPTOUT' === n
                                  ? (i = I)
                                  : 'MCAAMLH' === n || n === A
                                  ? (i = D)
                                  : n === E && (i = T),
                                i)
                              )
                                return (
                                  !e ||
                                    (null != b._loading && b._loading[i]) ||
                                    (null == b._loading && (b._loading = {}),
                                    (b._loading[i] = !0),
                                    i === D && (w = 0),
                                    b._loadData(
                                      i,
                                      e,
                                      function (e) {
                                        if (!b._getField(n)) {
                                          e && B.setState(i, !0);
                                          var t = '';
                                          n === S
                                            ? (t = b._generateLocalMID())
                                            : i === D && (t = { error_msg: 'timeout' }),
                                            b._setFields(i, t);
                                        }
                                      },
                                      r
                                    )),
                                  b._registerCallback(n, t),
                                  o || (e || b._setFields(i, { id: O }), '')
                                );
                            return (
                              (n !== S && n !== E) || o !== O || (a = !(o = '')),
                              t && a && b._callCallback(t, [o]),
                              o
                            );
                          }),
                          (b._setMarketingCloudFields = function (e) {
                            b._readVisitor(), b._setFields(I, e);
                          }),
                          (b._mapCustomerIDs = function (e) {
                            b.getAudienceManagerBlob(e, !0);
                          }),
                          (b._setAnalyticsFields = function (e) {
                            b._readVisitor(), b._setFields(T, e);
                          }),
                          (b._setAudienceManagerFields = function (e) {
                            b._readVisitor(), b._setFields(D, e);
                          }),
                          (b._getAudienceManagerURLData = function (e) {
                            var t = b.audienceManagerServer,
                              n = '',
                              a = b._getField(S),
                              r = b._getField(A, !0),
                              i = b._getField(E),
                              o = i && i !== O ? '&d_cid_ic=AVID%01' + encodeURIComponent(i) : '';
                            if (
                              (b.loadSSL &&
                                b.audienceManagerServerSecure &&
                                (t = b.audienceManagerServerSecure),
                              t)
                            ) {
                              var s,
                                c,
                                l,
                                u = b.getCustomerIDs(!0);
                              if (u)
                                for (c in u) {
                                  var d = u[c];
                                  if (!$.isObjectEmpty(d)) {
                                    var p = 'nameSpaces' === c ? '&d_cid_ns=' : '&d_cid_ic=';
                                    for (s in d)
                                      R(s) &&
                                        ((l = d[s]),
                                        (o +=
                                          p +
                                          encodeURIComponent(s) +
                                          '%01' +
                                          encodeURIComponent(l.id ? l.id : '') +
                                          (l.authState ? '%01' + l.authState : '')));
                                  }
                                }
                              e || (e = '_setAudienceManagerFields');
                              var m = 'http' + (b.loadSSL ? 's' : '') + '://' + t + '/id',
                                g =
                                  'd_visid_ver=' +
                                  b.version +
                                  (y && -1 !== m.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_consent=' + y
                                    : '') +
                                  (w && -1 !== m.indexOf('demdex.net') ? '&d_cf=' + w : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!a && b._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(b.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (b.idSyncContainerID || 0) +
                                  (a ? '&d_mid=' + encodeURIComponent(a) : '') +
                                  (b.idSyncDisable3rdPartySyncing || b.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === k
                                    ? '&d_coop_safe=1'
                                    : !1 === k
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                                  o,
                                f = ['s_c_il', b._in, e];
                              return {
                                url: (n = m + '?' + g + '&d_cb=s_c_il%5B' + b._in + '%5D.' + e),
                                corsUrl: m + '?' + g,
                                callback: f,
                              };
                            }
                            return { url: n };
                          }),
                          (b.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [S, b._getField(S)],
                                [E, b._getField(E)],
                                ['MCORGID', b.marketingCloudOrgID],
                              ];
                              return b._addQuerystringParam(e, te.ADOBE_MC, o(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (b.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || b.getSupplementalDataID(N.generateRandomString(), !0)))
                              return e;
                            try {
                              var n = o([
                                ['SDID', t],
                                ['MCORGID', b.marketingCloudOrgID],
                              ]);
                              return b._addQuerystringParam(e, te.ADOBE_MC_SDID, n);
                            } catch (t) {
                              return e;
                            }
                          });
                        var N = {
                          parseHash: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(t) : '';
                          },
                          hashlessUrl: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(0, t) : e;
                          },
                          addQueryParamAtLocation: function (e, t, n) {
                            var a = e.split('&');
                            return (n = null != n ? n : a.length), a.splice(n, 0, t), a.join('&');
                          },
                          isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
                            return (
                              e === E &&
                              (t || (t = b.trackingServer),
                              n || (n = b.trackingServerSecure),
                              !('string' != typeof (a = b.loadSSL ? n : t) || !a.length) &&
                                a.indexOf('2o7.net') < 0 &&
                                a.indexOf('omtrdc.net') < 0)
                            );
                            var a;
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            K.remove(e, { domain: b.cookieDomain });
                          },
                          isTrackingServerPopulated: function () {
                            return !!b.trackingServer || !!b.trackingServerSecure;
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
                        b._helpers = N;
                        var F = ne(b, P);
                        (b._destinationPublishing = F), (b.timeoutMetricsLog = []);
                        var U,
                          B = {
                            isClientSideMarketingCloudVisitorID: null,
                            MCIDCallTimedOut: null,
                            AnalyticsIDCallTimedOut: null,
                            AAMIDCallTimedOut: null,
                            fieldGroupObj: {},
                            setState: function (e, t) {
                              switch (e) {
                                case I:
                                  !1 === t
                                    ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1)
                                    : (this.MCIDCallTimedOut = t);
                                  break;
                                case T:
                                  !1 === t
                                    ? !0 !== this.AnalyticsIDCallTimedOut &&
                                      (this.AnalyticsIDCallTimedOut = !1)
                                    : (this.AnalyticsIDCallTimedOut = t);
                                  break;
                                case D:
                                  !1 === t
                                    ? !0 !== this.AAMIDCallTimedOut &&
                                      (this.AAMIDCallTimedOut = !1)
                                    : (this.AAMIDCallTimedOut = t);
                              }
                            },
                          };
                        (b.isClientSideMarketingCloudVisitorID = function () {
                          return B.isClientSideMarketingCloudVisitorID;
                        }),
                          (b.MCIDCallTimedOut = function () {
                            return B.MCIDCallTimedOut;
                          }),
                          (b.AnalyticsIDCallTimedOut = function () {
                            return B.AnalyticsIDCallTimedOut;
                          }),
                          (b.AAMIDCallTimedOut = function () {
                            return B.AAMIDCallTimedOut;
                          }),
                          (b.idSyncGetOnPageSyncInfo = function () {
                            return b._readVisitor(), b._getField('MCSYNCSOP');
                          }),
                          (b.idSyncByURL = function (e) {
                            if (!b.isOptedOut()) {
                              var t = s(e || {});
                              if (t.error) return t.error;
                              var n,
                                a,
                                r = e.url,
                                i = encodeURIComponent,
                                o = F;
                              return (
                                (r = r.replace(/^https:/, '').replace(/^http:/, '')),
                                (n = $.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (a = ['ibs', i(e.dpid), 'img', i(r), t.ttl, '', n]),
                                o.addMessage(a.join('|')),
                                o.requestToProcess(),
                                'Successfully queued'
                              );
                            }
                          }),
                          (b.idSyncByDataSource = function (e) {
                            if (!b.isOptedOut())
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  b.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                          }),
                          Me(b, F),
                          (b._getCookieVersion = function (e) {
                            e = e || b.cookieRead(b.cookieName);
                            var t = te.VERSION_REGEX.exec(e);
                            return t && 1 < t.length ? t[1] : null;
                          }),
                          (b._resetAmcvCookie = function (e) {
                            var t = b._getCookieVersion();
                            (t && !J.isLessThan(t, e)) || N.removeCookie(b.cookieName);
                          }),
                          (b.setAsCoopSafe = function () {
                            k = !0;
                          }),
                          (b.setAsCoopUnsafe = function () {
                            k = !1;
                          }),
                          (function () {
                            if (((b.configs = Object.create(null)), N.isObject(n)))
                              for (var e in n) R(e) && ((b[e] = n[e]), (b.configs[e] = n[e]));
                          })(),
                          l(),
                          (b.init = function () {
                            (c() &&
                              (v.optIn.fetchPermissions(f, !0),
                              !v.optIn.isApproved(v.optIn.Categories.ECID))) ||
                              U ||
                              ((U = !0),
                              (function () {
                                if (N.isObject(n)) {
                                  (b.idSyncContainerID = b.idSyncContainerID || 0),
                                    (k =
                                      'boolean' == typeof b.isCoopSafe
                                        ? b.isCoopSafe
                                        : N.parseBoolean(b.isCoopSafe)),
                                    b.resetBeforeVersion &&
                                      b._resetAmcvCookie(b.resetBeforeVersion),
                                    b._attemptToPopulateIdsFromUrl(),
                                    b._attemptToPopulateSdidFromUrl(),
                                    b._readVisitor();
                                  var e = b._getField(j),
                                    t = Math.ceil(new Date().getTime() / te.MILLIS_PER_DAY);
                                  b.idSyncDisableSyncs ||
                                    b.disableIdSyncs ||
                                    !F.canMakeSyncIDCall(e, t) ||
                                    (b._setFieldExpire(A, -1), b._setField(j, t)),
                                    b.getMarketingCloudVisitorID(),
                                    b.getAudienceManagerLocationHint(),
                                    b.getAudienceManagerBlob(),
                                    b._mergeServerState(b.serverState);
                                } else
                                  b._attemptToPopulateIdsFromUrl(),
                                    b._attemptToPopulateSdidFromUrl();
                              })(),
                              (function () {
                                if (!b.idSyncDisableSyncs && !b.disableIdSyncs) {
                                  F.checkDPIframeSrc();
                                  var e = function () {
                                    var e = F;
                                    e.readyToAttachIframe() && e.attachIframe();
                                  };
                                  C.addEventListener('load', function () {
                                    (P.windowLoaded = !0), e();
                                  });
                                  try {
                                    X.receiveMessage(function (e) {
                                      F.receiveMessage(e.data);
                                    }, F.iframeHost);
                                  } catch (e) {}
                                }
                              })(),
                              b.whitelistIframeDomains &&
                                te.POST_MESSAGE_ENABLED &&
                                ((b.whitelistIframeDomains =
                                  b.whitelistIframeDomains instanceof Array
                                    ? b.whitelistIframeDomains
                                    : [b.whitelistIframeDomains]),
                                b.whitelistIframeDomains.forEach(function (e) {
                                  var t = new W(a, e),
                                    n = Q(b, t);
                                  X.receiveMessage(n, e);
                                })));
                          });
                      };
                      Be.config = U;
                      var qe = (G.Visitor = Be),
                        Ge = function (r) {
                          if ($.isObject(r))
                            return Object.keys(r)
                              .filter(function (e) {
                                return '' !== r[e];
                              })
                              .reduce(function (e, t) {
                                var n = U.normalizeConfig(r[t]),
                                  a = $.normalizeBoolean(n);
                                return (e[t] = a), e;
                              }, Object.create(null));
                        },
                        He = Le.OptIn,
                        $e = Le.IabPlugin;
                      (qe.getInstance = function (a, e) {
                        if (!a) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        a.indexOf('@') < 0 && (a += '@AdobeOrg');
                        var t = (function () {
                          var e = G.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var n = e[t];
                              if (n && 'Visitor' === n._c && n.marketingCloudOrgID === a) return n;
                            }
                        })();
                        if (t) return t;
                        var r,
                          n = Ge(e);
                        (r = n || {}),
                          (G.adobe.optIn =
                            G.adobe.optIn ||
                            (function () {
                              var e = $.pluck(r, [
                                  'doesOptInApply',
                                  'previousPermissions',
                                  'preOptInApprovals',
                                  'isOptInStorageEnabled',
                                  'optInStorageExpiry',
                                  'isIabContext',
                                ]),
                                t = r.optInCookieDomain || r.cookieDomain;
                              (t = (t = t || z()) === window.location.hostname ? '' : t),
                                (e.optInCookieDomain = t);
                              var n = new He(e, { cookies: K });
                              if (e.isIabContext && e.doesOptInApply) {
                                var a = new $e();
                                n.registerPlugin(a);
                              }
                              return n;
                            })());
                        var i = a.split('').reverse().join(''),
                          o = new qe(a, null, i);
                        $.isObject(n) && n.cookieDomain && (o.cookieDomain = n.cookieDomain),
                          G.s_c_il.splice(--G.s_c_in, 1);
                        var s = $.getIeVersion();
                        if ('number' == typeof s && s < 10)
                          return o._helpers.replaceMethodsWithFunction(o, function () {});
                        var c,
                          l =
                            (function () {
                              try {
                                return G.self !== G.parent;
                              } catch (a) {
                                return !0;
                              }
                            })() &&
                            ((c = o).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== c.cookieRead('TEST_AMCV_COOKIE') ||
                              (c._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            G.parent
                              ? new A(a, n, o, G.parent)
                              : new qe(a, n, i);
                        return (o = null), l.init(), l;
                      }),
                        (function () {
                          function e () {
                            qe.windowLoaded = !0;
                          }
                          G.addEventListener
                            ? G.addEventListener('load', e)
                            : G.attachEvent && G.attachEvent('onload', e),
                            (qe.codeLoadEnd = new Date().getTime());
                        })();
                    })(),
                    Visitor);
                },
              },
              'adobe-mcid/src/view/utils/timeUnits.js': {
                script: function (e) {
                  var t = {
                    Hours: 3600,
                    Days: 86400,
                    Weeks: 604800,
                    Months: 2592000,
                    Years: 31536000,
                  };
                  e.exports = t;
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
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('../sharedModules/getTracker'),
                    i = n('../helpers/applyTrackerVariables');
                  e.exports = function (t, n) {
                    return r().then(
                      function (e) {
                        a.logger.info('Set variables on the tracker.'),
                          i(e, t.trackerProperties),
                          t.customSetup &&
                            t.customSetup.source &&
                            t.customSetup.source.call(n.element, n, e);
                      },
                      function (e) {
                        a.logger.error('Cannot set variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('../sharedModules/getTracker'),
                    i = function (e) {
                      return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                    },
                    o = function (e) {
                      return i(e) ? e.innerHTML : 'link clicked';
                    },
                    s = function (e, t, n) {
                      if ('page' === t.type) r.logger.info('Firing page view beacon.'), e.t();
                      else {
                        var a = { linkType: t.linkType || 'o', linkName: t.linkName || o(n) };
                        r.logger.info(
                          'Firing link track beacon using the values: ' + JSON.stringify(a) + '.'
                        ),
                          e.tl(i(n) ? n : 'true', a.linkType, a.linkName);
                      }
                    };
                  e.exports = function (t, n) {
                    return a().then(
                      function (e) {
                        s(e, t, n.element);
                      },
                      function (e) {
                        r.logger.error('Cannot send beacon: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/clearVariables.js': {
                name: 'clear-variables',
                displayName: 'Clear Variables',
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('../sharedModules/getTracker');
                  e.exports = function () {
                    return r().then(
                      function (e) {
                        e.clearVars && (a.logger.info('Clear variables.'), e.clearVars());
                      },
                      function (e) {
                        a.logger.error('Cannot clear variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, t, n, a) {
                  'use strict';
                  var r,
                    i = n('@adobe/reactor-cookie'),
                    o = n('@adobe/reactor-promise'),
                    s = n('@adobe/reactor-window'),
                    c = n('../helpers/settingsHelper'),
                    l = n('../helpers/augmenters'),
                    u = n('../helpers/applyTrackerVariables'),
                    d = n('../helpers/loadLibrary'),
                    p = n('../helpers/generateVersion')(a.buildInfo.turbineBuildDate),
                    m = 'beforeSettings',
                    g = a.getSharedModule('adobe-mcid', 'mcid-instance'),
                    f = function (e) {
                      return !e || 'true' === i.get(e);
                    },
                    h = function (a) {
                      return o
                        .all(
                          l.map(function (e) {
                            var t;
                            try {
                              t = e(a);
                            } catch (n) {
                              setTimeout(function () {
                                throw n;
                              });
                            }
                            return o.resolve(t);
                          })
                        )
                        .then(function () {
                          return a;
                        });
                    },
                    b = function (e) {
                      return (
                        g &&
                          (a.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = g)),
                        e
                      );
                    },
                    v = function (e) {
                      return (
                        a.logger.info('Setting version on tracker: "' + p + '".'),
                        'undefined' != typeof e.tagContainerMarker
                          ? (e.tagContainerMarker = p)
                          : 'string' == typeof e.version &&
                            e.version.substring(e.version.length - 5) !== '-' + p &&
                            (e.version += '-' + p),
                        e
                      );
                    },
                    y = function (e, t, n) {
                      return (
                        t.loadPhase === m &&
                          t.source &&
                          (a.logger.info('Calling custom script before settings.'),
                          t.source.call(s, n)),
                        u(n, e || {}),
                        t.loadPhase !== m &&
                          t.source &&
                          (a.logger.info('Calling custom script after settings.'),
                          t.source.call(s, n)),
                        n
                      );
                    },
                    w = function (e, t) {
                      return (
                        c.isAudienceManagementEnabled(e) &&
                          (t.loadModule('AudienceManagement'),
                          a.logger.info('Initializing AudienceManagement module'),
                          t.AudienceManagement.setup(e.moduleProperties.audienceManager.config)),
                        t
                      );
                    },
                    _ =
                      ((r = a.getExtensionSettings()),
                      f(r.trackingCookieName)
                        ? d(r)
                            .then(h)
                            .then(b)
                            .then(v)
                            .then(y.bind(null, r.trackerProperties, r.customSetup || {}))
                            .then(w.bind(null, r))
                        : o.reject('EU compliance was not acknowledged by the user.'));
                  e.exports = function () {
                    return _;
                  };
                },
                name: 'get-tracker',
                shared: !0,
              },
              'adobe-analytics/src/lib/sharedModules/augmentTracker.js': {
                name: 'augment-tracker',
                shared: !0,
                script: function (e, t, n) {
                  'use strict';
                  var a = n('../helpers/augmenters');
                  e.exports = function (e) {
                    a.push(e);
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var r = n('@adobe/reactor-query-string'),
                    i = n('@adobe/reactor-window'),
                    s = /eVar([0-9]+)/,
                    c = /prop([0-9]+)/,
                    l = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    u = function (e, t, n) {
                      return n.indexOf(e) === t;
                    },
                    d = function (e, t, n) {
                      var a = Object.keys(t).filter(l.test.bind(l));
                      return (
                        n && a.push('events'),
                        (a = a.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && e && u(e, t, a);
                          })
                          .join(',')
                      );
                    },
                    p = function (e, t) {
                      var n = t.map(function (e) {
                        return e.name;
                      });
                      return (n = n.concat((e.linkTrackEvents || '').split(',')))
                        .filter(function (e, t) {
                          return 'None' !== e && u(e, t, n);
                        })
                        .join(',');
                    },
                    a = function (e, t, n) {
                      e[t] = n[t].join(',');
                    },
                    m = function (r, e, t) {
                      var i = t.dynamicVariablePrefix || 'D=';
                      t[e].forEach(function (e) {
                        var t;
                        if ('value' === e.type) t = e.value;
                        else {
                          var n = s.exec(e.value);
                          if (n) t = i + 'v' + n[1];
                          else {
                            var a = c.exec(e.value);
                            a && (t = i + 'c' + a[1]);
                          }
                        }
                        r[e.name] = t;
                      });
                    },
                    g = {
                      linkDownloadFileTypes: a,
                      linkExternalFilters: a,
                      linkInternalFilters: a,
                      hierarchies: function (t, e, n) {
                        n[e].forEach(function (e) {
                          t[e.name] = e.sections.join(e.delimiter);
                        });
                      },
                      props: m,
                      eVars: m,
                      campaign: function (e, t, n) {
                        if ('queryParam' === n[t].type) {
                          var a = r.parse(i.location.search);
                          e[t] = a[n[t].value];
                        } else e[t] = n[t].value;
                      },
                      events: function (e, t, n) {
                        var a = n[t].map(function (e) {
                          var t = e.name;
                          return (
                            e.id && (t = [t, e.id].join(':')),
                            e.value && (t = [t, e.value].join('=')),
                            t
                          );
                        });
                        e[t] = a.join(',');
                      },
                    };
                  e.exports = function (t, a) {
                    var r = {};
                    (a = a || {}),
                      Object.keys(a).forEach(function (e) {
                        var t = g[e],
                          n = a[e];
                        t ? t(r, e, a) : (r[e] = n);
                      }),
                      r.events &&
                        t.events &&
                        0 < t.events.length &&
                        (r.events = t.events + ',' + r.events);
                    var e = a && a.events && 0 < a.events.length,
                      n = d(t, r, e);
                    n && (r.linkTrackVars = n);
                    var i = p(t, a.events || []);
                    i && (r.linkTrackEvents = i),
                      o.logger.info(
                        'Applying the following properties on tracker: "' +
                          JSON.stringify(r) +
                          '".'
                      ),
                      Object.keys(r).forEach(function (e) {
                        t[e] = r[e];
                      });
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/settingsHelper.js': {
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('@adobe/reactor-window'),
                    i = {
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
                      getReportSuites: function (e) {
                        var t = e.production;
                        return (
                          e[a.buildInfo.environment] && (t = e[a.buildInfo.environment]),
                          t.join(',')
                        );
                      },
                      isActivityMapEnabled: function (e) {
                        return !(
                          e.libraryCode &&
                          !e.libraryCode.useActivityMap &&
                          !1 === e.libraryCode.useActivityMap
                        );
                      },
                      isAudienceManagementEnabled: function (e) {
                        var t = !1;
                        return (
                          e &&
                            e.moduleProperties &&
                            e.moduleProperties.audienceManager &&
                            e.moduleProperties.audienceManager.config &&
                            r &&
                            r._satellite &&
                            r._satellite.company &&
                            r._satellite.company.orgId &&
                            (t = !0),
                          t
                        );
                      },
                    };
                  e.exports = i;
                },
              },
              'adobe-analytics/src/lib/helpers/augmenters.js': {
                script: function (e) {
                  'use strict';
                  e.exports = [];
                },
              },
              'adobe-analytics/src/lib/helpers/loadLibrary.js': {
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('@adobe/reactor-load-script'),
                    i = n('@adobe/reactor-window'),
                    o = n('@adobe/reactor-promise'),
                    s = n('./settingsHelper'),
                    c = n('./pollHelper'),
                    l = function (e, t) {
                      if (!i.s_gi)
                        throw new Error(
                          'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                            i.AppMeasurement
                        );
                      a.logger.info(
                        'Creating AppMeasurement tracker with these report suites: "' + t + '"'
                      );
                      var n = i.s_gi(t);
                      return (
                        e.libraryCode.scopeTrackerGlobally &&
                          (a.logger.info('Setting the tracker as window.s'), (i.s = n)),
                        n
                      );
                    },
                    u = function (e) {
                      var t = [];
                      switch (e.libraryCode.type) {
                        case s.LIB_TYPES.MANAGED:
                          t.push(a.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.APP_MEASUREMENT)),
                            s.isActivityMapEnabled(e) &&
                              t.push(a.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.ACTIVITY_MAP));
                          break;
                        case s.LIB_TYPES.CUSTOM:
                          t.push(e.libraryCode.source);
                          break;
                        case s.LIB_TYPES.REMOTE:
                          t.push(
                            'https:' === i.location.protocol
                              ? e.libraryCode.httpsUrl
                              : e.libraryCode.httpUrl
                          );
                      }
                      if (s.isAudienceManagementEnabled(e)) {
                        var n = { namespace: i._satellite.company.orgId };
                        (e.moduleProperties.audienceManager.config.visitorService = n),
                          t.push(a.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT));
                      }
                      return t;
                    },
                    d = function (e) {
                      return o.all(
                        u(e).map(function (e) {
                          return a.logger.info('Loading script: ' + e), r(e);
                        })
                      );
                    },
                    p = function (e, t) {
                      if (e.libraryCode.accounts)
                        if (t.sa) {
                          var n = s.getReportSuites(e.libraryCode.accounts);
                          a.logger.info(
                            'Setting the following report suites on the tracker: "' + n + '"'
                          ),
                            t.sa(n);
                        } else
                          a.logger.warn(
                            'Cannot set report suites on tracker. `sa` method not available.'
                          );
                      return t;
                    },
                    m = function (e) {
                      if (i[e])
                        return a.logger.info('Found tracker located at: "' + e + '".'), i[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    };
                  e.exports = function (e) {
                    var t = d(e);
                    switch (e.libraryCode.type) {
                      case s.LIB_TYPES.MANAGED:
                        var n = s.getReportSuites(e.libraryCode.accounts);
                        return t.then(l.bind(null, e, n));
                      case s.LIB_TYPES.PREINSTALLED:
                        return t
                          .then(c.poll.bind(null, i, e.libraryCode.trackerVariableName))
                          .then(p.bind(null, e));
                      case s.LIB_TYPES.CUSTOM:
                      case s.LIB_TYPES.REMOTE:
                        return t
                          .then(m.bind(null, e.libraryCode.trackerVariableName))
                          .then(p.bind(null, e));
                      default:
                        throw new Error('Cannot load library. Type not supported.');
                    }
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/generateVersion.js': {
                script: function (e) {
                  'use strict';
                  var t = 8,
                    n = function (e) {
                      return e.getUTCDate().toString(36);
                    },
                    a = function (e) {
                      return e.substr(e.length - 1);
                    },
                    r = function (e) {
                      return Math.floor(e.getUTCHours() / t);
                    },
                    i = function (e) {
                      var t = (e.getUTCMonth() + 1 + 12 * r(e)).toString(36);
                      return a(t);
                    },
                    o = function (e) {
                      return (e.getUTCFullYear() - 2010).toString(36);
                    };
                  e.exports = function (e) {
                    var t = new Date(e);
                    if (isNaN(t)) throw new Error('Invalid date provided');
                    return ('L' + o(t) + i(t) + n(t)).toUpperCase();
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/pollHelper.js': {
                script: function (e, t, n, a) {
                  'use strict';
                  var o = n('@adobe/reactor-promise'),
                    s = 40,
                    c = 250,
                    l = function (e, t, n) {
                      a.logger.info('Found property located at: "' + t + '"].'), e(n);
                    },
                    r = function (r, i) {
                      return new o(function (e, t) {
                        if (r[i]) return l(e, i, r[i]);
                        var n = 1,
                          a = setInterval(function () {
                            r[i] && (l(e, i, r[i]), clearInterval(a)),
                              s <= n &&
                                (clearInterval(a),
                                t(
                                  new Error(
                                    'Bailing out. Cannot find the variable name: "' + i + '"].'
                                  )
                                )),
                              n++;
                          }, c);
                      });
                    };
                  e.exports = {
                    poll: function (e, t) {
                      return (
                        a.logger.info(
                          'Waiting for the property to become accessible at: "' + t + '"].'
                        ),
                        r(e, t)
                      );
                    },
                  };
                },
              },
            },
            settings: {
              orgId: '5C0A123F5245AEEA0A490D45@AdobeOrg',
              customSetup: {
                source: function (e) {
                  function t (e, t, n) {
                    if (!e || !t) return !1;
                    var a,
                      r = unescape(t).toLowerCase(),
                      i = 2 < arguments.length && n;
                    for (var o in e) {
                      if (!e[o].str) return e[o].id;
                      if (!(a = e[o].str.toLowerCase()) || (i ? r == a : -1 < r.indexOf(a)))
                        return e[o].id;
                    }
                    return !1;
                  }
                  function n (e, t, n) {
                    if (!e || !t) return !1;
                    var a,
                      r = unescape(t).toLowerCase(),
                      i = 2 < arguments.length && n;
                    for (var o in e) {
                      if (!e[o].id) return e[o].str;
                      if (!(a = e[o].id.toLowerCase()) || (i ? r == a : -1 < r.indexOf(a)))
                        return e[o].str;
                    }
                    return !1;
                  }
                  function i (e) {
                    if (0 == arguments.length) return window.location;
                    var t,
                      n = e + '';
                    return (
                      n
                        ? (t = document.createElement('a')).setAttribute('href', n)
                        : ((t = []).href = t.hash = t.host = t.hostname = t.pathname = t.port = t.protocol = t.search =
                            ''),
                      t
                    );
                  }
                  function a (e, t) {
                    var n,
                      a = 1 < arguments.length ? t : window.location.href,
                      r = i(a).hostname + i(a).pathname;
                    for (n in e) if (-1 < r.indexOf(e[n].site)) return e[n];
                    return 0;
                  }
                  function r (e, t) {
                    return -1 !== e.indexOf(t, e.length - t.length);
                  }
                  function o (e, t) {
                    var n,
                      a = 0,
                      r = new Array();
                    for (t || (t = ','); e; )
                      (n = -1 < (n = e.indexOf(t)) ? n : e.length),
                        (r[a++] = e.substring(0, n)),
                        (e = e.substring(n + t.length));
                    return r;
                  }
                  (s_rsids2 = [
                    { site: 'www.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                    { site: 'support.webex.', siteValue: 'webex:support:', cc: 'USD', co: '' },
                    { site: 'buy.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                    { site: 'view.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                  ]),
                    (domainPeriods = [
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
                    ]);
                  var s = {
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
                    },
                    c = a(s_rsids2),
                    l = (c && 'string' == typeof c.siteValue && c.siteValue, a(domainPeriods)),
                    u = l && 'string' == typeof l.ccVal ? l.ccVal : '',
                    d = (n(s.countries, u), i().pathname),
                    p = o(0 == d.indexOf('/') ? d.substring(1) : d, '/');
                  if (
                    (1 < p.length && (b = t(s.sections, d) ? t(s.sections, d) : d),
                    r(document.URL, '/') && (b = t(s.sections, p[0]) ? t(s.sections, p[0]) : p[0]),
                    'undefined' == b || b === undefined)
                  ) {
                    var m = o(
                        0 == location.pathname.indexOf('/')
                          ? location.pathname.substring(1)
                          : location.pathname,
                        '/'
                      ),
                      g =
                        (v = o(
                          0 == location.pathname.indexOf('/')
                            ? location.pathname.substring(1)
                            : location.pathname,
                          '/'
                        ).length) - 1,
                      f = v - 2;
                    if (r(location.pathname, 'index.html') || r(location.pathname, 'index.php'))
                      var h = 'true';
                    if (0 == v) var b = 'home';
                    else
                      1 == v && r(location.pathname, '/')
                        ? (b = m[v - 1])
                        : 1 == v && 'true' == h
                        ? (b = 'home')
                        : 1 == v && r(location.pathname, '.html')
                        ? ((b = 'home'), (y = (y = m[g]).split('.'))[0])
                        : 'true' == h
                        ? (b = m[f])
                        : ((y = (y = m[g]).split('.')), (b = m[f]), y[0]);
                  } else {
                    var v;
                    if (
                      ((m = o(
                        0 == location.pathname.indexOf('/')
                          ? location.pathname.substring(1)
                          : location.pathname,
                        '/'
                      )),
                      (g =
                        (v = o(
                          0 == location.pathname.indexOf('/')
                            ? location.pathname.substring(1)
                            : location.pathname,
                          '/'
                        ).length) - 1),
                      (f = v - 2),
                      (r(location.pathname, 'index.html') || r(location.pathname, 'index.php')) &&
                        (h = 'true'),
                      0 == v)
                    );
                    else if (1 == v && r(location.pathname, '/'));
                    else if (1 == v && 'true' == h);
                    else if (1 == v && r(location.pathname, '.html'))
                      (y = (y = m[g]).split('.'))[0];
                    else if ('true' == h);
                    else {
                      var y;
                      (y = (y = m[g]).split('.'))[0];
                    }
                  }
                  return (
                    !(
                      -1 <
                      document.location.pathname
                        .toLowerCase()
                        .indexOf('lbx/call-me-country-map.html')
                    ) &&
                    !(-1 < document.URL.indexOf('/lbx/global_sales_num.html')) &&
                    (-1 < document.URL.indexOf('pricing/trial/confirmationpage.html') &&
                      ((e.eVar108 = e.getTimeToComplete('stop', 'em-chk')),
                      (e.eVar100 = e.getTimeToComplete('stop', 'gttcconfirmation'))),
                    -1 < document.URL.indexOf('/pricing/trial/loadingpage.html') &&
                      (e.eVar99 = e.getTimeToComplete('stop', 'gttcloading')),
                    (e.visitorNamespace = 'ciscowebex'),
                    (e.trackingServer = 'metrics.webex.com'),
                    void (e.trackingServerSecure = 'smetrics.webex.com'))
                  );
                },
              },
              libraryCode: {
                type: 'custom',
                source:
                  'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/EX2f1ca257492c46ddbf38a4c435c38c52-libraryCode_source.min.js',
                trackerVariableName: 's',
              },
              trackerProperties: {
                charSet: 'UTF-8',
                pageURL: '%s_url%',
                currencyCode: 'USD',
                trackingServer: 'metrics.webex.com',
                trackInlineStats: !0,
                visitorNamespace: 'ciscowebex',
                trackDownloadLinks: !0,
                trackExternalLinks: !0,
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
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
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
                    { value: 'pricing\\/trial\\/confirmationpage\\.html', valueIsRegex: !0 },
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
                  customSetup: { source: function () {} },
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
                    { value: '^www\\.webex\\.co', valueIsRegex: !0 },
                    { value: '^use\\.webex\\.com$', valueIsRegex: !0 },
                    { value: '^www3-webex\\.cisco\\.com$', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '\\/lbx\\/global_sales|lbx\\/call-me-country', valueIsRegex: !0 },
                    { value: '\\/LP=\\d{1,4}', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
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
                  bubbleFireIfChildFired: !1,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'training-online', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.co', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC9f9e6e4c70a34bb498fb4e79f4f2de24-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                      valueIsRegex: !0,
                    },
                    { value: 'www-auth-webex.cisco.com', valueIsRegex: !0 },
                    { value: 'wbxapp-pub-prd2-01:4503', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '\\/lbx\\/global_sales|lbx\\/call-me-country', valueIsRegex: !0 },
                    { value: '\\/LP=\\d{1,4}', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
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
                settings: { paths: [{ value: 'sign-up', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCbd17b638af2f4d9ab53d87198b87641a-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                    { value: '/buy/order.html', valueIsRegex: !0 },
                    { value: '/buy/new-order.html', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      (document.cookie =
                        'wbxofferFlag=upgrade;expires=0;domain=.webex.com;path=/'),
                      !0
                    );
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
                settings: { paths: [{ value: '\\/pricing\\/cart\\.html', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.webex.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCf936ab52b4df412fa9961c23bfdfcff7-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                settings: { paths: [{ value: 'order-status', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'cart.webex.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC71aed0a3e8e74bb8b75efc8961379c5d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                      valueIsRegex: !0,
                    },
                    { value: 'www-auth-webex.cisco.com', valueIsRegex: !0 },
                    { value: 'wbxapp-pub-prd2-01:4503', valueIsRegex: !0 },
                    { value: 'www\\.webex\\.com', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
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
                settings: { paths: [{ value: '/maintenancesupport.html', valueIsRegex: !0 }] },
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
                  paths: [{ value: 'pricing\\/buy\\/account\\-create\\.html', valueIsRegex: !0 }],
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
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.co', valueIsRegex: !0 }] },
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
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCc078513b6f7e42fcb388cae5b4089d42-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 90,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCe7af07b2fc544fe0b17947dfe1dced83-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                    { value: 'www\\.webex\\.com', valueIsRegex: !0 },
                    { value: 'use\\.webex\\.com', valueIsRegex: !0 },
                    { value: 'www\\.webex\\.es', valueIsRegex: !0 },
                    { value: 'www\\.webex\\.co\\.', valueIsRegex: !0 },
                    {
                      value: 'origin-webex-(dev|qa|lt|sb|stg|uat)\\.cisco\\.com',
                      valueIsRegex: !0,
                    },
                    { value: 'www-auth-webex\\.cisco\\.com', valueIsRegex: !0 },
                    { value: 'wbxapp-pub-prd2-01:4503', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '\\/LP=\\d{1,4}', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "var webex = webex || {};\nwebex.util = webex.util || {};\nwebex.util.data = (function () {\n  var gathered = {};\n\n  var utilURL = (function () {\n    var urlCleaned;\n\n    var updateURLParameter = function (url, paramKey, paramValue) {\n      var caseInsensitiveKey = new RegExp('^' + paramKey + '$', 'i');\n      var splits;\n      var parameters;\n      var urlFull = null;\n      var urlBase = null;\n      var urlAnchor = null;\n      var urlQueryString = null;\n      var urlParameters = null;\n      var key;\n      var i;\n\n      splits = url.split('?');\n      urlBase = splits[0];\n      urlQueryString = splits[1];\n\n      if (urlQueryString) {\n        splits = urlQueryString.split('#');\n        urlParameters = splits[0];\n        urlAnchor = splits[1];\n\n        parameters = urlParameters.split('&');\n\n        for (i = 0; i < parameters.length; i += 1) {\n          key = parameters[i].split('=')[0];\n          if (caseInsensitiveKey.test(key)) {\n            // Replace the value. Keep the original case of the key.\n            parameters[i] = key + '=' + paramValue;\n          }\n        }\n\n        urlParameters = parameters.join('&');\n      }\n\n      urlFull = urlBase;\n      urlFull += urlParameters ? '?' + urlParameters : '';\n      urlFull += urlAnchor ? '#' + urlAnchor : '';\n\n      return urlFull;\n    };\n\n    var parseQueryString = function (q) {\n      // Parameter keys are converted to all lower case.\n      qs = (function (a) {\n        var b = {};\n        var p;\n        if (a === '') return b;\n        for (var i = 0; i < a.length; ++i) {\n          p = a[i].split('=', 2);\n          if (p.length === 1) b[p[0]] = '';\n          // else b[p[0].toLowerCase()] = decodeURIComponent(p[1].replace(/\\+/g, ' '));\n          else b[p[0].toLowerCase()] = p[1];\n        }\n        return b;\n      })(q.split('&'));\n\n      return qs;\n    };\n\n    var getParameterFromPageUrl = function (param) {\n      var urlRaw = document.location.href;\n      var urlCleaned = clean(urlRaw);\n\n      return getParameterFromUrl(param, urlCleaned);\n    };\n\n    var getParameterFromUrl = function (param, url) {\n      var queryString = url.substr(url.indexOf('?') + 1);\n      var qs = parseQueryString(queryString);\n      // Parameter key must be all lower case for lookup.\n      var value = qs[param.toLowerCase()] || '';\n\n      return value;\n    };\n\n    var cleanEmailAddress = function (email, replacement) {\n      var splits;\n\n      email = decodeURIComponent(email);\n      splits = email.split('@');\n      // Email domain is not PII.\n      email = splits.length === 2 ? replacement + '@' + splits[1] : replacement;\n      email = encodeURIComponent(email);\n\n      return email;\n    };\n\n    var removePII = function (url, replacement) {\n      // Remove personally identifiable information (PII).\n      var cleaned = url;\n      var AD = cleanEmailAddress(getParameterFromUrl('AD', url) || '', replacement);\n      var email = cleanEmailAddress(getParameterFromUrl('email', url) || '', replacement);\n\n      // Remove email address.\n      cleaned = updateURLParameter(cleaned, 'email', email);\n      // Remove first name.\n      cleaned = updateURLParameter(cleaned, 'FN', replacement);\n      // Remove last name.\n      cleaned = updateURLParameter(cleaned, 'LN', replacement);\n      // Remove p_url.\n      cleaned = updateURLParameter(cleaned, 'p_url', replacement);\n      // Remove for post-meeting landing page.\n      cleaned = updateURLParameter(cleaned, 'AD', AD);\n      cleaned = updateURLParameter(cleaned, 'displayName', replacement);\n      cleaned = updateURLParameter(cleaned, 'NM', replacement);\n\n      return cleaned;\n    };\n\n    var clean = function (url) {\n      var redacted = 'REDACTED';\n      var cleaned = removePII(url, redacted);\n\n      return cleaned;\n    };\n\n    var init = (function () {\n      var urlRaw = document.location.href;\n      urlCleaned = clean(urlRaw);\n    })();\n\n    return {\n      parameter: getParameterFromPageUrl,\n      clean: clean,\n      urlCleaned: urlCleaned,\n    };\n  })();\n\n  // -------------------------------------------------------------------------\n  var utilDGID = (function () {\n    var data = {};\n    var invalid = 'invalid';\n    var functions = {\n      '1': 'Media',\n      '2': 'Social',\n      '3': 'Push Communication',\n      '4': 'In-Product Messaging',\n      '5': 'Video',\n      '6': 'Cisco',\n      '7': 'CCTG',\n      '8': 'Partners',\n    };\n    var channels = {\n      '1': 'Organic Social',\n      '2': 'Paid Social',\n      '3': 'Programmatic',\n      '4': 'SEM',\n      '5': 'Content Syndication ',\n      '6': 'Sponsored Content ',\n      '7': 'Email',\n      '8': 'Text/SMS Message',\n      '9': 'Push Notification',\n      '10': 'Web Product Messaging',\n      '11': 'Mobile App Messaging',\n      '12': 'Brightcove',\n      '13': 'Web',\n      '14': 'CCTG - Paid Social',\n      '15': 'CCTG - Organic Social',\n      '16': 'Out of Home',\n      '17': 'CCTG - Emerge',\n      '18': 'CCTG - Sales',\n      '19': 'CCTG - Email',\n      '20': 'Affiliate',\n    };\n    var placements = {\n      '1': 'Bing',\n      '2': 'Bing',\n      '3': 'Facebook',\n      '4': 'FBX',\n      '5': 'GDN',\n      '6': 'Gmail',\n      '7': 'Google',\n      '8': 'Google+',\n      '9': 'LinkedIn',\n      '10': 'Pandora',\n      '11': 'Spotify',\n      '12': 'Triplelift',\n      '13': 'Twitter',\n      '14': 'Web',\n      '15': 'Yahoo',\n      '16': 'Youtube',\n      '17': 'Baidu',\n      '18': 'Eloqua',\n      '19': 'MarketFirst',\n      '20': 'Salesperson',\n      '21': 'Mobile Device',\n      '22': 'Spark Post Session',\n      '23': 'W11 Post-Attendee',\n      '24': 'MC Post-Meeting',\n      '25': 'W11 Top Bar',\n      '26': 'W11 Sidebar',\n      '27': 'W11 Ticker',\n      '28': 'W11 Account Sidebar',\n      '29': 'W11 Account Ticker',\n      '30': 'Spark App',\n      '31': 'WebEx App',\n      '32': 'Landing Page',\n      '33': 'Hub',\n      '34': 'Cisco Expert Talks',\n      '35': 'Auto-Con Email',\n      '36': 'Spark Adoption Gallery',\n      '37': 'MC Curtain',\n      '38': 'MC Invite Widget',\n      '39': 'MC Scheduler',\n      '40': 'MC Top Bar',\n      '41': 'Snapchat',\n      '42': 'Airport - Public',\n      '43': 'Airport - Members Area',\n      '44': 'CCTG - Emerge Website',\n      '45': 'CCTG - TeamTV Website',\n      '46': 'CCTG - SparkVR Website',\n      '47': 'CCTG - Sales Email',\n      '48': 'CCTG - Monica Website',\n      '49': 'Cisco - Newsroom',\n      '50': 'Cisco - Email Send',\n      '51': 'Partner',\n      '52': 'In-Content CTA',\n      '53': 'Instagram',\n    };\n    var channelTactics = {\n      '1': 'Acquisition-Modeling',\n      '2': 'Article',\n      '3': 'Case Study',\n      '4': 'CRM',\n      '5': 'Digital Radio',\n      '6': 'Graphic',\n      '7': 'Image',\n      '8': 'Infographic\t',\n      '9': 'Mobile',\n      '10': 'Native',\n      '11': 'Remarketing',\n      '12': 'Search',\n      '13': 'Search Retargeting',\n      '14': 'Text',\n      '15': 'Video',\n      '16': 'Video',\n      '17': 'Visual Blog',\n      '18': 'Webcast',\n      '19': 'WebEx Blog',\n      '20': 'Whitepaper',\n      '21': 'Customer Research',\n      '22': 'Analyst Research',\n      '23': 'How-to',\n      '24': 'Usage Tips',\n      '25': 'Transaction',\n      '26': 'Product Offer',\n      '27': 'Promotion/Discount',\n      '28': 'Influencer Program',\n      '29': 'Contact Sales',\n      '30': 'RAD',\n      '31': 'Video Testimonial',\n      '32': 'Video How-To',\n      '33': 'Video Commercial',\n      '34': 'Video Advertisement',\n      '35': 'Video Live Demo',\n      '36': 'Hub Referral',\n      '37': 'Webinar',\n      '38': 'CCTG - Product Website',\n      '39': 'E-Book',\n      '40': 'Email - Content Syndication',\n      '41': 'Telemarketing',\n      '42': 'Checklist',\n      '43': 'Native Advertising',\n    };\n    var personas = {\n      '1': 'Undefined',\n      '2': 'Enablers',\n      '3': 'End Users',\n      '4': 'Sellers',\n      '5': 'Stable, Tenured',\n      '6': 'Tellers',\n      '7': 'Up and Comers',\n    };\n    var goals = {\n      '1': 'Awareness',\n      '2': 'Basic Account',\n      '3': 'Basic to Premium',\n      '4': 'Call Sales Team',\n      '5': 'Free Trial',\n      '6': 'Premium 100',\n      '7': 'Request a Demo',\n      '8': 'Upgrade',\n      '9': 'Download App',\n      '10': 'Nurture',\n      '11': 'Activation',\n      '12': 'Adoption',\n      '13': 'Cart abandon',\n      '14': 'Drip',\n      '15': 'Hotline / Chat',\n      '16': 'On-board',\n      '17': 'Recycle',\n      '18': 'Retention',\n      '19': 'Upsell',\n      '20': 'Waner',\n      '21': 'Live demo',\n      '22': 'Premium',\n      '23': 'MQL',\n    };\n    var products = {\n      '1': 'Cisco Spark',\n      '2': 'Collaboration Meeting Rooms (CMR)',\n      '3': 'Collaboration Solutions',\n      '4': 'WebEx Event Center',\n      '5': 'WebEx Meeting Center',\n      '6': 'WebEx Meetings',\n      '7': 'WebEx Training Center',\n      '8': 'WebEx Support Center',\n      '9': 'Project Storm',\n      '10': 'MC+Spark',\n      '11': 'Spark Board',\n    };\n\n    var getCountry = function (value) {\n      var country = invalid;\n\n      // Format values properly.\n      if (/^[a-z]{2}$/i.test(value)) {\n        country = value.toUpperCase();\n      } else if (/^Global$/i.test(value)) {\n        country = 'Global';\n      }\n\n      return country;\n    };\n\n    var lookup = function (key, values) {\n      var cleanedKey = cleanKey(key);\n      var value = Object.prototype.hasOwnProperty.call(values, cleanedKey) ? values[cleanedKey] : invalid;\n\n      return value;\n    };\n\n    var trimLeadingZeroes = function (s) {\n      return s.replace(/^0+/, '');\n    };\n\n    var cleanKey = function (s) {\n      // A key must have 1-4 digits. We will trim any leading zeroes for subsequent lookup.\n      var validKey = /^\\d{1,4}$/;\n      var cleaned = s;\n\n      if (validKey.test(cleaned)) {\n        cleaned = trimLeadingZeroes(cleaned);\n      } else {\n        cleaned = invalid;\n      }\n\n      return cleaned;\n    };\n\n    var validateDgid = function (dgid) {\n      // DGID key should have 8 positions delimited by \"-\".\n      var isValid = false;\n\n      if (typeof dgid === 'string') {\n        isValid = dgid.split('-').length === 8;\n      }\n\n      return isValid;\n    };\n\n    var decodeDgid = function (dgid) {\n      var isValidDgid = validateDgid(dgid);\n      var keys;\n      var decoded = {};\n      var dgFunction = invalid;\n      var dgChannel = invalid;\n      var dgPlacement = invalid;\n      var dgCountry = invalid;\n      var dgChannelTactic = invalid;\n      var dgPersona = invalid;\n      var dgGoal = invalid;\n      var dgProduct = invalid;\n\n      if (isValidDgid) {\n        try {\n          keys = dgid.split('-');\n          dgFunction = lookup(keys[0], functions);\n          dgChannel = lookup(keys[1], channels);\n          dgPlacement = lookup(keys[2], placements);\n          dgCountry = getCountry(keys[3]);\n          dgChannelTactic = lookup(keys[4], channelTactics);\n          dgPersona = lookup(keys[5], personas);\n          dgGoal = lookup(keys[6], goals);\n          dgProduct = lookup(keys[7], products);\n        } catch (e) {\n          // Do nothing.\n        }\n      }\n\n      decoded = {\n        dg_function: dgFunction,\n        dg_channel: dgChannel,\n        dg_placement: dgPlacement,\n        dg_country: dgCountry,\n        dg_channel_tactic: dgChannelTactic,\n        dg_persona: dgPersona,\n        dg_goal: dgGoal,\n        dg_product: dgProduct,\n      };\n\n      return decoded;\n    };\n\n    var getDGID = function () {\n      // In order of preference, check DG, then DGID parameters.\n      var dgid = {};\n      dgid.key = utilURL.parameter('DG');\n      if (dgid.key === '') {\n        dgid.key = utilURL.parameter('DGID');\n      }\n      dgid.decoded = decodeDgid(dgid.key);\n\n      return dgid;\n    };\n\n    var init = (function () {\n      data = getDGID();\n    })();\n\n    return {\n      data: data,\n    };\n  })();\n  // -------------------------------------------------------------------------\n  var utilUTM = (function () {\n    var urlParameters;\n    var hasUrlParameters;\n\n    var getUrlParameters = function () {\n      // UTM Source: PaidSearch, PaidSocial, Programmatic, OrganicSocial etc.\n      // UTM Channel: GoogleAds / FacebookAds / TwitterAds etc\n      // UTM Campaign: Campaign name\n      // UTM Content: Ad Set / Ad Group\n      // UTM Medium: Ad name\n      parameters = {\n        campaign: utilURL.parameter('utm_campaign'),\n        channel: utilURL.parameter('utm_channel'),\n        content: utilURL.parameter('utm_content'),\n        medium: utilURL.parameter('utm_medium'),\n        source: utilURL.parameter('utm_source'),\n      };\n\n      return parameters;\n    };\n\n    var init = (function () {\n      urlParameters = getUrlParameters();\n\n      hasUrlParameters =\n        parameters.campaign + parameters.channel + parameters.content + parameters.medium + parameters.source !== '';\n    })();\n\n    return {\n      parameters: urlParameters,\n      hasParameters: hasUrlParameters,\n    };\n  })();\n  // -------------------------------------------------------------------------\n  // post-meeting landing page\n  var pmlp = (function () {\n    var data = {};\n\n    var getUserType = function () {\n      var url = utilURL.urlCleaned;\n      var userType = '';\n      if (/\\/post-meeting\\/host\\//.test(url)) {\n        userType = 'host';\n      } else if (/\\/post-meeting\\/attendee\\//.test(url)) {\n        userType = 'attendee';\n      } else if (/\\/post-meeting\\/index\\.html/.test(url)) {\n        userType = utilURL.parameter('userType').toLowerCase() || '';\n      }\n\n      return userType;\n    };\n\n    var getData = function () {\n      var data = {\n        billingMode: utilURL.parameter('billingMode'),\n        userType: getUserType(),\n      };\n\n      return data;\n    };\n\n    var isPmlp;\n\n    var init = (function () {\n      data = getData();\n\n      isPmlp = data.userType !== '';\n    })();\n\n    return {\n      data: data,\n      isPmlp: isPmlp,\n    };\n  })();\n  // -------------------------------------------------------------------------\n\n  var getReferrerURL = function () {\n    var url = document.referrer || '';\n\n    url = utilURL.clean(url);\n\n    return url;\n  };\n\n  var getReferrerDomain = function () {\n    var domain;\n    var url = document.referrer;\n\n    var matches = url.match(/:\\/\\/(.[^/]+)/);\n\n    if (matches !== null && matches[1] !== null) {\n      domain = matches[1];\n    } else {\n      domain = '';\n    }\n\n    return domain;\n  };\n\n  var getReferrerChannel = function () {\n    var domain = getReferrerDomain();\n    var patternDirect = /^$/;\n    var patternInternal = /(blog|help)\\.webex\\.com/i;\n    // Use none to bucket exclusions with all lower environment, webex.co.*, and non- blog. and help. webex.com traffic.\n    var patternNone = /(wbxapp-(auth|pub)-|origin-webex-[a-z]+.cisco\\.com|\\.webex\\.co\\.|(?!blog|help)\\.webex\\.com)/i;\n    var patternSearch = /\\.(aol|ask|askjeeves|baidu|bing|chacha|duckduckgo|excite|google|lycos|msxml|searchencrypt|yahoo|yandex)\\./i;\n    var patternSocial = /\\.(facebook|linkedin)\\.com/i;\n    var channels = {\n      direct: 'direct',\n      internal: 'internal',\n      none: 'none',\n      other: 'other',\n      search: 'search engine',\n      social: 'social',\n    };\n    var channel = channels.other;\n\n    if (patternDirect.test(domain)) {\n      channel = channels.direct;\n    } else if (patternInternal.test(domain)) {\n      channel = channels.internal;\n    } else if (patternNone.test(domain)) {\n      channel = channels.none;\n    } else if (patternSearch.test(domain)) {\n      channel = channels.search;\n    } else if (patternSocial.test(domain)) {\n      channel = channels.social;\n    }\n\n    if (/^(search engine|social)$/i.test(channel)) {\n      channel = isPaidTraffic() ? channel + ' - paid' : channel + ' - organic';\n    }\n\n    return channel;\n  };\n\n  var getPsearchID = function () {\n    var param = decodeURIComponent(utilURL.parameter('psearchID'));\n\n    return param;\n  };\n\n  var getTrackID = function () {\n    var trackID = utilURL.parameter('TrackID');\n\n    return trackID;\n  };\n\n  var isPaidTraffic = function () {\n    // Check if any of the following values exist.\n    var isPaid = utilDGID.data.key !== '' || utilUTM.hasParameters;\n\n    return isPaid;\n  };\n\n  var getTargeterValue = function (property) {\n    var value;\n    try {\n      value = JSON.parse(localStorage.getItem('targeter')).for_analysis[property];\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getPageName = function () {\n    var name;\n\n    var isFile = function (url) {\n      var value = /^file:\\/\\//i.test(url);\n      return value;\n    };\n\n    var isPageNotFound = function () {\n      value = false;\n      var translationPageNotFound = [\n        'Page not Found', // en\n        'Seite nicht gefunden', // de\n        'Página no encontrada', // es\n        'Page non trouvée', // fr\n        'ページが見つかりません - Cisco Webex', // ja\n        'Página não encontrada', // pt\n        '页面未找到', // zh_CN\n        '找不到頁面', // zh_HK\n        'Page not Found',\n        '페이지를 찾을 수 없음', // ko\n        'No se encontró la página.', // es_MX\n      ];\n      var metaTitle;\n\n      try {\n        metaTitle = document.querySelector('meta[name=title]').content.toLowerCase();\n      } catch (e) {\n        metaTitle = '';\n      }\n\n      if (metaTitle !== '') {\n        for (var i = 0; i < translationPageNotFound.length; i++) {\n          value = translationPageNotFound[i].toLowerCase().indexOf(metaTitle) > -1;\n          if (value) break;\n        }\n      }\n\n      return value;\n    };\n\n    var url = document.URL;\n\n    name = isPageNotFound()\n      ? 'page-not-found'\n      : isFile(url)\n      ? 'file'\n      : /www\\.webex\\.com\\/join\\//i.test(url)\n      ? 'join'\n      : /www\\.webex\\.com\\/meet\\//i.test(url)\n      ? 'meet'\n      : _satellite.getVar('p_n').replace(':', '');\n\n    return name;\n  };\n\n  var getPageCategory = function () {\n    return '';\n  };\n\n  var gatherData = function () {\n    var dgid = utilDGID.data;\n    var utm = utilUTM.parameters;\n    var isPaid = isPaidTraffic();\n    var cleanedURL = utilURL.urlCleaned;\n    var data = {\n      pageName: getPageName(),\n      pageCategory: getPageCategory(),\n      destinationURL: cleanedURL,\n      referringURL: getReferrerURL(),\n      referringDomain: getReferrerDomain(),\n      referringChannel: getReferrerChannel(),\n      utm: utm,\n      DGID: dgid,\n      trackID: getTrackID(),\n      psearchID: getPsearchID(),\n      isPaidTraffic: isPaid,\n    };\n\n    var mainUrl = cleanedURL\n      .replace(/[\\?|#].+/, '')\n      .replace(/[?]/g, '')\n      .replace(/^http(s?):\\/\\//i, '');\n    var fullUrl = cleanedURL.replace(/^http(s?):\\/\\//i, '');\n    var userLang = _satellite.cookie.get('user_lang') || '';\n    var userLocale;\n    if (cleanedURL.indexOf('/www.webex.co.in') > 0) userLocale = 'in';\n    else if (cleanedURL.indexOf('/www.webex.com.cn') > 0) userLocale = 'cn';\n    else if (cleanedURL.indexOf('/www.webex.com.br') > 0) userLocale = 'br';\n    else if (cleanedURL.indexOf('/www.webex.com.mx/') > 0) userLocale = 'mx';\n    else if (cleanedURL.indexOf('/www.webex.co.kr/') > 0) userLocale = 'kr';\n    else if (cleanedURL.indexOf('/www.webex.es/') > 0) userLocale = 'es';\n    else if (cleanedURL.indexOf('/www.webex.co.it/') > 0) userLocale = 'it';\n    else if (cleanedURL.indexOf('/www.webex.com/it/') > 0) userLocale = 'it';\n    else if (cleanedURL.indexOf('/www.webex.com/es/') > 0) userLocale = 'es';\n    else if (cleanedURL.indexOf('/www.webex.com/ko/') > 0) userLocale = 'ko';\n    else if (cleanedURL.indexOf('/www.webex.com/hk/') > 0) userLocale = 'it';\n    else if (cleanedURL.indexOf('/www.webex.com/br/') > 0) userLocale = 'br';\n    else userLocale = _satellite.cookie.get('user_locale') || '';\n\n    userLang = userLang.toLowerCase();\n    userLocale = userLocale.toLowerCase();\n\n    // Add to the data object.\n    data.pageViewedEventProperties = {\n      page_name: data.pageName,\n      page_category: data.pageCategory,\n      custom_referrer_url: data.referringURL,\n      main_page_url: mainUrl,\n      page_url: fullUrl,\n      domain: location.host,\n      locale: userLocale,\n      lang: userLang,\n      dg_param: data.DGID.key,\n      trackID: data.trackID,\n      psearchID: data.psearchID,\n    };\n\n    data.targeter = {\n      domain: getTargeterValue('domain'),\n      company_name: getTargeterValue('company_name'),\n      company_size: getTargeterValue('company_size'),\n      industry_category: getTargeterValue('industry_category'),\n      industry_sub_category: getTargeterValue('industry_sub_category'),\n      segment: getTargeterValue('segment'),\n    };\n\n    if (pmlp.isPmlp) {\n      data.pmlp = pmlp.data;\n      data.pageViewedEventProperties.pmlp_user_type = data.pmlp.userType;\n      data.pageViewedEventProperties.pmlp_billing_mode = data.pmlp.billingMode;\n    }\n\n    return data;\n  };\n\n  var init = (function () {\n    gathered = gatherData();\n  })();\n\n  return {\n    gathered: gathered,\n    utilURL: utilURL,\n  };\n})();\n",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "var utilDataLayer = (function(data) {\n  var digitalData = {};\n\n  var getProperty = function(p) {\n    var value;\n\n    try {\n      value = data[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var hasUtm = function(utm) {\n    var hasUtm = utm.campaign + utm.channel + utm.content + utm.medium + utm.source !== '';\n\n    return hasUtm;\n  };\n\n  var setDigitalData = function() {\n    var pageName = getProperty('pageName');\n    var pageCategory = getProperty('pageCategory');\n    var TrackID = getProperty('trackID');\n    var psearchID = getProperty('psearchID');\n    var destinationURL = getProperty('destinationURL');\n    var referringURL = getProperty('referringURL');\n    var referringDomain = getProperty('referringDomain');\n    var referringChannel = getProperty('referringChannel');\n    var demandGeneration = getProperty('DGID');\n    var utm = getProperty('utm');\n    var targeter = getProperty('targeter');\n\n    digitalData = {\n      page: {\n        pageInfo: {\n          pageName: pageName,\n          pageCategory: pageCategory,\n          destinationURL: destinationURL,\n          referringURL: referringURL,\n          referringDomain: referringDomain,\n          referringChannel: referringChannel,\n        },\n      },\n      user: [\n        {\n          segment: {},\n        },\n      ],\n    };\n    var userProperties = digitalData.user[0].segment;\n\n    // Only add user properties that exist.\n    if (demandGeneration.key !== '') userProperties.demandGeneration = demandGeneration;\n    if (hasUtm(utm)) userProperties.utm = utm;\n    if (TrackID !== '') userProperties.TrackID = TrackID;\n    if (psearchID !== '') userProperties.psearchID = psearchID;\n    if (targeter !== '') userProperties.targeter = targeter;\n  };\n\n  var init = (function() {\n    setDigitalData();\n  })();\n\n  return {\n    digitalData: digitalData,\n  };\n})(webex.util.data.gathered);\n\nvar digitalData = utilDataLayer.digitalData;\n",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
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
                settings: { paths: [{ value: '^(\\/)$', valueIsRegex: !0 }] },
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
                    source: function (e, t) {
                      (t.prop25 =
                        _satellite.getVar('SystemDown Error Code Value') +
                        ' : ' +
                        _satellite.getVar('SignUp Error Cookie')),
                        (t.prop31 = _satellite.getVar('Referrer')),
                        (t.abort = !0);
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
                  elementProperties: [{ name: 'className', value: 'question', valueIsRegex: !0 }],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = jQuery(this).parent().find('.question').text();
                    return _satellite.setVar('Question', e), !0;
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
                settings: { paths: [{ value: 'downloads.html', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCc3af767abce24c319e2bf448391e9d75-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                settings: { paths: [{ value: 'pin-check', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC5c1da5d0c9e44ef69698e5f4672ae000-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = location.pathname,
                      t = this.innerText.trim().toLowerCase(),
                      n = this.parentElement.className,
                      a = 'n/a',
                      r = 'Try Teams freeTeams kostenlos testenEssayez Teams gratuitement'
                        .trim()
                        .toLowerCase();
                    if ('wbx-header-menu-list-item wbx-header-try-it-free' === n)
                      a =
                        -1 < e.indexOf('/team-collaboration.html')
                          ? 'team product page header'
                          : 'global header';
                    else if ('hero-cta-container' === n) a = 'home page hero';
                    else if ('hero-item2-cta-container' === n) a = 'home page carousel 1';
                    else if ('webex-test' === n) a = 'home page last section';
                    else if ('container' === n)
                      'hp-start sec-6' === this.parentElement.parentElement.className &&
                        (a = 'home page last section');
                    else if (-1 < r.indexOf(t)) a = 'teams page hero section';
                    else if (-1 < e.indexOf('video-conferencing'))
                      a = 'meetings page hero section';
                    else if (-1 < e.indexOf('free-trial'))
                      a =
                        -1 < e.indexOf('-testmeeting')
                          ? 'test meeting landing page'
                          : 'dg landing page';
                    else if (-1 < e.indexOf('/why-webex/index'))
                      'module2' === n
                        ? (a = 'why webex section 2')
                        : 'module' === n && (a = 'why webex last section');
                    else {
                      if (!(-1 < e.indexOf('/the-future-of-work'))) return !1;
                      'section6-btn-box' === n && (a = 'future of work last section');
                    }
                    return _satellite.setVar('freeTrialValue', a), !0;
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
                settings: { paths: [{ value: 'pricing/free-trial', valueIsRegex: !0 }] },
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
                settings: { paths: [{ value: '/pricing/index.html', valueIsRegex: !0 }] },
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
                settings: { paths: [{ value: '/pricing/info.html', valueIsRegex: !0 }] },
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
                    source: function (e, t) {
                      t.getTimeToComplete('start', 'gttcloading');
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 90,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.webex.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC41c05e9a095445de865055c1e6401aa2-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: !0 }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: !0 }],
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: !0 }],
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
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCb484da6f4fa648a88e78c00cf96e4d37-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                settings: { subdomains: [{ value: 'www\\.webex\\.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC402eebbdf2a740baa4b58823c15455c3-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                    source: function (e, t) {
                      (t.prop25 =
                        _satellite.getVar('SystemDown Error Code Value') +
                        ' : ' +
                        _satellite.getVar('SignUp Error Cookie')),
                        (t.prop31 = _satellite.getVar('Referrer'));
                      try {
                        t.abort = !0;
                      } catch (n) {}
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = this.getAttribute('href');
                    if (-1 < e.search('futureofwork.webex.com')) {
                      var t = e
                        .replace(location.protocol + '//' + location.host + '/', '')
                        .replace(/\/$/, '')
                        .replace('/', ':');
                      return (
                        '' !== t
                          ? _satellite.setVar('linkName', t)
                          : _satellite.setVar('linkName', 'home'),
                        !0
                      );
                    }
                    return !1;
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: !0 }],
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
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCf30a05c3b87449f6842f652af076cd94-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: !0 }],
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: !0 }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = this.getAttribute('href')
                      .replace(location.protocol + '//ebooks.cisco.com/', '')
                      .replace(/\/$/, '')
                      .replace('/', ':');
                    return '' !== e && _satellite.setVar('linkName', e), !0;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.events = ''), (t.prop10 = t.prop11 = '');
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
                settings: { subdomains: [{ value: 'buy\\.webex\\.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
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
                  paths: [{ value: 'video-conferencing|team-collaboration', valueIsRegex: !0 }],
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
                    { value: '\\/lbx\\/global_sales|lbx\\/call-me-country', valueIsRegex: !0 },
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
                settings: { subdomains: [{ value: 'buy', valueIsRegex: !0 }] },
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
                    source: function () {
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
                  bubbleFireIfChildFired: !1,
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
                settings: { paths: [{ value: '\\/lbx\\/', valueIsRegex: !0 }] },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    {
                      value: 'cart.webex.com|purchase.webex.com|purchase-int.webex.com',
                      valueIsRegex: !0,
                    },
                  ],
                },
                negate: !0,
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
                settings: { name: 'id', value: '^ThankYouPage$', valueIsRegex: !0 },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'buy\\.webex\\.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      t.products = _satellite.getVar('DR Shopping Cart - Confirmation Products');
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
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'the-future-of-work.html', valueIsRegex: !0 }] },
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
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
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
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC3e8f8bdea8b346dabd4bc771e2b7a188-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 100,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'www.webex.com|www.webex.co.it', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      if ('undefined' != typeof $) {
                        var e;
                        try {
                          e = $('.wbx-region-name').text().toLowerCase();
                        } catch (n) {}
                        typeof e == undefined && (e = '');
                      }
                      if ('undefined' != typeof amplitude) {
                        var t = {
                          button_name: 'start free test meeting',
                          location: 'herobanner',
                          pageUrl: document.URL,
                          selCountry: e,
                        };
                        amplitude.getInstance().logEvent('wx_clk_testing-meeting', t);
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
                settings: { name: 'gclid', value: '(.*)', valueIsRegex: !0 },
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
                  subdomains: [{ value: '^(futureofwork)\\.webex\\.com$', valueIsRegex: !0 }],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '\\/(lbx|post-meeting)\\/', valueIsRegex: !0 },
                    { value: 'user_ci_uuid=', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
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
                    { value: 'pricing/free-trial.html', valueIsRegex: !0 },
                    { value: '/pricing/info.html', valueIsRegex: !0 },
                    { value: 'pricing/signup.html', valueIsRegex: !0 },
                    { value: 'pricing/emailsent.html', valueIsRegex: !0 },
                    { value: 'pricing/free-trial-DG.html', valueIsRegex: !0 },
                    { value: '/pricing/index.html', valueIsRegex: !0 },
                    { value: 'ShoppingCartPage', valueIsRegex: !0 },
                    { value: 'pricing/trial/confirmationpage.html', valueIsRegex: !0 },
                    { value: 'AddressPaymentInfoPage', valueIsRegex: !0 },
                    { value: '\\/lbx\\/', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'cart\\.webex\\.com', valueIsRegex: !0 }] },
                negate: !0,
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
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/the-future-of-work.html', valueIsRegex: !0 }] },
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
                settings: { paths: [{ value: '/MyAccountWeb/changeorder.do', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'userUpgradeOption', value: 'genericupgrade' },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    if ('en_US' === userObj.locale) return !0;
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'www.webex.com|www.webex.co.it', valueIsRegex: !0 }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      if ('undefined' != typeof $) {
                        var e;
                        try {
                          e = $('.wbx-region-name').text().toLowerCase();
                        } catch (n) {}
                        typeof e == undefined && (e = '');
                      }
                      if ('undefined' != typeof amplitude) {
                        var t = {
                          button_name: 'discover webex meetings',
                          location: 'page-section',
                          pageUrl: document.URL,
                          selCountry: e,
                        };
                        amplitude.getInstance().logEvent('wx_clk_video-conferencing', t);
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
                      valueIsRegex: !0,
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
                settings: { paths: [{ value: 'contact-sales.html', valueIsRegex: !0 }] },
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
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC8706cb2e3b6c425e8f810e4db0e3a141-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                settings: { subdomains: [{ value: 'www\\.webex\\.co', valueIsRegex: !0 }] },
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
                  source: function () {
                    return (
                      null != spark_data.order_id &&
                      (-1 < window.location.href.indexOf('buy.webex') || void 0)
                    );
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
                  source: function () {
                    return (
                      null == _satellite.cookie.get('OrigTrackID') &&
                      -1 != window.location.href.indexOf('TrackID=')
                    );
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
                settings: { paths: [{ value: 'systemdown.html', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.prop25 =
                        _satellite.getVar('SystemDown Error Code Value') +
                        ' : ' +
                        _satellite.getVar('SignUp Error Cookie')),
                        (t.prop31 = _satellite.getVar('Referrer'));
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
                settings: { paths: [{ value: '\\/lbx\\/', valueIsRegex: !0 }] },
                negate: !0,
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
                    source: function (e, t) {
                      (t.eVar108 = t.getTimeToComplete('stop', 'pchk')),
                        (t.eVar100 = t.getTimeToComplete('stop', 'ordSt'));
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
                settings: { subdomains: [{ value: 'buy', valueIsRegex: !0 }] },
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
                settings: { paths: [{ value: 'pricing/signup.html', valueIsRegex: !0 }] },
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
                settings: { paths: [{ value: '^(\\/)$', valueIsRegex: !0 }] },
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
                      valueIsRegex: !0,
                    },
                  ],
                },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
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
                settings: { paths: [{ value: 'pricing/emailsent.html', valueIsRegex: !0 }] },
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
                    source: function (e, t) {
                      t.getTimeToComplete('start', 'em-chk');
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
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC5d912b7fe4964f00a4be92bcdc665905-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                settings: { paths: [{ value: '^\\/home\\.html$', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
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
                  paths: [{ value: 'pricing/trial/loadingpage.html', valueIsRegex: !0 }],
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
                    source: function (e, t) {
                      t.getTimeToComplete('start', 'gttcconfirmation');
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
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
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
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC0c38299a9f6e461a93a32907c5f574ed-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                settings: { paths: [{ value: 'thankyou', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC1951792e40ed401d9faf2aac14c3c9b9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                settings: { paths: [{ value: 'create-trial', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC4c3d468fe74f44bf9a41514f540a9e8f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
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
                      valueIsRegex: !0,
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
                settings: { subdomains: [{ value: 'www\\.webex\\.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC20285b59656a48b5a88d8973e21ab30a-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RCc5aea7268230440c98ca4385e66ebdf1-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'get-started-admin.html', valueIsRegex: !0 }] },
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
                      valueIsRegex: !0,
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
                settings: { subdomains: [{ value: 'cart\\.webex\\.com', valueIsRegex: !0 }] },
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
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC28587a778f3d4988ac11e4cef6f8f863-source.min.js',
                  language: 'html',
                  isExternal: !0,
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
                    source: function (e, t) {
                      (t.eVar108 = t.getTimeToComplete('stop', 'pchk')),
                        (t.eVar100 = t.getTimeToComplete('stop', 'ordSt'));
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
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'the-future-of-work.html', valueIsRegex: !0 }] },
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
                  paths: [{ value: '^\\/((contact-sales|index)\\.html)?$', valueIsRegex: !0 }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'chat', value: '0' },
                negate: !0,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www\\.webex\\.co', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      if ('undefined' != typeof $) {
                        var e;
                        try {
                          e = $('.wbx-region-name').text().toLowerCase();
                        } catch (n) {}
                        typeof e == undefined && (e = '');
                      }
                      if ('undefined' != typeof amplitude) {
                        var t = {
                          button_name: 'start for free',
                          location: 'header',
                          pageUrl: document.URL,
                          selCountry: e,
                        };
                        document.URL.indexOf('contact-sales.html') < 0 &&
                          document.URL.indexOf('team-collaboration') < 0 &&
                          amplitude.getInstance().logEvent('wx_clk_start-for-free', t),
                          -1 < document.URL.indexOf('contact-sales.html') &&
                            ((t.button_name = 'try meetings free'),
                            amplitude.getInstance().logEvent('wx_clk_try-meetings-free', t)),
                          -1 < document.URL.indexOf('team-collaboration.html') &&
                            ((t.button_name = 'try teams free'),
                            amplitude.getInstance().logEvent('wx_clk_try-teams-free', t));
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
                settings: { paths: [{ value: 'pin-check', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC7a97c9c75ea746b0b05ed3def204e59c-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                settings: { subdomains: [{ value: '^www\\.webex\\.com$', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    {
                      value:
                        '^(\\/(de|es|fr|it|ja|ko|pt|zh))?\\/((contact-sales|contact-sales\\/contact-sales-thankyou|contact-sales-intl|contact-sales-intl\\/contact-sales-thankyou|downloads|faqs|index|pricing\\/index|remote-support|team-collaboration|training-online|video-conference-equipment|webinar)\\.html|video-conferencing)?$',
                      valueIsRegex: !0,
                    },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'chat', value: '0' },
                negate: !0,
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
                      valueIsRegex: !0,
                    },
                    {
                      value: '\\/wx11-migration\\/meetings-upgrade-has-arrived\\.html',
                      valueIsRegex: !0,
                    },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
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
                  source: function () {
                    return (
                      null != spark_data.order_id &&
                      (-1 < window.location.href.indexOf('buy.webex') || void 0)
                    );
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
                settings: { paths: [{ value: 'pricing\\/signup.html', valueIsRegex: !0 }] },
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 100,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'www.webex.com|www.webex.co.it', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      if ('undefined' != typeof $) {
                        var e;
                        try {
                          e = $('.wbx-region-name').text().toLowerCase();
                        } catch (n) {}
                        typeof e == undefined && (e = '');
                      }
                      if ('undefined' != typeof amplitude) {
                        var t = {
                          button_name: 'sign up now for free',
                          location: 'herobanner',
                          pageUrl: document.URL,
                          selCountry: e,
                        };
                        amplitude.getInstance().logEvent('wx_clk_start-for-free', t);
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
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e =
                      jQuery(this).parent().parent().find('#reason-type option:selected').text() +
                      ' | ' +
                      jQuery(this).parent().parent().find('textarea.cancel-comments').val();
                    return _satellite.setVar('cancel reasons', e), !0;
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
                settings: { subdomains: [{ value: '^www\\.', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '\\/(lbx|post-meeting)\\/', valueIsRegex: !0 },
                    { value: '(email|FN|LN|p_url|user_ci_uuid)=', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
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
                    source: function (e, t) {
                      t.products = _satellite.getVar('DR Shopping Cart - Selection Products');
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
                    'https://assets.adobedtm.com/7cd5549c718c/b2293b569e49/5d939e11f8e0/RC395515161fd44dd9a9bf608bc3a7e3d1-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [{ value: 'futureofwork\\.webex\\.com', valueIsRegex: !0 }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
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
                settings: { paths: [{ value: '/2/tealium/test-bare.html', valueIsRegex: !1 }] },
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
                settings: { paths: [{ value: '^\\/2\\/tealium\\/', valueIsRegex: !0 }] },
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
                settings: { paths: [{ value: '^\\/2\\/tealium\\/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'get-started/mt-', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'essentials.webex.com', valueIsRegex: !0 }] },
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
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'cloud-calling', valueIsRegex: !0 }] },
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
                settings: { subdomains: [{ value: 'www\\.webex\\.com', valueIsRegex: !0 }] },
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
      });
    var $___var_99ea263383fd792f = (function () {
      const $___old_8b054df63ded1d6e = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_8b054df63ded1d6e)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_9d7b4eb662ee43f5.userAgent
          ));
        return function () {
          'use strict';
          function e (e, t) {
            return e((t = { exports: {} }), t.exports), t.exports;
          }
          function t (t) {
            var n = this.constructor;
            return this.then(
              function (e) {
                return n.resolve(t()).then(function () {
                  return e;
                });
              },
              function (e) {
                return n.resolve(t()).then(function () {
                  return n.reject(e);
                });
              }
            );
          }
          function l (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function a () {}
          function r (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function i (e) {
            if (!(this instanceof i)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              p(e, this);
          }
          function o (a, r) {
            for (; 3 === a._state; ) a = a._value;
            0 !== a._state
              ? ((a._handled = !0),
                i._immediateFn(function () {
                  var e = 1 === a._state ? r.onFulfilled : r.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(a._value);
                    } catch (n) {
                      return void c(r.promise, n);
                    }
                    s(r.promise, t);
                  } else (1 === a._state ? s : c)(r.promise, a._value);
                }))
              : a._deferreds.push(r);
          }
          function s (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof i) return (e._state = 3), (e._value = t), void u(e);
                if ('function' == typeof n) return void p(r(n, t), e);
              }
              (e._state = 1), (e._value = t), u(e);
            } catch (a) {
              c(e, a);
            }
          }
          function c (e, t) {
            (e._state = 2), (e._value = t), u(e);
          }
          function u (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              i._immediateFn(function () {
                e._handled || i._unhandledRejectionFn(e._value);
              });
            for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function d (e, t, n) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = n);
          }
          function p (e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), s(t, e));
                },
                function (e) {
                  n || ((n = !0), c(t, e));
                }
              );
            } catch (a) {
              if (n) return;
              (n = !0), c(t, a);
            }
          }
          function m (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function n () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join('')
              )
                return !1;
              var a = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  a[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, a)).join('')
              );
            } catch (r) {
              return !1;
            }
          }
          function f (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var g = function (e) {
                var n = [];
                return (
                  e.forEach(function (t) {
                    t.events &&
                      t.events.forEach(function (e) {
                        n.push({ rule: t, event: e });
                      });
                  }),
                  n.sort(function (e, t) {
                    return e.event.ruleOrder - t.event.ruleOrder;
                  })
                );
              },
              h = 'debug',
              b = function (t, e) {
                var n = function () {
                    return 'true' === t.getItem(h);
                  },
                  a = function (e) {
                    t.setItem(h, e);
                  },
                  r = [],
                  i = function (e) {
                    r.push(e);
                  };
                return (
                  (e.outputEnabled = n()),
                  {
                    onDebugChanged: i,
                    getDebugEnabled: n,
                    setDebugEnabled: function (t) {
                      n() !== t &&
                        (a(t),
                        (e.outputEnabled = t),
                        r.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              v = 'Module did not export a function.',
              y = function (i, o) {
                return function (e, t, n) {
                  n = n || [];
                  var a = i.getModuleExports(e.modulePath);
                  if ('function' != typeof a) throw new Error(v);
                  var r = o(e.settings || {}, t);
                  return a.bind(null, r).apply(null, n);
                };
              },
              w = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              _ = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              x = '\uD83D\uDE80',
              C =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : x,
              P = !1,
              k = function (e) {
                if (P && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(C),
                    e !== _.DEBUG || window.console[e] || (e = _.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              I = k.bind(null, _.LOG),
              S = k.bind(null, _.INFO),
              j = k.bind(null, _.DEBUG),
              T = k.bind(null, _.WARN),
              E = k.bind(null, _.ERROR),
              D = {
                log: I,
                info: S,
                debug: j,
                warn: T,
                error: E,
                get outputEnabled () {
                  return P;
                },
                set outputEnabled (e) {
                  P = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: I.bind(null, t),
                    info: S.bind(null, t),
                    debug: j.bind(null, t),
                    warn: T.bind(null, t),
                    error: E.bind(null, t),
                  };
                },
              },
              A = e(function (a) {
                !(function (e) {
                  if (((a.exports = e()), !!0)) {
                    var t = window.Cookies,
                      n = (window.Cookies = e());
                    n.noConflict = function () {
                      return (window.Cookies = t), n;
                    };
                  }
                })(function () {
                  function c () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var a in n) t[a] = n[a];
                    }
                    return t;
                  }
                  function u (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (l) {
                    function s () {}
                    function n (e, t, n) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (n = c({ path: '/' }, s.defaults, n)).expires &&
                          (n.expires = new Date(1 * new Date() + 86400000 * n.expires)),
                          (n.expires = n.expires ? n.expires.toUTCString() : '');
                        try {
                          var a = JSON.stringify(t);
                          /^[\{\[]/.test(a) && (t = a);
                        } catch (o) {}
                        (t = l.write
                          ? l.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var r = '';
                        for (var i in n)
                          n[i] &&
                            ((r += '; ' + i), !0 !== n[i] && (r += '=' + n[i].split(';')[0]));
                        return (document.cookie = e + '=' + t + r);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var n = {},
                            a = document.cookie ? document.cookie.split('; ') : [],
                            r = 0;
                          r < a.length;
                          r++
                        ) {
                          var i = a[r].split('='),
                            o = i.slice(1).join('=');
                          t || '"' !== o.charAt(0) || (o = o.slice(1, -1));
                          try {
                            var s = u(i[0]);
                            if (((o = (l.read || l)(o, s) || u(o)), t))
                              try {
                                o = JSON.parse(o);
                              } catch (c) {}
                            if (((n[s] = o), e === s)) break;
                          } catch (c) {}
                        }
                        return e ? n[e] : n;
                      }
                    }
                    return (
                      (s.set = n),
                      (s.get = function (e) {
                        return t(e, !1);
                      }),
                      (s.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (s.remove = function (e, t) {
                        n(e, '', c(t, { expires: -1 }));
                      }),
                      (s.defaults = {}),
                      (s.withConverter = e),
                      s
                    );
                  }
                  return e(function () {});
                });
              }),
              O = { get: A.get, set: A.set, remove: A.remove },
              R = window,
              L = 'com.adobe.reactor.',
              M = function (a, e) {
                var r = L + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_d1d5a46c4faca067 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_d1d5a46c4faca067)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        try {
                          return R[a].getItem(r + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_d1d5a46c4faca067)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_d1d5a46c4faca067
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_ac1025b48ea68640 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_ac1025b48ea68640)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        try {
                          return R[a].setItem(r + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_ac1025b48ea68640)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_ac1025b48ea68640
                        ));
                    }
                  },
                };
              },
              V = '_sdsat_',
              N = 'dataElements.',
              F = 'dataElementCookiesMigrated',
              U = M('localStorage'),
              B = M('sessionStorage', N),
              q = M('localStorage', N),
              G = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              H = {},
              $ = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              W = function (e, t, n) {
                var a;
                switch (t) {
                  case G.PAGEVIEW:
                    return void (H[e] = n);
                  case G.SESSION:
                    return void ((a = $(n)) && B.setItem(e, a));
                  case G.VISITOR:
                    return void ((a = $(n)) && q.setItem(e, a));
                }
              },
              Q = function (e, t) {
                var n = O.get(V + e);
                n !== undefined && W(e, t, n);
              },
              Y = {
                setValue: W,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case G.PAGEVIEW:
                      return H.hasOwnProperty(e) ? H[e] : null;
                    case G.SESSION:
                      return null === (n = B.getItem(e)) ? n : JSON.parse(n);
                    case G.VISITOR:
                      return null === (n = q.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  U.getItem(F) ||
                    (Object.keys(t).forEach(function (e) {
                      Q(e, t[e].storageDuration);
                    }),
                    U.setItem(F, !0));
                },
              },
              K = function (e, t, n, a) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  n +
                  (a ? '\n' + a : '')
                );
              },
              z = function (s, c, l, u) {
                return function (e, t) {
                  var n = c(e);
                  if (!n) return u ? '' : undefined;
                  var a,
                    r = n.storageDuration;
                  try {
                    a = s.getModuleExports(n.modulePath);
                  } catch (o) {
                    return void D.error(K(n, e, o.message, o.stack));
                  }
                  if ('function' == typeof a) {
                    var i;
                    try {
                      i = a(l(n.settings, t), t);
                    } catch (o) {
                      return void D.error(K(n, e, o.message, o.stack));
                    }
                    return (
                      r && (null != i ? Y.setValue(e, r, i) : (i = Y.getValue(e, r))),
                      null == i && null != n.defaultValue && (i = n.defaultValue),
                      'string' == typeof i &&
                        (n.cleanText && (i = w(i)), n.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  D.error(K(n, e, 'Module did not export a function.'));
                };
              },
              J = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return w(e.textContent);
                },
              },
              X = function (e, t, n) {
                for (var a, r = e, i = 0, o = t.length; i < o; i++) {
                  if (null == r) return undefined;
                  var s = t[i];
                  if (n && '@' === s.charAt(0)) {
                    var c = s.slice(1);
                    r = J[c](r);
                  } else if (r.getAttribute && (a = s.match(/^getAttribute\((.+)\)$/))) {
                    var l = a[1];
                    r = r.getAttribute(l);
                  } else r = r[s];
                }
                return r;
              },
              Z = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (o(e)) n = s(e, t);
                  else {
                    var a = e.split('.'),
                      r = a.shift();
                    'this' === r
                      ? t && (n = X(t.element, a, !0))
                      : 'event' === r
                      ? t && (n = X(t, a))
                      : 'target' === r
                      ? t && (n = X(t.target, a))
                      : (n = X(i[r], a));
                  }
                  return n;
                };
              },
              ee = function (n, a) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    a(e) || 'this' === t || 'event' === t || 'target' === t || n.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, n) {
                var a = { exports: {} };
                return e.call(a.exports, a, a.exports, t, n), a.exports;
              },
              ne = function () {
                var o = {},
                  n = function (e) {
                    var t = o[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(o).forEach(function (e) {
                      try {
                        a(e);
                      } catch (n) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          n.message +
                          (n.stack ? '\n' + n.stack : '');
                        D.error(t);
                      }
                    });
                  },
                  a = function (e) {
                    var t = n(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, n, a, r) {
                    var i = { definition: t, extensionName: n, require: a, turbine: r };
                    (i.require = a), (o[e] = i);
                  },
                  hydrateCache: e,
                  getModuleExports: a,
                  getModuleDefinition: function (e) {
                    return n(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return n(e).extensionName;
                  },
                };
              },
              ae = !1,
              re = function (a) {
                return function (t, n) {
                  var e = a._monitors;
                  e &&
                    (ae ||
                      (D.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (ae = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](n);
                    }));
                };
              },
              ie = function (r, i, o) {
                var n,
                  a,
                  s,
                  c,
                  l = [],
                  u = function (e, t, n) {
                    if (!r(t)) return e;
                    l.push(t);
                    var a = i(t, n);
                    return l.pop(), null == a && o ? '' : a;
                  };
                return (
                  (n = function (e, n) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? u(e, t[1], n)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return u(e, t, n);
                        });
                  }),
                  (a = function (e, t) {
                    for (var n = {}, a = Object.keys(e), r = 0; r < a.length; r++) {
                      var i = a[r],
                        o = e[i];
                      n[i] = c(o, t);
                    }
                    return n;
                  }),
                  (s = function (e, t) {
                    for (var n = [], a = 0, r = e.length; a < r; a++) n.push(c(e[a], t));
                    return n;
                  }),
                  (c = function (e, t) {
                    return 'string' == typeof e
                      ? n(e, t)
                      : Array.isArray(e)
                      ? s(e, t)
                      : 'object' == typeof e && null !== e
                      ? a(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < l.length
                      ? (D.error('Data element circular reference detected: ' + l.join(' -> ')), e)
                      : c(e, t);
                  }
                );
              },
              oe = function (r) {
                return function (e, t) {
                  if ('string' == typeof e) r[arguments[0]] = t;
                  else if (arguments[0]) {
                    var n = arguments[0];
                    for (var a in n) r[a] = n[a];
                  }
                };
              },
              se = setTimeout;
            (i.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (i.prototype.then = function (e, t) {
                var n = new this.constructor(a);
                return o(this, new d(e, t, n)), n;
              }),
              (i.prototype['finally'] = t),
              (i.all = function (t) {
                return new i(function (r, i) {
                  function o (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var n = e.then;
                        if ('function' == typeof n)
                          return void n.call(
                            e,
                            function (e) {
                              o(t, e);
                            },
                            i
                          );
                      }
                      (s[t] = e), 0 == --c && r(s);
                    } catch (a) {
                      i(a);
                    }
                  }
                  if (!l(t)) return i(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(t);
                  if (0 === s.length) return r([]);
                  for (var c = s.length, e = 0; e < s.length; e++) o(e, s[e]);
                });
              }),
              (i.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              }),
              (i.reject = function (n) {
                return new i(function (e, t) {
                  t(n);
                });
              }),
              (i.race = function (r) {
                return new i(function (e, t) {
                  if (!l(r)) return t(new TypeError('Promise.race accepts an array'));
                  for (var n = 0, a = r.length; n < a; n++) i.resolve(r[n]).then(e, t);
                });
              }),
              (i._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  se(e, 0);
                }),
              (i._unhandledRejectionFn = function Pt (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || i['default'] || i,
              le = function (l, n, a) {
                return function (s, t, c, e) {
                  return e.then(function () {
                    var i,
                      o = s.delayNext;
                    return new ce(function (e, t) {
                      var n = l(s, c, [c]);
                      if (!o) return e();
                      var a = s.timeout,
                        r = new ce(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  a / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, a);
                        });
                      ce.race([n, r]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), a(s, t, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(i);
                      });
                  });
                };
              },
              ue = function (c, n, a, r, l) {
                return function (o, t, s, e) {
                  return e.then(function () {
                    var i;
                    return new ce(function (e, t) {
                      var n = c(o, s, [s]),
                        a = o.timeout,
                        r = new ce(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  a / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, a);
                        });
                      ce.race([n, r]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), r(o, t, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(i), !a(o, e))) return l(o, t), ce.reject();
                      });
                  });
                };
              },
              de = ce.resolve(),
              pe = function (a, r, e) {
                return function (t, n) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        de = a(e, t, n, de);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        de = r(e, t, n, de);
                      }),
                    (de = (de = de.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              me = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              ge = function (o, s, c, l) {
                return function (e, t) {
                  var n;
                  if (e.conditions)
                    for (var a = 0; a < e.conditions.length; a++) {
                      n = e.conditions[a];
                      try {
                        var r = o(n, t, [t]);
                        if (me(r))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!s(n, r)) return c(n, e), !1;
                      } catch (i) {
                        return l(n, e, i), !1;
                      }
                    }
                  return !0;
                };
              },
              fe = function (n, a) {
                return function (e, t) {
                  n(e, t) && a(e, t);
                };
              },
              he = function (n) {
                return function (e) {
                  var t = n.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              be = function (r) {
                return function (e) {
                  var t = e.rule,
                    n = e.event,
                    a = r.getModuleDefinition(n.modulePath).name;
                  return {
                    $type: r.getModuleExtensionName(n.modulePath) + '.' + a,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              ve = function (s, c, l, u, d, p) {
                return function (n, e) {
                  var a = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var r = d(e);
                    c(t, null, [
                      function i (e) {
                        var t = l(r, e);
                        n(function () {
                          s(t, a);
                        });
                      },
                    ]);
                  } catch (o) {
                    p.error(u(t, a, o));
                  }
                };
              },
              ye = function (r, i, o, s) {
                return function (e, t, n) {
                  var a = i(e);
                  o.error(r(a, t.name, n)), s('ruleActionFailed', { rule: t, action: e });
                };
              },
              we = function (r, i, o, s) {
                return function (e, t, n) {
                  var a = i(e);
                  o.error(r(a, t.name, n)), s('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              _e = function (a, r, i) {
                return function (e, t) {
                  var n = a(e);
                  r.log('Condition "' + n + '" for rule "' + t.name + '" was not met.'),
                    i('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              xe = function (t, n) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), n('ruleCompleted', { rule: e });
                };
              },
              Ce = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (e.actions)
                    for (var a = 0; a < e.actions.length; a++) {
                      n = e.actions[a];
                      try {
                        i(n, t, [t]);
                      } catch (r) {
                        return void o(n, e, r);
                      }
                    }
                  s(e);
                };
              },
              Pe = function (n, a, r, i) {
                return function (e, t) {
                  i('ruleTriggered', { rule: t }), n ? r(t, e) : a(t, e);
                };
              },
              ke = function (e, t, n) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  t +
                  '" rule. ' +
                  n.message +
                  (n.stack ? '\n' + n.stack : '')
                );
              },
              Ie = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              Se = [],
              je = !1,
              Te = function (e) {
                je ? e() : Se.push(e);
              },
              Ee = function (e, t, n) {
                e(t).forEach(function (e) {
                  n(Te, e);
                }),
                  (je = !0),
                  Se.forEach(function (e) {
                    e();
                  }),
                  (Se = []);
              },
              De = function (e) {
                if (
                  (e ||
                    (e = new Error(
                      'The extension triggered an error, but no error information was provided.'
                    )),
                  !(e instanceof Error))
                ) {
                  var t = 'object' == typeof e ? JSON.stringify(e) : String(e);
                  e = new Error(t);
                }
                return e;
              },
              Ae = Object.getOwnPropertySymbols,
              Oe = Object.prototype.hasOwnProperty,
              Re = Object.prototype.propertyIsEnumerable,
              Le = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, a = m(e), r = 1; r < arguments.length; r++) {
                      for (var i in (t = Object(arguments[r]))) Oe.call(t, i) && (a[i] = t[i]);
                      if (Ae) {
                        n = Ae(t);
                        for (var o = 0; o < n.length; o++) Re.call(t, n[o]) && (a[n[o]] = t[n[o]]);
                      }
                    }
                    return a;
                  },
              Me = function (e, t) {
                return (
                  Le((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          D.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Ve = function (c, l) {
                return function (e, t) {
                  var n = c[e];
                  if (n) {
                    var a = n.modules;
                    if (a)
                      for (var r = Object.keys(a), i = 0; i < r.length; i++) {
                        var o = r[i],
                          s = a[o];
                        if (s.shared && s.name === t) return l.getModuleExports(o);
                      }
                  }
                };
              },
              Ne = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Fe = function (n, a) {
                return function (e) {
                  if (a) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return n + e;
                };
              },
              Ue = '.js',
              Be = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              qe = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              Ge = function (e, t) {
                qe(t, Ue) || (t += Ue);
                var n = t.split('/'),
                  a = Be(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? a.length && a.pop() : a.push(e));
                  }),
                  a.join('/')
                );
              },
              He = document,
              $e = function (n, a) {
                return new ce(function (e, t) {
                  (a.onload = function () {
                    e(a);
                  }),
                    (a.onerror = function () {
                      t(new Error('Failed to load script ' + n));
                    });
                });
              },
              We = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = $e(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              Qe = function (e, t, n, a) {
                (t = t || '&'), (n = n || '=');
                var r = {};
                if ('string' != typeof e || 0 === e.length) return r;
                var i = /\+/g;
                e = e.split(t);
                var o = 1000;
                a && 'number' == typeof a.maxKeys && (o = a.maxKeys);
                var s = e.length;
                0 < o && o < s && (s = o);
                for (var c = 0; c < s; ++c) {
                  var l,
                    u,
                    d,
                    p,
                    m = e[c].replace(i, '%20'),
                    g = m.indexOf(n);
                  0 <= g ? ((l = m.substr(0, g)), (u = m.substr(g + 1))) : ((l = m), (u = '')),
                    (d = decodeURIComponent(l)),
                    (p = decodeURIComponent(u)),
                    f(r, d)
                      ? Array.isArray(r[d])
                        ? r[d].push(p)
                        : (r[d] = [r[d], p])
                      : (r[d] = p);
                }
                return r;
              },
              Ye = function (e) {
                switch (typeof e) {
                  case 'string':
                    return e;
                  case 'boolean':
                    return e ? 'true' : 'false';
                  case 'number':
                    return isFinite(e) ? e : '';
                  default:
                    return '';
                }
              },
              Ke = function (n, a, r, e) {
                return (
                  (a = a || '&'),
                  (r = r || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(Ye(e)) + r;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(Ye(e));
                                })
                                .join(a)
                            : t + encodeURIComponent(Ye(n[e]));
                        })
                        .join(a)
                    : e
                    ? encodeURIComponent(Ye(e)) + r + encodeURIComponent(Ye(n))
                    : ''
                );
              },
              ze = e(function (e, t) {
                (t.decode = t.parse = Qe), (t.encode = t.stringify = Ke);
              }),
              Je = (ze.decode, ze.parse, ze.encode, ze.stringify, '@adobe/reactor-'),
              Xe = {
                cookie: O,
                document: He,
                'load-script': We,
                'object-assign': Le,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), ze.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return ze.stringify(e);
                  },
                },
                window: R,
              },
              Ze = function (a) {
                return function (e) {
                  if (0 === e.indexOf(Je)) {
                    var t = e.substr(Je.length),
                      n = Xe[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return a(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, o, s, c, l) {
                var u = e.extensions,
                  d = e.buildInfo,
                  p = e.property.settings;
                if (u) {
                  var m = Ve(u, o);
                  Object.keys(u).forEach(function (a) {
                    var r = u[a],
                      e = Ne(c, r.settings);
                    if (r.modules) {
                      var t = D.createPrefixedLogger(r.displayName),
                        n = Fe(r.hostedLibFilesBaseUrl, d.minified),
                        i = {
                          buildInfo: d,
                          getDataElementValue: l,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: m,
                          logger: t,
                          propertySettings: p,
                          replaceTokens: c,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(r.modules).forEach(function (n) {
                        var e = r.modules[n],
                          t = Ze(function (e) {
                            var t = Ge(n, e);
                            return o.getModuleExports(t);
                          });
                        o.registerModule(n, e, a, t, i);
                      });
                    }
                  }),
                    o.hydrateCache();
                }
                return o;
              },
              tt = function (e, t, n, a, r) {
                var i = D.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  D.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = i),
                  (e.notify = function (e, t) {
                    switch (
                      (D.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        i.info(e);
                        break;
                      case 4:
                        i.warn(e);
                        break;
                      case 5:
                        i.error(e);
                        break;
                      default:
                        i.log(e);
                    }
                  }),
                  (e.getVar = a),
                  (e.setVar = r),
                  (e.setCookie = function (e, t, n) {
                    var a = '',
                      r = {};
                    n && ((a = ', { expires: ' + n + ' }'), (r.expires = n));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      a +
                      ').';
                    D.warn(i), O.set(e, t, r);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      D.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      O.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    D.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      O.remove(e);
                  }),
                  (e.cookie = O),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var o = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      o ||
                        (D.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (o = !0)),
                      t
                    );
                  },
                });
              },
              nt = window._satellite;
            if (nt && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var at = nt.container;
              delete nt.container;
              var rt = at.property.settings.undefinedVarsReturnEmpty,
                it = at.property.settings.ruleComponentSequencingEnabled,
                ot = at.dataElements || {};
              Y.migrateCookieData(ot);
              var st,
                ct = function (e) {
                  return ot[e];
                },
                lt = ne(),
                ut = z(
                  lt,
                  ct,
                  function () {
                    return st.apply(null, arguments);
                  },
                  rt
                ),
                dt = {},
                pt = oe(dt),
                mt = ee(dt, ct),
                gt = Z(dt, ct, ut);
              st = ie(mt, gt, rt);
              var ft = b(M('localStorage'), D);
              tt(nt, at, ft.setDebugEnabled, gt, pt), et(at, lt, ft, st, ut);
              var ht = re(nt),
                bt = y(lt, st),
                vt = he(lt),
                yt = _e(vt, D, ht),
                wt = we(ke, vt, D, ht),
                _t = ye(ke, vt, D, ht),
                xt = xe(D, ht),
                Ct = ve(
                  Pe(
                    it,
                    fe(ge(bt, Ie, yt, wt), Ce(bt, _t, xt)),
                    pe(ue(bt, De, Ie, wt, yt), le(bt, De, _t), xt),
                    ht
                  ),
                  bt,
                  Me,
                  ke,
                  be(lt),
                  D
                );
              Ee(g, at.rules || [], Ct);
            }
            return nt;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_8b054df63ded1d6e)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_8b054df63ded1d6e
          ));
      }
    })();
    _satellite = $___var_99ea263383fd792f;
  })();
}
