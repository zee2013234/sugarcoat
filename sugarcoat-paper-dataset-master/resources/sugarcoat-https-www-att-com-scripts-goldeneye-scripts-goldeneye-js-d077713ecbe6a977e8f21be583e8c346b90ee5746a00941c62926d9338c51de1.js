var z,
  acctOverviewSlid,
  prodconfig,
  dom,
  domainRegexes,
  domXDIndex,
  GoldenEye,
  globalUUIDPromise,
  golden;
{
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
  const $___old_d7225e14e1944b5c = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
  try {
    if ($___old_d7225e14e1944b5c)
      ({}.constructor.defineProperty(
        window,
        'localStorage',
        $___stub_3ac875f7196a9c3f.localStorage
      ));
    (function () {
      golden = $___var_b235b74762c11a4f;
      ({}.constructor.defineProperty(golden, 'name', {
        configurable: true,
        enumerable: false,
        value: 'golden',
        writable: false,
      }));
      !(function (e) {
        function o () {}
        function n (e) {
          if ('object' != typeof this) throw new TypeError('Promises must be constructed via new');
          if ('function' != typeof e) throw new TypeError('not a function');
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            l(e, this);
        }
        function t (e, o) {
          for (; 3 === e._state; ) e = e._value;
          return 0 === e._state
            ? void e._deferreds.push(o)
            : ((e._handled = !0),
              void n._immediateFn(function () {
                var n = 1 === e._state ? o.onFulfilled : o.onRejected;
                if (null !== n) {
                  var t;
                  try {
                    t = n(e._value);
                  } catch (e) {
                    return void r(o.promise, e);
                  }
                  i(o.promise, t);
                } else (1 === e._state ? i : r)(o.promise, e._value);
              }));
        }
        function i (e, o) {
          try {
            if (o === e) throw new TypeError('A promise cannot be resolved with itself.');
            if (o && ('object' == typeof o || 'function' == typeof o)) {
              var t = o.then;
              if (o instanceof n) return (e._state = 3), (e._value = o), void a(e);
              if ('function' == typeof t)
                return void l(
                  (function (e, o) {
                    return function () {
                      e.apply(o, arguments);
                    };
                  })(t, o),
                  e
                );
            }
            (e._state = 1), (e._value = o), a(e);
          } catch (o) {
            r(e, o);
          }
        }
        function r (e, o) {
          (e._state = 2), (e._value = o), a(e);
        }
        function a (e) {
          2 === e._state &&
            0 === e._deferreds.length &&
            n._immediateFn(function () {
              e._handled || n._unhandledRejectionFn(e._value);
            });
          for (var o = 0, i = e._deferreds.length; o < i; o++) t(e, e._deferreds[o]);
          e._deferreds = null;
        }
        function s (e, o, n) {
          (this.onFulfilled = 'function' == typeof e ? e : null),
            (this.onRejected = 'function' == typeof o ? o : null),
            (this.promise = n);
        }
        function l (e, o) {
          var n = !1;
          try {
            e(
              function (e) {
                n || ((n = !0), i(o, e));
              },
              function (e) {
                n || ((n = !0), r(o, e));
              }
            );
          } catch (e) {
            if (n) return;
            (n = !0), r(o, e);
          }
        }
        var c = setTimeout;
        (n.prototype.catch = function (e) {
          return this.then(null, e);
        }),
          (n.prototype.then = function (e, n) {
            var i = new this.constructor(o);
            return t(this, new s(e, n, i)), i;
          }),
          (n.all = function (e) {
            var o = Array.prototype.slice.call(e);
            return new n(function (e, n) {
              function t (r, a) {
                try {
                  if (a && ('object' == typeof a || 'function' == typeof a)) {
                    var s = a.then;
                    if ('function' == typeof s)
                      return void s.call(
                        a,
                        function (e) {
                          t(r, e);
                        },
                        n
                      );
                  }
                  (o[r] = a), 0 == --i && e(o);
                } catch (e) {
                  n(e);
                }
              }
              if (0 === o.length) return e([]);
              for (var i = o.length, r = 0; r < o.length; r++) t(r, o[r]);
            });
          }),
          (n.resolve = function (e) {
            return e && 'object' == typeof e && e.constructor === n
              ? e
              : new n(function (o) {
                  o(e);
                });
          }),
          (n.reject = function (e) {
            return new n(function (o, n) {
              n(e);
            });
          }),
          (n.race = function (e) {
            return new n(function (o, n) {
              for (var t = 0, i = e.length; t < i; t++) e[t].then(o, n);
            });
          }),
          (n._immediateFn =
            ('function' == typeof setImmediate &&
              function (e) {
                setImmediate(e);
              }) ||
            function (e) {
              c(e, 0);
            }),
          (n._unhandledRejectionFn = function (e) {
            'undefined' != typeof console &&
              console &&
              console.warn('Possible Unhandled Promise Rejection:', e);
          }),
          (n._setImmediateFn = function (e) {
            n._immediateFn = e;
          }),
          (n._setUnhandledRejectionFn = function (e) {
            n._unhandledRejectionFn = e;
          }),
          'undefined' != typeof module && module.exports
            ? (module.exports = n)
            : e.Promise || (e.Promise = n);
      })(this);
      var $___var_b4cc897e990275e6,
        $___var_df79bd5e40832143 = [],
        $___var_7506a65d2446be7d = {
          version: '1.9.0',
          geTimesLoaded: ((prodconfig && prodconfig.geTimesLoaded) || 0) + 1,
          geLoadingInitiated: !!prodconfig && prodconfig.geLoadingInitiated,
          loadAtBottom: !1,
          gedebug: localStorage.getItem('ge-debug-overwrite') || !1,
          timeoutval: 1500,
          retryCount: 3,
          crossdomain: !0,
          attDomain: 'https://www.att.com',
          xddomains: ['https://www.att.com', 'https://www.directv.com'],
          attLoad: !1,
          moonrakerPath: '/apis/personalization/goldeneye/uuidgenerator',
          loginPages: [
            '/myatt/#/accountOverview',
            '/my/#/accountOverview',
            '/acctmgmt/accountoverview',
          ],
          domainRegexes: {
            attRegexDomain: /(m|www)+.att.com/,
            dtvRegexDomain: /(m|www)+.directv.com/,
            dtvNowRegexDomain: /(m|www)+.atttvnow.com/,
            engageDtvRegexDomain: /beta.directvnow.com|vid.att.com/,
          },
          eventsFlag: !0,
          eventsServiceURL: '/apis/personalization/goldeneye/event/update',
          pushNotifyEventsFlag: !0,
          userEnteredZipEventFlag: !0,
          checkAvailEventFlag: !0,
          checkAvailServiceURL: '/apis/personalization/goldeneye/event/saveca',
          cartModifiedEventFlag: !0,
          goldolamURL: '/scripts/goldeneye/scripts/goldolam.js',
          goldolamFlag: !0,
          mcmidServiceUrl: '/apis/personalization/goldeneye/profileservice/saveinfo',
          anonymousMCMIDFlag: !0,
          edgeConfig: {
            url: 'https://www.att.com/msapi/personalization/v1/experienceinfo',
            searchAnonymous: !0,
            searchTermFlag: !0,
            pageVisitFlag: !0,
          },
          releaseDate: '$Date: 2020-11-25 13:12:22 -0800 (Wed, 25 Nov 2020) $',
        },
        $___var_b1f52d86ebab9e85 = document.location.origin,
        $___var_e1924529f9480537 = prodconfig.domainRegexes;
      z = $___var_b4cc897e990275e6;
      acctOverviewSlid = $___var_df79bd5e40832143;
      prodconfig = $___var_7506a65d2446be7d;
      dom = $___var_b1f52d86ebab9e85;
      domainRegexes = $___var_e1924529f9480537;
      prodconfig.attLoad = domainRegexes.attRegexDomain.test(dom);
      var $___var_ffa925ec8db7340d = prodconfig.xddomains.indexOf(dom);
      domXDIndex = $___var_ffa925ec8db7340d;
      for (
        domXDIndex > -1 && prodconfig.xddomains.splice(domXDIndex, 1),
          prodconfig.gedebug &&
            console.log('goldeneye::xddomains to check would be: ', prodconfig.xddomains),
          z = 0;
        z < prodconfig.loginPages.length;
        z++
      )
        acctOverviewSlid[z] = dom + prodconfig.loginPages[z];
      var $___var_8a4f8523c9c5e54d = GoldenEye || null,
        $___var_f29302542c49c06a =
          globalUUIDPromise ||
          new Promise(function (e, o) {
            prodconfig.loadAtBottom && 'complete' !== document.readyState
              ? (prodconfig.gedebug && console.log('goldeneye:: DOM is ' + document.readyState),
                (document.onreadystatechange = function () {
                  'complete' === document.readyState &&
                    (prodconfig.geLoadingInitiated
                      ? prodconfig.gedebug &&
                        console.log('goldeneye:: already loaded thru the setTimeout')
                      : (prodconfig.gedebug &&
                          console.log('goldeneye:: DOM is now complete and loading GE'),
                        golden(e, o, prodconfig)));
                }))
              : (prodconfig.gedebug &&
                  console.log('goldeneye::DOM Completed for load testing check or Flag off'),
                golden(e, o, prodconfig)),
              setTimeout(function () {
                ((!prodconfig.geLoadingInitiated && null === GoldenEye) ||
                  'null' === GoldenEye ||
                  void 0 === GoldenEye ||
                  'undefined' === GoldenEye) &&
                  (prodconfig.gedebug &&
                    console.log('goldeneye::goldeneye still not loaded after 5000ms, load now'),
                  golden(e, o, prodconfig));
              }, 5000);
          });
      GoldenEye = $___var_8a4f8523c9c5e54d;
      globalUUIDPromise = $___var_f29302542c49c06a;
      function $___var_b235b74762c11a4f (e, o, n) {
        prodconfig.geLoadingInitiated ||
          (prodconfig.gedebug && console.log('goldeneye::goldeneye initiating'),
          (prodconfig.geLoadingInitiated = !0),
          (GoldenEye =
            GoldenEye ||
            (function (n) {
              var t = {};
              if (!n) throw 'goldeneye::Configuration missing';
              var i = n,
                r = n.gedebug,
                a = n.timeoutval,
                s = n.retryCount,
                l = n.xddomains,
                c = n.attDomain,
                d = n.attLoad,
                u = n.moonrakerPath,
                g = n.eventsFlag,
                f = n.eventsServiceURL,
                m = n.pushNotifyEventsFlag,
                v = n.userEnteredZipEventFlag,
                p = n.checkAvailEventFlag,
                y = n.checkAvailServiceURL,
                h = n.goldolamURL,
                w = n.goldolamFlag,
                k = n.mcmidServiceUrl,
                U = n.anonymousMCMIDFlag,
                S = n.edgeConfig;
              D('goldeneye::total-time-for-goldeneye'),
                void 0 === location.origin &&
                  (location.origin = location.protocol + '//' + location.host);
              var _ = location.origin;
              function D (e) {
                r && console.time(e);
              }
              function T (e) {
                r && console.timeEnd(e);
              }
              'undefined' == typeof console &&
                (console = {
                  log: function () {},
                  debug: function () {},
                  info: function () {},
                  error: function () {},
                }),
                (t.getDebug = function () {
                  console.log('goldeneye::Debug is ' + r + ' config.gedebug = ' + i.gedebug);
                }),
                (t.showConfig = function () {
                  return r && console.log('goldeneye::config: ' + i), i;
                });
              var b = { alluuids: {}, countRestCalls: 0 };
              function I (e) {
                return 'undefined' !== e && void 0 !== e && 'null' !== e && null !== e;
              }
              function x (e) {
                return new Promise(function (o, n) {
                  if (
                    (r && console.log('goldeneye::postXhr ', e),
                    I(e) && I(e.serviceUrl) && '' != e.serviceUrl)
                  ) {
                    var t = new XMLHttpRequest();
                    t.open('POST', e.serviceUrl, !0),
                      (t.timeout = a),
                      (t.ontimeout = function () {
                        n('timeout');
                      }),
                      e.withCredentials && (t.withCredentials = !0),
                      e.contentType && t.setRequestHeader('Content-type', e.contentType),
                      (t.onreadystatechange = function () {
                        4 === t.readyState &&
                          (200 === t.status ? o(t.responseText) : n('error: post xhr failed'));
                      }),
                      t.send(e.payload),
                      b.countRestCalls++;
                  } else n('error: post configuration missing required parameters');
                });
              }
              (t.geGetXhr = function (e, o) {
                return new Promise(function (n, t) {
                  var i = new XMLHttpRequest();
                  (i.withCredentials = !0),
                    i.open('GET', e, !0),
                    (i.timeout = o || a),
                    (i.ontimeout = function () {
                      t('timeout');
                    }),
                    (i.onreadystatechange = function () {
                      4 === i.readyState &&
                        (200 === i.status
                          ? n(i.responseText)
                          : t('error: Network Error during xhr get call (' + i.status + ')'));
                    }),
                    r && console.log('goldeneye::geGetXhr to ' + e),
                    i.send(),
                    b.countRestCalls++;
                });
              }),
                (t.gePostXhr = x);
              var E = function (e) {
                return (
                  /^[0-9]+$/.test(e) ||
                  /^([0-9a-f])+\-([0-9a-f])+\-([0-9a-f])+\-([0-9a-f])+\-([0-9a-f])+$/.test(e) ||
                  /^DTV/.test(e) ||
                  /^[A-Fa-f0-9]{65}$/.test(e)
                );
              };
              (t.verifyUUIDFormat = E),
                (t.checkForUUIDCookie = function () {
                  for (var o = /UUID/, n = document.cookie.split(';'), t = 0; t < n.length; t++)
                    n[t].match(o) &&
                      ((uuidval = n[t].split('=')[1]),
                      (b.alluuids[uuidval] = new Date().getTime()),
                      e('goldeneye::UUID cookie found in browser'));
                });
              var C = function (e) {
                  var o = [];
                  if (I((e = '; ' + e))) {
                    var n = e.split('; UUID=');
                    if (I(n) && n.length >= 2) {
                      n.shift();
                      for (var t = 0; t < n.length; t++) {
                        var i = n[t].split(';').shift();
                        o.push(i);
                      }
                    }
                  }
                  return o;
                },
                P = function (e) {
                  var o,
                    n = C(document.cookie),
                    t =
                      (function (e) {
                        if (!I(e))
                          return (
                            r && console.log('goldeneye::there are no valid UUID cookies'), null
                          );
                        for (var o = 0; o < e.length; o++) if (I(e[o]) && E(e[o])) return e[o];
                      })(n) || '';
                  return (
                    (o = (function (e) {
                      document.cookie =
                        'UUID=' +
                        t +
                        '; path=/; domain=' +
                        e +
                        '; expires=Thu, 01 Jan 1973 00:00:01 GMT; max-age=-9999; secure';
                      var o = C(document.cookie),
                        i = (function (e, o) {
                          for (var n = [], t = 0; t < e.length; t++)
                            o.indexOf(e[t]) < 0 && n.push(e[t]);
                          return n;
                        })(n, o);
                      return i.length ? i[0] : null;
                    })(e)),
                    r && console.log('goldeneye::deleting all known subdomain cookies'),
                    (document.cookie =
                      'UUID=' +
                      t +
                      '; path=/; domain=.att.com; expires=Thu, 01 Jan 1973 00:00:01 GMT; max-age=-9999; secure'),
                    (document.cookie =
                      'UUID=' +
                      t +
                      '; path=/; domain=www.att.com; expires=Thu, 01 Jan 1973 00:00:01 GMT; max-age=-9999; secure'),
                    r && console.log('goldeneye::.www.att.com cookies is ', o),
                    o
                  );
                };
              t.cookieValueInDomain = P;
              var R = (function () {
                var e = ('; ' + document.cookie).split('; UUID=');
                if (2 == e.length) {
                  var o = e.pop().split(';').shift();
                  if (I(o) && E(o))
                    return r && console.log('goldeneye::there is a valid uuid cookie'), o;
                  r && console.log('goldeneye::there is an invalid UUID cookie (' + o + ')');
                } else if (e.length > 2) {
                  r && console.log('goldeneye::there is more than 1 UUID cookie');
                  var n = P('www.att.com');
                  if (I(n) && E(n))
                    return (document.cookie = 'UUID=' + n + ';' + F() + ';path=/;secure'), n;
                  r &&
                    console.log(
                      'goldeneye::the authoratative domain cookie is not valid, should be deleted instead'
                    );
                }
                return null;
              })();
              function O (e, o) {
                (D('goldeneye::time-for-cookieExists'),
                r &&
                  console.log(
                    'goldeneye::cookie::1a::Entered into cookieExist() function to check for UUID cookie'
                  ),
                I(R) && E(R))
                  ? (r &&
                      console.log(
                        'goldeneye::cookie::COMPLETE::UUID cookie::' +
                          R +
                          ' already existed in ' +
                          _ +
                          ', do nothing'
                      ),
                    e('goldeneye::UUID cookie found in browser'))
                  : (r &&
                      console.log(
                        'goldeneye::cookie::1b::No UUID cookie exists in ' +
                          _ +
                          ' domain, so making crossdomain call to att domain'
                      ),
                    new Promise(function (e, o) {
                      !(function e (o, n, t, i, a) {
                        var s = t[n];
                        var l = {
                          remoteUrl: s + '/scripts/goldeneye/cookieCheck.html',
                          type: o,
                          xddomain: s,
                          count: n,
                        };
                        try {
                          r &&
                            console.log('goldeneye::cookie::1::setting up cross domain for ' + s);
                          var c = new j(l);
                          c.messageReceived.then(function (l) {
                            c.stop(),
                              r &&
                                console.log(
                                  'goldeneye::cookie::3::message is received from ' + s + '!'
                                );
                            var d = G(l);
                            r && console.log('goldeneye::cookie::3b::validated message: ', d),
                              '' === d[o] && n < t.length - 1
                                ? (r &&
                                    console.log(
                                      'goldeneye::cookie::5a::no cookie (' +
                                        o +
                                        ') was found, going to check next domain'
                                    ),
                                  e(o, n + 1, t, i, a))
                                : '' !== d[o]
                                ? (r &&
                                    console.log(
                                      'goldeneye::cookie::6::COMPLETE::Cookie (' +
                                        o +
                                        ') is found from ' +
                                        s +
                                        '!'
                                    ),
                                  i(d))
                                : (r &&
                                    console.log(
                                      'goldeneye::cookie::6::COMPLETE::tried searching all domains, no cookie was found'
                                    ),
                                  a(d));
                          });
                        } catch (l) {
                          n < t.length - 1
                            ? (r &&
                                console.log(
                                  'goldeneye::cookie::5::error occurred trying to call cross domain for ' +
                                    s
                                ),
                              e(o, n + 1, t, i, a))
                            : (r &&
                                console.log(
                                  'goldeneye::cookie::6::COMPLETE::tried searching all domains, error occurred and no cookie was found'
                                ),
                              a({ uuid: '' }));
                        }
                      })('uuid', 0, l, e, o);
                    }).then(
                      function (o) {
                        r &&
                          console.log(
                            'goldeneye::cookie::7::successfully completed checking xdomain and found a cookie!'
                          ),
                          L(o.uuid),
                          e(
                            'goldeneye::UUID cookie was found from xddomain, set into current domain'
                          ),
                          T('goldeneye::time-for-cookieExists');
                      },
                      function (n) {
                        n &&
                          r &&
                          console.log(
                            'goldeneye::cookie::7::error occurred trying to retrieve UUID from xddomain: ',
                            n
                          ),
                          new Promise(function (e, o) {
                            M(e, o);
                          }).then(
                            function (o) {
                              e('goldeneye::UUID cookie set after xdomain and Ajax call'),
                                d && z();
                            },
                            function () {
                              o('goldeneye::cookie not found after xdomain and Ajax (att)');
                            }
                          ),
                          T('goldeneye::time-for-cookieExists');
                      }
                    ));
                T('goldeneye::time-for-cookieExists');
              }
              (t.cookieExists = O),
                (t.getRestCallCount = function () {
                  return b.countRestCalls;
                }),
                (t.showStats = function () {
                  console.log('show stats collection: ' + b);
                }),
                (t.deleteCookie = function (e) {
                  document.cookie = e + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                });
              var A = function (e) {
                var o = '',
                  n = ('; ' + document.cookie).split('; ' + e + '=');
                return n.length > 1 && (o = n.pop().split(';').shift()), o;
              };
              function F () {
                var e = new Date();
                return (
                  e.setTime(e.getTime() + 2147472000000),
                  r &&
                    console.log('goldeneye::Setting the cookie expiration to:' + e.toUTCString()),
                  'expires=' + e.toUTCString()
                );
              }
              function L (e) {
                I(e) && E(e) && (document.cookie = 'UUID=' + e + ';' + F() + ';path=/;secure');
              }
              (t.getCookie = A), (t.getCookieExpire = F), (t.setCookie = L);
              var N = 0;
              function M (e, o) {
                const $___old_aff84ce14ee3cbb9 = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'XMLHttpRequest'
                  ),
                  $___old_2bab7b292d6ae400 = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'XMLHttpRequest'
                  );
                try {
                  if ($___old_aff84ce14ee3cbb9)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___stub_5e1b81c00d598b73.XMLHttpRequest
                    ));
                  if ($___old_2bab7b292d6ae400)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___stub_5e1b81c00d598b73.XMLHttpRequest
                    ));
                  return function () {
                    D('goldeneye::time-for-createCookieRest'),
                      b.countRestCalls++,
                      r && console.log('goldeneye::Servicecall started..!');
                    var n = c + u,
                      t = new XMLHttpRequest();
                    (t.withCredentials = !0),
                      t.open('GET', n, !0),
                      (t.timeout = a),
                      (t.ontimeout = function () {
                        r &&
                          console.error(
                            'goldeneye:: The request (#' +
                              N +
                              ') for Service call ' +
                              n +
                              ' timed out. So do retry'
                          ),
                          D('goldeneye::time-for-createCookieRestRetry'),
                          N < s
                            ? (M(e, o), N++)
                            : (r &&
                                console.log('goldeneye::Servicecall completed all retries::' + s),
                              o('goldeneye::Servicecall failed all retries')),
                          T('goldeneye::time-for-createCookieRestRetry');
                      }),
                      (t.onreadystatechange = function () {
                        if (4 === t.readyState)
                          if (200 === t.status) {
                            if (null !== t.responseText && '' !== t.responseText) {
                              var n = JSON.parse(t.responseText);
                              I(n) && I(n.uuid) && E(n.uuid)
                                ? (dom !== c
                                    ? (r &&
                                        console.log(
                                          'Got the UUID cookie value: ' +
                                            n.uuid +
                                            ' from the service call..So setting it into ' +
                                            _ +
                                            ' domain.'
                                        ),
                                      L(n.uuid))
                                    : r &&
                                      console.log(
                                        'goldeneye::Got the UUID cookie value, but not setting client side'
                                      ),
                                  e(
                                    'goldeneye::UUID cookie received from the ajax call and set into domain'
                                  ))
                                : (r &&
                                    console.error(
                                      'goldeneye::Got invalid  UUID cookie value/response from the service call..So not setting to cookie.'
                                    ),
                                  o('goldeneye::Not a valid UUID Cookie from ajax call'));
                            }
                          } else o('goldeneye::Network Error during UUID cookie ajax call');
                      }),
                      t.send(null),
                      T('goldeneye::time-for-createCookieRest');
                  }.apply(this, arguments);
                } finally {
                  if ($___old_aff84ce14ee3cbb9)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___old_aff84ce14ee3cbb9
                    ));
                  if ($___old_2bab7b292d6ae400)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___old_2bab7b292d6ae400
                    ));
                }
              }
              function j (e) {
                var o,
                  n,
                  t,
                  i,
                  a,
                  s = !1,
                  l = !1,
                  c = location.origin.replace(/http(s)?:\/\//, ''),
                  d = {
                    remote: e.remoteUrl,
                    props: { src_parameters: 'xdm_ge=' + encodeURIComponent(c) },
                    iframe_prefix: 'gexd',
                  };
                if (!d.remote || !/.html/.test(d.remote))
                  return console.error('goldeneye::xdMessageHandler requires remote html url'), !1;
                window.addEventListener
                  ? ((o = function (e, o, n) {
                      e.addEventListener(o, n, !1);
                    }),
                    (n = function (e, o, n) {
                      e.removeEventListener(o, n, !1);
                    }))
                  : window.attachEvent &&
                    ((o = function (e, o, n) {
                      e.attachEvent('on' + o, n);
                    }),
                    (n = function (e, o, n) {
                      e.detachEvent('on' + o, n);
                    }));
                var u = function (o) {
                    l = !0;
                    var n = o.origin || o.domain;
                    if (
                      (r &&
                        console.log(
                          "goldeneye::cookie::2d::received message '" + o.data + "' from " + n
                        ),
                      'string' == typeof o.data &&
                        n === e.xddomain &&
                        o.source === frame.contentWindow)
                    ) {
                      var t = { message: o.data, origin: n, frameWindow: a };
                      i(t);
                    } else
                      r &&
                        console.log(
                          'crossDomain::message from this source (' + n + ') is not allowed'
                        );
                  },
                  g = function (t) {
                    if ('gexd-ready' == t.data && t.origin === e.xddomain) {
                      r && console.log('goldeneye::cookie::2b::child iframe is ready'),
                        (a =
                          'postMessage' in frame.contentWindow
                            ? frame.contentWindow
                            : frame.contentWindow.document),
                        n(window, 'message', g),
                        r &&
                          console.log(
                            'goldeneye::cookie::2c::adding receiveMessage event listener'
                          ),
                        o(window, 'message', u);
                      a.postMessage('gexd calling att domain', e.xddomain);
                    }
                  },
                  f = function () {
                    l ||
                      (r &&
                        console.log(
                          'goldeneye::cookie::2e::too long waiting for iframe, resolve with no UUID'
                        ),
                      n(window, 'message', g),
                      i(''));
                  };
                return (
                  o(window, 'message', g),
                  (t = new Promise(function (e, o) {
                    (i = e), o;
                  })),
                  (frame = (function () {
                    r && console.log('goldeneye::cookie::2a::setting up iframe'),
                      (d.props.src =
                        d.remote +
                        (-1 == d.remote.indexOf('?') ? '?' : '&') +
                        d.props.src_parameters),
                      (d.props.name = d.iframe_prefix + '_provider_' + e.count);
                    var o = document.createElement('IFRAME');
                    return (
                      (o.id = o.name = d.props.name),
                      (o.src = d.props.src),
                      (o.style = 'position:absolute,top:-2000px,left:0px;display:none'),
                      o.setAttribute('aria-hidden', 'true'),
                      (o.border = o.frameBorder = 0),
                      (o.allowTransparency = !0),
                      (o.title = 'goldeneye_internal'),
                      o
                    );
                  })()),
                  new Promise(function (e, o) {
                    var n = !1;
                    'readyState' in document
                      ? (document.readyState,
                        (n =
                          'complete' == document.readyState ||
                          'interactive' == document.readyState ||
                          'loaded' == document.readyState))
                      : (n = !!document.body),
                      n
                        ? (r &&
                            console.log(
                              'goldeneye::cookie::DOM content is already done, continue'
                            ),
                          e())
                        : (r && console.log('goldeneye::windowLoad::DOM content is not ready yet'),
                          document.addEventListener('DOMContentLoaded', function () {
                            r &&
                              console.log(
                                'goldeneye::windowLoad::DOM content is now ready continue'
                              ),
                              e();
                          }));
                  }).then(function () {
                    s || (document.body.appendChild(frame), setTimeout(f, 1000)), (s = !0);
                  }),
                  {
                    messageReceived: t,
                    stop: function () {
                      n(window, 'message', u);
                    },
                  }
                );
              }
              t.createCookieRest = M;
              var G = function (e) {
                const $___old_e1db7e424015f773 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                );
                try {
                  if ($___old_e1db7e424015f773)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___stub_3ac875f7196a9c3f.sessionStorage
                    ));
                  return function () {
                    var o = e.message,
                      n = e.origin,
                      t = dom === c;
                    sessionStorage.setItem('goldeneye_xdchk', 'chkd'),
                      r &&
                        console.log('goldeneye::cookie::4a::cross domain received message: ', o);
                    var i = (function (e) {
                      var o = '';
                      return (
                        I(e) &&
                          (r && console.log('goldeneye::messages: ', e),
                          0 === e.indexOf('goldeneye u') && (o = e.substring(12))),
                        { uuid: o }
                      );
                    })(o);
                    r && console.log('goldeneye::cookie::4ai::values from xd: ', i);
                    var a = i.uuid || '';
                    return (
                      I(a) &&
                      ((!t && E(a)) ||
                        (t &&
                          /^([0-9a-f])+\-([0-9a-f])+\-([0-9a-f])+\-([0-9a-f])+\-([0-9a-f])+$/.test(
                            a
                          )))
                        ? r &&
                          console.log(
                            'goldeneye::cookie::4b::Got the UUID cookie ' + a + ' from ' + n + '.'
                          )
                        : (r &&
                            console.log('goldeneye::cookie::4c::No valid UUID cookie available'),
                          (a = '')),
                      { uuid: a }
                    );
                  }.apply(this, arguments);
                } finally {
                  if ($___old_e1db7e424015f773)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___old_e1db7e424015f773
                    ));
                }
              };
              r && console.log('goldeneye::Now Main'),
                new Promise(function (e, o) {
                  O(e, o);
                }).then(
                  function () {
                    e('goldeneye::UUID cookie found');
                  },
                  function () {
                    o('goldeneye::UUID cookie not found');
                  }
                );
              var V = function () {
                if (g)
                  var e = document.getElementsByTagName('head')[0],
                    o = [],
                    n = 0,
                    t = function (e, o) {
                      for (
                        var n = !0,
                          t = function (n) {
                            for (var t = o[n], i = e[n], r = !1, a = 0; a < t.length; a++)
                              if (t[a] === i) return (r = !0), !0;
                            return r;
                          },
                          i = Object.keys(o),
                          r = 0;
                        r < i.length;
                        r++
                      ) {
                        var a = i[r],
                          s = o[a];
                        if ('object' == typeof s) {
                          if (!t(a)) return (n = !1), !1;
                        } else if ('function' == typeof s) {
                          if (!(n = s(e))) return !1;
                        } else if (e[a] !== s) return (n = !1), !1;
                      }
                      return n;
                    },
                    i = function (e, o) {
                      for (var n = 0; n < o.length; n++) {
                        var i = o[n];
                        if (((satisfies = t(e, i.conditions)), satisfies))
                          return i.customEventName ? i.customEventName : e.eventAction;
                      }
                      return '';
                    },
                    a = function (e) {
                      if (I(e))
                        for (n = 0; n < o.length; n++) {
                          var t = '',
                            r = o[n].events[e.eventAction];
                          r && (t = r.filters ? i(e, r.filters) : e.eventAction),
                            '' !== t && o[n].callback(t, e);
                        }
                    },
                    s = function () {
                      if (
                        (e.addEventListener('DM_Event', function (e) {
                          I(e.detail) && I(e.detail.data) && a(e.detail.data);
                        }),
                        window.ddo && ddo.getVar('events'))
                      )
                        for (var o = ddo.getVar('events'), n = o.length, t = 0; t < n; t++)
                          a(o[t]);
                    };
                else
                  s = function () {
                    r && console.log('goldeneye::events::init:: events flag is turned off');
                  };
                return {
                  startListening: s,
                  track: function (e) {
                    e && e.events && e.callback && o && o.push(e);
                  },
                  listeners: o,
                };
              };
              function z () {
                var e = '; ' + document.cookie;
                if (I(e)) {
                  var o = e.split('; UUID=');
                  if (I(o) && o.length > 2) {
                    var n;
                    r && console.log('goldeneye::deleting .att.com cookie'), o.shift();
                    for (var t = 0; t < o.length; t++) {
                      var i = o[t].split(';').shift();
                      /^\d+$/.test(i) && (n = i);
                    }
                    n && L(n),
                      (document.cookie =
                        'UUID=; path=/; domain=.att.com; expires=Thu, 01 Jan 1973 00:00:01 GMT; secure');
                  }
                }
              }
              !(function () {
                const $___old_cb618a55688b64c1 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                );
                try {
                  if ($___old_cb618a55688b64c1)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___stub_3ac875f7196a9c3f.sessionStorage
                    ));
                  return function () {
                    if (d && g) {
                      var e = {
                          events:
                            ((s = [
                              {
                                conditions: {
                                  _evtFriendlyPageName: [
                                    'DS Cart Summary Pg',
                                    'DS Upgrade Cart Summary Pg',
                                    'Mbl-HRock Wireless Cart Summary Pg',
                                  ],
                                  _evtFlowCode: ['DSUP', 'HRUP~W', 'HRUPX~W'],
                                },
                                customEventName: 'CSVEVT',
                              },
                              {
                                conditions: {
                                  _evtPageURL: [
                                    '/checkout/onepagecheckout.html',
                                    '/cart/onepagecheckoutcart.html',
                                  ],
                                  _evtLineOfBusiness: 'Wireless',
                                  _evtFlowCode: ['HRUP~W', 'DSUP', 'HRUPX'],
                                },
                                customEventName: 'CSVEVT',
                              },
                              {
                                conditions: {
                                  _evtPageURL: [
                                    '/checkout/onepagecheckout.html',
                                    '/cart/onepagecheckoutcart.html',
                                  ],
                                  _evtFriendlyPageName: [
                                    'DS Upgrade Cart Summary Pg',
                                    'DS Upgrade Order Review Pg',
                                  ],
                                },
                                customEventName: 'CSVEVT',
                              },
                              {
                                conditions: {
                                  _evtPageURL: [
                                    '/shop/xpress/upgrade-eligibility.html',
                                    '/buy/wireless/upgrade-eligibility',
                                  ],
                                  _evtLineOfBusiness: 'Wireless',
                                },
                                customEventName: 'UEEVT',
                              },
                              {
                                conditions: {
                                  _evtFriendlyPageName: [
                                    'DS Upgrade Device Recommender Pg',
                                    'DS Wireless Device List Pg',
                                  ],
                                  _evtFlowCode: 'DSUP',
                                },
                                customEventName: 'UEEVT',
                              },
                            ]),
                            {
                              pageLoad: { filters: s },
                              Page_Load: { filters: s },
                              formResponse: {
                                filters: [
                                  {
                                    conditions: {
                                      eventCode: [
                                        'DS_Add_To_Cart_Submit',
                                        'Mbl-HRock_Cart_Add_Submit',
                                        'DS_Upgrade_Cart_Add_Submit',
                                        'DS_Upgrade_Cart_Preorder_Submit',
                                      ],
                                      _evtLineOfBusiness: 'Wireless',
                                      _evtFlowCode: ['DSUP', 'HRUP~W', 'HRUPX'],
                                      ContractType: function (e) {
                                        return (
                                          (null !== e.contractType && void 0 !== e.contractType) ||
                                          (null !== e.ContractType && void 0 !== e.ContractType)
                                        );
                                      },
                                    },
                                    customEventName: 'CAEVT',
                                  },
                                ],
                              },
                            }),
                          callback: function (e, o) {
                            var n = {
                              evt: e,
                              ban: (function () {
                                var e = '';
                                if (ddo) {
                                  var o = ddo.getVar('user.account.wirelessAccountNumber'),
                                    n = ddo.getVar('user.account.ban');
                                  o && 'Default' !== o ? (e = o) : n && 'Default' !== n && (e = n);
                                }
                                if ('' === e) {
                                  var t = JSON.parse(sessionStorage.getItem('exUpProfile'));
                                  t &&
                                    t.ProfileInfo &&
                                    t.ProfileInfo.billingAccountNumber &&
                                    (e = t.ProfileInfo.billingAccountNumber);
                                }
                                return e;
                              })(),
                            };
                            r &&
                              console.log(
                                'goldeneye::Will POST this event data:',
                                JSON.stringify(n)
                              );
                            var t = {
                              serviceUrl: c + f,
                              payload: JSON.stringify(n),
                              contentType: 'application/json',
                              withCredentials: !0,
                            };
                            x(t).then(
                              function (e) {
                                r && console.log(e);
                              },
                              function (e) {
                                r && console.error('goldeneye::event listener post ', e);
                              }
                            );
                          },
                        },
                        o = {
                          events: {
                            formResponse: {
                              filters: [{ conditions: { eventCode: 'DS_Check_Avail_Submit' } }],
                            },
                          },
                          callback: function (e, o) {
                            for (
                              var n = [
                                  'dwellingType',
                                  'dtvAvailResult',
                                  'qualCriteria',
                                  'eligResult',
                                  'connectedComm',
                                  'dtvConnectedComm',
                                  'userResp',
                                  'addressId',
                                  'eluid',
                                  'newCoEligFlag',
                                  'jointBillDiscountInfo',
                                  'customerGigapowerIntentFlag',
                                  'singleDispatchFlag',
                                  'statusCode',
                                  'successFlag',
                                  'errorType',
                                  'gigaAvailResult',
                                  'iptvAvailResult',
                                  'voipAvailResult',
                                  'hsiaAvailResult',
                                  'wirelessAvailResult',
                                  'uverseTransportType',
                                  'existingServiceSummary',
                                  'addressType',
                                  'wlHpAvailResult',
                                  'ckavBundleIntent',
                                  'dslAvailResult',
                                  'businessFiberAvailResult',
                                  'potsAvailResult',
                                  'wllInternetAvailResult',
                                  'cAFIIIndicator',
                                ],
                                t = n.slice(),
                                i = Object.keys(o),
                                a = {},
                                s = 0;
                              s < i.length;
                              s++
                            ) {
                              var l = i[s];
                              n.indexOf(l) > -1 && ((a[l] = o[l]), r && t.splice(t.indexOf(l), 1));
                            }
                            if (I(a) && I(a.userResp)) {
                              r &&
                                Object.keys(a).length !== n.length &&
                                console.log('goldeneye::events::missing attributes: ' + t);
                              var d = {
                                serviceUrl: c + y,
                                payload: JSON.stringify(a),
                                contentType: 'application/json',
                                withCredentials: !0,
                              };
                              x(d).then(
                                function (e) {
                                  r &&
                                    console.log(
                                      'goldeneye::events::checkavailability::Successful response: ',
                                      e
                                    );
                                },
                                function (e) {
                                  r &&
                                    console.log(
                                      'goldeneye::events::checkavailability::error sending to service: ',
                                      e
                                    );
                                }
                              );
                            } else
                              r &&
                                console.log(
                                  'goldeneye::events::checkavailability:: there are no attributes to send or required not present'
                                );
                          },
                        },
                        t = {
                          events: {
                            virtualPageLoad: {
                              filters: [
                                {
                                  conditions: {
                                    _evtFriendlyPageName: 'HRUverse Shop Bundle Pg',
                                    _evtFlowCode: 'DSPRO',
                                  },
                                  customEventName: 'USPRZIP',
                                },
                              ],
                            },
                            formResponse: {
                              filters: [
                                {
                                  conditions: { eventCode: 'DS_Check_Avail_Submit' },
                                  customEventName: 'USPRZIP',
                                },
                              ],
                            },
                          },
                          callback: function (e, o) {
                            var n, t, i;
                            if (
                              (o && o.userResp && o.userResp.length > 0
                                ? (n = o.userResp.slice(-5))
                                : o && o._evtZipCode && (n = o._evtZipCode),
                              window.localStorage &&
                                window.localStorage.getItem('zippyFlow') &&
                                ((t = JSON.parse(window.localStorage.getItem('zippyFlow')).county),
                                (i = JSON.parse(window.localStorage.getItem('zippyFlow'))
                                  .countycode)),
                              r &&
                                console.log('goldeneye::events::eligResult is : ', o.eligResult),
                              I(n) &&
                                n.length > 0 &&
                                !isNaN(n) &&
                                o.eligResult &&
                                -1 ===
                                  ['Multiple Counties', 'Out of Footprint'].indexOf(o.eligResult))
                            ) {
                              r && console.log('goldeneye::events::userEnteredZip is : ', n),
                                r &&
                                  console.log('goldeneye::events::userEnteredCountyCode is : ', i);
                              var a = { evtPayload: { evtName: e, zip: n }, evtType: 'online' };
                              I(i) && i.length > 0 && (a.evtPayload.countyCode = i),
                                I(t) &&
                                  t.length > 0 &&
                                  'SINGLE_COUNTY' !== t &&
                                  (a.evtPayload.county = t);
                              var s = {
                                serviceUrl: S.url,
                                payload: JSON.stringify(a),
                                contentType: 'application/json',
                                withCredentials: !0,
                              };
                              x(s).then(
                                function (e) {
                                  r &&
                                    console.log(
                                      'goldeneye::events::userEnteredZip::Successful response: ',
                                      e
                                    );
                                },
                                function (e) {
                                  r &&
                                    console.log(
                                      'goldeneye::events::userEnteredZip::error sending to service: ',
                                      e
                                    );
                                }
                              );
                            } else
                              r &&
                                console.log(
                                  'goldeneye::events::userEnteredZip:: there are no attributes to send or required not present'
                                );
                          },
                        },
                        i = {
                          events: {
                            pageLoad: {
                              filters: [
                                {
                                  conditions: { _evtPageURL: ['/buy/cart'] },
                                  customEventName: 'IDPAREVT',
                                },
                              ],
                            },
                            formResponse: {
                              filters: [
                                {
                                  conditions: {
                                    eventCode: [
                                      'DS_Add_To_Cart_Submit',
                                      'DS_Cart_Update_Submit',
                                      'DS_Remove_Cart_Submit',
                                      'DS_Upgrade_Plan_Submit',
                                      'DS_Upgrade_Cart_Add_Submit',
                                      'DS_Upgrade_Cart_Preorder_Submit',
                                    ],
                                    _evtLineOfBusiness: 'Wireless',
                                  },
                                  customEventName: 'IDPAREVT',
                                },
                              ],
                            },
                          },
                          callback: function (e, o) {
                            sessionStorage.setItem('p13n_crt_modify', 'true');
                          },
                        },
                        a = new V();
                      m && a.track(e),
                        p && !/^([0-9])+$/.test(R) && '' === A('TATS-SS-TokenID') && a.track(o),
                        v && a.track(t),
                        n.cartModifiedEventFlag &&
                          'true' !== sessionStorage.getItem('p13n_crt_modify') &&
                          a.track(i),
                        a.startListening();
                    }
                    var s;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_cb618a55688b64c1)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___old_cb618a55688b64c1
                    ));
                }
              })(),
                (t.checkForDoubleUUID = z),
                w &&
                  document
                    .getElementsByTagName('head')[0]
                    .addEventListener('DM_Event', function (e) {
                      if (
                        (function (e) {
                          return (
                            I(e.detail) &&
                            I(e.detail.data) &&
                            'pageLoad' === e.detail.data.eventAction &&
                            (acctOverviewSlid.indexOf(e.detail.data._evtAddressBarFullURL) > -1 ||
                              acctOverviewSlid.indexOf(dom + e.detail.data._evtPageURL) > -1) &&
                            ['myATT Account Overview Pg', 'myATT CBO Welcome Pg'].indexOf(
                              e.detail.data._evtFriendlyPageName
                            ) > -1
                          );
                        })(e)
                      ) {
                        var o = document.createElement('script');
                        (o.type = 'text/javascript'),
                          (o.async = !0),
                          (o.src = c + h),
                          document.getElementsByTagName('head')[0].appendChild(o),
                          r && console.log('goldeneye::calling goldolam.js...');
                      }
                    });
              var B = function (e) {
                if (I(e) && '' !== e) {
                  var o = { evtPayload: e, evtType: 'online' };
                  r && console.log('associate::the payload is ', JSON.stringify(o));
                  var n = new XMLHttpRequest();
                  n.open('POST', S.url, !0),
                    (n.timeout = 2000),
                    (n.ontimeout = function () {
                      r && console.log('associate::timed out');
                    }),
                    (n.withCredentials = !0),
                    (n.onreadystatechange = function () {
                      4 === n.readyState &&
                        (200 === n.status
                          ? r && console.log('associate::success::' + n.responseText)
                          : r && console.log('associate::failure::' + n.responseText));
                    }),
                    n.setRequestHeader('Content-type', 'application/json'),
                    n.send(JSON.stringify(o));
                } else r && console.log('associate::not sending to API as no search terms found');
              };
              t.checkAnonAdobeId = function () {
                const $___old_d195581f9a0d6dc4 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                );
                try {
                  if ($___old_d195581f9a0d6dc4)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___stub_3ac875f7196a9c3f.sessionStorage
                    ));
                  return function () {
                    if (U && d) {
                      var e = A('UUID');
                      if (
                        '' !== e &&
                        !I(sessionStorage.getItem('goldeneye_anonsent')) &&
                        '' === A('TATS-SS-TokenID') &&
                        !/^\d+$/.test(e) &&
                        E(e)
                      ) {
                        var o = A('AMCV_55633F7A534535110A490D44%40AdobeOrg');
                        '' !== o &&
                          (o = decodeURIComponent(o)).split('MCMID').length > 1 &&
                          x({ serviceUrl: k, withCredentials: !0 }).then(
                            function (e) {
                              r && console.log('goldeneye::anonymousAdobeId:: successful', e),
                                sessionStorage.setItem('goldeneye_anonsent', 'success');
                            },
                            function (e) {
                              r && console.log('goldeneye::anonymousAdobeId:: failure', e),
                                sessionStorage.setItem('goldeneye_anonsent', 'failure');
                            }
                          );
                      }
                    }
                  }.apply(this, arguments);
                } finally {
                  if ($___old_d195581f9a0d6dc4)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___old_d195581f9a0d6dc4
                    ));
                }
              };
              t.trackSearchTerms = function () {
                const $___old_6c02b5538256a699 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                );
                try {
                  if ($___old_6c02b5538256a699)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___stub_3ac875f7196a9c3f.sessionStorage
                    ));
                  return function () {
                    if (S.searchTermFlag) {
                      r && console.log('goldeneye::search::trackSearchTerms()');
                      var e,
                        o,
                        n = sessionStorage.getItem('goldeneye_search') || 0,
                        t = A('UUID');
                      !I(t) || '' === t || (!S.searchAnonymous && isNaN(t))
                        ? r &&
                          console.log(
                            'goldeneye::search::not tracking for anonymous visitors OR UUID is undefined (' +
                              (I(t) && '' !== t) +
                              ')'
                          )
                        : n < 10
                        ? new Promise(function (n, t) {
                            var i = function () {
                              r && console.log('goldeneye::search::a submission occurred'),
                                n(e.value);
                            };
                            new Promise(function (n, t) {
                              (o = document.getElementById('searchForm')),
                                (e = document.getElementById('z1-searchfield'));
                              var i = function () {
                                o && e && n('search elements are ready');
                                var i = 0,
                                  r = setInterval(function () {
                                    (o = document.getElementById('searchForm')),
                                      (e = document.getElementById('z1-searchfield')) && o
                                        ? (clearInterval(r), n('search elements are ready'))
                                        : i > 15 &&
                                          (clearInterval(r),
                                          t('search elements taking too long to load')),
                                      i++;
                                  }, 1000);
                              };
                              if (prodconfig.loadAtBottom && 'complete' === document.readyState)
                                r && console.log('goldeneye::search::page has already loaded'),
                                  i();
                              else {
                                var a = !1;
                                document.addEventListener('readystatechange', function () {
                                  'complete' !== document.readyState ||
                                    a ||
                                    ((a = !0),
                                    r && console.log('goldeneye::search::page is now ready'),
                                    i());
                                }),
                                  setTimeout(function () {
                                    a || ((a = !0), i());
                                  }, 2000);
                              }
                            }).then(
                              function () {
                                o.addEventListener
                                  ? o.addEventListener('submit', i, !1)
                                  : ele.attachEvent
                                  ? o.attachEvent('onsubmit', i)
                                  : (r &&
                                      console.log(
                                        'goldeneye::search::no js event listeners in this browser'
                                      ),
                                    t('no event listener')),
                                  I(
                                    document.querySelector('#z1-search-input #z1-hidden-filter')
                                  ) &&
                                    document
                                      .querySelector('#z1-search-input #z1-hidden-filter')
                                      .addEventListener('click', function (e) {
                                        r &&
                                          console.log(
                                            'goldeneye::search::autosuggestion clicked!'
                                          ),
                                          i();
                                      }),
                                  r &&
                                    console.log(
                                      'goldeneye::search::now tracking for search submissions'
                                    );
                              },
                              function (e) {
                                t(e);
                              }
                            );
                          }).then(
                            function (e) {
                              var o,
                                t =
                                  (o = e) && '' !== o
                                    ? o
                                        .replace(
                                          /[^\.?+\w\s@':;#$&Ã©Ã±Ã¡Ãƒï¿½Ã³ÃºÃ¼Ã­Â¿Â¡-]/gi,
                                          ''
                                        )
                                        .trim()
                                    : o;
                              B({
                                evtName: 'ST',
                                searchTerm: t,
                                searchContext: window.location.href,
                              }),
                                sessionStorage.setItem('goldeneye_search', parseInt(n) + 1);
                            },
                            function (e) {
                              r &&
                                console.log(
                                  'goldeneye::search::no search terms could be found: ',
                                  e
                                );
                            }
                          )
                        : r &&
                          console.log(
                            'goldeneye::search::already collected the max (10) search terms'
                          );
                    } else
                      r &&
                        console.log('goldeneye::search::search flag is off or not on same domain');
                  }.apply(this, arguments);
                } finally {
                  if ($___old_6c02b5538256a699)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___old_6c02b5538256a699
                    ));
                }
              };
              t.trackPageVisit = function () {
                var e = window.location.href;
                if (
                  S.pageVisitFlag &&
                  (W(e) || H(e) || q(e) || J(e) || X(e) || $(e) || Z(e) || K(e) || Y(e) || Q(e))
                ) {
                  var o = A('UUID');
                  I(o) && '' !== o && E(o)
                    ? B({ evtName: 'PGVST', pageVisit: window.location.href })
                    : console.log('goldeneye::pgvst::uuid is empty');
                }
              };
              var W = function (e) {
                return (
                  e.indexOf('https://www.att.com/support/article/') > -1 && /\/KM[0-9]+$/.test(e)
                );
              };
              t.isTargetWirelessPage = W;
              var H = function (e) {
                for (
                  var o = [
                      '/support/contact-us/directv',
                      '/acctmgmt/directv/service-and-support',
                      '/support/topic/my-account/topic_billingpayments1-topic_viewpaybill-topic_viewbill0',
                      '/support/article/faq/esupport/article.html',
                    ],
                    n = 0;
                  n < o.length;
                  n++
                )
                  if (e.indexOf(o[n]) > -1) return !0;
                return !1;
              };
              t.isTargetDTVPage = H;
              var q = function (e) {
                return (
                  e.indexOf('esupport/article.html#!/u-verse-tv/KM1009540') > -1 ||
                  e.indexOf('esupport/article.html#!/u-verse-tv/KM1009500') > -1 ||
                  e.indexOf('esupport/article.html#!/u-verse-tv/KM1065646') > -1
                );
              };
              t.isTargetUversePage = q;
              var J = function (e) {
                return e.indexOf('/deviceunlock/#/') > -1;
              };
              t.isTargetUnlockPhonePage = J;
              var X = function (e) {
                return e.indexOf('/smallbusiness/explore/index.html') > -1;
              };
              t.isTargetSmallBusinessPage = X;
              var $ = function (e) {
                return e.indexOf('https://myhomenetwork.att.com/#/login/') > -1;
              };
              t.isTargetMyHomeNetwork = $;
              var Z = function (e) {
                return e.indexOf('/support/topic/u-verse-high-speed-internet') > -1;
              };
              t.isTargetUverseInternetSupportPage = Z;
              var K = function (e) {
                return e.indexOf('/support/topic/u-verse-tv') > -1;
              };
              t.isTargetUverseTVSupportPage = K;
              var Y = function (e) {
                return e.indexOf('/acctmgmt/fid/lander') > -1;
              };
              t.isTargetForgotPasswordPage = Y;
              var Q = function (e) {
                return e.indexOf('/buy/thankyou') > -1;
              };
              return (t.isTargetThankYouPage = Q), T('goldeneye::total-time-for-goldeneye'), t;
            })(n)));
      }
      1 === prodconfig.geTimesLoaded
        ? globalUUIDPromise.then(
            function (e) {
              prodconfig.gedebug && console.log('goldeneye::Goldeneye promise fulfilled'),
                setTimeout(function () {
                  GoldenEye.checkAnonAdobeId();
                }, 2500),
                GoldenEye.trackSearchTerms(),
                GoldenEye.trackPageVisit();
            },
            function (e) {
              prodconfig.gedebug && console.log('goldeneye::Goldeneye promise rejected');
            }
          )
        : prodconfig.gedebug &&
          console.log('goldeneye::Already loaded goldeneye, try #' + prodconfig.geTimesLoaded);
    })();
  } finally {
    if ($___old_d7225e14e1944b5c)
      ({}.constructor.defineProperty(window, 'localStorage', $___old_d7225e14e1944b5c));
  }
}
