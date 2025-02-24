var NolTracker, nol_t, logger;
{
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
    function $___var_b18024a5ec702ac9 (d, b) {
      try {
        window.V60 = window.V60 || {};
        var a = this;
        this.pvar = d;
        this.globals = {
          tagCurrRetry: -1,
          tagMaxRetry: 3,
          wlCurrRetry: -1,
          wlMaxRetry: 3,
          domain:
            this.pvar &&
            this.pvar.hasOwnProperty('server') &&
            typeof this.pvar.server !== 'undefined'
              ? String(this.pvar.server).toLowerCase()
              : '',
          cid:
            this.pvar && this.pvar.hasOwnProperty('cid') && typeof this.pvar.cid !== 'undefined'
              ? String(this.pvar.cid).toLowerCase()
              : '',
          content:
            this.pvar &&
            this.pvar.hasOwnProperty('content') &&
            typeof this.pvar.content !== 'undefined' &&
            String(this.pvar.content).length !== 0
              ? String(this.pvar.content).toLowerCase()
              : '0',
          origAuWhitelist: { 'au-ziffdavis': {}, ziffdavis: {}, 'kataweb-it': {} },
          defaultApidFile: 'config250',
          defaultErrorParams: { nol_vcid: 'c00' },
          si: window.location.href
            .replace(/\"/g, '')
            .replace(/\'/g, '')
            .replace(/%27/g, '')
            .replace(/%22/g, ''),
          init: function () {
            this.defaultErrorParams.nol_clientid = this.cid;
            return this;
          },
        }.init();
        if (!window.NOLBUNDLE) {
          !(function (e, f) {
            e[f] = e[f] || {
              nlsQ: function (k, l, m, j, h, g) {
                return (
                  (h = e.document),
                  (j = h.createElement('script')),
                  (j.async = 1),
                  (j.src =
                    ('http:' === e.location.protocol ? 'http:' : 'https:') +
                    '//cdn-gl.imrworldwide.com/conf/' +
                    k +
                    '.js#name=' +
                    l +
                    '&ns=' +
                    f),
                  (g = h.getElementsByTagName('script')[0]),
                  g.parentNode.insertBefore(j, g),
                  (e[f][l] = e[f][l] || {
                    g: m,
                    ggPM: function (q, t, p, o, n) {
                      (e[f][l].q = e[f][l].q || []).push([q, t, p, o, n]);
                    },
                  }),
                  e[f][l]
                );
              },
            };
          })(window, 'NOLBUNDLE');
        }
        this.mergeFeatures(b);
        if (
          this.globals.domain.indexOf('secure-au') !== -1 ||
          this.globals.domain.indexOf('secure-it') !== -1 ||
          this.globals.domain.indexOf('secure-nz') !== -1 ||
          (this.globals.hasOwnProperty('origAuWhitelist') &&
            Object.keys(this.globals.origAuWhitelist).length > 0 &&
            this.globals.origAuWhitelist.hasOwnProperty(this.globals.cid))
        ) {
          this.retrieveCiFileViaCors(function (e) {
            a.injectBsdk(e);
          });
        } else {
        }
      } catch (c) {
        logger('Failed to execute NolTracker constructor - ' + c.message);
      }
    }
    NolTracker = $___var_b18024a5ec702ac9;
    ({}.constructor.defineProperty(NolTracker, 'name', {
      configurable: true,
      enumerable: false,
      value: 'NolTracker',
      writable: false,
    }));
    function $___var_e29fa9b5ad4109ba (b, a) {
      return new NolTracker(b, a);
    }
    nol_t = $___var_e29fa9b5ad4109ba;
    ({}.constructor.defineProperty(nol_t, 'name', {
      configurable: true,
      enumerable: false,
      value: 'nol_t',
      writable: false,
    }));
    NolTracker.prototype.version = '6.0.104';
    NolTracker.prototype.injectBsdk = function (b) {
      try {
        var i = 0,
          j = this,
          g = {
            nol_sdkDebug: false,
            apn: 'v60Bsdk',
            nsdkv: '600',
            sfcode: j.pvar.server.replace('secure-', ''),
            si: this.globals.si,
          },
          h = { type: 'static', assetid: j.globals.content, section: j.globals.content },
          c = j.globals.defaultApidFile,
          a = 'v60Bsdk__' + Date.now();
        if (j.pvar.hasOwnProperty('subdomain') && j.pvar.subdomain.length > 0) {
          g.subdomain = j.pvar.subdomain;
        }
        if (b && b.hasOwnProperty('nolparams')) {
          if (b.hasOwnProperty('apidFile') && b.apidFile !== undefined && b.apidFile.length > 0) {
            c = b.apidFile;
          }
          for (key in b.nolparams) {
            g[key] = b.nolparams[key];
          }
        } else {
          g.nol_override = g.nol_override || {};
          g.nol_override.nol_clientid = this.globals.cid;
        }
        var d = NOLBUNDLE.nlsQ(c, a, g);
        setTimeout(function () {
          d.ggPM('14', h);
        }, 2000);
      } catch (f) {
        logger('Failed to execute injectBsdk - ' + f.message);
      }
    };
    NolTracker.prototype.retrieveCiFileViaCors = function (c) {
      const $___old_24de46da8d8bce0a = {}.constructor.getOwnPropertyDescriptor(
          window,
          'XMLHttpRequest'
        ),
        $___old_acafa9e52d20f78b = {}.constructor.getOwnPropertyDescriptor(
          window,
          'XMLHttpRequest'
        );
      try {
        if ($___old_24de46da8d8bce0a)
          ({}.constructor.defineProperty(
            window,
            'XMLHttpRequest',
            $___stub_afd3abb015d4d981.XMLHttpRequest
          ));
        if ($___old_acafa9e52d20f78b)
          ({}.constructor.defineProperty(
            window,
            'XMLHttpRequest',
            $___stub_afd3abb015d4d981.XMLHttpRequest
          ));
        return function () {
          try {
            var f,
              b = true,
              j = this,
              k = [200, 302],
              a =
                'https://bee.imrworldwide.com/v1/clients/match?client_id=' +
                this.globals.cid +
                '&url=' +
                encodeURI(window.location.href),
              i = function (e) {
                logger('Error parsing DDRS <ci>.json response - ' + e.message);
                c(j.processDdrsSvc({ processError: j.globals.defaultErrorParams }));
                return;
              },
              g = function () {
                c(j.processDdrsSvc({ processError: j.globals.defaultErrorParams }));
              };
            if (window.XDomainRequest) {
              var f = new XDomainRequest();
              f.open('get', a);
              f.onload = function () {
                try {
                  var n = new ActiveXObject('Microsoft.XMLDOM'),
                    m = JSON.parse(f.responseText);
                  n.async = false;
                } catch (l) {
                  i(l);
                }
                c(j.processDdrsSvc(m));
              };
              f.onerror = function () {
                g();
              };
              try {
                f.send();
              } catch (d) {
                g();
              }
            } else {
              if (window.XMLHttpRequest) {
                f = new XMLHttpRequest();
                f.onerror = function () {
                  g();
                };
                f.onreadystatechange = function () {
                  if (this.readyState == 4) {
                    if (k.indexOf(this.status) !== -1) {
                      try {
                        ciDdrs = JSON.parse(this.responseText);
                      } catch (l) {
                        i(l);
                        return;
                      }
                      c(j.processDdrsSvc(ciDdrs));
                    } else {
                      if ([404, 403].indexOf(this.status) > -1) {
                        g();
                      }
                    }
                  }
                };
                f.open('GET', a, b);
                try {
                  f.send();
                } catch (d) {
                  g();
                }
              }
            }
          } catch (h) {
            logger('Failed to execute retrieveCiFileViaCors - ' + h.message);
          }
        }.apply(this, arguments);
      } finally {
        if ($___old_24de46da8d8bce0a)
          ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_24de46da8d8bce0a));
        if ($___old_acafa9e52d20f78b)
          ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_acafa9e52d20f78b));
      }
    };
    function $___var_3506c958e29f8ba6 (a) {
      if (typeof console !== 'undefined' && console && console.warn && a && a.length > 0) {
        console.warn(a);
      }
    }
    logger = $___var_3506c958e29f8ba6;
    ({}.constructor.defineProperty(logger, 'name', {
      configurable: true,
      enumerable: false,
      value: 'logger',
      writable: false,
    }));
    NolTracker.prototype.processDdrsSvc = function (f) {
      var b = this,
        a = {
          apidFile: undefined,
          nolparams: {
            nol_override: {
              nol_pageURL: this.globals.si && this.globals.si.length > 0 ? this.globals.si : '',
            },
          },
        };
      try {
        function d (g) {
          if (g.client && g.client.cid) {
            a.nolparams.nol_override.nol_clientid = g.client.cid;
            a.nolparams.nol_override.nol_vcid = g.client.vc_id;
          }
          for (var e in g) {
            if (e === 'cid') {
              a.nolparams.nol_override.nol_clientid = g[e];
            } else {
              if (['client'].indexOf(e) === -1) {
                a.nolparams.nol_override[e] = g[e];
              }
            }
          }
        }
        if (f && f.hasOwnProperty('processError')) {
          d(f.processError);
          return a;
        } else {
          if (['ok', 'nomatch', 'notfound'].indexOf(f.status.toLowerCase()) > -1) {
            d(f);
            a.apidFile = true;
            return a;
          } else {
            return {};
          }
        }
      } catch (c) {
        logger('Failed to execute processDdrsSvc - ' + c.message);
      }
    };
    NolTracker.prototype.addScript = function (d) {
      try {
        var b;
        var a = this;
        if (d === undefined || d.length === 0 || !a.globals) {
          return;
        }
        b = window.document.createElement('script');
        b.type = 'text/javascript';
        b.src = d;
        b.onerror = function (e) {
          var f = e.target.src;
          if (window.document.head) {
            window.document.head.removeChild(e.target);
          } else {
            window.document.getElementsByTagName('head')[0].removeChild(e.target);
          }
          if (
            a.globals.hasOwnProperty('wlCurrRetry') &&
            a.globals.hasOwnProperty('wlMaxRetry') &&
            ++a.globals.wlCurrRetry < a.globals.wlMaxRetry
          ) {
            window.setTimeout(function () {
              a.addScript(f);
            }, 2000);
          } else {
            logger('Max number of retries reached in addScript');
          }
        };
        b.onload = function (e) {
          a.globals.wlCurrRetry = 0;
          if (window.document.head) {
            window.document.head.removeChild(e.target);
          } else {
            window.document.getElementsByTagName('head')[0].removeChild(e.target);
          }
        };
        if (window.document.head) {
          window.document.head.appendChild(b);
        } else {
          window.document.getElementsByTagName('head')[0].appendChild(b);
        }
      } catch (c) {
        logger('Failed to execute addScript - ' + c.message);
      }
    };
    NolTracker.prototype.fireToUrl = function (a) {
      try {
        if (
          typeof a === 'undefined' ||
          (a && (!a.hasOwnProperty('url') || a.url.length === 0)) ||
          !a.hasOwnProperty('retryDelay') ||
          !a.hasOwnProperty('currRetry') ||
          !a.hasOwnProperty('maxRetry')
        ) {
          return;
        }
        var b = {
          requestUrl: function () {
            try {
              var d = this;
              return ++a.currRetry > a.maxRetry
                ? d.logErr('maxRetry reached')
                : d.sendUrlRequest(a.url);
            } catch (e) {
              d.logErr('Error in fireToUrl requestUrl: ' + e);
            }
          },
          sendUrlRequest: function (f) {
            var e = this;
            try {
              if (typeof f === 'undefined') {
                return;
              }
              var d = new Image();
              d.onerror = function (h) {
                window.setTimeout(function () {
                  e.requestUrl();
                }, a.retryDelay);
              };
              d.onload = function (h) {};
              d.src = f + '&r=' + Math.round(Math.random() * 1000000);
            } catch (g) {
              e.logErr('Error in fireToUrl sendUrlRequest: ' + g);
            }
          },
          logErr: function (d) {
            if (d && window.console && window.console.log) {
              console.log('Error: ', d);
            }
          },
        };
        b.requestUrl();
      } catch (c) {
        logger('Failed to execute fireUrl - ' + c.message);
      }
    };
    NolTracker.prototype.whitelistAssigned = function (a) {
      try {
        if (
          window.V60 &&
          window.V60.hasOwnProperty('ciWhitelist') &&
          window.V60.ciWhitelist.hasOwnProperty('nol_clients') &&
          Object.keys(window.V60.ciWhitelist.nol_clients).length > 0
        ) {
          var a = this;
          var f =
            a.pvar && a.pvar.hasOwnProperty('cid') && typeof a.pvar.cid !== 'undefined'
              ? String(a.pvar.cid).toLowerCase()
              : '';
          if (window.V60.ciWhitelist.nol_clients.hasOwnProperty(f)) {
            var d = window.V60.ciWhitelist.nol_clients[f],
              c =
                window.V60.ciWhitelist && window.V60.ciWhitelist.nol_clients
                  ? window.V60.ciWhitelist.nol_clients
                  : {};
            if (Object.keys(c).length > 0 && c.hasOwnProperty(f)) {
              a.retrieveCiFileViaCors(function (e) {
                a.injectBsdk(e);
              });
            }
            if (d.hasOwnProperty('nol_xl8Url') && d.nol_xl8Url.length > 0) {
              a.fireToUrl({
                url: d.nol_xl8Url,
                retryDelay: 1000,
                currRetry: a.globals.tagCurrRetry,
                maxRetry: a.globals.tagMaxRetry,
              });
            }
          }
        } else {
          if (typeof console !== 'undefined' && console && console.warn) {
            console.warn('Failed to execute initFromWhitelist', b.message);
          }
        }
      } catch (b) {
        logger('Failed to execute whitelistAssigned - ' + b.message);
      }
    };
    NolTracker.prototype.populateWhitelist = function (b) {
      try {
        if (b && b.hasOwnProperty('whiteListReq') && b.whiteListReq.length > 0) {
          var a = this;
          window.addEventListener('whitelistAssigned', function () {
            a.whitelistAssigned(a);
          });
          a.addScript(b.whiteListReq);
        } else {
          logger('Invalid param passed to populateWhitelist');
        }
      } catch (c) {
        logger('Failed to execute populateWhitelist - ' + c.message);
      }
    };
    NolTracker.prototype.scriptName = (function () {
      try {
        var b = document.getElementsByTagName('script');
        var c = b[b.length - 1].getAttribute('src').match(/[^\/]*$/);
      } catch (a) {}
      return c || 'v60.js';
    })();
    NolTracker.prototype.pmap = [
      ['action', 'at', 0],
      ['campaign', 'ca', 1],
      ['col_depth', 'cd', 0],
      ['conn_type', 'ct', 0],
      ['cookies_enabled', 'ck', 0],
      ['creative', 'cr', 1],
      ['execution', 'ce', 1],
      ['flash', 'fl', 0],
      ['ip_address', 'ip', 0],
      ['is_hp', 'hp', 0],
      ['java_enabled', 'je', 0],
      ['language', 'lg', 0],
      ['ownership', 'ou', 1],
      ['page_url', 'si', 1],
      ['placement', 'pc', 1],
      ['primary_group', 'pg', 1],
      ['referrer', 'rp', 1],
      ['resource', 'rt', 0],
      ['result', 'rn', 1],
      ['result_flag', 'rf', 0],
      ['revenue', 'rv', 0],
      ['sample_size', 'ss', 0],
      ['screen_res', 'sr', 0],
      ['stream_dur', 'sd', 0],
      ['sub_resource', 'st', 0],
      ['survey', 'sv', 1],
      ['tag_source', 'ts', 1],
      ['cookie_overwrite', 'id', 0],
      ['timezone', 'tz', 0],
    ];
    NolTracker.prototype.feat = {
      check_cookie: 1,
      detect_flash: 0,
      detect_technical: 1,
      document_title: 0,
      check_fraud: 0,
      filters: undefined,
      session_cookie: 0,
      landing_page: 1,
      link_overlay: 0,
      pause_time: 500,
      auto_post: 1,
      sample_rate: 1,
      useLocalStorage: 1,
      surveys_enabled: 0,
    };
    NolTracker.prototype.CONST = { max_tags: 20 };
    NolTracker.prototype.record = function () {
      const $___old_02dff861b0351f2c = {}.constructor.getOwnPropertyDescriptor(
        window,
        'localStorage'
      );
      try {
        if ($___old_02dff861b0351f2c)
          ({}.constructor.defineProperty(
            window,
            'localStorage',
            $___stub_b317e19f866a2da7.localStorage
          ));
        return function () {
          this.postChk = false;
          this.page_url = '' + window.location;
          this.referrer = '' + document.referrer;
          try {
            if (
              this.feat &&
              this.feat.check_fraud &&
              top.location.href.indexOf(document.domain) === -1
            ) {
              this.detected_fraud = true;
              return this;
            }
            this.detected_fraud = false;
          } catch (h) {
            this.detected_fraud = true;
            return this;
          }
          if (this.feat && this.feat.detect_technical) {
            this.java_enabled = navigator.javaEnabled() === true ? 'y' : 'n';
            if (document.body.addBehavior) {
              document.body.addBehavior('#default#clientCaps');
              document.body.addBehavior('#default#homePage');
              this.conn_type = document.body.connectionType;
              this.is_hp = document.body.isHomePage(location.href) ? 'y' : 'n';
            }
            if (window.screen) {
              this.screen_res = window.screen.width + 'x' + window.screen.height;
              this.col_depth = window.screen.colorDepth;
            }
            if (navigator.userLanguage) {
              this.language = navigator.userLanguage;
            } else {
              if (navigator.language) {
                this.language = navigator.language;
              }
            }
            if (navigator.cookieEnabled) {
              this.pvar.cookies_enabled = navigator.cookieEnabled === true ? 'y' : 'n';
            }
            this.timezone = new Date().getTimezoneOffset() / -60;
          }
          if (this.feat && this.feat.detect_flash) {
            if (navigator.mimeTypes && navigator.mimeTypes.length > 0) {
              var d = 'application/x-shockwave-flash';
              if (navigator.mimeTypes[d] && navigator.mimeTypes[d].enabledPlugin) {
                var b = this.getVersion(navigator.mimeTypes[d].enabledPlugin.description, 1);
                if (b) {
                  this.flash = b;
                }
              }
            } else {
              if (window.ActiveXObject) {
                for (var c = 15; c > 0; c--) {
                  try {
                    if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + c)) {
                      this.flash = c;
                      break;
                    }
                  } catch (g) {}
                }
              }
            }
          }
          if (this.feat && this.feat.link_overlay) {
            this.regLinkOverlay();
          }
          try {
            if (typeof window.localStorage === 'undefined') {
              this.feat.useLocalStorage = 0;
            } else {
              localStorage.cHJpdmF0ZV9icm93c2luZ190ZXN0 = 'private_browsing_test';
              localStorage.removeItem('cHJpdmF0ZV9icm93c2luZ190ZXN0');
            }
          } catch (a) {
            this.feat.useLocalStorage = 0;
          }
          if (this.feat && this.feat.useLocalStorage) {
            localstorageframe = [this.getSchemeHost(), 'storageframe.html'].join('');
            this.iframe(localstorageframe, 'LOCSTORAGE');
          }
          return this;
        }.apply(this, arguments);
      } finally {
        if ($___old_02dff861b0351f2c)
          ({}.constructor.defineProperty(window, 'localStorage', $___old_02dff861b0351f2c));
      }
    };
    NolTracker.prototype.regListen = function () {
      var a = this;
      return function (b) {
        if (
          b &&
          b.origin &&
          b.origin.indexOf('imrworldwide.com') !== -1 &&
          (typeof b.data === 'string' || b.data instanceof String) &&
          b.data.indexOf('{') === -1 &&
          b.data !== ''
        ) {
          if (
            typeof localStorage.Y29va2llX293X25hbWUK === 'undefined' ||
            !localStorage.Y29va2llX293X25hbWUK ||
            b.data.search(/;JA$/) === -1
          ) {
            a.cookie_overwrite = b.data.replace(/;JA$/, '');
          } else {
            if (
              typeof localStorage.Y29va2llX293X25hbWUK === 'string' ||
              localStorage.Y29va2llX293X25hbWUK instanceof String
            ) {
              a.cookie_overwrite = localStorage.Y29va2llX293X25hbWUK.replace(/;JA$/, '');
            }
          }
          localStorage.Y29va2llX293X25hbWUK = a.cookie_overwrite;
        }
        if (a.postChk) {
          a.post();
        }
      };
    };
    NolTracker.prototype.iframe = function (b, c) {
      try {
        var a = window.document.createElement('iframe');
        a.style.width = '1px';
        a.style.height = '1px';
        a.style.position = 'absolute';
        a.style.top = '-7px';
        a.style.left = '-7px';
        a.style.border = '0';
        a.src = b;
        a.setAttribute('id', c);
        a.setAttribute('scrolling', 'no');
        a.setAttribute('name', 'empty');
        a.setAttribute('hidden', 'true');
        window.document.body.insertBefore(a, window.document.body.firstChild);
        if (window.addEventListener) {
          addEventListener('message', this.regListen(), false);
        } else {
          attachEvent('onmessage', this.regListen());
        }
      } catch (d) {
        d.code = d.code ? d.code : (d.code = 1);
        throw d;
      }
    };
    NolTracker.prototype.prefix = function () {
      var b = arguments && arguments.length > 0 ? arguments[0] : null;
      var c = b && b.api ? b.api : 'm';
      var a = [
        this.getSchemeHost(),
        'cgi-bin/',
        c,
        '?',
        'rnd=',
        new Date().getTime(),
        '&ci=',
        this.pvar ? this.pvar.cid : '',
        '&js=1',
      ];
      if (c === 'm') {
        if (typeof _rsCI == 'string') {
          a.push(
            '&cg=',
            encodeURIComponent(
              b && b.content
                ? b.content
                : (this.pvar ? this.pvar.content : null) || (this.pvar.content == '' ? '' : '0')
            )
          );
        } else {
          a.push(
            '&cg=',
            encodeURIComponent(
              b && b.content ? b.content : (this.pvar ? this.pvar.content : null) || '0'
            )
          );
        }
      }
      if (this.scriptName) {
        a.push('&ts=', this.scriptName);
      }
      if (this.version) {
        a.push('&vn=', this.version);
      }
      return a.join('');
    };
    NolTracker.prototype.filter = function (b) {
      if (this.feat && this.feat.filters) {
        for (var a in this.feat.filters) {
          if (this.feat.filters.hasOwnProperty(a)) {
            b = this.feat.filters[a](b);
          }
        }
      }
      return b;
    };
    NolTracker.prototype.post = function () {
      if (this.feat && this.feat.useLocalStorage && typeof this.cookie_overwrite === 'undefined') {
        this.postChk = true;
        return this;
      }
      this.postChk = false;
      var a = [this.prefix()];
      if (typeof _rsCI == 'string') {
        a.push('&cc=', this.pvar._rsCC);
      } else {
        a.push('&cc=', this.feat && this.feat.check_cookie ? '1' : '0');
      }
      if (this.feat && this.feat.document_title) {
        var o = encodeURIComponent(document.title);
        if (o) {
          a.push('&tl=', o);
        }
      }
      if (
        this.feat &&
        this.feat.landing_page &&
        this.referrer &&
        document.location.search.search(/[&?]nol\./) !== -1
      ) {
        var b = [];
        var m = document.location.search
          .substring(document.location.search.lastIndexOf('?') + 1)
          .split('&');
        for (var g in m) {
          if (m.hasOwnProperty(g) && m[g].search(/^nol\./) !== -1) {
            b.push('&', m[g]);
          }
        }
        if (b.length > 0) {
          a.push('&lp=1');
          a = a.concat(b);
        }
        this.page_url = this.page_url
          .replace(/[&?]nol\..*?=[^&]*/g, '')
          .replace(/&&/g, '&')
          .replace(/\?&/, '?')
          .replace(/[&\?]$/, '');
        if (this.referrer.search(/[&?]nol\./)) {
          this.referrer = this.referrer
            .replace(/[&?]nol\..*?=[^&]*/g, '')
            .replace(/&&/g, '&')
            .replace(/\?&/, '?')
            .replace(/[&\?]$/, '');
        }
      }
      var c = null,
        p = null,
        h = null,
        e = null;
      for (var k = 0, f = this.pmap.length; k < f; k++) {
        c = this.pmap[k][0];
        p = this.pmap[k][1];
        h = this.pmap[k][2];
        e = null;
        if (this.pvar[c]) {
          e = this.pvar[c];
        } else {
          if (this[c]) {
            e = this[c];
          }
        }
        if (e) {
          a.push('&', p, '=', h ? encodeURIComponent(e) : e);
        }
      }
      if (this.pvar && this.pvar.custom) {
        var n = 0;
        for (var d in this.pvar.custom) {
          if (this.pvar.custom.hasOwnProperty(d)) {
            if (n >= this.CONST.max_tags) {
              break;
            }
            var l = this.pvar.custom[d];
            a.push('&c', n, '=', encodeURIComponent(d), ',', encodeURIComponent(l));
            n++;
          }
        }
      }
      this.postData(a.join(''));
      return this;
    };
    NolTracker.prototype.postEvent = function () {
      var c = arguments && arguments.length > 0 ? arguments[0] : null;
      var a = [this.prefix({ content: c ? c.content : '' })];
      var b = (c ? c.page_url : null) || (this.pvar ? this.pvar.page_url : '') || this.page_url;
      if (c && c.event_type) {
        var d = [
          c.event_type,
          encodeURIComponent(b),
          encodeURIComponent(this.pvar.page_url || this.page_url),
        ].join('_');
        a.push('&cc=1', '&si=', d, '&rp=', this.previousEventPage || this.page_url);
        if (this.cookie_overwrite) {
          a.push('&id=', this.cookie_overwrite);
        }
        this.previousEventPage = d;
      } else {
        a.push(
          '&cc=0',
          '&si=',
          this.pvar ? this.pvar.cid : '',
          '-ctgw-',
          encodeURIComponent(b),
          '&rp=',
          encodeURIComponent(window.location)
        );
      }
      this.postData(a.join(''));
      return this;
    };
    NolTracker.prototype.postLinkTrack = function () {
      this.postEvent(arguments && arguments.length > 0 ? arguments[0] : null);
      this.pause(this.feat.pause_time);
      return this;
    };
    NolTracker.prototype.postEventTrack = function () {
      this.postEvent(arguments && arguments.length > 0 ? arguments[0] : null);
      return this;
    };
    NolTracker.prototype.postClickTrack = function () {
      var b = arguments && arguments.length > 0 ? arguments[0] : null;
      this.postEvent(b);
      if (b && b.page_url) {
        var a = encodeURIComponent(b.page_url);
        setTimeout(
          function () {
            window.location = a;
          },
          this.feat ? this.feat.pause_time : 0
        );
      }
      return this;
    };
    NolTracker.prototype.linkTrack = function () {
      this.postLinkTrack({
        page_url: arguments && arguments.length > 0 ? arguments[0] : '',
        content: arguments && arguments.length > 1 ? arguments[1] : '',
      });
    };
    NolTracker.prototype.eventTrack = function () {
      this.postEventTrack({
        page_url: arguments && arguments.length > 0 ? arguments[0] : '',
        content: arguments && arguments.length > 1 ? arguments[1] : '',
      });
    };
    NolTracker.prototype.clickTrack = function () {
      this.postClickTrack({
        page_url: arguments && arguments.length > 0 ? arguments[0] : '',
        content: arguments && arguments.length > 1 ? arguments[1] : '',
      });
    };
    NolTracker.prototype.pageEvent = function () {
      this.postEventTrack({
        event_type: 'page',
        page_url: arguments && arguments.length > 0 ? arguments[0] : '',
        content: arguments && arguments.length > 1 ? arguments[1] : '',
      });
    };
    NolTracker.prototype.slideEvent = function () {
      this.postEventTrack({
        event_type: 'slide',
        page_url: arguments && arguments.length > 0 ? arguments[0] : '',
        content: arguments && arguments.length > 1 ? arguments[1] : '',
      });
    };
    NolTracker.prototype.sectionEvent = function () {
      this.postEventTrack({
        event_type: 'section',
        page_url: arguments && arguments.length > 0 ? arguments[0] : '',
        content: arguments && arguments.length > 1 ? arguments[1] : '',
      });
    };
    NolTracker.prototype.downloadEvent = function () {
      this.postLinkTrack({
        event_type: 'download',
        page_url: arguments && arguments.length > 0 ? arguments[0] : '',
        content: arguments && arguments.length > 1 ? arguments[1] : '',
      });
    };
    NolTracker.prototype.clickEvent = function () {
      this.postClickTrack({
        event_type: 'click_link',
        page_url: arguments && arguments.length > 0 ? arguments[0] : '',
        content: arguments && arguments.length > 1 ? arguments[1] : '',
      });
    };
    NolTracker.prototype.regLinkOverlay = function () {
      if (!document.getElementById) {
        return;
      }
      var b = this;
      var a = document.body.onclick;
      document.body.onclick = function (c) {
        b.catchLinkOverlay(c);
        if (a) {
          a(c);
        }
      };
    };
    NolTracker.prototype.sendIt = function (c, d, e, a) {
      var b = [
        this.prefix(),
        '&cc=0',
        '&si=',
        this.pvar ? this.pvar.cid : null,
        '-ctpo-',
        encodeURIComponent(
          decodeURIComponent(c)
            .replace(/^\s+|\s+$/g, '')
            .replace(/\s+/g, ' ')
        ),
        '&rp=',
        encodeURIComponent((this.pvar ? this.pvar.link_url : null) || window.location),
        '&tt=',
        encodeURIComponent(d ? d.toLowerCase() : ''),
        '&cn=',
        encodeURIComponent(e ? e.toLowerCase() : ''),
        '&cv=',
        encodeURIComponent(
          decodeURIComponent(a)
            .replace(/^\s+|\s+$/g, '')
            .replace(/\s+/g, ' ')
        ),
      ];
      this.postData(b.join(''));
      this.pause(this.feat ? this.feat.pause_time : 0);
    };
    NolTracker.prototype.sendALink = function (b) {
      var a = b && b.innerHTML && b.innerHTML.toLowerCase().indexOf('img') > -1 ? 'image' : 'text';
      this.sendIt(b ? b.href : '', b ? b.tagName : '', a, b ? b.innerHTML : '');
    };
    NolTracker.prototype.sendForm = function (a) {
      if (!a || a.form === null || a.form.action === null) {
        return;
      }
      var b = '';
      if (a.type === 'image') {
        b = a.src;
      } else {
        if (a.tagName === 'BUTTON') {
          b = a.innerHTML;
          if (b === '') {
            b = a.value;
          }
        } else {
          b = a.value;
        }
      }
      this.sendIt(a.form.action, a.form.tagName, a.type, b);
    };
    NolTracker.prototype.catchLinkOverlay = function (b) {
      var a = b ? b.target : window.event.srcElement;
      if (
        (a.tagName === 'INPUT' || a.tagName === 'BUTTON') &&
        (a.type === 'image' || a.type === 'submit' || a.type === 'button')
      ) {
        this.sendForm(a);
      } else {
        for (; a !== null && a.tagName !== 'BODY'; a = a.parentNode) {
          if (a.tagName === 'A' && a.href.length > 0) {
            this.sendALink(a);
            break;
          }
        }
      }
    };
    NolTracker.prototype.invite = function () {
      if (this.detected_fraud || (this.feat && this.feat.surveys_enabled !== 1)) {
        return this;
      }
      var f = [
        this.prefix({ api: 'j' }),
        '&cc=0',
        '&se=',
        this.feat && this.feat.surveys_enabled ? '1' : '0',
        '&te=0',
      ];
      var e = null,
        a = null,
        c = null,
        h = null;
      for (var g = 0, d = this.pmap.length; g < d; g++) {
        e = this.pmap[g][0];
        a = this.pmap[g][1];
        c = this.pmap[g][2];
        h = null;
        if (this.pvar[e]) {
          h = this.pvar[e];
        } else {
          if (this[e]) {
            h = this[e];
          }
        }
        if (h) {
          f.push('&', a, '=', c ? encodeURIComponent(h) : h);
        }
      }
      var b = ['<scr', 'ipt type="text/javascript" src="', f.join(''), '"></scr', 'ipt>'].join('');
      document.write(b);
      return this;
    };
    NolTracker.prototype.in_sample = function () {
      return this.random() <= this.feat.sample_rate;
    };
    NolTracker.prototype.do_sample = function () {
      if (this.in_sample() === true) {
        this.invite();
      }
      return this;
    };
    NolTracker.prototype.postData = function (a) {
      try {
        if (this.detected_fraud || a.indexOf('secure-it') !== -1) {
          return;
        }
        if (this.feat && this.feat.filters) {
          a = this.filter(a);
        }
        var c = new Image(1, 1);
        c.onerror = c.onload = function () {
          c.onerror = c.onload = null;
        };
        c.src = a;
      } catch (b) {}
    };
    NolTracker.prototype.getVersion = function (e, b) {
      e = e || '';
      var d = 0;
      var c = 0;
      for (var a = 0; a < b && d >= 0; a++) {
        if (d > 0) {
          c = d + 1;
        }
        d = e.indexOf('.', c);
      }
      return d > 0 ? e.substring(c, d).match(/\d+$/) : null;
    };
    NolTracker.prototype.mergeFeatures = function (b) {
      if (!b || typeof b === 'undefined') {
        return;
      }
      var a = {};
      for (var c in this.feat) {
        if (typeof b[c] === 'undefined') {
          a[c] = this.feat[c];
        } else {
          a[c] = b[c];
        }
      }
      this.feat = a;
    };
    NolTracker.prototype.getSchemeHost = function () {
      var a = [
        location.protocol.indexOf('https') !== -1 ? 'https://' : 'http://',
        this.pvar ? this.pvar.server : '',
        this.pvar && this.pvar.server && this.pvar.server.indexOf('imrworldwide.com') === -1
          ? '.imrworldwide.com'
          : '',
        '/',
      ];
      return a.join('');
    };
    NolTracker.prototype.pause = function (a) {
      if (!window.ActiveXObject) {
        if (
          navigator.userAgent.indexOf('Safari') !== -1 &&
          navigator.userAgent.indexOf('Chrome') === -1
        ) {
          return;
        }
        var b = new Date().getTime() + a;
        while (new Date() < b) {}
      }
    };
    NolTracker.prototype.random = function () {
      var b = 714025;
      var c = 4096;
      var a = 150889;
      if (typeof this.random_seed === 'undefined') {
        this.random_seed = new Date().getTime() % b;
      }
      this.random_seed = (this.random_seed * c + a) % b;
      return this.random_seed / b;
    };
    if (!Array.prototype.push) {
      Array.prototype.push = function () {
        if (arguments) {
          for (var a = 0; a < arguments.length; a++) {
            this[this.length] = arguments[a];
          }
        }
      };
    }
    if (typeof _rsCI == 'string') {
      function _rsEvent () {
        v52v53_trac.eventTrack.apply(v52v53_trac, arguments);
      }
      function _rsLinkTrack () {
        v52v53_trac.linkTrack.apply(v52v53_trac, arguments);
      }
      function _rsClick () {
        v52v53_trac.clickTrack.apply(v52v53_trac, arguments);
      }
      var _rsCC = typeof _rsCC !== 'undefined' ? _rsCC : '1';
      var _rsCG = _rsCG || _rsCG == '' ? _rsCG : '0';
      var _rsDN = _rsDN ? _rsDN.split('//')[1].split('.')[0] : 'secure-us';
      var v52v53_pvar = { cid: _rsCI, content: _rsCG, server: _rsDN, _rsCC: _rsCC };
      var v52v53_trac = nol_t(v52v53_pvar);
      v52v53_trac.record().post();
    }
  })();
}
