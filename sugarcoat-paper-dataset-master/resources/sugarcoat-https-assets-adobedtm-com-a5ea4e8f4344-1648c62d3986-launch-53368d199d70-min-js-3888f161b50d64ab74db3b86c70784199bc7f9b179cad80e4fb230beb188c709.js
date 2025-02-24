var _satellite;
{
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
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-11-23T16:38:34Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          gameID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.gameID' },
          },
          season: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.season' },
          },
          'siteName (QP)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'siteName', caseInsensitive: !0 },
          },
          contentType: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.contentType' },
          },
          isAudio: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.isAudio' },
          },
          'linkPosition (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.linkPosition' },
          },
          connection: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.connection' },
          },
          userAgent: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.userAgent' },
          },
          pageState: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.pageState' },
          },
          'linkType (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.linkType' },
          },
          articleDisplay: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleDisplay' },
          },
          'reportSuite (JS)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.reportSuite' },
          },
          tag_manager: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/constant.js',
            settings: { value: 'Adobe Launch' },
          },
          gameCategory: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.gameCategory' },
          },
          'link_type (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.link_type' },
          },
          mvpdProvider: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.mvpdProvider' },
          },
          carrier: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.carrier' },
          },
          broadcastAiringType: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.broadcastAiringType' },
          },
          'siteName (JS)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.siteName' },
          },
          searchPagination: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.searchPagination' },
          },
          siteSubsection: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.siteSubsection' },
          },
          isVertical: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.isVertical' },
          },
          purchaseID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.purchaseID' },
          },
          vodOrLive: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.vodOrLive' },
          },
          showID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.showID' },
          },
          gameState: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.gameState' },
          },
          nflGrant: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.nflGrant' },
          },
          watchCTA: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.watchCTA' },
          },
          'link_type (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.link_type' },
          },
          'searchTerm (QP)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'query', caseInsensitive: !0 },
          },
          partner: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.partner' },
          },
          pageView: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/constant.js',
            settings: { value: 'true' },
          },
          networkName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.networkName' },
          },
          refID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.refID' },
          },
          videoLength: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.videoLength' },
          },
          adPlacement: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.adPlacement' },
          },
          'link_url (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.link_url' },
          },
          playerType: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.playerType' },
          },
          'linkURL (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.linkURL' },
          },
          audioID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.audioID' },
          },
          'link_name (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.link_name' },
          },
          pushID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.pushID' },
          },
          galleryName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.galleryName' },
          },
          'link_module (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.link_module' },
          },
          favoriteTeam: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.favoriteTeam' },
          },
          videoPosition: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.videoPosition' },
          },
          friendlyName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.friendlyName' },
          },
          postalCode: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.postalCode' },
          },
          externalCampaign: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'campaign', caseInsensitive: !0 },
          },
          teamAbbr: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.teamAbbr' },
          },
          internalCampaign: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'icampaign', caseInsensitive: !0 },
          },
          buildNumber: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.buildNumber' },
          },
          profileID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.profileID' },
          },
          page_type: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.page_type' },
          },
          castWith: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.castWith' },
          },
          siteSection: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.siteSection' },
          },
          identityProvider: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.identityProvider' },
          },
          videoLocation: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.videoLocation' },
          },
          autoPlay: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'autoPlay' },
          },
          pageName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.pageName' },
          },
          contentName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.contentName' },
          },
          'linkPosition (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.linkPosition' },
          },
          event_name: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.event_name' },
          },
          adBlock: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.adBlock' },
          },
          'link_url (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.link_url' },
          },
          leagueID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.leagueID' },
          },
          countryBuild: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.countryBuild' },
          },
          'linkModule (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.linkModule' },
          },
          'linkModule (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.linkModule' },
          },
          billingMethod: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.billingMethod' },
          },
          'linkURL (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.linkURL' },
          },
          'link_position (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.link_position' },
          },
          'reportSuite (QP)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'reportSuite', caseInsensitive: !0 },
          },
          articleName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleName' },
          },
          testGroup: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.testGroup' },
          },
          gigyaUID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.gigyaUID' },
          },
          show_name: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.show_name' },
          },
          favoritesList: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.favoritesList' },
          },
          parselyDomain: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/pageInfo.js',
            settings: { attribute: 'hostname' },
          },
          pushData: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.pushData' },
          },
          siteLanguage: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.siteLanguage' },
          },
          contentPosition: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.contentPosition' },
          },
          photoName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.photoName' },
          },
          galleryID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.galleryID' },
          },
          signupType: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.signupType' },
          },
          codeVersion: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.codeVersion' },
          },
          'link_module (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.link_module' },
          },
          shieldContentID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.shieldContentID' },
          },
          global_rsid: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/constant.js',
            settings: { value: 'nflglobal2016' },
          },
          nflAuth: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.nflauth' },
          },
          videoCategory: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.videoCategory' },
          },
          'linkName (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.linkName' },
          },
          photoID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.photoID' },
          },
          optimizedFor: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.optimizedFor' },
          },
          audioView: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/constant.js',
            settings: { value: 'true' },
          },
          searchResultsReturned: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.searchResultsReturned' },
          },
          responsiveState: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.responsiveState' },
          },
          zipCode: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.zipCode' },
          },
          hashedProfileID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.hashedProfileID' },
          },
          videoSiteSection: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.videoSiteSection' },
          },
          'link_position (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.link_position' },
          },
          'linkType (PV)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.linkType' },
          },
          mcid: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'mcid', caseInsensitive: !0 },
          },
          videoName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.videoName' },
          },
          'URL Override': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'amppageURL', caseInsensitive: !0 },
          },
          leagueType: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.leagueType' },
          },
          'PROD RSID': {
            defaultValue: 'cbsnfl',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return '' != _satellite.getVar('reportSuite (QP)')
                  ? _satellite.getVar('reportSuite (QP)')
                  : 'cbsnfl';
              },
            },
          },
          show_id: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.show_id' },
          },
          userID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.userID' },
          },
          leaguePlayerType: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.leaguePlayerType' },
          },
          engagementActivity: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.engagementActivity' },
          },
          'searchTerm (JS)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.searchTerm' },
          },
          showName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.showName' },
          },
          'visitorMID (JS)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.visitorMID' },
          },
          videoView: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/constant.js',
            settings: { value: 'true' },
          },
          authStatus: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'authStatus' },
          },
          rsid: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.rsid' },
          },
          searchView: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/constant.js',
            settings: { value: 'true' },
          },
          game_id: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.game_id' },
          },
          teamID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.teamID' },
          },
          videoID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.videoID' },
          },
          'link_name (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.link_name' },
          },
          hashedEmail: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.hashedEmail' },
          },
          pageDetail: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.pageDetail' },
          },
          photoView: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.photoView' },
          },
          currency: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.currency' },
          },
          articleFreeForm2: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleFreeForm2' },
          },
          articleFreeForm4: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleFreeForm4' },
          },
          videoPageName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.videoPageName' },
          },
          articleFreeForm6: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleFreeForm6' },
          },
          articleID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleID' },
          },
          audioName: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.audioName' },
          },
          isPersistent: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.isPersistent' },
          },
          nfl_grant: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.nfl_grant' },
          },
          'visitorMID (QP)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'mcid', caseInsensitive: !0 },
          },
          engagementValue: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.engagementValue' },
          },
          articleFreeForm1: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleFreeForm1' },
          },
          profile_id: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.profile_id' },
          },
          favoritePlayers: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.favoritePlayers' },
          },
          articlePublishDate: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articlePublishDate' },
          },
          'hashedProfileID (Cookie)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'visitor',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'hashedProfileID' },
          },
          articlePlayers: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articlePlayers' },
          },
          pageUrl: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.pageUrl' },
          },
          'hashedEmail (Cookie)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'visitor',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'hashedEmail' },
          },
          pageUrlNoTilde: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if ('undefined' != typeof utag_data && 'undefined' != typeof utag_data.pageUrl) {
                  var e = utag_data.pageUrl;
                  return '~' === utag_data.pageUrl[0] && (e = e.substring(1, e.length)), e;
                }
              },
            },
          },
          'favoriteTeam (Cookie)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'visitor',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'favoriteTeam' },
          },
          appName: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'appName', caseInsensitive: !1 },
          },
          appNumber: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'appNumber', caseInsensitive: !1 },
          },
          'DEV RSID': {
            defaultValue: 'nfldev',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return '' != _satellite.getVar('reportSuite (QP)')
                  ? _satellite.getVar('reportSuite (QP)')
                  : 'nfldev';
              },
            },
          },
          'favoritePlayers (Cookie)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'visitor',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'favoritePlayers' },
          },
          appBuild: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'appBuild', caseInsensitive: !1 },
          },
          alternativeUrl: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.alternativeUrl' },
          },
          'gigyaUID (Cookie)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'visitor',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'gigyaUID' },
          },
          leagueTeamID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.leagueTeamID' },
          },
          'userDataCookie (Test Cookie)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'visitor',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'userDataCookie' },
          },
          quiz_complete: {
            defaultValue: '',
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.quiz_complete' },
          },
          'siteSubsection (QP)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'siteSubsection', caseInsensitive: !0 },
          },
          articleView: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/constant.js',
            settings: { value: 'true' },
          },
          hashedID: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.hashedID' },
          },
          articleCategoryId: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleCategoryId' },
          },
          'linkName (DC)': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'event.detail.linkName' },
          },
          articlePlayersID: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articlePlayersID' },
          },
          trackingMethod: {
            defaultValue: '',
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/constant.js',
            settings: { value: 'Launch' },
          },
          articleSlug: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleSlug' },
          },
          paymentMethod: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.paymentMethod' },
          },
          articleFreeForm3: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleFreeForm3' },
          },
          articleCategoryIdAlternate: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleCategoryId' },
          },
          'favoriteTeam-translated': {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = '',
                  t = _satellite.getVar('favoriteTeam (Cookie)');
                return (
                  '10404500-e7cb-7fce-3f10-4eeb269bd179' === t
                    ? (e = '49ers')
                    : '10400810-db30-43d6-221c-620006f3ca19' === t
                    ? (e = 'bears')
                    : '10400920-57c1-7656-e77e-1af3d900483e' === t
                    ? (e = 'bengals')
                    : '10400610-c40e-a673-1743-2ce2a5d5d731' === t
                    ? (e = 'bills')
                    : '10401400-b89b-96e5-55d1-caa7e18de3d8' === t
                    ? (e = 'broncos')
                    : '10401050-5e38-b907-1be1-55b91b19c057' === t
                    ? (e = 'browns')
                    : '10404900-d59e-b449-ef75-961e09ca027e' === t
                    ? (e = 'buccaneers')
                    : '10403800-517c-7b8c-65a3-c61b95d86123' === t
                    ? (e = 'cardinals')
                    : '10404400-3b35-073f-197e-194bb8240723' === t
                    ? (e = 'chargers')
                    : '10402310-a47e-10ea-7442-16b633633637' === t
                    ? (e = 'chiefs')
                    : '10402200-2ea3-84c3-e627-6a6b3b39d56d' === t
                    ? (e = 'colts')
                    : '10401200-a308-98ca-ad5f-95df2fefea68' === t
                    ? (e = 'cowboys')
                    : '10402700-1662-d8ad-f45c-0b0ea460d045' === t
                    ? (e = 'dolphins')
                    : '10403700-b939-3cbd-3d16-24d4d6742fa2' === t
                    ? (e = 'eagles')
                    : '10400200-f401-4e53-5175-0974e4f16cf7' === t
                    ? (e = 'falcons')
                    : '10403410-997c-9c75-256b-3b012f468bd0' === t
                    ? (e = 'giants')
                    : '10402250-89fe-7b86-ef98-9062cd354256' === t
                    ? (e = 'jaguars')
                    : '10403430-1bc3-42c4-c7d8-39f38aed5f12' === t
                    ? (e = 'jets')
                    : '10401540-f97c-2d19-6fcd-fac6490a48b7' === t
                    ? (e = 'lions')
                    : '10401800-ab22-323d-721a-cee4713c4c2d' === t
                    ? (e = 'packers')
                    : '10400750-259b-33ac-eee3-a3852e83cd1f' === t
                    ? (e = 'panthers')
                    : '10403200-69ab-9ea6-5af5-e240fbc08bea' === t
                    ? (e = 'patriots')
                    : '10402520-96bf-e9f2-4f68-8521ca896060' === t
                    ? (e = 'raiders')
                    : '10402510-8931-0d5f-9815-79bb79649a65' === t
                    ? (e = 'rams')
                    : '10400325-48de-3d6a-be29-8f829437f4c8' === t
                    ? (e = 'ravens')
                    : '10405110-ec3c-669e-2614-db3dc1736e95' === t
                    ? (e = 'redskins')
                    : '10403300-f235-cf9b-6d3a-2f182be48dd1' === t
                    ? (e = 'saints')
                    : '10404600-adcd-28ac-5826-b4d95ec2a228' === t
                    ? (e = 'seahawks')
                    : '10403900-8251-6892-d81c-4348525c2d47' === t
                    ? (e = 'steelers')
                    : '10408713-191c-6da2-c8ff-84762c48a270' === t
                    ? (e = 'irv')
                    : '10408711-f23b-0417-9c29-82a7078fb320' === t
                    ? (e = 'ric')
                    : '10402120-b0bc-693d-098a-803014096eb0' === t
                    ? (e = 'texans')
                    : '10402100-447f-396e-8149-0a434ffb2f23' === t
                    ? (e = 'titans')
                    : '10403000-5851-f9d5-da45-78365a05b6b0' === t && (e = 'vikings'),
                  e
                );
              },
            },
          },
          articleExpiredStatus: {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = new Date(),
                  t = new Date(_satellite.getVar('articlePublishDate'));
                if (Math.abs((e - t) / 86400000) < 7) var n = 'current';
                else n = 'expired';
                return n;
              },
            },
          },
          articleDescription: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleDescription' },
          },
          articleFreeForm8: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleFreeForm8' },
          },
          articleThumbnailUrl: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleThumbnailUrl' },
          },
          articleAdvertiser: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleAdvertiser' },
          },
          articleFreeForm5: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleFreeForm5' },
          },
          articleFreeForm9: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleFreeForm9' },
          },
          articleAuthor: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleAuthor' },
          },
          articleNameMixedCase: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleName' },
          },
          articleLayout: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleLayout' },
          },
          articleGames: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleGames' },
          },
          articleTeams: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleTeams' },
          },
          articleFreeForm7: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'utag_data.articleFreeForm7' },
          },
        },
        extensions: {
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
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
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a,
                    i = n('@adobe/reactor-cookie'),
                    o = n('@adobe/reactor-promise'),
                    s = n('@adobe/reactor-window'),
                    c = n('../helpers/settingsHelper'),
                    u = n('../helpers/augmenters'),
                    l = n('../helpers/applyTrackerVariables'),
                    d = n('../helpers/loadLibrary'),
                    f = n('../helpers/generateVersion')(r.buildInfo.turbineBuildDate),
                    p = 'beforeSettings',
                    m = r.getSharedModule('adobe-mcid', 'mcid-instance'),
                    g = function (e) {
                      return !e || 'true' === i.get(e);
                    },
                    v = function (r) {
                      return o
                        .all(
                          u.map(function (e) {
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
                    h = function (e) {
                      return (
                        m &&
                          (r.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = m)),
                        e
                      );
                    },
                    b = function (e) {
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
                    y = function (e, t, n) {
                      return (
                        t.loadPhase === p &&
                          t.source &&
                          (r.logger.info('Calling custom script before settings.'),
                          t.source.call(s, n)),
                        l(n, e || {}),
                        t.loadPhase !== p &&
                          t.source &&
                          (r.logger.info('Calling custom script after settings.'),
                          t.source.call(s, n)),
                        n
                      );
                    },
                    _ = function (e, t) {
                      return (
                        c.isAudienceManagementEnabled(e) &&
                          (t.loadModule('AudienceManagement'),
                          r.logger.info('Initializing AudienceManagement module'),
                          t.AudienceManagement.setup(e.moduleProperties.audienceManager.config)),
                        t
                      );
                    },
                    C =
                      ((a = r.getExtensionSettings()),
                      g(a.trackingCookieName)
                        ? d(a)
                            .then(v)
                            .then(h)
                            .then(b)
                            .then(y.bind(null, a.trackerProperties, a.customSetup || {}))
                            .then(_.bind(null, a))
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
                    c = /prop([0-9]+)/,
                    u = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    l = function (e, t, n) {
                      return n.indexOf(e) === t;
                    },
                    d = function (e, t, n) {
                      var r = Object.keys(t).filter(u.test.bind(u));
                      return (
                        n && r.push('events'),
                        (r = r.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && e && l(e, t, r);
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
                          return 'None' !== e && l(e, t, n);
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
                            var r = c.exec(e.value);
                            r && (t = i + 'c' + r[1]);
                          }
                        }
                        a[e.name] = t;
                      });
                    },
                    m = {
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
                        var t = m[e],
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
                    c = n('./pollHelper'),
                    u = function (e, t) {
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
                    l = function (e) {
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
                        l(e).map(function (e) {
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
                        return t.then(u.bind(null, e, n));
                      case s.LIB_TYPES.PREINSTALLED:
                        return t
                          .then(c.poll.bind(null, i, e.libraryCode.trackerVariableName))
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
                    c = 250,
                    u = function (e, t, n) {
                      r.logger.info('Found property located at: "' + t + '"].'), e(n);
                    },
                    a = function (a, i) {
                      return new o(function (e, t) {
                        if (a[i]) return u(e, i, a[i]);
                        var n = 1,
                          r = setInterval(function () {
                            a[i] && (u(e, i, a[i]), clearInterval(r)),
                              s <= n &&
                                (clearInterval(r),
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
              orgId: 'F75C3025512D2C1D0A490D44@AdobeOrg',
              customSetup: {
                source: function (e) {
                  e.usePlugins = !0;
                  var a = 'NFL.com - Launch|v20200225';
                  (e.doPlugins = function (e) {
                    console.log('fired plugins'),
                      (e.eVar27 = _satellite.cookie.get('hashedEmail')),
                      (e.eVar28 = _satellite.cookie.get('gigyaUID')),
                      (e.eVar29 = _satellite.cookie.get('favoritePlayers')),
                      (e.eVar38 = _satellite.cookie.get('favoriteTeam')),
                      (e.eVar90 = _satellite.cookie.get('hashedProfileID')),
                      (e.linkTrackVars = e.apl(
                        e.linkTrackVars,
                        'eVar27,eVar28,eVar38,eVar90',
                        ',',
                        2
                      )),
                      (e.eVar21 = _satellite.cookie.get('tap4a')),
                      (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar21', ',', 2)),
                      sessionStorage.getItem('virtualPV') == undefined
                        ? ((e.eVar2 = _satellite.getVar('pageName')),
                          (e.pageName = e.eVar2),
                          (e.eVar3 = _satellite.getVar('siteSection')),
                          (e.prop8 = _satellite.getVar('siteSection')),
                          (e.channel = e.eVar3))
                        : ((e.pageName = e.eVar2),
                          (e.channel = e.eVar3),
                          sessionStorage.removeItem('virtualPV')),
                      (e.linkTrackVars = e.apl(
                        e.linkTrackVars,
                        'eVar2,eVar3,prop8,eVar16',
                        ',',
                        2
                      )),
                      (e.prop49 = a + '|' + e.version);
                    try {
                      e.prop49 += '|' + e.visitor.version;
                    } catch (r) {
                      e.prop49 += '|Visitor API Version Not Available';
                    }
                    try {
                      e.prop49 += '|' + _satellite.buildInfo.buildDate;
                    } catch (r) {
                      e.prop49 += '|Launch Version Not Available';
                    }
                    try {
                      var t = e.visitor.isClientSideMarketingCloudVisitorID();
                      e.prop49 +=
                        null == t ? '|Existing ID' : t ? '|Client Side ID' : '|Server Side ID';
                    } catch (r) {
                      e.prop49 += '|Unknown ID state';
                    }
                    try {
                      'undefined' != typeof adobe && '' !== adobe
                        ? (e.prop49 += '|' + adobe.target.VERSION)
                        : (e.prop49 += '|Target Version Not Available');
                    } catch (r) {
                      e.prop49 += '|Target Version Not Available';
                    }
                    if (
                      ('undefined' != typeof e.linkType && 0 !== e.linkType && '' !== e.linkType
                        ? ((e.prop48 = e.linkType),
                          'o' == e.prop48
                            ? (e.contextData.linkTrackingName = 'D=pev2')
                            : (e.contextData.linkTrackingName = 'D=pev1'))
                        : (e.prop48 = 'pv'),
                      (e.prop50 = 'D=mid'),
                      (e.eVar50 = 'D=mid'),
                      e.events && (e.contextData.events = e.events),
                      (e.contextData.visitorAPI =
                        'undefined' != typeof Visitor
                          ? 'VisitorAPI Present'
                          : 'VisitorAPI Missing'),
                      (e.campaign = e.Util.getQueryParam('campaign')),
                      (e.eVar1 = e.Util.getQueryParam('icampaign')),
                      0 < e.eVar1.indexOf('#'))
                    ) {
                      var n = e.eVar1.split('#');
                      e.eVar1 = n[0];
                    }
                    'seatgeek' !== e.eVar3 && (e.eVar110 = e.Util.getQueryParam('strala_id')),
                      (e.eVar9 = e.getPreviousValue(e.pageName, 's_pv')),
                      (e.prop52 = 'D=v9'),
                      (e.events = e.apl(e.events, 'event1', ',', 2)),
                      (e.pageUrl = document.location.href),
                      0 < e.pageUrl.indexOf('?')
                        ? (e.pageUrl = e.pageUrl.split('?'))
                        : (e.pageUrl = e.pageUrl.split('#')),
                      (e.eVar57 = e.pageUrl[0]),
                      (e.eVar49 = e.pageUrl[1]),
                      (e.prop72 = 'D=v57'),
                      (e.prop51 = 'D=v49'),
                      (e.eVar73 = window.location.host),
                      (e.prop73 = 'D=v73'),
                      '' == e.Util.getQueryParam('reportSuite') &&
                        ((e.eVar25 = e.account), (e.prop22 = e.account)),
                      e.performanceTiming(),
                      (e.linkTrackVars = e.apl(
                        e.linkTrackVars,
                        'eVar1,eVar2,eVar9,eVar25,eVar49,eVar50,eVar57,eVar73,prop9,prop22,prop48,prop49,prop50,prop51,prop52,prop72,prop73,list1',
                        ',',
                        2
                      ));
                  }),
                    (e.getAamSegments = new Function(
                      'a',
                      'b',
                      "var s=this;var c=s.c_r(a);if(c){c=s.repl(c,b+'=','');}return c"
                    )),
                    (e.repl = new Function(
                      'x',
                      'o',
                      'n',
                      'var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x'
                    )),
                    (e.getPreviousValue = new Function(
                      'v',
                      'c',
                      'el',
                      "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
                    )),
                    (e.getTimeParting = new Function(
                      't',
                      'z',
                      "var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d=new Date();A=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14';C='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if(A=='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=parseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&&H<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J=new Date(I+(3600000*z));K=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();N=J.getDay();O=K[N];P='AM';Q='Weekday';R='00';if(M>30){R='30'}if(L>=12){P='PM';L=L-12};if(L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+':'+R+P;if(t=='h'){return T}if(t=='d'){return O}if(t=='w'){return Q}}"
                    )),
                    (e.getNewRepeat = new Function(
                      "var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w('s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s.c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cval+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else return 'Repeat';"
                    )),
                    (e.getDaysSinceLastVisit = new Function(
                      'c',
                      "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;"
                    )),
                    (e.apl = new Function(
                      'l',
                      'v',
                      'd',
                      'u',
                      "var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;for(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l;"
                    )),
                    (e.getSecondsConsumed = new Function(
                      'e',
                      'l',
                      'p',
                      'c',
                      "var s=this,x=new Date,d=x,r,k,i,j,J,w,K;x.setTime(x.getTime()+1860000);c=c?c:'s_gsc';if(typeof(s.linkType)=='undefined'||l==1){k=s.c_r(c);if(k){r=(d.getTime()-k)/1000;r=Math.round(r);if(r>0&&r<=1860){p=p?p:0;if(p==0&&s.events){j=s.split(s.events,',');for(w=0;w<j.length;w++){J=j[w].indexOf(e+'=')>-1?1:0;j[w]=J==1?'':j[w];}s.events=j.toString();if(s.events.charAt(s.events.length-1)==',')s.events=s.events.substring(0,s.events.length-1);}else{s.events='';}if(l==1){if(!s.inList('events',s.linkTrackVars)){if(s.inList('None',s.linkTrackVars))s.linkTrackVars='events';else s.linkTrackVars=s.apl(s.linkTrackVars,'events',',',2);}if(!s.inList(e,s.linkTrackEvents)){if(s.inList('None',s.linkTrackEvents))s.linkTrackEvents=e;else s.linkTrackEvents=s.apl(s.linkTrackEvents,e,',',2);}}r=r.toString();r=e+'='+r;s.events=s.apl(s.events,r,',',0);}}s.c_w(c,d.getTime(),x);}"
                    )),
                    (e.split = new Function(
                      'l',
                      'd',
                      'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                    )),
                    (e.inList = new Function(
                      'v',
                      'l',
                      'd',
                      "var s=this,ar=Array(),i=0,d=(d)?d:',';if(typeof(l)=='string'){if(s.split)ar=s.split(l,d);else if(l.split)ar=l.split(d);else return-1}else ar=l;while(i<ar.length){if(v==ar[i])return true;i++}return false;"
                    )),
                    (e.performanceTiming = new Function(
                      'v',
                      "var s=this;try{if(typeof event=='undefined'){if(v)s.ptv=v;if(typeof performance!='undefined'){s.performanceClear();performance.clearResourceTimings();if(s.c_r('s_ptc')!=''){s.performanceRead();}if(performance.timing.loadEventEnd==0){s.pi=setInterval(function(){s.performanceWriteFull();},250);}else if(performance.timing.loadEventEnd>0){if(!s.ptc){s.performanceWriteFull();}else if(s.ptc==performance.timing.loadEventEnd){if(performance.getEntries().length==0){s.pwp=setInterval(function(){s.performanceWritePart();},500)}}}}}else{if(typeof s.linkType!='undefined'){if(s.linkType=='e'){s.performanceRead();}}}}catch(err){console.debug('performanceTiming: '+err);}"
                    )),
                    (e.performanceClear = new Function(
                      '',
                      "var cda=['rdr','apc','dns','tcp','req','rsp','prc','onl','tot','pfi','ppi'];for(var c=0;c<cda.length;c++){s.contextData[cda[c]]='';}s[s.ptv]='';"
                    )),
                    (e.performanceWriteFull = new Function(
                      '',
                      "var s=this;if(performance.timing.loadEventEnd>0)clearInterval(s.pi);try{if(s.c_r('s_ptc')==''&&performance.timing.loadEventEnd>0){try{var pt=performance.timing;var pta='';pta='pt.rdr$'+s.performanceCheck(pt.fetchStart,pt.navigationStart);pta+='^^pt.apc$'+s.performanceCheck(pt.domainLookupStart,pt.fetchStart);pta+='^^pt.dns$'+s.performanceCheck(pt.domainLookupEnd,pt.domainLookupStart);pta+='^^pt.tcp$'+s.performanceCheck(pt.connectEnd,pt.connectStart);pta+='^^pt.req$'+s.performanceCheck(pt.responseStart,pt.connectEnd);pta+='^^pt.rsp$'+s.performanceCheck(pt.responseEnd,pt.responseStart);pta+='^^pt.prc$'+s.performanceCheck(pt.loadEventStart,pt.domLoading);pta+='^^pt.onl$'+s.performanceCheck(pt.loadEventEnd,pt.loadEventStart);pta+='^^pt.tot$'+s.performanceCheck(pt.loadEventEnd,pt.navigationStart);pta+='^^pt.pfi$1';s.c_w('s_ptc',pta);if(s.ptv)s.performanceGetEntries();}catch(err){return}}}catch(err){return}s.ptc=performance.timing.loadEventEnd;"
                    )),
                    (e.performanceWritePart = new Function(
                      '',
                      "var s=this;if(performance.getEntries().length>0){if(s.ppfe===performance.getEntries().length){clearInterval(s.pwp);}else{s.ppfe=performance.getEntries().length;}}try{var tempPe=((performance.getEntries()[performance.getEntries().length-1].responseEnd-performance.getEntries()[0].startTime)/1000).toFixed(2);if(s.ptv)s.performanceGetEntries();pta='pt.rsp$'+tempPe;pta+='^^pt.tot$'+tempPe;pta+='^^pt.ppi$1';s.c_w('s_ptc',pta);}catch(err){return;}"
                    )),
                    (e.performanceGetEntries = new Function(
                      '',
                      "var s=this;if(s.c_r('s_ptc')==''){try{s.c_w('s_ptc',tempPe);if(sessionStorage&&navigator.cookieEnabled&&s.ptv!='undefined'){var pe=performance.getEntries();var tempPe='';for(var i=0;i<pe.length;i++){tempPe+='!';tempPe+=pe[i].name.indexOf('?')>-1?pe[i].name.split('?')[0]:pe[i].name;tempPe+='|'+(Math.round(pe[i].startTime)/1000).toFixed(1)+'|'+(Math.round(pe[i].duration)/1000).toFixed(1)+'|'+pe[i].initiatorType;}sessionStorage.setItem('s_pec',tempPe);}}catch(err){return;}}"
                    )),
                    (e.performanceCheck = new Function(
                      'a',
                      'b',
                      'if(a>=0&&b>=0){if((a-b)<60000&&((a-b)>=0)){return parseFloat((a-b)/1000).toFixed(2);}else{return 600;}}'
                    )),
                    (e.performanceRead = new Function(
                      '',
                      "var s=this;if(performance.timing.loadEventEnd>0)clearInterval(s.pi);var cv=s.c_r('s_ptc');if(cv!=''){var cva=s.split(cv,'^^');for(var x=0;x<(cva.length);x++){s.contextData[cva[x].split('$')[0]]=cva[x].split('$')[1];}}s.c_w('s_ptc','',0);if(sessionStorage&&navigator.cookieEnabled&&s.ptv!='undefined'){s[s.ptv]=sessionStorage.getItem('s_pec');sessionStorage.setItem('s_pec','',0);}else{s[s.ptv]='sessionStorage Unavailable';}"
                    ));
                },
              },
              libraryCode: {
                type: 'managed',
                accounts: {
                  staging: ['%DEV RSID%'],
                  production: ['%PROD RSID%'],
                  development: ['%DEV RSID%'],
                },
                useActivityMap: !0,
                scopeTrackerGlobally: !0,
              },
              moduleProperties: { audienceManager: { config: { partner: 'nfl' } } },
              trackerProperties: {
                eVars: [
                  { name: 'eVar4', type: 'value', value: '%adBlock%' },
                  { name: 'eVar14', type: 'value', value: '%siteSubsection%' },
                  { name: 'eVar20', type: 'value', value: '%buildNumber%' },
                  { name: 'eVar24', type: 'value', value: '%optimizedFor%' },
                  { name: 'eVar26', type: 'value', value: '%gameID%' },
                  { name: 'eVar33', type: 'value', value: '%siteName (JS)%' },
                  { name: 'eVar37', type: 'value', value: '%identityProvider%' },
                  { name: 'eVar48', type: 'value', value: '%siteLanguage%' },
                  { name: 'eVar67', type: 'value', value: '%responsiveState%' },
                  { name: 'eVar83', type: 'value', value: '%pageDetail%' },
                  { name: 'eVar88', type: 'value', value: '%partner%' },
                  { name: 'eVar94', type: 'value', value: '%pageState%' },
                  { name: 'eVar100', type: 'value', value: '%gameState%' },
                ],
                props: [
                  { name: 'prop2', type: 'value', value: '%siteSubsection%' },
                  { name: 'prop12', type: 'value', value: '%optimizedFor%' },
                  { name: 'prop33', type: 'value', value: '%siteName (JS)%' },
                  { name: 'prop63', type: 'value', value: '%identityProvider%' },
                  { name: 'prop67', type: 'value', value: '%pageDetail%' },
                  { name: 'prop71', type: 'value', value: '%trackingMethod%' },
                ],
                currencyCode: 'USD',
                trackingServer: 'metrics.nfl.com',
                trackInlineStats: !0,
                trackDownloadLinks: !0,
                trackExternalLinks: !0,
                trackingServerSecure: 'smetrics.nfl.com',
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
              'adobe-mcid/src/lib/actions/setCustomerIds.js': {
                name: 'set-customer-ids',
                displayName: 'Set Customer IDs',
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('../sharedModules/mcidInstance'),
                    i = r.logger,
                    o = function (e) {
                      return 'string' == typeof e && 0 < e.length;
                    },
                    s = function (e) {
                      var r = {},
                        a = [];
                      return (
                        e.forEach(function (e) {
                          var t = e.integrationCode,
                            n = e.value;
                          o(t) && o(n)
                            ? ((r[t] = { id: n }),
                              e.hasOwnProperty('authState') &&
                                (r[e.integrationCode].authState = e.authState),
                              e.hasOwnProperty('hashType') &&
                                (r[e.integrationCode].hashType = e.hashType))
                            : a.push(e);
                        }),
                        a.length && i.warn('Rejected these customer ids: ' + JSON.stringify(a)),
                        r
                      );
                    };
                  e.exports = function (e) {
                    if (a) {
                      var t = s(e.customerIds);
                      a.setCustomerIDs(t), i.info('Set Customer IDs: ' + JSON.stringify(t));
                    } else i.warn('MCID instance cannot be found. Cannot set Customer IDs.');
                  };
                },
              },
              'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
                script: function (e, t, n, m) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    a = n('../codeLibrary/VisitorAPI'),
                    g = n('../../view/utils/timeUnits'),
                    v = function (e) {
                      return e.reduce(function (e, t) {
                        var n = /^(true|false)$/i.test(t.value) ? JSON.parse(t.value) : t.value;
                        return (e[t.name] = n), e;
                      }, {});
                    },
                    i = function (e) {
                      var t = m.getExtensionSettings();
                      if ('string' != typeof t.orgId)
                        throw new TypeError('Org ID is not a string.');
                      var n = v(t.variables || []),
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
                        if (s && g[s]) {
                          var c = o * g[s];
                          n.optInStorageExpiry = c;
                        }
                      } else !0 === a && (n.optInStorageExpiry = 33696000);
                      var u = t.previousPermissions;
                      u && (n.previousPermissions = u);
                      var l = t.preOptInApprovals;
                      if (l) n.preOptInApprovals = l;
                      else {
                        var d = t.preOptInApprovalInput;
                        d && (n.preOptInApprovals = d);
                      }
                      var f = t.isIabContext;
                      f && (n.isIabContext = f);
                      var p = e.getInstance(t.orgId, n);
                      return (
                        m.logger.info('Created instance using orgId: "' + t.orgId + '"'),
                        m.logger.info('Set variables: ' + JSON.stringify(n)),
                        p.getMarketingCloudVisitorID(function (e) {
                          m.logger.info('Obtained Marketing Cloud Visitor Id: ' + e);
                        }, !0),
                        p
                      );
                    },
                    o = function (t) {
                      return (m.getExtensionSettings().pathExclusions || []).some(function (e) {
                        return e.valueIsRegex ? new RegExp(e.value, 'i').test(t) : e.value === t;
                      });
                    },
                    s = null;
                  (_satellite.getVisitorId = function () {
                    return s;
                  }),
                    o(r.location.pathname)
                      ? m.logger.warn(
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
                            (e || (n && !z.isObjectEmpty(n))) &&
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
                      function u (e, t, n) {
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
                        (this.log = fe('log', n, r)),
                          (this.warn = fe('warn', n, r)),
                          (this.error = fe('error', n, r));
                      }
                      function A (e, t) {
                        var a = (0 < arguments.length && void 0 !== e ? arguments[0] : {})
                            .cookieName,
                          i = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies;
                        if (!a || !i) return { get: ke, set: ke, remove: ke };
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
                      function l (e) {
                        (this.name = this.constructor.name),
                          (this.message = e),
                          'function' == typeof Error.captureStackTrace
                            ? Error.captureStackTrace(this, this.constructor)
                            : (this.stack = new Error(e).stack);
                      }
                      function d (e, t) {
                        function n (e, t) {
                          var n = he(e);
                          return n.length
                            ? n.every(function (e) {
                                return !!t[e];
                              })
                            : be(t);
                        }
                        function r () {
                          j(D),
                            x(re.COMPLETE),
                            S(C.status, C.permissions),
                            u &&
                              _.set(C.permissions, {
                                optInCookieDomain: l,
                                optInStorageExpiry: d,
                              }),
                            P.execute(Ae);
                        }
                        function a (n) {
                          return function (e, t) {
                            if (!ye(e))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return x(re.CHANGED), Object.assign(D, _e(he(e), n)), t || r(), C;
                          };
                        }
                        var i = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          o = i.doesOptInApply,
                          s = i.previousPermissions,
                          c = i.preOptInApprovals,
                          u = i.isOptInStorageEnabled,
                          l = i.optInCookieDomain,
                          d = i.optInStorageExpiry,
                          f = i.isIabContext,
                          p = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                          m = Ie(s);
                        Ve(m, 'Invalid `previousPermissions`!'),
                          Ve(c, 'Invalid `preOptInApprovals`!');
                        var g,
                          v,
                          h,
                          b,
                          y,
                          _ = A({ cookieName: 'adobeujs-optin' }, { cookies: p }),
                          C = this,
                          S = U(C),
                          P = ue(),
                          w = Pe(m),
                          E = Pe(c),
                          T = u ? _.get() : {},
                          k = {},
                          I = ((y = T), we(w) || (y && we(y)) ? re.COMPLETE : re.PENDING),
                          V =
                            ((g = E),
                            (v = w),
                            (h = T),
                            (b = _e(ce, !o)),
                            o ? Object.assign({}, b, g, v, h) : b),
                          D = Ce(V),
                          x = function (e) {
                            return (I = e);
                          },
                          j = function (e) {
                            return (V = e);
                          };
                        (C.deny = a(!1)),
                          (C.approve = a(!0)),
                          (C.denyAll = C.deny.bind(C, ce)),
                          (C.approveAll = C.approve.bind(C, ce)),
                          (C.isApproved = function (e) {
                            return n(e, C.permissions);
                          }),
                          (C.isPreApproved = function (e) {
                            return n(e, E);
                          }),
                          (C.fetchPermissions = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t && arguments[1],
                              r = n ? C.on(re.COMPLETE, e) : ke;
                            return (
                              !o || (o && C.isComplete) || c
                                ? e(C.permissions)
                                : n ||
                                  P.add(Ae, function () {
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
                              throw new Error(Oe);
                            k[e.name] || (k[e.name] = e).onRegister.call(e, C);
                          }),
                          (C.execute = je(k)),
                          (C.memoizeContent = function (e) {
                            Te(e) && _.set(e, { optInCookieDomain: l, optInStorageExpiry: d });
                          }),
                          (C.getMemoizedContent = function (e) {
                            var t = _.get();
                            if (t) return t[e];
                          }),
                          Object.defineProperties(C, {
                            permissions: {
                              get: function () {
                                return V;
                              },
                            },
                            status: {
                              get: function () {
                                return I;
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
                                return Object.keys(k);
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
                          (a = null), e.call(e, new l('The call took longer than you wanted!'));
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
                          ge.error('__tcfapi not found');
                        } else ge.error('__tcfapi not found');
                      }
                      function m (t, e, n) {
                        var r = 2 < arguments.length && void 0 !== n ? arguments[2] : [],
                          a = !0 === t.vendor.consents[e],
                          i = r.every(function (e) {
                            return !0 === t.purpose.consents[e];
                          });
                        return a && i;
                      }
                      function g () {
                        var n = this;
                        (n.name = 'iabPlugin'), (n.version = '0.0.2');
                        var i,
                          o = ue(),
                          s = { transparencyAndConsentData: null },
                          c = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {};
                            return (s[e] = n);
                          };
                        (n.fetchConsentData = function (e) {
                          var t = f(e.callback, e.timeout);
                          u({ callback: t });
                        }),
                          (n.isApproved = function (e) {
                            var n = e.callback,
                              r = e.category,
                              t = e.timeout;
                            if (s.transparencyAndConsentData)
                              return n(null, m(s.transparencyAndConsentData, ie[r], oe[r]));
                            var a = f(function (e, t) {
                              n(e, m(t, ie[r], oe[r]));
                            }, t);
                            u({ category: r, callback: a });
                          }),
                          (n.onRegister = function (r) {
                            i = r;
                            var t = Object.keys(ie),
                              e = function (e, n) {
                                !e &&
                                  n &&
                                  (t.forEach(function (e) {
                                    var t = m(n, ie[e], oe[e]);
                                    r[t ? 'approve' : 'deny'](e, !0);
                                  }),
                                  r.complete());
                              };
                            n.fetchConsentData({ callback: e });
                          });
                        var u = function (e) {
                            var t = e.callback;
                            if (s.transparencyAndConsentData)
                              return t(null, s.transparencyAndConsentData);
                            o.add('FETCH_CONSENT_DATA', t),
                              r(function (e, t) {
                                if (t) {
                                  var n = Ce(e),
                                    r = i.getMemoizedContent('iabConsentHash'),
                                    a = me(n.tcString).toString(32);
                                  (n.consentString = e.tcString),
                                    (n.hasConsentChangedSinceLastCmpPull = r !== a),
                                    c('transparencyAndConsentData', n),
                                    i.memoizeContent({ iabConsentHash: a });
                                }
                                o.execute('FETCH_CONSENT_DATA', [
                                  null,
                                  s.transparencyAndConsentData,
                                ]);
                              });
                          },
                          r = function (e) {
                            var t = xe(ie),
                              n = p();
                            'function' == typeof n && n('getTCData', 2, e, t);
                          };
                      }
                      var H =
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
                      var v,
                        h,
                        b,
                        y,
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
                        _ = G.STATE_KEYS_MAP,
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
                            var t = this.findField(_.MCMID, e),
                              n = a.call(this, _.MCMID, e);
                            return void 0 !== t ? t : n();
                          }),
                            (this.getVisitorValues = function (t) {
                              this.getMarketingCloudVisitorID(function (e) {
                                t({ MCMID: e });
                              });
                            });
                        },
                        S = G.MESSAGES,
                        P = G.ASYNC_API_MAP,
                        w = G.SYNC_API_MAP,
                        E = function () {
                          function a () {}
                          function i (e, t) {
                            var n = this;
                            return function () {
                              return n.callbackRegistry.add(e, t), n.messageParent(S.GETSTATE), '';
                            };
                          }
                          function e (r) {
                            this[P[r]] = function (e) {
                              e = e || a;
                              var t = this.findField(r, e),
                                n = i.call(this, r, e);
                              return void 0 !== t ? t : n();
                            };
                          }
                          function t (e) {
                            this[w[e]] = function () {
                              return this.findField(e, a) || {};
                            };
                          }
                          Object.keys(P).forEach(e, this), Object.keys(w).forEach(t, this);
                        },
                        T = G.ASYNC_API_MAP,
                        k = function () {
                          Object.keys(T).forEach(function (t) {
                            this[T[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        z =
                          ((function (e, t) {
                            (t.isObjectEmpty = function (e) {
                              return e === Object(e) && 0 === Object.keys(e).length;
                            }),
                              (t.isValueEmpty = function (e) {
                                return '' === e || t.isObjectEmpty(e);
                              });
                            var n = function () {
                              const $___old_416a5eeebdf4cb59 = {}.constructor.getOwnPropertyDescriptor(
                                Navigator.prototype,
                                'userAgent'
                              );
                              try {
                                if ($___old_416a5eeebdf4cb59)
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
                                    0 <= t.indexOf('MSIE ') ||
                                    (0 <= t.indexOf('Trident/') && 0 <= t.indexOf('Windows NT 6'))
                                  );
                                }.apply(this, arguments);
                              } finally {
                                if ($___old_416a5eeebdf4cb59)
                                  ({}.constructor.defineProperty(
                                    Navigator.prototype,
                                    'userAgent',
                                    $___old_416a5eeebdf4cb59
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
                          })((y = { exports: {} }), y.exports),
                          y.exports),
                        I =
                          (z.isObjectEmpty,
                          z.isValueEmpty,
                          z.getIeVersion,
                          z.encodeAndBuildRequest,
                          z.isObject,
                          z.defineGlobalNamespace,
                          z.pluck,
                          z.parseOptOut,
                          z.normalizeBoolean,
                          t),
                        V = G.MESSAGES,
                        D = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        J = function (i, o) {
                          (this.parse = function (e) {
                            try {
                              var n = {};
                              return (
                                e.data.split('|').forEach(function (e, t) {
                                  void 0 !== e && (n[D[t]] = 2 !== t ? e : JSON.parse(e));
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
                                a = -1 === Object.keys(V).indexOf(t.prefix);
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
                        x = G.MESSAGES,
                        j = function (e, t, n, r) {
                          function a (e) {
                            Object.assign(p, e);
                          }
                          function i (e) {
                            Object.assign(p.state, e),
                              Object.assign(p.state.ALLFIELDS, e),
                              p.callbackRegistry.executeAll(p.state);
                          }
                          function o (e) {
                            if (!v.isInvalid(e)) {
                              g = !1;
                              var t = v.parse(e);
                              p.setStateAndPublish(t.state);
                            }
                          }
                          function s (e) {
                            !g && m && ((g = !0), v.send(r, e));
                          }
                          function c () {
                            a(new C(n._generateID)),
                              p.getMarketingCloudVisitorID(),
                              p.callbackRegistry.executeAll(p.state, !0),
                              H.removeEventListener('message', u);
                          }
                          function u (e) {
                            if (!v.isInvalid(e)) {
                              var t = v.parse(e);
                              (g = !1),
                                H.clearTimeout(p._handshakeTimeout),
                                H.removeEventListener('message', u),
                                a(new E(p)),
                                H.addEventListener('message', o),
                                p.setStateAndPublish(t.state),
                                p.callbackRegistry.hasCallbacks() && s(x.GETSTATE);
                            }
                          }
                          function l () {
                            m && postMessage
                              ? (H.addEventListener('message', u),
                                s(x.HANDSHAKE),
                                (p._handshakeTimeout = setTimeout(c, 250)))
                              : c();
                          }
                          function d () {
                            H.s_c_in || ((H.s_c_il = []), (H.s_c_in = 0)),
                              (p._c = 'Visitor'),
                              (p._il = H.s_c_il),
                              (p._in = H.s_c_in),
                              (p._il[p._in] = p),
                              H.s_c_in++;
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
                            m = t.whitelistParentDomain;
                          (p.state = { ALLFIELDS: {} }),
                            (p.version = n.version),
                            (p.marketingCloudOrgID = e),
                            (p.cookieDomain = n.cookieDomain || '');
                          var g = !(p._instanceType = 'child'),
                            v = new J(e, m);
                          (p.callbackRegistry = I()),
                            (p.init = function () {
                              d(), f(), a(new k(p)), l();
                            }),
                            (p.findField = function (e, t) {
                              if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e];
                            }),
                            (p.messageParent = s),
                            (p.setStateAndPublish = i);
                        },
                        O = G.MESSAGES,
                        L = G.ALL_APIS,
                        M = G.ASYNC_API_MAP,
                        N = G.FIELDGROUP_TO_FIELD,
                        Y = function (a, r) {
                          function i () {
                            var r = {};
                            return (
                              Object.keys(L).forEach(function (e) {
                                var t = L[e],
                                  n = a[t]();
                                z.isValueEmpty(n) || (r[e] = n);
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
                                var t = M[e[0]];
                                a[t](r, !0);
                              } else n();
                            };
                          }
                          function n (e, t) {
                            var n = i();
                            r.send(e, t, n);
                          }
                          function s (e) {
                            u(e), n(e, O.HANDSHAKE);
                          }
                          function c (e) {
                            t(function () {
                              n(e, O.PARENTSTATE);
                            })();
                          }
                          function u (t) {
                            function e (e) {
                              n.call(a, e),
                                r.send(t, O.PARENTSTATE, { CUSTOMERIDS: a.getCustomerIDs() });
                            }
                            var n = a.setCustomerIDs;
                            a.setCustomerIDs = e;
                          }
                          return function (e) {
                            r.isInvalid(e) ||
                              (r.parse(e).prefix === O.HANDSHAKE ? s : c)(e.source);
                          };
                        },
                        W = function (r, n) {
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
                        Q = {
                          get: function (e) {
                            e = encodeURIComponent(e);
                            var t = (';' + document.cookie).split(' ').join(';'),
                              n = t.indexOf(';' + e + '='),
                              r = n < 0 ? n : t.indexOf(';', n + 1);
                            return n < 0
                              ? ''
                              : decodeURIComponent(
                                  t.substring(n + 2 + e.length, r < 0 ? t.length : r)
                                );
                          },
                          set: function (e, t, n) {
                            var r = u(n, 'cookieLifetime'),
                              a = u(n, 'expires'),
                              i = u(n, 'domain'),
                              o = u(n, 'secure') ? 'Secure' : '';
                            if (a && 'SESSION' !== r && 'NONE' !== r) {
                              var s = '' !== t ? parseInt(r || 0, 10) : -60;
                              if (s) (a = new Date()).setTime(a.getTime() + 1000 * s);
                              else if (1 === a) {
                                var c = (a = new Date()).getYear();
                                a.setYear(c + 2 + (c < 1900 ? 1900 : 0));
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
                          },
                          remove: function (e, t) {
                            var n = u(t, 'domain');
                            (n = n ? ' domain=' + n + ';' : ''),
                              (document.cookie =
                                encodeURIComponent(e) +
                                '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                                n);
                          },
                        },
                        $ = function (e) {
                          var t;
                          !e && H.location && (e = H.location.hostname);
                          var n,
                            r = (t = e).split('.');
                          for (n = r.length - 2; 0 <= n; n--)
                            if (
                              ((t = r.slice(n).join('.')), Q.set('test', 'cookie', { domain: t }))
                            )
                              return Q.remove('test', { domain: t }), t;
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
                        R = !!H.postMessage,
                        X = {
                          postMessage: function (e, t, n) {
                            var r = 1;
                            t &&
                              (R
                                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (n.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + r++ + '&' + e));
                          },
                          receiveMessage: function (t, n) {
                            var e;
                            try {
                              R &&
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
                                H.addEventListener
                                  ? H[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : H[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
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
                            c = 10;
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
                              (n = Math.floor(Math.random() * c)),
                              (i += r.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (c = 3)
                                : (1 == t || 2 == t) && 10 != c && n < 2
                                ? (c = 10)
                                : 2 < t && (c = 10);
                          return a + i;
                        },
                        ee = function (r) {
                          const $___old_26fa4224860fe23c = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_5ead72d553c28bc3 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_26fa4224860fe23c)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
                              ));
                            if ($___old_5ead72d553c28bc3)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
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
                                        .call(H.HTMLElement)
                                        .indexOf('Constructor') && (t = !1)),
                                  { corsType: e, corsCookiesEnabled: t }),
                                getCORSInstance: function () {
                                  const $___old_74d932a3537ede3e = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    ),
                                    $___old_32ac096ee821c9fc = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    );
                                  try {
                                    if ($___old_74d932a3537ede3e)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_afd3abb015d4d981.XMLHttpRequest
                                      ));
                                    if ($___old_32ac096ee821c9fc)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_afd3abb015d4d981.XMLHttpRequest
                                      ));
                                    return function () {
                                      return 'none' === this.corsMetadata.corsType
                                        ? null
                                        : new H[this.corsMetadata.corsType]();
                                    }.apply(this, arguments);
                                  } finally {
                                    if ($___old_74d932a3537ede3e)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_74d932a3537ede3e
                                      ));
                                    if ($___old_32ac096ee821c9fc)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_32ac096ee821c9fc
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
                                      for (var n = i.callback, r = H, a = 0; a < n.length; a++)
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
                            if ($___old_26fa4224860fe23c)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_26fa4224860fe23c
                              ));
                            if ($___old_5ead72d553c28bc3)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_5ead72d553c28bc3
                              ));
                          }
                        },
                        te = {
                          POST_MESSAGE_ENABLED: !!H.postMessage,
                          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                          MILLIS_PER_DAY: 86400000,
                          ADOBE_MC: 'adobe_mc',
                          ADOBE_MC_SDID: 'adobe_mc_sdid',
                          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                          ADOBE_MC_TTL_IN_MIN: 5,
                          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                          FIRST_PARTY_SERVER_COOKIE: 's_ecid',
                        },
                        ne = function (m, t) {
                          var a = H.document;
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
                                  m.idSyncContainerID +
                                  '#' +
                                  encodeURIComponent(a.location.origin);
                              return (
                                this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                                m.loadSSL &&
                                  (t = m.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                                (e = t + this.subdomain + '.demdex.net/dest5.html' + n),
                                (this.iframeHost = this.getIframeHost(e)),
                                (this.id =
                                  'destination_publishing_iframe_' +
                                  this.subdomain +
                                  '_' +
                                  m.idSyncContainerID),
                                e
                              );
                            },
                            checkDPIframeSrc: function () {
                              var e =
                                '?d_nsid=' +
                                m.idSyncContainerID +
                                '#' +
                                encodeURIComponent(a.location.href);
                              'string' == typeof m.dpIframeSrc &&
                                m.dpIframeSrc.length &&
                                ((this.id =
                                  'destination_publishing_iframe_' +
                                  (m._subdomain || this.subdomain || new Date().getTime()) +
                                  '_' +
                                  m.idSyncContainerID),
                                (this.iframeHost = this.getIframeHost(m.dpIframeSrc)),
                                (this.url = m.dpIframeSrc + e));
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
                                m.idSyncDisableSyncs ||
                                m.disableIdSyncs ||
                                m.idSyncDisable3rdPartySyncing ||
                                m.disableThirdPartyCookies ||
                                m.disableThirdPartyCalls
                              );
                            },
                            readyToAttachIframe: function () {
                              return (
                                this.readyToAttachIframePreliminary() &&
                                (this.doAttachIframe || m._doAttachIframe) &&
                                ((this.subdomain && 'nosubdomainreturned' !== this.subdomain) ||
                                  m._subdomain) &&
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
                                var c = this.jsonWaiting.shift();
                                this.process(c), this.requestToProcess();
                              }
                              m.idSyncDisableSyncs ||
                                m.disableIdSyncs ||
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
                              var n = m._getField('MCAAMLH'),
                                r = e.d_region || e.dcs_region;
                              return (
                                n
                                  ? r &&
                                    (m._setFieldExpire('MCAAMLH', t),
                                    m._setField('MCAAMLH', r),
                                    parseInt(n, 10) !== r &&
                                      ((this.regionChanged = !0),
                                      this.timesRegionChanged++,
                                      m._setField('MCSYNCSOP', ''),
                                      m._setField('MCSYNCS', ''),
                                      (n = r)))
                                  : (n = r) &&
                                    (m._setFieldExpire('MCAAMLH', t), m._setField('MCAAMLH', n)),
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
                                      z.encodeAndBuildRequest(a.url || [], ','),
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
                              m._readVisitor();
                              var i,
                                o,
                                s = m._getField(a),
                                c = !1,
                                u = !1,
                                l = Math.ceil(new Date().getTime() / te.MILLIS_PER_DAY);
                              s
                                ? ((i = s.split('*')),
                                  (c = (o = this.pruneSyncData(i, e.id, l)).dataPresent),
                                  (u = o.dataValid),
                                  (c && u) || this.fireSync(r, e, t, i, a, l))
                                : ((i = []), this.fireSync(r, e, t, i, a, l));
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
                            fireSync: function (e, t, n, r, l, a) {
                              var d = this;
                              if (e) {
                                if ('img' === t.tag) {
                                  var i,
                                    o,
                                    s,
                                    c,
                                    u = t.url,
                                    f = m.loadSSL ? 'https:' : 'http:';
                                  for (i = 0, o = u.length; i < o; i++) {
                                    (s = u[i]), (c = /^\/\//.test(s));
                                    var p = new Image();
                                    p.addEventListener(
                                      'load',
                                      (function (o, s, c, u) {
                                        return function () {
                                          (d.onPagePixels[o] = null), m._readVisitor();
                                          var e,
                                            t,
                                            n,
                                            r,
                                            a = m._getField(l),
                                            i = [];
                                          if (a)
                                            for (t = 0, n = (e = a.split('*')).length; t < n; t++)
                                              (r = e[t]).match('^' + s.id + '-') || i.push(r);
                                          d.setSyncTrackingData(i, s, c, u);
                                        };
                                      })(this.onPagePixels.length, t, l, a)
                                    ),
                                      (p.src = (c ? f : '') + s),
                                      this.onPagePixels.push(p);
                                  }
                                }
                              } else this.addMessage(n), this.setSyncTrackingData(r, t, l, a);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                m._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push((te.POST_MESSAGE_ENABLED ? '' : t) + e);
                            },
                            setSyncTrackingData: function (e, t, n, r) {
                              e.push(t.id + '-' + (r + Math.ceil(t.ttl / 60 / 24))),
                                this.manageSyncsSize(e),
                                m._setField(n, e.join('*'));
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
                                ('string' == typeof m._subdomain && m._subdomain.length
                                  ? (this.subdomain = m._subdomain)
                                  : (this.subdomain = e.subdomain || ''),
                                (this.url = this.getUrl())),
                                e.ibs instanceof Array &&
                                  e.ibs.length &&
                                  (this.doAttachIframe = !0),
                                this.readyToAttachIframe() &&
                                  (m.idSyncAttachIframeOnWindowLoad
                                    ? (t.windowLoaded ||
                                        'complete' === a.readyState ||
                                        'loaded' === a.readyState) &&
                                      this.attachIframe()
                                    : this.attachIframeASAP()),
                                'function' == typeof m.idSyncIDCallResult
                                  ? m.idSyncIDCallResult(e)
                                  : this.requestToProcess(e),
                                'function' == typeof m.idSyncAfterIDCallResult &&
                                  m.idSyncAfterIDCallResult(e);
                            },
                            canMakeSyncIDCall: function (e, t) {
                              return (
                                m._forceSyncIDCall || !e || t - e > te.DAYS_BETWEEN_SYNC_ID_CALLS
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
                        q = {
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
                        U = function (e) {
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
                        ie = (e((v = {}), ae.AAM, 565), e(v, ae.ECID, 565), v),
                        oe = (e((h = {}), ae.AAM, [1, 10]), e(h, ae.ECID, [1, 10]), h),
                        se = ['videoaa', 'iabConsentHash'],
                        ce =
                          ((b = ae),
                          Object.keys(b).map(function (e) {
                            return b[e];
                          })),
                        ue = function () {
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
                            : le;
                        },
                        pe = r,
                        me = (function () {
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
                        ge = new pe('[ADOBE OPT-IN]'),
                        ve = function (e, t) {
                          return B(e) === t;
                        },
                        he = function (e, t) {
                          return e instanceof Array ? e : ve(e, 'string') ? [e] : t || [];
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
                          var n = 1 < arguments.length && void 0 !== t && arguments[1];
                          return (
                            !(!e || Se(e)) &&
                            he(e).every(function (e) {
                              return -1 < ce.indexOf(e) || (n && -1 < se.indexOf(e));
                            })
                          );
                        },
                        _e = function (e, n) {
                          return e.reduce(function (e, t) {
                            return (e[t] = n), e;
                          }, {});
                        },
                        Ce = function (e) {
                          return JSON.parse(JSON.stringify(e));
                        },
                        Se = function (e) {
                          return (
                            '[object Array]' === Object.prototype.toString.call(e) && !e.length
                          );
                        },
                        Pe = function (e) {
                          if (Te(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        we = function (e) {
                          return void 0 === e || (Te(e) ? ye(Object.keys(e), !0) : Ee(e));
                        },
                        Ee = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && ve(e, 'string') && ye(Object.keys(t), !0);
                          } catch (e) {
                            return !1;
                          }
                        },
                        Te = function (e) {
                          return null !== e && ve(e, 'object') && !1 === Array.isArray(e);
                        },
                        ke = function () {},
                        Ie = function (e) {
                          return ve(e, 'function') ? e() : e;
                        },
                        Ve = function (e, t) {
                          we(e) || ge.error(''.concat(t));
                        },
                        De = function (t) {
                          return Object.keys(t).map(function (e) {
                            return t[e];
                          });
                        },
                        xe = function (e) {
                          return De(e).filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                          });
                        },
                        je = function (d) {
                          return function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                              n = t.command,
                              r = t.params,
                              a = void 0 === r ? {} : r,
                              i = t.callback,
                              o = void 0 === i ? ke : i;
                            if (!n || -1 === n.indexOf('.'))
                              throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                              var s = n.split('.'),
                                c = d[s[0]],
                                u = s[1];
                              if (!c || 'function' != typeof c[u])
                                throw new Error('Make sure the plugin and API name exist.');
                              var l = Object.assign(a, { callback: o });
                              c[u].call(c, l);
                            } catch (d) {
                              ge.error('[execute] Something went wrong: ' + d.message);
                            }
                          };
                        };
                      (l.prototype = Object.create(Error.prototype)),
                        (l.prototype.constructor = l);
                      var Ae = 'fetchPermissions',
                        Oe = '[OptIn#registerPlugin] Plugin is invalid.';
                      (d.Categories = ae), (d.TimeoutError = l);
                      var Le = Object.freeze({ OptIn: d, IabPlugin: g }),
                        Me = function (d, f) {
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
                                if (!z.isObject(e))
                                  return void a({ error: 'Invalid parameters passed.' });
                                var s = e;
                                if ('string' != typeof (e = s.subdomain) || !e.length)
                                  return void a({
                                    error: 'config.subdomain is not a populated string.',
                                  });
                                var c = s.urlDestinations;
                                if (!(c instanceof Array && c.length))
                                  return void a({
                                    error: 'config.urlDestinations is not a populated array.',
                                  });
                                var u = [];
                                c.forEach(function (e) {
                                  z.isObject(e) &&
                                    (e.hideReferrer
                                      ? e.message && i.addMessage(e.message)
                                      : u.push(e));
                                }),
                                  (function l () {
                                    u.length &&
                                      setTimeout(function () {
                                        var e = new Image(),
                                          t = u.shift();
                                        (e.src = t.url), i.onPageDestinationsFired.push(t), l();
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
                              c = 8 * e.length,
                              u = (B.h = B.h || []),
                              l = (B.k = B.k || []),
                              d = l.length,
                              f = {},
                              p = 2;
                            d < 64;
                            p++
                          )
                            if (!f[p]) {
                              for (n = 0; n < 313; n += p) f[n] = p;
                              (u[d] = (a(p, 0.5) * i) | 0), (l[d++] = (a(p, 1 / 3) * i) | 0);
                            }
                          for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
                          for (n = 0; n < e.length; n++) {
                            if ((r = e.charCodeAt(n)) >> 8) return;
                            s[n >> 2] |= r << (((3 - n) % 4) * 8);
                          }
                          for (s[s.length] = (c / i) | 0, s[s.length] = c, r = 0; r < s.length; ) {
                            var m = s.slice(r, (r += 16)),
                              g = u;
                            for (u = u.slice(0, 8), n = 0; n < 64; n++) {
                              var v = m[n - 15],
                                h = m[n - 2],
                                b = u[0],
                                y = u[4],
                                _ =
                                  u[7] +
                                  (t(y, 6) ^ t(y, 11) ^ t(y, 25)) +
                                  ((y & u[5]) ^ (~y & u[6])) +
                                  l[n] +
                                  (m[n] =
                                    n < 16
                                      ? m[n]
                                      : (m[n - 16] +
                                          (t(v, 7) ^ t(v, 18) ^ (v >>> 3)) +
                                          m[n - 7] +
                                          (t(h, 17) ^ t(h, 19) ^ (h >>> 10))) |
                                        0);
                              (u = [
                                (_ +
                                  ((t(b, 2) ^ t(b, 13) ^ t(b, 22)) +
                                    ((b & u[1]) ^ (b & u[2]) ^ (u[1] & u[2])))) |
                                  0,
                              ].concat(u))[4] = (u[4] + _) | 0;
                            }
                            for (n = 0; n < 8; n++) u[n] = (u[n] + g[n]) | 0;
                          }
                          for (n = 0; n < 8; n++)
                            for (r = 3; r + 1; r--) {
                              var C = (u[n] >> (8 * r)) & 255;
                              o += (C < 16 ? 0 : '') + C.toString(16);
                            }
                          return o;
                        },
                        Re = function (e, t) {
                          return (
                            ('SHA-256' !== t &&
                              'SHA256' !== t &&
                              'sha256' !== t &&
                              'sha-256' !== t) ||
                              (e = Ne(e)),
                            e
                          );
                        },
                        Fe = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        qe = Le.OptIn;
                      z.defineGlobalNamespace(), (window.adobe.OptInCategories = qe.Categories);
                      var Ue = function (r, n, e) {
                        function f () {
                          h._customerIDsHashChanged = !1;
                        }
                        function t (e) {
                          var r = e;
                          return function (e) {
                            var t = e || P.location.href;
                            try {
                              var n = h._extractParamFromUri(t, r);
                              if (n) return R.parsePipeDelimetedKeyValues(n);
                            } catch (e) {}
                          };
                        }
                        function a (e) {
                          function t (e, t, n) {
                            e && e.match(te.VALID_VISITOR_ID_REGEX) && (n === k && (S = !0), t(e));
                          }
                          t(e[k], h.setMarketingCloudVisitorID, k),
                            h._setFieldExpire(j, -1),
                            t(e[D], h.setAnalyticsVisitorID);
                        }
                        function i (e) {
                          (e = e || {}),
                            (h._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                            (h._supplementalDataIDCurrentConsumed =
                              e.supplementalDataIDCurrentConsumed || {}),
                            (h._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                            (h._supplementalDataIDLastConsumed =
                              e.supplementalDataIDLastConsumed || {});
                        }
                        function o (e) {
                          function a (e, t, n) {
                            return (n = n ? (n += '|') : n) + (e + '=') + encodeURIComponent(t);
                          }
                          function t (e, t) {
                            var n = t[0],
                              r = t[1];
                            return null != r && r !== A && (e = a(n, r, e)), e;
                          }
                          var n,
                            r = e.reduce(t, '');
                          return (
                            (n = (n = r) ? (n += '|') : n) + 'TS=' + R.getTimestampInSeconds()
                          );
                        }
                        function s (e) {
                          var t = e.minutesToLive,
                            n = '';
                          return (
                            (h.idSyncDisableSyncs || h.disableIdSyncs) &&
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
                          return !(!h.configs.doesOptInApply || (b.optIn.isComplete && d()));
                        }
                        function d () {
                          return h.configs.doesOptInApply && h.configs.isIabContext
                            ? b.optIn.isApproved(b.optIn.Categories.ECID) && C
                            : b.optIn.isApproved(b.optIn.Categories.ECID);
                        }
                        function u () {
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
                              r = h[t];
                            h[t] = function (e) {
                              return d() && h.isAllowed()
                                ? r.apply(h, arguments)
                                : ('function' == typeof e && h._callCallback(e, [n]), n);
                            };
                          });
                        }
                        function l () {
                          var e = h._getAudienceManagerURLData(),
                            t = e.url;
                          return h._loadData(T, t, null, e);
                        }
                        function p (e, t) {
                          if (((C = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t &&
                            t.gdprApplies &&
                            ((y = t.consentString),
                            (_ = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            l(),
                            v();
                        }
                        function m (e, t) {
                          if (((C = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies &&
                            ((y = t.consentString),
                            (_ = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            h.init(),
                            v();
                        }
                        function g () {
                          b.optIn.isComplete &&
                            (b.optIn.isApproved(b.optIn.Categories.ECID)
                              ? h.configs.isIabContext
                                ? b.optIn.execute({
                                    command: 'iabPlugin.fetchConsentData',
                                    callback: m,
                                  })
                                : (h.init(), v())
                              : h.configs.isIabContext
                              ? b.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: p,
                                })
                              : (u(), v()));
                        }
                        function v () {
                          b.optIn.off('complete', g);
                        }
                        if (!e || e.split('').reverse().join('') !== r)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var h = this,
                          b = window.adobe,
                          y = '',
                          _ = 0,
                          C = !1,
                          S = !1;
                        h.version = '5.0.1';
                        var P = H,
                          w = P.Visitor;
                        (w.version = h.version),
                          (w.AuthState = G.AUTH_STATE),
                          (w.OptOut = G.OPT_OUT),
                          P.s_c_in || ((P.s_c_il = []), (P.s_c_in = 0)),
                          (h._c = 'Visitor'),
                          (h._il = P.s_c_il),
                          (h._in = P.s_c_in),
                          (h._il[h._in] = h),
                          P.s_c_in++,
                          (h._instanceType = 'regular'),
                          (h._log = { requests: [] }),
                          (h.marketingCloudOrgID = r),
                          (h.cookieName = 'AMCV_' + r),
                          (h.sessionCookieName = 'AMCVS_' + r),
                          (h.cookieDomain = $()),
                          (h.loadSSL = !0),
                          (h.loadTimeout = 30000),
                          (h.CORSErrors = []),
                          (h.marketingCloudServer = h.audienceManagerServer = 'dpm.demdex.net'),
                          (h.sdidParamExpiry = 30);
                        var E = null,
                          T = 'MC',
                          k = 'MCMID',
                          I = 'MCIDTS',
                          V = 'A',
                          D = 'MCAID',
                          x = 'AAM',
                          j = 'MCAAMB',
                          A = 'NONE',
                          O = function (e) {
                            return !Object.prototype[e];
                          },
                          L = ee(h);
                        (h.FIELDS = G.FIELDS),
                          (h.cookieRead = function (e) {
                            return Q.get(e);
                          }),
                          (h.cookieWrite = function (e, t, n) {
                            var r = h.cookieLifetime ? ('' + h.cookieLifetime).toUpperCase() : '',
                              a = !1;
                            return (
                              h.configs &&
                                h.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (a = !0),
                              Q.set(e, '' + t, {
                                expires: n,
                                domain: h.cookieDomain,
                                cookieLifetime: r,
                                secure: a,
                              })
                            );
                          }),
                          (h.resetState = function (e) {
                            e ? h._mergeServerState(e) : i();
                          }),
                          (h._isAllowedDone = !1),
                          (h._isAllowedFlag = !1),
                          (h.isAllowed = function () {
                            return (
                              h._isAllowedDone ||
                                ((h._isAllowedDone = !0),
                                (h.cookieRead(h.cookieName) ||
                                  h.cookieWrite(h.cookieName, 'T', 1)) &&
                                  (h._isAllowedFlag = !0)),
                              'T' === h.cookieRead(h.cookieName) &&
                                h._helpers.removeCookie(h.cookieName),
                              h._isAllowedFlag
                            );
                          }),
                          (h.setMarketingCloudVisitorID = function (e) {
                            h._setMarketingCloudFields(e);
                          }),
                          (h._use1stPartyMarketingCloudServer = !1),
                          (h.getMarketingCloudVisitorID = function (e, t) {
                            h.marketingCloudServer &&
                              h.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                              (h._use1stPartyMarketingCloudServer = !0);
                            var n = h._getAudienceManagerURLData('_setMarketingCloudFields'),
                              r = n.url;
                            return h._getRemoteField(k, r, e, t, n);
                          });
                        var M = function (t, e) {
                          var n = {};
                          h.getMarketingCloudVisitorID(function () {
                            e.forEach(function (e) {
                              n[e] = h._getField(e, !0);
                            }),
                              -1 !== e.indexOf('MCOPTOUT')
                                ? h.isOptedOut(
                                    function (e) {
                                      (n.MCOPTOUT = e), t(n);
                                    },
                                    null,
                                    !0
                                  )
                                : t(n);
                          }, !0);
                        };
                        (h.getVisitorValues = function (e, t) {
                          var n = {
                              MCMID: { fn: h.getMarketingCloudVisitorID, args: [!0], context: h },
                              MCOPTOUT: { fn: h.isOptedOut, args: [void 0, !0], context: h },
                              MCAID: { fn: h.getAnalyticsVisitorID, args: [!0], context: h },
                              MCAAMLH: {
                                fn: h.getAudienceManagerLocationHint,
                                args: [!0],
                                context: h,
                              },
                              MCAAMB: { fn: h.getAudienceManagerBlob, args: [!0], context: h },
                            },
                            r = t && t.length ? z.pluck(n, t) : n;
                          t && -1 === t.indexOf('MCAID') ? M(e, t) : W(r, e);
                        }),
                          (h._currentCustomerIDs = {}),
                          (h._customerIDsHashChanged = !1),
                          (h._newCustomerIDsHash = ''),
                          (h.setCustomerIDs = function (e, t) {
                            if (!h.isOptedOut() && e) {
                              if (!z.isObject(e) || z.isObjectEmpty(e)) return !1;
                              var n, r, a, i;
                              for (n in (h._readVisitor(), e))
                                if (
                                  O(n) &&
                                  ((h._currentCustomerIDs.dataSources =
                                    h._currentCustomerIDs.dataSources || {}),
                                  (t = (r = e[n]).hasOwnProperty('hashType') ? r.hashType : t),
                                  r)
                                )
                                  if ('object' === B(r)) {
                                    var o = {};
                                    if (r.id) {
                                      if (t) {
                                        if (!(i = Re(Fe(r.id), t))) return;
                                        (r.id = i), (o.hashType = t);
                                      }
                                      o.id = r.id;
                                    }
                                    null != r.authState && (o.authState = r.authState),
                                      (h._currentCustomerIDs.dataSources[n] = o);
                                  } else if (t) {
                                    if (!(i = Re(Fe(r), t))) return;
                                    h._currentCustomerIDs.dataSources[n] = { id: i, hashType: t };
                                  } else h._currentCustomerIDs.dataSources[n] = { id: r };
                              var s = h.getCustomerIDs(!0),
                                c = h._getField('MCCIDH'),
                                u = '';
                              for (a in (c || (c = 0), s)) {
                                var l = s[a];
                                if (!z.isObjectEmpty(l))
                                  for (n in l)
                                    O(n) &&
                                      (u +=
                                        (u ? '|' : '') +
                                        n +
                                        '|' +
                                        ((r = l[n]).id ? r.id : '') +
                                        (r.authState ? r.authState : ''));
                              }
                              (h._newCustomerIDsHash = String(h._hash(u))),
                                h._newCustomerIDsHash !== c &&
                                  ((h._customerIDsHashChanged = !0), h._mapCustomerIDs(f));
                            }
                          }),
                          (h.syncIdentity = function (e, t) {
                            if (!h.isOptedOut() && e) {
                              if (!z.isObject(e) || z.isObjectEmpty(e)) return !1;
                              var n, r, a, i, o;
                              for (n in (h._readVisitor(), e))
                                if (
                                  O(n) &&
                                  ((h._currentCustomerIDs.nameSpaces =
                                    h._currentCustomerIDs.nameSpaces || {}),
                                  (t = (r = e[n]).hasOwnProperty('hashType') ? r.hashType : t),
                                  r && 'object' === B(r))
                                ) {
                                  var s = {};
                                  if (r.id) {
                                    if (t) {
                                      if (!(a = Re(Fe(r.id), t))) return;
                                      (r.id = a), (s.hashType = t);
                                    }
                                    s.id = r.id;
                                  }
                                  null != r.authState && (s.authState = r.authState),
                                    r.dataSource &&
                                      ((h._currentCustomerIDs.dataSources =
                                        h._currentCustomerIDs.dataSources || {}),
                                      (i = r.dataSource),
                                      (h._currentCustomerIDs.dataSources[i] = s)),
                                    (h._currentCustomerIDs.nameSpaces[n] = s);
                                }
                              var c = h.getCustomerIDs(!0),
                                u = h._getField('MCCIDH'),
                                l = '';
                              for (o in (u || (u = '0'), c)) {
                                var d = c[o];
                                if (!z.isObjectEmpty(d))
                                  for (n in d)
                                    O(n) &&
                                      (l +=
                                        (l ? '|' : '') +
                                        n +
                                        '|' +
                                        ((r = d[n]).id ? r.id : '') +
                                        (r.authState ? r.authState : ''));
                              }
                              (h._newCustomerIDsHash = String(h._hash(l))),
                                h._newCustomerIDsHash !== u &&
                                  ((h._customerIDsHashChanged = !0), h._mapCustomerIDs(f));
                            }
                          }),
                          (h.getCustomerIDs = function (e) {
                            h._readVisitor();
                            var t,
                              n,
                              r = { dataSources: {}, nameSpaces: {} },
                              a = h._currentCustomerIDs.dataSources;
                            for (t in a)
                              O(t) &&
                                (n = a[t]).id &&
                                (r.dataSources[t] || (r.dataSources[t] = {}),
                                (r.dataSources[t].id = n.id),
                                null != n.authState
                                  ? (r.dataSources[t].authState = n.authState)
                                  : (r.dataSources[t].authState = w.AuthState.UNKNOWN),
                                n.hashType && (r.dataSources[t].hashType = n.hashType));
                            var i = h._currentCustomerIDs.nameSpaces;
                            for (t in i)
                              O(t) &&
                                (n = i[t]).id &&
                                (r.nameSpaces[t] || (r.nameSpaces[t] = {}),
                                (r.nameSpaces[t].id = n.id),
                                null != n.authState
                                  ? (r.nameSpaces[t].authState = n.authState)
                                  : (r.nameSpaces[t].authState = w.AuthState.UNKNOWN),
                                n.hashType && (r.nameSpaces[t].hashType = n.hashType));
                            return e ? r : r.dataSources;
                          }),
                          (h.setAnalyticsVisitorID = function (e) {
                            h._setAnalyticsFields(e);
                          }),
                          (h.getAnalyticsVisitorID = function (e, t, n) {
                            if (!R.isTrackingServerPopulated() && !n)
                              return h._callCallback(e, ['']), '';
                            var r = '';
                            if (
                              (n ||
                                (r = h.getMarketingCloudVisitorID(function () {
                                  h.getAnalyticsVisitorID(e, !0);
                                })),
                              r || n)
                            ) {
                              var a = n ? h.marketingCloudServer : h.trackingServer,
                                i = '';
                              h.loadSSL &&
                                (n
                                  ? h.marketingCloudServerSecure &&
                                    (a = h.marketingCloudServerSecure)
                                  : h.trackingServerSecure && (a = h.trackingServerSecure));
                              var o = {};
                              if (a) {
                                var s = 'http' + (h.loadSSL ? 's' : '') + '://' + a + '/id',
                                  c =
                                    'd_visid_ver=' +
                                    h.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(h.marketingCloudOrgID) +
                                    (r ? '&mid=' + encodeURIComponent(r) : '') +
                                    (h.idSyncDisable3rdPartySyncing || h.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  u = [
                                    's_c_il',
                                    h._in,
                                    '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (i =
                                  s +
                                  '?' +
                                  c +
                                  '&callback=s_c_il%5B' +
                                  h._in +
                                  '%5D._set' +
                                  (n ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (o.corsUrl = s + '?' + c),
                                  (o.callback = u);
                              }
                              return (o.url = i), h._getRemoteField(n ? k : D, i, e, t, o);
                            }
                            return '';
                          }),
                          (h.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              h.getMarketingCloudVisitorID(function () {
                                h.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var n = h._getField(D);
                              if (
                                (!n &&
                                  R.isTrackingServerPopulated() &&
                                  (n = h.getAnalyticsVisitorID(function () {
                                    h.getAudienceManagerLocationHint(e, !0);
                                  })),
                                n || !R.isTrackingServerPopulated())
                              ) {
                                var r = h._getAudienceManagerURLData(),
                                  a = r.url;
                                return h._getRemoteField('MCAAMLH', a, e, t, r);
                              }
                            }
                            return '';
                          }),
                          (h.getLocationHint = h.getAudienceManagerLocationHint),
                          (h.getAudienceManagerBlob = function (e, t) {
                            if (
                              h.getMarketingCloudVisitorID(function () {
                                h.getAudienceManagerBlob(e, !0);
                              })
                            ) {
                              var n = h._getField(D);
                              if (
                                (!n &&
                                  R.isTrackingServerPopulated() &&
                                  (n = h.getAnalyticsVisitorID(function () {
                                    h.getAudienceManagerBlob(e, !0);
                                  })),
                                n || !R.isTrackingServerPopulated())
                              ) {
                                var r = h._getAudienceManagerURLData(),
                                  a = r.url;
                                return (
                                  h._customerIDsHashChanged && h._setFieldExpire(j, -1),
                                  h._getRemoteField(j, a, e, t, r)
                                );
                              }
                            }
                            return '';
                          }),
                          (h._supplementalDataIDCurrent = ''),
                          (h._supplementalDataIDCurrentConsumed = {}),
                          (h._supplementalDataIDLast = ''),
                          (h._supplementalDataIDLastConsumed = {});
                        var N = !(h.getSupplementalDataID = function (e, t) {
                          h._supplementalDataIDCurrent ||
                            t ||
                            (h._supplementalDataIDCurrent = h._generateID(1));
                          var n = h._supplementalDataIDCurrent;
                          return (
                            h._supplementalDataIDLast && !h._supplementalDataIDLastConsumed[e]
                              ? ((n = h._supplementalDataIDLast),
                                (h._supplementalDataIDLastConsumed[e] = !0))
                              : n &&
                                (h._supplementalDataIDCurrentConsumed[e] &&
                                  ((h._supplementalDataIDLast = h._supplementalDataIDCurrent),
                                  (h._supplementalDataIDLastConsumed =
                                    h._supplementalDataIDCurrentConsumed),
                                  (h._supplementalDataIDCurrent = n = t ? '' : h._generateID(1)),
                                  (h._supplementalDataIDCurrentConsumed = {})),
                                n && (h._supplementalDataIDCurrentConsumed[e] = !0)),
                            n
                          );
                        });
                        (h._liberatedOptOut = null),
                          (h.getOptOut = function (e, t) {
                            var n = h._getAudienceManagerURLData('_setMarketingCloudFields'),
                              r = n.url;
                            if (d()) return h._getRemoteField('MCOPTOUT', r, e, t, n);
                            if (
                              (h._registerCallback('liberatedOptOut', e),
                              null !== h._liberatedOptOut)
                            )
                              return (
                                h._callAllCallbacks('liberatedOptOut', [h._liberatedOptOut]),
                                (N = !1),
                                h._liberatedOptOut
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
                              (H[a] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    n,
                                    r = z.parseOptOut(e, t, A);
                                  (t = r.optOut),
                                    (n = 1000 * r.d_ottl),
                                    (h._liberatedOptOut = t),
                                    setTimeout(function () {
                                      h._liberatedOptOut = null;
                                    }, n);
                                }
                                h._callAllCallbacks('liberatedOptOut', [t]), (N = !1);
                              }),
                              L.fireCORS(n),
                              null
                            );
                          }),
                          (h.isOptedOut = function (n, r, e) {
                            r || (r = w.OptOut.GLOBAL);
                            var t = h.getOptOut(function (e) {
                              var t = e === w.OptOut.GLOBAL || 0 <= e.indexOf(r);
                              h._callCallback(n, [t]);
                            }, e);
                            return t ? t === w.OptOut.GLOBAL || 0 <= t.indexOf(r) : null;
                          }),
                          (h._fields = null),
                          (h._fieldsExpired = null),
                          (h._hash = function (e) {
                            var t,
                              n = 0;
                            if (e)
                              for (t = 0; t < e.length; t++)
                                (n = (n << 5) - n + e.charCodeAt(t)), (n &= n);
                            return n;
                          }),
                          (h._generateID = Z),
                          (h._generateLocalMID = function () {
                            var e = h._generateID(0);
                            return (U.isClientSideMarketingCloudVisitorID = !0), e;
                          }),
                          (h._callbackList = null),
                          (h._callCallback = function (e, t) {
                            try {
                              'function' == typeof e ? e.apply(P, t) : e[1].apply(e[0], t);
                            } catch (e) {}
                          }),
                          (h._registerCallback = function (e, t) {
                            t &&
                              (null == h._callbackList && (h._callbackList = {}),
                              null == h._callbackList[e] && (h._callbackList[e] = []),
                              h._callbackList[e].push(t));
                          }),
                          (h._callAllCallbacks = function (e, t) {
                            if (null != h._callbackList) {
                              var n = h._callbackList[e];
                              if (n) for (; 0 < n.length; ) h._callCallback(n.shift(), t);
                            }
                          }),
                          (h._addQuerystringParam = function (e, t, n, r) {
                            var a = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                              i = R.parseHash(e),
                              o = R.hashlessUrl(e);
                            if (-1 === o.indexOf('?')) return o + '?' + a + i;
                            var s = o.split('?'),
                              c = s[0] + '?',
                              u = s[1];
                            return c + R.addQueryParamAtLocation(u, a, r) + i;
                          }),
                          (h._extractParamFromUri = function (e, t) {
                            var n = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                            if (n && n.length) return decodeURIComponent(n[1]);
                          }),
                          (h._parseAdobeMcFromUrl = t(te.ADOBE_MC)),
                          (h._parseAdobeMcSdidFromUrl = t(te.ADOBE_MC_SDID)),
                          (h._attemptToPopulateSdidFromUrl = function (e) {
                            var t = h._parseAdobeMcSdidFromUrl(e),
                              n = 1000000000;
                            t && t.TS && (n = R.getTimestampInSeconds() - t.TS),
                              t &&
                                t.SDID &&
                                t.MCORGID === r &&
                                n < h.sdidParamExpiry &&
                                ((h._supplementalDataIDCurrent = t.SDID),
                                (h._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (h._attemptToPopulateIdsFromUrl = function () {
                            var e = h._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var t = R.getTimestampInSeconds() - e.TS;
                              if (Math.floor(t / 60) > te.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== r)
                                return;
                              a(e);
                            }
                          }),
                          (h._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((r = e),
                                  (e = R.isObject(r) ? r : JSON.parse(r))[h.marketingCloudOrgID])
                                ) {
                                  var t = e[h.marketingCloudOrgID];
                                  (n = t.customerIDs),
                                    R.isObject(n) && h.setCustomerIDs(n),
                                    i(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                            var n, r;
                          }),
                          (h._timeout = null),
                          (h._loadData = function (e, t, n, r) {
                            (t = h._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (r.url = h._addQuerystringParam(r.url, 'd_fieldgroup', e, 1)),
                              (r.corsUrl = h._addQuerystringParam(
                                r.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (U.fieldGroupObj[e] = !0),
                              r === Object(r) &&
                                r.corsUrl &&
                                'XMLHttpRequest' === L.corsMetadata.corsType &&
                                L.fireCORS(r, n, e);
                          }),
                          (h._clearTimeout = function (e) {
                            null != h._timeout &&
                              h._timeout[e] &&
                              (clearTimeout(h._timeout[e]), (h._timeout[e] = 0));
                          }),
                          (h._settingsDigest = 0),
                          (h._getSettingsDigest = function () {
                            if (!h._settingsDigest) {
                              var e = h.version;
                              h.audienceManagerServer && (e += '|' + h.audienceManagerServer),
                                h.audienceManagerServerSecure &&
                                  (e += '|' + h.audienceManagerServerSecure),
                                (h._settingsDigest = h._hash(e));
                            }
                            return h._settingsDigest;
                          }),
                          (h._readVisitorDone = !1),
                          (h._readVisitor = function () {
                            if (!h._readVisitorDone) {
                              h._readVisitorDone = !0;
                              var e,
                                t,
                                n,
                                r,
                                a,
                                i,
                                o = h._getSettingsDigest(),
                                s = !1,
                                c = h.cookieRead(h.cookieName),
                                u = new Date();
                              if (
                                (c ||
                                  S ||
                                  h.discardTrackingServerECID ||
                                  (c = h.cookieRead(te.FIRST_PARTY_SERVER_COOKIE)),
                                null == h._fields && (h._fields = {}),
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
                                      ? ((a = parseInt(t[1], 10)), (i = 0 < t[1].indexOf('s')))
                                      : ((a = 0), (i = !1)),
                                    s &&
                                      ('MCCIDH' === n && (r = ''),
                                      0 < a && (a = u.getTime() / 1000 - 60)),
                                    n &&
                                      r &&
                                      (h._setField(n, r, 1),
                                      0 < a &&
                                        ((h._fields['expire' + n] = a + (i ? 's' : '')),
                                        (u.getTime() >= 1000 * a ||
                                          (i && !h.cookieRead(h.sessionCookieName))) &&
                                          (h._fieldsExpired || (h._fieldsExpired = {}),
                                          (h._fieldsExpired[n] = !0))));
                              !h._getField(D) &&
                                R.isTrackingServerPopulated() &&
                                (c = h.cookieRead('s_vi')) &&
                                1 < (c = c.split('|')).length &&
                                0 <= c[0].indexOf('v1') &&
                                (0 <= (e = (r = c[1]).indexOf('[')) && (r = r.substring(0, e)),
                                r && r.match(te.VALID_VISITOR_ID_REGEX) && h._setField(D, r));
                            }
                          }),
                          (h._appendVersionTo = function (e) {
                            var t = 'vVersion|' + h.version,
                              n = e ? h._getCookieVersion(e) : null;
                            return (
                              n
                                ? K.areVersionsDifferent(n, h.version) &&
                                  (e = e.replace(te.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (h._writeVisitor = function () {
                            var e,
                              t,
                              n = h._getSettingsDigest();
                            for (e in h._fields)
                              O(e) &&
                                h._fields[e] &&
                                'expire' !== e.substring(0, 6) &&
                                ((t = h._fields[e]),
                                (n +=
                                  (n ? '|' : '') +
                                  e +
                                  (h._fields['expire' + e] ? '-' + h._fields['expire' + e] : '') +
                                  '|' +
                                  t));
                            (n = h._appendVersionTo(n)), h.cookieWrite(h.cookieName, n, 1);
                          }),
                          (h._getField = function (e, t) {
                            return null == h._fields ||
                              (!t && h._fieldsExpired && h._fieldsExpired[e])
                              ? null
                              : h._fields[e];
                          }),
                          (h._setField = function (e, t, n) {
                            null == h._fields && (h._fields = {}),
                              (h._fields[e] = t),
                              n || h._writeVisitor();
                          }),
                          (h._getFieldList = function (e, t) {
                            var n = h._getField(e, t);
                            return n ? n.split('*') : null;
                          }),
                          (h._setFieldList = function (e, t, n) {
                            h._setField(e, t ? t.join('*') : '', n);
                          }),
                          (h._getFieldMap = function (e, t) {
                            var n = h._getFieldList(e, t);
                            if (n) {
                              var r,
                                a = {};
                              for (r = 0; r < n.length; r += 2) a[n[r]] = n[r + 1];
                              return a;
                            }
                            return null;
                          }),
                          (h._setFieldMap = function (e, t, n) {
                            var r,
                              a = null;
                            if (t) for (r in ((a = []), t)) O(r) && (a.push(r), a.push(t[r]));
                            h._setFieldList(e, a, n);
                          }),
                          (h._setFieldExpire = function (e, t, n) {
                            var r = new Date();
                            r.setTime(r.getTime() + 1000 * t),
                              null == h._fields && (h._fields = {}),
                              (h._fields['expire' + e] =
                                Math.floor(r.getTime() / 1000) + (n ? 's' : '')),
                              t < 0
                                ? (h._fieldsExpired || (h._fieldsExpired = {}),
                                  (h._fieldsExpired[e] = !0))
                                : h._fieldsExpired && (h._fieldsExpired[e] = !1),
                              n &&
                                (h.cookieRead(h.sessionCookieName) ||
                                  h.cookieWrite(h.sessionCookieName, '1'));
                          }),
                          (h._findVisitorID = function (e) {
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
                                e && 'NOTARGET' === (e = e.toUpperCase()) && (e = A),
                                (e && (e === A || e.match(te.VALID_VISITOR_ID_REGEX))) ||
                                  (e = '')),
                              e
                            );
                          }),
                          (h._setFields = function (e, t) {
                            if (
                              (h._clearTimeout(e),
                              null != h._loading && (h._loading[e] = !1),
                              U.fieldGroupObj[e] && U.setState(e, !1),
                              e === T)
                            ) {
                              !0 !== U.isClientSideMarketingCloudVisitorID &&
                                (U.isClientSideMarketingCloudVisitorID = !1);
                              var n = h._getField(k);
                              if (!n || h.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(n = 'object' === B(t) && t.mid ? t.mid : h._findVisitorID(t))
                                ) {
                                  if (
                                    h._use1stPartyMarketingCloudServer &&
                                    !h.tried1stPartyMarketingCloudServer
                                  )
                                    return (
                                      (h.tried1stPartyMarketingCloudServer = !0),
                                      void h.getAnalyticsVisitorID(null, !1, !0)
                                    );
                                  n = h._generateLocalMID();
                                }
                                h._setField(k, n);
                              }
                              (n && n !== A) || (n = ''),
                                'object' === B(t) &&
                                  ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                    h._setFields(x, t),
                                  h._use1stPartyMarketingCloudServer &&
                                    t.mid &&
                                    h._setFields(V, { id: t.id })),
                                h._callAllCallbacks(k, [n]);
                            }
                            if (e === x && 'object' === B(t)) {
                              var r = 604800;
                              null != t.id_sync_ttl &&
                                t.id_sync_ttl &&
                                (r = parseInt(t.id_sync_ttl, 10));
                              var a = F.getRegionAndCheckIfChanged(t, r);
                              h._callAllCallbacks('MCAAMLH', [a]);
                              var i = h._getField(j);
                              (t.d_blob || t.blob) &&
                                ((i = t.d_blob) || (i = t.blob),
                                h._setFieldExpire(j, r),
                                h._setField(j, i)),
                                i || (i = ''),
                                h._callAllCallbacks(j, [i]),
                                !t.error_msg &&
                                  h._newCustomerIDsHash &&
                                  h._setField('MCCIDH', h._newCustomerIDsHash);
                            }
                            if (e === V) {
                              var o = h._getField(D);
                              (o && !h.overwriteCrossDomainMCIDAndAID) ||
                                ((o = h._findVisitorID(t))
                                  ? o !== A && h._setFieldExpire(j, -1)
                                  : (o = A),
                                h._setField(D, o)),
                                (o && o !== A) || (o = ''),
                                h._callAllCallbacks(D, [o]);
                            }
                            if (h.idSyncDisableSyncs || h.disableIdSyncs)
                              F.idCallNotProcesssed = !0;
                            else {
                              F.idCallNotProcesssed = !1;
                              var s = {};
                              (s.ibs = t.ibs), (s.subdomain = t.subdomain), F.processIDCallData(s);
                            }
                            if (t === Object(t)) {
                              var c, u;
                              d() && h.isAllowed() && (c = h._getField('MCOPTOUT'));
                              var l = z.parseOptOut(t, c, A);
                              (c = l.optOut),
                                (u = l.d_ottl),
                                h._setFieldExpire('MCOPTOUT', u, !0),
                                h._setField('MCOPTOUT', c),
                                h._callAllCallbacks('MCOPTOUT', [c]);
                            }
                          }),
                          (h._loading = null),
                          (h._getRemoteField = function (n, e, t, r, a) {
                            var i,
                              o = '',
                              s = R.isFirstPartyAnalyticsVisitorIDCall(n),
                              c = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && h.isAllowed())
                              if (
                                (h._readVisitor(),
                                !(
                                  !(o = h._getField(n, !0 === c[n])) ||
                                  (h._fieldsExpired && h._fieldsExpired[n])
                                ) ||
                                  (h.disableThirdPartyCalls && !s))
                              )
                                o ||
                                  (n === k
                                    ? (h._registerCallback(n, t),
                                      (o = h._generateLocalMID()),
                                      h.setMarketingCloudVisitorID(o))
                                    : n === D
                                    ? (h._registerCallback(n, t),
                                      (o = ''),
                                      h.setAnalyticsVisitorID(o))
                                    : (r = !(o = '')));
                              else if (
                                (n === k || 'MCOPTOUT' === n
                                  ? (i = T)
                                  : 'MCAAMLH' === n || n === j
                                  ? (i = x)
                                  : n === D && (i = V),
                                i)
                              )
                                return (
                                  !e ||
                                    (null != h._loading && h._loading[i]) ||
                                    (null == h._loading && (h._loading = {}),
                                    (h._loading[i] = !0),
                                    i === x && (_ = 0),
                                    h._loadData(
                                      i,
                                      e,
                                      function (e) {
                                        if (!h._getField(n)) {
                                          e && U.setState(i, !0);
                                          var t = '';
                                          n === k
                                            ? (t = h._generateLocalMID())
                                            : i === x && (t = { error_msg: 'timeout' }),
                                            h._setFields(i, t);
                                        }
                                      },
                                      a
                                    )),
                                  h._registerCallback(n, t),
                                  o || (e || h._setFields(i, { id: A }), '')
                                );
                            return (
                              (n !== k && n !== D) || o !== A || (r = !(o = '')),
                              t && r && h._callCallback(t, [o]),
                              o
                            );
                          }),
                          (h._setMarketingCloudFields = function (e) {
                            h._readVisitor(), h._setFields(T, e);
                          }),
                          (h._mapCustomerIDs = function (e) {
                            h.getAudienceManagerBlob(e, !0);
                          }),
                          (h._setAnalyticsFields = function (e) {
                            h._readVisitor(), h._setFields(V, e);
                          }),
                          (h._setAudienceManagerFields = function (e) {
                            h._readVisitor(), h._setFields(x, e);
                          }),
                          (h._getAudienceManagerURLData = function (e) {
                            var t = h.audienceManagerServer,
                              n = '',
                              r = h._getField(k),
                              a = h._getField(j, !0),
                              i = h._getField(D),
                              o = i && i !== A ? '&d_cid_ic=AVID%01' + encodeURIComponent(i) : '';
                            if (
                              (h.loadSSL &&
                                h.audienceManagerServerSecure &&
                                (t = h.audienceManagerServerSecure),
                              t)
                            ) {
                              var s,
                                c,
                                u,
                                l = h.getCustomerIDs(!0);
                              if (l)
                                for (c in l) {
                                  var d = l[c];
                                  if (!z.isObjectEmpty(d)) {
                                    var f = 'nameSpaces' === c ? '&d_cid_ns=' : '&d_cid_ic=';
                                    for (s in d)
                                      O(s) &&
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
                              var p = 'http' + (h.loadSSL ? 's' : '') + '://' + t + '/id',
                                m =
                                  'd_visid_ver=' +
                                  h.version +
                                  (y && -1 !== p.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_consent=' + y
                                    : '') +
                                  (_ && -1 !== p.indexOf('demdex.net') ? '&d_cf=' + _ : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!r && h._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(h.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (h.idSyncContainerID || 0) +
                                  (r ? '&d_mid=' + encodeURIComponent(r) : '') +
                                  (h.idSyncDisable3rdPartySyncing || h.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === E
                                    ? '&d_coop_safe=1'
                                    : !1 === E
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (a ? '&d_blob=' + encodeURIComponent(a) : '') +
                                  o,
                                g = ['s_c_il', h._in, e];
                              return {
                                url: (n = p + '?' + m + '&d_cb=s_c_il%5B' + h._in + '%5D.' + e),
                                corsUrl: p + '?' + m,
                                callback: g,
                              };
                            }
                            return { url: n };
                          }),
                          (h.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [k, h._getField(k)],
                                [D, h._getField(D)],
                                ['MCORGID', h.marketingCloudOrgID],
                              ];
                              return h._addQuerystringParam(e, te.ADOBE_MC, o(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (h.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || h.getSupplementalDataID(R.generateRandomString(), !0)))
                              return e;
                            try {
                              var n = o([
                                ['SDID', t],
                                ['MCORGID', h.marketingCloudOrgID],
                              ]);
                              return h._addQuerystringParam(e, te.ADOBE_MC_SDID, n);
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
                          addQueryParamAtLocation: function (e, t, n) {
                            var r = e.split('&');
                            return (n = null != n ? n : r.length), r.splice(n, 0, t), r.join('&');
                          },
                          isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
                            return (
                              e === D &&
                              (t || (t = h.trackingServer),
                              n || (n = h.trackingServerSecure),
                              !('string' != typeof (r = h.loadSSL ? n : t) || !r.length) &&
                                r.indexOf('2o7.net') < 0 &&
                                r.indexOf('omtrdc.net') < 0)
                            );
                            var r;
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            Q.remove(e, { domain: h.cookieDomain });
                          },
                          isTrackingServerPopulated: function () {
                            return !!h.trackingServer || !!h.trackingServerSecure;
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
                        h._helpers = R;
                        var F = ne(h, w);
                        (h._destinationPublishing = F), (h.timeoutMetricsLog = []);
                        var q,
                          U = {
                            isClientSideMarketingCloudVisitorID: null,
                            MCIDCallTimedOut: null,
                            AnalyticsIDCallTimedOut: null,
                            AAMIDCallTimedOut: null,
                            fieldGroupObj: {},
                            setState: function (e, t) {
                              switch (e) {
                                case T:
                                  !1 === t
                                    ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1)
                                    : (this.MCIDCallTimedOut = t);
                                  break;
                                case V:
                                  !1 === t
                                    ? !0 !== this.AnalyticsIDCallTimedOut &&
                                      (this.AnalyticsIDCallTimedOut = !1)
                                    : (this.AnalyticsIDCallTimedOut = t);
                                  break;
                                case x:
                                  !1 === t
                                    ? !0 !== this.AAMIDCallTimedOut &&
                                      (this.AAMIDCallTimedOut = !1)
                                    : (this.AAMIDCallTimedOut = t);
                              }
                            },
                          };
                        (h.isClientSideMarketingCloudVisitorID = function () {
                          return U.isClientSideMarketingCloudVisitorID;
                        }),
                          (h.MCIDCallTimedOut = function () {
                            return U.MCIDCallTimedOut;
                          }),
                          (h.AnalyticsIDCallTimedOut = function () {
                            return U.AnalyticsIDCallTimedOut;
                          }),
                          (h.AAMIDCallTimedOut = function () {
                            return U.AAMIDCallTimedOut;
                          }),
                          (h.idSyncGetOnPageSyncInfo = function () {
                            return h._readVisitor(), h._getField('MCSYNCSOP');
                          }),
                          (h.idSyncByURL = function (e) {
                            if (!h.isOptedOut()) {
                              var t = s(e || {});
                              if (t.error) return t.error;
                              var n,
                                r,
                                a = e.url,
                                i = encodeURIComponent,
                                o = F;
                              return (
                                (a = a.replace(/^https:/, '').replace(/^http:/, '')),
                                (n = z.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (r = ['ibs', i(e.dpid), 'img', i(a), t.ttl, '', n]),
                                o.addMessage(r.join('|')),
                                o.requestToProcess(),
                                'Successfully queued'
                              );
                            }
                          }),
                          (h.idSyncByDataSource = function (e) {
                            if (!h.isOptedOut())
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  h.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                          }),
                          Me(h, F),
                          (h._getCookieVersion = function (e) {
                            e = e || h.cookieRead(h.cookieName);
                            var t = te.VERSION_REGEX.exec(e);
                            return t && 1 < t.length ? t[1] : null;
                          }),
                          (h._resetAmcvCookie = function (e) {
                            var t = h._getCookieVersion();
                            (t && !K.isLessThan(t, e)) || R.removeCookie(h.cookieName);
                          }),
                          (h.setAsCoopSafe = function () {
                            E = !0;
                          }),
                          (h.setAsCoopUnsafe = function () {
                            E = !1;
                          }),
                          (function () {
                            if (((h.configs = Object.create(null)), R.isObject(n)))
                              for (var e in n) O(e) && ((h[e] = n[e]), (h.configs[e] = n[e]));
                          })(),
                          u(),
                          (h.init = function () {
                            (c() &&
                              (b.optIn.fetchPermissions(g, !0),
                              !b.optIn.isApproved(b.optIn.Categories.ECID))) ||
                              q ||
                              ((q = !0),
                              (function () {
                                if (R.isObject(n)) {
                                  (h.idSyncContainerID = h.idSyncContainerID || 0),
                                    (E =
                                      'boolean' == typeof h.isCoopSafe
                                        ? h.isCoopSafe
                                        : R.parseBoolean(h.isCoopSafe)),
                                    h.resetBeforeVersion &&
                                      h._resetAmcvCookie(h.resetBeforeVersion),
                                    h._attemptToPopulateIdsFromUrl(),
                                    h._attemptToPopulateSdidFromUrl(),
                                    h._readVisitor();
                                  var e = h._getField(I),
                                    t = Math.ceil(new Date().getTime() / te.MILLIS_PER_DAY);
                                  h.idSyncDisableSyncs ||
                                    h.disableIdSyncs ||
                                    !F.canMakeSyncIDCall(e, t) ||
                                    (h._setFieldExpire(j, -1), h._setField(I, t)),
                                    h.getMarketingCloudVisitorID(),
                                    h.getAudienceManagerLocationHint(),
                                    h.getAudienceManagerBlob(),
                                    h._mergeServerState(h.serverState);
                                } else
                                  h._attemptToPopulateIdsFromUrl(),
                                    h._attemptToPopulateSdidFromUrl();
                              })(),
                              (function () {
                                if (!h.idSyncDisableSyncs && !h.disableIdSyncs) {
                                  F.checkDPIframeSrc();
                                  var e = function () {
                                    var e = F;
                                    e.readyToAttachIframe() && e.attachIframe();
                                  };
                                  P.addEventListener('load', function () {
                                    (w.windowLoaded = !0), e();
                                  });
                                  try {
                                    X.receiveMessage(function (e) {
                                      F.receiveMessage(e.data);
                                    }, F.iframeHost);
                                  } catch (e) {}
                                }
                              })(),
                              h.whitelistIframeDomains &&
                                te.POST_MESSAGE_ENABLED &&
                                ((h.whitelistIframeDomains =
                                  h.whitelistIframeDomains instanceof Array
                                    ? h.whitelistIframeDomains
                                    : [h.whitelistIframeDomains]),
                                h.whitelistIframeDomains.forEach(function (e) {
                                  var t = new J(r, e),
                                    n = Y(h, t);
                                  X.receiveMessage(n, e);
                                })));
                          });
                      };
                      Ue.config = q;
                      var Be = (H.Visitor = Ue),
                        He = function (a) {
                          if (z.isObject(a))
                            return Object.keys(a)
                              .filter(function (e) {
                                return '' !== a[e];
                              })
                              .reduce(function (e, t) {
                                var n = q.normalizeConfig(a[t]),
                                  r = z.normalizeBoolean(n);
                                return (e[t] = r), e;
                              }, Object.create(null));
                        },
                        Ge = Le.OptIn,
                        ze = Le.IabPlugin;
                      (Be.getInstance = function (r, e) {
                        if (!r) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        r.indexOf('@') < 0 && (r += '@AdobeOrg');
                        var t = (function () {
                          var e = H.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var n = e[t];
                              if (n && 'Visitor' === n._c && n.marketingCloudOrgID === r) return n;
                            }
                        })();
                        if (t) return t;
                        var a,
                          n = He(e);
                        (a = n || {}),
                          (H.adobe.optIn =
                            H.adobe.optIn ||
                            (function () {
                              var e = z.pluck(a, [
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
                              var n = new Ge(e, { cookies: Q });
                              if (e.isIabContext && e.doesOptInApply) {
                                var r = new ze();
                                n.registerPlugin(r);
                              }
                              return n;
                            })());
                        var i = r.split('').reverse().join(''),
                          o = new Be(r, null, i);
                        z.isObject(n) && n.cookieDomain && (o.cookieDomain = n.cookieDomain),
                          H.s_c_il.splice(--H.s_c_in, 1);
                        var s = z.getIeVersion();
                        if ('number' == typeof s && s < 10)
                          return o._helpers.replaceMethodsWithFunction(o, function () {});
                        var c,
                          u =
                            (function () {
                              try {
                                return H.self !== H.parent;
                              } catch (r) {
                                return !0;
                              }
                            })() &&
                            ((c = o).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== c.cookieRead('TEST_AMCV_COOKIE') ||
                              (c._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            H.parent
                              ? new j(r, n, o, H.parent)
                              : new Be(r, n, i);
                        return (o = null), u.init(), u;
                      }),
                        (function () {
                          function e () {
                            Be.windowLoaded = !0;
                          }
                          H.addEventListener
                            ? H.addEventListener('load', e)
                            : H.attachEvent && H.attachEvent('onload', e),
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
              orgId: 'F75C3025512D2C1D0A490D44@AdobeOrg',
              variables: [
                { name: 'trackingServer', value: 'metrics.nfl.com' },
                { name: 'trackingServerSecure', value: 'smetrics.nfl.com' },
                { name: 'marketingCloudServer', value: 'metrics.nfl.com' },
                { name: 'marketingCloudServerSecure', value: 'smetrics.nfl.com' },
                { name: 'overwriteCrossDomainMCIDAndAID', value: 'true' },
                { name: 'whitelistParentDomain', value: 'NFL.com' },
                { name: 'whitelistIframeDomains', value: 'NFL.com' },
              ],
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP6437fa78ab024946a211397689052381/',
          },
          'adobe-target-v2': {
            displayName: 'Adobe Target v2',
            modules: {
              'adobe-target-v2/lib/addParams.js': {
                name: 'add-params',
                displayName: 'Add Params to All Requests',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./modules/params-store').mergeParams;
                  e.exports = function (e) {
                    r(e.params);
                  };
                },
              },
              'adobe-target-v2/lib/loadTarget.js': {
                name: 'load-target',
                displayName: 'Load Target',
                script: function (e, t, n, r) {
                  'use strict';
                  function a (n, e) {
                    return new c(function (t) {
                      n
                        ? e.then(function (e) {
                            e && (n.abort = !0), t();
                          })
                        : t();
                    });
                  }
                  function i (e) {
                    if (e) {
                      var t = new c(function (t) {
                        var n = setTimeout(function () {
                            t(!1);
                          }, b.targetSettings.timeout),
                          r = function r (e) {
                            e.detail && !0 === e.detail.redirect ? t(!0) : t(!1),
                              clearTimeout(n),
                              m(s, e, r);
                          },
                          a = function a (e) {
                            t(!1), clearTimeout(n), m(s, e, a);
                          };
                        p(s, _, r), p(s, C, a);
                      });
                      e(function (e) {
                        return a(e, t);
                      });
                    }
                  }
                  var o = n('@adobe/reactor-window'),
                    s = n('@adobe/reactor-document'),
                    c = n('@adobe/reactor-promise'),
                    u = n('./modules/load-target'),
                    l = u.initLibrarySettings,
                    d = u.overridePublicApi,
                    f = n('./modules/event-util'),
                    p = f.addEventListener,
                    m = f.removeEventListener,
                    g = n('./modules/optin'),
                    v = g.shouldUseOptIn,
                    h = g.isTargetApproved,
                    b = n('./targetSettings').extensionSettings,
                    y = r.getSharedModule('adobe-analytics', 'augment-tracker'),
                    _ = 'at-request-succeeded',
                    C = 'at-request-failed';
                  e.exports = function () {
                    var e = l();
                    e && e.enabled
                      ? ((0, n('./modules/libs/at-launch').init)(o, s, e), (v() && !h()) || i(y))
                      : d(o);
                  };
                },
              },
              'adobe-target-v2/lib/firePageLoad.js': {
                name: 'fire-page-load',
                displayName: 'Fire Page Load Request',
                script: function (e, t, n, r) {
                  'use strict';
                  function a () {
                    return i.adobe && i.adobe.target && i.adobe.target.VERSION;
                  }
                  var i = n('@adobe/reactor-window'),
                    o = n('./modules/libs/at-launch'),
                    s = o.initConfig,
                    c = o.initDelivery,
                    u = n('./modules/page-load'),
                    l = n('./messages');
                  e.exports = function (e) {
                    var t = u(e);
                    a() ? (s(t), c()) : i.console && r.logger.warn(l.NO_REQUEST);
                  };
                },
              },
              'adobe-target-v2/lib/modules/params-store.js': {
                script: function (e, t, n) {
                  'use strict';
                  function o (e) {
                    return null != e.value && null != e.checked;
                  }
                  function r (a) {
                    var i = {};
                    return (
                      Object.keys(a).forEach(function (e) {
                        var t = a[e];
                        if (o(t)) {
                          var n = t.checked,
                            r = t.value;
                          (n && '' === r) || (i[e] = r);
                        } else i[e] = t;
                      }),
                      i
                    );
                  }
                  function a (e) {
                    var t = r(e);
                    u(l, t);
                  }
                  function i (e) {
                    var t = r(e);
                    u(d, t);
                  }
                  function s () {
                    return l;
                  }
                  function c () {
                    return d;
                  }
                  var u = n('./object-override'),
                    l = {},
                    d = {};
                  e.exports = {
                    mergeParams: a,
                    mergePageLoadParams: i,
                    getParams: s,
                    getPageLoadParams: c,
                  };
                },
              },
              'adobe-target-v2/lib/modules/object-override.js': {
                script: function (e) {
                  'use strict';
                  function r (e, t, n, r) {
                    t[n] !== r && (e[n] = t[n]);
                  }
                  function a (e) {
                    return !Array.isArray(this.subset) || -1 !== this.subset.indexOf(e);
                  }
                  e.exports = function (t, n, e) {
                    Object.keys(n)
                      .filter(a, { subset: e })
                      .forEach(function (e) {
                        r(t, n, e);
                      });
                  };
                },
              },
              'adobe-target-v2/lib/modules/load-target.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  function a (e) {
                    var t = e.compatMode,
                      n = e.documentMode;
                    return t && 'CSS1Compat' === t && (!n || 9 <= n);
                  }
                  function i (e) {
                    var t = function t () {},
                      n = function n () {
                        return l.resolve();
                      };
                    (e.adobe = e.adobe || {}),
                      (e.adobe.target = {
                        VERSION: '',
                        event: {},
                        getOffer: t,
                        getOffers: n,
                        applyOffer: t,
                        applyOffers: n,
                        sendNotifications: t,
                        trackEvent: t,
                        triggerView: t,
                        registerExtension: t,
                        init: t,
                      }),
                      (e.mboxCreate = t),
                      (e.mboxDefine = t),
                      (e.mboxUpdate = t);
                  }
                  function o () {
                    return (
                      c.adobe && c.adobe.target && 'undefined' != typeof c.adobe.target.getOffer
                    );
                  }
                  function s () {
                    return o()
                      ? (r.logger.warn(d.ALREADY_INITIALIZED), null)
                      : ((g.mboxParams = p()),
                        (g.globalMboxParams = m()),
                        v(g, c.targetGlobalSettings || {}, b),
                        v(g, h || {}, ['version']),
                        a(u) || ((g.enabled = !1), r.logger.warn(d.DELIVERY_DISABLED)),
                        g);
                  }
                  var c = n('@adobe/reactor-window'),
                    u = n('@adobe/reactor-document'),
                    l = n('@adobe/reactor-promise'),
                    d = n('../messages'),
                    f = n('./params-store'),
                    p = f.getParams,
                    m = f.getPageLoadParams,
                    g = n('../targetSettings').targetSettings,
                    v = n('./object-override'),
                    h = n('../librarySettings').TARGET_DEFAULT_SETTINGS,
                    b = [
                      'enabled',
                      'clientCode',
                      'imsOrgId',
                      'serverDomain',
                      'cookieDomain',
                      'timeout',
                      'defaultContentHiddenStyle',
                      'defaultContentVisibleStyle',
                      'bodyHiddenStyle',
                      'bodyHidingEnabled',
                      'selectorsPollingTimeout',
                      'visitorApiTimeout',
                      'overrideMboxEdgeServer',
                      'overrideMboxEdgeServerTimeout',
                      'optoutEnabled',
                      'optinEnabled',
                      'secureOnly',
                      'supplementalDataIdParamTimeout',
                      'authoringScriptUrl',
                      'urlSizeLimit',
                      'endpoint',
                      'pageLoadEnabled',
                      'viewsEnabled',
                      'analyticsLogging',
                      'serverState',
                      'globalMboxName',
                    ];
                  e.exports = { initLibrarySettings: s, overridePublicApi: i };
                },
              },
              'adobe-target-v2/lib/modules/event-util.js': {
                script: function (e) {
                  'use strict';
                  function t (e, t, n) {
                    e.addEventListener(t, n);
                  }
                  function n (e, t, n) {
                    e.removeEventListener(t, n);
                  }
                  e.exports = { addEventListener: t, removeEventListener: n };
                },
              },
              'adobe-target-v2/lib/modules/optin.js': {
                script: function (e, t, n) {
                  'use strict';
                  function r (e) {
                    return 'undefined' === (void 0 === e ? 'undefined' : l(e)) || null === e;
                  }
                  function a (e) {
                    var t = void 0 === e ? 'undefined' : l(e);
                    return null !== e && ('object' === t || 'function' === t);
                  }
                  function i (e) {
                    return a(e[g]) && a(e[f]);
                  }
                  function o (e, t) {
                    return !!t && !r(e) && !r(e[m]) && i(e[m]);
                  }
                  function s (e, t) {
                    return e[f](t);
                  }
                  function c () {
                    var e = d[m];
                    return s(e, e[v][h]);
                  }
                  function u () {
                    var e = b[p];
                    return o(d, e);
                  }
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
                          },
                    d = n('@adobe/reactor-window').adobe,
                    f = 'isApproved',
                    p = 'optinEnabled',
                    m = 'optIn',
                    g = 'fetchPermissions',
                    v = 'Categories',
                    h = 'TARGET',
                    b = n('../targetSettings').targetSettings;
                  e.exports = { shouldUseOptIn: u, isTargetApproved: c };
                },
              },
              'adobe-target-v2/lib/targetSettings.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a = r.getExtensionSettings(),
                    i = a.targetSettings || {};
                  e.exports = { extensionSettings: a, targetSettings: i };
                },
              },
              'adobe-target-v2/lib/modules/libs/at-launch.js': {
                script: function (e, t, n) {
                  'use strict';
                  function r (e) {
                    return e && 'object' == typeof e && 'default' in e ? e['default'] : e;
                  }
                  function o (e, t) {
                    var n = 1 < arguments.length && t !== undefined ? arguments[1] : 0;
                    return setTimeout(e, Number(n) || 0);
                  }
                  function i (e) {
                    clearTimeout(e);
                  }
                  function m (e) {
                    return null == e;
                  }
                  function a (e) {
                    return vl.call(e);
                  }
                  function s (e) {
                    return a(e);
                  }
                  function tt (e) {
                    return (tt =
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
                  function c (e, t, n) {
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
                  function d (e) {
                    var t = tt(e);
                    return null != e && ('object' === t || 'function' === t);
                  }
                  function u (e) {
                    return !!d(e) && s(e) === hl;
                  }
                  function l (e) {
                    return e;
                  }
                  function f (e) {
                    return u(e) ? e : l;
                  }
                  function p (e) {
                    return m(e) ? [] : Object.keys(e);
                  }
                  function g (e, t) {
                    return m(t) ? [] : (gl(t) ? _l : Cl)(f(e), t);
                  }
                  function v (e) {
                    return e && e.length ? e[0] : undefined;
                  }
                  function h (e) {
                    return m(e) ? [] : [].concat.apply([], e);
                  }
                  function b (i) {
                    for (var o = this, s = i ? i.length : 0, e = s; (e -= 1); )
                      if (!u(i[e])) throw new TypeError('Expected a function');
                    return function () {
                      for (var e = 0, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                      for (var a = s ? i[e].apply(o, n) : n[0]; (e += 1) < s; )
                        a = i[e].call(o, a);
                      return a;
                    };
                  }
                  function y (e, t) {
                    m(t) || (gl(t) ? bl : yl)(f(e), t);
                  }
                  function _ (e) {
                    return null != e && 'object' === tt(e);
                  }
                  function C (e) {
                    return 'string' == typeof e || (!gl(e) && _(e) && s(e) === Sl);
                  }
                  function S (e) {
                    if (!C(e)) return -1;
                    for (var t = 0, n = e.length, r = 0; r < n; r += 1)
                      t = ((t << 5) - t + e.charCodeAt(r)) & 4294967295;
                    return t;
                  }
                  function P (e) {
                    return 'number' == typeof e && -1 < e && e % 1 == 0 && e <= Pl;
                  }
                  function w (e) {
                    return null != e && P(e.length) && !u(e);
                  }
                  function E (e, t) {
                    return wl(function (e) {
                      return t[e];
                    }, e);
                  }
                  function T (e) {
                    for (var t = 0, n = e.length, r = Array(n); t < n; ) (r[t] = e[t]), (t += 1);
                    return r;
                  }
                  function k (e) {
                    return e.split('');
                  }
                  function I (e) {
                    return m(e) ? [] : w(e) ? (C(e) ? k(e) : T(e)) : E(p(e), e);
                  }
                  function V (e) {
                    if (null == e) return !0;
                    if (w(e) && (gl(e) || C(e) || u(e.splice))) return !e.length;
                    for (var t in e) if (El.call(e, t)) return !1;
                    return !0;
                  }
                  function D (e) {
                    return m(e) ? '' : Tl.call(e);
                  }
                  function x (e) {
                    return C(e) ? !D(e) : V(e);
                  }
                  function j (e) {
                    return Object.getPrototypeOf(Object(e));
                  }
                  function A (e) {
                    if (!_(e) || s(e) !== kl) return !1;
                    var t = j(e);
                    if (null === t) return !0;
                    var n = xl.call(t, 'constructor') && t.constructor;
                    return 'function' == typeof n && n instanceof n && Dl.call(n) === jl;
                  }
                  function O (e) {
                    return _(e) && 1 === e.nodeType && !A(e);
                  }
                  function L (e) {
                    return 'number' == typeof e || (_(e) && s(e) === Ol);
                  }
                  function M (e, t) {
                    return gl(t) ? t.join(e || '') : '';
                  }
                  function N (e, t) {
                    return m(t) ? [] : (gl(t) ? wl : Ll)(f(e), t);
                  }
                  function R () {}
                  function F () {
                    return new Date().getTime();
                  }
                  function q (e, t, n) {
                    return m(n) ? t : (gl(n) ? Ml : Nl)(f(e), t, n);
                  }
                  function U (e) {
                    return null == e ? e : Rl.call(e);
                  }
                  function B (e, t) {
                    return x(t) ? [] : t.split(e || '');
                  }
                  function H (e, t) {
                    return e + Math.floor(Math.random() * (t - e + 1));
                  }
                  function G () {
                    var n = F();
                    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                      var t = (n + H(0, 16)) % 16 | 0;
                      return (n = Math.floor(n / 16)), ('x' === e ? t : (3 & t) | 8).toString(16);
                    });
                  }
                  function z (t, n) {
                    t[Bf] &&
                      (m(n[Wf]) || (t[kp] = n[Wf]),
                      y(function (e) {
                        m(n[e]) || (t[e] = n[e]);
                      }, dm));
                  }
                  function J (e) {
                    var t = e.documentMode;
                    return !t || 10 <= t;
                  }
                  function Y (e) {
                    var t = e.compatMode;
                    return t && 'CSS1Compat' === t;
                  }
                  function W (e) {
                    return cm.test(e);
                  }
                  function Q (e) {
                    if (W(e)) return e;
                    var t = U(B('.', e)),
                      n = t.length;
                    return 3 <= n && um.test(t[1])
                      ? t[2] + '.' + t[1] + '.' + t[0]
                      : 1 === n
                      ? t[0]
                      : t[1] + '.' + t[0];
                  }
                  function $ (e, t, n) {
                    var r = '';
                    e.location.protocol === sm || (r = Q(e.location.hostname)),
                      (n[lp] = r),
                      (n[Bf] = Y(t) && J(t)),
                      z(n, e[Sp] || {});
                  }
                  function K (e) {
                    $(cl, ul, e);
                    var t = cl.location.protocol === sm;
                    ((lm = ll({}, e))[Zf] = e[Zf] / 1000),
                      (lm[ep] = e[ep] / 1000),
                      (lm[up] = lm[op] || t ? 'https:' : '');
                  }
                  function nt () {
                    return lm;
                  }
                  function X (e) {
                    try {
                      return pm(e);
                    } catch (t) {
                      return {};
                    }
                  }
                  function Z (e) {
                    try {
                      return mm(e);
                    } catch (t) {
                      return '';
                    }
                  }
                  function ee (e) {
                    try {
                      return decodeURIComponent(e);
                    } catch (t) {
                      return e;
                    }
                  }
                  function te (e) {
                    try {
                      return encodeURIComponent(e);
                    } catch (t) {
                      return e;
                    }
                  }
                  function ne (e) {
                    if (vm[e]) return vm[e];
                    gm.href = e;
                    var t = fm(gm.href);
                    return (t.queryKey = X(t.query)), (vm[e] = t), vm[e];
                  }
                  function re (e, t, n) {
                    return { name: e, value: t, expires: n };
                  }
                  function ae (e) {
                    var t = B('#', e);
                    return V(t) || t.length < 3
                      ? null
                      : isNaN(parseInt(t[2], 10))
                      ? null
                      : re(ee(t[0]), ee(t[1]), Number(t[2]));
                  }
                  function ie (e) {
                    return x(e) ? [] : B('|', e);
                  }
                  function oe () {
                    var e = N(ae, ie(hm(_m))),
                      t = Math.ceil(F() / 1000),
                      n = function n (e) {
                        return d(e) && t <= e.expires;
                      };
                    return q(
                      function (e, t) {
                        return (e[t.name] = t), e;
                      },
                      {},
                      g(n, e)
                    );
                  }
                  function se (e) {
                    var t = oe()[e];
                    return d(t) ? t.value : '';
                  }
                  function ce (e) {
                    return M('#', [te(e.name), te(e.value), e.expires]);
                  }
                  function ue (e) {
                    return e.expires;
                  }
                  function le (e) {
                    var t = N(ue, e);
                    return Math.max.apply(null, t);
                  }
                  function de (e, t) {
                    var n = I(e),
                      r = Math.abs(1000 * le(n) - F()),
                      a = M('|', N(ce, n)),
                      i = new Date(F() + r);
                    bm(_m, a, { domain: t, expires: i });
                  }
                  function fe (e) {
                    var t = e.name,
                      n = e.value,
                      r = e.expires,
                      a = e.domain,
                      i = oe();
                    (i[t] = re(t, n, Math.ceil(r + F() / 1000))), de(i, a);
                  }
                  function pe (e) {
                    return Al(hm(e));
                  }
                  function me (e, t) {
                    var n = X(e.location.search);
                    return Al(n[t]);
                  }
                  function ge (e, t) {
                    var n = ne(e.referrer).queryKey;
                    return !m(n) && Al(n[t]);
                  }
                  function ve (e, t, n) {
                    return pe(n) || me(e, n) || ge(t, n);
                  }
                  function he () {
                    var e = nt()[lp];
                    bm(Sd, Pd, { domain: e });
                    var t = hm(Sd) === Pd;
                    return ym(Sd), t;
                  }
                  function be () {
                    return ve(cl, ul, _d);
                  }
                  function ye () {
                    return nt()[Bf] && he() && !be();
                  }
                  function _e () {
                    return ve(cl, ul, yd);
                  }
                  function Ce () {
                    return ve(cl, ul, Cd);
                  }
                  function Se (e, t) {
                    var n = e.console;
                    return !m(n) && u(n[t]);
                  }
                  function Pe (e, t) {
                    var n = e.console;
                    Se(e, 'warn') && n.warn.apply(n, [Cm].concat(t));
                  }
                  function we (e, t) {
                    var n = e.console;
                    Se(e, 'debug') && _e() && n.debug.apply(n, [Cm].concat(t));
                  }
                  function Ee () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                    Pe(cl, t);
                  }
                  function Te () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                    we(cl, t);
                  }
                  function ke (n) {
                    return q(
                      function (e, t) {
                        return (e[t] = n[t]), e;
                      },
                      {},
                      dm
                    );
                  }
                  function Ie (e, t, n) {
                    var r = e[Cp] || [];
                    if (((e[Cp] = r), n)) {
                      var a = r.push;
                      (r[Qf] = Sm),
                        (r[bp] = ke(t)),
                        (r[yp] = []),
                        (r[_p] = []),
                        (r.push = function i (e) {
                          r[_p].push(ll({ timestamp: F() }, e)), a.call(this, e);
                        });
                    }
                  }
                  function Ve (e, t, n, r) {
                    t === _p && e[Cp].push(n),
                      r && t !== _p && e[Cp][t].push(ll({ timestamp: F() }, n));
                  }
                  function De () {
                    Ie(cl, nt(), _e());
                  }
                  function xe (e) {
                    Ve(cl, _p, e, _e());
                  }
                  function je (e) {
                    Ve(cl, yp, e, _e());
                  }
                  function Ae () {
                    return u(wm);
                  }
                  function Oe (e) {
                    return new wm(e);
                  }
                  function Le () {
                    var e = ul.createTextNode(''),
                      t = function t () {
                        e.textContent = 0 < e.textContent.length ? '' : 'a';
                      },
                      n = [];
                    return (
                      Oe(function () {
                        for (var e = n.length, t = 0; t < e; t += 1) n[t]();
                        n.splice(0, e);
                      }).observe(e, { characterData: !0 }),
                      function (e) {
                        n.push(e), t();
                      }
                    );
                  }
                  function Me () {
                    return function (e) {
                      var t = Pm('<script>');
                      t.on('readystatechange', function () {
                        t.on('readystatechange', null), t.remove(), (t = null), e();
                      }),
                        Pm(ul.documentElement).append(t);
                    };
                  }
                  function Ne () {
                    Ae()
                      ? pl._setImmediateFn(Le())
                      : -1 !== cl.navigator.userAgent.indexOf('MSIE 10') &&
                        pl._setImmediateFn(Me());
                  }
                  function Re (e) {
                    return new pl(e);
                  }
                  function Fe (e) {
                    return pl.resolve(e);
                  }
                  function qe (e) {
                    return pl.reject(e);
                  }
                  function Ue (e) {
                    return gl(e) ? pl.race(e) : qe(new TypeError(Em));
                  }
                  function Be (e) {
                    return gl(e) ? pl.all(e) : qe(new TypeError(Em));
                  }
                  function He (e, n, r) {
                    var a = -1;
                    return Ue([
                      e,
                      Re(function (e, t) {
                        a = o(function () {
                          return t(new Error(r));
                        }, n);
                      }),
                    ]).then(
                      function (e) {
                        return i(a), e;
                      },
                      function (e) {
                        throw (i(a), e);
                      }
                    );
                  }
                  function Ge (e) {
                    if (m(e[zp])) return !1;
                    var t = e[zp];
                    if (m(t[Jp])) return !1;
                    var n = t[Jp];
                    return u(n[Wp]) && u(n[Yp]);
                  }
                  function ze (e, t) {
                    return !!t && Ge(e);
                  }
                  function Je (e, t) {
                    if (!Ge(e)) return !0;
                    var n = e[zp][Jp],
                      r = (e[zp][Jp][Qp] || {})[t];
                    return n[Yp](r);
                  }
                  function Ye (e, t) {
                    if (!Ge(e)) return Fe(!0);
                    var n = e[zp][Jp],
                      r = (e[zp][Jp][Qp] || {})[t];
                    return Re(function (e, t) {
                      n[Wp](function () {
                        n[Yp](r) ? e(!0) : t(Zp);
                      }, !0);
                    });
                  }
                  function We () {
                    var e = nt()[Xp];
                    return ze(cl, e);
                  }
                  function Qe () {
                    return Je(cl, $p);
                  }
                  function $e () {
                    return Je(cl, Kp);
                  }
                  function Ke () {
                    return Ye(cl, $p);
                  }
                  function Xe () {
                    return X(cl.location.search)[pp];
                  }
                  function Ze (e, t) {
                    fe({ name: vp, value: e, expires: t[ep], domain: t[lp] });
                  }
                  function et () {
                    if (We() && !Qe()) return Tm;
                    var e = nt(),
                      t = Xe();
                    return Al(t) ? Ze(t, e) : x(se(vp)) && Ze(Tm, e), se(vp);
                  }
                  function rt (e) {
                    var t = nt();
                    fe({ name: mp, value: e, expires: t[Zf], domain: t[lp] });
                  }
                  function at () {
                    return se(mp);
                  }
                  function it (e) {
                    if (x(e)) return '';
                    var t = km.exec(e);
                    return V(t) || 2 !== t.length ? '' : t[1];
                  }
                  function ot () {
                    if (!nt()[rp]) return '';
                    var e = hm(gp);
                    return x(e) ? '' : e;
                  }
                  function st (e) {
                    var t = nt();
                    if (t[rp]) {
                      var n = t[lp],
                        r = new Date(F() + t[ap]),
                        a = hm(gp),
                        i = { domain: n, expires: r };
                      if (Al(a)) bm(gp, a, i);
                      else {
                        var o = it(e);
                        x(o) || bm(gp, o, i);
                      }
                    }
                  }
                  function ct (e, r) {
                    function t (e, t) {
                      var n = r.createEvent('CustomEvent');
                      return (
                        (t = t || { bubbles: !1, cancelable: !1, detail: undefined }),
                        n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                        n
                      );
                    }
                    u(e.CustomEvent) || ((t.prototype = e.Event.prototype), (e.CustomEvent = t));
                  }
                  function ut (e, t) {
                    var n = e(),
                      r = t(),
                      a = {};
                    return (a.sessionId = n), Al(r) && (a.deviceId = r), a;
                  }
                  function lt (e, t, n, r) {
                    var a = new e.CustomEvent(n, { detail: r });
                    t.dispatchEvent(a);
                  }
                  function dt (e, t) {
                    var n = t.mbox,
                      r = t.error,
                      a = t.url,
                      i = t.analyticsDetails,
                      o = t.responseTokens,
                      s = t.execution,
                      c = { type: e, tracking: ut(et, at) };
                    return (
                      m(n) || (c.mbox = n),
                      m(r) || (c.error = r),
                      m(a) || (c.url = a),
                      V(i) || (c.analyticsDetails = i),
                      V(o) || (c.responseTokens = o),
                      V(s) || (c.execution = s),
                      c
                    );
                  }
                  function ft () {
                    var e = dt(Im, {});
                    lt(cl, ul, Im, e);
                  }
                  function pt (e) {
                    var t = dt(Vm, e);
                    lt(cl, ul, Vm, t);
                  }
                  function mt (e, t) {
                    var n = dt(Dm, e);
                    (n.redirect = t), lt(cl, ul, Dm, n);
                  }
                  function gt (e) {
                    var t = dt(xm, e);
                    lt(cl, ul, xm, t);
                  }
                  function vt (e) {
                    var t = dt(jm, e);
                    lt(cl, ul, jm, t);
                  }
                  function ht (e) {
                    var t = dt(Am, e);
                    lt(cl, ul, Am, t);
                  }
                  function bt (e) {
                    var t = dt(Om, e);
                    lt(cl, ul, Om, t);
                  }
                  function yt (e) {
                    var t = dt(Lm, e);
                    lt(cl, ul, Lm, t);
                  }
                  function _t (e) {
                    var t = dt(Mm, e);
                    lt(cl, ul, Mm, t);
                  }
                  function Ct (e) {
                    var t = e.charAt(0),
                      n = e.charAt(1),
                      r = e.charAt(2),
                      a = { key: e };
                    return (
                      (a.val = '-' === n ? '' + t + n + '\\3' + r + ' ' : t + '\\3' + n + ' '), a
                    );
                  }
                  function St (e) {
                    var t = e.match(qm);
                    return V(t)
                      ? e
                      : q(
                          function (e, t) {
                            return e.replace(t.key, t.val);
                          },
                          e,
                          N(Ct, t)
                        );
                  }
                  function Pt (e) {
                    for (var t, n, r, a, i = [], o = D(e), s = o.indexOf(Nm); -1 !== s; )
                      (t = D(o.substring(0, s))),
                        (a = (n = D(o.substring(s))).indexOf(Rm)),
                        (r = D(n.substring(Fm, a))),
                        (s = (o = D(n.substring(a + 1))).indexOf(Nm)),
                        t && r && i.push({ sel: t, eq: Number(r) });
                    return o && i.push({ sel: o }), i;
                  }
                  function wt (e) {
                    if (O(e)) return Pm(e);
                    if (!C(e)) return Pm(e);
                    var t = St(e);
                    if (-1 === t.indexOf(Nm)) return Pm(t);
                    var n = Pt(t);
                    return q(
                      function (e, t) {
                        var n = t.sel,
                          r = t.eq;
                        return (e = e.find(n)), L(r) && (e = e.eq(r)), e;
                      },
                      Pm(ul),
                      n
                    );
                  }
                  function Et (e) {
                    return 0 < wt(e).length;
                  }
                  function Tt (e) {
                    return Pm('<' + Fd + '/>').append(e);
                  }
                  function kt (e) {
                    return Pm(e);
                  }
                  function It (e) {
                    return wt(e).prev();
                  }
                  function Vt (e) {
                    return wt(e).next();
                  }
                  function Dt (e) {
                    return wt(e).parent();
                  }
                  function xt (e, t) {
                    return wt(t).is(e);
                  }
                  function jt (e, t) {
                    return wt(t).find(e);
                  }
                  function At (e) {
                    return wt(e).children();
                  }
                  function Ot () {
                    (cl[Hm] = cl[Hm] || {}), (cl[Hm].querySelectorAll = wt);
                  }
                  function Lt (e) {
                    if (Ce()) {
                      var t = e[Mp];
                      cl[Hm][zm] = t;
                    }
                  }
                  function Mt () {
                    ul.addEventListener(
                      Ad,
                      function (e) {
                        u(cl[Hm][Gm]) && cl[Hm][Gm](e);
                      },
                      !0
                    );
                  }
                  function Nt () {
                    if (Ce()) {
                      Ot();
                      var e = nt()[cp],
                        t = function t () {
                          return Mt();
                        },
                        n = function n () {
                          return Ee(Um);
                        };
                      Te(Bm), ml(e).then(t)['catch'](n);
                    }
                  }
                  function Rt (e) {
                    return parseInt(e, 10);
                  }
                  function Ft (e) {
                    var t = Rt(e);
                    return isNaN(t) ? null : t;
                  }
                  function qt (e) {
                    return B(Xm, e);
                  }
                  function Ut (e) {
                    var t = B(Xm, e),
                      n = Ft(t[0]);
                    if (m(n)) return null;
                    var r = {};
                    r.activityIndex = n;
                    var a = Ft(t[1]);
                    return m(a) || (r.experienceIndex = a), r;
                  }
                  function Bt (e) {
                    return g(Zm, N(Ut, e));
                  }
                  function Ht (e) {
                    return gl(e) ? Bt(e) : Bt([e]);
                  }
                  function Gt (e) {
                    var t = X(e),
                      n = t[Ym];
                    if (x(n)) return null;
                    var r = {};
                    r.token = n;
                    var a = t[Qm];
                    Al(a) && a === Pd && (r.listedActivitiesOnly = !0);
                    var i = t[$m];
                    Al(i) && (r.evaluateAsTrueAudienceIds = qt(i));
                    var o = t[Km];
                    Al(o) && (r.evaluateAsFalseAudienceIds = qt(o));
                    var s = t[Wm];
                    return V(s) || (r.previewIndexes = Ht(s)), r;
                  }
                  function zt (e) {
                    var t = Gt(e.location.search);
                    if (!m(t)) {
                      var n = new Date(F() + 1860000);
                      bm(Jm, JSON.stringify(t), { expires: n });
                    }
                  }
                  function Jt () {
                    var e = hm(Jm);
                    if (x(e)) return {};
                    try {
                      return JSON.parse(e);
                    } catch (t) {
                      return {};
                    }
                  }
                  function Yt (e) {
                    return wt(e).empty().remove();
                  }
                  function Wt (e, t) {
                    return wt(t).after(e);
                  }
                  function Qt (e, t) {
                    return wt(t).before(e);
                  }
                  function $t (e, t) {
                    return wt(t).append(e);
                  }
                  function Kt (e, t) {
                    return wt(t).prepend(e);
                  }
                  function Xt (e, t) {
                    return wt(t).html(e);
                  }
                  function Zt (e) {
                    return wt(e).html();
                  }
                  function en (e, t) {
                    return wt(t).text(e);
                  }
                  function tn (e, t) {
                    return (
                      '<' +
                      Md +
                      ' ' +
                      xd +
                      '="' +
                      e +
                      '" ' +
                      jd +
                      '="' +
                      Ff +
                      '">' +
                      t +
                      '</' +
                      Md +
                      '>'
                    );
                  }
                  function nn (e, t) {
                    return tn(eg + S(t), t + ' {' + e + '}');
                  }
                  function rn (e, t) {
                    return tn(rg, t + ' {' + e + '}');
                  }
                  function an (e) {
                    if (!0 === e[Xf] && !Et(ng)) {
                      var t = e[Kf];
                      $t(tn(tg, t), Od);
                    }
                  }
                  function on (e) {
                    !0 === e[Xf] && Et(ng) && Yt(ng);
                  }
                  function sn (e, t) {
                    if (!V(t)) {
                      var n = function n (e) {
                          return !Et('#' + (eg + S(e)));
                        },
                        r = g(n, t);
                      if (!V(r)) {
                        var a = e[$f],
                          i = function i (e) {
                            return nn(a, e);
                          };
                        $t(M('\n', N(i, r)), Od);
                      }
                    }
                  }
                  function cn (e, t) {
                    V(t) || Et('#' + rg) || $t(rn(e[$f], M(', ', t)), Od);
                  }
                  function un () {
                    an(nt());
                  }
                  function ln () {
                    on(nt());
                  }
                  function dn (e) {
                    sn(nt(), e);
                  }
                  function fn (e) {
                    cn(nt(), e);
                  }
                  function pn (e) {
                    Yt('#' + (eg + S(e)));
                  }
                  function mn () {
                    var e = '#' + rg;
                    Et(e) && Yt(e);
                  }
                  function gn (e) {
                    return !m(e[xd]);
                  }
                  function vn (e) {
                    return !m(e[Ip]);
                  }
                  function hn (e) {
                    switch (e) {
                      case 0:
                        return 'unknown';
                      case 1:
                        return 'authenticated';
                      case 2:
                        return 'logged_out';
                      default:
                        return 'unknown';
                    }
                  }
                  function bn (e) {
                    return gn(e) || vn(e);
                  }
                  function yn (e) {
                    if (m(e)) return [];
                    if (!u(e[lg])) return [];
                    var t = e[lg]();
                    return d(t)
                      ? q(
                          function (e, t, n) {
                            var r = {};
                            return (
                              (r[Dp] = n),
                              gn(t) && (r[xd] = t[xd]),
                              vn(t) && (r[Vp] = hn(t[Ip])),
                              e.push(r),
                              e
                            );
                          },
                          [],
                          g(bn, t)
                        )
                      : [];
                  }
                  function _n (e, t) {
                    return m(e) ? null : u(e[ug]) ? e[ug](t) : null;
                  }
                  function Cn (e, t) {
                    if (m(e)) return null;
                    var n = e[t];
                    return m(n) ? null : n;
                  }
                  function Sn (e, t, n) {
                    if (x(t)) return null;
                    if (m(e[pg])) return null;
                    if (!u(e[pg][mg])) return null;
                    var r = e[pg][mg](t, { sdidParamExpiry: n });
                    return d(r) && u(r[gg]) && r[gg]() ? r : null;
                  }
                  function Pn (e, t) {
                    if (!u(e.getVisitorValues)) return Fe({});
                    var n = [sg, ig, og];
                    return (
                      t && n.push(cg),
                      Re(function (t) {
                        e.getVisitorValues(function (e) {
                          return t(e);
                        }, n);
                      })
                    );
                  }
                  function wn (e) {
                    return Te(hg, e), {};
                  }
                  function En (e, t, n) {
                    return m(e) ? Fe({}) : He(Pn(e, n), t, vg)['catch'](wn);
                  }
                  function Tn (e, t) {
                    if (!u(e.getVisitorValues)) return {};
                    var n = [sg, ig, og];
                    t && n.push(cg);
                    var r = {};
                    return (
                      e.getVisitorValues(function (e) {
                        return ll(r, e);
                      }, n),
                      r
                    );
                  }
                  function kn (e, t) {
                    return m(e) ? {} : Tn(e, t);
                  }
                  function In () {
                    var e = nt(),
                      t = e[Gf],
                      n = e[sp];
                    return Sn(cl, t, n);
                  }
                  function Vn () {
                    var e = In(),
                      t = nt();
                    return En(e, t[np], t[ip]);
                  }
                  function Dn () {
                    return kn(In(), nt()[ip]);
                  }
                  function xn () {
                    return yn(In());
                  }
                  function jn (e) {
                    return _n(In(), e);
                  }
                  function An (e) {
                    return Cn(In(), e);
                  }
                  function On (e, t) {
                    bg[e] = t;
                  }
                  function Ln (e) {
                    return bg[e];
                  }
                  function Mn (e) {
                    var t = e[Sp];
                    if (m(t)) return !1;
                    var n = t[wp];
                    return !(!gl(n) || V(n));
                  }
                  function Nn (e) {
                    var t = e[Vf];
                    if (!C(t) || V(t)) return !1;
                    var n = e[Qf];
                    if (!C(n) || V(n)) return !1;
                    var r = e[Jf];
                    return !((!m(r) && !L(r)) || !u(e[Nf]));
                  }
                  function Rn (e) {
                    return Re(function (n, r) {
                      e(function (e, t) {
                        m(e) ? n(t) : r(e);
                      });
                    });
                  }
                  function Fn (e, t, n, r, a, i) {
                    var o = {};
                    (o[e] = t), (o[n] = r), (o[a] = i);
                    var s = {};
                    return (s[Pp] = o), s;
                  }
                  function qn (e) {
                    var n = e[Vf],
                      r = e[Qf],
                      t = e[Jf] || Cg;
                    return He(Rn(e[Nf]), t, _g)
                      .then(function (e) {
                        var t = Fn(Vf, n, Qf, r, xf, e);
                        return Te(yg, wf, t), je(t), e;
                      })
                      ['catch'](function (e) {
                        var t = Fn(Vf, n, Qf, r, _f, e);
                        return Te(yg, _f, t), je(t), {};
                      });
                  }
                  function Un (e) {
                    var t = q(
                      function (e, t) {
                        return ll(e, t);
                      },
                      {},
                      e
                    );
                    return On(wp, t), t;
                  }
                  function Bn (e) {
                    return Mn(e) ? Be(N(qn, g(Nn, e[Sp][wp]))).then(Un) : Fe({});
                  }
                  function Hn () {
                    var e = Ln(wp);
                    return m(e) ? {} : e;
                  }
                  function Gn () {
                    return Bn(cl);
                  }
                  function zn () {
                    return Hn();
                  }
                  function Jn (e) {
                    var t = X(e.location.search)[Sg];
                    return x(t) ? null : t;
                  }
                  function Yn () {
                    var e = hm(Pg);
                    return x(e) ? null : e;
                  }
                  function Wn () {
                    var e = Jn(cl),
                      t = Yn();
                    return e || t;
                  }
                  function Qn (e) {
                    return !V(e) && 2 === e.length && Al(e[0]);
                  }
                  function $n (e) {
                    var t = e.indexOf('=');
                    return -1 === t ? [] : [e.substr(0, t), e.substr(t + 1)];
                  }
                  function Kn (e, n, r, a) {
                    y(function (e, t) {
                      d(e)
                        ? (n.push(t), Kn(e, n, r, a), n.pop())
                        : V(n)
                        ? (r[a(t)] = e)
                        : (r[a(M('.', n.concat(t)))] = e);
                    }, e);
                  }
                  function Xn (e) {
                    return g(function (e, t) {
                      return Al(t);
                    }, X(e));
                  }
                  function Zn (e) {
                    return q(
                      function (e, t) {
                        return (e[ee(D(t[0]))] = ee(D(t[1]))), e;
                      },
                      {},
                      g(
                        Qn,
                        q(
                          function (e, t) {
                            return e.push($n(t)), e;
                          },
                          [],
                          g(Al, e)
                        )
                      )
                    );
                  }
                  function er (e, t) {
                    var n = {};
                    return m(t) ? Kn(e, [], n, l) : Kn(e, [], n, t), n;
                  }
                  function tr (e) {
                    if (!u(e)) return {};
                    var t = null;
                    try {
                      t = e();
                    } catch (n) {
                      return {};
                    }
                    return m(t) ? {} : gl(t) ? Zn(t) : C(t) && Al(t) ? Xn(t) : d(t) ? er(t) : {};
                  }
                  function nr (e) {
                    return ll({}, e, tr(cl.targetPageParamsAll));
                  }
                  function rr (e) {
                    return ll({}, e, tr(cl.targetPageParams));
                  }
                  function ar (e) {
                    var t = nt(),
                      n = t[Yf],
                      r = t[dp],
                      a = t[fp];
                    return n !== e ? nr(r || {}) : ll(nr(r || {}), rr(a || {}));
                  }
                  function ir () {
                    var e = ul.createElement('canvas'),
                      t = e.getContext('webgl') || e.getContext('experimental-webgl');
                    if (m(t)) return null;
                    var n = t.getExtension('WEBGL_debug_renderer_info');
                    if (m(n)) return null;
                    var r = t.getParameter(n.UNMASKED_RENDERER_WEBGL);
                    return m(r) ? null : r;
                  }
                  function or () {
                    var e = cl.devicePixelRatio;
                    if (!m(e)) return e;
                    e = 1;
                    var t = cl.screen,
                      n = t.systemXDPI,
                      r = t.logicalXDPI;
                    return !m(n) && !m(r) && r < n && (e = n / r), e;
                  }
                  function sr () {
                    var e = cl.screen,
                      t = e.orientation,
                      n = e.width,
                      r = e.height;
                    if (m(t)) return r < n ? 'landscape' : 'portrait';
                    if (m(t.type)) return null;
                    var a = B('-', t.type);
                    if (V(a)) return null;
                    var i = a[0];
                    return m(i) ? null : i;
                  }
                  function cr () {
                    return wg;
                  }
                  function ur (e) {
                    return e === Tg;
                  }
                  function lr (e) {
                    return -1 !== e.indexOf(Eg);
                  }
                  function dr (e) {
                    return e === kg;
                  }
                  function fr (e) {
                    return e === Ig;
                  }
                  function pr (e) {
                    return e === Vg;
                  }
                  function mr (e) {
                    return e === Dg;
                  }
                  function gr (e) {
                    return e === xg;
                  }
                  function vr (e) {
                    return e === jg;
                  }
                  function hr (e) {
                    return lr(e) || ur(e) || dr(e) || fr(e) || pr(e) || mr(e) || gr(e) || vr(e);
                  }
                  function br (e) {
                    return e.substring(Eg.length);
                  }
                  function yr (e) {
                    return e[Tg];
                  }
                  function _r (e) {
                    return e[kg];
                  }
                  function Cr (e) {
                    return e[Ig];
                  }
                  function Sr (e) {
                    return e[Vg];
                  }
                  function Pr (e) {
                    var t = N(D, B(',', e[Dg]));
                    return g(Al, t);
                  }
                  function wr (e) {
                    return e[xg];
                  }
                  function Er (e) {
                    return e[jg];
                  }
                  function Tr (e) {
                    return q(
                      function (e, t, n) {
                        return hr(n) || (e[n] = m(t) ? '' : t), e;
                      },
                      {},
                      e
                    );
                  }
                  function kr (e) {
                    return q(
                      function (e, t, n) {
                        if (!lr(n)) return e;
                        var r = br(n);
                        return x(r) || (e[r] = m(t) ? '' : t), e;
                      },
                      {},
                      e
                    );
                  }
                  function Ir (a, i, o) {
                    return (
                      (a.onload = function () {
                        var e = 1223 === a.status ? 204 : a.status;
                        if (e < 100 || 599 < e) o(new Error(Og));
                        else {
                          var t;
                          try {
                            t = JSON.parse(a.responseText);
                          } catch (r) {
                            return void o(new Error(Mg));
                          }
                          var n = a.getAllResponseHeaders();
                          i({ status: e, headers: n, response: t });
                        }
                      }),
                      a
                    );
                  }
                  function Vr (e, t) {
                    return (
                      (e.onerror = function () {
                        t(new Error(Og));
                      }),
                      e
                    );
                  }
                  function Dr (e, t, n) {
                    return (
                      (e.timeout = t),
                      (e.ontimeout = function () {
                        n(new Error(Lg));
                      }),
                      e
                    );
                  }
                  function xr (n, e) {
                    return (
                      y(
                        function (e, t) {
                          gl(e) &&
                            y(function (e) {
                              n.setRequestHeader(t, e);
                            }, e);
                        },
                        1 < arguments.length && e !== undefined ? arguments[1] : {}
                      ),
                      n
                    );
                  }
                  function jr (e) {
                    var r = e.url,
                      a = e.headers,
                      i = e.body,
                      o = e.timeout,
                      s = e.async;
                    return Re(function (e, t) {
                      const $___old_a2e7f5fcbb7512f4 = {}.constructor.getOwnPropertyDescriptor(
                          window,
                          'XMLHttpRequest'
                        ),
                        $___old_45de0380e0c6ea50 = {}.constructor.getOwnPropertyDescriptor(
                          window,
                          'XMLHttpRequest'
                        );
                      try {
                        if ($___old_a2e7f5fcbb7512f4)
                          ({}.constructor.defineProperty(
                            window,
                            'XMLHttpRequest',
                            $___stub_afd3abb015d4d981.XMLHttpRequest
                          ));
                        if ($___old_45de0380e0c6ea50)
                          ({}.constructor.defineProperty(
                            window,
                            'XMLHttpRequest',
                            $___stub_afd3abb015d4d981.XMLHttpRequest
                          ));
                        return function () {
                          var n = new window.XMLHttpRequest();
                          (n = Vr((n = Ir(n, e, t)), t)).open(Ag, r, s),
                            (n.withCredentials = !0),
                            (n = xr(n, a)),
                            s && (n = Dr(n, o, t)),
                            n.send(JSON.stringify(i));
                        }.apply(this, arguments);
                      } finally {
                        if ($___old_a2e7f5fcbb7512f4)
                          ({}.constructor.defineProperty(
                            window,
                            'XMLHttpRequest',
                            $___old_a2e7f5fcbb7512f4
                          ));
                        if ($___old_45de0380e0c6ea50)
                          ({}.constructor.defineProperty(
                            window,
                            'XMLHttpRequest',
                            $___old_45de0380e0c6ea50
                          ));
                      }
                    }).then(function (e) {
                      var t = e.response,
                        n = t.status,
                        r = t.message;
                      if (!m(n) && !m(r)) throw new Error(r);
                      return t;
                    });
                  }
                  function Ar (e) {
                    if (e[cg]) throw new Error(ag);
                    return e;
                  }
                  function Or () {
                    var e = Vn(),
                      t = Gn();
                    return Be([e.then(Ar), t]);
                  }
                  function Lr () {
                    return [Dn(), zn()];
                  }
                  function Mr (e) {
                    var t = nt()[Yf];
                    return ll({}, e, ar(t));
                  }
                  function Nr () {
                    return -new Date().getTimezoneOffset();
                  }
                  function Rr () {
                    var e = cl.screen;
                    return {
                      width: e.width,
                      height: e.height,
                      orientation: sr(),
                      colorDepth: e.colorDepth,
                      pixelRatio: or(),
                    };
                  }
                  function Fr () {
                    var e = ul.documentElement;
                    return { width: e.clientWidth, height: e.clientHeight };
                  }
                  function qr () {
                    return { host: cl.location.hostname, webGLRenderer: cr() };
                  }
                  function Ur () {
                    return { url: cl.location.href, referringUrl: ul.referrer };
                  }
                  function Br (e) {
                    const $___old_4d23654558fcaf56 = {}.constructor.getOwnPropertyDescriptor(
                      Navigator.prototype,
                      'userAgent'
                    );
                    try {
                      if ($___old_4d23654558fcaf56)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___stub_47c01efa79e9f191.userAgent
                        ));
                      return function () {
                        if (!m(e) && e.channel === Ng) return e;
                        var t = (e || {}).beacon;
                        return {
                          userAgent: cl.navigator.userAgent,
                          timeOffsetInMinutes: Nr(),
                          channel: Ng,
                          screen: Rr(),
                          window: Fr(),
                          browser: qr(),
                          address: Ur(),
                          beacon: t,
                        };
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_4d23654558fcaf56)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___old_4d23654558fcaf56
                        ));
                    }
                  }
                  function Hr (e, t) {
                    if (!m(e)) return e;
                    var n = {};
                    if (V(t)) return n;
                    var r = t[og],
                      a = parseInt(r, 10);
                    isNaN(a) || (n.locationHint = a);
                    var i = t[ig];
                    return Al(i) && (n.blob = i), n;
                  }
                  function Gr (e) {
                    var t = e.id,
                      n = e.integrationCode,
                      r = e.authenticatedState,
                      a = {};
                    return (
                      Al(t) && (a.id = t),
                      Al(n) && (a.integrationCode = n),
                      Al(r) && (a.authenticatedState = r),
                      a
                    );
                  }
                  function zr (e) {
                    return N(Gr, e);
                  }
                  function Jr (e, t, n, r, a) {
                    var i = {};
                    Al(t) && (i.tntId = t),
                      Al(n) && (i.thirdPartyId = n),
                      Al(e.thirdPartyId) && (i.thirdPartyId = e.thirdPartyId);
                    var o = r[sg];
                    return (
                      Al(o) && (i.marketingCloudVisitorId = o),
                      Al(e.marketingCloudVisitorId) &&
                        (i.marketingCloudVisitorId = e.marketingCloudVisitorId),
                      V(e.customerIds)
                        ? V(a) || (i.customerIds = zr(a))
                        : (i.customerIds = e.customerIds),
                      i
                    );
                  }
                  function Yr (e, t) {
                    var n = {},
                      r = Hr(e.audienceManager, t);
                    return (
                      V(r) || (n.audienceManager = r),
                      V(e.analytics) || (n.analytics = e.analytics),
                      n
                    );
                  }
                  function Wr (e, t) {
                    if (!m(e) && Al(e.token)) return e;
                    var n = {},
                      r = _r(t);
                    return Al(r) && (n.token = r), n;
                  }
                  function Qr (e) {
                    if (!m(e) && Al(e.authorizationToken)) return e;
                    var t = {},
                      n = Wn();
                    return Al(n) && (t.authorizationToken = n), t;
                  }
                  function $r (e) {
                    return m(e) ? Jt() : e;
                  }
                  function Kr (e) {
                    var t = {},
                      n = Cr(e);
                    m(n) || (t.id = n);
                    var r = Sr(e),
                      a = parseFloat(r);
                    isNaN(a) || (t.total = a);
                    var i = Pr(e);
                    return V(i) || (t.purchasedProductIds = i), t;
                  }
                  function Xr (e) {
                    var t = {},
                      n = wr(e);
                    m(n) || (t.id = n);
                    var r = Er(e);
                    return m(r) || (t.categoryId = r), t;
                  }
                  function Zr (e, t) {
                    var n = {},
                      r = ll({}, Tr(t), e.parameters || {}),
                      a = ll({}, kr(t), e.profileParameters || {}),
                      i = ll({}, Kr(t), e.order || {}),
                      o = ll({}, Xr(t), e.product || {});
                    return (
                      V(r) || (n.parameters = r),
                      V(a) || (n.profileParameters = a),
                      V(i) || (n.order = i),
                      V(o) || (n.product = o),
                      n
                    );
                  }
                  function ea (e, t) {
                    var n = e.index,
                      r = e.name,
                      a = e.address,
                      i = Zr(e, ll({}, t, ar(r)));
                    return (
                      m(n) || (i.index = n), Al(r) && (i.name = r), V(a) || (i.address = a), i
                    );
                  }
                  function ta (e, t) {
                    var n = e.name,
                      r = e.address,
                      a = Zr(e, t);
                    return Al(n) && (a.name = n), V(r) || (a.address = r), a;
                  }
                  function na (e, t) {
                    var n = e.execute,
                      r = void 0 === n ? {} : n,
                      a = {};
                    if (V(r)) return a;
                    var i = r.pageLoad;
                    m(i) || (a.pageLoad = Zr(i, t));
                    var o = r.mboxes;
                    if (!m(o) && gl(o) && !V(o)) {
                      var s = g(
                        qg,
                        N(function (e) {
                          return ea(e, t);
                        }, o)
                      );
                      V(s) || (a.mboxes = s);
                    }
                    return a;
                  }
                  function ra (e, t) {
                    var n = e.prefetch,
                      r = void 0 === n ? {} : n,
                      a = {};
                    if (V(r)) return a;
                    var i = r.mboxes;
                    m(i) ||
                      !gl(i) ||
                      V(i) ||
                      (a.mboxes = N(function (e) {
                        return ea(e, t);
                      }, i));
                    var o = r.views;
                    return (
                      m(o) ||
                        !gl(o) ||
                        V(o) ||
                        (a.views = N(function (e) {
                          return ta(e, t);
                        }, o)),
                      a
                    );
                  }
                  function aa (e, t) {
                    if (We() && !$e()) return null;
                    var n = nt(),
                      r = jn(e),
                      a = An(dg),
                      i = An(fg),
                      o = t.experienceCloud,
                      s = (void 0 === o ? {} : o).analytics,
                      c = void 0 === s ? {} : s,
                      u = c.logging,
                      l = c.supplementalDataId,
                      d = c.trackingServer,
                      f = c.trackingServerSecure,
                      p = {};
                    return (
                      m(u) ? (p.logging = n[em]) : (p.logging = u),
                      m(l) || (p.supplementalDataId = l),
                      Al(r) && (p.supplementalDataId = r),
                      m(d) || (p.trackingServer = d),
                      Al(a) && (p.trackingServer = a),
                      m(f) || (p.trackingServerSecure = f),
                      Al(i) && (p.trackingServerSecure = i),
                      V(p) ? null : p
                    );
                  }
                  function ia (e, t, n) {
                    var r = Mr(n),
                      a = at(),
                      i = yr(r),
                      o = xn(),
                      s = Jr(e.id || {}, a, i, t, o),
                      c = Wr(e.property, r),
                      u = Yr(e.experienceCloud || {}, t),
                      l = Qr(e.trace),
                      d = $r(e.qaMode),
                      f = na(e, r),
                      p = ra(e, r),
                      m = e.notifications,
                      g = {};
                    return (
                      (g.requestId = G()),
                      (g.context = Br(e.context)),
                      V(s) || (g.id = s),
                      V(c) || (g.property = c),
                      V(l) || (g.trace = l),
                      V(u) || (g.experienceCloud = u),
                      V(d) || (g.qaMode = d),
                      V(f) || (g.execute = f),
                      V(p) || (g.prefetch = p),
                      V(m) || (g.notifications = m),
                      g
                    );
                  }
                  function oa (e, t, n) {
                    var r = n[0],
                      a = n[1];
                    return ia(e, r, ll({}, a, t));
                  }
                  function sa (t, n) {
                    return Or().then(function (e) {
                      return oa(t, n, e);
                    });
                  }
                  function ca (e, t) {
                    return oa(e, t, Lr());
                  }
                  function ua (e, t) {
                    return L(t) ? (t < 0 ? e[Jf] : t) : e[Jf];
                  }
                  function la (e) {
                    var t = e[zf];
                    if (!e[rp]) return t;
                    var n = ot();
                    return x(n) ? t : '' + Rg + n + Fg;
                  }
                  function da (e) {
                    return (
                      e[up] +
                      '//' +
                      la(e) +
                      e[Ep] +
                      '?' +
                      Z({ client: e[Hf], sessionId: et(), version: e[Qf] })
                    );
                  }
                  function fa (t, e) {
                    var n = nt(),
                      r = da(n),
                      a = c({}, Rp, [Fp]),
                      i = ua(n, e),
                      o = { url: r, headers: a, body: t, timeout: i, async: !0 };
                    return (
                      Te(Mf, t),
                      je({ request: t }),
                      jr(o).then(function (e) {
                        return Te(Lf, e), je({ response: e }), { request: t, response: e };
                      })
                    );
                  }
                  function pa (e, t) {
                    return { status: wf, type: e, data: t };
                  }
                  function ma (e, t) {
                    return { status: _f, type: e, data: t };
                  }
                  function ga (e) {
                    return d(e);
                  }
                  function va (e) {
                    return !!ga(e) && Al(e.eventToken);
                  }
                  function ha (e) {
                    return !V(e) && !x(e.type) && Al(e.eventToken);
                  }
                  function ba (e) {
                    return !!ha(e) && Al(e.selector);
                  }
                  function ya (e) {
                    var t = e.id;
                    return d(t) && Al(t.tntId);
                  }
                  function _a (e) {
                    var t = e.response;
                    return ya(t) && rt(t.id.tntId), e;
                  }
                  function Ca (e) {
                    var t = e.response;
                    return ya(t) && st(t.id.tntId), st(null), e;
                  }
                  function Sa (e) {
                    var t = (0 < arguments.length && e !== undefined ? arguments[0] : {}).trace;
                    V(t) || xe(t);
                  }
                  function Pa (e) {
                    var t = e.response,
                      n = t.execute,
                      r = void 0 === n ? {} : n,
                      a = t.prefetch,
                      i = void 0 === a ? {} : a,
                      o = r.pageLoad,
                      s = void 0 === o ? {} : o,
                      c = r.mboxes,
                      u = void 0 === c ? [] : c,
                      l = i.mboxes,
                      d = void 0 === l ? [] : l,
                      f = i.views,
                      p = void 0 === f ? [] : f;
                    return Sa(s), y(Sa, u), y(Sa, d), y(Sa, p), e;
                  }
                  function wa (e) {
                    var t = e.queryKey,
                      n = t[ov];
                    if (!C(n)) return t;
                    if (x(n)) return t;
                    var r = Math.round(F() / 1000);
                    return (t[ov] = n.replace(/\|TS=\d+/, '|TS=' + r)), t;
                  }
                  function Ea (e) {
                    return e.queryKey;
                  }
                  function Ta (e, t, n) {
                    var r = ne(e),
                      a = r.protocol,
                      i = r.host,
                      o = r.path,
                      s = '' === r.port ? '' : ':' + r.port,
                      c = x(r.anchor) ? '' : '#' + r.anchor,
                      u = n(r),
                      l = Z(ll({}, u, t));
                    return a + '://' + i + s + o + (x(l) ? '' : '?' + l) + c;
                  }
                  function ka (e, t) {
                    return Ta(e, t, wa);
                  }
                  function Ia (e, t) {
                    return Ta(e, t, Ea);
                  }
                  function Va (e) {
                    var t = e.content;
                    if (x(t)) return Te(df, e), null;
                    var n = ll({}, e);
                    return (n.content = ka(t, {})), n;
                  }
                  function Da (e) {
                    throw new Error(e);
                  }
                  function xa (e) {
                    var t = e[fv] || lv,
                      n = e[pv] || Da(uv),
                      r = e[mv] || {},
                      a = e[gv] || null,
                      i = e[vv] || !1,
                      o = e[hv] || 3000,
                      s = !!m(e[bv]) || !0 === e[bv],
                      c = {};
                    return (
                      (c[fv] = t),
                      (c[pv] = n),
                      (c[mv] = r),
                      (c[gv] = a),
                      (c[vv] = i),
                      (c[hv] = o),
                      (c[bv] = s),
                      c
                    );
                  }
                  function ja (r, a, i) {
                    return (
                      (r.onload = function () {
                        var e = 1223 === r.status ? 204 : r.status;
                        if (e < 100 || 599 < e) i(new Error(sv));
                        else {
                          var t = r.responseText,
                            n = r.getAllResponseHeaders();
                          a({ status: e, headers: n, response: t });
                        }
                      }),
                      r
                    );
                  }
                  function Aa (e, t) {
                    return (
                      (e.onerror = function () {
                        t(new Error(sv));
                      }),
                      e
                    );
                  }
                  function Oa (e, t, n) {
                    return (
                      (e.timeout = t),
                      (e.ontimeout = function () {
                        n(new Error(cv));
                      }),
                      e
                    );
                  }
                  function La (e, t) {
                    return !0 === t && (e.withCredentials = t), e;
                  }
                  function Ma (n, e) {
                    return (
                      y(function (e, t) {
                        y(function (e) {
                          return n.setRequestHeader(t, e);
                        }, e);
                      }, e),
                      n
                    );
                  }
                  function Na (r, e) {
                    var t = xa(e),
                      a = t[fv],
                      i = t[pv],
                      o = t[mv],
                      s = t[gv],
                      c = t[vv],
                      u = t[hv],
                      l = t[bv];
                    return Re(function (e, t) {
                      var n = new r.XMLHttpRequest();
                      (n = Aa((n = ja(n, e, t)), t)).open(a, i, l),
                        (n = Ma((n = La(n, c)), o)),
                        l && (n = Oa(n, u, t)),
                        n.send(s);
                    });
                  }
                  function Ra (e) {
                    return Na(cl, e);
                  }
                  function Fa (e, t, n) {
                    var r = {};
                    return (r[fv] = lv), (r[pv] = Ia(e, t)), (r[hv] = n), r;
                  }
                  function qa (e) {
                    return (200 <= e && e < 300) || 304 === e;
                  }
                  function Ua (e) {
                    if (!qa(e.status)) return null;
                    var t = e.response;
                    if (x(t)) return null;
                    var n = {};
                    return (n.type = kd), (n.content = t), n;
                  }
                  function Ba (e) {
                    return Ra(Fa(e.content, {}, nt()[hv]))
                      .then(Ua)
                      ['catch'](function () {
                        return null;
                      });
                  }
                  function Ha (e) {
                    var t = e[Wl];
                    if (x(t)) return '';
                    var n = yv.exec(t);
                    return V(n) || 2 !== n.length ? '' : n[1];
                  }
                  function Ga (e, t) {
                    var n = document.createElement(Fd);
                    n.innerHTML = t;
                    var r = n.firstElementChild;
                    return m(r) ? t : ((r.id = e), r.outerHTML);
                  }
                  function za (e) {
                    var t = e[ql],
                      n = Ha(e);
                    if (x(n) || x(t)) return e;
                    var r = e[Wl];
                    return (e[Wl] = r.replace(_v, '')), (e[ql] = Ga(n, t)), e;
                  }
                  function Ja (e) {
                    return !m(e.selector);
                  }
                  function Ya (e) {
                    if (!Ja(e)) return null;
                    var t = za(e);
                    return C(t[ql]) ? t : (Te(af, t), null);
                  }
                  function Wa (e) {
                    if (!Ja(e)) return null;
                    var t = za(e);
                    return C(t[ql]) ? t : (Te(af, t), null);
                  }
                  function Qa (e) {
                    if (!Ja(e)) return null;
                    var t = za(e);
                    return C(t[ql]) ? t : (Te(af, t), null);
                  }
                  function $a (e) {
                    if (!Ja(e)) return null;
                    var t = za(e);
                    return C(t[ql]) ? t : (Te(af, t), null);
                  }
                  function Ka (e) {
                    if (!Ja(e)) return null;
                    var t = za(e);
                    return C(t[ql]) ? t : (Te(af, t), null);
                  }
                  function Xa (e) {
                    if (!Ja(e)) return null;
                    var t = za(e);
                    return C(t[ql]) ? t : (Te(af, t), null);
                  }
                  function Za (e) {
                    if (!Ja(e)) return null;
                    var t = za(e);
                    return C(t[ql]) ? t : (Te(af, t), null);
                  }
                  function ei (e) {
                    return Ja(e) ? (C(e[ql]) ? e : (Te(af, e), null)) : null;
                  }
                  function ti (e) {
                    return Ja(e) ? (d(e[ql]) ? e : (Te(of, e), null)) : null;
                  }
                  function ni (e) {
                    return Ja(e) ? (C(e[ql]) ? e : (Te(ff, e), null)) : null;
                  }
                  function ri (e) {
                    return Ja(e) ? (d(e[ql]) ? e : (Te(sf, e), null)) : null;
                  }
                  function ai (e) {
                    return Ja(e) ? (d(e[ql]) ? e : (Te(cf, e), null)) : null;
                  }
                  function ii (e) {
                    return Ja(e) ? (d(e[ql]) ? e : (Te(uf, e), null)) : null;
                  }
                  function oi (e) {
                    return Ja(e) ? e : null;
                  }
                  function si (e) {
                    return Ja(e) ? (d(e[ql]) ? e : (Te(lf, e), null)) : null;
                  }
                  function ci (e) {
                    var t = e.content;
                    return x(t) ? (Te(df, e), null) : ((e.content = ka(t, {})), e);
                  }
                  function ui (e) {
                    var t = e[Fl];
                    if (x(t)) return null;
                    switch (t) {
                      case $l:
                        return Ya(e);
                      case Xl:
                        return Wa(e);
                      case pd:
                        return Qa(e);
                      case gd:
                        return $a(e);
                      case hd:
                        return Ka(e);
                      case dd:
                        return Xa(e);
                      case fd:
                        return Za(e);
                      case sd:
                        return ei(e);
                      case ed:
                        return ti(e);
                      case td:
                        return ni(e);
                      case nd:
                        return ri(e);
                      case ad:
                        return ai(e);
                      case id:
                        return ii(e);
                      case od:
                        return oi(e);
                      case rd:
                        return si(e);
                      case cd:
                        return ci(e);
                      default:
                        return null;
                    }
                  }
                  function li (e) {
                    var t = e[ql];
                    if (!gl(t)) return null;
                    if (V(t)) return null;
                    var n = g(Cv, N(ui, t));
                    if (V(n)) return null;
                    var r = ll({}, e);
                    return (r.content = n), r;
                  }
                  function di (e) {
                    var t = (0 < arguments.length && e !== undefined ? arguments[0] : {}).options;
                    return gl(t) ? (V(t) ? [] : Wg(N(Kg, t))) : [];
                  }
                  function fi (e) {
                    var t = 0 < arguments.length && e !== undefined ? arguments[0] : {},
                      n = t.execute,
                      r = void 0 === n ? {} : n,
                      a = t.prefetch,
                      i = void 0 === a ? {} : a,
                      o = r.pageLoad,
                      s = void 0 === o ? {} : o,
                      c = r.mboxes,
                      u = void 0 === c ? [] : c,
                      l = i.mboxes,
                      d = void 0 === l ? [] : l,
                      f = i.views,
                      p = void 0 === f ? [] : f;
                    return h([di(s), h(N(di, u)), h(N(di, d)), h(N(di, p))]);
                  }
                  function pi (e) {
                    var t = (0 < arguments.length && e !== undefined ? arguments[0] : {}).execute,
                      n = void 0 === t ? {} : t,
                      r = n.pageLoad,
                      a = void 0 === r ? {} : r,
                      i = n.mboxes,
                      o = void 0 === i ? [] : i,
                      s = h([Qg(a) || [], h(Wg(N(Qg, o)))]),
                      c = h(N($g, g(Jg, s))),
                      u = g(Yg, s),
                      l = g(Yg, c),
                      d = u.concat(l),
                      f = {};
                    if (V(d)) return f;
                    var p = d[0].content;
                    return x(p) || (f.url = p), f;
                  }
                  function mi (e) {
                    var t = (0 < arguments.length && e !== undefined ? arguments[0] : {})
                      .analytics;
                    return V(t) ? [] : [t];
                  }
                  function gi (e) {
                    var t = 0 < arguments.length && e !== undefined ? arguments[0] : {},
                      n = t.execute,
                      r = void 0 === n ? {} : n,
                      a = t.prefetch,
                      i = void 0 === a ? {} : a,
                      o = r.pageLoad,
                      s = void 0 === o ? {} : o,
                      c = r.mboxes,
                      u = void 0 === c ? [] : c,
                      l = i.mboxes,
                      d = void 0 === l ? [] : l,
                      f = i.views,
                      p = void 0 === f ? [] : f;
                    return h([mi(s), h(N(mi, u)), h(N(mi, d)), h(N(mi, p))]);
                  }
                  function vi (e, t) {
                    (e.parameters = t.parameters),
                      (e.profileParameters = t.profileParameters),
                      (e.order = t.order),
                      (e.product = t.product);
                  }
                  function hi (e, t) {
                    var n = t[0],
                      r = t[1],
                      a = !V(n),
                      i = !V(r);
                    return (a || i) && (a && (e.options = n), i && (e.metrics = r)), e;
                  }
                  function bi (e) {
                    switch (e.type) {
                      case cd:
                        return Fe(Va(e));
                      case Id:
                        return Ba(e);
                      case jf:
                        return Fe(li(e));
                      default:
                        return Fe(e);
                    }
                  }
                  function yi (e, t) {
                    if (!gl(e)) return Fe([]);
                    if (V(e)) return Fe([]);
                    var n = g(t, e);
                    return V(n)
                      ? Fe([])
                      : Be(
                          N(function (e) {
                            return bi(e);
                          }, n)
                        ).then(Wg);
                  }
                  function _i (e, t) {
                    return gl(e) ? (V(e) ? Fe([]) : Fe(g(t, e))) : Fe([]);
                  }
                  function Ci (e) {
                    var t = e.response.execute;
                    if (!d(t)) return Fe(null);
                    var n = t.pageLoad;
                    if (!d(n)) return Fe(null);
                    var r = n.analytics,
                      a = n.options,
                      i = n.metrics,
                      o = { analytics: r };
                    return Be([yi(a, ga), _i(i, ba)]).then(function (e) {
                      return hi(o, e);
                    });
                  }
                  function Si (e) {
                    var t = e.name,
                      n = e.analytics,
                      r = e.options,
                      a = e.metrics,
                      i = { name: t, analytics: n };
                    return Be([yi(r, ga), _i(a, ha)]).then(function (e) {
                      return hi(i, e);
                    });
                  }
                  function Pi (e) {
                    var t = e.response.execute;
                    if (!d(t)) return Fe([]);
                    var n = t.mboxes;
                    return !gl(n) || V(n) ? Fe([]) : Be(N(Si, g(ev, n))).then(Wg);
                  }
                  function wi (e, t, n) {
                    return e.index === t && e.name === n;
                  }
                  function Ei (e, t, n) {
                    var r = e.prefetch,
                      a = (void 0 === r ? {} : r).mboxes,
                      i = void 0 === a ? [] : a;
                    return V(i)
                      ? null
                      : v(
                          g(function (e) {
                            return wi(e, t, n);
                          }, i)
                        );
                  }
                  function Ti (e, t) {
                    var n = t.index,
                      r = t.name,
                      a = t.state,
                      i = t.analytics,
                      o = t.options,
                      s = t.metrics,
                      c = Ei(e, n, r),
                      u = { name: r, state: a, analytics: i };
                    return (
                      m(c) || vi(u, c),
                      Be([yi(o, va), _i(s, ha)]).then(function (e) {
                        return hi(u, e);
                      })
                    );
                  }
                  function ki (e) {
                    var t = e.request,
                      n = e.response.prefetch;
                    if (!d(n)) return Fe([]);
                    var r = n.mboxes;
                    if (!gl(r) || V(r)) return Fe([]);
                    var a = g(tv, r),
                      i = function i (e) {
                        return Ti(t, e);
                      };
                    return Be(N(i, a)).then(Wg);
                  }
                  function Ii (e) {
                    var t = e.prefetch,
                      n = (void 0 === t ? {} : t).views,
                      r = void 0 === n ? [] : n;
                    return V(r) ? null : r[0];
                  }
                  function Vi (e, t) {
                    var n = t.name,
                      r = t.state,
                      a = t.analytics,
                      i = t.options,
                      o = t.metrics,
                      s = Ii(e),
                      c = { name: n.toLowerCase(), state: r, analytics: a };
                    return (
                      m(s) || vi(c, s),
                      Be([yi(i, va), _i(o, ba)]).then(function (e) {
                        return hi(c, e);
                      })
                    );
                  }
                  function Di (e) {
                    var t = e.request,
                      n = e.response.prefetch;
                    if (!d(n)) return Fe([]);
                    var r = n.views;
                    if (!gl(r) || V(r)) return Fe([]);
                    var a = g(nv, r),
                      i = function i (e) {
                        return Vi(t, e);
                      };
                    return Be(N(i, a)).then(Wg);
                  }
                  function xi (e) {
                    var t = e.response.prefetch;
                    return d(t) ? _i(t.metrics, ba) : Fe([]);
                  }
                  function ji (e) {
                    var t = e[0],
                      n = e[1],
                      r = e[2],
                      a = e[3],
                      i = e[4],
                      o = {},
                      s = {};
                    d(t) && (s.pageLoad = t), V(n) || (s.mboxes = n);
                    var c = {};
                    return (
                      V(r) || (c.mboxes = r),
                      V(a) || (c.views = a),
                      V(i) || (c.metrics = i),
                      V(s) || (o.execute = s),
                      V(c) || (o.prefetch = c),
                      o
                    );
                  }
                  function Ai (e) {
                    var t = b([Pa, _a, Ca])(e);
                    return Be([Ci(t), Pi(t), ki(t), Di(t), xi(t)]).then(ji);
                  }
                  function Oi (e) {
                    return !V(pi(e));
                  }
                  function Li (e) {
                    var t = fi(e),
                      n = {};
                    return V(t) || (n.responseTokens = t), n;
                  }
                  function Mi (e) {
                    var t = Li(e),
                      n = gi(e);
                    return V(n) || (t.analyticsDetails = n), Te(tf, e), mt(t, Oi(e)), Fe(e);
                  }
                  function Ni (e, t) {
                    var n = Li(t);
                    return (n.mbox = e), Te(tf, t), mt(n, Oi(t)), Fe(t);
                  }
                  function Ri (e) {
                    return Ee(ef, e), gt({ error: e }), qe(e);
                  }
                  function Fi (e, t) {
                    return Ee(ef, t), gt({ mbox: e, error: t }), qe(t);
                  }
                  function qi (e) {
                    var t = nt()[Yf],
                      n = e.mbox,
                      r = e.timeout,
                      a = d(e.params) ? e.params : {},
                      i = function i (e) {
                        return Ni(n, e);
                      },
                      o = function o (e) {
                        return Fi(n, e);
                      },
                      s = {},
                      c = {};
                    n === t ? (c.pageLoad = {}) : (c.mboxes = [{ index: 0, name: n }]),
                      (s.execute = c);
                    var u = aa(n, s);
                    if (!V(u)) {
                      var l = {};
                      (l.analytics = u), (s.experienceCloud = l);
                    }
                    return (
                      pt({ mbox: n }),
                      sa(s, a)
                        .then(function (e) {
                          return fa(e, r);
                        })
                        .then(Ai)
                        .then(i)
                        ['catch'](o)
                    );
                  }
                  function Ui (e) {
                    var t = nt()[Yf],
                      n = e.consumerId,
                      r = void 0 === n ? t : n,
                      a = e.request,
                      i = e.timeout,
                      o = aa(r, a),
                      s = function s (e) {
                        return Mi(e);
                      },
                      c = function c (e) {
                        return Ri(e);
                      };
                    if (!V(o)) {
                      var u = a.experienceCloud || {};
                      (u.analytics = o), (a.experienceCloud = u);
                    }
                    return (
                      pt({}),
                      sa(a, {})
                        .then(function (e) {
                          return fa(e, i);
                        })
                        .then(Ai)
                        .then(s)
                        ['catch'](c)
                    );
                  }
                  function Bi (e, t) {
                    return wt(t).addClass(e);
                  }
                  function Hi (e, t) {
                    return wt(t).css(e);
                  }
                  function Gi (e, t) {
                    return wt(t).attr(e);
                  }
                  function zi (e, t, n) {
                    return wt(n).attr(e, t);
                  }
                  function Ji (e, t) {
                    return wt(t).removeAttr(e);
                  }
                  function Yi (e, t, n) {
                    var r = Gi(e, n);
                    Al(r) && (Ji(e, n), zi(t, r, n));
                  }
                  function Wi (e, t) {
                    return Al(Gi(e, t));
                  }
                  function Qi (e) {
                    return new Error('Could not find: ' + e);
                  }
                  function $i (r, a, i) {
                    return Re(function (t, e) {
                      var n = Oe(function () {
                        var e = i(r);
                        V(e) || (n.disconnect(), t(e));
                      });
                      o(function () {
                        n.disconnect(), e(Qi(r));
                      }, a),
                        n.observe(ul, { childList: !0, subtree: !0 });
                    });
                  }
                  function Ki () {
                    return ul[Sv] === Pv;
                  }
                  function Xi (r, a, i) {
                    return Re(function (t, e) {
                      function n () {
                        var e = i(r);
                        V(e) ? cl.requestAnimationFrame(n) : t(e);
                      }
                      n(),
                        o(function () {
                          e(Qi(r));
                        }, a);
                    });
                  }
                  function Zi (r, a, i) {
                    return Re(function (t, e) {
                      function n () {
                        var e = i(r);
                        V(e) ? o(n, wv) : t(e);
                      }
                      n(),
                        o(function () {
                          e(Qi(r));
                        }, a);
                    });
                  }
                  function eo (e, t, n) {
                    var r = 1 < arguments.length && t !== undefined ? arguments[1] : nt()[tp],
                      a = 2 < arguments.length && n !== undefined ? arguments[2] : wt,
                      i = a(e);
                    return V(i) ? (Ae() ? $i(e, r, a) : Ki() ? Xi(e, r, a) : Zi(e, r, a)) : Fe(i);
                  }
                  function to (e) {
                    return Gi(Ed, e);
                  }
                  function no (e) {
                    return Wi(Ed, e);
                  }
                  function ro (e) {
                    return (
                      y(function (e) {
                        return Yi(Dd, Ed, e);
                      }, I(jt(Rd, e))),
                      e
                    );
                  }
                  function ao (e) {
                    return (
                      y(function (e) {
                        return Yi(Ed, Dd, e);
                      }, I(jt(Rd, e))),
                      e
                    );
                  }
                  function io (e) {
                    return Te(mf, e), Gi(Dd, zi(Dd, e, kt('<' + Rd + '/>')));
                  }
                  function oo (e) {
                    var t = g(no, I(jt(Rd, e)));
                    return V(t) || y(io, N(to, t)), e;
                  }
                  function so (e) {
                    return b([ro, oo, ao])(e);
                  }
                  function co (e) {
                    var t = Gi(Dd, e);
                    return Al(t) ? t : null;
                  }
                  function uo (e) {
                    return g(Al, N(co, I(jt(Vd, e))));
                  }
                  function lo (e) {
                    return q(
                      function (e, t) {
                        return e.then(function () {
                          return Te(yf, t), je({ remoteScript: t }), ml(t);
                        });
                      },
                      Fe(),
                      e
                    );
                  }
                  function fo (e) {
                    return e;
                  }
                  function po (e, t) {
                    return Ee(Zd, t), je({ action: e, error: t }), e;
                  }
                  function mo (e, t) {
                    var n,
                      r = wt(t[Wl]),
                      a = so(Tt(t[ql])),
                      i = uo(a);
                    try {
                      n = Fe(e(r, a));
                    } catch (o) {
                      return qe(po(t, o));
                    }
                    return V(i)
                      ? n
                          .then(function () {
                            return fo(t);
                          })
                          ['catch'](function (e) {
                            return po(t, e);
                          })
                      : n
                          .then(function () {
                            return lo(i);
                          })
                          .then(function () {
                            return fo(t);
                          })
                          ['catch'](function (e) {
                            return po(t, e);
                          });
                  }
                  function go (e) {
                    var t = Tt(e);
                    return M(
                      '',
                      q(
                        function (e, t) {
                          return e.push(Zt(Tt(t))), e;
                        },
                        [],
                        I(jt(Ev, t))
                      )
                    );
                  }
                  function vo (e) {
                    var t = ll({}, e),
                      n = t[ql];
                    if (x(n)) return t;
                    var r = wt(t[Wl]);
                    return xt(Od, r) && ((t[Fl] = pd), (t[ql] = go(n))), t;
                  }
                  function ho (e) {
                    return e.indexOf('px') === e.length - 2 ? e : e + 'px';
                  }
                  function bo (e, t) {
                    return Xt(Zt(t), e);
                  }
                  function yo (e) {
                    return Te(rf, e), mo(bo, e);
                  }
                  function _o (e) {
                    var t = wt(e[Wl]),
                      n = e[ql];
                    return Te(rf, e), je({ action: e }), en(n, t), Fe(e);
                  }
                  function Co (e, t) {
                    return $t(Zt(t), e);
                  }
                  function So (e) {
                    return Te(rf, e), mo(Co, e);
                  }
                  function Po (e, t) {
                    return Kt(Zt(t), e);
                  }
                  function wo (e) {
                    return Te(rf, e), mo(Po, e);
                  }
                  function Eo (e, t) {
                    var n = Dt(e);
                    return Yt(Qt(Zt(t), e)), n;
                  }
                  function To (e) {
                    return Te(rf, e), mo(Eo, e);
                  }
                  function ko (e, t) {
                    return It(Qt(Zt(t), e));
                  }
                  function Io (e) {
                    return Te(rf, e), mo(ko, e);
                  }
                  function Vo (e, t) {
                    return Vt(Wt(Zt(t), e));
                  }
                  function Do (e) {
                    return Te(rf, e), mo(Vo, e);
                  }
                  function xo (e, t) {
                    return Dt(Qt(Zt(t), e));
                  }
                  function jo (e) {
                    return Te(rf, e), mo(xo, e);
                  }
                  function Ao (e) {
                    var t = e[ql],
                      n = wt(e[Wl]);
                    return Te(rf, e), je({ action: e }), Ji(Dd, n), zi(Dd, io(t), n), Fe(e);
                  }
                  function Oo (e) {
                    var t = e[ql],
                      n = wt(e[Wl]);
                    return (
                      Te(rf, e),
                      je({ action: e }),
                      y(function (e, t) {
                        return zi(t, e, n);
                      }, t),
                      Fe(e)
                    );
                  }
                  function Lo (e, t, r) {
                    y(function (n) {
                      y(function (e, t) {
                        return n.style.setProperty(t, e, r);
                      }, t);
                    }, I(e));
                  }
                  function Mo (e) {
                    var t = wt(e[Wl]),
                      n = e[ql],
                      r = n[Yl];
                    return Te(rf, e), je({ action: e }), x(r) ? Hi(n, t) : Lo(t, n, r), Fe(e);
                  }
                  function No (e) {
                    var t = wt(e[Wl]),
                      n = e[ql];
                    return (
                      (n[Bl] = ho(n[Bl])),
                      (n[Ul] = ho(n[Ul])),
                      Te(rf, e),
                      je({ action: e }),
                      Hi(n, t),
                      Fe(e)
                    );
                  }
                  function Ro (e) {
                    var t = wt(e[Wl]),
                      n = e[ql];
                    return (
                      (n[Hl] = ho(n[Hl])),
                      (n[Gl] = ho(n[Gl])),
                      Te(rf, e),
                      je({ action: e }),
                      Hi(n, t),
                      Fe(e)
                    );
                  }
                  function Fo (e) {
                    var t = wt(e[Wl]);
                    return Te(rf, e), je({ action: e }), Yt(t), Fe(e);
                  }
                  function qo (e) {
                    var t = wt(e[Wl]),
                      n = e[ql],
                      r = n[zl],
                      a = n[Jl],
                      i = I(At(t)),
                      o = i[r],
                      s = i[a];
                    return Et(o) && Et(s)
                      ? (Te(rf, e), je({ action: e }), r < a ? Wt(o, s) : Qt(o, s), Fe(e))
                      : (Te(pf, e), qe(e));
                  }
                  function Uo (e) {
                    var t = vo(e);
                    switch (t[Fl]) {
                      case $l:
                        return yo(t);
                      case Xl:
                        return _o(t);
                      case pd:
                        return So(t);
                      case gd:
                        return wo(t);
                      case hd:
                        return To(t);
                      case dd:
                        return Io(t);
                      case fd:
                        return Do(t);
                      case sd:
                        return jo(t);
                      case ed:
                        return Oo(t);
                      case td:
                        return Ao(t);
                      case nd:
                        return Mo(t);
                      case ad:
                        return No(t);
                      case id:
                        return Ro(t);
                      case od:
                        return Fo(t);
                      case rd:
                        return qo(t);
                      default:
                        return Fe(t);
                    }
                  }
                  function Bo (e) {
                    return e[Fl] === ud || e[Fl] === ld;
                  }
                  function Ho (e) {
                    var t = e[Wl];
                    return Al(t) || O(t);
                  }
                  function Go (e) {
                    var t = e.key;
                    if (!x(t) && Ho(e)) {
                      var n = e[Wl];
                      zi(Tv, t, n);
                    }
                  }
                  function zo (e) {
                    var t = e[Ql];
                    x(t) || pn(t);
                  }
                  function Jo (e) {
                    if (Ho(e)) {
                      var t = e[Wl];
                      Bo(e) ? Bi(Uf, t) : (Bi(qf, t), zo(e));
                    } else zo(e);
                  }
                  function Yo (e) {
                    y(Jo, e);
                  }
                  function Wo (e) {
                    var t = e.key;
                    if (x(t)) return !0;
                    if (e[Fl] === sd) return e[xp];
                    var n = e[Wl],
                      r = Gi(Tv, n);
                    return r !== t || (r === t && !e[xp]);
                  }
                  function Qo (n) {
                    return Wo(n)
                      ? Uo(n)
                          .then(function () {
                            return Te(nf, n), je({ action: n }), Go(n), Jo(n), n;
                          })
                          ['catch'](function (e) {
                            Ee(Zd, e), je({ action: n, error: e }), Jo(n);
                            var t = ll({}, n);
                            return (t[_f] = !0), t;
                          })
                      : (Jo(n), n);
                  }
                  function $o (e) {
                    var t = g(function (e) {
                      return !0 === e[_f];
                    }, e);
                    return V(t) ? Fe() : (Yo(t), qe(e));
                  }
                  function Ko (t) {
                    return eo(t[Wl])
                      .then(function () {
                        return t;
                      })
                      ['catch'](function () {
                        var e = ll({}, t);
                        return (e[_f] = !0), e;
                      });
                  }
                  function Xo (e) {
                    return Ko(e).then(Qo);
                  }
                  function Zo (e) {
                    return Be(N(Xo, e)).then($o);
                  }
                  function es (e, t, n) {
                    return wt(n).on(e, t);
                  }
                  function ts (e, t, n) {
                    return wt(n).off(e, t);
                  }
                  function ns (e) {
                    return eo(e[Wl])
                      .then(function () {
                        return je({ metric: e }), ll({ found: !0 }, e);
                      })
                      ['catch'](function () {
                        return Ee(kv, e), je({ metric: e, message: kv }), e;
                      });
                  }
                  function rs (e, t, n) {
                    return e[Iv][Vv](t, n);
                  }
                  function as (e, t, n) {
                    var r = {};
                    r[Rp] = [Fp];
                    var a = {};
                    (a[fv] = dv),
                      (a[pv] = t),
                      (a[gv] = n),
                      (a[vv] = !0),
                      (a[bv] = !1),
                      (a[mv] = r);
                    try {
                      e(a);
                    } catch (i) {
                      return !1;
                    }
                    return !0;
                  }
                  function is (e) {
                    return Iv in e && Vv in e[Iv];
                  }
                  function os (e, t) {
                    return is(cl) ? rs(cl, e, t) : as(Ra, e, t);
                  }
                  function ss (e) {
                    var t = e.name,
                      n = Ln(Ap) || {};
                    (n[t] = e), On(Ap, n);
                  }
                  function cs (e, t) {
                    var n = 1 < arguments.length && t !== undefined ? arguments[1] : {},
                      r = n.page,
                      a = void 0 === r || r,
                      i = (Ln(Ap) || {})[e];
                    if (m(i)) return i;
                    var o = n.impressionId;
                    return m(o) ? i : ll({ page: a, impressionId: o }, i);
                  }
                  function us (e) {
                    y(ss, e);
                  }
                  function ls (e) {
                    var t = aa(e, {}),
                      n = { context: { beacon: !0 } };
                    if (!V(t)) {
                      var r = {};
                      (r.analytics = t), (n.experienceCloud = r);
                    }
                    return n;
                  }
                  function ds (e, t, n) {
                    var r = ca(ls(e), t);
                    return (r.notifications = n), r;
                  }
                  function fs (e, t, n) {
                    return sa(ls(e), t).then(function (e) {
                      return (e.notifications = n), e;
                    });
                  }
                  function ps (e, t, n) {
                    var r = {
                      id: G(),
                      type: t,
                      timestamp: F(),
                      parameters: e.parameters,
                      profileParameters: e.profileParameters,
                      order: e.order,
                      product: e.product,
                    };
                    return V(n) || (r.tokens = n), r;
                  }
                  function ms (e, t, n) {
                    var r = e.name,
                      a = e.state,
                      i = ps(e, t, n);
                    return (i.mbox = { name: r, state: a }), i;
                  }
                  function gs (e, t, n) {
                    var r = e.name,
                      a = e.state,
                      i = ps(e, t, n);
                    return (i.view = { name: r, state: a }), i;
                  }
                  function vs (e) {
                    var t = da(nt());
                    return os(t, JSON.stringify(e)) ? (Te(Dv, t, e), !0) : (Ee(xv, t, e), !1);
                  }
                  function hs (e, t, n) {
                    var r = ar(nt()[Yf]),
                      a = ps(Zr({}, r), t, [n]),
                      i = ds(G(), r, [a]);
                    Te(Lv, e, a), je({ source: e, event: t, request: i }), vs(i);
                  }
                  function bs (e, t, n) {
                    var r = ar(e),
                      a = ps(Zr({}, r), t, [n]);
                    a.mbox = { name: e };
                    var i = ds(e, r, [a]);
                    Te(Mv, e, a), je({ mbox: e, event: t, request: i }), vs(i);
                  }
                  function ys (e) {
                    var t = nt()[Yf],
                      i = [],
                      o = Np;
                    if (
                      (y(function (e) {
                        var t = e.mbox,
                          n = e.data;
                        if (!m(n)) {
                          var r = n.eventTokens,
                            a = void 0 === r ? [] : r;
                          V(a) || i.push(ms(t, o, a));
                        }
                      }, e),
                      !V(i))
                    ) {
                      var n = ds(t, {}, i);
                      Te(Ov, i), je({ source: Rv, event: Fv, request: n }), vs(n);
                    }
                  }
                  function _s (e, t, n) {
                    var r = ar(nt()[Yf]),
                      a = ps(Zr({}, r), t, [n]);
                    a.view = { name: e };
                    var i = ds(G(), r, [a]);
                    Te(Nv, e, a), je({ view: e, event: t, request: i }), vs(i);
                  }
                  function Cs (e) {
                    var t = e.viewName,
                      n = e.impressionId,
                      r = ar(nt()[Yf]),
                      a = ps(Zr({}, r), Np, []);
                    (a.view = { name: t }),
                      Te(jv, t),
                      fs(t, r, [a]).then(function (e) {
                        (e.impressionId = n), je({ view: t, event: qv, request: e }), vs(e);
                      });
                  }
                  function Ss (e) {
                    if (!m(e)) {
                      var t = e.view,
                        n = e.data,
                        r = (void 0 === n ? {} : n).eventTokens,
                        a = void 0 === r ? [] : r;
                      if (!V(a)) {
                        var i = t.name,
                          o = t.impressionId,
                          s = cs(i);
                        if (!m(s)) {
                          var c = ds(i, {}, [gs(s, Np, a)]);
                          (c.impressionId = o),
                            Te(Av, i, a),
                            je({ view: i, event: Fv, request: c }),
                            vs(c);
                        }
                      }
                    }
                  }
                  function Ps (e, t) {
                    e === Ad && Bi(Uf, t);
                  }
                  function ws (e, t) {
                    return !m(Uv[e]) && !m(Uv[e][t]);
                  }
                  function Es (e, r, a) {
                    if (m(Uv[e])) {
                      var t = p(Uv);
                      V(t) ||
                        y(function (n) {
                          y(function (e) {
                            var t = Uv[n][e];
                            ts(r, t, a);
                          }, p(Uv[n])),
                            delete Uv[n];
                        }, t);
                    }
                  }
                  function Ts (e, t, n) {
                    (Uv[e] = Uv[e] || {}), (Uv[e][t] = n);
                  }
                  function ks (e, t, n, r) {
                    var a = n.type,
                      i = n.selector,
                      o = n.eventToken,
                      s = S(a + ':' + i + ':' + o),
                      c = function c () {
                        return r(e, a, o);
                      };
                    Ps(a, i),
                      t ? ws(e, s) || (Es(e, a, i), Ts(e, s, c), es(a, c, i)) : es(a, c, i);
                  }
                  function Is (t, n, e, r) {
                    return Be(N(ns, e))
                      .then(function (e) {
                        return (
                          y(
                            function (e) {
                              return ks(t, n, e, r);
                            },
                            g(function (e) {
                              return e.found;
                            }, e)
                          ),
                          zv()
                        );
                      })
                      ['catch'](Jv);
                  }
                  function Vs (e) {
                    return Is(e.name, !1, Gv(e), bs);
                  }
                  function Ds (e) {
                    return Is(e.name, !0, Gv(e), _s);
                  }
                  function xs (e) {
                    return Is(Bv, !1, Gv(e), hs);
                  }
                  function js (e) {
                    return Is(Hv, !1, Gv(e), hs);
                  }
                  function As (e) {
                    var t = N(Wv, e);
                    dn(Wg(t));
                  }
                  function Os (e) {
                    var t = N(Wv, e);
                    fn(Wg(t));
                  }
                  function Ls (e) {
                    var t = g(Jg, Qg(e));
                    return h(N(Yv, t));
                  }
                  function Ms (e) {
                    return d(e) && e.type !== Zl;
                  }
                  function Ns (e, t, n) {
                    return N(function (e) {
                      return ll({ key: t, page: n }, e);
                    }, g(Ms, e));
                  }
                  function Rs (e, t, n) {
                    var r = e.eventToken;
                    return Zo(Ns(e.content, t, n))
                      .then(function () {
                        return Qv(r);
                      })
                      ['catch']($v);
                  }
                  function Fs (e) {
                    return d(e) && e.type !== Td;
                  }
                  function qs (e, t) {
                    return N(e, g(Fs, Qg(t)));
                  }
                  function Us (e, t, n) {
                    var r = c({ status: wf }, e, t),
                      a = N(av, g(zg, n)),
                      i = {};
                    return V(a) || ((r.status = _f), (i.errors = a)), V(i) || (r.data = i), r;
                  }
                  function Bs (e, t, n) {
                    var r = c({ status: wf }, e, t),
                      a = N(av, g(zg, n)),
                      i = N(av, g(Kv, n)),
                      o = {};
                    return (
                      V(a) || ((r.status = _f), (o.errors = a)),
                      V(i) || (o.eventTokens = i),
                      V(o) || (r.data = o),
                      r
                    );
                  }
                  function Hs (t, e, n) {
                    var r = function r (e) {
                      return Rs(e, !0);
                    };
                    return Be(qs(r, t))
                      .then(e)
                      .then(function (e) {
                        return n(t), e;
                      });
                  }
                  function Gs (t, n, r, a) {
                    var i = n.name,
                      o = function o (e) {
                        return Rs(e, i, r);
                      };
                    return Be(qs(o, n))
                      .then(function (e) {
                        return Bs(t, n, e);
                      })
                      .then(function (e) {
                        return a(n), e;
                      });
                  }
                  function zs (t) {
                    var n = function n (e) {
                      return Us(kf, t, e);
                    };
                    return Hs(t, n, Vs);
                  }
                  function Js (e) {
                    return Gs(kf, e, !0, Vs);
                  }
                  function Ys (e) {
                    As(Ls(e));
                  }
                  function Ws (e, t) {
                    if (!(1 < arguments.length && t !== undefined && arguments[1])) {
                      var n = e.execute,
                        r = (void 0 === n ? {} : n).pageLoad,
                        a = void 0 === r ? {} : r;
                      V(a) || Ys(a);
                    }
                  }
                  function Qs (e) {
                    var t = e.prefetch,
                      n = (void 0 === t ? {} : t).views,
                      r = void 0 === n ? [] : n;
                    V(r) || Os(h(N(Ls, r)));
                  }
                  function $s (e) {
                    As(Ls(e)), mn();
                  }
                  function Ks (t) {
                    var n = function n (e) {
                      return Us(Rf, t, e);
                    };
                    return Hs(t, n, xs);
                  }
                  function Xs (e) {
                    return Be(N(zs, e));
                  }
                  function Zs (e) {
                    return Be(N(Js, e));
                  }
                  function ec (e) {
                    return Be([js(e)]).then(Us);
                  }
                  function tc (e) {
                    var t = e.page;
                    return Gs(jp, e, t, Ds);
                  }
                  function nc () {}
                  function rc () {
                    return new Xv();
                  }
                  function ac (e, t, n) {
                    e.emit(t, n);
                  }
                  function ic (e, t, n) {
                    e.on(t, n);
                  }
                  function oc (e, t) {
                    ac(eh, e, t);
                  }
                  function sc (e, t) {
                    ic(eh, e, t);
                  }
                  function cc (e) {
                    return { type: cd, content: e.url };
                  }
                  function uc (e) {
                    var t = {};
                    return (
                      (t.type = $l),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function lc (e) {
                    var t = {};
                    return (
                      (t.type = Xl),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function dc (e) {
                    var t = {};
                    return (
                      (t.type = pd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function fc (e) {
                    var t = {};
                    return (
                      (t.type = gd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function pc (e) {
                    var t = {};
                    return (
                      (t.type = hd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function mc (e) {
                    var t = {};
                    return (
                      (t.type = dd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function gc (e) {
                    var t = {};
                    return (
                      (t.type = fd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function vc (e) {
                    var t = {};
                    return (
                      (t.type = sd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function hc (e) {
                    var t = {};
                    if (
                      ((t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      e.attribute === Dd)
                    )
                      return (t.type = td), (t.content = e.value), t;
                    t.type = ed;
                    var n = {};
                    return (n[e.attribute] = e.value), (t.content = n), t;
                  }
                  function bc (e) {
                    var t = e.style,
                      n = void 0 === t ? {} : t,
                      r = {};
                    return (
                      (r.selector = e.selector),
                      (r.cssSelector = e.cssSelector),
                      m(n.left) || m(n.top)
                        ? m(n.width) || m(n.height)
                          ? (r.type = nd)
                          : (r.type = ad)
                        : (r.type = id),
                      (r.content = n),
                      r
                    );
                  }
                  function yc (e) {
                    var t = {};
                    return (
                      (t.type = od), (t.selector = e.selector), (t.cssSelector = e.cssSelector), t
                    );
                  }
                  function _c (e) {
                    var t = {};
                    (t.from = e.from), (t.to = e.to);
                    var n = {};
                    return (
                      (n.type = rd),
                      (n.selector = e.selector),
                      (n.cssSelector = e.cssSelector),
                      (n.content = t),
                      n
                    );
                  }
                  function Cc (e) {
                    return Al(e.selector) && Al(e.cssSelector);
                  }
                  function Sc (e) {
                    var t = {};
                    if (V(e)) return t;
                    var n = [],
                      r = [],
                      a = [];
                    y(function (e) {
                      switch (e.action) {
                        case Kl:
                          Cc(e) ? a.push(uc(e)) : n.push({ type: kd, content: e.content });
                          break;
                        case Zl:
                          V(e.content) ||
                            y(function (e) {
                              return n.push({ type: Td, content: e });
                            }, e.content);
                          break;
                        case Xl:
                          a.push(lc(e));
                          break;
                        case md:
                          a.push(dc(e));
                          break;
                        case vd:
                          a.push(fc(e));
                          break;
                        case bd:
                          a.push(pc(e));
                          break;
                        case dd:
                          a.push(mc(e));
                          break;
                        case fd:
                          a.push(gc(e));
                          break;
                        case sd:
                          a.push(vc(e));
                          break;
                        case ed:
                          a.push(hc(e));
                          break;
                        case nd:
                          a.push(bc(e));
                          break;
                        case od:
                          a.push(yc(e));
                          break;
                        case rd:
                          a.push(_c(e));
                          break;
                        case cd:
                          n.push(cc(e));
                          break;
                        case ud:
                          r.push({ type: Ad, selector: e.selector, eventToken: e.clickTrackId });
                      }
                    }, e);
                    var i = {};
                    if (
                      (!V(a) && n.push({ type: jf, content: a }),
                      !V(n) && (i.options = n),
                      !V(r) && (i.metrics = r),
                      V(i))
                    )
                      return t;
                    var o = {};
                    return (o.pageLoad = i), (t.execute = o), t;
                  }
                  function Pc (e, t) {
                    var n = {};
                    if (V(t)) return n;
                    var r = [],
                      a = [];
                    y(function (e) {
                      switch (e.action) {
                        case Kl:
                          r.push({ type: kd, content: e.content });
                          break;
                        case Zl:
                          V(e.content) ||
                            y(function (e) {
                              return r.push({ type: Td, content: e });
                            }, e.content);
                          break;
                        case cd:
                          r.push(cc(e));
                          break;
                        case ld:
                          a.push({ type: Ad, eventToken: e.clickTrackId });
                      }
                    }, t);
                    var i = { name: e };
                    if ((!V(r) && (i.options = r), !V(a) && (i.metrics = a), V(i))) return n;
                    var o = {},
                      s = [i];
                    return (o.mboxes = s), (n.execute = o), n;
                  }
                  function wc (e, t, n) {
                    return n ? Sc(t) : Pc(e, t);
                  }
                  function Ec (e) {
                    var t = e.status,
                      n = e.data,
                      r = { status: t, pageLoad: !0 };
                    return m(n) || (r.data = n), r;
                  }
                  function Tc (e) {
                    var t = e.status,
                      n = e.mbox,
                      r = e.data,
                      a = { status: t, mbox: n.name };
                    return m(r) || (a.data = r), a;
                  }
                  function kc (e) {
                    var t = e.status,
                      n = e.view,
                      r = e.data,
                      a = { status: t, view: n.name };
                    return m(r) || (a.data = r), a;
                  }
                  function Ic (e) {
                    var t = e.status,
                      n = e.data,
                      r = { status: t, prefetchMetrics: !0 };
                    return m(n) || (r.data = n), r;
                  }
                  function Vc (e) {
                    if (m(e)) return [null];
                    var t = N(Ec, [e]);
                    return ih(t) && Ee(th, e), t;
                  }
                  function Dc (e) {
                    if (m(e)) return [null];
                    var t = N(Tc, e);
                    return ih(t) && Ee(nh, e), t;
                  }
                  function xc (e, t) {
                    var n = 1 < arguments.length && t !== undefined ? arguments[1] : ys;
                    if (m(e)) return [null];
                    var r = N(Tc, e);
                    return ih(r) && Ee(nh, e), n(e), r;
                  }
                  function jc (e, t) {
                    var n = 1 < arguments.length && t !== undefined ? arguments[1] : Ss;
                    if (m(e)) return [null];
                    var r = N(kc, [e]);
                    return ih(r) && Ee(rh, e), e.view.page && n(e), r;
                  }
                  function Ac (e) {
                    if (m(e)) return [null];
                    var t = N(Ic, [e]);
                    return ih(t) && Ee(ah, e), t;
                  }
                  function Oc (e) {
                    var t = h([Vc(e[0]), Dc(e[1]), xc(e[2]), Ac(e[3])]),
                      n = g(Hg, t),
                      r = g(zg, n);
                    return V(r) ? Fe(n) : qe(r);
                  }
                  function Lc (e) {
                    return qe(e);
                  }
                  function Mc (r, e) {
                    if (!V(e)) {
                      var t = e.options;
                      V(t) ||
                        y(function (e) {
                          if (e.type === kd) {
                            var t = $l,
                              n = e.content;
                            (e.type = jf), (e.content = [{ type: t, selector: r, content: n }]);
                          }
                        }, t);
                    }
                  }
                  function Nc (t, e) {
                    var n = e.metrics;
                    if (!V(n)) {
                      var r = e.name;
                      y(function (e) {
                        (e.name = r), (e.selector = e.selector || t);
                      }, n);
                    }
                  }
                  function Rc (t, e) {
                    var n = ll({}, e),
                      r = n.execute,
                      a = void 0 === r ? {} : r,
                      i = n.prefetch,
                      o = void 0 === i ? {} : i,
                      s = a.pageLoad,
                      c = void 0 === s ? {} : s,
                      u = a.mboxes,
                      l = void 0 === u ? [] : u,
                      d = o.mboxes,
                      f = void 0 === d ? [] : d;
                    return (
                      Mc(t, c),
                      y(function (e) {
                        return Mc(t, e);
                      }, l),
                      y(function (e) {
                        return Nc(t, e);
                      }, l),
                      y(function (e) {
                        return Mc(t, e);
                      }, f),
                      y(function (e) {
                        return Nc(t, e);
                      }, f),
                      n
                    );
                  }
                  function Fc (e) {
                    var t = e.prefetch,
                      n = (void 0 === t ? {} : t).views,
                      r = void 0 === n ? [] : n;
                    V(r) || us(r);
                  }
                  function qc (e) {
                    var t = [],
                      n = e.execute,
                      r = void 0 === n ? {} : n,
                      a = r.pageLoad,
                      i = void 0 === a ? {} : a,
                      o = r.mboxes,
                      s = void 0 === o ? [] : o;
                    V(i) ? t.push(Fe(null)) : t.push(Ks(i)),
                      V(s) ? t.push(Fe(null)) : t.push(Xs(s));
                    var c = e.prefetch,
                      u = void 0 === c ? {} : c,
                      l = u.mboxes,
                      d = void 0 === l ? [] : l,
                      f = u.metrics,
                      p = void 0 === f ? [] : f;
                    return (
                      V(d) ? t.push(Fe(null)) : t.push(Zs(d)),
                      gl(p) && !V(p) ? t.push(ec(u)) : t.push(Fe(null)),
                      ln(),
                      Be(t).then(Oc)['catch'](Lc)
                    );
                  }
                  function Uc (e, t) {
                    o(function () {
                      return e.location.replace(t);
                    });
                  }
                  function Bc (e) {
                    return Al(e) ? e : O(e) ? e : Od;
                  }
                  function Hc (e) {
                    Bi(qf, e);
                  }
                  function Gc (e) {
                    var t = e.mbox,
                      n = e.selector,
                      r = e.offer,
                      a = nt(),
                      i = t === a[Yf];
                    if (V(r)) return Te(hf), Hc(n), ln(), void yt({ mbox: t });
                    var o = Rc(n, wc(t, r, i)),
                      s = pi(o);
                    if (!V(s)) {
                      var c = s.url;
                      return Te(bf, s), _t({ url: c }), void Uc(cl, c);
                    }
                    vt({ mbox: t }),
                      Ws(o),
                      qc(o)
                        .then(function (e) {
                          V(e) || ht({ mbox: t, execution: e });
                        })
                        ['catch'](function (e) {
                          return bt({ error: e });
                        });
                  }
                  function zc (e, t) {
                    var n = 1 < arguments.length && t !== undefined && arguments[1],
                      r = e.selector,
                      a = e.response;
                    if (V(a)) return Te(hf), Hc(r), ln(), yt({}), oc(im), Fe();
                    var i = Rc(r, a),
                      o = pi(i);
                    if (V(o))
                      return (
                        vt({}),
                        Fc(i),
                        oc(am),
                        Ws(i, n),
                        qc(i)
                          .then(function (e) {
                            V(e) || ht({ execution: e });
                          })
                          ['catch'](function (e) {
                            return bt({ error: e });
                          })
                      );
                    var s = o.url;
                    return Te(bf, o), _t({ url: s }), oc(om), Uc(cl, s), Fe();
                  }
                  function Jc (e) {
                    var t = e[tm];
                    if (V(t)) return !1;
                    var n = t.request,
                      r = t.response;
                    return !V(n) && !V(r);
                  }
                  function Yc (e) {
                    return e[tm];
                  }
                  function Wc (e) {
                    Ee(oh, Up, e), je({ source: oh, error: e }), ln();
                  }
                  function Qc (e, t) {
                    var n = 1 < arguments.length && t !== undefined && arguments[1],
                      r = { selector: Od, response: e };
                    Te(oh, Lf, e), je({ source: oh, response: e }), zc(r, n)['catch'](Wc);
                  }
                  function $c (e, t) {
                    var n = ll({}, t),
                      r = n.execute,
                      a = n.prefetch,
                      i = e[kp],
                      o = e[Tp];
                    return (
                      r && (n.execute.mboxes = null),
                      r && !i && (n.execute.pageLoad = null),
                      a && (n.prefetch.mboxes = null),
                      a && !o && (n.prefetch.views = null),
                      n
                    );
                  }
                  function Kc (e) {
                    var t = Yc(e),
                      n = t.request,
                      r = t.response,
                      a = !0;
                    Te(oh, Gp), je({ source: oh, serverState: t });
                    var i = $c(e, r);
                    Ws(i),
                      Qs(i),
                      Ai({ request: n, response: i })
                        .then(function (e) {
                          return Qc(e, a);
                        })
                        ['catch'](Wc);
                  }
                  function Xc () {
                    if (!ye()) return Ee(oh, qd), void je({ source: oh, error: qd });
                    var e = nt();
                    if (Jc(e)) Kc(e);
                    else {
                      var t = e[kp],
                        n = e[Tp];
                      if (!t && !n) return Te(oh, Hp), void je({ source: oh, error: Hp });
                      un();
                      var r = {};
                      if (t) {
                        var a = { pageLoad: {} };
                        r.execute = a;
                      }
                      if (n) {
                        var i = { views: [{}] };
                        r.prefetch = i;
                      }
                      var o = e[Jf];
                      Te(oh, Mf, r), je({ source: oh, request: r });
                      var s = { request: r, timeout: o };
                      We() && !Qe()
                        ? Ke()
                            .then(function () {
                              Ui(s).then(Qc)['catch'](Wc);
                            })
                            ['catch'](Wc)
                        : Ui(s).then(Qc)['catch'](Wc);
                    }
                  }
                  function Zc () {
                    var e = {};
                    return (e[Pf] = !0), e;
                  }
                  function eu (e) {
                    var t = {};
                    return (t[Pf] = !1), (t[_f] = e), t;
                  }
                  function tu (e) {
                    return x(e) ? eu(Wd) : e.length > wd ? eu(Qd) : Zc();
                  }
                  function nu (e) {
                    if (!d(e)) return eu(Bd);
                    var t = tu(e[kf]);
                    return t[Pf] ? (u(e[wf]) ? (u(e[_f]) ? Zc() : eu(Kd)) : eu($d)) : t;
                  }
                  function ru (e) {
                    if (!d(e)) return eu(Bd);
                    var t = e.request;
                    if (!d(t)) return eu(Hd);
                    var n = t.execute,
                      r = t.prefetch;
                    return d(n) || d(r) ? Zc() : eu(zd);
                  }
                  function au (e) {
                    if (!d(e)) return eu(Bd);
                    var t = e.request;
                    if (!d(t)) return eu(Hd);
                    var n = t.execute,
                      r = t.prefetch,
                      a = t.notifications;
                    return d(n) || d(r) ? eu(Jd) : gl(a) ? Zc() : eu(Yd);
                  }
                  function iu (e) {
                    if (!d(e)) return eu(Bd);
                    var t = tu(e[kf]);
                    if (!t[Pf]) return t;
                    var n = e[If];
                    return gl(n) ? Zc() : eu(Xd);
                  }
                  function ou (e) {
                    return d(e) ? (d(e.response) ? Zc() : eu(Gd)) : eu(Bd);
                  }
                  function su (e) {
                    if (!d(e)) return eu(Bd);
                    var t = tu(e[kf]);
                    return t[Pf] ? Zc() : t;
                  }
                  function cu (e) {
                    return { action: cd, url: e.content };
                  }
                  function uu (e) {
                    var t = {};
                    return (
                      (t.action = Kl),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function lu (e) {
                    var t = {};
                    return (
                      (t.action = Xl),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function du (e) {
                    var t = {};
                    return (
                      (t.action = md),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function fu (e) {
                    var t = {};
                    return (
                      (t.action = vd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function pu (e) {
                    var t = {};
                    return (
                      (t.action = bd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function mu (e) {
                    var t = {};
                    return (
                      (t.action = dd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function gu (e) {
                    var t = {};
                    return (
                      (t.action = fd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function vu (e) {
                    var t = {};
                    return (
                      (t.action = sd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function hu (e) {
                    var t = p(e.content)[0],
                      n = {};
                    return (
                      (n.action = ed),
                      (n.attribute = t),
                      (n.value = e.content[t]),
                      (n.selector = e.selector),
                      (n.cssSelector = e.cssSelector),
                      n
                    );
                  }
                  function bu (e) {
                    var t = {};
                    return (
                      (t.action = ed),
                      (t.attribute = Dd),
                      (t.value = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function yu (e) {
                    var t = {};
                    return (
                      (t.action = nd),
                      (t.style = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function _u (e) {
                    var t = {};
                    return (
                      (t.action = nd),
                      (t.style = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function Cu (e) {
                    var t = {};
                    return (
                      (t.action = nd),
                      (t.style = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function Su (e) {
                    var t = {};
                    return (
                      (t.action = od),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function Pu (e) {
                    var t = {};
                    return (
                      (t.action = rd),
                      (t.from = e.content.from),
                      (t.to = e.content.to),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function wu (e) {
                    var t = [];
                    return (
                      y(function (e) {
                        switch (e.type) {
                          case $l:
                            t.push(uu(e));
                            break;
                          case Xl:
                            t.push(lu(e));
                            break;
                          case pd:
                            t.push(du(e));
                            break;
                          case gd:
                            t.push(fu(e));
                            break;
                          case hd:
                            t.push(pu(e));
                            break;
                          case dd:
                            t.push(mu(e));
                            break;
                          case fd:
                            t.push(gu(e));
                            break;
                          case sd:
                            t.push(vu(e));
                            break;
                          case ed:
                            t.push(hu(e));
                            break;
                          case td:
                            t.push(bu(e));
                            break;
                          case nd:
                            t.push(yu(e));
                            break;
                          case ad:
                            t.push(_u(e));
                            break;
                          case id:
                            t.push(Cu(e));
                            break;
                          case od:
                            t.push(Su(e));
                            break;
                          case rd:
                            t.push(Pu(e));
                            break;
                          case cd:
                            t.push(cu(e));
                        }
                      }, e),
                      t
                    );
                  }
                  function Eu (e) {
                    if (V(e)) return [];
                    var t = [];
                    return (
                      y(function (e) {
                        e.type === Ad &&
                          (rv(e)
                            ? t.push({
                                action: ud,
                                selector: e.selector,
                                clickTrackId: e.eventToken,
                              })
                            : t.push({ action: ld, clickTrackId: e.eventToken }));
                      }, e),
                      t
                    );
                  }
                  function Tu (e) {
                    if (V(e)) return [];
                    var t = [],
                      n = [],
                      r = [],
                      a = e.options,
                      i = void 0 === a ? [] : a,
                      o = e.metrics,
                      s = void 0 === o ? [] : o;
                    y(function (e) {
                      switch (e.type) {
                        case kd:
                          t.push(e.content);
                          break;
                        case Td:
                          n.push(e.content);
                          break;
                        case cd:
                          r.push(cu(e));
                          break;
                        case jf:
                          r.push.apply(r, wu(e.content));
                      }
                    }, i),
                      V(t) || r.push({ action: Kl, content: t.join('') }),
                      V(n) || r.push({ action: Zl, content: n });
                    var c = Eu(s);
                    return V(c) || r.push.apply(r, c), r;
                  }
                  function ku (e) {
                    var t = e.execute,
                      n = void 0 === t ? {} : t,
                      r = n.pageLoad,
                      a = void 0 === r ? {} : r,
                      i = n.mboxes,
                      o = void 0 === i ? [] : i,
                      s = [];
                    return s.push.apply(s, Tu(a)), s.push.apply(s, h(N(Tu, o))), s;
                  }
                  function Iu (e, t) {
                    var n = ku(t);
                    e[wf](n);
                  }
                  function Vu (e, t) {
                    var n = t[Df] || Sf;
                    e[_f](n, t);
                  }
                  function Du (t) {
                    var e = nu(t),
                      n = e[_f];
                    if (!e[Pf]) return Ee(sh, n), void je({ source: sh, options: t, error: n });
                    if (!ye())
                      return (
                        o(t[_f](Cf, qd)),
                        Ee(sh, qd),
                        void je({ source: sh, options: t, error: qd })
                      );
                    var r = function r (e) {
                        return Iu(t, e);
                      },
                      a = function a (e) {
                        return Vu(t, e);
                      };
                    Te(sh, t),
                      je({ source: sh, options: t }),
                      We() && !Qe()
                        ? Ke().then(function () {
                            qi(t).then(r)['catch'](a);
                          })
                        : qi(t).then(r)['catch'](a);
                  }
                  function xu (e) {
                    var t = ru(e),
                      n = t[_f];
                    return t[Pf]
                      ? ye()
                        ? (Te(ch, e),
                          je({ source: ch, options: e }),
                          !We() || Qe()
                            ? Ui(e)
                            : Ke().then(function () {
                                return Ui(e);
                              }))
                        : (Ee(ch, qd),
                          je({ source: ch, options: e, error: qd }),
                          qe(new Error(qd)))
                      : (Ee(ch, n), je({ source: ch, options: e, error: n }), qe(t));
                  }
                  function ju (e) {
                    var t = Bc(e.selector),
                      n = iu(e),
                      r = n[_f];
                    return n[Pf]
                      ? ye()
                        ? ((e.selector = t), Te(uh, e), je({ source: uh, options: e }), void Gc(e))
                        : (Ee(uh, qd), je({ source: uh, options: e, error: qd }), void Hc(t))
                      : (Ee(uh, e, r), je({ source: uh, options: e, error: r }), void Hc(t));
                  }
                  function Au (e) {
                    var t = Bc(e.selector),
                      n = ou(e),
                      r = n[_f];
                    return n[Pf]
                      ? ye()
                        ? ((e.selector = t), Te(lh, e), je({ source: lh, options: e }), zc(e))
                        : (Ee(lh, qd),
                          je({ source: lh, options: e, error: qd }),
                          Hc(t),
                          qe(new Error(qd)))
                      : (Ee(lh, e, r), je({ source: lh, options: e, error: r }), Hc(t), qe(n));
                  }
                  function Ou (e) {
                    var t = nt()[Yf],
                      n = e.consumerId,
                      r = void 0 === n ? t : n,
                      a = e.request,
                      i = au(e),
                      o = i[_f];
                    if (!i[Pf]) return Ee(dh, o), void je({ source: dh, options: e, error: o });
                    if (!ye()) return Ee(dh, qd), void je({ source: dh, options: e, error: qd });
                    Te(dh, e), je({ source: dh, options: e });
                    var s = ds(r, {}, a.notifications);
                    !We() || Qe() ? vs(s) : Ee(dh, Zp);
                  }
                  function Lu (e, t) {
                    var n = t[kf],
                      r = ll({}, t),
                      a = d(t.params) ? t.params : {};
                    return (
                      (r[xf] = ll({}, ar(n), a)),
                      (r[Jf] = ua(e, t[Jf])),
                      (r[wf] = u(t[wf]) ? t[wf] : R),
                      (r[_f] = u(t[_f]) ? t[_f] : R),
                      r
                    );
                  }
                  function Mu (e) {
                    var t = e[Fl],
                      n = e[Wl];
                    return Al(t) && (Al(n) || O(n));
                  }
                  function Nu (e) {
                    var t = e.mbox,
                      n = d(e.params) ? e.params : {},
                      r = ll({}, ar(t), n),
                      a = Np,
                      i = ps(Zr({}, r), a, []);
                    if (((i.mbox = { name: t }), vs(ds(t, r, [i]))))
                      return Te(gf, e), void e[wf]();
                    Ee(vf, e), e[_f](Sf, vf);
                  }
                  function Ru (e) {
                    if (We() && !Qe()) return Ee(vf, Zp), void e[_f](_f, Zp);
                    Nu(e);
                  }
                  function Fu (e) {
                    return Ru(e), !e.preventDefault;
                  }
                  function qu (e) {
                    var t = e[Wl],
                      n = e[Fl],
                      r = I(wt(t)),
                      a = function a () {
                        return Fu(e);
                      };
                    y(function (e) {
                      return es(n, a, e);
                    }, r);
                  }
                  function Uu (e) {
                    var t = su(e),
                      n = t[_f];
                    if (!t[Pf]) return Ee(fh, n), void je({ source: fh, options: e, error: n });
                    var r = Lu(nt(), e);
                    if (!ye())
                      return (
                        Ee(fh, qd),
                        o(r[_f](Cf, qd)),
                        void je({ source: fh, options: e, error: qd })
                      );
                    Te(fh, r), je({ source: fh, options: r }), Mu(r) ? qu(r) : Ru(r);
                  }
                  function Bu (e) {
                    return (
                      $s(e),
                      tc(e)
                        .then(jc)
                        .then(function (e) {
                          V(e) || ht({ execution: e });
                        })
                        ['catch'](function (e) {
                          Ee(qp, e), bt({ error: e });
                        })
                    );
                  }
                  function Hu () {
                    for (; 0 < mh.length; ) {
                      var e = mh.pop(),
                        t = cs(e.viewName, e);
                      m(t) || Bu(t);
                    }
                  }
                  function Gu () {
                    (vh = gh), Hu();
                  }
                  function zu () {
                    sc(am, Gu), sc(im, Gu), sc(om, Gu);
                  }
                  function Ju (e, t) {
                    var n = {};
                    return (
                      (n.viewName = e),
                      (n.impressionId = G()),
                      (n.page = !0),
                      V(t) || (n.page = !!t.page),
                      n
                    );
                  }
                  function Yu (e) {
                    Lt(e), m(cs(e.viewName, e)) && e.page && Cs(e), mh.push(e), vh === gh && Hu();
                  }
                  function Wu (e, t) {
                    if (!C(e) || x(e))
                      return Ee(ph, Bp, e), void je({ source: ph, view: e, error: Bp });
                    var n = e.toLowerCase(),
                      r = Ju(n, t);
                    Te(ph, n, r), je({ source: ph, view: n, options: r }), Yu(r);
                  }
                  function Qu () {
                    Ee(bh, arguments);
                  }
                  function $u () {
                    Ee(yh, arguments);
                  }
                  function Ku () {
                    Ee(_h, arguments);
                  }
                  function Xu () {
                    Ee(Ch, arguments);
                  }
                  function Zu (e) {
                    var t = function t () {},
                      n = function n () {
                        return Fe();
                      };
                    (e.adobe = e.adobe || {}),
                      (e.adobe.target = {
                        VERSION: '',
                        event: {},
                        getOffer: t,
                        getOffers: n,
                        applyOffer: t,
                        applyOffers: n,
                        sendNotifications: t,
                        trackEvent: t,
                        triggerView: t,
                        registerExtension: t,
                        init: t,
                      }),
                      (e.mboxCreate = t),
                      (e.mboxDefine = t),
                      (e.mboxUpdate = t);
                  }
                  function el (e, t, n) {
                    if (e.adobe && e.adobe.target && 'undefined' != typeof e.adobe.target.getOffer)
                      Ee(Ud);
                    else {
                      K(n);
                      var r = nt(),
                        a = r[Qf];
                      if (
                        ((e.adobe = e.adobe || {}),
                        (e.adobe.target = e.adobe.target || {}),
                        (e.adobe.target.VERSION = a),
                        (e.adobe.target.event = {
                          LIBRARY_LOADED: Im,
                          REQUEST_START: Vm,
                          REQUEST_SUCCEEDED: Dm,
                          REQUEST_FAILED: xm,
                          CONTENT_RENDERING_START: jm,
                          CONTENT_RENDERING_SUCCEEDED: Am,
                          CONTENT_RENDERING_FAILED: Om,
                          CONTENT_RENDERING_NO_OFFERS: Lm,
                          CONTENT_RENDERING_REDIRECT: Mm,
                        }),
                        !r[Bf])
                      )
                        return Zu(e), void Ee(qd);
                      De(),
                        Nt(),
                        zt(e),
                        (e.adobe.target.getOffer = Du),
                        (e.adobe.target.getOffers = xu),
                        (e.adobe.target.applyOffer = ju),
                        (e.adobe.target.applyOffers = Au),
                        (e.adobe.target.sendNotifications = Ou),
                        (e.adobe.target.trackEvent = Uu),
                        (e.adobe.target.triggerView = Wu),
                        (e.adobe.target.registerExtension = Qu),
                        (e.mboxCreate = $u),
                        (e.mboxDefine = Ku),
                        (e.mboxUpdate = Xu),
                        ft();
                    }
                  }
                  var tl,
                    nl,
                    rl,
                    al,
                    il,
                    ol,
                    sl,
                    cl = n('@adobe/reactor-window'),
                    ul = n('@adobe/reactor-document'),
                    ll = r(n('@adobe/reactor-object-assign')),
                    dl = r(n('@adobe/reactor-cookie')),
                    fl = r(n('@adobe/reactor-query-string')),
                    pl = r(n('@adobe/reactor-promise')),
                    ml = r(n('@adobe/reactor-load-script')),
                    gl = Array.isArray,
                    vl = Object.prototype.toString,
                    hl = '[object Function]',
                    bl = function bl (e, t) {
                      return t.forEach(e);
                    },
                    yl = function yl (t, n) {
                      bl(function (e) {
                        return t(n[e], e);
                      }, p(n));
                    },
                    _l = function _l (e, t) {
                      return t.filter(e);
                    },
                    Cl = function Cl (n, e) {
                      var r = {};
                      return (
                        yl(function (e, t) {
                          n(e, t) && (r[t] = e);
                        }, e),
                        r
                      );
                    },
                    Sl = '[object String]',
                    Pl = 9007199254740991,
                    wl = function wl (e, t) {
                      return t.map(e);
                    },
                    El = Object.prototype.hasOwnProperty,
                    Tl = String.prototype.trim,
                    kl = '[object Object]',
                    Il = Function.prototype,
                    Vl = Object.prototype,
                    Dl = Il.toString,
                    xl = Vl.hasOwnProperty,
                    jl = Dl.call(Object),
                    Al = function Al (e) {
                      return !x(e);
                    },
                    Ol = '[object Number]',
                    Ll = function Ll (n, e) {
                      var r = {};
                      return (
                        yl(function (e, t) {
                          r[t] = n(e, t);
                        }, e),
                        r
                      );
                    },
                    Ml = function Ml (e, t, n) {
                      return n.reduce(e, t);
                    },
                    Nl = function Nl (n, e, t) {
                      var r = e;
                      return (
                        yl(function (e, t) {
                          r = n(r, e, t);
                        }, t),
                        r
                      );
                    },
                    Rl = Array.prototype.reverse,
                    Fl = 'type',
                    ql = 'content',
                    Ul = 'height',
                    Bl = 'width',
                    Hl = 'left',
                    Gl = 'top',
                    zl = 'from',
                    Jl = 'to',
                    Yl = 'priority',
                    Wl = 'selector',
                    Ql = 'cssSelector',
                    $l = 'setHtml',
                    Kl = 'setContent',
                    Xl = 'setText',
                    Zl = 'setJson',
                    ed = 'setAttribute',
                    td = 'setImageSource',
                    nd = 'setStyle',
                    rd = 'rearrange',
                    ad = 'resize',
                    id = 'move',
                    od = 'remove',
                    sd = 'customCode',
                    cd = 'redirect',
                    ud = 'trackClick',
                    ld = 'signalClick',
                    dd = 'insertBefore',
                    fd = 'insertAfter',
                    pd = 'appendHtml',
                    md = 'appendContent',
                    gd = 'prependHtml',
                    vd = 'prependContent',
                    hd = 'replaceHtml',
                    bd = 'replaceContent',
                    yd = 'mboxDebug',
                    _d = 'mboxDisable',
                    Cd = 'mboxEdit',
                    Sd = 'at_check',
                    Pd = 'true',
                    wd = 250,
                    Ed = 'data-at-src',
                    Td = 'json',
                    kd = 'html',
                    Id = 'dynamic',
                    Vd = 'script',
                    Dd = 'src',
                    xd = 'id',
                    jd = 'class',
                    Ad = 'click',
                    Od = 'head',
                    Ld = 'script',
                    Md = 'style',
                    Nd = 'link',
                    Rd = 'img',
                    Fd = 'div',
                    qd =
                      'Adobe Target content delivery is disabled. Ensure that you can save cookies to your current domain, there is no "mboxDisable" cookie and there is no "mboxDisable" parameter in query string.',
                    Ud = 'Adobe Target has already been initialized.',
                    Bd = 'options argument is required',
                    Hd = 'request option is required',
                    Gd = 'response option is required',
                    zd = 'execute or prefetch is required',
                    Jd = 'execute or prefetch is not allowed',
                    Yd = 'notifications are required',
                    Wd = 'mbox option is required',
                    Qd = 'mbox option is too long',
                    $d = 'success option is required',
                    Kd = 'error option is required',
                    Xd = 'offer option is required',
                    Zd = 'Unexpected error',
                    ef = 'request failed',
                    tf = 'request succeeded',
                    nf = 'Action rendered successfully',
                    rf = 'Rendering action',
                    af = 'Action has no content',
                    of = 'Action has no attributes',
                    sf = 'Action has no CSS properties',
                    cf = 'Action has no height or width',
                    uf = 'Action has no left, top or position',
                    lf = 'Action has no from or to',
                    df = 'Action has no url',
                    ff = 'Action has no image url',
                    pf = 'Rearrange elements are missing',
                    mf = 'Loading image',
                    gf = 'Track event request succeeded',
                    vf = 'Track event request failed',
                    hf = 'No actions to be rendered',
                    bf = 'Redirect action',
                    yf = 'Script load',
                    _f = 'error',
                    Cf = 'warning',
                    Sf = 'unknown',
                    Pf = 'valid',
                    wf = 'success',
                    Ef = 'render',
                    Tf = 'metric',
                    kf = 'mbox',
                    If = 'offer',
                    Vf = 'name',
                    Df = 'status',
                    xf = 'params',
                    jf = 'actions',
                    Af = 'responseTokens',
                    Of = 'data',
                    Lf = 'response',
                    Mf = 'request',
                    Nf = 'provider',
                    Rf = 'pageLoad',
                    Ff = 'at-flicker-control',
                    qf = 'at-element-marker',
                    Uf = 'at-element-click-tracking',
                    Bf = 'enabled',
                    Hf = 'clientCode',
                    Gf = 'imsOrgId',
                    zf = 'serverDomain',
                    Jf = 'timeout',
                    Yf = 'globalMboxName',
                    Wf = 'globalMboxAutoCreate',
                    Qf = 'version',
                    $f = 'defaultContentHiddenStyle',
                    Kf = 'bodyHiddenStyle',
                    Xf = 'bodyHidingEnabled',
                    Zf = 'deviceIdLifetime',
                    ep = 'sessionIdLifetime',
                    tp = 'selectorsPollingTimeout',
                    np = 'visitorApiTimeout',
                    rp = 'overrideMboxEdgeServer',
                    ap = 'overrideMboxEdgeServerTimeout',
                    ip = 'optoutEnabled',
                    op = 'secureOnly',
                    sp = 'supplementalDataIdParamTimeout',
                    cp = 'authoringScriptUrl',
                    up = 'scheme',
                    lp = 'cookieDomain',
                    dp = 'mboxParams',
                    fp = 'globalMboxParams',
                    pp = 'mboxSession',
                    mp = 'PC',
                    gp = 'mboxEdgeCluster',
                    vp = 'session',
                    hp = 'Traces',
                    bp = 'settings',
                    yp = 'client' + hp,
                    _p = 'server' + hp,
                    Cp = '___target_traces',
                    Sp = 'targetGlobalSettings',
                    Pp = 'dataProvider',
                    wp = Pp + 's',
                    Ep = 'endpoint',
                    Tp = 'viewsEnabled',
                    kp = 'pageLoadEnabled',
                    Ip = 'authState',
                    Vp = 'authenticatedState',
                    Dp = 'integrationCode',
                    xp = 'page',
                    jp = 'view',
                    Ap = 'views',
                    Op = 'options',
                    Lp = 'metrics',
                    Mp = 'viewName',
                    Np = 'display',
                    Rp = 'Content-Type',
                    Fp = 'text/plain',
                    qp = 'View rendering failed',
                    Up = 'View delivery error',
                    Bp = 'View name should be a non-empty string',
                    Hp = 'Page load disabled',
                    Gp = 'Using server state',
                    zp = 'adobe',
                    Jp = 'optIn',
                    Yp = 'isApproved',
                    Wp = 'fetchPermissions',
                    Qp = 'Categories',
                    $p = 'TARGET',
                    Kp = 'ANALYTICS',
                    Xp = 'optinEnabled',
                    Zp = 'Adobe Target is not opted in',
                    em = 'analyticsLogging',
                    tm = 'serverState',
                    nm = 'cspScriptNonce',
                    rm = 'cspStyleNonce',
                    am = 'cache-updated-event',
                    im = 'no-offers-event',
                    om = 'redirect-offer-event',
                    sm = 'file:',
                    cm = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
                    um = /^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i,
                    lm = {},
                    dm = [
                      Bf,
                      Hf,
                      Gf,
                      zf,
                      lp,
                      Jf,
                      dp,
                      fp,
                      $f,
                      'defaultContentVisibleStyle',
                      Zf,
                      Kf,
                      Xf,
                      tp,
                      np,
                      rp,
                      ap,
                      ip,
                      Xp,
                      op,
                      sp,
                      cp,
                      'urlSizeLimit',
                      Ep,
                      kp,
                      Tp,
                      em,
                      tm,
                      nm,
                      rm,
                      Yf,
                    ],
                    fm = function Ph (e, t) {
                      t = t || {};
                      for (
                        var r = {
                            key: [
                              'source',
                              'protocol',
                              'authority',
                              'userInfo',
                              'user',
                              'password',
                              'host',
                              'port',
                              'relative',
                              'path',
                              'directory',
                              'file',
                              'query',
                              'anchor',
                            ],
                            q: { name: 'queryKey', parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
                            parser: {
                              strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                              loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            },
                          },
                          n = r.parser[t.strictMode ? 'strict' : 'loose'].exec(e),
                          a = {},
                          i = 14;
                        i--;

                      )
                        a[r.key[i]] = n[i] || '';
                      return (
                        (a[r.q.name] = {}),
                        a[r.key[12]].replace(r.q.parser, function (e, t, n) {
                          t && (a[r.q.name][t] = n);
                        }),
                        a
                      );
                    },
                    pm = fl.parse,
                    mm = fl.stringify,
                    gm = ul.createElement('a'),
                    vm = {},
                    hm = dl.get,
                    bm = dl.set,
                    ym = dl.remove,
                    _m = 'mbox',
                    Cm = 'AT:',
                    Sm = '1',
                    Pm =
                      ((tl = window),
                      (function (d) {
                        function f (e) {
                          return e._zid || (e._zid = t++);
                        }
                        function o (e, t, n, r) {
                          if ((t = p(t)).ns) var a = i(t.ns);
                          return (P[f(e)] || []).filter(function (e) {
                            return (
                              e &&
                              (!t.e || e.e == t.e) &&
                              (!t.ns || a.test(e.ns)) &&
                              (!n || f(e.fn) === f(n)) &&
                              (!r || e.sel == r)
                            );
                          });
                        }
                        function p (e) {
                          var t = ('' + e).split('.');
                          return { e: t[0], ns: t.slice(1).sort().join(' ') };
                        }
                        function i (e) {
                          return new RegExp('(?:^| )' + e.replace(' ', ' .* ?') + '(?: |$)');
                        }
                        function m (e, t) {
                          return (e.del && !n && e.e in r) || !!t;
                        }
                        function g (e) {
                          return w[e] || (n && r[e]) || e;
                        }
                        function v (i, e, t, o, s, c, u) {
                          var n = f(i),
                            l = P[n] || (P[n] = []);
                          e.split(/\s/).forEach(function (e) {
                            if ('ready' == e) return d(document).ready(t);
                            var n = p(e);
                            (n.fn = t),
                              (n.sel = s),
                              n.e in w &&
                                (t = function a (e) {
                                  var t = e.relatedTarget;
                                  if (!t || (t !== this && !d.contains(this, t)))
                                    return n.fn.apply(this, arguments);
                                });
                            var r = (n.del = c) || t;
                            (n.proxy = function (e) {
                              if (!(e = b(e)).isImmediatePropagationStopped()) {
                                e.data = o;
                                var t = r.apply(i, e._args == _ ? [e] : [e].concat(e._args));
                                return !1 === t && (e.preventDefault(), e.stopPropagation()), t;
                              }
                            }),
                              (n.i = l.length),
                              l.push(n),
                              'addEventListener' in i &&
                                i.addEventListener(g(n.e), n.proxy, m(n, u));
                          });
                        }
                        function h (t, e, n, r, a) {
                          var i = f(t);
                          (e || '').split(/\s/).forEach(function (e) {
                            o(t, e, n, r).forEach(function (e) {
                              delete P[i][e.i],
                                'removeEventListener' in t &&
                                  t.removeEventListener(g(e.e), e.proxy, m(e, a));
                            });
                          });
                        }
                        function b (r, a) {
                          if (a || !r.isDefaultPrevented) {
                            a || (a = r),
                              d.each(l, function (e, t) {
                                var n = a[e];
                                (r[e] = function () {
                                  return (this[t] = c), n && n.apply(a, arguments);
                                }),
                                  (r[t] = E);
                              });
                            try {
                              r.timeStamp || (r.timeStamp = new Date().getTime());
                            } catch (e) {}
                            (a.defaultPrevented !== _
                              ? a.defaultPrevented
                              : 'returnValue' in a
                              ? !1 === a.returnValue
                              : a.getPreventDefault && a.getPreventDefault()) &&
                              (r.isDefaultPrevented = c);
                          }
                          return r;
                        }
                        function y (e) {
                          var t,
                            n = { originalEvent: e };
                          for (t in e) u.test(t) || e[t] === _ || (n[t] = e[t]);
                          return b(n, e);
                        }
                        var _,
                          t = 1,
                          C = Array.prototype.slice,
                          a = d.isFunction,
                          S = function S (e) {
                            return 'string' == typeof e;
                          },
                          P = {},
                          s = {},
                          n = 'onfocusin' in tl,
                          r = { focus: 'focusin', blur: 'focusout' },
                          w = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
                        (s.click = s.mousedown = s.mouseup = s.mousemove = 'MouseEvents'),
                          (d.event = { add: v, remove: h }),
                          (d.proxy = function (e, t) {
                            var n = 2 in arguments && C.call(arguments, 2);
                            if (a(e)) {
                              var r = function r () {
                                return e.apply(t, n ? n.concat(C.call(arguments)) : arguments);
                              };
                              return (r._zid = f(e)), r;
                            }
                            if (S(t))
                              return n
                                ? (n.unshift(e[t], e), d.proxy.apply(null, n))
                                : d.proxy(e[t], e);
                            throw new TypeError('expected function');
                          }),
                          (d.fn.bind = function (e, t, n) {
                            return this.on(e, t, n);
                          }),
                          (d.fn.unbind = function (e, t) {
                            return this.off(e, t);
                          }),
                          (d.fn.one = function (e, t, n, r) {
                            return this.on(e, t, n, r, 1);
                          });
                        var c = function c () {
                            return !0;
                          },
                          E = function E () {
                            return !1;
                          },
                          u = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                          l = {
                            preventDefault: 'isDefaultPrevented',
                            stopImmediatePropagation: 'isImmediatePropagationStopped',
                            stopPropagation: 'isPropagationStopped',
                          };
                        (d.fn.delegate = function (e, t, n) {
                          return this.on(t, e, n);
                        }),
                          (d.fn.undelegate = function (e, t, n) {
                            return this.off(t, e, n);
                          }),
                          (d.fn.live = function (e, t) {
                            return d(document.body).delegate(this.selector, e, t), this;
                          }),
                          (d.fn.die = function (e, t) {
                            return d(document.body).undelegate(this.selector, e, t), this;
                          }),
                          (d.fn.on = function (n, i, o, s, c) {
                            var u,
                              l,
                              r = this;
                            return n && !S(n)
                              ? (d.each(n, function (e, t) {
                                  r.on(e, i, o, t, c);
                                }),
                                r)
                              : (S(i) || a(s) || !1 === s || ((s = o), (o = i), (i = _)),
                                (s !== _ && !1 !== o) || ((s = o), (o = _)),
                                !1 === s && (s = E),
                                r.each(function (e, r) {
                                  c &&
                                    (u = function t (e) {
                                      return h(r, e.type, s), s.apply(this, arguments);
                                    }),
                                    i &&
                                      (l = function a (e) {
                                        var t,
                                          n = d(e.target).closest(i, r).get(0);
                                        if (n && n !== r)
                                          return (
                                            (t = d.extend(y(e), {
                                              currentTarget: n,
                                              liveFired: r,
                                            })),
                                            (u || s).apply(n, [t].concat(C.call(arguments, 1)))
                                          );
                                      }),
                                    v(r, n, s, o, i, l || u);
                                }));
                          }),
                          (d.fn.off = function (e, n, t) {
                            var r = this;
                            return e && !S(e)
                              ? (d.each(e, function (e, t) {
                                  r.off(e, n, t);
                                }),
                                r)
                              : (S(n) || a(t) || !1 === t || ((t = n), (n = _)),
                                !1 === t && (t = E),
                                r.each(function () {
                                  h(this, e, t, n);
                                }));
                          }),
                          (d.fn.trigger = function (e, t) {
                            return (
                              ((e = S(e) || d.isPlainObject(e) ? d.Event(e) : b(e))._args = t),
                              this.each(function () {
                                e.type in r && 'function' == typeof this[e.type]
                                  ? this[e.type]()
                                  : 'dispatchEvent' in this
                                  ? this.dispatchEvent(e)
                                  : d(this).triggerHandler(e, t);
                              })
                            );
                          }),
                          (d.fn.triggerHandler = function (n, r) {
                            var a, i;
                            return (
                              this.each(function (e, t) {
                                ((a = y(S(n) ? d.Event(n) : n))._args = r),
                                  (a.target = t),
                                  d.each(o(t, n.type || n), function (e, t) {
                                    if (((i = t.proxy(a)), a.isImmediatePropagationStopped()))
                                      return !1;
                                  });
                              }),
                              i
                            );
                          }),
                          'focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'
                            .split(' ')
                            .forEach(function (t) {
                              d.fn[t] = function (e) {
                                return 0 in arguments ? this.bind(t, e) : this.trigger(t);
                              };
                            }),
                          (d.Event = function (e, t) {
                            S(e) || (e = (t = e).type);
                            var n = document.createEvent(s[e] || 'Events'),
                              r = !0;
                            if (t) for (var a in t) 'bubbles' == a ? (r = !!t[a]) : (n[a] = t[a]);
                            return n.initEvent(e, r, !0), b(n);
                          });
                      })(
                        (sl = (function () {
                          function o (e) {
                            return null == e ? String(e) : Q[$.call(e)] || 'object';
                          }
                          function s (e) {
                            return 'function' == o(e);
                          }
                          function i (e) {
                            return null != e && e == e.window;
                          }
                          function c (e) {
                            return null != e && e.nodeType == e.DOCUMENT_NODE;
                          }
                          function r (e) {
                            return 'object' == o(e);
                          }
                          function u (e) {
                            return r(e) && !i(e) && Object.getPrototypeOf(e) == Object.prototype;
                          }
                          function l (e) {
                            var t = !!e && 'length' in e && e.length,
                              n = T.type(e);
                            return (
                              'function' != n &&
                              !i(e) &&
                              ('array' == n ||
                                0 === t ||
                                ('number' == typeof t && 0 < t && t - 1 in e))
                            );
                          }
                          function a (e) {
                            return j.call(e, function (e) {
                              return null != e;
                            });
                          }
                          function d (e) {
                            return 0 < e.length ? T.fn.concat.apply([], e) : e;
                          }
                          function f (e) {
                            return e
                              .replace(/::/g, '/')
                              .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
                              .replace(/([a-z\d])([A-Z])/g, '$1_$2')
                              .replace(/_/g, '-')
                              .toLowerCase();
                          }
                          function n (e) {
                            return e in t ? t[e] : (t[e] = new RegExp('(^|\\s)' + e + '(\\s|$)'));
                          }
                          function p (e, t) {
                            return 'number' != typeof t || M[f(e)] ? t : t + 'px';
                          }
                          function e (e) {
                            var t, n;
                            return (
                              L[e] ||
                                ((t = O.createElement(e)),
                                O.body.appendChild(t),
                                (n = getComputedStyle(t, '').getPropertyValue('display')),
                                t.parentNode.removeChild(t),
                                'none' == n && (n = 'block'),
                                (L[e] = n)),
                              L[e]
                            );
                          }
                          function m (e) {
                            return 'children' in e
                              ? A.call(e.children)
                              : T.map(e.childNodes, function (e) {
                                  if (1 == e.nodeType) return e;
                                });
                          }
                          function g (e, t) {
                            var n,
                              r = e ? e.length : 0;
                            for (n = 0; n < r; n++) this[n] = e[n];
                            (this.length = r), (this.selector = t || '');
                          }
                          function v (e, t, n) {
                            for (E in t)
                              n && (u(t[E]) || ee(t[E]))
                                ? (u(t[E]) && !u(e[E]) && (e[E] = {}),
                                  ee(t[E]) && !ee(e[E]) && (e[E] = []),
                                  v(e[E], t[E], n))
                                : t[E] !== w && (e[E] = t[E]);
                          }
                          function h (e, t) {
                            return null == t ? T(e) : T(e).filter(t);
                          }
                          function b (e, t, n, r) {
                            return s(t) ? t.call(e, n, r) : t;
                          }
                          function y (e, t, n) {
                            null == n ? e.removeAttribute(t) : e.setAttribute(t, n);
                          }
                          function _ (e, t) {
                            var n = e.className || '',
                              r = n && n.baseVal !== w;
                            if (t === w) return r ? n.baseVal : n;
                            r ? (n.baseVal = t) : (e.className = t);
                          }
                          function C (e) {
                            try {
                              return e
                                ? 'true' == e ||
                                    ('false' != e &&
                                      ('null' == e
                                        ? null
                                        : +e + '' == e
                                        ? +e
                                        : /^[\[\{]/.test(e)
                                        ? T.parseJSON(e)
                                        : e))
                                : e;
                            } catch (t) {
                              return e;
                            }
                          }
                          function S (e, t) {
                            t(e);
                            for (var n = 0, r = e.childNodes.length; n < r; n++)
                              S(e.childNodes[n], t);
                          }
                          function P (e, t, n) {
                            var r = e.getElementsByTagName('script')[0];
                            if (r) {
                              var a = r.parentNode;
                              if (a) {
                                var i = e.createElement('script');
                                (i.innerHTML = t),
                                  Al(n) && i.setAttribute('nonce', n),
                                  a.appendChild(i),
                                  a.removeChild(i);
                              }
                            }
                          }
                          var w,
                            E,
                            T,
                            k,
                            I,
                            V,
                            D = [],
                            x = D.concat,
                            j = D.filter,
                            A = D.slice,
                            O = tl.document,
                            L = {},
                            t = {},
                            M = {
                              'column-count': 1,
                              columns: 1,
                              'font-weight': 1,
                              'line-height': 1,
                              opacity: 1,
                              'z-index': 1,
                              zoom: 1,
                            },
                            N = /^\s*<(\w+|!)[^>]*>/,
                            R = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                            F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                            q = /^(?:body|html)$/i,
                            U = /([A-Z])/g,
                            B = [
                              'val',
                              'css',
                              'html',
                              'text',
                              'data',
                              'width',
                              'height',
                              'offset',
                            ],
                            H = ['after', 'prepend', 'before', 'append'],
                            G = O.createElement('table'),
                            z = O.createElement('tr'),
                            J = {
                              tr: O.createElement('tbody'),
                              tbody: G,
                              thead: G,
                              tfoot: G,
                              td: z,
                              th: z,
                              '*': O.createElement('div'),
                            },
                            Y = /complete|loaded|interactive/,
                            W = /^[\w-]*$/,
                            Q = {},
                            $ = Q.toString,
                            K = {},
                            X = O.createElement('div'),
                            Z = {
                              tabindex: 'tabIndex',
                              readonly: 'readOnly',
                              for: 'htmlFor',
                              class: 'className',
                              maxlength: 'maxLength',
                              cellspacing: 'cellSpacing',
                              cellpadding: 'cellPadding',
                              rowspan: 'rowSpan',
                              colspan: 'colSpan',
                              usemap: 'useMap',
                              frameborder: 'frameBorder',
                              contenteditable: 'contentEditable',
                            },
                            ee =
                              Array.isArray ||
                              function (e) {
                                return e instanceof Array;
                              };
                          return (
                            (K.matches = function (e, t) {
                              if (!t || !e || 1 !== e.nodeType) return !1;
                              var n =
                                e.matches ||
                                e.webkitMatchesSelector ||
                                e.mozMatchesSelector ||
                                e.oMatchesSelector ||
                                e.matchesSelector;
                              if (n) return n.call(e, t);
                              var r,
                                a = e.parentNode,
                                i = !a;
                              return (
                                i && (a = X).appendChild(e),
                                (r = ~K.qsa(a, t).indexOf(e)),
                                i && X.removeChild(e),
                                r
                              );
                            }),
                            (I = function I (e) {
                              return e.replace(/-+(.)?/g, function (e, t) {
                                return t ? t.toUpperCase() : '';
                              });
                            }),
                            (V = function V (n) {
                              return j.call(n, function (e, t) {
                                return n.indexOf(e) == t;
                              });
                            }),
                            (K.fragment = function (e, t, n) {
                              var r, a, i;
                              return (
                                R.test(e) && (r = T(O.createElement(RegExp.$1))),
                                r ||
                                  (e.replace && (e = e.replace(F, '<$1></$2>')),
                                  t === w && (t = N.test(e) && RegExp.$1),
                                  t in J || (t = '*'),
                                  ((i = J[t]).innerHTML = '' + e),
                                  (r = T.each(A.call(i.childNodes), function () {
                                    i.removeChild(this);
                                  }))),
                                u(n) &&
                                  ((a = T(r)),
                                  T.each(n, function (e, t) {
                                    -1 < B.indexOf(e) ? a[e](t) : a.attr(e, t);
                                  })),
                                r
                              );
                            }),
                            (K.Z = function (e, t) {
                              return new g(e, t);
                            }),
                            (K.isZ = function (e) {
                              return e instanceof K.Z;
                            }),
                            (K.init = function (e, t) {
                              var n;
                              if (!e) return K.Z();
                              if ('string' == typeof e)
                                if ('<' == (e = e.trim())[0] && N.test(e))
                                  (n = K.fragment(e, RegExp.$1, t)), (e = null);
                                else {
                                  if (t !== w) return T(t).find(e);
                                  n = K.qsa(O, e);
                                }
                              else {
                                if (s(e)) return T(O).ready(e);
                                if (K.isZ(e)) return e;
                                if (ee(e)) n = a(e);
                                else if (r(e)) (n = [e]), (e = null);
                                else if (N.test(e))
                                  (n = K.fragment(e.trim(), RegExp.$1, t)), (e = null);
                                else {
                                  if (t !== w) return T(t).find(e);
                                  n = K.qsa(O, e);
                                }
                              }
                              return K.Z(n, e);
                            }),
                            ((T = function T (e, t) {
                              return K.init(e, t);
                            }).extend = function (t) {
                              var n,
                                e = A.call(arguments, 1);
                              return (
                                'boolean' == typeof t && ((n = t), (t = e.shift())),
                                e.forEach(function (e) {
                                  v(t, e, n);
                                }),
                                t
                              );
                            }),
                            (K.qsa = function (e, t) {
                              var n,
                                r = '#' == t[0],
                                a = !r && '.' == t[0],
                                i = r || a ? t.slice(1) : t,
                                o = W.test(i);
                              return e.getElementById && o && r
                                ? (n = e.getElementById(i))
                                  ? [n]
                                  : []
                                : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType
                                ? []
                                : A.call(
                                    o && !r && e.getElementsByClassName
                                      ? a
                                        ? e.getElementsByClassName(i)
                                        : e.getElementsByTagName(t)
                                      : e.querySelectorAll(t)
                                  );
                            }),
                            (T.contains = O.documentElement.contains
                              ? function (e, t) {
                                  return e !== t && e.contains(t);
                                }
                              : function (e, t) {
                                  for (; t && (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                                }),
                            (T.type = o),
                            (T.isFunction = s),
                            (T.isWindow = i),
                            (T.isArray = ee),
                            (T.isPlainObject = u),
                            (T.isEmptyObject = function (e) {
                              var t;
                              for (t in e) return !1;
                              return !0;
                            }),
                            (T.isNumeric = function (e) {
                              var t = Number(e),
                                n = tt(e);
                              return (
                                (null != e &&
                                  'boolean' != n &&
                                  ('string' != n || e.length) &&
                                  !isNaN(t) &&
                                  isFinite(t)) ||
                                !1
                              );
                            }),
                            (T.inArray = function (e, t, n) {
                              return D.indexOf.call(t, e, n);
                            }),
                            (T.camelCase = I),
                            (T.trim = function (e) {
                              return null == e ? '' : String.prototype.trim.call(e);
                            }),
                            (T.uuid = 0),
                            (T.support = {}),
                            (T.expr = {}),
                            (T.noop = function () {}),
                            (T.map = function (e, t) {
                              var n,
                                r,
                                a,
                                i = [];
                              if (l(e))
                                for (r = 0; r < e.length; r++)
                                  null != (n = t(e[r], r)) && i.push(n);
                              else for (a in e) null != (n = t(e[a], a)) && i.push(n);
                              return d(i);
                            }),
                            (T.each = function (e, t) {
                              var n, r;
                              if (l(e)) {
                                for (n = 0; n < e.length; n++)
                                  if (!1 === t.call(e[n], n, e[n])) return e;
                              } else for (r in e) if (!1 === t.call(e[r], r, e[r])) return e;
                              return e;
                            }),
                            (T.grep = function (e, t) {
                              return j.call(e, t);
                            }),
                            tl.JSON && (T.parseJSON = JSON.parse),
                            T.each(
                              'Boolean Number String Function Array Date RegExp Object Error'.split(
                                ' '
                              ),
                              function (e, t) {
                                Q['[object ' + t + ']'] = t.toLowerCase();
                              }
                            ),
                            (T.fn = {
                              constructor: K.Z,
                              length: 0,
                              forEach: D.forEach,
                              reduce: D.reduce,
                              push: D.push,
                              sort: D.sort,
                              splice: D.splice,
                              indexOf: D.indexOf,
                              concat: function te () {
                                var e,
                                  t,
                                  n = [];
                                for (e = 0; e < arguments.length; e++)
                                  (t = arguments[e]), (n[e] = K.isZ(t) ? t.toArray() : t);
                                return x.apply(K.isZ(this) ? this.toArray() : this, n);
                              },
                              map: function ne (n) {
                                return T(
                                  T.map(this, function (e, t) {
                                    return n.call(e, t, e);
                                  })
                                );
                              },
                              slice: function re () {
                                return T(A.apply(this, arguments));
                              },
                              ready: function ae (e) {
                                return (
                                  Y.test(O.readyState) && O.body
                                    ? e(T)
                                    : O.addEventListener(
                                        'DOMContentLoaded',
                                        function () {
                                          e(T);
                                        },
                                        !1
                                      ),
                                  this
                                );
                              },
                              get: function ie (e) {
                                return e === w ? A.call(this) : this[0 <= e ? e : e + this.length];
                              },
                              toArray: function oe () {
                                return this.get();
                              },
                              size: function se () {
                                return this.length;
                              },
                              remove: function ce () {
                                return this.each(function () {
                                  null != this.parentNode && this.parentNode.removeChild(this);
                                });
                              },
                              each: function ue (e) {
                                for (
                                  var t, n = this.length, r = 0;
                                  r < n && ((t = this[r]), !1 !== e.call(t, r, t));

                                )
                                  r++;
                                return this;
                              },
                              filter: function le (t) {
                                return s(t)
                                  ? this.not(this.not(t))
                                  : T(
                                      j.call(this, function (e) {
                                        return K.matches(e, t);
                                      })
                                    );
                              },
                              add: function de (e, t) {
                                return T(V(this.concat(T(e, t))));
                              },
                              is: function fe (e) {
                                return 0 < this.length && K.matches(this[0], e);
                              },
                              not: function pe (t) {
                                var n = [];
                                if (s(t) && t.call !== w)
                                  this.each(function (e) {
                                    t.call(this, e) || n.push(this);
                                  });
                                else {
                                  var r =
                                    'string' == typeof t
                                      ? this.filter(t)
                                      : l(t) && s(t.item)
                                      ? A.call(t)
                                      : T(t);
                                  this.forEach(function (e) {
                                    r.indexOf(e) < 0 && n.push(e);
                                  });
                                }
                                return T(n);
                              },
                              has: function me (e) {
                                return this.filter(function () {
                                  return r(e) ? T.contains(this, e) : T(this).find(e).size();
                                });
                              },
                              eq: function ge (e) {
                                return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
                              },
                              first: function ve () {
                                var e = this[0];
                                return e && !r(e) ? e : T(e);
                              },
                              last: function he () {
                                var e = this[this.length - 1];
                                return e && !r(e) ? e : T(e);
                              },
                              find: function be (e) {
                                var n = this;
                                return e
                                  ? 'object' == tt(e)
                                    ? T(e).filter(function () {
                                        var t = this;
                                        return D.some.call(n, function (e) {
                                          return T.contains(e, t);
                                        });
                                      })
                                    : 1 == this.length
                                    ? T(K.qsa(this[0], e))
                                    : this.map(function () {
                                        return K.qsa(this, e);
                                      })
                                  : T();
                              },
                              closest: function ye (n, r) {
                                var a = [],
                                  i = 'object' == tt(n) && T(n);
                                return (
                                  this.each(function (e, t) {
                                    for (; t && !(i ? 0 <= i.indexOf(t) : K.matches(t, n)); )
                                      t = t !== r && !c(t) && t.parentNode;
                                    t && a.indexOf(t) < 0 && a.push(t);
                                  }),
                                  T(a)
                                );
                              },
                              parents: function _e (e) {
                                for (var t = [], n = this; 0 < n.length; )
                                  n = T.map(n, function (e) {
                                    if ((e = e.parentNode) && !c(e) && t.indexOf(e) < 0)
                                      return t.push(e), e;
                                  });
                                return h(t, e);
                              },
                              parent: function Ce (e) {
                                return h(V(this.pluck('parentNode')), e);
                              },
                              children: function Se (e) {
                                return h(
                                  this.map(function () {
                                    return m(this);
                                  }),
                                  e
                                );
                              },
                              contents: function Pe () {
                                return this.map(function () {
                                  return this.contentDocument || A.call(this.childNodes);
                                });
                              },
                              siblings: function we (e) {
                                return h(
                                  this.map(function (e, t) {
                                    return j.call(m(t.parentNode), function (e) {
                                      return e !== t;
                                    });
                                  }),
                                  e
                                );
                              },
                              empty: function Ee () {
                                return this.each(function () {
                                  this.innerHTML = '';
                                });
                              },
                              pluck: function Te (t) {
                                return T.map(this, function (e) {
                                  return e[t];
                                });
                              },
                              show: function ke () {
                                return this.each(function () {
                                  'none' == this.style.display && (this.style.display = ''),
                                    'none' ==
                                      getComputedStyle(this, '').getPropertyValue('display') &&
                                      (this.style.display = e(this.nodeName));
                                });
                              },
                              replaceWith: function Ie (e) {
                                return this.before(e).remove();
                              },
                              wrap: function Ve (t) {
                                var n = s(t);
                                if (this[0] && !n)
                                  var r = T(t).get(0),
                                    a = r.parentNode || 1 < this.length;
                                return this.each(function (e) {
                                  T(this).wrapAll(n ? t.call(this, e) : a ? r.cloneNode(!0) : r);
                                });
                              },
                              wrapAll: function De (e) {
                                if (this[0]) {
                                  var t;
                                  for (T(this[0]).before((e = T(e))); (t = e.children()).length; )
                                    e = t.first();
                                  T(e).append(this);
                                }
                                return this;
                              },
                              wrapInner: function xe (a) {
                                var i = s(a);
                                return this.each(function (e) {
                                  var t = T(this),
                                    n = t.contents(),
                                    r = i ? a.call(this, e) : a;
                                  n.length ? n.wrapAll(r) : t.append(r);
                                });
                              },
                              unwrap: function je () {
                                return (
                                  this.parent().each(function () {
                                    T(this).replaceWith(T(this).children());
                                  }),
                                  this
                                );
                              },
                              clone: function Ae () {
                                return this.map(function () {
                                  return this.cloneNode(!0);
                                });
                              },
                              hide: function Oe () {
                                return this.css('display', 'none');
                              },
                              toggle: function Le (t) {
                                return this.each(function () {
                                  var e = T(this);
                                  (t === w ? 'none' == e.css('display') : t) ? e.show() : e.hide();
                                });
                              },
                              prev: function Me (e) {
                                return T(this.pluck('previousElementSibling')).filter(e || '*');
                              },
                              next: function Ne (e) {
                                return T(this.pluck('nextElementSibling')).filter(e || '*');
                              },
                              html: function Re (n) {
                                return 0 in arguments
                                  ? this.each(function (e) {
                                      var t = this.innerHTML;
                                      T(this).empty().append(b(this, n, e, t));
                                    })
                                  : 0 in this
                                  ? this[0].innerHTML
                                  : null;
                              },
                              text: function Fe (n) {
                                return 0 in arguments
                                  ? this.each(function (e) {
                                      var t = b(this, n, e, this.textContent);
                                      this.textContent = null == t ? '' : '' + t;
                                    })
                                  : 0 in this
                                  ? this.pluck('textContent').join('')
                                  : null;
                              },
                              attr: function qe (t, n) {
                                var e;
                                return 'string' != typeof t || 1 in arguments
                                  ? this.each(function (e) {
                                      if (1 === this.nodeType)
                                        if (r(t)) for (E in t) y(this, E, t[E]);
                                        else y(this, t, b(this, n, e, this.getAttribute(t)));
                                    })
                                  : 0 in this &&
                                    1 == this[0].nodeType &&
                                    null != (e = this[0].getAttribute(t))
                                  ? e
                                  : w;
                              },
                              removeAttr: function Ue (e) {
                                return this.each(function () {
                                  1 === this.nodeType &&
                                    e.split(' ').forEach(function (e) {
                                      y(this, e);
                                    }, this);
                                });
                              },
                              prop: function Be (t, n) {
                                return (
                                  (t = Z[t] || t),
                                  1 in arguments
                                    ? this.each(function (e) {
                                        this[t] = b(this, n, e, this[t]);
                                      })
                                    : this[0] && this[0][t]
                                );
                              },
                              removeProp: function He (e) {
                                return (
                                  (e = Z[e] || e),
                                  this.each(function () {
                                    delete this[e];
                                  })
                                );
                              },
                              data: function e (t, n) {
                                var r = 'data-' + t.replace(U, '-$1').toLowerCase(),
                                  e = 1 in arguments ? this.attr(r, n) : this.attr(r);
                                return null !== e ? C(e) : w;
                              },
                              val: function Ge (t) {
                                return 0 in arguments
                                  ? (null == t && (t = ''),
                                    this.each(function (e) {
                                      this.value = b(this, t, e, this.value);
                                    }))
                                  : this[0] &&
                                      (this[0].multiple
                                        ? T(this[0])
                                            .find('option')
                                            .filter(function () {
                                              return this.selected;
                                            })
                                            .pluck('value')
                                        : this[0].value);
                              },
                              offset: function ze (i) {
                                if (i)
                                  return this.each(function (e) {
                                    var t = T(this),
                                      n = b(this, i, e, t.offset()),
                                      r = t.offsetParent().offset(),
                                      a = { top: n.top - r.top, left: n.left - r.left };
                                    'static' == t.css('position') && (a.position = 'relative'),
                                      t.css(a);
                                  });
                                if (!this.length) return null;
                                if (
                                  O.documentElement !== this[0] &&
                                  !T.contains(O.documentElement, this[0])
                                )
                                  return { top: 0, left: 0 };
                                var e = this[0].getBoundingClientRect();
                                return {
                                  left: e.left + tl.pageXOffset,
                                  top: e.top + tl.pageYOffset,
                                  width: Math.round(e.width),
                                  height: Math.round(e.height),
                                };
                              },
                              css: function e (t, n) {
                                if (arguments.length < 2) {
                                  var r = this[0];
                                  if ('string' == typeof t) {
                                    if (!r) return;
                                    return (
                                      r.style[I(t)] || getComputedStyle(r, '').getPropertyValue(t)
                                    );
                                  }
                                  if (ee(t)) {
                                    if (!r) return;
                                    var a = {},
                                      i = getComputedStyle(r, '');
                                    return (
                                      T.each(t, function (e, t) {
                                        a[t] = r.style[I(t)] || i.getPropertyValue(t);
                                      }),
                                      a
                                    );
                                  }
                                }
                                var e = '';
                                if ('string' == o(t))
                                  n || 0 === n
                                    ? (e = f(t) + ':' + p(t, n))
                                    : this.each(function () {
                                        this.style.removeProperty(f(t));
                                      });
                                else
                                  for (E in t)
                                    t[E] || 0 === t[E]
                                      ? (e += f(E) + ':' + p(E, t[E]) + ';')
                                      : this.each(function () {
                                          this.style.removeProperty(f(E));
                                        });
                                return this.each(function () {
                                  this.style.cssText += ';' + e;
                                });
                              },
                              index: function Je (e) {
                                return e
                                  ? this.indexOf(T(e)[0])
                                  : this.parent().children().indexOf(this[0]);
                              },
                              hasClass: function Ye (e) {
                                return (
                                  !!e &&
                                  D.some.call(
                                    this,
                                    function (e) {
                                      return this.test(_(e));
                                    },
                                    n(e)
                                  )
                                );
                              },
                              addClass: function We (n) {
                                return n
                                  ? this.each(function (e) {
                                      if ('className' in this) {
                                        k = [];
                                        var t = _(this);
                                        b(this, n, e, t)
                                          .split(/\s+/g)
                                          .forEach(function (e) {
                                            T(this).hasClass(e) || k.push(e);
                                          }, this),
                                          k.length && _(this, t + (t ? ' ' : '') + k.join(' '));
                                      }
                                    })
                                  : this;
                              },
                              removeClass: function Qe (t) {
                                return this.each(function (e) {
                                  if ('className' in this) {
                                    if (t === w) return _(this, '');
                                    (k = _(this)),
                                      b(this, t, e, k)
                                        .split(/\s+/g)
                                        .forEach(function (e) {
                                          k = k.replace(n(e), ' ');
                                        }),
                                      _(this, k.trim());
                                  }
                                });
                              },
                              toggleClass: function $e (n, r) {
                                return n
                                  ? this.each(function (e) {
                                      var t = T(this);
                                      b(this, n, e, _(this))
                                        .split(/\s+/g)
                                        .forEach(function (e) {
                                          (r === w ? !t.hasClass(e) : r)
                                            ? t.addClass(e)
                                            : t.removeClass(e);
                                        });
                                    })
                                  : this;
                              },
                              scrollTop: function Ke (e) {
                                if (this.length) {
                                  var t = 'scrollTop' in this[0];
                                  return e === w
                                    ? t
                                      ? this[0].scrollTop
                                      : this[0].pageYOffset
                                    : this.each(
                                        t
                                          ? function () {
                                              this.scrollTop = e;
                                            }
                                          : function () {
                                              this.scrollTo(this.scrollX, e);
                                            }
                                      );
                                }
                              },
                              scrollLeft: function Xe (e) {
                                if (this.length) {
                                  var t = 'scrollLeft' in this[0];
                                  return e === w
                                    ? t
                                      ? this[0].scrollLeft
                                      : this[0].pageXOffset
                                    : this.each(
                                        t
                                          ? function () {
                                              this.scrollLeft = e;
                                            }
                                          : function () {
                                              this.scrollTo(e, this.scrollY);
                                            }
                                      );
                                }
                              },
                              position: function Ze () {
                                if (this.length) {
                                  var e = this[0],
                                    t = this.offsetParent(),
                                    n = this.offset(),
                                    r = q.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
                                  return (
                                    (n.top -= parseFloat(T(e).css('margin-top')) || 0),
                                    (n.left -= parseFloat(T(e).css('margin-left')) || 0),
                                    (r.top += parseFloat(T(t[0]).css('border-top-width')) || 0),
                                    (r.left += parseFloat(T(t[0]).css('border-left-width')) || 0),
                                    { top: n.top - r.top, left: n.left - r.left }
                                  );
                                }
                              },
                              offsetParent: function et () {
                                return this.map(function () {
                                  for (
                                    var e = this.offsetParent || O.body;
                                    e && !q.test(e.nodeName) && 'static' == T(e).css('position');

                                  )
                                    e = e.offsetParent;
                                  return e;
                                });
                              },
                            }),
                            (T.fn.detach = T.fn.remove),
                            ['width', 'height'].forEach(function (r) {
                              var a = r.replace(/./, function (e) {
                                return e[0].toUpperCase();
                              });
                              T.fn[r] = function (t) {
                                var e,
                                  n = this[0];
                                return t === w
                                  ? i(n)
                                    ? n['inner' + a]
                                    : c(n)
                                    ? n.documentElement['scroll' + a]
                                    : (e = this.offset()) && e[r]
                                  : this.each(function (e) {
                                      (n = T(this)).css(r, b(this, t, e, n[r]()));
                                    });
                              };
                            }),
                            H.forEach(function (t, l) {
                              var d = l % 2;
                              (T.fn[t] = function () {
                                var n,
                                  s,
                                  c = T.map(arguments, function (e) {
                                    var t = [];
                                    return 'array' == (n = o(e))
                                      ? (e.forEach(function (e) {
                                          return e.nodeType !== w
                                            ? t.push(e)
                                            : T.zepto.isZ(e)
                                            ? (t = t.concat(e.get()))
                                            : void (t = t.concat(K.fragment(e)));
                                        }),
                                        t)
                                      : 'object' == n || null == e
                                      ? e
                                      : K.fragment(e);
                                  }),
                                  u = 1 < this.length;
                                return c.length < 1
                                  ? this
                                  : this.each(function (e, t) {
                                      (s = d ? t : t.parentNode),
                                        (t =
                                          0 == l
                                            ? t.nextSibling
                                            : 1 == l
                                            ? t.firstChild
                                            : 2 == l
                                            ? t
                                            : null);
                                      var n = T.contains(O.documentElement, s),
                                        r = /^(text|application)\/(javascript|ecmascript)$/,
                                        a = nt(),
                                        i = a[nm],
                                        o = a[rm];
                                      c.forEach(function (e) {
                                        if (u) e = e.cloneNode(!0);
                                        else if (!s) return T(e).remove();
                                        Al(i) &&
                                          'SCRIPT' === e.tagName &&
                                          e.setAttribute('nonce', i),
                                          Al(o) &&
                                            'STYLE' === e.tagName &&
                                            e.setAttribute('nonce', o),
                                          s.insertBefore(e, t),
                                          n &&
                                            S(e, function (e) {
                                              null == e.nodeName ||
                                                'SCRIPT' !== e.nodeName.toUpperCase() ||
                                                (e.type && !r.test(e.type.toLowerCase())) ||
                                                e.src ||
                                                P(O, e.innerHTML, e.nonce);
                                            });
                                      });
                                    });
                              }),
                                (T.fn[
                                  d ? t + 'To' : 'insert' + (l ? 'Before' : 'After')
                                ] = function (e) {
                                  return T(e)[t](this), this;
                                });
                            }),
                            (K.Z.prototype = g.prototype = T.fn),
                            (K.uniq = V),
                            (K.deserializeValue = C),
                            (T.zepto = K),
                            T
                          );
                        })())
                      ),
                      (function () {
                        try {
                          getComputedStyle(undefined);
                        } catch (e) {
                          var n = getComputedStyle;
                          tl.getComputedStyle = function (e, t) {
                            try {
                              return n(e, t);
                            } catch (v7) {
                              return null;
                            }
                          };
                        }
                      })(),
                      (rl = (nl = sl).zepto),
                      (al = rl.qsa),
                      (il = /^\s*>/),
                      (ol = 'Zepto' + +new Date()),
                      (rl.qsa = function (e, t) {
                        var n,
                          r,
                          a = t;
                        try {
                          a
                            ? il.test(a) && ((r = nl(e).addClass(ol)), (a = '.' + ol + ' ' + a))
                            : (a = '*'),
                            (n = al(e, a));
                        } catch (i) {
                          throw i;
                        } finally {
                          r && r.removeClass(ol);
                        }
                        return n;
                      }),
                      sl),
                    wm = cl.MutationObserver || cl.WebkitMutationObserver,
                    Em = 'Expected an array of promises';
                  pl._setImmediateFn && Ne();
                  var Tm = G(),
                    km = /.*\.(\d+)_\d+/;
                  ct(cl, ul);
                  var Im = 'at-library-loaded',
                    Vm = 'at-request-start',
                    Dm = 'at-request-succeeded',
                    xm = 'at-request-failed',
                    jm = 'at-content-rendering-start',
                    Am = 'at-content-rendering-succeeded',
                    Om = 'at-content-rendering-failed',
                    Lm = 'at-content-rendering-no-offers',
                    Mm = 'at-content-rendering-redirect',
                    Nm = ':eq(',
                    Rm = ')',
                    Fm = Nm.length,
                    qm = /((\.|#)(-)?\d{1})/g,
                    Um = 'Unable to load target-vec.js',
                    Bm = 'Loading target-vec.js',
                    Hm = '_AT',
                    Gm = 'clickHandlerForExperienceEditor',
                    zm = 'currentView',
                    Jm = 'at_qa_mode',
                    Ym = 'at_preview_token',
                    Wm = 'at_preview_index',
                    Qm = 'at_preview_listed_activities_only',
                    $m = 'at_preview_evaluate_as_true_audience_ids',
                    Km = 'at_preview_evaluate_as_false_audience_ids',
                    Xm = '_',
                    Zm = function Zm (e) {
                      return !m(e);
                    },
                    eg = 'at-',
                    tg = 'at-body-style',
                    ng = '#' + tg,
                    rg = eg + 'views',
                    ag = 'Disabled due to optout',
                    ig = 'MCAAMB',
                    og = 'MCAAMLH',
                    sg = 'MCMID',
                    cg = 'MCOPTOUT',
                    ug = 'getSupplementalDataID',
                    lg = 'getCustomerIDs',
                    dg = 'trackingServer',
                    fg = dg + 'Secure',
                    pg = 'Visitor',
                    mg = 'getInstance',
                    gg = 'isAllowed',
                    vg = 'Visitor API requests timed out',
                    hg = 'Visitor API requests error',
                    bg = {},
                    yg = 'Data provider',
                    _g = 'timed out',
                    Cg = 2000,
                    Sg = 'authorization',
                    Pg = 'mboxDebugTools',
                    wg = ir(),
                    Eg = 'profile.',
                    Tg = 'mbox3rdPartyId',
                    kg = 'at_property',
                    Ig = 'orderId',
                    Vg = 'orderTotal',
                    Dg = 'productPurchasedId',
                    xg = 'productId',
                    jg = 'categoryId',
                    Ag = 'POST',
                    Og = 'Network request failed',
                    Lg = 'Request timed out',
                    Mg = 'Malformed response JSON',
                    Ng = 'web',
                    Rg = 'mboxedge',
                    Fg = '.tt.omtrdc.net',
                    qg = function qg (e) {
                      return !V(e);
                    },
                    Ug = function Ug (t) {
                      return function (e) {
                        return e[t];
                      };
                    },
                    Bg = function Bg (t) {
                      return function (e) {
                        return !t(e);
                      };
                    },
                    Hg = Bg(m),
                    Gg = function Gg (t) {
                      return function (e) {
                        return g(t, e);
                      };
                    },
                    zg = function zg (e) {
                      return e.status === _f;
                    },
                    Jg = function Jg (e) {
                      return e.type === jf;
                    },
                    Yg = function Yg (e) {
                      return e.type === cd;
                    },
                    Wg = Gg(Hg),
                    Qg = Ug(Op),
                    $g = Ug(ql),
                    Kg = Ug(Af),
                    Xg = function Xg (e) {
                      return Al(e.name);
                    },
                    Zg = function Zg (e) {
                      return !m(e.index);
                    },
                    ev = function ev (e) {
                      return d(e) && Xg(e);
                    },
                    tv = function tv (e) {
                      return d(e) && Xg(e) && Zg(e);
                    },
                    nv = function nv (e) {
                      return d(e) && Xg(e);
                    },
                    rv = function rv (e) {
                      return Al(e.selector);
                    },
                    av = Ug(Of),
                    iv = b([av, Hg]),
                    ov = 'adobe_mc_sdid',
                    sv = 'Network request failed',
                    cv = 'Request timed out',
                    uv = 'URL is required',
                    lv = 'GET',
                    dv = 'POST',
                    fv = 'method',
                    pv = 'url',
                    mv = 'headers',
                    gv = 'data',
                    vv = 'credentials',
                    hv = 'timeout',
                    bv = 'async',
                    yv = /CLKTRK#(\S+)/,
                    _v = /CLKTRK#(\S+)\s/,
                    Cv = function Zm (e) {
                      return !m(e);
                    },
                    Sv = 'visibilityState',
                    Pv = 'visible',
                    wv = 100,
                    Ev = Ld + ',' + Nd + ',' + Md,
                    Tv = 'at-action-key',
                    kv = 'metric element not found',
                    Iv = 'navigator',
                    Vv = 'sendBeacon',
                    Dv = 'Beacon data sent',
                    xv = 'Beacon data sent failed',
                    jv = 'View triggered notification',
                    Av = 'View rendered notification',
                    Ov = 'Mboxes rendered notification',
                    Lv = 'Event handler notification',
                    Mv = 'Mbox event handler notification',
                    Nv = 'View event handler notification',
                    Rv = 'prefetchMboxes',
                    Fv = 'rendered',
                    qv = 'triggered',
                    Uv = {},
                    Bv = 'pageLoadMetrics',
                    Hv = 'prefetchMetrics',
                    Gv = Ug(Lp),
                    zv = function zv () {
                      return pa(Tf);
                    },
                    Jv = function Jv (e) {
                      return ma(Tf, e);
                    },
                    Yv = Ug(ql),
                    Wv = Ug(Ql),
                    Qv = function Qv (e) {
                      return pa(Ef, e);
                    },
                    $v = function $v (e) {
                      return ma(Ef, e);
                    },
                    Kv = function Kv (e) {
                      return Bg(zg)(e) && iv(e);
                    };
                  nc.prototype = {
                    on: function (e, t, n) {
                      var r = this.e || (this.e = {});
                      return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
                    },
                    once: function (e, t, n) {
                      function r () {
                        a.off(e, r), t.apply(n, arguments);
                      }
                      var a = this;
                      return (r._ = t), this.on(e, r, n);
                    },
                    emit: function (e) {
                      for (
                        var t = [].slice.call(arguments, 1),
                          n = ((this.e || (this.e = {}))[e] || []).slice(),
                          r = 0,
                          a = n.length;
                        r < a;
                        r++
                      )
                        n[r].fn.apply(n[r].ctx, t);
                      return this;
                    },
                    off: function (e, t) {
                      var n = this.e || (this.e = {}),
                        r = n[e],
                        a = [];
                      if (r && t)
                        for (var i = 0, o = r.length; i < o; i++)
                          r[i].fn !== t && r[i].fn._ !== t && a.push(r[i]);
                      return a.length ? (n[e] = a) : delete n[e], this;
                    },
                  };
                  var Xv = nc,
                    Zv = nc;
                  Xv.TinyEmitter = Zv;
                  var eh = rc(),
                    th = 'Page load rendering failed',
                    nh = 'Mboxes rendering failed',
                    rh = 'View rendering failed',
                    ah = 'Prefetch rendering failed',
                    ih = function ih (e) {
                      return !V(g(zg, e));
                    },
                    oh = '[page-init]',
                    sh = '[getOffer()]',
                    ch = '[getOffers()]',
                    uh = '[applyOffer()]',
                    lh = '[applyOffers()]',
                    dh = '[sendNotifications()]',
                    fh = '[trackEvent()]',
                    ph = '[triggerView()]',
                    mh = [],
                    gh = 1,
                    vh = 0;
                  zu();
                  var hh =
                      'function has been deprecated. Please use getOffer() and applyOffer() functions instead.',
                    bh =
                      'adobe.target.registerExtension() function has been deprecated. Please review the documentation for alternatives.',
                    yh = 'mboxCreate() ' + hh,
                    _h = 'mboxDefine() ' + hh,
                    Ch = 'mboxUpdate() ' + hh,
                    Sh = { init: el, initConfig: K, initDelivery: Xc };
                  e.exports = Sh;
                },
              },
              'adobe-target-v2/lib/messages.js': {
                script: function (e) {
                  'use strict';
                  e.exports = {
                    ALREADY_INITIALIZED: 'AT: Adobe Target has already been initialized.',
                    DELIVERY_DISABLED:
                      'AT: Adobe Target content delivery is disabled. Update your DOCTYPE to support Standards mode.',
                    NO_REQUEST:
                      'AT: Target library is either not loaded or disabled, no request will be executed',
                  };
                },
              },
              'adobe-target-v2/lib/librarySettings.js': {
                script: function (e) {
                  'use strict';
                  var t = { version: '2.3.2' };
                  e.exports = { TARGET_DEFAULT_SETTINGS: t };
                },
              },
              'adobe-target-v2/lib/modules/page-load.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('../librarySettings'),
                    a = n('@adobe/reactor-window'),
                    i = n('./object-override'),
                    o = n('./params-store'),
                    s = o.getParams,
                    c = o.getPageLoadParams,
                    u = n('../targetSettings').targetSettings;
                  e.exports = function (e) {
                    return (
                      (u.mboxParams = s()),
                      (u.globalMboxParams = c()),
                      i(u, e, ['bodyHidingEnabled', 'bodyHiddenStyle']),
                      i(u, a.targetGlobalSettings || {}, [
                        'enabled',
                        'bodyHidingEnabled',
                        'bodyHiddenStyle',
                      ]),
                      i(u, r.TARGET_DEFAULT_SETTINGS || {}, ['version']),
                      u
                    );
                  };
                },
              },
            },
            settings: {
              targetSettings: {
                enabled: !0,
                timeout: 3000,
                version: '2.2.0',
                endpoint: '/rest/v1/delivery',
                imsOrgId: 'F75C3025512D2C1D0A490D44@AdobeOrg',
                clientCode: 'nflenterprises',
                secureOnly: !1,
                serverState: {},
                optinEnabled: !1,
                serverDomain: 'nflenterprises.tt.omtrdc.net',
                urlSizeLimit: 2048,
                viewsEnabled: !0,
                optoutEnabled: !1,
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
          'parse.ly-analytics': {
            displayName: 'Parse.ly Analytics',
            modules: {
              'parse.ly-analytics/src/lib/actions/initializeParseLyTracker.js': {
                name: 'initialize-parse.ly-tracker',
                displayName: 'Initialize Parse.ly Tracker',
                script: function (e, t, s, n) {
                  'use strict';
                  var c = n.getExtensionSettings();
                  e.exports = function (e) {
                    var t = null,
                      n = s('@adobe/reactor-document');
                    (t = c.hasOwnProperty('apiKey') ? c : e),
                      (window.PARSELY = window.PARSELY || {}),
                      (window.PARSELY.apiKey = t.apiKey),
                      (window.PARSELY.__template_track_tpcs = t.trackThirdPartyCookies),
                      (window.PARSELY.__template_track_ips = t.trackIPAddresses),
                      (window.PARSELY.__template_heartbeat_should_honor_autotrack = !0),
                      (window.PARSELY.__template_apikey = t.apiKey);
                    var r = n.createElement('div');
                    (r.id = 'parsely-root'), (r.style.display = 'none');
                    var a = n.createElement('span');
                    (a.id = 'parsely-cfg'),
                      a.setAttribute('data-parsely-site', t.apiKey),
                      r.appendChild(a),
                      n.body.appendChild(r);
                    var i = '//d1z2jf7jlzjs58.cloudfront.net/keys/' + t.apiKey + '/p.js',
                      o = n.createElement('script');
                    (o.src = i), n.body.appendChild(o);
                  };
                },
              },
            },
            settings: { apiKey: 'nfl.com', trackIPAddresses: !0, trackThirdPartyCookies: !0 },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPd392f99d64da4b6280d17fc68b99c010/',
          },
          core: {
            displayName: 'Core',
            modules: {
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
                      var n = e.name.toLowerCase(), r = Object.keys(t), a = 0;
                      a < r.length;
                      a++
                    ) {
                      var i = r[a];
                      if (i.toLowerCase() === n) return t[i];
                    }
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
              'core/src/lib/dataElements/pageInfo.js': {
                name: 'page-info',
                displayName: 'Page Info',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-document');
                  e.exports = function (e) {
                    switch (e.attribute) {
                      case 'url':
                        return r.location.href;
                      case 'hostname':
                        return r.location.hostname;
                      case 'pathname':
                        return r.location.pathname;
                      case 'protocol':
                        return r.location.protocol;
                      case 'referrer':
                        return r.referrer;
                      case 'title':
                        return r.title;
                    }
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
              'core/src/lib/dataElements/cookie.js': {
                name: 'cookie',
                displayName: 'Cookie',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-cookie');
                  e.exports = function (e) {
                    return r.get(e.name);
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
                    c = function (r) {
                      return function (e, t, n) {
                        return r(i(e, n), i(t, n));
                      };
                    },
                    u = {
                      equals: c(function (e, t) {
                        return e == t;
                      }),
                      doesNotEqual: function () {
                        return !u.equals.apply(null, arguments);
                      },
                      contains: t(
                        c(function (e, t) {
                          return -1 !== e.indexOf(t);
                        })
                      ),
                      doesNotContain: function () {
                        return !u.contains.apply(null, arguments);
                      },
                      startsWith: t(
                        c(function (e, t) {
                          return 0 === e.indexOf(t);
                        })
                      ),
                      doesNotStartWith: function () {
                        return !u.startsWith.apply(null, arguments);
                      },
                      endsWith: t(
                        c(function (e, t) {
                          return e.substring(e.length - t.length, e.length) === t;
                        })
                      ),
                      doesNotEndWith: function () {
                        return !u.endsWith.apply(null, arguments);
                      },
                      matchesRegex: t(function (e, t, n) {
                        return new RegExp(t, n ? 'i' : '').test(e);
                      }),
                      doesNotMatchRegex: function () {
                        return !u.matchesRegex.apply(null, arguments);
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
                    return u[e.comparison.operator](
                      e.leftOperand,
                      e.rightOperand,
                      Boolean(e.comparison.caseInsensitive)
                    );
                  };
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
                    c = n('@adobe/reactor-document'),
                    u = n('@adobe/reactor-promise'),
                    l = n('./helpers/decorateCode'),
                    d = n('./helpers/loadCodeSequentially'),
                    f = n('../../../node_modules/postscribe/dist/postscribe'),
                    p = n('./helpers/unescapeHtmlCode'),
                    m =
                      ((r = function (e) {
                        f(c.body, e, {
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
                        if (c.body) for (; a.length; ) r(a.shift());
                        else setTimeout(s, 20);
                      }),
                      function (e) {
                        a.push(e), s();
                      }),
                    g = (function () {
                      if (c.currentScript) return c.currentScript.async;
                      for (var e = c.querySelectorAll('script'), t = 0; t < e.length; t++) {
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
                            return e ? ((n = l(r, e)), m(n.code), n.promise) : u.resolve();
                          })
                        : ((n = l(r, a)),
                          g || 'loading' !== c.readyState
                            ? m(n.code)
                            : c.write && !1 === i.propertySettings.ruleComponentSequencingEnabled
                            ? c.write(n.code)
                            : m(n.code),
                          n.promise);
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
                            r = e.getAttribute('target');
                          return n &&
                            (!r || '_self' === r || ('_top' === r && i.top === i) || r === i.name)
                            ? e
                            : void 0;
                        }
                        e = e.parentNode;
                      }
                    };
                  document.addEventListener('click', o.evaluateEvent, !0),
                    (e.exports = function (r, a) {
                      o.addListener(r, function (e) {
                        var t = e.nativeEvent;
                        if (!t.s_fe) {
                          if (r.anchorDelay && !s.has(t)) {
                            var n = c(t.target);
                            n &&
                              (t.preventDefault(),
                              setTimeout(function () {
                                i.location = n.href;
                              }, r.anchorDelay)),
                              s.set(t, !0);
                          }
                          a(e);
                        }
                      });
                    }),
                    (e.exports.__reset = o.__reset);
                },
              },
              'core/src/lib/helpers/getObjectProperty.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    for (var n = t.split('.'), r = e, a = 0, i = n.length; a < i; a++) {
                      if (null == r) return undefined;
                      r = r[n[a]];
                    }
                    return r;
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
                        function u () {}
                        function l () {
                          var e = c.shift();
                          if (e) {
                            var t = o.last(e);
                            t.afterDequeue(),
                              (e.stream = i.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function i (e, t, r) {
                          function a (e) {
                            (e = r.beforeWrite(e)), g.write(e), r.afterWrite(e);
                          }
                          ((g = new p['default'](e, r)).id = m++),
                            (g.name = r.name || g.id),
                            (d.streams[g.name] = g);
                          var n = e.ownerDocument,
                            i = {
                              close: n.close,
                              open: n.open,
                              write: n.write,
                              writeln: n.writeln,
                            };
                          f(n, {
                            close: u,
                            open: u,
                            write: function s () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return a(t.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return a(t.join('') + '\n');
                            },
                          });
                          var o = g.win.onerror || u;
                          return (
                            (g.win.onerror = function (e, t, n) {
                              r.error({ msg: e + ' - ' + t + ': ' + n }),
                                o.apply(g.win, [e, t, n]);
                            }),
                            g.write(t, function () {
                              f(n, i), (g.win.onerror = o), r.done(), (g = null), l();
                            }),
                            g
                          );
                        }
                        function d (e, t, n) {
                          if (o.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (c = []), (g = null), void (m = 0);
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
                                r.stream ? r.stream.abort() : (r[1] = u);
                              },
                            }),
                            n.beforeEnqueue(r),
                            c.push(r),
                            g || l(),
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
                            afterAsync: u,
                            afterDequeue: u,
                            afterStreamStart: u,
                            afterWrite: u,
                            autoFix: !0,
                            beforeEnqueue: u,
                            beforeWriteToken: function v (e) {
                              return e;
                            },
                            beforeWrite: function h (e) {
                              return e;
                            },
                            done: u,
                            error: function b (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          m = 0,
                          c = [],
                          g = null;
                        f(d, { streams: {}, queue: c, WriteStream: p['default'] });
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
                        function y (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function _ (e, t) {
                          var n = T + t,
                            r = e.getAttribute(n);
                          return w.existy(r) ? String(r) : r;
                        }
                        function C (e, t, n) {
                          var r = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            a = T + t;
                          w.existy(r) && '' !== r ? e.setAttribute(a, r) : e.removeAttribute(a);
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
                          P = a(n(3)),
                          w = r(n(4)),
                          E = !1,
                          T = 'data-ps-',
                          k = 'ps-style',
                          I = 'ps-script',
                          i = (function () {
                            function r (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              y(this, r),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new P['default']('', { autoFix: n.autoFix })),
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
                                  w.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
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
                                  !(n = w.isScript(t)) &&
                                  !(r = w.isStyle(t));

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
                                    E && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    E && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (r.prototype._buildChunk = function l (e) {
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
                                    c = s.toString();
                                  if ((n.push(c), s.attrs)) {
                                    if (!/^noscript$/i.test(s.tagName)) {
                                      var u = t++;
                                      r.push(c.replace(/(\/?>)/, ' ' + T + 'id=' + u + ' $1')),
                                        s.attrs.id !== I &&
                                          s.attrs.id !== k &&
                                          a.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  T +
                                                  'proxyof=' +
                                                  u +
                                                  (s.unary ? ' />' : '>')
                                          );
                                    }
                                  } else r.push(c), a.push('endTag' === s.type ? c : '');
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
                                  w.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !_(e, 'proxyof')) {
                                    n && C((this.actuals[_(e, 'id')] = e), 'id');
                                    var r = e.parentNode && _(e.parentNode, 'proxyof');
                                    r && this.actuals[r].appendChild(e);
                                  }
                                  t.unshift.apply(t, w.toArray(e.childNodes));
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
                              (r.prototype._handleStyleToken = function u (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (r.prototype._writeStyleToken = function d (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, k),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (r.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  w.eachKey(e.attrs, function (e, t) {
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
                              (r.prototype._onScriptDone = function m (e) {
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
                              (r.prototype._writeScriptToken = function g (e, t) {
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
                                  this._insertCursor(n, I), (n.src && !r) || t();
                                } catch (i) {
                                  this.options.error(i), t();
                                }
                              }),
                              (r.prototype._buildScript = function v (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  w.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  e.content && (n.text = e.content),
                                  n
                                );
                              }),
                              (r.prototype._scriptLoadHandler = function h (t, n) {
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
                                  S(t, {
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
                                    onreadystatechange: function u () {
                                      /^(loaded|complete)$/.test(t.readyState) && a();
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
                              function l (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              t.__esModule = !0;
                              var d = a(n(2)),
                                f = a(n(3)),
                                p = r(n(6)),
                                i = n(5),
                                m = {
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
                                      a =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    l(this, c), (this.stream = r);
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
                                    (c.prototype._peekTokenImpl = function a () {
                                      for (var e in m)
                                        if (m.hasOwnProperty(e) && m[e].test(this.stream)) {
                                          var t = f[e](this.stream);
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
                                    (c.prototype.rest = function u () {
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
                                if (0 <= t) return new l.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function a (e) {
                                var t = e.indexOf('<');
                                return new l.CharsToken(0 <= t ? t : e.length);
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
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new l.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          o,
                                          s,
                                          !!t[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === n ? 'undefined' : u(n)))
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
                                      return new l.AtomicTagToken(
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
                                if (t) return new l.EndTagToken(t[1], t[0].length);
                              }
                              t.__esModule = !0;
                              var u =
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
                              var l = n(4),
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
                                              (r += '="' + (0, c.escapeQuotes)(i) + '"');
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
                              function u (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = r.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function l (e, t) {
                                var n = e.stream,
                                  r = u(t());
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
                                  var e = l(n, t);
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
                                    endTag: function c (e) {
                                      i.last()
                                        ? r.tagSoupFix && !i.lastTagNameEq(e.tagName)
                                          ? d(n, i)
                                          : i.pop()
                                        : r.tagSoupFix && (t(), a());
                                    },
                                  };
                                return function e () {
                                  return a(), u(t());
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
                        function c (e) {
                          return e[e.length - 1];
                        }
                        function u (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function l (e) {
                          return u(e, 'script');
                        }
                        function d (e) {
                          return u(e, 'style');
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
                          (t.last = c),
                          (t.isTag = u),
                          (t.isScript = l),
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
                    c = function (e, t) {
                      return e.replace(/\${reactorCallbackId}/g, t);
                    },
                    u = function (e) {
                      return e.settings.isExternal;
                    };
                  e.exports = function (e, t) {
                    var n;
                    return (
                      u(e) && (t = r.replaceTokens(t, e.event)),
                      s(t)
                        ? ((n = new a(function (e, t) {
                            o[String(i)] = { resolve: e, reject: t };
                          })),
                          (t = c(t, i)),
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
                  const $___old_16faa2033fe657aa = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_16faa2033fe657aa)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_47c01efa79e9f191.appVersion
                      ));
                    return function () {
                      'use strict';
                      var r = n('@adobe/reactor-window'),
                        a = n('@adobe/reactor-document'),
                        i = -1 !== r.navigator.appVersion.indexOf('MSIE 10'),
                        o = 'WINDOW_LOADED',
                        s = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        u = [c, s, o],
                        l = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        d = {};
                      u.forEach(function (e) {
                        d[e] = [];
                      });
                      var f = function (e, t) {
                          u.slice(0, m(e) + 1).forEach(function (e) {
                            g(t, e);
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
                        m = function (e) {
                          return u.indexOf(e);
                        },
                        g = function (t, e) {
                          d[e].forEach(function (e) {
                            v(t, e);
                          }),
                            (d[e] = []);
                        },
                        v = function (e, t) {
                          var n = t.trigger,
                            r = t.syntheticEventFn;
                          n(r ? r(e) : null);
                        };
                      (r._satellite = r._satellite || {}),
                        (r._satellite.pageBottom = f.bind(null, c)),
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
                            d[c].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            d[s].push({ trigger: e, syntheticEventFn: l.bind(null, a) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[o].push({ trigger: e, syntheticEventFn: l.bind(null, r) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_16faa2033fe657aa)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_16faa2033fe657aa
                      ));
                  }
                },
              },
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./weakMap'),
                    p = n('./matchesProperties'),
                    m = n('./matchesSelector');
                  e.exports = function () {
                    var d = [],
                      f = new r(),
                      e = {
                        addListener: function (e, t) {
                          d.push({ settings: e, callback: t });
                        },
                        evaluateEvent: function (t, e) {
                          if (d.length && !f.has(t)) {
                            for (var n = t.target, r = !1; n; ) {
                              for (var a = !1, i = !1, o = 0; o < d.length; o++) {
                                var s = d[o],
                                  c = s.settings.elementSelector,
                                  u = s.settings.elementProperties;
                                if (
                                  (!1 !== s.settings.bubbleFireIfChildFired || !r) &&
                                  (n === t.target || !1 !== s.settings.bubbleFireIfParent) &&
                                  (n === t.target || c || (u && Object.keys(u).length)) &&
                                  (!c || m(n, c)) &&
                                  (!u || p(n, u))
                                ) {
                                  var l = {};
                                  e
                                    ? Object.keys(t).forEach(function (e) {
                                        l[e] = t[e];
                                      })
                                    : (l.nativeEvent = t),
                                    (l.element = n),
                                    (l.target = t.target),
                                    !1 !== s.callback(l) &&
                                      ((i = !0), s.settings.bubbleStop && (a = !0));
                                }
                              }
                              if (a) break;
                              i && (r = !0), (n = n.parentNode);
                            }
                            f.set(t, !0);
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
                    var a = Object.defineProperty,
                      i = Date.now() % 1000000000;
                    (r = function () {
                      this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + i++ + '__';
                    }).prototype = {
                      set: function (e, t) {
                        var n = e[this.name];
                        return (
                          n && n[0] === e
                            ? (n[1] = t)
                            : a(e, this.name, { value: [e, t], writable: !0 }),
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
                  var a = n('./../../helpers/textMatch'),
                    i = function (e, t) {
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
                        var t = i(r, e.name),
                          n = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return a(t, n);
                      })
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/matchesSelector.js': {
                script: function (e, t, n, a) {
                  'use strict';
                  e.exports = function (e, t) {
                    var n = e.matches || e.msMatchesSelector;
                    if (n)
                      try {
                        return n.call(e, t);
                      } catch (r) {
                        return (
                          a.logger.warn(
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
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2e2f86ba46954a2b8a2b3bb72276b9f8/',
          },
        },
        company: { orgId: 'F75C3025512D2C1D0A490D44@AdobeOrg' },
        property: {
          name: 'League - NFL.com',
          settings: {
            domains: ['clevelandbrowns.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RLe53f9d27224140429f3cc5c2594ef9bf',
            name: 'Sign In Direct Call Rule',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'sign-in' },
                ruleOrder: 5,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar16', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'eVar17', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'eVar18', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'eVar33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'eVar91', type: 'value', value: '%event.detail.linkURL%' },
                      { name: 'eVar92', type: 'value', value: '%event.detail.linkPosition%' },
                    ],
                    props: [
                      { name: 'prop33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'prop57', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'prop58', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'prop59', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'prop60', type: 'value', value: '%event.detail.linkURL%' },
                    ],
                    events: [{ name: 'event62' }, { name: 'event11' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'sign in', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL4fda5b41cd2e4713932d5a7c9a21bd36',
            name: '3P - Twitter - Pro Bowl Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:pro-bowl:pro-bowl:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);\n},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',\na=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');\n// Insert Twitter Pixel ID and Standard Event data below\ntwq('init','o3ckj');\ntwq('track','PageView');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa79f85e156274d0b886f98cc67ef1e2a',
            name: 'Click Action Direct Call Rule',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'click_action' },
                ruleOrder: 8,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'doesNotEqual' },
                  leftOperand: '%event.detail.quiz_complete%',
                  rightOperand: 'true',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar16', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'eVar17', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'eVar18', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'eVar33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'eVar91', type: 'value', value: '%event.detail.linkURL%' },
                      { name: 'eVar92', type: 'value', value: '%event.detail.linkPosition%' },
                    ],
                    props: [
                      { name: 'prop33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'prop57', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'prop58', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'prop59', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'prop60', type: 'value', value: '%event.detail.linkURL%' },
                    ],
                    events: [{ name: 'event62' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'click action', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL7988cd898c724804a00ba0c5fca6d3e3',
            name: 'App Webview Page View (NOT Fantasy Android)',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 25 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTruthy' },
                  leftOperand: '%reportSuite (QP)%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'doesNotEqual' },
                  leftOperand: '%appName%',
                  rightOperand: 'Fantasy',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      'undefined' != typeof Visitor &&
                        ((t.visitor = Visitor.getInstance('F75C3025512D2C1D0A490D44@AdobeOrg', {
                          trackingServer: 'metrics.nfl.com',
                          trackingServerSecure: 'smetrics.nfl.com',
                          marketingCloudServer: 'metrics.nfl.com',
                          marketingCloudServerSecure: 'smetrics.nfl.com',
                          whitelistParentDomain: 'NFL.com',
                          whitelistIframeDomains: ['NFL.com'],
                          overwriteCrossDomainMCIDAndAID: !0,
                        })),
                        (visitor = t.visitor)),
                        '' != _satellite.getVar('visitorMID (QP)')
                          ? ((t.new_MID_date = new Date()),
                            t.new_MID_date.setFullYear(t.new_MID_date.getFullYear() + 5),
                            t.c_w('MCID2', _satellite.getVar('visitorMID (QP)'), t.new_MID_date),
                            t.visitor.setMarketingCloudVisitorID(t.c_r('MCID2')))
                          : t.c_r('MCID2') && t.visitor.setMarketingCloudVisitorID(t.c_r('MCID2')),
                        t.Util.getQueryParam('aid')
                          ? ((t.new_AID_date = new Date()),
                            t.new_AID_date.setFullYear(t.new_AID_date.getFullYear() + 5),
                            t.c_w('AID', t.Util.getQueryParam('aid'), t.new_AID_date),
                            t.visitor.setAnalyticsVisitorID(t.c_r('AID')))
                          : t.c_r('AID') && t.visitor.setAnalyticsVisitorID(t.c_r('AID')),
                        (a.AppID = t.eVar20);
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar14', type: 'value', value: '%siteSubsection (QP)%' },
                      {
                        name: 'eVar20',
                        type: 'value',
                        value: '%appName% %appNumber% (%appBuild%)',
                      },
                      { name: 'eVar24', type: 'value', value: 'mobile webview' },
                      { name: 'eVar25', type: 'value', value: '%reportSuite (QP)%' },
                      { name: 'eVar33', type: 'value', value: '%siteName (JS)%' },
                    ],
                    props: [
                      { name: 'prop2', type: 'value', value: '%siteSubsection (QP)%' },
                      { name: 'prop12', type: 'value', value: 'mobile webview' },
                      { name: 'prop22', type: 'value', value: '%reportSuite (QP)%' },
                      {
                        name: 'prop25',
                        type: 'value',
                        value: '%appName% %appNumber% (%appBuild%)',
                      },
                      { name: 'prop33', type: 'value', value: '%siteName (JS)%' },
                    ],
                  },
                },
              },
            ],
          },
          {
            id: 'RL2f79bead5911410ab5dab18b17bce9bd',
            name: 'Article View Event',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 19 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTruthy' }, leftOperand: '%articleID%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'doesNotEqual' },
                  leftOperand: '%pageState%',
                  rightOperand: 'carousel',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return -1 === location.search.indexOf('_previewId');
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar39', type: 'value', value: '%articleName%' },
                      { name: 'eVar40', type: 'value', value: '%articleID%' },
                      { name: 'eVar46', type: 'value', value: '%articleDisplay%' },
                    ],
                    props: [
                      { name: 'prop1', type: 'value', value: '%articleName%' },
                      { name: 'prop11', type: 'value', value: '%articleID%' },
                    ],
                    events: [{ name: 'event43' }],
                  },
                },
              },
              {
                modulePath: 'adobe-target-v2/lib/addParams.js',
                settings: {
                  params: {
                    'entity.id': { value: '%articleID%', checked: !1 },
                    'entity.name': { value: '%articleNameMixedCase%', checked: !1 },
                    'entity.slug': { value: '%articleSlug%', checked: !1 },
                    'entity.brand': { value: '%siteName (JS)%', checked: !1 },
                    'entity.games': { value: '%articleGames%', checked: !1 },
                    'entity.teams': { value: '%articleTeams%', checked: !1 },
                    'entity.author': { value: '%articleAuthor%', checked: !1 },
                    'entity.player': { value: '%articlePlayers%', checked: !1 },
                    'entity.pageUrl': { value: '%pageUrl%', checked: !1 },
                    'entity.playersId': { value: '%articlePlayersID%', checked: !1 },
                    'entity.advertiser': { value: '%articleAdvertiser%', checked: !1 },
                    'entity.categoryId': { value: '%articleCategoryId%', checked: !1 },
                    'entity.contentType': { value: '%page_type%', checked: !1 },
                    'entity.description': { value: '%articleDescription%', checked: !1 },
                    'entity.publishDate': { value: '%articlePublishDate%', checked: !1 },
                    productPurchasedId: { value: '%articleID%', checked: !1 },
                    'entity.freeFormTag1': { value: '%articleFreeForm1%', checked: !1 },
                    'entity.freeFormTag2': { value: '%articleFreeForm2%', checked: !1 },
                    'entity.freeFormTag3': { value: '%articleFreeForm3%', checked: !1 },
                    'entity.freeFormTag4': { value: '%articleFreeForm4%', checked: !1 },
                    'entity.freeFormTag5': { value: '%articleFreeForm5%', checked: !1 },
                    'entity.freeFormTag6': { value: '%articleFreeForm6%', checked: !1 },
                    'entity.freeFormTag7': { value: '%articleFreeForm7%', checked: !1 },
                    'entity.freeFormTag8': { value: '%articleFreeForm8%', checked: !1 },
                    'entity.freeFormTag9': { value: '%articleFreeForm9%', checked: !1 },
                    'entity.thumbnailUrl': { value: '%articleThumbnailUrl%', checked: !1 },
                    'entity.articleLayout': { value: '%articleLayout%', checked: !1 },
                    'entity.expiredStatus': { value: '%articleExpiredStatus%', checked: !1 },
                    'entity.alternativeUrl': { value: '%alternativeUrl%', checked: !1 },
                    'entity.overwriteableCategory': {
                      value: '%articleCategoryIdAlternate%',
                      checked: !1,
                    },
                  },
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source: "adobe.target.trackEvent({'mbox':'articlePageLoad'});\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL729f2a01be5d4227a2eb4f1d60837589',
            name: 'Gigya User Cookies To eVars',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 95 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar27', type: 'value', value: '%hashedEmail (Cookie)%' },
                      { name: 'eVar28', type: 'value', value: '%gigyaUID (Cookie)%' },
                      { name: 'eVar29', type: 'value', value: '%favoritePlayers (Cookie)%' },
                      { name: 'eVar38', type: 'value', value: '%favoriteTeam (Cookie)%' },
                      { name: 'eVar90', type: 'value', value: '%hashedProfileID (Cookie)%' },
                    ],
                  },
                },
              },
            ],
          },
          {
            id: 'RL33051bbe5ebc4ed4a1a29acd98a3ff9b',
            name: 'Update Account Direct Call Rule',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'update_account' },
                ruleOrder: 10,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar16', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'eVar17', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'eVar18', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'eVar33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'eVar91', type: 'value', value: '%event.detail.linkURL%' },
                      { name: 'eVar92', type: 'value', value: '%event.detail.linkPosition%' },
                    ],
                    props: [
                      { name: 'prop33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'prop57', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'prop58', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'prop59', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'prop60', type: 'value', value: '%event.detail.linkURL%' },
                    ],
                    events: [{ name: 'event75' }, { name: 'event62' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'update account', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL6675eff3688a4e108be494d18e0c8faf',
            name: 'Sign Up Direct Call Rule',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'sign-up' },
                ruleOrder: 5,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar16', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'eVar17', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'eVar18', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'eVar33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'eVar91', type: 'value', value: '%event.detail.linkURL%' },
                      { name: 'eVar92', type: 'value', value: '%event.detail.linkPosition%' },
                    ],
                    props: [
                      { name: 'prop33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'prop57', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'prop58', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'prop59', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'prop60', type: 'value', value: '%event.detail.linkURL%' },
                    ],
                    events: [{ name: 'event28' }, { name: 'event75' }, { name: 'event62' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'sign up', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL7547ece77ea14d0b8a9cef542373eba8',
            name: 'Sign Out Direct Call Rule',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'sign-out' },
                ruleOrder: 5,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar16', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'eVar17', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'eVar18', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'eVar33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'eVar91', type: 'value', value: '%event.detail.linkURL%' },
                      { name: 'eVar92', type: 'value', value: '%event.detail.linkPosition%' },
                    ],
                    props: [
                      { name: 'prop33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'prop57', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'prop58', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'prop59', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'prop60', type: 'value', value: '%event.detail.linkURL%' },
                    ],
                    events: [{ name: 'event62' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'sign out', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RLf5e7a9a6839e4077a88ca57585de9414',
            name: '3P - Facebook - Pro Bowl Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:pro-bowl:pro-bowl:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    "!function(f,b,e,v,n,t,s) \n{if(f.fbq)return;n=f.fbq=function(){n.callMethod? \nn.callMethod.apply(n,arguments):n.queue.push(arguments)}; \nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; \nn.queue=[];t=b.createElement(e);t.async=!0; \nt.src=v;s=b.getElementsByTagName(e)[0]; \ns.parentNode.insertBefore(t,s)}(window, document,'script', \n'https://connect.facebook.net/en_US/fbevents.js'); \nfbq('init', '265163127283621'); \nfbq('track', 'PageView');\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL9e3e1e60e9004885bdc85de662a3b01c',
            name: 'App Webview Page View (Fantasy Android)',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 25 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTruthy' },
                  leftOperand: '%reportSuite (QP)%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%appName%',
                  rightOperand: 'Fantasy',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      'undefined' != typeof Visitor &&
                        ((t.visitor = Visitor.getInstance('F75C3025512D2C1D0A490D44@AdobeOrg', {
                          trackingServer: 'metrics.nfl.com',
                          trackingServerSecure: 'smetrics.nfl.com',
                          marketingCloudServer: 'metrics.nfl.com',
                          marketingCloudServerSecure: 'smetrics.nfl.com',
                          whitelistParentDomain: 'NFL.com',
                          whitelistIframeDomains: ['NFL.com'],
                          overwriteCrossDomainMCIDAndAID: !0,
                        })),
                        (visitor = t.visitor)),
                        '' != _satellite.getVar('visitorMID (QP)')
                          ? ((t.new_MID_date = new Date()),
                            t.new_MID_date.setFullYear(t.new_MID_date.getFullYear() + 5),
                            t.c_w('MCID2', _satellite.getVar('visitorMID (QP)'), t.new_MID_date),
                            t.visitor.setMarketingCloudVisitorID(t.c_r('MCID2')))
                          : t.c_r('MCID2') && t.visitor.setMarketingCloudVisitorID(t.c_r('MCID2')),
                        t.Util.getQueryParam('aid')
                          ? ((t.new_AID_date = new Date()),
                            t.new_AID_date.setFullYear(t.new_AID_date.getFullYear() + 5),
                            t.c_w('AID', t.Util.getQueryParam('aid'), t.new_AID_date),
                            t.visitor.setAnalyticsVisitorID(t.c_r('AID')))
                          : t.c_r('AID') && t.visitor.setAnalyticsVisitorID(t.c_r('AID')),
                        (a.AppID = t.eVar20);
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar14', type: 'value', value: '%siteSubsection (QP)%' },
                      {
                        name: 'eVar20',
                        type: 'value',
                        value: 'NFL %appName% %appNumber% (%appBuild%)',
                      },
                      { name: 'eVar24', type: 'value', value: 'mobile webview' },
                      { name: 'eVar25', type: 'value', value: '%reportSuite (QP)%' },
                      { name: 'eVar33', type: 'value', value: '%siteName (JS)%' },
                    ],
                    props: [
                      { name: 'prop2', type: 'value', value: '%siteSubsection (QP)%' },
                      { name: 'prop12', type: 'value', value: 'mobile webview' },
                      { name: 'prop22', type: 'value', value: '%reportSuite (QP)%' },
                      {
                        name: 'prop25',
                        type: 'value',
                        value: 'NFL %appName% %appNumber% (%appBuild%)',
                      },
                      { name: 'prop33', type: 'value', value: '%siteName (JS)%' },
                    ],
                  },
                },
              },
            ],
          },
          {
            id: 'RLd00848c5a96940a7b733365da1c9d957',
            name: 'Virtual Page View Direct Call Rule - JEBBIT QUIZ COMPLETE',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'virtual_pv' },
                ruleOrder: 1,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'contains', caseInsensitive: !0 },
                  leftOperand: '%siteName (JS)%',
                  rightOperand: 'Jebbit',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%quiz_complete%',
                  rightOperand: 'true',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: { source: function () {} },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar14', type: 'value', value: '%siteSubsection%' },
                      { name: 'eVar24', type: 'value', value: '%optimizedFor%' },
                      { name: 'eVar26', type: 'value', value: '%gameID%' },
                      { name: 'eVar27', type: 'value', value: '%hashedEmail%' },
                      { name: 'eVar28', type: 'value', value: '%gigyaUID%' },
                      { name: 'eVar29', type: 'value', value: '%favoritePlayers%' },
                      { name: 'eVar33', type: 'value', value: '%siteName (JS)%' },
                      { name: 'eVar37', type: 'value', value: '%identityProvider%' },
                      { name: 'eVar38', type: 'value', value: '%favoriteTeam%' },
                      { name: 'eVar83', type: 'value', value: '%pageDetail%' },
                      { name: 'eVar88', type: 'value', value: '%partner%' },
                      { name: 'eVar90', type: 'value', value: '%hashedProfileID%' },
                      { name: 'eVar94', type: 'value', value: '%pageState%' },
                      { name: 'eVar100', type: 'value', value: '%gameState%' },
                    ],
                    props: [
                      { name: 'prop2', type: 'value', value: '%siteSubsection%' },
                      { name: 'prop8', type: 'value', value: '%siteSection%' },
                      { name: 'prop12', type: 'value', value: '%optimizedFor%' },
                      { name: 'prop33', type: 'value', value: '%siteName (JS)%' },
                      { name: 'prop63', type: 'value', value: '%identityProvider%' },
                      { name: 'prop67', type: 'value', value: '%pageDetail%' },
                    ],
                    events: [{ name: 'event32' }],
                  },
                },
              },
            ],
          },
          {
            id: 'RL374bcc09fa2e44c1b60af077193263ca',
            name: 'Virtual Page View Direct Call Rule - UPDATED',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'virtual_pv' },
                ruleOrder: 2,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'doesNotContain', caseInsensitive: !0 },
                  leftOperand: '%siteName (JS)%',
                  rightOperand: 'Jebbit',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.eVar2 = e.detail.pageName),
                        (t.eVar3 = e.detail.siteSection),
                        (t.prop8 = e.detail.siteSection),
                        (t.eVar14 = e.detail.siteSubsection),
                        (t.prop2 = e.detail.siteSubsection),
                        (t.eVar24 = e.detail.optimizedFor),
                        (t.prop12 = e.detail.optimizedFor),
                        (t.evar26 = e.detail.gameID),
                        (t.eVar27 = e.detail.hashedEmail),
                        (t.eVar28 = e.detail.gigyaUID),
                        (t.eVar29 = e.detail.favoritePlayers),
                        (t.eVar33 = e.detail.siteName),
                        (t.prop33 = e.detail.siteName),
                        (t.eVar37 = e.detail.identityProvider),
                        (t.prop63 = e.detail.identityProvider),
                        (t.eVar38 = e.detail.favoriteTeam),
                        (t.eVar83 = e.detail.pageDetail),
                        (t.prop67 = e.detail.pageDetail),
                        (t.eVar88 = e.detail.partner),
                        (t.eVar90 = e.detail.hashedProfileID),
                        (t.eVar94 = e.detail.pageState),
                        (t.linkTrackVars = t.apl(
                          t.linkTrackVars,
                          'eVar2,eVar3,eVar14,eVar24,eVar26,eVar27,eVar28,eVar29,eVar33,eVar37,eVar38,eVar83,eVar88,eVar90,eVar94,prop2,prop8,prop12,prop33,prop63,prop67',
                          ',',
                          2
                        )),
                        sessionStorage.setItem('virtualPV', 'true');
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar14', type: 'value', value: '%event.detail.siteSubsection%' },
                      { name: 'eVar24', type: 'value', value: '%event.detail.optimizedFor%' },
                      { name: 'eVar26', type: 'value', value: '%event.detail.gameID%' },
                      { name: 'eVar27', type: 'value', value: '%event.detail.hashedEmail%' },
                      { name: 'eVar28', type: 'value', value: '%event.detail.gigyaUID%' },
                      { name: 'eVar29', type: 'value', value: '%event.detail.favoritePlayers%' },
                      { name: 'eVar33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'eVar37', type: 'value', value: '%event.detail.identityProvider%' },
                      { name: 'eVar38', type: 'value', value: '%event.detail.favoriteTeam%' },
                      { name: 'eVar83', type: 'value', value: '%event.detail.pageDetail%' },
                      { name: 'eVar88', type: 'value', value: '%event.detail.partner%' },
                      { name: 'eVar90', type: 'value', value: '%event.detail.hashedProfileID%' },
                      { name: 'eVar94', type: 'value', value: '%event.detail.pageState%' },
                      { name: 'eVar100', type: 'value', value: '%event.detail.gameState%' },
                    ],
                    props: [
                      { name: 'prop2', type: 'value', value: '%event.detail.siteSubsection%' },
                      { name: 'prop8', type: 'value', value: '%event.detail.siteSection%' },
                      { name: 'prop12', type: 'value', value: '%event.detail.optimizedFor%' },
                      { name: 'prop33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'prop63', type: 'value', value: '%event.detail.identityProvider%' },
                      { name: 'prop67', type: 'value', value: '%event.detail.pageDetail%' },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL94ca32e8e2644e8ab0e75a235d99ffad',
            name: 'Photo Album Direct Call Rule',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'photo_album' },
                ruleOrder: 5,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar3', type: 'value', value: '%event.detail.siteSection%' },
                      { name: 'eVar12', type: 'value', value: '%event.detail.galleryName%' },
                      { name: 'eVar14', type: 'value', value: '%event.detail.siteSubsection%' },
                      { name: 'eVar33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'eVar83', type: 'value', value: '%event.detail.pageDetail%' },
                      { name: 'eVar94', type: 'value', value: '%event.detail.pageState%' },
                    ],
                    props: [
                      { name: 'prop2', type: 'value', value: '%event.detail.siteSubsection%' },
                      { name: 'prop8', type: 'value', value: '%event.detail.siteSection%' },
                      { name: 'prop14', type: 'value', value: '%event.detail.photoName%' },
                      { name: 'prop15', type: 'value', value: '%event.detail.galleryID%' },
                      { name: 'prop16', type: 'value', value: '%event.detail.galleryName%' },
                      { name: 'prop33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'prop67', type: 'value', value: '%event.detail.pageDetail%' },
                    ],
                    events: [{ name: 'event44' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'photo view', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL996bd4baec57401280952aa98d6a66ce',
            name: 'Parsely Global Rule',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'parse.ly-analytics/src/lib/actions/initializeParseLyTracker.js',
                settings: {},
              },
            ],
          },
          {
            id: 'RL9de5784df6a44ae3ad8da13ec669b0fa',
            name: 'Search Event on Page View',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 15 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%siteSection%',
                  rightOperand: 'search',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTruthy' },
                  leftOperand: '%searchTerm (QP)%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar5', type: 'value', value: '%searchTerm (QP)%' }],
                    props: [
                      { name: 'prop7', type: 'value', value: '%searchResultsReturned%' },
                      { name: 'prop34', type: 'value', value: '%searchPagination%' },
                    ],
                    events: [{ name: 'event2' }],
                  },
                },
              },
            ],
          },
          {
            id: 'RLa03d6fcbe0b74334bc329cd2c23ac756',
            name: 'Target Global Rule',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 20 },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-target-v2/lib/loadTarget.js', settings: {} },
              {
                modulePath: 'adobe-target-v2/lib/addParams.js',
                settings: { params: { 'entity.id': { value: '%articleID%', checked: !0 } } },
              },
              {
                modulePath: 'adobe-target-v2/lib/firePageLoad.js',
                settings: { bodyHiddenStyle: 'body {opacity: 0}', bodyHidingEnabled: !0 },
              },
            ],
          },
          {
            id: 'RLb5604c091226459b832b9c80e2a9f091',
            name: 'Page View Event',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 100 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: {} },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RLf2279ea656ac404cb5589be2acb45fda',
            name: 'Search Event Direct Call Rule',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'search' },
                ruleOrder: 15,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%siteSection%',
                  rightOperand: 'search',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTruthy' },
                  leftOperand: '%searchTerm (QP)%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar5', type: 'value', value: '%event.detail.searchTerm%' },
                      { name: 'eVar16', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'eVar17', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'eVar18', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'eVar91', type: 'value', value: '%event.detail.linkURL%' },
                      { name: 'eVar92', type: 'value', value: '%event.detail.linkPosition%' },
                    ],
                    props: [
                      {
                        name: 'prop7',
                        type: 'value',
                        value: '%event.detail.searchResultsReturned%',
                      },
                      { name: 'prop34', type: 'value', value: '%event.detail.searchPagination%' },
                      { name: 'prop57', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'prop58', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'prop59', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'prop60', type: 'value', value: '%event.detail.linkURL%' },
                    ],
                    events: [{ name: 'event2' }, { name: 'event62' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'search', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RLe2b5d974c51042ccabb796ced92dabea',
            name: 'Marketing Cloud ID Customer IDs',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 35 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-mcid/src/lib/actions/setCustomerIds.js',
                settings: {
                  customerIds: [
                    {
                      value: '%hashedProfileID (Cookie)%',
                      hashType: '',
                      authState: 1,
                      integrationCode: 'nfl_hashed_id',
                    },
                    {
                      value: '%hashedEmail (Cookie)%',
                      hashType: '',
                      authState: 1,
                      integrationCode: 'nflhash',
                    },
                    {
                      value: '%gigyaUID (Cookie)%',
                      hashType: '',
                      authState: 1,
                      integrationCode: 'Gigiya',
                    },
                    {
                      value: '%hashedEmail (Cookie)%',
                      hashType: '',
                      authState: 1,
                      integrationCode: 'AdobeCampaignID',
                    },
                    {
                      value: '%hashedEmail (Cookie)%',
                      hashType: '',
                      authState: 1,
                      integrationCode: 'triggers',
                    },
                  ],
                },
              },
            ],
          },
          {
            id: 'RL1cf0e31027d04779a03ff2bc90236bc8',
            name: '3P - Floodlight - NFL Apps Page (Google)',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:apps:apps:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\n Start of Floodlight Tag: Please do not remove\n Activity name of this tag: 2019_7_NFL_Fantasy Football Homepage\n URL of the webpage where the tag is expected to be placed: http://fantasy.nfl.com\n This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\n Creation Date: 07/19/2019\n -->\n <img src="https://ad.doubleclick.net/ddm/activity/src=1268402;type=apppa0;cat=2019_000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[Random Number]?" width="1" height="1" alt=""/>\n <!-- End of Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL2322863977284232a2df5ee55aa825dc',
            name: '3P - Yahoo Analytics - Network Preseason Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:network:events:preseason',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<img src="https://sp.analytics.yahoo.com/spp.pl?a=10000&.yp=10085797"/>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL32f3ff6d9bde4a65a9f6026123c589f3',
            name: '3P - Twitter - Account Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:account:account:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);\n},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',\na=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');\n// Insert Twitter Pixel ID and Standard Event data below\ntwq('init','o3ckj');\ntwq('track','PageView');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL3470710112584e349eba7ca3b0634498',
            name: '3P - Floodlight - Ways To Watch Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:ways-to-watch:ways-to-watch:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\n Start of Floodlight Tag: Please do not remove\n Activity name of this tag: 2019_7_NFL_Fantasy Football Homepage\n URL of the webpage where the tag is expected to be placed: http://fantasy.nfl.com\n This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\n Creation Date: 07/19/2019\n -->\n <img src="https://ad.doubleclick.net/ddm/activity/src=1268402;type=wayst0;cat=2019_0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[Random Number]?" width="1" height="1" alt=""/>\n <!-- End of Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL47d81412f1a0443b9aeef6872bfba37b',
            name: '3P - Floodlight - News Section Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:news:news:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\n Start of Floodlight Tag: Please do not remove\n Activity name of this tag: 2019_7_NFL_Fantasy Football Homepage\n URL of the webpage where the tag is expected to be placed: http://fantasy.nfl.com\n This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\n Creation Date: 07/19/2019\n -->\n <img src="https://ad.doubleclick.net/ddm/activity/src=1268402;type=homep0;cat=2019_001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[Random Number]?" width="1" height="1" alt=""/>\n <!-- End of Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL48ce8b4d435a423b8bcc2adb5e491e55',
            name: '3P - Facebook - Account Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:account:account:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    "!function(f,b,e,v,n,t,s) \n{if(f.fbq)return;n=f.fbq=function(){n.callMethod? \nn.callMethod.apply(n,arguments):n.queue.push(arguments)}; \nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; \nn.queue=[];t=b.createElement(e);t.async=!0; \nt.src=v;s=b.getElementsByTagName(e)[0]; \ns.parentNode.insertBefore(t,s)}(window, document,'script', \n'https://connect.facebook.net/en_US/fbevents.js'); \nfbq('init', '265163127283621'); \nfbq('track', 'PageView');\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL510724b802874c0ea3e089a598d68c6f',
            name: '3P - Floodlight - NFL Apps Page (Android Install)',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:apps:apps:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://1268402.fls.doubleclick.net/activityi;src=1268402;type=kocha0;cat=2019_00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL518f72ce14ce42a0a34d514bc689c4db',
            name: '3P - Facebook - Scores Section Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'startsWith' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:scores:games list:',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    "!function(f,b,e,v,n,t,s) \n{if(f.fbq)return;n=f.fbq=function(){n.callMethod? \nn.callMethod.apply(n,arguments):n.queue.push(arguments)}; \nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; \nn.queue=[];t=b.createElement(e);t.async=!0; \nt.src=v;s=b.getElementsByTagName(e)[0]; \ns.parentNode.insertBefore(t,s)}(window, document,'script', \n'https://connect.facebook.net/en_US/fbevents.js'); \nfbq('init', '265163127283621'); \nfbq('track', 'PageView');\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL610d67ed124e4e31b5bb2ab5093c7114',
            name: '3P - Yahoo Analytics - Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:home:home:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<img src="https://sp.analytics.yahoo.com/spp.pl?a=10000&.yp=10085727"/>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL6e2009f8a45a4e778f42b3add418a976',
            name: '3P - Twitter - Network Preseason Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:network:events:preseason',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);\n},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',\na=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');\n// Insert Twitter Pixel ID and Standard Event data below\ntwq('init','o3ckj');\ntwq('track','PageView');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL711d73d7fb7f4259961c3e1a3758f4a6',
            name: '3P - Facebook - Network Preseason Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:network:events:preseason',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    "!function(f,b,e,v,n,t,s) \n{if(f.fbq)return;n=f.fbq=function(){n.callMethod? \nn.callMethod.apply(n,arguments):n.queue.push(arguments)}; \nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; \nn.queue=[];t=b.createElement(e);t.async=!0; \nt.src=v;s=b.getElementsByTagName(e)[0]; \ns.parentNode.insertBefore(t,s)}(window, document,'script', \n'https://connect.facebook.net/en_US/fbevents.js'); \nfbq('init', '265163127283621'); \nfbq('track', 'PageView');\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL7fe14a708a6445e89b4eee61e8863c54',
            name: '3P - Floodlight - NFL Apps Page (Apple)',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:apps:apps:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\n Start of Floodlight Tag: Please do not remove\n Activity name of this tag: 2019_7_NFL_Fantasy Football Homepage\n URL of the webpage where the tag is expected to be placed: http://fantasy.nfl.com\n This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\n Creation Date: 07/19/2019\n -->\n <img src="https://ad.doubleclick.net/ddm/activity/src=1268402;type=apppa0;cat=2019_00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[Random Number]?" width="1" height="1" alt=""/>\n <!-- End of Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL8b739208c4a04944873196e357ad4058',
            name: '3P - Twitter - Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:home:home:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);\n},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',\na=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');\n// Insert Twitter Pixel ID and Standard Event data below\ntwq('init','o3ckj');\ntwq('track','PageView');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL926c85c2ccd643eb997e538d5acb002f',
            name: '3P - Google Ads - Global Tag',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 20 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- Global site tag (gtag.js) - Google Ads: 921490182 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-921490182\"></script>\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'AW-921490182');\n</script>",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL92c51eb6aefd4c47ab8425cadaa3bc34',
            name: '3P - Floodlight - NFL Apps Page (iOS Install)',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:apps:apps:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://1268402.fls.doubleclick.net/activityi;src=1268402;type=kocha0;cat=2019_0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL95a7f0937e114ef38ff363798607fed1',
            name: '3P - Floodlight - Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:home:home:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\n Start of Floodlight Tag: Please do not remove\n Activity name of this tag: 2019_7_NFL_Fantasy Football Homepage\n URL of the webpage where the tag is expected to be placed: http://fantasy.nfl.com\n This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\n Creation Date: 07/19/2019\n -->\n <img src="https://ad.doubleclick.net/ddm/activity/src=1268402;type=login0;cat=2019_0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[Random Number]?" width="1" height="1" alt=""/>\n <!-- End of Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL99a5e54fb30f4b7ca9d68c3d02a5b372',
            name: '3P - Facebook - News Section Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:news:news:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    "!function(f,b,e,v,n,t,s) \n{if(f.fbq)return;n=f.fbq=function(){n.callMethod? \nn.callMethod.apply(n,arguments):n.queue.push(arguments)}; \nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; \nn.queue=[];t=b.createElement(e);t.async=!0; \nt.src=v;s=b.getElementsByTagName(e)[0]; \ns.parentNode.insertBefore(t,s)}(window, document,'script', \n'https://connect.facebook.net/en_US/fbevents.js'); \nfbq('init', '265163127283621'); \nfbq('track', 'PageView');\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLad11ea6af69140f3b9ba361dab19eaff',
            name: '3P - Twitter - Scores Section Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'startsWith' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:scores:games list:',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);\n},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',\na=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');\n// Insert Twitter Pixel ID and Standard Event data below\ntwq('init','o3ckj');\ntwq('track','PageView');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb4c392c6732f44d3b426025a3ce89067',
            name: '3P - Twitter - News Section Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:news:news:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);\n},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',\na=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');\n// Insert Twitter Pixel ID and Standard Event data below\ntwq('init','o3ckj');\ntwq('track','PageView');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb4da043732184c10993d041a024b9308',
            name: '3P - Facebook - Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:home:home:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    "!function(f,b,e,v,n,t,s) \n{if(f.fbq)return;n=f.fbq=function(){n.callMethod? \nn.callMethod.apply(n,arguments):n.queue.push(arguments)}; \nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; \nn.queue=[];t=b.createElement(e);t.async=!0; \nt.src=v;s=b.getElementsByTagName(e)[0]; \ns.parentNode.insertBefore(t,s)}(window, document,'script', \n'https://connect.facebook.net/en_US/fbevents.js'); \nfbq('init', '265163127283621'); \nfbq('track', 'PageView');\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLcc58d456a0974346b86debf33cfab6eb',
            name: '3P - Floodlight - Account Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:account:account:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\n Start of Floodlight Tag: Please do not remove\n Activity name of this tag: 2019_7_NFL_Fantasy Football Homepage\n URL of the webpage where the tag is expected to be placed: http://fantasy.nfl.com\n This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\n Creation Date: 07/19/2019\n -->\n <img src="https://ad.doubleclick.net/ddm/activity/src=1268402;type=homep0;cat=2019_00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[Random Number]?" width="1" height="1" alt=""/>\n <!-- End of Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLcda0a89bc65b43848a7e301a70a18935',
            name: '3P - Floodlight - Network Preseason Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:network:events:preseason',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\n Start of Floodlight Tag: Please do not remove\n Activity name of this tag: 2019_7_NFL_Fantasy Football Homepage\n URL of the webpage where the tag is expected to be placed: http://fantasy.nfl.com\n This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\n Creation Date: 07/19/2019\n -->\n <img src="https://ad.doubleclick.net/ddm/activity/src=1268402;type=homep0;cat=2019_002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[Random Number]?" width="1" height="1" alt=""/>\n <!-- End of Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLd427a1f4c36a428189b51a9596132b63',
            name: '3P - Floodlight - NFL Apps Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:apps:apps:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\n Start of Floodlight Tag: Please do not remove\n Activity name of this tag: 2019_7_NFL_Fantasy Football Homepage\n URL of the webpage where the tag is expected to be placed: http://fantasy.nfl.com\n This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\n Creation Date: 07/19/2019\n -->\n <img src="https://ad.doubleclick.net/ddm/activity/src=1268402;type=apppa0;cat=2019_0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[Random Number]?" width="1" height="1" alt=""/>\n <!-- End of Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLe425f050d48b444ab2a5efeabf1d7487',
            name: '3P - Google Campaign - Pro Bowl Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:pro-bowl:pro-bowl:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    " <!-- Global site tag (gtag.js) - Google Marketing Platform -->\n <script async src=\"https://www.googletagmanager.com/gtag/js?id=DC-1268402\"></script>\n <script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n \n  gtag('config', 'DC-1268402');\n </script>\n",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLefb3be01edd84cf7ad1d95c10f5457dc',
            name: '3P - Floodlight - Scores Section Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'startsWith' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:scores:games list:',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--\n Start of Floodlight Tag: Please do not remove\n Activity name of this tag: 2019_7_NFL_Fantasy Football Homepage\n URL of the webpage where the tag is expected to be placed: http://fantasy.nfl.com\n This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\n Creation Date: 07/19/2019\n -->\n <img src="https://ad.doubleclick.net/ddm/activity/src=1268402;type=homep0;cat=2019_000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[Random Number]?" width="1" height="1" alt=""/>\n <!-- End of Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL89aad7eb76524230b1ed55fc7628d095',
            name: 'Virtual Page View Direct Call Rule - JEBBIT',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'virtual_pv' },
                ruleOrder: 2,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'contains', caseInsensitive: !0 },
                  leftOperand: '%siteName (JS)%',
                  rightOperand: 'Jebbit',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: { source: function () {} },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar14', type: 'value', value: '%siteSubsection%' },
                      { name: 'eVar24', type: 'value', value: '%optimizedFor%' },
                      { name: 'eVar26', type: 'value', value: '%gameID%' },
                      { name: 'eVar27', type: 'value', value: '%hashedEmail%' },
                      { name: 'eVar28', type: 'value', value: '%gigyaUID%' },
                      { name: 'eVar29', type: 'value', value: '%favoritePlayers%' },
                      { name: 'eVar33', type: 'value', value: '%siteName (JS)%' },
                      { name: 'eVar37', type: 'value', value: '%identityProvider%' },
                      { name: 'eVar38', type: 'value', value: '%favoriteTeam%' },
                      { name: 'eVar83', type: 'value', value: '%pageDetail%' },
                      { name: 'eVar88', type: 'value', value: '%partner%' },
                      { name: 'eVar90', type: 'value', value: '%hashedProfileID%' },
                      { name: 'eVar94', type: 'value', value: '%pageState%' },
                      { name: 'eVar100', type: 'value', value: '%gameState%' },
                    ],
                    props: [
                      { name: 'prop2', type: 'value', value: '%siteSubsection%' },
                      { name: 'prop8', type: 'value', value: '%siteSection%' },
                      { name: 'prop12', type: 'value', value: '%optimizedFor%' },
                      { name: 'prop33', type: 'value', value: '%siteName (JS)%' },
                      { name: 'prop63', type: 'value', value: '%identityProvider%' },
                      { name: 'prop67', type: 'value', value: '%pageDetail%' },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL0ed84f29d56d4101828e2bcd3a457f39',
            name: '3P - NFL UK One Tag - Global Tag',
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
                    "var ft_onetag_9960 = {\n    ft_vars:{\n        \"ftXRef\":\"\",\n        \"ftXValue\":\"\",\n        \"ftXType\":\"\",\n        \"ftXName\":\"\",\n        \"ftXNumItems\":\"\",\n        \"ftXCurrency\":\"\"\n        },\n\n    ot_dom:'https://servedby.flashtalking.com',\n    ot_path:'/container/10395;95757;9960;iframe/?',\n    ot_href:'ft_referrer='+escape(document.location.href),\n    ot_rand:Math.random()*1000000,\n    ot_ref:document.referrer,\n    ot_init:function(){\n        var o=this,qs='',count=0,ns='';\n        for(var key in o.ft_vars){\n            qs+=(o.ft_vars[key]==''?'':key+'='+o.ft_vars[key]+'&');\n        }\n        count=o.ot_path.length+qs.length+o.ot_href+escape(o.ot_ref).length;\n        ns=o.ot_ns(count-2000);\n        document.write('<iframe style=\"position:absolute; visibility:hidden; width:1px; height:1px;\" src=\"'+o.ot_dom+o.ot_path+qs+o.ot_href+'&ns='+ns+'&cb='+o.ot_rand+'\"></iframe>');\n    },\n    ot_ns:function(diff){\n        if(diff>0){\n            var o=this,qo={},\n                sp=/(?:^|&)([^&=]*)=?([^&]*)/g,\n                fp=/^(http[s]?):\\/\\/?([^:\\/\\s]+)\\/([\\w\\.]+[^#?\\s]+)(.*)?/.exec(o.ot_ref),\n                ro={h:fp[2],p:fp[3],qs:fp[4].replace(sp,function(p1,p2,p3){if(p2)qo[p2]=[p3]})};\n            return escape(ro.h+ro.p.substring(0,10)+(qo.q?'?q='+unescape(qo.q):'?p='+unescape(qo.p)));\n        }else{\n            var o=this;\n            return escape(unescape(o.ot_ref));\n        }\n            }\n    }\nft_onetag_9960.ot_init();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL4abf7f8cec0e48509b0c6233e3c7eeb7',
            name: '3P - Crucial Catch Tags - Crucial Catch Section',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:causes:crucial-catch:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<img src=\"https://sp.analytics.yahoo.com/spp.pl?a=10000&.yp=10122782&ec=cclp\"/>\n\n<!-- Facebook Pixel Code --><script> !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '265163127283621'); fbq('track', 'PageView');</script>\n\n<script>\n  (function() {\n    var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;\n    ta.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=BTRL0K8RQH54JI5RHAM0';\n    var s = document.getElementsByTagName('script')[0];\n    s.parentNode.insertBefore(ta, s);\n  })();\n</script>\n",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL8d208f0bd7d343e3b31008c47a258ec1',
            name: '3P - Crucial Catch Tags - Find Cancer Early',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  elementProperties: [
                    { name: 'data-link_name', value: '1st CTA FIND CANCER EARLY' },
                  ],
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:causes:crucial-catch:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/a5ea4e8f4344/1648c62d3986/508d26d6a164/RCb86159495a9446fcacef799fddaf4ad9-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9ae14ef0a738485d949f9d930eb29d36',
            name: '3P - Crucial Catch Tags - Game Schedule',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  elementProperties: [
                    {
                      name: 'data-link_name',
                      value: 'crucial-catch-game-schedule Crucial Catch - Game Schedule',
                    },
                  ],
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:causes:crucial-catch:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/a5ea4e8f4344/1648c62d3986/508d26d6a164/RC0ea8b92f0f58458ea66e849a4135ee61-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9e0af11f32684011ae59ce88f4ba1383',
            name: '3P - Crucial Catch Tags - Defender Tool',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  elementProperties: [{ name: 'data-link_name', value: '1st CTA TAKE THE QUIZ' }],
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:causes:crucial-catch:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/a5ea4e8f4344/1648c62d3986/508d26d6a164/RC4cf7f200195944a6b4bcb42f62263b4e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc0cdfc84896441c2949ef621437597ec',
            name: '3P - Crucial Catch Tags - See Survival Rates',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  elementProperties: [
                    { name: 'data-link_name', value: '1st CTA SEE SURVIVAL RATES' },
                  ],
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:causes:crucial-catch:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/a5ea4e8f4344/1648c62d3986/508d26d6a164/RCf80c23fc72084cbabbeba5e5d8a17698-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLffd14da75d754ceb81127bb6d971686b',
            name: '3P - Crucial Catch Tags - Screening Info',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  elementProperties: [
                    {
                      name: 'data-link_name',
                      value:
                        'crucial-catch-national-cancer-information-hotline Crucial Catch - National Cancer Information Hotline',
                    },
                  ],
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%pageName%',
                  rightOperand: 'nfl.com:causes:crucial-catch:landing',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/a5ea4e8f4344/1648c62d3986/508d26d6a164/RCaad5636cedcd4da193ee3bf156e2313f-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb91175172a9e4ca987248d11c2d158fb',
            name: '3P - Genius Sports - Home Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%siteSection%',
                  rightOperand: 'home',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script src="https://us.connextra.com/dcs/tagController/tag/11935e1e2233/homepage" async defer></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL6213c55780224e56bd54355f513722d8',
            name: 'Virtual Page View Direct Call Rule - UPDATED QUIZ COMPLETE',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'virtual_pv' },
                ruleOrder: 2,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'doesNotContain', caseInsensitive: !0 },
                  leftOperand: '%siteName (JS)%',
                  rightOperand: 'Jebbit',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%quiz_complete%',
                  rightOperand: 'true',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.eVar2 = e.detail.pageName),
                        (t.eVar3 = e.detail.siteSection),
                        (t.prop8 = e.detail.siteSection),
                        (t.eVar14 = e.detail.siteSubsection),
                        (t.prop2 = e.detail.siteSubsection),
                        (t.eVar24 = e.detail.optimizedFor),
                        (t.prop12 = e.detail.optimizedFor),
                        (t.evar26 = e.detail.gameID),
                        (t.eVar27 = e.detail.hashedEmail),
                        (t.eVar28 = e.detail.gigyaUID),
                        (t.eVar29 = e.detail.favoritePlayers),
                        (t.eVar33 = e.detail.siteName),
                        (t.prop33 = e.detail.siteName),
                        (t.eVar37 = e.detail.identityProvider),
                        (t.prop63 = e.detail.identityProvider),
                        (t.eVar38 = e.detail.favoriteTeam),
                        (t.eVar83 = e.detail.pageDetail),
                        (t.prop67 = e.detail.pageDetail),
                        (t.eVar88 = e.detail.partner),
                        (t.eVar90 = e.detail.hashedProfileID),
                        (t.eVar94 = e.detail.pageState),
                        (t.linkTrackVars = t.apl(
                          t.linkTrackVars,
                          'eVar2,eVar3,eVar14,eVar24,eVar26,eVar27,eVar28,eVar29,eVar33,eVar37,eVar38,eVar83,eVar88,eVar90,eVar94,prop2,prop8,prop12,prop33,prop63,prop67',
                          ',',
                          2
                        )),
                        sessionStorage.setItem('virtualPV', 'true');
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar14', type: 'value', value: '%event.detail.siteSubsection%' },
                      { name: 'eVar24', type: 'value', value: '%event.detail.optimizedFor%' },
                      { name: 'eVar26', type: 'value', value: '%event.detail.gameID%' },
                      { name: 'eVar27', type: 'value', value: '%event.detail.hashedEmail%' },
                      { name: 'eVar28', type: 'value', value: '%event.detail.gigyaUID%' },
                      { name: 'eVar29', type: 'value', value: '%event.detail.favoritePlayers%' },
                      { name: 'eVar33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'eVar37', type: 'value', value: '%event.detail.identityProvider%' },
                      { name: 'eVar38', type: 'value', value: '%event.detail.favoriteTeam%' },
                      { name: 'eVar83', type: 'value', value: '%event.detail.pageDetail%' },
                      { name: 'eVar88', type: 'value', value: '%event.detail.partner%' },
                      { name: 'eVar90', type: 'value', value: '%event.detail.hashedProfileID%' },
                      { name: 'eVar94', type: 'value', value: '%event.detail.pageState%' },
                      { name: 'eVar100', type: 'value', value: '%event.detail.gameState%' },
                    ],
                    props: [
                      { name: 'prop2', type: 'value', value: '%event.detail.siteSubsection%' },
                      { name: 'prop8', type: 'value', value: '%event.detail.siteSection%' },
                      { name: 'prop12', type: 'value', value: '%event.detail.optimizedFor%' },
                      { name: 'prop33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'prop63', type: 'value', value: '%event.detail.identityProvider%' },
                      { name: 'prop67', type: 'value', value: '%event.detail.pageDetail%' },
                    ],
                    events: [{ name: 'event32' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RLab878d79b18246038833ec0e686a0780',
            name: 'Click Action Direct Call Rule QUIZ COMPLETE',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'click_action' },
                ruleOrder: 5,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%event.detail.quiz_complete%',
                  rightOperand: 'true',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar16', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'eVar17', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'eVar18', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'eVar33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'eVar91', type: 'value', value: '%event.detail.linkURL%' },
                      { name: 'eVar92', type: 'value', value: '%event.detail.linkPosition%' },
                    ],
                    props: [
                      { name: 'prop33', type: 'value', value: '%event.detail.siteName%' },
                      { name: 'prop57', type: 'value', value: '%event.detail.linkModule%' },
                      { name: 'prop58', type: 'value', value: '%event.detail.linkType%' },
                      { name: 'prop59', type: 'value', value: '%event.detail.linkName%' },
                      { name: 'prop60', type: 'value', value: '%event.detail.linkURL%' },
                    ],
                    events: [{ name: 'event62' }, { name: 'event32' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'click action', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
        ],
      });
    var $___var_8979935ffe10cee5 = (function () {
      const $___old_d4e2c4c68c52698a = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_d4e2c4c68c52698a)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_47c01efa79e9f191.userAgent
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
          function u (e) {
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
                      return void c(a.promise, n);
                    }
                    s(a.promise, t);
                  } else (1 === r._state ? s : c)(a.promise, r._value);
                }))
              : r._deferreds.push(a);
          }
          function s (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof i) return (e._state = 3), (e._value = t), void l(e);
                if ('function' == typeof n) return void f(a(n, t), e);
              }
              (e._state = 1), (e._value = t), l(e);
            } catch (r) {
              c(e, r);
            }
          }
          function c (e, t) {
            (e._state = 2), (e._value = t), l(e);
          }
          function l (e) {
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
                  n || ((n = !0), c(t, e));
                }
              );
            } catch (r) {
              if (n) return;
              (n = !0), c(t, r);
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
          function g (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var m = function (e) {
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
              v = 'debug',
              h = function (t, e) {
                var n = function () {
                    return 'true' === t.getItem(v);
                  },
                  r = function (e) {
                    t.setItem(v, e);
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
              b = 'Module did not export a function.',
              y = function (i, o) {
                return function (e, t, n) {
                  n = n || [];
                  var r = i.getModuleExports(e.modulePath);
                  if ('function' != typeof r) throw new Error(b);
                  var a = o(e.settings || {}, t);
                  return r.bind(null, a).apply(null, n);
                };
              },
              _ = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              C = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              S = '\uD83D\uDE80',
              P =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : S,
              w = !1,
              E = function (e) {
                if (w && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(P),
                    e !== C.DEBUG || window.console[e] || (e = C.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              T = E.bind(null, C.LOG),
              k = E.bind(null, C.INFO),
              I = E.bind(null, C.DEBUG),
              V = E.bind(null, C.WARN),
              D = E.bind(null, C.ERROR),
              x = {
                log: T,
                info: k,
                debug: I,
                warn: V,
                error: D,
                get outputEnabled () {
                  return w;
                },
                set outputEnabled (e) {
                  w = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: T.bind(null, t),
                    info: k.bind(null, t),
                    debug: I.bind(null, t),
                    warn: V.bind(null, t),
                    error: D.bind(null, t),
                  };
                },
              },
              j = e(function (r) {
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
                  function l (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (u) {
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
                        (t = u.write
                          ? u.write(t, e)
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
                            var s = l(i[0]);
                            if (((o = (u.read || u)(o, s) || l(o)), t))
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
              A = { get: j.get, set: j.set, remove: j.remove },
              O = window,
              L = 'com.adobe.reactor.',
              M = function (r, e) {
                var a = L + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_9462148ead14da7d = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_9462148ead14da7d)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return O[r].getItem(a + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_9462148ead14da7d)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_9462148ead14da7d
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_5913c2b8311eb596 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_5913c2b8311eb596)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return O[r].setItem(a + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_5913c2b8311eb596)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_5913c2b8311eb596
                        ));
                    }
                  },
                };
              },
              N = '_sdsat_',
              R = 'dataElements.',
              F = 'dataElementCookiesMigrated',
              q = M('localStorage'),
              U = M('sessionStorage', R),
              B = M('localStorage', R),
              H = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              G = {},
              z = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              J = function (e, t, n) {
                var r;
                switch (t) {
                  case H.PAGEVIEW:
                    return void (G[e] = n);
                  case H.SESSION:
                    return void ((r = z(n)) && U.setItem(e, r));
                  case H.VISITOR:
                    return void ((r = z(n)) && B.setItem(e, r));
                }
              },
              Y = function (e, t) {
                var n = A.get(N + e);
                n !== undefined && J(e, t, n);
              },
              W = {
                setValue: J,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case H.PAGEVIEW:
                      return G.hasOwnProperty(e) ? G[e] : null;
                    case H.SESSION:
                      return null === (n = U.getItem(e)) ? n : JSON.parse(n);
                    case H.VISITOR:
                      return null === (n = B.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  q.getItem(F) ||
                    (Object.keys(t).forEach(function (e) {
                      Y(e, t[e].storageDuration);
                    }),
                    q.setItem(F, !0));
                },
              },
              Q = function (e, t, n, r) {
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
              $ = function (s, c, u, l) {
                return function (e, t) {
                  var n = c(e);
                  if (!n) return l ? '' : undefined;
                  var r,
                    a = n.storageDuration;
                  try {
                    r = s.getModuleExports(n.modulePath);
                  } catch (o) {
                    return void x.error(Q(n, e, o.message, o.stack));
                  }
                  if ('function' == typeof r) {
                    var i;
                    try {
                      i = r(u(n.settings, t), t);
                    } catch (o) {
                      return void x.error(Q(n, e, o.message, o.stack));
                    }
                    return (
                      a && (null != i ? W.setValue(e, a, i) : (i = W.getValue(e, a))),
                      null == i && null != n.defaultValue && (i = n.defaultValue),
                      'string' == typeof i &&
                        (n.cleanText && (i = _(i)), n.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  x.error(Q(n, e, 'Module did not export a function.'));
                };
              },
              K = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return _(e.textContent);
                },
              },
              X = function (e, t, n) {
                for (var r, a = e, i = 0, o = t.length; i < o; i++) {
                  if (null == a) return undefined;
                  var s = t[i];
                  if (n && '@' === s.charAt(0)) {
                    var c = s.slice(1);
                    a = K[c](a);
                  } else if (a.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var u = r[1];
                    a = a.getAttribute(u);
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
                      ? t && (n = X(t.element, r, !0))
                      : 'event' === a
                      ? t && (n = X(t, r))
                      : 'target' === a
                      ? t && (n = X(t.target, r))
                      : (n = X(i[a], r));
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
                        x.error(t);
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
                      (x.warn(
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
                  c,
                  u = [],
                  l = function (e, t, n) {
                    if (!a(t)) return e;
                    u.push(t);
                    var r = i(t, n);
                    return u.pop(), null == r && o ? '' : r;
                  };
                return (
                  (n = function (e, n) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? l(e, t[1], n)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return l(e, t, n);
                        });
                  }),
                  (r = function (e, t) {
                    for (var n = {}, r = Object.keys(e), a = 0; a < r.length; a++) {
                      var i = r[a],
                        o = e[i];
                      n[i] = c(o, t);
                    }
                    return n;
                  }),
                  (s = function (e, t) {
                    for (var n = [], r = 0, a = e.length; r < a; r++) n.push(c(e[r], t));
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
                    return 10 < u.length
                      ? (x.error('Data element circular reference detected: ' + u.join(' -> ')), e)
                      : c(e, t);
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
                      (s[t] = e), 0 == --c && a(s);
                    } catch (r) {
                      i(r);
                    }
                  }
                  if (!u(t)) return i(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(t);
                  if (0 === s.length) return a([]);
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
              (i.race = function (a) {
                return new i(function (e, t) {
                  if (!u(a)) return t(new TypeError('Promise.race accepts an array'));
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
              (i._unhandledRejectionFn = function wt (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || i['default'] || i,
              ue = function (u, n, r) {
                return function (s, t, c, e) {
                  return e.then(function () {
                    var i,
                      o = s.delayNext;
                    return new ce(function (e, t) {
                      var n = u(s, c, [c]);
                      if (!o) return e();
                      var r = s.timeout,
                        a = new ce(function (e, t) {
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
                      ce.race([n, a]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), r(s, t, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(i);
                      });
                  });
                };
              },
              le = function (c, n, r, a, u) {
                return function (o, t, s, e) {
                  return e.then(function () {
                    var i;
                    return new ce(function (e, t) {
                      var n = c(o, s, [s]),
                        r = o.timeout,
                        a = new ce(function (e, t) {
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
                      ce.race([n, a]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), a(o, t, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(i), !r(o, e))) return u(o, t), ce.reject();
                      });
                  });
                };
              },
              de = ce.resolve(),
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
              me = function (o, s, c, u) {
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
                        if (!s(n, a)) return c(n, e), !1;
                      } catch (i) {
                        return u(n, e, i), !1;
                      }
                    }
                  return !0;
                };
              },
              ge = function (n, r) {
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
              he = function (a) {
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
              be = function (s, c, u, l, d, f) {
                return function (n, e) {
                  var r = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var a = d(e);
                    c(t, null, [
                      function i (e) {
                        var t = u(a, e);
                        n(function () {
                          s(t, r);
                        });
                      },
                    ]);
                  } catch (o) {
                    f.error(l(t, r, o));
                  }
                };
              },
              ye = function (a, i, o, s) {
                return function (e, t, n) {
                  var r = i(e);
                  o.error(a(r, t.name, n)), s('ruleActionFailed', { rule: t, action: e });
                };
              },
              _e = function (a, i, o, s) {
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
              Se = function (t, n) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), n('ruleCompleted', { rule: e });
                };
              },
              Pe = function (i, o, s) {
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
              we = function (n, r, a, i) {
                return function (e, t) {
                  i('ruleTriggered', { rule: t }), n ? a(t, e) : r(t, e);
                };
              },
              Ee = function (e, t, n) {
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
              Te = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              ke = [],
              Ie = !1,
              Ve = function (e) {
                Ie ? e() : ke.push(e);
              },
              De = function (e, t, n) {
                e(t).forEach(function (e) {
                  n(Ve, e);
                }),
                  (Ie = !0),
                  ke.forEach(function (e) {
                    e();
                  }),
                  (ke = []);
              },
              xe = function (e) {
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
              je = Object.getOwnPropertySymbols,
              Ae = Object.prototype.hasOwnProperty,
              Oe = Object.prototype.propertyIsEnumerable,
              Le = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, r = p(e), a = 1; a < arguments.length; a++) {
                      for (var i in (t = Object(arguments[a]))) Ae.call(t, i) && (r[i] = t[i]);
                      if (je) {
                        n = je(t);
                        for (var o = 0; o < n.length; o++) Oe.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                      }
                    }
                    return r;
                  },
              Me = function (e, t) {
                return (
                  Le((t = t || {}), e),
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
              Ne = function (c, u) {
                return function (e, t) {
                  var n = c[e];
                  if (n) {
                    var r = n.modules;
                    if (r)
                      for (var a = Object.keys(r), i = 0; i < a.length; i++) {
                        var o = a[i],
                          s = r[o];
                        if (s.shared && s.name === t) return u.getModuleExports(o);
                      }
                  }
                };
              },
              Re = function (e, t) {
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
              qe = '.js',
              Ue = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Be = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              He = function (e, t) {
                Be(t, qe) || (t += qe);
                var n = t.split('/'),
                  r = Ue(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              Ge = document,
              ze = function (n, r) {
                return new ce(function (e, t) {
                  (r.onload = function () {
                    e(r);
                  }),
                    (r.onerror = function () {
                      t(new Error('Failed to load script ' + n));
                    });
                });
              },
              Je = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = ze(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              Ye = function (e, t, n, r) {
                (t = t || '&'), (n = n || '=');
                var a = {};
                if ('string' != typeof e || 0 === e.length) return a;
                var i = /\+/g;
                e = e.split(t);
                var o = 1000;
                r && 'number' == typeof r.maxKeys && (o = r.maxKeys);
                var s = e.length;
                0 < o && o < s && (s = o);
                for (var c = 0; c < s; ++c) {
                  var u,
                    l,
                    d,
                    f,
                    p = e[c].replace(i, '%20'),
                    m = p.indexOf(n);
                  0 <= m ? ((u = p.substr(0, m)), (l = p.substr(m + 1))) : ((u = p), (l = '')),
                    (d = decodeURIComponent(u)),
                    (f = decodeURIComponent(l)),
                    g(a, d)
                      ? Array.isArray(a[d])
                        ? a[d].push(f)
                        : (a[d] = [a[d], f])
                      : (a[d] = f);
                }
                return a;
              },
              We = function (e) {
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
              Qe = function (n, r, a, e) {
                return (
                  (r = r || '&'),
                  (a = a || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(We(e)) + a;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(We(e));
                                })
                                .join(r)
                            : t + encodeURIComponent(We(n[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent(We(e)) + a + encodeURIComponent(We(n))
                    : ''
                );
              },
              $e = e(function (e, t) {
                (t.decode = t.parse = Ye), (t.encode = t.stringify = Qe);
              }),
              Ke = ($e.decode, $e.parse, $e.encode, $e.stringify, '@adobe/reactor-'),
              Xe = {
                cookie: A,
                document: Ge,
                'load-script': Je,
                'object-assign': Le,
                promise: ce,
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
                window: O,
              },
              Ze = function (r) {
                return function (e) {
                  if (0 === e.indexOf(Ke)) {
                    var t = e.substr(Ke.length),
                      n = Xe[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, o, s, c, u) {
                var l = e.extensions,
                  d = e.buildInfo,
                  f = e.property.settings;
                if (l) {
                  var p = Ne(l, o);
                  Object.keys(l).forEach(function (r) {
                    var a = l[r],
                      e = Re(c, a.settings);
                    if (a.modules) {
                      var t = x.createPrefixedLogger(a.displayName),
                        n = Fe(a.hostedLibFilesBaseUrl, d.minified),
                        i = {
                          buildInfo: d,
                          getDataElementValue: u,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: p,
                          logger: t,
                          propertySettings: f,
                          replaceTokens: c,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(a.modules).forEach(function (n) {
                        var e = a.modules[n],
                          t = Ze(function (e) {
                            var t = He(n, e);
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
                var i = x.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  x.log('"' + e + '" does not match any direct call identifiers.');
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
                      (x.warn(
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
                    x.warn(i), A.set(e, t, a);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      x.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      A.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    x.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      A.remove(e);
                  }),
                  (e.cookie = A),
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
              nt = window._satellite;
            if (nt && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var rt = nt.container;
              delete nt.container;
              var at = rt.property.settings.undefinedVarsReturnEmpty,
                it = rt.property.settings.ruleComponentSequencingEnabled,
                ot = rt.dataElements || {};
              W.migrateCookieData(ot);
              var st,
                ct = function (e) {
                  return ot[e];
                },
                ut = ne(),
                lt = $(
                  ut,
                  ct,
                  function () {
                    return st.apply(null, arguments);
                  },
                  at
                ),
                dt = {},
                ft = oe(dt),
                pt = ee(dt, ct),
                mt = Z(dt, ct, lt);
              st = ie(pt, mt, at);
              var gt = h(M('localStorage'), x);
              tt(nt, rt, gt.setDebugEnabled, mt, ft), et(rt, ut, gt, st, lt);
              var vt = ae(nt),
                ht = y(ut, st),
                bt = ve(ut),
                yt = Ce(bt, x, vt),
                _t = _e(Ee, bt, x, vt),
                Ct = ye(Ee, bt, x, vt),
                St = Se(x, vt),
                Pt = be(
                  we(
                    it,
                    ge(me(ht, Te, yt, _t), Pe(ht, Ct, St)),
                    fe(le(ht, xe, Te, _t, yt), ue(ht, xe, Ct), St),
                    vt
                  ),
                  ht,
                  Me,
                  Ee,
                  he(ut),
                  x
                );
              De(m, rt.rules || [], Pt);
            }
            return nt;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_d4e2c4c68c52698a)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_d4e2c4c68c52698a
          ));
      }
    })();
    _satellite = $___var_8979935ffe10cee5;
  })();
}
