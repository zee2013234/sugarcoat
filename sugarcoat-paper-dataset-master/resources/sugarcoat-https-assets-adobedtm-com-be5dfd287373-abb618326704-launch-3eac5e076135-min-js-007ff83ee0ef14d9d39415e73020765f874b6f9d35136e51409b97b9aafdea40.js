var _satellite;
{
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
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-11-24T21:34:32Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          LoginStatus: {
            defaultValue: 'blank login status',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                for (var e = document.getElementsByTagName('meta'), t = 0; t < e.length; t++) {
                  var a = e[t].name || e[t].getAttribute('property');
                  if (
                    null != a &&
                    a.length &&
                    e[t].content &&
                    ('dcterms:accessRights' == a || 'dcterms.accessRights' == a)
                  )
                    return e[t].content;
                }
                var n = '/fr/partage-info',
                  r = '/en/info-share',
                  s = document.location.href;
                return 0 < s.indexOf(n) || 0 < s.indexOf(r)
                  ? '1'
                  : _satellite.gcCustom.thisDomain.LoginStatus;
              },
            },
          },
          PageLoadAnchorLink: {
            defaultValue: 'blank anchor link',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.location.hash.replace(/(\?)\S+/, '');
              },
            },
          },
          FindKeyword: {
            defaultValue: 'blank form value',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsFindKeyword');
              },
            },
          },
          SearchRechercheRefineType: {
            defaultValue: 'blank search refinement type',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e (e, t) {
                  e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                  var a = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(t);
                  return null === a ? '' : decodeURIComponent(a[1].replace(/\+/g, ' '));
                }
                var t = document.referrer,
                  a = location.search;
                t = t.replace(/^([^?]+)/g, '');
                var n = e('as_q', a),
                  r = e('as_epq', a),
                  s = e('as_oq', a),
                  i = e('as_eq', a);
                return n || r || s || i
                  ? 'Advanced Search Used'
                  : e('q', t) === e('q', a)
                  ? 'Original Search'
                  : e('q', t) && e('q', a)
                  ? 'Changed Phrase'
                  : 'Original Search';
              },
            },
          },
          SearchResults: {
            defaultValue: 'blank search result number',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.getElementById('wb-land');
                if (void 0 !== e && null != e) {
                  var t = document.getElementById('wb-land'),
                    a = t.textContent.trim(),
                    n = null != t ? /[\d ,]+/.exec(a) : t;
                  n = null != n ? n[0].trim().replace(/[ ,]/g, '') : '';
                  var r = null != t ? a : '';
                  return (
                    (/^No results$/.test(r) || /^Aucun r\xe9sultat$/.test(r)) && (n = '0'),
                    !(n.length < 1 || isNaN(n)) && n
                  );
                }
              },
            },
          },
          FollowPlatform: {
            defaultValue: 'blank follow platform',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsFollowPlatform');
              },
            },
          },
          FormComplete: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsFormComplete');
              },
            },
          },
          ExtCampaignMedium: {
            defaultValue: 'blank utm_medium',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_medium', caseInsensitive: !0 },
          },
          LocalHour: {
            defaultValue: 'blank local hour',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsLocalHour');
              },
            },
          },
          FormListError: {
            defaultValue: 'Blank form list error',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('FormListError');
              },
            },
          },
          dataTableField: {
            defaultValue: 'blank data table value',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsdataTableField');
              },
            },
          },
          ExitSurveyFr: {
            defaultValue: 'blanc;blanc;blanc;blanc;blanc;blanc;blanc',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsExitSurveyFr');
              },
            },
          },
          SuprQ: {
            defaultValue: 'blank;blank;blank;blank;blank;blank;blank;blank',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsSuprQ');
              },
            },
          },
          ErrorPageType: {
            defaultValue: 'blank error page type',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return {
                  'Not Found - Canada.ca': '404',
                  'Pas trouvé - Canada.ca': '404',
                  'Errors - Canada.ca': '404',
                  'Forbidden - Canada.ca': '403',
                  'Interdit - Canada.ca': '403',
                  'Internal Server Error - Canada.ca': '500',
                  'Erreur Interne du Serveur - Canada.ca': '500',
                }[document.title];
              },
            },
          },
          'PageTheme-PageLanguage': {
            defaultValue: 'blank theme',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = _satellite.getVar('PageLanguage'),
                  t = _satellite.getVar('PageTheme');
                return 'blank page language' === e || 'blank theme' === t ? null : t + '-' + e;
              },
            },
          },
          PageCreator: {
            defaultValue: 'blank page creator',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: {
              elementProperty: 'content',
              elementSelector:
                'meta[name="dc.creator"], meta[name="dcterms.creator"], meta[property="dcterms:creator"], meta[property="dcterms.creator"]',
            },
          },
          ErrorPageReferrer: {
            defaultValue: 'blank document.referrer',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsErrorPageReferrer');
              },
            },
          },
          'search: search result postion': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.onsiteSearchPosition' },
          },
          PreviousPageCreator: {
            defaultValue: 'blank page creator',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsPreviousPageCreator');
              },
            },
          },
          FormStart: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsFormStart');
              },
            },
          },
          'AOR-ADVNumber': {
            defaultValue: 'blank adv number',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'adv', caseInsensitive: !0 },
          },
          ServerDay: {
            defaultValue: 'blank server day',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsServerDay');
              },
            },
          },
          SearchRechercheTerm: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e (e) {
                  e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                  var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(location.search);
                  return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
                }
                var t = '';
                e('q') && (t = e('q')).trim();
                var a = e('as_q'),
                  n = e('as_epq'),
                  r = e('as_oq'),
                  s = e('as_eq'),
                  i = e('1s_s3t2s21rch'),
                  o = document.getElementById('advseacon8'),
                  c = '';
                switch (o ? o.options[o.selectedIndex].text : '') {
                  case 'anywhere in the page':
                  case "n'importe où dans la page":
                    c = 'any';
                    break;
                  case 'in the title of the page':
                  case 'dans le titre de la page':
                    c = 'title';
                    break;
                  case 'in the URL of the page':
                  case "dans l'URL de la page":
                    c = 'url';
                    break;
                  case 'in the body of the page':
                  case 'dans le corps de la page':
                    c = 'body';
                }
                var l = document.querySelector('select#advseacon5'),
                  u = '';
                switch (l ? l.options[l.selectedIndex].text : '') {
                  case 'anytime':
                  case 'à une date indifférente':
                    u = 'any';
                    break;
                  case 'past 24 hours':
                  case 'au cours des dernières 24 heures':
                    u = '24hrs';
                    break;
                  case 'past week':
                  case 'au cours des 7 derniers jours':
                    u = 'week';
                    break;
                  case 'past month':
                  case 'au cours des 31 derniers jours':
                    u = 'month';
                    break;
                  case 'past year':
                  case 'au cours des 365 derniers jours':
                    u = 'year';
                }
                return (
                  (a || n || r || s) &&
                    (a && (t = '|all:' + a.trim()),
                    n && (t = t + '|exact:' + n.trim()),
                    r && (t = t + '|any:' + r.trim()),
                    s && (t = t + '|none:' + s.trim()),
                    u && (t = t + '|updated:' + u),
                    i && (t = t + '|site:' + i),
                    c && (t = t + '|terms:' + c),
                    (t = 'Advanced Search' + t)),
                  t
                );
              },
            },
          },
          LocalDay: {
            defaultValue: 'blank local day',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsLocalDay');
              },
            },
          },
          ExtCampaignSource: {
            defaultValue: 'blank utm_source',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_source', caseInsensitive: !0 },
          },
          VideoVisitorAction: {
            defaultValue: 'blank visitor action',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = _satellite.getVar('MediaType'),
                  t =
                    (e = e.charAt(0).toUpperCase() + e.slice(1)) +
                    ': ' +
                    _satellite.getVar('MediaTitle');
                return (
                  _satellite.setVar('jsVideoVisitorAction', t),
                  _satellite.getVar('jsVideoVisitorAction')
                );
              },
            },
          },
          jcr_gcNewsProduct: {
            defaultValue: 'blank news type',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.location.pathname.replace('.html', ''),
                  t =
                    document.location.protocol +
                    '//' +
                    document.location.hostname +
                    e +
                    '/jcr:content.json';
                $.getJSON(t, function (e) {
                  return e.gcNewsProduct;
                });
              },
            },
          },
          WTPHList: {
            defaultValue: 'no selection',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsWTPHList');
              },
            },
          },
          PageLanguage: {
            defaultValue: 'blank page language',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = [],
                  t = '',
                  a = document.getElementsByTagName('meta');
                if (0 < a.length)
                  for (var n = 0; n < a.length; n++) {
                    var r = a[n].name || a[n].getAttribute('property');
                    null != r &&
                      r.length &&
                      a[n].content &&
                      ('dc.language' == r || 'dcterms.language' == r || 'dcterms:language' == r) &&
                      ((t = a[n].content), -1 === e.indexOf(t) && (e[e.length] = t), (t = ''));
                  }
                return e.join(':');
              },
            },
          },
          PageIssuedDate: {
            defaultValue: 'blank page issued date',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: {
              elementProperty: 'content',
              elementSelector:
                'meta[property="dcterms.issued"], meta[property="dcterms:issued"],meta[name="dcterms.issued"]',
            },
          },
          'SearchRefineType ': {
            defaultValue: 'blank search refinement type',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e (e, t) {
                  e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                  var a = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(t);
                  return null === a ? '' : decodeURIComponent(a[1].replace(/\+/g, ' '));
                }
                var t = document.referrer,
                  a = location.search;
                t = t.replace(/^([^?]+)/g, '');
                var n = e('allq', a),
                  r = e('exctq', a),
                  s = e('anyq', a),
                  i = e('noneq', a);
                return n || r || s || i
                  ? 'Advanced Search Used'
                  : e('q', t) === e('q', a)
                  ? 'Original Search'
                  : e('q', t) && e('q', a)
                  ? 'Changed Phrase'
                  : 'Original Search';
              },
            },
          },
          SamePageAnchorLink: {
            defaultValue: 'blank anchor link',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.location.hash.replace(/(\?)\S+/, '');
              },
            },
          },
          pageLoad: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e =
                  (performance.timing.domInteractive - performance.timing.navigationStart) / 1000;
                return 0 <= e && e;
              },
            },
          },
          advancedSampling: {
            defaultValue: 'no-parameter:n:n:n:n:n:n',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsAdvancedSampling');
              },
            },
          },
          PreviousPageQueryString: {
            defaultValue: 'blank query string',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsPreviousPageQueryString');
              },
            },
          },
          PageTitle: {
            defaultValue: 'blank page title',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: {
              elementProperty: 'content',
              elementSelector:
                'meta[name="dc.title"],meta[name="dcterms.title"],meta[property="dcterms:title"],meta[property="dcterms.title"]',
            },
          },
          'search: search term': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.onsiteSearchTerm' },
          },
          'Page | previous page name | cookie': {
            defaultValue: 'blank page title',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'gpv_pt' },
          },
          PopupName: {
            defaultValue: 'blank Pop-up name',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsPopupName');
              },
            },
          },
          'AOR-CampaignID': {
            defaultValue: 'blank integration id',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'id_campaign', caseInsensitive: !0 },
          },
          'Page | previous theme | cookie': {
            defaultValue: 'blank theme',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'gpv_pthl' },
          },
          MarketingCarouselPosition: {
            defaultValue: 'blank carousel position',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsMarketingCarouselPosition');
              },
            },
          },
          queryString: {
            defaultValue: 'blank query string',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.location.search,
                  t = 'email=';
                return (
                  -1 !== e.toLowerCase().indexOf(t) && (e = 'removed: email'),
                  '' === e && (e = 'blank query string'),
                  e
                );
              },
            },
          },
          'Page | previous query string | cookie': {
            defaultValue: 'blank query string',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'gpv_pqs' },
          },
          'Page | previous page creator| cookie': {
            defaultValue: 'blank page creator',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'gpv_pc' },
          },
          PageURL: {
            defaultValue: 'blank page url',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return document.location.hostname + document.location.pathname;
              },
            },
          },
          SocialPlatform: {
            defaultValue: 'blank social platform',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsSocialPlatform');
              },
            },
          },
          DebugData: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (document.location.hostname + document.location.pathname).length;
              },
            },
          },
          SocialShareMediaType: {
            defaultValue: 'blank social share item type',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsSocialShareMediaType');
              },
            },
          },
          ExitSurvey: {
            defaultValue: 'blank;blank;blank;blank;blank;blank;blank',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsExitSurvey');
              },
            },
          },
          PreviousPageTheme: {
            defaultValue: 'blank theme',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsPreviousPageTheme');
              },
            },
          },
          ClearFilter: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsClearFilter');
              },
            },
          },
          'search parameter exctq | url': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'exctq', caseInsensitive: !0 },
          },
          ExtCampaignContent: {
            defaultValue: 'blank utm_content',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_content', caseInsensitive: !0 },
          },
          contentAge: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                for (
                  var e = document.getElementsByTagName('meta'), t = '', a = 0;
                  a < e.length;
                  a++
                )
                  if (
                    'dcterms.modified' === e[a].getAttribute('name') ||
                    'dcterms.modified' === e[a].getAttribute('property') ||
                    'dcterms:modified' === e[a].getAttribute('property')
                  ) {
                    t = e[a].getAttribute('content');
                    break;
                  }
                var n = new Date(t),
                  r = new Date(),
                  s = Math.abs(r - n);
                return (days = Math.floor(s / 86400000)), days, days <= 30 && days, days, days;
              },
            },
          },
          'search parameter q | url': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'q', caseInsensitive: !0 },
          },
          TabTitle: {
            defaultValue: 'blank tab title',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsTabTitle');
              },
            },
          },
          formError: {
            defaultValue: 'blank form error',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsformError');
              },
            },
          },
          PageID: {
            defaultValue: 'blank page id',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = _satellite.getVar('PageID-Language');
                return e.substring(0, e.lastIndexOf('-'));
              },
            },
          },
          LinkUrl: {
            defaultValue: 'blank link url',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsLinkUrl');
              },
            },
          },
          MediaSource: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsMediaSource');
              },
            },
          },
          'search: search results': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.onsiteSearchResults' },
          },
          dataOwner: {
            defaultValue: 'blank page content owner',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsdataOwner');
              },
            },
          },
          DeviceType: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/sessionStorage.js',
            settings: { name: 'device' },
          },
          MarketingDestination: {
            defaultValue: 'blank int. campaign destination url',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsMarketingDestination');
              },
            },
          },
          PageTheme: {
            defaultValue: 'blank theme',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.location.pathname.match(
                  /\/(?:en|fr)\/services\/([^\/\.]+)[\/\.]?/
                );
                return null != e && 'index' != e[1].toLowerCase() ? e[1] : null;
              },
            },
          },
          ExtCampaignTerm: {
            defaultValue: 'blank utm_term',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_term', caseInsensitive: !0 },
          },
          LinkHREF: {
            defaultValue: 'blank link url',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsLinkHREF');
              },
            },
          },
          LinkText: {
            defaultValue: 'blank link text',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsLinkText');
              },
            },
          },
          LibraryVersion: {
            defaultValue: 'blank library version',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = !!window.MSInputMethodContext && !!document.documentMode;
                if (e) return (a = 'Canada.ca ' + _satellite.buildInfo.environment);
                if (!e) {
                  var t = new Date(_satellite.buildInfo.buildDate).getTime(),
                    a = new Date(t).toLocaleString('en-CA', {
                      hour12: !1,
                      timeZone: 'America/Toronto',
                    });
                  return 'Canada.ca ' + _satellite.buildInfo.environment + ' ' + a;
                }
              },
            },
          },
          SurveyTaskFr: {
            defaultValue: 'blanc',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsSurveyTaskFr');
              },
            },
          },
          HomePageFeatureIETest: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = "a[data-gc-analytics='promo:homePageFeature']:not([class~=hide])",
                  t = ' figure figcaption',
                  a = document.querySelector(e + t);
                return (
                  a || (a = document.querySelector(e)),
                  (a.textContent || '')
                    .replace(/\s+$/g, '')
                    .trim()
                    .replace(/(\r\n\t|\n|\r\t)/gm, '')
                );
              },
            },
          },
          DocumentReferrer: {
            defaultValue: 'blank page url',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/pageInfo.js',
            settings: { attribute: 'referrer' },
          },
          'search parameter anyq | url': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'anyq', caseInsensitive: !0 },
          },
          hostname: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/pageInfo.js',
            settings: { attribute: 'hostname' },
          },
          'NavTracking ': {
            defaultValue: 'blank navigation',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsNavTracking');
              },
            },
          },
          SearchLinkPosition: {
            defaultValue: 'blank search result link position',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsSearchLinkPosition');
              },
            },
          },
          'AOR-ContentID': {
            defaultValue: 'blank integration id',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'id_content', caseInsensitive: !0 },
          },
          MarketingTitle: {
            defaultValue: 'blank int. campaign title',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsMarketingTitle');
              },
            },
          },
          'search: search file type': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.onsiteSearchResultFileType' },
          },
          customCall: {
            defaultValue: 'blank custom tracking',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: {
              elementProperty: 'data-gc-analytics-customcall',
              elementSelector: '[data-gc-analytics-customcall]',
            },
          },
          SurveyTask: {
            defaultValue: 'blank',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsSurveyTask');
              },
            },
          },
          'PreviousPageTheme-PageLanguage': {
            defaultValue: 'blank theme',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsPreviousPageTheme-PageLanguage');
              },
            },
          },
          ContentFilterTitle: {
            defaultValue: 'blank content filter title',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsContentFilterTitle');
              },
            },
          },
          SearchTerm: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e (e) {
                  e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                  var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(location.search);
                  return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
                }
                var t = '';
                e('q') && (t = e('q')).trim();
                var a = e('allq'),
                  n = e('exctq'),
                  r = e('anyq'),
                  s = e('noneq'),
                  i = e('dmn'),
                  o = document.getElementById('advseacon8'),
                  c = '';
                switch (o ? o.options[o.selectedIndex].text : '') {
                  case 'anywhere in the page':
                  case "n'importe où dans la page":
                    c = 'any';
                    break;
                  case 'in the title of the page':
                  case 'dans le titre de la page':
                    c = 'title';
                    break;
                  case 'in the URL of the page':
                  case "dans l'URL de la page":
                    c = 'url';
                    break;
                  case 'in the body of the page':
                  case 'dans le corps de la page':
                    c = 'body';
                }
                var l = document.getElementById('advseacon5'),
                  u = '';
                switch (l ? l.options[l.selectedIndex].text : '') {
                  case 'anytime':
                  case 'à une date indifférente':
                    u = 'any';
                    break;
                  case 'past 24 hours':
                  case 'au cours des dernières 24 heures':
                    u = '24hrs';
                    break;
                  case 'past week':
                  case 'au cours des 7 derniers jours':
                    u = 'week';
                    break;
                  case 'past month':
                  case 'au cours des 31 derniers jours':
                    u = 'month';
                    break;
                  case 'past year':
                  case 'au cours des 365 derniers jours':
                    u = 'year';
                }
                return (
                  (a || n || r || s) &&
                    (a && (t = '|all:' + a.trim()),
                    n && (t = t + '|exact:' + n.trim()),
                    r && (t = t + '|any:' + r.trim()),
                    s && (t = t + '|none:' + s.trim()),
                    u && (t = t + '|updated:' + u),
                    i && (t = t + '|site:' + i.trim()),
                    c && (t = t + '|terms:' + c.trim()),
                    (t = 'Advanced Search' + t)),
                  t
                );
              },
            },
          },
          FormSubmit: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsFormSubmit');
              },
            },
          },
          CustomClick: {
            defaultValue: 'blank custom click value',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsCustomClick');
              },
            },
          },
          FormName: {
            defaultValue: 'blank form name',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsFormName');
              },
            },
          },
          MediaTitle: {
            defaultValue: 'blank media title',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsMediaTitle');
              },
            },
          },
          FollowChannel: {
            defaultValue: 'blank follow channel',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsFollowChannel');
              },
            },
          },
          AppName: {
            defaultValue: 'blank app name',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                for (var e = document.getElementsByTagName('meta'), t = 0; t < e.length; t++) {
                  var a = e[t].name || e[t].getAttribute('property');
                  if (
                    null != a &&
                    a.length &&
                    e[t].content &&
                    ('dcterms:service' == a || 'dcterms.service' == a)
                  )
                    return e[t].content;
                }
                var n = '/fr/partage-info',
                  r = '/en/info-share',
                  s = document.location.href;
                return 0 < s.indexOf(n)
                  ? 'Portail de services pour les députés'
                  : 0 < s.indexOf(r)
                  ? 'MP Service Portal'
                  : _satellite.gcCustom.thisDomain.AppName;
              },
            },
          },
          'PageID-Language': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: {
              elementProperty: 'content',
              elementSelector:
                'meta[name="dc.identifier"], meta[name="dcterms.identifier"], meta[property="dcterms:identifier"]',
            },
          },
          'search: search title': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.onsiteSearchTitle' },
          },
          ChatClick: {
            defaultValue: 'blank chat click value',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsChatClick');
              },
            },
          },
          FollowDialog: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsFollowDialog');
              },
            },
          },
          LinkFileType: {
            defaultValue: 'blank link file type',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsLinkFileType');
              },
            },
          },
          ApplyFilter: {
            defaultValue: 'blank form value',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsApplyFilter');
              },
            },
          },
          'search: search URL': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.onsiteSearchURL' },
          },
          'MandateTrackerExpand-Collapse': {
            defaultValue: 'blank mandate tracker expand-collapse',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsMandateTrackerExpand-Collapse');
              },
            },
          },
          MediaType: {
            defaultValue: 'blank media type',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsMediaType');
              },
            },
          },
          ExtCampaignName: {
            defaultValue: 'blank utm_campaign',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_campaign', caseInsensitive: !0 },
          },
          PreviousPageURL: {
            defaultValue: 'blank page url',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsPreviousPageURL');
              },
            },
          },
          SuprQFr: {
            defaultValue: 'blanc;blanc;blanc;blanc;blanc;blanc;blanc;blanc',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsSuprQFr');
              },
            },
          },
          SocialShareMediaTitle: {
            defaultValue: 'blank social share item title',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsSocialShareMediaTitle');
              },
            },
          },
          'Expand-CollapseTitle': {
            defaultValue: 'blank expand-collapse title',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsExpand-CollapseTitle');
              },
            },
          },
          'search parameter allq | url': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'allq', caseInsensitive: !0 },
          },
          MediaFormat: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsMediaFormat');
              },
            },
          },
          PreviousPageID: {
            defaultValue: 'blank page id',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsPreviousPageID');
              },
            },
          },
          PageName: {
            defaultValue: 'blank page name',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: {
              elementProperty: 'content',
              elementSelector:
                'meta[name="dc.title"],meta[name="dcterms.title"],meta[property="dcterms:title"]',
            },
          },
          PageType: {
            defaultValue: 'blank news type',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e,
                  t = [
                    'backgrounders',
                    "documents d'information",
                    'media advisories',
                    'avis aux médias',
                    'news releases',
                    'communiqués de presse',
                    'speeches',
                    'discours',
                    'statements',
                    'déclarations',
                  ],
                  a = document.head
                    ? document.head.getElementsByTagName('meta')
                    : document.getElementsByTagName('meta');
                if (0 < a.length)
                  for (var n = 0; n < a.length; n++) {
                    var r = a.item(n).name || a.item(n).getAttribute('property');
                    if (
                      null != r &&
                      r.length &&
                      a.item(n).content &&
                      ('dcterms:type' == r || 'dcterms.type' == r) &&
                      ((e = a.item(n).content), -1 !== t.indexOf(e))
                    )
                      return e;
                  }
                return null;
              },
            },
          },
          'search: search refinement': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.onsiteSearchRefinement' },
          },
          FormList: {
            defaultValue: 'blank form list',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsFormList');
              },
            },
          },
          'DefaultValue-DeviceType': {
            defaultValue: 'blank device type',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return null;
              },
            },
          },
          HomePageFeatureIE: {
            defaultValue: 'blank home page feature(IE)',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsHomePageFeatureIE');
              },
            },
          },
          PreviousPageTitle: {
            defaultValue: 'blank page title',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsPreviousPageTitle');
              },
            },
          },
          ServerHour: {
            defaultValue: 'blank server hour',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('jsServerHour');
              },
            },
          },
          'AOR-SourceID': {
            defaultValue: 'blank integration id',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'id_source', caseInsensitive: !0 },
          },
          'search parameter noneq | url': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'noneq', caseInsensitive: !0 },
          },
        },
        extensions: {
          'adobe-mcid': {
            displayName: 'Experience Cloud ID Service',
            modules: {
              'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
                script: function (e, t, a, g) {
                  'use strict';
                  var n = a('@adobe/reactor-document'),
                    r = a('../codeLibrary/VisitorAPI'),
                    f = a('../../view/utils/timeUnits'),
                    h = function (e) {
                      return e.reduce(function (e, t) {
                        var a = /^(true|false)$/i.test(t.value) ? JSON.parse(t.value) : t.value;
                        return (e[t.name] = a), e;
                      }, {});
                    },
                    s = function (e) {
                      var t = g.getExtensionSettings();
                      if ('string' != typeof t.orgId)
                        throw new TypeError('Org ID is not a string.');
                      var a = h(t.variables || []),
                        n = t.doesOptInApply;
                      n &&
                        ('boolean' == typeof n
                          ? (a.doesOptInApply = n)
                          : t.optInCallback && (a.doesOptInApply = t.optInCallback));
                      var r = t.isOptInStorageEnabled;
                      r && (a.isOptInStorageEnabled = r);
                      var s = t.optInCookieDomain;
                      s && (a.optInCookieDomain = s);
                      var i = t.optInStorageExpiry;
                      if (i) {
                        var o = t.timeUnit;
                        if (o && f[o]) {
                          var c = i * f[o];
                          a.optInStorageExpiry = c;
                        }
                      } else !0 === r && (a.optInStorageExpiry = 33696000);
                      var l = t.previousPermissions;
                      l && (a.previousPermissions = l);
                      var u = t.preOptInApprovals;
                      if (u) a.preOptInApprovals = u;
                      else {
                        var d = t.preOptInApprovalInput;
                        d && (a.preOptInApprovals = d);
                      }
                      var m = t.isIabContext;
                      m && (a.isIabContext = m);
                      var p = e.getInstance(t.orgId, a);
                      return (
                        g.logger.info('Created instance using orgId: "' + t.orgId + '"'),
                        g.logger.info('Set variables: ' + JSON.stringify(a)),
                        p.getMarketingCloudVisitorID(function (e) {
                          g.logger.info('Obtained Marketing Cloud Visitor Id: ' + e);
                        }, !0),
                        p
                      );
                    },
                    i = function (t) {
                      return (g.getExtensionSettings().pathExclusions || []).some(function (e) {
                        return e.valueIsRegex ? new RegExp(e.value, 'i').test(t) : e.value === t;
                      });
                    },
                    o = null;
                  (_satellite.getVisitorId = function () {
                    return o;
                  }),
                    i(n.location.pathname)
                      ? g.logger.warn(
                          'MCID library not loaded. One of the path exclusions matches the current path.'
                        )
                      : (o = s(r)),
                    (e.exports = o);
                },
                name: 'mcid-instance',
                shared: !0,
              },
              'adobe-mcid/src/lib/codeLibrary/VisitorAPI.js': {
                script: function (e) {
                  e.exports =
                    ((function () {
                      'use strict';
                      function U (e) {
                        return (U =
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
                      function e (e, t, a) {
                        return (
                          t in e
                            ? Object.defineProperty(e, t, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (e[t] = a),
                          e
                        );
                      }
                      function t () {
                        return {
                          callbacks: {},
                          add: function (e, t) {
                            this.callbacks[e] = this.callbacks[e] || [];
                            var a = this.callbacks[e].push(t) - 1,
                              n = this;
                            return function () {
                              n.callbacks[e].splice(a, 1);
                            };
                          },
                          execute: function (e, t) {
                            if (this.callbacks[e]) {
                              t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                              try {
                                for (; this.callbacks[e].length; ) {
                                  var a = this.callbacks[e].shift();
                                  'function' == typeof a
                                    ? a.apply(null, t)
                                    : a instanceof Array && a[1].apply(a[0], t);
                                }
                                delete this.callbacks[e];
                              } catch (e) {}
                            }
                          },
                          executeAll: function (a, e) {
                            (e || (a && !G.isObjectEmpty(a))) &&
                              Object.keys(this.callbacks).forEach(function (e) {
                                var t = void 0 !== a[e] ? a[e] : '';
                                this.execute(e, t);
                              }, this);
                          },
                          hasCallbacks: function () {
                            return Boolean(Object.keys(this.callbacks).length);
                          },
                        };
                      }
                      function m (e, t, a) {
                        var n = null == e ? void 0 : e[t];
                        return void 0 === n ? a : n;
                      }
                      function r (e) {
                        for (var t = /^\d+$/, a = 0, n = e.length; a < n; a++)
                          if (!t.test(e[a])) return !1;
                        return !0;
                      }
                      function s (e, t) {
                        for (; e.length < t.length; ) e.push('0');
                        for (; t.length < e.length; ) t.push('0');
                      }
                      function i (e, t) {
                        for (var a = 0; a < e.length; a++) {
                          var n = parseInt(e[a], 10),
                            r = parseInt(t[a], 10);
                          if (r < n) return 1;
                          if (n < r) return -1;
                        }
                        return 0;
                      }
                      function a (e, t) {
                        if (e === t) return 0;
                        var a = e.toString().split('.'),
                          n = t.toString().split('.');
                        return r(a.concat(n)) ? (s(a, n), i(a, n)) : NaN;
                      }
                      function o (e) {
                        return e === Object(e) && 0 === Object.keys(e).length;
                      }
                      function c (e) {
                        return 'function' == typeof e || (e instanceof Array && e.length);
                      }
                      function n (e, t) {
                        var a = 0 < arguments.length && void 0 !== e ? arguments[0] : '',
                          n =
                            1 < arguments.length && void 0 !== t
                              ? arguments[1]
                              : function () {
                                  return !0;
                                };
                        (this.log = me('log', a, n)),
                          (this.warn = me('warn', a, n)),
                          (this.error = me('error', a, n));
                      }
                      function D (e, t) {
                        var r = (0 < arguments.length && void 0 !== e ? arguments[0] : {})
                            .cookieName,
                          s = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies;
                        if (!r || !s) return { get: Ee, set: Ee, remove: Ee };
                        var i = {
                          remove: function () {
                            s.remove(r);
                          },
                          get: function () {
                            var e = s.get(r),
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
                            var a = i.get(),
                              n = Object.assign(a, e);
                            s.set(r, JSON.stringify(n), {
                              domain: t.optInCookieDomain || '',
                              cookieLifetime: t.optInStorageExpiry || 34190000,
                              expires: !0,
                            });
                          },
                        };
                        return i;
                      }
                      function l (e) {
                        (this.name = this.constructor.name),
                          (this.message = e),
                          'function' == typeof Error.captureStackTrace
                            ? Error.captureStackTrace(this, this.constructor)
                            : (this.stack = new Error(e).stack);
                      }
                      function u (e, t) {
                        function a (e, t) {
                          var a = ve(e);
                          return a.length
                            ? a.every(function (e) {
                                return !!t[e];
                              })
                            : be(t);
                        }
                        function n () {
                          A(T),
                            I(H.COMPLETE),
                            S(k.status, k.permissions),
                            l &&
                              w.set(k.permissions, {
                                optInCookieDomain: u,
                                optInStorageExpiry: d,
                              }),
                            C.execute(De);
                        }
                        function r (a) {
                          return function (e, t) {
                            if (!ye(e))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return I(H.CHANGED), Object.assign(T, we(ve(e), a)), t || n(), k;
                          };
                        }
                        var s = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          i = s.doesOptInApply,
                          o = s.previousPermissions,
                          c = s.preOptInApprovals,
                          l = s.isOptInStorageEnabled,
                          u = s.optInCookieDomain,
                          d = s.optInStorageExpiry,
                          m = s.isIabContext,
                          p = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                          g = xe(o);
                        Ve(g, 'Invalid `previousPermissions`!'),
                          Ve(c, 'Invalid `preOptInApprovals`!');
                        var f,
                          h,
                          v,
                          b,
                          y,
                          w = D({ cookieName: 'adobeujs-optin' }, { cookies: p }),
                          k = this,
                          S = B(k),
                          C = le(),
                          _ = Ce(g),
                          P = Ce(c),
                          j = l ? w.get() : {},
                          E = {},
                          x = ((y = j), _e(_) || (y && _e(y)) ? H.COMPLETE : H.PENDING),
                          V =
                            ((f = P),
                            (h = _),
                            (v = j),
                            (b = we(ce, !i)),
                            i ? Object.assign({}, b, f, h, v) : b),
                          T = ke(V),
                          I = function (e) {
                            return (x = e);
                          },
                          A = function (e) {
                            return (V = e);
                          };
                        (k.deny = r(!1)),
                          (k.approve = r(!0)),
                          (k.denyAll = k.deny.bind(k, ce)),
                          (k.approveAll = k.approve.bind(k, ce)),
                          (k.isApproved = function (e) {
                            return a(e, k.permissions);
                          }),
                          (k.isPreApproved = function (e) {
                            return a(e, P);
                          }),
                          (k.fetchPermissions = function (e, t) {
                            var a = 1 < arguments.length && void 0 !== t && arguments[1],
                              n = a ? k.on(H.COMPLETE, e) : Ee;
                            return (
                              !i || (i && k.isComplete) || c
                                ? e(k.permissions)
                                : a ||
                                  C.add(De, function () {
                                    return e(k.permissions);
                                  }),
                              n
                            );
                          }),
                          (k.complete = function () {
                            k.status === H.CHANGED && n();
                          }),
                          (k.registerPlugin = function (e) {
                            if (!e || !e.name || 'function' != typeof e.onRegister)
                              throw new Error(Ne);
                            E[e.name] || (E[e.name] = e).onRegister.call(e, k);
                          }),
                          (k.execute = Ae(E)),
                          (k.memoizeContent = function (e) {
                            je(e) && w.set(e, { optInCookieDomain: u, optInStorageExpiry: d });
                          }),
                          (k.getMemoizedContent = function (e) {
                            var t = w.get();
                            if (t) return t[e];
                          }),
                          Object.defineProperties(k, {
                            permissions: {
                              get: function () {
                                return V;
                              },
                            },
                            status: {
                              get: function () {
                                return x;
                              },
                            },
                            Categories: {
                              get: function () {
                                return re;
                              },
                            },
                            doesOptInApply: {
                              get: function () {
                                return !!i;
                              },
                            },
                            isPending: {
                              get: function () {
                                return k.status === H.PENDING;
                              },
                            },
                            isComplete: {
                              get: function () {
                                return k.status === H.COMPLETE;
                              },
                            },
                            __plugins: {
                              get: function () {
                                return Object.keys(E);
                              },
                            },
                            isIabContext: {
                              get: function () {
                                return m;
                              },
                            },
                          });
                      }
                      function d (e, t) {
                        function a () {
                          (r = null), e.call(e, new l('The call took longer than you wanted!'));
                        }
                        function n () {
                          r && (clearTimeout(r), e.apply(e, arguments));
                        }
                        if (void 0 === t) return e;
                        var r = setTimeout(a, t);
                        return n;
                      }
                      function p () {
                        if (window.__tcfapi) return window.__tcfapi;
                        var e = window;
                        if (e !== window.top) {
                          for (var i; !i; ) {
                            e = e.parent;
                            try {
                              e.frames.__tcfapiLocator && (i = e);
                            } catch (e) {}
                            if (e === window.top) break;
                          }
                          if (i) {
                            var o = {};
                            return (
                              (window.__tcfapi = function (e, t, a, n) {
                                var r = Math.random() + '',
                                  s = {
                                    __tcfapiCall: {
                                      command: e,
                                      parameter: n,
                                      version: t,
                                      callId: r,
                                    },
                                  };
                                (o[r] = a), i.postMessage(s, '*');
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
                                    var a = t.__tcfapiReturn;
                                    'function' == typeof o[a.callId] &&
                                      (o[a.callId](a.returnValue, a.success), delete o[a.callId]);
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
                      function g (t, e, a) {
                        var n = 2 < arguments.length && void 0 !== a ? arguments[2] : [],
                          r = !0 === t.vendor.consents[e],
                          s = n.every(function (e) {
                            return !0 === t.purpose.consents[e];
                          });
                        return r && s;
                      }
                      function f () {
                        var a = this;
                        (a.name = 'iabPlugin'), (a.version = '0.0.2');
                        var s,
                          i = le(),
                          o = { transparencyAndConsentData: null },
                          c = function (e, t) {
                            var a = 1 < arguments.length && void 0 !== t ? arguments[1] : {};
                            return (o[e] = a);
                          };
                        (a.fetchConsentData = function (e) {
                          var t = d(e.callback, e.timeout);
                          l({ callback: t });
                        }),
                          (a.isApproved = function (e) {
                            var a = e.callback,
                              n = e.category,
                              t = e.timeout;
                            if (o.transparencyAndConsentData)
                              return a(null, g(o.transparencyAndConsentData, se[n], ie[n]));
                            var r = d(function (e, t) {
                              a(e, g(t, se[n], ie[n]));
                            }, t);
                            l({ category: n, callback: r });
                          }),
                          (a.onRegister = function (n) {
                            s = n;
                            var t = Object.keys(se),
                              e = function (e, a) {
                                !e &&
                                  a &&
                                  (t.forEach(function (e) {
                                    var t = g(a, se[e], ie[e]);
                                    n[t ? 'approve' : 'deny'](e, !0);
                                  }),
                                  n.complete());
                              };
                            a.fetchConsentData({ callback: e });
                          });
                        var l = function (e) {
                            var t = e.callback;
                            if (o.transparencyAndConsentData)
                              return t(null, o.transparencyAndConsentData);
                            i.add('FETCH_CONSENT_DATA', t),
                              n(function (e, t) {
                                if (t) {
                                  var a = ke(e),
                                    n = s.getMemoizedContent('iabConsentHash'),
                                    r = ge(a.tcString).toString(32);
                                  (a.consentString = e.tcString),
                                    (a.hasConsentChangedSinceLastCmpPull = n !== r),
                                    c('transparencyAndConsentData', a),
                                    s.memoizeContent({ iabConsentHash: r });
                                }
                                i.execute('FETCH_CONSENT_DATA', [
                                  null,
                                  o.transparencyAndConsentData,
                                ]);
                              });
                          },
                          n = function (e) {
                            var t = Ie(se),
                              a = p();
                            'function' == typeof a && a('getTCData', 2, e, t);
                          };
                      }
                      var $ =
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
                          for (var t, a, n = 1; n < arguments.length; ++n)
                            for (t in (a = arguments[n]))
                              Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                          return e;
                        };
                      var h,
                        v,
                        b,
                        y,
                        W = {
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
                          SAME_SITE_VALUES: { LAX: 'Lax', STRICT: 'Strict', NONE: 'None' },
                        },
                        w = W.STATE_KEYS_MAP,
                        k = function (s) {
                          function n () {}
                          function r (a, n) {
                            var r = this;
                            return function () {
                              var e = s(0, a),
                                t = {};
                              return (t[a] = e), r.setStateAndPublish(t), n(e), e;
                            };
                          }
                          (this.getMarketingCloudVisitorID = function (e) {
                            e = e || n;
                            var t = this.findField(w.MCMID, e),
                              a = r.call(this, w.MCMID, e);
                            return void 0 !== t ? t : a();
                          }),
                            (this.getVisitorValues = function (t) {
                              this.getMarketingCloudVisitorID(function (e) {
                                t({ MCMID: e });
                              });
                            });
                        },
                        S = W.MESSAGES,
                        C = W.ASYNC_API_MAP,
                        _ = W.SYNC_API_MAP,
                        P = function () {
                          function r () {}
                          function s (e, t) {
                            var a = this;
                            return function () {
                              return a.callbackRegistry.add(e, t), a.messageParent(S.GETSTATE), '';
                            };
                          }
                          function e (n) {
                            this[C[n]] = function (e) {
                              e = e || r;
                              var t = this.findField(n, e),
                                a = s.call(this, n, e);
                              return void 0 !== t ? t : a();
                            };
                          }
                          function t (e) {
                            this[_[e]] = function () {
                              return this.findField(e, r) || {};
                            };
                          }
                          Object.keys(C).forEach(e, this), Object.keys(_).forEach(t, this);
                        },
                        j = W.ASYNC_API_MAP,
                        E = function () {
                          Object.keys(j).forEach(function (t) {
                            this[j[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        G =
                          ((function (e, t) {
                            (t.isObjectEmpty = function (e) {
                              return e === Object(e) && 0 === Object.keys(e).length;
                            }),
                              (t.isValueEmpty = function (e) {
                                return '' === e || t.isObjectEmpty(e);
                              });
                            var a = function () {
                              const $___old_68f3f8bbd3aa5666 = {}.constructor.getOwnPropertyDescriptor(
                                Navigator.prototype,
                                'userAgent'
                              );
                              try {
                                if ($___old_68f3f8bbd3aa5666)
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
                                if ($___old_68f3f8bbd3aa5666)
                                  ({}.constructor.defineProperty(
                                    Navigator.prototype,
                                    'userAgent',
                                    $___old_68f3f8bbd3aa5666
                                  ));
                              }
                            };
                            (t.getIeVersion = function () {
                              return document.documentMode
                                ? document.documentMode
                                : a()
                                ? 7
                                : null;
                            }),
                              (t.encodeAndBuildRequest = function (e, t) {
                                return e.map(encodeURIComponent).join(t);
                              }),
                              (t.isObject = function (e) {
                                return null !== e && 'object' === U(e) && !1 === Array.isArray(e);
                              }),
                              (t.defineGlobalNamespace = function () {
                                return (
                                  (window.adobe = t.isObject(window.adobe) ? window.adobe : {}),
                                  window.adobe
                                );
                              }),
                              (t.pluck = function (a, e) {
                                return e.reduce(function (e, t) {
                                  return a[t] && (e[t] = a[t]), e;
                                }, Object.create(null));
                              }),
                              (t.parseOptOut = function (e, t, a) {
                                t ||
                                  ((t = a),
                                  e.d_optout &&
                                    e.d_optout instanceof Array &&
                                    (t = e.d_optout.join(',')));
                                var n = parseInt(e.d_ottl, 10);
                                return isNaN(n) && (n = 7200), { optOut: t, d_ottl: n };
                              }),
                              (t.normalizeBoolean = function (e) {
                                var t = e;
                                return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
                              });
                          })((y = { exports: {} }), y.exports),
                          y.exports),
                        x =
                          (G.isObjectEmpty,
                          G.isValueEmpty,
                          G.getIeVersion,
                          G.encodeAndBuildRequest,
                          G.isObject,
                          G.defineGlobalNamespace,
                          G.pluck,
                          G.parseOptOut,
                          G.normalizeBoolean,
                          t),
                        V = W.MESSAGES,
                        T = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        Q = function (s, i) {
                          (this.parse = function (e) {
                            try {
                              var a = {};
                              return (
                                e.data.split('|').forEach(function (e, t) {
                                  void 0 !== e && (a[T[t]] = 2 !== t ? e : JSON.parse(e));
                                }),
                                a
                              );
                            } catch (e) {}
                          }),
                            (this.isInvalid = function (e) {
                              var t = this.parse(e);
                              if (!t || Object.keys(t).length < 2) return !0;
                              var a = s !== t.orgID,
                                n = !i || e.origin !== i,
                                r = -1 === Object.keys(V).indexOf(t.prefix);
                              return a || n || r;
                            }),
                            (this.send = function (e, t, a) {
                              var n = t + '|' + s;
                              a && a === Object(a) && (n += '|' + JSON.stringify(a));
                              try {
                                e.postMessage(n, i);
                              } catch (s) {}
                            });
                        },
                        I = W.MESSAGES,
                        A = function (e, t, a, n) {
                          function r (e) {
                            Object.assign(p, e);
                          }
                          function s (e) {
                            Object.assign(p.state, e),
                              Object.assign(p.state.ALLFIELDS, e),
                              p.callbackRegistry.executeAll(p.state);
                          }
                          function i (e) {
                            if (!h.isInvalid(e)) {
                              f = !1;
                              var t = h.parse(e);
                              p.setStateAndPublish(t.state);
                            }
                          }
                          function o (e) {
                            !f && g && ((f = !0), h.send(n, e));
                          }
                          function c () {
                            r(new k(a._generateID)),
                              p.getMarketingCloudVisitorID(),
                              p.callbackRegistry.executeAll(p.state, !0),
                              $.removeEventListener('message', l);
                          }
                          function l (e) {
                            if (!h.isInvalid(e)) {
                              var t = h.parse(e);
                              (f = !1),
                                $.clearTimeout(p._handshakeTimeout),
                                $.removeEventListener('message', l),
                                r(new P(p)),
                                $.addEventListener('message', i),
                                p.setStateAndPublish(t.state),
                                p.callbackRegistry.hasCallbacks() && o(I.GETSTATE);
                            }
                          }
                          function u () {
                            g && postMessage
                              ? ($.addEventListener('message', l),
                                o(I.HANDSHAKE),
                                (p._handshakeTimeout = setTimeout(c, 250)))
                              : c();
                          }
                          function d () {
                            $.s_c_in || (($.s_c_il = []), ($.s_c_in = 0)),
                              (p._c = 'Visitor'),
                              (p._il = $.s_c_il),
                              (p._in = $.s_c_in),
                              (p._il[p._in] = p),
                              $.s_c_in++;
                          }
                          function m () {
                            function e (e) {
                              0 !== e.indexOf('_') &&
                                'function' == typeof a[e] &&
                                (p[e] = function () {});
                            }
                            Object.keys(a).forEach(e),
                              (p.getSupplementalDataID = a.getSupplementalDataID),
                              (p.isAllowed = function () {
                                return !0;
                              });
                          }
                          var p = this,
                            g = t.whitelistParentDomain;
                          (p.state = { ALLFIELDS: {} }),
                            (p.version = a.version),
                            (p.marketingCloudOrgID = e),
                            (p.cookieDomain = a.cookieDomain || '');
                          var f = !(p._instanceType = 'child'),
                            h = new Q(e, g);
                          (p.callbackRegistry = x()),
                            (p.init = function () {
                              d(), m(), r(new E(p)), u();
                            }),
                            (p.findField = function (e, t) {
                              if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e];
                            }),
                            (p.messageParent = o),
                            (p.setStateAndPublish = s);
                        },
                        N = W.MESSAGES,
                        O = W.ALL_APIS,
                        M = W.ASYNC_API_MAP,
                        F = W.FIELDGROUP_TO_FIELD,
                        z = function (r, n) {
                          function s () {
                            var n = {};
                            return (
                              Object.keys(O).forEach(function (e) {
                                var t = O[e],
                                  a = r[t]();
                                G.isValueEmpty(a) || (n[e] = a);
                              }),
                              n
                            );
                          }
                          function i () {
                            var a = [];
                            return (
                              r._loading &&
                                Object.keys(r._loading).forEach(function (e) {
                                  if (r._loading[e]) {
                                    var t = F[e];
                                    a.push(t);
                                  }
                                }),
                              a.length ? a : null
                            );
                          }
                          function t (a) {
                            return function n () {
                              var e = i();
                              if (e) {
                                var t = M[e[0]];
                                r[t](n, !0);
                              } else a();
                            };
                          }
                          function a (e, t) {
                            var a = s();
                            n.send(e, t, a);
                          }
                          function o (e) {
                            l(e), a(e, N.HANDSHAKE);
                          }
                          function c (e) {
                            t(function () {
                              a(e, N.PARENTSTATE);
                            })();
                          }
                          function l (t) {
                            function e (e) {
                              a.call(r, e),
                                n.send(t, N.PARENTSTATE, { CUSTOMERIDS: r.getCustomerIDs() });
                            }
                            var a = r.setCustomerIDs;
                            r.setCustomerIDs = e;
                          }
                          return function (e) {
                            n.isInvalid(e) ||
                              (n.parse(e).prefix === N.HANDSHAKE ? o : c)(e.source);
                          };
                        },
                        Y = function (n, a) {
                          function r (t) {
                            return function (e) {
                              (s[t] = e), ++i === o && a(s);
                            };
                          }
                          var s = {},
                            i = 0,
                            o = Object.keys(n).length;
                          Object.keys(n).forEach(function (e) {
                            var t = n[e];
                            if (t.fn) {
                              var a = t.args || [];
                              a.unshift(r(e)), t.fn.apply(t.context || null, a);
                            }
                          });
                        },
                        J = {
                          get: function (e) {
                            e = encodeURIComponent(e);
                            var t = (';' + document.cookie).split(' ').join(';'),
                              a = t.indexOf(';' + e + '='),
                              n = a < 0 ? a : t.indexOf(';', a + 1);
                            return a < 0
                              ? ''
                              : decodeURIComponent(
                                  t.substring(a + 2 + e.length, n < 0 ? t.length : n)
                                );
                          },
                          set: function (e, t, a) {
                            var n = m(a, 'cookieLifetime'),
                              r = m(a, 'expires'),
                              s = m(a, 'domain'),
                              i = m(a, 'secure'),
                              o = m(a, 'sameSite'),
                              c = i ? 'Secure' : '',
                              l = o ? 'SameSite=' + o + ';' : '';
                            if (r && 'SESSION' !== n && 'NONE' !== n) {
                              var u = '' !== t ? parseInt(n || 0, 10) : -60;
                              if (u) (r = new Date()).setTime(r.getTime() + 1000 * u);
                              else if (1 === r) {
                                var d = (r = new Date()).getYear();
                                r.setYear(d + 2 + (d < 1900 ? 1900 : 0));
                              }
                            } else r = 0;
                            return e && 'NONE' !== n
                              ? ((document.cookie =
                                  encodeURIComponent(e) +
                                  '=' +
                                  encodeURIComponent(t) +
                                  '; path=/;' +
                                  (r ? ' expires=' + r.toGMTString() + ';' : '') +
                                  (s ? ' domain=' + s + ';' : '') +
                                  l +
                                  c),
                                this.get(e) === t)
                              : 0;
                          },
                          remove: function (e, t) {
                            var a = m(t, 'domain');
                            a = a ? ' domain=' + a + ';' : '';
                            var n = m(t, 'secure'),
                              r = m(t, 'sameSite'),
                              s = n ? 'Secure' : '',
                              i = r ? 'SameSite=' + r + ';' : '';
                            document.cookie =
                              encodeURIComponent(e) +
                              '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                              a +
                              i +
                              s;
                          },
                        },
                        K = function (e, t) {
                          !e && $.location && (e = $.location.hostname);
                          var a,
                            n = e.split('.'),
                            r = t || {};
                          for (a = n.length - 2; 0 <= a; a--)
                            if (((r.domain = n.slice(a).join('.')), J.set('test', 'cookie', r)))
                              return J.remove('test', r), r.domain;
                          return '';
                        },
                        X = {
                          compare: a,
                          isLessThan: function (e, t) {
                            return a(e, t) < 0;
                          },
                          areVersionsDifferent: function (e, t) {
                            return 0 !== a(e, t);
                          },
                          isGreaterThan: function (e, t) {
                            return 0 < a(e, t);
                          },
                          isEqual: function (e, t) {
                            return 0 === a(e, t);
                          },
                        },
                        L = !!$.postMessage,
                        Z = {
                          postMessage: function (e, t, a) {
                            var n = 1;
                            t &&
                              (L
                                ? a.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (a.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + n++ + '&' + e));
                          },
                          receiveMessage: function (t, a) {
                            var e;
                            try {
                              L &&
                                (t &&
                                  (e = function (e) {
                                    if (
                                      ('string' == typeof a && e.origin !== a) ||
                                      ('[object Function]' === Object.prototype.toString.call(a) &&
                                        !1 === a(e.origin))
                                    )
                                      return !1;
                                    t(e);
                                  }),
                                $.addEventListener
                                  ? $[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : $[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
                            } catch (t) {}
                          },
                        },
                        ee = function (e) {
                          var t,
                            a,
                            n = '0123456789',
                            r = '',
                            s = '',
                            i = 8,
                            o = 10,
                            c = 10;
                          if (1 == e) {
                            for (n += 'ABCDEF', t = 0; t < 16; t++)
                              (a = Math.floor(Math.random() * i)),
                                (r += n.substring(a, a + 1)),
                                (a = Math.floor(Math.random() * i)),
                                (s += n.substring(a, a + 1)),
                                (i = 16);
                            return r + '-' + s;
                          }
                          for (t = 0; t < 19; t++)
                            (a = Math.floor(Math.random() * o)),
                              (r += n.substring(a, a + 1)),
                              0 === t && 9 == a
                                ? (o = 3)
                                : (1 == t || 2 == t) && 10 != o && a < 2
                                ? (o = 10)
                                : 2 < t && (o = 10),
                              (a = Math.floor(Math.random() * c)),
                              (s += n.substring(a, a + 1)),
                              0 === t && 9 == a
                                ? (c = 3)
                                : (1 == t || 2 == t) && 10 != c && a < 2
                                ? (c = 10)
                                : 2 < t && (c = 10);
                          return r + s;
                        },
                        te = function (n) {
                          const $___old_01890e3ce3a434ae = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_8aec88b063710241 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_01890e3ce3a434ae)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_8343e440b270d768.XMLHttpRequest
                              ));
                            if ($___old_8aec88b063710241)
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
                                        .call($.HTMLElement)
                                        .indexOf('Constructor') && (t = !1)),
                                  { corsType: e, corsCookiesEnabled: t }),
                                getCORSInstance: function () {
                                  const $___old_c481a0e0e814e2b0 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    ),
                                    $___old_ed42539600d80ce9 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    );
                                  try {
                                    if ($___old_c481a0e0e814e2b0)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_8343e440b270d768.XMLHttpRequest
                                      ));
                                    if ($___old_ed42539600d80ce9)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_8343e440b270d768.XMLHttpRequest
                                      ));
                                    return function () {
                                      return 'none' === this.corsMetadata.corsType
                                        ? null
                                        : new $[this.corsMetadata.corsType]();
                                    }.apply(this, arguments);
                                  } finally {
                                    if ($___old_c481a0e0e814e2b0)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_c481a0e0e814e2b0
                                      ));
                                    if ($___old_ed42539600d80ce9)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_ed42539600d80ce9
                                      ));
                                  }
                                },
                                fireCORS: function (s, e) {
                                  function t (e) {
                                    var t;
                                    try {
                                      if ((t = JSON.parse(e)) !== Object(t))
                                        return void i.handleCORSError(
                                          s,
                                          null,
                                          'Response is not JSON'
                                        );
                                    } catch (e) {
                                      return void i.handleCORSError(
                                        s,
                                        e,
                                        'Error parsing response as JSON'
                                      );
                                    }
                                    try {
                                      for (var a = s.callback, n = $, r = 0; r < a.length; r++)
                                        n = n[a[r]];
                                      n(t);
                                    } catch (e) {
                                      i.handleCORSError(s, e, 'Error forming callback function');
                                    }
                                  }
                                  var i = this;
                                  e && (s.loadErrorHandler = e);
                                  try {
                                    var a = this.getCORSInstance();
                                    a.open('get', s.corsUrl + '&ts=' + new Date().getTime(), !0),
                                      'XMLHttpRequest' === this.corsMetadata.corsType &&
                                        ((a.withCredentials = !0),
                                        (a.timeout = n.loadTimeout),
                                        a.setRequestHeader(
                                          'Content-Type',
                                          'application/x-www-form-urlencoded'
                                        ),
                                        (a.onreadystatechange = function () {
                                          4 === this.readyState &&
                                            200 === this.status &&
                                            t(this.responseText);
                                        })),
                                      (a.onerror = function (e) {
                                        i.handleCORSError(s, e, 'onerror');
                                      }),
                                      (a.ontimeout = function (e) {
                                        i.handleCORSError(s, e, 'ontimeout');
                                      }),
                                      a.send(),
                                      n._log.requests.push(s.corsUrl);
                                  } catch (n) {
                                    this.handleCORSError(s, n, 'try-catch');
                                  }
                                },
                                handleCORSError: function (e, t, a) {
                                  n.CORSErrors.push({ corsData: e, error: t, description: a }),
                                    e.loadErrorHandler &&
                                      ('ontimeout' === a
                                        ? e.loadErrorHandler(!0)
                                        : e.loadErrorHandler(!1));
                                },
                              };
                              var e, t;
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_01890e3ce3a434ae)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_01890e3ce3a434ae
                              ));
                            if ($___old_8aec88b063710241)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_8aec88b063710241
                              ));
                          }
                        },
                        ae = {
                          POST_MESSAGE_ENABLED: !!$.postMessage,
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
                          var r = $.document;
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
                                a =
                                  '?d_nsid=' +
                                  g.idSyncContainerID +
                                  '#' +
                                  encodeURIComponent(r.location.origin);
                              return (
                                this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                                g.loadSSL &&
                                  (t = g.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                                (e = t + this.subdomain + '.demdex.net/dest5.html' + a),
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
                                ((n = r.createElement('iframe')).sandbox =
                                  'allow-scripts allow-same-origin'),
                                  (n.title = 'Adobe ID Syncing iFrame'),
                                  (n.id = a.id),
                                  (n.name = a.id + '_name'),
                                  (n.style.cssText = 'display: none; width: 0; height: 0;'),
                                  (n.src = a.url),
                                  (a.newIframeCreated = !0),
                                  t(),
                                  r.body.appendChild(n);
                              }
                              function t (e) {
                                n.addEventListener('load', function () {
                                  (n.className = 'aamIframeLoaded'),
                                    (a.iframeHasLoaded = !0),
                                    a.fireIframeLoadedCallbacks(e),
                                    a.requestToProcess();
                                });
                              }
                              this.startedAttachingIframe = !0;
                              var a = this,
                                n = r.getElementById(this.id);
                              n
                                ? 'IFRAME' !== n.nodeName
                                  ? ((this.id += '_2'), (this.iframeIdChanged = !0), e())
                                  : ((this.newIframeCreated = !1),
                                    'aamIframeLoaded' !== n.className
                                      ? ((this.originalIframeHasLoadedAlready = !1),
                                        t(
                                          "The destination publishing iframe already exists from a different library, but hadn't loaded yet."
                                        ))
                                      : ((this.originalIframeHasLoadedAlready = !0),
                                        (this.iframeHasLoaded = !0),
                                        (this.iframe = n),
                                        this.fireIframeLoadedCallbacks(
                                          'The destination publishing iframe already exists from a different library, and had loaded alresady.'
                                        ),
                                        this.requestToProcess()))
                                : e(),
                                (this.iframe = n);
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
                                n.jsonForComparison.push(e),
                                  n.jsonWaiting.push(e),
                                  n.processSyncOnPage(e);
                              }
                              var a,
                                n = this;
                              if (e === Object(e) && e.ibs)
                                if (
                                  ((a = JSON.stringify(e.ibs || [])),
                                  this.jsonForComparison.length)
                                ) {
                                  var r,
                                    s,
                                    i,
                                    o = !1;
                                  for (r = 0, s = this.jsonForComparison.length; r < s; r++)
                                    if (
                                      ((i = this.jsonForComparison[r]),
                                      a === JSON.stringify(i.ibs || []))
                                    ) {
                                      o = !0;
                                      break;
                                    }
                                  o ? this.jsonDuplicates.push(e) : t();
                                } else t();
                              if (
                                (this.receivedThirdPartyCookiesNotification ||
                                  !ae.POST_MESSAGE_ENABLED ||
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
                                    n.messageSendingInterval = ae.POST_MESSAGE_ENABLED
                                      ? null
                                      : 150;
                                  }, this.THROTTLE_START)),
                                (this.sendingMessages = !0),
                                this.sendMessages());
                            },
                            getRegionAndCheckIfChanged: function (e, t) {
                              var a = g._getField('MCAAMLH'),
                                n = e.d_region || e.dcs_region;
                              return (
                                a
                                  ? n &&
                                    (g._setFieldExpire('MCAAMLH', t),
                                    g._setField('MCAAMLH', n),
                                    parseInt(a, 10) !== n &&
                                      ((this.regionChanged = !0),
                                      this.timesRegionChanged++,
                                      g._setField('MCSYNCSOP', ''),
                                      g._setField('MCSYNCS', ''),
                                      (a = n)))
                                  : (a = n) &&
                                    (g._setFieldExpire('MCAAMLH', t), g._setField('MCAAMLH', a)),
                                a || (a = ''),
                                a
                              );
                            },
                            processSyncOnPage: function (e) {
                              var t, a, n, r;
                              if ((t = e.ibs) && t instanceof Array && (a = t.length))
                                for (n = 0; n < a; n++)
                                  (r = t[n]).syncOnPage &&
                                    this.checkFirstPartyCookie(r, '', 'syncOnPage');
                            },
                            process: function (e) {
                              var t,
                                a,
                                n,
                                r,
                                s,
                                i = encodeURIComponent,
                                o = !1;
                              if ((t = e.ibs) && t instanceof Array && (a = t.length))
                                for (o = !0, n = 0; n < a; n++)
                                  (r = t[n]),
                                    (s = [
                                      i('ibs'),
                                      i(r.id || ''),
                                      i(r.tag || ''),
                                      G.encodeAndBuildRequest(r.url || [], ','),
                                      i(r.ttl || ''),
                                      '',
                                      '',
                                      r.fireURLSync ? 'true' : 'false',
                                    ]),
                                    r.syncOnPage ||
                                      (this.canSetThirdPartyCookies
                                        ? this.addMessage(s.join('|'))
                                        : r.fireURLSync &&
                                          this.checkFirstPartyCookie(r, s.join('|')));
                              o && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (e, t, a) {
                              var n = 'syncOnPage' === a,
                                r = n ? 'MCSYNCSOP' : 'MCSYNCS';
                              g._readVisitor();
                              var s,
                                i,
                                o = g._getField(r),
                                c = !1,
                                l = !1,
                                u = Math.ceil(new Date().getTime() / ae.MILLIS_PER_DAY);
                              o
                                ? ((s = o.split('*')),
                                  (c = (i = this.pruneSyncData(s, e.id, u)).dataPresent),
                                  (l = i.dataValid),
                                  (c && l) || this.fireSync(n, e, t, s, r, u))
                                : ((s = []), this.fireSync(n, e, t, s, r, u));
                            },
                            pruneSyncData: function (e, t, a) {
                              var n,
                                r,
                                s,
                                i = !1,
                                o = !1;
                              for (r = 0; r < e.length; r++)
                                (n = e[r]),
                                  (s = parseInt(n.split('-')[1], 10)),
                                  n.match('^' + t + '-')
                                    ? ((i = !0), a < s ? (o = !0) : (e.splice(r, 1), r--))
                                    : s <= a && (e.splice(r, 1), r--);
                              return { dataPresent: i, dataValid: o };
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
                            fireSync: function (e, t, a, n, u, r) {
                              var d = this;
                              if (e) {
                                if ('img' === t.tag) {
                                  var s,
                                    i,
                                    o,
                                    c,
                                    l = t.url,
                                    m = g.loadSSL ? 'https:' : 'http:';
                                  for (s = 0, i = l.length; s < i; s++) {
                                    (o = l[s]), (c = /^\/\//.test(o));
                                    var p = new Image();
                                    p.addEventListener(
                                      'load',
                                      (function (i, o, c, l) {
                                        return function () {
                                          (d.onPagePixels[i] = null), g._readVisitor();
                                          var e,
                                            t,
                                            a,
                                            n,
                                            r = g._getField(u),
                                            s = [];
                                          if (r)
                                            for (t = 0, a = (e = r.split('*')).length; t < a; t++)
                                              (n = e[t]).match('^' + o.id + '-') || s.push(n);
                                          d.setSyncTrackingData(s, o, c, l);
                                        };
                                      })(this.onPagePixels.length, t, u, r)
                                    ),
                                      (p.src = (c ? m : '') + o),
                                      this.onPagePixels.push(p);
                                  }
                                }
                              } else this.addMessage(a), this.setSyncTrackingData(n, t, u, r);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                g._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push((ae.POST_MESSAGE_ENABLED ? '' : t) + e);
                            },
                            setSyncTrackingData: function (e, t, a, n) {
                              e.push(t.id + '-' + (n + Math.ceil(t.ttl / 60 / 24))),
                                this.manageSyncsSize(e),
                                g._setField(a, e.join('*'));
                            },
                            sendMessages: function () {
                              var e,
                                t = this,
                                a = '',
                                n = encodeURIComponent;
                              this.regionChanged &&
                                ((a = n('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                                this.messages.length
                                  ? ae.POST_MESSAGE_ENABLED
                                    ? ((e =
                                        a +
                                        n('---destpub-combined---') +
                                        this.messages.join('%01')),
                                      this.postMessage(e),
                                      (this.messages = []),
                                      (this.sendingMessages = !1))
                                    : ((e = this.messages.shift()),
                                      this.postMessage(a + e),
                                      setTimeout(function () {
                                        t.sendMessages();
                                      }, this.messageSendingInterval))
                                  : (this.sendingMessages = !1);
                            },
                            postMessage: function (e) {
                              Z.postMessage(e, this.url, this.iframe.contentWindow),
                                this.messagesPosted.push(e);
                            },
                            receiveMessage: function (e) {
                              var t,
                                a = /^---destpub-to-parent---/;
                              'string' == typeof e &&
                                a.test(e) &&
                                ('canSetThirdPartyCookies' ===
                                  (t = e.replace(a, '').split('|'))[0] &&
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
                                g._forceSyncIDCall || !e || t - e > ae.DAYS_BETWEEN_SYNC_ID_CALLS
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
                        R = {
                          audienceManagerServer: {},
                          audienceManagerServerSecure: {},
                          cookieDomain: {},
                          cookieLifetime: {},
                          cookieName: {},
                          doesOptInApply: { type: 'boolean' },
                          disableThirdPartyCalls: { type: 'boolean' },
                          discardTrackingServerECID: { type: 'boolean' },
                          idSyncAfterIDCallResult: {},
                          idSyncAttachIframeOnWindowLoad: { type: 'boolean' },
                          idSyncContainerID: {},
                          idSyncDisable3rdPartySyncing: { type: 'boolean' },
                          disableThirdPartyCookies: { type: 'boolean' },
                          idSyncDisableSyncs: { type: 'boolean' },
                          disableIdSyncs: { type: 'boolean' },
                          idSyncIDCallResult: {},
                          idSyncSSLUseAkamai: { type: 'boolean' },
                          isCoopSafe: { type: 'boolean' },
                          isIabContext: { type: 'boolean' },
                          isOptInStorageEnabled: { type: 'boolean' },
                          loadSSL: { type: 'boolean' },
                          loadTimeout: {},
                          marketingCloudServer: {},
                          marketingCloudServerSecure: {},
                          optInCookieDomain: {},
                          optInStorageExpiry: {},
                          overwriteCrossDomainMCIDAndAID: { type: 'boolean' },
                          preOptInApprovals: {},
                          previousPermissions: {},
                          resetBeforeVersion: {},
                          sdidParamExpiry: {},
                          serverState: {},
                          sessionCookieName: {},
                          secureCookie: { type: 'boolean' },
                          sameSiteCookie: {},
                          takeTimeoutMetrics: {},
                          trackingServer: {},
                          trackingServerSecure: {},
                          whitelistIframeDomains: {},
                          whitelistParentDomain: {},
                        },
                        q = {
                          getConfigNames: function () {
                            return Object.keys(R);
                          },
                          getConfigs: function () {
                            return R;
                          },
                          normalizeConfig: function (e, t) {
                            return R[e] && 'boolean' === R[e].type
                              ? 'function' != typeof t
                                ? t
                                : t()
                              : t;
                          },
                        },
                        B = function (e) {
                          var r = {};
                          return (
                            (e.on = function (e, t, a) {
                              if (!t || 'function' != typeof t)
                                throw new Error('[ON] Callback should be a function.');
                              r.hasOwnProperty(e) || (r[e] = []);
                              var n = r[e].push({ callback: t, context: a }) - 1;
                              return function () {
                                r[e].splice(n, 1), r[e].length || delete r[e];
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
                        H = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
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
                        se = (e((h = {}), re.AAM, 565), e(h, re.ECID, 565), h),
                        ie = (e((v = {}), re.AAM, [1, 10]), e(v, re.ECID, [1, 10]), v),
                        oe = ['videoaa', 'iabConsentHash'],
                        ce =
                          ((b = re),
                          Object.keys(b).map(function (e) {
                            return b[e];
                          })),
                        le = function () {
                          var n = {};
                          return (
                            (n.callbacks = Object.create(null)),
                            (n.add = function (e, t) {
                              if (!c(t))
                                throw new Error(
                                  '[callbackRegistryFactory] Make sure callback is a function or an array of functions.'
                                );
                              n.callbacks[e] = n.callbacks[e] || [];
                              var a = n.callbacks[e].push(t) - 1;
                              return function () {
                                n.callbacks[e].splice(a, 1);
                              };
                            }),
                            (n.execute = function (e, t) {
                              if (n.callbacks[e]) {
                                t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                                try {
                                  for (; n.callbacks[e].length; ) {
                                    var a = n.callbacks[e].shift();
                                    'function' == typeof a
                                      ? a.apply(null, t)
                                      : a instanceof Array && a[1].apply(a[0], t);
                                  }
                                  delete n.callbacks[e];
                                } catch (n) {}
                              }
                            }),
                            (n.executeAll = function (a, e) {
                              (e || (a && !o(a))) &&
                                Object.keys(n.callbacks).forEach(function (e) {
                                  var t = void 0 !== a[e] ? a[e] : '';
                                  n.execute(e, t);
                                }, n);
                            }),
                            (n.hasCallbacks = function () {
                              return Boolean(Object.keys(n.callbacks).length);
                            }),
                            n
                          );
                        },
                        ue = function () {},
                        de = function (e) {
                          var t = window.console;
                          return !!t && 'function' == typeof t[e];
                        },
                        me = function (n, r, e) {
                          return e()
                            ? function () {
                                if (de(n)) {
                                  for (
                                    var e = arguments.length, t = new Array(e), a = 0;
                                    a < e;
                                    a++
                                  )
                                    t[a] = arguments[a];
                                  console[n].apply(console, [r].concat(t));
                                }
                              }
                            : ue;
                        },
                        pe = n,
                        ge = (function () {
                          for (var r = [], e = 0; e < 256; e++) {
                            for (var t = e, a = 0; a < 8; a++)
                              t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                            r.push(t);
                          }
                          return function (e, t) {
                            (e = unescape(encodeURIComponent(e))), t || (t = 0), (t ^= -1);
                            for (var a = 0; a < e.length; a++) {
                              var n = 255 & (t ^ e.charCodeAt(a));
                              t = (t >>> 8) ^ r[n];
                            }
                            return (t ^= -1) >>> 0;
                          };
                        })(),
                        fe = new pe('[ADOBE OPT-IN]'),
                        he = function (e, t) {
                          return U(e) === t;
                        },
                        ve = function (e, t) {
                          return e instanceof Array ? e : he(e, 'string') ? [e] : t || [];
                        },
                        be = function (t) {
                          var e = Object.keys(t);
                          return (
                            !!e.length &&
                            e.every(function (e) {
                              return !0 === t[e];
                            })
                          );
                        },
                        ye = function (e, t) {
                          var a = 1 < arguments.length && void 0 !== t && arguments[1];
                          return (
                            !(!e || Se(e)) &&
                            ve(e).every(function (e) {
                              return -1 < ce.indexOf(e) || (a && -1 < oe.indexOf(e));
                            })
                          );
                        },
                        we = function (e, a) {
                          return e.reduce(function (e, t) {
                            return (e[t] = a), e;
                          }, {});
                        },
                        ke = function (e) {
                          return JSON.parse(JSON.stringify(e));
                        },
                        Se = function (e) {
                          return (
                            '[object Array]' === Object.prototype.toString.call(e) && !e.length
                          );
                        },
                        Ce = function (e) {
                          if (je(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        _e = function (e) {
                          return void 0 === e || (je(e) ? ye(Object.keys(e), !0) : Pe(e));
                        },
                        Pe = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && he(e, 'string') && ye(Object.keys(t), !0);
                          } catch (e) {
                            return !1;
                          }
                        },
                        je = function (e) {
                          return null !== e && he(e, 'object') && !1 === Array.isArray(e);
                        },
                        Ee = function () {},
                        xe = function (e) {
                          return he(e, 'function') ? e() : e;
                        },
                        Ve = function (e, t) {
                          _e(e) || fe.error(''.concat(t));
                        },
                        Te = function (t) {
                          return Object.keys(t).map(function (e) {
                            return t[e];
                          });
                        },
                        Ie = function (e) {
                          return Te(e).filter(function (e, t, a) {
                            return a.indexOf(e) === t;
                          });
                        },
                        Ae = function (d) {
                          return function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                              a = t.command,
                              n = t.params,
                              r = void 0 === n ? {} : n,
                              s = t.callback,
                              i = void 0 === s ? Ee : s;
                            if (!a || -1 === a.indexOf('.'))
                              throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                              var o = a.split('.'),
                                c = d[o[0]],
                                l = o[1];
                              if (!c || 'function' != typeof c[l])
                                throw new Error('Make sure the plugin and API name exist.');
                              var u = Object.assign(r, { callback: i });
                              c[l].call(c, u);
                            } catch (d) {
                              fe.error('[execute] Something went wrong: ' + d.message);
                            }
                          };
                        };
                      (l.prototype = Object.create(Error.prototype)),
                        (l.prototype.constructor = l);
                      var De = 'fetchPermissions',
                        Ne = '[OptIn#registerPlugin] Plugin is invalid.';
                      (u.Categories = re), (u.TimeoutError = l);
                      var Oe = Object.freeze({ OptIn: u, IabPlugin: f }),
                        Me = function (d, m) {
                          d.publishDestinations = function (e, t, a) {
                            var n = t,
                              r = a;
                            try {
                              r = 'function' == typeof r ? r : e.callback;
                            } catch (d) {
                              r = function () {};
                            }
                            var s = m;
                            if (s.readyToAttachIframePreliminary()) {
                              if ('string' == typeof e) {
                                if (!e.length)
                                  return void r({ error: 'subdomain is not a populated string.' });
                                if (!(n instanceof Array && n.length))
                                  return void r({ error: 'messages is not a populated array.' });
                                var i = !1;
                                if (
                                  (n.forEach(function (e) {
                                    'string' == typeof e &&
                                      e.length &&
                                      (s.addMessage(e), (i = !0));
                                  }),
                                  !i)
                                )
                                  return void r({
                                    error: 'None of the messages are populated strings.',
                                  });
                              } else {
                                if (!G.isObject(e))
                                  return void r({ error: 'Invalid parameters passed.' });
                                var o = e;
                                if ('string' != typeof (e = o.subdomain) || !e.length)
                                  return void r({
                                    error: 'config.subdomain is not a populated string.',
                                  });
                                var c = o.urlDestinations;
                                if (!(c instanceof Array && c.length))
                                  return void r({
                                    error: 'config.urlDestinations is not a populated array.',
                                  });
                                var l = [];
                                c.forEach(function (e) {
                                  G.isObject(e) &&
                                    (e.hideReferrer
                                      ? e.message && s.addMessage(e.message)
                                      : l.push(e));
                                }),
                                  (function u () {
                                    l.length &&
                                      setTimeout(function () {
                                        var e = new Image(),
                                          t = l.shift();
                                        (e.src = t.url), s.onPageDestinationsFired.push(t), u();
                                      }, 100);
                                  })();
                              }
                              s.iframe
                                ? (r({
                                    message:
                                      'The destination publishing iframe is already attached and loaded.',
                                  }),
                                  s.requestToProcess())
                                : !d.subdomain && d._getField('MCMID')
                                ? ((s.subdomain = e),
                                  (s.doAttachIframe = !0),
                                  (s.url = s.getUrl()),
                                  s.readyToAttachIframe()
                                    ? (s.iframeLoadedCallbacks.push(function (e) {
                                        r({
                                          message:
                                            'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                                            (e.message || 'no result'),
                                        });
                                      }),
                                      s.attachIframe())
                                    : r({
                                        error:
                                          'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                                      }))
                                : s.iframeLoadedCallbacks.push(function (e) {
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
                        Fe = function U (e) {
                          function t (e, t) {
                            return (e >>> t) | (e << (32 - t));
                          }
                          for (
                            var a,
                              n,
                              r = Math.pow,
                              s = r(2, 32),
                              i = '',
                              o = [],
                              c = 8 * e.length,
                              l = (U.h = U.h || []),
                              u = (U.k = U.k || []),
                              d = u.length,
                              m = {},
                              p = 2;
                            d < 64;
                            p++
                          )
                            if (!m[p]) {
                              for (a = 0; a < 313; a += p) m[a] = p;
                              (l[d] = (r(p, 0.5) * s) | 0), (u[d++] = (r(p, 1 / 3) * s) | 0);
                            }
                          for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
                          for (a = 0; a < e.length; a++) {
                            if ((n = e.charCodeAt(a)) >> 8) return;
                            o[a >> 2] |= n << (((3 - a) % 4) * 8);
                          }
                          for (o[o.length] = (c / s) | 0, o[o.length] = c, n = 0; n < o.length; ) {
                            var g = o.slice(n, (n += 16)),
                              f = l;
                            for (l = l.slice(0, 8), a = 0; a < 64; a++) {
                              var h = g[a - 15],
                                v = g[a - 2],
                                b = l[0],
                                y = l[4],
                                w =
                                  l[7] +
                                  (t(y, 6) ^ t(y, 11) ^ t(y, 25)) +
                                  ((y & l[5]) ^ (~y & l[6])) +
                                  u[a] +
                                  (g[a] =
                                    a < 16
                                      ? g[a]
                                      : (g[a - 16] +
                                          (t(h, 7) ^ t(h, 18) ^ (h >>> 3)) +
                                          g[a - 7] +
                                          (t(v, 17) ^ t(v, 19) ^ (v >>> 10))) |
                                        0);
                              (l = [
                                (w +
                                  ((t(b, 2) ^ t(b, 13) ^ t(b, 22)) +
                                    ((b & l[1]) ^ (b & l[2]) ^ (l[1] & l[2])))) |
                                  0,
                              ].concat(l))[4] = (l[4] + w) | 0;
                            }
                            for (a = 0; a < 8; a++) l[a] = (l[a] + f[a]) | 0;
                          }
                          for (a = 0; a < 8; a++)
                            for (n = 3; n + 1; n--) {
                              var k = (l[a] >> (8 * n)) & 255;
                              i += (k < 16 ? 0 : '') + k.toString(16);
                            }
                          return i;
                        },
                        Le = function (e, t) {
                          return (
                            ('SHA-256' !== t &&
                              'SHA256' !== t &&
                              'sha256' !== t &&
                              'sha-256' !== t) ||
                              (e = Fe(e)),
                            e
                          );
                        },
                        Re = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        qe = Oe.OptIn;
                      G.defineGlobalNamespace(), (window.adobe.OptInCategories = qe.Categories);
                      var Be = function (n, a, e) {
                        function m () {
                          v._customerIDsHashChanged = !1;
                        }
                        function t (e) {
                          var n = e;
                          return function (e) {
                            var t = e || C.location.href;
                            try {
                              var a = v._extractParamFromUri(t, n);
                              if (a) return R.parsePipeDelimetedKeyValues(a);
                            } catch (e) {}
                          };
                        }
                        function r (e) {
                          function t (e, t, a) {
                            e && e.match(ae.VALID_VISITOR_ID_REGEX) && (a === x && (S = !0), t(e));
                          }
                          t(e[x], v.setMarketingCloudVisitorID, x),
                            v._setFieldExpire(D, -1),
                            t(e[I], v.setAnalyticsVisitorID);
                        }
                        function s (e) {
                          (e = e || {}),
                            (v._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                            (v._supplementalDataIDCurrentConsumed =
                              e.supplementalDataIDCurrentConsumed || {}),
                            (v._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                            (v._supplementalDataIDLastConsumed =
                              e.supplementalDataIDLastConsumed || {});
                        }
                        function i (e) {
                          function r (e, t, a) {
                            return (a = a ? (a += '|') : a) + (e + '=') + encodeURIComponent(t);
                          }
                          function t (e, t) {
                            var a = t[0],
                              n = t[1];
                            return null != n && n !== N && (e = r(a, n, e)), e;
                          }
                          var a,
                            n = e.reduce(t, '');
                          return (
                            (a = (a = n) ? (a += '|') : a) + 'TS=' + R.getTimestampInSeconds()
                          );
                        }
                        function o (e) {
                          var t = e.minutesToLive,
                            a = '';
                          return (
                            (v.idSyncDisableSyncs || v.disableIdSyncs) &&
                              (a = a || 'Error: id syncs have been disabled'),
                            ('string' == typeof e.dpid && e.dpid.length) ||
                              (a = a || 'Error: config.dpid is empty'),
                            ('string' == typeof e.url && e.url.length) ||
                              (a = a || 'Error: config.url is empty'),
                            void 0 === t
                              ? (t = 20160)
                              : ((t = parseInt(t, 10)),
                                (isNaN(t) || t <= 0) &&
                                  (a =
                                    a ||
                                    'Error: config.minutesToLive needs to be a positive number')),
                            { error: a, ttl: t }
                          );
                        }
                        function c () {
                          return !(!v.configs.doesOptInApply || (b.optIn.isComplete && d()));
                        }
                        function d () {
                          return v.configs.doesOptInApply && v.configs.isIabContext
                            ? b.optIn.isApproved(b.optIn.Categories.ECID) && k
                            : b.optIn.isApproved(b.optIn.Categories.ECID);
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
                              a = 2 === e.length ? e[1] : '',
                              n = v[t];
                            v[t] = function (e) {
                              return d() && v.isAllowed()
                                ? n.apply(v, arguments)
                                : ('function' == typeof e && v._callCallback(e, [a]), a);
                            };
                          });
                        }
                        function u () {
                          var e = v._getAudienceManagerURLData(),
                            t = e.url;
                          return v._loadData(E, t, null, e);
                        }
                        function p (e, t) {
                          if (((k = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t &&
                            t.gdprApplies &&
                            ((y = t.consentString),
                            (w = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            u(),
                            h();
                        }
                        function g (e, t) {
                          if (((k = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies &&
                            ((y = t.consentString),
                            (w = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            v.init(),
                            h();
                        }
                        function f () {
                          b.optIn.isComplete &&
                            (b.optIn.isApproved(b.optIn.Categories.ECID)
                              ? v.configs.isIabContext
                                ? b.optIn.execute({
                                    command: 'iabPlugin.fetchConsentData',
                                    callback: g,
                                  })
                                : (v.init(), h())
                              : v.configs.isIabContext
                              ? b.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: p,
                                })
                              : (l(), h()));
                        }
                        function h () {
                          b.optIn.off('complete', f);
                        }
                        if (!e || e.split('').reverse().join('') !== n)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var v = this,
                          b = window.adobe,
                          y = '',
                          w = 0,
                          k = !1,
                          S = !1;
                        v.version = '5.1.1';
                        var C = $,
                          _ = C.Visitor;
                        (_.version = v.version),
                          (_.AuthState = W.AUTH_STATE),
                          (_.OptOut = W.OPT_OUT),
                          C.s_c_in || ((C.s_c_il = []), (C.s_c_in = 0)),
                          (v._c = 'Visitor'),
                          (v._il = C.s_c_il),
                          (v._in = C.s_c_in),
                          (v._il[v._in] = v),
                          C.s_c_in++,
                          (v._instanceType = 'regular'),
                          (v._log = { requests: [] }),
                          (v.marketingCloudOrgID = n),
                          (v.cookieName = 'AMCV_' + n),
                          (v.sessionCookieName = 'AMCVS_' + n);
                        var P = {};
                        a &&
                          a.secureCookie &&
                          a.sameSiteCookie &&
                          (P = { sameSite: a.sameSiteCookie, secure: a.secureCookie }),
                          (v.cookieDomain = K(null, P)),
                          (v.loadSSL = !0),
                          (v.loadTimeout = 30000),
                          (v.CORSErrors = []),
                          (v.marketingCloudServer = v.audienceManagerServer = 'dpm.demdex.net'),
                          (v.sdidParamExpiry = 30);
                        var j = null,
                          E = 'MC',
                          x = 'MCMID',
                          V = 'MCIDTS',
                          T = 'A',
                          I = 'MCAID',
                          A = 'AAM',
                          D = 'MCAAMB',
                          N = 'NONE',
                          O = function (e) {
                            return !Object.prototype[e];
                          },
                          M = te(v);
                        (v.FIELDS = W.FIELDS),
                          (v.cookieRead = function (e) {
                            return J.get(e);
                          }),
                          (v.cookieWrite = function (e, t, a) {
                            var n = v.cookieLifetime ? ('' + v.cookieLifetime).toUpperCase() : '',
                              r = { expires: a, domain: v.cookieDomain, cookieLifetime: n };
                            return (
                              v.configs &&
                                v.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (r.secure = !0),
                              v.configs &&
                                v.configs.sameSiteCookie &&
                                'https:' === location.protocol &&
                                (r.sameSite =
                                  W.SAME_SITE_VALUES[v.configs.sameSiteCookie.toUpperCase()] ||
                                  'Lax'),
                              J.set(e, '' + t, r)
                            );
                          }),
                          (v.removeCookie = function (e) {
                            var t = { domain: v.cookieDomain };
                            return (
                              v.configs &&
                                v.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (t.secure = !0),
                              v.configs &&
                                v.configs.sameSiteCookie &&
                                'https:' === location.protocol &&
                                (t.sameSite =
                                  W.SAME_SITE_VALUES[v.configs.sameSiteCookie.toUpperCase()] ||
                                  'Lax'),
                              J.remove(e, t)
                            );
                          }),
                          (v.resetState = function (e) {
                            e ? v._mergeServerState(e) : s();
                          }),
                          (v._isAllowedDone = !1),
                          (v._isAllowedFlag = !1),
                          (v.isAllowed = function () {
                            return (
                              v._isAllowedDone ||
                                ((v._isAllowedDone = !0),
                                (v.cookieRead(v.cookieName) ||
                                  v.cookieWrite(v.cookieName, 'T', 1)) &&
                                  (v._isAllowedFlag = !0)),
                              'T' === v.cookieRead(v.cookieName) &&
                                v._helpers.removeCookie(v.cookieName),
                              v._isAllowedFlag
                            );
                          }),
                          (v.setMarketingCloudVisitorID = function (e) {
                            v._setMarketingCloudFields(e);
                          }),
                          (v._use1stPartyMarketingCloudServer = !1),
                          (v.getMarketingCloudVisitorID = function (e, t) {
                            v.marketingCloudServer &&
                              v.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                              (v._use1stPartyMarketingCloudServer = !0);
                            var a = v._getAudienceManagerURLData('_setMarketingCloudFields'),
                              n = a.url;
                            return v._getRemoteField(x, n, e, t, a);
                          });
                        var F = function (t, e) {
                          var a = {};
                          v.getMarketingCloudVisitorID(function () {
                            e.forEach(function (e) {
                              a[e] = v._getField(e, !0);
                            }),
                              -1 !== e.indexOf('MCOPTOUT')
                                ? v.isOptedOut(
                                    function (e) {
                                      (a.MCOPTOUT = e), t(a);
                                    },
                                    null,
                                    !0
                                  )
                                : t(a);
                          }, !0);
                        };
                        (v.getVisitorValues = function (e, t) {
                          var a = {
                              MCMID: { fn: v.getMarketingCloudVisitorID, args: [!0], context: v },
                              MCOPTOUT: { fn: v.isOptedOut, args: [void 0, !0], context: v },
                              MCAID: { fn: v.getAnalyticsVisitorID, args: [!0], context: v },
                              MCAAMLH: {
                                fn: v.getAudienceManagerLocationHint,
                                args: [!0],
                                context: v,
                              },
                              MCAAMB: { fn: v.getAudienceManagerBlob, args: [!0], context: v },
                            },
                            n = t && t.length ? G.pluck(a, t) : a;
                          t && -1 === t.indexOf('MCAID') ? F(e, t) : Y(n, e);
                        }),
                          (v._currentCustomerIDs = {}),
                          (v._customerIDsHashChanged = !1),
                          (v._newCustomerIDsHash = ''),
                          (v.setCustomerIDs = function (e, t) {
                            if (!v.isOptedOut() && e) {
                              if (!G.isObject(e) || G.isObjectEmpty(e)) return !1;
                              var a, n, r, s;
                              for (a in (v._readVisitor(), e))
                                if (
                                  O(a) &&
                                  ((v._currentCustomerIDs.dataSources =
                                    v._currentCustomerIDs.dataSources || {}),
                                  (t = (n = e[a]).hasOwnProperty('hashType') ? n.hashType : t),
                                  n)
                                )
                                  if ('object' === U(n)) {
                                    var i = {};
                                    if (n.id) {
                                      if (t) {
                                        if (!(s = Le(Re(n.id), t))) return;
                                        (n.id = s), (i.hashType = t);
                                      }
                                      i.id = n.id;
                                    }
                                    null != n.authState && (i.authState = n.authState),
                                      (v._currentCustomerIDs.dataSources[a] = i);
                                  } else if (t) {
                                    if (!(s = Le(Re(n), t))) return;
                                    v._currentCustomerIDs.dataSources[a] = { id: s, hashType: t };
                                  } else v._currentCustomerIDs.dataSources[a] = { id: n };
                              var o = v.getCustomerIDs(!0),
                                c = v._getField('MCCIDH'),
                                l = '';
                              for (r in (c || (c = 0), o)) {
                                var u = o[r];
                                if (!G.isObjectEmpty(u))
                                  for (a in u)
                                    O(a) &&
                                      (l +=
                                        (l ? '|' : '') +
                                        a +
                                        '|' +
                                        ((n = u[a]).id ? n.id : '') +
                                        (n.authState ? n.authState : ''));
                              }
                              (v._newCustomerIDsHash = String(v._hash(l))),
                                v._newCustomerIDsHash !== c &&
                                  ((v._customerIDsHashChanged = !0), v._mapCustomerIDs(m));
                            }
                          }),
                          (v.syncIdentity = function (e, t) {
                            if (!v.isOptedOut() && e) {
                              if (!G.isObject(e) || G.isObjectEmpty(e)) return !1;
                              var a, n, r, s, i;
                              for (a in (v._readVisitor(), e))
                                if (
                                  O(a) &&
                                  ((v._currentCustomerIDs.nameSpaces =
                                    v._currentCustomerIDs.nameSpaces || {}),
                                  (t = (n = e[a]).hasOwnProperty('hashType') ? n.hashType : t),
                                  n && 'object' === U(n))
                                ) {
                                  var o = {};
                                  if (n.id) {
                                    if (t) {
                                      if (!(r = Le(Re(n.id), t))) return;
                                      (n.id = r), (o.hashType = t);
                                    }
                                    o.id = n.id;
                                  }
                                  null != n.authState && (o.authState = n.authState),
                                    n.dataSource &&
                                      ((v._currentCustomerIDs.dataSources =
                                        v._currentCustomerIDs.dataSources || {}),
                                      (s = n.dataSource),
                                      (v._currentCustomerIDs.dataSources[s] = o)),
                                    (v._currentCustomerIDs.nameSpaces[a] = o);
                                }
                              var c = v.getCustomerIDs(!0),
                                l = v._getField('MCCIDH'),
                                u = '';
                              for (i in (l || (l = '0'), c)) {
                                var d = c[i];
                                if (!G.isObjectEmpty(d))
                                  for (a in d)
                                    O(a) &&
                                      (u +=
                                        (u ? '|' : '') +
                                        a +
                                        '|' +
                                        ((n = d[a]).id ? n.id : '') +
                                        (n.authState ? n.authState : ''));
                              }
                              (v._newCustomerIDsHash = String(v._hash(u))),
                                v._newCustomerIDsHash !== l &&
                                  ((v._customerIDsHashChanged = !0), v._mapCustomerIDs(m));
                            }
                          }),
                          (v.getCustomerIDs = function (e) {
                            v._readVisitor();
                            var t,
                              a,
                              n = { dataSources: {}, nameSpaces: {} },
                              r = v._currentCustomerIDs.dataSources;
                            for (t in r)
                              O(t) &&
                                (a = r[t]).id &&
                                (n.dataSources[t] || (n.dataSources[t] = {}),
                                (n.dataSources[t].id = a.id),
                                null != a.authState
                                  ? (n.dataSources[t].authState = a.authState)
                                  : (n.dataSources[t].authState = _.AuthState.UNKNOWN),
                                a.hashType && (n.dataSources[t].hashType = a.hashType));
                            var s = v._currentCustomerIDs.nameSpaces;
                            for (t in s)
                              O(t) &&
                                (a = s[t]).id &&
                                (n.nameSpaces[t] || (n.nameSpaces[t] = {}),
                                (n.nameSpaces[t].id = a.id),
                                null != a.authState
                                  ? (n.nameSpaces[t].authState = a.authState)
                                  : (n.nameSpaces[t].authState = _.AuthState.UNKNOWN),
                                a.hashType && (n.nameSpaces[t].hashType = a.hashType));
                            return e ? n : n.dataSources;
                          }),
                          (v.setAnalyticsVisitorID = function (e) {
                            v._setAnalyticsFields(e);
                          }),
                          (v.getAnalyticsVisitorID = function (e, t, a) {
                            if (!R.isTrackingServerPopulated() && !a)
                              return v._callCallback(e, ['']), '';
                            var n = '';
                            if (
                              (a ||
                                (n = v.getMarketingCloudVisitorID(function () {
                                  v.getAnalyticsVisitorID(e, !0);
                                })),
                              n || a)
                            ) {
                              var r = a ? v.marketingCloudServer : v.trackingServer,
                                s = '';
                              v.loadSSL &&
                                (a
                                  ? v.marketingCloudServerSecure &&
                                    (r = v.marketingCloudServerSecure)
                                  : v.trackingServerSecure && (r = v.trackingServerSecure));
                              var i = {};
                              if (r) {
                                var o = 'http' + (v.loadSSL ? 's' : '') + '://' + r + '/id',
                                  c =
                                    'd_visid_ver=' +
                                    v.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(v.marketingCloudOrgID) +
                                    (n ? '&mid=' + encodeURIComponent(n) : '') +
                                    (v.idSyncDisable3rdPartySyncing || v.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  l = [
                                    's_c_il',
                                    v._in,
                                    '_set' + (a ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (s =
                                  o +
                                  '?' +
                                  c +
                                  '&callback=s_c_il%5B' +
                                  v._in +
                                  '%5D._set' +
                                  (a ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (i.corsUrl = o + '?' + c),
                                  (i.callback = l);
                              }
                              return (i.url = s), v._getRemoteField(a ? x : I, s, e, t, i);
                            }
                            return '';
                          }),
                          (v.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              v.getMarketingCloudVisitorID(function () {
                                v.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var a = v._getField(I);
                              if (
                                (!a &&
                                  R.isTrackingServerPopulated() &&
                                  (a = v.getAnalyticsVisitorID(function () {
                                    v.getAudienceManagerLocationHint(e, !0);
                                  })),
                                a || !R.isTrackingServerPopulated())
                              ) {
                                var n = v._getAudienceManagerURLData(),
                                  r = n.url;
                                return v._getRemoteField('MCAAMLH', r, e, t, n);
                              }
                            }
                            return '';
                          }),
                          (v.getLocationHint = v.getAudienceManagerLocationHint),
                          (v.getAudienceManagerBlob = function (e, t) {
                            if (
                              v.getMarketingCloudVisitorID(function () {
                                v.getAudienceManagerBlob(e, !0);
                              })
                            ) {
                              var a = v._getField(I);
                              if (
                                (!a &&
                                  R.isTrackingServerPopulated() &&
                                  (a = v.getAnalyticsVisitorID(function () {
                                    v.getAudienceManagerBlob(e, !0);
                                  })),
                                a || !R.isTrackingServerPopulated())
                              ) {
                                var n = v._getAudienceManagerURLData(),
                                  r = n.url;
                                return (
                                  v._customerIDsHashChanged && v._setFieldExpire(D, -1),
                                  v._getRemoteField(D, r, e, t, n)
                                );
                              }
                            }
                            return '';
                          }),
                          (v._supplementalDataIDCurrent = ''),
                          (v._supplementalDataIDCurrentConsumed = {}),
                          (v._supplementalDataIDLast = ''),
                          (v._supplementalDataIDLastConsumed = {});
                        var L = !(v.getSupplementalDataID = function (e, t) {
                          v._supplementalDataIDCurrent ||
                            t ||
                            (v._supplementalDataIDCurrent = v._generateID(1));
                          var a = v._supplementalDataIDCurrent;
                          return (
                            v._supplementalDataIDLast && !v._supplementalDataIDLastConsumed[e]
                              ? ((a = v._supplementalDataIDLast),
                                (v._supplementalDataIDLastConsumed[e] = !0))
                              : a &&
                                (v._supplementalDataIDCurrentConsumed[e] &&
                                  ((v._supplementalDataIDLast = v._supplementalDataIDCurrent),
                                  (v._supplementalDataIDLastConsumed =
                                    v._supplementalDataIDCurrentConsumed),
                                  (v._supplementalDataIDCurrent = a = t ? '' : v._generateID(1)),
                                  (v._supplementalDataIDCurrentConsumed = {})),
                                a && (v._supplementalDataIDCurrentConsumed[e] = !0)),
                            a
                          );
                        });
                        (v._liberatedOptOut = null),
                          (v.getOptOut = function (e, t) {
                            var a = v._getAudienceManagerURLData('_setMarketingCloudFields'),
                              n = a.url;
                            if (d()) return v._getRemoteField('MCOPTOUT', n, e, t, a);
                            if (
                              (v._registerCallback('liberatedOptOut', e),
                              null !== v._liberatedOptOut)
                            )
                              return (
                                v._callAllCallbacks('liberatedOptOut', [v._liberatedOptOut]),
                                (L = !1),
                                v._liberatedOptOut
                              );
                            if (L) return null;
                            L = !0;
                            var r = 'liberatedGetOptOut';
                            return (
                              (a.corsUrl = a.corsUrl.replace(
                                /\.demdex\.net\/id\?/,
                                '.demdex.net/optOutStatus?'
                              )),
                              (a.callback = [r]),
                              ($[r] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    a,
                                    n = G.parseOptOut(e, t, N);
                                  (t = n.optOut),
                                    (a = 1000 * n.d_ottl),
                                    (v._liberatedOptOut = t),
                                    setTimeout(function () {
                                      v._liberatedOptOut = null;
                                    }, a);
                                }
                                v._callAllCallbacks('liberatedOptOut', [t]), (L = !1);
                              }),
                              M.fireCORS(a),
                              null
                            );
                          }),
                          (v.isOptedOut = function (a, n, e) {
                            n || (n = _.OptOut.GLOBAL);
                            var t = v.getOptOut(function (e) {
                              var t = e === _.OptOut.GLOBAL || 0 <= e.indexOf(n);
                              v._callCallback(a, [t]);
                            }, e);
                            return t ? t === _.OptOut.GLOBAL || 0 <= t.indexOf(n) : null;
                          }),
                          (v._fields = null),
                          (v._fieldsExpired = null),
                          (v._hash = function (e) {
                            var t,
                              a = 0;
                            if (e)
                              for (t = 0; t < e.length; t++)
                                (a = (a << 5) - a + e.charCodeAt(t)), (a &= a);
                            return a;
                          }),
                          (v._generateID = ee),
                          (v._generateLocalMID = function () {
                            var e = v._generateID(0);
                            return (H.isClientSideMarketingCloudVisitorID = !0), e;
                          }),
                          (v._callbackList = null),
                          (v._callCallback = function (e, t) {
                            try {
                              'function' == typeof e ? e.apply(C, t) : e[1].apply(e[0], t);
                            } catch (e) {}
                          }),
                          (v._registerCallback = function (e, t) {
                            t &&
                              (null == v._callbackList && (v._callbackList = {}),
                              null == v._callbackList[e] && (v._callbackList[e] = []),
                              v._callbackList[e].push(t));
                          }),
                          (v._callAllCallbacks = function (e, t) {
                            if (null != v._callbackList) {
                              var a = v._callbackList[e];
                              if (a) for (; 0 < a.length; ) v._callCallback(a.shift(), t);
                            }
                          }),
                          (v._addQuerystringParam = function (e, t, a, n) {
                            var r = encodeURIComponent(t) + '=' + encodeURIComponent(a),
                              s = R.parseHash(e),
                              i = R.hashlessUrl(e);
                            if (-1 === i.indexOf('?')) return i + '?' + r + s;
                            var o = i.split('?'),
                              c = o[0] + '?',
                              l = o[1];
                            return c + R.addQueryParamAtLocation(l, r, n) + s;
                          }),
                          (v._extractParamFromUri = function (e, t) {
                            var a = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                            if (a && a.length) return decodeURIComponent(a[1]);
                          }),
                          (v._parseAdobeMcFromUrl = t(ae.ADOBE_MC)),
                          (v._parseAdobeMcSdidFromUrl = t(ae.ADOBE_MC_SDID)),
                          (v._attemptToPopulateSdidFromUrl = function (e) {
                            var t = v._parseAdobeMcSdidFromUrl(e),
                              a = 1000000000;
                            t && t.TS && (a = R.getTimestampInSeconds() - t.TS),
                              t &&
                                t.SDID &&
                                t.MCORGID === n &&
                                a < v.sdidParamExpiry &&
                                ((v._supplementalDataIDCurrent = t.SDID),
                                (v._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (v._attemptToPopulateIdsFromUrl = function () {
                            var e = v._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var t = R.getTimestampInSeconds() - e.TS;
                              if (Math.floor(t / 60) > ae.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== n)
                                return;
                              r(e);
                            }
                          }),
                          (v._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((n = e),
                                  (e = R.isObject(n) ? n : JSON.parse(n))[v.marketingCloudOrgID])
                                ) {
                                  var t = e[v.marketingCloudOrgID];
                                  (a = t.customerIDs),
                                    R.isObject(a) && v.setCustomerIDs(a),
                                    s(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                            var a, n;
                          }),
                          (v._timeout = null),
                          (v._loadData = function (e, t, a, n) {
                            (t = v._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (n.url = v._addQuerystringParam(n.url, 'd_fieldgroup', e, 1)),
                              (n.corsUrl = v._addQuerystringParam(
                                n.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (H.fieldGroupObj[e] = !0),
                              n === Object(n) &&
                                n.corsUrl &&
                                'XMLHttpRequest' === M.corsMetadata.corsType &&
                                M.fireCORS(n, a, e);
                          }),
                          (v._clearTimeout = function (e) {
                            null != v._timeout &&
                              v._timeout[e] &&
                              (clearTimeout(v._timeout[e]), (v._timeout[e] = 0));
                          }),
                          (v._settingsDigest = 0),
                          (v._getSettingsDigest = function () {
                            if (!v._settingsDigest) {
                              var e = v.version;
                              v.audienceManagerServer && (e += '|' + v.audienceManagerServer),
                                v.audienceManagerServerSecure &&
                                  (e += '|' + v.audienceManagerServerSecure),
                                (v._settingsDigest = v._hash(e));
                            }
                            return v._settingsDigest;
                          }),
                          (v._readVisitorDone = !1),
                          (v._readVisitor = function () {
                            if (!v._readVisitorDone) {
                              v._readVisitorDone = !0;
                              var e,
                                t,
                                a,
                                n,
                                r,
                                s,
                                i = v._getSettingsDigest(),
                                o = !1,
                                c = v.cookieRead(v.cookieName),
                                l = new Date();
                              if (
                                (c ||
                                  S ||
                                  v.discardTrackingServerECID ||
                                  (c = v.cookieRead(ae.FIRST_PARTY_SERVER_COOKIE)),
                                null == v._fields && (v._fields = {}),
                                c && 'T' !== c)
                              )
                                for (
                                  (c = c.split('|'))[0].match(/^[\-0-9]+$/) &&
                                    (parseInt(c[0], 10) !== i && (o = !0), c.shift()),
                                    c.length % 2 == 1 && c.pop(),
                                    e = 0;
                                  e < c.length;
                                  e += 2
                                )
                                  (a = (t = c[e].split('-'))[0]),
                                    (n = c[e + 1]),
                                    1 < t.length
                                      ? ((r = parseInt(t[1], 10)), (s = 0 < t[1].indexOf('s')))
                                      : ((r = 0), (s = !1)),
                                    o &&
                                      ('MCCIDH' === a && (n = ''),
                                      0 < r && (r = l.getTime() / 1000 - 60)),
                                    a &&
                                      n &&
                                      (v._setField(a, n, 1),
                                      0 < r &&
                                        ((v._fields['expire' + a] = r + (s ? 's' : '')),
                                        (l.getTime() >= 1000 * r ||
                                          (s && !v.cookieRead(v.sessionCookieName))) &&
                                          (v._fieldsExpired || (v._fieldsExpired = {}),
                                          (v._fieldsExpired[a] = !0))));
                              !v._getField(I) &&
                                R.isTrackingServerPopulated() &&
                                (c = v.cookieRead('s_vi')) &&
                                1 < (c = c.split('|')).length &&
                                0 <= c[0].indexOf('v1') &&
                                (0 <= (e = (n = c[1]).indexOf('[')) && (n = n.substring(0, e)),
                                n && n.match(ae.VALID_VISITOR_ID_REGEX) && v._setField(I, n));
                            }
                          }),
                          (v._appendVersionTo = function (e) {
                            var t = 'vVersion|' + v.version,
                              a = e ? v._getCookieVersion(e) : null;
                            return (
                              a
                                ? X.areVersionsDifferent(a, v.version) &&
                                  (e = e.replace(ae.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (v._writeVisitor = function () {
                            var e,
                              t,
                              a = v._getSettingsDigest();
                            for (e in v._fields)
                              O(e) &&
                                v._fields[e] &&
                                'expire' !== e.substring(0, 6) &&
                                ((t = v._fields[e]),
                                (a +=
                                  (a ? '|' : '') +
                                  e +
                                  (v._fields['expire' + e] ? '-' + v._fields['expire' + e] : '') +
                                  '|' +
                                  t));
                            (a = v._appendVersionTo(a)), v.cookieWrite(v.cookieName, a, 1);
                          }),
                          (v._getField = function (e, t) {
                            return null == v._fields ||
                              (!t && v._fieldsExpired && v._fieldsExpired[e])
                              ? null
                              : v._fields[e];
                          }),
                          (v._setField = function (e, t, a) {
                            null == v._fields && (v._fields = {}),
                              (v._fields[e] = t),
                              a || v._writeVisitor();
                          }),
                          (v._getFieldList = function (e, t) {
                            var a = v._getField(e, t);
                            return a ? a.split('*') : null;
                          }),
                          (v._setFieldList = function (e, t, a) {
                            v._setField(e, t ? t.join('*') : '', a);
                          }),
                          (v._getFieldMap = function (e, t) {
                            var a = v._getFieldList(e, t);
                            if (a) {
                              var n,
                                r = {};
                              for (n = 0; n < a.length; n += 2) r[a[n]] = a[n + 1];
                              return r;
                            }
                            return null;
                          }),
                          (v._setFieldMap = function (e, t, a) {
                            var n,
                              r = null;
                            if (t) for (n in ((r = []), t)) O(n) && (r.push(n), r.push(t[n]));
                            v._setFieldList(e, r, a);
                          }),
                          (v._setFieldExpire = function (e, t, a) {
                            var n = new Date();
                            n.setTime(n.getTime() + 1000 * t),
                              null == v._fields && (v._fields = {}),
                              (v._fields['expire' + e] =
                                Math.floor(n.getTime() / 1000) + (a ? 's' : '')),
                              t < 0
                                ? (v._fieldsExpired || (v._fieldsExpired = {}),
                                  (v._fieldsExpired[e] = !0))
                                : v._fieldsExpired && (v._fieldsExpired[e] = !1),
                              a &&
                                (v.cookieRead(v.sessionCookieName) ||
                                  v.cookieWrite(v.sessionCookieName, '1'));
                          }),
                          (v._findVisitorID = function (e) {
                            return (
                              e &&
                                ('object' === U(e) &&
                                  (e = e.d_mid
                                    ? e.d_mid
                                    : e.visitorID
                                    ? e.visitorID
                                    : e.id
                                    ? e.id
                                    : e.uuid
                                    ? e.uuid
                                    : '' + e),
                                e && 'NOTARGET' === (e = e.toUpperCase()) && (e = N),
                                (e && (e === N || e.match(ae.VALID_VISITOR_ID_REGEX))) ||
                                  (e = '')),
                              e
                            );
                          }),
                          (v._setFields = function (e, t) {
                            if (
                              (v._clearTimeout(e),
                              null != v._loading && (v._loading[e] = !1),
                              H.fieldGroupObj[e] && H.setState(e, !1),
                              e === E)
                            ) {
                              !0 !== H.isClientSideMarketingCloudVisitorID &&
                                (H.isClientSideMarketingCloudVisitorID = !1);
                              var a = v._getField(x);
                              if (!a || v.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(a = 'object' === U(t) && t.mid ? t.mid : v._findVisitorID(t))
                                ) {
                                  if (
                                    v._use1stPartyMarketingCloudServer &&
                                    !v.tried1stPartyMarketingCloudServer
                                  )
                                    return (
                                      (v.tried1stPartyMarketingCloudServer = !0),
                                      void v.getAnalyticsVisitorID(null, !1, !0)
                                    );
                                  a = v._generateLocalMID();
                                }
                                v._setField(x, a);
                              }
                              (a && a !== N) || (a = ''),
                                'object' === U(t) &&
                                  ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                    v._setFields(A, t),
                                  v._use1stPartyMarketingCloudServer &&
                                    t.mid &&
                                    v._setFields(T, { id: t.id })),
                                v._callAllCallbacks(x, [a]);
                            }
                            if (e === A && 'object' === U(t)) {
                              var n = 604800;
                              null != t.id_sync_ttl &&
                                t.id_sync_ttl &&
                                (n = parseInt(t.id_sync_ttl, 10));
                              var r = q.getRegionAndCheckIfChanged(t, n);
                              v._callAllCallbacks('MCAAMLH', [r]);
                              var s = v._getField(D);
                              (t.d_blob || t.blob) &&
                                ((s = t.d_blob) || (s = t.blob),
                                v._setFieldExpire(D, n),
                                v._setField(D, s)),
                                s || (s = ''),
                                v._callAllCallbacks(D, [s]),
                                !t.error_msg &&
                                  v._newCustomerIDsHash &&
                                  v._setField('MCCIDH', v._newCustomerIDsHash);
                            }
                            if (e === T) {
                              var i = v._getField(I);
                              (i && !v.overwriteCrossDomainMCIDAndAID) ||
                                ((i = v._findVisitorID(t))
                                  ? i !== N && v._setFieldExpire(D, -1)
                                  : (i = N),
                                v._setField(I, i)),
                                (i && i !== N) || (i = ''),
                                v._callAllCallbacks(I, [i]);
                            }
                            if (v.idSyncDisableSyncs || v.disableIdSyncs)
                              q.idCallNotProcesssed = !0;
                            else {
                              q.idCallNotProcesssed = !1;
                              var o = {};
                              (o.ibs = t.ibs), (o.subdomain = t.subdomain), q.processIDCallData(o);
                            }
                            if (t === Object(t)) {
                              var c, l;
                              d() && v.isAllowed() && (c = v._getField('MCOPTOUT'));
                              var u = G.parseOptOut(t, c, N);
                              (c = u.optOut),
                                (l = u.d_ottl),
                                v._setFieldExpire('MCOPTOUT', l, !0),
                                v._setField('MCOPTOUT', c),
                                v._callAllCallbacks('MCOPTOUT', [c]);
                            }
                          }),
                          (v._loading = null),
                          (v._getRemoteField = function (a, e, t, n, r) {
                            var s,
                              i = '',
                              o = R.isFirstPartyAnalyticsVisitorIDCall(a),
                              c = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && v.isAllowed())
                              if (
                                (v._readVisitor(),
                                !(
                                  !(i = v._getField(a, !0 === c[a])) ||
                                  (v._fieldsExpired && v._fieldsExpired[a])
                                ) ||
                                  (v.disableThirdPartyCalls && !o))
                              )
                                i ||
                                  (a === x
                                    ? (v._registerCallback(a, t),
                                      (i = v._generateLocalMID()),
                                      v.setMarketingCloudVisitorID(i))
                                    : a === I
                                    ? (v._registerCallback(a, t),
                                      (i = ''),
                                      v.setAnalyticsVisitorID(i))
                                    : (n = !(i = '')));
                              else if (
                                (a === x || 'MCOPTOUT' === a
                                  ? (s = E)
                                  : 'MCAAMLH' === a || a === D
                                  ? (s = A)
                                  : a === I && (s = T),
                                s)
                              )
                                return (
                                  !e ||
                                    (null != v._loading && v._loading[s]) ||
                                    (null == v._loading && (v._loading = {}),
                                    (v._loading[s] = !0),
                                    s === A && (w = 0),
                                    v._loadData(
                                      s,
                                      e,
                                      function (e) {
                                        if (!v._getField(a)) {
                                          e && H.setState(s, !0);
                                          var t = '';
                                          a === x
                                            ? (t = v._generateLocalMID())
                                            : s === A && (t = { error_msg: 'timeout' }),
                                            v._setFields(s, t);
                                        }
                                      },
                                      r
                                    )),
                                  v._registerCallback(a, t),
                                  i || (e || v._setFields(s, { id: N }), '')
                                );
                            return (
                              (a !== x && a !== I) || i !== N || (n = !(i = '')),
                              t && n && v._callCallback(t, [i]),
                              i
                            );
                          }),
                          (v._setMarketingCloudFields = function (e) {
                            v._readVisitor(), v._setFields(E, e);
                          }),
                          (v._mapCustomerIDs = function (e) {
                            v.getAudienceManagerBlob(e, !0);
                          }),
                          (v._setAnalyticsFields = function (e) {
                            v._readVisitor(), v._setFields(T, e);
                          }),
                          (v._setAudienceManagerFields = function (e) {
                            v._readVisitor(), v._setFields(A, e);
                          }),
                          (v._getAudienceManagerURLData = function (e) {
                            var t = v.audienceManagerServer,
                              a = '',
                              n = v._getField(x),
                              r = v._getField(D, !0),
                              s = v._getField(I),
                              i = s && s !== N ? '&d_cid_ic=AVID%01' + encodeURIComponent(s) : '';
                            if (
                              (v.loadSSL &&
                                v.audienceManagerServerSecure &&
                                (t = v.audienceManagerServerSecure),
                              t)
                            ) {
                              var o,
                                c,
                                l,
                                u = v.getCustomerIDs(!0);
                              if (u)
                                for (c in u) {
                                  var d = u[c];
                                  if (!G.isObjectEmpty(d)) {
                                    var m = 'nameSpaces' === c ? '&d_cid_ns=' : '&d_cid_ic=';
                                    for (o in d)
                                      O(o) &&
                                        ((l = d[o]),
                                        (i +=
                                          m +
                                          encodeURIComponent(o) +
                                          '%01' +
                                          encodeURIComponent(l.id ? l.id : '') +
                                          (l.authState ? '%01' + l.authState : '')));
                                  }
                                }
                              e || (e = '_setAudienceManagerFields');
                              var p = 'http' + (v.loadSSL ? 's' : '') + '://' + t + '/id',
                                g =
                                  'd_visid_ver=' +
                                  v.version +
                                  (y && -1 !== p.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_consent=' + y
                                    : '') +
                                  (w && -1 !== p.indexOf('demdex.net') ? '&d_cf=' + w : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!n && v._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(v.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (v.idSyncContainerID || 0) +
                                  (n ? '&d_mid=' + encodeURIComponent(n) : '') +
                                  (v.idSyncDisable3rdPartySyncing || v.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === j
                                    ? '&d_coop_safe=1'
                                    : !1 === j
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                                  i,
                                f = ['s_c_il', v._in, e];
                              return {
                                url: (a = p + '?' + g + '&d_cb=s_c_il%5B' + v._in + '%5D.' + e),
                                corsUrl: p + '?' + g,
                                callback: f,
                              };
                            }
                            return { url: a };
                          }),
                          (v.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [x, v._getField(x)],
                                [I, v._getField(I)],
                                ['MCORGID', v.marketingCloudOrgID],
                              ];
                              return v._addQuerystringParam(e, ae.ADOBE_MC, i(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (v.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || v.getSupplementalDataID(R.generateRandomString(), !0)))
                              return e;
                            try {
                              var a = i([
                                ['SDID', t],
                                ['MCORGID', v.marketingCloudOrgID],
                              ]);
                              return v._addQuerystringParam(e, ae.ADOBE_MC_SDID, a);
                            } catch (t) {
                              return e;
                            }
                          });
                        var R = {
                          parseHash: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(t) : '';
                          },
                          hashlessUrl: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(0, t) : e;
                          },
                          addQueryParamAtLocation: function (e, t, a) {
                            var n = e.split('&');
                            return (a = null != a ? a : n.length), n.splice(a, 0, t), n.join('&');
                          },
                          isFirstPartyAnalyticsVisitorIDCall: function (e, t, a) {
                            return (
                              e === I &&
                              (t || (t = v.trackingServer),
                              a || (a = v.trackingServerSecure),
                              !('string' != typeof (n = v.loadSSL ? a : t) || !n.length) &&
                                n.indexOf('2o7.net') < 0 &&
                                n.indexOf('omtrdc.net') < 0)
                            );
                            var n;
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            J.remove(e, { domain: v.cookieDomain });
                          },
                          isTrackingServerPopulated: function () {
                            return !!v.trackingServer || !!v.trackingServerSecure;
                          },
                          getTimestampInSeconds: function () {
                            return Math.round(new Date().getTime() / 1000);
                          },
                          parsePipeDelimetedKeyValues: function (e) {
                            return e.split('|').reduce(function (e, t) {
                              var a = t.split('=');
                              return (e[a[0]] = decodeURIComponent(a[1])), e;
                            }, {});
                          },
                          generateRandomString: function (e) {
                            e = e || 5;
                            for (var t = '', a = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--; )
                              t += a[Math.floor(Math.random() * a.length)];
                            return t;
                          },
                          normalizeBoolean: function (e) {
                            return 'true' === e || ('false' !== e && e);
                          },
                          parseBoolean: function (e) {
                            return 'true' === e || ('false' !== e && null);
                          },
                          replaceMethodsWithFunction: function (e, t) {
                            for (var a in e)
                              e.hasOwnProperty(a) && 'function' == typeof e[a] && (e[a] = t);
                            return e;
                          },
                        };
                        v._helpers = R;
                        var q = ne(v, _);
                        (v._destinationPublishing = q), (v.timeoutMetricsLog = []);
                        var B,
                          H = {
                            isClientSideMarketingCloudVisitorID: null,
                            MCIDCallTimedOut: null,
                            AnalyticsIDCallTimedOut: null,
                            AAMIDCallTimedOut: null,
                            fieldGroupObj: {},
                            setState: function (e, t) {
                              switch (e) {
                                case E:
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
                                case A:
                                  !1 === t
                                    ? !0 !== this.AAMIDCallTimedOut &&
                                      (this.AAMIDCallTimedOut = !1)
                                    : (this.AAMIDCallTimedOut = t);
                              }
                            },
                          };
                        (v.isClientSideMarketingCloudVisitorID = function () {
                          return H.isClientSideMarketingCloudVisitorID;
                        }),
                          (v.MCIDCallTimedOut = function () {
                            return H.MCIDCallTimedOut;
                          }),
                          (v.AnalyticsIDCallTimedOut = function () {
                            return H.AnalyticsIDCallTimedOut;
                          }),
                          (v.AAMIDCallTimedOut = function () {
                            return H.AAMIDCallTimedOut;
                          }),
                          (v.idSyncGetOnPageSyncInfo = function () {
                            return v._readVisitor(), v._getField('MCSYNCSOP');
                          }),
                          (v.idSyncByURL = function (e) {
                            if (!v.isOptedOut()) {
                              var t = o(e || {});
                              if (t.error) return t.error;
                              var a,
                                n,
                                r = e.url,
                                s = encodeURIComponent,
                                i = q;
                              return (
                                (r = r.replace(/^https:/, '').replace(/^http:/, '')),
                                (a = G.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (n = ['ibs', s(e.dpid), 'img', s(r), t.ttl, '', a]),
                                i.addMessage(n.join('|')),
                                i.requestToProcess(),
                                'Successfully queued'
                              );
                            }
                          }),
                          (v.idSyncByDataSource = function (e) {
                            if (!v.isOptedOut())
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  v.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                          }),
                          Me(v, q),
                          (v._getCookieVersion = function (e) {
                            e = e || v.cookieRead(v.cookieName);
                            var t = ae.VERSION_REGEX.exec(e);
                            return t && 1 < t.length ? t[1] : null;
                          }),
                          (v._resetAmcvCookie = function (e) {
                            var t = v._getCookieVersion();
                            (t && !X.isLessThan(t, e)) || R.removeCookie(v.cookieName);
                          }),
                          (v.setAsCoopSafe = function () {
                            j = !0;
                          }),
                          (v.setAsCoopUnsafe = function () {
                            j = !1;
                          }),
                          (function () {
                            if (((v.configs = Object.create(null)), R.isObject(a)))
                              for (var e in a) O(e) && ((v[e] = a[e]), (v.configs[e] = a[e]));
                          })(),
                          l(),
                          (v.init = function () {
                            (c() &&
                              (b.optIn.fetchPermissions(f, !0),
                              !b.optIn.isApproved(b.optIn.Categories.ECID))) ||
                              B ||
                              ((B = !0),
                              (function () {
                                if (R.isObject(a)) {
                                  (v.idSyncContainerID = v.idSyncContainerID || 0),
                                    (j =
                                      'boolean' == typeof v.isCoopSafe
                                        ? v.isCoopSafe
                                        : R.parseBoolean(v.isCoopSafe)),
                                    v.resetBeforeVersion &&
                                      v._resetAmcvCookie(v.resetBeforeVersion),
                                    v._attemptToPopulateIdsFromUrl(),
                                    v._attemptToPopulateSdidFromUrl(),
                                    v._readVisitor();
                                  var e = v._getField(V),
                                    t = Math.ceil(new Date().getTime() / ae.MILLIS_PER_DAY);
                                  v.idSyncDisableSyncs ||
                                    v.disableIdSyncs ||
                                    !q.canMakeSyncIDCall(e, t) ||
                                    (v._setFieldExpire(D, -1), v._setField(V, t)),
                                    v.getMarketingCloudVisitorID(),
                                    v.getAudienceManagerLocationHint(),
                                    v.getAudienceManagerBlob(),
                                    v._mergeServerState(v.serverState);
                                } else
                                  v._attemptToPopulateIdsFromUrl(),
                                    v._attemptToPopulateSdidFromUrl();
                              })(),
                              (function () {
                                if (!v.idSyncDisableSyncs && !v.disableIdSyncs) {
                                  q.checkDPIframeSrc();
                                  var e = function () {
                                    var e = q;
                                    e.readyToAttachIframe() && e.attachIframe();
                                  };
                                  C.addEventListener('load', function () {
                                    (_.windowLoaded = !0), e();
                                  });
                                  try {
                                    Z.receiveMessage(function (e) {
                                      q.receiveMessage(e.data);
                                    }, q.iframeHost);
                                  } catch (e) {}
                                }
                              })(),
                              v.whitelistIframeDomains &&
                                ae.POST_MESSAGE_ENABLED &&
                                ((v.whitelistIframeDomains =
                                  v.whitelistIframeDomains instanceof Array
                                    ? v.whitelistIframeDomains
                                    : [v.whitelistIframeDomains]),
                                v.whitelistIframeDomains.forEach(function (e) {
                                  var t = new Q(n, e),
                                    a = z(v, t);
                                  Z.receiveMessage(a, e);
                                })));
                          });
                      };
                      Be.config = q;
                      var He = ($.Visitor = Be),
                        Ue = function (r) {
                          if (G.isObject(r))
                            return Object.keys(r)
                              .filter(function (e) {
                                return '' !== r[e] && q.getConfigs()[e];
                              })
                              .reduce(function (e, t) {
                                var a = q.normalizeConfig(t, r[t]),
                                  n = G.normalizeBoolean(a);
                                return (e[t] = n), e;
                              }, Object.create(null));
                        },
                        $e = Oe.OptIn,
                        We = Oe.IabPlugin;
                      (He.getInstance = function (n, e) {
                        if (!n) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        n.indexOf('@') < 0 && (n += '@AdobeOrg');
                        var t = (function () {
                          var e = $.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var a = e[t];
                              if (a && 'Visitor' === a._c && a.marketingCloudOrgID === n) return a;
                            }
                        })();
                        if (t) return t;
                        var r,
                          a = Ue(e) || {};
                        (r = a || {}),
                          ($.adobe.optIn =
                            $.adobe.optIn ||
                            (function () {
                              var e = G.pluck(r, [
                                  'doesOptInApply',
                                  'previousPermissions',
                                  'preOptInApprovals',
                                  'isOptInStorageEnabled',
                                  'optInStorageExpiry',
                                  'isIabContext',
                                ]),
                                t = r.optInCookieDomain || r.cookieDomain;
                              (t = (t = t || K()) === window.location.hostname ? '' : t),
                                (e.optInCookieDomain = t);
                              var a = new $e(e, { cookies: J });
                              if (e.isIabContext && e.doesOptInApply) {
                                var n = new We();
                                a.registerPlugin(n);
                              }
                              return a;
                            })());
                        var s = n.split('').reverse().join(''),
                          i = new He(n, null, s);
                        a.cookieDomain && (i.cookieDomain = a.cookieDomain),
                          a.sameSiteCookie &&
                            a.secureCookie &&
                            (i.configs = {
                              sameSiteCookie: a.sameSiteCookie,
                              secureCookie: a.secureCookie,
                            }),
                          $.s_c_il.splice(--$.s_c_in, 1);
                        var o = G.getIeVersion();
                        if ('number' == typeof o && o < 10)
                          return i._helpers.replaceMethodsWithFunction(i, function () {});
                        var c,
                          l =
                            (function () {
                              try {
                                return $.self !== $.parent;
                              } catch (n) {
                                return !0;
                              }
                            })() &&
                            ((c = i).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== c.cookieRead('TEST_AMCV_COOKIE') ||
                              (c.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            $.parent
                              ? new A(n, a, i, $.parent)
                              : new He(n, a, s);
                        return (i = null), l.init(), l;
                      }),
                        (function () {
                          function e () {
                            He.windowLoaded = !0;
                          }
                          $.addEventListener
                            ? $.addEventListener('load', e)
                            : $.attachEvent && $.attachEvent('onload', e),
                            (He.codeLoadEnd = new Date().getTime());
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
              orgId: 'A90F2A0D55423F537F000101@AdobeOrg',
              variables: [{ name: 'trackingServer', value: 'canada.sc.omtrdc.net' }],
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPbba09bba93284cafa07ef329983e2c69/',
          },
          core: {
            displayName: 'Core',
            modules: {
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
              'core/src/lib/dataElements/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (e, t, a) {
                  'use strict';
                  var i = a('@adobe/reactor-window'),
                    o = a('@adobe/reactor-query-string');
                  e.exports = function (e) {
                    var t = o.parse(i.location.search);
                    if (!e.caseInsensitive) return t[e.name];
                    for (
                      var a = e.name.toLowerCase(), n = Object.keys(t), r = 0;
                      r < n.length;
                      r++
                    ) {
                      var s = n[r];
                      if (s.toLowerCase() === a) return t[s];
                    }
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
                      var a = e.elementProperty;
                      return 'text' === a
                        ? t.innerText || t.textContent
                        : a in t
                        ? t[a]
                        : t.getAttribute
                        ? t.getAttribute(a)
                        : undefined;
                    }
                  };
                },
              },
              'core/src/lib/dataElements/javascriptVariable.js': {
                name: 'javascript-variable',
                displayName: 'JavaScript Variable',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('../helpers/getObjectProperty.js');
                  e.exports = function (e) {
                    return n(window, e.path);
                  };
                },
              },
              'core/src/lib/dataElements/cookie.js': {
                name: 'cookie',
                displayName: 'Cookie',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-cookie');
                  e.exports = function (e) {
                    return n.get(e.name);
                  };
                },
              },
              'core/src/lib/dataElements/sessionStorage.js': {
                name: 'session-storage',
                displayName: 'Session Storage',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-window');
                  e.exports = function (e) {
                    const $___old_7b1bcfe1b1edb969 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'sessionStorage'
                    );
                    try {
                      if ($___old_7b1bcfe1b1edb969)
                        ({}.constructor.defineProperty(
                          window,
                          'sessionStorage',
                          $___stub_a011c28886b08277.sessionStorage
                        ));
                      return function () {
                        try {
                          return n.sessionStorage.getItem(e.name);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_7b1bcfe1b1edb969)
                        ({}.constructor.defineProperty(
                          window,
                          'sessionStorage',
                          $___old_7b1bcfe1b1edb969
                        ));
                    }
                  };
                },
              },
              'core/src/lib/dataElements/pageInfo.js': {
                name: 'page-info',
                displayName: 'Page Info',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document');
                  e.exports = function (e) {
                    switch (e.attribute) {
                      case 'url':
                        return n.location.href;
                      case 'hostname':
                        return n.location.hostname;
                      case 'pathname':
                        return n.location.pathname;
                      case 'protocol':
                        return n.location.protocol;
                      case 'referrer':
                        return n.referrer;
                      case 'title':
                        return n.title;
                    }
                  };
                },
              },
              'core/src/lib/events/submit.js': {
                name: 'submit',
                displayName: 'Submit',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/createBubbly')();
                  document.addEventListener('submit', n.evaluateEvent, !0),
                    (e.exports = function (e, t) {
                      n.addListener(e, t);
                    });
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, a, s) {
                  'use strict';
                  var i,
                    n,
                    r,
                    o,
                    c = a('@adobe/reactor-document'),
                    l = a('@adobe/reactor-promise'),
                    u = a('./helpers/decorateCode'),
                    d = a('./helpers/loadCodeSequentially'),
                    m = a('../../../node_modules/postscribe/dist/postscribe'),
                    p = a('./helpers/unescapeHtmlCode'),
                    g =
                      ((n = function (e) {
                        m(c.body, e, {
                          beforeWriteToken: function (t) {
                            var e = t.tagName && t.tagName.toLowerCase();
                            return (
                              i && 'script' === e && (t.attrs.nonce = i),
                              ('script' !== e && 'style' !== e) ||
                                (Object.keys(t.attrs || {}).forEach(function (e) {
                                  t.attrs[e] = p(t.attrs[e]);
                                }),
                                t.src && (t.src = p(t.src))),
                              t
                            );
                          },
                          error: function (e) {
                            s.logger.error(e.msg);
                          },
                        });
                      }),
                      (r = []),
                      (o = function () {
                        if (c.body) for (; r.length; ) n(r.shift());
                        else setTimeout(o, 20);
                      }),
                      function (e) {
                        r.push(e), o();
                      }),
                    f = (function () {
                      if (c.currentScript) return c.currentScript.async;
                      for (var e = c.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(a.src)) return a.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    var a;
                    i = s.getExtensionSettings().cspNonce;
                    var n = { settings: e, event: t },
                      r = n.settings.source;
                    if (r)
                      return n.settings.isExternal
                        ? d(r).then(function (e) {
                            return e ? ((a = u(n, e)), g(a.code), a.promise) : l.resolve();
                          })
                        : ((a = u(n, r)),
                          f || 'loading' !== c.readyState
                            ? g(a.code)
                            : c.write && !1 === s.propertySettings.ruleComponentSequencingEnabled
                            ? c.write(a.code)
                            : g(a.code),
                          a.promise);
                  };
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (e) {
                  'use strict';
                  var n = function (e) {
                      return 'number' == typeof e && isFinite(e);
                    },
                    r = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    },
                    s = function (e, t) {
                      return t && r(e) ? e.toLowerCase() : e;
                    },
                    i = function (e) {
                      return n(e) ? String(e) : e;
                    },
                    o = function (e) {
                      return r(e) ? Number(e) : e;
                    },
                    t = function (n) {
                      return function (e, t, a) {
                        return (e = i(e)), (t = i(t)), r(e) && r(t) && n(e, t, a);
                      };
                    },
                    a = function (a) {
                      return function (e, t) {
                        return (e = o(e)), (t = o(t)), n(e) && n(t) && a(e, t);
                      };
                    },
                    c = function (n) {
                      return function (e, t, a) {
                        return n(s(e, a), s(t, a));
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
                      matchesRegex: t(function (e, t, a) {
                        return new RegExp(t, a ? 'i' : '').test(e);
                      }),
                      doesNotMatchRegex: function () {
                        return !l.matchesRegex.apply(null, arguments);
                      },
                      lessThan: a(function (e, t) {
                        return e < t;
                      }),
                      lessThanOrEqual: a(function (e, t) {
                        return e <= t;
                      }),
                      greaterThan: a(function (e, t) {
                        return t < e;
                      }),
                      greaterThanOrEqual: a(function (e, t) {
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
              'core/src/lib/events/click.js': {
                name: 'click',
                displayName: 'Click',
                script: function (e, t, a) {
                  'use strict';
                  var s = a('@adobe/reactor-window'),
                    i = a('./helpers/createBubbly')(),
                    o = new (a('./helpers/weakMap'))(),
                    c = function (e) {
                      for (; e; ) {
                        var t = e.tagName;
                        if (t && 'a' === t.toLowerCase()) {
                          var a = e.getAttribute('href'),
                            n = e.getAttribute('target');
                          return a &&
                            (!n || '_self' === n || ('_top' === n && s.top === s) || n === s.name)
                            ? e
                            : void 0;
                        }
                        e = e.parentNode;
                      }
                    };
                  document.addEventListener('click', i.evaluateEvent, !0),
                    (e.exports = function (n, r) {
                      i.addListener(n, function (e) {
                        var t = e.nativeEvent;
                        if (!t.s_fe) {
                          if (n.anchorDelay && !o.has(t)) {
                            var a = c(t.target);
                            a &&
                              (t.preventDefault(),
                              setTimeout(function () {
                                s.location = a.href;
                              }, n.anchorDelay)),
                              o.set(t, !0);
                          }
                          r(e);
                        }
                      });
                    }),
                    (e.exports.__reset = i.__reset);
                },
              },
              'core/src/lib/events/pageBottom.js': {
                name: 'page-bottom',
                displayName: 'Page Bottom',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    n.registerPageBottomTrigger(t);
                  };
                },
              },
              'core/src/lib/conditions/subdomain.js': {
                name: 'subdomain',
                displayName: 'Subdomain',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document'),
                    r = a('../helpers/textMatch');
                  e.exports = function (e) {
                    var a = n.location.hostname;
                    return e.subdomains.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return r(a, t);
                    });
                  };
                },
              },
              'core/src/lib/conditions/deviceType.js': {
                name: 'device-type',
                displayName: 'Device Type',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/clientInfo');
                  e.exports = function (e) {
                    return -1 !== e.deviceTypes.indexOf(n.deviceType);
                  };
                },
              },
              'core/src/lib/conditions/domain.js': {
                name: 'domain',
                displayName: 'Domain',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document'),
                    r = /[|\\{}()[\]^$+*?.-]/g,
                    s = function (e) {
                      if ('string' != typeof e) throw new TypeError('Expected a string');
                      return e.replace(r, '\\$&');
                    };
                  e.exports = function (e) {
                    var t = n.location.hostname;
                    return e.domains.some(function (e) {
                      return t.match(new RegExp('(^|\\.)' + s(e) + '$', 'i'));
                    });
                  };
                },
              },
              'core/src/lib/events/directCall.js': {
                name: 'direct-call',
                displayName: 'Direct Call',
                script: function (e, t, a, s) {
                  'use strict';
                  var i = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite.track = function (e, t) {
                      e = e.trim();
                      var a = i[e];
                      if (a) {
                        var n = { identifier: e, detail: t };
                        a.forEach(function (e) {
                          e(n);
                        });
                        var r = [
                          'Rules using the direct call event type with identifier "' +
                            e +
                            '" have been triggered' +
                            (t ? ' with additional detail:' : '.'),
                        ];
                        t && r.push(t), s.logger.log.apply(s.logger, r);
                      } else
                        s.logger.log('"' + e + '" does not match any direct call identifiers.');
                    }),
                    (e.exports = function (e, t) {
                      var a = i[e.identifier];
                      a || (a = i[e.identifier] = []), a.push(t);
                    });
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document'),
                    r = a('../helpers/textMatch');
                  e.exports = function (e) {
                    var a = n.location.pathname;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return r(a, t);
                    });
                  };
                },
              },
              'core/src/lib/conditions/hash.js': {
                name: 'hash',
                displayName: 'Hash',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('../helpers/textMatch');
                  e.exports = function (e) {
                    var a = document.location.hash;
                    return e.hashes.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return n(a, t);
                    });
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    n.registerLibraryLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/events/timeOnPage.js': {
                name: 'time-on-page',
                displayName: 'Time On Page',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document'),
                    r = a('./helpers/once'),
                    s = a('./helpers/visibilityApi')(),
                    i = a('./helpers/timer'),
                    o = s.hiddenProperty,
                    c = s.visibilityChangeEventType,
                    l = {},
                    u = function (e) {
                      var t = { timeOnPage: e / 1000 };
                      l[e].forEach(function (e) {
                        e(t);
                      });
                    },
                    d = r(function () {
                      var e = new i();
                      return (
                        e.on('markerPassed', u),
                        n.addEventListener(
                          c,
                          function () {
                            n[o] ? e.pause() : e.resume();
                          },
                          !0
                        ),
                        e.start(),
                        e
                      );
                    });
                  e.exports = function (e, t) {
                    var a = d(),
                      n = 1000 * e.timeOnPage;
                    a.addMarker(n), l[n] || (l[n] = []), l[n].push(t);
                  };
                },
              },
              'core/src/lib/events/historyChange.js': {
                name: 'history-change',
                displayName: 'History Change',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/debounce'),
                    r = a('./helpers/once'),
                    s = window.history,
                    i = window.location.href,
                    o = [],
                    c = function (t, e, a) {
                      var n = t[e];
                      t[e] = function () {
                        var e = n.apply(t, arguments);
                        return a.apply(null, arguments), e;
                      };
                    },
                    l = n(function () {
                      var e = window.location.href;
                      i !== e &&
                        (o.forEach(function (e) {
                          e();
                        }),
                        (i = e));
                    }, 0),
                    u = r(function () {
                      s &&
                        (s.pushState && c(s, 'pushState', l),
                        s.replaceState && c(s, 'replaceState', l)),
                        window.addEventListener('popstate', l),
                        window.addEventListener('hashchange', l);
                    });
                  e.exports = function (e, t) {
                    u(), o.push(t);
                  };
                },
              },
              'core/src/lib/events/blur.js': {
                name: 'blur',
                displayName: 'Blur',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/createBubbly')();
                  document.addEventListener('blur', n.evaluateEvent, !0),
                    (e.exports = function (e, t) {
                      n.addListener(e, t);
                    });
                },
              },
              'core/src/lib/helpers/getObjectProperty.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    for (var a = t.split('.'), n = e, r = 0, s = a.length; r < s; r++) {
                      if (null == n) return undefined;
                      n = n[a[r]];
                    }
                    return n;
                  };
                },
              },
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./weakMap'),
                    p = a('./matchesProperties'),
                    g = a('./matchesSelector');
                  e.exports = function () {
                    var d = [],
                      m = new n(),
                      e = {
                        addListener: function (e, t) {
                          d.push({ settings: e, callback: t });
                        },
                        evaluateEvent: function (t, e) {
                          if (d.length && !m.has(t)) {
                            for (var a = t.target, n = !1; a; ) {
                              for (var r = !1, s = !1, i = 0; i < d.length; i++) {
                                var o = d[i],
                                  c = o.settings.elementSelector,
                                  l = o.settings.elementProperties;
                                if (
                                  (!1 !== o.settings.bubbleFireIfChildFired || !n) &&
                                  (a === t.target || !1 !== o.settings.bubbleFireIfParent) &&
                                  (a === t.target || c || (l && Object.keys(l).length)) &&
                                  (!c || g(a, c)) &&
                                  (!l || p(a, l))
                                ) {
                                  var u = {};
                                  e
                                    ? Object.keys(t).forEach(function (e) {
                                        u[e] = t[e];
                                      })
                                    : (u.nativeEvent = t),
                                    (u.element = a),
                                    (u.target = t.target),
                                    !1 !== o.callback(u) &&
                                      ((s = !0), o.settings.bubbleStop && (r = !0));
                                }
                              }
                              if (r) break;
                              s && (n = !0), (a = a.parentNode);
                            }
                            m.set(t, !0);
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
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-window').WeakMap;
                  if (void 0 === n) {
                    var r = Object.defineProperty,
                      s = Date.now() % 1000000000;
                    (n = function () {
                      this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + s++ + '__';
                    }).prototype = {
                      set: function (e, t) {
                        var a = e[this.name];
                        return (
                          a && a[0] === e
                            ? (a[1] = t)
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
                  e.exports = n;
                },
              },
              'core/src/lib/events/helpers/matchesProperties.js': {
                script: function (e, t, a) {
                  'use strict';
                  var r = a('./../../helpers/textMatch'),
                    s = function (e, t) {
                      return '@text' === t || 'innerText' === t
                        ? e.textContent || e.innerText
                        : t in e
                        ? e[t]
                        : e.getAttribute
                        ? e.getAttribute(t)
                        : void 0;
                    };
                  e.exports = function (n, e) {
                    return (
                      !e ||
                      e.every(function (e) {
                        var t = s(n, e.name),
                          a = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return r(t, a);
                      })
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/matchesSelector.js': {
                script: function (e, t, a, r) {
                  'use strict';
                  e.exports = function (e, t) {
                    var a = e.matches || e.msMatchesSelector;
                    if (a)
                      try {
                        return a.call(e, t);
                      } catch (n) {
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
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./decorators/decorateGlobalJavaScriptCode'),
                    r = a('./decorators/decorateNonGlobalJavaScriptCode'),
                    s = {
                      javascript: function (e, t) {
                        return e.settings.global ? n(e, t) : r(e, t);
                      },
                      html: a('./decorators/decorateHtmlCode'),
                    };
                  e.exports = function (e, t) {
                    return s[e.settings.language](e, t);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-promise'),
                    r = a('./getSourceByUrl'),
                    s = n.resolve();
                  e.exports = function (t) {
                    var e = new n(function (a) {
                      var e = r(t);
                      n.all([e, s]).then(function (e) {
                        var t = e[0];
                        a(t);
                      });
                    });
                    return (s = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (a, n) {
                  !(function r (e, t) {
                    'object' == typeof n && 'object' == typeof a
                      ? (a.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof n
                      ? (n.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (a) {
                      function n (e) {
                        if (r[e]) return r[e].exports;
                        var t = (r[e] = { exports: {}, id: e, loaded: !1 });
                        return a[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports;
                      }
                      var r = {};
                      return (n.m = a), (n.c = r), (n.p = ''), n(0);
                    })([
                      function (e, t, a) {
                        'use strict';
                        function n (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var r = n(a(1));
                        e.exports = r['default'];
                      },
                      function (e, t, a) {
                        'use strict';
                        function n (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var a in e)
                              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                          return (t['default'] = e), t;
                        }
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function l () {}
                        function u () {
                          var e = c.shift();
                          if (e) {
                            var t = i.last(e);
                            t.afterDequeue(),
                              (e.stream = s.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function s (e, t, n) {
                          function r (e) {
                            (e = n.beforeWrite(e)), f.write(e), n.afterWrite(e);
                          }
                          ((f = new p['default'](e, n)).id = g++),
                            (f.name = n.name || f.id),
                            (d.streams[f.name] = f);
                          var a = e.ownerDocument,
                            s = {
                              close: a.close,
                              open: a.open,
                              write: a.write,
                              writeln: a.writeln,
                            };
                          m(a, {
                            close: l,
                            open: l,
                            write: function o () {
                              for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                                t[a] = arguments[a];
                              return r(t.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                                t[a] = arguments[a];
                              return r(t.join('') + '\n');
                            },
                          });
                          var i = f.win.onerror || l;
                          return (
                            (f.win.onerror = function (e, t, a) {
                              n.error({ msg: e + ' - ' + t + ': ' + a }),
                                i.apply(f.win, [e, t, a]);
                            }),
                            f.write(t, function () {
                              m(a, s), (f.win.onerror = i), n.done(), (f = null), u();
                            }),
                            f
                          );
                        }
                        function d (e, t, a) {
                          if (i.isFunction(a)) a = { done: a };
                          else if ('clear' === a) return (c = []), (f = null), void (g = 0);
                          a = i.defaults(a, o);
                          var n = [
                            (e = /^#/.test(e)
                              ? window.document.getElementById(e.substr(1))
                              : e.jquery
                              ? e[0]
                              : e),
                            t,
                            a,
                          ];
                          return (
                            (e.postscribe = {
                              cancel: function r () {
                                n.stream ? n.stream.abort() : (n[1] = l);
                              },
                            }),
                            a.beforeEnqueue(n),
                            c.push(n),
                            f || u(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var m =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                          };
                        t['default'] = d;
                        var p = r(a(2)),
                          i = n(a(4)),
                          o = {
                            afterAsync: l,
                            afterDequeue: l,
                            afterStreamStart: l,
                            afterWrite: l,
                            autoFix: !0,
                            beforeEnqueue: l,
                            beforeWriteToken: function h (e) {
                              return e;
                            },
                            beforeWrite: function v (e) {
                              return e;
                            },
                            done: l,
                            error: function b (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          g = 0,
                          c = [],
                          f = null;
                        m(d, { streams: {}, queue: c, WriteStream: p['default'] });
                      },
                      function (e, t, a) {
                        'use strict';
                        function n (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var a in e)
                              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
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
                          var a = j + t,
                            n = e.getAttribute(a);
                          return _.existy(n) ? String(n) : n;
                        }
                        function k (e, t, a) {
                          var n = 2 < arguments.length && a !== undefined ? arguments[2] : null,
                            r = j + t;
                          _.existy(n) && '' !== n ? e.setAttribute(r, n) : e.removeAttribute(r);
                        }
                        t.__esModule = !0;
                        var S =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a)
                                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                            },
                          C = r(a(3)),
                          _ = n(a(4)),
                          P = !1,
                          j = 'data-ps-',
                          E = 'ps-style',
                          x = 'ps-script',
                          s = (function () {
                            function n (e, t) {
                              var a = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              y(this, n),
                                (this.root = e),
                                (this.options = a),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new C['default']('', { autoFix: a.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                k(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (n.prototype.write = function a () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  _.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (n.prototype._callFunction = function r (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (n.prototype._writeImpl = function s (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, a = void 0, n = void 0, r = [];
                                  (t = this.parser.readToken()) &&
                                  !(a = _.isScript(t)) &&
                                  !(n = _.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && r.push(t);
                                0 < r.length && this._writeStaticTokens(r),
                                  a && this._handleScriptToken(t),
                                  n && this._handleStyleToken(t);
                              }),
                              (n.prototype._writeStaticTokens = function i (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    P && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    P && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (n.prototype._buildChunk = function u (e) {
                                for (
                                  var t = this.actuals.length,
                                    a = [],
                                    n = [],
                                    r = [],
                                    s = e.length,
                                    i = 0;
                                  i < s;
                                  i++
                                ) {
                                  var o = e[i],
                                    c = o.toString();
                                  if ((a.push(c), o.attrs)) {
                                    if (!/^noscript$/i.test(o.tagName)) {
                                      var l = t++;
                                      n.push(c.replace(/(\/?>)/, ' ' + j + 'id=' + l + ' $1')),
                                        o.attrs.id !== x &&
                                          o.attrs.id !== E &&
                                          r.push(
                                            'atomicTag' === o.type
                                              ? ''
                                              : '<' +
                                                  o.tagName +
                                                  ' ' +
                                                  j +
                                                  'proxyof=' +
                                                  l +
                                                  (o.unary ? ' />' : '>')
                                          );
                                    }
                                  } else n.push(c), r.push('endTag' === o.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: a.join(''),
                                  actual: n.join(''),
                                  proxy: r.join(''),
                                };
                              }),
                              (n.prototype._walkChunk = function o () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  _.existy((e = t.shift()));

                                ) {
                                  var a = 1 === e.nodeType;
                                  if (!a || !w(e, 'proxyof')) {
                                    a && k((this.actuals[w(e, 'id')] = e), 'id');
                                    var n = e.parentNode && w(e.parentNode, 'proxyof');
                                    n && this.actuals[n].appendChild(e);
                                  }
                                  t.unshift.apply(t, _.toArray(e.childNodes));
                                }
                              }),
                              (n.prototype._handleScriptToken = function c (e) {
                                var t = this,
                                  a = this.parser.clear();
                                a && this.writeQueue.unshift(a),
                                  (e.src = e.attrs.src || e.attrs.SRC),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    (e.src && this.scriptStack.length
                                      ? (this.deferredRemote = e)
                                      : this._onScriptStart(e),
                                    this._writeScriptToken(e, function () {
                                      t._onScriptDone(e);
                                    }));
                              }),
                              (n.prototype._handleStyleToken = function l (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (n.prototype._writeStyleToken = function d (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, E),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (n.prototype._buildStyle = function t (e) {
                                var a = this.doc.createElement(e.tagName);
                                return (
                                  a.setAttribute('type', e.type),
                                  _.eachKey(e.attrs, function (e, t) {
                                    a.setAttribute(e, t);
                                  }),
                                  a
                                );
                              }),
                              (n.prototype._insertCursor = function m (e, t) {
                                const $___old_dd79dc1a045d783f = {}.constructor.getOwnPropertyDescriptor(
                                  window,
                                  'sessionStorage'
                                );
                                try {
                                  if ($___old_dd79dc1a045d783f)
                                    ({}.constructor.defineProperty(
                                      window,
                                      'sessionStorage',
                                      $___stub_a011c28886b08277.sessionStorage
                                    ));
                                  return function () {
                                    this._writeImpl('<span id="' + t + '"/>');
                                    var a = this.doc.getElementById(t);
                                    a && a.parentNode.replaceChild(e, a);
                                  }.apply(this, arguments);
                                } finally {
                                  if ($___old_dd79dc1a045d783f)
                                    ({}.constructor.defineProperty(
                                      window,
                                      'sessionStorage',
                                      $___old_dd79dc1a045d783f
                                    ));
                                }
                              }),
                              (n.prototype._onScriptStart = function p (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (n.prototype._onScriptDone = function g (e) {
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
                              (n.prototype._writeScriptToken = function f (e, t) {
                                var a = this._buildScript(e),
                                  n = this._shouldRelease(a),
                                  r = this.options.afterAsync;
                                e.src &&
                                  ((a.src = e.src),
                                  this._scriptLoadHandler(
                                    a,
                                    n
                                      ? r
                                      : function () {
                                          t(), r();
                                        }
                                  ));
                                try {
                                  this._insertCursor(a, x), (a.src && !n) || t();
                                } catch (s) {
                                  this.options.error(s), t();
                                }
                              }),
                              (n.prototype._buildScript = function h (e) {
                                var a = this.doc.createElement(e.tagName);
                                return (
                                  _.eachKey(e.attrs, function (e, t) {
                                    a.setAttribute(e, t);
                                  }),
                                  e.content && (a.text = e.content),
                                  a
                                );
                              }),
                              (n.prototype._scriptLoadHandler = function v (t, a) {
                                function n () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function r () {
                                  n(), null != a && a(), (a = null);
                                }
                                function s (e) {
                                  n(), i(e), null != a && a(), (a = null);
                                }
                                function e (e, t) {
                                  var a = e['on' + t];
                                  null != a && (e['_on' + t] = a);
                                }
                                var i = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  S(t, {
                                    onload: function o () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          s({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
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
                                          return void s({
                                            msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                          });
                                        }
                                      s({ msg: 'remote script failed ' + t.src });
                                    },
                                    onreadystatechange: function l () {
                                      /^(loaded|complete)$/.test(t.readyState) && r();
                                    },
                                  });
                              }),
                              (n.prototype._shouldRelease = function b (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              n
                            );
                          })();
                        t['default'] = s;
                      },
                      function (a) {
                        !(function n (e, t) {
                          a.exports = t();
                        })(0, function () {
                          return (function (a) {
                            function n (e) {
                              if (r[e]) return r[e].exports;
                              var t = (r[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                a[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports
                              );
                            }
                            var r = {};
                            return (n.m = a), (n.c = r), (n.p = ''), n(0);
                          })([
                            function (e, t, a) {
                              'use strict';
                              function n (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var r = n(a(1));
                              e.exports = r['default'];
                            },
                            function (e, t, a) {
                              'use strict';
                              function n (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function r (e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                  for (var a in e)
                                    Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                                return (t['default'] = e), t;
                              }
                              function u (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              t.__esModule = !0;
                              var d = r(a(2)),
                                m = r(a(3)),
                                p = n(a(6)),
                                s = a(5),
                                g = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                i = (function () {
                                  function c (e, t) {
                                    var a = this,
                                      n =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      r =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    u(this, c), (this.stream = n);
                                    var s = !1,
                                      i = {};
                                    for (var o in d)
                                      d.hasOwnProperty(o) &&
                                        (r.autoFix && (i[o + 'Fix'] = !0),
                                        (s = s || i[o + 'Fix']));
                                    s
                                      ? ((this._readToken = (0, p['default'])(
                                          this,
                                          i,
                                          function () {
                                            return a._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, p['default'])(this, i, function () {
                                          return a._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (c.prototype.append = function t (e) {
                                      this.stream += e;
                                    }),
                                    (c.prototype.prepend = function a (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (c.prototype._readTokenImpl = function n () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function r () {
                                      for (var e in g)
                                        if (g.hasOwnProperty(e) && g[e].test(this.stream)) {
                                          var t = m[e](this.stream);
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
                                    (c.prototype.readToken = function s () {
                                      return this._readToken();
                                    }),
                                    (c.prototype.readTokens = function i (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (c.prototype.clear = function o () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (c.prototype.rest = function l () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var o in (((t['default'] = i).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (i.escapeAttributes = function (e) {
                                var t = {};
                                for (var a in e)
                                  e.hasOwnProperty(a) && (t[a] = (0, s.escapeQuotes)(e[a], null));
                                return t;
                              }),
                              (i.supports = d)))
                                d.hasOwnProperty(o) &&
                                  (i.browserHasFlaw = i.browserHasFlaw || (!d[o] && o));
                            },
                            function (e, t) {
                              'use strict';
                              var a = !(t.__esModule = !0),
                                n = !1,
                                r = window.document.createElement('div');
                              try {
                                var s = '<P><I></P></I>';
                                (r.innerHTML = s), (t.tagSoup = a = r.innerHTML !== s);
                              } catch (i) {
                                t.tagSoup = a = !1;
                              }
                              try {
                                (r.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = n = 2 === r.childNodes.length);
                              } catch (i) {
                                t.selfClose = n = !1;
                              }
                              (r = null), (t.tagSoup = a), (t.selfClose = n);
                            },
                            function (e, t, a) {
                              'use strict';
                              function n (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new u.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function r (e) {
                                var t = e.indexOf('<');
                                return new u.CharsToken(0 <= t ? t : e.length);
                              }
                              function s (e) {
                                var i, o, c;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(d.startTag);
                                  if (t) {
                                    var a =
                                      ((i = {}),
                                      (o = {}),
                                      (c = t[2]),
                                      t[2].replace(d.attr, function (e, t, a, n, r, s) {
                                        a || n || r || s
                                          ? arguments[5]
                                            ? ((i[arguments[5]] = ''), (o[arguments[5]] = !0))
                                            : (i[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (d.fillAttr.test(t) && t) ||
                                                '')
                                          : (i[t] = ''),
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new u.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          i,
                                          o,
                                          !!t[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === a ? 'undefined' : l(a)))
                                      return a.v;
                                  }
                                }
                              }
                              function i (e) {
                                var t = s(e);
                                if (t) {
                                  var a = e.slice(t.length);
                                  if (a.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var n = a.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (n)
                                      return new u.AtomicTagToken(
                                        t.tagName,
                                        n[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        n[1]
                                      );
                                  }
                                }
                              }
                              function o (e) {
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
                              (t.comment = n),
                                (t.chars = r),
                                (t.startTag = s),
                                (t.atomicTag = i),
                                (t.endTag = o);
                              var u = a(4),
                                d = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, t, a) {
                              'use strict';
                              function o (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (t.__esModule = !0),
                                (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                              var c = a(5),
                                n = (t.Token = function n (e, t) {
                                  o(this, n), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                r =
                                  ((t.CommentToken = (function () {
                                    function a (e, t) {
                                      o(this, a),
                                        (this.type = 'comment'),
                                        (this.length = t || (e ? e.length : 0)),
                                        (this.text = ''),
                                        (this.content = e);
                                    }
                                    return (
                                      (a.prototype.toString = function e () {
                                        return '<!--' + this.content;
                                      }),
                                      a
                                    );
                                  })()),
                                  (t.CharsToken = (function () {
                                    function t (e) {
                                      o(this, t),
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
                                    function s (e, t, a, n, r) {
                                      o(this, s),
                                        (this.type = e),
                                        (this.length = a),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = n),
                                        (this.booleanAttrs = r),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (s.formatTag = function i (e, t) {
                                        var a =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          n = '<' + e.tagName;
                                        for (var r in e.attrs)
                                          if (e.attrs.hasOwnProperty(r)) {
                                            n += ' ' + r;
                                            var s = e.attrs[r];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[r]) ||
                                              (n += '="' + (0, c.escapeQuotes)(s) + '"');
                                          }
                                        return (
                                          e.rest && (n += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (n += '/>') : (n += '>'),
                                          a !== undefined &&
                                            null !== a &&
                                            (n += a + '</' + e.tagName + '>'),
                                          n
                                        );
                                      }),
                                      s
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function i (e, t, a, n, r, s) {
                                  o(this, i),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = a),
                                    (this.booleanAttrs = n),
                                    (this.html5Unary = !1),
                                    (this.unary = r),
                                    (this.rest = s);
                                }
                                return (
                                  (i.prototype.toString = function e () {
                                    return r.formatTag(this);
                                  }),
                                  i
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function s (e, t, a, n, r) {
                                    o(this, s),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = a),
                                      (this.booleanAttrs = n),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = r);
                                  }
                                  return (
                                    (s.prototype.toString = function e () {
                                      return r.formatTag(this, this.content);
                                    }),
                                    s
                                  );
                                })()),
                                (t.EndTagToken = (function () {
                                  function a (e, t) {
                                    o(this, a),
                                      (this.type = 'endTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e);
                                  }
                                  return (
                                    (a.prototype.toString = function e () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    a
                                  );
                                })());
                            },
                            function (e, t) {
                              'use strict';
                              function a (e, t) {
                                var a =
                                  1 < arguments.length && t !== undefined ? arguments[1] : '';
                                return e
                                  ? e.replace(/([^"]*)"/g, function (e, t) {
                                      return /\\/.test(t) ? t + '"' : t + '\\"';
                                    })
                                  : a;
                              }
                              (t.__esModule = !0), (t.escapeQuotes = a);
                            },
                            function (e, t) {
                              'use strict';
                              function l (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = n.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function u (e, t) {
                                var a = e.stream,
                                  n = l(t());
                                return (e.stream = a), n;
                              }
                              function d (e, t) {
                                var a = t.pop();
                                e.prepend('</' + a.tagName + '>');
                              }
                              function m () {
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
                                    for (var t, a = 0; (t = this[a]); a++)
                                      if (t.tagName === e) return !0;
                                    return !1;
                                  }),
                                  e
                                );
                              }
                              function a (a, n, t) {
                                function r () {
                                  var e = u(a, t);
                                  e && i[e.type] && i[e.type](e);
                                }
                                var s = m(),
                                  i = {
                                    startTag: function o (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && s.lastTagNameEq('TABLE')
                                        ? (a.prepend('<TBODY>'), r())
                                        : n.selfCloseFix && p.test(t) && s.containsTagName(t)
                                        ? s.lastTagNameEq(t)
                                          ? d(a, s)
                                          : (a.prepend('</' + e.tagName + '>'), r())
                                        : e.unary || s.push(e);
                                    },
                                    endTag: function c (e) {
                                      s.last()
                                        ? n.tagSoupFix && !s.lastTagNameEq(e.tagName)
                                          ? d(a, s)
                                          : s.pop()
                                        : n.tagSoupFix && (t(), r());
                                    },
                                  };
                                return function e () {
                                  return r(), l(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = a);
                              var n = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                p = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function n (e) {
                          return null != e;
                        }
                        function a (e) {
                          return 'function' == typeof e;
                        }
                        function r (e, t, a) {
                          var n = void 0,
                            r = (e && e.length) || 0;
                          for (n = 0; n < r; n++) t.call(a, e[n], n);
                        }
                        function s (e, t, a) {
                          for (var n in e) e.hasOwnProperty(n) && t.call(a, n, e[n]);
                        }
                        function i (a, e) {
                          return (
                            (a = a || {}),
                            s(e, function (e, t) {
                              n(a[e]) || (a[e] = t);
                            }),
                            a
                          );
                        }
                        function o (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (n) {
                            var t =
                              ((a = []),
                              r(e, function (e) {
                                a.push(e);
                              }),
                              { v: a });
                            if ('object' === (void 0 === t ? 'undefined' : m(t))) return t.v;
                          }
                          var a;
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
                        var m =
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
                        (t.existy = n),
                          (t.isFunction = a),
                          (t.each = r),
                          (t.eachKey = s),
                          (t.defaults = i),
                          (t.toArray = o),
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
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document').createElement('div');
                  e.exports = function (e) {
                    return (n.innerHTML = e), n.textContent || n.innerText || e;
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-promise');
                  e.exports = function (e, t) {
                    return { code: '<script>\n' + t + '\n</script>', promise: n.resolve() };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js': {
                script: function (e, t, a) {
                  'use strict';
                  var s = a('@adobe/reactor-promise'),
                    i = 0;
                  e.exports = function (n, e) {
                    var r = '_runScript' + ++i,
                      t = new s(function (e, a) {
                        _satellite[r] = function (t) {
                          delete _satellite[r],
                            new s(function (e) {
                              e(t.call(n.event.element, n.event, n.event.target, s));
                            }).then(e, a);
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
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('@adobe/reactor-promise'),
                    s = 0,
                    i = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite._onCustomCodeSuccess = function (e) {
                      var t = i[e];
                      t && (delete i[e], t.resolve());
                    }),
                    (window._satellite._onCustomCodeFailure = function (e) {
                      var t = i[e];
                      t && (delete i[e], t.reject());
                    });
                  var o = function (e) {
                      return -1 !== e.indexOf('${reactorCallbackId}');
                    },
                    c = function (e, t) {
                      return e.replace(/\${reactorCallbackId}/g, t);
                    },
                    l = function (e) {
                      return e.settings.isExternal;
                    };
                  e.exports = function (e, t) {
                    var a;
                    return (
                      l(e) && (t = n.replaceTokens(t, e.event)),
                      o(t)
                        ? ((a = new r(function (e, t) {
                            i[String(s)] = { resolve: e, reject: t };
                          })),
                          (t = c(t, s)),
                          (s += 1))
                        : (a = r.resolve()),
                      { code: t, promise: a }
                    );
                  };
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-load-script'),
                    r = a('@adobe/reactor-promise'),
                    s = {},
                    i = {},
                    o = function (e) {
                      return i[e] || (i[e] = n(e)), i[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    s[e] = t;
                  }),
                    (e.exports = function (t) {
                      return s[t]
                        ? r.resolve(s[t])
                        : new r(function (e) {
                            o(t).then(
                              function () {
                                e(s[t]);
                              },
                              function () {
                                e();
                              }
                            );
                          });
                    });
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, a) {
                  const $___old_4ee1d48207a222c1 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_4ee1d48207a222c1)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_9d7b4eb662ee43f5.appVersion
                      ));
                    return function () {
                      'use strict';
                      var n = a('@adobe/reactor-window'),
                        r = a('@adobe/reactor-document'),
                        s = -1 !== n.navigator.appVersion.indexOf('MSIE 10'),
                        i = 'WINDOW_LOADED',
                        o = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        l = [c, o, i],
                        u = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        d = {};
                      l.forEach(function (e) {
                        d[e] = [];
                      });
                      var m = function (e, t) {
                          l.slice(0, g(e) + 1).forEach(function (e) {
                            f(t, e);
                          });
                        },
                        p = function () {
                          return 'complete' === r.readyState
                            ? i
                            : 'interactive' === r.readyState
                            ? s
                              ? null
                              : o
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
                          var a = t.trigger,
                            n = t.syntheticEventFn;
                          a(n ? n(e) : null);
                        };
                      (n._satellite = n._satellite || {}),
                        (n._satellite.pageBottom = m.bind(null, c)),
                        r.addEventListener('DOMContentLoaded', m.bind(null, o), !0),
                        n.addEventListener('load', m.bind(null, i), !0),
                        n.setTimeout(function () {
                          var e = p();
                          e && m(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            d[c].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            d[o].push({ trigger: e, syntheticEventFn: u.bind(null, r) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[i].push({ trigger: e, syntheticEventFn: u.bind(null, n) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_4ee1d48207a222c1)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_4ee1d48207a222c1
                      ));
                  }
                },
              },
              'core/src/lib/conditions/helpers/clientInfo.js': {
                script: function (e) {
                  const $___old_b7a73013cfa1c6f3 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_b7a73013cfa1c6f3)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_9d7b4eb662ee43f5.userAgent
                      ));
                    return function () {
                      'use strict';
                      var t = function (r) {
                          return function (e) {
                            for (var t = Object.keys(r), a = 0; a < t.length; a++) {
                              var n = t[a];
                              if (r[n].test(e)) return n;
                            }
                            return 'Unknown';
                          };
                        },
                        a = t({
                          Edge: /Edge/,
                          'Mobile Safari': /Mobile(\/[0-9A-z]+)? Safari/,
                          Chrome: /Chrome/,
                          Firefox: /Firefox/,
                          IE: /MSIE|Trident/,
                          Safari: /Safari/,
                        })(navigator.userAgent),
                        n = t({
                          iOS: /iPhone|iPad|iPod/,
                          Android: /Android [0-9\.]+;/,
                          Linux: / Linux /,
                          Unix: /FreeBSD|OpenBSD|CrOS/,
                          Windows: /[\( ]Windows /,
                          MacOS: /Macintosh;/,
                        })(navigator.userAgent),
                        r = t({
                          iPhone: /iPhone/,
                          iPad: /iPad/,
                          iPod: /iPod/,
                          Nokia: /SymbOS|Maemo/,
                          'Windows Phone': /IEMobile/,
                          Blackberry: /BlackBerry/,
                          Android: /Android [0-9\.]+;/,
                          Desktop: /.*/,
                        })(navigator.userAgent);
                      e.exports = { browser: a, os: n, deviceType: r };
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_b7a73013cfa1c6f3)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_b7a73013cfa1c6f3
                      ));
                  }
                },
              },
              'core/src/lib/events/helpers/once.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    var a;
                    return function () {
                      return e && ((a = e.apply(t || this, arguments)), (e = null)), a;
                    };
                  };
                },
              },
              'core/src/lib/events/helpers/visibilityApi.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function () {
                    var e = {
                      hidden: 'visibilitychange',
                      mozHidden: 'mozvisibilitychange',
                      msHidden: 'msvisibilitychange',
                      webkitHidden: 'webkitvisibilitychange',
                    };
                    for (var t in e)
                      if (e.hasOwnProperty(t) && 'undefined' != typeof document[t])
                        return { hiddenProperty: t, visibilityChangeEventType: e[t] };
                    return {};
                  };
                },
              },
              'core/src/lib/events/helpers/timer.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-object-assign'),
                    r = a('../../../../node_modules/mitt/dist/mitt'),
                    s = 1000,
                    i = function (e, t, a) {
                      return a.indexOf(e) === t;
                    },
                    o = function (e) {
                      n(this, r()),
                        (this._total = 0),
                        (this._checkInterval = e || s),
                        (this._intervalId = null),
                        (this._markers = []);
                    };
                  (o.prototype = {
                    start: function () {
                      this.resume();
                    },
                    resume: function () {
                      this._setIntervalUpdater(), this._startNewInternalTimer();
                    },
                    pause: function () {
                      this._removeIntervalUpdater(),
                        this._calculateTimePassed(),
                        this._stopInternalTimer();
                    },
                    getTime: function () {
                      return this._total;
                    },
                    addMarker: function (e) {
                      this._markers.push(e),
                        (this._markers = this._markers.filter(i)),
                        this._markers.sort();
                    },
                    _setIntervalUpdater: function () {
                      this._intervalId = window.setInterval(
                        this._calculateTimePassed.bind(this),
                        this._checkInterval
                      );
                    },
                    _removeIntervalUpdater: function () {
                      window.clearInterval(this._intervalId);
                    },
                    _startNewInternalTimer: function () {
                      this._startTime = new Date().getTime();
                    },
                    _stopInternalTimer: function () {
                      this._startTime = null;
                    },
                    _calculateTimePassed: function () {
                      (this._total += new Date().getTime() - this._startTime),
                        this._checkMarkersCompleted(),
                        this._startNewInternalTimer();
                    },
                    _checkMarkersCompleted: function () {
                      for (var e = this.getTime(), t = 0; t < this._markers.length; t++) {
                        var a = this._markers[t];
                        a <= e &&
                          (this.emit('markerPassed', a), this._markers.splice(t, 1), (t -= 1));
                      }
                    },
                  }),
                    (e.exports = o);
                },
              },
              'core/node_modules/mitt/dist/mitt.js': {
                script: function (e) {
                  function t (n) {
                    return (
                      (n = n || Object.create(null)),
                      {
                        on: function (e, t) {
                          (n[e] || (n[e] = [])).push(t);
                        },
                        off: function (e, t) {
                          n[e] && n[e].splice(n[e].indexOf(t) >>> 0, 1);
                        },
                        emit: function (t, a) {
                          (n[t] || []).slice().map(function (e) {
                            e(a);
                          }),
                            (n['*'] || []).slice().map(function (e) {
                              e(t, a);
                            });
                        },
                      }
                    );
                  }
                  e.exports = t;
                },
              },
              'core/src/lib/events/helpers/debounce.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (a, n, r) {
                    var s = null;
                    return function () {
                      var e = r || this,
                        t = arguments;
                      clearTimeout(s),
                        (s = setTimeout(function () {
                          a.apply(e, t);
                        }, n));
                    };
                  };
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2e2f86ba46954a2b8a2b3bb72276b9f8/',
          },
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
              'adobe-analytics/src/lib/actions/setVariables.js': {
                name: 'set-variables',
                displayName: 'Set Variables',
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('../sharedModules/getTracker'),
                    s = a('../helpers/applyTrackerVariables');
                  e.exports = function (t, a) {
                    return r().then(
                      function (e) {
                        n.logger.info('Set variables on the tracker.'),
                          s(e, t.trackerProperties),
                          t.customSetup &&
                            t.customSetup.source &&
                            t.customSetup.source.call(a.element, a, e);
                      },
                      function (e) {
                        n.logger.error('Cannot set variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (e, t, a, r) {
                  'use strict';
                  var n = a('../sharedModules/getTracker'),
                    s = function (e) {
                      return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                    },
                    i = function (e) {
                      return s(e) ? e.innerHTML : 'link clicked';
                    },
                    o = function (e, t, a) {
                      if ('page' === t.type) r.logger.info('Firing page view beacon.'), e.t();
                      else {
                        var n = { linkType: t.linkType || 'o', linkName: t.linkName || i(a) };
                        r.logger.info(
                          'Firing link track beacon using the values: ' + JSON.stringify(n) + '.'
                        ),
                          e.tl(s(a) ? a : 'true', n.linkType, n.linkName);
                      }
                    };
                  e.exports = function (t, a) {
                    return n().then(
                      function (e) {
                        o(e, t, a.element);
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
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('../sharedModules/getTracker');
                  e.exports = function () {
                    return r().then(
                      function (e) {
                        e.clearVars && (n.logger.info('Clear variables.'), e.clearVars());
                      },
                      function (e) {
                        n.logger.error('Cannot clear variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, t, a, n) {
                  'use strict';
                  var r,
                    s = a('@adobe/reactor-cookie'),
                    i = a('@adobe/reactor-promise'),
                    o = a('@adobe/reactor-window'),
                    c = a('../helpers/settingsHelper'),
                    l = a('../helpers/augmenters'),
                    u = a('../helpers/applyTrackerVariables'),
                    d = a('../helpers/loadLibrary'),
                    m = a('../helpers/generateVersion')(n.buildInfo.turbineBuildDate),
                    p = 'beforeSettings',
                    g = n.getSharedModule('adobe-mcid', 'mcid-instance'),
                    f = function (e) {
                      return !e || 'true' === s.get(e);
                    },
                    h = function (n) {
                      return i
                        .all(
                          l.map(function (e) {
                            var t;
                            try {
                              t = e(n);
                            } catch (a) {
                              setTimeout(function () {
                                throw a;
                              });
                            }
                            return i.resolve(t);
                          })
                        )
                        .then(function () {
                          return n;
                        });
                    },
                    v = function (e) {
                      return (
                        g &&
                          (n.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = g)),
                        e
                      );
                    },
                    b = function (e) {
                      return (
                        n.logger.info('Setting version on tracker: "' + m + '".'),
                        'undefined' != typeof e.tagContainerMarker
                          ? (e.tagContainerMarker = m)
                          : 'string' == typeof e.version &&
                            e.version.substring(e.version.length - 5) !== '-' + m &&
                            (e.version += '-' + m),
                        e
                      );
                    },
                    y = function (e, t, a) {
                      return (
                        t.loadPhase === p &&
                          t.source &&
                          (n.logger.info('Calling custom script before settings.'),
                          t.source.call(o, a)),
                        u(a, e || {}),
                        t.loadPhase !== p &&
                          t.source &&
                          (n.logger.info('Calling custom script after settings.'),
                          t.source.call(o, a)),
                        a
                      );
                    },
                    w = function (e, t) {
                      return (
                        c.isAudienceManagementEnabled(e) &&
                          (t.loadModule('AudienceManagement'),
                          n.logger.info('Initializing AudienceManagement module'),
                          t.AudienceManagement.setup(e.moduleProperties.audienceManager.config)),
                        t
                      );
                    },
                    k =
                      ((r = n.getExtensionSettings()),
                      f(r.trackingCookieName)
                        ? d(r)
                            .then(h)
                            .then(v)
                            .then(b)
                            .then(y.bind(null, r.trackerProperties, r.customSetup || {}))
                            .then(w.bind(null, r))
                        : i.reject('EU compliance was not acknowledged by the user.'));
                  e.exports = function () {
                    return k;
                  };
                },
                name: 'get-tracker',
                shared: !0,
              },
              'adobe-analytics/src/lib/sharedModules/augmentTracker.js': {
                name: 'augment-tracker',
                shared: !0,
                script: function (e, t, a) {
                  'use strict';
                  var n = a('../helpers/augmenters');
                  e.exports = function (e) {
                    n.push(e);
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (e, t, a, i) {
                  'use strict';
                  var r = a('@adobe/reactor-query-string'),
                    s = a('@adobe/reactor-window'),
                    o = /eVar([0-9]+)/,
                    c = /prop([0-9]+)/,
                    l = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    u = function (e, t, a) {
                      return a.indexOf(e) === t;
                    },
                    d = function (e, t, a) {
                      var n = Object.keys(t).filter(l.test.bind(l));
                      return (
                        a && n.push('events'),
                        (n = n.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && e && u(e, t, n);
                          })
                          .join(',')
                      );
                    },
                    m = function (e, t) {
                      var a = t.map(function (e) {
                        return e.name;
                      });
                      return (a = a.concat((e.linkTrackEvents || '').split(',')))
                        .filter(function (e, t) {
                          return 'None' !== e && u(e, t, a);
                        })
                        .join(',');
                    },
                    n = function (e, t, a) {
                      e[t] = a[t].join(',');
                    },
                    p = function (r, e, t) {
                      var s = t.dynamicVariablePrefix || 'D=';
                      t[e].forEach(function (e) {
                        var t;
                        if ('value' === e.type) t = e.value;
                        else {
                          var a = o.exec(e.value);
                          if (a) t = s + 'v' + a[1];
                          else {
                            var n = c.exec(e.value);
                            n && (t = s + 'c' + n[1]);
                          }
                        }
                        r[e.name] = t;
                      });
                    },
                    g = {
                      linkDownloadFileTypes: n,
                      linkExternalFilters: n,
                      linkInternalFilters: n,
                      hierarchies: function (t, e, a) {
                        a[e].forEach(function (e) {
                          t[e.name] = e.sections.join(e.delimiter);
                        });
                      },
                      props: p,
                      eVars: p,
                      campaign: function (e, t, a) {
                        if ('queryParam' === a[t].type) {
                          var n = r.parse(s.location.search);
                          e[t] = n[a[t].value];
                        } else e[t] = a[t].value;
                      },
                      events: function (e, t, a) {
                        var n = a[t].map(function (e) {
                          var t = e.name;
                          return (
                            e.id && (t = [t, e.id].join(':')),
                            e.value && (t = [t, e.value].join('=')),
                            t
                          );
                        });
                        e[t] = n.join(',');
                      },
                    };
                  e.exports = function (t, n) {
                    var r = {};
                    (n = n || {}),
                      Object.keys(n).forEach(function (e) {
                        var t = g[e],
                          a = n[e];
                        t ? t(r, e, n) : (r[e] = a);
                      }),
                      r.events &&
                        t.events &&
                        0 < t.events.length &&
                        (r.events = t.events + ',' + r.events);
                    var e = n && n.events && 0 < n.events.length,
                      a = d(t, r, e);
                    a && (r.linkTrackVars = a);
                    var s = m(t, n.events || []);
                    s && (r.linkTrackEvents = s),
                      i.logger.info(
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
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('@adobe/reactor-window'),
                    s = {
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
                          e[n.buildInfo.environment] && (t = e[n.buildInfo.environment]),
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
                  e.exports = s;
                },
              },
              'adobe-analytics/src/lib/helpers/augmenters.js': {
                script: function (e) {
                  'use strict';
                  e.exports = [];
                },
              },
              'adobe-analytics/src/lib/helpers/loadLibrary.js': {
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('@adobe/reactor-load-script'),
                    s = a('@adobe/reactor-window'),
                    i = a('@adobe/reactor-promise'),
                    o = a('./settingsHelper'),
                    c = a('./pollHelper'),
                    l = function (e, t) {
                      if (!s.s_gi)
                        throw new Error(
                          'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                            s.AppMeasurement
                        );
                      n.logger.info(
                        'Creating AppMeasurement tracker with these report suites: "' + t + '"'
                      );
                      var a = s.s_gi(t);
                      return (
                        e.libraryCode.scopeTrackerGlobally &&
                          (n.logger.info('Setting the tracker as window.s'), (s.s = a)),
                        a
                      );
                    },
                    u = function (e) {
                      var t = [];
                      switch (e.libraryCode.type) {
                        case o.LIB_TYPES.MANAGED:
                          t.push(n.getHostedLibFileUrl(o.MANAGED_LIB_PATHS.APP_MEASUREMENT)),
                            o.isActivityMapEnabled(e) &&
                              t.push(n.getHostedLibFileUrl(o.MANAGED_LIB_PATHS.ACTIVITY_MAP));
                          break;
                        case o.LIB_TYPES.CUSTOM:
                          t.push(e.libraryCode.source);
                          break;
                        case o.LIB_TYPES.REMOTE:
                          t.push(
                            'https:' === s.location.protocol
                              ? e.libraryCode.httpsUrl
                              : e.libraryCode.httpUrl
                          );
                      }
                      if (o.isAudienceManagementEnabled(e)) {
                        var a = { namespace: s._satellite.company.orgId };
                        (e.moduleProperties.audienceManager.config.visitorService = a),
                          t.push(n.getHostedLibFileUrl(o.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT));
                      }
                      return t;
                    },
                    d = function (e) {
                      return i.all(
                        u(e).map(function (e) {
                          return n.logger.info('Loading script: ' + e), r(e);
                        })
                      );
                    },
                    m = function (e, t) {
                      if (e.libraryCode.accounts)
                        if (t.sa) {
                          var a = o.getReportSuites(e.libraryCode.accounts);
                          n.logger.info(
                            'Setting the following report suites on the tracker: "' + a + '"'
                          ),
                            t.sa(a);
                        } else
                          n.logger.warn(
                            'Cannot set report suites on tracker. `sa` method not available.'
                          );
                      return t;
                    },
                    p = function (e) {
                      if (s[e])
                        return n.logger.info('Found tracker located at: "' + e + '".'), s[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    };
                  e.exports = function (e) {
                    var t = d(e);
                    switch (e.libraryCode.type) {
                      case o.LIB_TYPES.MANAGED:
                        var a = o.getReportSuites(e.libraryCode.accounts);
                        return t.then(l.bind(null, e, a));
                      case o.LIB_TYPES.PREINSTALLED:
                        return t
                          .then(c.poll.bind(null, s, e.libraryCode.trackerVariableName))
                          .then(m.bind(null, e));
                      case o.LIB_TYPES.CUSTOM:
                      case o.LIB_TYPES.REMOTE:
                        return t
                          .then(p.bind(null, e.libraryCode.trackerVariableName))
                          .then(m.bind(null, e));
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
                    a = function (e) {
                      return e.getUTCDate().toString(36);
                    },
                    n = function (e) {
                      return e.substr(e.length - 1);
                    },
                    r = function (e) {
                      return Math.floor(e.getUTCHours() / t);
                    },
                    s = function (e) {
                      var t = (e.getUTCMonth() + 1 + 12 * r(e)).toString(36);
                      return n(t);
                    },
                    i = function (e) {
                      return (e.getUTCFullYear() - 2010).toString(36);
                    };
                  e.exports = function (e) {
                    var t = new Date(e);
                    if (isNaN(t)) throw new Error('Invalid date provided');
                    return ('L' + i(t) + s(t) + a(t)).toUpperCase();
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/pollHelper.js': {
                script: function (e, t, a, n) {
                  'use strict';
                  var i = a('@adobe/reactor-promise'),
                    o = 40,
                    c = 250,
                    l = function (e, t, a) {
                      n.logger.info('Found property located at: "' + t + '"].'), e(a);
                    },
                    r = function (r, s) {
                      return new i(function (e, t) {
                        if (r[s]) return l(e, s, r[s]);
                        var a = 1,
                          n = setInterval(function () {
                            r[s] && (l(e, s, r[s]), clearInterval(n)),
                              o <= a &&
                                (clearInterval(n),
                                t(
                                  new Error(
                                    'Bailing out. Cannot find the variable name: "' + s + '"].'
                                  )
                                )),
                              a++;
                          }, c);
                      });
                    };
                  e.exports = {
                    poll: function (e, t) {
                      return (
                        n.logger.info(
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
              orgId: 'A90F2A0D55423F537F000101@AdobeOrg',
              customSetup: {
                source: function (e) {
                  function a (e, t, a) {
                    var n = [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                      ],
                      r = e.getHours(),
                      s = e.getMinutes(),
                      i = e.getDay(),
                      o = 'AM',
                      c = '00';
                    30 < s && (c = '30'),
                      12 <= r && ((o = 'PM'), (r -= 12)),
                      0 == r && (r = 12),
                      _satellite.setVar(t, r + ':' + c + o),
                      _satellite.setVar(a, n[i]);
                  }
                  function n (e) {
                    var a = '',
                      n = _satellite.gcCustom.internal_filters;
                    for (var r in n) a += n[r] + ',';
                    (e.linkInternalFilters = a),
                      (e.trackExternalLinks = !0),
                      (e.trackDownloadLinks = !1),
                      (_satellite.gcCustom.downloadFileType = /\.(apk|aac|aiff|asc|avi|bag|bil|bip|bmp|brf|bsq|bwf|cct|cdf|cdr|cod|css|csv|dbf|dicom|dng|doc|docb|docm|docx|dotm|dotx|dxf|e00|ecw|edi|emf|eps|epub|epub2|epub3|exe|fgdb|gdb|geojson|geopdf|georss|geotif|gif|gml|gpkg|grd|grib1|grib2|hdf|ipa|ivt|jar|jfif|jp2|jpeg|jpg|js|json|jsonl|jsonld|kml|kmz|las|lyr|m4v|mif|mov|mp3|mp4|mpeg|mpg|mxd|mxf|netcdf|nt|odp|ods|odt|ogg|pbix|pdf|png|ppt|pptm|pptx|rar|rdf|rdfa|rss|rtf|sav|sdmx|seg|segy|shp|sql|sqlite|sqlite3|svg|tab|tfw|tif|tiff|trig|trix|tsv|ttl|txt|vpf|vsd|vxd|wav|wcs|wedm|wfs|wma|wms|wmts|wmv|wps|xls|xlsm|xlsx|xltm|xltx|xml|zip)($|\&|\?)/i),
                      (_satellite.gcCustom.showImgRequests = function () {
                        localStorage.setItem('dtm-logImgRequests', 1);
                      }),
                      (_satellite.gcCustom.hideImgRequests = function () {
                        localStorage.removeItem('dtm-logImgRequests');
                      }),
                      /[?&]logdtm=(true|1)/i.test(document.location.search) &&
                        (_satellite.gcCustom.showImgRequests(),
                        alert('Open the developer console to see tracking beacons')),
                      /[?&]logdtm=(false|0)/i.test(document.location.search) &&
                        _satellite.gcCustom.hideImgRequests(),
                      1 == localStorage.getItem('dtm-logImgRequests') &&
                        e.registerPostTrackCallback(function (e) {
                          var a = e,
                            n = '\n';
                          for (var r in ((a = JSON.parse(
                            '{"' +
                              a
                                .replace(/&[^=]+&/g, '&')
                                .replace(/&/g, '","')
                                .replace(/=/g, '":"') +
                              '"}',
                            function (e, t) {
                              return '' === e ? t : decodeURIComponent(t);
                            }
                          )),
                          (t = -1 !== a.events.indexOf('event11') ? 'PAGE LOAD' : 'CLICK EVENT'),
                          (n += 'ADOBE ANALYTICS ' + t + '\n'),
                          a))
                            /^(pageName|products|l\d|g|r|events|v\d+|c\d+)$/.test(r) &&
                              (n +=
                                r +
                                ('pageName' === r || 'products' === r ? '' : '\t') +
                                '\t' +
                                decodeURIComponent(a[r]) +
                                '\n');
                          (n += '\n'),
                            sessionStorage.setItem(t + ' ' + new Date(), n),
                            console.log(n);
                        }),
                      'true' == _satellite.getVar('jsAbort') && (e.abort = !0);
                    var s = document.createElement('a');
                    (s.href = document.referrer),
                      s.hostname && s.pathname && s.pathname.charAt(0),
                      s.hostname,
                      s.pathname,
                      e.cookieRead('dtm_gpv_pu'),
                      -1 !== document.referrer.toLowerCase().indexOf('email=') &&
                        (e.referrer = document.referrer.replace(/[?;#].*/, ''));
                    var i = document.referrer.toLowerCase(),
                      o = !1;
                    for (var c in _satellite.gcCustom.domain_blacklist)
                      -1 < i.indexOf(_satellite.gcCustom.domain_blacklist[c]) && (o = !0);
                    o
                      ? _satellite.setVar('jsDocumentReferrer', e.eVar19 || '')
                      : _satellite.setVar('jsDocumentReferrer', document.referrer || e.eVar19),
                      (e.eVar19 = _satellite.getVar('DocumentReferrer')),
                      e.getPreviousValue(e.pageName, 'gpv_pt'),
                      e.getPreviousValue(e.eVar16, 'gpv_pthl'),
                      e.getPreviousValue(e.eVar15, 'gpv_pc'),
                      e.getPreviousValue(e.eVar39, 'gpv_pqs'),
                      e.getPreviousValue(e.eVar12, 'gpv_url');
                    var l = _satellite.getVar('PreviousPageTitle'),
                      u = e.getPercentPageViewed(e.pageName);
                    u && 'object' == typeof u && u[0] === l
                      ? (e.eVar10 = u[2] + '|' + u[1])
                      : u[0] !== l && (e.eVar10 = 'blank|blank'),
                      ('undefined' != typeof e.linkTrackVars && 0 !== e.linkTrackVars.length) ||
                        (e.linkTrackVars =
                          'eVar1,eVar2,eVar5,eVar11,eVar12,eVar13,eVar15,eVar16,eVar17,eVar18,eVar19,eVar22,eVar23,eVar24,eVar25,eVar26,eVar39,eVar40,eVar65,eVar66,eVar75');
                  }
                  if (
                    (-1 < document.location.hostname.indexOf('.gc.ca') &&
                      (e.cookieDomainPeriods = 3),
                    6 === (r = new Date('1/1/2000')).getDay() && 0 === r.getMonth())
                  ) {
                    var r = new Date();
                    a(r, 'jsLocalHour', 'jsLocalDay'),
                      (e.eVar1 = _satellite.getVar('LocalDay')),
                      (e.eVar2 = _satellite.getVar('LocalHour'));
                    var s,
                      i = r.getTime(),
                      o = r.getUTCFullYear(),
                      c = {
                        2016: [13, 6],
                        2017: [12, 5],
                        2018: [11, 4],
                        2019: [10, 3],
                        2020: [8, 1],
                        2021: [14, 7],
                        2022: [13, 6],
                        2023: [12, 5],
                        2024: [10, 3],
                        2025: [9, 2],
                        2026: [8, 1],
                        2027: [14, 7],
                        2028: [12, 5],
                        2029: [11, 4],
                      };
                    if ('undefined' != typeof c[o]) {
                      var l = new Date('March ' + c[o][0] + ', ' + o + ' 07:00:00 GMT').getTime(),
                        u = new Date('November ' + c[o][1] + ', ' + o + ' 06:00:00 GMT').getTime();
                      (s = l <= i && i < u ? -4 : -5),
                        a(
                          (r = new Date(i + 60000 * r.getTimezoneOffset() + 3600000 * s)),
                          'jsServerHour',
                          'jsServerDay'
                        ),
                        (e.eVar26 =
                          _satellite.getVar('ServerDay') + ':' + _satellite.getVar('ServerHour'));
                    }
                  }
                  (e.getPercentPageViewed = new Function(
                    'n',
                    "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load','unload','scroll','resize','zoom','keyup','mouseup','touchend','orientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s.pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){var k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){var W=window,D=document,B=D.body,E=D.documentElement,S=window.screen||0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWidth',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.substring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.innerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180:Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|iPad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P':'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg();return!n||n=='-'?a[1]:a"
                  )),
                    (e.getPreviousValue = new Function(
                      'v',
                      'c',
                      'el',
                      "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.cookieRead(c)) r=s.cookieRead(c);v?s.cookieWrite(c,v,t):s.cookieWrite(c,'',t);return r}}}}}else{if(s.cookieRead(c)) r=s.cookieRead(c);v?s.cookieWrite(c,v,t):s.cookieWrite(c,'',t);return r}"
                    )),
                    (e.refreshCookieExpiration = new Function(
                      'v',
                      'var s=this,t=new Date;t.setTime(t.getTime()+1800000);s.cookieWrite(v,s.cookieRead(v),t);'
                    )),
                    (e.split = new Function(
                      'l',
                      'd',
                      'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                    )),
                    (e.getPageLoadTime = function () {
                      var e = this;
                      if ('undefined' != typeof performance && e.p_fo('performance')) {
                        var t = performance;
                        t.clearResourceTimings(),
                          '' !== e.c_r('s_plt') &&
                            (0 < t.timing.loadEventEnd && clearInterval(e.pi),
                            (e._pltLoadTime = e.c_r('s_plt')),
                            (e._pltPreviousPage = e.c_r('gpv_pt')),
                            e.c_w('s_plt', '')),
                          0 === t.timing.loadEventEnd
                            ? (e.pi = setInterval(function () {
                                e.performanceWriteFull();
                              }, 250))
                            : 0 < t.timing.loadEventEnd &&
                              (e.ptc
                                ? e.ptc === t.timing.loadEventEnd &&
                                  1 === t.getEntries().length &&
                                  (e.pwp = setInterval(function () {
                                    e.performanceWritePart();
                                  }, 500))
                                : e.performanceWriteFull());
                      }
                    }),
                    (e.performanceWriteFull = function () {
                      var e = this,
                        t = performance.timing;
                      0 < t.loadEventEnd &&
                        (clearInterval(e.pi),
                        '' === e.c_r('s_plt') &&
                          e.c_w('s_plt', e.performanceCheck(t.loadEventEnd, t.navigationStart))),
                        (e.ptc = t.loadEventEnd);
                    }),
                    (e.performanceWritePart = function () {
                      var e = this,
                        t = performance;
                      0 < t.getEntries().length &&
                        (e.ppfe === t.getEntries().length
                          ? clearInterval(e.pwp)
                          : (e.ppfe = t.getEntries().length)),
                        '' === e.c_r('s_plt') &&
                          e.c_w(
                            's_plt',
                            (
                              (t.getEntries()[t.getEntries().length - 1].responseEnd -
                                t.getEntries()[0].startTime) /
                              1000
                            ).toFixed(2)
                          );
                    }),
                    (e.performanceCheck = function (e, t) {
                      if (0 <= e && 0 <= t)
                        return e - t < 60000 && 0 <= e - t
                          ? parseFloat((e - t) / 1000).toFixed(2)
                          : 60;
                    }),
                    (e.p_fo = function (e) {
                      var t = this;
                      return t.__fo || (t.__fo = {}), !t.__fo[e] && ((t.__fo[e] = {}), !0);
                    }),
                    (e.usePlugins = !0),
                    (e.doPlugins = n);
                },
              },
              libraryCode: {
                type: 'managed',
                accounts: {
                  staging: ['canadadevbase'],
                  production: ['canadalivemain'],
                  development: ['canadadevbase'],
                },
                useActivityMap: !0,
                scopeTrackerGlobally: !0,
              },
              trackerProperties: {
                charSet: 'UTF-8',
                currencyCode: 'CAD',
                trackingServer: 'canada.sc.omtrdc.net',
                trackInlineStats: !0,
                trackDownloadLinks: !1,
                trackExternalLinks: !1,
                writeSecureCookies: !0,
                trackingServerSecure: 'canada.sc.omtrdc.net',
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPbde2f7ca14e540399dcc1f8208860b7b/',
          },
          'common-analytics-plugins': {
            displayName: 'Common Analytics Plugins',
            modules: {
              'common-analytics-plugins/src/lib/actions/initialize.js': {
                name: 'initialize',
                displayName: 'Initialize',
                script: function (e, t, a, n) {
                  'use strict';
                  var r,
                    i = n.getSharedModule('adobe-analytics', 'augment-tracker'),
                    o = n.getSharedModule('adobe-analytics', 'get-tracker');
                  (e.exports = function (e) {
                    e && (r = e);
                  }),
                    void 0 === o
                      ? n.logger.error(
                          'The "Common Analytics Plugins" extension requires that the "Adobe Analytics" extension be installed in the same Launch web property and it is not.'
                        )
                      : i(function (e) {
                          (r.gqp || r.mv || r.pt) &&
                            (e.pt = function (e, t, a, n) {
                              for (var r = 0, s = (e = e.split(t || ',')).length; r < s; r++)
                                if ((t = this[a](e[r], n))) return t;
                              return '';
                            }),
                            (r.ft || r.apl || r.il || r.gtbe || r.gttc) &&
                              (e.inList = function (e, t, a, n) {
                                if ('string' != typeof t) return !1;
                                if ('string' == typeof e) e = e.split(a || ',');
                                else if ('object' != typeof e) return !1;
                                a = 0;
                                for (var r = e.length; a < r; a++)
                                  if (
                                    (1 == n && t === e[a]) ||
                                    t.toLowerCase() === e[a].toLowerCase()
                                  )
                                    return !0;
                                return !1;
                              }),
                            (r.fpo || r.gplt || r.gppv) &&
                              (e.p_fo = function (e) {
                                var t = this;
                                return (
                                  t.__fo || (t.__fo = {}), !t.__fo[e] && ((t.__fo[e] = {}), !0)
                                );
                              }),
                            r.ggc &&
                              (e.getGeoCoordinates = function () {
                                var a = this,
                                  n = '',
                                  e = a.c_r('s_ggc').split('|'),
                                  t = { timeout: 5000, maximumAge: 0 },
                                  r = function (e) {
                                    e = e.coords;
                                    var t = new Date();
                                    t.setTime(t.getTime() + 1800000),
                                      a.c_w(
                                        's_ggc',
                                        parseFloat(e.latitude.toFixed(4)) +
                                          '|' +
                                          parseFloat(e.longitude.toFixed(4)),
                                        t
                                      ),
                                      (n =
                                        'latitude=' +
                                        parseFloat(e.latitude.toFixed(4)) +
                                        ' | longitude=' +
                                        parseFloat(e.longitude.toFixed(4)));
                                  },
                                  s = function () {
                                    n = 'error retrieving geo coordinates';
                                  };
                                return (
                                  1 < e.length &&
                                    (n = 'latitude=' + e[0] + ' | longitude=' + e[1]),
                                  navigator.geolocation &&
                                    navigator.geolocation.getCurrentPosition(r, s, t),
                                  '' === n && (n = 'geo coordinates not supported'),
                                  n
                                );
                              }),
                            r.ns &&
                              ((window.zeroPad = function (e, t) {
                                if (((e = parseInt(e)), (t = parseInt(t)), isNaN(e) || isNaN(t)))
                                  return '';
                                var a = t - e.toString().length + 1;
                                return Array(+(0 < a && a)).join('0') + e;
                              }),
                              (window.randomNumber = function (e) {
                                e =
                                  'number' == typeof e
                                    ? Math.abs(e) < 17
                                      ? Math.round(Math.abs(e))
                                      : 17
                                    : 10;
                                for (var t = '1', a = 0; a < e; a++) t += '0';
                                return (
                                  (t = Number(t)),
                                  (t = Math.floor(Math.random().toFixed(e) * t) + '').length !==
                                    e &&
                                    'undefined' != typeof zeroPad &&
                                    (t = zeroPad(t, e)),
                                  t
                                );
                              }),
                              (window.twoDecimals = function (e) {
                                return void 0 === e || void 0 === e || isNaN(e)
                                  ? 0
                                  : Number(Number(e).toFixed(2));
                              })),
                            r.apv &&
                              (e.addProductEvar = function (e, t, a) {
                                if ('string' == typeof e && 'string' == typeof t && '' !== t)
                                  if (((a = a || !1), this.products)) {
                                    var n,
                                      r = this.products.split(','),
                                      s = r.length;
                                    for (a = a ? 0 : s - 1; a < s; a++)
                                      (n = r[a].split(';'))[5] &&
                                      -1 < n[5].toLowerCase().indexOf('evar')
                                        ? (n[5] = n[5] + '|' + e + '=' + t)
                                        : n[5]
                                        ? (n[5] = e + '=' + t)
                                        : n[5] ||
                                          (n[4] || (n[4] = ''),
                                          n[3] || (n[3] = ''),
                                          n[2] || (n[2] = ''),
                                          n[1] || (n[1] = ''),
                                          (n[5] = e + '=' + t)),
                                        (r[a] = n.join(';'));
                                    this.products = r.join(',');
                                  } else this.products = ';;;;;' + e + '=' + t;
                              }),
                            r.ape &&
                              (e.addProductEvent = function (e, t, a) {
                                var n = this;
                                if ('string' == typeof e)
                                  if (
                                    ((t = isNaN(t) ? '1' : String(t)),
                                    (a = a || !1),
                                    (n.events = n.apl(n.events, e)),
                                    n.products)
                                  ) {
                                    var r,
                                      s = n.products.split(',');
                                    for (a = a ? 0 : s.length - 1; a < s.length; a++)
                                      (r = s[a].split(';'))[4] && r[4].includes('event')
                                        ? (r[4] = r[4] + '|' + e + '=' + t)
                                        : r[5]
                                        ? (r[4] = e + '=' + t)
                                        : r[4] ||
                                          (r[3] || (r[3] = ''),
                                          r[2] || (r[2] = ''),
                                          r[1] || (r[1] = ''),
                                          (r[4] = e + '=' + t)),
                                        (s[a] = r.join(';'));
                                    n.products = s.join(',');
                                  } else n.products = ';;;;' + e + '=' + t;
                              }),
                            r.apl &&
                              (e.apl = function (e, t, a, n, r) {
                                if (!e || 'string' == typeof e) {
                                  if (
                                    'undefined' == typeof this.inList ||
                                    'string' != typeof t ||
                                    '' === t
                                  )
                                    return e;
                                  (a = a || ','),
                                    1 == (n = n || a) && ((n = a), r || (r = 1)),
                                    2 == n && 1 != r && (n = a);
                                  for (var s = (t = t.split(',')).length, i = 0; i < s; i++)
                                    this.inList(e, t[i], a, r) || (e = e ? e + n + t[i] : t[i]);
                                }
                                return e;
                              }),
                            (r.cs || r.mv) &&
                              (window.cleanStr = function (e) {
                                if ('string' != typeof e) return '';
                                for (
                                  e = (e = (e = (e = (e = e.replace(
                                    /<\/?[^>]+(>|$)/g,
                                    ''
                                  )).replace(/^\s+|\s+$/g, '')).replace(
                                    /[\u2018\u2019\u201A]/g,
                                    "'"
                                  )).replace(/\t+/g, '')).replace(/[\n\r]/g, ' ');
                                  -1 < e.indexOf('  ');

                                )
                                  e = e.replace(/\s\s/g, ' ');
                                return e;
                              }),
                            r.rfl &&
                              (e.rfl = function (e, t, a, n, r) {
                                if (!e || !t) return '';
                                var s = [],
                                  i = '';
                                (n = n || a), (r = !!r), (a = (e = e.split(a || ',')).length);
                                for (var o = 0; o < a; o++)
                                  -1 < e[o].indexOf(':') &&
                                    (((i = e[o].split(':'))[1] = i[0] + ':' + i[1]),
                                    (e[o] = i[0])),
                                    -1 < e[o].indexOf('=') &&
                                      (((i = e[o].split('='))[1] = i[0] + '=' + i[1]),
                                      (e[o] = i[0])),
                                    e[o] !== t && i
                                      ? s.push(i[1])
                                      : e[o] !== t
                                      ? s.push(e[o])
                                      : e[o] === t &&
                                        r &&
                                        (i ? s.push(i[1]) : s.push(e[o]), (r = !1)),
                                    (i = '');
                                return s.join(n);
                              }),
                            r.gvo &&
                              (e.getValOnce = function (e, t, a, n) {
                                if (
                                  ((t = t || 's_gvo'),
                                  (a = a || 0),
                                  (n = 'm' === n ? 60000 : 86400000),
                                  e && e !== this.c_r(t))
                                ) {
                                  var r = new Date();
                                  return (
                                    r.setTime(r.getTime() + a * n),
                                    this.c_w(t, e, 0 === a ? 0 : r),
                                    e
                                  );
                                }
                                return '';
                              }),
                            r.gpv &&
                              (e.getPreviousValue = function (e, t, a) {
                                var n = this,
                                  r = '',
                                  s = !0;
                                if (((t = t || 's_gpv'), a)) {
                                  (s = !1), (a = a.split(','));
                                  for (
                                    var i = n.events ? n.events.split(',') : '',
                                      o = 0,
                                      c = a.length;
                                    o < c;
                                    o++
                                  ) {
                                    for (var l = 0, u = i.length; l < u; l++)
                                      if (a[o] === i[l]) {
                                        s = !0;
                                        break;
                                      }
                                    if (!0 === s) break;
                                  }
                                }
                                return (
                                  !0 === s &&
                                    ((s = new Date()).setTime(s.getTime() + 1800000),
                                    n.c_r(t) && (r = n.c_r(t)),
                                    e ? n.c_w(t, e, s) : n.c_w(t, 'no previous value', s)),
                                  r
                                );
                              }),
                            r.gapv &&
                              (e.getAndPersistValue = function (e, t, a) {
                                var n = new Date();
                                return (
                                  (t = t || 's_gapv'),
                                  (a = a || 0)
                                    ? n.setTime(n.getTime() + 86400000 * a)
                                    : n.setTime(n.getTime() + 1800000),
                                  e || (e = this.c_r(t)),
                                  this.c_w(t, e, n),
                                  e
                                );
                              }),
                            (r.ft || r.gtbe || r.gttc) &&
                              (e.formatTime = function (e, t, a) {
                                var n = this;
                                if (!(void 0 === e || isNaN(e) || Number(e) < 0)) {
                                  if (
                                    ('string' == typeof t && 'd' === t) ||
                                    (('string' != typeof t || !n.inList('h,m,s', t)) && 86400 <= e)
                                  ) {
                                    t = 86400;
                                    var r = 'days';
                                    a = isNaN(a) ? 4 : t / (a * t);
                                  } else
                                    ('string' == typeof t && 'h' === t) ||
                                    (('string' != typeof t || !n.inList('m,s', t)) && 3600 <= e)
                                      ? ((t = 3600),
                                        (r = 'hours'),
                                        (a = isNaN(a) ? 4 : t / (a * t)))
                                      : ('string' == typeof t && 'm' === t) ||
                                        (('string' != typeof t || !n.inList('s', t)) && 60 <= e)
                                      ? ((t = 60),
                                        (r = 'minutes'),
                                        (a = isNaN(a) ? 2 : t / (a * t)))
                                      : ((t = 1), (r = 'seconds'), (a = isNaN(a) ? 0.2 : t / a));
                                  return (
                                    0 ===
                                      (e = Math.round((e * a) / t) / a + ' ' + r).indexOf('1 ') &&
                                      (e = e.substring(0, e.length - 1)),
                                    e
                                  );
                                }
                              }),
                            r.gtslv &&
                              (e.getTimeSinceLastVisit = function () {
                                var e = this,
                                  t = new Date(),
                                  a = t.getTime(),
                                  n = e.c_r('s_tslv') || 0,
                                  r = Math.round((a - n) / 1000);
                                return (
                                  t.setTime(a + 63072000000),
                                  e.c_w('s_tslv', a, t),
                                  n
                                    ? 1800 < r && e.formatTime
                                      ? e.formatTime(r)
                                      : ''
                                    : 'New Visitor'
                                );
                              }),
                            r.gdslv &&
                              (e.getDaysSinceLastVisit = function () {
                                var e = new Date(),
                                  t = e.getTime(),
                                  a = this.c_r('s_dslv');
                                if ((e.setTime(t + 94608000000), this.c_w('s_dslv', t, e), a)) {
                                  if (1800000 < (e = t - a)) {
                                    if (31536000000 < e) return 'More than a year';
                                    if (2592000000 < e) return 'More than 30 days';
                                    if (e < 2592000000 + 1 && 604800000 < e)
                                      return 'More than 7 days';
                                    if (e < 604800000 + 1 && 86400000 < e)
                                      return 'Less than 7 days';
                                    if (e < 86400000 + 1) return 'Less than 1 day';
                                  }
                                  return '';
                                }
                                return 'New Visitor';
                              }),
                            r.gnr &&
                              (e.getNewRepeat = function (e) {
                                var t = this,
                                  a = 's_nr' + (e = e || 30),
                                  n = new Date(),
                                  r = t.c_r(a),
                                  s = r.split('-'),
                                  i = n.getTime();
                                return (
                                  n.setTime(i + 86400000 * e),
                                  '' === r || (i - s[0] < 180000 && 'New' === s[1])
                                    ? (t.c_w(a, i + '-New', n), 'New')
                                    : (t.c_w(a, i + '-Repeat', n), 'Repeat')
                                );
                              }),
                            r.gplt &&
                              ((e.getPageLoadTime = function () {
                                var e = this;
                                if ('undefined' != typeof performance && e.p_fo('performance')) {
                                  var t = performance;
                                  t.clearResourceTimings(),
                                    '' !== e.c_r('s_plt') &&
                                      (0 < t.timing.loadEventEnd && clearInterval(e.pi),
                                      (e._pltLoadTime = e.c_r('s_plt')),
                                      (e._pltPreviousPage = e.c_r('s_pltp')),
                                      e.c_w('s_plt', ''),
                                      e.c_w('s_pltp', '')),
                                    0 === t.timing.loadEventEnd
                                      ? (e.pi = setInterval(function () {
                                          e.performanceWriteFull();
                                        }, 250))
                                      : 0 < t.timing.loadEventEnd &&
                                        (e.ptc
                                          ? e.ptc === t.timing.loadEventEnd &&
                                            1 === t.getEntries().length &&
                                            (e.pwp = setInterval(function () {
                                              e.performanceWritePart();
                                            }, 500))
                                          : e.performanceWriteFull());
                                }
                              }),
                              (e.performanceWriteFull = function () {
                                var e = this,
                                  t = performance.timing;
                                0 < t.loadEventEnd &&
                                  (clearInterval(e.pi),
                                  '' === e.c_r('s_plt') &&
                                    (e.c_w(
                                      's_plt',
                                      e.performanceCheck(t.loadEventEnd, t.navigationStart)
                                    ),
                                    e.c_w('s_pltp', e.pageName))),
                                  (e.ptc = t.loadEventEnd);
                              }),
                              (e.performanceWritePart = function () {
                                var e = this,
                                  t = performance;
                                0 < t.getEntries().length &&
                                  (e.ppfe === t.getEntries().length
                                    ? clearInterval(e.pwp)
                                    : (e.ppfe = t.getEntries().length)),
                                  '' === e.c_r('s_plt') &&
                                    (e.c_w(
                                      's_plt',
                                      (
                                        (t.getEntries()[t.getEntries().length - 1].responseEnd -
                                          t.getEntries()[0].startTime) /
                                        1000
                                      ).toFixed(2)
                                    ),
                                    e.c_w('s_pltp', e.pageName));
                              }),
                              (e.performanceCheck = function (e, t) {
                                if (0 <= e && 0 <= t)
                                  return e - t < 60000 && 0 <= e - t
                                    ? parseFloat((e - t) / 1000).toFixed(2)
                                    : 60;
                              })),
                            r.gpn &&
                              (window.getPageName = function (e, t, a, n) {
                                var r = location.hostname,
                                  s = location.pathname.substring(1).split('/'),
                                  i = s.length,
                                  o = location.search.substring(1).split('&'),
                                  c = o.length,
                                  l = location.hash.substring(1).split('&'),
                                  u = l.length;
                                if (
                                  ((n = n || '|'),
                                  (e = e || r),
                                  (t = t || ''),
                                  (a = a || ''),
                                  1 === i && '' === s[0])
                                )
                                  e = e + n + 'home';
                                else for (r = 0; r < i; r++) e = e + n + decodeURIComponent(s[r]);
                                if (t && (1 !== c || '' !== o[0]))
                                  for (i = (s = t.split(',')).length, r = 0; r < i; r++)
                                    for (t = 0; t < c; t++)
                                      if (s[r] === o[t].split('=')[0]) {
                                        e = e + n + decodeURIComponent(o[t]);
                                        break;
                                      }
                                if (a && (1 !== u || '' !== l[0]))
                                  for (o = (a = a.split(',')).length, r = 0; r < o; r++)
                                    for (t = 0; t < u; t++)
                                      if (a[r] === l[t].split('=')[0]) {
                                        e = e + n + decodeURIComponent(l[t]);
                                        break;
                                      }
                                return e.substring(e.length - n.length) === n
                                  ? e.substring(0, e.length - n.length)
                                  : e;
                              }),
                            r.grl &&
                              (window.getResponsiveLayout = function (e, t, a) {
                                if (!(isNaN(e) || isNaN(t) || isNaN(a) || t < e || a < t)) {
                                  var n =
                                    window.innerWidth ||
                                    document.documentElement.clientWidth ||
                                    document.body.clientWidth;
                                  return (
                                    (e < t && n <= t
                                      ? n <= e
                                        ? 'phone portrait layout'
                                        : 'phone landscape layout'
                                      : n <= t
                                      ? 'phone layout'
                                      : n <= a
                                      ? 'tablet layout'
                                      : 'desktop layout') +
                                    ':' +
                                    n +
                                    'x' +
                                    (window.innerHeight ||
                                      document.documentElement.clientHeight ||
                                      document.body.clientHeight)
                                  );
                                }
                              }),
                            r.gqp &&
                              (e.getQueryParam = function (e, t, a) {
                                var r = this,
                                  n = '',
                                  s = function (e, t) {
                                    var a = (t = (t = t.split('?').join('&'))
                                        .split('#')
                                        .join('&')).indexOf('&'),
                                      n = '';
                                    return (
                                      e &&
                                        (-1 < a || t.indexOf('=') > a) &&
                                        ((a = t.substring(a + 1)), (n = r.pt(a, '&', 'gpval', e))),
                                      n
                                    );
                                  },
                                  i = (e = e.split(',')).length;
                                if (
                                  ((r.gpval = function (e, t) {
                                    if (e) {
                                      var a = e.split('='),
                                        n = a[0];
                                      if (
                                        ((a = !a[1] || a[1]), t.toLowerCase() == n.toLowerCase())
                                      )
                                        return 'boolean' == typeof a ? a : this.unescape(a);
                                    }
                                    return '';
                                  }),
                                  (t = t || ''),
                                  (a = (a || (r.pageURL ? r.pageURL : location.href)) + ''),
                                  (4 < t.length || -1 < t.indexOf('=')) && a && a.length < 4)
                                ) {
                                  var o = t;
                                  (t = a), (a = o);
                                }
                                for (var c = 0; c < i; c++)
                                  'string' == typeof (o = s(e[c], a))
                                    ? ((o =
                                        -1 < o.indexOf('#') ? o.substring(0, o.indexOf('#')) : o),
                                      (n += n ? t + o : o))
                                    : (n = '' === n ? o : n + (t + o));
                                return n;
                              }),
                            r.gtp &&
                              (window.getTimeParting = function (e) {
                                return (
                                  (e = document.documentMode ? void 0 : e || 'Etc/GMT'),
                                  (e = new Date().toLocaleDateString('en-US', {
                                    timeZone: e,
                                    minute: 'numeric',
                                    hour: 'numeric',
                                    weekday: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                    month: 'long',
                                  })),
                                  'year=' +
                                    (e = /([a-zA-Z]+).*?([a-zA-Z]+).*?([0-9]+).*?([0-9]+)(.*?)([0-9])(.*)/.exec(
                                      e
                                    ))[4] +
                                    ' | month=' +
                                    e[2] +
                                    ' | date=' +
                                    e[3] +
                                    ' | day=' +
                                    e[1] +
                                    ' | time=' +
                                    (e[6] + e[7])
                                );
                              }),
                            r.gtbe &&
                              (e.getTimeBetweenEvents = function (e, t, a, n, r, s, i, o, c) {
                                var l = this;
                                if (
                                  'string' == typeof e &&
                                  void 0 !== t &&
                                  'string' == typeof a &&
                                  void 0 !== n
                                ) {
                                  (r = r || 's_tbe'), (s = isNaN(s) ? 1 : Number(s));
                                  var u = !1,
                                    d = !1,
                                    m = e.split(','),
                                    p = a.split(',');
                                  c = c ? c.split(',') : [];
                                  for (
                                    var g,
                                      f = l.c_r(r),
                                      h = new Date(),
                                      v = h.getTime(),
                                      b = new Date(),
                                      y = 0;
                                    y < c.length;
                                    ++y
                                  )
                                    if (l.inList(l.events, c[y]))
                                      return b.setDate(b.getDate() - 1), void l.c_w(r, '', b);
                                  for (
                                    b.setTime(b.getTime() + 86400000 * s), y = 0;
                                    y < m.length && !u && !0 !== (u = l.inList(l.events, m[y]));
                                    ++y
                                  );
                                  for (
                                    y = 0;
                                    y < p.length && !d && !0 !== (d = l.inList(l.events, p[y]));
                                    ++y
                                  );
                                  return (
                                    1 === m.length && 1 === p.length && e === a && u && d
                                      ? (f && (g = (v - f) / 1000), l.c_w(r, v, s ? b : 0))
                                      : (!u || (1 != t && f) || l.c_w(r, v, s ? b : 0),
                                        d &&
                                          f &&
                                          ((g = (h.getTime() - f) / 1000),
                                          !0 === n &&
                                            (b.setDate(b.getDate() - 1), l.c_w(r, '', b)))),
                                    g ? l.formatTime(g, i, o) : ''
                                  );
                                }
                              }),
                            r.gttc &&
                              (e.getTimeToComplete = function (e, t, a) {
                                if (
                                  'stop' === (e = e ? e.toLowerCase() : 'start') ||
                                  'start' === e
                                ) {
                                  (t = t || 's_gttc'), (a = a || 0);
                                  var n = this,
                                    r = n.c_r(t),
                                    s = new Date();
                                  if ('start' !== e || r) {
                                    if ('stop' === e && r)
                                      return (
                                        (e = Math.round((s.getTime() - r) / 1000)),
                                        n.c_w(t, '', 0),
                                        n.formatTime(e)
                                      );
                                  } else
                                    n.c_w(
                                      t,
                                      s.getTime(),
                                      a ? new Date(s.getTime() + 86400000 * a) : 0
                                    );
                                }
                              }),
                            r.gvd &&
                              (e.getVisitDuration = function () {
                                var e = new Date(),
                                  t = e.getTime(),
                                  a = this.c_r('s_dur');
                                (isNaN(a) || 1800000 < t - a) && (a = t);
                                var n = t - a;
                                return (
                                  e.setTime(t + 1800000),
                                  this.c_w('s_dur', a + '', e),
                                  0 === n
                                    ? 'first hit of visit'
                                    : 0 === (n = Math.floor(n / 60000))
                                    ? 'less than a minute'
                                    : 1 === n
                                    ? '1 minute'
                                    : n + ' minutes'
                                );
                              }),
                            r.gvn &&
                              ((e.getVisitNum = function (e, t) {
                                var a = this,
                                  n = function (e) {
                                    return !isNaN(e) && (0 | parseFloat(e)) === parseFloat(e);
                                  };
                                if (((e = e || 365), 'boolean' == typeof (t = t ? !!t : !!n(e)))) {
                                  var r = new Date().getTime(),
                                    s = endOfDatePeriod(e);
                                  if (a.c_r('s_vnc' + e))
                                    var i = a.c_r('s_vnc' + e).split('&vn='),
                                      o = i[1];
                                  return a.c_r('s_ivc')
                                    ? o
                                      ? (s.setTime(r + 1800000), a.c_w('s_ivc', !0, s), o)
                                      : 'unknown visit number'
                                    : void 0 !== o
                                    ? (o++,
                                      (n = t && n(e) ? r + 86400000 * e : i[0]),
                                      s.setTime(n),
                                      a.c_w('s_vnc' + e, n + '&vn=' + o, s),
                                      s.setTime(r + 1800000),
                                      a.c_w('s_ivc', !0, s),
                                      o)
                                    : ((n = n(e)
                                        ? r + 86400000 * e
                                        : endOfDatePeriod(e).getTime()),
                                      a.c_w('s_vnc' + e, n + '&vn=1', s),
                                      s.setTime(r + 1800000),
                                      a.c_w('s_ivc', !0, s),
                                      '1');
                                }
                              }),
                              (window.endOfDatePeriod = function (e) {
                                var t = new Date(),
                                  a = isNaN(e) ? 0 : Math.floor(e);
                                if (
                                  (t.setHours(23),
                                  t.setMinutes(59),
                                  t.setSeconds(59),
                                  'w' === e && (a = 6 - t.getDay()),
                                  'm' === e)
                                ) {
                                  a = t.getMonth() + 1;
                                  var n = t.getFullYear();
                                  a = new Date(n || 1970, a || 1, 0).getDate() - t.getDate();
                                }
                                return (
                                  t.setDate(t.getDate() + a),
                                  'y' === e && (t.setMonth(11), t.setDate(31)),
                                  t
                                );
                              })),
                            r.mv &&
                              ((e.manageVars = function (e, t, a) {
                                var n = this;
                                if (!n[e]) return !1;
                                (t = t || ''), (a = a || !0);
                                var r,
                                  s =
                                    'pageName,purchaseID,channel,server,pageType,campaign,state,zip,events,products,transactionID';
                                for (r = 1; r < 76; r++) s += ',prop' + r;
                                for (r = 1; r < 251; r++) s += ',eVar' + r;
                                for (r = 1; r < 6; r++) s += ',hier' + r;
                                for (r = 1; r < 4; r++) s += ',list' + r;
                                for (r in n.contextData) s += ',contextData.' + r;
                                if (t) {
                                  if (1 == a) s = t.replace("['", '.').replace("']", '');
                                  else if (0 == a) {
                                    for (x in ((t = t.split(',')),
                                    (a = s.split(',')),
                                    (s = ''),
                                    t))
                                      for (y in ('string' == typeof t[x] &&
                                        -1 < t[x].indexOf('contextData') &&
                                        (t[x] = 'contextData.' + t[x].split("'")[1]),
                                      a))
                                        t[x] === a[y] && (a[y] = '');
                                    for (y in a) s += a[y] ? ',' + a[y] : '';
                                  }
                                  return n.pt(s, ',', e, 0), !0;
                                }
                                return !('' !== t || !a || (n.pt(s, ',', e, 0), 0));
                              }),
                              (e.lowerCaseVars = function (e) {
                                var t = this;
                                t[e] &&
                                  ('events' !== e && -1 === e.indexOf('contextData')
                                    ? ((t[e] = t[e].toString()),
                                      0 !== t[e].indexOf('D=') && (t[e] = t[e].toLowerCase()))
                                    : -1 < e.indexOf('contextData') &&
                                      ((e = e.substring(e.indexOf('.') + 1)),
                                      t.contextData[e] &&
                                        (t.contextData[e] = t.contextData[e]
                                          .toString()
                                          .toLowerCase())));
                              }),
                              (s.cleanStr = window.cleanStr));
                        });
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP627a25c51967405590ccc51bba101d07/',
          },
        },
        company: { orgId: 'A90F2A0D55423F537F000101@AdobeOrg' },
        property: {
          name: 'Canada.ca',
          settings: {
            domains: ['canada.ca', 'gc.ca', 'adobecqms.net'],
            undefinedVarsReturnEmpty: !0,
            ruleComponentSequencingEnabled: !0,
          },
        },
        rules: [
          {
            id: 'RLc65ee4573a3944f29e7f8a3d5dd056b9',
            name: '(MT) FormApplySelectedFilters | submit | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/submit.js',
                settings: {
                  elementSelector:
                    'form[data-gc-analytics="formName:PCO - Mandate Tracker Status and Priority Filter"]',
                  bubbleFireIfParent: !0,
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
                    var e = '',
                      t = $('select[data-gc-analytics="form:dropdown"]')
                        .attr('data-gc-analytics')
                        .replace(/(form:)/, ''),
                      a = $('select[data-gc-analytics="form:dropdown"]').attr('id'),
                      n = $('input[data-gc-analytics="form:checkbox"]').attr('type');
                    e += t + ':' + a + ':' + $('#cmt-status option:selected').text();
                    for (
                      var r = $('.checkbox input[type=checkbox]:checked'), s = [], i = 0;
                      i < r.length;
                      i++
                    ) {
                      var o = r[i].defaultValue.replace(/^\d+(@)/, '');
                      s.push(n + ':' + o + ':checked');
                    }
                    0 !== r.length && (e += '|' + s.join('|'));
                    var c = $(
                      'form[data-gc-analytics="formName:PCO - Mandate Tracker Status and Priority Filter"]'
                    )
                      .attr('data-gc-analytics')
                      .replace(/(formName:)/, '');
                    return (
                      _satellite.setVar('jsFormName', c), _satellite.setVar('jsApplyFilter', e), !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list2 = _satellite.getVar('ApplyFilter')), (t.linkTrackVars += ',list2');
                    },
                  },
                  trackerProperties: {
                    eVars: [{ name: 'eVar79', type: 'value', value: '%FormName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Form submit: "+v79' }],
                    events: [{ name: 'event79' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: '(MT) FormApplySelectedFilters',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCd1a77f33d5644853a36dfacfac3bf56b-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLb208a6084ca24a6ab6f3c454e65465c2',
            name: 'FollowInit | click | 50 | [CC]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.followus a.wb-lbx',
                  bubbleFireIfParent: !0,
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
                    var e = /#(.+)$/.exec(this.getAttribute('href'));
                    if (null === e) return !1;
                    for (
                      var t = {
                          facebook: 'Facebook',
                          twitter: 'Twitter',
                          youtube: 'Youtube',
                          instagram: 'Instagram',
                          linkedin: 'LinkedIn',
                          rss: 'RSS',
                          pinterest: 'Pinterest',
                          googleplus: 'Google+',
                          flickr: 'Flickr',
                        },
                        a = $(this).attr('class').split(' '),
                        n = 0;
                      n < a.length;
                      n++
                    )
                      if ('undefined' != typeof t[a[n]]) var r = a[n];
                    return (
                      _satellite.setVar('jsFollowPlatform', t[r] || $(this).text()),
                      _satellite.setVar('jsFollowDialog', e[1]),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [],
          },
          {
            id: 'RLb29cef991d284cac8c91670651868ee9',
            name: 'SearchRecherche: No Results | page bottom | 50 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e =
                      document.getElementById('wb-land') ||
                      document.querySelector('[data-gc-analytics="search-recherche"] h2');
                    if (null == e) return !1;
                    var t = e.textContent,
                      a = document.querySelector('[data-gc-analytics="search-recherche"]');
                    return (
                      !(
                        (!/^No results$/.test(t.trim()) &&
                          !/^Aucun r\xe9sultat$/.test(t.trim())) ||
                        null === a
                      ) || void 0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'search|recherche', valueIsRegex: !0 }] },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar20', type: 'value', value: 'No search results' }],
                    events: [{ name: 'event20' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL93338974f6fa4912866d07693cfada91',
            name: 'Chat Submit - Basic/Wizard | click | 50 | [CC, AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  bubbleStop: !0,
                  anchorDelay: 500,
                  elementSelector:
                    ' form[data-gc-analytics-chatformname] [data-gc-analytics-formsubmit], [data-gc-analytics-chatformname][data-gc-analytics-collect] [type=submit]',
                  bubbleFireIfParent: !1,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCa6eba40c118d4d69acdb8ce67d19df5d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list2 = _satellite.getVar('FormList')), (t.linkTrackVars += ',list2');
                    },
                  },
                  trackerProperties: {
                    eVars: [{ name: 'eVar79', type: 'value', value: '%FormName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Chat submit: "+v79' }],
                    events: [{ name: 'event82' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Chat Submit', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCd7174db16c1f40c0a6003afb76912a15-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLe2f84c2bb7a5406187de25ab6c100c1a',
            name: 'HomePageFeature | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector:
                    "a[data-gc-analytics='promo:homePageFeature']:not([class~=hide])",
                  bubbleFireIfParent: !0,
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
                    var e = jQuery(this),
                      t = e.find('figure figcaption').text() || e.text();
                    return (
                      _satellite.setVar('jsMarketingDestination', this.href),
                      _satellite.setVar('jsMarketingTitle', t),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list1 = 'home page feature:' + _satellite.getVar('MarketingTitle')),
                        (t.linkTrackVars += ',list1');
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar43', type: 'value', value: '%MarketingTitle%' },
                      { name: 'eVar44', type: 'value', value: '%MarketingDestination%' },
                      { name: 'eVar45', type: 'value', value: 'home page feature' },
                    ],
                    props: [
                      { name: 'prop7', type: 'value', value: 'D="Home page feature: "+v43' },
                    ],
                    events: [{ name: 'event42' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%MarketingTitle%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.eVar43 = ''),
                        (t.eVar44 = ''),
                        (t.eVar45 = ''),
                        (t.prop7 = ''),
                        (t.events = t.rfl(t.events, 'event42')),
                        (t.linkTrackVars = t.rfl(t.linkTrackVars, 'list1'));
                    },
                  },
                  trackerProperties: {},
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLf4575d08e96c4fd2ad0de7cd7fa917de',
            name: 'All Page | Visitor: Device Type Mobile | page bottom | 50 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/deviceType.js',
                settings: {
                  deviceTypes: [
                    'iPhone',
                    'iPod',
                    'iPad',
                    'Nokia',
                    'Windows Phone',
                    'Blackberry',
                    'Android',
                  ],
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar4', type: 'value', value: 'mobile' }],
                    props: [{ name: 'prop4', type: 'alias', value: 'eVar4' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source: 'sessionStorage.setItem("device", "mobile");',
                  language: 'javascript',
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL2136594bcbb74c6db856f6478dc96801',
            name: 'Tab Open (mobile) | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    'div.wb-tabs.wb-tabs-inited > div.tabpanels > details > summary.wb-toggle.wb-toggle-inited',
                  bubbleFireIfParent: !0,
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
                    return (
                      null === this.parentNode.getAttribute('open') &&
                      !$(this).parent().parent().hasClass('pagedetails') &&
                      (_satellite.setVar(
                        'jsExpand-CollapseTitle',
                        $(this)
                          .text()
                          .trim()
                          .replace(/(\r\n\t|\n|\r\t)/gm, '')
                      ),
                      !0)
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar37', type: 'value', value: '%Expand-CollapseTitle%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Tab Open: "+v37' }],
                    events: [{ name: 'event29' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%Expand-CollapseTitle%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC1cf52c58b09e4e3784f7d850284834b9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLdcabc5001f144d168657636136b23ac4',
            name: '(MT) Content Filter Title | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    '#prgss_completed,#prgss_completedmodified,#prgss_underwayontrack,#prgss_underwaychallenged,#prgss_notpursued,#guidance',
                  bubbleFireIfParent: !0,
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
                    var e = wb.pageUrlParts.pathname;
                    if (
                      -1 ===
                        e.indexOf('privy-council/campaigns/mandate-tracker-results-canadians') &&
                      -1 === e.indexOf('conseil-prive/campagnes/mandat-suivi-resultats-canadiens')
                    )
                      return !1;
                    var t = jQuery(this).attr('id')
                      ? jQuery(this).children(':first-child').next().text()
                      : jQuery(this).text().trim();
                    return _satellite.setVar('jsContentFilterTitle', t), !0;
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar78', type: 'value', value: '%ContentFilterTitle%' }],
                    props: [
                      { name: 'prop7', type: 'value', value: 'D="Content Filter Title: "+v78' },
                    ],
                    events: [{ name: 'event78' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '(MT) Content Filter Title', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCbb04c627807f472889cfc2ee21a875f5-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL0a26a3eef3f54332a3bde3ba1a989f55',
            name: 'Search: No Results | page bottom | 50 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = document.getElementById('wb-land');
                    if (null == e) return !1;
                    var t = e.textContent,
                      a = document.querySelector('div[data-analytics-id="squery"]');
                    return (
                      !(
                        !(
                          /^No results$/.test(t.trim()) ||
                          /^Aucun r\xe9sultat$/.test(t.trim()) ||
                          /^No test results$/.test(t.trim())
                        ) || null === a
                      ) || void 0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['canada.ca'] },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar20', type: 'value', value: 'No search results' }],
                    events: [{ name: 'event20' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL3ddd7311fc7d485089b98204ec241cf0',
            name: 'Custom Page Load | direct call | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'CUSTOM_PAGE_LOAD' },
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
                      var a = document.location.hostname + document.location.pathname,
                        n = a.length,
                        r = /^((?:.*?\/){1,3})(.*\/)?(.*)/.exec(a),
                        s = document.location.search;
                      return (
                        (t.eVar39 = s || 'blank query string'),
                        _satellite.setVar('jsqueryString', t.eVar39),
                        (t.eVar22 = a.substring(n - 255, n)),
                        (t.prop22 = a.substring(n - 100, n)),
                        (t.eVar23 =
                          null !== r && 'undefined' != typeof r[2] ? r[2] : 'blank folder'),
                        (t.eVar24 =
                          null !== r && 'undefined' != typeof r[3] ? r[3] : 'blank filename'),
                        ('undefined' != typeof t.eVar4 && null != t.eVar4) ||
                          (t.eVar4 = _satellite.getVar('DefaultValue-DeviceType')),
                        ('undefined' != typeof t.prop7 && null != t.prop7) ||
                          (t.prop7 = 'D="Page: "+pageName'),
                        !1
                      );
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar12', type: 'value', value: 'D=g' },
                      { name: 'eVar15', type: 'value', value: '%PageCreator%' },
                      { name: 'eVar16', type: 'value', value: '%PageTheme-PageLanguage%' },
                      { name: 'eVar21', type: 'value', value: '%PageIssuedDate%' },
                      { name: 'eVar25', type: 'value', value: '%PageType%' },
                      { name: 'eVar75', type: 'value', value: '%LibraryVersion%' },
                      { name: 'eVar5', type: 'value', value: '%PageLanguage%' },
                      { name: 'eVar11', type: 'value', value: 'D=pageName' },
                      { name: 'eVar66', type: 'value', value: '%LoginStatus%' },
                      { name: 'eVar17', type: 'value', value: 'blank page creator' },
                      { name: 'eVar18', type: 'value', value: 'blank theme' },
                      { name: 'eVar19', type: 'value', value: 'blank page url' },
                      { name: 'eVar13', type: 'value', value: 'blank page title' },
                    ],
                    props: [
                      { name: 'prop1', type: 'alias', value: 'eVar1' },
                      { name: 'prop2', type: 'alias', value: 'eVar2' },
                      { name: 'prop4', type: 'alias', value: 'eVar4' },
                      { name: 'prop5', type: 'alias', value: 'eVar5' },
                      { name: 'prop11', type: 'value', value: 'D=pageName' },
                      { name: 'prop12', type: 'value', value: 'D=g' },
                      { name: 'prop15', type: 'alias', value: 'eVar15' },
                      { name: 'prop16', type: 'alias', value: 'eVar16' },
                      { name: 'prop21', type: 'alias', value: 'eVar21' },
                      { name: 'prop23', type: 'alias', value: 'eVar23' },
                      { name: 'prop24', type: 'alias', value: 'eVar24' },
                      { name: 'prop25', type: 'alias', value: 'eVar25' },
                      { name: 'prop26', type: 'alias', value: 'eVar26' },
                      { name: 'prop39', type: 'alias', value: 'eVar39' },
                      { name: 'prop65', type: 'alias', value: 'eVar65' },
                      { name: 'prop66', type: 'alias', value: 'eVar66' },
                      { name: 'prop75', type: 'alias', value: 'eVar75' },
                      { name: 'prop13', type: 'alias', value: 'eVar13' },
                      { name: 'prop17', type: 'alias', value: 'eVar17' },
                      { name: 'prop18', type: 'alias', value: 'eVar18' },
                      { name: 'prop19', type: 'alias', value: 'eVar19' },
                      { name: 'prop7', type: 'value', value: 'D="Page: "+pageName' },
                    ],
                    events: [{ name: 'event11' }, { name: 'event102' }],
                    pageURL: '%PageURL%',
                    pageName: '%PageTitle%',
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC6734f2191be64dfdafe7a8eecefecb7d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLcfe0c70ad6674c8c81d4f04b28ac294b',
            name: 'ExitSurveyfr | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'form[name="frExitSurvey"] button',
                  bubbleFireIfParent: !0,
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
                    if ($(this.form).valid()) {
                      var e = $('#Q1 :selected'),
                        t =
                          e.data('deptFr') +
                          ':' +
                          e.data('themeFr') +
                          ':' +
                          e.data('groupFr') +
                          ':' +
                          e.data('valueFr'),
                        a =
                          e.data('deptEn') +
                          ':' +
                          e.data('themeEn') +
                          ':' +
                          e.data('groupEn') +
                          ':' +
                          e.val(),
                        n = $('#Q2 :selected').data('valueFr'),
                        r = $('#Q2 :selected').val(),
                        s = $('#Q3 :selected').data('valueFr'),
                        i = $('#Q3 :selected').val(),
                        o = $('#Q4 :selected').data('valueFr'),
                        c = $('#Q4 :selected').val(),
                        l = $('#Q5 :selected').data('valueFr'),
                        u = $('#Q5 :selected').val(),
                        d = $('#Q6 :selected').data('valueFr'),
                        m = $('#Q6 :selected').val(),
                        p = $('#Q7 :selected').data('valueFr'),
                        g = $('#Q7 :selected').val();
                      'Sélectionnez votre réponse' === o && ((o = 'S/O'), (c = 'N/A')),
                        'Sélectionnez votre réponse' === l && ((l = 'S/O'), (u = 'N/A')),
                        'Sélectionnez votre réponse' === d && (m = d = 'S/O'),
                        'Sélectionnez votre réponse' === p && ((p = 'S/O'), (g = 'N/A')),
                        ('Non' !== s && 'Partiellement' !== s && 'Ne sait pas' !== s) ||
                          ((l = o = 'S/O'), (u = c = 'N/A')),
                        'Oui' === s && ((p = 'S/O'), (g = 'N/A'));
                      var f =
                          n +
                          ';' +
                          s +
                          ';' +
                          o +
                          ';' +
                          l +
                          ';' +
                          d +
                          ';' +
                          p +
                          ';' +
                          $('#Q10 :selected').data('valueFr'),
                        h =
                          r +
                          ';' +
                          i +
                          ';' +
                          c +
                          ';' +
                          u +
                          ';' +
                          m +
                          ';' +
                          g +
                          ';' +
                          $('#Q10 :selected').val();
                      _satellite.setVar('jsExitSurvey', h),
                        _satellite.setVar('jsSurveyTask', a),
                        _satellite.setVar('jsExitSurveyFr', f),
                        _satellite.setVar('jsSurveyTaskFr', t);
                      var v = this.form;
                      return (
                        setTimeout(function () {
                          v.submit();
                        }, 400),
                        !0
                      );
                    }
                    return !1;
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar90', type: 'value', value: '%SurveyTask%' },
                      { name: 'eVar92', type: 'value', value: '%ExitSurvey%' },
                      { name: 'eVar93', type: 'value', value: '%SurveyTaskFr%' },
                      { name: 'eVar95', type: 'value', value: '%ExitSurveyFr%' },
                      {
                        name: 'eVar96',
                        type: 'value',
                        value: 'Legacy-SW-5-ES-Canada-ca:n:n:n:n:n:n',
                      },
                    ],
                    props: [
                      {
                        name: 'prop7',
                        type: 'value',
                        value: 'Exit Survey Completed / Sondage de fin de visite terminé',
                      },
                    ],
                    events: [{ name: 'event92' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'Exit Survey Completed / Sondage de fin de visite terminé',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCedba8a48124e4091846a292e56e77d1f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL1b538e3163a5402db330fa34a6a0fc2e',
            name: 'ExitSurvey | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: "form[name='enExitSurvey'] button",
                  bubbleFireIfParent: !0,
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
                    if ($(this.form).valid()) {
                      var e = $('#Q1 :selected'),
                        t =
                          e.data('deptEn') +
                          ':' +
                          e.data('themeEn') +
                          ':' +
                          e.data('groupEn') +
                          ':' +
                          e.val(),
                        a =
                          e.data('deptFr') +
                          ':' +
                          e.data('themeFr') +
                          ':' +
                          e.data('groupFr') +
                          ':' +
                          e.data('valueFr'),
                        n = $('#Q2 :selected').val(),
                        r = $('#Q2 :selected').data('valueFr'),
                        s = $('#Q3 :selected').val(),
                        i = $('#Q3 :selected').data('valueFr'),
                        o = $('#Q4 :selected').val(),
                        c = $('#Q4 :selected').data('valueFr'),
                        l = $('#Q5 :selected').val(),
                        u = $('#Q5 :selected').data('valueFr'),
                        d = $('#Q6 :selected').val(),
                        m = $('#Q6 :selected').data('valueFr'),
                        p = $('#Q7 :selected').val(),
                        g = $('#Q7 :selected').data('valueFr');
                      'Select your response' === o && ((o = 'N/A'), (c = 'S/O')),
                        'Select your response' === l && ((l = 'N/A'), (u = 'S/O')),
                        'Select your response' === d && ((d = 'N/A'), (m = 'S/O')),
                        'Select your response' === p && ((p = 'N/A'), (g = 'S/O')),
                        ('No' !== s && 'Partially' !== s && "Don't know" !== s) ||
                          ((l = o = 'N/A'), (u = c = 'S/O')),
                        'Yes' === s && ((p = 'N/A'), (g = 'S/O'));
                      var f =
                          n +
                          ';' +
                          s +
                          ';' +
                          o +
                          ';' +
                          l +
                          ';' +
                          d +
                          ';' +
                          p +
                          ';' +
                          $('#Q10 :selected').val(),
                        h =
                          r +
                          ';' +
                          i +
                          ';' +
                          c +
                          ';' +
                          u +
                          ';' +
                          m +
                          ';' +
                          g +
                          ';' +
                          $('#Q10 :selected').data('valueFr');
                      _satellite.setVar('jsExitSurvey', f),
                        _satellite.setVar('jsExitSurveyFr', h),
                        _satellite.setVar('jsSurveyTask', t),
                        _satellite.setVar('jsSurveyTaskFr', a);
                      var v = this.form;
                      return (
                        setTimeout(function () {
                          v.submit();
                        }, 500),
                        !0
                      );
                    }
                    return !1;
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar90', type: 'value', value: '%SurveyTask%' },
                      { name: 'eVar92', type: 'value', value: '%ExitSurvey%' },
                      { name: 'eVar93', type: 'value', value: '%SurveyTaskFr%' },
                      { name: 'eVar95', type: 'value', value: '%ExitSurveyFr%' },
                      {
                        name: 'eVar96',
                        type: 'value',
                        value: 'Legacy-SW-5-ES-Canada-ca:n:n:n:n:n:n',
                      },
                    ],
                    props: [
                      {
                        name: 'prop7',
                        type: 'value',
                        value: 'Exit Survey Completed / Sondage de fin de visite terminé',
                      },
                    ],
                    events: [{ name: 'event92' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'Exit Survey Completed / Sondage de fin de visite terminé',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC87c1a44ed6a148b6b101b078fe3ce6f9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL772666bc5d034b43a257970c39143c7c',
            name: 'Pop-up Impression | direct call | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'popUpImpression' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar57', type: 'value', value: '%PopupName%' }],
                    events: [{ name: 'event58' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Pop-up Impression', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC4365441640284713bb91abf8e2362d84-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL64c433ac654b4ceca906ae02c5bed6d3',
            name: '(ConsultingCanadians) FormFindKeywords | submit | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/submit.js',
                settings: {
                  elementSelector:
                    'form[data-gc-analytics="formname:PCO:Find a Consultation by Keyword | BCP:Trouver une consultation par mots-clés"]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = $('input[data-gc-analytics="form:text"]').attr('type'),
                      t = $('input[data-gc-analytics="form:text"]').attr('name'),
                      a = $('input[data-gc-analytics="form:text"]').val(),
                      n = $(this)
                        .attr('data-gc-analytics')
                        .replace(/(formname:)/, ''),
                      r = e + ':' + t + ':' + a;
                    if ((_satellite.setVar('jsFormName', n), '' !== a))
                      return _satellite.setVar('jsFindKeyword', r), !0;
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list2 = _satellite.getVar('FindKeyword')), (t.linkTrackVars += ',list2');
                    },
                  },
                  trackerProperties: {
                    eVars: [{ name: 'eVar79', type: 'value', value: '%FormName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Form submit: "+v79' }],
                    events: [{ name: 'event79' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: '(ConsultingCanadians) FormFindKeywords',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC84e877159acd4da59b9855e62e3f0bb7-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLb5529e75a0c3450da5ad57c71a788249',
            name: 'Find what you were looking for-Yes | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: 'button[data-gc-analytics-wtph]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      {
                        name: 'prop7',
                        type: 'value',
                        value:
                          'Did you find what you were looking for? | Avez-vous trouvé ce que vous cherchiez? - Yes click',
                      },
                    ],
                    events: [{ name: 'event83' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName:
                    'Did you find what you were looking for? | Avez-vous trouvé ce que vous cherchiez? - Yes click',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC20fd708c2df74615b41ad37018a0ebd9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLb69c84f436f84567bc2a8c830e09d1a3',
            name: 'SocialShareComplete | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.shr-pg.modal-dialog a.shr-lnk',
                  bubbleFireIfParent: !0,
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
                    for (
                      var e = {
                          bitly: 'bitly',
                          blogger: 'Blogger',
                          delicious: 'Delicious',
                          digg: 'Digg',
                          diigo: 'Diigo',
                          email: 'Email',
                          facebook: 'Facebook',
                          gmail: 'Gmail',
                          googleplus: 'Google+',
                          linkedin: 'LinkedIn\xAE',
                          myspace: 'MySpace',
                          pinterest: 'Pinterest',
                          reddit: 'reddit',
                          stumbleupon: 'StumbleUpon',
                          tumblr: 'tumblr',
                          twitter: 'Twitter',
                          yahoomail: 'Yahoo! Mail',
                        },
                        t = $(this).attr('class').split(' '),
                        a = 0;
                      a < t.length;
                      a++
                    )
                      if ('undefined' != typeof e[t[a]]) var n = t[a];
                    return _satellite.setVar('jsSocialPlatform', e[n] || $(this).text()), !0;
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar71',
                        type: 'value',
                        value: '%SocialShareMediaType%:%SocialShareMediaTitle%',
                      },
                      { name: 'eVar72', type: 'value', value: '%SocialPlatform%' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'Social Share Complete' }],
                    events: [{ name: 'event72' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC0baf17388181448388c625b9b92a8147-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL271e0d9da9ac4917a87664a1ac896851',
            name: 'FrSuprQ | direct call | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'FrSuprQ' },
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
                      { name: 'eVar90', type: 'value', value: '%SurveyTask%' },
                      { name: 'eVar91', type: 'value', value: '%SuprQ%' },
                      { name: 'eVar93', type: 'value', value: '%SurveyTaskFr%' },
                      { name: 'eVar94', type: 'value', value: '%SuprQFr%' },
                      {
                        name: 'eVar96',
                        type: 'value',
                        value: 'Legacy-SW-5-ES-Canada-ca:n:n:n:n:n:n',
                      },
                    ],
                    props: [
                      {
                        name: 'prop7',
                        type: 'value',
                        value: 'Standardized Survey Completed / Sondage normalisé terminé',
                      },
                    ],
                    events: [{ name: 'event91' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'Standardized Survey Completed / Sondage normalisé terminé',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC7c82209405e8469eb4b95cca607308b0-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLdcb4160123df4f49948ef572cba81862',
            name: 'Chat Wizard: Initiate | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    '.wb-chtwzrd-link, .wb-chtwzrd-container .basic-link, .wb-chtwzrd-bubble-wrap .notif',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e =
                      (this.form && this.form.dataset.gcAnalyticsChatformname) ||
                      $(this).parentsUntil('[data-gc-analytics-chatformname]').parent().get(0)
                        .dataset.gcAnalyticsChatformname ||
                      'blank formname';
                    return (
                      _satellite.setVar('jsFormName', e),
                      _satellite.setVar(
                        'jsChatClick',
                        $(this)
                          .text()
                          .trim()
                          .replace(/(\r\n\t|\n|\r\t)/gm, '')
                      ),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar79', type: 'value', value: '%FormName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'Chat Initiate: %ChatClick%' }],
                    events: [{ name: 'event81' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%ChatClick%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC8544c116ca174de0a6e07c569c8773f0-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL5aa90586f5fa45728e6c586f30f97eff',
            name: '(MT) FormClearSelectedFilters | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'button[data-gc-analytics="form:resetButton"]',
                  bubbleFireIfParent: !0,
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
                    var e = $(
                      'form[data-gc-analytics="formName:PCO - Mandate Tracker Status and Priority Filter"]'
                    )
                      .attr('data-gc-analytics')
                      .replace(/(formName:)/, '');
                    return (
                      _satellite.setVar('jsFormName', e), _satellite.setVar('jsClearFilter'), !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar79', type: 'value', value: '%FormName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Form reset: "+v79' }],
                    events: [{ name: 'event80' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: '(MT) FormClearSelectedFilters',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC0f13be3dad744c7eab90438acba88763-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL71bbee704ed24a0dbc039bba024ddb2f',
            name: 'Survey | page bottom | 50 | [CC, AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: '/en/cx-survey/thank-you.html' },
                    { value: '/fr/sondage-ec/merci.html' },
                  ],
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '//set all variables from session storage\n\tvar instEN = sessionStorage.getItem("survey-task-institution-en"),\n\tinstFR = sessionStorage.getItem("survey-task-institution-fr"),\n\tthemeEN = sessionStorage.getItem("survey-task-lead-theme-en"), \n\tthemeFR = sessionStorage.getItem("survey-task-lead-theme-fr"),\n\tgroupEN = sessionStorage.getItem("survey-task-grouping-en"),\n\tgroupFR = sessionStorage.getItem("survey-task-grouping-fr"),\n\ttaskEN = sessionStorage.getItem("survey-task-description-en"),\n\ttaskFR = sessionStorage.getItem("survey-task-description-fr"),\n\ttask2EN = sessionStorage.getItem("survey-task2-description-en"),\n\ttask2FR = sessionStorage.getItem("survey-task2-description-fr"),\t  \n\tq1EN = sessionStorage.getItem("survey-q1-en"),\n\tq1FR = sessionStorage.getItem("survey-q1-fr"),\n\tq2EN = sessionStorage.getItem("survey-q2-en"),\n\tq2FR = sessionStorage.getItem("survey-q2-fr"),\n\tq3EN, q3FR, q4EN, q4FR, q5EN, q5FR, q6EN, q6FR, q7EN, q7FR, q8EN, q8FR;\n\tif(sessionStorage.getItem("survey-q3-en"))\n\t{\n\t\tq3EN = sessionStorage.getItem("survey-q3-en");\n\t\tq3FR = sessionStorage.getItem("survey-q3-fr");\n\t}\n\telse \n\t{\n\t\tq3EN = "N/A";\n\t\tq3FR = "S/O";\n\t}    \n\tif(sessionStorage.getItem("survey-q4-en"))\n\t{\n\t\tq4EN = sessionStorage.getItem("survey-q4-en");\n\t\tq4FR = sessionStorage.getItem("survey-q4-fr");\n\t}\n\telse \n\t{\n\t\tq4EN = "N/A";\n\t\tq4FR = "S/O";\n\t}\n\t\tif(sessionStorage.getItem("survey-q5-en"))\n\t{\n\t\tq5EN = sessionStorage.getItem("survey-q5-en");\n\t\tq5FR = sessionStorage.getItem("survey-q5-fr");\n\t}\n\telse \n\t{\n\t\tq5EN = "N/A";\n\t\tq5FR = "S/O";\n\t}\n\t\tif(sessionStorage.getItem("survey-q6-en"))\n\t{\n\t\tq6EN = sessionStorage.getItem("survey-q6-en");\n\t\tq6FR = sessionStorage.getItem("survey-q6-fr");\n\t}\n\telse \n\t{\n\t\tq6EN = "N/A";\n\t\tq6FR = "S/O";\n\t}\n\t\tif(sessionStorage.getItem("survey-q7-en"))\n\t{\n\t\tq7EN = sessionStorage.getItem("survey-q7-en");\n      \tq7FR = sessionStorage.getItem("survey-q7-fr");\n    }\n    else \n    {\n       \tq7EN = "N/A";\n       \tq7FR = "S/O";\n    }\n  \tif(sessionStorage.getItem("survey-q8-en"))\n    {\n  \t\tq8EN = sessionStorage.getItem("survey-q8-en");\n      \tq8FR = sessionStorage.getItem("survey-q8-fr");\n    }\n    else \n    {\n       \tq8EN = "N/A";\n       \tq8FR = "S/O";\n    }\n  \n\t//v96\n\tvar srvsrc = sessionStorage.getItem("survey-srvsrc");\n\n\t//if superq survey, set evar 91 and 94, else set evar 92 and 95\n\tif (sessionStorage.getItem("survey-suprq"))\n\t{\n\t\tvar suprqSurveyAnswer = q1EN + ";" + q2EN + ";" + q3EN + ";" + q4EN + ";" + q5EN + ";" + q6EN + ";" + q7EN + ";" + q8EN;\n\t\tvar suprqSurveyAnswerFr = q1FR + ";" + q2FR + ";" + q3FR + ";" + q4FR + ";" + q5FR + ";" + q6FR + ";" + q7FR + ";" + q8FR;\n\t\t_satellite.setVar(\'jsSuprQ\', suprqSurveyAnswer);//evar91\n\t\t_satellite.setVar(\'jsSuprQFr\', suprqSurveyAnswerFr);//evar94        \n\t}\n\telse\n\t{\n\t\tvar exitSurveyAnswer = q1EN + ";" + q2EN + ";" + q3EN + ";" + q4EN + ";" + q5EN + ";" + q6EN + ";" + q7EN;\n\t\tvar exitSurveyAnswerFr = q1FR + ";" + q2FR + ";" + q3FR + ";" + q4FR + ";" + q5FR + ";" + q6FR + ";" + q7FR;\n\t\t_satellite.setVar(\'jsExitSurvey\', exitSurveyAnswer);//evar92\n\t\t_satellite.setVar(\'jsExitSurveyFr\', exitSurveyAnswerFr);//evar95\n\t}  \n\t\t\n\t\t\n\t\n\t//check to see if theme is null or undefinned  and task is null or undefined- this will be true if user selected "Other" on category page, and therefore not selected a task\n\t\n\tif ((themeEN == null || themeEN == "undefined") && (taskEN == null || taskEN == "undefined")){themeEN = "Other"; taskEN = "Other - Reason for my visit is not in this list";}\n\tif ((themeFR == null || themeFR == "undefined") && (taskFR == null || taskFR == "undefined")){themeFR = "Autre"; taskFR = "Autre - La raison de ma visite n\'est pas sur cette liste";}\n\t\n\t\n\tvar aValuesEN;\n\t//if task 2 is undefined or null, do not use it, else use it.\n\tif (task2EN == null || task2EN == "undefinded")\n\t{\t\t\n\t\taValuesEN = [instEN, themeEN, groupEN, taskEN ];\n\t}\n\telse \n\t{\n\t\taValuesEN = [instEN, themeEN, groupEN, task2EN ];\n\t}\n\tvar aValuesFR;\n\t//if task2 FR is undefined or null, do not use it, is so, use it. \n\tif (task2FR == null || task2FR == "undefinded")\n\t{\t\t\n\t\taValuesFR = [instFR, themeFR, groupFR, taskFR];\n\t}\n\telse \n\t{\n\t\taValuesFR = [instFR, themeFR, groupFR, task2FR];\n\t}\n\t  \n\tvar surveyInfoEN = "", surveyInfoFR = "";\n\t//loop through English values and change to "N/A" if null or undefined, and concatenate to : separated string\n\tfor (i = 0; i < aValuesEN.length; i++) \n\t{     \n\t\tif (aValuesEN[i] == null || aValuesEN[i] == "undefined")\n\t\t{\n\t\t\taValuesEN[i] = "N/A";\n\t\t}\t  \n\t\tsurveyInfoEN += aValuesEN[i];\n\t\tif(i != aValuesEN.length - 1)\n\t\t{\n\t\t   surveyInfoEN += \':\'; \n\t\t}\t\t\n\t}\n\t//loop through French values and change to "S/O" if null or undefined, and concatenate to : separated string\n\tfor (i = 0; i < aValuesFR.length; i++) \n\t{\n\t\tif (aValuesFR[i] == null || aValuesFR[i] == "undefined")\n\t\t{\n\t\t\taValuesFR[i] = "S/O";       \n\t\t}\t \n\t\tsurveyInfoFR += aValuesFR[i];\n\t\tif(i != aValuesFR.length - 1)\n\t\t{\n\t\t   surveyInfoFR += \':\'; \n\t\t}\n\t}  \n\t_satellite.setVar(\'jsSurveyTask\', surveyInfoEN);  //evar90  \n\t_satellite.setVar(\'jsSurveyTaskFr\', surveyInfoFR);  //evar93     \t\n\t_satellite.setVar(\'jsAdvancedSampling\', srvsrc);  //evar96',
                  language: 'javascript',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      sessionStorage.getItem('survey-suprq')
                        ? ((t.linkTrackVars += ',eVar91,evar94'),
                          (t.prop7 = 'Standardized Survey Completed / Sondage normalisé terminé'),
                          (t.events += ',event91'),
                          (t.eVar91 = _satellite.getVar('jsSuprQ')),
                          (t.eVar94 = _satellite.getVar('jsSuprQFr')))
                        : ((t.linkTrackVars += ',eVar92,evar95'),
                          (t.prop7 = 'Exit Survey Completed / Sondage de fin de visite terminé'),
                          (t.events += ',event92'),
                          (t.eVar92 = _satellite.getVar('jsExitSurvey')),
                          (t.eVar95 = _satellite.getVar('jsExitSurveyFr'))),
                        (t.linkTrackVars += ',eVar74');
                      var a = sessionStorage.getItem('survey-referrer');
                      t.eVar74 = a;
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar90', type: 'value', value: '%SurveyTask%' },
                      { name: 'eVar93', type: 'value', value: '%SurveyTaskFr%' },
                      { name: 'eVar96', type: 'value', value: '%advancedSampling%' },
                    ],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL2c67dbc7777c4cac8ad99ca1d46a85a7',
            name: 'All Pages | Set Variables | Page Bottom | 90 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 90 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var a = (s = document.location.hostname + document.location.pathname).length,
                        n = /^((?:.*?\/){1,3})(.*\/)?(.*)/.exec(s);
                      (t.eVar22 = s.substring(a - 255, a)),
                        (t.prop22 = s.substring(a - 100, a)),
                        (t.eVar23 =
                          null !== n && 'undefined' != typeof n[2] ? n[2] : 'blank folder'),
                        (t.eVar24 =
                          null !== n && 'undefined' != typeof n[3] ? n[3] : 'blank filename'),
                        ('undefined' != typeof t.eVar4 && null != t.eVar4) ||
                          (t.eVar4 = _satellite.getVar('DefaultValue-DeviceType')),
                        ('undefined' != typeof t.prop7 && null != t.prop7) ||
                          (t.prop7 = 'D="Page: "+pageName'),
                        t.pageName && t.getPageLoadTime(),
                        t._pltPreviousPage && (t.eVar9 = t._pltLoadTime);
                      var r = t._pltLoadTime,
                        s = _satellite.getVar('contentAge');
                      (a =
                        document.getElementById('wb-land') ||
                        document.querySelector('[data-gc-analytics="search-recherche"] h2')),
                        (n = _satellite.getVar('SearchResults')),
                        s && (t.products = t.apl(t.products, ';;;;event12=' + s)),
                        r && (t.products = t.apl(t.products, ';;;;event9=' + r)),
                        a && (t.products = t.apl(t.products, ';;;;event52=' + n));
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar1', type: 'value', value: '%LocalDay%' },
                      { name: 'eVar2', type: 'value', value: '%LocalHour%' },
                      { name: 'eVar5', type: 'value', value: '%PageLanguage%' },
                      { name: 'eVar11', type: 'value', value: 'D=pageName' },
                      { name: 'eVar12', type: 'value', value: 'D=g' },
                      { name: 'eVar15', type: 'value', value: '%PageCreator%' },
                      { name: 'eVar16', type: 'value', value: '%PageTheme-PageLanguage%' },
                      { name: 'eVar21', type: 'value', value: '%PageIssuedDate%' },
                      { name: 'eVar25', type: 'value', value: '%PageType%' },
                      { name: 'eVar39', type: 'value', value: '%queryString%' },
                      { name: 'eVar65', type: 'value', value: '%AppName%' },
                      { name: 'eVar66', type: 'value', value: '%LoginStatus%' },
                      { name: 'eVar74', type: 'value', value: '%DebugData%' },
                      { name: 'eVar75', type: 'value', value: '%LibraryVersion%' },
                    ],
                    props: [
                      { name: 'prop1', type: 'alias', value: 'eVar1' },
                      { name: 'prop2', type: 'alias', value: 'eVar2' },
                      { name: 'prop4', type: 'alias', value: 'eVar4' },
                      { name: 'prop5', type: 'alias', value: 'eVar5' },
                      { name: 'prop11', type: 'value', value: 'D=pageName' },
                      { name: 'prop12', type: 'value', value: 'D=g' },
                      { name: 'prop15', type: 'alias', value: 'eVar15' },
                      { name: 'prop16', type: 'alias', value: 'eVar16' },
                      { name: 'prop21', type: 'alias', value: 'eVar21' },
                      { name: 'prop23', type: 'alias', value: 'eVar23' },
                      { name: 'prop24', type: 'alias', value: 'eVar24' },
                      { name: 'prop25', type: 'alias', value: 'eVar25' },
                      { name: 'prop26', type: 'alias', value: 'eVar26' },
                      { name: 'prop39', type: 'alias', value: 'eVar39' },
                      { name: 'prop65', type: 'alias', value: 'eVar65' },
                      { name: 'prop66', type: 'alias', value: 'eVar66' },
                      { name: 'prop75', type: 'alias', value: 'eVar75' },
                    ],
                    events: [{ name: 'event11' }, { name: 'event12' }, { name: 'event9' }],
                    server: '%hostname%',
                    pageURL: '%PageURL%',
                    pageName: '%PageTitle%',
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL5ce8997c9c514831a15978656f8c351a',
            name: 'CarouselClick | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: "div.wb-tabs.carousel-s2 div[role='tabpanel'] a[href]",
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: "div.wb-tabs.carousel-s1 div[role='tabpanel'] a[href]",
                  bubbleFireIfParent: !0,
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
                    var e = jQuery(this).text();
                    return (
                      e.length < 1 && (e = jQuery(this).children('img').attr('alt')),
                      _satellite.setVar('jsMarketingDestination', this.href),
                      _satellite.setVar('jsMarketingTitle', e),
                      _satellite.setVar(
                        'jsMarketingCarouselPosition',
                        'tab' + ($(this).parent().index() + 1)
                      ),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list1 = 'carousel:' + _satellite.getVar('MarketingTitle')),
                        (t.linkTrackVars += ',list1');
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar43', type: 'value', value: '%MarketingTitle%' },
                      { name: 'eVar45', type: 'value', value: 'carousel' },
                      { name: 'eVar46', type: 'value', value: '%MarketingCarouselPosition%' },
                      { name: 'eVar44', type: 'value', value: '%MarketingDestination%' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Carousel: "+v43' }],
                    events: [{ name: 'event42' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%MarketingTitle%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.eVar43 = ''),
                        (t.eVar44 = ''),
                        (t.eVar45 = ''),
                        (t.eVar46 = ''),
                        (t.prop7 = ''),
                        (t.events = t.rfl(t.events, 'event42')),
                        (t.linkTrackVars = t.rfl(t.linkTrackVars, 'list1'));
                    },
                  },
                  trackerProperties: {},
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL8ef17666170e4d3082050a13bf5e603f',
            name: 'CustomTracking | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: '[data-gc-analytics-customclick]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.setVar(
                        'jsCustomClick',
                        this.dataset.gcAnalyticsCustomclick
                          .trim()
                          .replace(/(\r\n\t|\n|\r\t)/gm, '')
                      ),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar100', type: 'value', value: '%CustomClick%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="custom click: "+v100' }],
                    events: [{ name: 'event100' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%CustomClick%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCd38a49840d5a45359b6eefd430cbda2f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL04384e46ce99423a881fc08a43e58c77',
            name: 'Tab Open | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    "div.wb-tabs.wb-tabs-inited > ul[role='tablist'] > li[role='presentation'] > a[role='tab']",
                  bubbleFireIfParent: !0,
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
                    return (
                      !$(this).parent().hasClass('active') &&
                      !$(this).parent().parent().parent().hasClass('carousel-s2') &&
                      (_satellite.setVar(
                        'jsTabTitle',
                        this.textContent.trim().replace(/(\r\n\t|\n|\r\t)/gm, '')
                      ),
                      !0)
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar37', type: 'value', value: '%TabTitle%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Tab Open: "+v37' }],
                    events: [{ name: 'event29' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC0661f551c4ed427e8c26681a35b495d2-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLd15b179f060a4e1fa9b53258835d1b2a',
            name: 'FollowRSS | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: '.followus a.rss',
                  bubbleFireIfParent: !0,
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
                    if (jQuery(this).hasClass('wb-lbx')) return !1;
                    var e = { rss: 'RSS' },
                      t = $(this).text();
                    return (
                      _satellite.setVar('jsFollowPlatform', e[0] || t),
                      _satellite.setVar('jsLinkHREF', this.href),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar27', type: 'value', value: '%FollowPlatform%' },
                      { name: 'eVar28', type: 'value', value: '%LinkHREF%' },
                      { name: 'eVar72', type: 'alias', value: 'eVar27' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'Social Follow' }],
                    events: [{ name: 'event74' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%LinkHREF%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC24dfb6371c79416b93cac4980420a019-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL03a924f70f4241c2810f2071794f51ee',
            name: 'Internal Campaign Impressions | page bottom | 50 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var a = '',
                        n = function (e) {
                          return e
                            ? (e = e
                                .replace(/\|/g, '/')
                                .replace(/\s+/g, ' ')
                                .replace(/(\r\n\t|\n|\r\t)/gm, '')
                                .trim())
                            : '';
                        },
                        r = document.getElementsByTagName('section'),
                        s = document.querySelectorAll(
                          'a[data-gc-analytics="promo:promotionalfeature"]'
                        );
                      if (
                        !(null !== r && 0 < r.length && null !== s && 0 < s.length) &&
                        null !== r &&
                        0 < r.length
                      )
                        for (var i = 0; i < r.length; i++) {
                          var o = r[i],
                            c = o.className.split(' '),
                            l = !1;
                          for (h = 0; h < c.length; h++)
                            if ('gc-features' == c[h]) {
                              l = !0;
                              break;
                            }
                          if (l)
                            for (var u = o.getElementsByTagName('a'), d = 0; d < u.length; d++)
                              0 < (_ = n(u[d].textContent)).length &&
                                (a += '|contextual feature:' + _);
                        }
                      var m = document.querySelectorAll(
                        'a[data-gc-analytics="promo:promotionalfeature"]'
                      );
                      if (null !== m && 0 !== m.length) {
                        var p = [];
                        for (i = 0; i < m.length; i++) p.push(n(m[i].innerText));
                        a += '|contextual feature:' + p.join('|contextual feature:');
                      }
                      var g = document.getElementsByClassName('gc-prtts');
                      for (i = 0; i < g.length; i++)
                        for (var f = g[i].getElementsByTagName('a'), h = 0; h < f.length; h++) {
                          var v,
                            b = f[h];
                          if (
                            !b.hasAttribute('data-gc-analytics') ||
                            'promo:promotionalfeature' !== b.getAttribute('data-gc-analytics')
                          )
                            for (
                              (v = b.getElementsByTagName('h3')).length ||
                                (v = b.getElementsByTagName('figcaption')),
                                d = 0;
                              d < v.length;
                              d++
                            )
                              0 < (_ = n(v[d].textContent)).length &&
                                (a += '|contextual feature:' + _);
                        }
                      var y = document.getElementsByClassName('gc-nttvs');
                      for (i = 0; i < y.length; i++) {
                        var w = y[i].getElementsByTagName('a');
                        for (h = 0; h < w.length; h++) {
                          var k = w[h].getElementsByTagName('h3');
                          for (d = 0; d < k.length; d++)
                            0 < (_ = n(k[d].textContent)).length && (a += '|goc activity:' + _);
                        }
                      }
                      var S = document.querySelectorAll(
                        'div.carousel-s2 figcaption, div.carousel-s1 figcaption'
                      );
                      if (null !== S && 0 !== S.length) {
                        var C = [];
                        for (i = 0; i < S.length; i++) var _ = C.push(n(S[i].textContent));
                        a += '|carousel:' + C.join('|carousel:');
                      }
                      var P,
                        j = "a[data-gc-analytics='promo:homePageFeature']";
                      if (document.querySelector(j)) {
                        P = j + ':not([class~=hide])';
                        var E =
                          document.querySelector(P + ' figure figcaption') ||
                          document.querySelector(P);
                        E
                          ? (a = a + '|home page feature:' + n(E.innerText))
                          : (window.dtmAsyncTracker = !0);
                      }
                      '' != a &&
                        ((a = a.substr(1, a.length)),
                        null != t.events && 0 < t.events.length
                          ? (t.events += ',event41')
                          : (t.events = 'event41'),
                        (t.list1 = a));
                    },
                  },
                  trackerProperties: {},
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL2d5750471f784a92b4272728a37b8fe7',
            name: 'Follow | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: '.followus a',
                  bubbleFireIfParent: !0,
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
                    if (jQuery(this).hasClass('wb-lbx') || $(this).hasClass('rss')) return !1;
                    for (
                      var e = {
                          facebook: 'Facebook',
                          twitter: 'Twitter',
                          youtube: 'Youtube',
                          instagram: 'Instagram',
                          linkedin: 'LinkedIn',
                          pinterest: 'Pinterest',
                          googleplus: 'Google+',
                          flickr: 'Flickr',
                        },
                        t = $(this).attr('class').split(' '),
                        a = $(this).text(),
                        n = 0;
                      n < t.length;
                      n++
                    )
                      if ('undefined' != typeof e[t[n]]) var r = t[n];
                    return (
                      _satellite.setVar('jsFollowPlatform', e[r] || a),
                      _satellite.setVar('jsLinkHREF', this.href),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar27', type: 'value', value: '%FollowPlatform%' },
                      { name: 'eVar28', type: 'value', value: '%LinkHREF%' },
                      { name: 'eVar72', type: 'alias', value: 'eVar27' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'Social Follow' }],
                    events: [{ name: 'event26' }, { name: 'event74' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%LinkHREF%', linkType: 'e' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCff94a60fe63e4e77a7a3bb5706937ccc-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL0c37e4a2dfe54873a2c7ae07e49cdff5',
            name: 'External Marketing: Campaign Variables | page bottom | 50 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = -1 != document.location.href.indexOf('utm_campaign'),
                      t = -1 != document.location.href.indexOf('utm_source'),
                      a = -1 != document.location.href.indexOf('utm_medium'),
                      n = -1 != document.location.href.indexOf('utm_term'),
                      r = -1 != document.location.href.indexOf('utm_content');
                    return (
                      !!(e || t || a || n || r) &&
                      document.location.href != unescape(_satellite.cookie.get('dtm_gpv_ecu')) &&
                      (_satellite.cookie.set('dtm_gpv_ecu', document.location.href, {
                        expires: 0.0208333,
                      }),
                      !0)
                    );
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar31', type: 'value', value: '%ExtCampaignName%' },
                      { name: 'eVar32', type: 'value', value: '%ExtCampaignSource%' },
                      { name: 'eVar33', type: 'value', value: '%ExtCampaignMedium%' },
                      { name: 'eVar34', type: 'value', value: '%ExtCampaignTerm%' },
                      { name: 'eVar35', type: 'value', value: '%ExtCampaignContent%' },
                      { name: 'eVar86', type: 'value', value: '%AOR-ADVNumber%' },
                      { name: 'eVar87', type: 'value', value: '%AOR-CampaignID%' },
                      { name: 'eVar88', type: 'value', value: '%AOR-SourceID%' },
                      { name: 'eVar89', type: 'value', value: '%AOR-ContentID%' },
                      { name: 'eVar131', type: 'alias', value: 'eVar31' },
                      { name: 'eVar132', type: 'alias', value: 'eVar32' },
                      { name: 'eVar133', type: 'alias', value: 'eVar33' },
                      { name: 'eVar134', type: 'alias', value: 'eVar34' },
                      { name: 'eVar135', type: 'alias', value: 'eVar35' },
                    ],
                    events: [{ name: 'event31' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL1c3c701a79a74ac8b92c393234c8c7c8',
            name: 'AnchorLink | page bottom | 50 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/hash.js',
                settings: { hashes: [{ value: '(#)\\S+', valueIsRegex: !0 }] },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex' },
                  leftOperand: '%PageLoadAnchorLink%',
                  rightOperand: '(wb-land)',
                },
                negate: !0,
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar59', type: 'value', value: '%PageLoadAnchorLink%' }],
                    events: [{ name: 'event59' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL789e759b2df549c1a147eb04ed112ed2',
            name: 'SearchRechercheResultClick | click | 50 | [AA set, send]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: "[data-gc-analytics='search-recherche'] a[data-dtm-srchlnknm]",
                  bubbleFireIfParent: !0,
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
                    var e = this.dataset.dtmSrchlnknm,
                      t = this.href,
                      a = this.href.indexOf('?');
                    return (
                      0 < a && (t = this.href.toString().substring(0, a)),
                      0 < (a = t.indexOf('#')) && (t = t.substring(0, a)),
                      0 < (a = t.lastIndexOf('/')) && (t = t.substring(a + 1)),
                      (t = 0 < (a = t.lastIndexOf('.')) ? t.substring(a + 1) : ''),
                      _satellite.setVar('jsLinkText', jQuery(this).text()),
                      _satellite.setVar('jsLinkHREF', this.href),
                      _satellite.setVar('LinkHREF', this.href.replace(/[\?&]_ga=[^&#]*/gi, '')),
                      null === e || isNaN(e) || _satellite.setVar('jsSearchLinkPosition', e),
                      0 < t.length && _satellite.setVar('jsLinkFileType', t),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var a = _satellite.getVar('SearchLinkPosition');
                      a && !isNaN(a) && (t.products = ';;;;event54=' + a);
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar51', type: 'value', value: '%LinkText%' },
                      { name: 'eVar52', type: 'value', value: '%LinkHREF%' },
                      { name: 'eVar54', type: 'value', value: '%LinkFileType%' },
                      { name: 'eVar53', type: 'value', value: '%SearchLinkPosition%' },
                      { name: 'eVar50', type: 'value', value: '%SearchRechercheTerm%' },
                    ],
                    props: [
                      { name: 'prop7', type: 'value', value: 'D="Search Result Click: "+v51' },
                    ],
                    events: [{ name: 'event51' }, { name: 'event54' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL7ff98e75721a49948023e21bb71e3fc7',
            name: 'Expand-Collapse Open | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'details > summary',
                  bubbleFireIfParent: !0,
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
                    if ($(this).parent().parent().hasClass('row pagedetails')) return !1;
                    if (
                      $(this).parent().parent().parent().parent().hasClass('pagedetails container')
                    )
                      return !1;
                    if ($(this).parent().parent().parent().parent().hasClass('pagedetails'))
                      return !1;
                    if ($(this).parent().parent().parent().hasClass('wb-tabs')) return !1;
                    if ($(this).parent().parent().hasClass('tab-panels')) return !1;
                    if (null !== this.parentNode.getAttribute('open')) return !1;
                    if (
                      /\bwb-menu\b/.test(
                        this.parentNode.parentNode.parentNode.parentNode.className
                      )
                    )
                      return !1;
                    if (!$(this).is(':visible')) return !1;
                    var e = $(this).attr('data-gc-analytics-mt');
                    return (
                      typeof e != typeof undefined &&
                        !1 !== e &&
                        _satellite.setVar('jsMandateTrackerExpand-Collapse', e),
                      _satellite.setVar(
                        'jsExpand-CollapseTitle',
                        $(this)
                          .text()
                          .trim()
                          .replace(/(\r\n\t|\n|\r\t)/gm, '')
                      ),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar38', type: 'value', value: '%Expand-CollapseTitle%' },
                      { name: 'eVar77', type: 'value', value: '%MandateTrackerExpand-Collapse%' },
                    ],
                    props: [
                      { name: 'prop7', type: 'value', value: 'D="Expand-Collapse Open: "+v38' },
                    ],
                    events: [{ name: 'event30' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCdb589764c99e4159af39e318ab896795-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL55753442962d4995ba4cec790d0e34a5',
            name: 'Search Link Setup | page bottom | 50 | [CC]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('search parameter q | url'),
                      t = _satellite.getVar('search parameter allq | url'),
                      a = _satellite.getVar('search parameter exctq | url'),
                      n = _satellite.getVar('search parameter anyq | url'),
                      r = _satellite.getVar('search parameter noneq | url'),
                      s = document.querySelector('div[data-analytics-id="squery"]');
                    if ((e || t || a || n || r) && null !== s) return !0;
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'var resultID = getUrlParameter(\'idx\'); \n\n/*Lucas 01.14.20 - added this if statement as the new search-recherche.gc.ca uses a different query \nstring paramter\n*/\nif (!resultID || isNaN(resultID))\n{\n  resultID = getUrlParameter(\'st1rt\')\n}\n\nif (resultID && !isNaN(resultID)) {\nvar count = Number(resultID) +1;\n//Lucas 01.06.20 - changed line below to include section for new search markup\n//Once the new SERP pages are launched ".result" can be removed and querySelectorAll changed back to getElementByClassName\n//var res = document.getElementsByClassName("result");\n  var res = document.querySelectorAll(".result, .results");\n  \n \nif(res.length > 0){\n  res = res[0];\n  //Lucas 12.11.19 - changed line below to include section for new search markup\n  //Once the new SERP pages are launched "article" can be removed and querySelectorAll changed back to getElementByTagName \n  //res = res.getElementsByTagName("article"); \n  res = res.querySelectorAll("article, section");\n  \n     for(var i=0; i < res.length; i++){\n       \n      var l = res[i].getElementsByTagName("a");\n      if(l.length > 0){\n        //Lucas 01.14.20 - added for loop as new SERP markup may have an additional link within the search result\n        for(var v=0; v < l.length; v++){\n        l[v].setAttribute("data-dtm-srchlnknm",count);\n        }\n      }\n      count++;\n    }\n  \n}\n\n}\n\n\n/*\nSource: https://davidwalsh.name/query-string-javascript\n*/\nfunction getUrlParameter(name) {\n  var serpResultUrl = document.querySelector(\'div[data-analytics-id="squery"] li.active a\');\n  var serpHref = serpResultUrl?serpResultUrl.getAttribute("href"):"";\n  var serpchSt = serpHref.replace(/^([^?]+)/g, \'\');\n    name = name.replace(/[\\[]/, \'\\\\[\').replace(/[\\]]/, \'\\\\]\');\n    var regex = new RegExp(\'[\\\\?&]\' + name + \'=([^&#]*)\');\n    var results = regex.exec(serpchSt);\n    return results === null ? \'\' : decodeURIComponent(results[1].replace(/\\+/g, \' \'));\n\n  }\n\n',
                  language: 'javascript',
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLef99875fadb24549816f4a4554fb61b1',
            name: 'Features/Contextual Featuress | click | 40 | [AA set, send, clear]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  bubbleStop: !0,
                  anchorDelay: 100,
                  elementSelector: '.gc-prtts .row a[href]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 40,
              },
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  bubbleStop: !0,
                  anchorDelay: 100,
                  elementSelector: ' a[data-gc-analytics="promo:promotionalfeature"] ',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 40,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e,
                      t = $(this).find('figcaption');
                    return (
                      (e =
                        null !== t && 0 < t.length
                          ? $(this)
                              .find('figcaption')
                              .text()
                              .trim()
                              .replace(/(\r\n\t|\n|\r\t)/gm, '')
                          : $(this)
                              .text()
                              .trim()
                              .replace(/(\r\n\t|\n|\r\t)/gm, '')),
                      _satellite.setVar('jsMarketingDestination', jQuery(this)[0].href),
                      _satellite.setVar('jsMarketingTitle', e),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list1 = 'contextual feature:' + _satellite.getVar('MarketingTitle')),
                        (t.linkTrackVars += ',list1');
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar43', type: 'value', value: '%MarketingTitle%' },
                      { name: 'eVar44', type: 'value', value: '%MarketingDestination%' },
                      { name: 'eVar45', type: 'value', value: 'contextual feature' },
                    ],
                    props: [
                      { name: 'prop7', type: 'value', value: 'D="contextual feature: "+v43' },
                    ],
                    events: [{ name: 'event42' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%MarketingTitle%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.eVar43 = ''),
                        (t.eVar44 = ''),
                        (t.eVar45 = ''),
                        (t.prop7 = ''),
                        (t.events = t.rfl(t.events, 'event42')),
                        (t.linkTrackVars = t.rfl(t.linkTrackVars, 'list1'));
                    },
                  },
                  trackerProperties: {},
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLac1d4f0fdd5e49d1b0722ed511be9aeb',
            name: 'Invitation Manager | page bottom | 50 | [CC]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      'canada-prod-aem62s3.adobecqms.net' != document.location.hostname &&
                      'canada-qa-aem62s3.adobecqms.net' != document.location.hostname &&
                      'canada-dev-aem62s3.adobecqms.net' != document.location.hostname &&
                      'dev1.canada.ca' != document.location.hostname &&
                      'www1.canada.ca' != document.location.hostname
                    );
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '//***************************************************\n/*****\n\n\n-----------------------\nInvitation Manager v1.0-----------------------\n\nDependencies on _satellite object\n\t*\t_satellite.gcCustom (adds new functions to this object)\n\t*\t_satellite.browserInfo.browser\n\t*\t_satellite.getVar("PageTheme-PageLanguage")\n\t*\t_satellite.getVar("PageCreator")\n\t*\t_satellite.getVar("ErrorPageType")-\n\n\nDependencies on s_c_il[1] object\n\t*\ts_c_il[1].eVar4\n\n*****/\n//***************************************************\n\n\n_satellite.gcCustom.storage = {\n    set : function(n, v, e) {\n        var o = {val: v, t: new Date().getTime() + e*86400}\n        var t = (e === 0) ? sessionStorage : localStorage;\n        t.setItem(n, JSON.stringify(o));\n    },\n    get : function (n) {\n        var b = sessionStorage.getItem(n);\n        if (b != null)\n            return JSON.parse(b).val;\n        else\n            b = localStorage.getItem(n);\n        if (b != null) {\n            var c = JSON.parse(b);\n            if (c.t > new Date().getTime())\n                return c.val;\n        }\n        return null;\n    },\n    remove : function (n) {\n        sessionStorage.removeItem(n);\n        localStorage.removeItem(n);\n    }\n}\n\nwindow.addEventListener( "load", imSetup);\n\nfunction imSetup() {\n"use strict";\n\n//document each variables purpose\n\nvar debugMode, //if true, log console info\n    surveyDB, //JSON var of data stored in im.xml \n    surveyScope, //string of what survey page, institution, theme...\n    overrideScope = false,  //query parameter sets this to a text value to force the scope hat\n    overrideStart = false,  //query parameter sets this to true to ignore the start date of surveys\n    overrideID, //query parameter sets this to an id value for a specific survey\n    dtmSettings = { \n        \n        //page types that im.xml is not allowed ( = false) to run on\n        enablePages : {\n            404 : false, \n            500 : false, \n            403 : false, \n            splash : false\n        },\n        \n        //name of local or session storage values\n        storageNames : {\n            persistent : "im-invited",\n            session : "im-settings"\n        },\n        \n        //location of im.xml\n        dbURL : "/content/dam/canada/json/im.xml"\n    };\ntry {\n    //\tTest if local storage is available/enabled before starting\n    var mod = "test";\n    localStorage.setItem(mod, mod);\n    localStorage.removeItem(mod);\n    main();\n} catch (e) {\n    return false;\n}\n\n\nfunction main() {\n    \n    //Enable console logging if debug mode is turned on\n    debugMode = checkEnableDebugMode();\n    \n    clog("Start");\n    \n    //Make sure IM is allowed to run on this page type\n    if (checkPageTypeAllowed() === false)\n        return;\n    \n    //check if any special parameters are used for testing reasons\n    checkTestParams();\n\n    //if user has not seen a survey\n     if (localStorage.getItem(\'lastDateIMShown\') === null) {\n        \n        //check if DB is already in session storage\n        surveyDB = _satellite.gcCustom.storage.get(dtmSettings.storageNames.session)\n        \n        //download the DB if it\'s not already stored\n        if (surveyDB == null){\n            downloadSurveyDB();\n            //asynchronous call, do not execute code here\n        }\n        else{\n            main2();\n        }\n    }\n    else {\n        clog("User has seen an invitation already");\n          \n        \n        //\tInvitation was not within the last 15 days...\n        surveyDB = _satellite.gcCustom.storage.get(dtmSettings.storageNames.session);\n        var lastDateIMShown;\n        if (localStorage.getItem(\'lastDateIMShown\') !== null) {\n            lastDateIMShown = new Date(localStorage.getItem(\'lastDateIMShown\'));\n        }\n\n        if (isStorageExpired(lastDateIMShown)) {\n            _satellite.gcCustom.storage.remove(\'lastDateIMShown\');\n            main2();\n        }\n        \n     // clog( "persistent IM duration: " + _satellite.gcCustom.storage.get(dtmSettings.storageNames.session.settings.persistent_cookie_duration));\n    }\n    \n    //asynchronous call may have been made, do not execute code here\n}\n\nfunction main2() {\n    //\tMakes sure that the surveyDB object is set, it could not have been defined if localStorage was not defined and the XML is unfound on the server\n    /*\tTo test v.settings is undefined\n    if (!surveyDB) {\n        return;\n    }*/\n    \n    //at this point, we don\'t know if the DB was just downloaded or if it was retrieved from session storage.\n    //If the DB doesn\'t have a scopeHat then we know we need to decide on which scope hat to give\n    if (typeof surveyDB.settings.scopeHat === "undefined"){\n        firstTimeSetup();\n    }\n\n    //Check if we need to override the scope hat\n    //This is needed since firstTimeSetup won\'t run if this is not the first page of the visit\n    if (overrideScope){\n        surveyDB.settings.scopeHat = overrideScope;\n    }\n\n    surveyScope = surveyDB.settings.scopeHat;\n    \n    clog("Scope hat = " + surveyScope + ", " + surveyDB.surveys.length + " potential surveys, removing surveys outside of date range");\n    \n    // Delete all surveys that are outside of working dates\n    var list = surveyDB.surveys;\n    for (var i = 0; i < list.length; i++) {\n        var n = new Date().getTime();\n        if (n < new Date(list[i].start_date_time).getTime() || n >= new Date(list[i].end_date_time).getTime()) {\n            \n            //if overriding start date and still before end date then don\'t delete this survey\n            if (overrideStart && n < new Date(list[i].end_date_time).getTime())\n                continue;\n            \n            //Splice removes the element from the array\n            list.splice(i,1);\n            //decrement i since the next record has moved to replace the current record\n            i--;\n        }\n    }\n    \n    clog(surveyDB.surveys.length + " potential surveys, removing surveys based on targeting");\n    \n    // Delete all surveys that don\'t match browser and/or device type\n    var list = surveyDB.surveys;\n    \n    for (var i = 0; i < list.length; i++) {\n        \n        var b = true;\n        \n        //avoid_browsers is an array of browser names to avoid the names of the browsers match those reported by _satellite.browserInfo.browser\n        var sublist = getObjArr(list[i].avoid_browsers);\n        for (var j = 0; j < sublist.length; j++)\n            if (_satellite.browserInfo.browser == sublist[j].Value)\n                b = false;\n        \n        //target_device is either non-existant, "Desktop" or "Mobile" which matches the values in eVar 4\n        if (typeof list[i].target_device !== "undefined" && typeof list[i].target_device === "string" && !(s_c_il[1].eVar4.toLowerCase() == list[i].target_device.toLowerCase()) )\n            b = false;\n        \n        //target_language is checked against navigator.language\n        if (typeof list[i].target_language !== "undefined" && typeof list[i].target_language === "string" && !(new RegExp(list[i].target_language, \'i\').test(navigator.language)) )\n            b = false;\n        \n        \n        //if anything caused b to be false, delete the survey from the DB\n        if (b === false) {\n            list.splice(i,1);\n            //decrement i since the next record has moved to replace the current record\n            i--;\n        }\n    }\n    \n    clog(surveyDB.surveys.length + " potential surveys");\n    \n    //save the DB to session storage\n    _satellite.gcCustom.storage.set(dtmSettings.storageNames.session, surveyDB, 0);\n    \n    clog("Checking whitelist");\n    \n    // Check if url on whitelist\n    var list = getObjArr(surveyDB.settings.tbl_url_whitelist), a = document.location, h = a.hostname + a.pathname, didMatch = false;\n    if (typeof list === "undefined")\n        return false;\n\n    for (var i = 0; i < list.length; i++) {\n        var b = new RegExp(list[i].url, "i");\n        if (b.test(h))\n            didMatch = true;\n    }\n    if (didMatch === false)\n        return false;\n    \n    clog("Checking blacklist");\n    \n    //Check if url on blacklist\n    var list = getObjArr(surveyDB.settings.tbl_url_blacklist), a = document.location, h = a.hostname + a.pathname;\n    for (var i = 0; i < list.length; i++) {\n        if (list[i].url.toLowerCase() == h.toLowerCase())\n            return false;\n    }\n    \n    clog("Removing surveys based on page attributes");\n    \n    //make a deep copy of the survey DB before we remove the applicable surveys \n    //this is needed because getPageAttributeMatches will delete any surveys that match from the surveyDB list\n    var cpySurveys = JSON.parse(JSON.stringify(surveyDB.surveys));\n    \n    //b will be the index of a survey in cpySurveys that was chosen otherwise it will be undefined if no survey was selected\n    var b = getWeightedRandom(getPageAttributeMatches());\n\n    /*console.dir(cpySurveys)\n        console.dir(surveyDB)*/\n        \n    if (typeof b !== "undefined") {\n\n        for (var j = 0; j < cpySurveys.length; j++) {\n            if(cpySurveys[j].id === b){\n            var selectedSurveyIndex = j;\n            break;\n\n            }\n        }\n        \n        clog("Select survey " + cpySurveys[selectedSurveyIndex].survey_name);\n        \n        //assume that the visitor will ignore the survey. This way no more invitations for X days\n        //\t_satellite.gcCustom.storage.set( dtmSettings.storageNames.persistent, "ignored", surveyDB.settings.persistent_cookie_duration );\n\n\n      //Show survey only if user hasn\'t seen it last 15 days\n        var lastDateIMShown;\n        var now = new Date();\n        \n        if (localStorage.getItem(\'lastDateIMShown\') !== null) {\n            lastDateIMShown = new Date(localStorage.getItem(\'lastDateIMShown\'));\n        }\n\n    //\tPersistent cookie duration is the number of days of minimal interval between 2 surveys\n        if (!isStorageExpired(lastDateIMShown)) {\n               //popup the survey\n            invite(cpySurveys[selectedSurveyIndex]);\n            //set the date visitor was invited\n            localStorage.setItem(\'lastDateIMShown\', now);\n        }\n\n          //end 15 days conditions\n\n\n        //\tpopup the survey\n        //\tinvite(cpySurveys[b]);\n    }\n    else {\n        clog("No survey selected, " + surveyDB.surveys.length + " surveys remain in session storage");\n        //save the updated DB to session storage\n        //the DB must be saved here since we need to remove surveys that were applicable on this page so we don\'t test for them again in the visit\n        _satellite.gcCustom.storage.set(dtmSettings.storageNames.session, surveyDB, 0);\n    }\n\n}\n\nfunction getPageAttributeMatches() {\n\n    //Return list of valid surveys based on page / institution / theme / site and check if override survey id needed\n    //Remove surveys that are valid from the surveyDB array so that when we save it, those ones are removed and not tested on future pages in the visit\n    \nvar surveySubList = {};\n    var url = (document.location.hostname + document.location.pathname).toLowerCase();\n    var count = 0;\n    \n    for (var i = 0; i < surveyDB.surveys.length; i++) {\n        if (overrideID) {\n                //skip this loop\'s logic if it\'s not the desired survey, therefore there\'s no chance it will be selected\n            if (surveyDB.surveys[i].id !== overrideID){\n            \n                continue;\n            }  \n\n            //if it is the desired survey, set it\'s probability to 100%. Note that the desired survey must still be applicable on this page so the logic in the swtich statement still must execute meet the conditions\n            surveyDB.surveys[i].probability = 1;\n        }\n\n        \n        switch(surveyDB.surveys[i].type) {\n            case "Entire site":\n            \n                //get an object array of the sites to run the survey on\n                var sublist = getObjArr(surveyDB.surveys[i].tbl_survey_sites);\n                \n                for (var c = 0; c < sublist.length; c++) {\n                    \n                    //convert the value for the site into RegExp non-case sensitive\n                    var b = new RegExp(sublist[c].site, "i");\n                    \n                    //if the url matches the regEx\n                    if (b.test(url)) {\n                        \n                        //store this survey\'s id and probability in the new object (this object is later fed to getWeightedRandom)\n                        //convert site survey probability into rate since it is between 0 and Visitor Allocation for site wide type\n                    \n                        surveySubList[surveyDB.surveys[i].id] = surveyDB.surveys[i].probability / surveyDB.settings.Site;\n                        //keep track of the number of surveys that apply so we can console log it later\n                        count++;\n\n                        //clog(surveyDB.surveys[i].survey_name + " " + surveyDB.surveys[i].probability + " out of " + surveyDB.settings.Site)\n                        \n                        //remove this survey from the DB, since we won\'t test for it on future pages\n                        surveyDB.surveys.splice(i,1);\n                        \n                        //decrement i since the next record has moved to replace the current record\n                        i--;\n                    }\n                }\n                \n                break;\n                \n            case "Theme":\n                var sublist = getObjArr(surveyDB.surveys[i].tbl_survey_themes);\n                for (var c = 0; c < sublist.length; c++) {\n                    if (_satellite.getVar("PageTheme-PageLanguage").toLowerCase() == sublist[c].theme.toLowerCase()) {\n                //\t\t\n          surveySubList[surveyDB.surveys[i].id] = surveyDB.surveys[i].probability;\n                        count++;\n                        \n                        //remove the eligible survey from the DB, since we won\'t test for it on future pages\n                        surveyDB.surveys.splice(i,1);\n                        //decrement i since the next record has moved to replace the current record\n                        i--;\n                    }\n                }\n                \n                break;\n                \n            case "Institution":\n                var sublist = getObjArr(surveyDB.surveys[i].tbl_survey_institutions);\n                for (var c = 0; c < sublist.length; c++) {\n                    if (_satellite.getVar("PageCreator").toLowerCase().indexOf(sublist[c].institution.toLowerCase()) === 0) {\n                    \n          surveySubList[surveyDB.surveys[i].id] = surveyDB.surveys[i].probability;\n                        count++;\n                        \n                        //remove the eligible survey from the DB, since we won\'t test for it on future pages\n                        surveyDB.surveys.splice(i,1);\n                        //decrement i since the next record has moved to replace the current record\n                        i--;\n                    }\n                }\n                \n                break;\n                \n            case "Page":\n                var sublist = getObjArr(surveyDB.surveys[i].tbl_survey_urls);\n                for (var c = 0; c < sublist.length; c++) {\n                    if (window.location.href.toLowerCase().indexOf(sublist[c].url.toLowerCase()) !== -1) {\n                    \n         surveySubList[surveyDB.surveys[i].id] = surveyDB.surveys[i].probability;\n                        count++;\n                        \n                        //remove the eligible survey from the DB, since we won\'t test for it on future pages\n                        surveyDB.surveys.splice(i,1);\n                        //decrement i since the next record has moved to replace the current record\n                        i--;\n                    }\n                }\n                \n                break;\n        }\n                \n        \n    }\n    clog(count + " potential surveys, selecting a survey");\n\n    return surveySubList;\n}\n\n\nfunction firstTimeSetup() {\n    //Objectives\n    //Allocate a scope hat\n    //Remove surveys that don\'t match the scope hat\n    \n    //tmpSurveyDB is where we will copy all of the wanted data from surveyDB into (this removes non applicable scope surveys)\n    var tmpSurveyDB = {settings : {}, surveys : []}\n    \n    clog("Rolling probability for scope hat");\n    \n    if (overrideScope)\n        surveyScope = overrideScope;\n    else\n        surveyScope = getWeightedRandom({"Page":surveyDB.settings.Page, "Institution":surveyDB.settings.Institution, "Theme":surveyDB.settings.Theme, "Entire site":surveyDB.settings.Site});\n\n    \n    //get an object array of all surveys in the DB\n    var list = getObjArr(surveyDB.qry_active_surveys);\n\n    clog(list.length + " potential surveys, removing surveys that don\'t match scope hat");\n\n    for (var i = 0; i < list.length; i++) {\n        \n        //Get only surveys that apply to this scope\n        if (list[i].type == surveyScope) {\n            \n            //copy good surveys tmpSurveyDB\n            tmpSurveyDB.surveys[tmpSurveyDB.surveys.length] = list[i];\n        }\n    }\n    \n    //put all the needed settings into tmpSurveyDB\n    tmpSurveyDB.settings.Site = surveyDB.settings.Site;\n    tmpSurveyDB.settings.scopeHat = surveyScope;\n    tmpSurveyDB.settings.tbl_url_whitelist = surveyDB.settings.tbl_url_whitelist;\n    tmpSurveyDB.settings.tbl_url_blacklist = surveyDB.settings.tbl_url_blacklist;\n    tmpSurveyDB.settings.persistent_cookie_duration = surveyDB.settings.persistent_cookie_duration;\n    \n    //set surveyDB to tmpSurveyDB so we can be sure that surveyDB is the good variable\n    surveyDB = tmpSurveyDB;\n}\n\nfunction getWeightedRandom(spec) {\n    //Objectives\n        //Given a JSON array of values and probabilities, output the weighted random selection. For example {coffee : 0.20, tea : 0.80}\n        //Output nothing if no selection is made (I.E. undefined)\n    var i, sum=0, r=Math.random();\n    for (i in spec) {\n        \n        //be sure to never select something with 0% probability !, since Math.random() can be 0!\n        if (spec[i] == 0)\n            continue;\n        sum += Number(spec[i]);\n        if (r <= sum)\n            return i;\n    }\n}\n\nfunction saveDbAsJSON(dbData) {\n    //Objectives\n        //Convert dbData into JSON\n        //Set surveyDB to the dataroot node and log the version number\n    var x, c;\n    //clog("saveDbAsJSON()");\n    try{x = $.parseXML(dbData); c = xmlToJson(x)}\n    catch(e){clog("Converting XML to JSON encountered an error: " + e.message);return false}\n\n    surveyDB = c.dataroot;\n    clog("im.xml version: " + x.documentElement.getAttribute("generated"));\n    main2();\n}\n\nfunction downloadSurveyDB() {\n    clog("Downloading survey database")\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.onreadystatechange = function() {\n        if (xmlHttp.readyState == 4) {\n            clog("Download status = " + xmlHttp.statusText);\n            \n            if (xmlHttp.status == 200) {\n                var b = xmlHttp.responseText;\n                if (b && b != "" && typeof(b) != "undefined")\n                    saveDbAsJSON(b.replace(/\\r?\\n|\\r/g, "").replace(/\\\\u[\\dA-F]{4}/gi, function (match) {return String.fromCharCode(parseInt(match.replace(/\\\\u/g, \'\'), 16))}));\n            }\n        }\n    }\n    xmlHttp.open("GET", dtmSettings.dbURL, true); // true for asynchronous \n    xmlHttp.send(null);\n}\n//Take a date object as parameter\nfunction isStorageExpired(storageDate) {\n    var now = new Date();\n    //storageDate = new Date(storageDate);\n//\tPersistent cookie duration is the number of days of minimal interval between 2 surveys\n    if (((now - storageDate) <= (surveyDB.settings.persistent_cookie_duration * 86400000)) || !storageDate || typeof storageDate === "undefined") {\n        return false;\n    }\n    return true;\n}\n\nfunction checkTestParams() {\n    //Objectives\n        //action any special query parameters\n    if  (/[?&]im_nocookiecheck=1/i.test(document.location.search)) {\n        //delete these cookies\n        clog("Treat visitor as new visitor (deleting locally stored data)");\n        _satellite.gcCustom.storage.remove( dtmSettings.storageNames.persistent );\n        _satellite.gcCustom.storage.remove( dtmSettings.storageNames.session );\n          localStorage.removeItem(\'lastDateIMShown\');\n    }\n    \n    if ( (/[?&]im_scope=page/i.test(document.location.search)))\n        overrideScope = "Page";\n    else if ( (/[?&]im_scope=institution/i.test(document.location.search)))\n        overrideScope = "Institution";\n    else if ( (/[?&]im_scope=theme/i.test(document.location.search)))\n        overrideScope = "Theme";\n    else if ( (/[?&]im_scope=site/i.test(document.location.search)))\n        overrideScope = "Entire site";\n    \n    if ( (/[?&]im_nodatecheck=1/i.test(document.location.search)))\n        overrideStart = true;\n    \n    var b = /[?&]im_surveyid=([^?&]+)/.exec(document.location.search);\n    if (b !== null )\n        overrideID = b[1];\n}\n\nfunction checkPageTypeAllowed() {\n    //Objectives\n        //return true if the page type is allowed and false otherwise\n    var b;\n    // 1.\tCheck if splash page\n    if ( $( "body" ).hasClass( "splash" ) ) \n        b = "splash";\n\n    // 2.\tCheck if 404 page\n    //if (_satellite.dataElements["ErrorPageType"].default != _satellite.getVar("ErrorPageType"))\n    if (_satellite.getVar("ErrorPageType") != \'blank error page type\')\n        b = _satellite.getVar("ErrorPageType");\n    \n    if (b != null)\n        return dtmSettings.enablePages[b];\n    \n    return true;\n}\n\nfunction checkEnableDebugMode() {\n    //Objectives\n        //Set the local storage token to remember to log console info\n    if (/[?&]logim=(true|1)/i.test(document.location.search))\n        localStorage.setItem(\'dtm-logim\', 1);\n\n    if (/[?&]logim=(false|0)/i.test(document.location.search))\n        localStorage.removeItem(\'dtm-logim\');\n    \n    return (localStorage.getItem(\'dtm-logim\') == 1);\n}\n\n/**\n* Originally from http://davidwalsh.name/convert-xml-json\n* This is a version that provides a JSON object without the attributes and places textNodes as values\n* rather than an object with the textNode in it.\n* 27/11/2012\n* Ben Chidgey\n*/\nfunction xmlToJson(xml) {\n    //Objectives\n        //Convert XML into JSON\n    \n    // Create the return object\n    var obj = {};\n\n    // text node\n    if (4 === xml.nodeType) {\n        obj = xml.nodeValue;\n    }\n\n    if (xml.hasChildNodes()) {\n        for (var i = 0; i < xml.childNodes.length; i++) {\n            var TEXT_NODE_TYPE_NAME = \'#text\',\n                item = xml.childNodes.item(i),\n                nodeName = item.nodeName,\n                content;\n\n            if (TEXT_NODE_TYPE_NAME === nodeName) {\n                //single textNode or next sibling has a different name\n                if ((null === xml.nextSibling) || (xml.localName !== xml.nextSibling.localName)) {\n                    content = xml.textContent;\n\n                //we have a sibling with the same name\n                } else if (xml.localName === xml.nextSibling.localName) {\n                    //if it is the first node of its parents childNodes, send it back as an array\n                    content = (xml.parentElement.childNodes[0] === xml) ? [xml.textContent] : xml.textContent;\n                }\n                return content;\n            } else {\n                if (\'undefined\' === typeof(obj[nodeName])) {\n                    obj[nodeName] = xmlToJson(item);\n                } else {\n                    if (\'undefined\' === typeof(obj[nodeName].length)) {\n                        var old = obj[nodeName];\n                        obj[nodeName] = [];\n                        obj[nodeName].push(old);\n                    }\n\n                    obj[nodeName].push(xmlToJson(item));\n                }\n            }\n        }\n    }\n    return obj;\n}\n\nfunction invite(survey) {\n    //Objectives\n        //Display the popup given the survey parameters\n\nvar html =  "<aside class=\'survey hidden-print\'>" +\n      "<style scoped>" +\n        // Default (extra extra small view and over)\n        ".survey {z-index: 1000; position: relative; margin: 0 auto; margin: 0 15px;}" +\n        "#survey-close {height: 42px; line-height: 42px;}" +\n        \n        // Media queries (for modern browsers and IE8 - via respond.js)\n        "@media screen and (min-width: 480px) {" + // Extra small view and over\n          ".survey {position: fixed; bottom: 4.9em; left: 0; right: 0; margin: 0 auto; padding: 15px;}" +\n          ".survey .panel {box-shadow: 0 0 15px;}" +\n          ".survey .panel:focus {outline: 1px dotted #fff;}" +\n          "#survey-close {top: 15px; right: 15px;}" +\n        "}" +\n        "@media screen and (min-width: 480px) and (max-width: 767px) {" + // Small view only\n          ".survey {margin: 0 15px;}" +\n          "#survey-close {right: 30px;}" +\n        "}" +\n        "@media screen and (min-width: 768px) {" + // Medium view and over\n          ".survey {width: 720px;}" +\n        "}" +\n        "@media screen and (min-width: 992px) {" +\n          ".survey {width: 470px; left: 470px; bottom: 4.2em;}" + // Large view and over\n        "}" +\n        "@media screen and (min-width: 1200px) {" + // Extra large view and over\n         ".survey {width: 570px; left: 570px;}" +\n        "}" +\n        \n        // View class fallbacks (needed for IE9-11 - they seem to ignore JS-injected media queries unless the user manually resizes their browser window)\n        "html:not(.xxsmallview) .survey {position: fixed; bottom: 4.9em; left: 0; right: 0; margin: 0 auto; padding: 15px;}" +\n        "html:not(.xxsmallview) .survey .panel {box-shadow: 0 0 15px;}" +\n        "html:not(.xxsmallview) .survey .panel:focus {outline: 1px dotted #fff;}" +\n        "html:not(.xxsmallview) #survey-close {top: 15px; right: 15px;}" +\n        "html.xsmallview .survey {margin: 0 15px;}" +\n        "html.smallview .survey {width: 720px;}" +\n        "html.smallview #survey-close {right: 30px;}" +\n        "html.mediumview .survey {width: 470px; left: 470px; bottom: 4.2em;}" +\n        "html.largeview .survey, html.xlargeview .survey {width: 570px; left: 570px; bottom: 4.2em;}" +\n      "</style>" +\n      "<div class=\'panel panel-primary mrgn-bttm-0\'>" +\n        "<header class=\'panel-heading\'>" +\n          "<h2 class=\'panel-title\'>" + survey["title-" + wb.lang] + "</h2>" + \n        "</header>" +\n        "<div class=\'panel-body\'>" +\n        survey["body-" + wb.lang] +\n          /*"<p>" + survey.paragraph1 + "</p>" +\n          "<p class=\'mrgn-bttm-0\'>" + survey.paragraph2 + "</p>" +*/\n          "<ul class=\'list-inline mrgn-bttm-0\'>" +\n            "<li class=\'mrgn-tp-md\'><a id=\'survey-yes\' class=\'btn btn-primary\' href=\'" + survey["link-" + wb.lang] + "\' target=\'_blank\'>" + survey["yes-" + wb.lang] + "</a></li>" +\n            "<li class=\'mrgn-tp-md\'><button id=\'survey-no\' class=\'btn btn-default survey-close\'>" + survey["no-" + wb.lang] + "</button></li>" +\n          "</ul>" +\n        "</div>" +\n        "<button id=\'survey-close\' class=\'mfp-close\' title=" + \'"\' + survey["close-" + wb.lang] + \'"\' + ">\xD7<span class=\'wb-inv\'> " + survey["close-" + wb.lang] + "</span></button>" +\n       "<input type=\'hidden\' name=\'popupName\' value=\'" + survey["uniqueTitle"] + "\'>" +\n  "</div>" +\n    "</aside>",\n$html = $( html ),\n$userFocus,\noverlayIsClosing,\ncookieValue,\nfocusFlag;\n\n// Close the overlay if any of its links/buttons get clicked or if the escape key gets pressed.\n$html.on( "click vclick mouseup keydown", function( e ) {\n\n  // Proceed if any of the overlay\'s links or buttons get clicked (including middle mouse clicks) or if the escape key gets pressed within the overlay.\n  if (\n      ( ( e.type === "click" || e.type === "vclick" ) && e.which === 1 && $( e.target ).closest( "a, button", this ).length ) // Clicked/Tapped a link/button.\n      ||\n      ( e.type === "mouseup" && e.which === 2 && $( e.target ).closest( "a", this ).length ) // Middle-clicked a link.\n      ||\n      ( ( e.type === "keydown" ) && ( e.which === 27 ) ) // Pressed escape key.\n    ) {\n    \n      // Set a flag to indicate the overlay is closing.\n      // Needed to prevent IE11 (possibly also IE8-10/Edge) from failing to return user focus when closing the overlay (due to a separate focusin event triggering too quickly and clearing the user focus variable before it\'s needed).\n      overlayIsClosing = 1;\n      \n      // Hide the overlay immediately.\n      $( this ).hide();\n      \n      // Remove the overlay shortly afterwards.\n      // This is being done to prevent problems when the yes link is middle-clicked. If the overlay were to be immediately removed, middle-clicking the yes link would remove the overlay without opening the link in a new tab/window. To avoid that issue, the overlay is now getting immediately hidden, then removed a short time later.\n      setTimeout( function() { $html.empty() }, 1000 );\n      \n      // Determine the cookie\'s new value, depending on the ID of which link/button was clicked. Don\'t set the cookie\'s value to yes/no if the Esc key was pressed.\n      if ( $( e.target ).closest( "#survey-yes", this ).length && ! ( ( e.type === "keydown" ) && ( e.which === 27 ) ) ) {\n        cookieValue = "yes";\n      }\n      else if ( $( e.target ).closest( "#survey-no", this ).length && ! ( ( e.type === "keydown" ) && ( e.which === 27 ) ) ) {\n        cookieValue = "no";\n      }\n      else {\n        cookieValue = "closed";\n      }\n      \n      // Return the user\'s focus to where they were before the overlay stole it, then delete the user focus variable.\n      // Otherwise, return the user\'s focus to the H1 element (or if it doesn\'t exist - the next element, which is likely to be main). Needed to prevent browsers from unexpectedly returning focus to the top of the page.\n      if ( $userFocus ) {\n        $userFocus.trigger( "setfocus.wb" );\n        $userFocus = null;\n      }\n      else {\n      \n        // Does the H1 exist? If yes, focus to it.\n        // Otherwise, focus to whatever element comes after the overlay (likely main).\n        if ( $( "h1" ).length ) {\n          $( "h1" ).trigger( "setfocus.wb" );\n        }\n        else {\n          $html.next().trigger( "setfocus.wb" );\n        }\n      }\n      \n      // Set cookie.\n     // _satellite.gcCustom.storage.set( dtmSettings.storageNames.persistent, cookieValue, surveyDB.settings.persistent_cookie_duration );\n     // localStorage.setItem(\'lastDateIMShown\', now);\n      // Remove this event handler.\n      $( this ).off();\n  }\n} );\n\n// If the user tabs out of the overlay after it was automatically focused on, return their initial focus.\n$html.find( ".panel" ).on( "keydown", function( e ) {\n  \n  // Proceed if tabbing backwards from the panel container/yes link or if tabbing forward from the close button.\n  if ( ( ( ( $( e.target ).hasClass( "panel" ) || e.target.id === "survey-yes" ) && e.shiftKey) || e.target.id === "survey-close" ) && e.which === 9 && $userFocus ) {\n      \n      // Don\'t focus to whatever comes directly before or after the overlay in the flow of content.\n      e.preventDefault();\n      \n      // Return the user\'s focus to where they were before the overlay stole it, then delete the user focus variable.\n      $userFocus.trigger( "setfocus.wb" );\n      $userFocus = null;\n      \n      // Remove this event handler.\n      $( this ).off( "keydown" );\n    }\n} );\n\n// Insert the overlay directly before the <main> element.\n$( "main" ).before( $html );\n\n\n//pop-up impression for analytics\n   \n    //If the pop-up appears  \n    if($(\'aside.survey.hidden-print\').length){\n                var popUpName = $("input[name=\'popupName\']").val();\n                   \n   _satellite.setVar(\'jsPopupName\', popUpName);\n //direct call rule\n _satellite.track(\'popUpImpression\');\n          \n               }\n    \n    //End pop-up impression code\n\n// Find where the user is currently focused.\n$userFocus = $( document.activeElement );\n\n// Automatically focus on the overlay.\n$html.find( ".panel" ).trigger( "setfocus.wb" );\n\n// After the overlay steals focus, clear the user focus variable if the user goes outside of of it.\n// It\'s possible to go outside of the overlay without closing or tabbing out of it (e.g. by clicking or touching outside of it or using a screen reader to navigate by links). In that scenario, the user focus variable needs to be cleared to prevent strange focusing if the user enters the overlay again afterwards and focuses out of/closes it.\n$( "body" ).on( "focusin mousedown", function ( e ) {\n\n  // When the survey overlay first gains focus, set the focus flag variable to 1. Sometimes the overlay isn\'t the first thing that gains focus.\n  // After the overlay has initially gained focus, once something outside of it gets focused on, clear the user focus variable. If the overlay is losing focus because it\'s being closed, don\'t do anything or else IE11 (possibly also IE8-10/Edge) will run this event handler too early and prevent the close event from returning user\'s focus to the right spot.\n  if ( $( e.target ).closest( ".survey", this ).length ) {\n    \n    if ( ! focusFlag ) {\n      focusFlag = 1;\n    }\n  }\n  else {\n  \n    if ( ! overlayIsClosing && $userFocus ) {\n      $userFocus = null;\n    }\n  }\n} );\n}\n\nfunction getObjArr(o){\n    //Objectives\n        //Always return an object array containing the given parameter. This allows us to loop through the object array whether there are 0, 1 or more objects in the array\n    return (typeof o === "undefined") ? [] : Array.isArray(o) ? o : [o];\n}\n\nfunction clog(a) {\n    //Objectives\n        //log console data if debug mode is enabled\n    if (debugMode) \n        console.log("Invitation Mgr: " + a);\n    }\n}\n\n\n',
                  language: 'javascript',
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLf53418d26f9f485987937c392bae7963',
            name: 'All Pages | set previous page values | Library Loaded | 50 | [AA set, CC]',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar13',
                        type: 'value',
                        value: '%Page | previous page name | cookie%',
                      },
                      {
                        name: 'eVar17',
                        type: 'value',
                        value: '%Page | previous page creator| cookie%',
                      },
                      { name: 'eVar18', type: 'value', value: '%Page | previous theme | cookie%' },
                      { name: 'eVar19', type: 'value', value: '%DocumentReferrer%' },
                      {
                        name: 'eVar40',
                        type: 'value',
                        value: '%Page | previous query string | cookie%',
                      },
                    ],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLdb3703e674c94c8db2d37cc03cf3939f',
            name: 'Find what you were looking for-Submit | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'form button[data-gc-analytics-wtph-submit]',
                  bubbleFireIfParent: !0,
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
                    var e,
                      t = this.form.querySelectorAll('[data-gc-analytics-collect="notPrivate"]'),
                      l = [],
                      a = function (e) {
                        e = e || {};
                        var t,
                          a = this.nodeName,
                          n = e.mp,
                          r = e.edg,
                          s = e.vl || '';
                        switch (((n = n || []), a)) {
                          case 'INPUT':
                            var i = this.type || 'text',
                              o = this.checked,
                              c = 'checkbox' === i;
                            (t = this.value || s),
                              o &&
                                c &&
                                !this.dataset.gcAnalyticsEdge &&
                                !r &&
                                ((fieldName = t.replace(/^\d(@)/, '')), (t = 'checked')),
                              (o || (!c && 'radio' !== i)) && l.push(n[t] || t);
                        }
                      };
                    return (
                      t.forEach(function (e) {
                        a.call(e);
                      }),
                      (e = l
                        .join('|')
                        .trim()
                        .replace(/(\r\n\t|\n|\r\t)/gm, '')),
                      _satellite.setVar('jsWTPHList', e),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: { source: function () {} },
                  trackerProperties: {
                    eVars: [{ name: 'eVar80', type: 'value', value: '%WTPHList%' }],
                    props: [
                      {
                        name: 'prop7',
                        type: 'value',
                        value:
                          'What was wrong? | Qu\u2019est-ce qui n\u2019allait pas? - Submit click',
                      },
                    ],
                    events: [{ name: 'event85' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName:
                    'What was wrong? | Qu\u2019est-ce qui n\u2019allait pas? - Submit click',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC360057a4c8034e119016a4fea3084abe-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLf4bbd75c1dab43258d505feeccb8c136',
            name: 'NavigationMenuInitiate | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    "header nav:not([property=breadcrumb]) button[aria-expanded = 'false']",
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop7', type: 'value', value: 'Navigation Menu Initiate' }],
                    events: [{ name: 'event69' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC30c21514239f4e23bc043e5894018685-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLf727c142e4604c25af7c1ecbf5f5844e',
            name: 'Email Link | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  elementProperties: [{ name: 'href', value: '^mailto', valueIsRegex: !0 }],
                  bubbleFireIfParent: !0,
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
                    return (
                      !$(this).hasClass('shr-lnk email') ||
                      !$(this).closest('section.shr-pg.modal-dialog')
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop7', type: 'value', value: 'Email Link Click' }],
                    events: [{ name: 'event27' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Email Link Click', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC03aaff4c120747d7aec40daf4c889830-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL24d4743a7008433a99bbc7d094e26a70',
            name: 'FormSubmit | click | 50 | [CC, AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector:
                    ' form[data-gc-analytics-formname] [data-gc-analytics-formsubmit], [data-gc-analytics-formname][data-gc-analytics-collect] [type=submit], [data-gc-analytics-formname][data-gc-analytics-collect] [type=button]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC0ebdd07e685b4c668430ae65ebaacbb4-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list2 = _satellite.getVar('FormList')), (t.linkTrackVars += ',list2');
                    },
                  },
                  trackerProperties: {
                    eVars: [{ name: 'eVar79', type: 'value', value: '%FormName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Form submit: "+v79' }],
                    events: [{ name: 'event79' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Form Submit', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC7156d97b6564411b88f4378092312d21-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL1c80f52f03254df49d5bc4f373388b5e',
            name: 'All Pages | Library Loaded (Page Top) | 10 | [Plugins]',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 10 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'common-analytics-plugins/src/lib/actions/initialize.js',
                settings: {
                  cs: !1,
                  ft: !1,
                  il: !0,
                  mv: !1,
                  ns: !1,
                  pt: !0,
                  ape: !1,
                  apl: !0,
                  apv: !1,
                  fpo: !1,
                  ggc: !1,
                  gnr: !1,
                  gpn: !1,
                  gpv: !1,
                  gqp: !0,
                  grl: !1,
                  gtp: !1,
                  gvd: !1,
                  gvn: !1,
                  gvo: !1,
                  rfl: !0,
                  gapv: !1,
                  gplt: !1,
                  gtbe: !1,
                  gttc: !1,
                  gdslv: !1,
                  gtslv: !1,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL5ceb4da5fc3a4202856ff49f1f15f4c2',
            name: 'Search | page bottom | 50 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('search parameter q | url'),
                      t = _satellite.getVar('search parameter allq | url'),
                      a = _satellite.getVar('search parameter exctq | url'),
                      n = _satellite.getVar('search parameter anyq | url'),
                      r = _satellite.getVar('search parameter noneq | url'),
                      s = document.querySelector('div[data-analytics-id="squery"]');
                    if ((e || t || a || n || r) && null !== s) return !0;
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['canada.ca', 'adobecqms.net'] },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var a = _satellite.getVar('SearchResults');
                      null == a || isNaN(a) || (t.products = ';;;;event52=' + a);
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar50', type: 'value', value: '%SearchTerm%' },
                      { name: 'eVar55', type: 'value', value: '%SearchRefineType %' },
                    ],
                    props: [
                      { name: 'prop7', type: 'value', value: 'D="Search: "+v50' },
                      { name: 'prop50', type: 'alias', value: 'eVar50' },
                    ],
                    events: [{ name: 'event50' }, { name: 'event52' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLe2078ac50ad248f39c1325af840a16f3',
            name: 'All Pages | Whitelist/Blacklist | Library Loaded | 30 | [CC]',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 30 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "// whitelist/blacklist \n\n/*\n * Domain Whitelist and domain specific settings\n*/\n\n//make sure to update thisDomain with nulls!!!\n_satellite.gcCustom = {\n    domain_blacklist: [\n      '/analytique-analytics/',\n      'checkingvisa.com'\n    ],\n    protocol_blacklist: ['javascript:', 'mailto:', 'tel:', 'blob:', 'data:'],\n\n    /*Follow this syntax for adding items to the whitelist\n    Double check and confirm you are adding to the STAGE or LIVE whitelist\n    Double check spelling and syntax for errors\n    */\n    thisDomain: { AppName: null, LoginStatus: null },\n    domain_whitelist: {\n        //this whitelists Analytics tracking\n        stage: {\n            //EXAMPLE:\n            //--- all items MUST inlcude a comma in order to append another line item\n            //--- last item does not use comma\n            // Testing\n            //'apap.gc.ca' : {AppName : 'canada', LoginStatus : 'null'},\n            //'www.statcan.gc.ca': {AppName : null, LoginStatus : null}, //testing\n            //'www.nrcan.gc.ca': {AppName : null, LoginStatus : null}, //testing\n            //'www.rncan.gc.ca': {AppName : null, LoginStatus : null}, //testing\n            //'content.buyandsell.gc.ca': {AppName : null, LoginStatus : null},\n            'universallabs.org': { AppName: null, LoginStatus: null },\n            'localhost': { AppName: 'canada', LoginStatus: '2' },\n            '10.24.221.62': { AppName: null, LoginStatus: null },\n            // Canada.ca\n            'www.canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            'canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            'www1.canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            'staging65s3.canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            'canada-aem653-s3-stage.adobecqms.net': { AppName: 'canada', LoginStatus: '2' },\n            'dev1.canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            'dev3.canada.ca': { AppName: 'canada', LoginStatus: '2' },\n           //BookingTool\n            'apps.canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            'iv.apps.canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            '52.60.222.254': { AppName: null, LoginStatus: null },\n            '35.183.56.104': { AppName: null, LoginStatus: null },\n            'gcbooking.adobecqms.net': { AppName: 'canada', LoginStatus: '2' },\n            // Search\n            'search-recherche.gc.ca': { AppName: null, LoginStatus: null },\n            'www.search-recherche.gc.ca': { AppName: null, LoginStatus: null },\n            'recherche-search.gc.ca': { AppName: null, LoginStatus: null },\n            'www.recherche-search.gc.ca': { AppName: null, LoginStatus: null },\n            'search.gc.ca': { AppName: null, LoginStatus: null },\n            'www.search.gc.ca': { AppName: null, LoginStatus: null },\n            'recherche.gc.ca': { AppName: null, LoginStatus: null },\n            'www.recherche.gc.ca': { AppName: null, LoginStatus: null },\n            //remove before publish\n            'wpaz-ofm12c-ssl-i.services.gc.qat': { AppName: null, LoginStatus: null },\n            'staging-recherche.gc.ca': { AppName: null, LoginStatus: null },\n            'wpaz-ofm-i.sade-edap.prv': { AppName: null, LoginStatus: null },\n            'wpaz-ofm-i-e-esdc.services.gc.qat': { AppName: null, LoginStatus: null },\n             //'n30012548': { AppName: 'canada', LoginStatus: '2' } // Survey Enhancements - Eric Dunsworth's local computer (added by Lucas Feb./20)\n\n\n\n        },\n        live: {\n            //EXAMPLE:\n            //'...' : {AppName : null, LoginStatus : null}\n            // Canada.ca\n            'www.canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            'canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            'www1.canada.ca': { AppName: 'canada', LoginStatus: '2' },\n            'apps.canada.ca': { AppName: null, LoginStatus: null },\n            'iv.apps.canada.ca': { AppName: null, LoginStatus: null },\n            'v.apps.canada.ca': { AppName: null, LoginStatus: null },\n            // Search\n            'search-recherche.gc.ca': { AppName: null, LoginStatus: null },\n            'www.search-recherche.gc.ca': { AppName: null, LoginStatus: null },\n            'recherche-search.gc.ca': { AppName: null, LoginStatus: null },\n            'www.recherche-search.gc.ca': { AppName: null, LoginStatus: null },\n            'search.gc.ca': { AppName: null, LoginStatus: null },\n            'www.search.gc.ca': { AppName: null, LoginStatus: null },\n            'recherche.gc.ca': { AppName: null, LoginStatus: null },\n            'www.recherche.gc.ca': { AppName: null, LoginStatus: null }\n\n        },\n  },\n internal_filters : [\n //this is used for outbound link tracking\n    //CANADA.CA (AEM)\t\n\t\t'10.24.221.62'\n        ,'35.183.56.104' // Booking Tool Staging\n\t\t,'52.60.222.254' // Booking Tool Staging\n\t\t,'iv.apps.canada.ca' // Booking Tool Prod\n\t\t,'v.apps.canada.ca' // Booking Tool Prod\n\t\t,'gcbooking.adobecqms.net' //Booking Tool\n\t\t,'localhost'\n\t\t,'universallabs.org' \n\t\t,'dev1.canada.ca'\n\t\t,'dev3.canada.ca'\n\t\t,'www1.canada.ca' \n\t\t,'canada.ca' \n\t\t,'www.canada.ca' \n\t\t,'staging65s3.canada.ca' // AEM 6.5\n\t\t,'canada-aem653-s3-stage.adobecqms.net'\n\t\t,'staging-recherche.gc.ca' // Search\n\t\t,'recherche.gc.ca' \n\t\t,'recherche-search.gc.ca' \n\t\t,'search.gc.ca' \n\t\t,'search-recherche.gc.ca'\n\t\t,'www.recherche.gc.ca' \n\t\t,'www.recherche-search.gc.ca' \n\t\t,'www.search.gc.ca' \n\t\t,'www.search-recherche.gc.ca' \n\t\t,'canada-service-corps.canada.ca' // PM Service Corps\n\t\t,'service-jeunesse.canada.ca' \n\t// Library and Archives\n\t\t,'bac-lac.gc.ca'\n\t\t,'lac-bac.gc.ca'\n\t\t,'www.bac-lac.gc.ca'\n\t\t,'www.lac-bac.gc.ca'\n\t\t,'canadiana-qa.dev.bac-lac.gc.ca'\n\t\t,'central.bac-lac.gc.ca'\n\t\t,'central-d.dev.bac-lac.gc.ca'\n\t\t,'webdev-srv.dev.bac-lac.gc.ca'\n\t\t,'webqa-srv01.qa.bac-lac.gc.ca'\n\t\t,'ucc-qa'\n\t\t,'v41extweb01-d.services.bac-lac.gc.ca'\n\t\t,'canadiana.bac-lac.gc.ca'\n\t\t,'www.canadiana.bac-lac.gc.ca' \n\t\t,'cipbookentry.bac-lac.gc.ca' \n\t\t,'cipbookentry-qa.dev.bac-lac.gc.ca'\n\t\t,'www.cipbookentry.bac-lac.gc.ca' \n\t\t,'co-lab.bac-lac.gc.ca' \n\t\t,'www.co-lab.bac-lac.gc.ca' \n\t\t,'sigles-symbols-qa.bac-lac.gc.ca'\n\t\t,'sigles-symbols.bac-lac.gc.ca' \n\t\t,'www.sigles-symbols.bac-lac.gc.ca' \n\t\t,'event-qa'\n\t\t,'event.bac-lac.gc.ca' \n\t\t,'www.event.bac-lac.gc.ca' \n\t\t,'nouvelle-france.org' \n\t\t,'www.collectionscanada.gc.ca'\n    // Impact Assessment Agency of Canada\n\t\t,'acee.gc.ca' // Old domain (CEAA)\t\n\t\t,'acee-ceaa.gc.ca' \n\t\t,'www.acee.gc.ca' \n\t\t,'www.acee-ceaa.gc.ca' \n\t\t,'ceaa.dev.ec.gc.ca' \n\t\t,'ceaa.gc.ca' \n\t\t,'ceaa-acee.gc.ca' \n\t\t,'www.ceaa.gc.ca' \n\t\t,'www.ceaa-acee.gc.ca' \n\t\t,'ceaa.qa.ncr.ec.gc.ca'\n\t\t,'www.iaac-acei.gc.ca' // New domain (IAAC)\n\t\t,'iaac-acei.gc.ca'\n\t\t,'www.acei-iaac.gc.ca'\n\t\t,'acei-iaac.gc.ca'\n\t\t,'www.iaac.gc.ca'\n\t\t,'iaac.gc.ca'\n\t\t,'www.acei.gc.ca'\n\t\t,'acei.gc.ca'\n\t\t,'www.iaac-aeic.gc.ca'\n\t\t,'iaac-aeic.gc.ca'\n\t\t,'www.aeic-iaac.gc.ca'\n\t\t,'aeic-iaac.gc.ca'\n\t\t,'www.aeic.gc.ca'\n\t\t,'aeic.gc.ca'\n    // Agriculture and Agri-Food Canada\n\t\t,'www.agr.gc.ca' \n\t\t,'agr.gc.ca' \n\t\t,'www-dev.agr.gc.ca' \n\t\t,'intranet.agr.gc.ca'\n\t\t,'www-tst.agr.gc.ca'\n    // Treasury Board Secretariat\t\n\t\t,'atip-aiprp.tbs-sct.gc.ca' \n\t\t,'uat.atip-aiprp.tbs-sct.gc.ca' \n\t\t,'pre-prod.atip-aiprp.tbs-sct.gc.ca' \n\t\t,'authoring.publiservice.tbs-sct.gc.ca' \n\t\t,'authoring.www.tbs-sct.gc.ca' \n    // Statistics Canada\n\t\t,'www.statcan.gc.ca' \n\t\t,'wwwqa.statcan.gc.ca'\n\t\t,'codweb1.stcpaz.statcan.gc.ca' \n\t\t,'codweb2.stcpaz.statcan.gc.ca' \n\t\t,'web2-test1.wcms.statcan.ca'\n\t\t,'geosuite.statcan.gc.ca' \n\t\t,'qa-p-es-drupal01.stcpaz.statcan.gc.ca' \n\t\t,'qa-p-es-ui01.stcpaz.statcan.gc.ca'\n\t\t,'src-dev13.wcms.statcan.ca' \n\t\t,'stc-ndm-qa-pc2.statcan.gc.ca' \n\t\t,'www5.statcan.gc.ca' \n\t\t,'www5testb.statcan.gc.ca' \n\t\t,'www12.statcan.gc.ca' \n\t\t,'www23.statcan.gc.ca' \n\t\t,'www35.statcan.gc.ca' \n\t\t,'www65.statcan.gc.ca' \n\t\t,'www66.statcan.gc.ca' \n\t\t,'www76qa.statcan.gc.ca'\n\t\t,'www76.statcan.gc.ca'\n\t\t,'www120.statcan.gc.ca' \n\t\t,'www144.statcan.gc.ca' \n\t\t,'www150.statcan.gc.ca' \n\t\t,'www.census.gc.ca'\n\t\t,'census.gc.ca'\n\t\t,'census-dev.statcan.gc.c'\n\t\t,'www.recensement.gc.ca'\n\t\t,'recensement.gc.ca'\n\t\t,'recensement-dev.statcan.gc.ca'\n\t\t,'geoprod.statcan.gc.ca'\n\t\t,'www.geoprod.statcan.gc.ca'\n\t\t,'geodepot.statcan.gc.ca'\n\t\t,'geodepot.statcan.ca'\n\t\t,'dv-vd-sprint1.test.cloud.statcan.ca'\n\t\t,'www.dv-vd-sprint1.test.cloud.statcan.ca'\n\t\t,'information-energie.canada.ca'\n\t\t,'energy-information.canada.ca'\n\t\t,'portal.covid.cloud.statcan.ca'\n\t\t,'analytics-platform.statcan.gc.ca'\n\t\t,'oc-dev.covid.cloud.statcan.ca'\n\t\t,'daaas-dev.covid.cloud.statcan.ca'\n\t// Employment Social Developmet Canada\n\t\t,'disclosure.esdc.gc.ca' \n\t\t,'disclosure.servicecanada.gc.ca' \n\t\t,'www.canadabenefits.gc.ca' \n\t\t,'www.canadabenefits.gc.ca' \n\t\t,'wpaz-ofm12c-ssl-i.services.gc.qat' \n\t\t,'wpaz-ofm-i.sade-edap.prv' \n\t\t,'wpaz-ofm-i-e-esdc.services.gc.qat' \n\t\t,'prestationsducanada.gc.ca' \n\t\t,'www.prestationsducanada.gc.ca' \n\t\t,'negotech.labour.gc.ca'\n\t\t,'negotheque.travail.gc.ca'\n\t\t,'mlapesd3963v-s2tst-negotech.intra.dev'\n\t\t,'cv19benefits-appservice-staging.azurewebsites.net'\n\t\t,'cv19benefits-appservice-dev.azurewebsites.net'\n\t\t,'covid-benefits.alpha.canada.ca'\n\t\t,'covid-prestations.alpha.canada.ca'\n\t\t,'woodpecker.eastus.cloudapp.azure.com'\n\t\t,'10.71.64.91'\n        //,'10.71.66.120'\t\n\t\t,'multi-benefits.servicecanada.gc.ca' //CERB DFO\n\t\t,'multi-benefices.servicecanada.gc.ca' //CERB DFO\n\t\t,'pesdc.prv'\n\t// Elections CRA\n\t\t,'ec9wbstepfpkedu' \n\t\t,'elections.ca' \n\t\t,'www.elections.ca' \n\t\t,'enr.elections.ca' \n\t\t,'www.test.elections.ca' \n\t\t,'enr.test.elections.ca'\n\t\t,'ereg.elections.ca' \n\t\t,'www.ereg.elections.ca' \n\t\t,'ispdevwww.elections.ca' \n\t\t,'secure.elections.ca' \n\t\t,'secure.test.elections.ca' \n\t\t,'rspispweb01-ste-demo1.elections.ca'\n\t\t,'ereg.test.elections.ca'\n\t\t,'ereg.elections.ca'\n\t\t,'www.ereg.elections.ca'\n\t\t,'ecdev_maint-pesc.ecade.elections.ca'\n\t\t,'www.ecdev_maint-pesc.ecade.elections.ca'\n\t\t,'cef-cce.ca'\n\t\t,'www.cef-cce.ca'\n\t// Natural Resources Canada\n\t\t,'equalby30.org' \n\t\t,'www.equalby30.org' \n\t\t,'nrcan.gc.ca' \n\t\t,'www.nrcan.gc.ca' \n\t\t,'rncan.gc.ca' \n\t\t,'www.rncan.gc.ca' \n\t\t,'rncanengagenrcan.ca' \n\t\t,'www.rncanengagenrcan.ca' \n\t\t,'www.rncanengagenrcan.ca' \n\t\t,'test.nrcan.gc.ca' \n\t\t,'test.rncan.gc.ca' \n\t\t,'www.test.nrcan.gc.ca' \n\t\t,'www.test.rncan.gc.ca' \n\t\t,'minescanada.ca'\n\t\t,'www.minescanada.ca'\n\t\t,'globe-cem-mi.yourballistic.com'\n\t\t,'esrfunds.org'\n\t\t,'www.esrfunds.org'\n\t\t,'www.fondsee.org'\n\t\t,'fondsee.org'\t\n\t\t,'www.npa.gc.ca'\t\n\t\t,'npa.gc.ca'\t\n\t\t,'www.apn.gc.ca'\t\n\t\t,'www.mpmo.gc.ca'\t\n\t\t,'www.bggp.gc.ca'\t\n\t\t,'www.apap.gc.ca'\t\n\t\t,'www.paap.gc.ca'\n\t\t,'cem-mi-vancouver2019.ca'\n\t\t,'www.cem-mi-vancouver2019.ca'\n\t\t,'cmep-mi-vancouver2019.ca'\n\t\t,'apap.gc.ca'\n\t\t,'paap.gc.ca'\n\t\t,'www.esrfunds.org'\n\t\t,'www.fondsee.org'\n\t\t,'mpmo.gc.ca'\n\t\t,'bggp.gc.ca'\n\t\t,'npa.gc.ca'\n\t\t,'apn.gc.ca'\n\t\t,'natural-resources.canada.ca' //new canada.ca subdomainsdomain\n\t\t,'ressources-naturelles.canada.ca' //new canada.ca subdomain\n\t\t,'nrcan.canada.ca' //new canada.ca subdomain\n\t\t,'rncan.canada.ca' //new canada.ca subdomain\n\t\t,'nrcan-rncan.canada.ca' //new canada.ca subdomain\n\t\t,'rncan-nrcan.canada.ca' //new canada.ca subdomain\n\t\t,'green.dev.osdp.aws.nrcan-rncan.cloud'\n\t\t,'blue.dev.osdp.aws.nrcan-rncan.cloud'\n\t\t,'qa.dev.osdp.aws.nrcan-rncan.cloud'\n\t\t,'osdp-cumulative-effects.canada.ca'\n\t\t,'psdo-effets-cumulatifs.canada.ca'\n\t\t,'www.dev.nrcan.gc.ca'\n\t\t,'dev.nrcan.gc.ca'\n\t\t,'www.dev.rncan.gc.ca'\n\t\t,'dev.rncan.gc.ca' \n\t// Office of the procurement ombudsman\n\t\t,'opo-boa.gc.ca' \n\t\t,'dev.boa-opo.gc.ca' \n\t\t,'xterra3w2k16.ncr.pwgsc.gc.ca'\n\t\t,'secure.opo-boa.gc.ca'\n\t// MSCA-MEIIO\n\t\t,'srv113-i.lab.hrdc-drhc.gc.ca' \n\t\t,'srv113-u.lab.hrdc-drhc.gc.ca' \n\t\t,'srv136.services.gc.ca' \n\t\t,'srv2140-u.services.gc.qat' \n\t\t,'srv241-s2.lab.hrdc-drhc.gc.ca' \n\t// Transport Canada\n\t\t,'transport-dev' \n\t// Health Canada\n\t\t,'a8047055' \n\t\t,'cfgtest.canadacentral.cloudapp.azure.com' //food guide\n\t\t,'vmportaltest.canadacentral.cloudapp.azure.com'\n\t\t,'prcitestfr.canadacentral.cloudapp.azure.com'\n\t\t,'food-guide.canada.ca'\n\t\t,'www.food-guide.canada.ca'\n\t\t,'www.guide-alimentaire.canada.ca'\n\t\t,'guide-alimentaire.canada.ca'\n\t\t,'clinical-information.canada.ca'\n\t\t,'renseignements-cliniques.canada.ca'\n\t\t,'cfg-qa.hres.ca'\n\t\t,'cfg-stage.hres.ca'\n\t// Immigration Refugee Canada\n\t\t,'www.cic.gc.ca'\n\t\t,'cic.gc.ca'\n\t\t,'eservices1.ci.gc.ca'\n\t\t,'gol-ecas-dev.ci.gc.ca'\n\t\t,'www-dev.ic.gc.ca'\n\t\t,'eservices.cic.gc.ca'\n\t\t,'services3.cic.gc.ca'\n\t// Canada Revenue Agency\n\t\t,'cra-arc.gc.ca'\n\t\t,'arc-cra.gc.ca'\n\t\t,'cra.gc.ca'\n\t\t,'arc.gc.ca'\n\t\t,'www.cra-arc.gc.ca'\n\t\t,'www.arc-cra.gc.ca'\n\t\t,'www.cra.gc.ca'\n\t\t,'www.arc.gc.ca'\n\t\t,'apps.cra-arc.gc.ca'\n\t\t//CRA UT\n\t\t,'cp-ut.isvcs.net'\n\t\t,'rp-ut.isvcs.net'\n\t\t,'cp-ut2.isvcs.net'\n\t\t,'rp-ut2.isvcs.net'\n\t\t//CRA SI\n\t\t,'ams-sga-si.cra-arc.gc.ca'\n\t\t,'cms-sgj-si.cra-arc.gc.ca'\n\t\t,'ams-sga-si2.cra-arc.gc.ca'\n\t\t,'cms-sgj-si2.cra-arc.gc.ca'\n\t\t//CRA UA\n\t\t,'ams-sga-ua.cra-arc.gc.ca'\n\t\t,'cms-sgj-ua.cra-arc.gc.ca'\n\t\t,'ams-sga-ua2.cra-arc.gc.ca'\n\t\t,'cms-sgj-ua2.cra-arc.gc.ca'\n\t\t//CRA OT\t\n\t\t,'apps1.ams-sga-ot.cra-arc.gc.ca'\n\t\t,'apps2.ams-sga-ot.cra-arc.gc.ca'\n\t\t,'apps3.ams-sga-ot.cra-arc.gc.ca'\n\t\t,'apps4.ams-sga-ot.cra-arc.gc.ca'\n\t\t,'apps5.ams-sga-ot.cra-arc.gc.ca'\n\t\t,'apps6.ams-sga-ot.cra-arc.gc.ca'\n\t\t,'apps7.ams-sga-ot.cra-arc.gc.ca'\n\t\t,'apps8.ams-sga-ot.cra-arc.gc.ca'\n\t\t,'cms-sgj-ot.cra-arc.gc.ca'\n\t\t,'apps1.ams-sga-ot2.cra-arc.gc.ca'\n\t\t,'apps2.ams-sga-ot2.cra-arc.gc.ca'\n\t\t,'apps3.ams-sga-ot2.cra-arc.gc.ca'\n\t\t,'apps4.ams-sga-ot2.cra-arc.gc.ca'\n\t\t,'apps5.ams-sga-ot2.cra-arc.gc.ca'\n\t\t,'apps6.ams-sga-ot2.cra-arc.gc.ca'\n\t\t,'apps7.ams-sga-ot2.cra-arc.gc.ca'\n\t\t,'apps8.ams-sga-ot2.cra-arc.gc.ca'\n\t\t,'cms-sgj-ot2.cra-arc.gc.ca'\n\t\t,'ams-sga.cra-arc.gc.ca'\n\t\t,'cms-sgj.cra-arc.gc.ca'\n\t\t,'apps1.ams-sga.cra-arc.gc.ca'\n\t\t,'apps2.ams-sga.cra-arc.gc.ca'\n\t\t,'apps3.ams-sga.cra-arc.gc.ca'\n\t\t,'apps4.ams-sga.cra-arc.gc.ca'\n\t\t,'apps5.ams-sga.cra-arc.gc.ca'\n\t\t,'apps6.ams-sga.cra-arc.gc.ca'\n\t\t,'apps7.ams-sga.cra-arc.gc.ca'\n\t\t,'apps8.ams-sga.cra-arc.gc.ca'\n\t\t,'www.ams-sga.cra-arc.gc.ca'\n\t\t,'www.cms-sgj.cra-arc.gc.ca'\n\t\t,'www.apps1.ams-sga.cra-arc.gc.ca'\n\t\t,'www.apps2.ams-sga.cra-arc.gc.ca'\n\t\t,'www.apps3.ams-sga.cra-arc.gc.ca'\n\t\t,'www.apps4.ams-sga.cra-arc.gc.ca'\n\t\t,'www.apps5.ams-sga.cra-arc.gc.ca'\n\t\t,'www.apps6.ams-sga.cra-arc.gc.ca'\n\t\t,'www.apps7.ams-sga.cra-arc.gc.ca'\n\t\t,'www.apps8.ams-sga.cra-arc.gc.ca'\n\t\t,'apps-ut.cra-arc.gc.ca'\n\t\t,'apps-ua.cra-arc.gc.ca' \n\t\t,'apps-ut.isvcs.net'\n\t\t,'apps-ua.isvcs.net'\n\t\t,'apps-ut2.cra-arc.gc.ca'\n\t\t,'apps-ua2.cra-arc.gc.ca'\n\t\t,'apps-ut2.isvcs.net'\n\t\t,'apps-ua2.isvcs.net'\n\t// Public Services procurement Canada\n\t\t,'test.publications.gc.ca'\n\t\t,'publications.gc.ca'\n\t\t,'www.publications.gc.ca'\n\t\t,'content.buyandsell.gc.ca'\n\t\t,'beta.buyandsell.gc.ca'\n\t\t,'beta.achatsetventes.gc.ca'\n\t\t,'webdev02.tpsgc-pwgsc.gc.ca'\n\t\t,'www.tpsgc-pwgsc.gc.ca'\n\t\t,'buyandsell.gc.ca'\n\t\t,'achatsetventes.gc.ca'\n\t\t,'staging.achatscanadabuys.ca'\n\t// Global Affiars Canada\n\t\t,'www.international.gc.ca'\n\t\t,'tradecommissioner.gc.ca'\n\t\t,'deleguescommerciaux.gc.ca'\n\t\t,'travel-ace-m2'\n\t\t,'voyage-ace-m2' \n    // Justice\n\t\t,'www-uat.justice.gc.ca'\n\t\t,'limsdev.justice.gc.ca'\n\t\t,'dmteam-uat.justice.gc.ca'\n\t\t,'equipesm-uat.justice.gc.ca'\n\t\t,'www-uat.victimsfirst.gc.ca'\n\t\t,'www-uat.victimesdabord.gc.ca'\n\t\t,'jusnet-uat.justice.gc.ca'\n\t\t,'www-uat.victimsweek.gc.ca'\n\t\t,'www-uat.semainedesvictimes.gc.ca'\n\t\t,'www.justice.gc.ca'\n\t\t,'justice.gc.ca'\n\t\t,'dmteam.justice.gc.ca'\n\t\t,'equipesm.justice.gc.ca'\n\t\t,'www.laws-lois.justice.gc.ca'\n\t\t,'laws-lois.justice.gc.ca'\n\t\t,'lois-laws.justice.gc.ca'\n\t\t,'www.lois-laws.justice.gc.ca'\n\t\t,'www.ppsc.gc.ca'\n\t\t,'ppsc.gc.ca'\n\t\t,'www.victimsweek.gc.ca'\n\t\t,'www.semainedesvictimes.gc.ca'\n\t\t,'victimsweek.gc.ca'\n\t\t,'semainedesvictimes.gc.ca'\n\t\t,'jusnet.justice.gc.ca'\n\t// Canadian Food Inspection Agency\n\t\t,'inspection.gc.ca'\n\t\t,'www.inspection.gc.ca'\n\t\t,'inspection.canada.ca'\n\t\t,'www.inspection.canada.ca'\n\t\t,'active.inspection.gc.ca'\n\t\t,'www.active.inspection.gc.ca'\n\t\t,'merlin.cfia-acia.inspection.gc.ca'\n\t\t,'apps.merlin.cfia-acia.inspection.gc.ca'\n\t\t,'www.apps.merlin.cfia-acia.inspection.gc.ca'\n\t// Public Safety Canada\n\t\t,'infomediadev'\n\t\t,'infomedia.gc.ca'\n\t\t,'www.infomedia.gc.ca'\n\t\t,'beta.infomedia.gc.ca'\n\t\t,'api.infomedia.gc.ca'\n\t\t,'icdev'\n\t\t,'psdev'\n\t\t,'gpdev'\n\t\t,'10.10.20.150'\n\t\t,'10.10.20.154'\n\t\t,'10.13.17.54'\n\t\t,'psdev'\n\t\t,'gpdev'\n\t\t,'ecdev'\n\t\t,'icdev'\n\t\t,'ercdev'\n\t// RCMP External Review Committee\n\t\t,'10.10.20.151'\n\t// Open Government\n\t\t,'staging.open.canada.ca'\n\t\t,'stadification.ouvert.canada.ca'\n\t\t,'open.canada.ca'\n\t\t,'ouvert.canada.ca'\n\t\t,'search.open.canada.ca'\n\t\t,'rechercher.ouvert.canada.ca'\n\t// Correctional Investigator Canada\n\t\t,'52.228.98.226'\n\t\t,'www.oci-bec.gc.ca'\n\t\t,'oci-bec.gc.ca'\n\t//Public Service Commission\n\t\t,'intracom'\n\t\t,'intradev'\n\t\t,'intracom.psc-cfp.gc.ca'\n\t\t,'extranet.psc-cfp.gc.ca'\n\t\t,'devextranet.psc-cfp.gc.ca'\n\t\t,'test-psjobs-emploisfp.psc-cfp.gc.ca'\n\t//Superintendent of Financial Institutions Canada (Office of the)\n\t\t,'devirppub.devosfi.ca'\n\t\t,'uatirppub.devosfi.ca'\n\n ]\n};\n\n/* ===== Set data elements that rely on whitelist ===== */\n\n/*jsAbort START*/\nvar dirs;\nvar list;\nvar h = document.location.hostname.toLowerCase(); //host\nvar j = document.location.pathname.toLowerCase(); //path\n\nif (_satellite.buildInfo.environment == \"production\") {\n    list = _satellite.gcCustom.domain_whitelist.live;\n}\nelse {\n    list = _satellite.gcCustom.domain_whitelist.stage;\n    //list = _satellite.gcCustom.domain_whitelist.live; //FOR TESTING ON LIVE ONLY! REMOVE\n\n}\n\n//directories to exclude\n///Input list. Each item must be inputed with its own quotation marks and be separted using a comma\n/// excl list cannot be empty\nexcl=_satellite.gcCustom.domain_blacklist\n\nvar j = document.location.host + document.location.pathname.toLowerCase(); //path\nvar toExcl = false; //set to false by default\nfor (var i in excl) {\n    if (j.indexOf(excl[i]) > -1) {\n        toExcl = true;\n    }\n}\n//end directory exclusions\n\n//sets the data element\nif (typeof list[h] === 'undefined' || toExcl === true) {\n    _satellite.setVar('jsAbort', 'true'); //set to true\n    //_satellite.cookie.set('blackList', 'yes'); //set blackList cookie so previous values are not set on next page\n    window.blackList = 'yes';\n    _satellite.cookie.set('prev_page_blackList', 'yes')\n}\nelse {\n    _satellite.gcCustom.thisDomain = list[h];\n    _satellite.setVar('jsAbort', 'false');\n    window.blackList = 'no';\n};\n\n/*jsAbort END*/\n",
                  language: 'javascript',
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL92400eb793544cb9a5efbe335f1069da',
            name: 'Media Progress (20) | direct call | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'media mark 20' },
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
                      { name: 'eVar61', type: 'value', value: '%MediaType%:%MediaTitle%' },
                      { name: 'eVar62', type: 'value', value: '%MediaFormat%' },
                      { name: 'eVar63', type: 'value', value: '%MediaSource%' },
                    ],
                    events: [{ name: 'event62' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Media Progress (20) ', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCd27ad1678ce54de1b3560bb11d25f476-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL9556bed6cda54f398ee9a807a205cc5d',
            name: 'All Pages | Send Beacon | Page Bottom | 100 | [AA send, clear, reset]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 100 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: { source: "_satellite.track('pageReset');", language: 'javascript' },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLdb039a41fac046f2a34fc46516542412',
            name: 'Report a Problem Complete | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '#gc-rprt-prblm-form button[type="submit"]',
                  bubbleFireIfParent: !0,
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
                    for (
                      var e = '',
                        t = $('form input[type=checkbox]').attr('type'),
                        a = $(
                          '#gc-rprt-prblm-form fieldset .checkbox label input[type=checkbox]:checked'
                        ),
                        n = [],
                        r = 0;
                      r < a.length;
                      r++
                    ) {
                      var s = a[r].getAttribute('data-gc-analytics-rap').trim();
                      n.push(t + ':' + s + ':checked-cochée');
                    }
                    0 !== a.length && (e += n.join('|'));
                    var i = 'ServCan:Report a Problem - Signaler un Probleme';
                    return (
                      _satellite.setVar('jsFormName', i), _satellite.setVar('jsFormList', e), !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list2 = _satellite.getVar('FormList')), (t.linkTrackVars += ',list2');
                    },
                  },
                  trackerProperties: {
                    eVars: [{ name: 'eVar79', type: 'value', value: '%FormName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'Report a Problem Complete' }],
                    events: [{ name: 'event79' }, { name: 'event75' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%FormName%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCe5cf3206d44c4fb881aeafc45ed61125-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLd65d25c78f414b77937c4164ef44ab11',
            name: 'HomePageFeatureImpressionFix',
            events: [
              {
                modulePath: 'core/src/lib/events/timeOnPage.js',
                settings: { timeOnPage: 3 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    if (window.dtmAsyncTracker) {
                      var e = "a[data-gc-analytics='promo:homePageFeature']:not([class~=hide])",
                        t = ' figure figcaption',
                        a = document.querySelector(e + t);
                      a || (a = document.querySelector(e));
                      var n = (a.textContent || '')
                        .replace(/\s+$/g, '')
                        .trim()
                        .replace(/(\r\n\t|\n|\r\t)/gm, '');
                      return (
                        !!a &&
                        (_satellite.setVar('jsHomePageFeatureIE', n),
                        delete window.dtmAsyncTracker,
                        !0)
                      );
                    }
                    return !1;
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list1 = 'home page feature:' + _satellite.getVar('HomePageFeatureIE')),
                        (t.linkTrackVars += ',list1');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event41' }] },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC6d0686a7f3b04cee8b2a78fd3c94b4bd-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL94482cb8c88b43bfb1ce175d67c20b94',
            name: 'AnchorHashSamePage | history change | 50 | [AA set, send, reset]',
            events: [
              { modulePath: 'core/src/lib/events/historyChange.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = window.location.hash.replace(/(\?)\S+/, '');
                    return _satellite.setVar('jsSamePageAnchorLink', e), !0;
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/hash.js',
                settings: { hashes: [{ value: '(#)\\S+', valueIsRegex: !0 }] },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/hash.js',
                settings: {
                  hashes: [
                    {
                      value: '(#)(shr-pg0|wb-chtwzrd-container|wb-chtwzrd-basic|wb-auto-5)',
                      valueIsRegex: !0,
                    },
                  ],
                },
                negate: !0,
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar59', type: 'value', value: '%SamePageAnchorLink%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Anchor Link: "+v59' }],
                    events: [{ name: 'event59' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC16c4a1a037bd44d9ac49696846baf7d0-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL009736f9df53457aa9df5287dbd89849',
            name: 'SearchRecherche | page bottom | 50 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'search|recherche', valueIsRegex: !0 }] },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('search parameter q | url'),
                      t = _satellite.getVar('search parameter allq | url'),
                      a = _satellite.getVar('search parameter exctq | url'),
                      n = _satellite.getVar('search parameter anyq | url'),
                      r = _satellite.getVar('search parameter noneq | url'),
                      s = document.querySelector('div[data-analytics-id="squery"]');
                    if ((e || t || a || n || r) && null !== s) return !0;
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var a = _satellite.getVar('SearchResults');
                      null == a || isNaN(a) || (t.products = ';;;;event52=' + a);
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar50', type: 'value', value: '%SearchRechercheTerm%' },
                      { name: 'eVar55', type: 'value', value: '%SearchRechercheRefineType%' },
                    ],
                    props: [
                      { name: 'prop7', type: 'value', value: 'D="Search: "+v50' },
                      { name: 'prop50', type: 'alias', value: 'eVar50' },
                    ],
                    events: [{ name: 'event50' }, { name: 'event52' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLf2efa83088f74a9db7a4c47f5e595c36',
            name: 'Telephone Link | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: 'a',
                  elementProperties: [{ name: 'href', value: '^tel', valueIsRegex: !0 }],
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop7', type: 'value', value: 'Telephone Link Click' }],
                    events: [{ name: 'event28' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Telephone Link Click', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC63ba3b9e3164479b8349684fcf4220ba-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL867323d043cb42318b9c6b3a35be9009',
            name: 'FormReset | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'form[data-gc-analytics-formName] button[type="reset"]',
                  bubbleFireIfParent: !0,
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
                    var e = $('form[data-gc-analytics-formName]').attr(
                      'data-gc-analytics-formName'
                    );
                    return (
                      _satellite.setVar('jsFormName', e), _satellite.setVar('jsClearFilter'), !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar79', type: 'value', value: '%FormName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Form reset: "+v79' }],
                    events: [{ name: 'event80' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC374fbef4eec844889fcac177d8472e14-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL4c4ff58bace14296aa0a7236bee5d6c8',
            name: 'Popup Yes | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '#survey-yes',
                  bubbleFireIfParent: !0,
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
                    var e = _satellite.getVar('PopupName');
                    return _satellite.setVar('jsPopupName', e), !0;
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar57', type: 'value', value: '%PopupName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Pop-up Yes Click: "+v57' }],
                    events: [{ name: 'event57' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Popup Yes Click', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC51311ca58bb94df281548ebde7ad9f31-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLa13899ea5080450980ebfd280566d100',
            name: 'FollowComplete | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: '.mfp-content section.modal-dialog a',
                  bubbleFireIfParent: !0,
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
                    return (
                      !!$(this).closest(
                        '#' + _satellite.getVar('jsFollowDialog') + '.modal-dialog'
                      ).length && (_satellite.setVar('jsLinkHREF', this.href), !0)
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar28', type: 'value', value: '%LinkHREF%' },
                      { name: 'eVar27', type: 'value', value: '%FollowPlatform%' },
                      { name: 'eVar72', type: 'alias', value: 'eVar27' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'Social Follow' }],
                    events: [{ name: 'event74' }, { name: 'event26' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%LinkHREF%', linkType: 'e' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC89df0cd3c87d4192b463bd7cddde3140-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLb648f82dd9c2402780d9b9b16992a352',
            name: 'Custom Tracking | direct call | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'CUSTOM_TRACK' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar100', type: 'value', value: '%customCall%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="custom call: "+v100' }],
                    events: [{ name: 'event101' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%customCall%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC916498d532ec4e04bc31ebe15847d607-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL2ebec9a402664ac59c44d0f7f77237b1',
            name: 'Reset Page Variables | direct call | 50 | [AA clear, set]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pageReset' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js',
                settings: {},
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var a = document.location.hostname + document.location.pathname,
                        n = a.length,
                        r = /^((?:.*?\/))(.*\/)?(.*)/.exec(a),
                        s = document.location.search;
                      (t.eVar39 = s || 'blank query string'),
                        (t.eVar22 = a.substring(n - 255, n)),
                        (t.prop22 = a.substring(n - 100, n)),
                        (t.eVar23 =
                          null !== r && 'undefined' != typeof r[2] ? r[2] : 'blank folder'),
                        (t.eVar24 =
                          null !== r && 'undefined' != typeof r[3] ? r[3] : 'blank filename'),
                        ('undefined' != typeof t.prop7 && null != t.prop7) ||
                          (t.prop7 = 'D="Page: "+pageName');
                      var i = _satellite.getVar('contentAge'),
                        o =
                          document.getElementById('wb-land') ||
                          document.querySelector('[data-gc-analytics="search-recherche"] h2'),
                        c = _satellite.getVar('SearchResults');
                      !i || isNaN(i) || o || (t.products = ';;;;event12=' + i),
                        i &&
                          !isNaN(i) &&
                          o &&
                          (t.products = ';;;;event12=' + i + ',;;;;event52=' + c);
                      var l = '',
                        u = function (e) {
                          return e
                            ? (e = e
                                .replace(/\|/g, '/')
                                .replace(/\s+/g, ' ')
                                .replace(/(\r\n\t|\n|\r\t)/gm, '')
                                .trim())
                            : '';
                        },
                        d = document.getElementsByTagName('section'),
                        m = document.querySelectorAll(
                          'a[data-gc-analytics="promo:promotionalfeature"]'
                        );
                      if (
                        !(null !== d && 0 < d.length && null !== m && 0 < m.length) &&
                        null !== d &&
                        0 < d.length
                      )
                        for (var p = 0; p < d.length; p++) {
                          var g = d[p],
                            f = g.className.split(' '),
                            h = !1;
                          for (C = 0; C < f.length; C++)
                            if ('gc-features' == f[C]) {
                              h = !0;
                              break;
                            }
                          if (h)
                            for (var v = g.getElementsByTagName('a'), b = 0; b < v.length; b++)
                              0 < (I = u(v[b].textContent)).length &&
                                (l += '|contextual feature:' + I);
                        }
                      var y = document.querySelectorAll(
                        'a[data-gc-analytics="promo:promotionalfeature"]'
                      );
                      if (null !== y && 0 !== y.length) {
                        var w = [];
                        for (p = 0; p < y.length; p++) w.push(u(y[p].innerText));
                        l += '|contextual feature:' + w.join('|contextual feature:');
                      }
                      var k = document.getElementsByClassName('gc-prtts');
                      for (p = 0; p < k.length; p++)
                        for (var S = k[p].getElementsByTagName('a'), C = 0; C < S.length; C++) {
                          var _,
                            P = S[C];
                          if (
                            !P.hasAttribute('data-gc-analytics') ||
                            'promo:promotionalfeature' !== P.getAttribute('data-gc-analytics')
                          )
                            for (
                              (_ = P.getElementsByTagName('h3')).length ||
                                (_ = P.getElementsByTagName('figcaption')),
                                b = 0;
                              b < _.length;
                              b++
                            )
                              0 < (I = u(_[b].textContent)).length &&
                                (l += '|contextual feature:' + I);
                        }
                      var j = document.getElementsByClassName('gc-nttvs');
                      for (p = 0; p < j.length; p++) {
                        var E = j[p].getElementsByTagName('a');
                        for (C = 0; C < E.length; C++) {
                          var x = E[C].getElementsByTagName('h3');
                          for (b = 0; b < x.length; b++)
                            0 < (I = u(x[b].textContent)).length && (l += '|goc activity:' + I);
                        }
                      }
                      var V = document.querySelectorAll(
                        'div.carousel-s2 figcaption, div.carousel-s1 figcaption'
                      );
                      if (null !== V && 0 !== V.length) {
                        var T = [];
                        for (p = 0; p < V.length; p++) var I = T.push(u(V[p].textContent));
                        l += '|carousel:' + T.join('|carousel:');
                      }
                      var A,
                        D = "a[data-gc-analytics='promo:homePageFeature']";
                      if (document.querySelector(D)) {
                        A = D + ':not([class~=hide])';
                        var N =
                          document.querySelector(A + ' figure figcaption') ||
                          document.querySelector(A);
                        N
                          ? (l = l + '|home page feature:' + u(N.innerText))
                          : (window.dtmAsyncTracker = !0);
                      }
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar1', type: 'value', value: '%LocalDay%' },
                      { name: 'eVar2', type: 'value', value: '%LocalHour%' },
                      { name: 'eVar4', type: 'value', value: '%DeviceType%' },
                      { name: 'eVar5', type: 'value', value: '%PageLanguage%' },
                      { name: 'eVar11', type: 'value', value: '%PageTitle%' },
                      { name: 'eVar12', type: 'value', value: '%PageURL%' },
                      { name: 'eVar15', type: 'value', value: '%PageCreator%' },
                      { name: 'eVar16', type: 'value', value: '%PageTheme-PageLanguage%' },
                      { name: 'eVar21', type: 'value', value: '%PageIssuedDate%' },
                      { name: 'eVar25', type: 'value', value: '%PageType%' },
                      { name: 'eVar26', type: 'value', value: '%ServerHour%:%ServerDay%' },
                      { name: 'eVar39', type: 'value', value: '%queryString%' },
                      { name: 'eVar65', type: 'value', value: '%AppName%' },
                      { name: 'eVar66', type: 'value', value: '%LoginStatus%' },
                      { name: 'eVar74', type: 'value', value: '%DebugData%' },
                      { name: 'eVar75', type: 'value', value: '%LibraryVersion%' },
                    ],
                    props: [
                      { name: 'prop1', type: 'alias', value: 'eVar1' },
                      { name: 'prop2', type: 'alias', value: 'eVar2' },
                      { name: 'prop4', type: 'alias', value: 'eVar4' },
                      { name: 'prop5', type: 'alias', value: 'eVar5' },
                      { name: 'prop11', type: 'alias', value: 'eVar11' },
                      { name: 'prop12', type: 'alias', value: 'eVar12' },
                      { name: 'prop15', type: 'alias', value: 'eVar15' },
                      { name: 'prop16', type: 'alias', value: 'eVar16' },
                      { name: 'prop21', type: 'alias', value: 'eVar21' },
                      { name: 'prop23', type: 'alias', value: 'eVar23' },
                      { name: 'prop24', type: 'alias', value: 'eVar24' },
                      { name: 'prop25', type: 'alias', value: 'eVar25' },
                      { name: 'prop26', type: 'alias', value: 'eVar26' },
                      { name: 'prop39', type: 'alias', value: 'eVar39' },
                      { name: 'prop65', type: 'alias', value: 'eVar65' },
                      { name: 'prop66', type: 'alias', value: 'eVar66' },
                      { name: 'prop75', type: 'alias', value: 'eVar75' },
                    ],
                    events: [{ name: 'event2', value: '%contentAge%' }],
                    server: '%hostname%',
                    pageURL: '%PageURL%',
                    pageName: '%PageTitle%',
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLefa46bf18dd94c23aa798046cb651258',
            name: 'SearchResultClick | click | 50 | [AA set, send]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector:
                    "div[data-analytics-id='squery'] article h3.h4 a, div.mwsquerygc a[data-dtm-srchlnknm]",
                  bubbleFireIfParent: !0,
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
                    var e = this.dataset.dtmSrchlnknm;
                    null !== e && (e = Number(e));
                    var t = this.href,
                      a = this.href.indexOf('?');
                    0 < a && (t = this.href.toString().substring(0, a)),
                      0 < (a = t.indexOf('#')) && (t = t.substring(0, a)),
                      0 < (a = t.lastIndexOf('/')) && (t = t.substring(a + 1)),
                      (t = 0 < (a = t.lastIndexOf('.')) ? t.substring(a + 1) : '');
                    var n = jQuery(this).text(),
                      r = n.trim().replace(/(\r\n\t|\n|\r\t)/gm, '') || n;
                    return (
                      _satellite.setVar('jsLinkText', r),
                      _satellite.setVar('jsLinkHREF', this.href),
                      _satellite.setVar('LinkHREF', this.href.replace(/[\?&]_ga=[^&#]*/gi, '')),
                      null !== e && _satellite.setVar('jsSearchLinkPosition', e),
                      0 < t.length && _satellite.setVar('jsLinkFileType', t),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var a = _satellite.getVar('SearchLinkPosition');
                      a && !isNaN(a) && (t.products = ';;;;event54=' + a);
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar51', type: 'value', value: '%LinkText%' },
                      { name: 'eVar52', type: 'value', value: '%LinkHREF%' },
                      { name: 'eVar53', type: 'value', value: '%SearchLinkPosition%' },
                      { name: 'eVar54', type: 'value', value: '%LinkFileType%' },
                      { name: 'eVar50', type: 'value', value: '%SearchTerm%' },
                    ],
                    props: [
                      { name: 'prop7', type: 'value', value: 'D="Search Result Click: "+v51' },
                    ],
                    events: [{ name: 'event51' }, { name: 'event54' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLd76d666d43c04c0b8fdb34f33dd01895',
            name:
              'Report a Problem Initiate (expand-collapse) | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.pagedetails details summary',
                  bubbleFireIfParent: !0,
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
                    return (
                      'true' != _satellite.getVar('jsReportAProblemTracked') &&
                      (_satellite.setVar('jsReportAProblemTracked', 'true'), !0)
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop7', type: 'value', value: 'Report a Problem Initiate' }],
                    events: [{ name: 'event73' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Report a Problem Initiate', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC6aa791f3740c45feb76af90c527c1480-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLebe4f4f8b8614f2c9fc8c4eac87ab84e',
            name: 'NewsFilter | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    'div.news-article-filter section > details > form.wb-tables-filter > div.row > div > button.btn-primary',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop7', type: 'value', value: 'D="News Filter click"' }],
                    events: [{ name: 'event53' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC61c58f06b89c4c569b03d8930a622e59-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL0dece1ee8e41452b86bfda4826fc7313',
            name: 'SocialShareInit | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.wb-share a.shr-opn',
                  bubbleFireIfParent: !0,
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
                    var e = this.parentElement.getAttribute('data-wb-share');
                    if (!('undefined' != typeof JSON && null != e && 0 < e.length)) return !1;
                    try {
                      e = JSON.parse(e);
                    } catch (t) {
                      e = null;
                    }
                    return (
                      null != e &&
                      ('undefined' != typeof e.type && null !== e.type && 0 < e.type.length
                        ? (_satellite.setVar('jsSocialShareMediaType', e.type),
                          _satellite.setVar('jsSocialShareMediaTitle', e.title))
                        : 'undefined' != typeof e.custType &&
                          null !== e.custType &&
                          0 < e.custType.length
                        ? (_satellite.setVar('jsSocialShareMediaType', e.custType),
                          _satellite.setVar('jsSocialShareMediaTitle', e.title))
                        : (_satellite.setVar('jsSocialShareMediaType', 'page'),
                          _satellite.setVar(
                            'jsSocialShareMediaTitle',
                            _satellite.getVar('PageTitle')
                          )),
                      !0)
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar71',
                        type: 'value',
                        value: '%SocialShareMediaType%:%SocialShareMediaTitle%',
                      },
                    ],
                    events: [{ name: 'event71' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%this.@text%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC069f19f8126144948be7da583d0c864d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL1975d67080274047ac537499c558f459',
            name: 'EnSuprQ | direct call | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'EnSuprQ' },
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
                      { name: 'eVar90', type: 'value', value: '%SurveyTask%' },
                      { name: 'eVar91', type: 'value', value: '%SuprQ%' },
                      { name: 'eVar93', type: 'value', value: '%SurveyTaskFr%' },
                      { name: 'eVar94', type: 'value', value: '%SuprQFr%' },
                      {
                        name: 'eVar96',
                        type: 'value',
                        value: 'Legacy-SW-5-ES-Canada-ca:n:n:n:n:n:n',
                      },
                    ],
                    props: [
                      {
                        name: 'prop7',
                        type: 'value',
                        value: 'Standardized Survey Completed / Sondage normalisé terminé',
                      },
                    ],
                    events: [{ name: 'event91' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'Standardized Survey Completed / Sondage normalisé terminé',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCeb393ad9e25e4ecdb2958e4d2bc2670a-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLf282a37072c94089808ec71244580047',
            name: 'dataTableFilterTerms | blur | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/blur.js',
                settings: {
                  elementSelector: 'div.dataTables_filter input',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    if ($('div.dataTables_filter input').val()) {
                      var e = $('div.dataTables_filter input')
                        .val()
                        .trim()
                        .replace(/(\r\n\t|\n|\r\t)/gm, '');
                      return _satellite.setVar('jsdataTableField', e), !0;
                    }
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar76', type: 'value', value: '%dataTableField%' }],
                    props: [
                      { name: 'prop7', type: 'value', value: 'D="data table filter: "+v76' },
                    ],
                    events: [{ name: 'event76' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCa472925e3dcc4c9ab09c28127aa6ebdf-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL62c3bbbc4007491c9f507bb68ef3141c',
            name: 'Outbound Link | click | 60 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a[href]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 60,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = this.hostname.toLowerCase(),
                      t = _satellite.gcCustom.internal_filters;
                    if (
                      (_satellite.logger.info('list.indexOf(h)=', t.indexOf(e)),
                      -1 !== t.indexOf(e))
                    )
                      return !1;
                    if (
                      ((e = this.protocol.toLowerCase()),
                      -1 !== (t = _satellite.gcCustom.protocol_blacklist).indexOf(e))
                    )
                      return !1;
                    if (
                      _satellite.gcCustom.downloadFileType instanceof RegExp &&
                      _satellite.gcCustom.downloadFileType.test(this.href)
                    )
                      return !1;
                    if (this.hasAttribute('data-dtm-srchlnknm')) return !1;
                    if (jQuery(this).hasClass('paginate_button')) return !1;
                    if (0 < jQuery(this).parents('.followus').length) return !1;
                    if (
                      _satellite.getVar('jsFollowDialog') &&
                      $(this).parents('#' + _satellite.getVar('jsFollowDialog') + '.modal-dialog')
                        .length
                    )
                      return !1;
                    if (/\bshr-lnk\b/i.test(this.className)) return !1;
                    var a = this.href.replace(/[\?&]_ga=[^&#]*/gi, '');
                    if (
                      (_satellite.setVar('jsLinkHREF', a),
                      void 0 !== $(this).attr('data-gc-analytics') &&
                        (n = $(this)
                          .find('figure>figcaption')
                          .text()
                          .trim()
                          .replace(/(\r\n\t|\n|\r\t)/gm, '')),
                      !n)
                    )
                      var n = $(this)
                        .text()
                        .trim()
                        .replace(/(\r\n\t|\n|\r\t)/gm, '');
                    return (
                      _satellite.setVar('jsLinkText', n), null != e && '' != e && 'undefined' != e
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar27', type: 'value', value: '%jsLinkText%' },
                      { name: 'eVar28', type: 'value', value: '%jsLinkHREF%' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Outbound: "+v27' }],
                    events: [{ name: 'event26' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%jsLinkHREF%', linkType: 'e' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC01d1ee312ca44323a0afd8942f4571a3-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL34f534bb96334b81bca6f4ad6c3026d6',
            name: 'Find what you were looking for-No | click | 50 [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: 'button[data-gc-analytics-wtph-no]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      {
                        name: 'prop7',
                        type: 'value',
                        value:
                          'Did you find what you were looking for? | Avez-vous trouvé ce que vous cherchiez? - No click',
                      },
                    ],
                    events: [{ name: 'event84' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName:
                    'Did you find what you were looking for? | Avez-vous trouvé ce que vous cherchiez? - No click',
                  linkType: 'o',
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCf4d28b8aa57349c2acdde99b23077879-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL4f1f7ccc41e949aca351a8a60ce681c8',
            name: 'Expand All Button | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'button.btn-default.wb-toggle',
                  bubbleFireIfParent: !0,
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
                    var e,
                      t = JSON.parse($(this).attr('data-toggle').replace(/'/g, '"'));
                    if (
                      ('on' == t.type &&
                        $(t.parent)
                          .find('details')
                          .each(function () {
                            $(this).attr('open') || (e = !0);
                          }),
                      e)
                    ) {
                      var a = jQuery(this)
                          .text()
                          .trim()
                          .replace(/(\r\n\t|\n|\r\t)/gm, ''),
                        n = jQuery(this)
                          .parent()
                          .prev('h2')
                          .text()
                          .trim()
                          .replace(/(\r\n\t|\n|\r\t)/gm, '');
                      return (
                        '' === n
                          ? _satellite.setVar('jsExpand-CollapseTitle', a)
                          : _satellite.setVar('jsExpand-CollapseTitle', a + ' - ' + n),
                        !0
                      );
                    }
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar38', type: 'value', value: '%Expand-CollapseTitle%' },
                      { name: 'eVar77', type: 'value', value: '%MandateTrackerExpand-Collapse%' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Expand All Open: "+v38' }],
                    events: [{ name: 'event32' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCa2b26481276f407b9ae394483ab6c8ed-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL568dec2b64954c2394515659799d15aa',
            name: 'NavigationTracking | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector:
                    "header nav:not([property=breadcrumb]) a:not([href='#']),  footer nav a:not([href='#'])",
                  bubbleFireIfParent: !0,
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
                    var e,
                      t = this,
                      a = [],
                      n = t.parentElement,
                      r = n.nodeName,
                      s = !1;
                    for (a.push(t.innerText); 'BODY' !== r; ) {
                      if (
                        (s ||
                          ('UL' !== r && !e) ||
                          (n.previousElementSibling
                            ? ((e = !1), a.unshift(n.previousElementSibling.innerText))
                            : (e = !0)),
                        'HEADER' === (r = (n = n.parentElement).nodeName) || 'FOOTER' === r)
                      ) {
                        a.unshift(r.toLowerCase());
                        break;
                      }
                      if ('NAV' === r);
                      else if ('NAV' === r && ((s = !0), 'info-pnl' === n.id)) {
                        a.unshift('footer');
                        break;
                      }
                    }
                    var i = a.shift().replace(':', '.');
                    (i = i.charAt(0).toUpperCase() + i.slice(1)), a.shift();
                    var o = a.shift().replace(':', '.'),
                      c = a.join('-').replace(':', '.');
                    return (
                      c || ((c = o), (o = i)),
                      _satellite.setVar(
                        'jsNavTracking',
                        i.trim().replace(/(\r\n\t|\n|\r\t)/gm, '') +
                          ':' +
                          o.trim().replace(/(\r\n\t|\n|\r\t)/gm, '') +
                          ':' +
                          c.trim().replace(/(\r\n\t|\n|\r\t)/gm, '')
                      ),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar70', type: 'value', value: '%NavTracking %' }],
                    props: [
                      { name: 'prop70', type: 'value', value: 'D=v70' },
                      { name: 'prop7', type: 'value', value: 'Navigation click' },
                    ],
                    events: [{ name: 'event70' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC3b474b93d50e486da04cb69abceb45d2-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL0dc7023880a64adf84096df8dbb13b8c',
            name: 'GoCActivities | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.gc-nttvs a[href] > *',
                  bubbleFireIfParent: !0,
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
                    var e = jQuery(this.parentElement).text();
                    return (
                      e.length < 1 && (e = jQuery(this.parentElement).children('img').attr('alt')),
                      _satellite.setVar('jsMarketingDestination', this.parentElement.href),
                      _satellite.setVar('jsMarketingTitle', e),
                      _satellite.setCookie('dtm_gpv_nav', 'GoC Features', 0.0208333),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list1 = 'goc activity:' + _satellite.getVar('MarketingTitle')),
                        (t.linkTrackVars += ',list1');
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar43', type: 'value', value: '%MarketingTitle%' },
                      { name: 'eVar45', type: 'value', value: 'goc activity' },
                      { name: 'eVar44', type: 'value', value: '%MarketingDestination%' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'D="GoC Activities: "+v43' }],
                    events: [{ name: 'event42' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%MarketingTitle%', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCbc879b6580e8474aaf05345ace716961-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLb55cfb86891e42a88caee94c9905a698',
            name: 'All Page | Visitor: Device Type Desktop | page bottom | 50 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/deviceType.js',
                settings: { deviceTypes: ['Desktop'] },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar4', type: 'value', value: 'desktop' }],
                    props: [{ name: 'prop4', type: 'alias', value: 'eVar4' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source: 'sessionStorage.setItem("device", "desktop");',
                  language: 'javascript',
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL4cb1b9e07b49470c9c62ac567a01fae8',
            name: 'Report a Problem Initiate (button) | click | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 500,
                  elementSelector: 'a.btn.btn-default.btn-block',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex', caseInsensitive: !0 },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = jQuery(this).text(),
                      t = 'Report a problem or mistake on this page',
                      a = 'Report a problem on this page',
                      n = 'Signaler un problème ou une erreur sur cette page',
                      r = 'Signaler un problème sur cette page';
                    return (
                      'true' != _satellite.getVar('jsReportAProblemTracked') &&
                      (e === t || e === n || e === a || e === r) &&
                      (_satellite.setVar('jsReportAProblemTracked', 'true'), !0)
                    );
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop7', type: 'value', value: 'Report a Problem Initiate' }],
                    events: [{ name: 'event73' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC8f0f4c69fad34f9899bd5e79cd4f60fe-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL6c89c9cabe954aedb54b00a48b82c3b2',
            name: 'Media Progress (50) | direct call | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'media mark 50' },
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
                      { name: 'eVar61', type: 'value', value: '%MediaType%:%MediaTitle%' },
                      { name: 'eVar62', type: 'value', value: '%MediaFormat%' },
                      { name: 'eVar63', type: 'value', value: '%MediaSource%' },
                    ],
                    events: [{ name: 'event63' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Media Progress (50) ', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC84b929098c9e4278802d43e619dabf84-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLafa61f1b26394184900549ce2fd962d5',
            name: 'Error Page | page bottom | 95 | [AA set]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 95 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      'undefined' !=
                      typeof {
                        'Not Found - Canada.ca': '404',
                        'Pas trouvé - Canada.ca': '404',
                        'Errors - Canada.ca': '404',
                        'Forbidden - Canada.ca': '403',
                        'Interdit - Canada.ca': '403',
                        'Internal Server Error - Canada.ca': '500',
                        'Erreur Interne du Serveur - Canada.ca': '500',
                      }[document.title]
                    );
                  },
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.pageType = 'errorPage'),
                        (t.channel = null),
                        (t.eVar16 = 'blank theme'),
                        (t.eVar15 = 'blank page creator'),
                        t.getPreviousValue(t.eVar16, 'dtm_gpv_pthl', null),
                        t.getPreviousValue(t.eVar15, 'dtm_gpv_pc', null),
                        '404' == t.eVar20 &&
                          ((t.eVar11 = 'Page Not Found'),
                          (t.pageName = 'Page Not Found'),
                          t.getPreviousValue(t.eVar11, 'dtm_gpv_pt', null));
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar19', type: 'value', value: '%DocumentReferrer%' },
                      { name: 'eVar20', type: 'value', value: '%ErrorPageType%' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Error: "+v20' }],
                    events: [{ name: 'event20' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL8b183a3ba6394329a30b3b1678cca4c1',
            name: 'Download Link | click | 40 | [AA set, send reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 40,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = this,
                      t = _satellite.gcCustom.downloadFileType;
                    if (
                      ((downloadName = e.getAttribute('download')),
                      !(downloadName || e.hasAttribute('download') || t.test(e.href)) ||
                        e.hasAttribute('data-dtm-srchlnknm'))
                    )
                      return !1;
                    var a = 'wb-lbx';
                    if (e.classList.contains(a) || $(e).parents('.' + a).length) return !1;
                    var n = location,
                      r = e.querySelector('figcaption'),
                      s = r ? r.textContent : e.textContent,
                      i = downloadName ? n.origin + n.pathname + '/' + downloadName : e.href;
                    return (
                      (s = s.trim().replace(/(\r\n\t|\n|\r\t)/gm, '')),
                      _satellite.setVar('jsLinkUrl', i),
                      _satellite.setVar('jsLinkText', s),
                      !0
                    );
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar27', type: 'value', value: '%LinkText%' },
                      { name: 'eVar28', type: 'value', value: '%LinkUrl%' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Download: "+v27' }],
                    events: [{ name: 'event25' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%LinkUrl%', linkType: 'd' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC744bce40178748a9a15909fc7969d2f7-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLa5ab64b2ea7041c09292e63914296d2b',
            name: 'Media Play | direct call | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'media play' },
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
                      { name: 'eVar61', type: 'value', value: '%MediaType%:%MediaTitle%' },
                      { name: 'eVar62', type: 'value', value: '%MediaFormat%' },
                      { name: 'eVar63', type: 'value', value: '%MediaSource%' },
                    ],
                    props: [{ name: 'prop7', type: 'value', value: '%VideoVisitorAction%' }],
                    events: [{ name: 'event61' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Media Play', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCa2202330687b4c8a8c6ed4c9f5173ebb-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL793de3dafbf3407992a1a9efdc2a373f',
            name: 'Media Progress (80) | direct call | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'media mark 80' },
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
                      { name: 'eVar61', type: 'value', value: '%MediaType%:%MediaTitle%' },
                      { name: 'eVar62', type: 'value', value: '%MediaFormat%' },
                      { name: 'eVar63', type: 'value', value: '%MediaSource%' },
                    ],
                    events: [{ name: 'event64' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Media Progress (80)', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC2732bf4a02f84f0db23bbd8b0f7d6a5f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL69d4111f1bd54e9d879c0e2eccb67721',
            name: 'HomePageFeatureImpressionFix-Check',
            events: [
              {
                modulePath: 'core/src/lib/events/timeOnPage.js',
                settings: { timeOnPage: 6 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    if (window.dtmAsyncTracker) {
                      var e = "a[data-gc-analytics='promo:homePageFeature']:not([class~=hide])",
                        t = ' figure figcaption',
                        a = document.querySelector(e + t);
                      a || (a = document.querySelector(e));
                      var n = a.textContent
                        .replace(/\s+$/g, '')
                        .trim()
                        .replace(/(\r\n\t|\n|\r\t)/gm, '');
                      return (
                        !!a &&
                        (_satellite.setVar('jsHomePageFeatureIE', n),
                        delete window.dtmAsyncTracker,
                        !0)
                      );
                    }
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list1 = 'home page feature:' + _satellite.getVar('HomePageFeatureIE')),
                        (t.linkTrackVars += ',list1');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event41' }] },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RC4e29c0e32abf4822a03f907e5dcc5707-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLda9d3f5c8c5d478580b4a2038992fe85',
            name: '(MT) FormFindKeywords | submit | 50 | [AA set, send, reset]',
            events: [
              {
                modulePath: 'core/src/lib/events/submit.js',
                settings: {
                  elementSelector:
                    'form[data-gc-analytics="formName:PCO - Mandate Tracker Search Filter"]',
                  bubbleFireIfParent: !0,
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
                    var e = $('input[data-gc-analytics="form:text"]').attr('type'),
                      t = $('input[data-gc-analytics="form:text"]').attr('name'),
                      a = $('input[data-gc-analytics="form:text"]').val(),
                      n = $(
                        'form[data-gc-analytics="formName:PCO - Mandate Tracker Search Filter"]'
                      )
                        .attr('data-gc-analytics')
                        .replace(/(formName:)/, ''),
                      r = e + ':' + t + ':' + a;
                    if ((_satellite.setVar('jsFormName', n), '' !== a))
                      return _satellite.setVar('jsFindKeyword', r), !0;
                  },
                },
                timeout: 2000,
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%jsAbort%',
                  rightOperand: 'false',
                },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.list2 = _satellite.getVar('FindKeyword')), (t.linkTrackVars += ',list2');
                    },
                  },
                  trackerProperties: {
                    eVars: [{ name: 'eVar79', type: 'value', value: '%FormName%' }],
                    props: [{ name: 'prop7', type: 'value', value: 'D="Form submit: "+v79' }],
                    events: [{ name: 'event79' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '(MT) FormFindKeywords', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/be5dfd287373/abb618326704/01dc424d4520/RCcd4ade3266564166a4ee660515f18a38-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RL410e648b786d4faba2756c421f620b95',
            name: 'Mediaplayer Setup | page bottom | 50 | [CC]',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function MediaSetup() {\n    var mltmd = jQuery(".wb-mltmd");\n    var mltmdSet = new Array(mltmd.length);\n      \n    for(var i=0; i < mltmd.length; i++)  {\n      var e = mltmd.get(i);\n      var md = jQuery(e);\n      var va = md.find("video,audio");\n      if(va.length > 0) {\n          \n          //Video Title\n          var ttl = va.attr("title");\n          if(ttl == null || ttl.length < 1){\n              ttl = "";\n          }\n          \n          //Video or Audio and Format (video/youtube)\n          var type = va.find("source").attr("type");\n          var frmt2 = "";\n          if(type == null || type.length < 1){\n              type = "";\n              frmt = "";\n          }\n          else {\n              var frmt = type.split("/", 2);\n              if(frmt.length > 1)\n                  frmt2 = frmt[0];\n          }\n          \n          //Source URL\n          var src = va.find("source").attr("src");\n          if(src == null || src.length < 1){\n              src = "";\n          }\n          \n          \n          mltmdSet[i] = {\n          el:e,\n          ct:0, \n          tt:0,\n          vid_per:0,\n          vid_sent_per: new Array(),\n          title:ttl,\n          vidOrAud:frmt2,\n          source:src,\n          format:type,\n          playSent:false,      \n          endedSent:false \n          };\n          \n          md.on("playing timeupdate ended", jQuery.proxy(function(x){\n          var m = jQuery(this.el);\n          \n          switch(x.type){\n              case "playing":\n              if(this.playSent == false){\n                var duration = m.find(".wb-mm-tmln-ttl span:not(.wb-inv)").text().trim();\n                if(!/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(duration))\n                  duration = "00:00:00";\n                if(this.tt == 0)\n                  this.tt = Math.floor(Date.parse("Thu, 01 Jan 1970, "+duration+" GMT-0400") - Date.parse("Thu, 01 Jan 1970, 00:00:00 GMT-0400"));\n                if(this.tt !== 0){\n                  _satellite.setVar("jsMediaTitle", this.title);\n                  _satellite.setVar("jsMediaType", this.vidOrAud);\n                  _satellite.setVar("jsMediaFormat", this.format);\n                  _satellite.setVar("jsMediaSource", this.source);\n                  _satellite.track("media play");\n                  this.playSent=true;  \n                }\n              }\n              break;\n              case "timeupdate":\n              var currentTime = m.find(".wb-mm-tmln-crrnt span:not(.wb-inv)").text().trim();\n              if(!/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(currentTime))\n                    currentTime = "00:00:00";\n              var ctime = Math.floor(Date.parse("Thu, 01 Jan 1970, "+currentTime+" GMT-0400") - Date.parse("Thu, 01 Jan 1970, 00:00:00 GMT-0400"));\n              \n              var timeParts = 10;\n              var timeMark = Math.floor(this.tt / timeParts);\n  \n              if (ctime !== 0) {\n                  if(this.ct !== ctime){\n                          this.ct = ctime;\n                  for (var i = 1; i <= timeParts; i++) {\n                      if (this.ct == Math.round(timeMark * i / 1000)*1000) {\n                      this.vid_per = (100/timeParts) * i;\n                      i=timeParts;\n                      }\n                  } \n                  \n                  switch(this.vid_per){\n                      case 20:\n                      var sent = jQuery.inArray(this.vid_per, this.vid_sent_per);\n                      if (sent < 0) {\n                          _satellite.setVar("jsMediaTitle", this.title);\n                          _satellite.setVar("jsMediaType", this.vidOrAud);\n                          _satellite.setVar("jsMediaFormat", this.format);\n                          _satellite.setVar("jsMediaSource", this.source);\n                          _satellite.track("media mark 20");\n                          this.vid_sent_per.push(this.vid_per);\n                      }\n                      break;\n                      case 50:\n                      var sent = jQuery.inArray(this.vid_per, this.vid_sent_per);\n                      if (sent < 0) {\n                          _satellite.setVar("jsMediaTitle", this.title);\n                          _satellite.setVar("jsMediaType", this.vidOrAud);\n                          _satellite.setVar("jsMediaFormat", this.format);\n                          _satellite.setVar("jsMediaSource", this.source);\n                          _satellite.track("media mark 50");\n                          this.vid_sent_per.push(this.vid_per);\n                      }\n                      break;\n                      case 80:\n                      var sent = jQuery.inArray(this.vid_per, this.vid_sent_per);\n                      if (sent < 0) {\n                          _satellite.setVar("jsMediaTitle", this.title);\n                          _satellite.setVar("jsMediaType", this.vidOrAud);\n                          _satellite.setVar("jsMediaFormat", this.format);\n                          _satellite.setVar("jsMediaSource", this.source);\n                          _satellite.track("media mark 80");\n                          this.vid_sent_per.push(this.vid_per);\n                      }\n                      break;  \n                  }\n                  }\n                  }\n              break;    \n          }\n          },mltmdSet[i]));    \n      }\n    }\t\n  }\n  if(typeof jQuery === "function"){ \n    MediaSetup();\n  } else {\n    setTimeout(function(){\n      if(typeof jQuery === "function"){ \n        MediaSetup();\n      } \t  \n    }, 500);\n  }',
                  language: 'javascript',
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
        ],
      });
    var $___var_cb58eda3d65afc55 = (function () {
      const $___old_5ddc0b712f6ae8c4 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_5ddc0b712f6ae8c4)
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
            var a = this.constructor;
            return this.then(
              function (e) {
                return a.resolve(t()).then(function () {
                  return e;
                });
              },
              function (e) {
                return a.resolve(t()).then(function () {
                  return a.reject(e);
                });
              }
            );
          }
          function l (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function n () {}
          function r (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function s (e) {
            if (!(this instanceof s)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              m(e, this);
          }
          function i (n, r) {
            for (; 3 === n._state; ) n = n._value;
            0 !== n._state
              ? ((n._handled = !0),
                s._immediateFn(function () {
                  var e = 1 === n._state ? r.onFulfilled : r.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(n._value);
                    } catch (a) {
                      return void c(r.promise, a);
                    }
                    o(r.promise, t);
                  } else (1 === n._state ? o : c)(r.promise, n._value);
                }))
              : n._deferreds.push(r);
          }
          function o (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var a = t.then;
                if (t instanceof s) return (e._state = 3), (e._value = t), void u(e);
                if ('function' == typeof a) return void m(r(a, t), e);
              }
              (e._state = 1), (e._value = t), u(e);
            } catch (n) {
              c(e, n);
            }
          }
          function c (e, t) {
            (e._state = 2), (e._value = t), u(e);
          }
          function u (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              s._immediateFn(function () {
                e._handled || s._unhandledRejectionFn(e._value);
              });
            for (var t = 0, a = e._deferreds.length; t < a; t++) i(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function d (e, t, a) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = a);
          }
          function m (e, t) {
            var a = !1;
            try {
              e(
                function (e) {
                  a || ((a = !0), o(t, e));
                },
                function (e) {
                  a || ((a = !0), c(t, e));
                }
              );
            } catch (n) {
              if (a) return;
              (a = !0), c(t, n);
            }
          }
          function p (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function a () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var t = {}, a = 0; a < 10; a++) t['_' + String.fromCharCode(a)] = a;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join('')
              )
                return !1;
              var n = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  n[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
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
                var a = [];
                return (
                  e.forEach(function (t) {
                    t.events &&
                      t.events.forEach(function (e) {
                        a.push({ rule: t, event: e });
                      });
                  }),
                  a.sort(function (e, t) {
                    return e.event.ruleOrder - t.event.ruleOrder;
                  })
                );
              },
              h = 'debug',
              v = function (t, e) {
                var a = function () {
                    return 'true' === t.getItem(h);
                  },
                  n = function (e) {
                    t.setItem(h, e);
                  },
                  r = [],
                  s = function (e) {
                    r.push(e);
                  };
                return (
                  (e.outputEnabled = a()),
                  {
                    onDebugChanged: s,
                    getDebugEnabled: a,
                    setDebugEnabled: function (t) {
                      a() !== t &&
                        (n(t),
                        (e.outputEnabled = t),
                        r.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              b = 'Module did not export a function.',
              y = function (s, i) {
                return function (e, t, a) {
                  a = a || [];
                  var n = s.getModuleExports(e.modulePath);
                  if ('function' != typeof n) throw new Error(b);
                  var r = i(e.settings || {}, t);
                  return n.bind(null, r).apply(null, a);
                };
              },
              w = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              k = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              S = '\uD83D\uDE80',
              C =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : S,
              _ = !1,
              P = function (e) {
                if (_ && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(C),
                    e !== k.DEBUG || window.console[e] || (e = k.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              j = P.bind(null, k.LOG),
              E = P.bind(null, k.INFO),
              x = P.bind(null, k.DEBUG),
              V = P.bind(null, k.WARN),
              T = P.bind(null, k.ERROR),
              I = {
                log: j,
                info: E,
                debug: x,
                warn: V,
                error: T,
                get outputEnabled () {
                  return _;
                },
                set outputEnabled (e) {
                  _ = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: j.bind(null, t),
                    info: E.bind(null, t),
                    debug: x.bind(null, t),
                    warn: V.bind(null, t),
                    error: T.bind(null, t),
                  };
                },
              },
              A = e(function (n) {
                !(function (e) {
                  if (((n.exports = e()), !!0)) {
                    var t = window.Cookies,
                      a = (window.Cookies = e());
                    a.noConflict = function () {
                      return (window.Cookies = t), a;
                    };
                  }
                })(function () {
                  function c () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var a = arguments[e];
                      for (var n in a) t[n] = a[n];
                    }
                    return t;
                  }
                  function u (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (l) {
                    function o () {}
                    function a (e, t, a) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (a = c({ path: '/' }, o.defaults, a)).expires &&
                          (a.expires = new Date(1 * new Date() + 86400000 * a.expires)),
                          (a.expires = a.expires ? a.expires.toUTCString() : '');
                        try {
                          var n = JSON.stringify(t);
                          /^[\{\[]/.test(n) && (t = n);
                        } catch (i) {}
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
                        for (var s in a)
                          a[s] &&
                            ((r += '; ' + s), !0 !== a[s] && (r += '=' + a[s].split(';')[0]));
                        return (document.cookie = e + '=' + t + r);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var a = {},
                            n = document.cookie ? document.cookie.split('; ') : [],
                            r = 0;
                          r < n.length;
                          r++
                        ) {
                          var s = n[r].split('='),
                            i = s.slice(1).join('=');
                          t || '"' !== i.charAt(0) || (i = i.slice(1, -1));
                          try {
                            var o = u(s[0]);
                            if (((i = (l.read || l)(i, o) || u(i)), t))
                              try {
                                i = JSON.parse(i);
                              } catch (c) {}
                            if (((a[o] = i), e === o)) break;
                          } catch (c) {}
                        }
                        return e ? a[e] : a;
                      }
                    }
                    return (
                      (o.set = a),
                      (o.get = function (e) {
                        return t(e, !1);
                      }),
                      (o.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (o.remove = function (e, t) {
                        a(e, '', c(t, { expires: -1 }));
                      }),
                      (o.defaults = {}),
                      (o.withConverter = e),
                      o
                    );
                  }
                  return e(function () {});
                });
              }),
              D = { get: A.get, set: A.set, remove: A.remove },
              N = window,
              O = 'com.adobe.reactor.',
              M = function (n, e) {
                var r = O + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_f5328f53729fbc63 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_f5328f53729fbc63)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        try {
                          return N[n].getItem(r + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_f5328f53729fbc63)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_f5328f53729fbc63
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_0e1a6f8e420549e7 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_0e1a6f8e420549e7)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        try {
                          return N[n].setItem(r + e, t), !0;
                        } catch (a) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_0e1a6f8e420549e7)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_0e1a6f8e420549e7
                        ));
                    }
                  },
                };
              },
              F = '_sdsat_',
              L = 'dataElements.',
              R = 'dataElementCookiesMigrated',
              q = M('localStorage'),
              B = M('sessionStorage', L),
              H = M('localStorage', L),
              U = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              $ = {},
              W = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (a) {}
                return t;
              },
              G = function (e, t, a) {
                var n;
                switch (t) {
                  case U.PAGEVIEW:
                    return void ($[e] = a);
                  case U.SESSION:
                    return void ((n = W(a)) && B.setItem(e, n));
                  case U.VISITOR:
                    return void ((n = W(a)) && H.setItem(e, n));
                }
              },
              Q = function (e, t) {
                var a = D.get(F + e);
                a !== undefined && G(e, t, a);
              },
              z = {
                setValue: G,
                getValue: function (e, t) {
                  var a;
                  switch (t) {
                    case U.PAGEVIEW:
                      return $.hasOwnProperty(e) ? $[e] : null;
                    case U.SESSION:
                      return null === (a = B.getItem(e)) ? a : JSON.parse(a);
                    case U.VISITOR:
                      return null === (a = H.getItem(e)) ? a : JSON.parse(a);
                  }
                },
                migrateCookieData: function (t) {
                  q.getItem(R) ||
                    (Object.keys(t).forEach(function (e) {
                      Q(e, t[e].storageDuration);
                    }),
                    q.setItem(R, !0));
                },
              },
              Y = function (e, t, a, n) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  a +
                  (n ? '\n' + n : '')
                );
              },
              J = function (o, c, l, u) {
                return function (e, t) {
                  var a = c(e);
                  if (!a) return u ? '' : undefined;
                  var n,
                    r = a.storageDuration;
                  try {
                    n = o.getModuleExports(a.modulePath);
                  } catch (i) {
                    return void I.error(Y(a, e, i.message, i.stack));
                  }
                  if ('function' == typeof n) {
                    var s;
                    try {
                      s = n(l(a.settings, t), t);
                    } catch (i) {
                      return void I.error(Y(a, e, i.message, i.stack));
                    }
                    return (
                      r && (null != s ? z.setValue(e, r, s) : (s = z.getValue(e, r))),
                      null == s && null != a.defaultValue && (s = a.defaultValue),
                      'string' == typeof s &&
                        (a.cleanText && (s = w(s)), a.forceLowerCase && (s = s.toLowerCase())),
                      s
                    );
                  }
                  I.error(Y(a, e, 'Module did not export a function.'));
                };
              },
              K = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return w(e.textContent);
                },
              },
              X = function (e, t, a) {
                for (var n, r = e, s = 0, i = t.length; s < i; s++) {
                  if (null == r) return undefined;
                  var o = t[s];
                  if (a && '@' === o.charAt(0)) {
                    var c = o.slice(1);
                    r = K[c](r);
                  } else if (r.getAttribute && (n = o.match(/^getAttribute\((.+)\)$/))) {
                    var l = n[1];
                    r = r.getAttribute(l);
                  } else r = r[o];
                }
                return r;
              },
              Z = function (s, i, o) {
                return function (e, t) {
                  var a;
                  if (i(e)) a = o(e, t);
                  else {
                    var n = e.split('.'),
                      r = n.shift();
                    'this' === r
                      ? t && (a = X(t.element, n, !0))
                      : 'event' === r
                      ? t && (a = X(t, n))
                      : 'target' === r
                      ? t && (a = X(t.target, n))
                      : (a = X(s[r], n));
                  }
                  return a;
                };
              },
              ee = function (a, n) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    n(e) || 'this' === t || 'event' === t || 'target' === t || a.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, a) {
                var n = { exports: {} };
                return e.call(n.exports, n, n.exports, t, a), n.exports;
              },
              ae = function () {
                var i = {},
                  a = function (e) {
                    var t = i[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(i).forEach(function (e) {
                      try {
                        n(e);
                      } catch (a) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          a.message +
                          (a.stack ? '\n' + a.stack : '');
                        I.error(t);
                      }
                    });
                  },
                  n = function (e) {
                    var t = a(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, a, n, r) {
                    var s = { definition: t, extensionName: a, require: n, turbine: r };
                    (s.require = n), (i[e] = s);
                  },
                  hydrateCache: e,
                  getModuleExports: n,
                  getModuleDefinition: function (e) {
                    return a(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return a(e).extensionName;
                  },
                };
              },
              ne = !1,
              re = function (n) {
                return function (t, a) {
                  var e = n._monitors;
                  e &&
                    (ne ||
                      (I.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (ne = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](a);
                    }));
                };
              },
              se = function (r, s, i) {
                var a,
                  n,
                  o,
                  c,
                  l = [],
                  u = function (e, t, a) {
                    if (!r(t)) return e;
                    l.push(t);
                    var n = s(t, a);
                    return l.pop(), null == n && i ? '' : n;
                  };
                return (
                  (a = function (e, a) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? u(e, t[1], a)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return u(e, t, a);
                        });
                  }),
                  (n = function (e, t) {
                    for (var a = {}, n = Object.keys(e), r = 0; r < n.length; r++) {
                      var s = n[r],
                        i = e[s];
                      a[s] = c(i, t);
                    }
                    return a;
                  }),
                  (o = function (e, t) {
                    for (var a = [], n = 0, r = e.length; n < r; n++) a.push(c(e[n], t));
                    return a;
                  }),
                  (c = function (e, t) {
                    return 'string' == typeof e
                      ? a(e, t)
                      : Array.isArray(e)
                      ? o(e, t)
                      : 'object' == typeof e && null !== e
                      ? n(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < l.length
                      ? (I.error('Data element circular reference detected: ' + l.join(' -> ')), e)
                      : c(e, t);
                  }
                );
              },
              ie = function (r) {
                return function (e, t) {
                  if ('string' == typeof e) r[arguments[0]] = t;
                  else if (arguments[0]) {
                    var a = arguments[0];
                    for (var n in a) r[n] = a[n];
                  }
                };
              },
              oe = setTimeout;
            (s.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (s.prototype.then = function (e, t) {
                var a = new this.constructor(n);
                return i(this, new d(e, t, a)), a;
              }),
              (s.prototype['finally'] = t),
              (s.all = function (t) {
                return new s(function (r, s) {
                  function i (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var a = e.then;
                        if ('function' == typeof a)
                          return void a.call(
                            e,
                            function (e) {
                              i(t, e);
                            },
                            s
                          );
                      }
                      (o[t] = e), 0 == --c && r(o);
                    } catch (n) {
                      s(n);
                    }
                  }
                  if (!l(t)) return s(new TypeError('Promise.all accepts an array'));
                  var o = Array.prototype.slice.call(t);
                  if (0 === o.length) return r([]);
                  for (var c = o.length, e = 0; e < o.length; e++) i(e, o[e]);
                });
              }),
              (s.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === s
                  ? t
                  : new s(function (e) {
                      e(t);
                    });
              }),
              (s.reject = function (a) {
                return new s(function (e, t) {
                  t(a);
                });
              }),
              (s.race = function (r) {
                return new s(function (e, t) {
                  if (!l(r)) return t(new TypeError('Promise.race accepts an array'));
                  for (var a = 0, n = r.length; a < n; a++) s.resolve(r[a]).then(e, t);
                });
              }),
              (s._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  oe(e, 0);
                }),
              (s._unhandledRejectionFn = function _t (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || s['default'] || s,
              le = function (l, a, n) {
                return function (o, t, c, e) {
                  return e.then(function () {
                    var s,
                      i = o.delayNext;
                    return new ce(function (e, t) {
                      var a = l(o, c, [c]);
                      if (!i) return e();
                      var n = o.timeout,
                        r = new ce(function (e, t) {
                          s = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  n / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, n);
                        });
                      ce.race([a, r]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(s), (e = a(e)), n(o, t, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(s);
                      });
                  });
                };
              },
              ue = function (c, a, n, r, l) {
                return function (i, t, o, e) {
                  return e.then(function () {
                    var s;
                    return new ce(function (e, t) {
                      var a = c(i, o, [o]),
                        n = i.timeout,
                        r = new ce(function (e, t) {
                          s = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  n / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, n);
                        });
                      ce.race([a, r]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(s), (e = a(e)), r(i, t, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(s), !n(i, e))) return l(i, t), ce.reject();
                      });
                  });
                };
              },
              de = ce.resolve(),
              me = function (n, r, e) {
                return function (t, a) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        de = n(e, t, a, de);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        de = r(e, t, a, de);
                      }),
                    (de = (de = de.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              pe = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              ge = function (i, o, c, l) {
                return function (e, t) {
                  var a;
                  if (e.conditions)
                    for (var n = 0; n < e.conditions.length; n++) {
                      a = e.conditions[n];
                      try {
                        var r = i(a, t, [t]);
                        if (pe(r))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!o(a, r)) return c(a, e), !1;
                      } catch (s) {
                        return l(a, e, s), !1;
                      }
                    }
                  return !0;
                };
              },
              fe = function (a, n) {
                return function (e, t) {
                  a(e, t) && n(e, t);
                };
              },
              he = function (a) {
                return function (e) {
                  var t = a.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              ve = function (r) {
                return function (e) {
                  var t = e.rule,
                    a = e.event,
                    n = r.getModuleDefinition(a.modulePath).name;
                  return {
                    $type: r.getModuleExtensionName(a.modulePath) + '.' + n,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              be = function (o, c, l, u, d, m) {
                return function (a, e) {
                  var n = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var r = d(e);
                    c(t, null, [
                      function s (e) {
                        var t = l(r, e);
                        a(function () {
                          o(t, n);
                        });
                      },
                    ]);
                  } catch (i) {
                    m.error(u(t, n, i));
                  }
                };
              },
              ye = function (r, s, i, o) {
                return function (e, t, a) {
                  var n = s(e);
                  i.error(r(n, t.name, a)), o('ruleActionFailed', { rule: t, action: e });
                };
              },
              we = function (r, s, i, o) {
                return function (e, t, a) {
                  var n = s(e);
                  i.error(r(n, t.name, a)), o('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              ke = function (n, r, s) {
                return function (e, t) {
                  var a = n(e);
                  r.log('Condition "' + a + '" for rule "' + t.name + '" was not met.'),
                    s('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Se = function (t, a) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), a('ruleCompleted', { rule: e });
                };
              },
              Ce = function (s, i, o) {
                return function (e, t) {
                  var a;
                  if (e.actions)
                    for (var n = 0; n < e.actions.length; n++) {
                      a = e.actions[n];
                      try {
                        s(a, t, [t]);
                      } catch (r) {
                        return void i(a, e, r);
                      }
                    }
                  o(e);
                };
              },
              _e = function (a, n, r, s) {
                return function (e, t) {
                  s('ruleTriggered', { rule: t }), a ? r(t, e) : n(t, e);
                };
              },
              Pe = function (e, t, a) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  t +
                  '" rule. ' +
                  a.message +
                  (a.stack ? '\n' + a.stack : '')
                );
              },
              je = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              Ee = [],
              xe = !1,
              Ve = function (e) {
                xe ? e() : Ee.push(e);
              },
              Te = function (e, t, a) {
                e(t).forEach(function (e) {
                  a(Ve, e);
                }),
                  (xe = !0),
                  Ee.forEach(function (e) {
                    e();
                  }),
                  (Ee = []);
              },
              Ie = function (e) {
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
              De = Object.prototype.hasOwnProperty,
              Ne = Object.prototype.propertyIsEnumerable,
              Oe = a()
                ? Object.assign
                : function (e) {
                    for (var t, a, n = p(e), r = 1; r < arguments.length; r++) {
                      for (var s in (t = Object(arguments[r]))) De.call(t, s) && (n[s] = t[s]);
                      if (Ae) {
                        a = Ae(t);
                        for (var i = 0; i < a.length; i++) Ne.call(t, a[i]) && (n[a[i]] = t[a[i]]);
                      }
                    }
                    return n;
                  },
              Me = function (e, t) {
                return (
                  Oe((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          I.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Fe = function (c, l) {
                return function (e, t) {
                  var a = c[e];
                  if (a) {
                    var n = a.modules;
                    if (n)
                      for (var r = Object.keys(n), s = 0; s < r.length; s++) {
                        var i = r[s],
                          o = n[i];
                        if (o.shared && o.name === t) return l.getModuleExports(i);
                      }
                  }
                };
              },
              Le = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Re = function (a, n) {
                return function (e) {
                  if (n) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return a + e;
                };
              },
              qe = '.js',
              Be = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              He = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              Ue = function (e, t) {
                He(t, qe) || (t += qe);
                var a = t.split('/'),
                  n = Be(e).split('/');
                return (
                  a.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? n.length && n.pop() : n.push(e));
                  }),
                  n.join('/')
                );
              },
              $e = document,
              We = function (a, n) {
                return new ce(function (e, t) {
                  (n.onload = function () {
                    e(n);
                  }),
                    (n.onerror = function () {
                      t(new Error('Failed to load script ' + a));
                    });
                });
              },
              Ge = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var a = We(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), a;
              },
              Qe = function (e, t, a, n) {
                (t = t || '&'), (a = a || '=');
                var r = {};
                if ('string' != typeof e || 0 === e.length) return r;
                var s = /\+/g;
                e = e.split(t);
                var i = 1000;
                n && 'number' == typeof n.maxKeys && (i = n.maxKeys);
                var o = e.length;
                0 < i && i < o && (o = i);
                for (var c = 0; c < o; ++c) {
                  var l,
                    u,
                    d,
                    m,
                    p = e[c].replace(s, '%20'),
                    g = p.indexOf(a);
                  0 <= g ? ((l = p.substr(0, g)), (u = p.substr(g + 1))) : ((l = p), (u = '')),
                    (d = decodeURIComponent(l)),
                    (m = decodeURIComponent(u)),
                    f(r, d)
                      ? Array.isArray(r[d])
                        ? r[d].push(m)
                        : (r[d] = [r[d], m])
                      : (r[d] = m);
                }
                return r;
              },
              ze = function (e) {
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
              Ye = function (a, n, r, e) {
                return (
                  (n = n || '&'),
                  (r = r || '='),
                  null === a && (a = undefined),
                  'object' == typeof a
                    ? Object.keys(a)
                        .map(function (e) {
                          var t = encodeURIComponent(ze(e)) + r;
                          return Array.isArray(a[e])
                            ? a[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(ze(e));
                                })
                                .join(n)
                            : t + encodeURIComponent(ze(a[e]));
                        })
                        .join(n)
                    : e
                    ? encodeURIComponent(ze(e)) + r + encodeURIComponent(ze(a))
                    : ''
                );
              },
              Je = e(function (e, t) {
                (t.decode = t.parse = Qe), (t.encode = t.stringify = Ye);
              }),
              Ke = (Je.decode, Je.parse, Je.encode, Je.stringify, '@adobe/reactor-'),
              Xe = {
                cookie: D,
                document: $e,
                'load-script': Ge,
                'object-assign': Oe,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Je.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Je.stringify(e);
                  },
                },
                window: N,
              },
              Ze = function (n) {
                return function (e) {
                  if (0 === e.indexOf(Ke)) {
                    var t = e.substr(Ke.length),
                      a = Xe[t];
                    if (a) return a;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return n(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, i, o, c, l) {
                var u = e.extensions,
                  d = e.buildInfo,
                  m = e.property.settings;
                if (u) {
                  var p = Fe(u, i);
                  Object.keys(u).forEach(function (n) {
                    var r = u[n],
                      e = Le(c, r.settings);
                    if (r.modules) {
                      var t = I.createPrefixedLogger(r.displayName),
                        a = Re(r.hostedLibFilesBaseUrl, d.minified),
                        s = {
                          buildInfo: d,
                          getDataElementValue: l,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: a,
                          getSharedModule: p,
                          logger: t,
                          propertySettings: m,
                          replaceTokens: c,
                          onDebugChanged: o.onDebugChanged,
                          get debugEnabled () {
                            return o.getDebugEnabled();
                          },
                        };
                      Object.keys(r.modules).forEach(function (a) {
                        var e = r.modules[a],
                          t = Ze(function (e) {
                            var t = Ue(a, e);
                            return i.getModuleExports(t);
                          });
                        i.registerModule(a, e, n, t, s);
                      });
                    }
                  }),
                    i.hydrateCache();
                }
                return i;
              },
              tt = function (e, t, a, n, r) {
                var s = I.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  I.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = s),
                  (e.notify = function (e, t) {
                    switch (
                      (I.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        s.info(e);
                        break;
                      case 4:
                        s.warn(e);
                        break;
                      case 5:
                        s.error(e);
                        break;
                      default:
                        s.log(e);
                    }
                  }),
                  (e.getVar = n),
                  (e.setVar = r),
                  (e.setCookie = function (e, t, a) {
                    var n = '',
                      r = {};
                    a && ((n = ', { expires: ' + a + ' }'), (r.expires = a));
                    var s =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      n +
                      ').';
                    I.warn(s), D.set(e, t, r);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      I.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      D.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    I.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      D.remove(e);
                  }),
                  (e.cookie = D),
                  (e.pageBottom = function () {}),
                  (e.setDebug = a);
                var i = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      i ||
                        (I.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (i = !0)),
                      t
                    );
                  },
                });
              },
              at = window._satellite;
            if (at && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var nt = at.container;
              delete at.container;
              var rt = nt.property.settings.undefinedVarsReturnEmpty,
                st = nt.property.settings.ruleComponentSequencingEnabled,
                it = nt.dataElements || {};
              z.migrateCookieData(it);
              var ot,
                ct = function (e) {
                  return it[e];
                },
                lt = ae(),
                ut = J(
                  lt,
                  ct,
                  function () {
                    return ot.apply(null, arguments);
                  },
                  rt
                ),
                dt = {},
                mt = ie(dt),
                pt = ee(dt, ct),
                gt = Z(dt, ct, ut);
              ot = se(pt, gt, rt);
              var ft = v(M('localStorage'), I);
              tt(at, nt, ft.setDebugEnabled, gt, mt), et(nt, lt, ft, ot, ut);
              var ht = re(at),
                vt = y(lt, ot),
                bt = he(lt),
                yt = ke(bt, I, ht),
                wt = we(Pe, bt, I, ht),
                kt = ye(Pe, bt, I, ht),
                St = Se(I, ht),
                Ct = be(
                  _e(
                    st,
                    fe(ge(vt, je, yt, wt), Ce(vt, kt, St)),
                    me(ue(vt, Ie, je, wt, yt), le(vt, Ie, kt), St),
                    ht
                  ),
                  vt,
                  Me,
                  Pe,
                  ve(lt),
                  I
                );
              Te(g, nt.rules || [], Ct);
            }
            return at;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_5ddc0b712f6ae8c4)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_5ddc0b712f6ae8c4
          ));
      }
    })();
    _satellite = $___var_cb58eda3d65afc55;
  })();
}
