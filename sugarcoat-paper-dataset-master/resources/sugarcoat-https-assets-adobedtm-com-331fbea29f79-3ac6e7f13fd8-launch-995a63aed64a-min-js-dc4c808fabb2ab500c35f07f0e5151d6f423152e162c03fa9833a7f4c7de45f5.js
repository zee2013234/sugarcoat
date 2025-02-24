var _satellite;
{
  const $___stub_8938c767ccc6c19c = {};
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
  })($___stub_8938c767ccc6c19c);
  const $___stub_1c5cc68fe6204532 = {};
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
  })($___stub_1c5cc68fe6204532);
  const $___stub_6a23a5fb7b102c19 = {};
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
  })($___stub_6a23a5fb7b102c19);
  const $___stub_8c64b857aeb74429 = {};
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
  })($___stub_8c64b857aeb74429);
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-11-12T21:46:12Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          'transaction | flowType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.attributes.flowType', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | isRebindConfirm': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isRebindConfirm',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | isPasswordRecoveryConfirm': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isPasswordRecoveryConfirm',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'transaction | billPayAmount': {
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.billPay.billPayAmount',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | designType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.designType',
                    type: 'string',
                    examples: ['mobile', 'desktop', 'responsive'],
                    description: 'mobile vs. desktop/tablet vs. responsive design.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | authenticationStatus': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '|',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.authenticationType',
                    type: 'string',
                    description: 'Populate authentication type on every page of the website.',
                  },
                  selectedSchema: 'Core',
                },
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.recognizationType',
                    type: 'string',
                    description: 'Populate recognization type on every page of the website.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'code | impressionComponentArray': {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                var t = '',
                  n = adobe.consulting.util.getObjVal(e, 'detail.component.0.componentInfo');
                return (
                  n &&
                    (t +=
                      '' == t
                        ? (digitalData.page.category.primaryCategory
                            ? digitalData.page.category.primaryCategory
                            : '') +
                          (digitalData.page.category.subCategory1
                            ? '|' + digitalData.page.category.subCategory1
                            : '') +
                          '>' +
                          (n.componentName ? n.componentName : '') +
                          (n.componentID ? '|' + n.componentID : '') +
                          (n.instanceID ? '|' + n.instanceID : '') +
                          (n.description ? '|' + n.description : '')
                        : ',' +
                          (digitalData.page.category.primaryCategory
                            ? digitalData.page.category.primaryCategory
                            : '') +
                          (digitalData.page.category.subCategory1
                            ? '|' + digitalData.page.category.subCategory1
                            : '') +
                          '>' +
                          (n.componentName ? n.componentName : '') +
                          (n.componentID ? '|' + n.componentID : '') +
                          '|' +
                          (n.instanceID ? '|' + n.instanceID : '') +
                          (n.description ? '|' + n.description : '')),
                  t
                );
              },
            },
          },
          'user | isUIDLookupCompleted': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isUIDLookupCompleted',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'transaction | isUIDStart': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.flowStage',
                    type: 'string',
                    description: 'The current stage of the flow.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | isUsernameCreated': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isUsernameCreated',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'utility | isPrivacyPage': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return -1 < location.href.indexOf('/privacy/');
              },
            },
          },
          'user | UIDVerificationMethod': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.UIDVerificationMethod',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'siteInfo | siteVersion': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'siteInfo.siteVersion', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | businessSiteType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '|',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.businessType',
                    type: 'string',
                    examples: ['resi', 'busn_ent', 'busn_smb', 'mobile'],
                    description: 'Comcast top level business.',
                  },
                  selectedSchema: 'Core',
                },
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.siteType',
                    type: 'string',
                    examples: ['sales', 'selfservice'],
                    description:
                      'On load of every page populate site prefix - top level section name, business unit.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'page | pageName': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.pageInfo.pageName',
                    type: 'string',
                    description:
                      'Combined by the implementation from the following properties and pipe delimited [page.category.businessType, page.category.siteType, page.category.primaryCategory, page.category.subCategory1, page.pageInfo.screenName]. Do NOT set this.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | imageVerificationAttempts': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.imageVerificationAttempts',
                    type: 'integer',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'product | offerSystem': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: { product: { item: 'last', action: 'pluck' } },
                  selectedField: { name: 'product[n].productInfo.system', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | codebaseName': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.codebase.name',
                    type: 'string',
                    examples: ['h&s resi', 'modesto', 'df learn', 'my account', 'local store'],
                    description: 'The name of the codebase.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | preActivationState': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.preActivationState',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | accountNumberVerificationType': {
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.accountNumberVerificationType',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'transaction | buyflowStep': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.attributes.buyflowStep', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | subCategory1': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.subCategory1',
                    type: 'string',
                    examples: ['buyflow', 'learn', 'billing', 'my plan'],
                    description: 'This is used to track sub section on every page.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'page | affiliateChannelName': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '|',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.affiliate.name',
                    type: 'string',
                    examples: ['comcast', 'best buy', 'verizon wireless'],
                    description: 'Affiliate name data for omni-channel',
                  },
                  selectedSchema: 'Core',
                },
                {
                  options: {},
                  selectedField: {
                    name: 'page.affiliate.channel',
                    type: 'string',
                    examples: ['web', 'x1', 'direct'],
                    description: 'Affiliate channel data for omni-channel.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'event | pageName': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                return adobe.consulting.util.getObjVal(e, 'detail.eventPage');
              },
            },
          },
          'event | eventAction': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                return adobe.consulting.util.getObjVal(e, 'detail.eventAction');
              },
            },
          },
          'user | type': {
            defaultValue: '',
            forceLowerCase: !0,
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: { name: 'user[n].profile[n].profileInfo.type', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'utility | targetMasterSwitch': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/constant.js',
            settings: { value: 'true' },
          },
          'user | customerGUID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.userGUID',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | customerType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.customerType',
                    type: 'string',
                    description:
                      'Captures the Customer Type (new/existing). This is exactly experience type.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'code | impressionComponent': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = '';
                if (digitalData && digitalData.component)
                  for (i = 0; i < digitalData.component.length; i++)
                    digitalData.component[i].componentName &&
                    digitalData.component[i].placementName
                      ? (e +=
                          '' == e
                            ? digitalData.component[i].placementName +
                              '>' +
                              digitalData.component[i].componentName
                            : ',' +
                              digitalData.component[i].placementName +
                              '>' +
                              digitalData.component[i].componentName)
                      : digitalData.component[i].componentName &&
                        !digitalData.component[i].placementName
                      ? (e +=
                          '' == e
                            ? digitalData.component[i].componentName
                            : ',' + digitalData.component[i].componentName)
                      : !digitalData.component[i].componentName &&
                        digitalData.component[i].placementName
                      ? (e +=
                          '' == e
                            ? digitalData.component[i].placementName
                            : ',' + digitalData.component[i].placementName)
                      : digitalData.component[i].componentInfo &&
                        (e +=
                          '' == e
                            ? (digitalData.page.category.primaryCategory
                                ? digitalData.page.category.primaryCategory
                                : '') +
                              (digitalData.page.category.subCategory1
                                ? '|' + digitalData.page.category.subCategory1
                                : '') +
                              '>' +
                              (digitalData.component[i].componentInfo.componentName
                                ? digitalData.component[i].componentInfo.componentName
                                : '') +
                              (digitalData.component[i].componentInfo.componentID
                                ? '|' + digitalData.component[i].componentInfo.componentID
                                : '') +
                              (digitalData.component[i].componentInfo.instanceID
                                ? '|' + digitalData.component[i].componentInfo.instanceID
                                : '') +
                              (digitalData.component[i].componentInfo.description
                                ? '|' + digitalData.component[i].componentInfo.description
                                : '')
                            : ',' +
                              (digitalData.page.category.primaryCategory
                                ? digitalData.page.category.primaryCategory
                                : '') +
                              (digitalData.page.category.subCategory1
                                ? '|' + digitalData.page.category.subCategory1
                                : '') +
                              '>' +
                              (digitalData.component[i].componentInfo.componentName
                                ? digitalData.component[i].componentInfo.componentName
                                : '') +
                              (digitalData.component[i].componentInfo.componentID
                                ? '|' + digitalData.component[i].componentInfo.componentID
                                : '') +
                              '|' +
                              (digitalData.component[i].componentInfo.instanceID
                                ? '|' + digitalData.component[i].componentInfo.instanceID
                                : '') +
                              (digitalData.component[i].componentInfo.description
                                ? '|' + digitalData.component[i].componentInfo.description
                                : ''));
                return e;
              },
            },
          },
          'code | isUIDStart': {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = '';
                return (
                  adobe.consulting.util.getObjVal(
                    digitalData,
                    'user.0.profile.0.attributes.isUIDStart'
                  ) ||
                  adobe.consulting.util.getObjVal(
                    digitalData,
                    'users.0.profile.0.attributes.isUIDStart'
                  )
                    ? (e =
                        adobe.consulting.util.getObjVal(
                          digitalData,
                          'user.0.profile.0.attributes.isUIDStart'
                        ) ||
                        adobe.consulting.util.getObjVal(
                          digitalData,
                          'users.0.profile.0.attributes.isUIDStart'
                        ))
                    : 'start' ==
                        adobe.consulting.util.getObjVal(
                          digitalData,
                          'transaction.attributes.flowStage'
                        ) &&
                      'create-uid' ==
                        adobe.consulting.util.getObjVal(
                          digitalData,
                          'page.category.subCategory1'
                        ) &&
                      (e = 'yes'),
                  e
                );
              },
            },
          },
          'code | siteVersion': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if ('undefined' == typeof digitalData) return '';
                var e = adobe.consulting.util
                  .getObjVal(digitalData, 'siteInfo.siteVersion')
                  .toString();
                return (
                  _satellite.getVar('page | designType') &&
                    ((e = _satellite.getVar('page | designType')),
                    _satellite.getVar('page | codebaseName') &&
                      ((e = e + '|' + _satellite.getVar('page | codebaseName')),
                      _satellite.getVar('page | releaseVersion') &&
                        (e = e + '|' + _satellite.getVar('page | releaseVersion')))),
                  e
                );
              },
            },
          },
          'user | isPersonalEmailVerified': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isPersonalEmailVerify',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | marketID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: { user: { item: 'first', action: 'pluck' } },
                  selectedField: { name: 'user[n].segment.marketID', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'transaction | consumerType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.attributes.consumerType', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'siteInfo | server': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'siteInfo.server',
                    type: 'string',
                    examples: ['PATAPLL-J72NXW1'],
                    description: 'The server where the page is hosted.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'transaction | fulfillmentType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.fulfillmentType',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | isVerifyMethod': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isVerifyMethod',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'siteInfo | visitorID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'siteInfo.visitorID',
                    type: 'string',
                    examples: ['1497c713-186f-4015-b7ce-5014f788d064'],
                    description: 'The visitor session ID of that session.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'transaction | hasEcoBillSelected': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.hasEcoBillSelected',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'utility | isPrivacyPage copy': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return -1 < location.href.indexOf('/privacy/');
              },
            },
          },
          'transaction | paymentType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.billPay.paymentType',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | primaryCategory': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.primaryCategory',
                    type: 'string',
                    examples: ['shop', 'help and support', 'my account', 'idm'],
                    description:
                      'This is used to track site section on every page. Every section should have an unique sitesection.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | isReferAFriend': {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e;
                return (
                  digitalData.users &&
                  digitalData.users[0].attributes &&
                  digitalData.users[0].attributes.isRaf
                    ? (e = digitalData.users[0].attributes.isRaf)
                    : digitalData.user &&
                      digitalData.user[0].attributes &&
                      digitalData.user[0].attributes.isRaf &&
                      (e = digitalData.user[0].attributes.isRaf),
                  digitalData.users &&
                  digitalData.users[0].attributes &&
                  digitalData.users[0].attributes.israf
                    ? (e = digitalData.users[0].attributes.israf)
                    : digitalData.user &&
                      digitalData.user[0].attributes &&
                      digitalData.user[0].attributes.israf &&
                      (e = digitalData.user[0].attributes.israf),
                  digitalData.users &&
                  digitalData.users[0].attributes &&
                  digitalData.user[0].attributes.isRAF
                    ? (e = digitalData.users[0].attributes.isRAF)
                    : digitalData.user &&
                      digitalData.user[0].attributes &&
                      digitalData.user[0].attributes.isRAF &&
                      (e = digitalData.user[0].attributes.isRAF),
                  e
                );
              },
            },
          },
          'page | language': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.pageInfo.language',
                    type: 'string',
                    description:
                      'Language of the page. Values should be in ISO Language Code, either English (en) or Spanish (es).',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | authGUID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.authGUID',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'event | containerList': {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                var t = adobe.consulting.util.getObjVal(e, 'detail.container'),
                  n = '';
                for (i = t.length - 1; 0 <= i; i--) n += '' == n ? t[i] : '|' + t[i];
                return n;
              },
            },
          },
          'transaction | buyflowPaymentMethod': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.buyflowPaymentMethod',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'product | productIDs': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: { product: { action: 'join', separator: ',' } },
                  selectedField: {
                    name: 'product[n].productInfo.productID',
                    type: 'string',
                    description: 'Unique Product/Offer Identifier',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'page | performanceTime': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'performance.pageView.ms',
                    type: 'number',
                    description:
                      "The time in milliseconds for the current page view. This is the difference between 'end' and 'start'.",
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'siteInfo | sessionID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'siteInfo.sessionID',
                    type: 'string',
                    examples: ['1497c713-186f-4015-b7ce-5014f788d064'],
                    description: 'The session ID of that session.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | recoveryOptions': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.recoveryOptions',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | userNameType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.userNameType',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'transaction | buyflowType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.attributes.buyflowType', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | releaseVersion': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.codebase.releaseVersion',
                    type: 'string',
                    examples: ['11_02_16', 'sprint 702', '3.4.3'],
                    description: 'Release label for the version of the codebase.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | isPasswordResetConfirm': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isPasswordResetConfirm',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'event | onsiteSearchTerm': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                return adobe.consulting.util.getObjVal(e, 'detail.page.pageInfo.onsiteSearchTerm');
              },
            },
          },
          'siteInfo | CTPSessionID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'siteInfo.ctpSessionID', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'transaction | funnelType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.attributes.funnelType', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'product | productIDbuyFlow': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = '';
                if (digitalData && digitalData.product)
                  for (i = 0; i < digitalData.product.length; i++) {
                    var t = digitalData.product[i].productInfo;
                    t &&
                      t.productID &&
                      (e +=
                        '' == e
                          ? ';' + t.productID + ';' + t.quantity + ';' + t.price
                          : ',;' + t.productID + ';' + t.quantity + ';' + t.price);
                  }
                return e;
              },
            },
          },
          'transaction | transactionID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.transactionID', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'product | totalPrice': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = 0,
                  t = adobe.consulting.util.getObjVal(digitalData, 'product');
                if (Array.isArray(t))
                  for (i = 0; i < t.length; i++)
                    e += parseFloat(adobe.consulting.util.getObjVal(t[i], 'productInfo.price'));
                return e;
              },
            },
          },
          'user | uidCreationType': {
            defaultValue: '',
            forceLowerCase: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e;
                return (
                  adobe.consulting.util.getObjVal(
                    digitalData,
                    'user.0.profile.0.attributes.uidCreationType'
                  )
                    ? (e = adobe.consulting.util.getObjVal(
                        digitalData,
                        'user.0.profile.0.attributes.uidCreationType'
                      ))
                    : adobe.consulting.util.getObjVal(digitalData, 'page.pageInfo.referrerId') &&
                      (e = adobe.consulting.util.getObjVal(
                        digitalData,
                        'page.pageInfo.referrerId'
                      )),
                  e
                );
              },
            },
          },
        },
        extensions: {
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
              'adobe-analytics/src/lib/actions/clearVariables.js': {
                name: 'clear-variables',
                displayName: 'Clear Variables',
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('../sharedModules/getTracker');
                  e.exports = function () {
                    return a().then(
                      function (e) {
                        e.clearVars && (r.logger.info('Clear variables.'), e.clearVars());
                      },
                      function (e) {
                        r.logger.error('Cannot clear variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('../sharedModules/getTracker'),
                    i = function (e) {
                      return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                    },
                    o = function (e) {
                      return i(e) ? e.innerHTML : 'link clicked';
                    },
                    s = function (e, t, n) {
                      if ('page' === t.type) a.logger.info('Firing page view beacon.'), e.t();
                      else {
                        var r = { linkType: t.linkType || 'o', linkName: t.linkName || o(n) };
                        a.logger.info(
                          'Firing link track beacon using the values: ' + JSON.stringify(r) + '.'
                        ),
                          e.tl(i(n) ? n : 'true', r.linkType, r.linkName);
                      }
                    };
                  e.exports = function (t, n) {
                    return r().then(
                      function (e) {
                        s(e, t, n.element);
                      },
                      function (e) {
                        a.logger.error('Cannot send beacon: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/setVariables.js': {
                name: 'set-variables',
                displayName: 'Set Variables',
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('../sharedModules/getTracker'),
                    i = n('../helpers/applyTrackerVariables');
                  e.exports = function (t, n) {
                    return a().then(
                      function (e) {
                        r.logger.info('Set variables on the tracker.'),
                          i(e, t.trackerProperties),
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
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a,
                    i = n('@adobe/reactor-cookie'),
                    o = n('@adobe/reactor-promise'),
                    s = n('@adobe/reactor-window'),
                    l = n('../helpers/settingsHelper'),
                    c = n('../helpers/augmenters'),
                    u = n('../helpers/applyTrackerVariables'),
                    d = n('../helpers/loadLibrary'),
                    f = n('../helpers/generateVersion')(r.buildInfo.turbineBuildDate),
                    p = 'beforeSettings',
                    g = r.getSharedModule('adobe-mcid', 'mcid-instance'),
                    m = function (e) {
                      return !e || 'true' === i.get(e);
                    },
                    h = function (r) {
                      return o
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
                            return o.resolve(t);
                          })
                        )
                        .then(function () {
                          return r;
                        });
                    },
                    y = function (e) {
                      return (
                        g &&
                          (r.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = g)),
                        e
                      );
                    },
                    v = function (e) {
                      return (
                        r.logger.info('Setting version on tracker: "' + f + '".'),
                        'undefined' != typeof e.tagContainerMarker
                          ? (e.tagContainerMarker = f)
                          : 'string' == typeof e.version &&
                            e.version.substring(e.version.length - 5) !== '-' + f &&
                            (e.version += '-' + f),
                        e
                      );
                    },
                    b = function (e, t, n) {
                      return (
                        t.loadPhase === p &&
                          t.source &&
                          (r.logger.info('Calling custom script before settings.'),
                          t.source.call(s, n)),
                        u(n, e || {}),
                        t.loadPhase !== p &&
                          t.source &&
                          (r.logger.info('Calling custom script after settings.'),
                          t.source.call(s, n)),
                        n
                      );
                    },
                    S = function (e, t) {
                      return (
                        l.isAudienceManagementEnabled(e) &&
                          (t.loadModule('AudienceManagement'),
                          r.logger.info('Initializing AudienceManagement module'),
                          t.AudienceManagement.setup(e.moduleProperties.audienceManager.config)),
                        t
                      );
                    },
                    C =
                      ((a = r.getExtensionSettings()),
                      m(a.trackingCookieName)
                        ? d(a)
                            .then(h)
                            .then(y)
                            .then(v)
                            .then(b.bind(null, a.trackerProperties, a.customSetup || {}))
                            .then(S.bind(null, a))
                        : o.reject('EU compliance was not acknowledged by the user.'));
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
              'adobe-analytics/src/lib/helpers/settingsHelper.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('@adobe/reactor-window'),
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
                          e[r.buildInfo.environment] && (t = e[r.buildInfo.environment]),
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
                            a &&
                            a._satellite &&
                            a._satellite.company &&
                            a._satellite.company.orgId &&
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
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var a = n('@adobe/reactor-query-string'),
                    i = n('@adobe/reactor-window'),
                    s = /eVar([0-9]+)/,
                    l = /prop([0-9]+)/,
                    c = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    u = function (e, t, n) {
                      return n.indexOf(e) === t;
                    },
                    d = function (e, t, n) {
                      var r = Object.keys(t).filter(c.test.bind(c));
                      return (
                        n && r.push('events'),
                        (r = r.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && e && u(e, t, r);
                          })
                          .join(',')
                      );
                    },
                    f = function (e, t) {
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
                    p = function (a, e, t) {
                      var i = t.dynamicVariablePrefix || 'D=';
                      t[e].forEach(function (e) {
                        var t;
                        if ('value' === e.type) t = e.value;
                        else {
                          var n = s.exec(e.value);
                          if (n) t = i + 'v' + n[1];
                          else {
                            var r = l.exec(e.value);
                            r && (t = i + 'c' + r[1]);
                          }
                        }
                        a[e.name] = t;
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
                      props: p,
                      eVars: p,
                      campaign: function (e, t, n) {
                        if ('queryParam' === n[t].type) {
                          var r = a.parse(i.location.search);
                          e[t] = r[n[t].value];
                        } else e[t] = n[t].value;
                      },
                      events: function (e, t, n) {
                        var r = n[t].map(function (e) {
                          var t = e.name;
                          return (
                            e.id && (t = [t, e.id].join(':')),
                            e.value && (t = [t, e.value].join('=')),
                            t
                          );
                        });
                        e[t] = r.join(',');
                      },
                    };
                  e.exports = function (t, r) {
                    var a = {};
                    (r = r || {}),
                      Object.keys(r).forEach(function (e) {
                        var t = g[e],
                          n = r[e];
                        t ? t(a, e, r) : (a[e] = n);
                      }),
                      a.events &&
                        t.events &&
                        0 < t.events.length &&
                        (a.events = t.events + ',' + a.events);
                    var e = r && r.events && 0 < r.events.length,
                      n = d(t, a, e);
                    n && (a.linkTrackVars = n);
                    var i = f(t, r.events || []);
                    i && (a.linkTrackEvents = i),
                      o.logger.info(
                        'Applying the following properties on tracker: "' +
                          JSON.stringify(a) +
                          '".'
                      ),
                      Object.keys(a).forEach(function (e) {
                        t[e] = a[e];
                      });
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/loadLibrary.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('@adobe/reactor-load-script'),
                    i = n('@adobe/reactor-window'),
                    o = n('@adobe/reactor-promise'),
                    s = n('./settingsHelper'),
                    l = n('./pollHelper'),
                    c = function (e, t) {
                      if (!i.s_gi)
                        throw new Error(
                          'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                            i.AppMeasurement
                        );
                      r.logger.info(
                        'Creating AppMeasurement tracker with these report suites: "' + t + '"'
                      );
                      var n = i.s_gi(t);
                      return (
                        e.libraryCode.scopeTrackerGlobally &&
                          (r.logger.info('Setting the tracker as window.s'), (i.s = n)),
                        n
                      );
                    },
                    u = function (e) {
                      var t = [];
                      switch (e.libraryCode.type) {
                        case s.LIB_TYPES.MANAGED:
                          t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.APP_MEASUREMENT)),
                            s.isActivityMapEnabled(e) &&
                              t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.ACTIVITY_MAP));
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
                          t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT));
                      }
                      return t;
                    },
                    d = function (e) {
                      return o.all(
                        u(e).map(function (e) {
                          return r.logger.info('Loading script: ' + e), a(e);
                        })
                      );
                    },
                    f = function (e, t) {
                      if (e.libraryCode.accounts)
                        if (t.sa) {
                          var n = s.getReportSuites(e.libraryCode.accounts);
                          r.logger.info(
                            'Setting the following report suites on the tracker: "' + n + '"'
                          ),
                            t.sa(n);
                        } else
                          r.logger.warn(
                            'Cannot set report suites on tracker. `sa` method not available.'
                          );
                      return t;
                    },
                    p = function (e) {
                      if (i[e])
                        return r.logger.info('Found tracker located at: "' + e + '".'), i[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    };
                  e.exports = function (e) {
                    var t = d(e);
                    switch (e.libraryCode.type) {
                      case s.LIB_TYPES.MANAGED:
                        var n = s.getReportSuites(e.libraryCode.accounts);
                        return t.then(c.bind(null, e, n));
                      case s.LIB_TYPES.PREINSTALLED:
                        return t
                          .then(l.poll.bind(null, i, e.libraryCode.trackerVariableName))
                          .then(f.bind(null, e));
                      case s.LIB_TYPES.CUSTOM:
                      case s.LIB_TYPES.REMOTE:
                        return t
                          .then(p.bind(null, e.libraryCode.trackerVariableName))
                          .then(f.bind(null, e));
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
                    r = function (e) {
                      return e.substr(e.length - 1);
                    },
                    a = function (e) {
                      return Math.floor(e.getUTCHours() / t);
                    },
                    i = function (e) {
                      var t = (e.getUTCMonth() + 1 + 12 * a(e)).toString(36);
                      return r(t);
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
                script: function (e, t, n, r) {
                  'use strict';
                  var o = n('@adobe/reactor-promise'),
                    s = 40,
                    l = 250,
                    c = function (e, t, n) {
                      r.logger.info('Found property located at: "' + t + '"].'), e(n);
                    },
                    a = function (a, i) {
                      return new o(function (e, t) {
                        if (a[i]) return c(e, i, a[i]);
                        var n = 1,
                          r = setInterval(function () {
                            a[i] && (c(e, i, a[i]), clearInterval(r)),
                              s <= n &&
                                (clearInterval(r),
                                t(
                                  new Error(
                                    'Bailing out. Cannot find the variable name: "' + i + '"].'
                                  )
                                )),
                              n++;
                          }, l);
                      });
                    };
                  e.exports = {
                    poll: function (e, t) {
                      return (
                        r.logger.info(
                          'Waiting for the property to become accessible at: "' + t + '"].'
                        ),
                        a(e, t)
                      );
                    },
                  };
                },
              },
            },
            settings: {
              orgId: 'DA11332E5321D0550A490D45@AdobeOrg',
              libraryCode: {
                type: 'custom',
                source:
                  'https://assets.adobedtm.com/331fbea29f79/3ac6e7f13fd8/6a572ba3bfaa/EX23a59031a24843389be5b027bf7b0d0f-libraryCode_source.min.js',
                accounts: {
                  staging: ['comcastdotcomqa'],
                  production: ['comcastdotcomprod'],
                  development: ['comcastdotcomqa'],
                },
                trackerVariableName: 's',
              },
              moduleProperties: { audienceManager: { config: { partner: 'comcast' } } },
              trackerProperties: {
                currencyCode: 'USD',
                trackingServer: 'comcastcom.d1.sc.omtrdc.net',
                trackInlineStats: !0,
                trackDownloadLinks: !0,
                trackExternalLinks: !0,
                linkInternalFilters: [
                  'support-test-two.xfn-ops.xfinity.com/',
                  'api.xfinity.com',
                  'cdn.xfinity.com',
                  'comcast.com',
                  'comcast.convergentcare.com',
                  'comcastsupport.com',
                  'customer.staging.xfinity.com',
                  'customer.xfinity.com',
                  'es.xfinity.com',
                  'forums.businesshelp.comcast.com',
                  'forums.xfinity.com',
                  'https://support-test-six.xfn-ops.xfinity.com/support/',
                  'idm.xfinity.com',
                  'javascript:',
                  'login.xfinity.com',
                  'ly.xfinity.com',
                  'mailto:',
                  'mobile.xfinity.com',
                  'mostlivesports.com',
                  'my.xfinity.com',
                  'referafriend.xfinity.com',
                  'search.xfinity.com',
                  'sitesearch.xfinity.com',
                  'tel:',
                  'wifi.xfinity.com',
                  'www.xfinity',
                  'www.xfinity.com',
                ],
                trackingServerSecure: 'comcastcom.d1.sc.omtrdc.net',
                linkDownloadFileTypes: [
                  'doc',
                  'docx',
                  'eps',
                  'jpg',
                  'png',
                  'svg',
                  'xls',
                  'ppt',
                  'pptx',
                  'pdf',
                  'xlsx',
                  'tab',
                  'csv',
                  'zip',
                  'txt',
                  'vsd',
                  'vxd',
                  'xml',
                  'js',
                  'css',
                  'rar',
                  'exe',
                  'wma',
                  'mov',
                  'avi',
                  'wmv',
                  'mp3',
                  'wav',
                  'm4v',
                ],
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPbde2f7ca14e540399dcc1f8208860b7b/',
          },
          'adobe-mcid': {
            displayName: 'Experience Cloud ID Service',
            modules: {
              'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
                script: function (e, t, n, g) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    a = n('../codeLibrary/VisitorAPI'),
                    m = n('../../view/utils/timeUnits'),
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
                        r = t.doesOptInApply;
                      r &&
                        ('boolean' == typeof r
                          ? (n.doesOptInApply = r)
                          : t.optInCallback && (n.doesOptInApply = t.optInCallback));
                      var a = t.isOptInStorageEnabled;
                      a && (n.isOptInStorageEnabled = a);
                      var i = t.optInCookieDomain;
                      i && (n.optInCookieDomain = i);
                      var o = t.optInStorageExpiry;
                      if (o) {
                        var s = t.timeUnit;
                        if (s && m[s]) {
                          var l = o * m[s];
                          n.optInStorageExpiry = l;
                        }
                      } else !0 === a && (n.optInStorageExpiry = 33696000);
                      var c = t.previousPermissions;
                      c && (n.previousPermissions = c);
                      var u = t.preOptInApprovals;
                      if (u) n.preOptInApprovals = u;
                      else {
                        var d = t.preOptInApprovalInput;
                        d && (n.preOptInApprovals = d);
                      }
                      var f = t.isIabContext;
                      f && (n.isIabContext = f);
                      var p = e.getInstance(t.orgId, n);
                      return (
                        g.logger.info('Created instance using orgId: "' + t.orgId + '"'),
                        g.logger.info('Set variables: ' + JSON.stringify(n)),
                        p.getMarketingCloudVisitorID(function (e) {
                          g.logger.info('Obtained Marketing Cloud Visitor Id: ' + e);
                        }, !0),
                        p
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
                      : (s = i(a)),
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
                      function B (e) {
                        return (B =
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
                            (e || (n && !q.isObjectEmpty(n))) &&
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
                      function c (e, t, n) {
                        var r = null == e ? void 0 : e[t];
                        return void 0 === r ? n : r;
                      }
                      function a (e) {
                        for (var t = /^\d+$/, n = 0, r = e.length; n < r; n++)
                          if (!t.test(e[n])) return !1;
                        return !0;
                      }
                      function i (e, t) {
                        for (; e.length < t.length; ) e.push('0');
                        for (; t.length < e.length; ) t.push('0');
                      }
                      function o (e, t) {
                        for (var n = 0; n < e.length; n++) {
                          var r = parseInt(e[n], 10),
                            a = parseInt(t[n], 10);
                          if (a < r) return 1;
                          if (r < a) return -1;
                        }
                        return 0;
                      }
                      function n (e, t) {
                        if (e === t) return 0;
                        var n = e.toString().split('.'),
                          r = t.toString().split('.');
                        return a(n.concat(r)) ? (i(n, r), o(n, r)) : NaN;
                      }
                      function s (e) {
                        return e === Object(e) && 0 === Object.keys(e).length;
                      }
                      function l (e) {
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
                        (this.log = fe('log', n, r)),
                          (this.warn = fe('warn', n, r)),
                          (this.error = fe('error', n, r));
                      }
                      function x (e, t) {
                        var a = (0 < arguments.length && void 0 !== e ? arguments[0] : {})
                            .cookieName,
                          i = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies;
                        if (!a || !i) return { get: Ee, set: Ee, remove: Ee };
                        var o = {
                          remove: function () {
                            i.remove(a);
                          },
                          get: function () {
                            var e = i.get(a),
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
                              r = Object.assign(n, e);
                            i.set(a, JSON.stringify(r), {
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
                          var n = ye(e);
                          return n.length
                            ? n.every(function (e) {
                                return !!t[e];
                              })
                            : ve(t);
                        }
                        function r () {
                          P(w),
                            M(re.COMPLETE),
                            _(C.status, C.permissions),
                            c &&
                              S.set(C.permissions, {
                                optInCookieDomain: u,
                                optInStorageExpiry: d,
                              }),
                            I.execute(xe);
                        }
                        function a (n) {
                          return function (e, t) {
                            if (!be(e))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return M(re.CHANGED), Object.assign(w, Se(ye(e), n)), t || r(), C;
                          };
                        }
                        var i = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          o = i.doesOptInApply,
                          s = i.previousPermissions,
                          l = i.preOptInApprovals,
                          c = i.isOptInStorageEnabled,
                          u = i.optInCookieDomain,
                          d = i.optInStorageExpiry,
                          f = i.isIabContext,
                          p = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                          g = ke(s);
                        Oe(g, 'Invalid `previousPermissions`!'),
                          Oe(l, 'Invalid `preOptInApprovals`!');
                        var m,
                          h,
                          y,
                          v,
                          b,
                          S = x({ cookieName: 'adobeujs-optin' }, { cookies: p }),
                          C = this,
                          _ = H(C),
                          I = ce(),
                          D = Ie(g),
                          T = Ie(l),
                          A = c ? S.get() : {},
                          E = {},
                          k = ((b = A), De(D) || (b && De(b)) ? re.COMPLETE : re.PENDING),
                          O =
                            ((m = T),
                            (h = D),
                            (y = A),
                            (v = Se(le, !o)),
                            o ? Object.assign({}, v, m, h, y) : v),
                          w = Ce(O),
                          M = function (e) {
                            return (k = e);
                          },
                          P = function (e) {
                            return (O = e);
                          };
                        (C.deny = a(!1)),
                          (C.approve = a(!0)),
                          (C.denyAll = C.deny.bind(C, le)),
                          (C.approveAll = C.approve.bind(C, le)),
                          (C.isApproved = function (e) {
                            return n(e, C.permissions);
                          }),
                          (C.isPreApproved = function (e) {
                            return n(e, T);
                          }),
                          (C.fetchPermissions = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t && arguments[1],
                              r = n ? C.on(re.COMPLETE, e) : Ee;
                            return (
                              !o || (o && C.isComplete) || l
                                ? e(C.permissions)
                                : n ||
                                  I.add(xe, function () {
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
                              throw new Error(je);
                            E[e.name] || (E[e.name] = e).onRegister.call(e, C);
                          }),
                          (C.execute = Pe(E)),
                          (C.memoizeContent = function (e) {
                            Ae(e) && S.set(e, { optInCookieDomain: u, optInStorageExpiry: d });
                          }),
                          (C.getMemoizedContent = function (e) {
                            var t = S.get();
                            if (t) return t[e];
                          }),
                          Object.defineProperties(C, {
                            permissions: {
                              get: function () {
                                return O;
                              },
                            },
                            status: {
                              get: function () {
                                return k;
                              },
                            },
                            Categories: {
                              get: function () {
                                return ae;
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
                                return Object.keys(E);
                              },
                            },
                            isIabContext: {
                              get: function () {
                                return f;
                              },
                            },
                          });
                      }
                      function f (e, t) {
                        function n () {
                          (a = null), e.call(e, new u('The call took longer than you wanted!'));
                        }
                        function r () {
                          a && (clearTimeout(a), e.apply(e, arguments));
                        }
                        if (void 0 === t) return e;
                        var a = setTimeout(n, t);
                        return r;
                      }
                      function p () {
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
                              (window.__tcfapi = function (e, t, n, r) {
                                var a = Math.random() + '',
                                  i = {
                                    __tcfapiCall: {
                                      command: e,
                                      parameter: r,
                                      version: t,
                                      callId: a,
                                    },
                                  };
                                (s[a] = n), o.postMessage(i, '*');
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
                          me.error('__tcfapi not found');
                        } else me.error('__tcfapi not found');
                      }
                      function g (t, e, n) {
                        var r = 2 < arguments.length && void 0 !== n ? arguments[2] : [],
                          a = !0 === t.vendor.consents[e],
                          i = r.every(function (e) {
                            return !0 === t.purpose.consents[e];
                          });
                        return a && i;
                      }
                      function m () {
                        var n = this;
                        (n.name = 'iabPlugin'), (n.version = '0.0.2');
                        var i,
                          o = ce(),
                          s = { transparencyAndConsentData: null },
                          l = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {};
                            return (s[e] = n);
                          };
                        (n.fetchConsentData = function (e) {
                          var t = f(e.callback, e.timeout);
                          c({ callback: t });
                        }),
                          (n.isApproved = function (e) {
                            var n = e.callback,
                              r = e.category,
                              t = e.timeout;
                            if (s.transparencyAndConsentData)
                              return n(null, g(s.transparencyAndConsentData, ie[r], oe[r]));
                            var a = f(function (e, t) {
                              n(e, g(t, ie[r], oe[r]));
                            }, t);
                            c({ category: r, callback: a });
                          }),
                          (n.onRegister = function (r) {
                            i = r;
                            var t = Object.keys(ie),
                              e = function (e, n) {
                                !e &&
                                  n &&
                                  (t.forEach(function (e) {
                                    var t = g(n, ie[e], oe[e]);
                                    r[t ? 'approve' : 'deny'](e, !0);
                                  }),
                                  r.complete());
                              };
                            n.fetchConsentData({ callback: e });
                          });
                        var c = function (e) {
                            var t = e.callback;
                            if (s.transparencyAndConsentData)
                              return t(null, s.transparencyAndConsentData);
                            o.add('FETCH_CONSENT_DATA', t),
                              r(function (e, t) {
                                if (t) {
                                  var n = Ce(e),
                                    r = i.getMemoizedContent('iabConsentHash'),
                                    a = ge(n.tcString).toString(32);
                                  (n.consentString = e.tcString),
                                    (n.hasConsentChangedSinceLastCmpPull = r !== a),
                                    l('transparencyAndConsentData', n),
                                    i.memoizeContent({ iabConsentHash: a });
                                }
                                o.execute('FETCH_CONSENT_DATA', [
                                  null,
                                  s.transparencyAndConsentData,
                                ]);
                              });
                          },
                          r = function (e) {
                            var t = Me(ie),
                              n = p();
                            'function' == typeof n && n('getTCData', 2, e, t);
                          };
                      }
                      var W =
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
                      var h,
                        y,
                        v,
                        b,
                        G = {
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
                        S = G.STATE_KEYS_MAP,
                        C = function (i) {
                          function r () {}
                          function a (n, r) {
                            var a = this;
                            return function () {
                              var e = i(0, n),
                                t = {};
                              return (t[n] = e), a.setStateAndPublish(t), r(e), e;
                            };
                          }
                          (this.getMarketingCloudVisitorID = function (e) {
                            e = e || r;
                            var t = this.findField(S.MCMID, e),
                              n = a.call(this, S.MCMID, e);
                            return void 0 !== t ? t : n();
                          }),
                            (this.getVisitorValues = function (t) {
                              this.getMarketingCloudVisitorID(function (e) {
                                t({ MCMID: e });
                              });
                            });
                        },
                        _ = G.MESSAGES,
                        I = G.ASYNC_API_MAP,
                        D = G.SYNC_API_MAP,
                        T = function () {
                          function a () {}
                          function i (e, t) {
                            var n = this;
                            return function () {
                              return n.callbackRegistry.add(e, t), n.messageParent(_.GETSTATE), '';
                            };
                          }
                          function e (r) {
                            this[I[r]] = function (e) {
                              e = e || a;
                              var t = this.findField(r, e),
                                n = i.call(this, r, e);
                              return void 0 !== t ? t : n();
                            };
                          }
                          function t (e) {
                            this[D[e]] = function () {
                              return this.findField(e, a) || {};
                            };
                          }
                          Object.keys(I).forEach(e, this), Object.keys(D).forEach(t, this);
                        },
                        A = G.ASYNC_API_MAP,
                        E = function () {
                          Object.keys(A).forEach(function (t) {
                            this[A[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        q =
                          ((function (e, t) {
                            (t.isObjectEmpty = function (e) {
                              return e === Object(e) && 0 === Object.keys(e).length;
                            }),
                              (t.isValueEmpty = function (e) {
                                return '' === e || t.isObjectEmpty(e);
                              });
                            var n = function () {
                              const $___old_68437f05bea260fd = {}.constructor.getOwnPropertyDescriptor(
                                Navigator.prototype,
                                'userAgent'
                              );
                              try {
                                if ($___old_68437f05bea260fd)
                                  ({}.constructor.defineProperty(
                                    Navigator.prototype,
                                    'userAgent',
                                    $___stub_8938c767ccc6c19c.userAgent
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
                                if ($___old_68437f05bea260fd)
                                  ({}.constructor.defineProperty(
                                    Navigator.prototype,
                                    'userAgent',
                                    $___old_68437f05bea260fd
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
                                return null !== e && 'object' === B(e) && !1 === Array.isArray(e);
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
                                var r = parseInt(e.d_ottl, 10);
                                return isNaN(r) && (r = 7200), { optOut: t, d_ottl: r };
                              }),
                              (t.normalizeBoolean = function (e) {
                                var t = e;
                                return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
                              });
                          })((b = { exports: {} }), b.exports),
                          b.exports),
                        k =
                          (q.isObjectEmpty,
                          q.isValueEmpty,
                          q.getIeVersion,
                          q.encodeAndBuildRequest,
                          q.isObject,
                          q.defineGlobalNamespace,
                          q.pluck,
                          q.parseOptOut,
                          q.normalizeBoolean,
                          t),
                        O = G.MESSAGES,
                        w = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        Y = function (i, o) {
                          (this.parse = function (e) {
                            try {
                              var n = {};
                              return (
                                e.data.split('|').forEach(function (e, t) {
                                  void 0 !== e && (n[w[t]] = 2 !== t ? e : JSON.parse(e));
                                }),
                                n
                              );
                            } catch (e) {}
                          }),
                            (this.isInvalid = function (e) {
                              var t = this.parse(e);
                              if (!t || Object.keys(t).length < 2) return !0;
                              var n = i !== t.orgID,
                                r = !o || e.origin !== o,
                                a = -1 === Object.keys(O).indexOf(t.prefix);
                              return n || r || a;
                            }),
                            (this.send = function (e, t, n) {
                              var r = t + '|' + i;
                              n && n === Object(n) && (r += '|' + JSON.stringify(n));
                              try {
                                e.postMessage(r, o);
                              } catch (i) {}
                            });
                        },
                        M = G.MESSAGES,
                        P = function (e, t, n, r) {
                          function a (e) {
                            Object.assign(p, e);
                          }
                          function i (e) {
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
                            !m && g && ((m = !0), h.send(r, e));
                          }
                          function l () {
                            a(new C(n._generateID)),
                              p.getMarketingCloudVisitorID(),
                              p.callbackRegistry.executeAll(p.state, !0),
                              W.removeEventListener('message', c);
                          }
                          function c (e) {
                            if (!h.isInvalid(e)) {
                              var t = h.parse(e);
                              (m = !1),
                                W.clearTimeout(p._handshakeTimeout),
                                W.removeEventListener('message', c),
                                a(new T(p)),
                                W.addEventListener('message', o),
                                p.setStateAndPublish(t.state),
                                p.callbackRegistry.hasCallbacks() && s(M.GETSTATE);
                            }
                          }
                          function u () {
                            g && postMessage
                              ? (W.addEventListener('message', c),
                                s(M.HANDSHAKE),
                                (p._handshakeTimeout = setTimeout(l, 250)))
                              : l();
                          }
                          function d () {
                            W.s_c_in || ((W.s_c_il = []), (W.s_c_in = 0)),
                              (p._c = 'Visitor'),
                              (p._il = W.s_c_il),
                              (p._in = W.s_c_in),
                              (p._il[p._in] = p),
                              W.s_c_in++;
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
                            (p.cookieDomain = n.cookieDomain || '');
                          var m = !(p._instanceType = 'child'),
                            h = new Y(e, g);
                          (p.callbackRegistry = k()),
                            (p.init = function () {
                              d(), f(), a(new E(p)), u();
                            }),
                            (p.findField = function (e, t) {
                              if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e];
                            }),
                            (p.messageParent = s),
                            (p.setStateAndPublish = i);
                        },
                        j = G.MESSAGES,
                        V = G.ALL_APIS,
                        L = G.ASYNC_API_MAP,
                        N = G.FIELDGROUP_TO_FIELD,
                        J = function (a, r) {
                          function i () {
                            var r = {};
                            return (
                              Object.keys(V).forEach(function (e) {
                                var t = V[e],
                                  n = a[t]();
                                q.isValueEmpty(n) || (r[e] = n);
                              }),
                              r
                            );
                          }
                          function o () {
                            var n = [];
                            return (
                              a._loading &&
                                Object.keys(a._loading).forEach(function (e) {
                                  if (a._loading[e]) {
                                    var t = N[e];
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
                                var t = L[e[0]];
                                a[t](r, !0);
                              } else n();
                            };
                          }
                          function n (e, t) {
                            var n = i();
                            r.send(e, t, n);
                          }
                          function s (e) {
                            c(e), n(e, j.HANDSHAKE);
                          }
                          function l (e) {
                            t(function () {
                              n(e, j.PARENTSTATE);
                            })();
                          }
                          function c (t) {
                            function e (e) {
                              n.call(a, e),
                                r.send(t, j.PARENTSTATE, { CUSTOMERIDS: a.getCustomerIDs() });
                            }
                            var n = a.setCustomerIDs;
                            a.setCustomerIDs = e;
                          }
                          return function (e) {
                            r.isInvalid(e) ||
                              (r.parse(e).prefix === j.HANDSHAKE ? s : l)(e.source);
                          };
                        },
                        z = function (r, n) {
                          function a (t) {
                            return function (e) {
                              (i[t] = e), ++o === s && n(i);
                            };
                          }
                          var i = {},
                            o = 0,
                            s = Object.keys(r).length;
                          Object.keys(r).forEach(function (e) {
                            var t = r[e];
                            if (t.fn) {
                              var n = t.args || [];
                              n.unshift(a(e)), t.fn.apply(t.context || null, n);
                            }
                          });
                        },
                        X = {
                          get: function (e) {
                            const $___old_0676b15b69243ba8 = {}.constructor.getOwnPropertyDescriptor(
                              Document.prototype,
                              'cookie'
                            );
                            try {
                              if ($___old_0676b15b69243ba8)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___stub_1c5cc68fe6204532.cookie
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
                              if ($___old_0676b15b69243ba8)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___old_0676b15b69243ba8
                                ));
                            }
                          },
                          set: function (e, t, n) {
                            const $___old_835b482f9b9f7167 = {}.constructor.getOwnPropertyDescriptor(
                              Document.prototype,
                              'cookie'
                            );
                            try {
                              if ($___old_835b482f9b9f7167)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___stub_1c5cc68fe6204532.cookie
                                ));
                              return function () {
                                var r = c(n, 'cookieLifetime'),
                                  a = c(n, 'expires'),
                                  i = c(n, 'domain'),
                                  o = c(n, 'secure') ? 'Secure' : '';
                                if (a && 'SESSION' !== r && 'NONE' !== r) {
                                  var s = '' !== t ? parseInt(r || 0, 10) : -60;
                                  if (s) (a = new Date()).setTime(a.getTime() + 1000 * s);
                                  else if (1 === a) {
                                    var l = (a = new Date()).getYear();
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
                                      (i ? ' domain=' + i + ';' : '') +
                                      o),
                                    this.get(e) === t)
                                  : 0;
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_835b482f9b9f7167)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___old_835b482f9b9f7167
                                ));
                            }
                          },
                          remove: function (e, t) {
                            const $___old_e2d38ca1c5208b87 = {}.constructor.getOwnPropertyDescriptor(
                              Document.prototype,
                              'cookie'
                            );
                            try {
                              if ($___old_e2d38ca1c5208b87)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___stub_1c5cc68fe6204532.cookie
                                ));
                              return function () {
                                var n = c(t, 'domain');
                                (n = n ? ' domain=' + n + ';' : ''),
                                  (document.cookie =
                                    encodeURIComponent(e) +
                                    '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                                    n);
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_e2d38ca1c5208b87)
                                ({}.constructor.defineProperty(
                                  Document.prototype,
                                  'cookie',
                                  $___old_e2d38ca1c5208b87
                                ));
                            }
                          },
                        },
                        $ = function (e) {
                          var t;
                          !e && W.location && (e = W.location.hostname);
                          var n,
                            r = (t = e).split('.');
                          for (n = r.length - 2; 0 <= n; n--)
                            if (
                              ((t = r.slice(n).join('.')), X.set('test', 'cookie', { domain: t }))
                            )
                              return X.remove('test', { domain: t }), t;
                          return '';
                        },
                        K = {
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
                        F = !!W.postMessage,
                        Q = {
                          postMessage: function (e, t, n) {
                            var r = 1;
                            t &&
                              (F
                                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (n.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + r++ + '&' + e));
                          },
                          receiveMessage: function (t, n) {
                            var e;
                            try {
                              F &&
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
                                W.addEventListener
                                  ? W[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : W[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
                            } catch (t) {}
                          },
                        },
                        Z = function (e) {
                          var t,
                            n,
                            r = '0123456789',
                            a = '',
                            i = '',
                            o = 8,
                            s = 10,
                            l = 10;
                          if (1 == e) {
                            for (r += 'ABCDEF', t = 0; t < 16; t++)
                              (n = Math.floor(Math.random() * o)),
                                (a += r.substring(n, n + 1)),
                                (n = Math.floor(Math.random() * o)),
                                (i += r.substring(n, n + 1)),
                                (o = 16);
                            return a + '-' + i;
                          }
                          for (t = 0; t < 19; t++)
                            (n = Math.floor(Math.random() * s)),
                              (a += r.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (s = 3)
                                : (1 == t || 2 == t) && 10 != s && n < 2
                                ? (s = 10)
                                : 2 < t && (s = 10),
                              (n = Math.floor(Math.random() * l)),
                              (i += r.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (l = 3)
                                : (1 == t || 2 == t) && 10 != l && n < 2
                                ? (l = 10)
                                : 2 < t && (l = 10);
                          return a + i;
                        },
                        ee = function (r) {
                          const $___old_df4fb8c662da448b = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_2f25c473cafbf591 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_df4fb8c662da448b)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_6a23a5fb7b102c19.XMLHttpRequest
                              ));
                            if ($___old_2f25c473cafbf591)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_6a23a5fb7b102c19.XMLHttpRequest
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
                                        .call(W.HTMLElement)
                                        .indexOf('Constructor') && (t = !1)),
                                  { corsType: e, corsCookiesEnabled: t }),
                                getCORSInstance: function () {
                                  const $___old_aa399c973b718e55 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    ),
                                    $___old_a5a6593aa0b1fce0 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    );
                                  try {
                                    if ($___old_aa399c973b718e55)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_6a23a5fb7b102c19.XMLHttpRequest
                                      ));
                                    if ($___old_a5a6593aa0b1fce0)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_6a23a5fb7b102c19.XMLHttpRequest
                                      ));
                                    return function () {
                                      return 'none' === this.corsMetadata.corsType
                                        ? null
                                        : new W[this.corsMetadata.corsType]();
                                    }.apply(this, arguments);
                                  } finally {
                                    if ($___old_aa399c973b718e55)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_aa399c973b718e55
                                      ));
                                    if ($___old_a5a6593aa0b1fce0)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_a5a6593aa0b1fce0
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
                                      for (var n = i.callback, r = W, a = 0; a < n.length; a++)
                                        r = r[n[a]];
                                      r(t);
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
                                        o.handleCORSError(i, e, 'onerror');
                                      }),
                                      (n.ontimeout = function (e) {
                                        o.handleCORSError(i, e, 'ontimeout');
                                      }),
                                      n.send(),
                                      r._log.requests.push(i.corsUrl);
                                  } catch (r) {
                                    this.handleCORSError(i, r, 'try-catch');
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
                            if ($___old_df4fb8c662da448b)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_df4fb8c662da448b
                              ));
                            if ($___old_2f25c473cafbf591)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_2f25c473cafbf591
                              ));
                          }
                        },
                        te = {
                          POST_MESSAGE_ENABLED: !!W.postMessage,
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
                          var a = W.document;
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
                                  encodeURIComponent(a.location.origin);
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
                                encodeURIComponent(a.location.href);
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
                                ((r = a.createElement('iframe')).sandbox =
                                  'allow-scripts allow-same-origin'),
                                  (r.title = 'Adobe ID Syncing iFrame'),
                                  (r.id = n.id),
                                  (r.name = n.id + '_name'),
                                  (r.style.cssText = 'display: none; width: 0; height: 0;'),
                                  (r.src = n.url),
                                  (n.newIframeCreated = !0),
                                  t(),
                                  a.body.appendChild(r);
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
                                r = a.getElementById(this.id);
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
                                  var a,
                                    i,
                                    o,
                                    s = !1;
                                  for (a = 0, i = this.jsonForComparison.length; a < i; a++)
                                    if (
                                      ((o = this.jsonForComparison[a]),
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
                                var l = this.jsonWaiting.shift();
                                this.process(l), this.requestToProcess();
                              }
                              g.idSyncDisableSyncs ||
                                g.disableIdSyncs ||
                                !this.iframeHasLoaded ||
                                !this.messages.length ||
                                this.sendingMessages ||
                                (this.throttleTimerSet ||
                                  ((this.throttleTimerSet = !0),
                                  setTimeout(function () {
                                    r.messageSendingInterval = te.POST_MESSAGE_ENABLED
                                      ? null
                                      : 150;
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
                              var t, n, r, a;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (r = 0; r < n; r++)
                                  (a = t[r]).syncOnPage &&
                                    this.checkFirstPartyCookie(a, '', 'syncOnPage');
                            },
                            process: function (e) {
                              var t,
                                n,
                                r,
                                a,
                                i,
                                o = encodeURIComponent,
                                s = !1;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (s = !0, r = 0; r < n; r++)
                                  (a = t[r]),
                                    (i = [
                                      o('ibs'),
                                      o(a.id || ''),
                                      o(a.tag || ''),
                                      q.encodeAndBuildRequest(a.url || [], ','),
                                      o(a.ttl || ''),
                                      '',
                                      '',
                                      a.fireURLSync ? 'true' : 'false',
                                    ]),
                                    a.syncOnPage ||
                                      (this.canSetThirdPartyCookies
                                        ? this.addMessage(i.join('|'))
                                        : a.fireURLSync &&
                                          this.checkFirstPartyCookie(a, i.join('|')));
                              s && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (e, t, n) {
                              var r = 'syncOnPage' === n,
                                a = r ? 'MCSYNCSOP' : 'MCSYNCS';
                              g._readVisitor();
                              var i,
                                o,
                                s = g._getField(a),
                                l = !1,
                                c = !1,
                                u = Math.ceil(new Date().getTime() / te.MILLIS_PER_DAY);
                              s
                                ? ((i = s.split('*')),
                                  (l = (o = this.pruneSyncData(i, e.id, u)).dataPresent),
                                  (c = o.dataValid),
                                  (l && c) || this.fireSync(r, e, t, i, a, u))
                                : ((i = []), this.fireSync(r, e, t, i, a, u));
                            },
                            pruneSyncData: function (e, t, n) {
                              var r,
                                a,
                                i,
                                o = !1,
                                s = !1;
                              for (a = 0; a < e.length; a++)
                                (r = e[a]),
                                  (i = parseInt(r.split('-')[1], 10)),
                                  r.match('^' + t + '-')
                                    ? ((o = !0), n < i ? (s = !0) : (e.splice(a, 1), a--))
                                    : i <= n && (e.splice(a, 1), a--);
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
                            fireSync: function (e, t, n, r, u, a) {
                              var d = this;
                              if (e) {
                                if ('img' === t.tag) {
                                  var i,
                                    o,
                                    s,
                                    l,
                                    c = t.url,
                                    f = g.loadSSL ? 'https:' : 'http:';
                                  for (i = 0, o = c.length; i < o; i++) {
                                    (s = c[i]), (l = /^\/\//.test(s));
                                    var p = new Image();
                                    p.addEventListener(
                                      'load',
                                      (function (o, s, l, c) {
                                        return function () {
                                          (d.onPagePixels[o] = null), g._readVisitor();
                                          var e,
                                            t,
                                            n,
                                            r,
                                            a = g._getField(u),
                                            i = [];
                                          if (a)
                                            for (t = 0, n = (e = a.split('*')).length; t < n; t++)
                                              (r = e[t]).match('^' + s.id + '-') || i.push(r);
                                          d.setSyncTrackingData(i, s, l, c);
                                        };
                                      })(this.onPagePixels.length, t, u, a)
                                    ),
                                      (p.src = (l ? f : '') + s),
                                      this.onPagePixels.push(p);
                                  }
                                }
                              } else this.addMessage(n), this.setSyncTrackingData(r, t, u, a);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                g._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push((te.POST_MESSAGE_ENABLED ? '' : t) + e);
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
                                  ? te.POST_MESSAGE_ENABLED
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
                              Q.postMessage(e, this.url, this.iframe.contentWindow),
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
                                        'complete' === a.readyState ||
                                        'loaded' === a.readyState) &&
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
                                  (a.body ? t.attachIframe() : setTimeout(e, 30));
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
                            return Object.keys(R);
                          },
                          getConfigs: function () {
                            return R;
                          },
                          normalizeConfig: function (e) {
                            return 'function' != typeof e ? e : e();
                          },
                        },
                        H = function (e) {
                          var a = {};
                          return (
                            (e.on = function (e, t, n) {
                              if (!t || 'function' != typeof t)
                                throw new Error('[ON] Callback should be a function.');
                              a.hasOwnProperty(e) || (a[e] = []);
                              var r = a[e].push({ callback: t, context: n }) - 1;
                              return function () {
                                a[e].splice(r, 1), a[e].length || delete a[e];
                              };
                            }),
                            (e.off = function (e, t) {
                              a.hasOwnProperty(e) &&
                                (a[e] = a[e].filter(function (e) {
                                  if (e.callback !== t) return e;
                                }));
                            }),
                            (e.publish = function (e) {
                              if (a.hasOwnProperty(e)) {
                                var t = [].slice.call(arguments, 1);
                                a[e].slice(0).forEach(function (e) {
                                  e.callback.apply(e.context, t);
                                });
                              }
                            }),
                            e.publish
                          );
                        },
                        re = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
                        ae = {
                          AAM: 'aam',
                          ADCLOUD: 'adcloud',
                          ANALYTICS: 'aa',
                          CAMPAIGN: 'campaign',
                          ECID: 'ecid',
                          LIVEFYRE: 'livefyre',
                          TARGET: 'target',
                          MEDIA_ANALYTICS: 'mediaaa',
                        },
                        ie = (e((h = {}), ae.AAM, 565), e(h, ae.ECID, 565), h),
                        oe = (e((y = {}), ae.AAM, [1, 10]), e(y, ae.ECID, [1, 10]), y),
                        se = ['videoaa', 'iabConsentHash'],
                        le =
                          ((v = ae),
                          Object.keys(v).map(function (e) {
                            return v[e];
                          })),
                        ce = function () {
                          var r = {};
                          return (
                            (r.callbacks = Object.create(null)),
                            (r.add = function (e, t) {
                              if (!l(t))
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
                        ue = function () {},
                        de = function (e) {
                          var t = window.console;
                          return !!t && 'function' == typeof t[e];
                        },
                        fe = function (r, a, e) {
                          return e()
                            ? function () {
                                if (de(r)) {
                                  for (
                                    var e = arguments.length, t = new Array(e), n = 0;
                                    n < e;
                                    n++
                                  )
                                    t[n] = arguments[n];
                                  console[r].apply(console, [a].concat(t));
                                }
                              }
                            : ue;
                        },
                        pe = r,
                        ge = (function () {
                          for (var a = [], e = 0; e < 256; e++) {
                            for (var t = e, n = 0; n < 8; n++)
                              t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                            a.push(t);
                          }
                          return function (e, t) {
                            (e = unescape(encodeURIComponent(e))), t || (t = 0), (t ^= -1);
                            for (var n = 0; n < e.length; n++) {
                              var r = 255 & (t ^ e.charCodeAt(n));
                              t = (t >>> 8) ^ a[r];
                            }
                            return (t ^= -1) >>> 0;
                          };
                        })(),
                        me = new pe('[ADOBE OPT-IN]'),
                        he = function (e, t) {
                          return B(e) === t;
                        },
                        ye = function (e, t) {
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
                        be = function (e, t) {
                          var n = 1 < arguments.length && void 0 !== t && arguments[1];
                          return (
                            !(!e || _e(e)) &&
                            ye(e).every(function (e) {
                              return -1 < le.indexOf(e) || (n && -1 < se.indexOf(e));
                            })
                          );
                        },
                        Se = function (e, n) {
                          return e.reduce(function (e, t) {
                            return (e[t] = n), e;
                          }, {});
                        },
                        Ce = function (e) {
                          return JSON.parse(JSON.stringify(e));
                        },
                        _e = function (e) {
                          return (
                            '[object Array]' === Object.prototype.toString.call(e) && !e.length
                          );
                        },
                        Ie = function (e) {
                          if (Ae(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        De = function (e) {
                          return void 0 === e || (Ae(e) ? be(Object.keys(e), !0) : Te(e));
                        },
                        Te = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && he(e, 'string') && be(Object.keys(t), !0);
                          } catch (e) {
                            return !1;
                          }
                        },
                        Ae = function (e) {
                          return null !== e && he(e, 'object') && !1 === Array.isArray(e);
                        },
                        Ee = function () {},
                        ke = function (e) {
                          return he(e, 'function') ? e() : e;
                        },
                        Oe = function (e, t) {
                          De(e) || me.error(''.concat(t));
                        },
                        we = function (t) {
                          return Object.keys(t).map(function (e) {
                            return t[e];
                          });
                        },
                        Me = function (e) {
                          return we(e).filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                          });
                        },
                        Pe = function (d) {
                          return function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                              n = t.command,
                              r = t.params,
                              a = void 0 === r ? {} : r,
                              i = t.callback,
                              o = void 0 === i ? Ee : i;
                            if (!n || -1 === n.indexOf('.'))
                              throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                              var s = n.split('.'),
                                l = d[s[0]],
                                c = s[1];
                              if (!l || 'function' != typeof l[c])
                                throw new Error('Make sure the plugin and API name exist.');
                              var u = Object.assign(a, { callback: o });
                              l[c].call(l, u);
                            } catch (d) {
                              me.error('[execute] Something went wrong: ' + d.message);
                            }
                          };
                        };
                      (u.prototype = Object.create(Error.prototype)),
                        (u.prototype.constructor = u);
                      var xe = 'fetchPermissions',
                        je = '[OptIn#registerPlugin] Plugin is invalid.';
                      (d.Categories = ae), (d.TimeoutError = u);
                      var Ve = Object.freeze({ OptIn: d, IabPlugin: m }),
                        Le = function (d, f) {
                          d.publishDestinations = function (e, t, n) {
                            var r = t,
                              a = n;
                            try {
                              a = 'function' == typeof a ? a : e.callback;
                            } catch (d) {
                              a = function () {};
                            }
                            var i = f;
                            if (i.readyToAttachIframePreliminary()) {
                              if ('string' == typeof e) {
                                if (!e.length)
                                  return void a({ error: 'subdomain is not a populated string.' });
                                if (!(r instanceof Array && r.length))
                                  return void a({ error: 'messages is not a populated array.' });
                                var o = !1;
                                if (
                                  (r.forEach(function (e) {
                                    'string' == typeof e &&
                                      e.length &&
                                      (i.addMessage(e), (o = !0));
                                  }),
                                  !o)
                                )
                                  return void a({
                                    error: 'None of the messages are populated strings.',
                                  });
                              } else {
                                if (!q.isObject(e))
                                  return void a({ error: 'Invalid parameters passed.' });
                                var s = e;
                                if ('string' != typeof (e = s.subdomain) || !e.length)
                                  return void a({
                                    error: 'config.subdomain is not a populated string.',
                                  });
                                var l = s.urlDestinations;
                                if (!(l instanceof Array && l.length))
                                  return void a({
                                    error: 'config.urlDestinations is not a populated array.',
                                  });
                                var c = [];
                                l.forEach(function (e) {
                                  q.isObject(e) &&
                                    (e.hideReferrer
                                      ? e.message && i.addMessage(e.message)
                                      : c.push(e));
                                }),
                                  (function u () {
                                    c.length &&
                                      setTimeout(function () {
                                        var e = new Image(),
                                          t = c.shift();
                                        (e.src = t.url), i.onPageDestinationsFired.push(t), u();
                                      }, 100);
                                  })();
                              }
                              i.iframe
                                ? (a({
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
                                        a({
                                          message:
                                            'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                                            (e.message || 'no result'),
                                        });
                                      }),
                                      i.attachIframe())
                                    : a({
                                        error:
                                          'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                                      }))
                                : i.iframeLoadedCallbacks.push(function (e) {
                                    a({
                                      message:
                                        'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
                                        (e.message || 'no result'),
                                    });
                                  });
                            } else
                              a({
                                error:
                                  'The destination publishing iframe is disabled in the Visitor library.',
                              });
                          };
                        },
                        Ne = function B (e) {
                          function t (e, t) {
                            return (e >>> t) | (e << (32 - t));
                          }
                          for (
                            var n,
                              r,
                              a = Math.pow,
                              i = a(2, 32),
                              o = '',
                              s = [],
                              l = 8 * e.length,
                              c = (B.h = B.h || []),
                              u = (B.k = B.k || []),
                              d = u.length,
                              f = {},
                              p = 2;
                            d < 64;
                            p++
                          )
                            if (!f[p]) {
                              for (n = 0; n < 313; n += p) f[n] = p;
                              (c[d] = (a(p, 0.5) * i) | 0), (u[d++] = (a(p, 1 / 3) * i) | 0);
                            }
                          for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
                          for (n = 0; n < e.length; n++) {
                            if ((r = e.charCodeAt(n)) >> 8) return;
                            s[n >> 2] |= r << (((3 - n) % 4) * 8);
                          }
                          for (s[s.length] = (l / i) | 0, s[s.length] = l, r = 0; r < s.length; ) {
                            var g = s.slice(r, (r += 16)),
                              m = c;
                            for (c = c.slice(0, 8), n = 0; n < 64; n++) {
                              var h = g[n - 15],
                                y = g[n - 2],
                                v = c[0],
                                b = c[4],
                                S =
                                  c[7] +
                                  (t(b, 6) ^ t(b, 11) ^ t(b, 25)) +
                                  ((b & c[5]) ^ (~b & c[6])) +
                                  u[n] +
                                  (g[n] =
                                    n < 16
                                      ? g[n]
                                      : (g[n - 16] +
                                          (t(h, 7) ^ t(h, 18) ^ (h >>> 3)) +
                                          g[n - 7] +
                                          (t(y, 17) ^ t(y, 19) ^ (y >>> 10))) |
                                        0);
                              (c = [
                                (S +
                                  ((t(v, 2) ^ t(v, 13) ^ t(v, 22)) +
                                    ((v & c[1]) ^ (v & c[2]) ^ (c[1] & c[2])))) |
                                  0,
                              ].concat(c))[4] = (c[4] + S) | 0;
                            }
                            for (n = 0; n < 8; n++) c[n] = (c[n] + m[n]) | 0;
                          }
                          for (n = 0; n < 8; n++)
                            for (r = 3; r + 1; r--) {
                              var C = (c[n] >> (8 * r)) & 255;
                              o += (C < 16 ? 0 : '') + C.toString(16);
                            }
                          return o;
                        },
                        Fe = function (e, t) {
                          return (
                            ('SHA-256' !== t &&
                              'SHA256' !== t &&
                              'sha256' !== t &&
                              'sha-256' !== t) ||
                              (e = Ne(e)),
                            e
                          );
                        },
                        Re = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        Ue = Ve.OptIn;
                      q.defineGlobalNamespace(), (window.adobe.OptInCategories = Ue.Categories);
                      var He = function (r, n, e) {
                        function f () {
                          y._customerIDsHashChanged = !1;
                        }
                        function t (e) {
                          var r = e;
                          return function (e) {
                            var t = e || I.location.href;
                            try {
                              var n = y._extractParamFromUri(t, r);
                              if (n) return F.parsePipeDelimetedKeyValues(n);
                            } catch (e) {}
                          };
                        }
                        function a (e) {
                          function t (e, t, n) {
                            e && e.match(te.VALID_VISITOR_ID_REGEX) && (n === E && (_ = !0), t(e));
                          }
                          t(e[E], y.setMarketingCloudVisitorID, E),
                            y._setFieldExpire(P, -1),
                            t(e[w], y.setAnalyticsVisitorID);
                        }
                        function i (e) {
                          (e = e || {}),
                            (y._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                            (y._supplementalDataIDCurrentConsumed =
                              e.supplementalDataIDCurrentConsumed || {}),
                            (y._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                            (y._supplementalDataIDLastConsumed =
                              e.supplementalDataIDLastConsumed || {});
                        }
                        function o (e) {
                          function a (e, t, n) {
                            return (n = n ? (n += '|') : n) + (e + '=') + encodeURIComponent(t);
                          }
                          function t (e, t) {
                            var n = t[0],
                              r = t[1];
                            return null != r && r !== x && (e = a(n, r, e)), e;
                          }
                          var n,
                            r = e.reduce(t, '');
                          return (
                            (n = (n = r) ? (n += '|') : n) + 'TS=' + F.getTimestampInSeconds()
                          );
                        }
                        function s (e) {
                          var t = e.minutesToLive,
                            n = '';
                          return (
                            (y.idSyncDisableSyncs || y.disableIdSyncs) &&
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
                          return !(!y.configs.doesOptInApply || (v.optIn.isComplete && d()));
                        }
                        function d () {
                          return y.configs.doesOptInApply && y.configs.isIabContext
                            ? v.optIn.isApproved(v.optIn.Categories.ECID) && C
                            : v.optIn.isApproved(v.optIn.Categories.ECID);
                        }
                        function c () {
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
                              r = y[t];
                            y[t] = function (e) {
                              return d() && y.isAllowed()
                                ? r.apply(y, arguments)
                                : ('function' == typeof e && y._callCallback(e, [n]), n);
                            };
                          });
                        }
                        function u () {
                          var e = y._getAudienceManagerURLData(),
                            t = e.url;
                          return y._loadData(A, t, null, e);
                        }
                        function p (e, t) {
                          if (((C = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t &&
                            t.gdprApplies &&
                            ((b = t.consentString),
                            (S = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            u(),
                            h();
                        }
                        function g (e, t) {
                          if (((C = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies &&
                            ((b = t.consentString),
                            (S = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            y.init(),
                            h();
                        }
                        function m () {
                          v.optIn.isComplete &&
                            (v.optIn.isApproved(v.optIn.Categories.ECID)
                              ? y.configs.isIabContext
                                ? v.optIn.execute({
                                    command: 'iabPlugin.fetchConsentData',
                                    callback: g,
                                  })
                                : (y.init(), h())
                              : y.configs.isIabContext
                              ? v.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: p,
                                })
                              : (c(), h()));
                        }
                        function h () {
                          v.optIn.off('complete', m);
                        }
                        if (!e || e.split('').reverse().join('') !== r)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var y = this,
                          v = window.adobe,
                          b = '',
                          S = 0,
                          C = !1,
                          _ = !1;
                        y.version = '5.0.1';
                        var I = W,
                          D = I.Visitor;
                        (D.version = y.version),
                          (D.AuthState = G.AUTH_STATE),
                          (D.OptOut = G.OPT_OUT),
                          I.s_c_in || ((I.s_c_il = []), (I.s_c_in = 0)),
                          (y._c = 'Visitor'),
                          (y._il = I.s_c_il),
                          (y._in = I.s_c_in),
                          (y._il[y._in] = y),
                          I.s_c_in++,
                          (y._instanceType = 'regular'),
                          (y._log = { requests: [] }),
                          (y.marketingCloudOrgID = r),
                          (y.cookieName = 'AMCV_' + r),
                          (y.sessionCookieName = 'AMCVS_' + r),
                          (y.cookieDomain = $()),
                          (y.loadSSL = !0),
                          (y.loadTimeout = 30000),
                          (y.CORSErrors = []),
                          (y.marketingCloudServer = y.audienceManagerServer = 'dpm.demdex.net'),
                          (y.sdidParamExpiry = 30);
                        var T = null,
                          A = 'MC',
                          E = 'MCMID',
                          k = 'MCIDTS',
                          O = 'A',
                          w = 'MCAID',
                          M = 'AAM',
                          P = 'MCAAMB',
                          x = 'NONE',
                          j = function (e) {
                            return !Object.prototype[e];
                          },
                          V = ee(y);
                        (y.FIELDS = G.FIELDS),
                          (y.cookieRead = function (e) {
                            return X.get(e);
                          }),
                          (y.cookieWrite = function (e, t, n) {
                            var r = y.cookieLifetime ? ('' + y.cookieLifetime).toUpperCase() : '',
                              a = !1;
                            return (
                              y.configs &&
                                y.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (a = !0),
                              X.set(e, '' + t, {
                                expires: n,
                                domain: y.cookieDomain,
                                cookieLifetime: r,
                                secure: a,
                              })
                            );
                          }),
                          (y.resetState = function (e) {
                            e ? y._mergeServerState(e) : i();
                          }),
                          (y._isAllowedDone = !1),
                          (y._isAllowedFlag = !1),
                          (y.isAllowed = function () {
                            return (
                              y._isAllowedDone ||
                                ((y._isAllowedDone = !0),
                                (y.cookieRead(y.cookieName) ||
                                  y.cookieWrite(y.cookieName, 'T', 1)) &&
                                  (y._isAllowedFlag = !0)),
                              'T' === y.cookieRead(y.cookieName) &&
                                y._helpers.removeCookie(y.cookieName),
                              y._isAllowedFlag
                            );
                          }),
                          (y.setMarketingCloudVisitorID = function (e) {
                            y._setMarketingCloudFields(e);
                          }),
                          (y._use1stPartyMarketingCloudServer = !1),
                          (y.getMarketingCloudVisitorID = function (e, t) {
                            y.marketingCloudServer &&
                              y.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                              (y._use1stPartyMarketingCloudServer = !0);
                            var n = y._getAudienceManagerURLData('_setMarketingCloudFields'),
                              r = n.url;
                            return y._getRemoteField(E, r, e, t, n);
                          });
                        var L = function (t, e) {
                          var n = {};
                          y.getMarketingCloudVisitorID(function () {
                            e.forEach(function (e) {
                              n[e] = y._getField(e, !0);
                            }),
                              -1 !== e.indexOf('MCOPTOUT')
                                ? y.isOptedOut(
                                    function (e) {
                                      (n.MCOPTOUT = e), t(n);
                                    },
                                    null,
                                    !0
                                  )
                                : t(n);
                          }, !0);
                        };
                        (y.getVisitorValues = function (e, t) {
                          var n = {
                              MCMID: { fn: y.getMarketingCloudVisitorID, args: [!0], context: y },
                              MCOPTOUT: { fn: y.isOptedOut, args: [void 0, !0], context: y },
                              MCAID: { fn: y.getAnalyticsVisitorID, args: [!0], context: y },
                              MCAAMLH: {
                                fn: y.getAudienceManagerLocationHint,
                                args: [!0],
                                context: y,
                              },
                              MCAAMB: { fn: y.getAudienceManagerBlob, args: [!0], context: y },
                            },
                            r = t && t.length ? q.pluck(n, t) : n;
                          t && -1 === t.indexOf('MCAID') ? L(e, t) : z(r, e);
                        }),
                          (y._currentCustomerIDs = {}),
                          (y._customerIDsHashChanged = !1),
                          (y._newCustomerIDsHash = ''),
                          (y.setCustomerIDs = function (e, t) {
                            if (!y.isOptedOut() && e) {
                              if (!q.isObject(e) || q.isObjectEmpty(e)) return !1;
                              var n, r, a, i;
                              for (n in (y._readVisitor(), e))
                                if (
                                  j(n) &&
                                  ((y._currentCustomerIDs.dataSources =
                                    y._currentCustomerIDs.dataSources || {}),
                                  (t = (r = e[n]).hasOwnProperty('hashType') ? r.hashType : t),
                                  r)
                                )
                                  if ('object' === B(r)) {
                                    var o = {};
                                    if (r.id) {
                                      if (t) {
                                        if (!(i = Fe(Re(r.id), t))) return;
                                        (r.id = i), (o.hashType = t);
                                      }
                                      o.id = r.id;
                                    }
                                    null != r.authState && (o.authState = r.authState),
                                      (y._currentCustomerIDs.dataSources[n] = o);
                                  } else if (t) {
                                    if (!(i = Fe(Re(r), t))) return;
                                    y._currentCustomerIDs.dataSources[n] = { id: i, hashType: t };
                                  } else y._currentCustomerIDs.dataSources[n] = { id: r };
                              var s = y.getCustomerIDs(!0),
                                l = y._getField('MCCIDH'),
                                c = '';
                              for (a in (l || (l = 0), s)) {
                                var u = s[a];
                                if (!q.isObjectEmpty(u))
                                  for (n in u)
                                    j(n) &&
                                      (c +=
                                        (c ? '|' : '') +
                                        n +
                                        '|' +
                                        ((r = u[n]).id ? r.id : '') +
                                        (r.authState ? r.authState : ''));
                              }
                              (y._newCustomerIDsHash = String(y._hash(c))),
                                y._newCustomerIDsHash !== l &&
                                  ((y._customerIDsHashChanged = !0), y._mapCustomerIDs(f));
                            }
                          }),
                          (y.syncIdentity = function (e, t) {
                            if (!y.isOptedOut() && e) {
                              if (!q.isObject(e) || q.isObjectEmpty(e)) return !1;
                              var n, r, a, i, o;
                              for (n in (y._readVisitor(), e))
                                if (
                                  j(n) &&
                                  ((y._currentCustomerIDs.nameSpaces =
                                    y._currentCustomerIDs.nameSpaces || {}),
                                  (t = (r = e[n]).hasOwnProperty('hashType') ? r.hashType : t),
                                  r && 'object' === B(r))
                                ) {
                                  var s = {};
                                  if (r.id) {
                                    if (t) {
                                      if (!(a = Fe(Re(r.id), t))) return;
                                      (r.id = a), (s.hashType = t);
                                    }
                                    s.id = r.id;
                                  }
                                  null != r.authState && (s.authState = r.authState),
                                    r.dataSource &&
                                      ((y._currentCustomerIDs.dataSources =
                                        y._currentCustomerIDs.dataSources || {}),
                                      (i = r.dataSource),
                                      (y._currentCustomerIDs.dataSources[i] = s)),
                                    (y._currentCustomerIDs.nameSpaces[n] = s);
                                }
                              var l = y.getCustomerIDs(!0),
                                c = y._getField('MCCIDH'),
                                u = '';
                              for (o in (c || (c = '0'), l)) {
                                var d = l[o];
                                if (!q.isObjectEmpty(d))
                                  for (n in d)
                                    j(n) &&
                                      (u +=
                                        (u ? '|' : '') +
                                        n +
                                        '|' +
                                        ((r = d[n]).id ? r.id : '') +
                                        (r.authState ? r.authState : ''));
                              }
                              (y._newCustomerIDsHash = String(y._hash(u))),
                                y._newCustomerIDsHash !== c &&
                                  ((y._customerIDsHashChanged = !0), y._mapCustomerIDs(f));
                            }
                          }),
                          (y.getCustomerIDs = function (e) {
                            y._readVisitor();
                            var t,
                              n,
                              r = { dataSources: {}, nameSpaces: {} },
                              a = y._currentCustomerIDs.dataSources;
                            for (t in a)
                              j(t) &&
                                (n = a[t]).id &&
                                (r.dataSources[t] || (r.dataSources[t] = {}),
                                (r.dataSources[t].id = n.id),
                                null != n.authState
                                  ? (r.dataSources[t].authState = n.authState)
                                  : (r.dataSources[t].authState = D.AuthState.UNKNOWN),
                                n.hashType && (r.dataSources[t].hashType = n.hashType));
                            var i = y._currentCustomerIDs.nameSpaces;
                            for (t in i)
                              j(t) &&
                                (n = i[t]).id &&
                                (r.nameSpaces[t] || (r.nameSpaces[t] = {}),
                                (r.nameSpaces[t].id = n.id),
                                null != n.authState
                                  ? (r.nameSpaces[t].authState = n.authState)
                                  : (r.nameSpaces[t].authState = D.AuthState.UNKNOWN),
                                n.hashType && (r.nameSpaces[t].hashType = n.hashType));
                            return e ? r : r.dataSources;
                          }),
                          (y.setAnalyticsVisitorID = function (e) {
                            y._setAnalyticsFields(e);
                          }),
                          (y.getAnalyticsVisitorID = function (e, t, n) {
                            if (!F.isTrackingServerPopulated() && !n)
                              return y._callCallback(e, ['']), '';
                            var r = '';
                            if (
                              (n ||
                                (r = y.getMarketingCloudVisitorID(function () {
                                  y.getAnalyticsVisitorID(e, !0);
                                })),
                              r || n)
                            ) {
                              var a = n ? y.marketingCloudServer : y.trackingServer,
                                i = '';
                              y.loadSSL &&
                                (n
                                  ? y.marketingCloudServerSecure &&
                                    (a = y.marketingCloudServerSecure)
                                  : y.trackingServerSecure && (a = y.trackingServerSecure));
                              var o = {};
                              if (a) {
                                var s = 'http' + (y.loadSSL ? 's' : '') + '://' + a + '/id',
                                  l =
                                    'd_visid_ver=' +
                                    y.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(y.marketingCloudOrgID) +
                                    (r ? '&mid=' + encodeURIComponent(r) : '') +
                                    (y.idSyncDisable3rdPartySyncing || y.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  c = [
                                    's_c_il',
                                    y._in,
                                    '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (i =
                                  s +
                                  '?' +
                                  l +
                                  '&callback=s_c_il%5B' +
                                  y._in +
                                  '%5D._set' +
                                  (n ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (o.corsUrl = s + '?' + l),
                                  (o.callback = c);
                              }
                              return (o.url = i), y._getRemoteField(n ? E : w, i, e, t, o);
                            }
                            return '';
                          }),
                          (y.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              y.getMarketingCloudVisitorID(function () {
                                y.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var n = y._getField(w);
                              if (
                                (!n &&
                                  F.isTrackingServerPopulated() &&
                                  (n = y.getAnalyticsVisitorID(function () {
                                    y.getAudienceManagerLocationHint(e, !0);
                                  })),
                                n || !F.isTrackingServerPopulated())
                              ) {
                                var r = y._getAudienceManagerURLData(),
                                  a = r.url;
                                return y._getRemoteField('MCAAMLH', a, e, t, r);
                              }
                            }
                            return '';
                          }),
                          (y.getLocationHint = y.getAudienceManagerLocationHint),
                          (y.getAudienceManagerBlob = function (e, t) {
                            if (
                              y.getMarketingCloudVisitorID(function () {
                                y.getAudienceManagerBlob(e, !0);
                              })
                            ) {
                              var n = y._getField(w);
                              if (
                                (!n &&
                                  F.isTrackingServerPopulated() &&
                                  (n = y.getAnalyticsVisitorID(function () {
                                    y.getAudienceManagerBlob(e, !0);
                                  })),
                                n || !F.isTrackingServerPopulated())
                              ) {
                                var r = y._getAudienceManagerURLData(),
                                  a = r.url;
                                return (
                                  y._customerIDsHashChanged && y._setFieldExpire(P, -1),
                                  y._getRemoteField(P, a, e, t, r)
                                );
                              }
                            }
                            return '';
                          }),
                          (y._supplementalDataIDCurrent = ''),
                          (y._supplementalDataIDCurrentConsumed = {}),
                          (y._supplementalDataIDLast = ''),
                          (y._supplementalDataIDLastConsumed = {});
                        var N = !(y.getSupplementalDataID = function (e, t) {
                          y._supplementalDataIDCurrent ||
                            t ||
                            (y._supplementalDataIDCurrent = y._generateID(1));
                          var n = y._supplementalDataIDCurrent;
                          return (
                            y._supplementalDataIDLast && !y._supplementalDataIDLastConsumed[e]
                              ? ((n = y._supplementalDataIDLast),
                                (y._supplementalDataIDLastConsumed[e] = !0))
                              : n &&
                                (y._supplementalDataIDCurrentConsumed[e] &&
                                  ((y._supplementalDataIDLast = y._supplementalDataIDCurrent),
                                  (y._supplementalDataIDLastConsumed =
                                    y._supplementalDataIDCurrentConsumed),
                                  (y._supplementalDataIDCurrent = n = t ? '' : y._generateID(1)),
                                  (y._supplementalDataIDCurrentConsumed = {})),
                                n && (y._supplementalDataIDCurrentConsumed[e] = !0)),
                            n
                          );
                        });
                        (y._liberatedOptOut = null),
                          (y.getOptOut = function (e, t) {
                            var n = y._getAudienceManagerURLData('_setMarketingCloudFields'),
                              r = n.url;
                            if (d()) return y._getRemoteField('MCOPTOUT', r, e, t, n);
                            if (
                              (y._registerCallback('liberatedOptOut', e),
                              null !== y._liberatedOptOut)
                            )
                              return (
                                y._callAllCallbacks('liberatedOptOut', [y._liberatedOptOut]),
                                (N = !1),
                                y._liberatedOptOut
                              );
                            if (N) return null;
                            N = !0;
                            var a = 'liberatedGetOptOut';
                            return (
                              (n.corsUrl = n.corsUrl.replace(
                                /\.demdex\.net\/id\?/,
                                '.demdex.net/optOutStatus?'
                              )),
                              (n.callback = [a]),
                              (W[a] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    n,
                                    r = q.parseOptOut(e, t, x);
                                  (t = r.optOut),
                                    (n = 1000 * r.d_ottl),
                                    (y._liberatedOptOut = t),
                                    setTimeout(function () {
                                      y._liberatedOptOut = null;
                                    }, n);
                                }
                                y._callAllCallbacks('liberatedOptOut', [t]), (N = !1);
                              }),
                              V.fireCORS(n),
                              null
                            );
                          }),
                          (y.isOptedOut = function (n, r, e) {
                            r || (r = D.OptOut.GLOBAL);
                            var t = y.getOptOut(function (e) {
                              var t = e === D.OptOut.GLOBAL || 0 <= e.indexOf(r);
                              y._callCallback(n, [t]);
                            }, e);
                            return t ? t === D.OptOut.GLOBAL || 0 <= t.indexOf(r) : null;
                          }),
                          (y._fields = null),
                          (y._fieldsExpired = null),
                          (y._hash = function (e) {
                            var t,
                              n = 0;
                            if (e)
                              for (t = 0; t < e.length; t++)
                                (n = (n << 5) - n + e.charCodeAt(t)), (n &= n);
                            return n;
                          }),
                          (y._generateID = Z),
                          (y._generateLocalMID = function () {
                            var e = y._generateID(0);
                            return (H.isClientSideMarketingCloudVisitorID = !0), e;
                          }),
                          (y._callbackList = null),
                          (y._callCallback = function (e, t) {
                            try {
                              'function' == typeof e ? e.apply(I, t) : e[1].apply(e[0], t);
                            } catch (e) {}
                          }),
                          (y._registerCallback = function (e, t) {
                            t &&
                              (null == y._callbackList && (y._callbackList = {}),
                              null == y._callbackList[e] && (y._callbackList[e] = []),
                              y._callbackList[e].push(t));
                          }),
                          (y._callAllCallbacks = function (e, t) {
                            if (null != y._callbackList) {
                              var n = y._callbackList[e];
                              if (n) for (; 0 < n.length; ) y._callCallback(n.shift(), t);
                            }
                          }),
                          (y._addQuerystringParam = function (e, t, n, r) {
                            var a = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                              i = F.parseHash(e),
                              o = F.hashlessUrl(e);
                            if (-1 === o.indexOf('?')) return o + '?' + a + i;
                            var s = o.split('?'),
                              l = s[0] + '?',
                              c = s[1];
                            return l + F.addQueryParamAtLocation(c, a, r) + i;
                          }),
                          (y._extractParamFromUri = function (e, t) {
                            var n = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                            if (n && n.length) return decodeURIComponent(n[1]);
                          }),
                          (y._parseAdobeMcFromUrl = t(te.ADOBE_MC)),
                          (y._parseAdobeMcSdidFromUrl = t(te.ADOBE_MC_SDID)),
                          (y._attemptToPopulateSdidFromUrl = function (e) {
                            var t = y._parseAdobeMcSdidFromUrl(e),
                              n = 1000000000;
                            t && t.TS && (n = F.getTimestampInSeconds() - t.TS),
                              t &&
                                t.SDID &&
                                t.MCORGID === r &&
                                n < y.sdidParamExpiry &&
                                ((y._supplementalDataIDCurrent = t.SDID),
                                (y._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (y._attemptToPopulateIdsFromUrl = function () {
                            var e = y._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var t = F.getTimestampInSeconds() - e.TS;
                              if (Math.floor(t / 60) > te.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== r)
                                return;
                              a(e);
                            }
                          }),
                          (y._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((r = e),
                                  (e = F.isObject(r) ? r : JSON.parse(r))[y.marketingCloudOrgID])
                                ) {
                                  var t = e[y.marketingCloudOrgID];
                                  (n = t.customerIDs),
                                    F.isObject(n) && y.setCustomerIDs(n),
                                    i(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                            var n, r;
                          }),
                          (y._timeout = null),
                          (y._loadData = function (e, t, n, r) {
                            (t = y._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (r.url = y._addQuerystringParam(r.url, 'd_fieldgroup', e, 1)),
                              (r.corsUrl = y._addQuerystringParam(
                                r.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (H.fieldGroupObj[e] = !0),
                              r === Object(r) &&
                                r.corsUrl &&
                                'XMLHttpRequest' === V.corsMetadata.corsType &&
                                V.fireCORS(r, n, e);
                          }),
                          (y._clearTimeout = function (e) {
                            null != y._timeout &&
                              y._timeout[e] &&
                              (clearTimeout(y._timeout[e]), (y._timeout[e] = 0));
                          }),
                          (y._settingsDigest = 0),
                          (y._getSettingsDigest = function () {
                            if (!y._settingsDigest) {
                              var e = y.version;
                              y.audienceManagerServer && (e += '|' + y.audienceManagerServer),
                                y.audienceManagerServerSecure &&
                                  (e += '|' + y.audienceManagerServerSecure),
                                (y._settingsDigest = y._hash(e));
                            }
                            return y._settingsDigest;
                          }),
                          (y._readVisitorDone = !1),
                          (y._readVisitor = function () {
                            if (!y._readVisitorDone) {
                              y._readVisitorDone = !0;
                              var e,
                                t,
                                n,
                                r,
                                a,
                                i,
                                o = y._getSettingsDigest(),
                                s = !1,
                                l = y.cookieRead(y.cookieName),
                                c = new Date();
                              if (
                                (l ||
                                  _ ||
                                  y.discardTrackingServerECID ||
                                  (l = y.cookieRead(te.FIRST_PARTY_SERVER_COOKIE)),
                                null == y._fields && (y._fields = {}),
                                l && 'T' !== l)
                              )
                                for (
                                  (l = l.split('|'))[0].match(/^[\-0-9]+$/) &&
                                    (parseInt(l[0], 10) !== o && (s = !0), l.shift()),
                                    l.length % 2 == 1 && l.pop(),
                                    e = 0;
                                  e < l.length;
                                  e += 2
                                )
                                  (n = (t = l[e].split('-'))[0]),
                                    (r = l[e + 1]),
                                    1 < t.length
                                      ? ((a = parseInt(t[1], 10)), (i = 0 < t[1].indexOf('s')))
                                      : ((a = 0), (i = !1)),
                                    s &&
                                      ('MCCIDH' === n && (r = ''),
                                      0 < a && (a = c.getTime() / 1000 - 60)),
                                    n &&
                                      r &&
                                      (y._setField(n, r, 1),
                                      0 < a &&
                                        ((y._fields['expire' + n] = a + (i ? 's' : '')),
                                        (c.getTime() >= 1000 * a ||
                                          (i && !y.cookieRead(y.sessionCookieName))) &&
                                          (y._fieldsExpired || (y._fieldsExpired = {}),
                                          (y._fieldsExpired[n] = !0))));
                              !y._getField(w) &&
                                F.isTrackingServerPopulated() &&
                                (l = y.cookieRead('s_vi')) &&
                                1 < (l = l.split('|')).length &&
                                0 <= l[0].indexOf('v1') &&
                                (0 <= (e = (r = l[1]).indexOf('[')) && (r = r.substring(0, e)),
                                r && r.match(te.VALID_VISITOR_ID_REGEX) && y._setField(w, r));
                            }
                          }),
                          (y._appendVersionTo = function (e) {
                            var t = 'vVersion|' + y.version,
                              n = e ? y._getCookieVersion(e) : null;
                            return (
                              n
                                ? K.areVersionsDifferent(n, y.version) &&
                                  (e = e.replace(te.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (y._writeVisitor = function () {
                            var e,
                              t,
                              n = y._getSettingsDigest();
                            for (e in y._fields)
                              j(e) &&
                                y._fields[e] &&
                                'expire' !== e.substring(0, 6) &&
                                ((t = y._fields[e]),
                                (n +=
                                  (n ? '|' : '') +
                                  e +
                                  (y._fields['expire' + e] ? '-' + y._fields['expire' + e] : '') +
                                  '|' +
                                  t));
                            (n = y._appendVersionTo(n)), y.cookieWrite(y.cookieName, n, 1);
                          }),
                          (y._getField = function (e, t) {
                            return null == y._fields ||
                              (!t && y._fieldsExpired && y._fieldsExpired[e])
                              ? null
                              : y._fields[e];
                          }),
                          (y._setField = function (e, t, n) {
                            null == y._fields && (y._fields = {}),
                              (y._fields[e] = t),
                              n || y._writeVisitor();
                          }),
                          (y._getFieldList = function (e, t) {
                            var n = y._getField(e, t);
                            return n ? n.split('*') : null;
                          }),
                          (y._setFieldList = function (e, t, n) {
                            y._setField(e, t ? t.join('*') : '', n);
                          }),
                          (y._getFieldMap = function (e, t) {
                            var n = y._getFieldList(e, t);
                            if (n) {
                              var r,
                                a = {};
                              for (r = 0; r < n.length; r += 2) a[n[r]] = n[r + 1];
                              return a;
                            }
                            return null;
                          }),
                          (y._setFieldMap = function (e, t, n) {
                            var r,
                              a = null;
                            if (t) for (r in ((a = []), t)) j(r) && (a.push(r), a.push(t[r]));
                            y._setFieldList(e, a, n);
                          }),
                          (y._setFieldExpire = function (e, t, n) {
                            var r = new Date();
                            r.setTime(r.getTime() + 1000 * t),
                              null == y._fields && (y._fields = {}),
                              (y._fields['expire' + e] =
                                Math.floor(r.getTime() / 1000) + (n ? 's' : '')),
                              t < 0
                                ? (y._fieldsExpired || (y._fieldsExpired = {}),
                                  (y._fieldsExpired[e] = !0))
                                : y._fieldsExpired && (y._fieldsExpired[e] = !1),
                              n &&
                                (y.cookieRead(y.sessionCookieName) ||
                                  y.cookieWrite(y.sessionCookieName, '1'));
                          }),
                          (y._findVisitorID = function (e) {
                            return (
                              e &&
                                ('object' === B(e) &&
                                  (e = e.d_mid
                                    ? e.d_mid
                                    : e.visitorID
                                    ? e.visitorID
                                    : e.id
                                    ? e.id
                                    : e.uuid
                                    ? e.uuid
                                    : '' + e),
                                e && 'NOTARGET' === (e = e.toUpperCase()) && (e = x),
                                (e && (e === x || e.match(te.VALID_VISITOR_ID_REGEX))) ||
                                  (e = '')),
                              e
                            );
                          }),
                          (y._setFields = function (e, t) {
                            if (
                              (y._clearTimeout(e),
                              null != y._loading && (y._loading[e] = !1),
                              H.fieldGroupObj[e] && H.setState(e, !1),
                              e === A)
                            ) {
                              !0 !== H.isClientSideMarketingCloudVisitorID &&
                                (H.isClientSideMarketingCloudVisitorID = !1);
                              var n = y._getField(E);
                              if (!n || y.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(n = 'object' === B(t) && t.mid ? t.mid : y._findVisitorID(t))
                                ) {
                                  if (
                                    y._use1stPartyMarketingCloudServer &&
                                    !y.tried1stPartyMarketingCloudServer
                                  )
                                    return (
                                      (y.tried1stPartyMarketingCloudServer = !0),
                                      void y.getAnalyticsVisitorID(null, !1, !0)
                                    );
                                  n = y._generateLocalMID();
                                }
                                y._setField(E, n);
                              }
                              (n && n !== x) || (n = ''),
                                'object' === B(t) &&
                                  ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                    y._setFields(M, t),
                                  y._use1stPartyMarketingCloudServer &&
                                    t.mid &&
                                    y._setFields(O, { id: t.id })),
                                y._callAllCallbacks(E, [n]);
                            }
                            if (e === M && 'object' === B(t)) {
                              var r = 604800;
                              null != t.id_sync_ttl &&
                                t.id_sync_ttl &&
                                (r = parseInt(t.id_sync_ttl, 10));
                              var a = R.getRegionAndCheckIfChanged(t, r);
                              y._callAllCallbacks('MCAAMLH', [a]);
                              var i = y._getField(P);
                              (t.d_blob || t.blob) &&
                                ((i = t.d_blob) || (i = t.blob),
                                y._setFieldExpire(P, r),
                                y._setField(P, i)),
                                i || (i = ''),
                                y._callAllCallbacks(P, [i]),
                                !t.error_msg &&
                                  y._newCustomerIDsHash &&
                                  y._setField('MCCIDH', y._newCustomerIDsHash);
                            }
                            if (e === O) {
                              var o = y._getField(w);
                              (o && !y.overwriteCrossDomainMCIDAndAID) ||
                                ((o = y._findVisitorID(t))
                                  ? o !== x && y._setFieldExpire(P, -1)
                                  : (o = x),
                                y._setField(w, o)),
                                (o && o !== x) || (o = ''),
                                y._callAllCallbacks(w, [o]);
                            }
                            if (y.idSyncDisableSyncs || y.disableIdSyncs)
                              R.idCallNotProcesssed = !0;
                            else {
                              R.idCallNotProcesssed = !1;
                              var s = {};
                              (s.ibs = t.ibs), (s.subdomain = t.subdomain), R.processIDCallData(s);
                            }
                            if (t === Object(t)) {
                              var l, c;
                              d() && y.isAllowed() && (l = y._getField('MCOPTOUT'));
                              var u = q.parseOptOut(t, l, x);
                              (l = u.optOut),
                                (c = u.d_ottl),
                                y._setFieldExpire('MCOPTOUT', c, !0),
                                y._setField('MCOPTOUT', l),
                                y._callAllCallbacks('MCOPTOUT', [l]);
                            }
                          }),
                          (y._loading = null),
                          (y._getRemoteField = function (n, e, t, r, a) {
                            var i,
                              o = '',
                              s = F.isFirstPartyAnalyticsVisitorIDCall(n),
                              l = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && y.isAllowed())
                              if (
                                (y._readVisitor(),
                                !(
                                  !(o = y._getField(n, !0 === l[n])) ||
                                  (y._fieldsExpired && y._fieldsExpired[n])
                                ) ||
                                  (y.disableThirdPartyCalls && !s))
                              )
                                o ||
                                  (n === E
                                    ? (y._registerCallback(n, t),
                                      (o = y._generateLocalMID()),
                                      y.setMarketingCloudVisitorID(o))
                                    : n === w
                                    ? (y._registerCallback(n, t),
                                      (o = ''),
                                      y.setAnalyticsVisitorID(o))
                                    : (r = !(o = '')));
                              else if (
                                (n === E || 'MCOPTOUT' === n
                                  ? (i = A)
                                  : 'MCAAMLH' === n || n === P
                                  ? (i = M)
                                  : n === w && (i = O),
                                i)
                              )
                                return (
                                  !e ||
                                    (null != y._loading && y._loading[i]) ||
                                    (null == y._loading && (y._loading = {}),
                                    (y._loading[i] = !0),
                                    i === M && (S = 0),
                                    y._loadData(
                                      i,
                                      e,
                                      function (e) {
                                        if (!y._getField(n)) {
                                          e && H.setState(i, !0);
                                          var t = '';
                                          n === E
                                            ? (t = y._generateLocalMID())
                                            : i === M && (t = { error_msg: 'timeout' }),
                                            y._setFields(i, t);
                                        }
                                      },
                                      a
                                    )),
                                  y._registerCallback(n, t),
                                  o || (e || y._setFields(i, { id: x }), '')
                                );
                            return (
                              (n !== E && n !== w) || o !== x || (r = !(o = '')),
                              t && r && y._callCallback(t, [o]),
                              o
                            );
                          }),
                          (y._setMarketingCloudFields = function (e) {
                            y._readVisitor(), y._setFields(A, e);
                          }),
                          (y._mapCustomerIDs = function (e) {
                            y.getAudienceManagerBlob(e, !0);
                          }),
                          (y._setAnalyticsFields = function (e) {
                            y._readVisitor(), y._setFields(O, e);
                          }),
                          (y._setAudienceManagerFields = function (e) {
                            y._readVisitor(), y._setFields(M, e);
                          }),
                          (y._getAudienceManagerURLData = function (e) {
                            var t = y.audienceManagerServer,
                              n = '',
                              r = y._getField(E),
                              a = y._getField(P, !0),
                              i = y._getField(w),
                              o = i && i !== x ? '&d_cid_ic=AVID%01' + encodeURIComponent(i) : '';
                            if (
                              (y.loadSSL &&
                                y.audienceManagerServerSecure &&
                                (t = y.audienceManagerServerSecure),
                              t)
                            ) {
                              var s,
                                l,
                                c,
                                u = y.getCustomerIDs(!0);
                              if (u)
                                for (l in u) {
                                  var d = u[l];
                                  if (!q.isObjectEmpty(d)) {
                                    var f = 'nameSpaces' === l ? '&d_cid_ns=' : '&d_cid_ic=';
                                    for (s in d)
                                      j(s) &&
                                        ((c = d[s]),
                                        (o +=
                                          f +
                                          encodeURIComponent(s) +
                                          '%01' +
                                          encodeURIComponent(c.id ? c.id : '') +
                                          (c.authState ? '%01' + c.authState : '')));
                                  }
                                }
                              e || (e = '_setAudienceManagerFields');
                              var p = 'http' + (y.loadSSL ? 's' : '') + '://' + t + '/id',
                                g =
                                  'd_visid_ver=' +
                                  y.version +
                                  (b && -1 !== p.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_consent=' + b
                                    : '') +
                                  (S && -1 !== p.indexOf('demdex.net') ? '&d_cf=' + S : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!r && y._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(y.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (y.idSyncContainerID || 0) +
                                  (r ? '&d_mid=' + encodeURIComponent(r) : '') +
                                  (y.idSyncDisable3rdPartySyncing || y.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === T
                                    ? '&d_coop_safe=1'
                                    : !1 === T
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (a ? '&d_blob=' + encodeURIComponent(a) : '') +
                                  o,
                                m = ['s_c_il', y._in, e];
                              return {
                                url: (n = p + '?' + g + '&d_cb=s_c_il%5B' + y._in + '%5D.' + e),
                                corsUrl: p + '?' + g,
                                callback: m,
                              };
                            }
                            return { url: n };
                          }),
                          (y.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [E, y._getField(E)],
                                [w, y._getField(w)],
                                ['MCORGID', y.marketingCloudOrgID],
                              ];
                              return y._addQuerystringParam(e, te.ADOBE_MC, o(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (y.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || y.getSupplementalDataID(F.generateRandomString(), !0)))
                              return e;
                            try {
                              var n = o([
                                ['SDID', t],
                                ['MCORGID', y.marketingCloudOrgID],
                              ]);
                              return y._addQuerystringParam(e, te.ADOBE_MC_SDID, n);
                            } catch (t) {
                              return e;
                            }
                          });
                        var F = {
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
                              e === w &&
                              (t || (t = y.trackingServer),
                              n || (n = y.trackingServerSecure),
                              !('string' != typeof (r = y.loadSSL ? n : t) || !r.length) &&
                                r.indexOf('2o7.net') < 0 &&
                                r.indexOf('omtrdc.net') < 0)
                            );
                            var r;
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            X.remove(e, { domain: y.cookieDomain });
                          },
                          isTrackingServerPopulated: function () {
                            return !!y.trackingServer || !!y.trackingServerSecure;
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
                        y._helpers = F;
                        var R = ne(y, D);
                        (y._destinationPublishing = R), (y.timeoutMetricsLog = []);
                        var U,
                          H = {
                            isClientSideMarketingCloudVisitorID: null,
                            MCIDCallTimedOut: null,
                            AnalyticsIDCallTimedOut: null,
                            AAMIDCallTimedOut: null,
                            fieldGroupObj: {},
                            setState: function (e, t) {
                              switch (e) {
                                case A:
                                  !1 === t
                                    ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1)
                                    : (this.MCIDCallTimedOut = t);
                                  break;
                                case O:
                                  !1 === t
                                    ? !0 !== this.AnalyticsIDCallTimedOut &&
                                      (this.AnalyticsIDCallTimedOut = !1)
                                    : (this.AnalyticsIDCallTimedOut = t);
                                  break;
                                case M:
                                  !1 === t
                                    ? !0 !== this.AAMIDCallTimedOut &&
                                      (this.AAMIDCallTimedOut = !1)
                                    : (this.AAMIDCallTimedOut = t);
                              }
                            },
                          };
                        (y.isClientSideMarketingCloudVisitorID = function () {
                          return H.isClientSideMarketingCloudVisitorID;
                        }),
                          (y.MCIDCallTimedOut = function () {
                            return H.MCIDCallTimedOut;
                          }),
                          (y.AnalyticsIDCallTimedOut = function () {
                            return H.AnalyticsIDCallTimedOut;
                          }),
                          (y.AAMIDCallTimedOut = function () {
                            return H.AAMIDCallTimedOut;
                          }),
                          (y.idSyncGetOnPageSyncInfo = function () {
                            return y._readVisitor(), y._getField('MCSYNCSOP');
                          }),
                          (y.idSyncByURL = function (e) {
                            if (!y.isOptedOut()) {
                              var t = s(e || {});
                              if (t.error) return t.error;
                              var n,
                                r,
                                a = e.url,
                                i = encodeURIComponent,
                                o = R;
                              return (
                                (a = a.replace(/^https:/, '').replace(/^http:/, '')),
                                (n = q.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (r = ['ibs', i(e.dpid), 'img', i(a), t.ttl, '', n]),
                                o.addMessage(r.join('|')),
                                o.requestToProcess(),
                                'Successfully queued'
                              );
                            }
                          }),
                          (y.idSyncByDataSource = function (e) {
                            if (!y.isOptedOut())
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  y.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                          }),
                          Le(y, R),
                          (y._getCookieVersion = function (e) {
                            e = e || y.cookieRead(y.cookieName);
                            var t = te.VERSION_REGEX.exec(e);
                            return t && 1 < t.length ? t[1] : null;
                          }),
                          (y._resetAmcvCookie = function (e) {
                            var t = y._getCookieVersion();
                            (t && !K.isLessThan(t, e)) || F.removeCookie(y.cookieName);
                          }),
                          (y.setAsCoopSafe = function () {
                            T = !0;
                          }),
                          (y.setAsCoopUnsafe = function () {
                            T = !1;
                          }),
                          (function () {
                            if (((y.configs = Object.create(null)), F.isObject(n)))
                              for (var e in n) j(e) && ((y[e] = n[e]), (y.configs[e] = n[e]));
                          })(),
                          c(),
                          (y.init = function () {
                            (l() &&
                              (v.optIn.fetchPermissions(m, !0),
                              !v.optIn.isApproved(v.optIn.Categories.ECID))) ||
                              U ||
                              ((U = !0),
                              (function () {
                                if (F.isObject(n)) {
                                  (y.idSyncContainerID = y.idSyncContainerID || 0),
                                    (T =
                                      'boolean' == typeof y.isCoopSafe
                                        ? y.isCoopSafe
                                        : F.parseBoolean(y.isCoopSafe)),
                                    y.resetBeforeVersion &&
                                      y._resetAmcvCookie(y.resetBeforeVersion),
                                    y._attemptToPopulateIdsFromUrl(),
                                    y._attemptToPopulateSdidFromUrl(),
                                    y._readVisitor();
                                  var e = y._getField(k),
                                    t = Math.ceil(new Date().getTime() / te.MILLIS_PER_DAY);
                                  y.idSyncDisableSyncs ||
                                    y.disableIdSyncs ||
                                    !R.canMakeSyncIDCall(e, t) ||
                                    (y._setFieldExpire(P, -1), y._setField(k, t)),
                                    y.getMarketingCloudVisitorID(),
                                    y.getAudienceManagerLocationHint(),
                                    y.getAudienceManagerBlob(),
                                    y._mergeServerState(y.serverState);
                                } else
                                  y._attemptToPopulateIdsFromUrl(),
                                    y._attemptToPopulateSdidFromUrl();
                              })(),
                              (function () {
                                if (!y.idSyncDisableSyncs && !y.disableIdSyncs) {
                                  R.checkDPIframeSrc();
                                  var e = function () {
                                    var e = R;
                                    e.readyToAttachIframe() && e.attachIframe();
                                  };
                                  I.addEventListener('load', function () {
                                    (D.windowLoaded = !0), e();
                                  });
                                  try {
                                    Q.receiveMessage(function (e) {
                                      R.receiveMessage(e.data);
                                    }, R.iframeHost);
                                  } catch (e) {}
                                }
                              })(),
                              y.whitelistIframeDomains &&
                                te.POST_MESSAGE_ENABLED &&
                                ((y.whitelistIframeDomains =
                                  y.whitelistIframeDomains instanceof Array
                                    ? y.whitelistIframeDomains
                                    : [y.whitelistIframeDomains]),
                                y.whitelistIframeDomains.forEach(function (e) {
                                  var t = new Y(r, e),
                                    n = J(y, t);
                                  Q.receiveMessage(n, e);
                                })));
                          });
                      };
                      He.config = U;
                      var Be = (W.Visitor = He),
                        We = function (a) {
                          if (q.isObject(a))
                            return Object.keys(a)
                              .filter(function (e) {
                                return '' !== a[e];
                              })
                              .reduce(function (e, t) {
                                var n = U.normalizeConfig(a[t]),
                                  r = q.normalizeBoolean(n);
                                return (e[t] = r), e;
                              }, Object.create(null));
                        },
                        Ge = Ve.OptIn,
                        qe = Ve.IabPlugin;
                      (Be.getInstance = function (r, e) {
                        if (!r) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        r.indexOf('@') < 0 && (r += '@AdobeOrg');
                        var t = (function () {
                          var e = W.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var n = e[t];
                              if (n && 'Visitor' === n._c && n.marketingCloudOrgID === r) return n;
                            }
                        })();
                        if (t) return t;
                        var a,
                          n = We(e);
                        (a = n || {}),
                          (W.adobe.optIn =
                            W.adobe.optIn ||
                            (function () {
                              var e = q.pluck(a, [
                                  'doesOptInApply',
                                  'previousPermissions',
                                  'preOptInApprovals',
                                  'isOptInStorageEnabled',
                                  'optInStorageExpiry',
                                  'isIabContext',
                                ]),
                                t = a.optInCookieDomain || a.cookieDomain;
                              (t = (t = t || $()) === window.location.hostname ? '' : t),
                                (e.optInCookieDomain = t);
                              var n = new Ge(e, { cookies: X });
                              if (e.isIabContext && e.doesOptInApply) {
                                var r = new qe();
                                n.registerPlugin(r);
                              }
                              return n;
                            })());
                        var i = r.split('').reverse().join(''),
                          o = new Be(r, null, i);
                        q.isObject(n) && n.cookieDomain && (o.cookieDomain = n.cookieDomain),
                          W.s_c_il.splice(--W.s_c_in, 1);
                        var s = q.getIeVersion();
                        if ('number' == typeof s && s < 10)
                          return o._helpers.replaceMethodsWithFunction(o, function () {});
                        var l,
                          c =
                            (function () {
                              try {
                                return W.self !== W.parent;
                              } catch (r) {
                                return !0;
                              }
                            })() &&
                            ((l = o).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== l.cookieRead('TEST_AMCV_COOKIE') ||
                              (l._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            W.parent
                              ? new P(r, n, o, W.parent)
                              : new Be(r, n, i);
                        return (o = null), c.init(), c;
                      }),
                        (function () {
                          function e () {
                            Be.windowLoaded = !0;
                          }
                          W.addEventListener
                            ? W.addEventListener('load', e)
                            : W.attachEvent && W.attachEvent('onload', e),
                            (Be.codeLoadEnd = new Date().getTime());
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
              orgId: 'DA11332E5321D0550A490D45@AdobeOrg',
              variables: [
                { name: 'trackingServer', value: 'comcastcom.d1.sc.omtrdc.net' },
                { name: 'trackingServerSecure', value: 'comcastcom.d1.sc.omtrdc.net' },
                { name: 'disableIdSyncs', value: '%utility | isPrivacyPage%' },
                { name: 'disableThirdPartyCalls', value: '%utility | isPrivacyPage%' },
              ],
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP6437fa78ab024946a211397689052381/',
          },
          'data-layer-test': {
            displayName: 'Data Layer Test',
            modules: {
              'data-layer-test/src/lib/dataElements/dataTestWconfig.js': {
                name: 'data-test-wconfig',
                displayName: 'Data Test w/Config',
                script: function (e) {
                  'use strict';
                  function o (e, t, r) {
                    return String(t)
                      .split('.')
                      .reduce(function (e, t) {
                        try {
                          return e[t] === undefined ? r : e[t];
                        } catch (n) {
                          return r;
                        }
                      }, e);
                  }
                  function s (e, t, n) {
                    n = n || {};
                    var r = o(e, t[0]),
                      a = n[t[0]];
                    if (!a || !r) return t[0] ? r : e;
                    switch (((t = t.slice(1)), a.action)) {
                      case 'join':
                        return r
                          .map(function (e) {
                            return s(e, t, n);
                          })
                          .join(a.separator);
                      case 'pluck':
                        var i = 0;
                        switch (a.item) {
                          case 'last':
                            i = r.length - 1;
                            break;
                          case 'specific':
                            i = a.index;
                        }
                        return s(r[i], t, n);
                    }
                  }
                  e.exports = function (e) {
                    var t = o(e, 'selectedFields', []),
                      n = o(e, 'fieldSeparator', '');
                    return t
                      .map(function (e) {
                        return s(
                          window.digitalData,
                          e.selectedField.name.split('[n]').map(function (e) {
                            return e.startsWith('.') ? e.substring(1) : e;
                          }),
                          e.options
                        );
                      })
                      .join(n);
                  };
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP4ab17e00b57d4f7e9f44f70a3c51c448/',
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
              'core/src/lib/dataElements/constant.js': {
                name: 'constant',
                displayName: 'Constant',
                script: function (e) {
                  'use strict';
                  e.exports = function (e) {
                    return e.value;
                  };
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
                        var r = { identifier: e, detail: t };
                        n.forEach(function (e) {
                          e(r);
                        });
                        var a = [
                          'Rules using the direct call event type with identifier "' +
                            e +
                            '" have been triggered' +
                            (t ? ' with additional detail:' : '.'),
                        ];
                        t && a.push(t), i.logger.log.apply(i.logger, a);
                      } else
                        i.logger.log('"' + e + '" does not match any direct call identifiers.');
                    }),
                    (e.exports = function (e, t) {
                      var n = o[e.identifier];
                      n || (n = o[e.identifier] = []), n.push(t);
                    });
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, n, i) {
                  'use strict';
                  var o,
                    r,
                    a,
                    s,
                    l = n('@adobe/reactor-document'),
                    c = n('@adobe/reactor-promise'),
                    u = n('./helpers/decorateCode'),
                    d = n('./helpers/loadCodeSequentially'),
                    f = n('../../../node_modules/postscribe/dist/postscribe'),
                    p = n('./helpers/unescapeHtmlCode'),
                    g =
                      ((r = function (e) {
                        f(l.body, e, {
                          beforeWriteToken: function (t) {
                            var e = t.tagName && t.tagName.toLowerCase();
                            return (
                              o && 'script' === e && (t.attrs.nonce = o),
                              ('script' !== e && 'style' !== e) ||
                                (Object.keys(t.attrs || {}).forEach(function (e) {
                                  t.attrs[e] = p(t.attrs[e]);
                                }),
                                t.src && (t.src = p(t.src))),
                              t
                            );
                          },
                          error: function (e) {
                            i.logger.error(e.msg);
                          },
                        });
                      }),
                      (a = []),
                      (s = function () {
                        if (l.body) for (; a.length; ) r(a.shift());
                        else setTimeout(s, 20);
                      }),
                      function (e) {
                        a.push(e), s();
                      }),
                    m = (function () {
                      if (l.currentScript) return l.currentScript.async;
                      for (var e = l.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src)) return n.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    var n;
                    o = i.getExtensionSettings().cspNonce;
                    var r = { settings: e, event: t },
                      a = r.settings.source;
                    if (a)
                      return r.settings.isExternal
                        ? d(a).then(function (e) {
                            return e ? ((n = u(r, e)), g(n.code), n.promise) : c.resolve();
                          })
                        : ((n = u(r, a)),
                          m || 'loading' !== l.readyState
                            ? g(n.code)
                            : l.write && !1 === i.propertySettings.ruleComponentSequencingEnabled
                            ? l.write(n.code)
                            : g(n.code),
                          n.promise);
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
                    a = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    },
                    i = function (e, t) {
                      return t && a(e) ? e.toLowerCase() : e;
                    },
                    o = function (e) {
                      return r(e) ? String(e) : e;
                    },
                    s = function (e) {
                      return a(e) ? Number(e) : e;
                    },
                    t = function (r) {
                      return function (e, t, n) {
                        return (e = o(e)), (t = o(t)), a(e) && a(t) && r(e, t, n);
                      };
                    },
                    n = function (n) {
                      return function (e, t) {
                        return (e = s(e)), (t = s(t)), r(e) && r(t) && n(e, t);
                      };
                    },
                    l = function (r) {
                      return function (e, t, n) {
                        return r(i(e, n), i(t, n));
                      };
                    },
                    c = {
                      equals: l(function (e, t) {
                        return e == t;
                      }),
                      doesNotEqual: function () {
                        return !c.equals.apply(null, arguments);
                      },
                      contains: t(
                        l(function (e, t) {
                          return -1 !== e.indexOf(t);
                        })
                      ),
                      doesNotContain: function () {
                        return !c.contains.apply(null, arguments);
                      },
                      startsWith: t(
                        l(function (e, t) {
                          return 0 === e.indexOf(t);
                        })
                      ),
                      doesNotStartWith: function () {
                        return !c.startsWith.apply(null, arguments);
                      },
                      endsWith: t(
                        l(function (e, t) {
                          return e.substring(e.length - t.length, e.length) === t;
                        })
                      ),
                      doesNotEndWith: function () {
                        return !c.endsWith.apply(null, arguments);
                      },
                      matchesRegex: t(function (e, t, n) {
                        return new RegExp(t, n ? 'i' : '').test(e);
                      }),
                      doesNotMatchRegex: function () {
                        return !c.matchesRegex.apply(null, arguments);
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
                    return c[e.comparison.operator](
                      e.leftOperand,
                      e.rightOperand,
                      Boolean(e.comparison.caseInsensitive)
                    );
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
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./decorators/decorateGlobalJavaScriptCode'),
                    a = n('./decorators/decorateNonGlobalJavaScriptCode'),
                    i = {
                      javascript: function (e, t) {
                        return e.settings.global ? r(e, t) : a(e, t);
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
                  var r = n('@adobe/reactor-promise'),
                    a = n('./getSourceByUrl'),
                    i = r.resolve();
                  e.exports = function (t) {
                    var e = new r(function (n) {
                      var e = a(t);
                      r.all([e, i]).then(function (e) {
                        var t = e[0];
                        n(t);
                      });
                    });
                    return (i = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (n, r) {
                  !(function a (e, t) {
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
                        if (a[e]) return a[e].exports;
                        var t = (a[e] = { exports: {}, id: e, loaded: !1 });
                        return n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports;
                      }
                      var a = {};
                      return (r.m = n), (r.c = a), (r.p = ''), r(0);
                    })([
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var a = r(n(1));
                        e.exports = a['default'];
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
                        function a (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function c () {}
                        function u () {
                          var e = l.shift();
                          if (e) {
                            var t = o.last(e);
                            t.afterDequeue(),
                              (e.stream = i.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function i (e, t, r) {
                          function a (e) {
                            (e = r.beforeWrite(e)), m.write(e), r.afterWrite(e);
                          }
                          ((m = new p['default'](e, r)).id = g++),
                            (m.name = r.name || m.id),
                            (d.streams[m.name] = m);
                          var n = e.ownerDocument,
                            i = {
                              close: n.close,
                              open: n.open,
                              write: n.write,
                              writeln: n.writeln,
                            };
                          f(n, {
                            close: c,
                            open: c,
                            write: function s () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return a(t.join(''));
                            },
                            writeln: function l () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return a(t.join('') + '\n');
                            },
                          });
                          var o = m.win.onerror || c;
                          return (
                            (m.win.onerror = function (e, t, n) {
                              r.error({ msg: e + ' - ' + t + ': ' + n }),
                                o.apply(m.win, [e, t, n]);
                            }),
                            m.write(t, function () {
                              f(n, i), (m.win.onerror = o), r.done(), (m = null), u();
                            }),
                            m
                          );
                        }
                        function d (e, t, n) {
                          if (o.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (l = []), (m = null), void (g = 0);
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
                              cancel: function a () {
                                r.stream ? r.stream.abort() : (r[1] = c);
                              },
                            }),
                            n.beforeEnqueue(r),
                            l.push(r),
                            m || u(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var f =
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
                        var p = a(n(2)),
                          o = r(n(4)),
                          s = {
                            afterAsync: c,
                            afterDequeue: c,
                            afterStreamStart: c,
                            afterWrite: c,
                            autoFix: !0,
                            beforeEnqueue: c,
                            beforeWriteToken: function h (e) {
                              return e;
                            },
                            beforeWrite: function y (e) {
                              return e;
                            },
                            done: c,
                            error: function v (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          g = 0,
                          l = [],
                          m = null;
                        f(d, { streams: {}, queue: l, WriteStream: p['default'] });
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
                        function a (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function b (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function S (e, t) {
                          var n = A + t,
                            r = e.getAttribute(n);
                          return D.existy(r) ? String(r) : r;
                        }
                        function C (e, t, n) {
                          var r = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            a = A + t;
                          D.existy(r) && '' !== r ? e.setAttribute(a, r) : e.removeAttribute(a);
                        }
                        t.__esModule = !0;
                        var _ =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                            },
                          I = a(n(3)),
                          D = r(n(4)),
                          T = !1,
                          A = 'data-ps-',
                          E = 'ps-style',
                          k = 'ps-script',
                          i = (function () {
                            function r (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              b(this, r),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new I['default']('', { autoFix: n.autoFix })),
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
                                  D.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (r.prototype._callFunction = function a (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (r.prototype._writeImpl = function i (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, n = void 0, r = void 0, a = [];
                                  (t = this.parser.readToken()) &&
                                  !(n = D.isScript(t)) &&
                                  !(r = D.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && a.push(t);
                                0 < a.length && this._writeStaticTokens(a),
                                  n && this._handleScriptToken(t),
                                  r && this._handleStyleToken(t);
                              }),
                              (r.prototype._writeStaticTokens = function o (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    T && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    T && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (r.prototype._buildChunk = function u (e) {
                                for (
                                  var t = this.actuals.length,
                                    n = [],
                                    r = [],
                                    a = [],
                                    i = e.length,
                                    o = 0;
                                  o < i;
                                  o++
                                ) {
                                  var s = e[o],
                                    l = s.toString();
                                  if ((n.push(l), s.attrs)) {
                                    if (!/^noscript$/i.test(s.tagName)) {
                                      var c = t++;
                                      r.push(l.replace(/(\/?>)/, ' ' + A + 'id=' + c + ' $1')),
                                        s.attrs.id !== k &&
                                          s.attrs.id !== E &&
                                          a.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  A +
                                                  'proxyof=' +
                                                  c +
                                                  (s.unary ? ' />' : '>')
                                          );
                                    }
                                  } else r.push(l), a.push('endTag' === s.type ? l : '');
                                }
                                return {
                                  tokens: e,
                                  raw: n.join(''),
                                  actual: r.join(''),
                                  proxy: a.join(''),
                                };
                              }),
                              (r.prototype._walkChunk = function s () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  D.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !S(e, 'proxyof')) {
                                    n && C((this.actuals[S(e, 'id')] = e), 'id');
                                    var r = e.parentNode && S(e.parentNode, 'proxyof');
                                    r && this.actuals[r].appendChild(e);
                                  }
                                  t.unshift.apply(t, D.toArray(e.childNodes));
                                }
                              }),
                              (r.prototype._handleScriptToken = function l (e) {
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
                              (r.prototype._handleStyleToken = function c (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (r.prototype._writeStyleToken = function d (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, E),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (r.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  D.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  n
                                );
                              }),
                              (r.prototype._insertCursor = function f (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n);
                              }),
                              (r.prototype._onScriptStart = function p (e) {
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
                                  a = this.options.afterAsync;
                                e.src &&
                                  ((n.src = e.src),
                                  this._scriptLoadHandler(
                                    n,
                                    r
                                      ? a
                                      : function () {
                                          t(), a();
                                        }
                                  ));
                                try {
                                  this._insertCursor(n, k), (n.src && !r) || t();
                                } catch (i) {
                                  this.options.error(i), t();
                                }
                              }),
                              (r.prototype._buildScript = function h (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  D.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  e.content && (n.text = e.content),
                                  n
                                );
                              }),
                              (r.prototype._scriptLoadHandler = function y (t, n) {
                                function r () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function a () {
                                  r(), null != n && n(), (n = null);
                                }
                                function i (e) {
                                  r(), o(e), null != n && n(), (n = null);
                                }
                                function e (e, t) {
                                  var n = e['on' + t];
                                  null != n && (e['_on' + t] = n);
                                }
                                var o = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  _(t, {
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
                                      a();
                                    },
                                    onerror: function l () {
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
                                    onreadystatechange: function c () {
                                      /^(loaded|complete)$/.test(t.readyState) && a();
                                    },
                                  });
                              }),
                              (r.prototype._shouldRelease = function v (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              r
                            );
                          })();
                        t['default'] = i;
                      },
                      function (n) {
                        !(function r (e, t) {
                          n.exports = t();
                        })(0, function () {
                          return (function (n) {
                            function r (e) {
                              if (a[e]) return a[e].exports;
                              var t = (a[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports
                              );
                            }
                            var a = {};
                            return (r.m = n), (r.c = a), (r.p = ''), r(0);
                          })([
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var a = r(n(1));
                              e.exports = a['default'];
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function a (e) {
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
                              var d = a(n(2)),
                                f = a(n(3)),
                                p = r(n(6)),
                                i = n(5),
                                g = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                o = (function () {
                                  function l (e, t) {
                                    var n = this,
                                      r =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      a =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    u(this, l), (this.stream = r);
                                    var i = !1,
                                      o = {};
                                    for (var s in d)
                                      d.hasOwnProperty(s) &&
                                        (a.autoFix && (o[s + 'Fix'] = !0),
                                        (i = i || o[s + 'Fix']));
                                    i
                                      ? ((this._readToken = (0, p['default'])(
                                          this,
                                          o,
                                          function () {
                                            return n._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, p['default'])(this, o, function () {
                                          return n._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (l.prototype.append = function t (e) {
                                      this.stream += e;
                                    }),
                                    (l.prototype.prepend = function n (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (l.prototype._readTokenImpl = function r () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (l.prototype._peekTokenImpl = function a () {
                                      for (var e in g)
                                        if (g.hasOwnProperty(e) && g[e].test(this.stream)) {
                                          var t = f[e](this.stream);
                                          if (t)
                                            return 'startTag' === t.type &&
                                              /script|style/i.test(t.tagName)
                                              ? null
                                              : ((t.text = this.stream.substr(0, t.length)), t);
                                        }
                                    }),
                                    (l.prototype.peekToken = function e () {
                                      return this._peekToken();
                                    }),
                                    (l.prototype.readToken = function i () {
                                      return this._readToken();
                                    }),
                                    (l.prototype.readTokens = function o (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (l.prototype.clear = function s () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (l.prototype.rest = function c () {
                                      return this.stream;
                                    }),
                                    l
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
                                r = !1,
                                a = window.document.createElement('div');
                              try {
                                var i = '<P><I></P></I>';
                                (a.innerHTML = i), (t.tagSoup = n = a.innerHTML !== i);
                              } catch (o) {
                                t.tagSoup = n = !1;
                              }
                              try {
                                (a.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = r = 2 === a.childNodes.length);
                              } catch (o) {
                                t.selfClose = r = !1;
                              }
                              (a = null), (t.tagSoup = n), (t.selfClose = r);
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new u.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function a (e) {
                                var t = e.indexOf('<');
                                return new u.CharsToken(0 <= t ? t : e.length);
                              }
                              function i (e) {
                                var o, s, l;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(d.startTag);
                                  if (t) {
                                    var n =
                                      ((o = {}),
                                      (s = {}),
                                      (l = t[2]),
                                      t[2].replace(d.attr, function (e, t, n, r, a, i) {
                                        n || r || a || i
                                          ? arguments[5]
                                            ? ((o[arguments[5]] = ''), (s[arguments[5]] = !0))
                                            : (o[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (d.fillAttr.test(t) && t) ||
                                                '')
                                          : (o[t] = ''),
                                          (l = l.replace(e, ''));
                                      }),
                                      {
                                        v: new u.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          o,
                                          s,
                                          !!t[3],
                                          l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === n ? 'undefined' : c(n)))
                                      return n.v;
                                  }
                                }
                              }
                              function o (e) {
                                var t = i(e);
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
                              var c =
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
                                (t.chars = a),
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
                              var l = n(5),
                                r = (t.Token = function r (e, t) {
                                  s(this, r), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                a =
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
                                    function i (e, t, n, r, a) {
                                      s(this, i),
                                        (this.type = e),
                                        (this.length = n),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = r),
                                        (this.booleanAttrs = a),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (i.formatTag = function o (e, t) {
                                        var n =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          r = '<' + e.tagName;
                                        for (var a in e.attrs)
                                          if (e.attrs.hasOwnProperty(a)) {
                                            r += ' ' + a;
                                            var i = e.attrs[a];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[a]) ||
                                              (r += '="' + (0, l.escapeQuotes)(i) + '"');
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
                                      i
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function o (e, t, n, r, a, i) {
                                  s(this, o),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = n),
                                    (this.booleanAttrs = r),
                                    (this.html5Unary = !1),
                                    (this.unary = a),
                                    (this.rest = i);
                                }
                                return (
                                  (o.prototype.toString = function e () {
                                    return a.formatTag(this);
                                  }),
                                  o
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function i (e, t, n, r, a) {
                                    s(this, i),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = n),
                                      (this.booleanAttrs = r),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = a);
                                  }
                                  return (
                                    (i.prototype.toString = function e () {
                                      return a.formatTag(this, this.content);
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
                              function c (e) {
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
                                  r = c(t());
                                return (e.stream = n), r;
                              }
                              function d (e, t) {
                                var n = t.pop();
                                e.prepend('</' + n.tagName + '>');
                              }
                              function f () {
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
                                function a () {
                                  var e = u(n, t);
                                  e && o[e.type] && o[e.type](e);
                                }
                                var i = f(),
                                  o = {
                                    startTag: function s (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && i.lastTagNameEq('TABLE')
                                        ? (n.prepend('<TBODY>'), a())
                                        : r.selfCloseFix && p.test(t) && i.containsTagName(t)
                                        ? i.lastTagNameEq(t)
                                          ? d(n, i)
                                          : (n.prepend('</' + e.tagName + '>'), a())
                                        : e.unary || i.push(e);
                                    },
                                    endTag: function l (e) {
                                      i.last()
                                        ? r.tagSoupFix && !i.lastTagNameEq(e.tagName)
                                          ? d(n, i)
                                          : i.pop()
                                        : r.tagSoupFix && (t(), a());
                                    },
                                  };
                                return function e () {
                                  return a(), c(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = n);
                              var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                p = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
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
                        function a (e, t, n) {
                          var r = void 0,
                            a = (e && e.length) || 0;
                          for (r = 0; r < a; r++) t.call(n, e[r], r);
                        }
                        function i (e, t, n) {
                          for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r]);
                        }
                        function o (n, e) {
                          return (
                            (n = n || {}),
                            i(e, function (e, t) {
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
                              a(e, function (e) {
                                n.push(e);
                              }),
                              { v: n });
                            if ('object' === (void 0 === t ? 'undefined' : f(t))) return t.v;
                          }
                          var n;
                        }
                        function l (e) {
                          return e[e.length - 1];
                        }
                        function c (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function u (e) {
                          return c(e, 'script');
                        }
                        function d (e) {
                          return c(e, 'style');
                        }
                        t.__esModule = !0;
                        var f =
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
                          (t.each = a),
                          (t.eachKey = i),
                          (t.defaults = o),
                          (t.toArray = s),
                          (t.last = l),
                          (t.isTag = c),
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
                  var r = n('@adobe/reactor-document').createElement('div');
                  e.exports = function (e) {
                    return (r.innerHTML = e), r.textContent || r.innerText || e;
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-promise');
                  e.exports = function (e, t) {
                    return { code: '<script>\n' + t + '\n</script>', promise: r.resolve() };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var i = n('@adobe/reactor-promise'),
                    o = 0;
                  e.exports = function (r, e) {
                    var a = '_runScript' + ++o,
                      t = new i(function (e, n) {
                        _satellite[a] = function (t) {
                          delete _satellite[a],
                            new i(function (e) {
                              e(t.call(r.event.element, r.event, r.event.target, i));
                            }).then(e, n);
                        };
                      });
                    return {
                      code:
                        '<script>_satellite["' +
                        a +
                        '"](function(event, target, Promise) {\n' +
                        e +
                        '\n});</script>',
                      promise: t,
                    };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateHtmlCode.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('@adobe/reactor-promise'),
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
                    l = function (e, t) {
                      return e.replace(/\${reactorCallbackId}/g, t);
                    },
                    c = function (e) {
                      return e.settings.isExternal;
                    };
                  e.exports = function (e, t) {
                    var n;
                    return (
                      c(e) && (t = r.replaceTokens(t, e.event)),
                      s(t)
                        ? ((n = new a(function (e, t) {
                            o[String(i)] = { resolve: e, reject: t };
                          })),
                          (t = l(t, i)),
                          (i += 1))
                        : (n = a.resolve()),
                      { code: t, promise: n }
                    );
                  };
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-load-script'),
                    a = n('@adobe/reactor-promise'),
                    i = {},
                    o = {},
                    s = function (e) {
                      return o[e] || (o[e] = r(e)), o[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    i[e] = t;
                  }),
                    (e.exports = function (t) {
                      return i[t]
                        ? a.resolve(i[t])
                        : new a(function (e) {
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
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, n) {
                  const $___old_3b27db29804dd742 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_3b27db29804dd742)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_8938c767ccc6c19c.appVersion
                      ));
                    return function () {
                      'use strict';
                      var r = n('@adobe/reactor-window'),
                        a = n('@adobe/reactor-document'),
                        i = -1 !== r.navigator.appVersion.indexOf('MSIE 10'),
                        o = 'WINDOW_LOADED',
                        s = 'DOM_READY',
                        l = 'PAGE_BOTTOM',
                        c = [l, s, o],
                        u = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        d = {};
                      c.forEach(function (e) {
                        d[e] = [];
                      });
                      var f = function (e, t) {
                          c.slice(0, g(e) + 1).forEach(function (e) {
                            m(t, e);
                          });
                        },
                        p = function () {
                          return 'complete' === a.readyState
                            ? o
                            : 'interactive' === a.readyState
                            ? i
                              ? null
                              : s
                            : void 0;
                        },
                        g = function (e) {
                          return c.indexOf(e);
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
                        (r._satellite.pageBottom = f.bind(null, l)),
                        a.addEventListener('DOMContentLoaded', f.bind(null, s), !0),
                        r.addEventListener('load', f.bind(null, o), !0),
                        r.setTimeout(function () {
                          var e = p();
                          e && f(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            d[l].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            d[s].push({ trigger: e, syntheticEventFn: u.bind(null, a) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[o].push({ trigger: e, syntheticEventFn: u.bind(null, r) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_3b27db29804dd742)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_3b27db29804dd742
                      ));
                  }
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2e2f86ba46954a2b8a2b3bb72276b9f8/',
          },
          'adobe-target-v2': {
            displayName: 'Adobe Target v2',
            modules: {},
            settings: {
              targetSettings: {
                enabled: !0,
                timeout: 3000,
                version: '2.3.2',
                endpoint: '/rest/v1/delivery',
                imsOrgId: 'DA11332E5321D0550A490D45@AdobeOrg',
                clientCode: 'comcastresidentialservices',
                secureOnly: !1,
                serverState: {},
                optinEnabled: !1,
                serverDomain: 'comcastresidentialservices.tt.omtrdc.net',
                urlSizeLimit: 2048,
                viewsEnabled: !0,
                optoutEnabled: !1,
                globalMboxName: 'target-global-mbox',
                bodyHiddenStyle: 'body {opacity: 0}',
                pageLoadEnabled: !0,
                analyticsLogging: 'server_side',
                deviceIdLifetime: 63244800000,
                bodyHidingEnabled: !0,
                sessionIdLifetime: 1860000,
                visitorApiTimeout: 2000,
                authoringScriptUrl: '//cdn.tt.omtrdc.net/cdn/target-vec.js',
                overrideMboxEdgeServer: !1,
                selectorsPollingTimeout: 5000,
                defaultContentHiddenStyle: 'visibility: hidden;',
                defaultContentVisibleStyle: 'visibility: visible;',
                overrideMboxEdgeServerTimeout: 1860000,
                supplementalDataIdParamTimeout: 30,
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP269792aa7319457ea7dd670d3f2f68e5/',
          },
        },
        company: { orgId: 'DA11332E5321D0550A490D45@AdobeOrg' },
        property: {
          name: 'CIMA | IDM',
          settings: {
            domains: ['xfinity.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !0,
          },
        },
        rules: [
          {
            id: 'RL269ddf45a48f4d97bd729e43e97b4cab',
            name: '50 | All Pages | Global Page Load | DCR |AA',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'custom-PageLoad' },
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
                      if (
                        (((t = window.s || t).products = _satellite.getVar(
                          'product | productIDbuyFlow'
                        )),
                        digitalData.page.attributes.pageLoadEvent &&
                          (-1 <
                            digitalData.page.attributes.pageLoadEvent.indexOf('Payment start') ||
                            -1 <
                              digitalData.page.attributes.pageLoadEvent.indexOf(
                                'payment start'
                              )) &&
                          (t.events = t.apl(t.events, 'event95', ',', 2)),
                        'account authenication' == digitalData.page.attributes.pageLoadEvent &&
                          (t.events = t.apl(t.events, 'event49', ',', 2)),
                        ('Payment review' != digitalData.page.attributes.pageLoadEvent &&
                          'payment review' != digitalData.page.attributes.pageLoadEvent) ||
                          (t.events = t.apl(t.events, 'event64', ',', 2)),
                        'Single payment today' == digitalData.page.attributes.pageLoadEvent &&
                          (t.events = t.apl(t.events, 'event7', ',', 2)),
                        'Single payment scheduled' == digitalData.page.attributes.pageLoadEvent &&
                          (t.events = t.apl(t.events, 'event21', ',', 2)),
                        _satellite.getVar('transaction | billPayAmount'))
                      ) {
                        var n = 'event94=' + _satellite.getVar('transaction | billPayAmount');
                        t.events = t.apl(t.events, n, ',', 2);
                      }
                      'shop' == t.eVar34 &&
                        'learn' == t.eVar35 &&
                        (t.prop44 = t.eVar44 = 'responsivedesign|all digital learn'),
                        'order' == t.prop46 && 'idm' == t.prop34 && (t.prop46 = t.eVar38 = ''),
                        'order' == _satellite.getVar('transaction | buyflowStep') &&
                          '' != _satellite.getVar('product | productIDbuyFlow') &&
                          (t.events = t.apl(t.events, 'purchase', ',', 2)),
                        '1' == _satellite.getVar('user | isReferAFriend') &&
                          (t.events = t.apl(t.events, 'event87', ',', 2)),
                        'yes' == _satellite.getVar('transation | isUIDStart') &&
                          (t.events = t.apl(t.events, 'event115', ',', 2)),
                        'yes' == _satellite.getVar('user | isPersonalEmailVerified') &&
                          (t.events = t.apl(t.events, 'event119', ',', 2)),
                        'yes' == _satellite.getVar('user | isUsernameCreated') &&
                          (t.events = t.apl(t.events, 'event116', ',', 2)),
                        'yes' == _satellite.getVar('user | isVerifyMethod') &&
                          (t.events = t.apl(t.events, 'event117', ',', 2)),
                        'yes' == _satellite.getVar('user | isUIDLookupCompleted') &&
                          (t.events = t.apl(t.events, 'event120', ',', 2)),
                        'yes' == _satellite.getVar('user | isPasswordRecoveryConfirm') &&
                          (t.events = t.apl(t.events, 'event121', ',', 2)),
                        'yes' == _satellite.getVar('user | isPasswordResetConfirm') &&
                          (t.events = t.apl(t.events, 'event122', ',', 2)),
                        'yes' == _satellite.getVar('user | isRebindConfirm') &&
                          (t.events = t.apl(t.events, 'event123', ',', 2));
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar1', type: 'value', value: '%user | customerType%' },
                      { name: 'eVar10', type: 'value', value: '%user | marketID%' },
                      { name: 'eVar16', type: 'value', value: '%user | type%' },
                      { name: 'eVar21', type: 'value', value: '%transaction | paymentType%' },
                      { name: 'eVar32', type: 'value', value: '%transaction | fulfillmentType%' },
                      { name: 'eVar34', type: 'value', value: '%page | primaryCategory%' },
                      { name: 'eVar35', type: 'value', value: '%page | subCategory1%' },
                      { name: 'eVar37', type: 'value', value: '%event | pageName%' },
                      { name: 'eVar38', type: 'value', value: '%transaction | buyflowType%' },
                      { name: 'eVar40', type: 'value', value: '%user | preActivationState%' },
                      { name: 'eVar44', type: 'value', value: '%code | siteVersion%' },
                      { name: 'eVar46', type: 'value', value: '%missing%' },
                      { name: 'eVar50', type: 'value', value: '%siteInfo | visitorID%' },
                      { name: 'eVar64', type: 'value', value: '%user | authGUID%' },
                      { name: 'eVar69', type: 'value', value: '%transaction | funnelType%' },
                      { name: 'eVar71', type: 'value', value: '%user | customerGUID%' },
                      { name: 'eVar80', type: 'value', value: '%product | offerSystem%' },
                      {
                        name: 'eVar82',
                        type: 'value',
                        value: '%transaction | buyflowPaymentMethod%',
                      },
                      { name: 'eVar86', type: 'value', value: '%user | authenticationStatus%' },
                      { name: 'eVar92', type: 'value', value: '%user | UIDVerificationMethod%' },
                      {
                        name: 'eVar93',
                        type: 'value',
                        value: '%user | accountNumberVerificationType%',
                      },
                      {
                        name: 'eVar94',
                        type: 'value',
                        value: '%user | imageVerificationAttempts%',
                      },
                      { name: 'eVar99', type: 'value', value: '%page | affiliateChannelName%' },
                    ],
                    props: [
                      { name: 'prop5', type: 'alias', value: 'eVar80' },
                      { name: 'prop28', type: 'value', value: '%siteInfo | CTPSessionID%' },
                      { name: 'prop35', type: 'value', value: '%page | subCategory1%' },
                      { name: 'prop39', type: 'value', value: '%user | recoveryOptions%' },
                      { name: 'prop44', type: 'value', value: '%code | siteVersion%' },
                      { name: 'prop45', type: 'value', value: '%user | customerType%' },
                      { name: 'prop46', type: 'value', value: '%transaction | buyflowStep%' },
                      { name: 'prop50', type: 'value', value: '%siteInfo | sessionID%' },
                      { name: 'prop52', type: 'value', value: '%user | uidCreationType%' },
                      { name: 'prop55', type: 'value', value: '%page | businessSiteType%' },
                      { name: 'prop56', type: 'value', value: '%user | userNameType%' },
                      { name: 'prop60', type: 'value', value: '%page | language%' },
                    ],
                    server: '%siteInfo | server%',
                    channel: '%page | primaryCategory%',
                    pageName: '%page | pageName%',
                    purchaseID: '%transaction | transactionID%',
                    transactionID: '%transaction | transactionID%',
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/331fbea29f79/3ac6e7f13fd8/6a572ba3bfaa/RC79dfe1ded52543908fdc8626c1b618e5-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
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
            ],
          },
          {
            id: 'RL3d7b2a5660444996b7ad7f71d52915e6',
            name: '50 | AA | All Pages | Global Click Event | DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'send-Event' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTruthy' }, leftOperand: '%event.detail%' },
                timeout: 2000,
              },
            ],
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
                      t.linkTrackVars = 'prop17,eVar37,prop24,hier1';
                      var n = adobe.consulting.util.getObjVal(e, 'detail.eventAction'),
                        r = adobe.consulting.util.getObjVal(e, 'detail.container'),
                        a = '';
                      for (i = r.length - 1; 0 <= i; i--) a += '' == a ? r[i] : '|' + r[i];
                      n && a
                        ? ((t.prop24 = a + '|' + n), (t.hier1 = a + '|' + n))
                        : n && !a && (t.prop24 = n);
                    },
                  },
                  trackerProperties: {
                    eVars: [{ name: 'eVar37', type: 'value', value: '%event | pageName%' }],
                    props: [{ name: 'prop17', type: 'value', value: '%event | pageName%' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Click Tracking', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLd8b633b0282f4e60855116cbb34fd2d1',
            name: '1 | Common | All Pages | Adobe Consulting Libraries and Utils | Library Loaded',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '\n//JS Util functions for DTM Data Elements and DTM Rules.\nwindow.adobe = window.adobe || {};\nwindow.adobe.consulting = window.adobe.consulting || {};\nwindow.adobe.consulting.util = window.adobe.consulting.util || {};\n\n(function (A) {\n\n // Get the value from an object heirarchy. Usage :- window.adobe.consulting.util.getObjVal(<base object>, <heirarchy under base object as a string>, <default value (optional), this will be returned if the object is not found>);\n  A.getObjVal = function (obj, prop, defVal) {\n    \tdefVal = defVal || "";\n\t    if(!obj || !prop || typeof prop != "string") { _satellite.logger.info("!*!*!* WARNING !*!*!* \'Object\' or \'Path\' is missing or invalid"); return defVal; }\n      var props = prop.split("."), i;\n      for (i = 0; i < props.length; i += 1) {\n          if (typeof obj[props[i]] !== "undefined") { obj = obj[props[i]]; } else { _satellite.logger.info("!*!*!* WARNING !*!*!* " + props[i] + " could not be found under path " + prop); return defVal; }\n      }\n      return obj;\n  };\n  \n  A.resetState = function () {\n    \n    // Resetting Variable for holding Campaign/Experience qualification for each page/view\n    window.ttMETA = [];\n    \n    //Resetting SDID for A4T integration.\n    var visitor = Visitor.getInstance ("DA11332E5321D0550A490D45@AdobeOrg");\n    visitor.resetState();\n  };\n\n  A.getAPI = function(url, successHandler, errorHandler, headers) {\n        var xhr = typeof XMLHttpRequest != \'undefined\'\n            ? new XMLHttpRequest()\n            : new ActiveXObject(\'Microsoft.XMLHTTP\');\n        xhr.open(\'get\', url, true);\n        if(headers) {\n            for(var i=0, j = Object.keys(headers); i < j.length; i++) {\n            xhr.setRequestHeader(j[i], headers[j[i]]);\n            }\t\n        }\n        xhr.withCredentials = true;// Must follow xhr.open to avoid InvalidStateError\n        xhr.onreadystatechange = function() {\n            var status, data;\n            if (xhr.readyState == 4) { \n            status = xhr.status;\n            if (status == 200) {\n                data = JSON.parse(xhr.responseText);\n                successHandler && successHandler(data);\n            } else {\n                errorHandler && errorHandler(status);\n            }\n            }\n        };\n        xhr.send();\n    };\n\n    A.fireCustomEvent = function(name, details) {\n        var event = new CustomEvent(name, {\n            detail: {\n            source: "dtm",\n            data : details\n            }\n        });\n        document.dispatchEvent(event);\n    };\n\n    A.numberOfDaysPassed = function(fromDate) {\n\n        var fromDateArr = fromDate.split("-");\n            \n        if(fromDateArr.length != 3 || isNaN(new Date(fromDate))) {\n                console.log("Invalid Date given for function window.adobe.consulting.util.numberOfDaysPassed()");\n            return NaN;\n            }\n\n            \n        var currDate = new Date();\n\n        var utcFromDate = new Date(Date.UTC(fromDateArr[0],fromDateArr[1] -1 ,fromDateArr[2], 24, 0, 0, 0));\n        var utcCurrentDate = Date.UTC(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 24, 0, 0, 0);\n\n        var dateDiff = utcCurrentDate - utcFromDate;\n\n        return A.dhm(dateDiff)[0];\n    };\n\n    A.dhm = function(t){\n        var cd = 24 * 60 * 60 * 1000,\n            ch = 60 * 60 * 1000,\n            d = Math.floor(t / cd),\n            h = Math.floor( (t - d * cd) / ch),\n            m = Math.round( (t - d * cd - h * ch) / 60000),\n            pad = function(n){ return n < 10 ? \'0\' + n : n; };\n        if( m === 60 ){\n            h++;\n            m = 0;\n        }\n        if( h === 24 ){\n            d++;\n            h = 0;\n        }\n        return [d, pad(h), pad(m)];\n    };\n\n\n\n    A.getMetaContentByName = function (name,content){\n        var content = (content==null)?\'content\':content, metaObj = document.querySelector("meta[name=\'"+name+"\']");\n        return metaObj != null ? metaObj.getAttribute(content) != null ? metaObj.getAttribute(content).toLowerCase() : "" : "";\n    };\n\n    A.fireTargetCustomMbox = function (name,params){\n        adobe.target.getOffer({\n        mbox: name,\n        params: params,\n        success: function(offer) {\n            adobe.target.applyOffer({\n            "mbox": name,\n            "offer": offer\n            });\n        },\n        error: function(status, error) {\n            _satellite.notify("Adobe Target custom mBox ( " + name + " ) request did not succeed :: ", status, error);\n        }\n        });  \n    };\n\n    A.getEventInfo = function (eventMethod, DL_path, eventName) {\n        var DL_events = digitalData.event;\n        for(var x=0; x < DL_events.length ; x++) {\n            if(DL_events[x].eventInfo.eventMethod && DL_events[x].eventInfo.eventMethod == eventMethod) {\n                if(typeof eventName !== "undefined") {\n                    return (DL_events[x].eventInfo.eventName == eventName) ?  A.getObjVal(DL_events[x].eventInfo, DL_path) : "";\n                }\n                return A.getObjVal(DL_events[x].eventInfo, DL_path);\n            }\n        }\n    };\n\n\n    //getGBB Offers\n    A.getGBBHomeOffer = function (ruleid, tokenname) {\n        return new Promise(function(resolve, reject) {\n            try {\n                var match = /&RC.MKT=(\\d+)&/gm.exec(_satellite.getVar("Cookie | PSC")),\n                marketID = match && match[1],\n                apiURL = marketID && ruleid && tokenname && "https://xapi.xfinity.com/markets/" + marketID + "/rules/" + ruleid + "/FeaturedOffers/V2?tokenname=" + tokenname;\n\n                function apiSuccessHandler(data) {\n                    resolve(data.featuredOffers);\n                }\n\n                function apiErrorHandler(data) {\n                    reject(data);\n                }\n\n                if (apiURL) {\n                    A.getAPI(apiURL, apiSuccessHandler, apiErrorHandler);\n                }\n                else {\n                    reject("Invalid arguments");\n                }       \n            }\n            catch(e) {\n                reject(e);\n            }\n        });\n    };\n\n    //Searches a single or an array of objects for key and value match (No nested array or object search support)\n    A.getMOV = function (objectRoot, keyArray, valueArray) {\n        objectRoot = objectRoot || []; keyArray = keyArray || []; valueArray = valueArray || [];\n        var goodArguments = !(!(typeof objectRoot == "object") || !keyArray.length || !valueArray.length);\n        var matchFound = false;\n        if(!goodArguments) {\n            console.error("Warning :: Invalid Arguments for function adobe.consulting.util.getMOV()");\n            return {};\n        }\n        if (Array.isArray(objectRoot) && objectRoot.length) {\n            for(var x=0; x < objectRoot.length; x++) {\n                var result = A.getMOV(objectRoot[x], keyArray, valueArray);\n                if (result) return result;\n            }\n        }\n        for(var y=0;y < keyArray.length; y++) {\n            matchFound = valueArray[y] && objectRoot.hasOwnProperty(keyArray[y]) && objectRoot[keyArray[y]] == valueArray[y] ? true : false;\n            if(!matchFound) { \n                return null \n            }\n        }\n        return objectRoot;\n    };\n\n}(window.adobe.consulting.util));\n',
                  language: 'javascript',
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
        ],
      });
    var $___var_ef66114074d9d39b = (function () {
      const $___old_1c599acf48cf34e9 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_1c599acf48cf34e9)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_8938c767ccc6c19c.userAgent
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
          function c (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function r () {}
          function a (e, t) {
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
              f(e, this);
          }
          function o (r, a) {
            for (; 3 === r._state; ) r = r._value;
            0 !== r._state
              ? ((r._handled = !0),
                i._immediateFn(function () {
                  var e = 1 === r._state ? a.onFulfilled : a.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(r._value);
                    } catch (n) {
                      return void l(a.promise, n);
                    }
                    s(a.promise, t);
                  } else (1 === r._state ? s : l)(a.promise, r._value);
                }))
              : r._deferreds.push(a);
          }
          function s (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof i) return (e._state = 3), (e._value = t), void u(e);
                if ('function' == typeof n) return void f(a(n, t), e);
              }
              (e._state = 1), (e._value = t), u(e);
            } catch (r) {
              l(e, r);
            }
          }
          function l (e, t) {
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
          function f (e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), s(t, e));
                },
                function (e) {
                  n || ((n = !0), l(t, e));
                }
              );
            } catch (r) {
              if (n) return;
              (n = !0), l(t, r);
            }
          }
          function p (e) {
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
            } catch (a) {
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
              y = function (t, e) {
                var n = function () {
                    return 'true' === t.getItem(h);
                  },
                  r = function (e) {
                    t.setItem(h, e);
                  },
                  a = [],
                  i = function (e) {
                    a.push(e);
                  };
                return (
                  (e.outputEnabled = n()),
                  {
                    onDebugChanged: i,
                    getDebugEnabled: n,
                    setDebugEnabled: function (t) {
                      n() !== t &&
                        (r(t),
                        (e.outputEnabled = t),
                        a.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              v = 'Module did not export a function.',
              b = function (i, o) {
                return function (e, t, n) {
                  n = n || [];
                  var r = i.getModuleExports(e.modulePath);
                  if ('function' != typeof r) throw new Error(v);
                  var a = o(e.settings || {}, t);
                  return r.bind(null, a).apply(null, n);
                };
              },
              S = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              C = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              _ = '\uD83D\uDE80',
              I =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : _,
              D = !1,
              T = function (e) {
                if (D && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(I),
                    e !== C.DEBUG || window.console[e] || (e = C.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              A = T.bind(null, C.LOG),
              E = T.bind(null, C.INFO),
              k = T.bind(null, C.DEBUG),
              O = T.bind(null, C.WARN),
              w = T.bind(null, C.ERROR),
              M = {
                log: A,
                info: E,
                debug: k,
                warn: O,
                error: w,
                get outputEnabled () {
                  return D;
                },
                set outputEnabled (e) {
                  D = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: A.bind(null, t),
                    info: E.bind(null, t),
                    debug: k.bind(null, t),
                    warn: O.bind(null, t),
                    error: w.bind(null, t),
                  };
                },
              },
              P = e(function (r) {
                !(function (e) {
                  if (((r.exports = e()), !!0)) {
                    var t = window.Cookies,
                      n = (window.Cookies = e());
                    n.noConflict = function () {
                      return (window.Cookies = t), n;
                    };
                  }
                })(function () {
                  function l () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var r in n) t[r] = n[r];
                    }
                    return t;
                  }
                  function u (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (c) {
                    function s () {}
                    function n (e, t, n) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (n = l({ path: '/' }, s.defaults, n)).expires &&
                          (n.expires = new Date(1 * new Date() + 86400000 * n.expires)),
                          (n.expires = n.expires ? n.expires.toUTCString() : '');
                        try {
                          var r = JSON.stringify(t);
                          /^[\{\[]/.test(r) && (t = r);
                        } catch (o) {}
                        (t = c.write
                          ? c.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var a = '';
                        for (var i in n)
                          n[i] &&
                            ((a += '; ' + i), !0 !== n[i] && (a += '=' + n[i].split(';')[0]));
                        return (document.cookie = e + '=' + t + a);
                      }
                    }
                    function t (e, t) {
                      const $___old_ab1e04e7af5fc878 = {}.constructor.getOwnPropertyDescriptor(
                        Document.prototype,
                        'cookie'
                      );
                      try {
                        if ($___old_ab1e04e7af5fc878)
                          ({}.constructor.defineProperty(
                            Document.prototype,
                            'cookie',
                            $___stub_1c5cc68fe6204532.cookie
                          ));
                        return function () {
                          if ('undefined' != typeof document) {
                            for (
                              var n = {},
                                r = document.cookie ? document.cookie.split('; ') : [],
                                a = 0;
                              a < r.length;
                              a++
                            ) {
                              var i = r[a].split('='),
                                o = i.slice(1).join('=');
                              t || '"' !== o.charAt(0) || (o = o.slice(1, -1));
                              try {
                                var s = u(i[0]);
                                if (((o = (c.read || c)(o, s) || u(o)), t))
                                  try {
                                    o = JSON.parse(o);
                                  } catch (l) {}
                                if (((n[s] = o), e === s)) break;
                              } catch (l) {}
                            }
                            return e ? n[e] : n;
                          }
                        }.apply(this, arguments);
                      } finally {
                        if ($___old_ab1e04e7af5fc878)
                          ({}.constructor.defineProperty(
                            Document.prototype,
                            'cookie',
                            $___old_ab1e04e7af5fc878
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
                        n(e, '', l(t, { expires: -1 }));
                      }),
                      (s.defaults = {}),
                      (s.withConverter = e),
                      s
                    );
                  }
                  return e(function () {});
                });
              }),
              x = { get: P.get, set: P.set, remove: P.remove },
              j = window,
              V = 'com.adobe.reactor.',
              L = function (r, e) {
                var a = V + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_bc18617c46636e8d = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_bc18617c46636e8d)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_8c64b857aeb74429.localStorage
                        ));
                      return function () {
                        try {
                          return j[r].getItem(a + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_bc18617c46636e8d)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_bc18617c46636e8d
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_e5fef6cef2984eea = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_e5fef6cef2984eea)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_8c64b857aeb74429.localStorage
                        ));
                      return function () {
                        try {
                          return j[r].setItem(a + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_e5fef6cef2984eea)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_e5fef6cef2984eea
                        ));
                    }
                  },
                };
              },
              N = '_sdsat_',
              F = 'dataElements.',
              R = 'dataElementCookiesMigrated',
              U = L('localStorage'),
              H = L('sessionStorage', F),
              B = L('localStorage', F),
              W = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              G = {},
              q = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              Y = function (e, t, n) {
                var r;
                switch (t) {
                  case W.PAGEVIEW:
                    return void (G[e] = n);
                  case W.SESSION:
                    return void ((r = q(n)) && H.setItem(e, r));
                  case W.VISITOR:
                    return void ((r = q(n)) && B.setItem(e, r));
                }
              },
              J = function (e, t) {
                var n = x.get(N + e);
                n !== undefined && Y(e, t, n);
              },
              z = {
                setValue: Y,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case W.PAGEVIEW:
                      return G.hasOwnProperty(e) ? G[e] : null;
                    case W.SESSION:
                      return null === (n = H.getItem(e)) ? n : JSON.parse(n);
                    case W.VISITOR:
                      return null === (n = B.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  U.getItem(R) ||
                    (Object.keys(t).forEach(function (e) {
                      J(e, t[e].storageDuration);
                    }),
                    U.setItem(R, !0));
                },
              },
              X = function (e, t, n, r) {
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
              $ = function (s, l, c, u) {
                return function (e, t) {
                  var n = l(e);
                  if (!n) return u ? '' : undefined;
                  var r,
                    a = n.storageDuration;
                  try {
                    r = s.getModuleExports(n.modulePath);
                  } catch (o) {
                    return void M.error(X(n, e, o.message, o.stack));
                  }
                  if ('function' == typeof r) {
                    var i;
                    try {
                      i = r(c(n.settings, t), t);
                    } catch (o) {
                      return void M.error(X(n, e, o.message, o.stack));
                    }
                    return (
                      a && (null != i ? z.setValue(e, a, i) : (i = z.getValue(e, a))),
                      null == i && null != n.defaultValue && (i = n.defaultValue),
                      'string' == typeof i &&
                        (n.cleanText && (i = S(i)), n.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  M.error(X(n, e, 'Module did not export a function.'));
                };
              },
              K = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return S(e.textContent);
                },
              },
              Q = function (e, t, n) {
                for (var r, a = e, i = 0, o = t.length; i < o; i++) {
                  if (null == a) return undefined;
                  var s = t[i];
                  if (n && '@' === s.charAt(0)) {
                    var l = s.slice(1);
                    a = K[l](a);
                  } else if (a.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var c = r[1];
                    a = a.getAttribute(c);
                  } else a = a[s];
                }
                return a;
              },
              Z = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (o(e)) n = s(e, t);
                  else {
                    var r = e.split('.'),
                      a = r.shift();
                    'this' === a
                      ? t && (n = Q(t.element, r, !0))
                      : 'event' === a
                      ? t && (n = Q(t, r))
                      : 'target' === a
                      ? t && (n = Q(t.target, r))
                      : (n = Q(i[a], r));
                  }
                  return n;
                };
              },
              ee = function (n, r) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    r(e) || 'this' === t || 'event' === t || 'target' === t || n.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, n) {
                var r = { exports: {} };
                return e.call(r.exports, r, r.exports, t, n), r.exports;
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
                        r(e);
                      } catch (n) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          n.message +
                          (n.stack ? '\n' + n.stack : '');
                        M.error(t);
                      }
                    });
                  },
                  r = function (e) {
                    var t = n(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, n, r, a) {
                    var i = { definition: t, extensionName: n, require: r, turbine: a };
                    (i.require = r), (o[e] = i);
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
              re = !1,
              ae = function (r) {
                return function (t, n) {
                  var e = r._monitors;
                  e &&
                    (re ||
                      (M.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (re = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](n);
                    }));
                };
              },
              ie = function (a, i, o) {
                var n,
                  r,
                  s,
                  l,
                  c = [],
                  u = function (e, t, n) {
                    if (!a(t)) return e;
                    c.push(t);
                    var r = i(t, n);
                    return c.pop(), null == r && o ? '' : r;
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
                    for (var n = {}, r = Object.keys(e), a = 0; a < r.length; a++) {
                      var i = r[a],
                        o = e[i];
                      n[i] = l(o, t);
                    }
                    return n;
                  }),
                  (s = function (e, t) {
                    for (var n = [], r = 0, a = e.length; r < a; r++) n.push(l(e[r], t));
                    return n;
                  }),
                  (l = function (e, t) {
                    return 'string' == typeof e
                      ? n(e, t)
                      : Array.isArray(e)
                      ? s(e, t)
                      : 'object' == typeof e && null !== e
                      ? r(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < c.length
                      ? (M.error('Data element circular reference detected: ' + c.join(' -> ')), e)
                      : l(e, t);
                  }
                );
              },
              oe = function (a) {
                return function (e, t) {
                  if ('string' == typeof e) a[arguments[0]] = t;
                  else if (arguments[0]) {
                    var n = arguments[0];
                    for (var r in n) a[r] = n[r];
                  }
                };
              },
              se = setTimeout;
            (i.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (i.prototype.then = function (e, t) {
                var n = new this.constructor(r);
                return o(this, new d(e, t, n)), n;
              }),
              (i.prototype['finally'] = t),
              (i.all = function (t) {
                return new i(function (a, i) {
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
                      (s[t] = e), 0 == --l && a(s);
                    } catch (r) {
                      i(r);
                    }
                  }
                  if (!c(t)) return i(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(t);
                  if (0 === s.length) return a([]);
                  for (var l = s.length, e = 0; e < s.length; e++) o(e, s[e]);
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
              (i.race = function (a) {
                return new i(function (e, t) {
                  if (!c(a)) return t(new TypeError('Promise.race accepts an array'));
                  for (var n = 0, r = a.length; n < r; n++) i.resolve(a[n]).then(e, t);
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
              (i._unhandledRejectionFn = function Dt (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var le = window.Promise || i['default'] || i,
              ce = function (c, n, r) {
                return function (s, t, l, e) {
                  return e.then(function () {
                    var i,
                      o = s.delayNext;
                    return new le(function (e, t) {
                      var n = c(s, l, [l]);
                      if (!o) return e();
                      var r = s.timeout,
                        a = new le(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      le.race([n, a]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), r(s, t, e), le.reject(e);
                      })
                      .then(function () {
                        clearTimeout(i);
                      });
                  });
                };
              },
              ue = function (l, n, r, a, c) {
                return function (o, t, s, e) {
                  return e.then(function () {
                    var i;
                    return new le(function (e, t) {
                      var n = l(o, s, [s]),
                        r = o.timeout,
                        a = new le(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      le.race([n, a]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), a(o, t, e), le.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(i), !r(o, e))) return c(o, t), le.reject();
                      });
                  });
                };
              },
              de = le.resolve(),
              fe = function (r, a, e) {
                return function (t, n) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        de = r(e, t, n, de);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        de = a(e, t, n, de);
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
              ge = function (o, s, l, c) {
                return function (e, t) {
                  var n;
                  if (e.conditions)
                    for (var r = 0; r < e.conditions.length; r++) {
                      n = e.conditions[r];
                      try {
                        var a = o(n, t, [t]);
                        if (pe(a))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!s(n, a)) return l(n, e), !1;
                      } catch (i) {
                        return c(n, e, i), !1;
                      }
                    }
                  return !0;
                };
              },
              me = function (n, r) {
                return function (e, t) {
                  n(e, t) && r(e, t);
                };
              },
              he = function (n) {
                return function (e) {
                  var t = n.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              ye = function (a) {
                return function (e) {
                  var t = e.rule,
                    n = e.event,
                    r = a.getModuleDefinition(n.modulePath).name;
                  return {
                    $type: a.getModuleExtensionName(n.modulePath) + '.' + r,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              ve = function (s, l, c, u, d, f) {
                return function (n, e) {
                  var r = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var a = d(e);
                    l(t, null, [
                      function i (e) {
                        var t = c(a, e);
                        n(function () {
                          s(t, r);
                        });
                      },
                    ]);
                  } catch (o) {
                    f.error(u(t, r, o));
                  }
                };
              },
              be = function (a, i, o, s) {
                return function (e, t, n) {
                  var r = i(e);
                  o.error(a(r, t.name, n)), s('ruleActionFailed', { rule: t, action: e });
                };
              },
              Se = function (a, i, o, s) {
                return function (e, t, n) {
                  var r = i(e);
                  o.error(a(r, t.name, n)), s('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Ce = function (r, a, i) {
                return function (e, t) {
                  var n = r(e);
                  a.log('Condition "' + n + '" for rule "' + t.name + '" was not met.'),
                    i('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              _e = function (t, n) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), n('ruleCompleted', { rule: e });
                };
              },
              Ie = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (e.actions)
                    for (var r = 0; r < e.actions.length; r++) {
                      n = e.actions[r];
                      try {
                        i(n, t, [t]);
                      } catch (a) {
                        return void o(n, e, a);
                      }
                    }
                  s(e);
                };
              },
              De = function (n, r, a, i) {
                return function (e, t) {
                  i('ruleTriggered', { rule: t }), n ? a(t, e) : r(t, e);
                };
              },
              Te = function (e, t, n) {
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
              Ee = [],
              ke = !1,
              Oe = function (e) {
                ke ? e() : Ee.push(e);
              },
              we = function (e, t, n) {
                e(t).forEach(function (e) {
                  n(Oe, e);
                }),
                  (ke = !0),
                  Ee.forEach(function (e) {
                    e();
                  }),
                  (Ee = []);
              },
              Me = function (e) {
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
              Pe = Object.getOwnPropertySymbols,
              xe = Object.prototype.hasOwnProperty,
              je = Object.prototype.propertyIsEnumerable,
              Ve = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, r = p(e), a = 1; a < arguments.length; a++) {
                      for (var i in (t = Object(arguments[a]))) xe.call(t, i) && (r[i] = t[i]);
                      if (Pe) {
                        n = Pe(t);
                        for (var o = 0; o < n.length; o++) je.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                      }
                    }
                    return r;
                  },
              Le = function (e, t) {
                return (
                  Ve((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          M.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Ne = function (l, c) {
                return function (e, t) {
                  var n = l[e];
                  if (n) {
                    var r = n.modules;
                    if (r)
                      for (var a = Object.keys(r), i = 0; i < a.length; i++) {
                        var o = a[i],
                          s = r[o];
                        if (s.shared && s.name === t) return c.getModuleExports(o);
                      }
                  }
                };
              },
              Fe = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Re = function (n, r) {
                return function (e) {
                  if (r) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return n + e;
                };
              },
              Ue = '.js',
              He = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Be = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              We = function (e, t) {
                Be(t, Ue) || (t += Ue);
                var n = t.split('/'),
                  r = He(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              Ge = document,
              qe = function (n, r) {
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
                var n = qe(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              Je = function (e, t, n, r) {
                (t = t || '&'), (n = n || '=');
                var a = {};
                if ('string' != typeof e || 0 === e.length) return a;
                var i = /\+/g;
                e = e.split(t);
                var o = 1000;
                r && 'number' == typeof r.maxKeys && (o = r.maxKeys);
                var s = e.length;
                0 < o && o < s && (s = o);
                for (var l = 0; l < s; ++l) {
                  var c,
                    u,
                    d,
                    f,
                    p = e[l].replace(i, '%20'),
                    g = p.indexOf(n);
                  0 <= g ? ((c = p.substr(0, g)), (u = p.substr(g + 1))) : ((c = p), (u = '')),
                    (d = decodeURIComponent(c)),
                    (f = decodeURIComponent(u)),
                    m(a, d)
                      ? Array.isArray(a[d])
                        ? a[d].push(f)
                        : (a[d] = [a[d], f])
                      : (a[d] = f);
                }
                return a;
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
              Xe = function (n, r, a, e) {
                return (
                  (r = r || '&'),
                  (a = a || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(ze(e)) + a;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(ze(e));
                                })
                                .join(r)
                            : t + encodeURIComponent(ze(n[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent(ze(e)) + a + encodeURIComponent(ze(n))
                    : ''
                );
              },
              $e = e(function (e, t) {
                (t.decode = t.parse = Je), (t.encode = t.stringify = Xe);
              }),
              Ke = ($e.decode, $e.parse, $e.encode, $e.stringify, '@adobe/reactor-'),
              Qe = {
                cookie: x,
                document: Ge,
                'load-script': Ye,
                'object-assign': Ve,
                promise: le,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), $e.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return $e.stringify(e);
                  },
                },
                window: j,
              },
              Ze = function (r) {
                return function (e) {
                  if (0 === e.indexOf(Ke)) {
                    var t = e.substr(Ke.length),
                      n = Qe[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, o, s, l, c) {
                var u = e.extensions,
                  d = e.buildInfo,
                  f = e.property.settings;
                if (u) {
                  var p = Ne(u, o);
                  Object.keys(u).forEach(function (r) {
                    var a = u[r],
                      e = Fe(l, a.settings);
                    if (a.modules) {
                      var t = M.createPrefixedLogger(a.displayName),
                        n = Re(a.hostedLibFilesBaseUrl, d.minified),
                        i = {
                          buildInfo: d,
                          getDataElementValue: c,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: p,
                          logger: t,
                          propertySettings: f,
                          replaceTokens: l,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(a.modules).forEach(function (n) {
                        var e = a.modules[n],
                          t = Ze(function (e) {
                            var t = We(n, e);
                            return o.getModuleExports(t);
                          });
                        o.registerModule(n, e, r, t, i);
                      });
                    }
                  }),
                    o.hydrateCache();
                }
                return o;
              },
              tt = function (e, t, n, r, a) {
                var i = M.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  M.log('"' + e + '" does not match any direct call identifiers.');
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
                      (M.warn(
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
                  (e.getVar = r),
                  (e.setVar = a),
                  (e.setCookie = function (e, t, n) {
                    var r = '',
                      a = {};
                    n && ((r = ', { expires: ' + n + ' }'), (a.expires = n));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      r +
                      ').';
                    M.warn(i), x.set(e, t, a);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      M.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      x.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    M.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      x.remove(e);
                  }),
                  (e.cookie = x),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var o = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      o ||
                        (M.warn(
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
              var rt = nt.container;
              delete nt.container;
              var at = rt.property.settings.undefinedVarsReturnEmpty,
                it = rt.property.settings.ruleComponentSequencingEnabled,
                ot = rt.dataElements || {};
              z.migrateCookieData(ot);
              var st,
                lt = function (e) {
                  return ot[e];
                },
                ct = ne(),
                ut = $(
                  ct,
                  lt,
                  function () {
                    return st.apply(null, arguments);
                  },
                  at
                ),
                dt = {},
                ft = oe(dt),
                pt = ee(dt, lt),
                gt = Z(dt, lt, ut);
              st = ie(pt, gt, at);
              var mt = y(L('localStorage'), M);
              tt(nt, rt, mt.setDebugEnabled, gt, ft), et(rt, ct, mt, st, ut);
              var ht = ae(nt),
                yt = b(ct, st),
                vt = he(ct),
                bt = Ce(vt, M, ht),
                St = Se(Te, vt, M, ht),
                Ct = be(Te, vt, M, ht),
                _t = _e(M, ht),
                It = ve(
                  De(
                    it,
                    me(ge(yt, Ae, bt, St), Ie(yt, Ct, _t)),
                    fe(ue(yt, Me, Ae, St, bt), ce(yt, Me, Ct), _t),
                    ht
                  ),
                  yt,
                  Le,
                  Te,
                  ye(ct),
                  M
                );
              we(g, rt.rules || [], It);
            }
            return nt;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_1c599acf48cf34e9)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_1c599acf48cf34e9
          ));
      }
    })();
    _satellite = $___var_ef66114074d9d39b;
  })();
}
