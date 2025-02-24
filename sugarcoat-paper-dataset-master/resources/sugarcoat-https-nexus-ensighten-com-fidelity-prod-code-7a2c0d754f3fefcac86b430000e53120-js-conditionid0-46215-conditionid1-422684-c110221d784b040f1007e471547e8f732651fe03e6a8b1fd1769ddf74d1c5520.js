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
  (function () {
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.trackerFramework.postSendData.add(function () {
          if (typeof jQuery === 'function')
            jQuery('body').on(
              {
                mousedown: function () {
                  try {
                    if (
                      s.contextData.VSCHANNEL != null &&
                      s.contextData.SEC != null &&
                      s.contextData.VSPAGE != null
                    )
                      s.pageName =
                        s.contextData.VSCHANNEL +
                        '|' +
                        s.contextData.SEC +
                        '|' +
                        s.contextData.VSPAGE;
                    if (typeof tmsTrackContentInteraction === 'function')
                      tmsTrackContentInteraction('VA Maximize');
                  } catch (er) {
                    Bootstrapper.reportException(er);
                  }
                },
              },
              'img[alt="Restore Chat Window"]'
            );
          if (typeof jQuery === 'function')
            jQuery('body').on(
              {
                mousedown: function () {
                  try {
                    if (
                      s.contextData.VSCHANNEL != null &&
                      s.contextData.SEC != null &&
                      s.contextData.VSPAGE != null
                    )
                      s.pageName =
                        s.contextData.VSCHANNEL +
                        '|' +
                        s.contextData.SEC +
                        '|' +
                        s.contextData.VSPAGE;
                    if (typeof tmsTrackContentInteraction === 'function')
                      tmsTrackContentInteraction('VA Minimize');
                  } catch (er) {
                    Bootstrapper.reportException(er);
                  }
                },
              },
              '.va-header__action--close,.ha-header__action--close'
            );
        });
      },
      2655593,
      553902
    );
    Bootstrapper.bindImmediate(
      function () {
        const $___old_eb53f2bdca66ddb4 = {}.constructor.getOwnPropertyDescriptor(
          window,
          'localStorage'
        );
        try {
          if ($___old_eb53f2bdca66ddb4)
            ({}.constructor.defineProperty(
              window,
              'localStorage',
              $___stub_b317e19f866a2da7.localStorage
            ));
          return function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (typeof _dmt !== 'undefined' && !_dmt.Util.Cookie.isRWVSession())
              if (
                _dmt.Util.Time.howLongUntil(parseInt(localStorage.getItem('_act_sk'))) >
                _dmt.Util.Time.getMs('minutes', 718)
              )
                if (
                  _dmt.Vendor.EnsightenActivate.getProfileAttribute('D907') === 'Y' &&
                  _dmt.Util.Time.hasTimeElapsed(
                    _dmt.Vendor.EnsightenActivate.getProfileAttribute('D906'),
                    30,
                    'days'
                  )
                ) {
                  _dmt.Vendor.EnsightenActivate.setProfileAttribute('D907', 'XX');
                  callTarget('target-updateguidance-mbox', { 'profile.D907': 'XX' });
                }
          }.apply(this, arguments);
        } finally {
          if ($___old_eb53f2bdca66ddb4)
            ({}.constructor.defineProperty(window, 'localStorage', $___old_eb53f2bdca66ddb4));
        }
      },
      3257184,
      599214
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (typeof String.prototype.trim !== 'function')
          String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
          };
        if (Bootstrapper.getQueryParam('disableRule') !== '251385') {
          Bootstrapper.updatedActivateElems = {};
          Bootstrapper.setupActData = function () {
            try {
              Bootstrapper.updatedActivateElems = Bootstrapper.updatedActivateElems || {};
              Bootstrapper.activateElems = Bootstrapper.activateElems || {};
              var actLayer = {};
              if (typeof Bootstrapper._dataLayer._d.activateGlobalDataLayer === 'object')
                actLayer = Bootstrapper._dataLayer._d.activateGlobalDataLayer;
              else if (typeof Bootstrapper.activateElems === 'object')
                actLayer = Bootstrapper.activateElems;
              if (typeof Bootstrapper.updatedActivateElems === 'object') {
                var pzn_data = $data('globalDataLayer', 'update_variables');
                if (pzn_data)
                  for (var key in pzn_data)
                    if (
                      !Bootstrapper.activateElems.hasOwnProperty(key) ||
                      Bootstrapper.activateElems[key] != pzn_data[key]
                    )
                      Bootstrapper.updatedActivateElems[key] = pzn_data[key];
              }
              if ($data('globalDataLayer', 'last_clicked_banner'))
                Bootstrapper.updatedActivateElems['D103'] = $data(
                  'globalDataLayer',
                  'last_clicked_banner'
                );
              if ($data('globalDataLayer', 'p99'))
                Bootstrapper.updatedActivateElems['D98'] = $data('globalDataLayer', 'p99');
              var cvi = window.FidMsmt.getCVI(document.cookie);
              if (cvi.p8)
                if (!actLayer.hasOwnProperty('D78') || actLayer['D78'] != cvi.p8)
                  Bootstrapper.updatedActivateElems['D78'] = cvi.p8;
              if (
                typeof actLayer === 'object' &&
                typeof Bootstrapper.updatedActivateElems === 'object'
              ) {
                if (actLayer['D200']) s.contextData._D200 = actLayer['D200'];
                if (actLayer['D201']) s.contextData._D201 = actLayer['D201'];
                if ($data('globalDataLayer', 'sendActVals')) {
                  s.contextData._D27 = (actLayer.D27 && actLayer.D27 != ' ' ? actLayer.D27 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D28 = (actLayer.D28 && actLayer.D28 != ' ' ? actLayer.D28 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D29 = (actLayer.D29 && actLayer.D29 != ' ' ? actLayer.D29 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D30 = (actLayer.D30 && actLayer.D30 != ' ' ? actLayer.D30 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D31 = (actLayer.D31 && actLayer.D31 != ' ' ? actLayer.D31 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D32 = (actLayer.D32 && actLayer.D32 != ' ' ? actLayer.D32 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D33 = (actLayer.D33 && actLayer.D33 != ' ' ? actLayer.D33 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D34 = (actLayer.D34 && actLayer.D34 != ' ' ? actLayer.D34 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D35 = (actLayer.D35 && actLayer.D35 != ' ' ? actLayer.D35 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D36 = (actLayer.D36 && actLayer.D36 != ' ' ? actLayer.D36 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D37 = (actLayer.D37 && actLayer.D37 != ' ' ? actLayer.D37 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D38 = (actLayer.D38 && actLayer.D38 != ' ' ? actLayer.D38 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D39 = (actLayer.D39 && actLayer.D39 != ' ' ? actLayer.D39 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D40 = (actLayer.D40 && actLayer.D40 != ' ' ? actLayer.D40 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D41 = (actLayer.D41 && actLayer.D41 != ' ' ? actLayer.D41 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D42 = (actLayer.D42 && actLayer.D42 != ' ' ? actLayer.D42 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D43 = (actLayer.D43 && actLayer.D43 != ' ' ? actLayer.D43 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData._D44 = (actLayer.D44 && actLayer.D44 != ' ' ? actLayer.D44 : '')
                    .trim()
                    .replace(/\|+/g, '^')
                    .toString();
                  s.contextData.gl = (actLayer.D1 || 'No Activate Data')
                    .toString()
                    .trim()
                    .replace(/\|+/g, '^');
                  if (actLayer.D2 && actLayer.D2.length == 5) {
                    s.contextData.za = actLayer.D2.charAt(0) + '_';
                    s.contextData.zb = actLayer.D2.charAt(1) + '_';
                    s.contextData.zc = actLayer.D2.charAt(2) + '_';
                    s.contextData.zd = actLayer.D2.charAt(3) + '_';
                    s.contextData.ze = actLayer.D2.charAt(4) + '_';
                  }
                }
              }
            } catch (er) {
              Bootstrapper.reportException(er);
            }
          };
          Bootstrapper.syncActData = function () {
            const $___old_0c135a18d83c2cb4 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              ),
              $___old_c0c8c4bdb7950992 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              );
            try {
              if ($___old_0c135a18d83c2cb4)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_afd3abb015d4d981.XMLHttpRequest
                ));
              if ($___old_c0c8c4bdb7950992)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_afd3abb015d4d981.XMLHttpRequest
                ));
              return function () {
                try {
                  if (Bootstrapper._resetActProfile) {
                    var mid = $data('globalDataLayer', 'mid');
                    Bootstrapper.data.hpps.clearIdentity();
                    Bootstrapper.data.hpps.setUID(mid);
                    Bootstrapper.data.hpps.getFullProfile().then(function (obj) {
                      Bootstrapper._resetActProfile = 0;
                      Bootstrapper.syncActData();
                    });
                    return;
                  }
                  Bootstrapper.updatedActivateElems = Bootstrapper.updatedActivateElems || {};
                  Bootstrapper.activateElems = Bootstrapper.activateElems || {};
                  if (typeof Bootstrapper.updatedActivateElems === 'object') {
                    var numChangedElems = 0;
                    var actualNewVals = {};
                    var numNewVals = 0;
                    for (var elem in Bootstrapper.updatedActivateElems)
                      if (
                        Bootstrapper.updatedActivateElems[elem] !==
                        Bootstrapper.activateElems[elem]
                      ) {
                        actualNewVals[elem] = Bootstrapper.updatedActivateElems[elem];
                        numNewVals++;
                        Bootstrapper.activateElems[elem] = Bootstrapper.updatedActivateElems[elem];
                      }
                    if (
                      numNewVals > 0 &&
                      typeof Bootstrapper.data === 'object' &&
                      typeof Bootstrapper.data.hpps === 'object'
                    ) {
                      Bootstrapper.data.hpps.setProfileAttribute(actualNewVals).then(
                        function (v) {},
                        function (err) {}
                      );
                      Bootstrapper.updatedActivateElems = {};
                      Bootstrapper.data.hpps.getFullProfile().then(function (obj) {
                        if (
                          typeof obj === 'object' &&
                          typeof Bootstrapper.dataManager.dataImport === 'function'
                        )
                          Bootstrapper.dataManager.dataImport(
                            obj,
                            'activateGlobalDataLayer',
                            'flattened'
                          );
                        Bootstrapper.activateElems = obj;
                      });
                    }
                    if (typeof Bootstrapper.data.hpps === 'object')
                      Bootstrapper.data.hpps.getProfileAttribute('D62').then(function (v) {
                        var pass = !1,
                          val = '',
                          mid = $data('globalDataLayer', 'mid'),
                          p0 = $data('globalDataLayer', 'p0');
                        if ((v === null && mid) || (v && v != p0))
                          Bootstrapper.data.hpps
                            .setProfileAttribute('D62', p0)
                            .then(function (a) {});
                      });
                  }
                } catch (er) {
                  Bootstrapper.reportException(er);
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_0c135a18d83c2cb4)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_0c135a18d83c2cb4
                ));
              if ($___old_c0c8c4bdb7950992)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_c0c8c4bdb7950992
                ));
            }
          };
          Bootstrapper.setupAndSyncActData = function () {
            if (typeof Bootstrapper.setupActData === 'function') Bootstrapper.setupActData();
            if (typeof Bootstrapper.syncActData === 'function') Bootstrapper.syncActData();
          };
          Bootstrapper.trackerFramework.postSendData.add(function () {
            if (typeof Bootstrapper.syncActData === 'function') Bootstrapper.syncActData();
          });
        }
      },
      3107137,
      451851
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.dataManager.push({
          name: 'Global Data Layer',
          id: 'globalDataLayer',
          data: {
            ecpFlag: {
              name: 'ECP',
              get: function () {
                var ecp = 'P';
                if (typeof s.contextData.p4 === 'string' && s.contextData.p4.length > 0)
                  if (s.contextData.p4.match(/02../i)) ecp = 'E';
                  else ecp = 'C';
                return ecp;
              },
            },
          },
        });
      },
      230380,
      181705
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.trackerFramework.postSendData.add(function () {
          window.tmsTrackCustomQuotePV = function () {
            if (window.tmsConfig.scFlag) {
              s.customBackupPageName = s.pageName;
              s.backupContextData = {};
              s.newContextData = {};
              for (var elem in s.contextData) {
                s.backupContextData[elem] = s.contextData[elem];
                if (!elem.match(/^p[0-9]$/)) s.contextData[elem] = null;
              }
              s.contextData.p9 = 'UUUQuickQuote';
              s.contextData.VSCHANNEL = 'Fid.com web';
              s.contextData.SEC = 'quote';
              s.contextData.VSPAGE = 'Get Quote Popup - Top Nav';
              if (s.contextData.VSCHANNEL) s.pageName = s.contextData.VSCHANNEL;
              if (s.contextData.SEC && s.pageName) s.pageName += '|' + s.contextData.SEC;
              if (s.contextData.SEC1 && s.pageName) s.pageName += '|' + s.contextData.SEC1;
              if (s.contextData.SEC2 && s.pageName) s.pageName += '|' + s.contextData.SEC2;
              if (s.contextData.VSPAGE && s.pageName) s.pageName += '|' + s.contextData.VSPAGE;
              s.t();
              s.pageName = s.customBackupPageName;
              for (var elem in s.backupContextData)
                s.contextData[elem] = s.backupContextData[elem];
            }
          };
          if (typeof $nav === 'function')
            $nav('.pnq').on({
              submit: function () {
                try {
                  if (typeof window.tmsTrackCustomQuotePV === 'function') tmsTrackCustomQuotePV();
                } catch (er) {
                  Bootstrapper.reportException(er);
                }
              },
            });
        });
      },
      330161,
      231978
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
      },
      3354495,
      [1790359, 3354488],
      131452,
      [450207, 657028]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.trackerFramework.postSendData.add(function () {
          if (typeof $nav === 'function') {
            $nav('.pnhs').on({
              mouseenter: function () {
                if (
                  typeof window.tmsEnteredNavElement === 'undefined' ||
                  window.tmsEnteredNavElement < 0
                )
                  window.tmsEnteredNavElement = $nav(this).index() + 1;
              },
            });
            $nav('.pnmm').on({
              mouseleave: function () {
                window.tmsEnteredNavElement = -1;
              },
            });
            $nav('.pgnb').on(
              {
                mousedown: function () {
                  var navCatIndex = $nav(this).parents('.pnhs').index() + 1;
                  var elmText = $nav(this).clone().children().remove().end().text();
                  var navBarVersion = '99';
                  if (
                    typeof window.tmsEnteredNavElement === 'undefined' ||
                    window.tmsEnteredNavElement < 0
                  )
                    window.tmsEnteredNavElement = navCatIndex;
                  navBarVersion = $nav('.pgnb').attr('data-nav-ver') || '99';
                  if (
                    navBarVersion.replace(/[^\w]/g, '').length !== 2 ||
                    navBarVersion.indexOf('_') > -1
                  )
                    navBarVersion = '99';
                  var interactionString = (
                    navBarVersion +
                    ($nav('.pnhs:not(.active) .pnl2').css('display') == 'block' ? 'F' : 'N') +
                    window.tmsEnteredNavElement +
                    navCatIndex +
                    elmText
                  )
                    .replace(/[^\w]/g, '')
                    .substr(0, 31);
                  try {
                    if (typeof window.tmsNavBarInteraction === 'function')
                      window.tmsNavBarInteraction(interactionString);
                  } catch (er) {
                    Bootstrapper.reportException(er);
                  }
                },
              },
              'li[tms="navLink"] a:not(.pnshl)'
            );
            $nav('.pntl').on(
              {
                mousedown: function () {
                  var interactionString =
                    'UUU' + $nav(this).text().replace(/[^\w]/g, '').substr(0, 31);
                  try {
                    if (typeof window.tmsNavBarInteraction === 'function')
                      window.tmsNavBarInteraction(interactionString);
                  } catch (er) {
                    Bootstrapper.reportException(er);
                  }
                },
              },
              'a'
            );
          }
          window.tmsSetupLegacyTracking = function () {
            window.tmsSetupLegacyCounter++;
            if (typeof window.trackGenericContentChangeAsPV !== 'undefined') {
              if (typeof window.tmsTrackGenericContentChangeAsPV === 'function') {
                window.trackGenericContentChangeAsPV = window.tmsTrackGenericContentChangeAsPV;
                window.trackGenericContentChange = window.tmsTrackGenericContentChangeAsPV;
              }
              if (typeof window.tmsTrackContentChangeAsPV === 'function') {
                window.trackContentChangeAsPV = window.tmsTrackContentChangeAsPV;
                window.trackContentChange = window.tmsTrackContentChangeAsPV;
              }
              if (typeof window.tmsTrackGenericInteraction === 'function')
                window.trackGenericInteraction = window.tmsTrackGenericInteraction;
              if (typeof window.tmsTrackInteraction === 'function')
                window.trackInteraction = window.tmsTrackInteraction;
              if (typeof window.tmsTrackSocialShare === 'function')
                window.trackSocialShare = window.tmsTrackSocialShare;
              if (typeof window.tmsTrackContacts === 'function')
                window.trackContacts = window.tmsTrackContacts;
              if (typeof window.tmsTrackContentInteraction === 'function')
                window.trackModuleInteraction = window.tmsTrackContentInteraction;
              if (typeof window.tmsTrackSearchResultInteraction === 'function')
                window.trackSearchResultInteraction = window.tmsTrackSearchResultInteraction;
              if (typeof window.tmsTrackSearchModuleInteraction === 'function')
                window.trackSearchModuleInteraction = window.tmsTrackSearchModuleInteraction;
              if (typeof window.tmsTrackInvestorCenter === 'function')
                window.trackInvestorCenter = window.tmsTrackInvestorCenter;
              if (typeof window.tmsTrackInvestorCenterCTC === 'function')
                window.trackInvestorCenterCTC = window.tmsTrackInvestorCenterCTC;
              if (typeof window.tmsConfig === 'object') window.msConfig = window.tmsConfig;
              if (typeof $nav === 'function')
                $nav(document).off('mousemove', window.tmsSetupLegacyTracking);
            } else if (
              window.tmsSetupLegacyCounter >= 10 &&
              location.pathname !== '/fund-screener/research.shtml' &&
              location.pathname !== '/fund-screener//evaluator.shtml'
            )
              if (typeof $nav === 'function')
                $nav(document).off('mousemove', window.tmsSetupLegacyTracking);
          };
          if (
            typeof window.ensightenLazyLoadFlag !== 'undefined' ||
            location.pathname === '/search/getSearchResults'
          )
            if (typeof $nav === 'function') {
              window.tmsSetupLegacyCounter = 0;
              $nav(document).on('mousemove', window.tmsSetupLegacyTracking);
            }
        });
      },
      2512127,
      463584
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (typeof window.tmsConfig !== 'undefined') {
          window.tmsConfig.getBrowserWidth = function () {
            var width;
            if (typeof window.innerWidth !== 'undefined') width = window.innerWidth;
            else if (typeof document.documentElement.clientWidth !== 'undefined')
              width = document.documentElement.clientWidth;
            else if (typeof document.body.offsetWidth !== 'undefined')
              width = document.documentElement.clientWidth;
            else width = 'WidthUnknown';
            return width;
          };
          window.tmsConfig.getStandardFormat = function (width) {
            var standardFormat = '';
            if (width < 320) standardFormat = 'Below Threshold';
            else if (width <= 760) standardFormat = 'Small';
            else if (width <= 980) standardFormat = 'Medium';
            else standardFormat = 'Large';
            return standardFormat;
          };
          window.tmsConfig.getAppSpecificFormat = function () {
            return 'No App Format';
          };
          window.tmsConfig.determineResponsiveFormat = function () {
            var formatString = '';
            var width = window.tmsConfig.getBrowserWidth();
            var formatString =
              width +
              '|' +
              window.tmsConfig.getStandardFormat(width) +
              '|' +
              window.tmsConfig.getAppSpecificFormat(width);
            s.contextData.VSFORMAT = formatString;
            ivs.contextData.VSFORMAT = formatString;
          };
        }
      },
      350456,
      233151
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function () {
          var _f = function () {
            var data = {
              version: 2,
              sectionState: { variables: [{ name: 'source', type: 'text', value: 'Fidelity' }] },
              pageStates: [
                {
                  id: 1,
                  name: 'New Page State',
                  logic: '140 141 &',
                  configType: '_trackAnalytics',
                  operands: [
                    {
                      id: 140,
                      pageIdentifier: { name: 'JSON Parameter', fields: ['appId'] },
                      comparator: { name: 'Contains' },
                      conditional: 'VirtualAssistant',
                      isCaseSensitive: false,
                    },
                    {
                      id: 141,
                      pageIdentifier: { name: 'JSON Parameter', fields: ['MeasID'] },
                      comparator: { name: 'Contains' },
                      conditional: 'VA_Start',
                      isCaseSensitive: false,
                    },
                  ],
                  variables: [
                    { name: 'hit_type', type: 'text', value: 'Custom Link (interaction)' },
                    { name: 'interaction', type: 'text', value: 'Conversation Start' },
                    { name: 'channel', type: 'text', value: 'Fid.com web' },
                  ],
                },
                {
                  id: 2,
                  name: 'New Page State - copy',
                  logic: '142 143 &',
                  configType: '_trackAnalytics',
                  operands: [
                    {
                      id: 142,
                      pageIdentifier: { name: 'JSON Parameter', fields: ['appId'] },
                      comparator: { name: 'Contains' },
                      conditional: 'VirtualAssistant',
                      isCaseSensitive: false,
                    },
                    {
                      id: 143,
                      pageIdentifier: { name: 'JSON Parameter', fields: ['MeasID'] },
                      comparator: { name: 'Contains' },
                      conditional: 'VA_LinkPresented',
                      isCaseSensitive: false,
                    },
                  ],
                  variables: [
                    { name: 'hit_type', type: 'text', value: 'Custom Link (interaction)' },
                    { name: 'interaction', type: 'text', value: 'VA LinkPresented' },
                    { name: 'channel', type: 'text', value: 'Fid.com web' },
                  ],
                },
                {
                  id: 3,
                  name: 'VA Important Information:Content Interaction',
                  logic: '144',
                  configType: '_trackAnalytics',
                  operands: [
                    {
                      id: 144,
                      pageIdentifier: { name: 'JSON Parameter', fields: ['MeasID'] },
                      comparator: { name: 'Equals' },
                      conditional: 'VA_MenuLegal',
                      isCaseSensitive: false,
                    },
                  ],
                  variables: [
                    { name: 'hit_type', type: 'text', value: 'Custom Link (interaction)' },
                    {
                      name: 'interaction',
                      type: 'text',
                      value: 'VA Important Information:Content Interaction',
                    },
                    { name: 'channel', type: 'text', value: 'Fid.com web' },
                  ],
                },
                {
                  id: 4,
                  name: 'VA Common Questions Launched:Content Interaction',
                  logic: '145',
                  configType: '_trackAnalytics',
                  operands: [
                    {
                      id: 145,
                      pageIdentifier: { name: 'JSON Parameter', fields: ['MeasID'] },
                      comparator: { name: 'Equals' },
                      conditional: 'VA_MenuQuestions',
                      isCaseSensitive: false,
                    },
                  ],
                  variables: [
                    { name: 'hit_type', type: 'text', value: 'Custom Link (interaction)' },
                    {
                      name: 'interaction',
                      type: 'text',
                      value: 'VA Common Questions Launched:Content Interaction',
                    },
                    { name: 'channel', type: 'text', value: 'Fid.com web' },
                  ],
                },
                {
                  id: 5,
                  name: 'VA Common Questions Launched:Content Interaction',
                  logic: '146',
                  configType: '_trackAnalytics',
                  operands: [
                    {
                      id: 146,
                      pageIdentifier: { name: 'JSON Parameter', fields: ['MeasID'] },
                      comparator: { name: 'Equals' },
                      conditional: 'VA_MenuOption',
                      isCaseSensitive: false,
                    },
                  ],
                  variables: [
                    { name: 'hit_type', type: 'text', value: 'Custom Link (interaction)' },
                    {
                      name: 'interaction',
                      type: 'text',
                      value: 'VA Common Questions Clicked:Content Interaction',
                    },
                    { name: 'channel', type: 'text', value: 'Fid.com web' },
                  ],
                },
              ],
              pageIdentifiers: [
                {
                  name: 'JSON Parameter',
                  func: function (fields) {
                    var evData = window.Bootstrapper
                      ? Bootstrapper._data || Bootstrapper._eventData
                      : null;
                    if (evData) return evData[fields[0]];
                  },
                },
              ],
              comparators: [
                {
                  name: 'Contains',
                  comparison: function (str, comparisonStr, isCaseSensitive) {
                    if (
                      typeof str === 'undefined' ||
                      (str === null) | (comparisonStr === 'undefined') ||
                      comparisonStr === null
                    )
                      return false;
                    if (isCaseSensitive === void 0) isCaseSensitive = false;
                    if (!isCaseSensitive) {
                      if (typeof str !== 'string') str = str.toString();
                      if (typeof comparisonStr !== 'string')
                        comparisonStr = comparisonStr.toString();
                      str = str.toUpperCase();
                      comparisonStr = comparisonStr.toUpperCase();
                    }
                    return str.indexOf(comparisonStr) > -1;
                  },
                },
                {
                  name: 'Equals',
                  comparison: function (str, comparisonStr, isCaseSensitive) {
                    if (
                      typeof str === 'undefined' ||
                      (str === null) | (comparisonStr === 'undefined') ||
                      comparisonStr === null
                    )
                      return false;
                    if (isCaseSensitive === void 0) isCaseSensitive = false;
                    if (!isCaseSensitive) {
                      if (typeof str !== 'string') str = str.toString();
                      if (typeof comparisonStr !== 'string')
                        comparisonStr = comparisonStr.toString();
                      str = str.toUpperCase();
                      comparisonStr = comparisonStr.toUpperCase();
                    }
                    return str == comparisonStr;
                  },
                },
              ],
            };
            var NS = '_pageLoadApp',
              app = (window[NS] = window[NS] || {});
            app.states = app.states || [];
            app.states.push(data);
            if (typeof window[NS] == 'function' && window[NS].prototype.run)
              new window[NS]().run([data]);
          };
          if (
            typeof Bootstrapper.trackerFramework === 'object' &&
            Bootstrapper.trackerFramework.initializeCoreLibraries
          )
            Bootstrapper.trackerFramework.initializeCoreLibraries.add(_f);
          else _f();
        })();
      },
      2786205,
      553153
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.trackerFramework.processCustomRules.add(function () {
          if (
            (location.pathname === '/' || location.pathname.match(/\/pf\/destination\/.*/)) &&
            (location.hostname.match(/www[^\.]*\.fidelity\.com/) ||
              location.hostname.match(/www[^\.]*\.fmr\.com/))
          ) {
            if (typeof vs !== 'undefined' && vs.VSPGVER !== 'VM_PROSPECT_B')
              if ($nav('#login input.SmallData').attr('value') === 'Log Out')
                if ($nav('#login a:contains("Fidelity Investor Community")').length > 0) {
                  if (typeof Bootstrapper.updatedActivateElems === 'object')
                    Bootstrapper.updatedActivateElems.D46 = 'Y';
                  if (Bootstrapper.getQueryParam('debugFIC') === 'true')
                    console.log('Ensighten Activate: Setting FIC flag to Yes');
                } else {
                  if (typeof Bootstrapper.updatedActivateElems === 'object')
                    Bootstrapper.updatedActivateElems.D46 = 'N';
                  if (Bootstrapper.getQueryParam('debugFIC') === 'true')
                    console.log('Ensighten Activate: Setting FIC flag to No');
                }
          } else if (
            document.title === 'Portfolio Summary: Fidelity Investments' &&
            typeof vs === 'object'
          )
            if ($nav('a:contains("Go to the Community")').length > 0) {
              if (typeof Bootstrapper.updatedActivateElems === 'object')
                Bootstrapper.updatedActivateElems.D46 = 'Y';
              if (Bootstrapper.getQueryParam('debugFIC') === 'true')
                console.log('Ensighten Activate: Setting FIC flag to Yes');
            } else {
              if (typeof Bootstrapper.updatedActivateElems === 'object')
                Bootstrapper.updatedActivateElems.D46 = 'N';
              if (Bootstrapper.getQueryParam('debugFIC') === 'true')
                console.log('Ensighten Activate: Setting FIC flag to No');
            }
          else if (
            location.hostname.match(/fidelityinvestorcommunity/i) &&
            location.pathname.match(/\/welcome/i)
          ) {
            if (typeof Bootstrapper.updatedActivateElems === 'object')
              Bootstrapper.updatedActivateElems.D46 = 'Y';
            if (Bootstrapper.getQueryParam('debugFIC') === 'true')
              console.log('Ensighten Activate: Setting FIC flag to Yes');
            var dateObj = Bootstrapper._customTimestamp;
            var month = '' + (dateObj.getMonth() + 1);
            var date = '' + dateObj.getDate();
            var yyyymmdd =
              dateObj.getFullYear() +
              '' +
              (month.length > 1 ? month : '0' + month) +
              (date.length > 1 ? date : '0' + date);
            if (typeof Bootstrapper.updatedActivateElems === 'object')
              Bootstrapper.updatedActivateElems.D50 = yyyymmdd;
            Bootstrapper.data.hpps.getProfileAttribute('D49').then(
              function (v) {
                if (!v)
                  if (typeof Bootstrapper.updatedActivateElems === 'object')
                    Bootstrapper.updatedActivateElems.D49 = yyyymmdd;
              },
              function (err) {
                Bootstrapper.data.hpps.setProfileAttribute('D49', yyyymmdd).then(
                  function (v) {},
                  function (err) {}
                );
                if (typeof Bootstrapper.updatedActivateElems === 'object')
                  Bootstrapper.updatedActivateElems.D49 = yyyymmdd;
              }
            );
          }
        });
      },
      431895,
      243550
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
      },
      1790154,
      [3377614],
      636,
      [452184]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (window.self === window.top)
          if (window.dmtData && window.dmtData.vendor && window.dmtData.vendor.qualtrics) {
            var env =
              typeof Bootstrapper.ensightenOptions === 'object' &&
              typeof Bootstrapper.ensightenOptions.publishPath === 'string' &&
              (Bootstrapper.ensightenOptions.publishPath.indexOf('dev') > -1 ||
                Bootstrapper.ensightenOptions.publishPath.indexOf('stage') > -1)
                ? 'staging'
                : 'production';
            if (env == 'production') {
              document.body.insertAdjacentHTML(
                'beforeend',
                "<div id='ZN_cvGJH8lmjxbKyln'><!--DO NOT REMOVE-CONTENTS PLACED HERE--></div>"
              );
              (function () {
                var g = function (e, h, f, g) {
                  this.get = function (a) {
                    for (
                      var a = a + '=', c = document.cookie.split(';'), b = 0, e = c.length;
                      b < e;
                      b++
                    ) {
                      for (var d = c[b]; ' ' == d.charAt(0); ) d = d.substring(1, d.length);
                      if (0 == d.indexOf(a)) return d.substring(a.length, d.length);
                    }
                    return null;
                  };
                  this.set = function (a, c) {
                    var b = '',
                      b = new Date();
                    b.setTime(b.getTime() + 604800000);
                    b = '; expires=' + b.toGMTString();
                    document.cookie = a + '=' + c + b + '; path=/; ';
                  };
                  this.check = function () {
                    var a = this.get(f);
                    if (a) a = a.split(':');
                    else if (100 != e)
                      'v' == h && (e = Math.random() >= e / 100 ? 0 : 100),
                        (a = [h, e, 0]),
                        this.set(f, a.join(':'));
                    else return !0;
                    var c = a[1];
                    if (100 == c) return !0;
                    switch (a[0]) {
                      case 'v':
                        return !1;
                      case 'r':
                        return (
                          (c = a[2] % Math.floor(100 / c)), a[2]++, this.set(f, a.join(':')), !c
                        );
                    }
                    return !0;
                  };
                  this.go = function () {
                    if (this.check()) {
                      var a = document.createElement('script');
                      a.type = 'text/javascript';
                      a.src = g + '&t=' + new Date().getTime();
                      document.body && document.body.appendChild(a);
                    }
                  };
                  this.start = function () {
                    var a = this;
                    var fired = false;
                    window.addEventListener
                      ? window.addEventListener(
                          'load',
                          function () {
                            a.go();
                            fired = true;
                          },
                          !1
                        )
                      : window.attachEvent &&
                        window.attachEvent('onload', function () {
                          a.go();
                          fired = true;
                        });
                    if (!fired && document.readyState == 'complete') a.go();
                  };
                };
                try {
                  new g(
                    100,
                    'r',
                    'QSI_S_ZN_cvGJH8lmjxbKyln',
                    '//zncvgjh8lmjxbkyln-fmrpi.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_cvGJH8lmjxbKyln&Q_LOC=' +
                      encodeURIComponent(window.location.href)
                  ).start();
                } catch (i) {}
              })();
            } else {
              document.body.insertAdjacentHTML(
                'beforeend',
                "<div id='ZN_d42frZ1J9rcefQh'><!--DO NOT REMOVE-CONTENTS PLACED HERE--></div>"
              );
              (function () {
                var g = function (e, h, f, g) {
                  this.get = function (a) {
                    for (
                      var a = a + '=', c = document.cookie.split(';'), b = 0, e = c.length;
                      b < e;
                      b++
                    ) {
                      for (var d = c[b]; ' ' == d.charAt(0); ) d = d.substring(1, d.length);
                      if (0 == d.indexOf(a)) return d.substring(a.length, d.length);
                    }
                    return null;
                  };
                  this.set = function (a, c) {
                    var b = '',
                      b = new Date();
                    b.setTime(b.getTime() + 604800000);
                    b = '; expires=' + b.toGMTString();
                    document.cookie = a + '=' + c + b + '; path=/; ';
                  };
                  this.check = function () {
                    var a = this.get(f);
                    if (a) a = a.split(':');
                    else if (100 != e)
                      'v' == h && (e = Math.random() >= e / 100 ? 0 : 100),
                        (a = [h, e, 0]),
                        this.set(f, a.join(':'));
                    else return !0;
                    var c = a[1];
                    if (100 == c) return !0;
                    switch (a[0]) {
                      case 'v':
                        return !1;
                      case 'r':
                        return (
                          (c = a[2] % Math.floor(100 / c)), a[2]++, this.set(f, a.join(':')), !c
                        );
                    }
                    return !0;
                  };
                  this.go = function () {
                    if (this.check()) {
                      var a = document.createElement('script');
                      a.type = 'text/javascript';
                      a.src = g + '&t=' + new Date().getTime();
                      document.body && document.body.appendChild(a);
                    }
                  };
                  this.start = function () {
                    var a = this;
                    var fired = false;
                    window.addEventListener
                      ? window.addEventListener(
                          'load',
                          function () {
                            a.go();
                            fired = true;
                          },
                          !1
                        )
                      : window.attachEvent &&
                        window.attachEvent('onload', function () {
                          a.go();
                          fired = true;
                        });
                    if (!fired && document.readyState == 'complete') a.go();
                  };
                };
                try {
                  new g(
                    100,
                    'r',
                    'QSI_S_ZN_d42frZ1J9rcefQh',
                    'https://znd42frz1j9rcefqh-fmrpi.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_d42frZ1J9rcefQh&Q_LOC=' +
                      encodeURIComponent(window.location.href)
                  ).start();
                } catch (i) {}
              })();
            }
          }
      },
      2930455,
      495048
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper._createDARTTag = function (type, cat, obj) {
          var newFrame = document.createElement('iframe'),
            src = '',
            axel = Math.random() + '',
            a = axel * 10000000000000;
          newFrame.style.display = 'none';
          newFrame.style.width = '1px';
          newFrame.style.height = '1px';
          src =
            'https://2579983.fls.doubleclick.net/activityi;src=2579983;type=' +
            (type || '') +
            ';cat=' +
            (cat || '') +
            ';ord=1;';
          for (var key in obj) src += key + '=' + obj[key] + ';';
          src += 'num=' + a + '?';
          newFrame.src = src;
          document.getElementsByTagName('body')[0].appendChild(newFrame);
        };
        Bootstrapper._getDARTValues = function () {
          var dataLayerVariables = { type: 'type', cat: 'cat' },
            secObj = Bootstrapper._dataLayer._d['dartSectionValues'] || {},
            pageObj = Bootstrapper._dataLayer._d['dartPageValues'] || {},
            data = { customVals: {} };
          for (var key in dataLayerVariables)
            if (key && (pageObj[key] || secObj[key]))
              if (key != 'type' && key != 'cat')
                data.customVals[key] = pageObj[key] || secObj[key];
              else data[key] = pageObj[key] || secObj[key];
          data.customVals['u2'] = $data('globalDataLayer', 'tid');
          return data;
        };
        Bootstrapper.trackerFramework.sendData.add(function () {
          var obj = Bootstrapper._getDARTValues();
          if (obj.type && obj.cat) Bootstrapper._createDARTTag(obj.type, obj.cat, obj.customVals);
        });
      },
      1790359,
      450207
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var videoMarkers = [25, 50, 75];
        var videoPlayer = document.getElementsByTagName('video')[0];
        var listening = false;
        var timeElapsed = 0;
        var timeout = 1000;
        var interval = 100;
        var listen = setInterval(function () {
          videoPlayer = videoPlayer || document.getElementsByTagName('video')[0];
          if (videoPlayer) {
            window.videoCollection = {};
            var videoId = getVideoId(videoPlayer);
            if (videoId !== undefined) window.videoCollection[videoId] = {};
          }
          if (!videoPlayer) {
            timeElapsed += interval;
            if (timeElapsed > interval) clearInterval(listen);
          }
          if (videoPlayer && !listening) listening = addEventListeners(videoPlayer);
          if (videoPlayer && videoPlayer.src.length > 0) {
            var videoSrcId = getVideoId(videoPlayer);
            var clipTitle = getClipTitle(window);
            var videoTitle = clipTitle.length ? clipTitle : videoSrcId;
            window.videoCollection[videoSrcId] = initializeState(videoSrcId);
            window.videoCollection[videoSrcId].videoTitle = videoTitle;
            clearInterval(listen);
          }
        }, interval);
        function initializeState (videoId) {
          var stateObject = {};
          for (var i = 0; i < videoMarkers.length; i++) {
            marker = videoMarkers[i];
            stateObject['videoDone' + marker] = Number.MAX_VALUE;
            stateObject['videoStatus' + marker] = 'waiting';
          }
          return stateObject;
        }
        function addEventListeners (videoPlayerElement) {
          videoPlayerElement.addEventListener('loadeddata', loadplayer, true);
          videoPlayerElement.addEventListener('timeupdate', timeUpdate, true);
          videoPlayerElement.addEventListener('ended', endSession, true);
          return true;
        }
        function timeUpdate (e) {
          var videoId = getVideoId(e);
          var currentTime = e.target.currentTime;
          var marker = '';
          if (window.videoCollection[videoId])
            for (var i = 0; i < videoMarkers.length; i++) {
              marker = videoMarkers[i];
              if (
                currentTime > getVideoState(videoId, 'videoDone' + marker) &&
                getVideoState(videoId, 'videoStatus' + marker) === 'waiting'
              ) {
                var videoTitle = getVideoTitle(videoId);
                setVideoState(videoId, 'videoTitle', videoTitle);
                trackVideo('Video Watched ' + marker + '%', videoId);
                setVideoState(videoId, 'videoStatus' + marker, 'sent');
              }
            }
        }
        function loadplayer (e) {
          _log('Player Loaded');
          var videoId = getVideoId(e);
          var videoPlayer = e.target;
          var clipTitle = getClipTitle(window);
          var previousTitle = clipTitle.length ? clipTitle : videoId;
          var hasTitle = window.videoCollection[videoId] === undefined ? false : true;
          if (window.videoCollection[videoId] === undefined) {
            window.videoCollection[videoId] = {};
            addEventListeners(videoPlayer);
            window.videoCollection[videoId] = initializeState(videoId);
          }
          var titleInterval = 500;
          var titleListener = setInterval(function () {
            var clipTitle = getClipTitle(window);
            var currentTitle = clipTitle.length ? clipTitle : videoId;
            if ((previousTitle === currentTitle || !hasTitle) && currentTitle != '') {
              timeElapsed += titleInterval;
              if (timeElapsed > titleInterval) clearInterval(titleListener);
            }
            if (previousTitle != currentTitle && currentTitle) {
              setVideoState(videoId, 'videoTitle', currentTitle);
              clearInterval(titleListener);
            }
          }, titleInterval);
          videoPlayer.addEventListener('playing', playVideo, { once: true });
        }
        function playVideo (e) {
          var delayPlayVideo = setTimeout(function () {
            var videoId = getVideoId(e);
            var videoDuration = e.target.duration;
            var marker = '';
            if (
              getVideoState(videoId, 'videoDone25') == Number.MAX_VALUE &&
              getVideoState(videoId, 'videoTitle') != undefined
            ) {
              for (var j = 0; j < videoMarkers.length; j++) {
                marker = videoMarkers[j];
                setVideoState(videoId, 'videoDone' + marker, videoDuration * (marker / 100));
                setVideoState(videoId, 'videoStatus' + marker, 'waiting');
              }
              trackVideo('Video Start', videoId);
            }
          }, 500);
        }
        function getVideoFileName (videoElement) {
          var videoSource = videoElement.src;
          var sourceString = videoSource || '';
          return sourceString ? videoSource.split('/').pop() : videoSource.src;
        }
        function getVideoId (e) {
          var videoElement = e.target || e;
          var videoId = getVideoFileName(videoElement);
          return videoId;
        }
        function getClipTitle (window) {
          return window.document.getElementById('clipTitle')
            ? window.document.getElementById('clipTitle').textContent
            : '';
        }
        function getVideoTitle (videoId) {
          return getVideoState(videoId, 'videoTitle');
        }
        function setVideoState (videoId, stateVar, stateVal) {
          var currentVideo = window.videoCollection[videoId];
          currentVideo[stateVar] = stateVal;
        }
        function getVideoState (videoId, stateVar) {
          return window.videoCollection[videoId][stateVar] || '';
        }
        function resetStatus (e) {
          var videoId = getVideoId(e);
          var marker = '';
          for (var i = 0; i < videoMarkers.length; i++) {
            marker = videoMarkers[i];
            setVideoState(videoId, 'videoDone' + marker, Number.MAX_VALUE);
            setVideoState(videoId, 'videoStatus' + marker, 'waiting');
          }
        }
        function endSession (e) {
          resetStatus(e);
          var videoId = getVideoId(e);
          var videoTitle = getVideoState(videoId, 'videoTitle');
          trackVideo('Video Complete', videoId);
          _log('fin');
        }
        function trackVideo (videoAction, videoId) {
          var storedLTVs = s.linkTrackVars;
          s.contextData.videoAction = videoAction || '';
          s.contextData.videoId = getVideoState(videoId, 'videoTitle') || videoId;
          _log('Video Action: ' + s.contextData.videoAction);
          _log('Video ID: ' + s.contextData.videoId);
          s.linkTrackVars += ',contextData.videoAction,contextData.videoId';
          s.tl(true, 'o', videoAction);
          s.contextData.videoAction = '';
          s.contextData.videoId = '';
          s.linkTrackVars = storedLTVs;
        }
      },
      2467847,
      456486
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.trackerFramework.postSendData.add(function () {
          if (typeof jQuery === 'function')
            if (typeof window.tmsNavBarInteraction === 'function') {
              jQuery(".seo-footer--internal-list-items:contains('Careers')").on(
                'click',
                function () {
                  try {
                    if (typeof tmsTrackGenericContentChangeAsPV === 'function')
                      tmsTrackGenericContentChangeAsPV('BBBCareers');
                  } catch (er) {
                    Bootstrapper.reportException(er);
                  }
                }
              );
              jQuery(".seo-footer--internal-list-items:contains('News Releases')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBNewsReleases');
                }
              );
              jQuery(".seo-footer--internal-list-items:contains('About Fidelity')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBAboutFidelity');
                }
              );
              jQuery(".seo-footer--internal-list-items:contains('International')").on(
                'click',
                function () {
                  try {
                    if (typeof tmsTrackGenericContentChangeAsPV === 'function')
                      tmsTrackGenericContentChangeAsPV('BBBInternational');
                  } catch (er) {
                    Bootstrapper.reportException(er);
                  }
                }
              );
              jQuery(".seo-footer--reserved-link-items:contains('Privacy')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBPrivacy');
                }
              );
              jQuery(".seo-footer--reserved-link-items:contains('Terms of Use')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBTermsofUse');
                }
              );
              jQuery(".seo-footer--reserved-link-items:contains('Security')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBSecurity');
                }
              );
              jQuery(".seo-footer--reserved-link-items:contains('Site Map')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBSiteMap');
                }
              );
              jQuery(
                ".seo-footer--reserved-link-items:contains('This is for persons in the U.S. only.')"
              ).on('click', function () {
                window.tmsNavBarInteraction('BBBThisisforpersonsintheUSonly');
              });
              jQuery(".simple-footer--legal-list:contains('Privacy')").on('click', function () {
                window.tmsNavBarInteraction('BBBPrivacy');
              });
              jQuery(".simple-footer--legal-list:contains('Terms of Use')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBTermsofUse');
                }
              );
              jQuery(".simple-footer--legal-list:contains('Security')").on('click', function () {
                window.tmsNavBarInteraction('BBBSecurity');
              });
              jQuery(".simple-footer--legal-list:contains('Site Map')").on('click', function () {
                window.tmsNavBarInteraction('BBBSiteMap');
              });
              jQuery(
                ".simple-footer--legal-list:contains('This is for persons in the U.S. only.')"
              ).on('click', function () {
                window.tmsNavBarInteraction('BBBThisisforpersonsintheUSonly');
              });
              jQuery(".footer--primary-nav li:contains('NetBenefits')").on('click', function () {
                try {
                  if (typeof tmsTrackGenericContentChangeAsPV === 'function')
                    tmsTrackGenericContentChangeAsPV('BBBNetBenefits');
                } catch (er) {
                  Bootstrapper.reportException(er);
                }
              });
              jQuery(".footer--primary-nav li:contains('Active Trader Pro')").on(
                'click',
                function () {
                  try {
                    if (typeof tmsTrackGenericContentChangeAsPV === 'function')
                      tmsTrackGenericContentChangeAsPV('BBBATP');
                  } catch (er) {
                    Bootstrapper.reportException(er);
                  }
                }
              );
              jQuery(".seo-footer--products-list:contains('Mutual Funds')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBMutualFunds');
                }
              );
              jQuery(".seo-footer--products-list:contains('ETF')").on('click', function () {
                window.tmsNavBarInteraction('BBBEtfs');
              });
              jQuery(".seo-footer--products-list:contains('Fixed Income')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBFixedIncome');
                }
              );
              jQuery(".seo-footer--products-list:contains('Bonds')").on('click', function () {
                window.tmsNavBarInteraction('BBBBonds');
              });
              jQuery(".seo-footer--products-list:contains('CD')").on('click', function () {
                window.tmsNavBarInteraction('BBBCds');
              });
              jQuery(".seo-footer--products-list:contains('Options')").on('click', function () {
                window.tmsNavBarInteraction('BBBOptions');
              });
              jQuery(".seo-footer--products-list:contains('Active Trader Pro')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBActiveTraderPro');
                }
              );
              jQuery(".seo-footer--products-list:contains('Stocks')").on('click', function () {
                window.tmsNavBarInteraction('BBBStocks');
              });
              jQuery(".seo-footer--products-list:contains('Online Trading')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBOnlineTrading');
                }
              );
              jQuery(".seo-footer--products-list:contains('Annuities')").on('click', function () {
                window.tmsNavBarInteraction('BBBAnnuities');
              });
              jQuery(".seo-footer--products-list:contains('Life Insurance')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBLifeInsurance');
                }
              );
              jQuery(".seo-footer--products-list:contains('Small Business Retirement Plans')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBSmallBusinessRetirementPlans');
                }
              );
              jQuery(".seo-footer--products-list:contains('IRAs')").on('click', function () {
                window.tmsNavBarInteraction('BBBIRAs');
              });
              jQuery(".seo-footer--products-list:contains('Retirement Products')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBRetirementProducts');
                }
              );
              jQuery(".seo-footer--products-list:contains('Retirement Planning')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBRetirementPlanning');
                }
              );
              jQuery(".seo-footer--products-list:contains('529 Plans')").on('click', function () {
                window.tmsNavBarInteraction('BBB529Plans');
              });
              jQuery(".seo-footer--products-list:contains('FINRA')").on('click', function () {
                window.tmsNavBarInteraction('BBBFinraBrokerCheck');
              });
              jQuery(".seo-footer--products-list:contains('Guest Access')").on(
                'click',
                function () {
                  window.tmsNavBarInteraction('BBBGuestAccess');
                }
              );
              jQuery('#pgnb > div.pbn > div.pnld').on('click', function () {
                window.tmsNavBarInteraction('UUUFidelityLogo');
              });
            }
        });
      },
      1867658,
      447000
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
      },
      1790352,
      [3107137],
      251385,
      [451851]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.dataManager.push({
          name: 'Global Data Layer',
          id: 'globalDataLayer',
          data: {
            metrics_domain: {
              name: '',
              get: function (flag) {
                var env,
                  host = location.hostname;
                if (host.match(/cqa\.fidelity\.com/i)) env = 'metricsxq1.fidelity.com';
                else if (
                  host.match(/\.fidelity\.com/i) &&
                  host.match(/xq.\.fidelity\.com/i) === null &&
                  host.match(/testresearch.\.fidelity\.com/i) === null
                )
                  env = 'metrics.fidelity.com';
                else if (
                  host.match(/xq.\.fidelity\.com/i) ||
                  host.match(/testresearch.\.fidelity\.com/i)
                )
                  env = 'metricsxq2.fidelity.com';
                else if (
                  typeof window.tmsConfig.supportedNonFidEnvs !== 'undefined' &&
                  host.match(window.tmsConfig.supportedNonFidEnvs)
                )
                  env = 'metrics.fidelity.com';
                else if (host.match(/lc./i) && host.match(/qa/i) === null)
                  env = 'metricslc5.fmr.com';
                else env = 'metricsqa4.fmr.com';
                return env;
              },
            },
            dp_metrics_domain: {
              name: '',
              get: function (flag) {
                var env,
                  host = location.hostname;
                if (
                  host.match(/\.fidelity\.com/i) &&
                  host.match(/xq.\.fidelity\.com/i) === null &&
                  host.match(/cqa\.fidelity\.com/i) === null &&
                  host.match(/testresearch[12]\.fidelity\.com/i) === null
                )
                  env = 'dpesb.fidelity.com';
                else if (
                  host.match(/cqa\.fidelity\.com/i) !== null ||
                  host.match(/xq1\.fidelity\.com/i) !== null ||
                  host.match(/testresearch1\.fidelity\.com/i) !== null
                )
                  env = 'dpesbxq1.fidelity.com';
                else if (
                  host.match(/xq2\.fidelity\.com/i) !== null ||
                  host.match(/testresearch2\.fidelity\.com/i) !== null
                )
                  env = 'dpesbxq2.fidelity.com';
                else env = '';
                return env;
              },
            },
            kafka_domain: {
              name: '',
              get: function (flag) {
                var env,
                  host = location.hostname;
                if (
                  (host.match(/\.fidelity\.com/i) &&
                    host.match(/xq.\.fidelity\.com/i) === null &&
                    host.match(/testresearch[12]\.fidelity\.com/i) === null &&
                    host.match(/www\.fidcom-qa\.aw[0-9][0-9][0-9]\.c\.fidelity\.com/i) === null &&
                    host.match(/-xq[12]\.aw[0-9][0-9][0-9]\.c\.fidelity\./i) === null) ||
                  host.match(/unsubscribe\.fidelityinvestments\.com/i)
                )
                  env = 'clix.fidelity.com';
                else env = 'clixqa4.fmr.com';
                return env;
              },
            },
            whichVersion: {
              name: '',
              get: function (flag) {
                var out,
                  d = $data('globalDataLayer', 'ensighten_publish_date');
                if (d) out = d + '|SYZYGY|TMS';
                else out = '2013-06-13|H.25.4|TMS';
                return out;
              },
            },
            next_best_action_id: {
              name: '',
              get: function () {
                var a = 'tmsDPExpContentMeasurementMetadata',
                  b = 'all-experience-data',
                  c = 'obfuscation-encode',
                  d = 'encodedOutput',
                  e = 'experience';
                if (
                  typeof window[a] === 'object' &&
                  window[a][b] &&
                  window[a][b][c] &&
                  window[a][b][c][d] &&
                  window[a][b][c][d][e] &&
                  window[a][b][c][d][e]['nextBestActionsGlobalID']
                )
                  return window[a][b][c][d][e]['nextBestActionsGlobalID'];
                if (window.p9 && window.p9.match(/^ngcc_/gi))
                  return decodeURIComponent(p9).replace('ngcc_', '').split('|')[3] || '';
                return '';
              },
            },
            picd_selfserve_ready: {
              name: '',
              get: function () {
                return 'Y';
              },
            },
          },
        });
        Bootstrapper._sendMetricsCall = function (str) {
          try {
            if (str && !Bootstrapper._stopInsightCall) {
              var map = ['immid', 'imm_pid', 'imm_aid', 'imm_eid'];
              for (var i = 0, l = map.length; i < l; i++) {
                var n = Bootstrapper.getQueryParam(map[i]);
                if (n) str += '&' + map[i] + '=' + encodeURIComponent(n);
              }
              if (str.match(/&(interaction|contentChange|contactUs|socialShare)=/i)) {
                var params = str.split('&') || [];
                for (var i = 0, l = params.length; i < l; i++) {
                  var p = params[i].split('=');
                  if (p[0].toLowerCase() == 'interaction') {
                    var name = p[1].split('%7C').pop();
                    var _int = name ? name.split('%3A') : '';
                    if (_int && _int.length == 2) {
                      str += '&VSMODULE=' + _int[0] + '&VSDESC=' + _int[1];
                      break;
                    }
                  } else if (p[0].toLowerCase() == 'socialshare') {
                    str += '&VSMODULE=Social Share&VSDESC=' + p[1].split('%7C').pop();
                    break;
                  } else if (p[0].toLowerCase() == 'contactus') {
                    str += '&VSMODULE=Contact Us&VSDESC=' + p[1].split('%7C').pop();
                    break;
                  } else if (p[0].toLowerCase() == 'contentchange') {
                    var name = str
                      .match(/pageName=.*&?/)[0]
                      .split('&')[0]
                      .split('=')[1]
                      .split('%7C')
                      .pop();
                    var _int = name ? name.split('%3A') : [];
                    str += '&VSMODULE=' + _int[0] + '&VSDESC=' + _int[1];
                    break;
                  }
                }
              }
              if (
                typeof s.browserWidth === 'number' &&
                typeof s.browserHeight === 'number' &&
                typeof s.resolution === 'string'
              )
                str +=
                  '&browserWidth=' +
                  s.browserWidth +
                  '&browserHeight=' +
                  s.browserHeight +
                  '&screenSize=' +
                  s.resolution;
              if (
                typeof Bootstrapper === 'object' &&
                typeof Bootstrapper.ensightenOptions === 'object' &&
                Bootstrapper.ensightenOptions.publishPath != undefined
              )
                str = str + '&sourceEnv=' + Bootstrapper.ensightenOptions.publishPath;
              var nba = $data('globalDataLayer', 'next_best_action_id');
              if (!$data('globalDataLayer', 'stop_vstag_call')) {
                var iReq =
                  'https://' +
                  $data('globalDataLayer', 'metrics_domain') +
                  '/VSTAG?LOG=1' +
                  (document.referrer ? '&VSDR=' + encodeURIComponent(document.referrer) : '') +
                  '&' +
                  str +
                  (nba ? '&nextBestActionsGlobalID=' + nba : '') +
                  '&VSVID=' +
                  Math.random() +
                  '&tms=true';
                if (~iReq.indexOf('url_length=')) {
                  var metrics_len = iReq.length.toString().length;
                  sc_length = iReq.match(/&url_length=([^&]*)/i)[1].length;
                  len =
                    metrics_len != sc_length
                      ? iReq.length - (sc_length - metrics_len)
                      : iReq.length;
                  iReq = iReq.replace(/&url_length=([^&]*)/i, '&url_length=' + len);
                } else {
                  var len = iReq.length;
                  len = len + len.toString().length + '&url_length='.length;
                  iReq = iReq.replace('LOG=1', 'LOG=1&url_length=' + len);
                }
                var iImage = new Image();
                iImage.src = iReq;
              }
              var dpDom = $data('globalDataLayer', 'dp_metrics_domain');
              var kafDom = $data('globalDataLayer', 'kafka_domain');
              var strNameValPairs = str.split('&'),
                nameValue = '',
                qsObj = { LOG: 1 };
              if (document.referrer) qsObj.VSDR = encodeURIComponent(document.referrer);
              for (var i = 0, numPairs = strNameValPairs.length; i < numPairs; i++) {
                nameValue = strNameValPairs[i].split('=');
                if (nameValue.length === 2) qsObj[nameValue[0]] = nameValue[1];
              }
              if (nba) qsObj.nextBestActionsGlobalID = nba;
              qsObj.VSVID = Math.random();
              if (typeof ttMeta !== 'undefined' || typeof ttMETA !== 'undefined') {
                var ttm = typeof ttMeta !== 'undefined' ? ttMeta : ttMETA;
                var ttm_max = ttm.length > 20 ? 20 : ttm.length;
                for (var j = 0; j < ttm_max; j++) {
                  var _ttm = ttm[j];
                  for (var prop in _ttm) qsObj['tt-' + prop + '-' + j] = _ttm[prop];
                }
              }
              if (
                $data('globalDataLayer', 'stop_vstag_call') &&
                $data('globalDataLayer', 'whichVersion')
              )
                qsObj.VSORIGIN = $data('globalDataLayer', 'whichVersion');
              var today = new Date(),
                postObj = {
                  request: {
                    parameter: {
                      sysDate: today.toISOString(),
                      Referrer: document.location.href,
                      clientIP: '',
                      queryString: qsObj,
                    },
                  },
                },
                kafkaUrl = 'https://' + kafDom + '/clix',
                xmlReq2 = new XMLHttpRequest();
              if (kafDom && !window.FidMsmt.subdomain().match(/apach-?e/i)) {
                xmlReq2.open('POST', kafkaUrl, true);
                xmlReq2.setRequestHeader('Content-Type', 'text/plain');
                xmlReq2.withCredentials = true;
                xmlReq2.send(JSON.stringify(postObj));
              }
            }
          } catch (e) {
            Bootstrapper.reportException(e);
          }
        };
        window.tmsSendIEventTag = function () {};
        window.tmsSendIPageTag = function () {};
        window.tmsSendCustomIEventTag = function () {};
        window.tmsSendCustomIEventTagNew = function (module, desc, customVals) {
          Bootstrapper._assignInsightValues = function (dataLayerID) {
            var dataLayerVariables = {
              accountSaveInd: 'VSSAVED',
              accountStart: 'accountStart',
              accountComplete: 'accountComplete',
              accountType: 'VSREGTYPE',
              appVersion: 'appVersion',
              author: 'VSAUTHOR',
              channel: 'VSCHANNEL',
              cusip: 'VSCUSIP',
              date: 'VSDATE',
              editorialTopicsManual: 'VSTOPICS',
              editorialTopics: 'VSTOPICS',
              flowType: 'VSDESC2',
              formstart: 'formStart',
              formcomplete: 'formComplete',
              guidancestart: 'guidanceStart',
              guidancecomplete: 'guidanceComplete',
              headline: 'VSHEADLINE',
              ipoCompId: 'VSCOID',
              list1: 'list1',
              location: 'location',
              legacyBricklet: 'VSBRICKLET',
              navType: 'NAVTYPE',
              pageID: 'VSPGID',
              pageName: 'VSPAGE',
              pagePurpose: 'VSPURP',
              pageTemp: 'VSPGTEMP',
              pageVersion: 'VSPGVER',
              product: 'VSPROD',
              pznFlag: 'VSBIZEVENT',
              sec: 'SEC',
              sec1: 'SEC1',
              sec2: 'SEC2',
              secSub: 'VSSECSUB',
              source: 'VSSOURCE',
              sourceManual: 'VSSOURCE',
              subscription: 'subscription',
              toacomplete: 'toacomplete',
              toaflowtype: 'VSDESC2',
              toasave: 'toasave',
              toaresume: 'toaresume',
              toastart: 'toastart',
              tradecomplete: 'tradecomp',
              tradestart: 'tradestart',
            };
            obj = Bootstrapper._dataLayer._d[dataLayerID] || {};
            for (var key in dataLayerVariables)
              if (key && obj[key])
                ivs.contextData[dataLayerVariables[key]] = encodeURIComponent(obj[key]);
          };
          Bootstrapper._assignInsightValues('originalValues');
          Bootstrapper._assignInsightValues('globalMetaTagDataLayer');
          Bootstrapper._assignInsightValues('sectionValues');
          Bootstrapper._assignInsightValues('pageValues');
          if (typeof ivs.contextData.VSPAGE === 'undefined')
            ivs.contextData.VSDT = encodeURIComponent(document.title);
          var reqQuery = '';
          var mergedVals = {};
          for (var i in ivs.contextData) mergedVals[i] = ivs.contextData[i];
          for (var i in customVals) mergedVals[i] = customVals[i];
          for (var i in mergedVals) reqQuery += '&' + i + '=' + mergedVals[i];
          var nba = $data('globalDataLayer', 'next_best_action_id');
          if (!$data('globalDataLayer', 'stop_vstag_call')) {
            var iReq =
              'https://' +
              window.tmsConfig.iDomain +
              '/VSTAG?LOG=1&VSPAGE=' +
              ivs.contextData.VSPAGE +
              '&VSMODULE=' +
              module +
              '&VSDESC=' +
              desc +
              reqQuery +
              (nba ? '&nextBestActionsGlobalID=' + nba : '') +
              '&VSVID=' +
              Math.random() +
              '&tms=true';
            if (~iReq.indexOf('url_length=')) {
              var metrics_len = iReq.length.toString().length;
              sc_length = iReq.match(/&url_length=([^&]*)/i)[1].length;
              len =
                metrics_len != sc_length ? iReq.length - (sc_length - metrics_len) : iReq.length;
              iReq = iReq.replace(/&url_length=([^&]*)/i, '&url_length=' + len);
            } else {
              var len = iReq.length;
              len = len + len.toString().length + '&url_length='.length;
              iReq = iReq.replace('LOG=1', 'LOG=1&url_length=' + len);
            }
            var iImage = new Image();
            iImage.src = iReq;
          }
        };
        var ivs = (window.ivs = {});
        ivs.contextData = {};
        Bootstrapper._custom._process_tae = function (o) {
          if (typeof o !== 'object' || !o) return;
          var vars_for_call = [];
          if (typeof window.s === 'object') {
            var name_space = 's_i_' + (s.visitorNamespace ? s.visitorNamespace : ''),
              count = 1;
            if (typeof window[name_space] !== 'undefined')
              while (typeof window[name_space + '_' + count] !== 'undefined') count++;
            else if (typeof window['s_i_' + s.account] !== 'undefined') {
              name_space = 's_i_' + s.account;
              while (typeof window[name_space + '_' + count] !== 'undefined') count++;
            }
            if (
              typeof window[name_space + (count > 1 ? '_' + (count - 1) : '')].src == 'undefined'
            )
              try {
                window[name_space + (count > 1 ? '_' + (count - 1) : '')].src =
                  Bootstrapper.prevRequestURL;
              } catch (e) {}
            vars_for_call.push(
              (
                window[name_space + (count > 1 ? '_' + (count - 1) : '')].src.match(
                  /c\.&.*&\.c/
                )[0] || ''
              )
                .replace('c.&', '')
                .replace('&.c', '')
            );
            vars_for_call.push(
              'RSID=' +
                window[name_space + (count > 1 ? '_' + (count - 1) : '')].src
                  .replace(/.*\/ss\//, '')
                  .split('/')[0]
            );
          }
          for (var i in o)
            if (o[i])
              vars_for_call.push('_' + encodeURIComponent(i) + '=' + encodeURIComponent(o[i]));
          var qspPostTAE = [],
            nameValue = [],
            objPostTAE = {};
          for (var i = 0; i < vars_for_call.length; i++)
            if (vars_for_call[i].indexOf('&') >= 0) {
              qspPostTAE = vars_for_call[i].split('&');
              for (j = 0; j < qspPostTAE.length; j++) {
                nameValue = qspPostTAE[j].split('=');
                if (nameValue.length === 2) objPostTAE[nameValue[0]] = nameValue[1];
              }
            } else {
              qspPostTAE.push(vars_for_call[i]);
              nameValue = vars_for_call[i].split('=');
              if (nameValue.length === 2) objPostTAE[nameValue[0]] = nameValue[1];
            }
          var dpDom = $data('globalDataLayer', 'dp_metrics_domain');
          var kafDom = $data('globalDataLayer', 'kafka_domain');
          if (
            $data('globalDataLayer', 'stop_vstag_call') &&
            $data('globalDataLayer', 'whichVersion') &&
            $data('globalDataLayer', 'picd_selfserve_ready') === 'Y'
          )
            objPostTAE.VSORIGIN = $data('globalDataLayer', 'whichVersion');
          objPostTAE.VSSELFSERVE = 'TAE';
          var today = new Date(),
            postObj = {
              request: {
                parameter: {
                  sysDate: today.toISOString(),
                  Referrer: document.location.href,
                  clientIP: '',
                  queryString: objPostTAE,
                },
              },
            },
            kafkaUrl = 'https://' + kafDom + '/clix',
            xmlReq2 = new XMLHttpRequest();
          if (kafDom && !window.FidMsmt.subdomain().match(/apach-?e/i)) {
            xmlReq2.open('POST', kafkaUrl, true);
            xmlReq2.setRequestHeader('Content-Type', 'text/plain');
            xmlReq2.withCredentials = true;
            xmlReq2.send(JSON.stringify(postObj));
          }
        };
      },
      3279497,
      451841
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (
          Bootstrapper &&
          typeof Bootstrapper._callClickTaleHundredPercent === 'function' &&
          window.dmtData &&
          window.dmtData.vendor &&
          window.dmtData.vendor.clickTale
        )
          Bootstrapper._callClickTaleHundredPercent();
      },
      3319068,
      [3343254],
      642799,
      [642795]
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.dataManager.push({
          name: 'Global Data Layer',
          id: 'globalDataLayer',
          data: {
            messagingImpressions: {
              name: 'WI Messaging Impressions',
              get: function () {
                if (
                  Bootstrapper._trackAnalyticsRun == 1 &&
                  (window.autoRun || Bootstrapper._trackAnalyticsHasRunOnce) &&
                  !Bootstrapper._messageExplicitOptIn &&
                  !Bootstrapper._dataLC.gtactivesectionselector &&
                  (!Bootstrapper._data.vv || Bootstrapper._data.vv.toString().trim().length != 2)
                )
                  return '';
                if (typeof jQuery === 'function') {
                  var msgs;
                  if (
                    Bootstrapper._messageExplicitOptIn &&
                    (Bootstrapper._trackAnalyticsRun || Bootstrapper._explicitMessageFlag)
                  )
                    msgs = jQuery(Bootstrapper._messageExplicitOptIn);
                  else if (Bootstrapper._trackAnalyticsRun)
                    if (
                      Bootstrapper._dataLC.gtactivesectionselector &&
                      Bootstrapper._dataLC.vv &&
                      Bootstrapper._dataLC.vv !== 'ip'
                    )
                      msgs = jQuery(Bootstrapper._dataLC.gtactivesectionselector)
                        .find('[data-messaging]')
                        .andSelf()
                        .filter('[data-messaging]');
                    else {
                      if (Bootstrapper._dataLC.vv === 'ip')
                        msgs = jQuery('[data-messaging]').not(
                          '.GTPageloadPassive[data-messaging],.GTPageloadPassive [data-messaging]'
                        );
                    }
                  else
                    msgs = jQuery('[data-messaging]').not(
                      '.GTPageloadPassive[data-messaging],.GTPageloadPassive [data-messaging]'
                    );
                  if (msgs.length > 0)
                    var d = '~',
                      ph = 'z',
                      err = 'err-val',
                      m = 'match',
                      varMap = {
                        msgTitle: {
                          shorten: function (v) {
                            return (v || '').substring(0, 39).toLowerCase();
                          },
                        },
                      };
                }
              },
            },
            messagingClicks: {
              name: 'WI Messaging Clicks',
              get: function () {
                if (
                  (window.autoRun || Bootstrapper._trackAnalyticsHasRunOnce) &&
                  !Bootstrapper._mvProdString &&
                  !window.p205
                )
                  return '';
                if (Bootstrapper.getQueryParam('tmsmn') && !window.p205) {
                  var d = '~',
                    ph = 'z',
                    qp = 'getQueryParam',
                    s = '';
                  s = Bootstrapper[qp]('tmsmd0') || ph;
                  s += d + (Bootstrapper[qp]('tmsmn') || ph);
                  s += d + (Bootstrapper[qp]('tmsmd1') || ph);
                  s += d + (Bootstrapper[qp]('tmsmd2') || ph);
                  s += d + (Bootstrapper[qp]('tmsmd3') || ph);
                  s += d + (Bootstrapper[qp]('tmsmd4') || ph);
                  s += d + (Bootstrapper[qp]('tmsmd5') || ph);
                  s += d + (Bootstrapper[qp]('tmsmd6') || ph);
                  return Bootstrapper._customSpecialCharDecode(s);
                }
                return decodeURIComponent(
                  Bootstrapper._customSpecialCharDecode(
                    Bootstrapper._mvProdString || window.p205 || ''
                  )
                );
              },
            },
            set_messaging_impression_variable: {
              name: 'WI Messaging Return products variable for impressions',
              get: function () {
                if (Bootstrapper._dataLayer.messagingImpressions) {
                  if (~Bootstrapper._dataLayer.messagingImpressions.indexOf('n|unconfigured')) {
                    var pn = s.contextData.VSPAGE.split('::');
                    pn = pn.length > 1 ? pn[1].split('|') : pn[0].split('|');
                    pn = pn.length > 1 ? pn[1] : pn[0];
                    Bootstrapper._messagingPageName = 'n|' + pn;
                    Bootstrapper._dataLayer.messagingImpressions = Bootstrapper._dataLayer.messagingImpressions.replace(
                      /n\|[^~]*/g,
                      Bootstrapper._msgPagenameOverride || Bootstrapper._messagingPageName
                    );
                  }
                  if (typeof s.events !== 'undefined') s.events += ',event81';
                  else s.events = 'event81';
                  return Bootstrapper._dataLayer.messagingImpressions;
                }
              },
            },
            set_messaging_click_variables: {
              name: 'WI Messaging Return products variable for clicks',
              get: function () {
                if ($data('globalDataLayer', 'messagingClicks')) {
                  s.contextData.tileElemClick = $data('globalDataLayer', 'messagingClicks');
                  var messagingClick =
                    ';' + $data('globalDataLayer', 'messagingClicks') + ';;;event82=1';
                  return messagingClick;
                }
              },
            },
          },
        });
      },
      2331637,
      [3377616],
      516699,
      [426765]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (typeof $nav === 'function') {
          var currentPageName = $data('globalDataLayer', 'sc_page_name');
          $nav('a.relationships--left-item,a.relationships--representative-name').on(
            'click',
            function () {
              var cookie = window.tmsGetCookieValue('cvi');
              if (cookie.toLowerCase().indexOf('p9=') > -1) {
                var parameters = cookie.split('&');
                cookie = '';
                $nav.each(parameters, function (key, value) {
                  if (value.toLowerCase().indexOf('p9=') === -1) cookie += value + '&';
                });
              } else cookie += '&';
              cookie +=
                'p9=' +
                encodeURIComponent('relationship bricklet') +
                '%7C' +
                encodeURIComponent(
                  (this.innerHTML || '')
                    .toLowerCase()
                    .replace(/<[^>]*>/g, '')
                    .replace(/^\s\s+/g, '')
                    .replace(/^\W*|\W*$/g, '')
                ) +
                '%7C' +
                ($data('globalDataLayer', 'browserWidth') >= 760 ? 'large' : 'small');
              _log(cookie);
              window.tmsSetCookieValue('cvi', cookie, null, null, !0);
            }
          );
        }
      },
      1279195,
      362254
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper._assignSCValues = function (dataLayerID) {
          const $___old_6363fe99102c2a5b = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_6363fe99102c2a5b)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_47c01efa79e9f191.userAgent
              ));
            return function () {
              try {
                if (typeof _dmt !== 'undefined') _dmt.Service.AdobeAnalytics.buildContextData();
              } catch (e) {}
              var dataLayerVariables = {
                  _D15: '_D15',
                  _D19: '_D19',
                  _D21: '_D21',
                  _D3: '_D3',
                  _D59: '_D59',
                  accountComplete: 'accountComplete',
                  accountSaveInd: 'VSSAVED',
                  accountStart: 'accountStart',
                  accountType: 'VSREGTYPE',
                  acq_interests: 'acq_interests',
                  actData1: 'actData1',
                  appVersion: 'appVersion',
                  articleId: 'articleId',
                  author: 'VSAUTHOR',
                  bootstrap_location: 'ens_loc',
                  browserCompatibility: 'browserCompatibility',
                  channel: 'VSCHANNEL',
                  clicktale_user_id: 'ctuid',
                  client: 'client',
                  cusip: 'VSCUSIP',
                  d80: 'd80',
                  d83: 'd83',
                  date: 'VSDATE',
                  dateDetail: 'dateDetail',
                  editorialTopics: 'VSTOPICS',
                  editorialTopicsManual: 'VSTOPICS',
                  expConfig: 'expConfig',
                  FinancialCheckup: ' FinancialCheckup',
                  flowType: 'VSDESC2',
                  formcomplete: 'formComplete',
                  formstart: 'formStart',
                  fullPath: 'fullPath',
                  glanceSession: 'glanceSession',
                  guidanceact: 'guidAct',
                  guidancecomplete: 'guidanceComplete',
                  guidancestart: 'guidanceStart',
                  guidancetool: 'guidTool',
                  hasWalkMe: 'hasWalkMe',
                  headline: 'VSHEADLINE',
                  ipoCompId: 'VSCOID',
                  last_clicked_banner: 'lcb',
                  last_clicked_portsumm_card: 'lcpsc',
                  legacyBricklet: 'VSBRICKLET',
                  lilo: 'lilo',
                  list1: 'list1',
                  location: 'location',
                  mboxVersion: 'mboxVersion',
                  measurementDebug: 'measurementDebug',
                  navType: 'NAVTYPE',
                  new_piDData2: 'new_piDData2',
                  numAccounts: 'npa',
                  origin: 'VSORIGIN',
                  p99: 'p99',
                  p9: 'p9',
                  pageID: 'VSPGID',
                  pageName: 'VSPAGE',
                  pagePurpose: 'VSPURP',
                  pageTemp: 'VSPGTEMP',
                  pageVersion: 'VSPGVER',
                  piDData1: 'piDData1',
                  piDData2: 'piDData2',
                  piDData3: 'piDData3',
                  piDData5: 'piDData5',
                  piDData6: 'piDData6',
                  piDData7: 'piDData7',
                  piDData8: 'piDData8',
                  piDData9: 'piDData9',
                  planList: 'planList',
                  product: 'VSPROD',
                  pznFlag: 'VSBIZEVENT',
                  reccEngMetaData: 'reccEngMetaData',
                  relmap_data: 'rmdata',
                  response: 'response',
                  rsid_flag: 'rsid_flag',
                  searchTerm: 'VSSEARCHPHRASE',
                  sec1: 'SEC1',
                  sec2: 'SEC2',
                  sec: 'SEC',
                  secSub: 'VSSECSUB',
                  source: 'VSSOURCE',
                  sourceManual: 'VSSOURCE',
                  subdomain: 'subdomain',
                  subscription: 'subscription',
                  toacomplete: 'toacomplete',
                  toaflowtype: 'toaflowtype',
                  toaresume: 'toaresume',
                  toasave: 'toasave',
                  toastart: 'toastart',
                  trackAnalytics_data_keys: 'track_analytics_keys',
                  tradecomplete: 'tradecomp',
                  tradestart: 'tradestart',
                  tradeSymbol: 'tradeSymbol',
                  phase: 'phase',
                  ownership: 'ownership',
                  tradeintent: 'tradeintent',
                  wiDData1: 'wiDData1',
                  productlabels: 'productlabels',
                  productkeys: 'productkeys',
                  topiclabels: 'topiclabels',
                  topickeys: 'topickeys',
                  jtbdlabels: 'jtbdlabels',
                  jtbdkeys: 'jtbdkeys',
                },
                obj = Bootstrapper._dataLayer._d[dataLayerID] || {};
              for (var key in dataLayerVariables)
                if (key && obj[key]) window.s.contextData[dataLayerVariables[key]] = obj[key];
            }.apply(this, arguments);
          } finally {
            if ($___old_6363fe99102c2a5b)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_6363fe99102c2a5b
              ));
          }
        };
        Bootstrapper.trackerFramework.setGlobalValues.add(function () {
          Bootstrapper._assignSCValues('originalValues');
          Bootstrapper._assignSCValues('globalMetaTagDataLayer');
          Bootstrapper._assignSCValues('globalDataLayer');
        });
        Bootstrapper.trackerFramework.setSectionValues.add(function () {
          Bootstrapper._assignSCValues('sectionValues');
        });
        Bootstrapper.trackerFramework.postSendData.add(function () {
          Bootstrapper._firstPageName = s.pageName;
        });
        Bootstrapper.trackerFramework.setPageValues.add(function () {
          Bootstrapper._assignSCValues('pageValues');
          s.eVar18 = 'D=c16';
          var d = $data('globalDataLayer', 'ensighten_publish_date');
          if (d) s.eVar75 = d + '|S.2.9.0|TMS';
          else s.eVar75 = '2018-08-08|S.2.9.0|TMS';
          s.eVar16 = 'D=c11';
          s.eVar21 = s.getNumDaysSinceEvent(365, 'visitStart');
          if (s.contextData.VSSECSUB) {
            var splitSECSUB = s.contextData.VSSECSUB.split('/');
            if (s.contextData.VSSECSUB.charAt(0) == '/') splitSECSUB.shift();
            if (splitSECSUB.length > 0) s.contextData.SEC = splitSECSUB.shift();
            if (splitSECSUB.length > 0) s.contextData.SEC1 = splitSECSUB.shift();
            if (splitSECSUB.length > 0) s.contextData.SEC2 = splitSECSUB.shift();
          } else if (!s.contextData.SEC) s.contextData.SEC = ' ';
          if (s.contextData.VSCHANNEL) s.pageName = s.contextData.VSCHANNEL;
          if (s.contextData.SEC && s.pageName) s.pageName += '|' + s.contextData.SEC;
          if (s.contextData.SEC1 && s.pageName) s.pageName += '|' + s.contextData.SEC1;
          if (s.contextData.SEC2 && s.pageName) s.pageName += '|' + s.contextData.SEC2;
          if (s.contextData.VSPAGE && s.pageName) s.pageName += '|' + s.contextData.VSPAGE;
          else s.pageName = location.hostname + location.pathname;
          if (
            location.pathname.indexOf('nbGuidanceLanding') >= 0 ||
            location.pathname.indexOf('nbCollegeLanding.go') >= 0 ||
            location.pathname.indexOf('nbNavBasicIncomeProjections.go') >= 0 ||
            location.pathname.indexOf('nbInvestLanding.go') >= 0
          )
            s.contextData.fullPath =
              s.contextData.VSCHANNEL +
              '|' +
              s.contextData.SEC +
              '|' +
              s.contextData.SEC1 +
              '|' +
              s.contextData.VSPAGE;
          if (typeof s.contextData.VSCHANNEL === 'undefined')
            if (
              location.pathname.match(/nbretail/i) ||
              location.pathname.match(/\/ftgw\/fbc\/ofsps(?!(\/rest))\//i)
            )
              s.contextData.VSCHANNEL = 'NBRetail web';
            else s.contextData.VSCHANNEL = 'Fid.com web';
          if (s.contextData.SEC === ' ') s.contextData.SEC = 'NotConfigured';
          if (
            s.contextData &&
            (s.contextData['accountStart'] || s.contextData['accountComplete'])
          ) {
            if (s.contextData['accountStart'])
              s.contextData['timeToCompleteAO'] = s.__getTimeToComplete('start', 'sc_1', 0);
            if (s.contextData['accountComplete']) {
              var obj = s.__getTimeToComplete('stop', 'sc_1', 0);
              if (typeof obj === 'object' && obj && obj.seconds) {
                s.contextData['timeToCompleteAO'] =
                  obj.seconds + '|' + obj.minutes + '|' + obj.hours + '|' + obj.days;
                s.contextData['timeToCompleteAOSec'] = obj.seconds;
              }
            }
          }
          s.__channelManager('ccsource,dfid,imm_eid,immid', ':', 'sc_2', '1', 'sc_3');
          if (s._channel) {
            s.mailRef = s._referringDomain.indexOf('.mail.');
            if (s.mailRef > -1) s._referringDomain = s._referringDomain.substring(s.mailRef + 1);
            if (s._channel == 'Paid Search') {
              if (s._keywords == 'Keyword Unavailable') s._channel = 'Paid Search Unknown';
              else s._channel = 'Paid Search Un-Branded';
              if (
                s._keywords.match(
                  /(fedelity|fedility|fedilty|fedlity|fidality|fideity|fidelit|fidelity|fidelityinvestments|fideliy|fideltiy|fidelty|fidleity|fidlity|fiedelity|fiedlity|fielity|fildelity)/i
                )
              )
                s._channel = 'Paid Search Branded';
            }
            if (s._channel == 'Natural Search') {
              if (s._keywords == 'Keyword Unavailable') s._channel = 'Natural Search Unknown';
              else s._channel = 'Natural Search Un-Branded';
              if (
                s._keywords.match(
                  /(fedelity|fedility|fedilty|fedlity|fidality|fideity|fidelit|fidelity|fidelityinvestments|fideliy|fideltiy|fidelty|fidleity|fidlity|fiedelity|fiedlity|fielity|fildelity)/i
                )
              )
                s._channel = 'Natural Search Branded';
            }
            s.contextData['channelManager'] = s._channel;
            if (s._keywords.indexOf('+') == 0) {
              s._keywords = s._keywords.replace('+', '  ');
              s._keywords = s.repl(s._keywords, '+', ' ');
              s._keywords = s.repl(s._keywords, '  ', ' +').replace(/^\s+/, '');
            }
            var _chan = s._channel,
              _detail = '';
            switch (_chan) {
              case 'Natural Search Branded':
                _detail = 'nb|' + s._partner + '|' + s._keywords;
                break;
              case 'Natural Search Un-Branded':
                _detail = 'nub|' + s._partner + '|' + s._keywords;
                break;
              case 'Paid Search Branded':
                _detail = 'pb|' + s._partner + '|' + s._keywords;
                break;
              case 'Paid Search Un-Branded':
                _detail = 'pub|' + s._partner + '|' + s._keywords;
                break;
              case 'Typed/Bookmarked':
                _detail = 'tb|' + s.pageName;
                break;
              case 'Other Natural Referrers':
                _chan = 'Referring Domains';
                _detail = 'r|' + s._referringDomain;
                break;
              case 'Unknown Paid Channel':
                _chan = 'Other Campaign Channels';
                _detail = s._campaignID;
                break;
              case 'Organic Social Networks':
                _detail = s._campaign;
                break;
              case 'Net Benefits':
                if (s._campaignID == 'ao:nb') _detail = s._campaignID;
                else _detail = s._referringDomain;
                break;
              default:
                _detail = s._campaignID != 'n/a' ? s._campaignID : s._campaignID;
            }
            s.contextData['channelManager'] = _chan;
            s.contextData['channelManagerDetail'] = _detail;
            s.contextData['channelManagerKeyword'] = s._keywords;
            s.contextData['channelManagerStacking'] = s.__crossVisitParticipation(
              s.contextData['channelManager'],
              'sc_4',
              '30',
              '5',
              ' > ',
              '',
              '1'
            );
          }
          var sc_product_string = $data('globalDataLayer', 'sc_product_string');
          if (sc_product_string) {
            s.products = sc_product_string.sc_products;
            s.events = sc_product_string.sc_events;
          }
        });
        Bootstrapper.trackerFramework.sendData.add(function () {
          if (typeof Bootstrapper.setupActData === 'function') Bootstrapper.setupActData();
          if (typeof s === 'object' && !Bootstrapper._stopSCCall) tmsReadCVI();
        });
        Bootstrapper.trackerFramework.postSendData.add(function () {
          if (typeof window.tmsResetSelectContextData === 'function')
            window.tmsResetSelectContextData();
          window.tmsConfig.autoLaunchSuccess = true;
        });
        Bootstrapper.trackerFramework.initializeCoreLibraries.add(function () {
          const $___old_fc1497c0a5b6a149 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_fc1497c0a5b6a149)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_47c01efa79e9f191.userAgent
              ));
            return function () {
              if (window.tmsConfig === undefined) window.tmsConfig = {};
              window.tmsConfig.scFlag = true;
              window.tmsConfig.DELAY_TIME = 200;
              window.tmsConfig.MAX_TRIES = 5;
              window.tmsConfig.numTries = 0;
              var s_account = (window.s_account = Bootstrapper.dataManager.getDataElement(
                'globalDataLayer',
                'rsid'
              ));
              if (typeof s_account === 'undefined') s_account = window.s_account = 'fidelitycomqa';
              var s = (window.s = s_gi(s_account));
              s.account = s_account;
              window.s_gi = s_gi;
              Bootstrapper.SiteCatalystConfig = {};
              s.visitorNamespace = 'fidelity';
              s.trackDownloadLinks = true;
              s.trackExternalLinks = true;
              s.trackInlineStats = false;
              s.linkDownloadFileTypes =
                'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
              s.linkInternalFilters =
                'javascript:,fidelity.com,fmr.com,moneyfirsts.com,fidelityinvestorcommunity.com,espn.go.com,personalfinancelearningcenter.com';
              s.linkLeaveQueryString = false;
              s.linkTrackVars =
                'eVar16,prop70,contextData.clicktale_uid,contextData.event_list,contextData.rmdata';
              s.linkTrackEvents = 'None';
              s.trackingServer = 'sitecatalystu.fidelity.com';
              s.trackingServerSecure = 'sitecatalyst.fidelity.com';
              s.ssl = true;
              if (typeof window.visitor === 'object') s.visitor = window.visitor;
              s.usePlugins = true;
              Bootstrapper.SiteCatalystConfig.isSafari =
                navigator.userAgent.toLowerCase().indexOf('safari') > 0 &&
                navigator.userAgent.toLowerCase().indexOf('chrome') < 0;
              try {
                s.contextData.p0 = window.tmsGetCookieValue('MC').length;
              } catch (e) {
                s.contextData.p0 = '-';
              }
              s.contextData.p7 = s.contextData.p2 = $data('globalDataLayer', 'mid');
              window.tmsReadCVI = function () {
                const $___old_eb884ef1986a7f1a = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_eb884ef1986a7f1a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_47c01efa79e9f191.userAgent
                    ));
                  return function () {
                    var cookieValue = FidMsmt.getCVI(document.cookie);
                    if (cookieValue) {
                      for (var key in cookieValue) s.contextData[key] = cookieValue[key];
                      var potentialT4 = '';
                      var potentialT5 = '';
                      if (typeof _dmt !== 'undefined') {
                        potentialT4 =
                          _dmt.Vendor.EnsightenActivate.getProfileAttribute('T4') || '';
                        potentialT5 =
                          _dmt.Vendor.EnsightenActivate.getProfileAttribute('T5') || '';
                      }
                      var oldP8 = s.contextData.p8 || '';
                      s.contextData.p8 = oldP8 + '|' + potentialT4 + '|' + potentialT5;
                      if (Bootstrapper.dataManager)
                        Bootstrapper._dataLayer = Bootstrapper.dataManager.getData();
                      if (typeof Bootstrapper.checkActVisId === 'function')
                        Bootstrapper.checkActVisId();
                      tmsTrackInitialPageView();
                    } else if (
                      !window.alternateCVI &&
                      window.tmsConfig.numTries < window.tmsConfig.MAX_TRIES
                    ) {
                      window.tmsConfig.numTries++;
                      setTimeout(function () {
                        tmsReadCVI();
                      }, window.tmsConfig.DELAY_TIME);
                    } else window.tmsTrackInitialPageView();
                  }.apply(this, arguments);
                } finally {
                  if ($___old_eb884ef1986a7f1a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_eb884ef1986a7f1a
                    ));
                }
              };
              window.tmsTrackInitialPageView = function () {
                const $___old_ef1019efeeb34c92 = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_ef1019efeeb34c92)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_47c01efa79e9f191.userAgent
                    ));
                  return function () {
                    if (location.pathname.match(/aongapp/i))
                      if (!window.tmsCustomAODataLayerComplete)
                        if (typeof window.tmsCustomAODataLayer) window.tmsCustomAODataLayer();
                    if (
                      !Bootstrapper._stopInitialPageLoad &&
                      !$data('globalDataLayer', 'stop_sc_call')
                    ) {
                      try {
                        if (typeof _dmt !== 'undefined' && _dmt.Data.Bot.check());
                        else s.t();
                      } catch (e) {
                        s.t();
                      }
                      if ($data('globalDataLayer', 'isWIPage'))
                        Bootstrapper._trackAnalyticsHasRunOnce = true;
                      _log('Initial page load tracked');
                    }
                  }.apply(this, arguments);
                } finally {
                  if ($___old_ef1019efeeb34c92)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_ef1019efeeb34c92
                    ));
                }
              };
              window.tmsResetSelectContextData = function () {
                if (typeof s === 'object') {
                  var name_space = 's_i_' + ($data('globalDataLayer', 'rsid') || ''),
                    match = 0;
                  if (typeof window[name_space] !== 'undefined') {
                    var i = '';
                    while (typeof window[name_space + (i ? '_' + i : '')] !== 'undefined') {
                      var l = window[name_space + (i ? '_' + i : '')];
                      if (
                        (typeof l === 'object' &&
                          l &&
                          l.attributes &&
                          l.attributes.src &&
                          l.attributes.src.value &&
                          l.attributes.src.value.indexOf('pev2=') == -1) ||
                        (l.responseURL && l.responseURL.indexOf('pev2=') == -1)
                      ) {
                        match = 1;
                        break;
                      } else i = i == '' ? 1 : i + 1;
                    }
                  }
                  if (match) {
                    var resetContextDataVariables = {
                      accountStart: 'accountStart',
                      accountComplete: 'accountComplete',
                      formstart: 'formStart',
                      formcomplete: 'formComplete',
                      guidancestart: 'guidanceStart',
                      guidancecomplete: 'guidanceComplete',
                      nextGenMID: 'nextGenMID',
                      toacomplete: 'toacomplete',
                      toasave: 'toasave',
                      toaresume: 'toaresume',
                      toastart: 'toastart',
                      tradecomplete: 'tradecomp',
                      tradestart: 'tradestart',
                    };
                    for (var key in resetContextDataVariables) {
                      if (key && window.s.contextData[resetContextDataVariables[key]])
                        window.s.contextData[resetContextDataVariables[key]] = null;
                      if (key && window.ivs.contextData[resetContextDataVariables[key]])
                        window.ivs.contextData[resetContextDataVariables[key]] = null;
                    }
                    s.events = '';
                    s.products = '';
                  } else setTimeout(tmsResetSelectContextData, 100);
                }
              };
              window.tmsRebuildSCPageName = function () {
                if (s.contextData.VSCHANNEL) s.pageName = s.contextData.VSCHANNEL;
                if (s.contextData.SEC && s.pageName) s.pageName += '|' + s.contextData.SEC;
                if (s.contextData.SEC1 && s.pageName) s.pageName += '|' + s.contextData.SEC1;
                if (s.contextData.SEC2 && s.pageName) s.pageName += '|' + s.contextData.SEC2;
                if (s.contextData.VSPAGE && s.pageName) s.pageName += '|' + s.contextData.VSPAGE;
              };
              window.tmsNavBarInteraction = function (interactionString) {
                var oldCVI = window.FidMsmt.getCookieElem('cvi=', document.cookie);
                var newCVI = oldCVI.replace(/&p7=.*&/, '&').replace(/&p9=.*&?/, '&');
                newCVI += '&p9=' + interactionString;
                window.tmsSetCookieValue('cvi', newCVI);
              };
              window.tmsTrackCustomLinks = function (contextDataType, linkDesc) {};
              window.tmsTrackCustomLinks = function (contextDataType, linkDesc) {
                s.contextData[contextDataType] = s.pageName + '|' + linkDesc;
                s.contextData['shortInteraction'] = linkDesc.replace(/.*:/, '');
                s.contextData.dateDetail = $data('globalDataLayer', 'dateDetail');
                var clvars =
                  'contextData.VSCHANNEL' +
                  ',contextData.dateDetail' +
                  ',contextData.SEC' +
                  ',contextData.SEC1' +
                  ',contextData.SEC2' +
                  ',contextData.VSPGVER' +
                  ',contextData.VSPURP' +
                  ',contextData.VSPROD' +
                  ',contextData.VSTOPICS' +
                  ',contextData.VSHEADLINE' +
                  ',contextData.NAVTYPE' +
                  ',contextData.VSDATE' +
                  ',contextData.VSAUTHOR' +
                  ',contextData.VSSOURCE' +
                  ',contextData.VSSEARCHPHRASE' +
                  ',contextData.VSINDEX' +
                  ',contextData.subscription' +
                  ',contextData.VSBIZEVENT' +
                  ',contextData.p1' +
                  ',contextData.p2' +
                  ',contextData.p3' +
                  ',contextData.p4' +
                  ',contextData.p5' +
                  ',contextData.p6' +
                  ',contextData.p8' +
                  ',contextData.p0' +
                  ',contextData.shortInteraction' +
                  ',contextData.popupSymbol' +
                  ',contextData.popupSecurity' +
                  ',eVar16' +
                  ',contextData.' +
                  contextDataType;
                if (contextDataType != 'interaction') {
                  s.contextData['interaction'] = s.pageName + '|' + linkDesc;
                  clvars += ',contextData.interaction';
                }
                if (linkDesc.toLowerCase().indexOf('docked ticket') != -1) {
                  s.contextData['docketPageName'] = Bootstrapper._firstPageName;
                  clvars += ',contextData.docketPageName';
                }
                s.linkTrackVars += ',' + clvars;
                s.linkTrackEvents = 'None';
                var backupSuites = s.prop70;
                s.tl(this, 'o', s.pageName + '|' + linkDesc);
                s.prop70 = backupSuites;
                s.linkTrackVars = s.linkTrackVars.replace(',' + clvars, '');
                s.contextData[contextDataType] = null;
                s.contextData['shortInteraction'] = null;
                s.contextData['docketPageName'] = null;
                if (contextDataType != 'interaction') s.contextData['interaction'] = null;
              };
              window.tmsTrackCustomLinksWithEvents = function (contextDataType, linkDesc, events) {
                s.contextData[contextDataType] = s.pageName + '|' + linkDesc;
                s.contextData['shortInteraction'] = linkDesc.replace(/.*:/, '');
                s.contextData.dateDetail = $data('globalDataLayer', 'dateDetail');
                var clvars =
                  'contextData.VSCHANNEL' +
                  ',contextData.dateDetail' +
                  ',contextData.SEC' +
                  ',contextData.SEC1' +
                  ',contextData.SEC2' +
                  ',contextData.VSPGVER' +
                  ',contextData.VSPURP' +
                  ',contextData.VSPROD' +
                  ',contextData.VSTOPICS' +
                  ',contextData.VSHEADLINE' +
                  ',contextData.NAVTYPE' +
                  ',contextData.VSDATE' +
                  ',contextData.VSAUTHOR' +
                  ',contextData.VSSOURCE' +
                  ',contextData.VSSEARCHPHRASE' +
                  ',contextData.VSINDEX' +
                  ',contextData.subscription' +
                  ',contextData.VSBIZEVENT' +
                  ',contextData.p1' +
                  ',contextData.p2' +
                  ',contextData.p3' +
                  ',contextData.p4' +
                  ',contextData.p5' +
                  ',contextData.p6' +
                  ',contextData.p8' +
                  ',contextData.p0' +
                  ',contextData.shortInteraction' +
                  ',contextData.popupSymbol' +
                  ',contextData.popupSecurity' +
                  ',eVar16' +
                  ',events' +
                  ',contextData.' +
                  contextDataType;
                if (contextDataType != 'interaction') {
                  s.contextData['interaction'] = s.pageName + '|' + linkDesc;
                  clvars += ',contextData.interaction';
                }
                s.linkTrackVars += ',' + clvars;
                s.linkTrackEvents = events;
                s.events = events;
                var backupSuites = s.prop70;
                s.tl(this, 'o', s.pageName + '|' + linkDesc);
                s.prop70 = backupSuites;
                s.linkTrackVars = s.linkTrackVars.replace(',' + clvars, '');
                s.contextData[contextDataType] = null;
                s.contextData['shortInteraction'] = null;
                if (contextDataType != 'interaction') s.contextData['interaction'] = null;
              };
              window.trackPageView = function (contentType, contentName) {};
              window.tmsTrackPageView = function (contentType, contentName) {
                var tempPageName = s.pageName;
                s.contextData['contentChange'] = contentName;
                s.contextData.dateDetail = $data('globalDataLayer', 'dateDetail');
                if (s.pageName) s.pageName += '|' + contentType + ':' + contentName;
                s.t();
                s.pageName = tempPageName;
                s.contextData['contentChange'] = null;
              };
              window.tmsTrackGenericContentChangeAsPV = function (contentDesc) {
                if (window.tmsConfig.scFlag)
                  window.tmsTrackPageView('Content Change', contentDesc);
                if (window.tmsConfig.iFlag) window.tmsSendIEventTag('Content Change', contentDesc);
              };
              window.tmsTrackGenericContentChangeAsExitPV = function (contentDesc) {
                if (window.tmsConfig.scFlag) {
                  s.contextData['exitPageView'] = contentDesc;
                  window.tmsTrackPageView('Content Change', contentDesc + ' Exit');
                  s.contextData['exitPageView'] = null;
                }
                if (window.tmsConfig.iFlag) window.tmsSendIEventTag('Content Change', contentDesc);
              };
              window.tmsTrackContentChangeAsPV = function (contentChangeType, contentDesc) {
                if (window.tmsConfig.scFlag)
                  window.tmsTrackPageView(contentChangeType, contentDesc);
                if (window.tmsConfig.iFlag)
                  window.tmsSendIEventTag(contentChangeType, contentDesc);
              };
              window.tmsTrackGenericInteraction = function (contentDesc) {
                if (window.tmsConfig.scFlag)
                  window.tmsTrackCustomLinks('interaction', 'Generic Action:' + contentDesc);
                if (window.tmsConfig.iFlag) window.tmsSendIEventTag('Generic Action', contentDesc);
              };
              window.tmsTrackInteraction = function (actionType, contentDesc) {
                if (window.tmsConfig.scFlag)
                  window.tmsTrackCustomLinks('interaction', actionType + ':' + contentDesc);
                if (window.tmsConfig.iFlag) window.tmsSendIEventTag(actionType, contentDesc);
              };
              window.tmsTrackSocialShare = function (socialSite) {
                if (socialSite == 'fb_share') socialSite = 'Facebook';
                if (socialSite == 'tweet') socialSite = 'Twitter';
                if (window.tmsConfig.scFlag)
                  window.tmsTrackCustomLinks('SocialShare', 'Share to ' + socialSite);
                if (window.tmsConfig.iFlag)
                  window.tmsSendIEventTag('SocialShare', 'Share to ' + socialSite);
              };
              window.tmsTrackContacts = function (contactType) {
                if (window.tmsConfig.scFlag) window.tmsTrackCustomLinks('ContactUs', contactType);
                if (window.tmsConfig.iFlag) window.tmsSendIEventTag('ContactUs', contactType);
              };
              window.tmsTrackContentInteraction = function (contentDesc) {
                if (window.tmsConfig.scFlag)
                  window.tmsTrackCustomLinks(
                    'contentInteraction',
                    contentDesc + ':Content Interaction'
                  );
                if (window.tmsConfig.iFlag)
                  window.tmsSendIEventTag(contentDesc, 'Content Interaction');
              };
              window.tmsTrackCustomGenericContentChangeAsPV = function (
                variableName,
                variableValue,
                newContentDesc
              ) {
                if (window.tmsConfig.scFlag) {
                  window.s.contextData[variableName] = variableValue;
                  window.tmsTrackPageView('Content Change', newContentDesc);
                  window.s.contextData[variableName] = null;
                }
                if (window.tmsConfig.iFlag) {
                  var tempObj = {};
                  tempObj['' + variableName] = variableValue;
                  window.tmsSendCustomIEventTag('Content Change', newContentDesc, tempObj);
                }
              };
              window.tmsTrackCustomContentChangeAsPV = function (
                variableName,
                variableValue,
                newContentChangeType,
                newContentDesc
              ) {
                if (!newContentDesc) {
                  if (typeof tmsTrackCustomGenericContentChangeAsPV === 'function')
                    tmsTrackCustomGenericContentChangeAsPV(
                      variableName,
                      variableValue,
                      newContentChangeType
                    );
                } else {
                  if (window.tmsConfig.scFlag) {
                    window.s.contextData[variableName] = variableValue;
                    window.tmsTrackPageView(newContentChangeType, newContentDesc);
                    window.s.contextData[variableName] = null;
                  }
                  if (window.tmsConfig.iFlag) {
                    var tempObj = {};
                    tempObj['' + variableName] = variableValue;
                    window.tmsSendCustomIEventTag(newContentChangeType, newContentDesc, tempObj);
                  }
                }
              };
              window.tmsTrackCustomPermGenericContentChangeAsPV = function (
                variableName,
                variableValue,
                newContentDesc,
                ccFlag,
                ignoreCards
              ) {
                if (!ccFlag && Bootstrapper._contentCardEvents)
                  if (
                    Bootstrapper._contentCardEvents.eventList
                      .tmsTrackCustomPermGenericContentChangeAsPV[
                      variableName + '|' + variableValue + '|' + newContentDesc
                    ]
                  ) {
                    Bootstrapper._contentCardEvents.storedEvents.push([
                      'tmsTrackCustomPermGenericContentChangeAsPV',
                      variableName,
                      variableValue,
                      newContentDesc,
                    ]);
                    setTimeout(function () {
                      if (Bootstrapper._contentCardEvents.storedEvents.length > 0)
                        window.onContentMeasurementLoaded(!0);
                    }, 3000);
                    return;
                  }
                if (window.tmsConfig.scFlag) {
                  window.s.contextData[variableName] = variableValue;
                  if (ccFlag && !ignoreCards) {
                    var cards = $data('globalDataLayer', 'content_card', { sc: '1' });
                    if (cards) {
                      s.products = cards;
                      var evt = s.products.indexOf('event80') ? 'event80' : 'event81';
                      s.events = s.events ? s.events + ',' + evt : evt;
                    }
                  }
                  window.tmsTrackPageView('Content Change', newContentDesc);
                  s.products = '';
                  s.events = '';
                }
                if (window.tmsConfig.iFlag) {
                  var tempObj = {};
                  tempObj['' + variableName] = variableValue;
                  window.tmsSendCustomIEventTag('Content Change', newContentDesc, tempObj);
                }
              };
              window.tmsTrackCustomPermContentChangeAsPV = function (
                variableName,
                variableValue,
                newContentChangeType,
                newContentDesc
              ) {
                if (window.tmsConfig.scFlag) {
                  window.s.contextData[variableName] = variableValue;
                  window.tmsTrackPageView(newContentChangeType, newContentDesc);
                }
                if (window.tmsConfig.iFlag) {
                  var tempObj = {};
                  tempObj['' + variableName] = variableValue;
                  window.tmsSendCustomIEventTag(newContentChangeType, newContentDesc, tempObj);
                }
              };
              window.tmsTrackSearchResultInteraction = function (index, contentDesc, module) {
                contentDesc = contentDesc
                  .replace(/(<([^>]+)>)/gi, '')
                  .replace('&amp;', '&')
                  .replace(/&(?:[a-z0-9]{2,8}|#[0-9]{2,3}\+);/i, '');
                if (module === null || module === undefined || module === '') module = 'Unknown';
                if (window.tmsConfig.scFlag) {
                  window.s.contextData['VSINDEX'] = index;
                  window.tmsTrackCustomLinks('interaction', module + ':' + contentDesc);
                  window.s.contextData['VSINDEX'] = null;
                }
                if (window.tmsConfig.iFlag) {
                  var vsEvent = {};
                  vsEvent['VSSEARCHPHRASE'] = ms['VSSEARCHPHRASE'];
                  vsEvent['VSINDEX'] = index;
                  window.tmsSendCustomIEventTag(module, contentDesc, vsEvent);
                }
              };
              window.tmsTrackSearchModuleInteraction = function (module, contentDesc) {
                if (module == 'Take Action') {
                  if (window.tmsConfig.scFlag)
                    window.tmsTrackCustomLinks('interaction', module + ':' + contentDesc);
                } else if (module == 'Ratings and Reviews') {
                  var rrMap = {
                    'Read 001 Reviews': 'Read Fidelity Cash Management Account Reviews',
                    'Read 002 Reviews': 'Read Full View Reviews',
                    'Read 003 Reviews': 'Read Fidelity AmEx Card Reviews',
                    'Read 004 Reviews': 'Read Fidelity Visa Card Reviews',
                    'Read 005 Reviews': 'Read Traditional IRA Reviews',
                    'Read 006 Reviews': 'Read Roth IRA Reviews',
                    'Read 007 Reviews': 'Read 401k Rollover to IRA Reviews',
                    'Read 008 Reviews': 'Read The Fidelity Account Reviews',
                  };
                  var newDesc = rrMap[contentDesc];
                  if (newDesc) contentDesc = newDesc;
                }
                if (window.tmsConfig.iFlag) {
                  var vsEvent = {};
                  vsEvent['VSSEARCHPHRASE'] = ms['VSSEARCHPHRASE'];
                  window.tmsSendCustomIEventTag(module, contentDesc, vsEvent);
                }
              };
              window.tmsTrackInvestorCenter = function (branchLocation) {
                var branchString = '';
                for (var i = 0; i < branchLocation.length; i++)
                  branchString += branchLocation[i] + '|';
                if (window.tmsConfig['scFlag']) {
                  s.contextData['investorCenter'] = branchString;
                  window.tmsTrackPageView(
                    'Investor Center Search Results',
                    'Close Locations Found'
                  );
                  s.contextData['investorCenter'] = null;
                }
                window.tmsSendIEventTag('Investor Center Search Results', branchString);
              };
              window.tmsTrackInvestorCenterCTC = function (branchLocation) {
                if (window.tmsConfig['scFlag']) {
                  s.contextData['investorCenter'] = 'No Close Locations to ' + branchLocation;
                  window.tmsTrackPageView(
                    'Investor Center Search Results',
                    'No Close Locations: CTC Displayed'
                  );
                  s.contextData['investorCenter'] = null;
                }
                window.tmsSendIEventTag(
                  'Investor Center Search Results',
                  'No Close Locations to ' + branchLocation
                );
              };
              var runOnceTime = true;
              var localTime;
              var serverTime;
              function s_doPlugins (s) {
                if (s.useBackupPageName) {
                  s.pageName = s.backupPageName;
                  if (s.prop24) s.prop24 = s.prop24 + ': ' + s.videoID;
                  if (s.eVar24) s.eVar24 = s.eVar24 + ': ' + s.videoID;
                }
                if (typeof window.tmsConfig.determineResponsiveFormat === 'function')
                  window.tmsConfig.determineResponsiveFormat();
                if (Bootstrapper.SiteCatalystConfig.isSafari) {
                  if (typeof s.visitorID === 'undefined') s.visitorID = s.contextData.p1;
                } else s.prop11 = s.getPreviousValue(s.pageName, 'gpv_c11', '');
                var linkObject = s.downloadLinkHandler('', 'true');
                if (linkObject) {
                  s.prop15 = linkObject.href.split('/').pop();
                  s.eVar26 = 'D=c15';
                  s.contextData.interaction = 'D=c15';
                  s.linkTrackVars =
                    'prop15,eVar26,contextData.p2,contextData.p6,visitorID,contextData.p7';
                  s.linkTrackEvents = 'None';
                }
                var elink = s.exitLinkHandler();
                if (elink) s.contextData.interaction = elink;
                if (s.linkType)
                  if (s.linkTrackVars && s.linkTrackVars.match(/contextData.cm.ssf/i))
                    s.contextData['cm.ssf'] = '1';
                  else {
                    if (s.linkTrackVars.length > 0) s.linkTrackVars += ',';
                    s.linkTrackVars += 'contextData.cm.ssf';
                    s.contextData['cm.ssf'] = '1';
                  }
                s.timestamp = Bootstrapper.dataManager.getDataElement(
                  'globalDataLayer',
                  'serverTimestampGMTUnix'
                );
                s.tnt = s.trackTNT();
                s.prop70 = $data('globalDataLayer', 'extra_rsid', 1);
                if (typeof s.contextData.shortInteraction === 'string')
                  s.prop70 = window.tmsStripNBSuites(s.prop70);
                if (s.pageName === 'undefined' || s.pageName === null)
                  s.prop70 = window.tmsStripNBSuites(s.prop70);
                else if (
                  s.pageName.indexOf('fmr.com') >= 0 ||
                  s.pageName.indexOf('fidelity.com') >= 0
                )
                  s.prop70 = window.tmsStripNBSuites(s.prop70);
                if ($data('globalDataLayer', 'isWIPage'))
                  if (s.events && s.events !== '') s.contextData.event_list = s.events;
                  else s.contextData.event_list = '';
                else if (s.events) s.contextData.event_list = s.events;
                if (Bootstrapper._data) {
                  $data('trackAnalyticsDL', 'hpd', 1);
                  $data('trackAnalyticsDL', 'ls', 1);
                }
                if (!s.contextData.p2)
                  s.contextData.p7 = s.contextData.p2 = $data('globalDataLayer', 'mid');
                if (!s.contextData.rmdata)
                  s.contextData.rmdata = $data('globalDataLayer', 'relmap_data');
                if (typeof s.visitor === 'object' && s.visitor !== null) {
                  var aid =
                      typeof s.visitor.getAnalyticsVisitorID === 'function'
                        ? s.visitor.getAnalyticsVisitorID()
                        : 'n/a',
                    mid =
                      typeof s.visitor.getMarketingCloudVisitorID === 'function'
                        ? s.visitor.getMarketingCloudVisitorID()
                        : 'n/a';
                  s.contextData.ecidAIDDebug = aid;
                  s.contextData.ecidMIDDebug = mid;
                }
                window._buildTransaction = function (trans) {
                  for (var i in trans) {
                    var tran = trans[i];
                    if (tran) {
                      var input = {};
                      input = tran;
                      if (typeof input === 'object') {
                        if (typeof input.phase === 'string')
                          input.phase = input.phase.toLowerCase();
                        var prdId = '';
                        var buPrefix = 'f';
                        var pname = input.pname ? input.pname : 'z';
                        pname = pname.replace(/[^a-zA-Z\d_-\w"  *"]/g, '');
                        pname = pname.length > 10 ? pname.substr(0, 10) : pname;
                        var msgTitle = input.msgTitle ? input.msgTitle : 'z';
                        msgTitle = msgTitle.replace(/[^a-zA-Z\d_-\w"  *"]/g, '');
                        msgTitle = msgTitle.length > 25 ? msgTitle.substr(0, 25) : msgTitle;
                        var msgType = input.msgType ? input.msgType : 'z';
                        msgType = msgType.replace(/[^a-zA-Z\d_-\w"  *"]/g, '');
                        msgType = msgType.length > 5 ? msgType.substr(0, 6) : msgType;
                        var msgID = input.msgID ? input.msgID : 'z';
                        msgID = msgID.replace(/[^a-zA-Z\d_-\w"  *"]/g, '');
                        prdId = (
                          buPrefix +
                          '|' +
                          pname +
                          '~' +
                          msgTitle +
                          '~' +
                          msgType +
                          '~' +
                          msgID
                        ).toLowerCase();
                        if (typeof input.phase === 'string' && input.phase === 'impression') {
                          prdId = ';' + prdId + ';;;' + 'event80=1' + ';';
                          Bootstrapper._transProdEventString = 'event80';
                        }
                        if (typeof input.phase === 'string' && input.phase === 'clickthru') {
                          prdId = ';' + prdId + ';;;' + 'event76=1' + ';';
                          Bootstrapper._transProdEventString = 'event76';
                        }
                        Bootstrapper._transProdString =
                          (Bootstrapper._transProdString
                            ? Bootstrapper._transProdString + ','
                            : '') + prdId;
                      }
                    }
                  }
                };
                window.addTransactionsToProduct = function () {
                  if (Bootstrapper._transProdString) {
                    s.products =
                      (s.products ? s.products + ',' : '') + Bootstrapper._transProdString;
                    s.linkTrackVars += ',products';
                    Bootstrapper._transProdString = '';
                  }
                  if (Bootstrapper._transProdEventString) {
                    s.events =
                      (s.events ? s.events + ',' : '') + Bootstrapper._transProdEventString;
                    s.contextData.event_list = Bootstrapper._transProdEventString;
                    s.linkTrackEvents = s.events;
                    Bootstrapper._transProdEventString = '';
                  }
                };
                if (typeof Bootstrapper._data === 'object' && Bootstrapper._data.trans)
                  _buildTransaction(Bootstrapper._data.trans);
                window.addTransactionsToProduct();
                var callback = function (requestUrl) {
                  Bootstrapper.prevRequestURL = Bootstrapper.prevRequestURL || '';
                  if (Bootstrapper.prevRequestURL !== requestUrl) {
                    Bootstrapper.prevRequestURL = requestUrl;
                    var encoded = '',
                      decoded = '';
                    encoded = (requestUrl.match(/c\.&.*&\.c/)[0] || '')
                      .replace('c.&', '')
                      .replace('&.c', '');
                    decoded = 'RSID=' + requestUrl.replace(/.*\/ss\//, '').split('/')[0];
                    encoded += (requestUrl.match(/&pageName=.*&g=/)[0] || '').replace('&g=', '');
                    if (requestUrl.match(/&tnt=.*&c11/)) {
                      tntOrig = requestUrl
                        .match(/&tnt=.*&c11/)[0]
                        .replace('&tnt=', '')
                        .replace('&c11', '');
                      tntSplit = tntOrig.split('%2C');
                      tntNew = '';
                      if (tntSplit.length > 0)
                        for (x = 0; x < tntSplit.length; x++)
                          if (tntSplit[x] != '') {
                            if (tntNew.length == 0) tntNew += '&tnt=';
                            else tntNew += '%2C';
                            tntNew += tntSplit[x];
                          }
                      encoded += tntNew;
                    }
                    var products = (requestUrl.match(/&products=.*&/)
                      ? requestUrl.match(/&products=.*&/)[0]
                      : ''
                    ).replace('&', '');
                    if (products.indexOf('&') > -1)
                      encoded += '&' + products.substr(0, products.indexOf('&'));
                    var events = (requestUrl.match(/&events=.*&/)
                      ? requestUrl.match(/&events=.*&/)[0]
                      : ''
                    ).replace('&', '');
                    if (events.indexOf('&') > -1)
                      encoded += '&' + events.substr(0, events.indexOf('&'));
                    encoded += (requestUrl.match(/&v75=.*&s=/)
                      ? requestUrl.match(/&v75=.*&s=/)[0]
                      : ''
                    )
                      .replace('&s=', '')
                      .replace('&v75', '&VSVERSION');
                    decoded += $data('globalMetaTagDataLayer', 'pznFlag')
                      ? '&VSBIZEVENT=' + $data('globalMetaTagDataLayer', 'pznFlag')
                      : '';
                    encoded += requestUrl.indexOf('pev2=') == -1 ? '&VSPAGETAG=1' : '';
                    var finalString =
                      encoded +
                      (decoded
                        ? '&' + $data('globalDataLayer', 'paramsForMetricsCall', decoded)
                        : '');
                    Bootstrapper._sendMetricsCall(finalString);
                  }
                };
                if (
                  s.pageName.indexOf('Customer Service') > -1 ||
                  s.pageName.indexOf('Helios') > -1
                ) {
                  if (s.registerPreTrackCallback) s.registerPreTrackCallback(callback);
                } else if (s.registerPostTrackCallback) s.registerPostTrackCallback(callback);
                s.AudienceManagement.setup({
                  partner: 'fidelity',
                  containerNSID: 0,
                  uuidCookie: { name: 'aam_uuid', days: 30 },
                });
              }
              s.doPlugins = s_doPlugins;
              s.loadModule('AudienceManagement');
              s.trackTNT = new Function(
                'v',
                'p',
                'b',
                '' +
                  "var s=this,n='s_tnt',q='s_tntref',p=(p)?p:n,v=(v)?v:n,r='',pm=false" +
                  ",b=(b)?b:true;if(s.Util.getQueryParam(q)!=''){s.referrer=s.Util.get" +
                  "QueryParam(q);}else if(s.c_r(q)!=''){s.referrer=s.c_r(q);document.c" +
                  "ookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(" +
                  "(document.cookie.indexOf(q)!=-1&&s.c_r(q)=='')||(location.search.in" +
                  "dexOf(q+'=')!=-1&&s.Util.getQueryParam(q)=='')){s.referrer='Typed/B" +
                  "ookmarked';document.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:" +
                  "00:01 GMT;';}if(s.Util.getQueryParam(p)!=''){pm=s.Util.getQueryPara" +
                  "m(p);}else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+'=;path=/;exp" +
                  "ires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(s.c_r(p)==''&&s.Util." +
                  "getQueryParam(p)==''){pm='';}if(pm)r+=(pm+',');if(window[v]!=undefi" +
                  "ned)r+=window[v];if(b)window[v]='';return r;"
              );
              s.p_gpv = new Function(
                'k',
                'u',
                'h',
                '' +
                  "var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub" +
                  "string(i+1);v=s.pt(q,'&','p_gvf',k)}return v"
              );
              s.p_gvf = new Function(
                't',
                'k',
                '' +
                  "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" +
                  "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." +
                  "epa(v)}return''"
              );
              s.downloadLinkHandler = new Function(
                'p',
                'o',
                '' +
                  "var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h || (typeof h == 'undefined') || (!h.href) ||(s.linkT" +
                  "ype&&(h||s.linkName))){return'';}i=h.href.indexOf('?');t=s[n];s[n]=p?" +
                  "p:t;if(s.lt(h.href)=='d')s.linkType='d';else h='';s[n]=t;return o?h" +
                  ':h.href;'
              );
              s.p_gh = new Function(
                '',
                '' +
                  "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o" +
                  "),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o" +
                  "=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot" +
                  "(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';"
              );
              s.exitLinkHandler = new Function(
                'p',
                'o',
                '' +
                  "var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h || (typeof h == 'undefined') || (!h.href) || (s.linkTyp" +
                  "e&&(h||s.linkName))){return''};i=h.href.indexOf('?');t=s[n];s[n]=p?p:" +
                  't;h.ref=s.linkLeaveQueryString||i<0?h.href:h.href.substring(0,i);if' +
                  "(s.lt(h.href)=='e')s.linkType='e';else h='';s[n]=t;return o?h:h.hre" +
                  'f;'
              );
              s.p_gh = new Function(
                '',
                '' +
                  "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o" +
                  "),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o" +
                  "=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot" +
                  "(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';"
              );
              s.getNumDaysSinceEvent = new Function(
                'd',
                'c',
                '' +
                  'var s=this,e=new Date(),cval,ct=e.getTime(),t,sd,day=24*60*60*1000;' +
                  "d=d?d:30;c=c?c:'s_lv';e.setTime(ct+d*day);cval=s.c_r(c);if(!cval){s" +
                  ".c_w(c,ct,e);return'First Visit';}else{t=ct-cval;if(t>30*60*1000){s" +
                  "d=''+(t/day);sd=s.split(sd,'.');return sd[0];}else return'First Vis" +
                  "it';}"
              );
              s.getPreviousValue = new Function(
                'v',
                'c',
                'el',
                '' +
                  "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" +
                  "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" +
                  '){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)' +
                  ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" +
                  "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
              );
              s.repl = new Function(
                'x',
                'o',
                'n',
                '' +
                  'var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.' +
                  'substring(i+o.length);i=x.indexOf(o,i+l)}return x'
              );
              s.apl = new Function(
                'l',
                'v',
                'd',
                'u',
                '' +
                  "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a." +
                  'length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas' +
                  'e()));}}if(!m)l=l?l+d+v:v;return l'
              );
              s.split = new Function(
                'l',
                'd',
                '' +
                  'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x' +
                  '++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
              );
              s.join = new Function(
                'v',
                'p',
                '' +
                  "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" +
                  ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" +
                  ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" +
                  'se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;'
              );
              s.vpr = new Function(
                'vs',
                'v',
                "if(typeof(v)!='undefined' && vs){var s=this; eval('s.'+vs+'=\"'+v+'\"')}"
              );
              if (!s.__ccucr) {
                var c_rspers = function () {
                  var s = this,
                    cv = s.c_rr('s_pers'),
                    date = new Date().getTime(),
                    expd = null,
                    cvarr = [],
                    vcv = '';
                  if (!cv) return vcv;
                  cvarr = cv.split(';');
                  for (var i = 0, l = cvarr.length; i < l; i++) {
                    expd = cvarr[i].match(/\|([0-9]+)$/);
                    if (expd && parseInt(expd[1]) >= date) vcv += cvarr[i] + ';';
                  }
                  return vcv;
                };
                var c_r = function (k) {
                  var s = this,
                    d = new Date(),
                    v = s.c_rr(k),
                    c = s.c_rspers(),
                    i,
                    m,
                    e;
                  if (v) return v;
                  k = s.escape ? s.escape(k) : encodeURIComponent(k);
                  i = c.indexOf(' ' + k + '=');
                  c = i < 0 ? s.c_rr('s_sess') : c;
                  i = c.indexOf(' ' + k + '=');
                  if (i < 0) return '';
                  m = c.indexOf('|', i);
                  e = c.indexOf(';', i);
                  m = m > 0 ? m : e;
                  return s.unescape
                    ? s.unescape(c.substring(i + 2 + k.length, m < 0 ? c.length : m))
                    : decodeURIComponent(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
                };
                s.c_rr = s.c_r;
                s.__ccucr = true;
                s.c_rspers = c_rspers;
                s.c_r = s.cookieRead = c_r;
              }
              if (!s.__ccucw) {
                var c_w = function (k, v, e) {
                  var s = this,
                    d = new Date(),
                    ht = 0,
                    pn = 's_pers',
                    sn = 's_sess',
                    pc = 0,
                    sc = 0,
                    pv,
                    sv,
                    c,
                    i,
                    t,
                    f;
                  d.setTime(d.getTime() - 60000);
                  if (s.c_rr(k)) s.c_wr(k, '', d);
                  k = s.escape ? s.escape(k) : encodeURIComponent(k);
                  pv = s.c_rspers();
                  i = pv.indexOf(' ' + k + '=');
                  if (i > -1) {
                    pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1);
                    pc = 1;
                  }
                  sv = s.c_rr(sn);
                  i = sv.indexOf(' ' + k + '=');
                  if (i > -1) {
                    sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
                    sc = 1;
                  }
                  d = new Date();
                  if (e) {
                    if (e == 1)
                      (e = new Date()),
                        (f = e.getYear()),
                        e.setYear(f + 5 + (f < 1900 ? 1900 : 0));
                    if (e.getTime() > d.getTime()) {
                      pv +=
                        ' ' +
                        k +
                        '=' +
                        (s.escape ? s.escape(v) : encodeURIComponent(v)) +
                        '|' +
                        e.getTime() +
                        ';';
                      pc = 1;
                    }
                  } else {
                    sv += ' ' + k + '=' + (s.escape ? s.escape(v) : encodeURIComponent(v)) + ';';
                    sc = 1;
                  }
                  sv = sv.replace(/%00/g, '');
                  pv = pv.replace(/%00/g, '');
                  if (sc) s.c_wr(sn, sv, 0);
                  if (pc) {
                    t = pv;
                    while (t && t.indexOf(';') > -1) {
                      var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
                      t = t.substring(t.indexOf(';') + 1);
                      ht = ht < t1 ? t1 : ht;
                    }
                    d.setTime(ht);
                    s.c_wr(pn, pv, d);
                  }
                  return v == s.c_r(s.unescape ? s.unescape(k) : decodeURIComponent(k));
                };
                s.c_wr = s.c_w;
                s.__ccucw = true;
                s.c_w = s.cookieWrite = c_w;
              }
              s.c_d = function (c) {
                var s = this;
                var d = new Date(0);
                s.c_w(c, '', d);
              };
              function AppMeasurement_Module_Media (q) {
                var b = this;
                b.s = q;
                q = window;
                q.s_c_in || ((q.s_c_il = []), (q.s_c_in = 0));
                b._il = q.s_c_il;
                b._in = q.s_c_in;
                b._il[b._in] = b;
                q.s_c_in++;
                b._c = 's_m';
                b.list = [];
                b.open = function (d, c, e, k) {
                  var f = {},
                    a = new Date(),
                    l = '',
                    g;
                  c || (c = -1);
                  if (d && e) {
                    b.list || (b.list = {});
                    b.list[d] && b.close(d);
                    k && k.id && (l = k.id);
                    if (l)
                      for (g in b.list)
                        !Object.prototype[g] &&
                          b.list[g] &&
                          b.list[g].R == l &&
                          b.close(b.list[g].name);
                    f.name = d;
                    f.length = c;
                    f.offset = 0;
                    f.e = 0;
                    f.playerName = b.playerName ? b.playerName : e;
                    f.R = l;
                    f.C = 0;
                    f.a = 0;
                    f.timestamp = Math.floor(a.getTime() / 1000);
                    f.k = 0;
                    f.u = f.timestamp;
                    f.c = -1;
                    f.n = '';
                    f.g = -1;
                    f.D = 0;
                    f.I = {};
                    f.G = 0;
                    f.m = 0;
                    f.f = '';
                    f.B = 0;
                    f.L = 0;
                    f.A = 0;
                    f.F = 0;
                    f.l = !1;
                    f.v = '';
                    f.J = '';
                    f.K = 0;
                    f.r = !1;
                    f.H = '';
                    f.complete = 0;
                    f.Q = 0;
                    f.p = 0;
                    f.q = 0;
                    b.list[d] = f;
                  }
                };
                b.openAd = function (d, c, e, k, f, a, l, g) {
                  var h = {};
                  b.open(d, c, e, g);
                  if ((h = b.list[d])) (h.l = !0), (h.v = k), (h.J = f), (h.K = a), (h.H = l);
                };
                b.M = function (d) {
                  var c = b.list[d];
                  b.list[d] = 0;
                  c && c.monitor && clearTimeout(c.monitor.interval);
                };
                b.close = function (d) {
                  b.i(d, 0, -1);
                };
                b.play = function (d, c, e, k) {
                  var f = b.i(d, 1, c, e, k);
                  f &&
                    !f.monitor &&
                    ((f.monitor = {}),
                    (f.monitor.update = function () {
                      1 == f.k && b.i(f.name, 3, -1);
                      f.monitor.interval = setTimeout(f.monitor.update, 1000);
                    }),
                    f.monitor.update());
                };
                b.click = function (d, c) {
                  b.i(d, 7, c);
                };
                b.complete = function (d, c) {
                  b.i(d, 5, c);
                };
                b.stop = function (d, c) {
                  b.i(d, 2, c);
                };
                b.track = function (d) {
                  b.i(d, 4, -1);
                };
                b.P = function (d, c) {
                  var e = 'a.media.',
                    k = d.linkTrackVars,
                    f = d.linkTrackEvents,
                    a = 'm_i',
                    l,
                    g = d.contextData,
                    h;
                  c.l &&
                    ((e += 'ad.'),
                    c.v &&
                      ((g['a.media.name'] = c.v),
                      (g[e + 'pod'] = c.J),
                      (g[e + 'podPosition'] = c.K)),
                    c.G || (g[e + 'CPM'] = c.H));
                  c.r && ((g[e + 'clicked'] = !0), (c.r = !1));
                  g['a.contentType'] = 'video' + (c.l ? 'Ad' : '');
                  g['a.media.channel'] = b.channel;
                  g[e + 'name'] = c.name;
                  g[e + 'playerName'] = c.playerName;
                  0 < c.length && (g[e + 'length'] = c.length);
                  g[e + 'timePlayed'] = Math.floor(c.a);
                  0 < Math.floor(c.a) && (g[e + 'timePlayed'] = Math.floor(c.a));
                  c.G ||
                    ((g[e + 'view'] = !0),
                    (a = 'm_s'),
                    b.Heartbeat &&
                      b.Heartbeat.enabled &&
                      (a = c.l
                        ? b.__primetime
                          ? 'mspa_s'
                          : 'msa_s'
                        : b.__primetime
                        ? 'msp_s'
                        : 'ms_s'),
                    (c.G = 1));
                  c.f &&
                    ((g[e + 'segmentNum'] = c.m),
                    (g[e + 'segment'] = c.f),
                    0 < c.B && (g[e + 'segmentLength'] = c.B),
                    c.A && 0 < c.a && (g[e + 'segmentView'] = !0));
                  !c.Q && c.complete && ((g[e + 'complete'] = !0), (c.S = 1));
                  0 < c.p && (g[e + 'milestone'] = c.p);
                  0 < c.q && (g[e + 'offsetMilestone'] = c.q);
                  if (k) for (h in g) Object.prototype[h] || (k += ',contextData.' + h);
                  l = g['a.contentType'];
                  d.pe = a;
                  d.pev3 = l;
                  var q, s;
                  if (b.contextDataMapping)
                    for (h in (d.events2 || (d.events2 = ''),
                    k && (k += ',events'),
                    b.contextDataMapping))
                      if (!Object.prototype[h]) {
                        a =
                          h.length > e.length && h.substring(0, e.length) == e
                            ? h.substring(e.length)
                            : '';
                        l = b.contextDataMapping[h];
                        if ('string' == typeof l)
                          for (q = l.split(','), s = 0; s < q.length; s++)
                            (l = q[s]),
                              'a.contentType' == h
                                ? (k && (k += ',' + l), (d[l] = g[h]))
                                : 'view' == a ||
                                  'segmentView' == a ||
                                  'clicked' == a ||
                                  'complete' == a ||
                                  'timePlayed' == a ||
                                  'CPM' == a
                                ? (f && (f += ',' + l),
                                  'timePlayed' == a || 'CPM' == a
                                    ? g[h] &&
                                      (d.events2 += (d.events2 ? ',' : '') + l + '=' + g[h])
                                    : g[h] && (d.events2 += (d.events2 ? ',' : '') + l))
                                : 'segment' == a && g[h + 'Num']
                                ? (k && (k += ',' + l), (d[l] = g[h + 'Num'] + ':' + g[h]))
                                : (k && (k += ',' + l), (d[l] = g[h]));
                        else if ('milestones' == a || 'offsetMilestones' == a)
                          (h = h.substring(0, h.length - 1)),
                            g[h] &&
                              b.contextDataMapping[h + 's'][g[h]] &&
                              (f && (f += ',' + b.contextDataMapping[h + 's'][g[h]]),
                              (d.events2 +=
                                (d.events2 ? ',' : '') + b.contextDataMapping[h + 's'][g[h]]));
                        g[h] && (g[h] = 0);
                        'segment' == a && g[h + 'Num'] && (g[h + 'Num'] = 0);
                      }
                  d.linkTrackVars = k;
                  d.linkTrackEvents = f;
                };
                b.i = function (d, c, e, k, f) {
                  var a = {},
                    l = new Date().getTime() / 1000,
                    g,
                    h,
                    q = b.trackVars,
                    s = b.trackEvents,
                    t = b.trackSeconds,
                    u = b.trackMilestones,
                    v = b.trackOffsetMilestones,
                    w = b.segmentByMilestones,
                    x = b.segmentByOffsetMilestones,
                    p,
                    n,
                    r = 1,
                    m = {},
                    y;
                  b.channel || (b.channel = b.s.w.location.hostname);
                  if ((a = d && b.list && b.list[d] ? b.list[d] : 0))
                    if (
                      (a.l &&
                        ((t = b.adTrackSeconds),
                        (u = b.adTrackMilestones),
                        (v = b.adTrackOffsetMilestones),
                        (w = b.adSegmentByMilestones),
                        (x = b.adSegmentByOffsetMilestones)),
                      0 > e && (e = 1 == a.k && 0 < a.u ? l - a.u + a.c : a.c),
                      0 < a.length && (e = e < a.length ? e : a.length),
                      0 > e && (e = 0),
                      (a.offset = e),
                      0 < a.length &&
                        ((a.e = (a.offset / a.length) * 100), (a.e = 100 < a.e ? 100 : a.e)),
                      0 > a.c && (a.c = e),
                      (y = a.D),
                      (m.name = d),
                      (m.ad = a.l),
                      (m.length = a.length),
                      (m.openTime = new Date()),
                      m.openTime.setTime(1000 * a.timestamp),
                      (m.offset = a.offset),
                      (m.percent = a.e),
                      (m.playerName = a.playerName),
                      (m.mediaEvent =
                        0 > a.g
                          ? 'OPEN'
                          : 1 == c
                          ? 'PLAY'
                          : 2 == c
                          ? 'STOP'
                          : 3 == c
                          ? 'MONITOR'
                          : 4 == c
                          ? 'TRACK'
                          : 5 == c
                          ? 'COMPLETE'
                          : 7 == c
                          ? 'CLICK'
                          : 'CLOSE'),
                      2 < c || (c != a.k && (2 != c || 1 == a.k)))
                    ) {
                      f || ((k = a.m), (f = a.f));
                      if (c) {
                        1 == c && (a.c = e);
                        if (
                          (3 >= c || 5 <= c) &&
                          0 <= a.g &&
                          ((r = !1), (q = s = 'None'), a.g != e)
                        ) {
                          h = a.g;
                          h > e && ((h = a.c), h > e && (h = e));
                          p = u ? u.split(',') : 0;
                          if (0 < a.length && p && e >= h)
                            for (n = 0; n < p.length; n++)
                              (g = p[n] ? parseFloat('' + p[n]) : 0) &&
                                (h / a.length) * 100 < g &&
                                a.e >= g &&
                                ((r = !0),
                                (n = p.length),
                                (m.mediaEvent = 'MILESTONE'),
                                (a.p = m.milestone = g));
                          if ((p = v ? v.split(',') : 0) && e >= h)
                            for (n = 0; n < p.length; n++)
                              (g = p[n] ? parseFloat('' + p[n]) : 0) &&
                                h < g &&
                                e >= g &&
                                ((r = !0),
                                (n = p.length),
                                (m.mediaEvent = 'OFFSET_MILESTONE'),
                                (a.q = m.offsetMilestone = g));
                        }
                        if (a.L || !f) {
                          if (w && u && 0 < a.length) {
                            if ((p = u.split(',')))
                              for (p.push('100'), n = h = 0; n < p.length; n++)
                                if ((g = p[n] ? parseFloat('' + p[n]) : 0))
                                  a.e < g &&
                                    ((k = n + 1), (f = 'M:' + h + '-' + g), (n = p.length)),
                                    (h = g);
                          } else if (x && v && (p = v.split(',')))
                            for (
                              p.push('' + (0 < a.length ? a.length : 'E')), n = h = 0;
                              n < p.length;
                              n++
                            )
                              if ((g = p[n] ? parseFloat('' + p[n]) : 0) || 'E' == p[n]) {
                                if (e < g || 'E' == p[n])
                                  (k = n + 1), (f = 'O:' + h + '-' + g), (n = p.length);
                                h = g;
                              }
                          f && (a.L = !0);
                        }
                        (f || a.f) &&
                          f != a.f &&
                          ((a.F = !0), a.f || ((a.m = k), (a.f = f)), 0 <= a.g && (r = !0));
                        (2 <= c || 100 <= a.e) && a.c < e && ((a.C += e - a.c), (a.a += e - a.c));
                        if (2 >= c || (3 == c && !a.k))
                          (a.n += (1 == c || 3 == c ? 'S' : 'E') + Math.floor(e)),
                            (a.k = 3 == c ? 1 : c);
                        !r &&
                          0 <= a.g &&
                          3 >= c &&
                          (t = t ? t : 0) &&
                          a.a >= t &&
                          ((r = !0), (m.mediaEvent = 'SECONDS'));
                        a.u = l;
                        a.c = e;
                      }
                      if (!c || (3 >= c && 100 <= a.e))
                        2 != a.k && (a.n += 'E' + Math.floor(e)),
                          (c = 0),
                          (q = s = 'None'),
                          (m.mediaEvent = 'CLOSE');
                      7 == c && (r = m.clicked = a.r = !0);
                      if (
                        5 == c ||
                        (b.completeByCloseOffset &&
                          (!c || 100 <= a.e) &&
                          0 < a.length &&
                          e >= a.length - b.completeCloseOffsetThreshold)
                      )
                        r = m.complete = a.complete = !0;
                      l = m.mediaEvent;
                      'MILESTONE' == l
                        ? (l += '_' + m.milestone)
                        : 'OFFSET_MILESTONE' == l && (l += '_' + m.offsetMilestone);
                      a.I[l] ? (m.eventFirstTime = !1) : ((m.eventFirstTime = !0), (a.I[l] = 1));
                      m.event = m.mediaEvent;
                      m.timePlayed = a.C;
                      m.segmentNum = a.m;
                      m.segment = a.f;
                      m.segmentLength = a.B;
                      b.monitor && 4 != c && b.monitor(b.s, m);
                      b.Heartbeat && b.Heartbeat.enabled && 0 <= a.g && (r = !1);
                      0 == c && b.M(d);
                      r &&
                        a.D == y &&
                        ((d = { contextData: {} }),
                        (d.linkTrackVars = q),
                        (d.linkTrackEvents = s),
                        d.linkTrackVars || (d.linkTrackVars = ''),
                        d.linkTrackEvents || (d.linkTrackEvents = ''),
                        b.P(d, a),
                        d.linkTrackVars || (d['!linkTrackVars'] = 1),
                        d.linkTrackEvents || (d['!linkTrackEvents'] = 1),
                        b.s.track(d),
                        a.F
                          ? ((a.m = k), (a.f = f), (a.A = !0), (a.F = !1))
                          : 0 < a.a && (a.A = !1),
                        (a.n = ''),
                        (a.p = a.q = 0),
                        (a.a -= Math.floor(a.a)),
                        (a.g = e),
                        a.D++);
                    }
                  return a;
                };
                b.O = function (d, c, e, k, f) {
                  var a = 0;
                  if (d && (!b.autoTrackMediaLengthRequired || (c && 0 < c))) {
                    if (b.list && b.list[d]) a = 1;
                    else if (1 == e || 3 == e) b.open(d, c, 'HTML5 Video', f), (a = 1);
                    a && b.i(d, e, k, -1, 0);
                  }
                };
                b.attach = function (d) {
                  var c, e, k;
                  d &&
                    d.tagName &&
                    'VIDEO' == d.tagName.toUpperCase() &&
                    (b.o ||
                      (b.o = function (c, a, d) {
                        var e, h;
                        b.autoTrack &&
                          ((e = c.currentSrc),
                          (h = c.duration) || (h = -1),
                          0 > d && (d = c.currentTime),
                          b.O(e, h, a, d, c));
                      }),
                    (c = function () {
                      b.o(d, 1, -1);
                    }),
                    (e = function () {
                      b.o(d, 1, -1);
                    }),
                    b.j(d, 'play', c),
                    b.j(d, 'pause', e),
                    b.j(d, 'seeking', e),
                    b.j(d, 'seeked', c),
                    b.j(d, 'ended', function () {
                      b.o(d, 0, -1);
                    }),
                    b.j(d, 'timeupdate', c),
                    (k = function () {
                      d.paused || d.ended || d.seeking || b.o(d, 3, -1);
                      setTimeout(k, 1000);
                    }),
                    k());
                };
                b.j = function (b, c, e) {
                  b.attachEvent
                    ? b.attachEvent('on' + c, e)
                    : b.addEventListener && b.addEventListener(c, e, !1);
                };
                void 0 == b.completeByCloseOffset && (b.completeByCloseOffset = 1);
                void 0 == b.completeCloseOffsetThreshold && (b.completeCloseOffsetThreshold = 1);
                b.Heartbeat = {};
                b.N = function () {
                  var d, c;
                  if (b.autoTrack && (d = b.s.d.getElementsByTagName('VIDEO')))
                    for (c = 0; c < d.length; c++) b.attach(d[c]);
                };
                b.j(q, 'load', b.N);
              }
              s.loadModule('Media');
              function AppMeasurement_Module_Integrate (l) {
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
                          g &&
                            (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)),
                          (a = e)));
                  return b;
                };
              }
              s.loadModule('Integrate');
              s.__writeAct = function (nm, val, exp) {
                try {
                  var x = $data('globalDataLayer', 'serverTimestamp').getTime(),
                    data = { val: val, exp: exp ? exp : x + 1800000 };
                  if (!val) data = '';
                  Bootstrapper.updatedActivateElems = Bootstrapper.updatedActivateElems || {};
                  Bootstrapper.updatedActivateElems[nm] = data;
                } catch (e) {
                  Bootstrapper.reportException(e);
                }
              };
              s.__readAct = function (nm, returnObj) {
                try {
                  var obj;
                  if (
                    typeof Bootstrapper != 'undefined' &&
                    typeof Bootstrapper.getActProfileSync === 'function'
                  )
                    obj = Bootstrapper.getActProfileSync()[nm];
                  if (
                    !obj ||
                    !(
                      typeof obj === 'object' &&
                      obj &&
                      obj.val &&
                      obj.exp &&
                      obj.exp > $data('globalDataLayer', 'serverTimestamp').getTime()
                    )
                  ) {
                    s.__writeAct(nm, '');
                    return '';
                  }
                  return returnObj ? obj : obj.val;
                } catch (e) {
                  Bootstrapper.reportException(e);
                }
              };
              s.__getTimeToComplete = function (v, cn, e) {
                try {
                  var x = $data('globalDataLayer', 'serverTimestamp').getTime(),
                    obj =
                      typeof Bootstrapper.getActProfileSync === 'function'
                        ? Bootstrapper.getActProfileSync()
                        : {};
                  e = e ? e : 0;
                  if (v == 'start') {
                    var attr = { exp: e ? x + e * 86400000 : x + 1800000, val: x };
                    s.__writeAct(cn, attr.val, attr.exp);
                  }
                  if (v == 'stop') {
                    if (!(typeof obj === 'object' && obj && cn in obj)) return '';
                    if (
                      typeof obj === 'object' &&
                      obj &&
                      obj[cn] &&
                      $data('globalDataLayer', 'serverTimestamp') >= obj[cn].exp
                    )
                      return '';
                    v = (x - obj[cn].val) / 1000;
                    s.__writeAct(cn, '');
                    return new Object({
                      seconds: v.toFixed(0) || '0.00',
                      minutes: (Math.round((v / 60) * 100) / 100).toFixed(2) || '0.00',
                      hours: (Math.round((v / 3600) * 100) / 100).toFixed(2) || '0.00',
                      days: (Math.round((v / 86400) * 100) / 100).toFixed(2) || '0.00',
                    });
                  }
                  return '';
                } catch (e) {
                  Bootstrapper.reportException(e);
                }
              };
              s.__getValOnce = function (v, c, e, t) {
                try {
                  var s = this,
                    x = $data('globalDataLayer', 'serverTimestamp').getTime(),
                    v = v ? v : '',
                    c = c ? c : 'gvo',
                    e = e ? e : 0,
                    i = t == 'm' ? 60000 : 86400000,
                    k = s.__readAct[(c, 1)];
                  if (v) s.__writeAct(c, v, x + (e === 0 ? 1800000 : e * i));
                  return k && k.val && k.exp && k.exp >= x && v === k.val ? '' : v;
                } catch (e) {
                  Bootstrapper.reportException(e);
                }
              };
              s.__crossVisitParticipation = function (v, cn, ex, ct, dl, ev, dv) {
                try {
                  var s = this,
                    ce,
                    x;
                  if (typeof dv === 'undefined') dv = 0;
                  if (s.events && ev) {
                    var ay = s.split(ev, ','),
                      ea = s.split(s.events, ',');
                    for (var u = 0; u < ay.length; u++)
                      for (x = 0; x < ea.length; x++) if (ay[u] === ea[x]) ce = 1;
                  }
                  if (!v || v === '') {
                    if (ce) s.__writeAct(cn, '');
                    return '';
                  }
                  v = escape(v);
                  var arry = [],
                    a = [],
                    prof =
                      typeof Bootstrapper.getActProfileSync === 'function'
                        ? Bootstrapper.getActProfileSync()
                        : {},
                    prof = prof ? prof[cn] : {},
                    c =
                      typeof prof === 'object' &&
                      prof &&
                      prof.val &&
                      prof.exp &&
                      prof.exp >= $data('globalDataLayer', 'serverTimestamp').getTime()
                        ? prof.val
                        : '',
                    g = 0,
                    h = [];
                  if (c && c !== '') {
                    arry = s.split(c, '],[');
                    for (var q = 0; q < arry.length; q++) {
                      var z = arry[q];
                      z = s.repl(z, '[', '');
                      z = s.repl(z, ']', '');
                      z = s.repl(z, "'", '');
                      arry[q] = s.split(z, ',');
                    }
                  }
                  var e = $data('globalDataLayer', 'serverTimestamp');
                  e.setFullYear(e.getFullYear() + 5);
                  if (dv === 0 && arry.length > 0 && arry[arry.length - 1][0] === v)
                    arry[arry.length - 1] = [
                      v,
                      $data('globalDataLayer', 'serverTimestamp').getTime(),
                    ];
                  else
                    arry[arry.length] = [v, $data('globalDataLayer', 'serverTimestamp').getTime()];
                  var start = arry.length - ct < 0 ? 0 : arry.length - ct,
                    td = $data('globalDataLayer', 'serverTimestamp');
                  for (x = start; x < arry.length; x++)
                    if (ex > Math.round((td.getTime() - arry[x][1]) / 86400000)) {
                      h[g] = unescape(arry[x][0]);
                      a[g] = [arry[x][0], arry[x][1]];
                      g++;
                    }
                  var data = s.join(a, { delim: ',', front: '[', back: ']', wrap: "'" });
                  s.__writeAct(cn, data, e.getTime());
                  var r = s.join(h, { delim: dl });
                  if (ce) s.__writeAct(cn, '');
                  return r;
                } catch (e) {
                  Bootstrapper.reportException(e);
                }
              };
              s.__channelManager = function (a, b, c, d, e, f, g) {
                try {
                  var s = this,
                    h = $data('globalDataLayer', 'serverTimestamp'),
                    i = 0,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r,
                    t,
                    u,
                    v,
                    w,
                    x,
                    y,
                    z,
                    A,
                    B,
                    C,
                    D,
                    E,
                    F,
                    G,
                    H,
                    I,
                    J,
                    K,
                    L,
                    M,
                    N,
                    O,
                    P,
                    Q,
                    R,
                    S,
                    T;
                  h.setTime(h.getTime() + 1800000);
                  if (e) {
                    i = 1;
                    var profile =
                        typeof Bootstrapper.getActProfileSync === 'function'
                          ? Bootstrapper.getActProfileSync() || {}
                          : {},
                      data = profile.hasOwnProperty(e) ? profile[e] : {};
                    if (
                      typeof data === 'object' &&
                      data &&
                      data.val &&
                      data.exp &&
                      data.exp >= $data('globalDataLayer', 'serverTimestamp').getTime()
                    )
                      i = 0;
                    if (
                      !(
                        typeof data === 'object' &&
                        data &&
                        data.val &&
                        data.val === 1 &&
                        data.exp &&
                        data.exp <= h
                      )
                    ) {
                      s.__writeAct(e, 1);
                      data.val = 1;
                    }
                  }
                  j = s.referrer ? s.referrer : document.referrer;
                  if (!j) k = 1;
                  else {
                    l = j.indexOf('?') > -1 ? j.indexOf('?') : j.length;
                    m = j.substring(0, l);
                    n = s.split(j, '/');
                    n = s.split(n[2], '?');
                    o = n[0].toLowerCase();
                    p = s.linkInternalFilters.toLowerCase();
                    p = s.split(p, ',');
                    for (q = 0; q < p.length; q++) {
                      r = o.indexOf(p[q]) == -1 ? '' : j;
                      if (r) break;
                    }
                  }
                  if (!r && !k) {
                    t = j;
                    u = v = o;
                    w = 'Other Natural Referrers';
                    x = s.seList + '>' + s._extraSearchEngines;
                    if (d == 1) j = s.repl(j, 'as_q', '*');
                    y = s.split(x, '>');
                    for (z = 0; z < y.length; z++) {
                      A = y[z];
                      A = s.split(A, '|');
                      B = s.split(A[0], ',');
                      for (C = 0; C < B.length; C++) {
                        D = m.indexOf(B[C]);
                        if (D > -1) {
                          if (A[2]) E = v = A[2];
                          else E = o;
                          if (d == 1) {
                            E = s.repl(E, '#', ' - ');
                            j = s.repl(j, '*', 'as_q');
                            E = s.repl(E, '^', 'ahoo');
                            E = s.repl(E, '%', 'oogle');
                          }
                          F = s.split(A[1], ',');
                          for (G = 0; G < F.length; G++) {
                            if (
                              j.indexOf(F[G] + '=') > -1 ||
                              j.indexOf('https://www.google.') === 0 ||
                              j.indexOf('http://r.search.yahoo.com') === 0
                            )
                              H = 1;
                            I = s.Util.getQueryParam(F[G], '', j).toLowerCase();
                            if (H || I) break;
                          }
                        }
                        if (H || I) break;
                      }
                      if (H || I) break;
                    }
                  }
                  if (!r || g != '1') {
                    J = s.split(a, ',');
                    K = 0;
                    while (!T && K < J.length) {
                      T = s.Util.getQueryParam(J[K], b);
                      K++;
                    }
                    if (T) {
                      v = T;
                      if (E) w = 'Paid Search';
                      else w = 'Unknown Paid Channel';
                    }
                    if (!T && E && H) {
                      v = E;
                      w = 'Natural Search';
                    }
                  }
                  if (i && k && !T) t = u = v = w = 'Typed/Bookmarked';
                  J = s._channelDomain;
                  if (J && o && !r) {
                    K = s.split(J, '>');
                    for (L = 0; L < K.length; L++) {
                      M = s.split(K[L], '|');
                      N = s.split(M[1], ',');
                      O = N.length;
                      for (P = 0; P < O; P++) {
                        Q = N[P].toLowerCase();
                        R = o.indexOf(Q);
                        if (R > -1) {
                          w = M[0];
                          break;
                        }
                      }
                      if (R > -1) break;
                    }
                  }
                  J = s._channelParameter;
                  if (J) {
                    K = s.split(J, '>');
                    for (L = 0; L < K.length; L++) {
                      M = s.split(K[L], '|');
                      N = s.split(M[1], ',');
                      O = N.length;
                      for (P = 0; P < O; P++) {
                        R = s.Util.getQueryParam(N[P]);
                        if (R) {
                          w = M[0];
                          break;
                        }
                      }
                      if (R) break;
                    }
                  }
                  J = s._channelPattern;
                  if (J) {
                    K = s.split(J, '>');
                    for (L = 0; L < K.length; L++) {
                      M = s.split(K[L], '|');
                      N = s.split(M[1], ',');
                      O = N.length;
                      for (P = 0; P < O; P++) {
                        Q = N[P].toLowerCase();
                        R = T.toLowerCase();
                        S = R.indexOf(Q);
                        if (S === 0) {
                          w = M[0];
                          break;
                        }
                      }
                      if (S === 0) break;
                    }
                  }
                  S = w ? T + u + w + I : '';
                  c = c ? c : 'c_m';
                  if (c != '0') S = s.__getValOnce(S, c, 0);
                  if (S) {
                    s._campaignID = T ? T : 'n/a';
                    s._referrer = t ? t : 'n/a';
                    s._referringDomain = u ? u : 'n/a';
                    s._campaign = v ? v : 'n/a';
                    s._channel = w ? w : 'n/a';
                    s._partner = E ? E : 'n/a';
                    s._keywords = H ? (I ? I : 'Keyword Unavailable') : 'n/a';
                    if (f && w != 'Typed/Bookmarked');
                  } else
                    s._campaignID = s._referrer = s._referringDomain = s._campaign = s._channel = s._partner = s._keywords =
                      '';
                } catch (e) {
                  Bootstrapper.reportException(e);
                }
              };
              s.seList =
                'google.,googlesyndication.com,.googleadservices.com|q,as_q|' +
                'Google>yahoo.com,yahoo.co.jp|p,va|Yahoo!>bing.com|q|Bing>altavista.' +
                'co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc.de|q,query|AOL>ask' +
                '.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum.net,search.daum.ne' +
                't|q|Daum>icqit.com|q|icq>myway.com|searchfor|MyWay.com>naver.com,se' +
                'arch.naver.com|query|Naver>netscape.com|query,search|Netscape Searc' +
                'h>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Star' +
                'tsiden>tiscali.it,www.tiscali.co.uk|key,query|Tiscali>virgilio.it|q' +
                's|Virgilio>yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Searc' +
                'h>search.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comc' +
                'ast Search>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum' +
                ' Search';
              s._extraSearchEngines = 'search.comcast.net|q|Comcast.net';
              s._channelDomain =
                'Organic Social Networks|facebook.com,linkedin.com,twitter.com,plus.google.com,orkut.com,friendster.com,livejournal.com,blogspot.com,wordpress.com,friendfeed.com,myspace.com,digg.com,reddit.com,stumbleupon.com,twine.com,yelp.com,mixx.com,delicious.com,tumblr.com,disqus.com,intensedebate.com,plurk.com,slideshare.net,backtype.com,netvibes.com,mister-wong.com,diigo.com,flixster.com,youtube.com,vimeo.com,12seconds.tv,zooomr.com,identi.ca,jaiku.com,flickr.com,imeem.com,dailymotion.com,photobucket.com,fotolog.com,smugmug.com,classmates.com,myyearbook.com,mylife.com,tagged.com,brightkite.com,ning.com,bebo.com,hi5.com,yuku.com,cafemom.com,xanga.com,pinterest.com>Net Benefits|workplaceservices,nbm';
              s._channelParameter = 'Display|imm_cid>Display|imm_aid>Paid Search|imm_eid';
              s._channelPattern =
                'Customer Referral|email_referral_thankyou,email_referral,email_unica_referral,vanity_referral>Email|email>RSS|rss->FutureTimeline Facebook|facebook_timeline>Social User Share|facebook_share,twitter_share,linkedin_share,facebook_sofa,twitter_sofa,linkedin_sofa>Fidelity Managed Social|facebook,twitter,linkedin,youtube,FICContent>Offsite Account Opening|ao:3rdparty>NetBenefits|ao:nb';
              if (
                _dmt &&
                _dmt.Data &&
                _dmt.Data.MetaTags &&
                typeof _dmt.Data.MetaTags.getMetaTagContent === 'function' &&
                _dmt.Data.MetaTags.getMetaTagContent('PAGE') === 'HomePage'
              )
                Bootstrapper._aamCHPOverride = true;
              if (Bootstrapper._stopAAM || Bootstrapper._aamCHPOverride)
                s.contextData['cm.ssf'] = '1';
              if (!Bootstrapper._stopAAM && !Bootstrapper._aamCHPOverride)
                'function' !== typeof window.DIL &&
                  ((window.DIL = function (c, f) {
                    var k = [],
                      g,
                      w;
                    c !== Object(c) && (c = {});
                    var u, l, D, N, A, y, E, F, O, P, G, B, z;
                    u = c.partner;
                    l = c.containerNSID;
                    D = !!c.disableDestinationPublishingIframe;
                    N = c.iframeAkamaiHTTPS;
                    A = c.mappings;
                    y = c.uuidCookie;
                    E = !0 === c.enableErrorReporting;
                    F = c.visitorService;
                    O = c.declaredId;
                    P = !0 === c.delayAllUntilWindowLoad;
                    G = !0 === c.disableIDSyncs;
                    B =
                      'undefined' === typeof c.secureDataCollection ||
                      !0 === c.secureDataCollection;
                    z = 'boolean' === typeof c.isCoopSafe ? c.isCoopSafe : null;
                    var Q, L, H, R, S;
                    Q = !0 === c.disableDefaultRequest;
                    L = c.afterResultForDefaultRequest;
                    H = c.dpIframeSrc;
                    R = c.visitorConstructor;
                    S = !0 === c.disableCORS;
                    E && DIL.errorModule.activate();
                    E = !0 === window._dil_unit_tests;
                    (g = f) && k.push(g + '');
                    if (!u || 'string' !== typeof u)
                      return (
                        (g = 'DIL partner is invalid or not specified in initConfig'),
                        DIL.errorModule.handleError({
                          name: 'error',
                          message: g,
                          filename: 'dil.js',
                        }),
                        Error(g)
                      );
                    g =
                      'DIL containerNSID is invalid or not specified in initConfig, setting to default of 0';
                    if (l || 'number' === typeof l)
                      (l = parseInt(l, 10)), !isNaN(l) && 0 <= l && (g = '');
                    g && ((l = 0), k.push(g), (g = ''));
                    w = DIL.getDil(u, l);
                    if (
                      w instanceof DIL &&
                      w.api.getPartner() === u &&
                      w.api.getContainerNSID() === l
                    )
                      return w;
                    if (this instanceof DIL) DIL.registerDil(this, u, l);
                    else
                      return new DIL(
                        c,
                        "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " +
                          u +
                          ' and containerNSID = ' +
                          l
                      );
                    var t = {
                      IS_HTTPS: B || 'https:' === document.location.protocol,
                      MILLIS_PER_DAY: 86400000,
                      DIL_COOKIE_NAME: 'AAMC_' + encodeURIComponent(u) + '_' + l,
                      FIRST_PARTY_SYNCS: 'AMSYNCS',
                      FIRST_PARTY_SYNCS_ON_PAGE: 'AMSYNCSOP',
                      REGION: 'REGION',
                      SIX_MONTHS_IN_MINUTES: 259200,
                      IE_VERSION: (function () {
                        if (document.documentMode) return document.documentMode;
                        for (var a = 7; 4 < a; a--) {
                          var b = document.createElement('div');
                          b.innerHTML = '<!--[if IE ' + a + ']><span></span><![endif]-->';
                          if (b.getElementsByTagName('span').length) return a;
                        }
                        return null;
                      })(),
                    };
                    t.IS_IE_LESS_THAN_10 = 'number' === typeof t.IE_VERSION && 10 > t.IE_VERSION;
                    var M = { stuffed: {} },
                      m = {},
                      p = {
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
                          d_nsid: l + '',
                          d_rtbd: 'json',
                          d_jsonv: DIL.jsonVersion + '',
                          d_dst: '1',
                        },
                        nonModStatsParams: { d_rtbd: !0, d_dst: !0, d_cts: !0, d_rs: !0 },
                        modStatsParams: null,
                        adms: {
                          TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 2000,
                          calledBack: !1,
                          mid: null,
                          noVisitorAPI: !1,
                          VisitorAPI: null,
                          instance: null,
                          releaseType: 'no VisitorAPI',
                          isOptedOut: !0,
                          isOptedOutCallbackCalled: !1,
                          admsProcessingStarted: !1,
                          process: function (a) {
                            try {
                              if (!this.admsProcessingStarted) {
                                this.admsProcessingStarted = !0;
                                var b = this,
                                  e,
                                  d,
                                  h,
                                  n;
                                if (
                                  'function' === typeof a &&
                                  'function' === typeof a.getInstance
                                ) {
                                  if (
                                    F === Object(F) &&
                                    (e = F.namespace) &&
                                    'string' === typeof e
                                  )
                                    d = a.getInstance(e, { idSyncContainerID: l });
                                  else {
                                    this.releaseType = 'no namespace';
                                    this.releaseRequests();
                                    return;
                                  }
                                  if (
                                    d === Object(d) &&
                                    d instanceof a &&
                                    'function' === typeof d.isAllowed &&
                                    'function' === typeof d.getMarketingCloudVisitorID &&
                                    'function' === typeof d.getCustomerIDs &&
                                    'function' === typeof d.isOptedOut
                                  ) {
                                    this.VisitorAPI = a;
                                    if (!d.isAllowed()) {
                                      this.releaseType = 'VisitorAPI not allowed';
                                      this.releaseRequests();
                                      return;
                                    }
                                    this.instance = d;
                                    h = function (a) {
                                      'VisitorAPI' !== b.releaseType &&
                                        ((b.mid = a),
                                        (b.releaseType = 'VisitorAPI'),
                                        b.releaseRequests());
                                    };
                                    n = d.getMarketingCloudVisitorID(h);
                                    if ('string' === typeof n && n.length) {
                                      h(n);
                                      return;
                                    }
                                    setTimeout(function () {
                                      'VisitorAPI' !== b.releaseType &&
                                        ((b.releaseType = 'timeout'), b.releaseRequests());
                                    }, this.getLoadTimeout());
                                    return;
                                  }
                                  this.releaseType = 'invalid instance';
                                } else this.noVisitorAPI = !0;
                                this.releaseRequests();
                              }
                            } catch (c) {
                              this.releaseRequests();
                            }
                          },
                          releaseRequests: function () {
                            this.calledBack = !0;
                            p.registerRequest();
                          },
                          getMarketingCloudVisitorID: function () {
                            return this.instance
                              ? this.instance.getMarketingCloudVisitorID()
                              : null;
                          },
                          getMIDQueryString: function () {
                            var a = r.isPopulatedString,
                              b = this.getMarketingCloudVisitorID();
                            (a(this.mid) && this.mid === b) || (this.mid = b);
                            return a(this.mid) ? 'd_mid=' + this.mid + '&' : '';
                          },
                          getCustomerIDs: function () {
                            return this.instance ? this.instance.getCustomerIDs() : null;
                          },
                          getCustomerIDsQueryString: function (a) {
                            if (a === Object(a)) {
                              var b = '',
                                e = [],
                                d = [],
                                h,
                                n;
                              for (h in a)
                                a.hasOwnProperty(h) &&
                                  ((d[0] = h),
                                  (n = a[h]),
                                  n === Object(n) &&
                                    ((d[1] = n.id || ''),
                                    (d[2] = n.authState || 0),
                                    e.push(d),
                                    (d = [])));
                              if ((d = e.length))
                                for (a = 0; a < d; a++)
                                  b += '&d_cid_ic=' + q.encodeAndBuildRequest(e[a], '%01');
                              return b;
                            }
                            return '';
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
                          isOptedOutCallback: function (a) {
                            this.isOptedOut = a;
                            this.isOptedOutCallbackCalled = !0;
                            p.registerRequest();
                          },
                          getLoadTimeout: function () {
                            var a = this.instance;
                            if (a) {
                              if ('function' === typeof a.getLoadTimeout)
                                return a.getLoadTimeout();
                              if ('undefined' !== typeof a.loadTimeout) return a.loadTimeout;
                            }
                            return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE;
                          },
                        },
                        declaredId: {
                          declaredId: { init: null, request: null },
                          declaredIdCombos: {},
                          setDeclaredId: function (a, b) {
                            var e = r.isPopulatedString,
                              d = encodeURIComponent;
                            if (a === Object(a) && e(b)) {
                              var h = a.dpid,
                                n = a.dpuuid,
                                c = null;
                              if (e(h) && e(n)) {
                                c = d(h) + '$' + d(n);
                                if (!0 === this.declaredIdCombos[c])
                                  return "setDeclaredId: combo exists for type '" + b + "'";
                                this.declaredIdCombos[c] = !0;
                                this.declaredId[b] = { dpid: h, dpuuid: n };
                                return "setDeclaredId: succeeded for type '" + b + "'";
                              }
                            }
                            return "setDeclaredId: failed for type '" + b + "'";
                          },
                          getDeclaredIdQueryString: function () {
                            var a = this.declaredId.request,
                              b = this.declaredId.init,
                              e = encodeURIComponent,
                              d = '';
                            null !== a
                              ? (d = '&d_dpid=' + e(a.dpid) + '&d_dpuuid=' + e(a.dpuuid))
                              : null !== b &&
                                (d = '&d_dpid=' + e(b.dpid) + '&d_dpuuid=' + e(b.dpuuid));
                            return d;
                          },
                        },
                        registerRequest: function (a) {
                          var b = this.firingQueue;
                          a === Object(a) && b.push(a);
                          this.firing ||
                            !b.length ||
                            (P && !DIL.windowLoaded) ||
                            (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(),
                            this.adms.calledBack &&
                              !this.adms.isOptedOut &&
                              this.adms.isOptedOutCallbackCalled &&
                              ((this.adms.isOptedOutCallbackCalled = !1),
                              (a = b.shift()),
                              (a.src = a.src.replace(
                                /demdex.net\/event\?d_nsid=/,
                                'demdex.net/event?' + this.adms.getMIDQueryString() + 'd_nsid='
                              )),
                              r.isPopulatedString(a.corsPostData) &&
                                (a.corsPostData = a.corsPostData.replace(
                                  /^d_nsid=/,
                                  this.adms.getMIDQueryString() + 'd_nsid='
                                )),
                              C.fireRequest(a),
                              this.firstRequestHasFired ||
                                ('script' !== a.tag && 'cors' !== a.tag) ||
                                (this.firstRequestHasFired = !0)));
                        },
                        processVisitorAPI: function () {
                          this.adms.process(R || window.Visitor);
                        },
                        getCoopQueryString: function () {
                          var a = '';
                          !0 === z ? (a = '&d_coop_safe=1') : !1 === z && (a = '&d_coop_unsafe=1');
                          return a;
                        },
                      };
                    B = function () {
                      var a = 'http://fast.',
                        b = '?d_nsid=' + l + '#' + encodeURIComponent(document.location.href);
                      if ('string' === typeof H && H.length) return H + b;
                      t.IS_HTTPS && (a = !0 === N ? 'https://fast.' : 'https://');
                      return a + u + '.demdex.net/dest5.html' + b;
                    };
                    var v = {
                        MAX_SYNCS_LENGTH: 649,
                        id: 'destination_publishing_iframe_' + u + '_' + l,
                        url: B(),
                        onPagePixels: [],
                        iframeHost: null,
                        getIframeHost: function (a) {
                          if ('string' === typeof a) {
                            var b = a.split('/');
                            if (3 <= b.length) return b[0] + '//' + b[2];
                            k.push('getIframeHost: url is malformed: ' + a);
                            return a;
                          }
                        },
                        iframe: null,
                        iframeHasLoaded: !1,
                        sendingMessages: !1,
                        messages: [],
                        messagesPosted: [],
                        messagesReceived: [],
                        ibsDeleted: [],
                        jsonForComparison: [],
                        jsonDuplicates: [],
                        jsonWaiting: [],
                        jsonProcessed: [],
                        canSetThirdPartyCookies: !0,
                        receivedThirdPartyCookiesNotification: !1,
                        newIframeCreated: null,
                        iframeIdChanged: !1,
                        originalIframeHasLoadedAlready: null,
                        regionChanged: !1,
                        timesRegionChanged: 0,
                        attachIframe: function () {
                          function a () {
                            d = document.createElement('iframe');
                            d.sandbox = 'allow-scripts allow-same-origin';
                            d.title = 'Adobe ID Syncing iFrame';
                            d.id = e.id;
                            d.name = e.id + '_name';
                            d.style.cssText = 'display: none; width: 0; height: 0;';
                            d.src = e.url;
                            e.newIframeCreated = !0;
                            b();
                            document.body.appendChild(d);
                          }
                          function b () {
                            d.addEventListener('load', function () {
                              d.className = 'aamIframeLoaded';
                              e.iframeHasLoaded = !0;
                              e.requestToProcess();
                            });
                          }
                          if (!t.IS_IE_LESS_THAN_10) {
                            var e = this,
                              d = document.getElementById(this.id);
                            d
                              ? 'IFRAME' !== d.nodeName
                                ? ((this.id += '_2'), (this.iframeIdChanged = !0), a())
                                : ((this.newIframeCreated = !1),
                                  'aamIframeLoaded' !== d.className
                                    ? ((this.originalIframeHasLoadedAlready = !1), b())
                                    : ((this.iframeHasLoaded = this.originalIframeHasLoadedAlready = !0),
                                      (this.iframe = d),
                                      this.requestToProcess()))
                              : a();
                            this.iframe = d;
                          }
                        },
                        requestToProcess: function (a, b) {
                          function e () {
                            d.jsonForComparison.push(a);
                            d.jsonWaiting.push([a, b]);
                          }
                          var d = this,
                            h,
                            n;
                          h = p.adms.instance;
                          a === Object(a) &&
                            h === Object(h) &&
                            h.idSyncContainerID === l &&
                            (v.ibsDeleted.push(a.ibs), delete a.ibs);
                          if (a && !r.isEmptyObject(a))
                            if (
                              ((h = JSON.stringify(a.ibs || [])),
                              (n = JSON.stringify(a.dests || [])),
                              this.jsonForComparison.length)
                            ) {
                              var c = !1,
                                f,
                                g,
                                k;
                              f = 0;
                              for (g = this.jsonForComparison.length; f < g; f++)
                                if (
                                  ((k = this.jsonForComparison[f]),
                                  h === JSON.stringify(k.ibs || []) &&
                                    n === JSON.stringify(k.dests || []))
                                ) {
                                  c = !0;
                                  break;
                                }
                              c ? this.jsonDuplicates.push(a) : e();
                            } else e();
                          this.receivedThirdPartyCookiesNotification &&
                            this.jsonWaiting.length &&
                            ((h = this.jsonWaiting.shift()),
                            !1 === this.newIframeCreated && delete h[0].ibs,
                            this.process(h[0], h[1]),
                            this.requestToProcess());
                          this.iframeHasLoaded &&
                            this.messages.length &&
                            !this.sendingMessages &&
                            ((this.sendingMessages = !0), this.sendMessages());
                        },
                        checkIfRegionChanged: function (a) {
                          var b = q.getDilCookieField(t.REGION);
                          null !== b &&
                            'undefined' !== typeof a.dcs_region &&
                            parseInt(b, 10) !== a.dcs_region &&
                            ((this.regionChanged = !0),
                            this.timesRegionChanged++,
                            q.setDilCookieField(t.FIRST_PARTY_SYNCS_ON_PAGE, ''),
                            q.setDilCookieField(t.FIRST_PARTY_SYNCS, ''));
                          'undefined' !== typeof a.dcs_region &&
                            q.setDilCookieField(t.REGION, a.dcs_region);
                        },
                        processSyncOnPage: function (a) {
                          var b, e, d;
                          if ((b = a.ibs) && b instanceof Array && (e = b.length))
                            for (a = 0; a < e; a++)
                              (d = b[a]),
                                d.syncOnPage && this.checkFirstPartyCookie(d, '', 'syncOnPage');
                        },
                        process: function (a, b) {
                          var e = encodeURIComponent,
                            d,
                            h,
                            n,
                            c,
                            f,
                            g;
                          b === Object(b) &&
                            (g = q.encodeAndBuildRequest(['', b.dpid || '', b.dpuuid || ''], ','));
                          if ((d = a.dests) && d instanceof Array && (h = d.length))
                            for (n = 0; n < h; n++)
                              (c = d[n]),
                                (f = [e('dests'), e(c.id || ''), e(c.y || ''), e(c.c || '')]),
                                this.addMessage(f.join('|'));
                          if ((d = a.ibs) && d instanceof Array && (h = d.length))
                            for (n = 0; n < h; n++)
                              (c = d[n]),
                                (f = [
                                  e('ibs'),
                                  e(c.id || ''),
                                  e(c.tag || ''),
                                  q.encodeAndBuildRequest(c.url || [], ','),
                                  e(c.ttl || ''),
                                  '',
                                  g,
                                  c.fireURLSync ? 'true' : 'false',
                                ]),
                                c.syncOnPage ||
                                  (this.canSetThirdPartyCookies
                                    ? this.addMessage(f.join('|'))
                                    : c.fireURLSync && this.checkFirstPartyCookie(c, f.join('|')));
                          this.jsonProcessed.push(a);
                        },
                        checkFirstPartyCookie: function (a, b, e) {
                          var d = (e = 'syncOnPage' === e ? !0 : !1)
                              ? t.FIRST_PARTY_SYNCS_ON_PAGE
                              : t.FIRST_PARTY_SYNCS,
                            h = this.getOnPageSyncData(d),
                            c = !1,
                            f = !1,
                            g = Math.ceil(new Date().getTime() / t.MILLIS_PER_DAY);
                          h
                            ? ((h = h.split('*')),
                              (f = this.pruneSyncData(h, a.id, g)),
                              (c = f.dataPresent),
                              (f = f.dataValid),
                              (c && f) || this.fireSync(e, a, b, h, d, g))
                            : ((h = []), this.fireSync(e, a, b, h, d, g));
                        },
                        getOnPageSyncData: function (a) {
                          var b = p.adms.instance;
                          return b && 'function' === typeof b.idSyncGetOnPageSyncInfo
                            ? b.idSyncGetOnPageSyncInfo()
                            : q.getDilCookieField(a);
                        },
                        pruneSyncData: function (a, b, e) {
                          var d = !1,
                            h = !1,
                            c,
                            f,
                            g;
                          if (a instanceof Array)
                            for (f = 0; f < a.length; f++)
                              (c = a[f]),
                                (g = parseInt(c.split('-')[1], 10)),
                                c.match('^' + b + '-')
                                  ? ((d = !0), e < g ? (h = !0) : (a.splice(f, 1), f--))
                                  : e >= g && (a.splice(f, 1), f--);
                          return { dataPresent: d, dataValid: h };
                        },
                        manageSyncsSize: function (a) {
                          if (a.join('*').length > this.MAX_SYNCS_LENGTH)
                            for (
                              a.sort(function (a, e) {
                                return (
                                  parseInt(a.split('-')[1], 10) - parseInt(e.split('-')[1], 10)
                                );
                              });
                              a.join('*').length > this.MAX_SYNCS_LENGTH;

                            )
                              a.shift();
                        },
                        fireSync: function (a, b, e, d, h, c) {
                          function f (a, b, d, e) {
                            return function () {
                              g.onPagePixels[a] = null;
                              var h = g.getOnPageSyncData(d),
                                c = [];
                              if (h) {
                                var h = h.split('*'),
                                  n,
                                  f,
                                  k;
                                n = 0;
                                for (f = h.length; n < f; n++)
                                  (k = h[n]), k.match('^' + b.id + '-') || c.push(k);
                              }
                              g.setSyncTrackingData(c, b, d, e);
                            };
                          }
                          var g = this;
                          if (a) {
                            if ('img' === b.tag) {
                              a = b.url;
                              e = t.IS_HTTPS ? 'https:' : 'http:';
                              var k, p, q;
                              d = 0;
                              for (k = a.length; d < k; d++) {
                                p = a[d];
                                q = /^\/\//.test(p);
                                var l = new Image();
                                l.addEventListener('load', f(this.onPagePixels.length, b, h, c));
                                l.src = (q ? e : '') + p;
                                this.onPagePixels.push(l);
                              }
                            }
                          } else this.addMessage(e), this.setSyncTrackingData(d, b, h, c);
                        },
                        addMessage: function (a) {
                          this.messages.push(a);
                        },
                        setSyncTrackingData: function (a, b, e, d) {
                          a.push(b.id + '-' + (d + Math.ceil(b.ttl / 60 / 24)));
                          this.manageSyncsSize(a);
                          q.setDilCookieField(e, a.join('*'));
                        },
                        sendMessages: function () {
                          var a = '',
                            b = encodeURIComponent;
                          this.regionChanged &&
                            ((a = b('---destpub-clear-dextp---')), (this.regionChanged = !1));
                          this.messages.length &&
                            ((a = a + b('---destpub-combined---') + this.messages.join('%01')),
                            this.postMessage(a),
                            (this.messages = []));
                          this.sendingMessages = !1;
                        },
                        postMessage: function (a) {
                          DIL.xd.postMessage(a, this.url, this.iframe.contentWindow);
                          this.messagesPosted.push(a);
                        },
                        receiveMessage: function (a) {
                          var b = /^---destpub-to-parent---/;
                          'string' === typeof a &&
                            b.test(a) &&
                            ((b = a.replace(b, '').split('|')),
                            'canSetThirdPartyCookies' === b[0] &&
                              ((this.canSetThirdPartyCookies = 'true' === b[1] ? !0 : !1),
                              (this.receivedThirdPartyCookiesNotification = !0),
                              this.requestToProcess()),
                            this.messagesReceived.push(a));
                        },
                      },
                      J = {
                        traits: function (a) {
                          r.isValidPdata(a) &&
                            (m.sids instanceof Array || (m.sids = []), q.extendArray(m.sids, a));
                          return this;
                        },
                        pixels: function (a) {
                          r.isValidPdata(a) &&
                            (m.pdata instanceof Array || (m.pdata = []),
                            q.extendArray(m.pdata, a));
                          return this;
                        },
                        logs: function (a) {
                          r.isValidLogdata(a) &&
                            (m.logdata !== Object(m.logdata) && (m.logdata = {}),
                            q.extendObject(m.logdata, a));
                          return this;
                        },
                        customQueryParams: function (a) {
                          r.isEmptyObject(a) || q.extendObject(m, a, p.reservedKeys);
                          return this;
                        },
                        signals: function (a, b) {
                          var e,
                            d = a;
                          if (!r.isEmptyObject(d)) {
                            if (b && 'string' === typeof b)
                              for (e in ((d = {}), a)) a.hasOwnProperty(e) && (d[b + e] = a[e]);
                            q.extendObject(m, d, p.reservedKeys);
                          }
                          return this;
                        },
                        declaredId: function (a) {
                          p.declaredId.setDeclaredId(a, 'request');
                          return this;
                        },
                        result: function (a) {
                          'function' === typeof a && (m.callback = a);
                          return this;
                        },
                        afterResult: function (a) {
                          'function' === typeof a && (m.postCallbackFn = a);
                          return this;
                        },
                        useImageRequest: function () {
                          m.useImageRequest = !0;
                          return this;
                        },
                        clearData: function () {
                          m = {};
                          return this;
                        },
                        submit: function () {
                          C.submitRequest(m);
                          m = {};
                          return this;
                        },
                        getPartner: function () {
                          return u;
                        },
                        getContainerNSID: function () {
                          return l;
                        },
                        getEventLog: function () {
                          return k;
                        },
                        getState: function () {
                          var a = {},
                            b = {};
                          q.extendObject(a, p, { registerRequest: !0 });
                          q.extendObject(b, v, {
                            attachIframe: !0,
                            requestToProcess: !0,
                            process: !0,
                            sendMessages: !0,
                          });
                          return {
                            initConfig: c,
                            pendingRequest: m,
                            otherRequestInfo: a,
                            destinationPublishingInfo: b,
                          };
                        },
                        idSync: function (a) {
                          if (G) return 'Error: id syncs have been disabled';
                          if (a !== Object(a) || 'string' !== typeof a.dpid || !a.dpid.length)
                            return 'Error: config or config.dpid is empty';
                          if ('string' !== typeof a.url || !a.url.length)
                            return 'Error: config.url is empty';
                          var b = a.url,
                            e = a.minutesToLive,
                            d = encodeURIComponent,
                            h = v,
                            c,
                            b = b.replace(/^https:/, '').replace(/^http:/, '');
                          if ('undefined' === typeof e) e = 20160;
                          else if (((e = parseInt(e, 10)), isNaN(e) || 0 >= e))
                            return 'Error: config.minutesToLive needs to be a positive number';
                          c = q.encodeAndBuildRequest(['', a.dpid, a.dpuuid || ''], ',');
                          a = ['ibs', d(a.dpid), 'img', d(b), e, '', c];
                          h.addMessage(a.join('|'));
                          p.firstRequestHasFired && h.requestToProcess();
                          return 'Successfully queued';
                        },
                        aamIdSync: function (a) {
                          if (G) return 'Error: id syncs have been disabled';
                          if (a !== Object(a) || 'string' !== typeof a.dpuuid || !a.dpuuid.length)
                            return 'Error: config or config.dpuuid is empty';
                          a.url = '//dpm.demdex.net/ibs:dpid=' + a.dpid + '&dpuuid=' + a.dpuuid;
                          return this.idSync(a);
                        },
                        passData: function (a) {
                          if (r.isEmptyObject(a)) return 'Error: json is empty or not an object';
                          v.ibsDeleted.push(a.ibs);
                          delete a.ibs;
                          C.defaultCallback(a);
                          return a;
                        },
                        getPlatformParams: function () {
                          return p.platformParams;
                        },
                        getEventCallConfigParams: function () {
                          var a = p,
                            b = a.modStatsParams,
                            e = a.platformParams,
                            d;
                          if (!b) {
                            b = {};
                            for (d in e)
                              e.hasOwnProperty(d) &&
                                !a.nonModStatsParams[d] &&
                                (b[d.replace(/^d_/, '')] = e[d]);
                            !0 === z ? (b.coop_safe = 1) : !1 === z && (b.coop_unsafe = 1);
                            a.modStatsParams = b;
                          }
                          return b;
                        },
                        setAsCoopSafe: function () {
                          z = !0;
                          return this;
                        },
                        setAsCoopUnsafe: function () {
                          z = !1;
                          return this;
                        },
                      },
                      C = {
                        corsMetadata: (function () {
                          const $___old_354f2a7df51e66c5 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_5caefaa08bb529a0 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_354f2a7df51e66c5)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
                              ));
                            if ($___old_5caefaa08bb529a0)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
                              ));
                            return function () {
                              var a = 'none',
                                b = !0;
                              'undefined' !== typeof XMLHttpRequest &&
                                XMLHttpRequest === Object(XMLHttpRequest) &&
                                ('withCredentials' in new XMLHttpRequest()
                                  ? (a = 'XMLHttpRequest')
                                  : new Function(
                                      '/*@cc_on return /^10/.test(@_jscript_version) @*/'
                                    )()
                                  ? (a = 'XMLHttpRequest')
                                  : 'undefined' !== typeof XDomainRequest &&
                                    XDomainRequest === Object(XDomainRequest) &&
                                    (b = !1),
                                0 <
                                  Object.prototype.toString
                                    .call(window.HTMLElement)
                                    .indexOf('Constructor') && (b = !1));
                              return { corsType: a, corsCookiesEnabled: b };
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_354f2a7df51e66c5)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_354f2a7df51e66c5
                              ));
                            if ($___old_5caefaa08bb529a0)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_5caefaa08bb529a0
                              ));
                          }
                        })(),
                        getCORSInstance: function () {
                          return 'none' === this.corsMetadata.corsType
                            ? null
                            : new window[this.corsMetadata.corsType]();
                        },
                        submitRequest: function (a) {
                          p.registerRequest(C.createQueuedRequest(a));
                          return !0;
                        },
                        createQueuedRequest: function (a) {
                          var b = a.callback,
                            e = 'img',
                            d,
                            h;
                          if (!r.isEmptyObject(A)) {
                            var c;
                            for (d in A)
                              A.hasOwnProperty(d) &&
                                ((h = A[d]),
                                null == h ||
                                  '' === h ||
                                  !(d in a) ||
                                  h in a ||
                                  h in p.reservedKeys ||
                                  ((c = a[d]), null != c && '' !== c && (a[h] = c)));
                          }
                          r.isValidPdata(a.sids) || (a.sids = []);
                          r.isValidPdata(a.pdata) || (a.pdata = []);
                          r.isValidLogdata(a.logdata) || (a.logdata = {});
                          a.logdataArray = q.convertObjectToKeyValuePairs(a.logdata, '=', !0);
                          a.logdataArray.push('_ts=' + new Date().getTime());
                          'function' !== typeof b && (b = this.defaultCallback);
                          d = this.makeRequestSrcData(a);
                          (h = this.getCORSInstance()) && !0 !== a.useImageRequest && (e = 'cors');
                          return {
                            tag: e,
                            src: d.src,
                            corsSrc: d.corsSrc,
                            callbackFn: b,
                            postCallbackFn: a.postCallbackFn,
                            useImageRequest: !!a.useImageRequest,
                            requestData: a,
                            corsInstance: h,
                            corsPostData: d.corsPostData,
                          };
                        },
                        defaultCallback: function (a, b) {
                          v.checkIfRegionChanged(a);
                          v.processSyncOnPage(a);
                          var e, d, h, c, f, g, k, l, m;
                          if ((e = a.stuff) && e instanceof Array && (d = e.length))
                            for (h = 0; h < d; h++)
                              if ((c = e[h]) && c === Object(c)) {
                                f = c.cn;
                                g = c.cv;
                                k = c.ttl;
                                if ('undefined' === typeof k || '' === k)
                                  k = Math.floor(q.getMaxCookieExpiresInMinutes() / 60 / 24);
                                l = c.dmn || '.' + document.domain.replace(/^www\./, '');
                                m = c.type;
                                f &&
                                  (g || 'number' === typeof g) &&
                                  ('var' !== m &&
                                    (k = parseInt(k, 10)) &&
                                    !isNaN(k) &&
                                    q.setCookie(f, g, 1440 * k, '/', l, !1),
                                  (M.stuffed[f] = g));
                              }
                          e = a.uuid;
                          r.isPopulatedString(e) &&
                            !r.isEmptyObject(y) &&
                            ((d = y.path),
                            ('string' === typeof d && d.length) || (d = '/'),
                            (h = parseInt(y.days, 10)),
                            isNaN(h) && (h = 100),
                            q.setCookie(
                              y.name || 'aam_did',
                              e,
                              1440 * h,
                              d,
                              y.domain || '.' + document.domain.replace(/^www\./, ''),
                              !0 === y.secure
                            ));
                          D || p.abortRequests || v.requestToProcess(a, b);
                        },
                        makeRequestSrcData: function (a) {
                          a.sids = r.removeEmptyArrayValues(a.sids || []);
                          a.pdata = r.removeEmptyArrayValues(a.pdata || []);
                          var b = p,
                            e = b.platformParams,
                            d = q.encodeAndBuildRequest(a.sids, ','),
                            c = q.encodeAndBuildRequest(a.pdata, ','),
                            f = (a.logdataArray || []).join('&');
                          delete a.logdataArray;
                          var g = t.IS_HTTPS ? 'https://' : 'http://',
                            k = b.declaredId.getDeclaredIdQueryString(),
                            l = b.adms.instance
                              ? b.adms.getCustomerIDsQueryString(b.adms.getCustomerIDs())
                              : '',
                            m = [],
                            x,
                            v,
                            I,
                            w;
                          for (x in a)
                            if (!(x in b.reservedKeys) && a.hasOwnProperty(x))
                              if (((v = a[x]), (x = encodeURIComponent(x)), v instanceof Array))
                                for (I = 0, w = v.length; I < w; I++)
                                  m.push(x + '=' + encodeURIComponent(v[I]));
                              else m.push(x + '=' + encodeURIComponent(v));
                          a = m.length ? '&' + m.join('&') : '';
                          b =
                            'd_nsid=' +
                            e.d_nsid +
                            b.getCoopQueryString() +
                            k +
                            l +
                            (d.length ? '&d_sid=' + d : '') +
                            (c.length ? '&d_px=' + c : '') +
                            (f.length ? '&d_ld=' + encodeURIComponent(f) : '');
                          e =
                            '&d_rtbd=' + e.d_rtbd + '&d_jsonv=' + e.d_jsonv + '&d_dst=' + e.d_dst;
                          g = g + u + '.demdex.net/event';
                          c = d = g + '?' + b + e + a;
                          2048 < d.length &&
                            (d = d.substring(0, 2048).substring(0, d.lastIndexOf('&')));
                          return {
                            corsSrc: g + '?_ts=' + new Date().getTime(),
                            src: d,
                            originalSrc: c,
                            corsPostData: b + e + a,
                            isDeclaredIdCall: '' !== k,
                          };
                        },
                        fireRequest: function (a) {
                          if ('img' === a.tag) this.fireImage(a);
                          else {
                            var b = p.declaredId,
                              b = b.declaredId.request || b.declaredId.init || {};
                            this.fireCORS(a, { dpid: b.dpid || '', dpuuid: b.dpuuid || '' });
                          }
                        },
                        fireImage: function (a) {
                          var b = p,
                            e,
                            d;
                          b.abortRequests ||
                            ((b.firing = !0),
                            (e = new Image(0, 0)),
                            b.sent.push(a),
                            (e.onload = function () {
                              b.firing = !1;
                              b.fired.push(a);
                              b.num_of_img_responses++;
                              b.registerRequest();
                            }),
                            (d = function (d) {
                              g = 'imgAbortOrErrorHandler received the event of type ' + d.type;
                              k.push(g);
                              b.abortRequests = !0;
                              b.firing = !1;
                              b.errored.push(a);
                              b.num_of_img_errors++;
                              b.registerRequest();
                            }),
                            e.addEventListener('error', d),
                            e.addEventListener('abort', d),
                            (e.src = a.src));
                        },
                        fireCORS: function (a, b) {
                          var e = this,
                            d = p,
                            c = this.corsMetadata.corsType,
                            f = a.corsSrc,
                            l = a.corsInstance,
                            q = a.corsPostData,
                            m = a.postCallbackFn,
                            r = 'function' === typeof m;
                          if (!d.abortRequests && !S) {
                            d.firing = !0;
                            try {
                              l.open('post', f, !0),
                                'XMLHttpRequest' === c &&
                                  ((l.withCredentials = !0),
                                  l.setRequestHeader(
                                    'Content-Type',
                                    'application/x-www-form-urlencoded'
                                  ),
                                  (l.onreadystatechange = function () {
                                    if (4 === this.readyState && 200 === this.status)
                                      a: {
                                        var c;
                                        try {
                                          if (
                                            ((c = JSON.parse(this.responseText)), c !== Object(c))
                                          ) {
                                            e.handleCORSError(a, b, 'Response is not JSON');
                                            break a;
                                          }
                                        } catch (h) {
                                          e.handleCORSError(
                                            a,
                                            b,
                                            'Error parsing response as JSON'
                                          );
                                          break a;
                                        }
                                        G && (v.ibsDeleted.push(c.ibs), delete c.ibs);
                                        try {
                                          var f = a.callbackFn;
                                          d.firing = !1;
                                          d.fired.push(a);
                                          d.num_of_cors_responses++;
                                          f(c, b);
                                          r && m(c, b);
                                        } catch (h) {
                                          h.message =
                                            'DIL handleCORSResponse caught error with message ' +
                                            h.message;
                                          g = h.message;
                                          k.push(g);
                                          h.filename = h.filename || 'dil.js';
                                          h.partner = u;
                                          DIL.errorModule.handleError(h);
                                          try {
                                            f({ error: h.name + '|' + h.message }, b),
                                              r && m({ error: h.name + '|' + h.message }, b);
                                          } catch (n) {}
                                        } finally {
                                          d.registerRequest();
                                        }
                                      }
                                  })),
                                (l.onerror = function () {
                                  e.handleCORSError(a, b, 'onerror');
                                }),
                                (l.ontimeout = function () {
                                  e.handleCORSError(a, b, 'ontimeout');
                                }),
                                l.send(q);
                            } catch (t) {
                              this.handleCORSError(a, b, 'try-catch');
                            }
                            d.sent.push(a);
                            d.declaredId.declaredId.request = null;
                          }
                        },
                        handleCORSError: function (a, b, e) {
                          p.num_of_cors_errors++;
                          p.corsErrorSources.push(e);
                        },
                        handleRequestError: function (a, b) {
                          var e = p;
                          k.push(a);
                          e.abortRequests = !0;
                          e.firing = !1;
                          e.errored.push(b);
                          e.registerRequest();
                        },
                      },
                      r = {
                        isValidPdata: function (a) {
                          return a instanceof Array && this.removeEmptyArrayValues(a).length
                            ? !0
                            : !1;
                        },
                        isValidLogdata: function (a) {
                          return !this.isEmptyObject(a);
                        },
                        isEmptyObject: function (a) {
                          if (a !== Object(a)) return !0;
                          for (var b in a) if (a.hasOwnProperty(b)) return !1;
                          return !0;
                        },
                        removeEmptyArrayValues: function (a) {
                          for (var b = 0, e = a.length, d, c = [], b = 0; b < e; b++)
                            (d = a[b]),
                              'undefined' !== typeof d && null !== d && '' !== d && c.push(d);
                          return c;
                        },
                        isPopulatedString: function (a) {
                          return 'string' === typeof a && a.length;
                        },
                      },
                      q = {
                        convertObjectToKeyValuePairs: function (a, b, e) {
                          var d = [],
                            c,
                            f;
                          b || (b = '=');
                          for (c in a)
                            a.hasOwnProperty(c) &&
                              ((f = a[c]),
                              'undefined' !== typeof f &&
                                null !== f &&
                                '' !== f &&
                                d.push(c + b + (e ? encodeURIComponent(f) : f)));
                          return d;
                        },
                        encodeAndBuildRequest: function (a, b) {
                          return a
                            .map(function (a) {
                              return encodeURIComponent(a);
                            })
                            .join(b);
                        },
                        getCookie: function (a) {
                          a += '=';
                          var b = document.cookie.split(';'),
                            e,
                            d,
                            c;
                          e = 0;
                          for (d = b.length; e < d; e++) {
                            for (c = b[e]; ' ' === c.charAt(0); ) c = c.substring(1, c.length);
                            if (0 === c.indexOf(a))
                              return decodeURIComponent(c.substring(a.length, c.length));
                          }
                          return null;
                        },
                        setCookie: function (a, b, e, d, c, f) {
                          var g = new Date();
                          e && (e *= 60000);
                          document.cookie =
                            a +
                            '=' +
                            encodeURIComponent(b) +
                            (e ? ';expires=' + new Date(g.getTime() + e).toUTCString() : '') +
                            (d ? ';path=' + d : '') +
                            (c ? ';domain=' + c : '') +
                            (f ? ';secure' : '');
                        },
                        extendArray: function (a, b) {
                          return a instanceof Array && b instanceof Array
                            ? (Array.prototype.push.apply(a, b), !0)
                            : !1;
                        },
                        extendObject: function (a, b, e) {
                          var d;
                          if (a === Object(a) && b === Object(b)) {
                            for (d in b)
                              !b.hasOwnProperty(d) ||
                                (!r.isEmptyObject(e) && d in e) ||
                                (a[d] = b[d]);
                            return !0;
                          }
                          return !1;
                        },
                        getMaxCookieExpiresInMinutes: function () {
                          return t.SIX_MONTHS_IN_MINUTES;
                        },
                        getCookieField: function (a, b) {
                          var e = this.getCookie(a),
                            d = decodeURIComponent;
                          if ('string' === typeof e) {
                            var e = e.split('|'),
                              c,
                              f;
                            c = 0;
                            for (f = e.length - 1; c < f; c++)
                              if (d(e[c]) === b) return d(e[c + 1]);
                          }
                          return null;
                        },
                        getDilCookieField: function (a) {
                          return this.getCookieField(t.DIL_COOKIE_NAME, a);
                        },
                        setCookieField: function (a, b, c) {
                          var d = this.getCookie(a),
                            f = !1,
                            g = encodeURIComponent;
                          b = g(b);
                          c = g(c);
                          if ('string' === typeof d) {
                            var d = d.split('|'),
                              k,
                              g = 0;
                            for (k = d.length - 1; g < k; g++)
                              if (d[g] === b) {
                                d[g + 1] = c;
                                f = !0;
                                break;
                              }
                            f || ((g = d.length), (d[g] = b), (d[g + 1] = c));
                          } else d = [b, c];
                          this.setCookie(
                            a,
                            d.join('|'),
                            this.getMaxCookieExpiresInMinutes(),
                            '/',
                            this.getDomain(),
                            !1
                          );
                        },
                        setDilCookieField: function (a, b) {
                          return this.setCookieField(t.DIL_COOKIE_NAME, a, b);
                        },
                        getDomain: function (a) {
                          !a && window.location && (a = window.location.hostname);
                          if (a)
                            if (/^[0-9.]+$/.test(a)) a = '';
                            else {
                              var b = a.split('.'),
                                c = b.length - 1,
                                d = c - 1;
                              1 < c &&
                                2 >= b[c].length &&
                                (2 === b[c - 1].length ||
                                  0 > ',DOMAIN_2_CHAR_EXCEPTIONS,'.indexOf(',' + b[c] + ',')) &&
                                d--;
                              if (0 < d)
                                for (a = ''; c >= d; ) (a = b[c] + (a ? '.' : '') + a), c--;
                            }
                          return a;
                        },
                        replaceMethodsWithFunction: function (a, b) {
                          var c;
                          if (a === Object(a) && 'function' === typeof b)
                            for (c in a)
                              a.hasOwnProperty(c) && 'function' === typeof a[c] && (a[c] = b);
                        },
                      };
                    'error' === u &&
                      0 === l &&
                      window.addEventListener('load', function () {
                        DIL.windowLoaded = !0;
                      });
                    var T = !1,
                      K = function () {
                        T ||
                          ((T = !0),
                          p.registerRequest(),
                          U(),
                          D || p.abortRequests || v.attachIframe());
                      },
                      U = function () {
                        D ||
                          setTimeout(function () {
                            Q ||
                              p.firstRequestHasFired ||
                              ('function' === typeof L ? J.afterResult(L).submit() : J.submit());
                          }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
                      };
                    w = document;
                    'error' !== u &&
                      (DIL.windowLoaded
                        ? K()
                        : 'complete' !== w.readyState && 'loaded' !== w.readyState
                        ? window.addEventListener('load', function () {
                            DIL.windowLoaded = !0;
                            K();
                          })
                        : ((DIL.windowLoaded = !0), K()));
                    if ('error' !== u)
                      try {
                        DIL.xd.receiveMessage(function (a) {
                          v.receiveMessage(a.data);
                        }, v.getIframeHost(v.url));
                      } catch (a) {}
                    p.declaredId.setDeclaredId(O, 'init');
                    p.processVisitorAPI();
                    t.IS_IE_LESS_THAN_10 &&
                      q.replaceMethodsWithFunction(J, function () {
                        return this;
                      });
                    this.api = J;
                    this.getStuffedVariable = function (a) {
                      var b = M.stuffed[a];
                      b ||
                        'number' === typeof b ||
                        (b = q.getCookie(a)) ||
                        'number' === typeof b ||
                        (b = '');
                      return b;
                    };
                    this.validators = r;
                    this.helpers = q;
                    this.constants = t;
                    this.log = k;
                    E &&
                      ((this.pendingRequest = m),
                      (this.requestController = p),
                      (this.setDestinationPublishingUrl = B),
                      (this.destinationPublishing = v),
                      (this.requestProcs = C),
                      (this.variables = M),
                      (this.callWindowLoadFunctions = K));
                  }),
                  (DIL.extendStaticPropertiesAndMethods = function (c) {
                    var f;
                    if (c === Object(c)) for (f in c) c.hasOwnProperty(f) && (this[f] = c[f]);
                  }),
                  DIL.extendStaticPropertiesAndMethods({
                    version: '7.0',
                    jsonVersion: 1,
                    constants: { TIME_TO_DEFAULT_REQUEST: 50 },
                    variables: { scriptNodeList: document.getElementsByTagName('script') },
                    windowLoaded: !1,
                    dils: {},
                    isAddedPostWindowLoad: function (c) {
                      this.windowLoaded =
                        'function' === typeof c ? !!c() : 'boolean' === typeof c ? c : !0;
                    },
                    create: function (c) {
                      try {
                        return new DIL(c);
                      } catch (f) {
                        throw Error(
                          'Error in attempt to create DIL instance with DIL.create(): ' + f.message
                        );
                      }
                    },
                    registerDil: function (c, f, k) {
                      f = f + '$' + k;
                      f in this.dils || (this.dils[f] = c);
                    },
                    getDil: function (c, f) {
                      var k;
                      'string' !== typeof c && (c = '');
                      f || (f = 0);
                      k = c + '$' + f;
                      return k in this.dils
                        ? this.dils[k]
                        : Error(
                            'The DIL instance with partner = ' +
                              c +
                              ' and containerNSID = ' +
                              f +
                              ' was not found'
                          );
                    },
                    dexGetQSVars: function (c, f, k) {
                      f = this.getDil(f, k);
                      return f instanceof this ? f.getStuffedVariable(c) : '';
                    },
                    xd: {
                      postMessage: function (c, f, k) {
                        f && k.postMessage(c, f.replace(/([^:]+:\/\/[^\/]+).*/, '$1'));
                      },
                      receiveMessage: function (c, f) {
                        var k;
                        try {
                          c &&
                            (k = function (g) {
                              if (
                                ('string' === typeof f && g.origin !== f) ||
                                ('[object Function]' === Object.prototype.toString.call(f) &&
                                  !1 === f(g.origin))
                              )
                                return !1;
                              c(g);
                            }),
                            window[c ? 'addEventListener' : 'removeEventListener'](
                              'message',
                              k,
                              !1
                            );
                        } catch (g) {}
                      },
                    },
                  }),
                  (DIL.errorModule = (function () {
                    var c = DIL.create({
                        partner: 'error',
                        containerNSID: 0,
                        disableDestinationPublishingIframe: !0,
                      }),
                      f = {
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
                      },
                      k = !1;
                    return {
                      activate: function () {
                        k = !0;
                      },
                      handleError: function (g) {
                        if (!k) return 'DIL error module has not been activated';
                        g !== Object(g) && (g = {});
                        var w = g.name ? (g.name + '').toLowerCase() : '',
                          u = [];
                        g = {
                          name: w,
                          filename: g.filename ? g.filename + '' : '',
                          partner: g.partner ? g.partner + '' : 'no_partner',
                          site: g.site ? g.site + '' : document.location.href,
                          message: g.message ? g.message + '' : '',
                        };
                        u.push(w in f ? f[w] : f.noerrortypedefined);
                        c.api.pixels(u).logs(g).useImageRequest().submit();
                        return 'DIL error report sent';
                      },
                      pixelMap: f,
                    };
                  })()),
                  (DIL.tools = {}),
                  (DIL.modules = {
                    helpers: {
                      handleModuleError: function (c, f, k) {
                        var g = '';
                        f = f || 'Error caught in DIL module/submodule: ';
                        c === Object(c)
                          ? (g = f + (c.message || 'err has no message'))
                          : ((g = f + 'err is not a valid object'), (c = {}));
                        c.message = g;
                        k instanceof DIL && (c.partner = k.api.getPartner());
                        DIL.errorModule.handleError(c);
                        return (this.errorMessage = g);
                      },
                    },
                  }));
            }.apply(this, arguments);
          } finally {
            if ($___old_fc1497c0a5b6a149)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_fc1497c0a5b6a149
              ));
          }
        });
        window.AppMeasurement_Module_AudienceManagement = function (d) {
          var a = this;
          a.s = d;
          var b = window;
          b.s_c_in || ((b.s_c_il = []), (b.s_c_in = 0));
          a._il = b.s_c_il;
          a._in = b.s_c_in;
          a._il[a._in] = a;
          b.s_c_in++;
          a._c = 's_m';
          a.setup = function (c) {
            b.DIL &&
              c &&
              ((c.disableDefaultRequest = !0),
              (c.disableScriptAttachment = !0),
              (c.disableCORS = !0),
              (c.secureDataCollection = !1),
              (a.instance = b.DIL.create(c)),
              (a.tools = b.DIL.tools));
          };
          a.isReady = function () {
            return a.instance ? !0 : !1;
          };
          a.getEventCallConfigParams = function () {
            return a.instance && a.instance.api && a.instance.api.getEventCallConfigParams
              ? a.instance.api.getEventCallConfigParams()
              : {};
          };
          a.passData = function (b) {
            a.instance && a.instance.api && a.instance.api.passData && a.instance.api.passData(b);
          };
        };
        window.AppMeasurement = function (r) {
          const $___old_47f69b662b09f324 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_47f69b662b09f324)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_47c01efa79e9f191.userAgent
              ));
            return function () {
              var a = this;
              a.version = '2.9.0';
              var k = window;
              k.s_c_in || ((k.s_c_il = []), (k.s_c_in = 0));
              a._il = k.s_c_il;
              a._in = k.s_c_in;
              a._il[a._in] = a;
              k.s_c_in++;
              a._c = 's_c';
              var p = k.AppMeasurement.Mb;
              p || (p = null);
              var n = k,
                m,
                s;
              try {
                for (
                  m = n.parent, s = n.location;
                  m &&
                  m.location &&
                  s &&
                  '' + m.location != '' + s &&
                  n.location &&
                  '' + m.location != '' + n.location &&
                  m.location.host == s.host;

                )
                  (n = m), (m = n.parent);
              } catch (u) {}
              a.D = function (a) {
                try {
                  console.log(a);
                } catch (b) {}
              };
              a.Ga = function (a) {
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
              a.tb = function () {
                var c = k.location.hostname,
                  b = a.fpCookieDomainPeriods,
                  d;
                b || (b = a.cookieDomainPeriods);
                if (
                  c &&
                  !a.ya &&
                  !/^[0-9.]+$/.test(c) &&
                  ((b = b ? parseInt(b) : 2),
                  (b = 2 < b ? b : 2),
                  (d = c.lastIndexOf('.')),
                  0 <= d)
                ) {
                  for (; 0 <= d && 1 < b; ) (d = c.lastIndexOf('.', d - 1)), b--;
                  a.ya = 0 < d ? c.substring(d) : c;
                }
                return a.ya;
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
                var f = a.tb(),
                  e = a.cookieLifetime,
                  g;
                b = '' + b;
                e = e ? ('' + e).toUpperCase() : '';
                d &&
                  'SESSION' != e &&
                  'NONE' != e &&
                  ((g = '' != b ? parseInt(e ? e : 0) : -60)
                    ? ((d = new Date()), d.setTime(d.getTime() + 1000 * g))
                    : 1 == d &&
                      ((d = new Date()),
                      (g = d.getYear()),
                      d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
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
              a.qb = function () {
                var c = a.Util.getIeVersion();
                'number' === typeof c &&
                  10 > c &&
                  ((a.unsupportedBrowser = !0), a.fb(a, function () {}));
              };
              a.fb = function (a, b) {
                for (var d in a) a.hasOwnProperty(d) && 'function' === typeof a[d] && (a[d] = b);
              };
              a.L = [];
              a.ba = function (c, b, d) {
                if (a.za) return 0;
                a.maxDelay || (a.maxDelay = 250);
                var f = 0,
                  e = new Date().getTime() + a.maxDelay,
                  g = a.d.visibilityState,
                  h = ['webkitvisibilitychange', 'visibilitychange'];
                g || (g = a.d.webkitVisibilityState);
                if (g && 'prerender' == g) {
                  if (!a.ca)
                    for (a.ca = 1, d = 0; d < h.length; d++)
                      a.d.addEventListener(h[d], function () {
                        var c = a.d.visibilityState;
                        c || (c = a.d.webkitVisibilityState);
                        'visible' == c && ((a.ca = 0), a.delayReady());
                      });
                  f = 1;
                  e = 0;
                } else d || (a.o('_d') && (f = 1));
                f &&
                  (a.L.push({ m: c, a: b, t: e }), a.ca || setTimeout(a.delayReady, a.maxDelay));
                return f;
              };
              a.delayReady = function () {
                var c = new Date().getTime(),
                  b = 0,
                  d;
                for (a.o('_d') ? (b = 1) : a.qa(); 0 < a.L.length; ) {
                  d = a.L.shift();
                  if (b && !d.t && d.t > c) {
                    a.L.unshift(d);
                    setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                    break;
                  }
                  a.za = 1;
                  a[d.m].apply(a, d.a);
                  a.za = 0;
                }
              };
              a.setAccount = a.sa = function (c) {
                var b, d;
                if (!a.ba('setAccount', arguments))
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
                  h = '';
                e = f = '';
                if (a.lightProfileID)
                  (d = a.P), (h = a.lightTrackVars) && (h = ',' + h + ',' + a.ga.join(',') + ',');
                else {
                  d = a.g;
                  if (a.pe || a.linkType)
                    (h = a.linkTrackVars),
                      (f = a.linkTrackEvents),
                      a.pe &&
                        ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                        a[e] && ((h = a[e].Kb), (f = a[e].Jb)));
                  h && (h = ',' + h + ',' + a.G.join(',') + ',');
                  f && h && (h += ',events,');
                }
                b && (b = ',' + b + ',');
                for (f = 0; f < d.length; f++)
                  (e = d[f]),
                    (g = a[e]) &&
                      (!h || 0 <= h.indexOf(',' + e + ',')) &&
                      (!b || 0 <= b.indexOf(',' + e + ',')) &&
                      c(e, g);
              };
              a.q = function (c, b, d, f, e) {
                var g = '',
                  h,
                  l,
                  k,
                  q,
                  m = 0;
                'contextData' == c && (c = 'c');
                if (b) {
                  for (h in b)
                    if (
                      !(Object.prototype[h] || (e && h.substring(0, e.length) != e)) &&
                      b[h] &&
                      (!d || 0 <= d.indexOf(',' + (f ? f + '.' : '') + h + ','))
                    ) {
                      k = !1;
                      if (m)
                        for (l = 0; l < m.length; l++)
                          h.substring(0, m[l].length) == m[l] && (k = !0);
                      if (
                        !k &&
                        ('' == g && (g += '&' + c + '.'),
                        (l = b[h]),
                        e && (h = h.substring(e.length)),
                        0 < h.length)
                      )
                        if (((k = h.indexOf('.')), 0 < k))
                          (l = h.substring(0, k)),
                            (k = (e ? e : '') + l + '.'),
                            m || (m = []),
                            m.push(k),
                            (g += a.q(l, b, d, f, k));
                        else if (('boolean' == typeof l && (l = l ? 'true' : 'false'), l)) {
                          if ('retrieveLightData' == f && 0 > e.indexOf('.contextData.'))
                            switch (((k = h.substring(0, 4)), (q = h.substring(4)), h)) {
                              case 'transactionID':
                                h = 'xact';
                                break;
                              case 'channel':
                                h = 'ch';
                                break;
                              case 'campaign':
                                h = 'v0';
                                break;
                              default:
                                a.Ga(q) &&
                                  ('prop' == k
                                    ? (h = 'c' + q)
                                    : 'eVar' == k
                                    ? (h = 'v' + q)
                                    : 'list' == k
                                    ? (h = 'l' + q)
                                    : 'hier' == k && ((h = 'h' + q), (l = l.substring(0, 255))));
                            }
                          g += '&' + a.escape(h) + '=' + a.escape(l);
                        }
                    }
                  '' != g && (g += '&.' + c);
                }
                return g;
              };
              a.usePostbacks = 0;
              a.wb = function () {
                var c = '',
                  b,
                  d,
                  f,
                  e,
                  g,
                  h,
                  l,
                  k,
                  q = '',
                  m = '',
                  n = (e = '');
                if (a.lightProfileID)
                  (b = a.P), (q = a.lightTrackVars) && (q = ',' + q + ',' + a.ga.join(',') + ',');
                else {
                  b = a.g;
                  if (a.pe || a.linkType)
                    (q = a.linkTrackVars),
                      (m = a.linkTrackEvents),
                      a.pe &&
                        ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                        a[e] && ((q = a[e].Kb), (m = a[e].Jb)));
                  q && (q = ',' + q + ',' + a.G.join(',') + ',');
                  m && ((m = ',' + m + ','), q && (q += ',events,'));
                  a.events2 && (n += ('' != n ? ',' : '') + a.events2);
                }
                if (a.visitor && a.visitor.getCustomerIDs) {
                  e = p;
                  if ((g = a.visitor.getCustomerIDs()))
                    for (d in g)
                      Object.prototype[d] ||
                        ((f = g[d]),
                        'object' == typeof f &&
                          (e || (e = {}),
                          f.id && (e[d + '.id'] = f.id),
                          f.authState && (e[d + '.as'] = f.authState)));
                  e && (c += a.q('cid', e));
                }
                a.AudienceManagement &&
                  a.AudienceManagement.isReady() &&
                  (c += a.q('d', a.AudienceManagement.getEventCallConfigParams()));
                for (d = 0; d < b.length; d++) {
                  e = b[d];
                  g = a[e];
                  f = e.substring(0, 4);
                  h = e.substring(4);
                  g ||
                    ('events' == e && n
                      ? ((g = n), (n = ''))
                      : 'marketingCloudOrgID' == e &&
                        a.visitor &&
                        (g = a.visitor.marketingCloudOrgID));
                  if (g && (!q || 0 <= q.indexOf(',' + e + ','))) {
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
                        n && (g += ('' != g ? ',' : '') + n);
                        if (m)
                          for (h = g.split(','), g = '', f = 0; f < h.length; f++)
                            (l = h[f]),
                              (k = l.indexOf('=')),
                              0 <= k && (l = l.substring(0, k)),
                              (k = l.indexOf(':')),
                              0 <= k && (l = l.substring(0, k)),
                              0 <= m.indexOf(',' + l + ',') && (g += (g ? ',' : '') + h[f]);
                        break;
                      case 'events2':
                        g = '';
                        break;
                      case 'contextData':
                        c += a.q('c', a[e], q, e);
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
                        a.retrieveLightProfiles && (c += a.q('mts', a[e], q, e));
                        g = '';
                        break;
                      default:
                        a.Ga(h) &&
                          ('prop' == f
                            ? (e = 'c' + h)
                            : 'eVar' == f
                            ? (e = 'v' + h)
                            : 'list' == f
                            ? (e = 'l' + h)
                            : 'hier' == f && ((e = 'h' + h), (g = g.substring(0, 255))));
                    }
                    g && (c += '&' + e + '=' + ('pev' != e.substring(0, 3) ? a.escape(g) : g));
                  }
                  'pev3' == e && a.e && (c += a.e);
                }
                a.fa && ((c += '&lrt=' + a.fa), (a.fa = null));
                return c;
              };
              a.C = function (a) {
                var b = a.tagName;
                if (
                  'undefined' != '' + a.Pb ||
                  ('undefined' != '' + a.Fb && 'HTML' != ('' + a.Fb).toUpperCase())
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
              a.Ca = function (a) {
                var b = k.location,
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
              a.M = function (c) {
                var b = a.C(c),
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
                    : (e = a.Ca(c)),
                  e)
                  ? { id: e.substring(0, 100), type: g }
                  : 0;
              };
              a.Nb = function (c) {
                for (var b = a.C(c), d = a.M(c); c && !d && 'BODY' != b; )
                  if ((c = c.parentElement ? c.parentElement : c.parentNode))
                    (b = a.C(c)), (d = a.M(c));
                (d && 'BODY' != b) || (c = 0);
                c &&
                  ((b = c.onclick ? '' + c.onclick : ''),
                  0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) &&
                  (c = 0);
                return c;
              };
              a.Eb = function () {
                var c,
                  b,
                  d = a.linkObject,
                  f = a.linkType,
                  e = a.linkURL,
                  g,
                  h;
                a.ha = 1;
                d || ((a.ha = 0), (d = a.clickObject));
                if (d) {
                  c = a.C(d);
                  for (b = a.M(d); d && !b && 'BODY' != c; )
                    if ((d = d.parentElement ? d.parentElement : d.parentNode))
                      (c = a.C(d)), (b = a.M(d));
                  (b && 'BODY' != c) || (d = 0);
                  if (d && !a.linkObject) {
                    var l = d.onclick ? '' + d.onclick : '';
                    if (0 <= l.indexOf('.tl(') || 0 <= l.indexOf('.trackLink(')) d = 0;
                  }
                } else a.ha = 1;
                !e && d && (e = a.Ca(d));
                e &&
                  !a.linkLeaveQueryString &&
                  ((g = e.indexOf('?')), 0 <= g && (e = e.substring(0, g)));
                if (!f && e) {
                  var m = 0,
                    q = 0,
                    n;
                  if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                    for (
                      l = e.toLowerCase(),
                        g = l.indexOf('?'),
                        h = l.indexOf('#'),
                        0 <= g ? 0 <= h && h < g && (g = h) : (g = h),
                        0 <= g && (l = l.substring(0, g)),
                        g = a.linkDownloadFileTypes.toLowerCase().split(','),
                        h = 0;
                      h < g.length;
                      h++
                    )
                      (n = g[h]) && l.substring(l.length - (n.length + 1)) == '.' + n && (f = 'd');
                  if (
                    a.trackExternalLinks &&
                    !f &&
                    ((l = e.toLowerCase()),
                    a.Fa(l) &&
                      (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname),
                      (g = 0),
                      a.linkExternalFilters
                        ? ((g = a.linkExternalFilters.toLowerCase().split(',')), (m = 1))
                        : a.linkInternalFilters &&
                          (g = a.linkInternalFilters.toLowerCase().split(',')),
                      g))
                  ) {
                    for (h = 0; h < g.length; h++) (n = g[h]), 0 <= l.indexOf(n) && (q = 1);
                    q ? m && (f = 'e') : m || (f = 'e');
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
                      k.s_objectID && ((b.id = k.s_objectID), (d = b.type = 1)),
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
              a.xb = function () {
                var c = a.ha,
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
                if (a.trackClickMap || a.trackInlineStats || a.Ab()) {
                  var b = {},
                    d = 0,
                    e = a.cookieRead('s_sq'),
                    g = e ? e.split('&') : 0,
                    h,
                    l,
                    k,
                    e = 0;
                  if (g)
                    for (h = 0; h < g.length; h++)
                      (l = g[h].split('=')),
                        (f = a.unescape(l[0]).split(',')),
                        (l = a.unescape(l[1])),
                        (b[l] = f);
                  f = a.account.split(',');
                  h = {};
                  for (k in a.contextData)
                    k &&
                      !Object.prototype[k] &&
                      'a.activitymap.' == k.substring(0, 14) &&
                      ((h[k] = a.contextData[k]), (a.contextData[k] = ''));
                  a.e = a.q('c', h) + (a.e ? a.e : '');
                  if (c || a.e) {
                    c && !a.e && (e = 1);
                    for (l in b)
                      if (!Object.prototype[l])
                        for (k = 0; k < f.length; k++)
                          for (
                            e &&
                              ((g = b[l].join(',')),
                              g == a.account &&
                                ((a.e += ('&' != l.charAt(0) ? '&' : '') + l),
                                (b[l] = []),
                                (d = 1))),
                              h = 0;
                            h < b[l].length;
                            h++
                          )
                            (g = b[l][h]),
                              g == f[k] &&
                                (e &&
                                  (a.e +=
                                    '&u=' +
                                    a.escape(g) +
                                    ('&' != l.charAt(0) ? '&' : '') +
                                    l +
                                    '&u=0'),
                                b[l].splice(h, 1),
                                (d = 1));
                    c || (d = 1);
                    if (d) {
                      e = '';
                      h = 2;
                      !c && a.e && ((e = a.escape(f.join(',')) + '=' + a.escape(a.e)), (h = 1));
                      for (l in b)
                        !Object.prototype[l] &&
                          0 < h &&
                          0 < b[l].length &&
                          ((e += (e ? '&' : '') + a.escape(b[l].join(',')) + '=' + a.escape(l)),
                          h--);
                      a.cookieWrite('s_sq', e);
                    }
                  }
                }
                return c;
              };
              a.yb = function () {
                if (!a.Ib) {
                  var c = new Date(),
                    b = n.location,
                    d,
                    f,
                    e = (f = d = ''),
                    g = '',
                    h = '',
                    l = '1.2',
                    k = a.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N',
                    m = '',
                    p = '';
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
                  h = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
                  try {
                    a.b.addBehavior('#default#homePage'), (m = a.b.Ob(b) ? 'Y' : 'N');
                  } catch (s) {}
                  try {
                    a.b.addBehavior('#default#clientCaps'), (p = a.b.connectionType);
                  } catch (t) {}
                  a.resolution = d;
                  a.colorDepth = f;
                  a.javascriptVersion = l;
                  a.javaEnabled = e;
                  a.cookiesEnabled = k;
                  a.browserWidth = g;
                  a.browserHeight = h;
                  a.connectionType = p;
                  a.homepage = m;
                  a.Ib = 1;
                }
              };
              a.Q = {};
              a.loadModule = function (c, b) {
                var d = a.Q[c];
                if (!d) {
                  d = k['AppMeasurement_Module_' + c]
                    ? new k['AppMeasurement_Module_' + c](a)
                    : {};
                  a.Q[c] = a[c] = d;
                  d.Za = function () {
                    return d.eb;
                  };
                  d.gb = function (b) {
                    if ((d.eb = b))
                      (a[c + '_onLoad'] = b), a.ba(c + '_onLoad', [a, d], 1) || b(a, d);
                  };
                  try {
                    Object.defineProperty
                      ? Object.defineProperty(d, 'onLoad', { get: d.Za, set: d.gb })
                      : (d._olc = 1);
                  } catch (f) {
                    d._olc = 1;
                  }
                }
                b && ((a[c + '_onLoad'] = b), a.ba(c + '_onLoad', [a, d], 1) || b(a, d));
              };
              a.o = function (c) {
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
              a.Ab = function () {
                return a.ActivityMap && a.ActivityMap._c ? !0 : !1;
              };
              a.Bb = function () {
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
              a.R = function (c, b) {
                var d, f, e, g, h, l;
                for (d = 0; 2 > d; d++)
                  for (f = 0 < d ? a.ua : a.g, e = 0; e < f.length; e++)
                    if (((g = f[e]), (h = c[g]) || c['!' + g])) {
                      if (!b && ('contextData' == g || 'retrieveLightData' == g) && a[g])
                        for (l in a[g]) h[l] || (h[l] = a[g][l]);
                      a[g] = h;
                    }
              };
              a.Qa = function (c, b) {
                var d, f, e, g;
                for (d = 0; 2 > d; d++)
                  for (f = 0 < d ? a.ua : a.g, e = 0; e < f.length; e++)
                    (g = f[e]), (c[g] = a[g]), b || c[g] || (c['!' + g] = 1);
              };
              a.sb = function (a) {
                var b,
                  d,
                  f,
                  e,
                  g,
                  h = 0,
                  l,
                  k = '',
                  m = '';
                if (
                  a &&
                  255 < a.length &&
                  ((b = '' + a),
                  (d = b.indexOf('?')),
                  0 < d &&
                    ((l = b.substring(d + 1)),
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
                        ? (h = ',q,ie,start,search_key,word,kw,cd,')
                        : 0 <= e.indexOf('yahoo.co') && (h = ',p,ei,'),
                      h && l)))
                ) {
                  if ((a = l.split('&')) && 1 < a.length) {
                    for (f = 0; f < a.length; f++)
                      (e = a[f]),
                        (d = e.indexOf('=')),
                        0 < d && 0 <= h.indexOf(',' + e.substring(0, d) + ',')
                          ? (k += (k ? '&' : '') + e)
                          : (m += (m ? '&' : '') + e);
                    k && m ? (l = k + '&' + m) : (m = '');
                  }
                  d = 253 - (l.length - m.length) - b.length;
                  a = b + (0 < d ? g.substring(0, d) : '') + '?' + l;
                }
                return a;
              };
              a.Ta = function (c) {
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
              a.X = !1;
              a.J = !1;
              a.ib = function () {
                a.J = !0;
                a.H();
              };
              a.Y = !1;
              a.S = !1;
              a.jb = function (c) {
                a.marketingCloudVisitorID = c.MCMID;
                a.visitorOptedOut = c.MCOPTOUT;
                a.analyticsVisitorID = c.MCAID;
                a.audienceManagerLocationHint = c.MCAAMLH;
                a.audienceManagerBlob = c.MCAAMB;
                a.S = !0;
                a.H();
              };
              a.Sa = function (c) {
                a.maxDelay || (a.maxDelay = 250);
                return a.o('_d')
                  ? (c &&
                      setTimeout(function () {
                        c();
                      }, a.maxDelay),
                    !1)
                  : !0;
              };
              a.W = !1;
              a.I = !1;
              a.qa = function () {
                a.I = !0;
                a.H();
              };
              a.isReadyToTrack = function () {
                var c = !0,
                  b = a.visitor;
                a.X || a.J || (a.Ta(a.ib) ? (a.J = !0) : (a.X = !0));
                if (a.X && !a.J) return !1;
                b &&
                  b.isAllowed() &&
                  (a.Y ||
                    a.marketingCloudVisitorID ||
                    !b.getVisitorValues ||
                    ((a.Y = !0),
                    a.marketingCloudVisitorID ? (a.S = !0) : b.getVisitorValues(a.jb)),
                  (c = !a.Y || a.S || a.marketingCloudVisitorID ? !0 : !1));
                a.W || a.I || (a.Sa(a.qa) ? (a.I = !0) : (a.W = !0));
                a.W && !a.I && (c = !1);
                return c;
              };
              a.l = p;
              a.r = 0;
              a.callbackWhenReadyToTrack = function (c, b, d) {
                var f;
                f = {};
                f.nb = c;
                f.mb = b;
                f.kb = d;
                a.l == p && (a.l = []);
                a.l.push(f);
                0 == a.r && (a.r = setInterval(a.H, 100));
              };
              a.H = function () {
                var c;
                if (a.isReadyToTrack() && (a.hb(), a.l != p))
                  for (; 0 < a.l.length; ) (c = a.l.shift()), c.mb.apply(c.nb, c.kb);
              };
              a.hb = function () {
                a.r && (clearInterval(a.r), (a.r = 0));
              };
              a.ab = function (c) {
                var b,
                  d,
                  f = p,
                  e = p;
                if (!a.isReadyToTrack()) {
                  b = [];
                  if (c != p) for (d in ((f = {}), c)) f[d] = c[d];
                  e = {};
                  a.Qa(e, !0);
                  b.push(f);
                  b.push(e);
                  a.callbackWhenReadyToTrack(a, a.track, b);
                  return !0;
                }
                return !1;
              };
              a.ub = function () {
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
              a.t = a.track = function (c, b) {
                var d,
                  f = new Date(),
                  e =
                    's' +
                    (Math.floor(f.getTime() / 10800000) % 10) +
                    Math.floor(10000000000000 * Math.random()),
                  g = f.getYear(),
                  g =
                    't=' +
                    a.escape(
                      f.getDate() +
                        '/' +
                        f.getMonth() +
                        '/' +
                        (1900 > g ? g + 1900 : g) +
                        ' ' +
                        f.getHours() +
                        ':' +
                        f.getMinutes() +
                        ':' +
                        f.getSeconds() +
                        ' ' +
                        f.getDay() +
                        ' ' +
                        f.getTimezoneOffset()
                    );
                a.visitor && a.visitor.getAuthState && (a.authState = a.visitor.getAuthState());
                a.o('_s');
                a.ab(c) ||
                  (b && a.R(b),
                  c && ((d = {}), a.Qa(d, 0), a.R(c)),
                  a.Bb() &&
                    !a.visitorOptedOut &&
                    (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.ub()),
                    a.Eb(),
                    a.usePlugins && a.doPlugins && a.doPlugins(a),
                    a.account &&
                      (a.abort ||
                        (a.trackOffline &&
                          !a.timestamp &&
                          (a.timestamp = Math.floor(f.getTime() / 1000)),
                        (f = k.location),
                        a.pageURL || (a.pageURL = f.href ? f.href : f),
                        a.referrer ||
                          a.Ra ||
                          ((f = a.Util.getQueryParam('adobe_mc_ref', null, null, !0)),
                          (a.referrer =
                            f || void 0 === f ? (void 0 === f ? '' : f) : n.document.referrer)),
                        (a.Ra = 1),
                        (a.referrer = a.sb(a.referrer)),
                        a.o('_g')),
                      a.xb() &&
                        !a.abort &&
                        (a.visitor &&
                          !a.supplementalDataID &&
                          a.visitor.getSupplementalDataID &&
                          (a.supplementalDataID = a.visitor.getSupplementalDataID(
                            'AppMeasurement:' + a._in,
                            a.expectSupplementalData ? !1 : !0
                          )),
                        a.yb(),
                        (g += a.wb()),
                        a.cb(e, g),
                        a.o('_t'),
                        (a.referrer = '')))),
                  c && a.R(d, 1));
                a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0;
              };
              a.ta = [];
              a.registerPreTrackCallback = function (c) {
                for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
                'function' == typeof c
                  ? a.ta.push([c, b])
                  : a.debugTracking &&
                    a.D('DEBUG: Non function type passed to registerPreTrackCallback');
              };
              a.Wa = function (c) {
                a.oa(a.ta, c);
              };
              a.ra = [];
              a.registerPostTrackCallback = function (c) {
                for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
                'function' == typeof c
                  ? a.ra.push([c, b])
                  : a.debugTracking &&
                    a.D('DEBUG: Non function type passed to registerPostTrackCallback');
              };
              a.Va = function (c) {
                a.oa(a.ra, c);
              };
              a.oa = function (c, b) {
                if ('object' == typeof c)
                  for (var d = 0; d < c.length; d++) {
                    var f = c[d][0],
                      e = c[d][1].slice();
                    e.unshift(b);
                    if ('function' == typeof f)
                      try {
                        f.apply(null, e);
                      } catch (g) {
                        a.debugTracking && a.D(g.message);
                      }
                  }
              };
              a.tl = a.trackLink = function (c, b, d, f, e) {
                a.linkObject = c;
                a.linkType = b;
                a.linkName = d;
                e && ((a.k = c), (a.v = e));
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
              a.cb = function (c, b) {
                var d =
                  a.Xa() +
                  '/' +
                  c +
                  '?AQB=1&ndh=1&pf=1&' +
                  (a.pa() ? 'callback=s_c_il[' + a._in + '].doPostbacks&et=1&' : '') +
                  b +
                  '&AQE=1';
                a.Wa(d);
                a.Ua(d);
                a.T();
              };
              a.Xa = function () {
                var c = a.Ya();
                return (
                  'http' +
                  (a.ssl ? 's' : '') +
                  '://' +
                  c +
                  '/b/ss/' +
                  a.account +
                  '/' +
                  (a.mobile ? '5.' : '') +
                  (a.pa() ? '10' : '1') +
                  '/JS-' +
                  a.version +
                  (a.Hb ? 'T' : '') +
                  (a.tagContainerMarker ? '-' + a.tagContainerMarker : '')
                );
              };
              a.pa = function () {
                return (
                  (a.AudienceManagement && a.AudienceManagement.isReady()) || 0 != a.usePostbacks
                );
              };
              a.Ya = function () {
                var c = a.dc,
                  b = a.trackingServer;
                b
                  ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure)
                  : ((c = c ? ('' + c).toLowerCase() : 'd1'),
                    'd1' == c ? (c = '112') : 'd2' == c && (c = '122'),
                    (b = a.$a() + '.' + c + '.2o7.net'));
                return b;
              };
              a.$a = function () {
                var c = a.visitorNamespace;
                c || ((c = a.account.split(',')[0]), (c = c.replace(/[^0-9a-z]/gi, '')));
                return c;
              };
              a.Pa = /{(%?)(.*?)(%?)}/;
              a.Lb = RegExp(a.Pa.source, 'g');
              a.rb = function (c) {
                if ('object' == typeof c.dests)
                  for (var b = 0; b < c.dests.length; ++b) {
                    var d = c.dests[b];
                    if ('string' == typeof d.c && 'aa.' == d.id.substr(0, 3))
                      for (var f = d.c.match(a.Lb), e = 0; e < f.length; ++e) {
                        var g = f[e],
                          h = g.match(a.Pa),
                          k = '';
                        '%' == h[1] && 'timezone_offset' == h[2]
                          ? (k = new Date().getTimezoneOffset())
                          : '%' == h[1] && 'timestampz' == h[2] && (k = a.vb());
                        d.c = d.c.replace(g, a.escape(k));
                      }
                  }
              };
              a.vb = function () {
                var c = new Date(),
                  b = new Date(60000 * Math.abs(c.getTimezoneOffset()));
                return (
                  a.j(4, c.getFullYear()) +
                  '-' +
                  a.j(2, c.getMonth() + 1) +
                  '-' +
                  a.j(2, c.getDate()) +
                  'T' +
                  a.j(2, c.getHours()) +
                  ':' +
                  a.j(2, c.getMinutes()) +
                  ':' +
                  a.j(2, c.getSeconds()) +
                  (0 < c.getTimezoneOffset() ? '-' : '+') +
                  a.j(2, b.getUTCHours()) +
                  ':' +
                  a.j(2, b.getUTCMinutes())
                );
              };
              a.j = function (a, b) {
                return (Array(a + 1).join(0) + b).slice(-a);
              };
              a.la = {};
              a.doPostbacks = function (c) {
                if ('object' == typeof c)
                  if (
                    (a.rb(c),
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
                        ((a.la[d.id] = new Image()),
                        (a.la[d.id].alt = ''),
                        (a.la[d.id].src = d.c));
                    }
              };
              a.Ua = function (c) {
                a.i || a.zb();
                a.i.push(c);
                a.ea = a.B();
                a.Na();
              };
              a.zb = function () {
                a.i = a.Cb();
                a.i || (a.i = []);
              };
              a.Cb = function () {
                var c, b;
                if (a.ka()) {
                  try {
                    (b = k.localStorage.getItem(a.ia())) && (c = k.JSON.parse(b));
                  } catch (d) {}
                  return c;
                }
              };
              a.ka = function () {
                var c = !0;
                (a.trackOffline && a.offlineFilename && k.localStorage && k.JSON) || (c = !1);
                return c;
              };
              a.Da = function () {
                var c = 0;
                a.i && (c = a.i.length);
                a.p && c++;
                return c;
              };
              a.T = function () {
                if (a.p && (a.A && a.A.complete && a.A.F && a.A.na(), a.p)) return;
                a.Ea = p;
                if (a.ja) a.ea > a.O && a.La(a.i), a.ma(500);
                else {
                  var c = a.lb();
                  if (0 < c) a.ma(c);
                  else if ((c = a.Aa())) (a.p = 1), a.Db(c), a.Gb(c);
                }
              };
              a.ma = function (c) {
                a.Ea || (c || (c = 0), (a.Ea = setTimeout(a.T, c)));
              };
              a.lb = function () {
                var c;
                if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
                c = a.B() - a.Ja;
                return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
              };
              a.Aa = function () {
                if (0 < a.i.length) return a.i.shift();
              };
              a.Db = function (c) {
                if (a.debugTracking) {
                  var b = 'AppMeasurement Debug: ' + c;
                  c = c.split('&');
                  var d;
                  for (d = 0; d < c.length; d++) b += '\n\t' + a.unescape(c[d]);
                  a.D(b);
                }
              };
              a.bb = function () {
                return a.marketingCloudVisitorID || a.analyticsVisitorID;
              };
              a.V = !1;
              var t;
              try {
                t = JSON.parse('{"x":"y"}');
              } catch (w) {
                t = null;
              }
              t && 'y' == t.x
                ? ((a.V = !0),
                  (a.U = function (a) {
                    return JSON.parse(a);
                  }))
                : k.$ && k.$.parseJSON
                ? ((a.U = function (a) {
                    return k.$.parseJSON(a);
                  }),
                  (a.V = !0))
                : (a.U = function () {
                    return null;
                  });
              a.Gb = function (c) {
                var b, d, f;
                a.bb() &&
                  2047 < c.length &&
                  ('undefined' != typeof XMLHttpRequest &&
                    ((b = new XMLHttpRequest()), 'withCredentials' in b ? (d = 1) : (b = 0)),
                  b ||
                    'undefined' == typeof XDomainRequest ||
                    ((b = new XDomainRequest()), (d = 2)),
                  b &&
                    ((a.AudienceManagement && a.AudienceManagement.isReady()) ||
                      0 != a.usePostbacks) &&
                    (a.V ? (b.va = !0) : (b = 0)));
                !b && a.Oa && (c = c.substring(0, 2047));
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
                    'undefined' === typeof k.InstallTrigger ||
                    (b.abort = function () {
                      b.src = p;
                    }));
                b.Ka = Date.now();
                b.xa = function () {
                  try {
                    b.F && (clearTimeout(b.F), (b.F = 0));
                  } catch (a) {}
                };
                b.onload = b.na = function () {
                  b.Ka && (a.fa = Date.now() - b.Ka);
                  a.Va(c);
                  b.xa();
                  a.pb();
                  a.Z();
                  a.p = 0;
                  a.T();
                  if (b.va) {
                    b.va = !1;
                    try {
                      a.doPostbacks(a.U(b.responseText));
                    } catch (d) {}
                  }
                };
                b.onabort = b.onerror = b.Ba = function () {
                  b.xa();
                  (a.trackOffline || a.ja) && a.p && a.i.unshift(a.ob);
                  a.p = 0;
                  a.ea > a.O && a.La(a.i);
                  a.Z();
                  a.ma(500);
                };
                b.onreadystatechange = function () {
                  4 == b.readyState && (200 == b.status ? b.na() : b.Ba());
                };
                a.Ja = a.B();
                if (1 == d || 2 == d) {
                  var e = c.indexOf('?');
                  f = c.substring(0, e);
                  e = c.substring(e + 1);
                  e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, '');
                  1 == d
                    ? (b.open('POST', f, !0), b.send(e))
                    : 2 == d && (b.open('POST', f), b.send(e));
                } else if (((b.src = c), 3 == d)) {
                  if (a.Ha)
                    try {
                      f.removeChild(a.Ha);
                    } catch (g) {}
                  f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                  a.Ha = a.A;
                }
                b.F = setTimeout(function () {
                  b.F && (b.complete ? b.na() : (a.trackOffline && b.abort && b.abort(), b.Ba()));
                }, 5000);
                a.ob = c;
                a.A = k['s_i_' + a.replace(a.account, ',', '_')] = b;
                if ((a.useForcedLinkTracking && a.K) || a.v)
                  a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
                    (a.aa = setTimeout(a.Z, a.forcedLinkTrackingTimeout));
              };
              a.pb = function () {
                if (a.ka() && !(a.Ia > a.O))
                  try {
                    k.localStorage.removeItem(a.ia()), (a.Ia = a.B());
                  } catch (c) {}
              };
              a.La = function (c) {
                if (a.ka()) {
                  a.Na();
                  try {
                    k.localStorage.setItem(a.ia(), k.JSON.stringify(c)), (a.O = a.B());
                  } catch (b) {}
                }
              };
              a.Na = function () {
                if (a.trackOffline) {
                  if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
                  for (; a.i.length > a.offlineLimit; ) a.Aa();
                }
              };
              a.forceOffline = function () {
                a.ja = !0;
              };
              a.forceOnline = function () {
                a.ja = !1;
              };
              a.ia = function () {
                return a.offlineFilename + '-' + a.visitorNamespace + a.account;
              };
              a.B = function () {
                return new Date().getTime();
              };
              a.Fa = function (a) {
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
                a.Hb = c;
                for (b = 0; b < a._il.length; b++)
                  if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
                    a.R(d);
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
                  b || (b = a.pageURL ? a.pageURL : k.location);
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
              a.G = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(
                ' '
              );
              a.g = a.G.concat(
                'purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(
                  ' '
                )
              );
              a.ga = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
                ' '
              );
              a.P = a.ga.slice(0);
              a.ua = 'account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement'.split(
                ' '
              );
              for (m = 0; 250 >= m; m++)
                76 > m && (a.g.push('prop' + m), a.P.push('prop' + m)),
                  a.g.push('eVar' + m),
                  a.P.push('eVar' + m),
                  6 > m && a.g.push('hier' + m),
                  4 > m && a.g.push('list' + m);
              m = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID'.split(
                ' '
              );
              a.g = a.g.concat(m);
              a.G = a.G.concat(m);
              a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf('https');
              a.charSet = 'UTF-8';
              a.contextData = {};
              a.offlineThrottleDelay = 0;
              a.offlineFilename = 'AppMeasurement.offline';
              a.Ja = 0;
              a.ea = 0;
              a.O = 0;
              a.Ia = 0;
              a.linkDownloadFileTypes =
                'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
              a.w = k;
              a.d = k.document;
              try {
                if (((a.Oa = !1), navigator)) {
                  var v = navigator.userAgent;
                  if (
                    'Microsoft Internet Explorer' == navigator.appName ||
                    0 <= v.indexOf('MSIE ') ||
                    (0 <= v.indexOf('Trident/') && 0 <= v.indexOf('Windows NT 6'))
                  )
                    a.Oa = !0;
                }
              } catch (x) {}
              a.Z = function () {
                a.aa && (k.clearTimeout(a.aa), (a.aa = p));
                a.k && a.K && a.k.dispatchEvent(a.K);
                a.v &&
                  ('function' == typeof a.v
                    ? a.v()
                    : a.k && a.k.href && (a.d.location = a.k.href));
                a.k = a.K = a.v = 0;
              };
              a.Ma = function () {
                const $___old_aeab0c7dbe8fa98a = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_aeab0c7dbe8fa98a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_47c01efa79e9f191.userAgent
                    ));
                  return function () {
                    a.b = a.d.body;
                    a.b
                      ? ((a.u = function (c) {
                          var b, d, f, e, g;
                          if (
                            !(
                              (a.d && a.d.getElementById('cppXYctnr')) ||
                              (c && c['s_fe_' + a._in])
                            )
                          ) {
                            if (a.wa)
                              if (a.useForcedLinkTracking)
                                a.b.removeEventListener('click', a.u, !1);
                              else {
                                a.b.removeEventListener('click', a.u, !0);
                                a.wa = a.useForcedLinkTracking = 0;
                                return;
                              }
                            else a.useForcedLinkTracking = 0;
                            a.clickObject = c.srcElement ? c.srcElement : c.target;
                            try {
                              if (
                                !a.clickObject ||
                                (a.N && a.N == a.clickObject) ||
                                !(
                                  a.clickObject.tagName ||
                                  a.clickObject.parentElement ||
                                  a.clickObject.parentNode
                                )
                              )
                                a.clickObject = 0;
                              else {
                                var h = (a.N = a.clickObject);
                                a.da && (clearTimeout(a.da), (a.da = 0));
                                a.da = setTimeout(function () {
                                  a.N == h && (a.N = 0);
                                }, 10000);
                                f = a.Da();
                                a.track();
                                if (f < a.Da() && a.useForcedLinkTracking && c.target) {
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
                                    a.Fa(g) || (g = 0),
                                    (d = e.target),
                                    c.target.dispatchEvent &&
                                      g &&
                                      (!d ||
                                        '_self' == d ||
                                        '_top' == d ||
                                        '_parent' == d ||
                                        (k.name && d == k.name)))
                                  ) {
                                    try {
                                      b = a.d.createEvent('MouseEvents');
                                    } catch (l) {
                                      b = new k.MouseEvent();
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
                                        (a.k = c.target),
                                        (a.K = b));
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
                          ? a.b.attachEvent('onclick', a.u)
                          : a.b &&
                            a.b.addEventListener &&
                            (navigator &&
                              ((0 <= navigator.userAgent.indexOf('WebKit') && a.d.createEvent) ||
                                (0 <= navigator.userAgent.indexOf('Firefox/2') && k.MouseEvent)) &&
                              ((a.wa = 1),
                              (a.useForcedLinkTracking = 1),
                              a.b.addEventListener('click', a.u, !0)),
                            a.b.addEventListener('click', a.u, !1)))
                      : setTimeout(a.Ma, 30);
                  }.apply(this, arguments);
                } finally {
                  if ($___old_aeab0c7dbe8fa98a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_aeab0c7dbe8fa98a
                    ));
                }
              };
              a.qb();
              a.Qb ||
                (r
                  ? a.setAccount(r)
                  : a.D('Error, missing Report Suite ID in AppMeasurement initialization'),
                a.Ma(),
                a.loadModule('ActivityMap'));
            }.apply(this, arguments);
          } finally {
            if ($___old_47f69b662b09f324)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_47f69b662b09f324
              ));
          }
        };
        function s_gi (r) {
          var a,
            k = window.s_c_il,
            p,
            n,
            m = r.split(','),
            s,
            u,
            t = 0;
          if (k)
            for (p = 0; !t && p < k.length; ) {
              a = k[p];
              if ('s_c' == a._c && (a.account || a.oun))
                if (a.account && a.account == r) t = 1;
                else
                  for (
                    n = a.account ? a.account : a.oun,
                      n = a.allAccounts ? a.allAccounts : n.split(','),
                      s = 0;
                    s < m.length;
                    s++
                  )
                    for (u = 0; u < n.length; u++) m[s] == n[u] && (t = 1);
              p++;
            }
          t ? a.setAccount && a.setAccount(r) : (a = new AppMeasurement(r));
          return a;
        }
        AppMeasurement.getInstance = s_gi;
        window.s_objectID || (window.s_objectID = 0);
        function s_pgicq () {
          var r = window,
            a = r.s_giq,
            k,
            p,
            n;
          if (a)
            for (k = 0; k < a.length; k++)
              (p = a[k]),
                (n = s_gi(p.oun)),
                n.setAccount(p.un),
                n.setTagContainer(p.tagContainerName);
          r.s_giq = 0;
        }
        s_pgicq();
        setTimeout(Bootstrapper.trackerFramework.checkManualLaunch, 200);
      },
      3377614,
      [3246056],
      452184,
      [501368]
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
      },
      1790319,
      [3279497],
      28273,
      [451841]
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (typeof $nav === 'function')
          $nav('body').on(
            {
              click: function () {
                try {
                  var $this = $nav(this);
                  var dataTmsId = $this.closest('[data-tmsId]').data('tmsid') || '';
                  if (typeof s === 'object') {
                    s.products =
                      ';' + dataTmsId + ';;;event76=1;evar47=Fid.com web>portfolio>atbricklet';
                    s.events = 'event76';
                    var oldTrackVars = s.linkTrackVars;
                    s.linkTrackVars = 'events,products,prop70';
                    s.contextData['lcb'] = dataTmsId;
                    var clvars =
                      'contextData.lcb,contextData.VSCHANNEL,contextData.SEC,contextData.SEC1,contextData.SEC2,contextData.VSPGVER,contextData.VSPURP,contextData.VSPROD,contextData.VSTOPICS,contextData.VSHEADLINE,contextData.NAVTYPE,contextData.VSDATE,contextData.VSAUTHOR,contextData.VSSOURCE,contextData.VSPAGE,contextData.VSSEARCHPHRASE,contextData.VSINDEX,contextData.subscription,contextData.p1,contextData.p2,contextData.p3,contextData.p4,contextData.p5,contextData.p6,contextData.p8,contextData.P0,contextData.popupSymbol,contextData.popupSecurity,eVar16,contextData.location';
                    s.linkTrackVars += ',' + clvars;
                    s.linkTrackEvents = 'event76';
                    s.tl('true', 'o', 'Target Click');
                    s.events = '';
                    s.linkTrackVars = oldTrackVars;
                    s.products = '';
                  }
                } catch (er) {
                  Bootstrapper.reportException(er);
                }
              },
            },
            '#onsitemessage [data-tmsId] a'
          );
      },
      2930049,
      296833
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper._createImgDARTTag = function (type, cat) {
          setTimeout(function () {
            window.gtag('event', 'conversion', {
              allow_custom_scripts: true,
              send_to: 'DC-2579983/' + type + '/' + cat + '+standard',
            });
          }, 3000);
        };
      },
      3354488,
      657028
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var adwordsAOCompleteMap = {
          '529Custodial': 'tB3xCPaviAgQkqS59gM',
          '529Individual': 'Q-5iCO6wiAgQkqS59gM',
          bundlebrokerageInd: 'k8qGCNaziAgQkqS59gM',
          bundlebrokerageJoint: 'ajQVCM60iAgQkqS59gM',
          custodial: 'oaVzCLa3iAgQkqS59gM',
          individual: 'w_pVCOaxiAgQkqS59gM',
          joint: 'v0NGCN6yiAgQkqS59gM',
          mySCAIndividual: 'g_N1CMa1iAgQkqS59gM',
          mySCAJoint: 'fmx7CL62iAgQkqS59gM',
          rolloverIRA: 'NlMNCK64iAgQkqS59gM',
          rothIRA: 'OY8HCKa5iAgQkqS59gM',
          sepIRA: 'NNVHCJ66iAgQkqS59gM',
          tradIRA: 'JU_hCJa7iAgQkqS59gM',
        };
        if (typeof measurementInfo === 'object' && measurementInfo['accountStart']) {
          var accountType = measurementInfo['accountStart'];
          if (accountType)
            try {
              _dmt.Vendor.GoogleAnalytics.fireAnalyticsEvent('Step', 'AO Start', accountType);
            } catch (e) {}
        }
        if (typeof measurementInfo === 'object' && measurementInfo['accountComplete']) {
          var accountType = measurementInfo['accountComplete'];
          if (accountType) {
            try {
              _dmt.Vendor.GoogleAnalytics.fireAnalyticsEvent('Step', 'AO Complete', accountType);
            } catch (e) {}
            var token = adwordsAOCompleteMap[accountType];
            if (token)
              try {
                _dmt.Vendor.GoogleAnalytics.fireConversionEvent(token);
              } catch (e) {}
          }
        }
      },
      2929518,
      599786
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.trackerFramework.initCustomDataLayer.add(function () {
          var mapLegacyToTMS = {
            VSSAVED: 'accountSaveInd',
            vssaved: 'accountSaveInd',
            accountStart: 'accountStart',
            accountComplete: 'accountComplete',
            VSREGTYPE: 'accountType',
            appVersion: 'appVersion',
            VSAUTHOR: 'author',
            VSCHANNEL: 'channel',
            VSCUSIP: 'cusip',
            VSDATE: 'date',
            VSTOPICS: 'editorialTopics',
            VSDESC2: 'flowType',
            formStart: 'formstart',
            formComplete: 'formcomplete',
            guidanceStart: 'guidancestart',
            guidanceComplete: 'guidancecomplete',
            VSHEADLINE: 'headline',
            VSCOID: 'ipoCompId',
            VSBRICKLET: 'legacyBricklet',
            location: 'location',
            VSORIGIN: 'origin',
            VSPGID: 'pageID',
            vspage: 'pageName',
            VSPAGE: 'pageName',
            VSPURP: 'pagePurpose',
            VSPGTEMP: 'pageTemp',
            VSPGVER: 'pageVersion',
            VSPROD: 'product',
            VSBIZEVENT: 'pznFlag',
            VSSECSUB: 'secSub',
            VSSOURCE: 'source',
            subscription: 'subscription',
          };
          var newData = {};
          if (typeof window.vs === 'object')
            for (var key in window.vs)
              if (typeof window.vs[key] === 'string')
                if (mapLegacyToTMS[key])
                  newData[mapLegacyToTMS[key]] = {
                    name: mapLegacyToTMS[key],
                    get: "'" + window.vs[key] + "'",
                  };
                else newData[key] = { name: key, get: "'" + window.vs[key] + "'" };
          if (typeof window.ms === 'object')
            for (var key in window.ms)
              if (typeof window.ms[key] === 'string')
                if (mapLegacyToTMS[key])
                  newData[mapLegacyToTMS[key]] = {
                    name: mapLegacyToTMS[key],
                    get: "'" + window.ms[key].replace(/[^a-zA-Z0-9 _\-\.:;&|/]/g, '') + "'",
                  };
                else
                  newData[key] = {
                    name: key,
                    get: "'" + window.ms[key].replace(/[^a-zA-Z0-9 _\-\.:;&|/]/g, '') + "'",
                  };
          if (typeof window.measurementInfo === 'object')
            for (var key in window.measurementInfo)
              if (typeof window.measurementInfo[key] === 'string')
                if (mapLegacyToTMS[key])
                  newData[mapLegacyToTMS[key]] = {
                    name: mapLegacyToTMS[key],
                    get:
                      "'" +
                      window.measurementInfo[key].replace(/[^a-zA-Z0-9 _\-\.:;&|/]/g, '') +
                      "'",
                  };
                else
                  newData[key] = {
                    name: key,
                    get:
                      "'" +
                      window.measurementInfo[key].replace(/[^a-zA-Z0-9 _\-\.:;&|/]/g, '') +
                      "'",
                  };
          Bootstrapper.dataManager.push({
            name: 'originalValues',
            id: 'originalValues',
            data: newData,
          });
        });
      },
      432010,
      134434
    );
  })();
}
