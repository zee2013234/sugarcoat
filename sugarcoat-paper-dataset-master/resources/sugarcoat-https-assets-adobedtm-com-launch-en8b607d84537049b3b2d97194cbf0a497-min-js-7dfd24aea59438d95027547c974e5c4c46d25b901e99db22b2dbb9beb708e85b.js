var _satellite;
{
  const $___stub_cdc5a54489618108 = {};
  (exports => {
    'use strict';
    const cookieJar = {};
    exports.cookie = {
      enumerable: true,
      configurable: true,
      get () {
        return Object.entries(cookieJar)
          .map(([key, value]) => (value == null ? key : `${key}=${value}`))
          .join('; ');
      },
      set (value) {
        const pair = value.split(';')[0];
        const parts = pair.split('=');
        const cookieKey = parts.shift().trim();
        const cookieValue = parts.length > 0 ? parts.join('=').trim() : null;
        cookieJar[cookieKey] = cookieValue;
      },
    };
  })($___stub_cdc5a54489618108);
  const $___stub_aa98dea0755b9294 = {};
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
  })($___stub_aa98dea0755b9294);
  const $___stub_9417959baab2caf0 = {};
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
  })($___stub_9417959baab2caf0);
  const $___stub_addd751f0eb655f8 = {};
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
  })($___stub_addd751f0eb655f8);
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-07-22T21:20:35Z',
          environment: 'production',
          turbineBuildDate: '2020-06-23T16:22:36Z',
          turbineVersion: '26.0.2',
        },
        dataElements: {
          'Page Data 1': {
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e (e, t, n) {
                  if (!e || !t) return !1;
                  var r,
                    i = unescape(t).toLowerCase(),
                    a = 2 < arguments.length && n;
                  for (var o in e) {
                    if (!e[o].str) return e[o].id;
                    if (!(r = e[o].str.toLowerCase()) || (a ? i == r : -1 < i.indexOf(r)))
                      return e[o].id;
                  }
                  return !1;
                }
                function t (e, t, n) {
                  if (!e || !t) return !1;
                  var r,
                    i = unescape(t).toLowerCase(),
                    a = 2 < arguments.length && n;
                  for (var o in e) {
                    if (!e[o].id) return e[o].str;
                    if (!(r = e[o].id.toLowerCase()) || (a ? i == r : -1 < i.indexOf(r)))
                      return e[o].str;
                  }
                  return !1;
                }
                function a (e) {
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
                function n (e, t) {
                  var n,
                    r = 1 < arguments.length ? t : window.location.href,
                    i = a(r).hostname + a(r).pathname;
                  for (n in e) if (-1 < i.indexOf(e[n].site)) return e[n];
                  return 0;
                }
                function r (e, t) {
                  return -1 !== e.indexOf(t, e.length - t.length);
                }
                function i (e, t) {
                  var n,
                    r = 0,
                    i = new Array();
                  for (t || (t = ','); e; )
                    (n = -1 < (n = e.indexOf(t)) ? n : e.length),
                      (i[r++] = e.substring(0, n)),
                      (e = e.substring(n + t.length));
                  return i;
                }
                (s_rsids2 = [
                  { site: 'www.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                  { site: '/demo/spark/', siteValue: 'spark:marketing:', cc: 'USD', co: '' },
                  { site: 'try.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                  { site: 'mytrial.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                  { site: 'blog.webex.', siteValue: 'webex-blog:marketing:', cc: 'USD', co: '' },
                  { site: 'support.webex.', siteValue: 'webex:support:', cc: 'USD', co: '' },
                  { site: 'signup.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                  { site: 'www.ciscospark.', siteValue: 'spark:marketing:', cc: 'USD', co: '' },
                  { site: 'video.ciscospark.', siteValue: 'spark:marketing:', cc: 'USD', co: '' },
                  { site: 'support.ciscospark.', siteValue: 'spark:support:', cc: 'USD', co: '' },
                  {
                    site: 'developer.ciscospark',
                    siteValue: 'spark:developer:',
                    cc: 'USD',
                    co: '',
                  },
                  { site: 'help.webex.', siteValue: 'cloud-collab:support:', cc: 'USD', co: '' },
                  {
                    site: 'cloudcollaborationhelp.cisco.',
                    siteValue: 'cloud-collab:support:',
                    cc: 'USD',
                    co: '',
                  },
                  { site: 'admin.ciscospark.', siteValue: 'spark:admin:', cc: '', co: '' },
                  { site: 'web.ciscospark.', siteValue: 'spark:web-client:', cc: '', co: '' },
                  { site: 'commerce.ciscospark.', siteValue: 'spark:atlas:', cc: '', co: '' },
                  { site: 'buy.ciscospark.', siteValue: 'spark:marketing:', cc: '', co: '' },
                  { site: '.webex.', siteValue: 'webex:unknown:', cc: 'USD', co: '' },
                ]),
                  (domainPeriods = [
                    { site: '/US/', ccVal: 'us' },
                    { site: '/GB/', ccVal: 'uk' },
                    { site: '/UK/', ccVal: 'uk' },
                    { site: '/FR/', ccVal: 'fr' },
                    { site: '/DE/', ccVal: 'de' },
                    { site: '/CN/', ccVal: 'cn' },
                    { site: '/ES/', ccVal: 'es' },
                    { site: '/CA/', ccVal: 'ca' },
                    { site: '/IT/', ccVal: 'it' },
                    { site: '/NL/', ccVal: 'nl' },
                    { site: '/CHT/', ccVal: 'cn' },
                    { site: '/CHS/', ccVal: 'cn' },
                    { site: '/BR/', ccVal: 'br' },
                    { site: '/HK/', ccVal: 'hk' },
                    { site: '/AU/', ccVal: 'hk' },
                    { site: '/KR/', ccVal: 'kr' },
                    { site: '/MX/', ccVal: 'mx' },
                    { site: '/demo/uk-', ccVal: 'uk' },
                    { site: '/demo/de-', ccVal: 'de' },
                    { site: '/demo/es-', ccVal: 'es' },
                    { site: '/demo/fr-', ccVal: 'fr' },
                    { site: '/demo/au-', ccVal: 'au' },
                    { site: '/demo/jp-', ccVal: 'jp' },
                    { site: '/demo/br-', ccVal: 'br' },
                    { site: '/demo/it-', ccVal: 'it' },
                    { site: '/demo/hk-', ccVal: 'hk' },
                    { site: '/demo/mx-', ccVal: 'mx' },
                    { site: '/demo/cn-', ccVal: 'cn' },
                    { site: '/demo/in-', ccVal: 'in' },
                    { site: '/demo/ca-', ccVal: 'ca' },
                    { site: '/demo/kr-', ccVal: 'kr' },
                    { site: '/meet/uk/', ccVal: 'uk' },
                    { site: '/meet/de/', ccVal: 'de' },
                    { site: '/meet/es/', ccVal: 'es' },
                    { site: '/meet/fr/', ccVal: 'fr' },
                    { site: '/meet/au/', ccVal: 'au' },
                    { site: '/meet/jp/', ccVal: 'jp' },
                    { site: '/meet/br/', ccVal: 'br' },
                    { site: '/meet/it/', ccVal: 'it' },
                    { site: '/meet/hk/', ccVal: 'hk' },
                    { site: '/meet/mx/', ccVal: 'mx' },
                    { site: '/meet/cn/', ccVal: 'cn' },
                    { site: '/meet/tw/', ccVal: 'hk' },
                    { site: '/meet/sg/', ccVal: 'hk' },
                    { site: '/meet/in/', ccVal: 'in' },
                    { site: '/meet/ca/', ccVal: 'ca' },
                    { site: '/meet/kr/', ccVal: 'kr' },
                    { site: '/mc-us', ccVal: 'us' },
                    { site: '/mc-uk', ccVal: 'uk' },
                    { site: '/mc-it', ccVal: 'it' },
                    { site: '/mc-de', ccVal: 'de' },
                    { site: '/mc-fr', ccVal: 'fr' },
                    { site: '/mc-es', ccVal: 'es' },
                    { site: 'mytrial.webex.com/uk', ccVal: 'uk' },
                    { site: 'mytrial.webex.com/fr', ccVal: 'fr' },
                    { site: 'mytrial.webex.com/de', ccVal: 'de' },
                    { site: 'mytrial.webex.com/es', ccVal: 'es' },
                    { site: 'mytrial.webex.com/in', ccVal: 'in' },
                    { site: 'mytrial.webex.com/jp', ccVal: 'jp' },
                    { site: 'mytrial.webex.com/au', ccVal: 'au' },
                    { site: 'mytrial.webex.com/it', ccVal: 'it' },
                    { site: 'mytrial.webex.com/kr', ccVal: 'kr' },
                    { site: 'mytrial.webex.com/cn', ccVal: 'cn' },
                    { site: 'mytrial.webex.com/hk', ccVal: 'hk' },
                    { site: '.com.br', ccVal: 'br' },
                    { site: '.co.uk', ccVal: 'uk' },
                    { site: '.es', ccVal: 'es' },
                    { site: '.com.mx', ccVal: 'mx' },
                    { site: '.com.au', ccVal: 'au' },
                    { site: '.de', ccVal: 'de' },
                    { site: '.fr', ccVal: 'fr' },
                    { site: '.co.it', ccVal: 'it' },
                    { site: '.com.hk', ccVal: 'hk' },
                    { site: '.co.kr', ccVal: 'kr' },
                    { site: '.co.in', ccVal: 'in' },
                    { site: '.co.jp', ccVal: 'jp' },
                    { site: '.ca', ccVal: 'ca' },
                    { site: '.com.cn', ccVal: 'cn' },
                    { site: '.com', ccVal: 'us' },
                  ]);
                var o = {
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
                    sections: [
                      { str: 'products', id: 'products' },
                      { str: 'why-webex', id: 'why-webex' },
                      { str: 'how-to', id: 'how-to' },
                      { str: 'support', id: 'support' },
                      { str: 'articles', id: 'knowledgebase' },
                      { str: '', id: 'undefined' },
                    ],
                  },
                  s = n(s_rsids2),
                  c = s && 'string' == typeof s.siteValue ? s.siteValue : '',
                  l = n(domainPeriods),
                  u = l && 'string' == typeof l.ccVal ? l.ccVal : '',
                  d = (t(o.countries, u), a().pathname),
                  p = i(0 == d.indexOf('/') ? d.substring(1) : d, '/');
                if (
                  (1 < p.length && (v = e(o.sections, d) ? e(o.sections, d) : d),
                  r(document.URL, '/') && (v = e(o.sections, p[0]) ? e(o.sections, p[0]) : p[0]),
                  'undefined' == v || v === undefined)
                ) {
                  var f = i(
                      0 == location.pathname.indexOf('/')
                        ? location.pathname.substring(1)
                        : location.pathname,
                      '/'
                    ),
                    g =
                      (b = i(
                        0 == location.pathname.indexOf('/')
                          ? location.pathname.substring(1)
                          : location.pathname,
                        '/'
                      ).length) - 1,
                    m = b - 2;
                  if (r(location.pathname, 'index.html') || r(location.pathname, 'index.php'))
                    var h = 'true';
                  if (0 == b) var v = 'home';
                  else
                    1 == b && r(location.pathname, '/')
                      ? (v = f[b - 1])
                      : 1 == b && 'true' == h
                      ? (v = 'home')
                      : 1 == b && r(location.pathname, '.html')
                      ? ((v = 'home'), (y = (y = f[g]).split('.'))[0])
                      : 'true' == h
                      ? (v = f[m])
                      : ((y = (y = f[g]).split('.')), (v = f[m]), y[0]);
                } else {
                  var b;
                  if (
                    ((f = i(
                      0 == location.pathname.indexOf('/')
                        ? location.pathname.substring(1)
                        : location.pathname,
                      '/'
                    )),
                    (g =
                      (b = i(
                        0 == location.pathname.indexOf('/')
                          ? location.pathname.substring(1)
                          : location.pathname,
                        '/'
                      ).length) - 1),
                    (m = b - 2),
                    (r(location.pathname, 'index.html') || r(location.pathname, 'index.php')) &&
                      (h = 'true'),
                    0 == b)
                  );
                  else if (1 == b && r(location.pathname, '/'));
                  else if (1 == b && 'true' == h);
                  else if (1 == b && r(location.pathname, '.html')) (y = (y = f[g]).split('.'))[0];
                  else if ('true' == h);
                  else {
                    var y;
                    (y = (y = f[g]).split('.'))[0];
                  }
                }
                return c + u;
              },
            },
          },
          'Meta Property': {
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.getElementsByTagName('meta');
                for (i = 0; i < e.length; i++)
                  if ('og:title' == e[i].getAttribute('property'))
                    var t = e[i].getAttribute('content');
                return t;
              },
            },
          },
          'Subscription Confirmation': {
            defaultValue: '[na]',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: { elementProperty: 'id', elementSelector: '#gform_confirmation_message_1' },
          },
          'Blog Internal Search': {
            defaultValue: '[empty]',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 's', caseInsensitive: !0 },
          },
          'Meta: Article Category': {
            defaultValue: 'Home',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.getElementsByTagName('meta');
                for (i = 0; i < e.length; i++)
                  if ('article:section' == e[i].getAttribute('property'))
                    var t = e[i].getAttribute('content');
                return t;
              },
            },
          },
          'Meta: Article Title': {
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.getElementsByTagName('meta');
                for (i = 0; i < e.length; i++)
                  if ('og:title' == e[i].getAttribute('property'))
                    var t = e[i].getAttribute('content');
                return t;
              },
            },
          },
          hst: {
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.location.host;
              },
            },
          },
          'Short URL': {
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'location.pathname' },
          },
          'Subscribe to Webinars Confirmation': {
            defaultValue: '[na]',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: { elementProperty: 'id', elementSelector: '#gform_confirmation_message_2' },
          },
          'Meta: Page Type': {
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.getElementsByTagName('meta');
                for (i = 0; i < e.length; i++)
                  if ('og:type' == e[i].getAttribute('property'))
                    var t = e[i].getAttribute('content');
                return t;
              },
            },
          },
          utm_content: {
            forceLowerCase: !0,
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_content', caseInsensitive: !0 },
          },
          rp_s: {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return -1 < document.URL.indexOf('blog.webex.com')
                  ? 'webexglobal,webexgli'
                  : 'webextest';
              },
            },
          },
          p_n: {
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
                          .replace(/:ja|:es|:de|:fr/, ''))[e.length - 1]
                          ? e.slice(0, e.length - 1)
                          : e) && (e = ':home'),
                    e
                  );
                } catch (t) {}
              },
            },
          },
          cookieDomain: {
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
          nonce: {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: { source: function () {} },
          },
        },
        extensions: {
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
              'adobe-analytics/src/lib/actions/setVariables.js': {
                name: 'set-variables',
                displayName: 'Set Variables',
                script: function (e, t, n, r) {
                  'use strict';
                  var i = n('../sharedModules/getTracker'),
                    a = n('../helpers/applyTrackerVariables');
                  e.exports = function (t, n) {
                    return i().then(
                      function (e) {
                        r.logger.info('Set variables on the tracker.'),
                          a(e, t.trackerProperties),
                          t.customSetup &&
                            t.customSetup.source &&
                            t.customSetup.source.call(n.element, n, e);
                      },
                      function (e) {
                        r.logger.error('Cannot set variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (e, t, n, i) {
                  'use strict';
                  var r = n('../sharedModules/getTracker'),
                    a = function (e) {
                      return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                    },
                    o = function (e) {
                      return a(e) ? e.innerHTML : 'link clicked';
                    },
                    s = function (e, t, n) {
                      if ('page' === t.type) i.logger.info('Firing page view beacon.'), e.t();
                      else {
                        var r = { linkType: t.linkType || 'o', linkName: t.linkName || o(n) };
                        i.logger.info(
                          'Firing link track beacon using the values: ' + JSON.stringify(r) + '.'
                        ),
                          e.tl(a(n) ? n : 'true', r.linkType, r.linkName);
                      }
                    };
                  e.exports = function (t, n) {
                    return r().then(
                      function (e) {
                        s(e, t, n.element);
                      },
                      function (e) {
                        i.logger.error('Cannot send beacon: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var r,
                    i = n('@adobe/reactor-cookie'),
                    a = n('@adobe/reactor-promise'),
                    s = n('@adobe/reactor-window'),
                    c = n('../helpers/augmenters'),
                    l = n('@adobe/reactor-load-script'),
                    u = n('../helpers/applyTrackerVariables'),
                    d = n('../helpers/loadLibrary'),
                    p = n('../helpers/generateVersion')(o.buildInfo.turbineBuildDate),
                    f = 'beforeSettings',
                    g = o.getSharedModule('adobe-mcid', 'mcid-instance'),
                    m = function (e) {
                      return !e || 'true' === i.get(e);
                    },
                    h = function (r) {
                      return a
                        .all(
                          c.map(function (e) {
                            var t;
                            try {
                              t = e(r);
                            } catch (n) {
                              setTimeout(function () {
                                throw n;
                              });
                            }
                            return a.resolve(t);
                          })
                        )
                        .then(function () {
                          return r;
                        });
                    },
                    v = function (e) {
                      return (
                        g &&
                          (o.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = g)),
                        e
                      );
                    },
                    b = function (e) {
                      return (
                        o.logger.info('Setting version on tracker: "' + p + '".'),
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
                        t.loadPhase === f &&
                          t.source &&
                          (o.logger.info('Calling custom script before settings.'),
                          t.source.call(s, n)),
                        u(n, e || {}),
                        t.loadPhase !== f &&
                          t.source &&
                          (o.logger.info('Calling custom script after settings.'),
                          t.source.call(s, n)),
                        n
                      );
                    },
                    _ = function (e, t) {
                      var n = e.moduleProperties;
                      if (
                        n &&
                        n.audienceManager &&
                        n.audienceManager.config &&
                        s._satellite &&
                        s._satellite.company &&
                        s._satellite.company.orgId
                      ) {
                        var r = { namespace: s._satellite.company.orgId };
                        n.audienceManager.config.visitorService = r;
                        var i = 'AppMeasurement_Module_AudienceManagement.js',
                          a = o.getHostedLibFileUrl(i);
                        return l(a).then(function () {
                          return (
                            t.loadModule('AudienceManagement'),
                            o.logger.info('Initializing AudienceManagement module'),
                            t.AudienceManagement.setup(n.audienceManager.config),
                            t
                          );
                        });
                      }
                      return t;
                    },
                    C =
                      ((r = o.getExtensionSettings()),
                      m(r.trackingCookieName)
                        ? d(r)
                            .then(h)
                            .then(v)
                            .then(b)
                            .then(y.bind(null, r.trackerProperties, r.customSetup || {}))
                            .then(_.bind(null, r))
                        : a.reject('EU compliance was not acknowledged by the user.'));
                  e.exports = function () {
                    return C;
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
                  var r = n('../helpers/augmenters');
                  e.exports = function (e) {
                    r.push(e);
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var i = n('@adobe/reactor-query-string'),
                    a = n('@adobe/reactor-window'),
                    s = /eVar([0-9]+)/,
                    c = /prop([0-9]+)/,
                    l = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    u = function (e, t, n) {
                      return n.indexOf(e) === t;
                    },
                    d = function (e, t, n) {
                      var r = Object.keys(t).filter(l.test.bind(l));
                      return (
                        n && r.push('events'),
                        (r = r.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && e && u(e, t, r);
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
                    r = function (e, t, n) {
                      e[t] = n[t].join(',');
                    },
                    f = function (i, e, t) {
                      var a = t.dynamicVariablePrefix || 'D=';
                      t[e].forEach(function (e) {
                        var t;
                        if ('value' === e.type) t = e.value;
                        else {
                          var n = s.exec(e.value);
                          if (n) t = a + 'v' + n[1];
                          else {
                            var r = c.exec(e.value);
                            r && (t = a + 'c' + r[1]);
                          }
                        }
                        i[e.name] = t;
                      });
                    },
                    g = {
                      linkDownloadFileTypes: r,
                      linkExternalFilters: r,
                      linkInternalFilters: r,
                      hierarchies: function (t, e, n) {
                        n[e].forEach(function (e) {
                          t[e.name] = e.sections.join(e.delimiter);
                        });
                      },
                      props: f,
                      eVars: f,
                      campaign: function (e, t, n) {
                        if ('queryParam' === n[t].type) {
                          var r = i.parse(a.location.search);
                          e[t] = r[n[t].value];
                        } else e[t] = n[t].value;
                      },
                      events: function (e, t, n) {
                        var r = n[t].map(function (e) {
                          var t = e.name;
                          return (
                            e.value && (t = [t, e.value].join('=')),
                            e.id && (t = [t, e.id].join(':')),
                            t
                          );
                        });
                        e[t] = r.join(',');
                      },
                    };
                  e.exports = function (t, r) {
                    var i = {};
                    (r = r || {}),
                      Object.keys(r).forEach(function (e) {
                        var t = g[e],
                          n = r[e];
                        t ? t(i, e, r) : (i[e] = n);
                      }),
                      i.events &&
                        t.events &&
                        0 < t.events.length &&
                        (i.events = t.events + ',' + i.events);
                    var e = r && r.events && 0 < r.events.length,
                      n = d(t, i, e);
                    n && (i.linkTrackVars = n);
                    var a = p(t, r.events || []);
                    a && (i.linkTrackEvents = a),
                      o.logger.info(
                        'Applying the following properties on tracker: "' +
                          JSON.stringify(i) +
                          '".'
                      ),
                      Object.keys(i).forEach(function (e) {
                        t[e] = i[e];
                      });
                  };
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
                    o = n('@adobe/reactor-window'),
                    s = n('@adobe/reactor-promise'),
                    i = {
                      MANAGED: 'managed',
                      PREINSTALLED: 'preinstalled',
                      REMOTE: 'remote',
                      CUSTOM: 'custom',
                    },
                    c = function (e) {
                      return a.logger.info('Loading AppMeasurement script from: ' + e + '.'), r(e);
                    },
                    l = function (e) {
                      var t = e.production;
                      return (
                        e[a.buildInfo.environment] && (t = e[a.buildInfo.environment]), t.join(',')
                      );
                    },
                    u = function (e, t) {
                      if (!o.s_gi)
                        throw new Error(
                          'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                            o.AppMeasurement
                        );
                      a.logger.info(
                        'Creating AppMeasurement tracker with these report suites: "' + t + '"'
                      );
                      var n = o.s_gi(t);
                      return (
                        e.libraryCode.scopeTrackerGlobally &&
                          (a.logger.info('Setting the tracker as window.s'), (o.s = n)),
                        n
                      );
                    },
                    d = function (e) {
                      var t = l(e.libraryCode.accounts);
                      return c(a.getHostedLibFileUrl('AppMeasurement.js')).then(
                        u.bind(null, e, t)
                      );
                    },
                    p = function (e, t) {
                      if (e.libraryCode.accounts)
                        if (t.sa) {
                          var n = l(e.libraryCode.accounts);
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
                    f = function (i) {
                      return (
                        a.logger.info(
                          'Waiting for the tracker to become accessible at: "' + i + '".'
                        ),
                        new s(function (e, t) {
                          var n = 1,
                            r = setInterval(function () {
                              o[i] &&
                                (a.logger.info('Found tracker located at: "' + i + '".'),
                                e(o[i]),
                                clearInterval(r)),
                                10 <= n &&
                                  (clearInterval(r),
                                  t(
                                    new Error(
                                      'Bailing out. Cannot find the global variable name: "' +
                                        i +
                                        '".'
                                    )
                                  )),
                                n++;
                            }, 1000);
                        })
                      );
                    },
                    g = function (e) {
                      return f(e.libraryCode.trackerVariableName).then(p.bind(null, e));
                    },
                    m = function (e) {
                      if (o[e])
                        return a.logger.info('Found tracker located at: "' + e + '".'), o[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    },
                    h = function (e, t) {
                      return c(e)
                        .then(m.bind(null, t.libraryCode.trackerVariableName))
                        .then(p.bind(null, t));
                    };
                  e.exports = function (e) {
                    var t, n;
                    switch (e.libraryCode.type) {
                      case i.MANAGED:
                        n = d(e);
                        break;
                      case i.PREINSTALLED:
                        n = g(e);
                        break;
                      case i.CUSTOM:
                        (t = e.libraryCode.source), (n = h(t, e));
                        break;
                      case i.REMOTE:
                        (t =
                          'https:' === o.location.protocol
                            ? e.libraryCode.httpsUrl
                            : e.libraryCode.httpUrl),
                          (n = h(t, e));
                        break;
                      default:
                        throw new Error('Cannot load library. Type not supported.');
                    }
                    return n;
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
                    r = function (e) {
                      return e.substr(e.length - 1);
                    },
                    i = function (e) {
                      return Math.floor(e.getUTCHours() / t);
                    },
                    a = function (e) {
                      var t = (e.getUTCMonth() + 1 + 12 * i(e)).toString(36);
                      return r(t);
                    },
                    o = function (e) {
                      return (e.getUTCFullYear() - 2010).toString(36);
                    };
                  e.exports = function (e) {
                    var t = new Date(e);
                    if (isNaN(t)) throw new Error('Invalid date provided');
                    return ('L' + o(t) + a(t) + n(t)).toUpperCase();
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
                    var r,
                      i = unescape(t).toLowerCase(),
                      a = 2 < arguments.length && n;
                    for (var o in e) {
                      if (!e[o].str) return e[o].id;
                      if (!(r = e[o].str.toLowerCase()) || (a ? i == r : -1 < i.indexOf(r)))
                        return e[o].id;
                    }
                    return !1;
                  }
                  function n (e, t, n) {
                    if (!e || !t) return !1;
                    var r,
                      i = unescape(t).toLowerCase(),
                      a = 2 < arguments.length && n;
                    for (var o in e) {
                      if (!e[o].id) return e[o].str;
                      if (!(r = e[o].id.toLowerCase()) || (a ? i == r : -1 < i.indexOf(r)))
                        return e[o].str;
                    }
                    return !1;
                  }
                  function a (e) {
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
                  function r (e, t) {
                    var n,
                      r = 1 < arguments.length ? t : window.location.href,
                      i = a(r).hostname + a(r).pathname;
                    for (n in e) if (-1 < i.indexOf(e[n].site)) return e[n];
                    return 0;
                  }
                  function i (e, t) {
                    return -1 !== e.indexOf(t, e.length - t.length);
                  }
                  function o (e, t) {
                    var n,
                      r = 0,
                      i = new Array();
                    for (t || (t = ','); e; )
                      (n = -1 < (n = e.indexOf(t)) ? n : e.length),
                        (i[r++] = e.substring(0, n)),
                        (e = e.substring(n + t.length));
                    return i;
                  }
                  (e.maxDelay = 750),
                    (s_rsids2 = [
                      { site: 'www.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                      { site: '/demo/spark/', siteValue: 'spark:marketing:', cc: 'USD', co: '' },
                      { site: 'try.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                      { site: 'mytrial.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                      {
                        site: 'blog.webex.',
                        siteValue: 'webex-blog:marketing:',
                        cc: 'USD',
                        co: '',
                      },
                      { site: 'support.webex.', siteValue: 'webex:support:', cc: 'USD', co: '' },
                      { site: 'signup.webex.', siteValue: 'webex:marketing:', cc: 'USD', co: '' },
                      {
                        site: 'www.ciscospark.',
                        siteValue: 'spark:marketing:',
                        cc: 'USD',
                        co: '',
                      },
                      {
                        site: 'video.ciscospark.',
                        siteValue: 'spark:marketing:',
                        cc: 'USD',
                        co: '',
                      },
                      {
                        site: 'support.ciscospark.',
                        siteValue: 'spark:support:',
                        cc: 'USD',
                        co: '',
                      },
                      {
                        site: 'developer.ciscospark',
                        siteValue: 'spark:developer:',
                        cc: 'USD',
                        co: '',
                      },
                      {
                        site: 'help.webex.',
                        siteValue: 'cloud-collab:support:',
                        cc: 'USD',
                        co: '',
                      },
                      {
                        site: 'cloudcollaborationhelp.cisco.',
                        siteValue: 'cloud-collab:support:',
                        cc: 'USD',
                        co: '',
                      },
                      { site: 'admin.ciscospark.', siteValue: 'spark:admin:', cc: '', co: '' },
                      { site: 'web.ciscospark.', siteValue: 'spark:web-client:', cc: '', co: '' },
                      { site: 'commerce.ciscospark.', siteValue: 'spark:atlas:', cc: '', co: '' },
                      { site: 'buy.ciscospark.', siteValue: 'spark:marketing:', cc: '', co: '' },
                      { site: '.webex.', siteValue: 'webex:unknown:', cc: 'USD', co: '' },
                    ]),
                    (domainPeriods = [
                      { site: '/US/', ccVal: 'us' },
                      { site: '/GB/', ccVal: 'uk' },
                      { site: '/UK/', ccVal: 'uk' },
                      { site: '/FR/', ccVal: 'fr' },
                      { site: '/DE/', ccVal: 'de' },
                      { site: '/CN/', ccVal: 'cn' },
                      { site: '/ES/', ccVal: 'es' },
                      { site: '/CA/', ccVal: 'ca' },
                      { site: '/IT/', ccVal: 'it' },
                      { site: '/NL/', ccVal: 'nl' },
                      { site: '/CHT/', ccVal: 'cn' },
                      { site: '/CHS/', ccVal: 'cn' },
                      { site: '/BR/', ccVal: 'br' },
                      { site: '/HK/', ccVal: 'hk' },
                      { site: '/AU/', ccVal: 'hk' },
                      { site: '/KR/', ccVal: 'kr' },
                      { site: '/MX/', ccVal: 'mx' },
                      { site: '/demo/uk-', ccVal: 'uk' },
                      { site: '/demo/de-', ccVal: 'de' },
                      { site: '/demo/es-', ccVal: 'es' },
                      { site: '/demo/fr-', ccVal: 'fr' },
                      { site: '/demo/au-', ccVal: 'au' },
                      { site: '/demo/jp-', ccVal: 'jp' },
                      { site: '/demo/br-', ccVal: 'br' },
                      { site: '/demo/it-', ccVal: 'it' },
                      { site: '/demo/hk-', ccVal: 'hk' },
                      { site: '/demo/mx-', ccVal: 'mx' },
                      { site: '/demo/cn-', ccVal: 'cn' },
                      { site: '/demo/in-', ccVal: 'in' },
                      { site: '/demo/ca-', ccVal: 'ca' },
                      { site: '/demo/kr-', ccVal: 'kr' },
                      { site: '/meet/uk/', ccVal: 'uk' },
                      { site: '/meet/de/', ccVal: 'de' },
                      { site: '/meet/es/', ccVal: 'es' },
                      { site: '/meet/fr/', ccVal: 'fr' },
                      { site: '/meet/au/', ccVal: 'au' },
                      { site: '/meet/jp/', ccVal: 'jp' },
                      { site: '/meet/br/', ccVal: 'br' },
                      { site: '/meet/it/', ccVal: 'it' },
                      { site: '/meet/hk/', ccVal: 'hk' },
                      { site: '/meet/mx/', ccVal: 'mx' },
                      { site: '/meet/cn/', ccVal: 'cn' },
                      { site: '/meet/tw/', ccVal: 'hk' },
                      { site: '/meet/sg/', ccVal: 'hk' },
                      { site: '/meet/in/', ccVal: 'in' },
                      { site: '/meet/ca/', ccVal: 'ca' },
                      { site: '/meet/kr/', ccVal: 'kr' },
                      { site: '/mc-us', ccVal: 'us' },
                      { site: '/mc-uk', ccVal: 'uk' },
                      { site: '/mc-it', ccVal: 'it' },
                      { site: '/mc-de', ccVal: 'de' },
                      { site: '/mc-fr', ccVal: 'fr' },
                      { site: '/mc-es', ccVal: 'es' },
                      { site: 'mytrial.webex.com/uk', ccVal: 'uk' },
                      { site: 'mytrial.webex.com/fr', ccVal: 'fr' },
                      { site: 'mytrial.webex.com/de', ccVal: 'de' },
                      { site: 'mytrial.webex.com/es', ccVal: 'es' },
                      { site: 'mytrial.webex.com/in', ccVal: 'in' },
                      { site: 'mytrial.webex.com/jp', ccVal: 'jp' },
                      { site: 'mytrial.webex.com/au', ccVal: 'au' },
                      { site: 'mytrial.webex.com/it', ccVal: 'it' },
                      { site: 'mytrial.webex.com/kr', ccVal: 'kr' },
                      { site: 'mytrial.webex.com/cn', ccVal: 'cn' },
                      { site: 'mytrial.webex.com/hk', ccVal: 'hk' },
                      { site: '.com.br', ccVal: 'br' },
                      { site: '.co.uk', ccVal: 'uk' },
                      { site: '.es', ccVal: 'es' },
                      { site: '.com.mx', ccVal: 'mx' },
                      { site: '.com.au', ccVal: 'au' },
                      { site: '.de', ccVal: 'de' },
                      { site: '.fr', ccVal: 'fr' },
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
                      sections: [
                        { str: 'products', id: 'products' },
                        { str: 'why-webex', id: 'why-webex' },
                        { str: 'how-to', id: 'how-to' },
                        { str: 'support', id: 'support' },
                        { str: 'articles', id: 'knowledgebase' },
                        { str: '', id: 'undefined' },
                      ],
                    },
                    c = r(s_rsids2),
                    l = c && 'string' == typeof c.siteValue ? c.siteValue : '',
                    u = r(domainPeriods),
                    d = u && 'string' == typeof u.ccVal ? u.ccVal : '',
                    p = (n(s.countries, d), a().pathname),
                    f = o(0 == p.indexOf('/') ? p.substring(1) : p, '/');
                  if (
                    (1 < f.length && (b = t(s.sections, p) ? t(s.sections, p) : p),
                    i(document.URL, '/') && (b = t(s.sections, f[0]) ? t(s.sections, f[0]) : f[0]),
                    'undefined' == b || b === undefined)
                  ) {
                    var g = o(
                        0 == location.pathname.indexOf('/')
                          ? location.pathname.substring(1)
                          : location.pathname,
                        '/'
                      ),
                      m =
                        (y = o(
                          0 == location.pathname.indexOf('/')
                            ? location.pathname.substring(1)
                            : location.pathname,
                          '/'
                        ).length) - 1,
                      h = y - 2;
                    if (i(location.pathname, 'index.html') || i(location.pathname, 'index.php'))
                      var v = 'true';
                    if (0 == y) var b = 'home';
                    else
                      1 == y && i(location.pathname, '/')
                        ? (b = g[y - 1])
                        : 1 == y && 'true' == v
                        ? (b = 'home')
                        : 1 == y && i(location.pathname, '.html')
                        ? ((b = 'home'), (_ = (_ = g[m]).split('.'))[0])
                        : 'true' == v
                        ? (b = g[h])
                        : ((_ = (_ = g[m]).split('.')), (b = g[h]), _[0]);
                  } else {
                    var y;
                    if (
                      ((g = o(
                        0 == location.pathname.indexOf('/')
                          ? location.pathname.substring(1)
                          : location.pathname,
                        '/'
                      )),
                      (m =
                        (y = o(
                          0 == location.pathname.indexOf('/')
                            ? location.pathname.substring(1)
                            : location.pathname,
                          '/'
                        ).length) - 1),
                      (h = y - 2),
                      (i(location.pathname, 'index.html') || i(location.pathname, 'index.php')) &&
                        (v = 'true'),
                      0 == y)
                    );
                    else if (1 == y && i(location.pathname, '/'));
                    else if (1 == y && 'true' == v);
                    else if (1 == y && i(location.pathname, '.html'))
                      (_ = (_ = g[m]).split('.'))[0];
                    else if ('true' == v);
                    else {
                      var _;
                      (_ = (_ = g[m]).split('.'))[0];
                    }
                  }
                  e.contextData.pageType = l + d;
                },
              },
              libraryCode: {
                type: 'custom',
                source:
                  'https://assets.adobedtm.com/7cd5549c718c/553198da50ec/c20ccd82ffe5/EX1cb5c297ff5746979cf6b4580bb8135c-libraryCode_source.min.js',
                company: 'ciscow0',
                accounts: { staging: ['webextest'], production: ['%rp_s%'] },
                trackerVariableName: 's',
              },
              trackerProperties: {
                props: [{ name: 'prop61', type: 'value', value: '%Page Data 1%' }],
                charSet: 'UTF-8',
                pageName: '%URI%',
                currencyCode: 'USD',
                trackingServer: 'metrics.webex.com',
                trackInlineStats: !0,
                visitorNamespace: 'ciscowebex',
                trackDownloadLinks: !0,
                trackExternalLinks: !0,
                linkExternalFilters: [],
                linkInternalFilters: ['blog.webex.', 'javascript:', 'mailto:', 'tel:'],
                trackingServerSecure: 'smetrics.webex.com',
                linkDownloadFileTypes: [
                  'avi',
                  'css',
                  'csv',
                  'doc',
                  'docx',
                  'eps',
                  'exe',
                  'jpg',
                  'js',
                  'm4v',
                  'mov',
                  'mp3',
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
              'https://assets.adobedtm.com/extensions/EP5e9ec493dfa0465eaa797b523b09d3f7/',
          },
          'adobe-mcid': {
            displayName: 'Experience Cloud ID Service',
            modules: {
              'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
                script: function (e, t, n, g) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    i = n('../codeLibrary/VisitorAPI'),
                    m = n('../../view/utils/timeUnits'),
                    h = function (e) {
                      return e.reduce(function (e, t) {
                        var n = /^(true|false)$/i.test(t.value) ? JSON.parse(t.value) : t.value;
                        return (e[t.name] = n), e;
                      }, {});
                    },
                    a = function (e) {
                      var t = g.getExtensionSettings();
                      if ('string' != typeof t.orgId)
                        throw new TypeError('Org ID is not a string.');
                      var n = h(t.variables || []),
                        r = t.doesOptInApply;
                      r &&
                        ('boolean' == typeof r
                          ? (n.doesOptInApply = r)
                          : t.optInCallback && (n.doesOptInApply = t.optInCallback));
                      var i = t.isOptInStorageEnabled;
                      i && (n.isOptInStorageEnabled = i);
                      var a = t.optInCookieDomain;
                      a && (n.optInCookieDomain = a);
                      var o = t.optInStorageExpiry;
                      if (o) {
                        var s = t.timeUnit;
                        if (s && m[s]) {
                          var c = o * m[s];
                          n.optInStorageExpiry = c;
                        }
                      } else !0 === i && (n.optInStorageExpiry = 33696000);
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
                      var f = e.getInstance(t.orgId, n);
                      return (
                        g.logger.info('Created instance using orgId: "' + t.orgId + '"'),
                        g.logger.info('Set variables: ' + JSON.stringify(n)),
                        f.getMarketingCloudVisitorID(function (e) {
                          g.logger.info('Obtained Marketing Cloud Visitor Id: ' + e);
                        }, !0),
                        f
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
                    o(r.location.pathname)
                      ? g.logger.warn(
                          'MCID library not loaded. One of the path exclusions matches the current path.'
                        )
                      : (s = a(i)),
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
                      function V (e) {
                        return (V =
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
                              r = this;
                            return function () {
                              r.callbacks[e].splice(n, 1);
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
                            (e || (n && !N.isObjectEmpty(n))) &&
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
                        var r = null == e ? void 0 : e[t];
                        return void 0 === r ? n : r;
                      }
                      function i (e) {
                        for (var t = /^\d+$/, n = 0, r = e.length; n < r; n++)
                          if (!t.test(e[n])) return !1;
                        return !0;
                      }
                      function a (e, t) {
                        for (; e.length < t.length; ) e.push('0');
                        for (; t.length < e.length; ) t.push('0');
                      }
                      function o (e, t) {
                        for (var n = 0; n < e.length; n++) {
                          var r = parseInt(e[n], 10),
                            i = parseInt(t[n], 10);
                          if (i < r) return 1;
                          if (r < i) return -1;
                        }
                        return 0;
                      }
                      function n (e, t) {
                        if (e === t) return 0;
                        var n = e.toString().split('.'),
                          r = t.toString().split('.');
                        return i(n.concat(r)) ? (a(n, r), o(n, r)) : NaN;
                      }
                      function s (e) {
                        return e === Object(e) && 0 === Object.keys(e).length;
                      }
                      function c (e) {
                        return 'function' == typeof e || (e instanceof Array && e.length);
                      }
                      function r (e, t) {
                        var n = 0 < arguments.length && void 0 !== e ? arguments[0] : '',
                          r =
                            1 < arguments.length && void 0 !== t
                              ? arguments[1]
                              : function () {
                                  return !0;
                                };
                        (this.log = de('log', n, r)),
                          (this.warn = de('warn', n, r)),
                          (this.error = de('error', n, r));
                      }
                      function M (e, t) {
                        var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          r = n.isEnabled,
                          i = n.cookieName,
                          a = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies;
                        return r && i && a
                          ? {
                              remove: function () {
                                a.remove(i);
                              },
                              get: function () {
                                var e = a.get(i),
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
                                  a.set(i, JSON.stringify(e), {
                                    domain: t.optInCookieDomain || '',
                                    cookieLifetime: t.optInStorageExpiry || 34190000,
                                    expires: !0,
                                  });
                              },
                            }
                          : { get: Ie, set: Ie, remove: Ie };
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
                          var n = ge(e);
                          return n.length
                            ? n.every(function (e) {
                                return !!t[e];
                              })
                            : me(t);
                        }
                        function r () {
                          O(E),
                            x(re.COMPLETE),
                            S(C.status, C.permissions),
                            _.set(C.permissions, { optInCookieDomain: u, optInStorageExpiry: d }),
                            k.execute(Ee);
                        }
                        function i (n) {
                          return function (e, t) {
                            if (!he(e))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return x(re.CHANGED), Object.assign(E, ve(ge(e), n)), t || r(), C;
                          };
                        }
                        var a = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          o = a.doesOptInApply,
                          s = a.previousPermissions,
                          c = a.preOptInApprovals,
                          l = a.isOptInStorageEnabled,
                          u = a.optInCookieDomain,
                          d = a.optInStorageExpiry,
                          p = a.isIabContext,
                          f = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                          g = we(s);
                        De(g, 'Invalid `previousPermissions`!'),
                          De(c, 'Invalid `preOptInApprovals`!');
                        var m,
                          h,
                          v,
                          b,
                          y,
                          _ = M({ isEnabled: !!l, cookieName: 'adobeujs-optin' }, { cookies: f }),
                          C = this,
                          S = ne(C),
                          k = ce(),
                          I = _e(g),
                          w = _e(c),
                          D = _.get(),
                          A = {},
                          T = ((y = D), Ce(I) || (y && Ce(y)) ? re.COMPLETE : re.PENDING),
                          P =
                            ((m = w),
                            (h = I),
                            (v = D),
                            (b = ve(se, !o)),
                            o ? Object.assign({}, b, m, h, v) : b),
                          E = be(P),
                          x = function (e) {
                            return (T = e);
                          },
                          O = function (e) {
                            return (P = e);
                          };
                        (C.deny = i(!1)),
                          (C.approve = i(!0)),
                          (C.denyAll = C.deny.bind(C, se)),
                          (C.approveAll = C.approve.bind(C, se)),
                          (C.isApproved = function (e) {
                            return n(e, C.permissions);
                          }),
                          (C.isPreApproved = function (e) {
                            return n(e, w);
                          }),
                          (C.fetchPermissions = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t && arguments[1],
                              r = n ? C.on(re.COMPLETE, e) : Ie;
                            return (
                              !o || (o && C.isComplete) || c
                                ? e(C.permissions)
                                : n ||
                                  k.add(Ee, function () {
                                    return e(C.permissions);
                                  }),
                              r
                            );
                          }),
                          (C.complete = function () {
                            C.status === re.CHANGED && r();
                          }),
                          (C.registerPlugin = function (e) {
                            if (!e || !e.name || 'function' != typeof e.onRegister)
                              throw new Error(xe);
                            A[e.name] || (A[e.name] = e).onRegister.call(e, C);
                          }),
                          (C.execute = Pe(A)),
                          Object.defineProperties(C, {
                            permissions: {
                              get: function () {
                                return P;
                              },
                            },
                            status: {
                              get: function () {
                                return T;
                              },
                            },
                            Categories: {
                              get: function () {
                                return ie;
                              },
                            },
                            doesOptInApply: {
                              get: function () {
                                return !!o;
                              },
                            },
                            isPending: {
                              get: function () {
                                return C.status === re.PENDING;
                              },
                            },
                            isComplete: {
                              get: function () {
                                return C.status === re.COMPLETE;
                              },
                            },
                            __plugins: {
                              get: function () {
                                return Object.keys(A);
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
                          (i = null), e.call(e, new u('The call took longer than you wanted!'));
                        }
                        function r () {
                          i && (clearTimeout(i), e.apply(e, arguments));
                        }
                        if (void 0 === t) return e;
                        var i = setTimeout(n, t);
                        return r;
                      }
                      function f () {
                        if (window.__cmp) return window.__cmp;
                        var e = window;
                        if (e !== window.top) {
                          for (var a; !a; ) {
                            e = e.parent;
                            try {
                              e.frames.__cmpLocator && (a = e);
                            } catch (e) {}
                            if (e === window.top) break;
                          }
                          if (a) {
                            var o = {};
                            return (
                              (window.__cmp = function (e, t, n) {
                                var r = Math.random() + '',
                                  i = { __cmpCall: { command: e, parameter: t, callId: r } };
                                (o[r] = n), a.postMessage(i, '*');
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
                                    var n = t.__cmpReturn;
                                    o[n.callId] &&
                                      (o[n.callId](n.returnValue, n.success), delete o[n.callId]);
                                  }
                                },
                                !1
                              ),
                              window.__cmp
                            );
                          }
                          pe.error('__cmp not found');
                        } else pe.error('__cmp not found');
                      }
                      function g () {
                        var t = this;
                        (t.name = 'iabPlugin'), (t.version = '0.0.1');
                        var s = ce(),
                          c = { allConsentData: null },
                          l = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {};
                            return (c[e] = n);
                          };
                        (t.fetchConsentData = function (e) {
                          var t = p(e.callback, e.timeout);
                          r({ callback: t });
                        }),
                          (t.isApproved = function (e) {
                            var a = e.callback,
                              o = e.category,
                              t = e.timeout;
                            if (c.allConsentData)
                              return a(
                                null,
                                d(
                                  o,
                                  c.allConsentData.vendorConsents,
                                  c.allConsentData.purposeConsents
                                )
                              );
                            var n = p(function (e, t) {
                              var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                                r = n.vendorConsents,
                                i = n.purposeConsents;
                              a(e, d(o, r, i));
                            }, t);
                            r({ category: o, callback: n });
                          }),
                          (t.onRegister = function (o) {
                            var s = Object.keys(ae),
                              e = function (e, t) {
                                var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                                  r = n.purposeConsents,
                                  i = n.gdprApplies,
                                  a = n.vendorConsents;
                                !e &&
                                  i &&
                                  a &&
                                  r &&
                                  (s.forEach(function (e) {
                                    var t = d(e, a, r);
                                    o[t ? 'approve' : 'deny'](e, !0);
                                  }),
                                  o.complete());
                              };
                            t.fetchConsentData({ callback: e });
                          });
                        var r = function (e) {
                            var t = e.callback;
                            if (c.allConsentData) return t(null, c.allConsentData);
                            s.add('FETCH_CONSENT_DATA', t);
                            var o = {};
                            n(function (e, t) {
                              var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                                r = n.purposeConsents,
                                i = n.gdprApplies,
                                a = n.vendorConsents;
                              (1 < arguments.length ? t : void 0) &&
                                l(
                                  'allConsentData',
                                  (o = { purposeConsents: r, gdprApplies: i, vendorConsents: a })
                                ),
                                u(function (e, t) {
                                  var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {};
                                  (1 < arguments.length ? t : void 0) &&
                                    ((o.consentString = n.consentData), l('allConsentData', o)),
                                    s.execute('FETCH_CONSENT_DATA', [null, c.allConsentData]);
                                });
                            });
                          },
                          u = function (e) {
                            var t = f();
                            t && t('getConsentData', null, e);
                          },
                          n = function (e) {
                            var t = Te(ae),
                              n = f();
                            n && n('getVendorConsents', t, e);
                          },
                          d = function (e, t, n) {
                            var r = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                              i = 2 < arguments.length && void 0 !== n ? arguments[2] : {};
                            return (
                              !!r[ae[e]] &&
                              oe[e].every(function (e) {
                                return i[e];
                              })
                            );
                          };
                      }
                      var R =
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
                          for (var t, n, r = 1; r < arguments.length; ++r)
                            for (t in (n = arguments[r]))
                              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                          return e;
                        };
                      var m,
                        h,
                        v,
                        b,
                        y,
                        j = {
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
                        _ = j.STATE_KEYS_MAP,
                        C = function (a) {
                          function r () {}
                          function i (n, r) {
                            var i = this;
                            return function () {
                              var e = a(0, n),
                                t = {};
                              return (t[n] = e), i.setStateAndPublish(t), r(e), e;
                            };
                          }
                          (this.getMarketingCloudVisitorID = function (e) {
                            e = e || r;
                            var t = this.findField(_.MCMID, e),
                              n = i.call(this, _.MCMID, e);
                            return void 0 !== t ? t : n();
                          }),
                            (this.getVisitorValues = function (t) {
                              this.getMarketingCloudVisitorID(function (e) {
                                t({ MCMID: e });
                              });
                            });
                        },
                        S = j.MESSAGES,
                        k = j.ASYNC_API_MAP,
                        I = j.SYNC_API_MAP,
                        w = function () {
                          function i () {}
                          function a (e, t) {
                            var n = this;
                            return function () {
                              return n.callbackRegistry.add(e, t), n.messageParent(S.GETSTATE), '';
                            };
                          }
                          function e (r) {
                            this[k[r]] = function (e) {
                              e = e || i;
                              var t = this.findField(r, e),
                                n = a.call(this, r, e);
                              return void 0 !== t ? t : n();
                            };
                          }
                          function t (e) {
                            this[I[e]] = function () {
                              return this.findField(e, i) || {};
                            };
                          }
                          Object.keys(k).forEach(e, this), Object.keys(I).forEach(t, this);
                        },
                        D = j.ASYNC_API_MAP,
                        A = function () {
                          Object.keys(D).forEach(function (t) {
                            this[D[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        N =
                          (((b = (y = { exports: {} }).exports).isObjectEmpty = function (e) {
                            return e === Object(e) && 0 === Object.keys(e).length;
                          }),
                          (b.isValueEmpty = function (e) {
                            return '' === e || b.isObjectEmpty(e);
                          }),
                          (b.getIeVersion = function () {
                            if (document.documentMode) return document.documentMode;
                            for (var e = 7; 4 < e; e--) {
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
                          (b.encodeAndBuildRequest = function (e, t) {
                            return e.map(encodeURIComponent).join(t);
                          }),
                          (b.isObject = function (e) {
                            return null !== e && 'object' === V(e) && !1 === Array.isArray(e);
                          }),
                          (b.defineGlobalNamespace = function () {
                            return (
                              (window.adobe = b.isObject(window.adobe) ? window.adobe : {}),
                              window.adobe
                            );
                          }),
                          (b.pluck = function (n, e) {
                            return e.reduce(function (e, t) {
                              return n[t] && (e[t] = n[t]), e;
                            }, Object.create(null));
                          }),
                          (b.parseOptOut = function (e, t, n) {
                            t ||
                              ((t = n),
                              e.d_optout &&
                                e.d_optout instanceof Array &&
                                (t = e.d_optout.join(',')));
                            var r = parseInt(e.d_ottl, 10);
                            return isNaN(r) && (r = 7200), { optOut: t, d_ottl: r };
                          }),
                          (b.normalizeBoolean = function (e) {
                            var t = e;
                            return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
                          }),
                          y.exports),
                        T =
                          (N.isObjectEmpty,
                          N.isValueEmpty,
                          N.getIeVersion,
                          N.encodeAndBuildRequest,
                          N.isObject,
                          N.defineGlobalNamespace,
                          N.pluck,
                          N.parseOptOut,
                          N.normalizeBoolean,
                          t),
                        P = j.MESSAGES,
                        E = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        U = function (a, o) {
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
                              var n = a !== t.orgID,
                                r = !o || e.origin !== o,
                                i = -1 === Object.keys(P).indexOf(t.prefix);
                              return n || r || i;
                            }),
                            (this.send = function (e, t, n) {
                              var r = t + '|' + a;
                              n && n === Object(n) && (r += '|' + JSON.stringify(n));
                              try {
                                e.postMessage(r, o);
                              } catch (a) {}
                            });
                        },
                        x = j.MESSAGES,
                        O = function (e, t, n, r) {
                          function i (e) {
                            Object.assign(f, e);
                          }
                          function a (e) {
                            Object.assign(f.state, e),
                              Object.assign(f.state.ALLFIELDS, e),
                              f.callbackRegistry.executeAll(f.state);
                          }
                          function o (e) {
                            if (!h.isInvalid(e)) {
                              m = !1;
                              var t = h.parse(e);
                              f.setStateAndPublish(t.state);
                            }
                          }
                          function s (e) {
                            !m && g && ((m = !0), h.send(r, e));
                          }
                          function c () {
                            i(new C(n._generateID)),
                              f.getMarketingCloudVisitorID(),
                              f.callbackRegistry.executeAll(f.state, !0),
                              R.removeEventListener('message', l);
                          }
                          function l (e) {
                            if (!h.isInvalid(e)) {
                              var t = h.parse(e);
                              (m = !1),
                                R.clearTimeout(f._handshakeTimeout),
                                R.removeEventListener('message', l),
                                i(new w(f)),
                                R.addEventListener('message', o),
                                f.setStateAndPublish(t.state),
                                f.callbackRegistry.hasCallbacks() && s(x.GETSTATE);
                            }
                          }
                          function u () {
                            g && postMessage
                              ? (R.addEventListener('message', l),
                                s(x.HANDSHAKE),
                                (f._handshakeTimeout = setTimeout(c, 250)))
                              : c();
                          }
                          function d () {
                            R.s_c_in || ((R.s_c_il = []), (R.s_c_in = 0)),
                              (f._c = 'Visitor'),
                              (f._il = R.s_c_il),
                              (f._in = R.s_c_in),
                              (f._il[f._in] = f),
                              R.s_c_in++;
                          }
                          function p () {
                            function e (e) {
                              0 !== e.indexOf('_') &&
                                'function' == typeof n[e] &&
                                (f[e] = function () {});
                            }
                            Object.keys(n).forEach(e),
                              (f.getSupplementalDataID = n.getSupplementalDataID),
                              (f.isAllowed = function () {
                                return !0;
                              });
                          }
                          var f = this,
                            g = t.whitelistParentDomain;
                          (f.state = { ALLFIELDS: {} }),
                            (f.version = n.version),
                            (f.marketingCloudOrgID = e),
                            (f.cookieDomain = n.cookieDomain || '');
                          var m = !(f._instanceType = 'child'),
                            h = new U(e, g);
                          (f.callbackRegistry = T()),
                            (f.init = function () {
                              d(), p(), i(new A(f)), u();
                            }),
                            (f.findField = function (e, t) {
                              if (void 0 !== f.state[e]) return t(f.state[e]), f.state[e];
                            }),
                            (f.messageParent = s),
                            (f.setStateAndPublish = a);
                        },
                        L = j.MESSAGES,
                        F = j.ALL_APIS,
                        B = j.ASYNC_API_MAP,
                        H = j.FIELDGROUP_TO_FIELD,
                        G = function (i, r) {
                          function a () {
                            var r = {};
                            return (
                              Object.keys(F).forEach(function (e) {
                                var t = F[e],
                                  n = i[t]();
                                N.isValueEmpty(n) || (r[e] = n);
                              }),
                              r
                            );
                          }
                          function o () {
                            var n = [];
                            return (
                              i._loading &&
                                Object.keys(i._loading).forEach(function (e) {
                                  if (i._loading[e]) {
                                    var t = H[e];
                                    n.push(t);
                                  }
                                }),
                              n.length ? n : null
                            );
                          }
                          function t (n) {
                            return function r () {
                              var e = o();
                              if (e) {
                                var t = B[e[0]];
                                i[t](r, !0);
                              } else n();
                            };
                          }
                          function n (e, t) {
                            var n = a();
                            r.send(e, t, n);
                          }
                          function s (e) {
                            l(e), n(e, L.HANDSHAKE);
                          }
                          function c (e) {
                            t(function () {
                              n(e, L.PARENTSTATE);
                            })();
                          }
                          function l (t) {
                            function e (e) {
                              n.call(i, e),
                                r.send(t, L.PARENTSTATE, { CUSTOMERIDS: i.getCustomerIDs() });
                            }
                            var n = i.setCustomerIDs;
                            i.setCustomerIDs = e;
                          }
                          return function (e) {
                            r.isInvalid(e) ||
                              (r.parse(e).prefix === L.HANDSHAKE ? s : c)(e.source);
                          };
                        },
                        q = function (r, n) {
                          function i (t) {
                            return function (e) {
                              (a[t] = e), ++o === s && n(a);
                            };
                          }
                          var a = {},
                            o = 0,
                            s = Object.keys(r).length;
                          Object.keys(r).forEach(function (e) {
                            var t = r[e];
                            if (t.fn) {
                              var n = t.args || [];
                              n.unshift(i(e)), t.fn.apply(t.context || null, n);
                            }
                          });
                        },
                        W = {
                          get: function (e) {
                            const $___old_88f8fa7d7d2ce0ad = {}.constructor.getOwnPropertyDescriptor(
                              Document.prototype,
                              'cookie'
                            );
                            try {
                              if ($___old_88f8fa7d7d2ce0ad)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___stub_cdc5a54489618108.cookie
                                ));
                              return function () {
                                e = encodeURIComponent(e);
                                var t = (';' + document.cookie).split(' ').join(';'),
                                  n = t.indexOf(';' + e + '='),
                                  r = n < 0 ? n : t.indexOf(';', n + 1);
                                return n < 0
                                  ? ''
                                  : decodeURIComponent(
                                      t.substring(n + 2 + e.length, r < 0 ? t.length : r)
                                    );
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_88f8fa7d7d2ce0ad)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___old_88f8fa7d7d2ce0ad
                                ));
                            }
                          },
                          set: function (e, t, n) {
                            const $___old_97ca1a0a0cf7427d = {}.constructor.getOwnPropertyDescriptor(
                              Document.prototype,
                              'cookie'
                            );
                            try {
                              if ($___old_97ca1a0a0cf7427d)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___stub_cdc5a54489618108.cookie
                                ));
                              return function () {
                                var r = l(n, 'cookieLifetime'),
                                  i = l(n, 'expires'),
                                  a = l(n, 'domain'),
                                  o = l(n, 'secure') ? 'Secure' : '';
                                if (i && 'SESSION' !== r && 'NONE' !== r) {
                                  var s = '' !== t ? parseInt(r || 0, 10) : -60;
                                  if (s) (i = new Date()).setTime(i.getTime() + 1000 * s);
                                  else if (1 === i) {
                                    var c = (i = new Date()).getYear();
                                    i.setYear(c + 2 + (c < 1900 ? 1900 : 0));
                                  }
                                } else i = 0;
                                return e && 'NONE' !== r
                                  ? ((document.cookie =
                                      encodeURIComponent(e) +
                                      '=' +
                                      encodeURIComponent(t) +
                                      '; path=/;' +
                                      (i ? ' expires=' + i.toGMTString() + ';' : '') +
                                      (a ? ' domain=' + a + ';' : '') +
                                      o),
                                    this.get(e) === t)
                                  : 0;
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_97ca1a0a0cf7427d)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___old_97ca1a0a0cf7427d
                                ));
                            }
                          },
                          remove: function (e, t) {
                            const $___old_2b38c3a4e5add07c = {}.constructor.getOwnPropertyDescriptor(
                              Document.prototype,
                              'cookie'
                            );
                            try {
                              if ($___old_2b38c3a4e5add07c)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___stub_cdc5a54489618108.cookie
                                ));
                              return function () {
                                var n = l(t, 'domain');
                                (n = n ? ' domain=' + n + ';' : ''),
                                  (document.cookie =
                                    encodeURIComponent(e) +
                                    '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                                    n);
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_2b38c3a4e5add07c)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___old_2b38c3a4e5add07c
                                ));
                            }
                          },
                        },
                        K = function (e) {
                          var t;
                          !e && R.location && (e = R.location.hostname);
                          var n,
                            r = (t = e).split('.');
                          for (n = r.length - 2; 0 <= n; n--)
                            if (
                              ((t = r.slice(n).join('.')), W.set('test', 'cookie', { domain: t }))
                            )
                              return W.remove('test', { domain: t }), t;
                          return '';
                        },
                        Y = {
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
                        Q = !!R.postMessage,
                        $ = {
                          postMessage: function (e, t, n) {
                            var r = 1;
                            t &&
                              (Q
                                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (n.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + r++ + '&' + e));
                          },
                          receiveMessage: function (t, n) {
                            var e;
                            try {
                              Q &&
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
                                R.addEventListener
                                  ? R[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : R[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
                            } catch (t) {}
                          },
                        },
                        z = function (e) {
                          var t,
                            n,
                            r = '0123456789',
                            i = '',
                            a = '',
                            o = 8,
                            s = 10,
                            c = 10;
                          if (1 == e) {
                            for (r += 'ABCDEF', t = 0; t < 16; t++)
                              (n = Math.floor(Math.random() * o)),
                                (i += r.substring(n, n + 1)),
                                (n = Math.floor(Math.random() * o)),
                                (a += r.substring(n, n + 1)),
                                (o = 16);
                            return i + '-' + a;
                          }
                          for (t = 0; t < 19; t++)
                            (n = Math.floor(Math.random() * s)),
                              (i += r.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (s = 3)
                                : (1 == t || 2 == t) && 10 != s && n < 2
                                ? (s = 10)
                                : 2 < t && (s = 10),
                              (n = Math.floor(Math.random() * c)),
                              (a += r.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (c = 3)
                                : (1 == t || 2 == t) && 10 != c && n < 2
                                ? (c = 10)
                                : 2 < t && (c = 10);
                          return i + a;
                        },
                        J = function (r) {
                          const $___old_27aed3ef47ad31da = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_73c017ab6b8e6fdc = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_27aed3ef47ad31da)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_aa98dea0755b9294.XMLHttpRequest
                              ));
                            if ($___old_73c017ab6b8e6fdc)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_aa98dea0755b9294.XMLHttpRequest
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
                                        .call(R.HTMLElement)
                                        .indexOf('Constructor') && (t = !1)),
                                  { corsType: e, corsCookiesEnabled: t }),
                                getCORSInstance: function () {
                                  const $___old_fc23d6cc373bc877 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    ),
                                    $___old_4b2f47ac3c19e55d = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    );
                                  try {
                                    if ($___old_fc23d6cc373bc877)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_aa98dea0755b9294.XMLHttpRequest
                                      ));
                                    if ($___old_4b2f47ac3c19e55d)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_aa98dea0755b9294.XMLHttpRequest
                                      ));
                                    return function () {
                                      return 'none' === this.corsMetadata.corsType
                                        ? null
                                        : new R[this.corsMetadata.corsType]();
                                    }.apply(this, arguments);
                                  } finally {
                                    if ($___old_fc23d6cc373bc877)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_fc23d6cc373bc877
                                      ));
                                    if ($___old_4b2f47ac3c19e55d)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_4b2f47ac3c19e55d
                                      ));
                                  }
                                },
                                fireCORS: function (a, e) {
                                  function t (e) {
                                    var t;
                                    try {
                                      if ((t = JSON.parse(e)) !== Object(t))
                                        return void o.handleCORSError(
                                          a,
                                          null,
                                          'Response is not JSON'
                                        );
                                    } catch (e) {
                                      return void o.handleCORSError(
                                        a,
                                        e,
                                        'Error parsing response as JSON'
                                      );
                                    }
                                    try {
                                      for (var n = a.callback, r = R, i = 0; i < n.length; i++)
                                        r = r[n[i]];
                                      r(t);
                                    } catch (e) {
                                      o.handleCORSError(a, e, 'Error forming callback function');
                                    }
                                  }
                                  var o = this;
                                  e && (a.loadErrorHandler = e);
                                  try {
                                    var n = this.getCORSInstance();
                                    n.open('get', a.corsUrl + '&ts=' + new Date().getTime(), !0),
                                      'XMLHttpRequest' === this.corsMetadata.corsType &&
                                        ((n.withCredentials = !0),
                                        (n.timeout = r.loadTimeout),
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
                                        o.handleCORSError(a, e, 'onerror');
                                      }),
                                      (n.ontimeout = function (e) {
                                        o.handleCORSError(a, e, 'ontimeout');
                                      }),
                                      n.send(),
                                      r._log.requests.push(a.corsUrl);
                                  } catch (r) {
                                    this.handleCORSError(a, r, 'try-catch');
                                  }
                                },
                                handleCORSError: function (e, t, n) {
                                  r.CORSErrors.push({ corsData: e, error: t, description: n }),
                                    e.loadErrorHandler &&
                                      ('ontimeout' === n
                                        ? e.loadErrorHandler(!0)
                                        : e.loadErrorHandler(!1));
                                },
                              };
                              var e, t;
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_27aed3ef47ad31da)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_27aed3ef47ad31da
                              ));
                            if ($___old_73c017ab6b8e6fdc)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_73c017ab6b8e6fdc
                              ));
                          }
                        },
                        X = {
                          POST_MESSAGE_ENABLED: !!R.postMessage,
                          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                          MILLIS_PER_DAY: 86400000,
                          ADOBE_MC: 'adobe_mc',
                          ADOBE_MC_SDID: 'adobe_mc_sdid',
                          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                          ADOBE_MC_TTL_IN_MIN: 5,
                          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                          FIRST_PARTY_SERVER_COOKIE: 's_ecid',
                        },
                        Z = function (g, t) {
                          var i = R.document;
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
                                  encodeURIComponent(i.location.origin);
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
                                encodeURIComponent(i.location.href);
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
                            messageSendingInterval: X.POST_MESSAGE_ENABLED ? null : 100,
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
                                r.jsonForComparison.push(e),
                                  r.jsonWaiting.push(e),
                                  r.processSyncOnPage(e);
                              }
                              var n,
                                r = this;
                              if (e === Object(e) && e.ibs)
                                if (
                                  ((n = JSON.stringify(e.ibs || [])),
                                  this.jsonForComparison.length)
                                ) {
                                  var i,
                                    a,
                                    o,
                                    s = !1;
                                  for (i = 0, a = this.jsonForComparison.length; i < a; i++)
                                    if (
                                      ((o = this.jsonForComparison[i]),
                                      n === JSON.stringify(o.ibs || []))
                                    ) {
                                      s = !0;
                                      break;
                                    }
                                  s ? this.jsonDuplicates.push(e) : t();
                                } else t();
                              if (
                                (this.receivedThirdPartyCookiesNotification ||
                                  !X.POST_MESSAGE_ENABLED ||
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
                                    r.messageSendingInterval = X.POST_MESSAGE_ENABLED ? null : 150;
                                  }, this.THROTTLE_START)),
                                (this.sendingMessages = !0),
                                this.sendMessages());
                            },
                            getRegionAndCheckIfChanged: function (e, t) {
                              var n = g._getField('MCAAMLH'),
                                r = e.d_region || e.dcs_region;
                              return (
                                n
                                  ? r &&
                                    (g._setFieldExpire('MCAAMLH', t),
                                    g._setField('MCAAMLH', r),
                                    parseInt(n, 10) !== r &&
                                      ((this.regionChanged = !0),
                                      this.timesRegionChanged++,
                                      g._setField('MCSYNCSOP', ''),
                                      g._setField('MCSYNCS', ''),
                                      (n = r)))
                                  : (n = r) &&
                                    (g._setFieldExpire('MCAAMLH', t), g._setField('MCAAMLH', n)),
                                n || (n = ''),
                                n
                              );
                            },
                            processSyncOnPage: function (e) {
                              var t, n, r, i;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (r = 0; r < n; r++)
                                  (i = t[r]).syncOnPage &&
                                    this.checkFirstPartyCookie(i, '', 'syncOnPage');
                            },
                            process: function (e) {
                              var t,
                                n,
                                r,
                                i,
                                a,
                                o = encodeURIComponent,
                                s = !1;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (s = !0, r = 0; r < n; r++)
                                  (i = t[r]),
                                    (a = [
                                      o('ibs'),
                                      o(i.id || ''),
                                      o(i.tag || ''),
                                      N.encodeAndBuildRequest(i.url || [], ','),
                                      o(i.ttl || ''),
                                      '',
                                      '',
                                      i.fireURLSync ? 'true' : 'false',
                                    ]),
                                    i.syncOnPage ||
                                      (this.canSetThirdPartyCookies
                                        ? this.addMessage(a.join('|'))
                                        : i.fireURLSync &&
                                          this.checkFirstPartyCookie(i, a.join('|')));
                              s && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (e, t, n) {
                              var r = 'syncOnPage' === n,
                                i = r ? 'MCSYNCSOP' : 'MCSYNCS';
                              g._readVisitor();
                              var a,
                                o,
                                s = g._getField(i),
                                c = !1,
                                l = !1,
                                u = Math.ceil(new Date().getTime() / X.MILLIS_PER_DAY);
                              s
                                ? ((a = s.split('*')),
                                  (c = (o = this.pruneSyncData(a, e.id, u)).dataPresent),
                                  (l = o.dataValid),
                                  (c && l) || this.fireSync(r, e, t, a, i, u))
                                : ((a = []), this.fireSync(r, e, t, a, i, u));
                            },
                            pruneSyncData: function (e, t, n) {
                              var r,
                                i,
                                a,
                                o = !1,
                                s = !1;
                              for (i = 0; i < e.length; i++)
                                (r = e[i]),
                                  (a = parseInt(r.split('-')[1], 10)),
                                  r.match('^' + t + '-')
                                    ? ((o = !0), n < a ? (s = !0) : (e.splice(i, 1), i--))
                                    : a <= n && (e.splice(i, 1), i--);
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
                            fireSync: function (e, t, n, r, u, i) {
                              var d = this;
                              if (e) {
                                if ('img' === t.tag) {
                                  var a,
                                    o,
                                    s,
                                    c,
                                    l = t.url,
                                    p = g.loadSSL ? 'https:' : 'http:';
                                  for (a = 0, o = l.length; a < o; a++) {
                                    (s = l[a]), (c = /^\/\//.test(s));
                                    var f = new Image();
                                    f.addEventListener(
                                      'load',
                                      (function (o, s, c, l) {
                                        return function () {
                                          (d.onPagePixels[o] = null), g._readVisitor();
                                          var e,
                                            t,
                                            n,
                                            r,
                                            i = g._getField(u),
                                            a = [];
                                          if (i)
                                            for (t = 0, n = (e = i.split('*')).length; t < n; t++)
                                              (r = e[t]).match('^' + s.id + '-') || a.push(r);
                                          d.setSyncTrackingData(a, s, c, l);
                                        };
                                      })(this.onPagePixels.length, t, u, i)
                                    ),
                                      (f.src = (c ? p : '') + s),
                                      this.onPagePixels.push(f);
                                  }
                                }
                              } else this.addMessage(n), this.setSyncTrackingData(r, t, u, i);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                g._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push((X.POST_MESSAGE_ENABLED ? '' : t) + e);
                            },
                            setSyncTrackingData: function (e, t, n, r) {
                              e.push(t.id + '-' + (r + Math.ceil(t.ttl / 60 / 24))),
                                this.manageSyncsSize(e),
                                g._setField(n, e.join('*'));
                            },
                            sendMessages: function () {
                              var e,
                                t = this,
                                n = '',
                                r = encodeURIComponent;
                              this.regionChanged &&
                                ((n = r('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                                this.messages.length
                                  ? X.POST_MESSAGE_ENABLED
                                    ? ((e =
                                        n +
                                        r('---destpub-combined---') +
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
                              $.postMessage(e, this.url, this.iframe.contentWindow),
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
                                        'complete' === i.readyState ||
                                        'loaded' === i.readyState) &&
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
                                g._forceSyncIDCall || !e || t - e > X.DAYS_BETWEEN_SYNC_ID_CALLS
                              );
                            },
                            attachIframeASAP: function () {
                              function e () {
                                t.startedAttachingIframe ||
                                  (i.body ? t.attachIframe() : setTimeout(e, 30));
                              }
                              var t = this;
                              e();
                            },
                          };
                        },
                        ee = {
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
                        te = {
                          getConfigNames: function () {
                            return Object.keys(ee);
                          },
                          getConfigs: function () {
                            return ee;
                          },
                          normalizeConfig: function (e) {
                            return 'function' != typeof e ? e : e();
                          },
                        },
                        ne = function (e) {
                          var i = {};
                          return (
                            (e.on = function (e, t, n) {
                              if (!t || 'function' != typeof t)
                                throw new Error('[ON] Callback should be a function.');
                              i.hasOwnProperty(e) || (i[e] = []);
                              var r = i[e].push({ callback: t, context: n }) - 1;
                              return function () {
                                i[e].splice(r, 1), i[e].length || delete i[e];
                              };
                            }),
                            (e.off = function (e, t) {
                              i.hasOwnProperty(e) &&
                                (i[e] = i[e].filter(function (e) {
                                  if (e.callback !== t) return e;
                                }));
                            }),
                            (e.publish = function (e) {
                              if (i.hasOwnProperty(e)) {
                                var t = [].slice.call(arguments, 1);
                                i[e].slice(0).forEach(function (e) {
                                  e.callback.apply(e.context, t);
                                });
                              }
                            }),
                            e.publish
                          );
                        },
                        re = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
                        ie = {
                          AAM: 'aam',
                          ADCLOUD: 'adcloud',
                          ANALYTICS: 'aa',
                          CAMPAIGN: 'campaign',
                          ECID: 'ecid',
                          LIVEFYRE: 'livefyre',
                          TARGET: 'target',
                          MEDIA_ANALYTICS: 'mediaaa',
                        },
                        ae = (e((m = {}), ie.AAM, 565), e(m, ie.ECID, 565), m),
                        oe = (e((h = {}), ie.AAM, [1, 2, 5]), e(h, ie.ECID, [1, 2, 5]), h),
                        se =
                          ((v = ie),
                          Object.keys(v).map(function (e) {
                            return v[e];
                          })),
                        ce = function () {
                          var r = {};
                          return (
                            (r.callbacks = Object.create(null)),
                            (r.add = function (e, t) {
                              if (!c(t))
                                throw new Error(
                                  '[callbackRegistryFactory] Make sure callback is a function or an array of functions.'
                                );
                              r.callbacks[e] = r.callbacks[e] || [];
                              var n = r.callbacks[e].push(t) - 1;
                              return function () {
                                r.callbacks[e].splice(n, 1);
                              };
                            }),
                            (r.execute = function (e, t) {
                              if (r.callbacks[e]) {
                                t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                                try {
                                  for (; r.callbacks[e].length; ) {
                                    var n = r.callbacks[e].shift();
                                    'function' == typeof n
                                      ? n.apply(null, t)
                                      : n instanceof Array && n[1].apply(n[0], t);
                                  }
                                  delete r.callbacks[e];
                                } catch (r) {}
                              }
                            }),
                            (r.executeAll = function (n, e) {
                              (e || (n && !s(n))) &&
                                Object.keys(r.callbacks).forEach(function (e) {
                                  var t = void 0 !== n[e] ? n[e] : '';
                                  r.execute(e, t);
                                }, r);
                            }),
                            (r.hasCallbacks = function () {
                              return Boolean(Object.keys(r.callbacks).length);
                            }),
                            r
                          );
                        },
                        le = function () {},
                        ue = function (e) {
                          var t = window.console;
                          return !!t && 'function' == typeof t[e];
                        },
                        de = function (r, i, e) {
                          return e()
                            ? function () {
                                if (ue(r)) {
                                  for (
                                    var e = arguments.length, t = new Array(e), n = 0;
                                    n < e;
                                    n++
                                  )
                                    t[n] = arguments[n];
                                  console[r].apply(console, [i].concat(t));
                                }
                              }
                            : le;
                        },
                        pe = new r('[ADOBE OPT-IN]'),
                        fe = function (e, t) {
                          return V(e) === t;
                        },
                        ge = function (e, t) {
                          return e instanceof Array ? e : fe(e, 'string') ? [e] : t || [];
                        },
                        me = function (t) {
                          var e = Object.keys(t);
                          return (
                            !!e.length &&
                            e.every(function (e) {
                              return !0 === t[e];
                            })
                          );
                        },
                        he = function (e) {
                          return (
                            !(!e || ye(e)) &&
                            ge(e).every(function (e) {
                              return -1 < se.indexOf(e);
                            })
                          );
                        },
                        ve = function (e, n) {
                          return e.reduce(function (e, t) {
                            return (e[t] = n), e;
                          }, {});
                        },
                        be = function (e) {
                          return JSON.parse(JSON.stringify(e));
                        },
                        ye = function (e) {
                          return (
                            '[object Array]' === Object.prototype.toString.call(e) && !e.length
                          );
                        },
                        _e = function (e) {
                          if (ke(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        Ce = function (e) {
                          return void 0 === e || (ke(e) ? he(Object.keys(e)) : Se(e));
                        },
                        Se = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && fe(e, 'string') && he(Object.keys(t));
                          } catch (e) {
                            return !1;
                          }
                        },
                        ke = function (e) {
                          return null !== e && fe(e, 'object') && !1 === Array.isArray(e);
                        },
                        Ie = function () {},
                        we = function (e) {
                          return fe(e, 'function') ? e() : e;
                        },
                        De = function (e, t) {
                          Ce(e) || pe.error(''.concat(t));
                        },
                        Ae = function (t) {
                          return Object.keys(t).map(function (e) {
                            return t[e];
                          });
                        },
                        Te = function (e) {
                          return Ae(e).filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                          });
                        },
                        Pe = function (d) {
                          return function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                              n = t.command,
                              r = t.params,
                              i = void 0 === r ? {} : r,
                              a = t.callback,
                              o = void 0 === a ? Ie : a;
                            if (!n || -1 === n.indexOf('.'))
                              throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                              var s = n.split('.'),
                                c = d[s[0]],
                                l = s[1];
                              if (!c || 'function' != typeof c[l])
                                throw new Error('Make sure the plugin and API name exist.');
                              var u = Object.assign(i, { callback: o });
                              c[l].call(c, u);
                            } catch (d) {
                              pe.error('[execute] Something went wrong: ' + d.message);
                            }
                          };
                        };
                      (u.prototype = Object.create(Error.prototype)),
                        (u.prototype.constructor = u);
                      var Ee = 'fetchPermissions',
                        xe = '[OptIn#registerPlugin] Plugin is invalid.';
                      (d.Categories = ie), (d.TimeoutError = u);
                      var Oe = Object.freeze({ OptIn: d, IabPlugin: g }),
                        Me = function (d, p) {
                          d.publishDestinations = function (e, t, n) {
                            var r = t,
                              i = n;
                            try {
                              i = 'function' == typeof i ? i : e.callback;
                            } catch (d) {
                              i = function () {};
                            }
                            var a = p;
                            if (a.readyToAttachIframePreliminary()) {
                              if ('string' == typeof e) {
                                if (!e.length)
                                  return void i({ error: 'subdomain is not a populated string.' });
                                if (!(r instanceof Array && r.length))
                                  return void i({ error: 'messages is not a populated array.' });
                                var o = !1;
                                if (
                                  (r.forEach(function (e) {
                                    'string' == typeof e &&
                                      e.length &&
                                      (a.addMessage(e), (o = !0));
                                  }),
                                  !o)
                                )
                                  return void i({
                                    error: 'None of the messages are populated strings.',
                                  });
                              } else {
                                if (!N.isObject(e))
                                  return void i({ error: 'Invalid parameters passed.' });
                                var s = e;
                                if ('string' != typeof (e = s.subdomain) || !e.length)
                                  return void i({
                                    error: 'config.subdomain is not a populated string.',
                                  });
                                var c = s.urlDestinations;
                                if (!(c instanceof Array && c.length))
                                  return void i({
                                    error: 'config.urlDestinations is not a populated array.',
                                  });
                                var l = [];
                                c.forEach(function (e) {
                                  N.isObject(e) &&
                                    (e.hideReferrer
                                      ? e.message && a.addMessage(e.message)
                                      : l.push(e));
                                }),
                                  (function u () {
                                    l.length &&
                                      setTimeout(function () {
                                        var e = new Image(),
                                          t = l.shift();
                                        (e.src = t.url), a.onPageDestinationsFired.push(t), u();
                                      }, 100);
                                  })();
                              }
                              a.iframe
                                ? (i({
                                    message:
                                      'The destination publishing iframe is already attached and loaded.',
                                  }),
                                  a.requestToProcess())
                                : !d.subdomain && d._getField('MCMID')
                                ? ((a.subdomain = e),
                                  (a.doAttachIframe = !0),
                                  (a.url = a.getUrl()),
                                  a.readyToAttachIframe()
                                    ? (a.iframeLoadedCallbacks.push(function (e) {
                                        i({
                                          message:
                                            'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                                            (e.message || 'no result'),
                                        });
                                      }),
                                      a.attachIframe())
                                    : i({
                                        error:
                                          'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                                      }))
                                : a.iframeLoadedCallbacks.push(function (e) {
                                    i({
                                      message:
                                        'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
                                        (e.message || 'no result'),
                                    });
                                  });
                            } else
                              i({
                                error:
                                  'The destination publishing iframe is disabled in the Visitor library.',
                              });
                          };
                        },
                        Le = function V (e) {
                          function t (e, t) {
                            return (e >>> t) | (e << (32 - t));
                          }
                          for (
                            var n,
                              r,
                              i = Math.pow,
                              a = i(2, 32),
                              o = '',
                              s = [],
                              c = 8 * e.length,
                              l = (V.h = V.h || []),
                              u = (V.k = V.k || []),
                              d = u.length,
                              p = {},
                              f = 2;
                            d < 64;
                            f++
                          )
                            if (!p[f]) {
                              for (n = 0; n < 313; n += f) p[n] = f;
                              (l[d] = (i(f, 0.5) * a) | 0), (u[d++] = (i(f, 1 / 3) * a) | 0);
                            }
                          for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
                          for (n = 0; n < e.length; n++) {
                            if ((r = e.charCodeAt(n)) >> 8) return;
                            s[n >> 2] |= r << (((3 - n) % 4) * 8);
                          }
                          for (s[s.length] = (c / a) | 0, s[s.length] = c, r = 0; r < s.length; ) {
                            var g = s.slice(r, (r += 16)),
                              m = l;
                            for (l = l.slice(0, 8), n = 0; n < 64; n++) {
                              var h = g[n - 15],
                                v = g[n - 2],
                                b = l[0],
                                y = l[4],
                                _ =
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
                                          (t(v, 17) ^ t(v, 19) ^ (v >>> 10))) |
                                        0);
                              (l = [
                                (_ +
                                  ((t(b, 2) ^ t(b, 13) ^ t(b, 22)) +
                                    ((b & l[1]) ^ (b & l[2]) ^ (l[1] & l[2])))) |
                                  0,
                              ].concat(l))[4] = (l[4] + _) | 0;
                            }
                            for (n = 0; n < 8; n++) l[n] = (l[n] + m[n]) | 0;
                          }
                          for (n = 0; n < 8; n++)
                            for (r = 3; r + 1; r--) {
                              var C = (l[n] >> (8 * r)) & 255;
                              o += (C < 16 ? 0 : '') + C.toString(16);
                            }
                          return o;
                        },
                        Ve = function (e, t) {
                          return (
                            ('SHA-256' !== t &&
                              'SHA256' !== t &&
                              'sha256' !== t &&
                              'sha-256' !== t) ||
                              (e = Le(e)),
                            e
                          );
                        },
                        Re = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        je = Oe.OptIn;
                      N.defineGlobalNamespace(), (window.adobe.OptInCategories = je.Categories);
                      var Ne = function (r, n, e) {
                        function t (e) {
                          var r = e;
                          return function (e) {
                            var t = e || b.location.href;
                            try {
                              var n = f._extractParamFromUri(t, r);
                              if (n) return O.parsePipeDelimetedKeyValues(n);
                            } catch (e) {}
                          };
                        }
                        function i (e) {
                          function t (e, t, n) {
                            e && e.match(X.VALID_VISITOR_ID_REGEX) && (n === C && (v = !0), t(e));
                          }
                          t(e[C], f.setMarketingCloudVisitorID, C),
                            f._setFieldExpire(D, -1),
                            t(e[I], f.setAnalyticsVisitorID);
                        }
                        function a (e) {
                          (e = e || {}),
                            (f._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                            (f._supplementalDataIDCurrentConsumed =
                              e.supplementalDataIDCurrentConsumed || {}),
                            (f._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                            (f._supplementalDataIDLastConsumed =
                              e.supplementalDataIDLastConsumed || {});
                        }
                        function o (e) {
                          function i (e, t, n) {
                            return (n = n ? (n += '|') : n) + (e + '=') + encodeURIComponent(t);
                          }
                          function t (e, t) {
                            var n = t[0],
                              r = t[1];
                            return null != r && r !== A && (e = i(n, r, e)), e;
                          }
                          var n,
                            r = e.reduce(t, '');
                          return (
                            (n = (n = r) ? (n += '|') : n) + 'TS=' + O.getTimestampInSeconds()
                          );
                        }
                        function s (e) {
                          var t = e.minutesToLive,
                            n = '';
                          return (
                            (f.idSyncDisableSyncs || f.disableIdSyncs) &&
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
                          return !(!f.configs.doesOptInApply || (g.optIn.isComplete && d()));
                        }
                        function d () {
                          return f.configs.doesOptInApply && f.configs.isIabContext
                            ? g.optIn.isApproved(g.optIn.Categories.ECID) && h
                            : g.optIn.isApproved(g.optIn.Categories.ECID);
                        }
                        function l (e, t) {
                          if (((h = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies && (m = t.consentString), f.init(), p();
                        }
                        function u () {
                          g.optIn.isApproved(g.optIn.Categories.ECID) &&
                            (f.configs.isIabContext
                              ? g.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: l,
                                })
                              : (f.init(), p()));
                        }
                        function p () {
                          g.optIn.off('complete', u);
                        }
                        if (!e || e.split('').reverse().join('') !== r)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var f = this,
                          g = window.adobe,
                          m = '',
                          h = !1,
                          v = !1;
                        f.version = '4.5.2';
                        var b = R,
                          y = b.Visitor;
                        (y.version = f.version),
                          (y.AuthState = j.AUTH_STATE),
                          (y.OptOut = j.OPT_OUT),
                          b.s_c_in || ((b.s_c_il = []), (b.s_c_in = 0)),
                          (f._c = 'Visitor'),
                          (f._il = b.s_c_il),
                          (f._in = b.s_c_in),
                          (f._il[f._in] = f),
                          b.s_c_in++,
                          (f._instanceType = 'regular'),
                          (f._log = { requests: [] }),
                          (f.marketingCloudOrgID = r),
                          (f.cookieName = 'AMCV_' + r),
                          (f.sessionCookieName = 'AMCVS_' + r),
                          (f.cookieDomain = K()),
                          (f.loadSSL = 0 <= b.location.protocol.toLowerCase().indexOf('https')),
                          (f.loadTimeout = 30000),
                          (f.CORSErrors = []),
                          (f.marketingCloudServer = f.audienceManagerServer = 'dpm.demdex.net'),
                          (f.sdidParamExpiry = 30);
                        var _ = null,
                          C = 'MCMID',
                          S = 'MCIDTS',
                          k = 'A',
                          I = 'MCAID',
                          w = 'AAM',
                          D = 'MCAAMB',
                          A = 'NONE',
                          T = function (e) {
                            return !Object.prototype[e];
                          },
                          P = J(f);
                        (f.FIELDS = j.FIELDS),
                          (f.cookieRead = function (e) {
                            return W.get(e);
                          }),
                          (f.cookieWrite = function (e, t, n) {
                            var r = f.cookieLifetime ? ('' + f.cookieLifetime).toUpperCase() : '',
                              i = !1;
                            return (
                              f.configs &&
                                f.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (i = !0),
                              W.set(e, '' + t, {
                                expires: n,
                                domain: f.cookieDomain,
                                cookieLifetime: r,
                                secure: i,
                              })
                            );
                          }),
                          (f.resetState = function (e) {
                            e ? f._mergeServerState(e) : a();
                          }),
                          (f._isAllowedDone = !1),
                          (f._isAllowedFlag = !1),
                          (f.isAllowed = function () {
                            return (
                              f._isAllowedDone ||
                                ((f._isAllowedDone = !0),
                                (f.cookieRead(f.cookieName) ||
                                  f.cookieWrite(f.cookieName, 'T', 1)) &&
                                  (f._isAllowedFlag = !0)),
                              'T' === f.cookieRead(f.cookieName) &&
                                f._helpers.removeCookie(f.cookieName),
                              f._isAllowedFlag
                            );
                          }),
                          (f.setMarketingCloudVisitorID = function (e) {
                            f._setMarketingCloudFields(e);
                          }),
                          (f._use1stPartyMarketingCloudServer = !1),
                          (f.getMarketingCloudVisitorID = function (e, t) {
                            f.marketingCloudServer &&
                              f.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                              (f._use1stPartyMarketingCloudServer = !0);
                            var n = f._getAudienceManagerURLData('_setMarketingCloudFields'),
                              r = n.url;
                            return f._getRemoteField(C, r, e, t, n);
                          });
                        var E = function (t, e) {
                          var n = {};
                          f.getMarketingCloudVisitorID(function () {
                            e.forEach(function (e) {
                              n[e] = f._getField(e, !0);
                            }),
                              -1 !== e.indexOf('MCOPTOUT')
                                ? f.isOptedOut(
                                    function (e) {
                                      (n.MCOPTOUT = e), t(n);
                                    },
                                    null,
                                    !0
                                  )
                                : t(n);
                          }, !0);
                        };
                        (f.getVisitorValues = function (e, t) {
                          var n = {
                              MCMID: { fn: f.getMarketingCloudVisitorID, args: [!0], context: f },
                              MCOPTOUT: { fn: f.isOptedOut, args: [void 0, !0], context: f },
                              MCAID: { fn: f.getAnalyticsVisitorID, args: [!0], context: f },
                              MCAAMLH: {
                                fn: f.getAudienceManagerLocationHint,
                                args: [!0],
                                context: f,
                              },
                              MCAAMB: { fn: f.getAudienceManagerBlob, args: [!0], context: f },
                            },
                            r = t && t.length ? N.pluck(n, t) : n;
                          t && -1 === t.indexOf('MCAID') ? E(e, t) : q(r, e);
                        }),
                          (f._currentCustomerIDs = {}),
                          (f._customerIDsHashChanged = !1),
                          (f._newCustomerIDsHash = ''),
                          (f.setCustomerIDs = function (e, t) {
                            function n () {
                              f._customerIDsHashChanged = !1;
                            }
                            if (!f.isOptedOut() && e) {
                              if (!N.isObject(e) || N.isObjectEmpty(e)) return !1;
                              var r, i, a;
                              for (r in (f._readVisitor(), e))
                                if (
                                  T(r) &&
                                  ((t = (i = e[r]).hasOwnProperty('hashType') ? i.hashType : t), i)
                                )
                                  if ('object' === V(i)) {
                                    var o = {};
                                    if (i.id) {
                                      if (t) {
                                        if (!(a = Ve(Re(i.id), t))) return;
                                        (i.id = a), (o.hashType = t);
                                      }
                                      o.id = i.id;
                                    }
                                    null != i.authState && (o.authState = i.authState),
                                      (f._currentCustomerIDs[r] = o);
                                  } else if (t) {
                                    if (!(a = Ve(Re(i), t))) return;
                                    f._currentCustomerIDs[r] = { id: a, hashType: t };
                                  } else f._currentCustomerIDs[r] = { id: i };
                              var s = f.getCustomerIDs(),
                                c = f._getField('MCCIDH'),
                                l = '';
                              for (r in (c || (c = 0), s))
                                T(r) &&
                                  (l +=
                                    (l ? '|' : '') +
                                    r +
                                    '|' +
                                    ((i = s[r]).id ? i.id : '') +
                                    (i.authState ? i.authState : ''));
                              (f._newCustomerIDsHash = String(f._hash(l))),
                                f._newCustomerIDsHash !== c &&
                                  ((f._customerIDsHashChanged = !0), f._mapCustomerIDs(n));
                            }
                          }),
                          (f.getCustomerIDs = function () {
                            f._readVisitor();
                            var e,
                              t,
                              n = {};
                            for (e in f._currentCustomerIDs)
                              T(e) &&
                                (t = f._currentCustomerIDs[e]).id &&
                                (n[e] || (n[e] = {}),
                                (n[e].id = t.id),
                                null != t.authState
                                  ? (n[e].authState = t.authState)
                                  : (n[e].authState = y.AuthState.UNKNOWN),
                                t.hashType && (n[e].hashType = t.hashType));
                            return n;
                          }),
                          (f.setAnalyticsVisitorID = function (e) {
                            f._setAnalyticsFields(e);
                          }),
                          (f.getAnalyticsVisitorID = function (e, t, n) {
                            if (!O.isTrackingServerPopulated() && !n)
                              return f._callCallback(e, ['']), '';
                            var r = '';
                            if (
                              (n ||
                                (r = f.getMarketingCloudVisitorID(function () {
                                  f.getAnalyticsVisitorID(e, !0);
                                })),
                              r || n)
                            ) {
                              var i = n ? f.marketingCloudServer : f.trackingServer,
                                a = '';
                              f.loadSSL &&
                                (n
                                  ? f.marketingCloudServerSecure &&
                                    (i = f.marketingCloudServerSecure)
                                  : f.trackingServerSecure && (i = f.trackingServerSecure));
                              var o = {};
                              if (i) {
                                var s = 'http' + (f.loadSSL ? 's' : '') + '://' + i + '/id',
                                  c =
                                    'd_visid_ver=' +
                                    f.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(f.marketingCloudOrgID) +
                                    (r ? '&mid=' + encodeURIComponent(r) : '') +
                                    (f.idSyncDisable3rdPartySyncing || f.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  l = [
                                    's_c_il',
                                    f._in,
                                    '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (a =
                                  s +
                                  '?' +
                                  c +
                                  '&callback=s_c_il%5B' +
                                  f._in +
                                  '%5D._set' +
                                  (n ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (o.corsUrl = s + '?' + c),
                                  (o.callback = l);
                              }
                              return (o.url = a), f._getRemoteField(n ? C : I, a, e, t, o);
                            }
                            return '';
                          }),
                          (f.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              f.getMarketingCloudVisitorID(function () {
                                f.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var n = f._getField(I);
                              if (
                                (!n &&
                                  O.isTrackingServerPopulated() &&
                                  (n = f.getAnalyticsVisitorID(function () {
                                    f.getAudienceManagerLocationHint(e, !0);
                                  })),
                                n || !O.isTrackingServerPopulated())
                              ) {
                                var r = f._getAudienceManagerURLData(),
                                  i = r.url;
                                return f._getRemoteField('MCAAMLH', i, e, t, r);
                              }
                            }
                            return '';
                          }),
                          (f.getLocationHint = f.getAudienceManagerLocationHint),
                          (f.getAudienceManagerBlob = function (e, t) {
                            if (
                              f.getMarketingCloudVisitorID(function () {
                                f.getAudienceManagerBlob(e, !0);
                              })
                            ) {
                              var n = f._getField(I);
                              if (
                                (!n &&
                                  O.isTrackingServerPopulated() &&
                                  (n = f.getAnalyticsVisitorID(function () {
                                    f.getAudienceManagerBlob(e, !0);
                                  })),
                                n || !O.isTrackingServerPopulated())
                              ) {
                                var r = f._getAudienceManagerURLData(),
                                  i = r.url;
                                return (
                                  f._customerIDsHashChanged && f._setFieldExpire(D, -1),
                                  f._getRemoteField(D, i, e, t, r)
                                );
                              }
                            }
                            return '';
                          }),
                          (f._supplementalDataIDCurrent = ''),
                          (f._supplementalDataIDCurrentConsumed = {}),
                          (f._supplementalDataIDLast = ''),
                          (f._supplementalDataIDLastConsumed = {});
                        var x = !(f.getSupplementalDataID = function (e, t) {
                          f._supplementalDataIDCurrent ||
                            t ||
                            (f._supplementalDataIDCurrent = f._generateID(1));
                          var n = f._supplementalDataIDCurrent;
                          return (
                            f._supplementalDataIDLast && !f._supplementalDataIDLastConsumed[e]
                              ? ((n = f._supplementalDataIDLast),
                                (f._supplementalDataIDLastConsumed[e] = !0))
                              : n &&
                                (f._supplementalDataIDCurrentConsumed[e] &&
                                  ((f._supplementalDataIDLast = f._supplementalDataIDCurrent),
                                  (f._supplementalDataIDLastConsumed =
                                    f._supplementalDataIDCurrentConsumed),
                                  (f._supplementalDataIDCurrent = n = t ? '' : f._generateID(1)),
                                  (f._supplementalDataIDCurrentConsumed = {})),
                                n && (f._supplementalDataIDCurrentConsumed[e] = !0)),
                            n
                          );
                        });
                        (f._liberatedOptOut = null),
                          (f.getOptOut = function (e, t) {
                            var n = f._getAudienceManagerURLData('_setMarketingCloudFields'),
                              r = n.url;
                            if (d()) return f._getRemoteField('MCOPTOUT', r, e, t, n);
                            if (
                              (f._registerCallback('liberatedOptOut', e),
                              null !== f._liberatedOptOut)
                            )
                              return (
                                f._callAllCallbacks('liberatedOptOut', [f._liberatedOptOut]),
                                (x = !1),
                                f._liberatedOptOut
                              );
                            if (x) return null;
                            x = !0;
                            var i = 'liberatedGetOptOut';
                            return (
                              (n.corsUrl = n.corsUrl.replace(
                                /dpm\.demdex\.net\/id\?/,
                                'dpm.demdex.net/optOutStatus?'
                              )),
                              (n.callback = [i]),
                              (R[i] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    n,
                                    r = N.parseOptOut(e, t, A);
                                  (t = r.optOut),
                                    (n = 1000 * r.d_ottl),
                                    (f._liberatedOptOut = t),
                                    setTimeout(function () {
                                      f._liberatedOptOut = null;
                                    }, n);
                                }
                                f._callAllCallbacks('liberatedOptOut', [t]), (x = !1);
                              }),
                              P.fireCORS(n),
                              null
                            );
                          }),
                          (f.isOptedOut = function (n, r, e) {
                            r || (r = y.OptOut.GLOBAL);
                            var t = f.getOptOut(function (e) {
                              var t = e === y.OptOut.GLOBAL || 0 <= e.indexOf(r);
                              f._callCallback(n, [t]);
                            }, e);
                            return t ? t === y.OptOut.GLOBAL || 0 <= t.indexOf(r) : null;
                          }),
                          (f._fields = null),
                          (f._fieldsExpired = null),
                          (f._hash = function (e) {
                            var t,
                              n = 0;
                            if (e)
                              for (t = 0; t < e.length; t++)
                                (n = (n << 5) - n + e.charCodeAt(t)), (n &= n);
                            return n;
                          }),
                          (f._generateID = z),
                          (f._generateLocalMID = function () {
                            var e = f._generateID(0);
                            return (L.isClientSideMarketingCloudVisitorID = !0), e;
                          }),
                          (f._callbackList = null),
                          (f._callCallback = function (e, t) {
                            try {
                              'function' == typeof e ? e.apply(b, t) : e[1].apply(e[0], t);
                            } catch (e) {}
                          }),
                          (f._registerCallback = function (e, t) {
                            t &&
                              (null == f._callbackList && (f._callbackList = {}),
                              null == f._callbackList[e] && (f._callbackList[e] = []),
                              f._callbackList[e].push(t));
                          }),
                          (f._callAllCallbacks = function (e, t) {
                            if (null != f._callbackList) {
                              var n = f._callbackList[e];
                              if (n) for (; 0 < n.length; ) f._callCallback(n.shift(), t);
                            }
                          }),
                          (f._addQuerystringParam = function (e, t, n, r) {
                            var i = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                              a = O.parseHash(e),
                              o = O.hashlessUrl(e);
                            if (-1 === o.indexOf('?')) return o + '?' + i + a;
                            var s = o.split('?'),
                              c = s[0] + '?',
                              l = s[1];
                            return c + O.addQueryParamAtLocation(l, i, r) + a;
                          }),
                          (f._extractParamFromUri = function (e, t) {
                            var n = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                            if (n && n.length) return decodeURIComponent(n[1]);
                          }),
                          (f._parseAdobeMcFromUrl = t(X.ADOBE_MC)),
                          (f._parseAdobeMcSdidFromUrl = t(X.ADOBE_MC_SDID)),
                          (f._attemptToPopulateSdidFromUrl = function (e) {
                            var t = f._parseAdobeMcSdidFromUrl(e),
                              n = 1000000000;
                            t && t.TS && (n = O.getTimestampInSeconds() - t.TS),
                              t &&
                                t.SDID &&
                                t.MCORGID === r &&
                                n < f.sdidParamExpiry &&
                                ((f._supplementalDataIDCurrent = t.SDID),
                                (f._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (f._attemptToPopulateIdsFromUrl = function () {
                            var e = f._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var t = O.getTimestampInSeconds() - e.TS;
                              if (Math.floor(t / 60) > X.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== r)
                                return;
                              i(e);
                            }
                          }),
                          (f._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((r = e),
                                  (e = O.isObject(r) ? r : JSON.parse(r))[f.marketingCloudOrgID])
                                ) {
                                  var t = e[f.marketingCloudOrgID];
                                  (n = t.customerIDs),
                                    O.isObject(n) && f.setCustomerIDs(n),
                                    a(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                            var n, r;
                          }),
                          (f._timeout = null),
                          (f._loadData = function (e, t, n, r) {
                            (t = f._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (r.url = f._addQuerystringParam(r.url, 'd_fieldgroup', e, 1)),
                              (r.corsUrl = f._addQuerystringParam(
                                r.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (L.fieldGroupObj[e] = !0),
                              r === Object(r) &&
                                r.corsUrl &&
                                'XMLHttpRequest' === P.corsMetadata.corsType &&
                                P.fireCORS(r, n, e);
                          }),
                          (f._clearTimeout = function (e) {
                            null != f._timeout &&
                              f._timeout[e] &&
                              (clearTimeout(f._timeout[e]), (f._timeout[e] = 0));
                          }),
                          (f._settingsDigest = 0),
                          (f._getSettingsDigest = function () {
                            if (!f._settingsDigest) {
                              var e = f.version;
                              f.audienceManagerServer && (e += '|' + f.audienceManagerServer),
                                f.audienceManagerServerSecure &&
                                  (e += '|' + f.audienceManagerServerSecure),
                                (f._settingsDigest = f._hash(e));
                            }
                            return f._settingsDigest;
                          }),
                          (f._readVisitorDone = !1),
                          (f._readVisitor = function () {
                            if (!f._readVisitorDone) {
                              f._readVisitorDone = !0;
                              var e,
                                t,
                                n,
                                r,
                                i,
                                a,
                                o = f._getSettingsDigest(),
                                s = !1,
                                c = f.cookieRead(f.cookieName),
                                l = new Date();
                              if (
                                (c ||
                                  v ||
                                  f.discardTrackingServerECID ||
                                  (c = f.cookieRead(X.FIRST_PARTY_SERVER_COOKIE)),
                                null == f._fields && (f._fields = {}),
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
                                    (r = c[e + 1]),
                                    1 < t.length
                                      ? ((i = parseInt(t[1], 10)), (a = 0 < t[1].indexOf('s')))
                                      : ((i = 0), (a = !1)),
                                    s &&
                                      ('MCCIDH' === n && (r = ''),
                                      0 < i && (i = l.getTime() / 1000 - 60)),
                                    n &&
                                      r &&
                                      (f._setField(n, r, 1),
                                      0 < i &&
                                        ((f._fields['expire' + n] = i + (a ? 's' : '')),
                                        (l.getTime() >= 1000 * i ||
                                          (a && !f.cookieRead(f.sessionCookieName))) &&
                                          (f._fieldsExpired || (f._fieldsExpired = {}),
                                          (f._fieldsExpired[n] = !0))));
                              !f._getField(I) &&
                                O.isTrackingServerPopulated() &&
                                (c = f.cookieRead('s_vi')) &&
                                1 < (c = c.split('|')).length &&
                                0 <= c[0].indexOf('v1') &&
                                (0 <= (e = (r = c[1]).indexOf('[')) && (r = r.substring(0, e)),
                                r && r.match(X.VALID_VISITOR_ID_REGEX) && f._setField(I, r));
                            }
                          }),
                          (f._appendVersionTo = function (e) {
                            var t = 'vVersion|' + f.version,
                              n = e ? f._getCookieVersion(e) : null;
                            return (
                              n
                                ? Y.areVersionsDifferent(n, f.version) &&
                                  (e = e.replace(X.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (f._writeVisitor = function () {
                            var e,
                              t,
                              n = f._getSettingsDigest();
                            for (e in f._fields)
                              T(e) &&
                                f._fields[e] &&
                                'expire' !== e.substring(0, 6) &&
                                ((t = f._fields[e]),
                                (n +=
                                  (n ? '|' : '') +
                                  e +
                                  (f._fields['expire' + e] ? '-' + f._fields['expire' + e] : '') +
                                  '|' +
                                  t));
                            (n = f._appendVersionTo(n)), f.cookieWrite(f.cookieName, n, 1);
                          }),
                          (f._getField = function (e, t) {
                            return null == f._fields ||
                              (!t && f._fieldsExpired && f._fieldsExpired[e])
                              ? null
                              : f._fields[e];
                          }),
                          (f._setField = function (e, t, n) {
                            null == f._fields && (f._fields = {}),
                              (f._fields[e] = t),
                              n || f._writeVisitor();
                          }),
                          (f._getFieldList = function (e, t) {
                            var n = f._getField(e, t);
                            return n ? n.split('*') : null;
                          }),
                          (f._setFieldList = function (e, t, n) {
                            f._setField(e, t ? t.join('*') : '', n);
                          }),
                          (f._getFieldMap = function (e, t) {
                            var n = f._getFieldList(e, t);
                            if (n) {
                              var r,
                                i = {};
                              for (r = 0; r < n.length; r += 2) i[n[r]] = n[r + 1];
                              return i;
                            }
                            return null;
                          }),
                          (f._setFieldMap = function (e, t, n) {
                            var r,
                              i = null;
                            if (t) for (r in ((i = []), t)) T(r) && (i.push(r), i.push(t[r]));
                            f._setFieldList(e, i, n);
                          }),
                          (f._setFieldExpire = function (e, t, n) {
                            var r = new Date();
                            r.setTime(r.getTime() + 1000 * t),
                              null == f._fields && (f._fields = {}),
                              (f._fields['expire' + e] =
                                Math.floor(r.getTime() / 1000) + (n ? 's' : '')),
                              t < 0
                                ? (f._fieldsExpired || (f._fieldsExpired = {}),
                                  (f._fieldsExpired[e] = !0))
                                : f._fieldsExpired && (f._fieldsExpired[e] = !1),
                              n &&
                                (f.cookieRead(f.sessionCookieName) ||
                                  f.cookieWrite(f.sessionCookieName, '1'));
                          }),
                          (f._findVisitorID = function (e) {
                            return (
                              e &&
                                ('object' === V(e) &&
                                  (e = e.d_mid
                                    ? e.d_mid
                                    : e.visitorID
                                    ? e.visitorID
                                    : e.id
                                    ? e.id
                                    : e.uuid
                                    ? e.uuid
                                    : '' + e),
                                e && 'NOTARGET' === (e = e.toUpperCase()) && (e = A),
                                (e && (e === A || e.match(X.VALID_VISITOR_ID_REGEX))) || (e = '')),
                              e
                            );
                          }),
                          (f._setFields = function (e, t) {
                            if (
                              (f._clearTimeout(e),
                              null != f._loading && (f._loading[e] = !1),
                              L.fieldGroupObj[e] && L.setState(e, !1),
                              'MC' === e)
                            ) {
                              !0 !== L.isClientSideMarketingCloudVisitorID &&
                                (L.isClientSideMarketingCloudVisitorID = !1);
                              var n = f._getField(C);
                              if (!n || f.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(n = 'object' === V(t) && t.mid ? t.mid : f._findVisitorID(t))
                                ) {
                                  if (
                                    f._use1stPartyMarketingCloudServer &&
                                    !f.tried1stPartyMarketingCloudServer
                                  )
                                    return (
                                      (f.tried1stPartyMarketingCloudServer = !0),
                                      void f.getAnalyticsVisitorID(null, !1, !0)
                                    );
                                  n = f._generateLocalMID();
                                }
                                f._setField(C, n);
                              }
                              (n && n !== A) || (n = ''),
                                'object' === V(t) &&
                                  ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                    f._setFields(w, t),
                                  f._use1stPartyMarketingCloudServer &&
                                    t.mid &&
                                    f._setFields(k, { id: t.id })),
                                f._callAllCallbacks(C, [n]);
                            }
                            if (e === w && 'object' === V(t)) {
                              var r = 604800;
                              null != t.id_sync_ttl &&
                                t.id_sync_ttl &&
                                (r = parseInt(t.id_sync_ttl, 10));
                              var i = M.getRegionAndCheckIfChanged(t, r);
                              f._callAllCallbacks('MCAAMLH', [i]);
                              var a = f._getField(D);
                              (t.d_blob || t.blob) &&
                                ((a = t.d_blob) || (a = t.blob),
                                f._setFieldExpire(D, r),
                                f._setField(D, a)),
                                a || (a = ''),
                                f._callAllCallbacks(D, [a]),
                                !t.error_msg &&
                                  f._newCustomerIDsHash &&
                                  f._setField('MCCIDH', f._newCustomerIDsHash);
                            }
                            if (e === k) {
                              var o = f._getField(I);
                              (o && !f.overwriteCrossDomainMCIDAndAID) ||
                                ((o = f._findVisitorID(t))
                                  ? o !== A && f._setFieldExpire(D, -1)
                                  : (o = A),
                                f._setField(I, o)),
                                (o && o !== A) || (o = ''),
                                f._callAllCallbacks(I, [o]);
                            }
                            if (f.idSyncDisableSyncs || f.disableIdSyncs)
                              M.idCallNotProcesssed = !0;
                            else {
                              M.idCallNotProcesssed = !1;
                              var s = {};
                              (s.ibs = t.ibs), (s.subdomain = t.subdomain), M.processIDCallData(s);
                            }
                            if (t === Object(t)) {
                              var c, l;
                              d() && f.isAllowed() && (c = f._getField('MCOPTOUT'));
                              var u = N.parseOptOut(t, c, A);
                              (c = u.optOut),
                                (l = u.d_ottl),
                                f._setFieldExpire('MCOPTOUT', l, !0),
                                f._setField('MCOPTOUT', c),
                                f._callAllCallbacks('MCOPTOUT', [c]);
                            }
                          }),
                          (f._loading = null),
                          (f._getRemoteField = function (n, e, t, r, i) {
                            var a,
                              o = '',
                              s = O.isFirstPartyAnalyticsVisitorIDCall(n),
                              c = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && f.isAllowed())
                              if (
                                (f._readVisitor(),
                                !(
                                  !(o = f._getField(n, !0 === c[n])) ||
                                  (f._fieldsExpired && f._fieldsExpired[n])
                                ) ||
                                  (f.disableThirdPartyCalls && !s))
                              )
                                o ||
                                  (n === C
                                    ? (f._registerCallback(n, t),
                                      (o = f._generateLocalMID()),
                                      f.setMarketingCloudVisitorID(o))
                                    : n === I
                                    ? (f._registerCallback(n, t),
                                      (o = ''),
                                      f.setAnalyticsVisitorID(o))
                                    : (r = !(o = '')));
                              else if (
                                (n === C || 'MCOPTOUT' === n
                                  ? (a = 'MC')
                                  : 'MCAAMLH' === n || n === D
                                  ? (a = w)
                                  : n === I && (a = k),
                                a)
                              )
                                return (
                                  !e ||
                                    (null != f._loading && f._loading[a]) ||
                                    (null == f._loading && (f._loading = {}),
                                    (f._loading[a] = !0),
                                    f._loadData(
                                      a,
                                      e,
                                      function (e) {
                                        if (!f._getField(n)) {
                                          e && L.setState(a, !0);
                                          var t = '';
                                          n === C
                                            ? (t = f._generateLocalMID())
                                            : a === w && (t = { error_msg: 'timeout' }),
                                            f._setFields(a, t);
                                        }
                                      },
                                      i
                                    )),
                                  f._registerCallback(n, t),
                                  o || (e || f._setFields(a, { id: A }), '')
                                );
                            return (
                              (n !== C && n !== I) || o !== A || (r = !(o = '')),
                              t && r && f._callCallback(t, [o]),
                              o
                            );
                          }),
                          (f._setMarketingCloudFields = function (e) {
                            f._readVisitor(), f._setFields('MC', e);
                          }),
                          (f._mapCustomerIDs = function (e) {
                            f.getAudienceManagerBlob(e, !0);
                          }),
                          (f._setAnalyticsFields = function (e) {
                            f._readVisitor(), f._setFields(k, e);
                          }),
                          (f._setAudienceManagerFields = function (e) {
                            f._readVisitor(), f._setFields(w, e);
                          }),
                          (f._getAudienceManagerURLData = function (e) {
                            var t = f.audienceManagerServer,
                              n = '',
                              r = f._getField(C),
                              i = f._getField(D, !0),
                              a = f._getField(I),
                              o = a && a !== A ? '&d_cid_ic=AVID%01' + encodeURIComponent(a) : '';
                            if (
                              (f.loadSSL &&
                                f.audienceManagerServerSecure &&
                                (t = f.audienceManagerServerSecure),
                              t)
                            ) {
                              var s,
                                c,
                                l = f.getCustomerIDs();
                              if (l)
                                for (s in l)
                                  T(s) &&
                                    ((c = l[s]),
                                    (o +=
                                      '&d_cid_ic=' +
                                      encodeURIComponent(s) +
                                      '%01' +
                                      encodeURIComponent(c.id ? c.id : '') +
                                      (c.authState ? '%01' + c.authState : '')));
                              e || (e = '_setAudienceManagerFields');
                              var u = 'http' + (f.loadSSL ? 's' : '') + '://' + t + '/id',
                                d =
                                  'd_visid_ver=' +
                                  f.version +
                                  (m && -1 !== u.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_force=1&gdpr_consent=' + m
                                    : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!r && f._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(f.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (f.idSyncContainerID || 0) +
                                  (r ? '&d_mid=' + encodeURIComponent(r) : '') +
                                  (f.idSyncDisable3rdPartySyncing || f.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === _
                                    ? '&d_coop_safe=1'
                                    : !1 === _
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (i ? '&d_blob=' + encodeURIComponent(i) : '') +
                                  o,
                                p = ['s_c_il', f._in, e];
                              return {
                                url: (n = u + '?' + d + '&d_cb=s_c_il%5B' + f._in + '%5D.' + e),
                                corsUrl: u + '?' + d,
                                callback: p,
                              };
                            }
                            return { url: n };
                          }),
                          (f.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [C, f._getField(C)],
                                [I, f._getField(I)],
                                ['MCORGID', f.marketingCloudOrgID],
                              ];
                              return f._addQuerystringParam(e, X.ADOBE_MC, o(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (f.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || f.getSupplementalDataID(O.generateRandomString(), !0)))
                              return e;
                            try {
                              var n = o([
                                ['SDID', t],
                                ['MCORGID', f.marketingCloudOrgID],
                              ]);
                              return f._addQuerystringParam(e, X.ADOBE_MC_SDID, n);
                            } catch (t) {
                              return e;
                            }
                          });
                        var O = {
                          parseHash: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(t) : '';
                          },
                          hashlessUrl: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(0, t) : e;
                          },
                          addQueryParamAtLocation: function (e, t, n) {
                            var r = e.split('&');
                            return (n = null != n ? n : r.length), r.splice(n, 0, t), r.join('&');
                          },
                          isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
                            return (
                              e === I &&
                              (t || (t = f.trackingServer),
                              n || (n = f.trackingServerSecure),
                              !('string' != typeof (r = f.loadSSL ? n : t) || !r.length) &&
                                r.indexOf('2o7.net') < 0 &&
                                r.indexOf('omtrdc.net') < 0)
                            );
                            var r;
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            W.remove(e, { domain: f.cookieDomain });
                          },
                          isTrackingServerPopulated: function () {
                            return !!f.trackingServer || !!f.trackingServerSecure;
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
                        f._helpers = O;
                        var M = Z(f, y);
                        (f._destinationPublishing = M), (f.timeoutMetricsLog = []);
                        var L = {
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
                              case k:
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
                        (f.isClientSideMarketingCloudVisitorID = function () {
                          return L.isClientSideMarketingCloudVisitorID;
                        }),
                          (f.MCIDCallTimedOut = function () {
                            return L.MCIDCallTimedOut;
                          }),
                          (f.AnalyticsIDCallTimedOut = function () {
                            return L.AnalyticsIDCallTimedOut;
                          }),
                          (f.AAMIDCallTimedOut = function () {
                            return L.AAMIDCallTimedOut;
                          }),
                          (f.idSyncGetOnPageSyncInfo = function () {
                            return f._readVisitor(), f._getField('MCSYNCSOP');
                          }),
                          (f.idSyncByURL = function (e) {
                            if (!f.isOptedOut()) {
                              var t = s(e || {});
                              if (t.error) return t.error;
                              var n,
                                r,
                                i = e.url,
                                a = encodeURIComponent,
                                o = M;
                              return (
                                (i = i.replace(/^https:/, '').replace(/^http:/, '')),
                                (n = N.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (r = ['ibs', a(e.dpid), 'img', a(i), t.ttl, '', n]),
                                o.addMessage(r.join('|')),
                                o.requestToProcess(),
                                'Successfully queued'
                              );
                            }
                          }),
                          (f.idSyncByDataSource = function (e) {
                            if (!f.isOptedOut())
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  f.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                          }),
                          Me(f, M),
                          (f._getCookieVersion = function (e) {
                            e = e || f.cookieRead(f.cookieName);
                            var t = X.VERSION_REGEX.exec(e);
                            return t && 1 < t.length ? t[1] : null;
                          }),
                          (f._resetAmcvCookie = function (e) {
                            var t = f._getCookieVersion();
                            (t && !Y.isLessThan(t, e)) || O.removeCookie(f.cookieName);
                          }),
                          (f.setAsCoopSafe = function () {
                            _ = !0;
                          }),
                          (f.setAsCoopUnsafe = function () {
                            _ = !1;
                          }),
                          (function () {
                            if (((f.configs = Object.create(null)), O.isObject(n)))
                              for (var e in n) T(e) && ((f[e] = n[e]), (f.configs[e] = n[e]));
                          })(),
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
                              r = f[t];
                            f[t] = function (e) {
                              return d() && f.isAllowed()
                                ? r.apply(f, arguments)
                                : ('function' == typeof e && f._callCallback(e, [n]), n);
                            };
                          }),
                          (f.init = function () {
                            if (c()) return g.optIn.fetchPermissions(u, !0);
                            !(function () {
                              if (O.isObject(n)) {
                                (f.idSyncContainerID = f.idSyncContainerID || 0),
                                  (_ =
                                    'boolean' == typeof f.isCoopSafe
                                      ? f.isCoopSafe
                                      : O.parseBoolean(f.isCoopSafe)),
                                  f.resetBeforeVersion && f._resetAmcvCookie(f.resetBeforeVersion),
                                  f._attemptToPopulateIdsFromUrl(),
                                  f._attemptToPopulateSdidFromUrl(),
                                  f._readVisitor();
                                var e = f._getField(S),
                                  t = Math.ceil(new Date().getTime() / X.MILLIS_PER_DAY);
                                f.idSyncDisableSyncs ||
                                  f.disableIdSyncs ||
                                  !M.canMakeSyncIDCall(e, t) ||
                                  (f._setFieldExpire(D, -1), f._setField(S, t)),
                                  f.getMarketingCloudVisitorID(),
                                  f.getAudienceManagerLocationHint(),
                                  f.getAudienceManagerBlob(),
                                  f._mergeServerState(f.serverState);
                              } else
                                f._attemptToPopulateIdsFromUrl(),
                                  f._attemptToPopulateSdidFromUrl();
                            })(),
                              (function () {
                                if (!f.idSyncDisableSyncs && !f.disableIdSyncs) {
                                  M.checkDPIframeSrc();
                                  var e = function () {
                                    var e = M;
                                    e.readyToAttachIframe() && e.attachIframe();
                                  };
                                  b.addEventListener('load', function () {
                                    (y.windowLoaded = !0), e();
                                  });
                                  try {
                                    $.receiveMessage(function (e) {
                                      M.receiveMessage(e.data);
                                    }, M.iframeHost);
                                  } catch (e) {}
                                }
                              })(),
                              f.whitelistIframeDomains &&
                                X.POST_MESSAGE_ENABLED &&
                                ((f.whitelistIframeDomains =
                                  f.whitelistIframeDomains instanceof Array
                                    ? f.whitelistIframeDomains
                                    : [f.whitelistIframeDomains]),
                                f.whitelistIframeDomains.forEach(function (e) {
                                  var t = new U(r, e),
                                    n = G(f, t);
                                  $.receiveMessage(n, e);
                                }));
                          });
                      };
                      Ne.config = te;
                      var Ue = (R.Visitor = Ne),
                        Fe = function (i) {
                          if (N.isObject(i))
                            return Object.keys(i)
                              .filter(function (e) {
                                return '' !== i[e];
                              })
                              .reduce(function (e, t) {
                                var n = te.normalizeConfig(i[t]),
                                  r = N.normalizeBoolean(n);
                                return (e[t] = r), e;
                              }, Object.create(null));
                        },
                        Be = Oe.OptIn,
                        He = Oe.IabPlugin;
                      (Ue.getInstance = function (r, e) {
                        if (!r) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        r.indexOf('@') < 0 && (r += '@AdobeOrg');
                        var t = (function () {
                          var e = R.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var n = e[t];
                              if (n && 'Visitor' === n._c && n.marketingCloudOrgID === r) return n;
                            }
                        })();
                        if (t) return t;
                        var i,
                          n = Fe(e);
                        (i = n || {}),
                          (R.adobe.optIn =
                            R.adobe.optIn ||
                            (function () {
                              var e = N.pluck(i, [
                                  'doesOptInApply',
                                  'previousPermissions',
                                  'preOptInApprovals',
                                  'isOptInStorageEnabled',
                                  'optInStorageExpiry',
                                  'isIabContext',
                                ]),
                                t = i.optInCookieDomain || i.cookieDomain;
                              (t = (t = t || K()) === window.location.hostname ? '' : t),
                                (e.optInCookieDomain = t);
                              var n = new Be(e, { cookies: W });
                              if (e.isIabContext && e.doesOptInApply) {
                                var r = new He(window.__cmp);
                                n.registerPlugin(r);
                              }
                              return n;
                            })());
                        var a = r.split('').reverse().join(''),
                          o = new Ue(r, null, a);
                        N.isObject(n) && n.cookieDomain && (o.cookieDomain = n.cookieDomain),
                          R.s_c_il.splice(--R.s_c_in, 1);
                        var s = N.getIeVersion();
                        if ('number' == typeof s && s < 10)
                          return o._helpers.replaceMethodsWithFunction(o, function () {});
                        var c,
                          l =
                            (function () {
                              try {
                                return R.self !== R.parent;
                              } catch (r) {
                                return !0;
                              }
                            })() &&
                            ((c = o).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== c.cookieRead('TEST_AMCV_COOKIE') ||
                              (c._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            R.parent
                              ? new O(r, n, o, R.parent)
                              : new Ue(r, n, a);
                        return (o = null), l.init(), l;
                      }),
                        (function () {
                          function e () {
                            Ue.windowLoaded = !0;
                          }
                          R.addEventListener
                            ? R.addEventListener('load', e)
                            : R.attachEvent && R.attachEvent('onload', e),
                            (Ue.codeLoadEnd = new Date().getTime());
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
                { name: 'trackingServer', value: 'metrics.webex.com' },
                { name: 'trackingServerSecure', value: 'smetrics.webex.com' },
                { name: 'cookieDomain', value: '%cookieDomain%' },
                { name: 'secureCookie', value: 'true' },
              ],
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPf83a38d6d03b44f08b465a6d63b6bbe3/',
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
                      var n = e.name.toLowerCase(), r = Object.keys(t), i = 0;
                      i < r.length;
                      i++
                    ) {
                      var a = r[i];
                      if (a.toLowerCase() === n) return t[a];
                    }
                  };
                },
              },
              'core/src/lib/dataElements/javascriptVariable.js': {
                name: 'javascript-variable',
                displayName: 'JavaScript Variable',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('../helpers/getObjectProperty.js');
                  e.exports = function (e) {
                    return r(window, e.path);
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, n, r) {
                  'use strict';
                  var i,
                    a,
                    o,
                    s = n('@adobe/reactor-document'),
                    c = n('./helpers/decorateCode'),
                    l = n('./helpers/loadCodeSequentially'),
                    u = n('../../../node_modules/postscribe/dist/postscribe'),
                    d = r.getExtensionSettings(),
                    p =
                      ((i = function (e) {
                        u(s.body, e, {
                          beforeWriteToken: function (e) {
                            return (
                              d.cspNonce && 'script' === e.tagName && (e.attrs.nonce = d.cspNonce),
                              e
                            );
                          },
                          error: function (e) {
                            r.logger.error(e.msg);
                          },
                        });
                      }),
                      (a = []),
                      (o = function () {
                        if (s.body) for (; a.length; ) i(a.shift());
                        else setTimeout(o, 20);
                      }),
                      function (e) {
                        a.push(e), o();
                      }),
                    f = (function () {
                      if (s.currentScript) return s.currentScript.async;
                      for (var e = s.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src)) return n.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    const $___old_e82e89eaa15551f7 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_e82e89eaa15551f7)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_9417959baab2caf0.localStorage
                        ));
                      return function () {
                        var n = { settings: e, event: t },
                          r = n.settings.source;
                        if (r)
                          return n.settings.isExternal
                            ? l(r).then(function (e) {
                                e && p(c(n, e));
                              })
                            : void (f || 'loading' !== s.readyState
                                ? p(c(n, r))
                                : s.write
                                ? s.write(c(n, r))
                                : p(c(n, r)));
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_e82e89eaa15551f7)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_e82e89eaa15551f7
                        ));
                    }
                  };
                },
              },
              'core/src/lib/events/pageBottom.js': {
                name: 'page-bottom',
                displayName: 'Page Bottom',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    r.registerPageBottomTrigger(t);
                  };
                },
              },
              'core/src/lib/events/click.js': {
                name: 'click',
                displayName: 'Click',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-window'),
                    o = n('./helpers/createBubbly')(),
                    s = new (n('./helpers/weakMap'))(),
                    c = function (e) {
                      for (; e; ) {
                        var t = e.tagName;
                        if (t && 'a' === t.toLowerCase()) {
                          var n = e.getAttribute('href'),
                            r = e.getAttribute('target');
                          return n &&
                            (!r || '_self' === r || ('_top' === r && a.top === a) || r === a.name)
                            ? e
                            : void 0;
                        }
                        e = e.parentNode;
                      }
                    };
                  document.addEventListener('click', o.evaluateEvent, !0),
                    (e.exports = function (r, i) {
                      o.addListener(r, function (e) {
                        var t = e.nativeEvent;
                        if (!t.s_fe) {
                          if (r.anchorDelay && !s.has(t)) {
                            var n = c(t.target);
                            n &&
                              (t.preventDefault(),
                              setTimeout(function () {
                                a.location = n.href;
                              }, r.anchorDelay)),
                              s.set(t, !0);
                          }
                          i(e);
                        }
                      });
                    }),
                    (e.exports.__reset = o.__reset);
                },
              },
              'core/src/lib/conditions/pathAndQuerystring.js': {
                name: 'path-and-querystring',
                displayName: 'Path And Query String',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    i = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = r.location.pathname + r.location.search;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return i(n, t);
                    });
                  };
                },
              },
              'core/src/lib/conditions/subdomain.js': {
                name: 'subdomain',
                displayName: 'Subdomain',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    i = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = r.location.hostname;
                    return e.subdomains.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return i(n, t);
                    });
                  };
                },
              },
              'core/src/lib/conditions/protocol.js': {
                name: 'protocol',
                displayName: 'Protocol',
                script: function (e) {
                  'use strict';
                  e.exports = function (e) {
                    return document.location.protocol.toLowerCase() === e.protocol.toLowerCase();
                  };
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (e) {
                  'use strict';
                  var r = function (e) {
                      return 'number' == typeof e && isFinite(e);
                    },
                    i = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    },
                    a = function (e, t) {
                      return t && i(e) ? e.toLowerCase() : e;
                    },
                    o = function (e) {
                      return r(e) ? String(e) : e;
                    },
                    s = function (e) {
                      return i(e) ? Number(e) : e;
                    },
                    t = function (r) {
                      return function (e, t, n) {
                        return (e = o(e)), (t = o(t)), i(e) && i(t) && r(e, t, n);
                      };
                    },
                    n = function (n) {
                      return function (e, t) {
                        return (e = s(e)), (t = s(t)), r(e) && r(t) && n(e, t);
                      };
                    },
                    c = function (r) {
                      return function (e, t, n) {
                        return r(a(e, n), a(t, n));
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
              'core/src/lib/events/entersViewport.js': {
                name: 'enters-viewport',
                displayName: 'Enters Viewport',
                script: function (e, t, n) {
                  const $___old_f4103de187fbb867 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_f4103de187fbb867)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_addd751f0eb655f8.appVersion
                      ));
                    return function () {
                      'use strict';
                      var l = n('@adobe/reactor-document'),
                        u = n('@adobe/reactor-window'),
                        r = n('./helpers/weakMap'),
                        i = n('./helpers/debounce'),
                        a = n('./helpers/enableWeakMapDefaultValue'),
                        o = n('./helpers/matchesSelector'),
                        s = n('./helpers/matchesProperties'),
                        c = 3000,
                        d = 200,
                        p = { FIRST_ENTRY: 'firstEntry', EVERY_ENTRY: 'everyEntry' },
                        f = -1 !== u.navigator.appVersion.indexOf('MSIE 10'),
                        g = a(new r(), function () {
                          return { timeoutIds: [], completedListeners: [], inViewport: !1 };
                        }),
                        m = {},
                        h = function (e) {
                          var t;
                          try {
                            t = e.getBoundingClientRect();
                          } catch (c) {}
                          var n = l.documentElement,
                            r = l.body,
                            i = n.clientTop || r.clientTop || 0,
                            a = n.clientLeft || r.clientLeft || 0,
                            o = u.pageYOffset || n.scrollTop || r.scrollTop,
                            s = u.pageXOffset || n.scrollLeft || r.scrollLeft;
                          return { top: t.top + o - i, left: t.left + s - a };
                        },
                        v = function () {
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
                        b = function () {
                          return l.documentElement.scrollTop
                            ? l.documentElement.scrollTop
                            : l.body.scrollTop;
                        },
                        y = function (e, t, n) {
                          var r = h(e).top,
                            i = e.offsetHeight;
                          return l.body.contains(e) && !(r + i < n || n + t < r);
                        },
                        _ = function (r) {
                          var i = g.get(r);
                          i.inViewport ||
                            ((i.inViewport = !0),
                            Object.keys(m).forEach(function (e) {
                              o(r, e) &&
                                m[e].forEach(function (e) {
                                  if (
                                    s(r, e.settings.elementProperties) &&
                                    -1 === i.completedListeners.indexOf(e)
                                  ) {
                                    var t = function () {
                                      (e.settings.frequency || p.FIRST_ENTRY) === p.FIRST_ENTRY &&
                                        i.completedListeners.push(e),
                                        e.trigger({
                                          element: r,
                                          target: r,
                                          delay: e.settings.delay,
                                        });
                                    };
                                    if (e.settings.delay) {
                                      var n = setTimeout(function () {
                                        y(r, v(), b()) && t();
                                      }, e.settings.delay);
                                      i.timeoutIds.push(n);
                                    } else t();
                                  }
                                });
                            }));
                        },
                        C = function (e) {
                          var t = g.get(e);
                          (t.inViewport = !1),
                            t.timeoutIds.length &&
                              (t.timeoutIds.forEach(clearTimeout), (t.timeoutIds = []));
                        },
                        S = i(function () {
                          var e = Object.keys(m);
                          if (e.length)
                            for (
                              var t = l.querySelectorAll(e.join(',')), n = v(), r = b(), i = 0;
                              i < t.length;
                              i++
                            ) {
                              var a = t[i];
                              y(a, n, r) ? _(a) : C(a);
                            }
                        }, d),
                        k = function () {
                          S(),
                            setInterval(S, c),
                            u.addEventListener('resize', S),
                            u.addEventListener('scroll', S);
                        };
                      f
                        ? 'complete' === l.readyState
                          ? k()
                          : u.addEventListener('load', k)
                        : 'loading' !== l.readyState
                        ? k()
                        : l.addEventListener('DOMContentLoaded', k),
                        (e.exports = function (e, t) {
                          var n = m[e.elementSelector];
                          n || (n = m[e.elementSelector] = []),
                            n.push({ settings: e, trigger: t });
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_f4103de187fbb867)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_f4103de187fbb867
                      ));
                  }
                },
              },
              'core/src/lib/conditions/domain.js': {
                name: 'domain',
                displayName: 'Domain',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    i = /[|\\{}()[\]^$+*?.-]/g,
                    a = function (e) {
                      if ('string' != typeof e) throw new TypeError('Expected a string');
                      return e.replace(i, '\\$&');
                    };
                  e.exports = function (e) {
                    var t = r.location.hostname;
                    return e.domains.some(function (e) {
                      return t.match(new RegExp('(^|\\.)' + a(e) + '$', 'i'));
                    });
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    r.registerLibraryLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/helpers/getObjectProperty.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    for (var n = t.split('.'), r = e, i = 0, a = n.length; i < a; i++) {
                      if (null == r) return undefined;
                      r = r[n[i]];
                    }
                    return r;
                  };
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var i = 0,
                    a = function (e) {
                      return e.settings.isExternal;
                    },
                    o = function (e, t) {
                      return '<script>\n' + t + '\n</script>';
                    },
                    s = function (t, e) {
                      var n = '__runScript' + ++i;
                      return (
                        (_satellite[n] = function (e) {
                          e.call(t.event.element, t.event, t.event.target), delete _satellite[n];
                        }),
                        '<script>_satellite["' +
                          n +
                          '"](function(event, target) {\n' +
                          e +
                          '\n});</script>'
                      );
                    },
                    c = {
                      javascript: function (e, t) {
                        return e.settings.global ? o(e, t) : s(e, t);
                      },
                      html: function (e, t) {
                        return a(e) ? r.replaceTokens(t, e.event) : t;
                      },
                    };
                  e.exports = function (e, t) {
                    return c[e.settings.language](e, t);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-promise'),
                    i = n('./getSourceByUrl'),
                    a = r.resolve();
                  e.exports = function (t) {
                    var e = new r(function (n) {
                      var e = i(t);
                      r.all([e, a]).then(function (e) {
                        var t = e[0];
                        n(t);
                      });
                    });
                    return (a = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (n, r) {
                  !(function i (e, t) {
                    'object' == typeof r && 'object' == typeof n
                      ? (n.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof r
                      ? (r.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (n) {
                      function r (e) {
                        if (i[e]) return i[e].exports;
                        var t = (i[e] = { exports: {}, id: e, loaded: !1 });
                        return n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports;
                      }
                      var i = {};
                      return (r.m = n), (r.c = i), (r.p = ''), r(0);
                    })([
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var i = r(n(1));
                        e.exports = i['default'];
                      },
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function i (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function l () {}
                        function u () {
                          var e = c.shift();
                          if (e) {
                            var t = o.last(e);
                            t.afterDequeue(),
                              (e.stream = a.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function a (e, t, r) {
                          function i (e) {
                            (e = r.beforeWrite(e)), m.write(e), r.afterWrite(e);
                          }
                          ((m = new f['default'](e, r)).id = g++),
                            (m.name = r.name || m.id),
                            (d.streams[m.name] = m);
                          var n = e.ownerDocument,
                            a = {
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
                              return i(t.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return i(t.join('') + '\n');
                            },
                          });
                          var o = m.win.onerror || l;
                          return (
                            (m.win.onerror = function (e, t, n) {
                              r.error({ msg: e + ' - ' + t + ': ' + n }),
                                o.apply(m.win, [e, t, n]);
                            }),
                            m.write(t, function () {
                              p(n, a), (m.win.onerror = o), r.done(), (m = null), u();
                            }),
                            m
                          );
                        }
                        function d (e, t, n) {
                          if (o.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (c = []), (m = null), void (g = 0);
                          n = o.defaults(n, s);
                          var r = [
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
                              cancel: function i () {
                                r.stream ? r.stream.abort() : (r[1] = l);
                              },
                            }),
                            n.beforeEnqueue(r),
                            c.push(r),
                            m || u(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var p =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                          };
                        t['default'] = d;
                        var f = i(n(2)),
                          o = r(n(4)),
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
                          m = null;
                        p(d, { streams: {}, queue: c, WriteStream: f['default'] });
                      },
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function i (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function y (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function _ (e, t) {
                          var n = D + t,
                            r = e.getAttribute(n);
                          return I.existy(r) ? String(r) : r;
                        }
                        function C (e, t, n) {
                          var r = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            i = D + t;
                          I.existy(r) && '' !== r ? e.setAttribute(i, r) : e.removeAttribute(i);
                        }
                        t.__esModule = !0;
                        var S =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                            },
                          k = i(n(3)),
                          I = r(n(4)),
                          w = !1,
                          D = 'data-ps-',
                          A = 'ps-style',
                          T = 'ps-script',
                          a = (function () {
                            function r (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              y(this, r),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new k['default']('', { autoFix: n.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                C(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (r.prototype.write = function n () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  I.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (r.prototype._callFunction = function i (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (r.prototype._writeImpl = function a (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, n = void 0, r = void 0, i = [];
                                  (t = this.parser.readToken()) &&
                                  !(n = I.isScript(t)) &&
                                  !(r = I.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && i.push(t);
                                0 < i.length && this._writeStaticTokens(i),
                                  n && this._handleScriptToken(t),
                                  r && this._handleStyleToken(t);
                              }),
                              (r.prototype._writeStaticTokens = function o (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    w && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    w && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (r.prototype._buildChunk = function u (e) {
                                for (
                                  var t = this.actuals.length,
                                    n = [],
                                    r = [],
                                    i = [],
                                    a = e.length,
                                    o = 0;
                                  o < a;
                                  o++
                                ) {
                                  var s = e[o],
                                    c = s.toString();
                                  if ((n.push(c), s.attrs)) {
                                    if (!/^noscript$/i.test(s.tagName)) {
                                      var l = t++;
                                      r.push(c.replace(/(\/?>)/, ' ' + D + 'id=' + l + ' $1')),
                                        s.attrs.id !== T &&
                                          s.attrs.id !== A &&
                                          i.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  D +
                                                  'proxyof=' +
                                                  l +
                                                  (s.unary ? ' />' : '>')
                                          );
                                    }
                                  } else r.push(c), i.push('endTag' === s.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: n.join(''),
                                  actual: r.join(''),
                                  proxy: i.join(''),
                                };
                              }),
                              (r.prototype._walkChunk = function s () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  I.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !_(e, 'proxyof')) {
                                    n && C((this.actuals[_(e, 'id')] = e), 'id');
                                    var r = e.parentNode && _(e.parentNode, 'proxyof');
                                    r && this.actuals[r].appendChild(e);
                                  }
                                  t.unshift.apply(t, I.toArray(e.childNodes));
                                }
                              }),
                              (r.prototype._handleScriptToken = function c (e) {
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
                              (r.prototype._handleStyleToken = function l (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (r.prototype._writeStyleToken = function d (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, A),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (r.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  I.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  n
                                );
                              }),
                              (r.prototype._insertCursor = function p (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n);
                              }),
                              (r.prototype._onScriptStart = function f (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (r.prototype._onScriptDone = function g (e) {
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
                              (r.prototype._writeScriptToken = function m (e, t) {
                                var n = this._buildScript(e),
                                  r = this._shouldRelease(n),
                                  i = this.options.afterAsync;
                                e.src &&
                                  ((n.src = e.src),
                                  this._scriptLoadHandler(
                                    n,
                                    r
                                      ? i
                                      : function () {
                                          t(), i();
                                        }
                                  ));
                                try {
                                  this._insertCursor(n, T), (n.src && !r) || t();
                                } catch (a) {
                                  this.options.error(a), t();
                                }
                              }),
                              (r.prototype._buildScript = function h (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  I.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  e.content && (n.text = e.content),
                                  n
                                );
                              }),
                              (r.prototype._scriptLoadHandler = function v (t, n) {
                                function r () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function i () {
                                  r(), null != n && n(), (n = null);
                                }
                                function a (e) {
                                  r(), o(e), null != n && n(), (n = null);
                                }
                                function e (e, t) {
                                  var n = e['on' + t];
                                  null != n && (e['_on' + t] = n);
                                }
                                var o = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  S(t, {
                                    onload: function s () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          a({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
                                        }
                                      i();
                                    },
                                    onerror: function c () {
                                      if (t._onerror)
                                        try {
                                          t._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void a({
                                            msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                          });
                                        }
                                      a({ msg: 'remote script failed ' + t.src });
                                    },
                                    onreadystatechange: function l () {
                                      /^(loaded|complete)$/.test(t.readyState) && i();
                                    },
                                  });
                              }),
                              (r.prototype._shouldRelease = function b (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              r
                            );
                          })();
                        t['default'] = a;
                      },
                      function (n) {
                        !(function r (e, t) {
                          n.exports = t();
                        })(0, function () {
                          return (function (n) {
                            function r (e) {
                              if (i[e]) return i[e].exports;
                              var t = (i[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports
                              );
                            }
                            var i = {};
                            return (r.m = n), (r.c = i), (r.p = ''), r(0);
                          })([
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var i = r(n(1));
                              e.exports = i['default'];
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function i (e) {
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
                              var d = i(n(2)),
                                p = i(n(3)),
                                f = r(n(6)),
                                a = n(5),
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
                                      r =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      i =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    u(this, c), (this.stream = r);
                                    var a = !1,
                                      o = {};
                                    for (var s in d)
                                      d.hasOwnProperty(s) &&
                                        (i.autoFix && (o[s + 'Fix'] = !0),
                                        (a = a || o[s + 'Fix']));
                                    a
                                      ? ((this._readToken = (0, f['default'])(
                                          this,
                                          o,
                                          function () {
                                            return n._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, f['default'])(this, o, function () {
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
                                    (c.prototype._readTokenImpl = function r () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function i () {
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
                                    (c.prototype.readToken = function a () {
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
                                  e.hasOwnProperty(n) && (t[n] = (0, a.escapeQuotes)(e[n], null));
                                return t;
                              }),
                              (o.supports = d)))
                                d.hasOwnProperty(s) &&
                                  (o.browserHasFlaw = o.browserHasFlaw || (!d[s] && s));
                            },
                            function (e, t) {
                              'use strict';
                              var n = !(t.__esModule = !0),
                                r = !1,
                                i = window.document.createElement('div');
                              try {
                                var a = '<P><I></P></I>';
                                (i.innerHTML = a), (t.tagSoup = n = i.innerHTML !== a);
                              } catch (o) {
                                t.tagSoup = n = !1;
                              }
                              try {
                                (i.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = r = 2 === i.childNodes.length);
                              } catch (o) {
                                t.selfClose = r = !1;
                              }
                              (i = null), (t.tagSoup = n), (t.selfClose = r);
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new u.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function i (e) {
                                var t = e.indexOf('<');
                                return new u.CharsToken(0 <= t ? t : e.length);
                              }
                              function a (e) {
                                var o, s, c;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(d.startTag);
                                  if (t) {
                                    var n =
                                      ((o = {}),
                                      (s = {}),
                                      (c = t[2]),
                                      t[2].replace(d.attr, function (e, t, n, r, i, a) {
                                        n || r || i || a
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
                                var t = a(e);
                                if (t) {
                                  var n = e.slice(t.length);
                                  if (n.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var r = n.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (r)
                                      return new u.AtomicTagToken(
                                        t.tagName,
                                        r[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        r[1]
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
                              (t.comment = r),
                                (t.chars = i),
                                (t.startTag = a),
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
                                r = (t.Token = function r (e, t) {
                                  s(this, r), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                i =
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
                                    function a (e, t, n, r, i) {
                                      s(this, a),
                                        (this.type = e),
                                        (this.length = n),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = r),
                                        (this.booleanAttrs = i),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (a.formatTag = function o (e, t) {
                                        var n =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          r = '<' + e.tagName;
                                        for (var i in e.attrs)
                                          if (e.attrs.hasOwnProperty(i)) {
                                            r += ' ' + i;
                                            var a = e.attrs[i];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[i]) ||
                                              (r += '="' + (0, c.escapeQuotes)(a) + '"');
                                          }
                                        return (
                                          e.rest && (r += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (r += '/>') : (r += '>'),
                                          n !== undefined &&
                                            null !== n &&
                                            (r += n + '</' + e.tagName + '>'),
                                          r
                                        );
                                      }),
                                      a
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function o (e, t, n, r, i, a) {
                                  s(this, o),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = n),
                                    (this.booleanAttrs = r),
                                    (this.html5Unary = !1),
                                    (this.unary = i),
                                    (this.rest = a);
                                }
                                return (
                                  (o.prototype.toString = function e () {
                                    return i.formatTag(this);
                                  }),
                                  o
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function a (e, t, n, r, i) {
                                    s(this, a),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = n),
                                      (this.booleanAttrs = r),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = i);
                                  }
                                  return (
                                    (a.prototype.toString = function e () {
                                      return i.formatTag(this, this.content);
                                    }),
                                    a
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
                                    ((e.unary = r.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function u (e, t) {
                                var n = e.stream,
                                  r = l(t());
                                return (e.stream = n), r;
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
                              function n (n, r, t) {
                                function i () {
                                  var e = u(n, t);
                                  e && o[e.type] && o[e.type](e);
                                }
                                var a = p(),
                                  o = {
                                    startTag: function s (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && a.lastTagNameEq('TABLE')
                                        ? (n.prepend('<TBODY>'), i())
                                        : r.selfCloseFix && f.test(t) && a.containsTagName(t)
                                        ? a.lastTagNameEq(t)
                                          ? d(n, a)
                                          : (n.prepend('</' + e.tagName + '>'), i())
                                        : e.unary || a.push(e);
                                    },
                                    endTag: function c (e) {
                                      a.last()
                                        ? r.tagSoupFix && !a.lastTagNameEq(e.tagName)
                                          ? d(n, a)
                                          : a.pop()
                                        : r.tagSoupFix && (t(), i());
                                    },
                                  };
                                return function e () {
                                  return i(), l(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = n);
                              var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                f = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function r (e) {
                          return null != e;
                        }
                        function n (e) {
                          return 'function' == typeof e;
                        }
                        function i (e, t, n) {
                          var r = void 0,
                            i = (e && e.length) || 0;
                          for (r = 0; r < i; r++) t.call(n, e[r], r);
                        }
                        function a (e, t, n) {
                          for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r]);
                        }
                        function o (n, e) {
                          return (
                            (n = n || {}),
                            a(e, function (e, t) {
                              r(n[e]) || (n[e] = t);
                            }),
                            n
                          );
                        }
                        function s (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (r) {
                            var t =
                              ((n = []),
                              i(e, function (e) {
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
                        (t.existy = r),
                          (t.isFunction = n),
                          (t.each = i),
                          (t.eachKey = a),
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
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-load-script'),
                    i = n('@adobe/reactor-promise'),
                    a = {},
                    o = {},
                    s = function (e) {
                      return o[e] || (o[e] = r(e)), o[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    a[e] = t;
                  }),
                    (e.exports = function (t) {
                      return a[t]
                        ? i.resolve(a[t])
                        : new i(function (e) {
                            s(t).then(
                              function () {
                                e(a[t]);
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
                script: function (e, t, n) {
                  const $___old_ae74c9296f4cfefd = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_ae74c9296f4cfefd)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_addd751f0eb655f8.appVersion
                      ));
                    return function () {
                      'use strict';
                      var r = n('@adobe/reactor-window'),
                        i = n('@adobe/reactor-document'),
                        a = -1 !== r.navigator.appVersion.indexOf('MSIE 10'),
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
                            m(t, e);
                          });
                        },
                        f = function () {
                          return 'complete' === i.readyState
                            ? o
                            : 'interactive' === i.readyState
                            ? a
                              ? null
                              : s
                            : void 0;
                        },
                        g = function (e) {
                          return l.indexOf(e);
                        },
                        m = function (t, e) {
                          d[e].forEach(function (e) {
                            h(t, e);
                          }),
                            (d[e] = []);
                        },
                        h = function (e, t) {
                          var n = t.trigger,
                            r = t.syntheticEventFn;
                          n(r ? r(e) : null);
                        };
                      (r._satellite = r._satellite || {}),
                        (r._satellite.pageBottom = p.bind(null, c)),
                        i.addEventListener('DOMContentLoaded', p.bind(null, s), !0),
                        r.addEventListener('load', p.bind(null, o), !0),
                        r.setTimeout(function () {
                          var e = f();
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
                            d[s].push({ trigger: e, syntheticEventFn: u.bind(null, i) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[o].push({ trigger: e, syntheticEventFn: u.bind(null, r) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_ae74c9296f4cfefd)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_ae74c9296f4cfefd
                      ));
                  }
                },
              },
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./weakMap'),
                    f = n('./matchesProperties'),
                    g = n('./matchesSelector');
                  e.exports = function () {
                    var d = [],
                      p = new r(),
                      e = {
                        addListener: function (e, t) {
                          d.push({ settings: e, callback: t });
                        },
                        evaluateEvent: function (t, e) {
                          if (d.length && !p.has(t)) {
                            for (var n = t.target, r = !1; n; ) {
                              for (var i = !1, a = !1, o = 0; o < d.length; o++) {
                                var s = d[o],
                                  c = s.settings.elementSelector,
                                  l = s.settings.elementProperties;
                                if (
                                  (!1 !== s.settings.bubbleFireIfChildFired || !r) &&
                                  (n === t.target || !1 !== s.settings.bubbleFireIfParent) &&
                                  (n === t.target || c || (l && Object.keys(l).length)) &&
                                  (!c || g(n, c)) &&
                                  (!l || f(n, l))
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
                                      ((a = !0), s.settings.bubbleStop && (i = !0));
                                }
                              }
                              if (i) break;
                              a && (r = !0), (n = n.parentNode);
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
                  var r = n('@adobe/reactor-window').WeakMap;
                  if (void 0 === r) {
                    var i = Object.defineProperty,
                      a = Date.now() % 1000000000;
                    (r = function () {
                      this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + a++ + '__';
                    }).prototype = {
                      set: function (e, t) {
                        var n = e[this.name];
                        return (
                          n && n[0] === e
                            ? (n[1] = t)
                            : i(e, this.name, { value: [e, t], writable: !0 }),
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
                  e.exports = r;
                },
              },
              'core/src/lib/events/helpers/matchesProperties.js': {
                script: function (e, t, n) {
                  'use strict';
                  var i = n('./../../helpers/textMatch'),
                    a = function (e, t) {
                      return '@text' === t || 'innerText' === t
                        ? e.textContent || e.innerText
                        : t in e
                        ? e[t]
                        : e.getAttribute
                        ? e.getAttribute(t)
                        : void 0;
                    };
                  e.exports = function (r, e) {
                    return (
                      !e ||
                      e.every(function (e) {
                        var t = a(r, e.name),
                          n = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return i(t, n);
                      })
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/matchesSelector.js': {
                script: function (e, t, n, i) {
                  'use strict';
                  e.exports = function (e, t) {
                    var n = e.matches || e.msMatchesSelector;
                    if (n)
                      try {
                        return n.call(e, t);
                      } catch (r) {
                        return (
                          i.logger.warn(
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
              'core/src/lib/events/helpers/debounce.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (n, r, i) {
                    var a = null;
                    return function () {
                      var e = i || this,
                        t = arguments;
                      clearTimeout(a),
                        (a = setTimeout(function () {
                          n.apply(e, t);
                        }, r));
                    };
                  };
                },
              },
              'core/src/lib/events/helpers/enableWeakMapDefaultValue.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (t, n) {
                    var r = t.get;
                    return (
                      (t.get = function (e) {
                        return t.has(e) || t.set(e, n()), r.apply(this, arguments);
                      }),
                      t
                    );
                  };
                },
              },
            },
            settings: { cspNonce: '%nonce%' },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP0fe6b1b3170b414e92e8f7ad4f74f857/',
          },
        },
        company: { orgId: '5C0A123F5245AEEA0A490D45@AdobeOrg' },
        property: {
          name: 'Blog Webex',
          settings: {
            domains: ['webex.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RLc328431d57f94aa5a1c6b541a425cec5',
            name: 'Blog - Floodlight Tag',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: WebEx Blog\nURL of the webpage where the tag is expected to be placed: http://blog.webex.com\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 11/18/2015\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://4226791.fls.doubleclick.net/activityi;src=4226791;type=USCAa0;cat=webex00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://4226791.fls.doubleclick.net/activityi;src=4226791;type=USCAa0;cat=webex00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLb7728a08d79b455284c3e657f6bc8c89',
            name: 'Blog Content Download',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a',
                  elementProperties: [{ name: 'href', value: '.pdf?DG=', valueIsRegex: !0 }],
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [],
          },
          {
            id: 'RL89f2a7743b024bb698bcb281540e5eeb',
            name: 'Blog - Subscribe to Webinars Step 1',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/webinars/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    events: [{ name: 'event88' }],
                    pageName: 'Blog: Subscribe to Webinars : Step 1',
                  },
                },
              },
            ],
          },
          {
            id: 'RL6925e1a5f1784bcabb7c15bfcad853dc',
            name: 'Blog - Home Page Only',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/protocol.js',
                settings: { protocol: 'https:' },
              },
              {
                modulePath: 'core/src/lib/conditions/protocol.js',
                settings: { protocol: 'http:' },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'blog.', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^(\\/)$|^(/index.html)$', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { pageName: 'Blog : Home Page' } },
              },
            ],
          },
          {
            id: 'RL057b7abd45364dada5b4ce7cdb763e98',
            name: 'Blog - Category View',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/category/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: { pageName: 'Blog: Category : %Meta: Article Title%' },
                },
              },
            ],
          },
          {
            id: 'RL6453cdfa883046b19a0e8d63e7960251',
            name: 'Blog - Subscribe to Blog Confirmation',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/subscription-successful/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    events: [{ name: 'event87' }],
                    pageName: 'Blog: Subscribe to Blog : Confirmation',
                  },
                },
              },
            ],
          },
          {
            id: 'RL5a997b4a7d4945d490df3e7a021cd3cc',
            name: 'Blog - Subscribe to Blog Step 1',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/subscription-form/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    events: [{ name: 'event86' }],
                    pageName: 'Blog: Subscribe to Blog : Step 1',
                  },
                },
              },
            ],
          },
          {
            id: 'RLfa47d375b262497a88279757a07833af',
            name: 'Blog - Tealium container',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "var script = document.createElement('script'); \nscript.src = '//www.cisco.com/c/dam/cdc/t/ctm.js';\nscript.onload = function () { \n};\ndocument.head.appendChild(script); ",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL15fbde38a1a343ea98d34c557b9e8645',
            name: 'Blog - LinkedIn Tag',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript">\n  _bizo_data_partner_id = "7320";\n</script>\n<script type="text/javascript">\n(function() {\n  var s = document.getElementsByTagName("script")[0];\n  var b = document.createElement("script");\n  b.type = "text/javascript";\n  b.async = true;\n  b.src = (window.location.protocol === "https:" ? "https://sjs" : "http://js") + ".bizographics.com/insight.min.js";\n  s.parentNode.insertBefore(b, s);\n})();\n</script>\n<noscript>\n  <img height="1" width="1" alt="" style="display:none;" src="//www.bizographics.com/collect/?pid=7320&amp;fmt=gif">\n</noscript>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLd180ecb1c36c4aae9d0edd126359ca30',
            name: 'Migrated from DTM: Adobe Analytics - Send Beacon on every page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 100 },
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
            id: 'RL90e448cdb7064a5d9e3957a6e689eee6',
            name: 'Blog - Article View',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%Meta: Page Type%',
                  rightOperand: 'article',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    pageName: 'Blog: %Meta: Article Category% : %Meta: Article Title%',
                  },
                },
              },
            ],
          },
          {
            id: 'RL85b9531352d442ea86c8a3d0ae0b5688',
            name: 'Confirmation Subscribe',
            events: [
              {
                modulePath: 'core/src/lib/events/entersViewport.js',
                settings: {
                  elementSelector:
                    'div#gform_confirmation_message_1.gform_confirmation_message_1.gform_confirmation_message',
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['webex.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'blog', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    events: [{ name: 'event87' }],
                    pageName: 'Blog: Subscribe to Blog : Confirmation',
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RL0e17411fce0445ebb19e1184cb39230d',
            name: 'Blog - Subscribe to Webinars Confirmation',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/webinar-registration/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    events: [{ name: 'event89' }],
                    pageName: 'Blog: Subscribe to Webinars : Confirmation',
                  },
                },
              },
            ],
          },
          {
            id: 'RLefefa9a005ad4978acd9d9dbb733b2e7',
            name: 'Blog - Internal Search Results',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '\\?s=', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar58',
                        type: 'value',
                        value: '%Blog Internal Search% : Blog Search',
                      },
                    ],
                    props: [{ name: 'prop29', type: 'alias', value: 'eVar58' }],
                    events: [{ name: 'event90' }],
                    pageName: 'Blog : Search Results ',
                  },
                },
              },
            ],
          },
          {
            id: 'RL6df796ac7e1f4b9ab19bcd8a356270d3',
            name: 'test',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [],
          },
          {
            id: 'RL4c0e3fd3b0dc4c44bf14c8ce931a646c',
            name: 'PL - AEM prod - Amplitude - config',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 40 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'blog\\.webex\\.', valueIsRegex: !0 }] },
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
                    '(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")\n;r.type="text/javascript"\n;r.integrity="sha384-a+mq7tiLwde/00Oc7avFHLn/ttGfdAq1rtZc7u97SEzIiyYoT2IsOKWCkAThwdEu"\n;r.crossOrigin="anonymous";r.async=false\n;r.src="https://cdn.amplitude.com/libs/amplitude-5.3.0-min.gz.js"\n;r.onload=function(){if(!e.amplitude.runQueuedFunctions){\nconsole.log("[Amplitude] Error: could not load SDK")}}\n;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)\n;function s(e,t){e.prototype[t]=function(){\nthis._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}\nvar o=function(){this._q=[];return this}\n;var a=["add","append","clearAll","prepend","set","setOnce","unset"]\n;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]\n;return this}\n;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]\n;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c\n;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]\n;function v(e){function t(t){e[t]=function(){\ne._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}\nfor(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){\ne=(!e||e.length===0?"$default_instance":e).toLowerCase()\n;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}\n;e.amplitude=n})(window,document);\n\n\n//var amp_wx = new amplitude.getInstance();\n//var API_KEY;if(_satellite.buildInfo.environment==\'production\'){ API_KEY= "2123f0c8058771907cf1e29b8e20adfe";}else{API_KEY= "cb2e4925deb8c279b676a30aa3855b43"}\nvar patInternal = /^((?!blog.webex.).)*$/;\nif(patInternal.test(document.referrer)){ammFlag=true}else{ammFlag=false}\namplitude.getInstance().init("2123f0c8058771907cf1e29b8e20adfe",null, {\n    saveEvents: true,\n    includeUtm: true,\n\tincludeReferrer: ammFlag,\n    secureCookie:true,\n\tincludeGclid:true,\n    saveParamsReferrerOncePerSession:false,\n    apiEndpoint: \'api2.amplitude.com\',\n    trackingOptions: {\n      ip_address: false\n    }\n});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL48725cab7fee4d398532a10e0b0204cd',
            name: 'PL - AEM | pageviewed',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'blog\\.webex\\.com', valueIsRegex: !0 }] },
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
                    "var webex = webex || {};\nwebex.util = webex.util || {};\nwebex.util.data = (function () {\n  var gathered = {};\n\n  var utilURL = (function () {\n    var urlCleaned;\n\n    var updateURLParameter = function (url, paramKey, paramValue) {\n      var caseInsensitiveKey = new RegExp('^' + paramKey + '$', 'i');\n      var splits;\n      var parameters;\n      var urlFull = null;\n      var urlBase = null;\n      var urlAnchor = null;\n      var urlQueryString = null;\n      var urlParameters = null;\n      var key;\n      var i;\n\n      splits = url.split('?');\n      urlBase = splits[0];\n      urlQueryString = splits[1];\n\n      if (urlQueryString) {\n        splits = urlQueryString.split('#');\n        urlParameters = splits[0];\n        urlAnchor = splits[1];\n\n        parameters = urlParameters.split('&');\n\n        for (i = 0; i < parameters.length; i += 1) {\n          key = parameters[i].split('=')[0];\n          if (caseInsensitiveKey.test(key)) {\n            // Replace the value. Keep the original case of the key.\n            parameters[i] = key + '=' + paramValue;\n          }\n        }\n\n        urlParameters = parameters.join('&');\n      }\n\n      urlFull = urlBase;\n      urlFull += urlParameters ? '?' + urlParameters : '';\n      urlFull += urlAnchor ? '#' + urlAnchor : '';\n\n      return urlFull;\n    };\n\n    var parseQueryString = function (q) {\n      // Parameter keys are converted to all lower case.\n      qs = (function (a) {\n        var b = {};\n        var p;\n        if (a === '') return b;\n        for (var i = 0; i < a.length; ++i) {\n          p = a[i].split('=', 2);\n          if (p.length === 1) b[p[0]] = '';\n          // else b[p[0].toLowerCase()] = decodeURIComponent(p[1].replace(/\\+/g, ' '));\n          else b[p[0].toLowerCase()] = p[1];\n        }\n        return b;\n      })(q.split('&'));\n\n      return qs;\n    };\n\n    var getParameterFromPageUrl = function (param) {\n      var urlRaw = document.location.href;\n      var urlCleaned = clean(urlRaw);\n\n      return getParameterFromUrl(param, urlCleaned);\n    };\n\n    var getParameterFromUrl = function (param, url) {\n      var queryString = url.substr(url.indexOf('?') + 1);\n      var qs = parseQueryString(queryString);\n      // Parameter key must be all lower case for lookup.\n      var value = qs[param.toLowerCase()] || '';\n\n      return value;\n    };\n\n    var cleanEmailAddress = function (email, replacement) {\n      var splits;\n\n      email = decodeURIComponent(email);\n      splits = email.split('@');\n      // Email domain is not PII.\n      email = splits.length === 2 ? replacement + '@' + splits[1] : replacement;\n      email = encodeURIComponent(email);\n\n      return email;\n    };\n\n    var removePII = function (url, replacement) {\n      // Remove personally identifiable information (PII).\n      var cleaned = url;\n      var AD = cleanEmailAddress(getParameterFromUrl('AD', url) || '', replacement);\n      var email = cleanEmailAddress(getParameterFromUrl('email', url) || '', replacement);\n\n      // Remove email address.\n      cleaned = updateURLParameter(cleaned, 'email', email);\n      // Remove first name.\n      cleaned = updateURLParameter(cleaned, 'FN', replacement);\n      // Remove last name.\n      cleaned = updateURLParameter(cleaned, 'LN', replacement);\n      // Remove p_url.\n      cleaned = updateURLParameter(cleaned, 'p_url', replacement);\n      // Remove for post-meeting landing page.\n      cleaned = updateURLParameter(cleaned, 'AD', AD);\n      cleaned = updateURLParameter(cleaned, 'displayName', replacement);\n      cleaned = updateURLParameter(cleaned, 'NM', replacement);\n\n      return cleaned;\n    };\n\n    var clean = function (url) {\n      var redacted = 'REDACTED';\n      var cleaned = removePII(url, redacted);\n\n      return cleaned;\n    };\n\n    var init = (function () {\n      var urlRaw = document.location.href;\n      urlCleaned = clean(urlRaw);\n    })();\n\n    return {\n      parameter: getParameterFromPageUrl,\n      clean: clean,\n      urlCleaned: urlCleaned,\n    };\n  })();\n\n  // -------------------------------------------------------------------------\n  var utilDGID = (function () {\n    var data = {};\n    var invalid = 'invalid';\n    var functions = {\n      '1': 'Media',\n      '2': 'Social',\n      '3': 'Push Communication',\n      '4': 'In-Product Messaging',\n      '5': 'Video',\n      '6': 'Cisco',\n      '7': 'CCTG',\n      '8': 'Partners',\n    };\n    var channels = {\n      '1': 'Organic Social',\n      '2': 'Paid Social',\n      '3': 'Programmatic',\n      '4': 'SEM',\n      '5': 'Content Syndication ',\n      '6': 'Sponsored Content ',\n      '7': 'Email',\n      '8': 'Text/SMS Message',\n      '9': 'Push Notification',\n      '10': 'Web Product Messaging',\n      '11': 'Mobile App Messaging',\n      '12': 'Brightcove',\n      '13': 'Web',\n      '14': 'CCTG - Paid Social',\n      '15': 'CCTG - Organic Social',\n      '16': 'Out of Home',\n      '17': 'CCTG - Emerge',\n      '18': 'CCTG - Sales',\n      '19': 'CCTG - Email',\n      '20': 'Affiliate',\n    };\n    var placements = {\n      '1': 'Bing',\n      '2': 'Bing',\n      '3': 'Facebook',\n      '4': 'FBX',\n      '5': 'GDN',\n      '6': 'Gmail',\n      '7': 'Google',\n      '8': 'Google+',\n      '9': 'LinkedIn',\n      '10': 'Pandora',\n      '11': 'Spotify',\n      '12': 'Triplelift',\n      '13': 'Twitter',\n      '14': 'Web',\n      '15': 'Yahoo',\n      '16': 'Youtube',\n      '17': 'Baidu',\n      '18': 'Eloqua',\n      '19': 'MarketFirst',\n      '20': 'Salesperson',\n      '21': 'Mobile Device',\n      '22': 'Spark Post Session',\n      '23': 'W11 Post-Attendee',\n      '24': 'MC Post-Meeting',\n      '25': 'W11 Top Bar',\n      '26': 'W11 Sidebar',\n      '27': 'W11 Ticker',\n      '28': 'W11 Account Sidebar',\n      '29': 'W11 Account Ticker',\n      '30': 'Spark App',\n      '31': 'WebEx App',\n      '32': 'Landing Page',\n      '33': 'Hub',\n      '34': 'Cisco Expert Talks',\n      '35': 'Auto-Con Email',\n      '36': 'Spark Adoption Gallery',\n      '37': 'MC Curtain',\n      '38': 'MC Invite Widget',\n      '39': 'MC Scheduler',\n      '40': 'MC Top Bar',\n      '41': 'Snapchat',\n      '42': 'Airport - Public',\n      '43': 'Airport - Members Area',\n      '44': 'CCTG - Emerge Website',\n      '45': 'CCTG - TeamTV Website',\n      '46': 'CCTG - SparkVR Website',\n      '47': 'CCTG - Sales Email',\n      '48': 'CCTG - Monica Website',\n      '49': 'Cisco - Newsroom',\n      '50': 'Cisco - Email Send',\n      '51': 'Partner',\n      '52': 'In-Content CTA',\n      '53': 'Instagram',\n    };\n    var channelTactics = {\n      '1': 'Acquisition-Modeling',\n      '2': 'Article',\n      '3': 'Case Study',\n      '4': 'CRM',\n      '5': 'Digital Radio',\n      '6': 'Graphic',\n      '7': 'Image',\n      '8': 'Infographic\t',\n      '9': 'Mobile',\n      '10': 'Native',\n      '11': 'Remarketing',\n      '12': 'Search',\n      '13': 'Search Retargeting',\n      '14': 'Text',\n      '15': 'Video',\n      '16': 'Video',\n      '17': 'Visual Blog',\n      '18': 'Webcast',\n      '19': 'WebEx Blog',\n      '20': 'Whitepaper',\n      '21': 'Customer Research',\n      '22': 'Analyst Research',\n      '23': 'How-to',\n      '24': 'Usage Tips',\n      '25': 'Transaction',\n      '26': 'Product Offer',\n      '27': 'Promotion/Discount',\n      '28': 'Influencer Program',\n      '29': 'Contact Sales',\n      '30': 'RAD',\n      '31': 'Video Testimonial',\n      '32': 'Video How-To',\n      '33': 'Video Commercial',\n      '34': 'Video Advertisement',\n      '35': 'Video Live Demo',\n      '36': 'Hub Referral',\n      '37': 'Webinar',\n      '38': 'CCTG - Product Website',\n      '39': 'E-Book',\n      '40': 'Email - Content Syndication',\n      '41': 'Telemarketing',\n      '42': 'Checklist',\n      '43': 'Native Advertising',\n    };\n    var personas = {\n      '1': 'Undefined',\n      '2': 'Enablers',\n      '3': 'End Users',\n      '4': 'Sellers',\n      '5': 'Stable, Tenured',\n      '6': 'Tellers',\n      '7': 'Up and Comers',\n    };\n    var goals = {\n      '1': 'Awareness',\n      '2': 'Basic Account',\n      '3': 'Basic to Premium',\n      '4': 'Call Sales Team',\n      '5': 'Free Trial',\n      '6': 'Premium 100',\n      '7': 'Request a Demo',\n      '8': 'Upgrade',\n      '9': 'Download App',\n      '10': 'Nurture',\n      '11': 'Activation',\n      '12': 'Adoption',\n      '13': 'Cart abandon',\n      '14': 'Drip',\n      '15': 'Hotline / Chat',\n      '16': 'On-board',\n      '17': 'Recycle',\n      '18': 'Retention',\n      '19': 'Upsell',\n      '20': 'Waner',\n      '21': 'Live demo',\n      '22': 'Premium',\n      '23': 'MQL',\n    };\n    var products = {\n      '1': 'Cisco Spark',\n      '2': 'Collaboration Meeting Rooms (CMR)',\n      '3': 'Collaboration Solutions',\n      '4': 'WebEx Event Center',\n      '5': 'WebEx Meeting Center',\n      '6': 'WebEx Meetings',\n      '7': 'WebEx Training Center',\n      '8': 'WebEx Support Center',\n      '9': 'Project Storm',\n      '10': 'MC+Spark',\n      '11': 'Spark Board',\n    };\n\n    var getCountry = function (value) {\n      var country = invalid;\n\n      // Format values properly.\n      if (/^[a-z]{2}$/i.test(value)) {\n        country = value.toUpperCase();\n      } else if (/^Global$/i.test(value)) {\n        country = 'Global';\n      }\n\n      return country;\n    };\n\n    var lookup = function (key, values) {\n      var cleanedKey = cleanKey(key);\n      var value = Object.prototype.hasOwnProperty.call(values, cleanedKey) ? values[cleanedKey] : invalid;\n\n      return value;\n    };\n\n    var trimLeadingZeroes = function (s) {\n      return s.replace(/^0+/, '');\n    };\n\n    var cleanKey = function (s) {\n      // A key must have 1-4 digits. We will trim any leading zeroes for subsequent lookup.\n      var validKey = /^\\d{1,4}$/;\n      var cleaned = s;\n\n      if (validKey.test(cleaned)) {\n        cleaned = trimLeadingZeroes(cleaned);\n      } else {\n        cleaned = invalid;\n      }\n\n      return cleaned;\n    };\n\n    var validateDgid = function (dgid) {\n      // DGID key should have 8 positions delimited by \"-\".\n      var isValid = false;\n\n      if (typeof dgid === 'string') {\n        isValid = dgid.split('-').length === 8;\n      }\n\n      return isValid;\n    };\n\n    var decodeDgid = function (dgid) {\n      var isValidDgid = validateDgid(dgid);\n      var keys;\n      var decoded = {};\n      var dgFunction = invalid;\n      var dgChannel = invalid;\n      var dgPlacement = invalid;\n      var dgCountry = invalid;\n      var dgChannelTactic = invalid;\n      var dgPersona = invalid;\n      var dgGoal = invalid;\n      var dgProduct = invalid;\n\n      if (isValidDgid) {\n        try {\n          keys = dgid.split('-');\n          dgFunction = lookup(keys[0], functions);\n          dgChannel = lookup(keys[1], channels);\n          dgPlacement = lookup(keys[2], placements);\n          dgCountry = getCountry(keys[3]);\n          dgChannelTactic = lookup(keys[4], channelTactics);\n          dgPersona = lookup(keys[5], personas);\n          dgGoal = lookup(keys[6], goals);\n          dgProduct = lookup(keys[7], products);\n        } catch (e) {\n          // Do nothing.\n        }\n      }\n\n      decoded = {\n        dg_function: dgFunction,\n        dg_channel: dgChannel,\n        dg_placement: dgPlacement,\n        dg_country: dgCountry,\n        dg_channel_tactic: dgChannelTactic,\n        dg_persona: dgPersona,\n        dg_goal: dgGoal,\n        dg_product: dgProduct,\n      };\n\n      return decoded;\n    };\n\n    var getDGID = function () {\n      // In order of preference, check DG, then DGID parameters.\n      var dgid = {};\n      dgid.key = utilURL.parameter('DG');\n      if (dgid.key === '') {\n        dgid.key = utilURL.parameter('DGID');\n      }\n      dgid.decoded = decodeDgid(dgid.key);\n\n      return dgid;\n    };\n\n    var init = (function () {\n      data = getDGID();\n    })();\n\n    return {\n      data: data,\n    };\n  })();\n  // -------------------------------------------------------------------------\n  var utilUTM = (function () {\n    var urlParameters;\n    var hasUrlParameters;\n\n    var getUrlParameters = function () {\n      // UTM Source: PaidSearch, PaidSocial, Programmatic, OrganicSocial etc.\n      // UTM Channel: GoogleAds / FacebookAds / TwitterAds etc\n      // UTM Campaign: Campaign name\n      // UTM Content: Ad Set / Ad Group\n      // UTM Medium: Ad name\n      parameters = {\n        campaign: utilURL.parameter('utm_campaign'),\n        channel: utilURL.parameter('utm_channel'),\n        content: utilURL.parameter('utm_content'),\n        medium: utilURL.parameter('utm_medium'),\n        source: utilURL.parameter('utm_source'),\n      };\n\n      return parameters;\n    };\n\n    var init = (function () {\n      urlParameters = getUrlParameters();\n\n      hasUrlParameters =\n        parameters.campaign + parameters.channel + parameters.content + parameters.medium + parameters.source !== '';\n    })();\n\n    return {\n      parameters: urlParameters,\n      hasParameters: hasUrlParameters,\n    };\n  })();\n  // -------------------------------------------------------------------------\n  // post-meeting landing page\n  var pmlp = (function () {\n    var data = {};\n\n    var getUserType = function () {\n      var url = utilURL.urlCleaned;\n      var userType = '';\n      if (/\\/post-meeting\\/host\\//.test(url)) {\n        userType = 'host';\n      } else if (/\\/post-meeting\\/attendee\\//.test(url)) {\n        userType = 'attendee';\n      } else if (/\\/post-meeting\\/index\\.html/.test(url)) {\n        userType = utilURL.parameter('userType').toLowerCase() || '';\n      }\n\n      return userType;\n    };\n\n    var getData = function () {\n      var data = {\n        billingMode: utilURL.parameter('billingMode'),\n        userType: getUserType(),\n      };\n\n      return data;\n    };\n\n    var isPmlp;\n\n    var init = (function () {\n      data = getData();\n\n      isPmlp = data.userType !== '';\n    })();\n\n    return {\n      data: data,\n      isPmlp: isPmlp,\n    };\n  })();\n  // -------------------------------------------------------------------------\n\n  var getReferrerURL = function () {\n    var url = document.referrer || '';\n\n    url = utilURL.clean(url);\n\n    return url;\n  };\n\n  var getReferrerDomain = function () {\n    var domain;\n    var url = document.referrer;\n\n    var matches = url.match(/:\\/\\/(.[^/]+)/);\n\n    if (matches !== null && matches[1] !== null) {\n      domain = matches[1];\n    } else {\n      domain = '';\n    }\n\n    return domain;\n  };\n\n  var getReferrerChannel = function () {\n    var domain = getReferrerDomain();\n    var patternDirect = /^$/;\n    var patternInternal = /(www|help)\\.webex\\.com/i;\n    // Use none to bucket exclusions with all lower environment, webex.co.*, and non- blog. and help. webex.com traffic.\n    var patternNone = /(wbxapp-(auth|pub)-|origin-webex-[a-z]+.cisco\\.com|\\.webex\\.co\\.|(?!blog|help)\\.webex\\.com)/i;\n    var patternSearch = /\\.(aol|ask|askjeeves|baidu|bing|chacha|duckduckgo|excite|google|lycos|msxml|searchencrypt|yahoo|yandex)\\./i;\n    var patternSocial = /\\.(facebook|linkedin)\\.com/i;\n    var channels = {\n      direct: 'direct',\n      internal: 'internal',\n      none: 'none',\n      other: 'other',\n      search: 'search engine',\n      social: 'social',\n    };\n    var channel = channels.other;\n\n    if (patternDirect.test(domain)) {\n      channel = channels.direct;\n    } else if (patternInternal.test(domain)) {\n      channel = channels.internal;\n    } else if (patternNone.test(domain)) {\n      channel = channels.none;\n    } else if (patternSearch.test(domain)) {\n      channel = channels.search;\n    } else if (patternSocial.test(domain)) {\n      channel = channels.social;\n    }\n\n    if (/^(search engine|social)$/i.test(channel)) {\n      channel = isPaidTraffic() ? channel + ' - paid' : channel + ' - organic';\n    }\n\n    return channel;\n  };\n\n  var getPsearchID = function () {\n    var param = decodeURIComponent(utilURL.parameter('psearchID'));\n\n    return param;\n  };\n\n  var getTrackID = function () {\n    var trackID = utilURL.parameter('TrackID');\n\n    return trackID;\n  };\n\n  var isPaidTraffic = function () {\n    // Check if any of the following values exist.\n    var isPaid = utilDGID.data.key !== '' || utilUTM.hasParameters;\n\n    return isPaid;\n  };\n\n  var getTargeterValue = function (property) {\n    var value;\n    try {\n      value = JSON.parse(localStorage.getItem('targeter')).for_analysis[property];\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getPageName = function () {\n    var name;\n\n    var isAttachment = function () {\n      var value;\n      try {\n        value = /^attachment$/i.test(wbxLayer.pageType);\n      } catch (e) {\n        value = false;\n      }\n      return value;\n    };\n\n    var isFile = function (url) {\n      var value = /^file:\\/\\//i.test(url);\n      return value;\n    };\n\n    var isPageNotFound = function () {\n      value = false;\n      var translationPageNotFound = [\n        /^Nothing found for /i, // en\n      ];\n      var title;\n\n      try {\n        title = document.querySelector('title').innerHTML.toLowerCase();\n      } catch (e) {\n        title = '';\n      }\n\n      if (title !== '') {\n        for (var i = 0; i < translationPageNotFound.length; i++) {\n          value = translationPageNotFound[i].test(title);\n          if (value) break;\n        }\n      }\n\n      return value;\n    };\n\n    var isTag = function () {\n      var value;\n      try {\n        value = /^tag-post$/i.test(wbxLayer.pageSubType);\n      } catch (e) {\n        value = false;\n      }\n      return value;\n    };\n    var url = document.URL;\n\n    name = isPageNotFound()\n      ? 'page-not-found'\n      : isTag()\n      ? 'tag'\n      : isAttachment()\n      ? 'attachment'\n      : isFile(url)\n      ? 'file'\n      : _satellite.getVar('p_n').replace(':', '');\n\n    return name;\n  };\n\n  var getPageCategory = function () {\n    return '';\n  };\n\n  var gatherData = function () {\n    var dgid = utilDGID.data;\n    var utm = utilUTM.parameters;\n    var isPaid = isPaidTraffic();\n    var cleanedURL = utilURL.urlCleaned;\n    var data = {\n      pageName: getPageName(),\n      pageCategory: getPageCategory(),\n      destinationURL: cleanedURL,\n      referringURL: getReferrerURL(),\n      referringDomain: getReferrerDomain(),\n      referringChannel: getReferrerChannel(),\n      utm: utm,\n      DGID: dgid,\n      trackID: getTrackID(),\n      psearchID: getPsearchID(),\n      isPaidTraffic: isPaid,\n    };\n\n    var mainUrl = cleanedURL\n      .replace(/[\\?|#].+/, '')\n      .replace(/[?]/g, '')\n      .replace(/^http(s?):\\/\\//i, '');\n    var fullUrl = cleanedURL.replace(/^http(s?):\\/\\//i, '');\n    var userLang = _satellite.cookie.get('user_lang') || '';\n    var userLocale;\n    if (cleanedURL.indexOf('/www.webex.co.in') > 0) userLocale = 'in';\n    else if (cleanedURL.indexOf('/www.webex.com.cn') > 0) userLocale = 'cn';\n    else if (cleanedURL.indexOf('/www.webex.com.br') > 0) userLocale = 'br';\n    else if (cleanedURL.indexOf('/www.webex.com.mx/') > 0) userLocale = 'mx';\n    else if (cleanedURL.indexOf('/www.webex.co.kr/') > 0) userLocale = 'kr';\n    else if (cleanedURL.indexOf('/www.webex.es/') > 0) userLocale = 'es';\n    else userLocale = _satellite.cookie.get('user_locale') || '';\n\n    userLang = userLang.toLowerCase();\n    userLocale = userLocale.toLowerCase();\n\n    // Add to the data object.\n    data.pageViewedEventProperties = {\n      page_name: data.pageName,\n      page_category: data.pageCategory,\n      custom_referrer_url: data.referringURL,\n      main_page_url: mainUrl,\n      page_url: fullUrl,\n      domain: location.host,\n      locale: userLocale,\n      lang: userLang,\n      dg_param: data.DGID.key,\n      trackID: data.trackID,\n      psearchID: data.psearchID,\n    };\n\n    data.targeter = {\n      domain: getTargeterValue('domain'),\n      company_name: getTargeterValue('company_name'),\n      company_size: getTargeterValue('company_size'),\n      industry_category: getTargeterValue('industry_category'),\n      industry_sub_category: getTargeterValue('industry_sub_category'),\n      segment: getTargeterValue('segment'),\n    };\n\n    if (pmlp.isPmlp) {\n      data.pmlp = pmlp.data;\n      data.pageViewedEventProperties.pmlp_user_type = data.pmlp.userType;\n      data.pageViewedEventProperties.pmlp_billing_mode = data.pmlp.billingMode;\n    }\n\n    return data;\n  };\n\n  var init = (function () {\n    gathered = gatherData();\n  })();\n\n  return {\n    gathered: gathered,\n    utilURL: utilURL,\n  };\n})();\n",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "var utilDataLayer = (function (data) {\n  var digitalData = {};\n\n  var getProperty = function (p) {\n    var value;\n\n    try {\n      value = data[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var hasUtm = function (utm) {\n    var hasUtm = utm.campaign + utm.channel + utm.content + utm.medium + utm.source !== '';\n\n    return hasUtm;\n  };\n\n  var setDigitalData = function () {\n    var pageName = getProperty('pageName');\n    var pageCategory = getProperty('pageCategory');\n    var TrackID = getProperty('trackID');\n    var psearchID = getProperty('psearchID');\n    var destinationURL = getProperty('destinationURL');\n    var referringURL = getProperty('referringURL');\n    var referringDomain = getProperty('referringDomain');\n    var referringChannel = getProperty('referringChannel');\n    var demandGeneration = getProperty('DGID');\n    var utm = getProperty('utm');\n    var targeter = getProperty('targeter');\n\n    digitalData = {\n      page: {\n        pageInfo: {\n          pageName: pageName,\n          pageCategory: pageCategory,\n          destinationURL: destinationURL,\n          referringURL: referringURL,\n          referringDomain: referringDomain,\n          referringChannel: referringChannel,\n        },\n      },\n      user: [\n        {\n          segment: {},\n        },\n      ],\n    };\n    var userProperties = digitalData.user[0].segment;\n\n    // Only add user properties that exist.\n    if (demandGeneration.key !== '') userProperties.demandGeneration = demandGeneration;\n    if (hasUtm(utm)) userProperties.utm = utm;\n    if (TrackID !== '') userProperties.TrackID = TrackID;\n    if (psearchID !== '') userProperties.psearchID = psearchID;\n    if (targeter !== '') userProperties.targeter = targeter;\n  };\n\n  var init = (function () {\n    setDigitalData();\n  })();\n\n  return {\n    digitalData: digitalData,\n  };\n})(webex.util.data.gathered);\n\nvar digitalData = utilDataLayer.digitalData;\n",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function (data) {\n  var getDGKey = function () {\n    var value;\n\n    try {\n      value = data.DGID.key || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getDGProperty = function (p) {\n    var value;\n\n    try {\n      value = data.DGID.decoded[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getPmlpProperty = function (p) {\n    var value;\n\n    try {\n      value = data.pmlp[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getTargeterProperty = function (p) {\n    var value;\n\n    try {\n      value = data.targeter[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getUtmProperty = function (p) {\n    var value;\n\n    try {\n      value = data.utm[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var getProperty = function (p) {\n    var value;\n\n    try {\n      value = data[p] || '';\n    } catch (e) {\n      value = '';\n    }\n\n    return value;\n  };\n\n  var setTargeterProperty = function (property, userProperties) {\n    // If 'property' exists in targeter, add it to 'userProperties'.\n    var value = getTargeterProperty(property);\n\n    if (value !== '') userProperties['targeter.' + property] = value;\n\n    return userProperties;\n  };\n\n  var send = function () {\n    var userProperties = {};\n    var eventName;\n    var prefix = 'wx_blog_pageviewed_';\n    var pageViewEventProperties = getProperty('pageViewedEventProperties');\n    var pageName = getProperty('pageName');\n    var pageCategory = getProperty('pageCategory');\n    var TrackID = getProperty('trackID');\n    var psearchID = getProperty('psearchID');\n    var referringURL = getProperty('referringURL');\n    var referringDomain = getProperty('referringDomain');\n    var referringChannel = getProperty('referringChannel');\n    var utmChannel = getUtmProperty('channel');\n    var pmlpBillingMode = getPmlpProperty('billingMode');\n    var pmlpUserType = getPmlpProperty('userType');\n    // Various pages used in funnels already have a page viewed event.\n    // We will not send a page view event for these.\n    var urlsWithOtherPageViewEvents = /www\\.webex\\.com\\/pricing\\/buy\\//i;\n    var sendPsearchId = psearchID !== '';\n    var sendReferringChannel = referringChannel !== '' && referringChannel !== 'none';\n    var sendUtmChannel = utmChannel !== '';\n    var identifyAmp;\n\n    // Make sure Amplitude is loaded. Exclude lightboxes.\n    if (typeof amplitude !== 'undefined' && document.URL.indexOf('/lbx/') < 0) {\n      identifyAmp = new amplitude.Identify();\n\n      // If not a PMLP, clear PMLP user properties.\n      if (pmlpBillingMode === '') {\n        identifyAmp.unset('pmlp_billing_mode');\n      } else {\n        userProperties.pmlp_billing_mode = pmlpBillingMode;\n      }\n      if (pmlpUserType === '') {\n        identifyAmp.unset('pmlp_user_type');\n      } else {\n        userProperties.pmlp_user_type = pmlpUserType;\n      }\n      // Only add user properties that exist.\n      if (getProperty('isPaidTraffic')) {\n        userProperties.DGID = getDGKey();\n        userProperties.dg_function = getDGProperty('dg_function');\n        userProperties.dg_channel = getDGProperty('dg_channel');\n        userProperties.dg_placement = getDGProperty('dg_placement');\n        userProperties.dg_country = getDGProperty('dg_country');\n        userProperties.dg_channel_tactic = getDGProperty('dg_channel_tactic');\n        userProperties.dg_persona = getDGProperty('dg_persona');\n        userProperties.dg_goal = getDGProperty('dg_goal');\n        userProperties.dg_product = getDGProperty('dg_product');\n      }\n      if (TrackID !== '') userProperties.TrackID = TrackID;\n      // Amplitude's referring URL can include PII. Ours does not. Use ours.\n      if (referringURL !== '') userProperties.referrer = referringURL;\n      // Use Amplitude's referring domain.\n      // if (referringDomain !== '') userProperties.referring_domain = referringDomain;\n\n      if (sendPsearchId || sendReferringChannel || sendUtmChannel) {\n        // Set the initial and last-touch values for each of these user properties.\n        if (sendPsearchId) {\n          identifyAmp.setOnce('initial_psearchID', psearchID);\n          userProperties.psearchID = psearchID;\n        }\n        if (sendReferringChannel) {\n          identifyAmp.setOnce('initial_referring_channel', referringChannel);\n          userProperties.referring_channel = referringChannel;\n        }\n        if (sendUtmChannel) {\n          identifyAmp.setOnce('initial_utm_channel', utmChannel);\n          userProperties.utm_channel = utmChannel;\n        }\n        // Make a single, combined .identify() call.\n        amplitude.getInstance().identify(identifyAmp);\n        // debugger;\n\n        userProperties = setTargeterProperty('domain', userProperties);\n        userProperties = setTargeterProperty('company_name', userProperties);\n        userProperties = setTargeterProperty('company_size', userProperties);\n        userProperties = setTargeterProperty('industry_category', userProperties);\n        userProperties = setTargeterProperty('industry_sub_category', userProperties);\n        userProperties = setTargeterProperty('segment', userProperties);\n      }\n\n      // Send the user properties to Amplitude.\n      amplitude.getInstance().setUserProperties(userProperties);\n\n      if (!urlsWithOtherPageViewEvents.test(document.URL)) {\n        // Send a page viewed event.\n        // No need to exclude cart.webex.com pages here. The domains condition for this rule already excludes them.\n        eventName = pageCategory !== '' ? prefix + pageCategory : prefix + pageName;\n        amplitude.getInstance().logEvent(eventName, pageViewEventProperties);\n      }\n    }\n  };\n\n  var init = (function () {\n    send();\n  })();\n})(webex.util.data.gathered);\n",
                  language: 'javascript',
                },
              },
            ],
          },
        ],
      });
    var $___var_6081e52df4f53794 = (function () {
      const $___old_29647809a0f61084 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_29647809a0f61084)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_addd751f0eb655f8.userAgent
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
          function r () {}
          function i (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function a (e) {
            if (!(this instanceof a)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              p(e, this);
          }
          function o (r, i) {
            for (; 3 === r._state; ) r = r._value;
            0 !== r._state
              ? ((r._handled = !0),
                a._immediateFn(function () {
                  var e = 1 === r._state ? i.onFulfilled : i.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(r._value);
                    } catch (n) {
                      return void c(i.promise, n);
                    }
                    s(i.promise, t);
                  } else (1 === r._state ? s : c)(i.promise, r._value);
                }))
              : r._deferreds.push(i);
          }
          function s (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof a) return (e._state = 3), (e._value = t), void u(e);
                if ('function' == typeof n) return void p(i(n, t), e);
              }
              (e._state = 1), (e._value = t), u(e);
            } catch (r) {
              c(e, r);
            }
          }
          function c (e, t) {
            (e._state = 2), (e._value = t), u(e);
          }
          function u (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              a._immediateFn(function () {
                e._handled || a._unhandledRejectionFn(e._value);
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
            } catch (r) {
              if (n) return;
              (n = !0), c(t, r);
            }
          }
          function f (e) {
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
              var r = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  r[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
              );
            } catch (i) {
              return !1;
            }
          }
          function m (e, t) {
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
              v = function (t, e) {
                var n = function () {
                    return 'true' === t.getItem(h);
                  },
                  r = function (e) {
                    t.setItem(h, e);
                  },
                  i = [],
                  a = function (e) {
                    i.push(e);
                  };
                return (
                  (e.outputEnabled = n()),
                  {
                    onDebugChanged: a,
                    getDebugEnabled: n,
                    setDebugEnabled: function (t) {
                      n() !== t &&
                        (r(t),
                        (e.outputEnabled = t),
                        i.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              b = 'Module did not export a function.',
              y = function (a, o) {
                return function (e, t, n) {
                  n = n || [];
                  var r = a.getModuleExports(e.modulePath);
                  if ('function' != typeof r) throw new Error(b);
                  var i = o(e.settings || {}, t);
                  return r.bind(null, i).apply(null, n);
                };
              },
              _ = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              C = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              S = '\uD83D\uDE80',
              k =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : S,
              I = !1,
              w = function (e) {
                if (I && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(k),
                    e !== C.DEBUG || window.console[e] || (e = C.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              D = w.bind(null, C.LOG),
              A = w.bind(null, C.INFO),
              T = w.bind(null, C.DEBUG),
              P = w.bind(null, C.WARN),
              E = w.bind(null, C.ERROR),
              x = {
                log: D,
                info: A,
                debug: T,
                warn: P,
                error: E,
                get outputEnabled () {
                  return I;
                },
                set outputEnabled (e) {
                  I = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: D.bind(null, t),
                    info: A.bind(null, t),
                    debug: T.bind(null, t),
                    warn: P.bind(null, t),
                    error: E.bind(null, t),
                  };
                },
              },
              O = e(function (r) {
                !(function (e) {
                  if (((r.exports = e()), !!0)) {
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
                      for (var r in n) t[r] = n[r];
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
                          var r = JSON.stringify(t);
                          /^[\{\[]/.test(r) && (t = r);
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
                        var i = '';
                        for (var a in n)
                          n[a] &&
                            ((i += '; ' + a), !0 !== n[a] && (i += '=' + n[a].split(';')[0]));
                        return (document.cookie = e + '=' + t + i);
                      }
                    }
                    function t (e, t) {
                      const $___old_536045aed19ff09e = {}.constructor.getOwnPropertyDescriptor(
                        Document.prototype,
                        'cookie'
                      );
                      try {
                        if ($___old_536045aed19ff09e)
                          ({}.constructor.defineProperty(
                            Document.prototype,
                            'cookie',
                            $___stub_cdc5a54489618108.cookie
                          ));
                        return function () {
                          if ('undefined' != typeof document) {
                            for (
                              var n = {},
                                r = document.cookie ? document.cookie.split('; ') : [],
                                i = 0;
                              i < r.length;
                              i++
                            ) {
                              var a = r[i].split('='),
                                o = a.slice(1).join('=');
                              t || '"' !== o.charAt(0) || (o = o.slice(1, -1));
                              try {
                                var s = u(a[0]);
                                if (((o = (l.read || l)(o, s) || u(o)), t))
                                  try {
                                    o = JSON.parse(o);
                                  } catch (c) {}
                                if (((n[s] = o), e === s)) break;
                              } catch (c) {}
                            }
                            return e ? n[e] : n;
                          }
                        }.apply(this, arguments);
                      } finally {
                        if ($___old_536045aed19ff09e)
                          ({}.constructor.defineProperty(
                            Document.prototype,
                            'cookie',
                            $___old_536045aed19ff09e
                          ));
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
              M = { get: O.get, set: O.set, remove: O.remove },
              L = window,
              V = 'com.adobe.reactor.',
              R = function (r, e) {
                var i = V + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_f41f854098f25b10 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_f41f854098f25b10)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_9417959baab2caf0.localStorage
                        ));
                      return function () {
                        try {
                          return L[r].getItem(i + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_f41f854098f25b10)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_f41f854098f25b10
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_7b81d8e7c5dcd60b = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_7b81d8e7c5dcd60b)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_9417959baab2caf0.localStorage
                        ));
                      return function () {
                        try {
                          return L[r].setItem(i + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_7b81d8e7c5dcd60b)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_7b81d8e7c5dcd60b
                        ));
                    }
                  },
                };
              },
              j = '_sdsat_',
              N = 'dataElements.',
              U = 'dataElementCookiesMigrated',
              F = R('localStorage'),
              B = R('sessionStorage', N),
              H = R('localStorage', N),
              G = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              q = {},
              W = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              K = function (e, t, n) {
                var r;
                switch (t) {
                  case G.PAGEVIEW:
                    return void (q[e] = n);
                  case G.SESSION:
                    return void ((r = W(n)) && B.setItem(e, r));
                  case G.VISITOR:
                    return void ((r = W(n)) && H.setItem(e, r));
                }
              },
              Y = function (e, t) {
                var n = M.get(j + e);
                n !== undefined && K(e, t, n);
              },
              Q = {
                setValue: K,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case G.PAGEVIEW:
                      return q.hasOwnProperty(e) ? q[e] : null;
                    case G.SESSION:
                      return null === (n = B.getItem(e)) ? n : JSON.parse(n);
                    case G.VISITOR:
                      return null === (n = H.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  F.getItem(U) ||
                    (Object.keys(t).forEach(function (e) {
                      Y(e, t[e].storageDuration);
                    }),
                    F.setItem(U, !0));
                },
              },
              $ = function (e, t, n, r) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  n +
                  (r ? '\n' + r : '')
                );
              },
              z = function (e) {
                return e !== undefined && null !== e;
              },
              J = function (s, c, l, u) {
                return function (e, t) {
                  var n = c(e);
                  if (!n) return u ? '' : null;
                  var r,
                    i = n.storageDuration;
                  try {
                    r = s.getModuleExports(n.modulePath);
                  } catch (o) {
                    return void x.error($(n, e, o.message, o.stack));
                  }
                  if ('function' == typeof r) {
                    var a;
                    try {
                      a = r(l(n.settings, t), t);
                    } catch (o) {
                      return void x.error($(n, e, o.message, o.stack));
                    }
                    return (
                      i && (z(a) ? Q.setValue(e, i, a) : (a = Q.getValue(e, i))),
                      z(a) || (a = n.defaultValue || ''),
                      'string' == typeof a &&
                        (n.cleanText && (a = _(a)), n.forceLowerCase && (a = a.toLowerCase())),
                      a
                    );
                  }
                  x.error($(n, e, 'Module did not export a function.'));
                };
              },
              X = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return _(e.textContent);
                },
              },
              Z = function (e, t, n) {
                for (var r, i = e, a = 0, o = t.length; a < o; a++) {
                  if (null == i) return undefined;
                  var s = t[a];
                  if (n && '@' === s.charAt(0)) {
                    var c = s.slice(1);
                    i = X[c](i);
                  } else if (i.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var l = r[1];
                    i = i.getAttribute(l);
                  } else i = i[s];
                }
                return i;
              },
              ee = function (a, o, s) {
                return function (e, t) {
                  var n;
                  if (o(e)) n = s(e, t);
                  else {
                    var r = e.split('.'),
                      i = r.shift();
                    'this' === i
                      ? t && (n = Z(t.element, r, !0))
                      : 'event' === i
                      ? t && (n = Z(t, r))
                      : 'target' === i
                      ? t && (n = Z(t.target, r))
                      : (n = Z(a[i], r));
                  }
                  return n;
                };
              },
              te = function (n, r) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    r(e) || 'this' === t || 'event' === t || 'target' === t || n.hasOwnProperty(t)
                  );
                };
              },
              ne = function (e, t, n) {
                var r = { exports: {} };
                return e.call(r.exports, r, r.exports, t, n), r.exports;
              },
              re = function () {
                var o = {},
                  n = function (e) {
                    var t = o[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(o).forEach(function (e) {
                      try {
                        r(e);
                      } catch (n) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          n.message +
                          (n.stack ? '\n' + n.stack : '');
                        x.error(t);
                      }
                    });
                  },
                  r = function (e) {
                    var t = n(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = ne(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, n, r, i) {
                    var a = { definition: t, extensionName: n, require: r, turbine: i };
                    (a.require = r), (o[e] = a);
                  },
                  hydrateCache: e,
                  getModuleExports: r,
                  getModuleDefinition: function (e) {
                    return n(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return n(e).extensionName;
                  },
                };
              },
              ie = !1,
              ae = function (r) {
                return function (t, n) {
                  var e = r._monitors;
                  e &&
                    (ie ||
                      (x.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (ie = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](n);
                    }));
                };
              },
              oe = function (i, a, o) {
                var n,
                  r,
                  s,
                  c,
                  l = [],
                  u = function (e, t, n) {
                    if (!i(t)) return e;
                    l.push(t);
                    var r = a(t, n);
                    return l.pop(), null == r && o ? '' : r;
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
                  (r = function (e, t) {
                    for (var n = {}, r = Object.keys(e), i = 0; i < r.length; i++) {
                      var a = r[i],
                        o = e[a];
                      n[a] = c(o, t);
                    }
                    return n;
                  }),
                  (s = function (e, t) {
                    for (var n = [], r = 0, i = e.length; r < i; r++) n.push(c(e[r], t));
                    return n;
                  }),
                  (c = function (e, t) {
                    return 'string' == typeof e
                      ? n(e, t)
                      : Array.isArray(e)
                      ? s(e, t)
                      : 'object' == typeof e && null !== e
                      ? r(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < l.length
                      ? (x.error('Data element circular reference detected: ' + l.join(' -> ')), e)
                      : c(e, t);
                  }
                );
              },
              se = function (i) {
                return function (e, t) {
                  if ('string' == typeof e) i[arguments[0]] = t;
                  else if (arguments[0]) {
                    var n = arguments[0];
                    for (var r in n) i[r] = n[r];
                  }
                };
              },
              ce = setTimeout;
            (a.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (a.prototype.then = function (e, t) {
                var n = new this.constructor(r);
                return o(this, new d(e, t, n)), n;
              }),
              (a.prototype['finally'] = t),
              (a.all = function (t) {
                return new a(function (i, a) {
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
                            a
                          );
                      }
                      (s[t] = e), 0 == --c && i(s);
                    } catch (r) {
                      a(r);
                    }
                  }
                  if (!l(t)) return a(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(t);
                  if (0 === s.length) return i([]);
                  for (var c = s.length, e = 0; e < s.length; e++) o(e, s[e]);
                });
              }),
              (a.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === a
                  ? t
                  : new a(function (e) {
                      e(t);
                    });
              }),
              (a.reject = function (n) {
                return new a(function (e, t) {
                  t(n);
                });
              }),
              (a.race = function (i) {
                return new a(function (e, t) {
                  if (!l(i)) return t(new TypeError('Promise.race accepts an array'));
                  for (var n = 0, r = i.length; n < r; n++) a.resolve(i[n]).then(e, t);
                });
              }),
              (a._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  ce(e, 0);
                }),
              (a._unhandledRejectionFn = function wt (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var le = window.Promise || a['default'] || a,
              ue = function (l, n, r) {
                return function (s, t, c, e) {
                  return e.then(function () {
                    var a,
                      o = s.delayNext;
                    return new le(function (e, t) {
                      var n = l(s, c, [c]);
                      if (!o) return e();
                      var r = s.timeout,
                        i = new le(function (e, t) {
                          a = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      le.race([n, i]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(a), (e = n(e)), r(s, t, e), le.reject(e);
                      })
                      .then(function () {
                        clearTimeout(a);
                      });
                  });
                };
              },
              de = function (c, n, r, i, l) {
                return function (o, t, s, e) {
                  return e.then(function () {
                    var a;
                    return new le(function (e, t) {
                      var n = c(o, s, [s]),
                        r = o.timeout,
                        i = new le(function (e, t) {
                          a = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      le.race([n, i]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(a), (e = n(e)), i(o, t, e), le.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(a), !r(o, e))) return l(o, t), le.reject();
                      });
                  });
                };
              },
              pe = le.resolve(),
              fe = function (r, i, e) {
                return function (t, n) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        pe = r(e, t, n, pe);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        pe = i(e, t, n, pe);
                      }),
                    (pe = (pe = pe.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              ge = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              me = function (o, s, c, l) {
                return function (e, t) {
                  var n;
                  if (e.conditions)
                    for (var r = 0; r < e.conditions.length; r++) {
                      n = e.conditions[r];
                      try {
                        var i = o(n, t, [t]);
                        if (ge(i))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!s(n, i)) return c(n, e), !1;
                      } catch (a) {
                        return l(n, e, a), !1;
                      }
                    }
                  return !0;
                };
              },
              he = function (n, r) {
                return function (e, t) {
                  n(e, t) && r(e, t);
                };
              },
              ve = function (n) {
                return function (e) {
                  var t = n.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              be = function (i) {
                return function (e) {
                  var t = e.rule,
                    n = e.event,
                    r = i.getModuleDefinition(n.modulePath).name;
                  return {
                    $type: i.getModuleExtensionName(n.modulePath) + '.' + r,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              ye = function (s, c, l, u, d, p) {
                return function (n, e) {
                  var r = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var i = d(e);
                    c(t, null, [
                      function a (e) {
                        var t = l(i, e);
                        n(function () {
                          s(t, r);
                        });
                      },
                    ]);
                  } catch (o) {
                    p.error(u(t, r, o));
                  }
                };
              },
              _e = function (i, a, o, s) {
                return function (e, t, n) {
                  var r = a(e);
                  o.error(i(r, t.name, n)), s('ruleActionFailed', { rule: t, action: e });
                };
              },
              Ce = function (i, a, o, s) {
                return function (e, t, n) {
                  var r = a(e);
                  o.error(i(r, t.name, n)), s('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Se = function (r, i, a) {
                return function (e, t) {
                  var n = r(e);
                  i.log('Condition "' + n + '" for rule "' + t.name + '" was not met.'),
                    a('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              ke = function (t, n) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), n('ruleCompleted', { rule: e });
                };
              },
              Ie = function (a, o, s) {
                return function (e, t) {
                  var n;
                  if (e.actions)
                    for (var r = 0; r < e.actions.length; r++) {
                      n = e.actions[r];
                      try {
                        a(n, t, [t]);
                      } catch (i) {
                        return void o(n, e, i);
                      }
                    }
                  s(e);
                };
              },
              we = function (n, r, i, a) {
                return function (e, t) {
                  a('ruleTriggered', { rule: t }), n ? i(t, e) : r(t, e);
                };
              },
              De = function (e, t, n) {
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
              Ae = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              Te = [],
              Pe = !1,
              Ee = function (e) {
                Pe ? e() : Te.push(e);
              },
              xe = function (e, t, n) {
                e(t).forEach(function (e) {
                  n(Ee, e);
                }),
                  (Pe = !0),
                  Te.forEach(function (e) {
                    e();
                  }),
                  (Te = []);
              },
              Oe = function (e) {
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
              Me = Object.getOwnPropertySymbols,
              Le = Object.prototype.hasOwnProperty,
              Ve = Object.prototype.propertyIsEnumerable,
              Re = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, r = f(e), i = 1; i < arguments.length; i++) {
                      for (var a in (t = Object(arguments[i]))) Le.call(t, a) && (r[a] = t[a]);
                      if (Me) {
                        n = Me(t);
                        for (var o = 0; o < n.length; o++) Ve.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                      }
                    }
                    return r;
                  },
              je = function (e, t) {
                return (
                  Re((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          x.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Ne = function (c, l) {
                return function (e, t) {
                  var n = c[e];
                  if (n) {
                    var r = n.modules;
                    if (r)
                      for (var i = Object.keys(r), a = 0; a < i.length; a++) {
                        var o = i[a],
                          s = r[o];
                        if (s.shared && s.name === t) return l.getModuleExports(o);
                      }
                  }
                };
              },
              Ue = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Fe = function (n, r) {
                return function (e) {
                  if (r) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return n + e;
                };
              },
              Be = '.js',
              He = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Ge = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              qe = function (e, t) {
                Ge(t, Be) || (t += Be);
                var n = t.split('/'),
                  r = He(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              We = document,
              Ke = function (n, r) {
                return new le(function (e, t) {
                  (r.onload = function () {
                    e(r);
                  }),
                    (r.onerror = function () {
                      t(new Error('Failed to load script ' + n));
                    });
                });
              },
              Ye = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = Ke(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              Qe = function (e, t, n, r) {
                (t = t || '&'), (n = n || '=');
                var i = {};
                if ('string' != typeof e || 0 === e.length) return i;
                var a = /\+/g;
                e = e.split(t);
                var o = 1000;
                r && 'number' == typeof r.maxKeys && (o = r.maxKeys);
                var s = e.length;
                0 < o && o < s && (s = o);
                for (var c = 0; c < s; ++c) {
                  var l,
                    u,
                    d,
                    p,
                    f = e[c].replace(a, '%20'),
                    g = f.indexOf(n);
                  0 <= g ? ((l = f.substr(0, g)), (u = f.substr(g + 1))) : ((l = f), (u = '')),
                    (d = decodeURIComponent(l)),
                    (p = decodeURIComponent(u)),
                    m(i, d)
                      ? Array.isArray(i[d])
                        ? i[d].push(p)
                        : (i[d] = [i[d], p])
                      : (i[d] = p);
                }
                return i;
              },
              $e = function (e) {
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
              ze = function (n, r, i, e) {
                return (
                  (r = r || '&'),
                  (i = i || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent($e(e)) + i;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent($e(e));
                                })
                                .join(r)
                            : t + encodeURIComponent($e(n[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent($e(e)) + i + encodeURIComponent($e(n))
                    : ''
                );
              },
              Je = e(function (e, t) {
                (t.decode = t.parse = Qe), (t.encode = t.stringify = ze);
              }),
              Xe = (Je.decode, Je.parse, Je.encode, Je.stringify, '@adobe/reactor-'),
              Ze = {
                cookie: M,
                document: We,
                'load-script': Ye,
                'object-assign': Re,
                promise: le,
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
                window: L,
              },
              et = function (r) {
                return function (e) {
                  if (0 === e.indexOf(Xe)) {
                    var t = e.substr(Xe.length),
                      n = Ze[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              tt = function (e, o, s, c, l) {
                var u = e.extensions,
                  d = e.buildInfo,
                  p = e.property.settings;
                if (u) {
                  var f = Ne(u, o);
                  Object.keys(u).forEach(function (r) {
                    var i = u[r],
                      e = Ue(c, i.settings);
                    if (i.modules) {
                      var t = x.createPrefixedLogger(i.displayName),
                        n = Fe(i.hostedLibFilesBaseUrl, d.minified),
                        a = {
                          buildInfo: d,
                          getDataElementValue: l,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: f,
                          logger: t,
                          propertySettings: p,
                          replaceTokens: c,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(i.modules).forEach(function (n) {
                        var e = i.modules[n],
                          t = et(function (e) {
                            var t = qe(n, e);
                            return o.getModuleExports(t);
                          });
                        o.registerModule(n, e, r, t, a);
                      });
                    }
                  }),
                    o.hydrateCache();
                }
                return o;
              },
              nt = function (e, t, n, r, i) {
                var a = x.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  x.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = a),
                  (e.notify = function (e, t) {
                    switch (
                      (x.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        a.info(e);
                        break;
                      case 4:
                        a.warn(e);
                        break;
                      case 5:
                        a.error(e);
                        break;
                      default:
                        a.log(e);
                    }
                  }),
                  (e.getVar = r),
                  (e.setVar = i),
                  (e.setCookie = function (e, t, n) {
                    var r = '',
                      i = {};
                    n && ((r = ', { expires: ' + n + ' }'), (i.expires = n));
                    var a =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      r +
                      ').';
                    x.warn(a), M.set(e, t, i);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      x.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      M.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    x.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      M.remove(e);
                  }),
                  (e.cookie = M),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var o = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      o ||
                        (x.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (o = !0)),
                      t
                    );
                  },
                });
              },
              rt = window._satellite;
            if (rt && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var it = rt.container;
              delete rt.container;
              var at = it.property.settings.undefinedVarsReturnEmpty,
                ot = it.property.settings.ruleComponentSequencingEnabled,
                st = it.dataElements || {};
              Q.migrateCookieData(st);
              var ct,
                lt = function (e) {
                  return st[e];
                },
                ut = re(),
                dt = J(
                  ut,
                  lt,
                  function () {
                    return ct.apply(null, arguments);
                  },
                  at
                ),
                pt = {},
                ft = se(pt),
                gt = te(pt, lt),
                mt = ee(pt, lt, dt);
              ct = oe(gt, mt, at);
              var ht = v(R('localStorage'), x);
              nt(rt, it, ht.setDebugEnabled, mt, ft), tt(it, ut, ht, ct, dt);
              var vt = ae(rt),
                bt = y(ut, ct),
                yt = ve(ut),
                _t = Se(yt, x, vt),
                Ct = Ce(De, yt, x, vt),
                St = _e(De, yt, x, vt),
                kt = ke(x, vt),
                It = ye(
                  we(
                    ot,
                    he(me(bt, Ae, _t, Ct), Ie(bt, St, kt)),
                    fe(de(bt, Oe, Ae, Ct, _t), ue(bt, Oe, St), kt),
                    vt
                  ),
                  bt,
                  je,
                  De,
                  be(ut),
                  x
                );
              xe(g, it.rules || [], It);
            }
            return rt;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_29647809a0f61084)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_29647809a0f61084
          ));
      }
    })();
    _satellite = $___var_6081e52df4f53794;
  })();
}
