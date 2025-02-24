{
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
  (function () {
    window.setTimeout(function () {
      const $___old_7e73c0935806d58d = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_7e73c0935806d58d)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_addd751f0eb655f8.userAgent
          ));
        return function () {
          var bvalid, _i;
          bvalid = true;
          for (_i = 2; _i <= 7; ++_i) {
            if (navigator.userAgent.indexOf('MSIE ' + _i + '.') >= 0) {
              bvalid = false;
            }
          }
          dellpoc = window.dellpoc = window.dellpoc || {};
          dellpoc.account = 'Dell.com (Production B) <-';
          dellpoc.apiKey = 'ec951196-2be1-4539-9e8f-3fc9f59590a9';
          dellpoc.version = 451;
          dellpoc.delayTimeout = 0;
          dellpoc.inlineStyling = 0;
          dellpoc.environment = 'Production';
          dellpoc.debug = 0;
          dellpoc.testing_mode = 0;
          if (bvalid) {
            dellpoc.product_api_host = '';
            dellpoc.visitor_insight_api_host = 'http://vis.persaas.dell.com';
            dellpoc.visitor_insight_api_key = 'xyz';
            dellpoc.visitor_insight_api_secret = 'mysecert';
            dellpoc.admin_api_host = 'https://admin.persaas.dell.com:8443';
            dellpoc.admin_host = '';
            dellpoc.environments = {};
            dellpoc.environments.Production = 'https://admin.persaas.dell.com';
            dellpoc.environments.Stage = 'https://s.admin.persaas.dell.com';
            dellpoc.environments.Development = 'http://localhost:61334';
            dellpoc.environments['Dev(Azure)'] = 'https://d.admin.persaas.dell.com';
            dellpoc.cdn_host = '//p.cdn.persaas.dell.com';
            dellpoc.remote_cdn_host = '//p.cdn.persaas.dell.com';
            dellpoc.cors_enabled = true;
            dellpoc.campaign = {};
            dellpoc.campaign.microApps = {};
            dellpoc.campaign.containers = {};
            dellpoc.campaign.meta = {};
            dellpoc.campaign.manager = undefined;
            var campaignInfo = undefined;
            var campaignGroupInfo = undefined;
            var campaignContainerInfo = undefined;
            var campaignMicroAppInfo = undefined;
            var campaignInfo = undefined;
            var campaignGroupInfo = undefined;
            var campaignContainerInfo = undefined;
            var campaignMicroAppInfo = undefined;
            dellpoc.hostUrls = [
              'accessories.us.dell.com',
              'dell.com',
              'www1.euro.dell.com',
              'dell.co.uk',
              'ecomm.dell.com',
              'techpageone.dell.com',
              'software.dell.com',
            ];
            dellpoc.core = dellpoc.core || {};
            dellpoc.core.models = dellpoc.core.models || {};
            dellpoc.core.views = dellpoc.core.views || {};
            (function (window, undefined) {
              var rootcamQuery,
                readyList,
                document = window.document,
                location = window.location,
                navigator = window.navigator,
                _camQuery = window.camQuery,
                _$ = window.$C,
                core_push = Array.prototype.push,
                core_slice = Array.prototype.slice,
                core_indexOf = Array.prototype.indexOf,
                core_toString = Object.prototype.toString,
                core_hasOwn = Object.prototype.hasOwnProperty,
                core_trim = String.prototype.trim,
                camQuery = function (selector, context) {
                  return new camQuery.fn.init(selector, context, rootcamQuery);
                },
                core_pnum = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
                core_rnotwhite = /\S/,
                core_rspace = /\s+/,
                rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                rvalidchars = /^[\],:{}\s]*$/,
                rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
                rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
                rmsPrefix = /^-ms-/,
                rdashAlpha = /-([\da-z])/gi,
                fcamelCase = function (all, letter) {
                  return (letter + '').toUpperCase();
                },
                DOMContentLoaded = function () {
                  if (document.addEventListener) {
                    document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);
                    camQuery.ready();
                  } else {
                    if (document.readyState === 'complete') {
                      document.detachEvent('onreadystatechange', DOMContentLoaded);
                      camQuery.ready();
                    }
                  }
                },
                class2type = {};
              camQuery.fn = camQuery.prototype = {
                constructor: camQuery,
                init: function (selector, context, rootcamQuery) {
                  var match, elem, ret, doc;
                  if (!selector) {
                    return this;
                  }
                  if (selector.nodeType) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this;
                  }
                  if (typeof selector === 'string') {
                    if (
                      selector.charAt(0) === '<' &&
                      selector.charAt(selector.length - 1) === '>' &&
                      selector.length >= 3
                    ) {
                      match = [null, selector, null];
                    } else {
                      match = rquickExpr.exec(selector);
                    }
                    if (match && (match[1] || !context)) {
                      if (match[1]) {
                        context = context instanceof camQuery ? context[0] : context;
                        doc =
                          context && context.nodeType
                            ? context.ownerDocument || context
                            : document;
                        selector = camQuery.parseHTML(match[1], doc, true);
                        if (rsingleTag.test(match[1]) && camQuery.isPlainObject(context)) {
                          this.attr.call(selector, context, true);
                        }
                        return camQuery.merge(this, selector);
                      } else {
                        elem = document.getElementById(match[2]);
                        if (elem && elem.parentNode) {
                          if (elem.id !== match[2]) {
                            return rootcamQuery.find(selector);
                          }
                          this.length = 1;
                          this[0] = elem;
                        }
                        this.context = document;
                        this.selector = selector;
                        return this;
                      }
                    } else {
                      if (!context || context.jquery) {
                        return (context || rootcamQuery).find(selector);
                      } else {
                        return this.constructor(context).find(selector);
                      }
                    }
                  } else {
                    if (camQuery.isFunction(selector)) {
                      return rootcamQuery.ready(selector);
                    }
                  }
                  if (selector.selector !== undefined) {
                    this.selector = selector.selector;
                    this.context = selector.context;
                  }
                  return camQuery.makeArray(selector, this);
                },
                selector: '',
                jquery: '1.8.3',
                length: 0,
                size: function () {
                  return this.length;
                },
                toArray: function () {
                  return core_slice.call(this);
                },
                get: function (num) {
                  return num == null
                    ? this.toArray()
                    : num < 0
                    ? this[this.length + num]
                    : this[num];
                },
                pushStack: function (elems, name, selector) {
                  var ret = camQuery.merge(this.constructor(), elems);
                  ret.prevObject = this;
                  ret.context = this.context;
                  if (name === 'find') {
                    ret.selector = this.selector + (this.selector ? ' ' : '') + selector;
                  } else {
                    if (name) {
                      ret.selector = this.selector + '.' + name + '(' + selector + ')';
                    }
                  }
                  return ret;
                },
                each: function (callback, args) {
                  return camQuery.each(this, callback, args);
                },
                ready: function (fn) {
                  camQuery.ready.promise().done(fn);
                  return this;
                },
                eq: function (i) {
                  i = +i;
                  return i === -1 ? this.slice(i) : this.slice(i, i + 1);
                },
                first: function () {
                  return this.eq(0);
                },
                last: function () {
                  return this.eq(-1);
                },
                slice: function () {
                  return this.pushStack(
                    core_slice.apply(this, arguments),
                    'slice',
                    core_slice.call(arguments).join(',')
                  );
                },
                map: function (callback) {
                  return this.pushStack(
                    camQuery.map(this, function (elem, i) {
                      return callback.call(elem, i, elem);
                    })
                  );
                },
                end: function () {
                  return this.prevObject || this.constructor(null);
                },
                push: core_push,
                sort: [].sort,
                splice: [].splice,
              };
              camQuery.fn.init.prototype = camQuery.fn;
              camQuery.extend = camQuery.fn.extend = function () {
                var options,
                  name,
                  src,
                  copy,
                  copyIsArray,
                  clone,
                  target = arguments[0] || {},
                  i = 1,
                  length = arguments.length,
                  deep = false;
                if (typeof target === 'boolean') {
                  deep = target;
                  target = arguments[1] || {};
                  i = 2;
                }
                if (typeof target !== 'object' && !camQuery.isFunction(target)) {
                  target = {};
                }
                if (length === i) {
                  target = this;
                  --i;
                }
                for (; i < length; i++) {
                  if ((options = arguments[i]) != null) {
                    for (name in options) {
                      src = target[name];
                      copy = options[name];
                      if (target === copy) {
                        continue;
                      }
                      if (
                        deep &&
                        copy &&
                        (camQuery.isPlainObject(copy) || (copyIsArray = camQuery.isArray(copy)))
                      ) {
                        if (copyIsArray) {
                          copyIsArray = false;
                          clone = src && camQuery.isArray(src) ? src : [];
                        } else {
                          clone = src && camQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = camQuery.extend(deep, clone, copy);
                      } else {
                        if (copy !== undefined) {
                          target[name] = copy;
                        }
                      }
                    }
                  }
                }
                return target;
              };
              camQuery.extend({
                noConflict: function (deep) {
                  if (window.$C === camQuery) {
                    window.$C = _$;
                  }
                  if (deep && window.camQuery === camQuery) {
                    window.camQuery = _camQuery;
                  }
                  return camQuery;
                },
                isReady: false,
                readyWait: 1,
                holdReady: function (hold) {
                  if (hold) {
                    camQuery.readyWait++;
                  } else {
                    camQuery.ready(true);
                  }
                },
                ready: function (wait) {
                  if (wait === true ? --camQuery.readyWait : camQuery.isReady) {
                    return;
                  }
                  if (!document.body) {
                    return setTimeout(camQuery.ready, 1);
                  }
                  camQuery.isReady = true;
                  if (wait !== true && --camQuery.readyWait > 0) {
                    return;
                  }
                  readyList.resolveWith(document, [camQuery]);
                  if (camQuery.fn.trigger) {
                    camQuery(document).trigger('ready').off('ready');
                  }
                },
                isFunction: function (obj) {
                  return camQuery.type(obj) === 'function';
                },
                isArray:
                  Array.isArray ||
                  function (obj) {
                    return camQuery.type(obj) === 'array';
                  },
                isWindow: function (obj) {
                  return obj != null && obj == obj.window;
                },
                isNumeric: function (obj) {
                  return !isNaN(parseFloat(obj)) && isFinite(obj);
                },
                type: function (obj) {
                  return obj == null
                    ? String(obj)
                    : class2type[core_toString.call(obj)] || 'object';
                },
                isPlainObject: function (obj) {
                  if (
                    !obj ||
                    camQuery.type(obj) !== 'object' ||
                    obj.nodeType ||
                    camQuery.isWindow(obj)
                  ) {
                    return false;
                  }
                  try {
                    if (
                      obj.constructor &&
                      !core_hasOwn.call(obj, 'constructor') &&
                      !core_hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')
                    ) {
                      return false;
                    }
                  } catch (e) {
                    return false;
                  }
                  var key;
                  for (key in obj) {
                  }
                  return key === undefined || core_hasOwn.call(obj, key);
                },
                isEmptyObject: function (obj) {
                  var name;
                  for (name in obj) {
                    return false;
                  }
                  return true;
                },
                error: function (msg) {
                  throw new Error(msg);
                },
                parseHTML: function (data, context, scripts) {
                  var parsed;
                  if (!data || typeof data !== 'string') {
                    return null;
                  }
                  if (typeof context === 'boolean') {
                    scripts = context;
                    context = 0;
                  }
                  context = context || document;
                  if ((parsed = rsingleTag.exec(data))) {
                    return [context.createElement(parsed[1])];
                  }
                  parsed = camQuery.buildFragment([data], context, scripts ? null : []);
                  return camQuery.merge(
                    [],
                    (parsed.cacheable ? camQuery.clone(parsed.fragment) : parsed.fragment)
                      .childNodes
                  );
                },
                parseJSON: function (data) {
                  if (!data || typeof data !== 'string') {
                    return null;
                  }
                  data = camQuery.trim(data);
                  if (window.JSON && window.JSON.parse) {
                    return window.JSON.parse(data);
                  }
                  if (
                    rvalidchars.test(
                      data
                        .replace(rvalidescape, '@')
                        .replace(rvalidtokens, ']')
                        .replace(rvalidbraces, '')
                    )
                  ) {
                    return new Function('return ' + data)();
                  }
                  camQuery.error('Invalid JSON: ' + data);
                },
                parseXML: function (data) {
                  var xml, tmp;
                  if (!data || typeof data !== 'string') {
                    return null;
                  }
                  try {
                    if (window.DOMParser) {
                      tmp = new DOMParser();
                      xml = tmp.parseFromString(data, 'text/xml');
                    } else {
                      xml = new ActiveXObject('Microsoft.XMLDOM');
                      xml.async = 'false';
                      xml.loadXML(data);
                    }
                  } catch (e) {
                    xml = undefined;
                  }
                  if (
                    !xml ||
                    !xml.documentElement ||
                    xml.getElementsByTagName('parsererror').length
                  ) {
                    camQuery.error('Invalid XML: ' + data);
                  }
                  return xml;
                },
                noop: function () {},
                globalEval: function (data) {
                  if (data && core_rnotwhite.test(data)) {
                    (
                      window.execScript ||
                      function (data) {
                        window['eval'].call(window, data);
                      }
                    )(data);
                  }
                },
                camelCase: function (string) {
                  return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase);
                },
                nodeName: function (elem, name) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                },
                each: function (obj, callback, args) {
                  var name,
                    i = 0,
                    length = obj.length,
                    isObj = length === undefined || camQuery.isFunction(obj);
                  if (args) {
                    if (isObj) {
                      for (name in obj) {
                        if (callback.apply(obj[name], args) === false) {
                          break;
                        }
                      }
                    } else {
                      for (; i < length; ) {
                        if (callback.apply(obj[i++], args) === false) {
                          break;
                        }
                      }
                    }
                  } else {
                    if (isObj) {
                      for (name in obj) {
                        if (callback.call(obj[name], name, obj[name]) === false) {
                          break;
                        }
                      }
                    } else {
                      for (; i < length; ) {
                        if (callback.call(obj[i], i, obj[i++]) === false) {
                          break;
                        }
                      }
                    }
                  }
                  return obj;
                },
                trim:
                  core_trim && !core_trim.call('\uFEFF\xA0')
                    ? function (text) {
                        return text == null ? '' : core_trim.call(text);
                      }
                    : function (text) {
                        return text == null ? '' : (text + '').replace(rtrim, '');
                      },
                makeArray: function (arr, results) {
                  var type,
                    ret = results || [];
                  if (arr != null) {
                    type = camQuery.type(arr);
                    if (
                      arr.length == null ||
                      type === 'string' ||
                      type === 'function' ||
                      type === 'regexp' ||
                      camQuery.isWindow(arr)
                    ) {
                      core_push.call(ret, arr);
                    } else {
                      camQuery.merge(ret, arr);
                    }
                  }
                  return ret;
                },
                inArray: function (elem, arr, i) {
                  var len;
                  if (arr) {
                    if (core_indexOf) {
                      return core_indexOf.call(arr, elem, i);
                    }
                    len = arr.length;
                    i = i ? (i < 0 ? Math.max(0, len + i) : i) : 0;
                    for (; i < len; i++) {
                      if (i in arr && arr[i] === elem) {
                        return i;
                      }
                    }
                  }
                  return -1;
                },
                merge: function (first, second) {
                  var l = second.length,
                    i = first.length,
                    j = 0;
                  if (typeof l === 'number') {
                    for (; j < l; j++) {
                      first[i++] = second[j];
                    }
                  } else {
                    while (second[j] !== undefined) {
                      first[i++] = second[j++];
                    }
                  }
                  first.length = i;
                  return first;
                },
                grep: function (elems, callback, inv) {
                  var retVal,
                    ret = [],
                    i = 0,
                    length = elems.length;
                  inv = !!inv;
                  for (; i < length; i++) {
                    retVal = !!callback(elems[i], i);
                    if (inv !== retVal) {
                      ret.push(elems[i]);
                    }
                  }
                  return ret;
                },
                map: function (elems, callback, arg) {
                  var value,
                    key,
                    ret = [],
                    i = 0,
                    length = elems.length,
                    isArray =
                      elems instanceof camQuery ||
                      (length !== undefined &&
                        typeof length === 'number' &&
                        ((length > 0 && elems[0] && elems[length - 1]) ||
                          length === 0 ||
                          camQuery.isArray(elems)));
                  if (isArray) {
                    for (; i < length; i++) {
                      value = callback(elems[i], i, arg);
                      if (value != null) {
                        ret[ret.length] = value;
                      }
                    }
                  } else {
                    for (key in elems) {
                      value = callback(elems[key], key, arg);
                      if (value != null) {
                        ret[ret.length] = value;
                      }
                    }
                  }
                  return ret.concat.apply([], ret);
                },
                guid: 1,
                proxy: function (fn, context) {
                  var tmp, args, proxy;
                  if (typeof context === 'string') {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp;
                  }
                  if (!camQuery.isFunction(fn)) {
                    return undefined;
                  }
                  args = core_slice.call(arguments, 2);
                  proxy = function () {
                    return fn.apply(context, args.concat(core_slice.call(arguments)));
                  };
                  proxy.guid = fn.guid = fn.guid || camQuery.guid++;
                  return proxy;
                },
                access: function (elems, fn, key, value, chainable, emptyGet, pass) {
                  var exec,
                    bulk = key == null,
                    i = 0,
                    length = elems.length;
                  if (key && typeof key === 'object') {
                    for (i in key) {
                      camQuery.access(elems, fn, i, key[i], 1, emptyGet, value);
                    }
                    chainable = 1;
                  } else {
                    if (value !== undefined) {
                      exec = pass === undefined && camQuery.isFunction(value);
                      if (bulk) {
                        if (exec) {
                          exec = fn;
                          fn = function (elem, key, value) {
                            return exec.call(camQuery(elem), value);
                          };
                        } else {
                          fn.call(elems, value);
                          fn = null;
                        }
                      }
                      if (fn) {
                        for (; i < length; i++) {
                          fn(
                            elems[i],
                            key,
                            exec ? value.call(elems[i], i, fn(elems[i], key)) : value,
                            pass
                          );
                        }
                      }
                      chainable = 1;
                    }
                  }
                  return chainable
                    ? elems
                    : bulk
                    ? fn.call(elems)
                    : length
                    ? fn(elems[0], key)
                    : emptyGet;
                },
                now: function () {
                  return new Date().getTime();
                },
              });
              camQuery.ready.promise = function (obj) {
                if (!readyList) {
                  readyList = camQuery.Deferred();
                  if (document.readyState === 'complete') {
                    setTimeout(camQuery.ready, 1);
                  } else {
                    if (document.addEventListener) {
                      document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
                      window.addEventListener('load', camQuery.ready, false);
                    } else {
                      document.attachEvent('onreadystatechange', DOMContentLoaded);
                      window.attachEvent('onload', camQuery.ready);
                      var top = false;
                      try {
                        top = window.frameElement == null && document.documentElement;
                      } catch (e) {}
                      if (top && top.doScroll) {
                        (function doScrollCheck () {
                          if (!camQuery.isReady) {
                            try {
                              top.doScroll('left');
                            } catch (e) {
                              return setTimeout(doScrollCheck, 50);
                            }
                            camQuery.ready();
                          }
                        })();
                      }
                    }
                  }
                }
                return readyList.promise(obj);
              };
              camQuery.each(
                'Boolean Number String Function Array Date RegExp Object'.split(' '),
                function (i, name) {
                  class2type['[object ' + name + ']'] = name.toLowerCase();
                }
              );
              rootcamQuery = camQuery(document);
              var optionsCache = {};
              function createOptions (options) {
                var object = (optionsCache[options] = {});
                camQuery.each(options.split(core_rspace), function (_, flag) {
                  object[flag] = true;
                });
                return object;
              }
              camQuery.Callbacks = function (options) {
                options =
                  typeof options === 'string'
                    ? optionsCache[options] || createOptions(options)
                    : camQuery.extend({}, options);
                var memory,
                  fired,
                  firing,
                  firingStart,
                  firingLength,
                  firingIndex,
                  list = [],
                  stack = !options.once && [],
                  fire = function (data) {
                    memory = options.memory && data;
                    fired = true;
                    firingIndex = firingStart || 0;
                    firingStart = 0;
                    firingLength = list.length;
                    firing = true;
                    for (; list && firingIndex < firingLength; firingIndex++) {
                      if (
                        list[firingIndex].apply(data[0], data[1]) === false &&
                        options.stopOnFalse
                      ) {
                        memory = false;
                        break;
                      }
                    }
                    firing = false;
                    if (list) {
                      if (stack) {
                        if (stack.length) {
                          fire(stack.shift());
                        }
                      } else {
                        if (memory) {
                          list = [];
                        } else {
                          self.disable();
                        }
                      }
                    }
                  },
                  self = {
                    add: function () {
                      if (list) {
                        var start = list.length;
                        (function add (args) {
                          camQuery.each(args, function (_, arg) {
                            var type = camQuery.type(arg);
                            if (type === 'function') {
                              if (!options.unique || !self.has(arg)) {
                                list.push(arg);
                              }
                            } else {
                              if (arg && arg.length && type !== 'string') {
                                add(arg);
                              }
                            }
                          });
                        })(arguments);
                        if (firing) {
                          firingLength = list.length;
                        } else {
                          if (memory) {
                            firingStart = start;
                            fire(memory);
                          }
                        }
                      }
                      return this;
                    },
                    remove: function () {
                      if (list) {
                        camQuery.each(arguments, function (_, arg) {
                          var index;
                          while ((index = camQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (firing) {
                              if (index <= firingLength) {
                                firingLength--;
                              }
                              if (index <= firingIndex) {
                                firingIndex--;
                              }
                            }
                          }
                        });
                      }
                      return this;
                    },
                    has: function (fn) {
                      return camQuery.inArray(fn, list) > -1;
                    },
                    empty: function () {
                      list = [];
                      return this;
                    },
                    disable: function () {
                      list = stack = memory = undefined;
                      return this;
                    },
                    disabled: function () {
                      return !list;
                    },
                    lock: function () {
                      stack = undefined;
                      if (!memory) {
                        self.disable();
                      }
                      return this;
                    },
                    locked: function () {
                      return !stack;
                    },
                    fireWith: function (context, args) {
                      args = args || [];
                      args = [context, args.slice ? args.slice() : args];
                      if (list && (!fired || stack)) {
                        if (firing) {
                          stack.push(args);
                        } else {
                          fire(args);
                        }
                      }
                      return this;
                    },
                    fire: function () {
                      self.fireWith(this, arguments);
                      return this;
                    },
                    fired: function () {
                      return !!fired;
                    },
                  };
                return self;
              };
              camQuery.extend({
                Deferred: function (func) {
                  var tuples = [
                      ['resolve', 'done', camQuery.Callbacks('once memory'), 'resolved'],
                      ['reject', 'fail', camQuery.Callbacks('once memory'), 'rejected'],
                      ['notify', 'progress', camQuery.Callbacks('memory')],
                    ],
                    state = 'pending',
                    promise = {
                      state: function () {
                        return state;
                      },
                      always: function () {
                        deferred.done(arguments).fail(arguments);
                        return this;
                      },
                      then: function () {
                        var fns = arguments;
                        return camQuery
                          .Deferred(function (newDefer) {
                            camQuery.each(tuples, function (i, tuple) {
                              var action = tuple[0],
                                fn = fns[i];
                              deferred[tuple[1]](
                                camQuery.isFunction(fn)
                                  ? function () {
                                      var returned = fn.apply(this, arguments);
                                      if (returned && camQuery.isFunction(returned.promise)) {
                                        returned
                                          .promise()
                                          .done(newDefer.resolve)
                                          .fail(newDefer.reject)
                                          .progress(newDefer.notify);
                                      } else {
                                        newDefer[action + 'With'](
                                          this === deferred ? newDefer : this,
                                          [returned]
                                        );
                                      }
                                    }
                                  : newDefer[action]
                              );
                            });
                            fns = null;
                          })
                          .promise();
                      },
                      promise: function (obj) {
                        return obj != null ? camQuery.extend(obj, promise) : promise;
                      },
                    },
                    deferred = {};
                  promise.pipe = promise.then;
                  camQuery.each(tuples, function (i, tuple) {
                    var list = tuple[2],
                      stateString = tuple[3];
                    promise[tuple[1]] = list.add;
                    if (stateString) {
                      list.add(
                        function () {
                          state = stateString;
                        },
                        tuples[i ^ 1][2].disable,
                        tuples[2][2].lock
                      );
                    }
                    deferred[tuple[0]] = list.fire;
                    deferred[tuple[0] + 'With'] = list.fireWith;
                  });
                  promise.promise(deferred);
                  if (func) {
                    func.call(deferred, deferred);
                  }
                  return deferred;
                },
                when: function (subordinate) {
                  var i = 0,
                    resolveValues = core_slice.call(arguments),
                    length = resolveValues.length,
                    remaining =
                      length !== 1 || (subordinate && camQuery.isFunction(subordinate.promise))
                        ? length
                        : 0,
                    deferred = remaining === 1 ? subordinate : camQuery.Deferred(),
                    updateFunc = function (i, contexts, values) {
                      return function (value) {
                        contexts[i] = this;
                        values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                        if (values === progressValues) {
                          deferred.notifyWith(contexts, values);
                        } else {
                          if (!--remaining) {
                            deferred.resolveWith(contexts, values);
                          }
                        }
                      };
                    },
                    progressValues,
                    progressContexts,
                    resolveContexts;
                  if (length > 1) {
                    progressValues = new Array(length);
                    progressContexts = new Array(length);
                    resolveContexts = new Array(length);
                    for (; i < length; i++) {
                      if (resolveValues[i] && camQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i]
                          .promise()
                          .done(updateFunc(i, resolveContexts, resolveValues))
                          .fail(deferred.reject)
                          .progress(updateFunc(i, progressContexts, progressValues));
                      } else {
                        --remaining;
                      }
                    }
                  }
                  if (!remaining) {
                    deferred.resolveWith(resolveContexts, resolveValues);
                  }
                  return deferred.promise();
                },
              });
              camQuery.support = (function () {
                var support,
                  all,
                  a,
                  select,
                  opt,
                  input,
                  fragment,
                  eventName,
                  i,
                  isSupported,
                  clickFn,
                  div = document.createElement('div');
                div.setAttribute('className', 't');
                div.innerHTML =
                  "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                all = div.getElementsByTagName('*');
                a = div.getElementsByTagName('a')[0];
                if (!all || !a || !all.length) {
                  return {};
                }
                select = document.createElement('select');
                opt = select.appendChild(document.createElement('option'));
                input = div.getElementsByTagName('input')[0];
                a.style.cssText = 'top:1px;float:left;opacity:.5';
                support = {
                  leadingWhitespace: div.firstChild.nodeType === 3,
                  tbody: !div.getElementsByTagName('tbody').length,
                  htmlSerialize: !!div.getElementsByTagName('link').length,
                  style: /top/.test(a.getAttribute('style')),
                  hrefNormalized: a.getAttribute('href') === '/a',
                  opacity: /^0.5/.test(a.style.opacity),
                  cssFloat: !!a.style.cssFloat,
                  checkOn: input.value === 'on',
                  optSelected: opt.selected,
                  getSetAttribute: div.className !== 't',
                  enctype: !!document.createElement('form').enctype,
                  html5Clone:
                    document.createElement('nav').cloneNode(true).outerHTML !== '<:nav></:nav>',
                  boxModel: document.compatMode === 'CSS1Compat',
                  submitBubbles: true,
                  changeBubbles: true,
                  focusinBubbles: false,
                  deleteExpando: true,
                  noCloneEvent: true,
                  inlineBlockNeedsLayout: false,
                  shrinkWrapBlocks: false,
                  reliableMarginRight: true,
                  boxSizingReliable: true,
                  pixelPosition: false,
                };
                input.checked = true;
                support.noCloneChecked = input.cloneNode(true).checked;
                select.disabled = true;
                support.optDisabled = !opt.disabled;
                try {
                  delete div.test;
                } catch (e) {
                  support.deleteExpando = false;
                }
                if (!div.addEventListener && div.attachEvent && div.fireEvent) {
                  div.attachEvent(
                    'onclick',
                    (clickFn = function () {
                      support.noCloneEvent = false;
                    })
                  );
                  div.cloneNode(true).fireEvent('onclick');
                  div.detachEvent('onclick', clickFn);
                }
                input = document.createElement('input');
                input.value = 't';
                input.setAttribute('type', 'radio');
                support.radioValue = input.value === 't';
                input.setAttribute('checked', 'checked');
                input.setAttribute('name', 't');
                div.appendChild(input);
                fragment = document.createDocumentFragment();
                fragment.appendChild(div.lastChild);
                support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
                support.appendChecked = input.checked;
                fragment.removeChild(input);
                fragment.appendChild(div);
                if (div.attachEvent) {
                  for (i in { submit: true, change: true, focusin: true }) {
                    eventName = 'on' + i;
                    isSupported = eventName in div;
                    if (!isSupported) {
                      div.setAttribute(eventName, 'return;');
                      isSupported = typeof div[eventName] === 'function';
                    }
                    support[i + 'Bubbles'] = isSupported;
                  }
                }
                camQuery(function () {
                  var container,
                    div,
                    tds,
                    marginDiv,
                    divReset = 'padding:0;margin:0;border:0;display:block;overflow:hidden;',
                    body = document.getElementsByTagName('body')[0];
                  if (!body) {
                    return;
                  }
                  container = document.createElement('div');
                  container.style.cssText =
                    'visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px';
                  body.insertBefore(container, body.firstChild);
                  div = document.createElement('div');
                  container.appendChild(div);
                  div.innerHTML = '<table><tr><td></td><td>t</td></tr></table>';
                  tds = div.getElementsByTagName('td');
                  tds[0].style.cssText = 'padding:0;margin:0;border:0;display:none';
                  isSupported = tds[0].offsetHeight === 0;
                  tds[0].style.display = '';
                  tds[1].style.display = 'none';
                  support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
                  div.innerHTML = '';
                  div.style.cssText =
                    'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;';
                  support.boxSizing = div.offsetWidth === 4;
                  support.doesNotIncludeMarginInBodyOffset = body.offsetTop !== 1;
                  if (window.getComputedStyle) {
                    support.pixelPosition =
                      (window.getComputedStyle(div, null) || {}).top !== '1%';
                    support.boxSizingReliable =
                      (window.getComputedStyle(div, null) || { width: '4px' }).width === '4px';
                    marginDiv = document.createElement('div');
                    marginDiv.style.cssText = div.style.cssText = divReset;
                    marginDiv.style.marginRight = marginDiv.style.width = '0';
                    div.style.width = '1px';
                    div.appendChild(marginDiv);
                    support.reliableMarginRight = !parseFloat(
                      (window.getComputedStyle(marginDiv, null) || {}).marginRight
                    );
                  }
                  if (typeof div.style.zoom !== 'undefined') {
                    div.innerHTML = '';
                    div.style.cssText = divReset + 'width:1px;padding:1px;display:inline;zoom:1';
                    support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                    div.style.display = 'block';
                    div.style.overflow = 'visible';
                    div.innerHTML = '<div></div>';
                    div.firstChild.style.width = '5px';
                    support.shrinkWrapBlocks = div.offsetWidth !== 3;
                    container.style.zoom = 1;
                  }
                  body.removeChild(container);
                  container = div = tds = marginDiv = null;
                });
                fragment.removeChild(div);
                all = a = select = opt = input = fragment = div = null;
                return support;
              })();
              var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                rmultiDash = /([A-Z])/g;
              camQuery.extend({
                cache: {},
                deletedIds: [],
                uuid: 0,
                expando: 'camQuery' + (camQuery.fn.jquery + Math.random()).replace(/\D/g, ''),
                noData: {
                  embed: true,
                  object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
                  applet: true,
                },
                hasData: function (elem) {
                  elem = elem.nodeType
                    ? camQuery.cache[elem[camQuery.expando]]
                    : elem[camQuery.expando];
                  return !!elem && !isEmptyDataObject(elem);
                },
                data: function (elem, name, data, pvt) {
                  if (!camQuery.acceptData(elem)) {
                    return;
                  }
                  var thisCache,
                    ret,
                    internalKey = camQuery.expando,
                    getByName = typeof name === 'string',
                    isNode = elem.nodeType,
                    cache = isNode ? camQuery.cache : elem,
                    id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
                  if (
                    (!id || !cache[id] || (!pvt && !cache[id].data)) &&
                    getByName &&
                    data === undefined
                  ) {
                    return;
                  }
                  if (!id) {
                    if (isNode) {
                      elem[internalKey] = id = camQuery.deletedIds.pop() || camQuery.guid++;
                    } else {
                      id = internalKey;
                    }
                  }
                  if (!cache[id]) {
                    cache[id] = {};
                    if (!isNode) {
                      cache[id].toJSON = camQuery.noop;
                    }
                  }
                  if (typeof name === 'object' || typeof name === 'function') {
                    if (pvt) {
                      cache[id] = camQuery.extend(cache[id], name);
                    } else {
                      cache[id].data = camQuery.extend(cache[id].data, name);
                    }
                  }
                  thisCache = cache[id];
                  if (!pvt) {
                    if (!thisCache.data) {
                      thisCache.data = {};
                    }
                    thisCache = thisCache.data;
                  }
                  if (data !== undefined) {
                    thisCache[camQuery.camelCase(name)] = data;
                  }
                  if (getByName) {
                    ret = thisCache[name];
                    if (ret == null) {
                      ret = thisCache[camQuery.camelCase(name)];
                    }
                  } else {
                    ret = thisCache;
                  }
                  return ret;
                },
                removeData: function (elem, name, pvt) {
                  if (!camQuery.acceptData(elem)) {
                    return;
                  }
                  var thisCache,
                    i,
                    l,
                    isNode = elem.nodeType,
                    cache = isNode ? camQuery.cache : elem,
                    id = isNode ? elem[camQuery.expando] : camQuery.expando;
                  if (!cache[id]) {
                    return;
                  }
                  if (name) {
                    thisCache = pvt ? cache[id] : cache[id].data;
                    if (thisCache) {
                      if (!camQuery.isArray(name)) {
                        if (name in thisCache) {
                          name = [name];
                        } else {
                          name = camQuery.camelCase(name);
                          if (name in thisCache) {
                            name = [name];
                          } else {
                            name = name.split(' ');
                          }
                        }
                      }
                      for (i = 0, l = name.length; i < l; i++) {
                        delete thisCache[name[i]];
                      }
                      if (!(pvt ? isEmptyDataObject : camQuery.isEmptyObject)(thisCache)) {
                        return;
                      }
                    }
                  }
                  if (!pvt) {
                    delete cache[id].data;
                    if (!isEmptyDataObject(cache[id])) {
                      return;
                    }
                  }
                  if (isNode) {
                    camQuery.cleanData([elem], true);
                  } else {
                    if (camQuery.support.deleteExpando || cache != cache.window) {
                      delete cache[id];
                    } else {
                      cache[id] = null;
                    }
                  }
                },
                _data: function (elem, name, data) {
                  return camQuery.data(elem, name, data, true);
                },
                acceptData: function (elem) {
                  var noData = elem.nodeName && camQuery.noData[elem.nodeName.toLowerCase()];
                  return !noData || (noData !== true && elem.getAttribute('classid') === noData);
                },
              });
              camQuery.fn.extend({
                data: function (key, value) {
                  var parts,
                    part,
                    attr,
                    name,
                    l,
                    elem = this[0],
                    i = 0,
                    data = null;
                  if (key === undefined) {
                    if (this.length) {
                      data = camQuery.data(elem);
                      if (elem.nodeType === 1 && !camQuery._data(elem, 'parsedAttrs')) {
                        attr = elem.attributes;
                        for (l = attr.length; i < l; i++) {
                          name = attr[i].name;
                          if (!name.indexOf('data-')) {
                            name = camQuery.camelCase(name.substring(5));
                            dataAttr(elem, name, data[name]);
                          }
                        }
                        camQuery._data(elem, 'parsedAttrs', true);
                      }
                    }
                    return data;
                  }
                  if (typeof key === 'object') {
                    return this.each(function () {
                      camQuery.data(this, key);
                    });
                  }
                  parts = key.split('.', 2);
                  parts[1] = parts[1] ? '.' + parts[1] : '';
                  part = parts[1] + '!';
                  return camQuery.access(
                    this,
                    function (value) {
                      if (value === undefined) {
                        data = this.triggerHandler('getData' + part, [parts[0]]);
                        if (data === undefined && elem) {
                          data = camQuery.data(elem, key);
                          data = dataAttr(elem, key, data);
                        }
                        return data === undefined && parts[1] ? this.data(parts[0]) : data;
                      }
                      parts[1] = value;
                      this.each(function () {
                        var self = camQuery(this);
                        self.triggerHandler('setData' + part, parts);
                        camQuery.data(this, key, value);
                        self.triggerHandler('changeData' + part, parts);
                      });
                    },
                    null,
                    value,
                    arguments.length > 1,
                    null,
                    false
                  );
                },
                removeData: function (key) {
                  return this.each(function () {
                    camQuery.removeData(this, key);
                  });
                },
              });
              function dataAttr (elem, key, data) {
                if (data === undefined && elem.nodeType === 1) {
                  var name = 'data-' + key.replace(rmultiDash, '-$1').toLowerCase();
                  data = elem.getAttribute(name);
                  if (typeof data === 'string') {
                    try {
                      data =
                        data === 'true'
                          ? true
                          : data === 'false'
                          ? false
                          : data === 'null'
                          ? null
                          : +data + '' === data
                          ? +data
                          : rbrace.test(data)
                          ? camQuery.parseJSON(data)
                          : data;
                    } catch (e) {}
                    camQuery.data(elem, key, data);
                  } else {
                    data = undefined;
                  }
                }
                return data;
              }
              function isEmptyDataObject (obj) {
                var name;
                for (name in obj) {
                  if (name === 'data' && camQuery.isEmptyObject(obj[name])) {
                    continue;
                  }
                  if (name !== 'toJSON') {
                    return false;
                  }
                }
                return true;
              }
              camQuery.extend({
                queue: function (elem, type, data) {
                  var queue;
                  if (elem) {
                    type = (type || 'fx') + 'queue';
                    queue = camQuery._data(elem, type);
                    if (data) {
                      if (!queue || camQuery.isArray(data)) {
                        queue = camQuery._data(elem, type, camQuery.makeArray(data));
                      } else {
                        queue.push(data);
                      }
                    }
                    return queue || [];
                  }
                },
                dequeue: function (elem, type) {
                  type = type || 'fx';
                  var queue = camQuery.queue(elem, type),
                    startLength = queue.length,
                    fn = queue.shift(),
                    hooks = camQuery._queueHooks(elem, type),
                    next = function () {
                      camQuery.dequeue(elem, type);
                    };
                  if (fn === 'inprogress') {
                    fn = queue.shift();
                    startLength--;
                  }
                  if (fn) {
                    if (type === 'fx') {
                      queue.unshift('inprogress');
                    }
                    delete hooks.stop;
                    fn.call(elem, next, hooks);
                  }
                  if (!startLength && hooks) {
                    hooks.empty.fire();
                  }
                },
                _queueHooks: function (elem, type) {
                  var key = type + 'queueHooks';
                  return (
                    camQuery._data(elem, key) ||
                    camQuery._data(elem, key, {
                      empty: camQuery.Callbacks('once memory').add(function () {
                        camQuery.removeData(elem, type + 'queue', true);
                        camQuery.removeData(elem, key, true);
                      }),
                    })
                  );
                },
              });
              camQuery.fn.extend({
                queue: function (type, data) {
                  var setter = 2;
                  if (typeof type !== 'string') {
                    data = type;
                    type = 'fx';
                    setter--;
                  }
                  if (arguments.length < setter) {
                    return camQuery.queue(this[0], type);
                  }
                  return data === undefined
                    ? this
                    : this.each(function () {
                        var queue = camQuery.queue(this, type, data);
                        camQuery._queueHooks(this, type);
                        if (type === 'fx' && queue[0] !== 'inprogress') {
                          camQuery.dequeue(this, type);
                        }
                      });
                },
                dequeue: function (type) {
                  return this.each(function () {
                    camQuery.dequeue(this, type);
                  });
                },
                delay: function (time, type) {
                  time = camQuery.fx ? camQuery.fx.speeds[time] || time : time;
                  type = type || 'fx';
                  return this.queue(type, function (next, hooks) {
                    var timeout = setTimeout(next, time);
                    hooks.stop = function () {
                      clearTimeout(timeout);
                    };
                  });
                },
                clearQueue: function (type) {
                  return this.queue(type || 'fx', []);
                },
                promise: function (type, obj) {
                  var tmp,
                    count = 1,
                    defer = camQuery.Deferred(),
                    elements = this,
                    i = this.length,
                    resolve = function () {
                      if (!--count) {
                        defer.resolveWith(elements, [elements]);
                      }
                    };
                  if (typeof type !== 'string') {
                    obj = type;
                    type = undefined;
                  }
                  type = type || 'fx';
                  while (i--) {
                    tmp = camQuery._data(elements[i], type + 'queueHooks');
                    if (tmp && tmp.empty) {
                      count++;
                      tmp.empty.add(resolve);
                    }
                  }
                  resolve();
                  return defer.promise(obj);
                },
              });
              var nodeHook,
                boolHook,
                fixSpecified,
                rclass = /[\t\r\n]/g,
                rreturn = /\r/g,
                rtype = /^(?:button|input)$/i,
                rfocusable = /^(?:button|input|object|select|textarea)$/i,
                rclickable = /^a(?:rea|)$/i,
                rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                getSetAttribute = camQuery.support.getSetAttribute;
              camQuery.fn.extend({
                attr: function (name, value) {
                  return camQuery.access(this, camQuery.attr, name, value, arguments.length > 1);
                },
                removeAttr: function (name) {
                  return this.each(function () {
                    camQuery.removeAttr(this, name);
                  });
                },
                prop: function (name, value) {
                  return camQuery.access(this, camQuery.prop, name, value, arguments.length > 1);
                },
                removeProp: function (name) {
                  name = camQuery.propFix[name] || name;
                  return this.each(function () {
                    try {
                      this[name] = undefined;
                      delete this[name];
                    } catch (e) {}
                  });
                },
                addClass: function (value) {
                  var classNames, i, l, elem, setClass, c, cl;
                  if (camQuery.isFunction(value)) {
                    return this.each(function (j) {
                      camQuery(this).addClass(value.call(this, j, this.className));
                    });
                  }
                  if (value && typeof value === 'string') {
                    classNames = value.split(core_rspace);
                    for (i = 0, l = this.length; i < l; i++) {
                      elem = this[i];
                      if (elem.nodeType === 1) {
                        if (!elem.className && classNames.length === 1) {
                          elem.className = value;
                        } else {
                          setClass = ' ' + elem.className + ' ';
                          for (c = 0, cl = classNames.length; c < cl; c++) {
                            if (setClass.indexOf(' ' + classNames[c] + ' ') < 0) {
                              setClass += classNames[c] + ' ';
                            }
                          }
                          elem.className = camQuery.trim(setClass);
                        }
                      }
                    }
                  }
                  return this;
                },
                removeClass: function (value) {
                  var removes, className, elem, c, cl, i, l;
                  if (camQuery.isFunction(value)) {
                    return this.each(function (j) {
                      camQuery(this).removeClass(value.call(this, j, this.className));
                    });
                  }
                  if ((value && typeof value === 'string') || value === undefined) {
                    removes = (value || '').split(core_rspace);
                    for (i = 0, l = this.length; i < l; i++) {
                      elem = this[i];
                      if (elem.nodeType === 1 && elem.className) {
                        className = (' ' + elem.className + ' ').replace(rclass, ' ');
                        for (c = 0, cl = removes.length; c < cl; c++) {
                          while (className.indexOf(' ' + removes[c] + ' ') >= 0) {
                            className = className.replace(' ' + removes[c] + ' ', ' ');
                          }
                        }
                        elem.className = value ? camQuery.trim(className) : '';
                      }
                    }
                  }
                  return this;
                },
                toggleClass: function (value, stateVal) {
                  var type = typeof value,
                    isBool = typeof stateVal === 'boolean';
                  if (camQuery.isFunction(value)) {
                    return this.each(function (i) {
                      camQuery(this).toggleClass(
                        value.call(this, i, this.className, stateVal),
                        stateVal
                      );
                    });
                  }
                  return this.each(function () {
                    if (type === 'string') {
                      var className,
                        i = 0,
                        self = camQuery(this),
                        state = stateVal,
                        classNames = value.split(core_rspace);
                      while ((className = classNames[i++])) {
                        state = isBool ? state : !self.hasClass(className);
                        self[state ? 'addClass' : 'removeClass'](className);
                      }
                    } else {
                      if (type === 'undefined' || type === 'boolean') {
                        if (this.className) {
                          camQuery._data(this, '__className__', this.className);
                        }
                        this.className =
                          this.className || value === false
                            ? ''
                            : camQuery._data(this, '__className__') || '';
                      }
                    }
                  });
                },
                hasClass: function (selector) {
                  var className = ' ' + selector + ' ',
                    i = 0,
                    l = this.length;
                  for (; i < l; i++) {
                    if (
                      this[i].nodeType === 1 &&
                      (' ' + this[i].className + ' ').replace(rclass, ' ').indexOf(className) >= 0
                    ) {
                      return true;
                    }
                  }
                  return false;
                },
                val: function (value) {
                  var hooks,
                    ret,
                    isFunction,
                    elem = this[0];
                  if (!arguments.length) {
                    if (elem) {
                      hooks =
                        camQuery.valHooks[elem.type] ||
                        camQuery.valHooks[elem.nodeName.toLowerCase()];
                      if (
                        hooks &&
                        'get' in hooks &&
                        (ret = hooks.get(elem, 'value')) !== undefined
                      ) {
                        return ret;
                      }
                      ret = elem.value;
                      return typeof ret === 'string'
                        ? ret.replace(rreturn, '')
                        : ret == null
                        ? ''
                        : ret;
                    }
                    return;
                  }
                  isFunction = camQuery.isFunction(value);
                  return this.each(function (i) {
                    var val,
                      self = camQuery(this);
                    if (this.nodeType !== 1) {
                      return;
                    }
                    if (isFunction) {
                      val = value.call(this, i, self.val());
                    } else {
                      val = value;
                    }
                    if (val == null) {
                      val = '';
                    } else {
                      if (typeof val === 'number') {
                        val += '';
                      } else {
                        if (camQuery.isArray(val)) {
                          val = camQuery.map(val, function (value) {
                            return value == null ? '' : value + '';
                          });
                        }
                      }
                    }
                    hooks =
                      camQuery.valHooks[this.type] ||
                      camQuery.valHooks[this.nodeName.toLowerCase()];
                    if (
                      !hooks ||
                      !('set' in hooks) ||
                      hooks.set(this, val, 'value') === undefined
                    ) {
                      this.value = val;
                    }
                  });
                },
              });
              camQuery.extend({
                valHooks: {
                  option: {
                    get: function (elem) {
                      var val = elem.attributes.value;
                      return !val || val.specified ? elem.value : elem.text;
                    },
                  },
                  select: {
                    get: function (elem) {
                      var value,
                        option,
                        options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === 'select-one' || index < 0,
                        values = one ? null : [],
                        max = one ? index + 1 : options.length,
                        i = index < 0 ? max : one ? index : 0;
                      for (; i < max; i++) {
                        option = options[i];
                        if (
                          (option.selected || i === index) &&
                          (camQuery.support.optDisabled
                            ? !option.disabled
                            : option.getAttribute('disabled') === null) &&
                          (!option.parentNode.disabled ||
                            !camQuery.nodeName(option.parentNode, 'optgroup'))
                        ) {
                          value = camQuery(option).val();
                          if (one) {
                            return value;
                          }
                          values.push(value);
                        }
                      }
                      return values;
                    },
                    set: function (elem, value) {
                      var values = camQuery.makeArray(value);
                      camQuery(elem)
                        .find('option')
                        .each(function () {
                          this.selected = camQuery.inArray(camQuery(this).val(), values) >= 0;
                        });
                      if (!values.length) {
                        elem.selectedIndex = -1;
                      }
                      return values;
                    },
                  },
                },
                attrFn: {},
                attr: function (elem, name, value, pass) {
                  var ret,
                    hooks,
                    notxml,
                    nType = elem.nodeType;
                  if (!elem || nType === 3 || nType === 8 || nType === 2) {
                    return;
                  }
                  if (pass && camQuery.isFunction(camQuery.fn[name])) {
                    return camQuery(elem)[name](value);
                  }
                  if (typeof elem.getAttribute === 'undefined') {
                    return camQuery.prop(elem, name, value);
                  }
                  notxml = nType !== 1 || !camQuery.isXMLDoc(elem);
                  if (notxml) {
                    name = name.toLowerCase();
                    hooks =
                      camQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
                  }
                  if (value !== undefined) {
                    if (value === null) {
                      camQuery.removeAttr(elem, name);
                      return;
                    } else {
                      if (
                        hooks &&
                        'set' in hooks &&
                        notxml &&
                        (ret = hooks.set(elem, value, name)) !== undefined
                      ) {
                        return ret;
                      } else {
                        elem.setAttribute(name, value + '');
                        return value;
                      }
                    }
                  } else {
                    if (
                      hooks &&
                      'get' in hooks &&
                      notxml &&
                      (ret = hooks.get(elem, name)) !== null
                    ) {
                      return ret;
                    } else {
                      ret = elem.getAttribute(name);
                      return ret === null ? undefined : ret;
                    }
                  }
                },
                removeAttr: function (elem, value) {
                  var propName,
                    attrNames,
                    name,
                    isBool,
                    i = 0;
                  if (value && elem.nodeType === 1) {
                    attrNames = value.split(core_rspace);
                    for (; i < attrNames.length; i++) {
                      name = attrNames[i];
                      if (name) {
                        propName = camQuery.propFix[name] || name;
                        isBool = rboolean.test(name);
                        if (!isBool) {
                          camQuery.attr(elem, name, '');
                        }
                        elem.removeAttribute(getSetAttribute ? name : propName);
                        if (isBool && propName in elem) {
                          elem[propName] = false;
                        }
                      }
                    }
                  }
                },
                attrHooks: {
                  type: {
                    set: function (elem, value) {
                      if (rtype.test(elem.nodeName) && elem.parentNode) {
                        camQuery.error("type property can't be changed");
                      } else {
                        if (
                          !camQuery.support.radioValue &&
                          value === 'radio' &&
                          camQuery.nodeName(elem, 'input')
                        ) {
                          var val = elem.value;
                          elem.setAttribute('type', value);
                          if (val) {
                            elem.value = val;
                          }
                          return value;
                        }
                      }
                    },
                  },
                  value: {
                    get: function (elem, name) {
                      if (nodeHook && camQuery.nodeName(elem, 'button')) {
                        return nodeHook.get(elem, name);
                      }
                      return name in elem ? elem.value : null;
                    },
                    set: function (elem, value, name) {
                      if (nodeHook && camQuery.nodeName(elem, 'button')) {
                        return nodeHook.set(elem, value, name);
                      }
                      elem.value = value;
                    },
                  },
                },
                propFix: {
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
                prop: function (elem, name, value) {
                  var ret,
                    hooks,
                    notxml,
                    nType = elem.nodeType;
                  if (!elem || nType === 3 || nType === 8 || nType === 2) {
                    return;
                  }
                  notxml = nType !== 1 || !camQuery.isXMLDoc(elem);
                  if (notxml) {
                    name = camQuery.propFix[name] || name;
                    hooks = camQuery.propHooks[name];
                  }
                  if (value !== undefined) {
                    if (
                      hooks &&
                      'set' in hooks &&
                      (ret = hooks.set(elem, value, name)) !== undefined
                    ) {
                      return ret;
                    } else {
                      return (elem[name] = value);
                    }
                  } else {
                    if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
                      return ret;
                    } else {
                      return elem[name];
                    }
                  }
                },
                propHooks: {
                  tabIndex: {
                    get: function (elem) {
                      var attributeNode = elem.getAttributeNode('tabindex');
                      return attributeNode && attributeNode.specified
                        ? parseInt(attributeNode.value, 10)
                        : rfocusable.test(elem.nodeName) ||
                          (rclickable.test(elem.nodeName) && elem.href)
                        ? 0
                        : undefined;
                    },
                  },
                },
              });
              boolHook = {
                get: function (elem, name) {
                  var attrNode,
                    property = camQuery.prop(elem, name);
                  return property === true ||
                    (typeof property !== 'boolean' &&
                      (attrNode = elem.getAttributeNode(name)) &&
                      attrNode.nodeValue !== false)
                    ? name.toLowerCase()
                    : undefined;
                },
                set: function (elem, value, name) {
                  var propName;
                  if (value === false) {
                    camQuery.removeAttr(elem, name);
                  } else {
                    propName = camQuery.propFix[name] || name;
                    if (propName in elem) {
                      elem[propName] = true;
                    }
                    elem.setAttribute(name, name.toLowerCase());
                  }
                  return name;
                },
              };
              if (!getSetAttribute) {
                fixSpecified = { name: true, id: true, coords: true };
                nodeHook = camQuery.valHooks.button = {
                  get: function (elem, name) {
                    var ret;
                    ret = elem.getAttributeNode(name);
                    return ret && (fixSpecified[name] ? ret.value !== '' : ret.specified)
                      ? ret.value
                      : undefined;
                  },
                  set: function (elem, value, name) {
                    var ret = elem.getAttributeNode(name);
                    if (!ret) {
                      ret = document.createAttribute(name);
                      elem.setAttributeNode(ret);
                    }
                    return (ret.value = value + '');
                  },
                };
                camQuery.each(['width', 'height'], function (i, name) {
                  camQuery.attrHooks[name] = camQuery.extend(camQuery.attrHooks[name], {
                    set: function (elem, value) {
                      if (value === '') {
                        elem.setAttribute(name, 'auto');
                        return value;
                      }
                    },
                  });
                });
                camQuery.attrHooks.contenteditable = {
                  get: nodeHook.get,
                  set: function (elem, value, name) {
                    if (value === '') {
                      value = 'false';
                    }
                    nodeHook.set(elem, value, name);
                  },
                };
              }
              if (!camQuery.support.hrefNormalized) {
                camQuery.each(['href', 'src', 'width', 'height'], function (i, name) {
                  camQuery.attrHooks[name] = camQuery.extend(camQuery.attrHooks[name], {
                    get: function (elem) {
                      var ret = elem.getAttribute(name, 2);
                      return ret === null ? undefined : ret;
                    },
                  });
                });
              }
              if (!camQuery.support.style) {
                camQuery.attrHooks.style = {
                  get: function (elem) {
                    return elem.style.cssText.toLowerCase() || undefined;
                  },
                  set: function (elem, value) {
                    return (elem.style.cssText = value + '');
                  },
                };
              }
              if (!camQuery.support.optSelected) {
                camQuery.propHooks.selected = camQuery.extend(camQuery.propHooks.selected, {
                  get: function (elem) {
                    var parent = elem.parentNode;
                    if (parent) {
                      parent.selectedIndex;
                      if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                      }
                    }
                    return null;
                  },
                });
              }
              if (!camQuery.support.enctype) {
                camQuery.propFix.enctype = 'encoding';
              }
              if (!camQuery.support.checkOn) {
                camQuery.each(['radio', 'checkbox'], function () {
                  camQuery.valHooks[this] = {
                    get: function (elem) {
                      return elem.getAttribute('value') === null ? 'on' : elem.value;
                    },
                  };
                });
              }
              camQuery.each(['radio', 'checkbox'], function () {
                camQuery.valHooks[this] = camQuery.extend(camQuery.valHooks[this], {
                  set: function (elem, value) {
                    if (camQuery.isArray(value)) {
                      return (elem.checked = camQuery.inArray(camQuery(elem).val(), value) >= 0);
                    }
                  },
                });
              });
              var rformElems = /^(?:textarea|input|select)$/i,
                rtypenamespace = /^([^\.]*|)(?:\.(.+)|)$/,
                rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
                rkeyEvent = /^key/,
                rmouseEvent = /^(?:mouse|contextmenu)|click/,
                rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
                hoverHack = function (events) {
                  return camQuery.event.special.hover
                    ? events
                    : events.replace(rhoverHack, 'mouseenter$1 mouseleave$1');
                };
              camQuery.event = {
                add: function (elem, types, handler, data, selector) {
                  var elemData,
                    eventHandle,
                    events,
                    t,
                    tns,
                    type,
                    namespaces,
                    handleObj,
                    handleObjIn,
                    handlers,
                    special;
                  if (
                    elem.nodeType === 3 ||
                    elem.nodeType === 8 ||
                    !types ||
                    !handler ||
                    !(elemData = camQuery._data(elem))
                  ) {
                    return;
                  }
                  if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector;
                  }
                  if (!handler.guid) {
                    handler.guid = camQuery.guid++;
                  }
                  events = elemData.events;
                  if (!events) {
                    elemData.events = events = {};
                  }
                  eventHandle = elemData.handle;
                  if (!eventHandle) {
                    elemData.handle = eventHandle = function (e) {
                      return typeof camQuery !== 'undefined' &&
                        (!e || camQuery.event.triggered !== e.type)
                        ? camQuery.event.dispatch.apply(eventHandle.elem, arguments)
                        : undefined;
                    };
                    eventHandle.elem = elem;
                  }
                  types = camQuery.trim(hoverHack(types)).split(' ');
                  for (t = 0; t < types.length; t++) {
                    tns = rtypenamespace.exec(types[t]) || [];
                    type = tns[1];
                    namespaces = (tns[2] || '').split('.').sort();
                    special = camQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    special = camQuery.event.special[type] || {};
                    handleObj = camQuery.extend(
                      {
                        type: type,
                        origType: tns[1],
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && camQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join('.'),
                      },
                      handleObjIn
                    );
                    handlers = events[type];
                    if (!handlers) {
                      handlers = events[type] = [];
                      handlers.delegateCount = 0;
                      if (
                        !special.setup ||
                        special.setup.call(elem, data, namespaces, eventHandle) === false
                      ) {
                        if (elem.addEventListener) {
                          elem.addEventListener(type, eventHandle, false);
                        } else {
                          if (elem.attachEvent) {
                            elem.attachEvent('on' + type, eventHandle);
                          }
                        }
                      }
                    }
                    if (special.add) {
                      special.add.call(elem, handleObj);
                      if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                      }
                    }
                    if (selector) {
                      handlers.splice(handlers.delegateCount++, 0, handleObj);
                    } else {
                      handlers.push(handleObj);
                    }
                    camQuery.event.global[type] = true;
                  }
                  elem = null;
                },
                global: {},
                remove: function (elem, types, handler, selector, mappedTypes) {
                  var t,
                    tns,
                    type,
                    origType,
                    namespaces,
                    origCount,
                    j,
                    events,
                    special,
                    eventType,
                    handleObj,
                    elemData = camQuery.hasData(elem) && camQuery._data(elem);
                  if (!elemData || !(events = elemData.events)) {
                    return;
                  }
                  types = camQuery.trim(hoverHack(types || '')).split(' ');
                  for (t = 0; t < types.length; t++) {
                    tns = rtypenamespace.exec(types[t]) || [];
                    type = origType = tns[1];
                    namespaces = tns[2];
                    if (!type) {
                      for (type in events) {
                        camQuery.event.remove(elem, type + types[t], handler, selector, true);
                      }
                      continue;
                    }
                    special = camQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    eventType = events[type] || [];
                    origCount = eventType.length;
                    namespaces = namespaces
                      ? new RegExp(
                          '(^|\\.)' +
                            namespaces.split('.').sort().join('\\.(?:.*\\.|)') +
                            '(\\.|$)'
                        )
                      : null;
                    for (j = 0; j < eventType.length; j++) {
                      handleObj = eventType[j];
                      if (
                        (mappedTypes || origType === handleObj.origType) &&
                        (!handler || handler.guid === handleObj.guid) &&
                        (!namespaces || namespaces.test(handleObj.namespace)) &&
                        (!selector ||
                          selector === handleObj.selector ||
                          (selector === '**' && handleObj.selector))
                      ) {
                        eventType.splice(j--, 1);
                        if (handleObj.selector) {
                          eventType.delegateCount--;
                        }
                        if (special.remove) {
                          special.remove.call(elem, handleObj);
                        }
                      }
                    }
                    if (eventType.length === 0 && origCount !== eventType.length) {
                      if (
                        !special.teardown ||
                        special.teardown.call(elem, namespaces, elemData.handle) === false
                      ) {
                        camQuery.removeEvent(elem, type, elemData.handle);
                      }
                      delete events[type];
                    }
                  }
                  if (camQuery.isEmptyObject(events)) {
                    delete elemData.handle;
                    camQuery.removeData(elem, 'events', true);
                  }
                },
                customEvent: { getData: true, setData: true, changeData: true },
                trigger: function (event, data, elem, onlyHandlers) {
                  if (elem && (elem.nodeType === 3 || elem.nodeType === 8)) {
                    return;
                  }
                  var cache,
                    exclusive,
                    i,
                    cur,
                    old,
                    ontype,
                    special,
                    handle,
                    eventPath,
                    bubbleType,
                    type = event.type || event,
                    namespaces = [];
                  if (rfocusMorph.test(type + camQuery.event.triggered)) {
                    return;
                  }
                  if (type.indexOf('!') >= 0) {
                    type = type.slice(0, -1);
                    exclusive = true;
                  }
                  if (type.indexOf('.') >= 0) {
                    namespaces = type.split('.');
                    type = namespaces.shift();
                    namespaces.sort();
                  }
                  if (
                    (!elem || camQuery.event.customEvent[type]) &&
                    !camQuery.event.global[type]
                  ) {
                    return;
                  }
                  event =
                    typeof event === 'object'
                      ? event[camQuery.expando]
                        ? event
                        : new camQuery.Event(type, event)
                      : new camQuery.Event(type);
                  event.type = type;
                  event.isTrigger = true;
                  event.exclusive = exclusive;
                  event.namespace = namespaces.join('.');
                  event.namespace_re = event.namespace
                    ? new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)')
                    : null;
                  ontype = type.indexOf(':') < 0 ? 'on' + type : '';
                  if (!elem) {
                    cache = camQuery.cache;
                    for (i in cache) {
                      if (cache[i].events && cache[i].events[type]) {
                        camQuery.event.trigger(event, data, cache[i].handle.elem, true);
                      }
                    }
                    return;
                  }
                  event.result = undefined;
                  if (!event.target) {
                    event.target = elem;
                  }
                  data = data != null ? camQuery.makeArray(data) : [];
                  data.unshift(event);
                  special = camQuery.event.special[type] || {};
                  if (special.trigger && special.trigger.apply(elem, data) === false) {
                    return;
                  }
                  eventPath = [[elem, special.bindType || type]];
                  if (!onlyHandlers && !special.noBubble && !camQuery.isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    cur = rfocusMorph.test(bubbleType + type) ? elem : elem.parentNode;
                    for (old = elem; cur; cur = cur.parentNode) {
                      eventPath.push([cur, bubbleType]);
                      old = cur;
                    }
                    if (old === (elem.ownerDocument || document)) {
                      eventPath.push([old.defaultView || old.parentWindow || window, bubbleType]);
                    }
                  }
                  for (i = 0; i < eventPath.length && !event.isPropagationStopped(); i++) {
                    cur = eventPath[i][0];
                    event.type = eventPath[i][1];
                    handle =
                      (camQuery._data(cur, 'events') || {})[event.type] &&
                      camQuery._data(cur, 'handle');
                    if (handle) {
                      handle.apply(cur, data);
                    }
                    handle = ontype && cur[ontype];
                    if (
                      handle &&
                      camQuery.acceptData(cur) &&
                      handle.apply &&
                      handle.apply(cur, data) === false
                    ) {
                      event.preventDefault();
                    }
                  }
                  event.type = type;
                  if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if (
                      (!special._default ||
                        special._default.apply(elem.ownerDocument, data) === false) &&
                      !(type === 'click' && camQuery.nodeName(elem, 'a')) &&
                      camQuery.acceptData(elem)
                    ) {
                      if (
                        ontype &&
                        elem[type] &&
                        ((type !== 'focus' && type !== 'blur') ||
                          event.target.offsetWidth !== 0) &&
                        !camQuery.isWindow(elem)
                      ) {
                        old = elem[ontype];
                        if (old) {
                          elem[ontype] = null;
                        }
                        camQuery.event.triggered = type;
                        elem[type]();
                        camQuery.event.triggered = undefined;
                        if (old) {
                          elem[ontype] = old;
                        }
                      }
                    }
                  }
                  return event.result;
                },
                dispatch: function (event) {
                  event = camQuery.event.fix(event || window.event);
                  var i,
                    j,
                    cur,
                    ret,
                    selMatch,
                    matched,
                    matches,
                    handleObj,
                    sel,
                    related,
                    handlers = (camQuery._data(this, 'events') || {})[event.type] || [],
                    delegateCount = handlers.delegateCount,
                    args = core_slice.call(arguments),
                    run_all = !event.exclusive && !event.namespace,
                    special = camQuery.event.special[event.type] || {},
                    handlerQueue = [];
                  args[0] = event;
                  event.delegateTarget = this;
                  if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                    return;
                  }
                  if (delegateCount && !(event.button && event.type === 'click')) {
                    for (cur = event.target; cur != this; cur = cur.parentNode || this) {
                      if (cur.disabled !== true || event.type !== 'click') {
                        selMatch = {};
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                          handleObj = handlers[i];
                          sel = handleObj.selector;
                          if (selMatch[sel] === undefined) {
                            selMatch[sel] = handleObj.needsContext
                              ? camQuery(sel, this).index(cur) >= 0
                              : camQuery.find(sel, this, null, [cur]).length;
                          }
                          if (selMatch[sel]) {
                            matches.push(handleObj);
                          }
                        }
                        if (matches.length) {
                          handlerQueue.push({ elem: cur, matches: matches });
                        }
                      }
                    }
                  }
                  if (handlers.length > delegateCount) {
                    handlerQueue.push({ elem: this, matches: handlers.slice(delegateCount) });
                  }
                  for (i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++) {
                    matched = handlerQueue[i];
                    event.currentTarget = matched.elem;
                    for (
                      j = 0;
                      j < matched.matches.length && !event.isImmediatePropagationStopped();
                      j++
                    ) {
                      handleObj = matched.matches[j];
                      if (
                        run_all ||
                        (!event.namespace && !handleObj.namespace) ||
                        (event.namespace_re && event.namespace_re.test(handleObj.namespace))
                      ) {
                        event.data = handleObj.data;
                        event.handleObj = handleObj;
                        ret = (
                          (camQuery.event.special[handleObj.origType] || {}).handle ||
                          handleObj.handler
                        ).apply(matched.elem, args);
                        if (ret !== undefined) {
                          event.result = ret;
                          if (ret === false) {
                            event.preventDefault();
                            event.stopPropagation();
                          }
                        }
                      }
                    }
                  }
                  if (special.postDispatch) {
                    special.postDispatch.call(this, event);
                  }
                  return event.result;
                },
                props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
                  ' '
                ),
                fixHooks: {},
                keyHooks: {
                  props: 'char charCode key keyCode'.split(' '),
                  filter: function (event, original) {
                    if (event.which == null) {
                      event.which =
                        original.charCode != null ? original.charCode : original.keyCode;
                    }
                    return event;
                  },
                },
                mouseHooks: {
                  props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
                    ' '
                  ),
                  filter: function (event, original) {
                    var eventDoc,
                      doc,
                      body,
                      button = original.button,
                      fromElement = original.fromElement;
                    if (event.pageX == null && original.clientX != null) {
                      eventDoc = event.target.ownerDocument || document;
                      doc = eventDoc.documentElement;
                      body = eventDoc.body;
                      event.pageX =
                        original.clientX +
                        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
                      event.pageY =
                        original.clientY +
                        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
                        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
                    }
                    if (!event.relatedTarget && fromElement) {
                      event.relatedTarget =
                        fromElement === event.target ? original.toElement : fromElement;
                    }
                    if (!event.which && button !== undefined) {
                      event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                    }
                    return event;
                  },
                },
                fix: function (event) {
                  if (event[camQuery.expando]) {
                    return event;
                  }
                  var i,
                    prop,
                    originalEvent = event,
                    fixHook = camQuery.event.fixHooks[event.type] || {},
                    copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                  event = camQuery.Event(originalEvent);
                  for (i = copy.length; i; ) {
                    prop = copy[--i];
                    event[prop] = originalEvent[prop];
                  }
                  if (!event.target) {
                    event.target = originalEvent.srcElement || document;
                  }
                  if (event.target.nodeType === 3) {
                    event.target = event.target.parentNode;
                  }
                  event.metaKey = !!event.metaKey;
                  return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
                },
                special: {
                  load: { noBubble: true },
                  focus: { delegateType: 'focusin' },
                  blur: { delegateType: 'focusout' },
                  beforeunload: {
                    setup: function (data, namespaces, eventHandle) {
                      if (camQuery.isWindow(this)) {
                        this.onbeforeunload = eventHandle;
                      }
                    },
                    teardown: function (namespaces, eventHandle) {
                      if (this.onbeforeunload === eventHandle) {
                        this.onbeforeunload = null;
                      }
                    },
                  },
                },
                simulate: function (type, elem, event, bubble) {
                  var e = camQuery.extend(new camQuery.Event(), event, {
                    type: type,
                    isSimulated: true,
                    originalEvent: {},
                  });
                  if (bubble) {
                    camQuery.event.trigger(e, null, elem);
                  } else {
                    camQuery.event.dispatch.call(elem, e);
                  }
                  if (e.isDefaultPrevented()) {
                    event.preventDefault();
                  }
                },
              };
              camQuery.event.handle = camQuery.event.dispatch;
              camQuery.removeEvent = document.removeEventListener
                ? function (elem, type, handle) {
                    if (elem.removeEventListener) {
                      elem.removeEventListener(type, handle, false);
                    }
                  }
                : function (elem, type, handle) {
                    var name = 'on' + type;
                    if (elem.detachEvent) {
                      if (typeof elem[name] === 'undefined') {
                        elem[name] = null;
                      }
                      elem.detachEvent(name, handle);
                    }
                  };
              camQuery.Event = function (src, props) {
                if (!(this instanceof camQuery.Event)) {
                  return new camQuery.Event(src, props);
                }
                if (src && src.type) {
                  this.originalEvent = src;
                  this.type = src.type;
                  this.isDefaultPrevented =
                    src.defaultPrevented ||
                    src.returnValue === false ||
                    (src.getPreventDefault && src.getPreventDefault())
                      ? returnTrue
                      : returnFalse;
                } else {
                  this.type = src;
                }
                if (props) {
                  camQuery.extend(this, props);
                }
                this.timeStamp = (src && src.timeStamp) || camQuery.now();
                this[camQuery.expando] = true;
              };
              function returnFalse () {
                return false;
              }
              function returnTrue () {
                return true;
              }
              camQuery.Event.prototype = {
                preventDefault: function () {
                  this.isDefaultPrevented = returnTrue;
                  var e = this.originalEvent;
                  if (!e) {
                    return;
                  }
                  if (e.preventDefault) {
                    e.preventDefault();
                  } else {
                    e.returnValue = false;
                  }
                },
                stopPropagation: function () {
                  this.isPropagationStopped = returnTrue;
                  var e = this.originalEvent;
                  if (!e) {
                    return;
                  }
                  if (e.stopPropagation) {
                    e.stopPropagation();
                  }
                  e.cancelBubble = true;
                },
                stopImmediatePropagation: function () {
                  this.isImmediatePropagationStopped = returnTrue;
                  this.stopPropagation();
                },
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
              };
              camQuery.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function (
                orig,
                fix
              ) {
                camQuery.event.special[orig] = {
                  delegateType: fix,
                  bindType: fix,
                  handle: function (event) {
                    var ret,
                      target = this,
                      related = event.relatedTarget,
                      handleObj = event.handleObj,
                      selector = handleObj.selector;
                    if (!related || (related !== target && !camQuery.contains(target, related))) {
                      event.type = handleObj.origType;
                      ret = handleObj.handler.apply(this, arguments);
                      event.type = fix;
                    }
                    return ret;
                  },
                };
              });
              if (!camQuery.support.submitBubbles) {
                camQuery.event.special.submit = {
                  setup: function () {
                    if (camQuery.nodeName(this, 'form')) {
                      return false;
                    }
                    camQuery.event.add(this, 'click._submit keypress._submit', function (e) {
                      var elem = e.target,
                        form =
                          camQuery.nodeName(elem, 'input') || camQuery.nodeName(elem, 'button')
                            ? elem.form
                            : undefined;
                      if (form && !camQuery._data(form, '_submit_attached')) {
                        camQuery.event.add(form, 'submit._submit', function (event) {
                          event._submit_bubble = true;
                        });
                        camQuery._data(form, '_submit_attached', true);
                      }
                    });
                  },
                  postDispatch: function (event) {
                    if (event._submit_bubble) {
                      delete event._submit_bubble;
                      if (this.parentNode && !event.isTrigger) {
                        camQuery.event.simulate('submit', this.parentNode, event, true);
                      }
                    }
                  },
                  teardown: function () {
                    if (camQuery.nodeName(this, 'form')) {
                      return false;
                    }
                    camQuery.event.remove(this, '._submit');
                  },
                };
              }
              if (!camQuery.support.changeBubbles) {
                camQuery.event.special.change = {
                  setup: function () {
                    if (rformElems.test(this.nodeName)) {
                      if (this.type === 'checkbox' || this.type === 'radio') {
                        camQuery.event.add(this, 'propertychange._change', function (event) {
                          if (event.originalEvent.propertyName === 'checked') {
                            this._just_changed = true;
                          }
                        });
                        camQuery.event.add(this, 'click._change', function (event) {
                          if (this._just_changed && !event.isTrigger) {
                            this._just_changed = false;
                          }
                          camQuery.event.simulate('change', this, event, true);
                        });
                      }
                      return false;
                    }
                    camQuery.event.add(this, 'beforeactivate._change', function (e) {
                      var elem = e.target;
                      if (
                        rformElems.test(elem.nodeName) &&
                        !camQuery._data(elem, '_change_attached')
                      ) {
                        camQuery.event.add(elem, 'change._change', function (event) {
                          if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                            camQuery.event.simulate('change', this.parentNode, event, true);
                          }
                        });
                        camQuery._data(elem, '_change_attached', true);
                      }
                    });
                  },
                  handle: function (event) {
                    var elem = event.target;
                    if (
                      this !== elem ||
                      event.isSimulated ||
                      event.isTrigger ||
                      (elem.type !== 'radio' && elem.type !== 'checkbox')
                    ) {
                      return event.handleObj.handler.apply(this, arguments);
                    }
                  },
                  teardown: function () {
                    camQuery.event.remove(this, '._change');
                    return !rformElems.test(this.nodeName);
                  },
                };
              }
              if (!camQuery.support.focusinBubbles) {
                camQuery.each({ focus: 'focusin', blur: 'focusout' }, function (orig, fix) {
                  var attaches = 0,
                    handler = function (event) {
                      camQuery.event.simulate(fix, event.target, camQuery.event.fix(event), true);
                    };
                  camQuery.event.special[fix] = {
                    setup: function () {
                      if (attaches++ === 0) {
                        document.addEventListener(orig, handler, true);
                      }
                    },
                    teardown: function () {
                      if (--attaches === 0) {
                        document.removeEventListener(orig, handler, true);
                      }
                    },
                  };
                });
              }
              camQuery.fn.extend({
                on: function (types, selector, data, fn, one) {
                  var origFn, type;
                  if (typeof types === 'object') {
                    if (typeof selector !== 'string') {
                      data = data || selector;
                      selector = undefined;
                    }
                    for (type in types) {
                      this.on(type, selector, data, types[type], one);
                    }
                    return this;
                  }
                  if (data == null && fn == null) {
                    fn = selector;
                    data = selector = undefined;
                  } else {
                    if (fn == null) {
                      if (typeof selector === 'string') {
                        fn = data;
                        data = undefined;
                      } else {
                        fn = data;
                        data = selector;
                        selector = undefined;
                      }
                    }
                  }
                  if (fn === false) {
                    fn = returnFalse;
                  } else {
                    if (!fn) {
                      return this;
                    }
                  }
                  if (one === 1) {
                    origFn = fn;
                    fn = function (event) {
                      camQuery().off(event);
                      return origFn.apply(this, arguments);
                    };
                    fn.guid = origFn.guid || (origFn.guid = camQuery.guid++);
                  }
                  return this.each(function () {
                    camQuery.event.add(this, types, fn, data, selector);
                  });
                },
                one: function (types, selector, data, fn) {
                  return this.on(types, selector, data, fn, 1);
                },
                off: function (types, selector, fn) {
                  var handleObj, type;
                  if (types && types.preventDefault && types.handleObj) {
                    handleObj = types.handleObj;
                    camQuery(types.delegateTarget).off(
                      handleObj.namespace
                        ? handleObj.origType + '.' + handleObj.namespace
                        : handleObj.origType,
                      handleObj.selector,
                      handleObj.handler
                    );
                    return this;
                  }
                  if (typeof types === 'object') {
                    for (type in types) {
                      this.off(type, selector, types[type]);
                    }
                    return this;
                  }
                  if (selector === false || typeof selector === 'function') {
                    fn = selector;
                    selector = undefined;
                  }
                  if (fn === false) {
                    fn = returnFalse;
                  }
                  return this.each(function () {
                    camQuery.event.remove(this, types, fn, selector);
                  });
                },
                bind: function (types, data, fn) {
                  return this.on(types, null, data, fn);
                },
                unbind: function (types, fn) {
                  return this.off(types, null, fn);
                },
                live: function (types, data, fn) {
                  camQuery(this.context).on(types, this.selector, data, fn);
                  return this;
                },
                die: function (types, fn) {
                  camQuery(this.context).off(types, this.selector || '**', fn);
                  return this;
                },
                delegate: function (selector, types, data, fn) {
                  return this.on(types, selector, data, fn);
                },
                undelegate: function (selector, types, fn) {
                  return arguments.length === 1
                    ? this.off(selector, '**')
                    : this.off(types, selector || '**', fn);
                },
                trigger: function (type, data) {
                  return this.each(function () {
                    camQuery.event.trigger(type, data, this);
                  });
                },
                triggerHandler: function (type, data) {
                  if (this[0]) {
                    return camQuery.event.trigger(type, data, this[0], true);
                  }
                },
                toggle: function (fn) {
                  var args = arguments,
                    guid = fn.guid || camQuery.guid++,
                    i = 0,
                    toggler = function (event) {
                      var lastToggle = (camQuery._data(this, 'lastToggle' + fn.guid) || 0) % i;
                      camQuery._data(this, 'lastToggle' + fn.guid, lastToggle + 1);
                      event.preventDefault();
                      return args[lastToggle].apply(this, arguments) || false;
                    };
                  toggler.guid = guid;
                  while (i < args.length) {
                    args[i++].guid = guid;
                  }
                  return this.click(toggler);
                },
                hover: function (fnOver, fnOut) {
                  return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                },
              });
              camQuery.each(
                'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
                  ' '
                ),
                function (i, name) {
                  camQuery.fn[name] = function (data, fn) {
                    if (fn == null) {
                      fn = data;
                      data = null;
                    }
                    return arguments.length > 0
                      ? this.on(name, null, data, fn)
                      : this.trigger(name);
                  };
                  if (rkeyEvent.test(name)) {
                    camQuery.event.fixHooks[name] = camQuery.event.keyHooks;
                  }
                  if (rmouseEvent.test(name)) {
                    camQuery.event.fixHooks[name] = camQuery.event.mouseHooks;
                  }
                }
              );
              (function (window, undefined) {
                var cachedruns,
                  assertGetIdNotName,
                  Expr,
                  getText,
                  isXML,
                  contains,
                  compile,
                  sortOrder,
                  hasDuplicate,
                  outermostContext,
                  baseHasDuplicate = true,
                  strundefined = 'undefined',
                  expando = ('sizcache' + Math.random()).replace('.', ''),
                  Token = String,
                  document = window.document,
                  docElem = document.documentElement,
                  dirruns = 0,
                  done = 0,
                  pop = [].pop,
                  push = [].push,
                  slice = [].slice,
                  indexOf =
                    [].indexOf ||
                    function (elem) {
                      var i = 0,
                        len = this.length;
                      for (; i < len; i++) {
                        if (this[i] === elem) {
                          return i;
                        }
                      }
                      return -1;
                    },
                  markFunction = function (fn, value) {
                    fn[expando] = value == null || value;
                    return fn;
                  },
                  createCache = function () {
                    var cache = {},
                      keys = [];
                    return markFunction(function (key, value) {
                      if (keys.push(key) > Expr.cacheLength) {
                        delete cache[keys.shift()];
                      }
                      return (cache[key + ' '] = value);
                    }, cache);
                  },
                  classCache = createCache(),
                  tokenCache = createCache(),
                  compilerCache = createCache(),
                  whitespace = '[\\x20\\t\\r\\n\\f]',
                  characterEncoding = '(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+',
                  identifier = characterEncoding.replace('w', 'w#'),
                  operators = '([*^$|!~]?=)',
                  attributes =
                    '\\[' +
                    whitespace +
                    '*(' +
                    characterEncoding +
                    ')' +
                    whitespace +
                    '*(?:' +
                    operators +
                    whitespace +
                    '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' +
                    identifier +
                    ')|)|)' +
                    whitespace +
                    '*\\]',
                  pseudos =
                    ':(' +
                    characterEncoding +
                    ')(?:\\((?:([\'"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:' +
                    attributes +
                    ')|[^:]|\\\\.)*|.*))\\)|)',
                  pos =
                    ':(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                    whitespace +
                    '*((?:-\\d)?\\d*)' +
                    whitespace +
                    '*\\)|)(?=[^-]|$)',
                  rtrim = new RegExp(
                    '^' + whitespace + '+|((?:^|[^\\\\])(?:\\\\.)*)' + whitespace + '+$',
                    'g'
                  ),
                  rcomma = new RegExp('^' + whitespace + '*,' + whitespace + '*'),
                  rcombinators = new RegExp(
                    '^' + whitespace + '*([\\x20\\t\\r\\n\\f>+~])' + whitespace + '*'
                  ),
                  rpseudo = new RegExp(pseudos),
                  rquickExpr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                  rnot = /^:not/,
                  rsibling = /[\x20\t\r\n\f]*[+~]/,
                  rendsWithNot = /:not\($/,
                  rheader = /h\d/i,
                  rinputs = /input|select|textarea|button/i,
                  rbackslash = /\\(?!\\)/g,
                  matchExpr = {
                    ID: new RegExp('^#(' + characterEncoding + ')'),
                    CLASS: new RegExp('^\\.(' + characterEncoding + ')'),
                    NAME: new RegExp('^\\[name=[\'"]?(' + characterEncoding + ')[\'"]?\\]'),
                    TAG: new RegExp('^(' + characterEncoding.replace('w', 'w*') + ')'),
                    ATTR: new RegExp('^' + attributes),
                    PSEUDO: new RegExp('^' + pseudos),
                    POS: new RegExp(pos, 'i'),
                    CHILD: new RegExp(
                      '^:(only|nth|first|last)-child(?:\\(' +
                        whitespace +
                        '*(even|odd|(([+-]|)(\\d*)n|)' +
                        whitespace +
                        '*(?:([+-]|)' +
                        whitespace +
                        '*(\\d+)|))' +
                        whitespace +
                        '*\\)|)',
                      'i'
                    ),
                    needsContext: new RegExp('^' + whitespace + '*[>+~]|' + pos, 'i'),
                  },
                  assert = function (fn) {
                    var div = document.createElement('div');
                    try {
                      return fn(div);
                    } catch (e) {
                      return false;
                    } finally {
                      div = null;
                    }
                  },
                  assertTagNameNoComments = assert(function (div) {
                    div.appendChild(document.createComment(''));
                    return !div.getElementsByTagName('*').length;
                  }),
                  assertHrefNotNormalized = assert(function (div) {
                    div.innerHTML = "<a href='#'></a>";
                    return (
                      div.firstChild &&
                      typeof div.firstChild.getAttribute !== strundefined &&
                      div.firstChild.getAttribute('href') === '#'
                    );
                  }),
                  assertAttributes = assert(function (div) {
                    div.innerHTML = '<select></select>';
                    var type = typeof div.lastChild.getAttribute('multiple');
                    return type !== 'boolean' && type !== 'string';
                  }),
                  assertUsableClassName = assert(function (div) {
                    div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                    if (!div.getElementsByClassName || !div.getElementsByClassName('e').length) {
                      return false;
                    }
                    div.lastChild.className = 'e';
                    return div.getElementsByClassName('e').length === 2;
                  }),
                  assertUsableName = assert(function (div) {
                    div.id = expando + 0;
                    div.innerHTML =
                      "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
                    docElem.insertBefore(div, docElem.firstChild);
                    var pass =
                      document.getElementsByName &&
                      document.getElementsByName(expando).length ===
                        2 + document.getElementsByName(expando + 0).length;
                    assertGetIdNotName = !document.getElementById(expando);
                    docElem.removeChild(div);
                    return pass;
                  });
                try {
                  slice.call(docElem.childNodes, 0)[0].nodeType;
                } catch (e) {
                  slice = function (i) {
                    var elem,
                      results = [];
                    for (; (elem = this[i]); i++) {
                      results.push(elem);
                    }
                    return results;
                  };
                }
                function Sizzle (selector, context, results, seed) {
                  results = results || [];
                  context = context || document;
                  var match,
                    elem,
                    xml,
                    m,
                    nodeType = context.nodeType;
                  if (!selector || typeof selector !== 'string') {
                    return results;
                  }
                  if (nodeType !== 1 && nodeType !== 9) {
                    return [];
                  }
                  xml = isXML(context);
                  if (!xml && !seed) {
                    if ((match = rquickExpr.exec(selector))) {
                      if ((m = match[1])) {
                        if (nodeType === 9) {
                          elem = context.getElementById(m);
                          if (elem && elem.parentNode) {
                            if (elem.id === m) {
                              results.push(elem);
                              return results;
                            }
                          } else {
                            return results;
                          }
                        } else {
                          if (
                            context.ownerDocument &&
                            (elem = context.ownerDocument.getElementById(m)) &&
                            contains(context, elem) &&
                            elem.id === m
                          ) {
                            results.push(elem);
                            return results;
                          }
                        }
                      } else {
                        if (match[2]) {
                          push.apply(
                            results,
                            slice.call(context.getElementsByTagName(selector), 0)
                          );
                          return results;
                        } else {
                          if (
                            (m = match[3]) &&
                            assertUsableClassName &&
                            context.getElementsByClassName
                          ) {
                            push.apply(results, slice.call(context.getElementsByClassName(m), 0));
                            return results;
                          }
                        }
                      }
                    }
                  }
                  return select(selector.replace(rtrim, '$1'), context, results, seed, xml);
                }
                Sizzle.matches = function (expr, elements) {
                  return Sizzle(expr, null, null, elements);
                };
                Sizzle.matchesSelector = function (elem, expr) {
                  return Sizzle(expr, null, null, [elem]).length > 0;
                };
                function createInputPseudo (type) {
                  return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === 'input' && elem.type === type;
                  };
                }
                function createButtonPseudo (type) {
                  return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === 'input' || name === 'button') && elem.type === type;
                  };
                }
                function createPositionalPseudo (fn) {
                  return markFunction(function (argument) {
                    argument = +argument;
                    return markFunction(function (seed, matches) {
                      var j,
                        matchIndexes = fn([], seed.length, argument),
                        i = matchIndexes.length;
                      while (i--) {
                        if (seed[(j = matchIndexes[i])]) {
                          seed[j] = !(matches[j] = seed[j]);
                        }
                      }
                    });
                  });
                }
                getText = Sizzle.getText = function (elem) {
                  var node,
                    ret = '',
                    i = 0,
                    nodeType = elem.nodeType;
                  if (nodeType) {
                    if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                      if (typeof elem.textContent === 'string') {
                        return elem.textContent;
                      } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                          ret += getText(elem);
                        }
                      }
                    } else {
                      if (nodeType === 3 || nodeType === 4) {
                        return elem.nodeValue;
                      }
                    }
                  } else {
                    for (; (node = elem[i]); i++) {
                      ret += getText(node);
                    }
                  }
                  return ret;
                };
                isXML = Sizzle.isXML = function (elem) {
                  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                  return documentElement ? documentElement.nodeName !== 'HTML' : false;
                };
                contains = Sizzle.contains = docElem.contains
                  ? function (a, b) {
                      var adown = a.nodeType === 9 ? a.documentElement : a,
                        bup = b && b.parentNode;
                      return (
                        a === bup ||
                        !!(bup && bup.nodeType === 1 && adown.contains && adown.contains(bup))
                      );
                    }
                  : docElem.compareDocumentPosition
                  ? function (a, b) {
                      return b && !!(a.compareDocumentPosition(b) & 16);
                    }
                  : function (a, b) {
                      while ((b = b.parentNode)) {
                        if (b === a) {
                          return true;
                        }
                      }
                      return false;
                    };
                Sizzle.attr = function (elem, name) {
                  var val,
                    xml = isXML(elem);
                  if (!xml) {
                    name = name.toLowerCase();
                  }
                  if ((val = Expr.attrHandle[name])) {
                    return val(elem);
                  }
                  if (xml || assertAttributes) {
                    return elem.getAttribute(name);
                  }
                  val = elem.getAttributeNode(name);
                  return val
                    ? typeof elem[name] === 'boolean'
                      ? elem[name]
                        ? name
                        : null
                      : val.specified
                      ? val.value
                      : null
                    : null;
                };
                Expr = Sizzle.selectors = {
                  cacheLength: 50,
                  createPseudo: markFunction,
                  match: matchExpr,
                  attrHandle: assertHrefNotNormalized
                    ? {}
                    : {
                        href: function (elem) {
                          return elem.getAttribute('href', 2);
                        },
                        type: function (elem) {
                          return elem.getAttribute('type');
                        },
                      },
                  find: {
                    ID: assertGetIdNotName
                      ? function (id, context, xml) {
                          if (typeof context.getElementById !== strundefined && !xml) {
                            var m = context.getElementById(id);
                            return m && m.parentNode ? [m] : [];
                          }
                        }
                      : function (id, context, xml) {
                          if (typeof context.getElementById !== strundefined && !xml) {
                            var m = context.getElementById(id);
                            return m
                              ? m.id === id ||
                                (typeof m.getAttributeNode !== strundefined &&
                                  m.getAttributeNode('id').value === id)
                                ? [m]
                                : undefined
                              : [];
                          }
                        },
                    TAG: assertTagNameNoComments
                      ? function (tag, context) {
                          if (typeof context.getElementsByTagName !== strundefined) {
                            return context.getElementsByTagName(tag);
                          }
                        }
                      : function (tag, context) {
                          var results = context.getElementsByTagName(tag);
                          if (tag === '*') {
                            var elem,
                              tmp = [],
                              i = 0;
                            for (; (elem = results[i]); i++) {
                              if (elem.nodeType === 1) {
                                tmp.push(elem);
                              }
                            }
                            return tmp;
                          }
                          return results;
                        },
                    NAME:
                      assertUsableName &&
                      function (tag, context) {
                        if (typeof context.getElementsByName !== strundefined) {
                          return context.getElementsByName(name);
                        }
                      },
                    CLASS:
                      assertUsableClassName &&
                      function (className, context, xml) {
                        if (typeof context.getElementsByClassName !== strundefined && !xml) {
                          return context.getElementsByClassName(className);
                        }
                      },
                  },
                  relative: {
                    '>': { dir: 'parentNode', first: true },
                    ' ': { dir: 'parentNode' },
                    '+': { dir: 'previousSibling', first: true },
                    '~': { dir: 'previousSibling' },
                  },
                  preFilter: {
                    ATTR: function (match) {
                      match[1] = match[1].replace(rbackslash, '');
                      match[3] = (match[4] || match[5] || '').replace(rbackslash, '');
                      if (match[2] === '~=') {
                        match[3] = ' ' + match[3] + ' ';
                      }
                      return match.slice(0, 4);
                    },
                    CHILD: function (match) {
                      match[1] = match[1].toLowerCase();
                      if (match[1] === 'nth') {
                        if (!match[2]) {
                          Sizzle.error(match[0]);
                        }
                        match[3] = +(match[3]
                          ? match[4] + (match[5] || 1)
                          : 2 * (match[2] === 'even' || match[2] === 'odd'));
                        match[4] = +(match[6] + match[7] || match[2] === 'odd');
                      } else {
                        if (match[2]) {
                          Sizzle.error(match[0]);
                        }
                      }
                      return match;
                    },
                    PSEUDO: function (match) {
                      var unquoted, excess;
                      if (matchExpr.CHILD.test(match[0])) {
                        return null;
                      }
                      if (match[3]) {
                        match[2] = match[3];
                      } else {
                        if ((unquoted = match[4])) {
                          if (
                            rpseudo.test(unquoted) &&
                            (excess = tokenize(unquoted, true)) &&
                            (excess =
                              unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)
                          ) {
                            unquoted = unquoted.slice(0, excess);
                            match[0] = match[0].slice(0, excess);
                          }
                          match[2] = unquoted;
                        }
                      }
                      return match.slice(0, 3);
                    },
                  },
                  filter: {
                    ID: assertGetIdNotName
                      ? function (id) {
                          id = id.replace(rbackslash, '');
                          return function (elem) {
                            return elem.getAttribute('id') === id;
                          };
                        }
                      : function (id) {
                          id = id.replace(rbackslash, '');
                          return function (elem) {
                            var node =
                              typeof elem.getAttributeNode !== strundefined &&
                              elem.getAttributeNode('id');
                            return node && node.value === id;
                          };
                        },
                    TAG: function (nodeName) {
                      if (nodeName === '*') {
                        return function () {
                          return true;
                        };
                      }
                      nodeName = nodeName.replace(rbackslash, '').toLowerCase();
                      return function (elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                      };
                    },
                    CLASS: function (className) {
                      var pattern = classCache[expando][className + ' '];
                      return (
                        pattern ||
                        ((pattern = new RegExp(
                          '(^|' + whitespace + ')' + className + '(' + whitespace + '|$)'
                        )) &&
                          classCache(className, function (elem) {
                            return pattern.test(
                              elem.className ||
                                (typeof elem.getAttribute !== strundefined &&
                                  elem.getAttribute('class')) ||
                                ''
                            );
                          }))
                      );
                    },
                    ATTR: function (name, operator, check) {
                      return function (elem, context) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                          return operator === '!=';
                        }
                        if (!operator) {
                          return true;
                        }
                        result += '';
                        return operator === '='
                          ? result === check
                          : operator === '!='
                          ? result !== check
                          : operator === '^='
                          ? check && result.indexOf(check) === 0
                          : operator === '*='
                          ? check && result.indexOf(check) > -1
                          : operator === '$='
                          ? check && result.substr(result.length - check.length) === check
                          : operator === '~='
                          ? (' ' + result + ' ').indexOf(check) > -1
                          : operator === '|='
                          ? result === check || result.substr(0, check.length + 1) === check + '-'
                          : false;
                      };
                    },
                    CHILD: function (type, argument, first, last) {
                      if (type === 'nth') {
                        return function (elem) {
                          var node,
                            diff,
                            parent = elem.parentNode;
                          if (first === 1 && last === 0) {
                            return true;
                          }
                          if (parent) {
                            diff = 0;
                            for (node = parent.firstChild; node; node = node.nextSibling) {
                              if (node.nodeType === 1) {
                                diff++;
                                if (elem === node) {
                                  break;
                                }
                              }
                            }
                          }
                          diff -= last;
                          return diff === first || (diff % first === 0 && diff / first >= 0);
                        };
                      }
                      return function (elem) {
                        var node = elem;
                        switch (type) {
                          case 'only':
                          case 'first':
                            while ((node = node.previousSibling)) {
                              if (node.nodeType === 1) {
                                return false;
                              }
                            }
                            if (type === 'first') {
                              return true;
                            }
                            node = elem;
                          case 'last':
                            while ((node = node.nextSibling)) {
                              if (node.nodeType === 1) {
                                return false;
                              }
                            }
                            return true;
                        }
                      };
                    },
                    PSEUDO: function (pseudo, argument) {
                      var args,
                        fn =
                          Expr.pseudos[pseudo] ||
                          Expr.setFilters[pseudo.toLowerCase()] ||
                          Sizzle.error('unsupported pseudo: ' + pseudo);
                      if (fn[expando]) {
                        return fn(argument);
                      }
                      if (fn.length > 1) {
                        args = [pseudo, pseudo, '', argument];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
                          ? markFunction(function (seed, matches) {
                              var idx,
                                matched = fn(seed, argument),
                                i = matched.length;
                              while (i--) {
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                              }
                            })
                          : function (elem) {
                              return fn(elem, 0, args);
                            };
                      }
                      return fn;
                    },
                  },
                  pseudos: {
                    not: markFunction(function (selector) {
                      var input = [],
                        results = [],
                        matcher = compile(selector.replace(rtrim, '$1'));
                      return matcher[expando]
                        ? markFunction(function (seed, matches, context, xml) {
                            var elem,
                              unmatched = matcher(seed, null, xml, []),
                              i = seed.length;
                            while (i--) {
                              if ((elem = unmatched[i])) {
                                seed[i] = !(matches[i] = elem);
                              }
                            }
                          })
                        : function (elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            return !results.pop();
                          };
                    }),
                    has: markFunction(function (selector) {
                      return function (elem) {
                        return Sizzle(selector, elem).length > 0;
                      };
                    }),
                    contains: markFunction(function (text) {
                      return function (elem) {
                        return (
                          (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                        );
                      };
                    }),
                    enabled: function (elem) {
                      return elem.disabled === false;
                    },
                    disabled: function (elem) {
                      return elem.disabled === true;
                    },
                    checked: function (elem) {
                      var nodeName = elem.nodeName.toLowerCase();
                      return (
                        (nodeName === 'input' && !!elem.checked) ||
                        (nodeName === 'option' && !!elem.selected)
                      );
                    },
                    selected: function (elem) {
                      if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                      }
                      return elem.selected === true;
                    },
                    parent: function (elem) {
                      return !Expr.pseudos.empty(elem);
                    },
                    empty: function (elem) {
                      var nodeType;
                      elem = elem.firstChild;
                      while (elem) {
                        if (
                          elem.nodeName > '@' ||
                          (nodeType = elem.nodeType) === 3 ||
                          nodeType === 4
                        ) {
                          return false;
                        }
                        elem = elem.nextSibling;
                      }
                      return true;
                    },
                    header: function (elem) {
                      return rheader.test(elem.nodeName);
                    },
                    text: function (elem) {
                      var type, attr;
                      return (
                        elem.nodeName.toLowerCase() === 'input' &&
                        (type = elem.type) === 'text' &&
                        ((attr = elem.getAttribute('type')) == null || attr.toLowerCase() === type)
                      );
                    },
                    radio: createInputPseudo('radio'),
                    checkbox: createInputPseudo('checkbox'),
                    file: createInputPseudo('file'),
                    password: createInputPseudo('password'),
                    image: createInputPseudo('image'),
                    submit: createButtonPseudo('submit'),
                    reset: createButtonPseudo('reset'),
                    button: function (elem) {
                      var name = elem.nodeName.toLowerCase();
                      return (name === 'input' && elem.type === 'button') || name === 'button';
                    },
                    input: function (elem) {
                      return rinputs.test(elem.nodeName);
                    },
                    focus: function (elem) {
                      var doc = elem.ownerDocument;
                      return (
                        elem === doc.activeElement &&
                        (!doc.hasFocus || doc.hasFocus()) &&
                        !!(elem.type || elem.href || ~elem.tabIndex)
                      );
                    },
                    active: function (elem) {
                      return elem === elem.ownerDocument.activeElement;
                    },
                    first: createPositionalPseudo(function () {
                      return [0];
                    }),
                    last: createPositionalPseudo(function (matchIndexes, length) {
                      return [length - 1];
                    }),
                    eq: createPositionalPseudo(function (matchIndexes, length, argument) {
                      return [argument < 0 ? argument + length : argument];
                    }),
                    even: createPositionalPseudo(function (matchIndexes, length) {
                      for (var i = 0; i < length; i += 2) {
                        matchIndexes.push(i);
                      }
                      return matchIndexes;
                    }),
                    odd: createPositionalPseudo(function (matchIndexes, length) {
                      for (var i = 1; i < length; i += 2) {
                        matchIndexes.push(i);
                      }
                      return matchIndexes;
                    }),
                    lt: createPositionalPseudo(function (matchIndexes, length, argument) {
                      for (var i = argument < 0 ? argument + length : argument; --i >= 0; ) {
                        matchIndexes.push(i);
                      }
                      return matchIndexes;
                    }),
                    gt: createPositionalPseudo(function (matchIndexes, length, argument) {
                      for (var i = argument < 0 ? argument + length : argument; ++i < length; ) {
                        matchIndexes.push(i);
                      }
                      return matchIndexes;
                    }),
                  },
                };
                function siblingCheck (a, b, ret) {
                  if (a === b) {
                    return ret;
                  }
                  var cur = a.nextSibling;
                  while (cur) {
                    if (cur === b) {
                      return -1;
                    }
                    cur = cur.nextSibling;
                  }
                  return 1;
                }
                sortOrder = docElem.compareDocumentPosition
                  ? function (a, b) {
                      if (a === b) {
                        hasDuplicate = true;
                        return 0;
                      }
                      return (
                        !a.compareDocumentPosition || !b.compareDocumentPosition
                          ? a.compareDocumentPosition
                          : a.compareDocumentPosition(b) & 4
                      )
                        ? -1
                        : 1;
                    }
                  : function (a, b) {
                      if (a === b) {
                        hasDuplicate = true;
                        return 0;
                      } else {
                        if (a.sourceIndex && b.sourceIndex) {
                          return a.sourceIndex - b.sourceIndex;
                        }
                      }
                      var al,
                        bl,
                        ap = [],
                        bp = [],
                        aup = a.parentNode,
                        bup = b.parentNode,
                        cur = aup;
                      if (aup === bup) {
                        return siblingCheck(a, b);
                      } else {
                        if (!aup) {
                          return -1;
                        } else {
                          if (!bup) {
                            return 1;
                          }
                        }
                      }
                      while (cur) {
                        ap.unshift(cur);
                        cur = cur.parentNode;
                      }
                      cur = bup;
                      while (cur) {
                        bp.unshift(cur);
                        cur = cur.parentNode;
                      }
                      al = ap.length;
                      bl = bp.length;
                      for (var i = 0; i < al && i < bl; i++) {
                        if (ap[i] !== bp[i]) {
                          return siblingCheck(ap[i], bp[i]);
                        }
                      }
                      return i === al ? siblingCheck(a, bp[i], -1) : siblingCheck(ap[i], b, 1);
                    };
                [0, 0].sort(sortOrder);
                baseHasDuplicate = !hasDuplicate;
                Sizzle.uniqueSort = function (results) {
                  var elem,
                    duplicates = [],
                    i = 1,
                    j = 0;
                  hasDuplicate = baseHasDuplicate;
                  results.sort(sortOrder);
                  if (hasDuplicate) {
                    for (; (elem = results[i]); i++) {
                      if (elem === results[i - 1]) {
                        j = duplicates.push(i);
                      }
                    }
                    while (j--) {
                      results.splice(duplicates[j], 1);
                    }
                  }
                  return results;
                };
                Sizzle.error = function (msg) {
                  throw new Error('Syntax error, unrecognized expression: ' + msg);
                };
                function tokenize (selector, parseOnly) {
                  var matched,
                    match,
                    tokens,
                    type,
                    soFar,
                    groups,
                    preFilters,
                    cached = tokenCache[expando][selector + ' '];
                  if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                  }
                  soFar = selector;
                  groups = [];
                  preFilters = Expr.preFilter;
                  while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                      if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                      }
                      groups.push((tokens = []));
                    }
                    matched = false;
                    if ((match = rcombinators.exec(soFar))) {
                      tokens.push((matched = new Token(match.shift())));
                      soFar = soFar.slice(matched.length);
                      matched.type = match[0].replace(rtrim, ' ');
                    }
                    for (type in Expr.filter) {
                      if (
                        (match = matchExpr[type].exec(soFar)) &&
                        (!preFilters[type] || (match = preFilters[type](match)))
                      ) {
                        tokens.push((matched = new Token(match.shift())));
                        soFar = soFar.slice(matched.length);
                        matched.type = type;
                        matched.matches = match;
                      }
                    }
                    if (!matched) {
                      break;
                    }
                  }
                  return parseOnly
                    ? soFar.length
                    : soFar
                    ? Sizzle.error(selector)
                    : tokenCache(selector, groups).slice(0);
                }
                function addCombinator (matcher, combinator, base) {
                  var dir = combinator.dir,
                    checkNonElements = base && combinator.dir === 'parentNode',
                    doneName = done++;
                  return combinator.first
                    ? function (elem, context, xml) {
                        while ((elem = elem[dir])) {
                          if (checkNonElements || elem.nodeType === 1) {
                            return matcher(elem, context, xml);
                          }
                        }
                      }
                    : function (elem, context, xml) {
                        if (!xml) {
                          var cache,
                            dirkey = dirruns + ' ' + doneName + ' ',
                            cachedkey = dirkey + cachedruns;
                          while ((elem = elem[dir])) {
                            if (checkNonElements || elem.nodeType === 1) {
                              if ((cache = elem[expando]) === cachedkey) {
                                return elem.sizset;
                              } else {
                                if (typeof cache === 'string' && cache.indexOf(dirkey) === 0) {
                                  if (elem.sizset) {
                                    return elem;
                                  }
                                } else {
                                  elem[expando] = cachedkey;
                                  if (matcher(elem, context, xml)) {
                                    elem.sizset = true;
                                    return elem;
                                  }
                                  elem.sizset = false;
                                }
                              }
                            }
                          }
                        } else {
                          while ((elem = elem[dir])) {
                            if (checkNonElements || elem.nodeType === 1) {
                              if (matcher(elem, context, xml)) {
                                return elem;
                              }
                            }
                          }
                        }
                      };
                }
                function elementMatcher (matchers) {
                  return matchers.length > 1
                    ? function (elem, context, xml) {
                        var i = matchers.length;
                        while (i--) {
                          if (!matchers[i](elem, context, xml)) {
                            return false;
                          }
                        }
                        return true;
                      }
                    : matchers[0];
                }
                function condense (unmatched, map, filter, context, xml) {
                  var elem,
                    newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;
                  for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                      if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                          map.push(i);
                        }
                      }
                    }
                  }
                  return newUnmatched;
                }
                function setMatcher (
                  preFilter,
                  selector,
                  matcher,
                  postFilter,
                  postFinder,
                  postSelector
                ) {
                  if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                  }
                  if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                  }
                  return markFunction(function (seed, results, context, xml) {
                    var temp,
                      i,
                      elem,
                      preMap = [],
                      postMap = [],
                      preexisting = results.length,
                      elems =
                        seed ||
                        multipleContexts(
                          selector || '*',
                          context.nodeType ? [context] : context,
                          []
                        ),
                      matcherIn =
                        preFilter && (seed || !selector)
                          ? condense(elems, preMap, preFilter, context, xml)
                          : elems,
                      matcherOut = matcher
                        ? postFinder || (seed ? preFilter : preexisting || postFilter)
                          ? []
                          : results
                        : matcherIn;
                    if (matcher) {
                      matcher(matcherIn, matcherOut, context, xml);
                    }
                    if (postFilter) {
                      temp = condense(matcherOut, postMap);
                      postFilter(temp, [], context, xml);
                      i = temp.length;
                      while (i--) {
                        if ((elem = temp[i])) {
                          matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                      }
                    }
                    if (seed) {
                      if (postFinder || preFilter) {
                        if (postFinder) {
                          temp = [];
                          i = matcherOut.length;
                          while (i--) {
                            if ((elem = matcherOut[i])) {
                              temp.push((matcherIn[i] = elem));
                            }
                          }
                          postFinder(null, (matcherOut = []), temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) {
                          if (
                            (elem = matcherOut[i]) &&
                            (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1
                          ) {
                            seed[temp] = !(results[temp] = elem);
                          }
                        }
                      }
                    } else {
                      matcherOut = condense(
                        matcherOut === results
                          ? matcherOut.splice(preexisting, matcherOut.length)
                          : matcherOut
                      );
                      if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                      } else {
                        push.apply(results, matcherOut);
                      }
                    }
                  });
                }
                function matcherFromTokens (tokens) {
                  var checkContext,
                    matcher,
                    j,
                    len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[' '],
                    i = leadingRelative ? 1 : 0,
                    matchContext = addCombinator(
                      function (elem) {
                        return elem === checkContext;
                      },
                      implicitRelative,
                      true
                    ),
                    matchAnyContext = addCombinator(
                      function (elem) {
                        return indexOf.call(checkContext, elem) > -1;
                      },
                      implicitRelative,
                      true
                    ),
                    matchers = [
                      function (elem, context, xml) {
                        return (
                          (!leadingRelative && (xml || context !== outermostContext)) ||
                          ((checkContext = context).nodeType
                            ? matchContext(elem, context, xml)
                            : matchAnyContext(elem, context, xml))
                        );
                      },
                    ];
                  for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                      matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                      matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                      if (matcher[expando]) {
                        j = ++i;
                        for (; j < len; j++) {
                          if (Expr.relative[tokens[j].type]) {
                            break;
                          }
                        }
                        return setMatcher(
                          i > 1 && elementMatcher(matchers),
                          i > 1 &&
                            tokens
                              .slice(0, i - 1)
                              .join('')
                              .replace(rtrim, '$1'),
                          matcher,
                          i < j && matcherFromTokens(tokens.slice(i, j)),
                          j < len && matcherFromTokens((tokens = tokens.slice(j))),
                          j < len && tokens.join('')
                        );
                      }
                      matchers.push(matcher);
                    }
                  }
                  return elementMatcher(matchers);
                }
                function matcherFromGroupMatchers (elementMatchers, setMatchers) {
                  var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function (seed, context, xml, results, expandContext) {
                      var elem,
                        j,
                        matcher,
                        setMatched = [],
                        matchedCount = 0,
                        i = '0',
                        unmatched = seed && [],
                        outermost = expandContext != null,
                        contextBackup = outermostContext,
                        elems =
                          seed ||
                          (byElement &&
                            Expr.find.TAG('*', (expandContext && context.parentNode) || context)),
                        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.E);
                      if (outermost) {
                        outermostContext = context !== document && context;
                        cachedruns = superMatcher.el;
                      }
                      for (; (elem = elems[i]) != null; i++) {
                        if (byElement && elem) {
                          for (j = 0; (matcher = elementMatchers[j]); j++) {
                            if (matcher(elem, context, xml)) {
                              results.push(elem);
                              break;
                            }
                          }
                          if (outermost) {
                            dirruns = dirrunsUnique;
                            cachedruns = ++superMatcher.el;
                          }
                        }
                        if (bySet) {
                          if ((elem = !matcher && elem)) {
                            matchedCount--;
                          }
                          if (seed) {
                            unmatched.push(elem);
                          }
                        }
                      }
                      matchedCount += i;
                      if (bySet && i !== matchedCount) {
                        for (j = 0; (matcher = setMatchers[j]); j++) {
                          matcher(unmatched, setMatched, context, xml);
                        }
                        if (seed) {
                          if (matchedCount > 0) {
                            while (i--) {
                              if (!(unmatched[i] || setMatched[i])) {
                                setMatched[i] = pop.call(results);
                              }
                            }
                          }
                          setMatched = condense(setMatched);
                        }
                        push.apply(results, setMatched);
                        if (
                          outermost &&
                          !seed &&
                          setMatched.length > 0 &&
                          matchedCount + setMatchers.length > 1
                        ) {
                          Sizzle.uniqueSort(results);
                        }
                      }
                      if (outermost) {
                        dirruns = dirrunsUnique;
                        outermostContext = contextBackup;
                      }
                      return unmatched;
                    };
                  superMatcher.el = 0;
                  return bySet ? markFunction(superMatcher) : superMatcher;
                }
                compile = Sizzle.compile = function (selector, group) {
                  var i,
                    setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[expando][selector + ' '];
                  if (!cached) {
                    if (!group) {
                      group = tokenize(selector);
                    }
                    i = group.length;
                    while (i--) {
                      cached = matcherFromTokens(group[i]);
                      if (cached[expando]) {
                        setMatchers.push(cached);
                      } else {
                        elementMatchers.push(cached);
                      }
                    }
                    cached = compilerCache(
                      selector,
                      matcherFromGroupMatchers(elementMatchers, setMatchers)
                    );
                  }
                  return cached;
                };
                function multipleContexts (selector, contexts, results) {
                  var i = 0,
                    len = contexts.length;
                  for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                  }
                  return results;
                }
                function select (selector, context, results, seed, xml) {
                  var i,
                    tokens,
                    token,
                    type,
                    find,
                    match = tokenize(selector),
                    j = match.length;
                  if (!seed) {
                    if (match.length === 1) {
                      tokens = match[0] = match[0].slice(0);
                      if (
                        tokens.length > 2 &&
                        (token = tokens[0]).type === 'ID' &&
                        context.nodeType === 9 &&
                        !xml &&
                        Expr.relative[tokens[1].type]
                      ) {
                        context = Expr.find.ID(
                          token.matches[0].replace(rbackslash, ''),
                          context,
                          xml
                        )[0];
                        if (!context) {
                          return results;
                        }
                        selector = selector.slice(tokens.shift().length);
                      }
                      for (
                        i = matchExpr.POS.test(selector) ? -1 : tokens.length - 1;
                        i >= 0;
                        i--
                      ) {
                        token = tokens[i];
                        if (Expr.relative[(type = token.type)]) {
                          break;
                        }
                        if ((find = Expr.find[type])) {
                          if (
                            (seed = find(
                              token.matches[0].replace(rbackslash, ''),
                              (rsibling.test(tokens[0].type) && context.parentNode) || context,
                              xml
                            ))
                          ) {
                            tokens.splice(i, 1);
                            selector = seed.length && tokens.join('');
                            if (!selector) {
                              push.apply(results, slice.call(seed, 0));
                              return results;
                            }
                            break;
                          }
                        }
                      }
                    }
                  }
                  compile(selector, match)(seed, context, xml, results, rsibling.test(selector));
                  return results;
                }
                if (document.querySelectorAll) {
                  (function () {
                    var disconnectedMatch,
                      oldSelect = select,
                      rescape = /'|\\/g,
                      rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                      rbuggyQSA = [':focus'],
                      rbuggyMatches = [':active'],
                      matches =
                        docElem.matchesSelector ||
                        docElem.mozMatchesSelector ||
                        docElem.webkitMatchesSelector ||
                        docElem.oMatchesSelector ||
                        docElem.msMatchesSelector;
                    assert(function (div) {
                      div.innerHTML = "<select><option selected=''></option></select>";
                      if (!div.querySelectorAll('[selected]').length) {
                        rbuggyQSA.push(
                          '\\[' +
                            whitespace +
                            '*(?:checked|disabled|ismap|multiple|readonly|selected|value)'
                        );
                      }
                      if (!div.querySelectorAll(':checked').length) {
                        rbuggyQSA.push(':checked');
                      }
                    });
                    assert(function (div) {
                      div.innerHTML = "<p test=''></p>";
                      if (div.querySelectorAll("[test^='']").length) {
                        rbuggyQSA.push('[*^$]=' + whitespace + '*(?:""|\'\')');
                      }
                      div.innerHTML = "<input type='hidden'/>";
                      if (!div.querySelectorAll(':enabled').length) {
                        rbuggyQSA.push(':enabled', ':disabled');
                      }
                    });
                    rbuggyQSA = new RegExp(rbuggyQSA.join('|'));
                    select = function (selector, context, results, seed, xml) {
                      if (!seed && !xml && !rbuggyQSA.test(selector)) {
                        var groups,
                          i,
                          old = true,
                          nid = expando,
                          newContext = context,
                          newSelector = context.nodeType === 9 && selector;
                        if (
                          context.nodeType === 1 &&
                          context.nodeName.toLowerCase() !== 'object'
                        ) {
                          groups = tokenize(selector);
                          if ((old = context.getAttribute('id'))) {
                            nid = old.replace(rescape, '\\$&');
                          } else {
                            context.setAttribute('id', nid);
                          }
                          nid = "[id='" + nid + "'] ";
                          i = groups.length;
                          while (i--) {
                            groups[i] = nid + groups[i].join('');
                          }
                          newContext = (rsibling.test(selector) && context.parentNode) || context;
                          newSelector = groups.join(',');
                        }
                        if (newSelector) {
                          try {
                            push.apply(
                              results,
                              slice.call(newContext.querySelectorAll(newSelector), 0)
                            );
                            return results;
                          } catch (qsaError) {
                          } finally {
                            if (!old) {
                              context.removeAttribute('id');
                            }
                          }
                        }
                      }
                      return oldSelect(selector, context, results, seed, xml);
                    };
                    if (matches) {
                      assert(function (div) {
                        disconnectedMatch = matches.call(div, 'div');
                        try {
                          matches.call(div, "[test!='']:sizzle");
                          rbuggyMatches.push('!=', pseudos);
                        } catch (e) {}
                      });
                      rbuggyMatches = new RegExp(rbuggyMatches.join('|'));
                      Sizzle.matchesSelector = function (elem, expr) {
                        expr = expr.replace(rattributeQuotes, "='$1']");
                        if (!isXML(elem) && !rbuggyMatches.test(expr) && !rbuggyQSA.test(expr)) {
                          try {
                            var ret = matches.call(elem, expr);
                            if (
                              ret ||
                              disconnectedMatch ||
                              (elem.document && elem.document.nodeType !== 11)
                            ) {
                              return ret;
                            }
                          } catch (e) {}
                        }
                        return Sizzle(expr, null, null, [elem]).length > 0;
                      };
                    }
                  })();
                }
                Expr.pseudos.nth = Expr.pseudos.eq;
                function setFilters () {}
                Expr.filters = setFilters.prototype = Expr.pseudos;
                Expr.setFilters = new setFilters();
                Sizzle.attr = camQuery.attr;
                camQuery.find = Sizzle;
                camQuery.expr = Sizzle.selectors;
                camQuery.expr[':'] = camQuery.expr.pseudos;
                camQuery.unique = Sizzle.uniqueSort;
                camQuery.text = Sizzle.getText;
                camQuery.isXMLDoc = Sizzle.isXML;
                camQuery.contains = Sizzle.contains;
              })(window);
              var runtil = /Until$/,
                rparentsprev = /^(?:parents|prev(?:Until|All))/,
                isSimple = /^.[^:#\[\.,]*$/,
                rneedsContext = camQuery.expr.match.needsContext,
                guaranteedUnique = { children: true, contents: true, next: true, prev: true };
              camQuery.fn.extend({
                find: function (selector) {
                  var i,
                    l,
                    length,
                    n,
                    r,
                    ret,
                    self = this;
                  if (typeof selector !== 'string') {
                    return camQuery(selector).filter(function () {
                      for (i = 0, l = self.length; i < l; i++) {
                        if (camQuery.contains(self[i], this)) {
                          return true;
                        }
                      }
                    });
                  }
                  ret = this.pushStack('', 'find', selector);
                  for (i = 0, l = this.length; i < l; i++) {
                    length = ret.length;
                    camQuery.find(selector, this[i], ret);
                    if (i > 0) {
                      for (n = length; n < ret.length; n++) {
                        for (r = 0; r < length; r++) {
                          if (ret[r] === ret[n]) {
                            ret.splice(n--, 1);
                            break;
                          }
                        }
                      }
                    }
                  }
                  return ret;
                },
                has: function (target) {
                  var i,
                    targets = camQuery(target, this),
                    len = targets.length;
                  return this.filter(function () {
                    for (i = 0; i < len; i++) {
                      if (camQuery.contains(this, targets[i])) {
                        return true;
                      }
                    }
                  });
                },
                not: function (selector) {
                  return this.pushStack(winnow(this, selector, false), 'not', selector);
                },
                filter: function (selector) {
                  return this.pushStack(winnow(this, selector, true), 'filter', selector);
                },
                is: function (selector) {
                  return (
                    !!selector &&
                    (typeof selector === 'string'
                      ? rneedsContext.test(selector)
                        ? camQuery(selector, this.context).index(this[0]) >= 0
                        : camQuery.filter(selector, this).length > 0
                      : this.filter(selector).length > 0)
                  );
                },
                closest: function (selectors, context) {
                  var cur,
                    i = 0,
                    l = this.length,
                    ret = [],
                    pos =
                      rneedsContext.test(selectors) || typeof selectors !== 'string'
                        ? camQuery(selectors, context || this.context)
                        : 0;
                  for (; i < l; i++) {
                    cur = this[i];
                    while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
                      if (
                        pos ? pos.index(cur) > -1 : camQuery.find.matchesSelector(cur, selectors)
                      ) {
                        ret.push(cur);
                        break;
                      }
                      cur = cur.parentNode;
                    }
                  }
                  ret = ret.length > 1 ? camQuery.unique(ret) : ret;
                  return this.pushStack(ret, 'closest', selectors);
                },
                index: function (elem) {
                  if (!elem) {
                    return this[0] && this[0].parentNode ? this.prevAll().length : -1;
                  }
                  if (typeof elem === 'string') {
                    return camQuery.inArray(this[0], camQuery(elem));
                  }
                  return camQuery.inArray(elem.jquery ? elem[0] : elem, this);
                },
                add: function (selector, context) {
                  var set =
                      typeof selector === 'string'
                        ? camQuery(selector, context)
                        : camQuery.makeArray(
                            selector && selector.nodeType ? [selector] : selector
                          ),
                    all = camQuery.merge(this.get(), set);
                  return this.pushStack(
                    isDisconnected(set[0]) || isDisconnected(all[0]) ? all : camQuery.unique(all)
                  );
                },
                addBack: function (selector) {
                  return this.add(
                    selector == null ? this.prevObject : this.prevObject.filter(selector)
                  );
                },
              });
              camQuery.fn.andSelf = camQuery.fn.addBack;
              function isDisconnected (node) {
                return !node || !node.parentNode || node.parentNode.nodeType === 11;
              }
              function sibling (cur, dir) {
                do {
                  cur = cur[dir];
                } while (cur && cur.nodeType !== 1);
                return cur;
              }
              camQuery.each(
                {
                  parent: function (elem) {
                    var parent = elem.parentNode;
                    return parent && parent.nodeType !== 11 ? parent : null;
                  },
                  parents: function (elem) {
                    return camQuery.dir(elem, 'parentNode');
                  },
                  parentsUntil: function (elem, i, until) {
                    return camQuery.dir(elem, 'parentNode', until);
                  },
                  next: function (elem) {
                    return sibling(elem, 'nextSibling');
                  },
                  prev: function (elem) {
                    return sibling(elem, 'previousSibling');
                  },
                  nextAll: function (elem) {
                    return camQuery.dir(elem, 'nextSibling');
                  },
                  prevAll: function (elem) {
                    return camQuery.dir(elem, 'previousSibling');
                  },
                  nextUntil: function (elem, i, until) {
                    return camQuery.dir(elem, 'nextSibling', until);
                  },
                  prevUntil: function (elem, i, until) {
                    return camQuery.dir(elem, 'previousSibling', until);
                  },
                  siblings: function (elem) {
                    return camQuery.sibling((elem.parentNode || {}).firstChild, elem);
                  },
                  children: function (elem) {
                    return camQuery.sibling(elem.firstChild);
                  },
                  contents: function (elem) {
                    return camQuery.nodeName(elem, 'iframe')
                      ? elem.contentDocument || elem.contentWindow.document
                      : camQuery.merge([], elem.childNodes);
                  },
                },
                function (name, fn) {
                  camQuery.fn[name] = function (until, selector) {
                    var ret = camQuery.map(this, fn, until);
                    if (!runtil.test(name)) {
                      selector = until;
                    }
                    if (selector && typeof selector === 'string') {
                      ret = camQuery.filter(selector, ret);
                    }
                    ret = this.length > 1 && !guaranteedUnique[name] ? camQuery.unique(ret) : ret;
                    if (this.length > 1 && rparentsprev.test(name)) {
                      ret = ret.reverse();
                    }
                    return this.pushStack(ret, name, core_slice.call(arguments).join(','));
                  };
                }
              );
              camQuery.extend({
                filter: function (expr, elems, not) {
                  if (not) {
                    expr = ':not(' + expr + ')';
                  }
                  return elems.length === 1
                    ? camQuery.find.matchesSelector(elems[0], expr)
                      ? [elems[0]]
                      : []
                    : camQuery.find.matches(expr, elems);
                },
                dir: function (elem, dir, until) {
                  var matched = [],
                    cur = elem[dir];
                  while (
                    cur &&
                    cur.nodeType !== 9 &&
                    (until === undefined || cur.nodeType !== 1 || !camQuery(cur).is(until))
                  ) {
                    if (cur.nodeType === 1) {
                      matched.push(cur);
                    }
                    cur = cur[dir];
                  }
                  return matched;
                },
                sibling: function (n, elem) {
                  var r = [];
                  for (; n; n = n.nextSibling) {
                    if (n.nodeType === 1 && n !== elem) {
                      r.push(n);
                    }
                  }
                  return r;
                },
              });
              function winnow (elements, qualifier, keep) {
                qualifier = qualifier || 0;
                if (camQuery.isFunction(qualifier)) {
                  return camQuery.grep(elements, function (elem, i) {
                    var retVal = !!qualifier.call(elem, i, elem);
                    return retVal === keep;
                  });
                } else {
                  if (qualifier.nodeType) {
                    return camQuery.grep(elements, function (elem, i) {
                      return (elem === qualifier) === keep;
                    });
                  } else {
                    if (typeof qualifier === 'string') {
                      var filtered = camQuery.grep(elements, function (elem) {
                        return elem.nodeType === 1;
                      });
                      if (isSimple.test(qualifier)) {
                        return camQuery.filter(qualifier, filtered, !keep);
                      } else {
                        qualifier = camQuery.filter(qualifier, filtered);
                      }
                    }
                  }
                }
                return camQuery.grep(elements, function (elem, i) {
                  return camQuery.inArray(elem, qualifier) >= 0 === keep;
                });
              }
              function createSafeFragment (document) {
                var list = nodeNames.split('|'),
                  safeFrag = document.createDocumentFragment();
                if (safeFrag.createElement) {
                  while (list.length) {
                    safeFrag.createElement(list.pop());
                  }
                }
                return safeFrag;
              }
              var nodeNames =
                  'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
                rinlinecamQuery = / camQuery\d+="(?:null|\d+)"/g,
                rleadingWhitespace = /^\s+/,
                rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                rtagName = /<([\w:]+)/,
                rtbody = /<tbody/i,
                rhtml = /<|&#?\w+;/,
                rnoInnerhtml = /<(?:script|style|link)/i,
                rnocache = /<(?:script|object|embed|option|style)/i,
                rnoshimcache = new RegExp('<(?:' + nodeNames + ')[\\s/>]', 'i'),
                rcheckableType = /^(?:checkbox|radio)$/,
                rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
                rscriptType = /\/(java|ecma)script/i,
                rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
                wrapMap = {
                  option: [1, "<select multiple='multiple'>", '</select>'],
                  legend: [1, '<fieldset>', '</fieldset>'],
                  thead: [1, '<table>', '</table>'],
                  tr: [2, '<table><tbody>', '</tbody></table>'],
                  td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
                  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
                  area: [1, '<map>', '</map>'],
                  _default: [0, '', ''],
                },
                safeFragment = createSafeFragment(document),
                fragmentDiv = safeFragment.appendChild(document.createElement('div'));
              wrapMap.optgroup = wrapMap.option;
              wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
              wrapMap.th = wrapMap.td;
              if (!camQuery.support.htmlSerialize) {
                wrapMap._default = [1, 'X<div>', '</div>'];
              }
              camQuery.fn.extend({
                text: function (value) {
                  return camQuery.access(
                    this,
                    function (value) {
                      return value === undefined
                        ? camQuery.text(this)
                        : this.empty().append(
                            ((this[0] && this[0].ownerDocument) || document).createTextNode(value)
                          );
                    },
                    null,
                    value,
                    arguments.length
                  );
                },
                wrapAll: function (html) {
                  if (camQuery.isFunction(html)) {
                    return this.each(function (i) {
                      camQuery(this).wrapAll(html.call(this, i));
                    });
                  }
                  if (this[0]) {
                    var wrap = camQuery(html, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                      wrap.insertBefore(this[0]);
                    }
                    wrap
                      .map(function () {
                        var elem = this;
                        while (elem.firstChild && elem.firstChild.nodeType === 1) {
                          elem = elem.firstChild;
                        }
                        return elem;
                      })
                      .append(this);
                  }
                  return this;
                },
                wrapInner: function (html) {
                  if (camQuery.isFunction(html)) {
                    return this.each(function (i) {
                      camQuery(this).wrapInner(html.call(this, i));
                    });
                  }
                  return this.each(function () {
                    var self = camQuery(this),
                      contents = self.contents();
                    if (contents.length) {
                      contents.wrapAll(html);
                    } else {
                      self.append(html);
                    }
                  });
                },
                wrap: function (html) {
                  var isFunction = camQuery.isFunction(html);
                  return this.each(function (i) {
                    camQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
                  });
                },
                unwrap: function () {
                  return this.parent()
                    .each(function () {
                      if (!camQuery.nodeName(this, 'body')) {
                        camQuery(this).replaceWith(this.childNodes);
                      }
                    })
                    .end();
                },
                append: function () {
                  return this.domManip(arguments, true, function (elem) {
                    if (this.nodeType === 1 || this.nodeType === 11) {
                      this.appendChild(elem);
                    }
                  });
                },
                prepend: function () {
                  return this.domManip(arguments, true, function (elem) {
                    if (this.nodeType === 1 || this.nodeType === 11) {
                      this.insertBefore(elem, this.firstChild);
                    }
                  });
                },
                before: function () {
                  if (!isDisconnected(this[0])) {
                    return this.domManip(arguments, false, function (elem) {
                      this.parentNode.insertBefore(elem, this);
                    });
                  }
                  if (arguments.length) {
                    var set = camQuery.clean(arguments);
                    return this.pushStack(camQuery.merge(set, this), 'before', this.selector);
                  }
                },
                after: function () {
                  if (!isDisconnected(this[0])) {
                    return this.domManip(arguments, false, function (elem) {
                      this.parentNode.insertBefore(elem, this.nextSibling);
                    });
                  }
                  if (arguments.length) {
                    var set = camQuery.clean(arguments);
                    return this.pushStack(camQuery.merge(this, set), 'after', this.selector);
                  }
                },
                remove: function (selector, keepData) {
                  var elem,
                    i = 0;
                  for (; (elem = this[i]) != null; i++) {
                    if (!selector || camQuery.filter(selector, [elem]).length) {
                      if (!keepData && elem.nodeType === 1) {
                        camQuery.cleanData(elem.getElementsByTagName('*'));
                        camQuery.cleanData([elem]);
                      }
                      if (elem.parentNode) {
                        elem.parentNode.removeChild(elem);
                      }
                    }
                  }
                  return this;
                },
                empty: function () {
                  var elem,
                    i = 0;
                  for (; (elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
                      camQuery.cleanData(elem.getElementsByTagName('*'));
                    }
                    while (elem.firstChild) {
                      elem.removeChild(elem.firstChild);
                    }
                  }
                  return this;
                },
                clone: function (dataAndEvents, deepDataAndEvents) {
                  dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                  deepDataAndEvents =
                    deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                  return this.map(function () {
                    return camQuery.clone(this, dataAndEvents, deepDataAndEvents);
                  });
                },
                html: function (value) {
                  return camQuery.access(
                    this,
                    function (value) {
                      var elem = this[0] || {},
                        i = 0,
                        l = this.length;
                      if (value === undefined) {
                        return elem.nodeType === 1
                          ? elem.innerHTML.replace(rinlinecamQuery, '')
                          : undefined;
                      }
                      if (
                        typeof value === 'string' &&
                        !rnoInnerhtml.test(value) &&
                        (camQuery.support.htmlSerialize || !rnoshimcache.test(value)) &&
                        (camQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
                        !wrapMap[(rtagName.exec(value) || ['', ''])[1].toLowerCase()]
                      ) {
                        value = value.replace(rxhtmlTag, '<$1></$2>');
                        try {
                          for (; i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                              camQuery.cleanData(elem.getElementsByTagName('*'));
                              elem.innerHTML = value;
                            }
                          }
                          elem = 0;
                        } catch (e) {}
                      }
                      if (elem) {
                        this.empty().append(value);
                      }
                    },
                    null,
                    value,
                    arguments.length
                  );
                },
                replaceWith: function (value) {
                  if (!isDisconnected(this[0])) {
                    if (camQuery.isFunction(value)) {
                      return this.each(function (i) {
                        var self = camQuery(this),
                          old = self.html();
                        self.replaceWith(value.call(this, i, old));
                      });
                    }
                    if (typeof value !== 'string') {
                      value = camQuery(value).detach();
                    }
                    return this.each(function () {
                      var next = this.nextSibling,
                        parent = this.parentNode;
                      camQuery(this).remove();
                      if (next) {
                        camQuery(next).before(value);
                      } else {
                        camQuery(parent).append(value);
                      }
                    });
                  }
                  return this.length
                    ? this.pushStack(
                        camQuery(camQuery.isFunction(value) ? value() : value),
                        'replaceWith',
                        value
                      )
                    : this;
                },
                detach: function (selector) {
                  return this.remove(selector, true);
                },
                domManip: function (args, table, callback) {
                  args = [].concat.apply([], args);
                  var results,
                    first,
                    fragment,
                    iNoClone,
                    i = 0,
                    value = args[0],
                    scripts = [],
                    l = this.length;
                  if (
                    !camQuery.support.checkClone &&
                    l > 1 &&
                    typeof value === 'string' &&
                    rchecked.test(value)
                  ) {
                    return this.each(function () {
                      camQuery(this).domManip(args, table, callback);
                    });
                  }
                  if (camQuery.isFunction(value)) {
                    return this.each(function (i) {
                      var self = camQuery(this);
                      args[0] = value.call(this, i, table ? self.html() : undefined);
                      self.domManip(args, table, callback);
                    });
                  }
                  if (this[0]) {
                    results = camQuery.buildFragment(args, this, scripts);
                    fragment = results.fragment;
                    first = fragment.firstChild;
                    if (fragment.childNodes.length === 1) {
                      fragment = first;
                    }
                    if (first) {
                      table = table && camQuery.nodeName(first, 'tr');
                      for (iNoClone = results.cacheable || l - 1; i < l; i++) {
                        callback.call(
                          table && camQuery.nodeName(this[i], 'table')
                            ? findOrAppend(this[i], 'tbody')
                            : this[i],
                          i === iNoClone ? fragment : camQuery.clone(fragment, true, true)
                        );
                      }
                    }
                    fragment = first = null;
                    if (scripts.length) {
                      camQuery.each(scripts, function (i, elem) {
                        if (elem.src) {
                          if (camQuery.ajax) {
                            camQuery.ajax({
                              url: elem.src,
                              type: 'GET',
                              dataType: 'script',
                              async: false,
                              global: false,
                              throws: true,
                            });
                          } else {
                            camQuery.error('no ajax');
                          }
                        } else {
                          camQuery.globalEval(
                            (elem.text || elem.textContent || elem.innerHTML || '').replace(
                              rcleanScript,
                              ''
                            )
                          );
                        }
                        if (elem.parentNode) {
                          elem.parentNode.removeChild(elem);
                        }
                      });
                    }
                  }
                  return this;
                },
              });
              function findOrAppend (elem, tag) {
                return (
                  elem.getElementsByTagName(tag)[0] ||
                  elem.appendChild(elem.ownerDocument.createElement(tag))
                );
              }
              function cloneCopyEvent (src, dest) {
                if (dest.nodeType !== 1 || !camQuery.hasData(src)) {
                  return;
                }
                var type,
                  i,
                  l,
                  oldData = camQuery._data(src),
                  curData = camQuery._data(dest, oldData),
                  events = oldData.events;
                if (events) {
                  delete curData.handle;
                  curData.events = {};
                  for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                      camQuery.event.add(dest, type, events[type][i]);
                    }
                  }
                }
                if (curData.data) {
                  curData.data = camQuery.extend({}, curData.data);
                }
              }
              function cloneFixAttributes (src, dest) {
                var nodeName;
                if (dest.nodeType !== 1) {
                  return;
                }
                if (dest.clearAttributes) {
                  dest.clearAttributes();
                }
                if (dest.mergeAttributes) {
                  dest.mergeAttributes(src);
                }
                nodeName = dest.nodeName.toLowerCase();
                if (nodeName === 'object') {
                  if (dest.parentNode) {
                    dest.outerHTML = src.outerHTML;
                  }
                  if (
                    camQuery.support.html5Clone &&
                    src.innerHTML &&
                    !camQuery.trim(dest.innerHTML)
                  ) {
                    dest.innerHTML = src.innerHTML;
                  }
                } else {
                  if (nodeName === 'input' && rcheckableType.test(src.type)) {
                    dest.defaultChecked = dest.checked = src.checked;
                    if (dest.value !== src.value) {
                      dest.value = src.value;
                    }
                  } else {
                    if (nodeName === 'option') {
                      dest.selected = src.defaultSelected;
                    } else {
                      if (nodeName === 'input' || nodeName === 'textarea') {
                        dest.defaultValue = src.defaultValue;
                      } else {
                        if (nodeName === 'script' && dest.text !== src.text) {
                          dest.text = src.text;
                        }
                      }
                    }
                  }
                }
                dest.removeAttribute(camQuery.expando);
              }
              camQuery.buildFragment = function (args, context, scripts) {
                var fragment,
                  cacheable,
                  cachehit,
                  first = args[0];
                context = context || document;
                context = (!context.nodeType && context[0]) || context;
                context = context.ownerDocument || context;
                if (
                  args.length === 1 &&
                  typeof first === 'string' &&
                  first.length < 512 &&
                  context === document &&
                  first.charAt(0) === '<' &&
                  !rnocache.test(first) &&
                  (camQuery.support.checkClone || !rchecked.test(first)) &&
                  (camQuery.support.html5Clone || !rnoshimcache.test(first))
                ) {
                  cacheable = true;
                  fragment = camQuery.fragments[first];
                  cachehit = fragment !== undefined;
                }
                if (!fragment) {
                  fragment = context.createDocumentFragment();
                  camQuery.clean(args, context, fragment, scripts);
                  if (cacheable) {
                    camQuery.fragments[first] = cachehit && fragment;
                  }
                }
                return { fragment: fragment, cacheable: cacheable };
              };
              camQuery.fragments = {};
              camQuery.each(
                {
                  appendTo: 'append',
                  prependTo: 'prepend',
                  insertBefore: 'before',
                  insertAfter: 'after',
                  replaceAll: 'replaceWith',
                },
                function (name, original) {
                  camQuery.fn[name] = function (selector) {
                    var elems,
                      i = 0,
                      ret = [],
                      insert = camQuery(selector),
                      l = insert.length,
                      parent = this.length === 1 && this[0].parentNode;
                    if (
                      (parent == null ||
                        (parent && parent.nodeType === 11 && parent.childNodes.length === 1)) &&
                      l === 1
                    ) {
                      insert[original](this[0]);
                      return this;
                    } else {
                      for (; i < l; i++) {
                        elems = (i > 0 ? this.clone(true) : this).get();
                        camQuery(insert[i])[original](elems);
                        ret = ret.concat(elems);
                      }
                      return this.pushStack(ret, name, insert.selector);
                    }
                  };
                }
              );
              function getAll (elem) {
                if (typeof elem.getElementsByTagName !== 'undefined') {
                  return elem.getElementsByTagName('*');
                } else {
                  if (typeof elem.querySelectorAll !== 'undefined') {
                    return elem.querySelectorAll('*');
                  } else {
                    return [];
                  }
                }
              }
              function fixDefaultChecked (elem) {
                if (rcheckableType.test(elem.type)) {
                  elem.defaultChecked = elem.checked;
                }
              }
              camQuery.extend({
                clone: function (elem, dataAndEvents, deepDataAndEvents) {
                  var srcElements, destElements, i, clone;
                  if (
                    camQuery.support.html5Clone ||
                    camQuery.isXMLDoc(elem) ||
                    !rnoshimcache.test('<' + elem.nodeName + '>')
                  ) {
                    clone = elem.cloneNode(true);
                  } else {
                    fragmentDiv.innerHTML = elem.outerHTML;
                    fragmentDiv.removeChild((clone = fragmentDiv.firstChild));
                  }
                  if (
                    (!camQuery.support.noCloneEvent || !camQuery.support.noCloneChecked) &&
                    (elem.nodeType === 1 || elem.nodeType === 11) &&
                    !camQuery.isXMLDoc(elem)
                  ) {
                    cloneFixAttributes(elem, clone);
                    srcElements = getAll(elem);
                    destElements = getAll(clone);
                    for (i = 0; srcElements[i]; ++i) {
                      if (destElements[i]) {
                        cloneFixAttributes(srcElements[i], destElements[i]);
                      }
                    }
                  }
                  if (dataAndEvents) {
                    cloneCopyEvent(elem, clone);
                    if (deepDataAndEvents) {
                      srcElements = getAll(elem);
                      destElements = getAll(clone);
                      for (i = 0; srcElements[i]; ++i) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                      }
                    }
                  }
                  srcElements = destElements = null;
                  return clone;
                },
                clean: function (elems, context, fragment, scripts) {
                  var i,
                    j,
                    elem,
                    tag,
                    wrap,
                    depth,
                    div,
                    hasBody,
                    tbody,
                    len,
                    handleScript,
                    jsTags,
                    safe = context === document && safeFragment,
                    ret = [];
                  if (!context || typeof context.createDocumentFragment === 'undefined') {
                    context = document;
                  }
                  for (i = 0; (elem = elems[i]) != null; i++) {
                    if (typeof elem === 'number') {
                      elem += '';
                    }
                    if (!elem) {
                      continue;
                    }
                    if (typeof elem === 'string') {
                      if (!rhtml.test(elem)) {
                        elem = context.createTextNode(elem);
                      } else {
                        safe = safe || createSafeFragment(context);
                        div = context.createElement('div');
                        safe.appendChild(div);
                        elem = elem.replace(rxhtmlTag, '<$1></$2>');
                        tag = (rtagName.exec(elem) || ['', ''])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        depth = wrap[0];
                        div.innerHTML = wrap[1] + elem + wrap[2];
                        while (depth--) {
                          div = div.lastChild;
                        }
                        if (!camQuery.support.tbody) {
                          hasBody = rtbody.test(elem);
                          tbody =
                            tag === 'table' && !hasBody
                              ? div.firstChild && div.firstChild.childNodes
                              : wrap[1] === '<table>' && !hasBody
                              ? div.childNodes
                              : [];
                          for (j = tbody.length - 1; j >= 0; --j) {
                            if (
                              camQuery.nodeName(tbody[j], 'tbody') &&
                              !tbody[j].childNodes.length
                            ) {
                              tbody[j].parentNode.removeChild(tbody[j]);
                            }
                          }
                        }
                        if (!camQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                          div.insertBefore(
                            context.createTextNode(rleadingWhitespace.exec(elem)[0]),
                            div.firstChild
                          );
                        }
                        elem = div.childNodes;
                        div.parentNode.removeChild(div);
                      }
                    }
                    if (elem.nodeType) {
                      ret.push(elem);
                    } else {
                      camQuery.merge(ret, elem);
                    }
                  }
                  if (div) {
                    elem = div = safe = null;
                  }
                  if (!camQuery.support.appendChecked) {
                    for (i = 0; (elem = ret[i]) != null; i++) {
                      if (camQuery.nodeName(elem, 'input')) {
                        fixDefaultChecked(elem);
                      } else {
                        if (typeof elem.getElementsByTagName !== 'undefined') {
                          camQuery.grep(elem.getElementsByTagName('input'), fixDefaultChecked);
                        }
                      }
                    }
                  }
                  if (fragment) {
                    handleScript = function (elem) {
                      if (!elem.type || rscriptType.test(elem.type)) {
                        return scripts
                          ? scripts.push(
                              elem.parentNode ? elem.parentNode.removeChild(elem) : elem
                            )
                          : fragment.appendChild(elem);
                      }
                    };
                    for (i = 0; (elem = ret[i]) != null; i++) {
                      if (!(camQuery.nodeName(elem, 'script') && handleScript(elem))) {
                        fragment.appendChild(elem);
                        if (typeof elem.getElementsByTagName !== 'undefined') {
                          jsTags = camQuery.grep(
                            camQuery.merge([], elem.getElementsByTagName('script')),
                            handleScript
                          );
                          ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
                          i += jsTags.length;
                        }
                      }
                    }
                  }
                  return ret;
                },
                cleanData: function (elems, acceptData) {
                  var data,
                    id,
                    elem,
                    type,
                    i = 0,
                    internalKey = camQuery.expando,
                    cache = camQuery.cache,
                    deleteExpando = camQuery.support.deleteExpando,
                    special = camQuery.event.special;
                  for (; (elem = elems[i]) != null; i++) {
                    if (acceptData || camQuery.acceptData(elem)) {
                      id = elem[internalKey];
                      data = id && cache[id];
                      if (data) {
                        if (data.events) {
                          for (type in data.events) {
                            if (special[type]) {
                              camQuery.event.remove(elem, type);
                            } else {
                              camQuery.removeEvent(elem, type, data.handle);
                            }
                          }
                        }
                        if (cache[id]) {
                          delete cache[id];
                          if (deleteExpando) {
                            delete elem[internalKey];
                          } else {
                            if (elem.removeAttribute) {
                              elem.removeAttribute(internalKey);
                            } else {
                              elem[internalKey] = null;
                            }
                          }
                          camQuery.deletedIds.push(id);
                        }
                      }
                    }
                  }
                },
              });
              (function () {
                const $___old_244ae8f808f4a53e = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_244ae8f808f4a53e)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_addd751f0eb655f8.userAgent
                    ));
                  return function () {
                    var matched, browser;
                    camQuery.uaMatch = function (ua) {
                      ua = ua.toLowerCase();
                      var match =
                        /(chrome)[ \/]([\w.]+)/.exec(ua) ||
                        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
                        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
                        /(msie) ([\w.]+)/.exec(ua) ||
                        (ua.indexOf('compatible') < 0 &&
                          /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
                        [];
                      return { browser: match[1] || '', version: match[2] || '0' };
                    };
                    matched = camQuery.uaMatch(navigator.userAgent);
                    browser = {};
                    if (matched.browser) {
                      browser[matched.browser] = true;
                      browser.version = matched.version;
                    }
                    if (browser.chrome) {
                      browser.webkit = true;
                    } else {
                      if (browser.webkit) {
                        browser.safari = true;
                      }
                    }
                    camQuery.browser = browser;
                    camQuery.sub = function () {
                      function camQuerySub (selector, context) {
                        return new camQuerySub.fn.init(selector, context);
                      }
                      camQuery.extend(true, camQuerySub, this);
                      camQuerySub.superclass = this;
                      camQuerySub.fn = camQuerySub.prototype = this();
                      camQuerySub.fn.constructor = camQuerySub;
                      camQuerySub.sub = this.sub;
                      camQuerySub.fn.init = function init (selector, context) {
                        if (
                          context &&
                          context instanceof camQuery &&
                          !(context instanceof camQuerySub)
                        ) {
                          context = camQuerySub(context);
                        }
                        return camQuery.fn.init.call(this, selector, context, rootcamQuerySub);
                      };
                      camQuerySub.fn.init.prototype = camQuerySub.fn;
                      var rootcamQuerySub = camQuerySub(document);
                      return camQuerySub;
                    };
                  }.apply(this, arguments);
                } finally {
                  if ($___old_244ae8f808f4a53e)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_244ae8f808f4a53e
                    ));
                }
              })();
              var curCSS,
                iframe,
                iframeDoc,
                ralpha = /alpha\([^)]*\)/i,
                ropacity = /opacity=([^)]*)/,
                rposition = /^(top|right|bottom|left)$/,
                rdisplayswap = /^(none|table(?!-c[ea]).+)/,
                rmargin = /^margin/,
                rnumsplit = new RegExp('^(' + core_pnum + ')(.*)$', 'i'),
                rnumnonpx = new RegExp('^(' + core_pnum + ')(?!px)[a-z%]+$', 'i'),
                rrelNum = new RegExp('^([-+])=(' + core_pnum + ')', 'i'),
                elemdisplay = { BODY: 'block' },
                cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' },
                cssNormalTransform = { letterSpacing: 0, fontWeight: 400 },
                cssExpand = ['Top', 'Right', 'Bottom', 'Left'],
                cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
                eventsToggle = camQuery.fn.toggle;
              function vendorPropName (style, name) {
                if (name in style) {
                  return name;
                }
                var capName = name.charAt(0).toUpperCase() + name.slice(1),
                  origName = name,
                  i = cssPrefixes.length;
                while (i--) {
                  name = cssPrefixes[i] + capName;
                  if (name in style) {
                    return name;
                  }
                }
                return origName;
              }
              function isHidden (elem, el) {
                elem = el || elem;
                return (
                  camQuery.css(elem, 'display') === 'none' ||
                  !camQuery.contains(elem.ownerDocument, elem)
                );
              }
              function showHide (elements, show) {
                var elem,
                  display,
                  values = [],
                  index = 0,
                  length = elements.length;
                for (; index < length; index++) {
                  elem = elements[index];
                  if (!elem.style) {
                    continue;
                  }
                  values[index] = camQuery._data(elem, 'olddisplay');
                  if (show) {
                    if (!values[index] && elem.style.display === 'none') {
                      elem.style.display = '';
                    }
                    if (elem.style.display === '' && isHidden(elem)) {
                      values[index] = camQuery._data(
                        elem,
                        'olddisplay',
                        css_defaultDisplay(elem.nodeName)
                      );
                    }
                  } else {
                    display = curCSS(elem, 'display');
                    if (!values[index] && display !== 'none') {
                      camQuery._data(elem, 'olddisplay', display);
                    }
                  }
                }
                for (index = 0; index < length; index++) {
                  elem = elements[index];
                  if (!elem.style) {
                    continue;
                  }
                  if (!show || elem.style.display === 'none' || elem.style.display === '') {
                    elem.style.display = show ? values[index] || '' : 'none';
                  }
                }
                return elements;
              }
              camQuery.fn.extend({
                css: function (name, value) {
                  return camQuery.access(
                    this,
                    function (elem, name, value) {
                      return value !== undefined
                        ? camQuery.style(elem, name, value)
                        : camQuery.css(elem, name);
                    },
                    name,
                    value,
                    arguments.length > 1
                  );
                },
                show: function () {
                  return showHide(this, true);
                },
                hide: function () {
                  return showHide(this);
                },
                toggle: function (state, fn2) {
                  var bool = typeof state === 'boolean';
                  if (camQuery.isFunction(state) && camQuery.isFunction(fn2)) {
                    return eventsToggle.apply(this, arguments);
                  }
                  return this.each(function () {
                    if (bool ? state : isHidden(this)) {
                      camQuery(this).show();
                    } else {
                      camQuery(this).hide();
                    }
                  });
                },
              });
              camQuery.extend({
                cssHooks: {
                  opacity: {
                    get: function (elem, computed) {
                      if (computed) {
                        var ret = curCSS(elem, 'opacity');
                        return ret === '' ? '1' : ret;
                      }
                    },
                  },
                },
                cssNumber: {
                  fillOpacity: true,
                  fontWeight: true,
                  lineHeight: true,
                  opacity: true,
                  orphans: true,
                  widows: true,
                  zIndex: true,
                  zoom: true,
                },
                cssProps: { float: camQuery.support.cssFloat ? 'cssFloat' : 'styleFloat' },
                style: function (elem, name, value, extra) {
                  if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                    return;
                  }
                  var ret,
                    type,
                    hooks,
                    origName = camQuery.camelCase(name),
                    style = elem.style;
                  name =
                    camQuery.cssProps[origName] ||
                    (camQuery.cssProps[origName] = vendorPropName(style, origName));
                  hooks = camQuery.cssHooks[name] || camQuery.cssHooks[origName];
                  if (value !== undefined) {
                    type = typeof value;
                    if (type === 'string' && (ret = rrelNum.exec(value))) {
                      value = (ret[1] + 1) * ret[2] + parseFloat(camQuery.css(elem, name));
                      type = 'number';
                    }
                    if (value == null || (type === 'number' && isNaN(value))) {
                      return;
                    }
                    if (type === 'number' && !camQuery.cssNumber[origName]) {
                      value += 'px';
                    }
                    if (
                      !hooks ||
                      !('set' in hooks) ||
                      (value = hooks.set(elem, value, extra)) !== undefined
                    ) {
                      try {
                        style[name] = value;
                      } catch (e) {}
                    }
                  } else {
                    if (
                      hooks &&
                      'get' in hooks &&
                      (ret = hooks.get(elem, false, extra)) !== undefined
                    ) {
                      return ret;
                    }
                    return style[name];
                  }
                },
                css: function (elem, name, numeric, extra) {
                  var val,
                    num,
                    hooks,
                    origName = camQuery.camelCase(name);
                  name =
                    camQuery.cssProps[origName] ||
                    (camQuery.cssProps[origName] = vendorPropName(elem.style, origName));
                  hooks = camQuery.cssHooks[name] || camQuery.cssHooks[origName];
                  if (hooks && 'get' in hooks) {
                    val = hooks.get(elem, true, extra);
                  }
                  if (val === undefined) {
                    val = curCSS(elem, name);
                  }
                  if (val === 'normal' && name in cssNormalTransform) {
                    val = cssNormalTransform[name];
                  }
                  if (numeric || extra !== undefined) {
                    num = parseFloat(val);
                    return numeric || camQuery.isNumeric(num) ? num || 0 : val;
                  }
                  return val;
                },
                swap: function (elem, options, callback) {
                  var ret,
                    name,
                    old = {};
                  for (name in options) {
                    old[name] = elem.style[name];
                    elem.style[name] = options[name];
                  }
                  ret = callback.call(elem);
                  for (name in options) {
                    elem.style[name] = old[name];
                  }
                  return ret;
                },
              });
              if (window.getComputedStyle) {
                curCSS = function (elem, name) {
                  var ret,
                    width,
                    minWidth,
                    maxWidth,
                    computed = window.getComputedStyle(elem, null),
                    style = elem.style;
                  if (computed) {
                    ret = computed.getPropertyValue(name) || computed[name];
                    if (ret === '' && !camQuery.contains(elem.ownerDocument, elem)) {
                      ret = camQuery.style(elem, name);
                    }
                    if (rnumnonpx.test(ret) && rmargin.test(name)) {
                      width = style.width;
                      minWidth = style.minWidth;
                      maxWidth = style.maxWidth;
                      style.minWidth = style.maxWidth = style.width = ret;
                      ret = computed.width;
                      style.width = width;
                      style.minWidth = minWidth;
                      style.maxWidth = maxWidth;
                    }
                  }
                  return ret;
                };
              } else {
                if (document.documentElement.currentStyle) {
                  curCSS = function (elem, name) {
                    var left,
                      rsLeft,
                      ret = elem.currentStyle && elem.currentStyle[name],
                      style = elem.style;
                    if (ret == null && style && style[name]) {
                      ret = style[name];
                    }
                    if (rnumnonpx.test(ret) && !rposition.test(name)) {
                      left = style.left;
                      rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;
                      if (rsLeft) {
                        elem.runtimeStyle.left = elem.currentStyle.left;
                      }
                      style.left = name === 'fontSize' ? '1em' : ret;
                      ret = style.pixelLeft + 'px';
                      style.left = left;
                      if (rsLeft) {
                        elem.runtimeStyle.left = rsLeft;
                      }
                    }
                    return ret === '' ? 'auto' : ret;
                  };
                }
              }
              function setPositiveNumber (elem, value, subtract) {
                var matches = rnumsplit.exec(value);
                return matches
                  ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || 'px')
                  : value;
              }
              function augmentWidthOrHeight (elem, name, extra, isBorderBox) {
                var i =
                    extra === (isBorderBox ? 'border' : 'content') ? 4 : name === 'width' ? 1 : 0,
                  val = 0;
                for (; i < 4; i += 2) {
                  if (extra === 'margin') {
                    val += camQuery.css(elem, extra + cssExpand[i], true);
                  }
                  if (isBorderBox) {
                    if (extra === 'content') {
                      val -= parseFloat(curCSS(elem, 'padding' + cssExpand[i])) || 0;
                    }
                    if (extra !== 'margin') {
                      val -= parseFloat(curCSS(elem, 'border' + cssExpand[i] + 'Width')) || 0;
                    }
                  } else {
                    val += parseFloat(curCSS(elem, 'padding' + cssExpand[i])) || 0;
                    if (extra !== 'padding') {
                      val += parseFloat(curCSS(elem, 'border' + cssExpand[i] + 'Width')) || 0;
                    }
                  }
                }
                return val;
              }
              function getWidthOrHeight (elem, name, extra) {
                var val = name === 'width' ? elem.offsetWidth : elem.offsetHeight,
                  valueIsBorderBox = true,
                  isBorderBox =
                    camQuery.support.boxSizing && camQuery.css(elem, 'boxSizing') === 'border-box';
                if (val <= 0 || val == null) {
                  val = curCSS(elem, name);
                  if (val < 0 || val == null) {
                    val = elem.style[name];
                  }
                  if (rnumnonpx.test(val)) {
                    return val;
                  }
                  valueIsBorderBox =
                    isBorderBox &&
                    (camQuery.support.boxSizingReliable || val === elem.style[name]);
                  val = parseFloat(val) || 0;
                }
                return (
                  val +
                  augmentWidthOrHeight(
                    elem,
                    name,
                    extra || (isBorderBox ? 'border' : 'content'),
                    valueIsBorderBox
                  ) +
                  'px'
                );
              }
              function css_defaultDisplay (nodeName) {
                if (elemdisplay[nodeName]) {
                  return elemdisplay[nodeName];
                }
                var elem = camQuery('<' + nodeName + '>').appendTo(document.body),
                  display = elem.css('display');
                elem.remove();
                if (display === 'none' || display === '') {
                  iframe = document.body.appendChild(
                    iframe ||
                      camQuery.extend(document.createElement('iframe'), {
                        frameBorder: 0,
                        width: 0,
                        height: 0,
                      })
                  );
                  if (!iframeDoc || !iframe.createElement) {
                    iframeDoc = (iframe.contentWindow || iframe.contentDocument).document;
                    iframeDoc.write('<!doctype html><html><body>');
                    iframeDoc.close();
                  }
                  elem = iframeDoc.body.appendChild(iframeDoc.createElement(nodeName));
                  display = curCSS(elem, 'display');
                  document.body.removeChild(iframe);
                }
                elemdisplay[nodeName] = display;
                return display;
              }
              camQuery.each(['height', 'width'], function (i, name) {
                camQuery.cssHooks[name] = {
                  get: function (elem, computed, extra) {
                    if (computed) {
                      if (elem.offsetWidth === 0 && rdisplayswap.test(curCSS(elem, 'display'))) {
                        return camQuery.swap(elem, cssShow, function () {
                          return getWidthOrHeight(elem, name, extra);
                        });
                      } else {
                        return getWidthOrHeight(elem, name, extra);
                      }
                    }
                  },
                  set: function (elem, value, extra) {
                    return setPositiveNumber(
                      elem,
                      value,
                      extra
                        ? augmentWidthOrHeight(
                            elem,
                            name,
                            extra,
                            camQuery.support.boxSizing &&
                              camQuery.css(elem, 'boxSizing') === 'border-box'
                          )
                        : 0
                    );
                  },
                };
              });
              if (!camQuery.support.opacity) {
                camQuery.cssHooks.opacity = {
                  get: function (elem, computed) {
                    return ropacity.test(
                      (computed && elem.currentStyle
                        ? elem.currentStyle.filter
                        : elem.style.filter) || ''
                    )
                      ? 0.01 * parseFloat(RegExp.$1) + ''
                      : computed
                      ? '1'
                      : '';
                  },
                  set: function (elem, value) {
                    var style = elem.style,
                      currentStyle = elem.currentStyle,
                      opacity = camQuery.isNumeric(value)
                        ? 'alpha(opacity=' + value * 100 + ')'
                        : '',
                      filter = (currentStyle && currentStyle.filter) || style.filter || '';
                    style.zoom = 1;
                    if (
                      value >= 1 &&
                      camQuery.trim(filter.replace(ralpha, '')) === '' &&
                      style.removeAttribute
                    ) {
                      style.removeAttribute('filter');
                      if (currentStyle && !currentStyle.filter) {
                        return;
                      }
                    }
                    style.filter = ralpha.test(filter)
                      ? filter.replace(ralpha, opacity)
                      : filter + ' ' + opacity;
                  },
                };
              }
              camQuery(function () {
                if (!camQuery.support.reliableMarginRight) {
                  camQuery.cssHooks.marginRight = {
                    get: function (elem, computed) {
                      return camQuery.swap(elem, { display: 'inline-block' }, function () {
                        if (computed) {
                          return curCSS(elem, 'marginRight');
                        }
                      });
                    },
                  };
                }
                if (!camQuery.support.pixelPosition && camQuery.fn.position) {
                  camQuery.each(['top', 'left'], function (i, prop) {
                    camQuery.cssHooks[prop] = {
                      get: function (elem, computed) {
                        if (computed) {
                          var ret = curCSS(elem, prop);
                          return rnumnonpx.test(ret)
                            ? camQuery(elem).position()[prop] + 'px'
                            : ret;
                        }
                      },
                    };
                  });
                }
              });
              if (camQuery.expr && camQuery.expr.filters) {
                camQuery.expr.filters.hidden = function (elem) {
                  return (
                    (elem.offsetWidth === 0 && elem.offsetHeight === 0) ||
                    (!camQuery.support.reliableHiddenOffsets &&
                      ((elem.style && elem.style.display) || curCSS(elem, 'display')) === 'none')
                  );
                };
                camQuery.expr.filters.visible = function (elem) {
                  return !camQuery.expr.filters.hidden(elem);
                };
              }
              camQuery.each({ margin: '', padding: '', border: 'Width' }, function (
                prefix,
                suffix
              ) {
                camQuery.cssHooks[prefix + suffix] = {
                  expand: function (value) {
                    var i,
                      parts = typeof value === 'string' ? value.split(' ') : [value],
                      expanded = {};
                    for (i = 0; i < 4; i++) {
                      expanded[prefix + cssExpand[i] + suffix] =
                        parts[i] || parts[i - 2] || parts[0];
                    }
                    return expanded;
                  },
                };
                if (!rmargin.test(prefix)) {
                  camQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }
              });
              var r20 = /%20/g,
                rbracket = /\[\]$/,
                rCRLF = /\r?\n/g,
                rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
                rselectTextarea = /^(?:select|textarea)/i;
              camQuery.fn.extend({
                serialize: function () {
                  return camQuery.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    return this.elements ? camQuery.makeArray(this.elements) : this;
                  })
                    .filter(function () {
                      return (
                        this.name &&
                        !this.disabled &&
                        (this.checked ||
                          rselectTextarea.test(this.nodeName) ||
                          rinput.test(this.type))
                      );
                    })
                    .map(function (i, elem) {
                      var val = camQuery(this).val();
                      return val == null
                        ? null
                        : camQuery.isArray(val)
                        ? camQuery.map(val, function (val, i) {
                            return { name: elem.name, value: val.replace(rCRLF, '\r\n') };
                          })
                        : { name: elem.name, value: val.replace(rCRLF, '\r\n') };
                    })
                    .get();
                },
              });
              camQuery.param = function (a, traditional) {
                var prefix,
                  s = [],
                  add = function (key, value) {
                    value = camQuery.isFunction(value) ? value() : value == null ? '' : value;
                    s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
                  };
                if (traditional === undefined) {
                  traditional = camQuery.ajaxSettings && camQuery.ajaxSettings.traditional;
                }
                if (camQuery.isArray(a) || (a.jquery && !camQuery.isPlainObject(a))) {
                  camQuery.each(a, function () {
                    add(this.name, this.value);
                  });
                } else {
                  for (prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add);
                  }
                }
                return s.join('&').replace(r20, '+');
              };
              function buildParams (prefix, obj, traditional, add) {
                var name;
                if (camQuery.isArray(obj)) {
                  camQuery.each(obj, function (i, v) {
                    if (traditional || rbracket.test(prefix)) {
                      add(prefix, v);
                    } else {
                      buildParams(
                        prefix + '[' + (typeof v === 'object' ? i : '') + ']',
                        v,
                        traditional,
                        add
                      );
                    }
                  });
                } else {
                  if (!traditional && camQuery.type(obj) === 'object') {
                    for (name in obj) {
                      buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
                    }
                  } else {
                    add(prefix, obj);
                  }
                }
              }
              var ajaxLocParts,
                ajaxLocation,
                rhash = /#.*$/,
                rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
                rnoContent = /^(?:GET|HEAD)$/,
                rprotocol = /^\/\//,
                rquery = /\?/,
                rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                rts = /([?&])_=[^&]*/,
                rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                _load = camQuery.fn.load,
                prefilters = {},
                transports = {},
                allTypes = ['*/'] + ['*'];
              try {
                ajaxLocation = location.href;
              } catch (e) {
                ajaxLocation = document.createElement('a');
                ajaxLocation.href = '';
                ajaxLocation = ajaxLocation.href;
              }
              ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
              function addToPrefiltersOrTransports (structure) {
                return function (dataTypeExpression, func) {
                  if (typeof dataTypeExpression !== 'string') {
                    func = dataTypeExpression;
                    dataTypeExpression = '*';
                  }
                  var dataType,
                    list,
                    placeBefore,
                    dataTypes = dataTypeExpression.toLowerCase().split(core_rspace),
                    i = 0,
                    length = dataTypes.length;
                  if (camQuery.isFunction(func)) {
                    for (; i < length; i++) {
                      dataType = dataTypes[i];
                      placeBefore = /^\+/.test(dataType);
                      if (placeBefore) {
                        dataType = dataType.substr(1) || '*';
                      }
                      list = structure[dataType] = structure[dataType] || [];
                      list[placeBefore ? 'unshift' : 'push'](func);
                    }
                  }
                };
              }
              function inspectPrefiltersOrTransports (
                structure,
                options,
                originalOptions,
                jqXHR,
                dataType,
                inspected
              ) {
                dataType = dataType || options.dataTypes[0];
                inspected = inspected || {};
                inspected[dataType] = true;
                var selection,
                  list = structure[dataType],
                  i = 0,
                  length = list ? list.length : 0,
                  executeOnly = structure === prefilters;
                for (; i < length && (executeOnly || !selection); i++) {
                  selection = list[i](options, originalOptions, jqXHR);
                  if (typeof selection === 'string') {
                    if (!executeOnly || inspected[selection]) {
                      selection = undefined;
                    } else {
                      options.dataTypes.unshift(selection);
                      selection = inspectPrefiltersOrTransports(
                        structure,
                        options,
                        originalOptions,
                        jqXHR,
                        selection,
                        inspected
                      );
                    }
                  }
                }
                if ((executeOnly || !selection) && !inspected['*']) {
                  selection = inspectPrefiltersOrTransports(
                    structure,
                    options,
                    originalOptions,
                    jqXHR,
                    '*',
                    inspected
                  );
                }
                return selection;
              }
              function ajaxExtend (target, src) {
                var key,
                  deep,
                  flatOptions = camQuery.ajaxSettings.flatOptions || {};
                for (key in src) {
                  if (src[key] !== undefined) {
                    (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                  }
                }
                if (deep) {
                  camQuery.extend(true, target, deep);
                }
              }
              camQuery.fn.load = function (url, params, callback) {
                if (typeof url !== 'string' && _load) {
                  return _load.apply(this, arguments);
                }
                if (!this.length) {
                  return this;
                }
                var selector,
                  type,
                  response,
                  self = this,
                  off = url.indexOf(' ');
                if (off >= 0) {
                  selector = url.slice(off, url.length);
                  url = url.slice(0, off);
                }
                if (camQuery.isFunction(params)) {
                  callback = params;
                  params = undefined;
                } else {
                  if (params && typeof params === 'object') {
                    type = 'POST';
                  }
                }
                camQuery
                  .ajax({
                    url: url,
                    type: type,
                    dataType: 'html',
                    data: params,
                    complete: function (jqXHR, status) {
                      if (callback) {
                        self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
                      }
                    },
                  })
                  .done(function (responseText) {
                    response = arguments;
                    self.html(
                      selector
                        ? camQuery('<div>')
                            .append(responseText.replace(rscript, ''))
                            .find(selector)
                        : responseText
                    );
                  });
                return this;
              };
              camQuery.each(
                'ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '),
                function (i, o) {
                  camQuery.fn[o] = function (f) {
                    return this.on(o, f);
                  };
                }
              );
              camQuery.each(['get', 'post'], function (i, method) {
                camQuery[method] = function (url, data, callback, type) {
                  if (camQuery.isFunction(data)) {
                    type = type || callback;
                    callback = data;
                    data = undefined;
                  }
                  return camQuery.ajax({
                    type: method,
                    url: url,
                    data: data,
                    success: callback,
                    dataType: type,
                  });
                };
              });
              camQuery.extend({
                getScript: function (url, callback) {
                  return camQuery.get(url, undefined, callback, 'script');
                },
                getJSON: function (url, data, callback) {
                  return camQuery.get(url, data, callback, 'json');
                },
                ajaxSetup: function (target, settings) {
                  if (settings) {
                    ajaxExtend(target, camQuery.ajaxSettings);
                  } else {
                    settings = target;
                    target = camQuery.ajaxSettings;
                  }
                  ajaxExtend(target, settings);
                  return target;
                },
                ajaxSettings: {
                  url: ajaxLocation,
                  isLocal: rlocalProtocol.test(ajaxLocParts[1]),
                  global: true,
                  type: 'GET',
                  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                  processData: true,
                  async: true,
                  accepts: {
                    xml: 'application/xml, text/xml',
                    html: 'text/html',
                    text: 'text/plain',
                    json: 'application/json, text/javascript',
                    '*': allTypes,
                  },
                  contents: { xml: /xml/, html: /html/, json: /json/ },
                  responseFields: { xml: 'responseXML', text: 'responseText' },
                  converters: {
                    '* text': window.String,
                    'text html': true,
                    'text json': camQuery.parseJSON,
                    'text xml': camQuery.parseXML,
                  },
                  flatOptions: { context: true, url: true },
                },
                ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                ajaxTransport: addToPrefiltersOrTransports(transports),
                ajax: function (url, options) {
                  if (typeof url === 'object') {
                    options = url;
                    url = undefined;
                  }
                  options = options || {};
                  var ifModifiedKey,
                    responseHeadersString,
                    responseHeaders,
                    transport,
                    timeoutTimer,
                    parts,
                    fireGlobals,
                    i,
                    s = camQuery.ajaxSetup({}, options),
                    callbackContext = s.context || s,
                    globalEventContext =
                      callbackContext !== s &&
                      (callbackContext.nodeType || callbackContext instanceof camQuery)
                        ? camQuery(callbackContext)
                        : camQuery.event,
                    deferred = camQuery.Deferred(),
                    completeDeferred = camQuery.Callbacks('once memory'),
                    statusCode = s.statusCode || {},
                    requestHeaders = {},
                    requestHeadersNames = {},
                    state = 0,
                    strAbort = 'canceled',
                    jqXHR = {
                      readyState: 0,
                      setRequestHeader: function (name, value) {
                        if (!state) {
                          var lname = name.toLowerCase();
                          name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                          requestHeaders[name] = value;
                        }
                        return this;
                      },
                      getAllResponseHeaders: function () {
                        return state === 2 ? responseHeadersString : null;
                      },
                      getResponseHeader: function (key) {
                        var match;
                        if (state === 2) {
                          if (!responseHeaders) {
                            responseHeaders = {};
                            while ((match = rheaders.exec(responseHeadersString))) {
                              responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                          }
                          match = responseHeaders[key.toLowerCase()];
                        }
                        return match === undefined ? null : match;
                      },
                      overrideMimeType: function (type) {
                        if (!state) {
                          s.mimeType = type;
                        }
                        return this;
                      },
                      abort: function (statusText) {
                        statusText = statusText || strAbort;
                        if (transport) {
                          transport.abort(statusText);
                        }
                        done(0, statusText);
                        return this;
                      },
                    };
                  function done (status, nativeStatusText, responses, headers) {
                    var isSuccess,
                      success,
                      error,
                      response,
                      modified,
                      statusText = nativeStatusText;
                    if (state === 2) {
                      return;
                    }
                    state = 2;
                    if (timeoutTimer) {
                      clearTimeout(timeoutTimer);
                    }
                    transport = undefined;
                    responseHeadersString = headers || '';
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    if (responses) {
                      response = ajaxHandleResponses(s, jqXHR, responses);
                    }
                    if ((status >= 200 && status < 300) || status === 304) {
                      if (s.ifModified) {
                        modified = jqXHR.getResponseHeader('Last-Modified');
                        if (modified) {
                          camQuery.lastModified[ifModifiedKey] = modified;
                        }
                        modified = jqXHR.getResponseHeader('Etag');
                        if (modified) {
                          camQuery.etag[ifModifiedKey] = modified;
                        }
                      }
                      if (status === 304) {
                        statusText = 'notmodified';
                        isSuccess = true;
                      } else {
                        isSuccess = ajaxConvert(s, response);
                        statusText = isSuccess.state;
                        success = isSuccess.data;
                        error = isSuccess.error;
                        isSuccess = !error;
                      }
                    } else {
                      error = statusText;
                      if (!statusText || status) {
                        statusText = 'error';
                        if (status < 0) {
                          status = 0;
                        }
                      }
                    }
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + '';
                    if (isSuccess) {
                      deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                    } else {
                      deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                    }
                    jqXHR.statusCode(statusCode);
                    statusCode = undefined;
                    if (fireGlobals) {
                      globalEventContext.trigger('ajax' + (isSuccess ? 'Success' : 'Error'), [
                        jqXHR,
                        s,
                        isSuccess ? success : error,
                      ]);
                    }
                    completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                    if (fireGlobals) {
                      globalEventContext.trigger('ajaxComplete', [jqXHR, s]);
                      if (!--camQuery.active) {
                        camQuery.event.trigger('ajaxStop');
                      }
                    }
                  }
                  deferred.promise(jqXHR);
                  jqXHR.success = jqXHR.done;
                  jqXHR.error = jqXHR.fail;
                  jqXHR.complete = completeDeferred.add;
                  jqXHR.statusCode = function (map) {
                    if (map) {
                      var tmp;
                      if (state < 2) {
                        for (tmp in map) {
                          statusCode[tmp] = [statusCode[tmp], map[tmp]];
                        }
                      } else {
                        tmp = map[jqXHR.status];
                        jqXHR.always(tmp);
                      }
                    }
                    return this;
                  };
                  s.url = ((url || s.url) + '')
                    .replace(rhash, '')
                    .replace(rprotocol, ajaxLocParts[1] + '//');
                  s.dataTypes = camQuery
                    .trim(s.dataType || '*')
                    .toLowerCase()
                    .split(core_rspace);
                  if (s.crossDomain == null) {
                    parts = rurl.exec(s.url.toLowerCase());
                    s.crossDomain = !!(
                      parts &&
                      (parts[1] !== ajaxLocParts[1] ||
                        parts[2] !== ajaxLocParts[2] ||
                        (parts[3] || (parts[1] === 'http:' ? 80 : 443)) !=
                          (ajaxLocParts[3] || (ajaxLocParts[1] === 'http:' ? 80 : 443)))
                    );
                  }
                  if (s.data && s.processData && typeof s.data !== 'string') {
                    s.data = camQuery.param(s.data, s.traditional);
                  }
                  inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                  if (state === 2) {
                    return jqXHR;
                  }
                  fireGlobals = s.global;
                  s.type = s.type.toUpperCase();
                  s.hasContent = !rnoContent.test(s.type);
                  if (fireGlobals && camQuery.active++ === 0) {
                    camQuery.event.trigger('ajaxStart');
                  }
                  if (!s.hasContent) {
                    if (s.data) {
                      s.url += (rquery.test(s.url) ? '&' : '?') + s.data;
                      delete s.data;
                    }
                    ifModifiedKey = s.url;
                    if (s.cache === false) {
                      var ts = camQuery.now(),
                        ret = s.url.replace(rts, '$1_=' + ts);
                      s.url =
                        ret + (ret === s.url ? (rquery.test(s.url) ? '&' : '?') + '_=' + ts : '');
                    }
                  }
                  if ((s.data && s.hasContent && s.contentType !== false) || options.contentType) {
                    jqXHR.setRequestHeader('Content-Type', s.contentType);
                  }
                  if (s.ifModified) {
                    ifModifiedKey = ifModifiedKey || s.url;
                    if (camQuery.lastModified[ifModifiedKey]) {
                      jqXHR.setRequestHeader(
                        'If-Modified-Since',
                        camQuery.lastModified[ifModifiedKey]
                      );
                    }
                    if (camQuery.etag[ifModifiedKey]) {
                      jqXHR.setRequestHeader('If-None-Match', camQuery.etag[ifModifiedKey]);
                    }
                  }
                  jqXHR.setRequestHeader(
                    'Accept',
                    s.dataTypes[0] && s.accepts[s.dataTypes[0]]
                      ? s.accepts[s.dataTypes[0]] +
                          (s.dataTypes[0] !== '*' ? ', ' + allTypes + '; q=0.01' : '')
                      : s.accepts['*']
                  );
                  for (i in s.headers) {
                    jqXHR.setRequestHeader(i, s.headers[i]);
                  }
                  if (
                    s.beforeSend &&
                    (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)
                  ) {
                    return jqXHR.abort();
                  }
                  strAbort = 'abort';
                  for (i in { success: 1, error: 1, complete: 1 }) {
                    jqXHR[i](s[i]);
                  }
                  transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                  if (!transport) {
                    done(-1, 'No Transport');
                  } else {
                    jqXHR.readyState = 1;
                    if (fireGlobals) {
                      globalEventContext.trigger('ajaxSend', [jqXHR, s]);
                    }
                    if (s.async && s.timeout > 0) {
                      timeoutTimer = setTimeout(function () {
                        jqXHR.abort('timeout');
                      }, s.timeout);
                    }
                    try {
                      state = 1;
                      transport.send(requestHeaders, done);
                    } catch (e) {
                      if (state < 2) {
                        done(-1, e);
                      } else {
                        throw e;
                      }
                    }
                  }
                  return jqXHR;
                },
                active: 0,
                lastModified: {},
                etag: {},
              });
              function ajaxHandleResponses (s, jqXHR, responses) {
                var ct,
                  type,
                  finalDataType,
                  firstDataType,
                  contents = s.contents,
                  dataTypes = s.dataTypes,
                  responseFields = s.responseFields;
                for (type in responseFields) {
                  if (type in responses) {
                    jqXHR[responseFields[type]] = responses[type];
                  }
                }
                while (dataTypes[0] === '*') {
                  dataTypes.shift();
                  if (ct === undefined) {
                    ct = s.mimeType || jqXHR.getResponseHeader('content-type');
                  }
                }
                if (ct) {
                  for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                      dataTypes.unshift(type);
                      break;
                    }
                  }
                }
                if (dataTypes[0] in responses) {
                  finalDataType = dataTypes[0];
                } else {
                  for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + ' ' + dataTypes[0]]) {
                      finalDataType = type;
                      break;
                    }
                    if (!firstDataType) {
                      firstDataType = type;
                    }
                  }
                  finalDataType = finalDataType || firstDataType;
                }
                if (finalDataType) {
                  if (finalDataType !== dataTypes[0]) {
                    dataTypes.unshift(finalDataType);
                  }
                  return responses[finalDataType];
                }
              }
              function ajaxConvert (s, response) {
                var conv,
                  conv2,
                  current,
                  tmp,
                  dataTypes = s.dataTypes.slice(),
                  prev = dataTypes[0],
                  converters = {},
                  i = 0;
                if (s.dataFilter) {
                  response = s.dataFilter(response, s.dataType);
                }
                if (dataTypes[1]) {
                  for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv];
                  }
                }
                for (; (current = dataTypes[++i]); ) {
                  if (current !== '*') {
                    if (prev !== '*' && prev !== current) {
                      conv = converters[prev + ' ' + current] || converters['* ' + current];
                      if (!conv) {
                        for (conv2 in converters) {
                          tmp = conv2.split(' ');
                          if (tmp[1] === current) {
                            conv = converters[prev + ' ' + tmp[0]] || converters['* ' + tmp[0]];
                            if (conv) {
                              if (conv === true) {
                                conv = converters[conv2];
                              } else {
                                if (converters[conv2] !== true) {
                                  current = tmp[0];
                                  dataTypes.splice(i--, 0, current);
                                }
                              }
                              break;
                            }
                          }
                        }
                      }
                      if (conv !== true) {
                        if (conv && s['throws']) {
                          response = conv(response);
                        } else {
                          try {
                            response = conv(response);
                          } catch (e) {
                            return {
                              state: 'parsererror',
                              error: conv ? e : 'No conversion from ' + prev + ' to ' + current,
                            };
                          }
                        }
                      }
                    }
                    prev = current;
                  }
                }
                return { state: 'success', data: response };
              }
              var oldCallbacks = [],
                rquestion = /\?/,
                rjsonp = /(=)\?(?=&|$)|\?\?/,
                nonce = camQuery.now();
              camQuery.ajaxSetup({
                jsonp: 'callback',
                jsonpCallback: function () {
                  var callback = oldCallbacks.pop() || camQuery.expando + '_' + nonce++;
                  this[callback] = true;
                  return callback;
                },
              });
              camQuery.ajaxPrefilter('json jsonp', function (s, originalSettings, jqXHR) {
                var callbackName,
                  overwritten,
                  responseContainer,
                  data = s.data,
                  url = s.url,
                  hasCallback = s.jsonp !== false,
                  replaceInUrl = hasCallback && rjsonp.test(url),
                  replaceInData =
                    hasCallback &&
                    !replaceInUrl &&
                    typeof data === 'string' &&
                    !(s.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                    rjsonp.test(data);
                if (s.dataTypes[0] === 'jsonp' || replaceInUrl || replaceInData) {
                  callbackName = s.jsonpCallback = camQuery.isFunction(s.jsonpCallback)
                    ? s.jsonpCallback()
                    : s.jsonpCallback;
                  overwritten = window[callbackName];
                  if (replaceInUrl) {
                    s.url = url.replace(rjsonp, '$1' + callbackName);
                  } else {
                    if (replaceInData) {
                      s.data = data.replace(rjsonp, '$1' + callbackName);
                    } else {
                      if (hasCallback) {
                        s.url += (rquestion.test(url) ? '&' : '?') + s.jsonp + '=' + callbackName;
                      }
                    }
                  }
                  s.converters['script json'] = function () {
                    if (!responseContainer) {
                      camQuery.error(callbackName + ' was not called');
                    }
                    return responseContainer[0];
                  };
                  s.dataTypes[0] = 'json';
                  window[callbackName] = function () {
                    responseContainer = arguments;
                  };
                  jqXHR.always(function () {
                    window[callbackName] = overwritten;
                    if (s[callbackName]) {
                      s.jsonpCallback = originalSettings.jsonpCallback;
                      oldCallbacks.push(callbackName);
                    }
                    if (responseContainer && camQuery.isFunction(overwritten)) {
                      overwritten(responseContainer[0]);
                    }
                    responseContainer = overwritten = undefined;
                  });
                  return 'script';
                }
              });
              camQuery.ajaxSetup({
                accepts: {
                  script:
                    'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
                },
                contents: { script: /javascript|ecmascript/ },
                converters: {
                  'text script': function (text) {
                    camQuery.globalEval(text);
                    return text;
                  },
                },
              });
              camQuery.ajaxPrefilter('script', function (s) {
                if (s.cache === undefined) {
                  s.cache = false;
                }
                if (s.crossDomain) {
                  s.type = 'GET';
                  s.global = false;
                }
              });
              camQuery.ajaxTransport('script', function (s) {
                if (s.crossDomain) {
                  var script,
                    head =
                      document.head ||
                      document.getElementsByTagName('head')[0] ||
                      document.documentElement;
                  return {
                    send: function (_, callback) {
                      script = document.createElement('script');
                      script.async = 'async';
                      if (s.scriptCharset) {
                        script.charset = s.scriptCharset;
                      }
                      script.src = s.url;
                      script.onload = script.onreadystatechange = function (_, isAbort) {
                        if (
                          isAbort ||
                          !script.readyState ||
                          /loaded|complete/.test(script.readyState)
                        ) {
                          script.onload = script.onreadystatechange = null;
                          if (head && script.parentNode) {
                            head.removeChild(script);
                          }
                          script = undefined;
                          if (!isAbort) {
                            callback(200, 'success');
                          }
                        }
                      };
                      head.insertBefore(script, head.firstChild);
                    },
                    abort: function () {
                      if (script) {
                        script.onload(0, 1);
                      }
                    },
                  };
                }
              });
              var xhrCallbacks,
                xhrOnUnloadAbort = window.ActiveXObject
                  ? function () {
                      for (var key in xhrCallbacks) {
                        xhrCallbacks[key](0, 1);
                      }
                    }
                  : false,
                xhrId = 0;
              function createStandardXHR () {
                const $___old_7cb282b7bc03c7df = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'XMLHttpRequest'
                  ),
                  $___old_1d3544ea130ac5b7 = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'XMLHttpRequest'
                  );
                try {
                  if ($___old_7cb282b7bc03c7df)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___stub_aa98dea0755b9294.XMLHttpRequest
                    ));
                  if ($___old_1d3544ea130ac5b7)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___stub_aa98dea0755b9294.XMLHttpRequest
                    ));
                  return function () {
                    try {
                      return new window.XMLHttpRequest();
                    } catch (e) {}
                  }.apply(this, arguments);
                } finally {
                  if ($___old_7cb282b7bc03c7df)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___old_7cb282b7bc03c7df
                    ));
                  if ($___old_1d3544ea130ac5b7)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___old_1d3544ea130ac5b7
                    ));
                }
              }
              function createActiveXHR () {
                try {
                  return new window.ActiveXObject('Microsoft.XMLHTTP');
                } catch (e) {}
              }
              camQuery.ajaxSettings.xhr = window.ActiveXObject
                ? function () {
                    return (!this.isLocal && createStandardXHR()) || createActiveXHR();
                  }
                : createStandardXHR;
              (function (xhr) {
                camQuery.extend(camQuery.support, {
                  ajax: !!xhr,
                  cors: !!xhr && 'withCredentials' in xhr,
                });
              })(camQuery.ajaxSettings.xhr());
              if (camQuery.support.ajax) {
                camQuery.ajaxTransport(function (s) {
                  if (!s.crossDomain || camQuery.support.cors) {
                    var callback;
                    return {
                      send: function (headers, complete) {
                        var handle,
                          i,
                          xhr = s.xhr();
                        if (s.username) {
                          xhr.open(s.type, s.url, s.async, s.username, s.password);
                        } else {
                          xhr.open(s.type, s.url, s.async);
                        }
                        if (s.xhrFields) {
                          for (i in s.xhrFields) {
                            xhr[i] = s.xhrFields[i];
                          }
                        }
                        if (s.mimeType && xhr.overrideMimeType) {
                          xhr.overrideMimeType(s.mimeType);
                        }
                        if (!s.crossDomain && !headers['X-Requested-With']) {
                          headers['X-Requested-With'] = 'XMLHttpRequest';
                        }
                        try {
                          for (i in headers) {
                            xhr.setRequestHeader(i, headers[i]);
                          }
                        } catch (_) {}
                        xhr.send((s.hasContent && s.data) || null);
                        callback = function (_, isAbort) {
                          var status, statusText, responseHeaders, responses, xml;
                          try {
                            if (callback && (isAbort || xhr.readyState === 4)) {
                              callback = undefined;
                              if (handle) {
                                xhr.onreadystatechange = camQuery.noop;
                                if (xhrOnUnloadAbort) {
                                  delete xhrCallbacks[handle];
                                }
                              }
                              if (isAbort) {
                                if (xhr.readyState !== 4) {
                                  xhr.abort();
                                }
                              } else {
                                status = xhr.status;
                                responseHeaders = xhr.getAllResponseHeaders();
                                responses = {};
                                xml = xhr.responseXML;
                                if (xml && xml.documentElement) {
                                  responses.xml = xml;
                                }
                                try {
                                  responses.text = xhr.responseText;
                                } catch (e) {}
                                try {
                                  statusText = xhr.statusText;
                                } catch (e) {
                                  statusText = '';
                                }
                                if (!status && s.isLocal && !s.crossDomain) {
                                  status = responses.text ? 200 : 404;
                                } else {
                                  if (status === 1223) {
                                    status = 204;
                                  }
                                }
                              }
                            }
                          } catch (firefoxAccessException) {
                            if (!isAbort) {
                              complete(-1, firefoxAccessException);
                            }
                          }
                          if (responses) {
                            complete(status, statusText, responses, responseHeaders);
                          }
                        };
                        if (!s.async) {
                          callback();
                        } else {
                          if (xhr.readyState === 4) {
                            setTimeout(callback, 0);
                          } else {
                            handle = ++xhrId;
                            if (xhrOnUnloadAbort) {
                              if (!xhrCallbacks) {
                                xhrCallbacks = {};
                                camQuery(window).unload(xhrOnUnloadAbort);
                              }
                              xhrCallbacks[handle] = callback;
                            }
                            xhr.onreadystatechange = callback;
                          }
                        }
                      },
                      abort: function () {
                        if (callback) {
                          callback(0, 1);
                        }
                      },
                    };
                  }
                });
              }
              var fxNow,
                timerId,
                rfxtypes = /^(?:toggle|show|hide)$/,
                rfxnum = new RegExp('^(?:([-+])=|)(' + core_pnum + ')([a-z%]*)$', 'i'),
                rrun = /queueHooks$/,
                animationPrefilters = [defaultPrefilter],
                tweeners = {
                  '*': [
                    function (prop, value) {
                      var end,
                        unit,
                        tween = this.createTween(prop, value),
                        parts = rfxnum.exec(value),
                        target = tween.cur(),
                        start = +target || 0,
                        scale = 1,
                        maxIterations = 20;
                      if (parts) {
                        end = +parts[2];
                        unit = parts[3] || (camQuery.cssNumber[prop] ? '' : 'px');
                        if (unit !== 'px' && start) {
                          start = camQuery.css(tween.elem, prop, true) || end || 1;
                          do {
                            scale = scale || '.5';
                            start = start / scale;
                            camQuery.style(tween.elem, prop, start + unit);
                          } while (
                            scale !== (scale = tween.cur() / target) &&
                            scale !== 1 &&
                            --maxIterations
                          );
                        }
                        tween.unit = unit;
                        tween.start = start;
                        tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
                      }
                      return tween;
                    },
                  ],
                };
              function createFxNow () {
                setTimeout(function () {
                  fxNow = undefined;
                }, 0);
                return (fxNow = camQuery.now());
              }
              function createTweens (animation, props) {
                camQuery.each(props, function (prop, value) {
                  var collection = (tweeners[prop] || []).concat(tweeners['*']),
                    index = 0,
                    length = collection.length;
                  for (; index < length; index++) {
                    if (collection[index].call(animation, prop, value)) {
                      return;
                    }
                  }
                });
              }
              function Animation (elem, properties, options) {
                var result,
                  index = 0,
                  tweenerIndex = 0,
                  length = animationPrefilters.length,
                  deferred = camQuery.Deferred().always(function () {
                    delete tick.elem;
                  }),
                  tick = function () {
                    var currentTime = fxNow || createFxNow(),
                      remaining = Math.max(
                        0,
                        animation.startTime + animation.duration - currentTime
                      ),
                      temp = remaining / animation.duration || 0,
                      percent = 1 - temp,
                      index = 0,
                      length = animation.tweens.length;
                    for (; index < length; index++) {
                      animation.tweens[index].run(percent);
                    }
                    deferred.notifyWith(elem, [animation, percent, remaining]);
                    if (percent < 1 && length) {
                      return remaining;
                    } else {
                      deferred.resolveWith(elem, [animation]);
                      return false;
                    }
                  },
                  animation = deferred.promise({
                    elem: elem,
                    props: camQuery.extend({}, properties),
                    opts: camQuery.extend(true, { specialEasing: {} }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function (prop, end, easing) {
                      var tween = camQuery.Tween(
                        elem,
                        animation.opts,
                        prop,
                        end,
                        animation.opts.specialEasing[prop] || animation.opts.easing
                      );
                      animation.tweens.push(tween);
                      return tween;
                    },
                    stop: function (gotoEnd) {
                      var index = 0,
                        length = gotoEnd ? animation.tweens.length : 0;
                      for (; index < length; index++) {
                        animation.tweens[index].run(1);
                      }
                      if (gotoEnd) {
                        deferred.resolveWith(elem, [animation, gotoEnd]);
                      } else {
                        deferred.rejectWith(elem, [animation, gotoEnd]);
                      }
                      return this;
                    },
                  }),
                  props = animation.props;
                propFilter(props, animation.opts.specialEasing);
                for (; index < length; index++) {
                  result = animationPrefilters[index].call(animation, elem, props, animation.opts);
                  if (result) {
                    return result;
                  }
                }
                createTweens(animation, props);
                if (camQuery.isFunction(animation.opts.start)) {
                  animation.opts.start.call(elem, animation);
                }
                camQuery.fx.timer(
                  camQuery.extend(tick, {
                    anim: animation,
                    queue: animation.opts.queue,
                    elem: elem,
                  })
                );
                return animation
                  .progress(animation.opts.progress)
                  .done(animation.opts.done, animation.opts.complete)
                  .fail(animation.opts.fail)
                  .always(animation.opts.always);
              }
              function propFilter (props, specialEasing) {
                var index, name, easing, value, hooks;
                for (index in props) {
                  name = camQuery.camelCase(index);
                  easing = specialEasing[name];
                  value = props[index];
                  if (camQuery.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0];
                  }
                  if (index !== name) {
                    props[name] = value;
                    delete props[index];
                  }
                  hooks = camQuery.cssHooks[name];
                  if (hooks && 'expand' in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
                    for (index in value) {
                      if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                      }
                    }
                  } else {
                    specialEasing[name] = easing;
                  }
                }
              }
              camQuery.Animation = camQuery.extend(Animation, {
                tweener: function (props, callback) {
                  if (camQuery.isFunction(props)) {
                    callback = props;
                    props = ['*'];
                  } else {
                    props = props.split(' ');
                  }
                  var prop,
                    index = 0,
                    length = props.length;
                  for (; index < length; index++) {
                    prop = props[index];
                    tweeners[prop] = tweeners[prop] || [];
                    tweeners[prop].unshift(callback);
                  }
                },
                prefilter: function (callback, prepend) {
                  if (prepend) {
                    animationPrefilters.unshift(callback);
                  } else {
                    animationPrefilters.push(callback);
                  }
                },
              });
              function defaultPrefilter (elem, props, opts) {
                var index,
                  prop,
                  value,
                  length,
                  dataShow,
                  toggle,
                  tween,
                  hooks,
                  oldfire,
                  anim = this,
                  style = elem.style,
                  orig = {},
                  handled = [],
                  hidden = elem.nodeType && isHidden(elem);
                if (!opts.queue) {
                  hooks = camQuery._queueHooks(elem, 'fx');
                  if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function () {
                      if (!hooks.unqueued) {
                        oldfire();
                      }
                    };
                  }
                  hooks.unqueued++;
                  anim.always(function () {
                    anim.always(function () {
                      hooks.unqueued--;
                      if (!camQuery.queue(elem, 'fx').length) {
                        hooks.empty.fire();
                      }
                    });
                  });
                }
                if (elem.nodeType === 1 && ('height' in props || 'width' in props)) {
                  opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                  if (
                    camQuery.css(elem, 'display') === 'inline' &&
                    camQuery.css(elem, 'float') === 'none'
                  ) {
                    if (
                      !camQuery.support.inlineBlockNeedsLayout ||
                      css_defaultDisplay(elem.nodeName) === 'inline'
                    ) {
                      style.display = 'inline-block';
                    } else {
                      style.zoom = 1;
                    }
                  }
                }
                if (opts.overflow) {
                  style.overflow = 'hidden';
                  if (!camQuery.support.shrinkWrapBlocks) {
                    anim.done(function () {
                      style.overflow = opts.overflow[0];
                      style.overflowX = opts.overflow[1];
                      style.overflowY = opts.overflow[2];
                    });
                  }
                }
                for (index in props) {
                  value = props[index];
                  if (rfxtypes.exec(value)) {
                    delete props[index];
                    toggle = toggle || value === 'toggle';
                    if (value === (hidden ? 'hide' : 'show')) {
                      continue;
                    }
                    handled.push(index);
                  }
                }
                length = handled.length;
                if (length) {
                  dataShow = camQuery._data(elem, 'fxshow') || camQuery._data(elem, 'fxshow', {});
                  if ('hidden' in dataShow) {
                    hidden = dataShow.hidden;
                  }
                  if (toggle) {
                    dataShow.hidden = !hidden;
                  }
                  if (hidden) {
                    camQuery(elem).show();
                  } else {
                    anim.done(function () {
                      camQuery(elem).hide();
                    });
                  }
                  anim.done(function () {
                    var prop;
                    camQuery.removeData(elem, 'fxshow', true);
                    for (prop in orig) {
                      camQuery.style(elem, prop, orig[prop]);
                    }
                  });
                  for (index = 0; index < length; index++) {
                    prop = handled[index];
                    tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
                    orig[prop] = dataShow[prop] || camQuery.style(elem, prop);
                    if (!(prop in dataShow)) {
                      dataShow[prop] = tween.start;
                      if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === 'width' || prop === 'height' ? 1 : 0;
                      }
                    }
                  }
                }
              }
              function Tween (elem, options, prop, end, easing) {
                return new Tween.prototype.init(elem, options, prop, end, easing);
              }
              camQuery.Tween = Tween;
              Tween.prototype = {
                constructor: Tween,
                init: function (elem, options, prop, end, easing, unit) {
                  this.elem = elem;
                  this.prop = prop;
                  this.easing = easing || 'swing';
                  this.options = options;
                  this.start = this.now = this.cur();
                  this.end = end;
                  this.unit = unit || (camQuery.cssNumber[prop] ? '' : 'px');
                },
                cur: function () {
                  var hooks = Tween.propHooks[this.prop];
                  return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                },
                run: function (percent) {
                  var eased,
                    hooks = Tween.propHooks[this.prop];
                  if (this.options.duration) {
                    this.pos = eased = camQuery.easing[this.easing](
                      percent,
                      this.options.duration * percent,
                      0,
                      1,
                      this.options.duration
                    );
                  } else {
                    this.pos = eased = percent;
                  }
                  this.now = (this.end - this.start) * eased + this.start;
                  if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this);
                  }
                  if (hooks && hooks.set) {
                    hooks.set(this);
                  } else {
                    Tween.propHooks._default.set(this);
                  }
                  return this;
                },
              };
              Tween.prototype.init.prototype = Tween.prototype;
              Tween.propHooks = {
                _default: {
                  get: function (tween) {
                    var result;
                    if (
                      tween.elem[tween.prop] != null &&
                      (!tween.elem.style || tween.elem.style[tween.prop] == null)
                    ) {
                      return tween.elem[tween.prop];
                    }
                    result = camQuery.css(tween.elem, tween.prop, false, '');
                    return !result || result === 'auto' ? 0 : result;
                  },
                  set: function (tween) {
                    if (camQuery.fx.step[tween.prop]) {
                      camQuery.fx.step[tween.prop](tween);
                    } else {
                      if (
                        tween.elem.style &&
                        (tween.elem.style[camQuery.cssProps[tween.prop]] != null ||
                          camQuery.cssHooks[tween.prop])
                      ) {
                        camQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                      } else {
                        tween.elem[tween.prop] = tween.now;
                      }
                    }
                  },
                },
              };
              Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function (tween) {
                  if (tween.elem.nodeType && tween.elem.parentNode) {
                    tween.elem[tween.prop] = tween.now;
                  }
                },
              };
              camQuery.each(['toggle', 'show', 'hide'], function (i, name) {
                var cssFn = camQuery.fn[name];
                camQuery.fn[name] = function (speed, easing, callback) {
                  return speed == null ||
                    typeof speed === 'boolean' ||
                    (!i && camQuery.isFunction(speed) && camQuery.isFunction(easing))
                    ? cssFn.apply(this, arguments)
                    : this.animate(genFx(name, true), speed, easing, callback);
                };
              });
              camQuery.fn.extend({
                fadeTo: function (speed, to, easing, callback) {
                  return this.filter(isHidden)
                    .css('opacity', 0)
                    .show()
                    .end()
                    .animate({ opacity: to }, speed, easing, callback);
                },
                animate: function (prop, speed, easing, callback) {
                  var empty = camQuery.isEmptyObject(prop),
                    optall = camQuery.speed(speed, easing, callback),
                    doAnimation = function () {
                      var anim = Animation(this, camQuery.extend({}, prop), optall);
                      if (empty) {
                        anim.stop(true);
                      }
                    };
                  return empty || optall.queue === false
                    ? this.each(doAnimation)
                    : this.queue(optall.queue, doAnimation);
                },
                stop: function (type, clearQueue, gotoEnd) {
                  var stopQueue = function (hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd);
                  };
                  if (typeof type !== 'string') {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined;
                  }
                  if (clearQueue && type !== false) {
                    this.queue(type || 'fx', []);
                  }
                  return this.each(function () {
                    var dequeue = true,
                      index = type != null && type + 'queueHooks',
                      timers = camQuery.timers,
                      data = camQuery._data(this);
                    if (index) {
                      if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                      }
                    } else {
                      for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                          stopQueue(data[index]);
                        }
                      }
                    }
                    for (index = timers.length; index--; ) {
                      if (
                        timers[index].elem === this &&
                        (type == null || timers[index].queue === type)
                      ) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                      }
                    }
                    if (dequeue || !gotoEnd) {
                      camQuery.dequeue(this, type);
                    }
                  });
                },
              });
              function genFx (type, includeWidth) {
                var which,
                  attrs = { height: type },
                  i = 0;
                includeWidth = includeWidth ? 1 : 0;
                for (; i < 4; i += 2 - includeWidth) {
                  which = cssExpand[i];
                  attrs['margin' + which] = attrs['padding' + which] = type;
                }
                if (includeWidth) {
                  attrs.opacity = attrs.width = type;
                }
                return attrs;
              }
              camQuery.each(
                {
                  slideDown: genFx('show'),
                  slideUp: genFx('hide'),
                  slideToggle: genFx('toggle'),
                  fadeIn: { opacity: 'show' },
                  fadeOut: { opacity: 'hide' },
                  fadeToggle: { opacity: 'toggle' },
                },
                function (name, props) {
                  camQuery.fn[name] = function (speed, easing, callback) {
                    return this.animate(props, speed, easing, callback);
                  };
                }
              );
              camQuery.speed = function (speed, easing, fn) {
                var opt =
                  speed && typeof speed === 'object'
                    ? camQuery.extend({}, speed)
                    : {
                        complete: fn || (!fn && easing) || (camQuery.isFunction(speed) && speed),
                        duration: speed,
                        easing:
                          (fn && easing) || (easing && !camQuery.isFunction(easing) && easing),
                      };
                opt.duration = camQuery.fx.off
                  ? 0
                  : typeof opt.duration === 'number'
                  ? opt.duration
                  : opt.duration in camQuery.fx.speeds
                  ? camQuery.fx.speeds[opt.duration]
                  : camQuery.fx.speeds._default;
                if (opt.queue == null || opt.queue === true) {
                  opt.queue = 'fx';
                }
                opt.old = opt.complete;
                opt.complete = function () {
                  if (camQuery.isFunction(opt.old)) {
                    opt.old.call(this);
                  }
                  if (opt.queue) {
                    camQuery.dequeue(this, opt.queue);
                  }
                };
                return opt;
              };
              camQuery.easing = {
                linear: function (p) {
                  return p;
                },
                swing: function (p) {
                  return 0.5 - Math.cos(p * Math.PI) / 2;
                },
              };
              camQuery.timers = [];
              camQuery.fx = Tween.prototype.init;
              camQuery.fx.tick = function () {
                var timer,
                  timers = camQuery.timers,
                  i = 0;
                fxNow = camQuery.now();
                for (; i < timers.length; i++) {
                  timer = timers[i];
                  if (!timer() && timers[i] === timer) {
                    timers.splice(i--, 1);
                  }
                }
                if (!timers.length) {
                  camQuery.fx.stop();
                }
                fxNow = undefined;
              };
              camQuery.fx.timer = function (timer) {
                if (timer() && camQuery.timers.push(timer) && !timerId) {
                  timerId = setInterval(camQuery.fx.tick, camQuery.fx.interval);
                }
              };
              camQuery.fx.interval = 13;
              camQuery.fx.stop = function () {
                clearInterval(timerId);
                timerId = null;
              };
              camQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 };
              camQuery.fx.step = {};
              if (camQuery.expr && camQuery.expr.filters) {
                camQuery.expr.filters.animated = function (elem) {
                  return camQuery.grep(camQuery.timers, function (fn) {
                    return elem === fn.elem;
                  }).length;
                };
              }
              var rroot = /^(?:body|html)$/i;
              camQuery.fn.offset = function (options) {
                if (arguments.length) {
                  return options === undefined
                    ? this
                    : this.each(function (i) {
                        camQuery.offset.setOffset(this, options, i);
                      });
                }
                var docElem,
                  body,
                  win,
                  clientTop,
                  clientLeft,
                  scrollTop,
                  scrollLeft,
                  box = { top: 0, left: 0 },
                  elem = this[0],
                  doc = elem && elem.ownerDocument;
                if (!doc) {
                  return;
                }
                if ((body = doc.body) === elem) {
                  return camQuery.offset.bodyOffset(elem);
                }
                docElem = doc.documentElement;
                if (!camQuery.contains(docElem, elem)) {
                  return box;
                }
                if (typeof elem.getBoundingClientRect !== 'undefined') {
                  box = elem.getBoundingClientRect();
                }
                win = getWindow(doc);
                clientTop = docElem.clientTop || body.clientTop || 0;
                clientLeft = docElem.clientLeft || body.clientLeft || 0;
                scrollTop = win.pageYOffset || docElem.scrollTop;
                scrollLeft = win.pageXOffset || docElem.scrollLeft;
                return {
                  top: box.top + scrollTop - clientTop,
                  left: box.left + scrollLeft - clientLeft,
                };
              };
              camQuery.offset = {
                bodyOffset: function (body) {
                  var top = body.offsetTop,
                    left = body.offsetLeft;
                  if (camQuery.support.doesNotIncludeMarginInBodyOffset) {
                    top += parseFloat(camQuery.css(body, 'marginTop')) || 0;
                    left += parseFloat(camQuery.css(body, 'marginLeft')) || 0;
                  }
                  return { top: top, left: left };
                },
                setOffset: function (elem, options, i) {
                  var position = camQuery.css(elem, 'position');
                  if (position === 'static') {
                    elem.style.position = 'relative';
                  }
                  var curElem = camQuery(elem),
                    curOffset = curElem.offset(),
                    curCSSTop = camQuery.css(elem, 'top'),
                    curCSSLeft = camQuery.css(elem, 'left'),
                    calculatePosition =
                      (position === 'absolute' || position === 'fixed') &&
                      camQuery.inArray('auto', [curCSSTop, curCSSLeft]) > -1,
                    props = {},
                    curPosition = {},
                    curTop,
                    curLeft;
                  if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left;
                  } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0;
                  }
                  if (camQuery.isFunction(options)) {
                    options = options.call(elem, i, curOffset);
                  }
                  if (options.top != null) {
                    props.top = options.top - curOffset.top + curTop;
                  }
                  if (options.left != null) {
                    props.left = options.left - curOffset.left + curLeft;
                  }
                  if ('using' in options) {
                    options.using.call(elem, props);
                  } else {
                    curElem.css(props);
                  }
                },
              };
              camQuery.fn.extend({
                position: function () {
                  if (!this[0]) {
                    return;
                  }
                  var elem = this[0],
                    offsetParent = this.offsetParent(),
                    offset = this.offset(),
                    parentOffset = rroot.test(offsetParent[0].nodeName)
                      ? { top: 0, left: 0 }
                      : offsetParent.offset();
                  offset.top -= parseFloat(camQuery.css(elem, 'marginTop')) || 0;
                  offset.left -= parseFloat(camQuery.css(elem, 'marginLeft')) || 0;
                  parentOffset.top +=
                    parseFloat(camQuery.css(offsetParent[0], 'borderTopWidth')) || 0;
                  parentOffset.left +=
                    parseFloat(camQuery.css(offsetParent[0], 'borderLeftWidth')) || 0;
                  return {
                    top: offset.top - parentOffset.top,
                    left: offset.left - parentOffset.left,
                  };
                },
                offsetParent: function () {
                  return this.map(function () {
                    var offsetParent = this.offsetParent || document.body;
                    while (
                      offsetParent &&
                      !rroot.test(offsetParent.nodeName) &&
                      camQuery.css(offsetParent, 'position') === 'static'
                    ) {
                      offsetParent = offsetParent.offsetParent;
                    }
                    return offsetParent || document.body;
                  });
                },
              });
              camQuery.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (
                method,
                prop
              ) {
                var top = /Y/.test(prop);
                camQuery.fn[method] = function (val) {
                  return camQuery.access(
                    this,
                    function (elem, method, val) {
                      var win = getWindow(elem);
                      if (val === undefined) {
                        return win
                          ? prop in win
                            ? win[prop]
                            : win.document.documentElement[method]
                          : elem[method];
                      }
                      if (win) {
                        win.scrollTo(
                          !top ? val : camQuery(win).scrollLeft(),
                          top ? val : camQuery(win).scrollTop()
                        );
                      } else {
                        elem[method] = val;
                      }
                    },
                    method,
                    val,
                    arguments.length,
                    null
                  );
                };
              });
              function getWindow (elem) {
                return camQuery.isWindow(elem)
                  ? elem
                  : elem.nodeType === 9
                  ? elem.defaultView || elem.parentWindow
                  : false;
              }
              camQuery.each({ Height: 'height', Width: 'width' }, function (name, type) {
                camQuery.each(
                  { padding: 'inner' + name, content: type, '': 'outer' + name },
                  function (defaultExtra, funcName) {
                    camQuery.fn[funcName] = function (margin, value) {
                      var chainable =
                          arguments.length && (defaultExtra || typeof margin !== 'boolean'),
                        extra =
                          defaultExtra ||
                          (margin === true || value === true ? 'margin' : 'border');
                      return camQuery.access(
                        this,
                        function (elem, type, value) {
                          var doc;
                          if (camQuery.isWindow(elem)) {
                            return elem.document.documentElement['client' + name];
                          }
                          if (elem.nodeType === 9) {
                            doc = elem.documentElement;
                            return Math.max(
                              elem.body['scroll' + name],
                              doc['scroll' + name],
                              elem.body['offset' + name],
                              doc['offset' + name],
                              doc['client' + name]
                            );
                          }
                          return value === undefined
                            ? camQuery.css(elem, type, value, extra)
                            : camQuery.style(elem, type, value, extra);
                        },
                        type,
                        chainable ? margin : undefined,
                        chainable,
                        null
                      );
                    };
                  }
                );
              });
              window.camQuery = window.$C = camQuery;
              if (typeof define === 'function' && define.amd && define.amd.camQuery) {
                define('jquery', [], function () {
                  return camQuery;
                });
              }
            })(window);
            (function () {
              var root = this;
              var previousUnderscore = root._;
              var breaker = {};
              var ArrayProto = Array.prototype,
                ObjProto = Object.prototype,
                FuncProto = Function.prototype;
              var push = ArrayProto.push,
                slice = ArrayProto.slice,
                concat = ArrayProto.concat,
                toString = ObjProto.toString,
                hasOwnProperty = ObjProto.hasOwnProperty;
              var nativeForEach = ArrayProto.forEach,
                nativeMap = ArrayProto.map,
                nativeReduce = ArrayProto.reduce,
                nativeReduceRight = ArrayProto.reduceRight,
                nativeFilter = ArrayProto.filter,
                nativeEvery = ArrayProto.every,
                nativeSome = ArrayProto.some,
                nativeIndexOf = ArrayProto.indexOf,
                nativeLastIndexOf = ArrayProto.lastIndexOf,
                nativeIsArray = Array.isArray,
                nativeKeys = Object.keys,
                nativeBind = FuncProto.bind;
              var _ = function (obj) {
                if (obj instanceof _) {
                  return obj;
                }
                if (!(this instanceof _)) {
                  return new _(obj);
                }
                this._wrapped = obj;
              };
              if (typeof exports !== 'undefined') {
                if (typeof module !== 'undefined' && module.exports) {
                  exports = module.exports = _;
                }
                exports._ = _;
              } else {
                root._ = _;
              }
              _.VERSION = '1.6.0';
              var each = (_.each = _.forEach = function (obj, iterator, context) {
                if (obj == null) {
                  return obj;
                }
                if (nativeForEach && obj.forEach === nativeForEach) {
                  obj.forEach(iterator, context);
                } else {
                  if (obj.length === +obj.length) {
                    for (var i = 0, length = obj.length; i < length; i++) {
                      if (iterator.call(context, obj[i], i, obj) === breaker) {
                        return;
                      }
                    }
                  } else {
                    var keys = _.keys(obj);
                    for (var i = 0, length = keys.length; i < length; i++) {
                      if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) {
                        return;
                      }
                    }
                  }
                }
                return obj;
              });
              _.map = _.collect = function (obj, iterator, context) {
                var results = [];
                if (obj == null) {
                  return results;
                }
                if (nativeMap && obj.map === nativeMap) {
                  return obj.map(iterator, context);
                }
                each(obj, function (value, index, list) {
                  results.push(iterator.call(context, value, index, list));
                });
                return results;
              };
              var reduceError = 'Reduce of empty array with no initial value';
              _.reduce = _.foldl = _.inject = function (obj, iterator, memo, context) {
                var initial = arguments.length > 2;
                if (obj == null) {
                  obj = [];
                }
                if (nativeReduce && obj.reduce === nativeReduce) {
                  if (context) {
                    iterator = _.bind(iterator, context);
                  }
                  return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
                }
                each(obj, function (value, index, list) {
                  if (!initial) {
                    memo = value;
                    initial = true;
                  } else {
                    memo = iterator.call(context, memo, value, index, list);
                  }
                });
                if (!initial) {
                  throw new TypeError(reduceError);
                }
                return memo;
              };
              _.reduceRight = _.foldr = function (obj, iterator, memo, context) {
                var initial = arguments.length > 2;
                if (obj == null) {
                  obj = [];
                }
                if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
                  if (context) {
                    iterator = _.bind(iterator, context);
                  }
                  return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
                }
                var length = obj.length;
                if (length !== +length) {
                  var keys = _.keys(obj);
                  length = keys.length;
                }
                each(obj, function (value, index, list) {
                  index = keys ? keys[--length] : --length;
                  if (!initial) {
                    memo = obj[index];
                    initial = true;
                  } else {
                    memo = iterator.call(context, memo, obj[index], index, list);
                  }
                });
                if (!initial) {
                  throw new TypeError(reduceError);
                }
                return memo;
              };
              _.find = _.detect = function (obj, predicate, context) {
                var result;
                any(obj, function (value, index, list) {
                  if (predicate.call(context, value, index, list)) {
                    result = value;
                    return true;
                  }
                });
                return result;
              };
              _.filter = _.select = function (obj, predicate, context) {
                var results = [];
                if (obj == null) {
                  return results;
                }
                if (nativeFilter && obj.filter === nativeFilter) {
                  return obj.filter(predicate, context);
                }
                each(obj, function (value, index, list) {
                  if (predicate.call(context, value, index, list)) {
                    results.push(value);
                  }
                });
                return results;
              };
              _.reject = function (obj, predicate, context) {
                return _.filter(
                  obj,
                  function (value, index, list) {
                    return !predicate.call(context, value, index, list);
                  },
                  context
                );
              };
              _.every = _.all = function (obj, predicate, context) {
                predicate || (predicate = _.identity);
                var result = true;
                if (obj == null) {
                  return result;
                }
                if (nativeEvery && obj.every === nativeEvery) {
                  return obj.every(predicate, context);
                }
                each(obj, function (value, index, list) {
                  if (!(result = result && predicate.call(context, value, index, list))) {
                    return breaker;
                  }
                });
                return !!result;
              };
              var any = (_.some = _.any = function (obj, predicate, context) {
                predicate || (predicate = _.identity);
                var result = false;
                if (obj == null) {
                  return result;
                }
                if (nativeSome && obj.some === nativeSome) {
                  return obj.some(predicate, context);
                }
                each(obj, function (value, index, list) {
                  if (result || (result = predicate.call(context, value, index, list))) {
                    return breaker;
                  }
                });
                return !!result;
              });
              _.contains = _.include = function (obj, target) {
                if (obj == null) {
                  return false;
                }
                if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
                  return obj.indexOf(target) != -1;
                }
                return any(obj, function (value) {
                  return value === target;
                });
              };
              _.invoke = function (obj, method) {
                var args = slice.call(arguments, 2);
                var isFunc = _.isFunction(method);
                return _.map(obj, function (value) {
                  return (isFunc ? method : value[method]).apply(value, args);
                });
              };
              _.pluck = function (obj, key) {
                return _.map(obj, _.property(key));
              };
              _.where = function (obj, attrs) {
                return _.filter(obj, _.matches(attrs));
              };
              _.findWhere = function (obj, attrs) {
                return _.find(obj, _.matches(attrs));
              };
              _.max = function (obj, iterator, context) {
                if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
                  return Math.max.apply(Math, obj);
                }
                var result = -Infinity,
                  lastComputed = -Infinity;
                each(obj, function (value, index, list) {
                  var computed = iterator ? iterator.call(context, value, index, list) : value;
                  if (computed > lastComputed) {
                    result = value;
                    lastComputed = computed;
                  }
                });
                return result;
              };
              _.min = function (obj, iterator, context) {
                if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
                  return Math.min.apply(Math, obj);
                }
                var result = Infinity,
                  lastComputed = Infinity;
                each(obj, function (value, index, list) {
                  var computed = iterator ? iterator.call(context, value, index, list) : value;
                  if (computed < lastComputed) {
                    result = value;
                    lastComputed = computed;
                  }
                });
                return result;
              };
              _.shuffle = function (obj) {
                var rand;
                var index = 0;
                var shuffled = [];
                each(obj, function (value) {
                  rand = _.random(index++);
                  shuffled[index - 1] = shuffled[rand];
                  shuffled[rand] = value;
                });
                return shuffled;
              };
              _.sample = function (obj, n, guard) {
                if (n == null || guard) {
                  if (obj.length !== +obj.length) {
                    obj = _.values(obj);
                  }
                  return obj[_.random(obj.length - 1)];
                }
                return _.shuffle(obj).slice(0, Math.max(0, n));
              };
              var lookupIterator = function (value) {
                if (value == null) {
                  return _.identity;
                }
                if (_.isFunction(value)) {
                  return value;
                }
                return _.property(value);
              };
              _.sortBy = function (obj, iterator, context) {
                iterator = lookupIterator(iterator);
                return _.pluck(
                  _.map(obj, function (value, index, list) {
                    return {
                      value: value,
                      index: index,
                      criteria: iterator.call(context, value, index, list),
                    };
                  }).sort(function (left, right) {
                    var a = left.criteria;
                    var b = right.criteria;
                    if (a !== b) {
                      if (a > b || a === void 0) {
                        return 1;
                      }
                      if (a < b || b === void 0) {
                        return -1;
                      }
                    }
                    return left.index - right.index;
                  }),
                  'value'
                );
              };
              var group = function (behavior) {
                return function (obj, iterator, context) {
                  var result = {};
                  iterator = lookupIterator(iterator);
                  each(obj, function (value, index) {
                    var key = iterator.call(context, value, index, obj);
                    behavior(result, key, value);
                  });
                  return result;
                };
              };
              _.groupBy = group(function (result, key, value) {
                _.has(result, key) ? result[key].push(value) : (result[key] = [value]);
              });
              _.indexBy = group(function (result, key, value) {
                result[key] = value;
              });
              _.countBy = group(function (result, key) {
                _.has(result, key) ? result[key]++ : (result[key] = 1);
              });
              _.sortedIndex = function (array, obj, iterator, context) {
                iterator = lookupIterator(iterator);
                var value = iterator.call(context, obj);
                var low = 0,
                  high = array.length;
                while (low < high) {
                  var mid = (low + high) >>> 1;
                  iterator.call(context, array[mid]) < value ? (low = mid + 1) : (high = mid);
                }
                return low;
              };
              _.toArray = function (obj) {
                if (!obj) {
                  return [];
                }
                if (_.isArray(obj)) {
                  return slice.call(obj);
                }
                if (obj.length === +obj.length) {
                  return _.map(obj, _.identity);
                }
                return _.values(obj);
              };
              _.size = function (obj) {
                if (obj == null) {
                  return 0;
                }
                return obj.length === +obj.length ? obj.length : _.keys(obj).length;
              };
              _.first = _.head = _.take = function (array, n, guard) {
                if (array == null) {
                  return void 0;
                }
                if (n == null || guard) {
                  return array[0];
                }
                if (n < 0) {
                  return [];
                }
                return slice.call(array, 0, n);
              };
              _.initial = function (array, n, guard) {
                return slice.call(array, 0, array.length - (n == null || guard ? 1 : n));
              };
              _.last = function (array, n, guard) {
                if (array == null) {
                  return void 0;
                }
                if (n == null || guard) {
                  return array[array.length - 1];
                }
                return slice.call(array, Math.max(array.length - n, 0));
              };
              _.rest = _.tail = _.drop = function (array, n, guard) {
                return slice.call(array, n == null || guard ? 1 : n);
              };
              _.compact = function (array) {
                return _.filter(array, _.identity);
              };
              var flatten = function (input, shallow, output) {
                if (shallow && _.every(input, _.isArray)) {
                  return concat.apply(output, input);
                }
                each(input, function (value) {
                  if (_.isArray(value) || _.isArguments(value)) {
                    shallow ? push.apply(output, value) : flatten(value, shallow, output);
                  } else {
                    output.push(value);
                  }
                });
                return output;
              };
              _.flatten = function (array, shallow) {
                return flatten(array, shallow, []);
              };
              _.without = function (array) {
                return _.difference(array, slice.call(arguments, 1));
              };
              _.partition = function (array, predicate) {
                var pass = [],
                  fail = [];
                each(array, function (elem) {
                  (predicate(elem) ? pass : fail).push(elem);
                });
                return [pass, fail];
              };
              _.uniq = _.unique = function (array, isSorted, iterator, context) {
                if (_.isFunction(isSorted)) {
                  context = iterator;
                  iterator = isSorted;
                  isSorted = false;
                }
                var initial = iterator ? _.map(array, iterator, context) : array;
                var results = [];
                var seen = [];
                each(initial, function (value, index) {
                  if (
                    isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)
                  ) {
                    seen.push(value);
                    results.push(array[index]);
                  }
                });
                return results;
              };
              _.union = function () {
                return _.uniq(_.flatten(arguments, true));
              };
              _.intersection = function (array) {
                var rest = slice.call(arguments, 1);
                return _.filter(_.uniq(array), function (item) {
                  return _.every(rest, function (other) {
                    return _.contains(other, item);
                  });
                });
              };
              _.difference = function (array) {
                var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
                return _.filter(array, function (value) {
                  return !_.contains(rest, value);
                });
              };
              _.zip = function () {
                var length = _.max(_.pluck(arguments, 'length').concat(0));
                var results = new Array(length);
                for (var i = 0; i < length; i++) {
                  results[i] = _.pluck(arguments, '' + i);
                }
                return results;
              };
              _.object = function (list, values) {
                if (list == null) {
                  return {};
                }
                var result = {};
                for (var i = 0, length = list.length; i < length; i++) {
                  if (values) {
                    result[list[i]] = values[i];
                  } else {
                    result[list[i][0]] = list[i][1];
                  }
                }
                return result;
              };
              _.indexOf = function (array, item, isSorted) {
                if (array == null) {
                  return -1;
                }
                var i = 0,
                  length = array.length;
                if (isSorted) {
                  if (typeof isSorted == 'number') {
                    i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
                  } else {
                    i = _.sortedIndex(array, item);
                    return array[i] === item ? i : -1;
                  }
                }
                if (nativeIndexOf && array.indexOf === nativeIndexOf) {
                  return array.indexOf(item, isSorted);
                }
                for (; i < length; i++) {
                  if (array[i] === item) {
                    return i;
                  }
                }
                return -1;
              };
              _.lastIndexOf = function (array, item, from) {
                if (array == null) {
                  return -1;
                }
                var hasIndex = from != null;
                if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
                  return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
                }
                var i = hasIndex ? from : array.length;
                while (i--) {
                  if (array[i] === item) {
                    return i;
                  }
                }
                return -1;
              };
              _.range = function (start, stop, step) {
                if (arguments.length <= 1) {
                  stop = start || 0;
                  start = 0;
                }
                step = arguments[2] || 1;
                var length = Math.max(Math.ceil((stop - start) / step), 0);
                var idx = 0;
                var range = new Array(length);
                while (idx < length) {
                  range[idx++] = start;
                  start += step;
                }
                return range;
              };
              var ctor = function () {};
              _.bind = function (func, context) {
                var args, bound;
                if (nativeBind && func.bind === nativeBind) {
                  return nativeBind.apply(func, slice.call(arguments, 1));
                }
                if (!_.isFunction(func)) {
                  throw new TypeError();
                }
                args = slice.call(arguments, 2);
                return (bound = function () {
                  if (!(this instanceof bound)) {
                    return func.apply(context, args.concat(slice.call(arguments)));
                  }
                  ctor.prototype = func.prototype;
                  var self = new ctor();
                  ctor.prototype = null;
                  var result = func.apply(self, args.concat(slice.call(arguments)));
                  if (Object(result) === result) {
                    return result;
                  }
                  return self;
                });
              };
              _.partial = function (func) {
                var boundArgs = slice.call(arguments, 1);
                return function () {
                  var position = 0;
                  var args = boundArgs.slice();
                  for (var i = 0, length = args.length; i < length; i++) {
                    if (args[i] === _) {
                      args[i] = arguments[position++];
                    }
                  }
                  while (position < arguments.length) {
                    args.push(arguments[position++]);
                  }
                  return func.apply(this, args);
                };
              };
              _.bindAll = function (obj) {
                var funcs = slice.call(arguments, 1);
                if (funcs.length === 0) {
                  throw new Error('bindAll must be passed function names');
                }
                each(funcs, function (f) {
                  obj[f] = _.bind(obj[f], obj);
                });
                return obj;
              };
              _.memoize = function (func, hasher) {
                var memo = {};
                hasher || (hasher = _.identity);
                return function () {
                  var key = hasher.apply(this, arguments);
                  return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
                };
              };
              _.delay = function (func, wait) {
                var args = slice.call(arguments, 2);
                return setTimeout(function () {
                  return func.apply(null, args);
                }, wait);
              };
              _.defer = function (func) {
                return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
              };
              _.throttle = function (func, wait, options) {
                var context, args, result;
                var timeout = null;
                var previous = 0;
                options || (options = {});
                var later = function () {
                  previous = options.leading === false ? 0 : _.now();
                  timeout = null;
                  result = func.apply(context, args);
                  context = args = null;
                };
                return function () {
                  var now = _.now();
                  if (!previous && options.leading === false) {
                    previous = now;
                  }
                  var remaining = wait - (now - previous);
                  context = this;
                  args = arguments;
                  if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                    context = args = null;
                  } else {
                    if (!timeout && options.trailing !== false) {
                      timeout = setTimeout(later, remaining);
                    }
                  }
                  return result;
                };
              };
              _.debounce = function (func, wait, immediate) {
                var timeout, args, context, timestamp, result;
                var later = function () {
                  var last = _.now() - timestamp;
                  if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                  } else {
                    timeout = null;
                    if (!immediate) {
                      result = func.apply(context, args);
                      context = args = null;
                    }
                  }
                };
                return function () {
                  context = this;
                  args = arguments;
                  timestamp = _.now();
                  var callNow = immediate && !timeout;
                  if (!timeout) {
                    timeout = setTimeout(later, wait);
                  }
                  if (callNow) {
                    result = func.apply(context, args);
                    context = args = null;
                  }
                  return result;
                };
              };
              _.once = function (func) {
                var ran = false,
                  memo;
                return function () {
                  if (ran) {
                    return memo;
                  }
                  ran = true;
                  memo = func.apply(this, arguments);
                  func = null;
                  return memo;
                };
              };
              _.wrap = function (func, wrapper) {
                return _.partial(wrapper, func);
              };
              _.compose = function () {
                var funcs = arguments;
                return function () {
                  var args = arguments;
                  for (var i = funcs.length - 1; i >= 0; i--) {
                    args = [funcs[i].apply(this, args)];
                  }
                  return args[0];
                };
              };
              _.after = function (times, func) {
                return function () {
                  if (--times < 1) {
                    return func.apply(this, arguments);
                  }
                };
              };
              _.keys = function (obj) {
                if (!_.isObject(obj)) {
                  return [];
                }
                if (nativeKeys) {
                  var t = nativeKeys(obj);
                  if (t === undefined) {
                    t = [];
                  }
                  return t;
                }
                var keys = [];
                for (var key in obj) {
                  if (_.has(obj, key)) {
                    keys.push(key);
                  }
                }
                return keys;
              };
              _.values = function (obj) {
                var keys = _.keys(obj);
                var length = keys.length;
                var values = new Array(length);
                for (var i = 0; i < length; i++) {
                  values[i] = obj[keys[i]];
                }
                return values;
              };
              _.pairs = function (obj) {
                var keys = _.keys(obj);
                var length = keys.length;
                var pairs = new Array(length);
                for (var i = 0; i < length; i++) {
                  pairs[i] = [keys[i], obj[keys[i]]];
                }
                return pairs;
              };
              _.invert = function (obj) {
                var result = {};
                var keys = _.keys(obj);
                for (var i = 0, length = keys.length; i < length; i++) {
                  result[obj[keys[i]]] = keys[i];
                }
                return result;
              };
              _.functions = _.methods = function (obj) {
                var names = [];
                for (var key in obj) {
                  if (_.isFunction(obj[key])) {
                    names.push(key);
                  }
                }
                return names.sort();
              };
              _.extend = function (obj) {
                each(slice.call(arguments, 1), function (source) {
                  if (source) {
                    for (var prop in source) {
                      obj[prop] = source[prop];
                    }
                  }
                });
                return obj;
              };
              _.pick = function (obj) {
                var copy = {};
                var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
                each(keys, function (key) {
                  if (key in obj) {
                    copy[key] = obj[key];
                  }
                });
                return copy;
              };
              _.omit = function (obj) {
                var copy = {};
                var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
                for (var key in obj) {
                  if (!_.contains(keys, key)) {
                    copy[key] = obj[key];
                  }
                }
                return copy;
              };
              _.defaults = function (obj) {
                each(slice.call(arguments, 1), function (source) {
                  if (source) {
                    for (var prop in source) {
                      if (obj[prop] === void 0) {
                        obj[prop] = source[prop];
                      }
                    }
                  }
                });
                return obj;
              };
              _.clone = function (obj) {
                if (!_.isObject(obj)) {
                  return obj;
                }
                return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
              };
              _.tap = function (obj, interceptor) {
                interceptor(obj);
                return obj;
              };
              var eq = function (a, b, aStack, bStack) {
                if (a === b) {
                  return a !== 0 || 1 / a == 1 / b;
                }
                if (a == null || b == null) {
                  return a === b;
                }
                if (a instanceof _) {
                  a = a._wrapped;
                }
                if (b instanceof _) {
                  b = b._wrapped;
                }
                var className = toString.call(a);
                if (className != toString.call(b)) {
                  return false;
                }
                switch (className) {
                  case '[object String]':
                    return a == String(b);
                  case '[object Number]':
                    return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
                  case '[object Date]':
                  case '[object Boolean]':
                    return +a == +b;
                  case '[object RegExp]':
                    return (
                      a.source == b.source &&
                      a.global == b.global &&
                      a.multiline == b.multiline &&
                      a.ignoreCase == b.ignoreCase
                    );
                }
                if (typeof a != 'object' || typeof b != 'object') {
                  return false;
                }
                var length = aStack.length;
                while (length--) {
                  if (aStack[length] == a) {
                    return bStack[length] == b;
                  }
                }
                var aCtor = a.constructor,
                  bCtor = b.constructor;
                if (
                  aCtor !== bCtor &&
                  !(
                    _.isFunction(aCtor) &&
                    aCtor instanceof aCtor &&
                    _.isFunction(bCtor) &&
                    bCtor instanceof bCtor
                  ) &&
                  'constructor' in a &&
                  'constructor' in b
                ) {
                  return false;
                }
                aStack.push(a);
                bStack.push(b);
                var size = 0,
                  result = true;
                if (className == '[object Array]') {
                  size = a.length;
                  result = size == b.length;
                  if (result) {
                    while (size--) {
                      if (!(result = eq(a[size], b[size], aStack, bStack))) {
                        break;
                      }
                    }
                  }
                } else {
                  for (var key in a) {
                    if (_.has(a, key)) {
                      size++;
                      if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) {
                        break;
                      }
                    }
                  }
                  if (result) {
                    for (key in b) {
                      if (_.has(b, key) && !size--) {
                        break;
                      }
                    }
                    result = !size;
                  }
                }
                aStack.pop();
                bStack.pop();
                return result;
              };
              _.isEqual = function (a, b) {
                return eq(a, b, [], []);
              };
              _.isEmpty = function (obj) {
                if (obj == null) {
                  return true;
                }
                if (_.isArray(obj) || _.isString(obj)) {
                  return obj.length === 0;
                }
                for (var key in obj) {
                  if (_.has(obj, key)) {
                    return false;
                  }
                }
                return true;
              };
              _.isElement = function (obj) {
                return !!(obj && obj.nodeType === 1);
              };
              _.isArray =
                nativeIsArray ||
                function (obj) {
                  return toString.call(obj) == '[object Array]';
                };
              _.isObject = function (obj) {
                return obj === Object(obj);
              };
              each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (
                name
              ) {
                _['is' + name] = function (obj) {
                  return toString.call(obj) == '[object ' + name + ']';
                };
              });
              if (!_.isArguments(arguments)) {
                _.isArguments = function (obj) {
                  return !!(obj && _.has(obj, 'callee'));
                };
              }
              if (typeof /./ !== 'function') {
                _.isFunction = function (obj) {
                  return typeof obj === 'function';
                };
              }
              _.isFinite = function (obj) {
                return isFinite(obj) && !isNaN(parseFloat(obj));
              };
              _.isNaN = function (obj) {
                return _.isNumber(obj) && obj != +obj;
              };
              _.isBoolean = function (obj) {
                return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
              };
              _.isNull = function (obj) {
                return obj === null;
              };
              _.isUndefined = function (obj) {
                return obj === void 0;
              };
              _.has = function (obj, key) {
                return hasOwnProperty.call(obj, key);
              };
              _.noConflict = function () {
                root._ = previousUnderscore;
                return this;
              };
              _.identity = function (value) {
                return value;
              };
              _.constant = function (value) {
                return function () {
                  return value;
                };
              };
              _.property = function (key) {
                return function (obj) {
                  return obj[key];
                };
              };
              _.matches = function (attrs) {
                return function (obj) {
                  if (obj === attrs) {
                    return true;
                  }
                  for (var key in attrs) {
                    if (attrs[key] !== obj[key]) {
                      return false;
                    }
                  }
                  return true;
                };
              };
              _.times = function (n, iterator, context) {
                var accum = Array(Math.max(0, n));
                for (var i = 0; i < n; i++) {
                  accum[i] = iterator.call(context, i);
                }
                return accum;
              };
              _.random = function (min, max) {
                if (max == null) {
                  max = min;
                  min = 0;
                }
                return min + Math.floor(Math.random() * (max - min + 1));
              };
              _.now =
                Date.now ||
                function () {
                  return new Date().getTime();
                };
              var entityMap = {
                escape: { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;' },
              };
              entityMap.unescape = _.invert(entityMap.escape);
              var entityRegexes = {
                escape: new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
                unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g'),
              };
              _.each(['escape', 'unescape'], function (method) {
                _[method] = function (string) {
                  if (string == null) {
                    return '';
                  }
                  return ('' + string).replace(entityRegexes[method], function (match) {
                    return entityMap[method][match];
                  });
                };
              });
              _.result = function (object, property) {
                if (object == null) {
                  return void 0;
                }
                var value = object[property];
                if (_.isFunction(value) && typeof value === 'function') {
                  return value.call(object);
                } else {
                  return value;
                }
              };
              _.mixin = function (obj) {
                each(_.functions(obj), function (name) {
                  var func = (_[name] = obj[name]);
                  _.prototype[name] = function () {
                    var args = [this._wrapped];
                    push.apply(args, arguments);
                    return result.call(this, func.apply(_, args));
                  };
                });
              };
              var idCounter = 0;
              _.uniqueId = function (prefix) {
                var id = ++idCounter + '';
                return prefix ? prefix + id : id;
              };
              _.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g,
              };
              var noMatch = /(.)^/;
              var escapes = {
                "'": "'",
                '\\': '\\',
                '\r': 'r',
                '\n': 'n',
                '\t': 't',
                '\u2028': 'u2028',
                '\u2029': 'u2029',
              };
              var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
              _.template = function (text, data, settings) {
                var render;
                settings = _.defaults({}, settings, _.templateSettings);
                var matcher = new RegExp(
                  [
                    (settings.escape || noMatch).source,
                    (settings.interpolate || noMatch).source,
                    (settings.evaluate || noMatch).source,
                  ].join('|') + '|$',
                  'g'
                );
                var index = 0;
                var source = "__p+='";
                text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
                  source += text.slice(index, offset).replace(escaper, function (match) {
                    return '\\' + escapes[match];
                  });
                  if (escape) {
                    source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
                  }
                  if (interpolate) {
                    source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
                  }
                  if (evaluate) {
                    source += "';\n" + evaluate + "\n__p+='";
                  }
                  index = offset + match.length;
                  return match;
                });
                source += "';\n";
                if (!settings.variable) {
                  source = 'with(obj||{}){\n' + source + '}\n';
                }
                source =
                  "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                  source +
                  'return __p;\n';
                try {
                  render = new Function(settings.variable || 'obj', '_', source);
                } catch (e) {
                  e.source = source;
                  throw e;
                }
                if (data) {
                  return render(data, _);
                }
                var template = function (data) {
                  return render.call(this, data, _);
                };
                template.source =
                  'function(' + (settings.variable || 'obj') + '){\n' + source + '}';
                return template;
              };
              _.chain = function (obj) {
                return _(obj).chain();
              };
              var result = function (obj) {
                return this._chain ? _(obj).chain() : obj;
              };
              _.mixin(_);
              each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (
                name
              ) {
                var method = ArrayProto[name];
                _.prototype[name] = function () {
                  var obj = this._wrapped;
                  method.apply(obj, arguments);
                  if ((name == 'shift' || name == 'splice') && obj.length === 0) {
                    delete obj[0];
                  }
                  return result.call(this, obj);
                };
              });
              each(['concat', 'join', 'slice'], function (name) {
                var method = ArrayProto[name];
                _.prototype[name] = function () {
                  return result.call(this, method.apply(this._wrapped, arguments));
                };
              });
              _.extend(_.prototype, {
                chain: function () {
                  this._chain = true;
                  return this;
                },
                value: function () {
                  return this._wrapped;
                },
              });
              if (typeof define === 'function' && define.amd) {
                define('underscore', [], function () {
                  return _;
                });
              }
            }.call(this));
            (function () {
              var root = this;
              var previousCambone = root.Cambone;
              var array = [];
              var push = array.push;
              var slice = array.slice;
              var splice = array.splice;
              var Cambone;
              if (typeof exports !== 'undefined') {
                Cambone = exports;
              } else {
                Cambone = root.Cambone = {};
              }
              Cambone.VERSION = '1.0.0';
              var _ = root._;
              if (!_ && typeof require !== 'undefined') {
                _ = require('underscore');
              }
              Cambone.$ = root.jQuery || root.Zepto || root.ender || root.$;
              Cambone.noConflict = function () {
                root.Cambone = previousCambone;
                return this;
              };
              Cambone.emulateHTTP = false;
              Cambone.emulateJSON = false;
              var Events = (Cambone.Events = {
                on: function (name, callback, context) {
                  if (!eventsApi(this, 'on', name, [callback, context]) || !callback) {
                    return this;
                  }
                  this._events || (this._events = {});
                  var events = this._events[name] || (this._events[name] = []);
                  events.push({ callback: callback, context: context, ctx: context || this });
                  return this;
                },
                once: function (name, callback, context) {
                  if (!eventsApi(this, 'once', name, [callback, context]) || !callback) {
                    return this;
                  }
                  var self = this;
                  var once = _.once(function () {
                    self.off(name, once);
                    callback.apply(this, arguments);
                  });
                  once._callback = callback;
                  return this.on(name, once, context);
                },
                off: function (name, callback, context) {
                  var retain, ev, events, names, i, l, j, k;
                  if (!this._events || !eventsApi(this, 'off', name, [callback, context])) {
                    return this;
                  }
                  if (!name && !callback && !context) {
                    this._events = {};
                    return this;
                  }
                  names = name ? [name] : _.keys(this._events);
                  for (i = 0, l = names.length; i < l; i++) {
                    name = names[i];
                    if ((events = this._events[name])) {
                      this._events[name] = retain = [];
                      if (callback || context) {
                        for (j = 0, k = events.length; j < k; j++) {
                          ev = events[j];
                          if (
                            (callback &&
                              callback !== ev.callback &&
                              callback !== ev.callback._callback) ||
                            (context && context !== ev.context)
                          ) {
                            retain.push(ev);
                          }
                        }
                      }
                      if (!retain.length) {
                        delete this._events[name];
                      }
                    }
                  }
                  return this;
                },
                trigger: function (name) {
                  if (!this._events) {
                    return this;
                  }
                  var args = slice.call(arguments, 1);
                  if (!eventsApi(this, 'trigger', name, args)) {
                    return this;
                  }
                  var events = this._events[name];
                  var allEvents = this._events.all;
                  if (events) {
                    triggerEvents(events, args);
                  }
                  if (allEvents) {
                    triggerEvents(allEvents, arguments);
                  }
                  return this;
                },
                stopListening: function (obj, name, callback) {
                  var listeners = this._listeners;
                  if (!listeners) {
                    return this;
                  }
                  var deleteListener = !name && !callback;
                  if (typeof name === 'object') {
                    callback = this;
                  }
                  if (obj) {
                    (listeners = {})[obj._listenerId] = obj;
                  }
                  for (var id in listeners) {
                    listeners[id].off(name, callback, this);
                    if (deleteListener) {
                      delete this._listeners[id];
                    }
                  }
                  return this;
                },
              });
              var eventSplitter = /\s+/;
              var eventsApi = function (obj, action, name, rest) {
                if (!name) {
                  return true;
                }
                if (typeof name === 'object') {
                  for (var key in name) {
                    obj[action].apply(obj, [key, name[key]].concat(rest));
                  }
                  return false;
                }
                if (eventSplitter.test(name)) {
                  var names = name.split(eventSplitter);
                  for (var i = 0, l = names.length; i < l; i++) {
                    obj[action].apply(obj, [names[i]].concat(rest));
                  }
                  return false;
                }
                return true;
              };
              var triggerEvents = function (events, args) {
                var ev,
                  i = -1,
                  l = events.length,
                  a1 = args[0],
                  a2 = args[1],
                  a3 = args[2];
                switch (args.length) {
                  case 0:
                    while (++i < l) {
                      (ev = events[i]).callback.call(ev.ctx);
                    }
                    return;
                  case 1:
                    while (++i < l) {
                      (ev = events[i]).callback.call(ev.ctx, a1);
                    }
                    return;
                  case 2:
                    while (++i < l) {
                      (ev = events[i]).callback.call(ev.ctx, a1, a2);
                    }
                    return;
                  case 3:
                    while (++i < l) {
                      (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                    }
                    return;
                  default:
                    while (++i < l) {
                      (ev = events[i]).callback.apply(ev.ctx, args);
                    }
                }
              };
              var listenMethods = { listenTo: 'on', listenToOnce: 'once' };
              _.each(listenMethods, function (implementation, method) {
                Events[method] = function (obj, name, callback) {
                  var listeners = this._listeners || (this._listeners = {});
                  var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
                  listeners[id] = obj;
                  if (typeof name === 'object') {
                    callback = this;
                  }
                  obj[implementation](name, callback, this);
                  return this;
                };
              });
              Events.bind = Events.on;
              Events.unbind = Events.off;
              _.extend(Cambone, Events);
              var Model = (Cambone.Model = function (attributes, options) {
                var defaults;
                var attrs = attributes || {};
                options || (options = {});
                this.cid = _.uniqueId('c');
                this.attributes = {};
                _.extend(this, _.pick(options, modelOptions));
                if (options.parse) {
                  attrs = this.parse(attrs, options) || {};
                }
                if ((defaults = _.result(this, 'defaults'))) {
                  attrs = _.defaults({}, attrs, defaults);
                }
                this.set(attrs, options);
                this.changed = {};
                this.initialize.apply(this, arguments);
              });
              var modelOptions = ['url', 'urlRoot', 'collection'];
              _.extend(Model.prototype, Events, {
                changed: null,
                validationError: null,
                idAttribute: 'id',
                initialize: function () {},
                toJSON: function (options) {
                  return _.clone(this.attributes);
                },
                sync: function () {
                  return Cambone.sync.apply(this, arguments);
                },
                get: function (attr) {
                  return this.attributes[attr];
                },
                escape: function (attr) {
                  return _.escape(this.get(attr));
                },
                has: function (attr) {
                  return this.get(attr) != null;
                },
                set: function (key, val, options) {
                  var attr, attrs, unset, changes, silent, changing, prev, current;
                  if (key == null) {
                    return this;
                  }
                  if (typeof key === 'object') {
                    attrs = key;
                    options = val;
                  } else {
                    (attrs = {})[key] = val;
                  }
                  options || (options = {});
                  if (!this._validate(attrs, options)) {
                    return false;
                  }
                  unset = options.unset;
                  silent = options.silent;
                  changes = [];
                  changing = this._changing;
                  this._changing = true;
                  if (!changing) {
                    this._previousAttributes = _.clone(this.attributes);
                    this.changed = {};
                  }
                  (current = this.attributes), (prev = this._previousAttributes);
                  if (this.idAttribute in attrs) {
                    this.id = attrs[this.idAttribute];
                  }
                  for (attr in attrs) {
                    val = attrs[attr];
                    if (!_.isEqual(current[attr], val)) {
                      changes.push(attr);
                    }
                    if (!_.isEqual(prev[attr], val)) {
                      this.changed[attr] = val;
                    } else {
                      delete this.changed[attr];
                    }
                    unset ? delete current[attr] : (current[attr] = val);
                  }
                  if (!silent) {
                    if (changes.length) {
                      this._pending = true;
                    }
                    for (var i = 0, l = changes.length; i < l; i++) {
                      this.trigger('change:' + changes[i], this, current[changes[i]], options);
                    }
                  }
                  if (changing) {
                    return this;
                  }
                  if (!silent) {
                    while (this._pending) {
                      this._pending = false;
                      this.trigger('change', this, options);
                    }
                  }
                  this._pending = false;
                  this._changing = false;
                  return this;
                },
                unset: function (attr, options) {
                  return this.set(attr, void 0, _.extend({}, options, { unset: true }));
                },
                clear: function (options) {
                  var attrs = {};
                  for (var key in this.attributes) {
                    attrs[key] = void 0;
                  }
                  return this.set(attrs, _.extend({}, options, { unset: true }));
                },
                hasChanged: function (attr) {
                  if (attr == null) {
                    return !_.isEmpty(this.changed);
                  }
                  return _.has(this.changed, attr);
                },
                changedAttributes: function (diff) {
                  if (!diff) {
                    return this.hasChanged() ? _.clone(this.changed) : false;
                  }
                  var val,
                    changed = false;
                  var old = this._changing ? this._previousAttributes : this.attributes;
                  for (var attr in diff) {
                    if (_.isEqual(old[attr], (val = diff[attr]))) {
                      continue;
                    }
                    (changed || (changed = {}))[attr] = val;
                  }
                  return changed;
                },
                previous: function (attr) {
                  if (attr == null || !this._previousAttributes) {
                    return null;
                  }
                  return this._previousAttributes[attr];
                },
                previousAttributes: function () {
                  return _.clone(this._previousAttributes);
                },
                fetch: function (options) {
                  options = options ? _.clone(options) : {};
                  if (options.parse === void 0) {
                    options.parse = true;
                  }
                  var model = this;
                  var success = options.success;
                  options.success = function (resp) {
                    if (!model.set(model.parse(resp, options), options)) {
                      return false;
                    }
                    if (success) {
                      success(model, resp, options);
                    }
                    model.trigger('sync', model, resp, options);
                  };
                  wrapError(this, options);
                  return this.sync('read', this, options);
                },
                save: function (key, val, options) {
                  var attrs,
                    method,
                    xhr,
                    attributes = this.attributes;
                  if (key == null || typeof key === 'object') {
                    attrs = key;
                    options = val;
                  } else {
                    (attrs = {})[key] = val;
                  }
                  if (attrs && (!options || !options.wait) && !this.set(attrs, options)) {
                    return false;
                  }
                  options = _.extend({ validate: true }, options);
                  if (!this._validate(attrs, options)) {
                    return false;
                  }
                  if (attrs && options.wait) {
                    this.attributes = _.extend({}, attributes, attrs);
                  }
                  if (options.parse === void 0) {
                    options.parse = true;
                  }
                  var model = this;
                  var success = options.success;
                  options.success = function (resp) {
                    model.attributes = attributes;
                    var serverAttrs = model.parse(resp, options);
                    if (options.wait) {
                      serverAttrs = _.extend(attrs || {}, serverAttrs);
                    }
                    if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
                      return false;
                    }
                    if (success) {
                      success(model, resp, options);
                    }
                    model.trigger('sync', model, resp, options);
                  };
                  wrapError(this, options);
                  method = this.isNew() ? 'create' : options.patch ? 'patch' : 'update';
                  if (method === 'patch') {
                    options.attrs = attrs;
                  }
                  xhr = this.sync(method, this, options);
                  if (attrs && options.wait) {
                    this.attributes = attributes;
                  }
                  return xhr;
                },
                destroy: function (options) {
                  options = options ? _.clone(options) : {};
                  var model = this;
                  var success = options.success;
                  var destroy = function () {
                    model.trigger('destroy', model, model.collection, options);
                  };
                  options.success = function (resp) {
                    if (options.wait || model.isNew()) {
                      destroy();
                    }
                    if (success) {
                      success(model, resp, options);
                    }
                    if (!model.isNew()) {
                      model.trigger('sync', model, resp, options);
                    }
                  };
                  if (this.isNew()) {
                    options.success();
                    return false;
                  }
                  wrapError(this, options);
                  var xhr = this.sync('delete', this, options);
                  if (!options.wait) {
                    destroy();
                  }
                  return xhr;
                },
                url: function () {
                  var base =
                    _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
                  if (this.isNew()) {
                    return base;
                  }
                  return (
                    base +
                    (base.charAt(base.length - 1) === '/' ? '' : '/') +
                    encodeURIComponent(this.id)
                  );
                },
                parse: function (resp, options) {
                  return resp;
                },
                clone: function () {
                  return new this.constructor(this.attributes);
                },
                isNew: function () {
                  return this.id == null;
                },
                isValid: function (options) {
                  return this._validate({}, _.extend(options || {}, { validate: true }));
                },
                _validate: function (attrs, options) {
                  if (!options.validate || !this.validate) {
                    return true;
                  }
                  attrs = _.extend({}, this.attributes, attrs);
                  var error = (this.validationError = this.validate(attrs, options) || null);
                  if (!error) {
                    return true;
                  }
                  this.trigger(
                    'invalid',
                    this,
                    error,
                    _.extend(options || {}, { validationError: error })
                  );
                  return false;
                },
              });
              var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];
              _.each(modelMethods, function (method) {
                Model.prototype[method] = function () {
                  var args = slice.call(arguments);
                  args.unshift(this.attributes);
                  return _[method].apply(_, args);
                };
              });
              var Collection = (Cambone.Collection = function (models, options) {
                options || (options = {});
                if (options.url) {
                  this.url = options.url;
                }
                if (options.model) {
                  this.model = options.model;
                }
                if (options.comparator !== void 0) {
                  this.comparator = options.comparator;
                }
                this._reset();
                this.initialize.apply(this, arguments);
                if (models) {
                  this.reset(models, _.extend({ silent: true }, options));
                }
              });
              var setOptions = { add: true, remove: true, merge: true };
              var addOptions = { add: true, merge: false, remove: false };
              _.extend(Collection.prototype, Events, {
                model: Model,
                initialize: function () {},
                toJSON: function (options) {
                  return this.map(function (model) {
                    return model.toJSON(options);
                  });
                },
                sync: function () {
                  return Cambone.sync.apply(this, arguments);
                },
                add: function (models, options) {
                  return this.set(models, _.defaults(options || {}, addOptions));
                },
                remove: function (models, options) {
                  models = _.isArray(models) ? models.slice() : [models];
                  options || (options = {});
                  var i, l, index, model;
                  for (i = 0, l = models.length; i < l; i++) {
                    model = this.get(models[i]);
                    if (!model) {
                      continue;
                    }
                    delete this._byId[model.id];
                    delete this._byId[model.cid];
                    index = this.indexOf(model);
                    this.models.splice(index, 1);
                    this.length--;
                    if (!options.silent) {
                      options.index = index;
                      model.trigger('remove', model, this, options);
                    }
                    this._removeReference(model);
                  }
                  return this;
                },
                set: function (models, options) {
                  options = _.defaults(options || {}, setOptions);
                  if (options.parse) {
                    models = this.parse(models, options);
                  }
                  if (!_.isArray(models)) {
                    models = models ? [models] : [];
                  }
                  var i, l, model, attrs, existing, sort;
                  var at = options.at;
                  var sortable = this.comparator && at == null && options.sort !== false;
                  var sortAttr = _.isString(this.comparator) ? this.comparator : null;
                  var toAdd = [],
                    toRemove = [],
                    modelMap = {};
                  for (i = 0, l = models.length; i < l; i++) {
                    if (!(model = this._prepareModel(models[i], options))) {
                      continue;
                    }
                    if ((existing = this.get(model))) {
                      if (options.remove) {
                        modelMap[existing.cid] = true;
                      }
                      if (options.merge) {
                        existing.set(model.attributes, options);
                        if (sortable && !sort && existing.hasChanged(sortAttr)) {
                          sort = true;
                        }
                      }
                    } else {
                      if (options.add) {
                        toAdd.push(model);
                        model.on('all', this._onModelEvent, this);
                        this._byId[model.cid] = model;
                        if (model.id != null) {
                          this._byId[model.id] = model;
                        }
                      }
                    }
                  }
                  if (options.remove) {
                    for (i = 0, l = this.length; i < l; ++i) {
                      if (!modelMap[(model = this.models[i]).cid]) {
                        toRemove.push(model);
                      }
                    }
                    if (toRemove.length) {
                      this.remove(toRemove, options);
                    }
                  }
                  if (toAdd.length) {
                    if (sortable) {
                      sort = true;
                    }
                    this.length += toAdd.length;
                    if (at != null) {
                      splice.apply(this.models, [at, 0].concat(toAdd));
                    } else {
                      push.apply(this.models, toAdd);
                    }
                  }
                  if (sort) {
                    this.sort({ silent: true });
                  }
                  if (options.silent) {
                    return this;
                  }
                  for (i = 0, l = toAdd.length; i < l; i++) {
                    (model = toAdd[i]).trigger('add', model, this, options);
                  }
                  if (sort) {
                    this.trigger('sort', this, options);
                  }
                  return this;
                },
                reset: function (models, options) {
                  options || (options = {});
                  for (var i = 0, l = this.models.length; i < l; i++) {
                    this._removeReference(this.models[i]);
                  }
                  options.previousModels = this.models;
                  this._reset();
                  this.add(models, _.extend({ silent: true }, options));
                  if (!options.silent) {
                    this.trigger('reset', this, options);
                  }
                  return this;
                },
                push: function (model, options) {
                  model = this._prepareModel(model, options);
                  this.add(model, _.extend({ at: this.length }, options));
                  return model;
                },
                pop: function (options) {
                  var model = this.at(this.length - 1);
                  this.remove(model, options);
                  return model;
                },
                unshift: function (model, options) {
                  model = this._prepareModel(model, options);
                  this.add(model, _.extend({ at: 0 }, options));
                  return model;
                },
                shift: function (options) {
                  var model = this.at(0);
                  this.remove(model, options);
                  return model;
                },
                slice: function (begin, end) {
                  return this.models.slice(begin, end);
                },
                get: function (obj) {
                  if (obj == null) {
                    return void 0;
                  }
                  return this._byId[obj.id != null ? obj.id : obj.cid || obj];
                },
                at: function (index) {
                  return this.models[index];
                },
                where: function (attrs, first) {
                  if (_.isEmpty(attrs)) {
                    return first ? void 0 : [];
                  }
                  return this[first ? 'find' : 'filter'](function (model) {
                    for (var key in attrs) {
                      if (attrs[key] !== model.get(key)) {
                        return false;
                      }
                    }
                    return true;
                  });
                },
                findWhere: function (attrs) {
                  return this.where(attrs, true);
                },
                sort: function (options) {
                  if (!this.comparator) {
                    throw new Error('Cannot sort a set without a comparator');
                  }
                  options || (options = {});
                  if (_.isString(this.comparator) || this.comparator.length === 1) {
                    this.models = this.sortBy(this.comparator, this);
                  } else {
                    this.models.sort(_.bind(this.comparator, this));
                  }
                  if (!options.silent) {
                    this.trigger('sort', this, options);
                  }
                  return this;
                },
                sortedIndex: function (model, value, context) {
                  value || (value = this.comparator);
                  var iterator = _.isFunction(value)
                    ? value
                    : function (model) {
                        return model.get(value);
                      };
                  return _.sortedIndex(this.models, model, iterator, context);
                },
                pluck: function (attr) {
                  return _.invoke(this.models, 'get', attr);
                },
                fetch: function (options) {
                  options = options ? _.clone(options) : {};
                  if (options.parse === void 0) {
                    options.parse = true;
                  }
                  var success = options.success;
                  var collection = this;
                  options.success = function (resp) {
                    var method = options.reset ? 'reset' : 'set';
                    collection[method](resp, options);
                    if (success) {
                      success(collection, resp, options);
                    }
                    collection.trigger('sync', collection, resp, options);
                  };
                  wrapError(this, options);
                  return this.sync('read', this, options);
                },
                create: function (model, options) {
                  options = options ? _.clone(options) : {};
                  if (!(model = this._prepareModel(model, options))) {
                    return false;
                  }
                  if (!options.wait) {
                    this.add(model, options);
                  }
                  var collection = this;
                  var success = options.success;
                  options.success = function (resp) {
                    if (options.wait) {
                      collection.add(model, options);
                    }
                    if (success) {
                      success(model, resp, options);
                    }
                  };
                  model.save(null, options);
                  return model;
                },
                parse: function (resp, options) {
                  return resp;
                },
                clone: function () {
                  return new this.constructor(this.models);
                },
                _reset: function () {
                  this.length = 0;
                  this.models = [];
                  this._byId = {};
                },
                _prepareModel: function (attrs, options) {
                  if (attrs instanceof Model) {
                    if (!attrs.collection) {
                      attrs.collection = this;
                    }
                    return attrs;
                  }
                  options || (options = {});
                  options.collection = this;
                  var model = new this.model(attrs, options);
                  if (!model._validate(attrs, options)) {
                    this.trigger('invalid', this, attrs, options);
                    return false;
                  }
                  return model;
                },
                _removeReference: function (model) {
                  if (this === model.collection) {
                    delete model.collection;
                  }
                  model.off('all', this._onModelEvent, this);
                },
                _onModelEvent: function (event, model, collection, options) {
                  if ((event === 'add' || event === 'remove') && collection !== this) {
                    return;
                  }
                  if (event === 'destroy') {
                    this.remove(model, options);
                  }
                  if (model && event === 'change:' + model.idAttribute) {
                    delete this._byId[model.previous(model.idAttribute)];
                    if (model.id != null) {
                      this._byId[model.id] = model;
                    }
                  }
                  this.trigger.apply(this, arguments);
                },
              });
              var methods = [
                'forEach',
                'each',
                'map',
                'collect',
                'reduce',
                'foldl',
                'inject',
                'reduceRight',
                'foldr',
                'find',
                'detect',
                'filter',
                'select',
                'reject',
                'every',
                'all',
                'some',
                'any',
                'include',
                'contains',
                'invoke',
                'max',
                'min',
                'toArray',
                'size',
                'first',
                'head',
                'take',
                'initial',
                'rest',
                'tail',
                'drop',
                'last',
                'without',
                'indexOf',
                'shuffle',
                'lastIndexOf',
                'isEmpty',
                'chain',
              ];
              _.each(methods, function (method) {
                Collection.prototype[method] = function () {
                  var args = slice.call(arguments);
                  args.unshift(this.models);
                  return _[method].apply(_, args);
                };
              });
              var attributeMethods = ['groupBy', 'countBy', 'sortBy'];
              _.each(attributeMethods, function (method) {
                Collection.prototype[method] = function (value, context) {
                  var iterator = _.isFunction(value)
                    ? value
                    : function (model) {
                        return model.get(value);
                      };
                  return _[method](this.models, iterator, context);
                };
              });
              var View = (Cambone.View = function (options) {
                this.cid = _.uniqueId('view');
                this._configure(options || {});
                this._ensureElement();
                this.initialize.apply(this, arguments);
                this.delegateEvents();
              });
              var delegateEventSplitter = /^(\S+)\s*(.*)$/;
              var viewOptions = [
                'model',
                'collection',
                'el',
                'id',
                'attributes',
                'className',
                'tagName',
                'events',
              ];
              _.extend(View.prototype, Events, {
                tagName: 'div',
                $: function (selector) {
                  return this.$el.find(selector);
                },
                initialize: function () {},
                render: function () {
                  return this;
                },
                remove: function () {
                  this.$el.remove();
                  this.stopListening();
                  return this;
                },
                setElement: function (element, delegate) {
                  if (this.$el) {
                    this.undelegateEvents();
                  }
                  this.$el = element instanceof Cambone.$ ? element : Cambone.$(element);
                  this.el = this.$el[0];
                  if (delegate !== false) {
                    this.delegateEvents();
                  }
                  return this;
                },
                delegateEvents: function (events) {
                  if (!(events || (events = _.result(this, 'events')))) {
                    return this;
                  }
                  this.undelegateEvents();
                  for (var key in events) {
                    var method = events[key];
                    if (!_.isFunction(method)) {
                      method = this[events[key]];
                    }
                    if (!method) {
                      continue;
                    }
                    var match = key.match(delegateEventSplitter);
                    var eventName = match[1],
                      selector = match[2];
                    method = _.bind(method, this);
                    eventName += '.delegateEvents' + this.cid;
                    if (selector === '') {
                      this.$el.on(eventName, method);
                    } else {
                      this.$el.on(eventName, selector, method);
                    }
                  }
                  return this;
                },
                undelegateEvents: function () {
                  this.$el.off('.delegateEvents' + this.cid);
                  return this;
                },
                _configure: function (options) {
                  if (this.options) {
                    options = _.extend({}, _.result(this, 'options'), options);
                  }
                  _.extend(this, _.pick(options, viewOptions));
                  this.options = options;
                },
                _ensureElement: function () {
                  if (!this.el) {
                    var attrs = _.extend({}, _.result(this, 'attributes'));
                    if (this.id) {
                      attrs.id = _.result(this, 'id');
                    }
                    if (this.className) {
                      attrs['class'] = _.result(this, 'className');
                    }
                    var $el = Cambone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
                    this.setElement($el, false);
                  } else {
                    this.setElement(_.result(this, 'el'), false);
                  }
                },
              });
              Cambone.sync = function (method, model, options) {
                var type = methodMap[method];
                _.defaults(options || (options = {}), {
                  emulateHTTP: Cambone.emulateHTTP,
                  emulateJSON: Cambone.emulateJSON,
                });
                var params = { type: type, dataType: 'json' };
                if (!options.url) {
                  params.url = _.result(model, 'url') || urlError();
                }
                if (
                  options.data == null &&
                  model &&
                  (method === 'create' || method === 'update' || method === 'patch')
                ) {
                  params.contentType = 'application/json';
                  params.data = JSON.stringify(options.attrs || model.toJSON(options));
                }
                if (options.emulateJSON) {
                  params.contentType = 'application/x-www-form-urlencoded';
                  params.data = params.data ? { model: params.data } : {};
                }
                if (
                  options.emulateHTTP &&
                  (type === 'PUT' || type === 'DELETE' || type === 'PATCH')
                ) {
                  params.type = 'POST';
                  if (options.emulateJSON) {
                    params.data._method = type;
                  }
                  var beforeSend = options.beforeSend;
                  options.beforeSend = function (xhr) {
                    xhr.setRequestHeader('X-HTTP-Method-Override', type);
                    if (beforeSend) {
                      return beforeSend.apply(this, arguments);
                    }
                  };
                }
                if (params.type !== 'GET' && !options.emulateJSON) {
                  params.processData = false;
                }
                if (
                  params.type === 'PATCH' &&
                  window.ActiveXObject &&
                  !(window.external && window.external.msActiveXFilteringEnabled)
                ) {
                  params.xhr = function () {
                    return new ActiveXObject('Microsoft.XMLHTTP');
                  };
                }
                var xhr = (options.xhr = Cambone.ajax(_.extend(params, options)));
                model.trigger('request', model, xhr, options);
                return xhr;
              };
              var methodMap = {
                create: 'POST',
                update: 'PUT',
                patch: 'PATCH',
                delete: 'DELETE',
                read: 'GET',
              };
              Cambone.ajax = function () {
                return Cambone.$.ajax.apply(Cambone.$, arguments);
              };
              var Router = (Cambone.Router = function (options) {
                options || (options = {});
                if (options.routes) {
                  this.routes = options.routes;
                }
                this._bindRoutes();
                this.initialize.apply(this, arguments);
              });
              var optionalParam = /\((.*?)\)/g;
              var namedParam = /(\(\?)?:\w+/g;
              var splatParam = /\*\w+/g;
              var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
              _.extend(Router.prototype, Events, {
                initialize: function () {},
                route: function (route, name, callback) {
                  if (!_.isRegExp(route)) {
                    route = this._routeToRegExp(route);
                  }
                  if (_.isFunction(name)) {
                    callback = name;
                    name = '';
                  }
                  if (!callback) {
                    callback = this[name];
                  }
                  var router = this;
                  Cambone.history.route(route, function (fragment) {
                    var args = router._extractParameters(route, fragment);
                    callback && callback.apply(router, args);
                    router.trigger.apply(router, ['route:' + name].concat(args));
                    router.trigger('route', name, args);
                    Cambone.history.trigger('route', router, name, args);
                  });
                  return this;
                },
                navigate: function (fragment, options) {
                  Cambone.history.navigate(fragment, options);
                  return this;
                },
                _bindRoutes: function () {
                  if (!this.routes) {
                    return;
                  }
                  this.routes = _.result(this, 'routes');
                  var route,
                    routes = _.keys(this.routes);
                  while ((route = routes.pop()) != null) {
                    this.route(route, this.routes[route]);
                  }
                },
                _routeToRegExp: function (route) {
                  route = route
                    .replace(escapeRegExp, '\\$&')
                    .replace(optionalParam, '(?:$1)?')
                    .replace(namedParam, function (match, optional) {
                      return optional ? match : '([^/]+)';
                    })
                    .replace(splatParam, '(.*?)');
                  return new RegExp('^' + route + '$');
                },
                _extractParameters: function (route, fragment) {
                  var params = route.exec(fragment).slice(1);
                  return _.map(params, function (param) {
                    return param ? decodeURIComponent(param) : null;
                  });
                },
              });
              var History = (Cambone.History = function () {
                this.handlers = [];
                _.bindAll(this, 'checkUrl');
                if (typeof window !== 'undefined') {
                  this.location = window.location;
                  this.history = window.history;
                }
              });
              var routeStripper = /^[#\/]|\s+$/g;
              var rootStripper = /^\/+|\/+$/g;
              var isExplorer = /msie [\w.]+/;
              var trailingSlash = /\/$/;
              History.started = false;
              _.extend(History.prototype, Events, {
                interval: 50,
                getHash: function (window) {
                  var match = (window || this).location.href.match(/#(.*)$/);
                  return match ? match[1] : '';
                },
                getFragment: function (fragment, forcePushState) {
                  if (fragment == null) {
                    if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                      fragment = this.location.pathname;
                      var root = this.root.replace(trailingSlash, '');
                      if (!fragment.indexOf(root)) {
                        fragment = fragment.substr(root.length);
                      }
                    } else {
                      fragment = this.getHash();
                    }
                  }
                  return fragment.replace(routeStripper, '');
                },
                start: function (options) {
                  if (History.started) {
                    throw new Error('Cambone.history has already been started');
                  }
                  History.started = true;
                  this.options = _.extend({}, { root: '/' }, this.options, options);
                  this.root = this.options.root;
                  this._wantsHashChange = this.options.hashChange !== false;
                  this._wantsPushState = !!this.options.pushState;
                  this._hasPushState = !!(
                    this.options.pushState &&
                    this.history &&
                    this.history.pushState
                  );
                  var fragment = this.getFragment();
                  var docMode = document.documentMode;
                  var oldIE =
                    isExplorer.exec(navigator.userAgent.toLowerCase()) &&
                    (!docMode || docMode <= 7);
                  this.root = ('/' + this.root + '/').replace(rootStripper, '/');
                  if (oldIE && this._wantsHashChange) {
                    this.iframe = Cambone.$('<iframe src="javascript:0" tabindex="-1" />')
                      .hide()
                      .appendTo('body')[0].contentWindow;
                    this.navigate(fragment);
                  }
                  if (this._hasPushState) {
                    Cambone.$(window).on('popstate', this.checkUrl);
                  } else {
                    if (this._wantsHashChange && 'onhashchange' in window && !oldIE) {
                      Cambone.$(window).on('hashchange', this.checkUrl);
                    } else {
                      if (this._wantsHashChange) {
                        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
                      }
                    }
                  }
                  this.fragment = fragment;
                  var loc = this.location;
                  var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;
                  if (
                    this._wantsHashChange &&
                    this._wantsPushState &&
                    !this._hasPushState &&
                    !atRoot
                  ) {
                    this.fragment = this.getFragment(null, true);
                    this.location.replace(this.root + this.location.search + '#' + this.fragment);
                    return true;
                  } else {
                    if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
                      this.fragment = this.getHash().replace(routeStripper, '');
                      this.history.replaceState(
                        {},
                        document.title,
                        this.root + this.fragment + loc.search
                      );
                    }
                  }
                  if (!this.options.silent) {
                    return this.loadUrl();
                  }
                },
                stop: function () {
                  Cambone.$(window)
                    .off('popstate', this.checkUrl)
                    .off('hashchange', this.checkUrl);
                  clearInterval(this._checkUrlInterval);
                  History.started = false;
                },
                route: function (route, callback) {
                  this.handlers.unshift({ route: route, callback: callback });
                },
                checkUrl: function (e) {
                  var current = this.getFragment();
                  if (current === this.fragment && this.iframe) {
                    current = this.getFragment(this.getHash(this.iframe));
                  }
                  if (current === this.fragment) {
                    return false;
                  }
                  if (this.iframe) {
                    this.navigate(current);
                  }
                  this.loadUrl() || this.loadUrl(this.getHash());
                },
                loadUrl: function (fragmentOverride) {
                  var fragment = (this.fragment = this.getFragment(fragmentOverride));
                  var matched = _.any(this.handlers, function (handler) {
                    if (handler.route.test(fragment)) {
                      handler.callback(fragment);
                      return true;
                    }
                  });
                  return matched;
                },
                navigate: function (fragment, options) {
                  if (!History.started) {
                    return false;
                  }
                  if (!options || options === true) {
                    options = { trigger: options };
                  }
                  fragment = this.getFragment(fragment || '');
                  if (this.fragment === fragment) {
                    return;
                  }
                  this.fragment = fragment;
                  var url = this.root + fragment;
                  if (this._hasPushState) {
                    this.history[options.replace ? 'replaceState' : 'pushState'](
                      {},
                      document.title,
                      url
                    );
                  } else {
                    if (this._wantsHashChange) {
                      this._updateHash(this.location, fragment, options.replace);
                      if (
                        this.iframe &&
                        fragment !== this.getFragment(this.getHash(this.iframe))
                      ) {
                        if (!options.replace) {
                          this.iframe.document.open().close();
                        }
                        this._updateHash(this.iframe.location, fragment, options.replace);
                      }
                    } else {
                      return this.location.assign(url);
                    }
                  }
                  if (options.trigger) {
                    this.loadUrl(fragment);
                  }
                },
                _updateHash: function (location, fragment, replace) {
                  if (replace) {
                    var href = location.href.replace(/(javascript:|#).*$/, '');
                    location.replace(href + '#' + fragment);
                  } else {
                    location.hash = '#' + fragment;
                  }
                },
              });
              Cambone.history = new History();
              var extend = function (protoProps, staticProps) {
                var parent = this;
                var child;
                if (protoProps && _.has(protoProps, 'constructor')) {
                  child = protoProps.constructor;
                } else {
                  child = function () {
                    return parent.apply(this, arguments);
                  };
                }
                _.extend(child, parent, staticProps);
                var Surrogate = function () {
                  this.constructor = child;
                };
                Surrogate.prototype = parent.prototype;
                child.prototype = new Surrogate();
                if (protoProps) {
                  _.extend(child.prototype, protoProps);
                }
                child.__super__ = parent.prototype;
                return child;
              };
              Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
              var urlError = function () {
                throw new Error('A "url" property or function must be specified');
              };
              var wrapError = function (model, options) {
                var error = options.error;
                options.error = function (resp) {
                  if (error) {
                    error(model, resp, options);
                  }
                  model.trigger('error', model, resp, options);
                };
              };
            }.call(this));
            (function ($C) {
              $C.fn.watch = function (props, callback, timeout) {
                $C = mvBroadcast.heatmap.lib.camQuery;
                if (!timeout) {
                  timeout = 10;
                }
                return this.each(function () {
                  var el = $C(this),
                    func = function () {
                      __check.call(this, el);
                    },
                    data = { props: props.split(','), func: callback, vals: [] };
                  $C.each(data.props, function (i) {
                    data.vals[i] = el.attr(data.props[i]);
                  });
                  el.data(data);
                  if (typeof this.onpropertychange == 'object') {
                    el.bind('propertychange', callback);
                  } else {
                    if ($C.browser.mozilla) {
                      el.bind('DOMAttrModified', callback);
                    } else {
                      setInterval(func, timeout);
                    }
                  }
                });
                function __check (el) {
                  var data = el.data(),
                    changed = false,
                    temp = '';
                  for (var i = 0; i < data.props.length; i++) {
                    temp = el.attr(data.props[i]);
                    if (data.vals[i] != temp) {
                      data.vals[i] = temp;
                      changed = true;
                      break;
                    }
                  }
                  if (changed && data.func) {
                    data.func.call(el, data);
                  }
                }
              };
            })(camQuery);
            Cambone.Paginator = (function (Cambone, _, $) {
              var Paginator = {};
              Paginator.version = '0.7.0';
              Paginator.clientPager = Cambone.Collection.extend({
                useDiacriticsPlugin: true,
                useLevenshteinPlugin: true,
                sortColumn: '',
                sortDirection: 'desc',
                lastSortColumn: '',
                fieldFilterRules: [],
                lastFieldFilterRules: [],
                filterFields: '',
                filterExpression: '',
                lastFilterExpression: '',
                defaults_ui: {
                  firstPage: 0,
                  currentPage: 1,
                  perPage: 5,
                  totalPages: 10,
                  pagesInRange: 4,
                },
                initialize: function () {
                  this.on('add', this.addModel, this);
                  this.on('remove', this.removeModel, this);
                  this.setDefaults();
                },
                setDefaults: function () {
                  var options = _.defaults(this.paginator_ui, this.defaults_ui);
                  _.defaults(this, options);
                },
                addModel: function (model) {
                  this.origModels.push(model);
                },
                removeModel: function (model) {
                  var index = _.indexOf(this.origModels, model);
                  this.origModels.splice(index, 1);
                },
                sync: function (method, model, options) {
                  var self = this;
                  this.setDefaults();
                  var queryAttributes = {};
                  _.each(_.result(self, 'server_api'), function (value, key) {
                    if (_.isFunction(value)) {
                      value = _.bind(value, self);
                      value = value();
                    }
                    queryAttributes[key] = value;
                  });
                  var queryOptions = _.clone(self.paginator_core);
                  _.each(queryOptions, function (value, key) {
                    if (_.isFunction(value)) {
                      value = _.bind(value, self);
                      value = value();
                    }
                    queryOptions[key] = value;
                  });
                  queryOptions = _.defaults(queryOptions, {
                    timeout: 25000,
                    cache: false,
                    type: 'GET',
                    dataType: 'jsonp',
                  });
                  queryOptions = _.extend(
                    queryOptions,
                    {
                      data: decodeURIComponent($.param(queryAttributes)),
                      processData: false,
                      url: _.result(queryOptions, 'url'),
                    },
                    options
                  );
                  var bbVer = Cambone.VERSION.split('.');
                  var promiseSuccessFormat = !(
                    parseInt(bbVer[0], 10) === 0 &&
                    parseInt(bbVer[1], 10) === 9 &&
                    parseInt(bbVer[2], 10) === 10
                  );
                  var success = queryOptions.success;
                  queryOptions.success = function (resp, status, xhr) {
                    if (success) {
                      if (promiseSuccessFormat) {
                        success(resp, status, xhr);
                      } else {
                        success(model, resp, queryOptions);
                      }
                    }
                    if (model && model.trigger) {
                      model.trigger('sync', model, resp, queryOptions);
                    }
                  };
                  var error = queryOptions.error;
                  queryOptions.error = function (xhr) {
                    if (error) {
                      error(model, xhr, queryOptions);
                    }
                    if (model && model.trigger) {
                      model.trigger('error', model, xhr, queryOptions);
                    }
                  };
                  var xhr = (queryOptions.xhr = $.ajax(queryOptions));
                  if (model && model.trigger) {
                    model.trigger('request', model, xhr, queryOptions);
                  }
                  return xhr;
                },
                nextPage: function (options) {
                  if (this.currentPage < this.information.totalPages) {
                    this.currentPage = ++this.currentPage;
                    this.pager(options);
                  }
                },
                previousPage: function (options) {
                  if (this.currentPage > 1) {
                    this.currentPage = --this.currentPage;
                    this.pager(options);
                  }
                },
                goTo: function (page, options) {
                  if (page !== undefined) {
                    this.currentPage = parseInt(page, 10);
                    this.pager(options);
                  }
                },
                howManyPer: function (perPage) {
                  if (perPage !== undefined) {
                    var lastPerPage = this.perPage;
                    this.perPage = parseInt(perPage, 10);
                    this.currentPage = Math.ceil(
                      (lastPerPage * (this.currentPage - 1) + 1) / perPage
                    );
                    this.pager();
                  }
                },
                setSort: function (column, direction) {
                  if (column !== undefined && direction !== undefined) {
                    this.lastSortColumn = this.sortColumn;
                    this.sortColumn = column;
                    this.sortDirection = direction;
                    this.pager();
                    this.info();
                  }
                },
                setFieldFilter: function (fieldFilterRules) {
                  if (!_.isEmpty(fieldFilterRules)) {
                    this.lastFieldFilterRules = this.fieldFilterRules;
                    this.fieldFilterRules = fieldFilterRules;
                    this.pager();
                    this.info();
                  } else {
                    this.lastFieldFilterRules = this.fieldFilterRules;
                    this.fieldFilterRules = '';
                    this.pager();
                    this.info();
                  }
                },
                doFakeFieldFilter: function (rules) {
                  if (!_.isEmpty(rules)) {
                    var testModels = this.origModels;
                    if (testModels === undefined) {
                      testModels = this.models;
                    }
                    testModels = this._fieldFilter(testModels, rules);
                    if (this.filterExpression !== '') {
                      testModels = this._filter(
                        testModels,
                        this.filterFields,
                        this.filterExpression
                      );
                    }
                    return testModels.length;
                  }
                },
                setFilter: function (fields, filter) {
                  if (fields !== undefined && filter !== undefined) {
                    this.filterFields = fields;
                    this.lastFilterExpression = this.filterExpression;
                    this.filterExpression = filter;
                    this.pager();
                    this.info();
                  }
                },
                doFakeFilter: function (fields, filter) {
                  if (fields !== undefined && filter !== undefined) {
                    var testModels = this.origModels;
                    if (testModels === undefined) {
                      testModels = this.models;
                    }
                    if (!_.isEmpty(this.fieldFilterRules)) {
                      testModels = this._fieldFilter(testModels, this.fieldFilterRules);
                    }
                    testModels = this._filter(testModels, fields, filter);
                    return testModels.length;
                  }
                },
                pager: function (options) {
                  var self = this,
                    disp = this.perPage,
                    start = (self.currentPage - 1) * disp,
                    stop = start + disp;
                  if (self.origModels === undefined) {
                    self.origModels = self.models;
                  }
                  self.models = self.origModels.slice();
                  if (this.sortColumn !== '') {
                    self.models = self._sort(self.models, this.sortColumn, this.sortDirection);
                  }
                  if (!_.isEmpty(this.fieldFilterRules)) {
                    self.models = self._fieldFilter(self.models, this.fieldFilterRules);
                  }
                  if (this.filterExpression !== '') {
                    self.models = self._filter(
                      self.models,
                      this.filterFields,
                      this.filterExpression
                    );
                  }
                  if (
                    this.lastSortColumn !== this.sortColumn ||
                    this.lastFilterExpression !== this.filterExpression ||
                    !_.isEqual(this.fieldFilterRules, this.lastFieldFilterRules)
                  ) {
                    start = 0;
                    stop = start + disp;
                    self.currentPage = 1;
                    this.lastSortColumn = this.sortColumn;
                    this.lastFieldFilterRules = this.fieldFilterRules;
                    this.lastFilterExpression = this.filterExpression;
                  }
                  self.sortedAndFilteredModels = self.models.slice();
                  self.info();
                  self.reset(self.models.slice(start, stop));
                  _.result(options, 'success');
                },
                _sort: function (models, sort, direction) {
                  models = models.sort(function (a, b) {
                    var ac = a.get(sort),
                      bc = b.get(sort);
                    if (_.isUndefined(ac) || _.isUndefined(bc) || ac === null || bc === null) {
                      return 0;
                    } else {
                      ac = ac.toString().toLowerCase();
                      bc = bc.toString().toLowerCase();
                    }
                    if (direction === 'desc') {
                      if (
                        !ac.match(/[^\-\d\.]/) &&
                        ac.match(/-?[\d\.]+/) &&
                        !bc.match(/[^\-\d\.]/) &&
                        bc.match(/-?[\d\.]+/)
                      ) {
                        if (ac - 0 < bc - 0) {
                          return 1;
                        }
                        if (ac - 0 > bc - 0) {
                          return -1;
                        }
                      } else {
                        if (ac < bc) {
                          return 1;
                        }
                        if (ac > bc) {
                          return -1;
                        }
                      }
                    } else {
                      if (
                        !ac.match(/[^\-\d\.]/) &&
                        ac.match(/-?[\d\.]+/) &&
                        !bc.match(/[^\-\d\.]/) &&
                        bc.match(/-?[\d\.]+/)
                      ) {
                        if (ac - 0 < bc - 0) {
                          return -1;
                        }
                        if (ac - 0 > bc - 0) {
                          return 1;
                        }
                      } else {
                        if (ac < bc) {
                          return -1;
                        }
                        if (ac > bc) {
                          return 1;
                        }
                      }
                    }
                    if (a.cid && b.cid) {
                      var aId = a.cid,
                        bId = b.cid;
                      if (aId < bId) {
                        return -1;
                      }
                      if (aId > bId) {
                        return 1;
                      }
                    }
                    return 0;
                  });
                  return models;
                },
                _fieldFilter: function (models, rules) {
                  if (_.isEmpty(rules)) {
                    return models;
                  }
                  var filteredModels = [];
                  _.each(models, function (model) {
                    var should_push = true;
                    _.each(rules, function (rule) {
                      if (!should_push) {
                        return false;
                      }
                      should_push = false;
                      if (rule.type === 'function') {
                        var f = _.wrap(rule.value, function (func) {
                          return func(model.get(rule.field));
                        });
                        if (f()) {
                          should_push = true;
                        }
                      } else {
                        if (rule.type === 'required') {
                          if (!_.isEmpty(model.get(rule.field).toString())) {
                            should_push = true;
                          }
                        } else {
                          if (rule.type === 'min') {
                            if (
                              !_.isNaN(Number(model.get(rule.field))) &&
                              !_.isNaN(Number(rule.value)) &&
                              Number(model.get(rule.field)) >= Number(rule.value)
                            ) {
                              should_push = true;
                            }
                          } else {
                            if (rule.type === 'max') {
                              if (
                                !_.isNaN(Number(model.get(rule.field))) &&
                                !_.isNaN(Number(rule.value)) &&
                                Number(model.get(rule.field)) <= Number(rule.value)
                              ) {
                                should_push = true;
                              }
                            } else {
                              if (rule.type === 'range') {
                                if (
                                  !_.isNaN(Number(model.get(rule.field))) &&
                                  _.isObject(rule.value) &&
                                  !_.isNaN(Number(rule.value.min)) &&
                                  !_.isNaN(Number(rule.value.max)) &&
                                  Number(model.get(rule.field)) >= Number(rule.value.min) &&
                                  Number(model.get(rule.field)) <= Number(rule.value.max)
                                ) {
                                  should_push = true;
                                }
                              } else {
                                if (rule.type === 'minLength') {
                                  if (model.get(rule.field).toString().length >= rule.value) {
                                    should_push = true;
                                  }
                                } else {
                                  if (rule.type === 'maxLength') {
                                    if (model.get(rule.field).toString().length <= rule.value) {
                                      should_push = true;
                                    }
                                  } else {
                                    if (rule.type === 'rangeLength') {
                                      if (
                                        _.isObject(rule.value) &&
                                        !_.isNaN(Number(rule.value.min)) &&
                                        !_.isNaN(Number(rule.value.max)) &&
                                        model.get(rule.field).toString().length >=
                                          rule.value.min &&
                                        model.get(rule.field).toString().length <= rule.value.max
                                      ) {
                                        should_push = true;
                                      }
                                    } else {
                                      if (rule.type === 'oneOf') {
                                        if (
                                          _.isArray(rule.value) &&
                                          _.include(rule.value, model.get(rule.field))
                                        ) {
                                          should_push = true;
                                        }
                                      } else {
                                        if (rule.type === 'equalTo') {
                                          if (rule.value === model.get(rule.field)) {
                                            should_push = true;
                                          }
                                        } else {
                                          if (rule.type === 'containsAllOf') {
                                            if (
                                              _.isArray(rule.value) &&
                                              _.isArray(model.get(rule.field)) &&
                                              _.intersection(rule.value, model.get(rule.field))
                                                .length === rule.value.length
                                            ) {
                                              should_push = true;
                                            }
                                          } else {
                                            if (rule.type === 'pattern') {
                                              if (
                                                model.get(rule.field).toString().match(rule.value)
                                              ) {
                                                should_push = true;
                                              }
                                            } else {
                                              should_push = false;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    });
                    if (should_push) {
                      filteredModels.push(model);
                    }
                  });
                  return filteredModels;
                },
                _filter: function (models, fields, filter) {
                  var self = this;
                  var obj_fields = {};
                  if (_.isString(fields)) {
                    obj_fields[fields] = { cmp_method: 'regexp' };
                  } else {
                    if (_.isArray(fields)) {
                      _.each(fields, function (field) {
                        obj_fields[field] = { cmp_method: 'regexp' };
                      });
                    } else {
                      _.each(fields, function (cmp_opts, field) {
                        obj_fields[field] = _.defaults(cmp_opts, { cmp_method: 'regexp' });
                      });
                    }
                  }
                  fields = obj_fields;
                  if (_.has(Cambone.Paginator, 'removeDiacritics') && self.useDiacriticsPlugin) {
                    filter = Cambone.Paginator.removeDiacritics(filter);
                  }
                  if (filter === '' || !_.isString(filter)) {
                    return models;
                  } else {
                    var words = _.map(filter.match(/\w+/gi), function (element) {
                      return element.toLowerCase();
                    });
                    var pattern = '(' + _.uniq(words).join('|') + ')';
                    var regexp = new RegExp(pattern, 'igm');
                  }
                  var filteredModels = [];
                  _.each(models, function (model) {
                    var matchesPerModel = [];
                    _.each(fields, function (cmp_opts, field) {
                      var value = model.get(field);
                      if (value) {
                        var matchesPerField = [];
                        if (
                          _.has(Cambone.Paginator, 'removeDiacritics') &&
                          self.useDiacriticsPlugin
                        ) {
                          value = Cambone.Paginator.removeDiacritics(value.toString());
                        } else {
                          value = value.toString();
                        }
                        if (
                          cmp_opts.cmp_method === 'levenshtein' &&
                          _.has(Cambone.Paginator, 'levenshtein') &&
                          self.useLevenshteinPlugin
                        ) {
                          var distance = Cambone.Paginator.levenshtein(value, filter);
                          _.defaults(cmp_opts, { max_distance: 0 });
                          if (distance <= cmp_opts.max_distance) {
                            matchesPerField = _.uniq(words);
                          }
                        } else {
                          matchesPerField = value.match(regexp);
                        }
                        matchesPerField = _.map(matchesPerField, function (match) {
                          return match.toString().toLowerCase();
                        });
                        _.each(matchesPerField, function (match) {
                          matchesPerModel.push(match);
                        });
                      }
                    });
                    matchesPerModel = _.uniq(_.without(matchesPerModel, ''));
                    if (_.isEmpty(_.difference(words, matchesPerModel))) {
                      filteredModels.push(model);
                    }
                  });
                  return filteredModels;
                },
                info: function () {
                  var self = this,
                    info = {},
                    totalRecords = self.sortedAndFilteredModels
                      ? self.sortedAndFilteredModels.length
                      : self.length,
                    totalPages = Math.ceil(totalRecords / self.perPage);
                  info = {
                    totalUnfilteredRecords: self.origModels.length,
                    totalRecords: totalRecords,
                    currentPage: self.currentPage,
                    perPage: this.perPage,
                    totalPages: totalPages,
                    lastPage: totalPages,
                    previous: false,
                    next: false,
                    startRecord:
                      totalRecords === 0 ? 0 : (self.currentPage - 1) * this.perPage + 1,
                    endRecord: Math.min(totalRecords, self.currentPage * this.perPage),
                  };
                  if (self.currentPage > 1) {
                    info.previous = self.currentPage - 1;
                  }
                  if (self.currentPage < info.totalPages) {
                    info.next = self.currentPage + 1;
                  }
                  info.pageSet = self.setPagination(info);
                  self.information = info;
                  return info;
                },
                setPagination: function (info) {
                  var pages = [],
                    i = 0,
                    l = 0;
                  var ADJACENTx2 = this.pagesInRange * 2,
                    LASTPAGE = Math.ceil(info.totalRecords / info.perPage);
                  if (LASTPAGE > 1) {
                    if (LASTPAGE <= 1 + ADJACENTx2) {
                      for (i = 1, l = LASTPAGE; i <= l; i++) {
                        pages.push(i);
                      }
                    } else {
                      if (info.currentPage <= this.pagesInRange + 1) {
                        for (i = 1, l = 2 + ADJACENTx2; i < l; i++) {
                          pages.push(i);
                        }
                      } else {
                        if (
                          LASTPAGE - this.pagesInRange > info.currentPage &&
                          info.currentPage > this.pagesInRange
                        ) {
                          for (
                            i = info.currentPage - this.pagesInRange;
                            i <= info.currentPage + this.pagesInRange;
                            i++
                          ) {
                            pages.push(i);
                          }
                        } else {
                          for (i = LASTPAGE - ADJACENTx2; i <= LASTPAGE; i++) {
                            pages.push(i);
                          }
                        }
                      }
                    }
                  }
                  return pages;
                },
                bootstrap: function (options) {
                  _.extend(this, options);
                  this.goTo(1);
                  this.info();
                  return this;
                },
              });
              Paginator.clientPager.prototype.prevPage =
                Paginator.clientPager.prototype.previousPage;
              Paginator.requestPager = Cambone.Collection.extend({
                sync: function (method, model, options) {
                  var self = this;
                  self.setDefaults();
                  var queryAttributes = {};
                  _.each(_.result(self, 'server_api'), function (value, key) {
                    if (_.isFunction(value)) {
                      value = _.bind(value, self);
                      value = value();
                    }
                    queryAttributes[key] = value;
                  });
                  var queryOptions = _.clone(self.paginator_core);
                  _.each(queryOptions, function (value, key) {
                    if (_.isFunction(value)) {
                      value = _.bind(value, self);
                      value = value();
                    }
                    queryOptions[key] = value;
                  });
                  queryOptions = _.defaults(queryOptions, {
                    timeout: 25000,
                    cache: false,
                    type: 'GET',
                    dataType: 'jsonp',
                  });
                  if (options.data) {
                    options.data = decodeURIComponent(
                      $.param(_.extend(queryAttributes, options.data))
                    );
                  } else {
                    options.data = decodeURIComponent($.param(queryAttributes));
                  }
                  queryOptions = _.extend(
                    queryOptions,
                    {
                      data: decodeURIComponent($.param(queryAttributes)),
                      processData: false,
                      url: _.result(queryOptions, 'url'),
                    },
                    options
                  );
                  var bbVer = Cambone.VERSION.split('.');
                  var promiseSuccessFormat = !(
                    parseInt(bbVer[0], 10) === 0 &&
                    parseInt(bbVer[1], 10) === 9 &&
                    parseInt(bbVer[2], 10) === 10
                  );
                  var success = queryOptions.success;
                  queryOptions.success = function (resp, status, xhr) {
                    if (success) {
                      if (promiseSuccessFormat) {
                        success(resp, status, xhr);
                      } else {
                        success(model, resp, queryOptions);
                      }
                    }
                    if (model && model.trigger) {
                      model.trigger('sync', model, resp, queryOptions);
                    }
                  };
                  var error = queryOptions.error;
                  queryOptions.error = function (xhr) {
                    if (error) {
                      error(model, xhr, queryOptions);
                    }
                    if (model && model.trigger) {
                      model.trigger('error', model, xhr, queryOptions);
                    }
                  };
                  var xhr = (queryOptions.xhr = $.ajax(queryOptions));
                  if (model && model.trigger) {
                    model.trigger('request', model, xhr, queryOptions);
                  }
                  return xhr;
                },
                setDefaults: function () {
                  var self = this;
                  _.defaults(self.paginator_ui, {
                    firstPage: 0,
                    currentPage: 1,
                    perPage: 5,
                    totalPages: 10,
                    pagesInRange: 4,
                  });
                  _.each(self.paginator_ui, function (value, key) {
                    if (_.isUndefined(self[key])) {
                      self[key] = self.paginator_ui[key];
                    }
                  });
                },
                requestNextPage: function (options) {
                  if (this.currentPage !== undefined) {
                    this.currentPage += 1;
                    return this.pager(options);
                  } else {
                    var response = new $.Deferred();
                    response.reject();
                    return response.promise();
                  }
                },
                requestPreviousPage: function (options) {
                  if (this.currentPage !== undefined) {
                    this.currentPage -= 1;
                    return this.pager(options);
                  } else {
                    var response = new $.Deferred();
                    response.reject();
                    return response.promise();
                  }
                },
                updateOrder: function (column) {
                  if (column !== undefined) {
                    this.sortField = column;
                    this.pager();
                  }
                },
                goTo: function (page, options) {
                  if (page !== undefined) {
                    this.currentPage = parseInt(page, 10);
                    return this.pager(options);
                  } else {
                    var response = new $.Deferred();
                    response.reject();
                    return response.promise();
                  }
                },
                howManyPer: function (count) {
                  if (count !== undefined) {
                    this.currentPage = this.firstPage;
                    this.perPage = count;
                    this.pager();
                  }
                },
                info: function () {
                  var info = {
                    totalRecords: this.totalRecords || 0,
                    currentPage: this.currentPage,
                    firstPage: this.firstPage,
                    totalPages: Math.ceil(this.totalRecords / this.perPage),
                    lastPage: this.totalPages,
                    perPage: this.perPage,
                    previous: false,
                    next: false,
                  };
                  if (this.currentPage > 1) {
                    info.previous = this.currentPage - 1;
                  }
                  if (this.currentPage < info.totalPages) {
                    info.next = this.currentPage + 1;
                  }
                  info.hasNext = info.next;
                  info.hasPrevious = info.next;
                  info.pageSet = this.setPagination(info);
                  this.information = info;
                  return info;
                },
                setPagination: function (info) {
                  var pages = [],
                    i = 0,
                    l = 0;
                  var ADJACENTx2 = this.pagesInRange * 2,
                    LASTPAGE = Math.ceil(info.totalRecords / info.perPage);
                  if (LASTPAGE > 1) {
                    if (LASTPAGE <= 1 + ADJACENTx2) {
                      for (i = 1, l = LASTPAGE; i <= l; i++) {
                        pages.push(i);
                      }
                    } else {
                      if (info.currentPage <= this.pagesInRange + 1) {
                        for (i = 1, l = 2 + ADJACENTx2; i < l; i++) {
                          pages.push(i);
                        }
                      } else {
                        if (
                          LASTPAGE - this.pagesInRange > info.currentPage &&
                          info.currentPage > this.pagesInRange
                        ) {
                          for (
                            i = info.currentPage - this.pagesInRange;
                            i <= info.currentPage + this.pagesInRange;
                            i++
                          ) {
                            pages.push(i);
                          }
                        } else {
                          for (i = LASTPAGE - ADJACENTx2; i <= LASTPAGE; i++) {
                            pages.push(i);
                          }
                        }
                      }
                    }
                  }
                  return pages;
                },
                pager: function (options) {
                  if (!_.isObject(options)) {
                    options = {};
                  }
                  return this.fetch(options);
                },
                url: function () {
                  if (this.paginator_core !== undefined && this.paginator_core.url !== undefined) {
                    return this.paginator_core.url;
                  } else {
                    return null;
                  }
                },
                bootstrap: function (options) {
                  _.extend(this, options);
                  this.setDefaults();
                  this.info();
                  return this;
                },
              });
              Paginator.requestPager.prototype.nextPage =
                Paginator.requestPager.prototype.requestNextPage;
              Paginator.requestPager.prototype.prevPage =
                Paginator.requestPager.prototype.requestPreviousPage;
              return Paginator;
            })(window.Cambone, _, window.camQuery);
            (function (factory) {
              if (typeof define === 'function' && define.amd) {
                define(['camQuery'], factory);
              } else {
                if (typeof exports === 'object') {
                  factory(require('camQuery'));
                } else {
                  factory(camQuery);
                }
              }
            })(function ($C) {
              var pluses = /\+/g;
              function encode (s) {
                return config.raw ? s : encodeURIComponent(s);
              }
              function decode (s) {
                return config.raw ? s : decodeURIComponent(s);
              }
              function stringifyCookieValue (value) {
                return encode(config.json ? JSON.stringify(value) : String(value));
              }
              function parseCookieValue (s) {
                if (s.indexOf('"') === 0) {
                  s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
                }
                try {
                  s = decodeURIComponent(s.replace(pluses, ' '));
                  return config.json ? JSON.parse(s) : s;
                } catch (e) {}
              }
              function read (s, converter) {
                var value = config.raw ? s : parseCookieValue(s);
                return $C.isFunction(converter) ? converter(value) : value;
              }
              var config = ($C.cookie = function (key, value, options) {
                const $___old_84a1fbab29fb4b52 = {}.constructor.getOwnPropertyDescriptor(
                  Document.prototype,
                  'cookie'
                );
                try {
                  if ($___old_84a1fbab29fb4b52)
                    ({}.constructor.defineProperty(
                      Document.prototype,
                      'cookie',
                      $___stub_cdc5a54489618108.cookie
                    ));
                  return function () {
                    if (value !== undefined && !$C.isFunction(value)) {
                      options = $C.extend({}, config.defaults, options);
                      if (typeof options.expires === 'number') {
                        var days = options.expires,
                          t = (options.expires = new Date());
                        t.setTime(+t + days * 86400000);
                      }
                      return (document.cookie = [
                        encode(key),
                        '=',
                        stringifyCookieValue(value),
                        options.expires ? '; expires=' + options.expires.toUTCString() : '',
                        options.path ? '; path=' + options.path : '',
                        options.domain ? '; domain=' + options.domain : '',
                        options.secure ? '; secure' : '',
                      ].join(''));
                    }
                    var result = key ? undefined : {};
                    var cookies = document.cookie ? document.cookie.split('; ') : [];
                    for (var i = 0, l = cookies.length; i < l; i++) {
                      var parts = cookies[i].split('=');
                      var name = decode(parts.shift());
                      var cookie = parts.join('=');
                      if (key && key === name) {
                        result = read(cookie, value);
                        break;
                      }
                      if (!key && (cookie = read(cookie)) !== undefined) {
                        result[name] = cookie;
                      }
                    }
                    return result;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_84a1fbab29fb4b52)
                    ({}.constructor.defineProperty(
                      Document.prototype,
                      'cookie',
                      $___old_84a1fbab29fb4b52
                    ));
                }
              });
              config.defaults = {};
              $C.removeCookie = function (key, options) {
                if ($C.cookie(key) === undefined) {
                  return false;
                }
                $C.cookie(key, '', $C.extend({}, options, { expires: -1 }));
                return !$C.cookie(key);
              };
            });
            (function () {
              dellpoc.lib = {};
              dellpoc.lib._ = _.noConflict();
              dellpoc.lib.Backbone = Cambone;
              dellpoc.lib.jQuery = camQuery;
              dellpoc.lib.Backbone.$ = dellpoc.lib.jQuery;
              dellpoc.lib.Backbone._ = dellpoc.lib._;
              dellpoc.log = [];
              if (!window.console) {
                window.console = {
                  log: function (msg) {
                    dellpoc.log.push(msg);
                  },
                  info: function (msg) {
                    dellpoc.log.push(msg);
                  },
                  warn: function (msg) {
                    dellpoc.log.push(msg);
                  },
                  error: function (msg) {
                    dellpoc.log.push(msg);
                  },
                };
              }
              if (!window.console.log) {
                window.console.log = function (msg) {
                  dellpoc.log.push(msg);
                };
              }
              if (!window.console.info) {
                window.console.info = function (msg) {
                  dellpoc.log.push(msg);
                };
              }
              if (!window.console.warn) {
                window.console.warn = function (msg) {
                  dellpoc.log.push(msg);
                };
              }
              if (!window.console.error) {
                window.console.error = function (msg) {
                  dellpoc.log.push(msg);
                };
              }
            }.call(this));
            (function (root, factory) {
              dellpoc.lib.Marionette = factory(root, dellpoc.lib.Backbone, dellpoc.lib._);
            })(this, function (root, Backbone, _) {
              (function (Backbone, _) {
                var previousChildViewContainer = Backbone.ChildViewContainer;
                Backbone.ChildViewContainer = (function (Backbone, _) {
                  var Container = function (views) {
                    this._views = {};
                    this._indexByModel = {};
                    this._indexByCustom = {};
                    this._updateLength();
                    _.each(views, this.add, this);
                  };
                  _.extend(Container.prototype, {
                    add: function (view, customIndex) {
                      var viewCid = view.cid;
                      this._views[viewCid] = view;
                      if (view.model) {
                        this._indexByModel[view.model.cid] = viewCid;
                      }
                      if (customIndex) {
                        this._indexByCustom[customIndex] = viewCid;
                      }
                      this._updateLength();
                      return this;
                    },
                    findByModel: function (model) {
                      return this.findByModelCid(model.cid);
                    },
                    findByModelCid: function (modelCid) {
                      var viewCid = this._indexByModel[modelCid];
                      return this.findByCid(viewCid);
                    },
                    findByCustom: function (index) {
                      var viewCid = this._indexByCustom[index];
                      return this.findByCid(viewCid);
                    },
                    findByIndex: function (index) {
                      return _.values(this._views)[index];
                    },
                    findByCid: function (cid) {
                      return this._views[cid];
                    },
                    remove: function (view) {
                      var viewCid = view.cid;
                      if (view.model) {
                        delete this._indexByModel[view.model.cid];
                      }
                      _.any(
                        this._indexByCustom,
                        function (cid, key) {
                          if (cid === viewCid) {
                            delete this._indexByCustom[key];
                            return true;
                          }
                        },
                        this
                      );
                      delete this._views[viewCid];
                      this._updateLength();
                      return this;
                    },
                    call: function (method) {
                      this.apply(method, _.tail(arguments));
                    },
                    apply: function (method, args) {
                      _.each(this._views, function (view) {
                        if (_.isFunction(view[method])) {
                          view[method].apply(view, args || []);
                        }
                      });
                    },
                    _updateLength: function () {
                      this.length = _.size(this._views);
                    },
                  });
                  var methods = [
                    'forEach',
                    'each',
                    'map',
                    'find',
                    'detect',
                    'filter',
                    'select',
                    'reject',
                    'every',
                    'all',
                    'some',
                    'any',
                    'include',
                    'contains',
                    'invoke',
                    'toArray',
                    'first',
                    'initial',
                    'rest',
                    'last',
                    'without',
                    'isEmpty',
                    'pluck',
                  ];
                  _.each(methods, function (method) {
                    Container.prototype[method] = function () {
                      var views = _.values(this._views);
                      var args = [views].concat(_.toArray(arguments));
                      return _[method].apply(_, args);
                    };
                  });
                  return Container;
                })(Backbone, _);
                Backbone.ChildViewContainer.VERSION = '0.1.4';
                Backbone.ChildViewContainer.noConflict = function () {
                  Backbone.ChildViewContainer = previousChildViewContainer;
                  return this;
                };
                return Backbone.ChildViewContainer;
              })(Backbone, _);
              (function (Backbone, _) {
                var previousWreqr = Backbone.Wreqr;
                var Wreqr = (Backbone.Wreqr = {});
                Backbone.Wreqr.VERSION = '1.3.1';
                Backbone.Wreqr.noConflict = function () {
                  Backbone.Wreqr = previousWreqr;
                  return this;
                };
                Wreqr.Handlers = (function (Backbone, _) {
                  var Handlers = function (options) {
                    this.options = options;
                    this._wreqrHandlers = {};
                    if (_.isFunction(this.initialize)) {
                      this.initialize(options);
                    }
                  };
                  Handlers.extend = Backbone.Model.extend;
                  _.extend(Handlers.prototype, Backbone.Events, {
                    setHandlers: function (handlers) {
                      _.each(
                        handlers,
                        function (handler, name) {
                          var context = null;
                          if (_.isObject(handler) && !_.isFunction(handler)) {
                            context = handler.context;
                            handler = handler.callback;
                          }
                          this.setHandler(name, handler, context);
                        },
                        this
                      );
                    },
                    setHandler: function (name, handler, context) {
                      var config = { callback: handler, context: context };
                      this._wreqrHandlers[name] = config;
                      this.trigger('handler:add', name, handler, context);
                    },
                    hasHandler: function (name) {
                      return !!this._wreqrHandlers[name];
                    },
                    getHandler: function (name) {
                      var config = this._wreqrHandlers[name];
                      if (!config) {
                        return;
                      }
                      return function () {
                        var args = Array.prototype.slice.apply(arguments);
                        return config.callback.apply(config.context, args);
                      };
                    },
                    removeHandler: function (name) {
                      delete this._wreqrHandlers[name];
                    },
                    removeAllHandlers: function () {
                      this._wreqrHandlers = {};
                    },
                  });
                  return Handlers;
                })(Backbone, _);
                Wreqr.CommandStorage = (function () {
                  var CommandStorage = function (options) {
                    this.options = options;
                    this._commands = {};
                    if (_.isFunction(this.initialize)) {
                      this.initialize(options);
                    }
                  };
                  _.extend(CommandStorage.prototype, Backbone.Events, {
                    getCommands: function (commandName) {
                      var commands = this._commands[commandName];
                      if (!commands) {
                        commands = { command: commandName, instances: [] };
                        this._commands[commandName] = commands;
                      }
                      return commands;
                    },
                    addCommand: function (commandName, args) {
                      var command = this.getCommands(commandName);
                      command.instances.push(args);
                    },
                    clearCommands: function (commandName) {
                      var command = this.getCommands(commandName);
                      command.instances = [];
                    },
                  });
                  return CommandStorage;
                })();
                Wreqr.Commands = (function (Wreqr) {
                  return Wreqr.Handlers.extend({
                    storageType: Wreqr.CommandStorage,
                    constructor: function (options) {
                      this.options = options || {};
                      this._initializeStorage(this.options);
                      this.on('handler:add', this._executeCommands, this);
                      var args = Array.prototype.slice.call(arguments);
                      Wreqr.Handlers.prototype.constructor.apply(this, args);
                    },
                    execute: function (name, args) {
                      name = arguments[0];
                      args = Array.prototype.slice.call(arguments, 1);
                      if (this.hasHandler(name)) {
                        this.getHandler(name).apply(this, args);
                      } else {
                        this.storage.addCommand(name, args);
                      }
                    },
                    _executeCommands: function (name, handler, context) {
                      var command = this.storage.getCommands(name);
                      _.each(command.instances, function (args) {
                        handler.apply(context, args);
                      });
                      this.storage.clearCommands(name);
                    },
                    _initializeStorage: function (options) {
                      var storage;
                      var StorageType = options.storageType || this.storageType;
                      if (_.isFunction(StorageType)) {
                        storage = new StorageType();
                      } else {
                        storage = StorageType;
                      }
                      this.storage = storage;
                    },
                  });
                })(Wreqr);
                Wreqr.RequestResponse = (function (Wreqr) {
                  return Wreqr.Handlers.extend({
                    request: function () {
                      var name = arguments[0];
                      var args = Array.prototype.slice.call(arguments, 1);
                      if (this.hasHandler(name)) {
                        return this.getHandler(name).apply(this, args);
                      }
                    },
                  });
                })(Wreqr);
                Wreqr.EventAggregator = (function (Backbone, _) {
                  var EA = function () {};
                  EA.extend = Backbone.Model.extend;
                  _.extend(EA.prototype, Backbone.Events);
                  return EA;
                })(Backbone, _);
                Wreqr.Channel = (function (Wreqr) {
                  var Channel = function (channelName) {
                    this.vent = new Backbone.Wreqr.EventAggregator();
                    this.reqres = new Backbone.Wreqr.RequestResponse();
                    this.commands = new Backbone.Wreqr.Commands();
                    this.channelName = channelName;
                  };
                  _.extend(Channel.prototype, {
                    reset: function () {
                      this.vent.off();
                      this.vent.stopListening();
                      this.reqres.removeAllHandlers();
                      this.commands.removeAllHandlers();
                      return this;
                    },
                    connectEvents: function (hash, context) {
                      this._connect('vent', hash, context);
                      return this;
                    },
                    connectCommands: function (hash, context) {
                      this._connect('commands', hash, context);
                      return this;
                    },
                    connectRequests: function (hash, context) {
                      this._connect('reqres', hash, context);
                      return this;
                    },
                    _connect: function (type, hash, context) {
                      if (!hash) {
                        return;
                      }
                      context = context || this;
                      var method = type === 'vent' ? 'on' : 'setHandler';
                      _.each(
                        hash,
                        function (fn, eventName) {
                          this[type][method](eventName, _.bind(fn, context));
                        },
                        this
                      );
                    },
                  });
                  return Channel;
                })(Wreqr);
                Wreqr.radio = (function (Wreqr) {
                  var Radio = function () {
                    this._channels = {};
                    this.vent = {};
                    this.commands = {};
                    this.reqres = {};
                    this._proxyMethods();
                  };
                  _.extend(Radio.prototype, {
                    channel: function (channelName) {
                      if (!channelName) {
                        throw new Error('Channel must receive a name');
                      }
                      return this._getChannel(channelName);
                    },
                    _getChannel: function (channelName) {
                      var channel = this._channels[channelName];
                      if (!channel) {
                        channel = new Wreqr.Channel(channelName);
                        this._channels[channelName] = channel;
                      }
                      return channel;
                    },
                    _proxyMethods: function () {
                      _.each(
                        ['vent', 'commands', 'reqres'],
                        function (system) {
                          _.each(
                            messageSystems[system],
                            function (method) {
                              this[system][method] = proxyMethod(this, system, method);
                            },
                            this
                          );
                        },
                        this
                      );
                    },
                  });
                  var messageSystems = {
                    vent: [
                      'on',
                      'off',
                      'trigger',
                      'once',
                      'stopListening',
                      'listenTo',
                      'listenToOnce',
                    ],
                    commands: [
                      'execute',
                      'setHandler',
                      'setHandlers',
                      'removeHandler',
                      'removeAllHandlers',
                    ],
                    reqres: [
                      'request',
                      'setHandler',
                      'setHandlers',
                      'removeHandler',
                      'removeAllHandlers',
                    ],
                  };
                  var proxyMethod = function (radio, system, method) {
                    return function (channelName) {
                      var messageSystem = radio._getChannel(channelName)[system];
                      var args = Array.prototype.slice.call(arguments, 1);
                      return messageSystem[method].apply(messageSystem, args);
                    };
                  };
                  return new Radio();
                })(Wreqr);
                return Backbone.Wreqr;
              })(Backbone, _);
              var previousMarionette = root.Marionette;
              var Marionette = (Backbone.Marionette = {});
              Marionette.VERSION = '2.2.0';
              Marionette.noConflict = function () {
                root.Marionette = previousMarionette;
                return this;
              };
              Backbone.Marionette = Marionette;
              Marionette.Deferred = Backbone.$.Deferred;
              var slice = Array.prototype.slice;
              Marionette.extend = Backbone.Model.extend;
              Marionette.getOption = function (target, optionName) {
                if (!target || !optionName) {
                  return;
                }
                var value;
                if (target.options && target.options[optionName] !== undefined) {
                  value = target.options[optionName];
                } else {
                  value = target[optionName];
                }
                return value;
              };
              Marionette.proxyGetOption = function (optionName) {
                return Marionette.getOption(this, optionName);
              };
              Marionette.normalizeMethods = function (hash) {
                var normalizedHash = {};
                _.each(
                  hash,
                  function (method, name) {
                    if (!_.isFunction(method)) {
                      method = this[method];
                    }
                    if (!method) {
                      return;
                    }
                    normalizedHash[name] = method;
                  },
                  this
                );
                return normalizedHash;
              };
              Marionette.normalizeUIString = function (uiString, ui) {
                return uiString.replace(/@ui\.[a-zA-Z_$0-9]*/g, function (r) {
                  return ui[r.slice(4)];
                });
              };
              Marionette.normalizeUIKeys = function (hash, ui) {
                if (typeof hash === 'undefined') {
                  return;
                }
                hash = _.clone(hash);
                _.each(_.keys(hash), function (key) {
                  var normalizedKey = Marionette.normalizeUIString(key, ui);
                  if (normalizedKey !== key) {
                    hash[normalizedKey] = hash[key];
                    delete hash[key];
                  }
                });
                return hash;
              };
              Marionette.normalizeUIValues = function (hash, ui) {
                if (typeof hash === 'undefined') {
                  return;
                }
                _.each(hash, function (val, key) {
                  if (_.isString(val)) {
                    hash[key] = Marionette.normalizeUIString(val, ui);
                  }
                });
                return hash;
              };
              Marionette.actAsCollection = function (object, listProperty) {
                var methods = [
                  'forEach',
                  'each',
                  'map',
                  'find',
                  'detect',
                  'filter',
                  'select',
                  'reject',
                  'every',
                  'all',
                  'some',
                  'any',
                  'include',
                  'contains',
                  'invoke',
                  'toArray',
                  'first',
                  'initial',
                  'rest',
                  'last',
                  'without',
                  'isEmpty',
                  'pluck',
                ];
                _.each(methods, function (method) {
                  object[method] = function () {
                    var list = _.values(_.result(this, listProperty));
                    var args = [list].concat(_.toArray(arguments));
                    return _[method].apply(_, args);
                  };
                });
              };
              Marionette.triggerMethod = function (event) {
                var splitter = /(^|:)(\w)/gi;
                function getEventName (match, prefix, eventName) {
                  return eventName.toUpperCase();
                }
                var methodName = 'on' + event.replace(splitter, getEventName);
                var method = this[methodName];
                var result;
                if (_.isFunction(method)) {
                  result = method.apply(this, _.tail(arguments));
                }
                if (_.isFunction(this.trigger)) {
                  this.trigger.apply(this, arguments);
                }
                return result;
              };
              Marionette.triggerMethodOn = function (context, event) {
                var args = _.tail(arguments, 2);
                var fnc;
                if (_.isFunction(context.triggerMethod)) {
                  fnc = context.triggerMethod;
                } else {
                  fnc = Marionette.triggerMethod;
                }
                return fnc.apply(context, [event].concat(args));
              };
              Marionette.MonitorDOMRefresh = (function (documentElement) {
                function handleShow (view) {
                  view._isShown = true;
                  triggerDOMRefresh(view);
                }
                function handleRender (view) {
                  view._isRendered = true;
                  triggerDOMRefresh(view);
                }
                function triggerDOMRefresh (view) {
                  if (view._isShown && view._isRendered && isInDOM(view)) {
                    if (_.isFunction(view.triggerMethod)) {
                      view.triggerMethod('dom:refresh');
                    }
                  }
                }
                function isInDOM (view) {
                  return Backbone.$.contains(documentElement, view.el);
                }
                return function (view) {
                  view.listenTo(view, 'show', function () {
                    handleShow(view);
                  });
                  view.listenTo(view, 'render', function () {
                    handleRender(view);
                  });
                };
              })(document.documentElement);
              (function (Marionette) {
                function bindFromStrings (target, entity, evt, methods) {
                  var methodNames = methods.split(/\s+/);
                  _.each(methodNames, function (methodName) {
                    var method = target[methodName];
                    if (!method) {
                      throw new Marionette.Error(
                        'Method "' +
                          methodName +
                          '" was configured as an event handler, but does not exist.'
                      );
                    }
                    target.listenTo(entity, evt, method);
                  });
                }
                function bindToFunction (target, entity, evt, method) {
                  target.listenTo(entity, evt, method);
                }
                function unbindFromStrings (target, entity, evt, methods) {
                  var methodNames = methods.split(/\s+/);
                  _.each(methodNames, function (methodName) {
                    var method = target[methodName];
                    target.stopListening(entity, evt, method);
                  });
                }
                function unbindToFunction (target, entity, evt, method) {
                  target.stopListening(entity, evt, method);
                }
                function iterateEvents (
                  target,
                  entity,
                  bindings,
                  functionCallback,
                  stringCallback
                ) {
                  if (!entity || !bindings) {
                    return;
                  }
                  if (!_.isFunction(bindings) && !_.isObject(bindings)) {
                    throw new Marionette.Error({
                      message: 'Bindings must be an object or function.',
                      url: 'marionette.functions.html#marionettebindentityevents',
                    });
                  }
                  if (_.isFunction(bindings)) {
                    bindings = bindings.call(target);
                  }
                  _.each(bindings, function (methods, evt) {
                    if (_.isFunction(methods)) {
                      functionCallback(target, entity, evt, methods);
                    } else {
                      stringCallback(target, entity, evt, methods);
                    }
                  });
                }
                Marionette.bindEntityEvents = function (target, entity, bindings) {
                  iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
                };
                Marionette.unbindEntityEvents = function (target, entity, bindings) {
                  iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
                };
                Marionette.proxyBindEntityEvents = function (entity, bindings) {
                  return Marionette.bindEntityEvents(this, entity, bindings);
                };
                Marionette.proxyUnbindEntityEvents = function (entity, bindings) {
                  return Marionette.unbindEntityEvents(this, entity, bindings);
                };
              })(Marionette);
              var errorProps = [
                'description',
                'fileName',
                'lineNumber',
                'name',
                'message',
                'number',
              ];
              Marionette.Error = Marionette.extend.call(Error, {
                urlRoot: 'http://marionettejs.com/docs/' + Marionette.VERSION + '/',
                constructor: function (message, options) {
                  if (_.isObject(message)) {
                    options = message;
                    message = options.message;
                  } else {
                    if (!options) {
                      options = {};
                    }
                  }
                  var error = Error.call(this, message);
                  _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));
                  this.captureStackTrace();
                  if (options.url) {
                    this.url = this.urlRoot + options.url;
                  }
                },
                captureStackTrace: function () {
                  if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, Marionette.Error);
                  }
                },
                toString: function () {
                  return this.name + ': ' + this.message + (this.url ? ' See: ' + this.url : '');
                },
              });
              Marionette.Error.extend = Marionette.extend;
              Marionette.Callbacks = function () {
                this._deferred = Marionette.Deferred();
                this._callbacks = [];
              };
              _.extend(Marionette.Callbacks.prototype, {
                add: function (callback, contextOverride) {
                  var promise = _.result(this._deferred, 'promise');
                  this._callbacks.push({ cb: callback, ctx: contextOverride });
                  promise.then(function (args) {
                    if (contextOverride) {
                      args.context = contextOverride;
                    }
                    callback.call(args.context, args.options);
                  });
                },
                run: function (options, context) {
                  this._deferred.resolve({ options: options, context: context });
                },
                reset: function () {
                  var callbacks = this._callbacks;
                  this._deferred = Marionette.Deferred();
                  this._callbacks = [];
                  _.each(
                    callbacks,
                    function (cb) {
                      this.add(cb.cb, cb.ctx);
                    },
                    this
                  );
                },
              });
              Marionette.Controller = function (options) {
                this.options = options || {};
                if (_.isFunction(this.initialize)) {
                  this.initialize(this.options);
                }
              };
              Marionette.Controller.extend = Marionette.extend;
              _.extend(Marionette.Controller.prototype, Backbone.Events, {
                destroy: function () {
                  var args = slice.call(arguments);
                  this.triggerMethod.apply(this, ['before:destroy'].concat(args));
                  this.triggerMethod.apply(this, ['destroy'].concat(args));
                  this.stopListening();
                  this.off();
                  return this;
                },
                triggerMethod: Marionette.triggerMethod,
                getOption: Marionette.proxyGetOption,
              });
              Marionette.Object = function (options) {
                this.options = _.extend({}, _.result(this, 'options'), options);
                this.initialize.apply(this, arguments);
              };
              Marionette.Object.extend = Marionette.extend;
              _.extend(Marionette.Object.prototype, {
                initialize: function () {},
                destroy: function () {
                  this.triggerMethod('before:destroy');
                  this.triggerMethod('destroy');
                  this.stopListening();
                },
                triggerMethod: Marionette.triggerMethod,
                getOption: Marionette.proxyGetOption,
                bindEntityEvents: Marionette.proxyBindEntityEvents,
                unbindEntityEvents: Marionette.proxyUnbindEntityEvents,
              });
              _.extend(Marionette.Object.prototype, Backbone.Events);
              Marionette.Region = function (options) {
                this.options = options || {};
                this.el = this.getOption('el');
                this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;
                if (!this.el) {
                  throw new Marionette.Error({
                    name: 'NoElError',
                    message: 'An "el" must be specified for a region.',
                  });
                }
                this.$el = this.getEl(this.el);
                if (this.initialize) {
                  var args = slice.apply(arguments);
                  this.initialize.apply(this, args);
                }
              };
              _.extend(Marionette.Region, {
                buildRegion: function (regionConfig, DefaultRegionClass) {
                  if (_.isString(regionConfig)) {
                    return this._buildRegionFromSelector(regionConfig, DefaultRegionClass);
                  }
                  if (regionConfig.selector || regionConfig.el || regionConfig.regionClass) {
                    return this._buildRegionFromObject(regionConfig, DefaultRegionClass);
                  }
                  if (_.isFunction(regionConfig)) {
                    return this._buildRegionFromRegionClass(regionConfig);
                  }
                  throw new Marionette.Error({
                    message: 'Improper region configuration type.',
                    url: 'marionette.region.html#region-configuration-types',
                  });
                },
                _buildRegionFromSelector: function (selector, DefaultRegionClass) {
                  return new DefaultRegionClass({ el: selector });
                },
                _buildRegionFromObject: function (regionConfig, DefaultRegionClass) {
                  var RegionClass = regionConfig.regionClass || DefaultRegionClass;
                  var options = _.omit(regionConfig, 'selector', 'regionClass');
                  if (regionConfig.selector && !options.el) {
                    options.el = regionConfig.selector;
                  }
                  var region = new RegionClass(options);
                  if (regionConfig.parentEl) {
                    region.getEl = function (el) {
                      if (_.isObject(el)) {
                        return Backbone.$(el);
                      }
                      var parentEl = regionConfig.parentEl;
                      if (_.isFunction(parentEl)) {
                        parentEl = parentEl();
                      }
                      return parentEl.find(el);
                    };
                  }
                  return region;
                },
                _buildRegionFromRegionClass: function (RegionClass) {
                  return new RegionClass();
                },
              });
              _.extend(Marionette.Region.prototype, Backbone.Events, {
                show: function (view, options) {
                  this._ensureElement();
                  var showOptions = options || {};
                  var isDifferentView = view !== this.currentView;
                  var preventDestroy = !!showOptions.preventDestroy;
                  var forceShow = !!showOptions.forceShow;
                  var isChangingView = !!this.currentView;
                  var _shouldDestroyView = !preventDestroy && isDifferentView;
                  var _shouldShowView = isDifferentView || forceShow;
                  if (isChangingView) {
                    this.triggerMethod('before:swapOut', this.currentView);
                  }
                  if (_shouldDestroyView) {
                    this.empty();
                  }
                  if (_shouldShowView) {
                    view.once('destroy', _.bind(this.empty, this));
                    view.render();
                    if (isChangingView) {
                      this.triggerMethod('before:swap', view);
                    }
                    this.triggerMethod('before:show', view);
                    Marionette.triggerMethodOn(view, 'before:show');
                    if (isChangingView) {
                      this.triggerMethod('swapOut', this.currentView);
                    }
                    this.attachHtml(view);
                    this.currentView = view;
                    if (isChangingView) {
                      this.triggerMethod('swap', view);
                    }
                    this.triggerMethod('show', view);
                    Marionette.triggerMethodOn(view, 'show');
                    return this;
                  }
                  return this;
                },
                _ensureElement: function () {
                  if (!_.isObject(this.el)) {
                    this.$el = this.getEl(this.el);
                    this.el = this.$el[0];
                  }
                  if (!this.$el || this.$el.length === 0) {
                    throw new Marionette.Error(
                      'An "el" ' + this.$el.selector + ' must exist in DOM'
                    );
                  }
                },
                getEl: function (el) {
                  return Backbone.$(el);
                },
                attachHtml: function (view) {
                  this.el.innerHTML = '';
                  this.el.appendChild(view.el);
                },
                empty: function () {
                  var view = this.currentView;
                  if (!view) {
                    return;
                  }
                  this.triggerMethod('before:empty', view);
                  this._destroyView();
                  this.triggerMethod('empty', view);
                  delete this.currentView;
                  return this;
                },
                _destroyView: function () {
                  var view = this.currentView;
                  if (view.destroy && !view.isDestroyed) {
                    view.destroy();
                  } else {
                    if (view.remove) {
                      view.remove();
                    }
                  }
                },
                attachView: function (view) {
                  this.currentView = view;
                  return this;
                },
                hasView: function () {
                  return !!this.currentView;
                },
                reset: function () {
                  this.empty();
                  if (this.$el) {
                    this.el = this.$el.selector;
                  }
                  delete this.$el;
                  return this;
                },
                getOption: Marionette.proxyGetOption,
                triggerMethod: Marionette.triggerMethod,
              });
              Marionette.Region.extend = Marionette.extend;
              Marionette.RegionManager = (function (Marionette) {
                var RegionManager = Marionette.Controller.extend({
                  constructor: function (options) {
                    this._regions = {};
                    Marionette.Controller.call(this, options);
                  },
                  addRegions: function (regionDefinitions, defaults) {
                    if (_.isFunction(regionDefinitions)) {
                      regionDefinitions = regionDefinitions.apply(this, arguments);
                    }
                    var regions = {};
                    _.each(
                      regionDefinitions,
                      function (definition, name) {
                        if (_.isString(definition)) {
                          definition = { selector: definition };
                        }
                        if (definition.selector) {
                          definition = _.defaults({}, definition, defaults);
                        }
                        var region = this.addRegion(name, definition);
                        regions[name] = region;
                      },
                      this
                    );
                    return regions;
                  },
                  addRegion: function (name, definition) {
                    var region;
                    if (definition instanceof Marionette.Region) {
                      region = definition;
                    } else {
                      region = Marionette.Region.buildRegion(definition, Marionette.Region);
                    }
                    this.triggerMethod('before:add:region', name, region);
                    this._store(name, region);
                    this.triggerMethod('add:region', name, region);
                    return region;
                  },
                  get: function (name) {
                    return this._regions[name];
                  },
                  getRegions: function () {
                    return _.clone(this._regions);
                  },
                  removeRegion: function (name) {
                    var region = this._regions[name];
                    this._remove(name, region);
                    return region;
                  },
                  removeRegions: function () {
                    var regions = this.getRegions();
                    _.each(
                      this._regions,
                      function (region, name) {
                        this._remove(name, region);
                      },
                      this
                    );
                    return regions;
                  },
                  emptyRegions: function () {
                    var regions = this.getRegions();
                    _.each(
                      regions,
                      function (region) {
                        region.empty();
                      },
                      this
                    );
                    return regions;
                  },
                  destroy: function () {
                    this.removeRegions();
                    return Marionette.Controller.prototype.destroy.apply(this, arguments);
                  },
                  _store: function (name, region) {
                    this._regions[name] = region;
                    this._setLength();
                  },
                  _remove: function (name, region) {
                    this.triggerMethod('before:remove:region', name, region);
                    region.empty();
                    region.stopListening();
                    delete this._regions[name];
                    this._setLength();
                    this.triggerMethod('remove:region', name, region);
                  },
                  _setLength: function () {
                    this.length = _.size(this._regions);
                  },
                });
                Marionette.actAsCollection(RegionManager.prototype, '_regions');
                return RegionManager;
              })(Marionette);
              Marionette.TemplateCache = function (templateId) {
                this.templateId = templateId;
              };
              _.extend(Marionette.TemplateCache, {
                templateCaches: {},
                get: function (templateId) {
                  var cachedTemplate = this.templateCaches[templateId];
                  if (!cachedTemplate) {
                    cachedTemplate = new Marionette.TemplateCache(templateId);
                    this.templateCaches[templateId] = cachedTemplate;
                  }
                  return cachedTemplate.load();
                },
                clear: function () {
                  var i;
                  var args = slice.call(arguments);
                  var length = args.length;
                  if (length > 0) {
                    for (i = 0; i < length; i++) {
                      delete this.templateCaches[args[i]];
                    }
                  } else {
                    this.templateCaches = {};
                  }
                },
              });
              _.extend(Marionette.TemplateCache.prototype, {
                load: function () {
                  if (this.compiledTemplate) {
                    return this.compiledTemplate;
                  }
                  var template = this.loadTemplate(this.templateId);
                  this.compiledTemplate = this.compileTemplate(template);
                  return this.compiledTemplate;
                },
                loadTemplate: function (templateId) {
                  var template = Backbone.$(templateId).html();
                  if (!template || template.length === 0) {
                    throw new Marionette.Error({
                      name: 'NoTemplateError',
                      message: 'Could not find template: "' + templateId + '"',
                    });
                  }
                  return template;
                },
                compileTemplate: function (rawTemplate) {
                  return _.template(rawTemplate);
                },
              });
              Marionette.Renderer = {
                render: function (template, data) {
                  if (!template) {
                    throw new Marionette.Error({
                      name: 'TemplateNotFoundError',
                      message: 'Cannot render the template since its false, null or undefined.',
                    });
                  }
                  var templateFunc;
                  if (typeof template === 'function') {
                    templateFunc = template;
                  } else {
                    templateFunc = Marionette.TemplateCache.get(template);
                  }
                  return templateFunc(data);
                },
              };
              Marionette.View = Backbone.View.extend({
                constructor: function (options) {
                  _.bindAll(this, 'render');
                  this.options = _.extend(
                    {},
                    _.result(this, 'options'),
                    _.isFunction(options) ? options.call(this) : options
                  );
                  this._behaviors = Marionette.Behaviors(this);
                  Backbone.View.apply(this, arguments);
                  Marionette.MonitorDOMRefresh(this);
                  this.listenTo(this, 'show', this.onShowCalled);
                },
                getTemplate: function () {
                  return this.getOption('template');
                },
                serializeModel: function (model) {
                  return model.toJSON.apply(model, slice.call(arguments, 1));
                },
                mixinTemplateHelpers: function (target) {
                  target = target || {};
                  var templateHelpers = this.getOption('templateHelpers');
                  if (_.isFunction(templateHelpers)) {
                    templateHelpers = templateHelpers.call(this);
                  }
                  return _.extend(target, templateHelpers);
                },
                normalizeUIKeys: function (hash) {
                  var ui = _.result(this, 'ui');
                  var uiBindings = _.result(this, '_uiBindings');
                  return Marionette.normalizeUIKeys(hash, uiBindings || ui);
                },
                normalizeUIValues: function (hash) {
                  var ui = _.result(this, 'ui');
                  var uiBindings = _.result(this, '_uiBindings');
                  return Marionette.normalizeUIValues(hash, uiBindings || ui);
                },
                configureTriggers: function () {
                  if (!this.triggers) {
                    return;
                  }
                  var triggerEvents = {};
                  var triggers = this.normalizeUIKeys(_.result(this, 'triggers'));
                  _.each(
                    triggers,
                    function (value, key) {
                      triggerEvents[key] = this._buildViewTrigger(value);
                    },
                    this
                  );
                  return triggerEvents;
                },
                delegateEvents: function (events) {
                  this._delegateDOMEvents(events);
                  this.bindEntityEvents(this.model, this.getOption('modelEvents'));
                  this.bindEntityEvents(this.collection, this.getOption('collectionEvents'));
                  _.each(
                    this._behaviors,
                    function (behavior) {
                      behavior.bindEntityEvents(this.model, behavior.getOption('modelEvents'));
                      behavior.bindEntityEvents(
                        this.collection,
                        behavior.getOption('collectionEvents')
                      );
                    },
                    this
                  );
                  return this;
                },
                _delegateDOMEvents: function (eventsArg) {
                  var events = eventsArg || this.events;
                  if (_.isFunction(events)) {
                    events = events.call(this);
                  }
                  events = this.normalizeUIKeys(events);
                  if (_.isUndefined(eventsArg)) {
                    this.events = events;
                  }
                  var combinedEvents = {};
                  var behaviorEvents = _.result(this, 'behaviorEvents') || {};
                  var triggers = this.configureTriggers();
                  var behaviorTriggers = _.result(this, 'behaviorTriggers') || {};
                  _.extend(combinedEvents, behaviorEvents, events, triggers, behaviorTriggers);
                  Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
                },
                undelegateEvents: function () {
                  var args = slice.call(arguments);
                  Backbone.View.prototype.undelegateEvents.apply(this, args);
                  this.unbindEntityEvents(this.model, this.getOption('modelEvents'));
                  this.unbindEntityEvents(this.collection, this.getOption('collectionEvents'));
                  _.each(
                    this._behaviors,
                    function (behavior) {
                      behavior.unbindEntityEvents(this.model, behavior.getOption('modelEvents'));
                      behavior.unbindEntityEvents(
                        this.collection,
                        behavior.getOption('collectionEvents')
                      );
                    },
                    this
                  );
                  return this;
                },
                onShowCalled: function () {},
                _ensureViewIsIntact: function () {
                  if (this.isDestroyed) {
                    throw new Marionette.Error({
                      name: 'ViewDestroyedError',
                      message:
                        'View (cid: "' +
                        this.cid +
                        '") has already been destroyed and cannot be used.',
                    });
                  }
                },
                destroy: function () {
                  if (this.isDestroyed) {
                    return;
                  }
                  var args = slice.call(arguments);
                  this.triggerMethod.apply(this, ['before:destroy'].concat(args));
                  this.isDestroyed = true;
                  this.triggerMethod.apply(this, ['destroy'].concat(args));
                  this.unbindUIElements();
                  this.remove();
                  _.invoke(this._behaviors, 'destroy', args);
                  return this;
                },
                bindUIElements: function () {
                  this._bindUIElements();
                  _.invoke(this._behaviors, this._bindUIElements);
                },
                _bindUIElements: function () {
                  if (!this.ui) {
                    return;
                  }
                  if (!this._uiBindings) {
                    this._uiBindings = this.ui;
                  }
                  var bindings = _.result(this, '_uiBindings');
                  this.ui = {};
                  _.each(
                    _.keys(bindings),
                    function (key) {
                      var selector = bindings[key];
                      this.ui[key] = this.$(selector);
                    },
                    this
                  );
                },
                unbindUIElements: function () {
                  this._unbindUIElements();
                  _.invoke(this._behaviors, this._unbindUIElements);
                },
                _unbindUIElements: function () {
                  if (!this.ui || !this._uiBindings) {
                    return;
                  }
                  _.each(
                    this.ui,
                    function ($el, name) {
                      delete this.ui[name];
                    },
                    this
                  );
                  this.ui = this._uiBindings;
                  delete this._uiBindings;
                },
                _buildViewTrigger: function (triggerDef) {
                  var hasOptions = _.isObject(triggerDef);
                  var options = _.defaults({}, hasOptions ? triggerDef : {}, {
                    preventDefault: true,
                    stopPropagation: true,
                  });
                  var eventName = hasOptions ? options.event : triggerDef;
                  return function (e) {
                    if (e) {
                      if (e.preventDefault && options.preventDefault) {
                        e.preventDefault();
                      }
                      if (e.stopPropagation && options.stopPropagation) {
                        e.stopPropagation();
                      }
                    }
                    var args = { view: this, model: this.model, collection: this.collection };
                    this.triggerMethod(eventName, args);
                  };
                },
                setElement: function () {
                  var ret = Backbone.View.prototype.setElement.apply(this, arguments);
                  _.invoke(this._behaviors, 'proxyViewProperties', this);
                  return ret;
                },
                triggerMethod: function () {
                  var args = arguments;
                  var triggerMethod = Marionette.triggerMethod;
                  var ret = triggerMethod.apply(this, args);
                  _.each(this._behaviors, function (b) {
                    triggerMethod.apply(b, args);
                  });
                  return ret;
                },
                normalizeMethods: Marionette.normalizeMethods,
                getOption: Marionette.proxyGetOption,
                bindEntityEvents: Marionette.proxyBindEntityEvents,
                unbindEntityEvents: Marionette.proxyUnbindEntityEvents,
              });
              Marionette.ItemView = Marionette.View.extend({
                constructor: function () {
                  Marionette.View.apply(this, arguments);
                },
                serializeData: function () {
                  var data = {};
                  if (this.model) {
                    data = _.partial(this.serializeModel, this.model).apply(this, arguments);
                  } else {
                    if (this.collection) {
                      data = {
                        items: _.partial(this.serializeCollection, this.collection).apply(
                          this,
                          arguments
                        ),
                      };
                    }
                  }
                  return data;
                },
                serializeCollection: function (collection) {
                  return collection.toJSON.apply(collection, slice.call(arguments, 1));
                },
                render: function () {
                  this._ensureViewIsIntact();
                  this.triggerMethod('before:render', this);
                  this._renderTemplate();
                  this.bindUIElements();
                  this.triggerMethod('render', this);
                  return this;
                },
                _renderTemplate: function () {
                  var template = this.getTemplate();
                  if (template === false) {
                    return;
                  }
                  if (!template) {
                    throw new Marionette.Error({
                      name: 'UndefinedTemplateError',
                      message: 'Cannot render the template since it is null or undefined.',
                    });
                  }
                  var data = this.serializeData();
                  data = this.mixinTemplateHelpers(data);
                  var html = Marionette.Renderer.render(template, data, this);
                  this.attachElContent(html);
                  return this;
                },
                attachElContent: function (html) {
                  this.$el.html(html);
                  return this;
                },
                destroy: function () {
                  if (this.isDestroyed) {
                    return;
                  }
                  return Marionette.View.prototype.destroy.apply(this, arguments);
                },
              });
              Marionette.CollectionView = Marionette.View.extend({
                childViewEventPrefix: 'childview',
                constructor: function (options) {
                  var initOptions = options || {};
                  this.sort = _.isUndefined(initOptions.sort) ? true : initOptions.sort;
                  if (
                    initOptions.collection &&
                    !(initOptions.collection instanceof Backbone.Collection)
                  ) {
                    throw new Marionette.Error(
                      'The Collection option passed to this view needs to be an instance of a Backbone.Collection'
                    );
                  }
                  this.once('render', this._initialEvents);
                  this._initChildViewStorage();
                  Marionette.View.apply(this, arguments);
                  this.initRenderBuffer();
                },
                initRenderBuffer: function () {
                  this.elBuffer = document.createDocumentFragment();
                  this._bufferedChildren = [];
                },
                startBuffering: function () {
                  this.initRenderBuffer();
                  this.isBuffering = true;
                },
                endBuffering: function () {
                  this.isBuffering = false;
                  this._triggerBeforeShowBufferedChildren();
                  this.attachBuffer(this, this.elBuffer);
                  this._triggerShowBufferedChildren();
                  this.initRenderBuffer();
                },
                _triggerBeforeShowBufferedChildren: function () {
                  if (this._isShown) {
                    _.each(
                      this._bufferedChildren,
                      _.partial(this._triggerMethodOnChild, 'before:show')
                    );
                  }
                },
                _triggerShowBufferedChildren: function () {
                  if (this._isShown) {
                    _.each(this._bufferedChildren, _.partial(this._triggerMethodOnChild, 'show'));
                    this._bufferedChildren = [];
                  }
                },
                _triggerMethodOnChild: function (event, childView) {
                  Marionette.triggerMethodOn(childView, event);
                },
                _initialEvents: function () {
                  if (this.collection) {
                    this.listenTo(this.collection, 'add', this._onCollectionAdd);
                    this.listenTo(this.collection, 'remove', this._onCollectionRemove);
                    this.listenTo(this.collection, 'reset', this.render);
                    if (this.sort) {
                      this.listenTo(this.collection, 'sort', this._sortViews);
                    }
                  }
                },
                _onCollectionAdd: function (child) {
                  this.destroyEmptyView();
                  var ChildView = this.getChildView(child);
                  var index = this.collection.indexOf(child);
                  this.addChild(child, ChildView, index);
                },
                _onCollectionRemove: function (model) {
                  var view = this.children.findByModel(model);
                  this.removeChildView(view);
                  this.checkEmpty();
                },
                onShowCalled: function () {
                  this.children.each(_.partial(this._triggerMethodOnChild, 'show'));
                },
                render: function () {
                  this._ensureViewIsIntact();
                  this.triggerMethod('before:render', this);
                  this._renderChildren();
                  this.triggerMethod('render', this);
                  return this;
                },
                resortView: function () {
                  this.render();
                },
                _sortViews: function () {
                  var orderChanged = this.collection.find(function (item, index) {
                    var view = this.children.findByModel(item);
                    return !view || view._index !== index;
                  }, this);
                  if (orderChanged) {
                    this.resortView();
                  }
                },
                _renderChildren: function () {
                  this.destroyEmptyView();
                  this.destroyChildren();
                  if (this.isEmpty(this.collection)) {
                    this.showEmptyView();
                  } else {
                    this.triggerMethod('before:render:collection', this);
                    this.startBuffering();
                    this.showCollection();
                    this.endBuffering();
                    this.triggerMethod('render:collection', this);
                  }
                },
                showCollection: function () {
                  var ChildView;
                  this.collection.each(function (child, index) {
                    ChildView = this.getChildView(child);
                    this.addChild(child, ChildView, index);
                  }, this);
                },
                showEmptyView: function () {
                  var EmptyView = this.getEmptyView();
                  if (EmptyView && !this._showingEmptyView) {
                    this.triggerMethod('before:render:empty');
                    this._showingEmptyView = true;
                    var model = new Backbone.Model();
                    this.addEmptyView(model, EmptyView);
                    this.triggerMethod('render:empty');
                  }
                },
                destroyEmptyView: function () {
                  if (this._showingEmptyView) {
                    this.triggerMethod('before:remove:empty');
                    this.destroyChildren();
                    delete this._showingEmptyView;
                    this.triggerMethod('remove:empty');
                  }
                },
                getEmptyView: function () {
                  return this.getOption('emptyView');
                },
                addEmptyView: function (child, EmptyView) {
                  var emptyViewOptions =
                    this.getOption('emptyViewOptions') || this.getOption('childViewOptions');
                  if (_.isFunction(emptyViewOptions)) {
                    emptyViewOptions = emptyViewOptions.call(this);
                  }
                  var view = this.buildChildView(child, EmptyView, emptyViewOptions);
                  this.proxyChildEvents(view);
                  if (this._isShown) {
                    Marionette.triggerMethodOn(view, 'before:show');
                  }
                  this.children.add(view);
                  this.renderChildView(view, -1);
                  if (this._isShown) {
                    Marionette.triggerMethodOn(view, 'show');
                  }
                },
                getChildView: function (child) {
                  var childView = this.getOption('childView');
                  if (!childView) {
                    throw new Marionette.Error({
                      name: 'NoChildViewError',
                      message: 'A "childView" must be specified',
                    });
                  }
                  return childView;
                },
                addChild: function (child, ChildView, index) {
                  var childViewOptions = this.getOption('childViewOptions');
                  if (_.isFunction(childViewOptions)) {
                    childViewOptions = childViewOptions.call(this, child, index);
                  }
                  var view = this.buildChildView(child, ChildView, childViewOptions);
                  this._updateIndices(view, true, index);
                  this._addChildView(view, index);
                  return view;
                },
                _updateIndices: function (view, increment, index) {
                  if (!this.sort) {
                    return;
                  }
                  if (increment) {
                    view._index = index;
                    this.children.each(function (laterView) {
                      if (laterView._index >= view._index) {
                        laterView._index++;
                      }
                    });
                  } else {
                    this.children.each(function (laterView) {
                      if (laterView._index >= view._index) {
                        laterView._index--;
                      }
                    });
                  }
                },
                _addChildView: function (view, index) {
                  this.proxyChildEvents(view);
                  this.triggerMethod('before:add:child', view);
                  this.children.add(view);
                  this.renderChildView(view, index);
                  if (this._isShown && !this.isBuffering) {
                    Marionette.triggerMethodOn(view, 'show');
                  }
                  this.triggerMethod('add:child', view);
                },
                renderChildView: function (view, index) {
                  view.render();
                  this.attachHtml(this, view, index);
                  return view;
                },
                buildChildView: function (child, ChildViewClass, childViewOptions) {
                  var options = _.extend({ model: child }, childViewOptions);
                  return new ChildViewClass(options);
                },
                removeChildView: function (view) {
                  if (view) {
                    this.triggerMethod('before:remove:child', view);
                    if (view.destroy) {
                      view.destroy();
                    } else {
                      if (view.remove) {
                        view.remove();
                      }
                    }
                    this.stopListening(view);
                    this.children.remove(view);
                    this.triggerMethod('remove:child', view);
                    this._updateIndices(view, false);
                  }
                  return view;
                },
                isEmpty: function () {
                  return !this.collection || this.collection.length === 0;
                },
                checkEmpty: function () {
                  if (this.isEmpty(this.collection)) {
                    this.showEmptyView();
                  }
                },
                attachBuffer: function (collectionView, buffer) {
                  collectionView.$el.append(buffer);
                },
                attachHtml: function (collectionView, childView, index) {
                  if (collectionView.isBuffering) {
                    collectionView.elBuffer.appendChild(childView.el);
                    collectionView._bufferedChildren.push(childView);
                  } else {
                    if (!collectionView._insertBefore(childView, index)) {
                      collectionView._insertAfter(childView);
                    }
                  }
                },
                _insertBefore: function (childView, index) {
                  var currentView;
                  var findPosition = this.sort && index < this.children.length - 1;
                  if (findPosition) {
                    currentView = this.children.find(function (view) {
                      return view._index === index + 1;
                    });
                  }
                  if (currentView) {
                    currentView.$el.before(childView.el);
                    return true;
                  }
                  return false;
                },
                _insertAfter: function (childView) {
                  this.$el.append(childView.el);
                },
                _initChildViewStorage: function () {
                  this.children = new Backbone.ChildViewContainer();
                },
                destroy: function () {
                  if (this.isDestroyed) {
                    return;
                  }
                  this.triggerMethod('before:destroy:collection');
                  this.destroyChildren();
                  this.triggerMethod('destroy:collection');
                  return Marionette.View.prototype.destroy.apply(this, arguments);
                },
                destroyChildren: function () {
                  var childViews = this.children.map(_.identity);
                  this.children.each(this.removeChildView, this);
                  this.checkEmpty();
                  return childViews;
                },
                proxyChildEvents: function (view) {
                  var prefix = this.getOption('childViewEventPrefix');
                  this.listenTo(
                    view,
                    'all',
                    function () {
                      var args = slice.call(arguments);
                      var rootEvent = args[0];
                      var childEvents = this.normalizeMethods(_.result(this, 'childEvents'));
                      args[0] = prefix + ':' + rootEvent;
                      args.splice(1, 0, view);
                      if (
                        typeof childEvents !== 'undefined' &&
                        _.isFunction(childEvents[rootEvent])
                      ) {
                        childEvents[rootEvent].apply(this, args.slice(1));
                      }
                      this.triggerMethod.apply(this, args);
                    },
                    this
                  );
                },
              });
              Marionette.CompositeView = Marionette.CollectionView.extend({
                constructor: function () {
                  Marionette.CollectionView.apply(this, arguments);
                },
                _initialEvents: function () {
                  if (this.collection) {
                    this.listenTo(this.collection, 'add', this._onCollectionAdd);
                    this.listenTo(this.collection, 'remove', this._onCollectionRemove);
                    this.listenTo(this.collection, 'reset', this._renderChildren);
                    if (this.sort) {
                      this.listenTo(this.collection, 'sort', this._sortViews);
                    }
                  }
                },
                getChildView: function (child) {
                  var childView = this.getOption('childView') || this.constructor;
                  if (!childView) {
                    throw new Marionette.Error({
                      name: 'NoChildViewError',
                      message: 'A "childView" must be specified',
                    });
                  }
                  return childView;
                },
                serializeData: function () {
                  var data = {};
                  if (this.model) {
                    data = _.partial(this.serializeModel, this.model).apply(this, arguments);
                  }
                  return data;
                },
                render: function () {
                  this._ensureViewIsIntact();
                  this.isRendered = true;
                  this.resetChildViewContainer();
                  this.triggerMethod('before:render', this);
                  this._renderTemplate();
                  this._renderChildren();
                  this.triggerMethod('render', this);
                  return this;
                },
                _renderChildren: function () {
                  if (this.isRendered) {
                    Marionette.CollectionView.prototype._renderChildren.call(this);
                  }
                },
                _renderTemplate: function () {
                  var data = {};
                  data = this.serializeData();
                  data = this.mixinTemplateHelpers(data);
                  this.triggerMethod('before:render:template');
                  var template = this.getTemplate();
                  var html = Marionette.Renderer.render(template, data, this);
                  this.attachElContent(html);
                  this.bindUIElements();
                  this.triggerMethod('render:template');
                },
                attachElContent: function (html) {
                  this.$el.html(html);
                  return this;
                },
                attachBuffer: function (compositeView, buffer) {
                  var $container = this.getChildViewContainer(compositeView);
                  $container.append(buffer);
                },
                _insertAfter: function (childView) {
                  var $container = this.getChildViewContainer(this);
                  $container.append(childView.el);
                },
                getChildViewContainer: function (containerView) {
                  if ('$childViewContainer' in containerView) {
                    return containerView.$childViewContainer;
                  }
                  var container;
                  var childViewContainer = Marionette.getOption(
                    containerView,
                    'childViewContainer'
                  );
                  if (childViewContainer) {
                    var selector = _.isFunction(childViewContainer)
                      ? childViewContainer.call(containerView)
                      : childViewContainer;
                    if (selector.charAt(0) === '@' && containerView.ui) {
                      container = containerView.ui[selector.substr(4)];
                    } else {
                      container = containerView.$(selector);
                    }
                    if (container.length <= 0) {
                      throw new Marionette.Error({
                        name: 'ChildViewContainerMissingError',
                        message:
                          'The specified "childViewContainer" was not found: ' +
                          containerView.childViewContainer,
                      });
                    }
                  } else {
                    container = containerView.$el;
                  }
                  containerView.$childViewContainer = container;
                  return container;
                },
                resetChildViewContainer: function () {
                  if (this.$childViewContainer) {
                    delete this.$childViewContainer;
                  }
                },
              });
              Marionette.LayoutView = Marionette.ItemView.extend({
                regionClass: Marionette.Region,
                constructor: function (options) {
                  options = options || {};
                  this._firstRender = true;
                  this._initializeRegions(options);
                  Marionette.ItemView.call(this, options);
                },
                render: function () {
                  this._ensureViewIsIntact();
                  if (this._firstRender) {
                    this._firstRender = false;
                  } else {
                    this._reInitializeRegions();
                  }
                  return Marionette.ItemView.prototype.render.apply(this, arguments);
                },
                destroy: function () {
                  if (this.isDestroyed) {
                    return this;
                  }
                  this.regionManager.destroy();
                  return Marionette.ItemView.prototype.destroy.apply(this, arguments);
                },
                addRegion: function (name, definition) {
                  this.triggerMethod('before:region:add', name);
                  var regions = {};
                  regions[name] = definition;
                  return this._buildRegions(regions)[name];
                },
                addRegions: function (regions) {
                  this.regions = _.extend({}, this.regions, regions);
                  return this._buildRegions(regions);
                },
                removeRegion: function (name) {
                  this.triggerMethod('before:region:remove', name);
                  delete this.regions[name];
                  return this.regionManager.removeRegion(name);
                },
                getRegion: function (region) {
                  return this.regionManager.get(region);
                },
                getRegions: function () {
                  return this.regionManager.getRegions();
                },
                _buildRegions: function (regions) {
                  var that = this;
                  var defaults = {
                    regionClass: this.getOption('regionClass'),
                    parentEl: function () {
                      return that.$el;
                    },
                  };
                  return this.regionManager.addRegions(regions, defaults);
                },
                _initializeRegions: function (options) {
                  var regions;
                  this._initRegionManager();
                  if (_.isFunction(this.regions)) {
                    regions = this.regions(options);
                  } else {
                    regions = this.regions || {};
                  }
                  var regionOptions = this.getOption.call(options, 'regions');
                  if (_.isFunction(regionOptions)) {
                    regionOptions = regionOptions.call(this, options);
                  }
                  _.extend(regions, regionOptions);
                  regions = this.normalizeUIValues(regions);
                  this.addRegions(regions);
                },
                _reInitializeRegions: function () {
                  this.regionManager.emptyRegions();
                  this.regionManager.each(function (region) {
                    region.reset();
                  });
                },
                getRegionManager: function () {
                  return new Marionette.RegionManager();
                },
                _initRegionManager: function () {
                  this.regionManager = this.getRegionManager();
                  this.listenTo(this.regionManager, 'before:add:region', function (name) {
                    this.triggerMethod('before:add:region', name);
                  });
                  this.listenTo(this.regionManager, 'add:region', function (name, region) {
                    this[name] = region;
                    this.triggerMethod('add:region', name, region);
                  });
                  this.listenTo(this.regionManager, 'before:remove:region', function (name) {
                    this.triggerMethod('before:remove:region', name);
                  });
                  this.listenTo(this.regionManager, 'remove:region', function (name, region) {
                    delete this[name];
                    this.triggerMethod('remove:region', name, region);
                  });
                },
              });
              Marionette.Behavior = (function (_, Backbone) {
                function Behavior (options, view) {
                  this.view = view;
                  this.defaults = _.result(this, 'defaults') || {};
                  this.options = _.extend({}, this.defaults, options);
                  this.$ = function () {
                    return this.view.$.apply(this.view, arguments);
                  };
                  this.initialize.apply(this, arguments);
                }
                _.extend(Behavior.prototype, Backbone.Events, {
                  initialize: function () {},
                  destroy: function () {
                    this.stopListening();
                  },
                  proxyViewProperties: function (view) {
                    this.$el = view.$el;
                    this.el = view.el;
                  },
                  triggerMethod: Marionette.triggerMethod,
                  getOption: Marionette.proxyGetOption,
                  bindEntityEvents: Marionette.proxyBindEntityEvents,
                  unbindEntityEvents: Marionette.proxyUnbindEntityEvents,
                });
                Behavior.extend = Marionette.extend;
                return Behavior;
              })(_, Backbone);
              Marionette.Behaviors = (function (Marionette, _) {
                function Behaviors (view, behaviors) {
                  if (!_.isObject(view.behaviors)) {
                    return {};
                  }
                  behaviors = Behaviors.parseBehaviors(
                    view,
                    behaviors || _.result(view, 'behaviors')
                  );
                  Behaviors.wrap(view, behaviors, _.keys(methods));
                  return behaviors;
                }
                var methods = {
                  behaviorTriggers: function (behaviorTriggers, behaviors) {
                    var triggerBuilder = new BehaviorTriggersBuilder(this, behaviors);
                    return triggerBuilder.buildBehaviorTriggers();
                  },
                  behaviorEvents: function (behaviorEvents, behaviors) {
                    var _behaviorsEvents = {};
                    var viewUI = _.result(this, 'ui');
                    _.each(behaviors, function (b, i) {
                      var _events = {};
                      var behaviorEvents = _.clone(_.result(b, 'events')) || {};
                      var behaviorUI = _.result(b, 'ui');
                      var ui = _.extend({}, viewUI, behaviorUI);
                      behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, ui);
                      _.each(_.keys(behaviorEvents), function (key) {
                        var whitespace = new Array(i + 2).join(' ');
                        var eventKey = key + whitespace;
                        var handler = _.isFunction(behaviorEvents[key])
                          ? behaviorEvents[key]
                          : b[behaviorEvents[key]];
                        _events[eventKey] = _.bind(handler, b);
                      });
                      _behaviorsEvents = _.extend(_behaviorsEvents, _events);
                    });
                    return _behaviorsEvents;
                  },
                };
                _.extend(Behaviors, {
                  behaviorsLookup: function () {
                    throw new Marionette.Error({
                      message: 'You must define where your behaviors are stored.',
                      url: 'marionette.behaviors.html#behaviorslookup',
                    });
                  },
                  getBehaviorClass: function (options, key) {
                    if (options.behaviorClass) {
                      return options.behaviorClass;
                    }
                    return _.isFunction(Behaviors.behaviorsLookup)
                      ? Behaviors.behaviorsLookup.apply(this, arguments)[key]
                      : Behaviors.behaviorsLookup[key];
                  },
                  parseBehaviors: function (view, behaviors) {
                    return _.chain(behaviors)
                      .map(function (options, key) {
                        var BehaviorClass = Behaviors.getBehaviorClass(options, key);
                        var behavior = new BehaviorClass(options, view);
                        var nestedBehaviors = Behaviors.parseBehaviors(
                          view,
                          _.result(behavior, 'behaviors')
                        );
                        return [behavior].concat(nestedBehaviors);
                      })
                      .flatten()
                      .value();
                  },
                  wrap: function (view, behaviors, methodNames) {
                    _.each(methodNames, function (methodName) {
                      view[methodName] = _.partial(
                        methods[methodName],
                        view[methodName],
                        behaviors
                      );
                    });
                  },
                });
                function BehaviorTriggersBuilder (view, behaviors) {
                  this._view = view;
                  this._viewUI = _.result(view, 'ui');
                  this._behaviors = behaviors;
                  this._triggers = {};
                }
                _.extend(BehaviorTriggersBuilder.prototype, {
                  buildBehaviorTriggers: function () {
                    _.each(this._behaviors, this._buildTriggerHandlersForBehavior, this);
                    return this._triggers;
                  },
                  _buildTriggerHandlersForBehavior: function (behavior, i) {
                    var ui = _.extend({}, this._viewUI, _.result(behavior, 'ui'));
                    var triggersHash = _.clone(_.result(behavior, 'triggers')) || {};
                    triggersHash = Marionette.normalizeUIKeys(triggersHash, ui);
                    _.each(
                      triggersHash,
                      _.partial(this._setHandlerForBehavior, behavior, i),
                      this
                    );
                  },
                  _setHandlerForBehavior: function (behavior, i, eventName, trigger) {
                    var triggerKey = trigger.replace(/^\S+/, function (triggerName) {
                      return triggerName + '.behaviortriggers' + i;
                    });
                    this._triggers[triggerKey] = this._view._buildViewTrigger(eventName);
                  },
                });
                return Behaviors;
              })(Marionette, _);
              Marionette.AppRouter = Backbone.Router.extend({
                constructor: function (options) {
                  Backbone.Router.apply(this, arguments);
                  this.options = options || {};
                  var appRoutes = this.getOption('appRoutes');
                  var controller = this._getController();
                  this.processAppRoutes(controller, appRoutes);
                  this.on('route', this._processOnRoute, this);
                },
                appRoute: function (route, methodName) {
                  var controller = this._getController();
                  this._addAppRoute(controller, route, methodName);
                },
                _processOnRoute: function (routeName, routeArgs) {
                  var routePath = _.invert(this.getOption('appRoutes'))[routeName];
                  if (_.isFunction(this.onRoute)) {
                    this.onRoute(routeName, routePath, routeArgs);
                  }
                },
                processAppRoutes: function (controller, appRoutes) {
                  if (!appRoutes) {
                    return;
                  }
                  var routeNames = _.keys(appRoutes).reverse();
                  _.each(
                    routeNames,
                    function (route) {
                      this._addAppRoute(controller, route, appRoutes[route]);
                    },
                    this
                  );
                },
                _getController: function () {
                  return this.getOption('controller');
                },
                _addAppRoute: function (controller, route, methodName) {
                  var method = controller[methodName];
                  if (!method) {
                    throw new Marionette.Error(
                      'Method "' + methodName + '" was not found on the controller'
                    );
                  }
                  this.route(route, methodName, _.bind(method, controller));
                },
                getOption: Marionette.proxyGetOption,
              });
              Marionette.Application = function (options) {
                this.options = options;
                this._initializeRegions(options);
                this._initCallbacks = new Marionette.Callbacks();
                this.submodules = {};
                _.extend(this, options);
                this._initChannel();
                this.initialize.apply(this, arguments);
              };
              _.extend(Marionette.Application.prototype, Backbone.Events, {
                initialize: function () {},
                execute: function () {
                  this.commands.execute.apply(this.commands, arguments);
                },
                request: function () {
                  return this.reqres.request.apply(this.reqres, arguments);
                },
                addInitializer: function (initializer) {
                  this._initCallbacks.add(initializer);
                },
                start: function (options) {
                  this.triggerMethod('before:start', options);
                  this._initCallbacks.run(options, this);
                  this.triggerMethod('start', options);
                },
                addRegions: function (regions) {
                  return this._regionManager.addRegions(regions);
                },
                emptyRegions: function () {
                  return this._regionManager.emptyRegions();
                },
                removeRegion: function (region) {
                  return this._regionManager.removeRegion(region);
                },
                getRegion: function (region) {
                  return this._regionManager.get(region);
                },
                getRegions: function () {
                  return this._regionManager.getRegions();
                },
                module: function (moduleNames, moduleDefinition) {
                  var ModuleClass = Marionette.Module.getClass(moduleDefinition);
                  var args = slice.call(arguments);
                  args.unshift(this);
                  return ModuleClass.create.apply(ModuleClass, args);
                },
                getRegionManager: function () {
                  return new Marionette.RegionManager();
                },
                _initializeRegions: function (options) {
                  var regions = _.isFunction(this.regions)
                    ? this.regions(options)
                    : this.regions || {};
                  this._initRegionManager();
                  var optionRegions = Marionette.getOption(options, 'regions');
                  if (_.isFunction(optionRegions)) {
                    optionRegions = optionRegions.call(this, options);
                  }
                  _.extend(regions, optionRegions);
                  this.addRegions(regions);
                  return this;
                },
                _initRegionManager: function () {
                  this._regionManager = this.getRegionManager();
                  this.listenTo(this._regionManager, 'before:add:region', function (name) {
                    this.triggerMethod('before:add:region', name);
                  });
                  this.listenTo(this._regionManager, 'add:region', function (name, region) {
                    this[name] = region;
                    this.triggerMethod('add:region', name, region);
                  });
                  this.listenTo(this._regionManager, 'before:remove:region', function (name) {
                    this.triggerMethod('before:remove:region', name);
                  });
                  this.listenTo(this._regionManager, 'remove:region', function (name, region) {
                    delete this[name];
                    this.triggerMethod('remove:region', name, region);
                  });
                },
                _initChannel: function () {
                  this.channelName = _.result(this, 'channelName') || 'global';
                  this.channel =
                    _.result(this, 'channel') || Backbone.Wreqr.radio.channel(this.channelName);
                  this.vent = _.result(this, 'vent') || this.channel.vent;
                  this.commands = _.result(this, 'commands') || this.channel.commands;
                  this.reqres = _.result(this, 'reqres') || this.channel.reqres;
                },
                triggerMethod: Marionette.triggerMethod,
                getOption: Marionette.proxyGetOption,
              });
              Marionette.Application.extend = Marionette.extend;
              Marionette.Module = function (moduleName, app, options) {
                this.moduleName = moduleName;
                this.options = _.extend({}, this.options, options);
                this.initialize = options.initialize || this.initialize;
                this.submodules = {};
                this._setupInitializersAndFinalizers();
                this.app = app;
                if (_.isFunction(this.initialize)) {
                  this.initialize(moduleName, app, this.options);
                }
              };
              Marionette.Module.extend = Marionette.extend;
              _.extend(Marionette.Module.prototype, Backbone.Events, {
                startWithParent: true,
                initialize: function () {},
                addInitializer: function (callback) {
                  this._initializerCallbacks.add(callback);
                },
                addFinalizer: function (callback) {
                  this._finalizerCallbacks.add(callback);
                },
                start: function (options) {
                  if (this._isInitialized) {
                    return;
                  }
                  _.each(this.submodules, function (mod) {
                    if (mod.startWithParent) {
                      mod.start(options);
                    }
                  });
                  this.triggerMethod('before:start', options);
                  this._initializerCallbacks.run(options, this);
                  this._isInitialized = true;
                  this.triggerMethod('start', options);
                },
                stop: function () {
                  if (!this._isInitialized) {
                    return;
                  }
                  this._isInitialized = false;
                  this.triggerMethod('before:stop');
                  _.each(this.submodules, function (mod) {
                    mod.stop();
                  });
                  this._finalizerCallbacks.run(undefined, this);
                  this._initializerCallbacks.reset();
                  this._finalizerCallbacks.reset();
                  this.triggerMethod('stop');
                },
                addDefinition: function (moduleDefinition, customArgs) {
                  this._runModuleDefinition(moduleDefinition, customArgs);
                },
                _runModuleDefinition: function (definition, customArgs) {
                  if (!definition) {
                    return;
                  }
                  var args = _.flatten([
                    this,
                    this.app,
                    Backbone,
                    Marionette,
                    Backbone.$,
                    _,
                    customArgs,
                  ]);
                  definition.apply(this, args);
                },
                _setupInitializersAndFinalizers: function () {
                  this._initializerCallbacks = new Marionette.Callbacks();
                  this._finalizerCallbacks = new Marionette.Callbacks();
                },
                triggerMethod: Marionette.triggerMethod,
              });
              _.extend(Marionette.Module, {
                create: function (app, moduleNames, moduleDefinition) {
                  var module = app;
                  var customArgs = slice.call(arguments);
                  customArgs.splice(0, 3);
                  moduleNames = moduleNames.split('.');
                  var length = moduleNames.length;
                  var moduleDefinitions = [];
                  moduleDefinitions[length - 1] = moduleDefinition;
                  _.each(
                    moduleNames,
                    function (moduleName, i) {
                      var parentModule = module;
                      module = this._getModule(parentModule, moduleName, app, moduleDefinition);
                      this._addModuleDefinition(
                        parentModule,
                        module,
                        moduleDefinitions[i],
                        customArgs
                      );
                    },
                    this
                  );
                  return module;
                },
                _getModule: function (parentModule, moduleName, app, def, args) {
                  var options = _.extend({}, def);
                  var ModuleClass = this.getClass(def);
                  var module = parentModule[moduleName];
                  if (!module) {
                    module = new ModuleClass(moduleName, app, options);
                    parentModule[moduleName] = module;
                    parentModule.submodules[moduleName] = module;
                  }
                  return module;
                },
                getClass: function (moduleDefinition) {
                  var ModuleClass = Marionette.Module;
                  if (!moduleDefinition) {
                    return ModuleClass;
                  }
                  if (moduleDefinition.prototype instanceof ModuleClass) {
                    return moduleDefinition;
                  }
                  return moduleDefinition.moduleClass || ModuleClass;
                },
                _addModuleDefinition: function (parentModule, module, def, args) {
                  var fn = this._getDefine(def);
                  var startWithParent = this._getStartWithParent(def, module);
                  if (fn) {
                    module.addDefinition(fn, args);
                  }
                  this._addStartWithParent(parentModule, module, startWithParent);
                },
                _getStartWithParent: function (def, module) {
                  var swp;
                  if (_.isFunction(def) && def.prototype instanceof Marionette.Module) {
                    swp = module.constructor.prototype.startWithParent;
                    return _.isUndefined(swp) ? true : swp;
                  }
                  if (_.isObject(def)) {
                    swp = def.startWithParent;
                    return _.isUndefined(swp) ? true : swp;
                  }
                  return true;
                },
                _getDefine: function (def) {
                  if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
                    return def;
                  }
                  if (_.isObject(def)) {
                    return def.define;
                  }
                  return null;
                },
                _addStartWithParent: function (parentModule, module, startWithParent) {
                  module.startWithParent = module.startWithParent && startWithParent;
                  if (!module.startWithParent || !!module.startWithParentIsConfigured) {
                    return;
                  }
                  module.startWithParentIsConfigured = true;
                  parentModule.addInitializer(function (options) {
                    if (module.startWithParent) {
                      module.start(options);
                    }
                  });
                },
              });
              return Marionette;
            });
            (function () {
              var Backbone;
              Backbone = dellpoc.lib.Backbone;
              dellpoc.lib.jsonp_sync = function (method, model, options) {
                switch (method) {
                  case 'read':
                    if (options.id) {
                      options.url = '' + model.url + '/' + options.id;
                    } else {
                      options.url = '' + model.url + '/';
                    }
                    break;
                  case 'create':
                    options.url = '' + model.url + '/add';
                    break;
                  case 'update':
                    options.url = '' + model.url + '/' + model.id + '/edit';
                }
                options.timeout = 4000;
                options.dataType = 'jsonp';
                options.type = 'GET';
                option.crossdomain = true;
                dellpoc.lib.Backbone.emulateJSON = true;
                return dellpoc.lib.Backbone.sync(method, model, options);
              };
            }.call(this));
            (function () {
              dellpoc.session = dellpoc.session || {};
              dellpoc.session.user = dellpoc.session.user || {};
              dellpoc.session.user.traits = dellpoc.session.user.traits || {};
            }.call(this));
            (function ($) {
              if (typeof String.prototype.trim !== 'function') {
                String.prototype.trim = function () {
                  return this.replace(/^\s+|\s+$/g, '');
                };
              }
              String.prototype.isNumeric = function () {
                return !isNaN(parseFloat(this)) && isFinite(this);
              };
              if (typeof String.prototype.startsWith !== 'function') {
                String.prototype.startsWith = function (str) {
                  return this.indexOf(str) === 0;
                };
              }
              var base64 = {};
              base64.PADCHAR = '=';
              base64.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
              base64.makeDOMException = function () {
                var e, tmp;
                try {
                  return new window.DOMException(window.DOMException.INVALID_VALUE);
                } catch (tmp) {
                  var ex = new window.Error('DOM Exception 5');
                  ex.code = ex.number = 5;
                  ex.name = ex.description = 'INVALID_CHARACTER_ERR';
                  ex.toString = function () {
                    return 'Error: ' + ex.name + ': ' + ex.message;
                  };
                  return ex;
                }
              };
              base64.getbyte64 = function (s, i) {
                var idx = base64.ALPHA.indexOf(s.charAt(i));
                if (idx === -1) {
                  throw base64.makeDOMException();
                }
                return idx;
              };
              base64.decode = function (s) {
                s = '' + s;
                var getbyte64 = base64.getbyte64;
                var pads, i, b10;
                var imax = s.length;
                if (imax === 0) {
                  return s;
                }
                if (imax % 4 !== 0) {
                  throw base64.makeDOMException();
                }
                pads = 0;
                if (s.charAt(imax - 1) === base64.PADCHAR) {
                  pads = 1;
                  if (s.charAt(imax - 2) === base64.PADCHAR) {
                    pads = 2;
                  }
                  imax -= 4;
                }
                var x = [];
                for (i = 0; i < imax; i += 4) {
                  b10 =
                    (getbyte64(s, i) << 18) |
                    (getbyte64(s, i + 1) << 12) |
                    (getbyte64(s, i + 2) << 6) |
                    getbyte64(s, i + 3);
                  x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255, b10 & 255));
                }
                switch (pads) {
                  case 1:
                    b10 =
                      (getbyte64(s, i) << 18) |
                      (getbyte64(s, i + 1) << 12) |
                      (getbyte64(s, i + 2) << 6);
                    x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255));
                    break;
                  case 2:
                    b10 = (getbyte64(s, i) << 18) | (getbyte64(s, i + 1) << 12);
                    x.push(String.fromCharCode(b10 >> 16));
                    break;
                }
                return x.join('');
              };
              base64.getbyte = function (s, i) {
                var x = s.charCodeAt(i);
                if (x > 255) {
                  throw base64.makeDOMException();
                }
                return x;
              };
              var PageDetection = function () {
                var bootstrapPageDetection,
                  cookieReader,
                  env,
                  fetchCustomerSet,
                  fetchPageType,
                  hostMapper,
                  initialize,
                  isHostSupported,
                  metaTagReader,
                  pageData,
                  populatePageData,
                  sessionId,
                  setupAddToCartPage,
                  setupCategoryPage,
                  setupCommonVariables,
                  setupErrorPage,
                  setupHomePage,
                  setupItemPage,
                  setupSearchPage,
                  setupThankYouPage,
                  supportedHosts,
                  urlReader,
                  version,
                  waitForDom;
                cookieReader = new PageDetection.CookieReader();
                hostMapper = new PageDetection.HostMapper();
                env = hostMapper.determineEnvironment();
                pageData = {
                  category: '',
                  country: 'us',
                  customerSet: '',
                  isMagnumPage: typeof $ === 'function' ? $('.mag').length > 0 : false,
                  itemId: '',
                  itemName: '',
                  language: 'en',
                  metricsPath: '',
                  pageType: '',
                  purchaseId: '',
                  recentlyPurchased: [],
                  segment: '',
                };
                supportedHosts = [
                  'dell.com',
                  'accessories.dell.com',
                  'accessories.us.dell.com',
                  'configure.us.dell.com',
                  'ecomm.dell.com',
                  'search.dell.com',
                  'www.dell.com',
                ];
                urlReader = new PageDetection.UrlReader();
                version = '2014.04.22.00';
                bootstrapPageDetection = function () {
                  var pageType;
                  metaTagReader = new PageDetection.MetaTagReader();
                  pageType = fetchPageType();
                  switch (pageType) {
                    case PageDetection.Pages.addToCartPage:
                      setupAddToCartPage();
                      break;
                    case PageDetection.Pages.itemPage:
                      setupItemPage();
                      break;
                  }
                  dellpoc.lib.pageDetection.pageData = pageData;
                };
                fetchCustomerSet = function () {
                  var rbiRpi, dus, dusCookie, rbiRpiCookie, urlParts;
                  urlParts =
                    window.location.search !== ''
                      ? window.location.search
                          .substring(1, window.location.search.length)
                          .split('&')
                      : null;
                  rbiRpiCookie = cookieReader.readCookie('RBI_RPI');
                  if (typeof urlParts !== 'undefined' && urlParts !== null) {
                    for (var i = 0; i < urlParts.length; i++) {
                      var kv = urlParts[i].split('=');
                      if (kv[0].toLowerCase() === 'cs') {
                        return kv[1];
                      }
                      if (kv[0].toLowerCase() === 's') {
                        if (kv[1].toLowerCase() === 'bsd') {
                          return '04';
                        } else {
                          if (kv[1].toLowerCase() === 'dhs') {
                            return '19';
                          }
                        }
                      }
                    }
                  }
                  if (rbiRpiCookie === null) {
                    dusCookie = cookieReader.readCookie('dus');
                    if (typeof dusCookie !== 'undefined' && dusCookie === null) {
                      return '19';
                    } else {
                      dus = decodeURIComponent(dusCookie);
                      if (dus.indexOf('business') !== -1) {
                        return '04';
                      } else {
                        if (dus.indexOf('ci=') !== -1) {
                          return '04';
                        } else {
                          if (dus.indexOf('consumer') !== -1) {
                            return '19';
                          } else {
                            return '19';
                          }
                        }
                      }
                    }
                  } else {
                    if (typeof rbiRpiCookie === 'undefined') {
                      return '19';
                    }
                    try {
                      rbiRpi = JSON.parse(decodeURIComponent(rbiRpiCookie));
                    } catch (err) {
                      rbiRpi = {};
                    }
                    if (
                      typeof rbiRpi.rbi !== 'undefined' &&
                      typeof rbiRpi.rbi.cs !== 'undefined'
                    ) {
                      return rbiRpi.rbi.cs;
                    } else {
                      return '19';
                    }
                  }
                };
                fetchPageType = function () {
                  if (pageData.pageType !== '') {
                    return pageData.pageType;
                  }
                  var metaContent, metricsPath, pageType, category;
                  category = metaTagReader.fetchContentFor('CategoryPath').trim();
                  metaContent = metaTagReader.fetchContentFor('PageType').trim();
                  pageType = '';
                  if (hostMapper.isSearchSite()) {
                    pageType = PageDetection.Pages.searchPage;
                  } else {
                    if (window.location.href.indexOf('thankyou.aspx') !== -1) {
                      pageType = PageDetection.Pages.thankYouPage;
                    } else {
                      if (window.location.href.indexOf('error.aspx') !== -1) {
                        pageType = PageDetection.Pages.errorPage;
                      } else {
                        if (
                          window.location.href.indexOf('/ea?') !== -1 ||
                          window.location.href.indexOf('/CandyAisle.aspx') !== -1 ||
                          window.location.href.indexOf('/basket.aspx') !== -1
                        ) {
                          pageType = PageDetection.Pages.addToCartPage;
                        } else {
                          if (metaContent !== '') {
                            switch (metaContent) {
                              case 'category':
                                pageType = PageDetection.Pages.categoryPage;
                                break;
                              case 'product':
                                pageType = PageDetection.Pages.itemPage;
                                break;
                            }
                          } else {
                            var end, start;
                            metaContent = metaTagReader.fetchContentFor('ProdCat');
                            switch (metaContent) {
                              case 'off':
                                pageType = PageDetection.Pages.homePage;
                                break;
                              default:
                                metricsPath = metaTagReader.fetchContentFor('MetricsPath');
                                if (hostMapper.isAccessoriesSite()) {
                                  pageData.isMagnumPage = false;
                                }
                                if (
                                  hostMapper.isAccessoriesSite() &&
                                  metricsPath.lastIndexOf('sna^default') !== -1
                                ) {
                                  category = '2999';
                                  pageType = PageDetection.Pages.categoryPage;
                                } else {
                                  if (metricsPath.lastIndexOf('[~topic=') !== -1) {
                                    end = metricsPath.length;
                                    start =
                                      metricsPath.lastIndexOf('[~topic=') + '[~topic='.length;
                                    category = metricsPath.substring(start, end);
                                    category = category.replace(/[\[]+/, '');
                                    category = category.replace(/[\]]/, '');
                                    pageType = PageDetection.Pages.categoryPage;
                                  } else {
                                    if (metricsPath.lastIndexOf('[category_id=') !== -1) {
                                      end = metricsPath.length;
                                      start =
                                        metricsPath.lastIndexOf('[category_id=') +
                                        '[category_id='.length;
                                      category = metricsPath.substring(start, end);
                                      category = category.replace(/[\[]+/, '');
                                      category = category.replace(/[\]]/, '');
                                      pageType = PageDetection.Pages.categoryPage;
                                    } else {
                                      if (metricsPath.lastIndexOf('[sku=') !== -1) {
                                        end = metricsPath.length;
                                        start = metricsPath.lastIndexOf('[sku=') + '[sku='.length;
                                        category = metricsPath.substring(start, end);
                                        category = category.replace(/[\[]+/, '');
                                        category = category.replace(/[\]]/, '');
                                        pageData.itemId = category;
                                        pageType = PageDetection.Pages.itemPage;
                                      } else {
                                        if (metricsPath.lastIndexOf('[oc=') !== -1) {
                                          end = metricsPath.length;
                                          start = metricsPath.lastIndexOf('[oc=') + '[oc='.length;
                                          category = metricsPath.substring(start, end);
                                          category = category.replace(/[\[]+/, '');
                                          category = category.replace(/[\]]/, '');
                                          pageData.itemId = category;
                                          pageType = PageDetection.Pages.itemPage;
                                        }
                                      }
                                    }
                                  }
                                }
                                break;
                            }
                          }
                        }
                      }
                    }
                  }
                  populatePageData(pageType, category);
                  return pageType;
                };
                initialize = function () {
                  sessionId = cookieReader.readCookie('s_vi');
                  bootstrapPageDetection();
                };
                isHostSupported = function () {
                  for (var i = 0; i < supportedHosts.length; i++) {
                    if (window.location.host === supportedHosts[i]) {
                      return true;
                    }
                  }
                  return false;
                };
                populatePageData = function (pageType, category) {
                  var cookieData, i, timeThreshold, purchaseIdContainer, catParts, calculatedPrice;
                  timeThreshold = 2 * 60 * 1000;
                  pageData.category = category;
                  pageData.country = metaTagReader.fetchContentFor('Country');
                  pageData.customerSet = metaTagReader.fetchContentFor('CustomerSet');
                  pageData.language = metaTagReader.fetchContentFor('Language');
                  pageData.metricsPath = metaTagReader.fetchContentFor('MetricsPath');
                  pageData.pageType = pageType;
                  pageData.segment = metaTagReader.fetchContentFor('Segment');
                  if (typeof pageData.customerSet !== 'undefined') {
                    pageData.customerSet = fetchCustomerSet();
                    if (pageData.customerSet === '04') {
                      pageData.segment = 'bsd';
                    } else {
                      if (pageData.customerSet === '19') {
                        pageData.segment = 'dhs';
                      }
                    }
                  }
                  if (
                    typeof window.DELL !== 'undefined' &&
                    typeof window.DELL.com !== 'undefined' &&
                    typeof window.DELL.com.Delphi !== 'undefined' &&
                    typeof window.DELL.com.Delphi.PageSettings !== 'undefined' &&
                    typeof window.DELL.com.Delphi.PageSettings.mi !== 'undefined'
                  ) {
                    category = window.DELL.com.Delphi.PageSettings.mi.CategoryPath;
                    catParts = category.split('/');
                    if (catParts.length > 1) {
                      if (pageType === PageDetection.Pages.itemPage) {
                        category = catParts[catParts.length - 2];
                      } else {
                        category = catParts[catParts.length - 1];
                      }
                    }
                    pageData.category = category;
                  }
                  if (hostMapper.isAccessoriesSite() && pageData.customerSet === '') {
                    pageData.customerSet = urlReader.getParameter('cs');
                  }
                  if (pageType === PageDetection.Pages.thankYouPage) {
                    cookieData = cookieReader.readCookie('RBI_RPI');
                    purchaseIdContainer = $('.gridCell > .para > b');
                    pageData.purchaseId = $('b:contains("Your Dell Purchase ID is:")')
                      .parent()
                      .first()
                      .contents()
                      .filter(function () {
                        return this.nodeType == 3;
                      })
                      .eq(2)
                      .text()
                      .trim();
                    if (typeof cookieData !== 'undefined' && cookieData !== null) {
                      try {
                        cookieData = JSON.parse(decodeURIComponent(cookieData));
                      } catch (e) {
                        return;
                      }
                      if (
                        cookieData &&
                        typeof cookieData.rpi !== 'undefined' &&
                        typeof cookieData.rpi.snp !== 'undefined'
                      ) {
                        for (i = 0; i < cookieData.rpi.snp.length; i++) {
                          var snp = cookieData.rpi.snp[i];
                          if (new Date() - new Date(snp.timestamp) <= timeThreshold) {
                            if (snp.qty === 1) {
                              calculatedPrice = snp.price;
                            } else {
                              calculatedPrice =
                                snp.price !== 0 && snp.qty !== 0 ? snp.price / snp.qty : snp.price;
                            }
                            pageData.recentlyPurchased.push({
                              orderCode: snp.id,
                              model: snp.pvid,
                              quantity: snp.qty,
                              timestamp: snp.timestamp,
                              price: calculatedPrice,
                            });
                          }
                        }
                      }
                      if (
                        cookieData &&
                        typeof cookieData.rpi !== 'undefined' &&
                        typeof cookieData.rpi.systems !== 'undefined'
                      ) {
                        for (i = 0; i < cookieData.rpi.systems.length; i++) {
                          var system = cookieData.rpi.systems[i];
                          if (new Date() - new Date(system.timestamp) <= timeThreshold) {
                            if (system.qty === 1) {
                              calculatedPrice = system.price;
                            } else {
                              calculatedPrice =
                                system.price !== 0 && system.qty !== 0
                                  ? system.price / system.qty
                                  : system.price;
                            }
                            pageData.recentlyPurchased.push({
                              orderCode: system.id,
                              model: system.pvid,
                              quantity: system.qty,
                              timestamp: system.timestamp,
                              price: calculatedPrice,
                            });
                          }
                        }
                      }
                    }
                  }
                };
                setupAddToCartPage = function () {
                  var cookieData, parsedData, productCode;
                  cookieData = cookieReader.readCookie('CartID');
                  if (typeof cookieData !== 'undefined') {
                    parsedData = window.decodeURIComponent(
                      base64.decode(cookieData).replace(/\+/g, '%20')
                    );
                    productCode = $(parsedData).find('i:first').attr('i');
                    pageData.itemId = productCode;
                  }
                };
                setupItemPage = function () {
                  try {
                    var title;
                    title = metaTagReader.fetchContentFor('title');
                    if (title.length === 0) {
                      pageData.itemName = $('title').html();
                    }
                    if (window.location.host.indexOf('accessories.') !== -1) {
                      var href, parts;
                      href = $('ul.bCrumb li:last > a').attr('href');
                      if (href) {
                        parts = href.split('&');
                        for (var i = 0; i < parts.length; i++) {
                          if (parts[i].indexOf('category_id') === -1) {
                            continue;
                          }
                          pageData.category = parts[i].split('=')[1];
                          break;
                        }
                      }
                    } else {
                      pageData.itemId = urlReader.getParameter('oc');
                      pageData.itemName = urlReader.getParameter('model_id');
                    }
                  } catch (e) {}
                };
                waitForDom = function (next) {
                  var attempts, callBack, jQueryCallBack;
                  attempts = 5;
                  callBack = function () {
                    metaTagReader = new PageDetection.MetaTagReader();
                    if (
                      fetchPageType() !== PageDetection.Pages.homePage &&
                      fetchPageType() !== PageDetection.Pages.thankYouPage &&
                      fetchPageType() !== PageDetection.Pages.addToCartPage
                    ) {
                      if ($('ul.bCrumb li').length > 0) {
                        next();
                      } else {
                        if (attempts > 0) {
                          attempts--;
                          window.setTimeout(callBack, 300);
                        }
                      }
                    } else {
                      next();
                    }
                  };
                  jQueryCallBack = function () {
                    if (typeof window.jQuery !== 'undefined') {
                      var $ = window.jQuery;
                      attempts = 5;
                      window.setTimeout(callBack, 300);
                    } else {
                      if (attempts > 0) {
                        attempts--;
                        window.setTimeout(jQueryCallBack, 500);
                      }
                    }
                  };
                  jQueryCallBack();
                };
                return { initialize: initialize, version: version };
              };
              PageDetection.CookieReader = function () {
                var readCookie;
                readCookie = function (name) {
                  const $___old_dab632cd01a38a01 = {}.constructor.getOwnPropertyDescriptor(
                    Document.prototype,
                    'cookie'
                  );
                  try {
                    if ($___old_dab632cd01a38a01)
                      ({}.constructor.defineProperty(
                        Document.prototype,
                        'cookie',
                        $___stub_cdc5a54489618108.cookie
                      ));
                    return function () {
                      var nameEq = name + '=',
                        ca = document.cookie.split(';');
                      for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') {
                          c = c.substring(1, c.length);
                        }
                        if (c.indexOf(nameEq) === 0) {
                          return c.substring(nameEq.length, c.length);
                        }
                      }
                      return null;
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_dab632cd01a38a01)
                      ({}.constructor.defineProperty(
                        Document.prototype,
                        'cookie',
                        $___old_dab632cd01a38a01
                      ));
                  }
                };
                return { readCookie: readCookie };
              };
              PageDetection.HostMapper = function () {
                var determineEnvironment, isAccessoriesSite, isSearchSite, metaTagReader;
                metaTagReader = new PageDetection.MetaTagReader();
                determineEnvironment = function () {
                  return 'integration';
                };
                isAccessoriesSite = function () {
                  return (
                    metaTagReader
                      .fetchContentFor('MetricsPath')
                      .indexOf('accessories.us.dell.com') !== -1 ||
                    metaTagReader
                      .fetchContentFor('MetricsPath')
                      .indexOf('accessories.dell.com') !== -1
                  );
                };
                isSearchSite = function () {
                  return (
                    metaTagReader.fetchContentFor('MetricsPath').indexOf('search.dell.com') !== -1
                  );
                };
                return {
                  determineEnvironment: determineEnvironment,
                  isAccessoriesSite: isAccessoriesSite,
                  isSearchSite: isSearchSite,
                };
              };
              PageDetection.MetaTagReader = function () {
                var metaTags, fetchAll, fetchContentFor, initialize;
                metaTags = [];
                fetchAll = function () {
                  return metaTags;
                };
                fetchContentFor = function (name) {
                  var content = '';
                  for (var i = 0; i < metaTags.length; i++) {
                    var val = metaTags[i];
                    if (name.toLowerCase() === val.name) {
                      content = val.content;
                    }
                  }
                  return content;
                };
                initialize = function () {
                  if (typeof $ === 'function') {
                    $('meta').each(function (idx, val) {
                      var nameAttr, content;
                      nameAttr = $(this).attr('name');
                      content = $(this).attr('content');
                      if (nameAttr) {
                        if (
                          $.grep(metaTags, function (obj) {
                            return obj.name === nameAttr.toLowerCase();
                          }).length === 0
                        ) {
                          metaTags.push({ name: nameAttr.toLowerCase(), content: content });
                        }
                      }
                    });
                  } else {
                  }
                };
                initialize();
                return { fetchAll: fetchAll, fetchContentFor: fetchContentFor };
              };
              PageDetection.UrlReader = function () {
                var getParameter;
                getParameter = function (name) {
                  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
                    results = regex.exec(location.search);
                  return results === null
                    ? ''
                    : decodeURIComponent(results[1].replace(/\+/g, ' '));
                };
                return { getParameter: getParameter };
              };
              PageDetection.Pages = {
                brandPage: 'brand_page',
                addToCartPage: 'add_to_cart_page',
                categoryPage: 'category_page',
                errorPage: 'error_page',
                homePage: 'home_page',
                itemPage: 'item_page',
                searchPage: 'search_page',
                thankYouPage: 'purchase_complete_page',
              };
              window.dellpoc.lib.pageDetection = new PageDetection();
            })(dellpoc.lib.jQuery);
            (function () {
              dellpoc.analytics = dellpoc.analytics || {};
              dellpoc.analytics.check = function (callback) {
                var $;
                $ = dellpoc.lib.jQuery;
                if (callback) {
                  return callback(false);
                }
              };
            }.call(this));
            (function () {
              const $___old_95cf851e9d6fdc52 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              );
              try {
                if ($___old_95cf851e9d6fdc52)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_9417959baab2caf0.localStorage
                  ));
                return function () {
                  var attrKey, cleanKey, div;
                  dellpoc.Utils = {
                    logs: [],
                    logger: {
                      log: function (msg) {
                        dellpoc.Utils.logs.push('log:' + msg);
                        if (window.console) {
                          if (window.console.log) {
                            return window.console.log('log:' + msg);
                          }
                        }
                      },
                      info: function (msg) {
                        dellpoc.Utils.logs.push('info:' + msg);
                        if (window.console) {
                          if (window.console.info) {
                            return window.console.info('info:' + msg);
                          }
                        }
                      },
                      warn: function (msg) {
                        dellpoc.Utils.logs.push('warn:' + msg);
                        if (window.console) {
                          if (window.console.warn) {
                            return window.console.warn('warn:' + msg);
                          }
                        }
                      },
                      error: function (msg) {
                        dellpoc.Utils.logs.push('error:' + msg);
                        if (window.console) {
                          if (window.console.error) {
                            return window.console.error('error:' + msg);
                          }
                        }
                      },
                    },
                    isEmail: function (string) {
                      return /.+\@.+\..+/.test(string);
                    },
                    getParameterByName: function (name) {
                      var regex, regexS, results;
                      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                      regexS = '[\\?&]' + name + '=([^&#]*)';
                      regex = new RegExp(regexS);
                      results = regex.exec(window.location.search);
                      if (results == null) {
                        return '';
                      } else {
                        return decodeURIComponent(results[1].replace(/\+/g, ' '));
                      }
                    },
                    getRandomInt: function (min, max) {
                      return Math.floor(Math.random() * (max - min) + min);
                    },
                    timeSinceEvent: function (time) {
                      var current, date, day_diff, diff;
                      date = new Date(time).getTime();
                      current = new Date().getTime();
                      diff = (current - date) / 1000;
                      day_diff = Math.floor(diff / 86400);
                      if (isNaN(day_diff) || day_diff < 0) {
                        return 'now';
                      }
                      if (day_diff >= 31) {
                        return 'recently';
                      }
                      return (
                        (day_diff === 0 &&
                          ((diff < 60 && 'now') ||
                            (diff < 120 && '1 min') ||
                            (diff < 3600 && Math.floor(diff / 60) + ' mins') ||
                            (diff < 7200 && '1 hr') ||
                            (diff < 86400 && Math.floor(diff / 3600) + ' hrs'))) ||
                        (day_diff === 1 && '1 day') ||
                        (day_diff < 7 && day_diff + ' days') ||
                        (day_diff < 31 && Math.ceil(day_diff / 7) + ' wks')
                      );
                    },
                    template: function (html, obj) {
                      return html.replace(/{([^{}]*)}/g, function (a, b) {
                        var r;
                        r = obj[b];
                        if (typeof r === 'string') {
                          return r;
                        } else {
                          return '';
                        }
                      });
                    },
                    format_url: function (url, data) {
                      if (data) {
                        return url.replace(/{([^{}]*)}/g, function (a, b) {
                          return data[b];
                        });
                      } else {
                        return data;
                      }
                    },
                    truncate: function (str, count) {
                      var ellipsis, full_str, whats_left;
                      if (!str) {
                        return str;
                      }
                      str = str.replace(/\s+/g, ' ');
                      full_str = str.length + count;
                      whats_left = 55 - 3 - count;
                      if (str != null && full_str > whats_left) {
                        ellipsis = str.substr(0, whats_left) + '...';
                        str = ellipsis;
                        return str;
                      } else {
                        return str;
                      }
                    },
                    parse_url: function (url) {
                      var e, i, m, params, result, s, _i, _len;
                      result = {};
                      try {
                        i = url.indexOf('?');
                        if (i !== -1) {
                          url = url.substring(i + 1);
                          if (url) {
                            params = url.split('&');
                            for (_i = 0, _len = params.length; _i < _len; _i++) {
                              s = params[_i];
                              m = s.match('([^=]*)=(.*)');
                              if (m) {
                                result[m[1]] = decodeURIComponent(m[2]);
                              }
                            }
                          }
                        }
                      } catch (_error) {
                        e = _error;
                        dellpoc.Utils.logger.error(e);
                      }
                      return result;
                    },
                    strip_debug_script: function (url) {
                      var a, b, m, newUrl, path, re;
                      if (url.indexOf('debug_script') === -1) {
                        return url;
                      } else {
                        re = /([^\?]*)(\??(.*)((\&|\?)debug_script=[^\&]*\&?)(.*))/;
                        m = url.match(re);
                        if (m) {
                          if (m.length > 0) {
                            path = m[1];
                            b = m[3];
                            a = m[6];
                            newUrl = path;
                            if (b.length > 0) {
                              newUrl += '?' + b;
                              if (a.length > 0) {
                                newUrl += '&' + a;
                              }
                            } else {
                              if (a.length > 0) {
                                newUrl += '?' + a;
                              }
                            }
                            return newUrl;
                          }
                        }
                        return url;
                      }
                    },
                    detect_browser: function () {
                      const $___old_d96be8f7ba6393a4 = {}.constructor.getOwnPropertyDescriptor(
                        Navigator.prototype,
                        'userAgent'
                      );
                      try {
                        if ($___old_d96be8f7ba6393a4)
                          ({}.constructor.defineProperty(
                            Navigator.prototype,
                            'userAgent',
                            $___stub_addd751f0eb655f8.userAgent
                          ));
                        return function () {
                          var DOC,
                            check,
                            end,
                            result,
                            start,
                            ua,
                            versionEnd,
                            versionStart,
                            _ref,
                            _ref1,
                            _ref10,
                            _ref2,
                            _ref3,
                            _ref4,
                            _ref5,
                            _ref6,
                            _ref7,
                            _ref8,
                            _ref9;
                          ua = navigator.userAgent.toLowerCase();
                          check = function (r) {
                            return r.test(ua);
                          };
                          DOC = document;
                          result = {};
                          result.isStrict = DOC.compatMode === 'CSS1Compat';
                          result.isOpera = check(/opera/);
                          result.isChrome = check(/chrome/);
                          result.isWebKit = check(/webkit/);
                          result.isSafari = !result.isChrome && check(/safari/);
                          result.isSafari2 = result.isSafari && check(/applewebkit\/4/);
                          result.isSafari3 = result.isSafari && check(/version\/3/);
                          result.isSafari4 = result.isSafari && check(/version\/4/);
                          result.isIE = !result.isOpera && check(/msie/);
                          result.isIE7 = result.isIE && check(/msie 7/);
                          result.isIE8 = result.isIE && check(/msie 8/);
                          result.isIE6 = result.isIE && !result.isIE7 && !result.isIE8;
                          result.isGecko = !result.isWebKit && check(/gecko/);
                          result.isGecko2 = result.isGecko && check(/rv =1\.8/);
                          result.isGecko3 = result.isGecko && check(/rv =1\.9/);
                          result.isBorderBox = result.isIE && !result.isStrict;
                          result.isWindows = check(/windows|win32/);
                          result.isMac = check(/macintosh|mac os x/);
                          result.isAir = check(/adobeair/);
                          result.isLinux = check(/linux/);
                          result.isSecure = /^https/i.test(window.location.protocol);
                          result.isIE7InIE8 = result.isIE7 && DOC.documentMode === 7;
                          if (result.isWindows) {
                            result.osName = 'Windows';
                            if (check(/windows nt/)) {
                              start = ua.indexOf('windows nt');
                              end = ua.indexOf(';', start);
                              result.osName = ua.substring(start, end);
                            }
                          } else {
                            result.osName =
                              (_ref = result.isMac) != null
                                ? _ref
                                : {
                                    Mac:
                                      (_ref1 = result.isLinux) != null
                                        ? _ref1
                                        : { Linux: 'Other' },
                                  };
                          }
                          if (result.isIE) {
                            result.browserType = 'IE';
                            result.jsType = 'IE';
                            versionStart = ua.indexOf('msie') + 5;
                            versionEnd = ua.indexOf(';', versionStart);
                            result.browserVersion = ua.substring(versionStart, versionEnd);
                            result.jsType =
                              (_ref2 = result.isIE6) != null
                                ? _ref2
                                : {
                                    IE6:
                                      (_ref3 = result.isIE7) != null
                                        ? _ref3
                                        : {
                                            IE7:
                                              (_ref4 = result.isIE8) != null
                                                ? _ref4
                                                : { IE8: 'IE' },
                                          },
                                  };
                          } else {
                            if (result.isGecko) {
                              result.isFF = check(/firefox/);
                              result.browserType =
                                (_ref5 = result.isFF) != null ? _ref5 : { Firefox: 'Others' };
                              result.jsType =
                                (_ref6 = result.isGecko2) != null
                                  ? _ref6
                                  : {
                                      Gecko2:
                                        (_ref7 = result.isGecko3) != null
                                          ? _ref7
                                          : { Gecko3: 'Gecko' },
                                    };
                              if (result.isFF) {
                                versionStart = ua.indexOf('firefox') + 8;
                                versionEnd = ua.indexOf(' ', versionStart);
                                if (versionEnd === -1) {
                                  versionEnd = ua.length;
                                }
                                result.browserVersion = ua.substring(versionStart, versionEnd);
                              }
                            } else {
                              if (result.isChrome) {
                                result.browserType = 'Chrome';
                                result.jsType =
                                  (_ref8 = result.isWebKit) != null
                                    ? _ref8
                                    : { 'Web Kit': 'Other' };
                                versionStart = ua.indexOf('chrome') + 7;
                                versionEnd = ua.indexOf(' ', versionStart);
                                result.browserVersion = ua.substring(versionStart, versionEnd);
                              } else {
                                result.browserType =
                                  (_ref9 = result.isOpera) != null
                                    ? _ref9
                                    : {
                                        Opera:
                                          (_ref10 = result.isSafari) != null
                                            ? _ref10
                                            : { Safari: '' },
                                      };
                              }
                            }
                          }
                          return result;
                        }.apply(this, arguments);
                      } finally {
                        if ($___old_d96be8f7ba6393a4)
                          ({}.constructor.defineProperty(
                            Navigator.prototype,
                            'userAgent',
                            $___old_d96be8f7ba6393a4
                          ));
                      }
                    },
                    is_valid_url: function (url, check) {
                      var valid;
                      valid = false;
                      if (typeof check === 'string') {
                        if (url.indexOf(check) !== -1) {
                          valid = true;
                        }
                      } else {
                        if (check.test(url) !== -1) {
                          valid = true;
                        }
                      }
                      return valid;
                    },
                  };
                  if (Array.prototype.insert === void 0) {
                    Array.prototype.insert = function (index, item) {
                      return this.splice(index, 0, item);
                    };
                  }
                  if (!window.localStorage || typeof window.localStorage === 'undefined') {
                    div = window.document.createElement('div');
                    attrKey = 'localStorage';
                    cleanKey = void 0;
                    div.style.display = 'none';
                    window.document.getElementsByTagName('head')[0].appendChild(div);
                    if (div.addBehavior) {
                      div.addBehavior('#default#userdata');
                      window.localStorage = {
                        length: 0,
                        setItem: function (key, value) {
                          div.load(attrKey);
                          key = cleanKey(key);
                          if (!div.getAttribute(key)) {
                            this.length++;
                          }
                          div.setAttribute(key, value);
                          return div.save(attrKey);
                        },
                        getItem: function (key) {
                          div.load(attrKey);
                          key = cleanKey(key);
                          return div.getAttribute(key);
                        },
                        removeItem: function (key) {
                          div.load(attrKey);
                          key = cleanKey(key);
                          div.removeAttribute(key);
                          div.save(attrKey);
                          this.length--;
                          if (this.length < 0) {
                            return (this.length = 0);
                          }
                        },
                        clear: function () {
                          var attr, i;
                          i = 0;
                          div.load(attrKey);
                          while ((attr = div.XMLDocument.documentElement.attributes[i++])) {
                            div.removeAttribute(attr.name);
                          }
                          div.save(attrKey);
                          return (this.length = 0);
                        },
                        key: function (key) {
                          div.load(attrKey);
                          return div.XMLDocument.documentElement.attributes[key];
                        },
                      };
                      cleanKey = function (key) {
                        return key.replace(
                          /[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,
                          '-'
                        );
                      };
                      div.load(attrKey);
                      localStorage.length = div.XMLDocument.documentElement.attributes.length;
                    }
                  }
                }.apply(this, arguments);
              } finally {
                if ($___old_95cf851e9d6fdc52)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_95cf851e9d6fdc52
                  ));
              }
            }.call(this));
            try {
              var _ec_history = 0;
              var _ec_tests = 1;
              var _ec_debug = 0;
              var _link_rand = '&r=' + parseInt(Math.random() * 1000000);
              var _ecopts = {
                $:
                  window.dellpoc !== undefined &&
                  window.dellpoc.lib !== window.undefined &&
                  window.dellpoc.lib.jQuery !== undefined
                    ? window.dellpoc.lib.jQuery
                    : window.jQuery !== undefined
                    ? window.jQuery
                    : window.$,
                assetsPath: 'https://p.cdn.persaas.dell.com/eccdn',
                pngPath: 'https://insight.persaas.dell.com/api/v1/fp/ec/png',
                etagPath: 'https://insight.persaas.dell.com/api/v1/fp/ec/etag',
                cachePath: 'https://insight.persaas.dell.com/api/v1/fp/ec/cache',
                enableCacheLookup: false,
                enableEtagLookup: false,
                enablePngLookup: false,
                enableSilverlight: false,
                enableFlash: false,
              };
              function _ec_dump (arr, level) {
                var dumped_text = '';
                if (!level) {
                  level = 0;
                }
                var level_padding = '';
                for (var j = 0; j < level + 1; j++) {
                  level_padding += '    ';
                }
                if (typeof arr == 'object') {
                  for (var item in arr) {
                    var value = arr[item];
                    if (typeof value == 'object') {
                      dumped_text += level_padding + "'" + item + "' ...\n";
                      dumped_text += _ec_dump(value, level + 1);
                    } else {
                      dumped_text += level_padding + "'" + item + '\' => "' + value + '"\n';
                    }
                  }
                } else {
                  dumped_text = '===>' + arr + '<===(' + typeof arr + ')';
                }
                return dumped_text;
              }
              function _ec_replace (str, key, value) {
                if (str.indexOf('&' + key + '=') > -1 || str.indexOf(key + '=') == 0) {
                  var idx = str.indexOf('&' + key + '=');
                  if (idx == -1) {
                    idx = str.indexOf(key + '=');
                  }
                  var end = str.indexOf('&', idx + 1);
                  var newstr;
                  if (end != -1) {
                    newstr =
                      str.substr(0, idx) +
                      str.substr(end + (idx ? 0 : 1)) +
                      '&' +
                      key +
                      '=' +
                      value;
                  } else {
                    newstr = str.substr(0, idx) + '&' + key + '=' + value;
                  }
                  return newstr;
                } else {
                  return str + '&' + key + '=' + value;
                }
              }
              var _global_lso;
              function _persaas_flash_var (cookie) {
                _global_lso = cookie;
                var swf = _ecopts.$('#myswf');
                if (swf && swf.parentNode) {
                  swf.parentNode.removeChild(swf);
                }
              }
              dellpoc.lib.persaas = (function () {
                this._class = function () {
                  var self = this;
                  _baseKeyStr =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                  this._ec = {};
                  var no_color = -1;
                  this.get = function (name, cb) {
                    _ecopts.$(document).ready(function () {
                      self._persaas(name, cb, undefined, undefined, undefined);
                    });
                  };
                  this.set = function (name, value) {
                    _ecopts.$(document).ready(function () {
                      self._persaas(name, function () {}, value);
                    });
                  };
                  this._persaas = function (name, cb, value, i, dont_reset) {
                    if (typeof self._persaas == 'undefined') {
                      self = this;
                    }
                    if (typeof i == 'undefined') {
                      i = 0;
                    }
                    if (i == 0) {
                      self.persaas_database_storage(name, value);
                      if (_ecopts.enablePngLookup) {
                        self.persaas_png(name, value);
                      }
                      if (_ecopts.enableEtagLookup) {
                        self.persaas_etag(name, value);
                      }
                      if (_ecopts.enableCacheLookup) {
                        self.persaas_cache(name, value);
                      }
                      if (_ecopts.enableSilverlight) {
                        self.persaas_silverlight(name, value);
                      }
                      if (_ecopts.enableFlash) {
                        self.persaas_lso(name, value);
                      }
                      self._ec.userData = self.persaas_userdata(name, value);
                      self._ec.cookieData = self.persaas_cookie(name, value);
                      self._ec.localData = self.persaas_local_storage(name, value);
                      self._ec.globalData = self.persaas_global_storage(name, value);
                      self._ec.sessionData = self.persaas_session_storage(name, value);
                      self._ec.windowData = self.persaas_window(name, value);
                      if (_ec_history) {
                        self._ec.historyData = self.persaas_history(name, value);
                      }
                    }
                    if (typeof value != 'undefined') {
                      if (
                        (typeof _global_lso == 'undefined' ||
                          typeof _global_isolated == 'undefined') &&
                        i++ < _ec_tests
                      ) {
                        setTimeout(function () {
                          self._persaas(name, cb, value, i, dont_reset);
                        }, 300);
                      }
                    } else {
                      if (
                        ((window.openDatabase && typeof self._ec.dbData == 'undefined') ||
                          typeof _global_lso == 'undefined' ||
                          typeof self._ec.etagData == 'undefined' ||
                          typeof self._ec.cacheData == 'undefined' ||
                          (document.createElement('canvas').getContext &&
                            (typeof self._ec.pngData == 'undefined' || self._ec.pngData == '')) ||
                          typeof _global_isolated == 'undefined') &&
                        i++ < _ec_tests
                      ) {
                        setTimeout(function () {
                          self._persaas(name, cb, value, i, dont_reset);
                        }, 0);
                      } else {
                        self._ec.lsoData = self.getFromStr(name, _global_lso);
                        _global_lso = undefined;
                        self._ec.slData = self.getFromStr(name, _global_isolated);
                        _global_isolated = undefined;
                        var tmpec = self._ec;
                        self._ec = {};
                        var candidates = new Array();
                        var bestnum = 0;
                        var candidate;
                        for (var item in tmpec) {
                          if (
                            typeof tmpec[item] != 'undefined' &&
                            typeof tmpec[item] != 'null' &&
                            tmpec[item] != '' &&
                            tmpec[item] != 'null' &&
                            tmpec[item] != 'undefined' &&
                            tmpec[item] != null
                          ) {
                            candidates[tmpec[item]] =
                              typeof candidates[tmpec[item]] == 'undefined'
                                ? 1
                                : candidates[tmpec[item]] + 1;
                          }
                        }
                        for (var item in candidates) {
                          if (candidates[item] > bestnum) {
                            bestnum = candidates[item];
                            candidate = item;
                          }
                        }
                        if (typeof dont_reset == 'undefined' || dont_reset != 1) {
                          self.set(name, candidate);
                        }
                        if (typeof cb == 'function') {
                          cb(candidate, tmpec);
                        }
                      }
                    }
                  };
                  this.persaas_window = function (name, value) {
                    try {
                      if (typeof value != 'undefined') {
                        window.name = _ec_replace(window.name, name, value);
                      } else {
                        return this.getFromStr(name, window.name);
                      }
                    } catch (e) {}
                  };
                  this.persaas_userdata = function (name, value) {
                    try {
                      var elm = this.createElem('div', 'userdata_el', 1);
                      elm.style.behavior = 'url(#default#userData)';
                      if (typeof value != 'undefined') {
                        elm.setAttribute(name, value);
                        elm.save(name);
                      } else {
                        elm.load(name);
                        return elm.getAttribute(name);
                      }
                    } catch (e) {}
                  };
                  this.persaas_cache = function (name, value) {
                    if (typeof value != 'undefined') {
                      document.cookie = 'persaas_cache=' + value;
                      var img = new Image();
                      img.style.visibility = 'hidden';
                      img.style.position = 'absolute';
                      img.src = _ecopts.cachePath + '?name=' + name;
                    } else {
                      var origvalue = this.getFromStr('persaas_cache', document.cookie);
                      self._ec.cacheData = undefined;
                      document.cookie =
                        'persaas_cache=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/';
                      $.ajax({
                        url: _ecopts.cachePath + '?name=' + name,
                        success: function (data) {
                          document.cookie =
                            'persaas_cache=' +
                            origvalue +
                            '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';
                          self._ec.cacheData = data;
                        },
                      });
                    }
                  };
                  this.persaas_etag = function (name, value) {
                    if (typeof value != 'undefined') {
                      document.cookie = 'persaas_etag=' + value;
                      var img = new Image();
                      img.style.visibility = 'hidden';
                      img.style.position = 'absolute';
                      img.src = _ecopts.etagPath + '?name=' + name;
                    } else {
                      var origvalue = this.getFromStr('persaas_etag', document.cookie);
                      self._ec.etagData = undefined;
                      $.ajax({
                        url: _ecopts.etagPath + '?name=' + name,
                        success: function (data) {
                          document.cookie =
                            'persaas_etag=' +
                            origvalue +
                            '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';
                          self._ec.etagData = data;
                        },
                      });
                    }
                  };
                  this.persaas_lso = function (name, value) {
                    var div = document.getElementById('swfcontainer');
                    if (!div) {
                      div = document.createElement('div');
                      div.setAttribute('id', 'swfcontainer');
                      document.body.appendChild(div);
                    }
                    var flashvars = {};
                    if (typeof value != 'undefined') {
                      flashvars.everdata = name + '=' + value;
                    }
                    var params = {};
                    params.swliveconnect = 'true';
                    var attributes = {};
                    attributes.id = 'myswf';
                    attributes.name = 'myswf';
                    swfobject.embedSWF(
                      _ecopts.assetsPath + '/persaas.swf',
                      'swfcontainer',
                      '1',
                      '1',
                      '9.0.0',
                      false,
                      flashvars,
                      params,
                      attributes
                    );
                  };
                  this.persaas_png = function (name, value) {
                    if (document.createElement('canvas').getContext) {
                      if (typeof value != 'undefined') {
                        document.cookie = 'persaas_png=' + value;
                        var img = new Image();
                        img.style.visibility = 'hidden';
                        img.style.position = 'absolute';
                        img.src = _ecopts.pngPath + '?name=' + name;
                      } else {
                        self._ec.pngData = undefined;
                        var context = document.createElement('canvas');
                        context.style.visibility = 'hidden';
                        context.style.position = 'absolute';
                        context.width = 200;
                        context.height = 1;
                        var ctx = context.getContext('2d');
                        var origvalue = this.getFromStr('persaas_png', document.cookie);
                        document.cookie =
                          'persaas_png=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/';
                        var img = new Image();
                        img.style.visibility = 'hidden';
                        img.style.position = 'absolute';
                        img.src = _ecopts.pngPath + '?name=' + name;
                        img.onload = function () {
                          document.cookie =
                            'persaas_png=' +
                            origvalue +
                            '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';
                          self._ec.pngData = '';
                          ctx.drawImage(img, 0, 0);
                          var imgd = ctx.getImageData(0, 0, 200, 1);
                          var pix = imgd.data;
                          for (var i = 0, n = pix.length; i < n; i += 4) {
                            if (pix[i] == 0) {
                              break;
                            }
                            self._ec.pngData += String.fromCharCode(pix[i]);
                            if (pix[i + 1] == 0) {
                              break;
                            }
                            self._ec.pngData += String.fromCharCode(pix[i + 1]);
                            if (pix[i + 2] == 0) {
                              break;
                            }
                            self._ec.pngData += String.fromCharCode(pix[i + 2]);
                          }
                          self._ec.pngData = $.trim(self._ec.pngData);
                        };
                      }
                    }
                  };
                  this.persaas_local_storage = function (name, value) {
                    try {
                      if (window.localStorage) {
                        if (typeof value != 'undefined') {
                          localStorage.setItem(name, value);
                        } else {
                          return localStorage.getItem(name);
                        }
                      }
                    } catch (e) {}
                  };
                  this.persaas_database_storage = function (name, value) {
                    try {
                      if (window.openDatabase) {
                        var database = window.openDatabase(
                          'sqlite_persaas',
                          '',
                          'persaas',
                          1024 * 1024
                        );
                        if (typeof value != 'undefined') {
                          database.transaction(function (tx) {
                            tx.executeSql(
                              'CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))',
                              [],
                              function (tx, rs) {},
                              function (tx, err) {}
                            );
                            tx.executeSql(
                              'INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)',
                              [name, value],
                              function (tx, rs) {},
                              function (tx, err) {}
                            );
                          });
                        } else {
                          database.transaction(function (tx) {
                            tx.executeSql(
                              'SELECT value FROM cache WHERE name=?',
                              [name],
                              function (tx, result1) {
                                if (result1.rows.length >= 1) {
                                  self._ec.dbData = result1.rows.item(0)['value'];
                                } else {
                                  self._ec.dbData = '';
                                }
                              },
                              function (tx, err) {}
                            );
                          });
                        }
                      }
                    } catch (e) {}
                  };
                  this.persaas_session_storage = function (name, value) {
                    try {
                      if (window.sessionStorage) {
                        if (typeof value != 'undefined') {
                          sessionStorage.setItem(name, value);
                        } else {
                          return sessionStorage.getItem(name);
                        }
                      }
                    } catch (e) {}
                  };
                  this.persaas_global_storage = function (name, value) {
                    if (window.globalStorage) {
                      var host = this.getHost();
                      try {
                        if (typeof value != 'undefined') {
                          eval('globalStorage[host].' + name + ' = value');
                        } else {
                          return eval('globalStorage[host].' + name);
                        }
                      } catch (e) {}
                    }
                  };
                  this.persaas_silverlight = function (name, value) {
                    var source = _ecopts.assetsPath + '/persaas.xap';
                    var minver = '4.0.50401.0';
                    var initParam = '';
                    if (typeof value != 'undefined') {
                      initParam = '<param name="initParams" value="' + name + '=' + value + '" />';
                    }
                    var html =
                      '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="mysilverlight" width="0" height="0">' +
                      initParam +
                      '<param name="source" value="' +
                      source +
                      '"/><param name="onLoad" value="onSilverlightLoad"/><param name="onError" value="onSilverlightError"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="minRuntimeVersion" value="' +
                      minver +
                      '"/></object>';
                    document.body.innerHTML += html;
                  };
                  this.encode = function (input) {
                    var output = '';
                    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                    var i = 0;
                    input = this._utf8_encode(input);
                    while (i < input.length) {
                      chr1 = input.charCodeAt(i++);
                      chr2 = input.charCodeAt(i++);
                      chr3 = input.charCodeAt(i++);
                      enc1 = chr1 >> 2;
                      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                      enc4 = chr3 & 63;
                      if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                      } else {
                        if (isNaN(chr3)) {
                          enc4 = 64;
                        }
                      }
                      output =
                        output +
                        _baseKeyStr.charAt(enc1) +
                        _baseKeyStr.charAt(enc2) +
                        _baseKeyStr.charAt(enc3) +
                        _baseKeyStr.charAt(enc4);
                    }
                    return output;
                  };
                  this.decode = function (input) {
                    var output = '';
                    var chr1, chr2, chr3;
                    var enc1, enc2, enc3, enc4;
                    var i = 0;
                    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
                    while (i < input.length) {
                      enc1 = _baseKeyStr.indexOf(input.charAt(i++));
                      enc2 = _baseKeyStr.indexOf(input.charAt(i++));
                      enc3 = _baseKeyStr.indexOf(input.charAt(i++));
                      enc4 = _baseKeyStr.indexOf(input.charAt(i++));
                      chr1 = (enc1 << 2) | (enc2 >> 4);
                      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                      chr3 = ((enc3 & 3) << 6) | enc4;
                      output = output + String.fromCharCode(chr1);
                      if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                      }
                      if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                      }
                    }
                    output = this._utf8_decode(output);
                    return output;
                  };
                  this._utf8_encode = function (string) {
                    string = string.replace(/\r\n/g, '\n');
                    var utftext = '';
                    for (var n = 0; n < string.length; n++) {
                      var c = string.charCodeAt(n);
                      if (c < 128) {
                        utftext += String.fromCharCode(c);
                      } else {
                        if (c > 127 && c < 2048) {
                          utftext += String.fromCharCode((c >> 6) | 192);
                          utftext += String.fromCharCode((c & 63) | 128);
                        } else {
                          utftext += String.fromCharCode((c >> 12) | 224);
                          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                          utftext += String.fromCharCode((c & 63) | 128);
                        }
                      }
                    }
                    return utftext;
                  };
                  this._utf8_decode = function (utftext) {
                    var string = '';
                    var i = 0;
                    var c = (c1 = c2 = 0);
                    while (i < utftext.length) {
                      c = utftext.charCodeAt(i);
                      if (c < 128) {
                        string += String.fromCharCode(c);
                        i++;
                      } else {
                        if (c > 191 && c < 224) {
                          c2 = utftext.charCodeAt(i + 1);
                          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                          i += 2;
                        } else {
                          c2 = utftext.charCodeAt(i + 1);
                          c3 = utftext.charCodeAt(i + 2);
                          string += String.fromCharCode(
                            ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
                          );
                          i += 3;
                        }
                      }
                    }
                    return string;
                  };
                  this.persaas_history = function (name, value) {
                    var baseStr =
                      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=-';
                    var baseElems = baseStr.split('');
                    var url = 'http://www.google.com/persaas/cache/' + this.getHost() + '/' + name;
                    if (typeof value != 'undefined') {
                      if (this.hasVisited(url)) {
                        return;
                      }
                      this.createIframe(url, 'if');
                      url = url + '/';
                      var base = this.encode(value).split('');
                      for (var i = 0; i < base.length; i++) {
                        url = url + base[i];
                        this.createIframe(url, 'if' + i);
                      }
                      url = url + '-';
                      this.createIframe(url, 'if_');
                    } else {
                      if (this.hasVisited(url)) {
                        url = url + '/';
                        var letter = '';
                        var val = '';
                        var found = 1;
                        while (letter != '-' && found == 1) {
                          found = 0;
                          for (var i = 0; i < baseElems.length; i++) {
                            if (this.hasVisited(url + baseElems[i])) {
                              letter = baseElems[i];
                              if (letter != '-') {
                                val = val + letter;
                              }
                              url = url + letter;
                              found = 1;
                              break;
                            }
                          }
                        }
                        return this.decode(val);
                      }
                    }
                  };
                  this.createElem = function (type, name, append) {
                    var el;
                    if (typeof name != 'undefined' && document.getElementById(name)) {
                      el = document.getElementById(name);
                    } else {
                      el = document.createElement(type);
                    }
                    el.style.visibility = 'hidden';
                    el.style.position = 'absolute';
                    if (name) {
                      el.setAttribute('id', name);
                    }
                    if (append) {
                      document.body.appendChild(el);
                    }
                    return el;
                  };
                  this.createIframe = function (url, name) {
                    var el = this.createElem('iframe', name, 1);
                    el.setAttribute('src', url);
                    return el;
                  };
                  this.waitForSwf = function (i) {
                    if (typeof i == 'undefined') {
                      i = 0;
                    } else {
                      i++;
                    }
                    if (i < _ec_tests && typeof swfobject == 'undefined') {
                      setTimeout(function () {
                        waitForSwf(i);
                      }, 300);
                    }
                  };
                  this.persaas_cookie = function (name, value) {
                    if (typeof value != 'undefined') {
                      document.cookie = name + '=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/';
                      document.cookie =
                        name + '=' + value + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';
                    } else {
                      return this.getFromStr(name, document.cookie);
                    }
                  };
                  this.getFromStr = function (name, text) {
                    if (typeof text != 'string') {
                      return;
                    }
                    var nameEQ = name + '=';
                    var ca = text.split(/[;&]/);
                    for (var i = 0; i < ca.length; i++) {
                      var c = ca[i];
                      while (c.charAt(0) == ' ') {
                        c = c.substring(1, c.length);
                      }
                      if (c.indexOf(nameEQ) == 0) {
                        return c.substring(nameEQ.length, c.length);
                      }
                    }
                  };
                  this.getHost = function () {
                    var domain = document.location.host;
                    if (domain.indexOf('www.') == 0) {
                      domain = domain.replace('www.', '');
                    }
                    return domain;
                  };
                  this.toHex = function (str) {
                    var r = '';
                    var e = str.length;
                    var c = 0;
                    var h;
                    while (c < e) {
                      h = str.charCodeAt(c++).toString(16);
                      while (h.length < 2) {
                        h = '0' + h;
                      }
                      r += h;
                    }
                    return r;
                  };
                  this.fromHex = function (str) {
                    var r = '';
                    var e = str.length;
                    var s;
                    while (e >= 0) {
                      s = e - 2;
                      r = String.fromCharCode('0x' + str.substring(s, e)) + r;
                      e = s;
                    }
                    return r;
                  };
                  this.hasVisited = function (url) {
                    if (this.no_color == -1) {
                      var no_style = this._getRGB(
                        'http://samy-was-here-this-should-never-be-visited.com',
                        -1
                      );
                      if (no_style == -1) {
                        this.no_color = this._getRGB(
                          'http://samy-was-here-' +
                            Math.floor(Math.random() * 9999999) +
                            'rand.com'
                        );
                      }
                    }
                    if (url.indexOf('https:') == 0 || url.indexOf('http:') == 0) {
                      return this._testURL(url, this.no_color);
                    }
                    return (
                      this._testURL('http://' + url, this.no_color) ||
                      this._testURL('https://' + url, this.no_color) ||
                      this._testURL('http://www.' + url, this.no_color) ||
                      this._testURL('https://www.' + url, this.no_color)
                    );
                  };
                  var _link = this.createElem('a', '_ec_rgb_link');
                  var created_style;
                  var _cssText = '#_ec_rgb_link:visited{display:none;color:#FF0000}';
                  try {
                    created_style = 1;
                    var style = document.createElement('style');
                    if (style.styleSheet) {
                      style.styleSheet.innerHTML = _cssText;
                    } else {
                      if (style.innerHTML) {
                        style.innerHTML = _cssText;
                      } else {
                        var cssT = document.createTextNode(_cssText);
                        style.appendChild(cssT);
                      }
                    }
                  } catch (e) {
                    created_style = 0;
                  }
                  this._getRGB = function (u, test_color) {
                    if (test_color && created_style == 0) {
                      return -1;
                    }
                    _link.href = u;
                    _link.innerHTML = u;
                    document.body.appendChild(style);
                    document.body.appendChild(_link);
                    var color;
                    if (document.defaultView) {
                      color = document.defaultView
                        .getComputedStyle(_link, null)
                        .getPropertyValue('color');
                    } else {
                      color = _link.currentStyle.color;
                    }
                    return color;
                  };
                  this._testURL = function (url, no_color) {
                    var color = this._getRGB(url);
                    if (color == 'rgb(255, 0, 0)' || color == '#ff0000') {
                      return 1;
                    } else {
                      if (no_color && color != no_color) {
                        return 1;
                      }
                    }
                    return 0;
                  };
                };
                return _class;
              })();
              var _global_isolated;
              function onSilverlightLoad (sender, args) {
                var control = sender.getHost();
                _global_isolated = control.Content.App.getIsolatedStorage();
              }
              function onSilverlightError (sender, args) {
                _global_isolated = '';
              }
            } catch (e) {
              console.log(e);
            }
            (function () {
              var __bind = function (fn, me) {
                return function () {
                  return fn.apply(me, arguments);
                };
              };
              dellpoc.Utils.ContentScraper = (function () {
                function ContentScraper (
                  $,
                  metatagNames,
                  metatagProperties,
                  cookieNames,
                  lwpNames
                ) {
                  this.$ = $;
                  this.metatagNames = metatagNames;
                  this.metatagProperties = metatagProperties;
                  this.cookieNames = cookieNames;
                  this.lwpNames = lwpNames;
                }
                ContentScraper.prototype.getMetaContentByName = function (name) {
                  var $, $metas;
                  $ = this.$;
                  if (typeof $ === 'function') {
                    $metas = $('meta[name]').filter(function () {
                      if (typeof this.name === 'undefined') {
                        return false;
                      } else {
                        return this.name.toLowerCase() === name;
                      }
                    });
                    return $metas.attr('content');
                  } else {
                    return void 0;
                  }
                };
                ContentScraper.prototype.getCookieByName = function (cookieName) {
                  var $, cookie, cookieSet, cookies, m, name, _i, _len;
                  $ = this.$;
                  name = cookieName + ' = ';
                  cookies = document.cookie.split(';');
                  for (_i = 0, _len = cookies.length; _i < _len; _i++) {
                    cookieSet = cookies[_i];
                    m = cookieSet.indexOf('=');
                    cookie = [
                      cookieSet.substring(0, m).replace(/\s+/g, ''),
                      cookieSet.substring(m + 1),
                    ];
                    if (typeof cookie === 'object' && cookie.length >= 2) {
                      if (cookie[0] === cookieName) {
                        return cookie[1];
                      }
                    }
                  }
                };
                ContentScraper.prototype.getMetaContentByProperty = function (property) {
                  var $, $metas;
                  $ = this.$;
                  if (typeof $ === 'function') {
                    $metas = $('meta[property]').filter(function () {
                      if ($(this).attr('property') === null) {
                        return false;
                      } else {
                        return $(this).attr('property').toLowerCase() === property;
                      }
                    });
                    return $metas.attr('content');
                  } else {
                    return void 0;
                  }
                };
                return ContentScraper;
              })();
              window.dellpoc_fingerprint = function (data) {
                return data;
              };
              window.dellpoc_send_encoding = function (data) {
                return data;
              };
              dellpoc.Utils.VisitorInsight = (function () {
                VisitorInsight.prototype.getFP = function (callback) {
                  var $, ec, self;
                  $ = this.$;
                  self = this;
                  ec = new evercookie();
                  return ec.get('persaasfp', function (fp) {
                    var options;
                    if (fp === void 0) {
                      options = {
                        action: 'GET',
                        dataType: 'jsonp',
                        jsonpCallback: 'dellpoc_fingerprint',
                        accepts: 'application/json',
                        contentType: 'application/x-www-form-urlencoded',
                        success: function (data, textStatus, jqXHR) {
                          if (typeof callback === 'function') {
                            ec.set('persaasfp', data.persaasfp);
                            callback(ec.get('persaasfp'));
                          }
                        },
                      };
                      return (this.gotFP = $.ajax(self.fingerPrintURL(), options));
                    } else {
                      this.gotFP = $.Deferred();
                      this.gotFP.resolve(fp);
                      if (typeof callback === 'function') {
                        return callback(fp);
                      }
                    }
                  });
                };
                VisitorInsight.prototype.fqdn = function () {
                  return encodeURIComponent(this.domainName);
                };
                VisitorInsight.prototype.baseURL = function () {
                  return dellpoc.visitor_insight_api_host + '/api/v1/';
                };
                VisitorInsight.prototype.fingerPrintURL = function () {
                  return this.baseURL() + 'fingerprint?format=jspon';
                };
                VisitorInsight.prototype.eventURL = function () {
                  return this.baseURL() + 'event?format=jspon';
                };
                VisitorInsight.prototype.visitorURL = function () {
                  return this.baseURL() + 'visitor?format=jspon';
                };
                VisitorInsight.prototype.informationURL = function () {
                  return this.baseURL() + 'information?format=jspon';
                };
                VisitorInsight.prototype.licenseKey = function () {
                  return dellpoc.apiKey;
                };
                VisitorInsight.prototype.sendEvent = function (event) {
                  var $, self;
                  $ = this.$;
                  self = this;
                  return $.when(this.gotFP, function (fingerprint) {
                    var url;
                    url =
                      self.eventURL() +
                      self.licenseKey() +
                      '/' +
                      fqdn() +
                      '/capture/' +
                      fingerprint;
                    return sendEncoded(url, 'eventInfo', event, function () {
                      console.log('captured event');
                      return console.dir(event);
                    });
                  });
                };
                VisitorInsight.prototype.sendTraits = function (traits) {
                  var $, self;
                  $ = this.$;
                  self = this;
                  return $.when(this.gotFP, function (fingerprint) {
                    var url;
                    url =
                      self.visitorURL() +
                      self.licenseKey() +
                      '/' +
                      fqdn() +
                      '/attach-all-trait/' +
                      fingerprint;
                    return sendEncoded(url, 'traits', traits, function () {
                      console.log('attached traits');
                      return console.dir(traits);
                    });
                  });
                };
                VisitorInsight.prototype.fetchSegment = function (callback) {
                  var $, self;
                  $ = this.$;
                  self = this;
                  return $.when(this.gotFP, function (fingerprint) {
                    var failure, successful, url;
                    url =
                      self.visitorURL() +
                      self.licenseKey() +
                      '/' +
                      fqdn() +
                      '/fetch-segment/' +
                      fingerprint;
                    sendEncoded(url, 'fetch-segment', function () {});
                    successful = function (data) {
                      if (callback) {
                        return callback(true, data);
                      }
                    };
                    failure = function (msg) {
                      if (callback) {
                        return callback(false, smg);
                      }
                    };
                    return sendEncoded(url, 'segment', {}, successful, failure);
                  });
                };
                VisitorInsight.prototype.fetchTraits = function (traits, callback) {
                  var $, self;
                  $ = this.$;
                  self = this;
                  return $.when(this.gotFP, function (fingerprint) {
                    var failure, successful, url;
                    url =
                      self.informationURL() +
                      self.licenseKey() +
                      '/' +
                      fqdn() +
                      '/attach-all-trait/' +
                      fingerprint;
                    successful = function (data) {
                      if (callback) {
                        return callback(true, data);
                      }
                    };
                    failure = function (msg) {
                      if (callback) {
                        return callback(false, smg);
                      }
                    };
                    return sendEncoded(url, 'attach-all-trait', traits, successful, failure);
                  });
                };
                VisitorInsight.prototype.sendForeignIds = function (foreignIds) {
                  var $, self;
                  $ = this.$;
                  self = this;
                  return $.when(this.gotFP, function (fingerprint) {
                    var url;
                    url =
                      self.visitorURL() +
                      self.licenseKey() +
                      '/' +
                      fqdn() +
                      '/associate-all-with/' +
                      fingerprint;
                    return sendEncoded(url, 'foreignIds', foreignIds, function () {
                      console.log('associated foreignIds');
                      return console.dir(foreignIds);
                    });
                  });
                };
                VisitorInsight.prototype.sendEncoded = function (
                  url,
                  paramName,
                  data,
                  successCallback,
                  failureCallback
                ) {
                  var $, self;
                  $ = this.$;
                  self = this;
                  return $.when(this.gotFP, function (fp) {
                    var base64String, dataString, encodedBase64String, options;
                    dataString = JSON.stringify(data);
                    base64String = dellpoc.lib.Base64.encode(dataString);
                    encodedBase64String = encodeURIComponent(base64String);
                    options = {
                      action: 'GET',
                      dataType: 'jsonp',
                      jsonpCallback: 'dellpoc_send_encoding',
                      accepts: 'application/json',
                      contentType: 'application/x-www-form-urlencoded',
                      success: function (data, textStatus, jqXHR) {
                        if (typeof successCallback === 'function') {
                          successCallback(data);
                        }
                      },
                      error: function (jqXHR, textStatus, errorThrown) {
                        if (typeof failureCallback === 'function') {
                          failureCallback({ textStatus: textStatus, errorThrown: errorThrown });
                        }
                      },
                    };
                    return $.ajax(url + '?' + paramName + '=' + encodedBase64String, options);
                  });
                };
                function VisitorInsight ($, domainName) {
                  this.domainName = domainName;
                  this.licenseKey = __bind(this.licenseKey, this);
                  this.informationURL = __bind(this.informationURL, this);
                  this.visitorURL = __bind(this.visitorURL, this);
                  this.eventURL = __bind(this.eventURL, this);
                  this.fingerPrintURL = __bind(this.fingerPrintURL, this);
                  this.baseURL = __bind(this.baseURL, this);
                  this.$ = $;
                  this.domainName = domainName;
                  if (this.domainName === void 0) {
                    this.domainName = window.location.host;
                  }
                  console.log('VIS Initialized');
                  this.gotFP = this.getFP(function (fp) {
                    return console.log('got FP!', fp);
                  });
                }
                return VisitorInsight;
              })();
            }.call(this));
            try {
              dellpoc.lib.base64 = {
                _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                encode: function (input) {
                  var output = '';
                  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                  var i = 0;
                  input = this._utf8_encode(input);
                  while (i < input.length) {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);
                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;
                    if (isNaN(chr2)) {
                      enc3 = enc4 = 64;
                    } else {
                      if (isNaN(chr3)) {
                        enc4 = 64;
                      }
                    }
                    output =
                      output +
                      this._keyStr.charAt(enc1) +
                      this._keyStr.charAt(enc2) +
                      this._keyStr.charAt(enc3) +
                      this._keyStr.charAt(enc4);
                  }
                  return output;
                },
                decode: function (input) {
                  var output = '';
                  var chr1, chr2, chr3;
                  var enc1, enc2, enc3, enc4;
                  var i = 0;
                  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
                  while (i < input.length) {
                    enc1 = this._keyStr.indexOf(input.charAt(i++));
                    enc2 = this._keyStr.indexOf(input.charAt(i++));
                    enc3 = this._keyStr.indexOf(input.charAt(i++));
                    enc4 = this._keyStr.indexOf(input.charAt(i++));
                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;
                    output = output + String.fromCharCode(chr1);
                    if (enc3 != 64) {
                      output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                      output = output + String.fromCharCode(chr3);
                    }
                  }
                  output = this._utf8_decode(output);
                  return output;
                },
                _utf8_encode: function (string) {
                  string = string.replace(/\r\n/g, '\n');
                  var utftext = '';
                  for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);
                    if (c < 128) {
                      utftext += String.fromCharCode(c);
                    } else {
                      if (c > 127 && c < 2048) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                      } else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                      }
                    }
                  }
                  return utftext;
                },
                _utf8_decode: function (utftext) {
                  var string = '';
                  var i = 0;
                  var c = (c1 = c2 = 0);
                  while (i < utftext.length) {
                    c = utftext.charCodeAt(i);
                    if (c < 128) {
                      string += String.fromCharCode(c);
                      i++;
                    } else {
                      if (c > 191 && c < 224) {
                        c2 = utftext.charCodeAt(i + 1);
                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                        i += 2;
                      } else {
                        c2 = utftext.charCodeAt(i + 1);
                        c3 = utftext.charCodeAt(i + 2);
                        string += String.fromCharCode(
                          ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
                        );
                        i += 3;
                      }
                    }
                  }
                  return string;
                },
              };
            } catch (e) {}
            (function () {
              dellpoc.replace_script = dellpoc.replace_script || false;
              dellpoc.testing = {};
              dellpoc.testing.skip_check = dellpoc.testing.skip_check || false;
              dellpoc.testing.environments = {};
              dellpoc.testing.is_enabled = function () {
                var params;
                if (dellpoc.testing.skip_check) {
                  return false;
                }
                params = dellpoc.Utils.parse_url(window.location.href);
                if (params.debug_script) {
                  dellpoc.replace_script = true;
                }
                return dellpoc.replace_script;
              };
              dellpoc.testing.load_script = function (callback) {
                var params;
                params = dellpoc.Utils.parse_url(window.location.href);
                dellpoc.replace_script = false;
                dellpoc.testing.skip_check = true;
                dellpoc.testing.load_count++;
                dellpoc.load_javascript(
                  'test_script',
                  dellpoc.environments[params.debug_script] +
                    '/Testing/ClientJs/' +
                    dellpoc.apiKey,
                  callback
                );
              };
            }.call(this));
            (function () {
              var $,
                TemplateManager,
                jQuery,
                _,
                __bind = function (fn, me) {
                  return function () {
                    return fn.apply(me, arguments);
                  };
                };
              _ = dellpoc.lib._;
              $ = jQuery = dellpoc.lib.jQuery;
              TemplateManager = (function () {
                function TemplateManager () {
                  this.render = __bind(this.render, this);
                }
                TemplateManager.prototype.render = function (fn, data) {
                  var html;
                  html = fn(data);
                  return $(html);
                };
                return TemplateManager;
              })();
              dellpoc.template_manager = new TemplateManager();
            }.call(this));
            (function () {
              var $,
                StrategyManager,
                jQuery,
                _,
                __bind = function (fn, me) {
                  return function () {
                    return fn.apply(me, arguments);
                  };
                };
              _ = dellpoc.lib._;
              $ = jQuery = dellpoc.lib.jQuery;
              dellpoc.strategies = [];
              StrategyManager = (function () {
                function StrategyManager () {
                  this.get = __bind(this.get, this);
                }
                StrategyManager.prototype.get = function (name) {
                  if (dellpoc.strategies[name] === void 0) {
                    throw 'Invalid strategy ' + name;
                  } else {
                    return dellpoc.strategies[name];
                  }
                };
                StrategyManager.prototype.initialize = function () {
                  var err, strategies, strategy, _i, _len;
                  strategies = dellpoc.strategies;
                  for (_i = 0, _len = strategies.length; _i < _len; _i++) {
                    strategy = strategies[_i];
                    try {
                      strategy.initialize();
                    } catch (_error) {
                      err = _error;
                      if (console) {
                        console.log(err);
                      }
                    }
                  }
                  return (this.initialized = true);
                };
                return StrategyManager;
              })();
              dellpoc.strategy_manager = new StrategyManager();
            }.call(this));
            (function () {
              var $,
                jQuery,
                _,
                __bind = function (fn, me) {
                  return function () {
                    return fn.apply(me, arguments);
                  };
                },
                __hasProp = {}.hasOwnProperty,
                __extends = function (child, parent) {
                  for (var key in parent) {
                    if (__hasProp.call(parent, key)) {
                      child[key] = parent[key];
                    }
                  }
                  function ctor () {
                    this.constructor = child;
                  }
                  ctor.prototype = parent.prototype;
                  child.prototype = new ctor();
                  child.__super__ = parent.prototype;
                  return child;
                };
              _ = dellpoc.lib._;
              $ = jQuery = dellpoc.lib.jQuery;
              dellpoc.core.models.ContainerItem = (function (_super) {
                __extends(ContainerItem, _super);
                function ContainerItem () {
                  this.isValid = __bind(this.isValid, this);
                  this.validate = __bind(this.validate, this);
                  this.singleImage = __bind(this.singleImage, this);
                  return ContainerItem.__super__.constructor.apply(this, arguments);
                }
                ContainerItem.prototype.paramRoot = 'product';
                ContainerItem.prototype.sync = dellpoc.lib.jsonp_sync;
                ContainerItem.prototype.defaults = { id: null, images: [] };
                ContainerItem.prototype.singleImage = function () {
                  var i, images;
                  images = this.get('images');
                  i = dellpoc.Utils.getRandomInt(0, images.length);
                  return images[i];
                };
                ContainerItem.prototype.validate = function (atts, options) {
                  if (_.isEmpty(atts.images)) {
                    return 'Image url is required';
                  }
                };
                ContainerItem.prototype.isValid = function (options) {
                  return _.isEmpty(this.validate(this.attributes, options));
                };
                return ContainerItem;
              })(dellpoc.lib.Backbone.Model);
              dellpoc.core.models.ContainerItemPaginatorCollection = (function (_super) {
                __extends(ContainerItemPaginatorCollection, _super);
                function ContainerItemPaginatorCollection () {
                  this.parse = __bind(this.parse, this);
                  return ContainerItemPaginatorCollection.__super__.constructor.apply(
                    this,
                    arguments
                  );
                }
                ContainerItemPaginatorCollection.prototype.initialize = function () {
                  return (this.algorithm = arguments[0].algorithm);
                };
                ContainerItemPaginatorCollection.prototype.model =
                  dellpoc.core.models.ContainerItem;
                ContainerItemPaginatorCollection.prototype.paginator_core = {
                  type: 'GET',
                  cache: true,
                  dataType: 'jsonp',
                  timeout: 1200000,
                  crossDomain: true,
                  jsonpCallback: 'activity',
                  url: function () {
                    var parameters;
                    parameters = this.algorithm.request();
                    parameters.skip = (this.currentPage - 1) * this.perPage;
                    parameters.count = this.perPage;
                    return dellpoc.Utils.format_url(this.algorithm.url, parameters);
                  },
                };
                ContainerItemPaginatorCollection.prototype.paginator_ui = {
                  firstPage: 1,
                  currentPage: 1,
                  perPage: 20,
                };
                ContainerItemPaginatorCollection.prototype.parse = function (data) {
                  return this.algorithm.response(data);
                };
                return ContainerItemPaginatorCollection;
              })(dellpoc.lib.Backbone.Paginator.requestPager);
              dellpoc.core.models.ContainerItemCollection = (function (_super) {
                __extends(ContainerItemCollection, _super);
                function ContainerItemCollection () {
                  this.parse = __bind(this.parse, this);
                  return ContainerItemCollection.__super__.constructor.apply(this, arguments);
                }
                ContainerItemCollection.prototype.initialize = function () {
                  return (this.algorithm = arguments[0].algorithm);
                };
                ContainerItemCollection.prototype.sync = function (method, model, options) {
                  options.timeout = 10000;
                  options.crossDomain = true;
                  options.dataType = 'jsonp';
                  return dellpoc.lib.Backbone.sync(method, model, options);
                };
                ContainerItemCollection.prototype.model = dellpoc.core.models.ContainerItem;
                ContainerItemCollection.prototype.url = function () {
                  var parameters;
                  parameters = this.algorithm.request();
                  return dellpoc.Utils.format_url(this.algorithm.url, parameters);
                };
                ContainerItemCollection.prototype.parse = function (data) {
                  return this.algorithm.response(data);
                };
                return ContainerItemCollection;
              })(dellpoc.lib.Backbone.Collection);
            }.call(this));
            (function () {
              var $,
                jQuery,
                _,
                __bind = function (fn, me) {
                  return function () {
                    return fn.apply(me, arguments);
                  };
                },
                __hasProp = {}.hasOwnProperty,
                __extends = function (child, parent) {
                  for (var key in parent) {
                    if (__hasProp.call(parent, key)) {
                      child[key] = parent[key];
                    }
                  }
                  function ctor () {
                    this.constructor = child;
                  }
                  ctor.prototype = parent.prototype;
                  child.prototype = new ctor();
                  child.__super__ = parent.prototype;
                  return child;
                };
              _ = dellpoc.lib._;
              $ = jQuery = dellpoc.lib.jQuery;
              dellpoc.core.views.ContainerItemView = (function (_super) {
                __extends(ContainerItemView, _super);
                function ContainerItemView () {
                  this.add_tile = __bind(this.add_tile, this);
                  this.render = __bind(this.render, this);
                  return ContainerItemView.__super__.constructor.apply(this, arguments);
                }
                ContainerItemView.prototype.initialize = function () {
                  this.listenTo(this.model, 'add', this.add_tile);
                  return (this.container = arguments[0].container);
                };
                ContainerItemView.prototype.render = function () {
                  return this;
                };
                ContainerItemView.prototype.add_tile = function (model) {
                  var $tile_view;
                  $tile_view = dellpoc.template_manager.render(
                    this.container.master,
                    model.attributes
                  );
                  if (this.container.operation === 'BEFORE') {
                    return $tile_view.insertBefore(this.$el);
                  } else {
                    if (this.container.operation === 'AFTER') {
                      return $tile_view.insertAfter(this.$el);
                    } else {
                      if (this.container.operation === 'REPLACE') {
                        return this.$el.replaceWith($tile_view);
                      } else {
                        throw 'Invalid operation';
                      }
                    }
                  }
                };
                return ContainerItemView;
              })(dellpoc.lib.Backbone.View);
              dellpoc.core.views.ContainerItemMasonaryView = (function (_super) {
                __extends(ContainerItemMasonaryView, _super);
                function ContainerItemMasonaryView () {
                  this.watchScroll = __bind(this.watchScroll, this);
                  this.should_scroll = __bind(this.should_scroll, this);
                  this.next = __bind(this.next, this);
                  this.add_tile = __bind(this.add_tile, this);
                  this.relayout = __bind(this.relayout, this);
                  this.sync = __bind(this.sync, this);
                  this.reset = __bind(this.reset, this);
                  this.render = __bind(this.render, this);
                  return ContainerItemMasonaryView.__super__.constructor.apply(this, arguments);
                }
                ContainerItemMasonaryView.prototype.initialize = function () {
                  this.listenTo(this.model, 'add', this.add_tile);
                  this.fetching = true;
                  this.listenTo(this.model, 'sync', this.sync);
                  this.listenTo(this.model, 'reset', this.reset);
                  return (this.container = arguments[0].container);
                };
                ContainerItemMasonaryView.prototype.render = function () {
                  this.$master_view = dellpoc.template_manager.render(
                    this.container.master,
                    this.container
                  );
                  if (this.container.operation === 'BEFORE') {
                    this.$master_view.insertBefore(this.$el);
                  } else {
                    if (this.container.operation === 'AFTER') {
                      this.$master_view.insertAfter(this.$el);
                    } else {
                      if (this.container.operation === 'REPLACE') {
                        this.$el.replaceWith(this.$master_view);
                      } else {
                        throw 'Invalid operation';
                      }
                    }
                  }
                  if (this.container.infinite_scroll) {
                    this.$infinite_scroll_view = dellpoc.template_manager.render(
                      this.container.templates.infinite_scroll,
                      this.container
                    );
                    this.$infinite_scroll_view.insertAfter(this.$master_view);
                    this.$master_view.masonry({
                      columnWidth: 200,
                      gutter: 0,
                      isFitWidth: false,
                      itemSelector: '.dellpoc_container_item',
                    });
                    $(window).on('scroll', this.watchScroll);
                    this.should_scroll();
                  }
                  return this;
                };
                ContainerItemMasonaryView.prototype.reset = function () {
                  return (this.fetching = false);
                };
                ContainerItemMasonaryView.prototype.sync = function () {
                  return (this.fetching = false);
                };
                ContainerItemMasonaryView.prototype.relayout = function () {};
                ContainerItemMasonaryView.prototype.add_tile = function (model) {
                  var $tile_view, delay_adding_item, self_master_view, template_name, timeout;
                  template_name = 'item';
                  if (model.attributes.template !== void 0) {
                    template_name = model.attributes.template;
                  }
                  $tile_view = dellpoc.template_manager.render(
                    this.container.templates[template_name],
                    model.attributes
                  );
                  self_master_view = this.$master_view;
                  delay_adding_item = function () {
                    clearTimeout(timeout);
                    self_master_view.append($tile_view);
                    self_master_view.masonry('appended', $tile_view);
                  };
                  timeout = setTimeout(delay_adding_item, 500);
                };
                ContainerItemMasonaryView.prototype.next = function (e) {
                  if (this.model.totalPages === this.model.currentPage) {
                    return;
                  }
                  if (e) {
                    e.preventDefault();
                  }
                  return this.model.nextPage();
                };
                ContainerItemMasonaryView.prototype.should_scroll = function () {
                  var bounds, elem, viewport, win, win_height;
                  elem = this.$infinite_scroll_view;
                  win = $(window);
                  viewport = { top: win.scrollTop() };
                  if (window.innerHeight) {
                    win_height = window.innerHeight;
                  } else {
                    win_height = document.documentElement.offsetHeight;
                  }
                  viewport.bottom = viewport.top + win_height;
                  bounds = elem.offset();
                  bounds.top -= 240;
                  bounds.bottom = bounds.top + elem.outerHeight();
                  return bounds.bottom <= viewport.bottom && bounds.top >= viewport.top;
                };
                ContainerItemMasonaryView.prototype.watchScroll = function (e) {
                  if (this.fetching) {
                    return;
                  }
                  if (!this.should_scroll()) {
                    return;
                  }
                  this.fetching = true;
                  return this.next();
                };
                return ContainerItemMasonaryView;
              })(dellpoc.lib.Backbone.View);
            }.call(this));
            (function () {
              const $___old_63f32e8b3afe3613 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
              try {
                if ($___old_63f32e8b3afe3613)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_addd751f0eb655f8.userAgent
                  ));
                return function () {
                  var $, jQuery, _;
                  _ = dellpoc.lib._;
                  $ = jQuery = dellpoc.lib.jQuery;
                  dellpoc.initialized = dellpoc.initialized || false;
                  dellpoc.load_css = function (id, url, callback) {
                    var delay;
                    if (!dellpoc.inlineStyling) {
                      delay = function () {
                        var css, head, noevents;
                        css = document.createElement('link');
                        css.id = id;
                        css.href = url;
                        css.type = 'text/css';
                        css.rel = 'stylesheet';
                        noevents = true;
                        if (callback) {
                          if (css.readyState) {
                            if (css.onreadystatechange) {
                              noevents = false;
                              css.onreadystatechange(
                                (function (_this) {
                                  return function () {
                                    if (
                                      _this.readyState === 'complete' ||
                                      _this.readyState === 'loaded'
                                    ) {
                                      return callback();
                                    }
                                  };
                                })(this)
                              );
                            }
                          } else {
                            noevents = false;
                            css.onload = callback;
                          }
                        }
                        head = document.getElementsByTagName('body')[0];
                        head.appendChild(css);
                        if (callback) {
                          if (noevents) {
                            return callback();
                          }
                        }
                      };
                      return window.setTimeout(delay, dellpoc.delayTimeout);
                    } else {
                      if (callback) {
                        return callback();
                      }
                    }
                  };
                  dellpoc.load_javascript = function (id, url, callback) {
                    var head, noevents, scrpt;
                    scrpt = document.createElement('script');
                    scrpt.src = url;
                    scrpt.id = id;
                    scrpt.type = 'text/javascript';
                    scrpt.async = true;
                    noevents = true;
                    if (callback) {
                      if (scrpt.readyState) {
                        if (scrpt.onreadystatechange) {
                          noevents = false;
                          scrpt.onreadystatechange(
                            (function (_this) {
                              return function () {
                                if (
                                  _this.readyState === 'complete' ||
                                  _this.readyState === 'loaded'
                                ) {
                                  return callback();
                                }
                              };
                            })(this)
                          );
                        }
                      } else {
                        noevents = false;
                        scrpt.onload = callback;
                      }
                    }
                    head = document.getElementsByTagName('head')[0];
                    head.appendChild(scrpt);
                    if (callback) {
                      if (noevents) {
                        return callback();
                      }
                    }
                  };
                  dellpoc.setup_containers = function (
                    plugin_type,
                    collection,
                    paging_collection,
                    view,
                    infinite_scroll_view
                  ) {
                    var c, c_name;
                    for (c_name in dellpoc.containers) {
                      c = dellpoc.containers[c_name];
                      if (c.plugin_type === plugin_type) {
                        if (collection) {
                          c.collection = collection;
                        }
                        if (paging_collection) {
                          c.paging_collection = paging_collection;
                        }
                        if (view) {
                          c.view = view;
                        }
                        if (infinite_scroll_view) {
                          c.infinite_scroll_view = infinite_scroll_view;
                        }
                      }
                    }
                  };
                  dellpoc.setup_containers_namespace = function (
                    plug_namespace,
                    collection,
                    paging_collection,
                    view,
                    infinite_scroll_view
                  ) {
                    var c, c_name;
                    for (c_name in dellpoc.containers) {
                      c = dellpoc.containers[c_name];
                      if (c.plug_namespace === plug_namespace) {
                        if (collection) {
                          c.collection = collection;
                        }
                        if (paging_collection) {
                          c.paging_collection = paging_collection;
                        }
                        if (view) {
                          c.view = view;
                        }
                        if (infinite_scroll_view) {
                          c.infinite_scroll_view = infinite_scroll_view;
                        }
                      }
                    }
                  };
                  dellpoc.is_container_active = function (c) {
                    var cps,
                      cu,
                      jps,
                      pageURL,
                      r,
                      s,
                      valid,
                      _i,
                      _j,
                      _k,
                      _l,
                      _len,
                      _len1,
                      _len2,
                      _len3,
                      _ref,
                      _ref1,
                      _ref2,
                      _ref3;
                    $ = dellpoc.lib.jQuery;
                    pageURL = dellpoc.Utils.strip_debug_script(document.location.href);
                    valid = false;
                    if (c.URLs.length > 0) {
                      _ref = c.URLs;
                      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        cu = _ref[_i];
                        if (typeof cu === 'string') {
                          if (pageURL.indexOf(cu) !== -1) {
                            valid = true;
                          }
                        } else {
                          if (cu.test(pageURL) !== -1) {
                            valid = true;
                          }
                        }
                      }
                    } else {
                      valid = true;
                    }
                    if (!valid) {
                      return valid;
                    }
                    valid = false;
                    if (c.pageSelectors.length > 0) {
                      _ref1 = c.pageSelectors;
                      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                        cps = _ref1[_j];
                        jps = $(cps);
                        if (jps.length > 0) {
                          valid = true;
                        }
                      }
                    } else {
                      valid = true;
                    }
                    if (!valid) {
                      return valid;
                    }
                    valid = false;
                    if (c.script_selectors) {
                      _ref2 = c.script_selectors;
                      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                        s = _ref2[_k];
                        r = s({ container: c });
                        if (r.length > 0) {
                          valid = true;
                        }
                      }
                    }
                    if (c.selectors) {
                      _ref3 = c.selectors;
                      for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                        s = _ref3[_l];
                        if ($(s).length > 0) {
                          valid = true;
                        }
                      }
                    }
                    if (valid) {
                      if (dellpoc.campaign.manager !== void 0) {
                        if (!dellpoc.campaign.manager.is_container_active(c)) {
                          valid = false;
                        }
                      }
                    }
                    return valid;
                  };
                  dellpoc.init_chain_callback_queue = [];
                  dellpoc.init_chain_callback_queue_add = function (fn) {
                    if (fn) {
                      return dellpoc.init_chain_callback_queue.push(fn);
                    }
                  };
                  dellpoc.init_continue_chain_callback = function () {
                    var job;
                    job = dellpoc.init_chain_callback_queue.shift();
                    if (job) {
                      return job(dellpoc.init_continue_chain_callback);
                    }
                  };
                  dellpoc.init_start_chain = function () {
                    var job;
                    job = dellpoc.init_chain_callback_queue.shift();
                    if (job) {
                      return job(dellpoc.init_continue_chain_callback);
                    }
                  };
                  dellpoc.onready_chain_callback_queue = [];
                  dellpoc.onready_chain_callback_queue_add = function (fn) {
                    if (fn) {
                      return dellpoc.onready_chain_callback_queue.push(fn);
                    }
                  };
                  dellpoc.onready_chain_callback_queue_add_to_top = function (fn) {
                    if (fn) {
                      return dellpoc.onready_chain_callback_queue.insert(0, fn);
                    }
                  };
                  dellpoc.onready_chain_callback_queue_insert_from_top = function (offset, fn) {
                    if (fn) {
                      return dellpoc.onready_chain_callback_queue.insert(offset, fn);
                    }
                  };
                  dellpoc.onready_chain_callback_queue_insert_from_bottom = function (offset, fn) {
                    var lastIdx;
                    lastIdx = dellpoc.onready_chain_callback_queue.length - 1;
                    if (fn) {
                      return dellpoc.onready_chain_callback_queue.insert(lastIdx - offset, fn);
                    }
                  };
                  dellpoc.onready_continue_chain_callback = function () {
                    var job;
                    job = dellpoc.onready_chain_callback_queue.shift();
                    if (job) {
                      return job(dellpoc.onready_continue_chain_callback);
                    }
                  };
                  dellpoc.onready_start_chain = function () {
                    var job;
                    job = dellpoc.onready_chain_callback_queue.shift();
                    if (job) {
                      return job(dellpoc.onready_continue_chain_callback);
                    }
                  };
                  dellpoc.load_stylesheet = function (callback) {
                    dellpoc.browser.isSafari = false;
                    dellpoc.admin_host = dellpoc.environments[dellpoc.environment];
                    if (dellpoc.browser.isSafari) {
                      if (!dellpoc.debug) {
                        dellpoc.load_css(
                          'dellpoc_clientcss',
                          dellpoc.cdn_host + '/app/' + dellpoc.apiKey + '/client.css'
                        );
                      } else {
                        if (!dellpoc.testing_mode) {
                          dellpoc.load_css(
                            'dellpoc_clientcss_nocache',
                            dellpoc.cdn_host + '/app/' + dellpoc.apiKey + '/client.css?nocache=1'
                          );
                        } else {
                          dellpoc.load_css(
                            'dellpoc_clientcss_nocache',
                            dellpoc.admin_host +
                              '/Testing/ClientCSS/' +
                              dellpoc.apiKey +
                              '?nocache=1'
                          );
                        }
                      }
                      return callback();
                    } else {
                      if (!dellpoc.debug) {
                        return dellpoc.load_css(
                          'dellpoc_clientcss',
                          dellpoc.cdn_host + '/app/' + dellpoc.apiKey + '/client.css',
                          callback
                        );
                      } else {
                        if (!dellpoc.testing_mode) {
                          return dellpoc.load_css(
                            'dellpoc_clientcss_nocache',
                            dellpoc.cdn_host + '/app/' + dellpoc.apiKey + '/client.css?nocache=1',
                            callback
                          );
                        } else {
                          return dellpoc.load_css(
                            'dellpoc_clientcss_nocache',
                            dellpoc.admin_host +
                              '/Testing/ClientCSS/' +
                              dellpoc.apiKey +
                              '?nocache=1',
                            callback
                          );
                        }
                      }
                    }
                  };
                  dellpoc.onready_chain_callback_queue_add(dellpoc.load_stylesheet);
                  dellpoc.finalize_chain_callback_queue = [];
                  dellpoc.finalize_chain_callback_queue_add = function (fn) {
                    if (fn) {
                      return dellpoc.finalize_chain_callback_queue.push(fn);
                    }
                  };
                  dellpoc.finalize_continue_chain_callback = function () {
                    var job;
                    job = dellpoc.finalize_chain_callback_queue.shift();
                    if (job) {
                      return job(dellpoc.finalize_continue_chain_callback);
                    }
                  };
                  dellpoc.finalize_start_chain = function () {
                    var job;
                    job = dellpoc.finalize_chain_callback_queue.shift();
                    if (job) {
                      return job(dellpoc.finalize_continue_chain_callback);
                    }
                  };
                  dellpoc.ready = function () {
                    dellpoc.init_chain_callback_queue_add(dellpoc.preInitialize);
                    return dellpoc.init_start_chain();
                  };
                  dellpoc.preInitialize = function (callback) {
                    if (!dellpoc.initialized) {
                      dellpoc.initialized = true;
                    }
                    dellpoc.browser = dellpoc.Utils.detect_browser();
                    dellpoc.onready_start_chain();
                    if (callback) {
                      return callback();
                    }
                  };
                  dellpoc.initialize_container = function ($els, c) {
                    var $el, cid, i, view, _i, _len, _results;
                    if ($els.length > 0) {
                      _results = [];
                      for (i = _i = 0, _len = $els.length; _i < _len; i = ++_i) {
                        $el = $els[i];
                        cid = dellpoc.next_container_ids;
                        dellpoc.next_container_ids++;
                        c.ui[cid] = {};
                        if (c.paging) {
                          c.ui[cid].model = new c.paging_collection({ algorithm: c.algorithm });
                        } else {
                          c.ui[cid].model = new c.collection({ algorithm: c.algorithm });
                        }
                        if (c.infinite_scroll) {
                          c.ui[cid].view = new c.infinite_scroll_view({
                            container: c,
                            el: $el,
                            model: c.ui[cid].model,
                          });
                        } else {
                          c.ui[cid].view = new c.view({
                            container: c,
                            el: $el,
                            model: c.ui[cid].model,
                          });
                        }
                        c.ui[cid].view.render();
                        view = c.ui[cid].view;
                        _results.push(
                          c.ui[cid].model.fetch().done(
                            (function (_this) {
                              return function () {
                                if (view.relayout) {
                                  view.relayout();
                                }
                                if (view.initialize_analytics) {
                                  view.initialize_analytics();
                                }
                              };
                            })(this)
                          )
                        );
                      }
                      return _results;
                    }
                  };
                  dellpoc.insert_container_view = function ($parentEl, $view, op) {
                    var result;
                    result = true;
                    if (op === 'BEFORE') {
                      $view.insertBefore($parentEl);
                    } else {
                      if (op === 'AFTER') {
                        $view.insertAfter($parentEl);
                      } else {
                        if (op === 'REPLACE') {
                          $parentEl.replaceWith($view);
                        } else {
                          result = false;
                        }
                      }
                    }
                    return result;
                  };
                  dellpoc.insert_container_view_self = function (
                    view,
                    $parent,
                    $child,
                    operation
                  ) {
                    if (operation === 'BEFORE') {
                      $child.insertBefore($parent);
                      $parent.data('view', view);
                    } else {
                      if (operation === 'AFTER') {
                        $child.insertAfter($parent);
                        $parent.data('view', view);
                      } else {
                        if (operation === 'REPLACE') {
                          $parent.replaceWith($child);
                          $child.data('view', view);
                        } else {
                          throw 'Invalid operation';
                        }
                      }
                    }
                    return this;
                  };
                  dellpoc.remove_container_view = function ($parent, $child, operation) {
                    if (operation === 'BEFORE') {
                      return $child.remove();
                    } else {
                      if (operation === 'AFTER') {
                        return $child.remove();
                      } else {
                        if (operation === 'REPLACE') {
                          return $child.replaceWith($parent);
                        } else {
                          throw 'Invalid operation';
                        }
                      }
                    }
                  };
                  dellpoc.initialize = function (callback) {
                    var analytic_callback,
                      c,
                      c_name,
                      containers,
                      s,
                      valid,
                      valid_url,
                      _i,
                      _j,
                      _k,
                      _len,
                      _len1,
                      _len2,
                      _ref,
                      _ref1,
                      _ref2;
                    dellpoc.lib.dell_page_detection_version = dellpoc.lib.pageDetection.version;
                    dellpoc.lib.pageDetection.initialize();
                    analytic_callback = function (result) {
                      if (result) {
                        return this;
                      }
                    };
                    dellpoc.analytics.check(analytic_callback);
                    valid = false;
                    _ref = dellpoc.hostUrls;
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                      valid_url = _ref[_i];
                      if (typeof valid_url === 'string') {
                        if (window.document.location.host.indexOf(valid_url) !== -1) {
                          valid = true;
                          break;
                        }
                      } else {
                        if (valid_url.test(window.document.location.host)) {
                          valid = true;
                          break;
                        }
                      }
                    }
                    if (!valid) {
                      console.log('invalid url!');
                      return;
                    }
                    dellpoc.strategy_manager.initialize();
                    dellpoc.next_container_ids = 1;
                    containers = dellpoc.containers;
                    for (c_name in containers) {
                      c = containers[c_name];
                      valid = false;
                      if (c.is_active_script !== void 0) {
                        if (c.is_active_script({ container: c })) {
                          valid = true;
                        }
                      } else {
                        valid = true;
                      }
                      if (!valid) {
                        continue;
                      }
                      c.ui = {};
                      if (c.script_selectors) {
                        _ref1 = c.script_selectors;
                        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                          s = _ref1[_j];
                          dellpoc.initialize_container(s({ container: c }), c);
                        }
                      }
                      if (c.selectors) {
                        _ref2 = c.selectors;
                        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                          s = _ref2[_k];
                          dellpoc.initialize_container($(s), c);
                        }
                      }
                    }
                    dellpoc.onready_chain_callback_queue.push(dellpoc.finalize_start_chain);
                    if (callback) {
                      callback();
                    }
                  };
                  dellpoc.is_chromext_available = function () {
                    var params;
                    if (dellpoc.chromeext === void 0) {
                      params = dellpoc.Utils.parse_url(window.location.href);
                      if (params.debug_with_chromeext) {
                        return true;
                      } else {
                        return false;
                      }
                    } else {
                      console.info('Using client.js/client.css from chrome extension!');
                      return false;
                    }
                  };
                  String.base64 = {
                    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                    lookup: null,
                    ie: /MSIE /.test(navigator.userAgent),
                    ieo: /MSIE [67]/.test(navigator.userAgent),
                    toUtf8: function (str) {
                      var buffer, chr, len, position;
                      position = -1;
                      buffer = [];
                      chr = [];
                      len = str.length;
                      if (/^[\x00-\x7f]*$/.test(str)) {
                        while (++position < len) {
                          buffer.push(str.charCodeAt(position));
                        }
                      } else {
                        while (++position < len) {
                          chr = str.charCodeAt(position);
                          if (chr < 128) {
                            buffer.push(chr);
                          } else {
                            if (chr < 2048) {
                              buffer.push((chr >> 6) | 192, (chr & 63) | 128);
                            } else {
                              buffer.push(
                                (chr >> 12) | 224,
                                ((chr >> 6) & 63) | 128,
                                (chr & 63) | 128
                              );
                            }
                          }
                        }
                      }
                      return buffer;
                    },
                    fromUtf8: function (str) {
                      var buffer, chr, enc, len, position;
                      position = -1;
                      buffer = [];
                      chr = [];
                      enc = [-1, -1, -1, -1];
                      len = str.length;
                      if (this.lookup === null) {
                        len = this.alphabet.length;
                        this.lookup = {};
                        while (++position < len) {
                          this.lookup[this.alphabet.charAt(position)] = position;
                        }
                        position = -1;
                      }
                      while (++position < len) {
                        enc[0] = this.lookup[str.charAt(position)];
                        enc[1] = this.lookup[str.charAt(++position)];
                        buffer.push((enc[0] << 2) | (enc[1] >> 4));
                        enc[2] = this.lookup[str.charAt(++position)];
                        if (enc[2] === 64) {
                          break;
                        }
                        buffer.push(((enc[1] & 15) << 4) | (enc[2] >> 2));
                        enc[3] = this.lookup[str.charAt(++position)];
                        if (enc[3] === 64) {
                          break;
                        }
                        buffer.push(((enc[2] & 3) << 6) | enc[3]);
                      }
                      return buffer;
                    },
                  };
                  String.prototype.base64encode = function () {
                    var buffer, enc, len, nan0, nan1, nan2, position, result, str;
                    str = this.toString();
                    buffer = String.base64.toUtf8(str);
                    position = -1;
                    enc = [-1, -1, -1, -1];
                    len = buffer.length;
                    if (String.base64.ie === true) {
                      result = [];
                      while (++position < len) {
                        nan0 = buffer[position];
                        nan1 = buffer[++position];
                        enc[0] = nan0 >> 2;
                        enc[1] = ((nan0 & 3) << 4) | (nan1 >> 4);
                        if (isNaN(nan1)) {
                          enc[2] = enc[3] = 64;
                        } else {
                          nan2 = buffer[++position];
                          enc[2] = ((nan1 & 15) << 2) | (nan2 >> 6);
                          enc[3] = isNaN(nan2) ? 64 : nan2 & 63;
                        }
                        result.push(
                          String.base64.alphabet.charAt(enc[0]),
                          String.base64.alphabet.charAt(enc[1]),
                          String.base64.alphabet.charAt(enc[2]),
                          String.base64.alphabet.charAt(enc[3])
                        );
                      }
                      return result.join('');
                    } else {
                      result = '';
                      while (++position < len) {
                        nan0 = buffer[position];
                        nan1 = buffer[++position];
                        enc[0] = nan0 >> 2;
                        enc[1] = ((nan0 & 3) << 4) | (nan1 >> 4);
                        if (isNaN(nan1) === true) {
                          enc[2] = enc[3] = 64;
                        } else {
                          nan2 = buffer[++position];
                          enc[2] = ((nan1 & 15) << 2) | (nan2 >> 6);
                          enc[3] = isNaN(nan2) ? 64 : nan2 & 63;
                        }
                        result +=
                          String.base64.alphabet[enc[0]] +
                          String.base64.alphabet[enc[1]] +
                          String.base64.alphabet[enc[2]] +
                          String.base64.alphabet[enc[3]];
                      }
                      return result;
                    }
                  };
                  String.prototype.base64decode = function () {
                    var buffer, enc, len, position, result, str;
                    str = this.toString();
                    enc = [-1, -1, -1, -1];
                    if (str.length % 4) {
                      throw new Error(
                        "InvalidCharacterError: 'base64decode' failed: The string to be decoded is not correctly encoded."
                      );
                    }
                    buffer = String.base64.fromUtf8(str);
                    position = 0;
                    len = buffer.length;
                    if (String.base64.ieo === true) {
                      result = [];
                      while (position < len) {
                        if (buffer[position] < 128) {
                          result.push(String.fromCharCode(buffer[position++]));
                        } else {
                          if (buffer[position] > 191 && buffer[position] < 224) {
                            result.push(
                              String.fromCharCode(
                                ((buffer[position++] & 31) << 6) | (buffer[position++] & 63)
                              )
                            );
                          } else {
                            result.push(
                              String.fromCharCode(
                                ((buffer[position++] & 15) << 12) |
                                  ((buffer[position++] & 63) << 6) |
                                  (buffer[position++] & 63)
                              )
                            );
                          }
                        }
                      }
                      return result.join('');
                    } else {
                      result = '';
                      while (position < len) {
                        if (buffer[position] < 128) {
                          result += String.fromCharCode(buffer[position++]);
                        } else {
                          if (buffer[position] > 191 && buffer[position] < 224) {
                            result += String.fromCharCode(
                              ((buffer[position++] & 31) << 6) | (buffer[position++] & 63)
                            );
                          } else {
                            result += String.fromCharCode(
                              ((buffer[position++] & 15) << 12) |
                                ((buffer[position++] & 63) << 6) |
                                (buffer[position++] & 63)
                            );
                          }
                        }
                      }
                      return result;
                    }
                  };
                }.apply(this, arguments);
              } finally {
                if ($___old_63f32e8b3afe3613)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_63f32e8b3afe3613
                  ));
              }
            }.call(this));
            if (!dellpoc.testing.is_enabled()) {
              dellpoc.plugins = {};
              dellpoc.containers = {};
              dellpoc.models = {};
              dellpoc.views = {};
              dellpoc.plugins.StakeHolderInjector = dellpoc.plugins.StakeHolderInjector || {};
              dellpoc.plugins.StakeHolderInjector.name = 'MicroApp.StakeHolderInjector';
              dellpoc.plugins.StakeHolderInjector.is_activated = false;
              dellpoc.plugins.InlineMsMLRecommendations =
                dellpoc.plugins.InlineMsMLRecommendations || {};
              dellpoc.plugins.InlineMsMLRecommendations.name =
                'MicroApp.InlineMsMLRecommendations';
              dellpoc.plugins.InlineMsMLRecommendations.is_activated = false;
              dellpoc.plugins.SegmentCookie = dellpoc.plugins.SegmentCookie || {};
              dellpoc.plugins.SegmentCookie.name = 'MicroApp.SegmentCookie';
              dellpoc.plugins.SegmentCookie.is_activated = false;
              dellpoc.plugins.FrequentlyBoughtTogether =
                dellpoc.plugins.FrequentlyBoughtTogether || {};
              dellpoc.plugins.FrequentlyBoughtTogether.name = 'MicroApp.FrequentlyBoughtTogether';
              dellpoc.plugins.FrequentlyBoughtTogether.is_activated = false;
              dellpoc.onready_chain_callback_queue_add(function initialize_empty_containers (
                callback
              ) {
                if (callback) {
                  callback();
                }
              });
              dellpoc.onready_chain_callback_queue_add(function initialize_containers (callback) {
                dellpoc_container = {
                  id: '2021',
                  is_active_script: function () {
                    return true;
                  },
                  plugin_type: 'EXTERNAL',
                  microAppId: 'a47935f8-fa14-4dc3-bccb-d04862430d63',
                  plug_namespace: 'dellpoc.stakeholderinjector',
                  name: 'HotSpotsSHContainer',
                  operation: 'BEFORE',
                  URLs: ['dell.com'],
                  pageSelectors: [],
                  selectors: [],
                  script_selectors: [],
                  algorithm: undefined,
                  master: '',
                  templates: {},
                  paging: 0,
                  infinite_scroll: 0,
                };
                if (dellpoc.is_container_active(dellpoc_container)) {
                  dellpoc.containers.HotSpotsSHContainer = dellpoc_container;
                  var $ = dellpoc.lib.jQuery;
                  var _ = dellpoc.lib._;
                  dellpoc.plugins.StakeHolderInjector.activate();
                  dellpoc_container.algorithm = {};
                  dellpoc_container.algorithm.name = 'BlankApi';
                  dellpoc_container.algorithm.url = 'NA';
                  dellpoc_container.algorithm.request = function () {
                    return {};
                  };
                  dellpoc_container.algorithm.response = function (data) {
                    return data;
                  };
                  dellpoc_container.master = _.template(
                    '<div style="margin: auto; cursor: pointer; min-height: 100px; height: 100%;" onclick="dellpoc_trackNlink(\'<%=url%>\');" class="dellpoc_banner_scroll_item_div dellmetrics_trending_now_item">           <div class="dellpoc_banner_scroll_item_uk_image" style="background-image: url(\'<%=imageUrl%>\');"></div>           <div style="" class="dellpoc_banner_scroll_item">                <div  class="dellpoc_banner_scroll_img_div_uk"> </div>             <div class="dellpoc_banner_scroll_label_div_uk">               <div class="dellpoc_banner_scroll_item_name"><span class="dellpoc_banner_scroll_truncate_title" title="<%=title%>"><%=truncTitle%></span></div>                  <div class="dellpoc_banner_scroll_rating" style="display:none; bottom: 20px;"><div class="starRatings starcontainer" title="<%=rating%> stars out of 5"><div class="stars"><div class="fill<%=stars%>"><img src="http://www1-cdn.dell.com/css/images/icons/ratings/rating_stars_filled_yellow.png" alt="<%=rating%> stars out of 5"></div></div></div>           </div>         </div>         '
                  );
                  dellpoc_container.templates = {};
                } else {
                  if (dellpoc.containers.HotSpotsSHContainer !== undefined) {
                    delete dellpoc.containers.HotSpotsSHContainer;
                  }
                }
                dellpoc_container = {
                  id: '23273',
                  is_active_script: function () {
                    return true;
                  },
                  plugin_type: 'EXTERNAL',
                  microAppId: '3f0c0b35-8d79-40f9-a3cc-74b058bf4990',
                  plug_namespace: 'dellpoc.inlinemsmlrecommendations',
                  name: 'UKInlineCognitiveRecommendations',
                  operation: 'AFTER',
                  URLs: ['ecomm.euro.dell.com/dellstore/basket.aspx'],
                  pageSelectors: [],
                  selectors: ['#ecomm_frm'],
                  script_selectors: [],
                  algorithm: undefined,
                  master: '',
                  templates: {},
                  paging: 0,
                  infinite_scroll: 0,
                };
                if (dellpoc.is_container_active(dellpoc_container)) {
                  dellpoc.containers.UKInlineCognitiveRecommendations = dellpoc_container;
                  var $ = dellpoc.lib.jQuery;
                  var _ = dellpoc.lib._;
                  dellpoc.plugins.InlineMsMLRecommendations.activate();
                  dellpoc_container.algorithm = {};
                  dellpoc_container.algorithm.name = 'InlineCognitiveRecommendations';
                  dellpoc_container.algorithm.url =
                    'https://recommendations.production.p13n.dell.com/cognitive';
                  dellpoc_container.algorithm.request = function () {
                    return {};
                  };
                  dellpoc_container.algorithm.response = function (data) {
                    if (data.recommendedItems) {
                      var results = [];
                      data.recommendedItems.forEach(function (item) {
                        if (item.items && item.items.length > 0) {
                          item.items[0].Id = item.items[0].id;
                          results.push(item.items[0]);
                        }
                      });
                      return results;
                    } else {
                      return [];
                    }
                  };
                  dellpoc_container.master = _.template(
                    '<div style="width: 600px; margin-left:110px;" class="dellpoc-core-hide dellpoc-core-border-bottom-dash">          <div>                <div class="dellpoc-msmlrecommendations-title" style="margin-bottom: 20; font-size: 18px; padding-top: 10px;">Customers who bought this item also bought</div>         </div>         <div class="dellpoc-insert-header"></div>          <div class="dellpoc-insert-body"></div>          <div class="dellpoc-insert-footer"></div>          <div class="dellpoc-insert-modal"></div>         </div>          <style>                      .dellpoc-msmlrecommendations-title {             font-family: \'Trebuchet MS\',Arial,Helvetica,sans-serif!important;             font-size: 20px;             color: #444;             margin-bottom: 20px         }                  .dellpoc-core-strikethrough {             text-decoration: line-through         }                  .dellpoc-core-app-container-920 {             width: 920px         }                  .dellpoc-core-app-container-720 {             width: 720px         }                  .dellpoc-core-border-bottom-dash {             border-bottom-style: dashed !important;             border-bottom-color: #cccccc !important;             border-bottom-width: 1px !important;         }                  .dellpoc-core-horizontal-strip-with-scroll {             overflow-x: scroll;             white-space: nowrap;             overflow-y: hidden;             font-family: \'Trebuchet MS\',Arial,Helvetica,sans-serif!important         }                  .dellpoc-core-half-column {             width: 45%;             display: inline-block;             margin-left: 5%         }                  .dellpoc-core-item-view-25pc-wide {             overflow: hidden;             vertical-align: text-top;             white-space: normal;             max-width: 25%;             padding: 2%;             display: inline-block         }                  .dellpoc-core-pseudo-link {             cursor: pointer         }                  .dellpoc-core-pseudo-link:hover {             text-decoration: underline         }                  .dellpoc-core-inline {             display: inline-block         }                  .dellpoc-core-center {             margin: 0 auto 0 auto         }                  .dellpoc-core-thumb-image-80pc-wide {             max-width: 80%;             max-height: 80%         }                  .dellpoc-core-pull-down {             vertical-align: text-bottom         }                  .dellpoc-core-hide {             display: none!important         }                  .dellpoc-core-invisible {             visibility: hidden;         }                  .dellpoc-core-overlay {             position: fixed;             overflow-y: scroll;             top: 0;             left: 0;             right: 0;             bottom: 0;             z-index: 999;             background-color: rgba(169,169,169,0.75)         }                  .dellpoc-core-close-window {             width: 15px;             height: 15px;             background: url(http://www1-cdn.dell.com/css/images/containers/sprite_mag.png) no-repeat -22px -97px;             cursor: pointer         }                  .dellpoc-core-pull-right {             float: right         }                  .dellpoc-core-button {             position: relative;             cursor: pointer;             color: white;             padding: 7px;             margin-bottom: 5px;             text-align: center;             text-decoration: none;             -moz-border-radius: 2px;             -webkit-border-radius: 2px;             border-radius: 2px;             background: linear-gradient(top,#74b633 0,#48951e 100%);             background: -o-linear-gradient(top,#74b633 0,#48951e 100%);             background: -ms-linear-gradient(top,#74b633 0,#48951e 100%);             background: -moz-linear-gradient(top,#74b633 0,#48951e 100%);             background: -webkit-linear-gradient(top,#74b633 0,#48951e 100%)         }                  .dellpoc-core-button:hover {             background: #47951E         }                  .dellpoc-msmlrecommendations-big-image-container {             width: 295px;             height: 295px             margin-bottom: 10px;         }                  .dellpoc-msmlrecommendations-big-image {             max-width: 295px;             max-height: 295px         }                  .dellpoc-core-gallery-item-image {             width: 64px;             height: 64px;             border: 2px solid #999;             -moz-border-radius: 5px;             -webkit-border-radius: 5px;             border-radius: 5px;             margin: 0 5px 5px 0;             cursor: pointer         }                  .dellpoc-core-gallery-item-image:hover {             opacity: .6         }                  .dellpoc-core-border-round {             border: 2px solid #EEE;             -moz-border-radius: 10px;             -webkit-border-radius: 10px;             border-radius: 10px         }                  .dellpoc-msmlrecommendations-item-title {             color: #09c;             font-weight: bold;             font-size: 17px;             line-height: 1.2em;             height: 0;             padding-bottom: 40%;             margin-bottom: 24px         }                  .dellpoc-msmlrecommendations-item-detail-title {             font-family: \'Museo\',\'Trebuchet MS\',Arial,Helvetica,sans-serif;             font-size: 18px;             color: black;             line-height: 35px         }                  .dellpoc-msmlrecommendations-item-price {             font-weight: bolder         }                  .dellpoc-msmlrecommendations-item-detail-price {             border: 2px solid #CCC;             background: #eee;             padding: 8px 12px 2px 12px;             overflow: hidden;             font-size: 15.3px;             font-weight: bold;             font-family: \'Trebuchet MS\',Arial,Helvetica,sans-serif;             margin: 10px 0 10px 0         }                  .dellpoc-msmlrecommendations-price-box {             border: 2px solid #ccc;             border-top: 0;             margin: 5%;             margin-left: 0;             padding: 8px 12px 2px 12px;             font-size: 11px;         }                  .dellpoc-msmlrecommendations-image-container {             position: relative;             text-align: left;             height: 151px;             margin-bottom: 12px         }                  .dellpoc-msmlrecommendations-item-quickview {             position: absolute;             height: 22px;             width: 95%;             margin: 0 2.5%;             left: 0;             top: 50%;             text-align: center;             font-weight: bold;             z-index: 99;             padding-top: 5px;             color: #fff;             visibility: hidden;             background-color: #6E2585;             cursor: pointer         }                  .dellpoc-msmlrecommendations-image-container:hover .dellpoc-msmlrecommendations-item-quickview {             visibility: visible         }                  .dellpoc-msmlrecommendations-item-detail {             width: 730px;             min-height: 100px;             margin: 5% auto 0 auto;             background-color: #fff;             -moz-border-radius: 10px;             -webkit-border-radius: 10px;             border-radius: 10px;             padding: 15px;             -webkit-box-shadow: 0 0 50px 10px #8A8A8A;             -moz-box-shadow: 0 0 50px 10px #8A8A8A;             box-shadow: 0 0 50px 10px #8A8A8A         }                  #dellpoc-add-to-cart-endpoint {             display: none         }         </style>         '
                  );
                  dellpoc_container.templates = {};
                  dellpoc_container.templates.item = _.template(
                    '<div class="dellpoc-core-item-view-25pc-wide" style="text-align: left; padding-top: 0;">                   <div class="dellpoc-msmlrecommendations-image-container" style="height: 100px; margin-bottom: 0;">          <span style="display: inline-block; height: 50%;"></span>         <img src="<%= (_.first(_.reject(pictures, function(picture){ picture.image_type === \'thumbnail\';})) || pictures[0]).image_url %>" style="display: inline-block; vertical-align: middle; height: auto; width: 100%;" class="dellpoc-core-thumb-image-80pc-wide">                   <div class="dellpoc-msmlrecommendations-item-quickview dellpoc-core-pseudo-link">          Quick View          </div>          </div>          <div class="dellpoc-core-item-title dellpoc-msmlrecommendations-item-title dellpoc-core-pseudo-link" title="<%=product_name%>" style="height: 42px; font-size: 12px; padding-bottom: 0; margin-bottom: 0;"><%=truncate(product_name)%></div>          <div class="dellpoc-msmlrecommendations-price-box" style="border: none; padding: 5px 1px 5px 1px;">          <div class="dellpoc-core-item-info-text dellpoc-msmlrecommendations-item-msrp dellpoc-core-invisible" style="display:<%=msrp%>">Market Price <span class="dellpoc-core-pull-right dellpoc-core-strikethrough"><%= currency %><%=msrp%></span></div>          <div class="dellpoc-core-item-info-text dellpoc-msmlrecommendations-item-price ">Dell Price <span class="dellpoc-core-pull-right"><%= currency %><%=sale_price%></span></div>          </div>         <div class="dellpoc-core-button dellpoc-msmlrecommendations-add-to-cart">             <strong>Add to Cart</strong>         </div>         </div>          '
                  );
                  dellpoc_container.templates.body = _.template(
                    '<div class="dellpoc-active-content"></div>         '
                  );
                  dellpoc_container.templates.header = _.template('<div></div>         ');
                  dellpoc_container.templates.footer = _.template('<div></div>         ');
                  dellpoc_container.templates.item_detail = _.template(
                    '<div class="dellpoc-msmlrecommendations-item-detail">              <div class="dellpoc-core-close-window dellpoc-core-pull-right"></div>             <div class="dellpoc-core-half-column">                 <div class="dellpoc-msmlrecommendations-big-image-container">                     <img class="dellpoc-msmlrecommendations-big-image" src="<%= pictures[0].image_type === \'thumnail\' && pictures.length > 1 ? pictures[1].image_url : pictures[0].image_url%>">                 </div>                                  <div class="dellpoc-core-image-gallery"></div>                 <span class="dellpoc-msmlrecommendations-item-detail-title">                     <a target="_blank" href="<%= model_url %>"><%= model_name %></a>                 </span>                 <div>                     <div class="dellpoc-msmlrecommendations-item-detail-price">Dell Price                          <span class="dellpoc-msmlrecommendations-item-detail-price-value dellpoc-core-pull-right">                             <%= currency %><%= sale_price %>                         </span>                     </div>                 </div>                 <div class="dellpoc-core-button dellpoc-msmlrecommendations-add-to-cart">                     <strong>Add to Cart</strong>                 </div>                              </div>             <div class="dellpoc-core-half-column" style="vertical-align: top;">                 <div class="dellpoc-msmlrecommendations-truncate-description">                     <div class="dellpoc-msmlrecommendations-short-description"><%= truncate(long_description) %>... <span class="dellpoc-msmlrecommendations-expand-btn">Expand All<span></div>                     <div class="dellpoc-msmlrecommendations-long-description"><%= long_description %></div>                 </div>                 <%if (techSpecs){%>                 <div class="dellpoc-msmlrecommendations-tech-specs-container">                 <div  class="dellpoc-core-stripped dellpoc-msmlrecommendations-tech-specs">                                      <% _.each(techSpecs, function(spec) { %>                         <div class="dellpoc-msmlrecommendations-tech-specs-row">                             <div class="dellpoc-msmlrecommendations-tech-specs-title">                                 <strong><%= spec.tech_spec_title %></strong>                             </div>                             <div class="dellpoc-msmlrecommendations-tech-specs-description">                                 <%= spec.tech_spec_desc %>                             </div>                         </div>                     <% }) %>                                      </div>                 </div><%}%>             </div>         </div>         <style>         .dellpoc-msmlrecommendations-item-detail-title{         color: #444;            line-height: 26px;         }                  .dellpoc-msmlrecommendations-long-description, .dellpoc-msmlrecommendations-short-description{             display: block;             width: 100%;             line-height: 20px;             padding: 30px 0;             font-size: 14px !important;         }                  .dellpoc-msmlrecommendations-tech-specs-row{             padding: 7px 5px 7px 20px;             line-height: 1.4em;             font-size: 12px;             border-bottom: 1px solid #eee;         }                  .dellpoc-core-stripped>.dellpoc-msmlrecommendations-tech-specs-row:nth-child(odd){             background: #eee;         }                  .dellpoc-msmlrecommendations-tech-specs-container{         height: 360px;         overflow-y: auto;         width: 100%;         border: 1px solid #ccc;         }                  .dellpoc-msmlrecommendations-tech-specs{          width: 100%;         }                  .dellpoc-core-half-column{         margin-left: 3% !important;                  }                  .dellpoc-msmlrecommendations-big-image{          width: 295px;          height: 295px;         }                  .dellpoc-msmlrecommendations-expand-btn{         color: RGB(0,153,204);         cursor: pointer;                  }                  .dellpoc-msmlrecommendations-short-description, .dellpoc-msmlrecommendations-long-description{          display: none;            }                  .dellpoc-msmlrecommendations-truncate-description .dellpoc-msmlrecommendations-short-description,         .dellpoc-msmlrecommendations-full-description .dellpoc-msmlrecommendations-long-description{          display: block;            }                  .dellpoc-core-image-gallery .dellpoc-core-active {          border-color: #39C !important;            }                  .dellpoc-msmlrecommendations-big-image{         width: 100%;         height: auto;         margin-bottom: 10px;                  }                                    </style>         '
                  );
                  dellpoc_container.templates.item_image = _.template(
                    '<div class="dellpoc-core-gallery-item-image-container">  <div class="dellpoc-core-gallery-item-scaffold"></div>         <img class="dellpoc-core-gallery-item-image" src="<%= image_url %>"></div>         '
                  );
                  dellpoc_container.templates.item_detail_no_specs = _.template(
                    '<div class="dellpoc-msmlrecommendations-item-detail">              <div class="dellpoc-core-close-window dellpoc-core-pull-right"></div>             <div class="">                 <div class="dellpoc-msmlrecommendations-big-image-container">                     <img class="dellpoc-msmlrecommendations-big-image" src="<%= pictures[0].image_url %>">                 </div>                                  <div class="dellpoc-core-image-gallery"></div>                 <span class="dellpoc-msmlrecommendations-item-detail-title">                     <a href="<%= model_url %>"><%= model_name %></a>                 </span>                 <div>                     <div class="dellpoc-msmlrecommendations-item-detail-price">Dell Price                          <span class="dellpoc-msmlrecommendations-item-detail-price-value dellpoc-core-pull-right">                             <%= currency %><%= sale_price %>                         </span>                     </div>                 </div>                 <div class="dellpoc-core-button dellpoc-msmlrecommendations-add-to-cart">                     <strong>Add to Cart</strong>                 </div>                              </div>         </div>         <style>         .dellpoc-msmlrecommendations-item-detail-title{         color: #444;            line-height: 26px;         }                  .dellpoc-msmlrecommendations-long-description, .dellpoc-msmlrecommendations-short-description{             display: block;             width: 100%;             line-height: 20px;             padding: 30px 0;             font-size: 14px !important;         }                  .dellpoc-msmlrecommendations-tech-specs-row{             padding: 7px 5px 7px 20px;             line-height: 1.4em;             font-size: 12px;             border-bottom: 1px solid #eee;         }                  .dellpoc-core-stripped>.dellpoc-msmlrecommendations-tech-specs-row:nth-child(odd){             background: #eee;         }                  .dellpoc-msmlrecommendations-tech-specs-container{         height: 360px;         overflow-y: auto;         width: 100%;         border: 1px solid #ccc;         }                  .dellpoc-msmlrecommendations-tech-specs{          width: 100%;         }                  .dellpoc-core-half-column{         margin-left: 3%;                  }                  .dellpoc-msmlrecommendations-big-image{          width: 295px;          height: 295px;         }                  .dellpoc-msmlrecommendations-expand-btn{         color: RGB(0,153,204);         cursor: pointer;                  }                  .dellpoc-msmlrecommendations-short-description, .dellpoc-msmlrecommendations-long-description{          display: none;            }                  .dellpoc-msmlrecommendations-truncate-description .dellpoc-msmlrecommendations-short-description,         .dellpoc-msmlrecommendations-full-description .dellpoc-msmlrecommendations-long-description{          display: block;            }                  .dellpoc-core-image-gallery .dellpoc-core-active {          border-color: #39C !important;            }                  .dellpoc-msmlrecommendations-big-image{         width: 100%;         height: auto;                  }                                    </style>         '
                  );
                } else {
                  if (dellpoc.containers.UKInlineCognitiveRecommendations !== undefined) {
                    delete dellpoc.containers.UKInlineCognitiveRecommendations;
                  }
                }
                dellpoc_container = {
                  id: '23274',
                  is_active_script: function () {
                    return true;
                  },
                  plugin_type: 'EXTERNAL',
                  microAppId: '3f0c0b35-8d79-40f9-a3cc-74b058bf4990',
                  plug_namespace: 'dellpoc.inlinemsmlrecommendations',
                  name: 'InlineCognitiveRecommendations',
                  operation: 'AFTER',
                  URLs: ['ecomm.dell.com/dellstore/basket.aspx'],
                  pageSelectors: [],
                  selectors: ['#ecomm_frm'],
                  script_selectors: [],
                  algorithm: undefined,
                  master: '',
                  templates: {},
                  paging: 0,
                  infinite_scroll: 0,
                };
                if (dellpoc.is_container_active(dellpoc_container)) {
                  dellpoc.containers.InlineCognitiveRecommendations = dellpoc_container;
                  var $ = dellpoc.lib.jQuery;
                  var _ = dellpoc.lib._;
                  dellpoc.plugins.InlineMsMLRecommendations.activate();
                  dellpoc_container.algorithm = {};
                  dellpoc_container.algorithm.name = 'InlineCognitiveRecommendations';
                  dellpoc_container.algorithm.url =
                    'https://recommendations.production.p13n.dell.com/cognitive';
                  dellpoc_container.algorithm.request = function () {
                    return {};
                  };
                  dellpoc_container.algorithm.response = function (data) {
                    if (data.recommendedItems) {
                      var results = [];
                      data.recommendedItems.forEach(function (item) {
                        if (item.items && item.items.length > 0) {
                          item.items[0].Id = item.items[0].id;
                          results.push(item.items[0]);
                        }
                      });
                      return results;
                    } else {
                      return [];
                    }
                  };
                  dellpoc_container.master = _.template(
                    '<div style="width: 600px; margin-left:110px;" class="dellpoc-core-hide dellpoc-core-border-bottom-dash">          <div>                <div class="dellpoc-msmlrecommendations-title" style="margin-bottom: 20; font-size: 18px; padding-top: 10px;">Customers who bought this item also bought</div>         </div>         <div class="dellpoc-insert-header"></div>          <div class="dellpoc-insert-body"></div>          <div class="dellpoc-insert-footer"></div>          <div class="dellpoc-insert-modal"></div>         </div>          <style>                      .dellpoc-msmlrecommendations-title {             font-family: \'Trebuchet MS\',Arial,Helvetica,sans-serif!important;             font-size: 20px;             color: #444;             margin-bottom: 20px         }                  .dellpoc-core-strikethrough {             text-decoration: line-through         }                  .dellpoc-core-app-container-920 {             width: 920px         }                  .dellpoc-core-app-container-720 {             width: 720px         }                  .dellpoc-core-border-bottom-dash {             border-bottom-style: dashed !important;             border-bottom-color: #cccccc !important;             border-bottom-width: 1px !important;         }                  .dellpoc-core-horizontal-strip-with-scroll {             overflow-x: scroll;             white-space: nowrap;             overflow-y: hidden;             font-family: \'Trebuchet MS\',Arial,Helvetica,sans-serif!important         }                  .dellpoc-core-half-column {             width: 45%;             display: inline-block;             margin-left: 5%         }                  .dellpoc-core-item-view-25pc-wide {             overflow: hidden;             vertical-align: text-top;             white-space: normal;             max-width: 25%;             padding: 2%;             display: inline-block         }                  .dellpoc-core-pseudo-link {             cursor: pointer         }                  .dellpoc-core-pseudo-link:hover {             text-decoration: underline         }                  .dellpoc-core-inline {             display: inline-block         }                  .dellpoc-core-center {             margin: 0 auto 0 auto         }                  .dellpoc-core-thumb-image-80pc-wide {             max-width: 80%;             max-height: 80%         }                  .dellpoc-core-pull-down {             vertical-align: text-bottom         }                  .dellpoc-core-hide {             display: none!important         }                  .dellpoc-core-invisible {             visibility: hidden;         }                  .dellpoc-core-overlay {             position: fixed;             overflow-y: scroll;             top: 0;             left: 0;             right: 0;             bottom: 0;             z-index: 999;             background-color: rgba(169,169,169,0.75)         }                  .dellpoc-core-close-window {             width: 15px;             height: 15px;             background: url(http://www1-cdn.dell.com/css/images/containers/sprite_mag.png) no-repeat -22px -97px;             cursor: pointer         }                  .dellpoc-core-pull-right {             float: right         }                  .dellpoc-core-button {             position: relative;             cursor: pointer;             color: white;             padding: 7px;             margin-bottom: 5px;             text-align: center;             text-decoration: none;             -moz-border-radius: 2px;             -webkit-border-radius: 2px;             border-radius: 2px;             background: linear-gradient(top,#74b633 0,#48951e 100%);             background: -o-linear-gradient(top,#74b633 0,#48951e 100%);             background: -ms-linear-gradient(top,#74b633 0,#48951e 100%);             background: -moz-linear-gradient(top,#74b633 0,#48951e 100%);             background: -webkit-linear-gradient(top,#74b633 0,#48951e 100%)         }                  .dellpoc-core-button:hover {             background: #47951E         }                  .dellpoc-msmlrecommendations-big-image-container {             width: 295px;             height: 295px             margin-bottom: 10px;         }                  .dellpoc-msmlrecommendations-big-image {             max-width: 295px;             max-height: 295px         }                  .dellpoc-core-gallery-item-image {             width: 64px;             height: 64px;             border: 2px solid #999;             -moz-border-radius: 5px;             -webkit-border-radius: 5px;             border-radius: 5px;             margin: 0 5px 5px 0;             cursor: pointer         }                  .dellpoc-core-gallery-item-image:hover {             opacity: .6         }                  .dellpoc-core-border-round {             border: 2px solid #EEE;             -moz-border-radius: 10px;             -webkit-border-radius: 10px;             border-radius: 10px         }                  .dellpoc-msmlrecommendations-item-title {             color: #09c;             font-weight: bold;             font-size: 17px;             line-height: 1.2em;             height: 0;             padding-bottom: 40%;             margin-bottom: 24px         }                  .dellpoc-msmlrecommendations-item-detail-title {             font-family: \'Museo\',\'Trebuchet MS\',Arial,Helvetica,sans-serif;             font-size: 18px;             color: black;             line-height: 35px         }                  .dellpoc-msmlrecommendations-item-price {             font-weight: bolder         }                  .dellpoc-msmlrecommendations-item-detail-price {             border: 2px solid #CCC;             background: #eee;             padding: 8px 12px 2px 12px;             overflow: hidden;             font-size: 15.3px;             font-weight: bold;             font-family: \'Trebuchet MS\',Arial,Helvetica,sans-serif;             margin: 10px 0 10px 0         }                  .dellpoc-msmlrecommendations-price-box {             border: 2px solid #ccc;             border-top: 0;             margin: 5%;             margin-left: 0;             padding: 8px 12px 2px 12px;             font-size: 11px;         }                  .dellpoc-msmlrecommendations-image-container {             position: relative;             text-align: left;             height: 151px;             margin-bottom: 12px         }                  .dellpoc-msmlrecommendations-item-quickview {             position: absolute;             height: 22px;             width: 95%;             margin: 0 2.5%;             left: 0;             top: 50%;             text-align: center;             font-weight: bold;             z-index: 99;             padding-top: 5px;             color: #fff;             visibility: hidden;             background-color: #6E2585;             cursor: pointer         }                  .dellpoc-msmlrecommendations-image-container:hover .dellpoc-msmlrecommendations-item-quickview {             visibility: visible         }                  .dellpoc-msmlrecommendations-item-detail {             width: 730px;             min-height: 100px;             margin: 5% auto 0 auto;             background-color: #fff;             -moz-border-radius: 10px;             -webkit-border-radius: 10px;             border-radius: 10px;             padding: 15px;             -webkit-box-shadow: 0 0 50px 10px #8A8A8A;             -moz-box-shadow: 0 0 50px 10px #8A8A8A;             box-shadow: 0 0 50px 10px #8A8A8A         }                  #dellpoc-add-to-cart-endpoint {             display: none         }         </style>         '
                  );
                  dellpoc_container.templates = {};
                  dellpoc_container.templates.item = _.template(
                    '<div class="dellpoc-core-item-view-25pc-wide" style="text-align: left; padding-top: 0;">                   <div class="dellpoc-msmlrecommendations-image-container" style="height: 100px; margin-bottom: 0;">          <span style="display: inline-block; height: 50%;"></span>         <img src="<%= (_.first(_.reject(pictures, function(picture){ picture.image_type === \'thumbnail\';})) || pictures[0]).image_url %>" style="display: inline-block; vertical-align: middle; height: auto; width: 100%;" class="dellpoc-core-thumb-image-80pc-wide">                   <div class="dellpoc-msmlrecommendations-item-quickview dellpoc-core-pseudo-link">          Quick View          </div>          </div>          <div class="dellpoc-core-item-title dellpoc-msmlrecommendations-item-title dellpoc-core-pseudo-link" title="<%=product_name%>" style="height: 42px; font-size: 12px; padding-bottom: 0; margin-bottom: 0;"><%=truncate(product_name)%></div>          <div class="dellpoc-msmlrecommendations-price-box" style="border: none; padding: 5px 1px 5px 1px;">          <div class="dellpoc-core-item-info-text dellpoc-msmlrecommendations-item-msrp dellpoc-core-invisible" style="display:<%=msrp%>">Market Price <span class="dellpoc-core-pull-right dellpoc-core-strikethrough"><%= currency %><%=msrp%></span></div>          <div class="dellpoc-core-item-info-text dellpoc-msmlrecommendations-item-price ">Dell Price <span class="dellpoc-core-pull-right"><%= currency %><%=sale_price%></span></div>          </div>         <div class="dellpoc-core-button dellpoc-msmlrecommendations-add-to-cart">             <strong>Add to Cart</strong>         </div>         </div>          '
                  );
                  dellpoc_container.templates.body = _.template(
                    '<div class="dellpoc-active-content"></div>         '
                  );
                  dellpoc_container.templates.header = _.template('<div></div>         ');
                  dellpoc_container.templates.footer = _.template('<div></div>         ');
                  dellpoc_container.templates.item_detail = _.template(
                    '<div class="dellpoc-msmlrecommendations-item-detail">              <div class="dellpoc-core-close-window dellpoc-core-pull-right"></div>             <div class="dellpoc-core-half-column">                 <div class="dellpoc-msmlrecommendations-big-image-container">                     <img class="dellpoc-msmlrecommendations-big-image" src="<%= pictures[0].image_type === \'thumnail\' && pictures.length > 1 ? pictures[1].image_url : pictures[0].image_url%>">                 </div>                                  <div class="dellpoc-core-image-gallery"></div>                 <span class="dellpoc-msmlrecommendations-item-detail-title">                     <a target="_blank" href="<%= model_url %>"><%= model_name %></a>                 </span>                 <div>                     <div class="dellpoc-msmlrecommendations-item-detail-price">Dell Price                          <span class="dellpoc-msmlrecommendations-item-detail-price-value dellpoc-core-pull-right">                             <%= currency %><%= sale_price %>                         </span>                     </div>                 </div>                 <div class="dellpoc-core-button dellpoc-msmlrecommendations-add-to-cart">                     <strong>Add to Cart</strong>                 </div>                              </div>             <div class="dellpoc-core-half-column" style="vertical-align: top;">                 <div class="dellpoc-msmlrecommendations-truncate-description">                     <div class="dellpoc-msmlrecommendations-short-description"><%= truncate(long_description) %>... <span class="dellpoc-msmlrecommendations-expand-btn">Expand All<span></div>                     <div class="dellpoc-msmlrecommendations-long-description"><%= long_description %></div>                 </div>                 <%if (techSpecs){%>                 <div class="dellpoc-msmlrecommendations-tech-specs-container">                 <div  class="dellpoc-core-stripped dellpoc-msmlrecommendations-tech-specs">                                      <% _.each(techSpecs, function(spec) { %>                         <div class="dellpoc-msmlrecommendations-tech-specs-row">                             <div class="dellpoc-msmlrecommendations-tech-specs-title">                                 <strong><%= spec.tech_spec_title %></strong>                             </div>                             <div class="dellpoc-msmlrecommendations-tech-specs-description">                                 <%= spec.tech_spec_desc %>                             </div>                         </div>                     <% }) %>                                      </div>                 </div><%}%>             </div>         </div>         <style>         .dellpoc-msmlrecommendations-item-detail-title{         color: #444;            line-height: 26px;         }                  .dellpoc-msmlrecommendations-long-description, .dellpoc-msmlrecommendations-short-description{             display: block;             width: 100%;             line-height: 20px;             padding: 30px 0;             font-size: 14px !important;         }                  .dellpoc-msmlrecommendations-tech-specs-row{             padding: 7px 5px 7px 20px;             line-height: 1.4em;             font-size: 12px;             border-bottom: 1px solid #eee;         }                  .dellpoc-core-stripped>.dellpoc-msmlrecommendations-tech-specs-row:nth-child(odd){             background: #eee;         }                  .dellpoc-msmlrecommendations-tech-specs-container{         height: 360px;         overflow-y: auto;         width: 100%;         border: 1px solid #ccc;         }                  .dellpoc-msmlrecommendations-tech-specs{          width: 100%;         }                  .dellpoc-core-half-column{         margin-left: 3% !important;                  }                  .dellpoc-msmlrecommendations-big-image{          width: 295px;          height: 295px;         }                  .dellpoc-msmlrecommendations-expand-btn{         color: RGB(0,153,204);         cursor: pointer;                  }                  .dellpoc-msmlrecommendations-short-description, .dellpoc-msmlrecommendations-long-description{          display: none;            }                  .dellpoc-msmlrecommendations-truncate-description .dellpoc-msmlrecommendations-short-description,         .dellpoc-msmlrecommendations-full-description .dellpoc-msmlrecommendations-long-description{          display: block;            }                  .dellpoc-core-image-gallery .dellpoc-core-active {          border-color: #39C !important;            }                  .dellpoc-msmlrecommendations-big-image{         width: 100%;         height: auto;         margin-bottom: 10px;                  }                                    </style>         '
                  );
                  dellpoc_container.templates.item_image = _.template(
                    '<div class="dellpoc-core-gallery-item-image-container">  <div class="dellpoc-core-gallery-item-scaffold"></div>         <img class="dellpoc-core-gallery-item-image" src="<%= image_url %>"></div>         '
                  );
                  dellpoc_container.templates.item_detail_no_specs = _.template(
                    '<div class="dellpoc-msmlrecommendations-item-detail">              <div class="dellpoc-core-close-window dellpoc-core-pull-right"></div>             <div class="">                 <div class="dellpoc-msmlrecommendations-big-image-container">                     <img class="dellpoc-msmlrecommendations-big-image" src="<%= pictures[0].image_url %>">                 </div>                                  <div class="dellpoc-core-image-gallery"></div>                 <span class="dellpoc-msmlrecommendations-item-detail-title">                     <a href="<%= model_url %>"><%= model_name %></a>                 </span>                 <div>                     <div class="dellpoc-msmlrecommendations-item-detail-price">Dell Price                          <span class="dellpoc-msmlrecommendations-item-detail-price-value dellpoc-core-pull-right">                             <%= currency %><%= sale_price %>                         </span>                     </div>                 </div>                 <div class="dellpoc-core-button dellpoc-msmlrecommendations-add-to-cart">                     <strong>Add to Cart</strong>                 </div>                              </div>         </div>         <style>         .dellpoc-msmlrecommendations-item-detail-title{         color: #444;            line-height: 26px;         }                  .dellpoc-msmlrecommendations-long-description, .dellpoc-msmlrecommendations-short-description{             display: block;             width: 100%;             line-height: 20px;             padding: 30px 0;             font-size: 14px !important;         }                  .dellpoc-msmlrecommendations-tech-specs-row{             padding: 7px 5px 7px 20px;             line-height: 1.4em;             font-size: 12px;             border-bottom: 1px solid #eee;         }                  .dellpoc-core-stripped>.dellpoc-msmlrecommendations-tech-specs-row:nth-child(odd){             background: #eee;         }                  .dellpoc-msmlrecommendations-tech-specs-container{         height: 360px;         overflow-y: auto;         width: 100%;         border: 1px solid #ccc;         }                  .dellpoc-msmlrecommendations-tech-specs{          width: 100%;         }                  .dellpoc-core-half-column{         margin-left: 3%;                  }                  .dellpoc-msmlrecommendations-big-image{          width: 295px;          height: 295px;         }                  .dellpoc-msmlrecommendations-expand-btn{         color: RGB(0,153,204);         cursor: pointer;                  }                  .dellpoc-msmlrecommendations-short-description, .dellpoc-msmlrecommendations-long-description{          display: none;            }                  .dellpoc-msmlrecommendations-truncate-description .dellpoc-msmlrecommendations-short-description,         .dellpoc-msmlrecommendations-full-description .dellpoc-msmlrecommendations-long-description{          display: block;            }                  .dellpoc-core-image-gallery .dellpoc-core-active {          border-color: #39C !important;            }                  .dellpoc-msmlrecommendations-big-image{         width: 100%;         height: auto;                  }                                    </style>         '
                  );
                } else {
                  if (dellpoc.containers.InlineCognitiveRecommendations !== undefined) {
                    delete dellpoc.containers.InlineCognitiveRecommendations;
                  }
                }
                dellpoc_container = {
                  id: '9900',
                  is_active_script: function () {
                    return true;
                  },
                  plugin_type: 'EXTERNAL',
                  microAppId: 'c81b3c8f-8103-4518-9c91-373be28d17f4',
                  plug_namespace: 'dellpoc.segmentcookie',
                  name: 'SegmentCookie',
                  operation: 'BEFORE',
                  URLs: ['dell.com'],
                  pageSelectors: [],
                  selectors: ['body'],
                  script_selectors: [],
                  algorithm: undefined,
                  master: '',
                  templates: {},
                  paging: 0,
                  infinite_scroll: 0,
                };
                if (dellpoc.is_container_active(dellpoc_container)) {
                  dellpoc.containers.SegmentCookie = dellpoc_container;
                  var $ = dellpoc.lib.jQuery;
                  var _ = dellpoc.lib._;
                  dellpoc.plugins.SegmentCookie.activate();
                  dellpoc_container.algorithm = {};
                  dellpoc_container.algorithm.name = 'BlankApi';
                  dellpoc_container.algorithm.url = 'NA';
                  dellpoc_container.algorithm.request = function () {
                    return {};
                  };
                  dellpoc_container.algorithm.response = function (data) {
                    return data;
                  };
                  dellpoc_container.master = _.template(
                    '<div class="dellpoc-active-content">         </div>         '
                  );
                  dellpoc_container.templates = {};
                } else {
                  if (dellpoc.containers.SegmentCookie !== undefined) {
                    delete dellpoc.containers.SegmentCookie;
                  }
                }
                if (callback) {
                  callback();
                }
              });
              dellpoc.plugins.StakeHolderInjector.activate = function () {
                if (!dellpoc.plugins.StakeHolderInjector.is_activated) {
                  dellpoc.plugins.StakeHolderInjector.is_activated = true;
                  dellpoc.stakeholderinjector = {};
                  dellpoc.stakeholderinjector.pages = [];
                  var page = undefined;
                  page = {
                    id: 'SHL_1_1023',
                    url: 'dell.com',
                    javaScript:
                      '//p.cdn.persaas.dell.com/app/ec951196-2be1-4539-9e8f-3fc9f59590a9/stakeHolder/c6b2346e-ebf5-4d26-b24e-b28f0d55a609/client.js',
                  };
                  dellpoc.stakeholderinjector.pages.push(page);
                  page = undefined;
                  dellpoc.stakeholderinjector = dellpoc.stakeholderinjector || {};
                  dellpoc.stakeholderinjector.models = dellpoc.stakeholderinjector.models || {};
                  dellpoc.stakeholderinjector.views = dellpoc.stakeholderinjector.views || {};
                  (function () {
                    var $, jQuery, _;
                    _ = dellpoc.lib._;
                    $ = jQuery = dellpoc.lib.jQuery;
                    dellpoc.stakeholder = dellpoc.stakeholder || {};
                    dellpoc.stakeholder.activeLicenses = {};
                    dellpoc.stakeholder.containers = {};
                    dellpoc.stakeholder.views = {};
                    dellpoc.stakeholder.is_container_active = function (c) {
                      var cps,
                        cu,
                        jps,
                        pageURL,
                        r,
                        s,
                        valid,
                        _i,
                        _j,
                        _k,
                        _l,
                        _len,
                        _len1,
                        _len2,
                        _len3,
                        _ref,
                        _ref1,
                        _ref2,
                        _ref3;
                      $ = dellpoc.lib.jQuery;
                      if (!dellpoc.stakeholder.is_nabisco_active(c.nabisco)) {
                        return false;
                      }
                      pageURL = dellpoc.Utils.strip_debug_script(document.location.href);
                      valid = false;
                      if (c.urls.length > 0) {
                        _ref = c.urls;
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                          cu = _ref[_i];
                          if (typeof cu.url === 'string') {
                            if (pageURL.indexOf(cu.url) !== -1) {
                              valid = true;
                            }
                          } else {
                            if (cu.url.test(pageURL) !== -1) {
                              valid = true;
                            }
                          }
                        }
                      } else {
                        valid = true;
                      }
                      if (!valid) {
                        return valid;
                      }
                      valid = false;
                      if (c.pageSelectors.length > 0) {
                        _ref1 = c.pageSelectors;
                        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                          cps = _ref1[_j];
                          jps = $(cps.selector);
                          if (jps.length > 0) {
                            valid = true;
                          }
                        }
                      } else {
                        valid = true;
                      }
                      if (!valid) {
                        return valid;
                      }
                      valid = false;
                      if (c.script_selectors) {
                        _ref2 = c.script_selectors;
                        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                          s = _ref2[_k];
                          r = s.script({ container: c });
                          if (r.length > 0) {
                            valid = true;
                          }
                        }
                      }
                      if (c.selectors) {
                        _ref3 = c.selectors;
                        for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                          s = _ref3[_l];
                          if ($(s.selector).length > 0) {
                            valid = true;
                          }
                        }
                      }
                      return valid;
                    };
                    dellpoc.stakeholder.is_nabisco_active = function (nabisco) {
                      var end, now, start;
                      try {
                        now = Date.now();
                        start = Date.parse(nabisco.start);
                        end = Date.parse(nabisco.end);
                        if (
                          dellpoc.stakeholder.compareDate(start, now) <= 0 &&
                          dellpoc.stakeholder.compareDate(end, now) >= 0
                        ) {
                          return true;
                        } else {
                          return false;
                        }
                      } catch (_error) {
                        return false;
                      }
                    };
                    dellpoc.stakeholder.compareDate = function (a, b) {
                      return (a > b) - (a < b);
                    };
                    dellpoc.stakeholder.set_attr = function ($el, value) {
                      var attrValue, values;
                      attrValue = $el.attr('data-dellpoc-ciid');
                      if (attrValue) {
                        values = attrValue.split(',');
                      } else {
                        values = [];
                      }
                      values.push(value);
                      return $el.attr('data-dellpoc-ciid', values.join(','));
                    };
                    dellpoc.stakeholder.injection_elements_for_container = function (c) {
                      var $el,
                        ciid,
                        el,
                        id,
                        s,
                        skip,
                        _i,
                        _j,
                        _k,
                        _l,
                        _len,
                        _len1,
                        _len2,
                        _len3,
                        _ref,
                        _ref1,
                        _results;
                      id = 0;
                      skip = false;
                      c.ciids = [];
                      if (c.getInjectionLocationScript) {
                        eval('var fn=' + c.getInjectionLocationScript);
                        $el = fn();
                        if ($el !== void 0) {
                          for (_i = 0, _len = $el.length; _i < _len; _i++) {
                            el = $el[_i];
                            ciid = { id: c.id + ':' + id++, $el: $(el) };
                            c.ciids.push(ciid);
                            dellpoc.stakeholder.set_attr($el, ciid.id);
                            dellpoc.stakeholder.containers[ciid.id] = c;
                            skip = true;
                          }
                        }
                      }
                      if (!skip) {
                        _ref = c.selectors;
                        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                          s = _ref[_j];
                          $el = $(s.selector);
                          for (_k = 0, _len2 = $el.length; _k < _len2; _k++) {
                            el = $el[_k];
                            ciid = { id: c.id + ':' + id++, $el: $(el) };
                            c.ciids.push(ciid);
                            dellpoc.stakeholder.set_attr($el, ciid.id);
                            dellpoc.stakeholder.containers[ciid.id] = c;
                          }
                        }
                        _ref1 = c.scriptSelectors;
                        _results = [];
                        for (_l = 0, _len3 = _ref1.length; _l < _len3; _l++) {
                          s = _ref1[_l];
                          eval('var fn=' + s.script);
                          $el = fn();
                          _results.push(
                            (function () {
                              var _len4, _m, _results1;
                              _results1 = [];
                              for (_m = 0, _len4 = $el.length; _m < _len4; _m++) {
                                el = $el[_m];
                                ciid = { id: c.id + ':' + id++, $el: $(el) };
                                c.ciids.push(ciid);
                                dellpoc.stakeholder.set_attr($el, ciid.id);
                                _results1.push((dellpoc.stakeholder.containers[ciid.id] = c));
                              }
                              return _results1;
                            })()
                          );
                        }
                        return _results;
                      }
                    };
                    dellpoc.stakeholder.initialize_container = function (c) {
                      var $el, cid, ciid, i, view, _i, _len, _ref;
                      if (c.ciids.length > 0) {
                        _ref = c.ciids;
                        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                          ciid = _ref[i];
                          cid = ciid.id;
                          $el = ciid.$el;
                          c.ui[cid] = {};
                          if (c.paging) {
                            c.ui[cid].model = new c.paging_collection({ algorithm: c.algorithm });
                          } else {
                            c.ui[cid].model = new c.collection({ algorithm: c.algorithm });
                          }
                          if (c.infinite_scroll) {
                            c.ui[cid].view = new c.infinite_scroll_view({
                              container: c,
                              el: $el,
                              model: c.ui[cid].model,
                            });
                          } else {
                            c.ui[cid].view = new c.view({
                              container: c,
                              el: $el,
                              model: c.ui[cid].model,
                            });
                          }
                          c.ui[cid].view.render();
                          view = c.ui[cid].view;
                          dellpoc.stakeholder.views[cid] = view;
                          c.ui[cid].model.add([c.nabisco]);
                          if (view.initialize_analytics) {
                            view.initialize_analytics();
                          }
                          return;
                        }
                      }
                    };
                  }.call(this));
                  (function () {
                    var $, StakeHolderInjectorApp, _;
                    $ = dellpoc.lib.jQuery;
                    _ = dellpoc.lib._;
                    StakeHolderInjectorApp = (function () {
                      StakeHolderInjectorApp.prototype.loaded = false;
                      function StakeHolderInjectorApp () {
                        var currentPage;
                        currentPage = dellpoc.Utils.strip_debug_script(window.location.href);
                        if (
                          currentPage.toLowerCase().indexOf('accessories.us.dell.com') !== -1 ||
                          currentPage.toLowerCase().indexOf('accessories.dell.com') !== -1
                        ) {
                          _.each(dellpoc.stakeholderinjector.pages, function (page) {
                            if (dellpoc.Utils.is_valid_url(currentPage, page.url)) {
                              return dellpoc.load_javascript(page.id, page.javaScript);
                            }
                          });
                        }
                        return;
                      }
                      return StakeHolderInjectorApp;
                    })();
                    dellpoc.stakeholderinjector.app = new StakeHolderInjectorApp();
                    dellpoc.strategies.push(dellpoc.stakeholderinjector.app);
                  }.call(this));
                }
              };
              dellpoc.finalize_chain_callback_queue_add(function (callback) {
                dellpoc.plugins.StakeHolderInjector.activate();
                if (callback) {
                  callback();
                }
              });
              dellpoc.plugins.InlineMsMLRecommendations.activate = function () {
                if (!dellpoc.plugins.InlineMsMLRecommendations.is_activated) {
                  dellpoc.plugins.InlineMsMLRecommendations.is_activated = true;
                  dellpoc.inlinemsmlrecommendations = dellpoc.inlinemsmlrecommendations || {};
                  dellpoc.inlinemsmlrecommendations.models =
                    dellpoc.inlinemsmlrecommendations.models || {};
                  dellpoc.inlinemsmlrecommendations.views =
                    dellpoc.inlinemsmlrecommendations.views || {};
                  var azureMLRecommendations = (function (jQuery) {
                    var DM_EncryptedCredentials;
                    var DM_ModelId;
                    var DM_Session;
                    var ApiVersion = "'1.0'";
                    var DM_Server = 'https://api.datamarket.azure.com/amla/recommendations/v2/';
                    var DM_DaServer =
                      'https://api.datamarket.azure.com/amla/recommendations-da/v1/';
                    var DM_Consumer = 'ItemRecommend?';
                    var DM_DataAcquisition = 'AddUsageEvent?';
                    var AzureMLRecommendationsEvent = [];
                    var DM_Recommender = DM_Server + DM_Consumer;
                    var DM_EventMethod = DM_DaServer + DM_DataAcquisition;
                    var $ = jQuery;
                    jQuery.support.cors = true;
                    AzureMLRecommendationsR = function () {
                      return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
                    };
                    AzureMLRecommendationsR2 = function () {
                      return ((1 + Math.random()) * 65536) | 0;
                    };
                    AzureMLRecommendationsGuid = function () {
                      return (
                        AzureMLRecommendationsR() +
                        AzureMLRecommendationsR() +
                        '' +
                        AzureMLRecommendationsR() +
                        '-' +
                        AzureMLRecommendationsR() +
                        '-' +
                        AzureMLRecommendationsR() +
                        '-' +
                        AzureMLRecommendationsR() +
                        AzureMLRecommendationsR() +
                        AzureMLRecommendationsR()
                      );
                    };
                    AzureMLRecommendationsLongGuid = function () {
                      return (
                        AzureMLRecommendationsR2() +
                        '' +
                        AzureMLRecommendationsR2() +
                        '' +
                        AzureMLRecommendationsR2()
                      );
                    };
                    AzureMLRecommendationsGetCookie = function (name) {
                      var i,
                        x,
                        y,
                        cookies = document.cookie.split(';');
                      for (i = 0; i < cookies.length; i++) {
                        x = cookies[i].substr(0, cookies[i].indexOf('='));
                        y = cookies[i].substr(cookies[i].indexOf('=') + 1);
                        x = x.replace(/^\s+|\s+$/g, '');
                        if (x == name) {
                          return unescape(y);
                        }
                      }
                      return null;
                    };
                    AzureMLRecommendationsSetCookie = function (name, value, expDays) {
                      var expiration = new Date();
                      expiration.setDate(expiration.getDate() + expDays);
                      var cValue =
                        escape(value) +
                        (expDays == null ? '' : '; expires=' + expiration.toUTCString());
                      document.cookie = name + '=' + cValue;
                    };
                    AzureMLRecommendationsGetSession = function () {
                      if (null != DM_Session && DM_Session != '') {
                        return DM_Session;
                      }
                      var session = AzureMLRecommendationsGetCookie(
                        'AzureMLRecommendationsSession'
                      );
                      if (session != null && session != '') {
                        return session;
                      }
                      var newSession = AzureMLRecommendationsLongGuid();
                      AzureMLRecommendationsSetCookie(
                        'AzureMLRecommendationsSession',
                        newSession,
                        180
                      );
                      return newSession;
                    };
                    AzureMLRecommendationsCreateJsonEvent = function (
                      azureMLRecommendationsEventData
                    ) {
                      var eventData = {};
                      var eventName = azureMLRecommendationsEventData.event;
                      if (eventName == 'click') {
                        eventData.Name = 'Click';
                        eventData.ItemId = azureMLRecommendationsEventData.item;
                        eventData.ItemName = azureMLRecommendationsEventData.itemName;
                        eventData.ItemDescription =
                          azureMLRecommendationsEventData.itemDescription;
                        eventData.ItemCategory = azureMLRecommendationsEventData.itemCategory;
                      }
                      if (eventName == 'recommendationclick') {
                        eventData.Name = 'RecommendationClick';
                        eventData.ItemId = azureMLRecommendationsEventData.item;
                        eventData.ItemName = azureMLRecommendationsEventData.itemName;
                        eventData.ItemDescription =
                          azureMLRecommendationsEventData.itemDescription;
                        eventData.ItemCategory = azureMLRecommendationsEventData.itemCategory;
                        eventData.Seeds = azureMLRecommendationsEventData.seeds;
                        eventData.RecoList = azureMLRecommendationsEventData.recoList;
                      }
                      if (eventName == 'addshopcart') {
                        eventData.Name = 'AddShopCart';
                        eventData.ItemId = azureMLRecommendationsEventData.item;
                        eventData.ItemName = azureMLRecommendationsEventData.itemName;
                        eventData.ItemDescription =
                          azureMLRecommendationsEventData.itemDescription;
                        eventData.ItemCategory = azureMLRecommendationsEventData.itemCategory;
                      }
                      if (eventName == 'removeshopcart') {
                        eventData.Name = 'RemoveShopCart';
                        eventData.ItemId = azureMLRecommendationsEventData.item;
                        eventData.ItemName = azureMLRecommendationsEventData.itemName;
                        eventData.ItemDescription =
                          azureMLRecommendationsEventData.itemDescription;
                        eventData.ItemCategory = azureMLRecommendationsEventData.itemCategory;
                      }
                      if (eventName == 'purchase') {
                        eventData.Name = 'Purchase';
                        eventData.PurchaseItems = [];
                        var items = azureMLRecommendationsEventData.items;
                        for (var i = 0; i < items.length; i++) {
                          var pItem = {};
                          pItem.ItemId = items[i].item;
                          pItem.Count = items[i].count;
                          pItem.Price = items[i].price;
                          eventData.PurchaseItems.push(pItem);
                        }
                      }
                      if (eventName == 'userlogin') {
                        if (
                          parseInt(azureMLRecommendationsEventData.user) ==
                            azureMLRecommendationsEventData.user &&
                          azureMLRecommendationsEventData.user > 0
                        ) {
                          DM_Session = azureMLRecommendationsEventData.user;
                        } else {
                          console.log(
                            'AzureMLRecommendationsCreateJsonEvent user login not a long:' +
                              azureMLRecommendationsEventData.user +
                              ', using cookie'
                          );
                        }
                        return null;
                      }
                      return eventData;
                    };
                    AzureMLRecommendationsSendEvent = function () {
                      try {
                        var jsonEvent = {};
                        jsonEvent.AccessKey = '';
                        jsonEvent.ModelId = DM_ModelId;
                        jsonEvent.EventData = [];
                        for (var ii = 0; ii < AzureMLRecommendationsEvent.length; ii++) {
                          var eventDataEntry = AzureMLRecommendationsCreateJsonEvent(
                            AzureMLRecommendationsEvent[ii]
                          );
                          if (null != eventDataEntry) {
                            jsonEvent.EventData.push(eventDataEntry);
                          }
                        }
                        jsonEvent.SessionId = AzureMLRecommendationsGetSession();
                        if (0 == jsonEvent.EventData.length) {
                          return;
                        }
                        console.log(
                          'AzureMLRecommendationsSendEvent sending events: ' +
                            jsonEvent.EventData.length
                        );
                        var formattedData = JSON.stringify(jsonEvent);
                        var postUrl =
                          DM_EventMethod +
                          "events='" +
                          formattedData +
                          "'&apiVersion=" +
                          ApiVersion;
                        postUrl = encodeURI(postUrl);
                        jQuery.support.cors = true;
                        $.ajax({
                          url: postUrl,
                          type: 'GET',
                          beforeSend: function (xhr) {
                            xhr.setRequestHeader(
                              'Authorization',
                              'Basic ' + DM_EncryptedCredentials
                            );
                          },
                          context: this,
                          success: function (data) {
                            AzureMLRecommendationsEvent = [];
                          },
                          error: function (data) {
                            console.log(
                              'Send Event Error: \n' + data.statusText + '\nStatus: ' + data.status
                            );
                          },
                        });
                      } catch (e) {
                        console.log('AzureMLRecommendationsSendEvent Failed: ' + e.message);
                      }
                    };
                    AzureMLRecommendationsStart = function (encryptedCredentials, modelId) {
                      DM_EncryptedCredentials = encryptedCredentials;
                      DM_ModelId = modelId;
                      console.log(
                        'AzureMLRecommendationsStart: ' +
                          DM_EncryptedCredentials +
                          ', modelId: ' +
                          DM_ModelId
                      );
                      if (null == modelId || 36 != modelId.length) {
                        console.log(
                          'AzureMLRecommendationsStart: Invalid Model Id: ' +
                            modelId +
                            ', Aborting'
                        );
                        return;
                      }
                      AzureMLRecommendationsSendEvent();
                    };
                    AzureMLRecommendationsGetI2IRecommendation = function (
                      items,
                      numberOfResults,
                      includeMetadata,
                      funcToExec
                    ) {
                      if (items == undefined || items.length == 0) {
                        console.log(
                          'AzureMLRecommendationsGetI2IRecommendation: Cannot send recommendation request since items collection was not set or zero length'
                        );
                        return [];
                      }
                      for (var i = 0; i < items.length; i++) {
                        if (items[i] == undefined) {
                          console.log(
                            'AzureMLRecommendationsGetI2IRecommendation: did not start, items collection contains an item at place ' +
                              i +
                              ' that was not set'
                          );
                          return [];
                        }
                      }
                      if (numberOfResults == undefined) {
                        console.log(
                          'AzureMLRecommendationsGetI2IRecommendation: number of items to return was not defined setting to default of 10'
                        );
                        numberOfResults = 10;
                      }
                      var item = items[0];
                      for (i = 1; i < items.length; i++) {
                        item += ',' + items[i];
                      }
                      var sessionId = AzureMLRecommendationsGetSession();
                      console.log(
                        'AzureMLRecommendationsGetI2IRecommendation: Getting recommendation for itemIds: ' +
                          item +
                          ' numberOfResulst: ' +
                          numberOfResults +
                          ' sessionId: ' +
                          sessionId +
                          ' includeMetdata: ' +
                          (includeMetadata ? true : false)
                      );
                      var getUrl =
                        DM_Recommender +
                        "modelId='" +
                        DM_ModelId +
                        "'&itemIds='" +
                        item +
                        "'&numberOfResults=" +
                        numberOfResults +
                        '&includeMetadata=' +
                        includeMetadata +
                        '&apiVersion=' +
                        ApiVersion;
                      DM_Get(getUrl, funcToExec);
                    };
                    var AzureMLRecommendationsPushEvent = function (azevent) {
                      AzureMLRecommendationsEvent.push(azevent);
                    };
                    function DM_Get (url, funcToExec) {
                      jQuery.support.cors = true;
                      var recommendations = [];
                      $.ajax({
                        url: url,
                        type: 'GET',
                        beforeSend: function (xhr) {
                          xhr.setRequestHeader(
                            'Authorization',
                            'Basic ' + DM_EncryptedCredentials
                          );
                        },
                        context: this,
                        success: function (xmlDoc) {
                          var arr = xmlDoc.getElementsByTagName('m:properties');
                          for (var i = 0; i < arr.length; i++) {
                            var recommendationEntry = {};
                            for (var j = 0; j < arr[i].childNodes.length; j++) {
                              var propName = arr[i].childNodes[j].localName;
                              var propValue = arr[i].childNodes[j].textContent;
                              recommendationEntry[propName] = propValue;
                            }
                            recommendations.push(recommendationEntry);
                          }
                          if ((typeof funcToExec).toLowerCase() === 'function') {
                            funcToExec(recommendations);
                          }
                          console.log(
                            'AzureMLRecommendationsGetI2IRecommendation: completed successfuly'
                          );
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                          console.log(
                            'AzureMLRecommendationsGetI2IRecommendation: Failed to get recommendation, Error Message: ' +
                              thrownError +
                              ' (' +
                              xhr.status +
                              ')'
                          );
                        },
                      });
                    }
                    return {
                      start: AzureMLRecommendationsStart,
                      sendEvent: AzureMLRecommendationsSendEvent,
                      pushEvent: AzureMLRecommendationsPushEvent,
                    };
                  })(dellpoc.lib.jQuery);
                  (function (root, factory) {
                    if (typeof exports == 'object') {
                      module.exports = factory();
                    } else {
                      if (typeof define == 'function' && define.amd) {
                        define(factory);
                      } else {
                        root.Spinner = factory();
                      }
                    }
                  })(dellpoc.lib, function () {
                    var prefixes = ['webkit', 'Moz', 'ms', 'O'],
                      animations = {},
                      useCssAnimations;
                    function createEl (tag, prop) {
                      var el = document.createElement(tag || 'div'),
                        n;
                      for (n in prop) {
                        el[n] = prop[n];
                      }
                      return el;
                    }
                    function ins (parent) {
                      for (var i = 1, n = arguments.length; i < n; i++) {
                        parent.appendChild(arguments[i]);
                      }
                      return parent;
                    }
                    var sheet = (function () {
                      var el = createEl('style', { type: 'text/css' });
                      ins(document.getElementsByTagName('head')[0], el);
                      return el.sheet || el.styleSheet;
                    })();
                    function addAnimation (alpha, trail, i, lines) {
                      var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-'),
                        start = 0.01 + (i / lines) * 100,
                        z = Math.max(1 - ((1 - alpha) / trail) * (100 - start), alpha),
                        prefix = useCssAnimations
                          .substring(0, useCssAnimations.indexOf('Animation'))
                          .toLowerCase(),
                        pre = (prefix && '-' + prefix + '-') || '';
                      if (!animations[name]) {
                        sheet.insertRule(
                          '@' +
                            pre +
                            'keyframes ' +
                            name +
                            '{0%{opacity:' +
                            z +
                            '}' +
                            start +
                            '%{opacity:' +
                            alpha +
                            '}' +
                            (start + 0.01) +
                            '%{opacity:1}' +
                            ((start + trail) % 100) +
                            '%{opacity:' +
                            alpha +
                            '}100%{opacity:' +
                            z +
                            '}}',
                          sheet.cssRules.length
                        );
                        animations[name] = 1;
                      }
                      return name;
                    }
                    function vendor (el, prop) {
                      var s = el.style,
                        pp,
                        i;
                      prop = prop.charAt(0).toUpperCase() + prop.slice(1);
                      for (i = 0; i < prefixes.length; i++) {
                        pp = prefixes[i] + prop;
                        if (s[pp] !== undefined) {
                          return pp;
                        }
                      }
                      if (s[prop] !== undefined) {
                        return prop;
                      }
                    }
                    function css (el, prop) {
                      for (var n in prop) {
                        el.style[vendor(el, n) || n] = prop[n];
                      }
                      return el;
                    }
                    function merge (obj) {
                      for (var i = 1; i < arguments.length; i++) {
                        var def = arguments[i];
                        for (var n in def) {
                          if (obj[n] === undefined) {
                            obj[n] = def[n];
                          }
                        }
                      }
                      return obj;
                    }
                    function pos (el) {
                      var o = { x: el.offsetLeft, y: el.offsetTop };
                      while ((el = el.offsetParent)) {
                        (o.x += el.offsetLeft), (o.y += el.offsetTop);
                      }
                      return o;
                    }
                    function getColor (color, idx) {
                      return typeof color == 'string' ? color : color[idx % color.length];
                    }
                    var defaults = {
                      lines: 12,
                      length: 7,
                      width: 5,
                      radius: 10,
                      rotate: 0,
                      corners: 1,
                      color: '#000',
                      direction: 1,
                      speed: 1,
                      trail: 100,
                      opacity: 1 / 4,
                      fps: 20,
                      zIndex: 2000000000,
                      className: 'spinner',
                      top: '50%',
                      left: '50%',
                      position: 'absolute',
                    };
                    function Spinner (o) {
                      this.opts = merge(o || {}, Spinner.defaults, defaults);
                    }
                    Spinner.defaults = {};
                    merge(Spinner.prototype, {
                      spin: function (target) {
                        this.stop();
                        var self = this,
                          o = self.opts,
                          el = (self.el = css(createEl(0, { className: o.className }), {
                            position: o.position,
                            width: 0,
                            zIndex: o.zIndex,
                          })),
                          mid = o.radius + o.length + o.width;
                        css(el, { left: o.left, top: o.top });
                        if (target) {
                          target.insertBefore(el, target.firstChild || null);
                        }
                        el.setAttribute('role', 'progressbar');
                        self.lines(el, self.opts);
                        if (!useCssAnimations) {
                          var i = 0,
                            start = ((o.lines - 1) * (1 - o.direction)) / 2,
                            alpha,
                            fps = o.fps,
                            f = fps / o.speed,
                            ostep = (1 - o.opacity) / ((f * o.trail) / 100),
                            astep = f / o.lines;
                          (function anim () {
                            i++;
                            for (var j = 0; j < o.lines; j++) {
                              alpha = Math.max(
                                1 - ((i + (o.lines - j) * astep) % f) * ostep,
                                o.opacity
                              );
                              self.opacity(el, j * o.direction + start, alpha, o);
                            }
                            self.timeout = self.el && setTimeout(anim, ~~(1000 / fps));
                          })();
                        }
                        return self;
                      },
                      stop: function () {
                        var el = this.el;
                        if (el) {
                          clearTimeout(this.timeout);
                          if (el.parentNode) {
                            el.parentNode.removeChild(el);
                          }
                          this.el = undefined;
                        }
                        return this;
                      },
                      lines: function (el, o) {
                        var i = 0,
                          start = ((o.lines - 1) * (1 - o.direction)) / 2,
                          seg;
                        function fill (color, shadow) {
                          return css(createEl(), {
                            position: 'absolute',
                            width: o.length + o.width + 'px',
                            height: o.width + 'px',
                            background: color,
                            boxShadow: shadow,
                            transformOrigin: 'left',
                            transform:
                              'rotate(' +
                              ~~((360 / o.lines) * i + o.rotate) +
                              'deg) translate(' +
                              o.radius +
                              'px,0)',
                            borderRadius: ((o.corners * o.width) >> 1) + 'px',
                          });
                        }
                        for (; i < o.lines; i++) {
                          seg = css(createEl(), {
                            position: 'absolute',
                            top: 1 + ~(o.width / 2) + 'px',
                            transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
                            opacity: o.opacity,
                            animation:
                              useCssAnimations &&
                              addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) +
                                ' ' +
                                1 / o.speed +
                                's linear infinite',
                          });
                          if (o.shadow) {
                            ins(seg, css(fill('#000', '0 0 4px #000'), { top: 2 + 'px' }));
                          }
                          ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')));
                        }
                        return el;
                      },
                      opacity: function (el, i, val) {
                        if (i < el.childNodes.length) {
                          el.childNodes[i].style.opacity = val;
                        }
                      },
                    });
                    function initVML () {
                      function vml (tag, attr) {
                        return createEl(
                          '<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
                          attr
                        );
                      }
                      sheet.addRule('.spin-vml', 'behavior:url(#default#VML)');
                      Spinner.prototype.lines = function (el, o) {
                        var r = o.length + o.width,
                          s = 2 * r;
                        function grp () {
                          return css(
                            vml('group', { coordsize: s + ' ' + s, coordorigin: -r + ' ' + -r }),
                            { width: s, height: s }
                          );
                        }
                        var margin = -(o.width + o.length) * 2 + 'px',
                          g = css(grp(), { position: 'absolute', top: margin, left: margin }),
                          i;
                        function seg (i, dx, filter) {
                          ins(
                            g,
                            ins(
                              css(grp(), { rotation: (360 / o.lines) * i + 'deg', left: ~~dx }),
                              ins(
                                css(vml('roundrect', { arcsize: o.corners }), {
                                  width: r,
                                  height: o.width,
                                  left: o.radius,
                                  top: -o.width >> 1,
                                  filter: filter,
                                }),
                                vml('fill', { color: getColor(o.color, i), opacity: o.opacity }),
                                vml('stroke', { opacity: 0 })
                              )
                            )
                          );
                        }
                        if (o.shadow) {
                          for (i = 1; i <= o.lines; i++) {
                            seg(
                              i,
                              -2,
                              'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)'
                            );
                          }
                        }
                        for (i = 1; i <= o.lines; i++) {
                          seg(i);
                        }
                        return ins(el, g);
                      };
                      Spinner.prototype.opacity = function (el, i, val, o) {
                        var c = el.firstChild;
                        o = (o.shadow && o.lines) || 0;
                        if (c && i + o < c.childNodes.length) {
                          c = c.childNodes[i + o];
                          c = c && c.firstChild;
                          c = c && c.firstChild;
                          if (c) {
                            c.opacity = val;
                          }
                        }
                      };
                    }
                    var probe = css(createEl('group'), { behavior: 'url(#default#VML)' });
                    if (!vendor(probe, 'transform') && probe.adj) {
                      initVML();
                    } else {
                      useCssAnimations = vendor(probe, 'animation');
                    }
                    return Spinner;
                  });
                  dellpoc.inlinemsmlrecommendations.models.Collection = (function (
                    $,
                    _,
                    Backbone
                  ) {
                    return Backbone.Collection.extend({
                      model: dellpoc.core.models.ContainerItem,
                      initialize: function () {
                        this.algorithm = arguments[0].algorithm;
                      },
                      url: function () {
                        return this.algorithm.url;
                      },
                      parse: function (data) {
                        return this.algorithm.response(data);
                      },
                      fetch: function () {
                        var dfd = $.Deferred();
                        return dfd.resolve();
                      },
                    });
                  })(dellpoc.lib.jQuery, dellpoc.lib._, dellpoc.lib.Backbone);
                  dellpoc.inlinemsmlrecommendations.models.RecommendationCollection = (function (
                    $,
                    Backbone
                  ) {
                    return Backbone.Collection.extend({
                      model: dellpoc.core.models.ContainerItem,
                      initialize: function (options) {
                        this.container = options.container;
                      },
                      sync: function (method, collection, options) {
                        options.headers = options.headers || {};
                        options.type = 'GET';
                        options.dataType = 'json';
                        options.timeout = 1200000;
                        options.crossDomain = true;
                        options.cache = true;
                        return Backbone.Collection.prototype.sync.apply(this, [
                          method,
                          collection,
                          options,
                        ]);
                      },
                      parse: function (data) {
                        return this.container.algorithm.response(data);
                      },
                    });
                  })(dellpoc.lib.jQuery, dellpoc.lib.Backbone);
                  dellpoc.inlinemsmlrecommendations.models.ProductDetailCollection = (function (
                    $,
                    _,
                    Backbone
                  ) {
                    return Backbone.Collection.extend({
                      model: dellpoc.core.models.ContainerItem,
                      sync: function (method, collection, options) {
                        options.type = 'GET';
                        options.dataType = 'jsonp';
                        options.timeout = 1200000;
                        options.crossDomain = true;
                        options.cache = true;
                        return Backbone.Collection.prototype.sync.apply(this, [
                          method,
                          collection,
                          options,
                        ]);
                      },
                      url: function () {
                        var itemsQueryString = this.recommendationCollection.reduce(function (
                          queryString,
                          model
                        ) {
                          var nameParts = model.get('Id').split('_');
                          var productId = nameParts[nameParts.length - 1];
                          return (queryString += queryString === '' ? productId : '|' + productId);
                        },
                        '');
                        var itemsRegionString = '';
                        if (this.recommendationCollection.length > 0) {
                          var itemsRegion = this.recommendationCollection.models[0]
                            .get('Id')
                            .toLowerCase()
                            .split('_');
                          itemsRegion.pop();
                          itemsRegionString = itemsRegion.join('/');
                        } else {
                          itemsRegionString = 'us/04/en/bsd';
                        }
                        var baseUrl = 'https://product.persaas.dell.com/api/v1/ProductFeed/';
                        var aUrl =
                          baseUrl +
                          itemsRegionString +
                          '/' +
                          itemsQueryString.substring(
                            0,
                            306 - baseUrl.length - itemsRegionString.length
                          );
                        return aUrl;
                      },
                      dellpoc_callback: function (data) {
                        return data;
                      },
                      parse: function (data) {
                        return _.reject(data.Data, function (item) {
                          return (
                            item === null ||
                            item.pictures === undefined ||
                            item.pictures.length === undefined ||
                            item.pictures.length < 1
                          );
                        });
                      },
                      lookup: function (recommendationCollection) {
                        this.recommendationCollection = new Backbone.Collection(
                          recommendationCollection.first(10)
                        );
                        var dfd = $.Deferred();
                        this.fetch().done(
                          _.bind(function () {
                            dfd.resolve();
                          }, this)
                        );
                        return dfd;
                      },
                      isValid: function () {
                        return (
                          this.filter(function (item) {
                            return item.get('sale_price') > 0;
                          }).length > 2
                        );
                      },
                    });
                  })(dellpoc.lib.jQuery, dellpoc.lib._, dellpoc.lib.Backbone);
                  dellpoc.inlinemsmlrecommendations.views.ImageItemView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    Spinner
                  ) {
                    return Marionette.ItemView.extend({
                      className: 'dellpoc-core-inline',
                      getTemplate: function () {
                        return this.container.templates.item_image;
                      },
                      triggers: { 'click img': 'image-item:clicked' },
                      activate: function () {
                        this.$('.dellpoc-core-gallery-item-image').addClass('dellpoc-core-active');
                      },
                      clearActive: function () {
                        this.$('.dellpoc-core-gallery-item-image').removeClass(
                          'dellpoc-core-active'
                        );
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.lib.Spinner
                  );
                  dellpoc.inlinemsmlrecommendations.views.ImageCollectionView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    ImageItemView
                  ) {
                    return Marionette.CollectionView.extend({
                      childView: ImageItemView,
                      initialize: function (options) {
                        this.collection = options.collection;
                        this.container = options.container;
                        this.childView = this.childView.extend({ container: this.container });
                        this.on(
                          'childview:image-item:clicked',
                          _.bind(function (childview) {
                            this.removeActiveOutline();
                            childview.activate();
                            this.trigger('image-item:clicked', childview.model);
                          }, this)
                        );
                      },
                      onRender: function () {
                        if (this.children.length > 0) {
                          this.children.findByIndex(0).activate();
                        }
                      },
                      removeActiveOutline: function () {
                        this.children.each(function (childView) {
                          childView.clearActive();
                        });
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.inlinemsmlrecommendations.views.ImageItemView
                  );
                  dellpoc.inlinemsmlrecommendations.views.AppItemDetailView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    Spinner,
                    ImageCollectionView
                  ) {
                    return Marionette.ItemView.extend({
                      initialize: function (options) {
                        this.container = options.container;
                      },
                      getTemplate: function () {
                        if (
                          this.model.get('techSpecs') ||
                          this.model.get('long_description').length
                        ) {
                          return this.container.templates.item_detail;
                        } else {
                          return this.container.templates.item_detail_no_specs;
                        }
                      },
                      events: {
                        'click .dellpoc-msmlrecommendations-add-to-cart': 'itemAddToCartClicked',
                        'click .dellpoc-msmlrecommendations-expand-btn': 'showFullDescription',
                        'click .dellpoc-msmlrecommendations-shrink-btn': 'showShortDescription',
                      },
                      templateHelpers: {
                        truncate: function (text) {
                          var $tmpDiv = $('<div/>');
                          $tmpDiv.append(text);
                          text = $tmpDiv.text();
                          return text.length > 250 ? text.substring(0, 250) + ' . . .' : text;
                        },
                      },
                      onRender: function () {
                        var picturesNoThumbnails = _.filter(this.model.get('pictures'), function (
                          image
                        ) {
                          return image.image_type !== 'thumbnail';
                        });
                        var imageCollection = new Backbone.Collection(picturesNoThumbnails);
                        var imageCollectionView = new ImageCollectionView({
                          collection: imageCollection,
                          container: this.container,
                        });
                        this.$('.dellpoc-core-image-gallery').append(
                          imageCollectionView.render().el
                        );
                        this.listenTo(
                          imageCollectionView,
                          'image-item:clicked',
                          _.bind(function (imageModel) {
                            this.swapBigImage(imageModel);
                          }, this)
                        );
                      },
                      itemAddToCartClicked: function () {
                        var spinner = new Spinner({
                          left: '130%',
                          radius: 3,
                          width: 2,
                          length: 7,
                          lines: 9,
                        }).spin();
                        this.$('.dellpoc-msmlrecommendations-add-to-cart')
                          .get(0)
                          .appendChild(spinner.el);
                        this.trigger('item-add-to-cart:clicked', this.model);
                      },
                      showFullDescription: function () {
                        this.$('.dellpoc-msmlrecommendations-truncate-description')
                          .removeClass('dellpoc-msmlrecommendations-truncate-description')
                          .addClass('dellpoc-msmlrecommendations-full-description');
                      },
                      showShortDescription: function () {
                        this.$('dellpoc-msmlrecommendations-full-description')
                          .removeClass('dellpoc-msmlrecommendations-full-description')
                          .addClass('dellpoc-msmlrecommendations-truncate-description');
                      },
                      swapBigImage: function (imageModel) {
                        this.$('.dellpoc-msmlrecommendations-big-image').attr(
                          'src',
                          imageModel.get('image_url')
                        );
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.lib.Spinner,
                    dellpoc.inlinemsmlrecommendations.views.ImageCollectionView
                  );
                  dellpoc.inlinemsmlrecommendations.views.AppItemView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    Spinner
                  ) {
                    return Marionette.ItemView.extend({
                      getTemplate: function () {
                        return this.container.templates.item;
                      },
                      triggers: {
                        'click .dellpoc-msmlrecommendations-item-quickview':
                          'item-quickview:clicked',
                        'click .dellpoc-msmlrecommendations-item-title': 'item-quickview:clicked',
                      },
                      events: {
                        'click .dellpoc-msmlrecommendations-add-to-cart': 'itemAddToCartClicked',
                      },
                      templateHelpers: {
                        truncate: function (text) {
                          return text.length > 50 ? text.substring(0, 50) + ' . . .' : text;
                        },
                      },
                      onRender: function () {
                        this.$el = this.$el.children().first();
                        this.$el.unwrap();
                        this.setElement(this.$el);
                        if (this.model.get('msrp') !== this.model.get('sale_price')) {
                          this.$('.dellpoc-msmlrecommendations-item-msrp').removeClass(
                            'dellpoc-core-invisible'
                          );
                        }
                      },
                      itemAddToCartClicked: function () {
                        var spinner = new Spinner({
                          left: '130%',
                          radius: 3,
                          width: 2,
                          length: 7,
                          lines: 9,
                        }).spin();
                        this.$('.dellpoc-msmlrecommendations-add-to-cart')
                          .get(0)
                          .appendChild(spinner.el);
                        azureMLRecommendations.pushEvent({
                          event: 'recommendationclick',
                          item: this.getPrefix() + '_' + this.model.get('product_id'),
                        });
                        this.trigger('item-add-to-cart:clicked');
                      },
                      getPrefix: function () {
                        return (
                          this.getUrlParam('c') +
                          '_' +
                          this.getUrlParam('cs') +
                          '_' +
                          this.getUrlParam('l') +
                          '_' +
                          this.getUrlParam('s')
                        );
                      },
                      getUrlParam: function (sParam) {
                        var sPageURL = window.location.search.substring(1);
                        var sURLVariables = sPageURL.split('&');
                        for (var i = 0; i < sURLVariables.length; i++) {
                          var sParameterName = sURLVariables[i].split('=');
                          if (sParameterName[0] == sParam) {
                            return sParameterName[1];
                          }
                        }
                        return null;
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.lib.Spinner
                  );
                  dellpoc.inlinemsmlrecommendations.views.AppCollectionView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    AppItemView
                  ) {
                    return Marionette.CollectionView.extend({
                      childView: AppItemView,
                      initialize: function (options) {
                        this.collection = options.collection;
                        this.container = options.container;
                        this.childView = this.childView.extend({ container: this.container });
                        this.on(
                          'childview:item-quickview:clicked',
                          _.bind(function (childview) {
                            this.trigger('item-quickview:clicked', childview.model);
                          }, this)
                        );
                        this.on(
                          'childview:item-add-to-cart:clicked',
                          _.bind(function (childview) {
                            this.trigger('item-add-to-cart:clicked', childview.model);
                          }, this)
                        );
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.inlinemsmlrecommendations.views.AppItemView
                  );
                  dellpoc.inlinemsmlrecommendations.views.AppLayoutView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    AppCollectionView,
                    ItemDetailView,
                    ProductDetailCollection
                  ) {
                    return Marionette.LayoutView.extend({
                      regions: { content: '.dellpoc-active-content' },
                      events: {
                        'click .dellpoc-core-overlay': 'closeOverlayClicked',
                        'click .dellpoc-core-close-window': 'closeOverlayClicked',
                      },
                      ui: {
                        header: '.dellpoc-insert-header',
                        footer: '.dellpoc-insert-footer',
                        body: '.dellpoc-insert-body',
                        modal: '.dellpoc-insert-modal',
                      },
                      initialize: function (options) {
                        this.container = options.container;
                        this.model = options.model;
                        this.itemId = options.itemId;
                        this.variantData = options.variantData;
                        this.template = _.template(this.container.master());
                        this.listenTo(this.model, 'sync', this.renderCollection);
                      },
                      onRender: function () {
                        this.ui.header.html(this.container.templates.header());
                        this.ui.footer.html(this.container.templates.footer());
                        this.ui.body.html(this.container.templates.body());
                      },
                      renderCollection: function () {
                        dellpoc.mlRank = this.model.toJSON();
                        var itemIdListInCart = [];
                        if (this.variantData) {
                          _.each(this.variantData, function (value) {
                            itemIdListInCart.push(value.toLowerCase());
                          });
                        }
                        this.model = this.removeItemIdFromModel(itemIdListInCart, this.model);
                        if (this.model.length === 0) {
                          console.log(
                            'no recommendations from datamarket for item ' + this.itemId
                          );
                          return;
                        }
                        var productDetailCollection = new ProductDetailCollection();
                        productDetailCollection.lookup(this.model).done(
                          _.bind(function () {
                            if (productDetailCollection.isValid()) {
                              var top3ProductCollection = new ProductDetailCollection(
                                productDetailCollection.first(3)
                              );
                              var appCollectionView = new AppCollectionView({
                                collection: top3ProductCollection,
                                container: this.container,
                              });
                              this.content.show(appCollectionView);
                              this.listenTo(
                                appCollectionView,
                                'item-quickview:clicked',
                                _.bind(this.renderModal, this)
                              );
                              this.listenTo(
                                appCollectionView,
                                'item-add-to-cart:clicked',
                                _.bind(this.addToCart, this)
                              );
                              appCollectionView.$el.contents().unwrap();
                              this.$('.dellpoc-core-hide').removeClass('dellpoc-core-hide');
                              if (typeof window.Persona_industryTargetHomepage === 'function') {
                                window.Persona_industryTargetHomepage(
                                  'AzureML-Recs-Impression-Item-ID-' + this.itemId
                                );
                              }
                            } else {
                              console.log(
                                'invalid catalog results for item ' + this.itemId,
                                this.model,
                                this.model.length
                              );
                            }
                          }, this)
                        );
                      },
                      renderModal: function (itemModel) {
                        this.itemDetailView = new ItemDetailView({
                          model: itemModel,
                          container: this.container,
                        });
                        this.listenTo(
                          this.itemDetailView,
                          'item-add-to-cart:clicked',
                          _.bind(this.addToCart, this)
                        );
                        this.ui.modal.addClass('dellpoc-core-overlay');
                        this.ui.modal.html(this.itemDetailView.render().el);
                        if (typeof window.Persona_industryTargetHomepage === 'function') {
                          window.persona_clickTrack(
                            this,
                            'AzureML-Recs-ClickViewProductModal-Product-ID-' +
                              itemModel.get('product_id')
                          );
                        }
                        azureMLRecommendations.pushEvent({
                          event: 'recommendationclick',
                          item: this.getPrefix() + '_' + itemModel.get('product_id'),
                        });
                        azureMLRecommendations.sendEvent();
                      },
                      addToCart: function (itemModel) {
                        console.log(itemModel.get('add_to_cart_url'));
                        this.$el.append('<iframe id="dellpoc-add-to-cart-endpoint"></iframe>');
                        var $iframe = this.$('#dellpoc-add-to-cart-endpoint');
                        $iframe.attr('onload', 'location.reload()');
                        this.$('#dellpoc-add-to-cart-endpoint').attr(
                          'src',
                          itemModel.get('add_to_cart_url')
                        );
                        azureMLRecommendations.pushEvent({
                          event: 'addshopcart',
                          item: this.getPrefix() + '_' + itemModel.get('product_id'),
                        });
                        azureMLRecommendations.sendEvent();
                        if (typeof window.Persona_industryTargetHomepage === 'function') {
                          window.persona_clickTrack(
                            this,
                            'AzureML-Recs-AddToCart-Product-ID-' + itemModel.get('product_id')
                          );
                        }
                      },
                      closeOverlayClicked: function (e) {
                        if (
                          e.currentTarget === e.target ||
                          e.target.name === 'dellpoc-core-close-window'
                        ) {
                          this.ui.modal.removeClass('dellpoc-core-overlay');
                          this.ui.modal.empty();
                          this.stopListening(this.itemDetailView);
                          this.itemDetailView.destroy();
                        }
                      },
                      removeItemIdFromModel: function (itemIdList, model) {
                        var prefix = this.getPrefix();
                        return new Backbone.Collection(
                          model.reject(function (m) {
                            var modelId = m.get('Id').split('_').pop();
                            return (
                              _.indexOf(itemIdList, (prefix + '_' + modelId).toLowerCase()) !== -1
                            );
                          })
                        );
                      },
                      getPrefix: function () {
                        return (
                          this.getUrlParam('c') +
                          '_' +
                          this.getUrlParam('cs') +
                          '_' +
                          this.getUrlParam('l') +
                          '_' +
                          this.getUrlParam('s')
                        );
                      },
                      getUrlParam: function (sParam) {
                        var sPageURL = window.location.search.substring(1);
                        var sURLVariables = sPageURL.split('&');
                        for (var i = 0; i < sURLVariables.length; i++) {
                          var sParameterName = sURLVariables[i].split('=');
                          if (sParameterName[0] == sParam) {
                            return sParameterName[1];
                          }
                        }
                        return null;
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.inlinemsmlrecommendations.views.AppCollectionView,
                    dellpoc.inlinemsmlrecommendations.views.AppItemDetailView,
                    dellpoc.inlinemsmlrecommendations.models.ProductDetailCollection
                  );
                  dellpoc.inlinemsmlrecommendations.views.AppMediatorView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    RecommendationCollection,
                    AppLayoutView
                  ) {
                    return Marionette.ItemView.extend({
                      productApiUrl: 'https://product.persaas.dell.com/api/v1/ProductFeed/',
                      initialize: function () {
                        console.log('initializing inlineML mediator');
                        this.container = arguments[0].container;
                        $.removeCookie('azureMLcart');
                        this.segment = this.parseCookieIntoDict('lwp')['s'];
                        this.country = this.parseCookieIntoDict('lwp')['c'];
                        var itemIds = _.map(
                          MasterTmsUdo.CJ.PRODUCTLIST,
                          _.bind(function (item) {
                            this.prefix = this.prefix ? this.prefix : this.getPrefix();
                            return this.prefix + '_' + item.ITEM;
                          }, this)
                        );
                        itemIds = _.reject(
                          itemIds,
                          _.bind(function (itemId) {
                            return itemId === this.prefix + '_A5750525';
                          }, this)
                        );
                        console.log('loading product variant');
                        this.loadProductVariance(
                          itemIds,
                          _.bind(function (variantData) {
                            console.log('showing inline recommendations');
                            this.layoutViews = [];
                            _.each(
                              itemIds,
                              _.bind(function (itemId) {
                                var recommendationCollection = this.getRecommendationCollection(
                                  variantData[itemId]
                                );
                                var appLayoutView = new AppLayoutView({
                                  model: recommendationCollection,
                                  variantData: variantData,
                                  itemId: itemId,
                                  container: this.container,
                                });
                                this.layoutViews.push(appLayoutView);
                              }, this)
                            );
                            this.render();
                          }, this)
                        );
                      },
                      loadProductVariance: function (itemIds, funcToExec) {
                        var profileUrl = null;
                        var ret = {};
                        var items = [];
                        itemIds.forEach(function (item) {
                          ret[item] = item.toLowerCase();
                          var itemsParts = ret[item].split('_');
                          items.push(itemsParts.pop());
                          profileUrl = itemsParts.join('/');
                        });
                        if (!profileUrl) {
                          profileUrl = 'us/04/en/bsd';
                        }
                        $.ajax({
                          url:
                            this.productApiUrl +
                            profileUrl +
                            '/' +
                            encodeURIComponent(items.join('|')),
                          type: 'GET',
                          dataType: 'jsonp',
                        })
                          .done(function (response) {
                            if (response && response.Data && response.Data.length > 0) {
                              response.Data.forEach(function (product) {
                                if (product.product_variant) {
                                  var prefix =
                                    product.country_code +
                                    '_' +
                                    product.customer_segment_code +
                                    '_' +
                                    product.language_code +
                                    '_' +
                                    product.segment_code +
                                    '_';
                                  ret[prefix + product.product_id] =
                                    prefix + product.product_variant;
                                }
                              });
                            }
                            return funcToExec(ret);
                          })
                          .error(function (xhr, ajaxOptions, thrownError) {
                            console.log(
                              'LoadProductVarianve: Failed to get products, Error Message: ' +
                                thrownError +
                                ' (' +
                                xhr.status +
                                ')'
                            );
                          });
                      },
                      getRecommendationCollection: function (itemId) {
                        var collection = new RecommendationCollection({
                          container: this.container,
                        });
                        collection.url =
                          this.model.url() +
                          '/' +
                          this.country +
                          '/' +
                          this.segment +
                          '/get/?numberOfResults=10&itemIds=' +
                          itemId;
                        collection.fetch();
                        return collection;
                      },
                      getPrefix: function () {
                        return (
                          this.getUrlParam('c') +
                          '_' +
                          this.getUrlParam('cs') +
                          '_' +
                          this.getUrlParam('l') +
                          '_' +
                          this.getUrlParam('s')
                        );
                      },
                      getUrlParam: function (sParam) {
                        var sPageUrl = window.location.search.substring(1);
                        var sUrlVariables = sPageUrl.split('&');
                        for (var i = 0; i < sUrlVariables.length; i++) {
                          var sParameterName = sUrlVariables[i].split('=');
                          if (sParameterName[0] === sParam) {
                            return sParameterName[1];
                          }
                        }
                        return null;
                      },
                      parseCookieIntoDict: function (cookieName) {
                        var cookieValuePairs = $.cookie(cookieName).split('&');
                        var keyValueDict = _.reduce(
                          cookieValuePairs,
                          function (memo, pair) {
                            var keyValueTuple = pair.split('=');
                            memo[keyValueTuple[0]] = keyValueTuple[1];
                            return memo;
                          },
                          {}
                        );
                        return keyValueDict;
                      },
                      render: function () {
                        if (!this.layoutViews) {
                          return;
                        }
                        var that = this;
                        $('.ec-widthborder.ec-bordertop').each(function (index, insertLocation) {
                          var matchedView = that.layoutViews.shift();
                          var $node = $(
                            '<table><tbody><tr><td class="persaas-recommendations"></td></tr></tbody></table>'
                          );
                          $node.find('.persaas-recommendations').append(matchedView.render().$el);
                          $node.insertBefore($(insertLocation));
                        });
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.inlinemsmlrecommendations.models.RecommendationCollection,
                    dellpoc.inlinemsmlrecommendations.views.AppLayoutView
                  );
                  (function () {
                    var $, InlineMsMLRecommendations, jQuery, _;
                    _ = dellpoc.lib._;
                    $ = jQuery = dellpoc.lib.jQuery;
                    InlineMsMLRecommendations = (function () {
                      function InlineMsMLRecommendations () {}
                      InlineMsMLRecommendations.prototype.loaded = false;
                      InlineMsMLRecommendations.prototype.initialize = function () {
                        dellpoc.setup_containers_namespace(
                          'dellpoc.inlinemsmlrecommendations',
                          dellpoc.inlinemsmlrecommendations.models.Collection,
                          null,
                          dellpoc.inlinemsmlrecommendations.views.AppMediatorView,
                          null
                        );
                        this.loaded = true;
                        dellpoc.inlinemsmlrecommendations.app = this;
                      };
                      return InlineMsMLRecommendations;
                    })();
                    dellpoc.strategies.push(new InlineMsMLRecommendations());
                  }.call(this));
                }
              };
              dellpoc.plugins.SegmentCookie.activate = function () {
                if (!dellpoc.plugins.SegmentCookie.is_activated) {
                  dellpoc.plugins.SegmentCookie.is_activated = true;
                  dellpoc.segmentcookie = dellpoc.segmentcookie || {};
                  dellpoc.segmentcookie.models = dellpoc.segmentcookie.models || {};
                  dellpoc.segmentcookie.views = dellpoc.segmentcookie.views || {};
                  dellpoc.segmentcookie.models.Collection = (function ($, _, Backbone) {
                    return Backbone.Collection.extend({
                      model: dellpoc.core.models.ContainerItem,
                      initialize: function () {
                        this.algorithm = arguments[0].algorithm;
                      },
                      sync: function (method, collection, options) {
                        options.type = 'GET';
                        options.dataType = 'jsonp';
                        options.timeout = 1200000;
                        options.crossDomain = true;
                        options.cache = true;
                        options.jsonpCallback = 'active';
                        return Backbone.Collection.prototype.sync.apply(this, [
                          method,
                          collection,
                          options,
                        ]);
                      },
                      url: function () {
                        return this.algorithm.url + this.algorithm.request();
                      },
                      active: function (data) {
                        return data;
                      },
                      parse: function (data) {
                        return this.algorithm.response(data);
                      },
                      fetch: function () {
                        var dfd = $.Deferred();
                        return dfd.resolve();
                      },
                    });
                  })(dellpoc.lib.jQuery, dellpoc.lib._, dellpoc.lib.Backbone);
                  dellpoc.segmentcookie.views.AppLayoutView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    AppItemView
                  ) {
                    return Marionette.LayoutView.extend({
                      regions: { content: '.dellpoc-active-content' },
                      ui: { body: '.dellpoc-insert-body' },
                      containerOperation: {
                        BEFORE: function () {
                          this.insertBefore();
                        },
                        AFTER: function () {
                          this.insertAfter();
                        },
                        REPLACE: function () {
                          this.insertReplace();
                        },
                      },
                      initialize: function () {
                        this.container = arguments[0].container;
                        this.template = _.template(this.container.master());
                        this.$injectLocation = this.$el;
                        this.$el = $('<div/>');
                        this.containerOperation[this.container.operation].call(this);
                        console.log('segment cookie init');
                      },
                      onRender: function () {
                        var url = location.href.replace(/https?:\/\//i, '');
                        if (url.startsWith('www.')) {
                          url = url.substring(4);
                        }
                        if (
                          url === 'dell.com' ||
                          url === 'dell.com/' ||
                          url.startsWith('dell.com/?')
                        ) {
                          return;
                        }
                        var lwpCookieValuePairs = $.cookie('lwp')
                          ? this.parseCookieIntoDict('lwp')
                          : {};
                        var lvsCookieValuePairs = $.cookie('lvs')
                          ? this.parseCookieIntoDict('lvs')
                          : {};
                        if (lwpCookieValuePairs.cs === '04') {
                          lvsCookieValuePairs.th = 'browse-business';
                        } else {
                          if (lwpCookieValuePairs.cs === '19') {
                            lvsCookieValuePairs.th = 'browse-consumer';
                          } else {
                            if (lwpCookieValuePairs.cs === '2236') {
                              lvsCookieValuePairs.th = 'browse-epp';
                            } else {
                              if (lwpCookieValuePairs.cs === '555') {
                                lvsCookieValuePairs.th = 'browse-learn';
                              } else {
                                if (lwpCookieValuePairs.cs === '6099') {
                                  lvsCookieValuePairs.th = 'browse-mpp';
                                }
                              }
                            }
                          }
                        }
                        this.setCookieWithValuePairs(lvsCookieValuePairs);
                      },
                      setCookieWithValuePairs: function (dict) {
                        var cookieValue = '';
                        for (key in dict) {
                          cookieValue += key + '=' + dict[key] + '&';
                        }
                        cookieValue = cookieValue.slice(0, -1);
                        $.cookie('lvs', cookieValue, {
                          expires: 30,
                          path: '/',
                          domain: '.dell.com',
                        });
                      },
                      parseCookieIntoDict: function (cookieName) {
                        var cookieValuePairs = $.cookie(cookieName).split('&');
                        var keyValueDict = _.reduce(
                          cookieValuePairs,
                          function (memo, pair) {
                            var keyValueTuple = pair.split('=');
                            memo[keyValueTuple[0]] = keyValueTuple[1];
                            return memo;
                          },
                          {}
                        );
                        return keyValueDict;
                      },
                      insertBefore: function () {
                        return this.$el.insertBefore(this.$injectLocation);
                      },
                      insertAfter: function () {
                        return this.$el.insertAfter(this.$injectLocation);
                      },
                      insertReplace: function () {
                        return this.$injectLocation.html(this.$el);
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.segmentcookie.views.AppItemView
                  );
                  (function () {
                    var $, SegmentCookie, jQuery, _;
                    _ = dellpoc.lib._;
                    $ = jQuery = dellpoc.lib.jQuery;
                    SegmentCookie = (function () {
                      function SegmentCookie () {}
                      SegmentCookie.prototype.loaded = false;
                      SegmentCookie.prototype.initialize = function () {
                        dellpoc.setup_containers_namespace(
                          'dellpoc.segmentcookie',
                          dellpoc.segmentcookie.models.Collection,
                          null,
                          dellpoc.segmentcookie.views.AppLayoutView,
                          null
                        );
                        this.loaded = true;
                        dellpoc.segmentcookie.app = this;
                      };
                      return SegmentCookie;
                    })();
                    dellpoc.strategies.push(new SegmentCookie());
                  }.call(this));
                }
              };
              dellpoc.plugins.FrequentlyBoughtTogether.activate = function () {
                if (!dellpoc.plugins.FrequentlyBoughtTogether.is_activated) {
                  dellpoc.plugins.FrequentlyBoughtTogether.is_activated = true;
                  dellpoc.frequentlyboughttogether = dellpoc.frequentlyboughttogether || {};
                  dellpoc.frequentlyboughttogether.models =
                    dellpoc.frequentlyboughttogether.models || {};
                  dellpoc.frequentlyboughttogether.views =
                    dellpoc.frequentlyboughttogether.views || {};
                  var azureMLRecommendations = (function (jQuery) {
                    var DM_EncryptedCredentials;
                    var DM_ModelId;
                    var DM_Session;
                    var ApiVersion = "'1.0'";
                    var DM_Server = 'https://api.datamarket.azure.com/amla/recommendations/v2/';
                    var DM_DaServer =
                      'https://api.datamarket.azure.com/amla/recommendations-da/v1/';
                    var DM_Consumer = 'ItemRecommend?';
                    var DM_DataAcquisition = 'AddUsageEvent?';
                    var AzureMLRecommendationsEvent = [];
                    var DM_Recommender = DM_Server + DM_Consumer;
                    var DM_EventMethod = DM_DaServer + DM_DataAcquisition;
                    var $ = jQuery;
                    jQuery.support.cors = true;
                    AzureMLRecommendationsR = function () {
                      return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
                    };
                    AzureMLRecommendationsR2 = function () {
                      return ((1 + Math.random()) * 65536) | 0;
                    };
                    AzureMLRecommendationsGuid = function () {
                      return (
                        AzureMLRecommendationsR() +
                        AzureMLRecommendationsR() +
                        '' +
                        AzureMLRecommendationsR() +
                        '-' +
                        AzureMLRecommendationsR() +
                        '-' +
                        AzureMLRecommendationsR() +
                        '-' +
                        AzureMLRecommendationsR() +
                        AzureMLRecommendationsR() +
                        AzureMLRecommendationsR()
                      );
                    };
                    AzureMLRecommendationsLongGuid = function () {
                      return (
                        AzureMLRecommendationsR2() +
                        '' +
                        AzureMLRecommendationsR2() +
                        '' +
                        AzureMLRecommendationsR2()
                      );
                    };
                    AzureMLRecommendationsGetCookie = function (name) {
                      var i,
                        x,
                        y,
                        cookies = document.cookie.split(';');
                      for (i = 0; i < cookies.length; i++) {
                        x = cookies[i].substr(0, cookies[i].indexOf('='));
                        y = cookies[i].substr(cookies[i].indexOf('=') + 1);
                        x = x.replace(/^\s+|\s+$/g, '');
                        if (x == name) {
                          return unescape(y);
                        }
                      }
                      return null;
                    };
                    AzureMLRecommendationsSetCookie = function (name, value, expDays) {
                      var expiration = new Date();
                      expiration.setDate(expiration.getDate() + expDays);
                      var cValue =
                        escape(value) +
                        (expDays == null ? '' : '; expires=' + expiration.toUTCString());
                      document.cookie = name + '=' + cValue;
                    };
                    AzureMLRecommendationsGetSession = function () {
                      if (null != DM_Session && DM_Session != '') {
                        return DM_Session;
                      }
                      var session = AzureMLRecommendationsGetCookie(
                        'AzureMLRecommendationsSession'
                      );
                      if (session != null && session != '') {
                        return session;
                      }
                      var newSession = AzureMLRecommendationsLongGuid();
                      AzureMLRecommendationsSetCookie(
                        'AzureMLRecommendationsSession',
                        newSession,
                        180
                      );
                      return newSession;
                    };
                    AzureMLRecommendationsCreateJsonEvent = function (
                      azureMLRecommendationsEventData
                    ) {
                      var eventData = {};
                      var eventName = azureMLRecommendationsEventData.event;
                      if (eventName == 'click') {
                        eventData.Name = 'Click';
                        eventData.ItemId = azureMLRecommendationsEventData.item;
                        eventData.ItemName = azureMLRecommendationsEventData.itemName;
                        eventData.ItemDescription =
                          azureMLRecommendationsEventData.itemDescription;
                        eventData.ItemCategory = azureMLRecommendationsEventData.itemCategory;
                      }
                      if (eventName == 'recommendationclick') {
                        eventData.Name = 'RecommendationClick';
                        eventData.ItemId = azureMLRecommendationsEventData.item;
                        eventData.ItemName = azureMLRecommendationsEventData.itemName;
                        eventData.ItemDescription =
                          azureMLRecommendationsEventData.itemDescription;
                        eventData.ItemCategory = azureMLRecommendationsEventData.itemCategory;
                        eventData.Seeds = azureMLRecommendationsEventData.seeds;
                        eventData.RecoList = azureMLRecommendationsEventData.recoList;
                      }
                      if (eventName == 'addshopcart') {
                        eventData.Name = 'AddShopCart';
                        eventData.ItemId = azureMLRecommendationsEventData.item;
                        eventData.ItemName = azureMLRecommendationsEventData.itemName;
                        eventData.ItemDescription =
                          azureMLRecommendationsEventData.itemDescription;
                        eventData.ItemCategory = azureMLRecommendationsEventData.itemCategory;
                      }
                      if (eventName == 'removeshopcart') {
                        eventData.Name = 'RemoveShopCart';
                        eventData.ItemId = azureMLRecommendationsEventData.item;
                        eventData.ItemName = azureMLRecommendationsEventData.itemName;
                        eventData.ItemDescription =
                          azureMLRecommendationsEventData.itemDescription;
                        eventData.ItemCategory = azureMLRecommendationsEventData.itemCategory;
                      }
                      if (eventName == 'purchase') {
                        eventData.Name = 'Purchase';
                        eventData.PurchaseItems = [];
                        var items = azureMLRecommendationsEventData.items;
                        for (var i = 0; i < items.length; i++) {
                          var pItem = {};
                          pItem.ItemId = items[i].item;
                          pItem.Count = items[i].count;
                          pItem.Price = items[i].price;
                          eventData.PurchaseItems.push(pItem);
                        }
                      }
                      if (eventName == 'userlogin') {
                        if (
                          parseInt(azureMLRecommendationsEventData.user) ==
                            azureMLRecommendationsEventData.user &&
                          azureMLRecommendationsEventData.user > 0
                        ) {
                          DM_Session = azureMLRecommendationsEventData.user;
                        } else {
                          console.log(
                            'AzureMLRecommendationsCreateJsonEvent user login not a long:' +
                              azureMLRecommendationsEventData.user +
                              ', using cookie'
                          );
                        }
                        return null;
                      }
                      return eventData;
                    };
                    AzureMLRecommendationsSendEvent = function () {
                      try {
                        var jsonEvent = {};
                        jsonEvent.AccessKey = '';
                        jsonEvent.ModelId = DM_ModelId;
                        jsonEvent.EventData = [];
                        for (var ii = 0; ii < AzureMLRecommendationsEvent.length; ii++) {
                          var eventDataEntry = AzureMLRecommendationsCreateJsonEvent(
                            AzureMLRecommendationsEvent[ii]
                          );
                          if (null != eventDataEntry) {
                            jsonEvent.EventData.push(eventDataEntry);
                          }
                        }
                        jsonEvent.SessionId = AzureMLRecommendationsGetSession();
                        if (0 == jsonEvent.EventData.length) {
                          return;
                        }
                        console.log(
                          'AzureMLRecommendationsSendEvent sending events: ' +
                            jsonEvent.EventData.length
                        );
                        var formattedData = JSON.stringify(jsonEvent);
                        var postUrl =
                          DM_EventMethod +
                          "events='" +
                          formattedData +
                          "'&apiVersion=" +
                          ApiVersion;
                        postUrl = encodeURI(postUrl);
                        jQuery.support.cors = true;
                        $.ajax({
                          url: postUrl,
                          type: 'GET',
                          beforeSend: function (xhr) {
                            xhr.setRequestHeader(
                              'Authorization',
                              'Basic ' + DM_EncryptedCredentials
                            );
                          },
                          context: this,
                          success: function (data) {
                            AzureMLRecommendationsEvent = [];
                          },
                          error: function (data) {
                            console.log(
                              'Send Event Error: \n' + data.statusText + '\nStatus: ' + data.status
                            );
                          },
                        });
                      } catch (e) {
                        console.log('AzureMLRecommendationsSendEvent Failed: ' + e.message);
                      }
                    };
                    AzureMLRecommendationsStart = function (encryptedCredentials, modelId) {
                      DM_EncryptedCredentials = encryptedCredentials;
                      DM_ModelId = modelId;
                      console.log(
                        'AzureMLRecommendationsStart: ' +
                          DM_EncryptedCredentials +
                          ', modelId: ' +
                          DM_ModelId
                      );
                      if (null == modelId || 36 != modelId.length) {
                        console.log(
                          'AzureMLRecommendationsStart: Invalid Model Id: ' +
                            modelId +
                            ', Aborting'
                        );
                        return;
                      }
                      AzureMLRecommendationsSendEvent();
                    };
                    AzureMLRecommendationsGetI2IRecommendation = function (
                      items,
                      numberOfResults,
                      includeMetadata,
                      funcToExec
                    ) {
                      if (items == undefined || items.length == 0) {
                        console.log(
                          'AzureMLRecommendationsGetI2IRecommendation: Cannot send recommendation request since items collection was not set or zero length'
                        );
                        return [];
                      }
                      for (var i = 0; i < items.length; i++) {
                        if (items[i] == undefined) {
                          console.log(
                            'AzureMLRecommendationsGetI2IRecommendation: did not start, items collection contains an item at place ' +
                              i +
                              ' that was not set'
                          );
                          return [];
                        }
                      }
                      if (numberOfResults == undefined) {
                        console.log(
                          'AzureMLRecommendationsGetI2IRecommendation: number of items to return was not defined setting to default of 10'
                        );
                        numberOfResults = 10;
                      }
                      var item = items[0];
                      for (i = 1; i < items.length; i++) {
                        item += ',' + items[i];
                      }
                      var sessionId = AzureMLRecommendationsGetSession();
                      console.log(
                        'AzureMLRecommendationsGetI2IRecommendation: Getting recommendation for itemIds: ' +
                          item +
                          ' numberOfResulst: ' +
                          numberOfResults +
                          ' sessionId: ' +
                          sessionId +
                          ' includeMetdata: ' +
                          (includeMetadata ? true : false)
                      );
                      var getUrl =
                        DM_Recommender +
                        "modelId='" +
                        DM_ModelId +
                        "'&itemIds='" +
                        item +
                        "'&numberOfResults=" +
                        numberOfResults +
                        '&includeMetadata=' +
                        includeMetadata +
                        '&apiVersion=' +
                        ApiVersion;
                      DM_Get(getUrl, funcToExec);
                    };
                    var AzureMLRecommendationsPushEvent = function (azevent) {
                      AzureMLRecommendationsEvent.push(azevent);
                    };
                    function DM_Get (url, funcToExec) {
                      jQuery.support.cors = true;
                      var recommendations = [];
                      $.ajax({
                        url: url,
                        type: 'GET',
                        beforeSend: function (xhr) {
                          xhr.setRequestHeader(
                            'Authorization',
                            'Basic ' + DM_EncryptedCredentials
                          );
                        },
                        context: this,
                        success: function (xmlDoc) {
                          var arr = xmlDoc.getElementsByTagName('m:properties');
                          for (var i = 0; i < arr.length; i++) {
                            var recommendationEntry = {};
                            for (var j = 0; j < arr[i].childNodes.length; j++) {
                              var propName = arr[i].childNodes[j].localName;
                              var propValue = arr[i].childNodes[j].textContent;
                              recommendationEntry[propName] = propValue;
                            }
                            recommendations.push(recommendationEntry);
                          }
                          if ((typeof funcToExec).toLowerCase() === 'function') {
                            funcToExec(recommendations);
                          }
                          console.log(
                            'AzureMLRecommendationsGetI2IRecommendation: completed successfuly'
                          );
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                          console.log(
                            'AzureMLRecommendationsGetI2IRecommendation: Failed to get recommendation, Error Message: ' +
                              thrownError +
                              ' (' +
                              xhr.status +
                              ')'
                          );
                        },
                      });
                    }
                    return {
                      start: AzureMLRecommendationsStart,
                      sendEvent: AzureMLRecommendationsSendEvent,
                      pushEvent: AzureMLRecommendationsPushEvent,
                    };
                  })(dellpoc.lib.jQuery);
                  (function (root, factory) {
                    if (typeof exports == 'object') {
                      module.exports = factory();
                    } else {
                      if (typeof define == 'function' && define.amd) {
                        define(factory);
                      } else {
                        root.Spinner = factory();
                      }
                    }
                  })(dellpoc.lib, function () {
                    var prefixes = ['webkit', 'Moz', 'ms', 'O'],
                      animations = {},
                      useCssAnimations;
                    function createEl (tag, prop) {
                      var el = document.createElement(tag || 'div'),
                        n;
                      for (n in prop) {
                        el[n] = prop[n];
                      }
                      return el;
                    }
                    function ins (parent) {
                      for (var i = 1, n = arguments.length; i < n; i++) {
                        parent.appendChild(arguments[i]);
                      }
                      return parent;
                    }
                    var sheet = (function () {
                      var el = createEl('style', { type: 'text/css' });
                      ins(document.getElementsByTagName('head')[0], el);
                      return el.sheet || el.styleSheet;
                    })();
                    function addAnimation (alpha, trail, i, lines) {
                      var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-'),
                        start = 0.01 + (i / lines) * 100,
                        z = Math.max(1 - ((1 - alpha) / trail) * (100 - start), alpha),
                        prefix = useCssAnimations
                          .substring(0, useCssAnimations.indexOf('Animation'))
                          .toLowerCase(),
                        pre = (prefix && '-' + prefix + '-') || '';
                      if (!animations[name]) {
                        sheet.insertRule(
                          '@' +
                            pre +
                            'keyframes ' +
                            name +
                            '{0%{opacity:' +
                            z +
                            '}' +
                            start +
                            '%{opacity:' +
                            alpha +
                            '}' +
                            (start + 0.01) +
                            '%{opacity:1}' +
                            ((start + trail) % 100) +
                            '%{opacity:' +
                            alpha +
                            '}100%{opacity:' +
                            z +
                            '}}',
                          sheet.cssRules.length
                        );
                        animations[name] = 1;
                      }
                      return name;
                    }
                    function vendor (el, prop) {
                      var s = el.style,
                        pp,
                        i;
                      prop = prop.charAt(0).toUpperCase() + prop.slice(1);
                      for (i = 0; i < prefixes.length; i++) {
                        pp = prefixes[i] + prop;
                        if (s[pp] !== undefined) {
                          return pp;
                        }
                      }
                      if (s[prop] !== undefined) {
                        return prop;
                      }
                    }
                    function css (el, prop) {
                      for (var n in prop) {
                        el.style[vendor(el, n) || n] = prop[n];
                      }
                      return el;
                    }
                    function merge (obj) {
                      for (var i = 1; i < arguments.length; i++) {
                        var def = arguments[i];
                        for (var n in def) {
                          if (obj[n] === undefined) {
                            obj[n] = def[n];
                          }
                        }
                      }
                      return obj;
                    }
                    function pos (el) {
                      var o = { x: el.offsetLeft, y: el.offsetTop };
                      while ((el = el.offsetParent)) {
                        (o.x += el.offsetLeft), (o.y += el.offsetTop);
                      }
                      return o;
                    }
                    function getColor (color, idx) {
                      return typeof color == 'string' ? color : color[idx % color.length];
                    }
                    var defaults = {
                      lines: 12,
                      length: 7,
                      width: 5,
                      radius: 10,
                      rotate: 0,
                      corners: 1,
                      color: '#000',
                      direction: 1,
                      speed: 1,
                      trail: 100,
                      opacity: 1 / 4,
                      fps: 20,
                      zIndex: 2000000000,
                      className: 'spinner',
                      top: '50%',
                      left: '50%',
                      position: 'absolute',
                    };
                    function Spinner (o) {
                      this.opts = merge(o || {}, Spinner.defaults, defaults);
                    }
                    Spinner.defaults = {};
                    merge(Spinner.prototype, {
                      spin: function (target) {
                        this.stop();
                        var self = this,
                          o = self.opts,
                          el = (self.el = css(createEl(0, { className: o.className }), {
                            position: o.position,
                            width: 0,
                            zIndex: o.zIndex,
                          })),
                          mid = o.radius + o.length + o.width;
                        css(el, { left: o.left, top: o.top });
                        if (target) {
                          target.insertBefore(el, target.firstChild || null);
                        }
                        el.setAttribute('role', 'progressbar');
                        self.lines(el, self.opts);
                        if (!useCssAnimations) {
                          var i = 0,
                            start = ((o.lines - 1) * (1 - o.direction)) / 2,
                            alpha,
                            fps = o.fps,
                            f = fps / o.speed,
                            ostep = (1 - o.opacity) / ((f * o.trail) / 100),
                            astep = f / o.lines;
                          (function anim () {
                            i++;
                            for (var j = 0; j < o.lines; j++) {
                              alpha = Math.max(
                                1 - ((i + (o.lines - j) * astep) % f) * ostep,
                                o.opacity
                              );
                              self.opacity(el, j * o.direction + start, alpha, o);
                            }
                            self.timeout = self.el && setTimeout(anim, ~~(1000 / fps));
                          })();
                        }
                        return self;
                      },
                      stop: function () {
                        var el = this.el;
                        if (el) {
                          clearTimeout(this.timeout);
                          if (el.parentNode) {
                            el.parentNode.removeChild(el);
                          }
                          this.el = undefined;
                        }
                        return this;
                      },
                      lines: function (el, o) {
                        var i = 0,
                          start = ((o.lines - 1) * (1 - o.direction)) / 2,
                          seg;
                        function fill (color, shadow) {
                          return css(createEl(), {
                            position: 'absolute',
                            width: o.length + o.width + 'px',
                            height: o.width + 'px',
                            background: color,
                            boxShadow: shadow,
                            transformOrigin: 'left',
                            transform:
                              'rotate(' +
                              ~~((360 / o.lines) * i + o.rotate) +
                              'deg) translate(' +
                              o.radius +
                              'px,0)',
                            borderRadius: ((o.corners * o.width) >> 1) + 'px',
                          });
                        }
                        for (; i < o.lines; i++) {
                          seg = css(createEl(), {
                            position: 'absolute',
                            top: 1 + ~(o.width / 2) + 'px',
                            transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
                            opacity: o.opacity,
                            animation:
                              useCssAnimations &&
                              addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) +
                                ' ' +
                                1 / o.speed +
                                's linear infinite',
                          });
                          if (o.shadow) {
                            ins(seg, css(fill('#000', '0 0 4px #000'), { top: 2 + 'px' }));
                          }
                          ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')));
                        }
                        return el;
                      },
                      opacity: function (el, i, val) {
                        if (i < el.childNodes.length) {
                          el.childNodes[i].style.opacity = val;
                        }
                      },
                    });
                    function initVML () {
                      function vml (tag, attr) {
                        return createEl(
                          '<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
                          attr
                        );
                      }
                      sheet.addRule('.spin-vml', 'behavior:url(#default#VML)');
                      Spinner.prototype.lines = function (el, o) {
                        var r = o.length + o.width,
                          s = 2 * r;
                        function grp () {
                          return css(
                            vml('group', { coordsize: s + ' ' + s, coordorigin: -r + ' ' + -r }),
                            { width: s, height: s }
                          );
                        }
                        var margin = -(o.width + o.length) * 2 + 'px',
                          g = css(grp(), { position: 'absolute', top: margin, left: margin }),
                          i;
                        function seg (i, dx, filter) {
                          ins(
                            g,
                            ins(
                              css(grp(), { rotation: (360 / o.lines) * i + 'deg', left: ~~dx }),
                              ins(
                                css(vml('roundrect', { arcsize: o.corners }), {
                                  width: r,
                                  height: o.width,
                                  left: o.radius,
                                  top: -o.width >> 1,
                                  filter: filter,
                                }),
                                vml('fill', { color: getColor(o.color, i), opacity: o.opacity }),
                                vml('stroke', { opacity: 0 })
                              )
                            )
                          );
                        }
                        if (o.shadow) {
                          for (i = 1; i <= o.lines; i++) {
                            seg(
                              i,
                              -2,
                              'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)'
                            );
                          }
                        }
                        for (i = 1; i <= o.lines; i++) {
                          seg(i);
                        }
                        return ins(el, g);
                      };
                      Spinner.prototype.opacity = function (el, i, val, o) {
                        var c = el.firstChild;
                        o = (o.shadow && o.lines) || 0;
                        if (c && i + o < c.childNodes.length) {
                          c = c.childNodes[i + o];
                          c = c && c.firstChild;
                          c = c && c.firstChild;
                          if (c) {
                            c.opacity = val;
                          }
                        }
                      };
                    }
                    var probe = css(createEl('group'), { behavior: 'url(#default#VML)' });
                    if (!vendor(probe, 'transform') && probe.adj) {
                      initVML();
                    } else {
                      useCssAnimations = vendor(probe, 'animation');
                    }
                    return Spinner;
                  });
                  dellpoc.frequentlyboughttogether.models.Collection = (function ($, _, Backbone) {
                    return Backbone.Collection.extend({
                      model: dellpoc.core.models.ContainerItem,
                      initialize: function () {
                        this.algorithm = arguments[0].algorithm;
                      },
                      url: function () {
                        return this.algorithm.url;
                      },
                      parse: function (data) {
                        return this.algorithm.response(data);
                      },
                      fetch: function () {
                        var dfd = $.Deferred();
                        return dfd.resolve();
                      },
                    });
                  })(dellpoc.lib.jQuery, dellpoc.lib._, dellpoc.lib.Backbone);
                  dellpoc.frequentlyboughttogether.models.RecommendationCollection = (function (
                    $,
                    _,
                    Backbone
                  ) {
                    return Backbone.Collection.extend({
                      model: dellpoc.core.models.ContainerItem,
                      initialize: function (options) {
                        this.container = options.container;
                      },
                      sync: function (method, collection, options) {
                        options.headers = options.headers || {};
                        _.extend(options.headers, {
                          Authorization:
                            'Basic ZGVsbHNvZnR3YXJlOTkjb3V0bG9vay5jb206R1pWb01vSXlPeEVjaVdJVjkyRDJCV0VLc21FMjJDenpzSXl6RjJYdDdUbw==',
                        });
                        options.type = 'GET';
                        options.dataType = 'json';
                        options.timeout = 1200000;
                        options.crossDomain = true;
                        options.cache = true;
                        return Backbone.Collection.prototype.sync.apply(this, [
                          method,
                          collection,
                          options,
                        ]);
                      },
                      parse: function (data) {
                        return this.container.algorithm.response(data);
                      },
                    });
                  })(dellpoc.lib.jQuery, dellpoc.lib._, dellpoc.lib.Backbone);
                  dellpoc.frequentlyboughttogether.models.ProductDetailCollection = (function (
                    $,
                    _,
                    Backbone
                  ) {
                    return Backbone.Collection.extend({
                      model: dellpoc.core.models.ContainerItem,
                      sync: function (method, collection, options) {
                        options.type = 'GET';
                        options.dataType = 'jsonp';
                        options.timeout = 1200000;
                        options.crossDomain = true;
                        options.cache = true;
                        return Backbone.Collection.prototype.sync.apply(this, [
                          method,
                          collection,
                          options,
                        ]);
                      },
                      url: function () {
                        var itemsQueryString = this.recommendationCollection.reduce(function (
                          queryString,
                          model
                        ) {
                          var nameParts = model.get('Id').split('_');
                          var productId = nameParts[nameParts.length - 1];
                          return (queryString += queryString === '' ? productId : '|' + productId);
                        },
                        '');
                        var itemsRegionString = '';
                        if (this.recommendationCollection.length > 0) {
                          var itemsRegion = this.recommendationCollection.models[0]
                            .get('Id')
                            .toLowerCase()
                            .split('_');
                          itemsRegion.pop();
                          itemsRegionString = itemsRegion.join('/');
                        } else {
                          itemsRegionString = 'us/04/en/bsd';
                        }
                        var baseUrl = 'https://product.persaas.dell.com/api/v1/ProductFeed/';
                        var aUrl =
                          baseUrl +
                          itemsRegionString +
                          '/' +
                          itemsQueryString.substring(
                            0,
                            306 - baseUrl.length - itemsRegionString.length
                          );
                        return aUrl;
                      },
                      dellpoc_callback: function (data) {
                        return data;
                      },
                      parse: function (data) {
                        return _.reject(data.Data, function (item) {
                          return (
                            item === null ||
                            item.pictures === undefined ||
                            item.pictures.length === undefined ||
                            item.pictures.length < 1
                          );
                        });
                      },
                      lookup: function (recommendationCollection) {
                        this.recommendationCollection = new Backbone.Collection(
                          recommendationCollection.first(10)
                        );
                        var dfd = $.Deferred();
                        this.fetch().done(
                          _.bind(function () {
                            dfd.resolve();
                          }, this)
                        );
                        return dfd;
                      },
                      lookupItemId: function (itemId) {
                        var nameParts = itemId.split('_');
                        var queryString = nameParts[nameParts.length - 1];
                        var itemsRegionString = '';
                        var itemsRegion = itemId.split('_');
                        itemsRegion.pop();
                        itemsRegionString = itemsRegion.join('/');
                        var baseUrl = 'https://product.persaas.dell.com/api/v1/ProductFeed/';
                        var aUrl =
                          baseUrl +
                          itemsRegionString +
                          '/' +
                          queryString.substring(
                            0,
                            306 - baseUrl.length - itemsRegionString.length
                          );
                        var dfd = $.Deferred();
                        $.ajax({
                          url: aUrl,
                          type: 'GET',
                          dataType: 'jsonp',
                          crossDomain: true,
                          cache: true,
                          success: function (data) {
                            if (data.Count === 1) {
                              return dfd.resolve(data.Data[0]);
                            } else {
                              console.log('lookup item id failed to retrieve featured item');
                              return dfd.reject();
                            }
                          },
                        });
                        return dfd;
                      },
                      isValid: function () {
                        return (
                          this.filter(function (item) {
                            return (
                              !item.get('is_configurable') &&
                              (item.get('dell_product_type') || '').toLowerCase() !== 'system'
                            );
                          }).length > 1
                        );
                      },
                      getNotConfigurableProducts: function () {
                        return new Backbone.Collection(
                          this.filter(function (item) {
                            return (
                              !item.get('is_configurable') &&
                              (item.get('dell_product_type') || '').toLowerCase() !== 'system'
                            );
                          })
                        );
                      },
                    });
                  })(dellpoc.lib.jQuery, dellpoc.lib._, dellpoc.lib.Backbone);
                  dellpoc.frequentlyboughttogether.views.AppItemInCart = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    Spinner
                  ) {
                    return Marionette.ItemView.extend({
                      getTemplate: function () {
                        return this.container.templates.item_in_cart;
                      },
                      initialize: function (options) {
                        this.container = options.container;
                        this.model = options.model;
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.lib.Spinner
                  );
                  dellpoc.frequentlyboughttogether.views.AppItemPrice = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    Spinner
                  ) {
                    return Marionette.ItemView.extend({
                      events: { 'click .persaas-fbt-checkbox': 'checkboxClicked' },
                      triggers: { 'click a': 'item-quickview:clicked' },
                      getTemplate: function () {
                        return this.container.templates.item_price;
                      },
                      initialize: function (options) {
                        this.model = options.model;
                      },
                      onRender: function () {
                        this.model.set('isSelected', true);
                        if (this.model.get('msrp') !== this.model.get('starting_at_price')) {
                          this.$('.persaas-fbt-msrp').text(
                            this.model.get('currency') + this.model.get('msrp')
                          );
                        }
                      },
                      checkboxClicked: function () {
                        var isSelected = this.model.get('isSelected');
                        this.model.set('isSelected', !isSelected);
                        this.$('.persaas-fbt-up-3').toggleClass('persaas-fbt-grey-out');
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.lib.Spinner
                  );
                  dellpoc.frequentlyboughttogether.views.AppPriceCollectionView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    AppPriceItemView
                  ) {
                    return Marionette.CollectionView.extend({
                      childView: AppPriceItemView,
                      initialize: function (options) {
                        this.collection = options.collection;
                        this.container = options.container;
                        this.childView = this.childView.extend({ container: this.container });
                        this.on(
                          'childview:item-quickview:clicked',
                          _.bind(function (childview) {
                            this.trigger('item-quickview:clicked', childview.model);
                          }, this)
                        );
                        this.on(
                          'childview:item-price-toggle',
                          _.bind(function (childview) {
                            this.trigger('item-price:toggled', childview.model);
                          }, this)
                        );
                      },
                      onRender: function () {},
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.frequentlyboughttogether.views.AppItemPrice
                  );
                  dellpoc.frequentlyboughttogether.views.ImageItemView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    Spinner
                  ) {
                    return Marionette.ItemView.extend({
                      className: 'dellpoc-core-inline',
                      getTemplate: function () {
                        return this.container.templates.item_image;
                      },
                      triggers: { 'click img': 'image-item:clicked' },
                      activate: function () {
                        this.$('.dellpoc-core-gallery-item-image').addClass('dellpoc-core-active');
                      },
                      clearActive: function () {
                        this.$('.dellpoc-core-gallery-item-image').removeClass(
                          'dellpoc-core-active'
                        );
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.lib.Spinner
                  );
                  dellpoc.frequentlyboughttogether.views.ImageCollectionView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    ImageItemView
                  ) {
                    return Marionette.CollectionView.extend({
                      childView: ImageItemView,
                      initialize: function (options) {
                        this.collection = options.collection;
                        this.container = options.container;
                        this.childView = this.childView.extend({ container: this.container });
                        this.on(
                          'childview:image-item:clicked',
                          _.bind(function (childview) {
                            this.removeActiveOutline();
                            childview.activate();
                            this.trigger('image-item:clicked', childview.model);
                          }, this)
                        );
                      },
                      onRender: function () {
                        if (this.children.length > 0) {
                          this.children.findByIndex(0).activate();
                        }
                      },
                      removeActiveOutline: function () {
                        this.children.each(function (childView) {
                          childView.clearActive();
                        });
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.frequentlyboughttogether.views.ImageItemView
                  );
                  dellpoc.frequentlyboughttogether.views.AppItemDetailView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    Spinner,
                    ImageCollectionView
                  ) {
                    return Marionette.ItemView.extend({
                      initialize: function (options) {
                        this.container = options.container;
                      },
                      getTemplate: function () {
                        if (
                          this.model.get('techSpecs') ||
                          this.model.get('long_description').length
                        ) {
                          return this.container.templates.item_detail;
                        } else {
                          return this.container.templates.item_detail_no_specs;
                        }
                      },
                      events: {
                        'click .dellpoc-msmlrecommendations-expand-btn': 'showFullDescription',
                        'click .dellpoc-msmlrecommendations-shrink-btn': 'showShortDescription',
                      },
                      templateHelpers: {
                        truncate: function (text) {
                          var $tmpDiv = $('<div/>');
                          $tmpDiv.append(text);
                          text = $tmpDiv.text();
                          return text.length > 250 ? text.substring(0, 250) + ' . . .' : text;
                        },
                      },
                      onRender: function () {
                        var picturesNoThumbnails = _.filter(this.model.get('pictures'), function (
                          image
                        ) {
                          return image.image_type !== 'thumbnail';
                        });
                        var imageCollection = new Backbone.Collection(picturesNoThumbnails);
                        var imageCollectionView = new ImageCollectionView({
                          collection: imageCollection,
                          container: this.container,
                        });
                        this.$('.dellpoc-core-image-gallery').append(
                          imageCollectionView.render().el
                        );
                        this.listenTo(
                          imageCollectionView,
                          'image-item:clicked',
                          _.bind(function (imageModel) {
                            this.swapBigImage(imageModel);
                          }, this)
                        );
                      },
                      showFullDescription: function () {
                        this.$('.dellpoc-msmlrecommendations-truncate-description')
                          .removeClass('dellpoc-msmlrecommendations-truncate-description')
                          .addClass('dellpoc-msmlrecommendations-full-description');
                      },
                      showShortDescription: function () {
                        this.$('dellpoc-msmlrecommendations-full-description')
                          .removeClass('dellpoc-msmlrecommendations-full-description')
                          .addClass('dellpoc-msmlrecommendations-truncate-description');
                      },
                      swapBigImage: function (imageModel) {
                        this.$('.dellpoc-msmlrecommendations-big-image').attr(
                          'src',
                          imageModel.get('image_url')
                        );
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.lib.Spinner,
                    dellpoc.frequentlyboughttogether.views.ImageCollectionView
                  );
                  dellpoc.frequentlyboughttogether.views.AppItemView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    Spinner
                  ) {
                    return Marionette.ItemView.extend({
                      className: 'persaas-fbt-item-container',
                      getTemplate: function () {
                        return this.container.templates.item;
                      },
                      triggers: {
                        'click .dellpoc-msmlrecommendations-item-quickview':
                          'item-quickview:clicked',
                        'click .dellpoc-msmlrecommendations-item-title': 'item-quickview:clicked',
                      },
                      templateHelpers: {
                        truncate: function (text) {
                          return text.length > 50 ? text.substring(0, 50) + ' . . .' : text;
                        },
                      },
                      initialize: function () {
                        this.listenTo(
                          this.model,
                          'change:isSelected',
                          _.bind(function () {
                            if (this.model.get('isSelected')) {
                              this.$('img').removeClass('persaas-fbt-grey-out');
                            } else {
                              this.$('img').addClass('persaas-fbt-grey-out');
                            }
                          }, this)
                        );
                      },
                      onRender: function () {
                        if (this.model.get('msrp') !== this.model.get('sale_price')) {
                          this.$('.dellpoc-msmlrecommendations-item-msrp').removeClass(
                            'dellpoc-core-invisible'
                          );
                        }
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.lib.Spinner
                  );
                  dellpoc.frequentlyboughttogether.views.AppCollectionView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    AppItemView
                  ) {
                    return Marionette.CompositeView.extend({
                      childView: AppItemView,
                      childViewContainer: '.persaas-fbt-container',
                      getTemplate: function () {
                        return this.container.templates.container;
                      },
                      initialize: function (options) {
                        this.collection = options.collection;
                        this.container = options.container;
                        this.model = new Backbone.Model(options.itemModel);
                        this.childView = this.childView.extend({ container: this.container });
                        this.on(
                          'childview:item-quickview:clicked',
                          _.bind(function (childview) {
                            this.trigger('item-quickview:clicked', childview.model);
                          }, this)
                        );
                        this.on(
                          'childview:item-add-to-cart:clicked',
                          _.bind(function (childview) {
                            this.trigger('item-add-to-cart:clicked', childview.model);
                          }, this)
                        );
                      },
                      onRender: function () {},
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.frequentlyboughttogether.views.AppItemView
                  );
                  dellpoc.frequentlyboughttogether.views.AppLayoutView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    AppCollectionView,
                    ItemDetailView,
                    ItemInCartView,
                    PriceCollectionView,
                    ProductDetailCollection
                  ) {
                    return Marionette.LayoutView.extend({
                      regions: {
                        content: '.persaas-fbt-container',
                        priceArea: '.persaas-fbt-price-area',
                        cartItem: '.persaas-fbt-subject',
                      },
                      events: {
                        'click .dellpoc-core-overlay': 'closeOverlayClicked',
                        'click .dellpoc-core-close-window': 'closeOverlayClicked',
                        'click .dellpoc-core-button': 'addToCartClicked',
                      },
                      ui: {
                        header: '.dellpoc-insert-header',
                        footer: '.dellpoc-insert-footer',
                        body: '.dellpoc-insert-body',
                        modal: '.dellpoc-insert-modal',
                      },
                      initialize: function (options) {
                        this.container = options.container;
                        this.model = options.model;
                        this.itemId = options.itemId;
                        this.template = _.template(this.container.master());
                        this.listenTo(this.model, 'sync', this.renderCollection);
                      },
                      onRender: function () {
                        this.ui.body.html(this.container.templates.body());
                      },
                      renderCollection: function () {
                        dellpoc.mlRank = this.model.toJSON();
                        if (this.model.length === 0) {
                          console.log(
                            'no recommendations from datamarket for item ' + this.itemId
                          );
                          return;
                        }
                        var productDetailCollection = new ProductDetailCollection();
                        $.when(
                          productDetailCollection.lookupItemId(this.itemId),
                          productDetailCollection.lookup(this.model)
                        )
                          .done(
                            _.bind(function (itemModel, c) {
                              if (productDetailCollection.isValid()) {
                                this.top2ProductCollection = new ProductDetailCollection(
                                  productDetailCollection.getNotConfigurableProducts().first(2)
                                );
                                this.appCollectionView = new AppCollectionView({
                                  collection: this.top2ProductCollection,
                                  itemModel: itemModel,
                                  container: this.container,
                                });
                                this.content.show(this.appCollectionView);
                                var itemInCartView = new ItemInCartView({
                                  model: new Backbone.Model(itemModel),
                                  container: this.container,
                                });
                                this.cartItem.show(itemInCartView);
                                var priceCollectionView = new PriceCollectionView({
                                  collection: this.top2ProductCollection,
                                  container: this.container,
                                });
                                this.priceArea.show(priceCollectionView);
                                this.listenTo(
                                  priceCollectionView,
                                  'item-quickview:clicked',
                                  _.bind(this.renderModal, this)
                                );
                                this.listenTo(
                                  this.top2ProductCollection,
                                  'change',
                                  _.bind(function () {
                                    this.paintAddToCartButton(itemModel);
                                  }, this)
                                );
                                this.appCollectionView.$el.contents().unwrap();
                                this.$('.dellpoc-msmlrecommendations-title').html(
                                  'Frequently bought with ' + itemModel.product_name
                                );
                                this.paintAddToCartButton(itemModel);
                                if (this.top2ProductCollection.length > 0) {
                                  this.$('.dellpoc-core-hide').removeClass('dellpoc-core-hide');
                                }
                                if (typeof window.Persona_industryTargetHomepage === 'function') {
                                  window.Persona_industryTargetHomepage(
                                    'FBT-Item-ID-' + this.itemId
                                  );
                                }
                              } else {
                                console.log(
                                  'invalid catalog results for item ' + this.itemId,
                                  this.model
                                );
                              }
                            }, this)
                          )
                          .fail(function () {
                            console.log('catalog api failed!');
                          });
                      },
                      paintAddToCartButton: function (itemModel) {
                        var selectedCount = this.top2ProductCollection.where({ isSelected: true })
                          .length;
                        if (selectedCount < 2) {
                          this.$('.persaas-fbt-cart-button strong').text('Add to Cart');
                        } else {
                          this.$('.persaas-fbt-cart-button strong').text('Add Both Items to Cart');
                        }
                        var selected = this.top2ProductCollection.where({ isSelected: true });
                        var subTotal =
                          _.reduce(
                            selected,
                            function (memo, item) {
                              return memo + item.get('starting_at_price');
                            },
                            0
                          ) + itemModel.starting_at_price;
                        this.$('.persaas-fbt-subtotal').text(Math.round(subTotal * 100) / 100);
                      },
                      addToCartClicked: function () {
                        var x = 0;
                        var dfds = this.top2ProductCollection.reduce(
                          _.bind(function (memo, item) {
                            if (item.get('isSelected')) {
                              setTimeout(
                                _.bind(function () {
                                  var dfd = this.addToCart(item);
                                  memo.push(dfd);
                                }, this),
                                x
                              );
                            }
                            x += 500;
                            return memo;
                          }, this),
                          []
                        );
                        $.when.apply($, dfds).done(
                          setTimeout(function () {
                            var href = $('.btn.purchase.candyAisleLink').eq(0).attr('href');
                            window.location.href = href;
                          }, 1500)
                        );
                      },
                      renderModal: function (itemModel) {
                        this.itemDetailView = new ItemDetailView({
                          model: itemModel,
                          container: this.container,
                        });
                        this.listenTo(
                          this.itemDetailView,
                          'item-add-to-cart:clicked',
                          _.bind(this.addToCart, this)
                        );
                        this.ui.modal.addClass('dellpoc-core-overlay');
                        this.ui.modal.html(this.itemDetailView.render().el);
                        if (typeof window.Persona_industryTargetHomepage === 'function') {
                          window.persona_clickTrack(
                            this,
                            'FBT-Product-ID-' +
                              itemModel.get('product_id') +
                              '-Product-Detail-View'
                          );
                        }
                        azureMLRecommendations.pushEvent({
                          event: 'recommendationclick',
                          item: itemModel.get('product_id'),
                        });
                        azureMLRecommendations.sendEvent();
                      },
                      addToCart: function (itemModel) {
                        console.log(itemModel.get('add_to_cart_url'));
                        var dfd = $.Deferred();
                        var id = 'dellpoc-add-to-cart-endpoint-' + itemModel.cid;
                        this.$el.append('<iframe style="height:0px;" id="' + id + '"></iframe>');
                        document.getElementById(id).onload = function () {
                          console.log('api call to ', itemModel.get('add_to_cart_url'));
                          console.log('added to the cart');
                          dfd.resolve();
                        };
                        this.$('#' + id).attr('src', itemModel.get('add_to_cart_url'));
                        azureMLRecommendations.pushEvent({
                          event: 'addshopcart',
                          item: itemModel.get('product_id'),
                        });
                        azureMLRecommendations.sendEvent();
                        if (typeof window.Persona_industryTargetHomepage === 'function') {
                          window.persona_clickTrack(
                            this,
                            'FBT-Product-ID-' + itemModel.get('product_id') + '-Add-To-Cart'
                          );
                        }
                        return dfd;
                      },
                      closeOverlayClicked: function (e) {
                        if (
                          e.currentTarget === e.target ||
                          e.target.name === 'dellpoc-core-close-window'
                        ) {
                          this.ui.modal.removeClass('dellpoc-core-overlay');
                          this.ui.modal.empty();
                          this.stopListening(this.itemDetailView);
                          this.itemDetailView.destroy();
                        }
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.frequentlyboughttogether.views.AppCollectionView,
                    dellpoc.frequentlyboughttogether.views.AppItemDetailView,
                    dellpoc.frequentlyboughttogether.views.AppItemInCart,
                    dellpoc.frequentlyboughttogether.views.AppPriceCollectionView,
                    dellpoc.frequentlyboughttogether.models.ProductDetailCollection
                  );
                  dellpoc.frequentlyboughttogether.views.AppMediatorView = (function (
                    $,
                    _,
                    Backbone,
                    Marionette,
                    RecommendationCollection,
                    AppLayoutView
                  ) {
                    return Marionette.ItemView.extend({
                      initialize: function () {
                        console.log('initializing fbt mediator');
                        this.container = arguments[0].container;
                        this.whichModelId = dellpoc.frequentlyboughttogether.homeMLModelId;
                        this.isShow = true;
                        if (this.isShow) {
                          azureMLRecommendations.start(
                            'ZGVsbHNvZnR3YXJlOTkjb3V0bG9vay5jb206R1pWb01vSXlPeEVjaVdJVjkyRDJCV0VLc21FMjJDenpzSXl6RjJYdDdUbw==',
                            this.whichModelId
                          );
                          var itemId = 'us_19_en_dhs_' + this.getUrlParam('oc');
                          console.log('showing fbt recommendations');
                          this.layoutViews = [];
                          var recommendationCollection = this.getRecommendationCollection(itemId);
                          var appLayoutView = new AppLayoutView({
                            model: recommendationCollection,
                            itemId: itemId,
                            container: this.container,
                          });
                          this.layoutViews.push(appLayoutView);
                        } else {
                          console.log('not showing inline recommendations');
                          if (typeof window.Persona_industryTargetHomepage === 'function') {
                            window.Persona_industryTargetHomepage(
                              'AzureML-Recs-ControlGroup-NotDisplayed'
                            );
                          }
                        }
                      },
                      getRecommendationCollection: function (itemId) {
                        var collection = new RecommendationCollection({
                          container: this.container,
                        });
                        collection.url =
                          this.model.url() +
                          "'" +
                          this.whichModelId +
                          "'&itemIds='" +
                          itemId +
                          "'";
                        collection.fetch();
                        return collection;
                      },
                      getUrlParam: function (sParam) {
                        var sPageURL = window.location.search.substring(1);
                        var sURLVariables = sPageURL.split('&');
                        for (var i = 0; i < sURLVariables.length; i++) {
                          var sParameterName = sURLVariables[i].split('=');
                          if (sParameterName[0] == sParam) {
                            return sParameterName[1];
                          }
                        }
                        return null;
                      },
                      render: function () {
                        var that = this;
                        if (this.isShow) {
                          var matchedView = that.layoutViews.shift();
                          $('.candyAislePriceSummaryContainer')
                            .first()
                            .append(matchedView.render().$el);
                        }
                      },
                    });
                  })(
                    dellpoc.lib.jQuery,
                    dellpoc.lib._,
                    dellpoc.lib.Backbone,
                    dellpoc.lib.Marionette,
                    dellpoc.frequentlyboughttogether.models.RecommendationCollection,
                    dellpoc.frequentlyboughttogether.views.AppLayoutView
                  );
                  (function () {
                    var $, FrequentlyBoughtTogether, jQuery, _;
                    _ = dellpoc.lib._;
                    $ = jQuery = dellpoc.lib.jQuery;
                    FrequentlyBoughtTogether = (function () {
                      function FrequentlyBoughtTogether () {}
                      FrequentlyBoughtTogether.prototype.loaded = false;
                      FrequentlyBoughtTogether.prototype.initialize = function () {
                        dellpoc.setup_containers_namespace(
                          'dellpoc.frequentlyboughttogether',
                          dellpoc.frequentlyboughttogether.models.Collection,
                          null,
                          dellpoc.frequentlyboughttogether.views.AppMediatorView,
                          null
                        );
                        this.loaded = true;
                        dellpoc.frequentlyboughttogether.app = this;
                      };
                      return FrequentlyBoughtTogether;
                    })();
                    dellpoc.strategies.push(new FrequentlyBoughtTogether());
                  }.call(this));
                }
              };
              if (!dellpoc.is_chromext_available()) {
                dellpoc.init_start_chain();
                dellpoc.lib.jQuery(function () {
                  dellpoc.onready_chain_callback_queue_add(dellpoc.initialize);
                  dellpoc.ready();
                });
              }
            } else {
              dellpoc.lib.jQuery(function () {
                dellpoc.testing.load_script();
              });
            }
          }
        }.apply(this, arguments);
      } finally {
        if ($___old_7e73c0935806d58d)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_7e73c0935806d58d
          ));
      }
    }, 0);
  })();
}
